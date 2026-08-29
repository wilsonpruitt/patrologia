# *Glossa ordinaria*, **Epistola ad Galatas** (PL 114, 0569D–0588B) — cruces

Translated 2026-08-23, one translator, 7 chunks. **Repaired 2026-08-23** after an independent
blind read and a plate read at 900–1400 dpi; the work was re-chunked when
`data/tei-patches/8992.json` was written (manifest `sourceWords` 7,513 → 7,511). Author of record
**Anselmus Laudunensis et schola**; Migne prints it under Walafrid Strabo and the running head
over these columns reads WALAFRIDI STRABI FULD. MON. OPP. PARS I. — THEOLOGICA. The honesty
label on the work page carries that.

`verify-english.mjs` clean: 7 chunks, columns/notes/sections aligned, no duplicate paragraphs.
Apparatus **after the repair pass**: **23 `[var:]` · 4 `[sic:]` · 1 `[cj:]` · 1 `[d:]` · 0 `[ed:]`
· 0 `[nt:]` · 30 `[n:]`** (before: 24 · 5 · 1 · 1 · 0 · 0 · 30)
(exact parity with the Latin twins). Structure: ARGUMENTUM, CAPUT PRIMUM, CAPUT II–VI, with
CAPUT IV split across chunks 3 and 4 (`CAPUT IV. (cont.)`). Zero guillemets in either language.
Zero `[cn:]` — see §2 on plate status. Em-dashes: 0.

⭐ **Start at §4 (the blind read) and §5 (the plate).** Those two sections record what changed on
2026-08-23 and why; §§1–4 have been corrected in place to agree with them.

The five Glossa conventions settled on Liber Ruth (8968 §1) are followed and were not re-opened.
Collation throughout is against `sources/vulgate/clementine-flat.txt`, cited by book chapter:verse.

---

## §1 · THE LEMMA DIVERGENCE TABLE

**Every italic span in `data/briefs/8992-lemmata.txt` is accounted for below, including the ones
checked and found to agree with the Clementine exactly.** A `✓ agrees` line is a checked negative,
not a skip. Where Migne's own note misattributes a quotation, that is recorded separately from the
question of the wording, because it is a different fact.

### 1a. The divergences that took a `[var:]` (23)

⛔ **One row was withdrawn on 2026-08-23.** The 0573D row (*Ut nos ingentes* against Gal 2:9 *ut nos
in gentes*) is **no longer a scripture divergence at all** — the plate read settled it as Migne's own
fused type, Pattern 10, and a compositor's word-division is not a variant in his copy-text of
Galatians. The `[var:]` was removed and a `[sic: *ingentes*]` put in its place. Reasoning in §2 and
§5.

| col | Migne prints | Clementine | why it earned a marker |
|---|---|---|---|
| 0571D | *Gustate, et eritis sicut dii* (Gen. III) | Gn 3:5 *in quocumque die comederitis ex eo, aperientur oculi vestri, et eritis sicut dii* | Migne turns the serpent's conditional into a bare imperative. The gloss's whole point is that the angel spoke *de proprio* — the imperative is the thing being exhibited. |
| 0572A | *Et anathematizavit eum et civitates ejus, et vocatum est nomen loci illius Anathema* (Num. XXI) | Nm 21:3 *et vocavit nomen loci illius Horma, id est, anathema* | The received text has no anathematizing of him and his cities, and names the place *Horma*. The gloss is an etymology **of the word** *anathema*, so the wording is load-bearing. |
| 0572B | *Placete omnibus per omnia, sicut et ego omnibus placeo* (II Cor. X) | 1Cor 10:33 *sicut et ego per omnia omnibus placeo* | An imperative not in the received text at all, prefixed to an indicative clause whose word order also differs. |
| 0572B | *Sine offensione estote Judaeis et Graecis Ecclesiae Dei* (II Cor. VIII) | 1Cor 10:32 *Sine offensione estote Judaeis, et gentibus, et ecclesiae Dei* | ***Graecis* for *gentibus*** — a different word for the second party. |
| 0572C | *Luceant opera vestra coram hominibus,* etc. | Mt 5:16 *Sic luceat lux vestra coram hominibus : ut videant opera vestra bona* | Migne makes the **works** shine; the received text makes the **light** shine so that the works may be seen. Different subject. |
| 0572C | *Nolite facere justitiam vestram coram hominibus,* | Mt 6:1 *Attendite ne justitiam vestram faciatis coram hominibus* | Prohibition recast from *attendite ne* to *nolite facere*. |
| 0575A | *Fascinatio malignitatis obscurat bona* (Sap. IV) | Sap 4:12 *Fascinatio enim nugacitatis obscurat bona* | ***malignitatis* for *nugacitatis*** — and the whole paragraph is about *invidia* and malice, so Migne's word is the one the argument wants. Exactly the shape of 7914 @1079C's *castimoniam*: the keyword of the argument is not the keyword of the received text. |
| 0575A | *Jesus Christus proscriptus est.* | Gal 3:1 *Jesus Christus praescriptus est* | ***proscriptus* for *praescriptus***, and the gloss immediately defines it: *Id est, exhaeredatus* — "that is, disinherited". The exposition rests on the divergent word. A translator half-remembering "set forth before your eyes" loses the entire gloss. |
| 0575D | *Maledictus omnis homo,* etc. | Gal 3:10 *Maledictus omnis qui non permanserit in omnibus…* | Migne inserts *homo*. See the 0576B entry — the insertion is glossed. |
| 0576B | *Omnis homo.* | Gal 3:13 *Maledictus omnis qui pendet in ligno* | The same intruded *homo*, and **here it is the lemma being glossed**: *Etiam Christus, ne futuri haeretici negent ejus veram mortem.* The gloss argues from a word the received text does not print. |
| 0577B | *Sed concludit Scriptura.* | Gal 3:22 *Sed conclusit Scriptura omnia sub peccato* | Present *concludit* for perfect *conclusit*. Marked because English cannot render the two tenses alike, so a reader would otherwise take our present for the Vulgate's — while the gloss's own verb is the perfect (*clausit*). |
| 0577B | *Conclusit Deus omnia in justitia, ut omnium misereatur.* | Rom 11:32 *Conclusit enim Deus omnia in incredulitate, ut omnium misereatur* | ***in justitia* for *in incredulitate***. Adduced to prove men shut up **under sin**; Migne's word says the opposite kind of thing. |
| 0577D | *Induite vos Dominum nostrum Jesum Christum.* | Rom 13:14 *induamini Dominum Jesum Christum* | Imperative *induite vos* for passive *induamini*, plus *nostrum*. |
| 0578C | *Coelum et terram ego impleo* (Jer. XXIII) | Jr 23:24 *Numquid non caelum et terram ego impleo?* | ⚠ **The received text is a rhetorical question containing a negative** (*numquid non*); Migne prints it as a flat assertion, which is what the gloss needs. Two things change at once: sentence type and polarity. |
| 0579B | *Conversi estis servire Deo vivo et vero* (I Petr. II) | 1Thes 1:9 *conversi estis ad Deum a simulacris, servire Deo vivo, et vero* | Compressed; *ad Deum a simulacris* dropped. ⚠ Migne's note reads **(I Petr. II)** and the verse is 1 Thess 1:9 — see 1c. |
| 0580D | *quos iterum parturis,* | Gal 4:19 *quos iterum parturio* | ***parturis* (2nd sg.) for *parturio* (1st sg.)** — the labour is transferred from Paul to the Galatians. Rendered "whom thou bringest forth again" per Pattern 17 (singular *tu* → thou). Treated under 14 and not 12, because the form occupies its slot and can be rendered, and under 14 and not 18, because it sits inside a quoted scripture. |
| 0582A | *Dilata locum tabernaculi tui, et protende funiculos tuos* (Isa. LIV) | Is 54:2 *Dilata locum tentorii tui, et pelles tabernaculorum tuorum extende : ne parcas : longos fac funiculos tuos* | *tabernaculi* for *tentorii*; a whole clause dropped; *protende funiculos* for *longos fac funiculos*. |
| 0583D | *Vos enim vocati estis a Deo in libertatem.* | Gal 5:13 *Vos enim in libertatem vocati estis, fratres* | Migne adds ***a Deo*** and drops *fratres*. The agent is supplied by the plate, not by Paul. |
| 0584A | *Qui enim non diligit proximum suum, quem videt, Deum, quem non videt, quomodo potest diligere?* (I Joan. IV.) | 1Jo 4:20 *Qui enim non diligit fratrem suum quem vidit, Deum, quem non vidit, quomodo potest diligere?* | ***proximum* for *fratrem***, and present *videt* for perfect *vidit* twice. The proof-text is adduced **precisely for the neighbour** (*sine proximo non diligitur Deus*), so Migne's substitution is the argument's hinge. |
| 0584B | *Dico autem in Christo,* etc. | Gal 5:16 *Dico autem : Spiritu ambulate* | Migne's *in Christo* replaces the imperative. The gloss then expounds it: *Hoc autem dico posse esse vobis in Christo, et nunquam aliter.* |
| 0584D | *Regnum non Dei consequentur.* | Gal 5:21 *regnum Dei non consequentur* | ⭐⭐ **The negative has moved.** In the plate *non* stands between *Regnum* and *Dei*, so the printed words say they **shall obtain** a kingdom that is not God's. Rendered as printed ("The kingdom not of God shall they obtain") per 7a — carrying a negative where the plate puts it, **including when carrying it makes the sentence contradict its own gloss**, which continues *Nullus medius locus est…* on the assumption that they obtain nothing. The `[var:]` gives the received order. See §3 for why no silent transposition was made. |
| 0585A | *Non est impiis gaudere, dicit Dominus* (Isa. XLVIII) | Is 48:22 *Non est pax impiis, dicit Dominus* | ***gaudere* for *pax*** — and the lemma being glossed is *Gaudium*. Migne's word is the keyword; the Vulgate's is not. Another pure 7a″ site. |
| 0587A | *Operamini dum dies est: veniet nox quando jam nullus poterit operari* (Joan. IX) | Jo 9:4 *Me oportet operari opera ejus qui misit me, donec dies est : venit nox, quando nemo potest operari* | Recast to a plural imperative, *dum* for *donec*, future *veniet*/*poterit* for present, *jam nullus* for *nemo*. |

### 1b. Divergences found, logged, and **declined** a marker (13)

Each is a real difference from the Clementine. None was marked, because in each the sense the
gloss builds on is untouched and a `[var:]` would bury the twenty-four above in noise.

- **0571A · *Et Domino Jesu Christo.*** — Gal 1:3 has *et Domino **nostro** Jesu Christo*. A dropped possessive.
- **0571A · *Praesenti saeculo nequam.* / *Saeculo nequam.*** — Gal 1:4 verbatim; the second is the first clipped.
- **0571A · *Mundus in maligno positus.*** — 1Jo 5:19 *mundus **totus** in maligno positus **est***. Clipped tag.
- **0571A · *Tempora periculosa.*** — 2Tim 3:1 *instabunt tempora periculosa*. Clipped tag. (*Dies mali sunt* = Eph 5:16 verbatim.)
- **0572B · *Providemus bona, non solum coram Deo, sed etiam coram hominibus*** — 2Cor 8:21 drops only *enim*.
- **0572D · *Segregavit ex utero matris.*** — Gal 1:15 *qui **me** segregavit ex utero matris **meae***. Both possessives clipped. **Rendered as printed** ("He separated from the womb of the mother") and NOT expanded, because the printed words construe as they stand; convention 3 governs fragments that are *not English*, and this one is. See §3.
- **0573C · *nihil interest,*** — Gal 2:6 *nihil **mea** interest*.
- **0573C · *ab his,*** — Gal 2:6 *ab **iis***; an orthographic doublet, Pattern 9.
- **0578B · *Ego a Patre exivi, et veni in hunc mundum*** — Jo 16:28 *Exivi a Patre, et veni in mundum*: word order plus the deictic *hunc*. No proposition of the gloss turns on either.
- **0579B · *Imo cogniti estis.*** — Gal 4:9 *immo cogniti **sitis***: indicative for subjunctive, plus the *imo/immo* doublet.
- **0584A · *Qui enim diligit iniquitatem…*** — Ps 10:6 has *qui **autem** diligit*; Migne *enim*. A connective only. ⚑ This is the class 8960's reader leaned on and got wrong from memory; checked on disk, and the divergence is real but trivial.
- **0586C · *Cum mali sitis, nostis bona dare filiis vestris;*** — Lc 11:13 / Mt 7:11 *Si ergo vos, **cum sitis mali**, nostis bona **data** dare*. Word order plus a dropped *data*.
- **0587B · *Benefacite his qui oderunt vos. Diligite inimicos vestros*** — Lc 6:27 prints the two clauses **in the opposite order**. Declined because nothing in the gloss turns on the order; contrast 7914 @1079B, where *cinis et pulvis* was marked precisely because the gloss turned on ashes.

### 1c. Migne's citation notes, checked against the verses (a separate question from the wording)

⭐ **A systematic displacement at 0572B–C.** Four quotations run in series, each followed by a note,
and **every note names the reference of the FOLLOWING quotation**:

| the quotation | its actual source | the note Migne prints after it |
|---|---|---|
| *Placete omnibus per omnia…* | 1Cor 10:33 | (II Cor. X) |
| *Sine offensione estote…* | 1Cor 10:32 | (II Cor. VIII) |
| *Providemus bona…* | 2Cor 8:21 | (Matth. V) |
| *Luceant opera vestra…* | Mt 5:16 | — none — |

So `(II Cor. VIII)` belongs to *Providemus bona* (2Cor 8), `(Matth. V)` to *Luceant opera* (Mt 5),
and the series ends one note short. `(II Cor. X)` on the first is the odd man out and would be
`(I Cor. X)` if the pattern held throughout. **The notes pass through verbatim** under convention 4
— they are Migne's, and passing a siglum through is not endorsing it.

Two further note-referent observations, both left unmarked:

- **0575D · (Deut. XXI)** stands on *Maledictus omnis homo* — which is Dt **27**:26, quoted at Gal 3:10. Dt **21**:23 is the source of the *other* curse, *Maledictus qui pendet*, quoted three columns later at 0576B, where Migne prints no note at all. Same displacement shape.
- **0584A · (Levit. XIX)** stands on *Diliges proximum*. The lemma quotes **Gal 5:14** and agrees with it verbatim; but Lv 19:18 itself reads *Diliges **amicum** tuum sicut teipsum*. The note is right about the book and the gloss (*Hoc scriptum est in Levitico*) is right about the fact; the Leviticus wording simply is not the wording quoted. No marker: the lemma is a faithful quotation of Galatians.
- **0579B · (I Petr. II)** on *Conversi estis servire Deo vivo et vero* — the verse is **1 Thess 1:9**. Recorded in 1a with the wording divergence; the misattribution is Migne's and rides as printed.

### 1d. Checked and agreeing with the Clementine — the negatives (the rest of the 276)

Recorded because a list of findings alone cannot be told from a report by an agent that never
looked. Each of these was read word against word at the cited verse.

**Gal 1 (0569D–0572D).** *Paulus, apostolus.* (1:1; Migne lower-cases *apostolus*, Clem. *Apostolus*) · *Non ab hominibus.* · *Neque per hominem.* · *Qui mecum.* (1:2, clipped from *et qui mecum sunt omnes fratres*) · *Qui dedit.* (1:4, clipped) · *Semetipsum.* (1:4) · *De saeculo.* (1:4, clipped from *de praesenti saeculo nequam* — the ⚠ in the pre-scan is the clip, not a divergence) · *Cui est gloria.* (1:5) · *Miror.* (1:6) · *Sed licet nos,* (1:8) · *Praeterquam quod.* (1:8) · *Anathema sit.* (1:8) · *Anathema.* · *Sicut praediximus.* (1:9) · *Modo.* (1:10) · *Si adhuc.* (1:10) · *Et proficiebam in Judaismo.* (1:14) · *Cum autem placuit.* (1:15) · *Ex utero.* (1:15) · *Priusquam te formarem in utero, novi te* (Jr 1:5, **verbatim**) · *salvatione* · *translatio* (gloss words, not scripture).

**Gal 2 (0572D–0574C).** *Deinde post annos quatuordecim.* (2:1) · *Et contuli cum illis.* (2:2) · *Seorsum,* (2:2) · *Subintroductos.* (2:4) · *Neque ad horam.* (2:5) · *Quales aliquando.* (2:6) · *Qui videbantur aliquid esse.* (2:2) · *Columnae.* (2:9) · *Dextras dederunt.* (2:9) · *Ut nos ingentes.* (2:9 — ⭐ **moved here from 1a on 2026-08-23**: read as Migne's fused type for the Clementine's *ut nos in gentes*, the reading therefore AGREES with the Clementine and the `[var:]` was withdrawn; the defect is word-division, marked `[sic: *ingentes*]`, see §2 and §4b) · *Restiti.* (2:11) · *Prius enim quam venirent,* (2:12) · *Quomodo gentes cogis.* (2:14) · *Nos.* (2:15) · *Nisi per fidem,* (2:16) · *Quod si quaerentes.* (2:17) · *Ego enim per legem.* (2:19) · *Mortuus sum.* (2:19) · *Ut Deo vivam.* (2:19) · *Confixus.* (2:19) · *Vivo.* (2:20) · *Jam non ego.* (2:20) · *Vivit vero in me Christus.* (2:20).

**Gal 3 (0574D–0578A).** *O insensati.* (3:1) · *Fascinavit.* (3:1) · *Ante quorum oculos.* (3:1) · *in vobis,* (3:1) · *Hoc solum a vobis.* (3:2) · *hoc volo a vobis discere,* (3:2, the gloss's own re-ordering of its lemma) · *Sine causa.* (3:4) · *Qui ergo tribuit.* (3:5) · *Ad justitiam.* (3:6) · *Providens.* (3:8) · *In te benedicentur,* (3:8, clipped and re-ordered from *benedicentur in te omnes gentes*) · *Quia ex fide.* (3:8) · *Praenuntiavit,* ×2 (3:8) · *benedicentur* · *In te.* · *Quicunque enim,* (3:10; *quicunque/quicumque* is Pattern 9) · *Scriptum est.* (3:10) · *Justificatur apud Deum.* (3:11) · *Lex autem,* (3:12) · *Vivet in illis.* (3:12) · *lex non est ex fide;* (3:12) · *Qui ergo fecerit ea, vivet in illis:* (3:12; the *ergo* is the gloss's resumption) · *Factus pro nobis,* (3:13) · *maledictus,* (3:13) · *Maledictus qui pendet.* (3:13, clipped) · *Hoc autem dico.* (3:17) · *hoc autem testamentum confirmatum* · *dico* · *lex non facit irritum,* / *Lex non facit irritum.* (the gloss's own restatement of 3:17 *non irritum facit*) · *Propter transgressiones.* (3:19) · *Ordinata per angelos.* (3:19) · *ordinata:* · *In manu.* (3:19) · *Mediator.* (3:20) · *Lex ergo,* (3:21) · *Priusquam.* (3:23) · *Veniret fides.* (3:23) · *Custodiebamur.* (3:23) · *Conclusi.* (3:23) · *In eam.* (3:23) · *Quae.* (3:23) · *Revelanda.* (3:23) · *Paedagogus noster fuit in Christo Jesu.* (3:24; Migne adds *Jesu*, and the gloss's own second lemma *in Christo,* drops it again) · *in Christo,* · *Omnes filii Dei estis per fidem.* (3:26; *enim* dropped) · *In Christo Jesu.* (3:26) · *Induistis.* (3:27) · *Ergo Abrahae semen estis.* (3:29; *Abrahae semen* for *semen Abrahae*).

**Gal 4 (0578A–0582B).** *Dico autem,* (4:1) · *Sub elementis.* (4:3) · *Mundi.* (4:3) · *Venit plenitudo temporis.* (4:4) · *Plenitudo temporis.* · *Misit Deus Filium.* (4:4) · *In mundo erat…non cognovit* (Jo 1:10, **verbatim**) · *In propria venit.* (Jo 1:11) · *Ex muliere.* (4:4) · *Factum sub lege.* (4:4) · *Ut adoptionem.* (4:5) · *Misit Deus.* (4:6) · *Spiritum Filii.* (4:6) · *usque ad* (the abridgment formula) · *Clamantem.* (4:6) · *Abba pater.* (4:6; Clem. *Abba, Pater*) · *Qui natura non sunt,* (4:8) · *Sic in sancto apparui tibi…* (Ps 62:3, **verbatim**) · *Infirma.* / *Egena.* / *Egena elementa* (4:9) · *Dies.* / *Menses.* / *Tempora.* / *Et annos.* (4:10) · *Timeo vos, ne forte,* (4:11) · *Estote sicut ego.* (4:12) · *Quia,* / *sicut vos,* (4:12) · *Fratres, obsecro.* (4:12) · *Nihil me.* (4:12, clipped from *Nihil me laesistis*) · *Tentationem vestram.* (4:13) · *Sed sicut angelum Dei,* (4:14) · *Esurivi, et dedistis mihi manducare* (Mt 25:35; only *enim* dropped) · *Ubi est ergo,* (4:15) · *fieri posset.* (4:15) · *Verum dicens vobis.* (4:16) · *Aemulantur.* (4:17) · *Donec Christus.* (4:19, clipped from *donec formetur Christus in vobis*) · *Vellem autem.* (4:20) · *Dicite,* (4:21) · *Legem non legistis.* (4:21) · *Scriptum est,* (4:22) · *Unum de ancilla et unum,* (4:22, clipped) · *Per allegoriam.* (4:24) · *Abba* / *am,* / *gentium. In monte Sina.* (4:24 — see §2 on the italic run) · *Mons.* (4:25) · *conjunctus,* (4:25) · *Arabia,* (4:25) · *Quae sursum est.* (4:26) · *Quae est mater.* (4:26; *nostra* clipped) · *Scriptum est.* (4:27) · *Laetare.* ×2 (4:27) · *Non paris.* (4:27) · *Non parturis,* (4:27) · *Erumpe.* (4:27) · *Clama.* (4:27) · *Quia multi filii.* (4:27) · *Desertae.* (4:27) · *Quae habet virum.* (4:27) · *Isaac.* (4:28) · *Persequebatur.* (4:29) · *Qua libertate.* (4:31).

**Gal 5 (0582B–0585C).** *Si circumcidamini.* (5:2) · *Debitor est.* (5:3) · *A gratia excidistis.* (5:4) · *Nos enim.* (5:5) · *Spem justitiae.* (5:5) · *Nam in Christo.* (5:6) · *Sed fides.* (5:6) · *Nam et daemones credunt et contremiscunt* (Jac 2:19; Migne prefixes *Nam*) · *Currebatis.* (5:7) · *Confido.* (5:10) · *Conturbat.* (5:10) · *Quicunque.* (5:10) · *Ego autem.* (5:11) · *Quid adhuc persecutionem.* (5:11) · *Scandalum crucis.* (5:11) · *Utinam abscindantur.* (5:12; *et* dropped) · *Ne libertatem.* (5:13) · *Sed per charitatem Spiritus.* (5:13) · *Omnis enim lex.* (5:14) · *Diliges proximum.* (5:14) · *Sicut teipsum.* (5:14) · *Comeditis.* (5:15) · *criminamini,* (see §2) · *Ne abinvicem consumamini.* (5:15; *abinvicem* fused, but attested late-Latin — Pattern 9, no marker) · *Non perficietis,* (5:16) · *Caro enim concupiscit,* (5:17) · *Quod si Spiritu ducimini,* (5:18) · *Non estis sub lege.* (5:18) · *Charitas.* (5:22) · *Gaudium.* (5:22) · *Qui autem.* ×2 (5:24) · *carnem suam crucifixerunt,* (5:24) · *Si spiritu vivimus.* (5:25) · *Inanis gloriae.* (5:26) · *Invidentes.* (5:26).

**Gal 6 (0585C–0588B).** *Fratres, et si.* (6:1; *et si* for *etsi*, Pattern 9) · *In aliquo delicto.* (6:1) · *Lenitatis.* (6:1) · *Considerans teipsum.* (6:1) · *Et sic adimplebitis legem Christi.* (6:2) · *Nihil.* (6:3) · *Probet.* (6:4) · *Opus autem suum.* (6:4) · *Non sum sicut caeteri hominum* (Lc 18:11; *caeteri/ceteri* only) · *In semetipso* (6:4) · *Gloriam habebit.* (6:4) · *Et non in altero.* (6:4) · *Et sic,* / *in semetipso,* / *Et sic in se.* (6:4) · *Unusquisque enim.* ×2 (6:5) · *Onus.* (6:5) · *Alter alterius onera portate;* (6:2) · *Invicem onera portate.* (the gloss's own paraphrase of 6:2, not a quotation) · *Unusquisque,* / *portabit onus suum,* (6:5; Migne's word order for *onus suum portabit*) · *Communicet.* (6:6) · *Nolite errare.* (6:7) · *Qui seminat in carne* / *sua.* / *in spiritu,* / *suo,* (6:8 — ⭐ **checked with care, and the plate is right**: the Vulgate does read *in carne **sua*** and *in spiritu* with no possessive, so the gloss's whole observation stands on the received text) · *In carne, in spiritu.* (composite) · *Qui autem seminat.* (6:8) · *Non deficiamus.* (6:9) · *Tempore enim.* (6:9) · *Dum tempus.* (6:10) · *Ad omnes.* (6:10) · *Videte autem.* (6:11; Migne adds *autem*) · *Hi cogunt.* (6:12) · *Ut crucis Christi persecutionem,* (6:12) · *Mihi mundus crucifixus est.* (6:14) · *Et ego mundo.* (6:14) · *Venit enim princeps mundi hujus, et in me non habet quidquam* (Jo 14:30, **verbatim**) · *De caetero.* (6:17) · *Stigmata.* (6:17) · *Gratia Domini nostri Jesu Christi.* (6:18).

---

## §2 · THIS BOOK'S CRUCES

### 0573D · *Ut nos ingentes* — MIGNE'S OWN FUSED TYPE. `[sic:]`, and the `[var:]` withdrawn

⭐ **Settled at the plate, 2026-08-23, and re-classified.** The plate prints *ingentes* as ONE italic
word, exactly as our file has it — so this was never a transcription question and no patch is owed.
The question left was **which convention it belongs to**, and the answer is **Pattern 10 (fused type,
`sedet` for *sed et*), not Pattern 14**.

**Why fused type and not a scripture variant — four reasons, and they are cumulative:**

1. **The printed lemma has no predicate.** *Ut nos ingentes* is a purpose clause with a subject
   accusative and an adjective and nothing to construe them with. The Vulgate's *ut nos in gentes*
   is the familiar ellipsis (*ut nos in gentes* [*iremus*]), completed by *ipsi autem in
   circumcisionem*. Only the split reading yields a sentence.
2. **The gloss under it never touches greatness.** It reads *Ut essem primus in praedicatione
   gentium, sicut Petrus in circumcisione* — wholly about the Gentiles. A lemma Englished as "That
   we great ones" bears no relation to its own gloss, which is the tell.
3. **Migne's own next clause requires the preposition.** *sicut Petrus in circumcisione* is one half
   of an antithesis whose other half must be *in gentes*. The plate itself supplies the missing
   *in*, four words later, in the parallel member.
4. **A `[var:]` is a public claim about another text.** It asserts that Migne's copy-text of
   Galatians read *ingentes*. Nothing supports that; what the plate shows is a compositor setting
   two words as one, which is the defect Pattern 10 names and which Corpus Corporum simply
   reproduced.

⚠ **The reasoning that lost, stated so a reader can weigh it.** **Test 4** of the agent brief (the digitization alters Migne's spelling in both directions) cuts both ways —
Corpus Corporum fuses and splits as readily as Migne does — so before the plate read the honest
position was that the fusion's *author* could not be determined from the Latin, and that ambiguity
was why the original entry hedged. The plate removed exactly that doubt: the fusion is Migne's. What
it did **not** decide, and what remained mine, is whether Migne's fused word is a reading or a
misprint; reasons 1–3 decide that, and they are all internal to his own page.

**Rendered** `*That we unto the Gentiles.* [sic: *ingentes*]` — the lemma Englished per convention 2,
the plate's own form marked beside it. Strip the marker and the lemma still reads. Per Pattern 10 the
carried run takes no second italic marker inside the already-italic lemma; the marker is set outside
the italic span so no nesting is required.

### 0574A · ⭐⭐ *aemulatores LEGES* — THE NORMALIZATION NOBODY ASKED ABOUT. `[sic:]`

**This entry replaces the former *Qui dam* entry, which is now void**: the plate hyphenates *Qui-* /
*dam* at the line end, so *Quidam* is one word on the page and the split was Corpus Corporum's. The
Latin is patched, the `[sic: *Qui dam*]` is withdrawn, and "Certain" now stands unmarked.

**But the same four words carried a second defect, running the other way, and it changes the
English.** The plate prints ***aemulatores leges***; our Latin file read *legis*. Confirmed at 1400
dpi: the final `e` carries no dot, where *qui* and *timens* on the same and the following line show
clear ones.

This is the **NORMALIZATION class** (8948 *convivum*, 8990 *concilio*): *aemulator* governs the
genitive, so *aemulatores leges* leaves an accusative plural with nothing to govern it — **Migne
printed a form that does not construe, and the digitization tidied it into the grammatical *legis***.

⛔ **Why nobody flagged it, and the general lesson.** A corrected form reads perfectly. The
translator met *legis*, rendered "zealots of the law" smoothly, and had no occasion to doubt a word
that construes, agrees with its governor, and says what the paragraph wants. **Every test this
edition runs — parity, counts, negation attachment, band comparison, even the fourth test's "does it
assert what he asserts?" — takes the Latin file as its input, so a defect that has already been
repaired upstream is invisible to all of them by construction.** It was found only because the plate
was open at that line for a different word. **A normalization can be detected from the Latin alone
only by luck; it is a plate-read finding or it is nothing.**

**Rendered** `Certain emulators of the law [sic: *leges*]`. Strip the marker and the clause keeps its
subject, its verb, its object and its relative — the swallow test passes, and the fourth question
(does the clause still have the thing it acts on?) is answered by "of the law" standing in plain
English outside the bracket. The `[sic:]` is right rather than a `[cj:]` because the printed word
**has no grammatical slot** — Pattern 12's first failure mode — not because it merely means the
wrong thing.

### 0574D · *quorumdam* — the marker WITHDRAWN, the plate read settled it

The former entry marked `[sic: *quorum dam*]`. The plate hyphenates *quo-* / *rumdam* at the line
end: **one word on the page.** Corpus Corporum dropped the hyphen *and* split at a different point
than the plate does, so its "quorum dam" is not even evidence of where the break fell. Latin patched,
marker removed, English now reads "the eyes of certain men".

⛔ **The caveat that outlives the patch:** a newline in the TEI is **not** reliable evidence of where
the plate's line ends. It agrees with the plate at this work's *Qui\ndam* and disagrees here.
Corroboration once the plate has spoken; never a substitute for reading it.

### 0581B · *quibusdam* — the marker WITHDRAWN, and the earlier column reference corrected

The former entry marked `[sic: *quisbusdam*]` at "0581C". **The plate prints *quibusdam* plainly, one
word, in an unbroken line** — no hyphenation involved, so this was an ordinary misread by the
digitization and not the line-break class at all. Latin patched, marker removed, English now reads
"although in certain persons whom she brings forth here". ⚑ The column is **0581B**, not 0581C as the
first draft of this file said.

⚑ **The former entry's own argument was wrong in an instructive way.** It read three deformations of
*quidam/quibusdam* in one short work as evidence about the *plate*. All three were the
*digitization*. The frequency check that raised them (536 *quidam* / 37 *quorumdam* / 278
*quibusdam* against the split and metathesized forms) did its job perfectly — it is what got the
plate opened — but it identifies a **suspect**, never a **culprit**.

### 0584A · *digit* for *diligit* — non-word, and it is the clause's only verb. `[sic:]`

*Se autem non diligit qui **digit** iniquitatem.* The marked run is the predicate of its own clause,
so under 7a⁗ the English supplies it in plain words beside the marker: `But he does not love himself
who loves [sic: *digit*] iniquity.` Strip the marker and the clause still has a verb, its negation
and its subject. The conjecture is *diligit*, near-certain: the previous clause prints *non diligit*
and the proof-text that follows prints *diligit iniquitatem* in full.

### 0584C · *car nali* for *carnali* — split type. `[sic:]`

`when the soul by carnal [sic: *car nali*] concupiscence struggles against the spirit`. The fourth
word-division defect in the work.

### 0583A · *Qui qui autem non credunt* — dittography. `[d:]`

The two runs are **identical**, so Pattern 11 (not 11a) governs and the marker wraps the second:
`But they who [d: who] do not believe are slower and worse than the demons.` It reads as a
compositor's doubling, not a textual one — there is no construction in the sentence that could want
two relatives.

### 0582C · *nolunt* where the argument needs *volunt*. `[cj:]`, the one in the work

*Gentiles vero ad talia non sunt cogendi. Sed si **nolunt** eis congruere, ut Timotheus, non sunt
prohibendi.* The printed word is a perfectly good Latin form, so Pattern 12 has nothing to wrap and
Pattern 7 renders it — and the English then asserts something the gloss is arguing against, which is
Pattern 18 exactly. The passage is the standard balance (do not compel, do not forbid), and its
example is **Timothy, who did conform**; with *nolunt* the second clause forbids nothing and the
example contradicts it. The word that went wrong is a **negation** (*ne*+*volunt*), which is the
class 18a's 2026-08-15 extension explicitly admits even where the sentence is merely incoherent.
Rendered `are unwilling [cj: *nolunt*; read *volunt*, "are willing"]` — additive, Migne's word kept.

### 0584D · *Regnum non Dei consequentur* — the negative in the wrong place. NO transposition

Two readings were weighed. **The marker took the printed order** and renders it, "The kingdom not of
God shall they obtain", with a `[var:]` carrying Gal 5:21's *regnum Dei non consequentur*. **The
rival — reading the *non* as governing the verb and printing "shall not obtain the kingdom of God" —
lost because it is a silent repair of exactly the class 7a exists to expose**: it would produce
smooth prose, satisfy every count-based check (the negative is present either way), and destroy the
only evidence that the plate is defective here. A `[cj:]` was also weighed and declined: Pattern 18
does not reach inside a quoted scripture, and 14 does.

### 0571B · *devotio* / *devotare* — the word-play, and why no italics were added

*et vulgo dicitur devotio … hoc erat anathematizare, quod vulgo dicitur devotare.* Migne sets neither
word in italics, and every italic span in the English must answer to one in the Latin, so the
register's licence to keep a technical Latin word in italics could not be used. Rendered "a devoting"
and "to devote" throughout, which carries the Roman sense (consecrating to the infernal gods) that the
paragraph is defining, and keeps the pun with *anathema* legible.

### 0581A · *gentium. In monte Sina.* — one italic run across a lemma boundary

Migne's italics open at *gentium* (the tail of the previous gloss, completing *pater multarum*
[*gentium*]) and close after *In monte Sina.* — which is the next verse lemma. **The italic run
therefore straddles the boundary between a gloss and the lemma that follows it**, and there is no
other place in the work where that happens. Reproduced 1:1 as one span, because span structure is
sacred; but it is very likely two spans on the plate. ⬜ p. 296 was read for *quibusdam* at
0581B and this question was NOT put to it; it remains open, and it is safe open because it fires no
marker. See §5e.

### 0583B · `VERS. 11.` printed without the `.--`

Every other verse address in the work is `VERS. n.-- `; this one is `VERS. 11. ` — the same class as
Ruth's `VERS.9`, and reproduced verbatim rather than normalized, because the address passes through
untranslated under convention 1 and the Latin side shows the same thing.

### 0583A · a sentence that simply stops

*…quae nihil valent in Christo* [0583A] *Sed fides.* — no terminal stop before the next lemma.
Pattern 8: never supply. The English stops too.

### 0586A · *In semetipso* with no closing stop

*In semetipso* Id est intus in conscientia sua pura. The italic lemma carries no period where all its
neighbours do. Reproduced as printed.

### 0586D · *sua* / *suo* — a gender distinction English cannot show

*Qui seminat in carne* addit *sua*. Cum vero dicit, *in spiritu,* non addit *suo*. The whole
observation is that the possessive agrees with *carne* and would have had to be *suo* for *spiritu* —
and English "his own" is the same word for both. Pattern 9: no emendation to undo, no marker to add,
the facing Latin column carries it. Logged so a later sweep does not churn it. ⚑ The gloss's own next
sentence supplies the point for an English reader (*the carnal seed is from man, the spiritual from
the Spirit of God*), so nothing is actually lost.

### 0586D · *dat offensum ex fide* — ⭐ PLATE-CONFIRMED AS MIGNE'S. Rendered literally, no marker

*qui spiritui **dat offensum** ex fide, cum charitate serviendo justitiae…*

**Plate read run 2026-08-23 at 1200 dpi: the plate prints *dat offensum*.** The reading is Migne's
own, not the digitization's, and there is nothing to patch. That is the fact this entry exists to
carry, because it is the one a reader cannot recover: without it, "he who gives to the spirit an
offence out of faith" looks like either our mistranslation or a transcription slip, and it is
neither.

*offensum* is a real noun ("an offence"), so Pattern 12 has nothing to wrap and Pattern 7 renders it
as printed. **No marker fires**, which is why this crux has to say plainly that the page is broken
here rather than leave a reader to take the sentence at face value: the clause as printed cannot mean
what the paragraph is arguing, which is that the man who *serves* the spirit reaps of the spirit.

**The conjectures weighed, and why each lost:**

- ***obsequium*** ("obedience, service") — **the strongest**, and the one this crux would take if it
  took any: it yields "renders to the spirit obedience out of faith" and matches *serviendo
  justitiae* in the same clause. It lost the marker, not the argument.
- ***assensum*** ("assent") — rejected. It construes and is graphically near, but *dat assensum* is a
  formula for agreeing with a proposition, while the clause's other members (*charitate serviendo*,
  *legem spiritualiter intelligendo*) are all acts of service, not acts of assent.
- ***affectum*** ("affection") — rejected. Furthest from the printed letters of the three, and it
  duplicates *cum charitate*, which already carries the affective member; the clause would say the
  same thing twice and leave *serviendo* unanswered.

**`[cj:]` declined**, and the reason is 18a rather than the merits: the census is CLOSED and Wilson
ruled against re-opening it. Independently, the word that went wrong is neither a negation nor a
correlative, and the resulting English is **incoherent rather than false** — a reader meets a sentence
that does not work and knows something is wrong, which is not the Pattern 18 population (a sentence
that works smoothly and asserts the opposite).

### 0582D · *externa beatitudo* — DECLINED, and ⚠ THE PLATE WAS NOT READ

*quia ex fide justitia, et spes, id est, **externa** beatitudo.*

**The work's own control is against the printed word:** 0577B and 0576A both print *aeterna
beatitudo* in the identical phrase, glossing the identical idea. "External blessedness" is not a thing
this gloss anywhere means.

**Rendered "external blessedness"** under Pattern 7 — *externa* is a real word occupying its slot —
and the conjecture *aeterna* lives here and not in the text.

**Does it clear Pattern 18's bar? I agree with the blind reader that it does not, and the reason is
worth stating rather than asserting.** The bar is that the printed word must make the sentence *say
something the author is arguing against*. *Externa beatitudo* does not: it says something slightly
odd but not contrary — hope's object as what lies outside the present is a reading a sympathetic
reader can construct — whereas 11081's *munde* made the angels announce peace *purely* in a sentence
whose next clause is *in terra pax hominibus*. The distance between "odd" and "opposite" is the whole
width of Pattern 18. ⛔ And in any case 18a closes the census.

⚠ **PLATE NOT READ HERE**, recorded deliberately. This site sits on p. 296 (cols 581/582), a page
opened for *quibusdam* at 0581B — so the read was available and was not extended to it. **It is safe
to ship unread because no marker fires on it:** the English renders the printed word, nothing in the
apparatus makes a claim about the plate, and if a later read finds *aeterna* the repair is a one-word
Latin patch plus a one-word English change, with no marker to withdraw and no public claim to
retract. That is the general test — **an unread candidate is safe to ship if and only if it fires no
marker.**

### 0573B · *non remanerent* — a plural verb against a singular subject. ⚠ PLATE NOT READ

*Quod si esset veritas Evangelii apud gentes, **non remanerent**, sed omnes judaizarent.*

**The reading taken** makes *veritas Evangelii* the subject: "if it were so, the truth of the Gospel
would not remain among the Gentiles, but all would judaize" — the sense the paragraph plainly wants,
since the false brethren's aim was to bring the Gentiles back into the servitude of the law. **The
rival, making *gentes* the subject of *remanerent*** ("the Gentiles would not remain"), lost because
it strands *veritas* with no verb of its own; the plural is best explained as attraction to the
*gentes* immediately before it.

⭐ **What the blind reader added, and it is right: the English REPAIRS the disagreement in the act of
rendering it.** *remanerent* is plural against singular *veritas*, and English "would not remain" is
number-neutral — so the defect passes through our column leaving nothing a reader could see. That is
the 11632 @0304A shape (*ut **signa** prius ardeat*, "that signs may burn"), where the ruling was that
**where the English has no exponent for the defect, rendering it silently is a repair.**

⚠ **Why no marker fires here even so, and why 11632 does not govern.** 11632's *signa* was a noun
whose number IS visible in English (*sign*/*signs*), so the plural in our column was ours and
concealed his. Here the disagreement lives entirely in a Latin verb ending that an English
subjunctive does not carry at all — Pattern 9's territory, a systemic feature with no English
exponent — and the facing Latin column prints *remanerent* where any reader can see it. **The honest
treatment is this crux, and the crux is the only place the fact can live.**

⚠ **PLATE NOT READ.** p. 292 (cols 573/574) *was* opened, for *Qui dam* and *ingentes*; this site was
not put to it. Safe to ship unread by the same test as 0582D: **no marker fires**, so nothing in the
apparatus asserts anything about the plate that a later read could falsify.

### 0577B · *non quia ex lege non est vita* — a double negative that has to ride

*ergo est ita contra promissa, ut per eam impleatur aliter quam promissum est: **non quia ex lege
non est vita**…* Both negatives carried ("not because from the law there is not life"), per 7a and
against the temptation to smooth one away. ⚠ Note also that Migne prints **no question mark** on
*Lex ergo…ergo est ita contra promissa* although the construction is the Vulgate's *Lex ergo adversus
promissa Dei? Absit.* Pattern 8 forbids supplying one, so the English is a statement too.

### 0572B · ⭐ THE MISSING NEGATION IS MIGNE'S OWN — plate-confirmed, and NO marker fires

*Dicit modo quia olim dum dixit hominem ex lege justificari, hominis gloriam inutilem, gratiam Dei
praedicavit.*

**Plate read run 2026-08-23: there is NO *non* on the plate.** The line prints *dixit hominem ex lege
justificari, hominis gloriam inutilem, gratiam Dei praedicavit*, exactly as our file has it. So the
missing negation is **Migne's own, not the digitization's** — what Paul is described as having
preached formerly (*olim*) requires *hominem **non** ex lege justificari*, and the plate does not
supply it.

**The English is faithful and stands unchanged:** "when he said that a man is justified out of the
law, he preached the glory of man to be unprofitable, and the grace of God." Note also that
*praedicavit* governs two objects of which only the first has its predicate (*inutilem*); the ellipsis
is rendered intact.

⛔ **No marker fires, by ruling and not by oversight.** A dropped negative in the author's own prose
is the Pattern 18 shape, and **Pattern 18's census is CLOSED (18a); Wilson ruled against re-opening
it.** The crux carries it instead, with the plate as witness — which is the strongest form this
finding can take, because a reader now knows the negative is absent *from the page*, and not from our
transcription or our English.

### 0582B–C · *aut non causa promittenti Christi, instituta, aut adhuc promittere* — ⚠ PLATE NOT READ

*Gentibus vero non sunt imponenda, ne videantur **aut non causa promittenti Christi, instituta, aut
adhuc promittere**, sed cessando jam patent signa futuri fuisse.*

**The Latin does not construe.** *causa* + the genitive *Christi* is right; the intervening dative
participle *promittenti* agrees with nothing in the sentence.

**Rendered as closely as the printed words allow** — "lest they seem either not to have been
instituted for the cause of Christ the promiser, or to be promising still" — with no marker, because
the run is real Latin words in real forms.

⛔ **And that is exactly the danger the blind reader named, which this entry now carries.** The
English is smooth where the plate is broken, so **a reader meets a tidy sentence with no signal at all
that anything is wrong.** Worse, the smoothing lands on the sentence's pivot: the *aut … aut* turns on
**who promises**, and the argument is that the rites were **instituted in order to promise Christ**
and are **no longer promising** (*sed cessando jam patent signa futuri fuisse*). Our English makes
**Christ** the promiser, which breaks the pivot — the second limb is then left with no one to be
contrasted with.

**The rival, named and weighed:** ***causa promittendi Christum*** — "for the cause of promising
Christ", a gerund with an accusative object, which restores the pivot exactly and is a small
palaeographical step from *promittenti Christi*. **It was not taken into the running text**, under
Pattern 7: it is a conjecture, and conjecture belongs here. ⛔ Nor did it take a `[cj:]` — 18a's
census is closed, and in any case Pattern 18 requires a **real word in its slot** to make the sentence
assert something false, whereas here the words do not construe at all, which is a different defect.

⚠ **PLATE NOT READ**, and of the three unread sites this is the one I would read first if a fourth
read were run — because if the plate prints *promittendi Christum* the whole difficulty is Corpus
Corporum's and dissolves, and the shape (a defective form tidied into something that half-works) is
the normalization class that 0574A proves this very page-opening is capable of. **Safe to ship unread
only because no marker fires**; the apparatus asserts nothing here.

### 0571D · *Media aqua posita erat omnibus praeceptum Dei*

*media aqua* nominative, *praeceptum Dei* in apposition. Rendered "Water in the midst had been set
before all, the commandment of God" rather than smoothing the apposition into a copula.

### 0580C · *Quem deformatis formosus sit in vobis* — the construal I took, and the one I rejected

**Taken:** *deformatis* is the 2nd person plural of *deformare* — "**Whom you disfigure**, let him be
beautiful in you." This construes completely: *Quem* is the object of *deformatis*, and the following
sentence (*ut formosus aliis per vos appareat*) and the closing comparison (*gravius dictum, quam si
diceret eos formari in Christo*) both depend on Christ being the one formed and disfigured **in
them**, which is the graver saying. **Rejected:** *deformatis* as the dative/ablative plural of
*deformis* ("to you who are deformed"), which was the first reading tried; it lost because it leaves
*Quem* accusative with no verb to govern it, and would have required reading *Quem* as *Qui* — a
silent emendation.

### 0577A · *cui mediat per humanam* — the antecedent

*tamen est Deus unus cum Deo Patre per divinam naturam, **cui** mediat per humanam.* Taken as *Deo
Patre*, the only dative-eligible antecedent in the sentence: "to whom he mediates by the human." The
alternative (*cui* reaching the two *extrema* of the previous sentence) lost on number — *cui* is
singular.

### 0579B · *quia perfecte non justificat* — where the negative sits

*Vere lex est egenum elementum: quia perfecte non justificat.* Test 2a's trigger fired (a negative on
a verb with an adverb adjacent). **The negative was placed on *perfecte*** — "because it does not
justify perfectly" — **proved from the structure of the next gloss, not from what reads well**:
*Egena. Quia quantum juvat, non per se, sed respectu gratiae facit* concedes that the law **does**
help, so the law is *egenum* because its justification is incomplete, not because there is none.

### 0574C · a question mark on what is not a question

*Non mihi, sed quod Deo jam possum? quia cum Christo sum.* The mark rides as printed and the sentence
continues in lower case after it, exactly as Migne sets it. Pattern 8, and **not** 8b — the clause is
not an indirect question, so no colon recasting was used.

### 0585B · *neuter neutrum videt*

Two negatives in Latin idiom that English cannot double. Rendered "neither of the two beholds the
other". Logged because it is a place where a negation count will read as one short.

### 0572B · *pseudo* as a bare noun

*magis **pseudo** excommunicandi sunt* (0572B), *Imponebatur a **pseudo*** (0583B), *Isti erant
**pseudo*** (0587B), *quia **pseudo** dixerant Paulum Galatis inimicum* (0579D). Migne uses the
Greek stem alone as an indeclinable noun for the false apostles, and the ARGUMENTUM's own
*falsis apostolis* fixes the referent. Rendered "the false apostles" throughout. Not a defect —
it is a usage, and the work is internally consistent in it.

### 0584A · *criminamini* — Migne records a variant reading, and it is his to record

*Comeditis. Vel **criminamini,*** — the gloss offers a second reading of the text of Gal 5:15 (the
Clementine has only *comeditis*). Both are set in italics as lemmata and both are rendered. No
`[var:]`: the divergence is one Migne himself is reporting, and marking it would tell the reader
twice — the same principle as the rule against stacking our `[sic:]` on his `( sic )`.

### Second person throughout

Pattern 17 governs and the plate decides. Plural *vos* → **you** in the gloss prose (as in the
shipped NT gloss books 8991 and 8998); **ye** kept only where a plural scripture **imperative** is
being quoted or glossed (*Gustate* → "Taste, and ye shall be as gods"; *Placete* → "Please ye all
men"; *Nolite facere* → "Do not ye your justice"; *Estote* → "Be ye as I"; *Induite vos* → "Put ye
on"; *Dicite* → "Say ye"). Singular *tu* → **thou** (*Quomodo gentes cogis* → "How dost thou compel
the Gentiles"; *ut intelligas* → "that thou mayest understand"; *Considerans teipsum* → "Considering
thyself"; *quos iterum parturis* → "whom thou bringest forth again").

### 0576C–D · ⛔ *dignus* is MASCULINE — it is the PEOPLE made worthy, not the law. REPAIRED

*Posita est in medio, inter promissionem et semen … ut populum Dei erudiret sub timore Dei: ut
**dignus** fieret [0576D] excipere promissionem quae est Christus.*

**The English rendered both clauses with "it" (= *lex*), and they cannot both be the law.** *Lex* is
feminine and would require ***digna***. *Dignus* is masculine and agrees with ***populus*** — the one
made worthy to receive the promise is the people the law instructs, which is also what the sentence
itself argues (*ut **populum**… erudiret*, then *ut dignus fieret*).

As it stood, the English made **the law** worthy to receive Christ instead of the people the law was
given to school — a different proposition, and a doctrinally loaded one.

**Latin morphology settles this outright; no plate read is needed and none was sought.** Corrected to
"that **they** might be made worthy to receive the promise which is Christ" — the plural pronoun
because English "it" can only be read back onto *lex*, while "they" can only be read onto the people;
the collective *populus* takes an English plural naturally and no word is supplied.

⚑ This is the unexpressed-subject class the brief names as dominant, in its purest form: **both
readings construe in English and only the Latin morphology decides**, so nothing but reading the
ending catches it.

### 0579A · *sed scientiae … et dogmatum magnitudo* — a mis-parse that produced plausible English. REPAIRED

*Notandum quod clamor in Scripturis non magnae vocis emissio, sed **scientiae** intelligatur, et
**dogmatum magnitudo**.*

**Was:** "but as knowledge, and the greatness of doctrines." **Now:** "but as **the greatness of
knowledge and of doctrines**."

*scientiae* is genitive (or dative) and **cannot stand parallel to the nominative *emissio***. The
single nominative in the *sed* limb is ***magnitudo***, and it governs both genitives — *scientiae*
across the interposed verb, *dogmatum* after it. The old rendering asserted a **two-member predicate**
where Migne has **one**.

⚑ **This is the fourth test's class exactly** — Judith's *ferias*. Nothing was missing, everything was
at parity, the negation sat on the right limb (*non magnae vocis emissio*), and the sentence read
perfectly well. Only the question "does it ASSERT what he asserts?" reaches it.

### 0586B · Gal 6:2 quoted TWICE, DIFFERENTLY, five lines apart — the variation was erased. REPAIRED

Migne prints, within one gloss:

- *Alia sunt opera participandae infirmitatis, de quibus supra: **Alter alterius onera portate;***
- *Contra negligentes … dicit: **Invicem onera portate.***

**Both were rendered "Bear ye one another's burdens."** The Clementine reads *Alter alterius onera
portate* (Gal 6:2), so the **first** is the verse and the **second is Migne's own loose
re-quotation** — and rendering them identically erases the fact that he varies, which is precisely
the datum this edition exists to carry.

**Corrected:** the second now reads "**Bear ye burdens one for another.**" — differentiated, and
differentiated in the direction the Latin points (*invicem*, reciprocal adverb, no *alter alterius*).

⚑ **Note what class this is, because the apparatus does not cover it: a re-quotation INSIDE the
gloss, not a lemma.** The named-lemma list in the launch brief covers lemmata, and §1's divergence
table is built from that list; neither reaches a phrase the gloss quotes to itself in passing. 8987
warned about exactly this ("your lemma list does its job; it does not cover the sentences between the
lemmata") and here it is again, one book later. **No `[var:]` fires** — the second form is not a
scripture citation diverging from the received text but Migne paraphrasing himself, and §1d already
records it as such.

### 0583A · *daemones* — one word, one voice. REPAIRED

*Nam et **daemones** credunt et contremiscunt* [n: (Jac. II)] … *Nam ipsum Christum esse **daemones**
crediderunt.*

The quotation was rendered "the **devils** also believe and tremble" while the four sentences
expounding it all said "the **demons**". Migne prints *daemon-* throughout and agrees with the
Clementine at Jac 2:19, so the traditional English echo was *permitted* — nothing in the scripture
policy forbids it.

**But the gloss's argument runs straight through the quoted word** (*Nam ipsum Christum esse daemones
crediderunt, nec tamen in Christum crediderunt*), so the reader has to carry the word from the
quotation into the exposition, and our page changed it under him.

⚑ **The tell was the cadence, not the lexicon.** "the devils also believe, and tremble" is the
AV/Douay line, and it had arrived at exactly the point where the translator's own settled word
elsewhere in the work is "demons" — the 7a″ conformation shape, in its mildest form: not a wrong
rendering, but the familiar Bible's word displacing our own at the one place where consistency was
load-bearing. **Corrected to "the demons also believe and tremble."**

### 0575C · *De eo quod sub lege fuerat* — a person read as a thing. REPAIRED

**Was:** "Concerning **that which** had been under the law there could be doubt." **Now:**
"Concerning **the fact that he** had been under the law there could be doubt."

The sentence before is Paul on himself: *ego qui habui opera legis, non per ea, sed per fidem accepi
potestatem*. The argument is that **Paul's own case** could be doubted — he *had* the works of the
law, so a sceptic could attribute his powers to them — while the Galatians' case, who never had the
works, settles the matter (*sed per similitudinem istorum totum liquet*).

**Both readings construe** — *de eo quod* + neuter ("concerning that which") does parse — **and the
English chose one silently**, which is the defect whether or not the choice was right. The chosen
reading also happened to be the one that dissolves the argument: "that which had been under the law"
has no referent in the paragraph at all.

⚑ *De eo quod* + indicative is the ordinary Latin for "as to the fact that", and it takes its subject
from the preceding clause — here Paul, in the third person (*fuerat*), as the gloss shifts out of his
voice. The rival ("concerning **him** who had been under the law") would require *de eo qui*; it is
named here because it yields the same sense and a reader may prefer it.

### 0574D–0575A · *fascinatio* — one word, rendered two ways inside the passage that DEFINES it. REPAIRED

*dum et hic eorum actus **fascinatio** dicitur* … *unde Salomon: **Fascinatio** malignitatis obscurat
bona.*

The first was "a **fascination**", the second "**bewitching**". **The paragraph's whole point is that
one word covers both** the evil eye (*fascinus … qui nocet infantibus*, eyes that burn with their
look) and envy (*Similiter invidia tanquam fascinus urit*) — and the Solomon text is adduced as the
**proof** of that identity. Splitting the word breaks the link between the definition and its
proof-text: an English reader met "fascination" in the definition and "bewitching" in the proof and
had no way to see they were the same claim.

**Corrected to "bewitching" at the first site**, matching the settled word already used for *fascinus*
three times, for *Fascinavit*, for *fascinati* and for *fascinantes* in the same paragraph. One voice
within one work; the direction of the fix follows the majority usage rather than imposing a new word.

### 0578A · *a patre substitutus* — the cognate is the false friend. REPAIRED

**Was:** "one **substituted** by his father." **Now:** "one **placed under [tutelage]** by his
father."

The gloss is expounding Gal 4:1–2, where the heir *sub tutoribus et actoribus est usque ad
praefinitum tempus **a patre***. *substitutus* here is *sub-* + *statutus*, "set under [guardianship]"
— the state the verse describes — **not** "replaced", which asserts a different relation entirely
(an heir put in someone else's place, which is nowhere in Galatians and would contradict *haeres
futurus* in the same breath).

⚑ The English cognate "substituted" is the false friend, and it is the kind that reads fluently:
"like an heir that is to be, and one substituted by his father" is grammatical, plausible, and about
a different subject. The supplied "[tutelage]" is in square brackets per the corpus convention for
our own supplied words; the Latin has no noun there, and *a patre* is retained as the agent Migne
prints.

### 0575A · *ille tantus qui est* — CRUX, both readings named, neither taken silently

*Vere fascinati, quia ante oculos, id est, in vestra praesentia **ille tantus qui est**. **Jesus
Christus proscriptus est.** Id est, exhaeredatus.*

**Taken:** "he who is so great" — *tantus* predicative, *qui est* an ordinary relative, the whole
phrase a periphrasis for Christ, named outright in the lemma that follows.

**The rival, and it is strong:** ***ille tantus, qui EST*** — "that great one, **HE WHO IS**" — taking
*qui est* as the Exodus 3:14 divine title (*Ego sum qui sum*; *Qui est misit me ad vos*), which is a
commonplace of exactly this kind of gloss, with the following lemma supplying the predicate: **the
one who IS was disinherited.** That reading makes the sentence's point rather than merely restating
the subject, and it explains why *tantus* stands where it does.

**Both construe, and the English chose one silently — which is the defect this crux exists to
undo.** The rendering is left as it stands (Pattern 7: the printed words support it, and re-casting
to "HE WHO IS" would import a capitalised divine title Migne does not typographically mark), but a
reader is now told there are two, and which was taken. No marker fires: nothing is defective, and
`[cj:]` is closed by 18a in any case.

### 0572B · *Judaeis et Graecis Ecclesiae Dei* — a supplied "and" removed. REPAIRED

*Sine offensione estote Judaeis et Graecis Ecclesiae Dei* (Migne's note: II Cor. VIII; the verse is
1 Cor 10:32).

**Was:** "to the Jews and to the Greeks **and** to the Church of God." **Now:** "to the Jews and to
the Greeks, to the Church of God."

Migne prints **two members joined by *et* and the third in asyndeton**. The Clementine has all three
joined (*Judaeis, et gentibus, et ecclesiae Dei*), so the supplied "and" drifted the English toward
the received text — **in the same breath as a `[var:]` flagging a divergence from it**, which is what
makes a very small thing worth fixing rather than merely logging: the marker tells the reader the
citation differs, and the prose beside it quietly made it differ less.

⚑ The `[var:]` on *Graecis* / *gentibus* is unaffected and stands; §1a's row is unchanged.

---

## §3 · CANDIDATES RAISED AND REJECTED

- **Contracting *Qui dedit.* / expanding it to "Who gave himself".** Rejected, and this is the class
  the brief warns about. *Qui dedit.* (Gal 1:4, clipped before its object) and *Semetipsum.* (a
  complete one-word lemma, glossed separately in the very next sentence) are **different classes**.
  Expanding the first would pre-empt the second and manufacture an inconsistency that is not on the
  page. Rendered "Who gave." and "Himself." — and an early draft that read "he offered **himself** of
  his own accord" in the gloss on *Qui dedit* was **withdrawn**, because it imported the next lemma's
  word into the first lemma's exposition.
- **Expanding *Segregavit ex utero matris.*** Rejected. Convention 3 expands a fragment that *is not
  English*; this one construes as printed. Supplying *me* and *meae* from Gal 1:15 would be
  conformation to the received text, which is the defect, not a cure for it.
- **Contracting *Nihil me.* to a stump.** Rejected in the other direction: "Nothing me" is not
  English, so convention 3 applies and it is rendered "You have injured me in nothing." Per the
  brief's ruling, where a work treats bare lemmata two ways the fix is to expand, never to contract.
- **A `[sic:]` on *abinvicem* (0584A).** Rejected. Pattern 9: *abinvicem* is attested late Latin, not
  a word-division defect, and marking it would put this work's four genuine split runs into noise.
- **A `[var:]` on the *quicunque/quicumque*, *caeteri/ceteri*, *coelum/caelum*, *Hierusalem*,
  *imo/immo*, *etsi/et si* doublets.** Rejected wholesale — Pattern 9, orthography of the period.
- **A `[cj:]` on *externa beatitudo* (0582D).** Weighed against a two-instance control inside this
  same work and **declined**; reasoning in §2.
- **A `[cj:]` on *offensum* (0586D).** Declined; reasoning in §2.
- **A `[cj:]` or a transposition on *Regnum non Dei* (0584D).** Declined in favour of `[var:]` and
  the printed order; reasoning in §2. This is the site a blind reader is most likely to flag, so the
  reasoning is stated there in full rather than here.
- **A `[var:]` on the note *(Levit. XIX)* at 0584A.** Rejected: the lemma quotes Gal 5:14 and agrees
  with it exactly. The mismatch is between Migne's *note* and Leviticus, not between his text and the
  Clementine, and `[var:]` marks the second. Recorded in §1c instead.
- **Reordering *Benefacite … Diligite* (0587B) to the Vulgate's sequence.** Rejected outright —
  Migne's order is Migne's, and nothing in the gloss turns on it.
- **Splitting the italic run at 0581A into two spans.** Rejected: span structure is 1:1 with the
  Latin and is not ours to tidy. Logged as a plate-read question instead.
- **Normalizing `VERS. 11.` to `VERS. 11.--`.** Rejected. Convention 1 passes the address through
  untranslated; Pattern 9's licence to normalize applies to *translated* structural labels, and this
  one is not translated.
- **Supplying a `?` at 0577B (*Lex ergo…*).** Rejected. The Vulgate's *Lex ergo adversus promissa
  Dei?* is a question; Migne's gloss sentence is not punctuated as one, and Pattern 8 forbids
  supplying the mark. 8b was checked and does not apply — the clause is not an indirect question.
- **Supplying a terminal stop at 0583A and 0586A.** Rejected, Pattern 8.

---

## §4 · THE BLIND READ, AND WHAT IT CHANGED (2026-08-23)

An independent reader who had not seen this file read all seven chunks against the Latin. **Fifteen
findings; thirteen applied, two applied as cruces only, and one — finding 7 — handed back for me to
settle with the plate.** Every edit in the repair pass traces to a numbered finding; nothing else was
touched and the work was not re-translated.

### 4a. What it found, and what was done

| # | col | the finding | outcome |
|---|---|---|---|
| 1 | 0576C–D | *dignus* is masculine: the PEOPLE are made worthy, not the law | **repaired** — "it" → "they" |
| 2 | 0579A | *magnitudo* is the only nominative and governs both genitives | **repaired** — one predicate, not two |
| 3 | 0586B | Gal 6:2 quoted twice, differently; both rendered alike | **repaired** — the second differentiated |
| 4 | 0583A | *daemones* "devils" in the quotation, "demons" in its gloss | **repaired** — one voice |
| 5 | 0582B–C | *promittenti Christi* smoothed; the *aut…aut* pivot lost | **crux only**, rival named, plate not read |
| 6 | 0575C | *De eo quod* read as a thing where the argument wants Paul | **repaired**, rival named |
| 7 | 0573D | *Ut nos ingentes* — Pattern 10 fused type, not a Pattern 14 variant | **re-classified**: `[var:]` → `[sic:]` |
| 8 | 0573B | plural *remanerent* silently repaired by number-neutral English | **crux only**, plate not read |
| 9 | 0572B | the missing *non* | **crux only** — plate says it is Migne's; 18a closes the marker |
| 10 | 0586D | *dat offensum* | **crux only** — plate-confirmed Migne's; conjectures named |
| 11 | 0582D | *externa* against the work's own *aeterna* ×2 | **crux only**, declined, plate not read |
| 12 | 0574D–0575A | *fascinatio* rendered two ways inside its own definition | **repaired** |
| 13 | 0578A | *substitutus* = "set under", not "replaced" | **repaired** |
| 14 | 0575A | *ille tantus qui est* — the Ex 3:14 title as rival | **crux only**, both named |
| 15 | 0572C | a supplied "and" in an asyndetic citation | **repaired** — "and" dropped |

### 4b. Where I think the reader was wrong, or only half right

⭐ **Finding 7 was flagged rather than asserted, and the caution was right at the time but the
conclusion is right now.** The reader argued Pattern 10 on two grounds and declined to assert it
because **Test 4** of the agent brief (the digitization alters Migne's spelling in both directions) cuts both ways. I agree with the conclusion and think the case is stronger
than the two grounds given: see §2 @0573D for four reasons, two of which (the missing predicate, and
*in circumcisione* four words later demanding a parallel *in gentes*) are internal to Migne's own
sentence and do not depend on the plate at all. **The plate read settled the transcription question;
it did not settle the classification, and the classification was decidable from the Latin all along.**

⚑ **Finding 8's diagnosis is right and its proposed remedy would have been wrong.** The reader called
it "the 11632 @0304A ruling" and asked for a crux, which is what it got. But had the ruling been read
as reaching a *marker*, it would have been a mistake: 11632's *signa* is a noun whose number English
shows, so the silent repair was in a word the reader can see; *remanerent* is a verb ending English
subjunctives do not carry at all. Same defect class, different exponent, and the exponent is what
decides between a marker and a crux. Recorded at §2 @0573B.

⚑ **Finding 15 is described as "very minor" and is not.** The drift is small in itself; what makes it
worth the edit is that it moved the citation **toward** the received text in the same sentence where
a `[var:]` announces a divergence **from** it. The reader saw this and still hedged. The hedge was
the only soft judgement in fifteen findings.

⚠ **Finding 6 offers two paraphrases ("him who" and "the fact that he") without choosing.** I chose
*the fact that he*, because *de eo quod* + indicative is the ordinary Latin for it and "him who"
would want *de eo qui*. The reader's instinct — a person, not a thing — was correct; the grammar
picks which person-construction.

### 4c. What the reader checked and found CLEAN, and it is the most valuable part

Recorded because a list of findings alone cannot be told from a report by an agent that never looked.

- ⭐⭐ **Zero polarity defects in a book made of nothing but negatives.** Not one negative dropped,
  intruded, relocated or mis-hosted. Every high-risk site is correctly scoped: *non modo sibi … sed
  et his* · *non solum tempora, sed etiam loca* · *non seipsum, sed Deum in seipso diligi volebat* ·
  *non est **tantum** unius populi … sed et gentilium* · *nullam **omnino** generandi potentiam* ·
  *non tam … quam* · *mulieres dicit non corruptas, sed feminas* · and both double negatives. Note
  that four of those are the exact 2a trigger population (a negative on a verb with a quantifier or
  correlative adjacent) and all four hold.
- ⭐ **0584D *Regnum non Dei consequentur* — left exactly as it is.** The negative is displaced onto
  *Dei* on the plate and the English renders it displaced, with a `[var:]` giving the received order.
  **That is Pattern 7 obeyed at the precise point where obeying it looks like an error**, and it is
  the site a future reader is likeliest to "fix". Do not.
- **All `[var:]` verified exact against the Clementine**, including the real finds:
  *proscriptus*/*praescriptus* with *exhaeredatus* confirming Migne (plate-confirmed this session) ·
  Rom 11:32 *in justitia* · Is 48:22 *gaudere* · Sap 4:12 *malignitatis* (plate-confirmed).
- **Every `[sic:]` passes the swallow test**, the fourth question (does the clause still have its
  object?) included. Nothing here is the Tobit failure. The two new markers written in this pass
  (*ingentes*, *leges*) were held to the same test.
- **The `[cj:]` at 0582B is well aimed** (*nolunt* → *volunt*) — and the plate confirms Migne prints
  *nolunt*, so it is anchored on a genuine reading and not on a digitization artifact.
- **All 71 column anchors checked by position**, not merely presence and order (test 2b); zero
  mismatched punctuation bands across all 71.
- ***Qui dedit.* / *Semetipsum.* are different classes** and the contrast is not an inconsistency.
  *Nisi per fidem* → "But by the faith." declined correctly. *Segregavit ex utero matris.* left
  objectless and NOT conformed — correct.

---

## §5 · THE PLATE (2026-08-23)

`raw/scans/pl114/patrologiaecurs06saingoog.pdf`, PDF page = (column + 11) / 2 — confirmed against the
printed corner numbers (p. 292 heads "574", p. 293 heads "575"). Read at 900 dpi on cropped column
bands, one word re-read at 1400 dpi and one at 1200 dpi. Every crop was confirmed by eye before
`data/tei-patches/8992.json` was written.

### 5a. Four patches to the Latin — three word-boundary defects and ONE NORMALIZATION

| col | our old Latin | the plate | class |
|---|---|---|---|
| 0574A | *Qui dam aemulatores* | **Quidam** (plate hyphenates *Qui-* / *dam*) | unjoined line break — the digitization's |
| 0574A | *aemulatores **legis*** | ⭐⭐ ***aemulatores LEGES*** | **NORMALIZATION** — Migne's defective form, tidied upstream |
| 0574D | *quorum dam oculi* | **quorumdam** (hyphenated *quo-* / *rumdam*) | unjoined line break — the digitization's |
| 0581B | *in quisbusdam* | **quibusdam**, one word, unbroken line | ordinary misread — the digitization's |

**Consequences in the English:** three `[sic:]` withdrawn (*Qui dam*, *quorum dam*, *quisbusdam* —
all three marked the digitization, not the plate, and every one of them was therefore a marker
blaming Migne for someone else's error), and **one new `[sic: *leges*]`** written, with the evident
sense standing beside it in plain words. Net `[sic:]` 5 → 4.

⭐⭐ **The normalization is the finding of the session and nobody asked for it.** It was found while
the plate was open at that line for a *different* word. Full reasoning at §2 @0574A; the short form
is that **a form which reads perfectly may read perfectly because someone upstream fixed it, and no
test that takes the Latin file as its input can see that.** Two of the three prior instances in the
corpus (8948 *convivum*, 8990 *concilio*) were found the same way — incidentally, with the plate
already open.

⛔ **A transcription newline is NOT evidence of where the plate's line ends.** It agreed with the
plate at *Qui\ndam* here and at 8958's *tam per\nverse*, and **disagreed** at 0574D, where the TEI
breaks after *quorum* and the plate hyphenates at *quo-*. Corroboration once the plate has spoken;
never a substitute for reading it.

### 5b. Three reads that came back CONFIRMING MIGNE — checked negatives, and they are worth as much

| col | suspicion | the plate |
|---|---|---|
| 0573D | *Ut nos ingentes* a transcription fusion | **prints it as ONE italic word** — Migne's own; re-classified Pattern 10, `[var:]` → `[sic:]` |
| 0572B | a *non* lost in digitization | **there is NO *non* on the plate** — the missing negation is Migne's; no marker (18a) |
| 0586D | *dat offensum* a misread | **prints *dat offensum*** at 1200 dpi — Migne's; rendered literally, no marker |

Also confirmed on the same pages, and already carried in §1a: **0575A *proscriptus*** (against the
Vulgate's *praescriptus*, with Migne's own *exhaeredatus* confirming it) and **0574D–0575A Sap 4:12
*malignitatis*** (against *nugacitatis*). Both `[var:]` stand, plate-confirmed.

### 5c. ⚑⚑ THE BATCH PATTERN — non-words versus real words

Across three works this session, **every suspicion aimed at a NON-WORD was confirmed by the plate as
ours** (the digitization's), **and every suspicion aimed at a REAL, WELL-FORMED WORD was refuted,
with Migne printing it**: *credulitatem*, *Homo*, *convenientem*, *dat offensum*. This work
contributes to both columns — *quisbusdam* and the two split runs to the first, *dat offensum* and
*ingentes* to the second.

**The operational consequence: corpus frequency is decisive for non-words and worthless for real
words.** "278 *quibusdam* against 2 *quisbusdam*" is a near-proof that the odd form is the
digitization's, because Migne's compositor and Corpus Corporum's OCR do not produce non-words at
comparable rates. "*offensum* is a real noun and occurs N times in the corpus" proves nothing at all
about who set it. **Raise a non-word on frequency and expect to be right; raise a real word on
frequency and expect the plate to refuse you** — and raise it anyway, because a refused suspicion
that gets recorded is what makes the next one cheap.

⚠ And the class that beats both: a **normalization**, where the suspicion cannot be raised at all
because the word is real, well-formed, frequent, and correct. Only an eye on the plate finds it.

### 5d. Three candidates NOT read, and why that is safe

**0582B–C *promittenti Christi* · 0573B *remanerent* · 0582D *externa beatitudo*.**

All three sit on pages that were opened for other words (p. 292 and p. 296), so the reads were
available and were not extended. Each is recorded as unread at its own §2 entry.

⭐ **The rule this rests on, stated once: an unread candidate is safe to ship if and only if it fires
no marker.** None of the three fires one. The English renders the printed word in each case, the
apparatus makes no claim about the plate at any of them, and the cruces name the rival and say which
reading was taken. If a later read overturns any of the three, the repair is a Latin patch plus a
local English change — **no marker to withdraw and no public claim about another text to retract.**
Contrast the three markers withdrawn in 5a: those *did* fire, they *did* blame the plate, and they
were wrong for two months' worth of shipping had the read not been run.

**If a fourth read is ever run, the order is:** (1) 0582B–C *promittenti Christi*, because the
normalization class is now proven live on this very page-opening and *causa promittendi Christum*
would dissolve the whole difficulty; (2) 0582D *externa*, where the work's own control is two-to-one
against the printed word; (3) 0573B *remanerent*, lowest value, since either outcome leaves the
English and the apparatus exactly as they are.

### 5e. Standing plate coverage for this work

Coverage is `"spot"`. Pages read: **p. 290** (cols 569/570), **p. 292** (cols 573/574), **p. 293**
(cols 575/576), **p. 295** (cols 579/580), **p. 296** (cols 581/582), and the band carrying **0586D**.
On p. 290 and p. 295, read full width at 300 dpi: **no foot rule and no numbered *Forte* apparatus** —
which is why there are no `[cn:]` markers in this work. That is a **checked zero for those two pages
only** and is not evidence that the work carries no apparatus elsewhere.

⬜ **Still unread and still open:** whether the italic run at 0581A is one span or two (*gentium.*
closing one gloss and *In monte Sina.* opening the next lemma). Reproduced 1:1 as one span because
span structure is sacred and is not ours to tidy; the question fires no marker either.


---

## ⛔ PLATE SWEEP, 2026-08-29 — every `[sic:]` in this work read at Migne's plate

This work's `[sic:]` markers stood on columns nobody had read. All were read this session from the on-disk PL 114 scan at 300 dpi (500 dpi where a single letter decided it), full page width, with the volume's page map re-calibrated against the printed corner numbers **before** the read.

**A `[sic:]` asserts a defect in MIGNE'S TYPE, and our Latin is not the printed page — it is Corpus Corporum's transcription of it.** Where the plate disagrees with our file, the fault is ours and the accusation is withdrawn.

### Withdrawn — Corpus Corporum's error, not Migne's

| col | we printed | THE PLATE PRINTS |
|---|---|---|
| 0584A | *digit* | **diligit** |
| 0584C | *car nali* | **carnali** |

The Latin is corrected in `data/tei-patches/8992.json` and each marker is removed from the English.

### Confirmed — Migne's own defect; the marker stands

| col | the plate prints |
|---|---|
| 0573D | **ingentes** — Gal 2:9 in gentes run together in the lemma; gloss beneath shows the sense |
| 0574A | **leges** — for legis |

Full ledger for all 23 works swept: `data/plate-sweep/2026-08-29-sic-sweep.tsv`.
