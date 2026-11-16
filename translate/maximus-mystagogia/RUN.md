# RUN — Maximus the Confessor, *Mystagogia* (PG 91.657–717), queue #4

Opened 2026-11-15 (Sonnet coordinator). **Wilson's go 2026-11-15: "Yes. Go with the plan"** on the stated burn ≈1.3M
(queue figure; the Disputatio ran ×1.4 → expect ≈1.8M). Models: Opus translation + Opus blind read, Sonnet build/sweep/apparatus.
Three agents at a time. Register key `maximus-confessor-mystagogia`, slug `mystagogia`, live path `/pg/91/mystagogia/`.
Method = the kt chain as run on the Disputatio (`translate/maximus-disputatio/RUN.md`). English exists (Berthold 1985,
Armstrong 2019): NO "New" badge; translationStatus to be researched/recorded, not claimed.

## Setup 2026-11-15
- **Pages.** `raw/pg091/091.pdf` pdf pp. **363–397** (+ the work starts LOW on p. 363: the top of col 657 is the end of the
  previous piece (an Epistle's closing «Ἔρρωσθε ἐν Χριστῷ Σωτῆρι» + Venice date), the Mystagogia title and ΠΡΟΟΙΜΙΟΝ follow;
  chunk 1 begins at the title). p. 397 = 717/718: the work ends «Ἀμήν» at 717 D (Greek left), then *Variae lectiones* below.
- **Column map** (`data/pg-column-maps/pg091.json`, pages 360–397 added): the Epistulae law holds to p383 = 697/698, then
  **pdf 384–387 are 4 DUPLICATE leaves** (running heads 691/692, 693/694, 695/696, 697/698 = pp. 380–383 again; the OCR-text
  Jaccard scan found nothing because the text layer is garbled; the heads on the plate decide); pdf 388 = 699/700 … 397 = 717/718.
  Greek side by colLeft mod 4 (1 → left, 3 → right). `duplicateLeaves` += 383–386.
- **kt-scaffold** WORKS += `maximus-mystagogia`.
- **Kraken** launched 2026-11-15 over `raw/kraken/maximus-mystagogia/pages.txt` (35 pages incl. the 4 duplicates, harmless).
- Second witness: myriobiblos `raw/mirrors/myriobiblos-maximos/mystagogia.html` (to be checked).

## ✅ Step 0 DONE 2026-11-15 (Sonnet coordinator, in session): base, chunks, card, briefs
- **Kraken** 35/35 pages (the 4 duplicates 0384–0387 moved to `raw/kraken/maximus-mystagogia/dups/`; 31 working pages) → `kt-rules.py`
  (468 changes: glyph 324, accent 85, lexical 59). **kt-lost: 0 body lines lost**; 32 footnote-region lines (Combefis's *Variae lectiones*:
  Fr./A./C. readings), 17 FOOT? at body pitch — all variants, none body.
- **Witness**: `kt-witness.py` on myriobiblos `mystagogia.html`, 24 blocks, 89–99% matched → **172 rows** in `checked/DOUBTS.tsv` (73 large blocks skipped).
- **Chunks** (`my-001`…`my-006`, page-end bounds, `--checked`): 1 p0363:16–p0368:53 (2,030 Greek words; p0368 54–55 are footnote lines) ·
  2 p0369–0373 (1,945) · 3 p0374–0378 (1,978) · 4 p0379–0383 (1,810) · 5 p0388–0392 (1,940, the 0384–0387 leaves skipped) · 6 p0393–0397:45 (1,961, ends Ἀμήν).
- **Card** `CARD.md` (from the Disputatio's, rewritten for a continuous contemplative exposition; one addressee in Proem + close: *thou*), **glossary**
  = the Disputatio's, inherited whole + CARD § Terms (the Mystagogia words). **Briefs** `_briefs/my-001_002`, `my-003_004`, `my-005_006` (16–17K words each).

## Step 1 — translation (Opus, all three briefs at once)
- Round 1 launched 2026-11-15.
- ✅ Brief my-005_006 DONE: my-005 1,940 Greek → ≈2,340 English, 24 notes, 46 OCR rows (25 ocr, 9 stray, 5 space, 1 heading, 6 doubt), cols 700–708,
  ends mid-sentence at the closing of the doors (ch. 24 heading restored); my-006 1,961 → ≈2,370, 31 notes, 39 rows (17 ocr, 13 stray, 8 space, 1 doubt), cols 709–717, ends at the
  doxology. **Image-check / sense items:** p0391.17 sentence on the Church has no verb (Latin has a clause the Greek lacks; `[?]` + T note); p0388.51 ἀσύγχυτον vs Latin
  *vacantem compositione* (ἀσύνθετον?); p0392.46 εὐσέβειαν vs Latin *gratiarum actionem*; p0394.51 οἰκοδομήν vs Col 1:11 ὑπομονήν; p0393.40/p0394.45 stray « » in Migne;
  **the close: plural address (ὑμῖν) → *you*, against the card's *thou* for the single friend (T note): a coordinator call**. Glossary decisions to sweep: πρακτικοί/γνωστικοί
  the practical/the knowers; ὁμογνωμοσύνη oneness of inclination; ἐνέργεια activity; ῥοπή tendency; ἱερατεῖον sanctuary / ναός nave; ἀσπασμός kiss; αὐτοπραγία minding one's own affairs.
- ✅ Brief my-001_002 DONE: my-001 2,030 Greek → ≈2,606 English, 21 notes, 60 OCR rows (28 ocr, 11 space, 11 stray, 10 heading), cols 657–668, title + Proem + ch. 1 + ch. 2 to
  the sanctuary/nave, ends mid-sentence; my-002 1,945 → ≈2,297, 22 notes, 43 rows (26 ocr, 7 space, 6 stray, 2 heading, 1 print), cols 669–677, rest of ch. 2, chs 3–5, ends mid-sentence.
  Items: p0365.32 lone «ὁρᾷν; p0368.45 δέξεται vs Latin *recipit*; p0364.39 stop/raised dot after μογιλάλων; **p0371.40 μὴ vs μὲν (print, T note)**; p0371.47 θέσιν vs Latin *currere* (θεῖν); ἀλάθητος.
  Sweep: **ἀνενέργητος "without activity" vs glossary § VIII "without operation"**; **νοερός noetic (card) vs § II "intellectual"**; the Proem's plural address (ὑμῖν) → *you* beside *thou* (same call as my-006).
- ✅ Brief my-003_004 DONE: my-003 1,978 Greek → ≈2,375 English, 25 notes, 43 rows (23 ocr, 10 stray, 7 space, 2 heading, 1 doubt), cols 680–688, end of ch. 5 → ch. 8, ends mid-sentence at ch. 9;
  my-004 1,810 → ≈2,167, 25 notes, 53 rows (24 stray, 18 ocr, 7 heading, 4 space), cols 689–697, ch. 9 end → ch. 23 start, ends mid-sentence. Items: p0378.35 παθοῦσαν→πραθεῖσαν (Latin *venditum*);
  p0374.32 [γνώμην]→[γνῶσιν]; p0375.05 ᾧ→ὢ; p0382.57 τί→τῷ; p0379.47 α stray?; p0383.06 κατ᾿ αἰτίαν vs Latin *per essentiam* (kept); chapter numbers mangled at chs. 7, 9, 10, 13–17, 19 (Latin CAPUT heads leak; restored as `CHAPTER n`).
  **Convention to settle in the sweep: scripture quotations in italics (translator 3/4) vs « » only where Migne prints them.** The general reader at ch. 23 → *thou*.

## ✅ Step 1 DONE 2026-11-15: all 6 chunks translated (3 Opus briefs, ≈0.54M); ≈14,060 English words, 143 notes, 291 OCR rows

## Step 2 — sweep (Sonnet, `SWEEP.md`) + Step 3 — image check pass 1, LAUNCHED 2026-11-15
Coordinator rulings in SWEEP.md: ἐνέργεια = activity (operation only if Christological, T note); νοερός noetic; address by the Greek's number (Proem/close plural *you*, singular *thou*);
Scripture verbatim = italics only; chapter headings `CHAPTER n` 1–24. `kt-sheet.py maximus-mystagogia` → **150 rows, 7 sheets** (120 word, 29 line, 1 MISSING; stray/heading/space not sheeted).
Readers (Opus, `IMAGE-CHECK-BRIEF.md`): A = sheets 001–004, B = 005–007.
- ✅ Reader B (sheets 005–007, 54 slots): R 17 · P 13 · M 5 · ? 19 (10 wrong-line crops, 5 blotted breathings, 3 cut off, 1 broken η). M (plate agrees with the OCR, sense needs the reading; none changes a sentence's sense):
  p0389.54 κα, p0393.48 καύσονα, p0394.36 γρηστότητα, p0396.01 παρα (no accent), p0396.30 ὑψηλότέρων. P (translator's conjecture not on the plate): **p0388.51 ἀσύγχυτον stays (ἀσύνθετον withdrawn)**, p0390.07 ἀληθῶς→as printed,
  **p0392.46 εὐσέβειαν stays (εὐχαριστίαν withdrawn)**, **p0394.51 οἰκοδομήν stays (ὑπομονήν withdrawn)**, p0391.17 inserted clause not on the plate (the sentence stays verbless: `[?]`/T note stands). p0388.32 ἑαυτῆς on the plate (translator ἑαυτὴν): sense check owed.
- ✅ Reader A (sheets 001–004, 96 slots): R 43 · P 6 · M 13 · ? 34 (wrong-line crops, blotted breathings, 001.13 MISSING). Sense items: **p0371.40 the plate prints μὴ (translator read μὲν): the negative is Migne's — ENGLISH-FIXES call**;
  **p0378.35 plate παθοῦσαν (translator's πραθεῖσαν a conjecture) → P**; **p0374.32 plate [γνώμην] in Combefis's brackets (not [γνῶσιν]) → P**. M (plate misprints): p0368.43 νὰρ, p0375.37 ἐνεργιῶν, p0379.17 ἐπὸν, p0382.57 τί (sense τῷ) + οηλοῖ,
  p0369.11 ὀσωμάτων, p0366.02 ἀλλήλοίς, p0367.40 «εἰς. αὐτὴν», p0366.16 «ἡμῖν.» (period; judgement).
- Pass 1 merged → `IMAGE-CHECK.tsv`: 150 rows: R 60 · P 19 · M 18 · ? 53. Pass 2: `kt-sheet-half.py` (work registered in its `cm_path`) → `sheets3/`, 53 rows / 6 sheets; readers (Opus, `IMAGE-CHECK2-BRIEF.md`) A = 001–003, B = 004–006, launched beside the still-running sweep.
- ✅ Pass 2 reader B (sheets 004–006, 23 slots): R 12 · P 2 · M 3 · ? 6 (blotted breathings/accents). Sense: **p0391.33 plate has no Χριστοῦ (τοῦ Θεοῦ ἡμῶν) → P (insertion withdrawn)**; **p0392.49 plate prints σοβόλου (non-word; sense συμβόλου) → M**;
  p0390.57 ἐπαγγειλομένου → M (sense ἐπαγγειλαμένου); p0394.12 Ἐ-|κλησίας one κ → M (less certain); p0383.39 R plate=οἱ.
- ✅ Pass 2 reader A (sheets 001–003, 30 slots): R 11 · M 5 · ? 14 (blotted breathings; p0374.54 αὐ?ῆς and p0381.01 δειχ?ησομένων damaged letters; p0366.34 MISSING). M: p0364.50 plate Ἱεραργίας (γ for χ), p0369.20 σὺνδιαιρού- accent,
  p0371.20 ἀκαταλήντου (sense ἀκαταλήκτου), **p0374.40 plate τὴ δὲ εἰρήνη (sense ἡ: nominative; grammar)**, p0380.38 να-|λεῖν (sense κα-λεῖν).
- **Image check merged → `IMAGE-CHECK.tsv` (150 rows): R 83 · M 26 · P 21 · ? 20** (the 20 ? are blotted breathings/accents and damaged letters: stay as printed).
- ✅ Step 2 sweep DONE (Sonnet): κόσμος→world ×3; οἰκειότης intimacy / οἰκείωσις kinship; ἄληστος unforgetting; Trisagion = the Sanctus of the anaphora (note 9 rewritten); ἄδυτα inner shrines; 4|5 seam fixed ("our true God"), [701] anchor moved;
  11 Scripture conversions to italics-only (Migne prints « » only in the ch. 20–21 titles); 3 repeated P notes → cross-references; ch. 1–24 present once, in order; one `[?]` left (my-005 T n17, p0391.17). Left: κατὰ συναίρεσιν "taken together" (my-003) vs συναίρεσις "coalescence" (my-005) (different senses); minor anchors my-006 [717], my-001 [660].

## ✅ Step 3 DONE 2026-11-15: kt-apply + patches; English-fix list
- `kt-apply.py` → `checked/`: 59 applied, 20 applied~, **4 NOT FOUND** (words split across a line end) → 4 rows in `verify/GREEK-PATCHES.tsv` (p0369:2 ἑαυ-, p0369:39 καθ-, p0389:1 συν-Α, p0397:36 θα-); 26 M → `verify/PRINT-ERRORS.tsv`; 20 ? stay as printed.
- `ENGLISH-FIXES.md` (16 rows: plate-vs-conjecture and misprint T notes; **polarity: p0371.40 the plate prints μὴ**) → Opus fixer launched.
⚠ **Burn tally (coordinator, from agent reports):** translation 0.54M · image check 0.34M · sweep 0.18M · fixer ≈0.1M (est.) → **≈1.2M so far vs the ≈1.3M go**; apparatus (Combefis's *Variae lectiones*, 31 pages: Disputatio rate ≈21K/page) ≈0.5–0.9M + build ≈0.3M + blind read ≈0.3M → **≈2.3–2.7M all-in**. Coordinator STOPS before the apparatus for Wilson's call.
- ✅ English fixer (Opus) DONE: 14 rows handled; new T notes at p0374.40 (my-003 n5), p0380.38 (my-004 n10), p0382.57 (my-004 n23), p0390.07 (my-005 n11), p0390.57 (my-005 n17), p0392.49 (my-005 n27); notes now my-003 26 · my-004 27 · my-005 27 (cross-ref my-005 → "note 11, my-004"). p0378.35 construed παθοῦσαν ("had suffered, at its own hands, by death through sin"; fallback "sold" + *venditum* if Wilson prefers);
  p0374.32 English KEPT "[knowledge]" against the row (the sentence takes up the four terms; Latin *Graece γνῶσιν*), note 4 says Migne prints [γνώμην]; **p0371.40: plate prints μὴ, English follows μὲν, marked for the blind read**; one `[?]` left (my-005 n19, p0391.17). OCR tables in my-005 still cite old note numbers (17→19, 24→26): tables are not touched.
- **Wilson 2026-11-15: "Keep going with agents for the translation"** → apparatus GO (the ≈2.3–2.7M all-in figure stated just before).
- Second-source check (coordinator, in session): myriobiblos agrees with Migne at every disputed spot (μὴ ἀλήθειαν, [γνώμην], παθοῦσαν, ἀσύγχυτον, εὐσέβειαν, οἰκοδομήν, ἀληθές, no Χριστοῦ) — but it is a transcription of PG, NOT an independent witness. Independent: Combefis's own *Variae lectiones* (Reg., Scoriacensis, A., C., Fr., Hœsch) at the page foot = the apparatus step; the modern critical edition is Boudignon, CCSG 69 (2011), not on disk.

## Step 4 — apparatus (Sonnet, 3 briefs) LAUNCHED 2026-11-15
`mp-note-crops.py maximus-mystagogia` → 35 pages / 94 tiles; the 4 duplicate pages' tiles deleted → 31 pages, 84 tiles. `notes/task-{1,2,3}.md` (pp. 363–372 · 373–382 · 383+388–397) from the Disputatio's task + Mystagogia specifics (lettered Scripture locators; VARIÆ LECTIONES numbered continuously; p-0363 shared with the preceding piece: `work` field).
- ✅ Apparatus brief 2 (pp. 373–382): 37 notes (22 numbered 23–45, 15 lettered Scripture locators), p-0382 none (600 dpi), 7 markers illegible (not completed from the sequence), 0 orphan calls. **Sense-bearing variants:**
  **n37 p-0378: c. A. et Fr. πραθεῖσαν (= Latin *venditum*) for παθοῦσαν → the English should go back to "sold" with a T note (coordinator call, pending)**; **n27 p-0374 polarity: Fr. ἄρα τὰ θεῖα πάσχει (no οὐ) — blind read**; n31 παρεχόμενο- for παρερχόμενον; n40 δύσλυτα for δύσφυκτα;
  n32 τόπον for τύπον; n34 τῷ φαινομένῳ; n39 ch. heading Τίνων εἰσὶ σύμβολα; n44 τῶν οὐρανῶν for τοῦ Πατρός μου; n45 Θεῖος ἀσπασμὸς καὶ πνευματικός; n33 a long marginal summary (Περὶ ὑποστάσεως δόγμα ἀξιοτήρητον…); n38/41/42 marginal scholia from A/Fr.
- ✅ Apparatus brief 1 (pp. 363–372): 33 notes (22 numbered: variants 1–22; 11 lettered Scripture locators), p-0370 none, 9 markers illegible, 3 orphan calls (p-0366 ×2, p-0370), empty tiles re-cut at 600 dpi. **No variant at p0371.40 (μὴ)** → stays a blind-read item.
  Sense-bearing: **n19 p-0371 θέειν c. A. for θέσιν (the ἀγαθόν etymology; Latin *currere*) → the English should follow θέειν with a T note (coordinator call, pending)**; n18 καὶ τῷ ἄγαν; n20 Fr. supplies a sentence (Ἔστι γὰρ καὶ εὖ ἔστι …); n9 ἀδιάφορον c. A. et Fr. / ἀδιαφθορόν τε c. R.; n11 ἀρχετύπου; n12 παιδίον c. R.; n10 τῇ ἀναφορᾷ; ἐνθέως c. A. R. et Fr. for εὐθέως (p-0365, blotted); n15 ὅπου; n21 τούτοις; n22 "Hæ Gregorii voces".
- ✅ Apparatus brief 3 (pp. 383, 388–397): 39 notes (22 numbered variants 46–67, 17 lettered locators), 15 markers illegible (paired to calls by word), 0 orphans. Sense-bearing: **n52 p-0388 ἀσύνθετόν τε καὶ ἀσύγχυτον c. A. et Fr. (the translator's conjecture, Latin *vacantem compositione*)**;
  **n54 p-0390 ἀληθῶς c. A. R.**; n63 p-0394 "Græca habent ὑπομονήν" (Col 1:11); n55 μεταλήψεσθαι for καταλήψεσθαι; n60 θέωσιν for θέσιν; n62 Χριστός for Κύριος; **n66 p-0396 ἀσυμπαθῶς for ἐμπαθῶς (polarity-like: blind read)**; n57 πιστευόντων; n64 δὲ δῆλον ὅτι; n67 τὸ καλόν; n59 Fr.'s triads.
  No variant at p0391.17 (the verbless sentence) or p0391.33.

## ✅ Step 4 DONE 2026-11-15: apparatus (3 Sonnet briefs, ≈0.77M)
`notes/place.py` (from the Disputatio's; drops `work: preceding`) + `CHUNKS.tsv` → `notes/APPARATUS.json`: **116 notes**, 65 Greek placed-candidates, 14 unplaced (8 lettered, 5 unmarked, 1 numbered), 37 Scripture locators mirrored to S notes; 7 placed by word.
**English changed on the apparatus's evidence (coordinator):** my-003 [^25] p0378.35 back to «sold» (πραθεῖσαν c. A. et Fr., Latin *venditum*; Migne prints παθοῦσαν); my-002 [^15] p0371.47 «running» (θέειν c. A., Latin *currere*; Migne prints θέσιν). Policy: English follows the print unless the print is strained AND a MS + the Latin agree; every other variant is shown as an apparatus note, not followed.
⚠ Burn: ≈2.1M so far (translation 0.54 · image check 0.34 · sweep 0.18 · fixer 0.11 · apparatus 0.77 · coordinator) → build ≈0.3 + blind read ≈0.3 → ≈2.7M all-in (inside the 2.3–2.7 stated).

## ✅ Step 5 DONE 2026-11-15: LOCAL site build (Sonnet; nothing deployed, pushed or committed)
`scripts/my-tables.py` (adapted from `dx-tables.py`; run after `mp-bands.py` with `MP_WORK=maximus-mystagogia MP_RANGES=363-383,388-397`) writes
`verify/GREEK-{DROPS,BREAKS,BANDS}.tsv` and appends OCR-table patches (GREEK-PATCHES now 71 rows: the 4 cross-line rows + 67 new, of which 8 manual). `NOREAD` gained `'(none)'`
(the Mystagogia tables write "(none)", not "—"; without it the word "(none)" leaked into the Greek and 9 leaked Latin CAPUT heading lines were not dropped: caught on reading the built chunk).
**Breaks 26**: the title (p0363:16), the ΠΡΟΟΙΜΙΟΝ (p0363:24) and the 24 chapter headings (hard-coded list `CH`, read off the Kraken lines: ΚΕΦ. numerals are garbled in 15 of them,
so no regex). **Drops 30**: the Latin title lines p0363.21–23 and .25, the Latin CAPUT heads, lone band-letter lines, p0376.53 (leaked foot-of-page fragment `αιπαρεχόμενοι Α`; the word συνιστά-|μενον
continues at p0377.1; its band A was p0377.1's) (p0368.54–55 are outside chunk 1's range). **Bands 116** (13 glued letters stripped). Manual patches: title `ΤΗν ΑγΙΑΝ`→`ΤΗΝ ΑΓΙΑΝ`, p0377.16 `ἀγνοη-Β`, p0382.14 `Βραδόξοις`,
p0389.45 `μυ»·`, p0390.29 `ς`, p0383.14 stray «, and two lost hyphens (p0375.50 ἐκ-, p0397.8 συν-). `CONF['maximus-mystagogia']` added to `kt-to-site.py` (prefix `my`; the Disputatio's flags) and
**nothing else changed in kt-to-site, so the other kt works were not rebuilt.** `notes/place.py` (Mystagogia copy only) now also skips rows with no `text`: the 5 page-level cross-check records
counted among the "116 notes" / "14 unplaced" are not notes, so the real figures are **111 notes, 65 Greek candidates, 9 unplaced (8 lettered + 1 numbered), 7 placed by word, 37 Scripture locators mirrored to S notes** → 133 cruces lines.
Registry `maximus-confessor-mystagogia` (slug `mystagogia`, after the Disputatio, no `englishState`, weak badge; names Stead 1982, Berthold 1985, Armstrong 2019); about + RECENT are DRAFTS; `data/plate-reads.json`: 19 pages
(every page with a PRINT-ERRORS row, plus p. 391 for the `[?]`).
Counts: 6 chunks · 31 column blocks (cols 657–717) · 26 print-error rows listed on the cruces page · `[sic:]` 0 · `[?]` 1 (my-005 n19, p0391.17, kept) · verify OK · plate-gate OK (0 markers, 19 reads) · index 31 columns / 39 scripture / 0 fontes ·
alignment **83.9%** (26 of 31 paragraphs sentence-level; 5 fall back to paragraph level: 1.1 title + 1.2 proem as one group, and chapters 12, 21, 22 = 4.4, 4.9, 4.11). Cause: the segmenter splits Combefis's chapter heading
(`ΚΕΦΑΛ.` / `Ιʹ.` / title) into three sentences, which the English's one-line heading cannot pair with; the fallback is the designed safe state (a merged marker over the paragraph), not a defect. A segmenter abbreviation entry for
`ΚΕΦ./ΚΕΦΑΛ.` would raise it but is a shared-lib change (not made). **Preflight 9 of 10 (only the blind polarity read: "NOT POLARITY-CHECKED: maximus-confessor-mystagogia").**
`data/volumes.json` `generated` restored. ⬜ Next: **blind polarity read** (Opus, 3 readers; flag p0371.40 μὴ/μὲν, p0374.27 Fr. ἄρα τὰ θεῖα πάσχει without οὐ, p0396 n66 ἀσυμπαθῶς/ἐμπαθῶς, p0391.17 verbless sentence);
then Wilson: DRAFT about/RECENT, deploy, push, `englishState: "ours"` (own OKs).

## Step 6 — blind polarity read (3 Opus readers) LAUNCHED 2026-11-15
Local commit `5ddc211c` first (translation → build; not pushed). Brief `data/briefs/MAXIMUS-MYSTAGOGIA-BLIND-READ-BRIEF.md` (from the Disputatio's): R1 my-001–002, R2 my-003–004, R3 my-005–006;
cases to judge either way: p0371.40 μὴ/μὲν, p-0374 ἆρα … οὐ πάσχει vs Fr. without οὐ, p-0396 ἐμπαθῶς vs A ἀσυμπαθῶς. Build note: alignment 83.9% (26/31 sentence-level; the chapter headings split into 3 segments by `segment.mjs`; not a defect).
- ✅ R2 (my-003–004): 2 findings, no polarity fault. F1 my-003 col. 685D–688A: ἀμελούμενον agrees with ἀξίωμα (plate p-0377; Latin *neglectam animae dignitatem*) → "and is able [0688] to soil the dignity of the soul when that dignity is neglected"; F2 my-004 col. 692A τοῦ Θεοῦ καὶ Λόγου one person → "the God and Word being their general". **p-0374 case: KEEP** (plate ἆρα τὰ θεῖα οὐ πάσχει …; the English keeps οὐ and the question). Pending: apply with R1/R3.
- ✅ R2 fixes applied to the source cards (my-003 col. 688 «when that dignity is neglected»; my-004 col. 692 «the God and Word»); rebuild after R3.
- ✅ R1 (my-001–002): **clean, no changes.** **p0371.40 (col. 673, not 672): KEEP** — the plate prints μὴ, which cannot construe (the μέν half answered by τὸ δὲ ἀγαθόν); Migne's misprint for μὲν, already in the cruces. Every negative, the correspondences, θέσις/ἀφαίρεσις and thou/you checked; plate p-0371 opened.
- ✅ R3 (my-005–006): my-005 clean; my-006 4 findings, all applied: **col. 716 B genitives of comparison («nothing is more slippery toward sin than these organs»; the old English denied the point)**; col. 713 D οὐ πάντως «does not altogether lie»;
  col. 717 B κατὰ [καὶ τὸ] πλέον «over and above» (note 30 extended, Latin *praestant*); cols. 709/712 the Luke 15:31 locator moved to the verse (note 4 reworded so the mirror no longer matches it). **p-0396 case: KEEP** (plate ἐμπαθῶς, variant 66). Plates opened p-0393, 0395–0397.

## ✅ Step 6 DONE 2026-11-15: blind polarity read (3 Opus readers, ≈0.40M; reports `data/briefs/MAXIMUS-MYSTAGOGIA-BLIND-READ-R{1,2,3}.md`)
7 findings → **7 applied** (R2 ×2, R3 ×4 + the locator); the three brief cases all KEPT (p0371.40 μὴ = Migne's misprint for μὲν, English right; p-0374 οὐ kept; p-0396 ἐμπαθῶς kept). Rebuilt (place → kt-to-site → mark → align 83.9% → verify OK → plate-gate OK →
page → index → polarity record (7 sites) → build-site → lookup → **preflight 10 of 10**); `volumes.json` date restored. ⚠ Burn all-in ≈2.6M (vs the 2.3–2.7M stated). Nothing deployed or pushed.
⬜ Wilson: read DRAFT about/RECENT → deploy (own OK) → push (own OK) → `englishState: "ours"` (own OK).
- ⚠ **Edition correction (coordinator, 2026-11-15, before any deploy):** the card, notes and about had called the facing Latin and the variant notes "Combefis's" (carried over from the Disputatio). **Migne's Monitum (col. 653, pdf p. 360) says otherwise:** it reprints, "ex Augustana editione Mystagogiae Maximi", the letters of David Hoeschel and Maximus Margunius (bishop of Cythera — the *Hymni*'s author) and a Margunius letter to students of divine philosophy. Who made the facing Latin, and what A / R / Fr. denote, is NOT identified. Fixed: 18 English notes → "the facing Latin" / "variant N in Migne's apparatus" / "the edition marked Fr."; about text + authorNote rewritten (no Combefis, no 1675); about's "col. 701" → col. 705; `kt-to-site.py` cruces header takes `editor` from CONF (default "Combefis", so the other Maximus works are byte-identical: Disputatio checked); CARD.md carries a correction banner. Rebuilt, **preflight 10/10**.
