# Kraken OCR queue — the Palestine block first

Written 2026-10-18. **Run:** `htr/run-queue.sh` (all pending entries, in order, unattended; safe to
re-run — finished pages are skipped). Output per work in `raw/kraken/<work>/text/p-NNNN.txt`
(Greek column, one printed line per line). OCR is local and free; the model is the PG 88-validated
fine-tune (CER 0.50–1.08% on gap pages, `benchmark/RESULTS.md` 2026-10-17).

**What this output is and is not.** It is the base text for the Palestine-block works, which until
now had no Greek at all (`pg-paired-pilot.md` §8a.D gate). It does **not** replace the every-page
plate read before shipping (exhaustiveness rule, plate gate). The vision-model reading becomes the
second witness, and where the two disagree is the plate stint's checklist.

## Order (Wilson's §8a.D order; columns from DCO's *Rerum Conspectus*, §8a.E)

| # | work | PG | cols | pdf pages | pages | ≈ time | status |
|---|---|---|---|---|---|---|---|
| 1 | Dorotheus, *Doctrinae diversae* | 88 | 1611–1835 | `queue/dorotheus-doctrinae.pages` (836–970, 22 re-scanned leaves skipped per `data/pg-column-maps/pg088.json`) | 113 | 1.2 h | ✅ 1 h 03 |
| 2 | Moschus, *Pratum Spirituale* | 87.3 | 2851–3115 | 39–173 | 135 | 1.4 h | ✅ 1 h 20 |
| 3 | Sophronius, *Epistola synodica* + *Orationes I–IX* | 87.3 | 3147–3365 | 187–298 | 112 | 1.2 h | ✅ 1 h 10 |
| 4 | Sophronius, *Anacreontica* (verse) | 87.3 | 3733–3839 | 480–535 | 56 | 0.6 h | ✅ 57 m |
| 5 | Procopius, *Panegyricus*, *Descriptio S. Sophiae*, *Monodia* | 87.3 | 2793–2843 | 9–38 | 30 | 0.3 h | ✅ 16 m |

**Total ≈ 446 pages ≈ 4.7 h — one night.** Already done, not queued: Antiochus *Ep. ad Eustathium*
(PG 89, our vision OCR) and Dorotheus *Epistolae* (PG 88, shipped). Maximus *Epistulae* (PG 91) is
not OCR work any more: its checked base text is closed (resume note, 2026-10-15).

**Run 2026-10-18/19:** 21:03→01:49, 446/446 pages, no failures. 22 pages give no Greek and were
checked at the plate: Latin-only (Sophronius Or. I *In Christi Natalitia* and other Latin-only stretches,
Ballerini's *Monitum* to Or. II) or the Latin *Notatio*/notes at the ends of Moschus and Procopius.
Empty is correct there; the next step is the every-page plate read against this output.

## Page maps
- **PG 88** (`raw/pg088/088.pdf`): use the column map, never a formula — the scan repeats three blocks.
- **PG 87.3** (`raw/pg087c/087c.pdf`, archive.org `patrologia-volumes/087c.pdf`, 712 pp., 1-bit
  JBIG2 600 ppi): **pdf page = (left column − 2771) / 2**, read off the running heads at pp. 100,
  200 … 600 and at 172 (3115), 297 (3365), 481 (3733), 534 (3839). Work-opening pages carry titles,
  not heads, so each range has a one-page margin; Procopius/Moschus starts (pp. 9–40) are
  unverified by a head. ⚠ Confirm each boundary at the plate before chunking.

## Scope rulings carried forward (§8a.D / 8a.E)
- Sophronius: the *Miracula Cyri et Joannis* (cols 3423–3675) are **excluded** — not queued.
- Procopius: his letters are **not in Migne**; his rhetorical works are in **87.3**, not 87.1–2.
  The OT commentaries stay excluded.
- The *Anacreontica* are verse: a Fable mini-pilot and a `translation-style.md` section come before
  any translating agent touches them. OCR can run now; line breaks in the output follow the print.
- Badges: Dorotheus = "New" (Wheeler's Cistercian English, acknowledged); others per rule 8.

## After this block
Not ordered yet — Wilson's call. Candidates: the other PG 87.3 works; the 134 gap tomes outside
Calfa (`data/gap-map.json`), less those First1KGreek already covers; and Kraken as an independent
third witness on the Byzantine queue (PG 100–161), where Greek already exists from Calfa or OGL.
