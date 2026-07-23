# Journal Widgets — Spec

**Repo:** this one (`bbranton-website`). Next 13 pages router, `content/posts/*.md` rendered via `remark` → HTML in `src/lib/posts.ts`.
**Status:** Phases 0–3 **built** as of 2026-07-22 (workout + calorie widgets). See the status note below.

## Status &amp; framing update (2026-07-22): this is the "second brain"

The widget system is now the substrate for a bigger idea Beau named in the 2026-07-22 journal entry: **the repo as a digital embodiment / second brain** — journal, calorie, and workout as components he talks to through one routing assistant, that share memory and can be queried across time.

**What's built now:**
- `widget:workout` + `widget:calorielog` blocks (backfilled into 2026-07-20/21/22), stripped from the public render by `remarkStripWidgets` in `src/lib/posts.ts`.
- The data backbone: `scripts/extract-widgets.mjs` → `data/widgets/{calorie,workout}.json` (dates from **filenames** — recent entries have no frontmatter). Wired into `npm run refresh`; also `npm run extract:widgets`.
- Single source of truth for targets: `data/profile.yml` (the food-logging skill + `/health` read it; no more per-entry copy-paste drift).
- Dashboards: `src/pages/health.tsx` and `src/pages/workouts.tsx` (hand-rolled SVG via `src/components/MiniChart.tsx` — swap for recharts if they grow).
- The routing agent: `.claude/skills/daily-log/SKILL.md` — one assistant that captures (workout/calorie/journal/todo), queries across time, and generates plans; delegates the calorie path to the `food-logging` skill.

**Data backend — repo vs. database (decision):** stay repo/markdown-native now; `data/widgets/*.json` is the portable seam. Its schema is deliberately the future Postgres table schema, so migrating to a database + mobile app is a port, not a rewrite. **Migrate when** any of: the mobile app needs live multi-device writes, Abby logs concurrently and hits git conflicts, real-time/notifications are needed, or auth is required.

**Horizon:** a lightweight always-with-you cloud/mobile app whose UI adapts to the activity, more mini-apps (grocery, etc.), eventually an "OS of agents" with a marketplace. The standalone production app is scoped separately in `tandem-health.md` (see its v2). This widget layer is the working prototype of that app's data + logic.

## The problem

Journal entries are freeform prose, but a growing share of what actually goes in them is repeating structured data — the calorie log started ~2026-07-20, the workout log started 2026-07-23, to-do lists are a persistent want. Freeform prose is fine for the reflection, but bad for the trackers: you can't compute a 7-day protein average, can't chart bench-press top set over time, can't see which to-dos carried across weeks.

The pull is not "replace the journal with an app." The pull is: **let each entry be a canvas of small widgets alongside the prose**, so the day is one page and the trends over days are one query away.

## The goal

A daily entry = one **Journal** widget (free prose) plus optional structured widgets: **Workout**, **Calorie Log**, **To Do**. Each widget:

- reads well as plain markdown even without any renderer (source of truth stays a `.md` file, no lock-in),
- has a structured form the site can render as a card and analyze across days,
- is authored via Claude in conversation ("bench 185×8, 205×6F…" → widget block written into today's entry).

## Non-goals (v1)

- No real-time collab, mobile-first standalone app, or auth. Editing is `git`.
- No external sync (Apple Health, MyFitnessPal, Strava). Widgets are self-contained.
- No backfill of prior entries. Convention starts forward from 2026-07-23.

## Widget catalog

Each widget below lists: **purpose**, **data shape**, **rendered form**, **cross-entry payoff** (what the aggregate view unlocks).

### Journal (default)
- **Purpose:** the reflective prose. This is what the entry has always been.
- **Data shape:** just markdown. No structured form.
- **Rendered form:** unchanged from today.
- **Cross-entry payoff:** search, tags, existing blog experience.

### Workout
- **Purpose:** log lifts for Beau and Abby; see strength trend over weeks.
- **Data shape:** per lifter × exercise, an array of sets `{weight, reps, failure}`. Equipment noted (barbell / dumbbell / machine). Dumbbell weight is per-dumbbell.
- **Rendered form:** per-lifter table (exercise, sets, top set, est. 1RM via Epley, volume). Session volume totalled. See `content/posts/2026-07-22-digital-embodiment.md` for the canonical layout.
- **Cross-entry payoff:** `/workouts` page — per-lift PR chart, weekly volume, "next session dial" auto-suggested from the last three sessions (bar goes up if top set closed clean, stays flat if last-rep failure, drops if two-in-a-row failures).

### Calorie Log
- **Purpose:** daily food + protein tracking under the Beau & Abby cut plan.
- **Data shape:** list of `{food, amount, calories, protein_g}`; totals derived. Optional `note` for day-vs-plan commentary.
- **Rendered form:** table with totals row + one-line "day vs. plan" verdict. See 2026-07-20 entry for the canonical layout.
- **Cross-entry payoff:** `/health` page — 7-day rolling avg calories and protein, plotted against the cut-plan target row (low/10K/training-day). Trend line on weight if it starts getting logged.

### To Do
- **Purpose:** the day's actual to-do list, checkable in the entry, with carryover behavior.
- **Data shape:** list of `{text, done, priority?, carryover_from?}`.
- **Rendered form:** GitHub-style checkbox list. Undone items at end of day are optionally suggested for tomorrow's entry (Claude proposes; user accepts).
- **Cross-entry payoff:** completion rate, carryover count (items that lived >3 days), most-common ghosts.

## Data format

Two options considered; pick **fenced code block with a language hint** (option B). Rationale below.

**Option A — YAML frontmatter section.** Put widget data in the entry's frontmatter under a `widgets:` key.
- Pro: single parse, no plugin needed.
- Con: bloats frontmatter, splits the day's content from its data (workout data at top of file, workout header in the body), and forces the writer to author YAML instead of a markdown table.

**Option B — fenced blocks with a widget language hint (recommended).** Author writes normal markdown; where a widget goes, use a fenced block whose language tag identifies the widget type.

    ```widget:workout
    lifters:
      - name: Beau
        lifts:
          - exercise: Bench Press
            equipment: barbell
            sets:
              - { weight: 185, reps: 8 }
              - { weight: 205, reps: 6, failure: true }
              - { weight: 205, reps: 5, failure: true }
    ```

- Pro: reads sanely on GitHub even with zero renderer support (falls back to a code block). One markdown file per day still. Easy to extract with a small remark visitor. Composes with the prose (Journal → Workout block → prose → Calorie block → prose).
- Con: writers see YAML, not tables. Mitigation: **Claude is the writer**. User dictates in natural language ("bench 185×8, 205×6F…") and Claude emits the block. In Phase 2 the renderer shows a polished card; the YAML is edit-source, not read-source.

**Widget language tags (fixed vocab):** `widget:workout`, `widget:calorielog`, `widget:todo`. Additions require a spec update to this file.

## Phased build

### Phase 0 — Convention (now, no code)
- Standard H2 headers in each entry: `## Journal` (optional; can omit if the top-of-file prose is the journal), `## Workout`, `## Calorie Log`, `## To Do`.
- Widgets authored as human-friendly markdown tables / checkboxes (what today's 2026-07-23 entry does).
- No cross-entry views. Progress: eyeballed by scrolling.
- **Exit criterion for moving to Phase 1:** at least two of {workout, calorie, todo} logged in ≥5 entries. If a section keeps getting skipped, cut it from the widget list.

### Phase 1 — Structured data alongside the prose
- Add the fenced widget blocks *in addition to* the human-readable table for the same widget. Claude keeps them in sync.
- Write a small script (`scripts/extract-widgets.ts`) that walks `content/posts/*.md`, pulls every fenced widget block, and emits a per-widget JSON snapshot to `data/widgets/{workout,calorie,todo}.json`. Runs on `npm run refresh` alongside the other data scripts.
- Still no in-page rendering change. This phase is purely getting the data pipeline honest.

### Phase 2 — Rendered widget cards
- Add remark plugin `remark-widgets.ts` in `src/lib/`: on visit of a code node whose lang starts with `widget:`, replace with a placeholder HTML div carrying the parsed data as a data attribute.
- Client-side, hydrate those divs with React components: `<WorkoutCard>`, `<CalorieLogCard>`, `<TodoCard>`. Tailwind + `@tailwindcss/typography` already in the stack; card styles stay consistent with the existing post typography.
- To-do card supports check/uncheck **only in a signed-in edit mode** (out of scope for now); public read is static.
- Fallback: if a widget block fails to parse, render as a normal code block with an inline warning. Never break the page.

### Phase 3 — Cross-entry pages
- `src/pages/workouts.tsx` reads `data/widgets/workout.json`, renders: per-lift PR chart (Beau, Abby toggle), weekly volume, "next-session dial" per lift.
- `src/pages/health.tsx` reads `data/widgets/calorie.json`, renders: rolling averages vs. cut plan targets. Weight trend if logged.
- `src/pages/todos.tsx` reads `data/widgets/todo.json`, renders: open items across all entries, carryover leaderboard.
- Each page links back to the source entry for any data point.

## Author flow (Claude as the interface)

The whole spec assumes the user rarely hand-writes widget YAML. The interaction is:

1. User in chat: "log today's workout — bench 185×8, 205×6F, 205×5F. Abby 75×8, 77×8, 77×7F. Also had 2000 cal / 130g protein for the day."
2. Claude: opens `content/posts/YYYY-MM-DD-*.md`, appends/updates the `## Workout` and `## Calorie Log` sections (both the human table and, once Phase 1 lands, the fenced `widget:` block). Commits and pushes to the day's branch.
3. Cross-entry views on the site refresh on next deploy.

Cross-day questions ("am I stronger this month than last?", "how's the 7-day protein average?") are answered by Claude reading `data/widgets/*.json` (Phase 1+) or by scrolling the entries (Phase 0).

## Open questions

- **Naming per day.** Entries currently have themed slugs (`the-one-thing-and-a-workout-plan.md`). A widgets-heavy entry may not have a natural theme by 8am. Default slug policy: pick a working slug from whichever widget dominates the entry at write time; rename freely later.
- **Todo persistence.** If the site starts letting the user check boxes in the browser, do those flip commit back to the markdown? For now, no. Editing is only via chat with Claude.
- **Chart library.** Phase 3 wants a small chart lib. No deps added yet — likely `recharts` or a hand-rolled SVG for the first chart (single line, simple).
- **Widget composition inside the prose.** The current layout is section-by-section (`## Workout` then `## Calorie Log`). Fine for now. Later, inlining a widget mid-prose (e.g. a mini stat card inside a reflective paragraph) is possible with the same fenced-block mechanism, but not needed v1.

## Success signal

Six months in: the `/workouts` page tells Beau which lifts have moved, the `/health` page shows the cut is actually a cut, and no entry ever got skipped because "the tracking format was too fussy." If any of those three isn't true, the widget got in the way of the journal — pull it.
