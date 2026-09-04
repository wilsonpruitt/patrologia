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
