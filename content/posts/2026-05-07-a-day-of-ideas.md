---
title: 'A Day of Ideas'
date: '2026-05-07'
excerpt: 'Spent the day chasing five ideas with Claude — phone-based journaling, an AI wallet, an AI data analyst, eBay + agentic commerce, and the one that stuck: the literacy crisis'
---

May 7, 2026

Spent most of today sitting with Claude and chasing ideas. I wanted to get a real read on a handful of things rolling around in my head — not just hand-wave about them, but actually pull data and look at the search demand, the competitive landscape, the pain points. By the end of the day five threads were sitting in front of me, and one of them was clearly different from the others.

## The journaling-from-my-phone problem

This started practically. I want to be able to record these journal entries while I'm on a walk, dictate into my phone, and have an agent clean them up the same way Claude does in this repo and save them automatically. Right now I have to be in front of my laptop to do this, which means most of the thoughts I have on walks never get captured.

Three options came out of it. The cheapest is to just dictate into Apple Notes and use the import flow I already have wired up — it just means the cleanup happens later, when I'm back at my computer. The most ambitious is an iOS Shortcut that records audio, transcribes it, POSTs the transcript to a Vercel function, and the function calls the Claude API and commits the markdown straight to this repo. No laptop required. Probably a half-day build. The middle option is just using claude.ai/code on my phone with a copy-pasted transcript.

I'll start with Apple Notes for now and graduate to the Shortcut + Vercel function once I'm sure the workflow has staying power.

## AI wallet — interesting, narrow market

The other practical idea: an AI that knows your credit cards, picks the right one for each scenario, and burns down your statement credits before they expire. The $10 Uber, the $10 Grubhub, the $50 airline incidental.

Tools exist for the tracking version of this — MaxRewards, CardPointers, AwardWallet — but nobody has built the *agentic* version. Nobody has built an AI that actually books your DoorDash on the right card to use the right credit, or notices the cycle is ending and proactively places the order for you. That layer is the unsolved one.

The search data was telling. The category demand is gigantic — 200,000+ monthly searches for "credit card rewards." But product-concept demand is tiny — maybe 100/mo for "maximize credit card points." That's the classic latent-demand pattern. People want the outcome but they don't search for the product by name. So you can't acquire users via SEO; you'd need a different distribution wedge.

It's a real problem and a hard build for a narrow audience. Could be a wedge into a bigger personal financial agent product down the road. Not the move for today.

## AI data analyst

This one hits closer to home — I am a data analyst. The cluster around "will AI replace data analysts" is huge. "AI tools for data analyst" is up 86% YoY, 136% QoQ. The fear and the buying intent are converging, and the CPCs ($12-$21) are telling you money is flowing in.

The general-purpose lane is full — Hex, Mode, Julius, Hebbia, plus Claude and ChatGPT eating the long tail. The vertical lane is wide open. The wedge for me wouldn't be "another AI data analyst" — it would be a vertical-specific one I actually understand. Sports analytics. Customer feedback. SMB owner who has no analyst at all. The kind of thing I see at UserTesting and at Dugout Edge.

Filed it. Not the one for today either, but the angle of "AI for analysts, not replacing them" is real and someone like me — anxious, capable, in the seat — is exactly the buyer.

## eBay + agentic commerce

This one I went deeper on, because Stripe Sessions had me thinking about agentic payments and eBay kept coming back as the most interesting marketplace for an agent to operate in. The catalog is structured. The sold-history is the only real demand-price data on the public internet. The reseller workflow is brutally manual.

The data confirmed the hunch. "eBay reseller" is up **238% year-over-year** — the audience tripled in twelve months. "ebay sold listings" pulls 12,100 monthly searches at a $9 CPC, and "how to find sold listings on eBay" pulls $53 CPC because *people can't even figure out how to use the eBay site to look up prices.* Sports card sold-listings searches are up 2,500% YoY.

There are five pain clusters: sourcing ("what should I flip"), pricing research ("what's it worth"), vertical-specific listing pain (every category has different rules), beginner workflow pain, and the agentic gap (almost zero search volume for "AI eBay tool" — meaning the buyer doesn't yet have the language for what they want).

The wedge that keeps coming back: a "What's it worth on eBay?" mobile app. Point your camera at an item, get the sold-comp answer, hit a button to list it. Use it to acquire the reseller audience cheaply, then upsell into a vertical reseller agent (sports cards is natural for me) or an end-to-end pro reseller agent. The data layer you build for the wedge is the same data layer that powers the agentic checkout play down the road, when ChatGPT and Claude need real-time price-discovery infrastructure to buy on behalf of users.

This one I'm keeping warm. It's the most concrete, with the clearest wedge, in the most well-understood market.

## And then the literacy thing

But the idea I can't stop thinking about is the one that started as an offhand comment to Claude.

I said something like: "Teaching people how to read and reason and think and speak and write is even more important than it was in the past, now that the primary mode of building, creating, and all this sort of other stuff has to be communicated via natural language as opposed to coding or C++."

And the more I sat with it, the more I think that's the most important macro shift happening right now, and the data lined up.

The numbers are bad. **130 million American adults read below a sixth-grade level.** Twenty-eight percent read below a *third-grade* level — up nine points since 2017. The 2025 NAEP showed reading scores at their lowest point since the early 1990s. One-third of 8th graders scored below NAEP Basic, the highest percentage ever recorded. The PISA 2022 reading drop was twice the previous record — and the OECD said it's not just COVID, it's structural. The decline started a decade earlier.

Critical thinking is the same story. 45% of US college students show no significant gains in critical thinking, complex reasoning, or writing over four years of college. And the AI-era research is starting to come in: 17–25 year olds show *higher* AI reliance and *lower* critical thinking scores. Researchers are now talking about something called "first-draft thinking" — students using AI to generate the first thought, then editing instead of generating their own.

This is the divide. It's forming right now, and it's forming exactly in the cohort that should be building the strongest reasoning skills.

Here's what I keep coming back to: the leverage of clear thinking just went up. Ten years ago, the people who could code C++ built the products. Now the people who can *describe what should be built clearly* build the products. The interface to every tool is converging on natural language. A poorly-worded prompt gets a poor output. A precisely-reasoned prompt gets a great one. The skill differential between a good prompter and a bad one is 100x — and that differential is the same as the skill differential between a good writer and a bad writer.

So literacy + reasoning + writing aren't soft skills anymore. They're the new engineering skills.

And the search data backs it up. The "critical thinking exercises" cluster pulls **301,000 monthly searches at a keyword difficulty of essentially zero.** People are actively trying to *practice* critical thinking, not just learn what it is. The market is screaming for this and nobody is building the modern, AI-augmented version.

The wedge I find most interesting: an AI tutor that *resists you.* Every other AI does the opposite — it writes for you, drafts for you, completes your sentences. The contrarian product is one that won't write your first draft, but instead Socratically forces you to articulate your own thinking before it helps. A daily critical-thinking app, the way Duolingo is a daily language app. A reading-comprehension agent that picks an article and only lets you move on if you've actually understood it.

I don't know yet whether this becomes a content play, a consumer app, a B2B education tool, or all three. But this is the one that resonated with me at a different level than the others. The eBay idea is good business. This one is good business *and* something I'd actually be proud to build.

## What I'm taking from today

Five threads, one obvious favorite. The literacy idea ties back to my YC RFS ethos, to the digital twin vision (a database of me requires me to actually be able to *write* clearly), and to the reframing that came out of Stripe Sessions — that I am an entrepreneur, that this is the time to push and not rest. It also ties back to something more personal: I started doing these journal entries because writing my thoughts down forces me to actually have them. I'm noticing the difference in my own thinking. I want to help other people notice it too.

The other ideas aren't dead — they're documented, they're filed, and the next time one of them clicks I'll come back to them. But today's bet is the literacy one. Tomorrow I want to start by writing down the simplest version of what an "AI that won't write your first draft" actually looks like in practice. A landing page. A single mock interaction. Something I can show.

It's been a while since I had a day of ideas this dense. Felt good. Feeling like I'm starting to see the shape of what I should be building, not just the noise around it.
