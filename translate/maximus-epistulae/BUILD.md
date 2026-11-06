# BUILD brief — Maximus *Epistulae*, step 5 (Sonnet; written by the coordinator, Fable, 2026-11-06)

Do the LOCAL site build of `maximus-epistulae` (28 chunks me-001–028, all Greek) following the Sophronius Greek-chunk
recipe exactly where it applies (`translate/sophronius-orationes/RUN.md` "Step 5 DONE" and the Moschus sections it cites
in `translate/moschus-pratum/RUN.md`: "Placement script", "Greek chapter breaks", "Site build DONE"). Read
`~/patrologia/CLAUDE.md` first, then `translate/maximus-epistulae/RUN.md` whole. Local only: **do NOT deploy, do NOT push;
one local commit at the end** ("Maximus: site build (local)"). Max 3 parallel processes. If a step fails twice for the
same cause, stop and report rather than improvising.

## What is different from Sophronius (read before touching anything)
1. **The base is not Kraken.** `raw/kraken/maximus-epistulae/checked/p-NNNN.txt` = the API vision read of the plate,
   line for line, after `kt-apply.py` (step 3). `ruled/` = the same before kt-apply; `text/` is a symlink to `ruled/`;
   `kraken-text/` + `xml/` = Kraken's OWN read of the same pages (a witness only; line counts ≈ the base's but not 1:1).
   `verify/GREEK-PATCHES.tsv` holds 6 cross-line patches kt-to-site must apply; `verify/PRINT-ERRORS.tsv` = 304 M rows
   (the [sic:] layer, listed on the cruces page like Moschus's, NOT applied to the Greek).
2. **16 duplicate leaves are absent**: pdf pages 266–271, 318–323, 328–331 have no files; `CHUNKS.tsv` ranges span them
   (me-013 = p-0263:1 – p-0273:58). Every page loop must skip a missing page (`data/pg-column-maps/pg091.json`
   `duplicateLeaves` = leaf numbers, pdf = leaf+1). Column map: 2 columns per page, Greek right on even pdf pages.
3. **Paragraph breaks** (`GREEK-BREAKS.tsv`): one per LETTER heading (`LETTERS.json`: first page:line of each of the 45;
   the heading line "Β΄. — Τοῦ αὐτοῦ πρὸς …" stays in the Greek as the paragraph's first line), plus each numbered point
   (lines beginning `α΄.`…`η΄.` at p-0214, 0222, 0231, 0296, 0312) and Migne's italic subheadings inside Letter 12
   and 15 (lines the OCR tables tag kind `heading`, where they are real subheadings and not garbled numerals).
4. **Drops / strips** (`GREEK-DROPS.tsv`, `GREEK-BANDS.tsv`): the OCR-table rows of kind `stray` (Combefis's note calls
   `(a)`…`(z)`, `(1)`…, superscript digits `¹⁹`, running heads, column numbers, leaked foot-of-page lines such as
   p0234.50 `φιλίας.`, Latin lines) and glued band letters at line starts (`Α λομένῃ`, `Β,ΣΔιδομένην` in Kraken's read;
   in the base mostly a lone `Α`/`Β` before the first word). Strip calls and superscripts by pattern across all pages
   (`\(\w{1,2}\)` and `[⁰¹²³⁴⁵⁶⁷⁸⁹]+` inside Greek lines); verify with a grep that none remain in `src/greek/`.
   Band letters: `scripts/mp-bands.py` is wired to PG 87c (djvu `raw/scans/pg087c/…`, `pg087c.json`, `mpcommon`); make a
   `MP_WORK`-aware copy or parametrise it so it reads `raw/pg091/091_djvu.xml`, `pg091.json`, this work's `regions.json`
   and `xml/`; where a band's line cannot be fixed, omit it (the badge is garnish, CLAUDE.md rule 8). Do not invent bands.
5. **The 36 `[?]` in the English.** 26 (all in me-027, Letters 40–42) are Migne's OWN dotted gaps (*exesa in codice*):
   render each as an ellipsis `…` where Migne prints dots, keep the T note, and remove the `[?]`; the Greek keeps Migne's
   dots as printed. The remaining `[?]` (our doubts, plate-checked by the coordinator: p0206.48–49, p0247.18, p0274.10,
   p0317.42, p0340.25, p0352.20, p0357.03, and any left by step 3b) stay, and `plate-gate` needs `plate-reads.json`
   entries for their pages (depth `read`, corners_checked false, note "coordinator plate read 2026-11-06"), as the
   Sophronius Latin build did for pp. 218 and 263.
6. **Apparatus**: `notes/APPARATUS.json` (from `notes/place.py`): 96 Greek-keyed variant notes → `[n:]` in the Greek via
   kt-to-site (use the `lineinitial` setting the Sophronius build added); 340 unplaced (Combefis's lettered Scripture
   locators in the Latin, his long NOTÆ with Sonnet `en` working translations, 8 asterisk) → the cruces page, the `en`
   labelled "working translation". Mirror Scripture locators into the English only where a translator's S note already
   gives the same reference (the Sophronius place.py Latin pass is the model) — otherwise cruces only.
7. **Registry** `data/pg-works.json`: key `maximus-confessor-epistulae`, slug `epistulae`, series pg, volume 91, author
   "Maximus the Confessor", title "Epistulae", titleEn "The Letters", citRange "PG 91, 364–649", greekSource
   "ours-api-vision-read" (say so: NOT Kraken), 28 chunks in me-order, NO `englishState` (Wilson sets it after deploy),
   status "TRANSLATED 2026-11-06 (kt method on a closed API base, Fable anchor + Opus; image-checked; apparatus;
   LOCAL BUILD, not shipped)". `data/work-about.json` (`pg:maximus-confessor-epistulae`) and `data/author-bios.json`
   ("Maximus the Confessor") as DRAFTS prefixed "DRAFT (Wilson to read). "; a DRAFT RECENT line at the top of
   `scripts/build-landing.mjs`. The about text must say: Combefis's text as Migne prints it; the Greek is our own
   reading of the plates (a vision read checked line by line against the page, then every doubtful reading looked up
   again); 45 letters; some letters exist in English elsewhere (Letter 2 in Louth, *Maximus the Confessor*, 1996, and a
   few others in anthologies — say "several of the letters have been translated before; this is a new translation of
   all forty-five") — weak "New" claim, badge per registry rules; Letter 43 ≈ Letter 24; Letters 40–42 printed with
   gaps where Combefis's manuscript was eaten away.
8. **Chain**: CONF entry in `scripts/kt-to-site.py` (prefix `me`, `unwrap=True` if the .en.md paragraphs are
   hard-wrapped — check; `lineinitial`), tables → `kt-to-site` → `mark-sentences` → `WIDE_PARA=1 align-sentences
   maximus-confessor-epistulae --write` → `verify-english-pg` → `plate-gate` → `build-work-page-pg` → `build-site` →
   `build-lookup-grc.py` → `preflight` (target: 9 of 10, the blind polarity read being the 10th). Then rebuild Moschus,
   Procopius AND Sophronius and confirm byte-identical output apart from `generated` dates (restore those from git).
9. **Report**: each step's result, every deviation from the recipe, the counts (chunks, cruces, placed notes, bands,
   drops, alignment %), and what you could not do.
