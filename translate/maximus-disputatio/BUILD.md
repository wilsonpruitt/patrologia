# BUILD brief — Maximus *Disputatio cum Pyrrho*, step 5 (Sonnet; written by the coordinator, Opus, 2026-11-14)

Do the LOCAL site build of `maximus-disputatio` (6 chunks md-001–006, all Greek) following the recipe the Opuscula used:
`translate/maximus-opuscula/BUILD.md` and `translate/maximus-opuscula/RUN.md` § "Step 5 DONE" plus its rebuild-chain
paragraph (read both whole first: same volume, same editor, same pipeline). Read `~/patrologia/CLAUDE.md` first, then
`translate/maximus-disputatio/RUN.md` whole. Local only: **do NOT deploy, do NOT push; one local commit at the end**
("Maximus Disputatio: site build (local)"). Max 3 parallel processes. If a step fails twice for the same cause, stop and
report rather than improvising.

## What is different from the Opuscula (read before touching anything)
1. **Base = Kraken** `raw/kraken/maximus-disputatio/checked/p-NNNN.txt` (kt-rules → kt-apply, image check in three
   passes; no plate transcription). `verify/GREEK-PATCHES.tsv` = **12 cross-line patches** kt-to-site must apply;
   `verify/PRINT-ERRORS.tsv` = **33 M rows** (the [sic:] layer, listed on the cruces page, NOT applied to the Greek).
   `greekSource` = "ours-kraken".
2. **Pages 162–195, no duplicate leaves; p-0195 lines 1–19 only** (Ἀμήν; the MONITUM and *De anima* follow and are not
   ours: nothing of them may reach the page). Greek right on even pdf pages, left on odd (`pg091.json`).
3. **Paragraphs** = the dialogue's turns: a break at every speaker label line (ΠΥΡ./ΜΑΞ., and Kraken's garbled forms
   ΠΓΡ., ΠΓΡΡΟΣ., ΜΑΖ., ΜΛΞ., IYP., ΠΡ. … — the OCR tables' `heading` rows list them), at the recorder's title
   (p0162.01–18) and at the closing narrative (p-0194/195). The English already has one paragraph per turn
   (`PYRRHUS.` / `MAXIMUS.`): the alignment must pair turn with turn.
4. **No Latin-only chunk** (no Sophronius page type needed).
5. **Drops / strips**: OCR rows of kind `stray` (note calls, running heads DISPUTATIO CUM PYRRHO / S. MAXIMI CONFESSORIS,
   foot-of-page variant lines that leaked into a page's last Greek lines, e.g. p-0194's last line `μείνας.,,μεμορημένοςΣ,`,
   band letters); strip calls and superscripts by pattern; band letters per `mp-bands.py` with this work's page range
   (or omit an unfixable band: never invent one).
6. **[?] in the English**: count them after the English fixer (expected 0; p0166.41's was replaced by a bracketed supply
   from the Latin). `plate-gate` needs `data/plate-reads.json` entries for every page carrying a [sic:] from
   PRINT-ERRORS (all read in the image check: depth `read`, corners_checked false, note "image check 2026-11-14").
7. **Apparatus**: `notes/APPARATUS.json` from `python3 translate/maximus-disputatio/notes/place.py` (run it first; report
   its counts). Greek-keyed numbered variants → `[n:]` in the Greek; everything unplaced (lettered Scripture locators,
   Combefis's NOTÆ with Sonnet `en` working translations, orphan calls are not notes) → the cruces page, `en` labelled
   "working translation".
8. **Registry** `data/pg-works.json`: key `maximus-confessor-disputatio`, slug `disputatio`, series pg, volume 91, author
   "Maximus the Confessor", title "Disputatio cum Pyrrho", titleEn "Disputation with Pyrrhus", citRange "PG 91, 287–354",
   greekSource "ours-kraken", 6 chunks in md-order, NO `englishState`, status "TRANSLATED 2026-11-14 (kt method, Opus;
   image-checked in three passes; apparatus; LOCAL BUILD, not shipped)". `data/work-about.json`
   (`pg:maximus-confessor-disputatio`) as a DRAFT prefixed "DRAFT (Wilson to read). " and a DRAFT RECENT line at the top of
   `scripts/build-landing.mjs`. The about text must say: the record of the debate at Carthage in July 645 before the
   patrician Gregory, in Combefis's edition (1675) as Migne prints it; the Greek is our own OCR of Migne's plates, every
   doubtful reading checked against the page image; in our scan the first letters of the Greek lines on two pages are
   smeared and two pages are cut at the right margin, so a few letters there are read from the sense and Combefis's
   Latin; one clause Migne's Greek omits (an eye-skip in the print) is supplied in brackets from the Latin; **English
   translations exist: Kevin M. Clarke, *The Opuscula and the Dispute with Pyrrhus* (Fathers of the Church, Catholic
   University of America Press, 2026), and Joseph P. Farrell, *The Disputation with Pyrrhus* (1990)** — so the badge is
   the weak "New English translation" (never "First"; registry rules), and the about text names both. Author bio "Maximus
   the Confessor" already exists: reuse, do not duplicate.
9. **Chain**: CONF entry `maximus-disputatio` in `scripts/kt-to-site.py` (prefix `md`; start from the Opuscula's flags
   `stripcalls`, `lineinitial`, `wrapnotes`, `showen`, `anglenotes`; no `unwrap` unless the Opuscula's reason applies) →
   kt-to-site → mark-sentences → `WIDE_PARA=1` align-sentences maximus-confessor-disputatio --write → verify-english-pg →
   plate-gate → build-work-page-pg → index-work-pg → `node scripts/build-site.mjs` → build-lookup-grc.py →
   `node scripts/preflight.mjs` (target 9 of 10; the blind read is the 10th). Then rebuild the Opuscula, Epistulae,
   Sophronius, Moschus and Procopius and confirm byte-identical output apart from `generated` dates (restore those from
   git). ⚠ `ox-tables.py` / `ox-latin-residue.py` are Opuscula-specific: run them only as part of the Opuscula rebuild.
10. **Report**: each step's result, every deviation, the counts (chunks, cruces, placed notes, bands, drops, alignment %,
    preflight), and what you could not do.
