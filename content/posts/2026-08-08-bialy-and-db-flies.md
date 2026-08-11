# August 8, 2026

---

## Calorie Log

| Food | Amount | Calories | Protein | Sodium |
|---|---|---|---|---|
| Ham and cheese croissant | 1 | 450 | ~18 g* | ~800 mg* |
| Oyakodon (leftovers) | ~250 cal worth | 250 | ~21 g* | ~450 mg* |
| Onion bialy with scallion cream cheese | 1 | ~320* | ~8 g* | ~450 mg* |
| Chips | ~100 cal worth | 100 | ~1 g | ~100 mg |
| Katsu-don (pork + shrimp katsu, oyakodon-style) | ~700 cal worth | 700 | ~30 g* | ~1,100 mg* |
| Popcorn, candy, kakimochi | ~400 cal worth | 400 | ~4 g | ~400 mg* |
| **Total** | | **~2,220** | **~82 g** | **~3,300 mg** |

*\*Oyakodon scaled from your recipe (550 cal → 47 g / 1,000 mg on 8/6). Bialy assumed ~210 + ~2 tbsp scallion cream cheese ~110. Croissant sodium is a guess off typical bakery ones. Katsu-don calories are yours; protein/sodium scaled from a typical donburi (the soy-mirin sauce carries the salt). Snack sodium assumes salted popcorn + kakimochi.*

**Day vs. plan:** ~2,220 cal / ~82 g protein / ~3,300 mg sodium. Against the computed training-day target of ~2,050 that's **~170 over** — a near-miss, not a blowout. Second (mild) surplus day in a row.

- **Protein** — ~82 g, well under the 123 floor; a lot of today's calories were breading, rice, and snacks rather than protein.
- **Sodium** — ~3,300 mg, ~2.2× the limit. Donburi sauce + the salty breakfast is the story.

```widget:calorielog
person: Beau
day_type: training
items:
  - { food: "Ham and cheese croissant", amount: "1", calories: 450, protein: 18, sodium: 800 }
  - { food: "Oyakodon (leftovers)", amount: "~250 cal worth", calories: 250, protein: 21, sodium: 450 }
  - { food: "Onion bialy with scallion cream cheese", amount: "1", calories: 320, protein: 8, sodium: 450 }
  - { food: "Chips", amount: "~100 cal worth", calories: 100, protein: 1, sodium: 100 }
  - { food: "Katsu-don (pork + shrimp katsu, oyakodon-style)", amount: "~700 cal worth", calories: 700, protein: 30, sodium: 1100 }
  - { food: "Popcorn, candy, kakimochi", amount: "~400 cal worth", calories: 400, protein: 4, sodium: 400 }
note: "Full day: ~2,220 cal / ~82 g protein / ~3,300 mg sodium vs computed target ~2,050 - about 170 over. Protein well under the floor; sodium ~2.2x limit. Mild surplus day."
```

---

## Workout

Upper-body lift in the gym.

| Activity | Duration | Est. burn |
|---|---|---|
| Upper-body lift (session below) | ~45 min* | ~250 cal* |

*\*Duration and burn are my guess — tell me the real time and I'll fix it.*

```widget:activity
person: Beau
activities:
  - { activity: "Upper-body lift", duration: "45 min", burn: 250 }
note: "Duration and burn estimated."
```

**Beau** — session volume 5,510 lb

| Exercise | Sets | Top set | Est. 1RM |
|---|---|---|---|
| DB Fly | 35×12, 45×8, 60×8 | 60×8 | 76 |
| Chest-Supported Row | 45×12, 60×8, 60×8 | 60×8 | 76 |
| Shoulder Press | 50×10, 55×8, 55×6 | 55×8 | 70 |
| Single-Arm DB Curl | 35×8, 35×8, 35×8* | 35×8 | 44 |
| Single-Arm Cable Tricep Extension | 20×12, 25×8, 25×8 | 25×8 | 32 |

*F = failure on the last rep — none marked this session. DB weight is per dumbbell. Your third curl set came through as "35x" with no rep count — logged as 8 to match the others; correct me. Rows and shoulder press assumed dumbbell. Est. 1RM uses Epley (weight × (1 + reps / 30)).*

**Next session dials:**
- **DB Fly** — 60×8 closed clean → 65, though the 45→60 jump was big; 60 for all three work sets is also a win.
- **Chest-supported row** — two clean sets at 60 → 65.
- **Shoulder press** — reps slid 8→6 at 55; hold 55 and push the last set to 8.
- **Curls** — hold 35 until that third set is confirmed solid.
- **Triceps** — 25×8 clean twice → 30.

```widget:workout
lifters:
  - name: Beau
    lifts:
      - { exercise: "DB Fly", equipment: dumbbell, sets: [ {weight: 35, reps: 12}, {weight: 45, reps: 8}, {weight: 60, reps: 8} ] }
      - { exercise: "Chest-Supported Row", equipment: dumbbell, sets: [ {weight: 45, reps: 12}, {weight: 60, reps: 8}, {weight: 60, reps: 8} ] }
      - { exercise: "Shoulder Press", equipment: dumbbell, sets: [ {weight: 50, reps: 10}, {weight: 55, reps: 8}, {weight: 55, reps: 6} ] }
      - { exercise: "Single-Arm DB Curl", equipment: dumbbell, sets: [ {weight: 35, reps: 8}, {weight: 35, reps: 8}, {weight: 35, reps: 8} ] }
      - { exercise: "Single-Arm Cable Tricep Extension", equipment: machine, sets: [ {weight: 20, reps: 12}, {weight: 25, reps: 8}, {weight: 25, reps: 8} ] }
```
