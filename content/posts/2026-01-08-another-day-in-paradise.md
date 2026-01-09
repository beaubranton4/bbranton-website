---
title: 'Another Day in Paradise'
date: '2026-01-08'
excerpt: "Manager mentioned team at risk of layoffs due to merger - the fifth or sixth time I've gone through this. Fixed a Dugout Edge production bug, figured out my golf grip, and thinking about preserving myself in AI."
---

Another day in paradise. Today my manager said that our team was at risk of layoffs due to the merger. Just another day at my company. This is about the fifth or sixth time I've gone through this and I've survived every time, so honestly, not a phase at this point.

Spent a lot of time working on Dugout Edge again today. Got an email from my favorite customer - and I really truly mean this, my favorite customer - Sean. He pointed out that the public version of the practice planner was not working. The issue was that I had created some changes in the premium version of the practice planner to select a template so that premium users could select from previously created practice plans. And I unknowingly pushed this into production. It was supposed to be in my development branch, but I made the fix to basically clean up the fact that premium users had access to the public practice planner. So I gated that, but unknowingly created the new branch from the premium practice planner branch that I was working on. So that's how those changes got leaked into production, which is just totally my fault. I need to be more cognizant of when I do make a new branch, which is obviously the correct best practice, I need to ensure that I copy the main branch, or really just the correct branch.

In any case, finally going to push those changes in about five to ten minutes, fix those things, and then I can start working on the premium version of the practice planner. I also need to add better drills, tune the algorithm a little bit better, and create better practice plan templates for users. Hoping to do that in the next week or so.

Had a fun day of golf with Jake. At The Villages I think I finally figured out the golf grip on my clubs. I go with the 10 finger grip because my pinky's just a little bit too tiny. But basically, externally pronating my right wrist a little bit more than usual, being more underneath the club so that my thumb isn't pushed as far down. I don't have the extended thumb. This way my thumb can kind of just be a short thumb. That really helped out and I think I figured that out and be athletic, be a lot more athletic and natural with my swing that way.

Really need to work on my wedding list tomorrow and this weekend, as well as just kind of think more about AI SEO and learning more about cloud code and preserving my videos from baseball and college, and then also maybe just preserving myself in AI. I have so much writing, which is essentially just me speaking in a very casual tone of voice. I also have all of the audio clips from Super Whisper, which I can definitely use. And then lastly, I've got a ton of pictures, videos, so I feel like I can build an AI version of myself. That could be a fun little project to work on next.

Really like these excerpts (from a 2026 AI consumer prediction essay):

Whoever solves AI discovery wins

Normal people don’t know what to do with a blank text input besides chat and search - these are the affordances of a command line.
These use cases are enormous, but there are hundreds more and they’re all locked behind a command line interface which is the main AI interface today. 
Whoever figures out how to unlock all these use cases beyond search and chat - showing what AI can do, not asking users to prompt - will be the next big consumer platform.

Mini-apps will unlock UGC personal software

Mini-apps will do for software what short-form video did for content.
Full apps are too hard to make: auth, integrations, database etc. But almost anyone can describe one idea, one flow, one screen.
It now takes 10+ minutes to go through onboarding in some apps that are trying to get you to subscribe - at this point it's faster to build your own mini-app. 
This unlocks UGC software - and with it, the first real consumer super-app in the US.
