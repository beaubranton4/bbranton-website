# July 31, 2026

---

## Workout

Upper body + posterior chain + core. Pull-ups supersetted with chest flies.

**Beau** — session volume 5,950 lb

| Exercise | Sets | Top set | Est. 1RM |
|---|---|---|---|
| Pull-Up (bodyweight) | 15 narrow grip, 8 medium grip, 8 medium grip | 15 | — |
| Chest Fly | 160×8, 180×7, 180×7 | 180×7 | 222 |
| Shoulder YTI (DB) | 20×8, 22.5×8, 22.5×8 | 22.5×8 | 29 |
| Glute Ham Raise | 45×10, 45×10, 45×10 | 45×10 | 60 |
| Reverse Lunge Chop | 10×8 ea side, 25×8 | 25×8 | 32 |
| Sit-Up (bodyweight) | 10, 10, 10 | 10 | — |
| Reverse Jackknife (bodyweight) | 10, 10, 10 | 10 | — |
| Crunch circuit (bodyweight) | 200 | 200 | — |
| Side plank (each side) + front plank | 1 min each | — | — |

*Est. 1RM uses Epley (weight × (1 + reps / 30)). DB weight is per dumbbell. Bodyweight moves are logged at 0 lb — reps are tracked but 1RM and volume don't mean much there. The planks are time-based, so they sit in the table but not in the data block below; that schema is weight × reps only. Reverse Lunge Chop logged as cable — say the word if it was a plate or med ball and I'll relabel. Shoulder YTI logged as dumbbells at 20/22.5 per hand, which is heavy for YTIs — if that was a cable stack or a total, tell me and I'll fix it.*

**Next session dials:**

- **Chest Fly — hold 180 and rebuild to 8 first.** Reps fell from 8 to 7 when you jumped 160 → 180 and then held at 7 for the third set. Repeating 7 twice is a clean, honest plateau, not a failure — get 180×8×2 before adding.
- **Pull-Up** — no added load, so progress via reps: aim 17 narrow, 10 medium. The 15 → 8 → 8 shape is what you want, since the reps held on the third set instead of falling off.
- **Shoulder YTI → 25** — two clean sets of 8 at 22.5 earns the jump.
- **Glute Ham Raise → 50**, or hold 45 and push to 12s. Three clean sets of 10 is a full clear.
- **Reverse Lunge Chop → 30** on the top set.
- **Core** — sit-ups and reverse jackknifes to 12–15 per set; crunch circuit holds at 200.

```widget:workout
lifters:
  - name: Beau
    lifts:
      - { exercise: "Pull-Up (narrow grip)", equipment: bodyweight, sets: [ {weight: 0, reps: 15} ] }
      - { exercise: "Pull-Up (medium grip)", equipment: bodyweight, sets: [ {weight: 0, reps: 8}, {weight: 0, reps: 8} ] }
      - { exercise: "Chest Fly", equipment: machine, sets: [ {weight: 160, reps: 8}, {weight: 180, reps: 7}, {weight: 180, reps: 7} ] }
      - { exercise: "Shoulder YTI", equipment: dumbbell, sets: [ {weight: 20, reps: 8}, {weight: 22.5, reps: 8}, {weight: 22.5, reps: 8} ] }
      - { exercise: "Glute Ham Raise", equipment: machine, sets: [ {weight: 45, reps: 10}, {weight: 45, reps: 10}, {weight: 45, reps: 10} ] }
      - { exercise: "Reverse Lunge Chop", equipment: cable, sets: [ {weight: 10, reps: 8}, {weight: 25, reps: 8} ] }
      - { exercise: "Sit-Up", equipment: bodyweight, sets: [ {weight: 0, reps: 10}, {weight: 0, reps: 10}, {weight: 0, reps: 10} ] }
      - { exercise: "Reverse Jackknife", equipment: bodyweight, sets: [ {weight: 0, reps: 10}, {weight: 0, reps: 10}, {weight: 0, reps: 10} ] }
      - { exercise: "Crunch circuit", equipment: bodyweight, sets: [ {weight: 0, reps: 200} ] }
```

**Energy out:** ~300 cal.

```widget:activity
person: Beau
activities:
  - { activity: "Weight training (upper body + posterior chain + core)", duration: "50 min", burn: 300 }
note: "Superset lifting plus a long core block. Burn estimated at ~4.5 METs, 170 lb; duration assumed at ~50 min."
```

---

## Calorie Log

| Food | Amount | Calories | Protein | Sodium |
|---|---|---|---|---|
| Greek yogurt, plain nonfat | 1½ cups | ~195* | ~35 g* | ~100 mg* |
| Blueberries | 15 berries | ~12 | ~0.2 g | ~0 mg |
| Strawberries | 7 | ~35 | ~0.7 g | ~1 mg |
| Mediterranean beef bowl | 1 | 650 | ~40 g* | ~1,400 mg* |
| Milk, 2% | 1 cup | ~120 | ~8 g | ~115 mg |
| Cantan deluxe ramen | 1 bowl | ~900* | ~45 g* | ~2,900 mg* |
| Chicken karaage | 2 pieces | ~160* | ~10 g* | ~300 mg* |
| Bingsu (shaved ice dessert) | 400 cal worth | 400 | ~8 g* | ~150 mg* |
| **Total** | | **~2,472** | **~147 g** | **~4,966 mg** |

*\*Yogurt assumed plain nonfat Greek, since that's what's been in the log before. If it's whole-milk Greek it's ~330 cal for the same protein; if it's regular (non-Greek) yogurt, protein drops to ~13 g and it stops being a real protein anchor; flavored/fruit-on-the-bottom adds ~100–150 cal of sugar. Say which and I'll fix it. The 650 on the beef bowl is your number. Protein estimated at ~40 g assuming ~5 oz of beef over rice with vegetables — a meatier bowl runs closer to 50, a rice-heavy one closer to 30. Sodium is the loose one: seasoned beef plus feta, olives, and sauce puts Mediterranean bowls in the ~1,200–1,700 mg range. The ramen is the loosest line in the log: a deluxe bowl means extra chashu and egg, so ~900 cal is a fair midpoint, but tonkotsu broth runs anywhere from ~2,500 to ~4,000 mg of sodium on its own and almost all of it is in the broth — how much you actually drank swings that number by a thousand milligrams either way. Bingsu calories are your number; protein comes from the condensed milk and red bean.*

**Day vs. plan:** ~2,472 cal / ~147 g protein / ~4,966 mg sodium. With the lifting session at ~300 cal burned, the computed target was **~2,100** (base TDEE 2,060 + 300 burned − 260 deficit, per `data/profile.yml`).

- **Calories** — **~372 over.** Dinner ran ~1,460 against ~1,088 of room, and the 400 cal of bingsu is almost exactly the overage.
- **Protein** — **~147 g, right on the ~145 g aim.** First day back on target after 7/30 finished ~25 g under the floor, and the ramen chashu plus karaage did it. This was the thing worth getting right yesterday and it got got.
- **Sodium** — ~4,966 mg, **~3,466 over** the 1,500 mg limit and the worst day of the stretch. Fourth straight day over. One bowl of ramen is roughly two days' allowance by itself. Nothing else in the log matters at that scale — this is the single highest-leverage thing to change, and it's mostly about how often ramen and restaurant food land in a week, not about portion size.

```widget:calorielog
person: Beau
day_type: training
items:
  - { food: "Greek yogurt, plain nonfat", amount: "1.5 cups", calories: 195, protein: 35, sodium: 100 }
  - { food: "Blueberries", amount: "15 berries", calories: 12, protein: 0.2, sodium: 0 }
  - { food: "Strawberries", amount: "7", calories: 35, protein: 0.7, sodium: 1 }
  - { food: "Mediterranean beef bowl", amount: "1", calories: 650, protein: 40, sodium: 1400 }
  - { food: "Milk, 2%", amount: "1 cup", calories: 120, protein: 8, sodium: 115 }
  - { food: "Cantan deluxe ramen", amount: "1 bowl", calories: 900, protein: 45, sodium: 2900 }
  - { food: "Chicken karaage", amount: "2 pieces", calories: 160, protein: 10, sodium: 300 }
  - { food: "Bingsu (shaved ice dessert)", amount: "400 cal worth", calories: 400, protein: 8, sodium: 150 }
note: "Closed at ~2,472 cal / ~147 g protein / ~4,966 mg sodium against a ~2,100 target (lifting burned ~300). About 372 over on calories - roughly the bingsu. Protein landed right on the 145 g aim, first day back on target. Sodium ~3,466 mg over the 1,500 limit and the worst day of the stretch; the ramen bowl alone is about two days' allowance."
```
