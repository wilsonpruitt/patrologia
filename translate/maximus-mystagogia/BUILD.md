# BUILD brief — Maximus *Mystagogia*, step 5 (Sonnet; written by the coordinator 2026-11-15)

Do the LOCAL site build of `maximus-mystagogia` (6 chunks my-001–006, all Greek) following the recipe the *Disputatio* used last
week: read `translate/maximus-disputatio/BUILD.md` whole and `translate/maximus-disputatio/RUN.md` § "Step 5 DONE" (and its
`scripts/dx-tables.py`, which you will copy as `scripts/my-tables.py`). Read `~/patrologia/CLAUDE.md` first, then
`translate/maximus-mystagogia/RUN.md` whole. Local only: **do NOT deploy, do NOT push, do NOT commit** (the coordinator commits).
Max 3 parallel processes. If a step fails twice for the same cause, stop and report rather than improvising.
After any rebuild, restore `data/volumes.json`'s `generated` date with `git checkout data/volumes.json` if that is its only change.

## What is different from the Disputatio
1. **Base = Kraken** `raw/kraken/maximus-mystagogia/checked/p-NNNN.txt`. `verify/GREEK-PATCHES.tsv` = **4 cross-line patches**;
   `verify/PRINT-ERRORS.tsv` = **26 M rows** (the [sic:] layer: listed on the cruces page, not applied to the Greek). greekSource "ours-kraken".
2. **Pages**: pdf 363–383 and 388–397 (**384–387 are duplicate leaves**, moved to `raw/kraken/maximus-mystagogia/dups/`: never use them).
   **p-0363 lines 1–15 are the END OF THE PRECEDING PIECE** (a dedicatory letter, Venice 1599): the work starts at p0363.16 (the title).
   p-0368 lines 54–55 are leaked foot-of-page variant lines (drop). **p-0397 ends at line 45 (Ἀμήν)**. Column map `data/pg-column-maps/pg091.json`
   (Greek left on odd pdf pages, right on even; 388 = 699/700).
3. **Paragraphs** = the work's sense units, not dialogue turns: a break at the title (p0363.16–25: Greek title + leaked Latin title lines,
   the Latin ones are drops), at the ΠΡΟΟΙΜΙΟΝ, and at every **chapter heading** (Combefis's ΚΕΦ. numerals + title; Kraken garbles them and
   the Latin "CAPUT n" heads leak into the Greek — the OCR tables' `heading` and `stray` rows list them). The English has `CHAPTER n` lines
   (1–24) with the chapter title in italics beneath, and the Proem under the title `THE MYSTAGOGIA`: the alignment must pair chapter with chapter.
4. **Apparatus**: `translate/maximus-mystagogia/notes/APPARATUS.json` is already built (`python3 translate/maximus-mystagogia/notes/place.py`:
   116 notes, 65 Greek placed-candidates, 14 unplaced, 7 placed by word): Greek-keyed numbered variants → `[n:]`; lettered Scripture locators
   and unplaced → the cruces page (`en` labelled "working translation").
5. **[?] in the English**: exactly 1 expected (my-005 note 19, p0391.17: the plate has no verb; keep it). plate-gate needs `data/plate-reads.json`
   entries for every page with a [sic:] (depth `read`, corners_checked false, note "image check 2026-11-15").
6. **Registry** `data/pg-works.json`: key `maximus-confessor-mystagogia`, slug `mystagogia`, series pg, volume 91, author "Maximus the Confessor",
   title "Mystagogia", titleEn "Mystagogy", citRange "PG 91, 657–717", greekSource "ours-kraken", 6 chunks in order, **NO `englishState`**,
   status "TRANSLATED 2026-11-15 (kt method, Opus; image-checked in two passes; apparatus; LOCAL BUILD, not shipped)". Place it after the
   Disputatio entry (JSON: escape any `"` inside strings). `data/work-about.json` (`pg:maximus-confessor-mystagogia`, indent 2 like the file) as a
   DRAFT prefixed "DRAFT (Wilson to read). " and a DRAFT RECENT line at the top of `scripts/build-landing.mjs`'s RECENT list. The about text must say:
   Maximus's interpretation of the church building and of the liturgy (c. 628–630), in the edition Migne prints (Combefis's Latin facing); the Greek
   is our own OCR of Migne's plates, every doubtful reading checked against the page image; Combefis's variant readings (codex A, codex R, his own
   edition "Fr.") are shown as notes, and the English follows a variant in two places where the print is strained and a manuscript and the Latin
   agree (named in the notes); one sentence (col. 701) has no verb in the Greek and is marked. **English translations exist: Julian Stead, *The
   Church, the Liturgy and the Soul of Man* (St Bede's, 1982); George C. Berthold, *Maximus Confessor: Selected Writings* (Paulist, 1985);
   Jonathan Armstrong (2019)** — so the badge is the weak "New English translation" (never "First"), and the about text names them; translationStatus
   to match the Disputatio's field shape. The modern critical edition (Boudignon, CCSG 69, 2011) was NOT consulted: say so in one clause.
   Author bio "Maximus the Confessor" exists: reuse it.
7. **Chain**: CONF entry `maximus-mystagogia` in `scripts/kt-to-site.py` (prefix `my`; start from the Disputatio's flags) → `my-tables.py`
   (drops/breaks/bands from `mp-bands.py` with `MP_WORK=maximus-mystagogia MP_RANGES=363-383,388-397` or the form it takes) → kt-to-site → mark-sentences →
   `WIDE_PARA=1` align-sentences maximus-confessor-mystagogia --write → verify-english-pg → plate-gate → build-work-page-pg → index-work-pg →
   `node scripts/build-site.mjs` → build-lookup-grc.py → `node scripts/preflight.mjs` (target **9 of 10**; the blind read is the 10th).
   If you change `kt-to-site.py` beyond adding the CONF entry, rebuild the other kt works (Opuscula, Epistulae, Disputatio, Sophronius, Moschus,
   Procopius) and confirm `src/` byte-identical; if you only add the entry, say so and skip the rebuilds.
8. **Report**: each step's result, every deviation, the counts (chunks, cruces, placed notes, bands, drops, alignment %, preflight), and what you
   could not do. Append a "## ✅ Step 5 DONE" section to `translate/maximus-mystagogia/RUN.md` in the Disputatio's style.
