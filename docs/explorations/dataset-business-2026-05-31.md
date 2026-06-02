# Datasets as a Business — Exploration (2026-05-31)

**Status: original idea KILLED. Two narrow survivors parked, not built.**

## The seed idea (as floated)

> A database of free datasets, made accessible to the public via AI agents — so non-technical people can query/analyze public data without skills or downloading.

## Why the general version dies

Run against the [guiding-principles](./guiding-principles.md) three rules and the six-filter checklist:

- **LLM-unkillable (#2): FAIL.** This is the "AI data analyst" pattern — explicitly on the do-not-build list. Frontier models with code execution + web access already point-and-analyze public data. You'd be building a feature the platforms are absorbing into the base model.
- **Pain proximity (#5): FAIL.** Beau is a Stanford-trained data analyst who ships in Claude Code — the *least* pain-proximate person for "non-technical people can't analyze data." This is pain *adjacency*, not proximity.
- **Clear funnel: WEAK.** "Free datasets" is SEO-saturated and low-intent (students/researchers wanting *training data to download*, not buyers). Incumbents own it: Google Dataset Search, Kaggle, HuggingFace, data.gov.
- **Margin trap.** Free data + free-expecting users + per-query inference cost = costs scale with usage, WTP ≈ $0.
- **The hard 80% is curation, not access.** Public data is a swamp (stale, mislabeled, schema-mismatched). An agent confidently analyzing dirty data is a hallucination liability. The "make it agent-accessible" part is the easy 20%.

**The reframe that survives:** don't build "AI for free data." Build **"a clean, agent-callable API over one specific gnarly dataset I personally need."** The value is the *maintained pipeline*, not chat. That's the Resend pattern ([frameworks.md](./frameworks.md)) applied to data.

## The real question: where is data actually painful, and for whom?

Data is a business only when it's **fragmented / fresh / trapped (behind portal-PDF-login) / enriched / trusted.** A clean free download is never a business. Walked three audiences against that bar:

### Solopreneurs
Structural hole: **cheap, high-churn buyer** ($10–50/mo ceiling) — collides with the ARPU-ambition filter. Don't build *for the broke indie hacker*.
- Standout angle: **clean, agent-callable datasets as infrastructure for programmatic-SEO / directory builders.** Picks-and-shovels for the pSEO trend Beau already rides; deterministic; Resend pattern; dogfoodable across his own portfolio.
- Others (validation data = ChatGPT-killable; lead-gen = crowded/not his lane; review-mining = decent volume play; distribution-channel DB = bigger TAM but cheap audience + hard to keep fresh).

### Youth coaches
Structural hole: **volunteers, low individual WTP.** Most "needs" are *features of a coach OS* (Dugout Edge already owns this), not standalone datasets. Buyer with money = the *parent* or the *org*, not the coach.
- Strongest data asset: **age-band development norms** (genuinely fragmented, no clean youth source) — powers a coach-facing benchmark *inside Dugout Edge* + a parent-facing "is my kid on track?" upsell off the same data. ⚠️ Anxiety query ≠ buyer query — verify the parent converts.
- Pitch-count/rest rules → deterministic safety feature *inside* gameday tracking (already on ideas-list). Bat compliance → thin lead-magnet slice. Opponent/tourney → trapped + owned, skip.

### Baseball players / fans
- **Pro data is a trap** — Statcast/FanGraphs/BBRef are free and `pybaseball` already wraps them. ChatGPT-and-code-killable.
- **Amateur recruiting/performance data is the swamp = the opportunity.** Perfect Game / PBR / NCAA commits / state HS PDFs — fragmented, trapped, fresh-decaying, no clean agent-callable layer. Parents spend $thousands; high ARPU; flows into Dugout Edge's coach audience. ToS risk on the trapped sources is the main hole; lean on legally-aggregable + user-contributed data.

## Empirical pass (DataForSEO, 2026-05-31) — this decided it

Tested the solopreneur "data-infra for pSEO/directory" angle, which is the one with no existing distribution channel to fall back on:

```
   vol  | comp   | cpc    | trend        | keyword
   880  | LOW    | $10.07 | DECLINING ↓↓ | programmatic seo (2400→720 over 12mo)
   90   | MED    | $6.76  | flat-down    | how to build a directory website
   70   | MED    | $28.27 | flat-down    | directory website builder
   20   | LOW    | —      | flat         | seo dataset
   ~0   | —      | —      | —            | programmatic seo data
   ~0   | —      | —      | —            | data for programmatic seo
   ~0   | —      | —      | —            | dataset for directory site
   ~0   | —      | —      | —            | data for directory website
   ~0   | —      | —      | —            | scrape data for seo
   ~0   | —      | —      | —            | free datasets api
```
Cost: ~$0.01

**Verdict:** the specific buyer queries for a "data layer for directory/pSEO sites" have **essentially zero search demand.** Nobody searches "where do I get data for my directory site." And the parent term `programmatic seo` is **declining hard** (2400→720 in 12 months) — hits the anti-pattern *"low KD on declining trend = trap."* The clear-funnel rule **FAILS for a search funnel.** A dev-infra product would have to grow on community/content distribution — a different, unproven muscle for Beau (noted in [frameworks.md](./frameworks.md)).

## Bottom line

- **General "free datasets via AI" → killed.** Three filters fail; it's on the do-not-build list.
- **Solopreneur data-infra → parked.** No search funnel + declining parent trend. Only revisit if pursued as a dev-community/dogfood play, not a tool-SEO play.
- **The two genuinely pain-proximate, high-ARPU survivors are both baseball:**
  1. **Amateur recruiting/performance data** as a clean, agent-callable API (B2B → academies/orgs/recruiters; parent upsell).
  2. **Youth development norms** as a data moat *inside Dugout Edge* (coach benchmark + parent "on-track?" report).
  Both ride existing distribution (Dugout Edge) and escape the cheap-buyer trap via the parent/org as payer. Next validation step if pursued: DataForSEO on recruiting-data + "youth baseball averages by age" demand — and specifically test whether the parent anxiety query is *buyer-grade* or just anxiety.
