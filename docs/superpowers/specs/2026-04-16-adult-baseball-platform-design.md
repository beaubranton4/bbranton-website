# Adult Baseball Practice Platform — Design Spec
**Date:** 2026-04-16  
**Status:** Draft — for review before implementation  
**Origin:** Design thinking session based on journal entry `content/posts/2026-04-13-things-i-keep-failing-at.md`

---

## Context

Beau's journal documents two recurring personal failures over 185 entries: the absence of physical community (missing the team feeling from baseball/college) and the inability to maintain physical habits without external accountability. The Friday-through-Sunday breakdown pattern is partly a loneliness problem — there's no practice to show up for, no team to disappoint.

The adult baseball practice platform solves this personally (gives Beau a team again) and commercially (nobody owns this search space — "adult baseball league near me" has 3,600 searches/month at KD 0).

**Keyword research validation (2026-04-16):**
- 195 keywords in the adult baseball cluster, 83 with KD<20
- "Adult baseball league near me" — 3,600 vol/mo, KD 0
- "National adult baseball association" — 6,600 vol/mo, KD 0 (navigational, shows demand for a modern alternative)
- Full data: `docs/keyword-research/2026-04-16-04-adult-baseball.csv`

---

## Product Vision

A platform where adult baseball players self-organize practice sessions, find players at their level, and build the recurring social sports habit they lost after college or high school.

**Not a league management tool** (TeamSnap owns that). **Not a pickup game app** (too casual). This is for people who want to practice seriously — batting practice, fielding work, bullpen sessions, full scrimmages — with consistent partners.

---

## Core Concept: Two Jobs

**Job 1 — For Beau (the user):** Open the app, see a BP session Saturday morning 2 miles away with players at a similar level, request to join, show up. Done. No phone calls, no Facebook group chaos, no organizing required.

**Job 2 — For the product (SEO acquisition):** City landing pages rank for "adult baseball league in [city]" and "adult baseball near me" queries. Players discover the platform via Google, sign up, and create network effects.

These reinforce each other: the community generates real activity that keeps city pages fresh; the city pages bring in new community members.

---

## User Flows

### Flow A — Find and Join a Session (Primary)
1. Arrive at city page (Google or direct)
2. See upcoming sessions filtered by: position, skill level, practice type, date, distance
3. Tap session → view details (location, who's going, what you'll work on)
4. Request to join → organizer approves → receive location pin + group thread
5. Show up, play, connect

### Flow B — Create a Session
1. "New Session" → pick: practice type (BP / Fielding / Bullpen / Scrimmage / Full Practice), date, field, spots needed, skill level preference
2. Session posts to city feed + push/email to nearby matched players
3. Organizer manages: approve requests, message group, close session when full
4. Post-session: mark complete, optionally rate participants

### Flow C — Build a Recurring Group (Retention)
1. After 2-3 sessions with the same players → "Create a Practice Group"
2. Group = named team, shared calendar, roster, session history
3. Groups can be private (invite-only) or public (discoverable)
4. This is the stickiness mechanism: turns one-off sessions into ongoing teams

---

## Player Profile

Minimal but sport-specific — enough to enable meaningful matching:

| Field | Options |
|---|---|
| Positions | C, 1B, 2B, SS, 3B, LF, CF, RF, SP, RP (multi-select) |
| Skill level | Recreational / Competitive Amateur / College-level / Semi-Pro / Pro Background |
| Location | Zip code + radius preference (5 / 10 / 25 miles) |
| Availability | Days of week + AM/PM preference |
| Background | Optional: HS / College / Independent / Minor League / Pro |

---

## SEO Architecture (Growth Engine)

The platform is structured to generate city pages that rank for local intent searches.

```
/leagues/san-francisco-ca          "Adult Baseball Leagues in San Francisco"
/leagues/austin-tx                 "Adult Baseball Leagues in Austin"
/practice/san-francisco-ca         "Find Baseball Practice Partners in SF"
/practice/austin-tx/batting        "Batting Practice Groups in Austin"
```

**Launch strategy:**
1. Scrape NABA, MSBL, and local park district sites to pre-populate 50 cities with existing league data
2. City pages exist before community does — SEO indexing starts immediately
3. As sessions are created, pages update with live activity (ISR on Vercel keeps them fresh)
4. Target: 50 cities at launch → 150-200 indexed pages on day 1

**Primary keyword targets:**
- "adult baseball league near me" (3,600/mo, KD 0)
- "adult baseball leagues near me" (3,600/mo, KD 12)
- "adult baseball league" (1,000/mo, KD 10)
- "adult league baseball" (1,000/mo, KD 12)
- "adult baseball near me" (480/mo, KD 8)

---

## MVP Scope

### In MVP
- [ ] Player auth (email + Google)
- [ ] Player profile (positions, level, location, availability)
- [ ] Session creation (type, date, field, spots, skill preference)
- [ ] Session discovery (list + map, city-filtered)
- [ ] Join request + approval flow
- [ ] Basic notifications (email: request received, approved, reminder day-before)
- [ ] City landing pages (50 cities, ISR, pulls live session data)
- [ ] Basic group thread (or Slack/GroupMe link as placeholder)

### Phase 2
- [ ] Practice Groups (recurring teams)
- [ ] In-app messaging
- [ ] Player ratings / reputation
- [ ] Mobile-optimized PWA

### Phase 3
- [ ] League listings + featured leagues (monetization)
- [ ] Field/facility partner integrations
- [ ] Stats tracking (session history, who you've played with)
- [ ] Payments / premium tier

---

## Tech Stack

| Layer | Choice | Rationale |
|---|---|---|
| Frontend | Next.js App Router + Tailwind + shadcn/ui | Beau's existing knowledge, fast to build |
| Database | Supabase (Postgres + Auth + Realtime) | Auth + DB in one, realtime for messaging later |
| Hosting | Vercel | ISR for city pages, Fluid Compute for API routes |
| Maps | Google Maps API | Session location picker + city page maps |
| Email | Resend | Join requests, approvals, reminders |
| Domain | New domain (not dugoutedge.com) | Separate product, separate brand |

---

## Monetization (Post-PMF)

Do not monetize until 1,000 active users across 3+ cities. Then:

| Tier | Price | What it unlocks |
|---|---|---|
| Free | $0 | Create/join sessions, basic discovery, 1 practice group |
| Pro | $9/mo | Unlimited groups, advanced filters, session history, priority in search |
| League listing | $29/mo | Featured placement on city pages, verified badge, roster tools |
| Field partner | Revenue share | Bookings through platform, calendar integration |

---

## Go-to-Market

1. **Beau uses it himself** — build the thing, use it in SF, find your own practice partners. This is the dog food phase.
2. **Dugout Edge audience** — email list / existing SEO traffic. Don't merge the products but use the audience to seed the first 500 users.
3. **Reddit** — r/baseball, r/weddingleague, r/adultbaseball (yes, it exists). Be a user first, not a promoter.
4. **City pages go live day 1** — SEO starts compounding from launch, not after PMF.

---

## Open Questions (for later)

- Domain name? (ballfind.com, practiceup.com, diamond.app, fieldmates.com — needs brainstorm)
- Softball too, or baseball-only to start? (softball has bigger recreational player base)
- How to handle private fields vs. public parks for session locations?
- Moderation: how to handle no-shows, fake profiles, skill level misrepresentation?
