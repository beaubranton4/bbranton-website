# July 22, 2026

Things have been chill at work lately, aided by the fact that I'm really good at using Claude Code — I have that advantage right now. But I don't know how long it'll last, because this technology is abundant; all it takes is a little trial and error. For the time being, though, I'm a step ahead of the competition at work, because of how I use it in my side projects and in my personal life.

I really do think it's a smart idea to start using this project, this repository, as a digital embodiment of myself. I have all of my thoughts in here — what I'm eating, what I'm thinking, what I'm doing, big life events. None of it's being put into structured data, but you know, we don't need structured data now that we have LLMs. Structured data is probably still a lot more efficient for tracking things like what I ate on a day-to-day basis, if I want exact calorie counts. So maybe that's something I build a backend into this for — then build all my apps with a little personal layer, so it all just kind of lives in one place. I can query it, and it knows what I want, knows how I think, knows how I prompt.

I think the last missing piece would be video — how I look, how I act, how I speak. I have the voice data, though.

It's fun to look back at all the pictures, the shared albums, all the memories I've made over the past year on all the different trips. The trips are the most fun — those are what we live for, those moments, those events. Toronto, San Diego, Napa, New Orleans, Tahoe, backpacking, weddings, New York. Gosh, we just live such a good, full life. I absolutely can't believe that I'm in any way unhappy or dissatisfied with the life I've built and lived.

This morning I had two boiled eggs, a cup of yogurt, and 25 blueberries — logged below. Dinner was a New York strip with corn on the cob, zucchini, and shiitake mushrooms, cooked in olive oil and butter — also logged below, along with the rest of the day's snacking.

I also put together a spec for bringing workout tracking into this same journal system, alongside the calorie log — a `## Workout` section with the same treatment, so a session's sets/reps/top-set/est. 1RM get logged the same way food does: I say it out loud, Claude writes it into the day's entry. Merged that branch in — `docs/explorations/specs/journal-widgets.md` has the full spec. Next lift session gets logged that way.

---

## Workout

Full body with Abby.

**Beau** — session volume 24,695 lb

| Exercise            | Sets                          | Top set  | Est. 1RM |
|---------------------|-------------------------------|----------|----------|
| Bench Press (bar)   | 185×8, 205×6 F, 205×5 F       | 205×6 F  | 246      |
| Squat (bar)         | 245×8, 265×8, 285×8           | 285×8    | 361      |
| Row (bar)           | 155×8, 185×8, 190×8           | 190×8    | 241      |
| Deadlift (bar)      | 255×8, 260×8, 265×8           | 265×8    | 336      |
| Shoulder Press (DB) | 55×8, 60×8, 65×8              | 65×8     | 82       |
| Glute Machine       | 90×8, 135×8, 135×8            | 135×8    | 171      |

**Abby** — session volume 11,420 lb

| Exercise            | Sets                          | Top set  | Est. 1RM |
|---------------------|-------------------------------|----------|----------|
| Bench Press (bar)   | 75×8, 77×8, 77×7 F            | 77×8     | 97       |
| Squat (bar)         | 85×8, 105×8, 135×8            | 135×8    | 171      |
| Row (bar)           | 95×8, 95×8, 100×8             | 100×8    | 127      |
| Deadlift (bar)      | 115×8, 135×8, 145×8           | 145×8    | 184      |
| Shoulder Press (DB) | 25×8, 25×5 F, 25×4 F          | 25×8     | 32       |
| Glute Machine       | 45×8, 45×8, 55×8              | 55×8     | 70       |

*F = failure on the last rep. DB weight is per dumbbell. Est. 1RM uses Epley (`weight × (1 + reps / 30)`).*

**Next session dials:**
- Beau bench stalled at 205 (6→5). Drop to 195 for 3×6–8 next time, re-test 205 the week after.
- Beau squat/dead/row/OHP all closed 8 clean → +5 lb on top set next session.
- Abby shoulder press: 25s crashed to 5F/4F. Drop to 20s, own 3×8, then step back up.
- Abby everything else closed 8 clean → +5 lb on top set next session.

```widget:workout
lifters:
  - name: Beau
    lifts:
      - { exercise: "Bench Press", equipment: barbell, sets: [ {weight: 185, reps: 8}, {weight: 205, reps: 6, failure: true}, {weight: 205, reps: 5, failure: true} ] }
      - { exercise: "Squat", equipment: barbell, sets: [ {weight: 245, reps: 8}, {weight: 265, reps: 8}, {weight: 285, reps: 8} ] }
      - { exercise: "Row", equipment: barbell, sets: [ {weight: 155, reps: 8}, {weight: 185, reps: 8}, {weight: 190, reps: 8} ] }
      - { exercise: "Deadlift", equipment: barbell, sets: [ {weight: 255, reps: 8}, {weight: 260, reps: 8}, {weight: 265, reps: 8} ] }
      - { exercise: "Shoulder Press", equipment: dumbbell, sets: [ {weight: 55, reps: 8}, {weight: 60, reps: 8}, {weight: 65, reps: 8} ] }
      - { exercise: "Glute Machine", equipment: machine, sets: [ {weight: 90, reps: 8}, {weight: 135, reps: 8}, {weight: 135, reps: 8} ] }
  - name: Abby
    lifts:
      - { exercise: "Bench Press", equipment: barbell, sets: [ {weight: 75, reps: 8}, {weight: 77, reps: 8}, {weight: 77, reps: 7, failure: true} ] }
      - { exercise: "Squat", equipment: barbell, sets: [ {weight: 85, reps: 8}, {weight: 105, reps: 8}, {weight: 135, reps: 8} ] }
      - { exercise: "Row", equipment: barbell, sets: [ {weight: 95, reps: 8}, {weight: 95, reps: 8}, {weight: 100, reps: 8} ] }
      - { exercise: "Deadlift", equipment: barbell, sets: [ {weight: 115, reps: 8}, {weight: 135, reps: 8}, {weight: 145, reps: 8} ] }
      - { exercise: "Shoulder Press", equipment: dumbbell, sets: [ {weight: 25, reps: 8}, {weight: 25, reps: 5, failure: true}, {weight: 25, reps: 4, failure: true} ] }
      - { exercise: "Glute Machine", equipment: machine, sets: [ {weight: 45, reps: 8}, {weight: 45, reps: 8}, {weight: 55, reps: 8} ] }
```

---

## Calorie Log

| Food | Amount | Calories | Protein |
|---|---|---|---|
| Boiled eggs | 2 large | ~156 | ~12.6 g |
| Greek yogurt (nonfat, plain) | 1 cup | ~160 | ~24 g* |
| Blueberries | 25 berries | ~25 | ~0.3 g* |
| Buffalo chicken taco wraps | 3 | 600 | ~45 g* |
| Guava kombucha (Synergy) | 1 bottle | 60 | ~0 g |
| Watermelon | 1 cup diced | ~46 | ~1 g |
| Cashews | 10 nuts | ~90 | ~3 g* |
| Watermelon | 2 cups diced | ~92 | ~2 g |
| Blueberries | 20 berries | ~20 | ~0.2 g* |
| Apple | 1 medium | ~95 | ~0.5 g |
| New York strip steak | ½ lb | ~470 | ~61 g* |
| Olive oil | ½ tbsp | ~60 | ~0 g |
| Butter | ¾ tbsp | ~77 | ~0.1 g |
| Corn on the cob | 1 ear | ~90 | ~3 g |
| Zucchini | 1 medium | ~33 | ~2 g |
| Shiitake mushrooms | 2 oz | ~35 | ~1 g* |
| **Total** | | **~2,109** | **~156 g** |

*\*Yogurt assumed same nonfat plain Greek as yesterday — flag if it's a different type/brand. Blueberries scaled from the standard per-berry estimate. Wrap protein reuses the estimate from your 7/20 buffalo chicken wraps (same recipe, 600 cal → ~45 g). Cashews estimated at ~9 cal/nut. Steak estimated from USDA strip loin (trimmed, broiled) scaled to ½ lb — actual depends on fat trim. Shiitake protein/calories assume lightly cooked.*

**Day vs. plan:** **~2,109 cal / ~156 g protein.** Training day (full body, 6 exercises, logged above) — target ~2,400 cal / ~145 g protein. Protein aim is already cleared (+11 g over); **~291 cal left** if you want to land right at the target — otherwise you're in good shape to stop here.

```widget:calorielog
person: Beau
day_type: training
items:
  - { food: "Boiled eggs", amount: "2 large", calories: 156, protein: 12.6 }
  - { food: "Greek yogurt (nonfat, plain)", amount: "1 cup", calories: 160, protein: 24 }
  - { food: "Blueberries", amount: "25 berries", calories: 25, protein: 0.3 }
  - { food: "Buffalo chicken taco wraps", amount: "3", calories: 600, protein: 45 }
  - { food: "Guava kombucha (Synergy)", amount: "1 bottle", calories: 60, protein: 0 }
  - { food: "Watermelon", amount: "1 cup diced", calories: 46, protein: 1 }
  - { food: "Cashews", amount: "10 nuts", calories: 90, protein: 3 }
  - { food: "Watermelon", amount: "2 cups diced", calories: 92, protein: 2 }
  - { food: "Blueberries", amount: "20 berries", calories: 20, protein: 0.2 }
  - { food: "Apple", amount: "1 medium", calories: 95, protein: 0.5 }
  - { food: "New York strip steak", amount: "1/2 lb", calories: 470, protein: 61 }
  - { food: "Olive oil", amount: "1/2 tbsp", calories: 60, protein: 0 }
  - { food: "Butter", amount: "3/4 tbsp", calories: 77, protein: 0.1 }
  - { food: "Corn on the cob", amount: "1 ear", calories: 90, protein: 3 }
  - { food: "Zucchini", amount: "1 medium", calories: 33, protein: 2 }
  - { food: "Shiitake mushrooms", amount: "2 oz", calories: 35, protein: 1 }
note: "Training day (full body lift). Protein aim cleared."
```

---

## Cut Plan (Beau & Abby)

**Goals:** Beau — lose ~10 lb fat in 8 months (~0.3 lb/week). Abby — lose ~15 lb fat in 8 months (~0.43 lb/week). Both gentle, sustainable rates.

**Built-in assumption:** one "blowout weekend" per month (≈ +3,000 cal each), absorbed by the clean-day deficit. Beau's clean-day deficit ≈ 260/day; Abby's ≈ 335/day.

**Targets** (10K steps counts as "Light," even with no gym session):

| | Beau (170 lb) | Abby (150 lb) |
|---|---|---|
| **Protein aim** | ~145 g/day | ~130 g/day |
| Low day (no workout, <5K steps) | ~1,800 cal | ~1,400 cal |
| 10K-step day (or ~3-mile run) | ~2,100 cal | ~1,650 cal |
| Training day (workout) | ~2,400 cal | ~1,900 cal |

**Rules of thumb:**
- Hit 10K steps daily → eat the middle row. Add a real workout → top row. Couch day → bottom row (avoid stacking these, especially Abby).
- Steps are the cheapest lever: a daily 10K floor buys back ~250–300 cal of food vs. sitting.
- One blowout weekend ≈ 11–12 clean days to pay back. One/month is fine; most weekends is what breaks it.
- Track the 2–3 week scale trend, not the daily number. Faster than target → eat a bit more; flat after 3 weeks → drop 100–150.
- Protein high to protect muscle (Beau's SMI 8.8 is well above the sarcopenia line): ~1.6–2.2 g/kg bodyweight. **Beau (170 lb): floor ~123 g, cut sweet spot ~140–155 g, aim ~145 g/day.** **Abby (150 lb): floor ~109 g, cut sweet spot ~122–136 g, aim ~130 g/day.**
- Abby's floor: don't drop below ~1,400–1,500; if the math pushes lower, add activity to raise TDEE rather than eat less.

*Fitness math, not dietitian advice — sanity-check with a professional, especially any medical factors.*
