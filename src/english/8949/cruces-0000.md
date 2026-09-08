# 8949 *Liber Exodus* — cruces, stint 0000–0004 (bands 0183A–0193C)

Chunks 0000, 0001, 0002, 0003, 0004. Plate range Gallica `bpt6k5505319w` f92–f97, all six leaves
opened, printed corner numbers read first on every one. Apparatus companions:
`data/briefs/8949-PLATE-READS-0000.json`, `data/briefs/8949-PENDING-TEI-PATCHES-0000.md`.

---

## §1 · Span count against the brief — 94 against 94, EXACT

The brief declares **94 marked spans, of which 1 open-ended**, for chunks 0000–0004.

Counted in my own Latin two ways, as the brief requires:

| chunk | italic pairs, **paragraph-bounded** | italic spans, regex | guillemets `«` | `»` |
|---|---|---|---|---|
| 0000 | 7 | 7 | 0 | 0 |
| 0001 | 22 | 22 | 0 | 0 |
| 0002 | 20 | 20 | 0 | 0 |
| 0003 | 27 | 27 | 0 | 0 |
| 0004 | 17 | 17 | 1 | 0 |
| **total** | **93** | **93** | **1** | **0** |

93 italic + 1 guillemet = **94**. The paragraph-bounded and unbounded counts **agree**, and they
agree because no paragraph in this range contains an odd number of asterisks — I checked that
rather than inferring it from the totals, since the 8950 0004–0007 precedent is a false
reconciliation of exactly this shape. The single `«` at 0192A is the work's only guillemet and it
is unclosed, as the brief states; that is Migne's own setting and was not touched.

## §2 · Marker tally

| marker | count | columns |
|---|---|---|
| `[var:]` | 8 | 0184A, 0185C, 0185D, 0188D, 0189B, 0189D, 0192D, 0193B |
| `[cj:]` | 1 | 0183A |
| `[sic:]` | 0 | — |
| `[ed:]` | 0 | — |
| `[d:]` | 0 | — |

Every marked column was opened at the plate by me. No marker in this stint stands on an unread
column, and none stands on the second witness alone.

---

## §3 · `[cj:]` — 0183A, `corporalis` where the argument requires `spiritualis`

**Migne prints** (plate-confirmed, f92 left column, 2.4× crop):

> Per corporalem enim exitum filiorum Israel de Aegypto **corporalis** noster exitus de Aegypto
> spirituali signatur.

Rendered faithfully, the English says that *our bodily going out from spiritual Egypt* is
signified — which asserts the opposite of the sentence's own structure. The whole prothema is a
catalogue of figures in which a bodily thing signifies a spiritual one, and this very clause pairs
Israel's *corporalem exitum* against *de Aegypto spirituali*: the second term must be
*spiritualis*. This clears the Pattern 18 bar (the English asserts something the author did not),
so the gloss is additive and both readings stand on the page:

`our bodily going out [cj: *corporalis*; read *spiritualis*, "our spiritual going out"]`

The word is a perfectly good Latin form, so there is nothing for a `[sic:]` to wrap, and the plate
is not defective — it is Migne's copy-text, or his compositor, saying something the argument
cannot use.

---

## §4 · Two `[sic:]` candidates DECLINED, with the evidence

Both are single-cluster orthographic variants of very common words, both are plate-confirmed as
Migne's type, and both were declined under Pattern 9 (attested medieval spellings are correct
Latin for their period; marking them buries the real defects in noise).

**0184B `divictis`** for *devictis*. Plate-confirmed verbatim at f92 right column, 3.4×:
`et divictis eis [devicto eo] discedant de terra sua`. The `di-`/`de-` prefix alternation is
standard medieval orthography. Two further reasons not to mark it: **Migne has already flagged the
place himself**, printing his own bracketed alternative `[devicto eo]` immediately after, which
does the disclosing job our marker would do (the same argument as the "Migne's own ( sic )" rule);
and the archive witness prints that bracket as *parentheses*, which is the JBIG2 copy manufacturing
a difference — Gallica is decisive that the brackets are square. Corpus control: `divict*` occurs
**once** corpus-wide (this site) against 30 `devict*`, so it is not house usage; but frequency is
not the Pattern 9 test, and the form is attested. **Rendered as ordinary English ("these being
overcome"), with `[devicto eo]` carried verbatim as the printed editorial bracket it is.**

**0185A `concientiam`** for *conscientiam*. Plate-confirmed at f93 left column, 3.2×, hyphenated
across a line as `con-` / `cientiam`, and the archive witness reads it the same way. The `sc` → `c`
simplification is a standard medieval orthographic reduction. Corpus control: `concientia*` occurs
**twice** corpus-wide against 816 `conscientia*` — again not house usage, and again not the test.
**Rendered as ordinary English ("within the conscience"), no marker.**

⚠ Both are borderline and I have recorded the counts so a later reviewer can overturn either
without re-doing the plate work. What I was not willing to do was fire a public accusation against
Migne's plate on an orthographic variant that his own century set routinely.

---

## §5 · The 7a″ collation — 8 `[var:]`, and every rejection reasoned

Collated against `sources/vulgate/clementine-flat.txt`, cited by book chapter:verse. **Every ⚠ and
⚑ entry in the brief was walked**, and so were the ✓ entries whose address I could check.

### Fired

1. **0184A · Phlp 1:24.** Migne: *Permanere autem in carne **magis** necessarium **est** propter
   vos.* Clementine: *permanere autem in carne, necessarium propter vos.* Migne adds the
   comparative. English shows it ("is more needful"), so the divergence is visible and marked.
2. **0185C · Mt 4:10.** Migne: *Vade **retro**, Satana.* Clementine: *Vade Satana.* Plate-confirmed
   at f93; `retro` is on the page. The Mt 16:23 / Old Latin form.
3. **0185D · Jr 17:11.** Migne: *Clamavit perdix, congregavit quae non peperit … in dimidio dierum
   **ejus** derelinquent **eum**, et in **novissimis suis** erit **stultus**.* Clementine: *Perdix
   fovit quae non peperit … in dimidio dierum suorum derelinquet eas, et in novissimo suo erit
   insipiens.* The most load-bearing divergence in the range: Origen's whole exposition turns on
   *congregavit* and on *relinquent eum* (`Intelligit ergo perdicem se … et quod hi, quos sine
   judicio congregavit, relinquent eum`). Plate-confirmed verbatim.
4. **0188D · Ps 44:12.** Migne: ***quia concupivit** rex **speciem** tuam.* Clementine: *Et
   concupiscet rex decorem tuum.* Perfect for future, and *speciem* for *decorem*. The tense
   matters: the gloss reads it as accomplished in the Church from the Gentiles. Plate-confirmed.
5. **0189B · Rom 10:19.** Migne: *Ego **in non gentem in** aemulationem vos **inducam** … in iram
   vos **concitabo**.* Clementine: *Ego ad aemulationem vos adducam in non gentem … in iram vos
   mittam.* Two lexical substitutions plus reordering. Plate-confirmed.
6. **0189D · Jr 9:25–26.** Migne: *Considerabo omnes praeputium circumsecantes, Aegyptios et filios
   Edom.* Clementine: *visitabo super omnem qui circumcisum habet praeputium, super Aegyptum, et
   super Juda, et super Edom.* A radically different form, and load-bearing: Theodoret's point is
   precisely that the Egyptians circumcised. Plate-confirmed.
7. **0192D · Ex 3:8.** Migne: *In terra**m** bonam et spatiosam, in terr**a** quae fluit lacte.*
   Clementine: *in terram bonam, et spatiosam, in terram quae fluit lacte et melle.* Plate-confirmed
   that the shift accusative → ablative is really on the page. Marked because **English has an
   exponent for it** ("into a good and spacious land, in a land which flows with milk"), so the
   divergence is visible to a reader rather than silently smoothed.
8. **0193B · Ex 3:22.** Migne: *et **praedabimini eos**.* Clementine: *et spoliabitis Aegyptum.*
   Different verb and different object, in the proof-text Augustine's whole *quaestio* is about.
   Plate-confirmed verbatim, italics included.

### Rejected, and why — the ⚠ entries that are innocent

- **0183B · 1Cor 10:3–4** *spiritualem* for Clementine *spiritalem* (twice). Orthographic variant of
  one word; `eamdem`/`eumdem` match exactly. Not a divergence.
- **0183B · Jo 19:36** — Migne's span lacks *enim* only because Pattern 5's *inquit* stands in its
  place (*Facta sunt haec, inquit, ut Scriptura impleretur*). Not a divergence.
- **0183A · Jo 6:59** *coelo* for *caelo*. Spelling.
- **0184A · Ex 1:10** *Venite, opprimamus eum sapienter* against Clementine *Venite, sapienter
  opprimamus eum*. Word order only, same words, same sense.
- **0184A · Ps 13:1** — the gloss recasts *Dixit insipiens* as a relative clause (*qui dixit in
  corde suo*) to make the devil the subject. The gloss's syntax, not the quotation's wording.
- **0185B · Ps 105:35** — Migne drops only the leading *et*.
- **0185C · 2Cor 11:14** *transfigurans se* (participle) for *transfigurat se*, to fit the
  governing clause. Grammatical adaptation.
- **0187A · Ex 1:17** — Migne's span omits *autem obstetrices* because his own sentence has just
  supplied it (*dicit Scriptura de his quod …*). A fragment, not a variant.
- **0188D · Ex 2:14** *Nunquid me occidere tu vis?* against *num occidere me tu vis*. Particle
  synonym plus transposition; no sense moves. Plate-confirmed as Migne's.
- **0190C · Jo 9:28** *Tu discipulus illius sis, nos discipuli Mosi* against *… nos autem Moysi
  discipuli sumus*. Elliptical abridgment of the second clause; sense identical.
- **0190C · Ex 2:14 lemma** *Timuit Moses* for *Timuit Moyses*. The name is spelt *Moses*
  throughout this work; house usage, established by its own repetitions.
- **0192A · Jo 1:27** *Cujus non sum dignus solvere corrigiam calceamenti* against *cujus ego non
  sum dignus ut solvam ejus corrigiam calceamenti*. Standard abridgment; and this is the span
  carrying the book's lone `«`, which is settled and was not reopened.
- **0192D · Ps 104:45** — Migne drops one *ejus* (*et legem requirant*). Immaterial.
- **0190D · Ex 2:23** — ⚑ **this is the entry the brief's pre-scan flagged as matching only
  elsewhere, and it earned its flag.** Migne prints *Post multum vero **temporis***; the Clementine
  prints *Post multum vero **tempore***. That single word is why the phrase matched Mt 25:19 and
  Tob 1:18 and not its own verse. **No marker fired**, for two reasons: no sense turns on it and
  English cannot show it ("after much time" either way); and *post multum … tempore* is not sound
  Latin, while Migne's partitive genitive *multum temporis* is — so by the brief's own comparand
  test the doubtful reading is on **our** side of the collation. Plate-confirmed that Migne reads
  *temporis*. ⚠ **Candidate for the comparand-defects list**, offered but not asserted: unlike
  `cornonabit`, *tempore* here may well be the Clementine's genuine (if awkward) text rather than a
  slip in Tweedale's file, so I have not added it to that list myself.

---

## §6 · Readings rendered literally, no marker (Pattern 7 / Pattern 9)

- **0183A `et Hebraeorum liberationum`** — plate-confirmed genitive plural in a run of accusatives
  (*Per typici agni immolationem, et Hebraeorum liberationum, veri Agni passio*). A real form in
  the wrong case; English has an exponent ("and of the deliverances of the Hebrews"), so rendering
  it literally leaves the oddity visible. No `[sic:]` (nothing to carry), no `[cj:]` (nothing false
  is asserted).
- **0192B `tanto delectabiliter … quanto`** — plate-confirmed, comma included. Gregory's text has
  the comparative *delectabilius*. Declined as a `[cj:]`: the correlative still carries in English
  ("so delightfully … in proportion as"), and no false assertion results. Pattern 18a's census is
  closed and this is well below its bar.
- **0190D `etc`** — the plate prints it with **no** full stop at a line end. Pattern 8: the mark was
  not supplied, and the English prints `etc` bare. This will look like a typo to a reader; it is
  the plate.
- **0189A `tibin`** — Origen's transliterated θῖβιν, the ark of bulrushes. Kept as printed and left
  in the English as a technical term the text itself defines two clauses later (*Tibin ergo est
  tegminis genus ex papyro contextum*). Not a defect.
- **0186A / 0191B `admistis` / `admistus`** — attested syncopated forms of *admisc-*; used twice in
  the range, so house usage. Pattern 9.
- **0188C `Salphaat`** for *Salphaad*. Proper-name orthography; left as printed.

---

## §7 · Recovered Hebrew and the book-title banner — carried, not touched

Both were settled before this stint and I confirmed each on the plate in passing rather than
re-adjudicating it.

- **Chunk 0000 banner.** Confirmed on f92: `Hebraice VEELLE SEMOTH ( ואלה שמות ), id est, HAEC SUNT
  NOMINA; Graece ΕΞΟΔΟΣ, id est EXITUS.` is set as a display line above and across the PROTHEMATA
  head, with LIBER above it. Translated as the display line it is; the Hebrew and the Greek carried
  **verbatim**, Migne's transliterations Englished around them.
- **0183B ואלה שמות** and **0193A אהיה** carried verbatim into the English, unpointed as Migne sets
  them, with the spacing of the Latin. The transliterations beside them (*Veelle Semoth*, *ehieh*)
  are what the English renders. No marker fired on either, per the brief.
- **0183B** also carries Migne's Greek `ἒξοδος` inline; carried verbatim, and the three Latin
  equivalents beside it (*exodus, exitus* / *egressus*) stay Latin because the sentence **names**
  them as the Latin words rather than using them.

---

## §8 · Structural verification run before shipping

`node scripts/verify-english.mjs 8949` — **zero errors on 0000–0004**; the only failures reported
are the 39 chunks belonging to peer stints, which are not yet written. Additionally checked by
hand, per chunk: frontmatter byte-identical to the Latin twin; column anchors identical in count
**and order**; `[n:]` contents identical in count **and order** (no note translated to `[nt:]` in
this range — every one is a citation, none is editorial prose); one `## ` head per chunk, with
`(cont.)` at 0002 left untranslated; guillemet parity 1 `«` / 0 `»`, matching the Latin exactly.
English/Latin word ratios 1.48–1.55, inside the expected ~1.5× band. Em-dashes: 1 in five chunks
(0.2/chunk against a corpus median of 5.3).
