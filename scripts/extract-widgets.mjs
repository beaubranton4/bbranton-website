#!/usr/bin/env node
/**
 * extract-widgets.mjs — the data backbone for the "second brain."
 *
 * Walks content/posts/*.md, pulls every fenced ```widget:<type>``` block, and
 * emits per-widget JSON snapshots to data/widgets/{calorie,workout,activity}.json.
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

const DATE_RE = /^(\d{4}-\d{2}-\d{2})-/;
const WIDGET_RE = /```widget:([a-z]+)\n([\s\S]*?)```/g;

const round = (n) => Math.round(n);
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
      else console.warn(`  ? unknown widget type "${type}" in ${file}`);
    }
  }

  calorie.sort((a, b) => a.date.localeCompare(b.date));
  workout.sort((a, b) => a.date.localeCompare(b.date));
  activity.sort((a, b) => a.date.localeCompare(b.date));

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, 'calorie.json'), JSON.stringify(calorie, null, 2) + '\n');
  fs.writeFileSync(path.join(OUT_DIR, 'workout.json'), JSON.stringify(workout, null, 2) + '\n');
  fs.writeFileSync(path.join(OUT_DIR, 'activity.json'), JSON.stringify(activity, null, 2) + '\n');

  console.log(`✓ Extracted ${calorie.length} calorie day(s) → data/widgets/calorie.json`);
  console.log(`✓ Extracted ${workout.length} workout day(s) → data/widgets/workout.json`);
  console.log(`✓ Extracted ${activity.length} activity day(s) → data/widgets/activity.json`);
}

main();
