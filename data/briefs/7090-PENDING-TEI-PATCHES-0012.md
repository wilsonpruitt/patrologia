# 7090 Innocent I, *Epistolae et decreta* — pending TEI patches, chunks 0012–0017 (stint T3)

Sites where this stint opened the column at the plate (`raw/scans/pl020/pl020.pdf`, corners read
first) and Migne's type differs from our Corpus Corporum twin. Per "What the English translates —
THE PLATE WHERE READ", the English already renders the plate. Do not edit the TEI or
`data/tei-patches/7090.json` from here; the orchestrator merges. Each `find` should match once.

## 0526A — `peceaverat` in our twin, **`peccaverat`** on the plate
- Plate: p. 268, right col, corners 525/526 (Anastasius quotation).
- Proposed: `find` `anima illa sola, quae peceaverat` → `anima illa sola, quae peccaverat`
- English (0014): "that soul alone which had sinned".

## 0525B/C — stray colon after `χειροθετουμένους,`
- Plate: p. 268, left col: `χειροθετουμένους, hoc est accepta manus impositione` — comma only.
- Proposed: `find` `χειροθετουμένους, :` → `χειροθετουμένους,` (check the XML: the colon may sit
  next to the `<pb n="0525C"/>`; keep the pb).
- English (0014) carries no colon.

## 0529A — `axoris` in our twin, **`uxoris`** on the plate
- Plate: p. 270, left col, first line: `Tit. I, 6) unius uxoris virum`.
- Proposed: `find` `unius axoris virum` → `unius uxoris virum`
- English (0015): "that a man of one wife".

## 0530A — `cripuerit` in our twin, **`eripuerit`** on the plate
- Plate: p. 270, right col, §6: `morti destinatos qualibet ratione eripuerit`.
- Proposed: `find` `qualibet ratione cripuerit` → `qualibet ratione eripuerit`
- English (0015): "has by whatever means rescued those appointed to death".

## Not patched (logged in `src/english/7090/cruces-0012.md`)
- 0526A `occassione` — plate glyph worn; spelling attested either way.
- 0531A `honoram` — plate `honor.m`, the vowel worn; English "honour" either way.

## Note-text corrections (the `[cn:]` layer, not TEI)
Made directly in the Latin chunks' `[cn:]` markers; the same corrections are owed to
`data/plate-notes/7090.tsv` before any re-chunk, or `inject-plate-notes.mjs` will restore the sweep
text. Full list in `src/english/7090/cruces-0012.md`.

## 0540A — `expelere` in our twin, **`expetere`** on the plate
- Plate: p. 276, right col, first line: `communionem expetere festinavit`.
- Proposed: `find` `communionem expelere festinavit` → `communionem expetere festinavit`
- English (0017): "made haste to ask for the communion".
