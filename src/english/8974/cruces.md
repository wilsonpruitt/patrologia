# 8974 · Paul of Burgos, *Additiones ad Postillam* (PL 113, cols 0035B–0060A) — cruces

Merged 2026-09-16 from two stint files. **The merge is a required step, not a tidy-up:** two agents
translated this work concurrently, the second (C6: the Franciscan's letter and Burgos's reply) against
the conventions the first (C0: the prologue to Alphonsus and the *quaestio*) had recorded. What follows
is the work-wide record; each stint's own file is preserved below it verbatim.

---

## §0 · WORK-WIDE CONVENTIONS — settled at merge, and binding on any later sweep

**Do not churn these.** The dispute in 0006–0010 quotes and re-quotes the *quaestio* in 0001–0005, so a
term regularised in one half breaks an argument in the other.

- **Vocabulary is C0's §A, held throughout both halves** and checked at merge by a per-chunk count of
  the load-bearing terms: *sensus litteralis / spiritualis / mysticus* = literal / spiritual / mystical
  sense; *Postilla* = *Postill*, *Postillator* = Postillator; *dignus / dignior / dignitas* = worthy /
  more worthy / worth (0 "worthier", 0 "superior"; "nobler" occurs once, for *nobilius* at 0047D, which
  is printed beside *dignius*); *perfidia* = faithlessness (0 "perfidy", 0 "unbelief");
  *determinatio* = determination and *decisio* = decision, one-to-one with the Latin in both halves.
- ⭐ ***utilia* (Isa 48:17) = "useful things", both halves. RECONCILED AT MERGE.** C0 had "profitable
  things" at 0049D; C6 had "useful things" at 0052A, where Burgos's reply turns on the word (the letter
  granted *magna … utilitas*; Burgos answers that the prophet promised *utilia*, not *subtilia*). With
  "profitable" the gloss explains nothing. 0049D edited to "useful things", which also matches
  "usefulness" for *utilitas* throughout.
- **Article references** (0006–0010) are rendered to C0's structure: *in sexto articulo responsali* =
  "the sixth, responsive article" = 0044D–0047A; *in secundo articulo quaestionis* = 0040B; *in tertio
  articulo* = 0041C. The letter's *primum … sextum decisionis* refers to parts of the decision, not to
  the seven arguments.
- ***etymologicam / anagogicam*** (Augustine's *aetiologia / analogia*, *De util. cred.* 3.5) are
  Migne's type in BOTH places Burgos names the three species — C0's third article (0041C–0042A) and
  C6's 0057C–D. Rendered "etymological / anagogical" in both, as printed. Checked at merge.
- **Second person:** thou for Burgos to his son, for the letter-writer to Burgos, and for Burgos's
  reply; you for the two sons together; ye for the Jews addressed in *Scrutamini … putatis vos*.
- **The foot note @0050B** is Latin `ª [cn: a | …]` + English `[nt: …]` only (Pattern 19). The launch
  brief said otherwise and was wrong; corrected in the brief.

## §1 · Marker tally, after merge

**9 `[var:]`/`[sic:]` + 1 `[cj:]`, every one on a column read at the plate** (`plate-gate.mjs 8974`
OK, 14 recorded reads covering 0035B–0060A).
- `[var:]` ×7: 0035B (Is 38:19 *suam*), 0042A (II Esdr 8:8 order + *apposuerunt*), 0043A (Lc 20:38
  without *non … sed*), 0050D and 0056C (1 Cor 10:11 without *Haec autem*), 0053B (Jo 17:3), 0055A
  (Os 14:10 *corruerunt*).
- `[sic:]` ×2: 0045B *sensu*, 0057D *sensus*. The same class (a case error in *sensus* that English
  cannot show), fired on the same test by both stints independently.
- `[cj:]` ×1: **0053A *contra*; read *secundum*. KEPT AT MERGE.** C6 flagged it as a judgment call at
  the bar. Pattern 18's test is whether the faithful English *asserts something false*, and word
  substitution is on its ✅ list. As printed, Augustine demonstrates the faith "against the authorities
  of sacred Scripture", in a sentence Burgos adduces to prove that the Trinity rests on those
  authorities — the proof-text asserts the reverse of what it is cited for. That is the ✅ shape, not a
  merely odd word. The six declined candidates across both halves (*impassibiles*, *potentior*,
  *naturalis*, *doctorum*, *adjectivis*, *rectitudo*) assert nothing Burgos argues against and stay
  declined.

## §2 · TEI patches applied at merge — 16, all plate-confirmed

12 from C0, 4 from C6, merged into `data/tei-patches/8974.json` 2026-09-16 and re-chunked; every
`find` unique and landing in its declared column (`patch-audit.mjs`). One is a **dropped word**
(0049A *ad aliqua **alia** probanda*). None accuses Migne. The press variants each stint recorded
(0039B *summi*/*sumi*, 0050A *praesul.*/*praesul,*, 0050D *sempliciter*/*simpliciter*, 0060A
*divina,*/*divina.*) take no patch and no marker: the two copies are different printings on these
leaves (`data/briefs/PL113-WITNESS-ENCODING.md`, addendum 2026-09-16).

---

# ─────────── stint C0 (chunks 0000–0005) · verbatim ───────────

# 8974 *Additiones ad Postillam* (Paul of Burgos): cruces, chunks 0000–0005 (cols 0035B–0050A)

Stint C0, 2026-09-16. Every column in this range was read at the plate (Gallica f18–f25, corner
numbers first). Plate reads: `data/briefs/PL113L-PLATE-READS-C0.json`. Pending patches:
`data/briefs/PL113L-PENDING-TEI-PATCHES-C0.md`.

## A. WORK-WIDE CONVENTIONS: the stint for 0006–0010 must hold these

**Vocabulary (brief §8, as applied):**
- *sensus litteralis* = **literal sense**; *sensus spiritualis* = **spiritual sense**; *sensus mysticus* = **mystical sense**; *allegoricus / anagogicus / tropologicus / moralis* = **allegorical / anagogical / tropological / moral**; *historialis / historicus* = **historical**; *etymologicus* = **etymological**.
- *Postilla* (Lyra's work) = ***Postill*** (italic in running prose, whatever case Migne uses). Generic plural *postillae solemnes* = "solemn postills" (roman, lower case). Inside the italic runs of the `## ` head it stays roman, because nested italics can't be expressed. *Postillator* = **Postillator**, with the capital following the plate (Migne prints both *Postillator* and *postillator*).
- *Additio / Additiones* = **addition / Additions**; *Replicae* = ***Replies***.
- *dignus / dignior / dignitas* = **worthy / more worthy / worth**. This is the axis of the whole question: *utrum sensus litteralis … sit dignior* = "whether the literal sense … is more worthy". Never "nobler" (*nobilius* = "nobler" at 0047D is its own word) and never "superior".
- *efficax argumentum* = **effective argument**; *argumentum validum* = **valid argument**. Burgos uses both and they are kept apart.
- *auctoritas* (a proof-text) = **authority**; *passus* = **passage**; *textus* = **text**; *littera* = **letter**; *expositio / exponere* = **exposition / expound**; *expositor* = **expositor**; *doctor* = **doctor**; *sancti doctores* = **the holy doctors**.
- *infideles* = **unbelievers**; *catholici* = **catholics** (lower case, as an adjective-noun); *Hebraei* = **Hebrews**. *perfidia Judaica / perfide* (0035B) = **faithlessness / faithlessly**. Neither "perfidy" (which heightens) nor "unbelief" (which softens); kept identical at every occurrence.
- *Rabbi Salomon* = **Rabbi Solomon**. The other Hebrew authorities stay in Migne's forms: **Rabbi Moyses, the Egyptian**, **Rabbi Moyses, of Gerona**, **Rabbi Abenhazra** (0046D). No modern names are substituted.
- *Magister* (Peter Lombard) = **the Master**; *Philosophus* = **the Philosopher**; *Apostolus* = **the Apostle**; *S. Thomas / Thomas* as printed.
- Scholastic formulas: *videtur quod non* = "it seems that it is not"; *Sed contra* = "But on the contrary"; *dicendum quod* = "it must be said that"; *Ad primum / secundum … septimum* = **"To the first", "To the second" … "To the seventh"**; *Praeterea* = "Further"; *tenet consequentia* = "the consequence holds"; *Assumptum probatur* = "The assumption is proved"; *patet* = "is plain"; *manifestum est* = "it is manifest".
- *prima parte, q. 1, art. ult.* = "First Part, q. 1, last art." Locator abbreviations stay as printed where Migne abbreviates (*1 p. q. 1, art. 7*). *secunda secundae* = "the Second of the Second". *in secundo, dist. 18* = "in the second book, dist. 18".
- **Second person:** Burgos addresses his son Alphonsus in the singular throughout, so it's **thou/thee/thy** (Pattern 17). The plural *vos ipsi cognoscite* (0036B, the two sons) is "you". The Franciscan's letter at 0050B addresses Burgos as *tu* (*tuam emeritam senectutem*), so it takes "thou" too.
- Pattern 8b applied to the article-openers that close an indirect question with `?`: "Concerning the third, namely: … is there only one literal sense? and it seems that there is not."

**The structure the letter and reply (0006–0010) cite. It is held exactly:**
- **The question** (0037D): whether the literal sense of sacred Scripture is more worthy than the other senses.
- **Seven arguments** for *non*, each opened by *Nam* / *Praeterea*: (1) *Littera occidit*; (2) the teaching had through the spiritual senses is more worthy; (3) the Philosopher, *unumquodque propter aliud*, foundation and building; (4) many false things are found in the first signification (*Descendit Deus*); (5) interior things are more worthy, the book written *intus et foris*; (6) knowledge proceeds from less to more perfect; (7) Gregory, *Cum ordo historiae deficit*.
- **Sed contra** (0039A): Augustine to Jerome, and to Vincent the Donatist.
- **Six articles** (0039B): first, what the literal and spiritual senses are (0039C); second, whether every passage takes the fourfold sense (0040B); third, whether each text has one literal sense or several (0041C); fourth, which of several is to be preferred (0043B); fifth, whether an effective argument can be taken from any literal sense (0044A); sixth, the answer to the principal question (0044D). **The "sixth article" the letter cites is 0044D–0047A**, with its threefold comparison (matter / certainty / extension / universality) and the three commendations and three shortcomings of the *Postill*.
- **Replies** *Ad primum* (0047B) through *Ad septimum* (0049B). The replies are numbered to the seven arguments, not to the six articles.

## B. Scripture checked (7a″), against `sources/vulgate/clementine-flat.txt`

Every column below was read at the plate.

| col | Migne's wording (abridged) | Migne's address | Vulgate | result |
|---|---|---|---|---|
| 0035B | *Pater filiis notam faciet veritatem suam* | none | Is 38:19 *veritatem **tuam*** | **divergent → `[var:]`**. Burgos applies it to himself as father. "his truth" vs "thy truth" |
| 0036B | *Tribui Levi non fuisse datam possessionem, quia Dominus est possessio ejus* | none | Jos 13:33 *Tribui autem Levi non dedit possessionem: quoniam Dominus Deus Israel ipse est possessio ejus* (cf. Dt 10:9, 18:2) | paraphrase in indirect form, sense intact; no marker |
| 0036B–C | *purgaturus filios Levi, ut sacrificia Domino in justitia offerrent* | none (allusion) | Mal 3:3 | allusion, not quoted; ✓ |
| 0036C | *enarrent filiis suis, ne obliviscantur operum Domini, sed legem ejus exquirant* | none (allusion) | Ps 77:6–7 *narrabunt filiis suis … non obliviscantur operum Dei, et mandata ejus exquirant* | woven allusion, unguilleted; no marker |
| 0037B | *Ne addas quidquam verbis illius* | Prov. XXX | Pr 30:6 | ✓ |
| 0037C–D | *in lege Domini sit voluntas tua, et in lege ejus mediteris die ac nocte* | none | Ps 1:2 *voluntas **ejus** … meditabitur* | adapted to second person to address the son; person only, deliberate, no marker |
| 0037D | *a quo et cum quo omnis sapientia fuit semper, et est ante aevum* | none (allusion) | Sir 1:1 *a Domino Deo est: et cum illo fuit semper, et est ante aevum* | woven; ✓ |
| 0037D (head) | *Haec omnia liber vitae* | (Lyra's incipit) | Sir 24:32 | ✓ |
| 0037D (head), 0038D | *Vidi in dextera sedentis super thronum (librum scriptum intus et foris)* | Apoc. V | Apc 5:1 *Et vidi … **supra** thronum* | *super/supra*, no sense change; ✓ |
| 0038A, 0047B | *Littera occidit, spiritus autem vivificat* | II Cor. III (plate; twin misread III Cor.) | 2Cor 3:6 | ✓ |
| 0038A, 0049C | *quaecunque scripta sunt, ad nostram doctrinam scripta sunt* | Rom. XV | Rom 15:4 (without *enim*) | ✓ |
| 0038C | *Descendit **Deus** ut videret civitatem, et turrim* | Gen. XI | Gn 11:5 *Descendit autem **Dominus*** | Deus/Dominus; no sense change, no marker |
| 0038D, 0049B | *Invisibilia **Dei** a creatura mundi per ea quae facta sunt intellecta conspiciuntur* | Rom. I | Rom 1:20 *Invisibilia **enim ipsius*** | no sense change; ✓ |
| 0040B–C | *Diliges Dominum Deum tuum ex toto corde tuo, et diliges proximum tuum sicut teipsum* | Matth. XXII | Mt 22:37, 39 (*in tota anima … in tota mente* omitted; the second *diliges* supplied) | conflation of the two precepts; no marker |
| 0040C | *tota lex pendet et prophetae* | Matth. XXII | Mt 22:40 *universa lex pendet, et prophetae* | allusion; ✓ |
| 0040D | *Creditis in Deum, et in me credite* | Joannis XIV | Jo 14:1 | ✓ |
| 0040D | *Si vis perfectus esse, vade **et** vende **omnia** quae habes et da pauperibus* | Matthaei XIX | Mt 19:21 *vade, vende quae habes* | *omnia* added; counsel's sense unchanged; no marker |
| 0040D | *Semen est verbum **Dei*** | Lucae VIII | Lc 8:11 *verbum **Domini*** | no sense change; no marker |
| 0041A | *quae sunt per allegoriam dicta* | Galatarum IV | Gal 4:24 | ✓ |
| 0041C | *Aedificavit Dominus Deus costam quam tulerat de Adam in mulierem* | Gen. II | Gn 2:22 | ✓ |
| 0041D | *Masculum et feminam creavit eos* | Gen. I | Gn 1:27 | ✓ |
| 0042A | *Et legerunt in libro Legis Dei aperte et distincte, et apposuerunt ad intelligendum* | II Esdr. VIII | Neh (II Esdr) 8:8 *legerunt … distincte, et aperte ad intelligendum* | **divergent → `[var:]`**. The order *aperte/distincte* is reversed and *apposuerunt* is absent from the Vulgate. Burgos's threefold exposition rests on exactly those three members, so the divergence carries the argument |
| 0042C | *de principe regni Persarum* | Danielis X | Dn 10:13 | allusion; ✓ |
| 0043A | *Deus Abraham, Deus Isaac, Deus Jacob* | Lucae XX | Lc 20:37 (accusative in Vulg.); Mt 22:32 | ✓ |
| 0043A | *Est Deus mortuorum vel vivorum* | Lucae XX | Lc 20:38 *Deus autem **non** est mortuorum, **sed** vivorum* | **divergent → `[var:]`**. Migne's text has no *non* and turns *sed* into *vel*. Polarity: the proof-text as printed denies nothing. The English renders it with no negative (7a) |
| 0043D | *Et vidit Deus quod esset bonum* | Genesis I | Gn 1:10 etc. (*quod esset bonum*) | ✓ |
| 0044A | *Unusquisque in suo sensu abundet* | Rom. XIV | Rom 14:5 | ✓ |
| 0044A–B | seventy weeks | Dan. IX | Dn 9:24 | allusion; ✓ |
| 0044C, 0044D | *Verbo Domini coeli firmati sunt* | Psal. XXXII | Ps 32:6 | ✓ |
| 0044C | *Et Verbum erat apud Deum, et omnia per ipsum … facta sunt* | Joan. I | Jo 1:1 + 1:3 | conflation of two verses, marked as one quotation; no marker |
| 0045B–C | *duos filios habuit* | **Gen. XXI** | the words are **Gal 4:22** (*Abraham duos filios habuit*); Gn 21 narrates the event but has no such words | **address finding**: wording found at a different address. No marker (the reference is to the history) |
| 0045D | *Non ligabis os bovis **triturantis** in area fruges tuas* | Deut. XXV | Dt 25:4 *terentis* (1Cor 9:9 *trituranti*) | Deut. with the Pauline participle; no sense change, no marker |
| 0045D | *Nunquid de bobus cura est Deo; an propter nos utique dicit?* | I Cor. IX | 1Cor 9:9–10 | ✓ |
| 0047C | lex in cordibus | Jerem. XXXI | Jr 31:33 | allusion; ✓ |
| 0047D | *Audi, Israel, **Deus tuus unus est*** | **Deut. VI** | Dt 6:4 *Dominus Deus **noster**, Dominus unus est*; the wording is nearer **Mc 12:29** *Dominus Deus tuus, Deus unus est* | **address finding**; sense (the unity of God) unchanged, no marker |
| 0047D | *Baptizantes eos in nomine Patris, et Filii, et Spiritus sancti* | Matth. XXVIII | Mt 28:19 | ✓ |
| 0047D–0048A | *Fundamentum aliud nemo potest ponere praeter id quod positum est, quod est Christus Jesus* | I Cor. III | 1Cor 3:11 | ✓ |
| 0048B | *Exiit qui seminat* | Matth. XIII | Mt 13:3 *Ecce exiit* | ✓ |
| 0048B | *Vobis datum est nosse **mysterium regni*** | Matth. XIII | Mt 13:11 *mysteria regni caelorum*; wording nearer Lc 8:10 / Mc 4:11 *mysterium regni Dei* | no sense change; no marker |
| 0048C | book *scriptus intus et foris* | [n: Ezechielis II et Apocal. V] | Ez 2:9; Apc 5:1 | ✓ |
| 0048D | *Sapientibus et insipientibus debitor sum* | Rom. I | Rom 1:14 | ✓ |
| 0049A | resurrection argument | I Cor. XV | 1Cor 15:12 ff. | allusion; ✓ |
| 0049B | *Quod notum est Dei, manifestum est illis* | Rom. I | Rom 1:19 *manifestum est **in** illis* | no sense change; ✓ |
| 0049D | *Ego Dominus docens te utilia* | **Isa. XVIII** | **Is 48:17** *Ego Dominus Deus tuus, docens te utilia* | **address finding**: the verse is at 48:17, not 18. Plate confirms *XVIII*. Rendered as printed; *Deus tuus* omitted without sense change |
| 0049D | Abisag brought to David | III Regum I | 3Rg 1:3–4 | allusion; ✓ |

## C. Cruces by column

- **0035B, rubric.** *Finivit autem eas anno Domini MCCCCXXIX Quibus etiam…*: the plate prints no stop after the date (f18, checked). The English runs on to a capital "Into" with no stop, as printed. *ejusdem ordinis Minorum*, "of the same order of Minors", although no order has been named before. Rendered literally.
- **0035B.** *sub Judaicae caecitatis perfidia natus* = "born under the faithlessness of Jewish blindness"; *illius perfidiae duces* = "the leaders of that faithlessness"; *perfide* = "faithlessly". Rendered exactly, with one English word for the one Latin family. Not softened, not heightened.
- **0035B.** *litteram rectam non rectis cavillationibus … involvere* = "to entangle the right letter in not right cavillings". The *non* is kept where it is printed.
- **0035B.** *a caliginosa turbine*: feminine adjective with a masculine noun. On the plate. Gender mismatch, no English exponent (Pattern 9), no marker.
- **0036C.** *voce prophetica antiquitus praedicatum*: neuter participle with no agreeing noun. Rendered "a thing foretold of old by the prophetic voice".
- **0036C.** *a cujus memoria haec excidere nullo unquam tempore vellem*: "from whose memory I would wish these things to fall away at no time ever". The negation stays on the time phrase, as printed.
- **0037A.** *jam bis praeelegisse* (plate): "twice chosen it beforehand". A lawyer's *praelegasse* ("pre-bequeathed") would fit *praelegatum* at 0037C. Rendered as printed. Conjecture only.
- **0037A.** *quod legare conceperam, inter vivos nunc nude donarem: sed paterna additamenta … cumularem*: *nude* taken as "outright" (a bare *donatio inter vivos*), with *sed* = "but". Rendered with no supplied negative.
- **0037B.** *nec opulentior debitor est, cum nihil habeat quod non receperit*: "nor is any debtor the wealthier, since he has nothing that he has not received". Both negations carried. ⚑ **Corrected by the blind polarity read 2026-09-16 (R2 F1):** the stint's first rendering, "nor is the wealthier man a debtor", inverted subject and predicate and so said the rich owe nothing, two clauses after every man is a debtor.
- **0037D.** *Gratanter igitur donum hoc tui parentis paterna accepta affectione, et laeta manu donatum.* *accepta* is read as the imperative of *acceptare* set inside the ablative phrase (*paterna … affectione, et laeta manu donatum*). As a participle it has nothing to agree with. Rendered "Gratefully therefore accept this gift of thy parent, given with fatherly affection and with a glad hand."
- **0038A (twin `III Cor. III`).** Plate prints *II Cor. III*; English follows the plate; patch filed.
- **0038A, 0038C, 0038D (twin `viviticat`, `reperfuntur`, `toris`, `diguitatis`).** Transcription errors. The plate is sound. English renders the plate; patches filed. No `[sic:]`.
- **0038B.** The mnemonic verse is set as two lines on the plate, with no stop after *anagogia*. Kept as two lines, no stop supplied.
- **0038B.** *Unumquodque propter aliud, et illud magis*: Aristotle's maxim (*propter quod unumquodque, et illud magis*) in Burgos's clipped form. Rendered literally: "Each thing for the sake of another, and that other the more so".
- **0039B.** *posset summi efficax argumentum*: Gallica *summi*, archive *sumi*, both clean. A press variant. The sense requires *sumi* (the phrase *sumi efficax argumentum* recurs a dozen times in 0003), and the archive printing carries it, so the English reads "could be taken". No `[sic:]`: there is no one to accuse (CLAUDE.md, press-variant converse).
- **0040A (twin `aliquisita`).** Plate *aliquis ita*. English "let no one so precisely cling"; patch filed.
- **0040D (twin `praecipius`).** Plate *praecipuis*; patch filed.
- **0042C.** *duos sensus litterales secum impassibiles*: set against *invicem compassibiles* in the sentence before. Migne's word (plate), a real Latin word (*impassibilis*, "incapable of suffering"). The argument needs "incompatible" (*incompassibiles*). Rendered literally, "impassible with one another", beside "compatible" in the preceding sentence. Declined for `[cj:]`: the sentence asserts nothing false and there is no negation or correlative at stake.
- **0043D (twin `pluralitus`).** Gallica's sort is broken; archive *pluralitas*. English "plurality"; patch filed.
- **0044B.** *sed ex hoc non tolletur quin talis sensus … sit verus*: "it will not be taken away by this that such a sense … is true". *non … quin* is held.
- **0045A (twin `dignitati`).** Plate *dignitate*; patch filed.
- **0045B.** *a certitudine sensu litteralis*: *sensu* stands on both witnesses, a case error in Migne's type where the genitive *sensus* is required. English "on the certainty of the literal sense [sic: *sensu*]". The marker is fired because English has no exponent for the case, so a plain rendering would hide the defect (Pattern 12, test 2).
- **0045B.** *secundum hanc considerationem manifestum, quod*: the plate has no *est*. English supplies "it is" as ordinary rendering of the ellipsis.
- **0046B.** *communior est caeteris, circa Glossam ordinariam*: "more common than the others, around the ordinary Gloss". *circa* is ambiguous here ("alongside"? "in respect of"?). Rendered literally.
- **0046C (twin `sufficientur`).** Plate *sufficienter*; patch filed.
- **0046C.** *non videtur fuisse sufficienter eruditus, quasi illam in pueritia didicisset*: the *quasi* clause is the counterfactual standard ("as he would be had he learned it in boyhood"). Rendered "as if he had learned it in boyhood", with the negation on *fuisse … eruditus* only.
- **0046D.** *Rabbi Moyses, Aegyptius, et Rabbi Moyses, Gerundensis, et Rabbi Abenhazra*: that is, Maimonides, Nahmanides, Ibn Ezra. Names kept in Migne's forms; the identifications are here and not in the text. No Hebrew type anywhere in 35–50A.
- **0046D–0047A.** *Ut igitur praedicta … magis elucescant … considerans universalitatem … Nam ut dicit Magister …; cogitavi …*: the purpose clause and participle hang before a *Nam* sentence that interrupts, and the main verb *cogitavi* follows the Lombard quotation after a semicolon. The printed punctuation is kept, so the English also breaks with a full stop before "For, as the Master says".
- **0047C.** *idcirco dicit. « Littera occidit, »*: a full stop before the quotation on the plate. Kept.
- **0047D.** *« Audi, Israel, Deus tuus unus est, » Et de Trinitate*: a capital *Et* after a comma. Kept as printed ("» And concerning").
- **0048C.** *ratione sensus litteralis qui dicitur esse potentior … et … propter sensum mysticum … qui est latentior*: *potentior* ("more powerful") is on the plate. The antithesis with *latentior* ("more hidden") and the reason given (*eo quod per voces immediate significatur*) point to *patentior*, "more evident". Rendered "more powerful" as printed. Declined for `[cj:]`: no negation or correlative, and the English isn't a claim Burgos argues against.
- **0049A (twin drops `alia`).** Plate *ad aliqua alia probanda*. English "to proving some other things"; patch filed.
- **0049C (twin `in aliquo, loco sic ut`).** Plate *in aliquo loco, sic ut*. English follows the plate; patch filed.
- **0049D.** *(Vide ibi in Additione secunda)*: Migne's parenthesis, part of the printed text. Translated in place.
- **0049D.** *juxta illud Isa. XVIII; « Ego Dominus docens te utilia » Et hoc*: a semicolon before the quotation and no mark after it, both on the plate. Kept.

## D. Candidates considered and rejected

- **`[sic:]` on *summi* (0039B)**: rejected, because the two copies differ and both are clean (see above).
- **`[sic:]` on *aliquisita*, *pluralitus* and the six other twin forms**: rejected. Each is our transcription, refuted at the plate. They are filed as patches, never as accusations against Migne.
- **`[var:]` on *Descendit Deus*, *Invisibilia Dei*, *Semen est verbum Dei*, *mysterium regni*, *super thronum*, *triturantis*, *Deus tuus unus est***: rejected. The divergence is real but changes no sense the argument uses.
- **`[var:]` on Ps 1:2 adapted to the second person (0037C–D)**: rejected. The change is a deliberate adaptation to the addressee, and the psalm isn't adduced as a proof-text.
- **`[cj:]` on *impassibiles* (0042C) and *potentior* (0048C)**: rejected under the Pattern 18 bar (see C).
- **`[d:]`**: no doubled run found.
- **Band arithmetic** (0035D → 0036B, no 36A; the chunk heads' `(cont.)`): known false positives. Not reported as defects.

---

# ─────────── stint C6 (chunks 0006–0010) · verbatim ───────────

# 8974 *Additiones ad Postillam* (Paul of Burgos): cruces, chunks 0006–0010 (cols 0050B–0060A)

Stint C6, 2026-09-16. The Franciscan's letter (0006) and Burgos's reply (0007–0010). Every column in
this range was read at the plate (Gallica f25–f30, corner numbers first; archive pp. 30, 31, 34, 35 as
second witness). Plate reads: `data/briefs/PL113L-PLATE-READS-C6.json`. Pending patches:
`data/briefs/PL113L-PENDING-TEI-PATCHES-C6.md`.

## A. Conventions: held from `cruces-0000.md` §A, with these notes for the merge

- All of C0's vocabulary is held: literal / spiritual / mystical sense; *Postill* (italic) / Postillator;
  *Additions*; worthy / more worthy / worth; authority, passage, exposition, doctor, holy doctors;
  effective argument; Rabbi Solomon; the Master, the Philosopher, the Apostle; "tried by the fire of
  charity" (0046C, re-quoted at 0051B and 0058B); "Thus he." for *Haec ille*; "sacred Scripture".
- **Second person:** the letter-writer addresses Burgos as *tu* and Burgos addresses him as *tu*
  throughout: **thou** on both sides (Pattern 17). The Jews addressed in *Scrutamini … putatis vos*
  take **ye**.
- **The article references are C0's structure exactly.** *in sexto articulo responsali* (0052A, 0052B) =
  "the sixth, responsive article", i.e. C0's sixth article (0044D–0047A), the one "answering the
  principal question". *in secundo articulo quaestionis* (0056B) = "the second article of the
  question" (C0 0040B: whether every passage takes the fourfold sense). *in tertio articulo* (0057B,
  0057C) = C0's third (0041C: one literal sense or several). *determinatio* = "determination",
  *decisio* = "decision", *quaestio* = "question".
- **The letter's *primum … sextum decisionis* (0050D) and Burgos's *Circa sextum* (0055D–0056A)** refer
  to parts of the *decision*, not to the seven *arguments*. Rendered "the first of the decision" etc.,
  without supplying a noun.
- **⚑ ONE DIVERGENCE FOR THE MERGE: *utilia* (Isa 48:17).** C0 renders it "profitable things" at 0049D.
  Here (0052A) it is "useful things", because Burgos's reply turns on the word: the letter granted
  *magna … utilitas* ("great usefulness"), and Burgos answers that the prophet promised *utilia*, not
  *subtilia*. With "profitable" the gloss explains nothing (the *stylus*/*epistylium* case, Song of Songs
  ruling case 2). **Recommended reconciliation: change C0's 0049D to "useful things"**, which also
  matches C0's own "usefulness" for *utilitas* at 0049D and 0045D. Not edited here (C0's file).
- **⚑ The `[cn: a | …]` foot note (0050B) — the brief was wrong about the English side.** The launch
  brief said to reproduce `ª [cn: a | …]` verbatim in the English and add an `[nt:]` after it. That
  fails `verify-english` ("[cn: …] marker found in the ENGLISH chunk") and contradicts
  `translation-style.md` Pattern 19: a letter-keyed note is Latin `[cn: a | …]` + English **`[nt: …]`
  alone** at the same point, and "Migne's raised key itself is NOT carried into the English". The English
  therefore carries only `[nt: That is, growing on the same tree as the little branch.]`. Verifier: OK.

## B. Scripture checked (7a″), against `sources/vulgate/clementine-flat.txt`

Every column below was read at the plate.

| col | Migne's wording (abridged) | Migne's address | Vulgate | result |
|---|---|---|---|---|
| 0050B | *Et spiritus vitae erat in rotis* | none | Ez 1:20 *spiritus enim vitae erat in rotis* (1:21 *quia …*) | ✓ (connective only) |
| 0050B, 0054A–D, 0055B–C | *Scrutamini Scripturas* | Joan. V (at 0054A) | Jo 5:39 | ✓ |
| 0054A | *Scrutamini Scripturas, **in quibus** putatis vos vitam aeternam habere* | Joan. V | Jo 5:39 ***quia** vos putatis **in ipsis*** | relative for causal; no argument rests on it; no marker |
| 0055C | *Illae sunt quae testimonium perhibent de me* | none | Jo 5:39 | ✓ |
| 0050D | *Omnia in figura illis contingebant* | none | 1Cor 10:11 ***Haec autem omnia** in figura contingebant illis* | **divergent → `[var:]`**. The letter drops *Haec autem*; Burgos's whole rebuttal at 0056D is that Paul wrote *Haec autem omnia* "to show that he speaks only of those things". The divergence IS the dispute |
| 0056C | *Omnia in **figuris** contingebant illis* | I Cor. X | 1Cor 10:11 | **divergent → `[var:]`**. Burgos's re-quotation of the letter: *Haec autem* still missing, and now *figuris* for *figura* (the letter at 0050D had *figura*) |
| 0056D | *Haec autem omnia contingebant illis in figura* | none | 1Cor 10:11 | word order only; ✓ |
| 0052A | *Ego Dominus docens te utilia* | Isa. XLVIII | Is 48:17 *Ego Dominus **Deus tuus**, docens te utilia* | *Deus tuus* omitted, no sense change; ✓. (C0's 0049D prints the same verse as *Isa. XVIII*; here the address is right) |
| 0053B | *Haec est vita aeterna, ut cognoscant te Deum, et, quem misisti, **Filium tuum*** | Joan. XVII | Jo 17:3 *te, **solum Deum verum**, et quem misisti **Jesum Christum*** | **divergent → `[var:]`**. *solum … verum* gone and *Filium tuum* for *Jesum Christum*. Burgos adduces it for the incarnation of the Word, and the printed form names the Son where John names Jesus Christ |
| 0053B | *Verbum caro factum est* | Joan. I | Jo 1:14 | ✓ |
| 0053B | *Clamans voce magna exspiravit* | Marc. XV | Mc 15:37 *Jesus autem **emissa** voce magna expiravit*; the wording is Lc 23:46 *clamans voce magna … expiravit* | **address finding** (Mark's address, Luke's words); sense unchanged; no marker |
| 0053B, 0056D | *Diliges Dominum Deum tuum ex toto corde (tuo)* | **Matth. XII** | Mt 22:37 | **address finding**: XII for XXII (C0's 0040B–C prints *Matth. XXII*). Plate confirms XII |
| 0053B | *Diliges proximum tuum sicut teipsum* | Ibid. | Mt 22:39 | ✓ |
| 0053C | *Si vis perfectus esse, vade, et vende **omnia** quae habes, et da pauperibus* | **Marc. XIX** | Mt 19:21 *vade, vende quae habes* | **address finding**: Mark has no ch. XIX; the verse is Matthew 19 (C0's 0040D prints *Matthaei XIX*). *omnia* added, as at C0's 0040D; no marker |
| 0053C | *Qui crediderit, et baptizatus fuerit* | Marc. XVI | Mc 16:16 | ✓ |
| 0053D | *Caro mea vere est cibus, et qui manducat meam carnem, et bibit meum sanguinem* | Joan. VI | Jo 6:56 + 6:55/57 (*Caro **enim** mea …*) | conflation of adjacent verses; no marker |
| 0053D | *Confitemini alterutrum peccata vestra* | **Jac. III** | Jac 5:16 (*Confitemini **ergo***) | **address finding**: III for V |
| 0054B | *Lapidem quem reprobaverunt aedificantes, hic factus est in caput anguli* | Psal. CXVII | Ps 117:22 | ✓ |
| 0054C | *Non auferetur sceptrum de Juda* | Gen. penult. | Gn 49:10 | ✓ |
| 0054C | *Et tu Bethlehem?* | Mich. V | Mch 5:2 | ✓ (the `?` is Migne's, kept) |
| 0054C | *Ecce virgo concipiet?* | Isa. VII | Is 7:14 | ✓ (`?` kept) |
| 0054C | *Ecce rex tuus **venit** tibi?* | Zach. IX | Zach 9:9 ***veniet***; Mt 21:5 *venit* | Zechariah's address, Matthew's tense; no sense change; no marker |
| 0054C | *Sicut ovis ad occisionem ducetur* | **Isa. LIV** | Is 53:7 | **address finding**: LIV for LIII |
| 0054D–0055A | *Rectae sunt viae Domini, et justi ambulabunt in eis; praevaricatores autem **corruerunt** in eis* | Ose. XIV | Os 14:10 *praevaricatores vero **corruent*** | **divergent → `[var:]`**. Perfect for future; Burgos's own gloss a few lines later reverts to *corruent*, so the quotation and its exposition disagree on the plate |
| 0055A | *Quis ex vobis qui habet unam ovem, et si ceciderit in sabbatis* | Matth. XII | Mt 12:11 *Quis erit ex vobis homo, qui habeat ovem unam …* | loose; no sense change; no marker |
| 0055B | *Audistis quia dictum est antiquis* | none | Mt 5:21, 5:27 etc. | ✓ |
| 0055B | *Populus hic labiis me honorat* | (per Isaiam) | Mt 15:8 / Mc 7:6 (Is 29:13) | ✓ |
| 0055B | *Caeci sunt, et duces caecorum* | none | Mt 15:14 | ✓ |
| 0055C | *Spiritus Domini super me; propter quod unxit me evangelizare pauperibus* | Isaiae LXI | wording is **Lc 4:18**; Is 61:1 *eo quod unxerit Dominus me; ad annuntiandum mansuetis* | **address finding**: Isaiah's address, Luke's words, and correctly so, since Burgos is narrating Luke 4. No marker |
| 0055D | *Ego et Pater unum sumus* | none | Jo 10:30 | ✓ |
| 0055D | *Pater major me est* | none | Jo 14:28 | ✓ |
| 0056D | *Audi, Israel, Deus tuus unus est* | Deut. VI | Dt 6:4 *Dominus Deus noster, Dominus unus est* | as C0 at 0047D: no marker (the unity of God unchanged) |
| 0057B | *Sapientibus et insipientibus debitor sum* | Rom. I | Rom 1:14 | ✓ (Migne's interior `« sum` guillemet kept) |
| 0058A | *spiritualis homo judicat omnia, etiam profunda Dei* | I Cor. II | 1Cor 2:15 + 2:10 | paraphrase, unguilleted; ✓ |
| 0058C | *Non qui seipsum commendat, ille probatus est* | II Cor. X | 2Cor 10:18 (*Non **enim** qui*) | ✓ |
| 0058C | *Laudet te **os alienum**, non tuum* | Prov. XXVII | Pr 27:2 *Laudet te **alienus**, et non os tuum* | no sense change; no marker |

**Allusions, unguilleted, checked, no marker:** Simeon's *responsum accepisti a Spiritu sancto, non
videre mortem, nisi prius* (Lc 2:26), 0050A; *sacrificium vespertinum* (Ps 140:2), 0050A; *in lumine
tuo … lumen* (Ps 35:10), 0050A; *thesaurizandum patres filiis* (2Cor 12:14), 0050B; *in corpore vel
extra corpus … Deus scit* (2Cor 12:2), 0051B; *ferrum ferro acuitur* (Pr 27:17), 0051D; *alta sapere*
(Rom 11:20, 12:16), 0052A; *abyssus multa* (Ps 35:7), 0057B; *utrum sit dignus amore vel odio* (Ecl 9:1),
0058A; *positum est in signum cui contradicetur* (Lc 2:34), 0058B; *quaestionem magis praestant quam
aedificationem* (1Tim 1:4), 0058C; *qui mollibus vestiuntur, in domibus regum sunt* (Mt 11:8), 0058D;
*meliora charismata … aemulare* (1Cor 12:31), 0060A.

## C. Cruces by column

- **0050A.** *Alme praesul. ut alter Simeon*: twin and archive print a full stop before a lower-case *ut*;
  Gallica a comma. Press variant. The English follows the stop and keeps the lower case: "Gracious
  prelate. like another Simeon".
- **0050B, the foot note.** *ramusculo bonae naturae legis ª* keyed to *(a) Id est in eadem arbore
  nascentem in qua ramusculus.*, confirmed on both copies. Migne's note glosses the participle the
  letter implies with *complantatam*: the rectitude of Burgos's mind is "growing on the same tree" as
  the little branch. Latin carries `[cn: a | …]` (untouched); English carries the translated `[nt:]`
  only (see §A).
- **0050B.** *abundare aliis sacrae Scripturae sensibus*: "abounds over the other senses", i.e. the
  question's *utrum … sit dignior*. *pro cujus parte contra*: "on the part of which, against it" as
  printed; it describes the seven arguments *videtur quod non*.
- **0050B.** *octo rationibus Achilleis*: **eight** Achillean reasons, while C0's structure has **seven**
  arguments (0038A–0039A). Rendered "eight" as printed. The letter may be counting the *Sed contra*
  (0039A) or the *Sed contra*'s second authority; not ours to decide.
- **0050B.** *decisionem assignando sub numero senario*: "under the number six", the six articles.
- **0050B–C.** *attamen non [0050C] ingeniosa subtilitas mentem reficit elevatam, non satiat …*: the *non*
  is rendered on the verb ("ingenious subtlety does not refresh the uplifted mind"), because that is how
  Burgos himself construes it at 0051D–0052A (*quid si non reficiant mentem elevatam?*). The comma splice
  into *non satiat* is kept as printed.
- **0050C.** *Quid arca, nisi littera prospectatur?*: "What is looked upon as the ark, but the letter?"
  The construction is loose; rendered as closely as it allows.
- **0050D.** *sempliciter*: twin and archive; Gallica *simpliciter*. Rendered "simply", no marker (a
  non-word on one copy only cannot license a `[sic:]` against Migne). See patches file.
- **0051A (twin `sed pene`).** Both copies *sed bene*; English "but the mystical is indeed multiplied";
  patch filed.
- **0051A.** *ex oppositis adjectivis*: "from the opposite adjectives", as printed. The sense is
  probably "from the opposite of the qualifications" by which Burgos faulted Lyra (his three
  shortcomings at 0046B–D), and the letter's next three *Commendatur* sentences answer those three
  shortcomings one by one. *adjectis* ("additions") would also construe. Rendered literally.
- **0051B.** *quare sententias doctorum postposuit quasi impertinentes, ut auctorizaret opus suum
  Ecclesiae doctoribus*: rendered literally. Burgos's paraphrase at 0058B–C
  (*sententias sanctorum doctorum propriae sententiae postposuit*) reads it as Lyra setting the doctors
  after his own opinion.
- **0051B–C.** *et tui reverentia esset mihi opus tuum assidua diligentia si occurrisset mihi sua
  praesentia*: syntax does not fully construe; rendered as closely as the words allow.
- **0052A.** *talia enim quae, **ut dicit**, mentem elevatam reficiunt*: third person, though Burgos is
  quoting his correspondent (*tu*). Rendered "as he says", as printed.
- **0052A.** *secundum quarum unam sensus **naturalis** praeeminet*: both copies. Burgos's
  determination (C0 0045B) makes the **literal** sense pre-eminent, and the next two clauses
  (*aequalis dignitatis … minoris dignitatis, quam sensus spiritualis*) have the literal sense as their
  unexpressed subject. Rendered "the natural sense" as printed. **Declined for `[cj:]`**: a wrong noun
  that asserts nothing Burgos argues against, and no negation or correlative (C0's *impassibiles* and
  *potentior* declined on the same bar).
- **0053A.** *Primo **contra** auctoritates sacrarum Scripturarum: utrum fides ita se habeat
  demonstrandum est*, attributed to *De Trinitate* **IV**: both confirmed at the plate. Augustine,
  *De Trin.* I.ii.4, reads *primum **secundum** auctoritatem Scripturarum sanctarum, utrum ita se fides
  habeat, demonstrandum est; deinde … adversus garrulos ratiocinatores*. As printed, the English has
  Augustine demonstrating the faith **against** the authorities of Scripture, in a sentence Burgos
  adduces to prove that the Trinity **is founded on** those authorities. **`[cj: *contra*; read
  *secundum*, "according to"]` fired**: the printed preposition makes the proof-text assert the reverse
  of what it is cited for (Pattern 18, ✅ class of word substitution). ⚑ A judgment call at the bar; the
  merge may decline it. The book number (IV for I) is not corrected.
- **0053B.** *Idem de creatione mundi, aliis articulis fidei*: no conjunction printed; none supplied.
- **0053D.** *secundum sensum litteralem **doctorum** hujusmodi habetur virtus*: "the literal sense of
  doctors of this kind", as printed on the plate. The parallel two lines later, *per sensum litteralem
  hujusmodi **dicti***, points to *dictorum* ("of sayings of this kind"). Rendered literally; declined for
  `[cj:]` (no negation, correlative or reversed claim).
- **0054A.** *per haec tua verba sentio aestimare quod*: no subject for *aestimare*; English supplies
  "[thee]".
- **0054A.** *Quis autem non imprudentissime nitatur … nisi habeat*: both negatives carried ("who would
  not most imprudently strive … unless he also has").
- **0055A.** *licet sit rectus, id est planior; et justi … ambulabunt in eis*: the concessive *licet* has
  no main clause until *praevaricatores tamen … corruent*. Kept as printed.
- **0055C.** *Item attendendum quod quia inter praedictos errores … ; testatur enim Lucas … ; merito
  igitur*: the *quod quia* clause never completes; the sentence restarts at *merito igitur*. Kept.
- **0055D.** *circa verum intellectum litteralem Evangelii praedictus error consistit*: "the aforesaid
  error consists about the true literal understanding", i.e. it is an error concerning it. *circa*
  rendered "about" so that the English does not say the error consists IN the true understanding.
- **0057A.** *quia de quanto aliquid est universalius, tanto est communicabilius*: Burgos's restatement
  of the letter's *quanto … tanto* (0050D) adds *de*. Rendered "by as much as … by so much".
- **0057B (twin `spritualia`).** Plate *spiri-|tualia*; patch filed.
- **0057C.** *quanto magis in Scriptura divina … inveniri possunt …* closes with a full stop, not a
  question mark. Kept.
- **0057C–D.** *sensus litteralis dividitur in tres species secundum Augustinum in libro de Utilitate
  credendi, scilicet in historicam, etymologicam et anagogicam*: Augustine (*De util. cred.* 3.5) names
  four modes, *historia, aetiologia, analogia, allegoria*; *etymologicam* and *anagogicam* look like
  *aetiologicam* and *analogicam*. Both on the plate; Burgos says he expounded them in the third article
  (C0's range). Rendered as printed ("etymological", "anagogical"); for the merge, check C0's rendering
  at the third article for the same pair.
- **0057D.** *Isidorus tradit in libro de summo Bono*: the seven rules are Tyconius's, transmitted by
  Isidore, *Sent.* (*De summo bono*) I.19. Rendered as printed.
- **0057D.** *sed est **rectitudo** experientiae*: Burgos's quotation of the letter, which at 0051A reads
  *certitudo experientiae*. Both copies print *rectitudo* here. A real word ("rightness"), rendered as
  printed; the misquotation may be Burgos's or the compositor's. No marker.
- **0057D.** *Attribuis enim **sensus** spirituali, seu mystico*: nominative/genitive *sensus* where the
  dative *sensui* is required (it agrees with *spirituali … mystico*). Both copies. **`[sic: *sensus*]`
  fired** beside the rendered sense ("to the spiritual, or mystical, sense"), because English has no
  exponent for the case and a plain rendering would hide the defect (Pattern 12, test 2; C0 fired the
  same class at 0045B *sensu*). Column read at the plate on both witnesses.
- **0058A (twin `spritualem`), 0058B (twin `Sripturae`).** Plate sound; patches filed.
- **0058A.** *in gratia gratificante*: "in grace that makes pleasing" (*gratia gratum faciens*), against
  *gratiae gratis datae* "graces freely given".
- **0058C.** *cum huic commendationi non solum sacra Scriptura repugnet; legitur enim …; Hoc etiam
  physica doctrina suadet*: the *non solum* has no printed *sed etiam*; the second member arrives as a
  new sentence with *etiam*. "Not only" kept; nothing supplied.
- **0058C.** *Laudamus seipsos vituperantes*: "We praise ourselves in blaming", as printed; the
  Aristotelian point (*Rhet.* / *NE* IV, self-deprecation as boast) is not glossed.
- **0059A.** *Commendas eum tertio ex hoc quod inter doctores Hebraicos non invenit meliorem theologum
  quam Rabbi Salomonem*: the letter (0051B) said Lyra chose Rashi because he found him *meliorem
  theologum* among all. Burgos's negative paraphrase ("found no better theologian than") is the same
  claim; negation carried.
- **0060A.** *praesertim in Scriptura divina, semper praeponere veritatem*: Gallica prints a stop after
  *divina*, archive and twin a comma. English follows the comma.
- **0060A, end of text.** The reply ends *Vale, frater in Domino: et meliora charismata semper aemulare,
  etc.* at col 60 line 15 (f30). A rule follows, then Doring's *INCIPIT PROLOGUS IN Replicas defensivas
  Postillae …* across both columns: no file we hold, not translated. The band gap between chunk 0009
  (ends 0059A) and 0010 (0060A) is layout: the reply occupies only the top third of cols 59–60.

## D. Candidates considered and rejected

- **`[sic:]` on *sempliciter* (0050D)**: rejected. Clean *simpliciter* on Gallica; a letter never stands on
  the JBIG2 copy alone.
- **`[sic:]` / patch on *Alme praesul.* (0050A) and *divina.* (0060A)**: rejected; press variants.
- **`[sic:]` on *pene*, *spritualia*, *spritualem*, *Sripturae***: rejected. Transcription errors refuted
  on both copies, filed as patches.
- **`[cj:]` on *naturalis* (0052A), *doctorum* (0053D), *adjectivis* (0051A), *rectitudo* (0057D)**:
  rejected under the Pattern 18 bar (see C).
- **`[var:]` on Jo 5:39 *in quibus*, Mc 15:37 / Lc 23:46 *Clamans*, Mt 19:21 *omnia*, Jo 6:56 conflation,
  Zach 9:9 *venit*, Mt 12:11, Dt 6:4, Pr 27:2**: rejected; real divergences that change no sense the
  argument uses.
- **`[d:]`**: no doubled run found.
- **Band arithmetic** (0059A → 0060A; `(cont.)` heads): known false positives; the plate shows the layout.
- **Interior guillemets.** 0057B *« sum* is in the twin and kept 1:1. The plate also sets line-start
  continuation `«` inside many other quotations in this range (e.g. 0053B *« quem misisti*) which the twin
  drops; guillemet parity follows the twin and no patch is filed (8957 precedent: never patch a guillemet).


---

## Blind polarity read, 2026-09-16 (readers R2 on 0000–0003, R3 on 0004–0010; reports `data/briefs/PL113L-POLARITY-R2.md`, `-R3.md`)

Six sites, **five ours, all fixed in the English**; one Migne's, now marked.

- **0037B (ours).** *nec opulentior debitor est*: subject/predicate inverted. Now "nor is any debtor the wealthier". Entry above corrected.
- **0041D (ours).** *et non successive, sic ut femina esset … subtracta*: the subjunctive of the rejected alternative had been rendered as fact ("was taken"), so the sentence asserted both simultaneous and successive creation. Now "in such a way that the woman would have been taken out of his side after the creation of the male".
- **0044D (ours).** *Quod tamen postillator … videtur observare*: "which the postillator seems to observe" read as Lyra keeping the rule the next clause says he breaks. *Quod* takes up the question whether an effective argument can be drawn from the sense; now "Which question, nevertheless, the postillator seems to attend to". No negation is missing on the plate.
- **0048C (Migne's) — `[cj: *potentior*; read *patentior*]` ADDED.** The stint declined a conjecture on a real word. The merge re-opened it on R3's report and on evidence neither had in view: Burgos here quotes Lyra's first prologue nearly verbatim, and Lyra prints at 8971 @0029A *sensus litteralis, qui est **patentior**, quia per voces immediate significatur*. Burgos's *qui dicitur esse potentior, eo quod per voces immediate significatur* is that sentence, so *potentior* misquotes it, and "more powerful" would tell the reader Lyra said so. The open/hidden (*patentior*/*latentior*) contrast is the point. Pattern 18 bar met.
- **0052D (ours).** *licet in utroque Testamento invenitur sensus litteralis et spiritualis vita, tamen non conceditur nisi spirituali intelligentiae*: the English followed Migne's comma after *vita* and made "spiritual life" a thing found in both Testaments, leaving "it is not granted" without a clear subject. *Vita* is the subject of the main clause (the proof-text is *spiritus vitae*). Now "the literal and spiritual sense is found, yet life is not granted except to spiritual understanding". Words unchanged; only the construal of Migne's punctuation.
- **0058C (ours).** *Laudamus seipsos vituperantes*: "We praise ourselves in blaming" left *per oppositum* with nothing to be opposite to. Now "We praise those who blame themselves", so that praising oneself is the opposite and not commendable.
- **0053A `[cj: *contra*; read *secundum*]`:** R3 independently agrees (Augustine, *De Trin.* I.2.4 reads *secundum*). Kept.
- Declined from R3's low-confidence list: *occasionaliter* @0047C "occasionally" (no polarity at stake).
