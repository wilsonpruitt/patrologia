# *Glossa ordinaria*, **Liber I Esdrae** (PL 113, 0691D–0712D) — cruces and lemma collation

Translated 2026-08-23, one translator, 8 chunks (7,986 Latin words), on Opus. `verify-english.mjs`
clean: 8 chunks, columns, notes and sections aligned, no duplicate paragraphs (one `warn` only —
chunk 0000's ratio 1.60, discussed at §6).

**Apparatus fired: 9 `[var:]` · 1 `[cj:]` · 0 `[sic:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` ·
138 `[n:]` (exact parity with the Latin twins, verbatim, in order).**
Structure: PROLOGUS + CAPUT PRIMUM → CAPUT X, eleven heads, all present, all translated.
**Guillemets: zero in either language** (this book's lemmata are italic, as Ruth's are).
**Question marks: 3 in the Latin, 3 in the English**, band for band.
**Italic spans: 271 in the Latin, 272 in the English.** All 271 stand in the same places; the one
extra is the italic carry of *mala* at 0695B (§5), the single Latin word in this work with no
English rendering. Asterisks inside `[var:]` and `[cj:]` content are ours and are not spans.

Ruth (8968) §1 governs unchanged: `VERS. n.--` passes through verbatim, the lemma is Englished, a
fragmentary lemma is rendered as the phrase it stands for, the attribution sigla are ordinary
`[n: …]` notes with contents unanglicized and **Migne's own internal spacing reproduced character
for character** (`(BEDA ubi supra. )` with the space, and at 0708C `(BEDA ubi supra.)` **without**
it — both as printed). 8978 §6 / 8970 §1(b) govern the abridgment formula: `*usque ad*` →
`*as far as*`, in its own italic span, **no verb ever supplied to complete a resumption tail.**

---

## §1 · THE PROLOGUE HEAD WITH NO BODY — the two questions the launch brief named

Chunk 0000 opens with `## B. HIERONYMI IN ESDRAM ET NEHEMIAM PROLOGUS.`, then a single note
`[n: ( Vide tomo VIII operum. )]`, then `## CAPUT PRIMUM.` and the gloss. No prologue text.

### (a) Pattern 15 — the note stays `[n:]`. It is a locator, not a statement.

**The call: `[n: ( Vide tomo VIII operum. )]` is a citation and is NOT converted to `[nt:]`.**

Judged by content, per Pattern 15, not by length. The whole content after *Vide* is a
place-reference — a volume number in an edition (*tomo VIII operum*, i.e. Migne's Jerome). It
contains no finite verb making an assertion, no proposition, nothing an English reader loses by
meeting it in Latin. It is a *see-under*, the same speech-act as `(ID., ibid.)` or `(BEDA, ubi
supra. )`, and those are the paradigm `[n:]`.

⭐ **This is not my judgment alone: the corpus has already ruled it, three times, on three sibling
books of this same recension and volume, and I found the ruling rather than re-deriving it.**

| work | head | note | shipped as |
|---|---|---|---|
| **8948** Esther | `B. HIERONYMI IN LIBRUM ESTHER PROLOGUS.` | `( Vide inter opera B. Hieronymi, tom. VIII.)` | `[n:]` |
| **8960** Judith | `HIERONYMI IN LIBRUM JUDITH PROLOGUS.` | `( Vide inter opera beati Hieronymi, tom. VIII. )` | `[n:]` |
| **8946** Ecclesiastes | `B. HIERONYMI IN LIBRUM ECCLESIASTEN PROLOGUS.` | `(Vide inter Opera Hieronymi, tom. III.)` | `[n:]` |

8948's `cruces.md` §3 states the reason from an actual plate read, and its §3 of the guillemet
section contrasts the two cases inside one book: its opening *Vide* note stays `[n:]`, its closing
note at 0748C — editorial prose, a *statement* that the old copies carry no exposition past that
point — was converted to `[nt:]`. **Two notes four words apart, decided opposite ways by content.**
9005 (Baruch), the precedent the launch brief named, converted its note for the same reason and
said so explicitly: that note "names no place a reader can go", where 8948's "names a place
(*inter opera … tom. VIII*)". Mine names one.

**The rival reading, and why it lost.** *Vide* is a second-person imperative addressed to the
reader, and one could argue that any note which *tells the reader to do something* is editorial
prose. It lost on two counts. First, Pattern 15's line is locator vs. statement, not indicative vs.
imperative — mood is not the test, and taking it as the test would convert every *cf.*, *vide* and
*ubi supra* in the corpus. Second, and decisively, the corpus has three shipped instances of this
exact note-type in this exact position in this exact recension, all `[n:]`, one of them
plate-verified; ruling against them here would make I Esdrae the only book of the four to translate
its cross-reference, for no reason a reader could see.

### (b) Absent from the PLATE, not from our digitization. **No `[ed:]`.**

**I believe the prologue's text is absent from Migne's plate, and the evidence is on the page.** The
note is not a stray: it is doing the work of a *see-under*. Migne prints the head so the book's
structure is complete, and then sends the reader to Jerome's own works rather than reprinting the
prologue. A digitization that lost a paragraph would not have invented a redirection notice
pointing at where the lost paragraph is printed instead.

**8948 settles it as a class from the plate**, and I am quoting its finding rather than guessing at
mine: p. 375 of that volume prints, in order, the rule · `LIBER ESTHER.` · the Jerome prologue head
· `(Vide inter opera B. Hieronymi, tom. VIII.)` in parentheses beneath it · a short rule ·
`CAPUT PRIMUM.` — **and only then text.** That is the same layout our chunk 0000 carries, in the
same volume of PL, for the same series of prologue heads. 8948 logged it as **"no lacuna is logged,
none exists."**

⛔ So **`[ed: …]` is NOT marked**, and Pattern 13's own boundary is why: `[ed:]` is for *demonstrated
source loss*, and nothing here demonstrates loss. I can show that the plate carries a redirection;
I cannot show that it carries a prologue.

⚑ **What would settle it beyond the parallel, and it is cheap:** a read of cols **0691–0692** (PL
113), which is one page image. If the plate prints the two heads with only the parenthetical note
between them, the record is closed with a positive rather than an analogy. **I do not need it to
ship — nothing in the English or the apparatus turns on it — but it is worth having**, and per brief
§4 a checked negative is worth recording precisely because three of that class came back positive.
I am asking for it as corroboration, not as a blocker.

---

## §2 · THE FULL LEMMA COLLATION — all 271 spans, agreements included

Collated against `sources/vulgate/clementine-flat.txt`. **Migne's book is `Esr`; `Neh` is his
II Esdrae and no lemma in this work resolves there** — every verse lemma in all ten chapters keys to
Ezra, and I checked that rather than assuming it, because the prologue head names both books.

⚠ **The launch pre-scan's ✓ marks are substring hits and several are false comfort.** Two of this
work's nine `[var:]` sit on spans the pre-scan marked ✓: *Aedificemus vobis* matched because
*vobis* is a substring of *vobiscum*, and *Omnis multitudo quasi vir unus* matched because those
four words occur together at Esr 3:1 and 3:9 — **just not at Esr 2:64, which is the verse being
glossed.** That is exactly the trap the brief's header warned of, and it fired twice.

### 2.1 · DIVERGENT — marker fired (9 `[var:]`)

| col | Migne prints | Clementine | why marked |
|---|---|---|---|
| 0695A | *Omnis multitudo quasi **vir** unus* | Esr 2:64 *Omnis multitudo quasi unus* | a content word added to the lemma; and the pre-scan's ✓ came from Esr 3:1/3:9 |
| 0697A | *elevatio manuum **tuarum*** | Ps 140:2 *elevatio manuum **mearum*** | thy hands / my hands — the psalm's speaker changes |
| 0697D | *Canite **initio mensis** tuba* | Ps 80:4 *Buccinate **in neomenia** tuba* | ⭐ the argument's own hinge: the gloss has just said the Greeks call the Kalends *neomeniae*, and the proof-text Migne prints has *initio mensis* where the Vulgate has the very word *neomenia* |
| 0700C | *Aedificemus **vobis*** | Esr 4:2 *Aedificemus **vobiscum*** | build **for** you / build **with** you; the gloss turns on heretics seeking a share in building |
| 0700C | *Non est **nobis*** | Esr 4:3 *Non est **vobis et** nobis* | "it is not for us" against "it is not for you and for us" |
| 0704C | *misericordias Domini in aeternum **cantabunt*** | Ps 88:2 *…**cantabo*** | first person to third plural, and the gloss builds on the plural (*memorabunt*) |
| 0706C | *dictum est **antiquis**: Diliges **amicum** tuum, et odio **habetis** inimicum* | Mt 5:43 *dictum est: Diliges **proximum** tuum, et odio **habebis** inimicum* | three divergences in twelve words, one of them the object of the commandment (*amicum* is Lv 19:18's word, *proximum* Matthew's) |
| 0708A | *Quomodo poterit quisquam intrare in domum fortis…?* cited `(Marc. III.)` | Mc 3:27 *Nemo potest vasa fortis ingressus in domum diripere, nisi prius fortem alliget* | a wholly different sentence, and a question where Mark has a statement; the wording answers to Mt 12:29 |
| 0711C | *implorante **Deum** et flente* | Esr 10:1 *implorante **eo** et flente* | an object supplied where the Vulgate has the pronoun subject |

### 2.2 · DIVERGENT — logged, **no marker**, and the reason in each case

The bar I used: a `[var:]` is a public claim, so it is spent on divergences that are more than word
order, more than a connective, more than orthography, and more than a lemma's own clipping. Twenty-five
divergences failed that bar and are recorded here instead. **Every one of them is rendered as Migne
prints it in the English.**

- **0693A · 3 Jo 1:8** — Migne *Nos ergo debemus **hujusmodi suscipere*** / Vulg. *…**suscipere
  hujusmodi***. Word order only.
- **0695B · Ps 35:7** — Migne *Homines et jumenta salvabis **Domino*** / Vulg. *…salvabis,
  **Domine***. Dative for vocative. ⚠ **It turns on one letter, and `sources/vulgate/README.md`
  says a one-letter call should say so rather than trust this copy to that precision.** Rendered
  "thou wilt save **for the Lord**", which is what the printed case means.
- **0696B · Apc 2:5** — Migne *Memor esto unde excideris* / Vulg. *Memor esto **itaque** unde…*.
  A connective dropped at the head of a quotation.
- **0696D · Mt 28:10** — Migne *Ite, **nuntiate** fratribus meis* / Vulg. *ite, **nuntiare**
  fratribus meis*. The Clementine's own form is the odd one (infinitive for imperative); a
  `[var:]` here would read to a reader as if we were flagging a typo of ours.
- **0697A · Hbr 13:14** — Migne *Non habemus* / Vulg. *Non **enim** habemus*. Connective, head of
  quotation.
- **0697C · Esr 3:5** — Migne's lemma *In Kalendis, quam in universis,* etc. / Vulg. ***tam** in
  calendis quam in universis solemnitatibus*. **The clip strands the *quam*.** This is the
  abridgment cutting a lemma, not a text variant; rendered "*On the Kalends, as on all,* etc.",
  which is the correlative the fragment opens (Ruth §1.2). *Kalendis*/*calendis* is orthography and
  the gloss expounds the word at length in that spelling.
- **0698A · 1 Mcc 4:47** — Migne *secundum illud quod **prius fuit*** / Vulg. *…quod **fuit
  prius***. Word order only.
- **0698D · 1 Ptr 4:8** — Migne *mutuam in vobismetipsis **continuam charitatem** habentes* / Vulg.
  *mutuam in vobismetipsis **caritatem continuam** habentes*. Word order plus *charitas*/*caritas*.
- **0698D · Col 3:14** — Migne *Super omnia autem **habete charitatem*** / Vulg. *Super omnia autem
  **haec, caritatem habete***. Word order, and *haec* dropped. Nothing asserted differently.
- **0699A · Ps 28:5** — text agrees verbatim; **Migne's citation reads `(Psal. II)`**. Reproduced
  as printed. Citation repair belongs to `data/citation-corrections.json` at index time, never to
  the running text (Ruth §2, 0534C).
- **0701A · Mt 10:34** — text agrees verbatim; **Migne's citation reads `(Matth. XVI)`** for
  Matt. 10. Same treatment.
- **0702A · Ps 128:4** — Migne *Dominus justus **concidet** cervices peccatorum* / Vulg.
  *…**concidit**…*. Future for perfect. ⚠ One letter; see the Ps 35:7 entry. **Migne's citation
  reads `(Psal. XII.)`** for Ps 128. Rendered "will cut", as printed.
- **0702B · 1 Thes 4:15** — Migne *in adventu Domini* / Vulg. *in adventum Domini*. One letter,
  ablative for accusative, sense identical.
- **0702D · 3 Reg 7** — Migne quotes *Fecit atrium,* etc. citing `(III Reg. VII)`. **No verse of
  3 Rg 7 contains that phrase**; the nearest Clementine matches are Ex 38:9 *Fecit **et** atrium*
  and 2 Par 4:9 *Fecit **etiam** atrium sacerdotum*. A two-word catchword plus a citation
  misprint; rendered as printed, no marker, because I cannot say which verse he meant and a
  `[var:]` would have to name one.
- **0703A · Esr 6:8** — Migne *Sed a me praeceptum est **quod*** / Vulg. *Sed **et** a me
  praeceptum est **quid** oporteat fieri*. *et* dropped; *quod*/*quid* is one letter; the lemma is
  clipped at *quod* with an `etc.` anyway.
- **0703C · 1 Tim 2:1–2** — the densest cluster in the work and still below the bar: Migne
  *Obsecro **ergo primo** omnium fieri obsecrationes **et** orationes, postulationes
  **gratiarumque actiones** pro omnibus hominibus* / Vulg. *Obsecro **igitur primum** omnium fieri
  obsecrationes, orationes, postulationes, **gratiarum actiones**, pro omnibus hominibus*. Four
  differences, all connective, inflectional or punctuational, none of which changes what is
  asserted. Logged in full so a later reader can weigh it himself.
- **0706A · Esr 7:10** — Migne's lemma *Esdras **autem** paravit* / Vulg. *Esdras **enim**
  paravit*. **Declined deliberately**, following the Judith (8960) precedent the brief names: an
  *autem*-for-*tamen* lean there was reported as wrong, and the standing rule is that a connective
  swap does not change the sense and does not earn a public claim.
- **0706D · Esr 7:13/14** — Migne's *cuicunque* for the Clementine's *cuicumque* is n/m
  orthography (Pattern 9). ⚠ Separately: **Migne heads it `VERS. 14.--`, but *ut cuicumque
  placuerit* is Esr 7:13**; his VERS. 14 words (*Et septem consiliatorum*, *Missus es*) then follow
  without a new address. His numbering, reproduced as printed; the Glossa's verse addresses are
  not ours to renumber (brief: "Migne's own printing is not yours to tidy").
- **0707B · Ps 79:15** — Migne ***Domine** Deus virtutum, convertere, respice de coelo* / Vulg.
  *Deus virtutum, convertere, respice de caelo*. A vocative *Domine* added — Ps 79:20's opening
  contaminating 79:15. Rendered with the *Domine*.
- **0704D · Ps 115:7–8** — Migne *Dirupisti, **Domine**, vincula mea* / Vulg. *Dirupisti vincula
  mea*. Same class as the entry above, same treatment.
- **0709C · Esr 8:28** — Migne *Vos sancti Domini **estis*** / Vulg. *Vos sancti Domini, **et vasa
  sancta***. A copula supplied and the verse cut. The copula is what English needs anyway, and
  nothing is asserted that the Vulgate does not assert.
- **0710B · Esr 8:35** — Migne *Obtulerunt **holocaustomata** Deo* / Vulg. *obtulerunt
  **holocautomata** Deo **Israel***. *holocaustomata* is an attested spelling of the same word
  (Pattern 9); *Israel* falls to the `etc.`
- **0710D · Jac 1:18** — Migne *Voluntarie genuit nos verbo,* etc. / Vulg. *Voluntarie **enim**
  genuit nos verbo **veritatis***. Connective dropped, remainder under `etc.`
- **0694A · Esr 2:58** — Migne heads the gloss `VERS. 58.-- *Nathinaei filii,*` but **Esr 2:58 reads
  *omnes Nathinaei, et filii servorum Salomonis***; the sequence *Nathinaei … filii* stands at
  **Esr 2:43** (*Nathinaei : filii Siha*). The second lemma of the same gloss, *Omnes Nathinaei*, is
  2:58 exactly. Rendered as printed ("*The Nathinaei, the sons,* etc."). No marker: I cannot tell
  whether Migne is clipping 2:43's words under a 2:58 address or printing a variant of 2:58, and a
  `[var:]` would have to choose.
- **0699C · Esr 3:8** — Migne *Et **omnis** qui* / Vulg. *et **omnes** qui venerant de captivitate*.
  Singular for plural in a two-word catchword; the same singular stands at Esr 1:5 (*omnis cujus
  Deus suscitavit spiritum*). Rendered "*And every one who.*"

### 2.3 · CHECKED AND IN AGREEMENT — the verbatim list

**Recorded because a findings-only report cannot be told apart from a report by an agent that never
looked.** Each of the following was read word for word against the Clementine verse it addresses and
agrees with it exactly (allowing only Migne's punctuation and the `etc.`/`usque ad` clipping).

**Esr 1** (chunk 0000) — 1:2 *Et ipse praecepit mihi ut aedificarem ei domum* · 1:3 *Quis est in
vobis* · 1:3 *Ascendat in Jerusalem* · 1:4 *Et omnes* · 1:4 *Adjuvent* · 1:5 *Et surrexerunt* ·
1:5 *Principes* · 1:5 *Ut ascenderent* · 1:6 *Adjuverunt manus eorum in vasis* · 1:6 *Et jumentis*
· 1:8 *Protulit autem* · 1:8 *Et annumeravit* · 1:9 *Et hic est*.

**Esr 2** (chunk 0001) — 2:1 *Hi sunt* · 2:1 *Et reversi sunt in Jerusalem* · 2:1 *Unusquisque in
civitatem* · 2:2 *Numerus* · 2:58 *Omnes Nathinaei* · 2:61 *Et de filiis sacerdotum* · 2:65 *Et in
ipsis* · 2:66 *Muli eorum* · 2:68 *Sponte obtulerunt in domum Dei ad* · 2:69 *Secundum vires* ·
2:69 *Auri solidos* · 2:70 *Habitaverunt ergo sacerdotes et Levitae* · 2:70 *Universusque Israel*.
Also **Ps 138:16** *Imperfectum meum viderunt oculi tui* (verbatim) and **Apc 3:11** *Tene quod
habes, ut nemo accipiat coronam tuam* (verbatim).

**Esr 3** (chunk 0002) — 3:1 *Jamque venerat mensis septimus* · 3:2 *Et surrexit Josue* · 3:2 *Et
fratres ejus sacerdotes* · 3:2 *Et aedificaverunt* · 3:3 *Bases suas* · 3:3 *Et obtulerunt* · 3:4
*Feceruntque* · 3:4 *Solemnitatem tabernaculorum* · 3:4 *Per ordinem* · 3:6 *A primo die* · 3:7
*Dederunt autem* · 3:7 *Latomis* · 3:7 *Caementariis* · 3:7 *Sidoniis Tyriisque* (both occurrences)
· 3:7 *Ut deferrent ligna* · 3:7 *Joppe* · 3:8 *Anno autem* · 3:8 *In Jerusalem* · 3:8 *A viginti
annis* · 3:9 *Stetitque* · 3:10 *Steterunt sacerdotes in ornatu suo* · 3:11 *Et concinebant in
hymnis* · 3:12 *Flebant*. Also **1 Cor 6:19** *Membra vestra templum sunt Spiritus sancti* and
**Ps 95:12** *Exsultabunt omnia ligna silvarum* (both verbatim).

**Esr 4–5** (chunk 0003) — 4:1 *Audierunt autem hostes Judae et Benjamin* · 4:4 *Populi Judae* ·
4:5 *Conduxerunt* · 4:6 *In regno autem Assueri* · 4:14 *Laesiones* · 4:15 *Quoniam urbs* · 4:16
*Trans fluvium* · 4:17 *Verbum misit rex ad Reum Beelteem* · 4:17 *Habitatores Samariae* · 4:23
*Itaque exemplum* · 5:1 *Prophetaverunt* · 5:2 *Zorobabel* · 5:2 *Et Josue* · 5:3 *In ipso* · 5:4
*Ad quod respondimus* · 5:6 *Exemplar epistolae* · 5:8 *Lapide impolito* · 5:8 *Et ligna ponuntur
in parietibus, opusque*. Also **Mt 10:34** and **Lc 12:49**, both verbatim (see 2.2 for the
citation misprint on the first).

**Esr 6** (chunk 0004) — 6:1 *Tunc Darius* · 6:3 *Ut ponant fundamenta* · 6:5 *Reddantur* · 6:6
*Nunc ergo* · 6:8 *Ut de arca* · 6:9 *Vitulos et agnos* · 6:9 *Secundum ritum* · 6:10 *Orentque* ·
6:11 *A me ergo* · 6:12 *Deus autem* · 6:14 *Juxta prophetiam* · 6:14 *Et Artaxerxe* · 6:15 *Mensis
Adar* · 6:16 *Fecerunt autem* · 6:17 *Et obtulerunt* · 6:17 *Hircos caprarum* · 6:17 *Pro peccato*
· 6:18 *Et statuerunt* · 6:18 *Sacerdotes* · 6:19 *Fecerunt autem filii* · 6:22 *Et fecerunt
solemnitatem* · 6:22 *Septem diebus* · 6:22 *In laetitia*. Also **Ps 133:1** *Qui statis in domo
Domini, in atriis domus Dei nostri* (verbatim).

**Esr 7** (chunk 0005) — 7:1 *Post haec autem* · 7:1 *Post haec* · 7:7 *Et ascenderunt* · 7:9 *Quia
in primo* · 7:9 *Juxta manum Dei* · 7:12 *Artaxerxes rex* · 7:13 *A me decretum* · 7:14 *Et septem
consiliatorum* · 7:14 *Missus es* · 7:14 *Quae est in manu* · 7:15 *Et ut feras* · 7:15 *Cujus in
Jerusalem* · 7:16 *Et omne argentum* · 7:19 *Vasa quoque* · 7:21 *Et a me* · 7:22 *Sal vero* · 7:24
*Vobis quoque* · 7:25 *Tu autem* · 7:28 *Et ego confortatus*. Also **Ps 56:8** *Paratum cor meum,
Deus, paratum cor meum*, **Ps 39:8** *In capite libri scriptum est de me*, **Is 45:1** *Haec dicit
Dominus Christo meo Cyro*, **Ps 11:7** *Eloquia Domini eloquia casta…purgatum septuplum*, and
**1 Jo 2:2** *Ipse est propitiatio pro peccatis nostris* — **all five verbatim**, which is worth
saying in the chapter that also carries two of the work's largest divergences.

**Esr 8–9** (chunk 0006) — 8:1 *Hi sunt ergo principes* · 8:15 *Congregavi autem* · 8:17 *Et misi
eos ad Eddo* · 8:21 *Et praedicavi ibi jejunium* · 8:25 *Appendique eis argentum, et aurum, et vasa
consecrata* · 8:29 *Vigilate et custodite* · 8:29 *Donec appendatis* · 8:31 *Promovimus* · 8:32 *Et
mansimus* · 8:34 *Descriptumque* · 8:35 *Sed et qui venerant* · 8:36 *Et elevaverunt populum* · 9:1
*Non est separatus* · 9:3 *Scidi pallium* · 9:4 *Convenerunt* (both occurrences) · 9:5 *Scisso
pallio* · 9:5 *Curvavi genua*. Also **Ps 44:17** *Constitues eos principes super omnem terram* and
**Pr 31:23** *Nobilis in portis vir ejus*, both verbatim.

**Esr 10** (chunk 0007) — 10:2 *De filiis Aelam* · 10:2 *Et nunc si est poenitentia in Israel* ·
10:4 *Surge* · 10:6 *Filii Eliasib* · 10:6 *Panem non comedit* · 10:9 *Ipse est* · 10:9 *Et sedit
omnis populus* · 10:10 *Et surrexit Esdras* · 10:16 *Et sederunt in die* · 10:18 *Et inventi sunt*
· 10:18 *Et fratres ejus* · 10:19 *Et dederunt*. Also **2 Ptr 2:20** *Si enim refugientes
coinquinationes mundi* and **2 Cor 7:1** *mundemus nos ab omni inquinamento carnis et spiritus*
(the tail *ut participes resurrectionis esse valeamus* is the gloss's own continuation, not
2 Cor 7:1, and is rendered as printed inside the italic span).

---

## §3 · `usque ad` — DECIDED PER OCCURRENCE, and two are not the formula

**80 occurrences, the highest count in the batch, and the launch brief named this as a trap.**
Counted and adjudicated one at a time:

- **78 are the abridgment formula** — 77 printed `*usque ad*` in their own italic span, plus one at
  **0712B** printed `*usque ad: Si enim refugientes coinquinationes mundi,*` where the colon and the
  resumed words stand **inside** the same italic span. That one is Englished whole, span structure
  preserved: `*as far as: If indeed, fleeing the defilements of the world,*`.
- **2 are ordinary Latin, and both are in chunk 0006:**
  - **0709B**, *inside a resumption tail*: `*usque ad* et per successores eorum **usque ad finem**
    aedificanda est` — "even to the end". ⚠ **This is the shape most likely to be swallowed**: an
    ordinary *usque ad* sitting a few words downstream of a formula *usque ad* in the same sentence.
  - **0710C**: `quos exemplis in bona conversatione instituere vel verbis **usque ad** coelestium
    perceptionem praemiorum promovent` — "even to the receiving of the heavenly rewards".

**No verb was supplied to any of the 78 resumption tails**, per 8970 §1(b). Where a tail lands
mid-clause, the English lands mid-clause. Four tails are visibly broken by the excision and are left
broken; see §4.

---

## §4 · THE ABRIDGMENT'S OWN WRECKAGE — four tails rendered as they stand

These read badly. **They read badly because the formula cut words out of them, and the brief's rule
is that the formula removes words without suspending grammar** — so each was parsed as strict prose
first, and only then left alone.

- **0706A** — `*usque ad* perpetuam ad coelestem patriam pervenientibus **do**.` The object of *do*
  is on the far side of the cut; only its feminine accusative adjective survived. Rendered "*as far
  as* **a perpetual one I give** to those that come to the heavenly country." Nothing supplied.
- **0699D** — `*usque ad* Zorobabel vero de tribu regia **orti sunt**.` A plural verb with one
  named subject: the excision took the co-subject (Bede's sentence pairs Josue's priestly tribe with
  Zorobabel's royal one). Rendered "*as far as* but Zorobabel indeed **were** sprung of the royal
  tribe" — the plural kept, no second name invented.
- **0705D**, closing CAPUT VI — `conversis etiam gentilibus, qui olim resistebant [0705D] et ad
  adjuvandum ejus statum, confirmandam Christianae religionis pacem per mundum.` A verbless tail at
  the chapter's end. Rendered as it stands.
- **0706A**, second — `sed chronicorum libri successorem ejusdem Xerxis.` *putant* elided by zeugma
  from *Josephus putat* in the previous clause. Rendered "but the books of the chronicles, the
  successor of that same Xerxes", keeping the ellipsis visible.

---

## §5 · THE PLATE CANDIDATES — **READ AND SETTLED** (orchestrator, 2026-08-24)

⭐⭐⭐ **THE PLATE WAS READ THE SAME SESSION.** PL 113, archive.org `patrologiaecurs04migngoog` on
disk, page map calibrated against the printed corner numbers before any crop, every crop taken
wider than its target, and the whole line read at each site.

| site | our file | the plate at 450 dpi | verdict |
|---|---|---|---|
| 0691D (note) | *Vide **tomo** VIII operum* | **Vide *tome* VIII operum** | **OURS — NORMALIZATION** |
| 0697A | *magistorum* | **magistorum** *(2nd witness)* | **MIGNE'S — refuted** |
| 0700D | *integramente* | **integra / mente** | **OURS** — hyphenless cross-line fusion |
| 0702A | *Judaeo rum* | **Judæo- / rum** | **OURS** — unjoined break |
| 0703D | *qum* | **cum** | **OURS** |
| 0705C | *septilormem* | **septiformem** | **OURS** |
| 0709A (foot of 708) | *gloriostor* | **gloriosior** | **OURS** |
| 0710C | *camdem* | **eamdem** | **OURS** |
| 0711A | *cuncto rum* | **cuncto- / rum** | **OURS** — unjoined break |

All seven readable non-words were ours. **Every one is now patched** in
`data/tei-patches/8951.json` and the work is re-chunked, so the Latin column prints what Migne
printed; `verify-english` passes and no boundary moved. **Not one `[sic:]` had been fired at any
of them**, which is what the ship test is for: seven pages' worth of public claims against
Migne's plate were never made, and the repair belonged in our Latin all along.

### ⭐⭐ 0691D — the normalization class reaches five, and it was found answering a different question

The plate prints **(Vide *tome* VIII operum.)** — ***tome*, the FRENCH word**, in an editorial
note by a French editor pointing his reader to volume VIII of Jerome's works. Our file reads the
Latin ablative *tomo*, which construes perfectly and is therefore invisible to every check this
edition runs. **This is the first normalization found in a NOTE rather than in the body, and the
first where the tidying changes the LANGUAGE of the word.**

⚑ It was found while settling §1(b) — whether Migne prints the prologue's text at all. He does
not, and that is now a POSITIVE READ rather than an analogy from 8948: the plate gives the drop
title *ESDRÆ LIBER PRIMUS*, the prologue head, this note, a rule, and then `CAPUT PRIMUM` with
the exposition beginning. **§1's two adjudications both stand, and the `[ed:]` was rightly
declined.**

### ⭐ 0697A *magistorum* — SETTLED at a second witness, and the suspicion withdrawn

**Our archive.org copy could not show this word** (see below), so it was recorded as unreadable and
deliberately not guessed. **A second witness answered it in one page fetch: Gallica
`bpt6k5505319w`, f349 (f = (column + 1) / 2, calibrated first), which carries the full margin and
opens col. 697 with *magistorum quasi ferramentis fabrorum praepa-rata*.** Our file agrees with the
plate exactly. **No patch; the suspicion is withdrawn.**

⚑ Worth keeping as a checked negative for a second reason: *magistorum* is an ordinary genitive
plural and never belonged on a list of non-words at all. **The non-word class, whose plate reads
are 19 for 19, stayed unbeaten** — this was a misfiled candidate, not a counter-example.

#### Why it could not be read in our own copy

**PDF p. 354 (cols 697/698) of this scan is clipped at the left margin**: the first characters of
most left-column lines are cut off, so the plate reads *rum quasi ferramentis fabrorum praepa-*
where the word under test is *magistorum*. Only its final *rum* survives. **No patch and no
guess** — an illegible plate is recorded as illegible, exactly as an illegible conjecture is. It
fires no marker, so shipping asserts nothing about it; a second PL 113 scan would settle it in
one page.

### ⭐ A false suspicion killed by cropping properly

At 150 dpi the word beside *septilormem* looked like *Prophetia*, and a second divergence seemed
to be standing there. The 450 dpi crop shows **Propheta**, agreeing with our file exactly. The
crop-wider discipline catches the true findings and kills the false ones by the same motion.

### The candidates as the translator filed them

⛔ **Zero `[sic:]` in this work, and that is a decision, not an oversight.** The 2026-08-23 addendum
measured the split 10 for 10: **every suspicion aimed at a NON-WORD came back as OUR digitization's
corruption, not Migne's plate** — which is precisely the class that made seven false `[sic:]`
withdrawable in that batch, each one publicly blaming Migne for Corpus Corporum's error. Six of this
work's seven suspect forms are non-words. **I therefore rendered the evident word, logged the crux,
and fired nothing**, exactly as Ruth's `significaRuth` was handled (a tei-patch, never a marker).

**Non-words — plate candidates, worth the read (eight):**

| col | our file reads | evident word | class |
|---|---|---|---|
| 0697A | *magistorum* | *magistrorum* | dropped letter, inside `praeceptis [0697A] magistorum` |
| 0700D | *integramente* | *integra mente* | **fused** word division (Pattern 10 shape) |
| 0702A | *Judaeo rum* | *Judaeorum* | **split** word division, in `optimates Judaeo rum` |
| 0703D | *qum* | *cum* | q/c, in `corpora eorum qum quibus` |
| 0705C | *septilormem* | *septiformem* | l/f, in `cujus nobis septilormem Propheta gratiam commendat` |
| 0710C | *camdem* | *eamdem* | c/e, in `unam et camdem Ecclesiae figuram` |
| 0711A | *cuncto rum* | *cunctorum* | **split**, in `ad cuncto rum notitiam` |
| 0709A | *gloriostor* | *gloriosior* | dropped letter, in `gloriostor eris in regno Dei` |

(Eight rows, not six; *integramente*, *Judaeo rum* and *cuncto rum* are the word-division cases 7a⁗-b names
as the dangerous shape, and I checked each for swallowed force: none of the three carried a verb, a
negation or a conjunction — *integra mente* is an ablative of manner, *Judaeorum* and *cunctorum*
are genitives of nouns whose governing words survive.)

**Real words — Migne's until a plate says otherwise, per addendum A. Rendered as printed:**

- **0695B · *mala*** — `Mulus ex asino et equa gignitur, **mala** ex equo et asina.` The sentence
  needs the name of the reverse cross (Isidore's *burdo*); *mala* is a real Latin word with no slot
  here. ⛔ **Carried in italics, untranslated, with NO `[sic:]`** — following Ruth §2's *societate
  fieri* ruling verbatim: no marker in this corpus means "Migne prints a word that will not
  construe", and saying so here beats inventing one for a single site. **Both rivals named and
  neither adopted:** *mula* (which would make the sentence false, since a she-mule is also got of
  ass and mare) and *burdo* (which is the right animal and no palaeographic path from *mala*).
  **Worth a plate read; it is a real word, so the corpus-frequency argument is worthless here and I
  am not making one.**
- **0699D · *projectum*** — `Non est dubitandum ibi statum Ecclesiae per spiritum sumere
  **projectum**.` *sumere profectum*, "to take its increase", is the phrase the sense wants, and
  *profectum*/*projectum* is one letter. **Not adopted.** Rendered "takes projection through the
  spirit", which is what the printed word says and reads as oddly as it should.
- **0704A · *capiunt*** — `hanc … placidam pacem semper habere **capiunt**.` *cupiunt* ("they
  desire") is the obvious rival and is **not adopted**; *capiunt* + infinitive does not construe.
  Rendered "and take that she should always have quiet peace."
- **0701B · *honorum*** — `inchoationem et perfectionem **honorum** Deo … referunt`, where
  *bonorum* would be the expected word. A real word that construes perfectly ("of honours") in a
  sentence about referring one's good back to God. Rendered as printed, no conjecture offered.
- **0708D · *ebrius*** — `**ebrius** per gratiam Dei … mente roboratur`. "Drunken through the grace
  of God" is startling and is also a commonplace of the sober inebriation; nothing is wrong with
  the word. Rendered as printed.
- **0693B · *grado*** — `quem in quo **grado** ministerii ecclesiastici promoveant`. Attested
  medieval declension shift, Pattern 9. **Not a defect, not marked, not reported as one.**
- **0700C · *accerrime*** — doubled consonant for *acerrime*. Pattern 9, same treatment.
- **0694C · *nihili*** — `ut **nihili** prorsus bonitatis … remansisse videatur`. Genitive form of
  *nihil*, attested. Pattern 9.
- **0707D · *delectorum*** — `vasa, id est **delectorum** corda`. *delecti* = the chosen; the word
  is right as it stands and *electorum* is not needed. **Raised and rejected**, recorded so a later
  reader knows it was seen.

### 5.1 · The one `[cj: …]` — 0707B, *Indiam*

`Mittitur Esdras a facie regis et septem consiliatorum ejus, **ut visitet Indiam et Jerusalem**…`

*Indiam* is a perfectly good Latin word, so Pattern 7 renders it and Pattern 12 has nothing to
wrap — **and the English then asserts that Esdras is sent to India**, which the author did not say.
That is exactly Pattern 18's founding shape, so the gloss is additive:
`that he may visit India [cj: *Indiam*; read *Judaeam*, "Judea"] and Jerusalem`.

**Why *Judaeam* wins.** The gloss is paraphrasing Esr 7:14, whose text Migne has printed as a lemma
**two lines above** on the same column (*Missus es*), and the Clementine reads *ut visites
**Judaeam** et Jerusalem* — with *Jerusalem* surviving in Migne's own sentence as the second member
of the pair. **The rival, and it is not frivolous: that *Indiam* is meant**, India standing for the
ends of the earth, since the gloss goes straight on to the Gentiles (*congregandam de gentibus*).
It loses because the sentence is not allegorising yet — it is reporting what the verse says, in the
verse's own words, and the surviving half of the pair is the literal Jerusalem, not a figure of it.

---

## §6 · WHAT MIGNE PRINTS AND WE DID NOT TIDY

- **0698B · *hic in pane et vino, ille proprio filio oblato*.** `Tertiam aetatem Melchisedech et
  Abraham **hic** in pane et vino, **ille** proprio filio oblato sacrarunt.` Read as ordinary Latin,
  *hic* is the nearer (Abraham) and *ille* the remoter (Melchisedech) — which assigns the bread and
  wine to Abraham and the son to Melchisedech, **the wrong way round in both directions**.
  ⛔ Rendered as printed ("this one in bread and wine, that one by the offering of his own son").
  **No reversal, silent or marked**: the pronouns are on the page, the demonstrative reference is
  the author's or his compositor's, and correcting it is the silent-repair class Pattern 7a exists
  to forbid. A reader with the Latin opposite sees exactly what we saw.
- **0695D · *ille … liberatus est, ita hic … ascendunt*.** A singular subject with a plural verb
  across a *sicut … ita* pivot. **English has an exponent for that**, so Pattern 12's clause (2)
  does not apply and the disagreement is rendered rather than marked: "so this latter … **they
  ascend** as it were to the walls of their own virtue or city."
- **0701B · `VERS. 16--`** — Migne prints two hyphens with **no period after the numeral**, alone
  among this work's fifty-odd verse addresses. Reproduced character for character. (Compare Ruth
  §2's `VERS.9`, which was patched — that one was demonstrably the TEI's; this one I have not
  checked against the plate and am **not** patching on suspicion.)
- **0711C · the ellipsis inside a lemma.** `*Sic ergo orante Esdra, et implorante Deum et flente
  . . . . . . . Flevit populus.*` Seven spaced points, inside the italic span, marking Migne's own
  excision within the verse. Reproduced exactly, spacing included.
- **0710D → CAPUT IX.** The foreign-wives material of Esr 9:1–2 is glossed at 0710C–0711A **before**
  Migne prints `CAPUT IX.`, which then opens at VERS. 3. His arrangement; the order is reproduced
  and not reordered.
- **0708C · the measures.** `Minimum, librarum quinquaginta medium, librarum sexaginta duo summum,
  librarum centum et viginti. Corus triginta modii: batos, qui et ephi decima pars cori, id est
  tres modii.` **The commas fall between the wrong members** — each sits after the ordinal instead
  of after the weight — so the run reads "The least, of fifty pounds the middle, …". Every numeral
  is rendered exactly as printed (fifty · sixty-two · a hundred and twenty · thirty · three), and
  **the comma positions are kept**, because Pattern 8 governs punctuation as Pattern 7 governs
  words. A reader who repunctuates gets 50 / 62 / 120 pounds, which is the arithmetic Migne means.
- **Numerals, checked one by one.** 0706A: Darius *annos sex et trigenta*, Xerxes *annos viginti*,
  Archabanus *menses septem*, Artaxerxes *annis quadraginta* — rendered "six and thirty", "twenty",
  "seven", "forty", i.e. spelled where he spells. 0709A: *mille septingentorum prope virorum* →
  "nearly a thousand seven hundred". 0712D: *centum anni et amplius* → "a hundred years and more".
  0697B: *quinto decimo die mensis septimi … septem diebus* → "the fifteenth day of the seventh
  month … seven days". 0699C: *a viginti annis* → "from twenty years". 0708B: *sub centenario
  numero* / *Centenarius* → "under the number of a hundred" / "the number of a hundred". 0701B:
  *tricesimum, sexagesimum et centesimum* → "thirtyfold, sixtyfold and hundredfold". **No numeral
  in this work is a Roman numeral in the body text**, so the "Roman where he prints Roman" rule had
  nothing to bite on outside the `[n:]` notes, which pass through untouched.
- **Proper names as Migne spells them, never normalized:** *Egbathanis* / *Egbathana* (not
  Ecbatanis) · *Medena* · *Horna Jebusaeus* (for Ornan/Areuna) · *Archabanus* (for Artabanus) ·
  *Aelam* · *Nathinaei*, kept undeclined in the English as a proper name rather than given Douay's
  "Nathinites" · *Reum Beelteem* · *Josedec* · *Zorobabel* · *Salathiel* · *Casleu* · *Joacim* ·
  *Eliasib* · *Aggaeus* → "Aggeus" · *Malachia* → "Malachy". **Deviation from a familiar English
  Bible's forms is data, and 7a″ is the reason none of them was conformed.**
- **0697B · *scenophegia*** — Migne's Greek term, kept as he prints it and glossed by his own words
  ("that is, the fixing of tabernacles"). Not italicized: adding an italic span the Latin does not
  have would break span parity, and the word is not carried type.
- **0700A · *Verba Dierum*** — Migne's title for Paralipomenon. Rendered literally, "the Words of
  the Days", not replaced with "Chronicles" or "Paralipomenon".
- **0699D · `*Flebant* (BEDA *ubi supra* )`** — a siglum printed **inline in the running text**,
  with an italic span inside the parentheses and Migne's space before the closing bracket, rather
  than as an `[n:]`. Reproduced exactly, untranslated, structure and spacing included. It is the
  only attribution in the work that is not a note.

---

## §7 · SENSE CALLS — where two readings construe, said here rather than chosen silently

- **0707D · *Nec tantum ex hoc argento vel auro oblationes … emi possunt*.** Test 2a's named
  population: a negative with *tantum* beside it. Two readings construe. (i) The negative on *emi
  possunt*, *tantum* qualifying the money: "**Nor out of this silver or gold alone** can the
  oblations be bought." (ii) The negative on *tantum … oblationes*: "Nor can **only** the oblations
  be bought out of this silver or gold." **Reading (i) was taken**, and the reason is structural,
  not euphonic: the *quia* clause that follows gives as its ground that these marvels can be
  admired but **not imitated** — which is a statement about our inability to make them our own
  offering, not about what else besides oblations might be purchased. Reading (ii) leaves the
  causal clause with nothing to explain.
- **0707D · *quae non omnibus in exempla operis possunt ostendi: sed tantum … recitari*.** Same
  population, and here the `sed` settles it cleanly: the pivot is *ostendi* ⟷ *recitari*, so the
  negative is on *ostendi* with *omnibus* as its dative, "which **cannot be shown to all** as
  examples of work: but only recounted". Checked, not assumed.
- **0696A · *Universum Israel, non decem tribus tantum dicit*.** Negative + *tantum* again. The
  host is *tantum*, and the `quae quondam vocabantur Israel ad distinctionem duarum` that follows
  proves it: the point is that "Israel" is not restricted to the ten. Rendered "he means **not the
  ten tribes only**".
- **0712C · *non scribit Esdras Jesum alienigenam duxisse uxorem, sed quosdam de filiis et fratribus
  suis*.** The `sed` contrasts the **objects** (*Jesum* ⟷ *quosdam de filiis*), not the verbs, so
  the negative lands on *Jesum*: "Esdras **does not write that Jesus** married a foreign wife, but
  certain of his sons and of his brethren."
- **0695C · *quanto eos nec licitis uti considerant*.** The negative is on *licitis*, not on the
  infinitive: "by how much they observe that these use **not even lawful things**."
- **0699B · unexpressed subject.** `sed Salomon regali potentia a rege Hiram quae voluit, facile
  obtinuit: hi autem de captivitate redeuntes … cuncta emebant.` Both subjects are printed
  (*Salomon*, *hi*); nothing was supplied. Named here because the surrounding paragraphs supply
  "they" freely and I checked each: in every case the antecedent is *filii transmigrationis*, named
  in the lemma or in the sentence before.
- **0711B · *Magna mutatio rerum perfidia principum, multi luxuriam secuti, reducti sunt*.**
  *perfidia principum* is ablative with no preposition and *multi … reducti sunt* has no
  conjunction joining it to *Magna mutatio rerum*. Rendered as a run of appositional clauses with
  Migne's single colon preserved before *conveniunt*. **Nothing supplied and no conjunction
  invented** — the Ruth *effoetandi* error (an invented "and") is the named precedent for what not
  to do here.
- **0696C · *cum ablatas sordes vitiorum … illuminamur*.** *ablatas sordes* is accusative where an
  ablative absolute is wanted. English participial phrases carry no case, so there is **no exponent
  for the slip** and Pattern 9's logic applies: rendered "the filth of the vices taken away", logged,
  not marked.

---

## §8 · READ CLEAN — the sections where I found nothing, said so a blind reader knows

Recorded because a flagged passage is not a checked passage, and the converse also needs saying.

- **Chunk 0000 entire (0691D–0693C).** 13 notes, 5 anchors, one negative (*non solum … sed et*,
  scope on *pauperibus … ministrare*, checked). No divergence in any of its thirteen Esr 1
  lemmata. The only thing in it worth an entry is §1, which is not a defect. ⚠ Its
  **word ratio is 1.60**, which trips `verify-english.mjs`'s warn: that is the formula's doing —
  eight `*usque ad*` in 456 words, each of which turns two Latin words into three English ones, plus
  a head expanded from four Latin words to eight. Not padding.
- **0698A–0698C, the five ages.** The densest historical stretch in the work (Abel · Noe ·
  Melchisedech and Abraham · David · Josue and Zorobabel · the sixth age), read twice against the
  Latin. Everything it asserts, Migne asserts — including the *hic/ille* inversion at §6, which is
  the one thing in it I would have "fixed" if the rules allowed.
- **0703C–0704B, CAPUT VI's decree and the Artaxerxes question.** Migne prints **no `?`** on
  *Quaeritur quomodo … perficeretur.*, so **Pattern 8b was NOT invoked** and the indirect question
  keeps its full stop. The one `?` in the chunk is *Quis enim explicare valeat…?*, a direct
  question, and it rides as printed. Checking that before reaching for 8b's colon is the whole point
  of the rule's boundary.
- **0709A–0709C, the vessels.** Checked for the *illa … haec* antecedent chain (the vessels carried
  to Babylon vs. those made there) — the demonstratives are printed, the referents are
  unambiguous, no subject supplied.
- **All 138 notes** compared string for string against the Latin twins: identical, identically
  ordered, including the two spacing variants of `(BEDA ubi supra. )` / `(BEDA ubi supra.)`, the
  comma-less `(BEDA.,ibid.)` at 0699A, the bare `(ID.)` at VERS. 35, the `(AUG.)` at VERS. 36, and
  `(BED. in Esdr. )` at 0700C.
- **Attribution.** Every siglum in this book credits Bede *In Esdram* except the single `(AUG.)` at
  **VERS. 36 (band 0710B)**, on a gloss that reads exactly like its Bedan neighbours. ⚠ **Reproduced verbatim,
  uncorrected.** This recension's attributions are known to be unreliable and the work page says so;
  passing a siglum through is not endorsing it. Flagged, not touched.
- **Runbook false positives, checked and NOT reported:** column-band arithmetic (item 1) — the
  anchor run 0691D → 0692D skips the whole of col. 0692's A–C bands and 0700B → 0700C is likewise
  normal; **no text breaks mid-word or mid-construction across any anchor in this work**, which is
  the only real signal. Pattern 4 `[f:]` tails (item 4) — this is a lemma-and-gloss commentary and
  none was tagged.

---

## §9 · THE FOURTH TEST — read last, with the counts already clean

Every paragraph re-read against the Latin asking only whether it **asserts** what Migne asserts —
not whether everything is there, which the parity checks had already answered. **Four sites were
live at that pass, and at every one of them a smoother English was available and was refused.**
Recorded with the rival named, because a crux that names no rival records nothing:

1. **0695D** — *ille … liberatus est, ita **hic** … **ascendunt***. The smooth reading evens the
   number out to a singular ("so this latter … ascends"), and nothing on the page would show it.
   Refused: the plural is Migne's and English can carry it, so it stands (§6).
2. **0698B** — *hic in pane et vino, **ille** proprio filio oblato*. The smooth reading assigns the
   bread and wine to Melchisedech and the son to Abraham, which is the history — and is **not what
   the demonstratives say**. Refused: this is the silent-repair class exactly, and it would have
   been invisible to every check we run (§6).
3. **0706A** — *perpetuam ad coelestem patriam pervenientibus **do***. The smooth reading supplies
   the feminine noun the excision took ("perpetual **rest** I give"). Refused: no word is ever
   supplied to complete a resumption tail (§4), and *requiem* is a guess (§4).
4. **0704A** — *placidam pacem semper habere **capiunt***. The smooth reading is *cupiunt*, "they
   desire", which is very likely what was meant and reads perfectly. Refused: *capiunt* is a real,
   well-formed word, addendum A rules that class Migne's until a plate says otherwise, and the
   conjecture lives in §5 instead of in the text.

⚑ All four are smooth English over rough Latin, which the brief names as a suspect rather than a
success. **None of the four is a question of what the English contains** — anchor parity, note
parity, band punctuation and the negation host check were all clean before this pass and all clean
after it, and not one of them can see any of these four.

---

## §10 · THE BLIND POLARITY READ (2026-08-24) — five sites, ALL FIVE NEW, all five repaired

A reader fenced from this file read all eight chunk pairs and reported before opening it. **This
was the richest of the batch's four blind reads: five defects on our side, none of them in this
file under any heading, and three of them in stretches the file does not name at all.**

⚑ **Not one of the five is a negation defect.** Every printed negative in this work was walked to
its host and found correct — by the translator and independently by the reader. What got through
was, in every case, **a referent or a relation that English cannot leave implicit**: an object
mistaken for a subject, a reflexive pointed at the wrong person, an equation flattened into a
statement, a real word quietly replaced by the word the context expected. Counts and parity
passed at all five.

### 10.1 · 0701A — the sentence contradicted itself, and the parse was the reason **(repaired)**

*Quia nequeunt sufferre, **qui regnum diaboli conantur impugnare**, timent bella concitari in
Ecclesia, ne haereses et fallaciae eorum … debellentur…*

The English made the men who assail the devil's kingdom the subject of *nequeunt* and *timent* —
and then gave those same men "**their** heresies and deceits" to fear the loss of. **A page that
says the assailants of the devil's kingdom fear that heresy will be destroyed asserts the opposite
of the gloss.** The relative clause is the unexpressed-antecedent OBJECT of *sufferre*: the
heretics cannot endure those who assail the devil's kingdom, and so fear war in the Church,
Christ's sword being the thing that would destroy them (*duce illo qui ait: Non veni pacem
mittere, sed gladium*). **Now "Because they cannot endure those who strive to assail the kingdom
of the devil, they fear…"**

### 10.2 · 0700D — *confidentem* rendered as *confitentem* **(repaired, and the plate agrees)**

*Populum Juda, id est **confidentem** et glorificantem…* was Englished "the **confessing** and
glorifying people". *Confidens* is **trusting**; "confessing" is *confitentem* — and the standard
Juda etymology (*confessio*) is exactly what makes that the reading a translator expects, which is
why it slipped in as a silent conjecture with the printed word disappearing behind it.

⭐ **The plate settles it: Migne prints *confidentem*.** I read this line at 450 dpi this session —
it is the same line as the *integramente* patch, four words along, and the whole line was read
because that is the rule. **Now "the trusting and glorifying people."** ⚑ Two defects of two
different kinds on one line of one column, found by two different passes.

### 10.3 · 0696A — an accusative-and-infinitive reversed **(repaired)**

*…qui de captivis geniti **ad ipsas se** paterna successione **pertinere** didicerant.* The English
had "had learned that **these belonged to them**" — possession running the wrong way. *Se* is the
accusative subject, *ad ipsas* the goal: they had learned **that they themselves belonged to those
cities**. **Now rendered so.** The whole passage is about men returning to a patrimony that claims
them, not about property they claim.

### 10.4 · 0701D — a reflexive that made the man seek himself **(repaired)**

*Unusquisque etiam cum Deum invocans non aliud quaerit **quam ipsum**…* was Englished "seeks
nothing other than **himself**". *Ipsum* is *Deum*, four words earlier; the English made the seeker
the thing sought, which is the reverse of the gloss and leaves the naming (Salathiel, *I asked
God*) unintelligible. **Now "seeks nothing other than him."** ⚑ *Potest eum Salathiel vocare* is
left as it stands: the referent is ambiguous in the Latin too, and resolving it would be our
choice, not Migne's.

### 10.5 · 0693C — the lemma word dropped out of its own gloss **(repaired)**

Lemma: *Adjuverunt **manus** eorum in vasis.* Gloss: ***Manus** aedificantium socii, qui aedificare
nequeunt datis pecuniis adjuvant…* Migne asserts an identification — **the hands of those building
ARE the associates** — and that identification is the only reason the lemma word is being glossed.
The English read "The companions of the builders, who are not able to build, help with monies
given", which is a true statement about companions and says nothing about *hands*: the word under
gloss had vanished. **Now "The hands of those who build are the associates, who, not being able to
build, help with monies given…"**

### 10.6 · Two of Migne's own, found by the reader and previously unlogged — **no change**

Both are rendered literally, which is correct; they are recorded so the ledger is complete, beside
the *projectum* and *capiunt* entries §5 already keeps.

- **0707C** *ut per hoc **patrem** cum sanctis habeant* — "that through this they may have a father
  with the saints". ***partem** cum sanctis*, "a part with the saints", is the phrase the sense
  wants and is one letter away.
- **0708B** *ea quae in dextra **indicis** … sunt gaudia* — "the joys which are on the right hand of
  the index". Almost certainly ***judicis***; this book prints *ad dexteram judicis* at 0700C for
  exactly this idea.

⚠ **Neither is patched and neither carries a marker**, because both are real words and the plate
has refuted that class 5 times out of 5 this batch. They are Migne's until a plate says otherwise.
