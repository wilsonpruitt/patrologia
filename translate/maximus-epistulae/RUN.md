# RUN: Maximus the Confessor, *Epistulae* 1–45 (PG 91.364–649) via the kt method on a non-Kraken base

Started 2026-11-06 (Fable coordinator; Wilson: "shift the queue towards Maximus" → "Fable go"). Fifth kt-method work,
the first whose Greek is NOT a Kraken read: the base is the API vision read of PG 91 pp. 200–359 checked once against
the plate (`raw/pg091/checked/`, pilot 0i in `pg-paired-pilot.md`, CLOSED 2026-10-15 at $14.15; Wilson: no more
reading passes). Burn estimate given at the go: ≈5.5–6M all-in (Fable anchor ≈0.2M · Opus translation ≈3.3M · Sonnet
sweep/apparatus/build ≈1.5M · Opus blind read ≈1.2M).

## What Migne prints here, and what we translate
PG 91.361–650 = Combefis's *Epistolae* with his Latin. pdf pp. 200–359 of `raw/pg091/091.pdf` (p199 = Combefis's
Latin monitum, not ours). **160 scanned pages, of which 16 are duplicate leaves** (the scanner photographed three runs
twice: 266–271 = 260–265, 318–323 = 312–317, 328–331 = 324–327; found by text identity, confirmed by the running-head
column numbers): **144 real pages = cols 363–650**, Greek right on even pdf pages, left on odd (the CLLG gutter split
agrees on every page). Column map `data/pg-column-maps/pg091.json` (derived, not plate-anchored). **55,130 Greek
words** in 45 letters (Letter 12 = 10.4K, 15 = 6.4K, 1 = 5.5K, 13 = 4.9K; 30–42 are a page or less).

## Setup 2026-11-06 (in session, Fable)
- `raw/kraken/maximus-epistulae/{ruled,checked}/p-NNNN.txt` = the 144 real pages of `raw/pg091/checked/` (same line
  numbers as the plate check's ledgers); `checked/DOUBTS.tsv` (408 rows) = the 298 open readings in the kt shape + 133
  lines where a duplicate leaf's second read differs after stripping accents (a free second witness; p321/p315 and
  p269/p263 differ on most lines — one of each pair is a bad run). `regions.json` = the CLLG gutter boxes (yolo
  overwrites it when `htr/pg-ocr.sh` finishes); `pages/` = pdfimages renders; `text/` = Kraken's own read when the
  run finishes (then re-point for kt-sheet: it wants the BASE text at `text/`; see below).
- ▶ **Kraken (pg-greek-cllg-ft-v1) running in the background over the 144 pages** (`htr/pg-ocr.sh … @pages.txt`,
  log `raw/kraken/maximus-epistulae/kraken.log`, ≈1.5 h): only for the line boxes + text `xml/` that `kt-sheet.py`
  needs to crop the image check; its text is a third witness, not the base. ⬜ When done: `mv text kraken-text; ln -s
  ruled text`.
- `scripts/kt-scaffold.py` gained the `maximus-epistulae` entry (run with `--checked` so DOUBTS reach the scaffold).
  28 scaffolds `me-001 … me-028` per `CHUNKS.tsv` (letters whole where ≤2.3K words, long letters cut at page ends,
  small letters grouped). `LETTERS.json` = the 45 heads (page:line) and word counts.
- Anchor `ANCHOR-ep1.en.md` (Letter 1, p-0200:1 – p-0201:44, ≈590 Greek → ≈820 English); `GLOSSARY.md` (§ I
  inherited from Sophronius, binding; § II Maximus's own: γνώμη = inclination, ἕξις = habit, σχέσις = relation,
  λόγος/τρόπος = principle/mode, μοναδικός = singular, ἔρως/πόθος/ἔφεσις = yearning/longing/aspiration …);
  `CARD.md`; register section "Seventh-century ascetic and dogmatic letter (Maximus)" M1–M6 in `translation-style.md`.
  ⚠ The Sophronius glossary's forecast "γνώμη = judgement" is superseded (its row now says so): κρίσις needs the word.

## Plan
1. Translation: 10 Opus briefs × 3 chunks (A 001–003 · B 004–006 · C 007–009 · D 010–012 · E 013–015 · F 016–018 ·
   G 019–021 · H 022–024 · I 025–027 · J 028), three at a time, from `kt-scaffold.py maximus-epistulae brief …`.
2. Sweep: letter numbering and headings, glossary clashes (Opus-chosen terms vs the table), seams between chunks of
   one letter, the "to the same" chain.
3. Image check of every flagged row (`kt-sheet` → `kt-verdict` → `kt-apply` → `checked/`), plus the settled doubts.
4. Apparatus: Combefis's foot-of-page notes (a), (b), (1), (2) … every page (Sonnet), `notes/place.py`.
5. Site build (kt-to-site CONF, GREEK-BANDS from the plate's gutter letters — not read with this text —, mark/align,
   verify, plate-gate, build-site, lookup, preflight). Registry key `maximus-confessor-epistulae`, slug `epistulae`.
6. Blind polarity read (Opus), then Wilson: about/bio text, deploy (own OK), push (own OK), `englishState: ours`.
