#!/usr/bin/env node
/**
 * grocery-plan.mjs — "how much should I buy?", computed rather than estimated.
 *
 * Sizes a grocery buy so that eating EVERYTHING PURCHASED still lands on the cut
 * plan. That's the invariant the grocery-planning skill calls "impossible to
 * overeat": if the only food in the house sums to the week's calorie envelope,
 * overeating requires going outside the plan.
 *
 * Reads:
 *   data/profile.yml          — targets, protein aims, deficits, sodium limits
 *   data/grocery-staples.yml  — per-unit nutrition, package sizes, prices, roles
 *
 * Modes:
 *   --default            build the default weekly basket, scaled to the envelope
 *   --plan <file.yml>    size a buy from recipes
 *   --assess <file.yml>  score a list/receipt you already have
 *
 * Examples:
 *   node scripts/grocery-plan.mjs --default --days 5 --people beau
 *   node scripts/grocery-plan.mjs --default --days 5 --people beau,abby --budget 220
 *   node scripts/grocery-plan.mjs --plan plans/week-2026-08-10.yml
 *   node scripts/grocery-plan.mjs --assess plans/receipt-2026-08-09.yml
 *
 * Deps: js-yaml (already present via gray-matter). No new install needed.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PROFILE_PATH = path.join(ROOT, 'data/profile.yml');
const STAPLES_PATH = path.join(ROOT, 'data/grocery-staples.yml');

// How a day's calories split across meals. Used to prorate the envelope when a
// buy only has to cover some meals (e.g. lunches only) rather than a whole day.
const MEAL_SHARE = { breakfast: 0.25, lunch: 0.35, dinner: 0.40 };

// Beau's real recent pattern, per the grocery-planning skill: a 5-weekday week
// is about 2 training days + 1 steps day + 2 low days. Override with --mix.
const DEFAULT_MIX = { training: 2, steps_10k: 1, low: 2 };

// Roles the solver is allowed to scale when closing a calorie gap. Protein is
// never on this list — underbuying protein is what causes the snacking that
// breaks the plan. Produce isn't either: greens are calorically free.
const DIAL_ROLES = new Set(['carb', 'fat', 'flex']);

// Grazeables (bread, snack carbs, fruit by the pound, nut butter) are capped at
// this share of the envelope. This is where "bought too much" becomes "ate too much."
const GRAZEABLE_CAP = 0.25;

const round = (n, d = 0) => { const f = 10 ** d; return Math.round(n * f) / f; };
const money = (n) => `$${n.toFixed(2)}`;
const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));

// ---------------------------------------------------------------------------
// args
// ---------------------------------------------------------------------------
function parseArgs(argv) {
  const a = {
    mode: 'default', days: 5, people: ['beau'],
    meals: ['breakfast', 'lunch', 'dinner'],
    mix: null, out: 0, budget: null, restock: false, json: false, file: null,
  };
  for (let i = 2; i < argv.length; i++) {
    const k = argv[i];
    const next = () => argv[++i];
    if (k === '--default') a.mode = 'default';
    else if (k === '--plan') { a.mode = 'plan'; a.file = next(); }
    else if (k === '--assess') { a.mode = 'assess'; a.file = next(); }
    else if (k === '--days') a.days = Number(next());
    else if (k === '--people') a.people = next().split(',').map((s) => s.trim().toLowerCase());
    else if (k === '--meals') a.meals = next().split(',').map((s) => s.trim().toLowerCase());
    else if (k === '--out') a.out = Number(next());
    else if (k === '--budget') a.budget = Number(next());
    else if (k === '--mix') {
      a.mix = {};
      for (const part of next().split(',')) {
        const [t, n] = part.split('=');
        a.mix[t.trim()] = Number(n);
      }
    } else if (k === '--restock') a.restock = true;
    else if (k === '--json') a.json = true;
    else if (k === '--help' || k === '-h') { usage(); process.exit(0); }
    else throw new Error(`unknown flag: ${k}`);
  }
  return a;
}

function usage() {
  console.log(`
grocery-plan — size a grocery buy against the cut plan

  --default              build the default weekly basket (data/grocery-staples.yml)
  --plan <file.yml>      size a buy from recipes
  --assess <file.yml>    score a list or receipt you already have

  --days N               days the buy must cover        (default 5)
  --people a,b           beau | abby | beau,abby        (default beau)
  --meals b,l,d          meals covered per day          (default all three)
  --mix training=2,low=2 day-type mix                   (default 2 training/1 steps/2 low)
  --out N                meals eaten out (subtracted from the envelope)
  --budget N             flag if the basket costs more than this
  --restock              include pantry items (rice, oil) in the buy
  --json                 machine-readable output
`);
}

// ---------------------------------------------------------------------------
// envelope — how many calories the buy is allowed to contain
// ---------------------------------------------------------------------------
function buildEnvelope(profile, args) {
  const coverage = args.meals.reduce((s, m) => s + (MEAL_SHARE[m] ?? 0), 0);
  if (coverage === 0) throw new Error(`no valid meals in --meals (use breakfast/lunch/dinner)`);

  // Normalize the day mix to the requested day count.
  const mix = args.mix || DEFAULT_MIX;
  const mixTotal = Object.values(mix).reduce((s, n) => s + n, 0);
  const scaled = Object.fromEntries(
    Object.entries(mix).map(([t, n]) => [t, (n / mixTotal) * args.days]),
  );

  const per = {};
  for (const id of args.people) {
    const p = profile.people[id];
    if (!p) throw new Error(`unknown person "${id}" — not in data/profile.yml`);
    const targets = p.calorie_targets;

    let daily = 0;
    for (const [type, count] of Object.entries(scaled)) {
      const t = targets[type];
      if (t == null) throw new Error(`unknown day type "${type}" for ${id}`);
      daily += t * count;
    }

    const envelopeRaw = daily * coverage;
    // Meals out come off the top — food eaten elsewhere isn't food to buy.
    const perMeal = envelopeRaw / (args.days * args.meals.length);
    const envelope = Math.max(0, envelopeRaw - args.out * perMeal);

    // The deficit is the shock absorber. Eating the whole basket at the
    // maintenance line means no fat gain, just a slower cut.
    const maintenance = envelope + (p.clean_day_deficit || 0) * args.days * coverage;

    per[id] = {
      name: p.name || id,
      envelope,
      maintenance,
      deficitSlack: (p.clean_day_deficit || 0) * args.days * coverage,
      proteinAim: (p.protein?.aim_g || 0) * args.days * coverage,
      proteinFloor: (p.protein?.floor_g || 0) * args.days * coverage,
      sodiumLimit: p.sodium?.limit_mg ? p.sodium.limit_mg * args.days * coverage : null,
    };
  }

  const total = (k) => Object.values(per).reduce((s, x) => s + (x[k] || 0), 0);
  return {
    coverage,
    dayMix: scaled,
    perPerson: per,
    envelope: total('envelope'),
    maintenance: total('maintenance'),
    deficitSlack: total('deficitSlack'),
    proteinAim: total('proteinAim'),
    proteinFloor: total('proteinFloor'),
    // Only people with a stated limit contribute; Abby has none in profile.yml.
    sodiumLimit: Object.values(per).some((x) => x.sodiumLimit != null)
      ? Object.values(per).reduce((s, x) => s + (x.sodiumLimit || 0), 0)
      : null,
    // A shared basket's sodium can't be judged against one person's limit. Split
    // the total by envelope share so Beau is scored on the portion he eats.
    sodiumShare: (() => {
      const withLimit = Object.values(per).filter((x) => x.sodiumLimit != null);
      if (!withLimit.length) return null;
      const tot = total('envelope');
      return tot > 0 ? withLimit.reduce((s, x) => s + x.envelope, 0) / tot : 1;
    })(),
    sodiumWho: Object.values(per).filter((x) => x.sodiumLimit != null).map((x) => x.name).join(' + '),
  };
}

// ---------------------------------------------------------------------------
// basket assembly
// ---------------------------------------------------------------------------
const nutrition = (item, units) => ({
  calories: item.per_unit.calories * units,
  protein: (item.per_unit.protein_g || 0) * units,
  sodium: (item.per_unit.sodium_mg || 0) * units,
});

/** Default basket: per-person shares from the validated shop, scaled to days/people. */
function buildDefaultLines(staples, profile, args, env) {
  const basket = staples.default_basket || {};

  // The basket is sized for Beau / 5 days / full coverage. Everyone else scales
  // against that reference by their own envelope, so Abby's smaller targets buy
  // proportionally less and a 3-day window buys 3/5 as much.
  const beauWeek = (() => {
    const p = profile.people.beau;
    const mix = args.mix || DEFAULT_MIX;
    const mixTotal = Object.values(mix).reduce((s, n) => s + n, 0);
    let daily = 0;
    for (const [t, n] of Object.entries(mix)) daily += p.calorie_targets[t] * (n / mixTotal);
    return daily * 5; // the basket's reference: Beau, 5 days, full coverage
  })();

  const lines = [];
  for (const [id, spec] of Object.entries(basket)) {
    const item = staples.staples[id];
    if (!item) { console.warn(`  ! default_basket references unknown item "${id}" — skipped`); continue; }
    if (spec.pantry && !args.restock) continue;

    let units = 0;
    for (const person of args.people) {
      units += spec.qty * (env.perPerson[person].envelope / beauWeek);
    }
    if (units > 0) lines.push({ id, item, neededUnits: units });
  }
  return lines;
}

/** Recipe-driven: sum ingredient demand across every meal instance in the window. */
function buildPlanLines(staples, spec, args) {
  // Items the default basket calls pantry are assumed already in the kitchen: a
  // recipe using 3 tbsp of olive oil shouldn't put a $13 bottle — and 3,800
  // uneaten calories — on a five-day shopping list. They still count toward what
  // gets eaten, they just aren't re-bought unless --restock says so.
  const pantryIds = new Set(
    Object.entries(staples.default_basket || {})
      .filter(([, v]) => v.pantry).map(([k]) => k),
  );
  const demand = new Map();
  for (const r of spec.recipes || []) {
    const people = (r.people || args.people).filter((p) => args.people.includes(p));
    if (!people.length) continue;
    const times = (r.days ?? args.days) * (r.servings_per_person_per_day ?? 1);
    for (const ing of r.ingredients || []) {
      const item = staples.staples[ing.item];
      if (!item) { console.warn(`  ! recipe "${r.name}" references unknown item "${ing.item}" — skipped`); continue; }
      // Raw purchase weight, not plate weight: 1 lb raw chicken ≠ 1 lb cooked.
      const raw = item.yield_cooked ? ing.units / item.yield_cooked : ing.units;
      const add = raw * times * people.length;
      demand.set(ing.item, (demand.get(ing.item) || 0) + add);
    }
  }
  return [...demand].map(([id, neededUnits]) => ({
    id, item: staples.staples[id], neededUnits,
    onHand: pantryIds.has(id) && !args.restock,
  }));
}

/**
 * A plain list/receipt to score, no solving.
 * `share` splits an item across people — a 1 lb salmon fillet cooked for two is
 * `share: 0.5` against Beau's envelope, matching how the baseline shop was read.
 */
function buildAssessLines(staples, spec) {
  return (spec.items || []).map((row) => {
    const item = staples.staples[row.item];
    if (!item) throw new Error(`unknown item "${row.item}" in assess file`);
    return {
      id: row.item, item, fixed: true,
      neededUnits: row.units * (row.share ?? 1),
      boughtUnits: row.units,
    };
  });
}

/**
 * Close the gap between what the basket contains and what the envelope allows,
 * by scaling only the dial roles. Protein and produce are held.
 */
function fitToEnvelope(lines, env, { allowScaleUp = true } = {}) {
  const cal = (l) => l.item.per_unit.calories * l.neededUnits;
  const prot = (l) => (l.item.per_unit.protein_g || 0) * l.neededUnits;
  const notes = [];

  // STEP 1 — buy protein UP to the aim before anything else. The skill's rule is
  // "buy protein to the aim, carbs to the remainder"; underbuying protein is what
  // forces the 9pm snacking that actually breaks the plan. Protein is the one
  // column allowed to grow, and the only one never allowed to shrink.
  const proteinLines = lines.filter((l) => l.item.role === 'protein');
  const haveProtein = lines.reduce((s, l) => s + prot(l), 0);
  if (proteinLines.length && haveProtein < env.proteinAim) {
    const fromProtein = proteinLines.reduce((s, l) => s + prot(l), 0);
    if (fromProtein > 0) {
      const needed = env.proteinAim - (haveProtein - fromProtein);
      const kp = clamp(needed / fromProtein, 1, 2.5);
      for (const l of proteinLines) l.neededUnits *= kp;
      notes.push(`Protein was ${round(haveProtein)} g against a ${round(env.proteinAim)} g aim — scaled the protein anchors to ${round(kp * 100)}%.`);
    }
  }

  const held = lines.filter((l) => !DIAL_ROLES.has(l.item.role));
  const dials = lines.filter((l) => DIAL_ROLES.has(l.item.role));

  const heldCal = held.reduce((s, l) => s + cal(l), 0);
  const dialCal = dials.reduce((s, l) => s + cal(l), 0);
  const room = env.envelope - heldCal;

  let k = 1;
  if (dialCal > 0 && room > 0) {
    // Explicit recipes are a spec, not a starting point — never inflate them to
    // fill the envelope. Report the headroom instead and let him decide.
    k = clamp(room / dialCal, 0.5, allowScaleUp ? 1.5 : 1);
    if (k < 1) notes.push(`Scaled carbs/fats/fruit to ${round(k * 100)}% to fit the envelope; protein and produce held.`);
    else if (k > 1) notes.push(`Envelope had room — scaled carbs/fats/fruit up to ${round(k * 100)}%.`);
    else if (!allowScaleUp && room - dialCal > 300) {
      notes.push(`These recipes fill ${round(env.envelope - (room - dialCal))} of the ${round(env.envelope)} cal envelope — about ${round(room - dialCal)} cal of headroom left. Recipes kept as written.`);
    }
    for (const l of dials) l.neededUnits *= k;
  } else if (room <= 0) {
    notes.push(`Protein + produce alone (${round(heldCal)} cal) already fill the envelope — carbs/fats cut to the 50% floor. Check the day mix or add activity.`);
    for (const l of dials) l.neededUnits *= 0.5;
  }

  // Then enforce the grazeable cap specifically — the skill's rule is that the
  // overeat risk lives in this column, so it gets trimmed beyond the flat scale.
  const grazeCal = () => lines.filter((l) => l.item.grazeable).reduce((s, l) => s + cal(l), 0);
  const cap = env.envelope * GRAZEABLE_CAP;
  const gc = grazeCal();
  if (gc > cap) {
    // Trim slightly under the cap: whole-package rounding downstream only ever
    // adds calories back, and landing at 26% right after "trimmed to 25%" reads
    // as a bug rather than as the loaf being indivisible.
    const g = (cap * 0.94) / gc;
    for (const l of lines) if (l.item.grazeable) l.neededUnits *= g;
    notes.push(`Grazeables were ${round(gc)} cal (${round((gc / env.envelope) * 100)}% of envelope) — trimmed to the ${round(GRAZEABLE_CAP * 100)}% cap (${round(cap)} cal).`);
  }
  return notes;
}

/**
 * Turn needed units into whole packages, then split the result into what the
 * week actually eats and what stays on the shelf.
 *
 * This split is the heart of the model. A 16 oz jar of peanut butter is not
 * 3,040 calories of this-week risk — the plan draws 6 tbsp (~570 cal) and the
 * rest is pantry stock that carries into next month. Counting the whole jar
 * against a 5-day envelope would make every realistic basket look LEAKY.
 *
 * The exception is grazeables. An open jar of peanut butter IS accessible in a
 * way a sealed bag of rice is not, so grazeable carry-over counts as exposure
 * even though it isn't allocated to a meal. That is exactly the "bought too
 * much becomes ate too much" failure the cap exists to prevent.
 */
function priceAndRound(lines) {
  for (const l of lines) {
    const pkg = l.item.package || { units: 1, price_usd: 0 };
    const perPkgUnits = pkg.units || 1;

    if (l.onHand) {
      // Already in the kitchen: the plan eats it, but it isn't on this receipt.
      l.purchasedUnits = l.neededUnits;
      l.packages = 0;
      l.cost = 0;
      l.qtyLabel = `on hand (${round(l.neededUnits, 2)} ${l.item.unit})`;
    } else if (l.fixed) {
      // Assessing something already bought — take the quantities as given and
      // don't round anything. The receipt is the receipt.
      l.purchasedUnits = l.neededUnits;
      l.packages = round((l.boughtUnits ?? l.neededUnits) / perPkgUnits, 2);
      l.cost = ((l.boughtUnits ?? l.neededUnits) / perPkgUnits) * pkg.price_usd;
      const share = l.boughtUnits && l.boughtUnits !== l.neededUnits ? ' (½ share)' : '';
      l.qtyLabel = /\blb\b/.test(l.item.unit)
        ? `${round(l.boughtUnits ?? l.neededUnits, 2)} ${l.item.unit}${share}`
        : `${round(l.boughtUnits ?? l.neededUnits, 1)} ${l.item.unit}${share}`;
    } else if (pkg.by_weight) {
      // Sold by weight (or individually priced): buy the exact amount, no overage.
      // `price_usd` is per PACKAGE unit — per lb when units is "cups per lb".
      // A unit measured in lb is continuous (1.36 lb of chicken is a real ask);
      // a count-priced item like an apple has to come out whole.
      const wholeish = perPkgUnits === 1 && !/\blb\b/.test(l.item.unit);
      l.purchasedUnits = wholeish ? Math.max(1, Math.round(l.neededUnits)) : l.neededUnits;
      l.packages = round(l.purchasedUnits / perPkgUnits, 2);
      l.cost = (l.purchasedUnits / perPkgUnits) * pkg.price_usd;
      l.qtyLabel = wholeish
        ? `${l.purchasedUnits} × ${pkg.label}`
        : /\blb\b/.test(l.item.unit)
          ? `${round(l.purchasedUnits, 2)} ${l.item.unit}`
          : `${round(l.purchasedUnits / perPkgUnits, 2)} lb (${round(l.purchasedUnits, 1)} ${l.item.unit})`;
    } else if (perPkgUnits === 1) {
      // Individually bought (an avocado, a can): round to nearest, don't always ceil.
      l.packages = Math.max(1, Math.round(l.neededUnits));
      l.purchasedUnits = l.packages;
      l.cost = l.packages * pkg.price_usd;
      l.qtyLabel = `${l.packages} × ${pkg.label}`;
    } else {
      l.packages = Math.max(1, Math.ceil(l.neededUnits / perPkgUnits - 1e-9));
      l.purchasedUnits = l.packages * perPkgUnits;
      l.cost = l.packages * pkg.price_usd;
      l.qtyLabel = `${l.packages} × ${pkg.label}`;
    }

    const drawn = Math.min(l.neededUnits, l.purchasedUnits);
    l.allocated = nutrition(l.item, drawn);
    l.stock = nutrition(l.item, Math.max(0, l.purchasedUnits - drawn));
    // What this line puts within reach during the window.
    l.exposedCal = l.allocated.calories + (l.item.grazeable ? l.stock.calories : 0);
    l.n = nutrition(l.item, l.purchasedUnits); // full package, for the "in the house" column
  }
  return lines;
}

const totals = (lines) => lines.reduce((t, l) => ({
  // Envelope math runs on what the week is exposed to, not the receipt.
  calories: t.calories + l.exposedCal,
  protein: t.protein + l.allocated.protein,
  sodium: t.sodium + l.allocated.sodium,
  cost: t.cost + l.cost,
  allocatedCal: t.allocatedCal + l.allocated.calories,
  purchasedCal: t.purchasedCal + l.n.calories,
  carryCal: t.carryCal + l.stock.calories,
  // Only carry-over you can actually graze on counts as overage risk.
  overage: t.overage + (l.item.grazeable ? l.stock.calories : 0),
}), { calories: 0, protein: 0, sodium: 0, cost: 0, allocatedCal: 0, purchasedCal: 0, carryCal: 0, overage: 0 });

// ---------------------------------------------------------------------------
// verdict
// ---------------------------------------------------------------------------
function verdict(t, env, args, lines = []) {
  const checks = [];

  let tier;
  if (t.calories <= env.envelope) tier = 'SEALED';
  else if (t.calories <= env.maintenance) tier = 'SAFE';
  else tier = 'LEAKY';

  // Distinguish "you planned too much food" from "the smallest package you can
  // buy is bigger than this window needs." The second is not an overbuy — it's a
  // dozen eggs against a three-day list, and the fix is leftovers, not less food.
  const packagingBound = tier !== 'SEALED' && t.allocatedCal <= env.envelope;

  checks.push({
    name: 'Calorie envelope',
    pass: tier !== 'LEAKY' || packagingBound,
    detail: packagingBound
      ? `The plan itself draws ${round(t.allocatedCal)} cal — inside the ${round(env.envelope)} envelope. It only reads over because package minimums add ${round(t.calories - t.allocatedCal)} cal you can't buy your way out of (a dozen eggs against a short window). Treat the excess as next week's, not this week's.`
      : tier === 'SEALED'
      ? `${round(t.calories)} cal purchased ≤ ${round(env.envelope)} envelope — eating all of it lands ON the cut plan.`
      : tier === 'SAFE'
        ? `${round(t.calories)} cal purchased is over the ${round(env.envelope)} envelope but under the ${round(env.maintenance)} maintenance line — eating all of it slows the cut, it does not add fat.`
        : `${round(t.calories)} cal purchased EXCEEDS the ${round(env.maintenance)} maintenance line by ${round(t.calories - env.maintenance)} — this basket can itself cause a gain.`,
  });

  checks.push({
    name: 'Protein floor',
    pass: t.protein >= env.proteinFloor,
    detail: t.protein >= env.proteinAim
      ? `${round(t.protein)} g purchased ≥ ${round(env.proteinAim)} g aim.`
      : t.protein >= env.proteinFloor
        ? `${round(t.protein)} g purchased clears the ${round(env.proteinFloor)} g floor but is under the ${round(env.proteinAim)} g aim — add a protein anchor.`
        : `${round(t.protein)} g purchased is BELOW the ${round(env.proteinFloor)} g floor. Buy more protein; this is the one thing never to trim.`,
  });

  if (t.graze != null) {
    const share = t.graze / env.envelope;
    // A loaf of bread is indivisible — you cannot buy 0.9 of one. Allow 2pp of
    // slack so package granularity doesn't read as a planning failure.
    const within = share <= GRAZEABLE_CAP + 0.02;
    checks.push({
      name: 'Grazeable cap',
      pass: within,
      detail: `${round(t.graze)} cal of grazeables = ${round(share * 100)}% of the envelope (cap ${round(GRAZEABLE_CAP * 100)}%).`
        + (share > GRAZEABLE_CAP && within ? ' Within one package of the cap — the loaf is indivisible.' : '')
        + (!within ? ' Cut here first: this column is where "bought too much" becomes "ate too much."' : ''),
    });
  }

  if (env.sodiumLimit != null) {
    const share = env.sodiumShare ?? 1;
    const attributed = t.sodium * share;
    const over = attributed > env.sodiumLimit;
    // When sodium fails, the fix is almost always one or two items — name them
    // rather than making him scan the table for the ⚡ flags.
    const top = [...lines]
      .filter((l) => l.allocated.sodium > 0)
      .sort((a, b) => b.allocated.sodium - a.allocated.sodium)
      .slice(0, 3)
      .map((l) => `${l.item.name} ${round(l.allocated.sodium * share)}`)
      .join(', ');
    const scope = share < 0.999 ? `${env.sodiumWho}'s share — ${round(share * 100)}% of the basket — is ` : '';
    checks.push({
      name: 'Sodium',
      pass: !over,
      detail: `${scope}${round(attributed)} mg vs ${round(env.sodiumLimit)} mg allowed (${round(attributed / args.days)} mg/day spread evenly).`
        + (over ? ` Biggest carriers: ${top}. Swap one of these to clear it.` : ''),
    });
  }

  checks.push({
    name: 'Grazeable leftover',
    pass: t.overage <= env.deficitSlack,
    detail: t.overage <= env.deficitSlack
      ? `${round(t.overage)} cal of grazeable food left over past the plan's draw — absorbed by ${round(env.deficitSlack)} cal of deficit slack.`
      : `${round(t.overage)} cal of grazeable food sits above what the plan draws, exceeding the ${round(env.deficitSlack)} cal deficit slack — portion it out on shopping day or leave it at the store.`,
  });

  if (args.budget != null) {
    checks.push({
      name: 'Budget',
      pass: t.cost <= args.budget,
      detail: `${money(t.cost)} vs ${money(args.budget)} budget.`,
    });
  }

  return { tier, checks };
}

// ---------------------------------------------------------------------------
// render
// ---------------------------------------------------------------------------
function pad(s, w) { s = String(s); return s.length >= w ? s : s + ' '.repeat(w - s.length); }
function padL(s, w) { s = String(s); return s.length >= w ? s : ' '.repeat(w - s.length) + s; }

function render(lines, t, env, v, args) {
  const out = [];
  const who = args.people.map((p) => env.perPerson[p].name).join(' + ');
  out.push('');
  out.push(`GROCERY PLAN — ${who}, ${args.days} days, ${args.meals.join('/')}`);
  const mixStr = Object.entries(env.dayMix).filter(([, n]) => n > 0)
    .map(([k2, n]) => `${round(n, 1)}× ${k2}`).join(', ');
  out.push(`Day mix: ${mixStr}${args.out ? ` · ${args.out} meal(s) out` : ''}`);
  out.push('');

  const W = [34, 22, 9, 8, 7, 8];
  out.push(
    pad('Item', W[0]) + pad('Buy', W[1]) + padL('Cal', W[2]) +
    padL('Protein', W[3]) + padL('Na', W[4]) + padL('Cost', W[5]),
  );
  out.push('─'.repeat(W.reduce((a, b) => a + b, 0)));

  const order = { protein: 0, carb: 1, fat: 2, produce: 3, flex: 4 };
  const sorted = [...lines].sort((a, b) =>
    (order[a.item.role] ?? 9) - (order[b.item.role] ?? 9) || b.exposedCal - a.exposedCal);

  let lastRole = null;
  for (const l of sorted) {
    if (l.item.role !== lastRole) {
      out.push(`${l.item.role.toUpperCase()}`);
      lastRole = l.item.role;
    }
    const flags = [l.item.grazeable ? '△' : '', l.item.sodium_carrier ? '⚡' : ''].join('');
    // A "+N keeps" suffix marks calories bought but not drawn by this week's plan.
    const keeps = l.stock.calories >= 50 && !l.item.grazeable
      ? `  +${round(l.stock.calories)} keeps` : '';
    out.push(
      pad('  ' + l.item.name + (flags ? ' ' + flags : ''), W[0]) +
      pad(l.qtyLabel, W[1]) +
      padL(round(l.exposedCal), W[2]) +
      padL(round(l.allocated.protein) + 'g', W[3]) +
      padL(round(l.allocated.sodium), W[4]) +
      padL(money(l.cost), W[5]) + keeps,
    );
  }
  out.push('─'.repeat(W.reduce((a, b) => a + b, 0)));
  out.push(
    pad('TOTAL (this week)', W[0] + W[1]) + padL(round(t.calories), W[2]) +
    padL(round(t.protein) + 'g', W[3]) + padL(round(t.sodium), W[4]) + padL(money(t.cost), W[5]),
  );
  out.push('');
  out.push('△ grazeable (overeat risk)   ⚡ sodium carrier');
  out.push('');

  out.push(`ENVELOPE      ${round(env.envelope)} cal   (maintenance line ${round(env.maintenance)})`);
  out.push(`EXPOSED       ${round(t.calories)} cal   (${round(t.calories / args.days)} /day if spread evenly)`);
  out.push(`IN THE HOUSE  ${round(t.purchasedCal)} cal total on the receipt; ${round(t.carryCal)} of that keeps past this week`);
  out.push('');

  const badge = { SEALED: '✅ SEALED', SAFE: '🟡 SAFE', LEAKY: '🔴 LEAKY' }[v.tier];
  out.push(`VERDICT: ${badge}`);
  out.push('');
  for (const c of v.checks) {
    out.push(`  ${c.pass ? '✓' : '✗'} ${pad(c.name, 18)} ${c.detail}`);
  }
  out.push('');
  return out.join('\n');
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------
function main() {
  const args = parseArgs(process.argv);
  const profile = yaml.load(fs.readFileSync(PROFILE_PATH, 'utf8'));
  const staples = yaml.load(fs.readFileSync(STAPLES_PATH, 'utf8'));

  let spec = null;
  if (args.file) {
    spec = yaml.load(fs.readFileSync(path.resolve(ROOT, args.file), 'utf8'));
    // A plan file may carry its own window; CLI flags still win if passed.
    if (spec.days && !process.argv.includes('--days')) args.days = spec.days;
    if (spec.people && !process.argv.includes('--people')) args.people = spec.people;
    if (spec.meals && !process.argv.includes('--meals')) args.meals = spec.meals;
    if (spec.day_mix && !args.mix) args.mix = spec.day_mix;
  }

  const env = buildEnvelope(profile, args);

  let lines;
  if (args.mode === 'assess') lines = buildAssessLines(staples, spec);
  else if (args.mode === 'plan') lines = buildPlanLines(staples, spec, args);
  else lines = buildDefaultLines(staples, profile, args, env);

  if (!lines.length) throw new Error('no items in basket — check the plan file or default_basket');

  // Assess mode scores what's actually there; it must not silently resize it.
  const notes = args.mode === 'assess'
    ? []
    : fitToEnvelope(lines, env, { allowScaleUp: args.mode === 'default' });

  priceAndRound(lines);
  const t = totals(lines);
  t.graze = lines.filter((l) => l.item.grazeable).reduce((s, l) => s + l.exposedCal, 0);
  const v = verdict(t, env, args, lines);

  if (args.json) {
    console.log(JSON.stringify({
      window: { days: args.days, people: args.people, meals: args.meals, coverage: env.coverage },
      envelope: env, totals: t, verdict: v, notes,
      lines: lines.map((l) => ({
        id: l.id, name: l.item.name, role: l.item.role, buy: l.qtyLabel,
        packages: l.packages, units: round(l.purchasedUnits, 2),
        exposed_cal: round(l.exposedCal), allocated_cal: round(l.allocated.calories),
        carryover_cal: round(l.stock.calories), purchased_cal: round(l.n.calories),
        protein_g: round(l.allocated.protein, 1), sodium_mg: round(l.allocated.sodium),
        cost_usd: round(l.cost, 2), grazeable: !!l.item.grazeable,
      })),
    }, null, 2));
    return;
  }

  console.log(render(lines, t, env, v, args));
  if (notes.length) {
    console.log('SOLVER NOTES');
    for (const n of notes) console.log(`  · ${n}`);
    console.log('');
  }
}

try {
  main();
} catch (err) {
  console.error(`grocery-plan: ${err.message}`);
  process.exit(1);
}
