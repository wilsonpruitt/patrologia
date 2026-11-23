# BUILD brief — Maximus *Diversa capita*, step 5 (Sonnet; written by the coordinator 2026-11-21)

Do the LOCAL site build of `maximus-diversa-capita` (19 chunks dc-001–019, all Greek) following the recipe the *Capita alia* used yesterday:
read `translate/maximus-capita-alia/BUILD.md` whole and `translate/maximus-capita-alia/RUN.md` § "Step 5 DONE" and § "Step 6 DONE" (and its `scripts/ca-tables.py`,
which you will copy as `scripts/dc-tables.py`, and `translate/maximus-capita-alia/notes/place.py`, which you copy to `translate/maximus-diversa-capita/notes/place.py`).
Read `~/patrologia/CLAUDE.md` first, then `translate/maximus-diversa-capita/RUN.md` whole. Local only: **do NOT deploy, do NOT push, do NOT commit**
(the coordinator commits). Max 3 parallel processes. If a step fails twice for the same cause, stop and report rather than improvising.
After any rebuild, restore `data/volumes.json`'s `generated` date with `git checkout data/volumes.json` if that is its only change.

## What is different from the Capita alia
1. **Pages 602–709** (108; base `raw/kraken/maximus-diversa-capita/checked/`), col = 2×page − 27, Greek LEFT on even pages. `MP_RANGES=602-709`, `MP_WORK=maximus-diversa-capita`.
   **p0709 ends at line 37 («Τέλος …»)**; the MONITUM after it is not this work. Check mp-bands' band fits against the plate gutter letters on every page where they look wrong (BAND_SET overrides, as before).
2. **Restored lines** (`RESTORED-LINES.tsv`) are already in `checked/`: p0637.53, p0653.54, p0687.52–53. **Greek patches the coordinator owes you** (add to `verify/GREEK-PATCHES.tsv`):
   p0673:17 append « ἀπάθειαν, ἡ κατὰ νοῦν τῆς θείας ἡδονῆς ἐπιγίνεται» (a mid-page line Kraken dropped: the plate prints it between lines 17 and 18; read by the coordinator and image check C);
   p0687:3 append « κακίαν.» (one-word line dropped); p0671:1 append « διάκρισις.» (a line dropped; image check C); plus the **79 kt-apply NOT FOUND** rows (line-split words: see the kt-apply output
   in RUN.md and `IMAGE-CHECK.tsv`), the OCR tables' stray/space/heading rows (leaked Latin heads, «]» column rules, band letters, mangled numerals restored to what the plate prints, the asterisk note calls
   the image check found after numerals/words), and the title block: p0602's two big title lines are NOT in the text — add them as patched lines so the Greek title reads «ΤΟΥ ΑΓΙΟΥ ΠΑΤΡΟΣ ΗΜΩΝ ΚΑΙ
   ΔΙΔΑΣΚΑΛΟΥ / ΜΑΞΙΜΟΥ ΤΟΥ ΟΜΟΛΟΓΗΤΟΥ / ΚΕΦΑΛΑΙΑ ΔΙΑΦΟΡΑ ΘΕΟΛΟΓΙΚΑ ΤΕ ΚΑΙ ΟΙΚΟΝΟΜΙΚΑ / Καὶ περὶ ἀρετῆς καὶ κακίας» (look at the plate p-0602 top for the exact lines).
   **p0604 (col. 1181): the scan clips the left margin.** The Greek line openings are not on the image; the translator's OCR table supplies them from the myriobiblos transcription. Apply those
   OCR-table rows as patches (they are the only source), and mark col. 1181 on the cruces page: «In our scan the left edge of this column is clipped; the line openings are supplied from the myriobiblos
   transcription and the facing Latin, and are not checked against the plate.» They must NOT be counted as plate reads.
3. **Paragraph breaks** = the title block, the five century headings (p0602.5, p0624.9, p0643.13, p0665.22, p0687.52) and **every chapter** (500), matched by sequence to the English numbers
   (never by regex alone: Kraken mangles the numerals, the koppa above all); list any you placed by hand. Alignment target: chapter pairs chapter; century heading pairs heading.
4. **PRINT-ERRORS** = the **42 M rows** of `IMAGE-CHECK.tsv` (cruces page, not applied). The 143 `?` stay as printed (45 of them are the clipped p0604 rows: list them as "not plate-checkable", not as reads).
   plate-reads.json for every page with a PRINT-ERRORS row (not p-0604 unless it has a real read).
5. **Apparatus**: `notes/result-1.jsonl` (602–628), `result-2.jsonl` (629–655), `result-3b.jsonl` (656–664, re-read), **`result-3c.jsonl` (665–682, re-read) — use it and NOT the 665–682 lines of
   `result-3.jsonl`** (drop result-3.jsonl entirely if 3c covers all 18 pages; if 3c has `unread` pages, keep result-3's lines ONLY for those pages and list them), `result-4a.jsonl` (683–692), `result-4b.jsonl` (693–702),
   `result-4.jsonl` (703–709). Series: numbered (Latin locators), lettered (editor's notes, Greek scholia), asterisk, scholion, `bracket-inline` (Migne's brackets INSIDE the Greek text: these are text, already
   in the Greek; they go on the cruces page as notes, NOT placed again). Join `continued`/`continuesFrom` notes. Drop `orphanCall`, `none`, `unread`, `work: following` lines. Placement as the Capita alia.
6. **[?] 1 expected** (I.8, dc-001, the clipped col. 1181). [sic:] 0.
7. **Registry**: key `maximus-confessor-diversa-capita`, slug `diversa-capita`, volume 90, title "Diversa capita ad theologiam et oeconomiam spectantia", titleEn "Various Chapters on Theology and the Economy",
   citRange "PG 90, 1177–1392", 19 chunks, NO `englishState`, status "TRANSLATED 2026-11-22 (kt method, Opus; image-checked; apparatus; LOCAL BUILD, not shipped)", `translationStatus` "exists"-shape as Ps 59's (a complete
   English exists: *The Philokalia*, vol. 2, tr. G. E. H. Palmer, Philip Sherrard and Kallistos Ware (Faber, 1981), "Various Texts on Theology, the Divine Economy, and Virtue and Vice"). Place it before the Ps 59 entry if
   the file orders PG 90 by column, else after the Capita alia. DRAFT about + RECENT: write the summary FROM THE ENGLISH (read dc-001, dc-010, dc-019): five centuries of chapters on the Trinity, the logoi of beings,
   providence and judgement, the incarnation and deification, the Law and the Gospel read anagogically, practice and contemplation, the passions; say it is a Byzantine compilation printed under Maximus's
   name, drawn largely from his *Quaestiones ad Thalassium* and *Ambigua* (Migne's editor's notes point to the *Ad Thalassium* passages again and again); the Greek is our own OCR of Migne's plates, every doubtful
   reading checked against the page image, the editor's notes shown with working translations, Migne's bracketed readings explained; one column (1181) is clipped in our scan and supplied from another
   transcription (say so plainly); English: the Philokalia translation exists (name it); badge weak. Reuse the Maximus bio. Do not name an editor of PG 90.
8. **Chain** as the Capita alia (CONF `maximus-diversa-capita`, prefix `dc`) → … → preflight (target **9 of 10**).
9. **Read the built page** (`site/pg/90/diversa-capita/`): century headings, chapter numbers in order (1–100 × 5), no leaked Latin heads / running heads / «]» / «ʃ», the restored lines present, col. 1181's note.
   `scripts/scan-raw-markers.mjs`. Italic runs crossing a column anchor: fix mechanically, say so.
10. **Report** as before; append "## ✅ Step 5 DONE" to `translate/maximus-diversa-capita/RUN.md`.
