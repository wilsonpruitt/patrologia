# Apparatus GAP brief — Maximus *Disputatio cum Pyrrho* (PG 91), pages p-0169, p-0170, p-0171, p-0172, p-0173

The notes on these pages are ALREADY transcribed in `~/patrologia/translate/maximus-disputatio/notes/result-1.jsonl`
(read its lines for your pages first). Three things were left undone; do exactly these, nothing else:

1. **Call cross-check, both columns, every page.** Cut 600 dpi bands from
   `~/patrologia/raw/kraken/maximus-disputatio/pages/<page>.png` (≈3975–4031 × 6331; the Greek stands RIGHT on even pages,
   LEFT on odd; columns split near x ≈ 2000 — cover each column's FULL width, gutter to edge) and find every raised mark
   (superscript numeral, bracketed letter, asterisk). Each mark must match a note in result-1.jsonl, or be recorded as
   `{"page":…,"orphanCall":"<mark or ?>","anchorWord":…,"column":…}`. A note with no mark found: say so.
   Crop recipe: `python3 -c "from PIL import Image; Image.open(P).crop((x0,y0,x1,y1)).save('/tmp/b.png')"` then Read it.
2. **Markers:** for each note on your pages with `"marker": null`, read the call in the text AND the mark in the note
   block on tight crops enlarged 2–3×. Record it only if one of the two is legible; never from the sequence.
3. **Greek anchors:** confirm each Greek note's anchorWord/anchorLine on a 600 dpi crop.

Write corrections ONLY to `~/patrologia/translate/maximus-disputatio/notes/result-1c.jsonl` (create it), one JSON line per changed
or confirmed note, the full note line with `"replaces": "<page>|<old text first 20 chars>"` and `"anchorConfirmed": true`
where confirmed; orphanCall lines as above; one line per page `{"page":…,"crosscheck":{"calls":N,"matched":N,"orphans":N}}`.
Work page by page, append as you go. No other files, no web, no delegation. If your context grows long, finish the page
you are on, write its lines, and stop with a report naming the pages left.
