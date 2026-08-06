# Time Tracking — Phase-2 Port to the Production Second Brain

**Target repo:** `~/projects/second-brain/` (Next 16 App Router + React 19 + Tailwind v4, Prisma 6 + Supabase Postgres, HybridRouter, Vercel).
**Source of truth being ported:** this repo's prototype — `.claude/skills/time-tracking/SKILL.md` (taxonomy + rules), `scripts/extract-widgets.mjs` `buildTimeEntry` (derivations), `src/pages/time.tsx` (dashboard design), `data/widgets/time.json` (accumulated data).
**When to port:** after **~2 weeks of real logging** in the prototype, so the taxonomy is validated by use before it hardens into a Postgres schema. If a category was never used in two weeks, drop it from the enum rather than porting it.

## Why this exists

Committed 2026-08-01 after the conversation with Bill: track where the hours go, specifically how much time actually reaches Dugout Edge and how much of that is deep (focused creation) vs overhead. The prototype proves the loop (narrate → structured log → dashboard); the production app makes it phone-first and voice-first, which is where time narration actually happens.

## 1. Prisma schema

Mirror the `FoodLog`/`FoodItem` parent-child pattern already in `prisma/schema.prisma`:

```prisma
model TimeLog {
  id      String      @id @default(cuid())
  userId  String      @default("beau")
  date    String // "YYYY-MM-DD"
  note    String?
  entries TimeEntry[]

  @@unique([userId, date])
  @@index([userId, date])
}

model TimeEntry {
  id        String  @id @default(cuid())
  timeLog   TimeLog @relation(fields: [timeLogId], references: [id], onDelete: Cascade)
  timeLogId String
  project   String // job | dugout-edge | exploration | personal
  category  String? // product | marketing | sales | support | admin | learning | meeting | life
  hours     Float
  deep      Boolean @default(false)
  note      String?
  ordinal   Int     @default(0)
}
```

Strings, not Postgres enums — matches the house style (`dayType String`, `equipment String`) and keeps taxonomy tweaks migration-free. Rollups (`totalHours`, `byProject`, `byCategory`, `deepHours`) are **computed at read time**, not stored — same reason the prototype's extractor computes them: no drift.

## 2. Router (`src/lib/router/`)

- **`types.ts`**: add `'time'` to the `Tool` union; add:
  ```ts
  export interface TimeEntryInput {
    project: string;
    category?: string;
    hours: number;
    deep?: boolean;
    note?: string;
  }
  export interface TimePayload {
    date?: string; // default today
    entries: TimeEntryInput[];
    note?: string;
  }
  ```
  and the `{ tool: 'time'; payload: TimePayload }` arm on `Action`.
- **`stub.ts`**: insert time detection into the classification order **between query (2) and todo-list (3)** — time narration is statement-shaped, so it must be caught before the "need to / have to" todo heuristics eat it. Deterministic patterns:
  - `(\d+(?:\.\d+)?)\s*(?:hours?|hrs?|h)\b\s+(?:on|of|at|for)\s+(.+)` — "2.5 hours on dugout edge charting"
  - `worked\s+(\d+(?:\.\d+)?)` — "worked 8" → project `job`
  - project keywords: `dugout|DE\b` → `dugout-edge`; `work|job|meeting(s)? at work` → `job`; `idea|exploring|research(ed)? (a )?new` → `exploration`; else `personal`
  - category keywords: `call|demo|outreach|follow.?up` → sales; `built|coded|shipped|designed` → product (+ `deep: true` only when paired with `straight|focused|uninterrupted|deep`); `ad|content|post|SEO` → marketing; etc.
- **`claude.ts`**: add the `time` tool schema for the Haiku structured-output fallback. Copy the taxonomy tables and the three hard rules from the prototype skill verbatim into the tool description:
  1. **Never invent hours** — if narration has no duration, return a clarify action, don't split the difference.
  2. `deep` defaults false; meetings/email/admin/"here and there" are never deep.
  3. `exploration` is a project, never a Dugout Edge category.
- Tests: extend `stub.test.ts` / `hybrid.test.ts` with the phrases above plus the ambiguous ones ("spent the morning on the hats idea" → exploration, no hours → clarify).

## 3. Page (`src/app/time/`)

Port the prototype dashboard's design 1:1 (it was decided with Beau; don't redesign):
- **Hero:** Dugout Edge hours + deep share, last 7 days, delta vs prior 7. This is the page's reason to exist.
- Tiles: total tracked · DE deep · exploration-vs-DE · days logged.
- Charts: stacked hours/day by project (fixed colors: DE `#0891b2`, job `#7c3aed`, exploration `#db2777`, personal `#d97706` — CVD-validated set, color follows the entity); DE deep-hours trend; DE by category.
- Day table linking to the journal entry.
- Data via Prisma aggregate queries; window logic identical to `src/pages/time.tsx` `getStaticProps` in this repo (last 7 calendar days ending at latest logged date; prior-window delta null when prior is empty).

## 4. Import script

One-shot, same pattern as the prior widget imports: read this repo's `data/widgets/time.json`, upsert per date (`@@unique([userId, date])` makes it idempotent):
`entries[] → TimeEntry` rows with `ordinal` = array index; day `note` → `TimeLog.note`. Derived fields in the JSON (`totalHours`, `byProject`, …) are dropped — recomputed at read.

## 5. Out of scope for the port

- Hours **targets** (e.g. "10 DE hours/week"): don't schema them yet. Set a target only after the baseline exists — same discipline as `data/profile.yml` not gaining a time section until then.
- Timer/start-stop UI. The whole design premise is retrospective narration; a timer would be a different product (that's what Clockify is, and it was rejected 2026-08-01).
- Editing individual entries in the UI — narrate a correction instead, matching the app's chat-first model.
