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

## ✅ Step 1 DONE 2026-11-06: all 28 chunks translated (10 Opus briefs, ≈2.5M)
55,130 Greek → **70,393 English words (ratio 1.28)**, **642 OCR rows**, markers verified 1..n in every chunk, 36 `[?]`
(26 = Migne's own dotted gaps in Letters 40–42, *exesa in codice*; 10 = spots for the coordinator's plate read). Three
column-head / full-width lacunae read from the plate and translated in (p-0204, p-0222, p-0304: `RESTORED-LINES.tsv`).
Letter 43 = Letter 24 nearly verbatim (a second witness the translator used). Letter 14's "dogmatic letter" title is a
copyist's error per Combefis. Letter 19's central phrase τὴν μίαν ἐνέργειαν (base: μὲν) → image check first.
Sweep brief `SWEEP.md`; rulings `GLOSSARY.md` § V.

## ✅ Step 3 DONE 2026-11-06: image check of every flagged row (coordinator, in session)
**567** rows of kind ocr/doubt/print read on the plate in two passes (`kt-sheet.py` 24 sheets → `--redo` whole lines, 19 sheets):
**R 233 · M 304 · P 25 · ? 5** → `kt-apply.py` → `checked/` (182 applied, 17 applied~, 6 cross-line → `verify/GREEK-PATCHES.tsv`);
`verify/PRINT-ERRORS.tsv` = the 304 M rows (the [sic:] layer). ⚑ **On this base more than half of what the translators flagged
is Migne's own type (304 of 567), not a misread**: the API read was faithful to a careless print (οὐχ before vowels, ταυτόν
unaccented, ᾅδη for ᾅδῃ, κ/χ swaps the compositor made). Settled on the plate: Letter 19's central phrase prints **τὴν μίαν
ἐνέργειαν** (the base's μὲν was the read's error); the three negatives of p0274.05–07 are as the translator restored them
(σώζεσθαι without οὐ, οὔτε φρίττουσι, ἀντικειμένης); p0254.47 prints εὖ δεξάμενα (sense needs οὐ: M); Letter 44's heading
prints περὶ θετικῆς (Latin *commendatitia*); p0356.51 θεοχάριστον is lower-case (an epithet, not a name). Lost-line scan
(`scripts/kt-lost-base.py`, Kraken's read as witness): nothing beyond the three holes already read.

## ✅ Step 4 DONE 2026-11-06: Combefis's apparatus read off every page (8 Sonnet briefs, ≈2.0M) + `notes/place.py`
`scripts/mp-note-crops.py maximus-epistulae` (144 pages, 542 tiles; the yolo tile list is unreliable here — duplicates,
empty strips — so the readers cut their own 600 dpi crops) → `notes/result-{1..8}.jsonl`: **436 notes** (lettered 355 =
Combefis's Scripture locators in the Latin + his long NOTÆ keyed (a)…(z); numbered 121 = the VARIÆ LECTIONES "Fr./Ven./Reg."
variants keyed in the Greek; asterisk 8; 67 markers illegible, kept null). Brief 8's agent caught itself writing rows from
"media removed" images for pp. 342–347 and re-read them. `place.py` → `APPARATUS.json`: **96 Greek-keyed variants to
place · 340 unplaced → cruces** (6 anchors not on the checked page, 15 lines not located → kt-to-site fuzzy match or cruces).
⬜ Combefis's long NOTÆ have `en` (Sonnet working translations) — cruces only, labelled.

## Round 1 findings 2026-11-06 (briefs A–C back: me-001–009, ≈0.75M)
- ⚠ **The CLOSED base text has holes the plate check never saw, two classes, both from reading column STRIPS:**
  (1) **a column head cut off** — p-0204 (col 372): the read began at the strip holding "σμεύσῃς δὶς ἁμαρτίαν", so the
  first **35 lines** (Lazarus and the rich man, David and Job, Sir 7:6–8) were never read; (2) **full-width lines** —
  where one column ends early Migne sets the other across the whole page; the strip kept only the right halves
  (p-0222 col 408 lines 3–5, Bar 5:2–4). Both read from the plate by the coordinator (`RESTORED-LINES.tsv`; p-0204
  lines inserted at the top → me-001's p0204 tags renumbered +35, DOUBTS likewise); the translators then re-Englished
  the passages. ⬜ **A systematic lost-line scan is owed before the image check**: Kraken's own read of the 144 pages
  (running) is the witness — compare its Greek-column lines with the base page by page (kt-lost.py needs adapting:
  here text/ IS the base and the Kraken text is the extra witness). Candidate pages from a djvu line count: 224, 291,
  304, 342 (base ≥20 lines short), then 230, 237, 238, 325, 332, 344, 351.
- ⚠ `pdfimages` is the WRONG renderer for pages/: on 103 of 144 pages it extracted a 1034×204 embedded image, not the
  scan. Re-rendered with `pdftoppm -r 600 -gray` (what pg-ocr.sh does); Kraken re-run on those.
- Translators' first-pass judgements that held on the plate: p-0234.49–50 "φιλίας." = a leaked foot-of-page variant
  (²⁵ Alter cod. Reg. καὶ φιλίας); p-0241.38 "dropped clause" = Combefis's gloss (*siquidem Deus est*), the Greek is
  whole. Letter 6's numbered points run α΄–ε΄ (the card said three). Letters 2–3 address a plural *you*.
- Terms the Opus translators decided (sweep list): μερίζω/ἀμέριστον = partition/unpartitioned, ἀπαράλλακτος =
  unvarying, θεουργέω = make divine (vs θέωσις deification), θεοποιός = deifying (= θεωτικός: sweep), ἐγκράτεια =
  self-mastery, οἰκείωσις = kinship, προσπάθεια = passionate attachment, πρόθεσις = intent, ψυχικός = psychic,
  θέσει = by adoption, ἀεικινησία = ever-moving, ὀντότης = true being, βασιλεία = kingship (human) / kingdom (God's).

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
