# 8382 Egbert of York, *Poenitentiale* (PL 89) — common stint brief

Every stint in this run reads this file. Your launch message names your stint tag, chunk range and
plate pages; everything below is the same for all three stints.

**The run:** 11 chunks / 13,105 Latin words, cols 0401A–0436A. **Canon law, prose. Not a
lemma-and-gloss commentary.** A confessor's manual: a PRAEFATIO (the priest's address to the
penitent), then Book I in two parts, Books II–III, a Book IV that says it is a digest of the first
three, and a closing excerpt *Ex ejusdem Egberti Poenitentialis libro secundo* (canons I–XXXV, col.
431 onward).

⚑ **What this Latin is.** Migne reprints Mansi, who reprints Wilkins, and Migne's own first foot
note (restored, chunk 0000) says the manuscripts title it as chapters that *Egcbyrhtus archiepiscopus
Eboracensis transtulit ex Latino in Anglicum*. The Latin here is an early-modern Latin version of
the Old English penitential. **So it carries English idiom in Latin dress** (*hiemes* for years,
*abstineat ab albo*, *die Solis*). Translate the Latin Migne prints. Do not reconstruct the Old
English, and do not smooth a Latin Anglicism into the Latin idiom it "should" have been.

| stint | chunks | cols | archive PDF pages |
|---|---|---|---|
| A | 0000–0003 | 0401A–0414D | 207–213 |
| B | 0004–0007 | 0415A–0428B | 214–220 |
| C | 0008–0010 | 0428C–0436A | 220–224 |

## 1. Read these first, in this order

1. `translation-style.md` — the frozen register rulebook. Follow it exactly. In particular:
   7a (negation), 7a″ (scripture conformed), patterns 9 and 11–13 (defect markers), 15 (`[nt:]`),
   19 (Migne's own apparatus is not ours).
2. `translation-runbook.md`, section **"Agent prompt template"**, especially the numbered
   **"Known false positives — do NOT report these"** list. Read it before you mark anything.
3. Style anchor: `src/latin/9741/0000.md` + `src/english/9741/0000.md` (Abbo's *Canones*, also
   canon law: format, markers, register).
4. `src/english/8949/0000.md` top lines: how a book-title preamble line is rendered.
5. Any `src/english/8382/cruces-*.md` a peer has already written.

## 2. Output — four kinds of file, all yours alone

- **English chunks:** `src/english/8382/NNNN.md`, same filenames as the Latin. Copy each Latin
  chunk's frontmatter **verbatim**; invent no fields.
- **Cruces:** `src/english/8382/cruces-<yourFirstChunk>.md` (e.g. `cruces-0004.md`), never
  `cruces.md`. Column + reading + your note, per crux.
- **Plate reads:** `data/briefs/8382-PLATE-READS-<yourFirstChunk>.json`, same shape as
  `data/briefs/8957-PLATE-READS-0000.json`. Never `data/plate-reads.json` itself.
- **Pending TEI patches:** `data/briefs/8382-PENDING-TEI-PATCHES-<yourFirstChunk>.md`, format of
  `data/briefs/8957-PENDING-TEI-PATCHES-0000.md`. **The English renders the plate; this file is how
  the Latin catches up.** Do not edit `sources/pl/tei/*` or `data/tei-patches/*` yourself.

**A stint that writes English and no apparatus passes `verify-english` in silence.** That has
happened. Write all four, even when a file only says "none".

## 3. Sacred markers (violating any = the work fails verification)

- Column anchors `[0409C]`, and the bare `[0401]`, `[0411]`, `[0423]`, `[0431]`: **verbatim, in
  order, in place.** Count them against the frontmatter. The column sequence goes backwards in
  places (`0402B 0401 0401C`, `0412C 0411 0412D`). That is Migne's two-column layout around mid-page
  headings, known false positive 1. Report nothing about it.
- Notes `[n: …]`: verbatim, untranslated, same count and order (only chunks 0009 and 0010 have any).
- ⭐ **Migne's recovered foot notes `[cn: a | …]`: six of them, restored at the plate on
  2026-09-19.** They are LATIN-ONLY. **The English carries a translated `[nt: …]` at exactly the same
  point, and no `[cn:]` at all** (`verify-english` rejects a `[cn:]` in an English chunk and pairs
  each letter `[cn:]` with an `[nt:]` by position). Translate the note's words. Keep Migne's
  attribution (*WILKINS.*, *MANSI.*) as "Wilkins." / "Mansi." at the end of the note.
  - A, chunk 0000: on the **title banner**, between *ARCHIEPISCOPI* and *POENITENTIALE*. Your English
    banner line carries the `[nt:]` at the same point.
  - A, chunk 0002 @0409C: after *urit*: *In domo vertendum est. WILKINS.* This is Wilkins saying
    that the Old English behind *in loco* should be rendered "in the house". **Your text still
    translates *in loco* as printed.** The note is where the reader learns the other reading.
  - C, chunk 0009 @0431: **inside the `## ` head**, after *SUB TITULO*. The `[nt:]` goes inside your
    English `## ` head line at the same point. Keep the head on one line.
  - C, chunk 0009 @0433A (*andronas*), @0433D (*saepius proprio*); chunk 0010 @0434B
    (*excitavit.*).
- ⭐ **Book-title preamble (stint A).** Chunk 0000 opens with two lines ABOVE the first `## ` head:
  Migne's title and his source line, dropped by Corpus Corporum and restored from the plate.
  Translate them as plain lines in the same place, keeping Migne's capitals: "THE PENITENTIAL OF
  SAINT EGBERT, ARCHBISHOP OF YORK." They are not `## ` heads; do not make them heads. *(Mansi,
  Conc. Collect. tom. XII.)* is a citation: keep it as printed.
- `## ` heads: translate them and keep the structure 1:1. Never translate `(cont.)`.
- Italics `*…*`: preserve.
- Defect markers, English-only: `[d:]`, `[sic:]`, `[ed:]`, `[var:]`, `[cj:]`. Read patterns 11–13
  and 7a″ first.

## 4. Negation fidelity — `translation-style.md` 7a

Every `non`, `nec`, `neque`, `nisi`, `haud`, `nunquam`, `nullus`, `nihil`, `absque` the Latin prints
appears in your English, and none appears that the Latin does not print, **including when that
makes the sentence contradict itself.** Never translate a word as its opposite to rescue a sentence
that will not construe; render it closely and log the crux. ⚠ **A penitential is exactly where this
bites.** A tariff missing its *non*, or an exception clause (*nisi*, *exceptis diebus Solis*,
*si hoc nesciat*) turned round, reverses a sentence of law and still reads like law. Watch paired
tariffs that contradict their neighbour (*si sciens … si nesciens*), and watch the numbers too:
a sentence of *septem annos* is not *septem dies*.

## 5. 7a″ — scripture, and the divergence list is a DELIVERABLE

Scripture is sparse here, which makes each quotation matter more. Known sites: chunk 0009 *Hospes
fui, et non recepistis me* (Matt. 25), *Si autem non audierit, sit nobis sicut gentilis et
publicanus* (Matt. 18); chunk 0010 *Perdes omnes qui loquuntur mendacium* (Ps. 5), *De omni verbo
otioso …* (Matt. 12, Migne prints *Matth.* I); *Estote sancti, quia ego Dominus Deus vester sum
sanctus* (Lev. 19/1 Pet. 1), stint B; *Si munus offeras ad altare Dei …* (Matt. 5), stint B;
*Nunc omnis grex meus …* (Ezek. 34), stint B; *Verum est quod tibi dico, nunc hodie tu eris mecum
in Patris mei regno* (Luke 23:43), stint C. Find the rest yourself: italics and *dicit/scriptum est*
usually mark them. Phrase-search each against `sources/vulgate/clementine-flat.txt`. ⚠ **This Latin
is a back-translation from Old English, so many "quotations" will be paraphrase, not Vulgate.**
Luke 23:43's *in Patris mei regno* is not Vulgate at all. Do not `[var:]` a paraphrase. `[var:]`
is for a verse Migne quotes AS a quotation whose words diverge. Log the paraphrase cases in cruces,
briefly, so the decision is visible. **Read the citation's address: a verse found at a different
address from Migne's citation is a finding.** List every quotation you checked in your report.

Authorities (*Theodorus*, *Basilius*, *Gregorius*, *Isidorus*, *Augustinus*, *Hieronymus*,
*Brunonis regulae*, the *Poenitentiale* cited within itself) are rendered as printed. Do not
correct them.

## 6. The corpus is its own control

Before appealing outside, **grep the rest of this work and the corpus** (`src/latin/*/`). A form
that looks wrong once usually appears sound elsewhere. ⚠ Frequency proves an error EXISTS, never
WHOSE it is (CLAUDE.md 8a): only the plate licenses a `[sic:]`.

## 7. ⭐ Read your own plates as you go (runbook step 4a″) — not optional

- **Scan:** `raw/scans/pl089/patrologiaecurs74unkngoog.pdf` (on disk; archive.org's catalogue calls
  it Augustine, it is PL 89). `pdftoppm -f <p> -l <p> -r 300 -png <pdf> <scratch>/p` then crop
  locally with PIL. Never let a crop cross the centre gutter. 300 dpi reads the text, go to 400 for a
  single letter. Delete your renders when done (8 GB machine).
- **Page map: PDF page = (odd column + 13) / 2.** Calibrated at prep: p.207 = 401/402, p.210 =
  407/408, p.211 = 409/410, p.222 = 431/432, p.223 = 433/434. **Read the printed corner numbers
  FIRST on every page.**
- **There is NO second witness on disk.** So for a single-letter or single-word defect (`[sic:]`
  class), **do not fire the marker on this copy alone.** Log it in cruces as `single-witness`
  with what the plate shows. CLAUDE.md: nothing stands on one witness, in either direction.
  `[var:]` (a quoted verse whose WORDS differ) may be fired once the column is read.
- ⛔ **A hyphen at a line or column break is the FIRST hypothesis** for a doubled or split word.
- **Where the plate and our TEI differ and the plate is sound, the English follows the plate**, and
  the difference goes in your PENDING-TEI-PATCHES file (find/replace + why + page).
- **Record every page you open, found or not found**, with corner numbers.
- **Foot notes are already done:** prep swept every page foot 207–224 and recovered the six above.
  If you see a foot note that is NOT one of those six, report it. Do not add it yourself.
- **Columns read at word level so far: NONE.** Every column in your range is unread until you read
  it; `plate-gate.mjs` refuses a `[sic:]` or `[var:]` on an unread column.
- ⚑ **Known from prep (stint A, @0409C):** our TEI *frumentum*; the plate sets *fre-|mentum* across
  a line break (p. 211, left column, ~line 26). It may be a worn *u*. Settle it at 400 dpi if you
  can. Either way it is `single-witness`: crux only, no `[sic:]`.
- ⚑ **Known from prep (stint C, @0434B):** plate *excitavit,* where our TEI has *excitavit.*, a
  pending TEI patch.

## 8. Work-wide vocabulary — fixed now so three stints do not drift

| Latin | English |
|---|---|
| *jejunet* | let him fast (her, where the subject is a woman) |
| *poenitentiam agat* | let him do penance |
| *poenitentia*, *poenitens* | penance, penitent |
| *confessarius* | confessor |
| *sacerdos* | priest |
| *presbyter* | presbyter (the Abbo anchor's convention; *episcopus, presbyter, diaconus* = bishop, presbyter, deacon) |
| *hiems, hiemes* | winter, winters (the Old English year-count; do NOT normalize to "years"; *annus* = year) |
| *quadragesima* (the fast) | Lent; *tres quadragesimas* = three Lents (the three forty-day fasts) |
| *quadragesimalis* | Lenten |
| *in pane et aqua* | on bread and water |
| *ad Nonam*, *ad Vesperam* | until None, until Vespers |
| *dies Solis* / *dominicus* | Sunday / the Lord's day |
| *dies Mercurii et Veneris* | Wednesdays and Fridays |
| *ab albo abstinere* | abstain from white food (render literally; one crux explaining "white" = dairy and eggs) |
| *jus canonicum* / *jus episcopale* / *jus regium* | canon law / episcopal law / the king's law |
| *ordo* (clerical) | order; *perdat ordinem suum* = let him lose his order |
| *psalterium*, *psalmus* | psalter, psalm |
| *solidus*, *obolus* | solidus (pl. solidi), obolus |
| *hebdomada*, *septimana* | week (both) |
| *legitimus* (fast) | lawful; *jejunia legalia* = the lawful fasts |

## 9. Scripture policy, false positives, dashes

Translate what Migne prints; never substitute a conventional version. Garbled type: render it
literally and log the crux. Migne's own `( sic )` stands; do not stack ours. Band-letter arithmetic
proves nothing. **Em-dashes: keep them rare**; never mark or report one. Sexual and bodily matter is
the substance of a penitential. Translate it plainly and exactly, neither euphemized nor heightened.

## 10. Do not stop early

Your batch is your whole range. If you find yourself writing "context budget" at chunk 2, you are
repeating a documented failure pattern. Push through.

## 11. Before you finish

Run `node scripts/verify-english.mjs 8382`. It will complain about chunks that are not yours and
not yet written; **your own chunks must be clean.**

## 12. Report back

Name **every chunk translated**, every page opened at the plate **with its corner numbers**, every
scripture quotation checked (address + ✓/divergent/paraphrase), your `[var:]` / `[sic:]` / `[cj:]` /
`[ed:]` / `[d:]` markers with columns, foot notes seen, vocabulary you could not hold, and candidates
you **rejected and why**. A report that lists only findings cannot be told apart from one by a stint
that never looked.
