# Guiding Principles — The Holy Grail Filter

**Verdict: load-bearing.** Every idea in this folder must pass these three rules. If it can't clear all three, archive it.

These are the rules I keep coming back to. Before building anything — before even doing the keyword research — run the idea through this filter.

## The three rules

### 1. It has to solve a problem I am very, very intimate with

Not a problem I've read about. Not a problem I've theorized about. A problem **I have personally lived through, encountered, or am living right now.**

Pain proximity is the unfair advantage. If I'm not the user, I'm guessing. If I am the user, I already know:
- What the workaround looks like (because I've done it)
- What the existing solutions get wrong (because I've tried them)
- What "good" actually feels like (because I'd pay for it tomorrow)

**Test:** Can I describe the last time I had this problem, in vivid detail, without making anything up?

### 2. It has to have a clear path and marketing funnel

I will not build a great product nobody finds. The distribution story has to be obvious before I write a line of code. One of three things must be true:

- **Viral content potential** — the product itself, or the content around it, is inherently shareable
- **Extremely low competition** on Google or YouTube — a keyword cluster or topic nobody's seriously occupying, where I can rank with reasonable effort
- **Extreme tailwind** — people are *already* searching for this solution in volume. I don't have to create demand. I just have to get eyeballs on what I built.

**Test:** Can I name the specific keyword, channel, or content loop that brings the first 1,000 users? If the answer is "I'll figure out marketing later," it fails.

### 3. It has to be something I actually care about and am passionate about

This is the staying-power rule. Ventures take years. Boredom kills more startups than competition does.

This overlaps heavily with rule #1 — if it's my own problem, I almost always care. But the inverse isn't true: I can care about things that aren't my problem (and shouldn't build those), and I can have problems I don't care enough about to grind on for a decade.

**Test:** Would I still want to work on this on a Sunday when nobody's paying me? In year three when growth is flat?

## How to use this doc

When evaluating any new idea in this folder:

1. Open the idea file
2. Score it 1 / 2 / 3 against the rules above (pass / partial / fail)
3. If it doesn't pass all three cleanly, write down which rule it's failing and why
4. Either fix the gap (sharpen the problem, find the funnel, confirm the passion) or archive it

This filter is upstream of the [six-filter checklist in the README](./README.md). Those filters are about *which problems are worth solving with tool-SEO/take-rate economics*. These three are about *whether I'm the right person to solve this problem at all*.

---

## Operating principles (below the line)

Once an idea clears the three rules above, these are the recurring patterns I keep coming back to. Less "should I build this?" and more "how do I not screw it up?"

### A. Validate empirically before building, not theoretically

Brainstorms are theoretical. Keyword data is empirical. They disagree more often than I expect.

The 2026-05-21 validation pass completely reshuffled the Tier 1 ranking — FIRE went from middle-of-the-pack to #1, eldercare went from "obvious top pick" to OUT, and the renovation project manager looked great until the data said the category is declining. Every one of those reversals would have wasted weeks of build time.

**Rule:** No build commitment before one DataForSEO call. Raw data goes in `docs/explorations/data/YYYY-MM-DD/`.

**Watch out for:** viral spikes inflating the 12-month average. Always check the monthly breakdown. (See literacy-crisis post-mortem.)

### B. Bias toward clusters, not single tools

Every winning idea so far has had a cluster behind it — FIRE has 23 sub-tools, home ownership has 21, fitness has 12. A single tool is fragile (one Google update away from zero). A site of 10 tools under one brand compounds: shared SEO authority, shared email list, shared character.

**Rule:** When evaluating an idea, immediately ask "is this one tool or a cluster?" If it's a cluster, name the brand and 3–5 starter tools before building the first one.

**Test:** Can I write a one-paragraph "About" page that covers 5+ tools under a unified identity?

### C. Dogfood first — build it while I'm in the problem

The FIRE runway calculator is the cleanest example: I'm literally weighing the quit decision right now, so the MVP gets built *for me* and shipped as a side effect. Same with the renovation cost calculator (active SF house project) and the wedding tools (Feb 2027).

**Rule:** First user is always me. If I'm not going to use it this week, the timing is wrong — either the pain is too far away or the product isn't sharp enough.

**Test:** What's the input I'd type into the tool today?

### D. Take-rate pricing > subscription when the value is countable

Rocket Money, Stripe, Vercel all win the same way: customer pays nothing until value is delivered, then the platform takes a slice. Joe (the AI finance agent) was designed around this — 20–25% of captured value, not $9.99/mo.

**Rule:** If the tool delivers a measurable dollar outcome (savings captured, refund recovered, lead converted), default to take-rate pricing. Subscription is the fallback for tools where the value is harder to quantify.

**Why it wins:** Aligns incentives, removes friction at signup, ceiling is much higher than any monthly plan.

### E. Honest competitive read — name who already ships it

Pine AI ships the Joe playbook. Google Health Coach launched 2026-05-19. Bankrate has a 200k-backlink moat on refi calculators. Pretending these don't exist doesn't make the wedge any wider.

**Rule:** Before building, write the one-line honest answer to "who would the user pick instead, and why am I sharper than them?" If the answer is "I'll figure that out later" or "they don't really do what I do" without specifics, the wedge isn't real yet.

**Wedge patterns that have worked:** narrower niche (cutting/GLP-1 vs. generic fitness), character/personality brand (Joe vs. Pine), specialist surface (Chrome extension where Google won't compete).

### F. Speed is a strategic asset — Claude Code ships in days

The whole tool-SEO thesis only works because shipping costs are near-zero. A 1–2 week MVP costs me a weekend and ~$50 of inference. The question is no longer "is this worth building?" — it's "is this worth building *next* over the other 99 ideas?"

**Rule:** Default to shipping the smallest viable wedge of a cluster, then layering tools. Don't over-design the brand or the funnel before the first tool exists in the wild.

**Anti-pattern:** spending 3 weeks "planning the portfolio" when 3 weeks of shipping would have produced 2 live tools and real data.

### G. Don't shy away from competition — competition is validation

The flip side of rule E. *Naming* competitors honestly is not the same as *being scared off* by them. An empty market is usually empty for a reason — nobody's figured out how to monetize it, or the pain isn't real enough to pay for. Competitors prove the buyer exists and is reachable.

Pine AI shipping the Joe playbook doesn't kill Joe — it proves the agent-takes-action category has buyers. Google launching a Health Coach doesn't kill the wellness brand — it confirms the demand is generational. Bankrate dominating refi calculators doesn't mean refi tools don't work — it means the lead value is high enough to fund 200k backlinks.

**Rule:** When I notice myself thinking "this market is too crowded, skip it," stop and flip it: "this market has paying customers; what's the wedge?" The right reaction to competition is sharpening the angle, not retreating.

**Test:** Can I name a specific axis (niche, personality, take-rate pricing, surface area, speed-of-iteration) where I beat each named competitor? If yes, build. If no, the wedge needs more work — not the idea itself.

### H. Anti-patterns I keep almost falling into

A short list of failure modes I've already learned, written down so I don't pay tuition twice:

- **Confusing anxiety queries with buyer queries.** "Will AI replace data analysts" is anxiety. The traffic is real, but the buyers aren't. Anxiety = content site, not tool site.
- **Building what ChatGPT answers cleanly in chat.** If a 4-input freeform answer is good enough, I lose to the default LLM tab. Tools win when the output has *structure* the chat UI can't render.
- **Mistaking "low KD" for "viable."** Low KD on a *declining* trend (renovation project manager, -32% YR) is a trap — the category is being eaten by something else.
- **Theorizing about markets I'm not in.** Eldercare felt obvious but I'm not the buyer — adult-child caregivers search informationally, not for tools. Pain proximity is not the same as pain *adjacency*.
- **Adding a tool for a problem I don't actively have.** If the answer to "when did I last hit this?" is "never" or "a long time ago," the tool is for someone else — and rule #1 (pain proximity) fails.

## Related

- [README.md](./README.md) — the six-filter checklist + active build candidates
- [top-ideas.md](./top-ideas.md) — the full thesis and brainstorm pool
