# Batch 2 foot rules — runbook for a long finishing session

**Written 2026-08-07 to be executed cold.** Everything needed is here; you should
not have to reconstruct anything. Background, if you want it, is at the foot of
`BATCH1-REHARVEST.md` — but this file is sufficient.

**Model: OPUS, working directly. Do NOT delegate this to subagents.** Reading a
marker letter is *adjudication*, not transcription, and the standing policy is
Sonnet transcribes / Opus adjudicates. This is a long single-session read, not a
fleet. (`Sonnet` remains correct for body-text transcription of new leaves —
that is a different job, phase 3 below.)

---

## Why this exists

Batch 2's `FOOTNOTES-SKIPPED:` records in `raw/pg088/batch2-assembled/leaf8NN.txt`
were written from the **retired 4-segment column crops**. Several admit clipping
in their own text ("cut off at right edge of crop", "if one exists below the
bottom edge of segment 8"). They cannot be trusted as they stand, and **nothing
may be chunked until they are re-read**, because a note carries the scripture
citations that hard rule 9's index is built from, and a wrong marker letter
silently breaks the body↔note pairing.

---

## The method — three steps, and no cleverer

Use `scripts/pg-note-sweep.py`. It renders straight from `raw/pg088/088.pdf`, so
it does **not** depend on the batch2-pages manifest (which is missing leaf864).

```
# 1. LOCATE — contact sheets, four leaves per image. Look at them.
python3.11 scripts/pg-note-sweep.py grid \
    --pdf raw/pg088/088.pdf --leaves 849-864 --out /tmp/sweep

# 2. PROPOSE — candidate bands, full column height. Over-proposes on purpose.
python3.11 scripts/pg-note-sweep.py candidates \
    --pdf raw/pg088/088.pdf --leaves 849-864

# 3. READ — 600 dpi crop of each band you saw or it proposed.
python3.11 scripts/pg-note-sweep.py crop \
    --pdf raw/pg088/088.pdf --leaf 850 --box 0,5600,4032,6100 --out /tmp/sweep

# 4. ADJUDICATE any marker before asserting it — pixel map, not an impression.
python3.11 scripts/pg-note-sweep.py glyph \
    --pdf raw/pg088/088.pdf --leaf 850 --box 380,5700,540,5790
```

All coordinates are **600 dpi full-page pixels, untrimmed**. Never segment
coordinates, never a manifest's `trimmedTo` box. Leaf N is page index N.

---

## ⛔ The rules. Every one was bought with an error.

1. **A NOTE IS NOT ALWAYS AT THE FOOT.** leaf838's `ᶜ Prov. ix, 9.` sits mid-page,
   above the `Sequentia` notice, because that is where its Greek run ends — and a
   work ending mid-page is exactly where new notes cluster. **Scan the full column
   height.**
2. **There is no printed rule to find.** In this volume the "foot rule" is a block
   of small type after a vertical gap. A horizontal-line detector returns nothing
   on every leaf.
3. **MARKERS: letters are distinguished by SILHOUETTE, digits by COUNTERS, and
   over-inking closes the counters first.** So `ʰ`, `ᶜ`, `ᶠ` are readable even as
   solid blobs, while every numbered marker examined on PG 88 (839 #1, 840 #1,
   842, 844, 845) is an unreadable blob. Run `glyph` before asserting anything.
4. **"Marker illegible" is a FACT ABOUT THE SOURCE, and is the correct output.**
   Same class as leaf843's worn-off `II Cor.` numeral and leaf841's failed-ink
   line. **NEVER complete a marker from its series** — the marker twin of the
   standing rule against completing a lost numeral from the sense.
5. **The lettered `a…z` series IS a completeness gate; the numbered series is
   NOT.** A gap in the lettered run is proof of a missed note. The numbered run
   proves nothing, because an unbroken run of illegible blobs reads as unbroken
   whatever it says.
6. **Read the lettered series ACROSS the batch seam, never within a batch.** The
   per-leaf-restart model was wrong and every leaf inside Batch 1 was individually
   consistent with it.
7. **Where a series contradicts a glyph, re-read the glyph.** This rule has been
   violated twice, once inside the paragraph that states it. Treat any inference
   from the series as a prompt to look, not a conclusion.
8. **A marker in the body is no evidence its note was captured.** leaf843's block
   carries four notes and both earlier passes captured only the last.

---

## State — ✅ SWEEP COMPLETE 2026-08-07 (Opus, direct)

**All sixteen leaves 849–864 are read.** Findings in full at the foot of
`BATCH1-REHARVEST.md` (§ "Batch 2 foot rules — THE SWEEP"); corrected records are
appended to each `raw/pg088/batch2-assembled/leaf8NN.txt` under
`FOOT-RULE RE-READ:`. The block below is the outcome, kept so the next reader
does not have to re-derive it.

Lettered run, both cycles:

    844 f g · 845 h · 846 i j k l m n · 850 o p q r [·][·] · 851 [·] · 853 u v x y z
    855 a b c · 856 d e · 858 f g · 859 h i j · 860 k l m n o p q · 861-864 none

| leaf | notes | status |
|---|---|---|
| 845 | `ʰ Apoc. xiv, 16.` + correction note | ✅ verified; correction marker ILLEGIBLE (not `8`) |
| 846 | `i j k l m n` | ✅ verified |
| 847 | none | ✅ verified |
| 848 | none | ✅ verified |
| 849 | none | ✅ verified at 600 dpi (work boundary sits low on this page) |
| 850 | **6**: `o p q r` + 2 illegible-marker notes | ✅ read — **record was short by two** |
| 851 | **1**: `[illeg] I Cor. xiii, 4, 5.` | ✅ read — **record said none** |
| 852 | `VARIÆ LECT.` + 1 note | ✅ read; marker ILLEGIBLE, not `10` |
| 853 | `[u] v x y z` | ✅ read — **`Dan. xiv, 36` / `ibid. 37`, not 56/57** |
| 854 | none | ✅ verified |
| 855 | **3**: `a b c` | ✅ read — **closes the `z → d` gap** |
| 856 | `d e` | ✅ verified |
| 857 | none | ✅ verified |
| 858 | `f g` | ✅ verified |
| 859 | `h i j` + VL note + 2 editorial footnotes | ✅ **all transcribed** — closes the `g → k` gap |
| 860 | **7**: `k l m n o p q` + VL block | ✅ read — **record was short by three**; `Prov. xv` not `xxx` |
| 861 | none | ✅ verified (record had admitted clipping) |
| 862 | none | ✅ verified |
| 863 | none | ✅ verified |
| 864 | none | ✅ verified. ⚠ leaf864's **BODY** has still never been read full-page |

**The one open item:** `846 n → 853 u` needs six letters (`o p q r s t`) and the
leaves in between carry **seven** notes. One of the three illegible-marker notes
(850 ×2, 851 ×1) is not in the lettered series. Recorded as a gap, deliberately
not resolved — see the reasoning in `BATCH1-REHARVEST.md`.

**Two new cruces:** leaf859 `ⁱ Psal. cx, 18.` (Ps. cx has ten verses) and
leaf860 `ᵐ Psal. xxxiii, 2.` (neighbours run 13/14/15). Record, do not renumber.

## Done means

- Every leaf 849–864 looked at whole, not just at its foot.
- Every note transcribed in full with its marker, or its marker recorded ILLEGIBLE.
- The lettered run continuous from `844 f` with every gap either closed or
  explicitly recorded as an unresolved gap.
- Findings appended to `BATCH1-REHARVEST.md` and the corrected records written
  back into `raw/pg088/batch2-assembled/leaf8NN.txt`.
- `next-session-resume.md` updated. Commit as you go.

**Rough cost:** 17 leaves. Today's verified three ran ~15–25k context each
including adjudication, so budget **250–450k** for the sweep. It fits one long
Opus session and needs no agents.

---

## After this — the rest of the road, in order

2. **CHUNK BATCHES 1 AND 2.** Neither is chunked; this is what the foot rules
   block. Both take `[b: X]` band markers per Wilson's 2026-08-06 ruling (see
   `CLAUDE.md`) — **capture bands AS EACH WORK IS CHUNKED**, they are readable
   only with the plate in hand, and a retroactive band pass is a re-read of every
   plate. Batch 2 is 80/80 on bands; Batch 1 is 4/4 on every leaf.
3. **LEAVES 865+** — 87 remain, columns to 1844. ⛔ **HARD STOP: a batch fleet
   needs Wilson's "which model, and go?" with real numbers.** Reference: the
   2026-08-06 eight-leaf run cost ~507k subagent tokens across 5 Sonnet agents;
   leaf838's single-leaf re-harvest cost ~131k. Body transcription is **Sonnet**;
   the adjudication that follows is **Opus**.
4. **`latinOnlyLeaves` MUST DIE, not be patched.** It is a boolean and it has been
   wrong on its only tested leaf twice, in opposite directions, because **Greek
   can stop and start again on one leaf — a work can END and another BEGIN on it.**
   It needs per-run spans. ⚠ **Leaf 970 still carries the flag unchecked.**
5. **Open question from leaf838:** Run 1 quotes Prov 9:9 *in the Greek*, yet the
   marker was placed in the Latin body only. Bears on how `index-work-pg.mjs`
   locates a citation whose text stands in both columns.
