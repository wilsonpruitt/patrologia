# Cruces — 11512 Wolbero, *Commentaria in Canticum canticorum*, chunks 0020–0024 (stint T05)

Columns 1070D–1089A. Plate: `raw/scans/pl195/patrologiaecursu0195mign.pdf`, pages 542–550 each opened once at 300 dpi, printed corner columns read first (542 = 1071/1072 … 550 = 1087/1088), text collated line by line and the foot read full width in the same visit; p. 541 opened for the 1070D lead-in only; p. 551 (shared with the next stint) read for 1089A. Two sites re-read at 500–600 dpi (1071D *se posuit*, 1088D *Ezechiele*/*seriem*). Record: `data/briefs/11512-PLATE-READS-0020.json`.

## Migne's foot notes

**None on any page 541–551.** Every foot was read full width; each page ends in running text. No `[cn:]` inserted in the Latin; `data/briefs/11512-NOTES-0020.tsv` is header-only. No numbering sequence to check, nothing unplaced, no asterisk- or letter-keyed note.

## Standing decisions (for merge-time reconciliation)

- *proportior* (1071B, 1071C, 1074D; also 0018 in T04's range) = **greater in proportion**.
- *Murenulas aureas faciemus tibi, vermiculatas argento* (Ct 1:10) = ***We will make thee golden murenulae, vermiculated with silver***. *murenula* stays italic Latin (Song rule case 2: the gloss derives it from *murena*, rendered "the moray"); *vermiculatas* = "vermiculated", because the gloss explains it *in modum vermicularum*.
- *monile / monilia* (Ct 1:9) = **necklace(s)**; Ct 1:9 = *Thy cheeks are beautiful as the turtle-dove's, thy neck as necklaces*. T04 (0015–0019) may have met Ct 1:9 first: reconcile at merge.
- *accubitus* (Ct 1:11) = **reclining**, not Douay's "repose", because the gloss runs *accubitus* / *accumbere* / *se inclinare* / *reclinatorium*: *While the king was at his reclining, my nard gave forth its odour.*
- Ct 1:12 follows T01: *A bundle of myrrh is my beloved to me, he shall abide between my breasts.* Ct 1:13 = *A cluster of Cyprus is my beloved to me, in the vineyards of Engaddi* (the gloss interprets *Cyprus* as *tristitia*, so the island name stays). Ct 1:14 follows T03: *Behold, thou art fair, my love, behold, thou art fair, thine eyes are doves'.* Ct 1:6 = *Lest I begin to wander after the flocks of thy companions* (*sodales* = companions, set against *amicus* = friend, 1086A).
- *pulchritudo genarum / colli* = beauty of the cheeks / of the neck; *praedicatio · incorporatio* = preaching · incorporation; *compunctio* = compunction; *intelligibilis · intellectibilis* = intelligible · intellectible (Boethian pair); *nardus pisticus* = pistic nard; *inedicibilis* = unutterable (T01's rendering).
- The chunk head is TEI's `## .` / `## . (cont.)`; carried as printed in our Latin. Plate p. 541 prints the Cologne page *59* followed by a run of five leader dots before *Axa quippe* (1070D); no heading stands there on the plate.
- Pattern 17: the sisters (1071D–1072B) are **you**; the Bridegroom to the bride (1085B ff.) is **thou**; Horace's *animum rege … tu compesce* is **thou**.

## Markers fired (all on plate-read columns)

- `[var:]` ×7: 1072A (2 Cor 6:16 / Lev 26:12), 1074C (1 Cor 5:5), 1076C (Ez 1:21), 1078C (Rom 9:28), 1079C (Prov 15:30), 1084D (Apoc 20:6), 1087D (Prov 27:3).
- `[sic:]` ×8: 1071D *se posuit*, 1074A *nemoriatur*, 1075D *ornament*, 1075D *sive*, 1077B *sponsio*, 1083B *basalmo*, 1085A *hotrum*, 1087C *genere*.
- `[cj:]` ×2: 1079A *esse non potest* (double negative), 1082B *voluit* (dropped negation).
- `[d:]` ×1: 1079C *et sponsus et sponsus*.

## The scripture divergence list (every span checked against `sources/vulgate/clementine-flat.txt` by chapter and verse)

**`[var:]` fired:**
- **1072A** Lev. XXVI; II Cor. VI printed *Inhabitabo in eis et inambulabo; et ipsi erunt mihi in populum et ego vero eis in Deum*. Vulg. 2 Cor 6:16 *inhabitabo in illis, et inambulabo inter eos, et ero illorum Deus, et ipsi erunt mihi populus*. Besides the conflation, the printed clause has no verb: *ego vero* ("I truly") where every form of the text has *ero* ("I will be"). Rendered "and I truly to them for God". Plate p. 542 reads *vero*.
- **1074C** 1 Cor 5:5 printed *Satanae in interitum carnis, ut* 63 *salvus sit in die Domini*: *spiritus* is absent (plate p. 543, with the Cologne number between *ut* and *salvus*), so the one saved is the man, not his spirit; Wolbero reads it that way (he is later re-incorporated).
- **1076C** Ez 1 printed *ibant pariter et rotae sequentes ea, et cum flantibus flabant et cum elevatis pariter elevabantur*: a conflation of Ez 1:19–21 whose middle clause reads *flantibus flabant* ("with those that blew they blew") where 1:21 has *cum stantibus stabant*. Plate p. 544 is clear. Wolbero's gloss is on *stant sive moventur*, so the printed verb is foreign to its own exposition.
- **1078C** Rom. IX printed *verbum abbreviatum et consummatum Dominus faciet super terram*; Vulg. Rom 9:28 *verbum enim consummans, et abbrevians in aequitate: quia verbum breviatum faciet Dominus super terram*. The gloss rests on the passive pair *consummatum … abbreviatum*.
- **1079C** *quidam sapiens: Fama, inquit, bona impugnat ossa* (roman on the plate, unlocated): Prov 15:30 *fama bona impinguat ossa*. Plate p. 546 reads *impugnat* ("attacks"); the gloss that follows (*nisi hujusmodi compositionis pinguedine repleatur*) needs *impinguat* ("makes fat").
- **1084D** Apoc. XX printed *Beatus est sanctus qui habet partem*; Vulg. Apoc 20:6 *Beatus, et sanctus, qui habet partem*. Plate p. 548 reads *est*.
- **1087D** Prov. XXVII printed *sed ira viri utroque gravior*; Vulg. Prov 27:3 *sed ira stulti utroque gravior* (also *Grave saxum et ponderosa arena* for *Grave est saxum, et onerosa arena*). The fool's anger has become every man's.

**Divergences NOT marked (abridgment, adaptation, allusion, synonym; one line each):**
- 1071C Apoc 14:3–4 (*canticum novum dicere et Agnum quocunque ierit sequi*): allusion.
- 1071D Ps 41:2–3 (cited *Psal. LXI*, Migne's locator): *Sicut cervus desiderat* for *Quemadmodum desiderat cervus*, *ad Deum vivum* without *fortem*.
- 1072B Lc 9:58 recast as indirect speech (*quod non habeat ubi caput reclinet*).
- 1073B 1 Cor 12:8 abridged (*Quia alii datur … alii sermo scientiae*). 1073C–D Ps 118:46, 48 agree. 1074A Ps 131:9 agrees; Ex 28:35 alluded to.
- 1074C Act 3:19 without *igitur*. 1074D 1 Cor 12:8–10 (located *II Cor. XII*) omits *alii operatio virtutum*.
- 1075D Mt 22:40 *in duobus praeceptis* for *in his duobus mandatis*. 1076A–1077C Ct 1:4, 1:8, 1:9, 1:10, 1:11 agree.
- 1078B *Unguentum nardi spicati pretiosi* located *Joan. XII*: it is Mk 14:3's wording (Jo 12:3 *nardi pistici pretiosi*); a harmonized quotation, and the gloss on *spicas* uses it. 1078B 1 Cor 12:31, 1078C Ps 62:6, 1078D Ps 118:96 agree. 1078C Rom 13:10 with *quia* for *ergo*, preceded by Wolbero's own clause.
- 1078D Mt 22:37–40 (located *Matth. XXI*) abridged, *tota lex* for *universa lex*, *praeceptis* for *mandatis*. 1078D, 1087D 1 Jo 4:8/16 agree. 1079A 1 Cor 13:4 agrees.
- 1079C 2 Cor 2:15 with *in omni loco* from 2:14: conflation. 1079D Jo 12:3 end agrees. 1080A Jo 1:1, 1:14 agree.
- 1081A the catalogue of perils and torments (2 Cor 11:26–27; Heb 11:36–37) is roman on the plate: paraphrase.
- 1082B Mt 27:25 agrees. 1083A 2 Cor 1:3 agrees. 1083D Rom 6:5 adapted (*mortis Christi* for *mortis ejus*, *fiant* for *erimus*).
- 1084B Gal 5:16 and 1084C Rom 8:13 agree. 1084C *Si commorimur et convivemus* (roman; 2 Tim 2:11 *si commortui sumus*): tense only.
- 1085D Jac 2:17 (roman) without *est*; Mt 25 lamps alluded to. 1085D Jo 15:15 abridged (*sed amicos* for *Vos autem dixi amicos*).
- 1086A Ct 1:6 agrees. 1086D Eph 4:31 omits *et indignatio*, *ab ea* for *a vobis*. 1087A Rom 12:18 as an infinitive. 1087A *malum in bonum vincat* (roman): allusion to Rom 12:21.
- 1087B 1 Cor 10:4 recast (*Christus enim petra est*); 2 Cor 7:10 recast; Mt 5:5 agrees; Lc 6:25 *quia plorabitis* for *quia lugebitis et flebitis* (synonym).
- 1087D Rom 5:5 recast; Is 11:2–3 list agrees; Jac 1:20 without *enim*; Prov 12:16 *Stultus* for *Fatuus*; Prov 27:4 agrees.
- 1088A Horace, *Epist.* I.2.59–61 and 62–63: not scripture, not collated; Migne lineates them and so does the English.
- 1088A *Spiritus quoque intellectus est* located *Isa. IX*: Wolbero's own sentence under a locator. 1088B *ut quod sibi non vult fieri alteri non faciat* located *Matth. VII*: the negative rule (Tob 4:16 form), paraphrase. 1088B Ps 10:6 agrees. 1088D Ps 23:8 (located *Psal. XXV*) agrees in the phrase quoted. 1089A 1 Cor 9:22 paraphrased (roman).
- Migne's wrong locators (*Psal. LXI*, *II Cor. XII*, *Matth. XXI*, *Jos. VIII* for Gideon) are kept verbatim.

## Column notes (plate and TEI agree unless stated)

- **1070D** (p. 541) The lead-in *59 ….. Axa quippe*: plate prints five leader dots, TEI four spaced dots; carried as our Latin has them.
- **1071A** *aut cum bono supernae patriae contemplatur, quae quia necdum adipiscitur*: Gregory's *Moralia* has *bona* (plural, agreeing with *quae*). Rendered literally, "contemplates by the good … which".
- **1071B** *quidquam sublunari globo, beatiore animo atque puriore substantia valet*: Boethius has *quidquid sub lunari globo*; as printed the clause has a second finite verb and does not construe. Rendered literally.
- **1071D** *familiaribus, ut credimus*: an adjective with no noun; rendered "as familiar things".
- **1071D** *quas beata solitudo … se posuit*: plate p. 542, read at 500 dpi, sets *se posuit* as two words with a full space; *quas* has no verb unless it is *seposuit*. `[sic: *se posuit*]`, sense "has set apart" beside it.
- **1072B** *in duo dividitur, hoc in praedicationem*: as printed ("this into preaching"), probably *hoc est in*.
- **1072C** *per collum ergo praedicati sancti*: rendered "the proclaimed saints"; perhaps *praedicatores*.
- **1073A** *incorporatis vero alia per conversionem*: *incorporatis* where *incorporatio* is wanted; rendered "of the incorporated".
- **1073C** *quem serenda capacis ingenii comprehendunt*: rendered literally "which they comprehend, to be sown, of a capacious wit"; perhaps *serena*.
- **1073C** *et divina habent gratia, ut*: ablative, rendered "have it also by divine grace, that".
- **1074A** *tintinnabula inserta habeat nemoriatur*: fused on plate p. 543. `[sic: *nemoriatur*]`, sense "lest he die" (Ex 28:35 *et non moriatur*).
- **1074B** *quasi immeritus repellerentur*: singular adjective, plural verb; rendered "as though an undeserving man, they were being repelled", so both numbers show.
- **1074D–1075A** *non quod in hoc aliarum gratiarum, quorumlibet habeat, qui unam habuerit*: as printed it says the holder of one grace has none of the others; the argument (*quilibet sanctus … pluribus ornetur virtutibus*) wants the reverse. It's rendered literally. Not a `[cj:]`: no negation or correlative was lost from the printed words, and the sense is obscure rather than false.
- **1075D** *hujus ornament decorem*: plate p. 544 prints *ornament* followed by a space (no final *i*), as the TEI. `[sic: *ornament*]`, sense "ornament".
- **1075D** *nempe sive charitate nulla virtus … esse … potest*: plate *sive* for *sine*. *sive* has no slot, and read as printed the clause would say virtue exists "or by charity". `[sic: *sive*]`, sense "without" (7a⁗: the preposition's force kept in plain words).
- **1077A** *eamdem formositatem perfecti non agnovit*: rendered "the same beauty of the perfect"; probably *perfecte*, which the next sentence prints (*perfecte non agnoverit*).
- **1077A** *fratres sui contra eum pugnaverint*: masculine *eum* for the bride; English has a gendered pronoun, so it's rendered "against him".
- **1077B** *ardentius sponsio inhaereat*: *sponsio* is nominative and *inhaereat* needs a dative (the subject is *ipsa*). `[sic: *sponsio*]`, sense "to the Bridegroom".
- **1077C–D** *Et est locus ab efficiente causa probetur*: no construction (a *quo* or *ut* seems lost); rendered literally.
- **1077D** *collatae in se gratia bonum*: *gratia* for *gratiae*; rendered "the good of the grace conferred".
- **1078B** *Charitas enim gratia est, quia omnibus praeponderat virtutibus*: the seven qualities of the nard root (*radice gravi, crassa, brevi, nigra et fragili, folio parvo densoque … aristas*) are expounded in order, so this first one should be *gravis* ("heavy … it outweighs"). The plate prints *gratia* in italic, as the TEI. Crux only.
- **1078D** *tribus constans syllabis et septem litteris*: *charitas* as printed has eight letters (*caritas* seven). As printed.
- **1078D–1079A** *nihil autem boni sine Deo esse non potest*: the double negative states that every good thing can exist without God, the opposite of the conclusion drawn from it. `[cj: *esse non potest*; read *esse potest*]` (the 8195 @1250B class).
- **1079A** *ut omnem proximi necessitatem suam putet, folio parvo densoque est*: comma, no stop, on the plate; kept.
- **1079C** *ille rex et sponsus et sponsus coelestis*: the plate prints the doubling. The runs are identical, so `[d:]` goes on the second.
- **1079D** *quia pedes Domini ungere, fuit divinitatis ejus celsitudinem … considerare*: *pedes* where the next sentence (*caput … divinitatem, pedes … humanitatem*) wants *caput*. Rendered literally.
- **1080A** our Latin *odoris hujus sua vitatem*; plate p. 546 prints **suavitatem** as one word. English "sweetness". TEI patch.
- **1080D** *succumbere] parata*: plate p. 546 has a tall stray sort after *succumbere*, like a closing bracket and not a comma; TEI has nothing. Not carried.
- **1081B** *quia pro ea ejus nomine*: as printed ("for it").
- **1081C** *mea commorabitur,, quia*: the plate shows two commas (italic and roman?); the English has one.
- **1081D** *et ore suam perpetuam sumunt*: *suam perpetuam* has no noun (*salutem*?); rendered "take their own perpetual".
- **1082B** *Et quia hujus medelam suscipere voluit, botri dulcedine caruit*: the Jewish people, which "abhors and despises this cluster" (1082D), is said to have **willed** the healing and so gone without the sweetness. The sense needs *noluit*. `[cj: *voluit*; read *noluit*, "was unwilling"]` (dropped negation, the 7561 @0648 class).
- **1082B** *de terra lacte et melle manente*: plate *manen'e*, with a worn *t* and the vowel *e*; the formula is *manante* ("flowing"). Rendered "abiding". Crux only.
- **1082C** our Latin *sicut mos est protantium*; plate p. 547 reads **portantium**. English "those who carry". TEI patch.
- **1083A** *Engaldi* beside *Engaddi*: name kept as printed.
- **1083B** *Ex basalmo autem misto*: plate p. 548 as the TEI. `[sic: *basalmo*]`, sense "balsam".
- **1083B** *et sacerdotalis suae imperialis dignitas confirmatur*: rendered literally, "the priestly, its own imperial, dignity"; perhaps *sive*.
- **1083C** *quia in illos profecto sit mihi cibus*: accusative for ablative; rendered "in those".
- **1084A** *sive impositionem manu[s]*: plate p. 548 shows *manu* then a blurred sort; TEI *manus*. Undecided, so no patch; English "the hand".
- **1084C** *conresurgant ei vivendo. justitiae cum eodem Apostolo*: full stop and lower-case *justitiae* on the plate; kept (Pattern 8).
- **1084D–1085A** *ut nardo … redolente et myrrha intimae mortificationis hostiam ibi vivam jam existentes atque per hotrum spiritualiter debriantem … dignos indicaverit adventu*: *hostiam* (sg.) beside *existentes* (pl.) and no expressed object for *dignos indicaverit*. It doesn't construe; rendered as closely as the words allow. *hotrum*: plate p. 548 as the TEI, so `[sic: *hotrum*]`, sense "cluster". *debriantem* is the medieval *debriare* and is rendered "inebriating" with no mark.
- **1085B** Cologne *75* is `* 75*` in the TEI (internal space); carried verbatim.
- **1085B** *meumque adjutorium quod tamen tibi non dixerat*: third person inside the Bridegroom's own speech (*defuerat*?); rendered literally.
- **1085C** *si unum et duobus dupliciter*: plate *et* (two sorts, not the blacked-out *e*); rendered literally.
- **1086A** *sed rerum probat qua id intentione fecerint*: no subject for *probat* (*exitus*?); rendered "he proves of things".
- **1087A** *ut extraneos … quam domesticos … diligat*: *tam* absent; rendered "as her own household".
- **1087B** *hoc est pro saeculari loco et laetitia*: probably *joco* ("jest"); rendered "worldly place".
- **1087B** *Super aquas sedere consuerit*: syncopated form beside *consuevit* (1086D); rendered normally.
- **1087C** *vel pro dilatione coelestis regni genere*: the seven dove-marks are re-expounded as infinitives (*non irasci, … sperare, [gemere], … intendere*) and the moan-for-song mark needs *gemere*. The plate prints *genere*, which has no slot. `[sic: *genere*]`, sense "to groan".
- **1088C** *quemdam sive qualitati competentem conversandi inveniat statum*: rendered literally; perhaps *suae qualitati*.
- **1088D** our Latin *sanctarum seriem. Scripturarum*; plate p. 550 (600 dpi) shows no stop after *seriem* (a speck sits before it). The English has no stop. TEI patch.
- **1088D** our Latin *in Ezechicle*; plate p. 550 at 600 dpi reads *Ezechiele* (the seventh sort has a crossbar). This is probable, not certain. English "Ezekiel" either way. TEI patch (probable).
- **Scan-wide:** this copy blacks out one-letter words (*a*, *e*, *o*), e.g. 1085A *resurgentis ■ morte*, 1085C *medium ■ duobus*. No one-letter word in this range bears on a scripture collation (the only italic one, 1085D Jo 15:15 *audivi a Patre*, is legible and agrees), so scan B wasn't consulted.

## TEI patches (plate vs our Latin)

- 1080A · *odoris hujus sua vitatem* → *odoris hujus suavitatem* · p. 546
- 1082C · *sicut mos est protantium* → *sicut mos est portantium* · p. 547
- 1088D · *sanctarum seriem. Scripturarum* → *sanctarum seriem Scripturarum* · p. 550
- 1088D · *et in Ezechicle* → *et in Ezechiele* · p. 550 (probable, 600 dpi)

## Lemma count

146 marked spans in the Latin of 0020–0024 (17 + 21 + 35 + 39 + 34), counted paragraph-bounded: no paragraph has an odd asterisk count, and there are no guillemets. That agrees with the 146 in `11512-lemmata-0020.txt`. The count includes the Cologne page numbers (*60*–*79*) and the italic locator *(Exod. VII-XIV)*.
