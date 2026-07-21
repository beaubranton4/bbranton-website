# Fit-Finder — MVP Spec (functional tool)

**Repo (when built):** `~/projects/fit-finder/` · own git + Vercel
**Depth:** functional tool (not a landing page) — the tool *is* the validation.
**Status:** spec only. Build in a later batch on Beau's go.

## What it is

A tool that tells someone which hats will actually fit their head — matching on the
axes the whole industry ignores (crown depth + head shape), not just circumference.
Affiliate-monetized; every use quietly builds the proprietary fit dataset (the moat).

## Validation metric

Quiz-completion rate + affiliate-click-through rate. Secondary: fit-profile emails
captured, and labeled fit rows accumulated (dataset growth).

## The engine (deterministic v0 — no ML yet)

Three rules, in order (per `hats-fit-engine-2026-06-23.md`):
1. Circumference ∈ hat's size range (× adjustability).
2. Hat crown depth ≥ head crown rise → won't perch/float (the core unmet complaint).
3. Oval match (long / regular / round) → no side gaps or front-back pinch.

Inputs (~5 head numbers): circumference; length × width (→ oval ratio); crown-rise
**proxy** ("do hats usually perch/float on you?" + optional profile photo → low/std/high);
optional gender/style filter. Outputs: ranked list of specific hats that fit, each with
brand, price, why-it-fits note, affiliate link.

## Data model (Supabase)

- `brands (id, name, slug, fit_philosophy, affiliate_program, url)`
- `hats (id, brand_id, name, slug, style, circ_min_cm, circ_max_cm, crown_depth_class {low|std|high}, oval_fit {long|reg|round}, adjustability, price, affiliate_url, fit_notes, blank_ref)`
- `fit_profiles (id, email, circ_cm, length_cm, width_cm, crown_pref, gender, created_at)` ← moat seed
- `fit_outcomes (id, fit_profile_id, hat_id, outcome {perfect|perches|gaps|too_tight|oval_pinch}, created_at)`

**Seed:** don't measure every SKU — ~10k SKUs collapse to ~200–400 blanks (Richardson
112/115, Flexfit 6277, New Era 59FIFTY, Otto). Measure the blank once, tag SKUs to it.
Founding dataset = Beau's ~300-hat closet, each rated by wearing it.

## Key screens

Measure (guided) → Results (ranked fits + affiliate) → Save profile (email) → optional
"rate a hat you own" (data flywheel). Plus SEO tool pages — real search demand here:
`hat size chart` 33,100/mo LOW, `how to measure head for hat` 2,900/mo LOW,
small-head cluster ~25,300/mo.

## Stack

Next.js App Router + Tailwind + Supabase + Vercel ISR (programmatic tool/SEO pages).
Matches the `programmatic-seo-site` skill pattern.

## Not in v1

Phone crown-depth scan (Stage 2 — hardest input, prototype separately); learned
coefficients (add once labeled data accrues); any physical product.
