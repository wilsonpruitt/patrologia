# *Glossa ordinaria*, **Liber Sapientiae** (PL 113, 1167B–1184B) — cruces

Translated 2026-08-23, one translator, 7 chunks (6,456 Latin words), on Opus.
Blind-read and repaired 2026-08-23 (§§4–5 below); the work was **re-chunked** after one TEI
patch, 6,457 → 6,456 words, and chunk 0's `words:` frontmatter was re-synced to 1047.
`verify-english.mjs` clean: columns, notes and sections aligned, no duplicate paragraphs.

**Apparatus (after repair): 30 `[var:]` · 9 `[sic:]` · 1 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` ·
150 `[n:]`** (exact parity with the Latin twins).
Structure: PROLOGUS + CAPUT PRIMUM → CAPUT XIX (19 heads). **Guillemets: zero in both.**
**Question marks: 3 in the Latin (1170A, 1172D, 1173A), 3 in the English.** One `!` (1173A),
carried. **Em-dashes: zero.** Punctuation compared **band by band** across all 61 column
anchors — colons, semicolons, question marks, exclamations — **zero mismatched bands**
(19 mismatches were found by that scan and all 19 repaired; a total-only check would have
cancelled several of them).

Ruth (8968) §1 governs unchanged: `VERS. n.--` passes through verbatim, the lemma is
Englished, a fragmentary lemma is rendered as the phrase it stands for, the sigla are
ordinary `[n: …]`. Tobit (8970) §1(b) governs the abridgment formula: `*usque ad*` →
`*as far as*`, **no verb ever supplied to a resumption tail**. Neither was re-opened.

⚠ **`usque ad` occurs 62 times in this Latin and only 55 of them are the formula.** Seven
are ordinary prose and are translated as prose, not as the abridgment mark: 1168D *usque ad
passionem Christi*, 1172A *usque ad adventum Christi* and *usque ad finem mundi*, 1172A the
lemma *A fine ergo usque ad finem fortiter pertingit* (Sap. 8:1 itself, **not** an
abridgment — the single most dangerous look-alike in the work), 1181B *usque ad exteriores
tenebras*, 1183A *vindicta usque ad consummationem supervenit*. The English "as far as"
count is 55, matching the formula count exactly.

**Plate status: coverage `spot`, checked zero.** There are no `[cn:]` markers in this work
and none were expected. That is not a claim that the plate carries no notes.

---

## §1 · THE LEMMA DIVERGENCE TABLE

**Every italic span in `data/briefs/8969-lemmata.txt` was walked against
`sources/vulgate/clementine-flat.txt`, including the ones that agree.** Verdicts below are
mine, not the pre-scan's: a pre-scan ✓ was re-checked *at the verse being glossed*, and a
pre-scan ⚠ was cleared or convicted on the verse, never on the flag.

**Class note first, because it covers 51 of the 316 spans:** the bare `*usque ad*` spans are
Migne's abridgment mark, not scripture. They are not collated and take no marker. The four
spans that carry a resumption tail *inside* the italics (1167B, 1170D, 1177A, 1181A) are
collated below with the tail's own source.

**Second class note — the *Haec* lemmata of CAPUT X (1173B–1174A).** Sap. 10 opens five
glosses with a bare *Haec* + accusative whose verb Migne has cut. English cannot carry a
subject-plus-object with no verb, so convention 3 supplies the verb of the verse the
fragment opens, and **every supplied word is named here**: 10:1 *custodivit* → "kept" (and
*formatus est* → "formed"); 10:6 *liberavit* → "delivered"; 10:15 *liberavit* → "delivered".
10:13 is the hard one: its verse verb is **negative** (*non dereliquit*), so the expansion
reads "**She forsook not** the just man that was sold." ⚠ **The rival was to leave it
verb-less and let the comma mark the truncation, and it lost** because "She the just man that
was sold," is not English at all, which is precisely the case convention 3 exists for. The
tension with 7a — "no negation appears that the Latin does not print" — is real and is
disclosed here rather than hidden: 7a governs the rendering of Migne's *prose*; convention 3
expands a *lemma* from its verse, and the negation is part of the phrase the fragment stands
for. Dropping it would have made the lemma assert the opposite of Sap. 10:13. Two spans in
this family need no verb at all and got none: 10:5 *Haec et in consensu superbiae,* and 10:8
*Haec autem,*.

### CAPUT PRIMUM — CAPUT IV (1167B–1170A)

| col | Migne's lemma | rendering | verdict |
|---|---|---|---|
| 1167B | *Diligite justitiam,* | Love justice, | **agrees** Sap 1:1 |
| 1167B | *usque ad Diligite justitiam,* | as far as Love justice, | formula + Sap 1:1 tail, **agrees** |
| 1167B | *Terram.* | The earth. | **agrees** Sap 1:1 (*qui judicatis terram*) |
| 1167B | *Primum quaerite regnum Dei* | Seek ye first the kingdom of God | Mt 6:33 *Quaerite ergo primum regnum Dei* — word order, sense unchanged; introduced by *Quasi:*, an avowedly loose citation. **No marker.** |
| 1167B | *In simplicitate.* | In simplicity. | **agrees** Sap 1:1 |
| 1167C | *Quoniam in malevolam,* | For into a malicious soul, | **agrees** Sap 1:4; "soul" supplied — English cannot carry a bare feminine adjective |
| 1167C | *Animalis homo non percipit* | The sensual man perceiveth not | 1 Cor 2:14 drops *autem*; truncated at *etc.* **No marker.** |
| 1167C | *Benignus.* | Kind. | **agrees** Sap 1:6 |
| 1167D | *Tentavit Deus Abraham* | God tempted Abraham | **agrees** Gn 22:1 |
| 1167D | *Proba me et tenta me* | Prove me and try me | Ps 25:2 drops the vocative *Domine*. Not sense-bearing. **No marker.** |
| 1167D | *Et hoc quod continet omnia.* | And that which containeth all things. | **agrees** Sap 1:7 |
| 1167D–1168B | *scientiam habet vocis,* ×5 | hath knowledge of the voice, | **agrees** Sap 1:7; one English fixed across all five |
| 1167D–1168B | *quod continet omnia,* ×4 | that / this which containeth all things, | **agrees** Sap 1:7 |
| 1168B | *alii datur sermo scientiae,* | to another is given the word of knowledge, | 1 Cor 12:8 has *alii sermo scientiae*; *datur* is carried over from the parallel clause of the same verse. **No marker.** |
| 1168B | *ferebatur super aquas,* | was borne over the waters, | **agrees** Gn 1:2 |
| 1168B | *Propter hoc.* | For this cause. | **agrees** Sap 1:8 |
| 1168B | *Custodite ergo.* | Keep yourselves therefore. | **agrees** Sap 1:11 |
| 1168C | *Susurrones enim et detractores Deo sunt odibiles* | For whisperers and detractors are hateful to God | ⚑ **`[var:]`** — Rom 1:29–30 has *susurrones, detractores, Deo odibiles* as three items in a vice-catalogue; Migne makes the first two the subject of a proposition. The gloss (*Perniciosae sunt murmurationes et detractiones*) is built on the proposition. |
| 1168C | *Qui detrahit alicui rei, in futurum se obligat* | He that detracteth from any thing bindeth himself for the time to come | Prv 13:13 *ipse se in futurum obligat* — word order and a dropped *ipse*. **No marker.** |
| 1168C | *Os quod mentitur.* | The mouth that lieth. | **agrees** Sap 1:11 |
| 1168C | *Nolite zelare.* | Be not zealous for death. | **agrees** Sap 1:12; object *mortem* supplied (convention 3) |
| 1168C | *Et sponsiones.* | And covenants. | **agrees** Sap 1:16 |
| 1168C | *Dixerunt enim.* | For they have said. | **agrees** Sap 2:1 |
| 1168C | *Quoniam fumus.* | For smoke. | **agrees** Sap 2:2 |
| 1168D | *fumus et flatus est in naribus nostris.* | smoke and breath is in our nostrils. | ⚑ **`[var:]`** — Sap 2:2 reads *fumus flatus est*, "breath is smoke," with **no *et***. ⭐ Migne's *et* is what the gloss expounds: *corpus nostrum fumo et flatui comparatur, qui simul oriuntur* — two things, not one. Conforming this to the Vulgate would have destroyed the gloss. ⚑ **Repaired A1:** Migne prints the full stop **inside** the italic lemma and then lowercase *id est*; the first English merged the two sentences with a comma. The stop is restored and the English italic span now ends where the Latin's does. |
| 1168D | *Et sermo scintilla.* · *sermo* | And speech a spark. · speech | **agrees** Sap 2:2 |
| 1168D | *Ad commovendum cor nostrum.* | To move our heart. | **agrees** Sap 2:2 |
| 1168D | *Quia exstinctus cinis,* | Because ashes being quenched, | ⚑ **`[var:]`** — Sap 2:3 *qua extincta, cinis erit corpus nostrum*. Migne's masculine *exstinctus* agrees with nothing on the page. |
| 1168D | *spiritus diffundetur* | the spirit shall be poured abroad | **agrees** Sap 2:3 |
| 1168D | *Opprimamus.* | Let us oppress. | **agrees** Sap 2:10 |
| 1168D | *Videamus.* | Let us see. | **agrees** Sap 2:17 |
| 1169A | *Alios salvos fecit, seipsum autem,* | He saved others, himself however, | Mt 27:42 *seipsum non potest salvum facere*; Migne substitutes *autem* + *etc.* for the cut. **No marker** — the cut is marked on the page by *etc.* |
| 1169A | *Si Rex Israel est, descendat nunc de cruce* | If he be the king of Israel, let him now come down from the cross | **agrees** Mt 27:42 |
| 1169A | *Morte turpissima.* | By a most shameful death. | **agrees** Sap 2:20 |
| 1169A | *Quoniam Deus.* | For God. | **agrees** Sap 2:23 |
| 1169A | *Justorum autem animae.* | But the souls of the just. | **agrees** Sap 3:1 |
| 1169A | *Pretiosa in conspectu Domini mors sanctorum ejus* | Precious in the sight of the Lord is the death of his saints | **agrees** Ps 115:6 (Migne cites *Psal. CXV* — correct) |
| 1169B | *Scintillae.* | Sparks. | **agrees** Sap 3:7 |
| 1169B | *Et regnabit Dominus.* | And the Lord shall reign. | **agrees** Sap 3:8 |
| 1169B | *Regnum et potestas… quae est super coelum, dabitur populo sanctorum Altissimi* | …which is above heaven, shall be given… | ⚑⚑ **`[var:]`** — Dn 7:27 reads *quae est **subter omne caelum**, **detur** populo*. **above / under** is a polarity-level substitution, and *dabitur* for *detur* turns a jussive into a future. The largest single-word divergence in the work. |
| 1169B | *Sapientiam.* | Wisdom. | **agrees** Sap 3:11 |
| 1169B | *sterili* · *spadone* | barren woman · eunuch | **agrees** Sap 3:13–14 (Migne's ablatives are the gloss's own case) |
| 1169B | *In die agnitionis.* | In the day of acknowledgment. | **agrees** Sap 3:18 |
| 1169C | *O quam pulchra est,* · *Cum claritate,* | O how beautiful is, · With glory, | **agrees** Sap 4:1 |
| 1169C | *Praemium vincens.* | A reward surpassing. | ⚑ **Repaired B1 — conformation (7a″).** "Winning the reward" is Douay's Sap 4:2, where *vincens* agrees with the verse's subject and *praemium* is its object. Migne's lemma is the two words alone and **his own gloss decides against Douay**: *Praemium datum pro certamine transitorio, **quod** majus est illis certaminibus* — neuter *quod* resumes *praemium* as head, and *majus est illis certaminibus* glosses *vincens* as **surpassing**. Under "Winning the reward" the gloss's second half is a non-sequitur. Printed word order kept. **No marker** — nothing diverges from the Vulgate; the divergence was ours. |
| 1169C | *Multigena autem impiorum.* | But the multiplied brood of the wicked. | **agrees** Sap 4:3 |
| 1169C–D | *Plantationes.* · *vitulamina* | Plantings. · *vitulamina* | Not a divergence but a **scholion on one**: the gloss reports that μοσκεύματα was mistranslated *vitulamina* — which is exactly what the Clementine prints at Sap 4:3. Migne's own Wisdom text carries the reading his gloss corrects. **No marker**; this is the finding, not a defect. ⚑ **Repaired C1**, two ways: (a) *vitulus* is **roman** on the plate and had been set italic in the English — a span not on the plate, now removed; (b) *vitulamina* is a Latin word cited **as a word-form** (Jerome's note on why the codices read it where μοσκεύματα means *plantationes*, followed at once by *qui error tam multos codices praeoccupavit*). Englishing it to "calf-shoots" while leaving *vitulus* in Latin inverted which word got Latin treatment and severed *vitulus → vitulamina*, which is the entire argument. |
| 1169D | *Justus,* | The just man, | **agrees** Sap 4:7 |
| 1169D | *Placens Deo.* | Pleasing God. | **agrees** Sap 4:10 |
| 1169D | *Novit Deus pios de tentatione eripere, iniquos vero in diem judicii cruciandos reservare* | God knoweth how to deliver the godly… | ⚑ **`[var:]`** — 2 Ptr 2:9 reads *Novit **Dominus***, and *reservare cruciandos*. ⭐ **The work quotes this verse twice and differently**: at 1180C the same sentence reappears with *Dominus* and *in die judicii*. The divergence is internal to the book. (Migne's `[n: (I Petr. I)]` is a mis-citation for 2 Petr. 2:9 — a `citation-corrections.json` matter, never a text matter.) |
| 1169D | *Fascinatio.* | Bewitching. | **agrees** Sap 4:12 |
| 1169D | *absconderet eos in abscondito faciei suae a conturbatione hominum* | he might hide them in the hiding of his face… | Ps 30:21 *Abscondes eos… faciei **tuae***. **No marker, and the reason matters**: the gloss has woven the verse into its own *ut* clause, which forces second person into third. That is grammatical adaptation, not a different reading. Rejected candidate, logged. |
| 1170A | *Disrumpet illos inflatos sine voce,* | He shall burst them puffed up and speechless, | **agrees** Sap 4:19 |
| 1170A | *quia cum cognovissent Deum… evanuerunt in pravis cogitationibus suis* | …became vain in their depraved thoughts | ⚑ **`[var:]`** — Rom 1:21 has *in cogitationibus suis*; ***pravis* is Migne's addition**. ⭐ Again internal: at 1177A the same verse is quoted **without** *pravis* and without *Deum*. |

### CAPUT V — CAPUT VIII (1170A–1172D)

| col | Migne's lemma | rendering | verdict |
|---|---|---|---|
| 1170A | *Tunc,* | Then, | **agrees** Sap 5:1 |
| 1170A | *Lassati sumus,* | We wearied ourselves, | **agrees** Sap 5:7 |
| 1170A | *Quid nobis profuit superbia?* | What hath pride profited us? | **agrees** Sap 5:8; the `?` is Migne's and is carried |
| 1170A | *Tanquam umbra.* · *umbram,* | As a shadow. · a shadow, | **agrees** Sap 5:9 (*tanquam* is Migne's spelling of *tamquam*, not a variant) |
| 1170A | *avem,* | a bird, | **agrees** Sap 5:11 (*avis*; Migne's accusative is the gloss's own) |
| 1170A | *Talia dixerunt in inferno hi qui.* | Such things they said in hell, they that. | **agrees** Sap 5:14 |
| 1170B | *Lanugo est, quae a vento tollitur.* | It is down, which is taken away by the wind. | **agrees** Sap 5:15 |
| 1170B | *quia omnis caro fenum. Et tanquam spuma gracilis.* | because all flesh is grass. And as a thin froth. | Is 40:6 *omnis caro foenum* (spelling only) + **agrees** Sap 5:15. **No marker.** |
| 1170B | *Justi autem in perpetuum vivent.* | But the just shall live for evermore. | **agrees** Sap 5:16 |
| 1170C | *Accipiet armaturam.* | He shall take armour. | **agrees** Sap 5:18. ⚑ **Repaired G3:** the possessive "his" had no warrant — Sap 5:18's subject is *zelus illius* and no possessive stands with *armaturam*. Dropped. The supplied "He" stands (English needs a subject for *Accipiet*). |
| 1170C | *Et ad certum locum.* | And to a certain place. | **agrees** Sap 5:22 |
| 1170C | *Et flumina,* | And the rivers, | **agrees** Sap 5:23 |
| 1170C | *Melior est sapientia,* | Wisdom is better, | **agrees** Sap 6:1. ⚠ Migne prints **no `VERS.` address** on this one; reproduced as printed. |
| 1170C | *Exiguo enim conceditur misericordia.* | For to the little one mercy is granted. | **agrees** Sap 6:7 |
| 1170D | *Potentes autem potenter,* | But the mighty mightily, | **agrees** Sap 6:7. ⚑ **Repaired G2:** "shall be" belonged to no reading — the verse's verb is *tormenta patientur*, cut away by Migne's *etc.* The stump is left verbless, as the work's other cut heads are (1179C, 1183B). |
| 1170D | *usque ad cui autem multum, multum quoque exigetur ab eo.* | as far as but to whom much, of him also much shall be required. | Lc 12:48 *Omni autem cui multum datum est, multum quaeretur ab eo*. Near-synonym (*exigetur*/*quaeretur*) in an abridged tail. **No marker**; logged. |
| 1170D | *Non enim subtrahet personam.* | For he will not except any man's person. | **agrees** Sap 6:8 |
| 1170D | *Non est personarum acceptor Deus, unumquemque juxta vias suas judicat* | God is not a respecter of persons, he judgeth every man according to his own ways | ⚑ **`[var:]`** — Act 10:34 **ends** at *non est personarum acceptor Deus*. The second clause is in no verse of Acts; it is nearest Jer 17:10 (*qui do unicuique juxta viam suam*). A whole clause has been attached to the citation. |
| 1170D | *Ad vos ergo reges,* | To you therefore, O kings, | **agrees** Sap 6:10 (the pre-scan ⚠ was Migne's comma) |
| 1170D | *Diligite,* · *et habebitis disciplinam.* | Love them, · and you shall have discipline. | **agrees** Sap 6:12; object supplied. ⚠ *disciplina* = **discipline** everywhere in this work, lemma and gloss alike — the gloss argues from the repetition (*servat… non servat disciplinam*), so "instruction" in the lemma and "discipline" in the gloss would have broken the argument. |
| 1170D | *Si diligitis me, mandata mea servate* | If you love me, keep my commandments | **agrees** Jo 14:15 |
| 1170D | *Praeoccupat qui se concupiscunt.* | She preventeth them that covet her. | **agrees** Sap 6:14 |
| 1170D | *via, veritas, et vita* | the way, the truth, and the life | Jo 14:6 *via, et veritas, et vita*; woven into *Ipse enim est*. **No marker.** |
| 1170D | *Assidentem illam,* | Her sitting by, | **agrees** Sap 6:15 (drops *enim*) |
| 1170D | *Ecce ego sto ad ostium, et pulso, si quis aperuerit mihi, introibo ad eum et coenabo cum illo, et ipse mecum* | Behold, I stand at the door and knock… | ⚑ **`[var:]`** — Apc 3:20 has *Ecce sto* (no *ego*), *si quis **audierit vocem meam**, et aperuerit mihi **januam**, **intrabo ad illum***. A whole clause is gone and *ego* is added. |
| 1171B | *Si ergo delectamini.* | If then you be delighted. | **agrees** Sap 6:22 |
| 1171B | *Neque cum invidia tabescente.* | Neither will I go with pining envy. | **agrees** Sap 6:25; *iter habebo* supplied (convention 3) |
| 1171B | *Ergo accipite.* | Receive therefore. | **agrees** Sap 6:27 |
| 1171B | *Nemo enim ex regibus.* | For none of the kings. | **agrees** Sap 7:5 |
| 1171B | *Nec comparavi,* | Neither did I compare, | **agrees** Sap 7:9 |
| 1171C | *Venerunt,* | There came, | **agrees** Sap 7:11 |
| 1171C | *Ipsae sapientiae dux.* | The guide of wisdom itself. | ⚑ **`[var:]`** — Sap 7:15 reads *ipse sapientiae dux **est***. ⚠ **Two markers were weighed and `[sic:]` lost.** *Ipsae* is one letter from *ipse* and could be called broken type (Pattern 12 test 1, "no grammatical slot"). But it **does** construe as a late-Latin genitive of *ipsa* — "the guide of wisdom itself" — so the type is not broken past reading, and Pattern 12 expressly excludes a real word that occupies its slot. `[var:]` is the right marker because the divergence sits **inside a quoted scripture** (18a's WHERE rule). ⭐ **Plate read requested** (below): a single added letter is exactly the class Test 4 catches. |
| 1171C | *Ipse enim.* | For he. | **agrees** Sap 7:17 |
| 1171C | *quem qui sequitur, non ambulat in tenebris* | whom he that followeth walketh not in darkness | Jo 8:12 *qui sequitur me*; the relative is the gloss's own weave (*ipse enim illuminat… quem qui sequitur*). **No marker.** ⚠ The paragraph ends with **no terminal stop** in Migne; the English ends without one too. |
| 1171D | *Est enim in illa spiritus intelligentiae sanctus,* | For in her is the spirit of understanding, holy, | **agrees** Sap 7:22 (the pre-scan ⚠ was Migne's comma placement) |
| 1171D | *Homo* | man | ⚠ **Not a scripture lemma at all, and worth naming.** Sap 7:23 lists *humanus* among the Spirit's epithets, and the gloss is plainly expounding it — but Migne prints *Homo*, a different word, in the gloss's own sentence (*Homo enim ubique discurrit*). Rendered as printed, "man". **No marker**: it is not inside a quotation, and it construes. |
| 1171D | *Splendor gloriae et figura substantiae ejus* | The brightness of glory and the figure of his substance | **agrees** Hbr 1:3. (The unitalicized continuation *regens omnia verbo* answers Vulg. *portansque omnia verbo virtutis suae* and is the gloss's own paraphrase, outside the lemma.) |
| 1172A | *Attingit a fine.* · *A fine* · *usque ad finem fortiter pertingit,* | She reacheth from end. · From end · unto end she reacheth mightily, | Sap 8:1 *Attingit ergo a fine usque ad finem fortiter, et disponit omnia suaviter*. Migne's *pertingit* is supplied by the gloss where the verse has no verb in that clause. **No marker**; logged. ⛔ **This span contains *usque ad* and is NOT the abridgment formula.** |
| 1172A | *Glorificat contubernium,* · *generositatem illius,* · *contubernium Dei.* · *glorificat generositatem illius,* | She glorifieth the fellowship, · the nobility of him, · the fellowship of God. · she glorifieth the nobility of him, | Sap 8:3 *Generositatem illius glorificat, contubernium habens Dei*. **Same words, re-ordered by the gloss** so it can take them one at a time, and *habens* replaced by the gloss's own *Habet*. Not a variant reading. **No marker**; logged. *contubernium* = **fellowship** throughout. |
| 1172B | *Doctrix enim est disciplinae.* | For she is the teacher of discipline. | **agrees** Sap 8:4 |
| 1172B | *Deum nemo vidit unquam, sed Filius, qui est in sinu Patris, ipse enarravit* | No man hath ever seen God, but the Son… | ⚑ **`[var:]`** — Jo 1:18 reads ***unigenitus** Filius*. Migne's *sed Filius* drops "only-begotten" and turns an appositive into an adversative. |
| 1172B | *Et labores hujus.* | And her labours. | **agrees** Sap 8:7 |
| 1172B | *Sobrietatem enim et sapientiam.* | For sobriety and wisdom. | ⚑ **`[var:]`** — Sap 8:7 reads *sobrietatem enim et **prudentiam** docet*. A wisdom book substituting *sapientia* for *prudentia* in its own catalogue of virtues is worth a reader's knowing. |
| 1172B | *Admirabilis.* | Admirable. | **agrees** Sap 8:11 |
| 1172C | *Intrans in domum.* | Entering into the house. | **agrees** Sap 8:16 (drops *meam*) |
| 1172C | *Gustate et videte quoniam suavis* | Taste and see that he is sweet | **agrees** Ps 33:9, cut before *est Dominus*. The copula is supplied because English requires it; **no subject is supplied** — L3's "stop where the plate stops". **No marker.** |
| 1172C | *Puer autem,* | And I was a child, | **agrees** Sap 8:19 |
| 1172D | *Veni ad corpus incoinquinatum,* · *Et cum essem magis bonus,* | I came to a body undefiled, · And when I was yet more good, | **agrees** Sap 8:20 |

### CAPUT IX — CAPUT XI (1173A–1175B)

| col | Migne's lemma | rendering | verdict |
|---|---|---|---|
| 1173A | *Tu autem elegisti,* | But thou hast chosen, | Sap 9:7 *Tu elegisti me regem*; Migne adds *autem*. Connective only. **No marker.** |
| 1173A | *Quis enim hominum.* | For what man. | **agrees** Sap 9:13 |
| 1173A | *O altitudo divitiarum sapientiae et scientiae Dei!* | O the depth of the riches of the wisdom and of the knowledge of God! | **agrees** Rom 11:33; the `!` is Migne's and is carried |
| 1173A | *Et, Quis novit sensum Domini, aut quis consiliarius ejus fuit?* | And, Who hath known the mind of the Lord, or who hath been his counsellor? | Migne cites *Isa. XL*, but the words are Rom 11:34 (*Quis enim **cognovit**…*); Is 40:13 reads *Quis adjuvit spiritum Domini*. The wording difference (*novit*/*cognovit*) is not sense-bearing and the mis-citation is a `citation-corrections.json` matter. **No marker.** ⚠ Migne prints **one** `?` for two English questions; the English keeps **one**, joined by a comma. |
| 1173A | *Sensum autem.* | But the sense. | **agrees** Sap 9:17 |
| 1173B | *Haec illum, qui primus.* | She kept him who was first formed. | **agrees** Sap 10:1; *custodivit*/*formatus est* supplied — see the class note |
| 1173B | *Injustus in ira.* | The unjust man in his wrath. | **agrees** Sap 10:3 |
| 1173B | *Haec et in consensu superbiae,* | She also, in the consent of pride, | ⚑⚑ **`[var:]`** — Sap 10:5 reads *in consensu **nequitiae***. ⭐ **The gloss is built on Migne's word**: *Diabolus per **superbiam**…* against *humilitas Christi*. Conforming the lemma to *nequitiae* would have left the gloss expounding a word not on the page — 7a″'s exact mechanism. |
| 1173C | *Sodomorum et Gomorrhaeorum in cinerem redigens eversione damnavit…* | of the Sodomites and of the Gomorrhites, reducing it into ashes… | 2 Ptr 2:6–7; *injuriis* for *injuria*. ⚠ The word **outside** the italics is Migne's *Civitatem*, singular, where 2 Ptr 2:6 has *civitates*. Rendered "The city". **No marker** (it is the gloss's own lead-in word, not the quotation). |
| 1173C | *Mementote uxoris Lot* | Remember Lot's wife | Lc 17:32 *Memores estote uxoris Lot*. Different construction, identical sense. **No marker.** |
| 1173C | *Sapientiam enim,* · *Haec autem,* | For wisdom, · But she, | **agrees** Sap 10:8, 10:10 |
| 1173D | *Ego sum Deus Abraham patris tui, et Deus Isaac; terram in qua dormis dabo tibi, et semini tuo* | I am the God of Abraham thy father… | Gn 28:13 has *Ego sum **Dominus** Deus Abraham* and *tibi dabo* — a dropped divine name and word order. The gloss turns on neither. **No marker**; logged, and it is the closest decline in the work. |
| 1173D | *Haec venditum justum,* | She forsook not the just man that was sold, | **agrees** Sap 10:13; *non dereliquit* supplied — see the class note for why, and for the rival |
| 1174A | *Haec populum justum.* | She delivered the just people. | **agrees** Sap 10:15; *liberavit* supplied |
| 1174A | *Quoniam sapientia,* | Because wisdom, | **agrees** Sap 10:21 |
| 1174A | *Dixerit opera,* | She hath spoken the works, | ⚑⚑ **`[var:]`** — Sap 11:1 reads ***Direxit** opera **eorum***. *Dixerit* is a real Latin form (perfect subjunctive of *dico*) occupying a finite-verb slot, so Pattern 12 excludes `[sic:]` explicitly, and 18a's WHERE rule sends a scripture divergence to `[var:]`, not `[cj:]`. Rendered as printed; the gloss's own subject-matter (prophecy in the desert) belongs to *Direxit… in manibus prophetae*. |
| 1174B | *Habemus propheticum sermonem, cui bene facitis attendentes quasi lucernae lucenti in caliginoso loco* | We have the prophetic word… | ⚑ **`[var:]`** — 2 Ptr 1:19 reads *Et habemus **firmiorem** propheticum sermonem… in caliginoso* (no *loco*). A dropped comparative is a dropped claim. |
| 1174B | *De petra altissima,* | Out of the highest rock, | **agrees** Sap 11:4 |
| 1174B | *Per quae enim poenas,* | For by what things they suffered punishments, | **agrees** Sap 11:5; *passi sunt* supplied (convention 3) |
| 1174B | *Cum enim tentati.* · *Tormenta,* | For when they were tried. · Torments, | **agrees** Sap 11:10 |
| 1174C | *Irruit in nos terror vester* | Your terror is fallen upon us | **agrees** Jos 2:9 |
| 1174C | *Duplex,* | A double, | **agrees** Sap 11:13 |
| 1174D | *Cum occideret eos, quaerebant eum, et dilexerunt eum* | When he slew them, they sought him, and they loved him | ⚑ **`[var:]`** — Ps 77:34 reads *quaerebant eum **et revertebantur, et diluculo veniebant ad eum***. *dilexerunt* looks like a compression of *diluculo*, and it changes what the verse says the sinners did — in a gloss whose whole point is that these men **only feign** penance. |
| 1174D | *Non similiter justis,* | Not in like manner as the just, | **agrees** Sap 11:15 |
| 1174D | *Quod quidam errantes,* | For that some, going astray, | **agrees** Sap 11:16 |
| 1174D | *Sed omnia in mensura,* | But all things in measure, | **agrees** Sap 11:21 |
| 1175A | *Momentum staterae,* | The weight of a balance, | **agrees** Sap 11:23 |
| 1175A | *Ecce gentes sicut stilla situlae, et quasi momentum staterae repulatae sunt* | Behold the nations are as a drop of a bucket, and are reckoned [sic: repulatae] as the weight of a balance | ⚑ **`[sic:]`** — Is 40:15 reads *quasi stilla* and ***reputatae*** sunt. ***repulatae* is not a Latin word.** Corpus-frequency control: **1 occurrence corpus-wide (this one) against 82 `reputat-` forms.** The marker carries the type; "are reckoned" carries the sense, because *repulatae sunt* is the clause's only predicate (7a⁗ q. 1). *sicut* for *quasi* is not marked. ⭐ **Plate read requested.** |
| 1175A | *Verbo Domini coeli firmati sunt* | By the word of the Lord the heavens were established | **agrees** Ps 32:6 (*coeli*/*caeli* is orthography) |
| 1175A | *Omnes gentes quae non cognoverunt creatorem suum,* · *quasi stilla situlae sunt, et quasi momentum staterae* | All the nations which have not known their creator, · are as a drop of a bucket, and as the weight of a balance | The gloss's own re-weaving of Is 40:15 into its sentence. **No marker.** |
| 1175A | *et sicut gutta roris antelucani* | and as a drop of the morning dew | Sap 11:23 *tamquam gutta roris antelucani*. Connective only. **No marker.** |
| 1175B | *Diligis enim,* | For thou lovest, | **agrees** Sap 11:25 |
| 1175B | *Solem suum facit oriri super bonos et malos, et pluit super justos et injustos* | He maketh his sun to rise upon the good and the bad… | Mt 5:45 *qui solem suum oriri facit*. Word order only. **No marker.** |
| 1175B | *Justus enim Dominus, et justitias dilexit* | For the Lord is just, and hath loved justice | Ps 10:8 *Quoniam justus Dominus*. Connective only. **No marker.** |

### CAPUT XII — CAPUT XIII (1175B–1177A)

| col | Migne's lemma | rendering | verdict |
|---|---|---|---|
| 1175B | *O Quam bonus et suavis,* | O how good and sweet, | **agrees** Sap 12:1 (drops *est*). ⚠ Migne prints a **capital Q** mid-phrase; normalized in the English under Pattern 9's section-label logic (there is no English exponent for a stray majuscule, and the Latin column keeps it). ⚠ Migne prints **no `VERS.` address**; reproduced as printed. |
| 1175B | *Ille arguet mundum de peccato, et de justitia, et de judicio* | He shall convince the world of sin, and of justice, and of judgment | **agrees** Jo 16:8 (cut before *Et cum venerit*) |
| 1175B | *Illos enim antiquos inhabitatores.* | For those ancient inhabitants. | **agrees** Sap 12:3 |
| 1175C | *Quis enim dicet,* | For who shall say, | **agrees** Sap 12:12 |
| 1175C | *Justus est in omnibus viis suis* | He is just in all his ways | ⚑ **`[var:]`** — Ps 144:17 reads *Justus **Dominus** in omnibus viis suis*. The divine name has become a copula. |
| 1175C | *Cum ergo sis justus* | Since therefore thou art just | **agrees** Sap 12:15 (*Cum ergo sis justus*, exact). Migne's `[n: (Rom. IX)]` is a mis-citation — the words are Wisdom's own, and *unde sequitur* says so. Citation matter, not text. **No marker.** |
| 1175C | *Virtus enim,* | For thy power, | **agrees** Sap 12:16. ⚠⚠ **Migne prints VERS. 16 BEFORE VERS. 15** (1175C, then 1176A). **The order is reproduced exactly as printed and is not corrected.** |
| 1175D–1176A | *Mutabis eos, et mutabuntur: tu autem ipse es, et anni tui* | Thou shalt change them, and they shall be changed… | Ps 101:27+28 conflated; Vulg. 101:28 has *Tu autem **idem** ipse es*. A dropped *idem* across a verse join. **No marker**; logged. |
| 1175D | *Ego sum Deus, et non mutor* | I am God, and I change not | ⚑ **`[var:]`** — Mal 3:6 reads *Ego **enim Dominus**, et non mutor*. Divine name substituted, in a paragraph whose subject is precisely what may and may not be said of God. |
| 1175D | *Apud quem non est transmutatio* | With whom there is no change | **agrees** Jac 1:17 |
| 1175D | *Cum ergo,* | Since therefore, | **agrees** Sap 12:15 |
| 1175D | *Multa flagella peccatoris, sperantem autem in Domino misericordia circumdabit* | Many are the scourges of the sinner… | **agrees** Ps 31:10 (and again at 1181A, identically) |
| 1176B | *Judicium enim sine misericordia illi qui non fecit misericordiam.* | For judgment without mercy to him that hath not done mercy. | **agrees** Jac 2:13 |
| 1176B | *Insensate,* | Senselessly, | **agrees** Sap 12:23 |
| 1176B | *Quia commutaverunt veritatem Dei in mendacium, et servierunt creaturae potius quam Creatori* | Because they changed the truth of God into a lie… | Rom 1:25 *qui commutaverunt… et **coluerunt**, et servierunt*. Dropped *et coluerunt*; sense of the argument unchanged. **No marker**; logged. |
| 1176B | *Qui autem ludibriis,* | But they that by mockeries, | **agrees** Sap 12:26 |
| 1176B | *In his enim,* | For in these things, | Sap 12:27 reads *In **quibus** enim*. Demonstrative for relative, same referent, and the gloss (*Gentilitas dum idolis serviebat*) turns on neither. **No marker** — a deliberate decline, and the bar is Pattern 14's "changes the sense". |
| 1176C | *Scientia.* | Knowledge. | **agrees** Sap 13:1 |
| 1176C | *Initium sapientiae timor Domini. Intellectus bonus omnibus facientibus eum* | The fear of the Lord is the beginning of wisdom… | **agrees** Ps 110:10 |
| 1176C | *De his* · *Neque operibus.* | From these · Nor by the works. | **agrees** Sap 13:1. ⚠ The column anchor **[1176D] falls inside this lemma** in Migne (*Neque [1176D] operibus.*) and is reproduced inside the italics in the English. |
| 1176C | *Sed tamen,* | But yet, | **agrees** Sap 13:6 |
| 1176C–D | *Revelatur enim ira Dei de coelo super omnem impietatem eorum… quia quod nolum est Dei, manifestum est in illis* | For the wrath of God is revealed… because that which is known [sic: nolum] of God is manifest in them | ⚑ **Both markers fire.** `[var:]` — Rom 1:18 reads *super omnem impietatem, **et injustitiam hominum** eorum*: a clause is gone. `[sic:]` — ***nolum* is not a Latin word**; Rom 1:19 has *notum*. Corpus control: **1 occurrence corpus-wide against 33 `notum`.** "known" is supplied beside the marker because the quarantine would otherwise take the clause's predicate complement (7a⁗'s fourth question). ⭐ **Plate read requested.** |
| 1177A | *cum cognovissent, non sicut Deum glorificaverunt, sed evanuerunt in cogitationibus suis* | when they had known him, they glorified him not as God, but became vain in their thoughts | Rom 1:21, quoted a **second** time and abridged differently from 1170A: here *Deum* (the object of *cognovissent*) and *aut gratias egerunt* are gone, and *pravis* is **absent**. **No marker here** — the quotation is woven into the gloss's own *Sed* clause and abridged; the material divergence in this work is *pravis*, and it is marked where it occurs. ⭐ **The two quotations disagreeing with each other is itself the finding.** |
| 1177A | *Infelices,* | Unhappy, | **agrees** Sap 13:10 |
| 1177A | *Aut si quis artifex.* | Or if any artificer. | **agrees** Sap 13:11 |
| 1177A | *usque ad Quorum Deus venter est, et gloria in confusione eorum* | as far as Whose God is their belly, and their glory is in their confusion | Phlp 3:19 *in confusione **ipsorum***. Pronoun only. **No marker.** |

### CAPUT XIV (1177B–1179B)

| col | Migne's lemma | rendering | verdict |
|---|---|---|---|
| 1177B | *Iterum alius navigare,* | Again, another purposing to sail, | **agrees** Sap 14:1 |
| 1177C | *Quoniam dedisti.* | For thou hast given. | **agrees** Sap 14:3 |
| 1177C | *Sed ut non essent,* | But that they might not be void, | **agrees** Sap 14:5 |
| 1177D | *In qua pauci, id est octo animae salvae factae sunt per aquam: quod et nos nunc similis formae salvos fecit baptisma* | Wherein a few, that is, eight souls, were saved by water: which also **we** now… | ⚑ **`[var:]`** — 1 Ptr 3:21 reads *Quod et **vos** nunc*. Person changed, in a sentence the gloss then applies to "us". |
| 1178A | *Stultus factus est omnis homo a scientia sua, confusus est factor in sculptili: quia mendax conflator ejus…* | Every man is become a fool by his own knowledge… | ⚑ **`[var:]`** — Jer 10:14 reads *a scientia* (no *sua*), *confusus est **artifex omnis** in sculptili, **quoniam falsum est quod conflavit***; 10:15 reads *Vana sunt, et opus risu dignum*. Three substitutions in one span. ⚠ **This italic span is absent from `data/briefs/8969-lemmata.txt`** — the inventory jumps from the 1177D Peter citation to VERS. 8 at 1178A. Reported so the brief generator can be checked. |
| 1178A | *Et qui fecit illud.* | And he that made it. | **agrees** Sap 14:8 |
| 1178B | *Propter hoc.* | For this cause. | **agrees** Sap 14:11 |
| 1178B | *Initium.* | The beginning. | **agrees** Sap 14:12 |
| 1178C | *Non enim,* | For not, | ⚑ **Repaired B2 + `[var:]`.** Migne prints ***Non***; the Clementine at Sap 14:13 reads ***neque* enim erant ab initio**. "Neither" was the Vulgate's word, not the plate's — conformation at the smallest scale. **The control is inside this book and of the same class:** 1181C *Neque enim.* → "For neither.", so two different Latin words had been given one English word, and the one that lost its identity was Migne's. Now `[var: Vulg. Sap 14:13 *neque enim*]`. |
| 1178C | *Disperdat Dominus universa labia dolosa, et omnes qui loquuntur mendacium* | May the Lord destroy all deceitful lips, and all that speak lies | ⚑ **`[var:]`** — Ps 11:4 reads *et **linguam magniloquam***. The second clause here belongs to Ps 5:7 (*perdes omnes qui loquuntur mendacium*): two verses spliced. |
| 1178C | *Dii, qui coelos et terram non fecerunt, pereant de terra* | Let the gods that have not made heaven and earth perish from the earth | **agrees** Jer 10:11 (cut at *etc.*) |
| 1178C | *Incommunicabile nomen.* | The incommunicable name. | **agrees** Sap 14:21 |
| 1178C | *Aut enim filios suos.* · *Aut obscura sacrificia.* | For either they sacrifice their own sons. · Or dark sacrifices. | **agrees** Sap 14:23 |
| 1179A | *Omnia commista.* | All things mingled together. | **agrees** Sap 14:25 |
| 1179A | *Infandorum enim.* · *Initium* · *Finis.* | For of the unspeakable. · the beginning · The end. | **agrees** Sap 14:27 |
| 1179A | *omnis peccati, superbia est* | of all sin is pride | Sir 10:15 *initium omnis peccati **est superbia***. Word order only. **No marker.** |
| 1179A | *Aut enim dum laetantur.* | For either they are mad while they rejoice. | **agrees** Sap 14:28 |
| 1179A | *Non assumes nomen Dei tui in vanum, et per nomen deorum externorum ne juretis* | Thou shalt not take the name of thy God in vain… | ⚑ **`[var:]`** — Ex 20:7 reads *nomen **Domini** Dei tui*; the second clause is Ex 23:13 (*per nomen externorum deorum **non jurabitis***), spliced on under a single *Exod. XX* citation. |
| 1179B | *Non enim jurantium est virtus.* | For the power is not of them that swear. | ⚑ **`[var:]`** — Sap 14:31 reads *Non enim **juratorum** virtus* (no *est*): the power of the **things sworn by**, not of the swearers. Migne's participle changes who the sentence is about, and it is the sentence the whole chapter ends on. ⚑ 2a note: Migne cuts before the Vulgate's *sed peccantium poena*, so the correlative that fixes the negation's scope is **not printed**; the English puts the negative on the predicate phrase, which is where the full verse puts it. |

### CAPUT XV — CAPUT XIX (1179B–1184B)

| col | Migne's lemma | rendering | verdict |
|---|---|---|---|
| 1179B | *Tu autem,* | But thou, | **agrees** Sap 15:1 |
| 1179B | *Cognoscetur Dominus judicia faciens, in operibus manuum suarum comprehensus est peccator* | The Lord shall be known when he executeth judgments… | **agrees** Ps 9:17 |
| 1179B–C | *Qui habet spem in eo, sanctificat sicut et ille sanctus est: et omnis qui in eo manet, non peccat* | He that hath hope in him sanctifieth, even as he also is holy… | ⚑ **`[var:]`** — 1 Jo 3:3 reads *sanctificat **se***. The dropped reflexive leaves the verb with no object, and the English leaves it so (Pattern 7). |
| 1179B | *Nosse enim te,* | For to know thee, | **agrees** Sap 15:3 |
| 1179B | *Haec est enim vita aeterna, ut cognoscant te verum Deum* | For this is life everlasting, that they may know thee the true God | ⚑ **`[var:]`** — Jo 17:3 reads *ut cognoscant te, **solum** Deum verum*. A dropped *solum* in a credal sentence. |
| 1179B | *Non enim in errorem.* | For not into error. | **agrees** Sap 15:4 |
| 1179B | *Malorum amatores,* | Lovers of evil things, | **agrees** Sap 15:6 |
| 1179B | *Similes illis fiant, qui faciunt ea, et omnes qui confidunt in eis* | Let them that make them become like unto them… | **agrees** Ps 134:18 |
| 1180A | *Cinis est cor eorum,* | Their heart is ashes, | ⚑ **`[var:]`** — Sap 15:10 reads *Cinis est **enim** cor **ejus***: singular. The gloss continues in the plural (*cogitatio eorum*), so the number Migne prints is the number the gloss uses. |
| 1180A | *Hic enim scit,* | For he knoweth, | **agrees** Sap 15:13 |
| 1180A | *Melior est.* | He is better. | **agrees** Sap 15:17 |
| 1180B | *cum in honore sit, non intelligit: et comparatur jumentis insipientibus* | when he is in honour he understandeth not: and is compared to senseless beasts | ⚑ **`[var:]`** — Ps 48:21 reads *cum in honore **esset**, non **intellexit**. **Comparatus est** jumentis insipientibus*. Migne's present tense is what the gloss's own present-tense argument requires; the English keeps the present. |
| 1180B | *Insensata.* | Senseless. | **agrees** Sap 15:18 |
| 1180C | *Pro quibus,* | Instead of which, | **agrees** Sap 16:2 (and 16:20 at 1181A) |
| 1180C | *Sed non in perpetuum.* | But not for ever. | **agrees** Sap 16:6 |
| 1180C | *Illos enim,* | For them, | **agrees** Sap 16:9 |
| 1180C | *Sed tuus, Domine, sermo.* | But thy word, O Lord. | **agrees** Sap 16:12 |
| 1180D | *Homo autem occidit.* | But man killeth. | **agrees** Sap 16:14 |
| 1180D | *Negantes enim nosse,* | For denying to know, | ⚑ **`[var:]`** — Sap 16:16 reads *Negantes enim **te** nosse **impii***. The dropped *te* leaves the infinitive with no object; the English leaves it so. |
| 1180D | *Quodam enim tempore.* | For at one time. | **agrees** Sap 16:18 |
| 1181A | *usque ad Multa flagella peccatoris…* | as far as Many are the scourges of the sinner… | formula + **agrees** Ps 31:10 |
| 1181A | *Creatura enim,* · *Propter hoc,* | For the creature, · For this cause, | **agrees** Sap 16:24, 16:25 |
| 1181B | *Ut notum omnibus,* | That it might be known to all, | **agrees** Sap 16:28 |
| 1181B | *Verbum caro factum est, et habitavit in nobis.* | The Word was made flesh, and dwelt among us. | **agrees** Jo 1:14 (drops the opening *Et*) |
| 1181B | *Magna enim.* | For great. | **agrees** Sap 17:1 |
| 1181B | *Omnis qui male agit, odit lucem* | Every one that doth evil hateth the light | Jo 3:20 *Omnis **enim** qui*. Connective only. **No marker.** |
| 1181B | *Eratis aliquando tenebrae, nunc autem lux in Domino* | You were heretofore darkness, but now light in the Lord | Eph 5:8 *Eratis **enim** aliquando*. Connective only. **No marker.** |
| 1181B | *Neque enim.* | For neither. | **agrees** Sap 17:4 |
| 1181C | *Tristes personas* · *sonitus descendens,* · *personae tristes,* | sad apparitions · a sound coming down, · sad apparitions, | **agrees** Sap 17:4; the accusative *Tristes personas* is the gloss's own, governed by *dicit… terruisse*. One English fixed for both forms. |
| 1181D | *Timore plenus.* | Full of fear. | **agrees** Sap 17:6 |
| 1181D | *Et magicae artis,* | And of the magic art, | **agrees** Sap 17:7 |
| 1181D | *Et aerem,* | And the air, | **agrees** Sap 17:9 |
| 1181D | *Proditio,* | A betraying, | **agrees** Sap 17:11 |
| 1182A | *Illi autem,* | But they, | **agrees** Sap 17:13 |
| 1182A | *Omnis enim orbis.* | For the whole world. | **agrees** Sap 17:19 |
| 1182B | *Imago tenebrarum.* | An image of darkness. | **agrees** Sap 17:20 |
| 1182B | *Santis autem tuis.* | But to thy holy ones [sic: Santis]. | ⚑ **`[sic:]`** — Sap 18:1 reads *Sanctis*. ***Santis* is not a Latin word**; corpus control: **3 occurrences, all in this work's own files (chunk, manifest, incipit), against a healthy `Sanctis` elsewhere.** The sense is supplied beside the marker; the marker takes no second italic run, since it sits inside an already-italic lemma (Pattern 10). ⭐ **Plate read requested.** |
| 1182B | *Digni quidem,* | Worthy indeed, | **agrees** Sap 18:4 |
| 1182C | *Absconse enim sacrificabant.* | For they sacrificed secretly. | **agrees** Sap 18:9 |
| 1182C | *Sacrificium Deo spiritus contribulatus* | A sacrifice to God is an afflicted spirit | **agrees** Ps 50:19 |
| 1182C | *In me sunt, Deus, vota tua* | In me, O God, are thy vows | **agrees** Ps 55:12 |
| 1182C | *Omnes moriemur* | We shall all die | **agrees** Ex 12:33 (Migne cites *Exod. XI*; citation matter) |
| 1182C | *Omnipotens sermo tuus.* | Thy almighty word. | **agrees** Sap 18:15 |
| 1182C | *In principio erat Verbum* | In the beginning was the Word | **agrees** Jo 1:1 |
| 1182D | *Visiones.* | Visions. | **agrees** Sap 18:19 |
| 1182D | *Tetigit autem tunc et justos.* | But then it touched the just also. | **agrees** Sap 18:20 |
| 1182D | *In veste enim poderis.* | For in the robe reaching to the feet. | **agrees** Sap 18:24 |
| 1183A | *Si cognovissent, nunquam Dominum gloriae crucifixissent* | If they had known, they would never have crucified the Lord of glory | **agrees** 1 Cor 2:8 (drops *enim*) |
| 1183A | *Impiis autem,* | But upon the wicked, | **agrees** Sap 19:1 |
| 1183B | *Videntes tua mirabilia.* | Seeing thy wonderful works. | **agrees** Sap 19:8 |
| 1183B | *Benedic, anima mea, Dominum* | Bless the Lord, O my soul | Ps 103:1 reads *Domino*, dative. Case only, sense identical; English has no exponent for the difference. **No marker.** |
| 1183B | *Sine intermissione orate, in omnibus gratias agite* | Pray without ceasing, in all things give thanks | **agrees** 1 Thes 5:17+18 conflated, words exact |
| 1183B | *Produxit terra.* | The earth brought forth. | ⚑ **`[var:]`** — Sap 19:10 reads ***eduxit** terra muscas*. |
| 1184A | *Juste enim patiebantur.* | For they suffered justly. | **agrees** Sap 19:12 |
| 1184A | *In se elementa.* | In themselves the elements. | **agrees** Sap 19:17 (drops *enim*) |
| 1184A | *Unde aestimari,* | Whence it may be reckoned, | **agrees** Sap 19:17 |
| 1184B | *In omnibus enim magnificasti.* | For in all things thou hast magnified. | **agrees** Sap 19:20 |
| 1184B | *Vasa figuli probat fornax, et homines justos tentatio tribulationis* | The furnace trieth the potter's vessels, and the trial of tribulation just men | **agrees** Sir 27:6 |

⭐ **Summary of the collation: 29 `[var:]` fired, 3 `[sic:]` fired on lemma type
(1175A, 1176D, 1182B), and roughly forty spans were checked and found to agree with the
Clementine at the verse being glossed.** The remaining declines are itemized in §3.

⭐ **Two divergences are internal to the book and would be invisible to a per-lemma check:**
2 Ptr 2:9 at 1169D (*Deus*) against 1180C (*Dominus*), and Rom 1:21 at 1170A (*in **pravis**
cogitationibus*) against 1177A (*in cogitationibus*). Both are Migne quoting himself two
ways within seventeen columns.

---

## §2 · SECTIONS READ CLEAN, BY COLUMN BAND

Read against the Latin twin, marker-stripped, asking only *does it assert what he asserts?*

- **1167B–1167D** (Prologue, Sap 1:1–1:7) — clean. The Prologue's own claim that the book is
  absent from the Hebrew canon and that its style *Graecam magis eloquentiam redolet* is the
  standing reason this work's lemmata diverge more freely than Ruth's, and is carried plainly.
- **1168B–1168C** (Sap 1:7–1:16) — clean apart from the Rom 1:29 `[var:]`.
- **1169A–1169B** (Sap 2:17–3:8) — clean apart from the Dan 7:27 `[var:]`.
- **1169C–1170A** (Sap 3:18–4:19) — clean apart from the 2 Ptr 2:9 and Rom 1:21 `[var:]`.
- **1170B–1170C** (Sap 5:14–6:7) — clean. The `non solum … sed` at 1170C was checked under 2a
  and the negative sits on *solum*/*opera*, confirmed by the *sed* member.
- **1171B–1171D** (Sap 6:22–7:24) — clean apart from Sap 7:15 and the *Homo* note.
- **1172A–1172D** (Sap 8:1–8:20) — clean apart from Jo 1:18 and Sap 8:7.
- **1173A–1173D** (Sap 9:7–10:8) — clean apart from Sap 10:5.
- **1174A–1174D** (Sap 10:13–11:21) — clean apart from Sap 11:1, 2 Ptr 1:19, Ps 77:34.
- **1175C–1176B** (Sap 12:12–12:26) — clean apart from Ps 144:17 and Mal 3:6. The
  out-of-sequence VERS. 16 / VERS. 15 is Migne's and is reproduced.
- **1177B–1177D** (Sap 14:1–14:5) — clean apart from 1 Ptr 3:21.
- **1178B–1179A** (Sap 14:11–14:27) — clean apart from Ps 11:4 and Ex 20:7. The Quintilian
  quotation at 1178D is set by Migne **without quotation marks**; none were added (Pattern 6).
- **1179B–1180B** (Sap 15:1–15:18) — clean apart from the four `[var:]` named above.
- **1180C–1181B** (Sap 16:2–16:28) — clean apart from Sap 16:16.
- **1181D–1182B** (Sap 17:6–17:20) — clean.
- **1182C–1184B** (Sap 18:9–19:20) — clean apart from Sap 19:10. The `sicut … ita` at 1184A
  and the `non … sed` in the same sentence were both re-checked under 2a (see §3).

---

## §3 · CANDIDATES RAISED AND REJECTED, AND THE CALLS MADE UNDER DOUBT

### The `[cj:]` — 1177A *ex invisibilibus*, and why `[sic:]` and `[var:]` both lost

Migne prints *Ut enim Deus invisibilis ex **invisibilibus** cognosceretur, opus ab eo factum
est, quod opificem manifestaret*. As printed the sentence says the invisible God was to be
known **from invisible things** — and its own next clause says a **work** was made to show
the workman, which is Rom 1:20's argument from the visible. The English asserts what the
author is arguing against: Pattern 18's founding shape.

- **`[sic:]` lost** because nothing is broken: *invisibilibus* is a correct, well-formed
  Latin word occupying its slot. Pattern 12 excludes exactly this.
- **`[var:]` lost** because the words are **the gloss's own prose**, not a quoted scripture.
  18a's separating rule is *where the divergence sits*, not how it reads.
- So: `[cj: *invisibilibus*; read *visibilibus*, "from visible things"]`, additive, with
  Migne's word keeping its English. This is the only `[cj:]` in the work.

### Rejected `[cj:]` candidates

- **1170C *flagellum collectionis*** — "the scourge of gathering," in a sentence about hearts
  that preaching does not soften. *collectio* in medical Latin is an abscess, and *correptionis*
  is an obvious guess. **Declined**: the sentence still asserts what the gloss asserts (a
  scourge breaks what preaching cannot), so it fails Pattern 18's bar, which is falsity and not
  obscurity. Rendered literally.
- **1179D *ad notandum Deum vivum*** — one expects *cognoscendum*. **Declined**: *notare* =
  "to mark, take note of" renders in place and asserts nothing false.
- **1170B *qua praesentia mensura tantum putant*** — rough past construing. Rendered as closely
  as the words allow ("whereby they reckon present things only by measure"). **Declined**: a
  crux, not a conjecture; nothing here is a real word making a false claim.
- **1173D Gn 28:13's dropped *Dominus*** — the closest `[var:]` decline in the work. Rejected
  because the gloss's subject is Jacob's ladder and the divine name is not what it turns on.

### Rejected `[sic:]` candidates

- **1176C *ipse est sapientia*** (Job 28:28) against Vulg. *ipsa*. **Declined under Pattern 9**:
  Latin grammatical gender has no English exponent; there is nothing to render either way.
  Marked here so a later sweep does not churn it. It is also unitalicized — the gloss's own
  quotation, not a lemma.
- **1170D *Melior est sapientia* printed with no VERS. address**, and **1175B *O Quam bonus***
  the same. Not defects; Migne's own layout, reproduced.
- **1171C's missing terminal stop** after *[n: (Joan. I)]*. Pattern 8: never supply. The English
  ends without one.
- **1181C *quod autem dicit.*** — Migne prints a **full stop** in the middle of an
  accusative-and-infinitive construction. Preserved, and the English breaks where he breaks.
  **Declined as a defect to mark**: Pattern 8 governs, and no marker in this corpus means
  "his punctuation will not construe."
- **1176B *facerent, ea, quae non conveniunt*** — an intrusive comma after *facerent*. The
  English drops it, because English syntax has no exponent for a comma in that slot. Logged
  rather than marked; the Latin column keeps it.

### 2a trigger sites: every one, and what fired

Nine sites carry a printed negative with *solus*/*omnis*/*omnino*/*tantum*/`non solum … sed`/
`sicut … ita` adjacent. All nine were re-derived from the sentence's own structure:

1. **1170C** *non solum opera, sed cognitiones* — negative on *solum*/*opera*, `sed` member proves it. ✓
2. **1175D** *nisi indebitam mortem susciperet, non nos… liberaret* — on *liberaret*; the *omnia* clauses are separate sentences. ✓
3. **1176A** *contra dominatorem omnium se repugnare non posse* — on *posse*; *omnium* qualifies *dominatorem* and is affirmed. ✓
4. **1177A** *ut Deus omnium intelligeretur… quod non possunt alii* — on *possunt*, subject *alii*. ✓
5. **1175A** *per quem omnia facta sunt, et sine quo factum est nihil* — *omnia* affirmed, *nihil* under *sine quo*. ✓
6. **1178A** *Stultus factus est omnis homo… nec est spiritus in eis* — *omnis* affirmed, *nec* on *est*. ✓
7. **1171D** *cui non datur spiritus ad mensuram* — on *datur*; *omnia* is the next sentence. ✓
8. **1182B** *sicut… corpora ibi nullo bono operi utilia: ita et hic animae* — *nullo* on *bono operi*, not on the pivot. ✓
9. ⚠ **1184A** *non enim creaturam sibi condidit contrariam, **sed** per omnia voluntati suae
   consentaneam* — **this one was caught by the test and repaired.** The first draft read "he
   did not found a creature contrary to himself", floating the negative onto the verb. The
   `sed` member pivots on *contrariam*/*consentaneam*, so the negative belongs on
   ***contrariam***: "he founded a creature **not contrary** to himself, but agreeable in all
   things to his own will." Exactly 8990 @0614B's shape, and it read better wrong.

Also checked: **1184B** *non suae **tantum** conditioni, sed Creatoris… voluntati* — "served
not only their own condition, but the will of the Creator." ✓ And **1183A** *non Deum sed
hominem purum credidit* — the *sed* fixes the host as *Deum*: "believed him to be **not God**
but mere man." ✓

### Unexpressed subjects supplied, each one named

- **1167B** *reprimitis* — "you": the *qui judicatis terram* of Sap 1:1, plural, so **you** and
  not thou (Pattern 17).
- **1167C** *invehitur*, **1169C** *ait*, **1170D** *convertit*, **1176C** *dicit* — "he": the
  writer of the book, established in the Prologue. Consistent throughout.
- **1168C** *celare non possunt* — the unexpressed **object** is *errorem suum*, from the clause
  before; rendered "hide **it**".
- **1172A** *asserit*, *exponit* — "she": Sapientia, subject of *Attingit* in the lemma (Sap 8:1).
  Held for the whole of CAPUT VIII, including *glorificat* and *repraesentat*.
- **1173D** *perduxit* — "it": *Christi misericordia*, the subject of *liberavit* in the same
  sentence. Not Christ, and not the martyrs.
- **1177C** *praeparat* — "it": *Dei potentia*, subject of *traduxit* and *divisit*.
- ⚠ **1183A** *praenoscebat*, *viderat*, *credidit* — **the subject is inside the part the
  abridgment cut**, and no candidate can be proved. Rendered with a bare "it", which is not
  wrong; ⚑ **the blind read asked for the candidates by name (E4), and here they are**, in
  descending order of warrant: (1) **the high priest** — *pontifex*, standing behind
  *in figura pontificali*, the phrase the abridgment ends on, and the only person in view;
  (2) **the synagogue** (*synagoga*, fem. sg.), the Glossa's habitual subject for foreknowing
  Christ and then refusing him; (3) **the Hebrew people**, the collective the *Byssum terrae
  deputant Hebraei* opening names. Nothing decides among them, so nothing is chosen in the
  text. ⛔ The negation *non Deum sed hominem purum* is correctly scoped on *Deum* and was
  left alone.
- ⚑ **1172C** *exstitit*, *qui stat*, *super quem*, *ipsum* — **repaired (E1)**, and the
  blind read's framing was half right. It reported an English "he" with no antecedent, which
  was true: the sentence had rendered *Partus Virginis* as "The Virgin's childbearing", an
  English **it**. But the choice is not he-versus-it; it is **what *partus* means**. The
  clause chain ends *ipsum gentes deprecabuntur* — a childbearing is not entreated — and
  *qui stat in signum populorum* / *super quem continebunt reges os suum* are Is 11:10 and
  52:15, where the referent is a person. *Partus* also means the **offspring**, and on that
  sense masculine *qui*, *quem*, *ipsum* and *admirandus* all construe with the head. Now
  "The Virgin's **offspring** was to all men **one** to be wondered at, because **he** came
  forth…" — nothing imported, the antecedent supplied from the Latin word itself.
- ⚑ **1176D** *qui … distribuebant* — **repaired (E3)**. The plural verb agrees with *alii*,
  the worshippers, but English word order bound "who" to "the stars" standing next to it, and
  stars distributing their own positions reads plausibly enough to pass unnoticed. Now "others
  the circle of the stars, **men** who distributed…".
- ⚑ **1182D** *qui … sanctificavit* — **repaired (E2)**. Masculine singular *qui* refers to
  the **Son** (*Omnipotens sermo tuus … hic tunc … fecit*), but the English bound it to "the
  Egyptians". The sentence is now broken at a semicolon: "…upon the firstborn of the
  Egyptians; **and he** afterwards sanctified to himself the firstborn of the Hebrews."

### Plate reads requested — four, and one is a set

`raw/scans/pl113/patrologiaecurs04migngoog.pdf`, **PDF page = (column + 11) / 2**:

| col | page | reading in our Latin | why |
|---|---|---|---|
| 1167C | 589 | *cipere* (for *accipere*) | non-word, **1 occurrence corpus-wide**; `[sic:]` fired |
| 1175A | 593 | *repulatae* (for *reputatae*) | non-word, **1 vs 82 `reputat-`**; `[sic:]` fired |
| 1176D | 594 | *nolum* (for *notum*) | non-word, **1 vs 33 `notum`**; `[sic:]` fired |
| 1182B | 597 | *Santis* (for *Sanctis*) | non-word, unique to this work; `[sic:]` fired |
| 1174C | 593 | *pro fugi* (for *profugi*) | Pattern 10 split run; `[sic:]` fired |
| 1175A | 593 | *aspectusolis* (for *aspectu solis*) | Pattern 10 fused run; `[sic:]` fired |
| 1178B | 595 | *retrabunt* (for *retrahunt*) | non-word, **1 vs 2 `retrahunt`**; `[sic:]` fired |
| 1181C | 596 | *unicunque* (for *ubicunque*) | non-word, **1 vs 29 `ubicunque`**; `[sic:]` fired |
| 1181C | 596 | *vertitatis* (for *veritatis*) | non-word, **1 vs 557 `veritatis`**; `[sic:]` fired |
| 1171C | 591 | *Ipsae* (for *ipse*) | ⭐ **the suspiciously tidy one.** A real, well-formed word in a work otherwise full of plain non-words. Test 4's exact profile — a digitization can normalize as easily as corrupt. `[var:]` fired, not `[sic:]`; if the plate reads *ipse*, the `[var:]` comes out and a TEI patch goes in. |

⭐ **Record the negatives too.** Three forms that looked odd and came back clean on a
corpus-frequency check, so no read is asked for them: **1179D *notandum*** (113 occurrences
corpus-wide — ordinary Latin), **1170D *exigetur*** (a normal future passive), and
**1172A *pertingit*** (a normal compound). All three are rendered as printed with no marker.

### What was NOT found

**Not one dropped or intruded negation, in either direction.** Every `non`, `nec`, `neque`,
`nisi`, `nunquam`, `nullus`, `nihil` and `ne` the Latin prints is in the English, and none is
in the English that the Latin does not print. That was checked band by band and then again
site by site under 2a — and the one real defect the 2a pass found (1184A) was a **relocation**,
which no count would have seen. Ruth's profile repeats here: **the danger in a Glossa book is
not polarity, it is the lemma quietly conformed** — which is why §1 is the long section and
this one is the short one.


---

## §4 · THE BLIND READ — SITES FOUND, REPAIRED, DECLINED

An independent blind reader read the finished English against the Latin. This section records
what it raised, what was repaired, and what was declined and why. **A logged column is not a
checked column (7a′), so the declines are argued, not asserted.**

### Repaired — 16 edits, every one traceable to a numbered finding

| # | col | class | what was wrong | what it now reads |
|---|---|---|---|---|
| A1 | 1168D | Pattern 8, deleted mark | Migne prints a full stop **inside** the italic lemma, then lowercase *id est*; the English joined the two sentences with a comma (15 Latin stops in the band against 14 English) | `…in our nostrils.* [var: …] that is, in our body` — and the English italic span now ends where the Latin's does |
| A2 | 1182A | Pattern 8, supplied mark | a full stop where Migne prints a comma (10 Latin / 11 English in the band) | `…the power to be greater, this happens frequently…` |
| B1 | 1169D | 7a″ conformation | Douay's "Winning the reward" against Migne's bare *Praemium vincens*, which his own gloss construes the other way | `*A reward surpassing.*` |
| B2 | 1178C | 7a″ conformation + `[var:]` | "For neither" renders the Vulgate's *neque*; Migne prints *Non* | `*For not,* etc. [var: Vulg. Sap 14:13 *neque enim*]` |
| C1a | 1169D | italic span not on the plate | *vitulus* is roman on the plate, italic in the English | roman |
| C1b | 1169D | word-form Englished away | *vitulamina*, cited **as a word-form**, had become "calf-shoots", severing *vitulus → vitulamina* | `rendered them *vitulamina*` |
| D1 | 1180C | verb supplied to an abridgment head | `Non enim serpens aeneus, etc.` had become "For the brazen serpent **was** not" — gloss prose, not a lemma, so convention 3's expansion licence does not apply; the supplied copula fixed the negative's host on it and asserted the serpent's non-existence | `For not the brazen serpent, etc.` |
| E1 | 1172C | antecedent | an English "he" with no antecedent in its own sentence | *partus* = **offspring**; see §"Unexpressed subjects" |
| E2 | 1182D | relative bound to the wrong noun | *qui* → the Son, English read it as the Egyptians | broken at a semicolon |
| E3 | 1176D | relative bound to the wrong noun | *qui … distribuebant* → *alii*, English read it as the stars | "men who distributed" |
| F1b | 1168B | Pattern 7, silent repair | "an agreement" renders *convenientiam*, a word not on the page | "something in agreement with every creature" — see §5 |
| G1 | 1176C | supplied emphasis | "who properly **IS**" — the capitals are not on the plate, which prints plain *est* | "who properly is" |
| G2 | 1170D | copula belonging to no reading | see §1 row | `*But the mighty mightily,* etc.` |
| G3 | 1170C | possessive with no warrant | see §1 row | `*He shall take armour.*` |
| G4 | 1177B | tense contrast flattened | *major sit qui **fecit** quam quod **fit*** had become "makes … is made" | "he who **has made** is greater than that which is made" |
| — | 1168B | TEI patch (see §5) | our Latin read *id est Verbi Dei*; the plate prints bare *id Verbi Dei* | "that of the Word of God" |

**D1's candidate, named as the finding asks:** the elided verb is almost certainly a healing
verb from Sap 16:7 (*sanabatur*) — Rabanus' point being that it was not the bronze serpent
that healed but the one it prefigured, which the surviving tail confirms (*quia mortuus per
humanitatem, quasi aeneus est per Divinitatem*). It stays a conjecture and stays here.

### Declined, and what the reader got right

- ⭐ **The reader was right about far more than it was wrong about**, and two of its sharpest
  arguments were **refuted by the plate, not by us** — see §5. Recording that is the point of
  a blind read: the argument for *Homo* at 1171D was excellent and the answer is still no.
- ❌ **1168A/1168B `convenientem` as a transcription error — declined on the plate.** The
  corpus-frequency argument was good (`convenientem habet` once corpus-wide against nine
  `convenientiam`) and the plate refutes it: it prints *conve-|nientem*, hyphenated, exactly
  as our file. Not a transcription question.
- ❌ **A `[cj:]` at 1168B for the same word — declined, reasoned.** With the plate settled, the
  question is Pattern 18: does the faithful English *assert something false*? It does not. The
  printed accusative has no head noun, which makes the clause **elliptical, not false**, and
  Pattern 18 explicitly declines "a merely awkward or elliptical sentence"; 18a further scopes
  the marker to negations and correlatives and leaves anomalies that merely fail to construe
  declined. *Convenientem* and the conjectured *convenientiam* mean nearly the same thing, so
  a gloss would tell the reader nothing he does not already have. **What was genuinely wrong
  was Pattern 7, not Pattern 18**: "an agreement" rendered a word not on the page. Repaired by
  rendering the printed accusative, with the participle carried by an English indefinite —
  the same licence this work already used at 1167C (*in malevolam* → "into a malicious soul",
  where English cannot carry a bare adjective). **The reading is now Migne's and visible.**
- ❌ **1183A's "it" — declined as an edit, granted as a disclosure.** No candidate can be
  proved; all three are now named above (E4).
- ⛔ **The three un-italicized `[sic:]` markers were re-checked and NOT touched.** All three sit
  inside an italic scripture lemma where Pattern 10 forbids nested italics; the six italicized
  ones are in plain prose. 9/9 consistent, and it is not an inconsistency.
- ⛔ **`*Haec venditum justum,*` → "She forsook **not** the just man that was sold"** stands.
  The reader examined the supplied negation and let it stand; so do we. It is convention 3
  expanding a lemma from its own verse (*non dereliquit*), and it is this work's uniform
  practice. **Recorded as examined, not missed.**
- ⛔ **1176C's affirmative *potuerunt cognoscere bonum artificem*** where Sap 13:1 has
  *non potuerunt*: the English correctly did **not** import the Vulgate's negative. Checked
  negative; left.
- ⛔ Chunk **0002 (1173A–1175B)** read clean end to end and was not edited, including
  *flagellum collectionis frangit corda pravorum quae praedicatio non emollit*, the *Qui eum
  mercede sua… privare voluit* naming Laban, and *non tam hi… sed et omnes Chananaei* scoped
  on *tam hi*.
- ⛔ All 9 `[sic:]` pass the 7a⁗ swallow test — every stripped clause keeps its verb, negation,
  conjunction **and** object. Zero 7a⁗ defects. The `[cj:]` at 1177A is aimed at the right
  word (*invisibilibus*), in the correct form, verbatim in the twin. All 65 anchors sit beside
  the word they stand for. `*Diligite justitiam,*`, `*Justorum autem animae.*`, `*Proditio,*`
  and the Sap 8:1 `usque ad` trap all survived the conformation hunt and are untouched, as are
  all five ordinary `usque ad`s.

---

## §5 · THE PLATE

`raw/scans/pl113/patrologiaecurs04migngoog.pdf`, **PDF page = (column + 11) / 2**, confirmed
against the printed corner numbers (p. 589 heads 1167 left / 1168 right).

### One patch — and it is a NORMALIZATION, not a corruption

`data/tei-patches/8969.json`, **col. 1168B**: our file read *id **est** Verbi Dei*; **the plate
prints a bare *id Verbi Dei*, no *est*.** Read at 1200 dpi on a tight crop and confirmed by
eye. The contrast is on the same line twice, since *id est ejusdem est scientiae cum Verbo*
follows immediately with both forms spelled out. **Corpus Corporum supplied the copula**,
completing an ellipsis Migne left short — the same class as 8948 *convivum*, 8990 *concilio*,
and 8992's *leges*→*legis* found in this batch. ⭐ **The digitization does not only corrupt; it
silently CORRECTS, and a corrected form reads perfectly, so nothing downstream can see it.**

**Rendering, and the marker question, reasoned.** The English now reads "*hath knowledge of the
voice,* **that** of the Word of God, that is, he is of the same knowledge with the Word." That
is Pattern 7: the printed words and no more. The English keeps the ellipsis because English can
keep it — the copula drops out of "that of the Word of God" exactly as *est* drops out of *id
Verbi Dei*, and the reader meets the contrast with the spelled-out *id est* in the next clause
just as Migne's reader does. Supplying "that **is**" would have been Pattern 8's forbidden
supply performed on a word instead of a mark.

**No marker, and this is the deliberate part.** Pattern 12 marks **type that is the plate's
defect**. An ellipsis Migne himself printed is not a defect — it is his text, and a nineteenth-
century editor's compression of a formula he had already spelled out twice on the same line is
about as far from broken type as a page gets. Pattern 12's own operational test settles it: the
crux verb here is *"rendered as printed"*, so the words on the page are **English, and ours** —
no marker. Nor is it Pattern 18: an elliptical sentence is the pattern's named ❌ class, and
nothing false is asserted. ⚑ **What is worth recording instead is that our Latin was wrong and
now is not** — the patch, not a marker, is the honest instrument, because the defect was never
Migne's.

⚑ Also observed on that line and deliberately **not** patched: the plate prints *Verbo. Vel.*
with a full stop where our transcription has *Vel,*. A comma-for-period in the source
transcription is a corpus-wide punctuation question, not a single-site claim, and sweeping it
is out of scope. Recorded so the observation is not lost.

### Two checked negatives — the plate said no, twice

| col | the hypothesis | verdict |
|---|---|---|
| **1168A** *convenientem* | `convenientem habet` occurs **once** in the whole corpus against nine `convenientiam`, and the accusative has no head noun | ⛔ **NO CHANGE.** The plate prints *conve-\|nientem*, hyphenated across the line, exactly as our file. **The corpus-frequency argument was good and the plate refutes it.** |
| **1171D** *Homo* | the reader's **highest-value** request, and a sharp hypothesis: *mobilis* stands in Sap 7:22, the gloss expounds mobility on both sides of the sentence, and *homo* appears in neither the verse nor the argument — the 8990 alteration profile exactly | ⛔ **NO CHANGE.** The plate prints italic *Homo*. **The argument was excellent and the answer is no.** |

### ⚑ The batch-wide pattern, and it is the most useful thing this read produced

Across three works this session:

- **Every suspicion aimed at a NON-WORD was CONFIRMED** by the plate as ours — *interpetratur*,
  *quisbusdam*, *per verse*, *nortales*, *Qui dam*, *quorum dam*.
- **Every suspicion aimed at a REAL, WELL-FORMED WORD was REFUTED** — *credulitatem*, *Homo*,
  *convenientem*, *dat offensum*: the plate had Migne printing it.

⭐ **Corpus frequency is decisive for non-words and worthless for real words.** A non-word has
no defence: if the corpus has never seen it, the digitization made it. A real word has the best
defence there is — Migne printed it — and its rarity is evidence about Latin usage, not about
this plate. Weight future plate requests accordingly: non-words first, real words only where a
marker actually depends on the answer.

### Two reads OWED, not run — and why shipping is still honest

| col | candidate | why it was not run |
|---|---|---|
| **1169B** | *Scintilla duo facit… mutat cito arundinetum* | real-word / semantic suspicion — the class the plate refuted 4 times out of 4 this session |
| **1170C** | *flagellum collectionis* | same class; **the reader itself ranked it low priority** |

⛔ **Neither fires a marker.** Both are rendered as printed, as ordinary English, with no
apparatus claiming anything about the plate. **The principle, stated plainly: an unread
candidate is safe to ship if and only if it fires no marker.** A marker is an assertion about
Migne's page and may not be made from an unread plate; a literal rendering asserts nothing
beyond our Latin, which is disclosed and sits in the facing column. These two are **owed, not
checked**, and this table is the record of the debt.
