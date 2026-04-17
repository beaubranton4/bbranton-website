# Project Audit Methodology (Big-Audit Playbook)

Use this when someone asks "where should I focus?" or "rank my TODO list by SEO opportunity" or "do a big research pass on my product ideas." It is the opposite mode from the default `dataforseo-research` skill — instead of one-call-one-answer, this deliberately spends ~$0.15–0.30 to generate a **ranked list + kill list + rollout plan** for an entire project.

Run this once at project inception and then roughly annually.

## When to use this

- New project, unsure what to build first
- Existing project with a long TODO/backlog, unsure what to prioritize
- Quarterly/annual re-prioritization — compare against the last audit to see what's moved
- Validating/killing speculative product ideas before building

Do **not** use for: routine keyword lookups, weekly content planning (use the content engine for that), or ad-hoc SERP checks.

## Inputs you need

1. The user's **TODO list / idea backlog** — paste into the conversation
2. **Target domain** (e.g. `spendmystipend.com`) — for later internal linking
3. **Audience one-liner** — who would type these searches
4. **Budget ceiling** — default $0.30, max $0.50

If any of these is missing, ask the user before spending any API credits.

## The 5-step method

### Step 1 — Cluster the ideas (no API)

Group the user's TODO items into 5–10 **semantic clusters** — tools they might build, content they might write, affiliate plays, infrastructure ideas, etc. Example clusters from the Dugout Edge audit:

- Scheduling / league admin
- Scorekeeping / stats
- Draft / lineup
- Simulator / game
- Swing / video analysis (player-facing)
- Equipment / affiliate
- Coach apps / content

For each cluster, pick **5–10 head-term seed keywords**. Head terms are short (2–4 words), commonly searched, and characteristic of that cluster. Avoid brand names unless the cluster is explicitly about a competitor.

**Target total seed count: 50–70.** Fewer and you miss opportunities; more and the single API call gets expensive.

### Step 2 — Broad `keyword_overview` sweep (1 API call, ~$0.05)

Fire ONE `dataforseo_labs/google/keyword_overview/live` call with all 50–70 seeds.

- Location: `United States` (or user's locale)
- Language: `en`
- Returns for each seed: `search_volume`, `keyword_difficulty`, `cpc`, `competition_level`, `main_intent`, yearly trend.

Save raw output to `docs/keyword-research/01-broad-head-terms.json` (gitignored).

**Parse and rank by an opportunity score:**

```
score = (search_volume / 1000) * (1 - keyword_difficulty/100) * intent_multiplier * cpc_multiplier
```

- intent_multiplier: commercial 1.5, informational 1.2, transactional 0.8, navigational 0.3, unknown 1.0
- cpc_multiplier: 1 + (cpc / 10), capped at 3.0

Keywords that come back with no data = DataForSEO has no record = effectively zero volume. Flag those as "dead phrasings" in the kill list.

### Step 3 — Drill-down on the top 2–3 clusters (2–3 API calls, ~$0.05)

For each of the top-scoring clusters from Step 2, call `keyword_suggestions/live` with the cluster's head term as seed, `limit: 100`, filter `search_volume > 30`.

This uncovers the long-tail cluster: every phrase that contains your seed, with volume, KD, CPC, intent.

Save each to a separate numbered file: `02-<cluster>-suggestions.json`, `03-…`, etc.

You're looking for:
- **Easy wins:** KD <15 phrases with non-trivial volume
- **Cluster depth:** how many related long-tails exist (a cluster with 20+ viable phrases is deeper than one with 3)
- **Intent purity:** does every long-tail match the intent you expected, or is it muddy (e.g. "baseball simulator" is split between NES games, physical cages, fantasy tools — KILL)
- **Competitor signal:** phrases like "X alternative," "is X free," "cheap X" — signal pricing friction with incumbents (strong conversion play)

### Step 4 — Confidence check (1 API call, ~$0.02, optional)

If some high-value phrases came back with no KD data, fire one `bulk_keyword_difficulty` call on 10-20 of them to get KD explicitly. Missing KD usually means either "too new" or "SERP is owned by big retailers/Amazon" — the latter being a red flag for affiliate plays.

### Step 5 — Write the ranked list (no API)

Save to `docs/keyword-research/SUMMARY.md` with this structure:

```markdown
# {{PROJECT}} — Ranked Opportunity List

**Date:** YYYY-MM-DD
**Research cost:** $0.XX across N calls (balance $X.XX remaining)
**Raw data files:** ...

## TL;DR — Build Two Things, Rank Everything Else
1. BUILD NOW: ...
2. BUILD NEXT: ...

## THE RANKED LIST

### 🥇 #1 — <Cluster name> (BUILD THIS FIRST)
[cluster volume, primary keywords table, why #1, monetization, TODO items it replaces]

### 🥈 #2 — ...
### 🥉 #3 — ...
[continue through #10]

## DO NOT PURSUE (evidence-backed)
[cluster | why skip, with specific vol/KD numbers]

## 8-Week Rollout Plan (Heads-Down, 1-2 bets only)
[Weeks 1-4: #1. Weeks 5-8: #2. Concrete deliverables per week.]

## Methodology / raw data
[Scoring formula, where raw files are, balance remaining, suggestions for next drill-downs]
```

The **kill list is as important as the winners.** It's the evidence the user needs to stop pursuing ideas that feel promising but have no search market.

## Output conventions

- Dated CSVs (one per API call): `YYYY-MM-DD-NN-<cluster>.csv` with columns `keyword, search_volume, keyword_difficulty, cpc, competition_level, competition, main_intent, low_top_of_page_bid, high_top_of_page_bid, trend_monthly_pct, trend_quarterly_pct, trend_yearly_pct, words_count`.
- Keep SUMMARY.md as the human-readable anchor.
- All files live in `docs/keyword-research/` — gitignored, never committed.

## Budget discipline — hard rules

- Hard ceiling: **$0.30 per audit** (confirm with user before going over)
- Check balance at the start: `npx tsx scripts/dataforseo.ts --get v3/appendix/user_data | grep balance` (or use `mcp__dataforseo__*` equivalent)
- If mid-audit spend hits $0.20, pause and report — no more drill-downs without user OK
- Never run a "maybe useful" extra call to polish output — filter and rank locally instead

## Worked example

The Dugout Edge audit that produced this template pattern:
- 59-seed broad sweep uncovered scorekeeping as the #1 cluster
- Drill-down on "baseball scorekeeping" found ~22k/mo cluster with KDs mostly <25, several <10
- Round-2 sweep (66 more seeds across communication, recruiting, affiliate, lessons) uncovered local-lessons directory as the surprise #2 cluster (~13k/mo, KDs 1-15)
- Total cost: ~$0.20 across 8 calls
- Output: `SUMMARY.md` with 10-item ranked list, 9-item kill list, 8-week rollout plan
- Result: user picked #1 (scorekeeping) and #2 (lessons directory) as the focus for the next 2 months, shelved ~15 other TODO items with evidence

See `../BOOTSTRAP_NEW_DOMAIN.md` for the full architecture.
