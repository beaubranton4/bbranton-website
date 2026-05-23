# Top Ideas — Micro-SaaS Tool Portfolio

## The thesis (2026-05-21)

**Content SEO is dying. Tool SEO is the new lead magnet.**

Blogs, articles, top-10 lists — Google AI Overviews are eating their lunch. People who used to read are now getting the answer above the fold without ever clicking. But there's a new category of search where AI Overviews can't deliver: people looking for **software, tools, scripts, generators** — things they can *use right now* to produce an output that helps them accomplish a goal.

These tools are the new lead magnets. They're buildable in days with Claude Code. They meet user intent in a way LLMs in chat can't. And a portfolio of them, each owning a long-tail keyword cluster, can compound.

**Examples that already work:** Dugout Edge's lineup generator. The "1200 calorie meal planner" wedge. Calculator/tool pages that rank for "[specific input] → [specific output]."

### Filter criteria

A candidate earns a spot if it clears all six:

1. **Deterministic / structured output.** Lineups, schedules, budgets, plans, brackets, calculations — anything with constraints or math. Not freeform text.
2. **LLM-unkillable in chat.** ChatGPT can't render a clean lineup with position rotation across innings. Can't show a live calorie ticker on top of an Amazon Fresh cart. Can't manage your ongoing renovation project state. **If ChatGPT can answer the query cleanly in chat, don't build it.**
3. **In Beau's domains.** Data, home ownership, fitness, sports/baseball, AI tooling, friendships/social, travel, in-person experiences. Personal expertise = better product, faster.
4. **Real search demand.** People are actively typing the query into Google. Validate with one DataForSEO call before building.
5. **Pain proximity (added 2026-05-21).** *The closer Beau is personally to the problem, the better.* Living the pain right now > theorizing about a market. Pain proximity is the single strongest predictor of building the right thing.
6. **ARPU ambition (added 2026-05-21).** Overweight ideas where customers pay **$100s–$1000s**, not just $5–30/mo. Bigger pain = bigger willingness to pay. Volume tools still on the menu, but they shouldn't crowd out the bigger bets.

### Goal

Beau is considering quitting his job to go all in. This doc is the brainstorm list — pick 5–10, validate demand, start building. Mix of **Tier 1 big bets** (high pain, high ARPU, Beau personally living the problem) and **Tier 2 volume tools** (faster to ship, smaller pricing, portfolio compounds).

## Tier 1 — Big bets, problem-first

> **Validation pass (2026-05-21):** All Tier 1 ideas were validated with DataForSEO. Findings below restructure the order — the brainstormed ranking was *theoretical*, the data-driven ranking is *empirical*. Big surprise: career-transition / FIRE calculators are the strongest signal in the entire portfolio.

### Data-driven ranking (after validation)

| Rank | Idea | Headline signal | Pain proximity | Why it wins / loses |
|---|------|-----------------|----------------|---------------------|
| **1** | **FIRE / career-transition calculator suite** | "fire calculator" 18,100/mo **KD 12, +124% YR, +50% MO**. "coast fire calculator" 27,100/mo **KD 9, +83% YR**. Cluster: 78k/mo recent demand, avg KD 13, **20/44 keywords growing >50% YR**. CPC $4–21. | Beau is *literally* weighing this decision right now (2026-05-21 journal). | **Strongest data signal in the session.** Low KD + explosive growth + high CPC + personal pain at the moment of decision. FIRE community has high willingness to pay for premium calculators (Empower, ProjectionLab, NewRetirement charge $30–$200/yr). Lead-magnet → financial planner affiliate also viable. |
| **2** | **Renovation cost calculator (lead-magnet model)** | "cost of home renovation calculator" 880/mo low competition (0.32). "home renovation cost calculator" 590/mo low competition (0.17), **+50% MO**. CPC $9–11. | Active right now (new SF house). | Smaller TAM but **growing**, low competition, and CPC says financial-services advertisers value this lead. Best as a wedge into the bigger renovation project-management product (#5). |
| 3 | **Mortgage refi decision tool** | 1.2M/mo cluster demand (massive), CPC $4–6, but **KD 20–40** and **-45% YR** (rate cycle suppressing demand). Dominated by Bankrate, Rocket, NerdWallet. | Recently lived (bought house). | Huge TAM and lead-value but a brutal wedge — incumbents have 200k+ backlink moats. Only viable if going specifically at a *decision* niche (e.g., "should I refi vs. buy down points" comparison) rather than another calculator. |
| 4 | **Wedding budget + vendor manager** | "wedding planning app" 18k/mo reported but **inflated by viral spike** (Jul 2025 = 165k). Real recent demand ~3,100/mo. **KD 51 — high.** Knot/Zola dominate (Zola brand keyword growing +1,900% YR — they're winning the category). | Living it 9 months out. | Pain is real but the SEO market is owned. Would need a *narrow* wedge (vendor-only? budget-only?) and brand-led distribution, not search-led. |
| 5 | **Renovation / contractor project manager** | "home renovation software" 880/mo **KD 3** (low) but **-32% YR** (declining). Crowded with Houzz Pro (pros), Buildertrend (pros), HomeAdvisor (consumer). | Active now. | Low KD is tempting but the *declining trend* + crowded incumbent landscape says the category is being eaten by something else (probably Houzz/Angi for consumer; ServiceTitan/BuildBook for pros). Hard wedge without a strong product opinion. |
| **OUT** | ~~Eldercare / family caregiver coordination~~ | **"aging parent app" returned ZERO results.** "caregiver app" 1,600/mo but the audience is paid W-2 caregivers (GT Independence, Nevvon, care.com), not adult children of aging parents. | Active now (Mom situation). | **Real pain, but not a tool-SEO market.** Adult-child caregivers search with informational queries ("what to do when parent refuses doctor," "how to talk to aging parent about driving") — that's content SEO, which fails the LLM-unkillable filter. Pursuing this would require non-SEO distribution (community, partner referrals, podcast). Removed from Tier 1 as a *tool* venture, but the pain remains real if pursued via a different distribution model. |
| n/a | **Dugout Edge expansion** | Already operating, paying customers. | Already operator. | Doesn't need keyword validation. The strategic question for Dugout stays open in the 2026-05-21 journal entry. |

### The headline takeaway

**The strongest opportunity in the validated portfolio is FIRE/career-transition tools** — and you couldn't have a better personal-pain match than you do right now. The data signal is the cleanest I've seen in this session: high volume, low competition, accelerating growth, real CPC, and a buyer (FIRE community) with proven willingness to pay $30–200/yr for premium tools.

A natural product roadmap:
1. **MVP:** "Should I quit my job?" runway calculator — your exact current decision turned into a tool. Lead-magnet positioning.
2. **Tool 2:** Coast FIRE calculator (27k/mo KD 9 — almost free traffic).
3. **Tool 3:** Barista FIRE calculator (1,400/mo, no KD reported = likely <20).
4. **Wedge to product:** integrate with Plaid for live account data → $30–50/mo subscription with scenario modeling, healthcare gap, geo-arbitrage, etc.
5. **Adjacent:** "Quit my job" decision suite — runway, healthcare, severance optimizer, post-quit budget tracker.

### Brainstormed candidates (pre-validation, for reference)

These are ranked by **pain proximity** first, then ARPU potential. Kept as the original brainstorm view in case the data-driven reorder above misses something. Recent journal entries and house/family/wedding context informed the ranking — not market sizing in the abstract.

| # | Idea | Pain Beau is living | ARPU range | Why LLM-unkillable | Buyer & willingness to pay |
|---|------|---------------------|-----------|--------------------|-----|
| 1 | **Renovation / contractor project manager** | Active now: new SF house — painting done, garage install, lanterns, windows. "Spent a little too much money" (2026-05-19 journal). Quotes, change orders, vendor coordination — total mess. | $30–80/mo or $300–800 one-time | Manages ongoing project state across vendors, payments, phases — ChatGPT can't hold this in a chat. Photos, line items, real money on the line. | Homeowners in active renovation. **High willingness to pay** — projects are $20k–$200k; a $500 tool that prevents one contractor screw-up pays for itself instantly. |
| 2 | **Eldercare / aging-parent coordination platform** | Active now: Mom canceled doctor appointment; family processing (2026-05-19 journal, "Watching Parents Get Old" 2026-05-14). | $30–100/mo per family | Coordinates appointments, medications, family communication, decisions across siblings — needs persistent state, calendar integration, role permissions. ChatGPT can't do this. | Adult children of aging parents (massive demographic — boomers aging into 80s). **Extreme willingness to pay** when the alternative is a crisis. Emerging category — few good players. |
| 3 | **Wedding budget + vendor manager** | Active in 9 months: Feb 6, 2027 wedding (2026-05-19 journal — "really good milestone"). | $50–300 one-time or $20–50/mo | Tracks vendors, contracts, payments, RSVPs, seating with real money flow. Knot/Zola exist but their tooling is famously thin — opening for a sharper product. | Couples planning weddings. US: ~2M weddings/yr at avg $30k spend = $60B. Even 0.01% capture is meaningful. |
| 4 | **Coach / team operating system (Dugout Edge expansion)** | Already building. Active operator. | $50–500/yr per team | Lineups, rotations, practice plans, parent comms, travel logistics — all the structured-output coaching workflow Dugout already partially serves. | Youth/HS coaches, club teams. **Already validated** — Dugout has paying customers. Question is whether to expand here or pivot. |
| 5 | **Career transition / FI runway calculator + tracker** | Active now: Beau is literally considering quitting his job (2026-05-21 journal, Dugout Edge stay-or-move-on). | $50–200 one-time or $20/mo | Runway math + healthcare + milestone tracking + scenario modeling. ChatGPT can't see your accounts. Tied to real financial decisions. | Knowledge workers considering a jump — engineers, designers, PMs. **High willingness to pay** at the moment of decision. Niche but motivated buyer. |
| 6 | **Renovation cost-quote validator** | Active now: just got quotes for garage, lanterns, windows. Universal question: "is $X reasonable for Y in my market?" | $20–80 per validation or $30/mo | Local market data + materials cost lookup + comp pricing. Deterministic. Homeowners don't have this. | Homeowners getting bids. Buys peace of mind on a $20k+ decision. Could be lead-magnet → contractor referral revenue. |
| 7 | **Refi break-even + cash-out calculator (lead-magnet model)** | Recently lived: bought new SF house. Rate environment dynamic. | Free tool → $50–200 affiliate per qualified lead | Multi-input financial math, scenario comparison, lock-window awareness. Mortgage broker referral economics are huge ($50–500/lead). | Homeowners considering refi or cash-out. Affiliate model means **per-lead value is the price**, not a subscription. |

**Connecting thread:** half the Tier 1 list is **home / renovation / mortgage**, because Beau is in the deep end of that pain right now (active renovation + just bought). The other half splits between **family/aging parents**, **wedding**, and **own career transition** — all life-stage things hitting him in the next 12 months.

This is the "problem-shopped" portfolio, not the "tool-shopped" one.

### What changed from the previous brainstorm

The previous Tier 2 tool list (kept below) was structured around Beau's *domain interests* — fitness, sports, data, AI tooling. Useful, but it wasn't filtered for **pain proximity** or **ARPU ambition**. After Beau's 2026-05-21 refinement, the Tier 1 list above bubbled up by re-asking: *what problems is he personally inside of right now where the buyer also pays real money?*

The calorie cart is still strong but moves to Tier 2 — it's a great wedge tool, but the ARPU is consumer-grade and the pain is more discretionary than the renovation/eldercare/wedding cluster.

## Expanded brainstorm — 100 candidates

A wider net for ruminating. Each candidate is a one-liner — pick which ones to validate next. Items marked `[validated]` have real DataForSEO numbers (above). Items marked `[living-it]` are pains Beau is in right now. Items marked `[adjacent]` are off-domain but pattern-match.

The list is intentionally broad — most will not get built. The point is to see the full surface area before committing.

### FIRE / personal finance (post-validation winner — overweight here)

1. **Should I quit my job runway calculator** `[validated, living-it]` — Tier 1 #1.
2. **Coast FIRE calculator** `[validated]` — 27k/mo KD 9.
3. **Barista FIRE calculator** `[validated]` — 1.4k/mo, no KD shown.
4. **Lean FIRE vs Fat FIRE comparator** — same data, different framing.
5. **Geographic arbitrage FIRE calculator** — "What's my FIRE number in [Lisbon / Austin / Chiang Mai]?"
6. **Sequence-of-returns stress tester** — Monte Carlo your retirement against historical worst cases.
7. **Withdrawal rate calculator (4% rule variants)** — Bengen / Trinity / dynamic.
8. **Roth conversion ladder planner** — multi-year tax optimization.
9. **Tax-loss harvesting opportunity scanner** — Plaid integration.
10. **Mega backdoor Roth maximizer** — by-employer plan rules + contribution math.
11. **RSU vest + tax calculator** — vest schedule, withholding shortfall, sell-to-cover math.
12. **ISO/NSO option exercise planner** — AMT triggers, hold-to-LTCG strategy.
13. **83(b) election deadline tracker** — 30-day window enforcement.
14. **ESPP discount optimizer** — sell-immediately vs hold strategies.
15. **HSA triple-tax calculator** — show the real lifetime value vs 401(k).
16. **Solo 401k contribution calculator** — for the post-quit version of you.
17. **I-Bond / TIPS ladder builder** — inflation-protected income planning.
18. **Cap table → share value calculator** — "what is my equity worth at $X valuation?"
19. **IPO scenario calculator** — modeling lockup, tax, secondaries.
20. **Severance package analyzer** — total value vs unemployment + COBRA math.
21. **Job offer total-comp comparator** — base + equity + healthcare + 401k match + perks.
22. **Self-employment tax + quarterly estimator** — for the post-quit you.
23. **Freelance hourly rate calculator** — with health insurance + tools + downtime overhead.

### Home ownership / renovation (Beau living it right now)

24. **Renovation cost calculator** `[validated, living-it]` — Tier 1 #2.
25. **Renovation quote validator** `[living-it]` — "is $X reasonable for Y in my ZIP?"
26. **Refi break-even calculator** — already covered in earlier brainstorm.
27. **HELOC vs cash-out refi comparison** `[living-it]` — different tax + repayment shape.
28. **Mortgage recasting calculator** — under-marketed, lump-sum-pays-down-without-refi.
29. **PMI removal eligibility checker** — value-appraisal-required math.
30. **Bi-weekly mortgage payment calculator** — shows years and interest saved.
31. **Property tax estimator (by ZIP/county)** — already in earlier brainstorm; jurisdictional moat.
32. **Mello-Roos calculator** — CA-specific, valuable in new construction.
33. **CA Prop 13 transfer / parent-child exemption planner** — narrow niche, high willingness to pay.
34. **ADU feasibility calculator (CA-specific)** `[living-it, SF]` — SB 9 / state law eligibility check.
35. **Earthquake retrofit cost estimator (CA)** `[living-it, SF]` — soft-story / brace + bolt math.
36. **Solar payback calculator** — net of incentives, by utility, with NEM 3.0 logic.
37. **Heat pump ROI calculator** — by climate zone + utility rate.
38. **Smart home device cost-savings calculator** — Nest, Aquanta, etc.
39. **Roof replacement cost estimator** — by sqft, material, region.
40. **HOA fee + special assessment forecast** — covered earlier.
41. **Closing cost estimator (by state)** — title, transfer tax, recording fees.
42. **Title insurance comparator** — owners vs lenders, optional endorsements.
43. **Insurance coverage gap analyzer** — replacement cost vs dwelling coverage.
44. **Buy vs rent calculator (specific city)** — NYT-quality math with local property tax.

### Sports / baseball (Dugout Edge adjacency)

45. **Lineup generator** `[validated, building]` — Dugout proves it.
46. **Practice plan generator** `[validated, building]` — Dugout proves it.
47. **Tournament bracket generator** — single/double elim, seeding, printable.
48. **Pitch count tracker + state-rule enforcer** — Little League / USSSA / state HS rules.
49. **Pitching workload calculator** — innings + pitches per week with rest.
50. **Travel team budget calculator** — tournaments × hotel × gas × meals × roster.
51. **Snack / drink schedule generator** — by team, with allergy flags.
52. **Carpool coordinator** — game/practice rides.
53. **Game-time weather decision tool** — lightning rule, heat index, rain delay calc.
54. **Field reservation tracker** — multi-field, multi-team.
55. **Showcase / recruiting tracker** — events, coach outreach, video links.
56. **Travel ball ROI calculator** — total cost vs probable scholarship value.
57. **Exit velocity / bat speed percentile** — by age group, position.
58. **Pitching velocity → projection calculator** — Driveline-style age-curve projection.
59. **College recruiting outreach CRM** — coach contacts, emails sent, last-followed-up.
60. **Player progression dashboard** — year-over-year skill change.

### Fitness / nutrition

61. **Calorie-aware grocery cart Chrome extension** `[validated]` — Tier 2 anchor.
62. **1200 calorie meal planner** `[validated]` — KD 6 wedge.
63. **GLP-1 nutrition planner** — protein-priority, fiber-aware.
64. **1RM / progressive overload programmer** — Wendler 5/3/1, Texas Method variants.
65. **Plate calculator (barbell visualizer)** — UI-first, sub-second use.
66. **Cutting/bulking macro phase planner** — multi-phase with refeed days.
67. **Marathon training plan generator** — by goal time + days/week.
68. **Race pace calculator with conditions** — heat, elevation, wind.
69. **Hyrox / CrossFit benchmark percentile** — by age, sex, weight.
70. **VO2 max estimator from race times** — Daniels' formula, with training paces.
71. **Body fat estimator (Navy / skinfold)** — multi-method comparison.
72. **Cold plunge / sauna protocol generator** — by goal, fitness level.

### Wedding (Feb 6, 2027 — Beau living it in 9 months)

73. **Wedding seating chart optimizer** `[living-it]` — relationship-constraint solver.
74. **Wedding budget calculator with regional benchmarks** `[living-it]` — by metro, by guest count.
75. **Wedding day timeline generator** `[living-it]` — ceremony → reception with vendor handoffs.
76. **Vendor contract red-flag checker** `[living-it]` — upload PDF, get a checklist.
77. **Honeymoon points + cash optimization** `[living-it]` — Beau's travel + finance combo.
78. **Wedding registry comparator** — Zola vs Amazon vs Bloomingdale's fee/return math.
79. **Bachelor / bachelorette party budget splitter** — multi-currency.
80. **Wedding speech outline + timer** — structured prompts + delivery practice.

### Travel / in-person experiences

81. **Time zone meeting planner** — already crowded, would need a wedge.
82. **Hotel points value calculator** — per-program redemption $/point.
83. **Airline miles redemption optimizer** — multi-program search for a route.
84. **Schengen / ETIAS day counter** — visa-free stay tracker.
85. **Carry-on weight checker (by airline)** — airline+route+fare-class rules.
86. **Multi-leg trip cost calculator** — flights + hotel + meals × people, FX conversion.

### Data / AI tooling

87. **LLM token cost calculator** — multi-provider lookup + monthly projection.
88. **Prompt template library + variable filler** — curated, searchable, copyable.
89. **AWS / Vercel / GCP pricing comparator** — by workload shape (read-heavy, write-heavy).
90. **Cron expression builder + tester** — visual builder, simulates schedule.
91. **Regex builder with live tester** — pattern library + match preview.
92. **CSV cleaner / quick formatter** — drag-drop, dedupe, type-fix, export.
93. **Embedding model + vector DB cost calculator** — workload × pricing matrix.

### Adulting / life admin

94. **Subscription audit tool** — Plaid integration, cancel-candidate flagging.
95. **HSA / FSA use-or-lose optimizer** — eligible-expense matcher with year-end deadline.
96. **Vehicle 5-year TCO calculator** — depreciation + insurance + gas + maintenance.
97. **Prescription cost comparator** — GoodRx-ish but with insurance overlay.
98. **Estate / will deadline + checklist tool** — by state, with witness/notary rules.

### Social / friendships (per Stripe Sessions reflection)

99. **Friend hangout frequency tracker** — Dunbar's number visualization.
100. **Group trip cost splitter with arrival/departure dates** — Splitwise but trip-aware (different people, different days).

### How to use this list

- **Don't validate all 100.** The validated Tier 1 ranking above already says where to start. This list is for *seeing the surface area* — and noticing which ideas spark something for you that the data hasn't.
- **Watch for the "I should already be using this" reaction.** If you read an idea and your gut says "wait, doesn't that exist?" — check. Often the existing version is bad, which is the wedge.
- **Watch for cluster effects.** The home-ownership cluster (24–44) is genuinely large and you're personally in it. Could be a *site* (homerenokit.com or similar) with 10 tools, not just one tool.
- **Same for FIRE cluster (1–23).** Could be a site (e.g., quitkit.com) with the runway calc, coast FIRE calc, Roth ladder, severance analyzer all under one brand.
- **Same for wedding cluster (73–80).** Less SEO-friendly than FIRE/home, but the bundle has urgency built in (your own wedding).

## Tier 2 — Volume tools (original brainstorm, pre-validation)

Organized by Beau's domains. Each row gets a quick fit score against the filters. Search-demand numbers below are estimates pending DataForSEO validation — flagged with `[needs-validation]`. Confirmed numbers (already pulled) are flagged with `[validated]`. These are faster to ship, smaller per-customer revenue — best as a portfolio that compounds, not standalone bets.

### Sports / baseball (Dugout Edge adjacent)

| Tool | Why it fits | LLM-killable? | Demand signal |
|---|---|---|---|
| **Lineup generator** ✓ already built | Position constraints, batting order rules, sub rotation across innings — structured | No (visual UI + constraints) | [validated] — Dugout Edge proves it |
| **Practice plan generator** ✓ already built | Time-block structure, drill mix, skill targets | Partially — but UI + exports kill ChatGPT version | [validated] |
| **Tournament bracket generator** | Single/double elim brackets, seeding, printable | No — visual output | [needs-validation] |
| **Pitch count tracker / Little League rule enforcer** | State-by-state pitch count rules + days rest | No — deterministic compliance tool | [needs-validation] — likely real |
| **Travel team budget calculator** | Tournament fees + hotel + gas + meals × roster | No — multi-input financial UI | [needs-validation] |
| **Baseball stat tracker / box score generator** | Standardized stat entry → box score, season totals | No — structured data entry | [needs-validation] |

### Personal fitness

| Tool | Why it fits | LLM-killable? | Demand signal |
|---|---|---|---|
| **Calorie-aware grocery cart (Chrome extension)** | Live cart-level calorie/macro ticker on Whole Foods/Amazon Fresh/Instacart | **No — needs DOM access, ChatGPT can't see your cart** | [validated] "whole foods meal planner" 5,400/mo KD 4 |
| **1200 calorie meal planner** | Weekly plan + grocery list for a target calorie budget | Partially — but a saved/exportable plan with macro breakdown beats ChatGPT chat | [validated] 12,100/mo KD 6 |
| **GLP-1 nutrition planner** | Macro-target planning for Ozempic/Mounjaro users (high protein, low cal, fiber-aware) | No — specific medical-adjacent constraints + ongoing tool | [needs-validation] — likely emerging |
| **1RM / progressive overload calculator** | Calculates 1-rep max from sets/reps, projects next week's lifts | No — formula + visual programming UI | [needs-validation] |
| **Plate calculator (barbell)** | "I want X lbs total" → plate visualization per side | No — visual UI, sub-second use | [needs-validation] |
| **Cutting/bulking calorie calculator** | TDEE + deficit/surplus + duration → daily target + projected weight curve | No — multi-input + chart | [needs-validation] |

### Home ownership

| Tool | Why it fits | LLM-killable? | Demand signal |
|---|---|---|---|
| **Refi break-even calculator** | Current rate + new rate + closing costs → months to break even | No — multi-input financial math | [needs-validation] — generic mortgage calcs everywhere, but a clean refi-specific tool can win |
| **Home renovation budget tracker** | Itemize project, track quotes vs. spend, % over/under | Partially — but persistence + export kills ChatGPT | [needs-validation] |
| **Property tax estimator (by ZIP/county)** | Local mill rates + assessed value → annual tax | No — jurisdictional data lookup | [needs-validation] |
| **HOA fee + assessment forecast** | Monthly fee + projected special assessments → true cost of ownership | No — multi-year projection | [needs-validation] |
| **Cost-per-square-foot comparison** | Compare listings or renovation quotes on $/sqft | No — multi-input ranking | [needs-validation] |

### Data / AI tooling

| Tool | Why it fits | LLM-killable? | Demand signal |
|---|---|---|---|
| **Cron expression builder / explainer** | "Every Tuesday at 3pm except holidays" ↔ cron syntax | Partially — but visual builder UI + test against schedule beats ChatGPT | [needs-validation] — crontab.guru exists; thin |
| **Regex builder for specific use cases** | Live tester + named patterns library | No — interactive testing UI | [needs-validation] |
| **CSV cleaner / quick data formatter** | Drag-drop CSV → clean (trim, dedupe, type-fix) → export | No — needs file handling + UI | [needs-validation] |
| **LLM token cost calculator** | Pick model + estimate tokens + monthly volume → cost projection | No — multi-provider lookup + math | [needs-validation] |
| **Prompt template library + variable filler** | Pick template, fill variables, copy result | Partially — ChatGPT can do simple ones, but a curated/searchable library is the moat | [needs-validation] |

### Travel / in-person experiences

| Tool | Why it fits | LLM-killable? | Demand signal |
|---|---|---|---|
| **Trip cost calculator (multi-traveler, multi-leg)** | Flights + hotel + meals × people, with currency conversion | No — multi-input UI with breakdown | [needs-validation] |
| **Time zone meeting planner** | Pick cities + duration → calendar grid showing best slots | No — visual grid output | [needs-validation] — already exists (Every Time Zone, World Time Buddy) — needs differentiation |
| **Group hangout splitter / decision tool** | Group of N people + constraints → ranked activity options + cost split | No — multi-input optimization | [needs-validation] |
| **Per diem / business travel reimbursement calculator** | GSA per diem lookup by city + trip length | No — gov data lookup | [needs-validation] |

### Friendships / social

| Tool | Why it fits | LLM-killable? | Demand signal |
|---|---|---|---|
| **Birthday / gift tracker** | People + budget + occasions + reminders | No — persistence + reminders | [needs-validation] — likely small market |
| **Wedding RSVP + budget tracker** | Guest list + RSVPs + budget by category | No — persistence + math | [needs-validation] — crowded but vertical wedges exist |
| **Friend hangout frequency tracker** | Log meetups, see who you haven't seen recently | No — persistence-based, novel UX | [needs-validation] — emerging "social fitness" niche |

## Recommended next steps (post-validation)

Validation pass on 2026-05-21 surfaced a clear #1 winner. Suggested action:

1. **Build first: "Should I quit my job?" runway calculator.** Single-page calculator + email capture. Use it personally first (you're in the decision). Ship in 1–2 weeks. Anchors the FIRE-tools brand.
2. **Build second: Coast FIRE calculator.** 27,100/mo KD 9, +83% YR. Could be the highest-ROI single page in the portfolio.
3. **Build third: Renovation cost calculator.** Use it on your own SF house project. Lead-magnet → eventual contractor referral.
4. **Optional portfolio anchor: Calorie-aware grocery cart.** Already validated, ships in weeks, different vertical for diversification.
5. **Hold off on:** Wedding budget tool (KD too high), renovation project manager (declining), mortgage refi tool (incumbents too strong), eldercare (not a tool-SEO market).

The FIRE tool suite alone could be the whole thing. The data says "go here first" louder than anything else surfaced in this session.

## What the thesis means for the previous "big-bet" analysis below

The original four-idea comparison (calorie cart, AI shopping, AI data analyst, AI wallet) was framed as "pick one big startup to go all in on." Under the new portfolio thesis, only **calorie cart survives** — the others are either things ChatGPT will eat (AI shopping assistant, AI data analyst, AI wallet) or fail the LLM-unkillable filter.

The big-bet analysis is preserved below for reference, but the active strategy is the **tool portfolio** above.

---

## Previous big-bet analysis (kept for reference)

Ranking criteria (earlier framing, 2026-05-21):
1. **Lowest competition** (KD)
2. **Growing the most** (yearly / quarterly / monthly trend)
3. **Biggest tailwinds** — markets where capturing <1% is still a huge business

All keyword volumes (vol), difficulty scores (KD), and trend % below are pulled from live DataForSEO API calls — verifiable in the tool-result cache.

## Headline ranking

| # | Idea | Lowest competition | Growing the most | Tailwinds (TAM × secular) |
|---|------|--------------------|------------------|---------------------------|
| 1 | [Calorie-aware grocery cart](./calorie-aware-grocery-cart.md) | KD **4–6** in the SEO wedge (meal planner cluster). KD 5 even for restaurant-specific trackers (chipotle, dominos) — proves the in-context calorie pattern. | +126% YR on "cal ai calorie tracker," +48% YR on "ai calorie tracker." GLP-1 cohort growing fast. | **Biggest TAM in the portfolio.** US online grocery ≈ $200B, growing 15–20%/yr. GLP-1 wave (Ozempic, Mounjaro, ~13M users in 2026) is a generational calorie-obsession trigger. 1% of GLP-1 users = ~130k customers. |
| 2 | [AI shopping / agentic commerce](./ebay-agentic-payments.md) | **Best in portfolio** — KD **14** on "ai shopping assistant" (1,300/mo) and "ai-powered shopping assistant." | **Explosive — best signal in portfolio.** "ai-powered shopping assistant" +743% YR, +127% MO. "ai shopping assistant" +48% MO. Category being defined right now. | Stripe agentic checkout, Visa Intelligent Commerce, Mastercard Agent Pay all ship in 2026. eBay's catalog (1.9B listings) is uniquely agent-friendly. Smaller TAM today, but the category curve is steepest. |
| 3 | [AI data analyst (vertical)](./ai-data-analyst.md) | Low KD across the board (16–33) but mostly **informational/anxiety queries**, not buyer queries. | +600% YR on "will ai take over data analyst jobs," +181% YR on "ai data analyst jobs." | Job displacement narrative is real. Beau's personal moat (UserTesting) is the strongest in the list. **But the buyer TAM is small** — bigger story is content/audience, then convert. |
| 4 | [AI wallet](./ai-wallet.md) | KD 27 ("credit card rewards app"). | +129% YR but **-33% MO** (possible mean reversion). No standout. | Overlaps with #2's tailwinds. No standalone case. Park it. |

## Side-by-side comparison

| Metric | Calorie cart | AI shopping | AI data analyst | AI wallet |
|---|---:|---:|---:|---:|
| **Total recent demand (top 100 cluster)** | ~458k/mo | ~3–5k/mo | ~2k/mo | ~480/mo direct |
| **Avg KD (overall cluster)** | 66 | 14–34 | 16–33 | 27–29 |
| **Min KD with real volume** | **4** (whole foods meal planner, 5,400/mo) | **14** (ai shopping assistant, 1,300/mo) | 21 (ai data analyst, 590/mo) | 27 |
| **Best growth signal (yearly)** | +126% (cal ai calorie tracker) | **+743%** (ai-powered shopping assistant) | +600% (will ai take over data analyst jobs — anxiety) | +129% |
| **Best growth signal (monthly)** | +22% | **+127%** | +84% | -33% |
| **Buyer intent at the top of the cluster** | Mixed (commercial + informational) | Commercial | Informational (anxiety) | Commercial |
| **1% capture math** | 1% of US online grocery shoppers (~130M+) = **1.3M users** | 1% of agentic commerce txns by 2028 = potentially massive but speculative | 1% of US data analysts (~140k) = 1.4k users | 1% of premium cardholders (~25M) = 250k users |
| **Buildable solo MVP** | Yes — 2–4 weeks (Chrome extension) | Partially — needs payment rails partnership | Yes — depends on vertical | No — needs merchant integrations |
| **Beau's personal moat** | Lived the pain (cutting, online grocery) | None directly | **Strongest** — UserTesting analyst workflow | None |

## How to read this

**By "lowest competition" alone:** AI shopping wins (KD 14 across the cluster).

**By "growing the most" alone:** AI shopping wins (+743% YR is the strongest growth signal in the portfolio).

**By "tailwinds + 1% capture":** Calorie cart wins. US online grocery is a $200B+ market growing 15–20%/yr; the GLP-1 cohort is creating a generational shift in calorie-awareness behavior. AI shopping has steeper *growth*, but smaller absolute *TAM* today.

**Composite verdict:** The two real candidates are **calorie cart** and **AI shopping**. Pick the calorie cart if you trust the wedge + TAM story (and you live the pain — important). Pick AI shopping if you trust the timing window + growth curve more than current TAM (and can stomach a smaller addressable buyer base today).

AI data analyst and AI wallet are out by the "<1% capture = huge business" test — their TAMs aren't large enough or their growth signals aren't strong enough to make that math work.

## Key data points

**Calorie cart — wedge keywords (low KD, real volume):**
| vol | kd | keyword |
|---:|---:|---|
| 12,100 | 6 | 1200 calorie meal planner |
| 5,400 | 4 | whole foods meal planner |
| 4,400 | — | 2000 calorie meal planner |
| 1,500 | 63 | ai calorie tracker (+48% YR) |
| 1,200 | 5 | chipotle calorie tracker |
| 1,060 | 59 | cal ai calorie tracker (+126% YR) |
| 1,066 | 5 | dominos calorie tracker |

**AI shopping — explosive growth + low KD:**
| vol | kd | yr % | keyword |
|---:|---:|---:|---|
| 1,300 | 14 | — (+48% MO) | ai shopping assistant |
| 590 | 14 | **+743%** | ai-powered shopping assistant |
| 390 | 34 | +84% | amazon rufus ai shopping assistant |
| 170 | 32 | — | amazon ai shopping assistant |

**AI data analyst — mostly anxiety, some buyer-intent:**
| vol | kd | yr % | keyword |
|---:|---:|---:|---|
| 590 | 21 | +23% | ai data analyst |
| 590 | — | +50% | will data analyst be replaced by ai (anxiety) |
| 480 | — | +23% | will ai replace data analyst (anxiety) |
| 320 | — | **+181%** | ai data analyst jobs |
| 170 | 33 | **+136%** | ai tools for data analyst |
| 140 | — | **+600%** | will ai take over data analyst jobs (anxiety, low base) |

**AI wallet — narrow, mixed signal:**
| vol | kd | yr % | mo % | keyword |
|---:|---:|---:|---:|---|
| 480 | 27 | +129% | -33% | credit card rewards app |

## Caveats on the data

- **Keyword vol/KD: real, live, DataForSEO.** Always sanity-check the *monthly breakdown* before trusting an annual average — single-keyword viral spikes can inflate the 12-month avg by 100× (see literacy-crisis.md data correction).
- **Yearly trend % is volatile from low bases.** "+600%" on a keyword going from 20 → 140 is not the same signal as "+50%" on 590 → 880. Cross-reference with absolute volume.
- **Competitor feature descriptions: training-data knowledge.** Names are real; specific feature claims should be sanity-checked before any go/no-go decision.
- **TAM math is directional, not financial-model grade.** Use as a frame, not a forecast.

## Not on this list

- **[Literacy / critical-thinking crisis](./literacy-crisis.md)** — macro thesis still real, but the "uncontested 301k/mo SEO goldmine" was a data artifact (viral spike Jul–Aug 2025). Real practice-intent demand is ~1–2k/mo. No buildable wedge that beats #1–3 above.
- **[Journal mobile workflow](./journal-mobile-workflow.md)** — personal productivity tool, not a venture.

---

*Research cost: $0.06 total across 6 DataForSEO calls (2026-05-21).*
