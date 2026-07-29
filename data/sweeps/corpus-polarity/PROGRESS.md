# Corpus polarity sweep — progress

Unit table + rules: `../NEXT-SESSION-BRIEF.md`. Agent prompt: `AGENT-PROMPT.md`.
Output: one `<idno>-u<NN>.json` per unit. Blind rule in force — agents never read
`cruces.md` or anything else in this directory except `AGENT-PROMPT.md`.

**89 units · 68 works · 454 chunks · Opus throughout (two-tier failed on PL 196).**

## Rounds

### 11064 — COMPLETE, all 9 units (PL 175, 80 chunks) — 2026-07-28
- [x] u01 0000–0008 — 3 · [x] u02 0009–0017 — **9** · [x] u03 0018–0026 — 5
- [x] u04 0027–0035 — 2 · [x] u05 0036–0044 — 5 · [x] u06 0045–0053 — 2
- [x] u07 0054–0062 — 7 · [x] u08 0063–0071 — 4 · [x] u09 0072–0079 — 4

**41 sites in one work.** side: migne 34 / **ours 7**. confidence: high 19 /
medium 18 / low 4. types: sense-reversing-letter 23 · dropped-word 8 ·
added-negative 6 · dropped-non 3 · reversed-subject-object 1.

**Benchmark: PL 196 found 29 sites across 17 works / 82 chunks. This ONE work,
80 chunks, found 41.** The brief's hypothesis holds — the earliest-translated PL
175/176 works, done under the withdrawn "intended reading" precedent, are the
heavy end of the corpus. Do not extrapolate PL 196's rate to the remainder.

**New defectType, not in the PL 196 vocabulary: `reversed-subject-object`**
(11064 u07 @1097A — the English lemma has the Jews leading the divinity where
Hugh's gloss on the same line has the divinity leading the Jews). Added rather
than forced into the four original values.

**Method finding — lemma-and-gloss commentaries are high-yield.** Hugh quotes
each Dionysius lemma twice (LITTERA, then again in the EXPOSITIO with a gloss),
so the plate reliably supplies its own contradicting neighbour. Most of the
remaining queue is this form. Expect yield, and give those works full units.

**Worst class seen — the plate defect our English CONCEALS.** u02 @0968B and
@0971C, u03 @0982A, u08 @1106A: Migne's error is invisible to a reader of the
translation because the English quietly normalized it. These are `ours` bugs
even where the root defect is Migne's; both halves get logged.

### ALL 89 UNITS COMPLETE — 2026-07-28

**68 works · 454 chunks · 178 sites.** Every unit in the brief's table ran, blind,
on Opus. No unit was skipped, sampled, or truncated.

| | |
|---|---|
| side | Migne **152** · **ours 26** |
| confidence | high 55 · medium 92 · low 31 |
| types | sense-reversing-letter 76 · dropped-word 38 · dropped-non 31 · added-negative 30 · inversion 3 |
| works with ≥1 site | 50 |
| works clean | **18** |

**Per-volume rate answered (the question the brief posed).** PL 196 ran 29 sites /
17 works / 82 chunks. This sweep ran 178 / 68 / 454 — a comparable per-chunk rate
overall, but the distribution is wildly uneven and the average is the wrong summary:

- **11064 alone = 41 sites (23% of the corpus total) in 80 chunks.**
- **11064 + 11066 = 64 sites (36%) in 141 chunks**, and **10 of the 26 `ours` sites.**
- 18 works are completely clean.

The brief's hypothesis is **confirmed**: the earliest-translated PL 175/176 works,
done under the withdrawn "intended reading" precedent, carry the damage. Do not
plan future work off the corpus average.

## Findings that matter most

**The 26 `ours` sites are the actionable set** — they are live on migne.app and
wrong. Concentrated in 11064 (7), 11066 (3), 9076 (2), 7017 (2), and singletons in
11088, 7871, 11086, 9604, 10083, 10365, 11075, 11208, 11325, 8625, 8708, 9245.

**The silent repair is real and recurrent, not a one-off.** Confirmed in a dozen-plus
places; the purest specimen is **8625 @0940B**, where Migne prints `fuscatur`
("is darkened") and our English reads "**is cleansed**" — the exact opposite verb,
chosen because baptism is the subject and `ex baptismo remissio peccatorum largitur`
follows a few lines later. Same shape as 11547's `azyma`→"leaven" that started this.
Different volume, different century, different translator's stint. It is what happens
whenever a translator meets a defective plate without a rule to stop and log it.

**Five distinct mechanisms by which OUR English inverts sense** (all found blind):
1. opposite word substituted to rescue a broken sentence (8625, 11547)
2. printed negation dropped (11064 @1085D-class)
3. connective smoothed — a second `sed` rendered "yet" (8777 @0191B); leaves *no*
   lexical trace, ungreppable
4. comparative reversed (11083 @0855A)
5. reference/agency mis-bound — `qui`/`cui` (8708), pronoun binding (11086),
   ablative agent direction (11208 @1199B)

**Migne's recurring compositor habits**, worth naming in any future check:
- word-division: `velaminum`→`vel animum`, `a morte`→`amore`, `nonnulli`→`non novelli`,
  `inconsequentibus`→`in consequentibus`, `incorruptionis`→`in corruptionis`,
  `inhumanitatem`→`in humanitatem`, `informe`→`in forma`
- `non solum` collapsing to `solum` (11088, 11066, 7561 — three works)
- `sine`/`sive` (11064 ×2, 11080)
- `nisi`→`si` (8566), `num`→`nam` (11055), `num`→`non` (11066)

## Method findings — for the next sweep of any kind

1. **Blind reading works; the rule earned its place.** No agent read `cruces.md`
   and the yield was 178 sites where the PL 196 stage-1 (cruces-first) design
   returned "nothing new" for 17 straight works.
2. **The false-positive discipline held across 89 units.** Agents rejected: deliberate
   authorial chiasms (7020), an attested late-Latin `nullus`-for-`ullus` idiom (7020),
   `lux` = "this present life" (11436), a passage treating BOTH arrangements of Peter
   and Paul (10103), testimonies collected precisely to disagree (6912), and a
   suspected dropped `non` that grammar refuted — concessive `sed` needs an
   affirmative (11713 @1055B). **Findings not made are as much the result as findings
   made.**
3. **Genre predicts yield.** Lemma-and-gloss commentaries are the richest: the author
   quotes his lemma twice (LITTERA then EXPOSITIO), so the plate supplies its own
   contradicting neighbour. Terse aphorism collections are next (8195 = 7 sites in
   3 chunks) — a maxim missing its `non` still sounds like a maxim. Annals, charters,
   and regnal lists are nearly immune: independent list items, no neighbour to
   contradict.
4. **Schema gaps the agents found on their own** — three out-of-enum labels arrived
   unprompted (`reversed-subject-object`, `reversed-predication`, `opposite-rendering`),
   plus a **misplaced-negative** class (11081 @0039D, 11062 @0424B) where the `non`
   sits on the wrong member of a pair. Consolidate to: the four originals +
   `inversion` + `misplaced-negative`.
5. **Apparatus-supported defects deserve their own tier.** At 21413 @0666B Migne's own
   `F.` apparatus prints the correct reading against his text. That is better evidence
   than a conjecture, and it was scored *down* to medium for it. Handle separately.
6. **One finding is attribution-uncertain, not Migne's**: 9249's intrusive `non`
   recurs at 1088C *and* 1091A. Twice-printed suggests Hincmar's exemplar, not the
   compositor. Do not assert the plate.

## Remediation applied 2026-07-28 — steps 1–3 of the brief

1. **`REPORT.md` built** (`scripts/build-polarity-report.mjs`, idempotent; `--cruces`
   appends/refreshes the sweep section in each affected work rather than stacking).
2. **Cruces appended to 50 works.**
3. **24 of the 26 `ours` sites fixed in place**, across 14 works: 11064 (7), 11066 (3),
   9076 (2), 7017 (2), 7871, 11075, 11086, 11088, 11208, 11325, 10365, 8625, 8708, 9245.
   `verify-english` OK on all 14 (pre-existing guillemet/ratio warnings unchanged);
   work pages rebuilt, reindexed, landing + method rebuilt. **86 englished works, unchanged.**

**TWO deliberately NOT edited — flagged for Wilson, crux logged, English left alone:**

- **10083 @0493D** — agent called it `ours`, but our English is already literal to the
  plate. Migne prints `requiescere faciam` (Hosea 1:4 has `quiescere`), and "make to
  rest" is the faithful rendering of what is printed. Under the fix policy this is a
  **Migne defect rendered literally**, not our error. Changing it to "cause to cease"
  would be a silent emendation — the very thing 7a forbids.
- **9604 @1347D** — the printed Latin (`a beato Petro apostolum successoribus suis
  directos`) is itself corrupt and cannot be construed as either our English or the
  conjecture reads it. Low confidence, and any English here is a reconstruction.
  Needs a human call on whether to emend openly or mark `[sic]`.

**8625 @0940B went the other direction:** the fix was to *restore* the literal reading.
Migne prints `fuscatur` and our English had silently substituted "is cleansed"; it now
reads "is darkened from sin", with the defect logged as a crux. Undoing a silent repair
is a fix, not a regression — the plate's contradiction is the edition's evidence.

## Post-sweep (owed when units finish)
1. Aggregate → `REPORT.md` (dedupe by idno+column, note finder).
2. Append sweep section to each affected `cruces.md`.
3. Fix `side: ours` findings in place; **report, never fix, `side: migne`**.
4. Re-run `verify-english` on every work whose English changed.
5. Rebuild + redeploy (Wilson's OK required — published pages change).
6. Record per-volume defect rate vs PL 196's 29 sites / 17 works / 82 chunks.

## Carried over from the PL 196 session — still owed
- Deploy of 11536 + 11547 (fixed, rebuilt, reindexed, **not deployed**).
