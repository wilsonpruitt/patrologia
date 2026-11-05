# Pratum spirituale translation run (kt method; Opus, Wilson's go 2026-11-04) — ✅ ALL 31 CHUNKS TRANSLATED (≈2.1M)

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
| mp-000_002 | mp-000 (dedication) – mp-002 | done (218K; ded. + ch. 1–32) |
| mp-003_005 | mp-003–005 | done (208K; ch. 33–50) |
| mp-006_008 | mp-006–008 | done (188K; ch. 51–76) |
| mp-009_011 | mp-009–011 | done (ch. 77–96) |
| mp-012_014 | mp-012–014 | done (ch. 97–115) |
| mp-015_017 | mp-015–017 | done (ch. 116–142) |
| mp-018_020 | mp-018–020 | done (ch. 143–163) |
| mp-021_023 | mp-021–023 | done (ch. 164–184) |
| mp-024_026 | mp-024–026 | done (ch. 184 cont.–194) |
| mp-027_028 | mp-027–028 | done (ch. 195–201) |
| mp-029_030 | mp-029–030 | done (ch. 202–219, doxology) |

After all: glossary-clash sweep, image-check the flagged rows (`scripts/kt-crop.py`, needs generalising off its
hard-coded Dorotheus path), Migne's foot-of-page apparatus (Latin notes on many pages + the NOTÆ at pp. 171–172),
Latin twin, card-shape English → site chunks (`kt-to-site.py`), polarity read, ship.
⚑ Open at chunking: chunk boundaries were placed by text, not read at the plate; the first page of each chunk is
seen by its translator against the Latin. Pp. 39 and 171–173 carry no Moschus Greek (preface, notes, Sophronius).

## Sweeps owed after the run (briefs ran in parallel)
- **Chapter numbering.** Translators number by sequence where no head is readable; reconcile every brief's numbers
  against the Latin CAPUT list (djvu, 214 heads with page positions) before the site build. mp-006–008: 51–53, 57,
  60–63, 68, 74–76 rest on counting; 74 ("Νουθετῶν δὲ ἡμᾶς") as its own chapter is the decision to check first.
- **Glossary clashes:** mp-006 πάθος (bodily) → "ailment"; κῦρις → "lord"; ἔγκλειστος → "recluse".
- Image check notes from mp-006–008: glued Σ = band C (p0071.31, 0073.29, 0074.30, 0077.26); p0068.46 καυκαλίου =
  leaked footnote (stray); p0073.19 possible lost line (Latin has a reply); p0070.08 τεσσάρων vs Lat. quadraginta.
- **Ch. 1–50 numbering** (mp-000–005): no head for 6, 8, 10, 13, 15, 17, 19, 21–23, 25, 27, 29, 35, 36, 41, 49; the
  mp-000–002 agent read Kraken's numerals as dropping a final i (xv→XVI, xvii→XVIII, xχvi→XXVIII). Star story folded into
  ch. 6, coals story into ch. 27. Reconcile against the full-page djvu CAPUT list (the scaffold's Latin witness is
  region-filtered and misses most heads).
- **p0062, one Greek line DROPPED by the text build** (Kraken read it; the line sat inside a footnote box): restore
  `Ἐν Θεσσαλονίκῃ ἦν τις ἀρχιεπίσκοπος τῷ ὀνόματι` before p0063.01 `Θαλέλαιος.` (ch. 43, mp-005, where the agent left
  `[?]`). The Latin witness lost its twin line too (`Fuit quidam Thessalonicae archiepiscopus, Thale-`). Whole-work
  check (xml vs text/, scratchpad lost.py/dropped.py): this is the only lost body line on pages with a note heading;
  p106's "two heads at the foot" are ch. CXXI–CXXII printed in LATIN ONLY (corrected 2026-11-04 by the mp-015 translator; I first misread the head as CXXVI), not a loss. ⚑ Latin-only chapters: decide at
  assembly how they appear (Dorotheus precedent: Doctrina XXIV, Latin-only, not translated).
- mp-000–005 report Greek/Latin disagreements on names and numbers (Εὐτύχιος/Eustochius p0043.43, Κύριλλος/Cyriacus
  p0052.03, years 69/63, 35/30): kept the Greek with T notes. Image-check these.
- mp-009–011 (ch. 77–96): counted only 78, 82, 83, 94, 95; Latin title without numeral 87, 89. Image-check:
  p0086.46–47 dots = lost text; p0088.04 ὄρους Σινᾶ vs Lat. "supra Rosum" (Rhossus?); p0088.07 possible lost line;
  George (Gr.) vs Gregorius (Lat.) ch. 91–94; number clashes (ship 3½ myriads/30,000; blessings 5/13; hour 9th/6th).
- mp-012–014 (ch. 97–115): 101–105 fill five slots between CAPUT C and CVI by count (one story each; an alternative
  split would leave a Latin-only number); 107, 108, 113, 114 counted. Name clashes Gr./Lat.: Παῦλος/Pardus (ch. 99),
  Theodulus/Theodorus (104–106), Ianthus/Antonius (99); number clashes 500/50 (102), 22/25 days. p0100.47 lacuna `καί.....`.
- mp-015–017 (ch. 116–142): **LATIN-ONLY: 121, 122, 132** (and the rest of 120 after τεθνηκότας); no text, T note at
  each break. Counted: 116–118, 123, 124, 128, 131, 133, 136, 138, 139, 140 (mangled), 141, 142. ⚑ Glossary clash:
  ἀκηδία → "listlessness" here vs Dorotheus "acedia" (house): sweep. Vocative Ἰωάννῃ ×3 logged `ocr`: check plate.
- mp-018–020 (ch. 143–163): counted 144–146, 156–158, 161; **weak spot 151–154** (five story units in four numbers;
  Marcellus ×2 + Psalms sayings taken as one ch. 152). p0118.33–36 possible lost line (Κωνσταντι- breaks off);
  p0120.12–13 gap, no main verb.
- mp-027–028 (ch. 195–201): counted 198–200 (alt.: Athanasius answer inside 197 ⇒ a missing number before 201).
  p0153.11–12 likely dropped line (pope's name, Leontius's office); δηνάρια/κεντηνάρια p0153.51; Latin extras not in
  our Greek ("ex oppido Thorax"; "Deditque mihi filiam suam et pecunias", ch. 201); Γεώργιος vs Lat. Gregorius again.
- mp-021–023 (ch. 164–184): counted 165–168, 170–173, 178, 179, 182–184; 171/172 split most open. ἀκηδία →
  "accidie" here (third rendering: sweep to house "acedia"). p0138.27 Γεώργιος vs Lat. Gregorius again.

- mp-024–026 (ch. 184–194): counted 185–189, 191, 192 (count lands exactly on printed CXC, CXCIII, CXCIV). Possible
  dittography p0143.10–15; p0149.50–51 lacuna (Chrysostom); Eustathius/Eustachius; 50/55 years.

- mp-029–030 (ch. 202–219): counted CCIII, CCVII, CCIX, CCX, CCXII–CCXIV, CCXVI–CCXVIII; run fills exactly to CCXIX.
  p0169.28 διδάσκαλον → διάκονον (whole-word: OCR or Migne? image-check); bare "(" glued to words = lost note-calls.

## ⛔ DROPPED GREEK LINES — the text build lost chapter openings at page feet (found 2026-11-04)
Kraken READ these lines (they are in `raw/kraken/moschus-pratum/xml/`), but its footnote box overlapped them and the
build of `text/` kept only lines inside the Greek-column boxes. Whole-work search: every Greek xml line missing from
`text/`, shortlisted by body line-pitch (≥84 px), every doubtful one read on the page image. **Confirmed, and the
only ones:**
| page | insert | chapter / chunk | recovered Greek (Kraken, unchecked) |
|---|---|---|---|
| p-0062 | after line 49 (head) | ch. 43, mp-005 | Ἐν Θεσσαλονίκῃ ἦν τις ἀρχιεπίσκοπος τῷ ὀνόματι |
| p-0130 | at the foot, after the ch. 166 head | ch. 166, mp-021 | Ἔλεγεν ὁ ἀββᾶς Σαββάτιος· Ὡς ἐκαθήμην εἰς τὴν / λαύραν τοῦ ἀββᾶ Φιρμίνου, ἦλθέν τις ληστὴς πρὸς |
| p-0141 | at the foot | ch. 184, mp-023 | Ἔλεγεν ὁ ἀββᾶς Θεόδωρος ὁ Κίλιξ, ὅτι Καθημένου (→ p0142.01 `[μ]ου ἐν τῇ Σκήτει`) |
The translators of mp-005 and mp-021 filled these from the Latin and marked them; mp-023's ch. 184 opens mid-phrase.
**Fix at the image check:** insert the lines into `ruled/` (read each on the plate first) and re-English those
three openings from the Greek. Rejected after reading the image: p53 5572, p120 5624, p133 5430, p162 5386 (all NOTÆ).
⚑ **For every later Kraken work (Sophronius, Procopius):** run the xml-vs-text check BEFORE chunking
(scratchpad scripts lost.py + pitch.py, to be promoted to `scripts/`).

## ✅ Steps 1–3 done 2026-11-04 (in session)
1. **Dropped openings restored** (ch. 43, 166, 184→183): lines read on the plate, appended to `text/`, recorded in
   `RESTORED-LINES.tsv`, `ruled/` regenerated; English redone from the Greek, notes + OCR rows (`kind` = restored).
2. **Chapter numbers reconciled** against the full-page djvu CAPUT heads: 166 of 172 legible numerals match an English
   chapter of the same number within ±2 pages; the other 6 = the 3 Latin-only + 3 Latin-OCR garbles (XI=XLV p64,
   CLI=CLIX p128, CCI=CCVI p163). One real error, fixed: p141 carries Migne's CLXXXII (y≈2640, Xeropotamus) and CLXXXIII
   (foot, Theodore the Cilician), so the headless saying at p0141.19–23 rejoins ch. 181 and mp-023's 183/184 became
   182/183 (the duplicate 184 is gone; Ennaton = 184 by its Greek head p0142.29). Result: 216 chapters + 121, 122, 132
   Latin-only = 219. Within-page chapter BOUNDARIES are the translators' (Latin titles); only numbers were checked.
3. **Glossary sweep:** ἀκηδία → acedia (mp-016, 017, 021); ποίησον ἀγάπην → "Do me a kindness" (mp-015, 017, 020, 026,
   030); ναύκληρος → shipmaster (mp-022); προσκομιδή → oblation, εὐλογίαι → blessings (mp-001); διακονητής → server
   (mp-017). Kept on purpose, each with a note: καλόγηρε "good old man" to laymen (mp-011, 026); κῦρι "sir" (mp-026 register).
   ⚑ Left for Wilson's eye, not swept: "lord abba" (16) vs "my lord abba" (5) for κῦρι ἀββᾶ; παρρησία "familiarity" (mp-025).

## ✅ Step 4 done 2026-11-04 (in session): image check of every flagged row
All **1,018** OCR-table rows of kind ocr/doubt/print/subscript read on the page images, in two passes:
`scripts/kt-sheet.py` (contact sheets: the row's line found by its Greek letters, crop centred on the word; `--redo`
= second pass, whole line ± one line, for the rows the tight crops missed) → `scripts/kt-verdict.py` (one code per
row) → `IMAGE-CHECK.tsv`. Verdicts: **R 650** (plate shows the corrected reading) · **M 210** (Migne prints the faulty
form himself) · **P 144** (the plate has what Kraken read; the translator's emendation is not the text) · **? 14**.
`scripts/kt-apply.py` then built **`raw/kraken/moschus-pratum/checked/`** = `ruled/` + every R row (the plate's own form
wins where it differs from the translator's: 45 `plate=` rows), 44 of them across a line break with the hyphen put
back; the 13 it could not place are line-exact rows in `verify/GREEK-PATCHES.tsv` (15 patches, all apply).
Records: `verify/APPLIED.tsv` (every R row and how it landed), `verify/PRINT-ERRORS.tsv` (the 210 M rows: the
[sic:] layer for kt-to-site; the English already follows the correction, per the card).
⚑ **What the check found about the translators' labels:** of 920 rows labelled `ocr`, 203 are Migne's own misprints
(the PILOT.md finding again, measured on a whole work: about 1 in 5). Unchecked, those 203 would have emended Migne.
⚑ **P rows:** 52 differ in letters; 47 are `doubt` rows already marked [?] in the English (now known to be Migne's
text, which the cruces page should say); 4 `ocr` rows don't change the sense; 1 (p0167.34 εἴ τι) relabelled in
mp-030 as a conjecture against the plate.
⬜ **14 undecided** (left as `ruled/` reads them; decide at the plate or let them stand):
  - mp-001 p0049.36 `κὰ` → `κα-` (pass2: line end reads καὶ ν-/νόνα; needs reading)
  - mp-003 p0057.41 `ἁγία»` → `ἁγίᾳ` (pass2: wrong line matched)
  - mp-003 p0057.40 `ὑτῷ` → `αὐτῷ` (pass2: word not in view)
  - mp-003 p0057.41 `προῆλθεν` → `προσῆλθεν` (pass2: wrong line matched)
  - mp-004 p0060.12 `πράξης` → `πράξῃς` (pass2: subscript unclear)
  - mp-005 p0067.35 `ἰσταμένου` → `ἱσταμένου` (pass2: breathing unclear)
  - mp-011 p0089.14 `Κοπρουθᾶʃ.` → `Κοπρουθᾶ.` (pass2: wrong line matched)
  - mp-011 p0089.01 `ωσι` → `νῶσι (καταπονῶσι)` (pass2: damaged on plate)
  - mp-012 p0094.02 `Ὡ` → `Ὡς` (pass2: wrong line matched)
  - mp-014 p0102.41 `Ὥασιν` → `Ὤασιν` (pass2: breathing unclear)
  - mp-018 p0119.16 `εύρέθη` → `εὑρέθη` (pass2: wrong line)
  - mp-019 p0123.03–04 `κουσσοὺτ / λιν` → `κουκούλ- / λιν (?)` (pass2: next line not in view)
  - mp-023 p0140.39 `εἴμσεν` → `εἴασεν` (pass2: wrong line)
  - mp-029 p0164.22 `καὶ (line end) θέντες` → `κατα-θέντες` (pass2: wrong line)
⚠ `raw/` is gitignored: `text/` (with the 3 restored lines, `RESTORED-LINES.tsv`), `ruled/` and `checked/` are rebuilt
by `kt-rules.py` then `kt-apply.py`; never re-OCR text/ without re-adding the restored lines.

## ✅ Step 5 done 2026-11-04 (in session, Sonnet): Migne's foot-of-page apparatus read off every page, pp. 39–173
`scripts/mp-note-crops.py` cut a thumbnail + note-block tiles per page (`notes/img/`, gitignored, rebuildable; manifest
`notes/manifest.json`); 6 Sonnet briefs `notes/task-{1..6}.md` (3 at a time, ≈1.57M tokens in all, ~10–25 min each) →
`notes/result-{1..6}.jsonl`: **337 notes** (numbered 193 under VARIÆ LECTIONES, lettered 95, NOTÆ endnotes 49 at pp. 170–172
keyed by lemma, not mark) + `none` lines; all 135 pages covered; 60 markers illegible (kept `marker: null`, never completed
from the sequence); 8 notes with no anchor; 2 with `text: null`. Lettered series runs a–z (no j, w) and wraps once (z at p115).
Re-check of the weakest stretch, pp. 54–58 (brief 1 said p-0054 was retyped from memory): independent re-read →
`notes/verify-54-58.{jsonl,md}`, 34 rows compared, 6 text corrections + 4 markers downgraded to illegible (candidate number
agrees), **overlay these when placing**. Thumbnails of p-0113/114/117/135/136/137 viewed in session: the `none` calls hold.
⚑ Bracketed numerals in the Latin ((5), (6), (7), (8), (25), (26), (33), (34), (46)...) with no foot note are Migne's inline
citations, not apparatus: NOT recorded; decide at placement. ⚑ Brief 5 and 4 saw degraded image reads early; spot-checked.
⬜ Not yet done: `place.py` (Moschus version of the Dorotheus script: Greek numbered → `[n:]` in the Greek, lettered →
Latin/English, NOTÆ → cruces), then (6) Latin twin + `kt-to-site.py` generalised + build + polarity read + ship (each a Wilson go).

## ✅ Placement script built 2026-11-04: `notes/place.py` → `notes/APPARATUS.json`
Same shape as Dorotheus's (`greek[cids]` = [page, word, text]; + `greekLines` sidecar of anchor lines; `unplaced[]` with
`chunks`). `verify-54-58.jsonl` REPLACES result-1's rows for pp. 54–58. 339 notes after 2 exact duplicates dropped: **188
numbered Greek notes to place** (181 anchor words confirmed on the page in `checked/`; 7 not found, orthography —
p43 ἀπενέγκωμεν, p47 παλίον, p59 Χαλκηδόνι, p73 εἶπεν, p95 λέγοντες, p108 οἰκονομοῦντες, p169 τούτου — fall to the cruces list
if kt-to-site's fuzzy match also misses) · **151 unplaced** (95 lettered scholia, 49 NOTÆ, 7 numbered) → cruces page. Pages
39 and 171–173 are in no chunk (preface, NOTÆ, Sophronius): their notes are cruces-only.

## ✅ Greek chapter breaks located 2026-11-04: `scripts/mp-greek-breaks.py` → `verify/GREEK-BREAKS.tsv`
The checked Greek has NO chapter heads (Migne's CAPUT heads are Latin, centred; Kraken read each as a garbled Greek-column line,
`ΣΑΡΥΤ ΣLxχv.`, and the italic title is a separate Title region). Computed, not read: djvu CAPUT heads (same 3971×6300
frame) × Kraken line y (text/ lines matched to xml TextLines by first 10 letters, the 4% unmatched interpolated).
**200 breaks** (of 216 chapters; 203 heads found by the djvu OCR); column `line` = first real Greek line of the chapter;
column `drop` = Kraken's garbled read of the head, to DELETE from the Greek (96; also drop any short Greek-less line matching
`ΡΥΤ`). Spot-checked: p-0080 LXXVIII → Ὁ δὲ ἀββᾶς Ἰωάννης…, p-0128 CLX, p-0113 CXXXIV all land on the right line. Latin-only
CXXI/CXXII (p-0106) leave a garble line still in the text: strip by pattern.

## ✅ Site build DONE 2026-11-04 (local; nothing pushed or deployed): 31 chunks, preflight 9 of 10
`python3 scripts/kt-to-site.py moschus-pratum` (generalised: CONF + `mp` prefix, `GREEK-BREAKS.tsv` paragraph per chapter, `GREEK-BANDS.tsv`
`[b: X]` + glued-letter strips, `GREEK-DROPS.tsv` Latin furniture deleted, APPARATUS feed placing each Greek `[n:]` ONCE at its own line,
notes masked so none nests; first chunk keeps its opening anchor) → `mark-sentences` → **`WIDE_PARA=1`** `align-sentences moschus-pratum-spirituale --write`
(Greek is paragraphed by chapter, English by story: 87.8% sentence-level; the switch is off by default so shipped works cannot change) →
`verify-english-pg` OK (ratio now counts running text only, apparatus stripped; all 10 other PG works still pass) → `plate-gate` OK (0 markers) →
`build-work-page-pg` (131 column blocks) → `build-site` → `build-lookup-grc.py` → `preflight`: **9 of 10 pass; the 10th is the blind polarity read.**
Registry `data/pg-works.json` (key `moschus-pratum-spirituale`, slug `pratum-spirituale`, weak "New" badge: Wortley exists, not researched);
`data/work-about.json` + `data/author-bios.json` + the RECENT line in `build-landing.mjs` are **DRAFTS for Wilson to read before any deploy.**
Fixes made on the way: kt-apply no longer writes a plate-read band letter into a word (`[b:` was reaching the page, p46.18, p82.1) nor `,,`; mp-024.en.md
got its missing `[3057]` anchor (before "(for the farmer did not have it)").
Numbers: 176 of 188 Greek variants placed in the Greek (12 + the 7 unlocated listed in the cruces, keyed to their word); bands 494 (216 evidenced by a
read letter, the rest inferred from the regular spacing: `how` column says which); 206 chapter breaks.
⬜ Not done: **`[sic:]` layer** (210 rows in `verify/PRINT-ERRORS.tsv`; Dorotheus did this with `verify/SIC-MAP.json`; needs a note↔row map, plate-read already, gate is ready) ·
**blind polarity read** (preflight's last gate: ≈1.5–2M, Wilson's go + model; brief per runbook 4a, record with `polarity-record.mjs`) · read the draft public text ·
deploy (Wilson's OK) · push (Wilson's OK) · `englishState: "ours"` only when shipped.
