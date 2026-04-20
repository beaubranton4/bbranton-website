# Keyword Research Audit — AI / Data / B2B Ideas
**Date:** 2026-04-17  
**Source:** Apple Notes Ideas folder — p786 through p2156 (all notes read)  
**API calls:** 6 (sweeps A+B + 4 drill-downs, files 22–27)  
**Spend this session:** ~$0.215  

---

## TL;DR

One standout. Several honest dead ends. And a clear map of which ideas are "build and SEO" vs. "build and distribute on Twitter."

**Build 1 — MCP Server Directory.** The MCP (Model Context Protocol) ecosystem is exploding. 60,500 monthly searches for "mcp server," 481 total keywords in the cluster, 96 easy-win keywords at KD<20. Developers are searching for specific integration MCP servers ("supabase mcp server" KD 17, "postgres mcp server" KD 13, "cursor mcp server" KD 0) and nobody has built the definitive directory yet. This is "building for agents" in the most literal sense — MCP servers are how AI agents access tools and data.

**Build 2 — Vibe Coding Resource Hub / Tutorial Site.** "Claude code tutorial" has 1,900 vol CI 19 and $16 CPC. "How to use cursor ai" has 720 vol CI 21. "Autonomous ai agent" has 4,400 vol CI 3 and $24 CPC. The vibe coding community is searching for structured learning resources and the SERP is not locked. A hub that teaches vibe coding — tutorials, workflow guides, prompt libraries — can rank for dozens of these terms.

**The honest pre-search-volume section below:** Many of Beau's most forward-thinking ideas (agents hiring agents, marketplace for AI agents, software for AI agents, Neuralink context graphs) return zero search volume. This is not a failure — it's a map of where the market isn't yet. These are Twitter/developer community plays, not SEO plays. First-mover matters here but SEO is not the acquisition channel.

**Dead ends:** Financial data API (KD 71-94, Bloomberg/Refinitiv lock it), workflow automation (thin cluster, "zapier alternatives" is the right seed but dominated by Zapier itself), B2B affiliate platform (0 searches), trading algorithm builder (0 searches).

---

## RANKED OPPORTUNITIES

---

### #1 — MCP Server Directory (BUILD THIS FIRST IN AI SPACE)

**Cluster:** mcp_server  
**Total cluster size:** 481 keywords (200 analyzed)  
**Easy wins (KD<20, vol>200):** 96  
**Commercial gems (CPC>$5, KD<30):** 78  
**Source files:** 24-mcp-server.csv

```
     vol   kd      cpc  keyword
  -----------------------------------
  60,500   55    $7.32  mcp server              (head term, KD 55 — hard)
   9,900 null   $21.17  git mcp server           ← null KD
   5,400   17    $3.21  what is an mcp server    ← KD 17
   4,400   26    $3.41  what is mcp server
   2,400    9   $16.48  playwright mcp server    ← KD 9
   2,400   18    $2.38  mcp server meaning       ← KD 18
   1,900   18    $6.15  what is a mcp server     ← KD 18
   1,600    9    $3.42  slack mcp server         ← KD 9
   1,600   24    $9.42  awesome mcp server
   1,300   19    $0.00  azure mcp server         ← KD 19
   1,000   13    $9.28  postgres mcp server      ← KD 13
   1,000    0   $13.30  cursor mcp server        ← KD 0
   1,000   18   $24.44  context7 mcp server      ← KD 18
   1,000   17   $47.08  supabase mcp server      ← KD 17, $47 CPC
   1,000   16   $19.52  snowflake mcp server     ← KD 16
   1,000   11    $9.28  postgresql mcp server    ← KD 11
   1,000   16    $5.62  best mcp server          ← KD 16
   1,000   16   $25.52  claude code mcp server   ← KD 16
```

**The opportunity:** MCP (Model Context Protocol) is Anthropic's open standard for connecting AI agents to external tools and data. Every major developer tool now has or is building an MCP server — Supabase, GitHub, Slack, Postgres, Snowflake, Figma, Jira, Playwright. Developers using Claude Code, Cursor, and other AI coding tools need to find, evaluate, and install these servers. There is no authoritative directory.

This is "building for agents" made concrete — MCP servers ARE the infrastructure that agents use to access the world. A directory that lists, categorizes, rates, and documents every MCP server serves both the agent ecosystem and the developers who configure it.

**The SEO play:** 96 easy-win keywords (KD<20) including every tool-specific variant: "supabase mcp server" (1k vol, KD 17), "postgres mcp server" (1k vol, KD 13), "slack mcp server" (1.6k vol, KD 9), "cursor mcp server" (1k vol, KD 0). For every new tool that releases an MCP server, you add a page. The directory grows with the ecosystem.

**Product:** `/mcp-servers/supabase`, `/mcp-servers/github`, `/mcp-servers/postgres`, etc. Include: install instructions, capability docs, user ratings, example prompts. Make it the `npmjs.com` of the MCP ecosystem.

**Revenue model:**
- Sponsored listings: MCP server publishers pay for featured placement ($99-499/mo)
- Consulting/setup: Help companies build their own MCP servers (productized service, $2-10k/project)
- Premium developer tools: Advanced search, capability comparison, private MCP server hosting

**Why now:** MCP is 6 months old. The ecosystem is forming. Whoever builds the directory in the next 90 days owns the SEO before KDs rise. This is the same timing bet as "batting cage near me" was for sports — except the market is developers, the monetization is B2B, and the ceiling is higher.

---

### #2 — Vibe Coding Resource Hub (CONTENT + TOOLS, SEO PLAY)

**Cluster:** vibe_coding_resources  
**From sweep A — key signals (CI = Google Ads competition index):**

```
     vol   ci      cpc  keyword
  -----------------------------------
  60,500   20    $6.41  mcp server          (overlaps with #1)
  22,200   27    $8.80  model context protocol
   5,400    9   $23.74  claude mcp
   4,400    3   $24.60  autonomous ai agent ← CI 3!
   3,600    7   $65.01  workflow automation tool ← CI 7, $65 CPC
   2,900    0   $18.02  ai pair programmer  ← CI 0!
   2,400   16   $27.77  ai agent platform
   1,900   19   $16.15  claude code tutorial ← CI 19
   1,300    2   $61.11  no code automation platform ← CI 2, $61 CPC
   1,300   25   $13.66  ai agent framework
     720   21    $5.85  how to use cursor ai
     720   19   $19.88  ai tools for developers
```

**The opportunity:** "Autonomous ai agent" has 4,400 monthly searches and CI 3 (virtually no Google Ads competition) at $24.60 CPC. "Ai pair programmer" has 2,900 searches and CI 0. "Claude code tutorial" has 1,900 searches and CI 19. "No code automation platform" has 1,300 searches and CI 2 with $61 CPC.

The vibe coding tutorial/learning market is real and mostly uncaptured. YouTube has some content. Blog posts are fragmented. Nobody has built the structured learning hub — the "Rails Tutorial" equivalent for AI-assisted coding.

**Product types:**
- Tutorial site with structured learning paths for vibe coding (Claude Code, Cursor, Windsurf)
- Prompt library / swipe file for agent workflows
- Tool reviews and comparisons ("best MCP servers", "cursor vs claude code")

**Note:** We already know "vibe coding" (110k vol) and "cursor ai" (110k vol) have CI 45 — Anthropic, Cursor, and big tech dominate those. The opportunity is in the long-tail learning content and specific tool integrations. Position as "vibe coding for builders who want to ship" — not a beginner resource, a practitioner resource.

---

### #3 — AI Automation / No-Code Automation (CONTENT PLAY, THIN CLUSTER)

**From sweep A + workflow automation drill-down:**

```
     vol   kd      cpc  keyword
  -----------------------------------
   3,600   49   $65.01  workflow automation tool  (head term KD 49)
   1,300    2   $61.11  no code automation platform ← CI 2!
     480   25   $25.81  ai workflow automation tool
     260    9    $5.72  what is an example of a workflow automation tool ← KD 9
```

**Reality check:** "Workflow automation tool" drill-down returned only 9 keywords — the seed is too specific. The real cluster lives under "zapier alternative" (we didn't drill this but it has large volume with incumbents like Make, n8n, Zapier competing). This space is real but dominated: Zapier has 100M+ users, Make and n8n are VC-backed.

**The angle:** "no code automation platform" has CI 2 and $61 CPC — which means companies like Zapier pay heavily per click but organic competition is low. A content site reviewing and comparing automation tools could rank for these terms. Not a platform to build — a comparison/review site to write.

---

### #4 — Text to SQL / Natural Language Analytics (EARLY MARKET, THIN NOW)

**From sweep B + text-to-sql drill-down:**

```
     vol   kd      cpc  keyword
  -----------------------------------
     720   38    $7.03  text to sql           (head term, KD 38)
     720   23   $10.89  text-to sql
     590   15    $0.00  sql convert text to date ← KD 15
     590   14    $0.00  convert text to date sql ← KD 14
     140   23   $11.33  text to sql llm        ← commercial signal
      90   15   $17.62  text to sql agent      ← KD 15, $18 CPC
      90   19   $13.18  text-to-sql agent
```

**Reality check:** The "text to sql" cluster returned only 21 keywords, most of which are SQL syntax questions (how to convert text to date in SQL), not AI analytics tool searches. Volume is thin. The AI-specific variants ("text to sql llm", "text to sql agent") have <200 vol each with KD 15-23 — accessible but tiny.

**Prognosis:** This market exists but hasn't fully developed search language yet. The people building text-to-sql products are mostly developers who discover tools through GitHub, Hacker News, and Product Hunt — not Google search. In 2-3 years this cluster will be much larger. Watch for the right entry point; don't build for SEO now.

---

### #5 — Financial Data API (DO NOT PURSUE FOR SEO)

**From sweep B + financial data api drill-down:**

```
     vol   kd      cpc  keyword
  -----------------------------------
   1,300   72   $26.71  financial data api   ← KD 72
     390   71   $25.59  api for financial data
      70   94    $7.25  financial data api free  ← KD 94!
      50   28   $15.80  yahoo financial data api  ← only KD 28, 50 vol
```

**Kill with evidence:** KD 71-94. Bloomberg, Refinitiv, Alpha Vantage, Polygon.io, and Yahoo Finance own this SERP completely. Nobody enters this market from a standing start via SEO. The product is valid (Beau has solid ideas in this space from notes p926, p882) but the distribution is developer communities, direct B2B outreach, and HackerNews — not Google.

---

## PRE-SEARCH-VOLUME IDEAS (Too early for SEO — different distribution)

These are Beau's most forward-thinking ideas. They return zero or near-zero search volume because the market hasn't developed the vocabulary to search for them yet. This is the "1995 question" — nobody searched for "e-commerce platform" in 1995 but that didn't mean the opportunity wasn't there.

For these ideas, **SEO is not the acquisition channel.** The right channels are:

| Idea (from notes) | Note | Vol | Distribution |
|---|---|---|---|
| Agents hiring agents | p2102 | 0 | Twitter/X, developer Discord, build in public |
| Software for AI agents (not humans) | p2051 | 0 | Hacker News, developer newsletters |
| MCP marketplace / agent marketplace | p2106 | 0 | Build the directory (#1 above) |
| Context graphs for Neuralink | p2070 | 0 | Long-form essay, thought leadership |
| Platform where agents build open source | p2061 | 0 | DAO/crypto communities |
| Train LLM on your own decision-making | p2064 | 0 | AI research community, Twitter |
| Infrastructure that determines output format | p2126 | 0 | Developer blog, GitHub |
| AI for Alzheimer's patients | p2063, p2084 | ~50 | Health/aging conferences, direct outreach |
| Vibe trading (natural language trading bots) | p2057 | 0 | Fintech Twitter, quantitative trading communities |

**The key insight from note p1971:** "Whoever owns or licenses niche, verified datasets controls the supply chain of the future. Agents will talk to other agents without humans in the loop." This is almost certainly true — but the market isn't searching for "niche data api" yet (confirmed: 0 vol). The opportunity exists; the SEO path doesn't.

**Recommended approach for pre-search-volume bets:**
1. Write the thought leadership content (essays, Twitter threads) — this attracts early adopters
2. Build in public — document the journey, which creates an audience before the SEO arrives
3. Watch Google Search Console — when organic impressions start appearing for these terms, that's the signal the SEO window is opening

---

## Dead Ends (with evidence)

| Idea | Seeds tested | Vol | Why skip |
|---|---|---|---|
| B2B affiliate marketing platform | b2b affiliate marketing platform | 0 | Market doesn't search for this |
| SaaS referral marketplace | saas referral marketplace | 0 | 0 volume |
| Niche data API | niche data api, data api provider | 0 | 0 volume |
| Replace Tableau with AI | replace tableau with ai | 0 | 0 volume — people search "tableau alternative" instead |
| Trading algorithm builder | trading algorithm builder | 0 | 0 volume on this phrasing |
| No-code trading bot | no code trading bot | 10 vol | Market doesn't search for this |
| Dataset marketplace | dataset marketplace | 30 vol | Too thin, Kaggle dominates |
| AI analytics platform | ai analytics platform | 140 vol, KD 12 | Interesting but thin |
| Natural language BI | natural language bi | 10 vol | Too early |

---

## Cost Summary

| File | What | Seeds | Keywords | Cost |
|---|---|---|---|---|
| 22-ai-sweep-a.csv | Vibe coding, agents, MCP, automation | 39 | 39 | $0.075 |
| 23-ai-sweep-b.csv | Data, finance, trading, analytics | 35 | 35 | $0.075 |
| 24-mcp-server.csv | MCP server cluster | 1 seed | 200/481 | $0.030 |
| 25-text-to-sql.csv | Text-to-SQL cluster | 1 seed | 21 | $0.012 |
| 26-workflow-automation.csv | Workflow automation cluster | 1 seed | 9 | $0.011 |
| 27-financial-data-api.csv | Financial data API cluster | 1 seed | 7 | $0.011 |
| **Total** | | | | **$0.214** |
