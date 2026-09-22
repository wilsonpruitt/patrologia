# 9215 Usuardus, *Martyrologium* (PL 124), chunks 0012–0014: pending TEI patches

Stint F, 2026-09-22. Sites where the plate was opened and Migne's type differs from our Corpus
Corporum twin. **The English in `src/english/9215/0012.md`–`0014.md` already renders the plate**;
this file is how the Latin catches up. The `find` below was checked to match exactly once in
`sources/pl/tei/9215.xml`.

Witnesses: archive.org `patrologiaecurs76unkngoog`, leaf = (col + 9)/2 (held through the whole
range: n351 = 693/694, n434 = 859/860); Gallica `ark:/12148/bpt6k54939860`, f = (col + 1)/2
(held: f348 = 695/696, f429 = 857/858). Corners were read first on every page.

⚠ **PL 124 is two printings.** Our TEI follows the Gallica printing. Classes as in stint D's file:
- **A. Both printings agree against our TEI.** An ordinary transcription error: patch.
- **B. Press variant.** Gallica (and so our TEI) prints a non-word where the archive printing is
  sound. **None found in this range.** Every non-word met on one printing here was on the
  *archive* printing, with Gallica and our TEI sound (*quid*/*quia* 0695, *beatissima* 0719,
  *neo* 0829, *modosis* 0833, *socros* 0835): nothing to patch.

---

## Class A: both printings agree, our TEI is wrong

### P1 · 0807: *Agricofae* → *Agricolae*

- **Plate:** archive n408 (807/808), band XVII Kal. (16 December), last line: *Ravennæ,
  sanctorum Valentini, Naulis et Agricolæ.*; Gallica f404 (807/808), same line: *sancto-|rum
  Valentini. Naulis et Agricolæ.* Clean *l* on both; no *f*.
- **Our twin prints:** `Ravennae, sanctorum Valentini. Naulis et Agricofae.` (a non-word).
- **Proposed patch:** `find` `Naulis et Agricofae` → `replace` `Naulis et Agricolae`
- **English as shipped** (`0013.md`): "At Ravenna, of Saints Valentinus. Naulis and Agricola."
- ⚑ The stop after *Valentini* is the Gallica printing's (the archive has a comma). The twin
  follows Gallica there, so it is a press variant and is **not** part of this patch.

---

## Noted, not patched

- **0755 month head.** The archive (n382) sets *MENSIS DECEMBER.* / *HABET DIES XXXI.* on two
  display lines with a stop after DECEMBER; the twin has none. Gallica f378 could not be fetched
  (two timeouts), so it is single-witness. The English head normalizes either way (Pattern 9), so
  nothing rests on it. Orchestrator's call whether to read f378 later.
