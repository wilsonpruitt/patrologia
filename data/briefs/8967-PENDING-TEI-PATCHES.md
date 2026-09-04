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
