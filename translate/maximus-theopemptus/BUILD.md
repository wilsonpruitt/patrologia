# BUILD brief — Maximus *Ad Theopemptum scholasticum*, step 5 (Sonnet; written by the coordinator 2026-11-21)

Do the LOCAL site build of `maximus-theopemptus` (1 chunk th-001, all Greek) following the recipe *Expositio in Psalmum LIX* used today:
read `translate/maximus-ps59/BUILD.md` whole and `translate/maximus-ps59/RUN.md` § "Step 5 DONE" + § "Step 6 DONE" (and its `scripts/ps-tables.py`,
which you will copy as `scripts/th-tables.py`, and `translate/maximus-ps59/notes/place.py`, which you copy to `translate/maximus-theopemptus/notes/place.py`).
Read `~/patrologia/CLAUDE.md` first, then `translate/maximus-theopemptus/RUN.md` whole. Local only: **do NOT deploy, do NOT push, do NOT commit**
(the coordinator commits). Max 3 parallel processes. If a step fails twice for the same cause, stop and report rather than improvising.
After any rebuild, restore `data/volumes.json`'s `generated` date with `git checkout data/volumes.json` if that is its only change.

## What is different from Ps 59
1. **Same volume (PG 90), another stretch.** Base = `raw/kraken/maximus-theopemptus/checked/p-NNNN.txt`, pages **710–713** (p-0714 was moved to
   `extra/`: never use it). Column map `data/pg-column-maps/pg090.json` (here **col = 2×page − 27**; Greek LEFT on even pages, RIGHT on odd: the map's
   `greekSide` is right). `MP_RANGES=710-713`, `MP_WORK=maximus-theopemptus`, same MP_DJVU/MP_CMAP as Ps 59. greekSource "ours-kraken".
2. **Range.** The work starts at **p0710.1** (title). The Latin title leaked into the Greek («ΜΑΧΙΜΙ ΜΟΝΑΣΗΙ», p0710.5 or near: the OCR table's `heading`/`stray`
   rows name it): drop. **p0713.56 «νος περίληψιν.» is the last line** (added by hand from the plate; it is correct).
3. **Paragraphs**: a break at the title block, at the italic question line, and at the English's paragraph starts (the three answers begin p0711.12, p0712.51,
   p0713.22). Hard-code the list as Ps 59 did; the alignment must pair answer with answer.
4. **Greek patches owed**: the 2 kt-apply NOT FOUND rows (p0712.27 `κ λὸν` → `καλὸν`; p0713.28 `ἠ̔̀ (τε` → `ἥ τε`: the «(» is a gutter mark, not text),
   plus whatever the OCR table's stray/space/heading rows need. **Migne's asterisk call after προτερήματα (p0710.41, OCR «ʃ»)**: it is the call of the
   asterisk note; strip the glyph from the Greek like any note call.
5. **PRINT-ERRORS** = the **8 M rows** of `IMAGE-CHECK.tsv` (listed on the cruces page, not applied). plate-reads.json for every page with one.
6. **Apparatus** `notes/result-1.jsonl`: 7 notes. 6 numbered Latin locators (p-0710: Luc. xviii, 6 · Luc. vi, 29 · **Joan. xx, 27 — Migne's misprint for xx, 17,
   confirmed on the plate by the coordinator: keep the printed text in the apparatus, and do NOT "fix" it; if the mirror cannot match it to the English S note
   (John 20:17), it goes to the cruces page as printed** · Gen. iii, 24; p-0712: Luc. xviii, 7 · Matth. vii, 18) + **1 asterisk note keyed in the GREEK after
   προτερήματα: «Locus obscurus, ac forte mendosus.»** with `en` "An obscure passage, and perhaps corrupt." The English T note 7 already reports it. Give it the
   placement the Mystagogia/Ps 59 machinery gives a Greek-keyed note (an `[n:]` at προτερήματα if place.py places Greek-keyed notes; else the cruces page with
   its `en`). Say which happened. Never name the editor.
7. **[?] 0, [sic:] 0** expected in the English.
8. **Registry** `data/pg-works.json`: key `maximus-confessor-ad-theopemptum`, slug `ad-theopemptum`, series pg, volume 90, author "Maximus the Confessor",
   title "Ad Theopemptum scholasticum", titleEn "To Theopemptus the Scholasticus", citRange "PG 90, 1393–1400", greekSource "ours-kraken", 1 chunk,
   **NO `englishState`**, status "TRANSLATED 2026-11-21 (kt method, Opus; image-checked; apparatus; LOCAL BUILD, not shipped)". After the Ps 59 entry.
   `data/work-about.json` DRAFT (prefix "DRAFT (Wilson to read). ") + DRAFT RECENT line. The about text must say: a short letter of Maximus to Theopemptus, a
   scholasticus (lawyer), answering three questions on Gospel sayings: the unjust judge (Luke 18), «if anyone strikes thee on the right cheek», and «Touch me
   not» (John 20:17), each read contemplatively, after an opening on knowledge, practice and deification; CPG 7696. The Greek is our own OCR of Migne's plates,
   every doubtful reading checked against the page image; one passage in the opening is marked by Migne's editor as obscure and perhaps corrupt, and our notes
   say how it is construed. **English: we found no published English translation; a translation by Andrew Psarommatis was announced in 2019 and we could not
   confirm it has appeared.** Badge: the weak "New English translation" (we hold no verified none-status; do not claim "First"). The modern critical edition
   was not consulted (do not name one you have not seen). Reuse the "Maximus the Confessor" bio. Do not name an editor of PG 90.
9. **Chain**: CONF `maximus-theopemptus` in `scripts/kt-to-site.py` (prefix `th`, from the Ps 59 entry) → `th-tables.py` → kt-to-site → mark-sentences (greek and
   english, --force) → `WIDE_PARA=1` align-sentences --write → verify-english-pg → plate-gate → build-work-page-pg → index-work-pg → `node scripts/build-site.mjs <key>`
   → build-lookup-grc.py → `node scripts/preflight.mjs` (target **9 of 10**: the blind read is the 10th). If kt-to-site changes beyond the CONF entry, rebuild the
   other kt works and confirm `src/` byte-identical; else say so.
10. **Read the built page** (`site/pg/90/ad-theopemptum/`): leaked Latin, running heads, raw brackets, the title block, the three answers' pairing, stray `ʃ`.
    Run `scripts/scan-raw-markers.mjs`. If an italic run crosses a column anchor in the English (Ps 59 had one), fix it mechanically and say so.
11. **Report** as Ps 59's builder did, and append "## ✅ Step 5 DONE" to `translate/maximus-theopemptus/RUN.md`.
