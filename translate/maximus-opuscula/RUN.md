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
