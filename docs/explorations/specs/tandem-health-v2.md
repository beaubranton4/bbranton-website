# Second Brain — Production App Spec + Handoff Prompt (v2)

**Supersedes:** `tandem-health.md` (v1). V1 scoped a couples' Garmin/grocery accountability app. V2 reframes the target around the vision Beau articulated on 2026-07-22: a **personal "second brain"** — journal + calorie + workout (and future mini-apps) behind **one routing assistant**, with an **always-with-you cloud/mobile UI that adapts to the activity**, and a north star of a **plug-and-play "operating system of agents"** others can build on.

**Status:** spec + kickoff prompt. Build in a **new repo** (`~/projects/second-brain/`, own git + Vercel). The `beaubranton.com` repo now holds a **working prototype** of the data model + agent logic (see §2) — this app productionizes it onto a database with a real UI.

**Deliverable of the beaubranton.com work (done 2026-07-22):** the reference implementation this spec ports from — see §2.

---

## 1. Vision (what we're building and why)

Beau already dumps his life into a markdown journal. The insight: *with LLMs you don't need rigid apps to capture life — you narrate, and an agent files it.* The product is the interface to that: a lightweight app he always has on him where **he says what happened and the right thing happens** — food gets logged with calories/macros, a lift gets logged with 1RM/volume, a thought becomes a journal entry, a question ("what did I do this week?", "make me a workout plan") gets answered from his own history.

Three properties define it:
1. **One assistant that routes.** No mode-switching. Natural language in → correct capture/query/plan out.
2. **Adaptive UI per activity.** When the intent is food, a food UI surfaces; a lift → a workout UI; a thought → the journal. The chrome reshapes to the task.
3. **Extensible mini-apps.** Journal/calorie/workout are the first three "widgets." Grocery, and others, plug in the same way. **North star:** others build & sell widgets on a marketplace (micro-transactions). Not near-term — but the architecture shouldn't preclude it.

Scope now: **just Beau.** Then Abby. Then others.

---

## 2. Reference implementation to port from (built in beaubranton.com)

A working prototype of the data + logic exists in the `beaubranton.com` repo. **Reuse its schema and logic; replace its substrate (markdown/JSON/Claude-Code) with a database + real UI + an API-hosted agent.**

| Concern | Prototype artifact (beaubranton.com) | Productionize as |
|---|---|---|
| Data schema | `data/widgets/{calorie,workout}.json`, `data/profile.yml` | Postgres tables (§4) — the JSON shape IS the table shape |
| Capture logic | `.claude/skills/daily-log/SKILL.md` (router) + `~/.claude/skills/food-logging` | An LLM routing endpoint w/ tool-calling / structured output |
| Domain math | `scripts/extract-widgets.mjs` — Epley 1RM, top-set, volume=Σ(w×r), day-type calorie targets | Server functions / DB computed columns |
| Coaching logic | next-session dial (clean→+5lb, failure→hold, 2×failure→drop ~10%) | Server function feeding the plan agent |
| Dashboards | `src/pages/health.tsx`, `workouts.tsx`, `components/MiniChart.tsx` | Real charts (recharts/visx) on live data |
| Targets SoT | `data/profile.yml` (single source; no per-entry drift) | `profiles` + `targets` tables |

**Key lesson already validated:** structured capture (typed rows) + an LLM author is the right split — the human never hand-writes structured data, the agent does. Volume/1RM computed from raw sets matched the hand-logged numbers (and corrected an arithmetic slip), so the domain math is trustworthy.

---

## 3. Architecture (production)

```
 Mobile/PWA client ──(voice or text: "bench 185x8, 205x6F")──►  Routing agent (LLM + tools)
        ▲                                                              │ classifies intent
        │ adaptive UI renders the right widget                         ▼ emits structured action
        │                                              ┌─ capture(workout|calorie|journal|todo|…)
   live data via API/RLS ◄── Supabase Postgres ◄───────┤─ query(range) → reads history
                                                        └─ plan(kind)  → history + targets → suggestion
```

- **Client:** Next.js (App Router) PWA, mobile-first, installable, offline-tolerant capture queue. Voice capture (Web Speech / Whisper) since narration is the primary input.
- **Routing agent:** a server endpoint (Vercel AI SDK via AI Gateway) that takes NL + returns a **structured action** via tool-calling / structured output — the API version of the `daily-log` skill. Deterministic domain math (Epley, targets, dials) runs in server functions, not the LLM.
- **Adaptive UI:** the returned action's `widgetType` selects the component to render for confirm/edit (FoodCard, WorkoutCard, JournalCard…). A widget registry maps `widgetType → component + schema`, so adding a mini-app = registering a new widget (the seam toward the marketplace).
- **Data:** Supabase Postgres + Auth + Row-Level Security (per-user rows; ready for Abby + others). This is the **database** decision — the prototype's markdown+JSON was the right call for one person in a repo; a multi-device, always-on, multi-user app needs a DB (the migration triggers from the prototype's repo-vs-DB analysis are now all true).

---

## 4. Data model (ported from the prototype JSON)

Minimal, RLS-scoped by `user_id`. Mirrors the validated JSON shapes.

- `profiles` — id, user_id, name, bodyweight_lb, …
- `targets` — user_id, protein_aim_g, protein_floor_g, cal_low, cal_steps_10k, cal_training (from `profile.yml`)
- `entries` — id, user_id, date, prose (the journal), created_at  *(the "day" object)*
- `food_logs` — id, user_id, date, day_type (low|steps_10k|training), note
- `food_items` — id, food_log_id, food, amount, calories, protein  *(totals computed)*
- `workouts` — id, user_id, date, note
- `workout_lifts` — id, workout_id, lifter, exercise, equipment  *(top_set/est_1rm/volume computed from sets)*
- `lift_sets` — id, lift_id, weight, reps, failure, ordinal
- `widgets` (registry) — key, name, schema, version  *(extensibility seam)*

Computed (functions or generated cols): `food_logs.total_calories/total_protein`, `workout_lifts.est_1rm` (Epley), `.volume` (Σ w×r), `.top_set`. Import the prototype's 3 backfilled days as seed data.

---

## 5. Phased build (new repo)

- **P0 — Foundation:** Next.js App Router + Supabase (schema §4, RLS, seed from prototype JSON). Auth (magic-link), just Beau.
- **P1 — Capture loop (the core):** routing agent endpoint + text capture → confirm-in-adaptive-widget → write to DB. Ship food + workout + journal widgets. Voice capture.
- **P2 — Query & plan:** "what did I do this week", protein avg, 1RM trend; workout-plan generation (next-session dial) + nutrition headroom.
- **P3 — Dashboards:** live health + workouts views (charts on DB data).
- **P4 — 2nd user (Abby)** + cooperative framing (see v1 §3 for the gamification thinking — cooperative "team vs. plan", personal streaks).
- **P5 — New mini-apps** (grocery, from v1 §4 algorithm) via the widget registry.
- **North star (not scoped):** third-party widget marketplace + micro-transactions.

**Cut from early phases:** Garmin/MyFitnessPal sync (v1 §5 — unofficial libs, MFA go/no-go), grocery, gamification polish, marketplace.

---

## 6. Tech stack

Next.js App Router + PWA · Vercel · Supabase (Postgres/Auth/RLS) · Vercel AI SDK + AI Gateway (routing/query/plan agent, tool-calling) · shadcn/ui (adaptive widget components) · recharts or visx (charts) · Whisper/Web Speech (voice). Deterministic domain math in TS server functions, not the LLM.

---

## 7. Open decisions to settle before P1

- **Client shape:** PWA now (recommended — one codebase, installable) vs. React Native later for deeper device integration.
- **Voice pipeline:** on-device Web Speech vs. Whisper API (accuracy vs. cost/latency).
- **How "adaptive" the UI is:** full per-widget custom screens vs. a shared capture shell that swaps the middle. Recommend the shared shell first.
- **Agent trust/edit:** always show a confirm/edit step before writing (recommended) vs. auto-commit high-confidence captures.
- **Multi-user data visibility (Abby):** shared vs. private-per-person (esp. body composition) — carry v1's open questions.
- **Marketplace viability:** revisit only after 3–4 self-built widgets prove the registry pattern.

---

## 8. Handoff prompt (paste into a fresh Claude Code session in the new repo)

> Build the first version of my personal "second brain" web app in this new repo. It's a mobile-first PWA where I narrate what I did and one routing assistant files it into the right place and can answer questions about my history.
>
> **Context/reference:** A working prototype of the data model and agent logic lives in my `beaubranton.com` repo — read `docs/explorations/specs/tandem-health-v2.md` (this spec), `docs/explorations/specs/journal-widgets.md`, `scripts/extract-widgets.mjs` (the domain math — Epley 1RM, volume, day-type calorie targets, next-session dial), `data/profile.yml`, `data/widgets/*.json` (the schema to port), and the `.claude/skills/daily-log` + `food-logging` skills (the routing/capture logic to port). Reuse that schema and logic; replace the markdown/JSON substrate with Supabase Postgres and a real UI, and turn the capture skill into an LLM routing API endpoint (Vercel AI SDK, tool-calling/structured output).
>
> **P0–P1 scope (build now):** Next.js App Router + Supabase (schema per §4 of the spec, RLS, magic-link auth, seed from the prototype's 3 backfilled days). Then the core capture loop: a routing endpoint that classifies free-form text ("bench 185×8, 205×6F" → workout; "had an apple + 600cal wraps" → calorie; a reflection → journal) into a structured action, shows me a confirm/edit step in an activity-appropriate widget, and writes to the DB. Ship food, workout, and journal widgets, plus text capture (voice later). Deterministic math (1RM, volume, calorie targets) in TS server functions, not the LLM.
>
> **Defer:** query/plan (P2), dashboards (P3), Abby/2nd user (P4), grocery + other mini-apps (P5), and the widget marketplace (north star). Don't build Garmin/MyFitnessPal sync. Just me for now.
>
> Start by proposing the repo scaffold, the Supabase schema migration, and the routing-agent contract (the tool/structured-output shape), then build P0.
