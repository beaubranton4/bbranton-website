# AI Wallet — Card Picker + Credit Burndown

## Verdict (2026-05-06)

**Latent demand, not active demand.** The tracking version is a worse MaxRewards. The *agentic execution* version (AI that actually books your Uber/DoorDash/flight using the right credit) is genuinely novel and unsolved — but a hard build for a niche audience (premium cardholders). Could be a wedge into a broader "personal financial agent" product. Probably not a standalone $1M ARR business in year one.

## Two related concepts

1. **Card picker:** AI that knows your wallet and picks the right card per purchase scenario (groceries → Amex Gold, dining out → CSR, online → Citi Custom Cash).
2. **Credit burndown:** AI that reminds + redeems statement credits before they expire ($10 Uber, $10 Grubhub, $50 airline, etc.).

## Search demand signal

**Category demand: huge.**
| vol | kd | keyword |
|---|---|---|
| 201,000 | 41 | credit card rewards |
| 165,000 | 41 | rewards credit card |
| 60,500 | 43 | best credit card for rewards |
| 33,100 | 38 | credit card cash back rewards |

**Product-concept demand: tiny.**
| vol | kd | keyword |
|---|---|---|
| 140 | 8 | how to maximize credit card points |
| 70 | 7 | maximize credit card points |
| 20 | — | website to maximize credit card points |

People search for the *outcome* (more rewards) — millions/mo. Almost nobody searches for "AI wallet that picks the best card." Classic category-creation pattern (Mint, Rocket Money).

## Competitive landscape

| Tool | Layer | Gap |
|---|---|---|
| **MaxRewards** | Tracks Amex/Chase/Citi credits, monthly reminders | Just a dashboard. You still have to remember to use it. |
| **CardPointers** | Tracking + category bonus reminders, browser extension | Tracking-first, no execution. |
| **AwardWallet** | Points/miles balances + expirations across 600+ programs | Doesn't touch monthly statement credits. |
| **Kudos / Coffee** | Pick the best card at checkout (browser extension) | Card-selection only, not credit burndown. |

Nobody has cracked the agentic execution layer:
1. Notice credit cycle is ending → proactively suggest redemption
2. Actually book/order on your behalf with the right card
3. Stack credits intelligently across merchants

## Why the agentic layer is hard

- Each merchant needs a separate integration (Uber API, Grubhub API, airline portals)
- Card issuers don't expose credit balances via API — MaxRewards scrapes statements
- Trust UX wall: letting an AI place orders with your money

## Bull case

If AI agents become the default checkout layer (Apple Intelligence, ChatGPT shopping, Claude computer use), then the "your wallet AI" becomes infrastructure — a layer the agent calls before booking anything. 3–5 year bet.

## Open questions

- Could you pilot this with just one or two cards (Amex Plat + CSR) and one or two merchants (Uber + DoorDash) to prove the agentic pattern?
- Is the wedge "credit burndown reminders" (boring, MaxRewards already does it) or "AI books for you" (novel, hard)?
- Distribution path: Apple Wallet adjacent? Browser extension at checkout? iMessage agent?
