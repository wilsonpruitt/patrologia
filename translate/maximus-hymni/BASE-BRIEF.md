# BASE brief — Maximus the Confessor, *Hymni* (PG 91.1417–1424): verified Greek + Latin base, plate-read (Opus, 2026-11-15)

**Scope: transcription only. Do NOT translate. Do NOT correct, normalise or "improve" anything.** Output = the Greek verse and Combefis's/Daniel's facing Latin verse as printed, line for line,
verified against the plate. (The English register for verse is a separate, unmade decision.) Repo root `~/patrologia`. Read `CLAUDE.md` hard rules 1–2 and "Band letters in PG" first.

## What is on the pages
`S. MAXIMI CONFESSORIS HYMNI` (Daniel, *Thesaur. hymnolog.* III, 97 seqq.) starts at the FOOT of col. 1417 (pdf p. 771) and ends in col. 1424 (pdf p. 774, upper half; the *Thalassius*
Notitia below it is NOT ours). **Three hymns:** I «Ὕμνος εὐχαριστήριος καὶ ἱκετήριος πρὸς Θεόν» (Latin *Hymnus gratiarum actionis et supplicationum ad Deum*); II «Ὕμνος ἱκετήριος εἰς Χριστόν …»
(*Hymnus supplicationis ad Christum per modum laudationis*); III «Ὕμνος ἱκετήριος εἰς τὴν ἁγίαν Τριάδα» (*Supplex hymnus in sanctam Trinitatem*). The verse is in SHORT lines, Greek and a line-for-line Latin
rendering side by side; each pdf page holds TWO printed columns, each column a Greek block and a Latin block: p. 771 foot = cols 1417 + 1418; p. 772 = 1419 + 1420; p. 773 = 1421 + 1422; p. 774 = 1423 + 1424.
Within a page the left half is the lower-numbered column; the Greek is on the right of its block on some pages, on the left on others — read the plate. A Latin line too long for the measure breaks onto a
bracketed overflow (e.g. `Olim me beatum efficie- | [bat`): rejoin it into ONE Latin line (`Olim me beatum efficiebat`), keeping what Migne prints. Reading order = col. 1417, 1418, 1419 … 1424.
Margin letters A B C D (the band letters) sit beside each column: record them, do not leave them in the text.

## Images
`raw/kraken/maximus-hymni/pages/p-0771.png` … `p-0774.png` (600 dpi, ≈3975 × 6337). Crop with PIL, ONE block at a time (a Greek block is ≈800 px wide), write what you read, move on.
Kraken's rough Greek (base to check, NOT to trust: band letters glued on, a first line lost in col. 1422, footnote/Notitia junk at the foot of 1423/1424, p. 771 foot garbled): `raw/kraken/maximus-hymni/cols/NNNN.kraken.txt`
(`y<TAB>text`; cols 1419–1424) and `raw/kraken/maximus-hymni/text/p-077N.txt`. Archive.org Latin OCR (a witness only): `raw/pg091/091_djvu.xml`.

## Deliverables (write progressively; header first)
`translate/maximus-hymni/base/NNNN.greek.txt` and `NNNN.latin.txt` for NNNN = 1417 … 1424: one printed verse line per file line, NO line numbers inside the text; hymn headings and Daniel's citation line as
their own lines prefixed `#H ` (Greek or Latin heading) or `#C ` (citation). A hymn boundary (`#H` line) appears where the heading is printed, even mid-column. Plus `translate/maximus-hymni/base/BANDS.tsv`
(`col<TAB>line_no_in_greek_file<TAB>letter`), `translate/maximus-hymni/base/DOUBTS.tsv` (`col<TAB>side(G|L)<TAB>line<TAB>printed/reading<TAB>why`), and `translate/maximus-hymni/base/REPORT.md`.
Every line: read at the plate. Where a reading is doubtful or damaged, write your best reading and list it in DOUBTS (never silently). Migne's misprints stay as printed (list evident ones in DOUBTS with `MIGNE?`).
Check: for each column the Greek and Latin line counts should correspond one for one (Latin overflow rejoined); where they do not, say why in REPORT.md. Count lines per column per hymn.
REPORT.md must list: every crop you opened, line counts per column (G and L), hymn boundaries (col + line), anything you could not read. Do not stop early; edit nothing outside `translate/maximus-hymni/`.
