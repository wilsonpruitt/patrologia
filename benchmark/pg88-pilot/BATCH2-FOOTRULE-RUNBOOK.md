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

## State — verified vs. outstanding

Lettered run established so far: **`844 f g · 845 h · 846 i j k l m n · 850 o p q r…`**

| leaf | record claims | status |
|---|---|---|
| 845 | `ʰ Apoc. xiv, 16.` + a correction note `Leg. σχήματος.` | ✅ **VERIFIED** 2026-08-07. `h` confirmed. **The correction note's marker is a solid blob — record it ILLEGIBLE**, not `8`. |
| 846 | `i j k l m n` (6 notes) | ✅ **VERIFIED** 2026-08-07. One block wrapping to two lines; all six correct. |
| 847 | none | ✅ **VERIFIED none.** Text to page bottom, then blank + watermark. |
| 848 | none | ✅ **VERIFIED none**, against the untrimmed page bottom rendered from the PDF. |
| 849 | none — *"if one exists below the bottom edge of seg8, it was cut off"* | ⛔ **record admits clipping** |
| 850 | `o p q r` — *"r [cut off at right edge of crop]"* | ⛔ **`r`'s citation must be read** |
| 851 | none — *"within the four captured segments"* | ⛔ crop-derived |
| 852 | `VARIAE LECT.` note → `φυσικῶν` / *legendum forte* `φυσικῶς` | ⛔ unverified; its `10` is the illegible class |
| 853 | `u v x y z` | ⛔ unverified — **and `s`, `t` are unaccounted for** between 850's `r` and this |
| 854 | none | ⛔ unverified |
| 855 | one fragment only, *"4, 13."*, marker clipped | ⛔ **marker must be read** |
| 856 | `d e` | ⛔ unverified — series has restarted past `z`; **`a`, `b`, `c` unaccounted** |
| 857 | none | ⛔ unverified |
| 858 | `f g` | ⛔ unverified |
| 859 | citation fragment `7; ix, 10; xxii, 4.` + `LECTIONES.` + Cotelerius + Aquinas notes | ⛔ **letters unrecorded**; probably carries `h i j` |
| 860 | `k l m n` + a `VARIAE LEC.` note | ⛔ unverified — **`h`, `i`, `j` unaccounted** between 858's `g` and this |
| 861 | none — *"falls outside the bottom edge of segment 8"* | ⛔ **record admits clipping** |
| 862 | none | ⛔ unverified |
| 863 | none | ⛔ unverified |
| 864 | none | ⛔ unverified. ⚠ **No full-page render exists** — `batch2-pages/manifest.json` stops at 863. The sweep script does not care (it reads the PDF), but leaf864's BODY has never been read full-page. |

**Three gaps in the lettered run to close:** `r → u` (s, t) · `z → d` (a, b, c) ·
`g → k` (h, i, j). Each is either a note nobody captured or a leaf whose notes
were misread. 859 is the obvious candidate for `h i j`.

---

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
