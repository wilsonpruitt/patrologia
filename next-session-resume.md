# Next session — resume note

## 2026-07-20 — Set A (10 verified-none works, 2-chunk tier) translated + STAGED

**NOT deployed** (commit `3a28abd`, staged for Wilson's deploy session). Site was 48 englished; now **58 english pages built** (57 in works.json — the 58th is the PG Joel work, which lives outside PL-only works.json). Queue: 43 works still pre-chunked in `src/latin/`.

### The 10 new works — smallest-first across the verified-none frontier, all Opus (4 agents, ~475K subagent tokens)
7017 PL 17 *Philosophorum aliquot epistolae* (Seven Sages letters) · 8253 PL 87 *Analecta* · 8407 PL 90 *De computo* (ps.-Bede numeral dialogue) · 8505 PL 94 *Chronicon breve* · 8566 PL 96 *Tractatus* (descent-to-hell) · 8625 PL 98 *Appendix ad epistolas* · 9436 PL 134 *Testamentum* (Atto of Vercelli et al.) · 9519 PL 137 *Appendix ad transl. corporis S. Hunegundis* · 9604 PL 138 *De prandio monachorum* · 9852 PL 141 *De monasterio Fructuariensi*.
- **verify-english OK on all 10**; build + index run; **0 unparsed corpus-wide**. Roman numerals kept verbatim in *De computo* / *Chronicon breve* (the argument is about the notation); cruces logged per work (garbles rendered literally). Two high-ratio verify warnings (7017 1.61, 9519 1.72) eyeballed = genuine Latin-unpacking, not padding.
- **works.json**: 10 flipped `englishState` untranslated → ours (prior triage note kept as `priorTriageNote`) BEFORE running decade-check, so the untranslated-leak debt did not recur.
- **author-bios.json**: added Atto of Vercelli (verified dates c.885–961, bp. 924) + shared-key `Auctores varii` / `Auctor incertus (Beda?)` (latter carries an attributionFlag — the "Beda?" is Migne's conjecture).
- **`decade-check.mjs` (57 shipped): nothing blocking.** New genre screen held: excluded 9637 *Ordo ad regem benedicendum* (pure liturgical ordo → needs the Fable mini-pilot per runbook, do NOT send to Opus).
- **translation-style.md**: 11208 locator count corrected to the verified **167** (was ~207); sweep marked EXECUTED.

### → NEXT SESSION
1. **Resume smallest-first** — 43 works still pre-chunked in `src/latin/`. Next tier up = the 3-chunk works (10103 Peter Damian *De picturis*, 11031 Petrus diaconus *Epistolae*, 11436 *Vita S. Thomae Cant.*, 11648 *Annales*, 21425 Berno, 6912 *Addenda*, 7508 ps.-Aug. *Sermones*, 8195 *Norma vivendi*, 8715 ps.-Alcuin *Dubia alia*) then the 4+ Victorine/Damian works. Hard-stop ritual before each launch. Stage only.
2. **`9637 Ordo ad regem benedicendum` is a Fable mini-pilot, not an Opus batch** — first liturgical-ordo genre; extend translation-style.md before translating it or any other ordo/liturgical text.
3. Run `decade-check.mjs` at the next decade boundary (67 works).

---

## 2026-07-18/19 — 19 works translated + DEPLOYED; decade blocker built; Pattern 4 executed; citation layer overhauled

**LIVE on migne.app** (commits `df3ff68` → `e58de2f`, two prod deploys, all smoke-tested).
Site now: **48 englished works**, 21 authors, 25 englished PL volumes + 1 PG, queue 53 prepared works.

### The 19 new works (smallest-first across the whole verified-none frontier, not one campaign)
Avitus of Vienne *Sermo in rogationibus* · Hincmar ×2 (*Quae exsequi debeat episcopus*, *Instructio ad Ludovicum Balbum*) · Peter Damian ×3 (*De castitate*, *Passio SS. Florae et Lucillae*, *Vita S. Mauri*) · Lanfranc *De celanda confessione* · Alcuin *Vita S. Martini* · Rabanus *De passione Domini* · Agobard *De modo regiminis ecclesiastici* · Peter of Blois *De divisione* · Anselm of Laon *Epistola* · Odo of Cambrai *Homilia de villico iniquitatis* · Nicholas of Clairvaux *In festo S. Andreae* · ps.-Bernard *Flores seu sententiae* · + 4 anonymous (*De unitate sanctae Trinitatis*, *In parabolam de decem virginibus*, *De primordiis … Hierosolymorum*, *Exhortatio ad monachos*).
Bios added for all new authors. **Queue was deepened first**: 40 substantial verified-none prose works chunked (validator green 40/40), deliberately excluding verse/liturgical/tabular (those need a Fable mini-pilot per the runbook) and sub-1K-word scraps.

### Pattern 4 EXECUTED (the Fable checklist below is now DONE)
`[f: …]` harvesting in `index-work.mjs` (validates each tag as a verbatim substring of the Latin twin — **hard error**), wrapper stripped in `build-work-page.mjs` (`.fonscite`), Ibid. chains resolved. **11208 tagged: 167 locators** (not the estimated ~207 — the work has 171 sentence paragraphs, four sharing a citation; **the ~207 figure in `translation-style.md` is an over-estimate and should be corrected**). 1197B swallowed sentence fixed; full sweep found no other instance.
**Checklist item 4 confirmed empirically**: two agent sweeps examined 7871 / 11064 / 11066 / 11075 and pattern 4 applies to NONE — they are lemma-and-gloss commentaries, not florilegia. **Do not re-flag them.**

### Citation layer — this is the big change
- **`data/citation-corrections.json` is new.** Policy (Wilson, 2026-07-18): *the text and `refDisplay` keep what Migne prints; `refKey` resolves to the TRUE reference.* `refKeyPrinted` retains the bad key so every correction is auditable. **14 corrections** entered, each verified against the quoted Latin first — 5 in 10703/10727, 8 in 7020, 1 in 11066 (`III Cor. VI`, a book that does not exist). Corrections also rescue refs that do not parse at all.
- **Parser overhauled: unparsed 163 → 2.** Most were never alias gaps — they were CHAPTER-ONLY refs (`I Cor. XV`) failing a regex that demanded a verse. Now handles chapter-only, semicolon-compound (one note → several refs), multi-chapter lists, arabic chapters, ` et ` separators, `c.`/`v.` prefixes. Corpus scripture refs: **1,349**.
- **Anaphora (`Ibid.`/`Id.`) resolved on BOTH paths**, 78 corpus-wide. An Ibid. inherits its antecedent's BUCKET — scripture Ibid.s were previously stranded in `fontes[]`. Chained Ibid.s walk back to the nearest NON-Ibid. **No text is rewritten**; resolution lives in `antecedent`/`antecedentColumn`.
- **Citations inside `## ` heads are now indexed** (10 recovered across 5 works). `^## (.*)$` is greedy to end-of-line and was swallowing them — 11325 had lost Rom. X, 10, *the theme of the whole sermon*. Records carry `inHead: true`.

### `scripts/decade-check.mjs` — NEW, run after every 10 shipped works
Bonaventure / Christian-Library cadence. Collects mechanically because flags scroll past in agent reports. Blocking = data-layer debt (exits non-zero); advisory = decisions to batch. **First run found decade-1 debt worse than the per-set flags**: 45 shipped works still carried `englishState: untranslated` — the 2026-07-10 gotcha Wilson caught by eye, shown to be systemic, now cleared.

**Two of my own detectors were wrong and are documented in-code so nobody re-derives them:**
1. **Pattern-4 detector: 4/4 false positives.** Three bugs — italics were pattern-matched rather than PAIRED (a regex cannot tell an opening `*` from a closing one, so it returned the GAP between two italic runs, reading `CAP. II.` and `Num. 3.` as locator tails); frontmatter was not stripped (`heads[]` holds Latin titles); bare `c.`/`n.` matched inside `[n: ]` markers. Validated after fixing: 11208 = 110 runs, all four false positives = 0.
2. **Column-band gaps are NOT text loss — RESOLVED, do not reopen.** All 49 "3+ band" gaps were same-letter (D→D, C→C), zero changed letter; the Latin reads continuously across every junction (`Sacramentis ‖ baptismi`); band census shows 784 columns with all four marks and exactly 49 with only one — the same 49. **Migne's A–D marks are positional quarter-guides transcribed where they appear, not four per column**; arithmetic over them manufactures phantom gaps. The check now tests TEXT CONTINUITY (mid-word break = real dropped line, blocks). Corpus: 163 gaps, 0 mid-word breaks.

### → NEXT SESSION
1. **Resume the two-set rotation** — ~53 works pre-chunked in `src/latin/`, smallest-first, no setup needed. Hard-stop ritual before each launch. Stage only; Wilson deploys.
2. **Run `node scripts/decade-check.mjs` at the next decade** (57 works) before translating further.
   *(Read-through backlog: no longer tracked — Wilson, 2026-07-20. Publish-ahead-of-read-through stands; cruces stay logged per work, but the count is not a metric to surface.)*

### Open flags (none blocking)
- `translation-style.md` says 11208 has ~207 locators; the true count is **167**. Correct when convenient.
- **`(Genes. XXI; Galat. IV)` at 7020/71c deliberately NOT corrected** — placement-irregular rather than wrong; the compound ref plausibly describes the Ishmael/Isaac material following. Correcting it would be guesswork.
- 2 unparsed remain corpus-wide, both correctly classified: `(Id. VI, 24)` anaphoric-with-no-antecedent-shape, and one structural.
- **7020/0074D**: a Luke citation printed as a bare inline parenthesis *split by a column anchor* — invisible to a `[n:]`-only indexer. Only 1 such case corpus-wide, so no harvester was built; the decade blocker counts them, and the fix is the same shape as the `[f:]` harvest if it clusters.
- 11325 chunk 2 declares `colContext: 1055A` but `colFirst: 1056A`; the TEI itself lacks 1050A and 1055B–D. Upstream (Corpus Corporum), not our chunker.
- The reported "11325 noteCount 6 but body has 7" was a **false alarm** — the 7th was the frontmatter `heads[]` duplicate. Corpus-wide: 0 noteCount mismatches.

---

## 2026-07-18 — Florilegium citation policy DECIDED (Fable brief executed) — Opus execution owed

`~/patrologia/fable-brief-florilegium.md` executed. The convention is written; nothing was translated or re-indexed yet. **Deliverables landed:**
- **`translation-style.md` Pattern 4** — inline citation tails: locators stay verbatim Latin wrapped in a new `[f: …]` marker (English chunks only), editorial comments translated outside the tag, `Ibid.` tagged as printed and resolved by the indexer, segmentation guard (finite verb / >~8 words in a tail = split; catches the 1197B swallowed-sentence defect). Trigger is typographic (citations in running text, not `[n:]`), not the genre label. Pattern 2 vs 4 line: attribution *opening* an extract = prose (translate); citation *following* its unit = apparatus (Latin).
- **CLAUDE.md rule 9 amended** — fontes now come from both `[n:]` notes and `[f:]` tags; `inline: true`; *Ibid.* resolved at index time to `antecedent`+`antecedentColumn` (inference, not a correction — no citation-corrections entry); **no `fonsKey` minted yet** — inline locators join the accumulated-raws pool from which the controlled vocab is derived later, unchanged.
- **Ruling on the ~207 opaque Latin tails:** defensible interim — they are citations on the same footing as `[n:]` contents, and the third layer (hover/popover English expansion, generated from the index like the author-byline popover, never edited into HTML) is ratified as the *destination* but blocked on the fonsKey vocab derivation. Verbatim in text → resolved raw in index → expanded on demand in display.

**→ Opus execution checklist (one session, ~11208-sized):**
1. Tag both `src/english/11208/` chunks with `[f: …]` per Pattern 4; fix the 1197B defect (locator tag ends at *c. 3.*; *Hence habit is conquered by habit.* stays translated italic outside it); update the cruces.md "Editorial decision" section to point at Pattern 4 instead of calling itself reversible.
2. Extend `scripts/index-work.mjs`: harvest `[f:]` from English chunks (column-tracked like `[n:]`), validate each tag content as substring of the Latin twin (strip `*`, normalize whitespace; mismatch = exit 1), emit fontes records `{raw, column, chunk, inline: true}`, resolve *Ibid.* chains across chunk boundaries (`antecedent`, `antecedentColumn`; first-locator-is-Ibid. = error). Make renderers (`build-work-page.mjs`) strip the `[f: `/`]` wrapper; verify-english must treat `[f:]` as a sacred marker (count parity la-side n/a — English-only marker, so verify tags against Latin substring instead).
3. Re-run verify → build → `index-work.mjs 11208` — expect ~207 fontes (22 *Ibid.*-resolved), 0 unparsed regressions; rebuild page, confirm rendering unchanged except wrapper removal.
4. Sweep: no other shipped work has inline tails (Haimo 9076 / Vincent 7561 carry inline *scripture* in prose — NOT this pattern; do not tag those).

**Deliberately deferred (do not do speculatively):** `fonsKey` + English work-title vocabulary (derive from accumulated raws once several tail-citing works have shipped; Bernard's SBO numbering is the candidate external anchor at that point, verified not recalled); the popover display layer (blocked on that vocab); Latin-page popover attachment (index has column+raw — attachable later without re-editing chunks); locator-level printer's-error corrections (would go through `citation-corrections.json` at the fonsKey stage if ever needed).

**What would reopen the decision:** Wilson wanting English expansions in the page text itself (violates the verbatim rule — needs his explicit override); the vocab-derivation pass finding accumulated raws too thin to resolve (would force earlier external anchoring); the Latin site layer needing interactive citations before the vocab exists.

---

## 2026-07-17 (later) — Navbar restored + five new site pages built & DEPLOYED

Bug: work-page navbar links were all `href="#"` placeholders (dead in every browser) and the destination pages never existed. Fixed by building them and centralizing the nav.

- **`scripts/lib/chrome.mjs` = single source of truth** for nav/head/footer. `NAV_ITEMS` defined once; landing + both work-page builders now `import { nav }` — no more per-file nav drift (that duplication caused the bug). Nav is 5 links site-wide: Latina · Græca · Authors · The Queue · Migne.
- **Five new generated pages (each has its own `build-*.mjs`, run after shipping a work so they stay current):**
  - `/latina/` + `/graeca/` — `build-volume-indexes.mjs`: bare browsable indexes, PL 1–221 & PG 1–161 (+ ghost 162). PL labels = principal author by word-share from works.json; PG labels = `pg-tome-authors.json`. Englished volumes gilt-marked + work linked inline.
  - `/authors/` — `build-authors-index.mjs`: authors with a live English work (scans built pages → groups by author → bio from `author-bios.json`). 11 now.
  - `/queue/` — `build-queue.mjs`: works chunked in `src/latin/` but not yet Englished, smallest-first (48 now), + the verified-none frontier count (computed live from works.json, 1,387).
  - `/migne/` — `build-migne-essay.mjs`: renders `content/migne-biography.md` (tailored md renderer: frontmatter, #/## heads, *italic*, 64 `[^n]` footnotes; no lists/links/blockquotes in source).
- **Secondary-page CSS** appended to `sketch/styles.css` (regenerated into `site/styles.css` by any work-page rebuild). Added **Richard of Saint Victor** author bio (was missing — queue had shown raw Latin).
- **Rebuild order that works:** work pages first (regenerates `site/styles.css` from sketch + applies nav) → the 4 new-page scripts → `build-landing.mjs`. All 200 live; citation resolver unaffected.
- **DEPLOYED + pushed** (commits `78cd589` badge fix, `905a494` nav/pages; `cd site && npx vercel --prod`). Also this session: landing badge now reads **"New English translation"** (green) for re-translated classics vs. "First English translation" — keyed off `works.json` `workStatus` (pd-ingested/copyrighted → not a first); self-corrects for future classics.
- **Open polish (non-blocking):** the Queue lists not-yet-shipped Song-of-Songs authors by their Latin catalog name (Ambrosius Mediolanensis, Rabanus Maurus, Bruno Astensis, Gilbertus Foliot, Philippus de Harveng, Angelomus Luxovensis, Thomas Cisterciensis, Wolbero, Ps.-Cassiodorus). Per runbook, bios are added when a work ships — so this is by-convention, but Wilson may want them Anglicized now (a `build-queue.mjs` name-map or bio stubs). Landing thesis line still says "for the first time in English" (general banner; flagged, left as-is).

## 2026-07-17 — Vincent of Lérins *Commonitorium* translated + staged (FIRST deliberate untranslated-first departure)

**Doctrine broadened (Wilson, 2026-07-17):** the untranslated-first rule is no longer absolute. The goal is a *complete and accessible Migne* in the next year or two; as verified-untranslated works run dry, **foundational / poignant texts become worth translating afresh even where English already exists** — starting here. The *Commonitorium* is a source-text for the tradition's self-understanding, so it earns a fresh Wroot Press rendering. **When we translate an already-translated work: acknowledge the existing versions openly** (about-blurb names them; never pretend to a "first"). This is a real policy shift — fold into PLAN.md locked decisions when convenient; queue-building can now include high-value translated classics, not only `none`-status works.

**DONE this session (Opus, 3 agents, ~300K subagent tokens — STAGED, NOT DEPLOYED):**
- **Vincent of Lérins (`Vincentius Lirinensis`, authorIdno 1073), *Commonitoria*, textIdno 7561, PL 50 coll. 637C–686B, 12.6K words → 13 chunks.** Commonitorium Primum (I–XXVIII) + Recapitulatio (XXIX–XXXIII, the digest of the lost second book). Page: `site/pl/50/commonitoria/`.
- Pipeline clean: `chunk-work` (validator green, 55 marks), 3 Opus agents (0000–04 / 05–08 / 09–12), `verify-english` **OK**, `build-work-page` + `index-work` run. Index: 0 scripture / 0 fontes — **this printing carries scripture refs inline in the prose, not as `[n:]` notes** (only 1 note, Baluze's editorial line), same as Haimo 9076.
- `author-bios.json`: Vincent entry added (Peregrinus / Lérins / c.434). `work-about.json` 7561: blurb states the canon + **openly acknowledges Heurtley (NPNF) and Morris (FOTC)**. `works.json` 2575: `workStatus: pd-ingested`, `englishState: ours`, with a `note` recording the departure.
- **8 cruces** logged (`src/english/7561/cruces.md`) — printer's garbles rendered per intended reading + noted: `modio/medio` (0664), `conscripsi/conscripsit` (0663), `Scirdentem/Scindentem` (0666), `provincio lae/provinciae` (0645), dropped `non` (0648), `afirmari` (0650), `Apollmaris` (0655), `Xis tus/Xystus`=Sixtus III (0684). Also: Greek christological terms (*Theotocon*/*Christotocon*/*theotocos*) kept in italic Latin per the technical-term convention — **worth Wilson's eye at read-through** (confirm we want them transliterated-Latin, not "God-bearer"). Out-of-numeric-order column back-references in the Recapitulatio (0678 before 0677) preserved verbatim as Migne prints them.

**→ NEXT for this thread:** Wilson read-through of 7561 (esp. the *Theotocon* transliteration call), then it joins the next deploy batch. Deploy steps unchanged (runbook step 8: prepend to `RECENT` in `build-landing.mjs` — note this is a PL 50 work, first in vol 50 — rebuild landing, `cd site && npx vercel --prod`, smoke-test `/pl/50/637`). **band-less anchors** present (`0644` etc.) — resolver already handles them (7383 precedent), but smoke-test `/pl/50/637` after deploy.

---

*Updated 2026-07-10 (Victorine translation session, off-queue): **two Hugh-of-St-Victor-attributed Victorine works translated end-to-end (Opus), DEPLOYED and LIVE on migne.app.** Wilson has a personal stake in Victorine thought — ran a per-work triage (65 works across Hugh + Richard of St Victor) to find genuinely-untranslated pieces, translated the two largest, deployed, and pre-chunked the entire remaining Victorine queue (39 works) for a future session.*

## → NEXT SESSION (Victorine thread): translate the pre-chunked queue below — no setup needed, go straight to translating

**LIVE on migne.app as of 2026-07-10** (commits `622f262`, `7dc92ce`; landing RECENT updated + redeployed):
| idno | author | work | chunks | notes for read-through |
|---|---|---|---|---|
| 11064 | Hugo de S. Victore (attribution: Victorine school, not Hugh personally) | Expositio in Hierarchiam Coelestem S. Dionysii (PL 175.923–1154) | 80 | first-ever English of Hugh's commentary on Ps.-Dionysius's Celestial Hierarchy; ~30 cruces across the run (garbled type, editorial-variant brackets); one running-head wording drift caught and normalized post-hoc ("set forth above" / "whose text has been set out above" → unified to "the text of which has been set out above") |
| 11066 | Hugo de S. Victore (attribution: pseudo-Hugonian, later Victorine-school author) | Quaestiones in Epistolas Pauli (PL 175.431–634) | 61 | first-ever English of this Pauline question-commentary, full run Romans→Hebrews; house terms locked (QUESTION/Solution/Response/"It is asked"); **off-by-one caught**: chunker produced 61 chunks not 60, chunk 0060 was missed by initial batch planning and translated separately — verify-english now passes clean |

- Both works: `verify-english.mjs` passed clean, `build-work-page.mjs` + `index-work.mjs` run, landing RECENT updated, `site/index.html` rebuilt, deployed (`npx vercel --prod`), smoke-tested live.
- Read-through still owed on 11064 + 11066 (Wilson's gate; not blocking — already live per his standing "publish ahead of read-through" call from the 2026-07-05 session).
- **`data/works.json` translation triage is now SAVED and canonical**: Hugh's 34 works were already triaged in an earlier session (batch `33`, discovered mid-session — don't re-triage Hugh). Richard's 31 works were mostly untriaged and got filled in this session (batch `50`). Two entries flagged, not merged: workIdno 6490 (*De gradibus charitatis*) and 6493 (*De quatuor gradibus violentae charitatis*) look like possible duplicate cataloguing of the same text — worth Wilson's eye before trusting both as distinct.
- **Bug fixed in `scripts/index-work.mjs`**: `citeCol()` crashed on a null column (the very first head of a work, before any `[pb]` anchor, has `colContext: null`) — now returns `null` gracefully instead of throwing.
- **Deploy checklist locked into `translation-runbook.md` step 8**: landing RECENT update is now a mandatory pre-deploy step (was missed once this session, caught and fixed same-session).

### Victorine queue — 38 REMAINING WORKS ALREADY CHUNKED (`src/latin/<idno>/`, validated clean), smallest-first

No `chunk-work.mjs` step needed — every work below is ready for step 2 of the runbook (launch translation agents) straight away. `workStatus: "unclear"` rows have partial/uncertain existing coverage (blog excerpts, disputed scope) — treat as untranslated-first candidates same as "none" unless Wilson says otherwise. Total: 378 chunks, ~7.6M tokens at the ~20K/chunk rule of thumb — this is a multi-session campaign, not one run. **Hard-stop ritual applies before every launch** (state chunk count + burn estimate, ask "which model, and go?").

**Gotcha caught 2026-07-10:** 11062 (*Explanatio in Canticum B. Mariae*) was in the original 39-work list from the batch-33 triage ("none" status) but was actually already translated in the 2026-07-05 Song-of-Songs session and is live at `migne.app/pl/175/explanatio-in-canticum-b-mariae/` — Wilson caught it on the landing page. Removed from the table below; `data/works.json` workIdno 6022 updated to `workStatus: "ours"` so this can't recur. **Lesson: cross-check any triage-derived queue against the live site / `site/index.html` RECENT list before trusting "none" status — triage snapshots go stale the moment we ship a work ourselves and the field doesn't auto-update.**

| idno | author | work | chunks | words | status |
|---|---|---|---|---|---|
| 11056 | Hugh | Adnotatiuncula in librum Ruth | 1 | 39 | none |
| 11532 | Richard | De comparatione Christi ad florem et Mariae ad virgam | 1 | 336 | none |
| 11555 | Richard | Quomodo Spiritus Sanctus est amor Patris et Filii | 1 | 617 | none |
| 11079 | Hugh | De potestate et voluntate Dei | 1 | 843 | none |
| 11546 | Richard | De tribus appropriatis personis in Trinitate | 1 | 1,356 | unclear |
| 11554 | Richard | Quomodo Christus ponitur in signum populorum | 1 | 1,594 | none |
| 11548 | Richard | Epistolae et miscellanea | 2 | 1,710 | unclear |
| 11080 | Hugh | De quatuor voluntatibus in Christo | 2 | 1,888 | none |
| 11543 | Richard | De spiritu blasphemiae | 2 | 2,325 | none |
| 11086 | Hugh | Epistolae | 2 | 2,514 | none |
| 11545 | Richard | De superexcellenti baptismo Christi | 2 | 2,526 | unclear |
| 11075 | Hugh | De fructibus carnis et spiritus | 3 | 2,983 | none |
| 11089 | Hugh | Institutiones in Decalogum | 3 | 3,477 | none |
| 11539 | Richard | De judiciaria potestate in finali et universali judicio | 3 | 3,545 | none |
| 11059 | Hugh | Adnotatiunculae in librum Judicum | 3 | 3,670 | none |
| 11547 | Richard | Declarationes nonnullarum difficultatum Scripturae | 4 | 4,127 | none |
| 11078 | Hugh | De modo orandi | 5 | 4,158 | none |
| 11542 | Richard | De sacrificio David prophetae | 4 | 4,386 | none |
| 11083 | Hugh | De sapientia animae Christi | 4 | 4,654 | none |
| 11556 | Richard | Sermo de missione Spiritus Sancti | 5 | 5,468 | unclear |
| 11537 | Richard | De gemino paschate | 5 | 6,227 | none |
| 11531 | Richard | De Verbo incarnato | 8 | 6,509 | none |
| 11534 | Richard | De differentia sacrificii Abrahae a sacrificio B. Mariae Virginis | 5 | 6,529 | none |
| 11061 | Hugh | De scripturis et scriptoribus sacris | 6 | 6,922 | unclear |
| 11055 | Hugh | Adnotationes in libros Regum | 8 | 7,096 | none |
| 11549 | Richard | Explicatio aliquorum passuum difficilium Apostoli | 6 | 7,704 | none |
| 11085 | Hugh | De virginitate B. Mariae | 7 | 8,288 | none |
| 11081 | Hugh | De sacramentis legis naturalis et scriptae | 9 | 10,035 | none |
| 11063 | Hugh | Expositio in Abdiam | 11 | 13,346 | none |
| 11551 | Richard | Expositio de tabernaculo | 15 | 15,657 | unclear |
| 11536 | Richard | De exterminatione mali et promotione boni | 17 | 16,516 | unclear |
| 11088 | Hugh | Expositio in regulam S. Augustini | 16 | 17,882 | none |
| 11057 | Hugh | Adnotatiunculae in Joelem | 15 | 20,035 | none |
| 11553 | Richard | In visionem Ezechielis | 22 | 24,512 | none |
| 11058 | Hugh | Adnotatiunculae in Threnos | 19 | 26,345 | none |
| 11550 | Richard | Explicatio in Cantica canticorum | 48 | 50,151 | none (disputed authorship — some mss "Pseudo-Richard") |
| 11535 | Richard | De eruditione hominis interioris | 58 | 54,433 | unclear |
| 11065 | Hugh | Homiliae in Ecclesiasten | 53 | 61,691 | unclear |

Suggested approach for the next session: work smallest-first like the Song-of-Songs queue (fast wins, house-style conventions lock in early), or let Wilson pick specific titles that matter most to him. Author bios for both Hugh (`Hugo de S. Victore`) and Richard (`Richardus S. Victoris`) already exist in `data/author-bios.json` — no new bio work needed.

## → Prior thread: Wilson read-throughs (on live pages), or translate the next Song-of-Songs queue works

*Prior update, 2026-07-05 (translation + deploy session): **five-smallest Song-of-Songs works translated end-to-end (Opus, commit `43aee86`) AND DEPLOYED. 8 works now live on migne.app** (the 5 new + the 3 prior staged: Robert/Anselm/Haimo). Wilson deployed `cd ~/patrologia/site && npx vercel --prod`; all live smoke tests passed (band-less `/pl/40/1137` resolves, landing shows 10 englished). Read-throughs now happen ON THE LIVE SITE — Wilson chose to publish ahead of read-through.*

**LIVE on migne.app as of 2026-07-05** (10 englished works total, landing RECENT leads with Justus): the 5 new below + Robert (pl/150), Anselm (pl/162), Haimo (pl/117), Joel (pg/139), Abbo (pl/139).

**DONE this session — 5 works translated + staged (commit `43aee86`), 42 chunks / ~0.85M Opus tokens:**
| idno | author | work | chunks | notes for read-through |
|---|---|---|---|---|
| 7383 | Anonymous (ps.-Aug.) | Expositio cantici Magnificat (PL 40) | 2 | bare-column anchors `[1137]`; 2 cruces; "Anonymous" byline (no popover); work-about blurb written |
| 11062 | Hugh of St Victor | Explanatio in Canticum B. Mariae (PL 175) | 6 | 16 cruces; `[respicit Dominus]` left untranslated as a variant reading (agent's call — confirm) |
| 21413 | Alcuin | In Cantica canticorum (PL 100) | 10 | 10 cruces; **index warned EN 9 quotations vs LA 8** — one italic passage to eyeball |
| 11321 | William of St-Thierry | Commentatio ex Bernardo contexta (PL 184) | 12 | 3 cruces; chunker frontmatter `noteCount:17` on 0003 was stale (real 18, EN carries all 18) |
| 7871 | Justus of Urgell | Explicatio in Cantica canticorum (PL 67) | 12 | 15 cruces; earliest surviving Latin Song commentary — the marquee "first" of this batch |

- Pipeline ran clean per `translation-runbook.md`: verify-english / build-work-page / index-work all pass; marker fidelity script-verified every chunk; cruces in each `src/english/<id>/cruces.md`.
- **Assembly gotchas that recurred (fold into runbook if they keep happening):** (1) agents sometimes reorder a frontmatter field (`noteCount` after `incipit`) → verify fails "frontmatter differs"; fix = re-splice the Latin twin's frontmatter onto the EN body (safe, it must be verbatim anyway). (2) Migne inline page-numbers must be **italic** `*392*` (9741 anchor convention) — two agents emitted bare numbers, fixed by resuming them.
- **`author-bios.json` entries added** for all four named authors + a reusable `Auctor incertus → Anonymous` entry; `work-about.json` blurb for 7383.
- Wilson read-throughs still pending from before: Abbo cruces, Joel, Robert/Anselm/Haimo.

## → Post-deploy open items (NOT blocking; all 8 are already live)
1. **Read-throughs still owed** — now done on the live pages. Per-work flags: 7383 (2 cruces), 11062 (16 cruces; `[respicit Dominus]` left untranslated — confirm), 21413 (10 cruces; index warned EN 9 quotations vs LA 8 — eyeball one italic), 11321 (3 cruces; stale chunker `noteCount:17` on 0003), 7871 (15 cruces). Plus the older Robert/Anselm/Haimo + Abbo/Joel read-throughs.
2. ~~Landing RECENT + resolver band-less check~~ **DONE** (commit `801ac66`; landing rebuilt, resolver verified for `/pl/40/1137`).
3. **`Cantic. → Song` alias gap:** these Song commentaries throw many `unparsed` scripture citations because the alias table doesn't map `Cantic.` (11321 alone had 23). Tracked-not-dropped, non-blocking, but a worthwhile one-time alias add before the queue grows.
4. **u/v modern-letterform fix** — still deferred, now shipping live as-is (Wilson's call). Decide when convenient; fix = stop emitting `lang="la"` on rendered Latin (details in the deferred section below).

## Queue remaining (per runbook table)
10 Song-of-Songs works left, smallest-next = 10804 Bruno of Segni (17ch) → 7914 Ps.-Cassiodorus (23ch) → … up to 11703 Thomas the Cistercian (259ch, a multi-run campaign). Gilbert 11613 (53ch) is chunked and ready whenever a session can supervise a bigger one.

## ✅ DONE 2026-07-05: chunker rewritten as partition-based core — scalable, corpus-validated

The 2026-07-04 "NOT corpus-ready" blocker is closed. `scripts/lib/chunk-core.mjs` (new) partitions the whole `<body>` at div boundaries — every byte lands in exactly one unit, so pb/notes/heads can't be silently dropped by construction. `chunk-work.mjs` = thin CLI (same usage, new `--out` flag for scratch runs); `chunk-scan.mjs` (new) = corpus-wide dry-run → `data/chunk-scan.json`.

- **All 14 previously-failing queue works now PASS** (7383, 11062, 21413, 11321, 7871, 10804, 7914, 9033, 8930, 11638, 6963, 11512, 11632, 11703). The whole Song-of-Songs queue is chunkable.
- **Corpus scan: 5,228/5,276 pass (99.09%).** The 48 fails are table/calendar layouts (chronological tables à la 21340 Chronicon; 0.51% of corpus by words) that fail LOUDLY on word-drift — per-work handling if they ever enter the queue, never silent mangling.
- **Regression gate: Abbo 9741 re-chunks byte-identically.** Corpus cases the old extractor couldn't touch, now handled: div2-only/no-div works, structural `<note>` wrapping monita (436 files — transparent translatable content), nested notes (flattened to sibling `[n:]`), pb inside notes/heads/tables (pulled out as sibling markers), bare column numbers ("1137"), literal `[ ]` in prose/notes, verse `<l>` lines (258K were being dropped corpus-wide), multi-head divs. Nonstandard pb values (Roman numerals, OCR typos — 631 marks corpus-wide) chunk verbatim + warn: patch with provenance before translating those works.
- **Downstream colRe extended** (`verify-english` / `index-work` / `build-work-page`, now `[0-9]{3,5}[A-D]?` + generic band parsing) — verified no-op on translated works (verify OK on 9741/10725/10379/9076). Bare-column works can flow the whole pipeline; check the site resolver handles band-less anchors at deploy time.

## → WILSON DECISIONS pending from the chunker rewrite

1. ~~4 div2 works missing chapter headings~~ **RESOLVED 2026-07-05 (Wilson chose re-chunk):** all 4 re-chunked under the new chunker; Robert/Anselm/Haimo English re-mapped deterministically (column markers + 1:1 paragraph parity made it scriptable — old/new Latin proven identical modulo head lines, every body block hard-assert-matched; ~50 formulaic head lines rendered: `CAPUT PRIMUM.`→`CHAPTER ONE.` preserving Migne's mixed word/Roman style, Anselm's `VOX ECCLESIAE.`→`THE VOICE OF THE CHURCH.` dialogue rubrics, numbered heads pass through). **verify-english OK on all 3**; pages + indexes rebuilt (chapter heads now in TOC/search); Gilbert (11613) re-chunked 47→53 chunks ready to translate. Chunk counts: 10379 3→3, 10725 14→17, 9076 19→23 — **cruces.md chunk refs predate the re-chunk** (noted in each file; locate by column). Read-through gate unchanged; still NOTHING deployed.
2. ~~build-work-page clobbers Abbo's curated about-paragraph~~ **RESOLVED 2026-07-05:** curated "On this text" prose now lives in **`data/work-about.json`** (keyed by textIdno, author-bios.json pattern); builder uses it when present, generic fallback otherwise. Abbo's page rebuilt with it — curated paragraph intact + byline/popover now applied (was the last page predating that feature); `data/index/pl/9741.json` regenerated with `authorsDisplay`. Rebuilds are now safe. **Convention: work-page about-blurbs get written into work-about.json at read-through — never edit generated HTML.** Staged only, no deploy.

**Queue status:** 8229 remains EXCLUDED — its "Cantica" is raw Vulgate biblical canticles, not a commentary (violates untranslated-first + scripture policy).

## → DEFERRED at Wilson's request: the u/v modern-letterform fix

Confirmed from Wilson's screenshot: the Latin columns render every u→v, i→j, and ct-ligatures (EB Garamond's historic-Latin forms, switched on by `lang="la"`). The site's `font-feature-settings: "locl" 0` (in sketch `.coltext.latin` AND the `[lang="la"]` rule) provably does NOT suppress it — `locl` is a *language-default* the shaper applies for the tagged language, and CSS can't reliably turn it off. **Reliable fix = stop emitting `lang="la"` on the rendered Latin elements** in both builders (EB Garamond then falls back to modern u); cost is losing Latin hyphenation/screen-reader lang (minor on these non-hyphenated columns). `font-language-override` would keep the tag but Chrome doesn't support it. **Wilson's added constraint:** Migne's PL *plates were not consistent u/v across volumes* — some set v, some u — so a "faithful-to-plate" display would vary by volume; but the Corpus Corporum TEI *text* we translate from is already normalized to modern u regardless, so forcing modern-u display is internally consistent. Decide blanket-modern-u vs per-volume when we return to it.

## DONE this overnight session (uncommitted → committing now, NO DEPLOY)

**Robert of Tombelaine (10379) FINISHED.** Re-translation agent completed 0001/0002 against corrected Latin (all 25 stale `<emph>` leaks gone); verify clean; built; indexed. Page `site/pl/150/commentaria-in-cantica-canticorum/`.

**Byline/popup mechanism built** (was the "author about" feature request). `data/author-bios.json`, keyed by the exact Latin `manifest.authors` string → `displayName` (English, for byline/crumbs/index; falls back to Latin form when absent) · `latin` (shown in the popup + index to disambiguate) · `dates` · `bio` (popup prose) · `dedicatee:true` (filtered from author credit — fixes the Abbo "Robertus Francorum" = King Robert II quirk). Byline now English (Wilson's call: *English name in byline, Latin in popup + index*). Popover uses the **native Popover API — no JS**. `build-work-page.mjs` wired (dedicatee filter + English byline + popover cards); `index-work.mjs` now emits both `authors` (Latin) + `authorsDisplay` (English). Bios in file: Abbo, Robert, Anselm of Laon (full), Haimo (name only + attribution flag), Robert II (dedicatee). Authors w/o a bio render as plain-text English (or Latin) byline, no popover — by design.

**`translation-style.md` Pattern 3 added: "Holy Scripture" capitalized** (both words, for *sacra/sancta Scriptura* = the canon; NOT generic "holy Church"/"holy preaching"). Flagged by Wilson on Robert; swept — 4 instances fixed in Robert, none in Abbo/Joel.

**CSS landmine fixed properly.** Real mechanism: two builders both own `site/styles.css` — PL (`build-work-page.mjs`) rewrites it from `sketch`+appended block; PG (`build-work-page-pg.mjs`) *appends* the Greek block. A PL rebuild after a PG build dropped Joel's Greek styling. Fix: PL builder now also emits the Greek block under the same `/* PG work page */` header the PG builder strips+re-adds → order-independent, no duplication. (My first attempt — cp site→sketch — was WRONG, it duplicated the appended block; reverted.) Also added author-popover CSS. Verified: PG-rebuild-after-PL keeps Greek at exactly 1.

**2 new Song-of-Songs works translated end-to-end** (Opus agents, strict prompt + style anchor 9741/0000 + translation-style.md, ≤6 cap, per-chunk anchor/note counts verified by each agent):
- **Anselm of Laon** — *Enarrationes in Cantica canticorum* (10725, PL 162, 17.6K words, 14 chunks). Byline "Anselm of Laon" + popover. 6 cruces (garbled Migne type, rendered literally: *Aequitatui*→*Equitatui*, *hinnulo servorum*/*cervorum*, etc.) + one load-bearing Vulgate variant (*umbra* for *imber*, Song 2:11, the commentary glosses it — kept as printed). Heads normalized (one agent said "Enarrations", canonical is "Expositions on the Song of Songs"). `site/pl/162/enarrationes-in-cantica-canticorum/`.
- **Haimo** — *Commentarium in Cantica canticorum* (9076, PL 117, 25.9K words, 19 chunks). Byline "Haimo of Halberstadt" (Migne's attribution; **modern scholarship reassigns to Haimo of Auxerre — flagged in author-bios.json for Wilson**). 11 cruces (all clear printer's typos: *Vestamenti*→*Testamenti*, *snae*→*suae*, etc.). No `[n:]` notes in this printing (0 scripture/fontes in index; 598 headnotes — inline lemmata). `site/pl/117/commentarium-in-cantica-canticorum/`.

**Token burn:** ~0.66M subagent tokens across the 6 translation agents + ~0.11M for the Robert re-translation agent. Opus tier per the volume-translation model plan.

## Pre-DEPLOY checklist (Wilson gates each; NOTHING is deployed)

1. **Wilson read-through** of all 3 staged works: Robert (10379), Anselm of Laon (10725), Haimo (9076) — same approval gate as Abbo/Joel. Cruces logged in each `src/english/<id>/cruces.md`.
2. **Landing not yet rebuilt.** New works must be prepended to the `RECENT` list in `scripts/build-landing.mjs` (else `build-landing.mjs` fails loudly) — add 10379, 10725, 9076, then rebuild `site/index.html`. Left for the deploy session so Wilson controls the editorial "recent" framing.
3. **u/v fix** (above) — decide + apply before or alongside deploy.
4. Then deploy: `cd site && npx vercel --prod` (Wilson's per-action OK required — hard stop).
5. `src/latin/11613/` (Gilbert Foliot) is chunked + ready if Wilson wants it translated next.

---

*Prior update, 2026-07-04 (per-work triage session — PL partial/mixed-bucket authors now DONE, 1889/1889).*

## → NEXT SESSION: per-work triage of partial/mixed-bucket PL authors is DONE. Move to queue-building or Wilson's pending read-throughs.
**Per-work triage thread is closed out — don't re-open it without a new reason.**

- Ran the Phase 4 finer-granularity pass: the 400-author-level triage (`data/triage/authors-status.json`) left 105 authors bucketed "partial" (74) or "mixed-bucket" (31) — i.e. known to be a blend of translated/untranslated works but not broken down further. Built `scripts/build-perwork-batches.mjs` → 49 batches (`data/triage/perwork/batch-NN.json`, ~45 works each, big authors split across sequential batches, small ones packed together) covering all 1889 works attributed to those 118 author-idnos (rollup's "105" underclipped a few idno mismatches).
- Dispatched 49 Haiku agents (7 rounds of 7, telemetry-gated per `feedback_haiku-agent-telemetry-gate`) to research each work's English-translation status individually: `pd-ingested` (PD/open-access — ANF/NPNF/CCEL/Fordham-Global Medieval Sourcebook/author-hosted free), `copyrighted` (paywalled modern edition — FOTC/ACW/TTH/Brepols/OUP/CUP/etc), `none` (verified untranslated), `unclear` (ambiguous/fragmentary). Results in `data/triage/perwork/result-NN.json`.
- **`scripts/merge-perwork-triage.mjs`** merged all 49 result files into `data/works.json` (`translation.workStatus` = raw triage category, `translation.englishState` mapped to the canonical ours/pd-ingested/elsewhere/untranslated vocabulary — `unclear` stays `englishState:null` so it can't be mistaken for a verified "untranslated" queue candidate) + wrote `data/triage/perwork/rollup.json`. Normalized 8 entries during merge: blog-only "copyrighted" claims lacking a named press downgraded to `unclear`; Brepols (a commercial press) flipped from mislabeled `pd-ingested` to `copyrighted`; Fordham/Global Medieval Sourcebook (genuinely free public sourcebooks) flipped from `copyrighted` to `pd-ingested`. One dropped entry (workIdno 3543, *De apparitione S. Michaelis*) recovered from its own agent's summary text and patched in by hand before the final merge.
- **Result across 1889 works / ~30.6M words:** 1364 `none` (16.5M words — genuine untranslated-first queue candidates), 241 `copyrighted` (6.1M words — deprioritized per the untranslated-first rule, redundant to translate), 167 `unclear` (5.0M words — needs a closer look before queuing either way), 117 `pd-ingested` (3.0M words — link/ingest candidates, not translate). Largest single verified-untranslated works: Paschasius Radbertus *Expositio in Matthaeum* (411K words), an anonymous *De libro Psalmorum* attributed to "Beda?" (355K words), an anonymous *Breviarium* (263K words), Rabanus Maurus's Ezekiel commentary (243K words).
- Some authors flipped hard from their author-level "partial" label once seen per-work: Ambrose of Milan came back 69% `pd-ingested` (NPNF2-10 covers most of his corpus) — a reminder that the author-level bucket is coarse and the per-work data now supersedes it for queue-building purposes. `data/triage/authors-status.json` itself was NOT rewritten — it stays as the author-level snapshot; `data/works.json`'s per-work `translation.*` fields are now the authoritative granularity for anything downstream (chunking targets, queue ordering).
- **Not done, flagged as future work, no signal it's needed yet:** the 167 `unclear` works got a note explaining the ambiguity but no resolution pass; a follow-up could re-research just that subset with a sharper prompt (name the specific ambiguity type) if the queue ever needs them disambiguated.

## Prior session (2026-07-04, RelTech independent-catalog): PG author resolution COMPLETE, 167/167.

- Last session's archive.org-metadata lead (creator field) topped out at 57/167 and was correctly diagnosed as near-ceiling for that source. The real unlock was a **third, independent catalog**: RelTech's *Electronic PG* volume list (`http://rosetta.reltech.org/PG-list.html`) — a plain-text per-volume author/content line for all 161 tomes, not another archive.org/Google Books pass. New script `scripts/gapfill-pg-reltech.mjs` fetches (plain HTTP — the host's TLS cert doesn't cover `rosetta.`/`www.`, only `phoenix.reltech.org`, so don't try to force HTTPS) and caches it at `raw/html/pg-list-reltech.html`, parses to `data/pg-tome-reltech.json`.
- Cross-checked the source against tomes already trusted before relying on it further: 068/074–076 "Cyril of Alexandria" (archive.org) matches RelTech's own 069–073 entries; 111 "Nikolaos I Mystikos" (last session's archive.org creator-field hit) matches RelTech's 111 almost verbatim; 010's mixed "Gregory Thaumaturgus, ... Hippolytus, etc." matches our existing combined-author note. Source checks out.
- **`resolve-pg-authors.mjs` gained Signal 5** (RelTech, fallback only — signals 1–4 still take priority when they resolve). **Result: 167/167 PG tomes now carry an author signal** (was 57; 20 high-confidence, 147 medium). `build-gap-map.mjs` → **all 134 gap tomes now carry an author** (was 49).
- **This closes item 1 (the 9 fully-bare tomes: 069, 071–073, 097, 110, 125, 126, 150 — all resolved) and item 3 (Epiphanius/Methodius/Theodoret/Zonaras — all pinned) from last session's remainder list.**
- **Caught and fixed a real false-positive bug this surfaced**: `build-gap-map.mjs`'s `CHECKLIST_AUTHORS` used loose whole-string substring regexes (`/epiphanius/i`, `/eusebius/i`, `/methodius/i`). Once RelTech's richer combined-author tomes were in the mix, those regexes started crediting the WRONG same-named person — "Epiphanius of Constantinople" (086-1, a 6th-c. monk) and "Epiphanius Monachus Hierosolymitanus" (120) both matched "Epiphanius of Salamis"; "Eusebius of Alexandria"/"Eusebius of Emesenus" (086-1) matched "Eusebius of Caesarea"; the 13th-c. Patriarch "Methodius" bundled into tome 140 matched "Methodius of Olympus". **Fixed by matching against discrete `'; '`-split fragments with anchored (`^...$`) patterns**, not substring-anywhere on the joined string. Re-verified: Epiphanius of Salamis now correctly 041/042/043 only, Eusebius of Caesarea 019–024 only, Methodius of Olympus 018 only.
- One known source blemish (not our bug): RelTech's PG 135 entry is missing a comma in the original HTML ("Joannis Zonaræ Georgius Xiphilinus, Isaacius Angleus...") so our parser can't split "Joannis Zonarae" from "Georgius Xiphilinus" — they land as one fragment. Harmless here (both are real content of that tome; `/zonar/i` still substring-matches and correctly adds 135 to the Zonaras hits) but worth remembering if this fragment string is ever used for exact-match logic elsewhere.

**Next real thread, in order:**
1. Phase 3 OCR benchmark is done (`benchmark/RESULTS.md`) — Sonnet 5 for Latin bulk gap-OCR (1.48% mean CER), Greek stays on Calfa's pipeline. Per-work triage of partial/mixed PL authors is a separate, unrelated Phase 4 thread — can now write into works.json slots using the completed tome→author map.
2. If a genuine reason arises to keep polishing PG author data: the RelTech text field itself is still a raw, un-normalized string (mixed Latin/English forms, occasional missing-comma artifacts like PG 135) — a future pass could normalize it into a controlled author-name vocabulary, but there's no signal that's needed yet; don't do it speculatively.

Migne biography read-through: APPROVED by Wilson 2026-07-04 — no open decisions remaining from the 2026-07-03/04 pilot+bio thread. (Joel read-through + both Greek-vs-Latin rulings: RATIFIED 2026-07-04, see above.)

## Done 2026-07-04 (PG Google Books gap-fill session, history)
- **Archive.org re-query dead end**: tried `title:(patrologiae graeca)` (247 docs) and `description:("series graeca")` (215 docs), merged with the original 246 to 275 unique items, re-ran the same volume/identifier/title matching against all 35 gap tomes — 0 new matches. These tomes have no individually-cataloged archive.org item, only the `patrologia-volumes` mega-item (no per-file metadata).
- **Google Books titles worked**: `scripts/gapfill-pg-googlebooks.mjs` fetched the plain-HTML `<title>` tag for every `googlebooks` link in `data/volumes.json` (162 requests, 800ms spaced), filtered Migne's boilerplate ("Patrologiae cursus completus...", "Patrologiae Graecae - Jacques-Paul Migne") → `data/pg-tome-googlebooks.json`, 26/35 gap tomes with a real title (e.g. 067 → Socrates Scholasticus/Sozomen *Historia ecclesiastica*; 091 → Maximus Confessor; 131 → Anna Comnena *Alexias*).
- Caught one mismatched-link case (PG 105 credited to Origen via a stray Google Books ID that's actually Origen's own works) — excluded by ID rather than left as a loose flag.

## Done 2026-07-04 (PG tome→author index session)
- **`data/pg-tome-index.json` built** (`scripts/build-pg-tome-index.mjs`): matched 132/167 PG registry tomes to an archive.org item (up from the 47 already linked in `volumes.json`) by cross-referencing a fresh archive.org title search (`data/cache/ia-search-pg.json`, 246 docs matching "patrologiae cursus completus graeca") against three signals — the search doc's `volume` field, `_vol_NNN[a-c]` in its identifier, or "Volume NN" in its title — then pulled each matched item's own `/metadata/<id>` record (its `description` field is archive.org's own catalog note, e.g. tome 010's "S. Gregorius Thaumaturgus, S. Hippolytus Portuensis..." — NOT scraped from a third party, NOT from memory).
- **`data/pg-tome-authors.json` built** (`scripts/resolve-pg-authors.mjs`): turns the raw index into a clean `tome -> author` field. Caught and fixed a real bug en route — several archive.org items (`patrologiaecursu04/10/15/16/36/37/38/45/66/93mignuoft`) share the IDENTICAL multi-volume TOC blurb ("t.3-4. Dionysius...--t.15. Origenis.--t.16. Origenis (3 pts)...--t.35-38. Gregorius Nazianzenus..."); naively substring-matching a checklist author against that blurb would credit e.g. "Origen" to tome 004 (wrong — 004 is Dionysius the Areopagite, t.3-4). The resolver now parses `t. N[-M]. Author` spans and only credits a tome when its own number falls inside the span. 30/167 tomes now have a resolved author (20 high-confidence direct hits, 10 medium-confidence span matches).
- **`firstOneKCandidateAuthors` in `data/gap-map.json` is now computed, not asserted**: 4 of 9 checklist authors pinned to real tome numbers — **Origen → 011, 013, 014, 015, 016-1, 016-2, 016-3, 017**; **Eusebius of Caesarea → 020, 021, 023, 024**; **Gregory of Nazianzus → 036, 037, 038**; **Hippolytus → 010** (combined-author tome, one name among several — not a clean single-work tome). Epiphanius, Methodius, Theodoret, Zonaras, Anna Comnena still unconfirmed (see next-session item 3). 25/134 gap tomes now carry a verified author field total (`gapTomesWithAuthor`).
- Not yet committed to git this session — do that before touching anything else.

## Done 2026-07-04 (Stripe/OG session, earlier)
- **Support tiers now Migne-native Stripe links** (commit `b764b0f`, deployed): were reusing Acta products; created live Wroot Labs products/prices/links — $10 column / $300 work / $10-mo patron, each tagged metadata `project=migne`+`tier`. Old Acta links untouched.
- **OG image + social meta** (commit `e9d5ea7`, deployed, verified live): `site/og.png` (1200×630, shelf + PG 162 ghost); `site/og.html` = regen source; OG/Twitter tags added to `site/index.html` AND `scripts/build-landing.mjs` so rebuilds keep them.

## State

- **LANDING + RESOLVER BUILT 2026-07-03** (commit `8b7cf26`, per `site/landing-resolver-spec.md` — all deliverables + acceptance checklist run in browser).
  - `scripts/build-landing.mjs` → `site/index.html` + `site/resolver-data.json` (13KB). Englished set scanned from built pages; ledger from registries (85,525,824 / 387 / 73); shelf server-rendered with PG 162 ghost; run it after every work ships. **New works must also be prepended to the `RECENT` list at the top of the script** (editorial, newest first — the build fails loudly if a built page is missing from it).
  - `site/resolve/index.html`: path or query params (`s`/`v`/`c`, plus `vc` for the no-JS form), PL nearest-preceding anchor, PG pair normalization (223→#c224 verified), miss/ghost/invalid pages.
  - **`vercel.json` lives in `site/`, NOT repo root** — deliberate deviation from the spec: the deploy root is `site/` (`cd site && npx vercel`) and Vercel reads rewrites from the deploy root only.
  - Both work-page builders now emit the nearest-anchor hash fallback + the analytics snippet; pages rebuilt, verifiers clean. `volumes` map in resolver-data includes ALL volume numbers (scan-less ones as `{}`) so range validation works.
  - **Rewrites don't exist on the local http.server** — citation paths 404 locally; test via `/resolve/?s=…&v=…&c=…`, and re-test path form after first deploy.
  - **DEPLOYED — migne.app IS LIVE (2026-07-03, Wilson's per-action OKs given in-session).** Vercel project `migne` on team wilson-pruitts-projects, prod deployed via `cd site && npx vercel --prod`, domains migne.app + www attached (Cloudflare A/CNAME, DNS-only), Web Analytics toggled ON by Wilson (script serves 200). Citation rewrites verified live: `/pl/139/473a` → Abbo `#c473a`, `/pg/139/223` → Joel `#c224`.
  - **Support section added post-launch same day** (commit `626a5f1`, Wilson authorized): Acta pattern, SAME Stripe payment links as actasanctorum ($10/$300/$10-mo), migne copy ("a column / a work / patron"), queue count interpolated from the rollup. Styles live in `sketch/styles.css` (base) so work-page rebuilds preserve them.

- **DIFF-VS-SCAN DONE FOR BOTH PILOTS 2026-07-03** (commits `3cf8f84` Joel, `c84cdd4` Abbo). This closes the pre-deploy verification debt from both pilot sessions.
  - **Joel: all 21 flagged cruces adjudicated against the plates** (verdict-by-verdict record appended to `src/english/joel-chronographia/cruces.md`; page rebuilt, verifier clean, re-indexed — 202 cruces).
    - **Real corrections landed:** Ozias 52 (was 59 — Calfa νθί = νβʹ), Zambri 12 (was 18 — ιᾔʹ = ιβʹ), Eli's ϟʹ=90 plate-verified (koppa misread as ἱ), βέβηλον (was θέόηλον — broken type), Συνέπων (was Τυνέπων), κοιτωνίσκων (was κοιτώνων), Tzimiskes ἡμέρας λʹ, Seven Sleepers τβʹ=302 plate-verified on BOTH columns.
    - **Two Greek/Latin divergences in Migne himself** (not OCR): Joram ἔτη βʹ vs Latin *duodecim*; Michael VII χρόνους ζʹ vs Latin *sex*. Per the Greek-primary/as-printed policy the English now follows the printed Greek (two / seven) with the Latin noted. **RATIFIED by Wilson 2026-07-04 — Greek stands for both, no policy exception.**
    - **Three NEW lacuna patches (10–12,** all appliedPostChunking): Ochozias's upper-story clause (0240), Nestorius's `(υἱὸς` (0256), Maximinus's wax/bones line (0256→0257 seam). 13 patches total; patches 5/6/7/8 plate-confirmed verbatim en route.
    - **Scan-copy gotcha:** `patrologiaecurs63migngoog` clips line-initial characters on some left margins; a second copy (`patrologicursus73migngoog`, 86MB, now in `raw/scans/pg139/`, offset +4 pp, full margins) settled the two clipped readings (Maximinus γʹ, Συνέπων Σ).
    - **Column-map tail fixed:** leaf values for Calfa pages 146–151 were +2 (token verification had matched generic words — lesson: verify with distinctive tokens only); corrected in `data/pg-column-maps/pg139.json`. The three parity-inferred greekCols (284/285/288) were all CORRECT — chunk 0011's anchors stand.
  - **Abbo: spot check PASS** (`src/english/9741/diff-vs-scan.md`): 3 sample pages, 28 phrases, anchor-placement check — TEI faithful to plates. Known TEI boundary: æ→ae normalization + **Mabillon's footnotes absent** (deliberate; would need OCR from plates if the site ever wants Migne's full apparatus). PL 139 scan in `raw/scans/pl139/` (57MB, gitignored).
- **Joel read-through APPROVED by Wilson 2026-07-04** — register/alignment good; both Greek-vs-Latin divergences (Joram, Michael VII) ratified Greek-stands, no exception. Page: `site/pg/139/chronographia/`.
- **Abbo read-through was already APPROVED**; with diff-vs-scan done, Abbo's remaining pre-deploy items are site-wide, not work-level.
- Pipeline/state detail from the pilot sessions: see the 2026-07-03 pilot entries in git log and `patrologia.md` memory; earlier state (works.json, TEI corpus, triage, biography, sketch) in prior resume-note versions.

## Done 2026-07-04 (Song of Songs per-work triage, evening session)

- Wilson asked to prioritize Song of Songs (Cantica canticorum) commentaries as the next translation queue, smaller works first. First pass over `works.json` surfaced 8 already-verified-`none` works from the existing author-level triage (Alcuin, Ambrose, Anselm of Laon, Anon. Magnificat/Cantica, Cassiodorus?, Rabanus Maurus) — none of these needed re-checking.
- A second tier of 22 more Cantica works had never been individually verified (their authors weren't in the 118-author partial/mixed pool the Phase-4 batches covered) — includes several famous names (Bernard of Clairvaux, Bede, Gregory the Great, Rupert of Deutz, Gilbert of Hoyland) where a translation was plausible. Ran 5 telemetry-gated Haiku agents (~5 works each) to verify each individually.
- **Caught and fixed a real cross-batch error**: two agents in different batches both credited M. Columba Hart's 1970 Cistercian Fathers translation to *different* William of Saint-Thierry texts (PL 184 "ex Bernardo contexta" vs PL 180 "Expositio altera"). Resolved with a direct follow-up search: Hart's translation is of "Expositio super Cantica canticorum" = PL 180 cols 473-546, matching workIdno 6126 exactly. Corrected workIdno 6278 (PL 184) back to `none` — it has no known translation.
- **Results, patched into `data/works.json`, provenance in `data/triage/cantica-secondtier.json`**: 3 pd-ingested (Jerome/Origen homilies — NPNF; Bernard's Sermones — Eales 1893 PD, not the paywalled Cistercian one), 8 copyrighted (Anselm of Laon/Glossa – Dove; Gregory I – DelCogliano; William's two genuine translated texts – Hart/DelCogliano; Rupert of Deutz – brand-new 2024 CUA Press/FOTC; Bede – Paulist Press; Gilbert of Hoyland – Braceland/Cistercian), 2 unclear (Richard of St. Victor and Honorius of Autun — both have only a translated prologue, need a closer look before queuing), 9 confirmed **none** (genuinely untranslated, safe to queue): Robert of Tombelaine (2.9K words), William's "ex Bernardo contexta" (11.6K), Bruno of Segni (17.2K), Haimo of Auxerre (25.9K), Angelomus of Luxeuil (31.1K), Philip of Harvengt's *Moralitates* (38.3K) and *Commentaria* (123.6K), Gilbert Foliot (65.7K), Wolbero of St. Pantaleon (105.8K), **Thomas the Cistercian (314.4K — bigger than any single work translated so far)**.
- **Combined Song-of-Songs untranslated-first queue is now 17 works** (8 from the original tier + 9 from tonight), smallest-first from Anon. *Expositio cantici Magnificat* (2,071 words) up to Thomas the Cistercian (314,396 words). Not yet built into a formal ranked queue file — just verified and ready.

## Next moves (superseded by the top-of-file section — that one is current)

1. ~~Build the Song-of-Songs translation queue~~ — STARTED: Robert of Tombelaine (10379) is the first pilot, see top of file for exact resume point.
2. **Phase 3 OCR benchmark** (unchanged, already done — see `benchmark/RESULTS.md`): Sonnet 5 wins Latin bulk gap-OCR.
3. **PG gap map** (unchanged, already done — `data/gap-map.json`, 167/167 tomes with an author).
4. Optional, no signal yet needed: closer look at the 2 "unclear" Cantica works (Richard of St. Victor, Honorius of Autun) and the 167 unclear works from the earlier per-work triage batch.
5. After Robert of Tombelaine ships: the next 16 confirmed Song-of-Songs works are still queued (see the 2026-07-04 evening section further down), smallest-next is Bruno of Segni (17.2K words) or Haimo of Auxerre (25.9K) depending on whether Alcuin/Anselm/etc. from the original tier-1 list are picked first.

## Open flags / small debts

- Consider a **systematic bottom-line/overhang sweep per Calfa volume** before future PG works: Joel yielded 13 patches, 3 of them found only at diff-vs-scan. The detector (Greek tokens in Latin-column x-range) plus a last-line-of-column check would catch most up front.
- Scan-leaf ≠ PDF-page−1 cannot be assumed constant within a volume (PG 139 drifts by 2 in the tail); column-map verification must use distinctive tokens.
- PG 075 scan series check; author-tail triage; biography read-through — all unchanged.
- Scan artifacts: `raw/scans/pg139/` (~210MB, two copies) + `raw/scans/pl139/` (57MB), all gitignored, re-downloadable.
- No git remote (ask Wilson before creating).
