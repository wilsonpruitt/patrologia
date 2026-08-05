# Full-width Greek lines, PG 88 leaves 845–864 (2026-08-05)

Located by the vision pass (`pg-fullwidth-scan.py` renders + a reading pass over
labelled bands). **Validation: leaf 847 came back `L02, L03`, exactly the two
lines independently verified against the plate before the pass was built.**

| leaf | bands | note |
|------|-------|------|
| 845 | L06, L07 | Latin ends "…uti patres nostri."; Greek runs full width to §ΙΒ' |
| 846 | L03, L04 | Latin ends "…assidens et a nullo distracta." |
| 847 | L02, L03 | **ground truth** — `κρωσις τῆς ἀλόγου ἐπιθυμίας … νηπιότητος.` |
| 849 | L12 | Latin §I ends "…dientiam dedidere."; Greek alone to the §II heading |
| 853 | L05, L06 | bold italic, inside the Bel-and-the-Dragon quotation |
| 857 | L05 (±L06) | locating pass uncertain of the band; both cropped |
| 861 | L11 | `Ἔρχεται διὰ τοῦ φόβου τοῦ Θεοῦ` before §V |
| 848, 850, 851, 852, 855, 856, 858, 859, 860, 863, 864 | — | none |

**7 of 20 leaves affected.** Not rare enough to ignore, not common enough to
justify harvesting every leaf full-page.

## The mirror case — Latin running full width

**Leaves 854 and 862** carry the reverse: the GREEK finished early and Migne ran
the **Latin** across the full measure. It costs us no Greek, so it is not in the
crop list — but it matters twice over:

1. **The Latin twin harvest will hit it.** `pg-latin-twin.mjs` splits djvu word
   tokens into two columns by x-coordinate; a full-width Latin line has tokens on
   both sides of the split and will be torn in half, or half-assigned to the
   Greek side. Check this before trusting a twin on PG 88.
2. **It explains an earlier report.** Batch 2's first pass called leaf 862's
   full-width Latin a "mid-column Latin bleed" and excluded it under layout
   rule 4. That was the right action for the Greek file, but the wrong name for
   the thing — it is not a bleed, it is the mirror of this defect.

## Method notes worth keeping

- The locating pass reports **band labels, never pixels**; models estimate
  coordinates poorly and a mis-stated row crops the wrong slice.
- One agent silently skipped `leaf858` while reporting on its other six, so the
  leaf was re-scanned alone (result: NONE). **Check the returned list covers
  every input leaf** — a scan that omits a leaf looks identical to a clean one.
- Two agents correctly declined to report the full-width **Latin** on 854/862 as
  Greek, and said so explicitly. The distinction held under instruction.
