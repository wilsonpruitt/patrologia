# 8967 — pending TEI patches, reported by stints, NOT yet applied

⛔ **Why these are queued rather than applied.** A TEI patch re-chunks the work, and re-chunking
rewrites the Latin **under English that is already filed**. Eight stints wrote Band A
concurrently; applying a patch mid-run would silently change a twin somebody had already
translated. **Apply this queue in ONE pass when Band A's translation is complete, then re-run
`verify-english` and fix the English twins named below.**

Every entry is **a departure of Corpus Corporum's TEI from Migne's plate**, i.e. our source
mis-transcribing the page — **not** a defect in Migne. None of them is a `[sic:]` candidate:
firing one would accuse Migne of his transcriber's error. That distinction is the whole reason
this file exists.

## ✅ Already applied (for the record)
- **0841B** — `nebel (נבל)`: CC dropped the Hebrew entirely. Recovered from the plate.
- **0841B, 0855C** — empty `<hi></hi>` + `([Ref] \n)` note → `[n: (Ref)]`.
- **0847A** — `sordescat` → **`sordescet`**. CC had conformed Migne to the Clementine.
  ⭐ **The twin site at 0869A was NOT patched by analogy, and that refusal was right**: its leaf
  was later read and prints `sordescat`, agreeing with our TEI.

## ⚠ Class 1 — CC CONFORMS MIGNE TO THE VULGATE (the dangerous class)
**No downstream check can see these.** A Vulgate collation is blind to them by construction: the
digitization has already made Migne agree with the Vulgate. Only the plate reaches them.
⛔ **Each needs its own leaf read. Never extend one to a look-alike** — 0869A is the proof.

| col | our TEI | the plate | note |
|---|---|---|---|
| 0899B | `audiebam` | `audiebant` | TEI's form **is the Clementine's own reading** |
| 0895A | `populis` | `populus` | an ungrammatical nominative tidied into a working dative |
| 0866D | `vel adipem` | `adipem` | **⛔ TEI INSERTS `vel` — the only one so far that touches SENSE.** One English edit owed with it: `src/english/8967/0013.md`, drop "or" before "the fat" |

## Class 2 — CC transcription noise (no sense at risk)
`Iniracundia` → `In iracundia` · `spemagna` → `In spe magna` · `inquitatem` → `iniquitatem` ·
`pro rumpit` → `pro-/rumpit` · `hahet` → `habet` · **0853B** `deeidam` → `de-cidam` (hyphenated
across a line break on the plate) · **0867C** `captu+m` → `captum`.

⚑ **`deeidam` is the one to remember**: every internal signal said fire a `[sic:]` — a non-word,
with correct `Decidam` eleven words later. The plate showed a line-break hyphen. The stint
withdrew the marker before firing it.

## Class 3 — sigla and punctuation
- **0845A** — one note `(AUG. CASS.)` on the plate, split in two by CC.
- **0862C** — split siglum. **0863D** — `(CASS)` unencoded, point dropped.
- **0864A** — `(CAS.)` where the plate has `(CASS.)`.
  ⛔⛔ **DO NOT SWEEP `(CAS.)` — Migne's own `(CAS.)` stands at 0863A and 0863C.** A global fix
  would manufacture readings he never printed. Per-site only, each read at the leaf.
- **0849D** — dropped closing guillemet (chunk 0004 runs 29 « against 28 »).
- **0870A** — full stop softened to a comma. **0870C** — comma inserted.

## ⬜ Unsettled — needs one more read
- **0898D** — `enumerantur`, possibly Migne's `emunerantur`; heavy inking. One Gallica IIIF crop
  at f449 closes it.
- Two of the work's three `In Hebraeo` clauses remain unread. **The third is closed**: 0868A
  prints `(quod in Hebraeo)` with no Hebrew type at all — nothing was dropped there.

---

# ⛔⛔ SECOND REPORT (chunks 0015–0019): THE RATE IS ~1 PER COLUMN, NOT A HANDFUL

Six plates read (pp. 441–446), **twelve** sites where our chunked Latin does not say what Migne
printed. **This is the ~3-sites-per-page rate the runbook records from 9003's collation of the
sibling PL 114 Psalter — measured independently here, in a different volume, and it agrees.**
The drift runs overwhelmingly **toward the Vulgate and toward ordinary Latin**: CC tidies.

| plate prints | our TEI has |
|---|---|
| `Anima` | `Animas` |
| `Sapientium` | `Sapientiam` |
| `Desiderabillia` | `Desiderabilia` |
| `mel ; solutus` | twin **supplies** `id est,` |
| `locus` | `ocus` |
| `Seb isti` | `Sed isti` |
| `Impinguisti` | `Impinguasti` |
| `commendando` | `commmendando` |
| `elevumini` | `elevamini` |
| `spiri-\|tus` | `spiriritus` |
| `dilexi` | `lilexi` |
| `genuo` | `genus` |
| `supientis`, `necessitutibus` | **UNSETTLED — recorded as candidates, not findings** |

⭐⭐ **FIVE `[sic:]` CANDIDATES WERE WITHDRAWN BY THE PLATE AND ONE CONFIRMED.** Every withdrawn
one read as a confident Migne defect **from the Latin alone**. This is the measured case for why
`plate-gate` exists: the internal evidence was wrong five times out of six.

⛔ **`Seb isti` @0876B is the sharpest one and NO MARKER CAN REACH IT.** Our twin reads `Sed isti`
and does not construe; the plate reads `Seb isti`; the conjecture is `Sedisti` ("thou hast sat",
Prov 23:1–2), which supplies exactly the verb and person the sentence lacks. `[sic:]` may wrap
only type the twin carries, and `[cj:]` requires the printed word to be in the twin — **so the
apparatus cannot say any of this until the TEI is patched.** The patch is a precondition for the
marker, not a tidy-up after it.

# MERGE ITEMS — real convention drift between stints, for the cruces merge

1. ⚠ **`Diapsalma` — roman or italic?** The 0015–0019 stint kept it **roman**, plate-confirmed
   that Migne sets it roman there. The 0005–0009 stint set it **italic**, deliberately, on the
   register rule, noting Migne does not italicize at its site either. **Both reasoned; they
   disagree.** Settle at the merge against what Migne actually sets at each site, and record the
   ruling in the merged cruces so Bands B and C inherit it rather than re-deciding.
2. **`In finem` → "Unto the end"** is holding across all five returned stints. No drift.
3. **`usque ad` → "as far as"** holding, and three stints independently caught unitalicized
   look-alikes that are NOT the formula. Worth a line in the merged conventions: the italic
   membership test, not the words.

---

# THIRD REPORT (chunks 0020–0024) — five more, and three English sentences ride on them

| col | Migne prints | our TEI has |
|---|---|---|
| 0883D | `ad hoc bono` | `ab` |
| 0887B | a plain dittography `etsi. Etsi` | silently tidied to `etc.` |
| 0887C | no period after `Diapsalma` | period supplied |
| 0887C | `dici.` | `dicit` |
| 0891A | `gyro` | `in gyro` (CC supplies `in`) |

⚑ **0887B is the most revealing: CC did not fix a typo, it fixed a REPETITION** — Migne's own
`etsi. Etsi` became `etc.`. A `[d:]` dittography marker is one of the few defects our apparatus
can state, and the transcriber removed the evidence for it before we ever saw the text.

Also settled as **CC's, not Migne's** (no marker owed): `in aeter num` @0884B is Migne's
`æter-num` hyphenated across a line break; `--VERS. 21.` @0886B is CC transposing the dashes.

⭐⭐ **AND THE HEURISTIC FAILS IN BOTH DIRECTIONS.** The 0015–0019 stint had five `[sic:]`
candidates withdrawn by the plate — internal evidence too eager. The 0020–0024 stint had the
opposite: it **declined** `In sua in virtute` @0890A reasoning that a doubled short word is the
classic CC artifact, and at 500 dpi Migne sets it plainly. A `[d: in]` now stands there. **Neither
"trust the text" nor "suspect the transcriber" is a rule. Only the leaf is.**

## ⬜ Still owed to Gallica (one IIIF request each)
- **0885B** `quae non est nisi [inquieta] mente` — printed words contradict the argument; the word
  falls at a clipped line opening in col 885 (`f443`).
- **0898D** `enumerantur` vs possible `emunerantur`, heavy inking (`f449`).

## MERGE ITEM RESOLVED — `Diapsalma` is ROMAN
Settled 2026-09-04 against three stints' plate reads (0849B, 0870D–0883A, 0887C, 0891D, incl. the
masculine `Diapsalmus`). ⛔ **The drift was my fault, not a stint's**: the launch brief said
"italic as Migne sets it" and Migne sets it roman. Brief corrected; the one italic occurrence
reverted. Bands B and C inherit **roman**.

## OPEN, needs a ruling at the merge
- **`gens tenebrarum`** @0887D → "nation of darkness". The `gentes` axis does not rule on a
  singular `gens` in a non-ethnic metaphor. The stint flagged rather than deciding silently,
  which is the behaviour the axis section exists to reward. Rule it and add it to the axis.

---

# FOURTH REPORT (chunks 0035–0038) — seven more, and six were found sideways

| col | Migne prints | our TEI has |
|---|---|---|
| 0912B | `diluculo` | `diliculo` — **our file holds a non-word** |
| 0914A | `naves Tharsis` | `naves-Tharsis` |
| 0915A | `concludi` | `concludit` |
| 0915D | `non alia re` | `non in alia re` — **CC supplies a word** |
| 0917A | `opere` | `opera` |
| 0917C | `Hic` | `His` |
| 0918C | `aliqui` | `aliquid` — **the most substantive: `aliquid` is what makes the clause construe** |

Lesser: TEI's `VERS, 11.` for `VERS. 11.` · `((AUG.)` for `(AUG.)` · a **silent repair of Migne's
own `doc-/ctus` dittography** (another erased `[d:]`, cf. 0887B).

⭐⭐ **SIX OF THE SEVEN WERE FOUND WHILE READING THE LINE FOR A DIFFERENT WORD.** That is now the
dominant discovery mode across four stints, and it matches the Luke result exactly: twelve of
seventeen corrections there came from a reader's eye falling elsewhere while a page stood open.
**The yield comes from opening the page at all, not from what you opened it to check.**

## The best marker in Band A so far
**0915A `[var:]`** — Migne prints **`Odite haec, omnes gentes`**, "*hate* these things," where the
Vulgate (Ps 48:2) reads `Audite`. His own gloss underneath argues from *Audite* (*Nullum excipio*,
*Nulli sermonem subtraho*). The English renders **"Hate"**, as printed. Conforming it to the
gloss would have been the textbook 7a″ failure — repairing Migne's text out of his commentary.

# ⛔ BLOCKER — plate-gate FAILS, and it is not in the range that found it
`node scripts/plate-gate.mjs 8967` fails on **`0904D`, chunk 0032, `[var: Vulg. Ps 41:1 …]`** —
col 0904 has never been read. Needs PDF **page 458** read and recorded, or the marker withdrawn.
**It cannot ship as it stands.** Chunk 0032 belongs to the 0030–0034 stint, which was still
running when this was reported; if it does not clear the column itself, the gate must be
satisfied here before the band closes.

---

# FIFTH REPORT (chunks 0030–0034) — 28 departures in TEN columns, and the class runs BOTH ways

**⭐⭐⭐ THE SINGLE MOST IMPORTANT FINDING IN BAND A**, stated by the stint that read cols
0903A–0910D line by line:

> Every non-word and unconstruable form in our Latin turned out at the plate to be **Corpus
> Corporum's, not Migne's** — and, conversely, **every defect Migne actually prints here had
> already been tidied away before it reached us.**

That is the whole `[sic:]` apparatus of this work described in one sentence, and it is why
`plate-gate` cannot be relaxed on 8967.

## Direction 1 — CC moves Migne ONTO the Clementine (invisible to every check)
- **0903D** `Dominum conservet` → `Dominus`
- **0902D** `Multiplicati sunt numerum` → `super` supplied

## Direction 2 — CC REPAIRS MIGNE'S REAL DEFECTS, destroying `[sic:]` evidence
- **0910C** the plate prints the non-word **`iniquitetem`** (with `iniquitatem` correct nine words
  earlier) — **CC silently fixed it. That was a legitimate `[sic:]` on Migne's own type, and we
  could never have known.** Third erased marker in the band (cf. 0887B, `doc-/ctus`).
- The head `PSALMUS XL.` carries a period on the plate that our TEI drops.

## ⛔ Direction 3 — the worst: our Latin carries WORDS THE PLATE LACKS
- **0904A** — CC replaces Migne's `quasi,` with **`sed Deus`** and inserts `in`. **The only site in
  the band where our text says something Migne did not.** Flagged for a second eye before patching.
- **0903C** — CC swaps `dicant`/`dicunt` in **opposite directions in adjacent sentences**, which
  rules out a systematic normalization and points to transcription noise.

## Pure CC debris (the English already follows the plate here, and the cruces says so)
- **0902B** `In Hebraeol` → plate reads **`In Hebraeo`**. ✅ **This closes a second of the three
  outstanding `In Hebraeo` candidates — no Hebrew was dropped.** One remains.
- **0902D** `ἀποπομπάιohgr;ι` → plate reads **`ἀποπομπάιῳ`**. An unconverted `&ohgr;` SGML entity
  that survived into our published-facing Latin.

## Unreadable on this copy — Gallica owed
- **0905A** `excrescentibus pilis` — the line break falls exactly at the clip (`f453`).

## One more mod-4 counterexample, and the sharpest one
**Col 909 is 1 (mod 4) and CLEAN, while col 905 — also 1 (mod 4) — is clipped, on adjacent leaves
in a single range.** Applied blind, the withdrawn rule would have withheld the 0910B marker.

---

# BAND A TOTALS — the queue, and what it implies for the work

**~67 sites across the ~46 columns actually read ≈ 1.5 per column.** Band A spans ~78 columns and
the whole work ~240. **If the rate holds, this work carries on the order of 350 CC departures from
Migne, of which we have seen a fifth.** That is consistent with 9003's independent collation of
the sibling PL 114 Psalter (~3 sites per page), and it is now measured twice.

⚑ **This is not an argument for a corpus-wide retrofit** (CLAUDE.md: recover going forward, do not
sweep the done corpus). It is an argument that **on this work the plate is the text and our TEI is
a witness to it** — and that the marker apparatus must never be built from the twin alone.
