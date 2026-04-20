# Master Keyword Research Audit — Beau's Interests, Problems & Ideas
**Date:** 2026-04-18 (v7 — in-person / adult sports league research added)  
**Total spend:** ~$1.22 across 52 API calls  
**Sources:**  
- Journal entry: `content/posts/2026-04-13-things-i-keep-failing-at.md` (12 problem areas)  
- Apple Notes ideas: `content/apple-notes/iCloud/Ideas` (all notes, p786–p2156)  
- New ideas batch: 13 ideas shared 2026-04-18

**Sub-docs:**  
- Journal problems research: `2026-04-16-01` through `2026-04-16-12` CSV files  
- Consumer ideas research: `2026-04-17-13` through `2026-04-17-21` CSV files + `2026-04-17-ideas-SUMMARY.md`  
- AI/B2B research: `2026-04-17-22` through `2026-04-17-27` CSV files + `2026-04-17-ai-b2b-SUMMARY.md`  
- New ideas batch: `2026-04-18-28` through `2026-04-18-33` CSV files + `2026-04-18-new-ideas-SUMMARY.md`  
- Hats research: `2026-04-18-34` through `2026-04-18-36` CSV files  
- Nutrition/mini-tools research: `2026-04-18-37` through `2026-04-18-40` CSV files  
- Wedding planning research: `2026-04-18-41` through `2026-04-18-44` CSV files  
- In-person sports research: `2026-04-18-45` through `2026-04-18-50` CSV files + `2026-04-18-in-person-SUMMARY.md`  
- Site concepts: `2026-04-17-site-concepts.md`

---

## TL;DR — Four Bets

**Bet 1 — Adult Recreational Sports League Platform (RECESS).**  
The biggest SEO gap in this entire research project. "Adult basketball league near me" — 5,400 vol, KD 0. "Adult soccer league near me" — 5,400 vol, KD 0. "Adult volleyball league near me" — 4,400 vol, KD 5. "Adult softball league near me" — 5,400 vol, KD 6. 40,000+ monthly searches across sports and cities, all at KD 0-11. Combine the SEO directory with actually running leagues (the Recess concept) and a SaaS layer for organizers. This is both the SEO opportunity and the in-person business. Volo Sports did this and raised $10M+. Full analysis: `2026-04-18-in-person-SUMMARY.md`.

**Bet 2 — Sports Facility Directory (batting cages inside DugoutEdge).**  
The single largest individual keyword in the dataset: "cage batting near me" — 201,000 monthly searches at KD 0. Every batting cage variant is KD 0. Lives inside DugoutEdge rather than as a standalone site. Personal credibility: you actually need this right now.

**Bet 3 — Second Brain / AI-Native PKM Tool.**  
"Second brain app" is KD 0, $7.47 CPC. "Second brain ai" is KD 3, $8.62 CPC. Advertisers pay $7-9 per click and nobody organically ranks. 36 easy-win keywords, 24 commercial gems. You wrote about wanting this tool 12-15 times in your journal. You are the target user.

**Content Bet — Morning Routine (personal brand).**  
164 easy-win keywords. "Morning routine guys" (2,400 vol, KD 0) and "morning training routine" (1,600 vol, KD 0) are both uncontested. This is where your journal points naturally. Written content, no product required, builds personal brand.

**Posture and Amazon price tracking are the two surprise data points.** Posture has 156k searches/month underserved (but it's all e-commerce, affiliate play only). Amazon price history has 18,100 vol KD 28 commercial — possible browser extension play.

---

## THE FULL RANKED LIST

Ranked by: **volume + lowest KD + commercial/transactional intent**  
Primary metric: `gap_score = vol / (kd + 1)`  
Secondary filter: commercial or transactional intent preferred over informational

---

### #1 — Sports Facility Directory (BATTING CAGES + ADULT SPORTS)

**Clusters:** batting_cages + adult_baseball + run_club  
**Combined easy wins:** 28 + 83 + 187 = 298 keywords  
**Source files:** 16, 04, 11

```
         vol   kd     cpc  intent          keyword
  ---------------------------------------------------
     201,000    0   $0.60  transactional   cage batting near me          ← 201k/mo KD 0
      18,100    0   $0.72  transactional   indoor batting cage near me
      18,100    0   $0.58  transactional   batting cage near me
       9,900   13   $0.43  commercial      run club near me
       3,600    0   $1.62  informational   adult baseball league near me
       3,600   12   $1.62  navigational    adult baseball leagues near me
       3,600    1   $0.87  commercial      run club in nyc               ← KD 1
       1,000   10   $0.55  commercial      adult baseball league
         480    8   $1.07  informational   adult baseball near me
```

**Why #1:** "Cage batting near me" is 201,000 monthly searches at KD 0 — the largest underserved keyword in this entire dataset. Every batting cage variant (indoor, rental, open) is also KD 0. Stack this with the adult baseball and run club data and you have one unified search thesis: people want to find places to play sports and meet people to play with, and nobody owns this SERP.

**Product type:** Local sports facility directory + community platform. City pages for batting cages, baseball fields, run club meetups. Revenue: featured facility listings, session coordination tools (freemium), eventually equipment affiliate links.

**SEO strategy:**  
- `/batting-cages/[city]` → "batting cage near me" + "indoor batting cage [city]" (KD 0)  
- `/baseball/leagues/[city]` → "adult baseball league near me" (KD 0)  
- `/run-club/[city]` → "run club in [city]" (KD 1-13)  
- Launch: 50 cities, 3 facility types = 150+ pages indexed day 1 via ISR

**Personal connection:** You want a batting cage and you want a team. You have this problem today.

**Spec doc:** `docs/superpowers/specs/2026-04-16-adult-baseball-platform-design.md`

---

### #2 — Adult Summer Camp / RECESS (THE EXPERIENCE LAYER)

**Cluster:** adult_sports_camp  
**Easy wins:** 37 of 39 keywords  
**Source file:** 17

```
     vol   kd     cpc  intent          keyword
  -----------------------------------------------
   6,600    0   $2.57  commercial      summer camp for adult          ← KD 0, paid CPC
   6,600    1   $2.53  navigational    adult summer camp
     480   10   $2.97  transactional   adult summer camp near me
     320    0   $5.67  commercial      adult summer camp california
     320    0   $2.26  commercial      california adult summer camp
     260    6   $1.30  commercial      adult summer camp nyc
     170    0   $1.64  commercial      adult summer camp florida
     140   10   $4.41  commercial      adult summer camp for women
```

**Why #2:** "Summer camp for adult" — KD 0, $2.57 CPC, 6,600 monthly searches. Advertisers pay for this click. Nobody ranks for it organically. City variants are also KD 0. This is the highest-signal commercial keyword in the entire dataset relative to its difficulty.

**Product type:** This is the product you're actually describing: a place adults go to play sports, feel the team feeling again, meet people who share the same desire. The platform #1 above handles the everyday discovery layer ("where's the batting cage"). This handles the aspirational layer ("I want a real sports experience with real people").

**Two paths:**
1. Extend the adult baseball platform to include weekend camps and clinics (the RECESS concept)
2. Build a standalone adult camp business and own the directory too (be the operator AND the aggregator)

**Note:** $23.67 CPC on "adult summer camp georgia" — someone's paying a lot to reach these buyers in Georgia specifically. This signals untapped geographic demand.

---

### #3 — Posture / Desk Pain (AFFILIATE CONTENT PLAY)

**Cluster:** posture_pain  
**Easy wins:** 166 of 200 keywords  
**Source file:** 08

```
     vol   kd      cpc  intent          keyword
  ------------------------------------------------
  60,500   29    $3.19  transactional   posture corrector
  18,100   32    $3.35  transactional   posture corrector for men
  14,800   34    $4.10  transactional   best posture corrector
   9,900   26    $3.94  transactional   posture brace
   9,900   36    $4.50  transactional   posture support
   8,100   25    $4.00  transactional   posture support brace
   6,600   29    $4.64  transactional   best back brace for posture
   6,600   21    $2.04  transactional   posture corrector for back
```

**Why #3:** 166 easy-win keywords, 156k aggregate cluster volume. This is the highest raw search volume cluster after batting cages. KDs are 21-36 — not zero, but accessible. The problem: intent is 100% e-commerce/Amazon. People are looking to buy physical products, not read a comparison blog.

**Product type:** Amazon affiliate content site. Write "best posture corrector" round-ups, review individual products you've personally tested (you sit at a desk all day — this is your problem too), earn affiliate commissions on every sale.

**Realistic ceiling:** $500-2,000/month passive income with 10-15 well-optimized review pages. This is not a platform, not a product — but the volume is real and the affiliate economics work.

**Personal connection:** You wrote about the effects of sitting in your journal. You feel this problem physically.

---

### #4 — Morning Routine (PERSONAL BRAND CONTENT)

**Cluster:** morning_routine  
**Easy wins:** 164 of 200 keywords (536 total in cluster)  
**Source file:** 07

```
     vol   kd     cpc  intent          keyword
  -----------------------------------------------
  18,100   27   $0.92  informational   morning routine
   6,600   15   $0.06  informational   morning routine of successful
   4,400    9   $0.00  informational   morning routine guy
   2,400    0   $0.00  informational   morning routine guys      ← KD 0, 2.4k/mo
   1,600    0   $3.29  informational   morning training routine  ← KD 0, $3.29 CPC
   3,600   10   $1.99  informational   morning stretches routine
   3,600   13   $1.99  informational   morning stretching routine
```

**Why #4:** 164 easy-win keywords. "Morning routine guys" (2,400 vol, KD 0) and "morning training routine" (1,600 vol, KD 0) are completely uncontested with real volume. You write about your morning routine constantly in your journal — this is native content, not manufactured.

**Product type:** Personal brand content. Publish your actual morning routine. "Morning training routine" ($3.29 CPC on informational) suggests sponsored content opportunity — fitness brands pay for this audience. Lead into a course or community once the audience exists.

**This is not a product play.** The morning routine app market is saturated (Habitica, Fabulous, Streaks). But the content market has massive gaps right now.

---

### #5 — Adult Baseball + Run Club Platform (COMMUNITY + COORDINATION)

**Clusters:** adult_baseball + run_club  
**Easy wins:** 270 combined (83 + 187)  
**Source files:** 04, 11

Already folded into #1 above for the directory play. Separated here to note the community/coordination angle is distinct from the facility discovery angle:

```
     vol   kd     cpc  intent          keyword
  -----------------------------------------------
   9,900   13   $0.43  commercial      run club near me
   3,600    1   $0.87  commercial      run club in nyc
   3,600    0   $1.62  informational   adult baseball league near me
   1,000   10   $0.55  commercial      adult baseball league
     480    8   $1.07  informational   adult baseball near me
```

**Insight:** The run club data validates the thesis beyond baseball. "Run club in nyc" has KD 1. The city-page strategy works identically across adult sports communities. This means the platform doesn't stay baseball-only for SEO — it expands to run clubs, soccer pickup, volleyball, and each new sport adds another city-page layer.

**Spec doc:** `docs/superpowers/specs/2026-04-16-adult-baseball-platform-design.md`

---

### #6 — Second Brain / AI-Native PKM Tool (BUILD — VALIDATE FIRST)

**Cluster:** second_brain_pkm  
**Easy wins:** 36 | **Commercial gems:** 24  
**Source file:** 03

```
     vol   kd      cpc  intent          keyword
  -----------------------------------------------
   2,400   34    $5.46  informational   second brain
   1,300   16    $0.53  informational   building a second brain
     390    4    $8.42  commercial      notion second brain
     260    0    $7.47  commercial      second brain app          ← KD 0, $7.47 CPC
     260    0    $7.47  informational   second brain apps         ← KD 0
     210    3    $8.62  commercial      second brain ai           ← KD 3, $8.62 CPC
     260    5    $1.81  commercial      second brain notion
```

**Why #6:** "Second brain app" is KD 0 and $7.47 CPC. "Second brain ai" is KD 3 and $8.62 CPC. Advertisers pay $7-9 per click and nobody organically ranks. This is the combination that signals a real unserved market: buyers exist, money is in the channel, Google has no winner.

**Risk:** Obsidian, Notion, Roam, Logseq are established. Validate with a landing page before building.

**You wrote about wanting this 12-15 times in your journal.** You are the target user.

---

### #7 — Amazon Price Tracking (BROWSER EXTENSION)

**Cluster:** price_tracking  
**Easy wins (KD<20):** 22 of 68 keywords  
**Source file:** 14

```
     vol   kd     cpc  intent          keyword
  -----------------------------------------------
  18,100   28   $3.63  commercial      price history on amazon
   2,400   13   $4.03  commercial      amazon price tracking history
   1,600    8   $4.19  informational   how to see amazon price history
     590   11   $0.00  commercial      see price history on amazon
     140    0   $3.39  transactional   amazon kindle paperwhite price history
     140    0   $1.50  transactional   amazon kindle price history
```

**Why #7:** 18,100 searches/month for "price history on amazon", KD 28, $3.63 CPC commercial. CamelCamelCamel exists but KD 28 means the SERP isn't fully locked. The cluster has 68 viable keywords and the intent is buying-oriented throughout. A clean, modern browser extension could own the lower-KD phrases.

**Product type:** Chrome extension showing price history on Amazon product pages + email alerts for drops. Affiliate model (Amazon Associate links) + premium subscription for power users.

**Note:** This idea came from your Apple Notes ideas folder — you apparently identified this gap yourself.

---

### #8 — Digital Detox / Screen Time (CONTENT OR RETREAT)

**Cluster:** screen_time  
**Easy wins:** 11 | **Source file:** 12

```
     vol   kd      cpc  intent          keyword
  ------------------------------------------------
     720    0    $0.00  commercial      digital detox apps             ← KD 0
     720    2    $4.85  transactional   digital detox retreat
     880    5    $2.03  transactional   digital detox phone
      70    0   $16.68  transactional   digital detox retreat near me  ← $16.68 CPC
     590   33    $0.25  commercial      what is a digital detox
```

**Why #8:** "Digital detox retreat near me" — $16.68 CPC at KD 0. Tiny volume (70/mo) but extraordinary commercial intent. Someone running a digital detox retreat could own this immediately. "Digital detox apps" at KD 0 is a content win for personal brand. "Digital detox phone" (880 vol, KD 5) is underserved.

**Product types:**  
- Retreat business: own the "digital detox retreat near me" search entirely  
- Content: 1-2 personal pieces about your screen time reduction, easy wins for personal brand

---

### #9 — Sober Curious / Alcohol Moderation (CONTENT ONLY)

**Cluster:** alcohol_moderation  
**Easy wins:** 4 | **Source file:** 02

```
     vol   kd      cpc  intent          keyword
  ------------------------------------------------
   2,900   29    $4.56  commercial      sober curious
     880   12    $0.21  informational   what does sober curious mean   ← easy win
     260    0    $0.74  commercial      sober curious books
      70    0    $3.86  commercial      sober curious drink
```

**Why #9:** "What does sober curious mean" is 880 vol / KD 12 — easy to rank. Connects directly to your journal. One personal essay about your relationship with alcohol and what "sober curious" means to you could rank and earn affiliate commissions on book recommendations.

**Do not build a product here.** 16 keywords total, dominated by book content.

---

### #10 — Meditation (COMPARISON CONTENT ONLY)

**Cluster:** meditation  
**Easy wins:** 25 | **Source file:** 06

```
     vol   kd     cpc  intent          keyword
  -----------------------------------------------
   5,400   12   $2.47  commercial      best meditation app
   2,400   31   $3.26  commercial      headspace vs calm
   1,900   17   $2.25  commercial      best free meditation app
   1,000   12   $1.58  commercial      best mindfulness app
```

**Why #10:** "Best meditation app" is 5,400 vol / KD 12. The product space (Calm, Headspace, Insight Timer) is locked, but the comparison/review content space is accessible. A "best meditation app" roundup page with affiliate links is the play.

**Do not build a meditation app.** Calm + Headspace own the SERP and have 100M+ users combined.

---

## DO NOT PURSUE

| Cluster | Data | Why skip |
|---|---|---|
| **Calorie tracking / fitness app** | 40,500 vol head term | MyFitnessPal has 150M users. KD on anything meaningful is 40+. |
| **Habit tracker app** | 6,600 vol, KD 50+ | Habitica, Streaks, Fabulous, Notion habits. Overcrowded. |
| **Personal finance app** | 135,000 vol (misleading) | Drill-down returned 11 results only. YNAB, Copilot, Monarch cover the space. |
| **Founder/solopreneur marketing** | 650 vol total | Market doesn't search for this. |
| **Content repurposing tools** | 170 vol on best keyword | Almost no search demand. Opus Clip exists. |
| **Founder sales** | 320 vol | Too thin. |
| **Vibe coding / Cursor AI** | 110k vol, CI 45 | Anthropic, OpenAI, Replit, GitHub Copilot own this. No entry. |
| **Digital twin / personal AI** | "ai memory app" 10 vol | Market isn't searching yet. Wait 12-18 months. |
| **High-protein food / energy gum** | CI 72-100 | Amazon dominated. |
| **Fantasy sports AI** | 10-260 vol | Thin, niche. |
| **Golf tracking tools** | High CI across the board | Arccos, Grint, 18Birdies own the app store. |
| **Baseball recruiting platform** | 0 vol | Dead phrasing. No market searching for this. |
| **Travel timing** | 27k vol, dominated | Lonely Planet, NatGeo, travel media sites lock this. |
| **No-code app builder** | 8 results, niche | Bubble, Glide, Adalo own the space. No entry point. |
| **Credit card optimizer** | 30-70 vol | No search demand. |

---

## Complete Dataset — Keyword Counts Per Cluster

| Cluster | Keywords analyzed | Easy wins (KD<20, vol>100) | Commercial gems | Verdict |
|---|---|---|---|---|
| Batting cages | 28 | 28 | 3 | BUILD (directory) |
| Adult summer camp | 39 | 37 | 12 | BUILD (RECESS/camp) |
| Adult baseball | 195 | 83 | 18 | BUILD (platform) |
| Run club / sports community | 200 | 187 | 60 | BUILD (extend platform) |
| Morning routine / habits | 200 | 164 | 45 | CONTENT |
| Posture / desk pain | 200 | 166 | 18 | AFFILIATE (content) |
| Meditation / mindfulness | 105 | 25 | 50 | CONTENT (reviews) |
| Second brain / PKM | 61 | 36 | 24 | BUILD (validate first) |
| Amazon price tracking | 68 | 22 | 18 | BUILD (extension, validate) |
| Digital detox / screen time | 37 | 11 | 9 | CONTENT or retreat |
| Sober curious / alcohol | 16 | 4 | 5 | CONTENT |
| Vibe coding / AI tools | ~40 | ~8 | 12 | SKIP (too competitive) |
| Digital twin / personal AI | ~15 | ~2 | 3 | SKIP (no market yet) |
| Fitness / body composition | 3 | 1 | 0 | SKIP (seed too niche) |
| Personal finance | 11 | 1 | 5 | SKIP (too thin) |
| Founder sales | 1 | 0 | 0 | SKIP |

---

## Priority Map — Which Problem Maps to Which Bet

| Beau's personal problem | Highest-signal keyword | Bet |
|---|---|---|
| No team / no practice partners | adult baseball league near me (KD 0) | #1 / #5 |
| No batting cage access | cage batting near me (201k vol, KD 0) | #1 |
| Missing adventure + community | summer camp for adult (KD 0, $2.57 CPC) | #2 |
| Effects of sitting / posture | posture corrector (156k vol cluster) | #3 |
| Morning routine inconsistency | morning routine guys (KD 0, 2.4k vol) | #4 |
| Second brain / note system | second brain app (KD 0, $7.47 CPC) | #6 |
| Phone / screen addiction | digital detox apps (KD 0) | #8 |
| Drinking too much on weekends | what does sober curious mean (KD 12) | #9 |

---

## Scoring Methodology

```
opportunity_score = (search_volume / 1000) * (1 - keyword_difficulty/100) * intent_multiplier * cpc_multiplier
intent_multiplier: commercial=1.5, informational=1.2, transactional=0.8, navigational=0.3
cpc_multiplier: 1 + (cpc / 10), capped at 3.0

gap_score = vol / (kd + 1)   [used for "most underserved" lens]
```

Broad sweeps used `competition_index` (Google Ads, 0–100) as KD proxy. Drill-downs used actual `keyword_difficulty` from DataForSEO Labs.

**Seeds that returned <20 results:** sober curious (16), fitness consistency (3), personal finance app (11), no-code builder (8). Confirmed thin — do not re-query.

**Next drill-downs worth running (if desired):**
- "morning routine for men" — targeted personal brand angle (KD likely under 15)
- "best posture corrector" — confirm KD and cluster depth for affiliate play
- "investing for beginners" — $14.8k vol head term, KD unknown
- "digital detox retreat" — small vol but confirm market depth before building

---

## AI / Data / B2B Opportunities (Added 2026-04-17)

Full detail: `2026-04-17-ai-b2b-SUMMARY.md`

### #11 — MCP Server Directory (BUILD — TIMING CRITICAL)

**Cluster:** mcp_server | **Easy wins:** 96 | **Commercial gems:** 78  
**Source:** 24-mcp-server.csv (200 of 481 keywords)

```
     vol   kd      cpc  keyword
  ------------------------------------
  60,500   55    $7.32  mcp server             (head term, KD 55)
   5,400   17    $3.21  what is an mcp server  ← KD 17
   2,400    9   $16.48  playwright mcp server  ← KD 9
   1,600    9    $3.42  slack mcp server       ← KD 9
   1,000    0   $13.30  cursor mcp server      ← KD 0
   1,000   13    $9.28  postgres mcp server    ← KD 13
   1,000   17   $47.08  supabase mcp server    ← KD 17, $47 CPC
   1,000   16   $25.52  claude code mcp server ← KD 16
```

MCP (Model Context Protocol) is Anthropic's open standard for AI agent tooling. 60,500 monthly searches, 481 total keywords, 96 easy wins at KD<20. Every major dev tool (Supabase, GitHub, Slack, Postgres, Figma, Snowflake) now has an MCP server. No authoritative directory exists yet. This is "building for agents" made concrete — MCP servers are how AI agents access the world.

**Product:** `/mcp-servers/[tool]` pages. The npmjs.com of the MCP ecosystem. Developers find, install, and rate MCP servers. Publishers pay for featured placement.

**Window:** MCP is ~6 months old. Build the directory in the next 90 days before KDs rise.

---

### #12 — Vibe Coding Resource Hub (CONTENT + TOOLS)

From sweep A — low-competition signals in the developer learning cluster:

```
     vol   ci      cpc  keyword
  -----------------------------------
   4,400    3   $24.60  autonomous ai agent  ← CI 3
   2,900    0   $18.02  ai pair programmer   ← CI 0
   1,900   19   $16.15  claude code tutorial
   1,300    2   $61.11  no code automation platform ← CI 2, $61 CPC
     720   19   $19.88  ai tools for developers
```

Tutorial site covering Claude Code, Cursor, and MCP workflows. Prompt libraries, workflow guides, agent setup tutorials. Serves the rapidly growing vibe coding community. Low ad competition despite real CPC signals.

---

### Pre-Search-Volume Bets (No SEO, Different Distribution)

Ideas from notes that have 0 search volume today — not dead, just early:

| Idea | Right channel |
|---|---|
| Agents hiring agents (p2102) | Twitter/X threads, HackerNews |
| Software for AI agents, not humans (p2051) | Long-form essay, developer newsletter |
| MCP marketplace (p2106) | Build the #11 directory above |
| Vibe trading / natural language trading (p2057) | Fintech Twitter, quant communities |
| Train LLM on your own decisions (p2064) | AI research community |
| AI for Alzheimer's patients (p2063) | Health conferences, direct outreach |
| Financial data API / earnings database (p926, p882) | HackerNews, developer outreach (KD 71-94 kills SEO path) |

**Key insight:** These are real opportunities. The market just doesn't have the vocabulary yet. Watch Google Search Console — when impressions start appearing for these terms, the SEO window is opening.

---

## New Ideas Batch — April 2026

Full detail: `2026-04-18-new-ideas-SUMMARY.md`

### #13 — Co-op Games for Couples (AFFILIATE CONTENT SITE — BUILD NOW)

**Cluster:** coop_games_couples | **Easy wins:** 33 of 33 — every keyword KD 0  
**Source:** 32-coop-games-couples.csv

```
     vol   kd     cpc  keyword
  -----------------------------------
   1,000    0   $0.48  co op games for couples        ← KD 0
     480    0   $0.25  co op video games for couples  ← KD 0
     390    0  $10.42  co-op mobile games for couples ← KD 0, $10 CPC
     260    0   $0.43  co op board games for couples  ← KD 0
     210    0   $0.30  best co-op games for couples   ← KD 0
     210    0   $0.25  co op switch games for couples ← KD 0
```

33 keywords. Every single one at KD 0. Total cluster ~5,000 searches/month. Amazon/Steam/mobile affiliate. 8 pages. One weekend. The original idea was to build a video game — instead, build the site that recommends them. Affiliate income ceiling ~$50-100k/year.

### #14 — Hotel Direct Booking (PRODUCTIZED SERVICE — COLD OUTREACH)

Not an SEO play. Commercial KDs are 35-78 — enterprise hotel tech owns the SERP. But $63 CPC at CI 2 confirms the market is real and paying. Play: cold email Airbnb-listed independent boutique hotels (10-50 rooms), build their direct booking pages for $1,500-3,000 + $99/month hosting. Their savings from one avoided Airbnb fee covers the service.

### Data Products Marketplace, Learn to Read, AI WordPress (WATCH LIST)

- **Data products marketplace:** KD 0, $22 CPC — but mostly navigational (people looking for Snowflake's marketplace). 22 keywords, thin. Real signal, wrong timing for pure SEO play.
- **Learn to read:** 164 easy wins across a mixed cluster. Music reading lane (1,600 vol KD 11) or adult literacy lane (390 vol KD 0) are the viable product angles. Children's phonics is brand-dominated — don't enter.
- **AI WordPress assistant:** 200 monthly searches total with CI 6, $10.61 CPC. Watch it grow — 12-18 months early.

### Kill List (new ideas)

| Idea | Why skip |
|---|---|
| High-protein snacks/noodles | CI 88-100. Food brands and Amazon dominate. |
| Exotic fruit D2C | CI 100. Subscription box brands own this. TikTok is the right channel. |
| Parking app (Parkmate) | 10-20 monthly searches. No demand. |
| Youth sports live streaming | 10 searches/month. No market. |
| Youth sports coaches marketplace | Informational searches exist, transactional searches (hiring) don't. |
| AI prompting evaluator | 10-30 searches. Pre-search-volume. |
| Small business AI portal | 20-110 vol, SMBs search for specific tools not portals. |

---

## Complete Dataset — All Clusters (Updated)

| Cluster | Keywords | Easy wins | Commercial gems | Verdict |
|---|---|---|---|---|
| Batting cages | 28 | 28 | 3 | BUILD (directory) |
| Adult summer camp | 39 | 37 | 12 | BUILD (RECESS/camp) |
| Adult baseball | 195 | 83 | 18 | BUILD (platform) |
| Run club / sports community | 200 | 187 | 60 | BUILD (extend platform) |
| MCP server | 481 | 96 | 78 | BUILD (directory, time-sensitive) |
| Morning routine / habits | 200 | 164 | 45 | CONTENT |
| Posture / desk pain | 200 | 166 | 18 | AFFILIATE |
| Meditation / mindfulness | 105 | 25 | 50 | CONTENT (reviews) |
| Second brain / PKM | 61 | 36 | 24 | BUILD (validate first) |
| Amazon price tracking | 68 | 22 | 18 | BUILD (extension) |
| Vibe coding / developer resources | ~40 | ~12 | 15 | CONTENT + tools |
| Digital detox / screen time | 37 | 11 | 9 | CONTENT or retreat |
| Sober curious / alcohol | 16 | 4 | 5 | CONTENT |
| Text to SQL | 21 | 4 | 5 | WAIT (market early) |
| Financial data API | 7 | 0 | 0 | SKIP (KD 71-94) |
| Workflow automation | 9 | 1 | 3 | CONTENT (comparison) |
| B2B affiliate platform | 0 | 0 | 0 | SKIP (no searches) |
| Digital twin / personal AI | ~15 | ~2 | 3 | WAIT (no market yet) |
| Vibe trading | 0 | 0 | 0 | WAIT (no searches) |
| Personal finance | 11 | 1 | 5 | SKIP |
| Co-op games for couples | 33 | 33 | 8 | BUILD (affiliate site, weekend) |
| Data products marketplace | 22 | 10 | 9 | WATCH (niche, navigational-heavy) |
| Learn to read (adults + music) | 200 | 164 | 30 | BUILD (pick a lane: music reading or adult literacy) |
| Hotel booking (direct) | 25 | 3 | 0 | SKIP SEO — productized service via cold outreach |
| High-protein snacks/noodles | ~10 | 0 | 0 | SKIP (CI 88-100, food brands dominate) |
| Fruit D2C | ~5 | 0 | 0 | SKIP (CI 100) |
| Parking app | ~5 | 0 | 0 | SKIP (0-20 vol) |
| Youth sports streaming | 1 | 0 | 0 | SKIP (10 vol) |
| Youth sports marketplace | ~5 | 0 | 0 | SKIP (transactional searches don't exist) |
| AI prompting evaluator | ~3 | 0 | 0 | WAIT (pre-search-volume) |
| AI WordPress assistant | ~3 | 0 | 0 | WATCH in 12-18 months |
| Performance hats / athletic caps | 23 | 0 | 0 | SKIP SEO — product/brand play, DTC + TikTok/Instagram |
| TDEE / calorie calculator | 50+ | 50 | 0 | BUILD (pure tool, 450k vol KD 16) |
| Macro calculator | 76 | 76 | 0 | BUILD (pure tool, 110k vol KD 25) |
| Fitness calculators (ORM, body fat, protein) | ~30 | 25 | 0 | BUILD (feature set on same tool site) |
| Meal plan generator / grocery list | ~10 | 5 | 0 | BUILD (downstream product from calculator) |
| AI wedding planner | ~10 | 3 | 0 | BUILD (early market, 390 vol forming) |
| Wedding budget planner tool | 53 | 53 | 0 | BUILD (pure tool, 40.5k vol KD 9) |
| Wedding planning app | 3 | 3 | 0 | SKIP as SEO — The Knot/Zola dominate (KD 46-49) |
| **Adult sports leagues (soccer, basketball, softball, volleyball, flag football)** | **150+** | **150+** | **30+** | **BUILD — biggest SEO gap in dataset, 40k+ searches/month, KD 0-11** |
| Adult sports camps / academy | unknown | unknown | unknown | BUILD (premium upsell on top of leagues platform) |
| Pickup sports finder | 10 | 10 | 0 | BUILD (entry point, leads to leagues) |
| Adult playground / movement gym | unknown | ~5 | 0 | SKIP SEO — niche, capital-intensive |
| Wellness retreat | unknown | 0 | 0 | SKIP — CI 49, too competitive |
