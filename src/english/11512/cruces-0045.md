# Cruces — 11512 Wolbero, *Commentaria in Canticum canticorum*, chunks 0045–0049 (stint T10)

Columns 1151C–1169D (Book III, *CAPUT IV* continued: gloss of Ct 4:3 through the opening of Ct 4:12). Plate: `raw/scans/pl195/patrologiaecursu0195mign.pdf` (scan A), pages 582–591, each opened once at 300 dpi with the printed corner columns read first (582 = 1151/1152 … 591 = 1169/1170), text collated and the foot read full width in the same visit. Page 582 is shared with T09 and was collated from the *143* VERS. 3 lemma (1151C) on; page 591 is shared with the next stint and was collated to *perdunt.* (1169D), with the foot read full width. Second witness `raw/scans/pl195/patrologiaecur195mign.pdf` (scan B, PDF page = floor((col+9)/2)) opened at pp. 580, 581, 582, 583, 584, 585, 589, corners read; every single-letter question below was settled on B at 600 dpi. Record: `data/briefs/11512-PLATE-READS-0045.json`.

**Migne's foot notes:** none on any of pages 582–591. Every foot read full width; the text runs to the bottom margin on all ten pages (p. 587 carries only the sheet signature *PATROL. CXCV.* and the gathering number *27*, which are not notes). No `[cn:]` inserted in the Latin; `data/briefs/11512-NOTES-0045.tsv` is header-only. Nothing unplaced, no sequence to check.

**Lemma count:** 181 italic spans, 0 guillemet spans, counted paragraph-bounded (0045 = 48, 0046 = 23, 0047 = 45, 0048 = 21, 0049 = 44; no paragraph with an odd delimiter count; the five `*138*` heads are included, as in the inventory). **Agrees** with the 181 in `11512-lemmata-0045.txt`. The English carries the same number per chunk and per paragraph.

**Markers fired (all on plate-read columns):**
- `[var:]` ×4: 1159B (Job 40:16 *thalami*), 1159D (Jr 1:12 *Bene dixisti*), 1163A (Act 7:51 *indomabili corde*), 1164B (Jr 9:21 *Intravit … vestras*).
- `[sic:]` ×8: 1152D *est* (*foris est ostendere*), 1153D *petus*, 1155B *pavi*, 1157D *montitibus*, 1157D *canditatio*, 1160D *es*, 1162D *soculorum*, 1169B *husjusmodi*.
- `[cj:]` ×1: 1169C *scriptum* (read *Christum*).
- `[d:]` none.
- **Withdrawn at the plate (fired in draft, then refuted on scan B at 600 dpi):** 1152D *crubescenti* (B prints *erubescenti*: the first letter is an *e* with a closed eye; A's is ink-filled and reads as *c*) and 1162B *eor* (B prints *cor*, open *c*; A's is ink-filled). Both are therefore our digitization's errors, filed as TEI patches below, and the English renders the plate's word unmarked. Measured lesson for this volume: **c/e cannot be decided on scan A at 300 dpi**, and A at 600 dpi still misread both.

## Column notes

- **1151C–D** — *Nam* **vitta** *subjectorum a* **vitta** *sanctorum praedicatorum quasi dissonat*: plate p. 582 prints *vitta* twice. The sense wants *vita* ("the life of the subjects is out of tune with the life of the holy preachers"), but *vitta* is a real word and the fillet is the image being expounded. Rendered literally ("the fillet of the subjects … the fillet of the holy preachers"). Crux only.
- **1151D** — *per* **gratiam** *compunctionis*: scan A's final *m* is clipped at the column edge and reads *gratian*; scan B p. 580 prints *gratiam* cleanly. No issue.
- **1152A** — *ad aeternae vitae amorem succendunt* ends with no stop on the plate (and in our Latin); the next paragraph opens *Unde subditur*. English carries no stop (Pattern 8).
- **1152B** — *Porro* **quanta** *species septiformis pulchritudinis … praedicat*: plate confirms *quanta*. The run of ordinals (*Sexto vero loco*, 1153B; *Septimum*, 1155A) wants *quinta*, "the fifth kind". Rendered literally, "how great a kind of the sevenfold beauty proclaims"; crux only (a real word, no negation, and the English asserts nothing false).
- **1152C** — *malum punicum … malum granatum*: the gloss is an etymology of both names, so the English names the Latin in straight quotes ("malum punicum", "malum granatum").
- **1152D** — *non* **crubescenti**: see *Withdrawn* above. TEI patch filed; English "does not blush", unmarked.
- **1152D** — *et* **gloriosa** *oculorum compositio*: plate confirms. One expects a word of modesty (*demissa*?) beside *vultus demissio*; rendered literally, "a glorious composure of the eyes". Crux only.
- **1152D** — *dum vix aut nunquam sufficit sancta anima foris* **est** *ostendere*: plate confirms the *est*. It has no grammatical slot (*sufficit … ostendere*), and English cannot render it in place, so `[sic: *est*]` stands where it falls ("suffices outwardly [sic: *est*] to show"); the clause keeps its verb and both negatives (*vix aut nunquam*, "hardly or never").
- **1153A** — *Quid est enim quod intrinsecus latet, nisi … operatur.* A question in form, closed by a full stop on the plate. English keeps the stop.
- **1153B** — the bold *145* is printed before *VERS. 4* and our Latin sets it as `* 145*` with a space; carried verbatim as the peers carry `* 2*` and `* 75*`.
- **1153C** — *quidquid venustatis vel sublimitatis in se* **continent** *doctorum eloquia*: on both copies (A p. 583, B p. 581) the letter before the final *t* is a damaged sort that looks like *r* (*continert*). Nothing claimed; the TEI's *continent* is rendered.
- **1153C** — *Parcere subjectis, et debellare superbos*: Virgil, *Aen.* VI 853; Migne's note reads *(VIRG., Aeneid., IV, 654.)*, which is a wrong locator, carried verbatim as his. On the plate the line is set centred on a line of its own with the note centred beneath it; our Latin runs the verse into the end of the paragraph and gives the note its own line. The English follows the chunk's line structure (parity); the plate's lineation is recorded here (Pattern 8a) for any rebuild. The Horace lines at 1153D–1154A are lineated on the plate and in our Latin alike, and the English keeps them one for one.
- **1153D** — *ulla possit timere contrariae et adversae* **patris** *molimina*: plate confirms *patris*. The sense wants *partis*, "of the contrary and adverse party"; rendered literally, "the contrary and adverse father" (which, of the devil, is not nonsense). Crux only.
- **1153D** — Horace, *Ep.* I.1.33–40 (Migne's note *Ep. I, I, 39*): *Fervet avaritia, miseroque cupidine* **petus**. Plate p. 583 and B p. 581 (600 dpi) both print five letters, no *c*. Non-word for *pectus*: `[sic: petus]` inside the italic line, sense "breast" beside it. Also as printed and not scripture, so no marker: *?* after *petus* and after *tumes*; *Nemo adeo ferus est* **qui** *non mitescere possit* (Horace *ut non*). Both negatives carried ("No one is so wild that he may not grow gentle").
- **1154B** — *nolle acquiescere (I Reg. XV)* **:** *si impatientia*: plate A p. 583 and B p. 581 print a colon; our Latin has a full stop before lowercase *si*. English follows the plate (colon). TEI patch.
- **1154B** — *Irascimini, et nolite peccare;* et quia *ira viri justitiam Dei non operatur (Ps. IV)*: the locator stands after the Jac 1:20 words though it belongs to the Ps 4:5 half. Migne's; carried.
- **1154D** — a speck sits in the paragraph indent before *Sed cum idem* on scan A; scan B is clean. Not a mark.
- **1155B** — *ipsi eruditores minorum in Ecclesia* **pavi** *sunt in oculis suis*: plate A p. 584 and B p. 582 (600 dpi) both print *pavi*. *pavi* ("I fed") is a real form with no slot in the clause; the sense is *parvi*, "little in their own eyes". `[sic: *pavi*]` beside "little".
- **1155B** — *veluti filii matres sequendo*: rendered literally, "as sons follow mothers".
- **1155C** — *Sic et dilectio Dei sine dilectione proximi,* **nec** *proximi sine dilectione Dei esse ullatenus potest*: one negative is printed, as the second member of a pair whose first member has none. Rendered literally with the one "nor" ("So too the love of God without the love of neighbour, nor that of neighbour without the love of God, can in any wise exist"). The argument plainly means "neither … nor … can exist"; no negative supplied (7a). Crux only.
- **1155D** — *Duo ergo uno tempore … facientes*: the sentence has no finite main verb before *consequitur*; carried as printed. *Haec ergo duo … existentes*: neuter *duo* with masculine participle, a gender mismatch with no English exponent (Pattern 9).
- **1156A** — *nonnunquam sola allegoria* **quando** *pleraque juxta litteram stare possunt, quae juxta spiritum minime possunt*: the clause gives, as the occasion for allegory alone, the case where the letter stands and the spirit does not. Rendered literally ("sometimes the allegory alone, when many things can stand according to the letter which can by no means stand according to the spirit"). Crux only; *minime* and *nullo modo* carried.
- **1156D** — *Sed istum decorem duplici modo, hoc est …* has no verb; carried verbless.
- **1157A** — *aut* **profuturi** *regni dilatione*: plate confirms. Rendered "from the delay of the kingdom that shall profit him"; *futuri* would be expected.
- **1157A** — *propter quodammodo fumigantem* **exiguae** *compunctionis vel poenitentiae moerorem*: plate confirms. Rendered "slight compunction"; *eximiae* ("excellent") may be meant. Crux only.
- **1157C** — VERS. 7: *Tota pulchra es amica, et macula non est in te.* Plate p. 585 confirms no *mea* (the re-quotation at 1157C has *amica mea*). English "love" in the lemma, "my love" in the re-quotation. Omission of a possessive, no `[var:]`.
- **1157C** — *Cum, inquit, te superius* **septennis** *pulchritudinum extulerim praeconiis … sed … sed tanta …*: an anacoluthon (the *Cum* clause never gets its main clause); carried as printed, with no parentheses supplied.
- **1157D** — *etsi aliqua parumper* **et** *humana fragilitate accesserit*: plate confirms *et* (one expects *ex*). Rendered "for a little while and by human frailty".
- **1157D** — VERS. 8: *de* **monti-|tibus** *pardorum?* The plate breaks the word at a line end as *monti-* / *tibus* (A p. 585, B p. 583, 600 dpi): the first two glyphs of the second line are worn to bare minims on both copies, but they occupy two letter-widths before *bus*, so the syllable *ti* is set twice across the break. Non-word; `[sic: montitibus]` inside the italic lemma, sense "mountains" beside it. The re-quotations at 1158C and 1160C print *montibus*. The lemma's closing *?* is printed and carried.
- **1157D** — *Libanus enim* **canditatio** *interpretatur*: plate breaks *candi-* / *tatio* (A p. 585, B p. 583, 600 dpi; both clear). Non-word for *candidatio* (*candidatio* is printed four times in the same paragraph); `[sic: canditatio]` inside the italic span, sense "whitening" beside it.
- **1158A** — *veluti mea* **Sponsa**: Migne capitalizes here, so the English reads "my Bride" (orchestrator's ruling, 2026-09-25: follow his capital at each instance). Every other *sponsus/sponsa* in this range is lower-case and is rendered "bridegroom"/"bride".
- **1158B** — *si ob culpam* **tui**: genitive of the pronoun, not *tuam*; rendered "for fault of thine".
- **1158C** — *quaerentes mea sacramenta quaerant … earumque conversio*: feminine *earum* after masculine *quaerentes*, a gender mismatch with no English exponent (Pattern 9).
- **1158C–D** — *qui cum bonum insitae sibi rationis et visibilium rerum pulchritudinem ipsarum omnium Creatorem cognovissent*: three accusatives with one verb, construed as printed ("when they had known the good of the reason implanted in them and the beauty of visible things, the Creator of them all").
- **1159B** — *Dormit in umbra, in secreto* **thalami** *(Job XL)*: plate confirms *thalami*. See the scripture list: `[var:]`.
- **1159D** — *ut faciam* **illud** *(Jer. I)*: plate A p. 586 and B p. 584 (600 dpi) both print *illua* (the last letter is an *a*, with no ascender; compare *faciam*). Our Latin has *illud*. TEI patch filed; the English renders the sense "to perform it" for now, and once the patch lands a `[sic: illua]` may be fired there.
- **1159D** — *Bene,* inquit, *dixisti*: plate confirms *dixisti*. See the scripture list: `[var:]`.
- **1160A** — *ideoque anathematizati et excommunicati ab Ecclesia* **profecti** *sunt*: rendered "went out from the Church" (from *proficiscor*).
- **1160D** — *ita in nutrimentis virtutum vita animae* **es**, and the paragraph ends with no stop. Plate A p. 586 and B p. 584 (600 dpi) both print two letters and no stop. *es* ("thou art") has no slot; the clause's only verb is inside it, so the English supplies the sense in plain words beside the marker ("the life of the soul is [sic: *es*]", 7a⁗ question 1) and carries no stop.
- **1160D** — *Montes vero pardorum* **super superbiam** *eadem sunt corda reproborum*: plate confirms. Rendered literally, "are, over pride, the same hearts of the reprobate"; *propter superbiam* may be meant. Crux only.
- **1161C** — *dextrae partis oculus extra haec visibilia supra* **seducitur**: plate confirms. Rendered "is led away above"; *subducitur* or *sublevatur* would be expected. Crux only.
- **1161D** — *credere jubemur, discutere non* **permittimur**: plate A p. 587 and B p. 585 print *permittimur*, matching *jubemur*; our Latin has *permittitur*. English follows the plate ("we are bidden to believe, are not permitted to discuss"). TEI patch.
- **1161D** — *quomodo* **corporatur** *verbum*: plate confirms (not *incorporatur*); rendered "is embodied".
- **1162A** — *quod humana ratione non* **colligitur**, *valde … per fidei meritum* **colligatur**: Wolbero's play on *colligere / colligare*; rendered "is not gathered … is strongly bound together".
- **1162A** — *non habet meritum fide sua, sed qui illud … credit*: the second member is elliptical (no verb of its own); carried elliptical.
- **1162B** — *Vulnerasti* **eor** *meum*: see *Withdrawn* above. TEI patch filed; English "heart", unmarked.
- **1162B** — *fides nempe totius boni fundamentum.* **dilectio** *superaedificans*: plate prints a full stop followed by lower-case *dilectio*; carried (". love, building upon it").
- **1162D** — *unus* **soculorum** *idem est animi vultus*: plate A p. 587 and B p. 585 (600 dpi) both print *soculorum*. Non-word for *oculorum*; `[sic: *soculorum*]` beside "the one of the eyes".
- **1162D** — *ut neque elevetur prosperis, neque* **deliciatur** *adversis e contra de reproba mente dicitur*: the letter after *de* is a damaged short sort on both copies (a raised stroke on A p. 587 and B p. 585, 600 dpi), so the plate does not decide *deliciatur* against *dejiciatur* ("cast down", which the parallel with *elevetur* wants). Our Latin's *deliciatur* is rendered ("nor takes delight in adversities"); no marker, because the plate reading is not established. The plate prints no punctuation between *adversis* and *e contra*; none supplied.
- **1163D** — *non potest nisi amare virtutem* ends the paragraph with no stop (plate p. 588); carried.
- **1164A** — *non suscipit magis et minus, quae* **imperfectam** *cognitionem veritatis … habet*: plate p. 588 confirms *imperfectam*. The argument (the Church in itself admits no more-and-less; its increase is in others) wants *perfectam*. `[cj:]` declined: the relative clause can be read concessively, the word is not a negative particle, and there is no printed control. Crux only.
- **1164A** — *Quantum vero ad alios quos* **credit** *in Christo*: plate confirms. Rendered "whom she believes in Christ"; *gignit* ("begets") may be meant. Crux only.
- **1164C** — *quibus quotidie ad vitam nutritur aeternam* ends with no stop (plate p. 588); carried.
- **1164D** — *si pulchrae non sunt, neque sunt … nec pulchrae sunt … jam non est*: every negative carried.
- **1165B** — *per figuram* **tapinosin**: the rhetorical term (ταπείνωσις), glossed by Wolbero himself; rendered "the figure tapinosis".
- **1165B** — *meliora et pulchriora … sint* **omnia** *animae rationali*: rendered "better and fairer in all things to the rational soul".
- **1165C–D** — *Si ergo* **incorruptione** *spiritualis boni uniunt Deo,* **incorruptione** *vero corporalis boni, non tantum non uniunt Deo …, corruptione vero illius …*: plate p. 589 confirms both *incorruptione*. *uniunt* has no object and no stated subject. Rendered literally ("by the incorruption … they unite to God"). The period that closes the question (*quae comparatio potest esse in tanta dissimilitudine.*) is carried.
- **1166A** — *quam omnia hujus mundi* **delecta**: plate confirms. *delecta* is a real word ("chosen things"); *delectamenta* ("delights") may be meant. Rendered "all the chosen things of this world". Crux only.
- **1166D** — *Super* **omn es** *virtutes*: plate A p. 589 shows a wide gap or a damaged *n*; read as spacing. No claim.
- **1167C** — *Quis vero nesciat quod mel dulce, cera* **mellis** *est?* Plate p. 590 confirms *mellis*. The contrast wants *mollis* ("wax is soft", which the next sentence develops: *mollis atque tractabilis*, *ceram mollem*). Rendered literally, "that wax is of honey". Crux only.
- **1167C** — *per corporis passionem ex* **humilitate** *mollis*: plate confirms. Beside *ex divinitate* one expects *humanitate*. Rendered literally, "from his humility". Crux only.
- **1167D** — *et haec in praedicatione* **sive** *Ecclesia pronuntiat*: rendered as printed ("and these things in preaching, or the Church, pronounces"); *sua* may be meant. Crux only.
- **1168C–D** — *Per figuram metaphoram quae quatuor modis fit, id est ab animato ad animatum, ab inanimato ad inanimatum*: only two of the four modes are listed, and the *eum solum modum, qui est ab inanimato ad animatum* is not one of the two named as intermingled. All as printed on p. 590; carried.
- **1169A** — the indirect questions *non tamen omnibus patet quomodo … operetur Spiritus sanctus? quare … sint? quomodo … sint?* are rendered in direct form behind a colon, keeping all three printed question marks (Pattern 8b).
- **1169A** — *sanctorum Scripturarum*: masculine for feminine (Pattern 9); "the Holy Scriptures".
- **1169B** — *in hortum* **husjusmodi**: plate A p. 591 and B p. 589 (600 dpi) both print *husjusmodi*. Non-word; `[sic: *husjusmodi*]` beside "of this kind".
- **1169C** — *nisi per ostium, hoc est* **scriptum**: plate A p. 591 and B p. 589 both print *scriptum*. A real word, and the faithful English ("through the door, that is, what is written") makes the door Scripture, where the column has just quoted the Saviour saying *se esse ostium* and goes straight on *qui vero per* **eum** (masculine) *non accesserit*. The printed control is on the same page on both sides of the word, so `[cj: *scriptum*; read *Christum*, "Christ"]` is fired (Pattern 18, word substitution making the English assert what the passage denies). This is the stint's one judgment call at the bar; the orchestrator may demote it to a crux.

## Scripture: collation of every ⚠ span (7a″)

Each ⚠ span in `11512-lemmata-0045.txt` was walked word by word against `sources/vulgate/clementine-flat.txt`, on columns read at the plate.

- **1152D** *Frons mulieris meretricis facta est tibi,* **et** *noluisti erubescere (Jer. III)*: Jr 3:3, *et* added. No sense change, no marker.
- **1153B** VERS. 4 and re-quotation, Ct 4:4: agree word for word. ⚠ **Comparand defect:** the Clementine file prints *mille clypei* **pendant** (subjunctive); Migne's *pendent* is the ordinary Vulgate reading. Not Migne's divergence; no marker.
- **1153B** *manu fortis* is the interpretation of *David*, not scripture. **1153C** *Parcere subjectis …* is Virgil (see column note).
- **1153D–1154A** the eight Horace lines are not scripture (see column note).
- **1154A** *si quis* **dilexerit** *mundum* (1 Jo 2:15 *diligit*): tense only, no marker.
- **1154A** *Non efficiamur inanis gloriae cupidi (Gal. VI)*: Gal 5:26; agrees (locator Migne's).
- **1154A** *Quia hilarem datorem diligit Deus (II Cor. IX)*: 2 Cor 9:7 *hilarem enim datorem*; connective only.
- **1154A–B** *Nescitis quia* **corpora** *vestra templum sunt Spiritus sancti? Si quis violaverit templum* **hoc**, *disperdet illum; templum enim Dei sanctum est, quod estis vos (I Cor. VI)*: a conflation of 1 Cor 6:19 (*membra vestra*) and 3:17 (*Si quis autem templum Dei violaverit, disperdet illum* **Deus**). Conflation, no marker; the English keeps the printed *corpora* ("bodies") and the subjectless *disperdet* ("he shall destroy").
- **1154B** *ira viri justitiam Dei non operatur (Ps. IV)*: Jac 1:20; agrees.
- **1154B** 1 Rg 15:22–23: agrees. ⚠ **Comparand defect:** the Clementine file prints *nole acquiescere*, not a word; Migne's *nolle* is sound. No marker.
- **1154B** *patiens melior est expugnatore urbium (Prov. XVI)*: a compression of Pr 16:32 *Melior est patiens viro forti, et qui dominatur animo suo expugnatore urbium*. Compression, no marker.
- **1154C–1155A** Ct 4:4 fragments (*clypei pendent ex ea*, *clypei et omnis armatura fortium pendent ex ea*, *mille clypei pendent et omnis armatura fortium*): re-orderings in the gloss, no marker.
- **1155A** VERS. 5 and re-quotation: Ct 4:5 plus 4:6a (*donec aspiret dies, et inclinentur umbrae*), which Wolbero's text attaches to v. 5. Words agree; versification only.
- **1155B** *duo ubera sicut duo hinnuli capreae gemelli* (no *tua*); **1156B** *Qui pascuntur … umbrae*: agree.
- **1156D** *qui* **enim** *sunt Christi … (Gal V)*: Gal 5:24 *autem*; connective, no marker. The italic run carries Migne's roman locator *(Gal V)* inside it in our Latin; the English follows our Latin.
- **1157C** VERS. 7, without *mea*: see column note.
- **1157D** VERS. 8: agrees apart from *montitibus* (`[sic:]`) and the printed *?*.
- **1158D** *non sicut Deum glorificaverunt … servierunt creaturae* **magis** *quam Creatori (Rom. I)*: a conflation of Rom 1:21 and 1:25 (*qui commutaverunt*, *coluerunt, et servierunt … potius quam*). Conflation, no marker.
- **1159A** *Ipse enim est rex super* **omnes** *filios superbiae (Job XLI)*: Job 41:25 *universos*. No sense change, no marker.
- **1159B** *Dormit in umbra, in secreto* **thalami** *(Job XL)*: Job 40:16 *Sub umbra dormit in secreto* **calami**. "Bedchamber" for "reed" changes the image the gloss then uses (*quasi in umbra peccati sibi requiem parat*). Plate p. 586 confirms *thalami*. **`[var: Vulg. Job 40:16 *in secreto calami*, …]` fired.**
- **1159B** *tanquam leo rugiens circuit quaerens quem devoret (I Petr. V)*: 1 Pt 5:8; agrees.
- **1159A–D** *nocturna avis*, *dens vigiliarum*, *anathema*: the name-interpretations, not scripture.
- **1159D** *Quid tu vides, Jeremia?* / *Virgam vigilantem ego video*: Jr 1:11; agree. *et Dominus: Bene,* inquit, **dixisti**, *quia vigilabo ego super verbo meo, ut faciam illud (Jer. I)*: Jr 1:12 *Bene* **vidisti**. The Lord commends Jeremiah's seeing, and the printed text has him commend his saying. Plate p. 586 and B p. 584 confirm *dixisti*. **`[var: Vulg. Jr 1:12 *Bene vidisti*, …]` fired.** (*illud*: see column note and TEI patch.)
- **1160A** *Si quis vobis aliud* **praedicaverit** *quam quod* **a nobis** *accepistis, anathema sit (Gal. I)*: Gal 1:9 *evangelizaverit praeter id quod accepistis*. Wording, not sense; Wolbero's gloss runs on his own verb (*haeretici aliud praedicaverunt*). No marker.
- **1160C** *anima justi sedes est Dei (Sap. VII)*: not in Wisdom 7 (the patristic dictum is *anima justi sedes est sapientiae*). Allusion under Migne's locator; no marker.
- **1160C–D** *A cubilibus leonum,* **a** *montibus pardorum* (Ct 4:8 *de … de*); *A cubilibus … leonum et montibus pardorum*: prepositions only, no marker.
- **1161A** VERS. 9: agrees. **1161B** *Unum oculorum et unum crinis colli?*, **1161C–1162A** *In uno … crine colli*, *in uno oculorum*: paraphrase and fragments.
- **1161D** *Deus homo factus.* and **1161D** *fides autem non habet meritum, cui humana ratio praebet experimentum* (Gregory, *Hom. in Ev.* 26): not scripture.
- **1162A** Rom 10:8: agrees. *daemones enim credunt et contremiscunt (Jac. II)*: Jac 2:19; agrees.
- **1162B** *Vulnerasti* **eor** *meum …*: our file only; the plate prints *cor* (TEI patch).
- **1162C** *Homo sanctus in sapientia manet sicut sol, stultus* **autem ut** *luna mutatur (Eccli. XXVII)*: Sir 27:12 *nam stultus sicut luna*. No marker.
- **1162C** *ibant in directum et uno itinere gradiebantur, et non declinabant ad dexteram, neque ad sinistram (I Reg. VI.)*: 1 Rg 6:12 abridged (subject and place names dropped). No marker.
- **1162D** *unumquodque ante faciem suam gradiebatur*: Ez 1:9; agrees.
- **1162D** *ea quae retro sunt obliviscens, et ad ea quae sunt* **ante se** *extendens (Philip. III)*: Phil 3:13 *quae quidem retro sunt obliviscens, ad ea vero quae sunt priora, extendens meipsum*. Paraphrase, same sense; no marker.
- **1163A** *ambulabat extenso collo et erecta cervice (Isa. III)*: Is 3:16 *ambulaverunt extento collo*, adapted to Wolbero's singular *reproba mens* with *erecta cervice* added. Adaptation, no marker.
- **1163A** *dura cervice et* **indomabili corde** *(Act. VII.)*: Act 7:51 *Dura cervice, et* **incircumcisis cordibus** *et auribus*. "Untameable heart" for "uncircumcised hearts and ears" is a different image, under a locator presenting it as the text. Plate p. 588 confirms. **`[var: Vulg. Act 7:51 …]` fired**, set inside the italic run after the locator, where the Latin's one italic span runs on into *In uno*.
- **1163A** VERS. 10: agrees.
- **1164B** *Intravit mors per fenestras* **vestras** *(Jer. IX)*: Jr 9:21 **ascendit** *mors per fenestras* **nostras**. Both the verb and the person differ, and the gloss turns on the person: the prophet *peccatores arguit*, and *vestras* is what makes it a reproof. Plate p. 588 confirms. **`[var: Vulg. Jr 9:21 …]` fired.**
- **1164D** *Qui ignorat, ignorabitur (I Cor. XIV)*: 1 Cor 14:38 *Si quis autem ignorat*; no marker. *cupiditas, quae est radix omnium malorum (I Tim. VI)*: 1 Tim 6:10 re-ordered; no marker.
- **1165B** *ubera vino … pulchriora*, **1167A** *odor super omnia aromata*: fragments.
- **1166B** *sine fide impossibile est placere Deo (Hebr. XI)*: Hbr 11:6; agrees.
- **1167D** *Beatus qui custodit vestimenta sua … (Apoc. XVI)*: Apc 16:15 omits *vigilat, et*. Omission, no marker.
- **1168A** *Omni tempore vestimenta tua sint candida (Eccle. IX)*: Ecl 9:8 re-ordered; Wolbero introduces it as *in proverbiis Salomonis*, carried ("in the Proverbs of Solomon").
- **1169B** *Nobis autem* **ea** *revelavit Deus per Spiritum suum (I Cor. II)*: 1 Cor 2:10, *ea* added. No marker.
- **1169B** *Per me si quis introierit salvabitur (Joan. X)*: Jo 10:9; agrees. **1169C** *Qui non intrat per ostium, sed ascendit aliunde, ille fur est et latro (ibid.)*: Jo 10:1 without *in ovile ovium*; no marker.
- **1169C** *Cur non perpenditur … non arbitror.* is Gregory (the simony letters), not scripture.
- ✓ spans checked at the plate and against the file: Ct 4:3 (all fragments), Ex 21:24, Jac 4:6, 1 Pt 5:5, Ps 4:5, Rom 8:26, Ct 4:6, Ct 4:8 re-quotations, Ct 4:9, Ct 4:10, Ct 4:11 (lemma and fragments), Ct 4:12 all agree.

## Standing renderings (for merge-time reconciliation)

- Kept from the peers: VERSE n.-- · Cologne numbers verbatim (including `* 145*`) · *vitta coccinea* = scarlet fillet · *fragmen mali punici* = a piece of a pomegranate · *absque eo quod intrinsecus latet* = besides that which lieth hid within · *eloquium* = speech · *Libanus … candidatio* = Libanus … whitening · *praedicatores* = preachers · *fortes* = valiant men · thou/you by number (the bride and the reader addressed in the singular are "thou") · *cypri* = of Cyprus (the majority peer form).
- *sponsus/sponsa* = bridegroom/bride, capitalized only where Migne capitalizes (1158A *mea Sponsa* = my Bride), per the orchestrator's ruling of 2026-09-25. *soror mea sponsa* = my sister, bride. *dilectus / dilecta* = the beloved.
- *sacra / sancta Scriptura*, and *sanctae Scripturae* plural = Holy Scripture / the Holy Scriptures (Pattern 3). No *divina Scriptura* occurs in this range.
- Introduced here: *propugnacula* = bulwarks · *clypei* = bucklers · *armatura fortium* = armour of valiant men · *pendent ex ea* = hang from it · *hinnuli capreae gemelli* = fawns of a roe, twins · *donec aspiret dies et inclinentur umbrae* = till the day break and the shadows retire (the peers' form; the gloss nouns *aspiratio / inclinatio* = the breaking / the retiring) · *mammae / ubera* = paps / breasts (Wolbero distinguishes them, 1164A: girls' and women's) · *unguenta* = ointments · *aromata* = spices · *favus distillans* = a dropping honeycomb · *thus* = frankincense · *nocturna avis* = night bird · *dens vigiliarum* = tooth of watches · *Amana, Sanir, Hermon* as printed · *hortus conclusus* = a garden enclosed · *fons signatus* = a fountain sealed · *praedicamentum / praeconium* = proclamation · *documenta* = instructions · *munimentum* = fortification.

## TEI patches (plate vs our Latin)

- 1152D · *peccare non crubescenti per prophetam* → *peccare non erubescenti per prophetam* (first letter an *e* with a closed eye on scan B p. 580 at 600 dpi; ink-filled on A) · p. 582
- 1154B · *nolle acquiescere [n: (I Reg. XV)]*. si impatientia* → *… [n: (I Reg. XV)]* : si impatientia* (colon printed; A p. 583, B p. 581 at 600 dpi) · p. 583
- 1159D · *ut faciam illud [n: (Jer. I)]* → *ut faciam illua [n: (Jer. I)]* (A p. 586 and B p. 584 at 600 dpi both print a final *a* with no ascender; once applied, 0047 may fire `[sic: illua]` beside "it") · p. 586
- 1161D · *discutere non permittitur* → *discutere non permittimur* (A p. 587, B p. 585) · p. 587
- 1162B · *Vulnerasti eor meum* → *Vulnerasti cor meum* (open *c* on scan B p. 585 at 600 dpi; ink-filled on A) · p. 587
