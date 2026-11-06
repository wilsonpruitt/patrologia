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

## ✅ Step 5 DONE 2026-11-06 (Sonnet, from BUILD.md; local, nothing pushed or deployed): 28 site chunks, preflight 9 of 10
Registry key `maximus-confessor-epistulae` (slug `epistulae`, DRAFT about/bio/RECENT line for Wilson; NO `englishState`). `CONF['maximus-epistulae']` in `kt-to-site.py`
(`unwrap`, `lineinitial`, new `stripcalls`: Combefis's calls `(b)` `(1)` `(ι΄)` `¹⁹` stripped by pattern, 0 left in `src/greek/`; columns zero-padded to `[0364]`,
every builder wants `\[\d{4}\]`, PG 91 has 3-digit columns, so the English cards' `[364]` are padded on the way in). Tables by `scripts/mx-tables.py` (after
`MP_STRICT=1 MP_WORK=maximus-epistulae MP_DJVU=raw/pg091/091_djvu.xml MP_CMAP=data/pg-column-maps/pg091.json MP_BYCLASS=1 MP_RANGES=200-265,272-317,324-327,332-359 python3
scripts/mp-bands.py`, which gained those switches; defaults unchanged): GREEK-BREAKS 99 (45 letter heads + 24 numbered scholia + 30 italic subheadings of Letters 12/13/15 + ΣΧΟΛΙΟΝ/ΣΧΟΛΙΑ,
located by eye), GREEK-DROPS 8 whole lines, GREEK-BANDS 541 (1 glued letter stripped by mp-bands, p-0274:1 `Ἀ` by the table), GREEK-PATCHES +31 (stray/space/heading rows, translator
readings, NOT plate-checked; the 7 heading numerals not plate-checked either, 3 seen on the plate agree). `notes/place.py`: English mirror (monotone DP, 182 of 260 Combefis Scripture
locators now `[n:]` in the English where a translator's S note has the same reference). 87 of 96 Greek-keyed variants placed in the Greek; 158 notes + 482 translator notes on the cruces page,
plus the 304 print-error rows as a table (no `[sic:]`). Me-027: 22 `[?]` that stand on Migne's dotted gaps became `…`; 4 stay (p0351.18, 0352.20, 0352.46, 0352.47: no dots on the plate).
`plate-reads.json`: 8 pages (206, 247, 274, 317, 340, 351, 352, 357) for the 11 `[?]` that remain. Align (`WIDE_PARA=1`) 96.3% sentence-level, ratio 1.14; verify OK; plate-gate OK (0 markers).
Moschus, Procopius, Sophronius rebuilt through kt-to-site → mark → align → verify → build-work-page-pg: `src/` byte-identical; only `generated` dates differed (restored from git).
⬜ Blind polarity read (preflight's 10th), then Wilson: about/bio/RECENT text, deploy (own OK), push (own OK), `englishState: ours`.

## ✅ Blind polarity read DONE 2026-11-06 (6 Opus readers): preflight 10 of 10 (local; nothing pushed or deployed)
Reports `data/briefs/MAXIMUS-BLIND-READ-R1…R6.md`; record `data/polarity/maximus-confessor-epistulae.json` (26 findings: 23 applied, 3 rejected; the
note lists each). Every fix is in the SOURCE English (`me-0NN.en.md`), each checked against the Greek and Combefis's Latin; no note added or removed, markers
re-verified 1..n in all 28 cards.
- **English, our slips:** me-001 "by his inclining toward the One, free of relation" (ἄσχετος), "when it wishes" (βουλομένην circumstantial); me-009 "For she
  preserves man …; but ⟨God⟩ is of a nature to make him god" + T note (Migne's Greek has no subject; Combefis supplies *Deus*); me-010 "not to hold back … anything";
  me-011 "it follows to say that the other is not either"; me-012 "the invisible endured to fall under our sense", the μηδέ of 485A carried inside the condition
  ("not even as of things" was added); me-014 "Considering" (σκοποῦντας as printed), "entreaty to blasphemies"; me-024 "contempt for those words", "shown in no way
  idle", "so that he, being seen even bodily"; me-027 "believing that these had not been sent". **Class sweeps:** ἀδιαιρέτως = "without division" (me-011, me-012 ×5
  + note, me-021 with "without confusion"); πάντως modal = "certainly" (the five named sites me-015 ×2, me-019 ×3, plus me-013, me-014, me-015, me-020, me-021 ×3;
  "altogether" renderings and πάντη τε καὶ πάντως left); thou for singular second persons (Cyril, me-011; Deut 6:5 in me-014; no other singular Scripture "you").
- ⚑ **Editorial call, Letter 43 col 641:** Migne prints Οὕπω (= οὔπω, "not yet"), Combefis *Nondum*; it construes as a reproach, so the English now FOLLOWS THE
  PRINT ("For not yet are the divine gifts honoured, nor …") with a T note that Letter 24's twin reads Οὕτω and the print may be a slip. IMAGE-CHECK p0355.29 M → P
  (`kt-apply.py` re-run: checked/ identical, PRINT-ERRORS −1). **Departures from Migne's print that stand** (each visible in a T note or the print-error table):
  me-006 Ἀνέχετε → "Take away" (Ἀνέλετε, Latin *Auferte*; note 5); me-027 Letter 43 φθειρομένην → "carried" (Letter 24's φερομένην; PRINT-ERRORS p0354.42 only, no
  anchored note); and the earlier logged M rows (ποιότητος, ἀκούσιον, καλῶς, καινῆς …).
- **Greek file = our read, not Migne (GREEK-PATCHES +8):** p-0273:48 τὸ τοῦ Ἀντιχρίστου, ὃ ἀκηκόατε ὅτι ἔρχεται· restored (the line runs over into the Latin
  column; IMAGE-CHECK p0273.48 was M "Migne" → R, so the print-error table no longer accuses Migne), me-013's ⟨⟩ and T note corrected; p-0274:5–11 σώζεσθαι without
  οὐ, οὔτε φρίττουσι, ἀντικειμένης, δρέπονται ἀνοίας (plate seen; me-014's [?] resolved to "reap", notes rewritten); p-0296:16 Λόγον; p-0350:1 καρδίαν; each T note
  now says the misreading was ours. ⚠ **Cause: `kt-apply.py` applies R verdicts only of kind ocr/space/subscript**, so plate-confirmed R rows of kind doubt/print
  never reached `checked/` (the coordinator's "already applied" for p0350.01 was not so). ⬜ **21 such rows remain unapplied** (p0216.10, 0234.34, 0265.04, 0265.35,
  0276.44, 0287.20, 0289.22, 0284.29, 0295.22/33/35, 0301.02/03/06, 0316.43/46/49, 0317.37, 0325.37, 0333.14, 0352.01): some are clear (προβιβάζουσιν, σπουδάσωμεν,
  κραιπάλῃ, παμφαοῦς), some conflict with a crux (p0317.37 ὁ ἡμῶν ἀγαθός, p0316.43 ἡ κατοικία, p0295.22 plate=ὁρᾷν) — a coordinator's call, not patched blind.
- **Pipeline:** (1) `align-sentences.mjs` paired a letter's heading lines into the previous letter's group, so "LETTER 30" carried Letter 28's markers and a stray
  `⟦p2⟧ ⟦s1+…⟧` hung after the title (R6); same in 0011 at a Letter 12 subhead. Fixed by letter-head parity in the pairing and sentence costs and by splitting a group
  at its English openers (LETTER lines, whole-italic subheads) when they match the Greek paragraphs one for one — gated on works whose English has LETTER lines
  (Moschus/Procopius/Sophronius terms are 0). Alignment **96.3% → 100% sentence-level**. (2) `kt-to-site.py` cut hard-wrapped notes to their FIRST line on the cruces
  page (22 Maximus notes): `wrapnotes` CONF flag, Maximus only. ⬜ Sophronius has 41 hard-wrapped notes with the same truncation; turning the flag on there changes its
  cruces.md (a separate, approved rebuild). (3) R5's duplicate ⟦s17⟧ is NOT a defect: a repeated id is the aligner's one-to-many convention (lib/sentence-markers.mjs).
- Rebuild: kt-apply → kt-to-site → mark → `WIDE_PARA=1` align (100%) → verify OK → plate-gate OK → build-work-page-pg → build-site → build-lookup-grc → polarity-record
  → preflight **10 of 10**. Moschus, Procopius, Sophronius rebuilt through build-work-page-pg: `src/` byte-identical, only `generated` dates (restored from git).
⬜ Remaining before ship: Wilson reads the DRAFT about/bio/RECENT text and the ⚑ call above · deploy (own OK) · push (own OK) · `englishState: "ours"`.
