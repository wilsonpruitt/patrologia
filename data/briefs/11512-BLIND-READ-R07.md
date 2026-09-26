# 11512 blind read — R07 (chunks 0042–0048)

Reader: R07 (Opus). Date: 2026-09-26. Scope: src/latin/11512/0042–0048 and src/english/11512/0042–0048, every sentence of both columns.

## Findings

### F1. 0042, col. 1143C — class 3 (mis-parsed grammar / silent smoothing)
- **Latin:** `et id quod mentem concipit, eloquii venustate proferre`
- **English as it stands:** `to bring forth with beauty of utterance that which the mind conceives`
- **Proposed English:** `to bring forth with beauty of utterance that which conceives the mind [cj: *mentem*; read *mens* or *mente*, "that which the mind conceives"]`
- **Why:** Migne prints accusative *mentem*, so *quod* is the subject: "that which conceives the mind". The English silently renders the nominative (or *mente*) reading, which Pattern 7 forbids; the sense wanted is obvious, so Pattern 18's additive gloss keeps it readable.
- **Confidence:** probable (that the English departs from the printed case: certain; plate/TEI form unverified).
- **Already in the cruces?** NO. cruces-0040.md logs 1143A, 1143D (*tortitudinis*), 1144C, 1145C but not this clause. **NEW.** The plate hasn't been checked for *mentem* vs *mente*; if the plate prints *mente*, it's a TEI patch and the English stands unmarked.

### F2. 0044, col. 1151B — class 5 (word rendered so a broken sentence reads smoothly; numbers in the allegory)
- **Latin:** `possunt delectabiliter hac gemina intentione, materna dilectione in exponendorum librorum negotiis vacare; intentione ad allegoriam et moralitatem, materia ad Vetus et Novum Testamentum, dilectione ad Deum et proximum respicientes.`
- **English as it stands:** `with this twin intention, with maternal love; looking by intention to allegory and morality, by matter to the Old and New Testament, by love to God and neighbour.`
- **Proposed English:** `with this twin intention, with maternal [cj: *materna*; read *materia*, "matter"] love; looking by intention to allegory and morality, by matter to the Old and New Testament, by love to God and neighbour.`
- **Why:** the gloss that follows unpacks a triad *intentione / materia / dilectione* — the three twin-offspring of the preceding paragraph (two senses, two Testaments, twofold charity). *materna* is a real word, so the literal "maternal love" stands, but it asserts a "maternal" love Wolbero never names and loses the second member of the triad; *materia* is the one-letter reading the next clause itself prints. Pattern 18 case.
- **Confidence:** probable.
- **Already in the cruces?** YES. cruces-0040.md, 1151B: plate p. 582 confirms *materna*; the stint saw the *materia* triad and chose "crux only". So there's no new evidence. My opinion is that it meets the Pattern 18 bar, because the English asserts a "maternal love" that the resolving triad shows Wolbero never meant. That's for adjudication, not a new finding.

### F3. 0045, col. 1153D — class 5 / Pattern 18 (real word that makes a broken phrase read smoothly)
- **Latin:** `ne supra petram fidei fundata, ulla possit timere contrariae et adversae patris molimina.`
- **English as it stands:** `she should be able to fear any contrivances of the contrary and adverse father.`
- **Proposed English:** `she should be able to fear any contrivances of the contrary and adverse father [cj: *patris*; read *partis*, "of the contrary and adverse party"].`
- **Why:** *contrariae et adversae* are feminine genitives and cannot agree with masculine *patris*; *pars adversa/contraria* is the stock phrase, and *patris/partis* is a transposition. The English "adverse father" hides the concord clash and reads as a (possible) devil-epithet the Latin does not support.
- **Confidence:** probable.
- **Already in the cruces?** YES, in part. cruces-0045.md, 1153D: plate confirms *patris*; crux only, on the ground that "of the devil, [it] is not nonsense". **NEW EVIDENCE the crux doesn't weigh:** the feminine genitives *contrariae et adversae* can't agree with *patris*, so the devil reading fails on grammar. With that argument added, I'd put it at the [cj:] bar.

### F4. 0048, col. 1162D — class 1 (word rendered as a near-opposite; Pattern 18)
- **Latin:** `ut neque elevetur prosperis, neque deliciatur adversis e contra de reproba [1163A] mente dicitur`
- **English as it stands:** `it so perseveres that it is neither lifted up by prosperity nor takes delight in adversities on the contrary`
- **Proposed English:** `it so perseveres that it is neither lifted up by prosperity nor takes delight [cj: *deliciatur*; read *dejiciatur*, "cast down"] in adversities on the contrary`
- **Why:** the antithesis *elevetur prosperis / … adversis* is the stock "neither lifted up by prosperity nor cast down by adversity"; the passage is about the *sameness* (identitas) of a humble mind, which "delighting in adversity" does not describe. *deliciatur* is a real (deponent) form, so the literal stands, but the English asserts a sense Wolbero does not intend. *dejiciatur*/*deliciatur* is a one-letter (j/l) plus c/j confusion.
- **Confidence:** probable.
- **Already in the cruces?** YES. cruces-0045.md, 1162D: the letter after *de* is a damaged short sort on both copies, so the plate doesn't decide between *deliciatur* and *dejiciatur*. It's rendered as our Latin reads, with no marker. I concur with that handling (a [cj:] needs the printed word established). No new evidence.

### F5. 0048, col. 1164A — class 1 (polarity: the sentence contradicts its own argument)
- **Latin:** `Si vero universaliter totum corpus Ecclesiae inspiciamus, quantum ad se, in cognoscenda veritate vel amanda virtute non suscipit magis et minus, quae imperfectam cognitionem veritatis et amorem virtutis habet.`
- **English as it stands:** `as regards itself it does not admit of more and less in knowing truth or loving virtue, she who has an imperfect knowledge of truth and love of virtue.`
- **Proposed English:** `as regards itself it does not admit of more and less in knowing truth or loving virtue, she who has an imperfect [cj: *imperfectam*; read *perfectam*, "a perfect knowledge"] knowledge of truth and love of virtue.`
- **Why:** the preceding paragraph establishes that what admits "more and less" is the growing, i.e. imperfect, knower; so a Church that as regards itself does *not* admit more and less must be the one with *perfect* knowledge, and the next sentence's *Quantum vero ad alios* (increase comes to her only through others) confirms the contrast. As printed, the relative clause gives the reason for the opposite conclusion. The English renders the printed word faithfully (correct under Pattern 7) but leaves the reader a self-contradiction with no signal. Alternative diagnosis: an intrusive *non* before *suscipit*; either way one polarity element is wrong, and the crux should record both.
- **Confidence:** probable (that the sentence is polarity-broken: probable; which word: uncertain).
- **Already in the cruces?** YES. cruces-0045.md, 1164A: plate p. 588 confirms *imperfectam*. [cj:] was declined because "the relative clause can be read concessively" and there is no printed control. I concur that this is borderline. The alternative diagnosis (an intrusive *non*) isn't in the crux and could be added there. No new plate evidence.

## Process note (disclosure)
F1, F2 and F3 were written before any cruces file was opened. F4 and F5 were formed during the read of 0048. The *crubescenti* candidate (0045, 1152D, a non-word with no marker) was also formed before any look. After that, a grep I ran to check my own findings' Latin strings against the chunks also matched lines in `cruces-0045.md`, and those showed *crubescenti* withdrawn at the plate: scan B prints *erubescenti*, and a TEI patch has been filed. So I've moved it to "rejected" below. Nothing else in cruces was read until F4 and F5 had been appended to this file.

## Summary
- **New:** F1 (0042, 1143C, *mentem concipit* silently rendered as "the mind conceives").
- **New evidence on a logged crux:** F3 (0045, 1153D, *contrariae et adversae patris*: gender concord rules out "father").
- **Logged; I concur or argue for escalation only:** F2 (*materna*), F4 (*deliciatur*), F5 (*imperfectam*).
- No dropped or added negation, no lost sentence or clause, no Bride/Bridegroom or speaker slip, no wrong number, and no Scripture departure from Migne without a marker was found in 0042–0048.

## Chunks read clean (both columns, every sentence)
- **0043:** clean (two paragraphs; singular *filiam Sion* followed by plural *ipsae* is rendered as printed).
- **0046:** clean.
- **0047:** clean.
- 0042, 0044, 0045 and 0048 are clean apart from the items above.

Sentence and clause parity was checked paragraph by paragraph in all seven chunks. The Horace block in 0045 is 8 lines against 8. The number allegories all agree: seven members of beauty (0044: eyes, hair, teeth, lips, cheeks, neck, breasts; the "sixth place" is the neck and the "seventh" the breasts), eight gems of the diadem (0042), the thousand bucklers, three mountains, three heights, the threefold "Veni", the threefold sense, the fourfold *quadrifariam*, and the five senses. Lemmata quoted twice were checked: Ct 4:1 *ascenderunt/ascendunt* is rendered "have come up / come up"; Ct 4:2 *inter eas / in eis* is "among them / in them"; Ct 4:8 *de … de* in the lemma against *A … a* at 1160C is kept; Ct 3:11 lacks *et* in the re-quote in both columns. Negations checked site by site, among others: 1143D *nisi … ne … non valentes*; 1144C *non repugnant, quin … non inconvenienter*; 1146D *sine quibus nulla*; 1148C *non … nisi*; 1149C *non omnes … non omnes … nihil confert*; 1150C *Neque … nisi*; 1151A *non nisi mystice*; 1151B *nulla … non gravat*; 1152B *non poena sed … non talione*; 1152D *vix aut nunquam*; 1153A–B *sine metu non sunt*; 1154C *nullum est vitium contra quod non*; 1155C–D *nec … neque … neque*; 1156A *minime … nullo modo*; 1157D *nullam habet essentiam*; 1161D *non permittimur*; 1162A *nihil … nisi … non habet meritum … non est contrarium*; 1162D *minime*; 1163D *non potest … nisi … non potest nisi*; 1164D *si pulchrae non sunt, neque sunt … nec pulchrae*; 1165D *non tantum non uniunt … nonnunquam*. All are carried.

## Candidates considered and rejected
- **0045, 1152D *crubescenti*** (a non-word with no [sic:]): withdrawn at the plate, since scan B prints *erubescenti*. TEI patch filed per cruces-0045. The English "does not blush" is correct.
- **0045, 1151D *vitta … vitta*** (read *vita*, "life"): *vitta* is printed twice and is the image under exposition. Logged in cruces-0045 as crux only. Rejected.
- **0042, 1145C *fide corporalitatis ad corporalitatem*:** literal, forced by the Latin. Logged 1145C.
- **0042, 1143D *tortitudinis*** (read *fortitudinis*?): a real word, and "crookedness" makes sense. Logged.
- **0044, 1148A *sublevitico*:** a case form without a case exponent in English, which is Pattern 9. Logged.
- **0044, 1150C *toto fonte illo divinitatis*** (no participle; English supplies "in"): this is minimal connective supply, and the sense is unchanged. Not reported.
- **0045, 1153A *vis charitatis quae soli Deo paret*** ("is manifest to"): *pareo* = "appear" is a legitimate sense. Not a defect.
- **0045, 1153C Virgil locator** ("Aeneid IV, 654", really VI 853): the locator is as printed, and it is Migne's note. Out of scope.
- **0046, 1157D *etsi aliqua … accesserit*** → "even if some one has come upon thee": "some one" means some [spot], though it could be read as a person. It's a stylistic ambiguity with no change of sense. Not reported.
- **0046, 1158C–D *bonum insitae sibi rationis … pulchritudinem*** (accusatives where ablatives of means are expected): the English renders the printed cases in apposition. It's literal and acceptable.
- **0047, 1160A *profecti sunt*** "went out": *proficiscor* is correct.
- **0047, 1161C *supra seducitur*:** logged in cruces-0045.
- **0048, 1163A Isa 3:16 *extenso collo et erecta cervice*** (Vulg. *extento collo*, no *erecta cervice*): the English matches what Migne prints. A [var:] is arguable but it isn't a departure of our English. Not reported. It could be looked at when [var:] consistency across the work is adjudicated.
- **0048, 1165C *sicut in anima peccatum est et culpa, sed vel poena, vel ad poenam*** (a clause about the corporal creature seems lost): the defect is in the Latin, and the English is literal. Not ours.
- **0048, 1166A *delecta*** "chosen things": logged in cruces-0045 as crux only.
- **0048, 1164A *quos credit in Christo*** "whom she believes in Christ": odd but literal. Not reported.
