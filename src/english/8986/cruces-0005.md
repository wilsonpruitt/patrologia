# Cruces — 8986 (*Epistola II ad Corinthios*, Glossa ordinaria), chunks 0005–0009

Columns **0559D–0570C** (CAPUT VI–XIII). Chunks 0000–0004 were translated concurrently by a
peer agent and are **not** covered here; that half's cruces are in `cruces-0000.md`.

---

## 0. Marker policy actually applied in this range

- **Fired: 4 `[var: …]`, all substitutions or additions inside a quoted scripture.**
- **Fired: 0 `[sic:]`, 0 `[d:]`, 0 `[ed:]`, 0 `[cj:]`, 0 `[nt:]`.**
- ⛔ **No `[sic:]` was fired anywhere in this range, deliberately.** `data/plate-reads.json`
  records **no read for any column of this work**, and CLAUDE.md hard rule 8a forbids a
  `[sic:]` or `[var:]` on an unread column: a `[sic:]` accuses **Migne's type**, and our
  Latin is Corpus Corporum's TEI, which departs from Migne at roughly 3 sites per page.
  The three non-word / fused-run candidates below (§4) are therefore rendered for their
  evident sense and logged here as **plate candidates**, not marked. If the plate is read
  and confirms them, each is a one-line `[sic:]` addition.
- **The `[var:]` bar I used, stated so it can be checked:** fire only where the divergence
  from `sources/vulgate/clementine-flat.txt` is (a) a **substitution or an addition** of a
  whole distinct word, and (b) something the sentence or the gloss actually turns on.
  **Declined for every OMISSION**, however multi-word, because a dropped word is precisely
  what a digitization loses and what a `[var:]` would then blame on Migne. Declined for
  word order, for orthography (*charitate/caritate*, *coelum/caelum*), and for lemma
  truncation, which is Migne's citing practice, not a divergence.
- ⚠ **All four `[var:]` stand on unread columns** (0561A/B, 0562A, 0567D, 0568A) and
  `plate-gate.mjs` will name them before this work can be marked `ours`. They rest on the
  Clementine collation, not on the plate; each is stated below with the exact printed reading
  so a plate reader can settle it in one look.

## 1. Work-vocabulary conventions (⚠ MERGE NOTE — the peer agent cannot see this)

Fixed deliberately, because chunks 0000–0004 touch the same vocabulary and the two halves
must be reconciled at assembly:

| Latin | English used throughout 0005–0009 |
|---|---|
| *pseudo* (Migne's clipped noun for the false apostles) | **the false apostles** — never "pseudo-", never left in Latin. The work writes *pseudoapostolis* in full at 0566B (VERS. 5) of the same range, so the identification is the work's own. Sibling precedent 8983 @0624C rendered it "the false [apostles]" with a bracketed supply; I dropped the bracket because bracket forms in the English are reserved for markers. ⚠ **DIVERGENCE WITH THE PEER HALF, found by reading its shipped files after mine were written:** chunks 0000–0004 render bare *pseudo* as "**the false ones**" at 0552A (following 8990's cruces) while using "the false apostles" for Migne's full *pseudoapostolos*. Mine uses "the false apostles" for both. **One of the two must give at assembly**; I would keep "the false apostles" everywhere, because this work itself supplies the identification in its own words at 0554D and 0566B, and because a reader meeting "the false ones" in one chapter and "the false apostles" in the next has no way to know they are the same men. |
| *munitio / munitiones* | **fortification / fortifications** (0564D–0565A, five occurrences), matching *ad destructionem munitionum* |
| *ulcisci · vindicare · ultio* | **to avenge · avenges · vengeance** |
| *palpare (vitia)* | **to stroke (vices)** — 0565B, 0565C ×2 |
| *insipientia / insipiens* | **foolishness / foolish** |
| *supportare* | **to bear with** |
| *sollicitudo* | **carefulness** everywhere (0562A, 0563C, 0567D), including at 11:28 where Douay has "solicitude" — consistency inside the work was preferred |
| *transfigurantes se* | **transforming themselves** |
| *superabundo · superimpendar* | **I exceedingly abound · I will be spent over and above** |
| *virtus* | **power** where it is God's strength (0568C–D, 0570A); **mighty deed** where it is the third member of *signa, prodigia, virtutes* (0568D–0569A). Two senses, both in this range; the split is stated here so it is not read as drift. |
| *frixorium* | **frying-pan** |
| *aemulatio / aemulor* | **emulation / I am jealous** |
| *reprobus* | **reprobate** |
| VERS. n.-- | passes through verbatim (convention 1) |
| *usque ad* (abridgment formula) | ***as far as***, italic, **no verb ever supplied** — the settled 8946/Tobit form |

**Lemma-expansion policy (convention 3, made checkable):** a clipped lemma is expanded only
as far as the printed words' own grammar forces an English complement — a transitive verb
gets its object (*Supportate.* → "Bear with me."; *Et non egerunt.* → "And have not done
penance."; *Nec enim debent,* → "For neither ought the children,"), a bare noun or a
complete two-word clause is rendered as it stands (*Confidentia.* → "Confidence.";
*Est veritas.* → "There is truth."; *Insipientiae.* → "Of foolishness."). **No further words
are imported from the verse.** ⚑ This is why *Est veritas.* is NOT "The truth of Christ is in
me" — and it is not an inconsistency with the expanded stumps, which belong to the other class.

**Repeated lemmata, checked identical in both places** (the prompt's three, resolved by
expanding, never by contracting):
- *Qui multum non abundavit.* — 0563B ×2 → "He that had much did not abound." both times.
- *Utinam sustineretis,* — 0566A ×2 → "Would that you would bear with me," both times.
- *Sed quasi in insipientia.* — 0567A/B, lemma then re-quotation → "But as it were in
  foolishness." / "*as it were in foolishness*" — same words both times.
- Also checked: *Non quasi imperans* (0562D ×2), *sive in corpore, sive* (0568A/B ×2),
  *In vobis* (0570A ×2), *Nam et nos* (0569D–0570A ×2). All rendered identically.

## 2. Lemma ↔ Clementine collation — the full list

**Every lemma named in the launch message was greped against
`sources/vulgate/clementine-flat.txt`.** 2 Cor 6:1–13:13 plus every non-Corinthian quotation.
**Result: every named lemma checked, plus nine non-Corinthian quotations · 8 divergent · 4 marked.**

### 2a. AGREE EXACTLY with the Clementine (rendered from Migne, no marker, nothing to report)

**Chapter VI–VII (0005):** *Ne in vacuum* · *Nunc tempus* · *Ut non vituperetur* · *Sicut Dei
ministros* · *In multa patientia, in tribulationibus* · *In castitate* · *in scientia* · *In
suavitate* · *in Spiritu sancto* · *In charitate non ficta* (orthography only) · *In virtute
Dei* · *Per gloriam et ignobilitatem* · *Per gloriam* · *ut seductores* · *habiti seductores*
· *ut* · *veraces* · *ut castigati* · *Quasi tristes* · *Omnia possidentes* · *Os nostrum* ·
*Nolite jugum* · *Quae autem conventio Christi* · *Cum idolis?* (mark included) · *Quoniam
inhabitabo* · *Ab omni inquinamento carnis* · *Ad commoriendum* · *Repletus sum consolatione*
· *Superabundo* · *Caro nostra* · *caro* · *Foris* · *intus* · *Qua consolatus est in vobis* ·
*Et si … poeniteret* · *Videns* · *Videns quod* · *Contristati estis* · *Poenitentiam in
salutem* · *Saeculi autem* · *Ecce enim* · *Quantam in vobis* · *Exhibuistis* · *Qui fecit
injuriam* · *Abundantius magis* · *Sed sicut* · *Et viscera ejus*.
Also **Matth. XI, 28** *Venite ad me, omnes qui laboratis et onerati estis, et ego reficiam
vos* — agrees word for word with Mt 11:28.

**Chapter VIII–IX (0006):** *Notam autem vobis* · *Quod in multo experimento* · *Et altissima*
· *Primum Domino* · *Non quasi imperans* ×2 · *Egenus factus est* · *cum dives esset* (word
order only; and the gloss's own point is *fuisset* vs *esset*, not the order) · *Sed et velle*
· *Sed ex aequalitate* · *Ut fiat aequalitas* · *Sicut scriptum* · *Qui multum non abundavit*
×2 · *In hanc gratiam* · *Devitantes hoc* · *Coram Deo* · *Confidentia* · *Sive* ·
*Ostensionem* · *Et vestra aemulatio* · *Erubescamus* · *Qui parce seminat* · *Non ex
tristitia* · *Hilarem enim datorem* · *Abundare* · *Incrementa frugum* · *Quae operatur* ·
*Gratias Deo*.

**Chapter X (0007):** *Ipse autem ego Paulus* · *Paulus* · *humilis* · *Non secundum carnem
militamus* · *Ad destructionem munitionum* · *Et in promptu habentes* · *Ulcisci* · *Quae
secundum faciem* · *Non erubescam* · *Ut autem non existimer* · *Hoc cogitet* · *Tales* ·
*Non enim audemus* · *Nos autem* · *Sed secundum mensuram* · *Non in alienis laboribus*
(a clip that joins 10:15's *Non* to *in alienis laboribus*; both words are the verse's) ·
*Qui autem gloriatur* · *Sed quem Deus*.

**Chapter XI (0008):** *Utinam sustineretis* ×2 · *Insipientiae* · *Aemulor* · *Vos uni* ·
*Timeo autem* · *Nam si is qui venit* · *Recte pateremini* · *Existimo* · *Nam etsi imperitus*
· *Quoniam gratis Evangelium* · *Est veritas* · *Ut in quo gloriantur* · *Nam ejusmodi* ·
*Inveniantur sicut et nos* · *In quo* · *Transfigurantes se* · *Quorum finis* · *erit secundum
opera ipsorum* · *Quod loquor* · *Sed quasi in insipientia* ×2 · *Caedit* · *Hebraei* ·
*Israelitae sunt, et ego* · *Ut minus sapiens* · *In laboribus* · *A Judaeis quinquies* ·
*Una minus* · *Periculis latronum* · *In fame* · *Sollicitudo* · *Non uror?* (mark included) ·
*Non mentior*.

**Chapter XII–XIII (0009):** *Scio hominem* · *Sive in corpore, sive* · *sive in corpore, sive
extra* · *Raptum* · *Usque ad tertium coelum* · *Raptus est* · *Arcana verba* · *Supra id
quod* · *Et ne magnitudo* · *Dixit mihi* · *Nam virtus in infirmitate perficitur* · *Factus
sum insipiens* · *In omni patientia* · *Et virtutibus* · *Nec enim debent* · *Et
superimpendar* (Clementine sets *super impendar* as two words — spacing only) · *Olim putatis*
· *Ne iterum cum venero* · *Et non egerunt* · *Non parcam* · *An experimentum* · *Qui in vobis
non infirmatur* · *Nam et nos infirmi* · *Nam et nos* · *infirmi in illo* · *vivemus cum eo* ·
*virtute Dei* · *in vobis* · *In vobis* · *Oramus autem* · *Reprobi simus* · *Gaudemus enim* ·
*Secundum potestatem* · *Non in destructionem* · *Gratia* · *Et charitas Dei*.

### 2b. DIVERGENT — the eight, and what was done with each

| col | Migne prints | Clementine | call |
|---|---|---|---|
| **0561A/B** | *Ab omni **iniquitate***, as the first of two lemmata splitting 7:1 | *mundemus nos ab omni **inquinamento carnis et spiritus*** | **`[var:]` FIRED.** A whole distinct word substituted, and the gloss is built on it: *iniquitate* is glossed *Scilicet mentis* (of the mind) against the second lemma *Ab omni inquinamento carnis* (of the flesh). Migne's pair therefore reads a text the Clementine does not carry. |
| **0562A** | *nec propter eum qui passus est **fraudem*** | *nec propter eum qui passus est* (no object) | **`[var:]` FIRED.** An **added** word inside a quoted verse — the class a digitization does not manufacture — and the whole gloss above it turns on fraud (*injurias et fraudes fratribus fecisse dixit*; *id est fraudem proximo suo*). |
| **0567D** | *Qui **apponit** scientiam, **apponit** et **dolorem*** (uncited) | Ecl 1:18 *qui **addit** scientiam, **addit** et **laborem*** | **`[var:]` FIRED.** Two substitutions, and the second changes the assertion the gloss needs: the sentence is adduced for *plagae de peccatis alienis*, wounds, i.e. **sorrow**, not labour. |
| **0568A** | *Et ossa mea in **frixorio confrixa** sunt* (uncited) | Ps 101:4 *et ossa mea **sicut cremium aruerunt*** | **`[var:]` FIRED.** Multi-word substitution, and the entire gloss stands on *frixorium* — *frixorium sunt habentium charitatem*. Identified as Ps 101:4 by content; the marker names only the two readings, per Pattern 14's "never speculate about why they differ." |
| **0563B/C** | VERS. 18 lemma *Misimus **autem*** | 8:18 *Misimus **etiam** cum illo fratrem*; *Misimus autem* opens **8:22** | **DECLINED.** One word, sense unchanged, and the verse address is itself ambiguous — the gloss ("two brethren") reads across 8:18 and 8:22. Logged, not marked. |
| **0563C** | VERS. 20 second lemma *In hac **parte*** | 8:20 *ne quis nos vituperet in hac **plenitudine***; but *in hac parte* is 9:3's own wording | **DECLINED, and this is the interesting one.** If the lemma is 8:20's, it is a substitution worth a marker; if the glossator has reached forward to 9:3, **the words are the verse's own and there is no divergence at all**. The gloss (*Doctrinae et miraculorum … Bene praedicat, sed non est memor sanctorum*) fits 8:20's worry about blame in the collection, which is why I lean to 8:20 — but a marker is a public claim and this one cannot be settled from the file. Crux, no marker. |
| **0564B/C** | VERS. 9 lemma *Justitia **enim*** | 9:9 *justitia **ejus** manet in saeculum saeculi* | **DECLINED.** One word, and the gloss (*Justus est qui…*) turns on *justitia*, not on the pronoun. A likely *ejus → enim* slip, of exactly the kind our TEI produces; unmarked. |
| **0570B** | *Et Deus pacis erit vobiscum* | 13:11 *et Deus pacis **et dilectionis** erit vobiscum* | **DECLINED on the omission rule — but flagged, because it cuts against me.** The gloss immediately expounds **love** (*pax a dilectione illius* … *Innumerabilium enim bonorum mater est dilectio*), which is evidence the fuller reading stood in Migne and that *et dilectionis* fell out **of our TEI**. That is a source-loss suspicion, not a Migne divergence, so `[var:]` would blame the wrong party. ⭐ **Worth a plate look**: if Migne prints *et dilectionis*, this is a `data/tei-patches/8986.json` entry, not a marker. |

### 2c. Non-Corinthian quotations checked, not marked

- **0560A · Mt 11:29–30** *Tollite jugum meum super vos, et invenietis requiem animabus
  vestris. Jugum enim meum suave est*, etc. — Migne runs 11:29 into 11:30, dropping *et
  discite a me, quia mitis sum, et humilis corde*. **A mid-quotation abridgment closed by his
  own *etc.*, not a divergent reading.** No marker.
- **0561A · *Habitabo inter illos et ambulabo (Baruch III)*.** ⚠ **The words are not in Baruch
  at all.** They are 2 Cor 6:16's own *inhabitabo in illis, et inambulabo inter eos*, itself
  quoting Lv 26:12 *Ambulabo inter vos*. **Baruch III is the reference for the NEXT
  quotation** — *Terris visus est, et cum hominibus conversatus est* = Bar 3:38. So Migne's
  parenthetical locator sits one quotation early. **Reproduced exactly where he prints it,
  inside the italics, untranslated.** No marker and no reordering: a mis-bound reference is
  his (runbook false-positive 2 warns specifically against "fixing" one).
- **0561A · Bar 3:38.** Migne prints *Terris visus est*, the Clementine *Post haec **in**
  terris visus est*. Opening truncation of a quotation, plus the dropped preposition; not
  marked.
- **0561A · Jo 1:14** *Verbum caro factum est, et habitavit in nobis* — agrees exactly.
- **0566A · *Non te laudent labia tua, sed proximi tui*** (VERS. 1, uncited, **and not in
  italics**). Pr 27:2 reads *Laudet te alienus, et non os tuum; extraneus, et non labia tua*.
  A free reformulation from memory, and Migne does not present it as a quotation (no italics,
  no locator). **Declined:** Pattern 14 marks a *citation* that diverges, not an allusion.
- **0567D · Lc 12:31 / Mt 6:33**, cited *(Luc. XII.)*: Migne *Primum quaerite regnum Dei, et
  haec omnia adjicientur vobis?* against Lc 12:31 *Verumtamen quaerite primum regnum Dei, **et
  justitiam ejus**: et haec omnia…* **Declined**: an omission (*et justitiam ejus*) plus word
  order, and neither changes what the sentence asserts in the argument about food. The `?` is
  Migne's own and is kept — it closes his direct question *Ubi ergo promissio Dei: …?*
- **0569A/B · Phlp 1:23** *Cupio dissolvi, et esse cum Christo* against *desiderium habens
  dissolvi, et esse cum Christo*. **Declined**: the traditional citation form, sense identical.
- **0570B · Act 5** (Saphira and Ananias) — an allusion, not a quotation.

## 3. Negation — every printed negative, and what it attaches to

Test 2 was run on all five chunks: **each `non · nec · neque · ne · nisi · nunquam · nemo ·
nihil · nullus` in the Latin was named, its host word identified from the sentence's own
structure, and the English checked to carry the negative ON that host.** Counts came out
equal in both directions in all five chunks and nothing was relocated. The 2a-population
sites (a negative near a quantifier, a correlative, or a `sed` pivot) are these, with the
host proved from the structure:

- **0562A · *non tantum propter eum qui fecit injuriam, nec propter eum … sed ad
  manifestandam***. Host of *non* is ***tantum***, not *scripsi* — the *nec … sed* correlative
  proves it. English: "not only for his sake … nor for his sake … but to make manifest".
  ⚑ Note *tantum* is Migne's **roman** supplement inside the italic quotation, so it is the
  glossator's word, not the verse's; it is rendered as text, not as lemma.
- **0562A · *non magis causa eorum … quam causa Ecclesiae*.** Host is ***magis***, a
  comparative correlative, not *scripsisse*. English: "not more for the sake of … than".
- **0562B · *non solum de correctis, sed etiam de aliis*.** Host is *solum*. English "not only
  … but also".
- **0562D · *Non solum rogavi Titum, sed ego ipse dico*.** Host *solum*.
- **0563A · *Nemo ergo se contemnat*** — *nemo* is the subject; English "Let no man …
  despise himself", the negative on the subject, not on the verb.
- **0563B · *non plus exigitur quam retinere sibi debet*.** Host *plus*. English "no more is
  required than".
- **0563B · *Non quin differant in claritate: sed quia…***. A double negative (*non quin*)
  carried as "Not but that they differ".
- **0563C · *non unum solum, sed et duos et tres*** — host is *unum solum*, English "not one
  only, but two and three"; and *non ab Evangelio, neque ab electione solum, sed etiam quod…*,
  where both negatives sit on the **phrases**, not on *commendat*.
- **0563D · *fama nostra non pollui, sed pollere debet***. Host is the infinitive ***pollui***
  and the *sed pollere* correlative proves it: "our good name ought **not to be defiled**, but
  to be strong". (The Latin's own *pollui/pollere* wordplay is not reproducible; noted, not
  repaired.)
- **0564B · *non quaeritur de quanto, sed quo animo detur*.** Host is the phrase *de quanto*.
- **0565B/C · *ut … non existimer … tantum terrere verbis, et opere … non implere***. Two
  negatives, two hosts: *existimer* and *implere*, with *tantum* on *terrere*. Rendered "that
  I may not … be thought by you only to terrify with words, and not to fulfil in deed".
- **0566A · *ne in eo illis videatur inferior quam ipse quidem non curat***. The *non* is on
  *curat*, and *quam* is the **relative accusative** picking up *gloriationem*, not a
  comparative — "which glorying indeed he himself does not care for".
- **0566A · *Non te laudent labia tua, sed proximi tui*.** Host *laudent*; *thy* singular per
  Pattern 17.
- **0566A · *Insipientiam dicit … ne … videatur inferior***: *ne* on *videatur*.
- **0566B · *Hic amoris est, non livoris*** and *non ut ad laudem ejus proficiant, sed ad horum
  profectum*: both on the phrases, per the *non … sed* pivots.
- **0566B · *virginitate mentis (etsi non corporis) servare***: the parenthetical negative
  stays inside the parenthesis and on *corporis*.
- **0569D · *non solum se pro salute eorum impendere, sed et mori paratum***: host *solum*.
- **0570A · *Non destruuntur autem qui corriguntur, sed correcti aedificantur***: host
  *destruuntur*.
- **0566A · *Nam si is qui venit. Non missus.*** — the two-word gloss is itself the negative.
- **0570B · *We rejoice if it be not necessary…*** (*si non sit necesse*): host *necesse*.

⭐ **The one 7a site I want a later reader to look at, because it is where a negative would
most naturally be smuggled IN:**

- **0565C · *Nos autem, etc. Sicut illi qui usurpando gloriantur ultra mensuram.*** The verse
  is 10:13 ***Nos autem NON in immensum gloriabimur***, so the gloss's elliptical *Sicut illi
  qui…* plainly means "[not] as those who by usurping glory beyond measure". **Migne prints no
  negative and I supplied none**: the English reads "As those who by usurping glory beyond
  measure." It reads as an affirmative comparison and it is meant to be read against the
  lemma's own *non*. This is Pattern 7 obeyed, and it is exactly the shape 7a warns is easiest
  to "improve".

## 4. Plate candidates — three sites in 0006, all rendered, none marked

All three are in the **Corpus Corporum TEI itself** (`sources/pl/tei/8986.xml`), so they are
not our chunker's; that does not make them Migne's.

1. **0562D/0563A · *abjicicimus*** for *abjicimus*. **A non-word** (doubled syllable). Corpus
   control: our chunked Latin has *abjicimus* 3×, *abjicicimus* only here. Per the addendum-A
   rule a non-word is worth raising as a plate candidate and has been right every time — but
   "right" there has meant **our** corruption, so a `[sic:]` would publicly blame Migne for a
   defect that is probably the digitization's. **Rendered for its evident sense** ("we cast
   off"), which the clause requires (it is the only verb). ⬜ Plate read wanted.
2. **0563A · *cum-tua*** for *cum tua*. **The only hyphenated token in the entire work.** The
   shape is a line-break hyphen surviving transcription — the single likeliest digitization
   artifact there is. Rendered "with thy beggary". ⬜ Plate read wanted; if Migne really sets
   it so, it is a Pattern 10 run and takes a `[sic: *cum-tua*]`.
3. **0563D · *ibenter*** for *libenter*. **A non-word**; corpus control 155 *libenter* to 1
   *ibenter*, and the one is here. A dropped initial letter is the classic OCR loss. Rendered
   "gladly". ⬜ Plate read wanted.

⭐ **And the opposite class (brief §4 / addendum C), recorded as a negative so the check is
on the record:** I looked for forms that read *suspiciously tidy* in rough surroundings and
found none I would name. The passages where a normalization would be invisible are 0563A
(the *pauper in cella, dives in conscientia* rhetorical run, which is polished but is polished
in a polished paragraph) and 0570B–C (the Chrysostom peroration on peace, which is the
smoothest prose in the range and sits **immediately beside** the broken *Istam ego imitetur*
of §5.2 — anyone reading that plate for §5.2 should read the whole page while there).

## 5. Passages read closely, decided, and why

### 5.1 · 0562A — *quos superius in prima. Epistola … dixit*

Migne prints a **full stop between *prima* and *Epistola***, breaking "in the first Epistle"
in half. **Preserved exactly** (Pattern 8: never delete a mark he prints), so the English
reads "…whom above in the first. Epistle he said had done wrongs and frauds to their
brethren." It is unreadable as English and it is what the page says. ⬜ A plate read settles
whether the stop is Migne's or our TEI's; either way nothing here is emended.

### 5.2 · 0570B — *Istam ego imitetur.* — **the worst site in my range**

Printed: *Ista pax orbem servavit … ista homines angelos fecit. **Istam ego imitetur.***
Nominative first-person ***ego*** stands with third-person singular ***imitetur***. The
sentence does not construe in any reading.

- **Rendered "This one, I, let him imitate."** — both printed persons kept visible, nothing
  smoothed. It reads as broken because it is broken.
- **Two conjectures, and which I took.** *imiter* ("let me imitate this one") keeps the
  printed *ego* and needs one letter; *imitemur* ("let us imitate") is the natural sense of an
  exhortation and matches the Chrysostom source this paragraph is drawn from, but it
  **contradicts the printed *ego***, which is why it loses. **If a conjecture is ever put into
  the text, it should be *imiter*.**
- **No `[cj: …]` fired.** Pattern 18's bar is that the printed word makes the sentence *assert
  something the author is arguing against*, and 18a's extension covers negations and
  correlatives. This is a **person mismatch that asserts nothing at all** — the declined class
  named at 11064 @1154C (*suscepit* for *suscepi*). Declined for that reason, not overlooked.
- **No `[sic:]`**: *imitetur* is a real, well-formed word, and the column is unread.

### 5.3 · 0563A — *Ut inopia illi.*

Migne prints the lemma *Ut inopia **illi***; the Clementine has *ut **illius** inopia vos
divites essetis*, and the gloss itself expounds *per **illius** paupertatem*. Rendered
**"That by poverty for him."** — *illi* is a dative and is rendered as a dative. **The obvious
reading "That by his poverty" was rejected**: it renders a printed dative as a genitive, which
is Pattern 7's silent repair, and convention 3 licenses *expanding* a fragment, not *changing*
one of its words. The gloss's next sentence supplies the sense to any reader. No marker (real
word, unread column).

### 5.4 · 0566B/C — the Jerome *usque ad* tail, and its unexpressed subject

*Serpens Evam de Deo mentiendo seduxit, etc.,* ***usque ad*** *penitus non esse, aut aeternam
non esse affirmat contra auctoritatem omnium Scripturarum.* The resumption tail was parsed as
strictly as ordinary prose (the *ferias* warning): *affirmat* is the finite verb, the two
*esse* clauses are its objects, and ***aeternam*** is a **feminine accusative** — so the thing
denied is a feminine noun that the abridgment removed, almost certainly ***poenam*** or
***gehennam*** (Jerome on those who deny that hell exists or that it is eternal). **English
says "it", and this note is what tells a reader what "it" is.** Nothing was supplied to
complete the formula.

### 5.5 · `usque ad` — all four occurrences decided one at a time

| col | printed | call |
|---|---|---|
| 0565B | *Ne quis putet me illa comminari, etc., *usque ad* et peccantibus per severitatem fortis existo* | **formula** (an *etc.* before it, a resumption tail after) → "*as far as*" |
| 0566B | *Serpens Evam … etc., *usque ad* penitus non esse* | **formula** → "*as far as*" |
| 0568A/B | ***Usque ad tertium coelum.*** | ⛔ **NOT the formula** — it is 2 Cor 12:2's own words and a lemma in its own right, italic and glossed (*Id est, ad cognitionem Deitatis*). Rendered "Even unto the third heaven." |
| 0569B | *Gloria est punire, improperare, poenas exigere, etc., *usque ad* sed propter illius praeceptum* | **formula** → "*as far as*"; the tail's *sed* is kept, not smoothed |

Resumption tails parsed strictly: 0565B's *peccantibus* is a **dative** governed by *fortis
existo* ("toward sinners I stand forth strong"), not an ablative absolute.

### 5.6 · Unexpressed subjects supplied — every one, with what decides it

- **0559D–0560A · *Hi non adulantur*** — "These" = the *Dei ministros* of the lemma above.
- **0560B · *Ficta est, quae deserit in adversitate*** — the subject is ***charitas***, from
  the lemma *In charitate non ficta* immediately above; English "That charity is feigned
  which…".
- **0560B · *Vel hoc dicit*** and every later bare *dicit / ait / ostendit / tangit / addit* —
  **the Apostle**, named explicitly at 0561A (*Apostolus vult eos separari*) and again at
  0562B, 0563C, 0567B. Rendered "he" throughout, and "the Apostle" where Migne writes it.
- **0561A · *Idola prohibet coli*** — subject is the Apostle, not Christ: the sentence sits
  inside the exposition of Paul's *Cum idolis?* and is followed by *His omnibus modis
  ostendit*.
- **0561C · *quod Epistola contristavit*** — the object *vos* is unexpressed; supplied from
  7:8 *epistola illa … vos contristavit*. English "made **you** sorrowful".
- **0562A · *cui consentiendo inquinati eratis*** — *cui* is the **offender** (*illius qui
  uxorem patris habuit*), not the *negotium*: "by consenting to whom you had been defiled".
  ⚠ Both readings construe; I took the person because *consentire* in this gloss governs
  persons and because the offender is the nearest masculine antecedent.
- **0562A · the 7:12 cast of characters** — *qui fecit injuriam* = the incestuous man (Migne
  says so: *Ut ille qui incestum fecit*); *qui passus est fraudem* = the injured party; *Titus*
  is not in this sentence at all, though he is the subject two paragraphs later at 0562B.
- **0562B · *quia se gaudebat Apostolus*** — the reflexive *se* with *gaudebat* is pleonastic;
  rendered "the Apostle rejoiced **in himself**" rather than dropping the word. Logged because
  dropping it would have been invisible.
- **0565D · *qui ad omnes missus erat a Deo*** — "he who had been sent by God to all" = Paul,
  from *Ad regulam autem Apostoli* in the same sentence.
- **0567B/C · *detrahebant illis*** — "them" = the uncircumcised Gentile believers, from the
  same clause's *eo quod essent incircumcisi*.
- **0567D · *cum tamen nihil ferret*** — the subject is **Paul**, not the devil and not the
  robbers: the robbers are the ones who would want what he does not carry.
- **0568A · *Quia fert mihi testimonium*** — the subject is **God**, from 11:31's own *Deus et
  Pater … scit quod non mentior*.
- **0570A · *et sic reprobi appareant*** — ⚠ **a real ambiguity, and it is not adjudicated
  silently.** The plural must be either (a) **the apostles**, who "appear reprobate" when
  there is no one left to judge — which is 13:7's own *nos autem ut reprobi simus*, and which
  the next two sentences state twice (*probati enim videntur, dum judicant peccatores*;
  *cessante auctoritate quasi reprobi videntur*) — or (b) the Corinthians. **I took (a)**, and
  the English keeps a bare "they" so the reader is not committed further than Migne is; (b)
  loses because it makes the following *Reprobi simus, id est appareamus reprobi* change
  subject mid-argument.
- **0570C · *Sua tribuit congrua cuique*** — the subject is the Apostle distributing the three
  gifts of the salutation, from *Totam Trinitatem optat benedicere eos* just before.

### 5.7 · Smaller readings settled, with the loser named

- **0565B/C · *quod minor verbis* … *quod minor verbis impleturus sum factis*.** ***minor* is
  the deponent verb "I threaten", not the comparative "less".*** *Minatur* stands four words
  earlier in the same paragraph (*quod absens verbo minatur*), and "what is less by words"
  yields nothing. Rendered "what I threaten with words" in both places.
- **0567B · *Caedit. Id est, decipit.*** Migne glosses "he strikes" by "he deceives", which is
  odd but is what he prints, and his next sentence (*In faciem caeditur is, in cujus os
  injuria irrogatur*) shows he means a figurative blow. Rendered as printed; no marker.
- **0565A · *Et ad haec devincendum*** — gerundive singular against plural *haec*. Pattern 9:
  a number agreement with no English exponent. Rendered normally, no marker, no churn.
- **0562C · *quibus suadere non potest* / *quibus sua dare non prodest*.** Migne records the
  variant himself (*ut alii codices habent*), and the two readings are the same letters
  differently divided — *suadere* / *sua dare*. **Both rendered as printed**; the pun is not
  reproducible in English and is recorded here rather than forced into the text.
- **0565C · *pseudo qui commendant*** — the Vulgate's *qui seipsos commendant*; Migne clips the
  reflexive. English supplies "themselves" because *commend* is transitive in English and the
  gloss's own next words are *id est, usurpant potestatem*. Recorded because it is a supply.
- **0570C · *communicatio facti Spiritus sancti*** — *facti* is genitive of *factum*; rendered
  literally "the communication of the deed of the Holy Spirit". It reads strangely and is
  printed so. No marker (real words, unread column).
- **0568C · *ne alter puter*** — *alter* rendered "other than I am", the small supply English
  needs; the alternative "lest another think" is wrong, because *puter* is first person.

## 6. What I read clean

- **Column anchors:** counted before and after writing each file — 11 · 9 · 6 · 8 · 9, in
  order, and **each was checked against the word it stands beside in the Latin**, not merely
  for presence (2b). Four sit **inside** a construction and stayed there: *In multa patientia,
  in [0560A] tribulationibus* and *vos esse incontaminatos, a [0562A] negotio* (both inside an
  italic lemma), *Ab omni [0561B] inquinamento carnis*, and *penitus [0566C] non esse*. Two
  were **moved after a first draft placed them at the nearest sentence break instead of the
  nearest word** — 0562D (*jura auctoritatis [0562D] inclinant*) and 0563C (*pecuniarum
  collectarum [0563C] multitudo*).
- **The 0569C→0570A jump** (no 0569D) is Migne's band spacing, false-positive 1. Not reported.
- **Notes:** 3 · 0 · 1 · 4 · 3, verbatim, same order, contents untranslated. **All eleven are
  citations or sigla** — *(Matth. XI)*, *(Ibid.)*, *(Joan. I)*, *(HIER.)* ×3, *(AMBR.)*,
  *(Luc. XII.)*, *(THEOPH.)*, *(CHRYS.)* — so **no Pattern 15 `[nt:]` conversion arises**;
  judged by content, not length. Two of them sit **inside** the italic lemma (*Timeo autem.
  [n: (HIER.)]*, *Est veritas. [n: (HIER.)]*) and are reproduced there.
- **Question marks:** 1 · 1 · 1 · 2 · 3, all preserved, none supplied. Every one is a **direct**
  question in Latin, so **Pattern 8b never fired**: *Cum idolis?* · *pro confidentia vestri
  ivit?* · *quare me potius quam pseudo sequamini?* · *…adjicientur vobis?* · *Non uror?* ·
  *At cujus gratia … gloriaris?* · *Quis?* · *Sed nunquid mox ut nascitur?* ⚠ The one
  indirect question in the range — 0568A/B *Hoc ignoravit Apostolus, utrum … an … an …* —
  Migne closes with a **full stop**, and it stays a full stop.
- **Punctuation by band (test 3):** colons, semicolons, question marks, guillemets and
  exclamation marks compared **band by band** across all 48 bands of the five chunks, with our
  English-only markers stripped first. **Zero mismatched bands.** Eight edits were made to
  get there, all of them ours: a supplied semicolon at 0560A, a supplied colon at 0563A, a
  supplied colon at 0565C, two supplied semicolons at 0566A/B, a **deleted** colon at 0569B
  (*Jamdudum forsan putatis:*) with a supplied semicolon beside it, and two supplied semicolons
  at 0570C. No comma→semicolon sweep was made in either direction.
- **Guillemets:** none in the Latin, none in the English.
- **Migne's own *( sic )*:** none in this range, so nothing was stacked.
- **Verse numbers:** VERS. 1–14 (ch. VI–VII), 1–15/18–24 and 2–15 (VIII–IX), 1–18 (X), 1–31
  (XI), 2–21 and 2–13 (XII–XIII) — **all in ascending order**, none out of sequence.
- **Heads:** *CAPUT VI.* → *CHAPTER VI.* and so on through *CHAPTER XIII.*, 1:1, Roman numeral
  kept, matching the corpus's shipped forms. No `(cont.)` heads in this range.
- **Word ratio:** 1.46 · 1.47 · 1.47 · 1.49 · 1.48 — at the Abbo-pilot 1.5×.
- **`verify-english.mjs 8986` passes** (all 10 chunks, this half and the peer's).

## 7. The fourth test

Every paragraph was read back against the Latin asking only *does it assert what he asserts*,
after the counts were known clean. It caught three things, all repaired in the text:

1. **0570A · *ut … corripienda non inveniat*** had been rendered "may find in them **nothing**
   to be corrected", which relocates the negative from *inveniat* onto the object. Now "may
   **not** find in them things to be corrected".
2. **0565C · *Quod est, non ponimus nos***, where our punctuation had turned Migne's comma
   into a colon and made a second lemma-like announcement out of a continuing clause.
3. **0562C–0563A**, where three smooth English sentences sat over the three defective forms of
   §4 — the "reads smoothly where the Latin is rough" tell. The smoothness is now on the
   record here rather than passing as success.

⬜ **Left for a plate reader, in priority order:** 0563A *cum-tua* · 0562D/0563A
*abjicicimus* · 0563D *ibenter* · 0570B *Istam ego imitetur* (read the whole page — the
Chrysostom peroration is on it) · 0562A *in prima. Epistola* · 0570B *et dilectionis* ·
0563C *In hac parte* · and the four `[var:]` columns 0561A/B, 0562A, 0567D, 0568A, which
`plate-gate.mjs` will list.
