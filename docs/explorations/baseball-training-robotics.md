# Baseball / Sports Training Robotics

> Created 2026-05-23 — exploring whether robotics-adjacent training tools are a Dugout Edge expansion or a new venture. Triggered by a Dugout Edge motivation dip as little league season winds down.

## Verdict (2026-05-23)

**It depends — but the honest answer is "do not build hardware." The realistic play here is a software/data layer on top of the hardware ecosystem that just got rolled up by serious money, sold to the audience Dugout Edge already serves.**

The space splits cleanly in two:

1. **The MLB/college tier** ($15k–$120k/installation, Trajekt, ProBatter, WIN SmartPark) — this is a venture-funded, capex-heavy arms race. Trajekt is in 25+ MLB clubhouses on multi-year $500k contracts. WIN Reality just bought Yakkertech + Blast Motion and is rolling out 2,500 SmartParks. Driveline, Rapsodo, Trackman are entrenched. **You will not parachute in as a solo founder.** This is the wrong tier for a self-funded indie operator and it violates every one of Beau's six filters (capital-intensive, low ARPU per unit shipped, hardware iteration cycles, hostile to LLM-on-top strategies).

2. **The youth/parent/coach tier** ($150–$6,500 machines from JUGS, Spinball, ATEC, Heater, Hack Attack at the high end) — this is a mature, fragmented hardware market that's largely held by 30-year-old companies that just sold to private equity (Sports Attack → Sound Growth Partners, Dec 2025). The hardware itself is a commodity-ish moat. **The software/data layer sitting on top of it is wide open.**

Hardware breaks Beau's six-filter pattern badly: not deterministic output, very high capital intensity, China-tariff exposure, slow iteration. **The wedge that survives the filter is software-on-hardware**, specifically a Dugout-Edge-adjacent app that sits on top of the machines, radar guns, and phones coaches already own. The bonus is it directly extends the existing distribution — every Dugout Edge coach already runs practices that include the pitching machine.

**Recommended pursuit if pursued at all:** Build a **practice-mode tablet/phone app for Dugout Edge that turns any pitching machine + Pocket Radar + phone camera into a "smart cage" experience** — auto-charting, pitch sequencing tied to practice plans, parent-shareable highlights. Hardware-light, LLM-resistant (deterministic charting), in-domain (sports), pain-proximate (Beau coaches kids on these machines), and a clear funnel through the existing Dugout Edge audience.

**Do not** acquire a batting cage facility. **Do not** build a backyard robot. **Do not** chase the MLB tier. The hardware opportunity is interesting but it's not Beau's game.

---

## Landscape — who already plays here

### Pro/elite tier — MLB clubhouses, D1 college, top training academies

| Player | What they ship | Price | Audience | Notes |
|---|---|---|---|---|
| **[Trajekt Sports](https://www.trajektsports.com/)** | Robotic arm pitching machine that replicates any MLB pitcher's release point + spin | $15k–$20k/mo on 3-year lease; $500k/3yr full program | 25+ MLB clubs, top D1, Japan teams (3) | Founded 2019 in Mississauga (Velocity, Chasella, Lenox Partners). 100+ MLB pitcher profiles in 2026. League approved for in-game use this year. CEO has publicly said a scaled-down high-school/college version is "in the works" — explicit roadmap signal. |
| **[ProBatter PX3](https://probatter.com/pricing/)** | Video-screen simulator + machine combo, projects pitcher then releases ball through screen | $29,950 | High-end indoor facilities, college, some MLB | Mature product, less buzz than Trajekt but the established player in video-projection simulators. |
| **[WIN Reality SmartPark](https://winreality.com/blog/smartpark-launch-pro-tech-for-every-diamond/)** | Automated park-installation system capturing 125+ live metrics (velo, spin, exit velo, swing biomechanics) — built from Yakkertech (acquired Jan 2026) + Blast Motion (acquired Jun 2025) | Undisclosed, free install | 2,500+ committed facilities for Feb 2026 rollout | **The aggressive consolidator.** WIN now controls VR training (TrainVR), AI coaching (SwingAI), bat sensors (Blast), and pitch tracking (Yakkertech). They are quietly becoming the layer Beau would otherwise want to build. |
| **[Trackman B1 / V3](https://www.trackman.com/baseball/Portable-B1/get-your-own)** | Doppler radar for pitch + hit tracking | $5k–$50k+ depending on portable B1 vs. stadium V3 | College, pro, elite academies | Subscription required for analytics. The "Bloomberg terminal" of baseball data. |
| **[Rapsodo PRO 2.0](https://rapsodo.com/products/pro-2-dual-baseball-softball-flight-monitor)** | Camera + radar for pitching and hitting (combined unit) | ~$4k for PRO 2.0; subscription for cloud analytics | College, HS, serious individual athletes | Subscription-walled data. Driveline-recommended. |

### Mid/serious-amateur tier — high schools, training academies, well-resourced travel teams

| Player | What they ship | Price | Notes |
|---|---|---|---|
| **[Sports Attack Hack Attack](https://sportsattack.com/product/hack-attack-baseball-pitching-machine/)** | The 3-wheel workhorse of HS/college baseball. 100+ mph fastball, all pitch types, fungo grounders & flies. | ~$4,000 standalone / $5,998 bundle | **Acquired Dec 18, 2025 by Sound Growth Partners (PE)** — see [Chartwell announcement](https://chartwellfa.com/news/chartwell-advises-sports-attack-on-sale-to-sound-growth-partners/). Founded 1995. Sells primarily through dealer network (On Deck Sports, Anytime Baseball, BSN). |
| **[Spinball iPitch](https://www.spinballsports.com/spinball-ipitch)** | 3-wheel programmable, tablet-controlled, 140 pitch combos, 16 MLB-pitcher pre-sets, 100 mph | ~$8,500–$13,000 (varies by retailer) | The "smart machine" people actually buy. Used by 23 MLB teams. Spinball Sports is small — ~11 employees, $100k disclosed funding. **Acquisition target candidate.** |
| **[JUGS BP3](https://jugssports.com/products/bp3-baseball-pitching-machine-with-changeup.html)** | 3-wheel, digital speed 40–90 mph, 9 pitches | $6,400 | Brand recognition is huge; product is older than Spinball/Hack Attack but trusted by old-school coaches. |
| **[ATEC M3 / M3X / R2](https://www.atecsports.com/en-us/machines/baseball)** | Wilson-owned. M1 ($1,800), M3 ($3,200), R2 defensive trainer | $1,000–$3,500 | Part of Wilson Sporting Goods. Defensive R2 is the closest thing to a fielding-specific machine in the mid tier. |
| **[FungoMan FM-250](https://fungoman.com/pricing)** | Automated fungo machine specifically for defensive practice (grounders, flies, line drives) — tablet-controlled, programmable zones | $14k–$17k purchase; ~$466/mo rent | **The closest existing competitor to a "robotic fielding coach."** Niche, slow-growing, accepts school purchase orders. Doesn't list prices publicly. |
| **[Iron Mike + ProBatter II conversion](https://www.hittingworld.com/ProBatter-II-Pitching-Simulator-Kit-for-Iron-Mike-p/prb-100.htm)** | Mid-tier video simulator retrofit | Varies, ~$10k+ kit | Old-school but still sold. Shows that "retrofit a smart layer on a dumb machine" is a model that already exists, just not modernized. |

### Consumer/youth tier — backyard, parents, coach-pitch

| Player | What they ship | Price | Notes |
|---|---|---|---|
| **[Heater Crusher / Sports Heater](https://heatersports.com/responsive/product_details.php?id=CR169)** | Mini-ball machine, 40 mph, ages 8+ | ~$200–$400 | The default backyard option. |
| **[Franklin MLB pitching machine](https://franklinsports.com/mlb-pitching-machine)** | Plastic balls, throws every 10 seconds, 3 angles | ~$50–$100 | Dick's/Walmart shelf product. |
| **Junior Hack Attack** | Scaled-down Sports Attack, real baseballs at ~70 mph | ~$2,500 | Bridges the gap between $400 toys and $4,000 pro machines. Premium youth/travel-team purchase. |
| **iPlay/iLearn RC pitcher** | Toy-grade RC pitcher + bat combo | ~$60 | Birthday-gift tier. |
| **Generic Chinese-import dual-wheel machines** (Amazon, Made-in-China.com) | $150–$800 dual-wheel that looks like a JUGS at 1/10 the price | $150–$800 | Quality varies wildly. Reviews show high return rate. This is the "China commodity" tier. |

### Software / data / app layer

| Player | What it does | Price | Notes |
|---|---|---|---|
| **[Mustard (teammstrd.com)](https://teammstrd.com/)** | Phone-camera-based pitching biomechanics app, Dr. Tom House + MLB advisors | Freemium + subscription | 39k+ downloads, 4.6 stars. Pocket Radar integration. Closest to the "AI pitch-design coach" wedge. |
| **[PitchLab](https://apps.apple.com/us/app/pitchlab-baseball-softball/id6738223162)** | iPhone-only pitch tracking via CV, no extra hardware. Built by AI PhD + MLB player. | App-store pricing | Newer entrant. Claims radar-comparable accuracy. **This is exactly the kind of product Beau could build.** |
| **[SmartScout Baseball](https://apps.apple.com/us/app/smartscout-baseball/id6744098755)** | iPhone-based pitch/swing analytics for youth-to-pro | Freemium | Same wedge as PitchLab. |
| **[SmartPitch](https://www.smartpitchbaseball.com/app-function)** | Phone-based pitch release speed, exit velo, launch angle | Freemium | Crowded space. |
| **[NurivaTech / sportFX](https://nurivatech.ai/)** | Markerless 3D biomechanics from any phone angle | App store, freemium | **Just raised $8M seed at $50M+ valuation (May 2025)** with Joe Girardi, Jason Kipnis, Kole Calhoun as advisors. 8,000+ active users. Most-funded recent entrant in the "phone-camera baseball AI" wedge. |
| **[HitTrax (InMotion Systems)](https://www.hittrax.com/)** | Cage simulator + data capture, gamified hitting experience | $25k–$50k facility install; $25/mo–$120/hr to end user | The "Topgolf of baseball cages." Pay-per-hour for retail users. Now bundled with a HitTrax Suite pitching machine for 2026. |
| **[Diamond Kinetics SwingTracker](https://www.diamondkinetics.com/)** | Bat-knob sensor + app | $150 sensor + subscription | $31M total funding ($12M from Elysian Park / Dodgers ownership in 2025; $8.6M Series C Dec 2025). Acquired sidelineHD (youth live-stream) in 2024. **Aggressively consolidating into a youth-sports platform.** |
| **[Blast Motion](https://blastmotion.com/)** | Bat sensor leader, 100k+ app downloads, 15k HS programs | Sensor + subscription | **Acquired by WIN Reality Jun 2025.** Raised $78.5M lifetime. Revenue est. $5–25M. |
| **[Pocket Radar Smart Coach](https://www.pocketradar.com/products/smart-coach-radar)** | Pocket-sized radar gun + iOS/Android app, integrates with GameChanger, Mustard, SidelineHD | $400 device | The de facto "smart radar gun." Open integration partner — already plugs into multiple apps. Friendly to building on top of. |
| **[GameChanger (DICK's)](https://gc.com/)** | Live scoring + streaming for 165k amateur baseball/softball teams. ~$150M FY25 revenue, 40% CAGR since 2017 acquisition. | Free + paid tiers | The dominant youth-baseball software product. Owned by DICK's. Part of [Unrivaled Sports $650M valuation play](https://www.sportico.com/business/finance/2025/youth-sports-breakout-mergers-acquisitions-1234879451/). |
| **[Mustard + Pocket Radar partnership](https://www.pocketradar.com/blogs/updates/pocket-radar-x-mustard-biomechanics-meets-real-time-velocity-data)** | Velocity auto-syncs into Mustard's biomechanics reports | Bundled | Example of "two software-leaning products partner to be more useful" — the model Beau could replicate from the Dugout Edge side. |
| **[Driveline TRAQ](https://www.drivelinebaseball.com/coaches/traq/)** | Unified data hub: Rapsodo, TrackMan, Blast, 6-4-3, Pocket Radar, Diamond Kinetics, PitchLogic feeds into one athlete profile | Subscription | The "unify all baseball data" play already exists at the serious-amateur tier. Driveline is the king of this layer. |
| **[Onform](https://onform.com/sports/baseball/)** | Video analysis app for baseball coaches | Subscription | Generic video analysis — slower iteration than the AI-native players. |
| **[PitchCom](https://pitchcom.com/)** | Wireless catcher-pitcher signal device | ~$700+/kit | MLB official through 2026, ACC multi-year deal, expanding into youth via Perfect Game. Hardware that's all-but-mandatory. |

### Adjacent — fielding / ground ball machines specifically

The "ground ball / fielding robot" subcategory Beau called out is the weakest in the market:

- **FungoMan FM-250** — the only purpose-built option. $14k–$17k. Mostly sold to colleges and well-funded HS programs.
- **ATEC R2** — defensive-specific machine, ~$2,500–$3,500. Less programmable.
- **Hack Attack as a fungo machine** — the workaround most coaches use. Throws grounders, line drives, pop-ups via tilt + spin. ~$4k.
- **Nothing in the $500–$3,000 backyard tier** specifically optimized for fielding. The toys are pitching-only; the pro stuff is $4k+.

**Gap exists, but it's not obviously huge.** Youth coaches mostly hit fungoes by hand because (a) they want the human touch, (b) machines that throw grounders well are expensive, and (c) most youth practices already use the head coach for fielding reps.

---

## Recent funding / acquisitions / market signals (2024–2026)

This is the most important section because the activity has been *frantic* and largely defines whether there's still an opening.

| Date | Event | Significance |
|---|---|---|
| **2024 (late)** | Diamond Kinetics acquires sidelineHD (youth livestream + AI highlights) | Sensor company expanding into youth-sports content platform. |
| **2024 Q4** | Driveline opens Tampa East Coast facility (20k sq ft, full tech stack) | Driveline keeps adding physical footprint. |
| **2025 Mar** | Diamond Kinetics raises $12M (Elysian Park Ventures, Dodgers owners). | Major League ownership investing directly in youth-sports tech. |
| **2025 May** | NurivaTech raises $8M seed at $50M+ valuation, MLB-veteran advisory (Girardi, Kipnis, Calhoun). | Phone-camera-based biomechanics is the hot wedge. |
| **2025 Jun** | **WIN Reality acquires Blast Motion.** | VR training + bat sensor consolidation. |
| **2025 Sep–Oct** | Easton acquires Marucci Sports for ~$450M | Bat/equipment-side consolidation. |
| **2025** | Unrivaled Sports raises $120M from DICK's, $650M post-money. Includes Ripken Baseball, Cooperstown All Star Village. | DICK's now controls equipment + GameChanger + tournament venues. |
| **2025 Dec** | Diamond Kinetics raises $8.6M Series C. | Continued data + youth-sports build. |
| **2025 Dec 18** | **Sports Attack (Hack Attack) acquired by Sound Growth Partners (PE).** | The dominant amateur/high-school pitching machine brand is now PE-owned. Cost-cutting + bolt-on phase incoming. |
| **2026 Jan** | **WIN Reality acquires Yakkertech, launches SmartPark.** 2,500 facilities committed. | WIN is becoming the YouTube-equivalent stack for amateur facilities. |
| **2026 (in-season)** | MLB approves Trajekt for in-game use. | The robotic-arm machine has crossed from "training tool" to "infrastructure." |
| **2026 Q1** | NCAA approves broad PitchCom / one-way comm device use; ACC signs multi-year. | Communication-device segment is locked in. |

**Pattern:** Capital is consolidating, fast. **WIN Reality + DICK's + Driveline + Diamond Kinetics** are each building parallel "youth-baseball-OS" stacks. The window to build a *broad* platform is closing. The window to build a *deeply niched* tool that plugs into all of them is still open.

---

## Businesses for sale (acquisition-as-wedge)

Specifically searching for things Beau could realistically buy in 2026.

### What's publicly listed (BizBuySell, etc.)

| Listing | What | Asking | Cash flow | Commentary |
|---|---|---|---|---|
| [Premier Indoor Baseball & Softball Training Facility](https://www.bizbuysell.com/business-opportunity/premier-indoor-baseball-and-softball-training-facility/2381275/) | Turnkey indoor training facility (location undisclosed in our search) | Listed, details gated | Gated | Typical mid-market facility. |
| [Baseball Facility - Margate, FL](https://www.bizbuysell.com/business-opportunity/baseball-facility-for-sale/2419780/) | Indoor facility, Margate, FL | Gated | Gated | |
| [Elite Baseball Athlete Training Business](https://www.bizbuysell.com/business-opportunity/elite-baseball-athlete-training-business-for-sale/2382782/) | Athlete training operation | Gated | Gated | "Elite" framing suggests higher-ticket lessons + camps, not just cage rentals. |
| [Indoor Batting Cage Facility - Northern AZ (Prescott Valley)](https://www.bizbuysell.com/business-opportunity/indoor-baseball-batting-cage-one-on-one-practice-facility/2328638/) | "Northern Arizona's Premier" batting cage facility | Gated | Gated | |
| [Indoor Baseball/Softball Batting Cage - Santa Clara County, CA](https://www.bizquest.com/business-for-sale/indoor-baseball-softball-batting-cage-training-center/BW2273307/) | Bay Area facility | Gated (BizQuest) | Gated | |

**Note:** BizBuySell + BizQuest gate all financials behind a paywall + broker NDA. WebFetch returns 403s. Beau would need to (a) sign up for BizBuySell, (b) request specific NDAs to see SDE/revenue. Five-plus baseball facilities are concurrently listed at any time on these platforms based on this search; the question is fit, not availability.

### Reality check on baseball-facility economics

From the [Sports Facility Management Expert analysis](https://sportsfacilityexpert.com/2025/05/21/how-much-money-does-an-indoor-sports-facility-make-a-realistic-breakdown/) and [RunSwift analysis](https://www.runswiftapp.com/blog/indoor-sports-facility-profitability):

| Model | Annual revenue | Profit margin | Notes |
|---|---|---|---|
| Rentals + memberships only | $90k–$200k | 10–20% | Single-owner ops |
| Training + leagues | $250k–$500k | 15–25% | Has coaches as W-2 / 1099 |
| Team-based | $500k–$600k | 15–25% | Hosts multiple travel programs |
| 20k–50k sq ft full-service | $1.2M–$3.5M | 18–24% EBITDA | Investor-grade |

Typical SDE multiples for small businesses are **2.5x–3x SDE**. A $350k revenue training facility with $80k SDE would list around $200k–$240k. The facility business is local, ops-heavy, and **completely off-thesis for Beau** — he lives in Hawaii, his strength is software, and Dugout Edge is a SaaS not a facility.

### Equipment manufacturers / software businesses for sale

| Target | Likely acquirable? | Commentary |
|---|---|---|
| **Spinball Sports** | Possibly — only ~11 employees, $100k disclosed funding, family-owned-feel | Most interesting potential target. They have the smart-machine product (iPitch) used by 23 MLB teams. Realistic price probably $3M–$15M depending on revenue (not public). Way out of Beau's range. |
| **Sports Attack** | **Just sold (Dec 2025).** Not available. | Off the table for ~3–7 years. |
| **Blast Motion** | **Just sold to WIN Reality (Jun 2025).** Not available. | |
| **Yakkertech** | **Just sold to WIN Reality (Jan 2026).** | |
| **Mustard / NurivaTech / SmartScout / PitchLab** | App-stage, not for sale | All have outside funding or are early/competitive. |
| **FungoMan** | Possibly — old, niche, small | Worth a cold-email. Niche enough that founder is likely 60+ and approachable. |
| **SwingAway** | Possibly | "Mature hitting trainer" brand. Could be a content/affiliate play. |
| **Niche baseball content sites on Flippa** | Yes — these come up monthly | Not specifically searched in 2026 listings, but the [Flippa sports category](https://flippa.com/buy/categories/sports-and-outdoor) has dozens of baseball-content sites at any time. |

**Concrete recommendation on businesses-for-sale:** *Nothing publicly listed today is a fit for Beau's actual strengths.* The facilities are wrong-shape (local, ops, off-thesis). The good hardware companies just sold. The acquirable targets (FungoMan, SwingAway, small content sites) are *interesting hobby acquisitions* but not transformative.

**The channel to monitor for the right kind of opportunity:**
- **Acquire.com / MicroAcquire** — saved search for "baseball" SaaS / app listings. These show up sporadically and are the highest-fit kind of deal.
- **Empire Flippers** content-site listings tagged sports.
- **Flippa** sports-category listings under $250k.
- Direct cold outreach to **FungoMan** and other 30-year-old single-product hardware brands whose founders are approaching retirement.

But honestly, acquisition is a distraction from the actual play (see "Recommended next step").

---

## Wedge candidates — sized and ranked

Evaluating each candidate from the brief, plus a few I discovered. Scoring against Beau's two filter sets:

**Holy Grail filter:** (1) pain proximity, (2) clear funnel, (3) genuine passion
**Six-filter:** (1) deterministic, (2) LLM-unkillable, (3) in domain, (4) search demand, (5) pain proximity, (6) ARPU $100s–$1000s

### 1. Smart upgrade kit for legacy pitching machines (bolt-on CV + app)

**The idea:** Sell a $300–$600 hardware kit (depth camera + radar + Bluetooth box) that bolts onto any Hack Attack / JUGS / Spinball, turning it into a "smart machine" with app-based pitch sequencing, auto-charting, and parent-shareable highlights.

| Filter | Verdict |
|---|---|
| Pain proximity | Mid — Beau coaches kids on these machines but doesn't own one personally |
| Clear funnel | Mid — sell to facilities and coach networks; not obvious how to scale acquisition |
| Genuine passion | Mid — hardware is not his stated love |
| Deterministic | Mostly — pitch tracking output is deterministic |
| LLM-unkillable | Yes — requires sensors |
| In domain | Yes |
| Search demand | Low — "smart pitching machine upgrade" is a vanishingly small search term |
| ARPU | $300–$600 one-time + maybe $9/mo software = ~$400 LTV per cage |

**Capital intensity:** High — hardware design, supply chain, support burden.
**Defensibility:** Medium — Spinball/Trajekt could just out-feature you.
**Gut verdict: NO.** Hardware. Sub-$500 LTV. Beau is the wrong person.

### 2. Backyard / dugout-tier robotic ground-ball machine for kids 8–14

**The idea:** A $500–$1,200 machine targeted at parents whose kid plays middle infield, throws grounders to a glove icon on the app.

| Filter | Verdict |
|---|---|
| Pain proximity | Low–mid |
| Clear funnel | Medium — Dugout Edge audience overlap |
| Genuine passion | Low for hardware |
| Deterministic | Yes |
| LLM-unkillable | Yes |
| In domain | Yes |
| Search demand | Low — "fielding machine for kids" is single-digit thousand searches |
| ARPU | $800 one-time |

**Capital intensity:** Extreme — hardware company from scratch. China sourcing, tariff exposure, FCC certs, warranty, returns, Amazon nightmare.
**Gut verdict: NO.** This is a 3-year hardware bet in the wrong year. China-tariff exposure in 2026 makes it worse.

### 3. AI pitch-design coach for high school pitchers using phone video

**The idea:** Phone-video → biomechanics report → personalized drill plan + grip/spin tweaks.

| Filter | Verdict |
|---|---|
| Pain proximity | High — Beau is an ex-pro pitcher (?) or position player; either way he gets the mechanics |
| Clear funnel | Mid — phone-app SEO + Dugout Edge cross-promo |
| Genuine passion | Maybe — depends on whether the joy is in mechanics or in business systems |
| Deterministic | Yes — biomechanics output |
| LLM-unkillable | Yes — needs CV on video |
| In domain | Yes |
| Search demand | Medium — "pitching analysis app" has real volume |
| ARPU | $10–$30/mo subscription |

**Reality check:** [Mustard](https://teammstrd.com/), [NurivaTech](https://nurivatech.ai/), [PitchLab](https://apps.apple.com/us/app/pitchlab-baseball-softball/id6738223162), [SmartScout](https://apps.apple.com/us/app/smartscout-baseball/id6744098755), [SmartPitch](https://www.smartpitchbaseball.com/app-function) all exist. NurivaTech just raised $8M with Joe Girardi on the cap table. Mustard has Tom House. **This is a crowded, funded race and Beau has no biomechanics or CV expertise advantage.**

**Gut verdict: NO** as a green-field bet. **MAYBE** as a "PitchLab-style v1 inside Dugout Edge" — leveraging the existing distribution.

### 4. Marketplace for used baseball training equipment

**The idea:** "StockX for used Hack Attacks" — verified used machine listings with shipping logistics, escrow, condition grading. Replace the ugly Facebook Marketplace default.

| Filter | Verdict |
|---|---|
| Pain proximity | Low — Beau hasn't bought used machines as a pain point |
| Clear funnel | Low — chicken-and-egg marketplace |
| Genuine passion | Low |
| Deterministic | Yes — listings, transactions |
| LLM-unkillable | Yes — marketplaces are physical-goods-bound |
| In domain | Yes |
| Search demand | Low — "used pitching machine" searches are city-level long-tail |
| ARPU | 5–10% take rate on a $1,000–$3,000 average transaction = $100–$300 per deal |

**Capital intensity:** Mid — marketplace ops, shipping, fraud, returns. Brand-new marketplace launches are notoriously brutal.
**Reality:** Facebook Marketplace + eBay + SidelineSwap already serve this. SidelineSwap specifically handles used sports gear with escrow. Building a baseball-machine-specific carve-out is a tiny TAM.

**Gut verdict: NO.** Marketplace dynamics are punishing for solo founders.

### 5. Acquire-and-grow — buy a small baseball training equipment site or content brand

**The idea:** Buy a 4–6 figure SDE content site about pitching machines, add affiliate links + Dugout Edge cross-promo, modernize for AI overviews + Reddit-style social search.

| Filter | Verdict |
|---|---|
| Pain proximity | Low |
| Clear funnel | High — SEO is already paying |
| Genuine passion | Low — content sites are work, not love |
| Deterministic | Yes |
| LLM-unkillable | **CRITICAL CONCERN** — SEO content is the most LLM-killable thing in the universe in 2026 |
| In domain | Yes |
| Search demand | Medium — affiliate intent searches still exist |
| ARPU | Visitor-based; ~$0.10–$1 per visit |

**Reality:** Beau already noted in the brief — bias *away from* content/affiliate plays that LLMs flatten. This is a worse fit in 2026 than it was in 2022.

**Gut verdict: NO** unless it's a steal (sub-$50k for a $30k SDE site, which is rare).

### 6. Smart scorecard / charting tablet app that integrates with existing radar guns / Rapsodo / Trackman feeds (a.k.a. the "software-on-existing-hardware" play)

**The idea:** A coach-facing tablet/phone app that runs alongside Dugout Edge during practices and games. Plugs into Pocket Radar (Bluetooth), Rapsodo (export), HitTrax (export), the phone's camera. Auto-charts every pitch. Auto-clips highlights. Generates a parent-shareable summary. Pitch sequencing built into the practice plan generator.

| Filter | Verdict |
|---|---|
| Pain proximity | **HIGH** — Beau coaches little league, he sees parents fumbling with paper scorebooks while a $400 Pocket Radar sits unused |
| Clear funnel | **HIGH** — Dugout Edge already has the coaches |
| Genuine passion | **HIGH** — this is the modern version of what makes coaching fun |
| Deterministic | **YES** — pitch counts, locations, velo, charts |
| LLM-unkillable | **YES** — needs hardware integrations + sport-specific data model |
| In domain | **YES** — directly in Beau's sports domain |
| Search demand | **YES** — "pitch counter app" "baseball charting app" "youth baseball scorebook" all have real volume |
| ARPU | $5–$15/mo as Dugout Edge add-on; $15–$25/mo standalone. Reaches **$100s–$1000s/yr at facility tier** |

**Capital intensity:** Low — software only.
**Defensibility:** High — already-installed Dugout Edge audience, integrations create switching cost, deterministic output that competitors must match feature-by-feature.

**Gut verdict: STRONG YES.** This is the only candidate that passes all six filters and both holy-grail tests. It uses the hardware ecosystem as *input* without becoming a hardware company. It extends Dugout Edge instead of forking attention.

### 7. (Bonus) Dugout-Edge-branded Trajekt-lite reseller / referral

**The idea:** Don't build hardware. Refer Dugout Edge facilities + travel teams to existing machines (Junior Hack Attack, iPitch, etc.) for an affiliate cut. Bundle with practice-plan content for those specific machines.

**Gut verdict: WORTH A SMALL TEST.** $0 build cost. Just contact On Deck Sports / Anytime Baseball Supply / Sports Attack post-acquisition and ask if they affiliate. Adds revenue to Dugout Edge with zero hardware risk.

---

## Wedge ranking summary

| # | Wedge | Filter pass | Gut verdict |
|---|---|---|---|
| 6 | **Smart charting/scoring app inside Dugout Edge** | All filters pass | **BUILD THIS** |
| 7 | Affiliate referral of existing machines via Dugout Edge | n/a, easy add | **TEST IN PARALLEL** |
| 3 | AI pitch-design phone app | Some pass; crowded | Maybe as v2 of #6 |
| 1 | Bolt-on smart kit | Hardware, low ARPU | No |
| 5 | Acquire content site | LLM-killable | No |
| 4 | Used-machine marketplace | Marketplace dynamics | No |
| 2 | Backyard fielding robot | Hardware, capex | No |

---

## What Beau personally has as an unfair advantage

- **Dugout Edge already has the audience.** Practice planner + lineup generator + tournament tools is exactly the buyer for an in-cage charting app. Cross-promo cost is $0.
- **Ex-pro player credibility.** Mustard has Tom House, NurivaTech has Joe Girardi. Beau has himself. "Built by a guy who actually pitched" plays in the youth-baseball-parent demo.
- **Stanford + data analyst training.** Most of the youth-baseball-app founders are coaches or athletes without serious software/data chops. Beau out-builds them on the deterministic, integrations-heavy software side.
- **Coach/parent distribution.** He can dogfood with his own little league season + the existing Dugout Edge user list. That's 1,000x faster than cold-starting a new audience.
- **Knows the workflows.** Beau has built practice planner, lineup, tournament — he already knows what coaches do during a session. Adding in-session charting is a natural product extension, not a leap.

What he does **not** have:
- Hardware product experience.
- CV/biomechanics PhD bench (Mustard, NurivaTech, PitchLab all do).
- VC distribution. The funded players will out-spend on paid acquisition once they're past product-market fit.

This unfair-advantage profile fits the **#6 software-on-existing-hardware play** like a glove. It does **not** fit hardware or content-acquisition plays.

---

## Honest objections

### The hardware case is bad in 2026 specifically

1. **PE just consolidated the mid-tier.** Sports Attack went to Sound Growth Partners in Dec 2025. They'll cost-cut, then bolt-on. Any new hardware entrant gets out-priced or acquired.
2. **WIN Reality is rolling up the data side.** Yakkertech + Blast + TrainVR + SwingAI + SmartPark is becoming the youth-facility OS. They will not let a smart-kit retrofit company live; they'll either acquire or undercut.
3. **China tariffs.** US-China tariff regime in 2026 makes hardware sourcing ugly. Even friendly tariffs raise pitching-machine COGS ~15–25%. The big incumbents absorb it; a new entrant feels it 10x.
4. **Capital cycles are wrong.** Hardware iterations are 6–18 months. Software iterations are 1–2 weeks. Beau's stated thesis is LLM-unkillable micro-SaaS at $100s–$1000s ARPU. Hardware breaks every part of that.
5. **Beau's Holy-Grail filter says no.** Pain proximity is moderate (he doesn't *suffer* without a better pitching machine). Genuine passion is low (he loves software systems, not mechanical engineering). Clear funnel exists but isn't obvious.

### Even the software play has counterarguments

1. **WIN, Driveline TRAQ, Diamond Kinetics already aggregate data.** The "unify everything" play is partly taken.
2. **GameChanger owns the scoring + streaming flow** with 165k teams. Why won't they extend into in-practice charting?
   - Answer: They could. But (a) DICK's strategy is league/tournament-centric, not practice-centric, (b) GameChanger is game-day software, not practice-plan software, (c) Dugout Edge already owns the practice workflow that GameChanger doesn't.
3. **Pocket Radar's open ecosystem cuts both ways.** Mustard, GameChanger, SidelineHD all already plug in. Beau plugging in is no different — he competes on UX + integration depth + audience.
4. **The in-cage hardware market is small.** ~$56B global youth baseball, but the data-app slice of that is tens of millions, not hundreds.

### Counter-counter

The argument for #6 isn't "this is a 9-figure outcome." It's: "this is a deterministic, sport-specific, LLM-resistant, $100k–$1M ARR add-on to Dugout Edge that compounds Beau's existing distribution and ships in 8–12 weeks." That's the right size for a profitable micro-SaaS in his portfolio, not a venture-scale bet.

---

## Recommended next step (if pursued)

**Two-week validation experiment — zero hardware.**

1. **Day 1–3: Customer-discovery sprint.** Use the existing Dugout Edge user list to email 100 coaches. Ask: "If Dugout Edge could chart every pitch your kid throws this season — velo via your phone or Pocket Radar, location via tablet tap, pitch type via dropdown — and auto-generate a parent-shareable highlight + a pitcher-fatigue report — would you pay $10/mo extra? $20/mo?" Targeting 10–20 deep conversations.

2. **Day 4–7: Prototype the parent-shareable summary.** Build a static example: "Here's what Tommy's last game looked like — 47 pitches, 71 mph max velo, 24 strikes, 11 swings-and-misses on the curve, here's a 30-second highlight reel." Show it to the coaches. Watch the eyes.

3. **Day 8–14: Build the absolute thinnest practice-mode charting view inside Dugout Edge.** Tap to log pitch. Connect Pocket Radar via Bluetooth (Pocket Radar has [public integration docs](https://help.gc.com/hc/en-us/articles/6300365275789-Pocket-Radar-Integration) — see how they did it with GameChanger). Ship it to 5 friendly coaches as a beta during the last weeks of little league.

4. **Decision gate (end of week 2):** Did at least 60% of coaches in the discovery interviews say "yes, I'd pay for this"? Did the 5 friendly coaches actually use it more than once? If yes, commit a 60-day build. If no, kill it and move on.

**Total cost:** Zero dollars. Beau's time only.
**Why it's the right experiment:** It validates the highest-conviction wedge (#6) without locking in any hardware or significant build. If validated, it's a natural Dugout Edge module. If invalidated, Beau learns that the practice-software-plus-charting bundle isn't compelling and saves a quarter of build time.

**What to explicitly NOT do in the next 2 weeks:** Don't talk to BizBuySell brokers. Don't source a Chinese pitching machine factory. Don't try to call Spinball or FungoMan founders for acquisition chats. Don't build a Trajekt-clone landing page.

---

## Cross-references

- See [project_micro_saas_thesis.md](/Users/beaubranton/.claude/projects/-Users-beaubranton-projects-beaubranton-com/memory/project_micro_saas_thesis.md) — the LLM-unkillable deterministic micro-SaaS portfolio thesis. Wedge #6 fits cleanly. Hardware wedges do not.
- See [feedback_exploration_filter.md](/Users/beaubranton/.claude/projects/-Users-beaubranton-projects-beaubranton-com/memory/feedback_exploration_filter.md) — the Holy Grail filter. Wedge #6 passes all three. Hardware fails (1) and (3).
- See `joe-ai-agent.md` and `wellness-brand.md` — sibling explorations. Both ended up at "software with a sharp niche, not generic platform." Same pattern here.
- Dugout Edge product itself — directly relevant. This is a Dugout Edge product extension, not a new venture, in the recommended path.

---

## Open questions

- **Is Pocket Radar's Bluetooth SDK truly open enough to ship in 2 weeks?** Need to read their integration docs and confirm. If yes, the validation experiment timeline is real. If they gate it behind a partnership agreement, add 4–8 weeks.
- **Will Sports Attack (now PE-owned) open up its machines to a third-party app?** Low odds but worth a cold email. If yes, that's a massive integration moat.
- **What does Dugout Edge's actual usage data say about practice-time-vs-game-time?** Should the new charting product index on practices (where Dugout Edge already lives) or games (where GameChanger dominates)? Recommendation is practices, but the usage data should confirm.
- **Does the "ex-pro player" credibility translate into youth-parent trust for a charting product the same way it would for a mechanics-coaching product?** Possibly less direct. May need a Tom House / Joe Girardi-style advisor relationship as a credibility shortcut. (Cheap to add post-validation.)
- **Is there a play to white-label the Dugout Edge charting product to facilities** (e.g., the 2,500 SmartParks WIN is installing)? Higher ACV per deal. Worth considering after the v1 ships.
- **What happens if Trajekt actually ships a sub-$5k consumer/HS machine in 2027 as their CEO hinted?** It probably hurts Spinball/Sports Attack but helps a software-layer player like Beau (more machines in the field = more cages to plug into).

---

## Sources

### Robotic / pro-tier pitching machines
- [Trajekt Sports](https://www.trajektsports.com/) — official site
- [Trajekt Pitching Machine Replicates Any Pitch — Athletic Business](https://www.athleticbusiness.com/operations/media-technology/article/15295740/trajekt-pitching-machine-replicates-any-pitch-pitcher-delivery)
- [ESPN: Inside MLB's new Trajekt tech](https://www.espn.com/mlb/story/_/id/40401564/trajekt-arc-new-technology-controversy-mlb-hitters-pitchers-advantage)
- [Trajekt Sports — Crunchbase](https://www.crunchbase.com/organization/trajekt-sports)
- [Trajekt Sports — Robotics 24/7](https://www.robotics247.com/article/trajekt_sports_goes_after_the_major_leagues_with_its_robotic_baseball_pitching_machine)
- [Digital Trends: Trajekt Arc](https://www.digitaltrends.com/cool-tech/trajekt-arc-pitching-machine/)
- [ProBatter Pricing](https://probatter.com/pricing/)
- [Trackman Baseball B1](https://www.trackman.com/baseball/Portable-B1/get-your-own)

### Mid-tier machines
- [Sports Attack Hack Attack](https://sportsattack.com/product/hack-attack-baseball-pitching-machine/)
- [Sports Attack acquired by Sound Growth Partners — Chartwell, Dec 2025](https://chartwellfa.com/news/chartwell-advises-sports-attack-on-sale-to-sound-growth-partners/)
- [Sports Attack acquired by PE — SGB Online](https://sgbonline.com/sports-attack-acquired-by-private-equity-firm/)
- [Spinball iPitch](https://www.spinballsports.com/spinball-ipitch)
- [JUGS BP3](https://jugssports.com/products/bp3-baseball-pitching-machine-with-changeup.html)
- [ATEC Baseball Machines](https://www.atecsports.com/en-us/machines/baseball)
- [FungoMan Pricing](https://fungoman.com/pricing)
- [FungoMan FM-250](https://fungoman.com/fm-250)

### Software/data layer
- [Mustard](https://teammstrd.com/)
- [Mustard x Pocket Radar partnership](https://www.pocketradar.com/blogs/updates/pocket-radar-x-mustard-biomechanics-meets-real-time-velocity-data)
- [PitchLab — App Store](https://apps.apple.com/us/app/pitchlab-baseball-softball/id6738223162)
- [SmartScout Baseball — App Store](https://apps.apple.com/us/app/smartscout-baseball/id6744098755)
- [SmartPitch](https://www.smartpitchbaseball.com/app-function)
- [NurivaTech AI](https://nurivatech.ai/)
- [NurivaTech raises $8M seed — YSBR](https://youthsportsbusinessreport.com/nurivatech-raises-8m-for-smartphone-based-baseball-training-app-with-mlb-veteran-advisory/)
- [HitTrax](https://www.hittrax.com/)
- [Rapsodo PRO 2.0](https://rapsodo.com/products/pro-2-dual-baseball-softball-flight-monitor)
- [Blast Motion](https://blastmotion.com/)
- [Driveline TRAQ](https://www.drivelinebaseball.com/coaches/traq/)
- [Onform — Baseball](https://onform.com/sports/baseball/)
- [Diamond Kinetics](https://www.diamondkinetics.com/)
- [Diamond Kinetics $12M from Elysian Park — technical.ly](https://technical.ly/entrepreneurship/diamond-kinetics-12m-investment-pittburgh-money-moves/)
- [Pocket Radar Smart Coach](https://www.pocketradar.com/products/smart-coach-radar)
- [Pocket Radar x GameChanger integration](https://help.gc.com/hc/en-us/articles/6300365275789-Pocket-Radar-Integration)
- [GameChanger](https://gc.com/)
- [PitchCom](https://pitchcom.com/)
- [PitchCom x Perfect Game youth baseball](https://pitchcom.com/blogs/news/perfect-game-partners-with-pitchcom)

### M&A / market signals
- [WIN Acquires Yakkertech and Launches SmartPark — BusinessWire](https://www.businesswire.com/news/home/20251216500962/en/WIN-Acquires-Yakkertech-and-Launches-SmartPark-Unlocking-Pro-Caliber-Tech-for-Every-Diamond)
- [WIN Reality SmartPark launch](https://winreality.com/blog/smartpark-launch-pro-tech-for-every-diamond/)
- [Youth Sports M&A 2025 — Sportico](https://www.sportico.com/business/finance/2025/youth-sports-breakout-mergers-acquisitions-1234879451/)
- [DICK's buys GameChanger — Retail Dive](https://www.retaildive.com/news/dicks-sporting-goods-latest-software-acquisition-is-a-gamechanger/431218/)
- [DICK's all-in on GameChanger — Buying Sandlot](https://www.buyingsandlot.com/p/dick-s-sporting-goods-goes-all-in-on-gamechanger)
- [Unrivaled Sports / Ripken Baseball — Sportico](https://www.sportico.com/business/finance/2025/youth-sports-breakout-mergers-acquisitions-1234879451/)

### Market sizing
- [Youth Baseball Market — Business Research Insights](https://www.businessresearchinsights.com/market-reports/youth-baseball-market-118437)
- [Youth Sports $40B — Empower](https://www.empower.com/the-currency/play/game-on-the-40-billion-play-in-youth-sports-news)
- [Soaring price of youth sports — Washington Post](https://www.washingtonpost.com/business/2026/01/07/youth-sports-cost-parents-investors-profit/)
- [Indoor sports facility profitability — RunSwift](https://www.runswiftapp.com/blog/indoor-sports-facility-profitability)
- [Indoor sports facility revenue breakdown — Sports Facility Expert](https://sportsfacilityexpert.com/2025/05/21/how-much-money-does-an-indoor-sports-facility-make-a-realistic-breakdown/)
- [Indoor Baseball Facility Cost — RunSwift](https://www.runswiftapp.com/blog/indoor-baseball-facility-cost)

### Affiliate / content economics
- [How to make passive income with baseball/softball affiliate selling — Seams Up](https://seamsup.com/blog/how-to-make-passive-income-by-affiliate-selling-baseball-and-softball-tools-and-gear-real-examples)
- [Best baseball affiliate programs — UpPromote](https://uppromote.com/affiliate-programs/baseball/)

### Businesses-for-sale channels
- [BizBuySell — premier indoor baseball/softball facility](https://www.bizbuysell.com/business-opportunity/premier-indoor-baseball-and-softball-training-facility/2381275/)
- [BizBuySell — baseball facility Margate FL](https://www.bizbuysell.com/business-opportunity/baseball-facility-for-sale/2419780/)
- [BizBuySell — Elite Baseball training business](https://www.bizbuysell.com/business-opportunity/elite-baseball-athlete-training-business-for-sale/2382782/)
- [BizBuySell — Northern AZ batting cage](https://www.bizbuysell.com/business-opportunity/indoor-baseball-batting-cage-one-on-one-practice-facility/2328638/)
- [Flippa Sports & Outdoor](https://flippa.com/buy/categories/sports-and-outdoor)
