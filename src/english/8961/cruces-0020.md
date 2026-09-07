# Cruces — 8961 *Liber Leviticus*, chunks 0020–0024 (cols 0348D–0362B)

Stint file; the orchestrator merges it with the peers'. **Every column in the range was read at
the plate before these entries were written** — Gallica `ark:/12148/bpt6k5505319w` f174–f181,
`f = (column + 1) / 2`, calibrated against the printed corners on f174 (347 / 348) before any
reading; the archive copy `patrologiaecurs04migngoog` (PDF page `= (column + 11) / 2`) was
brought in as second witness at cols 0351–0358, calibrated on pp. 181–184 (351/352 … 357/358).
Reads recorded in `data/briefs/8961-PLATE-READS-0020.json`; TEI patches in
`data/briefs/8961-PENDING-TEI-PATCHES-0020.md`.

---

## Plate vs. our TEI — five digitization losses, no `[sic:]` fired

All five have **both printings agreeing against our file**, which is the class the standing rule
assigns to the digitization and not to Migne. Detail in the patches file; in brief:

| col | our TEI | the plate | English renders |
|---|---|---|---|
| 0352A | *edehat* | **edebat** | "did not yet eat" |
| 0352D | *tornicantur* | **fornicantur** | "commit fornication" |
| 0352D | `(I Cor. XL.)` | **(I Cor. xi.)** | note kept verbatim (verifier) |
| 0354A | `(Psal. XXXVIII)` | **(Psal. xxxiii.)** | note kept verbatim (verifier) |
| 0356A | *nommetur* | **nominetur** | "lest he be named" |

⚠ **0354A is the one that would have produced a false public finding.** Read only in our file,
`(Psal. XXXVIII)` on *Vultus autem Domini super facientes mala* looks like one of Migne's
misfired citations (Ps 33:17 is the verse). The plate reads **xxxiii** on both printings: the
misfire is ours. Nobody should log it against Migne.

## Press variants — the two printings differ, so no marker and no patch

**0354C — *tan git* / *tan-git*.** Gallica breaks the word across the line with **no hyphen**
(hence our TEI's *tan git*); the archive (p.182, 400 dpi) prints **tan-** cleanly. A word-division
defect is exactly Pattern 10's shape, but a defect on one printing only does not license a public
accusation against Migne's type. English reads "openly touches him who does the same as his
neighbour"; nothing marked, nothing patched. Re-cropped with the full right margin in before the
call, per the standing crop caution.

**0358D — *dis cernimus* / *dis-cernimus*.** Identical mechanism, identical disposition: Gallica
sets *dis* at the line end with no hyphen, the archive sets *dis-*. English reads "by the nose we
distinguish odours and stenches".

**0352D — the terminal stop after *sanctorum vindicans injuriam*.** Gallica prints none; our TEI
supplies one; the archive appears to carry one. One printing only, so nothing is asserted: the
English keeps the stop.

## Migne's own misfired citations — reproduced verbatim, plate-confirmed

Each of these was checked at the plate to make sure the misfire is HIS and not our file's:

- **0348D** *Omne opus servile non facietis in eo* `[n: (Exod. XXXI)]` — the wording is Lv 23:7 (and
  parallels), not Exodus 31. Confirmed on f174.
- **0351A** *Ponite filium meum Salomonem in mulam meam* `[n: (Eccli. XIX)]` — the verse is
  3 Rg 1:33, and Migne himself attributes it correctly to David in the same sentence. Confirmed
  on f176 and archive p.181. A `[var:]` stands beside it for the wording.
- **0352A** *in paralytico grabatum portante glorificabant Deum* `[n: (Matth. VIII)]` — the
  crowd glorifying God for the paralytic is Mt 9:8. Confirmed on f176.
- **0358A** *Anima quae peccaverit ipsa morietur* `[n: (Ezech. XVIII; Isa. LIII)]` — Ezech. XVIII
  is right; the second member does not answer to Isa 53 in any wording. Confirmed on f179.
  (The archive's digits here read *xliii*; jbig2 is never a sole witness for a numeral, and
  Gallica and our TEI agree on LIII.)
- **0359C** *Non superbum, non iracundum, non vinolentum* `[n: (I Tim. II.)]` — the catalogue is
  Tit 1:7; Migne's own next clause, *Est enim Dei dispensator*, is the continuation of that same
  Titus verse. Confirmed on f180.

## Readings rendered as printed, per Pattern 7

**0359A — the sentence that simply stops.** *Qui viam Dei pergere non potest, et boni operis
exsors est, non ut claudus, qui saltem cum infirmitate tenebat* — and there the gloss breaks off,
with no object, no terminal stop, and VERS. 20 beginning on the next line. **This is Migne's own
truncation, read at the plate (f180): it is not a digitization loss**, so no `[ed:]` is licensed,
and Pattern 8 forbids supplying the stop. The English breaks off in the same place: "not like the
lame man, who at least with his weakness was holding".

**0359D — *Inordinate agendo populum scandalizent*.** A jussive subjunctive with no governing
clause, in a gloss on *Et contaminare non debet*. Rendered as printed ("By acting disorderly let
them scandalize the people"); the sense the passage wants is a *ne* clause. No marker: the type
is sound and nothing is defective, so neither `[sic:]` nor `[cj:]` reaches it (18a).

**0350B — *ne aliena delicta diluere non valeat*.** Both negatives are Migne's and both are in the
English ("lest he be unable to wash away others' offences"). Recorded because a negation stacked
on *ne* is exactly the shape 7a says not to tidy.

## Vulgate divergences — what was fired, and what was checked and cleared

**244 marked spans in the brief; 245 in my Latin.** The single extra is not a lemma: at 0352A our
TEI wraps a bare citation in italics, `*[n: (Matth. VIII)],*`, and the brief's generator (rightly)
skips a span with no word content. Every other span matched the brief in order. Paragraph-bounded
count: 65 / 22 / 49 / 62 / 47 = 245, no unmatched delimiter, and this book carries **zero
guillemets**, as the peers found.

### Fired — 15 `[var: …]`

| col | verse | Migne prints | Vulgate |
|---|---|---|---|
| 0349A | Ex 16:25 | *Sabbata hodie Domino, non invenietis illud in agro* | *sabbatum est Domini: non invenietur hodie in agro* |
| 0349B | Jac 4:13 | *Hodie et crastino ibimus in civitatem* | *hodie aut crastino ibimus in illam civitatem* |
| 0351A | Lv 19:19 | *Jumenta tua* | *Jumentum tuum* |
| 0351A | 3 Rg 1:33 | *Ponite filium meum Salomonem in mulam meam* | *imponite Salomonem filium meum super mulam meam* |
| 0351A | Pr 31:13 | *inveniet lanam et linum, et operata est utile manibus suis* | *Quaesivit lanam et linum, et operata est consilia manuum suarum* |
| 0351B | Rom 7:4 | *Mortui estis legi* | *mortificati estis legi* |
| 0353A | Job 12:12 | *In senibus est sapientia* | *In antiquis est sapientia* |
| 0353C | Mt 7:2 | *judicaverimus … judicabitur et de nobis … mensi fuerimus, remetietur nobis* | second person throughout |
| 0355A | Rom 8:13 | *Si enim facta carnis spiritu mortificaverimus, vivemus* | *si autem spiritu facta carnis mortificaveritis, vivetis* |
| 0356C | Mt 6:31 | *Ne cogitetis dicentes: Quid comedemus* | *Nolite ergo solliciti esse, dicentes: Quid manducabimus* |
| 0357B | Mal 1:12 | *Mensa Domini deserta est* | *Mensa Domini contaminata est* |
| 0358C | Col 3:1–2 | *Si consurreximus cum Christo, quae sursum sunt sapiamus* | *si consurrexistis … quae sursum sunt sapite* |
| 0361C | Is 56:10 | *Videte quoniam omnes nesciverunt, universi canes muti* | *Speculatores ejus caeci omnes; nescierunt universi: canes muti* |
| 0362A | Ps 41:10 | *Utquid tristis incedo, dum affligit me inimicus* | *quare contristatus incedo, dum affligit me inimicus* |
| 0362B | Dt 16:2 | *Immolabis pascha Domino Deo tuo; oves* | *Immolabisque Phase Domino Deo tuo de ovibus, et de bobus* |

⭐ **The two that carry their own gloss on their backs.** At **0349A** the whole gloss is built on
the plural: *Nota quia non ait, sabbatum, sed sabbata* — and the Vulgate's Ex 16:25 has the
**singular** *sabbatum*, with a passive *non invenietur* where Migne has an active second-person
*non invenietis*. Conform the lemma and the gloss beneath it stops being about anything. At
**0362B** the argument is *Legale pascha significat*, and Migne's *Immolabis **pascha*** is
precisely what the Vulgate does not print there (*Phase*).

Two more worth naming: **0353A** *In senibus* (for *In antiquis*) sits under the lemma *Coram cano
capite* and supplies the very word — old men — the gloss is expounding; and **0353C / 0355A /
0358C** are one recurring habit, the glossator turning a second-person scripture into a
first-person plural (*judicaverimus*, *mortificaverimus*, *consurreximus*) so that the precept
falls on "us". That is a pattern, not three accidents, and it is why each was marked rather than
smoothed.

### Checked against the Clementine and deliberately NOT marked

Every ⚠ and ⚑ in the brief was walked word by word. These came back divergent-but-immaterial —
abridgment, an *etc.* cut, a particle, or a word order — and take no marker:

- **0349B** 1 Tim 2:4 *qui vult omnes homines salvos fieri* (Vulg. *qui omnes homines vult salvos
  fieri*) — word order only.
- **0350D** Lv 19:16 lemma *Non ambulabis in domo* and **0350A** *Non levabitis*, **0351B**
  *custodita homini*, **0351C** *Visitatio erit eis*, **0355C** *In conspectu filiorum generis
  sui*, **0356B** *Sine filiis morietur*, **0360B** *Omnem immunditiam animae*, **0361C**
  *linguam incisam*, **0361D** *Non offerent haec Domino*, **0360D** *Super ipsum*: **all
  explicitly labelled LXX by Migne.** A divergence Migne himself attributes to another version is
  not a `[var:]`.
- **0350B** *Non nocebis proximo* and *Non rapies* — Augustine's own summary formulae inside a
  quotation of Augustine, not lemmata of Leviticus.
- **0350C** Jac 2:10 *Qui enim in uno offenderit, omnium reus est* — a compression of *Quicumque
  autem totam legem servaverit, offendat autem in uno, factus est omnium reus*; unitalicised in
  Migne, i.e. not offered as a quotation.
- **0353A** Lv 19:31 lemma *Neque ab ariolis* (Vulg. *nec ab ariolis*) — a particle.
- **0353B** Act 15:10 *super cervices discipulorum* (Vulg. *cervicem*) — number of a noun with no
  weight in the gloss.
- **0353C** Mt 15:3 *Quare transgredimini … propter traditiones vestras* — drops *et vos*, plural
  *traditiones*; the gloss turns on neither.
- **0354A** Lv 20:3 *Ego ponam faciem meam* (Vulg. *et ponam*) — a particle.
- **0357D** Is 1:8 *Relinquetur filia Sion sicut umbraculum vineae* (Vulg. *derelinquetur … ut
  umbraculum in vinea*) and Os 2:5 *Fornicata est mater eorum* (drops *enim*) — worn quotation
  formulae; the gloss reads the same either way. ⚠ Borderline; recorded so a later reader can
  disagree cheaply.
- **0358B** 2 Cor 11:2, **0359C** 1 Tim 6:10, **0360C** 1 Cor 11:29, **0361B** 1 Cor 15:41
  (*Stella enim differt a stella*, word order), **0361D** 1 Cor 6:18 (*enim* for *autem*),
  **0359D** Heb 13:10 (*comedere* for *edere*) and Heb 10:19–20 (*carnem ejus* for *carnem
  suam*): checked, immaterial.
- **0360D** Pr 23:1 *Cum sederis … quae posita sunt ante te* (Vulg. *Quando sederis … quae
  apposita sunt ante faciem tuam*) and **0362A** Sir 11:30 *Ante mortem non laudes hominem*
  (Vulg. *ne laudes hominem quemquam*) — abridged proverbs quoted for their drift.
- **0354B** Lv 18:7 *Non revelabis turpitudinem patris tui* — the glossator's back-reference to
  his own earlier lemma, not a fresh citation.
- **0358A** Lv 21:12 lemma *De sanctis non exibit* (Vulg. *Nec egredietur de sanctis*) — Augustine's
  lemma form, and Migne says so with `(ID., quaest. 82.)`.
- **0352D** Ps 21:21 *Erue a framea, Deus, animam meam, et de manu canis Unicam meam* — agrees
  with the Clementine exactly, capital *U* and all; the capital is Migne's and is reproduced.

## Pattern 9 items declined

- *Moses* beside *Moyses* in the same work (0359C vs 0348D) — both attested; no marker.
- *grossescunt* (0359A), *refricant* (0355B), *cicinnos* (0352C), *tornicantur*-corrected
  *fornicantur*: only the last is a defect at all, and it is ours (above).
- *pascha* for *Phase* at 0362B is a real-word variant of the received text, so it took a
  `[var:]`, not a `[sic:]`.

## Marker tally

`[var:]` 15 · `[sic:]` 0 · `[ed:]` 0 · `[d:]` 0 · `[cj:]` 0.

Zero `[sic:]` is the honest number for this range: the five candidates that looked like Migne's
broken type (*edehat*, *tornicantur*, *nommetur*, *tan git*, *dis cernimus*) all dissolved at the
plate — three into digitization losses and two into press variants. The prior held: on a collated
lemma be generous with `[var:]`, on a single word be stingy with `[sic:]`.
