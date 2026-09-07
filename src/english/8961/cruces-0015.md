# 8961 *Liber Leviticus* — cruces, chunks 0015–0019 (cols 0336A–0348C)

*Glossa ordinaria* on Leviticus, Anselm of Laon and his school. PL 113. Stint file — the
orchestrator merges this with the peers' files.

**Plate reads:** every column in this range was collated word for word against Gallica
ark:/12148/bpt6k5505319w, leaves **f168–f174**. The page map (`f = (col + 1) / 2`) was
re-calibrated in this stint on the printed corner numbers of **all seven leaves**: f168 = 335/336,
f169 = 337/338, f170 = 339/340, f171 = 341/342, f172 = 343/344, f173 = 345/346, f174 = 347/348.
Two sites were additionally corroborated on the on-disk archive.org PDF (page = (col + 11) / 2),
pp. 178 and 179, whose printed corners read 345/346 and 347/348. Recorded in
`data/briefs/8961-PLATE-READS-0015.json`.

**Lemma count:** 230 marked spans in the Latin of chunks 0015–0019 (all italic; this book uses
**no guillemets** in this range), paragraph-bounded count identical to the raw count, and equal to
the brief's 230. No mis-split.

---

## Our TEI diverges from the plate — English renders the PLATE, patches pending

Filed in `data/briefs/8961-PENDING-TEI-PATCHES-0015.md`. None of these takes a `[sic:]`: the plate
is clean at each, so a marker would publicly accuse Migne of the digitization's defect.

- **0343D** — our twin prints the non-word ***vetrorsum*** (*Ego autem non contradico, vetrorsum non
  abii*); **Gallica f172 prints *retrorsum***, which is also Isa 50:5. Read at native resolution and
  again at 3×: the initial is an italic *r*, not a *v*. English reads "I went not backward."
- **0346D** — our twin prints ***con junctionem*** with a space (*Talium con junctionem turpitudinem
  appellat*). **Gallica f173 breaks the word across a line with NO hyphen** — the line ends *Talium
  con* and the next begins *junctionem* — so Migne's word is *conjunctionem*, entire. English reads
  "the conjunction of such persons."
  ⚑ **The archive is the defective witness here, and instructively so:** archive p.178 prints
  *con-* / *unctionem*, i.e. it has lost the *j* and supplied a hyphen. A stint working from the
  archive alone would have marked a `[sic: *conunctionem*]` on a word Migne sets correctly. This is
  the jbig2 caution in its exact predicted form — a substitution that construes.
- **0339C** — our twin's Greek reads *έπισαγμα ὅνον* (tonos-for-smooth-breathing, rough breathing on
  *ὄνον*); the plate reads **ἐπίσαγμα ὄνον**. English carries the plate's accents.
- **0347A** — our twin supplies a terminal stop after *…confessione deletum vel detectum.* **Neither
  printing has one**: Gallica f174 and archive p.179 both end the paragraph bare. Under Pattern 8
  ("never supply a mark the plate lacks") the English stops there without a period.

## Migne's own defects, reproduced without a marker

- **0344B** — Migne opens `(ORIG., *ubi supra.*` at VERS. 29 and **never closes the parenthesis**;
  the paragraph runs to *id est abjectus et refutatus.* with no `)`. Confirmed on the plate.
  Reproduced unclosed, per the Pattern 5 corollary.
- **0345B** — the same shape: `(secundum illud: *Qui devorant plebem meam sicut escam panis*
  [n: (Psal. XIII)] obfirmat faciem suam Deus…` — the parenthesis opened before *secundum* is never
  closed. Confirmed on the plate. Reproduced unclosed.
- **0338D** — the verse address reads **VERS. 20** where the lemma (*Ponet super extremum auriculae
  dextrae illius qui*) is Lv 14:25, and it stands *after* VERS. 21 in the printed sequence.
  Confirmed on the plate; Migne's own numbering, reproduced.
- **0342C** — Migne's note on *Ecce vir, oriens* reads `(Psal. XV.)`, repeating the citation attached
  to *Non dabis sanctum tuum* four lines earlier; the phrase is Zech 6:12. His citation, verbatim,
  unaltered. Compare the note two clauses later, `(Zachar. VI)`, attached to *visitavit nos oriens*,
  which is Lk 1:78. The pair is his, not ours.
- **0338C** — the note `(Psal. XIV.)` covers *Factae sunt lacrymae meae panes* (Ps 41:4) and *Lavabo
  per singulas noctes lectum meum* (Ps 6:7); neither is Ps 14. Verbatim.
- **0345D** — the note `(Psal. XLIII)` is attached to *Captabant in animam justi*, which is Ps 93:21.
  Verbatim.
- **0348B** — the note `(Prov. XIII.)` is attached to *Mulierem fortem quis inveniet*, Prov 31:10.
  Verbatim.

## Sentences that do not construe, rendered as printed

- **0336D** — *Quomodo enim rasis pilis succedunt novi, si novae cogitationes ad meliora pullulant
  veteribus abrasis.* The *Quomodo … si …* frame has no apodosis and the sentence closes on a full
  stop. Confirmed on Gallica f168 exactly as our twin has it. Rendered word for word ("For just as,
  when the hairs are shaved, new ones follow, if new thoughts sprout up toward better things when
  the old have been shaved away"); no repair, no marker.
- **0342C** — *…et non morietur immoderatis, scilicet quaestionibus.* The ablative *immoderatis* is
  stranded before its noun by the interposed *scilicet*. Printed thus; rendered thus ("and he shall
  not die of immoderate questionings, that is").

## Readings checked and deliberately NOT marked

- **0339D** *ffuxum* (VERS. 29, col 0340C) is the *fl*-ligature, not a doubled *f*: the same word
  prints cleanly as *fluxum* twice in the neighbouring lines of the same paragraph. No `[sic:]`.
- **0337D** *Ut auditum muniat* — the *n* of *muniat* is ink-damaged on Gallica and reads at first
  glance as a *k*. It is *muniat*, the reading of our twin. Damage, not type.
- **0344C** *loco non circonscripsit* — an attested medieval spelling of *circumscripsit*
  (Pattern 9). No marker.
- **ZERO `[sic:]` fired in this range.** No candidate survived collation on both printings; the one
  that looked strongest (*con junctionem*) proved to be our file's, and the archive's own version of
  it proved to be the archive's.

## `[var: …]` — Migne's scripture against the Clementine (18 fired)

Every one rests on a collated column, cited book chapter:verse against
`sources/vulgate/clementine-flat.txt`.

| col | lemma as Migne prints it | Clementine | why it is material |
|---|---|---|---|
| 0336B | *nisi manducaverimus carnem Filii hominis, non habebimus vitam in nobis* | Jn 6:54 *nisi manducaveritis … et biberitis ejus sanguinem, non habebitis vitam in vobis* | second person becomes first ("unless **we** have eaten"), and the cup drops out of a proof-text adduced for the sacrament |
| 0336B | *Asperges me, **Domine**, hyssopo* | Ps 50:9 *Asperges me hyssopo* | a vocative inserted into the most familiar verse in the range — the class 7a″ exists for |
| 0338C | ***Factae sunt** lacrymae meae panes die ac nocte* | Ps 41:4 *Fuerunt mihi lacrimae meae panes* | lexical substitution in a proof-text listing the works penance exacts |
| 0338D | *Lapides **vivi volvuntur** super terram* | Zech 9:16 *lapides **sancti elevabuntur** super terram ejus* | two substitutions; the gloss glosses *lapides* as *dogmata veritatis*, so "living" and "rolled" are the words it is reading |
| 0339A | *Quicunque **aedificaverit** super fundamentum **aurum et argentum*** | 1 Cor 3:12 *Si quis autem superaedificat super fundamentum **hoc**, aurum, argentum, lapides pretiosos* | the Vulgate's demonstrative and third material drop out; the verb changes voice and tense |
| 0339B | *Vir aut mulier **in quo fuerit plaga leprae et eat*** | Lv 13:29 *Vir, sive mulier, in cujus capite vel barba germinaverit lepra* | the lemma is quoted as the proof that laymen are included (*ideo additum est*), and only *mulier* survives from the verse |
| 0340C–D | *Verbum caro factum est, et **habitabit** in nobis* | Jn 1:14 *et **habitavit** in nobis* | future for past, in a gloss whose whole point is that the tabernacle **is** the inward man |
| 0341B | *Nemo enim novit Patrem nisi Filius et cui voluerit revelare* | Mt 11:27 *neque Patrem quis novit, nisi Filius, et cui voluerit **Filius** revelare* (after *nemo novit Filium, nisi Pater*) | the reciprocal first half is gone and the subject of *voluerit* is left unexpressed |
| 0341C | *Mortificati estis per corpus Christi* | Rom 7:4 *mortificati estis **legi** per corpus Christi* | the dative that says what we died TO is dropped, and the gloss is expounding release from the law |
| 0341C | *Non erunt tibi alieni* | Ex 20:3 *Non habebis deos alienos coram me* | the noun *deos* is absent, so the commandment quoted has no object |
| 0342A | *qui factus est ex muliere, ut eos qui sub lege erant, redimeret* | Gal 4:4-5 *factum ex muliere, ***factum sub lege***, ut eos qui sub lege erant, redimeret* | **load-bearing:** the gloss concludes *recte ergo dicitur vitulus, quasi mandatis legis subjugatus*, and the clause Migne drops is the only one that proves it |
| 0343A | *Sicut portavimus imaginem **terrae*** | 1 Cor 15:49 *imaginem **terreni*** | "of the earth" for "of the earthly man," in a sentence contrasting *coelestis est homo noster* |
| 0343B | *ipsa autem coelestia **majoribus** hostiis **expiantur*** | Heb 9:23 *ipsa autem caelestia **melioribus** hostiis quam istis* | "greater" for "better," and a verb supplied that the Vulgate does not have — the gloss's *quam istis* still hangs off Migne's added verb |
| 0344D | *Non facies tibi **idolum** nec omnem similitudinem eorum quae in coelo sunt **sursum** … et quaecunque **subtus terram*** | Ex 20:4 *Non facies tibi **sculptile** … quae est in caelo **desuper** … nec eorum quae sunt **in aquis** sub terra* | three substitutions, and the gloss's next words are *conflatilem vitulum fecerunt* — it is reading *idolum* |
| 0345B | *Qui enim videt **Filium**, videt et Patrem* | Jn 14:9 *qui videt **me**, videt et Patrem* | the first person of the printed Gospel becomes a title, which is precisely what the gloss needs (*Christum, scilicet qui est imago Patris*) |
| 0345D | ***Captabant** in animam justi, et sanguinem innocentem **condemnabant*** | Ps 93:21 ***Captabunt** … **condemnabunt*** | future becomes imperfect: a prophecy becomes a report |
| 0347B | *Concupiscentia enim parit peccatum, peccatum mortem* | Jas 1:15 *concupiscentia **cum conceperit**, parit peccatum: peccatum vero **cum consummatum fuerit, generat** mortem* | both temporal clauses are cut, which is what lets the gloss set the three terms out as a bare series (mother, daughter, granddaughter) |
| 0347C | *In pace nos vocavit Deus, pacem cum omnibus habeamus* [n: (Rom. XII)] | 1 Cor 7:15 *in pace autem vocavit nos Deus* + Rom 12:18 *cum omnibus hominibus pacem habentes* | two verses spliced under one citation, and the citation names only the second |

## Divergences from the Clementine noted and deliberately NOT marked

Each was collated and judged immaterial: an abridgment the *etc.* already announces, a spelling, or
a word order that leaves the gloss's argument untouched.

- **0336B** *Quicunque in Christo baptizati sumus* — Rom 6:3 *quicumque baptizati sumus in Christo
  Iesu*; word order, and *Iesu* dropped.
- **0336D** *cum hujusmodi nec cibum sumere* — 1 Cor 5:11 *cum ejusmodi*.
- **0341D** *In terra deserta invia et inaquosa* — Ps 62:3 *in terra deserta, et invia, et inaquosa*.
- **0342A** *Non veni **legem** solvere, sed adimplere* — Mt 5:17 *non veni solvere, sed adimplere*;
  the object is carried down from the verse's own first clause.
- **0342C** *Non dabis sanctum tuum* — Ps 15:10 *nec dabis*.
- **0343C** *Malitia ejus ascendit coram me* — Jon 1:2 *ascendit malitia ejus coram me*; word order only.
- **0344A** *Sciens **Jesus** quia omnia dedit ei Pater* — Jn 13:3 *sciens quia…*.
- **0346A** *Si invicem comeditis* — Gal 5:15 *quod si invicem **mordetis, et** comeditis*.
- **0346C** *quia qui videt Filium, et credit in eum, **habet** vitam aeternam* — Jn 6:40 *ut omnis
  qui videt Filium et credit in eum, **habeat** vitam aeternam*.
- **0347D** *Si **circumcidimini*** — Gal 5:2 *si circumcidamini*.
- **0348A** *Quis enim consensus templo Dei cum idolis?* — 2 Cor 6:16 *quis autem consensus templo
  Dei cum idolis*; unmarked in Migne (no italics, no note), so it is the gloss's own voice.
