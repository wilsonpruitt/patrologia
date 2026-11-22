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
- ✅ Image check (one Opus reader, ≈0.14M; it cut its own 600 dpi crops for every undecided slot, so no pass 2): **33 rows: R 17 · P 4 · M 8 · ? 4** (the 4 ? = breathings
  the 1-bit scan cannot show, incl. **p0710.39 αὐτὸν/αὑτὸν: undecidable; English keeps αὑτὸν with T note 7**). M: p0710.26 δίχα φόβον (φόβου) · p0710.30 ἐπίγνῶναι ·
  p0711.17 θείος · p0711.25 ταυτὴν · **p0713.04 ἃ μὴ (sense ἢ μὴ)** · p0713.20 ἀντιτείνεν · p0713.21 πρόσαξιν · p0713.50 τῆς δωρεᾶς τῆς (plate τῆς; ταύτης = conjecture).
  **p0712.20: the plate has NO «ἢ διὰ τοῦ Υἱοῦ»** (Latin *aut per Filium* is the Latin's own) → P. kt-apply: 14 applied, 1 applied~, **2 NOT FOUND** (p0712.27 κ λὸν→καλὸν,
  p0713.28 «ἠ̔̀ (τε»→«ἥ τε») → GREEK-PATCHES at build.
- English (coordinator; pre-fix copy in the session scratchpad): n21 + n30 now say what the plate prints; NEW T note on ἃ μὴ → ἢ μὴ (now 31 notes).

## Step 5 — build (Sonnet) next; then blind read (Opus).

## ✅ Step 5 DONE 2026-11-21: LOCAL site build (Sonnet; nothing deployed, pushed or committed)
`scripts/th-tables.py` (adapted from `ps-tables.py`; run after `MP_STRICT=1 MP_WORK=maximus-theopemptus MP_DJVU=raw/pg090/090_djvu.xml MP_CMAP=data/pg-column-maps/pg090.json MP_BYCLASS=1 MP_RANGES=710-713 python3 scripts/mp-bands.py`) writes `verify/GREEK-{DROPS,BREAKS,BANDS}.tsv` and appends OCR-table patches. `CHUNKS.tsv` written (th-001 p-0710:1–p-0713:56). `CONF['maximus-theopemptus']` added to `kt-to-site.py` (the ONLY change there: the other kt works were not rebuilt).
**GREEK-PATCHES 16 rows:** 3 coordinator rows (the 2 kt-apply NOT FOUND words, both cross-line: p0712.27 `τὸ κ` → `τὸ κα-` (κα-|λὸν); p0713.28 `ἠ̔̀` → `ἥ` and p0713.29 `(τε` → `τε` (the «(» is a gutter mark)) + 13 from the OCR tables (2 heading ΜΑΞΙΜΟΥ/ΘΕΟΠΕΜΠΤΟΝ; 4 glued band letters τούτοιςΑ, ΒΚριτὴν, συνε-Α, ἁτῇ; 6 space rows incl. ἀπ᾿ ἀρχῆς; the stray ʃ after προτερήματα, i.e. Migne's asterisk call, stripped from the Greek). **Drops 1** (p0710.05, the Latin title «ΜΑΧΙΜΙ ΜΟΝΑΣΗΙ»). **Breaks 11:** 3 title (p0710.1, .2, .3 = Of Maximus / title / italic question line) + 8 para (710.6, 711.12 judge, 711.32 widow, 711.38 adversary, 711.47 bruisings, 712.13 "Thus then", 712.51 cheek, 713.22 Touch me not; hard-coded). English "Toward these" starts mid-line (p0710.16): left to the aligner.
**Bands 15** (A–D per page; 0 glued letters stripped by mp-bands, the 4 glued ones go by patch). ⚠ mp-bands DEFAULTED on p-0710 and p-0713 (no usable gutter letters; p0710 got wrong letters B3/C6/D21): both pages' letters were READ off the plate and hard-coded as `BAND_SET` in th-tables.py (p0710: A line 6, B 21, C 35, no D; p0713: A line 1, B 16, C 28, D 43). p-0711, p-0712 are mp-bands fits, unchanged.
**PRINT-ERRORS 8 rows** (the 8 M rows; listed on the cruces page, not applied). `data/plate-reads.json`: entry for the work (pp. 710, 711, 713, depth `read`, corners_checked false). `[sic:]` 0, `[?]` 0.
**Apparatus** (`notes/place.py`, copy of Ps 59's, docstring adjusted): 7 notes → `APPARATUS.json`: 0 Greek-keyed `[n:]`; 3 unplaced to the cruces page (Luc. vi, 29; **Joan. xx, 27 as printed** (no S note matches xx, 27, so it stands on the cruces page, not "fixed"); and the **asterisk note «Locus obscurus, ac forte mendosus.» with `en` "An obscure passage, and perhaps corrupt." labelled "working translation"** — place.py places only NUMBERED Greek-keyed notes, so the asterisk note went to the cruces page, keyed to προτερήματα; T note 7 already reports it in the English); 4 locators mirrored to S notes (Luc. xviii, 6; Gen. iii, 24; Luc. xviii, 7; Matth. vii, 18). Two mechanical edits to `notes/result-1.jsonl`: the p-0712 «vindictam» note was labelled `column: greek` though its anchor line is Latin (it would have been placed as an `[n:]` on a word that is not in the Greek) → `latin`; the asterisk note's `en` reworded to the brief's. Cruces 29 lines + 3 apparatus rows + 8 print-error rows. Editor never named (`editor=''`).
**Registry:** `data/pg-works.json` entry `maximus-confessor-ad-theopemptum` after Ps 59 (slug `ad-theopemptum`, "PG 90, 1393–1400", translationStatus `unclear` + note on Psarommatis 2019 unconfirmed, no `englishState`) → weak badge "New English translation"; `data/work-about.json` DRAFT; DRAFT RECENT line (`pg/90/ad-theopemptum`) at the top of `build-landing.mjs`.
**Chain:** th-tables → kt-to-site (1 chunk, 29 cruces) → mark-sentences on the Greek (11 paragraphs, 25 sentences; `src/pg-latin` has no frontmatter so mark-sentences cannot run on it, as for the other kt works) → `WIDE_PARA=1` align-sentences **100.0%** (11/11 sentence-level, 0 fall back; 1 ragged group = the opening paragraph 1:2) → answers pair answer-to-answer → verify-english-pg OK → plate-gate OK (0 markers, 3 reads) → build-work-page-pg (`site/pg/90/ad-theopemptum/`, 4 column blocks, cols 1393, 1396, 1397, 1400) → index-work-pg (4 columns, 4 scripture, 0 fontes) → `build-site.mjs` → build-lookup-grc → **preflight 9 of 10** (only "NOT POLARITY-CHECKED: maximus-confessor-ad-theopemptum"); scan-raw-markers clean. `data/volumes.json` date restored.
**Built page read:** no leaked Latin title, no running heads, no raw brackets, no stray ʃ, no `(none)`, title block and the three answers pair 1:1; no italic run crosses an anchor in the English (no mechanical English fix needed; `th-001.en.md` untouched). ⚠ The shared "Maximus the Confessor" author bio (reused as briefed) names an editor (about the Letters), so it appears on this page too, as on Ps 59.
⬜ Next: blind polarity read (Opus), then Wilson: read the DRAFT about/RECENT → deploy (own OK) → push (own OK).
