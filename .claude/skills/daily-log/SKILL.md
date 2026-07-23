---
name: daily-log
description: The single front door to Beau's "second brain." Use when Beau narrates something to capture — a workout ("bench 185×8, 205×6F"), food (routes to food-logging), a thought/prose, or a to-do — and route it to the right section of today's journal entry. Also use to QUERY across time ("what did I do this week?", "how's my protein average?", "am I stronger this month?") and to GENERATE plans ("make me a workout plan", "what should I eat the rest of today?"). One assistant that figures out which component you mean.
---

# Daily Log — the second-brain router

This repo IS the second brain. A day = one journal entry in `content/posts/YYYY-MM-DD-<slug>.md` with a prose Journal plus optional structured sections (**Workout**, **Calorie Log**, **To Do**). Each structured section keeps a human-readable table **and** a hidden ` ```widget:* ` block (invisible on the site; read by `scripts/extract-widgets.mjs` → `data/widgets/*.json`). Those JSON files + `data/profile.yml` are the shared memory every part queries.

**Your job: classify what Beau just said, then either capture it, query the data, or generate a plan.** Don't ask which bucket it belongs to — infer it.

## Routing

| Beau says… | Route to |
|---|---|
| foods eaten ("apple, 2 tbsp PB, 600 cal wraps", "0.9 lb salmon") | **Calorie capture** (food-logging conventions) |
| lifts ("bench 185×8, 205×6F, squat 3×8 @275") | **Workout capture** |
| a reflection / event / plain narration | **Journal prose** |
| tasks ("todo: email X, call Y") | **To Do capture** |
| "what did I / how's my / am I / show me…" over time | **Query** |
| "make me a plan / what should I lift / eat next" | **Plan** |

Always: read today's entry first; only touch the relevant section; never rewrite his prose. If today has no entry, create one (`# Month DD, YYYY` title) or ask if he's clearly mid-thought elsewhere.

## Capture: Workout

Write a `## Workout` section (human table) **and** a ` ```widget:workout ` block, kept in sync.

Human table per lifter (canonical layout = `content/posts/2026-07-22-digital-embodiment.md`):

```
## Workout

Full body with Abby.

**Beau** — session volume 24,895 lb

| Exercise            | Sets                    | Top set  | Est. 1RM |
|---------------------|-------------------------|----------|----------|
| Bench Press (bar)   | 185×8, 205×6 F, 205×5 F | 205×6 F  | 246      |

*F = failure on the last rep. DB weight is per dumbbell. Est. 1RM uses Epley (weight × (1 + reps / 30)).*

**Next session dials:**
- <per-lift recommendation>
```

Then the machine block (raw sets only — the extractor computes top set, 1RM, volume):

```widget:workout
lifters:
  - name: Beau
    lifts:
      - { exercise: "Bench Press", equipment: barbell, sets: [ {weight: 185, reps: 8}, {weight: 205, reps: 6, failure: true} ] }
```

Conventions (must match `scripts/extract-widgets.mjs`):
- **Est. 1RM** = Epley `weight × (1 + reps/30)`, taken from the set with the highest Epley value (the "top set").
- **Volume** = Σ(weight × reps). No dumbbell doubling. `equipment` ∈ barbell | dumbbell | machine.
- **Next-session dial** per lift: top set closed clean → **+5 lb**; last-rep failure → **hold, re-test**; two failing sets in a row at the same weight → **drop ~10% and rebuild**.

## Capture: Calorie

Follow the **food-logging** skill exactly (it owns the estimate table, running total, and "Day vs. plan" verdict) and make sure it writes both the `## Calorie Log` table and the `widget:calorielog` block. Targets come from `data/profile.yml`.

## Capture: Journal prose

Append/weave into the top-of-file prose. This is the default when nothing structured is present. Preserve his voice — minimal cleanup only (per CLAUDE.md).

## Capture: To Do

`## To Do` with GitHub checkboxes (`- [ ]` / `- [x]`). (Note: no `widget:todo` extractor exists yet — human list only for now; add the block once the extractor supports it.)

## Query (across time)

Read `data/widgets/{calorie,workout}.json` and `data/profile.yml`, then answer. Examples:
- "what did I do this week?" → summarize workouts + calorie adherence for the last 7 dates.
- "how's my protein average?" → mean protein over recent days vs. `profile.people.beau.protein.aim_g`.
- "am I stronger this month?" → compare est1RM per lift across sessions.

If the JSON looks stale (a section was just logged), run `npm run extract:widgets` first, then read.

## Plan (generate)

- **Workout plan:** read `workout.json`, apply the next-session dial per lift from the most recent session, and size the session against recovery/volume. Present as the next session's target sets.
- **Nutrition plan:** read today's `calorie.json` total + `profile.yml` target for the day type → tell him remaining calories/protein and suggest foods that fit.

## After capturing structured data

Structured captures only reach the dashboards after extraction. Either run `npm run extract:widgets` (fast) or note it'll refresh on the next `npm run refresh` / deploy. The `/health` and `/workouts` pages read the JSON at build time.

## Guardrails

- One section per capture; never overwrite prose or an unrelated section.
- Keep the human table and its `widget:*` block identical in content.
- Trust Beau's own measured numbers over estimates.
- Targets live in `data/profile.yml` — never re-hardcode them into entries.
