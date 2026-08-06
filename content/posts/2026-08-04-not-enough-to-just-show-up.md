# August 4, 2026

One month out from my 31st birthday, one month out from this journaling habit — which is actually insane to think about. That I've been journaling, or at least attempting to journal, every single day for the last 330 days. It's proof that I can build a new habit and stick to it.

The key now is just finding new habits that I want to build out. Do I want to post on social media every single day? Do I want to track my time? Do I want to be more intentional about planning how I spend my time, what I do, what I'm working on — especially when it comes to my career and future and Dugout Edge?

I need to be a little bit more tactical, pay a little bit more attention to detail with everything that I do, because I know that that is one of the things that I'm lacking. On one hand it's great that I show up every day, but it's not enough to just show up. I think you need to be very, very intentional about everything and do your best to think through why you do the things that you do. If I sit down and think for just 5–10 minutes, it's very easy to actually know right off the bat what I need to do. But it's not easy to do it — the hard part is actually doing it.

Power went out last night, so I'm stuck here with no internet. I'm going to head to the JCC, work from there, do a little swim workout, come back home. Then I need to start setting up the Lakeville pilot for the 17 board members. They're going to be starting budget discussions in October, so I need to get that off the ground, let them try it, and then keep pursuing that — not being afraid to get uncomfortable, and pushing myself to close a deal on a league.

---

## Workout

Swim at the JCC — 750 yards, ~30 lengths. The last ~10 were the sprint block: there-and-back, there-and-back, then single lengths — six sprints at full speed. ~45 minutes in the pool.

| Activity | Duration | Est. burn |
|---|---|---|
| Swim — 750 yd, ~30 lengths, 6 full-speed sprints at the end | ~45 min | ~300 cal* |

*\*Burn estimated at ~5.5 METs average (easy laps with rests, sprint finish pulling the average up) at 170 lb. No `widget:workout` block — that schema is weight × reps; the burn lives in `widget:activity`.*

```widget:activity
person: Beau
activities:
  - { activity: "Swim - 750 yd, ~30 lengths, 6 full-speed sprints at the end", duration: "45 min", burn: 300 }
note: "JCC pool. Burn estimated at ~5.5 METs average at 170 lb - easy laps with a sprint finish."
```

---

## Time Log

| Project | Category | Hours | Deep | What |
|---|---|---|---|---|
| Job | — | 3 | | Work from the JCC |
| Personal | admin | 0.5 | | Documenting the to-do list |
| Personal | life | 0.75 | | Swim + shower |
| Personal | life | 0.75 | | Relaxing, chilling, not doing anything |
| **Total** | | **5** | **0 deep** | |

**Read-out:** 5 h narrated, 0 on Dugout Edge so far — the Lakeville pilot setup is still the afternoon's plan.

```widget:timelog
person: Beau
entries:
  - { project: job, hours: 3, note: "Work from the JCC" }
  - { project: personal, category: admin, hours: 0.5, note: "Documenting the to-do list" }
  - { project: personal, category: life, hours: 0.75, note: "Swim + shower" }
  - { project: personal, category: life, hours: 0.75, note: "Relaxing, chilling, not doing anything" }
note: "First tracked day. 5 h narrated, 0 deep, 0 on Dugout Edge so far - pilot setup planned for the afternoon."
```

---

## To Do

- [ ] Set up the Lakeville pilot for the 17 board members (budget talks start October)

Carried over from 8/1:

- [ ] Schedule a doctor's appointment
- [ ] Look into Facebook Marketplace ads and test them out
- [ ] Learn Heroku or Railway — somewhere to autonomously run agents
- [ ] Pick a model provider (pay for an LLM API, or run an open-source model)
- [ ] Look into Buzz

```widget:todo
person: Beau
items:
  - { text: "Set up the Lakeville pilot for the 17 board members (budget talks start October)", done: false }
  - { text: "Schedule a doctor's appointment", done: false }
  - { text: "Look into Facebook Marketplace ads and test them out", done: false }
  - { text: "Learn Heroku or Railway - somewhere to autonomously run agents", done: false }
  - { text: "Pick a model provider (pay for an LLM API, or run an open-source model)", done: false }
  - { text: "Look into Buzz", done: false }
```

---

## Calorie Log

| Food | Amount | Calories | Protein | Sodium |
|---|---|---|---|---|
| Apple | 1 medium | ~95 | ~0.5 g | ~2 mg |
| Peanut butter | 1 tbsp | ~95 | ~4 g | ~75 mg |
| Lamb kabobs | 2 | ~340* | ~36 g* | ~500 mg* |
| Pita | ½ | ~85 | ~3 g | ~150 mg |
| Greek yogurt drink (plain, sour — labneh/ayran style) | 1 | 300 | ~15 g* | ~450 mg* |
| Watermelon | ~1 cup | ~46 | ~0.9 g | ~2 mg |
| Philly cheesesteak | 1 | ~750* | ~40 g* | ~1,600 mg* |
| Hot dog w/ condiments | ½ | ~160 | ~5 g | ~450 mg |
| **Total** | | **~1,871** | **~104 g** | **~3,229 mg** |

*\*Kabobs assumed ~170 cal each for a standard skewer of grilled lamb — fattier cuts run higher. The yogurt drink's 300 cal is yours - at that size it's a large full-fat drink, so protein and sodium are scaled up to match; unsalted would be closer to ~100 mg. The cheesesteak is the big estimate: a standard one runs ~700–900 cal depending on size and cheese — the bread, steak, and cheese together also make it the day's sodium anchor. Peanut butter assumed 1 tbsp; watermelon assumed ~1 cup for "a little bit."*

**Day vs. plan:** closed at ~1,871 cal / ~104 g protein / ~3,229 mg sodium. With the swim (~300 cal burned), the computed target is **~2,100** (base TDEE 2,060 + 300 − 260 deficit, per `data/profile.yml`).

- **Calories** — **~229 under** target. Still a genuinely light day.
- **Protein** — ~104 g, **~19 g below the ~123 g floor**. The lunch bank (~47 g) was there, but the dinner didn't build on it — a cheesesteak is more bread and cheese than steak. Third day under the floor in the last four.
- **Sodium** — ~3,229 mg, ~1,729 over. The day was under pace at ~950 mg through lunch, then the cheesesteak (~1,600 mg alone) ended the run at the limit. Seven straight days over.

```widget:calorielog
person: Beau
day_type: training
items:
  - { food: "Apple", amount: "1 medium", calories: 95, protein: 0.5, sodium: 2 }
  - { food: "Peanut butter", amount: "1 tbsp", calories: 95, protein: 4, sodium: 75 }
  - { food: "Lamb kabobs", amount: "2", calories: 340, protein: 36, sodium: 500 }
  - { food: "Pita", amount: "1/2", calories: 85, protein: 3, sodium: 150 }
  - { food: "Greek yogurt drink (plain, sour - labneh/ayran style)", amount: "1", calories: 300, protein: 15, sodium: 450 }
  - { food: "Watermelon", amount: "~1 cup", calories: 46, protein: 0.9, sodium: 2 }
  - { food: "Philly cheesesteak", amount: "1", calories: 750, protein: 40, sodium: 1600 }
  - { food: "Hot dog w/ condiments", amount: "1/2", calories: 160, protein: 5, sodium: 450 }
note: "Closed at ~1,871 cal / ~104 g protein / ~3,229 mg sodium vs the ~2,100 computed target (swim, ~300 burned) - about 229 under. Protein ~19 g below the floor; the cheesesteak dinner was bread-and-cheese-led. Sodium ~1,729 over, seventh straight day - was under pace until the cheesesteak (~1,600 mg alone)."
```
