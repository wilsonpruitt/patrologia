# 11512 Wolbero, *Commentaria in Canticum canticorum*: cruces, chunks 0000–0004 (stint T01)

Plate: `raw/scans/pl195/patrologiaecursu0195mign.pdf`, pp. 507–515 (cols 1001–1018), every page read once at 300 dpi, corners first, foot of page read full width. Record: `data/briefs/11512-PLATE-READS-0000.json`.

## Standing decisions (for merge-time reconciliation)

- *canticum* = **canticle** throughout (the preface's argument is a taxonomy of *cantica*); *Canticum canticorum* = **Canticle of Canticles**, and the plural *Cantica canticorum*, which Wolbero and Gravius use about as often, = **Canticles of Canticles**. The number follows the plate each time.
- *naturalitas · moralitas · rationalitas* = **naturality · morality · rationality** (Wolbero's triad, 1013A–1015A). *honestas* = **honesty**, *conversatio* = **conversation** (monastic sense), *profectus* = **progress**.
- *sublimitas* (Eph 3:18) = **sublimity**, kept apart from *altitudo* = **height** (1016C), because both words stand in the same sentence.
- *sacramenta* = **sacraments** (1014D–1015D, "mysteries" in the patristic sense), *periochae* = **periochae**.
- Pattern 17: Gravius's dedication addresses the abbots as a body (**you**) and Spichernagell alone (*suscipe*, **thou**); his preface addresses the single reader (**thou**); the epigram addresses Wolbero and then the single reader (**thou**); Wolbero's letter and preface address the sisters (**you**).
- Names are kept in the printed forms: *Barsfeldinae* (1002) beside *Bursfeldensis/Bursfeldica* (1003C, 1004C), *Brawiler*, *Tuitium*, *Graffscafft*, *Laugel*. There's no modernisation and no harmonising of the two spellings of Bursfeld.
- Migne's numbered foot notes (see below) are carried in the Latin only, per the orchestrator's correction of 2026-09-25. Nothing goes in the English.

## Migne's foot notes

Numbering: **per page, restarting at (1)**. Two notes in the range, one each on pp. 509 and 510, and no gaps. No note is keyed by an asterisk or a letter. Both were placed by eye with the page open; rows in `data/briefs/11512-NOTES-0000.tsv`.

- **p. 509, col 1006A** (full-width, mid-page, under Gravius's preface, above the Epistola dedicatoria head): key `(1)` after *Vale*. `(1) Haec nova editio multis erroribus typographiae et correctionis purgata cum securitate fructuque consuli potest. EDIT.` It's Migne answering Gravius's apology for the 1630 *errata*. It isn't a conjecture, and no crux turns on it.
- **p. 510, col 1008C**: key `(1)` after Arator's couplet *…pondere gutta fluit (1).* `(1) Arator, Epist. ad Flor. v. 7. Patrol. t. LXVIII, p. 64.` The note is a locator. The note text continues from the left column's foot into the right column's foot ("Patrol. | t. LXVIII, p. 64."), so a half-width crop would have cut it.

No *Deest aliquid* or *Locus obscurus* note falls in this range.

## `[sic:]` fired (all on plate-read columns; the plate and the TEI agree on the type)

- **1003D** *antebac* for *antehac* ("heretofore"). The plate reads *an-|tebac* across a line break. At this scan's resolution b/h is a two-pixel distinction in a bold roman face, so the reading rests on this copy alone and no second witness was consulted (online fetches barred by the brief). The sense "heretofore" is rendered beside the marker.
- **1004B** *protacta* for *protracta* ("drawn out"). It's clear on the plate: *protacta operam*. Sense rendered beside the marker.
- **1010D** *curi* for *curis* (*sopitis omnibus rerum mundanarum curi,*). The plate prints *curi* followed by a space and then the comma, with no *s*: a dropped or unprinted sort. Sense "cares" rendered beside the marker.

## `[var:]` fired: the scripture divergence list (all columns plate-read; every one checked against `sources/vulgate/clementine-flat.txt` by chapter and verse)

1. **1006B** Apoc 14:3–4, *nemo potest dicere, nisi qui sequuntur Agnum quocunque ierit*. The Vulgate reads *nemo poterat dicere canticum, nisi illa centum quadraginta quatuor millia* (14:3), and *Hi sequuntur Agnum quocumque ierit* is 14:4. The present tense and the conflation carry Wolbero's point that virgins sing the new canticle now.
2. **1007B** *qui sunt ante thronum Dei sine macula, quia non inquinaverunt vestimenta* is cited as Apoc. XIV. The Vulgate 14:5 reads *sine macula enim sunt ante thronum Dei*. The garments clause is Apoc 3:4 (*qui non inquinaverunt vestimenta sua*), which is not in ch. 14, and the gloss *id est corpora sua* rests on it.
3. **1007C** Luke 8:8 is cited for *fructum … aliud tricesimum, aliud sexagesimum, et aliud centesimum*. Luke has only *fecit fructum centuplum*. The three grades, which carry the whole three-profession argument, are Mt 13:8 (descending order) and Mc 4:20, and the ascending order here is Wolbero's own.
4. **1011C** Exod 15:1, *gloriose enim honorificatus est, equum et ascensorem projecit in mare*. The Vulgate has *magnificatus est … dejecit*.
5. **1011D** Deut 32:1, *Attende, coelum, et loquar; et audiat terra verba ex ore meo*. The Vulgate reads *Audite, caeli, quae loquor: audiat terra verba oris mei*.
6. **1015B** Cant 8:14, *capreae aut hinnulo cervorum* ("or"). The Vulgate reads *capreae, hinnuloque cervorum* ("and").
7. **1015D** Cant 2:7 (the refrain that divides the four books), *Adjuro vos, o filiae Jerusalem, per capreas cervosque caprarum*. The Vulgate has no *o* and reads *camporum* ("of the fields") for *caprarum* ("of the goats"). *ne suscitetis neque* and *quoadusque* agree with 2:7, while 3:5 has *donec*.
8. **1016A** Eph 3:18, *quae sit longitudo, latitudo, sublimitas et profundum*. The Vulgate order is *latitudo, et longitudo*. This matters because the exposition that follows (1016B–C: *Longa … lata … alta … profunda*, and length, breadth, sublimity, depth on the cross) walks the printed order.

## Scripture divergences NOT marked (adaptation, word order or allusion; one line each)

- 1001, the motto: Eccli 24:30–31 is printed *et qui elucidant me*. The Vulgate has no *et*. Not italic.
- 1004C Prov 29:3 *Vir qui diligit sapientiam*, where the Vulgate has *amat*. Both mean "loves", so it's not material (this is Gravius's quotation).
- 1006B *Canticum laudis, canticum laetitiae, canticum novum* is introduced by *Legimus*. It's a catena of phrases, not a verse (*canticum novum* Ps 32:3 etc.). Allusion.
- 1008B–C Exod 25:4 and Luke 21:2 are allusions in roman type.
- 1008D Prov 3:32 *cum simplicibus sermocinatio* (italic) *nostra* (roman). The Vulgate has *ejus*. It's a deliberate adaptation outside the italic, so not marked.
- 1009A Ps 35:9 *ab ubertate domus Dei et torrente voluptatis* (*ipsius* roman). The Vulgate has *tuae … tuae*. Woven into the greeting.
- 1009B Ps 38:5 *Ut sciam quid mihi desit*. The Vulgate has *quid desit mihi*. Word order only.
- 1009D *Canticum Habacuc prophetae* is a title (Vulgate Hab 3:1 *Oratio Habacuc prophetae*). It's not a quotation.
- 1010A Tob 12:7 *gloria enim revelare sermonem* is roman paraphrase (the Vulgate has *opera autem Dei revelare … honorificum est*).
- 1011C Num 21:17–18 *praeparaverunt … et baculis suis*. The Vulgate has *paraverunt … et in baculis suis*. No change in sense.
- 1012A Isa 5:1 *Cantabo dilecto canticum*. The Vulgate has *dilecto meo*. Minor.
- 1012B–C 1 Cor 2:9 *Quod nec oculus vidit … ascenderunt ea* (roman) *quae praeparavit Deus diligentibus se*. The Vulgate has *oculus non vidit … ascendit … iis qui diligunt illum*. Same sense, a common patristic form.
- 1012C *littera occidit, spiritus autem vivificat* is cited "(I Cor. III)": it is 2 Cor 3:6, and the Vulgate has *enim*. The reference is Migne's `[n:]` and is left as printed.
- 1013A Matt 22 *veste nuptiali … in tenebras exteriores* is an allusion.
- 1013B Rom 1:20 *Invisibilia … ejus*. The Vulgate has *enim ipsius*. Not material.
- 1013D–1014A 1 Cor 15:49 *sicut portavit … portet*. The Vulgate has *portavimus … portemus*. Adapted to *homo* as subject, woven.
- 1014B Rom 8:21 *in libertate gloriae* (ablative). The Vulgate has *in libertatem* (accusative). Woven into *assumptus sit*, so it's logged only.
- 1014B Wis 1:4–5 is recast into a relative (*sapientia quae non introibit*) with *quia* for *enim*. Adaptation.
- 1016B 1 Cor 2:11 *nemo autem cognovit quae sunt Dei*. The Vulgate order is *quae Dei sunt, nemo cognovit*.
- 1016C Luke 23:34 *ignosce illis, quia nesciunt*. The Vulgate has *dimitte illis: non enim sciunt*. Same sense. Rendered "pardon" so that the English stays distinct from the familiar "forgive".
- 1016C Joan 13:1, 1014C Jac 4:8, 1014C Ps 118:66, 1011D Jud 5:13, 1011D–1012A 2 Reg 22:2, 1012A Phil 3:20, 1013C 1 Joan 4:18 and the Canticle incipits at 1015A–D agree with the Clementine.
- Horace (1008A, 1008B) and Arator (1008C) are not scripture and were not collated.

## Literal renderings and plate-confirmed oddities (the plate and the TEI agree unless stated)

- **1003A–1003B** *ad quod verisimiliter ego cum Judaeo illo Mardochaeo … et quis novit* has no verb for *ego*. Rendered "to which, in all likelihood, I [answer]", with the verb supplied in brackets.
- **1004A** *a qua renovatus nonnihil liber non exiret*: the negation is kept ("from which the book, not a little renewed, might not go forth"). The sense of the fear clause is strained, but it's printed so.
- **1005A–1006A** the epigram, line 11: *Wolbero meres* is rendered "thou deservest" (*mereo*, 2nd singular). Possibly a slip for *mores*, but *meres* is a real form, so there's no marker.
- **1007A** *inedicibilem*: taken as a formation *in-* + *edicibilis* and rendered "unutterable". It isn't marked; if a lexicon later shows the form to be unattested, it becomes a `[sic:]` candidate.
- **1007C** *Tricesimus namque fructus conjugatorum est caste viventium, quas hoc numero ostendit computus digitorum, indice pollici superposito, pondus tribulationis … indicat viduarum … destitutum.* The sixtyfold clause for widows appears to have collapsed into the thirtyfold one: *quas* is feminine, and *pondus … indicat* has no expressed subject. It's rendered as printed.
- **1008D** *quod plus libuit aliquid, quamvis simpliciter scribere, qui inani otio, torpore, cum etiam hoc opus nusquam prodire velimus* is elliptical, and the comparison is left unfinished. It's rendered literally.
- **1009B** *quidquam tamen mihi videatur* (the plate reads *quid-|quam*) is rendered "what nevertheless it may seem to me".
- **1012D** *non irritanda* is rendered "not to be made void" (*irritare* from *irritus*). *irridenda* ("mocked") would fit the pairing with *contemnenda* better, but it isn't printed.
- **1012D** *Valde aut solerter intuendum* is rendered "Greatly, or skilfully". *aut* is probably *autem*, but it's printed so.
- **1013C** *si per mortalitatis decorem Creatori suo adhaeserit* is rendered "comeliness of mortality". *moralitatis* (the whole passage's term) is the likely reading, but the plate prints *mortalitatis*. A crux only: the page is odd, not false.
- **1013D** *Sed quia sicut ipse Deus … et tamen est in omnibus.* A *quia* clause with no main clause, rendered as printed.
- **1014C–D** *ut per naturalitatis bonitatem affectu sanctae moralitatis disciplinam, per quam …* has no verb for *disciplinam*. It's rendered with the gap left open.
- **1014D** *sive in qualicunque, Deo dilecta animi*: *animi* stands where *anima* is expected. It's rendered literally ("in any whatever, beloved of God, of the mind").
- **1015B** *in gemellis fetibus gemina charitatis* is rendered "the twin things of charity", with no noun supplied.
- **1016A** *ut sicut quadratu quocunque utitur stat*: the plate's final letter of *quadratu* at the line end is a blot (*u* or *um*), and the TEI has *quadratu*. It's rendered "as by squareness it stands on whatever [face] it uses". There's no marker, because the plate can't settle the letter.
- **1016C** *vix enim considerare potest altitudo benignitatis ejus*: the active infinitive has *altitudo* as its subject, where *considerari* is expected. It's rendered literally ("can scarcely consider").
- **1016D** *ut inde nobis materiam superemus* is rendered "that thence we might overcome the matter for ourselves". *sumeremus* or *paremus* is probable, but it isn't printed. *hoc praemonentis* (genitive where the nominative is expected) is rendered "forewarning".
- **1012A** the *Processu videlicet … possimus* sentence ends in a full stop with no main clause. Kept as a fragment (Pattern 8).
- **1011A** *Magna quippe pars et optabile Sabbatum, id est requies est* is rendered as printed.

## TEI patches (plate vs our Latin)

- 1003C · *gratulater* → *gratularer* · p. 508 (*non gratularer gloriam*). The letter after *gratula* is x-height, with no crossbar and a hooked top, unlike the *t* earlier in the same word. It's a probable reading on this copy alone. The English "congratulate" is the same under either reading.
- 1011D · `[n: (Jud. V)]* Superatis` → `[n: (Jud. V)]*. Superatis` · p. 512. The plate sets a full stop after the citation, and the English follows the plate.
- 1012B · *Materia es sponsalia* → *Materia est sponsalia* · p. 512. The plate shows a faint, half-inked sort the width of a *t* after *es*, before the space. This is probable, not certain: if the sort is judged absent, *es* ("thou art") has no slot and becomes a `[sic:]` candidate instead. The English renders "is".
- 1013A · markup, not words: our TEI wraps Wolbero's running parenthesis in a `<note>`, as `[n: (cum veste nuptiali venire, ne si ista careamus, in tenebras exteriores (Matth. XXII) )]`. The plate (p. 513) prints it as running text: *charitatis (cum* ***veste nuptiali*** *venire, ne si ista careamus,* ***in tenebras exteriores*** *[Matth. XXII]) in caecitatem ignorantiae repellamur.* The phrases *veste nuptiali* and *in tenebras exteriores* are italic, and the citation sits in square brackets inside the parenthesis. It's the 11085 class: the host sentence (*ne si … repellamur*) doesn't construe without the wrapped words. Proposed patch: drop the note element, restore the text and its two italic spans, and keep only `(Matth. XXII)` as the citation note. Until then the English carries the wrapped words translated at the same position as `[nt: …]`, so that note parity holds and no sentence is lost.

## Lemma count

91 italic spans in the Latin of 0000–0004 (4 + 23 + 3 + 34 + 27, counted paragraph-bounded, no unmatched asterisks, no guillemets). That equals the lemmata file's 91. Adding the `[cn:]` note at 1008C puts one more italic run (*Epist. ad Flor.*) inside apparatus in the Latin of 0001. The 1013A patch, if applied, would add two italic spans (*veste nuptiali*, *in tenebras exteriores*) that the inventory can't have seen.
