# 8382 Egbert, *Poenitentiale*: cruces, stint A (chunks 0000–0003, cols 0401A–0414D)

Plate: archive PDF pp. 207–213, every column read (`data/briefs/8382-PLATE-READS-0000.json`).
There is only one witness, so **no `[sic:]` is fired** on anything below. Two markers are fired,
both on columns read at the plate: one `[var:]` (0411B) and one `[cj:]` (0411A). No `[ed:]` or `[d:]`.
Where the plate and the TEI differ and the plate is sound, the English follows the plate
(`data/briefs/8382-PENDING-TEI-PATCHES-0000.md`, ten sites).

## Standing decisions for this range

- **The title banner** is rendered as the brief gives it: "THE PENITENTIAL OF SAINT EGBERT, ARCHBISHOP OF YORK". English word order puts the `[nt:]` after "YORK", which is the English equivalent of the plate position between *ARCHIEPISCOPI* and *POENITENTIALE*. The note is translated in full. The locator *tom. I Conc. Britan.* is kept as printed, and Egbert's name keeps its Old English spelling *Egcbyrhtus* in the quoted colophon.
- **`hiems` = "winter"** and **`annus` = "year"**, kept apart throughout. Inside a single canon this range shifts from one to the other (IV: *tres hiemes* … *septem annos*; XXII: *tres annos* … *quinque hiemes*; XXXI: *quindecim hiemes* … *septem annos*). Those shifts are printed and are carried.
- **`sacerdos` = "priest", `presbyter` = "presbyter"**, per the table, even where one canon moves between them (CAPUT I head *presbyteri*, body *sacerdoti*; CAPUT VI head *presbytero*, body *sacerdos*).
- **`ab albo abstine` (0401B) = "abstain from white food"**. As the table directs, this is the one crux on it: "white" food is dairy produce and eggs, the Lenten abstinence. It is rendered literally.
- **`quadragesima` = "Lent"**, and **`tria jejunia` / `tria jejunia legalia` = "three fasts" / "three lawful fasts"**. CAPUT XXXVII (0410D–0411A) defines the three lawful fasts: forty days before Easter, forty before Christmas, and forty after Pentecost. That is why 0402C can say *in tribus illis quadragesimis*.
- **`serva` = "bondwoman"; `verna` = "bondmaid"; `servus` = "slave"**.
- **`rem habere cum` = "have dealings with"** (the sexual euphemism is kept as a euphemism, because the Latin keeps it). **`coire` = "lie with" / "couple"**, and **`fornicari` = "fornicate"**.
- **`poeniteat ejus` (0404A) = "let him repent of it"**, kept distinct from *poenitentiam agat*, "let him do penance".
- **`Theodorius` (0411C)** is printed so here, against *Theodorus* at 0401C. Authorities are rendered as printed, so the English reads "Theodore" at 0401C and "Theodorius" at 0411C. *Dyonisii* in the head of XLI is an attested spelling (Pattern 9) and is rendered "Dionysius".
- **Heads.** *CAPUT PRIMUM* = "CHAPTER ONE." (matching stint B); *LIBRI PRIMI PARS PRIMA / ALTERA* = "THE FIRST / SECOND PART OF THE FIRST BOOK." Migne's parentheses in heads, *(quomodo)* and *(vitae)*, are kept.

## Foot notes (Migne's recovered apparatus)

- **Title banner, p. 207 foot (a)**: translated as `[nt: …]` at the banner. The note says the capitula were "translated from Latin into English" by Egbert. That is the evidence behind the common brief's warning that this Latin carries English idiom.
- **0409C (a), *In domo vertendum est. WILKINS.***: translated as `[nt: It is to be rendered *in domo*, "in the house." Wilkins.]`. The running text still translates *in loco* as printed ("in the place"). ⚑ **The plate sets a COMMA before WILKINS** (*vertendum est, WILKINS.*), where our recovered `[cn:]` has a full stop. This concerns the Latin-only note text in `data/plate-notes/8382.tsv`. It is not mine to edit, so it is reported for whoever maintains that file.

## Cruces

### Chunk 0000

- **0401A `coram ipso se extendat`**: "stretch himself out before him". This is prostration. *ipso* has no expressed antecedent: the priest is named only in the next clause. Rendered literally.
- **0401A `Num te poenitet`**: *num* normally expects a "no" answer. English cannot carry that without supplying a negative the Latin does not print. So the English asks "Dost thou repent …?", and no "not" is added (7a).
- **0401B `et mihi concedat quod debeo`**: "and grant me what I ought". Rendered literally. The confessor prays for his own right performance.
- **0402A `duodecim quadragesimae dies, qui quovis anno occurrunt`**: "the twelve days of Lent, which occur in every year". Twelve fixed fast-days a year are probably the Ember days (four seasons × three days), but the Latin says *quadragesimae*, and the English says "Lent". Plate *quovis*; TEI *quovit* (patch filed).
- **0402A `concubitu cum virgine`**: "lying with a virgin", among the vices to avoid, as printed.
- **0402A `biloquio`**: "double speech", i.e. being two-tongued.
- **0401C `licet studio adulterium non committant`**: "although they do not commit adultery of set purpose". The concession does not attach well to "discretion befits all men". Rendered literally, with the *non* carried.
- **0401C `(in) pane et aqua`**: the parenthesis is Migne's (or Mansi's) supplement. It is kept.
- **0402C `se recipiat ad meridiem`**: "take refreshment at midday", i.e. eat at noon. The Wednesday and Friday exception then requires fasting until None.
- **0402C `uratur` / plate `utatur`**: the plate prints *utatur* with a damaged *t*. The English follows the plate ("let him use"). Patch filed.
- **0402B–C psalm arithmetic**: 50 psalms (for a day?); 300 kneeling or 320 standing for a week; 1200 kneeling or 1680 standing for a month. The ratios do not agree (1680/1200 = 1.4; 320/300 ≈ 1.07). The numbers are printed so and not normalized.
- **0403A solidi**: 26 + 20 + 18 = 64. The printed total is right.
- **0403A `quo modo crimina sua capitalia emendare debeat`**: taken as a relative, "by which means he ought to amend his capital crimes": the riches are the means. *quo modo* could also be an indirect question ("and how he ought …"). The relative reading needs no supplied "and".
- **0403B `Qui per corpus suum peccat, per corpus suum hoc compenset`** ("the Apostle said", italic): this is not in the Vulgate. It is a maxim of the penitential tradition, attributed to Paul. It is rendered as printed. No `[var:]`, because there is no received text to diverge from.
- **0403B `Prima abstinentia est baptismus ignis …`**: this is the traditional list of twelve ways to remission (compare Cassian, *Coll.* 20.8, *remissiones peccatorum*). Here each item is called *abstinentia*, and the English renders "abstinence" as printed.
- **0403C–D `cum effusione lacrymarum Dei honorem exoret`**: "entreat the honour of God". The object is odd: one expects "mercy". Rendered literally. (Old English *ār* means both "honour" and "mercy", which would explain it, but the English does not reconstruct the Old English.)
- **0403D CAPUT IV `jejunet tres hiemes, et tria jejunia per hebdomadam jejunet duobus diebus ad Vesperam`**: this does not construe as one clause. The likely sense is "three winters, and the three (lawful) fasts; in the week, fast two days until Vespers". The English follows the printed words and supplies no punctuation: "and three fasts through the week let him fast on two days until Vespers."
- **0403D CAPUT IV `septem annos`**: "seven years". *annos*, not *hiemes*, is printed here, beside *tres hiemes* in the same canon. Carried as printed.
- **0404A CAPUT V: paired tariffs.** *Si invitus in somno fuerit pollutus* → sing one psalm (0403D). Then *Si invitus fuerit pollutus, vel si volens in somno moechatus sit* → sing twenty-four psalms (0404A). The involuntary case appears twice with different tariffs, and the second pairs it with the voluntary case. As printed, both are rendered with their *invitus / volens*, and nothing is harmonized.
- **0403D `cantet psalterii psalmum`**: "sing a psalm of the psalter". This is probably a slip for *psalterium* (compare *surgat et cantet psalterium*, 0404A). Rendered literally; single-witness (the plate prints *psalterii psalmum*).
- **0404A `maxillam suam … ad terram inclinet`**: "bow his jaw to the ground thirty times". Rendered literally.
- **0404A `nonnulli volunt annum, et cum discretione tres`**: after *decem hiemes*, "some wish a year, and with discretion three". This probably means three years. Rendered as printed; *volunt* is blotted on this copy.
- **0404B CAPUT VI `et ille neget, detineatur in itinere suo`**: *detineatur* can be read as continuing the *si*-clause ("and is held back on his journey", i.e. he refuses because his journey detains him), which fits the head *ob itineris sui necessitatem*. It can also be read as a jussive ("let him be detained"). The English keeps it in the protasis ("and he refuses, is held back on his journey"), which follows the head. No word is supplied.
- **0404B CAPUT VII `quod servitium Spiritus sancti esset in dono baptismi, non tamen in hominis alicujus`**: "not however in that of any man". The *non* is carried.

### Chunk 0001

- **0404C CAPUT IX `non portet caracallam cassiatam, sed cum Evangelium legit, imponat eam humero`**: let him not wear it, but put it on his shoulder for the Gospel. As printed. *caracalla cassiata* is carried as italic Latin: a (hooded?) cloak; *cassiata* is unexplained.
- **0404D CAPUT X `si comedat antequam ad Eucharistiam abeat, et postquam Eucharistiam acceperit`**: "if he eats before he goes to the Eucharist, and after he has received the Eucharist". Taken strictly, this punishes eating after communion as well. Rendered as printed.
- **0405A CAPUT XIV**: a married man who defiles another's woman gets one winter. *si autem caelebs sit* gets seven. Taken strictly, the unmarried man gets the heavier tariff. Printed so and rendered so.
- **0405B `videat quid sit homo, quid sit bestia`**: "let him see what the man is, what the beast is", as printed (the subject is the priest).
- **0405B–C CAPUT XV `Si parvus puer a majori opprimatur in coitu, jejunet quinque noctes`**: the subject of *jejunet* is unexpressed. As printed, the one who fasts is the boy who was overpowered. Rendered so, and not repaired. "Nights" for *noctes* is as printed.
- **0405D `suspendantur`**: "let them be suspended". The English keeps the ambiguity of the Latin (hanged, or suspended from communion). Stint B renders *suspendendi sunt* (0417A) as "to be hanged", where the clause gives no room for "suspended". Here the English "suspended" is the literal word and asserts neither sense. **Merge-time note:** this is a deliberate difference and not drift. The Latin verbs differ in context, and "suspended" is the literal rendering of both.
- **0405D `Quilibet ethnicus deserat uxorem suam ethnicam in potestate sua`**: "let any heathen desert his heathen wife in his own power". The likely sense is "at his discretion". Rendered literally.
- **0406A `non imponatur ei aliquod jejunium nisi juxta canonicum jus sit consecrandus, licet necessitatem suam celet`**: both *non* and *nisi* are carried: no fast unless he is to be ordained.
- **0406A `hoc est quasi Christum suspenderet`**: "as if he were hanging Christ", i.e. crucifying.
- **0406A `et tres plenario jejunet`**: "and three let him fast in full". The noun is unexpressed (the three lawful fasts?). Rendered as printed.
- **0406A `Baptizatus [ Lege baptizans]`**: Migne's own bracketed correction. It is carried verbatim and untranslated (Pattern 19 and the bracket convention). The English renders the printed *Baptizatus*: "The baptized".
- **0406B CAPUT XIX `si uxor flagitia sua committere velit intra quinque annos, alii viro nubere debet`**: "if the wife wishes to commit her misdeeds within five years, she ought to marry another man". The sense is opaque. The parallel tradition (Theodore) concerns a wife who wishes to do penance. *committere* is printed (plate *committere*; TEI *commitere*, orthographic patch). Rendered literally; nothing supplied.
- **0406C `jejunet septem hiemes severum jejunium, vel quindecim leviora`**: "seven winters a severe fast, or fifteen lighter ones", as printed.
- **0406C–D CAPUT XX `excipe si ipsa omnino contradixerit, quod eum nolit, tunc illa, si ipse velit, hoc omittere potest`**: *nolit* is carried ("that she does not want him"). *si ipse velit* ("if he himself wishes") is the man's consent, as printed.
- **0406D CAPUT XXI `si cum extis ejus coeat`**: "if he lies with her entrails". This is a Latin rendering of anal intercourse ("from behind"), rendered literally, plainly, and not euphemized further.
- **0406D `Quilibet homo Solis die vel nocte coiens`**: "Any man coupling on Sunday, by day or by night". *dies Solis* = Sunday, per the table. "With a woman" is not supplied.
- **0407A CAPUT XXII `in homicidio in ira et in secreto`**: "in homicide, in anger and in secret". The second *in* phrase is in apposition. As printed.
- **0407A `Quicunque homicidio consentit, et illud deinde committat … quadraginta dies ecclesiam non ingrediatur`**: the *non* is carried.
- **0407B `si autem cognatis ejus ipsum compensare voluerit`**: "if he has been willing to compensate his kinsmen for him", i.e. pay the wergild.
- **0407B CAPUT XXIII `hoc sit juris episcopalis an arma deponat, et ad monasterium abeat, vel septem hiemes jejunet`**: "let it be of episcopal law whether he lay down his arms …", as printed.
- **0407B–C CAPUT XXIV `Si quis alterum occiderit, nequaquam in homicidio`**: "by no means in homicide", i.e. not as murder. *nequaquam* is carried.
- **0407C `Homo qui odit fratrem suum homicida est, uti Joannes evangelista dicit`**: 1 John 3:15 (Vulg. *omnis qui odit fratrem suum, homicida est*). This is a roman-type paraphrase, and the address is right (John). **Paraphrase**: no `[var:]`. *homicida* = "a murderer".
- **0407C CAPUT XXV `quocunque modo liber sit, servae libertatem lucrari debet`**: "in whatever way he is free, he ought to gain the bondwoman's freedom". This assumes the freed one is the man, though *aliquis eorum* allows either. As printed.
- **0407D `non debet illam deinde relinquere, si mutuo consensu antea serva fuerat`**: "if by mutual consent she had previously been a bondwoman". The condition is odd (the consent belongs to the marriage). Rendered as printed.
- **0407D `tres dies ante jejunium quadragesimale, non congregetur, ita etiam quadraginta dies totos usque ad nonum diem in Paschate`**: "let him not come together … until the ninth day in Easter". *congregetur* = come together (conjugally). The *non* is carried.
- **0407D `vel alteruter eorum sit infidelis, vel sit sanus`**: "or is healthy". One expects "sick" as a ground for separation. *sanus* is printed (plate-confirmed). **Declined for `[cj:]`**: the English is odd, but it does not assert something the canon argues against, and the word is neither a negation nor a correlative (Pattern 18a bar).

### Chunk 0002

- **0408A CAPUT XXVI `et dein nolit resipiscere, et cum eo in quinque annis pacem inire`**: *nolit* governs both infinitives: "will not come to her senses, and make peace with him". The English keeps the one negation over both, as the Latin does.
- **0408A `exspectet eum sex annos` … `et captiva post quinque annos redeat`**: six years of waiting, then a return "after five years" that already obliges the second marriage to yield. Taken strictly, these contradict. Both numbers are printed and carried.
- **0408A `Cum vir in adulterio conjunctus sit uxori suae familiae`**: "joined in adultery to a wife of his household". *familiae* is taken as a genitive of *uxori* (a woman of the household). It could also be a dative, "to his household's …". Rendered literally.
- **0408B `post hanc aetatem dominus ejus illam capere potest, cum sua voluntate`**: grammatically *sua* refers to *dominus* ("with his own will"), and the English keeps the grammar. The canon's likely sense is "with her consent" (the tradition's point is that she may not be married against her will). Not repaired.
- **0408B `Si inimicus vir aliquem uxore privet`**: "If a hostile man deprives someone of his wife", i.e. she is carried off by an enemy.
- **0408C CAPUT XXVIII `Abstineat mulier a marito suo septem menses antequam eam cognoscat`**: "seven months before he knows her". The sense required is "before she gives birth" (the head speaks of the *gravida*). As printed, *cognoscat* makes little sense. Rendered literally; plate-confirmed.
- **0408C `Mulier in consuetudine sua menstrua ad ecclesiam non confugiat`**: "let her not take refuge in the church". *confugere* is printed (one expects *accedere*). Rendered literally, with the *non* carried; *nec … nec* both carried.
- **0408D CAPUT XXIX**: head *uxore*, body *mulier*. As printed.
- **0409A CAPUT XXX `quasi pro homicidio jejunet tres annos … et tres jejunium legale`**: "and three the lawful fast". The number does not agree with its noun. Rendered as printed. The head speaks of a newly born infant killed by magic, and the canon speaks of abortion. Both are printed.
- **0409A–B CAPUT XXXI `Unum jejunium competit viduis et feminis. Majus competit uxori`**: *competit* = "befits". Rendered literally.
- **0409B `Uxor non deserat maritum suum, licet adulteretur`**: the subject of *adulteretur* is unexpressed. The English says "although he commit adultery" (the husband), which is the tradition's sense and the only one that gives the clause a point. ⚑ This is a real call: "she" is grammatically possible.
- **0409B `Uxor ad eucharistiam accedat antequam pariat, cum maxime ei necessarium sit`**: as printed.
- **0409B CAPUT XXXII `Si quis praemium aliquod magnum saltem diabolis immolet`**: "sacrifices some great reward at least to devils". *praemium* and *saltem* are both rendered literally; the sense is strained. The TEI's *immo' et* is a transcription garble, and the plate prints *immolet,* (patch filed).
- **0409B `quicunque inimicis assignatum cibum sacrificat`**: "food assigned to enemies". The head says *De immolatione inimicorum*. *inimici* here plainly means demons (compare *diabolis* just before), but the Latin says "enemies" and so does the English.
- **0409C `Quicunque frumentum urit in loco ubi mortuus est, in salutem vivorum, et masculi`**: "whoever burns grain in the place where one has died, for the health of the living, and of the male". *et masculi* is opaque, and *in loco* is what Wilkins's note says should be rendered "in the house". The note is carried as `[nt:]`, and the text translates *in loco* as printed. **`frumentum`**: the plate sets *fre-|mentum*. At 400 dpi the third glyph is ink-filled and cannot be read, and the chapter head on the same page sets *fru-|mentum*. **single-witness**; no marker, no patch. The English says "grain".
- **0409C–D CAPUT XXXIII `si Deo promittat quod post mariti sui mortem alium nolit`**: "wants no other". *nolit* is carried.
- **0409D `emendare deinde velit circa undecimum annum, postquam in mariti sui potestatem pervenerit`**: "about the eleventh year". Obscure, rendered as printed.
- **0409D `hoc est utrum illum mutet, vel non`**: *vel non* is carried ("or not").
- **0410A CAPUT XXXIV `et nesciat aliud jus praeter hoc`**: "knows no other law besides this". The negation in *nesciat* is carried in "no".
- **0410A `Quicumque sua sponte pejeret, et norit deinde quod perjurus sit`**: "of his own will … and knows afterwards". Deliberate perjury gets a lighter tariff (three or two winters) than oath-breaking on a relic (four winters). This is printed so.
- **0410A `Si quis in laici manibus juret, nihil obstat an cum astutia`**: "nothing hinders whether with cunning". Opaque. *nihil* is carried, and nothing is repaired. The tail, *nonnulli volunt ut cum jejunium suum fixerit*, is elliptical ("some wish that when he has fixed his fast") and is left elliptical.
- **0410B CAPUT XXXV `tertia vice suspenditur`**: "the third time he is suspended". Same treatment as 0405D.
- **0410B `Ita Romanus abit ad eucharistiam, nisi quod excommunicet eum qui nequeunt`**: "except that he excommunicates him who cannot". *eum* is singular and *nequeunt* plural (plate-confirmed). English "who cannot" has no number exponent, so this rendering hides the disagreement. It is recorded here: **single-witness**, so no `[sic:]` on this copy (Pattern 12(2) would otherwise apply). The *nisi* is carried. The tradition (Theodore) says rather that the Romans do not excommunicate those who abstain. The printed sentence may have lost a negative. **Declined for `[cj:]`**: the conjecture rests on an outside text, not on the printed context, and that is research, not translation.
- **0410B `In uno eodemque altari quotidie duas missas celebrare debes`**: "thou oughtest to celebrate two Masses daily". The second person singular is carried (Pattern 17). The tradition's sense is permissive ("thou mayest"), but *debes* is printed.
- **0410B–C `Qui non adest … non debet`; `non vult, non accedat`; `Non debet quis … non potest`**: every negative is carried.
- **0410C `eucharistiae gratia accedere`**: the plate has *gratia*, the TEI *gratiae* (patch filed). The English follows the plate: "for the sake of the Eucharist".
- **0410D `corpus consumpti hominis et mariti`**: "the body of a man departed and a husband". *consumptus* = dead, finished. *et mariti* is odd. Rendered literally.
- **0410D CAPUT XXXVII `Mulieres sub Brunonis regulis ad eucharistiam accedant, uti Basilius docebat`**: "under the rules of Bruno", rendered as printed per the brief. (The Theodoran parallel has women communicate *sub nigro velamine*, "under a black veil". OE *brūn* is "dark". That is noted here only; the English does not reconstruct.)
- **0410D `Apud Graecos uxores sacrificium immolare debebant, uti apud Romanos`**: "wives were to offer the sacrifice". *debebant* is imperfect. Rendered as printed.
- **0411A `deinde cum decimum obolum annuum solvimus, et hoc quadraginta dies ante Natale Domini`**: the Advent fast, "when we pay the annual tenth obolus", as printed.
- **0411A CAPUT XXXVIII head `De vulpibus …`**: "On foxes". The body never mentions foxes, but the head says it.
- **0411A `Pisces emi possunt, licet mortui occurrant`**: "Fish may be bought". One expects *edi*, "eaten", given the chapter's subject (*quae comedendae sunt*). *emi* is printed (plate-confirmed) and is a real word, so the English says "bought". Declined for `[cj:]`: "bought" is not a claim the canon argues against.
- **⭐ 0411A `neque quas accipiter momorderit, si mortuae inveniantur, non sunt edendae` — `[cj:]` FIRED.** Migne prints a double negative, *neque … non*. Rendered literally, the English says "nor are those which a hawk has bitten … not to be eaten". That asserts they may be eaten, which is the opposite of the rule the sentence continues (*aves … non sunt comedendae*) and of the Acts proof-text it adduces. This is the 8195 @1250B shape exactly (Migne's own *nec … non* double negative, Pattern 18 ✅ list), and the defect word is a negation (the 2026-08-15 extension). Both negatives are carried, and the gloss stands beside them: `[cj: *non sunt edendae*; read *sunt edendae* after *neque*, "nor are to be eaten"]`. Plate-confirmed on p. 212. The type is sound, so this is not a `[sic:]`: it is probably OE negative concord (*ne … ne*) carried into Latin.
- **⭐ 0411A–B Acts 15:29 — `[var:]` FIRED.** Migne prints, in italics, as a quotation (*ita exstat in Actibus apostolorum injunctum*), *Abstinete vos a fornicatione, et a suffocato, sanguine et idololatria.* The Vulgate (Acts 15:29) has *ut abstineatis vos ab immolatis simulacrorum, et sanguine, et suffocato, et fornicatione*. Migne's "idolatry" stands where the Vulgate has "things sacrificed to idols", in a chapter about which foods may be eaten. Order differs as well. The English renders Migne ("and idolatry"), and the marker gives the Vulgate. Plate-confirmed on p. 212.
- **0411B `Halices`**: "Herrings". *halec* = small fish or fish-sauce, and *halices* = herrings in medieval usage. *dirrhaea* = "diarrhoea". *(sanandam)*, Migne's parenthesis, is rendered in parentheses: "(to be healed)".

### Chunk 0003

- **0411B CAPUT XXXIX `ita occidantur antequam ad mel perveniant, et saltem ut non per noctem ibi habitent`**: as printed; the *non* is carried.
- **0411B `suffiatur cum thure`**: "let it be fumigated with incense" (*suffire*). A real word. Plate-confirmed.
- **0411B `Si quis impuris manibus cujuscunque generis tangat, vel canem …`**: "touches, of whatever kind, either a dog …". The object phrase *cujuscunque generis* is left hanging, as it is printed.
- **0411C `Theodorius dicebat quod nihil ei doleat`**: "it should grieve him nothing" (it does him no harm). *nihil* is carried. The plate has a full stop after *doleat*, and the TEI has a comma (patch filed). The English follows the plate.
- **0411C `Si quis bis confirmetur, et hoc sciat … si hoc nesciat`**: the paired tariffs (seven and three winters) are carried with the knowing/unknowing distinction the right way round.
- **0412A CAPUT XL `permittimus tamen ut non abjiciatur, licet comedi non debeat`**: both negatives are carried.
- **0412A `licet vetus de hoc non habeamus testimonium`**: "although we do not have old testimony about this".
- **0412A `Qui proprium sanguinem in saliva nesciens devocet`**: "draws down". *devocare* is a real word ("call down or away"); one expects *devoret*, "swallows". Plate-confirmed as *devocet*. **single-witness**. It is rendered by its literal sense, with no marker. The English is odd, not false.
- **0412B `si ante nesciverat, et postea sciat`**: rendered with *sciat*. The plate glyph looks like *sciet*, but on this copy *cantet* in the same line looks like *cantot*, so the vowel cannot be trusted.
- **0412B CAPUT XLI `Qui pro mortuo jejunat, hoc ei ipsi sit solatium, si mortuum non adjuverit`**: "if he has not helped the dead man". The *non* is carried.
- **0412B–C Sylvester canon `et nolumus ut … ejiciantur, et legem conjugalem ac Christi recte annuntient`**: grammatically *annuntient* is still inside *nolumus ut*, which would make the Latin say "we do not wish … that they rightly proclaim". The English keeps the same construction: "we do not wish that … be cast out, and rightly proclaim …". The ambiguity is the printed one.
- **0412C `nisi excipe, si omnia non sint quam certissime pura, loquatur septem linguis`**: "unless except, if all things are not as certainly pure as can be, let him speak with seven tongues". This does not construe. *nisi* and *non* are both carried; the sense (swearing by seven compurgators?) is not recoverable from the printed words.
- **0412C `nisi triginta et sex (testium) numero, et presbyter, quadraginta et quatuor numero sint`**: *(testium)* is Migne's parenthesis, rendered "(of witnesses)". "For" before "a presbyter" is not supplied.
- **0411 CAPUT I (second part) `quoniam Salvator dicit, si sacerdos nolit … quod animam illam ab ipso deinde requiret`**: this is Ezek. 3:18 / 33:8 (*sanguinem ejus de manu tua requiram*), not a saying of Christ. It is a roman-type paraphrase. **The address is a finding: "the Saviour" for Ezekiel.** No `[var:]` (paraphrase). *nolit* → "will not".
- **0412D CAPUT II `Quocunque die homo ad piam vitam revertitur, vivet, et non morietur`** (italic, "the Saviour says"): this conflates Ezek. 18:21/28 or 33:15 (*vita vivet, et non morietur*) with Ezek. 33:12 (*in quacumque die conversus fuerit*). Again it is attributed to "the Saviour" and is Ezekiel. **Paraphrase and conflation, not a quotation whose words diverge**, so no `[var:]`. The *et non morietur* matches the Vulgate. Logged so the decision is visible.
- **0412D `quod opinio esset hominis veram confessionem …`**: *hominis* is taken with *confessionem* ("a man's true confession"), not with *opinio*. Either is possible.
- **0412D `quia sacerdos nullam habet necessitatem illis hominibus veram confessionem denegandi`**: "has no necessity of denying". *nullam* is carried.
- **0413A CAPUT III `Furi necesse est ut sacerdos …`**: "For a thief it is necessary that the priest console a man of this condition". *Furi* (dative of *fur*) is plate-confirmed, and nothing about a thief follows. The sentence plainly wants something like *Fieri necesse est* or *Vere necesse est*. *Furi* is a real word with a grammatical slot, so it is rendered, not carried. **single-witness**, so no `[sic:]`. **Declined for `[cj:]`**: the English is absurd but asserts nothing the canon argues against, and no negation or correlative is at stake.
- **0413A `quod confessionem fecerit et eucharistiam perceperit`**: "that he has made confession and received the Eucharist". The tradition has "that he desired". As printed.
- **0413A CAPUT IV `desperatio haec gravius peccatum esse putatur quam peccata quae confiteri cogitabat, et quod jam negligit`**: the subject shifts from plural *homines* to singular *cogitabat / negligit*. Rendered as printed ("he was thinking … he now neglects").
- **0413B CAPUT V `Omnia mihi licita sunt, sed non mihi expediunt omnia`** (italic, "Paulus apostolus dicit"): 1 Cor. 6:12 (Vulg. *Omnia mihi licent, sed non omnia expediunt*). The words differ (*licita sunt*, *mihi* added), but the sense does not. **Divergent in wording, not material**, so no `[var:]`. The English renders Migne ("but not all things are expedient for me").
- **0413B–C `hoc est desiderium mundi, quod nihil iis conducat qui plenario illud committunt`**: as printed; *nihil* is carried.
- **0413C `ut non omittant peccata sua confiteri`**: the *non* is carried.
- **0413C CAPUT VI `Sanctus Isidorus, qui librum hunc composuit`**: printed so. It is rendered as printed and not corrected (authorities rule).
- **0413D CAPUT VII `quod indecorum sit … et nunquam cogitare de poenitentia, quam antea poenituit`**: *nunquam* is carried, inside the "unseemly" clause, as printed.
- **0413D `Qui Deo vult servire non debet occupari in mundanis negotiis`** ("sanctus Paulus dicit", roman): 2 Tim. 2:4 (Vulg. *Nemo militans Deo implicat se negotiis saecularibus*). **Paraphrase**: no `[var:]`. The address (Paul) is right.
- **0414A CAPUT VIII `similis sit omnino cani qui vomit, et deinde devorat`** ("Petrus dicit"): 2 Pet. 2:22 / Prov. 26:11. **Paraphrase**: no `[var:]`. The earlier allusion at 0403B (*cani qui devorat quod prius evomuit*) is unattributed paraphrase too.
- **0414A `non praesumat (tamen)`**: the parenthesis is Migne's and is kept ("let him not (yet) presume").
- **0414B CAPUT IX, head `De eo quod poenitenti per episcopi intercessionem remissio non detur`**: the head says remission is not given, and the canon says a bishop must not deny confession. The head is printed so and rendered with its *non*.
- **0414B `ut nullus homo eam assequi non possit`**: "that there is no man who cannot attain it". Both negatives are carried, and here the double negative gives the intended sense (everyone can), so no `[cj:]`.
- **0414B three scripture sayings in roman type**: *Cum peccator a peccatis suis ad poenitentiam convertatur, tunc sanus erit* (Ezek. 18/33 sense, attributed to "the prophet"); *Confitere injustitiam tuam, ut sis justificatus* (Isa. 43:26 *narra … ut justificeris* with Ps. 31:5 *Confitebor … injustitiam meam*, a conflation); *Quod cum Domino sit innumerabilis misericordia* ("the Psalmist": Ps. 129:7 *apud Dominum misericordia*). All three are **paraphrase**: no `[var:]`.
- **0414B `quoniam nemo vitiorum exspers est`**: *nemo* is carried.
- **0414C CAPUT X head `Deo eo`**: the plate has *De eo* (patch filed). The English head is unaffected.
- **0414C `non denegetur ei: si tamen … et licet hoc non plenario emendaverit`**: both *non* are carried.
- **0414C `portione sua bona utatur`**: "let him use his own good portion". *bona* is read as ablative, agreeing with *portione*. It could be accusative plural ("use his goods with his portion"), which is less natural.
- **0414C–D CAPUT XI**: the head says *nisi cum episcopum adire nequit* and the body says *et si ad episcopum pervenire nequeat*. Both are carried.
- **0414D `sanctus Augustinus dicit in alio loco`**: "in another place", with no prior Augustine citation in this part. As printed.
