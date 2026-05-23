# AI Compute Bottlenecks — Notes on Dwarkesh × Dylan Patel

Source: [Dwarkesh Podcast — Dylan Patel: Deep dive on the 3 big bottlenecks to scaling AI compute](https://www.dwarkesh.com/p/dylan-patel) (March 13, 2026, ~2.5 hours)

Full transcript saved on Dwarkesh's site. Below is a plain-English breakdown plus an opportunities map for someone entering the space with little prior knowledge.

---

## The big picture in one paragraph

The world is spending **~$1 trillion in 2026** on AI compute infrastructure. Almost all of it flows through a supply chain that looks like a pyramid: **GPUs at the top → chips fabbed by TSMC → made on machines from ASML → using memory from SK Hynix, Samsung, Micron**. Every layer of this pyramid is sold out, and the next 5 years will be defined by **who locked in capacity early** and **where the bottleneck moves next**. The bottleneck has rotated annually — packaging (CoWoS) in 2024, power in 2025, and by 2028–2030 it lands at **ASML**, the Dutch company that makes the EUV machines that print modern chips. ASML can only make ~70 of these machines per year, growing slowly to ~100 by 2030, and each one costs $300–400M. Three and a half EUV machines produce the chips for one gigawatt of AI data center, which itself costs ~$50B to build. The whole AI economy ultimately rests on a tiny pile of $1.2B of European optics tooling per gigawatt.

---

## The three bottlenecks

### 1. Logic (chips themselves)
- **TSMC fabs the chips.** Nvidia has secured **~70%+ of TSMC's 3nm wafer capacity** through 2027 by signing contracts earlier and more aggressively than Google or Amazon.
- TSMC prefers giving allocation to **CPUs (Graviton, AMD's stuff)** over AI chips because CPUs are a stable market. Nvidia "won" by being non-cancelable, signing early, paying deposits.
- Why Google got squeezed: they were late to AGI-pill. Then "Nano Banana" and Gemini 3 broke their consumer numbers loose in Q4 2025, they panicked, went to TSMC asking for more — got told "sorry, we're sold out."
- **Anthropic sold itself short.** Dario was conservative ("I don't want to go bankrupt"), so they signed less. OpenAI signed everything they could. Now Anthropic is buying compute on the spot market through Bedrock / Vertex / Foundry revenue shares — paying a 50% markup vs. OpenAI's locked-in prices.
- **The economic surprise**: an H100 from 2023 is *worth more today* than it was three years ago. Because we're in a compute-limited world, GPU value is set by the value of the models running on it (GPT-5.4 generates 10x more value per H100-hour than GPT-4 did).

### 2. Memory (HBM, DRAM, NAND)
- **30% of Big Tech's 2026 CapEx is going to memory.** That's ~$180B *just on memory.* Most people miss this.
- HBM ("High Bandwidth Memory") is stacked DRAM glued to the side of each GPU. It takes 3–4x more wafer area than commodity DRAM, so every GB used in AI displaces 3–4 GB of consumer memory.
- **What this means for consumers**: phone and PC memory prices are tripling. iPhones likely go up $150–250 next cycle. Mid-range/low-end smartphone volumes are projected to fall from 1.4B/year (recent past) to **500–600M/year next year**. Xiaomi and Oppo are already cutting low-end volumes in half.
- Memory fabs take 2 years to build, and nobody built new ones in 2022–2024 because prices were too low. So real new supply doesn't arrive until **late 2027–2028**.
- Why you can't just use cheap DRAM: bandwidth, not capacity, is the binding constraint. HBM moves ~2.5 TB/s per stack vs. ~128 GB/s for DDR5 in the same physical space. Twenty times slower kills the economics.

### 3. Power (and the chips that pattern them: ASML)
- Power was the loudest bottleneck of 2025. It's being solved with gas turbines, behind-the-meter generation, deals on powered land, and turbine deposits 3–4 years out. Solvable with money.
- The *real* long-term bottleneck is **ASML**, the Dutch company that makes the EUV lithography machine that prints features at 3nm and below. It is "the most complicated machine humans make at any volume."
- ASML makes ~60–70 machines/year today, ~100/year by 2030. **Each gigawatt of AI data center needs 3.5 EUV machines.** So the global ceiling for AI compute by 2030 is roughly 200 GW of new annual deployment — if 100% of EUV went to AI (it doesn't).
- ASML's choke-point sub-suppliers: **Cymer** (the laser source, San Diego), **Carl Zeiss** (the optics, Germany, <1,000 specialized employees). These companies are not AGI-pilled — they're scaling for 60→100 tools/year, not the 200–300/year that AGI demand would imply.
- China is trying to indigenize this stack (DUV by 2030 plausible, EUV "working but not at scale"), and there's a real **timeline-divergence bet**: fast AI timelines → US wins; slow timelines (10+ years) → China wins because their vertically integrated supply chain catches up.

---

## The economic logic — why every number compounds

- $1.2B of ASML tools → enables a $50B gigawatt data center → which produces maybe $100B of AI value per year.
- Nvidia turning $1 of TSMC CapEx into multiples of revenue ($160B annualized off a small slice of TSMC's $100B 3-yr CapEx).
- The whole supply chain has **time-lagged whip effects**: Anthropic / OpenAI know they need X compute. Nvidia builds X − 1. TSMC builds X − 1. Memory makers build X − 2. ASML's sub-suppliers build for 2x today's volume, not 10x. This lag is *the* alpha — the people who see further ahead lock in the contracts.

---

## Where the opportunities are for someone entering with little knowledge

The "obvious" plays (buy Nvidia, buy TSMC) are priced in. The interesting opportunities for a small operator / investor / builder come from the **second-order effects** of the bottlenecks. Six angles, ordered by how accessible they are:

### Tier 1 — Accessible to anyone with capital and patience

**1. The picks-and-shovels equities that are NOT Nvidia.**
The cleanest non-consensus play. Dylan repeatedly names companies that have margin and pricing power but aren't household names:
- **ASML (ASML)** — Dylan says they're "the most generous company in the world." They have monopoly pricing power they refuse to use. If/when they finally raise prices, the math is enormous.
- **Carl Zeiss SMT** — privately held / via Zeiss Holding; harder to access but worth tracking.
- **Applied Materials (AMAT), Lam Research (LRCX), KLA (KLAC)** — process tool vendors, all expanding capacity.
- **Cymer** — owned by ASML, but a name to know.
- **Victory Giant (Chinese PCB)** and other PCB names — Nvidia's PCBs come from China; the supply chain is fragile here.
- **Broadcom (AVGO)** — designs Google's TPU and many other custom chips. Quietly one of the biggest beneficiaries.
- **CoreWeave, Nebius, Oracle (OCI)** — "neoclouds" that locked in compute early. Margin profile is huge if AI demand persists.
- **SK Hynix, Micron, Samsung** — the memory triumvirate. Memory cycle just turned hard.

What to read: SemiAnalysis newsletter (Dylan's own — paid but the best source), then map each name to the role he gives it in the supply chain.

**2. Memory equities specifically.**
30% of Big Tech CapEx going to memory means **Micron, SK Hynix, Samsung memory** are the most direct beneficiaries. Memory has historically been a brutal cycle business — but Dylan's argument is *this cycle is structurally different* because new fabs take 2 years and no one built them. Tight supply through at least 2028.

### Tier 2 — Requires some technical depth or industry access

**3. Consumer-electronics arbitrage / "memory squeeze" trade.**
If iPhones rise $150–250 and smartphone volumes drop 40%, who wins?
- **Refurb / used electronics resellers** — when new prices spike, refurb premium grows. Connects to your eBay reseller idea: phones with 12+ GB RAM become disproportionately more valuable.
- **PC component aftermarket** — RAM/SSD price spikes mean used parts get re-monetized.
- **Storage / NAS for consumers** who get priced out of cloud.

**4. "Slow inference" as a product category.**
Dylan dismisses Claude Slow because nobody wants it. But agentic background tasks (research overnight, scheduled jobs) genuinely don't need low latency. The compute economics for a "Claude Slow" tier should improve 4–5x. A startup that wraps slow models for batch/async jobs (overnight research agents, batch document processing, async coding agents) could undercut interactive tools by an order of magnitude.

**5. AI-first reseller / ops tooling for the consumer electronics squeeze.**
If 800M fewer phones get sold next year, the secondary market gets very interesting. This is directly your eBay agent thesis — sports cards aren't the only category whose comps are about to dislocate. **Consumer electronics with high-RAM specs** (mid-tier flagship phones, gaming laptops) are about to see used-market price inflation. A "what's it worth on eBay" tool that catches this trend wins.

### Tier 3 — Bigger bets / requires conviction

**6. Conviction trades on long China timelines.**
Dylan says US wins on short timelines, China wins on long. If you genuinely believe AGI is 7–10 years away (not 2–3), the asymmetric trade is on Chinese semis: **SMIC, Naura, AMEC, YMTC equivalents**. He cautions this is hard to access and the data is murky. Pass unless you have specific expertise.

---

## Three things to actually do with this knowledge

1. **Pick 5 of the names above and track them weekly.** Read their earnings calls. The supply chain is on a 6–12 month news cadence; if you watch ASML, Micron, and CoreWeave for a year, you'll understand more than 95% of people commenting on AI.

2. **Subscribe to SemiAnalysis (free tier first, then paid).** Dylan's research *is* the data the hyperscalers buy. The free articles alone make you smarter than most fund managers on this topic.

3. **Recognize what game you're not in.** You're not going to fab a chip. You're not going to compete with Nvidia. But the second-order effects — memory squeeze, consumer-electronics dislocation, slow-inference products, picks-and-shovels equities — are wide open.

---

## Why this episode was hard to follow

Three reasons it's confusing on first listen:
- Dylan references companies (CoWoS, Cymer, Carl Zeiss, Hynix, NScale, Fluidstack) without explaining them, because his audience already knows.
- The whole conversation operates at the **economic mechanism level** (margin, depreciation, allocation, time-lag) not the product level.
- Most of the names are upstream B2B suppliers, not consumer brands you'd recognize.

The trick to re-listening: every time he names a company, mentally place it on the pyramid (Lab → Hyperscaler → Cloud → Chip → Fab → Memory → Tooling). Once the pyramid is clear, the conversation makes sense.
