# eBay API + Agentic Payments

## Update (2026-05-07) — Pain-point clusters

Three more keyword_suggestions calls to map seller/reseller pain. Headline: **the reseller market is exploding (5,400/mo "ebay reseller", ↑238% YoY)** and the workflow is full of unsolved pain. Five clusters worth building against.

### Cluster 1 — Reseller market is on fire

| vol | kd | keyword | YoY |
|---|---|---|---|
| 5,400 | 31 | ebay reseller / reseller ebay / reseller on ebay | **↑238%** |
| 720 | 17 | ebay reseller near me | ↑22% |
| 170 | 35 | ebay reseller business | **↑179%** |

The audience tripled in 12 months. People are explicitly searching to *become* eBay resellers. This is the cohort to sell to.

### Cluster 2 — Sold-listings price research is a massive, broken workflow

| vol | kd | cpc | keyword |
|---|---|---|---|
| 12,100 | 22-27 | $9.62 | ebay sold listings / sold listings ebay (4 variants) |
| 880 | 11 | $12.93 | search sold listings ebay |
| 590 | 16 | **$53.36** | how to find sold listings on ebay |
| 590 | 13 | $5.97 | search ebay sold listings |
| 590 | 18 | **$53.36** | how to check ebay sold listings |
| 390 | 14 | — | how to see sold listings on ebay |
| 260 | 24-37 | — | ebay sold listings sports cards / baseball cards (↑1,329-2,567% YoY!) |

**Reading:** 12k+/mo just trying to find sold prices. $53 CPCs on the "how to" variants — money pours into this category. eBay's own UI is famously bad for sold-listings research. **This is a huge unmet need** — people are literally googling "how do I do this on the eBay site." The sports/baseball card sub-cluster is up **2,500% YoY** — collectibles boom is real.

### Cluster 3 — Vertical-specific listing pain (KD ≈ 0)

| vol | kd | keyword |
|---|---|---|
| 480 | 0 | how to sell clothing on ebay |
| 480 | 0 | how to sell clothes on ebay |
| 390 | 3 | how to sell sports cards on ebay |
| 390 | 3 | how to sell baseball cards on ebay |
| 390 | 0 | how to sell pokémon cards on ebay |
| 390 | 0 | how to sell books on ebay |
| 320 | 11 | how to sell coins on ebay |

KD essentially zero — these SERPs are wide open for content + tool plays. Every vertical has different rules (cards = grading + sold comps; clothes = brand + size + measurements; books = ISBN; coins = grade). A *vertical-specific listing agent* beats a generic one.

### Cluster 4 — Beginner workflow pain (huge top of funnel)

| vol | kd | keyword |
|---|---|---|
| 18,100 | 28 | how to sell on ebay |
| 5,400 | 10-38 | how to sell {an item, products, things} on ebay |
| 1,600 | 9-14 | tips on how to sell on ebay |
| 1,300 | 11 | how to start to sell on ebay |
| 1,000 | 29 | how much does it cost to sell on ebay |
| 720 | 12 | how to sell on ebay for beginners |
| 720 | 12 | how to find things/items to sell on ebay |
| 590 | 10 | how to sell on ebay 2025 |

Massive top-of-funnel content opportunity — but more importantly, **720/mo "how to find things to sell on ebay"** = sourcing pain among beginners. People don't know what to flip.

### Cluster 5 — Agentic / AI / automation

**Almost zero search volume in any of these clusters for "AI / agent / automation / bulk / tool"** — meaning the buyer doesn't yet have language for what they want. Same pattern as the AI-wallet category: the demand for the *outcome* is enormous; nobody's searching for the *product* by name yet. Category creation play.

## The five concrete pain points to build against

| # | Pain | Audience | Current solution | Why it's still painful |
|---|---|---|---|---|
| 1 | **Sourcing** ("what should I flip?") | Aspiring + active resellers | YouTube videos, Discord groups, gut feel | No tool tells you *right now* "this $5 thrift item sells for $40 on eBay, here's the comp" |
| 2 | **Pricing research** ("what's it worth?") | Resellers, buyers, sellers cleaning out attics | eBay sold filter (broken UX), Terapeak (paid, eBay-only), 130point (cards) | The native sold-listings UX is genuinely bad. People google "how to" because they can't figure it out. |
| 3 | **Listing speed** ("photo → live listing") | Volume sellers (50+ items/mo) | Manual 5–15 min per listing | AI can do title + description + category + condition from photos in 30 seconds. Nobody's shipped this well per-vertical. |
| 4 | **Cross-platform listing + repricing** | Pro resellers ($1k+/mo) | Vendoo, List Perfectly, Crosslist (manual UX) | These tools cross-list but don't agentically reprice or pull from sold comps. |
| 5 | **Customer/return management** | High-volume sellers | Manual messaging, eBay's clunky tools | Returns + offers + messages can absolutely be agent-handled. |

## Where the agentic-commerce wave amplifies this

- **Buyer-side**: when ChatGPT/Claude becomes a buying agent, it needs *price-discovery infrastructure*. Whoever builds the best "is this a good price right now" API wins. eBay sold-data is the canonical source.
- **Seller-side**: agents listing for agents. eBay sellers want their inventory discoverable + purchasable by AI shopping agents. Listings need to be *agent-readable* (structured schema, condition standardization). Today they're optimized for human SEO.
- **Both sides converge** on the same pain: structured, real-time, accurate price + condition data. Whoever owns that layer is infrastructure for the agentic commerce stack.

## Updated product wedges (ranked)

| Rank | Wedge | Why it wins | Risk |
|---|---|---|---|
| 1 | **"Worthy" / Sold-comp lookup app** — point camera at item, get instant sold-comp answer + sell-on-eBay button | Highest-pain, highest-demand cluster (12k/mo + $53 CPC). Consumer + reseller use. Wedge into broader reseller product. | Low moat once Apple/Google ship visual lookup natively. |
| 2 | **Vertical reseller agent for collectibles (sports cards first)** | Beau's domain (former pro baseball player + sports memorabilia natural angle). Sold-listings searches for sports cards up 2,500% YoY. Card buyers/sellers already pay for tools (eBay's own Vault, PSA, 130point). | Crowded category (eBay Vault, GoCollect, Card Ladder). Need a clear edge. |
| 3 | **End-to-end reseller agent (photo → list → cross-list → reprice → message)** | The 200-listing-pro reseller has highest WTP and explicit pain. Cross-listers exist but aren't agentic. | High build cost (multiple platform APIs). Pro market is small (~50k–100k full-time resellers in US). |
| 4 | **Beginner reseller "what should I sell" coach** | 720/mo + huge top-of-funnel content | Hard to monetize beginners. Better as content-led acquisition for #1 or #3. |
| 5 | **Buyer-side agentic checkout layer for eBay** | Right with the agentic-commerce wave | Likely eBay or Stripe builds this themselves. |

## Recommendation

**Build #1 first as a wedge.** A consumer-facing "What's it worth on eBay?" app with the killer feature being instant sold-comp lookup from a photo. Free / freemium. Use it to:

1. **Acquire** the reseller audience (5,400/mo head term, 238% YoY growth).
2. **Validate** that the photo→identification→sold-comp pipeline works.
3. **Upsell** to #2 (vertical reseller agent for cards) or #3 (end-to-end pro reseller).

The data layer you build for #1 is the same data layer that powers #2, #3, and #5. That's the moat — sold-comp data, normalized, multi-source (eBay + Mercari + StockX + Whatnot + 130point + GoCollect).

## Open questions

- eBay API access: do you need a Partner account, what are the rate limits on `getItemSummariesByEbayMarketplace` and the Marketplace Insights API for sold data?
- Is sold-listing data available via API or do you have to scrape? (Last I checked: limited via API, full access via Marketplace Insights API which is gated.)
- What's the legal / TOS posture on AI re-listing? eBay's TOS may have explicit clauses on automation.
- Should the wedge be a mobile app (best for photo→answer) or a browser extension (best for "I'm shopping right now, is this a good price")?

---

## Verdict (2026-05-06)

**Promising and underexplored.** The eBay API has steady developer demand (~1,900/mo) but no AI/agentic keyword cluster yet — meaning the category is open. eBay's catalog (1.9B+ listings, structured pricing, sold-history data) is uniquely well-suited for AI agents. Combined with the agentic-payments wave (Stripe agentic checkout, Visa Intelligent Commerce, Mastercard Agent Pay, OpenAI x Stripe instant checkout), this is a real opportunity window — probably 2026–2027.

## Search demand signal

| vol | kd | keyword |
|---|---|---|
| 1,900 | 1–8 | ebay api / api ebay / ebay developer api (↑53% YoY) |
| 140 | 5–23 | ebay api key / browse api / search api / finding api |
| 110 | 0–27 | ebay api documentation |
| 90 | 0 | ebay pricing api / ebay price api |
| 70 | 4 | ebay marketplace insights api |
| 70 | 5 | ebay python api |

- Developer-focused, not consumer.
- Zero hits for "ebay AI agent / automated lister / arbitrage bot" — virgin keyword territory.
- KD is extremely low (1–8) because eBay's own developer docs dominate; they're not optimized for tool sales.
- The growth (↑53% YoY for "ebay developer api") suggests fresh developer interest — likely AI builders looking at eBay as a data source.

## Why eBay is uniquely good for agents

1. **Massive structured catalog**: 1.9B+ listings with consistent fields (title, condition, price, shipping, seller rating).
2. **Sold history**: completed-listings API gives real demand prices, not just asks. Killer signal for arbitrage agents.
3. **Programmatic listing creation**: agents can list, relist, end, and message via API.
4. **Programmatic checkout**: Buy API supports app-driven purchases.
5. **Reseller/arbitrage workflow is already manual and tedious** — perfect agent target.

## Agentic payments context (2026)

- **Stripe** — agentic checkout / agentic-readyAPIs (Sessions 2026 was full of this)
- **OpenAI × Stripe** — instant checkout in ChatGPT
- **Visa** — Intelligent Commerce
- **Mastercard** — Agent Pay
- **Anthropic** — computer use (can drive any web checkout)
- **Skyfire** — crypto-native agent payment rails

Convergence: in 12–18 months, AI agents will be normal buyers and sellers. eBay is one of the few marketplaces with both the API surface and the price-discovery data to make that work cleanly.

## Possible product wedges

1. **AI eBay reseller assistant**: photograph an item → agent identifies it, prices via sold-history, drafts listing, lists across eBay/Mercari/Poshmark, handles messages, reprices over time. (Existing tools: Vendoo, List Perfectly, Crosslist — none are agentic.)
2. **AI sourcing agent**: feed a budget + category, agent scans eBay/Goodwill/estate sales for arbitrage opportunities.
3. **Collectibles agent**: cards, coins, watches — verticals where price discovery via sold history is the entire game. Beau's a former pro athlete → sports memorabilia is a natural angle.
4. **Agentic checkout layer for eBay**: API wrapper that lets ChatGPT/Claude buy on eBay with built-in budget/auth controls.
5. **For sellers — automated relist + reprice + message agent**: solves the "I have 200 listings to manage" problem for full-time eBay sellers.

## Competitive landscape

- **Vendoo / List Perfectly / Crosslist** — manual cross-listers, no AI agency
- **Title Builder / 3Dsellers** — eBay-specific seller tools, mostly templating
- **Terapeak (eBay's own)** — seller analytics
- **Whatnot / Mercari** — competing marketplaces, also reseller-friendly

Nobody is building an end-to-end agentic reseller. The closest is "AI-assisted listing creation," which is just GPT writing titles.

## Open questions

- Sellers or buyers as the wedge? Sellers have higher willingness-to-pay (it's their job).
- Is the right starting category sports memorabilia (Beau's domain) or something hotter (sneakers, watches, Pokémon)?
- Does eBay's API rate-limit or pricing make this viable at scale, or do you need to be an eBay Partner?
- What's the moat once Anthropic computer use can do this on the website directly?
