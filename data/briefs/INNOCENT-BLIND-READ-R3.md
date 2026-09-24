# Innocent I blind read, R3: 7090 chunks 0012–0017

Reader R3, 2026-09-24. Every sentence of both columns was read, notes included: Ep. XVI, the Monitum to Ep. XVII §§1–8, Ep. XVII with both chapter lists and the inscription, Ep. XVIII, the Monitum to Epp. XIX–XXI, and Epp. XIX, XX and XXI as far as 0544A. I checked each `[cn:]` against its `[nt:]` twin for content, and checked the key sequence per page: 519/520 b–j, 521/522 a, 525/526 a–b, 527/528 a–h, 529/530 a–j, 531/532 a–g, 533/534 a–f, 535/536 a–h, 537/538 a–n, 539/540 a–c, 541/542 a–h, 543/544 a–f. No gaps.

I read the plate (`raw/scans/pl020/pl020.pdf`, p = (col+11)/2) only to settle my own candidates, on pp. 266, 270, 274, 275 and 276. The cruces were opened only after all the findings below had been formed.

## Findings

### F1. *Novatianos* rendered "Navatians"
- **7090, chunk 0012, col 0522A** (Monitum §3). **Class 5.**
- **Latin:** `Hac de causa Nicaena synodus Novatianos in suis honoribus recipiendos judicaverat.`
- **English now:** `For this cause the Nicene synod had judged that the Navatians were to be received in their honours.`
- **Proposed:** `For this cause the Nicene synod had judged that the Novatians were to be received in their honours.`
- **Why:** The plate (p. 266, right column) prints *Novatianos* here. The misprint *Navatianos* comes only six lines later, in *erga Navatianos*. The English carried the misprint back onto the correctly printed word, so Migne's slip now appears twice in the English.
- **Confidence:** certain. I read the plate.
- **In the cruces?** No. cruces-0012 logs the second word (*Navatianos*, "rendered as printed"), and says outright that it stands "beside *Novatianos* elsewhere". It does not record that this *Novatianos* was also turned into "Navatians".

### F2. A sentence of Innocent's letter is left in Latin in the English
- **7090, chunk 0017, col 0541A** (Ep. XIX §1). **Class 4.**
- **Latin:** `… censiti fuerant nomine. [n: (Habeo summam votorum meorum, quod antiqui naevi purgatio tuis temporibus tuisque meritis praerogatur.)] Quorum etiam …`
- **English now:** `… under the name of the bishops Paulinus and Evagrius. [n: (Habeo summam votorum meorum, quod antiqui naevi purgatio tuis temporibus tuisque meritis praerogatur.)] Of whom I judged …`
- **Proposed:** `… under the name of the bishops Paulinus and Evagrius. [nt: (I have the sum of my wishes, in that the cleansing of the ancient blemish is bestowed in thy times and by thy merits.)] Of whom I judged …`
- **Why:** On the plate (p. 276, left column top) this is a parenthesised roman sentence *in the running text*, not a citation. The rubric's *summa votorum potitus* echoes it. The chunker wrapped it in `[n:]` because of the parentheses, so the English reader meets a Latin sentence of the letter. Pattern 15 allows `[n:]`→`[nt:]` at the same index. The cleaner fix is a source patch that drops the `[n:]` wrapper in the Latin, with the sentence then translated inline in parentheses.
- **Confidence:** certain. I read the plate.
- **In the cruces?** No.

### F3. Who the letters of communion were sent to is inverted
- **7090, chunk 0017, col 0544A** (Ep. XXI). **Class 2.**
- **Latin:** `Unde has ad praestantissimum fratrem et coepiscopum nostrum Alexandrum reddendas tuae transmisimus unanimitati:`
- **English now:** `Wherefore we have sent these, to be delivered to our most excellent brother and fellow bishop Alexander, to thy unanimity:`
- **Proposed:** `Wherefore we have sent these to our most excellent brother and fellow bishop Alexander, to be delivered to thy unanimity:`
- **Why:** *ad Alexandrum* goes with *transmisimus*, and *reddendas* with *tuae unanimitati*. The letters went to Alexander, who was to hand them to Acacius. Coustant's note c on this same letter says so explicitly: *litteras communionis … non ad Acacium ipsum, sed ad Alexandrum nonnisi certis conditionibus illi reddendas misit*. The same sentence then has Acacius confess *apud mediatorem nostrum … Alexandrum*. The English reverses the route.
- **Confidence:** probable, strong. The Latin word order allows either parse, and the note decides it.
- **In the cruces?** No.

### F4. *Adgaudere … fraternitatem tuam* (acc. + inf.) is not rendered as a clause
- **7090, chunk 0017, col 0543C** (Ep. XXI opening). **Class 3.**
- **Latin:** `Adgaudere litteris fraternitatem tuam de receptis Paulini vel Evagrii episcoporum clericis populisque et de restitutis Elpidio atque Pappo coepiscopis percensuimus,`
- **English now:** `We have gone through the letters of thy fraternity rejoicing over the reception of the clerics and peoples of the bishops Paulinus or Evagrius, and over the restoration of the fellow bishops Elpidius and Pappus,`
- **Proposed:** `We have gathered from thy letters that thy fraternity rejoices over the reception of the clerics and peoples of the bishops Paulinus or Evagrius, and over the restoration of the fellow bishops Elpidius and Pappus,`
- **Why:** *fraternitatem tuam adgaudere* is the object clause of *percensuimus*. As it stands, "rejoicing" can be read as modifying "we", which makes Innocent the one rejoicing.
- **Confidence:** probable.
- **In the cruces?** No.

### F5. *quorumcumque* read as "whatever"
- **7090, chunk 0016, col 0537A** (Ep. XVII §15). **Class 3.**
- **Latin:** `Exstinguite, quaeso, ab illo praedictisque quorumcumque videtis animosas ac non justas aemulationes,`
- **English now:** `Extinguish, I ask, from him and from those aforesaid, whatever spirited and unjust [0537B] rivalries you see,`
- **Proposed:** `Extinguish, I ask, from him and from those aforesaid, the spirited and unjust [0537B] rivalries of whomsoever you see,`
- **Why:** *quorumcumque* is a masculine genitive plural, "of whomever", governing *aemulationes*. It is not *quascumque*. The rivalries belong to persons, and the English loses that.
- **Confidence:** probable.
- **In the cruces?** No.

### F6. Coustant's "no one ever alleged it" is garbled into a quasi-affirmation
- **7090, chunk 0016, col 0537A–B**, note a (`[nt:]` twin). **Class 3, with a polarity edge.**
- **Latin:** `quod valde durum adversus hominem a quo nec contra fidem quidquam dictum, nec crimen ad mortem admissum esse ullus umquam vel jactavit vel finxit.`
- **English now:** `which was very harsh against a man by whom nothing was said against the faith, and no crime unto death was committed, as anyone ever either bandied about or feigned.`
- **Proposed:** `which was very harsh against a man of whom no one ever either bandied about or feigned that anything had been said by him against the faith, or any crime unto death committed.`
- **Why:** *nec … nec … ullus umquam … jactavit vel finxit* means that **no one ever** alleged or invented it. "as anyone ever … bandied about" drops the negative force of *ullus* under *nec…nec*. It can be read as saying that people did allege these things.
- **Confidence:** probable.
- **In the cruces?** cruces-0012 l. 97 records a plate replacement of this note's text (`… vel jactavit vel finxit. Replaced.`). The English rendering is not discussed there.

### F7. *proxima epistola* rendered "the next letter" when it means the one just before
- **7090, chunk 0016, col 0538A**, note i (`[nt:]` twin). **Class 5 (points at the wrong document).**
- **Latin:** `In proxima epistola, ut et in epistola 165 Chrysostomi pariter ad Macedonas scripta, Maximiano adjungitur Eugenius.`
- **English now:** `In the next letter, as also in Chrysostom's epistle 165, likewise written to the Macedonians, *Eugenius* is joined to *Maximiano*.`
- **Proposed:** `In the letter immediately preceding, as also in Chrysostom's epistle 165, likewise written to the Macedonians, *Eugenius* is joined to *Maximiano*.`
- **Why:** *MAXIMIANO, EUGENIO* stand side by side in the inscription of Ep. XVII (chunk 0014, 0526D), the letter just before. Ep. XIX, the next letter, names neither. "Next" sends the reader forward to a letter that does not contain the pair.
- **Confidence:** probable.
- **In the cruces?** No.

### F8. The note's Latin reads *ABFERRI*, but the plate reads *AUFERRI* (the Latin transcription is wrong, not the English)
- **7090, chunk 0015, col 0530A**, note f. **Class 4 (the `[cn:]` and its twin differ).**
- **Latin now (`[cn: f | …]`):** `… quia per baptismum, totum quod vetus homo gesserit putatur ABFERRI.]`
- **English:** `… *quia per baptismum, totum quod vetus homo gesserit putatur AUFERRI*, persuades …`
- **Proposed:** correct the **Latin** row in `data/plate-notes/7090.tsv` to `AUFERRI` and re-chunk. The English stays as it is.
- **Why:** The plate (p. 270, right-column foot) prints `putatur AUFERRI`, which matches the text's *auferri* at §6. The twin looked like a silent repair of the Latin, but it is the Latin note that was mis-transcribed.
- **Confidence:** certain. I read the plate.
- **In the cruces?** No.

### F9. *quod quia … efficitur*: the causal *quia* and the relative link are dropped
- **7090, chunk 0015, col 0530A–B** (Ep. XVII §6). **Class 4 (small).**
- **Latin:** `non potest agenti deperire, quod quia ex Dei mandato efficitur, non potest dici peccatum:`
- **English now:** `cannot [nt: …] perish for the doer; what [0530B] is brought about by God's command cannot be called sin:`
- **Proposed:** `cannot [nt: …] perish for the doer; and that which, [0530B] because it is brought about by God's command, cannot be called sin:`
- **Why:** The English loses *quia*, which is the step in Innocent's argument: marriage cannot be called sin *because* God commands it. The English turns this into a general statement.
- **Confidence:** probable.
- **In the cruces?** No.

## Lesser renderings (no class 1–5, but worth a pass)

- **L1. *laudatus / laudat / laudato*, "praised" where the sense is "cited" or "aforementioned".** These are Coustant's citation idioms:
  - 0012 Monitum §1: `laudatis epistolis` → "the praised letters"
  - 0013 §4: `vir laudatus` → "the praised man"
  - 0013 §5: `Hic laudatus vir` → "Here the praised man". *Hic* here is "this", not "here".
  - 0013 §6: `loco jam laudato` → "the place already praised"
  - 0014 §7: `definitio quam Augustinus laudat` → "which Augustine praises"
  - 0016 note k: `ex laudato codice Regio` → "the Royal codex praised above"

  The same notes render *laudatur* correctly as "is cited" elsewhere (0012 note b: *a Cresconio … laudatur*). Suggest "cited" or "already cited" in each place, and "This man we have cited" for *Hic laudatus vir*.
- **L2. 0014 note b, `totam inscriptionem perstringit` → "touches on the whole inscription".** The sense is "abridges" or "cuts the whole inscription short": Dionysius names two bishops and drops the rest. Proposed: `abridges the whole inscription in this manner`.
- **L3. 0016 §15, `charitatis vinculis, quae nullis modis a Christo solvuntur` → "which are in no way loosed by Christ".** "From Christ" is the likelier sense, since the bonds tie us to Christ. "By Christ" makes Christ a possible loosener. Probable, low weight.

## Chunks found clean (no class 1–5 finding)

- **0013** (Monitum §§4–6). Every *non/nisi/nec/nonnisi* was checked, including *non abfuisse largiendum est*, *nisi ordinatione iterata non liceret*, *minime conferri* and *neque igitur erga Novatianos*. The only remark is L1.
- **0014** (Monitum §§7–8, Ep. XVII lists, inscription). The 23 names in the inscription match one for one. Both chapter lists (7 + 12) are complete. The double negative *Non enim sine causa … non eodem verbo* is preserved. The remarks are L1 and L2.

## Candidates considered and rejected

- **0017 Monitum §1, `Baronius … ad annum 308` and `Eustathii depositione, quam anno 430 aut 431`.** Both are historically impossible: 430 + 85 does not end in 413/414, and the right figure is 330/331. **The plate (p. 275) prints 308 and 430 aut 431.** These are Coustant's or Migne's own figures, the English renders them as printed, and under P0 a Coustant reading takes no `[sic:]`. Rejected, though it may be worth a crux line.
- **0016 note g (Ep. XVIII), `locum 55 obtinet`.** This conflicts with Ep. XVII = Dion. LI–LVIII (0012 §1). On the plate (p. 274) the digits are 1-bit and could be 55 or 35. I can't settle it on this witness, and the English follows our Latin. Rejected as a translation defect. The same plate line reads **`Huc eam referimus`**, where our Latin has *Hac*. The English "here" is right either way. This is a transcription note for the tsv only.
- **0012 §1 of the Monitum, `primum … LI, et postremum LVIII`,** which gives eight numbers for "seven chapters". This is Coustant's arithmetic, rendered as printed.
- **0012 note b, `quia subnexa probabiliter creditur anterior`.** I took *subnexa* as ablative of comparison, "earlier than the one subjoined". The English agrees. No change.
- **0012 main text, `ut … eos recipiendos esse censemus` / "we judge that they are to be received".** The polarity is correct.
- **0014 §7, `[sic: *Macedodonas*]`.** Logged in the cruces as Migne's type. Not re-examined.
- **0015 §2, `noverit vestra dilectio haec penitus non admittere; nec … assumere et … removere`.** The English "by no means admit … do not take up … and … remove them" is correct.
- **0015 note g (Valence), `Neque hac in re Hispanos, Mauros, Italosve … observantiores fuisse`.** Rendered literally ("Nor were … more observant"). The sense holds, since the cited papal letters rebuke laxity there.
- **0015 note f (Photinus / *veniam*), `ratam non habere durius existimo`.** Correct.
- **0015 §7, `honoram`.** A non-word rendered "honour" with no marker. Logged in cruces-0012 l. 123 as plate-worn. Not reported.
- **0015 note i, `superiori epistola 5`.** The plate reads *epistola 5*. Rendered as printed.
- **0016 §13, `in pace jam ecclesias constitutas non praesumere` / "do not presume".** The note glosses it jussively ("is by no means to be presumed"), but the indicative is a defensible literal rendering of the infinitive. Not reported.
- **0016 note c (Ep. XVII §13), `Si quid addendum esset, aptius foret *debere* quam *posse*`.** Correct.
- **0016 note h (Ep. XVIII inscription), `nec solos nec omnes … in hac autem et omnes et solos`.** The polarity is correct.
- **0014 note placement: the second `[cn: a | … et caeteris …]` sits before the `[0527A]` anchor**, so on our anchors page 525/526 reads a, b, a. On the plate the inscription straddles the column break and this key belongs to page 527/528, where the a–h sequence is clean. This is an anchor-position matter, which the brief rules out, and it is not a translation defect.
- **0017 Ep. XIX §1, `multum in gestis, ut subjecta testantur, sollicitus inquisivi`.** The English folds *in gestis* into the parenthetical clause. The meaning survives. Not reported.
- **0017 Ep. XIX §2, `praestetur seni favore vestro nostroque judicio … gratia praerogata`.** The English attaches *favore … judicio* to *praerogata* instead of to *praestetur*. This is ambiguous in the Latin. Not reported.
- **0017 Ep. XX, `paginulam per compresbyterum nostrum Paulum … conscribi`** / "written by". *per* may mean "through", i.e. by the bearers. This is ambiguous. Not reported.
- **0017 note d (Ep. XXI), "(a word worn on the plate)"** added inside the `[nt:]`. It is the translator's gloss on *ro...i*. It is harmless, but it is an editorial aside inside Coustant's voice and may belong in the cruces instead.
- **0014 note a (et caeteris), italics on "*chiefly the Macedonians*".** The Latin is not italic here. This is cosmetic.
