# 7090 Innocent I, *Epistolae et decreta* — pending TEI patches, chunks 0024–0027 (stint T5)

Sites where this stint opened the column at the plate (`raw/scans/pl020/pl020.pdf`, corners read
first) and Migne's type differs from our Corpus Corporum twin. The English already renders the
plate. Not applied: do not edit the TEI or `data/tei-patches/7090.json` from here; the orchestrator
merges. Each `find` should match once.

## 0582B — head of Ep. XXIX: `laudet` in our twin, **`laudat`** on the plate
- Plate: p. 296, right col, italic summary under EPISTOLA XXIX: `…doctrinam atque sententiam laudat et confirmat.`
- Proposed: `find` `sententiam laudet et confirmat` → `sententiam laudat et confirmat`
- English (0025): "praises and confirms".

## 0582B — inscription of Ep. XXIX: `PRAETENTATO` in our twin, **`PRAETEXTATO`** on the plate
- Plate: p. 296, right col, inscription: `Januario, Octaviano, Praetextato, Sixto`.
- Proposed: `find` `OCTAVIANO, PRAETENTATO, SIXTO` → `OCTAVIANO, PRAETEXTATO, SIXTO`
- English (0025): "Praetextatus".

## 0583B/C — stray full stop: `regulis. [0583C] Ecclesia` in our twin, **no stop** on the plate
- Plate: p. 297, left col: `ut suis constabilita regulis Ecclesia, c et hoc, quo illos caveat` (the C margin letter
  stands at this line).
- Proposed: `find` `ut suis constabilita regulis.` → `ut suis constabilita regulis` (keep the `<pb n="0583C"/>`).
- English (0026) carries no stop.

## 0592A — `ceferi` in our twin, **`celeri`** on the plate
- Plate: p. 301, right col, §5: `prava doctrina celeri veritatis possit ratione i discingi`.
- Proposed: `find` `prava doctrina ceferi veritatis` → `prava doctrina celeri veritatis`
- English (0027): "by the swift reason of truth".

## Not patched (logged in `src/english/7090/cruces-0024.md`)
- 0576D `evacuatum` — plate glyph reads like *evacuutum* (worn/1-bit), single letter, one witness.
- 0579C `beattiudini` — plate prints the same non-word: Migne's type, `[sic:]` in the English.
- 0587 — the plate's margin letter reads **C** twice in col 587 (no D), so our twin's doubled `[0587C]` is the plate's.
