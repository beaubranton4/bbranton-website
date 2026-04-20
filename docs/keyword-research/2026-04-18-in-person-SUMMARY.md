# Keyword Research Audit — In-Person Business Opportunities (April 2026)
**Date:** 2026-04-18  
**Source:** Apple Notes ideas + broad sweeps + 6 drill-downs  
**API calls:** ~8 (2 broad sweeps + 6 drill-downs, files 45–50)  
**Spend this session:** ~$0.12  

---

## TL;DR

One massive structural opportunity hiding in plain sight. The biggest SEO gap in this entire research project.

**The discovery:** Adult recreational sports leagues have 4,400–5,400 monthly searches PER SPORT — and almost zero organic competition. "Adult basketball league near me" at 5,400 vol has KD 0. "Adult soccer league near me" at 5,400 vol has KD 0. "Adult volleyball league near me" at 4,400 vol has KD 5. Softball, flag football, pickup basketball, pickup soccer — all KD 0-10. The aggregate search demand across sports and cities is enormous, and nobody has built the authoritative SEO platform for it.

**Why it matters beyond SEO:** This is the "Recess" idea from the notes (p2144, p2154). The platform IS the business — you're not just building SEO pages, you're building the directory of leagues AND potentially running your own leagues. The person searching "adult basketball league near me" is your customer.

**The other in-person ideas (adult playground, movement gym, parkour gym, wellness retreat, sports camps) are all either CI 40+, niche, or require heavy capital.** None of them approach the scale or accessibility of the adult sports league opportunity.

---

## RANKED OPPORTUNITIES

---

### #1 — Adult Recreational Sports League Platform (SEO + ACTUAL BUSINESS)

**Total cluster volume:** 30,000+ searches/month across all sports and cities  
**Key organic KD:** 0–11 across every major sport  
**Source files:** 45–50  

**The headline numbers:**

```
     vol   kd     cpc  keyword
  -----------------------------------
   5,400    0   $2.19  adult soccer league near me          ← KD 0
   5,400    0   $3.70  adult basketball league near me      ← KD 0
   5,400    6   $1.71  adult softball league near me        ← KD 6
   4,400    5   $2.81  adult volleyball league near me      ← KD 5
   2,900   10   $4.44  adult soccer league                  ← KD 10
   1,900    0   $1.64  adult softball league                ← KD 0
   1,900    0   $3.37  adult basketball league              ← KD 0
   1,300    9   $2.25  adult volleyball league              ← KD 9
   1,300    0   $0.00  pickup soccer near me                ← KD 0
   1,000    0   $2.86  adult flag football league near me   ← KD 0
     880    0   $4.53  pickup basketball near me            ← KD 0
     590    0   $0.00  pickup soccer games near me          ← KD 0
```

**Why it's uncontested:** The major players — YMCA, parks & rec, Volo Sports, local leagues — don't have SEO-optimized web presence. Volo Sports (12,100 vol CI 21) is purely navigational: people who already know Volo. Nobody has built the authoritative multi-sport, multi-city aggregator that ranks for "adult [sport] league near me."

**What the notes say:** Beau's notes are filled with this idea:
- *p2144/p2154 ("Recess"):* "Just a group of people that get together and play different sports a few times a week." "Like Meetup but specifically for sports."
- *p853:* "$100 a month and you get to play whatever sports we host. Sport everyday from 6-10pm."
- *p1460:* Scale by headcount — 4 people=trivia, 10=indoor soccer, 50=sloshball
- *p1691:* "I want to play sports with people. Can I make a living from that?"
- *p1885:* "Adult academy camp — revolving around fun, sports, in-person connection."

**The SEO architecture (programmatic):**

```
/adult-basketball-league/          → "adult basketball league near me" (KD 0, 5,400 vol)
/adult-basketball-league/[city]    → "adult basketball league san diego" (KD 0, 170 vol)
/adult-soccer-league/              → "adult soccer league near me" (KD 0, 5,400 vol)
/adult-soccer-league/[city]        → "adult soccer league pasadena" (KD 0, 590 vol)
/adult-softball-league/            → "adult softball league near me" (KD 6, 5,400 vol)
/adult-softball-league/[city]      → "adult softball league san diego" (KD 0, 70 vol)
/adult-volleyball-league/          → "adult volleyball league near me" (KD 5, 4,400 vol)
/adult-flag-football-league/       → "adult flag football league near me" (KD 0, 1,000 vol)
/pickup-soccer/                    → "pickup soccer near me" (KD 0, 1,300 vol)
/pickup-basketball/                → "pickup basketball near me" (KD 0, 880 vol)
```

City pages alone: 50+ cities × 6 sports = 300+ programmatic pages, each targeting a KD 0-6 keyword with 70-590 monthly searches. Aggregate: 20,000+ monthly visits at scale.

**Business model (two layers):**

*Layer 1 — Directory (immediate revenue):*
- List leagues from YMCA, parks & rec, Volo, local organizers
- Charge featured placement: $99-199/month per listing
- Free listings to build inventory fast, then charge

*Layer 2 — Run your own leagues (the real business):*
- Where demand is highest and supply is weakest, run the league yourself
- $50-120/player/session or season
- Start with one city, one sport (pick soccer or basketball in SF — highest concentration)
- 20 players/game × $10/game = $200/night. 3 nights/week = $2,400/month
- Scale by sport and city as the SEO pages drive inbound

*Layer 3 — SaaS for league organizers:*
- Scheduling, team formation, standings, payment collection
- $49-99/month for the organizers of other leagues listed on the platform

**Revenue ceiling:** This is a $1M+ business. Volo Sports raised $10M+ and operates in 10 cities. The SEO moat + software layer + owned leagues is the differentiated version.

**Why now:** The SEO gap is open today. Nobody owns these SERPs. Build 10 pages, rank within 60-90 days on KD 0 terms, get the first movers' advantage before Volo or a well-funded competitor figures this out.

---

### #2 — Pickup Games Finder (Lowest Effort Entry Point)

**Cluster:** pickup_sports  
**Volume:** 3,600 total across soccer + basketball  
**KD:** 0-5 across all keywords  
**Source file:** 50-pickup-sports.csv  

```
     vol   kd  keyword
  ----------------------------
   1,300    0  pickup soccer near me
     880    0  pickup basketball near me
     590    0  pickup soccer games near me
     590   17  soccer pickup games near me
     170    0  pickup basketball games near me
     170    1  basketball pickup games near me
```

**The simplest version of the "Recess" idea:** Build a site/app that shows where pickup games are happening. Start organic-only — let people post their own games. Think Meetup.com functionality but laser-focused on pickup sports.

**How this differs from #1:** No league structure, no seasons, no registration. Just "where's a pickup game right now." Lower friction for the user, lower commitment to run. The monetization is ads, premium posting, or eventual upgrade path to "start a league."

**Why it works as an entry point:** You can build a basic pickup game finder in a weekend. The SEO pages rank in 30-60 days. Then you watch which cities have the highest pickup demand and run your first organized league there.

---

### #3 — Adult Sports Camp / Academy (Premium Experience)

**Cluster:** not yet drilled (sweep B signal only)  
**Volume:** Unknown specific KD — sweep B showed adult sports concepts getting CI 15-25  

**The idea (from notes):**
- *p1885:* "Create academy camp for adults — revolving around fun, sports, in-person connection. Volo sports aren't all that fun."
- *p367:* "Create a gym where your workout is an experience, a journey. Make it the Disneyland of lifting."
- *p1981:* "Reimagine the gym — a place to engage in active movement freely through sport and through play."

**What sweep B showed:**
- Adult playground near me: 1,600 vol, CI 15 (KD unknown but likely accessible)
- Parkour gym near me: 1,900 vol, CI 20
- Movement gym near me: 1,300 vol, CI 41 (more competitive)
- Wellness retreat near me: 5,400 vol, CI 49 (competitive)

**The verdict:** The sports camp/academy idea is the premium version of the league play. Rather than a season-long league, it's a weekend or week-long adult sports camp. Think Camp Gladiator, but more fun and social, less boot-camp. The SEO play for camps is weaker (fewer people search "adult sports camp near me") — this is more of a social, word-of-mouth, and Instagram play. High revenue per customer ($200-800/weekend), but smaller market.

**How it fits:** Build the league platform first (#1). The camps/academies are a premium upsell for the most engaged community members. "You've been playing in our Tuesday night basketball league — come to the weekend skills clinic."

---

## Kill List (In-Person Ideas)

| Idea | Signal | Why skip |
|---|---|---|
| Adult playground / jungle gym | 1,600 vol, CI 15 | Niche. Mostly parents. No clear monetization path beyond the playground itself. |
| Parkour gym | 1,900 vol, CI 20 | Requires specialized equipment and space. Very specific audience. |
| Movement gym / functional fitness | 1,300 vol, CI 41 | Competing with CrossFit, Orange Theory, F45. Brand-dominated. |
| Wellness retreat | 5,400 vol, CI 49 | High competition. Requires property. Capital-intensive. Not an SEO play. |
| Sports meetup (generic) | 30 vol | Nobody searches "sports meetup" — they search for the specific sport. |
| Short game driving range (p1073) | Unclear SEO signal | Requires physical real estate. Heavy capital. Better as a feature inside DugoutEdge. |

---

## Cost Summary

| File | What | Seeds | Keywords | Approx cost |
|---|---|---|---|---|
| sweep-a (prior session) | Social leagues, pickup, sports | ~35 seeds | ~35 | ~$0.050 |
| sweep-b (prior session) | Camps, retreats, gyms | ~25 seeds | ~25 | ~$0.040 |
| 45-adult-softball.csv | Adult softball cluster | 1 seed | 16 | ~$0.015 |
| 46-adult-soccer.csv | Adult soccer cluster | 1 seed | 40 | ~$0.015 |
| 47-adult-basketball.csv | Adult basketball cluster | 1 seed | 40 | ~$0.015 |
| 48-adult-volleyball.csv | Adult volleyball cluster | 1 seed | 17 | ~$0.015 |
| 49-adult-flag-football.csv | Adult flag football cluster | 1 seed | 6 | ~$0.008 |
| 50-pickup-sports.csv | Pickup sports cluster | 2 seeds | 10 | ~$0.010 |
| **Total** | | | | **~$0.168** |

---

## The Verdict

The data is unambiguous: **adult recreational sports leagues are the most underserved high-volume SEO opportunity in this entire research project.**

Combined "near me" volume across 5 sports: ~21,200/month. Combined "league" volume (non-geo): ~16,800/month. Pickup sports: ~3,600/month. Total addressable search traffic: **40,000+ monthly searches, all at KD 0-11.**

For context: the co-op games site (#1 from the new ideas batch) had ~5,000 searches/month at KD 0. This cluster is 8x that size.

This is also the only idea in the entire research project where Beau's personal passion (playing sports, connecting people through physical play) aligns directly with a massive, uncontested SEO opportunity, an in-person business, and a SaaS platform — all in one.

**Build this.**
