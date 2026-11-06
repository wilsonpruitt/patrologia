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
