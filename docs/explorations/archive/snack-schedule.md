# Snack Schedule — Team / Sports

## Verdict (2026-05-21)

**Real demand, tiny market, classic lead-magnet not venture.** Total cluster demand across all variants is ~500–700 searches/mo. The audience wants a *free printable template* (Google Doc, Excel), not a SaaS subscription — almost every keyword has informational/transactional intent for "template" or "template free." Bid-side: CPCs are mostly $0.05–$0.28 (advertisers see zero commercial value), with one outlier at $5.94 ("snack schedule for sports team") suggesting team-management platforms occasionally bid.

**Recommendation:** Don't pursue as a standalone venture. **Build it as a free tool inside Dugout Edge** — capture coach/team-parent emails (the exact ICP for Dugout) for the cost of one weekend of work. Use the seasonal spike (March–September) as paid-acquisition-free growth into the existing product.

## Keyword research (DataForSEO 2026-05-21, single call, ~$0.01)

### Top keywords by reported volume

| vol | kd | competition | cpc | intent | keyword |
|---:|---:|---:|---:|---|---|
| 140 | — | LOW (0.03) | $0.28 | informational | snack schedule |
| 140 | — | HIGH (1.0) | $0.14 | informational | snack schedule template |
| 70 | — | LOW (0.0) | — | informational | soccer snack schedule template free |
| 70 | — | LOW (0.01) | $1.05 | informational | baseball snack schedule template free |
| 70 | — | LOW (0.02) | $1.27 | informational | snack schedule template free |
| 50 | — | HIGH (0.95) | $0.06 | informational | soccer snack schedule |
| 50 | — | HIGH (0.70) | $2.02 | navigational | snack schedule sign up |
| 50 | — | HIGH (0.97) | $0.02 | informational | snack schedule for soccer |
| 40 | — | HIGH (1.0) | $0.21 | informational | baseball snack schedule |
| 20 | 43 | HIGH (1.0) | $0.02 | informational | softball snack schedule template |
| 20 | — | HIGH (0.84) | $0.05 | informational | team snack schedule template |
| 20 | — | HIGH (0.75) | $5.94 | informational | snack schedule for sports team |
| 20 | — | HIGH (1.0) | $1.65 | informational | soccer snack schedule template |
| 20 | — | LOW (0.0) | — | transactional | free printable snack schedule template |
| 20 | — | LOW (0.0) | — | commercial | football snack schedule template free |

### Recent demand vs reported volume

The reported `search_volume` is a 12-month average. The actual **recent 3-month average** for the core "snack schedule" keyword is ~190/mo (Jan–Mar 2026 avg), trending up from a December low — classic spring-sports-season seasonal pattern.

```
"snack schedule" monthly searches:
2025-04:  170
2025-05:   90
2025-06:   90
2025-07:   90
2025-08:  260   ← fall sports prep
2025-09:  320   ← peak (fall sports start)
2025-10:  110
2025-11:   40
2025-12:   50
2026-01:  140
2026-02:  170
2026-03:  260   ← spring sports prep
```

**Trend:** monthly +53%, quarterly +86%. Real seasonal lift, not a viral fluke.

### What the data is telling us

1. **People want templates, not software.** Every dominant variant ends in "template," "template free," "printable." They're going to look for a Google Sheet they can copy.
2. **Sport-specific variants exist but are tiny.** Soccer, baseball, softball, football each get 20–70 searches/mo for templates. The volume is too small to support a per-sport product.
3. **Heavy seasonality.** Search demand swings ~5x between off-season (Dec, ~40/mo) and pre-season (Sep, ~320/mo). Need to plan for that if running paid traffic.
4. **CPC tells the real story.** $0.02–$0.28 on most keywords = advertisers see no commercial value. This is informational/utility traffic, not buying intent.
5. **The one $5.94 CPC keyword ("snack schedule for sports team," 20/mo) is the tell** — team-management platforms (TeamSnap, GameChanger, Heja, SignUp.com) occasionally bid here, meaning they consider it a lead source for their *real* product (full team management).

## Competitive landscape

The snack schedule function is already a tiny feature inside bigger team-management apps:

| Player | What they do | Snack feature? |
|---|---|---|
| **TeamSnap** | Full team mgmt (rosters, schedules, payments) — $9.99–$14.99/mo per team | Has it as a sub-feature |
| **GameChanger** | Live game scoring + team mgmt — free for users, monetizes via streaming | Has team availability tools |
| **SignUpGenius** | Generic signup tool — freemium | Snack signups are a top use case |
| **SignUp.com** | Generic signup tool — freemium | Same as above |
| **Heja** | Sports team chat + scheduling — freemium | Has snack/duty scheduling |
| **Random printable templates** | Pinterest, Etsy ($2–5 PDFs), free blog templates | Own the "template free" SERPs |

**Gap:** Nobody has built a specific, single-purpose "team snack schedule generator" that's the absolute best at the one thing. SignUpGenius is generic and ugly. The full team-management platforms make you adopt their whole stack.

**But:** the audience is tiny enough that "best in class at this one thing" doesn't sustain a business by itself.

## Why this is a Dugout lead magnet, not a venture

- **The buyer of a snack schedule tool *is* the Dugout Edge buyer.** Team parents, coaches, team moms — exact ICP overlap.
- **The keyword volume can be acquired for free via SEO** (KD low on the core terms, soft incumbents).
- **The handoff is natural.** "You just made a snack schedule for your team — want to also auto-generate lineups, practice plans, and parent comms? [Dugout Edge link]"
- **Build effort: a weekend.** Generator: roster input → schedule output, email capture, optional PDF/Google Calendar export. Dugout already has the team/roster data model.

## MVP sketch (if pursued as a Dugout lead magnet)

1. Standalone landing page at `dugoutedge.com/snack-schedule-generator` (or similar)
2. Inputs: team name, roster (paste names), game schedule (date list or upload), # of snacks per game (one family per game vs two)
3. Constraints: rotate fairly, allow dietary flags, allow skip dates
4. Outputs: shareable web link, PDF download, Google Calendar invite per assigned family, email export
5. **Email capture before download** (the entire point)
6. Post-download: "Want to also auto-generate lineups? See how Dugout Edge does it [CTA]"
7. SEO: target "team snack schedule generator," "snack schedule template," "baseball snack schedule," etc.

Cost to build: probably 2–4 days with Claude Code given Dugout's existing team model.

## Open questions

- Does Dugout Edge already have the roster model in a state where this can be added in 2 days, or is it more invasive?
- Is the seasonal spike worth optimizing for, or does it just dilute year-round funnel metrics?
- Are there other "one-feature" tools in the youth-sports parent workflow that fit the same lead-magnet pattern (carpool coordinator, team store, snack reimbursement tracker)?

## Sources

- DataForSEO API call (this session, 2026-05-21)
- General market knowledge of TeamSnap / GameChanger / SignUpGenius / Heja competitive landscape

*Cost: $0.01*
