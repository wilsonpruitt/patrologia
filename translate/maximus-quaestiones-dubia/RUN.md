# RUN — Maximus the Confessor, *Quaestiones et dubia* (PG 90.785–856), queue #9

Opened 2026-11-23 (Opus coordinator). **Wilson's go 2026-11-23: "Opus go"** on the stated ≈2–2.5M (queue figure ≈1.0M at the old 115K/1,000-word rate;
the recent works ran ≈240K/1,000). Models: Opus translation + Opus blind read, Sonnet volume steps. Work dir / Kraken key `maximus-quaestiones-dubia`.
English exists: **Despina D. Prassas, *St. Maximus the Confessor's Questions and Doubts* (Northern Illinois UP, 2010)** → weak badge only
(Wilson 2026-11-22: existing English is never a blocker; the value is the Greek beside the English).

## Setup 2026-11-23
- **Column map** `pg090.json` extended back to p394: corners read p394 = 781/782, p395 = 783/784, p396 = 785/786, p410 = 813/814, p420 = 833/834 → **col = 2×page − 7**
  (as at p430/440); Greek LEFT on even pages. No duplicate leaves seen.
- **Range** p0396 (title «ΤΟΥ ΑΥΤΟΥ / ΠΕΥΣΕΙΣ ΚΑΙ ΑΠΟΚΡΙΣΕΙΣ ΚΑΙ ΕΡΩΤΗΣΕΙΣ ΚΑΙ ΕΚΛΟΓΑΙ / Διαφόρων κεφαλαίων ἀπορουμένων», below the end of the *Ad Thalassium* scholia)
  – p0431 («… συμπλεκόμεναι…», Latin *Deest finis*; Migne's *Monitum* to Ps 59 follows). **79 questions** (ΕΡΩΤΗΣΙΣ Αʹ … ΟΘʹ).
- **Witness**: myriobiblos `peuseis1.html` (Q. 1–50) + `peuseis2.html` (Q. 51–79), full text, ≈8,800 words.
- **Card** `CARD.md` (from the *Diversa capita*'s; question/answer house shape; brackets rule; αἰώνιος everlasting / ἀΐδιος eternal).
  **Glossary** = the *Diversa capita*'s + its sweep rulings at the head.
- Kraken launched 2026-11-23 on pp. 396–431 (36 pages) beside the whole-PG run (PG 82).
- ✅ Kraken 36/36 → kt-rules 241 changes (glyph 96, accent 92, lexical 53). kt-lost: 14 running heads; FOOT? lines = Greek foot scholia (pp. 398, 401, 402, 410, 411, 420, 421, 423, 426, 427: apparatus, not body).
- Witness `kt-witness.py` peuseis1+2: 18 blocks, 84–96% matched → **318 rows** in `checked/DOUBTS.tsv` (49 large blocks skipped).
- **Lost-line audit** (seam + witness scan, every run of ≥5 witness words absent from the base): **2 real losses, restored by hand from the plate** (`RESTORED-LINES.tsv`):
  p0401.36–37 «Ἀπόκρ. / Τὸ Μωρὸν ὄνομα (k) λέγουσιν, ἐπὶ τοῦ ἄφρονος» (Q. ~19; misclassed FOOT?); p0421.11 «Τί σημαίνει ὁ παραλυτικὸς διὰ τῆς στέγης» (Q. 64; lost BODY).
  Question numerals are badly mangled throughout («εΤυ», «ερτB.»): translators number by the sequence and log `heading`.
- **Chunks** (6, page ends): qd-001 p0396:24–p0403 (1,428) · qd-002 p0404–0409 (1,516) · qd-003 p0410–0415 (1,552) · qd-004 p0416–0420 (1,398) · qd-005 p0421–0425 (1,283) ·
  qd-006 p0426–p0431:28 (1,586, ends «… συμπλεκό-|μεναι..... Λείπει.») = **8,763**.

## Step 1 — translation (Opus, 3 briefs at once: qd-001_002, qd-003_004, qd-005_006) LAUNCHED 2026-11-23
- ✅ Brief qd-005_006 DONE: qd-005 1,283 Greek → ≈1,400 English, 36 notes, 46 OCR rows (23 ocr, 8 heading, 9 stray, 2 space, 4 doubt), cols 836–844, end Q.63 + Q.64–71 (mid);
  qd-006 1,586 → ≈1,900, 35 notes, 98 rows (68 ocr, 9 heading, 13 stray, 5 space, 3 doubt), cols 845–856, end Q.71 + Q.72–79, «…» + *The rest is wanting.* + T.
  Lost numeral lines 67, 68, 69, 73, 74, 76, 78 (numbered by sequence). ⚑ **Plate: Q.68 has no question (Greek + Latin); Q.69 question + empty «Ἀπόκρ.»; Q.70 «Ἀπόκρ.» with no question (Ps 150 exposition); Latin runs 69 into it** → check layout at the plate.
  Brackets: p0422.20 ἀνώρυξαν [ἀνέρρηξαν] (English follows the bracket, LXX + Latin *discerpserint*: CHECK against the bracket rule); p0425.16 ἀναστάσεως [ἴσ. ἀναλήψεως] (kept resurrection); p0426.31 γνώσεως [διαγνώσεως] (kept knowledge).
  Least sure: p0428.15 παραιτήσασθαι «beg for» (vs «beg off»: sense flips; Latin breaks off); p0421.04 δεδοικότας vs Latin *tradendo* (δεδωκότας?); p0430.25 τρίτον τῆς ἡμέρας (Latin «three times»); κρηνοβατεῖ → κρημνοβατεῖ (print?); «εʹ θυσίαι» reconstructed.
  Negatives: p0423.14 οὐχ ἥνωτο kept (Latin agrees); p0425.07 1 Cor 15:29 without οὐκ (Migne + Latin); p0429.35 double negative kept (Latin agrees).
  Terms to sweep: σχῆμα garb (vs Disputatio «monastic estate»), ἄσκησις ascesis, διάγνωσις scrutiny, ἐπιβολή approach, ἡγεμονικόν ruling part, κατ᾿ ἀντιστροφήν by inversion.
- ✅ Brief qd-001_002 DONE: qd-001 1,428 Greek → ≈1,785 English, 34 notes, 113 OCR rows (66 ocr, 20 heading, 20 stray, 5 doubt, 2 space), cols 785–800, title + Q.1–19 (mid);
  qd-002 1,516 → ≈1,906, 28 notes, 66 rows (30 ocr, 14 stray, 13 heading, 5 doubt, 4 space), cols 801–812, Q.19–32 (mid). Lost numerals Θʹ, ΙΕʹ, ΙϚʹ, ΙΗʹ (by sequence).
  p0403.04 «Ἡρώδης δερμάτινος…» has no question of its own (Latin same place): kept as a paragraph closing Q.16, T note.
  Brackets (sigla garbled → the apparatus will settle): p0400.29 [ἴσ. πρὸς] (taken as supplement «as [against]»: CHECK); p0401.08 [Β. πολλαχοῦ]; p0402.10 [ἔμπτυστε]; p0404.01 [αὐτῶν]; p0404.30 [τὸν λογισμὸν τῆς κακίας κατὰ μν…]; p0406.25 [διαφόρως]; p0408.01 [τοῖς νεοττοῖς] (all English = main reading).
  Least sure: p0398.29 τῷ Ἠλιοῦ; p0409.19 τὴν ἕξιν τοῦ κακοῦ γενεᾶς (does not construe; Latin followed); p0403.11 οἶμαι δὲ → αἷμα δὲ (Latin *sanguis*).
  Terms to sweep: σωφροσύνη chastity (vs temperance?), ἐπιβολή application (qd-006: approach), συναρπαγή surprise (qd-006: being carried away), μεταβολή conversion, ἀνθρωπότης manhood, μεταμέλεια regret / μετάνοια repentance, πολιτεία way of life.
- ✅ Brief qd-003_004 DONE: qd-003 1,552 Greek → ≈1,918 English, 34 notes, 84 rows (36 ocr, 19 stray, 18 heading, 7 doubt, 4 space), cols 813–824, Q.32 (end)–50 (mid);
  qd-004 1,398 → ≈1,738, 33 notes, 65 rows (35 ocr, 13 heading, 8 stray, 5 space, 4 doubt), cols 825–833, Q.50–63 (mid). **Heading lines lost: Q.50 (p0415.46/47), Q.58 (p0418.16/17)** → GREEK-PATCH at build.
  Brackets (all variants after the printed word; English = printed): p0410.09 ταύτης [ταύτας]; p0410.21 διαφόρως [ἀδιαφόρως]; p0410.35 ἑταίρων [ἑτέρων]; p0414.01 ἀποκάλυψις [ἀποκύλισις] (Latin *revolutio* = bracket);
  p0415.12 ἀγγελικὴν [εὐαγγελ.] (Latin *evangelicam* = bracket); p0416.48 ἐκ τῆς πόλεως ταύτης [ἐν τῇ πόλει ταύτῃ]. Many stray «]» at line ends (logged stray).
  Least sure: Q.58 p0418.24–p0419.02 who «has the more» (Latin followed, T); Q.43 καθηραμένης vs Latin *destructa* (καθῃρημένης?); Q.61 ἐσχάτης … τελευταίας (Latin lowest/highest); Q.55 opening as a question (Latin).
- **All 79 question headings present once, in order** (coordinator grep). Translation burn ≈0.54M (3 × ≈0.18M).

## Step 2 — sweep (Sonnet, `SWEEP.md`: ~15 term rulings, house shape, 5 seams, notes) LAUNCHED 2026-11-23

## Step 3 — image check pass 1: `kt-sheet` → 288 rows, 12 sheets (247 word, 39 line, 2 MISSING). Brief `IMAGE-CHECK-BRIEF.md` (stop rule at the top, after the Diversa capita fabrication).
Readers run ONE AT A TIME (image-agent rule): A = 001–006 LAUNCHED (beside the Sonnet sweep, which reads no images); B = 007–012 after A.
- ✅ Sweep DONE (Sonnet): σωφροσύνη temperance (Q.1) / chastity + T (Q.30); συναρπαγή, ἐπιβολή unified; Q.32 «repentance of God» → «regret» (μεταμέλεια); Q.57 νοήματα concepts; Q.61 T on ἀνάληψις;
  Q.79 T on τὸ θυμικόν; Psalm locator form; 5 seams clean; *Answer.* form uniform; thou/you checked; no `[?]`; P notes no duplicates. Left: qd-005 n28 «cf. Ps 46:6 LXX» lacks «(47:5 Heb.)».
- **Coordinator plate read p0424 foot / p0425 top: Q.68's question, Q.69's answer and Q.70's question are each a ROW OF POINTS on the plate (Migne's lacuna mark; the Latin too).**
  English: «[…]» paragraph in each place, notes 21/25/26 rewritten to say so. qd-005 n28 «(47:5 Heb.)» added. (A GREEK-PATCH at build may add the point rows to the Greek column if Kraken lost them.)
- ✅ Reader A (sheets 001–006, 144 rows; all displayed): **R 103 · P 17 · M 10 · ? 14** → `IMAGE-CHECK-A.tsv`. Sense: **p0403.11 M: plate οἶμαι δὲ, ὁ θυμός** (sense αἷμα, Latin *sanguis*: English «blood» stands, T «Migne prints οἶμαι»);
  M p0412.13 κτένων, p0413.24 Κύριου, p0404.05 ἐγεργείας + 6 punctuation/abbreviation M. **Bracket sigla on the plate: [Cord. ἔμπτυστε], [Reg. τοῖς νεοττοῖς], [R. …], [R. non bene διαφόρως]** → bracket T notes quote them as printed (apparatus step).
  Doubt rows that drop a bracket: P (the plate prints it). 8 ? = ink-damaged line starts p0400/p0402 (no second scan on disk).
- Reader B (sheets 007–012) LAUNCHED.
- ✅ Reader B (sheets 007–012, 144 rows; all displayed): **R 107 · P 11 · M 13 · ? 13** → `IMAGE-CHECK-B.tsv`. Sense: **p0421.04 δεδοικότας P (plate; not δεδωκότας)**; p0422.06 ἐλαφροτάτους P;
  **p0426.18 M plate=παλάμην** (translator καλάμην; moderate); p0431.12 M κρηνοβατεῖ (sense κρημνοβατεῖ); p0431.14 M οἱῳδάνποτε; p0430.06 M μαλὸν; p0425.05 M διμιουργίας; p0425.11 R: Ἀπόκρ. + row of points;
  punctuation M ×9 (questions ending «.», «;» for comma etc.). Plate prints «[vulg. ἐν τῇ πόλει ταύτῃ]» (p0416.48). **Asterisk notes:** p0424.34 after ἀριστερὰν «Quid si δεξιάν, ad laboris scilicet usum?»; p0425.31 «Primam lectionem Latina modo, secundam Graeca repraesentant.»
  All 27 ? (A 14 + B 13) are blotted type, not misplaced crops: **no pass 2** (a whole-line crop of the same scan shows the same blot; no second scan on disk) → the ? rows stay as printed.
- ✅ **Image check merged → `IMAGE-CHECK.tsv` (288): R 210 · P 28 · M 23 · ? 27.** `kt-apply` → `checked/`: 162 applied, 23 applied~, 14 doubt-same, 1 ±1, 1 already, **9 NOT FOUND** (cross-line words + garbled brackets:
  p0399.34, p0402.10 [Cord. ἔμπτυστε], p0410.41, p0414.01 [ἀποκύλισις] (siglum to read), p0414.19, p0416.40, p0416.44, p0424.03, p0428.31) → GREEK-PATCHES at build, bracket sigla as the plate prints them.
  p0426.18 παλάμην = Migne's misprint for 1 Cor 3:12 καλάμην («stubble» stands; PRINT-ERRORS + T).

## Step 4 — apparatus (Sonnet, 4 readers of 9 pages, ONE AT A TIME; stop rule at the top of brief and prompt). Reader 1 (pp. 396–404) LAUNCHED.
- ✅ Apparatus reader 1 (pp. 396–404, ≈0.41M; all 9 pages seen): 22 numbered, 17 lettered (a–q), 3 asterisk, 3 continued, 5 bracket-inline ([Ἴσ. πρός] p0400, [R. πολλαχοῦ] p0401, [Cord. ἔμπτυστε] p0402, [αὐτῶν] + [R. τὸν λογισμὸν τῆς κακίας κατὰ μνή.] p0404);
  1 marker illegible (p-0400, not completed); p-0399 locator printed «II Thess. iv, 16» (sic: the verse is 1 Thess 4:16 → check at build); 3 placeholder lines deleted.
- ⚠ **BURN CHECK (coordinator 2026-11-23): spent ≈1.6M** (translation 0.54 · sweep 0.15 · image check 0.43 · apparatus 1 0.41 · coordinator ≈0.1). **Projected all-in ≈3.3–3.5M** (apparatus 2–4 ≈1.0 · build ≈0.3 · blind read ≈0.35 · fixes ≈0.1)
  vs the ≈2–2.5M go. The apparatus is the overrun (≈1.4M for 36 pages of dense lettered notes + Greek scholia). **STOPPED for Wilson's OK before apparatus reader 2.**
- **Wilson 2026-11-23: "Continue"** on the ≈3.4M all-in. Apparatus reader 2 (pp. 405–413) LAUNCHED.
- ✅ Apparatus reader 2 (pp. 405–413, ≈0.28M; all 9 seen; several «request limit» first Reads, retried with ≤1600 px crops): 22 numbered (9 markers illegible, not completed), 12 lettered, 2 asterisk, 5 bracket-inline
  (p0410 [ἀδιαφόρως] no siglum); p-0409 call prints (z), note headed (y): as printed. **Coordinator spot-check at the plate (p-0411 foot): note (d) «Περὶ τῶν ἐν τῷ κατακλυσμῷ. Locus hic difficilior est. Exponit Maximus, ut et scholia Græca,
  de mortuis ante Christum, non satis illius imbutis…» matches word for word; (c)'s close «…aliaque in illis reddunt.» matches.** Reader 3 (pp. 414–422) LAUNCHED.
- ✅ Apparatus reader 3 (pp. 414–422, ≈0.23M; thumbnails never displayed → blocks located from own 600 dpi crops, all seen): 27 numbered (20 markers illegible, not completed), 10 lettered (i–o + continuations; p-0414 head = an unkeyed continuation
  from p-0413 (h)), 4 bracket-inline (p0414 [ἀποκύλισις], p0415 [εὐαγγελ.], p0416 [vulg. ἐν τῇ πόλει ταύτῃ], p0422 [ἀνέρρηξαν]). **Coordinator spot-check at the plate (p-0418 foot, note (l)): matches.**
  ⚑ **Note (l) (Q.58): the editor EMENDED the text: «ἀντὶ τοῦ, παράδικον, τὸ, παροδικόν· ἀντὶ τοῦ, πονηρῷ, τὸ, μονίμῳ»** (the printed παροδικόν and μονίμῳ are his corrections) → the fixer reads Q.58 with this (translator's least-sure spot).
  Reader 4 (pp. 423–431) LAUNCHED.
- ✅ Apparatus reader 4 (pp. 423–431, ≈0.18M; thumbnails mostly failed → own crops; its summary miscounted: the file has 37 lines; a discarded first attempt sits in the scratchpad, not used): numbered ≈21 (4 illegible), lettered p, q, r, s, t, u (+ continuations),
  asterisk 4, bracket-inline 2 ([Ἴσ. ἀναλήψεως] p0425; p0426 [διαγνώσεως]); p-0430, p-0431 none. **Coordinator plate check p-0423 note (p): matches; ⚑ POLARITY: «Ἐν αὐτῷ οὐχ ἤνωτο. Necessario addidi negat.» — the οὐχ at p0423.14 is the
  EDITOR'S SUPPLEMENT** (printed without brackets) → ENGLISH-FIXES row 17; blind read to look at it.
- **Apparatus total ≈1.1M (4 readers), 0 unread pages.** ENGLISH-FIXES.md written (18 rows: brackets with sigla, 3 sense misprints, Q.58 emendation, (p) supplement, conjectures). Opus fixer LAUNCHED.
- ✅ English fixer (Opus) DONE: brackets quoted with sigla as printed ([R. …], [Cord. ἔμπτυστε], [Reg. …], [vulg. …]; p0401 and p0426 printed with a brace-like opening sort per the readers: as quoted);
  p0400.29 [Ἴσ. πρός] kept as supplement «as [against]» (accusative ungoverned without it); **p0422.20 English now follows the printed ἀνώρυξαν «dug up»** (bracket ἀνέρρηξαν = LXX + Latin, T);
  misprint T notes (οἶμαι/αἷμα, παλάμην, κρηνοβατεῖ); p0429.10 διὰ τὰς δέκα «for the sake of»; **Q.58 settled by note (l): «the abiding has the greater part»** + T notes; p0424.34 δεξιάν conjecture T; p0425.31 asterisk T;
  **p0423.14 οὐχ = editor's supplement, T rewritten** (English construes the contrast). Not construing as printed: p0400.29, Q.58 strictly, p0422.06 ἐλαφροτάτους, p0429.10, p0398.29 τῷ Ἠλιοῦ, p0409.19 γενεᾶς (all T-noted).

## Step 5 — build (Sonnet, `BUILD.md`) LAUNCHED 2026-11-23

## ✅ Step 5 DONE 2026-11-23: LOCAL site build (Sonnet; nothing deployed, pushed or committed)
`scripts/qd-tables.py` (adapted from `dc-tables.py`; run after `MP_STRICT=1 MP_WORK=maximus-quaestiones-dubia MP_DJVU=raw/pg090/090_djvu.xml MP_CMAP=data/pg-column-maps/pg090.json MP_BYCLASS=1 MP_RANGES=396-431 python3 scripts/mp-bands.py`) rebuilds `verify/GREEK-{DROPS,BREAKS,BANDS,PATCHES}.tsv`; `CHUNKS.tsv` written (qd-001..006, p-0396:24 – p-0431:28); `notes/place.py` = copy of the Diversa capita's with four result files (1: 396–404, 2: 405–413, 3: 414–422, 4: 423–431) and a rewritten continuation joiner. `CONF['maximus-quaestiones-dubia']` added to `kt-to-site.py`; the ONLY other code change there: a '¶' in a patched line now splits at EVERY '¶' (was: first only), identical output for every line with 0 or 1 '¶' (all other works), so no other work's output changes (the other kt works were NOT rebuilt). Registry entry before Ps 59 (no `englishState`, `translationStatus` exists: Prassas 2010), DRAFT about (`data/work-about.json`), DRAFT RECENT line, `data/plate-reads.json` entry (18 pages).
**Bands:** gutter letters located on the plate by blob detection (isolated blobs in the gutter, y to nearest Greek line) and a grid fit (A–D every ≈1337 px, from the letters seen); 5 mp-bands placements overridden (p0405 C 28, p0406 C 30, p0412 C 29, p0414 C 30, p0420 B 12), p0403 B (paragraph gap: first line after) added, p0396: only the C (level with the heading line 28) is in range. 111 band rows. Not eyeballed page by page (only the detected/overridden letters and about ten crops).
**Drops 7:** 5 junk/Latin-head lines from the tables, plus by hand p0410.42 (foot-note junk after the last Greek line) and p0413.39 (2nd line of the garbled Q.44 heading). **GREEK-PATCHES 200 rows:** 149 from the OCR tables (stray/space/heading; headings normalised to the plate's «ΕΡΩΤ. Xʹ.», only Q.1 prints «ΕΡΩΤΗΣΙΣ Αʹ.») + 51 hand rows: the 9 kt-apply NOT FOUND (p0399.34/0400.01 πυρού-|μενοι; p0402.10 [Cord. ἔμπτυστε]; p0410.41/p0411.01 ἐπαί-|ρει; p0414.01–02 [ἀπο-|κύλισις] (no siglum on the plate); p0414.19 ἀλη-|θινὴ; p0416.40 συν-|ανιστάμενος; p0416.44 ὁδεύον-|τες.; p0424.03 ἀμαρ-|τίας; p0428.31 σημαί-|νεται), Migne's brackets with the sigla the plate prints ([Ἴσ. πρὸς] p0400.29 restored; [R. πολλαχοῦ]; [R. τὸν λογι-|σμὸν … μνή.]; [R. non bene διαφόρως;]; [Reg. τοῖς νεοττοῖς]; [R. ταύτας]; [R. ἑτέρων]; [vulg. …]; [Ἴσ. ἀναλήψεως]; {διαγνώσεως} in curly braces), the lost heading lines patched in with '¶' (Q.9, 15, 16, 18, 50, 58, 67, 69, 74, 76, 78; Q.73 line-initial), Q.44's garbled heading, the three rows of points (Q.68 «ΕΡΩΤ. ΞΗʹ.¶. . . . . . . . . .¶Ἀπόκρ.»; Q.69 «Ἀπόκρ. . . . . . . . . . .»; Q.70 «ΕΡΩΤ. Οʹ.¶. . . . . . . . . .»: Kraken had lost all three), p0431.28 «. . . .¶Λείπει.», p0410.32 «Απόκρ.» (print error: no breathing), p0403.09 «ται. »», p0414.35 stray ]. **Breaks 228** (title + 2 title paragraphs + 79 × heading/question/answer, matched by SEQUENCE to numerals 1–79, asserted; 11 headings sit inline after a '¶'); by hand: p0403.04 «Ἡρώδης δερμάτινος…» (English paragraph closing Q.16), p0430.21 «Περὶ δὲ τοῦ βοός…», p0431.11 «Ἡ δὲ αἲξ…» (indented paragraphs on the plate inside Q.79's answer, paired with the English's). **PRINT-ERRORS 23 M rows** on the cruces page (not applied); `[sic:]` 0, `[?]` 0.
**Apparatus:** 175 result lines (50/47/41/35) → 2 `none` dropped (p-0430, p-0431), 0 orphanCall/unread/preceding/following → 9 continuations joined (c 0397←0398, h 0399←0400, k 0401←0402, u 0407←0408, h 0413←0414 (unkeyed head), l 0418←0419, n 0420←0421, q 0423←0424, u 0428←0429) → **164 notes** (47 / 46 / 38 / 33 per file); 0 Greek-keyed numbered `[n:]` placed (all numbered notes are Latin-keyed Scripture locators); **74 locators mirrored to the translators' S notes** (per file: 1 = 18, 2 = 16, 3 = 24, 4 = 16); the other **90 on the cruces page** (45 lettered, 20 numbered, 16 `bracket-inline`, 9 asterisk). p-0399 «II Thess. iv, 16» stays as printed on the cruces page.
**Chain:** qd-tables → place → kt-to-site (154 cruces lines) → mark-sentences (249 paragraphs, 623 sentences) → `WIDE_PARA=1` align-sentences **100.0%** (249/249 sentence-level, 0 ragged groups; paragraph counts equal chunk by chunk: 61/40/55/40/25/28; heading↔heading, question↔question, answer↔answer checked on all 249 by class) → verify-english-pg OK → plate-gate OK (0 markers, 18 reads) → build-work-page-pg (36 column blocks) → index-work-pg (78 scripture, 0 fontes, 1 unparsed «Gen. VI, 3 seqq. XI, 2 seqq. XII, 1 seqq.») → `build-site.mjs` → build-lookup-grc → **preflight 9 of 10** (only «NOT POLARITY-CHECKED: maximus-confessor-quaestiones-et-dubia»); scan-raw-markers clean; `data/volumes.json` unchanged. **English: one mechanical fix** (qd-003.en.md Q.47: an italic run crossed the column anchor [824]; italics closed before it and reopened after: `…but the* [824] *lesser…`); no other English change.
**Built page read** (`site/pg/90/quaestiones-et-dubia/`): title block, QUESTION 1–79 in order (79 distinct), *Answer.* paragraphs, the three «[…]» gaps against the Greek rows of points, the ending «… συμπλεκόμεναι. . . . / Λείπει.», the restored lines (p0401.37, p0421.11) present, no leaked Latin heads / running heads / lone «]» / «ʃ». ⚠ The shared Maximus bio on the page (not written here) names an editor in its last sentence, as on the other Maximus pages. ⚠ mark-sentences splits «ΕΡΩΤ. Βʹ.» and the brackets «[Cord. …]», «[vulg. …]» at the abbreviation (cosmetic; the aligner pairs 2:1). ⬜ Next: blind polarity read (Opus; `data/briefs/MAXIMUS-QUAESTIONES-DUBIA-BLIND-READ-BRIEF.md`), then Wilson: DRAFT about/RECENT → deploy (own OK) → push (own OK).
- Coordinator after the build: **shared `kt-to-site.py` change verified byte-identical** (old vs new script on diversa-capita, capita-alia, ps59, theopemptus: diff 0); their src restored from git; Greek lookup rebuilt;
  **preflight 9 of 10** (only NOT POLARITY-CHECKED). Build burn ≈0.39M; English fixer ≈0.2M. **Spent ≈3.0M** → blind read (2 Opus readers) ≈0.35M.

## Step 6 — blind polarity read (2 Opus readers, `data/briefs/MAXIMUS-QUAESTIONES-DUBIA-BLIND-READ-BRIEF.md`) LAUNCHED

## ✅ Step 6 DONE 2026-11-23: blind polarity read (2 Opus readers, ≈0.29M; reports `data/briefs/MAXIMUS-QUAESTIONES-DUBIA-BLIND-READ-R{1,2}.md`)
**No dropped or added negative in 79 questions.** R1 (Q.1–50): 0 findings (every negative, privative and count checked; the brief's question numbers for 4 cases were off — Q.7, 14, 13, 31 — judged by content). R2 (Q.50–79): 2 wording fixes, applied:
Q.65 col. 837 μή governs both clauses → «and the blasphemy might not run back up to God» (class 1); Q.78 col. 852 double negative → «For he cannot, as though he had not done them, not take account of the things he did.» (class 3).
Kept: Q.55 rhetorical question (plate + note (j)); Q.58; **Q.66 οὐχ ἤνωτο: contrast the right way round**; Q.65 «dug up»; p0428.15 «beg for» («beg off» does not construe with καὶ μὴ λιμόν); Q.68–70; Q.79.
Rebuilt: kt-to-site → mark → align **100%** → verify OK → plate-gate OK → polarity record (2 sites, ours 2) → page → index → build-site → lookup → **preflight 10 of 10**.
⚠ **Burn all-in ≈3.3M** (translation 0.54 · sweep 0.15 · image check 0.43 · apparatus 1.1 · fixer 0.2 · build 0.39 · blind read 0.29 · coordinator ≈0.2) vs the ≈3.4M approved at the second go.
⬜ Wilson: read the DRAFT about/RECENT → strip DRAFT + `englishState: "ours"` → ONE deploy (own OK) → push (own OK).
