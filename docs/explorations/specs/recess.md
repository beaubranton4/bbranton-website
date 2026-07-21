# Recess — MVP Spec (landing(s) + waitlist)

**Repo (when built):** `~/projects/recess-sports/` · own git + Vercel
**Depth:** validation landing page(s) + waitlist. No functional matchmaking in v1.
**Status:** spec only. Build in a later batch on Beau's go.

## What it is

On-demand competitive sports — "jump into a real game as easily as an Xbox co-op match."
Two framings, two landing pages:

1. **Frictionless pickup (buildable path).** Skill-matched, real-time "there's a game
   near you in 40 min — request to join" — the gap the existing Recess research and the
   directory/league SEO plays leave open (they're casual or directory, not instant
   skill-matched matchmaking). This is the software wedge worth validating.
2. **Home simulation (vision only).** "Golf simulator / TrackMan, but for soccer and
   other sports at home." Greenfield, hardware, capital-intensive — a vision page that
   captures interest but makes no build promise.

## Validation metric

Waitlist signups segmented by **sport + zip** (density is everything for matchmaking) +
which framing draws more interest (pickup vs. simulator). Zip clustering tells us where
a first real pickup market could reach liquidity.

## Prior research to reuse (don't re-derive)

- `docs/explorations/loneliness-social-connection.md` — "Club OS" thesis, competitor
  tables (Volo, Strava, Pickleheads, ClubPal…), ARPU notes.
- `docs/superpowers/specs/2026-04-16-adult-baseball-platform-design.md` — the draft whose
  Flow A is literally the "jump into a game" concept.
- Keyword data: "adult soccer/basketball league near me" 5,400/mo KD **0**; "cage batting
  near me" 201,000/mo KD 0; pickup soccer/basketball near me KD 0 (`docs/keyword-research/`).

## Data model (Supabase)

- `waitlist (id, email, framing {pickup|simulator}, sport, zip, skill_level, created_at)`

## Key screens

Pickup landing (the co-op analogy, "how it works" in 3 steps, waitlist by sport+zip) ·
Simulator vision landing (the Topgolf-for-every-sport pitch, waitlist) · shared thank-you
that asks the one question that matters: "who would you play with, and where?"

## Reality check (carry onto the page's internal reasoning, not the copy)

The simulator is a hardware bet that violates Beau's self-funded-indie filter
(`baseball-training-robotics.md`). Treat the simulator page purely as a demand thermometer;
the frictionless-pickup software is the only near-term buildable venture of the two.
