# BUILD brief — Maximus *Expositio in Psalmum LIX*, step 5 (Sonnet; written by the coordinator 2026-11-21)

Do the LOCAL site build of `maximus-ps59` (2 chunks ps-001, ps-002, all Greek) following the recipe the *Mystagogia* used last week:
read `translate/maximus-mystagogia/BUILD.md` whole and `translate/maximus-mystagogia/RUN.md` § "Step 5 DONE" (and its `scripts/my-tables.py`,
which you will copy as `scripts/ps-tables.py`, and `translate/maximus-mystagogia/notes/place.py`, which you copy to `translate/maximus-ps59/notes/place.py`).
Read `~/patrologia/CLAUDE.md` first, then `translate/maximus-ps59/RUN.md` whole. Local only: **do NOT deploy, do NOT push, do NOT commit**
(the coordinator commits). Max 3 parallel processes. If a step fails twice for the same cause, stop and report rather than improvising.
After any rebuild, restore `data/volumes.json`'s `generated` date with `git checkout data/volumes.json` if that is its only change.

## What is different from the Mystagogia
1. **Volume PG 90.** Base = Kraken `raw/kraken/maximus-ps59/checked/p-NNNN.txt`, pages **431–439** (no duplicate leaves). Column map
   `data/pg-column-maps/pg090.json` (col = 2×page − 7; Greek RIGHT on odd pdf pages, LEFT on even). Djvu `raw/pg090/090_djvu.xml`.
   For mp-bands: `MP_WORK=maximus-ps59 MP_DJVU=raw/pg090/090_djvu.xml MP_CMAP=data/pg-column-maps/pg090.json MP_RANGES=431-439` (or the form it takes).
   `greekSource` "ours-kraken".
2. **Range.** **p-0431 lines 1–30 are NOT the work** (end of the *Quaestiones et dubia* «…Λείπει», then Migne's Latin MONITUM heads): the work
   starts at **p0431.31** («ΤΟΥ ΑΥΤΟΥ»). Lines 33–34 (garbled Latin «EJUSDEM / EXPOSITIO IN PSALMUM LIX») are drops. **p-0439 ends at line 24**
   («αἰῶνας. Ἀμήν.»); everything after is the *Expositio orationis dominicae*.
3. **Paragraphs** = a break at the title, and at **every psalm lemma** (Migne prints each verse of the psalm as its own line(s) before its
   exposition; the English sets each lemma as its own italic paragraph with an S note `Ps 59:N LXX`). Take the lemma list from the English
   (every paragraph that is wholly italic) and find each one's first Greek line in `checked/`; hard-code them as a list (`BR`), as my-tables did
   for the chapter heads — no regex. The alignment must pair lemma with lemma.
4. **Greek patches the coordinator owes you (put them in `verify/GREEK-PATCHES.tsv` in the Mystagogia's shape):**
   - p0432:2 `[Σωβάλ]·` → `[erat Σωβάλ]·` (the plate prints «erat»: read 2026-11-21 at 600 dpi).
   - p0432:35–36 `[ Εr.Σωβα` / `ει],` → `[etiam Fr. Σωβᾶ·` / `et deinceps],` (plate read 2026-11-21; check the exact tokens of line 36 in `checked/`).
   - the 3 kt-apply NOT FOUND rows (words split across a line): p0434.33 ὑποτιθέ-|μενος, p0437.08 μολυσμῶν, p0438.42 θαῤ-|ῥοῦντι (see
     `IMAGE-CHECK.tsv` and the OCR tables for the printed forms; patch both lines of a split word where needed).
   - plus whatever the OCR tables' `stray`/`space`/`heading` rows need, as my-tables does.
5. **PRINT-ERRORS** (`verify/PRINT-ERRORS.tsv`) = the **7 M rows** of `IMAGE-CHECK.tsv` + **p0432.1 Μεσυποταμίαν (plate; sense Μεσοποταμίαν)** = 8 rows.
   They are the [sic:] layer (cruces page), not applied to the Greek. `data/plate-reads.json`: an entry for every page with a PRINT-ERRORS row
   (depth `read`, corners_checked false, note "image check 2026-11-21"); p-0432 was also opened whole by the coordinator.
6. **Apparatus**: `translate/maximus-ps59/notes/result-1.jsonl` (17 notes, no VARIÆ LECTIONES block): 10 lettered (a)–(h) = the editor's Latin
   comments (with `en`) + 2 lettered locators; 7 numbered Latin Scripture locators (6 markers illegible, p-0438's three paired by position).
   Write `translate/maximus-ps59/CHUNKS.tsv` in the Mystagogia's shape, run `notes/place.py` → `notes/APPARATUS.json`. Placement policy as the
   Mystagogia: Greek-keyed variants → `[n:]` (there may be none); the lettered comments and locators → the cruces page, `en` labelled "working
   translation"; locators mirrored to S notes. **Never name the editor** (CONF `editor=''`, as the Mystagogia: the cruces header must not say Combefis).
7. **[?] in the English: 0 expected.** `[sic:]` 0 expected in the English.
8. **Registry** `data/pg-works.json`: key `maximus-confessor-expositio-psalmi-lix`, slug `psalm-59`, series pg, volume 90, author "Maximus the Confessor",
   title "Expositio in Psalmum LIX", titleEn "Exposition of Psalm 59", citRange "PG 90, 856–872", greekSource "ours-kraken", 2 chunks in order,
   **NO `englishState`**, status "TRANSLATED 2026-11-21 (kt method, Opus; image-checked in two passes; apparatus; LOCAL BUILD, not shipped)".
   Place it where a PG 90 work belongs in the file's order (look at how entries are ordered; if by queue/date, after the Mystagogia).
   `data/work-about.json` (`pg:maximus-confessor-expositio-psalmi-lix`, indent 2 like the file) as a DRAFT prefixed "DRAFT (Wilson to read). " and a
   DRAFT RECENT line at the top of `scripts/build-landing.mjs`'s RECENT list. The about text must say: Maximus's only work on the Psalms (so Migne's
   *Monitum*), an anagogical exposition of Psalm 59 in the Septuagint (Psalm 60 in the Hebrew numbering): the title read of Christ and of the change
   «unto the end» (faith now, the resurrection at the last), then the psalm verse by verse; the Greek is our own OCR of Migne's plates, every doubtful
   reading checked against the page image; Migne's editor's Latin notes (on the title's στηλογραφία, on the name Soba and Maximus's etymology of it)
   are shown with working translations; the English follows the sense against a misprint in one place (col. 861, χρίσεως for κρίσεως, noted).
   **An English translation exists: Paul M. Blowers, "Commentary on Psalm 59", in Brian E. Daley and Paul R. Kolbet (eds.), *The Harp of Prophecy:
   Early Christian Interpretation of the Psalms* (University of Notre Dame Press, 2015), pp. 270–278** — so the badge is the weak "New English
   translation" (never "First"), and the about text names it; what this edition adds is the Greek beside the English, line-tagged to Migne's columns.
   translationStatus in the Mystagogia's field shape. The modern critical edition (P. Van Deun, CCSG 23, 1991) was NOT consulted: say so in one clause.
   Author bio "Maximus the Confessor" exists: reuse it. Do not name an editor of PG 90's Greek or Latin anywhere.
   ⚠ Check the column of the χρίσεως row against the column map before writing "col. 861" (p0434 = cols 861/862, Greek side per the map).
9. **Chain**: CONF entry `maximus-ps59` in `scripts/kt-to-site.py` (prefix `ps`; start from the Mystagogia's flags, `editor=''`, vol 90, cmap pg090)
   → `ps-tables.py` → kt-to-site → mark-sentences → `WIDE_PARA=1` align-sentences maximus-confessor-expositio-psalmi-lix --write → verify-english-pg →
   plate-gate → build-work-page-pg → index-work-pg → `node scripts/build-site.mjs` → build-lookup-grc.py → `node scripts/preflight.mjs`
   (target **9 of 10**; the blind read is the 10th). If you change `kt-to-site.py` beyond adding the CONF entry, rebuild the other kt works and confirm
   `src/` byte-identical; if you only add the entry, say so and skip the rebuilds. Any other script you must teach the new work (a cm_path dict, a
   volume-90 assumption, a `[a-z]{2}-` chunk prefix list), say which and why.
10. **Read the built page** (`site/pg/90/psalm-59/index.html` or wherever it lands) for leaked Latin, leaked running heads, raw `[n:]`/`[b:]` brackets,
   the title, the lemma pairing, and «(none)»-style table words in the Greek (the Mystagogia's NOREAD lesson). Run `scripts/scan-raw-markers.mjs`.
11. **Report**: each step's result, every deviation, the counts (chunks, cruces, placed notes, bands, drops, alignment %, preflight), and what you could
   not do. Append a "## ✅ Step 5 DONE" section to `translate/maximus-ps59/RUN.md` in the Mystagogia's style.
