---
name: time-tracking
description: Use when Beau narrates how he spent his time ("worked 8 hours, then 2 hours on Dugout Edge charting", "spent the morning on sales calls", "burned an afternoon on a new idea"). Estimates hours per bucket, logs them into the day's journal entry, and answers cross-day questions about where his time actually goes.
---

# Time Tracking

Beau narrates a day in natural language; you turn it into hours against a fixed set of buckets and log it to that day's journal entry. Same loop as [[food-logging]] and workout capture — he never opens an app, never starts a timer, and never fills in a form. Just do it and confirm.

**The question this exists to answer:** how much time actually reaches Dugout Edge, and how much of *that* is building versus talking about building. Everything below is in service of that.

## What to do

1. **Parse the narration into entries.** Each entry is `project` × `category` × `hours`, plus a short `note` saying what it actually was.
2. **Estimate hours when he gives shapes instead of numbers.** "The morning" ≈ 3–4 h, "an hour or so" = 1, "most of the day" ≈ 6. Round to the nearest 0.5. Flag anything you guessed with `*` so he can correct it.
3. **Don't force the day to 24 hours.** Untracked time is fine and normal — sleep, meals, decompressing. Only log what he narrated. A day that sums to 11 h is a complete log.
4. **Write the `## Time Log` section** into that day's entry: a human table + a `widget:timelog` block, kept in sync.
5. **Give one line of read-out**, not a lecture. The interesting number is almost always Dugout Edge hours and the deep/shallow split.
6. **Run `npm run extract:widgets`** so `data/widgets/time.json` is current.

## Buckets

Two axes. `project` is *whose* time it was; `category` is *what kind of work* it was. Keeping them separate is what makes the data worth having — "6 hours on Dugout Edge" means something very different if it's 6 h of `product` versus 6 h of `admin`.

### Projects

| key | what it covers |
|---|---|
| `job` | The day job. |
| `dugout-edge` | The venture. Anything that moves the actual business. |
| `exploration` | New ideas, validation, research on things that are **not** Dugout Edge. |
| `personal` | Health, family, errands, life admin. |

**`exploration` is deliberately not a Dugout Edge category.** Beau's standing pattern is that new ideas displace shipping on already-decided ones ([[project_next_venture_decision]]). If exploration hours hide inside "product development," the log can never show him that. Split out, the ratio becomes a fact he can look at.

### Categories

| key | what it covers |
|---|---|
| `product` | Building. Code, design, specs, the actual thing. |
| `marketing` | Content, ads, SEO, social, brand, landing pages. |
| `sales` | Calls, outreach, demos, follow-ups, pricing. |
| `support` | Customer support, onboarding, ops for existing users. |
| `admin` | Billing, legal, tooling, email, planning, bookkeeping. |
| `learning` | Reading, courses, docs, research. |
| `meeting` | Conversations that aren't sales — mentors, advisors, catch-ups. |
| `life` | Catch-all for `personal`. |

Keep this list short. Detail belongs in `note`, not in new category keys. If a category genuinely doesn't fit after a few weeks of logging, add one — don't invent one on the fly for a single day.

### `deep`

`deep: true` marks uninterrupted focused creation — the block where the thing actually got built. This is the analogue of billable/non-billable in a normal time tracker, and it's the most useful field in the schema. Rules:

- Default is `false`. Only mark `true` when he describes real focus.
- Meetings, email, admin, and anything with "in between" or "here and there" in the description are never deep.
- If he says "I worked on Dugout Edge for 3 hours but kept getting pulled away," that's 3 h, not deep.

## The `## Time Log` section

Human table first:

```
## Time Log

| Project | Category | Hours | Deep | What |
|---|---|---|---|---|
| Job | admin | 7 | | Standing meetings, review queue |
| Dugout Edge | product | 2.5 | ✅ | Coach-charting UI |
| Dugout Edge | sales | 0.5 | | Follow-up email to Ryan |
| **Total** | | **10** | **2.5 deep** | |

**Read-out:** 3 h on Dugout Edge, 2.5 of it deep.
```

Then the machine block (raw entries only — the extractor computes totals and the by-project/by-category rollups):

```widget:timelog
person: Beau
entries:
  - { project: job, category: admin, hours: 7, note: "Standing meetings, review queue" }
  - { project: dugout-edge, category: product, hours: 2.5, deep: true, note: "Coach-charting UI" }
  - { project: dugout-edge, category: sales, hours: 0.5, note: "Follow-up email to Ryan" }
note: "one-line day summary"
```

Rules: numeric `hours` (no `h`, no `~`); rewrite the whole block each time rather than appending; keep it identical in content to the table; omit `deep` entirely when false rather than writing `deep: false`.

## Querying across days

Read `data/widgets/time.json`. Each day carries `entries`, `totalHours`, `byProject`, `byCategory`, and `deepHours`. If the JSON looks stale because a section was just logged, run `npm run extract:widgets` first.

Questions worth answering well:

- **"How much time did Dugout Edge get this week?"** → sum `byProject['dugout-edge']` over the last 7 dates. Report the deep share alongside it; the raw number alone is misleading.
- **"Where does my Dugout Edge time actually go?"** → sum `byCategory` across entries where `project === 'dugout-edge'`. The founder failure mode is 80% product, 0% sales.
- **"Am I actually shipping?"** → trend `deepHours` for `dugout-edge` week over week. Flat or falling while total hours rise means the work is turning into overhead.
- **"Is exploration eating Dugout Edge?"** → `byProject.exploration` vs `byProject['dugout-edge']` over the same window. This is the ratio he asked the system to make visible.

Cross-domain queries are the payoff of keeping this in the repo: time.json joins to `calorie.json`, `workout.json`, and `activity.json` on `date`. "Do I get more deep work on days I train?" is one join away.

## Guardrails

- **Never invent hours he didn't narrate.** If he says he worked on Dugout Edge and gives no duration, ask — don't split the difference. A fabricated number poisons every trend built on top of it.
- One section per capture. Never overwrite prose or an unrelated section.
- Don't re-ask whether to log. Logging is the standing habit.
- Trust his stated hours over your inference from the narration.
- Don't let the taxonomy grow. The value is in comparing this week to last week, and that breaks the moment categories churn.
