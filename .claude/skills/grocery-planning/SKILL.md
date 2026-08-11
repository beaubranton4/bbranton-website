---
name: grocery-planning
description: Use when Beau is planning or assessing a week of groceries — "how much should I buy", "did I buy too much", sizing a shopping list for N days of meals for himself and/or Abby, meal-prepping from recipes, or reviewing a grocery receipt against his cut plan.
---

# Grocery Planning

Size a week's grocery buy so that eating *everything purchased* still lands on the cut plan — the "impossible to overeat" invariant. Same data backbone as [[food-logging]]: targets from `data/profile.yml`, recent patterns from `data/widgets/{calorie,activity}.json`, and the validated reference shop in `references/baseline-week-2026-08-09.md`.

## The envelope method

1. **Gather inputs.** Who's covered (Beau / Abby / both), which days and meals the groceries must cover, planned meals out, expected training days, dinner recipes or preferences, budget. Ask only for what's missing; assume 5 weekdays × 3 meals if he says "the week."
2. **Compute the calorie envelope** from `data/profile.yml` day-type targets — always recompute from the file, never from a remembered number. Beau's day mix: use his stated training days; if unstated, assume 2 training + 1 steps_10k + rest low for any weekday span (that's 2400×2 + 2100 + 1800×2 = **10,500** for a 5-day week at current targets). Abby defaults to no training days (steps_10k/low mix) unless told — she has no logged activity. Subtract a flat **~600 cal per person per restaurant meal**. When the shop covers both people, do all math at the combined level — one combined envelope, one combined protein floor; only named split dinners need per-person accounting.
3. **The envelope is a ceiling, not a suggestion.** Total purchased *edible* calories ≤ envelope + ~5% pantry slack. Pantry staples bought this week (rice, oil, sauces, condiments) count at the portion that will actually be eaten this week, not the whole package — but say so in the output. If the list overshoots, cut items — starting from the grazeable-carb column, never the protein column.
4. **Buy protein to the aim, carbs to the remainder.** Purchased protein ≥ `aim_g` × days (Beau 145 g/day, Abby 130), minus ~45 g per person per restaurant dinner (those meals carry their own protein). Protein anchors (chicken, eggs, yogurt, cottage cheese, fish, tofu) are self-limiting; underbuying them is what forces snacking later.
5. **Cap the danger zone.** Grazeable carbs — bread, crackers, chips, snack bars, and any single fruit bought beyond ~2 lb — max ~25% of the envelope. This is where "bought too much" becomes "ate too much." Name these items explicitly in the output.
6. **Flag sodium carriers** (Beau's limit is 1,500 mg/day): cured/smoked meats, brined things, deli bread, cheeses, sauces. Advise spreading them across days, not stacking.
7. **Price it** from the baseline's unit prices (~$190/week validated for Beau + 3 shared dinners); items with no reference price get an estimate marked `*`. Note items that blow the budget without feeding the envelope.

## Output shapes

**Plan mode** ("how much should I buy?"): a shopping list table — item, quantity (lb/packs), ~price, share calories (at the same level as the envelope: combined for a both-people shop, Beau's for a solo shop), protein — followed by the envelope math shown in one or two lines (envelope vs. list total vs. protein floor) and a one-line verdict.

**Assess mode** (receipt or list given): split shared items, group into protein anchors / split dinners / carbs / veg+misc with share calories and protein, compare against the envelope, name the danger-zone items, one-line verdict. The baseline file shows the finished form.

## Guardrails

- Trust Beau's stated portions, package sizes, and prices over estimates; mark package-size assumptions with `*`.
- Never shrink protein to fit the envelope — cut grazeable carbs, then drinks, then price.
- Veg and greens are effectively free; never the reason a list fails.
- Don't moralize purchases. The verdict is math (envelope, floor, cap), not judgment.
- A new validated shop worth keeping goes in `references/` as a dated file, same format as the baseline.
