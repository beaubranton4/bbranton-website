# Loneliness / Real-World Social Connection

> **Created 2026-05-23** — Beau flagged this in journal: "people just need to go out into the real world, experience things, meet people, talk to people, play with people, have fun." Acknowledged hard market; researching whether any wedge clears his filter.

## Verdict (2026-05-23)

**It depends — and the consumer-app version is bad, the back-office-SaaS-for-clubs version is good.**

The "build a friendship app" version of this thesis is a graveyard. Bumble BFF bought Geneva for $0 (or close to it), Geneva shut down with zero revenue, Hey Vina is silent, Meetup is being squeezed dry by Bending Spoons, and even the 2025 darlings (Clyx at $14M Series A, 222 at $4M seed, Timeleft at €18M ARR) are venture-shaped consumer plays that need to outrun retention curves where 87% of users are gone in seven days. Beau doesn't want to raise venture, doesn't want freeform-LLM chat, doesn't want the dating-app supply/demand trap, and doesn't have years to bend a network-effect curve. So **don't build a friendship app**.

But underneath the consumer surface is a real, picks-and-shovels opportunity that maps almost exactly to Beau's existing competency at Dugout Edge: **the IRL sport-club / run-club / surf-club / pickleball-club operator stack**. There are now >1M Strava clubs, Volo Sports just acquired ZogSports to consolidate 120k+ league players, run clubs are doing 1,000-person turnouts every Wednesday, and the people running these are mostly using a duct-taped mix of Meetup (now hostile pricing), Eventbrite, Venmo, Splitwise, WhatsApp, and Google Sheets. Dugout Edge is *already* this product for youth baseball. The thesis is: take the Dugout Edge engine and aim it at adult run/pickleball/surf clubs. Deterministic outputs (lineups, RSVPs, payment splits, schedules). Take-rate or per-club SaaS. LLM-unkillable. Real search demand. Beau's domain.

**Recommended pursuit:** **Run "Club OS" — back-office SaaS for the IRL club operator economy.** Lean Dugout Edge horizontally into adult sport clubs. Skip the consumer app. Skip the loneliness brand. Sell to the *organizer*, not the lonely person. Beau's edge is huge here because the youth baseball muscle already exists.

Secondary, lower-priority but interesting: **a "Timeleft for surfers in Oahu" play** — niche, hyperlocal, requires Beau on the ground (which he is). High personal-passion fit, lower scale ceiling.

## The pain — the data

The macro story is real and the numbers are big. Loneliness is one of the rare problems where the academic consensus, the political consensus, and the lived experience all line up.

| Stat | Source / Year | Notes |
|---|---|---|
| **~50% of US adults** report experiencing loneliness | Surgeon General Advisory, May 2023 | Pre-pandemic baseline was ~40%. Murthy declared a national epidemic. |
| **$406B/yr** estimated US economic cost of social isolation (absenteeism) | CDC, repeated across 2025–26 coverage | Other studies range $2B–$25B depending on methodology — the $406B is the popular figure. |
| **$6.7B/yr** excess Medicare spending tied to social isolation in older adults | NACo / HHS | Biggest concentrated payer pain. |
| **42% of men report loneliness** vs 37% of women (2025) | AARP / Managed Healthcare Executive | Gender shift since 2018 parity — **men are now the lonelier sex**. |
| **25% of US men aged 15-34** report feeling lonely "a lot" yesterday | Gallup 2025, "Younger Men in the U.S. Among the Loneliest in West" | vs. 17% of all other adults. Cross-OECD outlier. |
| **40% of US adults 45+** are lonely (2025) | AARP | Up from 35% in both 2010 and 2018. The 45–55 sub-band is the hottest. |
| **73% of Gen Z** report feeling lonely "at least sometimes" | Hopelab / Axios 2025 | Despite being the most digitally connected generation ever. |
| **34% of young people** say loneliness "disrupts daily life" | Hopelab 2025 (Axios) | "Disrupts daily life" is the strong end of the scale. |

**Where Beau personally lands in this:**
- US male in his 30s — sitting in the cohort that just flipped to being lonelier than women.
- Recent Hawaii transplant — explicitly the cohort multiple Hawaii-relocation therapy practices write about ("many new residents feel unexpectedly isolated...the distance from the mainland, the slower pace of life, and fewer built-in social networks").
- Tech / remote worker — explicitly the cohort flagged by Honolulu coworking + community sources as struggling to connect.
- Has a social life but lives a screen-heavy entrepreneur's day — the *exact* dissonance he wrote about on 2026-05-23.

Pain proximity: confirmed. He's not researching this from a magazine article. He's writing a journal entry about wanting to put down the laptop and surf.

## Why this is a hard market — call the failures by name

Anyone walking into "social connection" should first read the obituary list. The same patterns repeat.

### Failure mode 1: Cold-start network gravity

A friend app is useless on day one. You open it, see no one local, never come back. Bumble BFF, Hey Vina, Atleto, Patook, We3, Friended, Wink — every one of these hit the cold-start wall outside ~5 metros. The apps that "worked" (Timeleft, Lunge Run Club) are the ones that **manufactured the network on launch night** — Timeleft via a single Wednesday-7pm dinner constraint that concentrates supply, Lunge via a fixed weekly West Village run that creates a physical pin in the city. Open-graph friend matching does not survive density-of-supply <10/sq-mile.

### Failure mode 2: Gender-asymmetric adoption

Women adopt first. Men lag. The platform then becomes a de-facto dating app and the women leave. This killed Hey Vina (founded "for women, by women" → couldn't scale beyond the founding metro), threatens Bumble BFF in retention curves, and is the open complaint about NYC run clubs as of 2025 ("oversaturated dating market"). Even Lunge's founder pitches it as "a fitness dating app" — they leaned in to the dating frame because the platonic frame doesn't hold a 50/50 ratio.

### Failure mode 3: First-event churn cliff

App-industry benchmarks: ~28% Day-1 retention, ~18% Day-7, ~7% Day-30 across all consumer apps. Friend apps are worse because the "value moment" requires showing up IRL — most users never make it from match → first meet. Roughly 18% of registrants don't even complete onboarding. Of those who do, most ghost before the first event. The funnel from "downloaded an app to make friends" → "actually went to one event and made a friend" is single-digit percentages. Timeleft works partly because their funnel is *Stripe-paid before you ever match* — they harvest commitment before the cliff.

### Failure mode 4: Monetization

Users hate paying for social. Dating apps got away with it because the willingness-to-pay for a romantic partner is uniquely high. The willingness-to-pay for a casual friend is roughly $0. Timeleft solved this by charging for a restaurant reservation (€18/dinner + €15 monthly sub) — they're charging for a *thing*, not for friendship access. Most friendship apps that tried subscription models flatlined. The Appfigures number across "a dozen local-focused friendship apps" is **$16M total US consumer spend in 2025** — that's *all of them combined*. By comparison Strava alone does $500M+ ARR; Volo Sports does $10–50M.

### Failure mode 5: Trust + safety

You're inviting strangers to meet in person. One bad incident, the press cycle is brutal. Timeleft pre-screens with phone numbers + paid signup, which raises the bar. An open-graph "anyone meets anyone" app eats this risk daily and one police report away from a PR death spiral.

### Failure mode 6: Meetup's mistakes are instructive

Meetup was the canonical IRL-social platform — 50M+ users, decades of network effects. Bending Spoons bought it in Jan 2024 and **tripled organizer fees in 2025** (now ~€21/mo per organizer, with core features paywalled). The result: a steady exodus of organizers to Heylo, WhatsApp, Discord, Luma. **Meetup was a defensible business and it's actively destroying its own moat.** That tells you something about the unit economics of the consumer side — they had to squeeze.

### What this means for Beau

He should not build a consumer friendship app. The combination of cold-start, asymmetric adoption, retention cliff, low WTP, and trust/safety means the venture math only closes if you raise serious money and accept years of negative cash flow. Beau's filter explicitly rules that out. ARPU $5–30/mo SaaS is also ruled out, which is where the few survivors live (Bumble BFF, etc.). **The wedge has to be elsewhere in the value chain.**

## Landscape — who already plays here

### Friend-discovery apps (Beau should NOT build another one)

| App | Status | Model | Notes |
|---|---|---|---|
| **[Bumble BFF](https://apps.apple.com/us/app/bff-make-friends-by-bumble/id1478573199)** | Alive, revamped Sept 2025 | Freemium | Built on the Geneva infrastructure Bumble bought 2024. Geneva itself **shut down** (~$0 revenue). Refocusing on "friend groups" not 1:1. |
| **[Hey Vina](https://www.heyvina.com/)** | Effectively dormant | Freemium | No coverage since 2022. Women-only positioning didn't scale. Implied dead/zombie. |
| **[Atleto](https://www.atletosports.com/)** | Alive but sub-scale | Free | Sports-activity matching. Founded 2015. No acquisitions, no notable funding, low buzz. Stuck. |
| **[Patook](https://patook.com/)** | Alive, shrinking | Freemium | Strict anti-flirting policies. Smaller user base than competitors. Cult-niche product. |
| **[We3](https://we3app.com/)** | Alive | Freemium | Groups of three. Slow but persistent. |
| **[Friended](https://apps.apple.com/us/app/friending-meet-new-people/id1306402816)** | Alive | Freemium | "Friendship on-demand," text-based. |
| **[Wink](https://winkapp.co/)** | Alive | Freemium | Younger demo, swipe-based. |
| **Meet5** | Alive in Europe primarily | Freemium | Group events focused. Often grouped with Timeleft/BFF in coverage. |
| **[Friendster](https://www.friendster.com/)** | Relaunched April 2026 | Privacy-first | History repeating itself. Probably nostalgia-driven, sub-scale. |

**Total US 2025 consumer spend across these apps: ~$16M (Appfigures).** That's the whole pie. Don't fight for a slice of $16M.

### Activity / event meetup platforms

| Platform | Status | Notes |
|---|---|---|
| **[Meetup](https://www.meetup.com/)** | Alive, hostile-pricing era | Bending Spoons acquired Jan 2024. Tripled organizer fees in 2025. Organizers fleeing. |
| **[Timeleft](https://timeleft.com/)** | **Rocketship** | €18M ARR Aug 2025, on track for €25M, ~6,500 dinners/week in 200+ cities, 52 countries. Curated dinner with 5 strangers every Wednesday. AI matching. Best-in-class. |
| **[Luma](https://luma.com/)** | Alive, rapidly growing | ~2M event signups/month. 5x user growth 2023→2024. Tech + crypto + wellness skew. Free for organizers. The new Eventbrite for the cool kids. |
| **[Partiful](https://partiful.com/)** | Alive | Raised $20M Series A1 (a16z 2022), $140M valuation, $27.3M total. TIME100 2025. Replacing Evite/Paperless Post for Gen Z parties. |
| **[Posh](https://posh.vip/)** | Alive | Raised $5M seed 2023. Event-creator platform, smaller. |
| **[Eventbrite](https://www.eventbrite.com/)** | Alive but acquired by Bending Spoons | Same playbook risk as Meetup — expect price hikes. |
| **[Dice](https://dice.fm/)** | Alive | Music/nightlife focused. |
| **[222](https://222.place/)** | Alive, YC-backed | $2.5M seed + $1.45M pre-seed. AI-curated group meetups in NYC. "Social facilitator for in-person serendipity." |
| **[Clyx](https://clyx.com/)** | Alive, fresh funding | **$14M Series A Sept 2025**, led by Blitzscaling Ventures, w/ Venmo co-founder. Pulls events from Ticketmaster + TikTok, compatibility engine. 50k active users, 200k browsing. Miami + London + NYC. The current loneliness-app darling. |

### Run clubs / sport clubs / activity-based

| Platform | Status | Notes |
|---|---|---|
| **[Strava](https://www.strava.com/)** | Public 2026 (IPO confidential filing, $2.2B Series F valuation) | $500M ARR, 150M registered / 50M MAU. **>1M clubs**, run clubs grew 3.5x in 2025, hiking even faster. Club-organized events 1.5x. Acquired Runna (training) + the Breakaway (cycling) in 2025. |
| **[Volo Sports](https://www.volosports.com/)** | Alive, consolidating | $21M Bluestone PE 2024. **Acquired ZogSports June 2025.** 750k+ player registrations 2025 across 4,500 leagues. Revenue $10–50M. 250% growth since 2021. |
| **[Lunge Run Club](https://www.lungeapp.com/)** | Alive, viral 2024–25 | Started May 2024 NYC West Village. ~1,000 runners every Wednesday. Honestly a dating app with a run wrapper. |
| **[Pickleball Inc](https://ppatour.com/)** (PPA + MLP) | Alive, mega-funded | **$225M Apollo Sports Capital + Dundon raise May 2026 at $750M valuation.** $140M 2025 revenue. PickleballTournaments.com powers 90% market share of organized play. |
| **[PodPlay](https://podplay.app/)**, **[Playbypoint](https://www.playbypoint.com/)**, **[Anolla](https://anolla.com/)**, **[CourtReserve](https://courtreserve.com/)** | Alive | Pickleball/tennis facility software. $30–350/court/mo pricing. Vertical SaaS. |
| **[Pickleheads](https://www.pickleheads.com/)** | Alive | 16k+ location directory + matching. |
| **[PickleMatch](https://pickleballunion.com/pickleball-dating-app-picklematch-launch/)** | Just launched | Pickleball dating app. Niche-of-niche. |
| **[ClubPal](https://www.clubpal.app/)** | Alive, run-club-focused | No subscription, 2.5% transaction fee. Specifically for running clubs. |
| **[Heylo](https://www.heylo.com/)** | Alive, picking up Meetup refugees | The "affordable Meetup alternative." Event scheduling + group chat + payment collection, no per-member fees. |
| **[Join It](https://joinit.com/)**, **[Wild Apricot](https://www.wildapricot.com/)** | Alive | Generic membership management. Used by clubs of all kinds. |

### Community platforms (the "build your own tribe online" market)

| Platform | Status | Best for |
|---|---|---|
| **[Skool](https://www.skool.com/)** | Alive, hot — Hormozi-pumped | Course creators + paid communities. Gamification. |
| **[Circle](https://circle.so/)** | Alive | Pro/branded online communities. |
| **[Mighty Networks](https://www.mightynetworks.com/)** | Alive | Branded mobile apps + events. |
| **[Discord](https://discord.com/)** | Alive | Free, gamer-led, expanding. |
| **[Slack communities](https://slack.com/)** | Alive | Pro communities + insider niches. |
| **[Geneva](https://www.geneva.com/)** | **Shutting down 2025** | Bumble acquired, Geneva $0 revenue, migrating to BFF. |
| **[Heartbeat](https://heartbeat.chat/)** | Alive | Small. |
| **[BuddyBoss](https://www.buddyboss.com/)** | Alive | WordPress-based. |

### Third-place / social-wellness clubs (the IRL fixed-cost play)

This category is *interesting*. It's not a software business — it's a physical-space business. But the *operator software stack* for these is wide open and overlaps with the club-SaaS thesis.

| Club | City | Pricing | Notes |
|---|---|---|---|
| **[Othership](https://www.othership.us/)** | Toronto + NYC + LA expansion | $51/mo entry, $333/mo unlimited | Sauna + cold plunge. **$20.6M raised, ~$21.3M ARR.** Best-known of the category. |
| **[Remedy Place](https://remedyplace.com/)** | LA + NYC | $300–500/mo | $5M raised at $60M valuation (2022). |
| **[Bathhouse](https://bathhouse.nyc/)** | NYC | $40 day pass + memberships | **~$120M run-rate revenue 2025.** Mega-scale. |
| **[The Well](https://www.the-well.com/)** | NYC + Miami | $375/mo+ | Wellness club. |
| **[Continuum Club](https://continuumclub.com/)** | NYC West Village | **$2,100–$7,500/mo** (some figures cite $100k/yr) | Application-only. The Soho House of wellness. |
| **[Heimat](https://www.heimat.com/)** | LA | $500/mo+ | Hollywood-adjacent. |
| **MNT** | SF Marina | TBD | Pilates + coworking + sauna + babysitting. |
| **[Life Time](https://www.lifetime.life/) LT High Performance** | Multi-city | $550/mo | Adding coworking lounges to nearly 100 clubs. The legacy gym chain pivoting to third-space. |
| **Coffee & Chill** | Pop-ups (Venice, Austin, NYC, Miami) | Pay per event | Day parties, no alcohol, matcha + DJs. Gen Z third-place. |

### Co-living + nomad community

| Brand | Status | Notes |
|---|---|---|
| **[Outsite](https://www.outsite.co/)** | Alive, growing | 15+ US locations including Hawaii. €300M real-estate funding. $75–$475/night. Pre-built community. |
| **[Selina](https://www.selina.com/)** | **Effectively dissolved** | Crashed during 2023–24. Cautionary tale. |
| **[Roam](https://www.roam.co/)** | Alive | Premium global co-living. Bali popular. |
| **[Surfbreak HNL](https://www.surfbreakcoliving.com/hawaii)** | Alive | Honolulu penthouse co-living. **Directly relevant to Beau.** |
| **[Hub Coworking Hawaii](https://hubcoworkinghi.com/)** | Alive | Kakaako + downtown Honolulu. Voted best coworking in Honolulu 2 years running. |

### AI-friend / AI-companion / AI-matchmaking

This is the *competitive* category but not the *interesting* one — it's the one VCs are pouring money into and it'll be a bloodbath.

| Player | Status | Notes |
|---|---|---|
| **[Sitch](https://joinsitch.com/)** | Alive | $6.7M seed (2025). AI dating matchmaker. |
| **[Keeper](https://keeper.dating/)** | Alive | $4M raise Dec 2025. 100-data-point intake. |
| **Joey AI** | Alive | Phone-based AI matchmaker. |
| **[Born / Pengu](https://born.com/)** | Alive | $15M Series A Sept 2025. AI virtual pet that needs human coop — co-parent with a friend. Loneliness-adjacent. |
| **[Replika](https://replika.com/)**, **[Character AI](https://character.ai/)** | Alive | AI companion. Not what Beau wants — these are LLM-killable by definition. |
| **[KeepTouch](https://www.keeptouch.app/)** | Alive, indie | Reminds you to follow up with friends. Closest thing to "AI friend organizer" concept. |
| **[Amicu](https://amicu.app/)** | Alive, indie | Contact manager + reminders. Same category as KeepTouch. |

### Hawaii-specific community

| Org / Space | Notes |
|---|---|
| **South Shore Surf Club** (Honolulu Meetup) | Free, grassroots. ~thousand-ish members. |
| **Waikiki Surf Club** | Established legacy club. |
| **[The North Shore App](https://www.thenorthshorehawaii.com/)** | Safety-focused conditions/info app for North Shore. Not community-led. |
| **Hub Coworking Hawaii** | The de-facto Honolulu tech community. |
| **Surfbreak HNL** | Co-living, 8–12 residents, surf-focused. |
| **The North Shore Club at Turtle Bay** | Ultra-luxury 20-home community, $7.5M+ entry. Not relevant. |

## What's actually working in 2024–26

A few clear patterns separate the winners from the graveyard:

1. **Constrained-time, constrained-supply curation beats open-graph matching.** Timeleft works because the constraint is "Wednesday 7pm dinner, 5 strangers, AI-matched, you commit before you know who's coming." Lunge works because the constraint is "Wednesday evening, three-mile run from one bar to another." Hey Vina didn't work because it was an open swipe interface. The pattern: **a recurring fixed event + an algorithm that fills it** is the only friend-app shape with traction.
2. **Charge for the *thing*, not for *access*.** Timeleft monetizes via subscription + per-dinner. Strava monetizes via training tools (Runna at $149/yr). Volo Sports monetizes per-league. Othership monetizes per-class + membership. None of them monetize "friendship access" directly.
3. **Sports + activity beats hobby + interest.** Run clubs, pickleball, surf clubs, recreational leagues are all *winning*. Book clubs, conversation salons, "let's just hang" — *not* winning. The IRL frame *requires* a low-stakes shared task to do together. Beau intuited this in his journal entry — "play with people."
4. **Community as recurring revenue beats community as content.** Skool, Mighty Networks, Circle, Geneva (RIP) all built monetization around recurring membership, not ads. The graveyard is full of "content community" plays.
5. **B2B-to-the-organizer outperforms B2C-to-the-attendee.** Strava (with clubs), Volo Sports (with leagues), Pickleball Inc (with tournaments), Heylo, Wild Apricot, Join It, ClubPal — all are *selling to the organizer*, not the lonely person. The organizer has higher willingness-to-pay because they're running a business or a serious side project.
6. **Hyperlocal density wins.** Lunge dominates in one Manhattan neighborhood. Timeleft works because each city hits density before the next launches. The instinct to "launch nationally" is the killer.
7. **Run clubs as the new singles bar is real.** 72% of Gen Z report joining run clubs specifically to meet people (LADbible). Strava's clubs grew 3.5x in 2025. This isn't a fad — it's a structural shift away from dating apps.

## Businesses for sale

Surveyed Flippa, Acquire.com, BizBuySell. The landscape, with concrete (or, where noted, *guessed*) numbers.

| Type | Where to look | What's typically listed | Realistic price range |
|---|---|---|---|
| **Community SaaS (Slack/Circle-style infrastructure)** | Acquire.com, Flippa SaaS category | 4.1x–8.7x revenue median (2025 SaaS multiples) | $50k–$2M most listings. *Estimate* — actual list of community-SaaS deals is private. |
| **Niche community sites / forum businesses** | Flippa Online Community category | Forum + ad model + membership | $5k–$500k. Most low-quality. |
| **Local event-planning businesses** | BizBuySell event planning (82 listings as of search) | Real-world ops, brick & mortar | $50k–$2M asking. Mostly wedding/corporate, not "open social events." |
| **Adult sports league (regional)** | BizBuySell, niche brokers | ZogSports model at smaller scale | *Estimate*: $200k–$2M depending on cities + revenue. Volo just consolidated this, so smaller leagues are sellers. |
| **Coworking spaces / niche third places** | BizBuySell | Brick-and-mortar | Highly variable, ~$200k–$5M. |
| **Single-niche Slack/Discord paid communities** | Acquire.com, Twitter networks | $5–50/mo × 50–5000 members | $20k–$500k usually. Hot category for indie buyers. |

**Realistic concrete plays for Beau:**

- **Buy a regional adult-sports-league business.** Post-Volo-ZogSports merger, there are dozens of independent kickball / softball / dodgeball league operators in mid-tier US cities who could not raise. Many are 1–2 person ops doing $200k–$1M revenue. Honolulu specifically has zero Volo presence. Could acquire a Honolulu league or start one. **Highest-leverage option** because it stacks on Dugout Edge's competency.
- **Acquire a paid Slack/community in surf/golf/adventure travel.** Indie-Hackers-style $5–20/mo communities of 200–2000 members in athletic/outdoor niches sell for $30–150k on Acquire.com. Could be a fast distribution wedge for Club OS.
- **Avoid** generic local "social club" businesses — they're either weddings or zombie Meetup-style organizers with no real product.

(I was not able to surface specific live listings in the research session — these are typed-in estimates from the Acquire.com / Flippa / BizBuySell category overviews. Real listings rotate weekly and need to be checked on the platforms directly.)

## Wedge candidates — sized and ranked

Each candidate scored against Beau's 3-rule "Holy Grail" filter and the 6-filter checklist.

| # | Candidate | Pain proximity | Funnel clarity | Genuine passion | Deterministic | LLM-unkillable | In his domains | Search demand | ARPU ambition | Gut |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | **Club OS — Dugout Edge for adult run/pickleball/surf/sport clubs** | High | High | High | High | High | Sports + SaaS | Strong | $50–$300/mo per club | **STRONGEST** |
| 2 | **Timeleft for Surfers in Oahu** | Very High | Medium | Very High | Medium | Medium | Social + sports | Weak (niche) | $20–$50/event | Strong but small ceiling |
| 3 | **AI friend-organizer agent (KeepTouch-style)** | High | Low | Medium | Low | Low — LLM-killable | Social | Weak | $5–$15/mo | Weak |
| 4 | **Activity-first friend app (Timeleft + sports)** | High | Medium | Medium | Low | Low | Social | Medium | $15–$30/mo | Weak (consumer app graveyard) |
| 5 | **Local "What's On" agent** | High | Low | Low | Medium | Medium-low | Social + AI | Strong (events SEO) | $10/mo or free | Medium |
| 6 | **Forced-IRL accountability product** | Medium | Low | Low | Medium | Medium | Social | Weak | $10–$20/mo | Weak |
| 7 | **Acquire-and-grow indie community** | Medium | High | Medium | High | High | Varies | Medium | $5–$30/mo per member | Medium — depends on the asset |

### #1 — Club OS — Dugout Edge for adult sport clubs (the recommended pursuit)

**What it is:** Strip Dugout Edge down to its primitives (RSVPs, payments, schedules, group communications, attendance, lineups-or-rotations, waivers) and re-shape it for the adult IRL club operator. Target customers:

- Run club organizers (3.5x growth on Strava in 2025; thousands of unincorporated clubs)
- Pickleball clubs (24M+ players, 22% growth in 2025)
- Surf clubs / paddle clubs / boating clubs (chronically underserved)
- Adult sports leagues (Volo just consolidated the top — but tier-2 markets are uncovered)
- Hiking, biking, climbing clubs

**Why it clears Beau's filter:**

| Filter | Rating | Why |
|---|---|---|
| Pain proximity | ★★★★ | He's literally building this for youth baseball. He's seen the operator pain firsthand. He surfs/runs/golfs — knows the adult-club operator pain too. |
| Clear funnel | ★★★★ | SEO: "run club software," "pickleball league management," "surf club RSVP" — long-tail keywords with non-zero volume. Plus: cold-call existing clubs found via Meetup migration / Strava clubs / Eventbrite. |
| Genuine passion | ★★★★★ | He already spends his days on this for youth baseball. Extending to adult sport clubs is a strict expansion, not a context switch. |
| Deterministic output | ★★★★★ | RSVPs, schedules, payments, waivers, lineups, attendance — all deterministic. LLM is a feature ("draft my weekly email") not the product. |
| LLM-unkillable | ★★★★★ | ChatGPT cannot run a recurring payment, store waivers, or sync to Strava clubs. Operator wants a *system of record*. |
| In his domains | ★★★★★ | Sports + SaaS + social — three of his named domains. |
| Search demand | ★★★ | Real but not gigantic. Better than friend apps. Needs DataForSEO validation. |
| ARPU ambition | ★★★ | $50–$300/mo per club. With 500 clubs that's $300k–$1.8M ARR. With 5,000 clubs that's $3M–$18M. **Or take-rate** on transactions (Heylo, ClubPal models) → 2–3% of GMV runs nicer math. |

**Realistic ARR math:** US adult-sport-club universe is estimated at hundreds of thousands of clubs across run / pickleball / cycling / soft sports. If 0.5% adopt at $150/mo blended = lots of money. The Strava-clubs number alone (>1M global clubs, even with most being inactive) implies a TAM that supports a $50–100M ARR business. Beau is not trying to build the next Strava; he's trying to build the next ClubPal/Heylo + Dugout Edge — a $1–10M ARR indie business that's plausible inside 24 months.

**Defensibility:**
- Dugout Edge engine already exists — speed-to-market is the moat
- Operator switching cost is high (payment integration, member migration, scheduling history)
- Multi-sport flexibility beats single-sport vertical players (CourtReserve, PodPlay)
- "Run by an actual athlete-operator" brand authenticity beats VC-funded SaaS

**Risks:**
- Volo Sports + Strava are platform threats — could ship clubs CMS at scale
- Heylo + ClubPal exist and are growing
- Adoption is slow (volunteer-run clubs don't pay quickly)
- Hardware-adjacent competitors (PodPlay's $30–350/court model) capture facility owners, leaving Club OS to capture social-club organizers — that's actually a clean split

**v1 plan (12 weeks):**
1. Pick a wedge sport (probably **adult pickleball** given the Apollo $225M news + Beau's affinity; *or* **run club** given the Lunge/Strava momentum)
2. Land 5 paying clubs in Hawaii first (Beau is on the ground, Honolulu has zero Volo presence)
3. Ship: RSVP, dues collection (Stripe), schedule, attendance, member list, group chat (or Discord embed), basic stats
4. Compete on price + UX vs Meetup + Heylo + ClubPal
5. Add second wedge sport once first is at 20 paying clubs

### #2 — Timeleft for Surfers in Oahu

**What it is:** A weekly curated dawn-patrol surf session for 4–6 surfers of compatible skill matched by an algorithm. You sign up, pay $20–$50, get matched, get a "surf together at Diamond Head Wednesday 6am" notification with your group + a WhatsApp link. Post-surf coffee at a partner café.

**Why this is interesting for Beau specifically:**
- He is the customer. New-to-Hawaii guy in his 30s who surfs and wants more surf friends.
- Hyperlocal — Oahu only — doesn't need network scale
- Genuine passion: surf community is one of the most fragmented + most desperate-for-belonging communities anywhere
- Could ship in weeks (Typeform + Stripe + WhatsApp + matching script — same way Timeleft started)

**Why it doesn't clear all filters:**
- ARPU is small ($50/month/user × 100 users = $5k MRR)
- Not deterministic in the LLM-unkillable sense
- Search demand is weak — "surf meetup Honolulu" is low volume
- Time-to-meaningful-revenue is long even if it works
- The ceiling is "lovable side project," not "$1M+ ARR business"

**Honest verdict:** Build this *only* as a personal life upgrade / brand story / content engine *while* building Club OS. Don't make it the bet.

### #3 — AI friend-organizer agent (KeepTouch-style)

**What it is:** A "Joe for friendships" — an AI agent that knows your friends, remembers when you last saw them, suggests when to reach out, drafts the text, books the activity.

**Why it's tempting:** Similar shape to Joe (the AI finance agent), beautiful demo moments, character-led.

**Why it fails Beau's filter:**
- KeepTouch and Amicu already exist and have low traction
- It is *the most* LLM-killable product imaginable — ChatGPT can do this with a calendar plugin
- WTP is low ($5–15/mo at best)
- The action layer (booking the activity) is the hard part and ChatGPT-with-tools owns it
- The personality layer doesn't carry the way it does in finance ("Joe got me $47" is more visceral than "Joe reminded me to text Mike")

**Drop.**

### #4 — Activity-first friend app

Already addressed in landscape. Don't build a friendship app.

### #5 — Local "What's On" agent

**What it is:** AI agent that learns your interests + your friends' + local events (Eventbrite, Luma, IG, ticketing APIs), surfaces "the 3 things to do this weekend." Maps onto Clyx's pitch but as a personal agent, not a discovery feed.

**Why it's medium-interesting:** Real search demand around "things to do this weekend [city]." Clyx just got $14M to do something similar. AI summarization on top of event APIs is doable.

**Why it doesn't clear Beau's filter:** Clyx is funded and execution-leading. ARPU is small. Cold-start is brutal outside major metros. LLM-killable — every general AI agent will do this in 18 months. Skip.

### #6 — Forced-IRL accountability product

Strava-style social pressure for non-fitness hobbies (jam sessions, book club showings, etc.). **Skip** — too niche, no obvious funnel, low WTP, undifferentiated from Strava clubs.

### #7 — Acquire-and-grow indie community

**What it is:** Buy a paid Slack/community/forum in a sport/outdoor niche on Acquire.com for $30–150k. Run it, grow it.

**Why it could work:** Cheap entry. Existing revenue. Stacks on Club OS distribution (the community becomes a beachhead for Club OS users).

**Why it's medium:** Asset quality varies wildly. Most paid communities are zombie. Need to vet specific listings. Could be a complement to Club OS, not the primary play.

**Verdict:** Worth a 1-hour skim of Acquire.com listings weekly. Not a primary bet.

## Beau's unfair advantages

- **Dugout Edge already exists.** The hardest part of Club OS — building the engine — is done. Adult-sport-club operators have ~80% the same needs as youth-baseball-coach operators (lineups → rotations, batting order → match brackets, but signup/payment/schedule/comms are identical).
- **Athletic operator credibility.** He's ex-pro baseball, surfs, runs, golfs, plays pickleball. When he calls a run-club founder or a pickleball club owner, he's a peer, not a SaaS bro.
- **Hawaii density.** Oahu is the perfect testing ground — there are no major adult-sport-league incumbents, no Volo, no Lunge-equivalent. The community is small enough that 5 paying clubs is reachable in weeks.
- **Stanford / SF network.** Likely knows people running tech-adjacent run clubs, hack houses, dinner clubs — early design partners on tap.
- **The data analyst muscle.** Helpful for the data layer (attendance, member retention, dues collection analytics) that competitors don't ship cleanly.
- **He's not a venture-backed founder.** Indie/lifestyle path means take-rate or per-club SaaS at $50–300/mo lines up with his ambition (not "$5M ARR or die").
- **He's the customer.** New Hawaii transplant, late 30s, IRL-curious. He's not researching the problem — he's living the gap.

## Honest objections

### "Social is a graveyard."

Yes — for *consumer* social apps. For B2B-to-the-organizer software in the social space (Strava, Volo, Heylo, PodPlay, ClubPal), it's a $1B+ market that's still consolidating. Club OS sits firmly in the B2B-to-organizer category.

### "Adult sport clubs are too volunteer-run to pay."

Partially true. Counter-evidence: ClubPal monetizes via 2.5% transaction fee — clubs pay $0 unless they're collecting dues, which they all do. Same model works here. Plus pickleball-specific software (PodPlay $30–350/court/mo) is already monetizing — clubs pay when the product saves coordination time.

### "Strava could ship this in a quarter."

Strava could. But (a) Strava is now an acquirer (Runna, Breakaway), not an in-house builder; (b) clubs feature on Strava is a wrapper around their training app, not a real operator stack; (c) Strava users are primarily *individual athletes*, not club operators. The operator pain is real and unaddressed even on Strava. A focused player can win.

### "Beau prefers LLM-unkillable, deterministic, take-rate products. Is this one?"

Yes, on all three:
- **LLM-unkillable:** ChatGPT can't process Stripe payments, store waivers, run an attendance database, or sync to Garmin/Strava.
- **Deterministic:** RSVPs, schedules, payments — all structured I/O. AI is a sprinkles-on-top feature ("draft my weekly email," "suggest a practice plan").
- **Take-rate option exists:** Either per-club SaaS ($50–300/mo) or transaction fee (2–3% of dues/event collections).

### "Why not just keep building Dugout Edge?"

Should keep building it. Club OS is *the same business* applied to adjacent verticals. It's not a pivot — it's a horizontal extension. The youth-baseball brand can stay focused; the adult-club brand can be a separate sub-product or sub-domain (e.g., `dugoutedge.com/run-clubs` or `clubos.com`). This is the strongest argument for the pursuit: Beau is not switching businesses, he's expanding the wedge of an existing business into a category he is personally pulled toward.

### "Won't acquiring a paid community give faster distribution than building Club OS?"

Possibly. The cleanest sequence is: **(1) ship Club OS v1, (2) acquire one paid community for distribution muscle**, rather than treating them as alternatives. The community gives a captive customer set for the SaaS.

### "Doesn't the IRL surf/dinner-club angle map better to Beau's personal life?"

Personally yes — professionally no. The "Timeleft for surfers Oahu" idea is a fantastic side hustle / lifestyle play / content engine. Ship it as a personal hobby that becomes a brand story (e.g., write up the experience publicly, drive top-of-funnel for Club OS). But the business is Club OS.

## Recommended next step

**2-week cheap experiment: cold-call 30 adult-sport-club operators and ask them to switch from Meetup/WhatsApp/spreadsheets to a Dugout-Edge-shaped product.**

Specifically:
1. **Week 1, Days 1–3:** Pull list of 30 operators — 10 pickleball clubs (Pickleheads + Facebook groups), 10 run clubs (Strava clubs + Lunge-style copycats + RunClub.io listings), 10 niche clubs (surf, hiking, cycling) in 3 metros — Honolulu, Austin, NYC.
2. **Days 4–7:** Cold-email/cold-DM with a 90-second Loom showing how Dugout Edge handles signups/payments/schedule + framing for adult-club use. Ask: "What do you use today? What would make you switch? Would you pay $50/mo if it saved you 4 hours a week?"
3. **Week 2:** Talk to anyone who responds. Run 10–15 customer-discovery calls. Sell 3 pre-orders at $50/mo for a 90-day pilot.

**Definition of success:** 3 paid pilot clubs by end of week 2. If yes → start the 12-week Club OS build. If no → re-validate the wedge (different sport, different geography, different price) or shelve the thesis.

**Parallel side experiment (optional, no commitment):** Run *one* Timeleft-style surf-meetup in Oahu via a Typeform + Venmo + WhatsApp setup. See what happens. Use as content for the Club OS funnel (lived experience → credibility with operators).

## Cross-references

- See **[joe-ai-agent.md](./joe-ai-agent.md)** — sibling agent-product thesis; Joe in finance, here the agent layer is *de-prioritized* because the operator pain is bigger than the user pain.
- See **[wellness-brand.md](./wellness-brand.md)** — sibling tools-portfolio thesis; same "build B2B-shaped product, don't fight Google/Strava on consumer surfaces" pattern.
- See **[top-ideas.md](./top-ideas.md)** — for current ranking of all explorations.
- See **`docs/explorations/data/`** — for keyword research on run-club / pickleball / club-management terms (needs to be pulled).

## Open questions

- **First wedge sport — pickleball or run club?** Pickleball has the bigger tailwind ($225M Apollo raise, 22% YoY growth). Run club has more cultural heat (Strava clubs 3.5x, NYC viral). Need DataForSEO pass on "pickleball club management" vs "run club software" search volumes.
- **Pricing — per-club subscription or transaction take-rate?** Heylo/ClubPal use no-subscription transaction take-rate; PodPlay uses per-court SaaS. Take-rate has nicer alignment + zero entry friction; SaaS has predictable ARR. Probably hybrid: free tier (transaction take only) + paid tier ($50–150/mo for advanced features).
- **Brand decision: extend Dugout Edge or new brand (Club OS / ClubKit / ClubHQ)?** Extending Dugout Edge is faster but limits adult appeal; new brand is cleaner positioning but burns the existing brand equity.
- **How does this interact with Joe?** Probably not at all — different audiences. But same character-led brand thinking could apply if there's an AI-coach feature inside Club OS ("Coach draft your weekly email").
- **Acquire-and-grow as a parallel track — yes or no?** Worth $1–2k of paid lead-flow on Acquire.com to surface a community asset to buy alongside the SaaS build.
- **The Hawaii niche play — content engine or distraction?** Probably content engine. One surf meetup in Oahu per month, write about it, use for top-of-funnel.

## Sources

### Loneliness data & policy
- [US Surgeon General Advisory on Loneliness 2023 (HHS PDF)](https://www.hhs.gov/sites/default/files/surgeon-general-social-connection-advisory.pdf)
- [NACo coverage of Surgeon General loneliness advisory](https://www.naco.org/news/us-surgeon-general-releases-advisory-and-national-strategy-advance-social-connection)
- [Gallup 2025 — Younger Men Among Loneliest in the West](https://news.gallup.com/poll/690788/younger-men-among-loneliest-west.aspx)
- [Fortune — Gen Z and millennial men among loneliest](https://fortune.com/well/2025/05/21/gen-z-millennial-men-loneliness/)
- [AARP 2025 — Loneliness Among Adults 45+](https://www.aarp.org/pri/topics/social-leisure/relationships/loneliness-social-connections-2025/)
- [Axios 2025 — Hopelab survey on youth loneliness](https://www.axios.com/2025/09/16/youth-mental-health-gen-z-hopelab-survey-2025)
- [Fortune — $406B loneliness problem](https://fortune.com/2026/03/20/loneliness-epidemic-gen-z-millennials-460-billion-problem/)

### Friendship app coverage
- [TechCrunch 2026 — Best apps to make new friends](https://techcrunch.com/2026/04/05/as-people-look-for-ways-to-make-new-friends-here-are-the-apps-promising-to-help/)
- [TechCrunch — Bumble BFF revamp Sept 2025](https://techcrunch.com/2025/09/18/bumble-bffs-revamped-app-is-here-focusing-on-friend-groups-and-community-building/)
- [TechCrunch — Clyx $14M Series A](https://techcrunch.com/2025/09/10/this-gen-z-founded-app-just-raised-14m-to-take-on-the-loneliness-episdemic/)
- [TechCrunch — Born $15M Series A](https://techcrunch.com/2025/09/10/born-maker-of-virtual-pet-pengu-raises-15m-to-launch-a-new-wave-of-social-ai-companions/)
- [Geneva shutdown blog post](https://www.geneva.com/blog/meant-to-bee)
- [Medium — Why Friendship Apps Are Failing (Nov 2025)](https://medium.com/@reuben.runacres/why-friendship-apps-are-failing-and-how-to-fix-them-85cf3de51e18)

### Timeleft
- [Timeleft Substack growth deep-dive](https://timfrin.substack.com/p/inside-timelefts-journey-to-connecting)
- [Startup Spells — How Timeleft solved chicken-and-egg](https://startupspells.com/p/how-timeleft-solved-the-chicken-and-egg-problem)
- [Hngry.tv — Timeleft social dining loneliness](https://www.hngry.tv/articles/timeleft-creates-social-dining-experiences-to-cure-the-loneliness-epidemic/)
- [Timeleft on Tracxn](https://tracxn.com/d/companies/timeleft/__aDvq69-tMF73H6WNRLGae_DzNk5Jz5rVxD_kw2Poqpg)

### Run clubs as new singles bars
- [NBC News — NYC run clubs as dating market](https://www.nbcnews.com/news/nyc-running-clubs-dating-market-singles-apps-rcna167424)
- [Time Out NY — Lunge Run Club](https://www.timeout.com/newyork/news/this-running-club-is-the-hottest-dating-app-in-nyc-071824)
- [WWD — Run clubs replacing dating apps](https://wwd.com/beauty-industry-news/wellness/run-clubs-dating-apps-1236515128/)
- [Lunge App](https://www.lungeapp.com/)
- [Strava CEO on Gen Z run clubs (Fortune)](https://fortune.com/article/strava-ceo-michael-martin-gen-z-run-clubs-analog-lifestyle-social-media-detox-marathons/)

### Strava + IPO
- [Strava IPO filing analysis (the5krunner)](https://the5krunner.com/2026/01/09/strava-ipo-filing-3-billion-valuation-analysis/)
- [Cyclingnews — Strava IPO 2026](https://www.cyclingnews.com/news/strava-to-go-public-with-ipo-as-early-as-2026/)
- [Strava acquires Runna analysis (TFN)](https://techfundingnews.com/strava-acquires-runna-5-key-takeaways-and-how-it-stacks-up-against-nike-run-club-myfitnesspal-and-fitbit/)

### Pickleball
- [CNBC — Apollo Sports Capital $225M Pickleball Inc raise](https://www.cnbc.com/2026/05/01/apollo-sports-capital-tom-dundon-pickleball-investment.html)
- [Pickleball Inc press release](https://ppatour.com/apollo-sports-capital-leads-landmark-investment-in-pickleball-inc/)
- [Athletech News — Pickleball Inc $225M](https://athletechnews.com/pickleball-inc-225-million-apollo-sports-capital/)
- [Huddle Up — Pickleball billion-dollar potential](https://huddleup.substack.com/p/pickleballs-billion-dollar-potential)

### Volo Sports & adult sport leagues
- [PitchBook — Volo Sports profile](https://pitchbook.com/news/articles/volo-sports-wants-to-dominate-your-social-life)
- [Volo Sports homepage](https://www.volosports.com/)
- [YSBR — Volo ZogSports adult-league consolidation](https://youthsportsbusinessreport.com/volo-sports-creates-recreational-empire-what-youth-sports-can-learn-from-adult-league-consolidation/)
- [Sports League Software Market Size — Future Market Report](https://www.futuremarketreport.com/industry-report/sports-league-software-market)

### Club management SaaS
- [ClubPal — Running club software 2025 guide](https://www.clubpal.app/news/2025-03-21-running-club-management-software)
- [Join It blog — best club management software](https://joinit.com/blog/best-club-management-software)
- [Heylo — Meetup alternative](https://www.heylo.com/alternatives/meet-up)
- [PodPlay homepage](https://podplay.app/)
- [Playbypoint homepage](https://www.playbypoint.com/)
- [Anolla — AI pickleball platform](https://anolla.com/en/best-pickleball-software)

### Meetup decline
- [Andy Piper — Meetup is so over](https://andypiper.co.uk/2024/10/18/meetup-com-is-so-over/)
- [Hoffbits Medium — Pay to Skip on Meetup](https://medium.com/@hoffbits/pay-to-skip-why-meetup-risks-undermining-its-own-community-635cb1c25f9c)
- [Follow the Money — WeTransfer / Bending Spoons playbook](https://www.ftm.eu/articles/wetransfer-owner-buys-up-apps-then-makes-them-more-expensive)

### Event platforms
- [Sacra — Partiful valuation](https://sacra.com/c/partiful/)
- [Luma homepage](https://luma.com/)
- [Posh TechCrunch coverage 2023](https://techcrunch.com/2023/04/27/event-management-ticketing-platform-posh-raises-5-million-seed-round/)
- [222.place](https://222.place/)
- [YC profile of 222](https://www.ycombinator.com/companies/222)

### Community platforms
- [Mighty Networks community platform comparison](https://www.mightynetworks.com/resources/community-platforms)
- [Mighty Networks — Skool alternatives](https://www.mightynetworks.com/resources/skool-alternatives)

### Third places / social wellness clubs
- [CNBC — Wellness third spaces, Othership, Bathhouse, glo30](https://www.cnbc.com/2026/03/07/wellness-third-spaces-othership-bathhouse-glo30.html)
- [SF Standard — SF social wellness era](https://sfstandard.com/2025/04/09/rise-of-the-social-wellness-club-how-sf-turned-sweat-into-a-social-life/)
- [27K Ventures — Social wellness clubs](https://www.27kventures.com/updates/the-rise-of-social-wellness-clubs-why-saunas-cold-plunges-and-community-are-the-new-frontier)
- [Fortune — $10k/mo wellness clubs](https://fortune.com/well/article/social-wellness-clubs-relax-reverse-aging-community/)
- [The Quality Edit — Continuum Club review](https://www.thequalityedit.com/articles/continuum-private-wellness-club)
- [Athletech News — Life Time coworking lounges](https://athletechnews.com/life-time-wants-to-be-more-than-a-third-space-adding-work-lounges/)

### Co-living / nomad / Hawaii
- [Surfbreak HNL Hawaii co-living](https://www.surfbreakcoliving.com/hawaii)
- [Outsite Oahu guide](https://www.outsite.co/blog/digital-nomads-guide-to-oahu-hawaii)
- [Hawaii Guide — digital nomad coworking](https://www.hawaii-guide.com/blog/hawaii-digital-nomad-guide-coworking-wifi)
- [Sage Grazer Therapy — Hawaii relocation isolation](https://www.sagegrazertherapy.com/blog/hawaii-relocation-stress-therapy)
- [Surfer.com — North Shore App](https://www.surfer.com/gear/new-app-north-shore-info-based-on-safety-not-tourism)

### AI matchmaking / AI friend
- [TechCrunch — Sitch AI matchmaker](https://techcrunch.com/2025/06/25/sitch-wants-to-fuse-human-personality-and-ai-for-matchmaking/)
- [AlleyWatch — Keeper $4M raise](https://www.alleywatch.com/2025/12/keeper-ai-matchmaking-dating-relationship-science-jake-kozloski/)
- [KeepTouch app](https://www.keeptouch.app/)
- [Amicu app](https://amicu.app/)
- [VC Stack — AI startups tackling loneliness](https://www.vcstack.io/blog/top-ai-startups-tackling-the-loneliness-epidemic)

### Marketplaces for businesses for sale
- [Flippa SaaS businesses for sale](https://flippa.com/buy/sitetype/saas)
- [Flippa online community businesses](https://flippa.com/buy/categories/internet/online-community)
- [Acquire.com SaaS for sale](https://acquire.com/saas-companies-for-sale/)
- [BizBuySell event planning businesses](https://www.bizbuysell.com/event-planning-businesses-for-sale/)
- [Acquire.com SaaS valuation multiples 2025](https://blog.acquire.com/saas-valuation-multiples/)

### Retention & churn benchmarks
- [GetStream — 2026 App Retention Guide](https://getstream.io/blog/app-retention-guide/)
- [WinSavvy — % users churn in 30 days](https://www.winsavvy.com/what-of-users-churn-in-the-first-30-days-early-retention-stats/)
- [UXCam — Mobile app churn benchmarks 2025](https://uxcam.com/blog/mobile-app-churn-rate/)
