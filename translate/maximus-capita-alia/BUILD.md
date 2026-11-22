# BUILD brief — Maximus *Capita alia*, step 5 (Sonnet; written by the coordinator 2026-11-21)

Do the LOCAL site build of `maximus-capita-alia` (5 chunks ca-001–005, all Greek) following the recipe *Ad Theopemptum* used today:
read `translate/maximus-theopemptus/BUILD.md` whole and `translate/maximus-theopemptus/RUN.md` § "Step 5 DONE" (and its `scripts/th-tables.py`,
which you will copy as `scripts/ca-tables.py`, and `translate/maximus-theopemptus/notes/place.py`, which you copy to `translate/maximus-capita-alia/notes/place.py`).
Read `~/patrologia/CLAUDE.md` first, then `translate/maximus-capita-alia/RUN.md` whole. Local only: **do NOT deploy, do NOT push, do NOT commit**
(the coordinator commits). Max 3 parallel processes. If a step fails twice for the same cause, stop and report rather than improvising.
After any rebuild, restore `data/volumes.json`'s `generated` date with `git checkout data/volumes.json` if that is its only change.

## What is different from Ad Theopemptum
1. **Same volume, pages 714–744** (31 pages; base `raw/kraken/maximus-capita-alia/checked/`), col = 2×page − 27, Greek LEFT on even pages (the map's `greekSide`).
   `MP_RANGES=714-744`, `MP_WORK=maximus-capita-alia`. **p0744 ends at line 11 («Ἀμήν»)**: lines 12ff. are the next piece (drop / out of range). Check mp-bands' band
   fits on EVERY page against the plate gutter letters where they look wrong (Theopemptus needed a `BAND_SET` override on 2 of 4 pages: read the plate, never guess).
2. **Paragraph breaks = every chapter** (243, each English paragraph `N. …`) + the heading block (ΕΤΕΡΑ ΚΕΦΑΛΑΙΑ, ΤΟΥ ΟΣΙΟΥ …, the Latin title lines = drops, ΣΤΙΧΟΙ) +
   **the four dedicatory verse lines (p0714.06–09) as ONE paragraph** + the three couplets (Τοῦ αὐτοῦ, between chs 77/78 and 107/108; the one between 137/138 has no
   heading) each ONE paragraph. Derive the chapter-start lines from the Greek numerals in `checked/` (Kraken mangles them: match by sequence against the English
   numbers, never by regex alone; list any you placed by hand). In the verse paragraphs keep one Greek/English line per printed line if the page builder supports
   hard line breaks (look how `site/pg/91/hymni/` was built); if it does not, report and leave them as running text. Alignment target: chapter pairs chapter.
3. **Greek patches owed**: the 4 kt-apply NOT FOUND rows (p0716.48 τέμνε-|ται εἰς; p0730.01 πτερά·; p0738.35 οἱ καρποὶ; p0738.07 πά-|θοι) + the OCR tables' stray/space/heading
   rows (many: leaked running heads «ΑΙΙΑ ΕΧ ΝΑΤΙΣ. ΣΑΡΙΤΑ», bare «]» margin marks, band letters, mangled numerals: **a numeral row means the Greek numeral is
   restored to what the plate prints** — use the sequence, e.g. ϟʹ for 90). Migne's own square brackets ([μή], [οὐ], [οὐσίας], [ἴσ. ἔμπλεως], [καλῶν], [ἔξω], [ὄφεως]) are printed text: keep.
4. **PRINT-ERRORS** = the **51 M rows** of `IMAGE-CHECK.tsv` (cruces page, not applied). plate-reads.json for every page with one. The 5 `?` stay as printed.
5. **Apparatus**: `notes/result-1.jsonl` (64 notes + 1 `orphanCall` line: skip it in placement, list it on the cruces page if the machinery allows, else report) and
   `notes/result-2.jsonl` (80 notes; the p-0744 asterisk note has `work: "following"`: drop it). 94 numbered Latin Scripture locators (many markers illegible: paired by
   content; mirror to S notes where they match), 48 lettered notes = the editor's **Greek scholia and Latin comments with `en`** (keyed in the Greek), 2 asterisk.
   Placement as Ad Theopemptum: lettered/asterisk notes → the cruces page with their `en` as "working translation" (place.py places only numbered Greek-keyed notes);
   say how many went where. Notes with `continuedFrom` are ONE note: join them before placing. ⚑ p-0737's lettered «f» may really be «g» (two «f» on facing pages): look
   at the plate and record what is printed. Never name the editor (the notes themselves may quote other scholars, e.g. Bochart, Obsopoeus: that is printed text, keep it).
6. **[?] 1 expected** (ch. 122, ca-003: Migne's own «....» lacuna). [sic:] 0.
7. **Registry** `data/pg-works.json`: key `maximus-confessor-capita-alia`, slug `capita-alia`, volume 90, title "Capita alia", titleEn "Other Chapters", citRange "PG 90, 1401–1461",
   greekSource "ours-kraken", 5 chunks, **NO `englishState`**, status "TRANSLATED 2026-11-21 (kt method, Opus; image-checked; apparatus; LOCAL BUILD, not shipped)",
   `translationStatus` "unclear" (no complete English found; some chapters may overlap other Maximian centuries in the Philokalia: unchecked). After the Ad Theopemptum entry.
   DRAFT about text (prefix "DRAFT (Wilson to read). ") + DRAFT RECENT line. The about text must say ONLY what the work and our files show: 243 short ascetic and
   contemplative chapters that Migne prints from a Vatican manuscript (his running head «Alia ex Vatic. capita»), opened by four dedicatory verses («Here thou shalt find …
   the labours of Maximus the Confessor, friend») with three short verse couplets among the chapters; the chapters on practice and contemplation, the passions and the
   virtues, temptations voluntary and involuntary, many reading a scriptural image of the soul; Migne prints his editor's notes at the foot of the pages, Greek scholia and Latin
   comments, shown with working translations; the Greek is our own OCR of Migne's plates, every doubtful reading checked against the page image; Migne's square brackets mark
   words his editor supplied or would delete, and our notes say which; English: we found no published English translation of the collection as a whole (some chapters may
   circulate in other collections; we have not checked); badge weak. **Write the summary sentence FROM THE ENGLISH** (read ca-001 and ca-005), never from this brief's paraphrase:
   the Theopemptus about text invented content and had to be rewritten. Reuse the Maximus bio. Do not name an editor of PG 90.
8. **Chain** as Theopemptus (CONF `maximus-capita-alia`, prefix `ca`) → … → `preflight` (target **9 of 10**). mark-sentences: the English is marked by work key; if a
   step says "already marked", run it with --force once and report.
9. **Read the built page** (`site/pg/90/capita-alia/`): leaked Latin, running heads, raw brackets that are NOT Migne's, stray «]» or «ʃ», chapter numbers visible and in order,
   the verse paragraphs. Run `scripts/scan-raw-markers.mjs`. Italic runs crossing a column anchor: fix mechanically, say so.
10. **Report** as before; append "## ✅ Step 5 DONE" to `translate/maximus-capita-alia/RUN.md`.
