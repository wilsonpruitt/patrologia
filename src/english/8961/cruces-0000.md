# 8961 *Liber Leviticus* — cruces, chunks 0000–0004 (cols 0295D–0308D)

*Glossa ordinaria* on Leviticus, Anselm of Laon and his school. PL 113. Stint file — the
orchestrator merges this with the peers' files.

**Plate reads:** every column in this range was collated word for word against Gallica
ark:/12148/bpt6k5505319w, leaves **f148–f154**, page map calibrated on the printed corner
numbers of f148 (295/296), f150 (299), f151 (301), f152 (303), f154 (307/308). Two columns
(0299–0300, 0301–0302) were additionally corroborated on the on-disk archive.org PDF, pp.
155–156, whose corners read 299/300. Recorded in `data/briefs/8961-PLATE-READS-0000.json`.

**Lemma count:** 179 marked spans in the Latin of chunks 0000–0004 (all italic; this book uses
**no guillemets** in this range), paragraph-bounded count identical to the raw count, and equal to
the brief's 179. No mis-split.

---

## Press variants — two printings differ, both clean, NO marker fired

Both are the same shape and both were found by putting the two witnesses side by side. In each the
Gallica printing (our TEI's exemplar) carries a defective form and the archive.org printing carries
the correct one. **There is nobody to accuse**, so no `[sic:]`; the English renders the sense, which
is the same under either reading, and the fact is recorded here.

- **0301C** — Gen 46:26 lemma. Gallica prints ***ingessae*** (*Cunctae animae quae ingessae sunt cum
  Jacob in Aegyptum*); the archive prints **ingressae**, which is also the Clementine. Verified at 3×
  on Gallica and 3× on the archive; the Gallica form shows no r-stroke at all. Rendered "that went in."
  ⚑ Note against the jbig2 caution: jbig2 SUBSTITUTES a symbol, it does not INSERT one, so a
  well-formed *r* on the archive where Gallica has none is unlikely to be a codec artifact.
- **0301D** — Gallica prints ***occuli*** (*sanantur occuli ex infirmitate lacrymantes*); the archive
  prints **oculi**. The same sentence's next clause prints *oculos* correctly on both. Rendered "eyes."

## `[sic:]` — one, confirmed on BOTH printings

- **0300A** — ***trangressus*** for *transgressus* (*Si enim promissionem suam trangressus fuerit*).
  A non-word. Read on Gallica f150 and on archive p.155; both print it. Marked
  `transgressed [sic: *trangressus*]`, the sense rendered beside the marker per the 2026-09-05
  amendment to Pattern 7.

## `[var: …]` — Migne's scripture against the Clementine (15 fired)

Every one rests on a collated column, cited book chapter:verse against
`sources/vulgate/clementine-flat.txt`.

| col | lemma as Migne prints it | Clementine | why it is material |
|---|---|---|---|
| 0297C | *Quae sunt **secundum** allegoriam dicta* | Gal 4:24 *per allegoriam* | the preceding clause is *quae **secundum** historiam sunt*; the substitution is the argument's own hinge word |
| 0297D | *Dedi eis **mandata** non bona … in quibus non **vivant*** | Ez 20:25 *praecepta non bona … non **vivent*** | v.11 two lines earlier prints *praecepta mea*; Migne's *mandata* breaks the verbal contrast the gloss is built on, and the gloss then expounds *vivant* / *non vivant* as printed |
| 0297D | ***Scio** quod populus iste durae cervicis sit* | Ex 32:9 *Cerno* | lexical substitution in a proof-text |
| 0300B | *Qui enim **mundus** est, non indiget nisi ut pedes lavet* | Jn 13:10 *Qui **lotus** est* | the verse turns on *washed*; Migne's *mundus* pre-empts the second half of the same sentence (*sed est mundus totus*) |
| 0300C | *ecce qui tollit **peccata** mundi* | Jn 1:29 *peccatum* (sing.) | number, and the singular is the doctrinally weighted form |
| 0301A | *Super quem videris Spiritum descendentem sicut columbam, **hic est Filius meus*** | Jn 1:33 *et manentem super eum, hic est qui baptizat in Spiritu Sancto* | the clause is swapped for the baptismal voice of Mt 3:17; the gloss adduces it to prove *Columba Spiritum sanctum significat* |
| 0301D | *Orationes tuae et eleemosynae tuae ascenderunt **ad Dominum*** | Acts 10:4 *ascenderunt in memoriam in conspectu Dei* | a whole clause replaced |
| 0302B | *Credere enim oportet accedentem ad Deum, **et quod non est ex fide, peccatum est*** | Heb 11:6 continues *quia est*; the second clause is Rom 14:23 | two verses spliced, and Heb 11:6 is cut mid-sentence |
| 0303D–0304A | *Sicut **vester poeta dixit**: **hujus** et genus sumus* | Acts 17:28 *sicut et quidam vestrum poetarum dixerunt: **ipsius** enim et genus sumus* | singular poet for plural poets; *hujus* for *ipsius* |
| 0305D | *Qui **nescibat** peccatum, pro nobis peccatum **factus est*** | 2 Cor 5:21 *eum qui **non noverat** peccatum pro nobis peccatum **fecit*** | Migne's passive changes the subject: Christ *was made* sin, rather than God *made* him sin |
| 0306B | ***Mundus** ego sum a sanguine justi hujus* | Mt 27:24 *Innocens ego sum* | lexical substitution — and *mundus* is the same word Migne substituted at 0300B, in a different quotation |
| 0307C | *Nobis autem **unus est Deus Jesus Christus** per quem omnia* | 1 Cor 8:6 *unus Deus Pater ex quo omnia … et unus Dominus Iesus Christus per quem omnia* | the Vulgate's two clauses are collapsed into one; the gloss is arguing precisely against dividing Christ, so the collapsed form is load-bearing |
| 0308A | *Pater, **ignosce** illis **quia nesciunt** quid faciunt* | Lk 23:34 *dimitte illis, non enim sciunt* | two substitutions in the most familiar sentence in the range — the class 7a″ exists for |
| 0308A–B | *Si vero sal **infatuatum fuerit**, ad nihilum valet nisi **projiciatur** foras* | Mt 5:13 *quod si sal evanuerit in quo sallietur, ad nihilum valet ultra nisi ut mittatur foras* | Migne drops the Vulgate's own question (*in quo sallietur*) and substitutes two verbs |
| 0308C | *Poenitentiam agite, **appropinquat** enim regnum coelorum* | Mt 3:2 *adpropinquavit* | present for perfect; the perfect is the whole force of the proclamation |

## Divergences DELIBERATELY not marked — synonym, word order, or truncation only

Listed so that a later reader can see they were checked rather than missed. In each the sense the
gloss builds on is unaffected, and marking them would bury the fifteen above in noise.

- **0297C** Gal 4:22 *Scriptum est quoniam Abraham **habuit duos filios*** — Vulg. *duos filios habuit*,
  and Migne drops *enim*. Word order only.
- **0297D** Hos 10:11 — Migne drops *et ego* before *transivi*.
- **0299A** Ex 1:1 — Migne stops at *Aegyptum*, dropping *cum Jacob*. Truncation.
- **0301C** Acts 27:37 *Eramus **autem omnes** animae* — Vulg. *vero universae*. Two synonyms.
- **0302A** Rom 12:3 — Migne drops the second *sapere* and adds *sed*.
- **0302B** 1 Cor 13:10 *Cum **enim** venerit* — Vulg. *autem*.
- **0302C** Lev 2:4 *Cum obtuleris* — Vulg. *Cum autem obtuleris*.
- **0303D** Prov 5:3 *Favus **distillans*** — Vulg. *stillans*, and *enim* dropped.
- **0304D** Heb 5:14 *Perfectorum autem est **cibus solidus*** — Vulg. *solidus cibus*. Word order.
- **0305B** Mt 10:16 *Estote simplices sicut columbae* — Migne quotes only the second half.
- **0305C** Jas 1:14 ***Quisque enim*** *tentatur* — Vulg. *unusquisque vero*.
- **0306B** 1 Pet 1:2 — Migne drops *Jesu* before *Christi*.
- **0306C** Heb 10:20 — Migne drops *quam* and *novam et viventem*. Compression.
- **0306C** Isa 6:6 *quem forcipe **tulit*** — Vulg. *tulerat*, and the opening *et* dropped.
- **0306D** Jas 3:17 — Migne drops *est*; the span is a fragment anyway.
- **0307A** Heb 13:10 — word order (*de quo non habent potestatem edere* / *de quo edere non habent
  potestatem*).
- **0308D** Lev 4:32 *Si autem de pecoribus* — Vulg. *Sin autem*.

## Migne's own defects reproduced as printed (Pattern 8 / Pattern 7)

- **0301A** — the plate opens a parenthesis it never closes: *( Isich.* in Levit. *Admirabilis
  verborum subtilitas, etc.,* … *ubi Christus est in dextera Dei sedens.* Reproduced unclosed;
  no mark supplied. Confirmed on Gallica f151.
- **0305D–0306A** — the same defect again: *(ORIG. Observandum est quod in peccato pontificis
  legislator non addit …*, never closed. Confirmed on Gallica f153.
- **0302C** — *omnes tamen scientias superans et ad perfectionem exaltans* ends with **no terminal
  stop** before `VERS. 4.`. Confirmed at the plate; not supplied in the English.
- **0302D** — *De hac re siquidem locutionem ab apostolis et a prophetis suscipimus, **V**erba
  apostolorum sunt panes* — a comma followed by a capital where a full stop is wanted. Plate
  confirms; reproduced.
- **0305D** — ***Ideo aut** omnino additur: ut et proximis parcamus et nobis.* *aut* is a real word
  occupying its slot, so Pattern 7 renders it literally ("Therefore either it is added
  altogether"). The conjecture is ***autem*** ("Therefore, however, it is added altogether"), which
  the following *ut* clause wants. No `[sic:]` (the type is a real word) and no `[cj:]`: the literal
  English is odd, not false, which is the Pattern 18 bar. Confirmed on Gallica f153.

## Not defects — checked and left alone (Pattern 9)

- **0297B** *prescrutari* for *perscrutari*; **0305B** *epatis* for *hepatis*; **0300D** *spiritalium*;
  **0305D** ***nescibat*** for *nesciebat* (an attested late/syncopated imperfect on the pattern of
  *scibat*, not broken type). All confirmed at the plate, all translated normally.
- **0301B** and elsewhere, `(ID)` / `(ISICH).` / `(ISICH.` *in Levit.* appear as running text rather
  than as `[n: …]` in the TEI. Kept verbatim Latin in the English, on the same footing as note
  contents — they are Migne's citation abbreviations, not prose.

## Constructions rendered literally, logged because they will look wrong

- **0297B** — *agricolam seminantem semen bonum, **justos*** in the list of Matthew 13's equations.
  Matthew makes the sower the Son of Man and the good seed the sons of the kingdom; Hesychius's
  compressed list equates the sower-of-good-seed with *the just*. Rendered as printed. Not a lemma
  (no italics), so no `[var:]`.
- **0299C** — *et Spiritus sancti semen virtutum fruge ditavit*: *semen* is accusative where the
  construction wants an ablative (*semine*). Rendered literally, "enriched the seed of the Holy
  Spirit with the fruit of the virtues." Gender/case with no clean English exponent; no marker.
- **0302A** — the italic run *Non plus sapere quam oportet, sed sapere ad sobrietatem. **Quorum
  unus,*** puts Rom 12:3 and the resumed Leviticus 2:2 lemma (*quorum unus tollet pugillum*) inside
  one span, with the `(Rom. XII)` note after both. Reproduced as one span; the reader should know
  the last two words are Leviticus, not Romans.
- **0305B** — *Reticulum jecoris: Id est, **epatis*** glosses the Latin word by the Greek-derived one,
  and English has one word for both. *epar* is kept in italic Latin so the gloss does not collapse
  into a tautology.
