# 2026-05-21 — Keyword Research Session

Total: 14 keyword pulls + 1 zero-result/name-availability finding. Roughly $0.15 total DataForSEO spend.

Each entry: **CSV → readable | JSON → raw** | seed | items | top finding.

## Calorie Cart cluster

| File | Items | Seed | Top finding |
|---|---:|---|---|
| [calorie-cart_meal-planner_2026-05-21.csv](./calorie-cart_meal-planner_2026-05-21.csv) | 100 | `meal planner` | **The KD 4-6 wedge is here.** "whole foods meal planner" 5,400/mo KD 4; "1200 calorie meal planner" 12,100/mo KD 6. These are the SEO entry doors. |
| [calorie-cart_calorie-tracker_2026-05-21.csv](./calorie-cart_calorie-tracker_2026-05-21.csv) | 73 | `calorie tracker` | Broader market is brutal (avg KD 66, MyFitnessPal owns). **But:** restaurant-specific trackers (chipotle, dominos) at KD 5 prove the in-context calorie pattern. |
| [calorie-cart_name-availability_2026-05-21.json](./calorie-cart_name-availability_2026-05-21.json) | 0+0 | `calorie cart` + `grocery calorie tracker` | **Both returned ZERO results.** Name is available; concept search demand is latent. Drive traffic via the meal-planner long-tails. |

## Fitness tools cluster — strongest SEO wedge in the portfolio

| File | Items | Seed | Top finding |
|---|---:|---|---|
| [fitness_1rm-calculator_2026-05-21.csv](./fitness_1rm-calculator_2026-05-21.csv) | 31 | `1rm calculator` | **"1rm calculator" = 110,000/mo at KD 7.** Insane ratio. Per-lift sub-pages (bench, squat, deadlift) each 3-22k/mo at single-digit-to-low-double-digit KD. |
| [fitness_marathon-training-plan_2026-05-21.csv](./fitness_marathon-training-plan_2026-05-21.csv) | 50 | `marathon training plan` | 74,000/mo at KD 12, CPC $2.74-$3.84. Hal Higdon owns it with static PDFs from 2005. Wide open for a modern adaptive generator. |
| [fitness_macro-calculator_2026-05-21.csv](./fitness_macro-calculator_2026-05-21.csv) | 50 | `macro calculator` | Core 110k/mo KD 31; specific variants like "macro calculator fat loss" KD 10 / 14,800/mo. "myfitnesspal macro calculator" growing +1,029% YR. |
| [fitness_body-fat-calculator_2026-05-21.csv](./fitness_body-fat-calculator_2026-05-21.csv) | 50 | `body fat calculator` | 74k/mo KD 35 — higher competition than other fitness tools. Use as portfolio anchor + brand halo, not direct monetization. |

## Data / AI tooling cluster — mixed bag

| File | Items | Seed | Top finding |
|---|---:|---|---|
| [data-ai_openai-pricing_2026-05-21.csv](./data-ai_openai-pricing_2026-05-21.csv) | 30 | `openai pricing` | **WINNER.** "openai api pricing" 8,100/mo KD 10 CPC $16. "openai codex pricing" growing +2,536% YR. Category being defined right now. |
| [data-ai_csv-editor_2026-05-21.json](./data-ai_csv-editor_2026-05-21.json) | 9 | `csv editor` | Decent niche. 880/mo KD 10. Stable. LLM-resistant due to file-handling. Small but defensible. |
| [data-ai_cron-expression_2026-05-21.json](./data-ai_cron-expression_2026-05-21.json) | 17 | `cron expression` | **LOSER.** Declining -33% to -64% yearly. LLMs in chat write cron expressions instantly. Don't fight this. |
| [data-ai_regex-tester_2026-05-21.csv](./data-ai_regex-tester_2026-05-21.csv) | 37 | `regex tester` | **LOSER.** 18,100/mo on the core term but declining -55% to -64% yearly. Same LLM-eats-tools dynamic. |

## Personal finance cluster — mostly owned

| File | Items | Seed | Top finding |
|---|---:|---|---|
| [finance_subscription-tracker_2026-05-21.csv](./finance_subscription-tracker_2026-05-21.csv) | 39 | `subscription tracker` | **Rocket Money owns this.** 11k of 17k recent monthly demand is *their branded query*. SEO arbitrage here is not a thing. |
| [finance_bill-negotiation_2026-05-21.json](./finance_bill-negotiation_2026-05-21.json) | 16 | `bill negotiation` | **The one real wedge.** "hospital bill negotiation" 2,400/mo KD 18, "ambulance bill negotiation" +127% YR. No software incumbent in medical space. |
| [finance_couples-budget-app_2026-05-21.json](./finance_couples-budget-app_2026-05-21.json) | 8 | `couples budget app` | Owned by Honeydue/Zeta, declining -32% YR. Skip. |
| [finance_credit-card-rewards-tracker_2026-05-21.json](./finance_credit-card-rewards-tracker_2026-05-21.json) | 1 | `credit card rewards tracker` | Single result returned (seed too narrow). 170/mo KD 21 +133% YR but tiny. |

## Cluster-level synthesis

Three deep-dive exploration docs were written from this data:

- **[fitness-tools-cluster.md](../../fitness-tools-cluster.md)** — strongest SEO wedge; build first
- **[data-ai-tools-cluster.md](../../data-ai-tools-cluster.md)** — LLM pricing wins, cron/regex are dead
- **[personal-finance-couples-perks.md](../../personal-finance-couples-perks.md)** — mostly owned, medical bill negotiation is the one wedge

Also: **[calorie-aware-grocery-cart.md](../../calorie-aware-grocery-cart.md)** uses the calorie-cart cluster data above.
