# AI Fruit Ripeness Detection — Exploration (2026-07-15)

**Status: NO-GO on both wedges as framed. D2C is a crowded, LLM-unkillable-failing, saturated/declining niche. B2B is a mature capital-intensive hardware industry with no pain proximity. Archive unless a sharply different angle (e.g. pre-harvest orchard imaging) is worth its own separate exploration.**

## The seed idea (as floated)

> Use AI and image recognition to determine if fruit is ripe / will taste good. B2B: sell to farmers to auto-classify fruit instead of human eyeballing. D2C: help shoppers pick the best/ripest fruit at the market. Validate via SEO keyword research (growing trend? "how to tell if X is ripe" volume) and a market scan.

Scoped for this session as **research only** — not committing to either wedge, letting the data decide.

## Holy Grail filter ([guiding-principles](./guiding-principles.md))

### D2C (consumer ripeness-picking app)
- **Rule 1 — Pain proximity: PASS.** Confirmed personally — Beau regularly misjudges fruit ripeness when shopping. Real, recurring, not theoretical.
- **Rule 2 — Funnel: FAIL.** No extreme tailwind (informational demand is flat-to-declining, see below), no low-competition wedge (4+ apps already shipped, big-media/brand SERP saturation on the flagship fruit), no obvious viral loop.
- **Rule 3 — Passion: N/A given Rule 2 fails outright** — moot without a funnel.

### B2B (farm/packhouse auto-classification)
- **Rule 1 — Pain proximity: FAIL.** Confirmed — no farm/ag connection. This is theorizing about someone else's problem, the exact anti-pattern the guiding-principles doc calls out ("Theorizing about markets I'm not in" — eldercare precedent).
- **Rules 2/3: not worth scoring** — Rule 1 fails cleanly, and per the filter's own instructions that's enough to archive.

## The keyword read (DataForSEO, 2026-07-15)

### Cluster 1 — Generic "how to tell if fruit is ripe"
```
   vol | kd | intent        | keyword
    40 |  - | informational | how to tell if fruit is ripe
    10 |  - | informational | how to know if fruit is ripe
     0 |  - | informational | is this fruit ripe
     0 |  - | informational | fruit ripeness guide
```
No category-level volume — people search the specific fruit, not "fruit" generically.

### Cluster 2 — Per-fruit "how to tell if X is ripe"
```
   vol | kd  | intent        | keyword
 22200 |  5  | informational | how to tell if mango is ripe
  9900 |  -  | informational | how to tell if pineapple is ripe
  6600 |  4  | informational | how to tell if avocado is ripe
  6600 |  -  | informational | how to tell if cantaloupe is ripe
  5400 | 12  | informational | how to tell if watermelon is ripe
  3600 |  2  | informational | how to tell if peach is ripe
   880 |  -  | informational | how to tell if banana is ripe
   390 |  -  | informational | how to tell if an orange is ripe
    90 |  -  | informational | how to tell if tomato is ripe
    40 |  1  | informational | how to tell if cherries are ripe
```
100% informational intent on every keyword (DataForSEO classifier scores 0.99–1.0). Low KD everywhere measurable — but per guiding-principles anti-pattern list, **"mistaking low KD for viable" is a known trap when the trend is declining** (see below). Broader semantic clustering (e.g. "how to pick a ripe watermelon" at 60,500/mo, "avocado ripeness" at 14,800/mo) pushes real TAM higher — conservative exact-phrase TAM ≈ **56K/mo**, broader-phrasing TAM likely **80–120K/mo**.

### Cluster 3 — Direct product-intent ("an app for this")
```
   vol | kd  | intent                  | keyword
    10 |  -  | informational           | fruit ripeness app
    10 |  49 | transactional           | fruit ripeness detector
     0 |  -  | transactional           | produce scanner app
     0 |  -  | informational           | ripeness scanner app
     0 |  -  | informational           | AI fruit ripeness
     0 |  -  | informational           | how to pick ripe fruit app
```
**Total demand for "an app that does this": 20 searches/month.** Google Trends confirms — flat zero across the full 5-year series for every product-intent term, with only one nonzero week out of ~260.

### Trend direction (Google Trends, past 12 months + YoY)
Strongly **seasonal, not secularly growing**: spikes at each fruit's peak season, troughs between. YoY: mango-ripeness phrasing **-33%**, watermelon/pineapple "select ripe" phrasing **-18%**, avocado-adjacent similarly down high-teens. Only banana terms grow (+22% to +84%) — but that's banana-bread recipe demand riding along, not ripeness-checking behavior. This is a **declining category**, not a tailwind.

### SERP saturation (spot-check)
`how to tell if avocado is ripe` — Google's **AI Overview answers the query directly at position 1** (zero-click), then Reddit, Allrecipes, California Avocados (industry brand), The Kitchn, Avocados From Mexico (industry brand), Host The Toast, plus a wall of Shorts/Reels. The flagship fruit is the *most* saturated, not the most open.

`fruit ripeness app` — at least 4 shipped competing apps surfaced directly: **RipenessFoody** (Oct 2025), **ProduceHero**, **Fruit Scanner: Fresh or Rotten** (Feb 2026), **FruitScan AI**, plus **AvoCadabra** ($2.99 one-time, avocado-only) and **RipeOrNot AI** (avocado-only, freemium). Reddit r/AppIdeas / r/SideProject show active hobbyist builders pitching the identical concept right now.

## Competitive landscape

### D2C — camera-only consumer apps
Already shipped and real, not hypothetical:
- **AvoCadabra** — iOS/Android, $2.99, **literally wraps GPT-4o vision** on avocado photos (skin color/texture/shape/stem). Own docs admit visual-only limits.
- **RipeOrNot AI**, **RipenessFoody**, **Fruit Scanner: Fresh or Rotten**, **FruitScan AI** — near-identical low-differentiation camera-photo apps, no visible traction/reviews of note.
- **Academic validation already exists and is public**: Oregon State + Florida State (Oct 2025, 1,400+ iPhone Hass avocado photos, 92% firmness / 84% internal-quality accuracy), MIT Media Lab WISCI (2016, open-source spectrometer add-on), multiple student FYPs (UTAR/ICAROB) — recurring project, never commercialized.
- **Hardware-assisted attempts died**: SCiO (Consumer Physics) — Kickstarter-funded pocket NIR scanner, shipped, then **discontinued as a consumer product** after mediocre field accuracy (avocado ~50–70%, kiwi 78%) and pivoted to enterprise licensing. Consumers didn't want to carry a separate gadget.
- **Technical ceiling**: real ripeness/firmness correlates with NIR bands (850–950nm) a phone's visible-light camera can't see; thick-skinned fruit (avocado, melon, pineapple) limits even NIR penetration. Camera-only apps are essentially proxying the same external cues (color, stem, dimpling) a human already checks by eye. Works OK for avocado-style color cues; structurally weaker for melon/mango/cherries where color says little about internal sugar/firmness.

**The killer finding for the D2C wedge**: AvoCadabra already *is* "point ChatGPT vision at a photo and ask if it's ripe" — packaged as an app. This is precisely the anti-pattern the guiding-principles doc names explicitly: **"Building what ChatGPT answers cleanly in chat."** There's no structured output here beyond a 1–10 score that a raw vision-model prompt already produces for free. Rule 2 of the six-filter checklist (LLM-unkillable) fails directly, not marginally.

### B2B — farm/packhouse grading
Mature, consolidated, capital-intensive hardware industry:
- **TOMRA Food** (~23% market share), **Bühler/Sortex**, **Aweta**, **Compac**, **Unitec**, **Ellips**, **MAF Roda** — decades-old vendors, full optical sorting lines with cameras/lasers/NIR, **$150K–$350K+ per unit**. Market ~$0.5–1.3B, 4–7% CAGR, consolidating via M&A.
- **Software-only precedent exists**: **Clarifruit/Clarifresh** (Israel) — phone camera + optional spectrometer, cloud ML, 50+ customers including ~1/3 of top global produce brands, SaaS pricing. **HyperSpectral** — sensor-agnostic software, raised $8.5M then $7M Series A (Oct 2025), targeting Series B 2026. Proves a software-layer wedge is fundable — but both required real enterprise sales motions and deep produce-industry relationships neither of which Beau has.
- **Most active, least-consolidated adjacent sub-segment**: pre-harvest orchard imaging — **Orchard Robotics** ($22M Series A, 2025) and **Vivid Machines** (tractor/ATV camera rigs scanning 15K trees/hr). This is a different business (hardware rigs + drone/field data + a real go-to-market into ag), not a ripeness-scanning webapp, and would need its own exploration if pursued.

## Six-filter checklist read (from [README](./README.md))

| Filter | D2C | B2B |
|---|---|---|
| Deterministic/structured output | Weak — score is thin wrapper on vision-model output | N/A, moot on Rule 1 |
| LLM-unkillable in chat | **Fails — AvoCadabra already is this** | N/A |
| In Beau's domains (data, home, fitness, sports, AI, social, travel, finance) | Not a listed domain | Not a listed domain, no insider access |
| Real search demand | Flat-to-declining, seasonal, saturated | N/A |
| Pain proximity | Pass | Fail |
| ARPU ambition ($100s–$1000s) | Fails — comps are $2.99 one-time / freemium | Plausible ARPU, but requires capital + enterprise sales incompatible with solo/micro-portfolio approach |

## Recommendation

**Archive both wedges as framed.** This is a clean double-fail, not a "validate further" case:

1. **D2C** clears pain proximity (Rule 1) but fails the funnel (Rule 2) outright — the informational keyword cluster is real but declining and dominated by an AI Overview + brand sites, the product-intent cluster has ~zero search demand, and at least 4 apps (2 in the last 9 months) already ship the exact idea, with the category leader literally being a GPT-4o vision wrapper. That last point alone is a Rule-2/six-filter kill: there's no defensible tool-SEO wedge when the incumbent already *is* "ask an LLM to look at a photo."
2. **B2B** fails pain proximity (Rule 1) outright — no farm/ag connection — and even setting that aside, it's a mature, capital-intensive hardware industry ($150K–350K+ per sorting line) where the only credible software-only comps (Clarifruit, HyperSpectral) needed real enterprise produce-industry relationships and VC capital to break in.
3. **If there's a version worth revisiting**, it's not either of these two — it's the pre-harvest orchard-imaging sub-segment (Orchard Robotics, Vivid Machines), which is a different business (hardware + drone/field data + ag go-to-market) and would need pain proximity, funnel, and passion evaluated fresh in its own file. Not pursuing that here since it wasn't the idea floated.

## Related

- [guiding-principles.md](./guiding-principles.md) — the Holy Grail filter; anti-patterns "building what ChatGPT answers in chat" and "mistaking low KD for viable" both apply directly here
- [README.md](./README.md) — six-filter checklist
- [seasonal-fruit-arbitrage-2026-06-01.md](./seasonal-fruit-arbitrage-2026-06-01.md) — prior, unrelated fruit exploration (logistics/arbitrage angle, killed on unit economics rather than demand/competition)
- Raw keyword data: DataForSEO keyword_ideas / related_keywords / trends_explore on the "how to tell if ripe" and "fruit ripeness app" clusters, 2026-07-15
