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
