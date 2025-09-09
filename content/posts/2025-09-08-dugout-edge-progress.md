---
title: 'What I Learned Today'
date: '2025-09-08'
excerpt: 'Happy Bday Tiana. Here is what i learned today.'
---

I’m going to keep this one short—just reflecting on what I learned today. I made a lot of good progress on Dugout Edge and picked up some important lessons about running a SaaS product and collecting payments online through Stripe.

The first thing I finally wrapped my head around was webhooks. Before today, I honestly didn’t know what they were or how they differed from API calls. Now I understand: API calls are outgoing from my website—for example, when I send information to Stripe. Webhooks, on the other hand, are inbound from Stripe to my site. So, when a customer makes a payment, Stripe sends a webhook to my site, and my site updates the user’s subscription status in the database. That’s how I’m able to gate access to the platform.

I also learned more about automated tax collection. Taxes are based on the customer’s location, not my business’s, and Stripe has great functionality for automatically calculating this. You can also choose whether taxes are added on top of the product price or baked into it, which is an important consideration for pricing.

On top of that, I dug into how to protect against chargebacks and refund disputes. The key is having multiple points of proof: clear language on the checkout page about when users will be charged, email confirmations when trials start and reminders before they end, and even usage statistics showing that the product was actually used. All of these strengthen the case that the customer knowingly subscribed and got value.

Beyond Stripe, I’m also learning a lot about the plumbing of the Internet: how DNS works, how SMTP servers handle email, how forwarding functions, and how different companies monetize domains and custom emails. DNS is really just like the Internet’s phone book—pointing you to the right server where a website lives. Cool stuff, and a lot to take in.

And the best part of the day: I got my first free trial to convert to an annual subscription. Right now, I’m averaging a little over one active user conversion per day. That’s a great early signal. It’s got me thinking about whether I should consider raising the price or focus on adding more value. I’ve noticed a lot of people clicking on practice plan generators, even though it’s not available yet and I haven’t written an SEO article about it. That—or batting cages—will likely be the next thing I work on.