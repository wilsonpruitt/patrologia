# *Glossa ordinaria*, **Liber Ecclesiastes** (PL 113, 1115D–1126D) — cruces

Translated 2026-08-19, one translator, 4 chunks (3,788 Latin words), on Opus.
`verify-english.mjs` clean: frontmatter verbatim, columns, notes and sections aligned,
no duplicate paragraphs, question-mark parity exact.

**Apparatus: 15 `[var:]` · 1 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` ·
86 `[n:]`** (24 / 29 / 19 / 14, exact parity and order with the Latin twins).
Structure: PROLOGUS + CAPUT PRIMUM → CAPUT XII, thirteen `## ` heads, 1:1.
**Guillemets: ZERO in either language** — this book sets its lemmata in *italics*, like Ruth,
not in `« »` like Tobit/Judith/Esther.
**Question marks: 0 / 1 / 3 / 0 in the Latin, the same in the English. None supplied, none
deleted.** **Exclamation marks: 1 in the Latin (1117B *quanto magis caetera!*), 1 in the
English.** Column anchors: 11 / 11 / 11 / 9, verbatim and in order.
**Em-dashes: zero.**

---

## §1 · CONVENTIONS — INHERITED, NOT RE-DERIVED

Ruth (8968) §1 governs this book unchanged, and **nothing here re-opened it**: `VERS. n.--`
is an address and passes through verbatim; the lemma is Englished; a fragmentary lemma is
rendered as the phrase it stands for; the attribution sigla (`(HIER.)`, `(ID.)`, `(HIERON.)`,
`(ALBINUS.)`) ride as ordinary `[n: …]` notes, unanglicized.

Two inherited refinements that actually decided calls here:

- **Tobit's `*usque ad*` formula → "*as far as*", with NO verb ever supplied to complete it.**
  This book runs it heavily (56 instances). Every resumption tail was parsed as strict prose,
  per the brief's warning about *ferias*; where a tail's subject is off the page it is left
  unsupplied rather than invented (§4.2).
- **Esther (8948) §1(c): a bracketed supply belongs in GLOSS PROSE, never inside a quoted
  scripture lemma.** This work prints no guillemets, so the rule reaches it as a principle:
  **all six bracketed supplies in these four chunks stand in the gloss, and not one is inside
  an italic lemma.** They are `[think]` (1118A), `[render]` (1118D), `[me]` (1119D),
  `[the thought]` (1119D), `[danced]` (1120C), `[understand]` (1122B), `[come]` (1123C),
  `[To those]` (1125C). Each is either an ellipted verb Migne leaves to be understood or an
  object English cannot drop.
- **Esther's fragment rule (complete a stump freely EXCEPT where the completion would supply or
  move a negative) was applied and it bit twice** — see §3.2 and §3.3.

---

## §2 · THE LEMMA COLLATION — ALL 191 SPANS, CHECKED AGAINST THE CLEMENTINE

Collated against `sources/vulgate/clementine-flat.txt` (Tweedale "Quasimodo", 2005), **not from
memory**. Every lemma in the launch list was looked up. This section names the divergences AND
the verified agreements, because a findings-only list cannot be told from a report by an agent
that never looked.

### 2.1 The fifteen `[var:]` — lexeme-level divergence from the Clementine

The rule I applied, stated so it can be checked: **`[var:]` where Migne's citation differs from
the Clementine by a LEXEME — a different word, or a substantive word added or dropped;
cruces-only where the difference is word order, orthography, an enclitic particle (*enim*,
*autem*), a tense/number inflection, or a truncation.** One deliberate extension: an order
reversal in a formula whose received order is fixed and famous (*Dies irae dies illa*) takes a
marker too, because a reader meeting our English otherwise reads OUR error.

| col | Migne prints | Clementine | note |
|---|---|---|---|
| 1117C | *Vadit ad austrum* | Eccl 1:6 *gyrat per meridiem* | wholly different verb and noun for the same sense; a Hexaplaric/Old-Latin reading, exactly the class the brief warns of |
| 1117D | *Terra es, et in terram ibis* | Gen 3:19 *pulvis es et in pulverem reverteris* | earth for dust throughout; and the gloss turns on *terra* (*in terram, unde sumptum est redit*), so conforming to Douay would have removed the argument's own keyword |
| 1118B | *Requievit Deus die septimo ab omni opere suo* | Gen 2:2 *requievit die septimo ab universo opere quod patrarat* | *Deus* supplied, *quod patrarat* dropped |
| 1118C | *Non est memoria sapienti cum stulto in aeternum* | Eccl 2:16 *Non enim erit memoria sapientis similiter ut stulti in perpetuum* | a different rendering of the verse, not a truncation; dative *sapienti*, *cum stulto*, *in aeternum* |
| 1118D | *Erroresque et stulti* | Eccl 1:17 *erroresque et stultitiam* | see §3.1 — the one place I weighed `[cj:]` and rejected it |
| 1119A | *Dixi ergo* | Eccl 2:1 *Dixi ego in corde meo* | *ergo* for *ego*; see §3.4 |
| 1121C | *Melius illi erat si natus non fuisset homo ille* | Matt 26:24 *bonum erat ei, si natus non fuisset homo ille* | *melius illi* for *bonum ei*; the negative is identical in both and did not move |
| 1121D | *Cum votum voveris* | Eccl 5:3 *Si quid vovisti Deo, ne moreris reddere* | a different clause of the same verse, differently worded |
| 1122A | *Omnia quaecunque praecepit nobis Deus, faciemus* | Exod 24:3 *Omnia verba Domini, quae locutus est, faciemus* (cf. 24:7, 19:8) | *praecepit nobis Deus* for *verba Domini quae locutus est*. Migne's own note reads `(Exod. XXIV, XXXII)`; the Golden Calf is Exod 32, so his double reference is to the promise and the breach, and it is right as printed |
| 1123A | *Memoria justorum in laude, nomen impiorum putrescet* | Prov 10:7 *Memoria justi cum laudibus, et nomen impiorum putrescet* | plural *justorum*, *in laude* for *cum laudibus*, *et* dropped |
| 1123C | *Dies illa dies irae* | Soph 1:15 *Dies irae dies illa* | order reversed in the most recognizable clause in the work |
| 1123C | *Impii non dimidiabunt dies suos* | Ps 54:24 *Viri sanguinum et dolosi non dimidiabunt dies suos* | subject wholly replaced; the negative sits on *dimidiabunt* in both and did not move |
| 1124B | *Non est in hominis ditione* | Eccl 8:8 *Non est in hominis potestate* | *ditione* for *potestate*. **Checked corpus-wide: this is the ONLY occurrence of `hominis ditione` in all of `src/latin/`** |
| 1125B | *In risu faciunt panem et vinum, ut epulentur bibentes* | Eccl 10:19 *In risum faciunt panem et vinum ut epulentur viventes* | ***bibentes* for *viventes***, and *In risu* for *In risum*. The one-letter-class divergence that matters most here: the gloss is about preachers who allure rather than profit, and "the drinkers" is what Migne's plate feasts |
| 1126A | *Qui enim perseverat, salvabitur* | Matt 24:13 *qui autem perseveraverit usque in finem, hic salvus erit* | present for future perfect, *salvabitur* for *salvus erit*, *usque in finem* dropped. ⚑ **The same verse is quoted at 1123B in a DIFFERENT form** — *Qui perseveraverit salvus erit* — which agrees with the Vulgate except for the dropped *usque in finem* and *hic*, and therefore took no marker. Two forms of one proof-text three columns apart is a fact about this recension worth having |

### 2.2 Divergences recorded WITHOUT a marker, and why

Order, orthography, particle, inflection or truncation only — no lexeme moved, so Pattern 14's
"changes the sense" test is not met. Listed because the divergence list is the deliverable.

- **1117B, Rom 8:20** — Migne *Vanitati subjecta est creatura, non volens*; Vulg *Vanitati enim
  creatura subjecta est non volens*. Word order + *enim* dropped.
- **1117C, Eccl 1:6** — *In circumitu* for *in circuitu*. An attested spelling of *circumitus*;
  Pattern 9, not a defect.
- **1117D–1118A, I Cor 13** — *Videmus enim nunc per speculum in aenigmate et ex parte, donec
  veniat quod perfectum est*. This is a **conflation** of 13:12 (*Videmus nunc*), 13:9 (*ex
  parte*) and 13:10 (*cum autem venerit quod perfectum est*), not a divergent text of one verse.
  ⛔ **I declined a `[var:]` deliberately**: Pattern 14 compares a citation to its verse, and a
  marker naming one of three verses would misdescribe what Migne did. The same conflation
  recurs at 1120D as *Quoniam nunc videmus per speculum in aenigmate*, with *Quoniam* added.
- **1119C, Eccl 2:13** — *Et vidi quia tantum* for *Et vidi quod tantum*. Conjunction only.
- **1121A, Eccl 3:13** — *Omnis homo qui comedit et bibit* for *omnis enim homo*.
- **1122B, Eccl 5:17** — *Hoc itaque mihi visum est bonum* for *Hoc itaque visum est mihi bonum*.
- **1122D, Matt 5:3** — *coelorum* for *caelorum*. Orthography (Corpus Corporum expands
  ligatures the same way the flat Vulgate does, so this is a real spelling difference and
  a trivial one).
- **1123C, Gal 5:7** — *quis vos impedivit non obedire veritati?* for *quis vos impedivit
  veritati non obedire?* **Order only, and I checked the negation: `non` sits on `obedire` in
  both, and my English puts it there.**
- **1123C, Mal 1:2–3** — *Jacob dilexi, Esau odio habui* for *dilexi Jacob, Esau autem odio
  habui*. Order + *autem* dropped; this is the Rom 9:13 form.
- **1123B, Prov 27:6** — the gloss prose *Meliora sunt amici vulnera, quam fraudulenta inimici
  oscula* against *Meliora sunt vulnera diligentis quam fraudulenta oscula odientis*. **Not
  marked, and the reason is typographic: Migne sets this as plain gloss prose, not as a
  quotation**, and marking an unquoted allusion would fire `[var:]` on every echo in the book.
  It is recorded here instead. My English says "the wounds of a friend", not Douay's "of him
  that loveth" — the conformation was live and was refused.
- **1123B, Luke 12:47** — the tail *vapulabit multis plagis* against *vapulabit multis*.
  *plagis* added.
- **1125A, Col 2:3** — *in quo omnes thesauri sapientiae et scientiae sunt absconditi* for *in
  quo sunt omnes thesauri…absconditi*. Order only.
- **1124D, Eccl 9:12** — *Sicut pisces capientur* for *sicut pisces capiuntur hamo*. Future for
  present, *hamo* dropped by the truncation.
- **1125C, Eccl 11:2** — *Da partes septem* for *Da partem septem*. Number of the noun only, and
  the gloss (*Vetus Testamentum … necnon et octo, quod est novum*) turns on the numbers, not on
  the noun.
- **1126A, Eccl 12:2** — *Antequam tenebrescant sol et lumen, et stellae et luna* for *antequam
  tenebrescat sol, et lumen, et luna, et stellae*. Plural verb, and *stellae*/*luna* in the
  reverse order. Nothing lexical moved.
- **1120B, Jerem 1:10** — the gloss reports the commission in indirect discourse (*ut ante
  eradicaret et suffoderet et perderet, et postea aedificaret atque plantaret*) against the
  Vulgate's second-person imperatival *ut evellas, et destruas, et disperdas, et dissipes, et
  aedifices, et plantes*. **A report, not a quotation** — not marked, and rendered as reported.

### 2.3 ⭐ THE VERIFIED ZEROS — lemmata collated and found to agree EXACTLY

These are the ones the scripture-conformation hunt (§3) was run against and cleared. Naming
them is the point: it is the only way to tell this collation from a list of hunches.

**Exact against the Clementine, word for word** (allowing only Migne's truncation of a verse he
is glossing, which is his lemma practice and not a divergence):

- **Psalms:** Ps 18:5 *In omnem terram exivit sonus eorum: et in fines orbis terrae verba eorum*
  (1117A — Migne's colon for the Vulgate comma is his punctuation, and rides) · Ps 36:4
  *Delectare in Domino, et dabit tibi petitiones cordis tui* (1119C) · Ps 35:9 *Torrente
  voluptatis tuae potabis eos* (1119C) · Ps 33:17 *Vultus autem Domini super facientes mala*
  (1121A) · Ps 74:3 *Cum accepero tempus, ego justitias judicabo* (1122B) · Ps 24:10 *Universae
  viae Domini misericordia et veritas* (1123C) · Ps 68:30 *Ego sum pauper et dolens* (1125A).
- **Gospels and Paul:** John 5:17 *Pater meus usque modo operatur, et ego operor* (1118B) ·
  John 15:5 *Sine me nihil potestis facere* (1124D) · Matt 5:3 *Beati pauperes spiritu, quoniam
  ipsorum est regnum coelorum* (1122D, orthography apart) · I Cor 1:19 *Perdam sapientiam
  sapientium* (1122B).
- **Ecclesiastes itself, all exact:** 1:1 *Verba Ecclesiastae* · 1:2 *Vanitas vanitatum* and
  *Vanitas vanitatum, et omnia vanitas* · 1:3 *Quid habet amplius homo* · 1:4 *Generatio
  praeterit* · 1:5 *Oritur sol et occidit* · 1:7 *Omnia flumina intrant in mare* · 1:8 *Cunctae
  res difficiles* · 1:9 *Quid est quod* · 1:10 *Nec valet* and *Jam enim praecessit* · 1:11 *Non
  est priorum* · 1:13 *Et proposui in animo meo* and *Hanc occupationem* · 1:14 *Vidi* · 1:15
  *Perversi* · 2:2 *Risum reputavi errorem* · 2:3 *Cogitavi in corde* · 2:4 *Plantavi vineas* ·
  2:6 *Et exstruxi mihi piscinas* · 2:7 *Possedi servos* and *Armenta quoque et magnos* · 2:8
  *Substantias regum*, *Feci mihi cantores*, *Cantores et cantatrices*, *Delicias filiorum
  hominum* · 2:9 *Qui ante me fuerunt in Jerusalem* and *Perseveravit* · 2:10 *Et omnia quae* ·
  2:11 *Sub sole* · 2:18 *Rursus detestatus* and *Habiturus* · 2:21 *Nam cum alius* · 2:24
  *Nonne melius* · 2:26 *Homini bono* · 3:1 *Omnia tempus habent* · 3:2 *Tempus plantandi* · 3:3
  *Tempus destruendi* · 3:4 *Tempus plangendi* · 3:5 *Tempus spargendi lapides* and *Tempus
  amplexandi* · 3:7 *Tempus tacendi et tempus* and *Tempus loquendi* · 3:8 *Tempus dilectionis*
  and *Tempus belli* · 3:10 *Vidi afflictionem quam dedit* · 3:12 *Et cognovi* · 3:14 *Didici* ·
  3:16 *Vidi sub sole* · 3:17 *Dixi in corde meo* · 3:21 *Quis novit* and *Deorsum* · 3:22 *Et
  deprehendi* · 4:1 *Verti me ad alia* · 4:2 *Et laudavi* · 4:3 *Et feliciorem* · 4:9 *Melius
  est* · 4:13 *Melior est puer* · 5:2 *Multas* · 5:4 *Multoque* · 5:5 *Ne dederis os tuum* and
  *Coram angelo* · 5:6 *Ubi multa sunt* · 5:7 *Si videris calumnias* and *videris calumnias
  egenorum* · 5:8 *Universae terrae* · 5:11 *Dulcis est somnus* · 5:12 *Est et alia infirmitas*
  · 6:1 *Est et aliud malum* · 6:2 *Vir cui dedit Deus divitias* · 6:3 *Sepultura* · 6:7 *Omnis
  labor* and *Anima ejus non implebitur* · 6:10 *Qui futurus est* · 6:11 *Verba sunt* · 7:2
  *Melius est nomen bonum* and *Et dies* · 7:4 *Melior est ira* · 7:6 *Melius est a sapiente* ·
  7:9 *Melior est finis* and *Arrogante* · 7:11 *Quid putas?* · 7:14 *Considera opera Dei* ·
  7:15 *Malam diem* and *non inveniat* · 7:19 *Nihil negligit* · 7:20 *Decem principes* · 7:22
  *Sed et cunctis* · 7:27 *Venatorum* · 7:28 *Ecce hoc* and *Ut invenirem rationem* · 7:29
  *Virum* · 7:30 *Solummodo hoc*, *Solummodo*, *Quis talis ut sapiens* · 8:2 *Ego os regis
  observo* · 8:4 *Nec dicere ei quisquam potest* · 8:10 *Vidi impios sepultos* · 8:14 *Sunt
  justi quibus mala proveniunt* · 9:1 *Sunt justi* · 9:4 *Melior est canis* · 9:5 *Mortui vero*
  · 9:10 *Erunt* · 9:11 *Bellum* and *Divitias* · 9:15 *Vir pauper* and *Per sapientiam suam* ·
  9:17 *Verba sapientium* and *Inter stultos* · 10:4 *Locum* · 10:8 *Qui fodit* · 10:11 *Si
  mordeat* · 10:19 *Pecuniae obediunt omnia* · 10:20 *In cogitatione tua* · 11:1 *Mitte panem* ·
  11:2 *necnon et octo* · 11:3 *Si ceciderit lignum ad austrum, aut ad aquilonem* · 11:4 *Qui
  observat ventum, non seminat* and *Qui observat ventum* · 11:5 *Quomodo* · 11:6 *Mane semina
  semen tuum* · 11:9 *Laetare ergo juvenis* (Migne drops the Vulgate's comma after *ergo*;
  punctuation only) · 12:1 *Memento Creatoris tui* · 12:4 *Et claudent ostia in platea* and *Et
  consurgent* · 12:5 *Dissipabitur capparis* · 12:6 *Antequam rumpatur funiculus* · 12:7 *Et
  revertatur* · 12:8 *Vanitas vanitatum* (both occurrences) · 12:11 *Verba sapientium* · 12:13
  *Finem loquendi* and *Deum time*.

**Not in the Clementine at all, and correctly so** — these are Jerome's own words inside the
abridged extracts, not scripture lemmata: *Estne verbum* (1118B, his rendering of Eccl 1:10),
*Et quidem possessio armenti* (1119B), *Omnia enim tempore suo requirentur* (1121B),
*vapulabit multis plagis* (1121D, Luke 12:47 with an addition), *anian* / *distensio* /
*Routh* (1118C–D, transliterated Hebrew and its Latin gloss), and the Greek περισπασμὸν
(1118C), which is carried verbatim.

---

## §3 · THE SCRIPTURE-CONFORMATION HUNT — this book's characteristic risk

The brief named this book the highest-risk in the batch because its verses are the most familiar
in English of any Glossa book yet done. **Four sites were live and all four were refused.** Each
is named with what the familiar English would have given.

1. **1117C *Vadit ad austrum.*** AV/Douay: "He goeth toward the south … turneth about unto the
   north". The Clementine reads *gyrat per meridiem*. **Migne prints neither**, and his verb is
   *vadit*. Rendered "It goeth to the south", marked `[var:]`. ⚑ On the pronoun, see §4.1.
2. **1117D *Terra es, et in terram ibis.*** Every English Bible has "dust". Rendered "Earth thou
   art, and into earth thou shalt go", marked `[var:]` — and the gloss's own argument
   (*humanum genus … quod in terram, unde sumptum est redit*) is built on *terra*, so the
   conformation would have taken the keyword out of its own proof-text. This is 7914 @1079C
   exactly.
3. **1123C *Dies illa dies irae.*** The received order is fixed by the sequence and by every
   English rendering. Migne prints it reversed. Rendered "That day is a day of wrath", marked.
4. **1125B *ut epulentur bibentes.*** The Vulgate and every English have "that the living may
   feast". Migne prints *bibentes*. Rendered "that they who drink may feast", marked.

Two further sites where the *sense* rather than a word was at risk:

5. **1122B *Est et alia infirmitas.*** Douay gives Eccl 5:12 as "another grievous evil", which is
   the phrase that arrives first. Migne's noun is *infirmitas*. **Rendered "another infirmity"**,
   which also keeps it distinguishable from *Est et aliud malum* at 1122C, where the noun really
   is *malum* and the English really is "evil". The two lemmata are five lines apart and the
   familiar English would have collapsed them into one.
6. **1124D VERS. 10 *Erunt.*** ⚠ **The polarity trap of this book.** Eccl 9:10 in the Vulgate is
   *quia nec opus, nec ratio, nec sapientia, nec scientia erunt apud inferos* — four negatives.
   **Migne lemmatizes the bare affirmative *Erunt* and glosses it affirmatively**: *Id est,
   valebunt tibi post mortem*. Rendered affirmatively, exactly as printed. A reader who
   remembers the verse will want to restore a negative here; there is none on the plate, and
   supplying one would be the 11536 defect precisely.

### 3.1 · 1118D *Erroresque et stulti* — `[var:]` TAKEN, `[cj:]` WEIGHED AND REJECTED

Migne's lemma for Eccl 1:17 reads *Erroresque et stulti.* The Clementine reads *erroresque et
stultitiam*, and the gloss immediately below is about *stultitia* (*Prima sapientia est stultitia
caruisse*), which is structural evidence for the Vulgate noun.

**Both markers were available and the choice matters, so it is stated.** `[cj: *stulti*; read
*stultitiam*]` was drafted and **rejected**: `[cj:]` asserts that the plate is in error and that
our conjecture supplies what he meant, whereas *stulti* is a perfectly good Latin form and a
lemma differing from the Clementine by an inflection is, in a recension full of such
divergences (§2.1 lists fourteen more), at least as likely a variant as a compositor's slip.
`[var:]` states both readings and takes no position on cause, which is what Pattern 14 asks and
what Pattern 18 does not. **The English renders *stulti* — "And errors and the foolish" — and
the Vulgate noun stands beside it in the marker.**

⚠ **What I did NOT do: treat *stulti* as a mid-word truncation of *stultitiam*.** Migne truncates
lemmata constantly in this work (*Nec valet*, *Et omnia quae*, *Sed et cunctis*) and **always at
a word boundary**; no other lemma in these 191 spans breaks inside a word. That is the evidence
against the truncation reading.

### 3.2 · 1122A *Ne temere, Deus* — Migne's lemma joins two SEPARATED words of one verse

Eccl 5:1 is *Ne temere quid loquaris, neque cor tuum sit velox … Deus enim in caelo, et tu super
terram*. **Migne's lemma is *Ne temere, Deus.*** — the opening two words and a word from the far
end of the verse, joined by his comma. His gloss addresses both halves (*Quia omnia audit et
videt … quamvis ipse in coelo, et tu in terra*), which is what shows the lemma is deliberate and
not a broken run.

**Rendered as printed: "Be not rash, God."** No ellipsis was inserted and neither half was
completed. Completing *Ne temere* would have required supplying *quid loquaris*, and the
Esther rule forbids a completion that moves a negative: *ne* governs *loquaris*, so any
completion relocates it. **The stump wins, exactly as at Esther 0741C.**

### 3.3 · Where a fragment WAS completed, and the evidence for each

Completed, because the supply moves no negative and the gloss below names the supplied word:

- **1122A *Multas* → "Many cares"** (Eccl 5:2 *Multas curas sequuntur somnia*). The gloss is
  about *qui multa cogitat, ipsa frequenter somniat* — cares and dreams.
- **1122A *Ubi multa sunt* → "Where there are many dreams"** (5:6 *Ubi multa sunt somnia*). The
  gloss says *quia haec vita est quasi somnia*. Migne's own next word is the evidence.
- **1119B *Armenta quoque et magnos* → "Herds also and great flocks of sheep"** (2:7 *magnos
  ovium greges*). "Great" alone is not English.
- **1123A *Melius est a sapiente* → "It is better to be reproved by a wise man"** (7:6 *a
  sapiente corripi*). The gloss's *Meliora sunt amici vulnera* is a reproof.
- **1118B *Nec valet* → "Nor is any man able"** (1:10 *nec valet quisquam dicere*). *quisquam*
  supplied; the negative stays on *valet* and does not move.
- **1118C *Non est priorum* → "There is no remembrance of former things"** (1:11 *Non est
  priorum memoria*). *memoria* supplied; **the negative stays on *est***.
- **1122A *Multoque* → "And much better"** (5:4 *multoque melius est non vovere*). "Better"
  supplied; **the verse's own *non vovere* was NOT imported**, which is the line the Esther rule
  draws.

**Left as a stump, deliberately: 1119C *Et vidi quia tantum* → "And I saw that so far."**
Eccl 2:13 continues *praecederet sapientia stultitiam*. Completing it would put three Vulgate
words into an italic lemma that Migne does not print — the 7a″ conformation, in its purest form —
and **the gloss below turns on none of them** (it is about the wise man as light and the fool as
darkness, and about their common death). The stump is awkward English and it is the honest
reading. The Latin stands opposite.

### 3.4 · 1119A *Dixi ergo* — `[var:]`, and why not `[cj:]`

Eccl 2:1 is *Dixi ego in corde meo*. Migne prints *Dixi ergo*, one letter from *ego*, and
*ergo* is a perfectly good word that construes ("I said therefore"). This is Pattern 18's exact
shape and `[cj:]` was considered. **Rejected, and on the ground that the faithful English does
NOT mislead here**: the gloss that follows (*Postquam in multitudine sapientiae … tunc non
vanitas erit, sed veritas*) is a *postquam* clause, so "I said therefore" is precisely the
connective the gloss wants, and nothing in the exposition rests on *in corde meo*. `[cj:]` fires
where the English asserts something the author did not; here it does not. `[var:]` records the
divergence and leaves the reader both readings.

---

## §4 · THE UNEXPRESSED SUBJECT — every supply, with its evidence

The dominant defect class. Every "he"/"she"/"it"/"they" this English prints that the Latin does
not is listed, with what decided it. Where nothing decided it, that is said.

### 4.1 · Supplies with evidence

- **1117C *Vadit ad austrum* → "It goeth to the south."** Subject is **the sun**, from the lemma
  immediately above (*Oritur sol et occidit*, 1:5) and from the gloss on the next lemma (*Ipsum
  solem spiritum vocat*). ⚑ **"It", not Douay's "He"** — the pronoun is an English choice and
  taking Douay's would have been half a conformation. Likewise "and so it returns to the east"
  in the same tail.
- **1119C *stetit* / *Perseveravit* → "It stood" / "It continued."** Subject is **wisdom**, named
  in the gloss's own next clause (*ei in carne posito sapientia permansit*) and in Eccl 2:9
  (*sapientia quoque perseveravit mecum*).
- **1120C *magis placuit Deo* → "he pleased God the more."** Subject is **David**, named two
  words earlier (*quam David ante arcam testamenti*).
- **1119C *reprobat* → "he reproves the prudence of the prudent."** The tail is quoting I Cor
  1:19 / Isa 29:14, where the subject is **God** (*prudentiam prudentium reprobabo*). Named
  rather than inferred from the sentence.
- **1122D *cupit discere* → "he desires to learn."** Subject is the *homo … rationalis* of the
  preceding gloss on 6:7, four words up.
- **1124D *aufert* → "who carries away nothing with him."** The relative pronoun *qui* has
  *potens iniquus* as its antecedent, immediately before it.

### 4.2 · Supplies REFUSED — the tail is cut and the antecedent is off the page

The `*usque ad*` formula removes words, and where it removed the subject I did not invent one.
**In each case the English carries the verb without a subject pronoun, as a fragment, because the
Latin is a fragment.**

- **1119A *et serotinam exspectat de coelo pluviam*** → "and awaits the late rain from heaven."
  Candidates (*terra*, *silva*, *agricola*) all construe and nothing on the page chooses.
- **1120C *et ad poenitentiam vocat*** → "and calls to penance." Same.
- **1117C *alia frigus consumeret*** → "cold would consume the others." ⚠ **A call I am making
  and flagging.** *frigus* is nominative or accusative and *alia* is nominative feminine
  singular or neuter plural, so the clause is formally reversible. I take *frigus* as subject
  and *alia* as accusative neuter plural, because the alternative ("the other would consume
  cold") is not a thing that can be said of a climate, and because Jerome's argument is that the
  sun's circuit keeps one region from burning and another from freezing. **The rival reading is
  named here because a blind reader will stop on this clause.**
- **1124D *Quidam asserunt etiam post mortem crescere*** → "Certain men assert that they increase
  even after death." The accusative subject of *crescere* is not printed; the tail's own
  *creaturas rationales* is the only candidate, and it is inside the resumption, not before it.

### 4.3 · 1119D *quia per omnia desideria rapiebat* — a supplied object, flagged

"because it hurried [me] through all desires." The clause sits in first-person narration
(*putabamque hunc esse fructum laborum meorum*), the verb is third-person singular, and there is
**no printed subject and no printed object**. I take *studio* (from the *quanto studio ista
crescebant* two clauses back) as the subject and bracket the object. **The rival is that Migne's
plate has *rapiebat* for *rapiebar*** — first-person passive, "I was hurried through all
desires" — which construes the sentence effortlessly and is the reading the argument wants.
⛔ **I did NOT adopt it, and did not mark it**: Pattern 7 renders the printed word, and a
one-letter conjecture on a verb whose printed form is grammatical is not a `[cj:]` case (the
faithful English does not assert anything false — it just leaves the agent vague). Named here so
a plate reader can settle it in one glance.

---

## §5 · THE BOOK'S OWN CRUCES

### 5.1 · 1116D–1117A *Salomomonis* — `[sic: *Salomomonis*]`, and a PLATE READ IS WANTED

*Tradunt Hebraei hunc librum **Salomomonis** esse agentis poenitentiam.* A doubled syllable;
not a word.

**Corpus-frequency check, which is the right way to raise this** (per the brief's test 4):
across all of `src/latin/` there are **311 `Salomonis`, 312 `Salomon`, 90 `Salomonem`, 17
`Salomoni`, 17 `Salomone` — and exactly ONE `Salomomonis`, here.** So the form is unique to this
plate or to this transcription of it.

⚠ **Which of the two it is cannot be told from the Latin, and that is the whole point of test 4.**
Migne may have set *Salomomonis*, or Corpus Corporum may have doubled a syllable the way it
metathesized *Nephthali* on 8970 @0725C. **One look at PL 113 col. 1116D settles it**, and the
answer changes what we do: if the plate reads *Salomonis*, this is a `data/tei-patches/8946.json`
entry and the `[sic:]` comes out; if it reads *Salomomonis*, the marker is right and stays.
**Filed as the single thing in this work I most want a plate reader to open.**

⚑ **The `[sic:]` does not swallow the word.** The English reads *"this book is Solomon's [sic:
*Salomomonis*], as of one doing penance"* — strip the marker and the sentence still names
Solomon, still has its verb, and still has its object. Test 1 run on all four chunks: **one
marker, no stranded article or preposition anywhere, no doubled punctuation.**

### 5.2 · 1119A · the column anchor falls INSIDE a word: *Prima sa [1119A] pientia*

Migne breaks *sapientia* across the column, and our TEI puts the anchor at the break. **English
cannot split "wisdom" at the same point and must not pretend to**, so the anchor sits at the
nearest true word boundary inside the same construction: **"The first [1119A] wisdom is to have
been without folly."** Precedent: 7871 @0992C, where *Cultura assidua ad [0992C] hibita est*
became "Constant cultivation was [0992C] applied" — the anchor moves to the English word
boundary, the word is not broken. Not a defect; recorded so nobody reads the English anchor as
displaced.

**Every other anchor was checked against the word it stands beside, not merely for presence**
(test 2b). Three sit mid-construction in the Latin and were split to match: *ostendens vanitati
[1117B] subjectum* → "subject to vanity, [1117B] that is"; *Conditor [1117D] aquarum* → "the
Maker [1117D] of those waters"; *nihil [1118B] novum* → "nothing [1118B] new"; *seminandum
[1125D] est* → "one must [1125D] sow"; *Quasi, [1124C] non debes* → "As if, [1124C] thou oughtest
not". The anchor inside an italic span at 1121D (*usque ad [1121D] finem cap.*) is reproduced
inside the italic span.

### 5.3 · 1124D *Bellum. Victorum vel etiam imitatores belli* — will not construe. RENDERED AS PRINTED.

The gloss on Eccl 9:11's *nec fortium bellum* reads *Victorum vel etiam imitatores belli*: a
genitive plural (*Victorum*) coordinated by *vel etiam* with a nominative/accusative plural
(*imitatores*). The two cannot stand in apposition to each other, and neither agrees with the
lemma.

**Rendered literally: "Of the victors, or also the imitators of war."** No case was silently
harmonized. ⛔ **No marker**, and the reason is the one Ruth stated at 0534A: nothing here is
broken type (both are real words in real forms), nothing is missing from the digitization, and
no marker in this corpus means "Migne prints words that will not construe together". The
obvious suspect is *Victores* for *Victorum*, which would give "the victors, or even the
imitators of war" — **deliberately not adopted**, because it is a conjecture and the
apparatus is not where the text gets repaired.

### 5.4 · 1123B *Verba adulantis magis insensata ad spinas* — rendered as printed

A second italic lemma inside the VERS. 6 gloss, and **it is not in the Clementine at all**:
Eccl 7:7 reads *quia sicut sonitus spinarum ardentium sub olla, sic risus stulti*. Migne's phrase
alludes to the thorns of that verse but is not a quotation of it, and it has no finite verb —
*moventia* (neuter plural, agreeing with *verba*) carries the predication.

**Rendered "The words of a flatterer, more senseless, unto thorns, that is, stirring the cares of
the world, which lead to the burnings of Gehenna."** The *ad spinas* is left as the bare
prepositional phrase the plate prints; no verb was supplied to govern it. Not marked as a
divergence, because it is not offered as a citation.

### 5.5 · 1120A *Nonne melius … quantum sufficit?* — Migne's question mark, kept

The only `?` in chunk 1 closes a resumption tail (*usque ad quantum sufficit?*), not a sentence
of Migne's own construction. **Kept exactly where he prints it.** Pattern 8b was NOT invoked:
this is a direct question in the tail, not an indirect one, so English takes the mark without
recasting. **No `?` was supplied anywhere in this work and none was deleted** — 0/1/3/0 in both
columns.

### 5.6 · The three heads that are not `CAPUT n.`

`B. HIERONYMI IN LIBRUM ECCLESIASTEN PROLOGUS.` → **THE PROLOGUE OF BLESSED JEROME ON THE BOOK OF
ECCLESIASTES.**, matching Esther's shipped `THE PROLOGUE OF BLESSED JEROME ON THE BOOK OF
ESTHER.` `CAPUT PRIMUM.` → `CHAPTER ONE.` (Ruth's form); `CAPUT II.`–`CAPUT XII.` keep the Roman
numeral. **The prologue head has no text under it at all** — only the note `[n: (Vide inter Opera
Hieronymi, tom. III.)]`, which is Migne's, and which rides verbatim. Not a hole in the
digitization; the prologue is represented in this recension by its reference alone, and the
first VERS. gloss carries the same reference again at 1115D.

### 5.7 · Notes: all 86 are CITATIONS, no `[nt:]`

Judged by content, not length, per Pattern 15. Every note in this work is an attribution siglum
or a scripture locator — `(HIER.)`, `(ID.)`, `(HIERON.)`, `(ALBINUS.)`, `(Psal. XVIII)`,
`(Exod. XXIV, XXXII)`, `(Vide inter Opera Hieronymi, tom. III.)`. **The longest, `(HIERON. in
Eccle., t. III.)`, is still a locator**, and the `(Vide inter …)` note is a cross-reference, not
a statement. **Zero prose notes; recorded as a checked zero, not a skip.**

⚑ Two notes print with a following period of Migne's own — `etc. [n: (ID.)].` at 1117C and
`etc. [n: (Matth. XIV)].` at 1121C. **Reproduced.** They are not our doubled punctuation.

⚑ **Migne's citation `(Matth. XIV)` at 1121C is wrong** — *Melius illi erat si natus non fuisset
homo ille* is Matt 26:24 (or Mark 14:21, which may be what the numeral garbles). **The note
rides verbatim** under the marker rule; the `[var:]` beside it names Matt 26:24 as the comparand,
so a reader is not left with the false locator alone.

### 5.8 · Plate apparatus: NOT READ, and that is stated rather than assumed

I did not read the plate for cols 1115–1126. **PL 113's "no foot-of-page conjecture apparatus"
finding now rests on fourteen pages across Ruth, Judith and Esther** (8968 §1.5, 8960 §1), and
those three books make it likely that this one is the same. ⛔ **It is a likelihood, not a
finding**, and importing it would be the "a rendering found in another BOOK is a hint, never an
authority" failure that 8960 §2.2 named. **`data/plate-notes/coverage.json` should not record
this work as checked on my say-so.** Two pages would close it, and §5.1's *Salomomonis* wants a
reader on the same visit.

---

## §6 · THE FOUR TESTS, RUN ON MY OWN FILES

1. **`[sic:]` does not swallow its word.** One marker; markers stripped mechanically from all four
   chunks and the residue scanned for a stranded article or preposition sitting on punctuation
   and for doubled marks. **Clean.** The only two hits were Migne's own `etc. [n: …].` periods
   (§5.7) and a legitimate "and, as though they had not been" — both verified against the Latin.
2. **Negation attachment, host by host.** Every printed negative was traced to the single Latin
   word it attaches to, and the host was proved from the sentence's structure, not from what
   reads well. The **2a trigger population** (a negative resting on a verb with a quantifier,
   correlative or pivot nearby) was isolated and run separately. The three
   that could have gone wrong:
   - **1120C *Omnes artes absque doctore non discimus, sola haec …*** The *sola haec* pivot fixes
     the scope as universal, so the English reads "We do not learn **any of the arts** without a
     teacher" — not "we do not learn all arts", which is the reading that would let one art
     through and is exactly what the *sola* clause is about to concede.
   - **1121C *Melius est itaque **omnino** non esse quam male vivere.*** *omnino* stands
     immediately before *non esse* and the comparison is between non-being and evil life, so the
     English is "better **not to be at all** than to live ill" — **not** "it is altogether better
     not to be", which would put the adverb on the comparison. This is the 8990 @0614B shape.
   - **1122D *et **non** ex praescientia Dei tollitur liberum arbitrium, **sed** causae ante
     praecedunt.*** The *sed* clause names the causes, so the negative governs the agent phrase:
     "free will is **not** taken away **by the foreknowledge of God**, but causes go before."
     This is the ratified 8960 @0740B model, not the 8960 @0734B failure.
   Also checked and clean: five `non … sed` correlatives (1117B, 1118A, 1118B, 1119C, 1125A ×2),
   two `nec … sed` (1125A), *nulla argutione / nulla calumnia* (1123B), *nullam memoriam*
   (1122C), *nisi solus Christus* (1124A), *nec … quidem dignum* (1120A).
   ⚑ **One rendering was checked twice on purpose: 1125B *non vult confiteri* → "is unwilling to
   confess."** That is the 8987 @0624B shape in reverse, and it is safe here **because *non* is
   printed** — the negative is not being pressed into double duty from elsewhere.
3. **Punctuation by column band, never by total.** The eleven/eleven/eleven/nine anchors partition
   both twins identically; colons, semicolons, question marks, exclamation marks and guillemets
   were compared band by band. **First pass returned thirteen mismatched bands, all ours, all
   supplied marks** — twelve were the habit of rendering Migne's `Quasi,` as "As if:" with a
   colon he does not print, plus four semicolons for his commas. **All thirteen repaired; the
   check now returns ZERO mismatched bands in all four chunks.** ⚠ Where Migne DOES print the
   colon (*Ac si dicat:*, *quasi diceret:*, *Quasi dicat:*, *dicatur:*, *qui ait:*) the English
   keeps it. No comma→semicolon sweep was attempted: Migne prints nineteen semicolons of his own
   in this work, so Tobit's narrow exception does not apply here.
4. **The assertion read.** Each finished paragraph read back against the Latin asking only *does
   it assert what he asserts*. It produced §3 item 5 (*Est et alia infirmitas* — a smooth Douay phrase
   that had collapsed two distinct lemmata), §3 item 6 (*Erunt*, where the remembered verse is
   negative and the plate is not), and §4.3 (a clause that read smoothly in the passive and is
   printed active). **All three read well before they were checked**, which is the point of the
   test.

---

## §7 · WHAT A BLIND READER SHOULD OPEN FIRST

1. **1117C *alia frigus consumeret*** (§4.2) — a formally reversible clause where I chose, and
   said so.
2. **1119D *rapiebat*** (§4.3) — a supplied object and a subject taken from two clauses back;
   the rival (*rapiebar*) is named and was refused.
3. **1124D *Victorum vel etiam imitatores belli*** (§5.3) — will not construe; rendered as
   printed with no marker, and the reason is given.
4. **1116D *Salomomonis*** (§5.1) — the one place a plate read changes what ships.
5. **1118D *Erroresque et stulti*** (§3.1) — where `[cj:]` was drafted and rejected.
6. **1122A *Ne temere, Deus*** (§3.2) — a lemma joining two separated words, rendered as a stump.

---

## §Adjudication — blind polarity read (2026-08-19)

Blind reader, fenced from this file, all four chunks read in full: **9 sites, 3 repaired.**
⭐⭐ **The two zeros are the headline and they are measured, not assumed: NO polarity defect in
either direction, and NO silent scripture-repair in the running gloss** — in the book that was
flagged before launch as the batch's highest conformation risk. The reader checked every printed
negative individually (twenty named in its report) and confirmed the two sharpest plate-vs-Vulgate
divergences were resolved **for Migne**: *ut epulentur **bibentes*** (1125C) rendered "that they who
drink may feast" with the Vulgate's *viventes* in `[var:]`, and *Impii non dimidiabunt dies suos*
(1123C) rendered "The wicked" with *Viri sanguinum et dolosi* in `[var:]`. Ruth's four conformations
were on exactly this ground; this book has none.

1. **REPAIRED · 1124B · *Nunc quae bona eis dederit … enumerat*** — now "he enumerates what good
   things **[God]** gave them." *dederit* is subjunctive with an unexpressed subject, and that
   subject is **God**, established by *cum a Deo homines sint boni facti* in the previous clause,
   while *enumerat*'s subject is Solomon. Giving both verbs one bare "he" made Solomon the giver of
   wisdom and reason. **Nothing was missing and the sentence parsed** — the invisible class, and the
   dominant one corpus-wide.
2. **REPAIRED · 1123B and 1123C · two `[var:]` added** — *Qui perseveraverit salvus erit* against
   Matt. 24:13, and *Jacob dilexi, Esau odio habui* against Mal. 1:2–3 (word order reversed, *autem*
   absent). Both were unmarked while **the identical Matt. 24:13 divergence carries a `[var:]` three
   columns later at 1126A**. ⚑ The brief's own warning, confirmed a second time: *using the apparatus
   correctly two columns away is not evidence it was used where it was needed.*
3. **DECLINED · the six-site lemma-completion cluster** (1118C *Non est priorum.* · 1118B *Nec
   valet,* · 1121D *Multas.* · 1122A *Multoque.* · 1122A *Ubi multa sunt.* · 1123A *Melius est a
   sapiente.*). Convention 3 requires a fragmentary lemma to be rendered as the phrase it stands for,
   and the settled boundary is that expansion is never the defect — **conformation is**. See the
   batch ruling in 8998's cruces §Adjudication.
   ⚑ **The reader's control set does not control:** it contrasted these with *Sepultura.* → "Burial.",
   *Virum.* → "A man.", *Bellum.* → "War.". Those are **complete single-word lemmas with nothing
   elided**; *Multas.* is an adjective whose noun is missing. Two different classes, so the
   "inconsistency" is an artefact of the comparison.

⚑ Reader's flagged near-miss, recorded and NOT acted on: **1120C *Saulis filiae displicens*** —
*displicens* is common-gender, so the subject could be *saltatio* ("that dance … pleased God the
more") rather than David. The English chose David, which the preceding nominative and the 2 Sam. 6
sense support. Genuinely ambiguous; named here as the one place a second reader should look.

⬜ Unchanged and still the batch's highest-value plate request: **col. 1116D, *Salomomonis*** — 311
*Salomonis* in `src/latin/` against this single form. **Indistinguishable from a Corpus Corporum
doubling without the plate**, and if the plate reads *Salomonis* the `[sic:]` comes out and a
`data/tei-patches/8946.json` entry goes in. PL 113's "no foot-of-page apparatus" finding rests on a
19-page sample across four other books and was correctly NOT imported onto these columns.

---

## §Plate read, 2026-08-19 — the `[sic:]` is WITHDRAWN

**Col. 1116D, *Salomomonis* — settled at the plate, and it was OURS, not Migne's.**
p. 563 of `patrologiaecurs04migngoog` (cols 1115/1116) read at 300 dpi and again on a 3× crop:
Migne prints the ordinary **`Salomonis`**, hyphenated across the last two lines of col. 1116 —
`(ALBINUS.) Tradunt Hebraei hunc librum Salomo-` / `nis esse agentis poenitentiam`.
**Corpus Corporum rejoined the broken word and duplicated the syllable in front of the hyphen.**
⚑ Corroborated from the source side as well: the TEI keeps a newline immediately AFTER the word,
exactly where Migne's line break falls — the transcription preserved the break and doubled the *mo*.

**Actions taken:** `data/tei-patches/8946.json` restores `Salomonis`; the work was re-chunked; the
`[sic: *Salomomonis*]` marker has been **removed from the English**, which now reads simply
"this book is Solomon's". The page has been rebuilt and re-indexed.

⭐ **This is a new sub-class of digitization corruption for the register: the LINE-BREAK REJOIN.**
It is not the normalization class (8948 *convivum*, 8990 *concilio*), where the digitization silently
corrected a form Migne printed. Here the digitization manufactured a word that exists nowhere.
⚑ **The detector that found it was corpus frequency** — 311 `Salomonis` against a single doubled
form — and the translator was right to raise it **as a candidate and not a finding**, and right that
only the plate could decide. Had it shipped unexamined, a live page would have asserted a defect in
Migne's plate that Migne never committed.
⚑ **And the general rule it confirms:** where our text has a form that is a corpus-wide hapax,
suspect OUR files first. Same shape as 8970's *Nephtlali* and 11535's *angüstiae*.

**Plate apparatus on that page: checked zero** — no numbered `Forte` notes at the foot or mid-page
at the Proverbia→Ecclesiastes division. Recorded `coverage: "spot"`.
