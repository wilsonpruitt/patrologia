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
