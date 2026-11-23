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
