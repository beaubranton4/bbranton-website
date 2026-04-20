# Website Concepts — Ranked by Opportunity
**Date:** 2026-04-17  
**Source:** Combined research from 21 DataForSEO API calls, pinned ideas note p1871, journal entry 2026-04-13  
**Total research spend:** ~$0.63  

---

## The Frame

Your note gets it right: "There are so many questions answered best by intuitive software as opposed to a Google search, or even an LLM. These are the websites that are going to win. Specialized, not generalized."

That's the thesis. The data confirms it over and over: huge search volumes at KD 0 because nobody has built the right specialized tool or directory for the job. The opportunity isn't to out-SEO Hallmark or out-compete Calm. It's to be the only good answer to a specific question that millions of people are already asking.

Every site below was chosen because the search data showed the same pattern: volume is real, KD is low, and the right answer doesn't exist yet.

---

## THE SITES — RANKED

---

### #1 — Sports Facility Finder (fieldfinder / pitchfinder / sportspot)

**What it is:** A Booksy specifically for sports facilities — batting cages, baseball fields, tennis courts, golf simulators, indoor sports centers. One page per facility type per city. Users find nearby facilities, see hours/prices/availability, and book. Facility owners pay for featured listings and take bookings through the platform.

**The search data:**
```
         vol   kd     cpc  intent          keyword
  -------------------------------------------------
     201,000    0   $0.60  transactional   cage batting near me
      18,100    0   $0.72  transactional   indoor batting cage near me
      18,100    0   $0.58  transactional   batting cage near me
       9,900   13   $0.43  commercial      run club near me
       6,600    0   $2.57  commercial      summer camp for adult
       3,600    0   $1.62  informational   adult baseball league near me
       3,600    1   $0.87  commercial      run club in nyc
```

**Why this is #1:**  
201,000 people search for a batting cage every month. KD 0. That's not a niche — it's a major category with no authoritative site. Stack the run club, adult baseball, tennis, golf sim, and summer camp searches and you're looking at 500k+ monthly searches with KDs under 15. This is a city-page SEO engine — every new sport or city you add multiplies your indexed pages and organic traffic.

You personally need this product. You need a batting cage. You want a team. You will dog-food this in SF from day one, which means you'll know when it works and when it doesn't.

**Revenue model:**
- Free: Facilities listed automatically from Google Maps / Yelp data
- Featured listings: $49-99/month for priority placement + booking integration
- Booking commission: 5-10% on sessions booked through the platform
- Affiliate: equipment brand partnerships (bats, gloves, pitching machines)
- Later: events, leagues, clinics listed on the platform

**SEO architecture:**
```
/batting-cages/san-francisco-ca     → "batting cage near me SF"
/batting-cages/austin-tx            → "batting cage near me Austin"
/baseball/adult-leagues/[city]      → "adult baseball league near me"
/run-clubs/[city]                   → "run club in [city]"
/golf-simulators/[city]             → "golf simulator near me"
/adult-summer-camp/[city]           → "adult summer camp california" (KD 0)
```

Launch with 50 cities × 5 sports = 250 pages on day 1.

**Physical world connection:** This is a real-world coordination tool. Not pure SaaS. Exactly what your note describes.

**Existing spec:** `docs/superpowers/specs/2026-04-16-adult-baseball-platform-design.md`

**Domain ideas:** Fieldfinder.com, Pitchfinder.io, SportSpot.com, PlayNext.com, Groundwork.io

---

### #2 — Northern Lights + Rare Event Travel (auroratrips / eclipseroutes)

**What it is:** The authority site for bucket-list nature events you have to travel to see — aurora borealis, solar eclipses, meteor showers, volcanic eruptions, rare wildlife migrations. One page per destination × event type. Affiliate links to tours on Viator and GetYourGuide. No inventory, no customer service. Pure content + affiliate.

**The search data:**
```
         vol   kd     cpc  intent          keyword
  -------------------------------------------------
     165,000   22   $6.57  ?               aurora borealis tour
      40,500    8   $4.71  ?               aurora borealis tour alaska
      40,500    3   $4.71  ?               aurora borealis alaska tour
      33,100    2   $8.04  ?               aurora borealis tour fairbanks
      33,100 null   $8.04  ?               aurora borealis fairbanks tour
       8,100   13  $13.81  ?               aurora borealis tour tromso
       6,600   18   $8.95  ?               aurora borealis tour iceland
       5,400    0   $8.73  ?               aurora borealis norway tour
       2,400    0   $4.94  ?               greenland aurora borealis tour
       1,900    0   $8.69  ?               reykjavik aurora borealis tour
         390    0   $6.93  ?               aurora borealis tour rovaniemi
         320    0  $10.22  ?               best aurora borealis tour
```

**Why this is #2:**  
This is the biggest surprise from the research. 40,500 monthly searches for "aurora borealis tour alaska" at KD 3. KD 3. Another 33,100 at KD 2 for the Fairbanks version. "Aurora borealis norway tour" at 5,400 vol KD 0. "Greenland aurora borealis tour" at 2,400 vol KD 0.

Tours average $150-500 per person. Viator and GetYourGuide pay 5-8% affiliate commissions. At conversion rates typical for travel affiliate sites (1-2%), a site ranking for these terms could generate $50-150 per 1,000 visitors just from aurora tours — before adding solar eclipse, meteor shower, and other event pages.

The city-page strategy is identical to the sports platform: one page per destination, per event, per season. Fairbanks aurora in winter. Norway aurora in fall. Eclipse routes for 2026 and 2028. The site grows without you — each event adds new pages, new searches, new affiliate opportunities.

**Revenue model:**
- Viator/GetYourGuide affiliate: 5-8% per booking (tours avg $200-500 per person)
- Booking.com affiliate: hotel commissions at each destination
- Gear affiliate: Aurora cameras, sleeping bags, cold-weather gear (Amazon)
- Sponsored destination content from tourism boards (Iceland, Norway, Alaska all have tourism budgets)

**SEO architecture:**
```
/aurora/alaska/fairbanks            → "aurora borealis fairbanks tour" (KD 2)
/aurora/alaska/anchorage            → "aurora borealis alaska tour" (KD 3-8)
/aurora/norway/tromso               → "aurora borealis tour tromso" (KD 13)
/aurora/iceland                     → "aurora borealis tour iceland" (KD 17)
/aurora/norway                      → "aurora borealis norway tour" (KD 0)
/aurora/greenland                   → "greenland aurora borealis tour" (KD 0)
/eclipse/2026                       → "solar eclipse 2026 tour"
```

**Why it fits your portfolio:**  
Your criteria: $1M profit potential, high margin, set and forget, systems-driven. This is all of that. Travel affiliate is one of the highest-earning content businesses that doesn't require a product, inventory, or ongoing customer service. You build the pages, integrate the affiliate APIs, and collect commissions. Seasonality is a feature — aurora season drives massive search spikes you can plan content around.

**Your note:** "Rare Event Based Tourism (Timely Tourism)" — you already identified this. The data now backs it.

---

### #3 — Emergency Home Services Lead Gen (repairnow / urgentrepair / onsite)

**What it is:** A platform that connects homeowners with emergency restoration/repair contractors. User enters ZIP code + damage type (water, fire, smoke, mold, burst pipe). Platform returns 3-5 local contractors with quotes. Contractors pay per qualified lead or for monthly featured listings.

**The search data:**
```
         vol   kd     cpc  intent          keyword
  -------------------------------------------------
     301,000   35   $45.83  ?              water damage restoration near me
      90,500    1   $64.82  ?              emergency plumber near me (CI 1!)
      74,000   47   $32.94  ?              mold remediation near me
       1,600   16   $44.32  ?              emergency water damage restoration near me
       1,300    7   $33.83  ?              smoke damage restoration (KD 7, $34 CPC)
       1,300   22   $35.35  ?              repipe near me
         880   22   $27.96  ?              slab leak repair near me
         480   11    $0.00  ?              commercial water damage restoration near me
         140   12   $47.42  ?              best water damage restoration company near me
```

**Why this is #3:**  
The economics are extraordinary. A contractor pays $50-200 per qualified lead because a water damage job is $3,000-30,000. Even at 1% conversion, $45/CPC × 10 organic clicks per lead = $450 in CPC value you're providing for free through organic SEO. "Emergency plumber near me" has 90,500 monthly searches with a CI of 1 (virtually no Google Ads competition) and $64.82 CPC.

Your note already had the insight: "on-call repairs: get app notification and a price" and "financing for emergency services: get a quote and apply for financing using AI to vet creditworthiness." That's the product. Add AI to triage the damage type, estimate the job size, and match with the right contractor tier.

**The challenge:** This is a marketplace. Seeding both sides (homeowners + contractors) is the hard part. SEO gets the homeowners. The contractor side requires outreach or a partnership with a contractor management platform (ServiceTitan, Jobber). This is why it's #3 not #1 — higher ceiling, harder to execute.

**Revenue model:**
- Lead fee: $25-75 per qualified lead delivered to contractor
- Subscription: $149-299/month for unlimited leads in a territory
- Financing affiliate: if you help homeowners finance emergency repairs, lender pays referral
- Insurance affiliate: post-repair, homeowners often need to file claims — affiliate to insurance comparison

**KD reality check:** The head terms (water damage near me) are KD 32-41 — Servpro, ServiceMaster dominate. The path in is the long-tail: "emergency water damage restoration near me" (KD 16), "commercial water damage restoration near me" (KD 11), "smoke damage restoration" (KD 7). Start there, build domain authority, move up.

---

### #4 — Lymphatic Massage Finder (lymphaticmassagefinder.com — you have this domain)

**What it is:** A directory of lymphatic drainage massage therapists, like a specialized Healthgrades. City pages listing certified therapists, with profile pages, photos, reviews, and appointment booking. 

**The search data:**
```
       vol   ci     cpc  keyword
  ---------------------------------
   368,000   93   $1.75  lymphatic drainage massage
    33,100   98   $1.75  lymphatic massage near me
    33,100   98   $1.75  lymphatic drainage near me
     1,000   44   $1.99  manual lymphatic drainage near me
       720   73   $1.76  lymphedema massage near me
```

**Why this is #4:**  
368,000 monthly searches for lymphatic drainage massage. 33,000 per month looking for "near me." The CI numbers are high (93-98) for Google Ads — meaning massage spas and therapists are bidding heavily for these clicks. That's the signal: real commercial intent, paying customers. A directory that organically ranks for city-level searches ("lymphatic massage near me San Francisco") captures this traffic without paying per click.

The wellness angle is also tailored to the moment: lymphatic massage has exploded in popularity as a recovery technique (post-liposuction, general detox), driven by celebrity and influencer promotion. Google Trends shows 3-4x search growth since 2020.

**You already own the domain.** This is waiting to be built.

**Revenue model:**
- Therapist listings: Free basic, $49/month featured with appointment booking
- Appointment booking commission: 5-10% of session fee (sessions average $80-150)
- Affiliate: Massage tools, lymphatic massage devices, compression garments

**Build complexity:** Low. Scrape existing therapist data from Yelp, Google Maps, Psychology Today. Enrich with certification data. Wrap in city pages. Monetize with listings + booking after you have traffic.

---

### #5 — Quit Zyn / Nicotine Pouch Guide (quitzynguide.com / donewithdip.com)

**What it is:** The authority site on quitting nicotine pouches — Zyn, On!, Rogue, etc. Detailed quit guide, withdrawal timeline, product recommendations for nicotine replacement therapy (patches, gum, lozenges), community support. Affiliate revenue from NRT products.

**The search data:**
```
     vol   kd     cpc  keyword
  --------------------------------
   1,600    0   $3.57  how to quit zyn
     260   13   $4.79  how to quit zyn cold turkey
     140    1   $0.00  how to quit zyn reddit
     110    4   $2.21  how long does it take to quit zyn
     110    0   $5.59  how to quit zyn pouches
      90    4   $2.73  how to use zyn to quit smoking
      70    0   $1.37  how hard is it to quit zyn
      70    0   $0.00  how long to quit zyn
```

**Why this is #5:**  
Every keyword is KD 0 or near-zero. The cluster is currently thin (9 keywords) — but that's because Zyn is still relatively new and the search volume hasn't fully developed yet. Zyn usage doubled in 2023-2024, was the subject of Senate hearings, and is being used by millions of people who now want to quit. The search volume will grow substantially over the next 2-3 years as more users try to stop.

First-mover advantage: if you build the authority site now at KD 0, you'll own the space before the KD rises. The anti-tobacco market has enormous affiliate potential — NRT products (Nicorette, generic patches, gums) are available on Amazon, CVS affiliate programs, and direct brand partnerships.

**The timing play:** This is a bet on trend continuation. Zyn + nicotine pouches are the new dip. The quit market always follows the use market by 2-3 years. The quit smoking market generates billions in NRT product sales annually. Pouches will be no different.

**Revenue model:**
- Amazon affiliate: Nicorette, patches, gum ($20-60 products, 3-8% commission)
- CVS/Walgreens affiliate programs
- Digital product: quit plan guide ($9-29 one-time purchase)
- AdSense: high CPC health/quit keywords

**Build this in a weekend.** The content writes itself. A 12-week quit plan, withdrawal symptoms page, product comparisons. Then it ranks and grows passively as the trend grows.

---

### #6 — Morning Routine Authority Site (Personal Brand Anchor)

**What it is:** Content site + personal brand around Beau's actual morning routine. Articles, training protocols, gear reviews, and eventually a course or community. The foundation for building the "Beau Branton" brand without being dependent on social media.

**The search data:**
```
     vol   kd     cpc  keyword
  --------------------------------
  18,100   27   $0.92  morning routine
   4,400    9   $0.00  morning routine guy
   2,400    0   $0.00  morning routine guys        ← KD 0
   1,600    0   $3.29  morning training routine    ← KD 0, $3.29 CPC
   3,600   10   $1.99  morning stretches routine
   3,600   13   $1.99  morning stretching routine
   6,600   15   $0.06  morning routine of successful
```

**Why #6:**  
You write about your morning routine constantly in your journal. This is native content, not manufactured. "Morning routine guys" (2,400 vol, KD 0) and "morning training routine" (1,600 vol, KD 0) are yours to own immediately. The $3.29 CPC on "morning training routine" signals sponsored content interest from fitness brands.

This isn't a standalone business — it's the personal brand layer that makes everything else more valuable. When you launch the sports platform, you have an audience. When you launch the hat brand, you have buyers. When you write about posture, people trust you. Start this now, keep it simple, let it compound.

---

### #7 — Second Brain / AI Personal Knowledge Manager

**What it is:** An AI-native tool that actually works like a second brain — connects your notes, surfaces insights, reminds you of what you've learned, writes in your voice, helps you think. Not Notion. Not Obsidian. Something that understands what you wrote 3 years ago and connects it to what you're thinking about today.

**The search data:**
```
     vol   kd      cpc  keyword
  ----------------------------------
   2,400   34    $5.46  second brain
   1,300   16    $0.53  building a second brain
     260    0    $7.47  second brain app         ← KD 0, $7.47 CPC
     260    0    $7.47  second brain apps        ← KD 0
     210    3    $8.62  second brain ai          ← KD 3, $8.62 CPC
```

**Why #7:**  
KD 0 on "second brain app" with a $7.47 CPC. Advertisers pay $7-9 per click. Nobody organically ranks. You wrote about wanting this tool 12-15 times in your journal. You ARE the target user.

This is highest-ceiling and hardest-to-build. Not a weekend project. But you're building it for yourself regardless — the SEO opportunity is the side effect of solving your own problem. Build it, use it, market it to the growing PKM community.

**Revenue:** SaaS subscription, $12-29/month. At 5,000 paying users: $720k-$1.7M ARR.

---

### #8 — Amazon Price Tracker Extension (Save Me Money Bot)

**What it is:** A Chrome extension that overlays price history directly on Amazon product pages. Shows 90-day, 1-year charts inline. Add to watchlist. Set price drop alerts. Clean, modern alternative to CamelCamelCamel (which is 15 years old and shows its age).

**The search data:**
```
     vol   kd     cpc  keyword
  --------------------------------
  18,100   28   $3.63  price history on amazon
   2,400   13   $4.03  amazon price tracking history
   1,600    8   $4.19  how to see amazon price history  ← KD 8
     140    0   $3.39  amazon kindle paperwhite price history
```

**Why #8:**  
CamelCamelCamel has 15M+ users but its UX is 2009. "How to see amazon price history" (KD 8) tells you people don't even know the tool exists — they're searching for instructions. A clean extension that answers this inline (without making people navigate to a third-party site) is genuinely better.

You called this out explicitly in your note: "Save me money bot (start w amazon)."

**Revenue:** Freemium extension. Free: basic price history. Premium: $3-5/month for alerts, watchlists, multiple retailers. Amazon Associate links for affiliate on "buy now" CTAs.

**Build effort:** Medium. Chrome extension + backend for price history data. Keepa API provides historical data (paid but cheap). Front-end is the differentiator.

---

### #9 — Posture + Desk Health Affiliate Site (posturedaily.com)

**What it is:** The go-to review and comparison site for posture correctors, standing desks, ergonomic gear, and desk worker exercises. Amazon affiliate + direct product partnerships.

**The search data:**
```
     vol   kd      cpc  keyword
  ----------------------------------
  60,500   29    $3.19  posture corrector
  18,100   32    $3.35  posture corrector for men
  14,800   34    $4.10  best posture corrector
   9,900   26    $3.94  posture brace
   6,600   21    $2.04  posture corrector for back
```

**Why #9:**  
166 easy-win keywords in the cluster (KD < 20), 156k aggregate monthly searches. KDs 21-36 are not zero but they're accessible with solid content and some backlinks. The affiliate economics are straightforward: $30-80 products × 4-8% Amazon commission × high conversion on "best X" searches.

This is also a problem you feel physically — you wrote about the effects of sitting. Personal testing and reviews will be more credible than anonymous comparison sites.

**Revenue ceiling:** $100-300k/year passive. Not a $1M business on its own, but a reliable passive income stream built over 6-12 months.

---

### #10 — Funny Day Cards (funnydaycards.com — you have this domain)

**What it is:** A card brand that's actually funny. Meme-aware, culturally specific, adult-oriented humor. Digital downloads on Etsy + your own site. Print-on-demand for physical cards.

**The search data:**
```
     vol   ci     cpc  keyword
  --------------------------------
  18,100  100   $0.62  funny birthday cards    ← CI 100 (Hallmark, Etsy)
   8,100   86   $0.36  funny christmas cards
   3,600  100   $0.46  funny mothers day cards
```

**Reality check:** CI 100 on every funny card keyword. Hallmark, American Greetings, Etsy's 50M+ listings, and Someecards dominate organic search. SEO is not the path here.

**The TikTok path:** The right distribution for this brand is viral social, not Google. A single funny card going viral on TikTok can drive thousands of sales overnight. The brand doesn't need SEO — it needs 1-2 moments of genuine virality. That's unpredictable but possible if the cards are actually funny.

**Your note says:** "learn to validate demand by running ugc tiktoks for non-existent digital software product." Apply the same thinking here: make TikToks with the cards before you've even manufactured them. See if anything catches.

**Recommendation:** This is a TikTok play, not an SEO play. Build the brand for social, not Google. If a card hits, you'll know it immediately.

---

## PORTFOLIO STRATEGY — How to Sequence These

Given your 10-year horizon and your goal of a portfolio of digital real estate, here's how to layer these:

**Year 1 (Build the SEO foundation):**

Start 3 sites in parallel — one per month, small investment each:

1. **Aurora Tourism Affiliate** (Month 1) — Lowest effort, fastest to revenue. Build 20 destination pages with Viator affiliate links. KD 2-8 on 40k+ vol terms means you'll rank within 3-6 months with good content. This generates passive income that funds everything else.

2. **Quit Zyn Guide** (Month 2) — One weekend. A 12-page guide, affiliate links, done. First-mover while KD is still 0. Revisit quarterly as the trend grows.

3. **Morning Routine Content** (Month 3) — Start publishing your actual routine. This is the personal brand layer. Doesn't make money immediately but makes everything else work better over time.

**Year 1-2 (Build the platform):**

4. **Sports Facility Finder** — This is the main bet. City pages are the acquisition engine; the platform is the product. Build MVP over 3-4 months, launch in SF, use it yourself, expand to 10 cities.

5. **Lymphatic Massage Finder** — Low effort once the city-page infrastructure from the sports platform exists. Same architecture, different category. You already have the domain.

**Year 2-3 (Build the software):**

6. **Second Brain / AI PKM** — Build the tool you've been wanting for years. The SEO is waiting for you.

7. **Amazon Price Tracker Extension** — Chrome extension, weekend project once you have some engineering capacity.

**Ongoing (Affiliate + Content):**

8. **Posture Affiliate Site** — Start this whenever you want a 2-week project with predictable returns.

**Don't start yet:**
- Emergency home services — Right idea, wrong time. Needs a contractor network before SEO can convert. Revisit in year 2-3 when you have more operational bandwidth.
- Funny Day Cards — Validate with TikTok first. If something hits, build it. Don't build first.

---

## Summary Table

| Site | Domain | Best keyword | Vol | KD | Model | Revenue ceiling | Start when |
|---|---|---|---|---|---|---|---|
| Sports Facility Finder | TBD | cage batting near me | 201k | 0 | Listings + booking | $1M+ | Now |
| Aurora Tourism Affiliate | TBD | aurora borealis alaska tour | 40.5k | 3 | Affiliate (Viator) | $500k-$1M | Now |
| Emergency Home Services | TBD | water damage near me | 301k | 16-41 | Lead gen | $1M+ | Year 2 |
| Lymphatic Massage Finder | **have it** | lymphatic massage near me | 33k | TBD | Listings + booking | $300k | Year 1-2 |
| Quit Zyn Guide | TBD | how to quit zyn | 1.6k | 0 | Affiliate (NRT) | $50-150k | Now |
| Morning Routine | bbranton.com | morning routine guys | 2.4k | 0 | Brand + course | $200k+ | Now |
| Second Brain / PKM | TBD | second brain app | 260 | 0 | SaaS ($12-29/mo) | $1M+ | Year 2 |
| Amazon Price Tracker | TBD | price history amazon | 18.1k | 8-28 | Freemium extension | $200-500k | Year 1-2 |
| Posture Affiliate | TBD | posture corrector | 60.5k | 29 | Amazon affiliate | $100-300k | Anytime |
| Funny Day Cards | **have it** | funny birthday cards | 18.1k | 100 CI | TikTok viral | Unpredictable | Validate first |

---

## What the Data Keeps Saying

Every cluster that returned KD 0 on high-volume searches had the same thing in common: the searcher has a specific, practical need that's best served by a specialized tool or directory — not an article, not a chatbot, not Amazon. A batting cage finder. A lymphatic massage directory. An aurora tour comparison. A nicotine pouch quit guide. Specialized tools beat generalist answers every time in the long run.

That's your moat.

---

## AI / DATA / B2B ADDITIONS (2026-04-17)

Full analysis: `2026-04-17-ai-b2b-SUMMARY.md`

---

### #11 — MCP Server Directory (mcpservers.dev / mcpdirectory.io)

**What it is:** The npmjs.com of the MCP (Model Context Protocol) ecosystem. A directory that lists, documents, and categorizes every publicly available MCP server — Supabase, GitHub, Slack, Postgres, Snowflake, Figma, Playwright, and every new one that ships. Developers using Claude Code, Cursor, and other AI coding tools need to discover and configure these servers. No authoritative resource exists.

**The search data:**
```
     vol   kd      cpc  keyword
  ------------------------------------
  60,500   55    $7.32  mcp server             (head term, too competitive)
   5,400   17    $3.21  what is an mcp server  ← KD 17
   2,400    9   $16.48  playwright mcp server  ← KD 9
   1,600    9    $3.42  slack mcp server       ← KD 9
   1,000    0   $13.30  cursor mcp server      ← KD 0
   1,000   13    $9.28  postgres mcp server    ← KD 13
   1,000   17   $47.08  supabase mcp server    ← KD 17, $47 CPC
   1,000   16   $19.52  snowflake mcp server   ← KD 16
   1,000   16   $25.52  claude code mcp server ← KD 16
   1,000   16    $5.62  best mcp server        ← KD 16
```

**Total cluster:** 481 keywords. 96 easy wins (KD<20, vol>200). 78 commercial gems.

**Why this is time-sensitive:** MCP was released ~6 months ago. The ecosystem is forming fast — every major dev tool is shipping MCP servers, more developers are discovering them weekly, and the search volume is growing. The KDs are low now because the content hasn't been created yet. Build the directory in the next 60-90 days before content creators catch on.

**This is "building for agents" literally.** MCP servers are the interfaces that AI agents use to access tools and data. Every enterprise that ships an MCP server wants their server discovered by the thousands of Claude and Cursor users who are actively searching for integrations.

**SEO architecture:**
```
/mcp-servers/supabase       → "supabase mcp server" (KD 17)
/mcp-servers/github         → "github mcp server" (KD 32 — add early)
/mcp-servers/slack          → "slack mcp server" (KD 9)
/mcp-servers/postgres       → "postgres mcp server" (KD 13)
/mcp-servers/snowflake      → "snowflake mcp server" (KD 16)
/mcp-servers/playwright     → "playwright mcp server" (KD 9)
/mcp-servers/cursor         → "cursor mcp server" (KD 0)
/guides/what-is-mcp-server  → "what is an mcp server" (KD 17, 5,400 vol)
/guides/best-mcp-servers    → "best mcp server" (KD 16, 1,000 vol)
```

Launch with 30-40 server pages + 5-10 guide pages = 40-50 indexed pages on day 1.

**Revenue model:**
- Featured listings: Enterprise companies (Supabase, Snowflake, Atlassian) pay $99-999/month for sponsored placement to reach Claude/Cursor developers
- MCP server building service: $2-10k per custom MCP server built for a company
- Premium developer accounts: Advanced search, private server registry, team management
- Affiliate: Claude Pro, Cursor Pro, AI tool referral commissions

**Why it fits your portfolio:**  
- Builds directly on your Claude Code / vibe coding knowledge (you use this tooling daily)
- Developer audience = B2B buyers at the companies who will pay for featured listings
- Technical moat: requires understanding the MCP ecosystem to curate well
- City-page equivalent for developers: one page per tool integration, grows with the ecosystem
- This is your data API / "building for agents" bet without needing to build the agent itself

**Personal connection:** You're already building with Claude Code and using MCP servers. You feel this gap personally — "mcp server" in the search bar and getting fragmented GitHub READMEs instead of a clean directory.

**Domain ideas:** mcpservers.dev, mcpdirectory.io, mcphub.io, servermcp.com

---

### #12 — Vibe Coding Resource Hub (vibecoding.dev / buildwithclaude.com)

**What it is:** The structured learning resource for vibe coders — people using Claude Code, Cursor, and similar AI coding tools to build software without being traditional engineers. Tutorials, workflow guides, prompt libraries, tool comparisons. The "Rails Tutorial" equivalent for AI-assisted development.

**The search data:**
```
     vol   ci      cpc  keyword
  -----------------------------------
   4,400    3   $24.60  autonomous ai agent  ← CI 3!
   2,900    0   $18.02  ai pair programmer   ← CI 0!
   1,900   19   $16.15  claude code tutorial
   1,300    2   $61.11  no code automation platform ← CI 2
     720   19   $19.88  ai tools for developers
     720   21    $5.85  how to use cursor ai
```

**The opportunity:** "Autonomous ai agent" has 4,400 monthly searches and CI 3. "Ai pair programmer" has 2,900 searches and CI 0. "Claude code tutorial" has 1,900 searches and CI 19 with $16 CPC. The people learning to build with AI agents are searching, not finding great structured resources, and advertisers are willing to pay to reach them.

**Natural adjacency to #11:** The MCP directory and the vibe coding hub serve the same audience and link to each other. Build both under the same brand or with cross-links.

**Revenue model:**
- Sponsorships from AI tool companies (Anthropic, Cursor, Windsurf all have developer marketing budgets)
- Course/cohort: "Ship Your First App with Claude Code" — $199-499
- Prompt library subscription: $9-19/month for premium prompt packs
- Affiliate: Claude Pro, Cursor Pro, AI coding tools

---

## NEW ADDITIONS (2026-04-18)

Full analysis: `2026-04-18-new-ideas-SUMMARY.md`

---

### #13 — Co-op Games for Couples (AFFILIATE CONTENT SITE)

**What it is:** A curated affiliate site covering co-op video games and board games for couples — organized by platform (Switch, PS5, Xbox, mobile, PC, board games). Reviews, ranked lists, and affiliate links to Amazon, Steam, and app stores.

**The search data:**
```
     vol   kd     cpc  keyword
  -----------------------------------
   1,000    0   $0.48  co op games for couples        ← KD 0
     480    0   $0.25  co op video games for couples  ← KD 0
     390    0  $10.42  co-op mobile games for couples ← KD 0, $10 CPC
     260    0   $0.43  co op board games for couples  ← KD 0
     210    0   $0.30  best co-op games for couples   ← KD 0
     210    0   $0.25  co op switch games for couples ← KD 0
     140    0   $0.25  co op ps5 games for couples    ← KD 0
     110    1   $0.00  co op steam games for couples  ← KD 1
```

**Why this is here:** 33 keywords, every single one at KD 0. Total cluster ~5,000 searches/month. The mobile variant has $10.42 CPC (someone is buying clicks). A single site with 8 platform-specific pages would rank for all of them within 30-60 days.

**Reality check on the idea:** The original idea was to *build* a cozy co-op video game for couples — that's a multi-year, million-dollar project. The SEO opportunity is to *recommend and review* co-op games for couples. Same audience, dramatically less effort.

**Revenue model:** Amazon affiliate (board game physical copies, controllers, gaming accessories), App Store/Google Play referral links, Steam affiliate, game subscription affiliate (Xbox Game Pass, PlayStation Plus, Apple Arcade). Display ads at maturity. Ceiling: $50-100k/year passive asset. Not a $1M site — a strong low-effort addition to the portfolio.

**SEO architecture:**
```
/best-co-op-games-for-couples           → 1,000 vol, KD 0
/co-op-mobile-games-for-couples         → 390 vol, KD 0, $10 CPC
/co-op-switch-games-for-couples         → 210 vol, KD 0
/co-op-ps5-games-for-couples            → 140 vol, KD 0
/co-op-xbox-games-for-couples           → 140 vol, KD 5
/co-op-board-games-for-couples          → 260 vol, KD 0
/co-op-steam-games-for-couples          → 110 vol, KD 1
```

8 pages. One weekend to write. Rank in 30-60 days. Passive affiliate income indefinitely.

---

## Updated Portfolio Summary Table

| Site | Domain | Best keyword | Vol | KD | Model | Ceiling | Start |
|---|---|---|---|---|---|---|---|
| Sports Facility Finder | TBD | cage batting near me | 201k | 0 | Listings + booking | $1M+ | Now |
| Aurora Tourism Affiliate | TBD | aurora borealis alaska tour | 40.5k | 3 | Viator affiliate | $500k-$1M | Now |
| MCP Server Directory | TBD | what is an mcp server | 5.4k | 17 | B2B listings + services | $1M+ | Now (time-sensitive) |
| Emergency Home Services | TBD | water damage near me | 301k | 16-41 | Lead gen | $1M+ | Year 2 |
| Lymphatic Massage Finder | **have it** | lymphatic massage near me | 33k | TBD | Directory | $300k | Year 1-2 |
| Quit Zyn Guide | TBD | how to quit zyn | 1.6k | 0 | NRT affiliate | $50-150k | Now |
| Morning Routine | bbranton.com | morning routine guys | 2.4k | 0 | Brand + course | $200k+ | Now |
| Vibe Coding Hub | TBD | claude code tutorial | 1.9k | CI 19 | Sponsor + course | $200-500k | Year 1 |
| Second Brain / PKM | TBD | second brain app | 260 | 0 | SaaS | $1M+ | Year 2 |
| Amazon Price Tracker | TBD | price history amazon | 18.1k | 8-28 | Freemium extension | $200-500k | Year 1-2 |
| Co-op Games for Couples | TBD | co op games for couples | 1k | 0 | Affiliate (Amazon/Steam) | $50-100k | Now (weekend) |
| Posture Affiliate | TBD | posture corrector | 60.5k | 29 | Amazon affiliate | $100-300k | Anytime |
| Funny Day Cards | **have it** | funny birthday cards | 18.1k | CI 100 | TikTok viral | Unpredictable | Validate first |
