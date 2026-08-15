# The "withdrawn" net — worklist and first findings

Item 3 of the six-issue plan left by the `[sic:]` sweep. **Why it exists:** where a
withdrawn rendering sat on a *real* word it took no marker, so nothing in
`src/english` flags it and the marker sweep is structurally blind to it. The cruces
files are the only trace, and they say `withdrawn`.

Regenerate the worklist with `node scripts/withdrawn-net.mjs` (dump kept at
`data/withdrawn-net.txt`).

## The mechanical step — run 2026-08-15, and it corrected the plan's estimate

The plan guessed **51 mentions across 22 cruces files**, with "22 of the 51 in 11064
alone, so most of that work is already adjudicated." Measured:

- **61 mentions across 26 works** (the plan grepped `withdrawn`; `withdraw` catches
  the same entries plus a few phrased "the emendation has been withdrawn").
- **50 sit at a column carrying NO marker** — the invisible set — and **11 sit at a
  column the sweep read.**
- ⚠ **11064 is NOT mostly covered.** Of its 23 mentions only **8** are at a column
  with a marker; **15 are invisible.** The plan's reasoning was that the sweep read
  11064 marker-by-marker — true, but a mention and a marker are not at the same
  column, and that is the whole point of the net.
- 13 mentions resolve to no column at all (they sit in a file preamble or a standing
  decision, not a per-column entry). They are listed as `NO-COL` and need an eye, not
  a grep.

⚠ **The match is exact-column, so "NONE" over-counts invisibility slightly** — a
marker one band away in the same paragraph reads as absent. It errs toward a longer
read-list, which is the safe direction.

## Works with ZERO markers anywhere — the guaranteed-invisible set

**10047, 10703, 11059, 8195, 8505.** These are the five the plan named, and they were
read first because nothing in them could have been caught by any marker pass.

### Result: zero 7a⁗ defects. All six mentions are Pattern 7 working correctly.

| site | withdrawn rendering | verdict |
|---|---|---|
| 10047 @1031B | plural *scientes* smoothing a singular *sciens* | clean — both words real, both rendered, mismatch carried with a note |
| 10703 @1126B | conjecture *Pro iniquitate* for printed *Oro iniquitate* | clean of 7a⁗ — **but see below** |
| 11059 @0091D | a "dropped Hebrew" **note**, not a rendering | not in the class at all — no English ever changed |
| 8195 (3 entries) | conjectures applied silently, restored to the printed readings | clean of 7a⁗ — **but see below** |
| 8505 @1177A | a blend of two conjectures for *Deo pro egente* | clean — every word rendered, the defect is the plate's and the crux says so |
| 8505 @1178C | *violavit* softened to "chastised" | clean — the withdrawal restored the literal, correctly |

**Nothing was swallowed. No clause lost a verb, a negation, or a conjunction.** That
is a real negative result: the 7a⁗ class is a *marker* phenomenon, and the net was
designed on the assumption that it also lives outside markers. On this sample it does
not.

## ⭐ What the net actually caught, and it is issue 4's question

The yield is a different class, and it is the one already parked for Wilson as issue
4 (11081 @0030B, *munde* for *mundo*): **a Pattern 7-correct rendering of a REAL
printed word that makes the English assert something the author did not.** These
sites have no marker for exactly the reason they are dangerous — the word is real.

Attested in the guaranteed set alone:

- **10703 @1126B** — printed *Oro iniquitate*; *Oro* is real ("I pray"), so the page
  reads "I pray, by iniquity I saw the tents of Ethiopia," with a stranded ablative.
  Odo's own next clause and his repetition of the lemma at 1126C both read *pro*.
- **8195 @1250B §18** — Migne's own double negative *nec … non aquiescas* rendered
  literally: "nor, even if punishments hang over you, **do not** give consent to
  anyone who is sinning." Every word is Migne's, and the English states the opposite
  of the precept.
- **8195 @1251A §22** — "in judgment also may you sit **without mercy**", which §23
  of the same work condemns.
- **8195 @1248C §7** — *praediceris* ("you are foretold") for *praedicaris* ("you are
  proclaimed"), against the parallel *laudaris* two clauses later.

⚑ **So issue 4 is not a singleton and its ruling is not cosmetic — it governs this
net's whole yield.** The question stands as written: may an additive gloss stand
beside a printed real word that misleads, e.g. `peace purely [*munde*; read *mundo*,
"to the world"]`? It removes nothing and keeps Migne's word visible. **Do not act
without the ruling.**

## ⬜ Still open — the other 44 invisible mentions

Not read. The list is in `data/withdrawn-net.txt`; the weight sits in **11064 (15),
11083 (3), 11556 (3), 11632 (4), 8715 (3)**. On the guaranteed set's yield the
expected return in 7a⁗ defects is low, but the same read produces the issue-4 census
that a ruling would need — so it is best run **after** the ruling, once, with both
questions in view instead of one.
