# Seasonal / Exotic Fruit Arbitrage — Exploration (2026-06-01)

**Status: keyword surface validated, model intact, but flagged as a category mismatch with the portfolio thesis. Logistics is the kill-or-confirm variable.**

## The seed idea (as floated)

> Sell fruit online that's in season, sourced from wherever it's at peak in the world. When it's apple season, source from the best US apple farmers; when it's orange season, ship oranges. Ship in-season (and exotic/hard-to-get) fruit to places in the country that don't have it — people pay a premium because they can't get it locally. The Hawaii observation: spoiled in California with everything available, but in Hawaii the fruit you want is either absent or imported and very expensive. Arbitrage the surplus/seasonal abundance into the scarcity markets.

## The keyword read (DataForSEO, 2026-06-01, ~$0.02)

Two distinct universes — they are NOT the same business:

### Cluster 1 — "fruit delivery" (mostly gifting, mostly skip)
```
   vol  | kd | intent        | keyword
  33100 |  - | transactional | fruit arrangements delivery   ← Edible Arrangements
  12100 |  - | transactional | fruit gift baskets delivery   ← brand-owned gifting
   6600 |  - | commercial    | fruit delivery
   2400 |  - | transactional | fresh fruit delivery
    590 |  - | transactional | fruit delivery box / boxes    ← the model
    260 |  - | commercial    | exotic fruit delivery
    170 |  - | commercial    | monthly fruit delivery
    140 |  - | commercial    | tropical fruit delivery
```
The high-volume head is owned by gifting brands (Edible Arrangements, fruit baskets). Wrong business, high competition.

### Cluster 2 — "exotic fruit" (the real, underserved surface, KD≈0)
```
   vol  | kd | intent        | keyword
   1900 |  - | commercial    | exotic fruit near me          ← #1 signal: local scarcity
   1000 |  - | transactional | exotic fruit box / boxes      ← the money keyword
    260 |  1 | commercial    | exotic fruit sale
    260 |  - | transactional | where to buy exotic fruit
    260 |  - | transactional | exotic fruit for sale
    260 |  - | transactional | exotic fruit delivered
    260 |  - | commercial    | exotic fruit store / shop
    210 |  - | commercial    | exotic fruit market / miami
    170 |  - | transactional | where to buy exotic fruit near me
    140 |  - | commercial    | best exotic fruit delivery
```
(Excluded: `exotic rare fruit nursery` 1,300 and `exotic fruit seed` — those are people buying plants/trees, not fruit to eat.)

## What the data actually tells us

1. **"near me" + "where to buy" dominate the intent.** `exotic fruit near me` (1,900) and the `where to buy...near me` long tail are *literally* the Hawaii observation showing up as search behavior. People search locally, can't find it, get stuck. The pain is real and reachable.
2. **The keywords support a curated BOX, not a marketplace.** `exotic fruit box/boxes` (1,000) + `fruit delivery box` (590) + `monthly/tropical fruit delivery`. A rotating seasonal box ("what's at peak right now") fits demand far better than "buy any fruit anytime."
3. **Competition is genuinely open.** KD null / single-to-low-double-digit almost everywhere. Catch: low KD partly reflects modest volume. This is a niche, not a flood.
4. **Not greenfield.** Existing players: Miami Fruit, Tropical Fruit Box, Melissa's, Rare Hawaiian, Manfilly. None have saturated the long tail. The wide-open wedge is **programmatic local SEO** — a page per `exotic fruit in [city]` — since "near me" intent is strongest and nobody has built the local layer.

## Holy Grail filter ([guiding-principles](./guiding-principles.md))

- **Rule 1 — Pain proximity: PARTIAL.** The Hawaii pain was real and firsthand — but *situational* (a trip), not ongoing. Beau lives in California where fruit is abundant; he is not the recurring buyer. Closer to pain *memory* than pain *proximity*. The recurring buyer is someone living in a fruit-scarce market year-round (Hawaii, Alaska, rural Midwest, transplant communities craving home-country fruit).
- **Rule 2 — Funnel: PASS (modest).** Low-competition exotic-fruit-box keywords + programmatic local/seasonal SEO is a clear, ownable funnel. Volume is small but real and commercial-intent.
- **Rule 3 — Passion: UNKNOWN.** Open question for Beau. Would he grind on perishable-goods logistics on a flat-growth Sunday in year three?

## The honest tension — this fights the portfolio thesis

Everything else in this folder is built on the [micro-SaaS / tool-SEO thesis](./README.md): **LLM-unkillable, near-zero marginal cost, ships in days, take-rate pricing, dogfood-first.** This idea is the opposite of almost all of it:

- **Marginal cost is brutal, not zero.** Every order is perishable inventory + cold-chain freight + spoilage risk. Costs scale 1:1 with revenue. (Violates the whole economic premise of the portfolio.)
- **Doesn't ship in a weekend.** Needs supplier relationships, packaging R&D, a 3PL or self-fulfillment, returns/refund ops for damaged arrivals.
- **No take-rate leverage.** It's classic retail margin on a perishable — the hardest margin profile there is.
- **Dogfood is weak.** Beau in CA has no standing reason to buy this weekly.

**This is an operations/logistics business wearing an SEO funnel.** The SEO is the easy 20%; cold-chain perishable fulfillment at a margin is the hard 80%. That inverts the folder's usual "easy hard-part" test.

## The kill-or-confirm variable: unit economics of shipping fresh fruit

Before any build, the single question that decides everything:

> Can a box land fresh, ~2 days out, at a price the customer pays gladly, and still leave margin after fruit + box + gel/insulation + expedited freight + spoilage + payment fees + CAC?

Rough back-of-envelope to pressure-test (fill in real numbers before committing):
- **Freight is the killer.** Perishables need 1–2 day shipping with cold packs. UPS/FedEx 2-day for a 5–10 lb insulated box is often **$25–60**. That alone can exceed the fruit's retail value.
- **Spoilage tax.** Even at a low damage/spoil rate (say 5–10%), you eat the full COGS + freight on every failed box, plus a refund/reship. Budget it as a line item, not an exception.
- **Implied price floor.** Fruit ($15–30) + box/insulation/gel ($4–8) + 2-day freight ($30–50) + ~3% fees + spoilage reserve → **landed cost often $55–90 before any margin.** Customer likely needs to pay **$90–150/box** for the model to clear ~30–40% gross. That's a real but narrow willingness-to-pay band (gifting + scarcity-market buyers, not everyday grocery).

Ways the margin math can actually work (each needs validation):
- **Sell scarcity, not commodity.** Apples shipped anywhere = no margin (Costco beats you). Rare/exotic/peak-season-only fruit a market literally cannot get = pricing power. The "exotic" keyword cluster, not the "apple" idea, is where margin lives.
- **Regional hub-and-spoke, not nationwide.** Cross-country 2-day cold chain is brutal. Shipping *within* a region from a hub near the source (or near the scarcity market) cuts freight and spoilage hard.
- **Pre-order / drop model.** Sell the harvest *before* you buy it (Miami Fruit does this). No inventory risk, no guessing demand, source-to-order.
- **Subscription smooths logistics.** Known volume per week = batch freight rates, predictable packing, planned sourcing. Box subscription > one-off orders operationally.
- **Premium framing covers freight.** A $40 freight charge is fatal on a $25 grocery order but invisible inside a $120 curated-experience box. Position as experience/gift/luxury, never as grocery.

## Recommendation

**Don't build yet. Do the logistics validation as a paper exercise first**, because logistics — not demand, not SEO — is the binary kill switch:

1. **Price one real box end-to-end.** Pick one peak fruit + one scarcity destination (e.g. Hawaiian rambutan → Chicago). Get actual freight quotes (UPS/FedEx 2-day, insulated, ~8 lb) and real wholesale fruit cost. See if a defensible retail price clears 30%+ after spoilage reserve.
2. **Validate WTP before inventory.** Stand up a pre-order landing page for one seasonal drop, drive the cheap `exotic fruit box` / local keywords to it, and see if people put down deposits. Zero inventory risk; this is the dogfood substitute.
3. **If the numbers clear:** start regional + pre-order + subscription, exotic/peak-only SKUs, programmatic local SEO as the funnel.
4. **If freight + spoilage eat the margin (likely the base case):** archive — it's a great-sounding idea the unit economics kill, and it's outside the portfolio's economic sweet spot regardless.

## Related

- [guiding-principles](./guiding-principles.md) — the Holy Grail filter
- [README.md](./README.md) — six-filter checklist + the micro-SaaS economic thesis this idea fights
- Raw keyword data: DataForSEO keyword_suggestions on `fruit delivery` and `exotic fruit`, 2026-06-01
