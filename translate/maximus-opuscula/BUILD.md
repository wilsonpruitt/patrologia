# BUILD brief — Maximus *Opuscula theologica et polemica*, step 5 (Sonnet; written by the coordinator, Opus, 2026-11-06)

Do the LOCAL site build of `maximus-opuscula` (30 chunks mo-001–030: 29 Greek + mo-015 Latin-only) following the recipe of
`translate/maximus-epistulae/BUILD.md` (read it whole first: same volume, same editor, same pipeline) and the Sophronius
Latin-only page type (`translate/sophronius-orationes/RUN.md`, "Step 5 DONE", the Or. I/III/VI pages). Read
`~/patrologia/CLAUDE.md` first, then `translate/maximus-opuscula/RUN.md` whole. Local only: **do NOT deploy, do NOT push;
one local commit at the end** ("Maximus Opuscula: site build (local)"). Max 3 parallel processes. If a step fails twice
for the same cause, stop and report rather than improvising.

## What is different from the Epistulae (read before touching anything)
1. **The base IS Kraken** (as Sophronius): `raw/kraken/maximus-opuscula/checked/p-NNNN.txt` = Kraken → `kt-rules.py` →
   `kt-apply.py` (image check, passes 1+2), then **pp. 110, 111, 114 replaced line for line by a plate transcription**
   (`raw/kraken/maximus-opuscula/PLATE-110-114.tsv`; already written into `checked/`; never regenerate `checked/` without
   re-applying it, RUN.md says how). `verify/GREEK-PATCHES.tsv` = **39 cross-line patches** kt-to-site must apply;
   `verify/PRINT-ERRORS.tsv` = **194 M rows** (the [sic:] layer, listed on the cruces page, NOT applied to the Greek).
   `greekSource` = "ours-kraken".
2. **12 duplicate leaves are absent** in this range: pdf 38–39, 44–45, 54–55, 62–63, 66–67, 104–105 (`pg091.json`
   `duplicateLeaves`, leaf = pdf − 1). Every page loop skips a missing page. Greek right on even pdf pages.
3. **Pieces and paragraph breaks**: `PIECES.tsv` (27 starts, page:line); a paragraph break at each piece heading, at each
   SCHOLIA heading, at each numbered chapter/definition line (α΄. β΄. …), and at each testimony lemma in the florilegia
   (Opusc. 15, 23, 26, 27: lines beginning Τοῦ ἁγίου … / Τοῦ αὐτοῦ …).
4. **mo-015 = Opusc. 12, LATIN ONLY** (pdf 87–88, cols 141–144, Anastasius's Latin): use the Sophronius Latin-only page type.
   ⚠ Its last 7 Latin lines print at the TOP of p-0089 (cols 145|146, above Opusc. 13's Greek): they are in
   `RESTORED-LINES.tsv` (tags `L.top1–4`, `R.top1–3`), NOT in `mo-015.lines.tsv` — append them to the Latin of mo-015 and
   give p-0089 its Opusc. 12 Latin block before Opusc. 13 begins. Latin verdicts: `IMAGE-CHECK-LATIN.tsv` (R rows: apply to
   the displayed Latin as Sophronius did). Footnote 91 (p-0088, *Hæc forte post Theodori papæ…*) is apparatus, not text.
5. **Drops / strips**: OCR rows of kind `stray` (note calls, running heads OPUSCULA THEOLOGICA ET POLEMICA / S. MAXIMI
   CONFESSORIS, leaked Latin headings such as p0126.07 THEODORI BYZANTINI MONOTHELITAE and p0072.33 AD CATHOLICOS PER
   S[ICILIAM], band letters); strip calls and superscripts by pattern; band letters per `mp-bands.py` made MP_WORK-aware as
   the Epistulae build did (or omit an unfixable band: never invent one).
6. **[?] in the English (6)**: mo-015 p0087.L.20 (the plate confirms the Latin), mo-016 p0089.14, mo-020 p0114.02 and
   p0114.15 (illegible on the plate), mo-021 p0116.53→0117.01, mo-026 p0140.19. They stay. `plate-gate` needs
   `data/plate-reads.json` entries for pages 87, 88, 89, 110, 111, 114, 116, 117, 140 (depth `read`, corners_checked
   false, note "coordinator plate read 2026-11-06") and for every page carrying a [sic:] from PRINT-ERRORS (all read in
   the image check: same note).
7. **Apparatus**: `notes/APPARATUS.json` from `python3 translate/maximus-opuscula/notes/place.py` (run it first; report its
   counts). Greek-keyed variants → `[n:]` in the Greek; everything unplaced (Scripture locators, Combefis's NOTÆ and the
   MONITUM with Sonnet `en` working translations) → the cruces page, `en` labelled "working translation". Records with
   `orphanCall` / `scholionCall` / `fullWidthBody` are not notes (place.py skips them).
8. **Registry** `data/pg-works.json`: key `maximus-confessor-opuscula`, slug `opuscula`, series pg, volume 91, author
   "Maximus the Confessor", title "Opuscula theologica et polemica", titleEn "Theological and Polemical Opuscula",
   citRange "PG 91, 9–286", greekSource "ours-kraken", 30 chunks in mo-order, NO `englishState`, status "TRANSLATED
   2026-11-06 (kt method, Opus; image-checked twice; pp. 110/111/114 plate-transcribed; apparatus; LOCAL BUILD, not
   shipped)". `data/work-about.json` (`pg:maximus-confessor-opuscula`) as a DRAFT prefixed "DRAFT (Wilson to read). " and a
   DRAFT RECENT line at the top of `scripts/build-landing.mjs`. The about text must say: Combefis's edition (1675) as Migne
   prints it, 27 pieces numbered in the modern order; the Greek is our own OCR of Migne's plates, every doubtful reading
   checked against the page image, and three over-inked pages transcribed by eye; Opusculum 12 survives only in
   Anastasius's Latin and is translated from it; two pages of our scan are clipped at the gutter, so a few line-initial
   letters there are read from the sense; **a complete English translation exists: Kevin M. Clarke, *The Opuscula and the
   Dispute with Pyrrhus* (Fathers of the Church, Catholic University of America Press, 2026), and earlier partial ones
   (Louth 1996: Opusc. 3, 7)** — so the badge is the weak "New English translation" (never "First"; registry rules), and
   the about text names Clarke as the reader's other complete English. Author bio "Maximus the Confessor" already exists
   (Epistulae): reuse, do not duplicate.
9. **Chain**: CONF entry in `scripts/kt-to-site.py` (prefix `mo`, check `unwrap`, `lineinitial`, `stripcalls=True`,
   `wrapnotes=True`, Latin-only chunk support as Sophronius) → `kt-to-site` → `mark-sentences` → `WIDE_PARA=1
   align-sentences maximus-confessor-opuscula --write` → `verify-english-pg` → `plate-gate` → `build-work-page-pg` →
   `node scripts/build-site.mjs` → `build-lookup-grc.py` → `node scripts/preflight.mjs` (target 9 of 10; the blind read is
   the 10th). Then rebuild the Epistulae, Sophronius and Moschus and confirm byte-identical output apart from `generated`
   dates (restore those from git).
10. **Report**: each step's result, every deviation, the counts (chunks, cruces, placed notes, bands, drops, alignment %,
    preflight), and what you could not do.
