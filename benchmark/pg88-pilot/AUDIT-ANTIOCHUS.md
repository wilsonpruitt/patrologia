# Audit: Antiochus, Epistula ad Eustathius (PG 89, 1421–1428)

Audited 2026-08-05 against the plate re-rendered from `raw/pg089/089.pdf` at 600 dpi
(pdftoppm, pdf pages 717–720), read whole-page and in high-resolution crops. Shipped
files audited: `src/pg-greek-ocr/antiochus-epistula-ad-eustathium/{1421,1424,1425,1428}.md`
plus `TITLE.md`.

## Verdict

**GREEK TEXT: CLEAN — no lost Greek body text found.**
**APPARATUS: DEFECTS FOUND — 2 footnotes truncated at the crop boundary, 1 footnote absent.**

No line of Greek body text on any of the four leaves is set wider than its column
or run across the full page width. Every Greek body line on all four leaves is
present in the shipped files, opening included, with no failed hyphen and no
mid-clause jump. The one piece of **full-width Greek** on these leaves — the centred
title block on leaf 727 — was found, and it is captured complete in `TITLE.md`.

The losses that do exist are all in Migne's **Latin apparatus** (footnotes), and they
are the crop defect exactly as described: cut where the column crop's edge fell, with
what survives still reading as fluent Latin.

## Per leaf

### leaf 727 (col 1421) — Greek LEFT

**Wide / full-width lines found: 4 sites.**

1. **The title block — FULL-WIDTH GREEK, centred across the gutter** (this is the only
   full-width Greek on any of the four leaves):

   > ΕΠΙΣΤΟΛΗ
   > ΑΝΤΙΟΧΟΥ ΜΟΝΑΧΟΥ ΤΗΣ ΛΑΥΡΑΣ ΤΟΥ ΑΒΒΑ ΣΑΒΑ
   > ΠΡΟΣ ΕΥΣΤΑΘΙΟΝ ΗΓΟΥΜΕΝΟΝ ΜΟΝΗΣ ΑΤΤΑΛΙΝΗΣ, ΠΟΛΕΩΣ ΑΓΚΥΡΑΣ ΤΗΣ ΓΑΛΑΤΙΑΣ,
   > ΠΕΡΙ ΤΩΝ ΕΚΕΙΣΕ ΑΓΙΩΝ ΠΑΤΕΡΩΝ ΕΝ Ω ΚΑΙ ΚΕΦΑΛΑΙΑ ΡΛʹ,
   > ΚΑΙ ΠΡΟΣΕΥΧΗ ΕΞΟΜΟΛΟΓΗΣΕΩΣ.

   **Present in shipped text? YES — complete and verbatim in `TITLE.md`**, which
   explicitly records that it spans the gutter and is in neither column crop. The
   crop for p717 (`raw/pg089/crops.json`: `gutter: 1238`, `"ok": false`) would have
   halved every one of these lines; someone caught it. Nothing missing.

2. Full-width **Latin** editorial note above the title rule (mirror case, no Greek at risk):
   *"Hanc narrationem mire corruptam saepe divinando Latine reddidimus."*

3. Full-width **Latin** source line under the Latin title (mirror case):
   *"(Ducaeus, Supplem. ad Biblioth. Patrum. Paris. 1624, tom. I, p. 109.)"*

4. **Full-width Latin footnote at the foot — TRUNCATED IN THE SHIPPED FILE.**
   The plate reads, in full:

   > \* *Lauram neoterici Græci insigne dicunt monasterium, pro magna hominum copia qui devotionis ergo instar multarum aquarum eo confluunt.*

   `1421.md` line 38 ships:

   > `[fn:* Lauram neoterici Graeci insigne dicunt monaste[rium], instar multarum aquarum eo confluunt.]`

   **MISSING: `pro magna hominum copia qui devotionis ergo`** — six words, dropped
   between "monasterium," and "instar", i.e. exactly at the point where the column
   crop's right edge fell (the surviving `monaste[rium]` bracket is the OCR's own
   record of the cut). What remains reads as fluent Latin — *"monasterium, instar
   multarum aquarum eo confluunt"* — which is why it passed. The lost clause is the
   reason for the simile: the crowd of men who flock there out of devotion.

**Greek body: present in full.** All 32 Greek body lines (Ἐπειδήπερ γεγράφηκάς μοι …
πρότερον ἐν βραχεῖ σημᾶναι ὑμῖν) verified line-by-line against the plate. Uniform left
margin throughout, no outdent, no line crossing the gutter. Matches `1421.md` lines 5–36
exactly.

**Other suspected losses:** none in the Greek. See "Anchors" below.

### leaf 728 (col 1424) — Greek RIGHT

**Wide / full-width lines found: 2 — both LATIN (the mirror case).** Where the Latin
of col 1423 outran the Greek, Migne closed the Greek paragraph and set the Latin tail
across the full page width:

> *quo vitam monasticam semel fuerant amplexati; variis etiam virtutibus emicabant, terrestres scilicet*
> *angeli et cœlestes homines. Quapropter hunc finem sunt adepti, et victoriæ præmium sunt consecuti*

**Costs us no Greek.** These are the two lines the `1424.md` header already flags as
"two lines of LATIN from the facing col 1423 [that] bleed into this crop after
ἐκομίσαντο." — that identification is **correct**, verified on the plate. The Greek
paragraph genuinely ends at `…ἀπηνέγκαντο, καὶ τὸ βραβεῖον τῆς νίκης ἐκομίσαντο.`
(shipped line 27), and the next Greek paragraph resumes at `Ἐπελθόντων γὰρ τῶν
Ἰσμαηλιτῶν…` (shipped line 29). Nothing is elided between them.

**Greek body: present in full.** All 56 Greek lines verified against the plate in six
overlapping bands. Matches `1424.md` lines 8–62 exactly, including the two column
joins:
- into 1424 from 1421: `…σημᾶναι ὑμῖν | τὰ περὶ αὐτῶν, εἶθ' οὕτως καθυποτάξαι…` — continuous.
- out of 1424 into 1425: `…καὶ ὡς ὁλοκάρπωμα θυσίας προσεδέξατο αὐτοὺς, καὶ | ἐν καιρῷ ἐπισκοπῆς αὐτῶν ἀναλάμψουσι.» ` — continuous.

**Other suspected losses: the footnote line is absent from the shipped file.** The
plate's full-width footnote at the foot of leaf 728 reads:

> ¹ *Philipp. I, 23.*  ² *Τὰ ἅγια λείψανα, sanctas reliquias.*

`1424.md` records only that a stray `quias.` (= reli|quias) appeared in the crop and was
excluded; the footnote itself is nowhere in the shipped file. Note ² contains **Greek**
(`Τὰ ἅγια λείψανα`) and note ¹ is the scripture citation for *ἀναλῦσαι καὶ σὺν Χριστῷ
εἶναι* (shipped lines 42–43) — a `[n:]` citation that hard rule 9 would index.

### leaf 729 (col 1425) — Greek LEFT

**Wide / full-width lines found: 1 — the footnote block, and it is TRUNCATED IN THE
SHIPPED FILE.** No body line on this leaf is set wider than its column; both columns run
clean full length. The footnote block at the foot spans the full page width in two lines:

> ³ *Isa. LVII, 1.*  ⁴ *Gr. quasi integram oblationem hostiæ.*  ⁵ *Sap. III, 4-6.*  ⁶ *Gr Via afflictionibus septa.*
> ⁷ *Matth. VII, 14.*  ⁸ *Act. XIV, 21.*  ⁹ *Cœnobiticæ.*

`1425.md` line 64 ships:

> `[fn: Isa. LVII, 1. | Gr. quasi integram oblationem | Matth. VII, 14. | Act. XIV, 21. | Coenobiticae.]`

**MISSING, all from the right half of the first footnote line — i.e. past the crop edge:**
- **`hostiæ.`** (the tail of note ⁴; the shipped note stops at "oblationem")
- **`Sap. III, 4-6.`** (note ⁵ **entirely**)
- **`Gr Via afflictionibus septa.`** (note ⁶ **entirely**)

Notes ⁷–⁹ survive because they sit on the second footnote line, which is short and ends
left of the crop edge. This is the same defect as leaf 727 and the same signature: the
surviving `Gr. quasi integram oblationem` reads as a complete gloss, so nothing looked wrong.

**This one has downstream consequence.** Note ⁵ is Migne's citation for the Wisdom
quotation that runs across the 1424/1425 boundary (`«Ψυχαὶ δικαίων ἐν χειρὶ Κυρίου…
ἐν καιρῷ ἐπισκοπῆς αὐτῶν ἀναλάμψουσι.»`). Under hard rule 9 that `[n:]` citation should
be in `data/index/pg/<idno>.json` under **scripture**; with the footnote truncated it is
not there. Note ⁶ is a Greek-vs-Latin variant note on the Matt 7:14 quotation.

**Greek body: present in full.** All 55 Greek lines verified against the plate in seven
overlapping bands. Matches `1425.md` lines 7–62 exactly. The `[A]` `[B]` `[C]` `[D]`
marginal anchors are correctly preserved and correctly placed. Column join out of 1425
into 1428 (`…σπουδῇ τοῦ προλεχθέντος ὁσιωτάτου Πατρὸς ἡμῶν | Μοδέστου οἰκοῦνται…`)
is continuous on the plate.

Orthographic note, not a loss: the plate prints `Παλαστίνη` where `1425.md` line 36 has
`Παλαστίνῃ`.

### leaf 730 (col 1428) — Greek RIGHT

**Wide / full-width lines found: 1 block — LATIN (the mirror case).** The Greek ends at
`Ἀμήν.` and the Latin, which had lagged, then runs across the full page width to finish
the letter:

> *pagarit in effusam et numerosam amplitudinem. Numerus proinde sanctorum Patrum, quos tyrannica sustulit impressio, est XLIV. Horum memoria Maio mense celebratur, 15 mensis die. Gratia item Christi…* [and on to] *…Ipsum addecet gloria in sæcula sæculorum. Amen.*

**Costs us no Greek** — this Latin is catching up with Greek already printed at col 1425
(`Ὁ δὲ ἀριθμὸς τῶν ἀναιρεθέντων Πατέρων ἐστὶν ὀνομάτων τεσσαράκοντα τεσσάρων.
Ἐπιτελεῖται δὲ ἡ μνήμη αὐτῶν μηνὶ Μαΐῳ πεντεκαιδεκάτῃ.`). Nothing in the full-width
block is Greek that we lack.

**Greek body: present in full.** All 23 Greek lines verified against the plate. Matches
`1428.md` lines 8–30 exactly. The header's cut at `Ἀμήν.` is **correct**: below it the
column carries the Latin tail, then `ΑΝΤΙΟΧΟΥ ΜΟΝΑΧΟΥ ΠΡΟΘΕΩΡΙΑ` (the next work).
The footnotes at the foot of this leaf (`¹⁰ Cant. VI, 7.` / `¹¹ Dignitatem attendit, non
item numerum, quod satis est homœosi.`) belong to the Prologus, not to this letter, and
their absence from `1428.md` is right.

## Separate finding: column anchors not preserved on two leaves

Hard rule 1 makes Migne's marginal subdivision letters column anchors. The plate carries
**A B C D** on leaf 727 and **A B C D** on leaf 728, and **A B** on leaf 730.

- `1425.md` records `[A] [B] [C] [D]` — correct.
- `1428.md` records `[A] [B]` — correct.
- **`1421.md` records none** (plate has A, B, C, D).
- **`1424.md` records none** (plate has A, B, C, D).

No prose is lost by this, but the anchors are missing for half the work, so anchor
continuity across 1421→1424→1425→1428 does not validate.

## What to fix

1. `1421.md` footnote — restore `pro magna hominum copia qui devotionis ergo`.
2. `1425.md` footnote — restore `hostiae.`, `Sap. III, 4-6.`, `Gr Via afflictionibus septa.`
   Then re-run `scripts/index-work.mjs` so the Wisdom citation enters the scripture index.
3. `1424.md` — add the missing footnote (`Philipp. I, 23.` / `Τὰ ἅγια λείψανα, sanctas reliquias.`).
4. `1421.md`, `1424.md` — restore the `[A]/[B]/[C]/[D]` anchors from the plate.
5. The published English at
   `https://migne.app/pg/89/the-letter-of-antiochus-the-monk-to-eustathius/`
   should be checked for whether it carries the truncated footnote 1 (`monasterium,
   instar multarum aquarum eo confluunt`) — if it does, the sentence is missing its
   explanatory clause and needs re-rendering. **The letter's body English is not
   affected**: no Greek was lost.

---

## Follow-up: the scripture-index gap is wider than the footnote losses (2026-08-05)

The audit flagged that Migne's note 5 (`Sap. III, 4-6`) should be in the
scripture index and is not. Checking that turned up a larger, purely mechanical
cause.

**The English carries all four notes** — `[n: Isa. LVII, 1]`, `[n: Sap. III, 4-6]`,
`[n: Matth. VII, 14]`, `[n: Act. XIV, 21]` — so they reached the published page
and a reader sees them. **None of the four is in the index**:
`data/index/pg/antiochus-epistula-ad-eustathium.json` carries `"scripture": []`.

The cause is not a lost footnote. `scripts/index-work-pg.mjs` **hardcodes an
empty scripture layer**, with a note saying Calfa transcriptions carry no
citation apparatus so the layer is deferred. That was true of every PG work when
it was written. **Antiochus is the first PG work sourced from our own OCR of the
plate, and it does carry Migne's notes** — so the indexer emits an empty layer
for a work with four citations, and the site-wide scripture index (rule 9) is
missing them.

This is the same shape of defect as the crop bug: an assumption that held for
every case seen so far, quietly wrong for the first case that differs, and
invisible because the output looks well-formed.

**Fix**: teach `index-work-pg.mjs` to harvest `[n:]` from the English exactly as
`index-work.mjs` does. The reference parser lives inside the PL indexer and
should be lifted into `scripts/lib/` so both use one implementation rather than
two that can drift.

**Not yet fixed. Requires re-indexing and a deploy.**

## Summary of what this audit found

| Finding | Severity |
|---|---|
| Greek **body** text, all four columns | ✅ **clean** — every line present, openings included |
| The English used by church-in-palestine ch. 14 | ✅ **safe** |
| col 1421 footnote — 6 Latin words lost | apparatus |
| col 1424 footnote — 2 notes absent entirely | apparatus |
| col 1425 footnote — 1 word + 2 notes lost | apparatus |
| `[A]`–`[D]` marginal anchors absent in 1421, 1424 | **hard rule 1** — citation addresses |
| All 4 scripture citations missing from the index | **hard rule 9** — indexer hardcodes `[]` |

The crop defect did bite this work — but in the **apparatus**, not the body.
