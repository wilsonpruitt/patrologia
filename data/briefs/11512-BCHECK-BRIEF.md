# Wolbero 11512: second-witness check of every `[sic:]` and TEI patch (2026-09-25)

**Why this pass exists:** T10 measured that on scan A (`raw/scans/pl195/patrologiaecursu0195mign.pdf`) the letters *c* and *e*, and other thin letters, are filled with ink and cannot be told apart. Two `[sic:]` that A made look like Migne's defects were errors in OUR digital Latin. A `[sic:]` is a public claim that Migne's type is wrong, and a TEI patch changes our Latin to "what the plate prints". Both must rest on a legible plate. Stints T01–T09 (and parts of T11/T15/T16) fired theirs on scan A alone. This pass re-reads **every** site on scan B, with no sampling (CLAUDE.md, BIAS TO EXHAUSTIVENESS).

## Inputs
- `data/briefs/11512-SIC-LIST.tsv`: all 105 `[sic:]` (chunk, column, scan-A page, the marked form, English context).
- `data/briefs/11512-TEI-PATCH-LIST.tsv`: all 76 proposed patches (the cruces line as written: column · our reading → plate reading · page).
- Your launch message gives your chunk range. Take every row whose chunk (SIC list) or cruces file (patch list) falls in that range.

## Scans
- **Scan B** (the witness for this pass): `raw/scans/pl195/patrologiaecur195mign.pdf`, **PDF page = floor((col + 9) / 2)**. Read the printed corner column numbers first.
- Scan A, for comparison only: `raw/scans/pl195/patrologiaecursu0195mign.pdf`, page = floor((col + 13) / 2).
- Render one page at a time, 600 dpi, into your own scratch dir: `pdftoppm -f N -l N -r 600 -png <pdf> <SCRATCH>/b`. Crop to the site. Never fetch anything online. 8 GB Mac: no parallel renders, delete PNGs as you go.

## For each site, record
Find the word on scan B at 600 dpi (and look at A beside it). Decide:
- **`[sic:]` rows:** `STANDS` (B prints the defective form legibly) · `OURS` (B prints the correct form, so the defect is in our Latin: the `[sic:]` must be withdrawn and a TEI patch added) · `UNDECIDABLE` (damaged on both; the `[sic:]` is withdrawn and the site becomes a crux, since a public claim needs a legible plate).
- **TEI patch rows:** `CONFIRMED` (B agrees with the proposed plate reading) · `REJECTED` (B shows our Latin was right, so the patch is dropped) · `UNDECIDABLE`.
- Always give B's reading **exactly as printed**, letter by letter, and which letter(s) decided it.

## Also in scope (misc, only for the checker whose range contains them)
- 0000–0019 checker: p. 523 scan-A corner numbers (T03 did not read them); 1040D *a regione* vs Vulgate *e regione* (one-letter word, A blacks it out); 1024B *fecunditata*, final letter.
- 0050–0080 checker: 1231C *dil?tionis* (letter missing on both copies: say what is there); 1262C *esse. quia* point or comma; 1257D *pentibus* → *gentibus* (A only so far); 1215D *neeessariam*.

## Output
One file: `data/briefs/11512-BCHECK-<firstChunk>.tsv`, header
`kind	chunk_or_file	col	pageB	our_or_marked_form	B_reads	A_reads	verdict	note`
One row per site: every row of your range, including the ones that simply STAND or are CONFIRMED. A report that lists only changes can't be told apart from one that never looked.

**Do NOT edit any English, Latin, cruces or patch file.** The orchestrator applies the verdicts.

Report (under 200 words): rows checked by kind, verdict counts, every OURS/REJECTED/UNDECIDABLE listed with column, and any page you could not render.
