# Data / AI Tooling Cluster

## Verdict (2026-05-21)

**Mixed cluster — one clear winner, two clear losers, one decent niche.** The honest read:

- **WINNER: AI/LLM pricing tools.** "openai api pricing" at 8,100/mo, **KD 10, CPC $16**. "openai codex pricing" growing **+2,536% YR**. High commercial intent, huge CPC, fast-growing category. Vendor-comparison tools in this space have real ad revenue and lead-gen value.
- **LOSERS: Cron expression + regex tester.** Both have real volume but **declining 45–55% YR** because LLMs in chat now do this work instantly. ChatGPT writes your cron, your regex, explains both. The category is being eaten exactly as the thesis predicts.
- **DECENT NICHE: CSV editor.** 880/mo at KD 10, real CPC ($6–$10), stable. Small but defensible — file-handling utilities ChatGPT can't do natively.
- **NOT VALIDATED: prompt template library, AWS/GCP cost comparator, embedding/vector DB cost calc.** Worth a future pull, but the AI/LLM pricing winner above probably covers most of the same audience.

**Can the SEO wedge work here? Partially.** The AI/LLM pricing angle is genuinely strong and growing. The traditional dev-tool wedges (cron, regex) are too late — LLMs have closed that arbitrage window.

**Recommended build order:**
1. **LLM pricing comparator / calculator** — high CPC, growing fast, low KD
2. **CSV editor / cleaner** — small market but defensible
3. **Skip cron/regex tools** — declining demand, LLMs killed them

## Keyword research — full data

> Raw data: see `data/data-ai_*.json`

### LLM / AI pricing (the winner)

| recent | reported | cpc | kd | yr% | mo% | intent | keyword |
|---:|---:|---:|---:|---:|---:|---|---|
| 6,700 | 8,100 | **$16.01** | **10** | — | +23 | commercial | **openai api pricing** |
| 5,466 | 6,600 | $10.56 | 34 | -33 | +22 | commercial | openai pricing |
| 2,400 | 1,000 | $24.94 | **13** | **+2,536** | +21 | commercial | openai codex pricing |
| 1,800 | 1,600 | $18.54 | 31 | -33 | -16 | commercial | openai models pricing |
| 1,700 | 1,600 | $20.60 | 20 | +19 | — | commercial | openai model pricing |
| 1,000 | 1,300 | $7.20 | 12 | -47 | — | commercial | azure openai pricing |
| 913 | 390 | — | 58 | — | -84 | commercial | openai gpt-5 api pricing |
| 833 | 320 | **$119.24** | 53 | — | +82 | commercial | openai gpt 5 api pricing |
| 426 | 390 | — | 12 | +182 | — | commercial | azure openai service pricing |

**Read:** This is the cleanest commercial-intent cluster in the entire portfolio. CPC of $16–$119 (yes, $119 on "openai gpt 5 api pricing") = enterprise advertisers are paying real money to reach this audience. KD 10 on the core term. "openai codex pricing" growing **+2,536% YR** — that's a category emergence, not a fluke.

**Wedge candidates:**
- **LLM API pricing calculator** — pick model + monthly token estimate → cost projection across OpenAI, Anthropic, Google, Azure, Bedrock
- **Model comparison tool** — paste a prompt, see cost + latency across providers
- **Token estimator** — count tokens for any text (separate small page, owns the long-tail)
- **Budget alert tool** — track your actual usage vs. projection (premium feature)

**Monetization:** This audience is solving "should I use OpenAI or Anthropic for X?" — perfect for affiliate (Anthropic/OpenAI signup links via referral programs), API key sales (resellers like OpenRouter, Helicone), or own-product lead-gen (cost tracking SaaS like Helicone, Langfuse).

### Cron expression cluster (the loser — declining)

| recent | reported | cpc | kd | yr% | intent | keyword |
|---:|---:|---:|---:|---:|---|---|
| ~5,400 | 6,600 | $46.59 | 55 | **-45** | informational | cron expression |
| ~5,400 | 6,600 | $46.59 | 55 | -45 | informational | cron job expression |
| ~5,400 | 6,600 | $6.40 | 55 | **-33** | informational | cron-expression |
| ~1,300 | 1,600 | $11.39 | 55 | -46 | informational | cron expression builder |
| ~1,300 | 1,600 | $11.39 | 28 | -46 | informational | generate cron expression |
| ~1,300 | 1,600 | $5.99 | 28 | -55 | informational | cron expression generator |
| ~1,300 | 1,600 | $5.99 | 28 | -55 | informational | cron expression maker |
| ~880 | 1,000 | — | 55 | -45 | informational | cron expression translator |
| ~320 | 320 | — | **2** | -33 | transactional | every 5 minutes cron expression |
| ~320 | 320 | — | **5** | -33 | informational | cron job expression every 5 minutes |
| ~260 | 260 | $10.18 | 42 | **-64** | informational | aws cron expression |
| ~110 | 110 | $5.38 | **1** | -35 | informational | salesforce cron expression |

**Read:** The category is dying. **-33% to -64% yearly across every variant.** Why? Because ChatGPT, Claude, and Cursor all generate cron expressions on demand — nobody needs crontab.guru anymore. The KD 2/5 long-tails ("every 5 minutes cron expression") still have volume because people Google a specific question, but even those are -33% yearly.

**Verdict:** Skip. Even if you ranked #1 on "cron expression" tomorrow, the audience is shrinking by half every 12–18 months. **The LLM-eats-the-tool problem is real for syntax-translation tools.**

### Regex tester cluster (the loser — same pattern)

| recent | reported | cpc | kd | yr% | intent | keyword |
|---:|---:|---:|---:|---:|---|---|
| 18,100 | 22,200 | **$11.24** | 31 | **-55** | informational | regex tester |
| 1,000 | 1,600 | $4.09 | 31 | -58 | informational | regex online tester |
| 1,000 | 1,600 | $4.09 | 49 | -58 | informational | online regex tester |
| 1,000 | 1,600 | $4.09 | 36 | -58 | informational | web regex tester |
| 960 | 1,300 | $7.00 | 32 | **-63** | informational | regex tester online |
| 390 | 590 | $11.51 | 44 | -56 | informational | regex java tester |
| 390 | 590 | $11.51 | 44 | -56 | informational | regex tester java |
| 366 | 590 | $12.20 | 55 | -64 | informational | python regex tester |

**Read:** Same story as cron, even more dramatic. **-55% to -64% YR across the cluster.** "regex tester" went from massive to "declining fast" because LLMs explain regex inline. Regex101.com still owns the SERP but their traffic is presumably dropping. CPC is still real ($4–$12) because dev-tools advertisers haven't moved their budgets yet, but they will.

**Verdict:** Skip. Same LLM-killable pattern as cron.

### CSV editor cluster (the decent niche)

| recent | reported | cpc | kd | yr% | intent | keyword |
|---:|---:|---:|---:|---:|---|---|
| 880 | 880 | $6.21 | 16 | -12 | transactional | editor csv |
| 880 | 880 | $9.24 | **10** | -12 | transactional | csv editor |
| 320 | 390 | $6.55 | — | -33 | informational | csv editor online |
| 320 | 390 | $6.55 | **1** | -33 | transactional | online csv editor |
| 170 | 140 | $4.43 | 17 | — | informational | csv editor free |
| 170 | 140 | $4.43 | 27 | — | informational | freeware csv editor |
| 170 | 140 | $10.69 | 15 | -18 | informational | free csv editor |

**Read:** Small but stable. **880/mo at KD 10, CPC $9.** "online csv editor" at KD 1. The reason this survives the LLM-killable filter: you can't paste a 50,000-row CSV into ChatGPT, but you can drag-drop into a tool that processes it client-side.

**The pattern that wins here:** browser-side file processing (no upload, no server cost, no privacy concerns). Same shape as cleancss.com, json-formatter.io, image compressors.

**But:** the absolute volume is small. ~2,500/mo total cluster. Best as one tool in a bigger "data utility" portfolio (CSV cleaner + JSON viewer + XML formatter + base64 converter etc.), not a standalone venture.

## Competitive landscape

### LLM pricing space (the winner — emerging, not owned)

| Player | What they do | Gap |
|---|---|---|
| **OpenAI pricing page** | Their own | Doesn't compare to competitors |
| **Anthropic pricing page** | Their own | Same |
| **Helicone, Langfuse, LangSmith** | Observability + cost tracking | B2B, post-deploy; not the "I'm planning a project" buyer |
| **Tokenizer.io / OpenAI tokenizer** | Token counting | Single-purpose, ugly |
| **Reddit / X posts** | "Which model should I use" | Subjective, not a tool |
| **YouTube comparisons** | Same | Not searchable |

**Gap:** A clean, modern, *multi-provider* pricing calculator that takes "I want to send 10M tokens/month split 70/30 input/output across GPT-5 / Claude Opus 4.7 / Gemini 2.5 Pro" → outputs total cost + latency comparison. Could include affiliate signup links. Could expand into a cost-tracking SaaS later.

### Cron/regex space (the losers — incumbent moats but declining)

| Player | What they do | Why we can't beat them and shouldn't try |
|---|---|---|
| **Crontab.guru** | The single best cron explainer | Built years ago, owns the SERP, but its traffic is presumably dropping fast |
| **Regex101** | The single best regex tester | Same |
| **Cron-job.org, Easycron** | Hosted cron services + builder | B2B, different audience |
| **Regexr** | Regex tester | Same as Regex101 |

**Honest read:** Both crontab.guru and regex101 are *good products that nailed the SEO years ago.* They have backlinks, age, and brand. The 2026 problem isn't beating them; it's that the audience itself is going away. Don't fight last decade's war.

### CSV editor space (sleepy)

| Player | What they do | Gap |
|---|---|---|
| **Modern CSV** (desktop app) | Paid CSV editor | $30 one-time, desktop only — no web flow |
| **CSVed, EmEditor** | Old paid editors | Dated UX |
| **Google Sheets** | The "good enough" answer | Heavy, requires Google account, choke on 100k+ rows |
| **OnlineCSVTools** | Free web tools | Owns some of the SERP but ad-heavy, no auth |
| **csvviewer.com** | Free CSV viewer | Same — utility, not a brand |

**Gap:** A browser-first, no-upload, modern-UI CSV utility (drag-drop → clean → export). Build cost: a weekend.

## Can the SEO wedge work here?

**For LLM pricing tools: yes, and it's growing.**
- KD 10 on the core term + CPC $16 + +2,536% YR on adjacent terms = textbook emerging-category SEO setup
- Build effort: 1–2 weeks for a v1 calculator with affiliate links
- Defensibility comes from being early — the category is being formed *right now*
- Monetization is real (affiliate, lead gen, premium tier)

**For cron/regex tools: no, the window closed.**
- KD low but **trend negative** — the audience is leaving
- LLMs in chat literally do this work instantly
- Even if you ranked top-3, the absolute volume is shrinking
- Skip

**For CSV editor and similar file-utility tools: maybe, as part of a bigger portfolio.**
- Small individual volume but stable
- LLM-resistant (client-side file processing)
- Best as 1 of 5–10 tools on a single utility site, not standalone

## Build playbook for the LLM pricing winner

**Phase 1 (1–2 weeks):** LLM API cost calculator
- Inputs: model dropdown (GPT-5, Claude Opus 4.7, Gemini 2.5 Pro, etc.), monthly input tokens, monthly output tokens, expected RPS, optional fine-tuning
- Outputs: monthly cost per provider, side-by-side comparison table, "switch to X to save $Y" recommendations
- Domain: `llmcost.dev` or `aipricecalc.com` (something brandable)
- SEO targets: "openai api pricing," "openai pricing," "claude api pricing," "anthropic pricing," "openai vs claude pricing"

**Phase 2:** Token estimator (separate page) — paste text, see tokens per provider
**Phase 3:** Model comparison tool — paste a prompt, see cost + speed across providers
**Phase 4:** Premium tier — track actual usage vs projection (Helicone-lite)

**Monetization mix:**
- Affiliate signup links to OpenAI/Anthropic/Google referral programs
- API resellers (OpenRouter, Helicone) — likely high CPC affiliate
- Sponsored placement for newer providers (Mistral, Cohere, DeepSeek) trying to get attention
- Eventual paid tier ($10–30/mo) for usage tracking + alerts

## Open questions

- Is the LLM-pricing-calculator buyer the same person as the "I'm running a real production LLM workload" buyer (Helicone, Langfuse)? If yes, that's a direct path from free tool → paid SaaS.
- Does the category get crushed when OpenAI/Anthropic launch first-party comparison tools? (Probably not — they have no incentive to compare themselves to competitors fairly.)
- Worth a separate validation pull on "ai cost calculator," "claude api pricing," "anthropic pricing"?
- The "embedding model + vector DB cost calculator" sub-idea (item 93 in top-ideas) is adjacent — pull data on that next?

## Sources

- DataForSEO API calls (2026-05-21) — raw data in `data/data-ai_*.json`
- General knowledge of dev-tools and LLM-tooling competitive landscape

*Session cost on this cluster: ~$0.04*
