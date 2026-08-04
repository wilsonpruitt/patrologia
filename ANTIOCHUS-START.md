# Antiochus, *Epistula ad Eustathium* (PG 89, 1422–1427) — harvest start

Session 2026-08-04 (Opus). Step 1 of §8a.E's sequence. **Feasibility CONFIRMED.**

## Established

- **Scan:** `raw/pg089/089.pdf` (archive.org `patrologia-volumes/089.pdf`,
  103 MB, **954 pages**). Gitignored under `raw/`.
- **Column↔page concordance, read off the plate, not assumed:**
  **`colLeft = 2·page − 13`.** Verified at PDF **page 716 → cols 1419|1420**,
  running head *ANTIOCHI MONACHI*.
- **The letter therefore sits on PDF pages 717–720.** Page 717 carries the
  running head **EPISTOLA AD EUSTATHIUM** and the full title block:
  *ΕΠΙΣΤΟΛΗ ΑΝΤΙΟΧΟΥ ΜΟΝΑΧΟΥ ΤΗΣ ΛΑΥΡΑΣ ΤΟΥ ΑΒΒΑ ΣΑΒΑ ΠΡΟΣ ΕΥΣΤΑΘΙΟΝ ΗΓΟΥΜΕΝΟΝ
  ΜΟΝΗΣ ΑΤΤΑΛΙΝΗΣ, ΠΟΛΕΩΣ ΑΓΚΥΡΑΣ ΤΗΣ ΓΑΛΑΤΙΑΣ, ΠΕΡΙ ΤΩΝ ΕΚΕΙΣΕ ΑΓΙΩΝ ΠΑΤΕΡΩΝ ΕΝ Ω
  ΚΑΙ ΚΕΦΑΛΑΙΑ ΡΛʹ, ΚΑΙ ΠΡΟΣΕΥΧΗ ΕΞΟΜΟΛΟΓΗΣΕΩΣ* — confirming both the addressee
  (Eustathius, abbot of Attalina at Ancyra in Galatia) and the subject (*περὶ τῶν
  ἐκεῖσε ἁγίων πατέρων*, the fathers killed there). This is the chapter-14 text.
- ✅ **IT IS PRINTED PARALLEL GREEK + LATIN — the twin exists.** This was not
  guaranteed; the surrounding *notitia*/*prologus* matter at 1419–1420 is
  Latin-only in both columns, so the question was live.

## ⚠ Two gotchas caught on sight

1. **The Greek/Latin sides SWAP page to page — confirmed live in this volume.**
   p717 = **Greek left (1421) | Latin right (1422)**; p718 = **Latin left (1423)
   | Greek right (1424)**. The documented PG gotcha, holding here. The column map
   must carry per-page parity; never assume it constant across the four pages.

2. ⚠⚠ **MIGNE'S EDITOR ADMITS TO CONJECTURAL LATIN IN THIS STRETCH.** The
   footnote at the foot of col 1421/1422 reads:
   > *Hanc narrationem mire corruptam saepe divinando Latine reddidimus.*
   > ("This narrative, being marvellously corrupt, we have often rendered into
   > Latin by divining it.")

   **Scope, stated precisely:** the asterisk is keyed to *utilitatem \** in the
   Latin column at 1422, so it governs **the preceding narration (the prologus
   matter), not demonstrably the Epistola that begins immediately below it.** Do
   NOT overclaim it as a verdict on the letter's own Latin.

   **But it is a direct warning about editorial practice in this volume**, and it
   bears hard on the ladder: where the editor divines, **Migne's Latin is not an
   independent witness — it is a conjecture derived from the same corrupt Greek
   we are OCR-ing.** Agreement between our Greek and that Latin would then be
   circular, not corroborative. **The §4 ladder amendment (8a.E step 4) must say
   so explicitly before this work is translated**, and the hand-check against the
   plate — not the twin — has to be the load-bearing verification here.

## Next (step 2)

Column map for pages 717–720 into `data/pg-column-maps/pg089.json`, per-page
parity recorded, verified by ≥2 distinctive Greek tokens per column pair. Then
Greek by Sonnet vision OCR (3.64% CER on this volume), Latin twin + third
witness off the same plates, sanity gate, whole-text hand-check.

## Step 2 DONE — column map written (`data/pg-column-maps/pg089.json`)

Built WITHOUT the usual method: `pg-page-column-map.mjs` cannot run here (it
requires Calfa text, which PG 89 has none of, and a `_djvu.xml` at
`raw/scans/pg089/`). So the map was built from the plate directly.

- **Scan with word coordinates:** `patrologicursus105migngoog` (archive.org,
  volume field = 89), `_djvu.xml` 63 MB, 967 leaves. ⚑ **Gotcha:
  `archive.org/download/<id>/<id>_djvu.xml` returned HTTP 500; the direct node
  URL `https://ia800503.us.archive.org/0/items/<id>/...` worked.** Fall through
  to the node from `/metadata/<id>` when the download path errors.
- ⚑ This is a **different physical copy** from `raw/pg089/089.pdf`. Offset:
  **leaf = PDF page + 10**. Verified by running heads (leaf 726→1419,
  727→1421, 729→1425). Do not extend past leaves 726–731 — PG offsets drift.
- **Per-leaf parity measured, not guessed** (Greek-char density per x-half):

  | leaf | pdf p | cols | Greek col | side |
  |---|---|---|---|---|
  | 727 | 717 | 1421\|1422 | **1421** | left |
  | 728 | 718 | 1423\|1424 | **1424** | right |
  | 729 | 719 | 1425\|1426 | **1425** | left |
  | 730 | 720 | 1427\|1428 | **1428** | right |

- ⚑⚑ **PAIRING IS WITHIN A LEAF, and the Greek columns are NOT contiguous.**
  Each leaf carries one passage as Greek + its facing Latin, and the sides swap
  every leaf. So the letter's Greek lives in **1421(tail), 1424, 1425, 1428** —
  a chunker that assumes a contiguous Greek column run will silently interleave
  the Latin. Confirmed on leaf 728, where Latin *sacrae Scripturae capitula*
  faces Greek *τὰ τῆς θείας Γραφῆς κεφάλαια*.
- **Content verified by distinctive tokens** — and it is the right text:
  leaf 727 `ΕΥ̓́ΣΤΑΘΙΌΝ`, `γεγράφηκάς`; leaf 729 **`Παλαστίνῃ`, `Σαρακηνῶν`**;
  leaf 730 `Ζοροβάβελ`. The Palestine/Saracen material on 1425 is the
  chapter-14 narrative.

**Next (step 3):** Greek by Sonnet vision OCR over the four Greek half-columns.
