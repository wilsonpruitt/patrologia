# 9002 — cruces, stint 0027–0031 (cols 0137C–0150A)

*Glossa ordinaria*, **Evangelium secundum Matthaeum**, PL 114. Chunks 0027–0031: `CAPUT XV.`
through `CAPUT XIX.` — Mt 15:1 to Mt 19:30, 4,998 Latin words (5,077 by my own count of the chunk
bodies), 14 columns, **both plates read on every page**.

Companion files from this stint: `data/briefs/9002-PLATE-READS-0027.json` (every page opened, both
witnesses, findings and negatives) and `data/briefs/9002-PENDING-TEI-PATCHES-0027.md` (four sites
where our Latin has departed from Migne, all four Corpus Corporum's).

**Apparatus fired: 7 `[var:]` · 1 `[cj:]` · 0 `[sic:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` ·
0 `[cn:]`.** Guillemets: zero in either language, either direction — Matthew is an italic-lemma
book. `verify-english.mjs` is clean on all five chunks: column anchors (50), `[n:]` notes (30),
`VERS.` addresses, paragraph counts and question marks all 1:1 with the Latin twins.

---

## (a) THE POLICY I APPLIED — stated before the findings, so it can be argued with

**1. No claim about Migne's type on one witness, in either direction.** Every candidate raised from
the archive copy was taken to Gallica before it was written down. **Twenty-one candidates,
seventeen refuted, four confirmed — and all four confirmed ones turned out to be OUR file's error,
not Migne's.** The archive copy of PL 114 lost 17 times out of 17 in this range. That is a third
independent reproduction of the 12:1 figure CLAUDE.md records for cols 0063–0080.

**2. Where the plate was read and our twin diverges, the English renders the plate**
(`translation-style.md` §"What the English translates"). Four sites, all filed as pending patches:
@0142A `Etiam`→`Eliam`, @0143D `enimus`→`erimus`, @0148D `eum`→`cum`, @0142A a supplied comma.

**3. Zero `[sic:]`, and that is a measurement, not timidity.** A `[sic:]` accuses Migne's type and
must quote a word still standing in our Latin. Every defect I found is the digitization's, so the
marker cannot even be written at the sites that have one. This is the same result the 0000, 0006 and
0012 stints reported for their ranges.

**4. When a `[var:]` fires.** Migne's quoted scripture takes a `[var:]` where his words **assert or
substitute something the received text does not**. It does **not** fire where he merely shortens a
verse (an ellipsis — what an abridged recension does constantly, and which asserts nothing new),
nor on orthography, nor on a transposition that leaves the sense untouched. For a **single-word**
divergence I applied launch brief §2's bar exactly: it stands only where the gloss argues from the
word, **or** where the form is one that letter-level corruption cannot manufacture. Both limbs are
named at each firing below, and every decline is itemized in §(c) with its reason.

**5. `[cj:]` once, on the gloss's own prose** — @0146B `Jesus` for `laesus`. Pattern 18, not
Pattern 14, because the divergence sits in the commentator's sentence and not inside a quoted
scripture; the marker is additive, Migne's word keeps its English, and the conjecture stands beside
it. Argued in §(d).

**6. Vocabulary axes, applied from the first chunk.** `turba` → **crowd** (0139D *Misereor turbae*,
"Turba triduo sustinet"; 0140C "communis turba", *Et dimissa turba*, "ministrato turbae verbo";
0143A "tam eos quam turbas"; 0149C "major turba pauperum") — **no `multitudo` anywhere in the
range**, so the pair never had to be separated here. `daemonium` → **demon** (0145B *Et exiit ab eo
daemonium*, the range's only occurrence); `diabolus` → **devil** (six occurrences, 0138C–0145C);
no `satanas`. The *gentes* family: **`gentes`/`gentium`/`gentibus` → Gentiles** at all twelve
occurrences, because every one of them sits inside the *Judaei*/*gentes* typology this chapter is
built on (0138D *iturus ad gentes* against *perfidiam Judaeorum*; 0139A *gentium autem salus*
against *calumniam Judaeorum*; 0139B *catelli gentes humiles*, *fides gentium*; 0139C *plenitudo
gentium … omnis Israel*; 0147D *spernis gentes*); **`gentilis` → Gentile** (0138D *gentilis
feminae*, 0147C *Gentilem populum*); **`natio` → nation** at its single occurrence (0147C *tradidit
exteris nationibus*, "delivered over to foreign nations"); **`ethnicus` → heathen** (0147A lemma
*Sicut Ethnicus*, Mt 18:17). ⚑ The `natio` grep fires three times in these chunks and **two of the
three are *incarnation-*** — the instrument trap the standing brief names; checked before reporting.
`mysterium` → **mystery** and `sacramentum` → **sacrament**, 1:1 and never crossed (0139A
*sacramentum mei adventus* "the sacrament of my coming"; 0139B *interna mysteria*; 0140B *altiora
mysteria*; 0142A *mysterium fidei*; 0144B *mysterium sanctae Trinitatis*).

**7. `usque ad` — the `etc.` splice test, applied per occurrence. Twenty occurrences, twenty
formula, zero ordinary.** Every one of the twenty follows an `etc.,` and names where the father's
sentence resumes, so every one is rendered **"as far as"**. There is no temporal, spatial or
lemma-internal `usque ad` anywhere in these five chunks — the cleanest split any stint in this work
has reported, and I say so explicitly because a bare "all formula" is what a stint that never
checked would also write.

**8. Second person by number, not by reverence** (Pattern 17). The range swings between the two
repeatedly and the Latin decides every time. Plural **you** for the Pharisees (0137D *contemnitis*,
*arguitis*), for the apostles (0141A *potestis*, 0141A *vobis*, 0141B *cogitatis*, 0145B *fides
vestra*, 0146C *praecipio vobis … potestis*, 0147A *vestra sententia*, 0147B *sciatis*, 0148D
*vetatis, profertis, honorate, miseremini*, 0149D *eritis et vos*). Singular **thou** for the son
addressing his father (0138A *in tuos cibos, tibi, acciperes*), for Peter (0142A *tu es … ordinabis,
abjicies*; 0142B *ligaveris, adjudicaveris, absolveris*; 0142D *tibi dabo claves*, *Non placet tibi
… sapis*; 0145D *Quid tibi videtur*), for the individual believer (0146C *manus tua … pateas*,
*Bonum tibi est*; 0146D *peccaverit in te*; 0147A *Corripe, Dic*), and for the wicked servant
(0147D *dimisi tibi, rogasti, habuisti, persequeris, spernis, tua societate*). No "ye" outside
italic lemmata (*Hear ye him*, *Receive ye the Holy Spirit*, *Go ye not*, *Come, ye blessed*).

**9. Nothing supplied.** Where Migne's sentence lacks a word English cannot do without, the English
is left as broken as the Latin and the site is logged in §(d) — four of them, at 0138A, 0146B,
0146D–0147A and 0148D. **No bracketed conjecture stands in the running text anywhere in this
stint**; the one conjecture I hold is inside its `[cj:]` marker, where a reader meets it.

**10. Lemma expansion — the line I drew, which is the 0012 stint's and I adopt it deliberately
rather than re-deriving one.** The test: *can the printed lemma stand as an English clause or
phrase on its own?* If yes, render it as it stands; if it is grammatically headless, expand it from
the verse (convention 3).

- Rendered as they stand: *Edissere.* "Expound." · *Caecos.* "The blind." · *Clamavit,* "She cried
  out," · *Absit.* "Far be it." · *Vade.* "Go." · *Petrus.* "Peter." · *Tu es.* "Thou art." ·
  *Signa.* "Signs." · *Expedit.* "It is expedient." · *Talium.* "Of such." · *Deum.* "God." ·
  *Mirabantur.* "They wondered." · *Centuplum.* "A hundredfold." · *Barjona.* "Barjona."
- Expanded (headless): *Quare et vos.* → "Why do you also transgress." (Mt 15:3 — the pronoun has
  no verb) · *Non lotis.* → "With unwashen hands." (Mt 15:20 — a bare ablative plural) ·
  *Tunc accedentes.* → "Then the disciples, drawing near." (Mt 15:12 — a participle with no
  subject) · *Quia non.* → "Because thou savourest not." (Mt 16:23 — a negative with nothing to
  negate) · *Ergo liberi,* → "Then the sons are free," (Mt 17:25) · *Ut signum de coelo,* → "That
  he would show a sign from heaven," (Mt 16:1) · *Homines esse.* → "That men say he is."
  (Mt 16:13 — a bare accusative-and-infinitive; the gloss then expounds *homines*, which is why the
  word had to survive the expansion).
- ⛔ **And the expansions I refused, because they are 7a″ conformation and not convention 3.** Four
  lemmata clip a possessive or an intensifier that the Douay restores by reflex, and in each the
  restored word is *not on Migne's page*: *Honora patrem.* is **"Honour father."**, not "Honour thy
  father" (Mt 15:4 prints no *tuum*; *tuum* is Exodus's and Douay's) · *Magna est fides.* is
  **"Great is the faith."**, not "thy faith" (no *tua*) · *Hic est Filius.* is **"This is the
  Son."**, not "my beloved Son" (no *meus dilectus*) · *Propter incredulitatem.* is **"Because of
  unbelief."**, not "your unbelief" (no *vestram*). Each of the four reads slightly oddly in
  English, and that oddness is the information: it is what a clipped lemma looks like when it is
  not quietly completed from a Bible.
- ⚑ One more of the same class inside a gloss, not a lemma: at 0149C the lemma is *Quis poterit
  salvus esse?* and Mt 19:25 reads *Quis **ergo** poterit salvus esse?* The English is **"Who shall
  be able to be saved?"** — the Douay's "Who then can be saved?" would have restored the *ergo*
  Migne does not print, in the one clause the gloss's whole argument rests on.

---

## (b) SPAN COUNT — 217 against 217, whole-file and paragraph-bounded

`data/briefs/9002-lemmata-0027.txt` heads its inventory **217 spans, of which 0 open-ended**, for
chunks 0027–0031.

Counted in my own Latin, **both ways** (the file's own warning is that a bare total can agree
falsely when two errors cancel, so both numbers are required):

| | 0027 | 0028 | 0029 | 0030 | 0031 | **total** |
|---|---|---|---|---|---|---|
| italic `*…*`, whole file | 48 | 51 | 44 | 41 | 33 | **217** |
| italic `*…*`, paragraph-bounded | 48 | 51 | 44 | 41 | 33 | **217** |
| guillemet `« … »` | 0 | 0 | 0 | 0 | 0 | **0** |

**217 = 217 on both counts**, with 434 asterisk characters and zero guillemet characters in the
range, and **not one paragraph in the five chunks carries an odd number of asterisks**. The two
failure modes that make a bare total lie — an unmatched `«` running forward across a paragraph and
an unmatched `»` shifting the pairing back — are therefore both excluded, not merely unobserved.

---

## (c) THE LEMMA DIVERGENCE LIST — all 217 spans adjudicated, fired and declined alike

### c.1 · The seven `[var:]` that stand

| col | Migne prints | Clementine | why it fires |
|---|---|---|---|
| **0138B** | *Haereticum hominem post **primam** et secundam **correctionem** devita* [n: (Tit. III)] | Tit 3:10 *post **unam** et secundam **correptionem*** | a quoted clause with **two substitutions**, neither producible by letter-level corruption: *primam* for *unam* changes what is counted, and *correctionem* for *correptionem* changes correction into rebuke. Both plates. |
| **0141D** | *Joannes quem ego decollavi **surrexit** a mortuis: et **ideo** virtutes operantur **in eo*** [n: (Marc. VI)] | Mc 6:16 *Quem ego decollavi Joannem, hic a mortuis **resurrexit***; and the second half is **Mc 6:14**, *et **propterea** virtutes operantur **in illo*** | a quoted clause, restructured and conflated across two verses, with three word substitutions. Both plates. |
| **0143A** | *Vivo autem **ego**, jam non ego.* | Gal 2:20 *Vivo autem, jam non ego* | Migne **adds** the emphatic *ego*. A whole added word is not a broken sort, and the gloss leans on exactly this contrast (*Quod erat per vetustatem, abnegaverat ille qui dicebat*). Both plates. |
| **0144D** | *Nemini dixeritis **nisi**,* etc. | Mt 17:9 *Nemini dixeritis **visionem*** | a different word, not a letter-level variant of *visionem*. Both plates, read at 300 dpi and at native IIIF resolution. |
| **0146D** | *Gaudebit,* etc. | Mt 18:13 *gaudet super eam magis* | tense: future for present. `gaudet`→`Gaudebit` inserts two letters and cannot be a broken sort; **and the gloss's own next words revert to the present**, *Magis Dominus **gaudet** de nostra reparatione*. Both plates. |
| **0147B** | *Ibi sum **in me**.* | Mt 18:20 *ibi sum **in medio eorum*** | a quoted clause, and **the gloss quotes the received words the lemma does not have** — *ut dicat Deum **in medio esse eorum***, four lines below. Both plates. |
| **0149B** | *Dicit **ei** adolescens.* | Mt 19:20 *Dicit **illi** adolescens* | a different word (*ei*/*illi*), which letter-level corruption cannot manufacture — the limb the 0006 stint fired on for this exact pair. **⚠ Note for the auditor: the archive copy prints `et` here and Gallica prints `ei`; the marker rests on Gallica plus our twin, and the archive's reading does not construe.** |

### c.2 · The `⚠ NOT in Clementine verbatim` spans, every one adjudicated

The brief flagged 25 spans in this range. Not one is a divergence I have left unaccounted:

**Orthography and word division — not divergences (launch brief §7's third cause).**
*Quicunque dixerit.* @0138A and *Quicunque ergo humiliaverit,* @0146A against Clementine
*Quicumque* (·*cunque*/·*cumque*, twice) · *Et quodcunque ligaveris.* @0142B and *Et quodcunque
ligaveris super terram.* @0142B against *quodcumque* (twice) · *maechatur* @0148B against
*moechatur* (ae/oe) · *Barjona.* @0141D against Mt 16:17 *Bar Jona* — **a word division, nothing
more**, exactly §7's `Etsi omnes` case, and not a `[sic:]` either.

**Ellipsis and clipping — the recension's own habit, which asserts nothing new.**
*Aedificabo Ecclesiam meam, et tibi dabo claves,* @0142D (Mt 16:18 + 16:19 joined across the verse
seam) · *Quia non sunt condignae passiones…* @0143B (Migne's *Quia* stands where Rom 8:18 has
*Existimo enim quod* — his own connective, opening the quotation) · *Castigo corpus meum…* @0143A
(1 Cor 9:27's opening *sed* cut) · *Cavete a fermento Pharisaeorum.* @0141C (*et sadducaeorum* cut)
· *Quis poterit salvus esse?* @0149C (*ergo* cut) · *Et audientes discipuli ceciderunt in faciem.*
@0144C (*suam* cut) · *Et erunt duo in carne.* @0148A (*una* cut, and the gloss supplies *una caro*
itself in its next clause) · *Venite, benedicti Patris mei: Esurivi enim et dedistis mihi
manducare.* @0149D (Mt 25:34a + 25:35a, spliced across a verse) · *Si vis perfectus esse. Omnia
haec.* @0149B (two clipped lemmata, Mt 19:21 and 19:20, set side by side).

**Transposition — a real difference in order, but the sense is identical, so no `[var:]`.**
*Quod signum facis, ut videamus et credamus tibi?* @0140D (Jo 6:30 *Quod ergo tu facis signum*),
with *manducarunt* @0140D for Jo 6:31's *manducaverunt* — a syncope, not a word · *quam
commutationem dabit homo,* @0143B (Mt 16:26 *aut quam dabit homo commutationem pro anima sua*) ·
*Afferte illum huc ad me.* @0145B (Mt 17:16 *Afferte huc illum ad me*) · *Qui adulteram tenet
stultus et impius est* @0148C (Pr 18:22 *qui autem tenet adulteram stultus est et impius* — Migne's
reference `(Prov. XVIII)` is **correct**, and the ⚠ fired on the order alone) · *Centies tantum nunc
in tempore hoc cum persecutionibus fratres et sorores, et in futuro vitam aeternam* @0149D–0150A
(Mc 10:30, compressed and reordered, *in futuro* for *in saeculo futuro*).

**Two spans that are not scripture citations at all, and therefore have no comparand.**
*Labiis me honorat. Magister, scimus quia verax es* @0138A is **two lemmata run into one italic
span** — Mt 15:8 and Mc 12:14, and each agrees with its own verse exactly. *Non enim judicabit Deus
bis in idipsum.* @0146B is an unattributed patristic tag from **Nah 1:9 in the LXX**
(οὐκ ἐκδικήσει δὶς ἐπὶ τὸ αὐτό); the Vulgate renders that verse *non consurget duplex tribulatio*,
which shares no words with it. ⛔ **I declined a `[var:]` here deliberately**: Migne prints no
reference, the tag is not offered as a Vulgate quotation, and a marker naming Nah 1:9 as "the
received text" would assert a relation the page does not make. Logged instead.

**And one that was our own file's corruption, not a divergence at all** — *Alii Joannem Baptistam,
alii autem **Etiam**,* @0142A. Both plates print `Eliam`; with the patch the span matches Mt 16:14
word for word. See the patch file; this is a **fifth cause** for a failed phrase search, alongside
§7's four.

### c.3 · The spans that agree with the Clementine exactly — checked, and recorded as checked

**A list of findings alone cannot be told apart from a report by an agent that never looked**, so:
the remaining spans were collated verse by verse and agree. In `CAPUT XV`: *Tunc accesserunt*
(15:1) · *Non enim lavant* (15:2) · *Quare et vos* (15:3) · *Honora patrem* (15:4) · *Vos autem
dicitis* (15:5) · *Proderit* / *Vel tibi proderit* (15:5) · *Bene prophetavit* (15:7) · *Non quod
intrat* (15:11) · *Tunc accedentes* / *Scandalizati sunt* (15:12) · *Sinite* (15:14) · *Edissere*
(15:15) · *De corde* (15:19) · *Non lotis* (15:20) · *Lavamini, mundi estote* (Is 1:16) · *Et
egressus* (15:21) · *Clamavit* (15:22) · *Qui non respondit* (15:23) · *In viam gentium ne
abieritis* (Mt 10:5) · *Non sum missus* (15:24) · *Panem filiorum* (15:26) · *Etiam, Domine* /
*Nam et catelli* (15:27) · *Magna est fides* / *Et sanata est* (15:28) · *Non inveni tantam fidem in
Israel* (Mt 8:10) · *Et cum transisset* / *In montem* (15:29) · *Caecos* (15:30) · *Jesus autem* /
*Misereor turbae* (15:32) · *In deserto panes* (15:33) · *Et accipiens* / *Septem panes* (15:36) ·
*Et quod superfuit* / *Septem sportas* (15:37) · *Et dimissa turba* / *In fines* (15:39) · *Hortus
conclusus, fons signatus* (Ct 4:12). In `CAPUT XVI`: *Et accesserunt* / *Ut signum de coelo* (16:1)
· *Facto vespere* (16:2) · *Rutilat enim* (16:3) · *Signa* / *Signa autem* / *Non dabitur ei* (16:4)
· *Obliti sunt panes accipere* (16:5) · *A fermento* (16:6) · *Quid cogitatis* (**16:8** — see
below) · *In partes Caesareae Philippi* / *Homines esse* / *Filium hominis* (16:13) · *Alii Joannem
Baptistam* (16:14) · *Respondens Simon Petrus* / *Dei vivi* (16:16) · *Tu es* / *Petrus* / *Et
portae* (16:18) · *Vos estis sal terrae* (Mt 5:13) · *Accipite Spiritum sanctum* (Jo 20:22) · *Ut
nemini* / *Jesus Christus* (16:20) · *Exinde* (16:21) · *Absit* (16:22) · *Vade* (16:23) · *Si quis
vult* / *Abneget semetipsum* / *Tollat crucem* (16:24) · *Quid enim prodest* / *Aut quam* (16:26) ·
*Calicem salutaris accipiam…* (Ps 115:4) · *Quis infirmatur, et ego non infirmor* (2 Cor 11:29) ·
*Filius enim* (16:27) · *Sunt quidam* / *In regno* (16:28). In `CAPUT XVII`: *Et post dies* (17:1) ·
*Transfiguratus est* / *Resplenduit facies* / *Vestimenta autem* (17:2) · *Et ecce* (17:3) · *Visi
in majestate…* (Lc 9:31, **exact**) · *Adhuc eo loquente* / *Ecce nubes lucida* / *Et ecce vox* /
*Hic est Filius* / *Ipsum audite* (17:5) · *Surgite* (17:7) · *Levantes autem oculos* / *Nisi solum
Jesum* (17:8) · *Quod Eliam oporteat* (17:10) · *Tunc intellexerunt* (17:13) · *Et cum venisset* /
*Quia lunaticus est* (17:14) · *Et obtuli* (17:15) · *Respondens* (17:16) · *Et increpavit* / *Et
exiit ab eo daemonium* (17:17) · *Propter incredulitatem* / *Sicut granum sinapis* (17:19) · *Hoc
autem genus* / *Nisi per orationem* (17:20) · *Sine intermissione orate* (1 Thes 5:17) · *Filius
hominis* (17:21) · *Et contristati* (17:22) · *Et cum venissent Capharnaum* (17:23) · *Quid tibi
videtur* / *Reges terrae* (17:24) · *Ergo liberi* (17:25). In `CAPUT XVIII`: *Quis putas* / *In
regno coelorum* (18:1) · *Et advocans* / *Parvulum* ×2 (18:2) · *Quicunque ergo humiliaverit* /
*Sicut parvulus iste* (18:4) · *Qui autem scandalizaverit* / *Expedit* (18:6) · *Vae homini* (18:7)
· *Si autem manus tua* / *Bonum tibi est* (18:8) · *Videte ne contemnatis* / *Quia angeli eorum* /
*Semper vident* (18:10) · *Si fuerint alicui centum* / *Nonne relinquet* (18:12) · *seipsum
exinanivit formam servi accipiens* (Phil 2:7, see below) · *Si autem peccaverit in te* / *Corripe
eum* (18:15) · *Dic Ecclesiae* / *Sicut Ethnicus* (18:17) · *Amen dico* (18:18) · *Si duo* (18:19) ·
*Ideo assimilatum* (18:23) · *Et uxorem* (18:25) · *Misertus autem* / *Dimisit ei* (18:27) ·
*Invenit unum* (18:28) · *Serve nequam* (18:32). In `CAPUT XIX`: *Et accesserunt* (19:3) · *Et
feminam* (19:4) · *Adhaerebit uxori* (19:5) · *Homo non separet* (19:6) · *Quid ergo Moyses* (19:7)
· *Et aliam duxerit … Et qui dimissam* (19:9) · *Non expedit* (19:10) · *Sunt enim* / *Qui facti
sunt* / *Qui potest* (19:12) · *Sinite parvulos* / *Talium* (19:14) · *Et cum imposuisset* (19:15) ·
*Et ecce unus* (19:16) · *Quid me interrogas de bono?* / *Serva mandata* (19:17) · *Dives difficile*
(19:23) · *Quam divitem* (19:24) · *Mirabantur* (19:25) · *Deum* (19:26) · *In regeneratione* /
*Filius hominis* / *Super sedes duodecim* (19:28) · *Centuplum* (19:29) · *Multi autem erunt primi*
(19:30). The twenty `*usque ad*` spans are the abridgment formula and carry no verse.

⚑ **`Quid cogitatis.` @0141B is launch brief §3's gospel trap, and it resolves innocently.** The
brief's own line prints `✓ Lc 5:22, Mc 8:17, Mt 9:4, …` — three parallel verses and an ellipsis, and
the lemma stands under `CAPUT XVI` addressing `VERS. 8`. **I read the verse rather than the
reference list**: Mt 16:8 is *Quid cogitatis intra vos modicae fidei*, so the words are Matthew's
own and are hidden inside the `…`. A reference list is not a parallel — and it is not a refutation
either.

---

## (d) THIS RANGE'S CRUCES, BY COLUMN

**@0138A — an unexpressed subject that two readings both construe, and I did not choose silently.**
Migne prints *quod Deo oblaturus eram in tuos consumo cibos, tibique prodest, o pater, ut **timeat**
consecrata comedere.* The father is addressed in the second person (*tuos*, *tibi*, *o pater*) and
then *timeat* is third singular. Two readings construe: (a) the father, referred to in the third
person after his own vocative — a shift Migne prints; (b) an impersonal "one". I rendered **"that he
should be afraid to eat what has been consecrated"**, which keeps the third person the Latin prints
and commits to neither antecedent by name. Nothing in the gloss decides it.

**@0138A — a verbless sentence, left verbless.** *In spiritu simulationem Judaeorum, quod in dolo
repugnarent Evangelio.* has no finite verb; the accusative *simulationem* hangs. Rendered as it
stands ("In the spirit, the dissembling of the Jews, that in guile they would fight against the
Gospel"). No verb supplied — this is §9's discipline, and a supplied *praevidit* would have been
invisible as ours.

**@0139A — a rough splice tail, rendered rough.** *et hoc de signo petitionem hujus differendo* does
not resolve cleanly: *de signo* attaches to nothing certain. Rendered **"and this by deferring, in
the matter of the sign, the petition of this woman"**. The abridgment removes words, it does not
suspend grammar, so the oddity is Migne's and is left visible.

**@0139B — a number shift inside one sentence, preserved.** *Magna est fides gentium, quae in auditu
auris **obediunt**: et in Deo salutem sibi suisque **impetrat**.* Plural relative on *gentes*, then
a singular verb for the woman. Rendered as printed ("who at the hearing of the ear obey: and in God
she obtains salvation for herself and for her own"). Migne's, not tidied.

**@0139D — a negation on a verb with an unexpressed second subject.** *et vicini quinque sensuum et
eorum non recordatur Dominus, sed discipuli in vespera jam inclinato sole.* The `non` sits on
*recordatur*, whose subject is *Dominus*; the `sed` clause supplies a second subject (*discipuli*)
with no verb of its own. Rendered **"and the Lord does not remember them, but the disciples do, at
evening, the sun being now declined"** — the negative stays on the Lord's remembering, where the
`sed` correlative puts it, and the elided verb is carried by English "do". Checked under test 2a
because a negative on a verb beside a correlative is exactly that test's trigger population.

**@0140A — an unexpressed generic subject.** *ad quod tendens reficitur in via* — no subject.
Rendered "toward which, as he presses on, a man is refreshed on the way"; the antecedent is the
penitent of the preceding sentence, not the Lord, because *reficitur* answers *reficiuntur* of the
crowd fed in the desert.

**@0142A — the sentence the TEI patch repairs.** Our Latin prints *alii autem Etiam*, which is a
non-word inside a scripture lemma; both plates print *Eliam*. The English renders the plate. Full
argument in `data/briefs/9002-PENDING-TEI-PATCHES-0027.md` §1, including why this matters beyond
one word: it is a **fifth cause** for a lemma failing the Clementine phrase search, and the only one
of the five that reads as evidence against *Migne*.

**@0143D — `enimus`, and the corroboration that proves nothing.** Our Latin prints the non-word
*enimus*; the correct *erimus* stands six words later in the same sentence, which is the shape
CLAUDE.md names as decisive-feeling and worthless. Both plates read *erimus* at the first site too:
ours, patched, English follows the plate.

**@0144D — the sentence with no question mark, and I did not supply one.** *Si jam venisti in
gloria, quomodo praecursor tuus non apparet, maxime quia et Eliam viderant recessisse.* This is
direct speech that turns into narration mid-sentence (*venisti*, *tuus* → *viderant*), and it reads
as a question. **Migne prints a full stop, on both witnesses.** Pattern 8: never supply. Rendered
with a comma and a full stop, and the person-shift left standing.

**@0146B — ⭐ THE ONE `[cj:]`, AND WHY THE RIVAL LOST.** Migne prints, on **both** witnesses:

> *Innocens erit sicut iste parvulus, qui non perseverat in ira: **Jesus** non meminit: visam
> mulierem non cupit.*

Three members describing the innocence of a child: he does not persist in anger; *Jesus* does not
remember; having seen a woman he does not desire. **The middle member's subject is wrong**, and the
third member then attaches its predicate to Jesus as well. *Jesus* is a real word occupying a real
slot, so Pattern 12 has nothing to wrap and Pattern 7 renders it — and the English then asserts
something the author is plainly not arguing, which is Pattern 18's bar exactly.

Two conjectures were weighed. **The one the marker takes is *laesus***: "when hurt, he does not
remember", one word for one word in the same slot, supplying the participial subject the third
member's *visam mulierem non cupit* needs, and differing from *Jesus* by the shape of two letters.
**The rival, *injuriae* ("he does not remember an injury"), lost** on two counts: it is a noun in
the wrong case to replace a nominative subject, and it leaves the third member without the
participial subject the parallel requires. The marker reads `Jesus [cj: *Jesus*; read *laesus*,
"when hurt"] does not remember`, additive per Pattern 18 — Migne's word keeps its English and the
conjecture stands beside it, so a reader meets both.

⚑ **This is not a `[sic:]` and could not be one.** Both copies print *Jesus* cleanly at 300 dpi and
at native IIIF resolution; the type is not broken, the word is not a non-word, and there is nothing
to accuse the compositor of.

**@0146D — `Nonne relinquet` and `Gaudebit`, one class, two verdicts, and the reason.** Both are
futures where Mt 18:12–13 has presents (*relinquit*, *gaudet*), both confirmed on both plates, and
they stand nine words apart. I fired on **`Gaudebit`** and declined **`relinquet`**, and the split
is the §2 bar, not a hunch: *gaudet*→*Gaudebit* inserts two letters and cannot be a broken sort,
and the gloss's own next clause reverts to *gaudet*, so the lemma has a witness against itself.
*relinquit*→*relinquet* is **one letter** and nothing in the gloss leans on it, so it fails both
limbs. ⚑ **The honest statement of the rival I rejected:** their agreeing direction is real evidence
that Migne's copy-text futurizes here rather than that a sort broke twice, and on that reading
*relinquet* would fire too. I declined it because that argument is an inference from one neighbour,
and §2's bar is written precisely to keep a one-letter form from riding into the apparatus on an
argument. It is logged here so the call can be reversed by someone who disagrees.

**@0146B–C — two abridgment tails that read badly, and are left reading badly.** *usque ad nos
oportet consulere expedit, etc.* and *usque ad damnantur humanam sententiam divina sententia
corroborari* are both resumption points where the splice has cut mid-construction. Rendered as
closely as the printed words allow ("as far as we ought to take counsel, it is expedient, etc."; "as
far as they are condemned, that a human sentence is confirmed by the divine sentence"). ⚑ The
standing brief's warning applies and I obeyed it: **a tail that reads oddly is not evidence the
abridgment made it odd** — I parsed each as ordinary prose first and found it genuinely broken, not
merely elliptical.

**@0147C — the `non solum … sed etiam` correlative, and where its negative belongs.** *Eum non solum
populum, sed etiam praelatos et subditos … tradidit exteris nationibus.* Test 2a's trigger fires
here (a negative beside a correlative), so the host is proved from the structure and not from what
reads well: the `non` attaches to **`solum`**, not to `tradidit`, and the `sed etiam` limb names the
second member. Rendered "Him, not only the people, but also the prelates and the subjects … he
delivered over to foreign nations". The same correlative recurs at @0147C (*non solum captivitatem
Judaicam absolvit, sed etiam … promisit*) and @0147D (*non modo persuasionibus, sed etiam
tormentis*), and both are attached the same way.

**@0147D — an unexpressed subject named.** *fatigabat* and *exspectabat* have no expressed subject.
The antecedent is **the wicked servant of the parable**, whom the gloss identifies as the Jewish
people and addresses in the second person at VERS. 32 (*spernis gentes*); the object is *Gentilem
populum*. Rendered with "he", and the identification recorded here rather than assumed.

**@0148D — a compressed sentence rendered compressed.** *Nam quales sunt modo, meum quidem est, quod
honorate: quales post futuri sunt, ipsorum est, quod miseremini.* Rendered "For as to what sort they
now are, that indeed is mine, in that you honour them: as to what sort they are afterwards to be,
that is their own, in that you have pity on them." This is the passage that carries chunk 0031's
ratio to 1.61 — the expansion is the unpacking of a doubly elliptical Latin correlative, not
padding, and it is named here so the verifier's warning has an answer.

**@0150A — Migne's reference is wrong, and it rides as printed.** *Multi autem erunt primi*
[n: (Luc. XV)]. The words are **Mt 19:30**, repeated at Mc 10:31; the Lucan parallel is **Lc 13:30**,
not Luke XV, which is the prodigal son. Both witnesses print `(Luc. XV)`. Passed through verbatim
under the `refDisplay` rule — the reference is Migne's editorial act and correcting it would erase
evidence about his citing practice. Logged so a reader is not left thinking we missed it.

**Sections read clean.** Cols 0137C–0138D, 0139A–0140C, 0141A–0141C, 0144A–0144C, 0145A–0145D and
0148A–0148C were read word by word against both plates and returned nothing: no defect, no
divergence, no apparatus at the foot. **A checked zero is a result**, and six clean bands out of
fourteen columns is what this range actually looks like.

---

## (e) THE DECLINED-ODDITY LIST — every suspect word I did NOT mark, in one place

On John and Luke this list produced nearly every correction those works got, so it is exhaustive
rather than selective.

| col | reading | why declined |
|---|---|---|
| 0137D | `VERS. 3 —` without the point (archive) | archive ink; Gallica prints `VERS. 3. —`, our TEI right. **And a verse address may not be altered on one witness in any case.** |
| 0138A | *tibique prodest, o pater, ut timeat* | real words, both plates; a person shift, not a defect. See §(d). |
| 0138A | *In spiritu simulationem Judaeorum* — no finite verb | Migne's, both plates. Verbless sentences are not a Pattern 7 defect; nothing supplied. |
| 0138B | *idolothitum* | a real transliterated technical term, not a non-word. Rendered "meat offered to idols". |
| 0139B | `Israel` (ours) against Gallica's `Israël` | a diacritic. Not a divergence in either direction. |
| 0139B | *quae … obediunt* with singular *impetrat* | a number shift in one sentence; both plates; rendered as printed. |
| 0140B | `palman` (archive) | archive ink; Gallica `palmam`. |
| 0140B | `utriu sque`, `pr acceptorum` (archive) | archive letterspacing; Gallica sets both whole. ⚑ Split type is the shape §10 quarantines, and it was one HTTP request from being quarantined here. |
| 0140C | `interpratur` (archive) | archive ink; Gallica `interpretatur`. |
| 0140D | *manducarunt* for *manducaverunt* | a syncopated perfect, a real and attested form. Pattern 9. |
| 0141C | `Qnid` (archive) | archive ink; Gallica `Quid`. |
| 0142B | `quodcumque` ×2 (archive) against `quodcunque` (Gallica + ours) | two printings, both clean at this word; ·*cunque*/·*cumque* is orthography either way. **No `[sic:]`, no patch** — the @0073A `Bethehem`/`Bethlehem` class. |
| 0142C | `Jesus-Christus` (archive) | a compound hyphen at a line break in that printing; Gallica sets it open. Not a divergence. |
| 0143C | `debet esset` (archive) | archive ink; Gallica `debet esse`. |
| 0144A | `Spiritus sanctis` (archive) | archive ink; Gallica `Spiritus sancti`. |
| 0144D | `recessisset` (archive) | archive ink; Gallica `recessisse`. |
| 0145C | `VERS. 24.` without the em-dash (archive) | archive ink; Gallica prints it. |
| 0146B | *Non enim judicabit Deus bis in idipsum* | not a Vulgate citation and carries no reference; LXX Nah 1:9. A `[var:]` would assert a relation Migne does not make. |
| 0146C | `condemnatis` (archive) | archive ink; Gallica `contemnatis`, agreeing with Mt 18:10 and with our TEI. |
| 0146C | `(HIER)` without the point (archive) | archive ink. |
| 0146D | *Nonne relinquet* (future for *relinquit*) | **both plates, so Migne's** — but one letter, and the gloss does not lean on it: fails §2's bar for a single-word `[var:]`. The rival argument is stated in §(d) and rejected there. |
| 0146D | *seipsum* for Phil 2:7's *semetipsum* | a form of the same pronoun meaning the same thing; one limb of §2's bar fails and the other is not reached. |
| 0147A | `vel ab abjiciendum` (archive) | archive ink; Gallica `vel ad`. |
| 0148B | `Disciplicet` (archive) | archive ink; Gallica sets `Dis-|plicet`. ⚑ **A non-word, and it is the archive's** — launch brief §8's correction, reproduced. |
| 0148D | `etiam hic qui` (archive) | archive ink; Gallica `etiam hi qui`. |
| 0149A | `Contra` capitalised (archive) | archive ink; Gallica lowercase, with our TEI. |
| 0149B | `Dicit et adolescens` (archive) | archive ink; Gallica `Dicit ei`, which is what the `[var:]` at c.1 rests on. |
| 0149C | `In generatione` (archive) | archive ink; Gallica `In regeneratione`. ⚑ **The most dangerous refutation in the range**: read on one witness this is not a broken word at all but a *scripture divergence* against Mt 19:28, and it would have produced a false `[var:]` in a gloss whose next words are *Duae sunt regenerationes*. |
| 0150A | `[n: (Luc. XV)]` on Mt 19:30's words | Migne's own reference, both plates. `refDisplay` rule: passed through verbatim, logged, never corrected. |
| — | *Magedan*, *Dalmanuta*, *Gerasam*, *Chananitidis*, *Barjona* | proper-name orthography; nothing in any gloss turns on a letter. Not divergences. |

**Nothing else in cols 0137C–0150A struck me as suspiciously tidy** in the sense of standing-brief
§4 — i.e. a form too clean for a rough passage, which is the only handle we have on the
digitization's *silent-correction* direction. The four sites where our file departs from the plate
all depart in the rough direction (`Etiam`, `enimus`, `eum`, a supplied comma), and I record the
negative on the other direction deliberately, because a checked negative is worth having when three
of the four known normalizations elsewhere came back positive.
