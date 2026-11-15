# RUN — Maximus the Confessor, *Disputatio cum Pyrrho* (PG 91.287–354), queue #2

Opened 2026-11-14 (Opus coordinator). **Wilson's go 2026-11-14: "opus go"** on the stated burn ≈2M (queue ≈1.4M; the
Opuscula ran 8.5M against 6M, so ×1.4). Models as the Opuscula: Opus translators and plate readers, Sonnet volume work
(sweep, apparatus, build), no Fable anchor (register + glossary = `maximus-opuscula/GLOSSARY.md` § VIII and the
Epistulae card; `translation-style.md` M1–M6). Three agents at a time. Register key `maximus-confessor-disputatio`,
slug `disputatio`, live path `/pg/91/disputatio/`. Badge "New English translation": Clarke 2026 (CUA, FOTC, same volume
as the Opuscula) and Farrell 1990 exist; name Clarke as on the Opuscula.

Method = the kt chain exactly as run on the Opuscula (`translate/maximus-opuscula/RUN.md`): Kraken base → kt-rules →
kt-lost → myriobiblos witness (kt-witness) → chunks/card/briefs → translation → sweep → image check (every row) →
kt-apply (fixed 2026-11-14, `0241c7da`) → apparatus (Combefis's notes, every page) → build → blind read → Wilson.
⚑ Opuscula lessons carried: bound chunks by where each column's text ends; test the last scaffold line for a
full-width footnote; kt-apply resets `checked/` from `ruled/`, so any plate transcription must be re-written after it.

## Setup 2026-11-14 (in session, no API tokens)
- **Pages.** `raw/pg091/091.pdf` pdf pp. **162–195** = cols 287–354 by the Opuscula law (p. 162 head DISPUTATIO CUM
  PYRRHO, *Acta disputationis* / ΠΑΡΑΣΗΜΕΙΩΣΙΣ ΤΗΣ ΓΕΝΟΜΕΝΗΣ ΖΗΤΗΣΕΩΣ; djvu p. 194 prints 352; p. 196 = 355 is the
  following *De anima*). No duplicate leaves: p. 200 = 363/364 still holds. ⬜ Read p. 195 on the image: where the
  Disputatio ends and whether Combefis's notes or the next piece start on that page.
- **Column map** `data/pg-column-maps/pg091.json` + 34 leaves (greekSide from colLeft mod 4).
- **kt-scaffold** WORKS += `maximus-disputatio`.
- **Kraken launched** 2026-11-14 over `raw/kraken/maximus-disputatio/pages.txt` (34 pages, `htr/pg-ocr.sh`, beside the
  whole-PG queue; log `pg-ocr.out`, `kraken.log`).
- **Second witness:** myriobiblos `raw/mirrors/myriobiblos-maximos/prospyrron.html`, the whole work (≈12.2K Greek tokens,
  graves written as acutes, monotonic-ish; mislabelled "PG 90" in its header).

## ✅ Step 0 DONE 2026-11-14 (Opus coordinator, in session): base, chunks, card, briefs
- **Kraken** 34/34 pages → `kt-rules.py` (485 changes: glyph 243, lexical 125, accent 117).
- **kt-lost**: 3 BODY candidates, all present in text/ (p-0177 lines 18/30 with a misread note call `(e)`; p-0178.42 with a
  damaged ΠΥΡ.) → nothing restored. FOOT? lines = Combefis's numbered variants (`al.`, `Fr.`, `ἴσ.`) and the NOTÆ, set
  at the foot of most pages (p. 182: notes, then NOTÆ (g) Τῆς βασιλίδος …) → the apparatus step reads them.
- **End of the work: p-0195:19 (Ἀμήν).** p. 195 then prints a MONITUM and *De anima* (Τοῦ μακαρίου Μαξίμου μοναχοῦ, Περὶ
  ψυχῆς, col. 353 C): not ours.
- **Witness**: `kt-witness.py` on myriobiblos `prospyrron.html`, 24 blocks of 500 words, 91.6–98.2% matched → **363
  `witness` rows** in `checked/DOUBTS.tsv` (67 large blocks skipped as eye-skips/edition differences).
- **Chunks** (`CHUNKS.tsv`): 6 at page ends, md-001 162–166 · md-002 167–171 · md-003 172–177 · md-004 178–183 ·
  md-005 184–189 · md-006 190–195:19 (1.8–2.2K Greek words; 11,726 in all). Scaffolds `--checked`.
- **Card** `CARD.md` (from the Opuscula card: dialogue speaker labels, *thou* both ways, recorder's title + closing
  narrative); **glossary** = the Opuscula's (§§ I–VIII), unchanged.
- **Briefs** `_briefs/md-001_002`, `md-003_004`, `md-005_006` (16.6–17.8K words): three briefs of two, one round.

## Step 1 — translation (Opus, all three briefs at once)
- Round 1 launched 2026-11-14: md-001_002, md-003_004, md-005_006.
