# RUN — Maximus the Confessor, *Disputatio cum Pyrrho* (PG 91.287–354), queue #2

Opened 2026-11-14 (Opus coordinator). **Wilson's go 2026-11-14: "opus go"** on the stated burn ≈2M (queue ≈1.4M; the
Opuscula ran 8.5M against 6M, so ×1.4). Models as the Opuscula: Opus translators and plate readers, Sonnet volume work
(sweep, apparatus, build), no Fable anchor (register + glossary = `maximus-opuscula/GLOSSARY.md` § VIII and the
Epistulae card; `translation-style.md` M1–M6). Three agents at a time. Register key `maximus-confessor-disputatio`,
slug `disputatio`, live path `/pg/91/disputatio/`. Badge "New English translation": Clarke 2026 (CUA, FOTC, same volume
as the Opuscula) and Farrell 1990 exist; name Clarke as on the Opuscula.

Method = the kt chain exactly as run on the Opuscula (`translate/maximus-opuscula/RUN.md`): Kraken base → kt-rules →
kt-lost → myriobiblos witness (kt-witness) → chunks/card/briefs → translation → sweep → image check (every row) →
kt-apply (fixed 2026-11-14, `0241c7da`) → apparatus (Combefis's notes, every page) → build → blind read → Wilson.
⚑ Opuscula lessons carried: bound chunks by where each column's text ends; test the last scaffold line for a
full-width footnote; kt-apply resets `checked/` from `ruled/`, so any plate transcription must be re-written after it.

## Setup 2026-11-14 (in session, no API tokens)
- **Pages.** `raw/pg091/091.pdf` pdf pp. **162–195** = cols 287–354 by the Opuscula law (p. 162 head DISPUTATIO CUM
  PYRRHO, *Acta disputationis* / ΠΑΡΑΣΗΜΕΙΩΣΙΣ ΤΗΣ ΓΕΝΟΜΕΝΗΣ ΖΗΤΗΣΕΩΣ; djvu p. 194 prints 352; p. 196 = 355 is the
  following *De anima*). No duplicate leaves: p. 200 = 363/364 still holds. ⬜ Read p. 195 on the image: where the
  Disputatio ends and whether Combefis's notes or the next piece start on that page.
- **Column map** `data/pg-column-maps/pg091.json` + 34 leaves (greekSide from colLeft mod 4).
- **kt-scaffold** WORKS += `maximus-disputatio`.
- **Kraken launched** 2026-11-14 over `raw/kraken/maximus-disputatio/pages.txt` (34 pages, `htr/pg-ocr.sh`, beside the
  whole-PG queue; log `pg-ocr.out`, `kraken.log`).
- **Second witness:** myriobiblos `raw/mirrors/myriobiblos-maximos/prospyrron.html`, the whole work (≈12.2K Greek tokens,
  graves written as acutes, monotonic-ish; mislabelled "PG 90" in its header).

## ✅ Step 0 DONE 2026-11-14 (Opus coordinator, in session): base, chunks, card, briefs
- **Kraken** 34/34 pages → `kt-rules.py` (485 changes: glyph 243, lexical 125, accent 117).
- **kt-lost**: 3 BODY candidates, all present in text/ (p-0177 lines 18/30 with a misread note call `(e)`; p-0178.42 with a
  damaged ΠΥΡ.) → nothing restored. FOOT? lines = Combefis's numbered variants (`al.`, `Fr.`, `ἴσ.`) and the NOTÆ, set
  at the foot of most pages (p. 182: notes, then NOTÆ (g) Τῆς βασιλίδος …) → the apparatus step reads them.
- **End of the work: p-0195:19 (Ἀμήν).** p. 195 then prints a MONITUM and *De anima* (Τοῦ μακαρίου Μαξίμου μοναχοῦ, Περὶ
  ψυχῆς, col. 353 C): not ours.
- **Witness**: `kt-witness.py` on myriobiblos `prospyrron.html`, 24 blocks of 500 words, 91.6–98.2% matched → **363
  `witness` rows** in `checked/DOUBTS.tsv` (67 large blocks skipped as eye-skips/edition differences).
- **Chunks** (`CHUNKS.tsv`): 6 at page ends, md-001 162–166 · md-002 167–171 · md-003 172–177 · md-004 178–183 ·
  md-005 184–189 · md-006 190–195:19 (1.8–2.2K Greek words; 11,726 in all). Scaffolds `--checked`.
- **Card** `CARD.md` (from the Opuscula card: dialogue speaker labels, *thou* both ways, recorder's title + closing
  narrative); **glossary** = the Opuscula's (§§ I–VIII), unchanged.
- **Briefs** `_briefs/md-001_002`, `md-003_004`, `md-005_006` (16.6–17.8K words): three briefs of two, one round.

## Step 1 — translation (Opus, all three briefs at once)
- Round 1 launched 2026-11-14: md-001_002, md-003_004, md-005_006.
- ✅ Brief md-001_002 DONE (≈169K): md-001 1,926 Greek → 2,422 English, 20 notes, 51 OCR rows (21 ocr, 16 heading,
  8 stray, 4 space, 2 doubt), 1 [?]; md-002 1,836 → 2,267, 18 notes, 105 rows (51 ocr, 31 heading, 17 stray, 5 space,
  1 doubt; one non-row p0168.46 Ἀπολινάριον deleted by the coordinator). Script check: anchors 288…305 in order, notes
  1..n matched, turns alternate. Image check: **p0162.09 γιʹ → γʹ (the indiction: July 645 = ind. 3) — `print` or ocr?
  read the plate before touching a date**; p0166.41 line lost? (Latin adds "so also the union without division of their
  natural things": eye-skip τῶν αὐτῶν … τῶν αὐτῶν, [?] in English); p0165.30 ὁρῶμεν → ὁρμῶμεν (Latin *aggredimur*);
  **p0169.43–55 lost line starts, a block** (reconstruction rests on myriobiblos + Latin: p0169.46 ἃ/γὰρ, .47 ἓν/τὴν);
  p0167.43 stray δι᾿; p0171.08 οὐ τοὺς πως (Latin *aliquo modo*); Combefis's brackets [ἐγκρίτων/ἐκκρίτων],
  [παραδεδώκασι/παρέδωκε] (followed the singular, Latin *tradidit*). md-002 ends mid-turn ("Those men, not from evil
  intent and villainy,"). Sweep: **νεῦμα "nod" clashes with ruled ῥοπή "nod"**; **φρόνημα "mind" vs Opuscula "prudent
  thought"**; φαντασία illusion; ἐναντιότης contrariness (ἐναντίωσις opposition); ἀντιστροφή converse (logical; Opuscula
  ruled "reciprocation"?); αἱρεῖσθαι select vs προαιρεῖσθαι choose; δειλία fear; ἀρχαί starting-points; ἀφορμή recoil;
  ἀνθεκτικὴ δύναμις power that clings; τυποῦν figure; ὑπογραμμός pattern; ἀρχηγός author; ἐπαλλαγή interchange;
  ἀνεδέξατο took on / ἀνειληφέναι took up; ὑπόληψις repute/supposition.
- ✅ Brief md-005_006 DONE (≈177K): md-005 2,217 Greek → 2,804 English, 24 notes, 102 rows (64 ocr, 21 heading, 13 stray,
  6 space, 4 doubt; opens mid-turn, T note 1); md-006 2,086 → 2,566, 31 notes, 52 rows (22 ocr, 18 heading, 7 stray,
  3 space, 2 doubt), ends at Ἀμήν. Script check OK (anchors 332…353). Image check: **p0189.32 supplied οὐ (Latin *non est
  nobis quaestio*) — polarity, plate first**; **p0185.35 μὴ συσταθέντα kept, Latin has no negative — polarity**;
  p0189.46 Ὁπόταν/ἀντιδόντες (read ἀπιδόντες; Latin *Quod vero* = ὅτι δέ?); p0185.18 [προκυλινδι] printed bracket?;
  p0191.50 ἡμῶν → ὑμῶν (Latin *vestri*); p0191.40 πεπολιτευμένον (Dionysius -ος; Migne's own?); p0192.54 πιστεύετε. S notes
  weak: Cyril «ποιητοῦ καὶ ποιήματος» (cf. Thesaurus), "fasting forty days" unlocated. Sweep: **ἀντιστροφή reciprocation
  here vs md-002 "converse" → rule (Opuscula: reciprocation)**; σχῆμα monastic estate (ἕξις habit); ἀποτέλεσμα result;
  δυαδικός twofold / διπλοῦς double; δυϊκῶς/ἑνικῶς dually/singly; ἀνυπαρξία non-existence; συνεκδοχικῶς by implication;
  συνεκτικός sustaining; συνθεολογεῖσθαι be theologized together with; θεοφάντωρ God-revealing; τοποτηρηταί topoteretae;
  φρατρία fraternity; πολιτεία way of life; θεοσημίαι divine signs; ἐπείσακτος imported; ἐπιχειρήσεις arguments; ὑμεῖς
  forms = plural "you".
- ✅ Brief md-003_004 DONE (≈184K): md-003 1,978 → 2,485, 28 notes, 101 rows (59 ocr, 24 heading, 9 stray, 5 space,
  3 doubt, 1 print); md-004 2,227 → 2,629, 31 notes, 78 rows (39 ocr, 18 stray, 11 heading, 7 space, 3 doubt). Image
  check: p0172.15 ἢ → εἰ (Latin *si*); p0173.02 Combefis's [αὐτῷ τῷ] (print); p0172.50 μετέβαλεν without ἄν; p0172.10
  [καὶ γὰρ ἓν]; **p0180.55 οὐχ ὁμονύμως kept, myriobiblos drops οὐχ — polarity, plate**; p0178.16 κοινότητος → καινότητος
  (Latin *novitatis*; doubt); p0181.06 ἐπινοουμένης; p0180.01 διειλῆφθαι. T-noted, not corrected: John 1:43 εἰσελθεῖν,
  Phil 2:8 cited as "Hebrews" (the Latin agrees with both).

## ✅ Step 1 DONE 2026-11-14: all 6 chunks translated (3 Opus briefs, ≈0.53M); 14,806 English words, 162 notes, 489 OCR rows
Glossary § IX written (φρόνημα way of thinking; ἀντιστροφή reciprocation; the choice verbs split: προαιρεῖσθαι choose,
αἱρεῖσθαι prefer, ἐπιλέγεσθαι select, ἐκλέγεσθαι pick out; ἑτερόβουλος of other counsel; ἐναντίος contrary; no "ye") —
commit 1a28da8c.

## Step 2 — sweep (Sonnet, `SWEEP.md`) LAUNCHED 2026-11-14.
## Step 3 — image check, pass 1 (concurrent with the sweep: it reads only the OCR tables, which the sweep may not touch)
`kt-sheet.py maximus-disputatio` → **275 rows, 12 sheets** (word 230 · line 45; heading/stray/space rows are not
sheeted). Sheet 001 read by the coordinator as calibration → `IMAGE-CHECK-coord.tsv`: R 15 · ? 8 · M 1. **p0162.09: the
plate prints γʹ (the third indiction, July 645) → R**; p0164.39 the plate prints φύσαντες (sense φήσαντες) → M. Six of
the eight ? are crops on the wrong line. Readers (Opus, `IMAGE-CHECK-BRIEF.md`, now with the plate=-last comment rule):
A = sheets 002–007, B = 008–012, launched.
- ✅ Reader B (sheets 008–012, 107 slots): R 58 · P 9 · M 6 · ? 34. M: p0180.55 ὁμονύμως, p0182.13 σενρέτῳ (σεκρέτῳ),
  p0183.18 πρό-, p0186.36 σώ ατος, **p0189.46 the plate prints ἀντιδόντες (translator ἀπιδόντες: sense check owed)**,
  p0194.19 (low). P withdrawing an emendation → ENGLISH-FIXES: **p0191.40 πεπολιτευμένον**, **p0191.50 ἡμῶν (not ὑμῶν)**,
  010/14 διὰ τί (not τὸ); punctuation P at 010/19, 010/22, 011/4; 009/12 plate [προκυλινδ.].
- ✅ Reader A (sheets 002–007, 144 slots): R 52 · P 4 · M 19 · ? 69. Sense items: p0172.15 the plate prints ἤ (reading εἰ)
  → M; p0172.50 no ἄν on the plate → M (conjecture stands, T note); p0173.02 Αὐτὸ γὰρ [αὐτῷ τῷ] → M (emendation);
  **p0174.06 plate=τῇ (not ἡ/ᾑ): sense check owed**; **p0178.16 the plate prints κοινότητος → P (translator's καινότητος
  withdrawn: ENGLISH-FIXES)**; p0180.01 διαλῆφθαι M; p0180.07 ἑτοιμάσομέν M (mood); p0178.11 ἀγνόω M; p0167.43 δι᾿ ἐκ on
  the plate → P; θεϊκῶς slots ? (diaeresis vs circumflex merged in this type, as in the Opuscula).
- Merged → `IMAGE-CHECK.tsv` (275: R 125 · M 26 · P 13 · ? 111). Pass-2 sheets from `kt-sheet-half.py` (registered the
  work) → `sheets3/`, 111 rows / 12 sheets (half-page width; kt-sheet's `--redo` crops still missed the gutter). **p. 169's
  Greek line starts are smeared in THIS scan** (a black bar over the first letters; no second scan of PG 91 is reachable,
  Opuscula finding) → those stay ? (`line_start_damaged_in_scan`) and the English rests on the translator's reading.
  Sheet 002 by the coordinator (R 5 · P 1 · ? 4); readers A (001, 003–007), B (008–012) launched with `IMAGE-CHECK2-BRIEF.md`.
- ✅ Step 2 sweep DONE (Sonnet, ≈176K): 31 edits (16 rulings, 13 notes: 7 person notes → "(see note N, md-00M)",
  scripture abbreviations, italics); OCR tables untouched; notes 1..n in all six; turns alternate; one [?] (md-001
  p0166.41 n18). Coordinator after it: **the md-002|003 "lost line" is not lost** — p0171.44 κακῇ καὶ πανουργίᾳ | p0172.01
  τινὶ τοῦτο εἶπον runs straight → the sentence joined across the seam ("Those men said this not from evil intent and
  villainy | of any kind, but …"), md-003 n1 rewritten; ellipses removed at the md-003|004 seam; md-001 [288] προτιμῆσαι
  "set … before" (prefer = αἱρεῖσθαι). Left: md-005 "the term of heretics" (φωνή, § IX).

## Step 4 — Combefis's apparatus (Sonnet, 3 briefs) — RUNNING
`mp-note-crops.py maximus-disputatio` → 34 pages, 136 tiles (`notes/img/`, `notes/manifest.json`). `notes/task-{1,2,3}.md`
(pp. 162–173 · 174–184 · 185–195) from the Opuscula's task-8 + Disputatio specifics (numbered variants then NOTÆ
lettered, continued notes, p-0195 shared with *De anima*: `work` field) + the completeness rules every Opuscula brief
needed a resume for (every tile, the call cross-check, no paraphrase, [...] for context-restored words, stripped images
re-cut). Brief 1 launched beside the two pass-2 readers (three at a time); 2 and 3 as slots free.
⚠ **Burn check (coordinator, 2026-11-14):** ≈1.25M so far (translation 0.53, sweep 0.18, image check pass 1 ≈0.18, pass 2
≈0.2 est., coordinator); apparatus ≈0.6–0.7M (Opuscula rate ≈21K/page) + build ≈0.35M + blind read ≈0.35M + fixes →
**≈2.6M all-in vs the ≈2M go**. Reported to Wilson.
- ✅ Pass 2 reader A (sheets 001, 003–007, 60 slots): R 11 · P 2 · M 4 · ? 43 (30 = the line-start smear, now on pp. 169
  AND 173; 4 cut at the right edge; θεϊκῶς ×3 diaeresis/circumflex merged; 5 blotted marks). M: p0165.30 the plate prints
  ὁρῶμεν (sense ὁρμῶμεν); p0165.45 Χρι-|τοῦ; p0174.37 Διὰ (sense Διό). **p0166.41: MIGNE'S PAGE omits the clause φύσεων,
  οὕτω καὶ ἕνωσις ἀδιαιρέτως τῶν αὐτῶν (eye-skip in the print; Combefis's Latin has it)** → ENGLISH-FIXES: supply it in
  brackets from the Latin with a T note, drop the [?]. p0171.08 plate "οὐ τοὺς πῶς" → R (οὐ confirmed). Apparatus brief 2
  launched in A's slot.
- ✅ Pass 2 reader B (sheets 008–012, 41 slots): R 21 · P 4 · M 3 · ? 13. **p0189.32: the plate has NO οὐ** (Πλὴν περὶ
  τῶν ἔργων …; translator supplied it from the Latin *non*) → P, ENGLISH-FIXES (polarity); p0181.06 ἐπινοουμένης P;
  p0181.45 Χριστὸν P; p0180.24 ἠθέλησ ς (α not inked: type or scan?) → ?.
- Pass 2 merged → `IMAGE-CHECK.tsv` (pass-1 copy in the session scratchpad): R 162 · M 33 · P 20 · ? 60. **Pass 3
  (coordinator, full-width crops)** of the 9 "cut at the right edge" rows: on pp. 172 and 188 **the scan itself ends inside
  the Greek column** (letters off the image) → 8 stay ? (`scan_clipped_right_edge`); p0172.45 βουλεύ-|ται → R.
  Final: R 163 · M 33 · P 20 · ? 59 (≈33 smeared line starts pp. 169/173, 8 right-edge clipped, θεϊκῶς ×3, blotted marks).

## ✅ Step 3 DONE 2026-11-14: kt-apply + patches; English-fix list
- `kt-apply.py` (fixed 0241c7da) → `checked/`: 128 applied, 19 applied~, 4 doubt-same, **12 NOT FOUND** = words split
  across a line end → 12 rows in `verify/GREEK-PATCHES.tsv`, each `from` asserted on its line; 33 M → `verify/PRINT-ERRORS.tsv`.
- `ENGLISH-FIXES.tsv` (30 rows: 20 P, 4 R-with-third-form, + p0166.41 Migne's own omission, the 3 polarity rows, p0189.46,
  p0174.06) + `ENGLISH-FIXES.md` (Opus fixer brief) — launch when a slot frees (3 apparatus briefs running).
