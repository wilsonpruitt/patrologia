# Corpus polarity sweep — REPORT

**Run 2026-07-28.** Every work on migne.app outside PL 196, swept blind on Opus per
`data/sweeps/NEXT-SESSION-BRIEF.md`. 89 units, 68 works, 454 chunks.
No unit skipped, sampled, or truncated.

## Result

**178 sites across 68 works.** 18 works are clean.

| | |
|---|---|
| side | Migne **152** · **ours 26** |
| confidence | high 55 · medium 92 · low 31 |

By type: sense-reversing-letter 76 · dropped-word 38 · dropped-non 31 · added-negative 30 · reversed-subject-object 1 · reversed-predication 1 · opposite-rendering 1

**The average is the wrong summary — the distribution is what matters.** PL 196 ran
29 sites / 17 works / 82 chunks. This sweep found a comparable per-chunk rate overall,
but it is not evenly spread:

- **11064 PL 175 — Expositio in Hierarchiam Coelestem S. Dionysii — 41 sites** (7 ours) in 9 unit(s)
- **11066 PL 175 — Quaestiones in Epistolas Pauli — 23 sites** (3 ours) in 7 unit(s)
- **10804 PL 164 — Expositio in Cantica canticorum — 9 sites** (0 ours) in 2 unit(s)
- **9076 PL 117 — Commentarium in Cantica canticorum — 9 sites** (2 ours) in 3 unit(s)
- **8195 PL 83 — Norma vivendi — 7 sites** (0 ours) in 1 unit(s)
- **11063 PL 175 — Expositio in Abdiam — 6 sites** (0 ours) in 1 unit(s)

11064 alone holds 23% of the corpus total. With 11066 the two earliest and
largest translations hold 36% of all sites. **The brief's hypothesis is confirmed:
the works done under the withdrawn "intended reading" precedent carry the damage.**
Do not plan future work off the corpus average.

## Our own errors — the actionable set (26)

These are live on migne.app and wrong. Per Wilson's fix policy they are **fixed in
place**; Migne's 152 are **reported and rendered literally, never fixed**.

| work | col | conf | type | what |
|---|---|---|---|---|
| 10083 | 0493D | medium | sense-reversing-letter | Hosea 1:4 reads 'et quiescere faciam regnum domus Israel' — 'I will cause the kingdom of the house of Israel to CEASE' ( |
| 10365 | 0631C | medium | dropped-word | The printed Latin has no finite verb of willing: 'Ego publice corripere' is an elliptical indignant question or refusal  |
| 11064 | 0960B | high | added-negative | 'but making it struggle to deny (reluctantem negare = resisting, so as to refuse) the material passibilities' — reluctan |
| 11064 | 0964C | high | added-negative | 'having the likeness and form of God, not of bodies' — 'non' negates 'corporum' only, not 'Dei' |
| 11064 | 1013A | medium | added-negative | 'because, although what is discerned is not God by nature, according to demonstration it IS [God], since through it and  |
| 11064 | 1044C | high | sense-reversing-letter | Hugh's *illa* here = the heavenly, *ista* = the earthly (the pairing is fixed by 'Illa purgata sunt ab imperfectione … i |
| 11064 | 1072C | medium | dropped-word | The bare 'per' here is the comparative second term (Greek genitive of comparison: τελεωτέραν εἶναι τῆς διὰ μεσότητος ἀπο |
| 11064 | 1097A | medium | reversed-subject-object | the lemma should read 'that the divinity led the Jews fully' — the accusative-plus-infinitive is ambiguous, and Hugh res |
| 11064 | 1106A | high | dropped-non | Migne's « sed non enim diverso » is « sed non e diverso » (e > enim), i.e. 'but not conversely'; the negation governs th |
| 11066 | 0433B | high | added-negative | "What is NOT in the substance of man, that IS in the substances of Christ?" — the negation belongs to the first clause ( |
| 11066 | 0477C | high | dropped-non | The Latin denies the predicate — 'by no fault was man, before sin, made weak or impotent' (i.e. he was NOT made weak). E |
| 11066 | 0556D | high | dropped-non | The Latin has a double negative — non ... per NULLUM temporis curriculum — i.e. 'Yet not in such a way that through NO i |
| 11075 | 0997C | high | dropped-word | The elliptical Latin is 'fructus spiritus humilitas [radix est]' — humility is the ROOT of the fruit of the spirit. The  |
| 11086 | 1016A | medium | dropped-word | The subject of 'non possunt' is general, not 'servi Dei nostri': "...and none can escape the sentence of extermination,  |
| 11088 | 0896C | medium | sense-reversing-letter | minus egere = "to need LESS"; render "It is better to need less than to have more." The comparative in the English has b |
| 11208 | 1199B | medium | dropped-word | "Would that the Noahs of our day would leave us something whereby THEY might be covered BY US" — `a nobis possint operir |
| 11325 | 1053A | low | dropped-word | The Latin negation governs the whole pair (non [una dicenda et altera reticenda]); English needs the scope carried expli |
| 7017 | 1148B | low | added-negative | 'nihilque non metuas' = 'and there is nothing you do not fear'. The English strands the negative after the verb ('fear n |
| 7017 | 1150B | low | dropped-word | 'filio ingrato' = the son who is UNGRATEFUL (or, as dative of disadvantage, 'anything unwelcome to my son'). 'Guiltless' |
| 7871 | 0966C | medium | reversed-predication | 'Heretics may in a certain respect be called companions (sodales) of Christ' — the English has inverted subject and pred |
| 8625 | 0940B | high | dropped-word | Migne's plate prints fuscatur ('is darkened/blackened'), which asserts the opposite of what baptism does; the underlying |
| 8708 | 0659D | medium | sense-reversing-letter | Migne's text reads 'qui', not 'cui' (the 'cui' is only the *Al.* variant). Render: 'and he who had been handed over for  |
| 9076 | 0302B | medium | dropped-word | The accusative subject `se ... pervenire debere` continues the indirect statement about the bride (`sponsam suam`), not  |
| 9076 | 0318C | medium | opposite-rendering | 'that is, night sinks away' / 'night comes to an end' — cadit nox here is the ending of night, not its onset |
| 9245 | 0988C | medium | dropped-word | Restore the conditional: "…will be under punishments, IF HE HAS BEEN WICKED, as great as the number of those over whom h |
| 9604 | 1347D | low | sense-reversing-letter | a beati Petri apostoli successoribus suis directos — 'directed by the successors of blessed Peter the apostle into this  |

## Per-work inventory

| work | sites | ours | units |
|---|---|---|---|
| 11064 PL 175 — Expositio in Hierarchiam Coelestem S. Dionysii | 41 | 7 | 9 |
| 11066 PL 175 — Quaestiones in Epistolas Pauli | 23 | 3 | 7 |
| 10804 PL 164 — Expositio in Cantica canticorum | 9 | 0 | 2 |
| 9076 PL 117 — Commentarium in Cantica canticorum | 9 | 2 | 3 |
| 8195 PL 83 — Norma vivendi | 7 | 0 | 1 |
| 11063 PL 175 — Expositio in Abdiam | 6 | 0 | 1 |
| 11057 PL 175 — Adnotatiunculae in Joelem | 5 | 0 | 2 |
| 11088 PL 176 — Expositio in regulam S. Augustini | 5 | 1 | 2 |
| 10517 PL 155 — De primordiis et inventione sacrae religionis Hierosolymorum | 4 | 0 | 1 |
| 10725 PL 162 — Enarrationes in Cantica canticorum | 4 | 0 | 2 |
| 11085 PL 176 — De virginitate B. Mariae | 4 | 0 | 1 |
| 7871 PL 67 — Explicatio in Cantica canticorum | 4 | 1 | 1 |
| 11055 PL 175 — Adnotationes in libros Regum | 3 | 0 | 1 |
| 7017 PL 17 — Philosophorum aliquot epistolae | 3 | 2 | 1 |
| 7561 PL 50 — Commonitoria | 3 | 0 | 2 |
| 10379 PL 150 — Commentaria in Cantica canticorum | 2 | 0 | 1 |
| 11031 PL 173 — Epistolae | 2 | 0 | 1 |
| 11061 PL 175 — De scripturis et scriptoribus sacris | 2 | 0 | 1 |
| 11062 PL 175 — Explanatio in Canticum B. Mariae | 2 | 0 | 1 |
| 11081 PL 176 — De sacramentis legis naturalis et scriptae | 2 | 0 | 1 |
| 11083 PL 176 — De sapientia animae Christi | 2 | 0 | 1 |
| 11086 PL 176 — Epistolae | 2 | 1 | 1 |
| 11321 PL 184 — Commentatio in Cantica canticorum ex Bernardo contexta | 2 | 0 | 1 |
| 11648 PL 204 — Annales | 2 | 0 | 1 |
| 21413 PL 100 — In Cantica canticorum | 2 | 0 | 1 |
| 7383 PL 40 — Expositio cantici Magnificat | 2 | 0 | 1 |
| 9604 PL 138 — De prandio monachorum | 2 | 1 | 1 |
| 9741 PL 139 — Canones | 2 | 0 | 1 |
| 10080 PL 145 — De castitate et mediis eam tuendi | 1 | 0 | 1 |
| 10083 PL 145 — De dignitate sacerdotii | 1 | 1 | 1 |
| 10365 PL 150 — De celanda confessione | 1 | 1 | 1 |
| 10703 PL 160 — Homilia de villico iniquitatis | 1 | 0 | 1 |
| 10727 PL 162 — Epistola | 1 | 0 | 1 |
| 11059 PL 175 — Adnotatiunculae in librum Judicum | 1 | 0 | 1 |
| 11075 PL 176 — De fructibus carnis et spiritus | 1 | 1 | 1 |
| 11078 PL 176 — De modo orandi | 1 | 0 | 1 |
| 11080 PL 176 — De quatuor voluntatibus in Christo | 1 | 0 | 1 |
| 11089 PL 176 — Institutiones in Decalogum | 1 | 0 | 1 |
| 11208 PL 183 — Flores seu sententiae ex S. Bernardo | 1 | 1 | 1 |
| 11325 PL 184 — In festo S. Andreae | 1 | 1 | 1 |
| 11713 PL 207 — De divisione et scriptoribus sacrorum librorum | 1 | 0 | 1 |
| 7020 PL 18 — Exhortatio ad monachos | 1 | 0 | 1 |
| 7693 PL 59 — Sermo in rogationibus | 1 | 0 | 1 |
| 8566 PL 96 — Tractatus | 1 | 0 | 1 |
| 8625 PL 98 — Appendix ad epistolas | 1 | 1 | 1 |
| 8708 PL 101 — Vita S. Martini Turonensis | 1 | 1 | 1 |
| 8777 PL 104 — De modo regiminis ecclesiastici | 1 | 0 | 1 |
| 9245 PL 125 — Instructio ad Ludovicum Balbum | 1 | 1 | 1 |
| 9249 PL 125 — Quae exsequi debeat episcopus | 1 | 0 | 1 |
| 9852 PL 141 — De monasterio Fructuariensi | 1 | 0 | 1 |

**Clean (18):** 10047 · 10049 · 10103 · 11056 · 11079 · 11299 · 11436 · 21425 · 6912 · 7427 · 7508 · 8253 · 8407 · 8505 · 8715 · 8933 · 9436 · 9519

## Full findings


### 11064 PL 175 — Expositio in Hierarchiam Coelestem S. Dionysii

#### 0937D — dropped-word · **migne** · medium confidence

Printed: *Omnis scilicet ista processio manifestationis luminum in nos proveniens hoc operatur, videlicet quod replet nos, non utique alio quam seipsa ex eo quod replet, iterum restituens reparando, sicut poenis constituit creando, restituit scilicet utpote unifica virtus, quae dispersa colligit*

Our English: "namely, that it fills us — by nothing other, indeed, than itself, out of that with which it fills us — again restoring us by repairing, as it established us by punishments in creating."

Conjecture: **sicut prius constituit creando ("as it first established us in creating") — the sentence needs an adverb balancing restituens/reparando against constituit/creando, not the ablative plural poenis; Migne's poenis makes creation an act of punishment.**

The immediately preceding sentences deny any harshness in the movement of the Father: « Motus Patris, affectus est paternae benignitatis; sola enim benignitate et pietate sola Pater movetur, ut lumina sua effundat super nos. Movetur non conturbatione sui, sed miseratione nostri. » A creation by poenae is the opposite of what its own neighbour asserts, and the rest of the chunk keeps the same key (« data optima ... dum conderetur », « Hoc enim bonum nihil a se conditum alienum relinquit a se »).

<sub>found by 11064-u01 · chunk 0005</sub>

#### 0938C — dropped-word · **migne** · low confidence

Printed: *et moveri videtur ipsum lumen, cum potius illius tenebrae solae moveantur, et fugiant praesentiam luminis coruscantis. Et videtur motus luminis hic esse, cum sit tenebrarum fugientium lumen*

Our English: "and the light itself seems to be moved, when rather its own darkness alone is moved and flees the presence of the flashing light. And this seems to be the movement of the light, when it is the light of the fleeing darkness"

Conjecture: **cum sit tenebrarum fugientium MOTUS — Migne's lumen (caught from luminis two words earlier) displaces the noun the antithesis requires: the motion only seems to be the light's, whereas it is the motion of the fleeing darkness.**

The contradicting neighbour is the clause immediately before it: « cum potius illius tenebrae solae moveantur ». As printed, the motion is re-attributed to the light (a 'light of the fleeing darkness'), which is exactly what the preceding clause denies; the whole paragraph exists to argue that the light is unmoved and only the mind's darkness moves.

<sub>found by 11064-u01 · chunk 0005</sub>

#### 0946A — dropped-word · **migne** · high confidence

Printed: *Etenim neque possibile est aliter nobis lucere divinum radium, nisi varietate sacrorum vel animum anagogice circumvelatum, et iis, quae secundum nos sunt, providentia paterna connaturaliter, et proprie praeparatum.*

Our English: "For neither is it possible for the divine ray to shine upon us otherwise, unless, by the variety of sacred things, or the mind, [it be] anagogically veiled about, and prepared, connaturally and properly, by the fatherly providence, for those things which are according to us."

Conjecture: **sacrorum VELAMINUM — a word-division defect: velaminum has been set as 'vel animum', turning the genitive plural into a stray 'vel' + accusative 'animum'. The English then had to render the broken text as 'sacred things, or the mind'.**

The same Dionysian lemma is printed correctly twice in the immediate neighbourhood: at 0934C in the LITTERA (chunk 0004) « nisi varietate sacrorum velaminum anagogice circumvelatum », and in Hugh's own paraphrase eleven lines below the defect at 0946B « nisi varietate sacrorum velaminum circumvelatum et praeparatum providentia paterna connaturaliter et proprie ». The intervening exposition is entirely about the velamina (« Sacra velamina, in quibus nobis radius divinus lucet, sunt mysticae in sacro eloquio descriptiones ... Quibus videlicet velaminibus ipse radius divinus anagogice circumvelatur »), so 'vel animum' has no possible referent.

<sub>found by 11064-u01 · chunk 0008</sub>

#### 0959A — sense-reversing-letter · **migne** · high confidence

Printed: *Eodem modo concupiscentiam quidem esse dicimus in irrationabilibus inconsultam quamdam, et materialem ex naturali motu, aut consuetudine in mutabilibus incontinenter ingenitam impassibilitatem, et irrationabilem corporalis voluptatis continuitatem*

Our English: "In the same way we say that concupiscence indeed is in irrational things a certain inconsiderate and material thing, from a natural motion, or from custom incontinently engendered in mutable things — an impassibility, and an irrational continuity of bodily pleasure"

Conjecture: **passibilitatem (or empassibilitatem/passionem) for impassibilitatem — the intrusive im- inverts the term**

The same sentence defines this thing as 'an irrational continuity of bodily pleasure' (irrationabilem corporalis voluptatis continuitatem), and the immediately preceding sentence grounds the whole class in passion: 'Etenim furor in irrationabilibus quidem ex passibili motu est' — 'For fury indeed in irrational things is from a passible motion.' The contrast is completed a few lines later, where the intellectual counterpart alone is the impassible one: 'superessentialiter castae, et impassibilis contemplationis.' An impassibility that consists in continuous bodily pleasure is the opposite of what the passage is building.

<sub>found by 11064-u02 · chunk 0013</sub>

#### 0959B — sense-reversing-letter · **migne** · medium confidence

Printed: *simul omne animal [0959B] compellentis secundum sensum inconcupiscibile*

Our English: "at once compelling every animal according to sense to what is unfit to be desired"

Conjecture: **concupiscibile for inconcupiscibile (Greek τὸ κατ' αἴσθησιν ἐπιθυμητόν, 'the sensibly desirable')**

The clause is the closing term of the definition of concupiscentia in irrational animals — 'irrationabilem corporalis voluptatis continuitatem ... compellentis' ('an irrational continuity of bodily pleasure ... compelling'). Desire compelling every animal toward what is NOT to be desired reverses the very faculty being defined; the next sentence's contrast is not between desirable and undesirable but between sensible desire and 'amorem divinum.'

<sub>found by 11064-u02 · chunk 0013</sub>

#### 0960B — added-negative · **ours** · high confidence

Printed: *non sinens nostrum animum remanere in dissimilibus formarum facturis, sed reluctantem negare materiales passibilitates, et assuescentem pure extendere per visibilia in supermundanas altitudines*

Our English: "not suffering our mind to remain in the dissimilar makings of forms, but making it reluctant to deny the material passibilities, and accustoming it to extend itself purely through visible things into the supramundane heights"

Conjecture: **'but making it struggle to deny (reluctantem negare = resisting, so as to refuse) the material passibilities' — reluctantem qualifies the mind's recoil FROM matter, not a reluctance to reject it**

The same sentence's two flanking members require rejection of matter: 'non sinens nostrum animum remanere in dissimilibus formarum facturis' ('not suffering our mind to remain in the dissimilar makings of forms') and 'assuescentem pure extendere per visibilia in supermundanas altitudines' ('accustoming it to extend itself purely ... into the supramundane heights'). A mind made reluctant to deny material passibilities is the opposite of a mind not allowed to remain in them.

<sub>found by 11064-u02 · chunk 0013</sub>

#### 0964C — added-negative · **ours** · high confidence

Printed: *coelestes et deiformes animos, id est spiritus invisibiles, incorporeos, et Dei non corporum similitudinem ac formam habentes*

Our English: "the heavenly and deiform minds, that is, the invisible, incorporeal spirits, which have not the likeness and form of God nor of bodies"

Conjecture: **'having the likeness and form of God, not of bodies' — 'non' negates 'corporum' only, not 'Dei'**

The clause is Hugh's gloss on the lemma word it stands next to: 'coelestes et DEIFORMES animos' — deiform minds. To gloss 'deiform' as 'not having the likeness and form of God' contradicts the word being glossed; and the parallel term 'incorporeos' shows what the 'non' is doing (denying bodily, not divine, likeness).

<sub>found by 11064-u02 · chunk 0015</sub>

#### 0965D — dropped-word · **migne** · low confidence

Printed: *atque illis spiritibus coelestibus ad ea, quae ipsis invisibilia sunt, significanda attributa*

Our English: "and attributed to those heavenly spirits for the signifying of those things which are invisible to themselves"

Conjecture: **quae IN ipsis invisibilia sunt (or quae ipsis NOBIS invisibilia sunt) — 'those things which in them are invisible [to us]'**

The second half of the very same sentence states the case correctly: 'sed per haec alia, quae in ipsis, nobis sunt invisibilia, visibiliter proposita perpendere studeamus' — 'but that through these things we may study to weigh other things, which are IN THEM and are invisible TO US.' The signs exist because the spirits' properties are invisible to us, not to the spirits.

<sub>found by 11064-u02 · chunk 0015</sub>

#### 0966D — sense-reversing-letter · **migne** · medium confidence

Printed: *inquantum ipsa theologia ad significationem visibilium pulchras et decentes ab iis quae nostra sunt, formationes assumpsit*

Our English: "insofar as theology itself, for the signifying of visible things, took beautiful and seemly formations from those things which are ours"

Conjecture: **invisibilium for visibilium**

The formations taken from 'those things which are ours' ARE the visible things; they cannot be taken to signify themselves. The same paragraph states the purpose twice the other way: 'ut nostrum animum ad invisibilium cognitionem per haec visibilia et nota revelarent' ('that they might illuminate our mind unto the knowledge of INVISIBLE things through these visible and known things'), and the answering clause of this very sentence, 'theologiam non solum similes, sed etiam dissimiles in demonstrationem DIVINORUM formas assumpsisse.'

<sub>found by 11064-u02 · chunk 0015</sub>

#### 0967C — sense-reversing-letter · **migne** · high confidence

Printed: *propriis et cognatis figurationibus, id est inconvenientibus et similibus figurationibus [0967D] sumptis apud nos*

Our English: "by proper and cognate figurations, that is, by unfitting and like figurations taken from among us"

Conjecture: **convenientibus for inconvenientibus**

The gloss contradicts the lemma it is glossing in the same breath: Hugh is explaining 'propriis et cognatis figurationibus' ('proper and cognate figurations'), and his own second gloss-word is 'similibus' ('like'). 'Unfitting' cannot gloss 'proper and cognate,' and the objector whose position this reports is precisely the one demanding fitting images drawn 'ex pretiosissimis apud nos.'

<sub>found by 11064-u02 · chunk 0016</sub>

#### 0968B — added-negative · **migne** · high confidence

Printed: *ut ex utraque parte rationabile fieret: ut per hoc, quod nostrum esset, id est familiare et cognitum nobis, erudire non posset; et per hoc, quod sublimius et dignius esset, spiritualium excellentiae et dignitati congrueret*

Our English: "so that on either part it would become reasonable: so that through that which was ours, that is, familiar and known to us, it could instruct; and through that which was more sublime and more worthy, it would befit the excellence and dignity of spiritual things"

Conjecture: **erudire posset — the 'non' is intrusive**

The clause the sentence opens with requires both members to be positive: 'ut ex utraque parte rationabile fieret' ('so that on either part it would become reasonable'), and the coordinate member is affirmative ('congrueret'). Familiarity is offered as the ground of instruction, not as its obstacle. Note our English silently repairs this — it drops the printed 'non' without a marker, so the defect is invisible to a reader of the translation alone.

<sub>found by 11064-u02 · chunk 0016</sub>

#### 0971C — dropped-word · **migne** · high confidence

Printed: *A corporalibus, sicut cum eam rationem et intellectum; a corporalibus, quemadmodum cum eam lumen et [0971D] splendorem nominant*

Our English: "From incorporeal things, as when they name it reason and intellect; from corporeal, as when they name it light and splendor"

Conjecture: **Ab INcorporalibus, sicut cum eam rationem et intellectum [nominant]; a corporalibus, quemadmodum ...**

The sentence immediately before announces the two members: 'Per similes quidem aliquando a corporalibus sumptas, aliquando AB INCORPORALIBUS' — and the matching pair a few lines later keeps them distinct: 'AB INCORPORALIBUS quidem, ut cum ei iram, zelum, poenitentiam attribuunt; A CORPORALIBUS vero, quando illi formas, vel figuras bestiarum ... apponunt.' Reason and intellect are the incorporeal member; Migne prints 'a corporalibus' twice, collapsing the distinction the whole passage rests on. Our English silently repairs it to 'From incorporeal things.'

<sub>found by 11064-u02 · chunk 0017</sub>

#### 0982A — added-negative · **migne** · high confidence

Printed: *« Cum vero dissimiles similitudines non intellectualibus, et spiritualibus circumponentes, » vel vestientes: « circumformatus, » id est adaptamus « eis concupiscentiam; » tunc ipsam concupiscentiam, non qualem prius, sed amorem potius divinum intelligere oportet*

Our English: "« But when, placing dissimilar likenesses about the intellectual and spiritual things, » or clothing them: « being formed about them, » that is, we adapt « to them concupiscence; » then we must understand that concupiscence itself not such as before, but rather divine love"

Conjecture: **Read « Cum vero dissimiles similitudines intellectualibus et spiritualibus circumponentes » (or « in intellectualibus »); the printed non is intrusive.**

The apodosis of this very sentence requires that the likenesses ARE being put about intellectual/spiritual beings: "tunc ipsam concupiscentiam, non qualem prius, sed amorem potius divinum intelligere oportet, et desiderium immaterialitatis, sive incorporalitatis, et divinitatis super rationem, et intellectum existens." The lemma introducing the whole passage says the same: "Postquam demonstravit quid significet furor sensibilibus et materialibus attributus, quid item immaterialibus et invisibilibus naturis coaptatus; nunc consequenter differentiam concupiscentiae ostendit." As printed, the protasis would be about non-intellectual beings, i.e. the opposite class. Our English silently drops the non and renders the intended sense.

<sub>found by 11064-u03 · chunk 0021</sub>

#### 0984A — sense-reversing-letter · **migne** · medium confidence

Printed: *et excellentes sensum animi nostri materialem et alienatum in corporalibus hoc est, ad materialia tantum vigentem; et per materialia et corporalia ab immaterialibus, et incorporalibus alienatum, eadem percipere non valentem.*

Our English: "and surpassing the material sense of our mind, estranged among corporeal things — that is, a sense flourishing only toward material things, and, through material and corporeal things, estranged from immaterial and incorporeal things, unable to perceive the same."

Conjecture: **Word-division defect: "alienatum in corporalibus" should be "alienatum incorporalibus" (estranged FROM incorporeal things), as the lemma prints it.**

The lemma being glossed, quoted a few lines above in the same chunk, reads "...et alienatum incorporalibus animi sensum excellentes"; and the gloss's own continuation flatly states the contrary of the split reading: "et per materialia et corporalia ab immaterialibus, et incorporalibus alienatum." The sense is estranged from the incorporeal, not estranged among the corporeal — corporeal things are precisely where it is at home ("ad materialia tantum vigentem"). Our English follows the split reading.

<sub>found by 11064-u03 · chunk 0021</sub>

#### 0984D — sense-reversing-letter · **migne** · medium confidence

Printed: *Sed tamen compacte, id est convenienter, et apte, et pulchre, id est decenter subauditur definitis eisdem proprietatibus, utrobique videlicet et intellectualibus et insensibilibus.*

Our English: "But yet compactly, that is, fittingly, and aptly, and beautifully, that is, becomingly — understand, the same properties being defined, on both sides namely, both intellectual and insensible."

Conjecture: **et intellectualibus et SENSIBILIBUS — the in- is intrusive.**

This clause glosses the lemma printed a few lines earlier in the same chunk: "compacte autem, et pulchre intellectualibusque, et sensibilibus proprietatibus definitis." The word utrobique ("on both sides") demands the two poles of the running antithesis, intellectual and sensible; "intellectual and insensible" names one pole twice and destroys the pairing. Our English follows Migne with "insensible."

<sub>found by 11064-u03 · chunk 0021</sub>

#### 0987A — sense-reversing-letter · **migne** · medium confidence

Printed: *Cum enim nihil verme vilius et humilius esse videatur, quis summam majestatem in hanc adjectionem [0987A] deducere praesumeret, nisi ipsa se prius propria dispensatione tali specie significando circumformaretur.*

Our English: "For since nothing seems to be baser and lowlier than a worm, who would presume to bring the highest majesty down to this abasement, unless it had first, by its own dispensation, formed itself about with such an appearance, signifying itself thereby."

Conjecture: **in hanc ABJECTIONEM deducere — ad- for ab-, reversing the direction (increase vs. casting down).**

The Psalm verse quoted immediately above supplies the word: "Ego sum vermis, et non homo; opprobrium hominum, et abjectio plebis (Psal. XXI)"; and the clause itself turns on descent — "nihil verme vilius et humilius esse videatur... summam majestatem... deducere." One cannot "bring down the highest majesty into an addition/increase." Our English silently prints "abasement," repairing the plate without a note.

<sub>found by 11064-u03 · chunk 0022</sub>

#### 0992B — sense-reversing-letter · **migne** · medium confidence

Printed: *Hactenus quae universaliter dicenda erant introducendis in hierarchiarum cognitionem pro ratione demonstrationum visibilium in significationem visibilium propositarum theologus disseruit.*

Our English: "Up to this point the theologian has discoursed on the things that had to be said in a general way for those being introduced into the knowledge of the hierarchies, in proportion to the visible demonstrations set forth for the signifying of visible things."

Conjecture: **in significationem INvisibilium propositarum — the prefix in- has dropped, collapsing the visible/invisible antithesis on which the whole preceding book turns.**

As printed, visible demonstrations are set forth to signify visible things, which is vacuous and contradicts the argument this sentence is summing up. Immediately preceding, at 0987A (chunk 0022): "Ii omnes cum per visibiles species et visibilium rerum proprietates invisibilia designare volunt, distinguunt..."; and at 0985A (chunk 0021): "Similitudinem dicit, quando per extrinsecas formas vel figuras, vel qualitates descriptiones invisibilium a visibilibus sumuntur." Our English reproduces Migne's reading and so inherits the reversal.

<sub>found by 11064-u03 · chunk 0025</sub>

#### 1004A — dropped-word · **migne** · medium confidence

Printed: *Extra unitatem nullus illam accipere potest, et in unitate alteri data nulli sufficere potest.*

Our English: "Outside unity none can receive it, and, given to another within unity, it can suffice for no one."

Conjecture: **et in unitate alteri data nulli deesse potest (or: nulli non sufficere potest) — 'and, given to another within unity, it can be lacking to none / cannot fail to suffice for anyone'**

The immediately preceding clause is the premise the sentence exists to unpack: « quia gratia ad universos effunditur et in singulis operatur » — 'because grace is poured out upon all and works in individuals' — and the sentence before that says the goods are manifested « non singulis quibusque, sed hierarchiae, id est universitati » (not to single individuals but to the whole). Hugh's antithesis needs a negative first limb (outside unity, no one receives) answered by a positive second limb (inside unity, it fails no one). As printed, both limbs are negative, so unity confers nothing, which denies the very premise ('poured out upon ALL') and the conclusion drawn one clause later, that the goods are manifested to the hierarchy precisely so that imitation becomes possible for all.

<sub>found by 11064-u04 · chunk 0028</sub>

#### 1013A — added-negative · **ours** · medium confidence

Printed: *quoniam, etsi natura Deus non est, quod cernitur, secundum demonstrationem est, quia tamen per ipsum, et in ipso Deus manifestatur.*

Our English: "because, although that which is discerned is not God by nature according to demonstration, yet through it and in it God is manifested."

Conjecture: **'because, although what is discerned is not God by nature, according to demonstration it IS [God], since through it and in it God is manifested.' The printed Latin has two clauses — a concessive negative (natura ... non est) and a main affirmative (secundum demonstrationem est) — and the English has pulled 'secundum demonstrationem' inside the negation and dropped the affirmative 'est' altogether.**

The clause the English keeps is the reason-clause that the suppressed affirmation governs: « quia tamen per ipsum, et in ipso Deus manifestatur » — 'because through it and in it God is manifested.' A 'quia' can only explain an assertion, and once the assertion has been turned negative it explains nothing; the English has to weaken 'quia' to 'yet' to make the sentence run. The whole sentence exists to license the immediately preceding statement that « divina Scriptura manifestationes illas ... theophanias, id est divinas apparitiones vocare consuevit » — Scripture is accustomed to call these manifestations divine apparitions. Denying that the discerned thing is God 'according to demonstration' removes the only ground on which that naming is defended.

<sub>found by 11064-u04 · chunk 0032</sub>

#### 1032B — dropped-non · **migne** · low confidence

Printed: *Puras igitur eas esse existimandum, non ut immundis maculis et inquinationibus liberatas: neque ut materialium receptivas phantasiarum, sed ut omni diminutione mundas, et altiores…*

Our English: "It must therefore be deemed that they are pure, not as freed from unclean stains and defilements, nor as receptive of material phantasies, but as clean by every diminishment, and higher…"

Conjecture: **neque ut materialium *in*receptivas (Eriugena-type *inacceptibiles* / Gr. ἀνεπιδέκτους) phantasiarum — the privative prefix has dropped, so the rejected description has become its own opposite**

The frame is 'non ut X … neque ut Y … sed ut Z', where X is itself a privative ('non ut immundis maculis … liberatas'). With the privative gone, Y is no longer a mode of purity at all, and the same sentence's positive limb asserts the contrary: 'sed ut omni diminutione mundas, et altiores, et … secundum excelsissimam castitatem … supercollocatas' (English: 'but as clean by every diminishment, and higher, and … according to the most exalted chastity, super-placed'). A purity that is denied to consist in NOT receiving material phantasies leaves the angels receiving them, against 'most exalted chastity' in the next clause.

<sub>found by 11064-u05 · chunk 0038</sub>

#### 1037C — sense-reversing-letter · **migne** · medium confidence

Printed: *Propterea non dilexit acutum et calidum, sed calidum et acutum: quemadmodum prius mobile, postea incessabile…*

Our English: "Therefore he did not love the sharp and the hot, but the hot and the sharp: just as first the moving, afterward the unceasing…"

Conjecture: **non *dixit* acutum et calidum, sed calidum et acutum ('he did not SAY "sharp and hot" but "hot and sharp"') — *dixit* has been expanded to *dilexit* under the pull of the surrounding *dilectio* vocabulary**

The sentence is about the ORDER OF DIONYSIUS' WORDS, not about an object of love: immediately before, 'Quia tamen prius dilexerunt postea cognoverunt, ut acutum in dilectione esset sicut et calidum. Prius calidum, postea acutum'; immediately after, 'quemadmodum prius mobile, postea incessabile, ut mobile ad inquisitionem excitet'. Read as printed, Hugh says the author 'did not love the sharp and the hot' — flatly against the whole passage, where the author is the one who 'tam multa de dilectione dixit' and 'Non autem iste parvam dilectionem dicere voluit'.

<sub>found by 11064-u05 · chunk 0039</sub>

#### 1037D — sense-reversing-letter · **migne** · high confidence

Printed: *Si enim in dilectum non vadis, adhuc foris amas, neque acutum habes dilectionis. Sed habes, et torpens divisus manes, et extra illum, ut unum non efficiaris.*

Our English: "For if you do not go into the beloved, you still love outside, nor do you have the sharpness of love. But you have [only warmth], and, growing numb, you remain divided, and outside him, so that you are not made one [with him]."

Conjecture: **Sed *hebes* et torpens divisus manes ('but dull and numb you remain divided') — *hebes* has been read as *habes***

The immediately preceding clause is 'neque acutum habes dilectionis' — 'nor do you HAVE the sharpness of love'. 'Sed habes' therefore asserts possession one half-line after possession was denied, and it is left with no object at all. Hugh's own vocabulary supplies the true word a few lines earlier at 1037C: 'Ergo hebetes fuerunt, et tardi ad cognoscendum', paired there as here with torpor ('sed non tepidi, aut pigri'). Our English half-repairs the defect with a bracketed supply '[only warmth]' that has no warrant in the printed Latin.

<sub>found by 11064-u05 · chunk 0039</sub>

#### 1044C — sense-reversing-letter · **ours** · high confidence

Printed: *Quae in terra erant, purganda erant a corruptione; quae autem in coelo, purganda erant ab imperfectione. Illa, quia in prima conditione non erant perfecta; ista, quia post primam conditionem erant corrupta. Illa purgata sunt ab imperfectione… ista purgata sunt a corruptione… Illorum ergo purgatio non erat mali emendatio, quod non habebant…*

Our English: "Those which were on earth were to be purged from corruption; those which were in heaven were to be purged from imperfection. The former, because in their first condition they were not perfect; the latter, because after their first condition they were corrupted. The former have been purged from imperfection… the latter have been purged from corruption… Of the former, therefore, the purgation was not the amendment of an evil which they did not have…"

Conjecture: **Hugh's *illa* here = the heavenly, *ista* = the earthly (the pairing is fixed by 'Illa purgata sunt ab imperfectione … ista … a corruptione'). Render them by their referents — 'the heavenly ones, because in their first condition they were not perfect; the earthly, because after their first condition they had been corrupted' — not by 'the former/the latter', which the English's own preceding sentence maps the other way round.**

Our English has just written, one clause earlier, 'Those which were on earth were to be purged from CORRUPTION; those which were in heaven were to be purged from IMPERFECTION.' Its 'the former' therefore denotes the earthly — and it then says 'The former, because in their first condition they were not perfect', and 'The former have been purged from imperfection', and 'Of the former, therefore, the purgation was not the amendment of an evil which they did not have.' Each is the exact opposite of the sentence it follows, and the last one attributes sinlessness to the earthly, against the same paragraph's 'the latter have been purged from corruption, when they are freed from sin' and against 1044D 'because they were always clean' (said of the angels).

<sub>found by 11064-u05 · chunk 0042</sub>

#### 1048C — sense-reversing-letter · **migne** · high confidence

Printed: *Ubi majestas est, thronus est; ubi incommutabilitas est, sedes est. Thronus significat incommutabilitatem. Ergo in ipsa aeternitate, in ipsa incommutabilitate sedes Dei collocatae sunt.*

Our English: "Where majesty is, there is a throne; where unchangeableness is, there is a seat. A throne signifies unchangeableness. Therefore in that very eternity, in that very unchangeableness, the seats of God have been placed."

Conjecture: ***Sedes* significat incommutabilitatem (or 'Thronus significat majestatem') — the subject of the definition has been swapped for its opposite member**

The clause immediately before assigns the two terms explicitly and in the other direction: 'Ubi majestas est, THRONUS est; ubi incommutabilitas est, SEDES est.' The clause immediately after draws the conclusion from the seat, not the throne: 'Ergo in ipsa … incommutabilitate SEDES Dei collocatae sunt.' The same division governs the surrounding exposition (1047B–C: 'altissimas, propter dignitatem; compactas, propter veritatem'; 1049A: thrones = raised by dignity, seats = placed by stability). Our English reproduces the reversal verbatim.

<sub>found by 11064-u05 · chunk 0044</sub>

#### 1071C — sense-reversing-letter · **migne** · medium confidence

Printed: *ad nullum una videntium, sed ad proprie ὄν universale conversam*

Our English: "turned toward none of the things seen as one, but toward the properly ὄν universal"

Conjecture: **'una' is a misprint for 'vana' — read 'ad nullum vana videntium', 'turned toward none of the things that seem vain'.**

Migne reprints the same lemma two columns later at 1075A with the correct word — « ad nullum vana videntium, sed ad proprie ὄν on universale conversam » — and Hugh's own gloss at 1076A fixes the sense beyond doubt: 'Existimo declarare conversam non ad aliquid eorum quae vana videntur, id est quae per se considerata ima apparent, et transitoria.' With 'una' the clause denies that the dominations turn toward what is seen as one, while the second half of the very same clause says they are turned to the one universal ὄν, and 1076B glosses that ὄν as 'universale, quia omnibus esse tribuit'.

<sub>found by 11064-u06 · chunk 0052</sub>

#### 1072C — dropped-word · **ours** · medium confidence

Printed: *Sic existimo et angelicorum ordinum immediatam participationem primo in Deum extentorum perfectorem esse per medietatem perfectorum.*

Our English: "So too I judge that the immediate participation of the angelic orders first extended into God is more perfect through the mediation of the perfected."

Conjecture: **The bare 'per' here is the comparative second term (Greek genitive of comparison: τελεωτέραν εἶναι τῆς διὰ μεσότητος ἀποτελουμένης) and should read 'is more perfect THAN [that accomplished] through the mediation of the perfected' — the English dropped the comparative 'than' and turned the compared term into an instrument.**

The immediately preceding sentence in the same paragraph renders the identical construction correctly and asserts the opposite ranking: « Nam sapientes circa sacras nostras immolationes aiunt, per seipsas lucentes divinorum plenitudines per alias contemplativarum participationum esse perfectiores » — English: 'the plenitudes of the divine things, shining through themselves, are more perfect than [those] through other contemplative participations.' As rendered, the next sentence says mediated participation is what makes the immediate participation more perfect, i.e. the reverse of its own premise and of the whole surrounding argument (chunks 0046-0048: the first orders are illumined 'non per alias sanctas essentias, sed ab ipsa Divinitate').

<sub>found by 11064-u06 · chunk 0052</sub>

#### 1085A — added-negative · **migne** · high confidence

Printed: *Et primo quidem [1085A] dicere necessarium existimo, secundum quod mihi impossibile, sacrarum earum cognominationum manifestationes.*

Our English: "And first indeed I judge it necessary to speak, according to what is impossible for me, the manifestations of their sacred surnames."

Conjecture: **possibile (the LITTERA has picked up an intrusive im-)**

Hugh re-quotes this very clause at the head of his EXPOSITIO (chunk 0058, 1087B) as « Et primo quidem dicere necessarium existimo secundum quod mihi possibile » — 'according to what is possible for me'. As printed in the LITTERA the sentence has Dionysius judging it necessary to say what is impossible for him to say. The same formula recurs unnegated three times within the same LITTERA column band: 'et ad ipsum, ut possibile, reformatur' (1085B), 'ad illud ipsum, quantum possibile, formari' (1085A), 'assimilata, secundum quod possibile est'.

<sub>found by 11064-u07 · chunk 0057</sub>

#### 1086D — sense-reversing-letter · **migne** · high confidence

Printed: *solo fere ultra omnes Israel in viri Dei illuminationem, et cognitionem converso.*

Our English: "Israel almost alone beyond all being converted unto the illumination and knowledge of the man of God."

Conjecture: **veri Dei (i for e)**

Hugh re-quotes and glosses the identical clause in chunk 0061 at 1098A: 'et solo Israel converso in illuminationem et cognitionem veri Dei fere ultra omnes gentes' — and the very next sentence of the LITTERA itself reads 'ipsum possedisse Israel in veri Dei famulatum'. The whole argument is that Israel alone turned to the TRUE God while the nations erred 'in non existentes deos'; 'the man of God' asserts the contrary of the point being made.

<sub>found by 11064-u07 · chunk 0057</sub>

#### 1090B — sense-reversing-letter · **migne** · medium confidence

Printed: *et idcirco apud non aptius angeli nominati sunt magis quam priores sive superiores*

Our English: "and therefore they are named angels more fittingly among not than the prior or superior ones"

Conjecture: **apud nos (n for s)**

The lemma Hugh is glossing, printed in chunk 0057 at 1085C, reads 'et magis apud nos angeli, quam priores aptius nominati'; and his own gloss in the same sentence-run says 'eorum proprium est nobis divina secreta nuntiare... eorum proprium est nuntios esse nobis'. 'apud non' negates precisely the 'among us' on which the whole explanation turns, and the English carries the broken 'among not' through to the reader.

<sub>found by 11064-u07 · chunk 0058</sub>

#### 1095A — dropped-word · **migne** · high confidence

Printed: *Etenim sic simpliciter Melchisedech ipsi theosophi non amicum Dei, sed et sacerdotem vocaverunt.*

Our English: "For indeed thus simply the theosophers themselves called Melchizedek not a friend of God, but also a priest."

Conjecture: **non amicum Dei TANTUM, sed et sacerdotem**

Hugh's gloss on this very lemma, in the next sentence, restores the word: 'theosophi... non sic simpliciter amicum tantummodo Dei, sed etiam sacerdotem vocaverunt'. The LITTERA of the same passage at 1086B likewise prints 'non amicum Dei tantum, sed et sacerdotem vocaverunt'. As printed at 1095A the sentence denies that Melchizedek was called God's friend at all, whereas the entire argument (Gen. XIV, 'erat enim sacerdos Dei altissimi') rests on his being called both.

<sub>found by 11064-u07 · chunk 0060</sub>

#### 1097A — reversed-subject-object · **ours** · medium confidence

Printed: *nullo modo existimandum Judaeos quidem pleniter duxisse divinitatem: angelos autem specialiter... imperare aliis gentibus. — glossed: nullo modo existimandum est divinitatem duxisse Judaeos, hoc est, ducatum praebuisse Judaeis pleniter, vel absolute, hoc est, per semetipsam, scilicet sine mediante angelorum ministerio*

Our English: "« ...and by no means is it to be supposed that the Jews indeed led the divinity fully, but that the angels... ruled over the other nations. » ... and therefore by no means is it to be supposed that the divinity led the Jews..."

Conjecture: **the lemma should read 'that the divinity led the Jews fully' — the accusative-plus-infinitive is ambiguous, and Hugh resolves it in the very next clause; note also outside this defect that the LITTERA at 1086C prints 'dixisse' where the EXPOSITIO lemma has 'duxisse', and our English there ('spoke of the divinity fully', chunk 0057) follows the plate**

Our English lemma at 1096C-1097A says the Jews led the divinity; Hugh's gloss on that same lemma, three words later on the same line, says 'divinitatem duxisse Judaeos, hoc est, ducatum praebuisse Judaeis' — the divinity led the Jews. The whole chapter argues that God governs some nations directly and others through angels, so only the gloss's direction is possible. (defectType lies outside the four listed values; flagging it as such.)

<sub>found by 11064-u07 · chunk 0061</sub>

#### 1099D — dropped-non · **migne** · medium confidence

Printed: *Etenim nihil per se perfectum indigens universalis perfectionis, nisi vere perfectissimum et ante perfectum.*

Our English: "For nothing is perfect through itself, needing the universal perfection, save only the truly most perfect and fore-perfect."

Conjecture: **nihil per se perfectum et NON indigens universalis perfectionis (Gr. οὐδὲν αὐτοτελὲς ἢ ἀπροσδεές)**

The exception clause in the same sentence names 'vere perfectissimum et ante perfectum', and the clause immediately before it speaks of 'anteperfectae perfectionis' — the fore-perfect is by definition what needs nothing. As printed, the sentence makes the truly most perfect the one thing that DOES need the universal perfection, which is the opposite of what the exception is for.

<sub>found by 11064-u07 · chunk 0061</sub>

#### 1100C — sense-reversing-letter · **migne** · high confidence

Printed: *« Occultior quidem tanquam invisibilior, et magis simplificata et vivificata. »*

Our English: "« More hidden indeed as being more invisible, and more simplified and vivified. »"

Conjecture: **unificata**

Hugh's gloss two sentences later restores the word twice: 'Occultior, inquit, est in eo quod invisibilior est, et magis simplificata, et unificata. In eo occultior est quod... propinquior simplicitati, et unitati Deitatis.' The LITTERA of the same lemma in chunk 0061 at 1099B also prints 'magis simplificata et unificata'. 'vivificata' substitutes life for the unity that is the whole point of the pairing with 'simplificata'.

<sub>found by 11064-u07 · chunk 0062</sub>

#### 1104C — sense-reversing-letter · **migne** · medium confidence

Printed: *Sequitur: « Etenim nihil per se perfectum indigens universalis perfectionis, nisi vere perfectissimum, et ante perfectum. » ... quia nihil est per se perfectum, et nihil quod non sit per se imperfectum, et quod non sit indigens per se invisibilis, vel omnis perfectionis, nisi illud bonum summum.*

Our English: "...and there is nothing which is not through itself imperfect, and which is not through itself needy of the invisible, or of every perfection, save that highest good."

Conjecture: **« invisibilis » is a misprint for « universalis »; read 'indigens per se universalis, vel omnis perfectionis' — 'needy of the universal, that is, of every perfection.'**

The lemma Hugh is glossing stands three lines above in the same paragraph and prints the word correctly: « nihil per se perfectum indigens universalis perfectionis. » Hugh's own explanatory doublet — « vel omnis perfectionis » ('or of every perfection') — is the standing gloss of universalis, not of invisibilis; the sentence as printed makes the glossator explain 'invisible' by 'every', which the immediate context forbids.

<sub>found by 11064-u08 · chunk 0063</sub>

#### 1106A — dropped-non · **ours** · high confidence

Printed: *Hoc est, quod dicit: « Extremae enim, » subauditur essentiae, ut sunt angeli, « participatae sunt ab excelsissimis virtutibus » in omnibus proprietatibus suis; sed non enim diverso, superiorum proprietates ad inferiorum participationem universaliter veniunt.*

Our English: "This is what he says: « For the extremes, » understand: essences, such as are the angels, « are partaken of by the most excellent virtues » in all their properties; but not otherwise, the properties of the higher come universally to the participation of the lower."

Conjecture: **Migne's « sed non enim diverso » is « sed non e diverso » (e > enim), i.e. 'but not conversely'; the negation governs the verb: '...but not conversely do the properties of the higher come universally to the participation of the lower.' Our English detaches 'not otherwise' from 'veniunt' and so asserts the very thing the clause denies.**

The sentence immediately before it states the one-way rule — « quod angeli nominantur, mirum non est quia angeli ultimi sunt, et eorum proprietas a superioribus participatur universaliter » ('their property is universally partaken by the higher') — and the sentence immediately after draws the opposite conclusion from the reverse direction: « Propterea mirum est quomodo angeli, et qui ante angelos sunt... nomen virtutum assumant, cum non participent proprietatem » ('Therefore it is a wonder how the angels... assume the name of virtues, since they do not partake the property'). The lemma being expounded says the same at 1105B: « ultimae vero majorum superpositas universitates non habent. » The English as it stands makes the lower partake the higher's properties universally, which would remove the wonder Hugh is about to insist on.

<sub>found by 11064-u08 · chunk 0064</sub>

#### 1124B — sense-reversing-letter · **migne** · medium confidence

Printed: *Et videt etiam ipse Isaias summitatem sublimiorem « omnibus ipsis, » scilicet excelsissimis spirituum beatorum essentiis; « etiam superarcane, » id est, excellentissimo modo: « summitatem, » dico, « super principalem, » id est Deum, qui summus et principalis omnium est, supercollocatam « in medio superfirmatarum virtutum. »*

Our English: "And Isaiah himself sees also a summit more sublime than « all these, » ... « the summit, » I say, « above the principal, » that is, God, who is the highest and principal of all, superplaced « in the midst of the superfirmed virtues. »"

Conjecture: **Word-division defect: read « superprincipalem » as one word (so Migne himself prints it in the LITTERA at 1113A: « sublimiorem superprincipalem summitatem in medio superfirmatarum virtutum supercollocatam »). Hugh's gloss then identifies the summit with God — 'the superprincipal summit, that is, God, who is the highest and principal of all' — not something set above a 'principal' who is God.**

As divided, 'id est Deum' attaches to 'principalem', so the summit stands ABOVE God; the very next sentence identifies the summit as God himself: « In medio enim virtutum... ipse Deus summus, et principalis sedens videtur in solio excelso et elevato » ('God himself, the highest and principal, is seen sitting upon a throne lofty and elevated'). Migne's own lemma two columns earlier prints the compound « superprincipalem summitatem » undivided.

<sub>found by 11064-u08 · chunk 0070</sub>

#### 1124D — sense-reversing-letter · **migne** · low confidence

Printed: *« Sed adhuc, » sive insuper etiam hoc didicit ipsum « esse omnium principium, » quia ab eo sunt omnia; et causam sanctificam, quia per eum subsistunt universa; et immutabile fundamentum eorum, quae sunt, secreta singularitate...*

Our English: "...that it « is the principle of all, » because from it are all things; and the sanctifying cause, because through it all things subsist; and the immutable foundation of those things which are, by a secret singularity..."

Conjecture: **« sanctificam » for « substantificam » — 'the substance-making cause, because through it all things subsist.'**

Hugh's own causal clause attached to the word states the ground of SUBSISTENCE, not of sanctification: « quia per eum subsistunt universa », and it stands in a series whose members are all being-terms ('principle of all... immutable foundation of the things that are... from which both being and well-being is'). The lemma he is expounding, printed by Migne at 1113B, reads « et causam substantificam esse ». Our English carried the plate's word through unaltered.

<sub>found by 11064-u08 · chunk 0070</sub>

#### 1131D — sense-reversing-letter · **migne** · high confidence

Printed: *Si vero easdem et ordinare, et ordinari dicimus, non autem earumdem, aut ab eisdem, sed eas singulas ordinari quidem a prioribus, ordinari autem novissimas: non inconsequenter fortassis quis dixerit…*

Our English: "But if we say that the same both ordain and are ordained, yet not that they ordain and are ordained by the same, but that they severally are indeed ordained by the prior ones, and ordain the last: not inconsequently perhaps would someone say…"

Conjecture: **ordinare autem novissimas (for printed 'ordinari autem novissimas')**

The clause is the distributive resolution of 'easdem et ordinare, et ordinari dicimus' — one member must be active, one passive; printed 'ordinari … ordinari' makes both passive and destroys the very distinction being drawn. Hugh's own exposition of this same lemma, printed at 1138D in chunk 0074, quotes it correctly: « ordinari quidem a prioribus, ordinare autem novissimas, » nullum inconveniens est — rendered there 'are indeed ordained by the prior ones, but ordain the last ones.' The littera and its own lemma-quotation disagree by one letter.

<sub>found by 11064-u09 · chunk 0073</sub>

#### 1137B — sense-reversing-letter · **migne** · high confidence

Printed: *« in simplicitatem animorum coelestium: tanquam » per se « in consequentibus, » id est inconvenientibus.*

Our English: "« into the simplicity of the celestial minds: as » of themselves « in things consequent, » that is, in things unfitting."

Conjecture: **tanquam per se inconsequentibus (word-division: 'inconsequentibus' set as 'in consequentibus')**

Hugh's gloss attached to the very word reverses it: 'id est inconvenientibus' — 'consequent' cannot mean 'unfitting'. Two sentences later he restates the point with both words in their negative form: 'Alioquin visibilis formatio inconsequens, et inconveniens esset.' And the littera being glossed reads, in chunk 0073 at 1131C-D, 'descendentes iterum ipsis, tanquam inconsequentibus, in simplicitatem coelestium animorum analytice reflexis' — undivided. The English follows the split plate and prints 'in things consequent, that is, in things unfitting,' a self-contradiction on the page.

<sub>found by 11064-u09 · chunk 0074</sub>

#### 1142A — sense-reversing-letter · **migne** · medium confidence

Printed: *quod apparet ex eo quod aliquando offensione et concursu corporum sine attritione inde etiam excutitur ubi non esse videbatur.*

Our English: "which appears from this, that sometimes by the striking and collision of bodies without attrition it is struck out even thence where it seemed not to be."

Conjecture: **sive attritione (for printed 'sine attritione')**

The next sentence makes attrition the sole cause of the striking-out: '« Neglectus » quidem, et non motus … « non esse putatur; attritu autem » sive attritione, provocatus, et commotus « quasi quadam vindicta subito relucet »' — 'but by attrition or rubbing, provoked and set in motion … it suddenly shines forth.' 'Offensio et concursus corporum' IS attrition; the printed 'sine' denies the mechanism the immediately following clause asserts. Migne's own 'attritu autem sive attritione' shows the sive/sine confusion is live in this column.

<sub>found by 11064-u09 · chunk 0075</sub>

#### 1142D — sense-reversing-letter · **migne** · high confidence

Printed: *« et » propter « luculentum, » id est clarum et evidens, sine insigne ipsius figurae humanae; quia ex ipsa erectione sua magis evidentem praestat, et venustiorem aspectum;*

Our English: "« and » on account of « the luculent, » that is, the clear and evident, without the distinguishing mark of the human figure itself; because from its very erectness it affords a more evident and more comely aspect;"

Conjecture: **sive insigne (for printed 'sine insigne')**

The causal clause immediately following asserts the opposite of the printed phrase: the human figure's erectness 'affords a more evident and more comely aspect' — i.e. the figure precisely HAS the distinguishing mark, which is why 'luculentum' is predicated of it. 'Sive insigne' completes the standard gloss-triplet ('clarum et evidens, sive insigne') that Hugh uses throughout this passage. Grammar corroborates: 'insigne' is neuter nominative/accusative and cannot govern 'sine', which requires the ablative 'insigni'.

<sub>found by 11064-u09 · chunk 0075</sub>


### 11066 PL 175 — Quaestiones in Epistolas Pauli

#### 0433B — added-negative · **ours** · high confidence

Printed: *QUAESTIO VI. Quid non sit in substantia hominis, quod in substantiis Christi. Solutio. Quia nec caro est anima, nec anima est caro; nec homo est caro, vel anima, sicut Deus est homo, et homo est Deus, et Christus est utrumque.*

Our English: "QUESTION VI. What is there in the substance of man that is not in the substances of Christ? Solution. Because neither is the flesh the soul, nor the soul the flesh; nor is man the flesh or the soul, as God is man, and man is God, and Christ is both."

Conjecture: **"What is NOT in the substance of man, that IS in the substances of Christ?" — the negation belongs to the first clause (substantia hominis), not to the second (substantiis Christi); the English has transposed it and so asks the opposite question.**

The immediately preceding sentence, closing Quaestio III, states the reciprocal predication of Christ and then says 'quod in substantiis hominis non contingit' — 'which does not happen in the substances of man.' Quaestio VI's own solution then lists what fails in man (nec caro est anima, nec homo est caro vel anima) over against what holds in Christ (sicut Deus est homo, et homo est Deus, et Christus est utrumque), and closes 'major est unio inter Deum et hominem quam inter carnem et animam.' The lack is in man, the possession in Christ; the English question asserts the reverse.

<sub>found by 11066-u10 · chunk 0000</sub>

#### 0458A — dropped-non · **migne** · high confidence

Printed: *Solutio. Omnia dimissa peccata erant eis per fidem et dilectionem, sed omnimodum effectum remissionis consecuti sunt. Duplex est remissionis effectus, scilicet, carere poena, et frui gloria, alterum tantum ante mortem Christi habebant: [0458B] quia poenam actualem non sentiebant, alterum nondum acceperant, quia non videbant Deum.*

Our English: "Solution. All sins had been remitted to them through faith and love, but they obtained the full effect of remission. Twofold is the effect of remission, namely, to be without punishment, and to enjoy glory; only the one of these they had before the death of Christ: because they did not feel actual punishment, the other they had not yet received, because they did not see God."

Conjecture: **sed NON omnimodum effectum remissionis consecuti sunt — 'but they did not obtain the full effect of remission.' Migne's plate has lost the negation; our English renders the defective Latin as printed and so asserts the opposite of what the passage is proving.**

The very next sentences deny precisely what this one now grants: 'Duplex est remissionis effectus... alterum tantum ante mortem Christi habebant... alterum nondum acceperant, quia non videbant Deum' — they had only one of the two effects, and had not yet received the other. The question being answered is why, if their sins were remitted, they were still 'in inferno tenebantur'; a full effect of remission would leave the question unanswered. Cf. also the following solution: 'nec etiam eorum peccata dimissa simpliciter, nisi sub quadam exspectatione et sponsione futuri, qui pro eis satisfaceret.'

<sub>found by 11066-u10 · chunk 0008</sub>

#### 0477C — dropped-non · **ours** · high confidence

Printed: *Homo ante peccatum per nullam culpam infirmus vel impotens effectus est; ideo facile poterat reddere quod Deus poterat exigere*

Our English: "Man before sin was made weak or impotent through no fault; therefore he could easily render what God could exact"

Conjecture: **The Latin denies the predicate — 'by no fault was man, before sin, made weak or impotent' (i.e. he was NOT made weak). English 'was made weak or impotent through no fault' asserts that he WAS weak and merely excuses the cause; read 'Man before sin was not made weak or impotent by any fault'.**

The immediately following clause draws the opposite consequence from the sentence as rendered: 'ideo facile poterat reddere quod Deus poterat exigere' ('therefore he could easily render what God could exact'), and the contrast that follows is explicit — 'post peccatum, et per peccatum talis effectus est, quod non valet solvere omne debitum' ('after sin, and through sin, he was made such that he cannot pay every debt'). Weakness is the post-lapsarian state; an English sentence that grants man weakness before sin cannot ground 'therefore he could easily render.'

<sub>found by 11066-u11 · chunk 0013</sub>

#### 0490D — added-negative · **migne** · medium confidence

Printed: *Videtur enim non esse mihi imputandum si non facio quod sine gratia non possum facere, cum gratia non sit collata mihi, sed magis illi qui non confert mihi necessariam gratiam, cum non possit sine detrimento suo.*

Our English: "For it seems that it is not to be imputed to me if I do not do what I cannot do without grace, since grace has not been conferred on me, but rather to him who does not confer on me the necessary grace, since he cannot [do so] without harm to himself."

Conjecture: **Intrusive 'non': read 'cum possit sine detrimento suo' — 'since he could [confer it] without any loss to himself.' Our English follows the printed plate faithfully.**

The clause is the causal support for the objection's own charge, which is stated in the same sentence: blame falls 'magis illi qui non confert mihi necessariam gratiam' ('rather on him who does not confer on me the necessary grace'). A reason that God 'cannot [confer it] without harm to himself' exculpates the very party the sentence is accusing, destroying the objection the whole quaestio is raised to answer. The printed 'non possit' is further contradicted by the answer developed in this same discussion (and at 0489C in the preceding chunk), where withholding grace costs God nothing and wrongs no one: 'Nulla autem est iniquitas vel injustitia, si Deus non det aliquid illi, cui nil debet.'

<sub>found by 11066-u11 · chunk 0017</sub>

#### 0495B — sense-reversing-letter · **migne** · medium confidence

Printed: *potest enim fieri, ut sicut Judaeis ad litteram illud peccatum est, ita in eo figuraliter nobis sit praeceptum, ne nos quaeramus. Quis ascendit, etc.*

Our English: "for it can come to pass that, just as to the Jews that was literally a sin, so in it there is figuratively a precept to us, that we not ask, Who has ascended, etc."

Conjecture: **illud praeceptum est (praeceptum corrupted to peccatum)**

The immediately preceding sentence of the same quaestio states what the words were to the Jews: 'prohibebat enim Judaeis ne dicerent, Quis ascendit in coelum' — Moses' words were a PROHIBITION laid on the Jews, not a sin committed by them; and the correlative clause 'ita in eo figuraliter nobis sit PRAECEPTUM' requires 'praeceptum' in the sicut-limb for the ad litteram / figuraliter parallel to stand.

<sub>found by 11066-u12 · chunk 0018</sub>

#### 0496C — dropped-non · **migne** · high confidence

Printed: *Quaeritur quomodo Judaei non credendo in Christum peccaverunt, cum scriptum sit: *Propterea poterant credere* non quia *dixit Isaias: Deus excaecavit oculos eorum, et induravit cor**

Our English: "It is asked how the Jews sinned by not believing in Christ, since it is written: *Therefore they could believe* not because *Isaiah said: God has blinded their eyes, and hardened [their] heart*"

Conjecture: **Propterea non poterant credere, quia dixit Isaias (the negative belongs to poterant, not to quia)**

Two lines later the same quaestio quotes the identical text correctly against itself: 'quomodo hoc verum est. Propterea non poterant credere quia Deus excaecavit, etc.' and again 'dicens: Propterea non poterant, quia dixit Isaias'; and the Solutio opens 'Verum est quod non poterant credere, sicut dicit Evangelium.' As printed the lemma asserts the opposite of the very text the question is built on (Joan. XII, 39).

<sub>found by 11066-u12 · chunk 0018</sub>

#### 0499B — added-negative · **migne** · high confidence

Printed: *Solutio. De sanctitate, qua intelligitur inconstantia fidei agit Apostolus; non de habilitate, quam haberent ad sanctitatem.*

Our English: "Solution. The Apostle treats of the holiness by which is understood the inconstancy of faith; not of the fitness which they would have for holiness."

Conjecture: **qua intelligitur constantia fidei**

The immediately preceding quaestio (CCLXXI, same column band) ends: 'et illi pauci, qui conversi sunt ad fidem, si ita constantes fuerunt; patet quod illi qui in fine convertentur, erunt constantes.' Constancy of faith is the sense of 'naturaliter sancta' being defended; sanctity glossed as INconstancy of faith reverses the answer to the question just asked ('quomodo hic dicitur naturaliter sancta, quasi habens habilitatem sanctitatis?').

<sub>found by 11066-u12 · chunk 0019</sub>

#### 0502B — added-negative · **migne** · high confidence

Printed: *Sicut enim semetipsum pro nobis sanctificavit et non tradidit, sic et semetipsum misit, id est suam missionem vel incarnationem (quod idem est operatus est).*

Our English: "For just as he sanctified himself for us and did not deliver himself up, so also he sent himself, that is, his own mission or incarnation (which is the same) he wrought."

Conjecture: **semetipsum pro nobis sanctificavit et tradidit**

The whole point of the sicut...sic clause is that the Son does to himself what is elsewhere said to be done to him, so as to license 'semetipsum misit'; a denial in the sicut-limb destroys the argument it is supporting, and the sentence before it has just conceded the parallel case for the Spirit ('temporaliter etiam a seipso procedit'). It also contradicts the standard text the clause is built on ('tradidit semetipsum pro nobis', Eph. V; Gal. II).

<sub>found by 11066-u12 · chunk 0020</sub>

#### 0507C — dropped-non · **migne** · medium confidence

Printed: *A quibusdam etiam abstinemus, quia non est necesse eis uti, ut a carne equina, non quia aeque bona esset ad vescendum, ut bovina; sed quia opus non est.*

Our English: "From certain things also we abstain, because it is not necessary to use them, as from horse-flesh, not because it would be as good to eat as beef; but because there is no need."

Conjecture: **non quia non aeque bona esset ad vescendum ut bovina**

The clause names the REJECTED reason for abstaining, and the sed-clause names the real one: 'sed quia opus non est', matching the frame set two words earlier, 'quia non est necesse eis uti'. As printed the rejected reason is that horse-flesh IS as good as beef — which was never a reason to abstain; the sentence only works if the rejected reason is inferiority of the food.

<sub>found by 11066-u12 · chunk 0021</sub>

#### 0511D — dropped-non · **migne** · high confidence

Printed: *Sed nonne promissio facta est gentibus, cum Dominus dicat in Osee: *Vocabo plebem meam non plebem meam**

Our English: "But was not a promise made to the gentiles, since the Lord says in Hosea: *I will call my people that which is not my people*"

Conjecture: **Vocabo non plebem meam, plebem meam (the non belongs to the first member)**

The citation is adduced as proof that a promise WAS made to the gentiles, and it is chained with two further texts of gentile inclusion ('Laetamini gentes cum plebe ejus'; 'Laetare sterilis, quae non paris'). As printed the transposed 'non' makes God name his own people 'not my people' — the reverse of the inclusion the objection needs, and the reverse of the text at Osee II / Rom. IX, 25.

<sub>found by 11066-u12 · chunk 0023</sub>

#### 0516B — sense-reversing-letter · **migne** · medium confidence

Printed: *Vel mundus, id est sapientes mundi, et si Deum cognovissent secundum opera restaurationis, in potentia, non in pietate; in majestate, non in humilitate.*

Our English: "Or the world, that is, the wise of the world, even if they had known God according to the works of restoration, in power, not in piety; in majesty, not in humility."

Conjecture: **secundum opera creationis (or conditionis)**

The two appositions in the same sentence deny to the philosophers precisely what the works of restoration are — 'non in pietate ... non in humilitate' names the incarnation/redemption as what they did NOT know; and the next sentence supplies the channel by which they did know: 'Notandum esse theophanias in creaturis, id est divinas apparitiones, ut in mundo, cujus magnitudo summam Dei potentiam demonstrat.' Knowledge 'in potentia' is knowledge from the works of creation, not of restoration.

<sub>found by 11066-u12 · chunk 0024</sub>

#### 0534D — dropped-word · **migne** · high confidence

Printed: *Item Joannes evangelista cum videret quemdam, qui non sequebatur Dominum, ejicere daemonia in nomine Christi, voluit prohibere; cui Dominus ait: *Noli prohibere, qui non est mecum contra me est [n: (Marc. IX)]*.*

Our English: "Likewise John the evangelist, when he saw a certain man, who did not follow the Lord, casting out devils in the name of Christ, wished to forbid him; to whom the Lord said: *Forbid not; he that is not with me is against me [n: (Marc. IX)]*."

Conjecture: **The lemma should be Mark 9:39-40 as cited: "Nolite prohibere ... qui enim non est adversum vos, pro vobis est." The plate has substituted the contrary logion (Matt. XII, 30), reversing the sense of the Lord's reason.**

The clause is offered as the ground of the command it immediately follows — "Noli prohibere" — yet as printed it supplies a reason for forbidding: a man who does not follow Christ would, on this saying, be "against me." The note itself points to Marc. IX, where the verse reads the other way. Hugh's argument also needs the tolerant form: the point being proved is that "et mali his donis saepe utuntur," i.e. that the non-follower's exorcisms were genuine gifts, not diabolical opposition.

<sub>found by 11066-u13 · chunk 0029</sub>

#### 0535A — added-negative · **migne** · high confidence

Printed: *QUAESTIO CXVI. *Si habuero omnem fidem, charitatem autem,* etc. Hic Apostolus manifeste ostendit quod fides, et caetera dona non possunt haberi sine charitate.*

Our English: "QUESTION CXVI. *If I should have all faith, but charity,* etc. Here the Apostle manifestly shows that faith, and the other gifts, cannot be had without charity."

Conjecture: **Read "quod fides et caetera dona possunt haberi sine charitate" (or "nihil prosunt sine charitate"); the printed "non" is intrusive.**

The next sentences of the same quaestio argue the exact opposite and treat it as established: "ergo de fide catholica hic agit: unde constat, quod ipsa potest haberi sine charitate, et sic a malis potest haberi, quod multi negant." QUAESTIO CXXI (col. 0537A) makes the refutation explicit against the very position the opening sentence as printed asserts: "Dicunt tamen quidam ... quod fides sine charitate esse non potest: quorum error hic destruitur ... innuit manifeste, quod fides etiam perfecta potest haberi sine charitate." As printed, the heading sentence states the error the quaestio exists to destroy.

<sub>found by 11066-u13 · chunk 0030</sub>

#### 0546A — added-negative · **migne** · medium confidence

Printed: *Item si dicatur littera ideo occidere, quia non possunt omnia ad litteram ibi observari: non pereat, qui ea observaverit. eodem modo dici potest de Evangelio.*

Our English: "Likewise, if it be said that the letter kills for this reason, that not all things can be observed there according to the letter: let him not perish who has observed them. In the same way it can be said of the Gospel."

Conjecture: **Read "nonne pereat (or perit) qui ea observaverit?" — the objection requires that the literal observer does perish; "non" appears to be "nonne" truncated, or an intrusion.**

The sentence immediately following spells out the parallel it is supposed to license, and it turns on the literal observer being destroyed: "Nam si hoc, *nisi manducaveritis carnem Filii hominis, et biberitis ejus sanguinem*, ... ad litteram observatur ... hic, sicut alibi, stultum et damnabile est." A clause saying the literal observer does NOT perish removes the very ground of the objection (that the letter kills) and leaves "eodem modo dici potest de Evangelio" with nothing to transfer.

<sub>found by 11066-u13 · chunk 0033</sub>

#### 0556D — dropped-non · **ours** · high confidence

Printed: *Non tamen ita quod lex post Christi adventum per nullum temporis curriculum licite a quoquam fieret.*

Our English: "Yet not so that the law after the coming of Christ might lawfully be done by anyone through any course of time."

Conjecture: **The Latin has a double negative — non ... per NULLUM temporis curriculum — i.e. 'Yet not in such a way that through NO interval of time could the law lawfully be kept by anyone after Christ's coming' (= there was an interval in which it could). The English collapses 'per nullum' into 'through any', turning the concession into a flat denial.**

Hugh has just declared for Augustine against Jerome two sentences earlier: 'Augustinus dicit quod licuit Judaeis tunc in primitiva Ecclesia eas observare' / 'Augustine says that it was permitted the Jews then, in the primitive Church, to observe them', and 'Salva reverentia secretorum, B. Augustini sententiam praeferimus sententiae B. Hieronymi'. He then presses Jerome directly: 'Sed nonne Christus etiam post Joannem legem servavit, vetus pascha celebrando? Nunquid Christus fecit quod non decuit?' The English sentence asserts precisely Jerome's position, which this whole paragraph is written to refute.

<sub>found by 11066-u14 · chunk 0036</sub>

#### 0570D — sense-reversing-letter · **migne** · medium confidence

Printed: *Natura tribus modis accipitur in sacra Scriptura, scilicet pro illo integro et interrupto bono, in quo conditus est homo*

Our English: "Nature is taken in three ways in Holy Scripture, namely for that whole and interrupted good in which man was created"

Conjecture: **incorrupto for interrupto — 'that whole and UNcorrupted good in which man was created'.**

'interrupto' cancels its own paired adjective 'integro' ('whole') in the same phrase, and cancels the sense of the first of the three acceptations, whose proof-text follows immediately: 'secundum quam acceptionem dicitur quod omnis creatura Dei bona est'. The contrast is drawn explicitly against the second and third acceptations — 'natura corruptio peccati' and 'reliquiis illius boni naturalis, quae remanserunt in nobis post peccatum' — so the good of man's creation is precisely the one that is NOT yet broken. The English reproduces the printed reading literally.

<sub>found by 11066-u14 · chunk 0040</sub>

#### 0573C — added-negative · **migne** · medium confidence

Printed: *QUAESTIO XXV. In virum perfectum, etc. Quaeritur qua perfectione. Solutio. Nec perfectio potest intelligi vel de toto Christo, id est corpore et capite, vel de singulis membris.*

Our English: "QUESTION XXV. Unto a perfect man, etc. It is asked, by what perfection. Solution. Perfection can be understood neither of the whole Christ, that is, of body and head, nor of the individual members."

Conjecture: **Haec (or Talis) perfectio potest intelligi vel de toto Christo ... vel de singulis membris — 'This perfection can be understood either of the whole Christ ... or of the individual members'; Migne's Nec for Haec.**

The solution then develops BOTH branches affirmatively, each with its own explanatory particle: 'Christus ENIM in se consummatus, in aliis crescit et proficit, sed in futuro tandem perficietur' (the whole Christ, head and body) and 'Unusquisque ETIAM tunc erit vir perfectus, tam virtutum consummatione quam corporis statura' (the individual members). A denial that the perfection can be understood of either is contradicted by the two explanations that immediately follow it; the disjunctive 'vel ... vel' after 'Nec' is also ungrammatical for a double negation (nec ... nec).

<sub>found by 11066-u14 · chunk 0041</sub>

#### 0587A — dropped-word · **migne** · medium confidence

Printed: *qua praemissa de bonis eorum gratias agit, commemorans non fidem et opera, sed etiam conversionis modum et malorum sustinentiam ut ad perseverandum provocet*

Our English: "which sent beforehand, he gives thanks for their good things, recounting not their faith and works only, but also the manner of their conversion and their endurance of evils, that he may provoke them to persevere"

Conjecture: **non SOLUM fidem et opera, sed etiam — Migne's plate has lost 'solum', so the printed clause asserts that the Apostle does NOT recount their faith and works; our English silently repairs it by inserting 'only'**

The same sentence's own main clause says 'de bonis eorum gratias agit' (he gives thanks for their good things), and the correlative 'sed etiam' is unusable without 'non solum'. The chunk opens by saying these Thessalonians 'nec per tribulationes, nec per pseudopraedicatores potuerunt moveri a fidei veritate' and 'Hos collaudat Apostolus' — their faith and works are precisely what he does commemorate.

<sub>found by 11066-u15 · chunk 0047</sub>

#### 0591D — dropped-non · **migne** · medium confidence

Printed: *ideo dictus est diabolus operari occulte in Nerone, non quia manifesta esset illa persecutio, sed quia illa est umbra, et figura, et imago quaedam illius, quae fiet per Antichristum*

Our English: "the devil is therefore said to work secretly in Nero, not because that persecution was not manifest, but because it is a shadow, and figure, and a certain image of that which shall be done through Antichrist"

Conjecture: **non quia manifesta NON esset illa persecutio — a 'non' has dropped out of the causal clause; the English silently supplies it**

The objection two lines earlier is 'Nonne Nero Christum negavit, et aperte eos, qui Christum praedicabant, persecutus est?' — the persecution WAS open, and the whole point of the second solution is that 'occulte' is not said because the persecution lacked manifestness but because it is a figure of Antichrist's. As printed ('not because that persecution was manifest') the clause denies the very fact the objection has just established.

<sub>found by 11066-u15 · chunk 0048</sub>

#### 0593A — added-negative · **migne** · medium confidence

Printed: *Si enim ei non divinum cultum exhibebunt, cum conscientia eorum dictet eis, ipsum tanquam Deum adorandum, ad mortem peccabunt, et ita videntur inexcusabiles esse*

Our English: "For if they do not exhibit divine worship to him, since their conscience dictates to them that he is to be adored as God, they shall sin unto death, and thus they seem to be inexcusable"

Conjecture: **et ita videntur EXCUSABILES esse — the objection argues that they have an excuse; Migne's 'in-' reverses the objection into the solution's own position**

The question is 'an habeant aliquam excusationem?' and the premise given (refusing worship against a binding conscience is itself mortal sin) is an argument FOR excuse, not against it. The Solutio then rebuts: 'ubi satis docet quod propter praecedentia peccata NON habebunt excusationem, etsi arbitrentur se obsequium praestare Christo' — a rebuttal that has nothing to rebut if the objection already concluded they were inexcusable.

<sub>found by 11066-u15 · chunk 0048</sub>

#### 0597C — dropped-non · **migne** · high confidence

Printed: *Cui solutioni sic objicitur: Adam est seductus, quia non credidit verum esse, quod hostis persuasit; mulier vero est seducta credens verum esse, quod serpens dicebat*

Our English: "Against which solution it is thus objected: Adam was seduced, because he did not believe to be true what the enemy urged; but the woman was seduced, believing to be true what the serpent was saying"

Conjecture: **Adam NON est seductus, quia non credidit verum esse, quod hostis persuasit**

The lemma being commented on, printed three lines above, is 'Adam non est seductus, sed mulier'; the clause's own causal ground ('because he did not believe what the enemy urged') is the reason he was NOT seduced; the contrasting 'mulier VERO est seducta credens verum esse' has no contrast left if Adam too was seduced; and the very next question opens 'Quaeritur quomodo verum sit, quod non est seductus?'

<sub>found by 11066-u15 · chunk 0050</sub>

#### 0611D — dropped-non · **migne** · medium confidence

Printed: *unde dicit genui, ne nova intelligatur: hodie enim de praeterita; et sic innuitur esse aeterna: in qua nil est praeteritum, quasi esse desierit; nec futurum, quasi nondum sit.*

Our English: "whence he says "I begot," lest it be understood as new; for "today" is said of a past begetting; and thus it is intimated to be eternal, in which nothing is past, as though it had ceased to be, nor future, as though it were not yet."

Conjecture: **hodie [autem] ne praeterita — i.e. the pair 'genui, ne nova ... hodie, ne praeterita'; Migne's 'enim de' has swallowed the negative 'ne', reversing the clause**

The very next clause says the generation 'is eternal, IN WHICH NOTHING IS PAST, as though it had ceased to be' (in qua nil est praeteritum, quasi esse desierit). A 'hodie' that is said 'de praeterita' asserts exactly what the following words deny; the whole point of the two-word gloss is that 'genui' rules out newness and 'hodie' rules out pastness.

<sub>found by 11066-u16 · chunk 0054</sub>

#### 0626D — dropped-non · **migne** · high confidence

Printed: *Cum ergo aliquid legitur, quod a nobis non observatur, quaerendum est tantum quid significet, non reprehendendum; quia eo ipso, quod jam observatur, non damnatum, sed impletum probatur.*

Our English: "When therefore something is read which is not observed by us, we must only ask what it signifies, not reprehend it; because by the very fact that it is now not observed, it is proved not condemned, but fulfilled."

Conjecture: **quod jam NON observatur**

The subject of the sentence is fixed by its own opening clause: 'aliquid ... quod a nobis NON observatur' — a thing we do NOT observe. The causal clause then has to be 'because by the very fact that it is now not observed it is proved fulfilled, not condemned'; as printed ('quod jam observatur') it says the opposite of the case under discussion and destroys the argument. Note our English already reads 'is now not observed', i.e. the translation silently repairs the printed Latin — the pair is out of register at this word.

<sub>found by 11066-u16 · chunk 0059</sub>


### 10804 PL 164 — Expositio in Cantica canticorum

#### 1238A — dropped-non · **migne** · high confidence

Printed: *Vox Synagogae: « Filii namque matris meae pugnaverunt contra me. » Mihi, inquit, quietudinis fuit facultas, quoniam necessaria parare, et *607* contra hostes pugnare necesse erat.*

Our English: "The voice of the Synagogue: « For the sons of my mother have fought against me. » There was for me, she says, opportunity of rest, since it was necessary to prepare what was needful and to fight against enemies."

Conjecture: **Mihi, inquit, NULLA quietudinis fuit facultas (or non fuit facultas) — 'I had no opportunity of rest, since I had to prepare necessities and fight against enemies.'**

The causal clause in the same sentence gives the reason for the OPPOSITE of what is asserted: 'quoniam necessaria parare, et contra hostes pugnare necesse erat' — a necessity of provisioning and fighting is a reason for having no leisure, not for having it. The immediately preceding sentences say the same in the bride's own voice: « Non in umbra quievi, non in lecto me otio dedi... In vinea laboravi, agrum excolui, vigilavi, jejunavi » ('I have not rested in the shade, I have not given myself over to idleness upon a bed'), and the next sentence continues 'Foris igitur pugnae, intus timores' ('Without, therefore, were fightings; within, fears'). Our English reproduced the defective plate literally, so the English asserts leisure in a paragraph whose whole burden is unrelieved toil and war.

<sub>found by 10804-u22 · chunk 0000</sub>

#### 1248A — sense-reversing-letter · **migne** · medium confidence

Printed: *Formosa mea super [1248A] nivem dealbata, sine macula et ruga. Surge, inquit, fac quod factura es, et ad me tandem post malitiam, et peracto officio veni.*

Our English: "My comely one, made whiter than snow, without spot or wrinkle. Arise, he says, do what thou art to do, and come to me at last, after the malice, and when thine office is fulfilled."

Conjecture: **post MILITIAM ('after thy warfare/service'), not post malitiam — paired with 'peracto officio', i.e. come to me when thy campaign is over and thy office discharged.**

The immediately preceding clause describes this same bride as 'Formosa mea super nivem dealbata, sine macula et ruga' ('made whiter than snow, without spot or wrinkle'), and the parallel member of the very sentence is 'peracto officio' — a discharged duty, not a sin. As printed, the summons imputes malice to the spotless bride at the moment she is being called; 'militia' restores the pairing warfare/office that the sentence's own structure demands. Our English carried the defect through literally ('after the malice').

<sub>found by 10804-u22 · chunk 0004</sub>

#### 1260B — sense-reversing-letter · **migne** · high confidence

Printed: *Hic enim est lignum scientiae boni et mali, Novum videlicet et Vetus Testamentum, quae et mala devitare, et bona nos facere docent. Habemus et lignum vetitum; id est Christum, qui est panis vivus, qui de coelo descendit.*

Our English: "For here is the tree of the knowledge of good and evil, namely the New and the Old Testament, which teach us both to shun evils and to do good. We have also the forbidden tree, that is, Christ, who is the living bread that came down from heaven."

Conjecture: **lignum VITAE ('the tree of life'), not lignum vetitum. The paradise topos pairs the lignum scientiae boni et mali with the lignum vitae; 'vetitum' is a plate corruption of 'vitae' (assisted by the Genesis phrase 'lignum vetitum').**

The apposition in the very same clause identifies this tree as Christ, 'qui est panis vivus, qui de coelo descendit' — the living bread given to be eaten. A tree that is FORBIDDEN is the exact opposite of the bread we are commanded to eat. The frame two sentences earlier makes it worse: 'Vocatur igitur Ecclesia paradisus, quoniam omnium deliciarum copiis repleta est' — the point of the paradise figure is that everything in this garden is available delight; a prohibition has no place in it. Our English rendered the defect literally ('the forbidden tree, that is, Christ'), producing the reverse of Bruno's sacramental point.

<sub>found by 10804-u22 · chunk 0008</sub>

#### 1270C — sense-reversing-letter · **migne** · medium confidence

Printed: *Imperfecti sunt enim qui hic loquuntur: idcirco ubi Deus sit, quo declinaverit, et quo in loco moreretur, quasi ignorantes inquirunt.*

Our English: "For those who speak here are imperfect: therefore they inquire, as though they knew not, where God may be, whither he has turned aside, and in what place he might die."

Conjecture: **moraretur (from moror, 'to abide') for moreretur (from morior, 'to die')**

The answer Bruno immediately supplies is about DWELLING, not dying: « mecum est et mecum habitat. Ad Patrem ivit, me non reliquit; coelos ascendit, me non deseruit. » The three indirect questions track the lemma « quo abiit ... quo declinavit » plus 'where he stays'; 'in what place he might die' asserts of the risen Christ the one thing this passage denies of him.

<sub>found by 10804-u23 · chunk 0011</sub>

#### 1276B — dropped-word · **migne** · low confidence

Printed: *Sulamitis autem *captiva* vel *despecta* interpretatur. Ecclesia vero prius despecta, nunc a viro electa est. Quod quidem Rachel significavit.*

Our English: "And Sulamitess is interpreted *captive* or *despised*. But the Church, formerly despised, is now chosen by a husband. Which indeed Rachel signified."

Conjecture: **Lia for Rachel — Leah is the wife Scripture calls despised (Gen. XXIX, 31: « videns autem Dominus quod despiceret Liam »)**

The type is fixed by the sentence it is attached to: « prius despecta, nunc a viro electa ». Of the two sisters it is Rachel who was loved from the first and Leah who was the despised one afterwards blessed — so naming Rachel makes the type say the reverse of the gloss it illustrates, and of the interpretation « Sulamitis ... despecta » two lines above.

<sub>found by 10804-u23 · chunk 0012</sub>

#### 1276D — sense-reversing-letter · **migne** · medium confidence

Printed: *nunc autem calceata es, ne inquinentur. Patientia namque pedes nostros calceat, quoniam sanguinem innocentum fundere non dubitavit, et non modo patitur.*

Our English: "but now thou art shod, lest they be defiled. For patience shoes our feet, since it did not hesitate to shed the blood of the innocent, and does not only suffer."

Conjecture: **sanguinem innocentum fundi non dubitavit (passive) — patience did not shrink from having innocent blood POURED OUT, i.e. its own; cf. the same idiom used of Christ at 1275C, « pro nobis sanguinem proprium fundere non dubitavit »**

As printed, the virtue of patience is the AGENT that sheds innocent blood — the opposite of patience, and the opposite of the sentence it explains: the feet are shod « ne inquinentur », lest they be defiled. The following gloss confirms the passive sense: « Possumus et per calceamenta, prophetarum qui mortui sunt exempla intelligere » — the shoes are the prophets who DIED, not who killed.

<sub>found by 10804-u23 · chunk 0013</sub>

#### 1283A — added-negative · **migne** · medium confidence

Printed: *Mustum enim novum esse vinum nemo dubitat; quod quidem ebullire non cessat, donec totum purgatum fuerit. ... Horum autem mustum, horum novum canticum fervere distulit, donec et haereticorum error, et paganorum infidelitas cessavit.*

Our English: "For no one doubts that must is new wine; which indeed does not cease to ferment until the whole has been purged. ... And their must, their new canticle, put off its fermenting until both the error of the heretics and the unbelief of the pagans had ceased."

Conjecture: **fervere non destitit (or: fervere distulit ← non distulit) — the martyrs' must did NOT cease boiling until heresy and paganism ceased**

Bruno has just laid down the simile in his own words two sentences earlier: « quod quidem ebullire non cessat, donec totum purgatum fuerit » — must does not stop fermenting until it is purged. The application must therefore say the martyrs' new song never stopped boiling until error ceased; 'distulit' says it postponed boiling until then, the exact reverse of the figure he built.

<sub>found by 10804-u23 · chunk 0015</sub>

#### 1284B — sense-reversing-letter · **migne** · low confidence

Printed: *Christus enim et signaculum, et clavis, firmumque sigillum est cordis sanctorum. Non possunt sanctorum corpora frangi, non possunt eorum secreta violari, tanto et tam munita sigillo.*

Our English: "For Christ is both the seal and the key and the firm signet of the heart of the saints. The bodies of the saints cannot be broken, nor can their secrets be violated, sealed with so great and so well-guarded a signet."

Conjecture: **corda for corpora — 'the HEARTS of the saints cannot be broken'**

The sealed thing has just been named as the heart — « firmumque sigillum est cordis sanctorum » — and is named again three lines later, « Signaculum est in corde, signaculum est in manu ». The saints' BODIES are precisely what this commentary says can be broken: « quatiuntur arbores, occiduntur martyres » (1262C), and at 1269A Christ himself « occidi potuit ». Only 'corda' preserves the seal-of-the-heart argument.

<sub>found by 10804-u23 · chunk 0015</sub>

#### 1284C — sense-reversing-letter · **migne** · high confidence

Printed: *« Quia fortis est ut mors dilectio. » -- « Perfecta namque charitas foras mittit timorem. » Non timet dilectio mortem, non superatur amore. Fortis est mors, fortis est dilectio.*

Our English: "« For love is strong as death. » -- « For perfect charity casteth out fear. » Love does not fear death, it is not overcome by love. Death is strong, love is strong."

Conjecture: **non superatur a morte — the plate has run 'a morte' together as 'amore', making love the thing that overcomes love**

The clause as printed says love 'is not overcome by love', which is empty; the whole paragraph is about love versus DEATH — the very next words are « Fortis est mors, fortis est dilectio », and then « Non timent Christi discipuli mortem, quoniam eorum dilectio fortis est ut mors. Cum morte pugnant, morti occurrunt. » The pair 'non timet ... mortem / non superatur a morte' is the required parallel.

<sub>found by 10804-u23 · chunk 0015</sub>


### 9076 PL 117 — Commentarium in Cantica canticorum

#### 0302B — dropped-word · **ours** · medium confidence

Printed: *Videns sponsam suam ad requiem festinare, et labores fugere, ac per quietem praesentis temporis ad aeternam beatitudinem tendere, se per pressuras et labores hujus saeculi illuc pervenire debere: « Sicut (inquit) lilium inter spinas, sic amica mea inter filias. »*

Our English: "Seeing his bride hasten to rest, and flee labors, and through the quiet of the present time tend toward eternal blessedness, whereas he himself must come thither through the afflictions and labors of this world: « As the lily among thorns, he says, so is my love among the daughters. »"

Conjecture: **The accusative subject `se ... pervenire debere` continues the indirect statement about the bride (`sponsam suam`), not the bridegroom: 'whereas she must come thither through the afflictions and labors of this world.' The English assigns the necessity to Christ ('he himself must come thither'), and supplies an adversative 'whereas' that the Latin does not print.**

The bridegroom's own gloss on the verse, in the next sentence, puts the labors squarely on the bride in the second person: 'Sic tibi vivendum est, et sic parata esse debes contra omnia adversa ... quia non solum ab his qui extra Ecclesiam sunt, mala pateris, verum etiam ab illis qui regenerati per baptismum ...' — rendered 'Thou must so live, and so must thou be prepared against all adversities ... because thou sufferest evils not only from those who are outside the Church, but also from those who seem, regenerated through baptism, to have come into the adoption of God.' The lemma being expounded is 'sicut lilium inter spinas, sic AMICA MEA inter filias': it is the bride, not Christ, who must reach beatitude among the thorns. As rendered, the sentence makes Christ the one who must attain thither through this world's afflictions, the opposite of what the immediately following exposition requires.

<sub>found by 9076-u17 · chunk 0003</sub>

#### 0315D — sense-reversing-letter · **migne** · medium confidence

Printed: *Deus Ecclesiae praecipue erat Petrus, cui dictum est in visione: « Surge, occide et manduca. »*

Our English: "Peter especially was the teeth of the Church, to whom it was said in the vision: « Arise, kill, and eat. »"

Conjecture: **Dens Ecclesiae praecipue erat Petrus (Dens, not Deus — a single letter)**

The whole paragraph is expounding the teeth: « ita et per dentes Ecclesiae doctores intelliguntur: dentibus enim cibos commolimus », and two sentences later « Bene autem hi dentes ovibus tonsis et lavacro lotis comparantur. » Migne's plate as printed makes Peter the GOD of the Church rather than one of her teeth, which the immediate neighbour flatly denies. Our English silently reads the correct 'teeth' — the defect survives only on the Latin plate, so the pair does not agree with itself.

<sub>found by 9076-u18 · chunk 0008</sub>

#### 0318C — opposite-rendering · **ours** · medium confidence

Printed: *Sole autem iterum super terras ascendente, inclinantur umbrae, id est cadit nox.*

Our English: "But when the sun again ascends above the lands, the shadows incline, that is, night falls."

Conjecture: **'that is, night sinks away' / 'night comes to an end' — cadit nox here is the ending of night, not its onset**

The preceding clause of the same sentence supplies the contrast: « Nam nox nihil est aliud nisi umbra terrae, quae sole descendente consurgit » — night RISES when the sun goes down. The sun is now ascending, so what happens must be the opposite. English 'night falls' is the standard idiom for nightfall, i.e. night arriving, so our rendering asserts exactly what its own previous clause excludes; it also breaks the allegory the passage is built on (« donec aspiret dies et inclinentur umbrae » = the eternal day dawning and the darkness of this world passing).

<sub>found by 9076-u18 · chunk 0009</sub>

#### 0328A — dropped-non · **migne** · medium confidence

Printed: *Lavi pedes meos, hoc est, actiones quibus nunquam pulverem tangere, hoc est, terrena agere consueveram, dignis poenitentiae fletibus ablui*

Our English: "I have washed my feet, that is, the actions with which I was never wont to touch the dust, that is, to do earthly things, I have washed with worthy weeping of penance"

Conjecture: **quibus nonnunquam pulverem tangere ... consueveram ('with which I was sometimes wont to touch the dust') — nonnunquam broken to nunquam**

The same sentence says these actions were washed « dignis poenitentiae fletibus »: there is nothing to wash away, and no penance to weep, if the feet NEVER touched dust. The following lemma makes it explicit — « Quomodo inquinabo illos? id est, quomodo fieri potest, ut iterum ad cogitanda caduca et terrena redeam » — 'again' presupposes that she formerly did touch earthly things. This is the nonnulli/non novelli class of word-division defect.

<sub>found by 9076-u18 · chunk 0012</sub>

#### 0328A — sense-reversing-letter · **migne** · medium confidence

Printed: *Timet ergo Ecclesia, vel anima quaeque sancta, hac tunica exui, et in contemplatione sui Conditoris requiescens, iterum reindui et saecularibus negotiis occupari.*

Our English: "The Church, then, or any holy soul, fears to be stripped of this tunic, and, resting in the contemplation of her Creator, to be reclothed again and occupied with worldly affairs."

Conjecture: **hac tunica exuta ... iterum reindui timet — the participle, not the infinitive: 'stripped of this tunic and resting in contemplation, she fears to be reclothed'**

The tunic has just been defined as worldly cares, and being rid of it is the good the whole passage defends: « Exspoliavi me tunica mea, quomodo induar illa? » and « Qui in sublimi contemplationis arce consistit, non descendat ut tollat tunicam suam. » As printed (and as rendered), the sentence has her fearing BOTH to be stripped and to be reclothed — the first fear is the opposite of what she has just said she did gladly. 'exuta' also restores the parallel with the nominative participle 'requiescens', which 'exui' leaves stranded.

<sub>found by 9076-u18 · chunk 0012</sub>

#### 0332B — dropped-non · **migne** · medium confidence

Printed: *quae quanto magis claritatem sui conditoris contemplantur, eo amplius quam utile sit omne creatum, in ejus comparatione aspiciunt, et ideo nigrae quasi corvus esse dicuntur.*

Our English: "and the more they contemplate the brightness of their Creator, the more they see, in comparison with him, how of little use is everything created, and therefore they are said to be black as a raven."

Conjecture: **quam inutile sit omne creatum (the in- of inutile lost)**

The clause has to explain the blackness: « et ideo nigrae quasi corvus esse dicuntur » — seeing how USEFUL every creature is would not make the angels black. The exactly parallel sentence a few lines earlier settles it: « quam quanto magis percipiunt, tanto magis in oculis suis peccatores sibi et contemptibiles esse videntur », and « quia fidelium multitudines suae fragilitatis sibi consciae sunt, et nihil se boni ex se habere noverunt. » Our English performs the silent repair ('how of little use'), which rescues the sentence while leaving the printed Latin asserting the opposite.

<sub>found by 9076-u18 · chunk 0013</sub>

#### 0344C — sense-reversing-letter · **migne** · high confidence

Printed: *Ipsi enim sagaciter discernere noverunt inter fragilitatem catholicae fidei doctrinam et letiferum haeretici corporis fetorem.*

Our English: "For they themselves have known how sagaciously to discern between the doctrine of the frailty of the Catholic faith and the death-bearing stench of the heretical body."

Conjecture: **fragrantiam catholicae fidei doctrinae — 'the fragrance of the doctrine of the Catholic faith'; Migne's fragilitatem turns the good odour into a weakness, and the English carried the defect through as an ungrammatical genitive chain (fragilitatem … doctrinam, two accusatives, is itself unconstruable).**

The sentence immediately before states the terms of the antithesis: « Quia naso fetores et bonos odores discernimus, recte per nasum Ecclesiae iidem sancti doctores intelliguntur. » The nose discerns STENCHES and GOOD ODOURS; the second limb duly supplies the stench (« letiferum haeretici corporis fetorem »), so the first limb must supply the good odour of Catholic doctrine, not its 'frailty'. Nothing in the passage ascribes frailty to the Catholic faith — the same paragraph calls the teachers those who 'hold the highest place in the Church' and 'defend the Church'.

<sub>found by 9076-u19 · chunk 0017</sub>

#### 0345D — dropped-word · **migne** · low confidence

Printed: *Neque enim ad vitia incurvatur, sed recta et immobilis persistit. Unde Psalmista exspectantium voce dicebat: « Incurvatus sum et humiliatus usquequaque. »*

Our English: "For she is not bent toward vices, but stands upright and unmoved. Whence the Psalmist said, in the voice of those who wait: « I am bowed down and humbled exceedingly. »"

Conjecture: **peccantium (or poenitentium) voce — 'in the voice of sinners'; exspectantium assigns the bowing to the waiting faithful, i.e. to the very party the sentence has just declared unbendable.**

The clause it is adduced to illustrate is « Neque enim ad vitia incurvatur, sed recta et immobilis persistit », and the parallel citation that follows keeps the speaker a sinner: « propheta sub specie Hierusalem PECCANTI ANIMAE de malignis spiritibus dicit: Quia humiliaverunt te… Incurvare ut transeamus », capped by « At contra sancta Ecclesia recta stat, nec unquam incurvari consentit. » As printed, the bent speaker and the unbent Church are the same party.

<sub>found by 9076-u19 · chunk 0018</sub>

#### 0353B — sense-reversing-letter · **migne** · medium confidence

Printed: *Matrem et genitricem Synagogae, majorem et principaliorem Judaicae plebis patrem dicit, quales erant Scribae et Pharisaei…*

Our English: "By the mother and her that bore the Synagogue he means the greater and more principal fathers of the Jewish people, such as were the Scribes and Pharisees…"

Conjecture: **partem for patrem — 'the greater and more principal PART of the Jewish people'. The English silently repaired the singular patrem into a plural 'fathers' to make the sentence run.**

The gloss is explaining 'mother' and 'she that bore thee', and the very next clause keeps the maternal figure: « qui reliquam plebem tanquam mater et genitrix regere debebant et erudire. » 'reliquam plebem' (the REST of the people) presupposes that the referent is a part of that people, not a father of it; and defining matrem et genitricem as a patrem contradicts the lemma it is glossing («Ibi corrupta est mater tua, ibi violata est genitrix tua»).

<sub>found by 9076-u19 · chunk 0020</sub>


### 8195 PL 83 — Norma vivendi

#### 1248B — added-negative · **migne** · medium confidence

Printed: *peccanti juste non dimittas, sed culpam sciturus, quia in te est venturum judicium; non habebis indulgentiam, nisi dederis.*

Our English: "do not lightly dismiss the sinner justly, but know the fault, since the judgment is coming upon you; you will not have indulgence unless you have given it."

Conjecture: **peccanti juste dimittas (the intrusive non should fall; cf. the whole section's command to forgive)**

The very next clause in the same sentence makes forgiving obligatory — 'non habebis indulgentiam, nisi dederis' ('you will not have indulgence unless you have given it') — and the sentence after it repeats the command: 'tu tamen ex corde relaxa, veniam quoque propria voluntate concede' ('do you nevertheless release it from the heart, and grant pardon of your own will'). As printed the sentence forbids the forgiveness its own apodosis requires.

<sub>found by 8195-u60 · chunk 0000</sub>

#### 1249B — dropped-non · **migne** · medium confidence

Printed: *quando poteris facere, non pollicearis facere. Multum Deo reus eris, si non reddideris quod voves;*

Our English: "when you will be able to do a thing, do not promise to do it. You will be greatly guilty before God if you do not render what you vow;"

Conjecture: **quando non poteris facere, non pollicearis facere ('do not promise what you will not be able to do')**

The clause immediately following gives the reason — 'Multum Deo reus eris, si non reddideris quod voves' ('you will be greatly guilty before God if you do not render what you vow') — which only supports a warning against promising the UNdoable; and the same section opens 'Fac bonum quod spopondisti' ('do the good you have promised'). As printed it forbids promising precisely what one is able to perform.

<sub>found by 8195-u60 · chunk 0000</sub>

#### 1250A — dropped-word · **migne** · medium confidence

Printed: *Committe omnibus secreta professionis tuae, loquere aperte. Cunctis operta paucis annuntia;*

Our English: "Entrust to all the secrets of your profession; speak openly. Announce to all what is hidden from a few;"

Conjecture: **Committe paucis secreta professionis tuae ('paucis' for 'omnibus'); the following maxim is then intact in form 'cunctis aperta, paucis operta annuntia'**

The next sentence restricts hidden matter to the few — 'paucis annuntia' — so entrusting 'omnibus secreta professionis tuae' contradicts it directly; the same section also warns 'Nulla sit tibi curiositas sciendi latentia' ('let there be in you no curiosity to know hidden things').

<sub>found by 8195-u60 · chunk 0001</sub>

#### 1250C — added-negative · **migne** · low confidence

Printed: *nec adhuc si poenae immineant, peccanti cuiquam non aquiescas; melius namque est pati mortem quam perniciosa mala adimplere.*

Our English: "nor, even if punishments hang over you, do not give consent to anyone who is sinning; for it is better to suffer death than to carry out ruinous evils."

Conjecture: **nec ... peccanti cuiquam acquiescas (the second negative is intrusive)**

The reason clause attached to it — 'melius namque est pati mortem quam perniciosa mala adimplere' ('it is better to suffer death than to carry out ruinous evils') — and 'Similis est qui obtemperat malo ei qui facit malum' require a flat prohibition of consent; 'nec ... non acquiescas' as printed cancels itself, and the English reproduces the doubled negative rather than resolving it.

<sub>found by 8195-u60 · chunk 0001</sub>

#### 1250D — dropped-word · **migne** · low confidence

Printed: *tunc minime consuetudinem serva et legem, usus auctoritati cedat, pravum usum lex et ratio vincant.*

Our English: "then keep custom and the law least of all — let practice yield to authority, let law and reason conquer bad practice."

Conjecture: **tunc minime consuetudinem serva, sed legem ('sed' for 'et')**

The two clauses that follow put law on the winning side against custom — 'usus auctoritati cedat, pravum usum lex et ratio vincant' ('let practice yield to authority, let law and reason conquer bad practice') — so the printed text, which tells the reader to disregard the law along with custom, asserts the opposite of its own continuation.

<sub>found by 8195-u60 · chunk 0001</sub>

#### 1251A — added-negative · **migne** · medium confidence

Printed: *Excute manus tuas ab omni munere, si in coelis velis habitare; in judicio quoque sine misericordia sedeas. Custodi justitiam discretionis, et noli plus justus esse quam oportet.*

Our English: "Shake your hands free of every gift, if you wish to dwell in heaven; in judgment, too, sit without mercy. Keep the justice of discretion, and do not be more just than you ought."

Conjecture: **in judicio quoque cum misericordia sedeas (or 'sine acceptione personarum'); 'sine misericordia' cannot stand as an imperative here**

The next sentence caps strict justice — 'noli plus justus esse quam oportet. Omne enim quod nimium est vitium est' — and the section that follows opens 'Impia justitia est fragilitati humanae non ignoscere ... judicii examen sequatur pietas, disciplinae rigorem temperet indulgentia' ('it is an impious justice not to pardon human frailty ... let mercy follow upon the scrutiny of judgment'). A command to sit in judgment WITHOUT mercy is the reverse of what stands on either side of it.

<sub>found by 8195-u60 · chunk 0001</sub>

#### 1251B — added-negative · **migne** · medium confidence

Printed: *Quamvis enim non credenda sunt, ideo tamen dimittentur, nisi quae certis indiciis approbantur, et non quae manifesto examini committuntur, et non quae ordine judiciario comprobantur.*

Our English: "For although they are not to be believed, yet on that account they will be dismissed — except such as are proved by sure evidences, and not such as are committed to open scrutiny, and not such as are established by the order of judicial process."

Conjecture: **... nisi quae certis indiciis approbantur, et quae manifesto examini committuntur, et quae ordine judiciario comprobantur (both intrusive 'non' to fall)**

The exception clause it belongs to already admits cases 'quae certis indiciis approbantur' ('proved by sure evidences') as judgeable, and the section's rule is 'ante proba, tunc judica' ('first prove, then judge'). The two following members, coordinated to that same exception, must likewise be positive; with 'non' they exclude open scrutiny and regular judicial process from what may be judged — the opposite of 'ante proba, tunc judica'.

<sub>found by 8195-u60 · chunk 0001</sub>


### 11063 PL 175 — Expositio in Abdiam

#### 0376D — sense-reversing-letter · **migne** · high confidence

Printed: *Per haec enim, quae distinguo, personarum proprietatem ostendo, non naturae vanitatem confundo.*

Our English: "For by these things which I distinguish, I show the property of the persons; I do not confound the emptiness of nature."

Conjecture: **non naturae UNITATEM confundo — "I do not confound the unity of nature"**

The immediately preceding sentence states the very rule being applied: "Caveat lector, ne personarum confundat trinitatem, nec divinae essentiae dividat unitatem"; the next sentence continues "sicut Trinitas natura vel essentia UNA." Hugh repeats the same formula verbatim at 0392B with the right word: "Haec dicens non divinae essentiae unitatem divido, nec propria personarum confundo." "Vanitas naturae" (emptiness of nature) is not a Trinitarian category at all and asserts the opposite of the unity he is defending.

<sub>found by 11063-u33 · chunk 0002</sub>

#### 0377D — sense-reversing-letter · **migne** · low confidence

Printed: *Tumor praecedit superbiae, tenebrae sequuntur ignorantiae, infidelitas succedit idololatriae.*

Our English: "The swelling of pride goes first, the darkness of ignorance follows, unbelief succeeds to idolatry."

Conjecture: **infidelitatI succedit idololatriA — idolatry succeeds unbelief (case endings transposed)**

The very next sentence gives the sequence in fixed order and puts unbelief BEFORE idolatry: "per petram, infidelitas ignorantiae; per scissuras, schismata idololatriae; per habitantem, consensum immunditiae." As printed, the order of the fall is reversed against its own immediately following exposition.

<sub>found by 11063-u33 · chunk 0002</sub>

#### 0382A — sense-reversing-letter · **migne** · medium confidence

Printed: *Superbia expellit te, habitantem in scissuris petrae; qui dicis in corde tuo: Quis me deducet in terram?*

Our English: "Pride driveth thee out, that dwellest in the clefts of the rock; who sayest in thy heart: Who shall lead me down to the ground?"

Conjecture: **Superbia [cordis tui] EXTULIT te — "the pride of thy heart hath lifted thee up" (Obad. 3, as printed twice elsewhere in this same work)**

The lemma is quoted correctly twice in the same commentary — at 0377A/0377C ("Superbia cordis tui extulit te, habitantem in scissuris petrarum, exaltantem solium tuum") and again at 0385C. And the exposition attached to THIS occurrence expounds elevation, not expulsion: "Solium, est haeretica doctrina. Solii exaltatio, perversae doctrinae dilatatio," and the answering divine word two lines later is "Si exaltatus fueris ut aquila ... inde detraham te" — a threat that presupposes pride has raised him up, not driven him out.

<sub>found by 11063-u33 · chunk 0003</sub>

#### 0385D — dropped-word · **migne** · low confidence

Printed: *Hic est decalogus inobedientiae, quem in monte Sinai, quod interpretatur humilitas, Dominus dedit Moysi.*

Our English: "This is the decalogue of disobedience, which the Lord gave to Moses on Mount Sinai, which is interpreted humility."

Conjecture: **a lost antithetical particle, e.g. "decalogus inobedientiae, CONTRA [eum] quem in monte Sinai ... Dominus dedit Moysi"**

The ten items just enumerated are "contemptum Dei ... praedicationem peccati ... odium boni ... amorem mali ... oblivionem Dei" — which God manifestly did not give on Sinai — and the very next sentence names its keepers as Pharaoh and the reprobate: "Hunc Decalogum impleverat, qui dicebat: Nescio Dominum; et Israelem non dimittam." As printed, the sentence makes the Lord the giver of the decalogue of disobedience, the opposite of what the surrounding argument requires.

<sub>found by 11063-u33 · chunk 0004</sub>

#### 0389A — dropped-word · **migne** · high confidence

Printed: *Historialiter ostendit in humanitatem Idumaeorum, et crudelitatem eorum adversus populum Israeliticum*

Our English: "Historically it shows the [sic: *in humanitatem*] of the Idumaeans, and their cruelty against the people of Israel"

Conjecture: **INHUMANITATEM Idumaeorum — the word-division defect splits inhumanitas into in + humanitas**

The coordinate noun in the same clause is "et crudelitatem eorum adversus populum Israeliticum," and what follows is the charge that they "not only failed him with help in the time of his distress, but even joined themselves to the fellowship of his enemies." The printed division makes the sentence say the prophet displays the Idumaeans' HUMANITY, the exact opposite of the cruelty it is coupled with. (Cf. the same accusation at 0388C: "adversus populum Israeliticum inique egit.")

<sub>found by 11063-u33 · chunk 0005</sub>

#### 0403A — dropped-word · **migne** · medium confidence

Printed: *Cumque huic limo profundi animus fuerit infixus et luto coinquinationis et immunditiae involutus, evelli nequaquam potest, ad illum clamet, et auxilium ejus postulet, de quo Psalmista loquitur*

Our English: "And when the soul has been stuck fast in this mire of the deep, and wrapped about in the mud of defilement and uncleanness, and can by no means be plucked out, let it cry to him and beg his help of whom the Psalmist speaks"

Conjecture: **evelli nequaquam potest, NISI ad illum clamet et auxilium ejus postulet — "it can by no means be plucked out unless it cry to him and beg his help"**

The Psalm verse quoted in the same sentence asserts precisely that the extraction does happen on such a cry: "Exspectans exspectavi Dominum, et intendit mihi, et exaudivit preces meas, et eduxit me de lacu miseriae, et de luto faecis." With nisi dropped, the clause flatly denies the rescue that the quotation it introduces affirms, and the two hortatory subjunctives (clamet, postulet) are left hanging with no conjunction — the mark of the lost particle.

<sub>found by 11063-u33 · chunk 0010</sub>


### 11057 PL 175 — Adnotatiunculae in Joelem

#### 0327B — added-negative · **migne** · medium confidence

Printed: *Rami sunt animae desideria, per quae extenditur usque ad [0327B] opera: qui albi facti sunt, quando nativum virtutis colorem non amittunt.*

Our English: "The branches are the desires of the soul, by which it is stretched out as far as works: which are made white when they do not lose the native color of virtue."

Conjecture: **quando nativum virtutis colorem amittunt (delete non)**

The lemma being glossed is a devastation image, and Hugh has just glossed the whole clause negatively in the two sentences immediately preceding: 'Sed hanc gens praefata decorticavit, nudavit, projecit. Decorticavit actu, nudavit sensu, projecit affectu. Actu probitatis, sensu honestatis, affectu bonitatis.' The branches are whitened (barked bare) precisely BY the enemy's stripping, i.e. when the desires lose the native green of virtue; as printed the gloss makes whitening the mark of virtue retained. Compare the parallel gloss on the same lemma at 0325A: 'quia persecutione ingravescente tepuerunt exercitia religionis, siluerunt verba praedicationis, virtutum merita attenuata sunt in multis.'

<sub>found by 11057-u26 · chunk 0001</sub>

#### 0339B — sense-reversing-letter · **migne** · medium confidence

Printed: *Nonnulli in divinitate Deitatis unitatem, sed disparem potestatem in aequalem dignitatem.*

Our English: "Not a few believed in the divinity a unity of Deity, but an unlike power into an equal dignity."

Conjecture: **sed disparem potestatem, inaequalem dignitatem (word-division: inaequalem set as 'in aequalem')**

The clause pairs 'disparem potestatem' (unlike power) with 'aequalem dignitatem' (equal dignity) in the same breath, and the very next sentence sets the opposite party against it: 'Plerique omnium aequalitatem, sed naturae negaverunt unitatem' — the group that granted EQUALITY is the other one, which denied unity of nature. The subordinationist group here must deny both equal power and equal dignity while holding the unity of Deity; 'in aequalem' is 'inaequalem' broken across a word division.

<sub>found by 11057-u26 · chunk 0004</sub>

#### 0341D — dropped-word · **migne** · medium confidence

Printed: *Sic cadendo non demoliuntur, sed potius eriguntur et consolidantur, juxta illud: *Omnis qui se exaltat, humiliabitur [n: (Luc. XIV)]*.*

Our English: "Falling thus they are not broken, but rather are raised up and made firm, according to that word: *Every one that exalteth himself shall be humbled [n: (Luc. XIV)]*."

Conjecture: **juxta illud: et qui se humiliat, exaltabitur (Luc. XIV, 11b) — the second half of the verse, dropped or displaced by the first**

The proof-text is adduced to support the immediately preceding clause 'sed potius eriguntur et consolidantur' — men who fall down (humble themselves) are raised up. As printed, the verse-half quoted asserts the reverse movement (the self-exalter is humbled), which supports nothing in the sentence it is attached to; the required half is 'qui se humiliat, exaltabitur'. The whole surrounding passage is about apostolic men who 'devota horum consideratione, Creatori sese humiliter prosternunt' and are thereby 'not broken'.

<sub>found by 11057-u26 · chunk 0005</sub>

#### 0352D — sense-reversing-letter · **migne** · high confidence

Printed: *Torcularia, ipsa sunt corda inter spem et timorem posita, constantiam inferius, patientiam superius habentia; constantiam in tentatione, patientiam in tribulatione…*

Our English: "The presses are those hearts which are set between hope and fear, having constancy below and patience above; constancy in temptation, patience in tribulation…"

Conjecture: **constantiam SUPERIUS, patientiam INFERIUS habentia — the two adverbs are transposed in Migne's plate**

The very next sentences state the opposite arrangement and are internally consistent with the wine-press image: 'Constantia siquidem premit, et DESUPER arcet; patientia INFERIUS jacet et pondus sustinet' ('For constancy presses down and holds off from above; patience lies beneath and bears the weight'). Constancy cannot be 'below' in one clause and press 'from above' two clauses later; in a torcular the upper beam presses and the lower part bears the weight.

<sub>found by 11057-u27 · chunk 0008</sub>

#### 0369A — sense-reversing-letter · **migne** · medium confidence

Printed: *quando per apostolos et eorum successores evangelica doctrina gentilem populum ad finem initiavit, ad credulitatem convertit, ad baptismi gratiam perduxit*

Our English: "when, through the apostles and their successors, evangelical teaching initiated the Gentile people unto the end, converted it to belief, and led it to the grace of baptism"

Conjecture: **ad FIDEM initiavit (one letter: fidem → finem)**

'initiavit' means to begin/initiate, so 'ad finem initiavit' asserts an initiation unto the END — the reverse of what the verb requires; and the two parallel members that follow both name the entry-stages of conversion, 'ad credulitatem convertit, ad baptismi gratiam perduxit' (converted to belief, led to the grace of baptism). The triad is fides → credulitas → baptismus, not 'end'.

<sub>found by 11057-u27 · chunk 0013</sub>


### 11088 PL 176 — Expositio in regulam S. Augustini

#### 0896C — sense-reversing-letter · **ours** · medium confidence

Printed: *Melius est minus egere quam plus habere.*

Our English: "It is better to lack more than to have more."

Conjecture: **minus egere = "to need LESS"; render "It is better to need less than to have more." The comparative in the English has been flipped from minus to "more," which is the one word the sentence turns on.**

The gloss Hugh immediately attaches reads the lemma as a counsel of wanting less, not of wanting more: "Servus ergo Dei ut voluntatem atque appetitum carnis possit reprimere, semper debet ad MINUS tendere ut ipsorum alimentorum et vestimentorum MINUS velit habere" — "ought always to tend toward the less, so that he may wish to have less." As printed in English the maxim also compares "more" with "more," which is no comparison at all; the Latin minus/plus antithesis is what makes it one.

<sub>found by 11088-u24 · chunk 0005</sub>

#### 0900D — sense-reversing-letter · **migne** · low confidence

Printed: *Ille ergo vir sanctus timeat displicere, ne velit feminae malae placere. Illum cogitet omnia videre, ne velit feminae male videri.*

Our English: "Let that holy man therefore fear to displease him, lest he wish to please an evil woman. Let him consider that he sees all things, lest he wish to be ill seen by a woman."

Conjecture: **feminae MALE placere (adverb), not feminae MALAE placere — "lest he wish to please a woman wickedly." One added letter turns a blanket prohibition into a conditional one about a particular (evil) woman.**

The twin clause printed in the very next breath keeps the adverb — "ne velit feminae MALE videri" — so the two halves of the same balanced sentence do not agree; and the rule this comments on forbids fixing on ANY woman, not on wicked ones only: "Oculi vestri, etsi jaciantur in aliquam feminarum, in NULLA figantur" (0899-lemma, same chapter). As Migne prints it, pleasing a woman who is not "mala" would fall outside the precept, which the chapter explicitly denies.

<sub>found by 11088-u24 · chunk 0006</sub>

#### 0914B — dropped-non · **migne** · high confidence

Printed: *Quotidie dicimus Deo: Dimitte nobis debita nostra sicut et nos dimittimus debitoribus nostris, quod si debitoribus nostris, id est eis qui in nos peccant nos dimittimus, cum dicimus Deo: Dimitte nobis debita nostra, sicut et nos dimittimus, ipsa nostra oratione inculpamur, et Deum adversum nos ad iracundiam incitamus, et ipsi super nos inducimus maledictionem potius quam benedictionem.*

Our English: "Daily we say to God: Forgive us our debts, as we also forgive our debtors; and if we ourselves forgive our debtors, that is, those who sin against us, when we say to God: Forgive us our debts, as we also forgive, we are accused by our very prayer, and we stir up God to wrath against us, and we bring down upon ourselves a curse rather than a blessing."

Conjecture: **Read 'id est eis qui in nos peccant NON dimittimus' — Migne's 'nos' is a one-letter corruption of 'non' (the preceding 'nos' in 'sicut et nos dimittimus' invited the assimilation). Sense: 'but if we do NOT forgive our debtors ... we are accused by our own prayer.'**

As printed, forgiving one's debtors is what makes the Lord's Prayer an accusation and a curse — the exact reverse of the argument. The next sentence says so: 'Sicque fit ut oratio quae debebat nobis esse salubris, sit noxia, et peccata nostra quae debuimus minuere, orando augeamus' — the prayer is harmful only when the petitioner has NOT forgiven. Same paragraph, just above: 'si hoc quod in nobis delinquitur ex corde non dimittimus, et illud rursum exigitur quod nobis jam per poenitentiam dimissum fuisse gaudebamus'; and below at 0915B: 'Quisquis autem roganti et peccata sua poenitenti ex corde non dimittit, nullo modo existimet a Domino peccata sua dimitti.'

<sub>found by 11088-u25 · chunk 0012</sub>

#### 0920A — dropped-word · **migne** · medium confidence

Printed: *Sed quia nonnunquam nec jubentur adversa, sciendum summopere est quod obedientia aliquando si de suo habeat aliquid, nulla est, aliquando autem si de suo non habeat aliquid, minima est.*

Our English: "But because sometimes adverse things are not even commanded, it must most especially be known that obedience is sometimes nothing if it has anything of its own, and sometimes is least if it has not something of its own."

Conjecture: **Gregory's antecedent (Moral. XXXV) distinguishes what is commanded in prosperity from what is commanded in adversity; read 'quia nonnunquam prospera, nonnunquam vero jubentur adversa'. Migne's 'nec' stands where the prosperity member has fallen out, and negates the adversity member instead.**

Two sentences later the same paragraph states that adverse things ARE commanded, and builds the whole distinction on it: 'Rursum cum mundi despectus praecipitur, cum probra et contumeliae adipisci jubentur' — and then 'Debet ergo et obedientia in adversis aliquid ex suo habere.' If adversity were never commanded there would be no 'in adversis' case to discuss.

<sub>found by 11088-u25 · chunk 0014</sub>

#### 0923A — dropped-word · **migne** · high confidence

Printed: *Quod cum faciunt non sui, sed etiam ipsius magis obediendo miserentur. Sui videlicet; quia animas suas salvant.*

Our English: "And when they do this, by obeying the more they show mercy not on themselves, but also on him. On themselves, namely, because they save their own souls."

Conjecture: **Read 'non SOLUM sui, sed etiam ipsius ... miserentur' — 'solum' has dropped out, turning 'not only ... but also' into a flat denial.**

The very next clause asserts what the sentence has just denied: 'Sui videlicet; quia animas suas salvant' ('On themselves, namely, because they save their own souls'). The lemma being expounded, printed two paragraphs earlier at 0922C-D, also has the 'solum': 'Unde vos magis obediendo non solum vestri, sed etiam ipsius miseremini.'

<sub>found by 11088-u25 · chunk 0014</sub>


### 10517 PL 155 — De primordiis et inventione sacrae religionis Hierosolymorum

#### 1097C — added-negative · **migne** · medium confidence

Printed: *sed ad rei veritatem, id quod de sacris annalibus decerpere potui, et quae conjectura et ratione assequi, non praepositae rei seriem in medium adducam.*

Our English: "but, for the truth of the matter, I shall bring forward into the open what I have been able to cull from the sacred annals, and what I can attain by conjecture and reasoning — not the sequence of the matter as it has been set forth."

Conjecture: **nunc praepositae rei seriem in medium adducam ("I shall NOW bring forward into the open the sequence of the matter set before us") — non for nunc**

The same sentence has already promised the opposite: "sed ad rei veritatem, id quod de sacris annalibus decerpere potui ... in medium adducam," against the preceding "Quorum vanas fabulas hoc loco mihi referre cura non est." He announces what he WILL set out; the trailing non cancels the very act he has just undertaken, and the English preserves the cancellation as a dangling "— not the sequence of the matter."

<sub>found by 10517-u70 · chunk 0000</sub>

#### 1102D — dropped-word · **migne** · medium confidence

Printed: *Et Thomas respondit et dixit. « Ego non credo. ego non tango, et video foramen clavorum manuum suarum et pedum, et misero manum meam in pectore suo. »*

Our English: "And Thomas answered and said: « I do not believe. I do not touch, and I see the hole of the nails of his hands and of his feet, and I shall put my hand into his breast. »"

Conjecture: **nisi tangam et videam foramen clavorum ... et mittam manum meam in pectus suum, non credam (Vulg. Joan. xx, 25: "nisi videro ... non credam") — the governing nisi has dropped out, turning the unfulfilled condition into flat assertions**

The next sentence has Thomas still absent and still unbelieving: Christ must say to him "Mitte huc digitum tuum in foramen manuum mearum et mei costatus, et noli esse incredulus, sed fidelis," and only then "in illa sancta domo recognovit sanctus Thomas suum Creatorem." As printed, Thomas already touches nothing yet SEES the nail-holes ("et video foramen clavorum") and will put in his hand — he cannot both see the wounds and be the man who has not yet seen; the immediately preceding clause is "sed Thomas non erat cum illis, quando Jesus venit."

<sub>found by 10517-u70 · chunk 0001</sub>

#### 1103A — dropped-word · **migne** · low confidence

Printed: *sicut sanctus Stephanus, qui fuit primus martyr, et Philippus prothomartyr, Nichauome, Thymocenn Permanan, Nycholaus Antiochenus.*

Our English: "such as St. Stephen, who was the first martyr, and Philip the protomartyr, Nichauome, Thymocenn Permanan, Nicholas of Antioch."

Conjecture: **Philippus prothodiaconus / diaconus (the list is the seven of Acts vi, of whom Stephen alone is protomartyr); prothomartyr for prothodiaconus**

Its own immediate neighbour in the same clause makes the contrary claim of a different man: "sanctus Stephanus, qui fuit primus martyr." Chunk 0000 says the same at 1099C — "septem viros elegerunt ... quibus Stephanum primum martyrem praepositum constituerunt." Two men cannot each be the first martyr, and the English prints both.

<sub>found by 10517-u70 · chunk 0001</sub>

#### 1104A — sense-reversing-letter · **migne** · high confidence

Printed: *Et quando Soldanus vidit maliciam Saracenorum, dimisit stare Conradum, et praecepit sibi, ut sine timore Christianos, ut consueverat, debellaret.*

Our English: "And when the Sultan saw the malice of the Saracens, he let Conrad go, and commanded him that without fear he should fight the Christians, as he had been accustomed."

Conjecture: **a verb of feeding/aiding, e.g. ut sine timore Christianos, ut consueverat, adjuvaret (or pasceret / de pane elemosinaret); the Sultan licenses the alms, not warfare**

The qualifier "ut consueverat" points at a custom the same paragraph has just described twice, and it is the opposite of fighting: "quolibet die ter vel quater, ponebat de pane in suo gremio, et desuper muros terrae projiciebat panem Christianis." The very next sentence confirms what he did on the strength of this order: "Et quando Conradus, vel Gerardus, audivit istud, quolibet die projiciebat panem Christianis Dei." Conrad is a servulus Jesu Christi who has just been vindicated by the bread-into-stone miracle; "debellaret" makes the Sultan order Christ's servant to make war on Christians, and the English follows it.

<sub>found by 10517-u70 · chunk 0001</sub>


### 10725 PL 162 — Enarrationes in Cantica canticorum

#### 1199C — sense-reversing-letter · **migne** · medium confidence

Printed: *Similis est *hinnulo servorum.* Ipse est enim filius cervorum, id est prophetarum et patriarcharum qui veloces cervi fuerunt.*

Our English: "He is like a *young hart of the servants*. For he is the son of the harts, that is, of the prophets and patriarchs, who were swift harts."

Conjecture: ***hinnulo cervorum* (s- for c-, one letter); the lemma printed a few lines earlier at 1198A reads correctly "capreae hinnuloque cervorum"**

The very next sentence denies what the lemma-gloss just asserted: "Ipse est enim filius CERVORUM, id est prophetarum et patriarcharum qui veloces CERVI fuerunt" — the whole exposition is of harts, not servants, and the scriptural lemma quoted at 1198A/1201B is "hinnuloque cervorum" in both places. Our English carried the defect through literally ("of the servants") and then translated the correction ("the son of the harts") in the following clause, so the English contradicts itself in two consecutive sentences.

<sub>found by 10725-u20 · chunk 0005</sub>

#### 1200A — sense-reversing-letter · **migne** · low confidence

Printed: *Jam enim hiems transiit, *umbra* abiit et recessit … *Umbra,* id est, persecutio, id est, grando contundens, *jam abiit et recessit**

Our English: "For now the winter has passed, the shadow has gone and departed … *The shadow*, that is, persecution, that is, the bruising hail, *has now gone and departed*"

Conjecture: ***imber* abiit et recessit (Cant. II, 11), and *Imber,* id est persecutio**

The commentary's own gloss on the word is "grando contundens" — bruising hail — which glosses rain (imber), not shade; and the same commentary uses umbra in the opposite, favourable sense a few lines away ("et inclinentur umbrae, id est transeant ignorantiae hujus vitae," 1201C, 1207A) and in the protective sense at 1197B ("Sub umbra illius sedi, id est in protectione ipsius"). A shadow that is a bruising hail-storm is asserted against the book's own settled use of umbra.

<sub>found by 10725-u20 · chunk 0005</sub>

#### 1209B — sense-reversing-letter · **migne** · medium confidence

Printed: *Crocus est herba habens aureum florem, per quem intelligitur divina sapientia, quae non debet in aliquo esse cum timore, sed cum nardo, id est cum humilitate.*

Our English: "Saffron is an herb having a golden flower, by which is understood the divine wisdom, which ought not to be in anyone with fear, but with spikenard, that is, with humility."

Conjecture: **cum tumore for cum timore — 'divine wisdom ought not to be in anyone with SWELLING (pride), but with spikenard, that is, with humility'**

The non ... sed construction requires the thing excluded to be the opposite of humilitas, and in this very chunk that opposite is named twice as tumor/elatio, never timor: a few lines earlier 'ubera tua ... sunt pulchriora vino, id est omni mundana sapientia quae inebriat et SUPERBIRE FACIT habentes' (wisdom's proper danger is pride, not fear), and 'montes pro nimia elatione'. The same author uses tumor for pride explicitly at 1209C, 'fistula ... purgat optime TUMORES pulmonis ... quae aufert TUMORES a cordibus eorum, et faciunt seipsos viles'. As printed, the text forbids divine wisdom to be accompanied by fear, which reverses the standard doctrine the commentary elsewhere assumes and destroys the pride/humility antithesis the sentence is built on. The English reproduces the reversal literally.

<sub>found by 10725-u21 · chunk 0009</sub>

#### 1217B — sense-reversing-letter · **migne** · low confidence

Printed: *et hoc dicit *ante oculos tuos,* id est intelligentiam quam exerces ad cognitionem plenam mei*

Our English: "and this he says, *before thine eyes,* that is, the understanding which thou exercisest toward the full knowledge of me"

Conjecture: **averte oculos tuos for ante oculos tuos — the lemma-repeat, 'and this he says, TURN AWAY thine eyes'**

The lemma under exposition is 'Averte oculos tuos a me', and the commentary quotes it correctly twice within the next few lines: 'Modo, quia dixit: AVERTE OCULOS, ne ista conquereretur...' and 'Non ideo dixit ut oculos AVERTAT quod peccatum sit'. The gloss slot 'et hoc dicit X, id est ...' everywhere else in this work repeats the lemma verbatim; 'ante' turns the bridegroom's command to turn the eyes away into an assertion that the understanding is held before them. The English follows the plate.

<sub>found by 10725-u21 · chunk 0012</sub>


### 11085 PL 176 — De virginitate B. Mariae

#### 0864B — added-negative · **migne** · medium confidence

Printed: *ut in eo quod adhaeret uxori suae sacramentum sit invisibilis societatis, quae in [0864B] spiritu facienda est inter Deum et animam; in eo autem quod duo sunt in carne una, sacramentum sit invisibilis participationis quae in carne facta est inter Christum et Ecclesiam.*

Our English: "so that in this, that he cleaves to his wife, there may be a sacrament of that invisible fellowship which is to be made in [0864B] the spirit between God and the soul; but in this, that the two are in one flesh, there may be a sacrament of that invisible participation which was made in the flesh between Christ and the Church."

Conjecture: **the second invisibilis should be visibilis: 'sacramentum sit visibilis participationis quae in carne facta est inter Christum et Ecclesiam'**

The clause negates itself: the participation is called invisibilis and in the same breath 'quae IN CARNE FACTA EST' — a thing accomplished in flesh. The whole sentence is built on a two-term antithesis whose first limb is explicit: 'invisibilis societatis, quae in SPIRITU FACIENDA est inter Deum et animam' (invisible / spirit / still to be made) against 'participationis quae in CARNE FACTA est inter Christum et Ecclesiam' (flesh / already made). With invisibilis in both limbs the antithesis collapses and the qualifier 'in carne' is left contradicting its own adjective. The parallel restatement of the same doctrine in chunk 0006 at 0874D carries no 'invisibilis' at all on the flesh side: 'Commistio carnis in conjugibus sacramentum est illius participationis, quae est in carne inter Christum et Ecclesiam.'

<sub>found by 11085-u37 · chunk 0002</sub>

#### 0864D — dropped-word · **migne** · low confidence

Printed: *ut eadem carnis commistio, quae ibi inter virum et mulierem futura praedicitur, hic foedere dilectionis (quae est in spiritu) nihil prodesse demonstretur.*

Our English: "so that the same mingling of flesh which there is foretold as to come between man and woman is here shown to profit nothing without the covenant of love (which is in the spirit)."

Conjecture: **'hic SINE foedere dilectionis ... nihil prodesse demonstretur'**

Without 'sine' the plate says the mingling of flesh profits nothing BY the covenant of love — the reverse of the gloss Hugh gives in the very next sentence: 'non imperantis dissidium, sed docentis, quod SINE DILECTIONIS FOEDERE cassa sit, et virtute carens, etiamsi permaneat societas carnis.' Our English silently supplies the missing 'without' (translation-style 7a silent repair), so the printed defect is invisible to an English-only reader.

<sub>found by 11085-u37 · chunk 0003</sub>

#### 0865A — dropped-non · **migne** · medium confidence

Printed: *Nequaquam ergo ex eo pensandum est conjugii sacramentum, in quo tunc sanctificaretur, sed exerceretur conjugalis castitas; et nunc sanctificaretur conjugium, sed excipitur conjugatorum infirmitas.*

Our English: "In no way, therefore, is the sacrament of marriage to be weighed from that in which then conjugal chastity would be sanctified, but exercised; and now marriage would be sanctified, but the infirmity of the married is allowed for."

Conjecture: **'in quo tunc NON sanctificaretur, sed exerceretur conjugalis castitas; et nunc NON sanctificaretur conjugium, sed excipitur conjugatorum infirmitas' — the adversative 'sed' in each limb requires the negative it answers**

As printed, the carnal office IS what sanctifies chastity and marriage — the exact thesis Hugh has just denied in the immediately preceding sentence: 'Non ergo virtus sacramenti conjugalis in carne est, sed in mente, nec ille consensus ad sanctitatem perficiendam requiritur.' The sentence is also self-cancelling: 'sanctificaretur, SED exerceretur' and 'sanctificaretur, SED excipitur' set two positives in adversative opposition, which is not Latin; 'sed' is answering a 'non' that is no longer on the plate. The English reproduces the incoherence verbatim ('would be sanctified, but exercised').

<sub>found by 11085-u37 · chunk 0003</sub>

#### 0876C — sense-reversing-letter · **migne** · medium confidence

Printed: *Casta enim dilectio non ex tali sexu aliter afficitur, sed in tali sexu ex tali natura. Propterea quod extra talem sexum taliter affici non potest, quia extra talem sexum non invenitur talis natura.*

Our English: "For chaste love is not affected otherwise out of such a sex, but within such a sex out of such a nature. And therefore it cannot be so affected outside such a sex, because outside such a sex such a nature is not found."

Conjecture: **'non ex tali sexu TALITER afficitur, sed in tali sexu ex tali natura' — aliter for taliter**

The sentence exists to deny that the SEX is what affects love, and to assign the effect to nature; 'aliter' makes it deny instead that love is affected OTHERWISE by such a sex, i.e. it concedes the point being denied. The immediately following sentence prints the word the antithesis requires: 'extra talem sexum TALITER affici non potest' — 'taliter', not 'aliter', is the operative adverb. The same denial is stated two sentences earlier: 'amor conjugalis non propter sexum dissimilem sacramentum est, sed propter naturam differentem.'

<sub>found by 11085-u37 · chunk 0006</sub>


### 7871 PL 67 — Explicatio in Cantica canticorum

#### 0966C — reversed-predication · **ours** · medium confidence

Printed: *Sodales quippe Christi ex quadam parte haeredici appellentur, quia nativitatem, passionem, et resurrectionem ipsius profitentur; sed quia de ipsis Apostolus ait: *Habentes formam pietatis et virtutes ejus abnegantes*, *non* jam sodales, sed adversarii comprobantur.*

Our English: "For the companions of Christ may in a certain part be called heretics, because they profess his nativity, passion, and resurrection; but because concerning them the Apostle says: *Having the form of piety but denying the power thereof*, they are proved to be *no longer* companions but adversaries."

Conjecture: **'Heretics may in a certain respect be called companions (sodales) of Christ' — the English has inverted subject and predicate nominative, so the title being granted becomes 'heretics' instead of 'companions'.**

The clause the sentence ends on, 'NON JAM SODALES, sed adversarii comprobantur', can only follow if the title provisionally granted was 'sodales'; and the lemma under discussion is 'per greges sodalium tuorum: id est per congregationes haereticorum' — heretics are the ones being called Christ's companions, not the reverse. Out-of-enum defectType: a converse inversion rather than a negation.

<sub>found by 7871-u31 · chunk 0000</sub>

#### 0983B — sense-reversing-letter · **migne** · high confidence

Printed: *Omnes sancti qui suavissimum odorem ex bona conversatione dederunt, et in corruptionis integritate perdurant, Deo auctore, tantorum bonorum gratiam perceperunt.*

Our English: "All the saints who have given a most sweet odor from good manner of life, and endure in the integrity of incorruption, have received, God being the author, the grace of such great goods."

Conjecture: **incorruptionis integritate (word-division defect: incorruptionis set as in corruptionis, so the printed text says 'in the integrity of corruption')**

The lemma being glossed is 'Species ejus ut Libani, electus ut cedri' — cedar, and the same commentary at Num. 24 (col. 0969A) makes the pairing explicit: 'Tecta autem et laquearia domorum istarum cedrina et cypressina, quae INCORRUPTIBILIA et ODORIFERA dignoscuntur'. The same sentence's own first half, 'suavissimum odorem ex bona conversatione dederunt', is the other half of that odour+incorruption pair; 'integritas corruptionis' asserts the opposite of what the cedar figure requires. Our English silently repairs the plate to 'incorruption'.

<sub>found by 7871-u31 · chunk 0007</sub>

#### 0992C — dropped-non · **migne** · high confidence

Printed: *Ad quam, sub nomine Jerusalem, dicit Dominus per prophetam: *Super te et super muros tuos posui custodes tuos, tota die et nocte, usque in finem contacebunt [n: (Isai. VIII)]*.*

Our English: "To whom, under the name of Jerusalem, the Lord says through the prophet: *Upon thee and upon thy walls I have set thy keepers; all the day and night, unto the end they shall keep silence [n: (Isai. VIII)]*."

Conjecture: **non tacebunt (Isa. LXII, 6) — 'contacebunt' is a word-division/letter defect for 'non tacebunt'**

This work quotes the identical verse correctly earlier, at Num. 63, col. 0975B: 'Super muros tuos, Jerusalem, custodes constitui; tota die et nocte perpetuo NON TACEBUNT. Omnes tenentes gladios, ad bella doctissimi.' Here the immediate neighbour is 'Tradidit eam custodibus. Commisit eam regendam apostolis vel successoribus eorum episcopis' — watchmen handed the Church to guard; watchmen who 'shall keep silence unto the end' is the opposite of the point being proved. Our English renders the defective plate as printed.

<sub>found by 7871-u31 · chunk 0010</sub>

#### 0994A — dropped-non · **migne** · low confidence

Printed: *Sicque ascendens in excelsis, qui nunc appares obtutibus carnis, adesto semper oculis cordis ut te in fide retineamus quem aspectu non cernimus.*

Our English: "And thus ascending on high, thou who now appearest to the gazes of the flesh, be ever present to the eyes of the heart, that we may hold thee in faith whom we do not discern by sight."

Conjecture: **qui non appares (or non iam appares) obtutibus carnis**

The same sentence ends 'ut te in fide retineamus QUEM ASPECTU NON CERNIMUS' — we hold in faith the one we do not see; and the sentence before it is 'Qui conversatus es nobiscum in terris, pronus regredere ad superna' (the Ascension is already past). 'Now thou appearest to the gaze of the flesh' asserts the opposite of its own clause. Marked low because 'nunc' can be strained into a dramatic present at the moment of ascending.

<sub>found by 7871-u31 · chunk 0011</sub>


### 11055 PL 175 — Adnotationes in libros Regum

#### 0096D — dropped-word · **migne** · medium confidence

Printed: *Postea sequitur, *et lucerna Dei exstingueretur. Samuel [0096D] autem dormiebat in templo Domini**

Our English: "Afterward there follows, *and the lamp of God was going out. And Samuel [0096D] was sleeping in the temple of the Lord*"

Conjecture: **antequam lucerna Dei exstingueretur (Vulg. I Reg. iii, 3 'lucerna Dei antequam extingueretur'); Migne's plate has lost 'antequam' in the re-quoted lemma**

The very next clause of the same note reverses it: 'et hoc antequam lucerna Dei exstingueretur' ('and this before the lamp of God went out'), and the note then explicitly re-cites the phrase as 'Quod autem dictum est *antequam lucerna exstingueretur*'. Hugh's second explanation depends on the lamp still burning — 'lucerna lucente, nullum alium in templo praeter Heli esse videret' ('while the lamp was shining, he could see no one else in the temple except Heli'), which is impossible if the lamp was going out.

<sub>found by 11055-u36 · chunk 0001</sub>

#### 0099A — sense-reversing-letter · **migne** · high confidence

Printed: *quod Deus qui est triumphator in Israel, quia per eum Israel triumphat et vincit; sine virtutis Israel, id est dans virtutem et fortitudinem Israel; ipse non mentietur*

Our English: "that God, who is the triumpher in Israel, because through him Israel triumphs and conquers; without the strength of Israel, that is, giving strength and fortitude to Israel; he himself will not lie"

Conjecture: **sive virtus Israel — 'or the strength of Israel'; the printed 'sine' is 'sive' with n for v, and 'virtutis' follows the corrupted preposition into the genitive**

The gloss attached to the very phrase says the opposite of 'without': 'id est dans virtutem et fortitudinem Israel' ('that is, giving strength and fortitude to Israel'). The clause exists to pair the two renderings just quoted — the Latin lemma 'triumphator in Israel' and the Hebrew 'virtus Israel' — so it must be the disjunctive 'sive'. Hugh uses exactly that construction a few lines later on the same lemma, where Migne prints it correctly: 'sed ad effectum perducet verbum suum, sive non parcet quasi miseratione aliqua mutatus'.

<sub>found by 11055-u36 · chunk 0001</sub>

#### 0099B — sense-reversing-letter · **migne** · high confidence

Printed: **Nam coram Domino est Christus ejus?* Id est nunquid iste qui tibi nunc praesentatus est, et coram adductus, provisus est a te, ut sit Christus tuus?*

Our English: "*For before the Lord is his Christ?* That is: is this man who has now been presented to you and brought before you provided by you, that he should be your Christ?"

Conjecture: **Num coram Domino est christus ejus? (Vulg. I Reg. xvi, 6); Migne's 'Nam' is 'Num' with a for u**

Hugh's own gloss on the lemma renders it as a question expecting the answer 'no': 'Id est nunquid iste ... provisus est a te, ut sit Christus tuus?' — 'nunquid' is precisely the equivalent of 'num', and Migne himself prints the lemma with a question mark. 'Nam' ('for') turns Samuel's doubting question into a flat assertion that this man IS the Lord's anointed, which the whole note then goes on to deny (the note concludes 'et verum est, quod de reliquis nullum elegit Dominus'). Our English preserved the defect, producing 'For before the Lord is his Christ?' — an assertion punctuated as a question.

<sub>found by 11055-u36 · chunk 0001</sub>


### 7017 PL 17 — Philosophorum aliquot epistolae

#### 1148B — added-negative · **ours** · low confidence

Printed: *partim te reprehendens, quod omnia formides, nihilque non metuas*

Our English: "partly reproaching you because you dread everything and fear nothing not"

Conjecture: **'nihilque non metuas' = 'and there is nothing you do not fear'. The English strands the negative after the verb ('fear nothing not'), so it reads as 'fear nothing' with a stray particle — the opposite of the Latin's emphatic universal fear. Should read 'and there is nothing you do not fear'.**

Its own immediate neighbour in the same clause is 'quod omnia formides' / 'you dread everything'; the English as printed pairs 'dread everything' with 'fear nothing' in one breath. The letter's argument depends on Periander fearing all: 'Esset ergo optimum abstinere tyrannide, ut causas omnis metus evaderes' ('that you might escape all causes of fear').

<sub>found by 7017-u73 · chunk 0000</sub>

#### 1150B — dropped-word · **ours** · low confidence

Printed: *tu autem sponte filio ingrato si quid egeris, peccas*

Our English: "but you, if of your own accord you do anything against my son who is guiltless, do wrong"

Conjecture: **'filio ingrato' = the son who is UNGRATEFUL (or, as dative of disadvantage, 'anything unwelcome to my son'). 'Guiltless' reverses the son's moral standing.**

The closing clause of the same short letter, 'nam et ipse satis diu poenas dedit' / 'for he too has paid the penalty long enough', presupposes that the son had something to pay for; a son already declared 'guiltless' has no penalty owing, and the 'et ipse' ('he too', alongside Periander himself) loses its force.

<sub>found by 7017-u73 · chunk 0000</sub>

#### 1152B — dropped-non · **migne** · high confidence

Printed: *Equidem nisi senectus mihi obsisteret, sum enim octogenarius, corpusque praeterea invalidum, ipse ad te venirem, ut jubes. Quia vero id datur, quosdam ex conturbernalibus meis ad te mitto*

Our English: "For my part, were old age not against me — for I am an octogenarian, and my body besides is weak — I would myself come to you, as you bid. But because this is not granted, I send to you certain of my companions"

Conjecture: **Quia vero id NON datur (or Quia vero id non licet) — a 'non' has dropped out of Migne's plate; our English silently supplies it ('is not granted').**

The immediately preceding clause is a contrary-to-fact conditional: 'nisi senectus mihi obsisteret ... ipse ad te venirem' — i.e. old age DOES stand in his way, so he does NOT come. 'Quia vero id datur' ('but since that IS granted') would make the very next clause, 'quosdam ex contubernalibus meis ad te mitto' (I send companions INSTEAD of coming), a non sequitur: if coming were granted he would have no reason to send substitutes. Zeno's whole letter is a polite refusal of Antigonus's summons.

<sub>found by 7017-u73 · chunk 0001</sub>


### 7561 PL 50 — Commonitoria

#### 0645 — sense-reversing-letter · **migne** · medium confidence

Printed: *Cùm ergo undique ad novitatem rei cuncti reclamarent, atque omnes quaquaversum sacerdotes pro suo quisque studio retinerentur, tunc beatae memoriae Papa Stephanus apostolicae Sedis antistes ... restitit*

Our English: "When, therefore, all cried out on every side against the novelty of the thing, and all the priests everywhere held back, each according to his own zeal, then Stephen of blessed memory, Pope, prelate of the Apostolic See ... resisted"

Conjecture: **reniterentur ('strove against it', 'pushed back') for retinerentur; the passive 'were held back' inverts an active universal resistance into passivity.**

Its own immediate neighbour in the same sentence says the exact opposite: 'undique ad novitatem rei cuncti reclamarent' — 'all cried out on every side against the novelty of the thing' — and the sentence closes with Stephen who 'cum caeteris quidem collegis suis, sed tamen prae caeteris restitit' (resisted 'together with his colleagues, but more than the rest'), which presupposes that the other priests were themselves resisting, not being held back. 'pro suo quisque studio' ('each according to his own zeal') is also incoherent with passive restraint: zeal drives the striving, not the holding back. Our English followed the printed defect rather than repairing it.

<sub>found by 7561-u28 · chunk 0001</sub>

#### 0648 — dropped-non · **migne** · high confidence

Printed: *Magno [0648] igitur metu nobis immutatae fidei ac temeratae religionis piaculum pertimescendum est; a quo nos solum constitutionis Ecclesiasticae disciplina, sed etiam censura Apostolicae deterret auctoritatis.*

Our English: "With great [0648] fear, therefore, must the guilt of a changed faith and a violated religion be dreaded by us; from which only the discipline of ecclesiastical ordinance, but also the censure of apostolic authority deters us."

Conjecture: **a quo nos NON solum constitutionis Ecclesiasticae disciplina, sed etiam censura Apostolicae deterret auctoritatis — 'from which not only the discipline of ecclesiastical ordinance, but also the censure of apostolic authority deters us.'**

The correlative 'sed etiam' in the same clause requires 'non solum' as its first member: 'sed etiam censura Apostolicae deterret auctoritatis.' As printed, 'solum ... sed etiam' asserts that ecclesiastical discipline ALONE deters us and then immediately adds a second deterrent, contradicting itself inside one sentence. The whole following section (the 'censura Apostolicae auctoritatis' — 'Scitum enim cunctis est quam graviter, quam severe, quam vehementer invehatur in quosdam beatus Apostolus Paulus') exists precisely to develop that second member, so the sentence cannot mean 'only the discipline.' Our English reproduced the defect literally ('from which only the discipline ... but also the censure ... deters us') rather than repairing it, so the defect is Migne's.

<sub>found by 7561-u28 · chunk 0002</sub>

#### 0675 — sense-reversing-letter · **migne** · medium confidence

Printed: *Caeterum dilatatae et inveteratae haereses nequaquam hac via adgrediendae sunt, eo quod prolixo temporum tractu longa iis fruendae veritatis patuerit occasio.*

Our English: "But heresies now widespread and grown old are by no means to be attacked in this way, because through the long lapse of the times a long occasion of assailing the truth has lain open to them."

Conjecture: **furandae ("of stealing/falsifying the truth") for printed fruendae ("of enjoying the truth") — a single-letter transposition that reverses the clause from an accusation into a concession.**

The reason clause has to explain why the patristic-consensus method fails against OLD heresies, and the immediately preceding sentence supplies it: new heresies must be attacked at once, 'ante quam infalsare vetustae fidei regulas ipsius temporis vetantur angustiis, ac priusquam manante latius veneno, majorum volumina vitiare conentur' — before the shortness of time stops them falsifying the rules of the ancient faith and before they can corrupt the volumes of the elders. Old heresies are exempt from that method precisely because they HAVE had long occasion to falsify/steal the truth; 'a long occasion of ENJOYING the truth' would make time an advantage to truth and would give no reason at all for the exemption, and the very next sentence ('nullo modo nos oportet nisi aut sola ... Scripturarum auctoritate convincere') presupposes the fathers' texts are no longer safe evidence against them. Our English silently repairs the defect — it renders 'fruendae' as 'assailing the truth', i.e. it translates the conjectured furandae and not the printed word, so the reversal is invisible to an English-only reader.

<sub>found by 7561-u29 · chunk 0011</sub>


### 10379 PL 150 — Commentaria in Cantica canticorum

#### 1362B — sense-reversing-letter · **migne** · medium confidence

Printed: *Vix igitur nunc mitto, quem a nomine videri vellem, si omnibus abscondere possem.*

Our English: "Scarcely, then, do I now send it, whose authorship I would wish to hide from all, if I could."

Conjecture: **a nemine videri vellem ("which I would wish to be seen by no one"); Migne's nomine for nemine turns the wish inside out**

The apodosis in the same sentence is *si omnibus abscondere possem* — 'if I could hide it from all' — which only follows from a wish to be seen by NO ONE. As printed, 'quem a nomine videri vellem' makes him wish the book seen (from/by the name), the opposite of the condition he attaches to it, and of the whole self-deprecating paragraph that follows (*Quem enim rudis et impolitus artifex fecerit annulum, ab aliis videri formidat*, 'is afraid to have it seen by others'). Our English silently repairs by inverting the verb to 'would wish to hide' and glossing nomine as 'authorship', so the printed defect leaves no trace in the translation.

<sub>found by 10379-u49 · chunk 0000</sub>

#### 1364B — dropped-word · **migne** · medium confidence

Printed: *In Cantica canticorum, nec filius David, nec rex Israel, sive Hierusalem praescribitur, quia ad incipientes et paterna dignitas et regni proprium nomen sufficit: et aequalis magister est, et nescit se esse regem.*

Our English: "In the Song of Songs, neither son of David, nor king of Israel or of Jerusalem is prefixed, because for beginners both his father's dignity and the proper title of kingship suffice; and here he is an equal master, and does not know himself to be a king."

Conjecture: **A clause has fallen out by homoeoteleuton after *sufficit*, e.g. *ubi vero ad perfectum venitur* (Jerome's contrast). The stated reason belongs to the books where the titles ARE prefixed, not to the one where they are not.**

The two immediately preceding sentences give exactly the opposite distribution: *Titulus enim in Proverbiis adnotatur: Proverbia Salomonis, filii David, regis Israel. In Ecclesiaste vero: Verba Ecclesiastis, filii David, regis Hierusalem.* Proverbs and Ecclesiastes are the beginners' books (*In Proverbiis parvulam docens*), and they DO carry the titles. So 'the titles are not prefixed in Canticles BECAUSE for beginners they suffice' asserts the reverse of what the passage has just established; the sequel *et aequalis magister est, et nescit se esse regem* is left with no subject-clause of its own. Our English reproduces the defect faithfully and only smooths it with an inserted 'and here'.

<sub>found by 10379-u49 · chunk 0000</sub>


### 11031 PL 173 — Epistolae

#### 1141D — sense-reversing-letter · **migne** · low confidence

Printed: *Per vos Romani imperii dignitas reparatur, sublimatur, et in antiquum consulum Pompeii, Scipionis, Julii, Octaviani atque [1142A] Trajani dominationis vix attollitur statum.*

Our English: "Through you the dignity of the Roman empire is repaired, is lifted up, and is barely raised again to the ancient state of the dominion of the consuls — of Pompey, Scipio, Julius, Octavian, and Trajan."

Conjecture: ***vix* is intrusive or corrupt for an affirmative (e.g. *jam* / *denuo*, or simply *attollitur statum* without it)**

The two verbs immediately preceding in the same clause chain are unqualified praise — *dignitas reparatur, sublimatur* ("is repaired, is lifted up") — and the whole paragraph is panegyric on Conrad's election (*de recenti vestra electione vetera Romano imperio renovat gaudia*; *Per vos quippe aeternae urbis decus honorque ad solis ortum usque protenditur, dilatatur*). To say in the third member that the empire is *scarcely* raised to its ancient state retracts the two members before it. Flagged low because *vix* can bear a "only just / at last" force that is not fatal to the sentence.

<sub>found by 11031-u51 · chunk 0002</sub>

#### 1144A — sense-reversing-letter · **migne** · medium confidence

Printed: *utriusque substantiae hostibus separatis, cum palma certaminis ad se revertentibus, coelestis vitae vobis januas aperiat*

Our English: "and, when the enemies of both substances have been separated off, may he open to you the doors of the heavenly life as you return to him with the palm of the contest"

Conjecture: **read *superatis* for *separatis* — "the enemies of both substances having been overcome"**

The clause it governs is a victory clause: *cum palma certaminis ad se revertentibus* ("as you return to him with the palm of the contest") — a palm is awarded for conquering an enemy, not for being parted from one. The letter's own salutation states the same wish in unambiguous terms: *ejus victrici dextera de spiritualibus ac corporalibus hostibus perpetuo triumphare* ("may triumph perpetually by his conquering right hand over enemies both spiritual and bodily"), which is exactly *utriusque substantiae hostibus* (spiritual + bodily = both substances). Migne's *separatis* substitutes mere separation for the conquest the sentence and its frame both require; our English reproduces the defect faithfully rather than repairing it.

<sub>found by 11031-u51 · chunk 0002</sub>


### 11061 PL 175 — De scripturis et scriptoribus sacris

#### 0015A — sense-reversing-letter · **migne** · high confidence

Printed: *Lege ergo Scripturam, et disce primum diligenter quae corporaliter narrat. Si enim formam horum secundum seriem narrationis propositae studiose animo impresseris, quasi ex favo quodam postmodum meditando spiritualis intelligentiae dulcedinem fuges.*

Our English: "Read, therefore, the Scripture, and learn first diligently the things which it narrates bodily. For if you have zealously impressed upon your mind the form of these things according to the order of the narrative set forth, then afterwards, by meditating, you will drive away, as from a certain honeycomb, the sweetness of spiritual understanding."

Conjecture: **fuges is a corruption of sugas (Didascalicon VI.3: 'quasi ex favo quodam postmodum meditando spiritualis intelligentiae dulcedinem exsugas'): 'you may SUCK OUT the sweetness of spiritual understanding, as from a honeycomb.'**

The clause is the reward-clause of the whole chapter's exhortation, and its own image is a honeycomb — a thing one draws sweetness OUT of, not drives sweetness away from. The immediately preceding sentences promise gain, not loss: 'Lege ergo Scripturam, et disce primum diligenter quae corporaliter narrat' and, just above, 'Primum igitur illarum rerum quas tibi sacrum eloquium proponit, ad mysticam significationem stude legendo comparare notitiam, ut ex iis specie cognitis, postmodum meditando colligas' — meditation COLLECTS. A promise that diligent literal study will make you drive the sweetness of spiritual understanding away is the exact opposite of the argument against the self-styled allegory-teachers that the chapter is prosecuting.

<sub>found by 11061-u38 · chunk 0001</sub>

#### 0025A — sense-reversing-letter · **migne** · medium confidence

Printed: *Quemadmodum hoc quod in libro Judith legitur, Arfaxat rex Judaeorum multas gentes suo imperio subjugasse, ac contra Nabuchodonosor regem Assyriorum pugnasse*

Our English: "Such as this which is read in the book of Judith: that Arphaxad king of the Jews subjugated many nations to his rule, and fought against Nabuchodonosor king of the Assyrians"

Conjecture: **Judaeorum for Medorum (Judith 1:1, 'Arphaxad itaque rex Medorum'); the English follows the plate and so repeats the reversal.**

Within the same sentence the Jews are the besieged subject people, not an empire subjugating many nations: 'Judaeos rebellare conantes in Bethulia obsedit, atque, Achior principe filiorum Amon narrante, didicit ipsum esse populum qui, nuper a captivitate reversus, eadem montana possedit.' A people that has only just come back from captivity and holds a few hill-towns cannot at the same moment be the power that 'multas gentes suo imperio subjugavit' and takes the field against Assyria; and the chronological puzzle Hugh then poses ('quo tempore haec gesta sint, vel quis fuerit Nabuchodonosor iste') turns entirely on the return from captivity, which presupposes the Jews as the subject party.

<sub>found by 11061-u38 · chunk 0005</sub>


### 11062 PL 175 — Explanatio in Canticum B. Mariae

#### 0424B — added-negative · **migne** · high confidence

Printed: *Illis mundus crucifixus est, et ipsi mundo, quia per humilitatem mundum contemnunt, et per humiliationem a mundo contemnuntur. Istis vero mundus quidem crucifixus non est; ipsi tamen mundo sunt crucifixi, quia gloriam humanam, quam foris non quaesitam accipiunt, intus per virtutem humilitatis oblatam contemnunt.*

Our English: "To these the world is crucified, and they to the world, because through humility they despise the world, and through humiliation they are despised by the world. But to these others the world indeed is not crucified; yet they themselves are crucified to the world, because the human glory which they receive outwardly unsought, they inwardly despise, offered through the virtue of humility."

Conjecture: **The negation has migrated to the wrong limb of the Pauline pair (Gal. VI, 14). Read: 'Istis vero mundus quidem crucifixus est; ipsi tamen mundo non sunt crucifixi.'**

Hugh has just defined the second class as those 'qui licet coram hominibus foris despicabiles non appareant, intus tamen humilitatis meritum coram Deo inviolatum conservant' — they are precisely NOT despised by the world, so they cannot be the ones 'mundo crucifixi.' And the causal clause the sentence itself supplies proves the other half: 'quia gloriam humanam ... intus per virtutem humilitatis oblatam contemnunt' — they despise the world's glory, which in the immediately preceding sentence is exactly what makes the world crucified to a man ('per humilitatem mundum contemnunt' = 'mundus crucifixus est'). The printed text therefore denies the one thing its own quia-clause establishes and asserts the one thing the preceding definition excludes.

<sub>found by 11062-u39 · chunk 0003</sub>

#### 0429D — sense-reversing-letter · **migne** · low confidence

Printed: *et gentes peccata sua humiliter confidentes, Deique justitiam praeferentes assumpsit.*

Our English: "and he took up the Gentiles, who humbly confessing their sins and preferring the justice of God."

Conjecture: **confidentes for confitentes ('humbly confessing their sins'); the English silently renders the emended word, and its broken syntax betrays the repair.**

The clause is the antithesis of the Jews in the same sentence, 'qui ... in sua justitia praesumebant' and 'humilem Christi adventum superbe contempserunt.' To be 'confident in one's sins' is presumption, the very posture for which the Jews are here cast off; the contrasting term must be confession, as 'humiliter' and 'Deique justitiam praeferentes' both require.

<sub>found by 11062-u39 · chunk 0005</sub>


### 11081 PL 176 — De sacramentis legis naturalis et scriptae

#### 0027A — dropped-non · **migne** · medium confidence

Printed: *Itaque prudentia carnis tam labor quam oblectamentum et exercitatio futura foret si homo justitiam tenuisset.*

Our English: "And so the prudence of the flesh would have been labor as well as delight and exercise, if man had kept justice."

Conjecture: **Itaque providentia carnis NON TAM labor quam oblectamentum et exercitatio futura foret — 'the care of the flesh would have been not so much a labor as a delight and an exercise'.**

The immediately preceding sentence excludes labor by name: 'Rursum ne vel in illis quaerendis LABOR esset, vel in sumendis periculum, indigentiam simul et appetitum carnalem certa mensura temperavit; quatenus ei ad fomentum et pauca sufficere possent' ('Again, lest either there should be labor in seeking those things, or peril in taking them, he tempered by a fixed measure both the need and the carnal appetite'). God's tempering was precisely so that provisioning the body would NOT be labor; the printed 'tam labor quam oblectamentum' asserts the opposite of the clause it is drawn from. The whole point of the paragraph is that toil in feeding the body arrived only as the penalty of sin ('idcirco meruit ut jam subtus per infinitos labores dissipatus'), i.e. exactly when man did NOT keep justice.

<sub>found by 11081-u35 · chunk 0002</sub>

#### 0039D — added-negative · **migne** · high confidence

Printed: *D. Quare de non faciendis unum tantum praeceptum datum est, et de faciendis plura?*

Our English: "D. Why was one precept only given concerning things not to be done, and more concerning things to be done?"

Conjecture: **Quare de faciendis unum tantum praeceptum datum est, et de non faciendis plura? — the 'non' belongs on the second member, not the first.**

The sentence immediately before it has just counted them the other way: 'Primum erat: Honora patrem tuum et matrem tuam ... secundum: Non occides; tertium: Non maechaberis ... Primum secundum praeceptionem factum est; SEX ALIA secundum prohibitionem' — one positive precept (things to be done), six prohibitions (things not to be done). The Master's answer then confirms the same distribution: 'ideo in malis cavendis ... SINGULATIM instruendus erat, ad bona vero agenda ad obedientiam SOLUMMODO revocandus' ('therefore in guarding against evils he had to be instructed one by one, but for doing good things he had only to be recalled to obedience'). As printed the question asks the reverse of both its neighbours.

<sub>found by 11081-u35 · chunk 0008</sub>


### 11083 PL 176 — De sapientia animae Christi

#### 0846C — dropped-non · **migne** · medium confidence

Printed: *Nunquid nomina est veritas? Ecce (ut interim de Deo taceamus) quid est quod dialectica tot diversas et tam adversas, ne dicam perversas habet sententias? Nunquid omnes noverunt unum id quod est, sed amore fallendi diversa finxerunt?*

Our English: "Is truth a matter of names? Behold (that we may for the moment be silent about God), what is it that dialectic holds so many differing and so opposed — not to say perverse — opinions? Have they all known the one thing that is, but out of a love of deceiving invented differing accounts?"

Conjecture: **Nunquid non una est veritas? — the plate's `nomina` is a word-division/haplography of `non una`; as printed, plural `nomina` with singular `est` is ungrammatical, which is the giveaway that the reading is corrupt.**

The clause is the hinge of Hugh's argument that diversity of opinion comes from us, not from truth: the immediately preceding sentence asks 'quid est quod de rerum veritate tam diversa sentire solent homines?' and the immediately following one asks 'Nunquid omnes noverunt UNUM ID QUOD EST, sed amore fallendi diversa finxerunt?' — i.e. the unity of the thing known against the multiplicity of opinions. 'Is truth one?' is what both neighbours require; 'Is truth names?' introduces a nominalist question the passage never raises again. Our English smoothed the broken Latin into a plausible-sounding question rather than flagging it.

<sub>found by 11083-u42 · chunk 0000</sub>

#### 0855A — dropped-word · **migne** · medium confidence

Printed: *Sed haec determinatio, quamvis non omnino refutanda videatur, est tamen multo competentior et commodior expositio ad quam sententia haec accommodari possit.*

Our English: "But this determination, although it does not seem wholly to be rejected, is nevertheless far less suitable than the more convenient exposition to which this opinion may be fitted."

Conjecture: **est tamen ALIA multo competentior et commodior expositio ad quam sententia haec accommodari possit — 'yet there is ANOTHER far more fitting and convenient exposition to which this opinion can be accommodated.' The plate as printed makes 'haec determinatio' itself the more fitting exposition, i.e. the opposite of what Hugh goes on to do.**

Two neighbours contradict the printed reading. (1) The concessive immediately before it — 'quamvis non omnino refutanda videatur' ('although it does not seem wholly to be rejected') — is a demurral, and is pointless if Hugh is about to call the same determination much more fitting. (2) The sentence immediately after it drops the correspondent's determination and substitutes Hugh's own: 'Anima namque Christi idcirco omnia habere dicitur per gratiam, quae Deus habet per naturam, quia plenitudo deitatis in Verbo ei unita est...' — the alternative exposition the missing 'alia' announces. Our English is a silent repair (translation-style 7a): it recovers the true sense by reversing the comparative onto 'haec determinatio' ('far less suitable than the more convenient exposition'), so the printed defect leaves no trace for the reader.

<sub>found by 11083-u42 · chunk 0003</sub>


### 11086 PL 176 — Epistolae

#### 1013B — added-negative · **migne** · medium confidence

Printed: *Cum autem causa Dei exigit, non solum relinqui sed recte etiam odio haberi potest, ut in eo propter Deum odiatur, quod contra Deum non diligitur.*

Our English: "But when God's cause requires, she can not only be left but even rightly held in hatred, so that in her that be hated for God's sake which is not loved against God."

Conjecture: **quod contra Deum diligitur — "so that in her that be hated for God's sake which is loved against God"; the intrusive non destroys the odiatur propter Deum / diligitur contra Deum antithesis and removes the stated ground for the hatred.**

The clause is given as the reason the wife may 'recte etiam odio haberi' — but as printed it says the thing hated is the thing NOT loved against God, i.e. it supplies no ground for hatred at all and inverts the antithesis the sentence is built on. The whole preceding stretch turns on the propter Deum / secundum Deum / contra Deum triad: 'Recte igitur relinquit propter Deum, qui relinquere potest secundum Deum. Quandiu autem secundum Deum relinquere non potest, propter Deum relinquere non potest.' The only thing that can rightly be hated for God's sake is what is loved against him.

<sub>found by 11086-u75 · chunk 0000</sub>

#### 1016A — dropped-word · **ours** · medium confidence

Printed: *Servi Dei nostri signati sunt in frontibus suis, et non possunt [1016A] exterminii sententiam evadere, nisi solum ii qui in figura Tau crucis Christi signaculo muniuntur.*

Our English: "The servants of our God are sealed in their foreheads, and they cannot [1016A] escape the sentence of extermination, save only those who in the figure of the Tau are fortified with the seal of the cross of Christ."

Conjecture: **The subject of 'non possunt' is general, not 'servi Dei nostri': "...and none can escape the sentence of extermination, save only those who in the figure of the Tau are fortified with the seal of the cross of Christ." The English pronoun 'they' silently binds the negation to the sealed, reversing the claim.**

As rendered, the sealed servants of God are the ones who cannot escape — yet the same sentence's own exception clause says the escapers are precisely 'those who ... are fortified with the seal of the cross of Christ'. The immediately preceding sentences set the terms the other way: 'if you are a Christian, where is the sign of your King? I see an alien mark upon your forehead. Do you know what shall be over those who bear the mark of the beast?' — the seal saves, the alien mark condemns (Ezech. IX / Apoc. VII).

<sub>found by 11086-u75 · chunk 0001</sub>


### 11321 PL 184 — Commentatio in Cantica canticorum ex Bernardo contexta

#### 0418C — dropped-non · **migne** · medium confidence

Printed: *Effusio quippe notat abundantiam. Haec est effusio in fide vel spe, sed in charitatis tantum plenitudine.*

Our English: "For the pouring out denotes abundance. This is the pouring out in faith or in hope, but only in the fullness of charity."

Conjecture: **Non est effusio in fide vel spe, sed in charitatis tantum plenitudine (or Nec est effusio…) — 'there is no pouring out in faith or in hope, but only in the fullness of charity'**

The sentence's own second half, 'sed in charitatis TANTUM plenitudine' ('but ONLY in the fullness of charity'), is an exclusive correction and requires a negated first limb; as printed the clause first locates the effusio in faith and hope and then denies it of anything but charity. The surrounding argument says the same: the effusio is what charity alone supplies — 'ex abundantia olei accepti a Deo' and, a few lines later, 'Quae enim per fidem primum adolescentula est, vel pedisequa, incipit sponsa esse cum incipit diligere' (faith gives only the maiden; love makes the bride). Our English reproduces the defective Latin verbatim, so the printed and the rendered sentence are equally incoherent.

<sub>found by 11321-u30 · chunk 0004</sub>

#### 0435A — dropped-word · **migne** · low confidence

Printed: *Cumque charitate ordinata sibi et Deo vacaret, filiosque negligeret, actumque Dei actui eorum praeponeret; facta est fames verbi Dei: parvuli petierunt panem, nec erat qui porrigeret eis.*

Our English: "And when, charity being set in order, she was free for herself and for God, and neglected the sons, and preferred the act of God to their act, there arose a famine of the word of God: the little ones asked for bread, and there was none to reach it to them."

Conjecture: **Cumque charitate INORDINATA sibi et Deo vacaret…**

The state described is the bride's fault, not her good order: the same paragraph says 'Mater vero quia NON VOLEBAT labore bonorum studiorum et actuum agere, putans se acturam sola oratione', it produces a famine of the word and the devil's return, God rebukes her ('Non enim, ut dicis, parum habes olei, quae in tempore famis non solum pascendam te, sed ungendam praesumis'), and the cure is 'Audiens haec sponsa, charitatem REORDINAVIT' — which presupposes charity had become disordered. Chunk 0010 supplies the rule broken here: 'Necessitas charitatis saepe omnia his contraria… Necessitas non habet legem.' A defensible reading survives (she kept the LEX of charity while failing its NECESSITAS), hence low confidence.

<sub>found by 11321-u30 · chunk 0011</sub>


### 11648 PL 204 — Annales

#### 0992A — dropped-non · **migne** · low confidence

Printed: *quid postquam conse *cratus est man* datis Innocencii *pape im* perans excommunicatus . . . . . . dis depositus *est reg* ia dignitate*

Our English: "what after he *was consecrated*, ruling by the man*dates of Pope* Innocent, excommunicated . . . . . . dis, he *was deposed* from the roy*al* dignity"

Conjecture: **the plate has lost a negative or a verb of defiance governing 'mandatis' — e.g. 'mandatis Innocentii papae [non parens]' / '[contemnens]'; the English then had to render the surviving 'imperans' as compliance ('ruling by the mandates')**

The same sentence goes on 'excommunicatus . . . depositus *est reg* ia dignitate' — Otto is excommunicated and deposed by Innocent in the very next clause. A man who governs *by* Innocent's mandates is not excommunicated and deposed by Innocent; the clause must originally have said he defied them.

<sub>found by 11648-u58 · chunk 0000</sub>

#### 0992C — dropped-word · **migne** · low confidence

Printed: *Gregorius papa Fredericum imperatorem monuit, ut cum exercitu suo, qui jam pridem cruce signatus erat, ad exterminandos fidei christiane inimicos Jerosolimis proficisceretur.*

Our English: "Pope Gregory admonished the emperor Frederick that he should set out for Jerusalem with his army, which had long since been signed with the cross, to destroy the enemies of the Christian faith."

Conjecture: **'Gregorius' stands where the annal requires 'Honorius' — the reigning pope in 1224, and the pope who in fact pressed Frederick II on the crusade vow**

The annal is entered under 1224, but the annalist's own next entry, at 1226, reads 'Obiit Honorius IX, papa; succedit Gregorius' ('Honorius IX, pope, died; Gregory succeeds'). By the text's own reckoning Gregory is not yet pope in 1224 and cannot be admonishing the emperor as such.

<sub>found by 11648-u58 · chunk 0001</sub>


### 21413 PL 100 — In Cantica canticorum

#### 0666B — sense-reversing-letter · **migne** · medium confidence

Printed: *Hi sua in perfectione [ F., imperfectione] octogenario numero comparantur: illi perfecta beatitudine sexagenario designantur*

Our English: "These, in their perfection [ F., imperfectione], are compared to the number eighty: those, by perfect blessedness, are signified by sixty"

Conjecture: **sua imperfectione (word-division defect: imperfectione set as in perfectione)**

The immediately preceding paragraph has just proved eighty deficient: 'Poteris et per te ipsum, juxta eamdem regulam, octogenarii explorare diminutionem... quae simul ducta septuaginta faciunt non octoginta' — 'explore the deficiency of eighty... make seventy, not eighty.' And the men so numbered are the ones who 'terrena sequentes commoda... terreni lucri gratia desudant in docendo.' The eighty is the imperfect number and these are the defective teachers; 'in their perfection' asserts the reverse, and also destroys the antithesis with 'illi perfecta beatitudine sexagenario' in the same clause. Migne's own F. apparatus reads imperfectione; the printed lemma and our English both carry the reversed sense.

<sub>found by 21413-u34 · chunk 0009</sub>

#### 0666C — sense-reversing-letter · **migne** · medium confidence

Printed: *illi perfecta beatitudine sexagenario designantur, ut reginarum nomine digni efficiantur, quia spiritualem sobolem propter amorem solummodo Sponsi... generare non desistunt. Illi vero concubinarum nomine denotantur, quia saeculi ambitione, vel temporalis honoris gratia, praedicando seu baptizando nobiles quidem generant saepe filios*

Our English: "those, by perfect blessedness, are signified by sixty, so that they are made worthy of the name of queens... The former, however, are denoted by the name of concubines, because, through worldly ambition or for the sake of temporal honor..."

Conjecture: **Hi vero concubinarum nomine denotantur**

The contradicting neighbour is the immediately preceding clause about the very same 'illi': 'ut reginarum nomine digni efficiantur' — 'so that they are made worthy of the name of queens.' The printed text then makes those same 'illi' the ones 'denoted by the name of concubines.' The pronoun must switch back to the 'Hi' of the octogenary group ('Hi sua in[im]perfectione octogenario numero comparantur'), who teach 'saeculi ambitione, vel temporalis honoris gratia.' Note that our English silently repairs the defect by rendering the second Illi as 'The former' (i.e. the eighty), which yields the right sense but does not match the printed Illi.

<sub>found by 21413-u34 · chunk 0009</sub>


### 7383 PL 40 — Expositio cantici Magnificat

#### 1140 — added-negative · **migne** · low confidence

Printed: *Omne quod praevidit se facturum, facit; nec aliquid quod non praevidit fieri non dubium, sed fieri necesse est.*

Our English: "Everything which he foresaw that he would do, he does; nor is there anything which he did not foresee to come about — it is not doubtful, but it is necessary that it come about."

Conjecture: **nec aliquid quod praevidit fieri, non dubium, sed fieri necesse est — the intrusive *non* before *praevidit* (with the second *non* attaching to *dubium*) turns the standard point about foreknowledge and necessity into the claim that what God did NOT foresee must necessarily happen**

The same work has just laid down the opposite of divine non-foresight: *Videre Deo per cognitionem, est nihil eorum quae sunt ignorare* ("for God, to see through knowledge is to be ignorant of none of the things that are"), quoting *Omnia nuda et aperta sunt oculis ejus.* The immediately preceding clause here is likewise *Omne quod praevidit se facturum, facit.* As printed the sentence necessitates the occurrence of what God did not foresee, which nothing in the surrounding exposition allows; the English preserves the break with a dash rather than repairing it.

<sub>found by 7383-u79 · chunk 0000</sub>

#### 1142 — sense-reversing-letter · **migne** · medium confidence

Printed: **Suscepit,* sicut medicus aegrotum, *Israel puerum suum:* id est, humilem et innocentem suscepit, ut sanaret infirmum, et redimeret captivum; ut justificaret impium, et salvaret justum.*

Our English: "*He has received,* as a physician the sick man, *Israel his servant:* that is, he received the humble and innocent, that he might heal the sick, and redeem the captive; that he might justify the ungodly, and save the righteous."

Conjecture: **salvaret injustum (or perditum) — the printed justum has lost the privative; every other member of the series names the defective party (infirmum, captivum, impium)**

The sentence's own opening simile forbids it: *Suscepit, sicut medicus aegrotum* — a physician takes up the sick, not the sound; and the next clause states outright that Christ does not find his object already in the saved condition, *Suscepit Israel, non quem invenit Israel, sed ut faceret Israel* ("not whom he found as Israel, but that he might make him Israel"). To "save the righteous" is exactly what this pair of neighbours denies.

<sub>found by 7383-u79 · chunk 0001</sub>


### 9604 PL 138 — De prandio monachorum

#### 1345B — sense-reversing-letter · **migne** · medium confidence

Printed: *et dicit sacerdos orationem talem vocem, ut cuncti audiantur, et respondeant*

Our English: "and the priest says the prayer in such a voice that all may be heard, and may answer"

Conjecture: **ut cuncti audiant, et respondeant**

The same formula recurs twice in this work in the active: a few lines later, 'tali voce signatur, ut universi audiant, et respondent' ('the blessing is made in such a voice that all may hear, and they answer'), and again at 1346B 'Et dicit senior orationem, sic tamen, ut cuncti audiant, et respondeant' ('the senior says the prayer, yet in such wise that all may hear, and answer'). The point of raising the voice is that the community HEARS the celebrant, so it can answer amen; the passive 'audiantur' inverts this to the community being heard, which is not something the priest's voice could accomplish and which leaves 'et respondeant' without a cue. The English has followed the defective plate rather than the two parallels.

<sub>found by 9604-u66 · chunk 0000</sub>

#### 1347D — sense-reversing-letter · **ours** · low confidence

Printed: *quos scimus de sca sede Romana a beato Petro apostolum successoribus suis directos in terra ista occidentali*

Our English: "whom we know to have been directed from the holy Roman see, by blessed Peter the apostle, to his successors, into this western land"

Conjecture: **a beati Petri apostoli successoribus suis directos — 'directed by the successors of blessed Peter the apostle into this western land'**

The English makes 'successoribus suis' the recipients of the mission, so the western saints are sent 'to his successors' and simultaneously 'into this western land' — but the successors of Peter are at Rome, not in the West, and the passage's own next clause says these same men had to travel there: 'sciamus, frequenter eos Romam ambulasse, et apud beatos Papatus... colloquium habuisse' ('we know [them] to have walked often to Rome, and to have held conference with the blessed popes'). The whole argument is that the Roman see is the SENDER whose authority these Gallic saints never left ('qui in nullo a sca sede Romana... deviarint'); rendering the successors as the destination reverses the direction of mission on which the argument rests. Migne's 'apostolum' for 'apostoli' is what invites the reversal.

<sub>found by 9604-u66 · chunk 0001</sub>


### 9741 PL 139 — Canones

#### 0490A — dropped-non · **migne** · medium confidence

Printed: *Item in Legibus cap. 404: « Si quis mala fide res alienas possidens vendiderit eas, vel donaverit, vel alio modo alienaverit, is autem qui se dominum earum putat, sciens hoc, testatione denuntiaverit ei qui res cepit intra decennium inter praesentes, vel inter absentes intra vicennium; res firmiter apud emptorem, vel qui donationem excepit, vel alio modo alienationes nactus est, permaneant. »*

Our English: "« If anyone possessing another's goods in bad faith shall have sold them, or given them, or in some other way alienated them, and he who thinks himself their owner, knowing this, shall have given notice by attestation to him who took the goods within ten years among those present, or within twenty years among those absent, let the goods remain firmly with the buyer, or with him who received the donation, or has in some other way obtained the alienated things. »"

Conjecture: **read `sciens hoc, NON denuntiaverit ei qui res cepit intra decennium…` — the ten/twenty-year prescription runs against the owner precisely because, knowing of the alienation, he failed to protest.**

The very next clause of the same chapter states the opposite case and requires the negative: « Quod si, ignorante domino, mala fide possessor alienaverit, non aliter hoc praejudicet domino nisi triginta annorum spatium transactum sit » — 'But if, the owner being unaware, the possessor in bad faith shall have alienated them, this shall not otherwise prejudice the owner unless the space of thirty years has passed.' The contrast is knowing-and-silent (10/20 years) versus unaware (30 years). As printed, the owner who DOES give formal notice within the term still loses the goods to the buyer, which makes the notice pointless and makes ignorance a better position than vigilance.

<sub>found by 9741-u32 · chunk 0004</sub>

#### 0494B — dropped-non · **migne** · medium confidence

Printed: *Ex concilio Africano, cap. 100: « Quandiu excommunicato communicaverit suus episcopus, eidem episcopo ab aliis non communicetur episcopis, ut magis caveat episcopus ne dicat in quemquam quod aliis documentis convincere non potest. »*

Our English: "From the African council, chapter 100: « So long as his own bishop communicates with an excommunicated man, let that same bishop not be communicated with by the other bishops, that the bishop may take the more care not to say against anyone what he cannot prove by other evidences. »"

Conjecture: **read `Quandiu excommunicato NON communicaverit suus episcopus` — so long as his own bishop withholds communion from the (unjustly) excommunicated man, the other bishops are to withhold communion from that bishop.**

The purpose clause printed in the same sentence — « ut magis caveat episcopus ne dicat in quemquam quod aliis documentis convincere non potest » ('that the bishop may take the more care not to say against anyone what he cannot prove by other evidences') — is a deterrent aimed at the bishop who pronounces sentence rashly. As printed, the penalty falls on a bishop for STAYING in communion with the man, which deters nothing about rash sentencing; and the chapter's own rubric is « De injuste excommunicatis » / 'On those unjustly excommunicated', i.e. the offender in view is the excommunicating bishop, not the one who keeps communion with his victim.

<sub>found by 9741-u32 · chunk 0006</sub>


### 10080 PL 145 — De castitate et mediis eam tuendi

#### 0714D — dropped-non · **migne** · high confidence

Printed: *Quod comes penitus abnegat, et hanc se ferre posse stomachatur injuriam.*

Our English: "This his companion utterly refuses, and testily protests that he cannot bear such an indignity."

Conjecture: **et hanc se ferre NON posse stomachatur injuriam**

The immediate neighbour on either side requires refusal, not capacity. Before: « Quod comes penitus abnegat » — the companion UTTERLY REFUSES; a man who has just utterly refused cannot in the same breath be indignant that he IS able to bear the indignity. After, the lord answers him: « Ego, inquit, si tu fastidis, solus utramque levabo, et hanc quam dicis injuriam alacriter sustinebo » — 'if YOU disdain it, I alone will lift them both and will cheerfully BEAR this indignity, as you call it.' The lord's 'I will bear it' is meaningful only as the antithesis of the companion's 'I cannot bear it'; with the printed 'posse' the two men assert the same thing and the whole contrast collapses. Our English silently repairs the plate ('protests that he CANNOT bear'), so the defect is invisible in translation — the classic silent repair of translation-style.md 7a.

<sub>found by 10080-u68 · chunk 0001</sub>


### 10083 PL 145 — De dignitate sacerdotii

#### 0493D — sense-reversing-letter · **ours** · medium confidence

Printed: *Quoniam adhuc modicum, [0493D] et visitabo sanguinem Jezrahel super domum Jehu, et requiescere faciam regnum domum Israel, et in illa die conteram arcum Israel, in valle Jezrahel*

Our English: "For yet a little while, and I will visit the blood of Jezrahel upon the house of Jehu, and I will make the kingdom, the house of Israel, to rest, and in that day I will break the bow of Israel, in the valley of Jezrahel"

Conjecture: **Hosea 1:4 reads 'et quiescere faciam regnum domus Israel' — 'I will cause the kingdom of the house of Israel to CEASE' (Douay). Migne's plate prints 'requiescere' (extra re-, plus 'domum' for 'domus'), and the English has followed the printed form lexically as 'make ... to rest', turning a sentence of destruction into a promise of repose. Render 'and I will bring the kingdom of the house of Israel to an end'.**

Damian cites this verse for one purpose only, stated in the sentence immediately before it: 'Quod utique nomen, quamvis prosperum significare videatur ... hic tamen vindictam Dei et furorem sonat' — 'although it seems to signify something prosperous ... here nevertheless it sounds the vengeance of God and fury.' A clause promising Israel's kingdom rest is the opposite of vindicta and furor, and it also contradicts the clauses flanking it inside the same quotation ('I will visit the blood of Jezrahel upon the house of Jehu', 'I will break the bow of Israel'). The paragraph after it repeats the point: 'Quod autem hic per Jezrahel, non salus, sive prosperitas, sed Dei potius ira signatur.'

<sub>found by 10083-u41 · chunk 0001</sub>


### 10365 PL 150 — De celanda confessione

#### 0631C — dropped-word · **ours** · medium confidence

Printed: *Novit enim nescio quem [0631C] homicidam episcopus, et alius nemo illum novit. Ego publice corripere, at tu quaeris inscribere: prorsus nec prodo, nec negligo. Corripio in secreto, pono ante oculos Dei judicium, terreo cruentam conscientiam, persuadeo poenitentiam.*

Our English: "For the bishop knows some [0631C] murderer or other, and no one else knows him. I would rebuke him publicly, but you seek to indict him: I neither betray him at all, nor neglect him. I rebuke in secret, I set the judgment of God before his eyes, I terrify his bloodstained conscience, I urge penitence."

Conjecture: **The printed Latin has no finite verb of willing: 'Ego publice corripere' is an elliptical indignant question or refusal ('I, rebuke publicly? — no, it is you who seek to register a charge'), i.e. the speaker denies that he rebukes publicly. Our English supplied 'I would' and turned the refusal into an assertion, reversing it. Render e.g. 'Am I to rebuke him publicly? — it is you who seek to indict him.' (Alternative, if the defect is Migne's: a dropped 'nolo'/'non possum' after 'publice'.)**

The very next clause denies it — 'prorsus nec prodo, nec negligo. Corripio in secreto' ('I neither betray him at all, nor neglect him. I rebuke IN SECRET') — and the immediately preceding sentence of the same Augustine excerpt states the rule the speaker is illustrating: 'In secreto debemus corripere, in secreto arguere, ne, volentes publice arguere, prodamus hominem' ('In secret we ought to rebuke... lest, wishing to reprove publicly, we betray the man'). Rebuking a murderer publicly is precisely the betrayal the passage forbids, so 'I would rebuke him publicly' asserts the opposite of what its own neighbours require.

<sub>found by 10365-u69 · chunk 0001</sub>


### 10703 PL 160 — Homilia de villico iniquitatis

#### 1126B — sense-reversing-letter · **migne** · low confidence

Printed: *Unde scriptum est: *Oro iniquitate vidi tentoria Aethiopiae [n: (Habac. III, 7)]*, id est pro divitiis captandis vidi homines factos tabernacula nigredinis*

Our English: "Whence it is written: *I pray, by iniquity I saw the tents of Ethiopia [n: (Habac. III, 7)]*, that is: for the catching at riches I saw men made tabernacles of blackness"

Conjecture: ***Pro* iniquitate vidi tentoria Aethiopiae (Vulg. Habac. III, 7); Migne's plate sets O for P, and the English then reads the corrupt word as the verb *oro*, 'I pray', producing a clause the Latin never asserts and dissolving the causal 'for the sake of' the whole gloss depends on.**

Odo re-quotes the same verse eleven lines later with the preposition intact — 'Hi fiunt *pro iniquitate tentoria Aethiopiae*' — and his own gloss on the first quotation glosses the missing preposition as causal: 'id est *pro* divitiis captandis'. The immediate neighbour therefore requires 'pro iniquitate', not a verb of praying.

<sub>found by 10703-u71 · chunk 0001</sub>


### 10727 PL 162 — Epistola

#### 1590C — sense-reversing-letter · **migne** · high confidence

Printed: *Virtutes vocantur arma lucis; arma, quia praecidunt contraria; lucis, quia pulsis tenebris faciunt lumen menti. Continentia praecedit luxuriam, humilitas superbiam, sic et in caeteris.*

Our English: "The virtues are called the arms of light: arms, because they cut down their contraries; of light, because, the darkness being driven out, they make light for the mind. Continence goes before lust, humility before pride, and so with the rest."

Conjecture: **Continentia praecidit luxuriam (praecidit, not praecedit) — 'continence cuts off lust', matching praecidunt in the sentence before**

The contradicting neighbour is the clause immediately preceding, which defines the whole figure: 'arma, quia praecidunt contraria' — the virtues are ARMS precisely because they CUT DOWN their contraries. The examples that follow are supposed to instance that cutting down; 'praecedit' instead makes continence merely go BEFORE lust in sequence, which would make the virtues antecedents of the vices rather than their destroyers, and leaves 'arma' and 'praecidunt' with nothing to illustrate them. The same paragraph continues in the same key ('Clavis virtutum pelluntur clavi vitiorum' — the nails of the virtues DRIVE OUT the nails of the vices), confirming that expulsion, not precedence, is the sense required.

<sub>found by 10727-u72 · chunk 0000</sub>


### 11059 PL 175 — Adnotatiunculae in librum Judicum

#### 0087C — sense-reversing-letter · **migne** · medium confidence

Printed: *Intelligitur ergo, quod filii Benjamin, quorum possessio tribui Juda cuncta erat, et Hierusalem contingebat: postquam filii Juda civitatem ceperant atque vastaverant, in eadem habitare coeperunt*

Our English: "It is understood, therefore, that the children of Benjamin — whose possession lay wholly next to the tribe of Judah, and touched Jerusalem — after the children of Judah had taken and laid waste the city, began to dwell in it"

Conjecture: **juncta erat (c for j): "quorum possessio tribui Juda juncta erat, et Hierusalem contingebat" — "whose possession was joined to the tribe of Judah and touched Jerusalem." juncta … contingebat is the natural pair, and the English's "lay wholly next to" is a silent repair that quietly supplies the "next to" the printed cuncta does not contain.**

As printed, cuncta erat asserts that Benjamin's possession belonged entirely to the tribe of Judah. That is the opposite of what the whole sentence is doing, which is explaining why BENJAMIN, not Judah, came to occupy Jerusalem: "filii Benjamin ... in eadem habitare coeperunt, ipsumque Jebusaeum habitatorem loci a filiis Juda subactum secum habitare passi sunt." The neighbouring clause "et Hierusalem contingebat" ("and touched Jerusalem") is a statement of adjacency and requires a possession Benjamin actually holds; if that possession were wholly Judah's there would be nothing of Benjamin's to touch Jerusalem, and the entire explanation of Benjamin's presence in the city collapses.

<sub>found by 11059-u52 · chunk 0000</sub>


### 11075 PL 176 — De fructibus carnis et spiritus

#### 0997C — dropped-word · **ours** · high confidence

Printed: *Et quidem superbia fructus carnis radix est, fructus spiritus humilitas. Quae diversitas inspecta radicum, fructum earum moderabiliter quaerentis appetitum ostendit.*

Our English: "And indeed pride is the root of the fruit of the flesh, humility the fruit of the spirit. This diversity, once the roots are inspected, shows to the one who moderately seeks their fruit what he should desire."

Conjecture: **The elliptical Latin is 'fructus spiritus humilitas [radix est]' — humility is the ROOT of the fruit of the spirit. The English drops the carried-over 'radix est' and thereby makes humility the fruit rather than the root, i.e. the opposite term of the root/fruit pair the sentence is built on. Read: 'humility the root of the fruit of the spirit.'**

The immediately following sentence in both texts is plural: 'Quae diversitas inspecta RADICUM' / 'once the ROOTS are inspected' — two roots, but the English has named only one. Confirmed by the frame of the whole work: the Prologue promises 'Duas itaque arbusculas ... ex quarum RADICE fructuum proventus pateat' (two little trees, from whose root the yield of the fruits may lie open), and CAP. I opens 'Cunctarum ... virtutum fundamentum est humilitas' / 'the foundation of all the virtues ... is humility' — humility is the root of the spiritual tree, not its fruit. CAP. II likewise speaks of 'radix superbiae' set against 'sanctae humilitatis uberi dulcedine', keeping humility on the root side of the antithesis.

<sub>found by 11075-u53 · chunk 0000</sub>


### 11078 PL 176 — De modo orandi

#### 0980B — sense-reversing-letter · **migne** · low confidence

Printed: *Hoc genus orandi in forma est, et quam prae caeteris omnibus unicum, tam est apud Deum prae caeteris omnibus pretiosum.*

Our English: "This sort of praying is in a form of its own; and as it is unique above all the rest, so with God it is above all the rest precious."

Conjecture: **Read *informe est* ("is formless") for the plate's word-divided *in forma est*; the privative in- has been split off and the claim inverted from "has no form" to "has form."**

Pure prayer is defined immediately before as the prayer that loses its own content: "prae amoris ejus magnitudine etiam petitionis suae obliviscatur ... ejus etiam, pro quo venit, curam libenter postponat" — it forgets even its own petition and sets aside the very business it came for. A few lines later the same chapter makes the outward formlessness explicit and grades it as the mark of the highest devotion: "quod per sola nomina fit, quo magis est foris significatione imperfectum, tanto magis intus est abundantia dilectionis plenum ... quanto major et ferventior intus est, tanto minus foris per vocem explicari potest", and "Illud igitur, quod solis nominibus fit, ad puram orationem pertinere videtur." Pure prayer is precisely the species with the least outward form, so "in forma est" asserts the opposite of what its own neighbours require. The English "in a form of its own" is a silent repair that smooths the defective plate rather than translating it.

<sub>found by 11078-u40 · chunk 0001</sub>


### 11080 PL 176 — De quatuor voluntatibus in Christo

#### 0843C — sense-reversing-letter · **migne** · medium confidence

Printed: *Abraham autem etiam cruciatum vidit, et tamen sive compassionis dolore in certitudine felicitatis persistens, eum per justitiam repulit dicens: Fili, recepisti bona in vita tua, et Lazarus similiter mala.*

Our English: "But Abraham saw him even tormented, and yet, persisting without any grief of compassion in the certitude of happiness, repulsed him through justice, saying: Son, thou hast received good things in thy life, and Lazarus likewise evil."

Conjecture: **sive > sine ("sine compassionis dolore ... persistens") — a single letter; as printed, sive has no second disjunct to govern (contrast the author's correct use two columns later, "opprimi sive affligi"), and it leaves the bare ablative "compassionis dolore" attached to "persistens", i.e. Abraham persisting WITH the grief of compassion.**

The immediate argument is that the blessed do not compassionate at all: "Hic compati virtutis est; illic non compati, felicitatis. ... Illic non compateris felicitate, non moveris aeternitate, non condoles impassibilitate" (0843B-C), and Abraham is introduced as the foil to the rich man who IS still tormented by another's misery ("Sane qui illic pati non exuunt compati non deponunt"). Abraham "persisting in the grief of compassion in the certitude of happiness" asserts the exact opposite of the sentence three lines above it, and of the act it explains — "eum per justitiam repulit." Our English silently repairs the plate, rendering it "without any grief of compassion" (supplying both the negation and an "any" that the printed Latin has no word for), so the defect is invisible to an English-only reader.

<sub>found by 11080-u74 · chunk 0000</sub>


### 11089 PL 176 — Institutiones in Decalogum

#### 0013B — added-negative · **migne** · medium confidence

Printed: *Sane quantum spectat ad sensum litterae, duobus modis parentes nostros honorare debemus, et obediendo eis videlicet in omnibus, his exceptis in quibus Dei Patris dilectio non offenditur, et eos (quantum nostra facultas suppetit) adjuvando.*

Our English: "Surely, as far as regards the sense of the letter, we ought to honor our parents in two ways: namely, both by obeying them in all things — those excepted in which the love of God the Father is not offended — and by helping them, as far as our means suffice."

Conjecture: **his exceptis in quibus Dei Patris dilectio offenditur (delete non) — the standard Victorine formula: obey in all things EXCEPT those in which the love of God is offended**

As printed, the exception clause carves out the cases where God is NOT offended, i.e. it commands obedience to parents precisely in what offends God — the reverse of the rule the same work has just laid down. Chunk 0000 @0010B: 'qui cavet sollicite ne in sua servitute, vel pro timore hominis contra Deum quid faciat' ('who carefully takes heed lest in his service he do anything against God for fear of man'), and @0010A-C the whole argument that human honour is a lesser thing subordinated to latria owed God alone. The immediately preceding sentence in this same chunk (@0013A) states the governing principle: 'Deus diligendus est propter seipsum, et homo propter Deum' — man is loved for God's sake, so obedience to man cannot be commanded in the very cases where God is offended.

<sub>found by 11089-u54 · chunk 0001</sub>


### 11208 PL 183 — Flores seu sententiae ex S. Bernardo

#### 1199B — dropped-word · **ours** · medium confidence

Printed: *Utinam relinquant nobis moderni Noe, unde a nobis possint operiri. *Ibid., n. 19, cap. 8. Adeo jam palam et sine pudore peccatur.**

Our English: "Would that the Noahs of our day might leave us something by which we could be covered by them."

Conjecture: **"Would that the Noahs of our day would leave us something whereby THEY might be covered BY US" — `a nobis possint operiri` has *moderni Noe* as subject of the passive `operiri` and *a nobis* as the agent; the English inverts both, making us the covered and them the coverers.**

The inline gloss printed with the sentence is the contradicting neighbour: *Adeo jam palam et sine pudore peccatur* — "So openly and shamelessly is sin now committed." The allusion is Gen. 9:23, Shem and Japheth covering the drunken Noah's nakedness: the complaint is that modern prelates sin so nakedly that they leave their subordinates nothing with which to cover THEM. If, as the English has it, we were to be covered by them, the gloss about shameless, open sinning would have nothing to attach to; and the two sentences that bracket it (*Multi non tanta alacritate currerent ad honores* / *In alto positum, non altum sapere, difficile*) are both indictments of prelates, not of us.

<sub>found by 11208-u76 · chunk 0000</sub>


### 11325 PL 184 — In festo S. Andreae

#### 1053A — dropped-word · **ours** · low confidence

Printed: *Haec pure facienda est: quia non est pars una peccatorum dicenda, et altera reticenda; neque levia confitenda, et gravia diffitenda.*

Our English: "This must be made purely: because one part of one's sins is not to be told and another kept silent; nor light things confessed and grave ones denied."

Conjecture: **The Latin negation governs the whole pair (non [una dicenda et altera reticenda]); English needs the scope carried explicitly, e.g. "because it is not the case that one part of one's sins should be told and another kept silent" or "because one part of one's sins is not to be told while another is kept silent".**

As rendered, the clause most naturally reads as prescribing that one part is NOT to be told and another is to be kept silent — i.e. partial concealment — which is the opposite of its own governing sentence "Haec pure facienda est" / "This must be made purely," and of the immediately following "Nec alter accusandus et ipse excusandus" ("Nor is another to be accused and oneself excused"), the whole point of which is that nothing be held back.

<sub>found by 11325-u56 · chunk 0001</sub>


### 11713 PL 207 — De divisione et scriptoribus sacrorum librorum

#### 1053B — sense-reversing-letter · **migne** · medium confidence

Printed: *Malachim proinde appellatur, eo quod reges Judae et Israelitae gentis gesta per ordinem digerat temporum. Malach enim Hebraice, Latine *regnum* interpretatum est*

Our English: "It is accordingly called Malachim, because it sets out in the order of the times the deeds of the kings of Judah and of the Israelite nation. For *Malach* in Hebrew is rendered in Latin *kingdom.*"

Conjecture: **regum for regnum (Isidore, Etym. VI.ii: 'Malachim enim Hebraice, Latine regum interpretatur')**

The gloss is offered as the reason for the title, and its own immediate neighbour states that reason: 'eo quod REGES Judae et Israelitae gentis gesta per ordinem digerat temporum' — the deeds of the KINGS. A book named from the kings cannot be named from a word glossed 'kingdom'; the etymology as printed falsifies the clause it is explaining. The same chunk elsewhere keeps the correct sense of the title in the canon list, 'quartus Malachim, quod est Regum tertius et quartus' — Kings, not Kingdom. The English follows the defective plate faithfully ('kingdom'), so the defect is Migne's, not ours.

<sub>found by 11713-u78 · chunk 0000</sub>


### 7020 PL 18 — Exhortatio ad monachos

#### 0075A — added-negative · **migne** · low confidence

Printed: *sed ut ex abundanti sic omne quod fingi potest, tanquam possit et credi caveamus, ne [0075B] in nullo famae nostrae vulnere serpat nata ab occasione suspicio.*

Our English: "but that out of abundance we should so guard against everything that can be feigned, as though it could also be believed, lest a suspicion born from the occasion creep into any wound of our reputation."

Conjecture: **ne in ullo famae nostrae vulnere serpat — Migne's nullo for ullo; the English silently repairs it to "any" (translation-style.md 7a).**

Taken literally, ne ... in nullo ... serpat says the suspicion is to creep into NO wound, i.e. it may creep into some — the reverse of what the whole sentence and its immediate neighbour demand. The very next sentence is "Ipsa famae semina, priusquam linguis nutriantur, intereant" ("Let the very seeds of rumor perish before they are nourished by tongues"), and the clause it depends on is "omne quod fingi potest ... caveamus" ("let us guard against everything that can be feigned"). The same author writes the correct form a few lines later at 0075D-0076A: "ultra supradictos victus ab ullo quippiam praesumatis".

<sub>found by 7020-u55 · chunk 0001</sub>


### 7693 PL 59 — Sermo in rogationibus

#### 0395A — sense-reversing-letter · **migne** · medium confidence

Printed: *Auris ergo nostra est obedientia nostra: nam cum precamur et resipiscimus, primam istius auris partem leo devorat, novissimam pastor solvat.*

Our English: "Our ear, then, is our obedience: for when we pray and come to ourselves again, the lion devours the first part of that ear, and the shepherd looses the last."

Conjecture: **cum peccamus et resipiscimus ("when we sin and repent") — peccamus corrupted to precamur**

The allegory assigns the devoured first part to sin and the rescued last part to repentance, so praying cannot be what makes the lion devour. The very next sentences say so: 'Prima pars auriculae est *Non concupiscas.* Ista jam deglutita est, quia cogitatio concupivit' — the first part is swallowed because the thought coveted (a sin, not a prayer) — and the rescue of the last part is answered 'Quomodo? Utique per poenitentiam et correctionem.' The printed 'precamur' makes prayer the cause of the lion's bite, the opposite of the sentence's own gloss; and 'resipiscimus' ('come to ourselves again', i.e. repent) presupposes a preceding lapse, not a preceding prayer.

<sub>found by 7693-u89 · chunk 0000</sub>


### 8566 PL 96 — Tractatus

#### 1382A — dropped-word · **migne** · medium confidence

Printed: *An forte praedictum chasma inter bonos et malos objectum non locorum spatia, sed actorum dirimit merita? Mirum autem et valde mirum, si tenes ita. Nam et Job, cui similis in terra non erat, ad poenalia loca iturum se esse clamabat…*

Our English: "Or perhaps the aforesaid chasm set between the good and the wicked divides not the intervals of places, but the merits of deeds? But it is a wonder, and a very great wonder, if you so hold. For Job also, whose like there was not upon earth, cried out that he was to go to the places of punishment…"

Conjecture: **'nisi tenes ita' (or 'si non tenes ita') — 'a wonder, and a very great wonder, UNLESS you hold it so'; the printed 'si' has lost the negative element (ni-/non)**

As printed, the author calls it astonishing that the reader should hold the chasm to divide merits and not places — but everything that follows argues for exactly that position, introduced by an explanatory 'Nam': 'Nam et Job, cui similis in terra non erat, ad poenalia loca iturum se esse clamabat' (Job, the best man on earth, said he would go to the places of punishment), and then flatly 'Absit autem ut illic Abraham et Job loca disjungerent, quos hic fides et opera inseparabiliter conjunxerant' ('far be it that PLACES should have separated Abraham and Job there, whom faith and works had joined inseparably here'). A 'Nam' clause cannot supply the ground for a proposition the author has just called a great wonder to hold; it supplies the ground for holding it. With 'nisi', the sequence reads straight: it would be a wonder if you did not hold so — for Job… and far be it that places separated them.

<sub>found by 8566-u83 · chunk 0000</sub>


### 8625 PL 98 — Appendix ad epistolas

#### 0940B — dropped-word · **ours** · high confidence

Printed: *Baptismum Graece, Latine tinctio dicitur. Et ob hoc tinctio nominatur quia ibi homo Adae de peccato fuscatur.*

Our English: "Baptism in Greek is called *tinctio* (dipping) in Latin. And for this reason it is named a dipping, because there the man of Adam is cleansed from sin."

Conjecture: **Migne's plate prints fuscatur ('is darkened/blackened'), which asserts the opposite of what baptism does; the underlying sense requires a verb of cleansing (mundatur / purgatur / abluitur, or a lost clause of the type 'a peccato Adae, quo fuscatur, mundatur'). Our English silently repaired the plate by rendering fuscatur as 'is cleansed' — the translation now says the right thing while concealing that the printed Latin says the wrong thing. This is the 'silent repair' pattern of translation-style.md 7a.**

The same chapter, a few lines later, states the opposite of 'is darkened': 'Nam sicut ex baptismo remissio peccatorum largitur, ita per unctionem sanctificatio sancti Spiritus adhibet' — 'For as from baptism the remission of sins is bestowed...'. The preceding chunk likewise defines baptism as the point at which 'infans ... salutaris ablutione lavacri peccatorum suorum purgationem adipiscatur' ('an infant ... obtains through the saving washing of the laver the purgation of its sins'). Baptism cannot both blacken a man with sin and remit his sins in the same paragraph; and the English, by writing 'cleansed', leaves no trace that the printed word was fuscatur.

<sub>found by 8625-u84 · chunk 0001</sub>


### 8708 PL 101 — Vita S. Martini Turonensis

#### 0659D — sense-reversing-letter · **ours** · medium confidence

Printed: *Hoc quoque itinere latronum perpessus insidias, dum uni traditur ad custodiendum, evangelica praedicatione latronem convertit ad Christum: et qui [ *Al.,* et cui] traditus fuit ad poenam, factus est ei in salutem.*

Our English: "On this journey too he suffered the ambushes of robbers; and while he was handed over to one of them to be kept, by evangelical preaching he converted the robber to Christ: and he to whom [ *Al.,* and he to whom] he had been handed over for punishment became for him unto salvation."

Conjecture: **Migne's text reads 'qui', not 'cui' (the 'cui' is only the *Al.* variant). Render: 'and he who had been handed over for punishment [i.e. Martin] became salvation to him [the robber].' The English has silently adopted the variant reading and so reversed who saves whom.**

The immediately preceding clause makes Martin the one handed over and the robber the one acted upon: 'dum uni traditur ad custodiendum, evangelica praedicatione latronem convertit ad Christum' — 'while he was handed over to one of them to be kept, by evangelical preaching he converted the robber to Christ.' The English sentence then makes the robber ('he to whom he had been handed over') the subject who 'became for him unto salvation', i.e. the captor is salvation to Martin — the opposite of the conversion just narrated. The tell that the reading was switched rather than translated is that the bracketed variant is rendered word-for-word identically to the main text ('and he to whom [ *Al.,* and he to whom]'), so the qui/cui distinction Migne prints has been collapsed onto the variant.

<sub>found by 8708-u61 · chunk 0000</sub>


### 8777 PL 104 — De modo regiminis ecclesiastici

#### 0191B — dropped-non · **migne** · high confidence

Printed: *sed de illis locis ubi in illam ordinatam narrationem gestorum Scritura exsequitur, sed tantum diversis hujusmodi nominibus Christum et Ecclesiam indicat*

Our English: "but from those places where Scripture carries through that ordered narration of deeds, yet indicates Christ and the Church only by various names of this kind"

Conjecture: **ubi non ordinatam narrationem gestorum Scriptura exsequitur, sed tantum diversis hujusmodi nominibus Christum et Ecclesiam indicat (a negative — nihil / non — lost before the first clause; the correlative 'sed tantum' requires it)**

The whole sentence is a three-member exclusion: 'Haec multiplicia nomina sponsi et sponsae, Christi et Ecclesiae, NON de aliquibus gestis historicis (sicut est, cum Scriptura de Sara, Rebecca, Rachel loquitur) ... NEC de eo locutionis genere ... assumpta sunt; sed de illis locis ubi ...'. The third member must name places where Scripture is NOT pursuing a narrative of deeds at all but only naming Christ and the Church — as printed it says the names come from where Scripture DOES carry through the ordered narration of deeds, i.e. exactly the historical-deeds source the same sentence has just excluded. The adversative 'sed tantum ... indicat' is unintelligible without a preceding negative. Our English silently repairs the broken pair by translating the second 'sed' as 'yet' ('carries through ... yet indicates'), producing a smooth sentence that still asserts the opposite of the sentence's own premise.

<sub>found by 8777-u44 · chunk 0000</sub>


### 9245 PL 125 — Instructio ad Ludovicum Balbum

#### 0988C — dropped-word · **ours** · medium confidence

Printed: *Sollicite unicuique ambulandum est cum Deo suo, et regi praecipue, qui sub tantis erit poenis in futuro saeculo, si malus fuerit, super quantos fuit in isto saeculo, in [0988D] quo se a malitia non correxit, et non fecit judicium et justitiam, et non ambulavit sollicite cum Deo suo.*

Our English: "Every man must walk solicitously with his God, and a king above all, who in the age to come will be under punishments as great as the number of those over whom he was in this age, in which he did not correct himself from wickedness, and did not do judgment and justice, and did not walk solicitously with his God."

Conjecture: **Restore the conditional: "…will be under punishments, IF HE HAS BEEN WICKED, as great as the number of those over whom he was in this age…"**

The printed Latin conditions the king's punishment on "si malus fuerit"; the English drops it and so asserts flatly that a king WILL be punished in the age to come. That contradicts the immediate neighbour, which makes the punishment hang on failure — "in quo se a malitia non correxit, et non fecit judicium et justitiam" — and it contradicts the sentence that follows, the whole point of which is that Louis can escape this by amendment: "sic vobis necesse est ut sollicite ambuletis cum seniore vestro rege regum, ut de praeteritis, quae contra illius voluntatem fecistis, illi per confessionem et cordis contritionem, et per opera bona satisfaciatis." An unconditional damnation of kings would make the exhortation pointless.

<sub>found by 9245-u63 · chunk 0001</sub>


### 9249 PL 125 — Quae exsequi debeat episcopus

#### 1088C — added-negative · **migne** · medium confidence

Printed: *Tamen ut ab ecclesiasticis de non dividendis rebus Ecclesiae suspicionem dudum conceptam penitus amoveremus, statuimus ut neque nostris, neque filiorum et Deo dispensante successorum nostrorum temporibus, qui nostram vel progenitorum nostrorum voluntatem, vel exemplum imitari voluerint, ullam penitus divisionem aut jacturam patiatur.*

Our English: "Yet, that we might utterly remove from churchmen the suspicion long since conceived concerning the non-division of the Church's goods, we have decreed that neither in our own times, nor in those of our sons and, by God's dispensing, of our successors who shall be willing to imitate our will or that of our forebears, or our example, shall it suffer any division or loss whatsoever."

Conjecture: **de dividendis rebus Ecclesiae suspicionem dudum conceptam — the suspicion the clergy had conceived was of the DIVISION of church property; the intrusive 'non' (assimilated from the chapter rubric 'de non dividendis rebus ecclesiasticis', printed twice at 1090D) makes the emperors say the clergy suspected them of NOT dividing it.**

The remedy decreed in the same sentence is precisely non-division: 'statuimus ut ... ullam penitus divisionem aut jacturam patiatur' ('we have decreed that ... shall it suffer any division or loss whatsoever'), and the preceding clause promises increase, not loss: 'cuique non solum habita conservare, verum etiam multa, Deo opitulante, conferre optamus'. A guarantee of non-division can only REMOVE a suspicion of division; as printed, the decree confirms the very suspicion it claims to dispel. The same clause recurs at 1091A ('de non dividendis rebus illius'), where the English again reproduces the printed negative ('concerning the non-division of its goods') rather than repairing it.

<sub>found by 9249-u85 · chunk 0000</sub>


### 9852 PL 141 — De monasterio Fructuariensi

#### 0839B — sense-reversing-letter · **migne** · low confidence

Printed: *Rex Ardoinus sceptri moderamine fissus / Regnat in Hesperia, tendit in Ausoniam.*

Our English: "King Arduin, upheld by the governance of the scepter, / Reigns in Hesperia, stretches toward Ausonia."

Conjecture: **fissus > fisus ("relying on / confident in the governance of the scepter"); the doubled -ss- turns a participle of confidence into one of being split or broken.**

The next line of the same distich asserts the opposite of a broken rule: "Regnat in Hesperia, tendit in Ausoniam" — Arduin is reigning and extending his reach, in the dating formula whose whole function is to fix the year 1003 by naming the king then securely on the throne. A king "split by the governance of the scepter" contradicts the very clause it introduces. Our English silently repairs it as "upheld by," which is fisus, not fissus — the printed defect is not visible to an English reader.

<sub>found by 9852-u67 · chunk 0000</sub>

