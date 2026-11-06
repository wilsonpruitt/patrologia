# RUN — Maximus the Confessor, *Opuscula theologica et polemica* (PG 91.9–285), queue #1

Opened 2026-11-06 (Fable). Score for the queue: `translate/MAXIMUS-QUEUE.md`. Method = the kt chain as run on Sophronius
and the *Epistulae* (Kraken base, NOT an API read); register, glossary and card inherited from `translate/maximus-epistulae/`
(`translation-style.md` M1–M6). Register key `maximus-confessor-opuscula`, slug `opuscula`, live path `/pg/91/opuscula/`.

⚠ **Before the paid steps: Clarke 2026 (CUA Press, Fathers of the Church) is a complete English of Opusc. 1–27 + the
*Disputatio*** (web-checked 2026-11-06, `MAXIMUS-ENGLISH-STATUS.md`). The badge, if we ship, is "New English translation",
never "First". Whether to spend ≈6M on it at all is Wilson's call (queue file, "Open before work 1 starts").

## Setup 2026-11-06 (in session, Fable; no API tokens spent)
- **Pages.** `raw/pg091/091.pdf` pdf pp. **11–161** (p. 11 = the title leaf, cols 9/10; p. 13 = 13/14; p. 161 = 285/286;
  p. 162 = 287, DISPUTATIO CUM PYRRHO running head). The queue's "≈20–163" was the djvu guess; this is from the running heads.
- **Duplicate leaves: 12 pages, six pairs** — pdf 38–39 = 36–37, 44–45 = 42–43, 54–55 = 52–53, 62–63 = 60–61, 66–67 = 64–65,
  104–105 = 102–103. Found by text identity on the djvu words (Jaccard of the ≥5-letter word sets against the previous six
  pages; the six pairs score 0.32–0.50, every other page <0.15). 151 scanned pages − 12 = **139 real leaves = 278 columns =
  9–286 exactly**, and the same law reaches the Epistulae's anchor p. 200 = 363/364 without adjustment.
- **Column map** `data/pg-column-maps/pg091.json` extended with the 139 leaves (`greekSide` from colLeft mod 4, the
  Epistulae rule); `duplicateLeaves` += the 12 (as leaf numbers = pdf − 1). Running heads checked on the djvu OCR at pp. 13,
  24, 28, 36, 37, 40, 42, 48, 57, 58, 60, 65, 68, 100, 107, 161, 162.
- **Kraken launched** 2026-11-06 over `raw/kraken/maximus-opuscula/pages.txt` (139 pages, `htr/pg-ocr.sh`, model
  pg-greek-cllg-ft-v1, 600 dpi gray via pdftoppm; log `pg-ocr.out` + `kraken.log`, ≈1.5–2 h). Output `text/p-NNNN.txt`.
- **Second witness on disk:** myriobiblos `raw/mirrors/myriobiblos-maximos/prosmarinon{1..4}.html` = the four *ad Marinum*
  pieces (Περὶ θελήσεως 4.5K words · Ἐκ τῆς περὶ ἐνεργειῶν καὶ θελημάτων πραγματείας 2.6K · Τόμοι δογματικοί 6.8K ·
  Ἐπίλυσις τῶν ἀποριῶν Θεοδώρου διακόνου 2.1K; monotonic, graves to restore). Nothing else of the Opuscula is mirrored.

## Plan (unchanged from the queue; each paid step waits for the go)
1. Kraken done → `python3 scripts/kt-rules.py maximus-opuscula` → add the `maximus-opuscula` entry to `kt-scaffold.py` WORKS
   (done 2026-11-06) → `kt-lost.py` dropped-line check → align the myriobiblos witness, diff → DOUBTS rows.
2. Piece list: the 27 pieces by number with Combefis's headings and first page:line, from the Kraken text (title lines
   ΤΟΥ ΑΥΤΟΥ … / EJUSDEM …) — do NOT take the column bounds from memory; `PIECES.tsv` + `CHUNKS.tsv` (≈2K words, ≈26 chunks).
3. Card (adapt `maximus-epistulae/CARD.md`), glossary inherited, briefs of 3, three at a time (Opus) → sweep → image check →
   apparatus (Combefis's notes) → build per `maximus-epistulae/BUILD.md` → blind read → Wilson.

## ✅ Step 0 DONE 2026-11-06 (Opus coordinator, in session): base, pieces, chunks, card, briefs. Wilson: "go in order anyway. Opus go"
- **Kraken finished**: 139/139 pages → `kt-rules.py` (1,995 changes: glyph 1,160, accent 454, lexical 381).
- **kt-lost**: of ≈25 BODY candidates only **p-0011's collection title** was really lost (ΜΑΞΙΜΟΥ ΤΟΥ ΟΜΟΛΟΓΗΤΟΥ / ΠΡΟΣ
  ΜΑΡΙΝΟΝ / ΤΟΝ ΟΣΙΩΤΑΤΟΝ ΠΡΕΣΒΥΤΕΡΟΝ; the region model classed the title as a running head) → restored from the image,
  `RESTORED-LINES.tsv`, rules re-run. The rest: band letter Β glued to the line start (pp. 20, 92, 96, 150: text present),
  Greek words inside the Latin column or the NOTÆ (pp. 17, 91, 127), bleed-through (p. 114), running heads. FOOT? lines =
  Combefis's notes and variants (apparatus step).
- **Witness**: `scripts/kt-witness.py` (new) aligns myriobiblos *prosmarinon1–4* to the ruled lines in 500-word blocks
  (90–99% per block; file 3 = two pieces, Opusc. 7 at pp. 42–55 and Opusc. 20 at pp. 131–141) → **324 `witness` rows**
  in `checked/DOUBTS.tsv` (`checked/` = copy of `ruled/`), shown to translators as open doubts (scaffolds `--checked`).
- **Pieces** (`PIECES.tsv`): all 27 starts read on the page images (TOY AYTOY / EJUSDEM headings); start columns
  9, 40, 45, 56, 64, 65, 69, 89, 112, 133, 137, 141, 145, 149, 153, 184, 212, 216, 224, 228, 245, 257, 260, 268, 269,
  276, 280. **48,324 Greek words.** ⚠ **Opusc. 12 (to Peter the *illustris*) is LATIN ONLY** (Anastasius; pdf 87–88,
  no Greek printed): translated from the Latin per the Sophronius precedent (Wilson 2026-11-05), `CARD-LATIN.md`,
  `kt-scaffold-latin.py` entry added, chunk mo-015 (1,306 Latin words). Opusc. 8's Greek title was read by Kraken as
  the Latin EXEMPLUM (card says so); Opusc. 22 opens *Καὶ πάλιν ὁ θεῖος Μάξιμος* (excerpt; Combefis: from Gregory of
  CP via Allatius).
- **Chunks** (`CHUNKS.tsv`): 30 (29 Greek + mo-015), ≈1–2.2K words, long pieces cut at page ends. Scaffolds `mo-0NN.md`.
- **Card** `CARD.md` (from the Epistulae card; Kraken base; style anchor = shipped Letter 15 opening; piece table);
  **glossary** = Epistulae glossary + § VI will-chain forecast (βουλή counsel, βούλευσις deliberation, ζήτησις inquiry,
  σκέψις consideration, ὁρμή impulse, θελητικός volitive, γνωμικὸν θέλημα will of inclination, θεανδρική theandric …).
  No Fable anchor (register inherited, per the queue).
- **Briefs** `_briefs/mo-001_003 … mo-028_030` (10 × 15–21K words; mo-013_015 carries `CARD+LATIN.md`).

## Step 1 — translation (Opus, 3 briefs at a time)
- Round 1 launched 2026-11-06: briefs mo-001_003, mo-004_006, mo-007_009.
- If resuming: check which `mo-0NN.en.md` exist; launch the next briefs from `_briefs/`, three at a time, with the
  short prompt (read the brief once; one Write per chunk; no other files/images/web; short report).
- ✅ Brief mo-001_003 DONE (≈197K): Opusc. 1 whole + Scholia 1–8; 5,031 Greek → 6,278 English; OCR rows 73/49/47 (no `print`).
  For the image check: p0011.10/.13 Combefis's [γνώσεως] bracket; p0013.39 τρόπον for τόπον (Latin *modus*); p0012.06
  lost line end, ἀντίπαλον supplied (myriobiblos agrees); p0019.34 εἰσί· τῷ τε; p0017.20 ἢ/ἡ σχέσις; p0018.14–16;
  p0022.34 ἄψυχος; p0024.17 οὐσιώδης; **p0025.43 scholion Δι᾿ αὐτοῦ ζῶμεν vs Acts 17:28 ἐν αὐτῷ: print?**
  For the sweep (translator's own decisions, to hold or overrule across all chunks): ἐξουσία authority · δόξα opinion ·
  φρόνησις prudence · φρόνημα prudent thought · προαιρετικός elective · τὰ ἐφ᾿ ἡμῖν things in our power · νόησις
  intellection · ἔννοια concept · ἐνθύμησις pondering · διαλογισμός reasoning · ἐνδιάθετος/προφορικὸς λόγος inward/uttered
  word · ἀνάληψις taking-up vs πρόσληψις assumption · οὐσίωσις essentiation · πρᾶγμα reality · παρυφίστασθαι subsist
  parasitically · ἑτερόβουλος/ἑτερόγνωμος of other counsel / of other inclination.
- Round 2 started: mo-010_012 launched as A finished (keep three running).
- ✅ Brief mo-004_006 DONE: Opusc. 2–6; 4,992 Greek → ≈6,450 English; OCR rows 29/57/79 (1 `print`: p0027.27 ποιότητα for
  ποσότητα, Combefis's Latin corrects *[quantitatem]*). Image check: **p0030.29 θανατώσας τὸν θάνατον vs myriobiblos τήν +
  Latin *peccatum* → τὴν ἁμαρτίαν? (Rom 8:3)**; p0029.39 νοῦ/τοῦ κινήμασι; p0033.39 ἀφιεμένη→ἐφιεμένη; p0035.02 περὶ;
  p0042.24 θέλησις/θέσις; p0035.38 ἀγνοούμενον; p0041.17 θείῳ. Sweep: **ἡγούμενος — glossary "abbot" vs card "hegumen":
  rule once**; συμφυΐα cohesion · συνουσίωσις co-essentiation · ἀντιστροφή reciprocation · ταυτοβουλία identity of counsel
  · σύννευσις consent · διάστασις standing apart · Θεομήτωρ Mother of God · θεοπλαστία God-fashioning · ἐπιστήμη science ·
  κατ᾿ ἐπικράτειαν by prevailing · κατ᾿ ἐνέργειαν "in operation" (T note "in act").
- mo-013_015 launched as B finished.
- ✅ Brief mo-007_009 DONE (≈258K): Opusc. 7 whole + scholia, Opusc. 8 to col. 97; OCR rows 44/53/40. Image check: p0046.06
  νύχος → νέφος (Latin *tenebras*) or ψῦχος; p0050.33 ἀνυπαρξίαν; p0057.02–03 προσεξετάσαι δεχώμεθα; p0053.35 δόξῃ→δείξῃ
  (Latin *doceret*); p0060.28; p0058.55–56 garbled repeat line; p0061.14 καλοφροσύνης/κακοφροσύνης. Scholion siglum "Εr."
  read as Ἑρ(μηνεία) — check (it may be Combefis's "Fr." = *Forte*/ variant mark, as in the NOTÆ). Sweep: πρᾶξις action
  (deed) vs practice (triad); στάσις revolt (civil strife) vs rest (triad); ἀδιάσπαστος indissoluble; ἐπίκρισις
  ratification; ἐφετόν object of aspiration; παράλογος contrary to reason vs ἄλογος irrational.
- **Glossary § VII rulings** written before round 3 (συμφυΐα growing-together, σύννευσις convergence, ἡγούμενος abbot …);
  briefs mo-016…030 REBUILT with them; card's "hegumen(s)" → "abbot(s)". mo-001–015 get them from the sweep.
- mo-016_018 launched as C finished.
- ✅ Brief mo-013_015 DONE: end of Opusc. 9, Opusc. 10–11, **Opusc. 12 from the Latin** (1,306 Latin → ≈1,775 English).
  OCR rows 34/53/**121** (the djvu Latin of pp. 87–88 is poor: 96 ocr + 12 doubt → the Latin image check, `kt-sheet-latin.py`,
  must read all of them). Image check: p0084.34 πεισθεῖεν; p0084.42 σχεδίῳ; p0084.29 lost noun (Latin *voces*); p0085.42
  Πάντα (Latin *Omnes*); p0085.32 τεύχους (*voluminis*); Latin L.20 *sine successu receptionem* [?]; R.57–58 *anaucre*
  (*annuere*?) + a line seems lost before *vel cum sede ejectus*; L.31, L.39, R.13 corrupt. Sweep: κατ᾿ ἀναφοράν by
  reference; ἀντίρροπος counterweighing; ἄσχετος without relation; ἐπίκρισις "verdict" here vs "ratification" in C → rule;
  διαφορότης diversity; προϊέναι go forth vs ἐκπορεύεσθαι proceed; Anastasius's varied link-lines kept varied (literal).
- mo-019_021 launched as E finished.
- ✅ Brief mo-010_012 DONE (≈221K): Opusc. 8 rest + scholion, Opusc. 9 part 1; OCR rows 55/35/58. Checked: the "missing"
  [102]/[103] anchors are the LATIN columns of pp. 65/68 (Greek alternates sides); text runs on (καθάπερ καὶ | ἡ
  Θεανδρικὴ ἐνέργεια); no loss. Image check: p0068.35 lost "[by nature] one" (Latin *vel unione vel natura unum*);
  p0065.24–25 ἓν, ἑτέρου; p0069.42 "Confession" for Cyril on Matthew; p0072.18 possible lost negative; p0071.16
  προσκλίσει; p0072.10 ἐξάνυσιν; p0073.09 ὑμετέρῳ (*servo vestro*). Sweep: συμφυΐα "cohesion" here (pre-§ VII) → growing-
  together; φωνή expression (voice for Christ's bodily voice); συγγένεια kindredness; ἀνδρικός manly; κίνημα motion vs
  κίνησις movement; ἀντίρροπος counterpoised vs E's counterweighing → rule; λογισμοί (logical) reasonings vs glossary
  thought → rule; Θεοπάτωρ ancestor of God; ὁμόθεος co-divine.
- mo-022_024 launched as D finished. Remaining: mo-025_027, mo-028_030.
- ✅ Brief mo-022_024 DONE: Opusc. 16 end + scholia, Opusc. 17–19; OCR rows 62/47/33. p0121's left edge clipped (many lost
  first syllables, all logged): read those on the image. Image check: p0127.39 παρὰ τοῦ Πατρὸς (Latin *a Gregorio*);
  p0128.01 lost -των; p0131.08 Combefis's lacuna supplement [δυσωπούμενοι]; p0120.30. Opusc. 17's scholion is in
  dodecasyllables (T note). **§ VII extended**: οἰκείωσις two senses (Christological = appropriation), ἀδιάσπαστος
  indissoluble, ἀντίρροπος counterpoised, ἐπίκρισις ratification, διαστολή demarcation, ἐπίνοια conception, κίνημα motion,
  λογισμοί (logical) reasonings. Briefs mo-025…030 rebuilt. mo-025_027 launched as H finished.
- ✅ Brief mo-016_018 DONE: Opusc. 13–14, Opusc. 15 parts 1–2 (to Διὸ, col. 173); OCR rows 49/80/109 (1 `print`:
  **p0103.39 ἕνωσις for ἔκθεσις**, Combefis's Latin *unio* follows the misprint). ⚠ **p-0103 (col 173): the whole Greek
  column lost its first letters at the left margin, ≈30 rows: image-check as a block.** Image check also: p0089.14 [?]
  (ὄντως?); p0091.38 οὐ (the definition's negative); p0095.07 δίχα→διὰ θελήσεως (Latin *voluntatis nutu*); p0093.27
  ὑποβολῆς; p0103.11 Nestorius's title μυήσει; p0102.30 βʹ vs Latin 52/32. Sweep: θεϊκός collapsed into "divine" with
  θεῖος → split? (suggest "godly"/"of God" or a T note); ἀδιάσπαστος "unsevered" (pre-ruling) → indissoluble;
  ἐνούσιος "enousial" vs H "enousic" → rule; ἀναίρεσις abolition vs H destruction → rule; συναφές conjoinedness (D, F agree).
- mo-028_030 launched as F finished: ALL TEN BRIEFS LAUNCHED.
- ✅ Brief mo-019_021 DONE (≈274K): Opusc. 15 end, Opusc. 16 parts 1–2; OCR rows 94/**166**/78. ⚠ **mo-020: pp. 111 and 114 are
  over-inked plates and Kraken failed there** (46% / 45% of ≥4-letter words outside a clean-Greek lexicon, against a median
  of 18%; next worst p. 110 at 33%, then a smooth tail), so ≈1.5 pages of English were rebuilt from Combefis's Latin with
  [?] (10 in mo-020). The plate itself is legible at 600 dpi. **Plate transcription launched** (Opus reader, line-numbered
  strips `raw/kraken/maximus-opuscula/plate-strips/`, → `PLATE-110-114.tsv`, one row per Kraken line); then: write those
  lines into `checked/`, re-scaffold mo-019/020 tail, and have mo-020's affected paragraphs re-translated from the plate Greek.
  Other: p0108.11 αὐτοβουλίαν → ταυτοβουλίαν (print; the Ekthesis's word); p0106.37 μιᾶς ὁμολογίας/ἐνεργείας; p0107.42
  ἰσώμεθα; p0116.53/p0117.01 phrase lost (Latin "yielding to the fear and dread of death"); p0118.58 marginal rubric.
- ✅ Brief mo-028_030 DONE: Opusc. 22–27 (to the end); OCR rows 73/91/31. Image check: p0148.19 κατὰ/μετὰ τὴν Νικαέων
  (Latin *post*); p0147.53–54 ἀναποδείκτοις; p0147.14 ὄντως [πίστεως] vs Latin *rectam*; p0153.43 παρφυᾷ→προσφυῆ;
  p0156.13 lone καὶ; **p0153.52 heading may have lost δέκα (Latin *Capita decem*)**; Ταλμῶν→ψαλμῶν; p0160.24 Son absent in
  the Nyssen testimony (Latin agrees: T note). Eulogius's seven chapters numbered 1–7 by the editor's count (T note).
  Sweep: ἐνούσιος "enessential" here vs F "enousial", H "enousic" → RULE ONE; ἠρεμία quiescence vs στάσις rest; ἐναντιότης
  contrariness; ἔννοια notion here vs A "concept" → rule; αὐθαίρετος free/freely here vs F, G "self-chosen" → rule;
  πάθος affliction (Nemesius, losing the voice).
- ✅ Brief mo-025_027 DONE (≈249K): Opusc. 20 whole, Opusc. 21; OCR rows 72/49/64. Image check: p0140.19 corrupt [?]
  (Latin *verisimile est eos mentiri*); p0140.43 ἀκύρωσιν; p0142.13 πεύσει; p0135.04; p0143.21 bracket. Opusc. 21
  addresses Theodore in the plural of respect (*you*, T note). Card's "idiom" for ἰδιότης corrected → property.

## ✅ Step 1 DONE 2026-11-06: all 30 chunks translated (10 Opus briefs, ≈2.23M)
48.3K Greek + 1.3K Latin → **63,103 English words**, **1,920 OCR rows**, notes 1..n and anchors in order in every chunk
(script check). Plate transcription of the over-inked pp. 110, 111, 114 (Opus reader, ≈114K) → `PLATE-110-114.tsv` →
written into `checked/` (147 lines); mo-019/020 scaffolds rebuilt; mo-019/020 translator resumed to revise those pages
from the plate Greek and drop their OCR rows. Glossary § VIII (final rulings) written; `SWEEP.md` ready.
## Step 2 — sweep (Sonnet, `SWEEP.md`), after the mo-020 revision lands. Then step 3 image check (coordinator, kt-sheet;
   p-0103 and p-0121 left-margin loss as blocks; mo-015 Latin with kt-sheet-latin).
- Step 2 (sweep, Sonnet, `SWEEP.md`) LAUNCHED after the mo-019/020 plate revision landed (only 2 [?] left in mo-020, both
  illegible on the plate; 3 `print` rows added on pp. 110/114).
## Step 3 — image check (pass 1 running)
`kt-sheet.py maximus-opuscula` → **1,150 Greek rows, 48 sheets** (word 1,050 · line 97 · MISSING 3); mo-015's 108 Latin rows
go through `kt-sheet-latin.py` separately. Sheet 001 read by the coordinator as calibration (R 14 · ? 8 · P 1 · M 1:
p0013.39 the plate prints τόπον). Readers (Opus, `IMAGE-CHECK-BRIEF.md`) write per-reader files `IMAGE-CHECK-{A,B,C}.tsv`
(kt-verdict `--out`), merged into `IMAGE-CHECK.tsv` before `kt-apply.py`. A = sheets 002–017, B = 018–033 launched; C = 034–048
waits for a free slot (3 agents at a time with the sweep). ⚠ **`kt-apply.py` rebuilds `checked/` from `ruled/`: after it,
re-write `PLATE-110-114.tsv` into `checked/` (the plate transcription) or pp. 110/111/114 revert to Kraken.** Then pass 2
(`--redo` whole lines for every `?`), then p-0103 / p-0121 left-margin blocks, then the Latin rows.
- ✅ **Latin image check (mo-015, Opusc. 12) DONE in session** (coordinator, 6 sheets, 108 rows → `IMAGE-CHECK-LATIN.tsv`:
  R 104 · P 2 · ? 2). Real catches: L.11 *extra* (not contra); L.26 *(nam*; L.31 *rius* = **rursus**; **L.39 *cœlestem fidem*
  (not "haeresi fidem": the sense reverses)**; R.01 *patientissime*; R.48 *tantum … lucro*, **aliis** (not mihi).
  ⚠⚠ **Two structural faults found by the plate, not by any text check:** (1) the translator's last line (R.58 "vel cum sede
  ejectus et Urbe in Africa") is **Combefis's footnote 91**, set full-width under both columns, and was translated as
  Maximus; (2) **Opusc. 12 continues at the top of p. 89** (7 Latin lines, cols 145|146, above Opusc. 13's Greek) to its
  real end *… ad gloriam Dei, et vestræ laudem sublimitatis* — the scaffold was cut at p. 88 because I set the chunk
  bounds by the Greek pieces. Lines in `RESTORED-LINES.tsv`; mo-015's translator resumed with all corrections.
  ⚑ Lesson for every Latin-only stretch: bound the chunk by where the LATIN ends, and test the last scaffold line for a
  footnote (full-width, raised numeral, smaller type).
- mo-015 revised by its translator (footnote line out, p. 89 ending in, 7 plate readings; 28 notes). 'thy sublimity' for *vestræ*: the sweep's second-person check to rule.
- Image check pass 1: reader B (018–033) DONE: R 190 · P 24 · M 40 · ? 130 (p0103/p0118 clipped margins; wrong-word crops). Sense changes → ENGLISH-FIXES.md. Reader C (034–048) launched.
- Reader A (002–017) DONE: R 186 · P 9 · M 65 · ? 124. ⚠ kt-sheet 'line'-located crops mostly land on the WRONG line (A): pass 2 must use whole-line crops with wider context.
- kt-sheet line matching: tried a hard window (+38 MISSING) and a soft ordinal penalty (+20 MISSING), both worse → reverted; pass 2 uses the stock --redo whole-line crops (±1 line of context).

## ✅ Step 2 DONE 2026-11-06: sweep (Sonnet, ≈230K)
≈75 edits over all 30 chunks: § VII/VIII rulings enforced (growing-together, convergence, abbot, indissoluble,
counterpoised, ratification, enousial, appropriation (Christological) vs kinship (ascetic), destroy/destruction ×36,
concept, self-chosen, without operation, commix, opposed array); "gnomic" kept once (mo-001 T note); headings 1–27 in
order; 11 seams read, no loss; mo-030's four unclosed « fixed; 5 repeated P notes in mo-019 → cross-references; S-note
abbreviations normalised; second person: no slips. Coordinator after the sweep: συγγένεια = kindredness ("natural
kinship" ×4 → natural kindredness); ἔννοια "meaning" kept where it is intent (by-sense ruling). **6 [?] left**: mo-015
L.20 (plate confirms the Latin), mo-016 p0089.14, mo-020 p0114.02 + p0114.15 (illegible on the plate), mo-021
p0116.53→0117.01 (lost phrase), mo-026 p0140.19 — the image-check pass 2 reads the non-plate-settled ones.
- ✅ Pass 1 merged → `IMAGE-CHECK.tsv` (1,150 rows): **R 526 · M 169 · P 41 · ? 414**. Reader C: R 136 · P 7 · M 63 · ? 152.
  M convention review (coordinator): 84 of 169 M rows differ only in marks/case/punctuation; they are Migne's type slips and
  stay M (Epistulae precedent: ταυτὸν without coronis = M); only 2 case conventions (θεοτόκου lower-case, Ἔλλαμψιν) → P.
  ⚠ the pass-2 brief says "ταυτὸν without coronis = P": **normalise after the pass-2 merge (coronis → M; case → P)**.
- The "clipped" margins (pp. 103, 118, 121, 153) are NOT clipped: the letters are on the plate, squeezed into the gutter
  curve; kt-sheet's 30 px pad missed them. New `scripts/kt-sheet-half.py` (Greek half from the column map, text-matched
  line, ±1 line) → `sheets3/`, 414 rows / 42 sheets (half 412 · MISSING 2). `kt-sheet.py` gained KT_PAD (redo pad).
  **Pass 2 launched** (3 Opus readers, `IMAGE-CHECK2-BRIEF.md` → `IMAGE-CHECK2-{A,B,C}.tsv`); sheet 001 by the coordinator.
- Pass 2 readers: B (016–029) R 79 · P 5 · M 5 · ? 51; A (002–015) R 64 · P 13 · M 15 · ? 48 (blotted breathings/subscripts;
  ϊ vs ῖ indistinguishable in this type: "diaeresis_or_circumflex_merged"). New sense items: p0118.37–38 ἀνέργη-|τον for
  ἀνενέργητον (M); p0118.09–10 τοῦ-|το (P, emendation withdrawn); p0084.26 ἀνε-|κλήθησαν (M? sense check); p0085.03 ὧν;
  p0046.20 ἐκεῖνο for ἐκεῖνα (M); p0068.35 plate = OCR, so "[κατὰ φύσιν ἓν]" is the translator's conjecture (T note, not
  text); p0082.46 καὶ ἀλήθεια without ἡ (P: Combefis's text).
- ⚠ **pp. 103 and 121 ARE clipped** in our scan (lines start at the image edge; first letters partly off it), unlike p. 153.
  Second-witness search: archive.org `PatrologiaGraeca` "Vol. 091" = the SAME physical scan (leaf 110 = our p. 111, same
  over-inking; leaf = pdf − 1); Calfa has no PG 91; the three Google Books ids return the "image not available" placeholder.
  **No second witness reachable** → the clipped line-start letters on pp. 103/121 stay `?` (scan-clipped), the English rests
  on the translators' sense readings, and no [sic:] is fired on them (CLAUDE.md: "unreadable is a fact about your copy").

## ✅ Step 3 DONE 2026-11-06: image check of every flagged Greek row (pass 1 + pass 2) + Latin
- Pass 2 (`kt-sheet-half.py`, 3 Opus readers + coordinator sheet 001): 414 rows → merged. **Final, 1,150 Greek rows:
  R 760 · M 194 · P 67 · ? 129** (the ? = breathings/subscripts/ϊ-vs-ῖ blotted in this type, and the scan-clipped line
  starts of pp. 103/121; Greek stays as Kraken+rules there). Latin (mo-015): R 104 · P 2 · ? 2.
- `kt-apply.py` → `checked/` (645 applied, 75 applied~, 4 already; M 194 → `verify/PRINT-ERRORS.tsv`, the [sic:] layer);
  the 31 NOT FOUND (cross-line / band-letter splits) hand-patched → **39 rows in `verify/GREEK-PATCHES.tsv`**, every
  `from` verified on its line. Then the plate transcription of pp. 110/111/114 re-written into `checked/` (147 lines;
  kt-apply had reset them to Kraken); `checked/DOUBTS.tsv` + `WITNESS.tsv` survive (kt-apply writes only p-*.txt).
- New sense-bearing M (English keeps the correction; the build's [sic:] shows Migne's form): p0050.33 ὑπαρξίαν (for
  ἀνυπαρξίαν), p0118.37 ἀνέργητον (ἀνενέργητον), p0140.43 κυρίωσιν (ἀκύρωσιν; Combefis's note (d) on it), p0142.02 τὸ
  θεῖα, p0148.39 φημὴ, p0103.39 ἕνωσις (ἔκθεσις) …
- **English fixes from the plate: `ENGLISH-FIXES.tsv` (41 rows: P verdicts where the translator's emendation is withdrawn,
  and R verdicts with a third plate form)** → one Opus fixer launched (print construes → re-translate; doesn't → keep the
  conjecture with a note "Migne prints X (confirmed on the plate)"). ENGLISH-FIXES.md = the narrative list.
- ✅ English fixes applied (Opus fixer, ≈151K; originals diffable in the session scratchpad): 41 rows → re-translated where
  the print construes (p0041.17 "follow God", p0053.35 "seem", p0071.16 "appeal", p0084.03 "he says", p0101.09 "of the
  universe", p0102.30 **chapter 52**, p0106.37 "one confession", p0115.14 "by no means", p0118.09 τοῦτο, p0146.43 optative,
  p0082.46 "and truth"); kept as conjecture with "Migne prints X (confirmed on the plate)" notes where it does not
  (p0024.01, p0059.10, p0068.35 bracket, p0089.14, p0095.07, p0135.04/.45, p0140.19, p0148.19). Note counts: mo-003 18,
  mo-009 16, mo-016 9, mo-019 32, mo-025 26.
- ⚠ **Two reader verdicts were WRONG and the fixer refused them on sense; the coordinator re-read both on the plate:**
  p0091.38 "plate=οὖν" (οὖν is the line's OPENING; the line END is the negative οὐ) and p0120.18 "plate=ἀόρατον"
  (ἀόρατον is earlier in the same line; the END prints ὁρατόν). Verdicts → R, notes corrected (mo-016 n. 7, mo-022 n. 3).
  ⚑ Lesson: a reader's `plate=` on a word that RECURS in the same line is not evidence; the fixer's sense check is what
  catches it. The blind read should look hardest at any other `plate=` rows that changed the English.

## Step 4 — Combefis's apparatus (Sonnet, 8 briefs, 3 at a time) — RUNNING
`mp-note-crops.py maximus-opuscula` → 139 pages, 716 tiles (`notes/img/`, `notes/manifest.json`); `notes/task-{1..8}.md`
generated from the Epistulae template + Opuscula specifics (mid-page NOTÆ blocks = series `notae`; pp. 87–88 Latin-only;
p. 87's top block continues p. 86's note; note 91 on p. 88; SCHOLIA are body text, skipped; gutter loss pp. 103/118/121).
Briefs 1–3 launched 2026-11-06. Then `notes/place.py` (copy from the Epistulae) → APPARATUS.json → build.
⚠ **Burn check (coordinator, 2026-11-06):** ≈4.0M spent so far (translation 2.23M, image check 2 passes ≈1.0M, plate
transcription 0.11M, sweep 0.23M, fixes/revisions ≈0.5M); apparatus ≈2M + blind read ≈1.5M → **≈7.5–8M all-in vs the
≈6M estimate** (the over-inked plates and the second image pass were not in the costing). Within the approved scope;
reported to Wilson at the end of the session.
- Apparatus brief 2 (pp. 29–50): 48 lines (23 notae · 12 lettered · 11 numbered; 3 markers illegible); first return was
  INCOMPLETE (unread tiles on 4 pages, a paraphrased `en`, (g) text contaminated from (h)) → resumed with the gaps named →
  closed; one orphan call (1) at p-0042 θεληθὲν recorded. Anchors mostly `anchorConfirmed: false` (thumbnail-located):
  accepted, since place.py tests every anchorWord on the checked line and unlocated notes go to cruces, not the text.
- Brief 3 (pp. 51–74): 58 lines (26 numbered · 17 lettered · 15 notae; 6 illegible) → resumed for orphan calls
  (p-0053, p-0068) and the p-0070 variant anchors. Brief 4 launched with the completeness rules written into the prompt.
- Brief 1 (pp. 11–28): 41 lines (17 notae · 15 numbered · 7 lettered; 7 illegible; p-0015, p-0017 none). The Greek calls (3)–(8) in Opusc. 1 key its SCHOLIA 1–8 (body text, translated in mo-003), not lost notes. Unmarked prefatory NOTÆ block on p-0011. Brief 5 launched (scholion-call rule added to the prompt).
- Brief 3 gaps closed (61 lines): p-0070 calls 42–44 anchored (φύσις, ἑλόμενοι, γοῦν; 43/44 paired by order); p-0069 c,e,g,i → inferred. Its 'orphan' calls (2) p-0052, (3) p-0053 (Opusc. 7) and (1) p-0068 (Opusc. 8) key the pieces' SCHOLIA → relabelled scholionCall. (pp. 54–55 are duplicate leaves, no images by design.)
- Brief 4 (pp. 75–92): 73 notes (49 numbered · 16 lettered · 8 notae; 4 illegible) → resumed: drop 19 'orphanCall' lines that are Combefis's BOLD 1675 page numbers in the Latin, re-read the p-0086/087 MONITUM in full, NOTÆ en sentence by sentence. Rule sent to briefs 5–6 and written into task-7/8.
- Brief 6 (pp. 113–130): 32 lines (10 numbered · 7 lettered · 12 notae; 2 scholionCall; 4 illegible) → resumed: unopened tiles p-0123/124, p-0128 note t anchor, p-0127 o–r anchors, **context-restored words in long notes → [...]** (never supplied), p-0129/130 full-width small type (notes or body by type size), p-0119 continuation. Brief 7 launched with the [...] and type-size rules in its prompt.
- Brief 5 (pp. 93–112): 68 lines (43 lettered · 12 notae · 10 numbered · 1 asterisk; 1 none p-0107; 1 orphanCall p-0112 Γρηγόριος ¹⁶; 10 illegible). Every tile opened; 12 bold-page-number lines removed after the rule; e/f notae continued across p-0098→099→100; p-0111 k anchor not found (null → place.py sends it to cruces).
- Brief 4 gaps closed (74 lines): 19 bold-page-number lines deleted; p-0086/087 MONITUM re-read in full from 600 dpi bands (to 'quas sequentibus repræsento.'); notae a–f en sentence by sentence; gutter-clipped letters shown in [brackets] (declared supplements, accepted). Brief 8 (pp. 149–161, last) launched.
- notes/place.py copied from the Epistulae and adapted (paths; skips orphanCall/scholionCall/fullWidthBody records). Run after brief 8.
- Brief 7 (pp. 131–148): 36 notes (13 notae · 11 numbered · 11 lettered · 1 asterisk; 11 illegible; 6 none pages) → resumed: the call cross-check it skipped (every raised mark → note / scholionCall / orphanCall), confirm the 6 none pages at 600 dpi, re-read suspected Latin letter shapes in the NOTÆ.
- Brief 8 (pp. 149–161): 14 notes (9 numbered · 5 lettered; 5 none; 5 illegible); every tile opened; p-0161 MONITUM (Disputatio preface) has no notes keyed to the Opuscula → resumed for the call cross-check + 600 dpi anchors.
- Brief 8 cross-check done (22 lines): 6 anchors corrected, markers p-0153 = 36 and p-0155 = 38 now read (3 still illegible), 2 orphanCall (p-0154 creatricem speck, p-0160 ἐνεργήσειεν tick), 5 none pages confirmed. Brief 7: calls matched, 6 none pages confirmed; NOTÆ letter re-read running.
- Brief 6 gaps closed (33 lines; old file kept in the scratchpad): ⚠ **its reader reported that many first-pass tile reads had
  been STRIPPED from its context ("media removed"), so parts of the first pass were not based on a visible image** (the
  Epistulae brief 8 had the same fault). Its second pass re-cut 600 dpi crops for every note region; markers it cannot see
  are now illegible (10), context-restored words → […], p-0126 r *inficetus*, p-0129 full-width block = body (same type
  size), p-0119 note ends at "ac qua id ratione" (no continuation).
- **Coordinator spot check of the other briefs for the same fault** (one random short note each, read on the plate foot):
  brief 1 p-0019 (c) *1 Tim. ii, 4.* ✓ · brief 4 p-0084 ⁷⁹ *Fr. V. 1, κατὰ ταύτην.* ✓ · brief 5 p-0094 ¹ *Epist. ad
  Cledonium.* ✓ · brief 2 p-0033 ¹⁷ not in the cropped band (unchecked). No sign of invented reads; ⚑ the blind read
  should still compare a few cruces notes against the plate.
- Brief 7 NOTÆ re-read done (42 lines; 6 words corrected: p-0140 βαίνειν, subdititiam; p-0141, p-0142 sæcula, terribilis;
  p-0143 → […] where blotted).

## ✅ Step 4 DONE 2026-11-06: apparatus read off all 139 pages (8 Sonnet briefs + targeted resumes, ≈2.9M with repairs)
**361 notes** (389 lines incl. none/orphanCall/scholionCall/fullWidthBody records) → `notes/place.py` → `APPARATUS.json`:
**124 Greek-keyed placed-candidates · 158 unplaced → cruces** (notae 100 · lettered 41 · numbered 17) · **79 Latin Scripture
locators mirrored** to a translator's S note (103 locators vs 246 S notes) · 4 numbered anchors not on the checked page ·
18 lines not located (placed by word). Every brief needed at least one resume for completeness (unopened tiles, the call
cross-check, paraphrased `en`, context-restored words, bold 1675 page numbers misread as calls).
## Step 5 — site build (Sonnet, `BUILD.md`) — LAUNCHED
