---
description: {{PROJECT_NAME}}-specific weekly content pipeline. Runs the full 4-phase flow (discovery → scoring → competitive analysis → article generation) using {{PROJECT_NAME}} seed keywords, target site, competitors, and voice. Trigger with "run the content engine", "weekly content run", or "write an SEO article for {{PROJECT_NAME}}". For one-off keyword/SERP questions, use the generic `dataforseo-research` skill instead — do NOT run this full pipeline.
---

# Keyword Content Engine ({{PROJECT_NAME}})

{{PROJECT_NAME}}-specific version of the weekly content pipeline. For generic DataForSEO queries (one-off keyword lookups, ad-hoc SERP checks), use the `dataforseo-research` skill — this skill is only for the full pipeline.

## Defer to the generic skill for:

- How to pick endpoints (`keyword_suggestions` vs `keyword_ideas` vs `serp/organic` vs `ranked_keywords`)
- Seed selection rules
- Cost discipline
- Output format conventions

This skill layers **{{PROJECT_NAME}} specifics** on top of that.

## {{PROJECT_NAME}}-specific configuration

**Target site:** `{{TARGET_SITE}}`
**Locale:** `{{LOCALE}}` (e.g. en-US → location_code 2840, language_code en)
**Competitors:** `{{COMPETITOR_1}}`, `{{COMPETITOR_2}}`, `{{COMPETITOR_3}}`
**Audience:** {{AUDIENCE_DESCRIPTION}}
**Voice:** {{VOICE_DESCRIPTION}}
**Content home:** `{{CONTENT_HOME}}` (e.g. `content/blog/` or `content/articles/`)

**Seed keyword starter pack** (use if no `seeds.json` exists):
```
{{SEED_KEYWORD_1}}
{{SEED_KEYWORD_2}}
{{SEED_KEYWORD_3}}
{{SEED_KEYWORD_4}}
{{SEED_KEYWORD_5}}
{{SEED_KEYWORD_6}}
{{SEED_KEYWORD_7}}
{{SEED_KEYWORD_8}}
```

**Kill list** (clusters to skip — dominated by incumbents or off-brand):
- {{KILL_LIST_ITEM_1}}
- {{KILL_LIST_ITEM_2}}
- {{KILL_LIST_ITEM_3}}

Persist seeds and run history to:
- `scripts/keyword-research/seeds.json` (editable, commit)
- `scripts/keyword-research/published.json` (dedup log, commit)
- `scripts/keyword-research/last_run.json` (gitignored)

Create these lazily only when the pipeline first runs.

## Pipeline — 4 phases

```
Phase 1: Keyword Discovery    → raw keyword list         ~$0.03
Phase 2: Scoring & Filtering  → ranked opportunities     ~$0.01
Phase 3: Competitive Analysis → top pick validated       ~$0.02
Phase 4: Content Generation   → draft article            $0.00
                              Total target: ≤$0.10
```

### Phase 1: Discovery (1 API call)
- Endpoint: `keyword_suggestions/live` (preferred — returns phrases containing the seed, which is what real readers search).
- Use up to **3 seeds** per run, picked from `seeds.json`. Prioritize seeds not used in the last 14 days (see `last_run.json`).
- Filter: `search_volume > 50`, `keyword_difficulty < 35`.
- Limit: 200 per seed.
- Dedupe across seeds. Exclude keywords already in `published.json`.

### Phase 2: Scoring & Filtering (0 API calls, or 1 if intent missing)
- Drop keywords matching the **kill list** above.
- Drop kw's <3 words (too competitive).
- Score: `(vol/1000) * (1 - kd/100) * intent_multiplier`. Intent multipliers: informational=1.2, commercial=1.5, transactional=0.8, navigational=0.3.
- Take top 15.

### Phase 3: Competitive Analysis (1-2 API calls)
- For top 5 by score, call `serp/google/organic/live/regular` (one batch request), top 10 results each.
- Assess: domain authority, content type, freshness, gaps in existing results.
- If competitors listed above have data: one `ranked_keywords` call per competitor (limit 200) to spot gap opportunities.
- Pick the winning keyword: high score + weak SERP (small sites, thin content, outdated) + competitor gap bonus.

### Phase 4: Content Generation (0 API calls)
Generate a full article for `{{CONTENT_HOME}}<slug>.{{CONTENT_EXTENSION}}` (e.g. `.mdx`, `.md`):

- **Title:** 50-60 chars, includes target keyword naturally.
- **Meta description:** 150-160 chars, includes target keyword.
- **Word count:** 1,500-2,500 (match or exceed top competitors).
- **Structure:** H2/H3 outline incorporating secondary keywords; open with a relatable scenario for {{AUDIENCE_DESCRIPTION}}; close with an actionable takeaway.
- **Internal linking:** suggest 2-3 links to other {{PROJECT_NAME}} content or tools.
- **Tool embed:** if the topic naturally connects to a {{PROJECT_NAME}} tool or product page, suggest where to embed.
- **Voice/brand rules:**
  {{BRAND_RULES}}

**SEO checklist before finalizing:**
- [ ] Target keyword in H1 (title)
- [ ] Target keyword in first 100 words
- [ ] Target keyword in ≥1 H2
- [ ] Secondary keywords used naturally (1-2 each, no stuffing)
- [ ] Meta description written
- [ ] Internal links noted
- [ ] At least one image/diagram/table suggestion

## Run logging

After each run, append to `last_run.json`:
```json
{
  "date": "YYYY-MM-DD",
  "seeds_used": [...],
  "keywords_evaluated": 0,
  "winning_keyword": "...",
  "estimated_cost": "$0.XX",
  "article_file": "{{CONTENT_HOME}}<slug>.{{CONTENT_EXTENSION}}"
}
```

Append winning keyword + title to `published.json` to prevent future cannibalization.

## Cost ceilings (hard)

- Max per-run spend: **$0.50** (target $0.10)
- Max seeds per run: 3
- Max limit per call: 200
- Never loop an endpoint without a bounded count
- If cost exceeds $0.25 before Phase 3, pause and report

## Usage examples

- "Run the content engine" → full 4-phase run.
- "Find me top 10 keyword opportunities this week" → Phases 1-3, skip article gen.
- "Write an article targeting '{{EXAMPLE_TARGET_KEYWORD}}'" → skip Phases 1-2, quick SERP check, go to Phase 4.
- "What keywords does {{COMPETITOR_1}} rank for that we don't?" → Phase 3 competitor-gap portion only.

---

## Template variables reference

Fill these in when copying this template into a new project's `.claude/commands/`:

| Variable | Example (from Dugout Edge) |
|---|---|
| `{{PROJECT_NAME}}` | Dugout Edge |
| `{{TARGET_SITE}}` | `dugoutedge.com` |
| `{{LOCALE}}` | `en-US` (location_code 2840, language_code en) |
| `{{COMPETITOR_1..3}}` | `gamechanger.io`, `teamsnap.com`, `baseballpositive.com` |
| `{{AUDIENCE_DESCRIPTION}}` | volunteer youth baseball coaches with limited experience |
| `{{VOICE_DESCRIPTION}}` | authoritative but approachable — founded by a former Stanford baseball player |
| `{{CONTENT_HOME}}` | `content/articles/` |
| `{{CONTENT_EXTENSION}}` | `mdx` |
| `{{SEED_KEYWORD_1..8}}` | youth baseball drills, little league practice, coaching youth baseball, ... |
| `{{KILL_LIST_ITEM_1..3}}` | equipment queries (cleats/bats/gloves) — use `/audit-articles` instead; TeamSnap-clone ideas (KD 90+); etc. |
| `{{BRAND_RULES}}` | - No emojis. - No `--` or `—` in copy (AI content marker). - Navy/tan brand language, no colored gradients. |
| `{{EXAMPLE_TARGET_KEYWORD}}` | youth baseball batting order strategy |
