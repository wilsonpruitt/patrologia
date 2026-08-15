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

---

# The read of the remaining 44 — run 2026-08-15, after the Pattern 18 ruling

Both questions in view at every site, as the plan required: **(1) 7a⁗** — did the
withdrawal leave a clause without its verb, its negation or its conjunction? — and
**(2) Pattern 18** — is this a Pattern 7-correct rendering of a REAL printed word that
makes the page assert something the author is arguing against?

⚠ **Method note, paid for at the first site.** The cruces files quote the English *as
it stood when the crux was written*, and the `[sic:]` force sweep of 2026-08-14 edited
the shipped text without rewriting those quotations. 11064's `atttendas` crux still
reads "Therefore do not *atttendas* to the number"; the page has read
`do not attend [sic: *atttendas*]` since the sweep. **Every verdict below is taken from
`src/english`, never from the crux's quoted rendering.**

## 11064 — Hugh of St Victor, *Expositio in Hierarchiam Coelestem* (15 sites)

**7a⁗: zero defects.** The non-word carry-throughs (*eloquiorom*, *sempe*, *aenigmat*,
*seientiam*, *Poc*, *imagitionum*/*incircumpscritum*) quarantine nouns and adverbs; every
clause keeps its predicate. The one site where the quarantined run WAS the verb —
*atttendas* — already carries its force in plain words from the 2026-08-14 sweep.

**Pattern 18: three applied, three declined.** Applied:

| column | printed | glossed | why it clears the bar |
|---|---|---|---|
| 1078B | *meditantibus* | `read *mediantibus*, "mediating"` | the clause asserts that the lower orders are converted by the superiors **meditating**; Hugh's whole point is **mediation**, and his own parallel *ita mediante ipsa* prints correctly in the next clause |
| 1142D | *sine* | `read *sive*, "or"` | "the clear and evident, **without** the distinguishing mark of the human figure" is fluent English that negates the gloss series it belongs to (*clarum et evidens, sive insigne*) — and the next clause explains that erectness makes the figure **more** evident |
| 1125A | *succedens* | `read *succendens*, "kindling"` | a false claim about what a word means — "seraphim is interpreted *burning*, or *succeeding*" — with *et significat ignitum* contradicting it inside the same sentence |

Declined, and why the bar held:

- **1090B `apud non`** for *apud nos* — ⬜ **the one genuine judgment call in this work,
  left for Wilson.** The intruded word is a **negation**, which is the most dangerous
  thing a real word can be. But the English it produces — "named angels more fittingly
  **among not** than the prior ones" — does not construe at all, so it makes no claim to
  be false about; it is a visible hole, not a confident wrong reading. Declined on the
  letter of the rule (❌ "merely awkward"), flagged because the letter may be wrong here.
- **1142D `si` for *sic*** — weakens a correlative into a condition; asserts nothing false.
- **1154C `suscepit` for *suscepi*** — puts an unnamed third person where Hugh has just
  written *praesumpsi*. Misattributes, but inside a sentence that is visibly broken
  anyway (it has no main clause in either language), so a reader meets the defect rather
  than a false claim.
- **1021A `efferte`, 1036B `dic`, 1064B `ipsos`** — mood, voice and number anomalies that
  do not construe. Odd, not false.
