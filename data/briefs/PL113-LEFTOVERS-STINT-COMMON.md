# PL 113 leftovers (8971–8975) — common stint brief

Every stint in this run reads this file. Your launch message names your works, chunk ranges and
plate leaves; everything below is the same for all four stints.

**The run:** five prefatory works that stand before the Glossa ordinaria in PL 113, cols 11–60.
19 chunks / 20,909 words. **These are PROSE, not lemma-and-gloss commentary.**

| idno | work | author | cols | chunks |
|---|---|---|---|---|
| 8975 | *Ad lectorem* — the 1617 Douai Prolegomena, letter to the reader | Theologi Duacenses | 0011B–0020C | 3 |
| 8971 | *Prologus de commendatione sacrae Scripturae in generali* | Nicholas of Lyra | 0025B–0030B | 2 |
| 8972 | *Prologus secundus, de intentione auctoris et modo procedendi* | Nicholas of Lyra | 0029B–0034B | 2 |
| 8973 | *Prologus in moralitates Bibliorum* | Nicholas of Lyra | 0033B–0036A | 1 |
| 8974 | *Additiones ad Postillam* — Burgos's prologue to his son, his *Additiones* on Lyra's two prologues, a Franciscan's letter against him (0050B), and his reply (0051D) | Paul of Burgos (Paulus de Sancta Maria) | 0035B–0060A | 11 |

⚑ The works' column ranges overlap by a band because each ends and the next begins **mid-page**.
That is layout, not a defect.

## 1. Read these first, in this order

1. `translation-style.md` — the frozen register rulebook. Follow it exactly. In particular:
   7a (negation), 7a″ (scripture conformed), patterns 9 and 11–13 (defect markers), 15 (`[nt:]`).
2. `translation-runbook.md`, section **"Agent prompt template"** — especially the numbered
   **"Known false positives — do NOT report these"** list. Read it before you mark anything.
3. Style anchor: `src/latin/9741/0000.md` + `src/english/9741/0000.md` (format, markers, register).
4. `src/english/8949/0000.md` top line — how a `book-title` preamble line is rendered (see §3).
5. Any `src/english/<idno>/cruces-*.md` a peer in this run has already written.

## 2. Output — four kinds of file, all yours alone

- **English chunks:** `src/english/<idno>/NNNN.md`, same filenames as the Latin. Copy each Latin
  chunk's frontmatter **verbatim**; invent no fields.
- **Cruces:** `src/english/<idno>/cruces-<yourFirstChunkOfThatWork>.md` — never `cruces.md`.
  Column + reading + your note, per crux. One file per work you translate.
- **Plate reads:** `data/briefs/PL113L-PLATE-READS-<stintTag>.json`, same shape as
  `data/briefs/8957-PLATE-READS-0000.json`. Never `data/plate-reads.json` itself.
- **Pending TEI patches:** `data/briefs/PL113L-PENDING-TEI-PATCHES-<stintTag>.md`, format of
  `data/briefs/8957-PENDING-TEI-PATCHES-0000.md`. **The English renders the plate; this file is how
  the Latin catches up.** Do not edit `sources/pl/tei/*` or `data/tei-patches/*` yourself.

Your `<stintTag>` is in your launch message. **A stint that writes English and no apparatus passes
`verify-english` in silence** — that has happened; write all four even when a file says "none".

## 3. Sacred markers (violating any = the work fails verification)

- Column anchors `[0029B]`: **verbatim, in order, in place.** Count against the frontmatter.
- Notes `[n: …]`: verbatim, untranslated, same count and order. Pattern 15: editorial PROSE → `[nt:]`.
- ⭐ **Recovered foot note `[cn: a | …]` in 8974 chunk 0006 (@0050B):** Latin-side apparatus from
  the plate. ⛔ **CORRECTED by stint C6: the `[cn:]` and its `ª` key stay LATIN-ONLY.** The
  English carries only a translated `[nt: …]` at that point (Pattern 19; `verify-english` rejects
  a `[cn:]` in an English chunk). This brief originally said to copy the `[cn:]` across — wrong.
- ⭐ **Book-title preamble.** Chunk 0000 of every work opens with a line ABOVE its first `## `
  head: Migne's display heading, dropped by Corpus Corporum and restored at the plate on
  2026-09-16. Translate it as a plain line in the same place (see the 8949 example). Keep Migne's
  capitals where he sets capitals. It is not a `## ` head; do not make it one.
- `## ` heads: translate, keep structure 1:1; never translate `(cont.)`.
- Italics `*…*`, `- ` lines: preserve.
- Defect markers, English-only: `[d:]`, `[sic:]`, `[ed:]`, `[var:]`, `[cj:]` — read patterns 11–13
  and 7a″ first.
- Greek survives inline in the Latin (e.g. *ἀνάγω*, *ἀναγωγικός*, *κατ' ἐξοχήν*): keep it.

## 4. Negation fidelity — `translation-style.md` 7a

Every `non`, `nec`, `neque`, `nisi`, `haud`, `nunquam`, `nullus`, `nihil` the Latin prints appears
in your English, and none appears that it does not print — **including when that makes the
sentence contradict itself.** Never translate a word as its opposite to rescue a sentence that will
not construe; render closely and log the crux. ⚠ Scholastic disputation is exactly where this
bites: *quod non*, *nisi quia*, *non solum … sed*, objections and replies. The Burgos reply
(8974 0007–0010) answers the letter point by point — its *dicis quod* / *non valet* / *falsum est*
must keep their polarity or the dispute inverts.

## 5. 7a″ — scripture, and the divergence list is a DELIVERABLE

There is no lemma inventory for this run (these are not lemma-and-gloss works), so **you build the
list yourself**: every quotation of Scripture in your range (they are marked by guillemets and
usually a `[n: (Apoc. V.)]` citation), phrase-searched against `sources/vulgate/clementine-flat.txt`.
Named examples so you know the density: *Haec omnia liber vitae* (Ecclus 24), *Vidi in dextera
sedentis super thronum librum scriptum intus et foris* (Apoc 5:1, opening 8972 AND 8973), *In
dextera ejus ignea lex* (Deut 33:2), *Scrutamini Scripturas* (Jn 5:39), *Ego Dominus docens te
utilia* (Is 48:17), *Et spiritus vitae erat in rotis* (Ezek 1:20). **Read the citation's address:
a verse found at a different address from Migne's citation is a finding.** Migne's text of a
verse that differs from the Clementine is marked `[var:]` — only on a column you have read at the
plate. List every quotation you checked in your report, found or not. **Treat the list of
divergences as the most valuable thing you produce.**

Non-scripture authorities (Augustine, Gregory, Jerome, Aristotle *De anima*/*Metaphysics*, Thomas,
Rashi as *Rabbi Salomon*) are rendered as printed. Do not "correct" a wrong book or homily number;
log it as a crux if it matters.

## 6. The corpus is its own control

Before appealing outside, **grep the rest of this run and the corpus** (`src/latin/*/`). A form
that looks wrong once usually appears sound elsewhere. ⚠ Frequency proves an error EXISTS, never
WHOSE it is (CLAUDE.md 8a): only the plate licenses a `[sic:]`.

## 7. ⭐ Read your own plates as you go (runbook step 4a″) — not optional

- **Scan:** Gallica `ark:/12148/bpt6k5505319w`, IIIF. User-Agent header required.
  `https://gallica.bnf.fr/iiif/ark:/12148/bpt6k5505319w/f<N>/full/full/0/native.jpg`
- **Page map: `f = (column + 1) / 2`** for an odd column (f13 = cols 25/26). Confirmed at prep on
  f6, f10, f13, f15, f17, f18, f25, f26, f30. **Read the printed corner numbers FIRST on every page.**
- ⛔ IIIF region coordinates are in the FULL image's pixel space. Fetch `/full/full/` once and
  **crop locally** (PIL; `Image.LANCZOS` 5–9× reads Migne's small type). Never let a crop cross the
  centre gutter. Delete your downloaded images when done (8 GB machine).
- **Second witness** for any single-letter `[sic:]`: `raw/scans/pl113/patrologiaecurs04migngoog.pdf`,
  **PDF page = (column + 11) / 2**, `pdftoppm -f <p> -l <p> -r 400 -png`. It is 1-bit JBIG2 — a
  symbol-substitution codec whose errors are well-formed words; never a sole witness for a letter,
  and it has both repaired and manufactured Migne's defects. Nothing stands on one witness.
- ⛔ **A hyphen at a line or column break is the FIRST hypothesis** for a doubled or split word.
- **Record every page you open, found or not found.**
- ⭐ **WATCH THE FOOT OF EVERY PAGE.** Prep was a SPOT check. 8974 already carries one lettered
  note (50B). Any other `(a)`/`(b)`/`*`/numbered note you see: transcribe it exactly into your
  PENDING-TEI-PATCHES file with page, column, key, anchor words — do not guess an illegible one.
- **Columns read at word level so far: NONE.** Prep read leaves only at survey resolution for foot
  notes and headings, and recorded nothing in `plate-reads.json`. Every column in your range is
  unread until you read it; `plate-gate.mjs` refuses a `[sic:]` or `[var:]` on an unread column.

⚑ **Known from prep, settle it at native resolution:** 8971 @0025C our twin reads *Homil. 35
Evangeliorum*; at 1400 px the plate looked like *55*. (The quotation *Temporalis vita, aeternae
vitae comparata, mors est potius dicenda quam vita* is Gregory, *Hom. in Ev.* 37.) Report what the
plate prints; do not correct Gregory.

## 8. Work-wide vocabulary — fixed now so four stints do not drift

The Burgos dispute turns on these; use them everywhere, and log any place they cannot hold.

| Latin | English |
|---|---|
| *sensus litteralis* | literal sense |
| *sensus mysticus* / *spiritualis* | mystical sense / spiritual sense |
| *allegoricus, moralis, anagogicus* | allegorical, moral, anagogical |
| *Postilla* / *Postillator* | the *Postill* / the Postillator |
| *Additiones* (the work) | the *Additions* |
| *Replicae* | the *Replies* |
| *expositio / exponere* | exposition / expound |
| *doctor* (of a theologian) | doctor |
| *Rabbi Salomon* | Rabbi Solomon (i.e. Rashi — do not substitute the name) |
| *magister in sacra pagina* | master of the sacred page |
| *Hebraica veritas* | the Hebrew truth |
| *quaestio*, *articulus*, *determinatio* | question, article, determination |

## 9. Scripture policy, false positives, dashes

Translate what Migne prints; never substitute a conventional version. Garbled type: render
literally, log the crux. Migne's own `( sic )` stands; do not stack ours. Band-letter arithmetic
proves nothing. **Em-dashes: keep them rare**; never mark or report one.

## 10. Do not stop early

Your batch is your whole range. If you find yourself writing "context budget" at chunk 2, you are
repeating a documented failure pattern — push through.

## 11. Report back

Name **every chunk translated**, every page opened at the plate **with its corner numbers**, every
scripture quotation checked (address + ✓/divergent), your `[var:]` / `[sic:]` / `[cj:]` / `[ed:]` /
`[d:]` markers with columns, any foot notes seen, vocabulary you could not hold, and candidates you
**rejected and why**. A report that lists only findings cannot be told apart from one by a stint
that never looked.
