# Usuardus, *Martyrologium* (9198 + 9215, PL 123–124): common stint brief

Every stint in this run reads this file. Your launch message names your stint tag, idno, chunk
range and leaves. Everything below is the same for all six stints.

**The run:** ONE work across two tomes, 22 chunks, ~26.7K Latin words.
- **9198** (PL 123, cols 599A–987): the dedicatory prologue to Charles the Bald, a second prologue
  from Augustine, then January–April. 7 chunks.
- **9215** (PL 124, cols 9–857): May–December. 15 chunks.

**Genre: a martyrology.** It is the first in this corpus. One entry per calendar day, each a run of
short commemorations: place, then saint, then a clause or two of passion narrative. It is formulaic
by design, and **the formulas are the text**. Render them the same way every time (section 8), so
that a reader can see the repetition Usuardus built.

| stint | idno | chunks | cols | archive leaves |
|---|---|---|---|---|
| A | 9198 | 0000–0003 | 0599A–0809 | 314–419 |
| B | 9198 | 0004–0006 | 0811–0987 | 420–508 |
| C | 9215 | 0000–0003 | 0009–0213 | 9–111 |
| D | 9215 | 0004–0007 | 0219–0435 | 114–222 |
| E | 9215 | 0008–0011 | 0439–0689 | 224–349 |
| F | 9215 | 0012–0014 | 0693–0857 | 351–433 |

## 1. Read these first, in this order

1. `translation-style.md`, the frozen register rulebook. Follow it exactly. **Read the new
   "Martyrologies" section (M0–M2) twice.** Also read 7a (negation), 7a″ (scripture conformed),
   patterns 8 (punctuation), 9 and 11–13 (defect markers), 15 (`[nt:]`), 18 (`[cj:]`) and 19
   (Migne's apparatus is not ours).
2. `translation-runbook.md`, section **"Agent prompt template"**, especially the numbered list
   **"Known false positives — do NOT report these"**. Read it before you mark anything.
3. Format anchor: `src/latin/8382/0000.md` + `src/english/8382/0000.md` (Egbert). Use it for
   frontmatter, the book-title banner line, `[cn:]`→`[nt:]` twins and marker shape. Its register is
   canon law, not yours.
4. Any `src/english/<your idno>/cruces-*.md` a peer has already written.

## 2. Output: four kinds of file, all yours alone

- **English chunks:** `src/english/<idno>/NNNN.md`, same filenames as the Latin. Copy each Latin
  chunk's frontmatter **verbatim** and invent no fields.
- **Cruces:** `src/english/<idno>/cruces-<yourFirstChunk>.md` (e.g. `cruces-0004.md`), never
  `cruces.md`. One entry per crux: column, reading, your note.
- **Plate reads:** `data/briefs/<idno>-PLATE-READS-<yourFirstChunk>.json`, same shape as
  `data/briefs/8957-PLATE-READS-0000.json`. Never write `data/plate-reads.json` itself.
- **Pending TEI patches:** `data/briefs/<idno>-PENDING-TEI-PATCHES-<yourFirstChunk>.md`, in the
  format of `data/briefs/8957-PENDING-TEI-PATCHES-0000.md`. **The English renders the plate, and
  this file is how the Latin catches up.** Do not edit `sources/pl/tei/*` or `data/tei-patches/*`
  yourself.

**A stint that writes English and no apparatus passes `verify-english` in silence.** That has
happened. Write all four files, even when one only says "none".

## 3. Sacred markers (violating any one = the work fails verification)

- **Column anchors** (`[0605]`, `[0599C]`): **verbatim, in order, in place.** Count them against
  the frontmatter.
  - Most anchors here are bare odd numbers that skip (0605, 0607, 0609…). Usuardus's band sits at
    the foot of each page, under Solier's commentary. That is the layout, not a gap. Report nothing.
  - The prologue runs 0599A 0599B 0600A 0600B, then a stray `[0599]`, then 0599C 0600C 0601A 0602A
    and a doubled `[0601]`. That is Migne's layout around mid-page heads (known false positive 1).
    Keep every anchor where it is and report nothing.
- **`[n: …]` notes:** verbatim, untranslated, same count and order.
- **Recovered foot notes (stint A only).** `src/latin/9198/0000.md` carries two `[cn: a | …]`, both
  Bouillart's, restored at the plate. They are LATIN-ONLY. **Your English carries a translated
  `[nt: …]` at exactly the same point, and no `[cn:]` at all** (`verify-english` pairs them by
  position). Keep his signature: "Bouillart." at the end of each note.
  - The first sits in the `## PROLOGUS [cn:] AD CAROLUM CALVUM.` head.
  - The second sits in the `## PROLOGUS [cn:] ALTER…` head. Keep each head on one line.
- **Book-title banners** (stint A: *INCIPIT USUARDI MARTYROLOGIUM PER ANNI CIRCULUM.*; stint C:
  *SEQUITUR USUARDI MARTYROLOGIUM.*): the plain line above the first `## ` head. Translate it as a
  plain line in the same place, in capitals, the 8382 way. It is not a head.
- **`## ` heads:** translate them 1:1, per M1 (day heads) and the month-head rule. Never translate
  `(cont.)`.
- **Italics `*…*`:** preserve.
- **Defect markers, English-only:** `[d:]`, `[sic:]`, `[ed:]`, `[var:]`, `[cj:]`.
- ⛔ **The inline `[Bouillart …]` brackets are NOT markers** and never take one (M2). Translate each
  in place, in square brackets, keeping his name.

## 4. Negation and numbers, 7a

Every `non`, `nec`, `neque`, `nisi`, `haud`, `nunquam`, `nullus`, `nihil`, `absque` the Latin prints
appears in your English, and none appears that it does not print.

⚠ **In a martyrology the NUMBERS are the equivalent hazard.** *Coronae militum triginta*, *cum aliis
tribus*, *quadraginta*, *xviii Kalend. Julii*, and regnal and episcopal years. A wrong number reads
as perfectly good hagiography.
- Render every numeral as printed, in words ("thirty soldiers").
- Where a Roman date appears INSIDE an entry (*cujus celebritas xviii Kalend. Julii recolitur*),
  render it in M1's words: "the eighteenth day before the Kalends of July". Here the month IS
  printed, so keep it. **Do not add a modern date inside the text.**

## 5. Scripture: rare, but check it (7a″)

There will be little: an epithet, a clause in the prologues. The Augustine prologue cites *Contra
Faustum* and quotes Apoc. 19:10 and Acts 14 (stint A). Phrase-search each quotation against
`sources/vulgate/clementine-flat.txt`, and read the citation's address. `[var:]` is only for a verse
quoted AS a quotation whose words diverge. List every one you checked in your report.

## 6. Names and places: the consistency problem this genre has

Three stints must not produce three spellings of the same saint. The rule:
- **Saints, emperors, well-known places: the conventional English form** where one is standard.
  Peter, Paul, James, Philip, John, Stephen, Athanasius, Jerome, Gregory, Hilary, Martin; Diocletian,
  Maximian, Decius, Valerian, Hadrian, Trajan, Nero, Licinius; Rome, Alexandria, Antioch, Carthage,
  Jerusalem (*Hierosolymis*), Nicomedia, Caesarea, Cappadocia, Africa, Gaul (*Galliis*), Spain,
  Lyon (*Lugdunum*), Vienne, Auxerre (*Autisiodoro*), Milan, Ravenna, Sicily, Sardinia, Egypt, Asia.
- **Everyone and everything else: the Latin NOMINATIVE** of the form printed, unanglicized:
  *Andeolus*, *Amator*, *Sigismundus*, *Taphnae*. Derive the nominative carefully. **If the
  nominative is uncertain (Orientis: Oriens? Orientius?), print the printed form and crux it.** Never
  normalize to a form you remember from elsewhere. The spelling Migne prints is the text
  (*Hieremiae*, *Policarpus*, *Schytiam* stay Hieremias, Policarpus, Schytia).
- Keep a running list of every name decision in your cruces file under a heading `## Names`, and grep
  peers' cruces files before you settle one.

## 7. The corpus is its own control

Before appealing outside, **grep the rest of this work and the corpus** (`src/latin/*/`). ⚠
Frequency proves an error EXISTS, never WHOSE it is (CLAUDE.md 8a). Only the plate licenses a `[sic:]`.

## 8. Work-wide formulas: fixed now so six stints do not drift

| Latin | English |
|---|---|
| *natalis sancti X* | the birthday of Saint X. Stint A writes ONE crux at the first instance: in a martyrology *natalis* is the day of death, the birth into heaven. Nobody glosses it again. |
| *passio* | the passion |
| *depositio* | the deposition (the burial) |
| *translatio* | the translation (of relics) |
| *inventio* | the finding (*inventio sanctae Crucis* = the finding of the holy Cross) |
| *dormitio*, *transitus* | the falling-asleep, the passing |
| *ordinatio* | the ordination |
| *beatus* / *sanctus* (before a name) | blessed / Saint |
| *sanctus* (adjective otherwise) | holy |
| *martyr*, *confessor*, *virgo*, *vidua* | martyr, confessor, virgin, widow |
| *episcopus*, *presbyter*, *diaconus*, *subdiaconus*, *lector*, *abbas* | bishop, presbyter, deacon, subdeacon, reader, abbot |
| *Item* | Also |
| *Eodem die* / *Ipso die* | On the same day / On this same day |
| *Apud X* / *In X* / *X* (bare locative) | At X / In X / At X |
| *civitate X* / *territorio X* / *in pago X* | in the city of X / in the territory of X / in the district of X |
| *sub X principe* / *imperatore* / *praeside* / *judice* | under the emperor X / under the emperor X / under the governor X / under the judge X |
| *quievit*, *requievit*, *migravit ad Dominum* | rested, rested, passed to the Lord |
| *capite caesus*, *decollatus* | beheaded (both); *gladio animadversus* = put to the sword |
| *martyrio coronatus est* | was crowned with martyrdom |
| *cum aliis* | with others |

Formulas not in this table: pick one rendering, record it in your cruces under `## Formulas`, and
use it every time.

## 9. ⭐ Read your own plates as you go (runbook 4a″): targeted, NOT page by page

- **There is no PDF on disk.** Fetch page images one at a time:
  `curl -sL -o <scratch>/nNNN.jpg "https://archive.org/download/<ID>/page/n<LEAF>.jpg"`
  (full size ~3900×6100). Crop locally with PIL. Never let a crop cross the centre gutter. The
  Usuardus band is FULL WIDTH, so a band crop can span the page. Delete your images when done.
  This is an 8 GB machine.
- **PL 123 (9198): `patrologiaecurs29goog`, leaf = (odd col + 29)/2.** Calibrated at prep: n310 =
  591/592, n314 = 599/600, n315 = 601/602, n317 = 605/606.
- **PL 124 (9215): `patrologiaecurs76unkngoog`, leaf = (odd col + 9)/2.** Calibrated: n9 = col 9
  (the work's opening page), n20 = 31/32.
- **Read the printed corner numbers FIRST on every page.** The map may drift across a volume (it did
  on PL 122 past col ~1000). If the corners disagree, recalibrate, record it, and tell your peers in
  your report.
- **What you read. The work is ~620 sparse pages, too many to collate one by one within budget
  (orchestrator's call, 2026-09-21):**
  1. **the first page of every chunk in your range**, whether or not anything is found there;
  2. **every leaf in your range listed in `data/briefs/<idno>-OCR-CANDIDATES.tsv`.** These are sites
     where archive.org's own OCR reads a *different real Latin word* from our TEI. **Most are OCR
     noise or misalignment into Solier's commentary. They are leads, not findings.** One band crop
     settles each. Record each verdict: TEI right / plate differs → pending patch / not in the band;
  3. **every site where you would fire a `[sic:]`, `[var:]` or `[cj:]`, or log a text-defect crux.**
     Read it BEFORE you fire. `plate-gate.mjs` refuses a `[sic:]` or `[var:]` on an unread column.
- **Only the full-width Usuardus band is the text** (M0). Solier's NOTAE, VARIANTES LECTIONES,
  OBSERVATIONES and AUCTARIA above it are out of scope. Do not translate them, and do not "fix" our
  text from them. ⭐ **But they are good evidence of what the band prints:** Solier often quotes the
  entry's words and argues about them, which can settle a reading. Cite them in a crux when they do.
- **Second witness for single letters:** PL 124 has Gallica `ark:/12148/bpt6k54939860` (IIIF:
  `https://gallica.bnf.fr/iiif/ark:/12148/bpt6k54939860/f<N>/full/1400,/0/native.jpg`, User-Agent
  header required, map UNCALIBRATED, so read the corners). PL 123 has none handy. **Without a second
  witness, do not fire a single-letter `[sic:]` on one copy**: log it as `single-witness` with what
  the plate shows.
- ⛔ **A hyphen at a line or column break is the FIRST hypothesis** for a split or doubled word.
- **Where the plate and our TEI differ and the plate is sound, the English follows the plate**, and
  the difference goes in your PENDING-TEI-PATCHES file (find/replace, why, leaf, corners).
- **Record every page you open, found or not found**, with its corner numbers. A foot-of-band keyed
  note (a raised letter or asterisk INSIDE the Usuardus band) that is not one of stint A's two: report
  it, and do not add it yourself.
- **Already recorded at prep:** the four pages above. Patches already applied: the two banners,
  9215 0009 *lignato*, 9198 0599C *AUGUSTI.* **Stint A:** the plate prints *EX LIBRIS BEATI
  AUGUSTI.* and Augustine is meant. Weigh a `[cj:]` on that head under pattern 18, since the printed
  word is real and the faithful English ("of the blessed Augustus") misleads.

## 10. Scripture policy, false positives, dashes

Translate what Migne prints and never substitute a conventional version. For garbled type, render it
literally and log the crux. Migne's own `( sic )` stands, so do not stack ours. Band-letter arithmetic
proves nothing. **Keep em-dashes rare**, and never mark or report one. The passion narratives are
violent. Translate them plainly and exactly, neither softened nor heightened.

## 11. Do not stop early

Your batch is your whole range. If you find yourself writing "context budget" at chunk 2, you are
repeating a documented failure pattern. Push through.

## 12. Before you finish

Run `node scripts/verify-english.mjs <idno>`. It will complain about chunks that are not yours and
not yet written, but **your own chunks must be clean.**

## 13. Report back

Report all of the following. A report that lists only findings cannot be told apart from one by a
stint that never looked.
- **every chunk translated**;
- **every page opened, with its corner numbers**;
- **every OCR candidate with its verdict**;
- every scripture quotation checked (address + ✓ / divergent / paraphrase);
- your `[var:]` / `[sic:]` / `[cj:]` / `[ed:]` / `[d:]` markers, with columns;
- keyed notes seen;
- **every name and formula decision**;
- candidates you **rejected, and why**.
