---
title: 'Practice Planner Mistake and Goals'
date: '2025-12-11'
excerpt: 'Woke up early, still jet-lagged but getting good sleep. Accidentally released an unfinished practice planner feature on Dugout Edge about 12 days ago. Had to roll it back after a customer pointed out it wasn't working. Learning from the mistake and planning today's goals.'
---

Woke up early again this morning. Still a little bit jet-lagged, but honestly I do think I'm getting good sleep. I worked a bit on Dugout Edge first thing, and then woke up to some rude news: we accidentally released the practice planner on November 28th—so about twelve days ago. I got an email from my favorite customer, Sean Wyder, who very wisely pointed out that it wasn't working. Obviously it wasn't; it was a completely unfinished product.

I really hope not too many people saw it. Luckily it's the off-season, so I doubt many users are actively logging in. But anyone who visited the public page probably saw it. I had to roll it back, which wasn't too difficult with Cloud Code—took about an hour. Then I emailed Sean, thanked him, and that was that.

Mistakes like that are just part of the learning curve when building a little mini SaaS product entirely by myself. I'm not exactly sure how that one slipped into the main branch. I think I made an update on the practice planner and then later tried to cherry-pick some commits, so something must've crossed wires. I just need to be a little more careful. It's also a reminder of one of the big issues with building out a massive feature on a single branch. I probably need to rethink how I'm approaching that, because right now if I want to push a small production change, it becomes this awkward dance around the one giant branch that's holding all the in-progress work.

Goals for today: finish up the practice planner functionality, get in a 45-minute swim, get Fitness Caps up and running, and then also start the "spend my stipend" migration. I love having CloudMax planned. It makes me feel rich.


