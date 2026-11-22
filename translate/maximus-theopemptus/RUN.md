# RUN — Maximus the Confessor, *Ad Theopemptum scholasticum* (PG 90.1393–1400), queue #6

Opened 2026-11-21 (Opus coordinator), after Ps 59 (Wilson: "Keep going"). Work dir / Kraken key `maximus-theopemptus`. CPG 7696. English:
none found (web check 2026-11-21: a 2019 blog excerpt of a FORTHCOMING translation by Andrew Psarommatis, publication unconfirmed) →
badge stays the weak "New" unless a none-status is established (do not hunt: rule 8). Translation step waits on Wilson's go with the burn stated.

## Setup 2026-11-21
- **Column map** `data/pg-column-maps/pg090.json` extended: in this stretch **col = 2×page − 27** (corners read p699 = 1371/1372, p704 = 1381/1382,
  p709 = 1391/1392, p710 = 1393/1394 title, p713 = 1399/1400, p714 = 1401/1402 *Capita alia*); Greek LEFT on even pages here.
- **Pages** 710–713. Title at p0710:1 («ΜΑΕΙΜΟΥ ΜΟΝΑΧΟΥ / ΠΡΟΣ ΟΕΟΠΕΜΠΤΟΝ ΣΧΟΛΑΣΤΙΚΟΝ», the italic question line, the Latin title «ΜΑΧΙΜΙ ΜΟΝΑΣΗΙ» leaked).
  **⚠ Kraken dropped the work's LAST LINE** (p713 foot, «νος περίληψιν.»; short line, kt-lost did not flag it): read on the plate by the coordinator
  and appended by hand as **p0713.56** in text/ ruled/ checked/. p714 was OCR'd by mistake (no Theopemptus text on it) → moved to `extra/`.
- **Kraken** 4 pages → kt-rules 71 changes (incl. p714) · kt-lost: 2 "body" lines = running heads · witness myriobiblos `theopemptos.html`
  (whole work, 1,512 words): 3 blocks 91–98% → **16 rows**.
- **One chunk** th-001 p0710:1–p0713:56. Card from the Ps 59 card (letter conventions from the Epistulae: *thou* to the single addressee,
  δέσποτα master, σχολαστικός scholasticus); glossary = Ps 59's. Brief `_briefs/th-001_001.md`.

## Step 4 (run early, in parallel) — apparatus (one Sonnet reader) DONE 2026-11-21 → `notes/result-1.jsonl`
`mp-note-crops.py` (p-0714 moved out of `regions.json` into `extra/regions-p0714.json` first) → 4 pages, 14 tiles. **7 notes**: p-0710 4 numbered Latin
locators (Luc. xviii, 6 · Luc. vi, 29 · **Joan. xx, 27 as printed** (Noli me tangere = John 20:17: likely Migne's misprint, plate-check at build) ·
Gen. iii, 24) + **1 asterisk note in the GREEK after προτερήματα: «Locus obscurus, ac forte mendosus.»** (the editor flags a corrupt place: check the
English there); p-0712 2 numbered locators, markers illegible (Luc. xviii, 7 · Matth. vii, 18); p-0711, p-0713 none. 0 orphans.

## ✅ Step 1 DONE 2026-11-21 (one Opus agent, ≈0.14M): th-001 1,501 Greek → ≈2,003 English, 30 notes (S 18, T 11, P 1), 47 OCR rows (28 ocr, 7 stray, 7 space, 3 doubt, 2 heading)
Anchors [1393] [1396] [1397] [1400]; answers begin p0711.12 (judge), p0712.51 (cheek), p0713.22 (Touch me not). Plural of respect (ὑμέτερον, ἐκελεύσατε) → *you*, T-noted; singular *thou*.
Least sure: p0710.38–41 αὑτὸν (Latin *te*) + the comparison — **the editor's asterisk note sits exactly here** («Locus obscurus, ac forte mendosus»; the OCR's «ʃ» after προτερήματα is the call):
coordinator added it to T note 7; p0712.18–20 Latin adds *aut per Filium* (a phrase lost?); p0713.49–50 ἐκείνῳ / «τῆς δωρεᾶς τῆς ἐπιτύχοιμεν» (second τῆς left out of the English). Polarity: p0712.9 οὐ μὴ ποιήσῃ kept a question (Migne's ;), Latin a statement.
Structure checked: notes 30/30 in order, no editor named, no `[?]`. Sweep skipped (one translator).

## Step 3 — image check (one Opus reader) LAUNCHED 2026-11-21
`kt-sheet.py maximus-theopemptus` → 33 rows, 2 sheets (30 word, 3 line).
