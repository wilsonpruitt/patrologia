# Cruces — 11512 Wolbero, *Commentaria in Canticum canticorum*, chunks 0035–0039 (stint T08)

Columns 1120B–1135D. Plate: `raw/scans/pl195/patrologiaecursu0195mign.pdf`, pages 566–574 each opened once at 300 dpi, printed corner columns read first (566 = 1119/1120 … 574 = 1135/1136), text collated line by line and the foot read full width in the same visit. p. 566 read for 1120B–D (my range starts at *Donec aspiret*); p. 574 read for 1135A–D, the right column belonging to the next stint. Record: `data/briefs/11512-PLATE-READS-0035.json`.

## Migne's foot notes

**None on any page 566–574.** Every foot was read full width. The only matter below the text is the signature *PATROL. CXCV* under the left column of p. 571 and the gathering number *36* under its right column. No `[cn:]` inserted in the Latin; `data/briefs/11512-NOTES-0035.tsv` is header-only. No numbering sequence to check, nothing unplaced, no asterisk- or letter-keyed note.

The query at 1127C, *concessus (an. concussus?)*, is an inline parenthetical in the running text on the plate (p. 570), not a foot note. Our TEI carries it as `[n: ( an. concussus?)]`, and the English carries that note verbatim at the same spot.

## Standing renderings (for merge-time reconciliation)

- Ct 2:17 *Donec aspiret dies et inclinentur umbrae* = ***Till the day breathe, and the shadows decline*** (1120B). T07 (0030–0034) may have met the verse first: reconcile at merge.
- *Revertere: similis esto, dilecte mi, capreae, hinnuloque cervorum super montes Bethel* = *Return: be thou like, my beloved, to a roe, and to a young hart upon the mountains of Bethel*. *caprea* = roe, *hinnulus (cervorum)* = young hart, *cervi* = harts, following T06's Ct 2:7/2:9 in 0031. Wolbero's own *capreae aut hinnulo* = "to a roe or to a young hart".
- Ct 2:16 *dilectus meus mihi et ego illi* = *my beloved to me and I to him*; *qui pascitur inter lilia* = *who feedeth among the lilies*.
- *lectulus* (Ct 3:1, 3:7) = **little bed**. The diminutive is kept because the gloss works on the object (*requies*, *lectulus malae securitatis*, *lectulum Salomonis*).
- *genitrix* (Ct 3:4) = **her that bore (me)**, set against *mater* = mother, because 1125B distinguishes the two (*dicamus genitricem quoque ejus esse, secundum hoc quod eum generat*).
- Ct 3:5 follows T06's Ct 2:7 exactly: *I adjure you, O daughters of Jerusalem, by the roes and the harts of the fields, that you stir not up nor make the beloved to awake, till she herself please.*
- Ct 3:6 *virgula fumi* = **a little rod of smoke**, not Douay's "pillar", because the gloss rests on the rod (*Quasi virgula fuit, quia recta et rigida*, 1132B; *virgam aequitatis*, 1133C). *ascendit* = **ascendeth**, because the gloss is on *ascensus*. *universi pulveris pigmentarii* = **of the whole powder of the perfumer**, singular, because the gloss reads it as one universal powder (*universus pigmentarii pulvis … charitas*).
- *dilectio* = love, *charitas* = charity, *dilectus / dilecta* = the beloved (1122D *inter dilectum et dilectam* = "between him who is beloved and her who is beloved").
- *solitudo* = solitude throughout, including in the proof-texts (Is 35:1, Jer 50, Ps 54:8), because 1129C–1131D is an exposition of *solitudo corporis / animi*. *desertum* = desert; Mt 23:38 *deserta* = "deserted".
- *continens / continentia* (1130A–B) = the continent one / continence. English "continent" keeps the Latin's double sense (holding in / self-restraint) and does not choose between them.
- *concorporatio · concorporalis · consacramentalis* (1134B–1135A) = concorporation · concorporal · consacramental.
- `VERS. n.--` = `VERSE n.--` (orchestrator's convention).
- Pattern 17: the sisters (1127B–1129C) and the watchmen (1124B) are **you**; the bride to the Bridegroom (1122A–C) is **thou**; Mt 5:23–24 and Mt 6:6 are **thou**, Jo 14:27 **you**.

## Markers fired (all on plate-read columns)

- `[var:]` ×2: 1121B (Ct 2:17 *Bethel*), 1127A (Jo 12:35 *Currite*).
- `[sic:]` ×5: 1120C *dicautur*, 1123C *praevale*, 1123D *gradiuntu*, 1124B *suscitatur*, 1129A *testitudinis*.
- `[cj:]` ×3: 1124D *pro determinatione* (dropped *non*), 1125D *operitur* (for *aperitur*), 1133B *quanto animus* (stranded correlative).
- `[d:]`, `[ed:]`: none.

## The scripture divergence list (every span checked against `sources/vulgate/clementine-flat.txt` by chapter and verse)

**`[var:]` fired:**
- **1121B** Ct 2:17 printed *super montes **Bethel*** (and again at 1122A and 1122C); the Clementine has *super montes **Bether***. The gloss depends on the printed name: *super montes Bethel, id est domus Dei quae est Ecclesia* (1122B). Marked once, at the verse lemma. Plate p. 567 reads *Bethel* at all three places.
- **1127A** Jo 12:35 printed *Currite dum lucem habetis ne vos tenebrae comprehendant*; Vulg. *Ambulate dum lucem habetis, ut non vos tenebrae comprehendant*. Wolbero adduces it in a chain of proof-texts for running and leaping (*capreae et cervi … quosdam saltus … mentis agilitatem*, directly after 1 Cor 9:24 *Sic currite*), so the printed verb carries the argument. Plate p. 570.

**Divergences NOT marked (abridgment, adaptation, word order, allusion, spelling; one line each):**
- 1120C 1 Cor 15:28 agrees. 1120D, 1123A Ct 2:16 agrees.
- 1120D *Ego ero illis in patrem et ipsi erunt mihi in filios et filias* (roman, located *II Reg. VII*): 2 Rg 7:14 put into the plural and conflated with 2 Cor 6:18. Paraphrase.
- 1121A *Et ego mundis intersum cogitationibus* (located *Prov. VIII*): not in Prov 8 or anywhere in the Clementine. Allusion or a non-Vulgate saying. Not collatable.
- 1121A Mt 5:8 agrees. *donec dies est* is Wolbero's recasting of the lemma.
- 1121B Eph 5:9 (roman, unlocated) agrees.
- 1121C *cum fieret vox supra firmamentum, stabant et submittebant alas suas* (roman, located *Ezech. I*): Ez 1:25 has *super firmamentum*. Roman type, paraphrase within Gregory's exposition.
- 1122A Ct 2:17 recast: *Revertere, dilecte mi, similis esto capreae aut hinnulo cervorum* (word order, and *aut hinnulo* for *hinnuloque*). This is the bride's speech in Wolbero's own reuse; *Bethel* is marked at the lemma.
- 1122A 1 Cor 13:12 with *enim* woven in. 1122D, 1 Jo 4:8/16 *Deus charitas est*: spelling only.
- 1123B–1126C Ct 3:1–5 agree (*genitricis* for *genetricis* is spelling). The second lemma at 1124C swaps the pronouns (*tenui illum … introducam eum* against *tenui eum … introducam illum*); English "him" either way.
- 1123D Mt 7:13–14 (roman): paraphrase. 1124A Lc 12:37 agrees (located *Luc. XXII*, Migne's locator kept).
- 1125A *domus Matris et cubiculum genitricis*: Wolbero's nominal recasting of Ct 3:4.
- 1126D Col 3:1–2 conflated in reverse order (*Quae sursum sunt sapite … quae sursum sunt quaerite*). Phil 3:20 agrees.
- 1126D Heb 4:11 *Festinate ingredi* for *Festinemus ergo ingredi* (second person for first, *ergo* dropped): person only; the exhortation stands.
- 1126D–1127A *Festinantes et properantes in occursum Domini* (located *Amos. IV*): Am 4:12 *praeparare in occursum Dei tui*; the wording is closer to 2 Pet 3:12 *exspectantes et properantes in adventum diei Domini*. Allusion.
- 1127A 1 Cor 9:24, Lc 21:28 agree. Ps 83:6–7 agrees (*lacrymarum* spelling).
- 1127B *si Spiritu ambulatis, et facta carnis mortificastis* (located *Rom. VIII*): Gal 5:16 *Spiritu ambulate* and Rom 8:13 *si autem spiritu facta carnis mortificaveritis* conflated and put into the indicative perfect as an address to the sisters. Gal 5:17 agrees.
- 1128A–B Ez 3:12 *post vos* for *post me*: adapted to the sisters (Migne sets *post* in italic and *vos* in roman). Agrees otherwise.
- 1127C 4 Rg 3:13 *Quare congregavit hos tres reges ut traderet eos in manus Moab?* omits *Dominus*, so the verb has no expressed subject; rendered "Why hath he gathered". 4 Rg 3:15–16 *et dixit* for *et ait*, *Haec dicit Dominus* dropped: abridgment.
- 1128D, 1129B Horace, *Ars poetica* 343 and 355–356: not scripture, not collated. Migne sets *Omne tulit punctum* as its own indented line; our Latin carries it inline after *Flacci:*, and the English follows our Latin's paragraphing (layout only, no rebuild needed for the sense). The two lines at 1129B are lineated in both.
- 1130C Ps 64:13 agrees. 1130D Is 41:18 *in stagnum aquae* for *in stagna aquarum* (singular); Wolbero's gloss repeats the singular. Not material.
- 1130D Is 35:1 agrees in words; the plate punctuates *Laetabitur deserta, et invia et exsultabit solitudo*, and the English follows that comma.
- 1131A Mt 23:38 without *Ecce*. 1131A Lam 2:2 (located *Thren. II*, introduced *in Jeremia*): the Clementine's *nec pepercit omnia speciosa Jacob: destruxit in furore suo muntiones* is repunctuated and cut so that *omnia speciosa Jacob* becomes the object of *destruxit*. The printed words are all in the verse; the sense (the Lord destroyed Jacob's beauty) is not reversed. Not marked.
- 1131B *Terra in solitudine redigetur* (located *Jer. L*): Jer 50:13 *redigetur tota in solitudinem*. Paraphrase.
- 1131C Ps 54:7 without initial *Et*; Ps 54:8–9 agree. 1131C Mt 4:1 alluded to.
- 1131D Mt 6:6 *Cum orabis, intra in cubiculum, et clauso ostio ora Patrem tuum* for *Tu autem cum oraveris, intra in cubiculum tuum … in abscondito*: abridged.
- 1132C–D Rom 8:38–39 printed *Certus sum quod neque vita, neque mors* for *Certus sum enim quia neque mors, neque vita*, and *creatura aliqua* for *creatura alia*; *seperare* is a medieval spelling (plate p. 572). The inversion of life and death is noted here; the gloss does not turn on it.
- 1132D Rom 5:5 agrees. 1133A 1 Cor 13:4–7 agrees except that the second *Caritas* is not repeated.
- 1133C Rom 8:18 *quia non sunt* for *Existimo enim quod non sunt*. Ps 50:19 with *enim*. 1133D Ps 21:7 without *autem*. Ps 105:23 *in conspectu Dei* for *in conspectu ejus*. Ex 32:31–32 agrees; Migne prints a question mark, carried.
- 1133D *canem se mortuum et pulicem* (located *I Reg. XXIV, XXVI*): allusion. 1134A *minimum se apostolorum* (located *II Cor. XV*, Migne's wrong locator for 1 Cor 15:9, kept); Rom 9:3 alluded to.
- 1134A Ct 3:7 agrees.
- 1134C *Caput enim Ecclesiae Christus, ipsa vero corpus Christi* (located *I Cor. XI*): allusion to 1 Cor 11:3 / 12:27 / Eph 5:23.
- 1134D Jo 6:57 *carnem meam … sanguinem meum … in eo* for *meam carnem … meum sanguinem … in illo*: word order and pronoun only.
- 1135B Mt 5:23–24 agrees except that *ergo* is dropped. 1135C Jo 14:27 printed *Pacem meam do vobis, pacem relinquo vobis*, the two clauses in reverse order. Not material.

## Column notes (plate and TEI agree unless stated)

- **1120C** *ut hoc ipsum quod sunt aliorum dicautur*: plate p. 566 prints *dicautur* (the *n* set as *u*). It has no form. `[sic: *dicautur*]`, sense "they are said" beside it.
- **1120C** *ubi ipse in me … et ego in eo … pascantur*: plural verb for the two subjects; rendered "shall be fed".
- **1121A** *fugato caligine*: masculine participle with feminine *caligo*. Gender, no English exponent (Pattern 9).
- **1121C** *Huic enim de sanctis animalibus scriptum est*: the passage is Gregory's (*Moralia*), where *Hinc* is expected. The plate prints *Huic*; rendered literally, "For to this".
- **1121C** *qualitate*: plate p. 567 has a broken sort (*qualita* followed by a damaged letter); TEI's full word is not in doubt.
- **1122A** *veluti servorum hinnulus*: plate p. 567 prints *servorum* ("of servants") in a sentence built on *hinnulus cervorum* ("of harts") twice over. Rendered literally, "like a young hart of servants". *cervorum* is the obvious reading. Crux only: a real word, and the English is odd rather than false.
- **1122C** *Quo enim velocior potuit saltus tuus … quam una hora omnium linguarum scientiam dare.*: a rhetorical question closed with a full stop on the plate; kept (Pattern 8).
- **1122C–D** the plate's *cucurri ti* and *ed minime* are worn sorts where the TEI has *cucurristi* and *sed*; the letters are visible in outline. No patch.
- **1123C** *ut quod per se intelligere non praevale*: plate p. 568 prints *praevale* followed by a space and comma. `[sic: *praevale*]`, sense "does not prevail" (the *non* stands outside the marker).
- **1123D** *pauci vero qui per angustam viam gradiuntu*: plate p. 568 as the TEI, *gradiuntu* before the locator. `[sic: *gradiuntu*]`, sense "walk".
- **1123D** our Latin *allegoriam quoque quae est quasi augusta via*; plate p. 568 reads **angusta**. English "narrow". TEI patch.
- **1124B** *Tales ergo vigiles dilecta cunctabunda suscitatur, dicens*: *suscitatur* ("is roused") is passive, and it has an accusative object and introduces a question. *sciscitatur* ("questions") is the verb the sentence needs. A real word with no grammatical slot (the *Pecte* class), so `[sic: *suscitatur*]` with the sense "questions" beside it.
- **1124D** *hujus gratiae participium, et virtute diffusae, in se per Spiritum sanctum charitatis*: *diffusae* agrees with *gratiae* but the clause does not construe cleanly. Rendered as closely as the words allow: "the participation of this grace, and, by virtue, of it diffused in herself".
- **1124D** *Nam dictio ista donec pro determinatione, sed pro sempiterno posita esse intelligi debet*: plate p. 568 has no *non* (the line reads *pro determinatione, sed pro sempiterno posita esse*). As printed, the page says the *donec* of Ct 3:4 is meant as a limit, and the clause that follows (*ut ultra a mente nostra decidere non possit*) and the *sed* both say the opposite. This is the dropped-*non* of a *non … sed* pair, the 7561 @0648 class. `[cj: *pro determinatione*; read *non pro determinatione*, "not for a limit"]`.
- **1124D** *meo illum et aliorum sensui miserendo*: rendered literally, "pitying him to my sense and to that of others"; the construction wants *inserendo* ("implanting him in"). Crux only.
- **1125A** *domus namque quaeque … in qua non tantum Dominus, sed et tota familia intrat*: capital *Dominus* on the plate, though the sense is the master of a house; rendered "the Lord" as printed.
- **1125C** *et qui adhuc altera … investigare … possunt*: *altera* ("other things"), perhaps for *altiora* ("higher things"). Rendered literally.
- **1125D** *quia eis subtilitas … et quaedam arcana discussio sacramentorum divinorum ex secreto erudientis Ecclesiae operitur*: *operitur* = "is covered, hidden", in a sentence that explains why the beloved is **shown** to the great alone (*Unde eis tantum dilectus in cubiculo genitricis ostenditur, quia eis … operitur*). As printed, the reason given is that the secrets are hidden from them, the reverse of the claim. `[cj: *operitur*; read *aperitur*, "is opened"]`. Plate p. 569 prints *operitur* clearly.
- **1125D** *Post autem ista dilectae inquisitio, inventio et introductio, hoc etiam modo accipi, ut …*: no finite verb (*potest*?). Rendered as printed, a sentence without a main verb.
- **1126A** *quam est aliter dicere mundum istum*: rendered "which is otherwise to say this world".
- **1127D** *Nam quia humilitati vestrae videbatur … utile ac necessarium indicatis*: present *indicatis* in a past frame; rendered literally, "you indicate".
- **1128C** *excessum meum facilem fore aestimavi*: "that my excess would be easy". Literal.
- **1129A** *saxa movere sono testitudinis*: Horace's line (*Ars* 395) has *testudinis*. Plate p. 571 prints *testitudinis*, a non-word. `[sic: *testitudinis*]`, sense "of the lyre".
- **1129D–1130A** *Ascensus quippe est corporis ascensus et cordis* ends col. 1129 with no stop, and col. 1130 opens a new paragraph *Desertum Ecclesia gentium; desertum Synagoga …*: the sentence on ascent is never finished and the list of the five deserts begins without a verb. Plate p. 571 shows exactly this (the column ends at the page signature; the next opens with the Cologne *125*). **Migne prints no note here.** Rendered as printed: the English sentence stops where the plate stops, and the list is rendered with its implied "is". Something has probably fallen out in Gravius's or Migne's copy.
- **1130A** *vero gratia mundus deseret se continentem*: *vero gratia* ("but by grace") where *verbi gratia* ("for example") would suit the sentence better. Rendered literally. *deseret* is future; the plate's *dese-|?et* is clipped at the left edge, and the TEI's *deseret* is taken.
- **1130C** *noncupentur*: a medieval spelling of *nuncupentur*; rendered "is named" (Pattern 9).
- **1130D** *doctrinae postmodum rivos emanere fecit*: *emanere* for *emanare*. The spelling is rendered "to flow forth" (Pattern 9, a vowel variant).
- **1132B** *Novem facti, cum pro orthodoxa fidei integritate servanda … perpessi sunt, myrrham fumantis fidei … emiserunt*: plate p. 572 prints *Novem facti,* ("nine made"). The subject should be the martyrs of the persecuted Church (*Nam et facti*? *Nonnulli*?). No reading is certain. Rendered literally, "Nine made".
- **1132C** *miraculorum acerbitate excaecavit*: "by the bitterness of miracles". Literal.
- **1132C** *in cultu Dei et facta religione ferventes*: rendered "in religion put into deed".
- **1133A** *quaecunque ultima, et de toto corpore boni munitissima fuerit virtus, haec sit charitatis atomus*: *munitissima* ("most fortified") where an atom of powder wants *minutissima* ("smallest"), the word Wolbero uses at 1133C–D (*in minutissimum pulverem*, *Minutissimo … pulvere*). Rendered literally. Crux only: odd, not a claim against his argument.
- **1133B** *quia quanto animus circa exteriora occupatur, et quanto magis cogitationum inutilium frequentia deseritur, tanto magis divinitatis amore … subvehitur*: plate p. 573 has no comparative in the first *quanto* clause, so as printed the soul is raised to God **the more it is occupied with outward things**, against 1131D (*quanto minus ea quae mundi sunt cogitat, tanto magis*) and the whole exposition of the desert. The answering *tanto magis* is printed and the first member's comparative is not: the stranded-correlative class (11535 @1231B). `[cj: *quanto animus*; read *quanto minus animus*, "the less the soul"]`.
- **1133D** *quando per valde humiliati cordis confractionem in summis virtutibus positus*: masculine *positus* with no expressed subject; rendered "one set in the highest virtues".
- **1134A** *ut magis effugiat animos demirantium quam teneatur consideratione imitari*: rendered as closely as the words allow.
- **1134B** *lectulum Salomonis* [1134B] *hujus*: the column anchor falls between *Salomonis* and *hujus*; the English puts *hujus* ("this") before the lemma and keeps the anchor after it.
- **1135A–B** *aliquibus ad exitum provenit* / *quod nulli ad exitum … proficit*: *exitus* ("end, departure") where *exitium* ("destruction") is the usual pairing with *vita* and *salus*. Rendered "to their end" as printed.
- **1135B** *quicunque de eo participantur*: deponent use of *participo*; rendered actively.
- **1135D** *illo veniente, et re incorporante qui reconciliavit nos*: plate p. 574 spaces *re incorporante* as two words, as does the TEI. It is either *re* (ablative of *res*, the *res sacramenti* of 1135A–C) or a split *reincorporante*. Rendered as two words, "incorporates in reality". Crux only.
- **Scan-wide:** this copy blacks out most one-letter words and some two-letter ones (1120D *■ converso*, 1123B *requies ■ tranquillitas*, 1130A *dicitur ■ deserendo*, 1131D *magis ■ carnalibus*). None bears on a scripture collation or a reading in this range (the italic *a pusillanimitate* at 1131C prints clearly), so scan B was not consulted.

## TEI patches (plate vs our Latin)

- 1123D · *quae est quasi augusta via* → *quae est quasi angusta via* · p. 568

## Lemma count

103 marked spans in the Latin of 0035–0039 (19 + 27 + 7 + 26 + 24), counted paragraph-bounded: no line has an odd asterisk count, and there are no guillemets. That agrees with the 103 in `11512-lemmata-0035.txt`. The count includes the Cologne page numbers (*114*–*131*), the head *123* and the two *Continuatio.* heads.
