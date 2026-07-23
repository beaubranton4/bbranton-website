# Tandem — MVP Spec (functional app, personal use)

**Working name:** Tandem (placeholder — two people moving together; not brand-validated, personal-use tool so it doesn't need to be). Alternatives to sit with: Pact, Duo, Coop.
**Repo (when built):** `~/projects/tandem/` · own git + Vercel
**Depth:** functional app for 2 known users (Beau + partner). Not a landing page, not a portfolio business idea — a private accountability tool. The app *is* the deliverable.
**Status:** spec only. Build in a later batch on Beau's go.

> **Not the same as Calorie Cart / the wellness-brand fitness tools.** `archive/calorie-aware-grocery-cart.md` is a *public, SEO-driven Chrome extension* that live-tallies calories as strangers shop online; the fitness-tools cluster is public SEO calculators. Tandem is the opposite shape: a *private, generative plan → shopping-list* app for two people who already share a household and a goal. No public surface, no SEO, no growth loop. The calorie-budgeted-grocery-list *concept* overlaps with Calorie Cart, but nothing else does.

---

## What it is

A private web app that keeps Beau and his partner accountable to a **weekly plan** —
workouts, calorie targets, protein targets — by **auto-tracking the actual** (Garmin
activities + native food logging) against it, making adherence **fun via a cooperative
game** (team score vs. the plan, not partner-vs-partner), and — in a later phase —
**generating a weekly grocery list** sized so the calories they *buy* ≈ the calories
they *plan to eat*. The thesis Beau stated: *it's impossible to overeat if you don't
buy more calories than you want to consume.*

Core loop: **Plan the week → live the week (auto-tracked) → see the team score → repeat.**

## Definition of "it works" (personal-use analog to a validation metric)

Not a market metric — this is for two people. Success = **both partners open it most
days, logging feels like <15 seconds, and the weekly team score is something they
actually talk about.** If it becomes a chore or a source of friction, it failed,
regardless of feature completeness. The grocery-list phase succeeds if a generated
list is one they'd actually shop from without heavy editing.

---

## Locked decisions (from the 2026-07-21 planning session)

| Decision | Choice |
|---|---|
| Platform | Responsive **web app** (desktop + mobile), not native |
| Garmin | **Unofficial `python-garminconnect`** with personal creds (MFA status TBD — see risks) |
| MyFitnessPal | **No integration** (MFP killed its public API in 2018) → **native food logging** |
| Body composition | **In scope** — periodic **InBody scans** from their gym, modeled as manual periodic entries |
| Game tone | **Cooperative** — team score vs. the plan; personal (not shared) streaks; no "winner" |
| V1 scope | **Lean MVP** — weekly plan vs. auto-tracked actual. Grocery list + gamification polish are v2/v3 |

---

## 1. Core data model

Relational and boring — 2 users, no multi-tenancy. `DailyAdherence` is the hub the
dashboard *and* the game both read from; everything else feeds it.

**Users & planning**
- `User` — id, name, email, timezone, garmin_credential_ref (fk → encrypted row), created_at
- `WeeklyPlan` — id, user_id, week_start (Monday, home tz), calorie_target, protein_target, tolerance_pct (nullable), notes. *Per-person* and independent — different bodies, different goals.
- `PlannedWorkout` — id, weekly_plan_id, planned_date, workout_type (run/strength/bike/swim/other/**rest**), planned_duration_min, target_note

**Tracking (raw, synced)**
- `GarminActivity` — id, user_id, garmin_activity_id (external, unique), activity_type, start_time, duration_min, calories_burned, distance, avg_hr, raw_payload (jsonb), synced_at
- `FoodItem` — id, name, source (usda/openfoodfacts/custom), calories_per_unit, protein_per_unit, unit, barcode (nullable)
- `FoodLogEntry` — id, user_id, logged_date, meal (breakfast/lunch/dinner/snack), food_item_id (nullable), free_text_label (nullable), quantity, calories, protein, logged_at, source (manual/quick_add)
- `BodyMetricEntry` — id, user_id, measured_date, weight, body_fat_pct, skeletal_muscle_mass, source (**inbody**/garmin/manual), raw_payload (jsonb). InBody scans are periodic (not daily) and richer than a scale — model them as their own entries, don't collapse to a single "weight" number.

**Reconciliation & derived**
- `WorkoutLog` — id, user_id, date, planned_workout_id (nullable), matched_garmin_activity_id (nullable), status (completed/missed/manual_override), source. The join between "planned" and "actually happened."
- `DailyAdherence` — user_id, date, calorie_target, calorie_actual, protein_target, protein_actual, workout_hit (bool), calorie_hit (bool), protein_hit (bool), day_score. **Materialized nightly** (a stored table, not a view — cheap, and it powers history/streaks).

**Gamification**
- `PointsLedgerEntry` — id, user_id, date, event_type (calorie_hit/protein_hit/workout_hit/logged_bonus/streak_bonus), points, metadata (jsonb). Audit trail → powers the weekly recap.
- `Streak` — id, user_id, streak_type (daily_log/calorie_hit/workout_hit), current_count, longest_count, last_updated_date. **Personal, never shared.**

**Grocery (model now, build in v2)**
- `FoodRotationItem` — id, name, typical_calories, typical_protein, typical_cost, shared_friendly (bool), ingredients (jsonb: [{ingredient, qty, unit}])
- `GroceryList` — id, week_start, budget, target_total_calories, status, generated_at
- `GroceryListItem` — id, grocery_list_id, ingredient_name, quantity, unit, estimated_cost, estimated_calories

**Relationships:** `User` 1—N `WeeklyPlan` 1—N `PlannedWorkout`; `User` 1—N
`GarminActivity` / `FoodLogEntry` / `BodyMetricEntry`; `WorkoutLog` reconciles
`PlannedWorkout` ↔ `GarminActivity`; `DailyAdherence` is fed by everything and read by
the dashboard + game.

## 2. Weekly planning & auto-tracking mechanics

- **Week boundary:** Mon–Sun in the household timezone (single-tz assumption — flagged below).
- **Plan creation:** each Sun/Mon, *each* partner sets their own `WeeklyPlan` (calorie target, protein target, planned workouts by day). Independent objects — not one shared plan.
- **Garmin sync:** scheduled pull every 4–6h upserts new `GarminActivity` rows per user since last sync (see §5).
- **Auto-matching:** for each `PlannedWorkout`, find a same-day `GarminActivity` with a compatible type. Found → `WorkoutLog.status = completed`, source = garmin. Ambiguous (Garmin's generic tag vs. "strength," or multiple same-day candidates) → surface a **one-tap confirm** in the UI, don't silently guess.
- **Adherence job (nightly, re-runs the last 2 days):** per user/day, compute `DailyAdherence`:
  - `calorie_hit` — actual **at or under** target + tolerance. **Calories are a ceiling.**
  - `protein_hit` — actual **≥** target. **Protein is a floor.** Never conflate the two.
  - `workout_hit` — every non-rest `PlannedWorkout` that day has a completed `WorkoutLog`.
  - `day_score` full hit only if all three true; each also tracked independently for partial-credit points.
- **Edge cases (all must be handled):**
  - *No matching Garmin activity* (indoor lift, device didn't sync) → manual log still counts. Degrade to manual, never to "failed."
  - *Garmin lag* (24–48h is normal) → the 2-day re-run prevents false "missed" marks that later self-correct.
  - *Rest day* → only calorie/protein checked.
  - *Partial / excluded week* (travel, sick, plan made mid-week) → `WeeklyPlan` can mark specific dates excluded from scoring; don't force 7/7-or-nothing.
  - *No food logged at all* → **"no data" (gray), not a miss (red).** Don't conflate "didn't eat" with "didn't log."
  - *Bonus unplanned workout* → awards points but isn't required for adherence. Reward extra effort without punishing plan flexibility.

## 3. Gamification — cooperative "Team vs. the Plan"

Two accountability partners, not a public product → **cooperative is the default, and
head-to-head is not even built in v1.** Competition risks resentment when one person is
having a harder week (travel, injury, work stress).

- **Daily points (per person):** calorie_hit **+10**, protein_hit **+10**, workout_hit **+15**, "logged something today" **+5**. That last one rewards the *behavior* of logging independent of the outcome — it's what actually builds the habit.
- **Team Weekly Score** = both partners' daily points summed, out of a known max (~210/week each → 420 team). **This is the headline number:** "Team: 340/420 this week."
- **Streaks are personal** (days-logged, days-hit, per user) — so one partner's rough week never resets the other's flame. Kills the "you broke *our* streak" fight before it starts.
- **Sunday auto-recap** compares this week's team score to *the household's own trailing 4-week average* ("+12% vs. your average") — self-referential, not partner-ranked. Partner stats shown side-by-side as plain numbers ("Beau 6/7 · Partner 5/7"), no winner badge.
- **Milestone badges** at 7- and 30-day streaks in a shared trophy case — cheap, gives progression without a competition mechanic.
- **Explicitly avoid:** public leaderboards, punitive streak-loss penalties, forced head-to-head. If they ever want a "you vs. partner" mode, make it **opt-in on top of** the cooperative default — confirm before building.

## 4. Grocery-list generation (v2 — sketch the logic now)

**Principle to state up front:** cap total purchased **calories** near the weekly
target; **never cap protein** (floor, not ceiling). Conflating them works *against* a
cut/high-protein goal.

1. **Per-person daily targets** for the week (from each `WeeklyPlan`). Optional manual bump on high-training days — no auto workout→calorie formula in v1 of this feature (simpler, less surprising; auto-adjust is a v3 refinement).
2. **Weekly totals** = both people's daily targets × 7. Shared vs. separate meals changes *what's cooked* (one batch recipe vs. two plates), not the calorie math — calories are additive per eater regardless of who's at the table.
3. **Assign meal slots:** for the week's ~21 slots (minus merged shared slots), pick a `FoodRotationItem` whose calorie/protein profile ≈ a standard split (e.g. 25/35/30/10 B/L/D/snack of the daily target), favoring variety and respecting `shared_friendly` for shared meals.
4. **Explode into ingredients:** each rotation item carries a per-serving ingredient list; × servings needed (1 vs. 2 eaters per meal).
5. **Aggregate:** merge duplicate ingredients across the week; round up to purchasable package sizes (chicken per lb, etc.).
6. **Price:** apply a user-maintained per-unit cost table (no live grocery-price API in v1) → line-item + total cost.
7. **Validate & resolve:**
   - Total *calories* ≤ target + 5–10% buffer (waste/variance). Over → scale portions down or swap a lower-cal alternate.
   - Total *cost* ≤ budget. Over → swap in "budget" rotation substitutes, or prompt to raise budget / trim recipes.
   - Protein under target → flag & suggest a protein-dense add. **Never trimmed to hit the calorie cap.**
8. **Output:** categorized checklist (produce / protein / dairy / pantry) with quantities + estimated cost, plus a day-by-day "what's cooked when" map. A list a human executes at the store — no smart-cart integration in v1.

**Open loophole to decide:** eating out isn't "bought" via the list, so it escapes the
"can't overbuy" premise. Decide up front whether restaurant calories reconcile against
the same weekly budget or live in a separate bucket.

## 5. Integration architecture — Garmin

- **Runtime:** `python-garminconnect` is Python — **don't** wedge it into the Next.js app. Run it as a **standalone scheduled job** (GitHub Actions cron — free, fine for 2 users, zero extra infra) that writes straight into Supabase. Keeps Python out of the primary stack.
- **Cadence:** pull every 4–6h. Add a **"Sync now"** button (a small API route triggering the same logic) for the right-after-a-workout check.
- **Credentials:** never plaintext env vars per user. Store encrypted in Supabase (**Vault** or a pgcrypto column) keyed to `User`; decrypt only inside the sync job's runtime.
- **Data pulled:** activity list (type, start, duration, calories, distance, HR) + daily summary (steps, resting HR) + body composition if the account has it. **Store the full raw JSON payload** even for fields unused today, so sleep/body-comp features later don't require re-architecting the sync.
- **Real risks (flag in the spec, don't paper over):** the library is unofficial /
  reverse-engineered against Garmin's private API. Garmin can change auth without notice
  (breaks the lib until the community patches), and automated login technically violates
  Garmin's ToS — modest, not near-zero, at low personal-use frequency. Mitigations:
  - **Confirm MFA on both Garmin accounts *before* building** (currently "not sure, guessing no"). Most unofficial libs can't complete an MFA challenge → if MFA is on, either consciously disable it (a tradeoff to accept, not assume away) or scope v1 Garmin to **manual-entry-only**. This is a **go/no-go input**, not a detail to fill in later.
  - Pin the library version; watch its repo for auth-breakage issues before upgrading blind.
  - Wrap sync in error handling + **alerting on repeated failure** (email/text) so a break is caught in days, not silently for weeks.
  - Keep the **manual-entry fallback fully functional** so the app *degrades*, never *breaks*, if sync fails or an account locks.

## 6. Phased roadmap

**V1 (lean MVP — the only thing to build first)**
- 2 fixed accounts (Supabase magic-link — no general auth/multi-tenancy).
- Per-person `WeeklyPlan`: calorie + protein targets + manually entered planned workouts (no fancy calendar UI).
- Native food logging: search/quick-add against a free food DB + manual entry; daily totals.
- Garmin activity sync + day/type auto-match with manual confirm for ambiguity.
- Adherence dashboard: daily/weekly target-vs-actual for calories, protein, workouts — simple green / red / gray.
- Minimal game: personal streaks + weekly team point total shown side-by-side.
- Manual periodic **InBody entry** (weight, body fat %, muscle mass).
- **Explicitly cut from v1:** grocery-list generation, meal rotation/recipes, budget tracking, badges, notifications, auto-recap.

**V2**
- Grocery-list generation (§4 in full).
- Game polish: badges/milestones, Sunday auto-recap.
- Notifications (log reminders, "set next week's plan" nudge).
- Garmin-sourced body data alongside manual InBody entries.

**V3**
- Recipe rotation library + shared meal-prep view.
- Trend-based target auto-adjustment (light coaching logic; auto workout→calorie sizing).
- Price-aware grocery substitutions.
- The older "Garmin coach for strength workouts" note fragment could live here — out of scope until now.

## 7. Tech stack (brief — matches Beau's existing toolbelt)

- **Next.js (App Router) on Vercel** — the web app.
- **Supabase** — Postgres + auth (magic-link is plenty for 2 users) + Vault/pgcrypto for encrypted Garmin creds.
- **GitHub Actions cron** — the `python-garminconnect` sync job *and* the nightly adherence pass. (Vercel Cron is an alternative for the adherence pass since it's JS; keep the Python sync on Actions.)
- **Food DB:** USDA FoodData Central primary (free, no auth), cached into `FoodItem` on first lookup. Swap/supplement with **Open Food Facts** if packaged/branded foods dominate their real eating (open question below).
- Deliberately **one app + one sync script** — no microservices beyond the necessary Garmin job.

## 8. Open questions to resolve before treating v1 as final

Some of these affect *both* people, so confirm with the partner — don't let the spec silently decide:

1. **Garmin MFA** — real go/no-go (see §5). Verify actual status on both accounts.
2. **Single household timezone** — safe year-round, or does travel / race-day break the "day" boundary?
3. **Missing weekly plan** — if someone forgets to set next week's, carry forward last week's targets, or show a blank/no-data state?
4. **Manual vs. Garmin conflict** — if both exist for the same day/type, which wins: override, merge, or duplicate (double-count risk)?
5. **Food DB fit** — USDA (US-focused, coarse on restaurant/packaged) vs. Open Food Facts (better barcodes, less standardized). Depends on home-cooked vs. packaged/eating-out mix.
6. **Eating-out vs. the grocery premise** — reconcile restaurant calories against the same weekly budget, or a separate bucket? (The "can't overbuy" loophole from §4.)
7. **Calorie adherence** — hard ceiling or configurable band (±10%)? Probably differs by goal phase (cut / maintain / bulk) — decide before hardcoding the nightly job.
8. **Body-data visibility** — InBody is sensitive shared data. Confirm both partners want it on the joint dashboard vs. private-per-person. (Current decision: in scope & shared — worth an explicit yes from both.)
9. **Data privacy** — sensitive health data for two named people. Where do backups live, and is export/deletion expected?
