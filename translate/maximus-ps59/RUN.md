# RUN — Maximus the Confessor, *Expositio in Psalmum LIX* (PG 90.856–872), queue #5

Opened 2026-11-21 (Opus coordinator). **Wilson's go 2026-11-21: "Opus go"** on the stated ≈0.3M (queue figure; the Mystagogia ran
×2 on its figure → expect ≈0.5–0.6M). Models: Opus translation + Opus blind read, Sonnet volume steps. Work dir / Kraken key
`maximus-ps59`. English exists: **Blowers, "Commentary on Psalm 59", in Daley & Kolbet (eds.), *The Harp of Prophecy* (Notre Dame
2015) pp. 270–278** (web-checked 2026-11-21) → NO "New"/"First" badge. **Wilson 2026-11-21: go in order anyway; the value is the Greek
beside the English (SC gives the French that; English editions lack it).**

## Setup 2026-11-21
- **PG 90 scan** = `raw/pg-pdf/090.pdf` (archive.org `patrologicursus55migngoog`, 757 pp., NO text layer; prefetched by the
  whole-run Kraken). Djvu text fetched → `raw/pg090/090_djvu.xml` (757 objects = 757 pdf pages; the Latin witness).
- **Column map** `data/pg-column-maps/pg090.json` (new): corners read on the plate p430 = 853/854, p440 = 873/874 → **col = 2×page − 7**,
  no duplicate leaves; Greek RIGHT on odd pages here (p431 = Latin 855 | Greek 856). Ps 59 = **pdf pp. 431–439**.
- **Kraken** 9/9 pages (`raw/kraken/maximus-ps59/`, run beside the whole-run pass on PG 63) → `kt-rules` 95 changes (glyph 53,
  accent 26, lexical 16). **kt-lost: 3 "body" lines = running heads only** (p436, p438, p439 Latin heads in Greek letters); the p439
  FOOT? line is the next work (Or. dom.).
- **Witness** `kt-witness.py` on myriobiblos `59psalm.html`: 5 blocks, 93–97% matched → **86 rows** in `checked/DOUBTS.tsv` (17 large blocks skipped).
- **Range** p0431:31 (title «ΤΟΥ ΑΥΤΟΥ / ΕΡΜΗΝΕΙΑ ΕΙΣ ΤΟΝ ΝΘʹ ΨΑΛΜΟΝ») – p0439:24 («αἰῶνας. Ἀμήν.»). Above on p431: end of Q&D («Λείπει») +
  Migne's Latin *Monitum* (unsigned: Maximus's only Psalm work; mystical/allegorical; cf. Corderius's Catena). Below on p439: Or. dom. opens.
- **Chunks**: ps-001 p0431:31–p0435:49 (1,481 Greek words) · ps-002 p0436:1–p0439:24 (1,219). ≈2,700 total.
- **Card** `CARD.md` (from the Mystagogia's; lemma convention: italic own-paragraph lemma + S note `Ps 59:N LXX (Ps 60:N Heb.)`;
  Migne's inline brackets [ἐπιγέγραπται] / [erat Σωβάλ] / [Fr. Σωβάλ] → T notes, editor NOT named). Glossary = the Mystagogia's + its
  sweep rulings. Brief `_briefs/ps-001_002.md` (one Opus agent, both chunks).

## Step 1 — translation (Opus, one brief)
- ✅ **Step 1 DONE 2026-11-21** (one Opus agent, ≈0.19M): ps-001 1,481 Greek → ≈1,805 English, 29 notes, 71 OCR rows (49 ocr, 12 stray, 7 space, 2 doubt, 1 heading),
  cols 856–864, Ps 59:1–8, ends mid-sentence («unfixed» | ps-002 «[865] and temporary …»); ps-002 1,219 → ≈1,523, 32 notes, 74 rows (63 ocr, 8 stray, 3 space),
  cols 865–872, Ps 59:9–14 + doxology. Rows run high (48 and 61 per 1,000): pp. 437–439 badly damaged. Structure checked (anchors 856→872, notes 29/29 + 32/32, no editor named, no `[?]`).
  Translator's least-sure: p0433.23 σαφῶς ἀριθμόν supplied (line-turn loss; witness + Latin *numerum*); p0433.25 τετριάδι [τετράδιη = Migne's bracket [τετράδι];
  p0435.28 stop → raised point; **p0438.43 κατὰ τὴν ῥομφαίαν ἐπιγραφομένῳ** (Latin *gladio suo salutem ascribit*); p0439.15 ἑαυτῶν vs witness ἑαυτῇ; p0436.39 ἄρχει «rules over» vs Latin *auspicatur*.
  Polarity: **p0438.40 καὶ οὐκ ἐξελεύσῃ rendered as a statement** (Maximus expounds it so; Latin likewise; T note). Terms: ἀλλόφυλοι the allophyles, πόλις περιοχῆς the fortified city, νέκρωσις mortification, ἀγνωσία lack of knowledge / ἄγνοια ignorance.
- **Step 2 sweep: SKIPPED by design** (one translator wrote both chunks; the sweep's job is cross-brief consistency). The blind read covers register.

## Step 3 — image check pass 1 (2 Opus readers) LAUNCHED 2026-11-21
`kt-sheet.py maximus-ps59` → **114 rows, 5 sheets** (100 word, 13 line, 1 MISSING). A = 001–003, B = 004–005. `kt-sheet-half.py` cm_path += maximus-ps59.
- ✅ Pass 1: A (001–003) R 49 · P 5 · M 4 · ? 14; B (004–005) R 30 · P 1 · M 1 · ? 10. Pass 2 (`kt-sheet-half.py` → `sheets3/`, 24 rows, one Opus reader): R 14 · P 1 · M 2 · ? 7.
  Sense rows: **p0433.48 ἡ (article) confirmed, not ἢ**; **p0439.15 ἑαυ-|τῶν confirmed**; p0433.23 σα-|φῶς ἀριθμόν IS on the plate (Kraken lost it).
- **Image check merged → `IMAGE-CHECK.tsv` (114 rows): R 93 · M 7 · P 7 · ? 7** (the 7 ? = 1-bit breathings and smeared line starts: stay as printed).
  M: p0433.26 ψοχῆς · **p0434.35 χρίσεως (sense κρίσεως, Latin *judicii*)** · p0434.36 ὀνεχομένους · p0435.49 ἀπανὴς · **p0438.14 Ἰδουμαίας. (question needs ;)** · p0438.23 ἐντολων · p0438.02 αληθῶς.

## ✅ Step 3 DONE 2026-11-21: kt-apply + English fixes (coordinator, in session)
- `kt-apply.py` → `checked/`: 78 applied, 11 applied~, 1 doubt-same, **3 NOT FOUND** (split across a line: p0434.33 ὑποτιθέ-μενος, p0437.08 μολυσμῶν, p0438.42 θαῤ-ῥοῦντι) → GREEK-PATCHES at the build.
- **Coordinator plate reads (p-0432, opened at 600 dpi):** line 1 the title lemma prints **Μεσυποταμίαν** (misprint → PRINT-ERRORS at build); line 2 prints
  **[erat Σωβάλ]·** (Kraken dropped «erat» → GREEK-PATCH); line 24 [Fr. Σωβάλ] ✓; lines 35–36 print **[etiam Fr. Σωβᾶ· | et deinceps]** (Kraken «[ Εr.Σωβα | ει]» → GREEK-PATCH).
  The three brackets are one apparatus, explained by the editor's note b («Sic emendo», Σωβά after the codices/LXX/Hebrew צובה, not Σωβάλ; Maximus's «seven» = שבע).
- English (pre-fix copies in the session scratchpad): ps-001 notes 1/5/7 rewritten from the plate + note b; old note 13 (σαφῶς ἀριθμόν "supplied") DELETED (it is on the plate);
  NEW T notes: χρίσεως misprint (now n20), p0435.28 Migne's full stop vs the run-on construal (now n28); ps-002 n20 (Ps 59:11) + T: Migne's full stop after Ἰδουμαίας. Renumbered in order (ps-001 30 notes, ps-002 32).
  P rows that touch nothing in the English: δαμάσσει (epic future, same sense), θλίψις (Migne's accent), 4 punctuation rows.

## ✅ Step 4 DONE 2026-11-21: apparatus (one Sonnet reader, ≈0.17M) → `notes/result-1.jsonl`
17 notes (10 lettered: editor's Latin comments (a) στηλογραφία, (b) Σωβά, (c) ἰσχύς, (d) Ὠμίασις, (e) Σκηνῶν, (f) Κραταίωσις, (g) Ἔντερον πατρός, (h) αἱματώδης πηλός + 2 locators;
7 numbered Latin Scripture locators), p-0431 and p-0439 none, 6 markers illegible (not completed from the sequence; p-0438's three paired by position), 0 orphan calls, NO Variae lectiones block.
Hebrew inside (a)–(c) read as printed: letter-level doubt.
⚠ **Burn so far ≈0.65M** (translation 0.19 · image check 0.26 · apparatus 0.17 · coordinator) vs the 0.3M go. Left: build (Sonnet, ≈0.2–0.3M) + blind read (Opus, ≈0.15M) → ≈1.0M all-in. **STOPPED for Wilson's OK before the build.**
