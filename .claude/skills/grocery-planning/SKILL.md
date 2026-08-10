---
name: grocery-planning
description: Use when Beau is planning or assessing a week of groceries — "how much should I buy", "did I buy too much", sizing a shopping list for N days of meals for himself and/or Abby, meal-prepping from recipes, or reviewing a grocery receipt against his cut plan. Also owns the default grocery list.
---

# Grocery Planning

Size a week's grocery buy so that eating *everything purchased* still lands on the cut plan — the "impossible to overeat" invariant. If the only food in the house sums to the week's envelope, overeating requires going outside the plan.

Same data backbone as [[food-logging]] and [[daily-log]]: targets from `data/profile.yml`, patterns from `data/widgets/{calorie,activity}.json`.

## Run the numbers — don't do this arithmetic by hand

`scripts/grocery-plan.mjs` computes the whole thing from `data/grocery-staples.yml`. Use it. Hand-estimating a 25-item basket across four constraints is exactly the kind of thing that drifts.

```bash
npm run grocery -- --default --days 5 --people beau            # the default list, sized
npm run grocery -- --default --days 5 --people beau,abby --budget 260
npm run grocery -- --plan plans/example-week.yml               # from recipes
npm run grocery -- --assess plans/receipt-2026-08-09.yml       # score a receipt
npm run grocery -- --plan <file> --json                        # machine-readable
```

Flags: `--days N` · `--people beau,abby` · `--meals breakfast,lunch,dinner` · `--mix training=2,steps_10k=1,low=2` · `--out N` (meals eaten out) · `--budget N` · `--restock` (include pantry items) · `--json`.

Report its table and verdict, then add judgment on top — which swap to make, what to cook first, what won't survive the week. The script does the math; you do the thinking.

## The default grocery list

Lives in `data/grocery-staples.yml` as `default_basket` — quantities sized for **Beau alone, one 5-weekday week**, back-derived from the validated 2026-08-09 shop. `--default` scales it to any window and any combination of people.

When Beau says "the usual" or "just tell me what to buy," that's this list. When he buys something new worth keeping, add it to `staples:` with per-unit nutrition and a package size; only add it to `default_basket` if it's genuinely recurring. **One list, one file** — never start a second one.

`pantry: true` items (rice, oil, peanut butter, oats, salsa, Chomps) are multi-week packages assumed already in the kitchen. They're excluded from a weekly buy and shown as "on hand" in recipe mode, because putting a $13 olive oil bottle and 3,800 uneaten calories on a five-day list is how a good plan reads as LEAKY.

## The envelope method (what the script implements)

1. **Envelope** = Σ over people and days of the `profile.yml` target, prorated by which meals the buy covers (breakfast 25% / lunch 35% / dinner 40%) and reduced by any meals eaten out. Day mix defaults to Beau's real pattern: 2 training + 1 steps_10k + 2 low ≈ **10,500 cal for a Beau 5-weekday week**.
2. **The envelope is a ceiling.** Verdict tiers on what the week is *exposed* to:
   - **SEALED** ≤ envelope — eating all of it lands on the cut plan.
   - **SAFE** ≤ maintenance line (envelope + the deficit) — slows the cut, doesn't add fat.
   - **LEAKY** above that — the basket itself can cause a gain. Fix it.
3. **Exposure ≠ the receipt.** A 16 oz jar of peanut butter is not 3,040 calories of this-week risk; the plan draws 6 tbsp and the rest is pantry stock. Only *allocated* calories plus *grazeable* carry-over count against the envelope. A sealed bag of rice isn't a temptation; an open jar is.
4. **Buy protein to the aim, carbs to the remainder.** Protein is the one column allowed to grow and never allowed to shrink — the solver scales the anchors *up* to `aim_g × days` (Beau 145 g/day, Abby 130) before touching anything else. Underbuying protein is what causes the 9pm snacking that actually breaks the plan.
5. **Cap the danger zone.** Items flagged `grazeable: true` — bread, snack carbs, fruit by the pound, nut butter — max ~25% of the envelope. Named explicitly in the output with `△`.
6. **Sodium** (Beau's limit is 1,500 mg/day; Abby has none stated): flagged with `⚡`. On a shared basket the script attributes sodium by envelope share, so Beau isn't scored for Abby's half. When it fails it names the top three carriers — the fix is nearly always one swap.
7. **Price** from the receipt-backed unit prices. ~$190/week is the validated point for 5 weekdays × 3 meals for Beau plus 3 shared dinners.

## Output shapes

**Plan mode** ("how much should I buy?"): the script's shopping table — item, quantity, calories, protein, sodium, cost — then the envelope math and verdict, then your read. Call out what to cook in what order when perishables are tight (salmon day 1–2, chicken by day 3).

**Assess mode** (receipt or list given): transcribe it into a `plans/*.yml` with `share: 0.5` on split dinners, run `--assess`, then interpret. Keep a shop worth remembering in `.claude/skills/grocery-planning/references/` as a dated file.

## Keeping the data honest

- `source: receipt` numbers are paid prices; `source: logged` are Beau's own logged per-unit values; `source: reference` are generic anchors — correct those first.
- Trust Beau's stated portions, package sizes, and prices over anything in the file, and update the file when he corrects one.
- `plans/receipt-2026-08-09.yml` doubles as the regression test: it should score close to the human read in `references/baseline-week-2026-08-09.md` (~10,000 cal, ~750 g protein, SEALED, grazeables over cap). If a data edit breaks that agreement, the edit is what's wrong.

## Guardrails

- Never shrink protein to fit the envelope — cut grazeable carbs, then drinks, then price.
- Veg and greens are effectively free; never the reason a list fails.
- Don't moralize purchases. The verdict is math (envelope, floor, cap), not judgment.
- Fitness math, not dietitian advice.
