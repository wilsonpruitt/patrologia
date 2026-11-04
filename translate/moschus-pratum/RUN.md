# Pratum spirituale translation run (kt method; SET UP 2026-11-04, NOT STARTED: needs Wilson's go)

Source: rule-passed Kraken Greek (`raw/kraken/moschus-pratum/ruled/`, `scripts/kt-rules.py`; 1,003 changes in
`ruled/CHANGES.tsv`), facing Latin = archive.org OCR of the same scan (`raw/scans/pg087c/copyA_087c_djvu.xml`).
Card `CARD.md`, `GLOSSARY.md`. Column map `data/pg-column-maps/pg087c.json` (linear, plate-anchored at pp. 39, 40,
41, 172, 173; Greek side alternates on all 132 Greek pages). Chunks `CHUNKS.tsv`: 31 chunks, 50,764 Greek words,
p-0040:2 (dedication) – p-0170:21 (`…τῶν αἰώνων. Ἀμήν.`), every cut at a chapter opening. Chapter heads are Latin
`CAPUT N.` inside the Greek column, mangled by Kraken; the card takes numbers from the Latin witness (214 CAPUT heads,
I–CCXIX).
Three agents at a time (CLAUDE.md rule 5). On resume: a brief is done when every `<id>.en.md` of it exists.

| brief | chunks | status |
|---|---|---|
| mp-000_002 | mp-000 (dedication) – mp-002 | ⬜ |
| mp-003_005 | mp-003–005 | ⬜ |
| mp-006_008 | mp-006–008 | ⬜ |
| mp-009_011 | mp-009–011 | ⬜ |
| mp-012_014 | mp-012–014 | ⬜ |
| mp-015_017 | mp-015–017 | ⬜ |
| mp-018_020 | mp-018–020 | ⬜ |
| mp-021_023 | mp-021–023 | ⬜ |
| mp-024_026 | mp-024–026 | ⬜ |
| mp-027_028 | mp-027–028 | ⬜ |
| mp-029_030 | mp-029–030 | ⬜ |

After all: glossary-clash sweep, image-check the flagged rows (`scripts/kt-crop.py`, needs generalising off its
hard-coded Dorotheus path), Migne's foot-of-page apparatus (Latin notes on many pages + the NOTÆ at pp. 171–172),
Latin twin, card-shape English → site chunks (`kt-to-site.py`), polarity read, ship.
⚑ Open at chunking: chunk boundaries were placed by text, not read at the plate; the first page of each chunk is
seen by its translator against the Latin. Pp. 39 and 171–173 carry no Moschus Greek (preface, notes, Sophronius).
