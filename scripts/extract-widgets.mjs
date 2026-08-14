#!/usr/bin/env node
/**
 * extract-widgets.mjs — the data backbone for the "second brain."
 *
 * Walks content/posts/*.md, pulls every fenced ```widget:<type>``` block, and
 * emits per-widget JSON snapshots to data/widgets/{calorie,workout,activity,time,todo,sleep}.json.
 *
 * These JSON files are the portable seam: they're the "database" today (read by
 * the /health and /workouts pages) and the migration artifact tomorrow (their
 * shape is the future Postgres table shape). Keep this schema stable.
 *
 * Dates come from the FILENAME (YYYY-MM-DD-*.md), not frontmatter — recent
 * journal entries have no frontmatter at all.
 *
 * Run: node scripts/extract-widgets.mjs   (also wired into `npm run refresh`)
 * Deps: js-yaml (already present via gray-matter). No new install needed.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const POSTS_DIR = path.join(ROOT, 'content/posts');
const OUT_DIR = path.join(ROOT, 'data/widgets');
const PROFILE_PATH = path.join(ROOT, 'data/profile.yml');

const DATE_RE = /^(\d{4}-\d{2}-\d{2})-/;
const WIDGET_RE = /```widget:([a-z]+)\n([\s\S]*?)```/g;

const round = (n) => Math.round(n);
const round1 = (n) => Math.round(n * 10) / 10;
// sleep durations land on quarter hours (7.25, 7.75), which round1 would flatten
const round2 = (n) => Math.round(n * 100) / 100;
const sum = (arr, f) => arr.reduce((a, x) => a + f(x), 0);
// Epley estimated 1RM: weight * (1 + reps/30)
const epley = (weight, reps) => weight * (1 + reps / 30);

function parseWidgetsFromFile(filePath, date) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const found = [];
  let m;
  WIDGET_RE.lastIndex = 0;
  while ((m = WIDGET_RE.exec(raw)) !== null) {
    const [, type, body] = m;
    let data;
    try {
      data = yaml.load(body);
    } catch (err) {
      console.warn(`  ! ${path.basename(filePath)}: failed to parse widget:${type} — ${err.message}`);
      continue;
    }
    found.push({ type, data });
  }
  return found;
}

function buildCalorieEntry(date, data, sourceId) {
  const rawItems = data.items || [];
  // Sodium was added to the schema later than calories/protein. Only report a day
  // total when at least one item actually carries it, so untracked days render as
  // "—" on /health rather than a misleading 0 mg.
  const sodiumTracked = rawItems.some((it) => it.sodium != null);
  const items = rawItems.map((it) => ({
    food: it.food,
    amount: it.amount ?? null,
    calories: Number(it.calories) || 0,
    protein: Number(it.protein) || 0,
    sodium: it.sodium != null ? Number(it.sodium) || 0 : null,
  }));
  return {
    date,
    person: data.person || 'Beau',
    dayType: data.day_type || null, // low | steps_10k | training
    items,
    totals: {
      calories: round(sum(items, (i) => i.calories)),
      protein: round(sum(items, (i) => i.protein) * 10) / 10,
      sodium: sodiumTracked ? round(sum(items, (i) => i.sodium || 0)) : null,
    },
    note: data.note || null,
    sourceId,
  };
}

// widget:activity — energy expenditure for the day, in real increments.
// Covers everything that burns: lifting sessions, runs, walks, court time. This is
// the input to the computed calorie target (base_tdee + burn - deficit), which is
// why lifting appears here as well as in widget:workout — that one tracks sets and
// 1RM progression, this one tracks energy out.
function buildActivityEntry(date, data, sourceId) {
  const activities = (data.activities || []).map((a) => ({
    activity: a.activity,
    duration: a.duration ?? null,
    burn: Number(a.burn) || 0,
    estimated: a.estimated !== false, // default true; set `estimated: false` for device-measured burn
  }));
  return {
    date,
    person: data.person || 'Beau',
    activities,
    totalBurn: round(sum(activities, (a) => a.burn)),
    steps: data.steps != null ? Number(data.steps) || 0 : null,
    note: data.note || null,
    sourceId,
  };
}

// widget:timelog — where the day's hours actually went.
//
// Two axes on purpose. `project` is which bucket of the life the hour belongs to;
// `category` is what kind of work it was. Keeping them separate is what lets you ask
// both "how much did Dugout Edge get this week?" and "how much of that was building
// versus talking about building?" — and the second question is the whole point of
// tracking. `deep` is the analogue of billable/non-billable in a normal time tracker:
// uninterrupted focused creation, as opposed to email, admin, and context-switching.
//
// `exploration` is deliberately its own project rather than a Dugout Edge category,
// so that hours spent on new ideas can't hide inside "product development."
function buildTimeEntry(date, data, sourceId) {
  const entries = (data.entries || []).map((e) => ({
    project: e.project || 'personal',
    category: e.category || null,
    hours: Number(e.hours) || 0,
    note: e.note ?? null,
    deep: e.deep === true, // default false; only set true for focused creation blocks
  }));
  const bucketBy = (keyFn) => {
    const out = {};
    for (const e of entries) {
      const k = keyFn(e);
      if (!k) continue;
      out[k] = (out[k] || 0) + e.hours;
    }
    // round once at the end — rounding per accumulation step compounds the error
    for (const k of Object.keys(out)) out[k] = round1(out[k]);
    return out;
  };
  return {
    date,
    person: data.person || 'Beau',
    entries,
    totalHours: round1(sum(entries, (e) => e.hours)),
    byProject: bucketBy((e) => e.project),
    byCategory: bucketBy((e) => e.category),
    // deep hours are reported across all projects; slice by project via `entries` if needed
    deepHours: round1(sum(entries.filter((e) => e.deep), (e) => e.hours)),
    note: data.note || null,
    sourceId,
  };
}

// widget:sleep — wake time and sleep duration.
//
// Deliberately NOT a widget:timelog entry. The time log answers "where did my hours
// go?", and sleep is not an hour spent on a project — folding it in would corrupt
// totalHours and byProject, and would break the "don't force the day to 24 hours"
// rule the time log depends on. Sleep is a state the day starts in, so it lives
// alongside widget:activity as a physiological input, joinable on `date`.
//
// `bedtime` is derived (wake - hours) rather than narrated, because Beau reliably
// knows when he woke up and roughly how long he slept, but rarely notes when he
// actually fell asleep.
function buildSleepEntry(date, data, sourceId) {
  const hours = data.hours != null ? round2(Number(data.hours) || 0) : null;
  const wake = data.wake != null ? String(data.wake) : null;
  let bedtime = null;
  const m = wake && wake.match(/^(\d{1,2}):(\d{2})$/);
  if (m && hours != null) {
    const wakeMin = Number(m[1]) * 60 + Number(m[2]);
    // wrap into [0,1440) so a pre-midnight bedtime comes out as e.g. "23:45", not negative
    const bedMin = (((wakeMin - Math.round(hours * 60)) % 1440) + 1440) % 1440;
    const pad = (n) => String(n).padStart(2, '0');
    bedtime = `${pad(Math.floor(bedMin / 60))}:${pad(bedMin % 60)}`;
  }
  return {
    date,
    person: data.person || 'Beau',
    wake,
    hours,
    bedtime,
    quality: data.quality ?? null, // optional 1-5 self-rating; null when not narrated
    note: data.note || null,
    sourceId,
  };
}

// widget:todo — the day's task list. Mirrors the human GitHub-checkbox list
// (`- [ ]` / `- [x]`) that sits above it; `done` ⇔ `[x]`.
function buildTodoEntry(date, data, sourceId) {
  const items = (data.items || []).map((it) => ({
    text: it.text,
    done: it.done === true,
  }));
  return {
    date,
    person: data.person || 'Beau',
    items,
    counts: {
      open: items.filter((it) => !it.done).length,
      done: items.filter((it) => it.done).length,
    },
    note: data.note || null,
    sourceId,
  };
}

// Attach the day's calorie target and deficit to each calorie entry.
// Target resolution mirrors data/profile.yml: preferred is the computed form
// (base_tdee + the day's logged activity burn - clean_day_deficit); when no burn
// is logged for that date+person, fall back to the coarse day_type bucket.
// `deficit` = consumed - target: NEGATIVE = deficit (under target, losing weight),
// positive = surplus. Sign convention per Beau, 2026-08-08.
function attachCalorieTargets(calorie, activity) {
  let profile;
  try {
    profile = yaml.load(fs.readFileSync(PROFILE_PATH, 'utf8'));
  } catch (err) {
    console.warn(`  ! could not read ${PROFILE_PATH} — skipping targets/deficits (${err.message})`);
    return;
  }
  const people = profile?.people || {};
  for (const day of calorie) {
    const p = people[(day.person || '').toLowerCase()];
    if (!p) continue;
    const burn = activity
      .filter((a) => a.date === day.date && a.person === day.person)
      .reduce((acc, a) => acc + (a.totalBurn || 0), 0);
    let target = null;
    let targetSource = null;
    if (burn > 0 && p.energy?.base_tdee != null && p.clean_day_deficit != null) {
      target = p.energy.base_tdee + burn - p.clean_day_deficit;
      targetSource = 'computed';
    } else if (p.calorie_targets) {
      target = p.calorie_targets[day.dayType || 'low'] ?? null;
      if (target != null) targetSource = 'day_type';
    }
    day.targetCalories = target != null ? round(target) : null;
    day.targetSource = targetSource;
    day.deficit = target != null ? round(day.totals.calories - target) : null;
  }
}

function buildWorkoutEntry(date, data, sourceId) {
  const lifters = (data.lifters || []).map((lifter) => {
    const lifts = (lifter.lifts || []).map((lift) => {
      const sets = (lift.sets || []).map((s) => ({
        weight: Number(s.weight) || 0,
        reps: Number(s.reps) || 0,
        failure: !!s.failure,
      }));
      // top set = the set with the highest estimated 1RM
      let top = sets[0] || null;
      for (const s of sets) {
        if (top && epley(s.weight, s.reps) > epley(top.weight, top.reps)) top = s;
      }
      return {
        exercise: lift.exercise,
        equipment: lift.equipment || 'barbell',
        sets,
        topSet: top ? { weight: top.weight, reps: top.reps, failure: top.failure } : null,
        est1RM: top ? round(epley(top.weight, top.reps)) : null,
        // volume = sum(weight * reps); no dumbbell doubling (matches the hand-logged convention)
        volume: round(sum(sets, (s) => s.weight * s.reps)),
      };
    });
    return {
      name: lifter.name,
      lifts,
      sessionVolume: round(sum(lifts, (l) => l.volume)),
    };
  });
  return { date, lifters, sourceId };
}

function main() {
  if (!fs.existsSync(POSTS_DIR)) {
    console.error(`No posts dir at ${POSTS_DIR}`);
    process.exit(1);
  }
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'));

  const calorie = [];
  const workout = [];
  const activity = [];
  const time = [];
  const todo = [];
  const sleep = [];

  for (const file of files) {
    const dm = file.match(DATE_RE);
    if (!dm) continue; // skip undated files (can't place them in time)
    const date = dm[1];
    const sourceId = file.replace(/\.md$/, '');
    const widgets = parseWidgetsFromFile(path.join(POSTS_DIR, file), date);
    for (const { type, data } of widgets) {
      if (type === 'calorielog') calorie.push(buildCalorieEntry(date, data, sourceId));
      else if (type === 'workout') workout.push(buildWorkoutEntry(date, data, sourceId));
      else if (type === 'activity') activity.push(buildActivityEntry(date, data, sourceId));
      else if (type === 'timelog') time.push(buildTimeEntry(date, data, sourceId));
      else if (type === 'todo') todo.push(buildTodoEntry(date, data, sourceId));
      else if (type === 'sleep') sleep.push(buildSleepEntry(date, data, sourceId));
      else console.warn(`  ? unknown widget type "${type}" in ${file}`);
    }
  }

  attachCalorieTargets(calorie, activity);

  calorie.sort((a, b) => a.date.localeCompare(b.date));
  workout.sort((a, b) => a.date.localeCompare(b.date));
  activity.sort((a, b) => a.date.localeCompare(b.date));
  time.sort((a, b) => a.date.localeCompare(b.date));
  todo.sort((a, b) => a.date.localeCompare(b.date));
  sleep.sort((a, b) => a.date.localeCompare(b.date));

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, 'calorie.json'), JSON.stringify(calorie, null, 2) + '\n');
  fs.writeFileSync(path.join(OUT_DIR, 'workout.json'), JSON.stringify(workout, null, 2) + '\n');
  fs.writeFileSync(path.join(OUT_DIR, 'activity.json'), JSON.stringify(activity, null, 2) + '\n');
  fs.writeFileSync(path.join(OUT_DIR, 'time.json'), JSON.stringify(time, null, 2) + '\n');
  fs.writeFileSync(path.join(OUT_DIR, 'todo.json'), JSON.stringify(todo, null, 2) + '\n');
  fs.writeFileSync(path.join(OUT_DIR, 'sleep.json'), JSON.stringify(sleep, null, 2) + '\n');

  console.log(`✓ Extracted ${calorie.length} calorie day(s) → data/widgets/calorie.json`);
  console.log(`✓ Extracted ${workout.length} workout day(s) → data/widgets/workout.json`);
  console.log(`✓ Extracted ${activity.length} activity day(s) → data/widgets/activity.json`);
  console.log(`✓ Extracted ${time.length} time day(s) → data/widgets/time.json`);
  console.log(`✓ Extracted ${todo.length} todo day(s) → data/widgets/todo.json`);
  console.log(`✓ Extracted ${sleep.length} sleep day(s) → data/widgets/sleep.json`);
}

main();
