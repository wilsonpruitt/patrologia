# Doctrinae translation run (Opus, Wilson's go 2026-10-27)

Source: plate-checked Greek (`raw/kraken/dorotheus-doctrinae/checked/`), card `CARD-checked.md`, `GLOSSARY.md`.
Doctrina I (dd-001–003) was the pilot, translated from RAW Kraken with `CARD.md` (see PILOT.md).
Three agents at a time (CLAUDE.md rule 5). On resume: a brief is done when every `<id>.en.md` of it exists.

| brief | chunks | status |
|---|---|---|
| dd-000_005 | dd-000 (prologue), dd-004, dd-005 | done |
| dd-006_008 | dd-006–008 | done |
| dd-009_011 | dd-009–011 | done |
| dd-012_014 | dd-012–014 | done |
| dd-015_017 | dd-015–017 | done |
| dd-018_020 | dd-018–020 | done |
| dd-021_023 | dd-021–023 | done |
| dd-024_026 | dd-024–026 | done |
| dd-027_028 | dd-027–028 | done |

After all: image-check the flagged rows (`scripts/kt-crop.py`), then card-shape English → site chunks.

## Term clashes to sweep after the run (briefs ran in parallel)
- ἀκηδία: "acedia" (dd-005) vs ἀκηδεία "listlessness" (dd-008) → glossary says acedia; sweep dd-008.
- καταλαλεῖν: "speak ill of" (dd-009–011) vs "speak against" (dd-006–008) → glossary: speak ill of.
- διακονία: "service" (dd-009–011) vs "office" (dd-006–008) → glossary: service.
- θρασύτης: "boldness" (dd-012–014) clashes with παρρησία "boldness" → glossary: rashness; sweep dd-012–014.
- ⚑ dd-012 p0887.23 conjecture `καρδίαν Σαρακηνοῦ` is from the translator's MEMORY of a standard text: verify before it stands.
- μνησικακεῖν: "bear a grudge" (dd-015–017) → glossary: bear rancour; sweep.
- Image check: dd-017 p0918.01 band "A" printed as text, placed [b: A]; p0919.01 no band A tagged at the head of col 1745 (logged, no marker inserted). Check both at the plate.
- θρασύτης: also "insolence" (dd-018–020) → pick one at the sweep (glossary currently: rashness).
- dd-023: page files jump p0941 → p0948 = the re-scanned duplicate leaves (pg088.json), columns continuous; expected, not a gap.

✅ Sweep done 2026-10-27: acedia (dd-006), speak ill of (dd-001/003/006/007), service (dd-007/008), rancour (dd-015), insolence (dd-013); "boldness" left only where it is παρρησία; dd-015 "rashness" kept (the mean).
