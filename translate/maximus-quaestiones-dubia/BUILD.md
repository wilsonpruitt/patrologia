# BUILD brief — Maximus *Quaestiones et dubia*, step 5 (Sonnet; written by the coordinator 2026-11-23)

Do the LOCAL site build of `maximus-quaestiones-dubia` (6 chunks qd-001–006, all Greek) following the recipe the *Diversa capita* used:
read `translate/maximus-diversa-capita/BUILD.md` whole and `translate/maximus-diversa-capita/RUN.md` § "Step 5" and § "Step 6" (and its `scripts/dc-tables.py`,
which you copy as `scripts/qd-tables.py`, and `translate/maximus-diversa-capita/notes/place.py`, which you copy to `translate/maximus-quaestiones-dubia/notes/place.py`).
Read `~/patrologia/CLAUDE.md` first, then `translate/maximus-quaestiones-dubia/RUN.md` whole. Local only: **do NOT deploy, do NOT push, do NOT commit**
(the coordinator commits). Max 3 parallel processes. If a step fails twice for the same cause, stop and report rather than improvising.
After any rebuild, restore `data/volumes.json`'s `generated` date with `git checkout data/volumes.json` if that is its only change.
⚠ `scripts/kt-to-site.py` is SHARED: add a CONF entry for this work; any code change must leave every other work's output byte-identical (guard it, as the *Diversa capita*'s `clipped` section was guarded).

## What is different from the Diversa capita
1. **Pages 396–431** (36; base `raw/kraken/maximus-quaestiones-dubia/checked/`), **col = 2×page − 7**, Greek LEFT on even pages. `MP_RANGES=396-431`, `MP_WORK=maximus-quaestiones-dubia`.
   **p0396 begins at line 24** (the title; lines 1–23 are the end of the *Ad Thalassium* scholia). **p0431 ends at line 28** («… συμπλεκό-|μεναι..... Λείπει.»); the Ps 59 *Monitum* follows and is not this work.
   Check mp-bands' band fits against the plate gutter letters where they look wrong (BAND_SET overrides, as before).
2. **Restored lines** (`RESTORED-LINES.tsv`) are already in `checked/`: p0401.36–37, p0421.11. **Greek patches** (`verify/GREEK-PATCHES.tsv`): the **9 kt-apply NOT FOUND** rows (RUN.md, Step 3:
   cross-line words + garbled brackets; bracket sigla exactly as the plate prints them: `[Cord. ἔμπτυστε]` p0402.10; p0414.01's bracket as the apparatus reader / plate gives it); the OCR tables' stray/space/heading rows
   (leaked Latin heads «QUAESTIONES ET DUBIA», «]» column rules, band letters, **mangled question numerals restored to what the plate prints, «ΕΡΩΤ. Αʹ» … «ΕΡΩΤ. ΟΘʹ»** — read the form on the plate for a few and keep it uniform;
   the note calls (k), (n), (o) … the image check found inline: they are Migne's calls, keep them where the apparatus placement needs them, as in the Diversa capita);
   **two lost heading lines: Q.50 between p0415.46 and .47, Q.58 between p0418.16 and .17** (read the plate and patch the numeral line in); and **the three rows of points** at Q.68 (p0424, between the heading and «Ἀπόκρ.»), Q.69 (after p0425.11 «Ἀπόκρ.»)
   and Q.70 (between its heading and «Ἀπόκρ.», p0425.12–13): if Kraken lost them, patch a line «. . . . . . . . . .» so the Greek column shows the gap the plate shows (they pair with the English «[…]»).
3. **Paragraph breaks** = the title block, and for **every question (79)**: the heading line, the question, and each «Ἀπόκρ.» answer, matched by sequence to the English (`QUESTION N` / question / `*Answer.*`),
   never by regex alone (Kraken mangles the numerals). Alignment target: heading pairs heading, question pairs question, answer pairs answer. List any break you placed by hand.
4. **PRINT-ERRORS** = the **23 M rows** of `IMAGE-CHECK.tsv` (cruces page, not applied) — among them p0403.11 οἶμαι (sense αἷμα), p0426.18 παλάμην (1 Cor 3:12 καλάμην), p0431.12 κρηνοβατεῖ.
   The 27 `?` stay as printed (blotted type, no second scan). plate-reads.json for every page with a PRINT-ERRORS row, and pp. 401, 421, 424, 425 (coordinator reads).
5. **Apparatus — use exactly these files** (all read from images actually seen): `notes/result-1.jsonl` (396–404), `result-2.jsonl` (405–413), `result-3.jsonl` (414–422), `result-4.jsonl` (423–431).
   Series: numbered (Latin Scripture locators), lettered (the editor's Latin notes), asterisk, scholion (Greek), `bracket-inline` (Migne's brackets INSIDE the Greek text: already text; they go on the cruces page as notes, NOT placed again).
   Join `continued`/`continuesFrom` notes (also across files). Drop `orphanCall`, `none`, `unread`, `work: preceding` (p-0396 above the title), `work: following` (p-0431 after «Λείπει») lines. Placement as the Diversa capita. Report counts per file.
   p-0399's locator printed «II Thess. iv, 16»: the verse is 1 Thess 4:16 — keep the printed text, and the English mirror says «1 Thess 4:16 (Migne prints II Thess.)».
6. **[?] 0 expected.** [sic:] 0.
7. **Registry**: key `maximus-confessor-quaestiones-et-dubia`, slug `quaestiones-et-dubia`, volume 90, title "Quaestiones et dubia", titleEn "Questions and Doubts",
   citRange "PG 90, 785–856", 6 chunks, NO `englishState`, status "TRANSLATED 2026-11-23 (kt method, Opus; image-checked; apparatus; LOCAL BUILD, not shipped)", `translationStatus` "exists"-shape as Ps 59's
   (a complete English exists: Despina D. Prassas, *St. Maximus the Confessor's Questions and Doubts* (Northern Illinois University Press, 2010)), the note ending «Ships the WEAK claim 'New English translation' (never 'First'). Do NOT set 'none'.».
   Place it before the Ps 59 entry (PG 90 by column). **About** (`data/work-about.json`, prefix "DRAFT (Wilson to read). ") + **RECENT** line in `scripts/build-landing.mjs` (DRAFT comment, as the others):
   write the summary FROM THE ENGLISH (read qd-001, qd-003, qd-006): seventy-nine questions and answers on the virtues, hard sayings of the Old and New Testaments read literally and spiritually,
   the Fathers (Gregory of Nyssa on the restoration, Dionysius), the monastic habit and the liturgy, the passions; the work breaks off in Question 79 (Migne's Latin: *Deest finis*), and in Questions 68–70 Migne
   prints rows of points where a question or an answer is wanting. The Greek is our own OCR of Migne's plates, every doubtful reading checked against the page image; the editor's notes shown with working translations;
   Migne's bracketed readings explained. English: Prassas 2010 exists (name it); this is a new translation, not the first. Reuse the Maximus bio. **Do not name an editor of PG 90.** Check every detail of the summary against the English.
8. **Chain** as the Diversa capita (CONF `maximus-quaestiones-dubia`, prefix `qd`) → qd-tables → kt-to-site → mark-sentences → `WIDE_PARA=1` align-sentences → verify-english-pg → plate-gate → build-work-page-pg →
   index-work-pg → build-site → build-lookup-grc.py → preflight (target **9 of 10**: the polarity record comes after the blind read).
9. **Read the built page** (`site/pg/90/quaestiones-et-dubia/`): title block, QUESTION 1–79 in order, *Answer.* paragraphs, the three «[…]» gaps paired with the Greek points, the ending, no leaked Latin heads / running heads / «]»,
   the restored lines present. `scripts/scan-raw-markers.mjs`. Italic runs crossing a column anchor: fix mechanically, say so.
10. **Report** as before; append "## ✅ Step 5 DONE" to `translate/maximus-quaestiones-dubia/RUN.md`.
