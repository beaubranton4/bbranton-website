# Hats / Perfect-Fit — The Fit Engine: Data Strategy & MVP (2026-06-23)

Companion to [hats-perfect-fit.md](./hats-perfect-fit.md). Answers the operational question: *how do you actually build the fit-matching model — do you have to measure every hat, and how much fit data do you really need?*

## Core insight: it's a low-rank, measurable function — not a 100M-cell matrix

The naive plan ("10,000 hats × 10,000 people rate every fit") = **100,000,000 try-ons.** Impossible *and* unnecessary:
- **Fit is governed by ~8 physical dimensions, so the fit matrix is low-rank (~rank 8).** Low-rank matrices reconstruct from a tiny fraction of cells (matrix completion / Netflix-Prize result).
- **You can measure both sides** (head and hat), so this is **supervised regression** `fit = f(head_features, hat_features)`, not blind collaborative filtering. `f` has a few dozen parameters → needs **hundreds–low-thousands** of labeled fittings, not 100M (≈5 orders of magnitude less).
- **Most of fit is deterministic geometry, not taste** → you can start with physics and need data only to *calibrate*, not to *discover*.

## Do you measure every hat? No — measure every fit ARCHETYPE
A hat's fit ≈ **6 numbers**: circumference range · adjustability (fitted/snapback/flex/strap) · crown depth (low/mid/high or cm) · crown structure · opening oval (round/reg/long) · [brim = looks, not fit]. Same numbers → identical fit.
- **10,000 SKUs collapse to ~200–400 distinct blanks/patterns** (Richardson 112, Flexfit 6277, New Era 59FIFTY, Otto, AS Colour…). Measure the **blank once**, tag every SKU to it. Color/logo/brand don't change fit.
- Much is **already published** (size charts, low/mid/high profile labels, blank spec sheets) → ingest, don't re-measure.

## How fit is predicted: physics first, then calibrate
Head ≈ **5 numbers**: circumference · length × width (→ oval ratio) · crown rise · [ear height]. Rules:
- circumference ∈ hat range (× adjustability) → fits around
- hat crown depth ≥ head crown rise → **won't perch/float** (the core complaint)
- oval match → no side gaps / front-back pinch

Ship the **deterministic rules engine v0** immediately (nobody else encodes crown depth or oval, so even pure physics beats the market), then **learn the thresholds/coefficients** from labeled fittings (ordinal logistic or gradient boosting on ~8 features).

**Collect structured fit outcomes, not 1–5 stars:** *perfect / too-tall-perches / gaps-in-back / too-tight / oval-pinch* — far more learnable, maps onto the rules.

## The MVP: Beau's closet is the founding dataset
1. Measure Beau's head once (circumference, length, width, crown-rise proxy).
2. Measure his ~200–300 hats over a weekend (~6 numbers each, or just tag the blank).
3. Label each (fits / perches / gaps / too-tight — he already knows).

→ A **~300-row labeled training set centered on a real hard-to-fit head**, a working measurement protocol, and total dogfooding — before spending a dollar on inventory or scanning. Calibrate the rules on it → seed engine → wrap in the fit-finder → ship.

## The data flywheel (the moat)
- Every fit-finder user enters head dims + reports "fit / didn't" → labeled data at **$0 marginal cost.**
- The Reddit/YouTube cohort will send measurements + fit outcomes on request (they're desperate).
- Crowdsource hat dims (guided "measure your hat" flow) + ingest published size charts.
- If product is ever sold, **returns = perfectly-labeled fit-failure data.**

Each fitting sharpens a low-dimensional function → the model gets good fast and is uncopyable without the data. (Mirrors how True Fit / Fit Analytics / Bold Metrics built apparel fit prediction — feature models + modest labeled set + feedback, never brute force.)

## Honest caveats
- **Separate "fits" (geometry, solvable now, low data) from "looks good" (taste, personal, partly unsolvable).** Let users pick a style, then solve *fit* within it. Don't model taste early.
- **Crown rise on the head is the one hard measurement** (the phone-scan problem). v0 proxy: "do hats usually perch/float on you?" + profile photo → bucket low/std/high. Precision is long-term R&D, not a launch blocker.

## Build order
v0 rules engine (Beau's closet) → fit-finder tool collecting structured outcomes → calibrate model as data accrues → only later add latent/collaborative factors for the taste residual. The data, not the algorithm, is the moat.
