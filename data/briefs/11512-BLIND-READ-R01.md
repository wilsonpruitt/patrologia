# 11512 blind read — R01 (chunks 0000–0006)

Reader: R01 (Opus). Date: 2026-09-26. Brief: `11512-BLIND-READ-BRIEF.md`.
Scope: chunks 0000–0006, both columns, every sentence.
Cruces were NOT opened before findings were formed.

## Findings

### F1 — 0003, col. 1012C — class 3 (mis-parsed grammar)
- **Latin:** *Nam quia Deus per se humano cordi loquens, capi non poterat, per aenigmata misericorditer movet et revocat*
- **English as it stands:** "For because God, speaking of himself to the human heart, could not be grasped,"
- **Proposed English:** "For because God, speaking by himself to the human heart, could not be grasped,"
- **Why:** *per se* is "by himself / directly", the contrast being with speech *per aenigmata* in the same sentence; "speaking of himself" makes God the topic of the speech rather than its unmediated speaker, and breaks the contrast the sentence turns on.
- **Confidence:** probable.

### F2 — 0003, col. 1012D–1013A — class 4 (added text)
- **Latin:** *debemus ad nuptias sponsi et sponsae cum intellectu charitatis [n: (cum veste nuptiali venire, ne si ista careamus, in tenebras exteriores (Matth. XXII) )] in caecitatem ignorantiae repellamur.*
- **English as it stands:** "[1013A] we ought to come to the nuptials of the bridegroom and bride with the understanding of charity [nt:"
- **Proposed English:** "[1013A] we ought [to come] to the nuptials of the bridegroom and bride with the understanding of charity [nt:"
- **Why:** the running Latin has no verb here; *venire* stands only inside the parenthesis (which is displaced running text). The English supplies "to come" unbracketed in the body AND renders it again in the `[nt:]`, so the body silently borrows a word from the note. Bracket the supply (or drop it) so the plate's gap stays visible.
- **Confidence:** probable.

### F3 — 0005, col. 1020D — class 3 (mis-parsed grammar; sense near-inverted)
- **Latin:** *Sed quae est haec confidentia, ut tam repente osculum oris Domini sui expetat, quasi sine ordine et gradu aliquo, ad tam praecipuum et summum accedere ratio non permittat?*
- **English as it stands:** "as if reason did not permit one to approach, without order and some degree, a thing so eminent and supreme?"
- **Proposed English:** "when, as it were, reason does not permit one to approach a thing so eminent and supreme without order and some degree?"
- **Why:** the question is why she dares so sudden a request *given that* reason forbids approaching the summit without order and steps (the next chunk presumably answers with the steps). "As if reason did not permit" reads as a counterfactual, implying that reason does permit, and it turns the objection into nonsense. *quasi* here is causal/qualifying ("since, as it were"), not the "as if" of a supposition contrary to fact.
- **Confidence:** probable.

### F4 — 0005, col. 1020B — class 2 (active read as passive)
- **Latin:** *in qua ascensiones disponat, quibus de virtute in virtutem, ad illud summum bonum, quod est Deus, per charita em perficiat*
- **English as it stands:** "she may be brought through charity [sic: *charita em*] to perfection in that highest good which is God,"
- **Proposed English:** "she may through charity [sic: *charita em*] make her way through to that highest good which is God,"
- **Why:** *perficiat* is active with the soul as subject and *ad illud summum bonum* as goal ("carry through / arrive at"); the English makes her passive ("be brought") and turns *ad* ("to") into "in", as if the perfection took place within the highest good rather than being the goal of the ascent the ladder image describes.
- **Confidence:** probable.

### F5 — 0006, col. 1021A — class 1 (a real word the faithful English lets read smoothly into a false statement; missing `[cj:]`)
- **Latin:** *Quia enim Graece ἔλεος, Latine* misericordia *dicitur et natura Dei est omnibus superferri liquoribus,* misericordia *autem* Domini super omnia opera ejus
- **English as it stands:** "and it is the nature of God to be borne above all liquids,"
- **Proposed English:** "and it is the nature of God [cj: *Dei*; read *olei*, "of oil"] to be borne above all liquids,"
- **Why:** the whole sentence is the *ἔλεος / ἔλαιον* (mercy / oil) pun that glosses Isaiah's "yoke rotted before the face of the OIL". Oil floats on every liquid, and so mercy is "above all his works". Floating above all liquids is the stock property of oil (cf. Isidore on *oleum*), not of God. As printed, the English has Wolbero assert a physical property of the Godhead, and the analogy's middle term vanishes. Pattern 18: the type is a real word, so a `[cj:]` rather than a `[sic:]`. Needs the plate before firing, since *Dei* vs *olei* could be our file's.
- **Confidence:** probable.

### F6 — 0006, col. 1024B — class 5 / marker (a non-word rendered smoothly with no `[sic:]`)
- **Latin:** *et pro sui fecunditata gratulabunda proclamans*
- **English as it stands:** "and, rejoicing for its fruitfulness, proclaiming:"
- **Proposed English:** after a plate read: "and, rejoicing for its fruitfulness [sic: *fecunditata*], proclaiming:" if Migne prints *fecunditata*; a TEI patch to *fecunditate* if the plate is clean.
- **Why:** *fecunditata* is not a Latin form here (ablative after *pro* wants *fecunditate*). Under Pattern 7/12 (as amended 2026-09-05), a non-word rendered for its sense carries a `[sic:]`; otherwise the defect's attribution is undisclosed. The English sense is right; only the marker (or the patch) is missing.
- **Confidence:** probable that it needs a marker or patch; which one is for the plate.

## Cruces check (done AFTER all findings above were written)

- **F1 (1012C *per se*):** not in the cruces.
- **F2 (1013A "to come"):** the structure is logged (`cruces-0000.md` 1013A; `cruces.md` 1013A; TEI-PATCH-LIST row 5). The crux says the plate prints the parenthesis as running text, *venire* included, and that a patch is proposed. The **duplicate "to come" in the English body** (the word is rendered once unbracketed in the body and again inside the `[nt:]`) is not logged. If the patch lands and the parenthesis becomes running text, the English should render *venire* once, in its place: "…with the understanding of charity (to come with the wedding garment, lest, if we lack it, into the outer darkness [Matth. XXII]) we be driven back…", with nothing supplied before "to the nuptials" beyond "we ought".
- **F3 (1020D *quasi … ratio non permittat*):** not in the cruces. (The 0005 cruces log only the *repento*→*repente* patch at 1020D.) Chunk 0006 opens by answering the question with *Igitur non de repente sed paulatim, et quasi quibusdam gradibus*, which confirms that the objection is real and is not a counterfactual.
- **F4 (1020B *perficiat*):** not in the cruces (1020B entries cover *quaerat* and *charita em* only).
- **F5 (1021A *natura Dei*):** **logged and declined** in `cruces-0005.md` ("plate confirmed … suggests *olei*. But the ἔλεος/*misericordia* play makes *Dei* intelligible, so there is no marker"). I disagree with the decline and keep the finding for adjudication. The same crux cites Wolbero's own 1025D *Oleum quippe omnibus superfertur liquoribus* (and 1032A). That is the author stating, in this very work, that the property belongs to oil, and it is the Pattern 18 test: the English asserts something the author did not.
- **F6 (1024B *fecunditata*):** **logged** as an open plate question (`cruces-0005.md` 1024B; `cruces.md`: "Scan B's copy cuts the line at the page edge. Unchanged."). So it's known but unresolved. I'm keeping it on this list only so that it isn't lost: it still needs a witness whose margin is intact.

## Chunks found clean

- **0000** (front matter: Ersmers' dedication, the epigram, Gravius to the reader): clean. Every sentence was checked. Polarity sites I checked, all correct: *non abs re*, *nec pro anima sola*, *nolui … nec etiam munus*, *neque thesaurum*, *a qua … non exiret*, *non semper centesimus*, *nondum fractos*, *neque communem in lucem prodire nisi*, *nolim*, *tantum abest ut*, *parum … nisi ubi*.
- **0001** (Wolbero's dedicatory letter): clean. Polarity sites checked: *nemo … nisi*, *nondum*, *nunquam*, *non possunt … nisi*, *nec … neque*, *non intrant*, *nihil … confert*, *non simpliciter*, *Nequidem … non dico … sed nec*, *non potest*, *non licet*, *nihil, nisi quod Libitina*, *non tantum*, *nusquam*, *non piguit*.
- **0002** (the Gerodhen abbot's censure): clean. Checked *nonnisi*, *non sine dolore*, *non immerito*, *non ut judex*, *non abolendum*, *non remisi*, *nulla res*, *non judicari*, *non sine diligentia*, *non negetis*.
- **0004** (end of the general preface, and the book heading): clean. Checked *non a se*, *non meo vitio*, *non horaria*, *nemo … nisi*, *vix*, *nec elevetur … nec dejiciatur*, *non tantum … sed*, *non potuimus*. Also Eph 3:18's four dimensions and their order, *quatuor* tomes / four periochae / thrice-repeated adjuration, and the Ct 2:7 / 8:14 lemmata against their `[var:]`s.
- **0003, 0005, 0006:** clean apart from F1–F6.

## Candidates considered and rejected

- **1007C (0001):** *Tricesimus … quas hoc numero … indicat viduarum*. The sixtyfold clause seems to have collapsed into the thirtyfold one. Both columns agree and the English is literal. Logged in the crux.
- **1008D (0001):** *qui inani otio, torpore*. The Latin is broken (perhaps *quam … torpere*), and the English "who in empty leisure, torpor" is literal. Logged in the crux.
- **1008C (0001):** *excusent, et materiae dignitas et … charitas*. The English makes *dignitas* and *charitas* the subject of "excuse", which is a defensible parse. Not a defect.
- **1011A (0003):** *curi*, marked `[sic:]`. Fine.
- **1012D (0003):** *Valde aut solerter* rendered "Greatly, or skilfully"; *serviamus* rendered "serve" (Gregory has *ferveamus*). Both are literal renderings of the printed text, so they fall under the ruling.
- **1013C (0003):** *mortalitatis decorem*, "comeliness of mortality", where *moralitatis* is the likely reading. Weighed as a `[cj:]`, but it's logged as crux-only ("odd, not false") and I accept that. Unlike F5, the sentence as printed does not assert a false property.
- **1014D (0004):** *per naturalitatis bonitatem affectu sanctae moralitatis disciplinam* lacks a verb, and the English is literal.
- **1016C (0004):** *inscrutabile et investigabile* rendered "inscrutable and unsearchable". This looked like a flipped polarity, but *investigabilis* in Church Latin is *in-* + *vestigabilis*, "unsearchable" (Vulg. Rom 11:33 *investigabiles viae ejus*). The English is correct.
- **1016C (0004):** *vix … considerare potest altitudo*. The active is rendered literally. Logged in the crux.
- **1017D (0005):** *tota menti inhabitans gratia Trinitatis* rendered "the grace of the Trinity dwelling wholly in the mind". *tota* agrees with *gratia* ("the whole grace"), so this is an adjective turned into an adverb. The sense is nearly the same. Not reported.
- **1017D (0005):** *sibipo rrigi*. The English does carry the `[sic:]`, and cruces-0005 records the patch as applied. Consistent.
- **1019A (0005):** *oris tui* in the re-quoted lemma carries a `[var:]`, and the first lemma has *oris sui*. The lemma was checked on both of its quotations and each English follows its own printed form.
- **1019C (0005):** Luke 11:34 *si autem nequam, tenebrosum erit*. The polarity and the ellipsis are both correct.
- **1023B (0006):** *animant et confortantur*, rendered passive "are strengthened", which is literal. *verberum*: the `[cj:]` is present and in the correct form.
- **1023B–C (0006):** *nonnunquam … praecurrere facit* is correctly "sometimes". The garbled *et quod prius est* is rendered literally.
- **1024A (0006):** *nullis neque … neque … avelli potero*. The English "neither … nor" keeps the polarity.
- **1024B (0006):** Gal 5 has nine fruits in the printed list (with *obedientia*), and the English has nine in the same order. The `[var:]` is present.
- **Scripture wording** in all seven chunks was checked word by word against the printed Latin, including Ex 15:1, Num 21:17–18, Dt 32:1, Is 5:1 (no *meo*, and the English has "the beloved"), Is 52:6, Is 9:6, Mt 3:2 (*appropinquabit*), Lk 8:13, Ps 16:15, Ps 51:10, 2 Cor 2:15, 1 Jn 2:27, Acts 9:17 and Rom 8:25. The English follows Migne throughout, and `[var:]`s are present where the wording is material. No conformation of the 7a″ kind was found.
