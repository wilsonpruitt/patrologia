# SPEC: Latin-only chunks in a PG work page (Sophronius Or. I, III, VI = so-019, so-020, so-021)

Written 2026-11-05 (design only; nothing below is implemented). For a Sonnet session: every decision is made here.
Where a decision is Wilson's to overturn it is marked ⚑. Grounded in: `scripts/kt-to-site.py`, `kt-apply.py`,
`kt-sheet-latin.py`, `build-work-page-pg.mjs`, `align-sentences.mjs`, `mark-sentences.mjs`, `lib/segment.mjs`,
`verify-english-pg.mjs`, `plate-gate.mjs`, `preflight.mjs`, `index-work-pg.mjs`, `build-landing.mjs`, `site/resolve/`,
`lib/morpheus.py`, `lib/word-lookup.js`, `notes/place.py`, `notes/APPARATUS.json`, and the so-019–021 files.

## 0. Work shape (decided here, because the Latin design depends on it)
- **The three Latin-only chunks go in the SAME registry work as the Greek orations, in column order.** Reason: the
  resolver (`site/resolve/index.html`) matches a citation by each work's `colFirst..colLast`, and `build-landing.mjs`
  derives that range as min..max of the page's anchor ids. A separate Latin work (3201–3322) would overlap a Greek
  Orationes range, so a citation to pure Or. II col 3250 would offer both works. One work keeps one contiguous range.
- **One key for all 21 chunks** (Procopius precedent: one key, three pieces; one `CONF` entry in kt-to-site):
  `sophronius-hierosolymitanus-orationes`, slug `orationes`, title "Epistola synodica et Orationes", titleEn
  "The Synodical Letter and the Orations", vol 87, citRange "PG 87.3, 3147–3364", greekSource `ours-kraken-ocr`,
  `translationStatus: "exists"` (Allen 2009, Synodica; weak "New" badge), no `englishState` until shipped.
  ⚑ Title/slug/about/bio are DRAFTS for Wilson, as for every kt work. Splitting the Synodica (3147–3200) into its own
  key would also be contiguous and changes only `CONF` (add a chunk filter); nothing else below changes.
- **Site chunk order = column order**, not file order: 0001–0006 so-001–006 · **0007 so-019** · 0008–0013 so-007–012 ·
  **0014 so-020** · 0015 so-013 · **0016 so-021** · 0017–0021 so-014–018.
- **Source tree stays `src/greek/<key>/`** (every PG script keys on it). Latin chunks carry `language: "la"` in the
  frontmatter and `"language": "la"` in their manifest entry; Greek chunks `grc`. `src/pg-latin/<key>/0007.md` etc. get a
  one-line stub: `<!-- No twin: Migne prints this oration in Latin only; the Latin IS the source (src/greek/<key>/0007.md). -->`.
  The twin rule (`pg-paired-pilot.md`, "no twin, no translation") is N/A: there is no Greek to verify.

## 1. Producing the Latin source text
New script **`scripts/kt-apply-latin.py <work> [--dry]`** (Latin analogue of kt-apply.py; do not edit kt-apply.py).
Input order of lines = `so-0NN.md` tag order (per page: column L lines, then column R). `so-0NN.lines.tsv` matches the
scaffold 1:1 (624 / 734 / 368 lines, checked) and supplies x1/x2 per line.
Writes `raw/kraken/<work>/latin-checked/so-0NN.tsv` (`tag \t text`, dropped lines omitted, heads substituted),
`translate/<work>/verify/LATIN-APPLIED.tsv` (every applied row: tag, from, to, status, source) and
`verify/PRINT-ERRORS-LATIN.tsv` (the 21 M rows). Distinct names: `verify/APPLIED.tsv` / `PRINT-ERRORS.tsv` are the Greek's.

**Locating a row.** Tags are unreliable: the so-019/020 tables used v1 numbering and so-021's does too (e.g. its
`p0272.L.01 Hicrosolymorum` is v2 line 02). Measured on the 949 rows: printed form on the tag line 485, one line below
~337, two below ~25, not found verbatim ~20 (the translator wrote a hyphen-broken word joined: `Redempior` for
`Re-/dempior`, `integritàtem`/`integritatem`). Rule: same page and column, try offsets 0, +1, −1, +2, −2, +3, −3 for an
exact substring; then kt-apply.py's `across()` join (line i ending `-` joined to i+1, hyphen restored after the same
character count); then NFD-accent-stripped comparison. Multi-part forms: split `printed` and target on ` … `
(consecutive parts may be on the same or following lines) and on `/` (a line break). A target part `—` or empty = delete
that printed part. Anything still unlocated = status `NOT FOUND`, printed by the script; **the step passes only at 0
NOT FOUND** (fix by adding the row to LATIN-OVERRIDES with an exact tag).

**Rules, per row** (counts are the files' own: R 910 · M 21 · P 13 · ? 5 = 949, plus 79 unchecked table rows):
| row | Latin column prints | English |
|---|---|---|
| IMAGE-CHECK R (910) | the `plate=` form in `comment` if present (whole form up to ` (` or `;`), else `reading`, cleaned as kt-apply `clean()` (drop `[?]`, `?` hedges, trailing parenthetical glosses). Exception: `p0219.L.19 meroreque … cemi-` → `mœroreque … emi-` (plate= names only the 2nd part). Rows whose printed form is a note call (`(5)`→`(3)`, `(i7)`, `(10-14)`, `(15)`) are no-ops: calls are stripped below | unchanged (already follows) |
| OCR-table rows of kind `stray` (60), `space` (12), `heading` (7), from `so-0NN.en.md` `## OCR` (not image-checked: they remove note marks, fix spacing, renumber Or. III §§) | `reading`, same locating rule; a `stray` row whose printed form is the whole line (`p0273.L.56` footnote leak) drops the line. Parse cells on unescaped `\|` only | unchanged |
| M (21), P (13), ? (5) | **exactly as LATIN-OVERRIDES below** (the comments are free text; do not parse them) | §1 table |
| table rows of kind `ocr`/`doubt` absent from IMAGE-CHECK | none expected (the image check took every one); script asserts 0 | — |

**`translate/<work>/verify/LATIN-OVERRIDES.tsv`** (create verbatim; `latin` = what the Latin column prints; M = Migne's
own misprint, kept; P = plate is Migne's text, kept; ? = undecided, the sense form printed, listed as undecided):
```
chunk	tag	printed	latin	verdict	sic_note
so-019	p0215.R.02	mortius	mortius	M
so-019	p0216.R.43	tanquám	tanquám	M
so-019	p0216.R.46	in-excelsis	in·excelsis	M
so-019	p0217.L.24	usque	usque	M
so-019	p0217.R.05	ineffense	ineffense	M
so-019	p0217.R.38	aaimo quæsixerimus	aoimo quæsiverimus	M
so-019	p0218.L.05	aliis	aliis	M	29
so-019	p0218.L.29	Agarenoium arcam	Agarenorum arcam	M
so-019	p0218.L.56	similis expertem	similis expertem	M	32
so-019	p0218.R.45	nateralisque Domini	nateralisque Domini	M	38
so-020	p0260.R.39	oppletus/illum	oppletus/illum	M
so-020	p0260.R.44	misit. lucem	misit. lucem	M
so-020	p0261.R.06	que p°perit, … illà	quæ pºperit, … illà	M
so-020	p0263.L.18	serum adventu.	serum adventu	M	40
so-020	p0263.L.23	relevavit … **, »	relevavit … »	M
so-020	p0264.L.18	preli	preli	M
so-020	p0264.R.03	praceptis in po-	præceptis in po-	M
so-020	p0264.R.04	Gabricie	Gabricie	M
so-020	p0264.R.41	eum alio	eum alio	M
so-020	p0265.R.34	uudique	uudique	M
so-021	p0274.R.29	qu	quæ	M
so-019	p0215.L.25	Noster	Noster	P
so-019	p0216.R.43	euchobruto	euchobruto	P
so-019	p0219.L.36	Adamo tantum	Adamo tantum	P
so-019	p0219.L.47	desiderabat?	desiderabat?	P
so-019	p0219.R.44	desideremus.	desideremus.	P
so-019	p0220.L.20	aque que	aquæ quæ	P
so-019	p0219.R.47	Betlileem duceret	Bethleem duceret	P
so-020	p0258.R.09	scientie Dei ?	scientiæ Dei ?	P
so-020	p0259.R.51	in alioque	in alioque	P
so-020	p0261.L.42	prasefert	præsefert	P
so-020	p0261.R.28	novilali	novitati	P
so-020	p0263.L.10	apparentes nos jam veteris	apparentes nos jam veteris	P
so-020	p0264.R.15	latarum Epilogus	latarum Epilogus	P
so-019	p0215.R.02	cidem	eidem	?
so-019	p0217.L.59	(rec enim	(nec enim	?
so-020	p0263.L.55	it. … “; »	in … ; »	?
so-020	p0264.R.51–52	solita-/vii	solita-/rii	?
so-021	p0275.R.34	n e	me	?
```
English for these rows: nothing changes except five translator notes (they go to the cruces, see §4), reworded from
"The scaffold's *X* is read *Y*" to "Migne prints *X* (plate, 2026-11-05); read *Y* …": so-019 [^29], [^32], [^38],
so-020 [^40]; and so-019 [^25] (*nec enim*) to say the first letter is damaged on the copyA plate and the negative is by
sense (§6 risk 1). P rows need no English change: 3c already brought the English to the plate or the existing T note
names the print (so-019 [^21], [^42]; so-020 [^11]); punctuation P rows are the editor's call, not ours.

**Furniture, then calls, then gutter letters** (applied after the rows above, in this order):
1. **Drop lines** (running heads and OCR garbage; found by a detector over all 1,726 lines: own column number, no
   lowercase, ≤6 chars, leading `[`/`|`; every hit read): `p0220.L.01` `p0220.R.01` `p0262.L.01` `p0262.R.01`
   `p0265.L.01` `p0265.R.01` `p0275.L.01` `p0275.R.01` (running heads) · `p0258.L.02` `p0258.R.03` (`[ed`) ·
   `p0264.R.16` (lone `B`) · `p0273.R.50` (`t`) · `p0262.R.38` (`*`). Keep `dator.`, `ciunt.`, `deus.`, `cite.` (word tails).
   Hard-code this list in the script (tags are v2, exact).
2. **Heads.** Title blocks that the djvu splits across the two columns or cuts at the y-limit are replaced by
   `verify/LATIN-HEADS.tsv` (`chunk`, `replaces` = comma-separated tags, `text`, one row per printed head line), which the
   coordinator writes by reading the page images `raw/kraken/sophronius-orationes/pages/p-0215.png`, `p-0258.png`,
   `p-0272.png` (corner numbers first; record the reads, §5). Scope: so-019 `p0215.L.01–03`; so-020 `p0258.L.01`,
   `p0258.R.01–02` (title *… sive occursu Domini* + source line *Ex ms. Græco Mediceo … Bollandist. Act. Sanct., Februar.
   t. I, p. 274.*); so-021 `p0272.L.01–06`. Heads keep Migne's note calls as `(1)` etc. for step 4 to find.
3. **Note calls stripped** from body text: parenthesised `\(\d+(?:[-·]\d+)?\)` and any mark the stray rows left; but
   first record each call's position (tag + preceding word) for §4.
4. **Gutter band letters become `[b: X]`** (CLAUDE.md band ruling of 2026-08-06: capture the band at chunking, URLs
   stay column-level; the builder's `qualifyBands` turns it into an empty `id="cNNNNx"` span, and `index-work-pg`
   records it from the source). Detect: column R, first token `^[A-D]$` when the line's x1 is > 40 px left of that
   column's median x1; column L, a final lone `[A-D]` token (55 found: 21/27/7, incl. `p0259.L.01 …ut ne, A`). The token
   leaves the line and `[b: X]` is set at the start of that line. Migne's one gutter letter is often read into BOTH
   columns' lines (`p0215.L.01 …in A` / `p0215.R.01 A potest`): emit it in each, since it bands both columns. Sanity:
   within a column the letters must run A→D in order; a letter out of order (e.g. `p0215.L.16 D` at y 2745, about a
   quarter down: probably B) is NOT emitted and is listed in `verify/LATIN-BANDS-DOUBT.tsv` for a plate read, never guessed.

**Residue scan** (new `scripts/kt-latin-residue.py <work>`, run with `~/.venvs/collatinus/bin/python`): every token of
latin-checked/ that pycollatinus `Lemmatiseur().lemmatise()` cannot analyse (as `build-lookup.py` calls it), plus any
character outside letters/æœÆŒ/`.,;:?!«»()'’-`/digits → `verify/LATIN-RESIDUE.tsv` (`tag`, `token`, `status` blank).
Coordinator fills `status`: `ok` (Migne's real form, a Greek word, a name, a kept M/P form) or adds an override row
(plate-read the line first if the fix is not certain). This is computation before vision: only the residue is read.

## 2. Page layout and the minimal changes, by file and function
Layout: one page, rows in column order. A Latin row is `<div class="coltext latin" lang="la">` facing English; a Greek
row is unchanged. `.coltext.latin` and `[lang="la"] { locl 0 }` already exist globally in `site/styles.css` (lines 295,
537): **no CSS change**. Click-a-word stays Greek-only: `word-lookup.js` binds `.coltext.greek` when `lang: 'grc'`, so
Latin rows are inert (accepted for v1; a Latin lookup would need `build-lookup.py` to read these chunks).
**Shared columns** 3288 (so-012 Greek end / so-020 start), 3301 (so-020 / so-013), 3316 (so-013 / so-021), 3321 (so-021 /
so-014) appear as anchors twice, and in true plate reading order (… 3288 | 3287, 3288 …). Allowed: verify compares per
chunk; the first occurrence owns the HTML id, so `#c3288` lands on the column's head (Or. II).

- **`scripts/kt-to-site.py`**
  - `CONF['sophronius-orationes'] = dict(key='sophronius-hierosolymitanus-orationes', vol=87, cmap='data/pg-column-maps/pg087c.json', xml='raw/scans/pg087c/copyA_087c_djvu.xml', prefix='so')`.
  - chunk loader: a scaffold with `pages:` and no `range:` is Latin: `(fp, 0, lp, 999)`, `LANG[cid]='la'` (first and last
    page from the `pages:` header). Then **sort chunks by `(fp, fl)`**. Greek works: order unchanged (file order = page order).
  - new `latin_source(ci)`: read `latin-checked/<cid>.tsv`; emit `[col]` (`### column NNNN` of that page/side, i.e. map
    `colLeft`/`colRight`) before each column's first kept line; insert `APP['latin']` notes (§4) on their lines; paragraph
    breaks (below); then join with the SAME hyphen/anchor-moving loop `greek()` uses (factor that loop out of `greek()`
    into `join(items)`; Greek output must stay byte-identical).
    Paragraphs: break before a line whose x1 exceeds the column median x1 by > 35 px when the previous kept line ends in
    `[.?!:»]`; before any line after a kept line that is > 250 px short of the median x2 and ends in `[.?!:»]`; around each
    head; a `Cap. [IVX]+.` head runs to the line before the next `^\d+\. ` line and is its own paragraph; before
    `p0220.R.42` (Mai's in-column note *In codice Græco…*, its own paragraph like the English `*[Editor's note in Migne:]*`).
    Measured: the indent rule alone gives 11/20/8 breaks vs 19/29/15 English paragraphs; align pairs paragraphs anyway.
  - `frontmatter()`: `language: "la"` and `latinSource: "ours-djvu-ocr-image-checked"` (instead of `greekSource`) for la.
  - mid-page strip (`if fl > 1 and ci > 0`): also require `LANG[prev] == LANG[cur]` (no-op today: every Greek chunk after a
    Latin one starts at line 1; it guards the rule).
  - `english()`: turn `### X` lines into plain `X` (so-020 has 5 `### Chapter` heads; no builder renders `###`).
  - manifest: `language` on every chunk entry. Twin: stub for la (§0). SIC: read `verify/SIC-MAP.json` as now (§4).
  - cruces.md: two new sections when `IMAGE-CHECK-LATIN-*.tsv` exist (§4).
- **`scripts/build-work-page-pg.mjs`**: split `manifest.chunks` into maximal runs of one `language`; for each run do
  exactly today's pipeline (`joined` → `qualifyBands` → `sentenceRows` → row/word/anchor checks), with terminals
  `LAT_TERM = /[.!?][)\]»]*\s+(?=(?:⟦q[^⟧]*⟧ ?)*(?:[A-ZÆŒ«]|\[\d{4}\]))/g` for la runs; render each run's passages with its
  class/lang. In `paras()`, emit `id="cNNNN"` and band ids only on first occurrence (one Set across the page). Meta line,
  only when a la chunk exists: replace "Greek from the Migne printing" with "Greek from the Migne printing; Orations I, III
  and VI survive in Migne only in Latin, which faces the English there". An all-grc work is one run, so shipped PG pages
  must rebuild byte-identical (§7 step 7). `writeWorkSiblings` / jsonLd: unchanged (sourceLang `grc`; v1).
- **`scripts/mark-sentences.mjs`**: per chunk, `greek = GREEK && !/^language: "la"/m.test(fm)` (Latin breaks on `.?!`
  only, ABBR has `cap`, single capitals do not break). Do not touch `lib/segment.mjs` (shared with shipped works).
- **`scripts/align-sentences.mjs`**: per chunk `la = /^language: "la"/m.test(lat.fm)`; `qmarksSrc` uses `/\?/` for la
  (`;` is not a question mark in Latin); compute the length constant `C` separately for la and grc chunks and pass the
  chunk's own `C` to `align()`. `WIDE_PARA` stays off.
- **`scripts/index-work-pg.mjs`**: for a la chunk walk the SOURCE file for `[n:]`/`[nt:]` (as PL's index-work walks the
  Latin) instead of the English (else the matched Scripture locators would count twice and the unmatched ones never);
  `colIncipits` keeps the first occurrence of a column.
- **No change**: `verify-english-pg.mjs`, `plate-gate.mjs`, `preflight.mjs`, `build-site.mjs`, `build-lookup-grc.py`
  (`lib/morpheus.py` TOK is Greek-script only, so Latin chunks add no forms), `build-landing.mjs`, `site/resolve/`
  (both PG columns of a Latin page are anchors, so the pair-partner fallback is never needed), `build-cruces.mjs`.

## 3. Sentence alignment, Latin↔English
`mark-sentences` stamps `⟦pN⟧/⟦sN⟧` into the Latin (Latin segmentation); `align-sentences --write` aligns. Paragraph counts
differ (plate indents vs translators' paragraphs), so the existing paragraph-pairing pass runs (Gale–Church beads 1:1…3:1,
penalty on differing anchors/notes), then sentence beads 1:1/1:2/2:1/2:2 inside each group; a doubtful bead collapses with
its neighbours (IS_PG path) or the paragraph falls back to one merged marker. EN/LA length ratio here is ~1.33 by words
(019 1.33, 020 1.34, 021 1.33), steadier than Greek, so a per-language `C` is what keeps z-scores honest. Known soft
spots: the so-020 source line (`Edid.`, `Bollandist.`, `Act.` all break) and the P-row punctuation (`desiderabat?`)
fall back to paragraph level, which is safe by design. Report: `data/sentence-align/<key>.tsv`.

## 4. Migne's Latin-column apparatus in a Latin-only chunk vs the cruces page
`notes/place.py` gains a Latin pass (keep its Greek pass as is). For each `unplaced[]` record with `column: "latin"` on a
page of so-019/020/021 (101 records: 30 so-019, 52 so-020, 6 so-021, 13 on the shared pages 258/265/275):
- **Locate** against `latin-checked/` (corrected text, not the raw OCR: on raw OCR 18 anchors miss for spelling alone):
  the kept line of that page, either column, with the largest token overlap with `anchorLine` (≥ 2) that contains the
  anchor. Anchor = the word just before the call in `anchorLine` when it shows the call (`Sophronii (1) archiepiscopi` →
  *Sophronii*; the reader's `anchorWord` there is *archiepiscopi*), else `anchorWord`. Or. III's two colliding number
  series on pp. 259–264 separate by this test, not by marker.
- **Place in the Latin** at the recorded call position: `[n: text]` for a locator (`en` is null: Scripture, *Ibid.*),
  `[nt: text]` for prose (Hardouin, Mai, Ballerini, Bollandist notes; `en` non-null). Writes `APP['latin'][cid] =
  [[tag, anchor, text, kind]]`. The builder renders both; `index-work-pg` parses `[n:]` and parks `[nt:]` as prose.
- **Mirror Scripture into the English** with Dorotheus's matcher (`translate/dorotheus-doctrinae/notes/place.py`:
  `migne_refs`, `s_refs`, `BOOK`, `EN`, ±2 verses, Psalms ±1 chapter for Vulgate numbering, *Ibid.* via `LAST`) against the
  chunk's translator S notes (28/38/22): a match writes `APP['english'][cid][S-no] = text`, which kt-to-site's existing
  `english()` turns into `[n: text]` (translator note kept in cruces if > 30 chars). Unmatched locators stay Latin-only.
- **Cruces only**: records that do not locate. Known: p-0258 n. 42 (Or. II's Latin, above so-020's cut), p-0265 (1)
  (Or. IV's title), p-0275 πατρῴων (a Greek-column note of Or. VII), and p-0220's *unmarked* Mai note, which is already
  printed IN the column (p0220.R.42–44) and must be dropped, not listed. Expect ≥ 95 of 101 placed; the script prints the rest.
- **New cruces.md sections** (kt-to-site): "Migne's notes to the Latin-only orations, in English" (each placed `[nt:]`:
  column, Latin anchor, the reader's `en`, labelled "working translation of Migne's note"); "Readings checked at the
  plate: Orations I, III, VI": "Migne prints these orations in Latin only. Every reading the translators flagged (949)
  was looked up on the page image (2026-11-05): 910 were slips in our transcription of the scan and are corrected without
  comment; the table lists the other 39: 21 where Migne's type is itself wrong (the Latin column prints it as he did; the
  English follows the corrected reading), 13 where the plate prints the form the translator doubted (Migne's text, kept),
  5 not settled at the plate." + the 39 rows from LATIN-OVERRIDES.
- **[sic:]**: only where a translator note marks the misprint (the Dorotheus rule): add to `verify/SIC-MAP.json`
  `{"so-019": {"29": "aliis", "32": "similis", "38": "nateralisque"}, "so-020": {"40": "serum"}}` (merge with any Greek
  entries). The other 17 M rows are visible as printed in the Latin column and listed in the cruces table.
- Ballerini's Monitum (p-0221/222) and Mai's p-0298 notes are in no chunk: cruces only (unchanged).

## 5. Checks
| check | status |
|---|---|
| `verify-english-pg.mjs` | applies unchanged: frontmatter identical, anchor sequence per chunk, ratio 1.33 inside [1.1, 2.0], dedupe, marker parity |
| `plate-gate.mjs <key>` | applies unchanged; the 4 `[sic:]` stand on cols 3207, 3208, 3297: add a `data/plate-reads.json` work entry with reads for pdf pages 218 (3207–3208) and 263 (3297–3298), `depth: "read"`, `corners_checked: true` (the coordinator opens each full page and checks the corner numbers; tile crops are not reads). Record the head reads (215, 258, 272) too |
| `preflight.mjs` | applies unchanged; owed for the whole work: blind polarity read (the Latin chunks included: readers compare English against `src/greek/<key>/0007/0014/0016.md`), `build-lookup-grc.py` rerun (Latin adds nothing), index freshness via `build-site.mjs` |
| `kt-lost.py`, `kt-rules.py`, `kt-apply.py`, GREEK-BREAKS/BANDS/DROPS, Pattern 16 `[lat:]`, twin | N/A (Kraken/Greek only; no parallel column) |
| new | `kt-apply-latin.py` 0 NOT FOUND; residue scan 0 blank statuses; place.py Latin pass prints placed/unplaced |

## 6. Risks and unknowns
1. **p0217.L.59 *(rec/nec enim*: the letter is damaged on copyA and the English's negative rests on it.** `data/volumes.json`
   lists other PG 87 copies (087-1/2/3), none on disk. Ships with the reworded T note; a second-witness read is a separate
   go (download + one crop).
2. Tag offsets are worse than RUN.md says (so-021 too); the text locator absorbs them, `NOT FOUND` must reach 0.
3. The 79 stray/space/heading rows were never image-checked (mark removal, spacing, § numbers): low risk, but the residue
   scan is the only net under them and under OCR slips no translator logged.
4. Paragraphing is a geometry heuristic; a wrong break costs only alignment confidence, never words.
5. Duplicate anchors on 4 shared columns: a reader sees 3288 twice. Correct to the plate, but new on the site.
6. The prose notes' English (`en`) is the Sonnet note-reader's, unreviewed: cruces only, labelled.
7. This spec rides on the Greek build of the same work (step 5 of RUN.md: Greek SIC-MAP, Greek cruces table, section
   paragraphing for so-001–018 are NOT specified here). kt-to-site runs all 21 chunks together; the Greek chunks need only
   their existing inputs (`checked/`, `verify/GREEK-PATCHES.tsv`) to build, so this work is not blocked by them.

## 7. Implementation order (verify each before the next)
1. Registry draft + `CONF` entry. `node -e "const r=require('./data/pg-works.json');console.log(r.works.find(w=>w.key==='sophronius-hierosolymitanus-orationes').slug)"` → `orationes`.
2. Plate reads of p-0215/0258/0272 heads + p-0218/0263; write `LATIN-HEADS.tsv`, `LATIN-OVERRIDES.tsv`, plate-reads entry.
   `awk -F'\t' 'NR>1{c[$5]++}END{for(k in c)print k,c[k]}' translate/sophronius-orationes/verify/LATIN-OVERRIDES.tsv` → M 21, P 13, ? 5.
3. `python3 scripts/kt-apply-latin.py sophronius-orationes` → prints R 910 (applied/applied~/already), table 79, overrides 39,
   drops 13, bands emitted + doubts = 55, `NOT FOUND 0`. `grep -cE '\(\d+\)|[*“„]' raw/kraken/sophronius-orationes/latin-checked/*.tsv` → 0 each.
4. `~/.venvs/collatinus/bin/python scripts/kt-latin-residue.py sophronius-orationes`, clear every row; re-run step 3 if overrides
   were added. `awk -F'\t' 'NR>1 && $3==""' translate/sophronius-orationes/verify/LATIN-RESIDUE.tsv | wc -l` → 0.
5. T-note rewording (5 notes) + `SIC-MAP.json`; `python3 translate/sophronius-orationes/notes/place.py` → Latin pass placed ≥ 95,
   the unplaced list = the 4 known + any printed miss (read each). `python3 scripts/kt-to-site.py sophronius-orationes --dry`
   → 21 lines in the §0 order, 0007/0014/0016 starting 3201/3287/3315; then without `--dry`.
   `grep -l 'language: "la"' src/greek/sophronius-hierosolymitanus-orationes/*.md` → 0007, 0014, 0016.
6. `node scripts/mark-sentences.mjs sophronius-hierosolymitanus-orationes` → `node scripts/align-sentences.mjs sophronius-hierosolymitanus-orationes --write`
   (report % sentence-level per language) → `node scripts/verify-english-pg.mjs sophronius-hierosolymitanus-orationes` → `verify OK`.
7. Builder regression first: copy `site/pg/87/pratum-spirituale/index.html` and `site/pg/87/rhetorica/index.html` aside, rebuild
   both keys with the changed `build-work-page-pg.mjs`, `cmp` each → identical. Then `node scripts/build-work-page-pg.mjs sophronius-hierosolymitanus-orationes`;
   `grep -c 'coltext latin' site/pg/87/orationes/index.html` > 0; `grep -o 'id="c3288"' site/pg/87/orationes/index.html | wc -l` → 1.
8. `node scripts/plate-gate.mjs sophronius-hierosolymitanus-orationes` → exit 0. `node scripts/index-work-pg.mjs sophronius-hierosolymitanus-orationes`
   → scripture count includes the Latin locators. `node scripts/build-site.mjs sophronius-hierosolymitanus-orationes` →
   `python3 scripts/build-lookup-grc.py` → `node scripts/preflight.mjs`: all pass except polarity (owed; Wilson's go + model).
9. Stop. Deploy, push and `englishState: "ours"` each need Wilson's own OK; the draft about/bio/RECENT text is his to read.
