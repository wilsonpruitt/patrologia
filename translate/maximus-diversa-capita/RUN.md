# RUN — Maximus the Confessor, *Diversa capita ad theologiam et oeconomiam* (PG 90.1177–1392), queue #8

Opened 2026-11-22 (Opus coordinator). **Wilson 2026-11-21: "Let's keep going in order … the larger value that we're bringing is connecting the texts, not
innovation of translation … having the full Maximus in one location is a great asset"** — the go for #8 on the stated ≈8–9M, Opus (memory
`feedback_maximus-complete-in-order`). English exists: the Philokalia vol. 2 (Palmer–Sherrard–Ware 1981), "Various Texts on Theology, the Divine Economy,
and Virtue and Vice" → weak badge, about text names it. A Byzantine compilation largely from *Ad Thalassium*/*Ambigua*: said in the about text, not a blocker.
**Multi-session run: three agents at a time** (repo rule 5). Work dir / Kraken key `maximus-diversa-capita`.

## Setup 2026-11-22
- **Map** pg090.json extended pp. 590–708 (corners p590 = 1153/1154, p600 = 1173/1174, p605 = 1183/1184 → col = 2×page − 27 from p590; no dup leaves to p709).
- **Range** p0602:1 (title) – **p0709:37 «Τέλος Μαξίμου τῶν θείων κεφαλαίων.»** (p0709:38 MONITUM = Theopemptus's). Five centuries: heads p0602.5, **p0624.9**, p0643.13, p0665.22, p0687.52.
- **Kraken** 108 pages → kt-rules 1,401 changes. **kt-lost → 3 real body lines restored by hand** (plate-read by the coordinator; `RESTORED-LINES.tsv`): p0637.53 ch. II.76 opening;
  p0687.52–53 ΕΚΑΤΟΝΤΑΣ ΠΕΜΠΤΗ + V.1 opening (misclassed as foot). ⚠ p0602's two big title lines are NOT in the text (translators report `heading`). Other kt-lost hits: running
  heads, Latin century heads, ~12 Greek foot scholia (apparatus).
- **Witness** myriobiblos `theoloikon1–5.html` → **781 rows** in `checked/DOUBTS.tsv` (198 large blocks skipped).
- **19 chunks** (page ends; 1,268–2,245 Greek words; ≈38,300 total): dc-001 602–608 · 002 609–614 · 003 615–620 · 004 621–626 · 005 627–632 · 006 633–637 · 007 638–643 ·
  008 644–649 · 009 650–654 · 010 655–660 · 011 661–666 · 012 667–672 · 013 673–677 · 014 678–682 · 015 683–688 · 016 689–693 · 017 694–699 · 018 700–705 · 019 706–709:37.
- **Card** from the Capita alia's + the BRACKET LESSON (log every bracket as `doubt`; never drop a bracketed negative silently) + century/chapter shape (numbering restarts per century).
  Glossary = Capita alia's + its rulings at the head. **10 briefs** `_briefs/dc-001_002 … dc-017_018, dc-019_019`.

## Step 1 — translation (Opus, 10 briefs, three at a time)
- ✅ dc-005_006 (round 1): dc-005 2,084 Greek → ≈2,591 English, 25 notes, 64 rows, cols 1228–1237, [II.]15 (end)–50; dc-006 1,889 → ≈2,268, 26 notes, 47 rows, cols 1240–1248, 50 (end)–76 (start). Numbering unbroken.
  Brackets (settle at the apparatus): p0631.15 «[ἐπικτήσεως» unclosed (English unbracketed), p0631.25 «([·» debris, **p0633.53 ἡδονῆς [ὀδύνης] — English OMITS ὀδύνης (variant/deletion?)**. Negatives: ch. II.18 οὐ λήψεται restored from «ὼ» (Latin *non accipiet*).
  Terms: ἐπίγνωσις full knowledge · Αὐτολόγος the Word himself · ἐπίνευσις assent · διάκρισις distinction (discretion ch. 70) · ἀεικινησία «the ever-moving».
- ✅ dc-003_004: dc-003 2,031 → ≈2,509, 26 notes, 57 rows, cols 1204–1213, I.61 (cont.)–84; dc-004 2,059 → ≈2,614, 32 notes, 79 rows, cols 1216–1225, I.84–100, SECOND CENTURY, II.1–15. Numbering unbroken (koppa 90–99 mangled).
  ⚑ **IMAGE CHECK MUST SETTLE: ch. I.77 p0619.20–21 ἐνύπαρκτον (both witnesses) — English «without existence» follows the Latin *nec vere est* (ἀνύπαρκτον)**: existence/non-existence, polarity-class.
  I.89 p0621.34 «ὑπὲρ χάριτος . ὑπὲρ θείας ἐντολῆς» («or» supplied); I.91 λοιμόν kept vs Latin *fami*; I.99 p0623.53 duplicated line fragment. Bracket: I.64 μεταμαθοῦσαν [μεταμαθούσης] variant; lone «]» ×3 at I.62.
  Sweep: **φρόνημα τῆς σαρκός «the way of thinking of the flesh» (Disputatio ruling) vs Capita alia «the mind of the flesh»**; μεταμέλεια remorse / μετάνοια repentance; ὑπόστασις Heb 11:1 «hypostasis» here vs Capita alia «substance».
- Coordinator plate read p0619.20 (600 dpi, ×4): the line-end letter is a blotted CLOSED bowl with a rising stroke = most likely **ἀν-|ύπαρκτον** (ε is open in this type) → the English
  «without existence» is right; Kraken and myriobiblos both misread the blot. Image check to confirm (R with plate=ἀν-).
- ✅ dc-001_002: dc-001 2,062 → ≈2,740, 20 notes, **160 rows**, cols 1177–1189, title block + FIRST CENTURY I.1–29; dc-002 2,171 → ≈2,590, 22 notes, 46 rows, cols 1192–1201, I.29 (cont.)–61. Numbering unbroken.
  ⚠ **p-0604 (col. 1181): OUR ONLY SCAN CLIPS THE LEFT MARGIN** — the opening letters of all 54 Greek lines are not on the image (checked by the coordinator; the second archive.org file
  `patrologia-volumes/090.pdf` is the SAME scan, 93,656,294 bytes; no PG 90 in Calfa; Gallica search empty; Google Books page images «not available» for all four ids). The translator
  supplied the openings from the myriobiblos transcription + the facing Latin (≈50 `ocr` rows at medium) and one `[?]` (p0604.10, T note 4). **Ruling (coordinator): these rows are
  NOT plate-checkable → excluded from the image check; the Greek displays the myriobiblos fills; the cruces page says, for col. 1181, that the line openings are clipped in our scan and
  supplied from the myriobiblos transcription.** If another PG 90 scan turns up, re-read col. 1181.
  Brackets: p0604.36 ἀπεργάζεσθαι [ἀπεργάσασθαι] variant; p0611.17 ἐξώπλισε [ἐξήπλω(σ)ε] variant (English «armed», Latin *armavit*). Sweep: ἀΐδιος and αἰώνιος both «eternal» (needs a ruling:
  glossary had αἰώνιος «everlasting»); ἀντιστροφή «reversal» (ascetic) vs §IX «reciprocation»; παθήματα sufferings / affections.
- ✅ dc-007_008: dc-007 2,009 → ≈2,410, 24 notes, 61 rows (2 print: p0638.23 ἀνατραπήν/ἀνατροπήν Hab 2:15, p0639.16 μετά/μέν), cols 1249–1260, II.76 (cont.)–100, THIRD CENTURY, III.1–3; dc-008 2,115 → ≈2,601,
  20 notes, 59 rows, cols 1261–1272, III.3–31 (ends «ἡ κατ᾿ ἔφεσιν» | noun on next page). Numbering unbroken. Brackets: p0641.39 προηγμένων [προηγουμ.] variant; p0647.01 Ἔτι [ὅτι] variant.
  Least sure: p0641.33 παρεχομένων/παρερχομένων (English follows the Latin *fluxarum*: plate); p0646.41 ἐπιγνωμοσύνης; p0647.01 ch. III.18 damaged opening.
- ✅ dc-009_010: dc-009 1,873 → ≈2,340, 13 notes, 39 rows, cols 1273–1281, III.31 (end)–52; dc-010 2,235 → ≈2,711, 24 notes, 60 rows, cols 1284–1293, III.52–79. **Migne prints «οϛʹ» twice (76, 77):
  a printed numbering slip** (Latin + witness give 77). ⚑ **ch. III.55 ἔπεστι → ἄπεστι «is absent»** (Latin *nulla … occurrit*, witness): presence/absence → image check must confirm.
  Brackets: βάσιν [φύσιν] variant (ch. 50); «[ξδʹ …]» around ch. III.64's first line (column rule? settle at the apparatus); lone «]» = column rule.
  ⚑ **ch. III.48 «συστελλό-» cut at the p653 foot: coordinator plate read → a one-word last line «μενον.» Kraken never segmented** → restored (p0653.54, `RESTORED-LINES.tsv`).
  Scan of all 107 page seams for the same pattern (hyphen + new chapter; unpunctuated end + new chapter): no other loss (p616 = glued band letter; p619 «φύλαε» = a leaked asterisk note «Quaest. 24 ad Thalas., φύλακε»).
- ✅ dc-011_012: dc-011 2,217 → ≈2,751, 30 notes, 74 rows, cols 1296–1305, III.79 (end)–100, FOURTH CENTURY, IV.1–9; dc-012 2,245 → ≈2,664, 29 notes, **111 rows**, cols 1308–1317, IV.9–34. Numbering unbroken.
  Brackets (settle at the apparatus): III.89 λύπης [ὀδύνης], λυπεῖ [ταπεινοῖ]; III.92 [, τοῦ εἴδους ἀπεύχεσθαι]; **III.94–99 a [ … ] pair spanning six chapters?**; IV.2, IV.18 garbled variants; IV.21 πεφύκασι [πεφύκαμεν];
  **IV.22, IV.26 unclosed brackets rendered as supplements (extent assumed)**; IV.29 [, ἔφεσιν,]; IV.33 λόγος [Θεός]. Least sure: III.88 a word lost («κόλασις( λύπη», `[?]`); IV.6 προβαλών/προσβαλών; III.81 τοῦ βασιλεύειν (LXX μὴ).
- ✅ dc-013_014: dc-013 1,905 → ≈2,283, 11 notes, 42 rows, cols 1320–1328, IV.34–54; dc-014 1,884 → ≈2,281, 20 notes, 42 rows, cols 1329–1337, IV.54–78. Numbering unbroken.
  ⚑ **p0674.10 ἀπαθοῦς → παθούσης** (English follows the Latin *laborantis*; printed «passionless» reverses the argument): image check. IV.58 προσλαβόν (Latin) vs witness προλαβόν; IV.71 τόπῳ for τρόπῳ.
  ⚠ **p0673 ch. IV.36: a MID-PAGE line dropped by Kraken** — coordinator plate read: «ἀπάθειαν, ἡ κατὰ νοῦν τῆς θείας ἡδονῆς ἐπιγίνεται» between line 17 (…τὴν γνωμικὴν) and line 18 (χάρις.).
  → GREEK-PATCH at build: append it to p0673:17 (keeps every later tag); ENGLISH FIX: replace the `[?]` in dc-013 ch. 36 with the plate text.
- **Lost-line audit, whole work (coordinator):** (1) seam scan of 107 page ends; (2) witness scan: every run of ≥5 myriobiblos words absent from the Kraken text → **only p0673.18** (all other hits =
  myriobiblos navigation text). Restored so far: p0637.53, p0687.52–53, p0653.54 (`RESTORED-LINES.tsv`) + p0673 (patch). p604 = clipped scan (ruling above). One-word losses below the 5-word
  threshold are left to the translators' «a line seems lost» rows + the image check.
