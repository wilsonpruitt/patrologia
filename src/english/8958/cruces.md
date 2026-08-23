# *Glossa ordinaria*, **Liber Josue Ben Nun** (PL 113, 0505D–0520D) — cruces

Translated 2026-08-23, one translator, all 6 chunks (5,659 Latin words → 7,887 English, 1.39×).
Repaired 2026-08-23 after four plate reads and an independent blind read (§6, §7).
`node scripts/verify-english.mjs 8958`: **clean** — columns, notes and sections aligned, no
duplicate paragraphs. Apparatus: **16 `[var:]` · 0 `[sic:]` · 1 `[cj:]` · 0 `[d:]` · 0 `[ed:]` ·
0 `[nt:]` · 144 `[n:]`** (exact parity with the Latin twins).

⭐⭐ **THE HEADLINE FINDING: all four `[sic:]` markers in this work have been WITHDRAWN, because
the plate went against OUR TRANSCRIPTION and not against Migne.** The translator marked four
defects at 0510C, 0511D and 0514B (twice). Every one of them was read at the plate, and Migne
prints the sound word in all four places: *interpretatur*, *cum*, *per-|verse*, *mortales*. The
defects were introduced downstream of Migne — in the Corpus Corporum digitization we chunk from —
and are now repaired in `data/tei-patches/8958.json`; the work has been re-chunked and the four
markers deleted from the English. **Four for four against our own text is the useful number
here**, and a reader of this apparatus should meet it before anything else: a `[sic:]` in this
corpus is a claim about Migne's type, and on this work it would have been wrong every time it was
made. Structure: PRAEFATIO + CAPUT
PRIMUM–CAPUT XXIV. **Zero guillemets in either language.** Column anchors 57, 1:1 and
position-checked.

The Glossa conventions are those settled on **Liber Ruth (8968)** §1 and are not re-opened here.
What follows is this book's own collation and its own trouble.

---

## §0 · WHAT IS SPECIFIC TO THIS BOOK, AND HOW IT WAS HANDLED

### (a) *Jesus* and *Josue* are kept apart exactly as Migne prints them

This is the single most consequential decision in the work, and it is not a style choice. The
commentary is built almost entirely out of Origen/Adamantius, whose whole argument turns on the
son of Nave and the Son of God bearing **one name**. Migne prints *Jesus* in the gloss prose and
*Josue* in the Vulgate lemmata, and the two are never harmonized here:

- ***Jesus*** → **"Jesus"**, everywhere, including where the referent is plainly the son of Nave
  (*Mittuntur a Jesu exploratores in Jericho*; *In Jericho est Jesus*; *fecit ergo Jesus sicut
  praeceperat ei Dominus*). Rendering these "Joshua" would destroy the argument on every page —
  0505D says in as many words that God gave *the name above every name* to Jesus Christ, *hoc
  autem est Jesus*, and that no man before was ever so named.
- ***Josue*** → **"Josue"**, in the lemmata that print it (*Praecepitque Josue*, *Cecidit Josue
  pronus*, *Ascenditque Josue*) and at 0516B where the gloss itself writes *Josue sorte dividit*.

A reader therefore sees the same alternation Migne set. ⚠ Both words are rendered "Jesus"/"Josue"
without comment where the referent is ambiguous — the ambiguity is the author's instrument.

### (b) *usque ad* → *as far as*, in its own italic span — 8970 §6(b), reused not re-derived

**97 occurrences**, by a wide margin the heaviest in the Glossa block so far. Not one was varied,
and **no verb was supplied to any of them.** Where the resumption lands mid-clause, the English
lands mid-clause. The tails that read worst are the formula working, not defects:

- 0512D *…etc. as far as* **thou hear not the words of him that calls thee back to thy former
  liberty, thou become the servant of sin for ever** — the head of the conditional (*si…*) is
  what the abridgment removed.
- 0512D *…as far as* **if he had not done what he had sworn when troubled by anger, than if he
  had performed it** — a stranded *quam* whose comparative was cut.
- 0520A *…It is asked, since Israel* **not only** *unto the day of the death of Jesus, etc.* —
  a `non solum` whose answering `sed` was cut. The negative rides on *usque ad diem mortis Jesu*,
  which is the phrase it stands before; nothing was moved onto a verb, because the abridgment
  left no verb there to move it onto.
- 0513D *…as far as* **which is Christ, and, at his own bidding, to be slaughtered** — a feminine
  plural gerundive whose antecedent was cut. **No subject and no verb supplied.**

⚑ Each of these was parsed as ordinary prose before it was accepted, per the brief's rule. The
one place a tail looked odd for a *different* reason is 0511D, and it is logged in §2 rather than
excused as abridgment.

### (c) The attribution sigla vary and are passed through verbatim

`ADAM.` (44) · `ADAMANT.` (5) · `ADAMAN.` (5) · `ADAMANTIUS` (1) · `ORIG.` · `ID.` · `AUG.` ·
`ISID.` · `BEDA` · `HIER./HIERON.` · `GREG.` · `JUSTIN.` — **none normalized**, Ruth §1.3 and
Glossa convention 4. Passing them through is not endorsing them; Migne's Josue attributions are
in fact tangled (see §2 (h)). Two sigla sit **inside** an italic lemma span and keep their place
and their italics: `*Moses servus (ADAMANT., hom. 2 in [0507A] Josue.) Moses famulus meus mortuus
est.*` at 0506D (with the column anchor inside the parenthesis) and `*(AUG. quaest. [0513B] 14.)*`
at 0513A, plus `*[n: (ORIG. ubi supra.)] Jerusalem*` at 0518C and `*Exstructo. [n: (AUG., quaest.
32 in Jos.)] Et in sacrificiis salutarium nostrorum.*` at 0520B.

### (d) The LXX and *Alia littera* readings take NO `[var:]`

Migne names the witness himself six times — `LXX: *Sicut in diebus messis tritici.*` (0508B),
`LXX: *Linguam,*` (0511C), `LXX: *In gemino ligno,*` (0512B), `Alia littera: *Et terra relicta est
multa valde.*` (0515B), `Juxta LXX…` (0519B), `LXX: *Vespas.*` (0520C). **A divergence the plate
already labels is adjudicated on the page**; ours would tell the reader twice. Same reasoning as
Pattern 12's rule about Migne's own `( sic )`.

### (e) Fixed equivalences, never varied inside the work

*dogmata* = **doctrines** · *anathema* = **anathema** · *pascha* = **the pasch** ·
*saeculum* = **the world** where it is moral/spatial (0511D *in saeculo*), **the age** where it is
temporal (0518C *saeculi aeternitatem*, *quandiu durat hoc saeculum*) · *regula* = **rule**
(0511C, where the whole gloss is the pun *auream regulam* / LXX *linguam*) · *tubae ductiles* =
**beaten trumpets** (0510D, where *inde duc sensus* puns on it) · *minister* = **minister**
(0507A, so *famulus*/*servus* could not take it).

---

## §1 · THE LEMMA DIVERGENCE TABLE — EVERY SPAN IN `data/briefs/8958-lemmata.txt`

Every italic span in the work, in order, checked against `sources/vulgate/clementine-flat.txt` at
**its own verse**, not merely somewhere in the canon. **The 97 `*usque ad*` spans and the two
`*Et infra:*` / `*(AUG. quaest. …)*` spans are the abridgment formula and Migne's own apparatus,
not scripture, and are not collated** — they are covered by §0(b) and §0(c). What follows is the
remaining population, all of it.

**Legend.** ✅ = agrees with the Clementine at its own verse (spelling and Migne's `Moses`/`Moyses`,
`coelestium`/`caelestium` orthography set aside). ⚠ = diverges, marker fired. ○ = diverges,
marker **declined**, reason given. ◇ = labelled LXX/*alia littera*, §0(d).

### PRAEFATIO — 0505D–0506D

| col | printed | verse | verdict |
|---|---|---|---|
| 0505D | *quod est super omne nomen* | Phlp 2:9 | ✅ verbatim |
| 0505D | *Jesus.* | — | ✅ not a citation; the name under discussion |
| 0505D | *in nomine Jesu omne genu flectitur, coelestium, terrestrium et infernorum.* | Phlp 2:10 | ⚠ **`[var:]`** — Vulg *ut in nomine Jesu omne genu **flectatur*** (purpose + subjunctive); Migne prints an indicative statement and drops *ut*. Rendered "every knee **is bowed**", not "should bow" |

### CAPUT PRIMUM–IV — 0506D–0509A

| col | printed | verse | verdict |
|---|---|---|---|
| 0506D | *Moses servus (ADAMANT.…) Moses famulus meus mortuus est.* | Jos 1:2 | ⚠ **`[var:]`** — Vulg *Moyses **servus** meus mortuus est*. Migne's catchword is *servus*, his quotation *famulus*. **English has no exponent for the pair** (Douay gives "servant" for both), so the marker is the only place the reader can meet it; that is why it fired here rather than being logged silently |
| 0506D | *Surge et transi,* | Jos 1:2 | ✅ (Clementine *surge, et transi*; comma only) |
| 0506D | *Cum venit plenitudo temporis, misit Deus Filium suum factum ex muliere, factum sub lege* | Gal 4:4 | ○ Vulg ***At ubi** venit plenitudo temporis*. A different connective, identical sense. Declined: Pattern 14 fires on sense, not on wording |
| 0506D | *Omnem locum,* | Jos 1:3 | ✅ |
| 0506D | *A deserto et Libano,* | Jos 1:4 | ✅ |
| 0507B | *Libanum,* · *Antilibanum,* | Jos 1:4 / — | ✅ *Libanum* is Jos 1:4; *Antilibanum* is **not** in the Clementine at all and is not meant to be — the gloss's whole point is that the text says one and not the other. No marker: it is the commentator's contrast, not a variant reading |
| 0507B | *Praecepitque Josue.* | Jos 1:10 | ✅ |
| 0507B | *Rubenitis quoque.* | Jos 1:12 | ✅ |
| 0507C | *Misit ergo,* | Jos 2:1 | ○ Vulg *Misit **igitur** Josue*. Synonym, same sense. Declined |
| 0507C | *Ad montana conscendite,* | Jos 2:16 | ✅ |
| 0507C | *Cum videritis arcam testimonii Dei nostri, et sacerdotes, et Levitas portantes eam,* | Jos 3:3 | ⚠ **`[var:]`** — Vulg ***Quando** videritis arcam **foederis Domini Dei vestri**, et sacerdotes **stirpis Leviticae** portantes eam*. Four divergences in one span: *testimonii* for *foederis* (the Old-Latin "ark of the testimony"), *Dei nostri* for *Domini Dei vestri*, *et Levitas* for *stirpis Leviticae*, *Cum* for *Quando*. Material and marked |
| 0507C | *Praecedite populum.* | Jos 3:6 | ✅ |
| 0507C | *Et infra:* | — | Migne's own connective, rendered *And below:* |
| 0508A | *Hodie incipiam exaltare te,* ×2 | Jos 3:7 | ✅ both |
| 0508A | *Exaltavit illum Deus, et donavit illi nomen quod est super omne nomen,* | Phlp 2:9 | ○ Vulg ***Propter quod et Deus** exaltavit illum…* — Migne drops the connective and inverts *Deus exaltavit illum*; the quoted matter is otherwise verbatim and the sense is untouched. Declined |
| 0508B | *Domini Dei vestri,* | Jos 3:9 | ✅ |
| 0508B | *usque ad: qui convertit petram in stagna aquarum, et rupem in fontes,* | Ps 113:8 | ✅ (Migne's *etc.* cuts the second *aquarum*) |
| 0508B | *Chananaeus,* *Hethaeus,* *Hevaeus,* *Pherezaeus,* *Gergesaeus,* *Amorrhaeus,* *Jebusaeus,* | Jos 3:10 | ○ All seven names are the Clementine's own forms. **Migne's ORDER differs** — the Clementine ends *…Jebusaeum, et Amorrhaeum*, Migne ends *Amorrhaeus … Jebusaeus*. Declined: this is a list of etymologies, not a quotation, and no sense turns on the order. Recorded because a reader collating the list will see it |
| 0508B | *Messis impleverat.* | Jos 3:15 | ✅. **Rendered "*[The Jordan] had filled the banks at the time of harvest.*"** — a clipped lemma standing for the whole parenthesis *(Jordanis autem ripas alvei sui **tempore messis** impleverat)*, where the subject is **the Jordan** and *messis* is genitive under *tempore*. ⚠ **Repaired 2026-08-23** (blind-read item 3): the first rendering, "*The harvest had filled the banks.*", supplied the object from the verse but kept *messis* as a nominative subject — which the verse does not license, and which Migne's own next clause contradicts (*tunc autem **ille fluvius** redundat et impletur*). Convention 3 is applied to the phrase the fragment stands for, not to half of it; the supplied subject is bracketed so the reader sees it is ours |
| 0508B | *Sicut in diebus messis tritici.* | — | ◇ labelled `LXX:` by Migne |
| 0508C | *Steterunt aquae descendentes,* | Jos 3:16 | ✅ |
| 0508C | *In aeternum.* | Jos 4:7 | ✅ (*usque in aeternum*) |
| 0508C | *Festinavitque populus et transiit,* | Jos 4:10 | ✅ (comma only) |
| 0508D | *In die illo,* | Jos 4:14 | ✅ |
| 0508D | *Praecipe sacerdotibus.* | Jos 4:16 | ✅ |
| 0508D | *Populus autem.* | Jos 4:19 | ✅ (also Jos 3:17 verbatim; either reading gives the same English) |
| 0509A | *Duodecim quoque,* ×2 | Jos 4:20 | ✅ both |

### CAPUT V–VII — 0509B–0511D

| col | printed | verse | verdict |
|---|---|---|---|
| 0509B | *Circumcide secundo Israel.* | Jos 5:2 | ○ Vulg *circumcide secundo **filios** Israel*. A dropped noun, sense unchanged (Augustine's question is about *secundo*, not about *filios*). Declined |
| 0509B | *Iterum,* | — | ✅ not Vulgate: Augustine is quoting the **LXX's** δεύτερον as a word under discussion. Rendered *Again,* |
| 0509B | *Fac tibi cultros lapideos,* | Jos 5:2 | ✅ |
| 0509B | *Populus autem.* | Jos 5:5 | ✅ |
| 0509C | *Postquam autem.* | Jos 5:8 | ✅ |
| 0509D | *Hodie abstuli opprobrium Aegypti a vobis* | Jos 5:9 | ✅ verbatim. ⚠ **Migne prints no terminal point** and the sentence simply stops; the English stops too (Pattern 8) |
| 0509D · 0510A | *Et fecerunt.* ×2 | Jos 5:10 | ✅. **Rendered "*And they kept the pasch.*"** both times — clipped lemma, object elided; expanded from Migne's own next sentence (*fecerunt filii Israel pascha*), not from the Clementine's *Phase*. See §3 for the rejected alternative |
| 0509D | *Pascha nostrum immolatus est Christus. Itaque festum celebremus diem, non in fermento veteri…* | 1Cor 5:7–8 | ⚠ **`[var:]`** — Vulg *Itaque **epulemur**: non in fermento veteri…*. Migne has *festum celebremus diem*, an Old-Latin form; the rest of the span is verbatim |
| 0510A | *Et comederunt,* | Jos 5:11 | ✅ |
| 0510B | *Et vidit virum.* | Jos 5:13 | ✅ |
| 0510B | *Cecidit Josue pronus,* | Jos 5:15 | ✅ |
| 0510C | *Jericho autem,* | Jos 6:1 | ✅ |
| 0510C | *luna* | — | ✅ an etymology, not a citation. See §2(a) for the broken verb beside it |
| 0510C | *Cumque Josue.* | Jos 6:8 | ✅ |
| 0510C | *Sitque civitas* | Jos 6:17 | ✅. Migne prints no point after *civitas*; the English carries none |
| 0510D | *Igitur.* | Jos 6:20 | ✅ |
| 0510D | *Et clangentibus.* | Jos 6:20 | ✅. **Rendered "*And the trumpets sounding.*"** — clipped lemma, *tubis* elided |
| 0511A | *Mihi autem absit gloriari, nisi in cruce Domini nostri Jesu Christi…* | Gal 6:14 | ✅ **verbatim.** ⚠ Migne cites it `[n: (Gal. V)]`, a chapter short. Rendered as printed; citation repair belongs to `citation-corrections.json` at index time (Ruth precedent) |
| 0511A | *Muri illico.* | Jos 6:20 | ✅. **Rendered "*The walls immediately fell.*"** — clipped, *corruerunt* elided |
| 0511A | *Quod erat contrarium nobis, tulit de medio, affigens illud cruci, et exuens principatus et potestates traduxit libere triumphans eos in ligno crucis* | Col 2:14–15 | ⚠ **`[var:]`, the largest in the work** — Vulg *et ipsum tulit de medio… et **expolians** principatus, et potestates traduxit **confidenter, palam triumphans illos in semetipso***. Migne's *exuens*, *libere*, and above all ***in ligno crucis*** for *in semetipso* are an Old-Latin text, and the gloss's whole argument (the cross as the place of triumph) rests on the last of them |
| 0511B | *Ingressique juvenes eduxerunt* | Jos 6:23 | ✅ |
| 0511B | *Rahab meretricem, et omnem domum patris ejus vivificavit Jesus,* | Jos 6:25 | ○ Vulg *Rahab **vero** meretricem, et domum patris ejus… **fecit Josue vivere***. Migne conflates 6:23 with 6:25, adds *omnem*, and gives *vivificavit* for *fecit vivere*. **Declined**: nothing in the gloss turns on any of the three, and the conflation is visible on the face of the span |
| 0511B | *Iratusque est Dominus,* | Jos 7:1 | ✅ |
| 0511C | *Regulamque.* ×2 | Jos 7:21 | ✅ both. Rendered "*And a rule.*" — a **complete** one-word lemma, nothing elided, so no expansion (the brief's "name the control's class"; contrast *Muri illico.* above). "Rule" is compulsory: the gloss is the pun *quasi auream regulam* |
| 0511C | *Linguam,* | — | ◇ labelled `LXX:` |
| 0511D | *Lapidavitque eum.* | Jos 7:25 | ✅ |

### CAPUT VIII–X — 0512A–0513C

| col | printed | verse | verdict |
|---|---|---|---|
| 0512A | *Dixit autem Dominus,* | Jos 8:1 | ✅ |
| 0512A | *Et fugientes.* | Jos 8:15 | ✅ |
| 0512B | *Igitur omnibus interfectis.* | Jos 8:24 | ✅ |
| 0512B | *Regem.* | Jos 8:29 | ✅ |
| 0512B | *Novissimus inimicus destruetur mors,* | 1Cor 15:26 | ⚠ **`[var:]` — the sharpest divergence in the work.** Vulg *Novissim**a** autem inimic**a** destruetur mors*, feminine, agreeing with *mors*. Migne prints the **masculine**, and the sentence that introduces it is *de diabolo autem ait* — the gender is the whole reason the verse can be applied to the devil. ⚠ **English has no gender exponent**, so the marker is the only place the reader meets the fact the gloss is built on. **Rendered "*The last enemy death shall be destroyed,*"** — repaired 2026-08-23 (blind-read item 2): the first rendering, "*The last enemy that shall be destroyed is death*", supplied a relative clause and a copula Migne does not print, and in doing so **made death the last enemy** in a sentence whose own frame is *de diabolo … ait* — i.e. it contradicted the `[var:]` standing beside it. The control is inside this work: at **0515B** the identical Latin was already rendered literally ("when the last enemy death shall be destroyed"), and per the within-a-work reconciliation rule the drifted site comes into line with the literal one, never the reverse |
| 0512B | *In gemino ligno,* | — | ◇ labelled `LXX:` |
| 0512B | *Tunc aedificavit,* | Jos 8:30 | ✅ |
| 0512C | *Omnis autem.* | Jos 8:33 | ✅. **Rendered "*And all the people.*"** — clipped, *populus* elided |
| 0512C | *Ut advena.* | Jos 8:33 | ✅. Rendered "*As the stranger.*" — kept short: it is usable English as it stands, and the answering *ita et indigena* is supplied by the gloss's own next words (*proselytus et indigena simul*) |
| 0512C | *Post haec legit.* | Jos 8:34 | ✅ |
| 0512C | *usque ad: ut sciamus quae a Deo donata sunt nobis* | 1Cor 2:12 | ✅ **verbatim.** ⚠ Migne cites it `[n: (II Cor. II)]`; it is **I** Cor. 2. Rendered as printed |
| 0512C | *Nihil ex his.* | Jos 8:35 | ✅ |
| 0512D | *Congregati,* | Jos 9:2 | ✅ |
| 0512D | *At hi qui,* | Jos 9:3 | ✅ |
| 0512D | *Juravimus.* | Jos 9:19 | ✅ |
| 0512D | *conteretur Satanas sub pedibus servorum ejus* (unitalicized, but cited `[n: (Rom. XVI)]`) | Rom 16:20 | ⚠ **`[var:]`** — Vulg *Deus autem pacis **conterat Satanam** sub pedibus **vestris velociter***. Migne turns a jussive into a future passive and *your* feet into *his servants'*. Marked although the span is not italic: Pattern 14 attaches to a **scripture citation**, and Migne cites it as one |
| 0513A | *Ascendite ad.* | Jos 10:4 | ○ Vulg *Ad me ascendite*. Word order only; the same three words. Declined. **Rendered "*Come up to me.*"** — "Come up to." is not usable English |
| 0513A | *Congregati igitur,* | Jos 10:5 | ✅ |
| 0513A | *Ascenditque Josue,* | Jos 10:7 | ✅ |
| 0513A | *Fugerant enim quinque reges,* | Jos 10:16 | ✅ in substance (Clementine *Fugerant enim quinque reges, et se absconderant in spelunca*) |
| 0513A | *Vos autem nolite stare.* | Jos 10:19 | ✅ |
| 0513A | *usque ad: quia Dominus Deus tradidit vobis omnes inimicos in manus.* | Jos 10:19 | ○ Vulg *quos tradidit Dominus Deus in manus **vestras***. Same assertion, different construction, and it is a **resumption tail** — Origen's own wording as excerpted, not a lemma Migne sets out as scripture. Marker declined. ⚠ **But the English was repaired 2026-08-23** (blind-read item (c)): it read "hath delivered **all your enemies** into **your hands**", two possessives where Migne prints one dative. **The plate was read and there is no *vestras* on it** — the possessives were reaching for the Clementine, which is a 7a″ conformation of exactly the kind this table exists to prevent. The dative *vobis* licenses "into your hands"; it cannot also possess *omnes inimicos*. Now **"hath delivered all the enemies into your hands"** |

### CAPUT XI–XIII — 0513C–0516B

| col | printed | verse | verdict |
|---|---|---|---|
| 0513C | *Quae cum audisset Jabin,* | Jos 11:1 | ✅ |
| 0513C | *Ne verearis a facie eorum,* | Jos 11:6 | ⚠ **`[var:]`** — Vulg *Ne **timeas eos***. A different verb and a different construction, introduced as the Lord's own speech (*sed Dominus ait*) |
| 0513C | *Cras enim eadem hora.* | Jos 11:6 | ○ Vulg *cras enim **hac** eadem hora*. One dropped demonstrative. Declined |
| 0513D | *Ite in ignem aeternum quem praeparavit Deus diabolo et angelis ejus* | Mt 25:41 | ⚠ **`[var:]`** — Vulg *Discedite a me maledicti in ignem aeternum, **qui paratus est** diabolo, et angelis ejus*. Migne has an imperative *Ite*, and makes God the express agent of the preparing |
| 0513D | *Et omnes,* | Jos 11:12 | ✅ |
| 0514A | *Sicut praeceperat ei Moses,* | Jos 11:12 | ✅ (Migne's *Moses* for *Moyses* throughout; the Clementine continues *famulus Domini*, which Migne's *etc.* cuts) |
| 0514A | *Habent Mosen et prophetas, audiant illos* | Lc 16:29 | ✅ verbatim but for *Mosen*/*Moysen* |
| 0514A | *Misit Deus Filium suum factum ex muliere* | Gal 4:4 | ✅ verbatim |
| 0514A | *Non veni solvere legem, sed adimplere* | Mt 5:17 | ○ Vulg *non veni solvere, sed adimplere* — *legem* is drawn down from the first half of the same verse (*veni solvere legem aut prophetas*). A compression within one verse, not a foreign reading. Declined |
| 0514A | *Sicut praeceperat Dominus Mosi servo suo, ita praecepit Moses.* | Jos 11:15 | ✅ (Clementine continues *…Moyses Josue*; Migne stops, and prints *Mosi*/*Moses* for *Moysi*/*Moyses*) |
| 0514A | *Non fuit.* | Jos 11:19 | ✅ |
| 0514C | *Quievitque.* | Jos 11:23 | ✅. **Rendered "*And the land rested.*"** — clipped, *terra* elided, and the whole gloss is about whose land rests |
| 0515B | *Terraque.* | Jos 13:1 | ✅ |
| 0515B | *Et terra relicta est multa valde.* | — | ◇ labelled *Alia littera* |
| 0515B | *Universique.* | Jos 13:6 | ✅. **Rendered "*And all the Sidonians.*"** — clipped, *Sidonii* elided |
| 0515B | *Et omnes Sidonios ego exterminabo a facie filiorum Israel.* | Jos 13:6 | ○ Vulg *universique Sidonii. **Ego sum qui delebo eos** a facie filiorum Israel*. Migne makes the object explicit and gives a simple future for the periphrasis. Identical assertion. Declined — and note Migne is quoting it precisely to observe that the Sidonians alone are named, which the Clementine also does |
| 0515B | *Laqueos paraverunt pedibus meis* | Ps 56:7 | ○ Vulg *Laque**um** paraverunt pedibus meis*, singular. Declined: a number change with no consequence for the gloss, which reads it of *demons* in the plural either way. **Recorded because it is the kind of single-letter divergence the class exists for** |
| 0515C | *Et nunc.* | Jos 13:7 | ✅ |
| 0515C | *Hi omnes testimonium habentes per fidem nondum consecuti sunt promissiones, Deo pro nobis aliquid melius providente, ne sine nobis consummarentur* | Hbr 11:39–40 | ⚠ **`[var:]`** — Vulg *Et hi omnes **testimonio fidei probati, non acceperunt repromissionem**, Deo pro nobis melius aliquid providente, **ut non** sine nobis consummarentur*. Migne's *testimonium habentes per fidem* and *nondum consecuti sunt promissiones* are a different Latin of the verse, and the passage's argument (the Fathers wait, and still fight for us) is built on *nondum* |
| 0515D | *Ablinget synagoga illa hanc synagogam, sicut ablingit vitulus herbam viridem de campo.* | Nm 22:4 | ⚠ **`[var:]`** — Vulg *Ita delebit hic populus omnes, qui in nostris finibus commorantur, quomodo solet **bos herbas usque ad radices carpere***. Migne's is the LXX text (ἐκλείξει, *lick up*; a *calf*, not an ox) and shares almost no wording with the Clementine. **Migne does not label it**, so §0(d) does not apply |
| 0516A | *Tribui.* | Jos 13:14/33 | ✅ |
| 0516A | *Quia ipse Deus est haereditas eorum.* | Jos 13:33 | ○ Vulg *quoniam Dominus Deus Israel ipse est **possessio** ejus*. *haereditas* for *possessio* and a plural for a singular. Declined: near-synonyms, and *haereditas* is the word the whole chapter uses of everyone else's portion, so Migne's choice is legible without a marker. ⚠ **This is the closest call in §1** — see §3 for why it lost |
| 0516A | *Tribui filiorum Ruben,* | Jos 13:15 | ✅ |
| 0516A | *usque ad: Caecus caeco ducatum praebens in foveam cadet cum eo.* | Mt 15:14 | ⚠ **`[var:]`** — Vulg *caecus autem **si** caeco ducatum **praestet, ambo** in foveam **cadunt***. Migne's participle and above all his ***cadet cum eo*** (singular, "shall fall **with him**") assert something the Vulgate does not: that the guide falls *with* the guided, not that both fall |
| 0516A | *Hanc.* | Jos 13:32 | ✅. **Rendered "*This possession.*"** — clipped, *possessionem* elided |
| 0516B | *usque ad: Jesus et Eleazar simul ad dividendam terram.* | — | Not a Vulgate span: Origen's own summary of Jos 14:1. No marker |

### CAPUT XIV–XVII — 0516B–0519A

| col | printed | verse | verdict |
|---|---|---|---|
| 0516B | *Sorte omnia dividentes,* | Jos 14:2 | ✅ |
| 0516B | *Duabus.* | Jos 14:3 | ✅. **Rendered "*For to two tribes.*"** — clipped, *tribubus* elided |
| 0516B | *Absque.* | Jos 14:3 | ✅. **Rendered "*Except the Levites.*"** — clipped, *Levitis* elided |
| 0516B | *Dominus pars haereditatis,* | Ps 15:5 | ✅ verbatim as far as Migne's *etc.* runs (Vulg continues *meae et calicis mei*). ⚠ Rendered "*The Lord is the portion of the inheritance,*" — **"my" is deliberately NOT supplied**, because Migne's span stops before *meae* |
| 0516B | *Nec acceperunt.* | Jos 14:4 | ✅ |
| 0516B | *Locutus.* | Jos 14:6 | ✅ (Clementine *locutusque est*) |
| 0516B | *Nosti.* | Jos 14:6 | ✅ |
| 0516B | *Sic valens.* | Jos 14:11 | ✅ |
| 0516D | *Da ergo.* | Jos 14:12 | ✅ |
| 0516D | *In quo.* | Jos 14:12 | ✅ |
| 0516D | *Et terra cessavit,* | Jos 14:15 | ○ Vulg *et terra cessavit **a praeliis***; Migne's span stops before it. ✅ as far as it runs |
| 0517A | *quia cessavit terra a bellis.* | Jos 14:15 | ○ Vulg *a **praeliis***. A synonym, and Migne prints *a bellis* twice in the same paragraph (*omnia bella finire*), so it is his own vocabulary. Declined |
| 0517A | *Igitur sors filiorum Judae,* | Jos 15:1 | ✅ |
| 0517A | *Et facti sunt, inquit, fines filiorum tribus Juda secundum plebes eorum a finibus Idumaeae, a deserto Sin ad occidentem.* | Jos 15:1 | ⚠ **`[var:]`** — Vulg *Igitur sors filiorum Judae **per cognationes suas** ista fuit: **a termino Edom, desertum Sin, contra meridiem***. Migne's ***ad occidentem*** where the Vulgate has ***contra meridiem*** is load-bearing: the very next sentence observes that only two of the four quarters are named and that **north and south are passed over in silence** — an observation that is only true of Migne's text |
| 0517A | *et ab oriente mare salsum,* | Jos 15:5 | ○ Vulg *Ab oriente vero **erit initium, mare salsissimum***. Part of the same quotation as the row above, whose marker already carries the class; a second marker four lines later would tell the reader twice. Declined, recorded |
| 0517B | *deserto, inquit, Sin,* | Jos 15:1 | ✅ (the Clementine's *desertum Sin*, re-cased into Migne's sentence) |
| 0517C | *Ecce dedi vobis potestatem calcandi super serpentes et scorpiones,* | Lc 10:19 | ○ Vulg *calcandi **supra** serpentes, et scorpiones*. One preposition, same sense. Declined |
| 0517C | *Fili hominis, in medio scorpionum tu habitas* | Ez 2:6 | ○ Vulg *Tu ergo, fili hominis… **cum scorpionibus habitas***. Migne compresses the verse and gives *in medio scorpionum* for *cum scorpionibus*. Declined: same assertion, and *fili hominis* is genuinely in the verse |
| 0517D | *fons aquae salientis in vitam aeternam,* | Jo 4:14 | ✅ verbatim |
| 0518B | *Caleb vero.* | Jos 15:13 | ✅ |
| 0518B | *Sedens in asino. Cui.* | Jos 15:18 | ○ Vulg *Suspiravitque **ut sedebat** in asino: **cui** Caleb*. Migne's *Sedens* is a participle for the Clementine's clause. Declined: a two-word catchword, not a quotation, and *Cui* is verbatim |
| 0518B | *Jebusaeum autem habitatorem Jerusalem non potuerunt filii Juda delere.* | Jos 15:63 | ✅ **verbatim.** ⚠ Migne cites it `[n: (ADAM., hom. 11 in Jos.)]` — see §2(h) |
| 0518C | *Jebusaeum,* | Jos 15:63 | ✅ |
| 0518C | *Jerusalem* | — | ✅ an etymology (*Visio pacis*), not a citation |
| 0518C | *In praesentem diem,* | Jos 15:63 | ✅ (Clementine *usque in praesentem diem*) |
| 0518C | *Cecidit,* | Jos 16:1 | ✅ (Clementine *Cecidit quoque sors*). **Rendered "*There fell,*"** |
| 0518D | *Habitavitque Chananaeus.* | Jos 16:10 | ✅ |
| 0518D | *fructificatio,* | — | ✅ an etymology of *Ephrem*, not a citation |
| 0518D | *Nec potuerunt.* | Jos 17:12 | ✅ |
| 0519A | *Locutique sunt.* | Jos 17:14 | ✅ |
| 0519A | *Non poterimus ad montana.* | Jos 17:16 | ✅ (Clementine continues *conscendere*, which the lemma clips). **Rendered "*We shall not be able to go up to the mountains.*"** |
| 0519A | *Mittam vobis.* | Jos 18:6 | ✅ (Clementine *mittam vobis hic sortem*). **Rendered "*I will cast lots for you.*"** — clipped, *sortem* elided |

### CAPUT XVIII–XXIV — 0519B–0520D

| col | printed | verse | verdict |
|---|---|---|---|
| 0519B | *Memor esto verborum quae commendo fidelibus hominibus, et his qui idonei sunt alios docere* | 2Tim 2:2 | ⚠ **`[var:]`** — Vulg *et **quae audisti a me per multos testes, haec commenda** fidelibus hominibus, qui idonei **erant et** alios docere*. Migne's opening *Memor esto* is drawn from 2Tim 2:8; the imperative *commenda* has become the indicative *commendo*, so **Paul now commits the words himself** instead of telling Timothy to commit them. Material. ⚠ **The `[var:]` quotation was corrected 2026-08-23** (blind-read item 4): it printed *qui idonei **erunt** et alios docere*, a future. Both Clementine copies on disk — `sources/vulgate/clementine-flat.txt` and `sources/vulgate/clementine/2Tim.lat` — read ***erant***, and a `[var:]` is a public claim about another text, so it must rest on the file it cites. **The other fifteen `[var:]` quotations in this work were each re-checked verbatim against the flat file and are exact.** |
| 0519B | *Filiorum.* | Jos 19:1 | ✅. **Rendered "*Of the children of Simeon.*"** — clipped |
| 0519B | *Cumque.* | Jos 19:49 | ✅ |
| 0519C | *Separate urbes fugitivorum,* | Jos 20:2 | ✅ |
| 0519D | *Accesserunt.* | Jos 21:1 | ✅ (Clementine *Accesseruntque*) |
| 0519D | *Itaque.* | Jos 21:39 | ✅ |
| 0520A | *Deditque Dominus.* | Jos 21:41 | ✅ |
| 0520A | *Nullusque eis.* | Jos 21:42 | ✅. **Rendered "*And none of their enemies durst resist them.*"** — clipped |
| 0520A | *Eodem tempore.* | Jos 22:1 | ✅ |
| 0520B | *Cumque.* | Jos 22:10 | ✅ |
| 0520B | *Multi.* | Jos 22:17 | ✅ (Clementine *multique de populo corruerunt*) |
| 0520B | *Exstructo.* | Jos 22:29 | ✅. **Rendered "*An altar being built.*"** — clipped, *altari* elided |
| 0520B | *Et in sacrificiis salutarium nostrorum.* | Jos 22:29 | ○ Vulg *ad holocausta, et sacrificia, et **victimas offerendas***. Migne's is Augustine's LXX text (*salutaria* = the peace offerings), and the quaestio is expressly about **why the plural is used** — so the divergence is the subject of the note that follows it, and a marker would be a third statement of what the page already makes twice. Declined |
| 0520B | *En ego hodie ingrediar.* | Jos 23:14 | ⚠ **`[var:]`** — Vulg *En ego hodie **ingredior** viam universae terrae*, present. Migne prints the **future**. Augustine's quaestio 24 turns on exactly this word (*ideo et hic ita hoc verbum interpretatum est*), so the tense is the thing being discussed |
| 0520B | *Tuli ergo patrem vestrum.* | Jos 24:3 | ✅ |
| 0520B | *Pugnaverunt.* | Jos 24:11 | ✅ (Clementine *Pugnaveruntque*) |
| 0520B | *Crabrones.* | Jos 24:12 | ✅ |
| 0520B | *Vespas.* | — | ◇ labelled `LXX:` |
| 0520B | *per angelos malos,* | Ps 77:49 | ✅ verbatim |
| 0520D | *Non poteritis.* | Jos 24:19 | ✅ |
| 0520D | *Auferte.* | Jos 24:23 | ✅ |
| 0520D | *usque ad: facie ad faciem cognoscamus eum* | 1Cor 13:12 | ○ Vulg *tunc autem facie ad faciem*, with no verb. Migne's *cognoscamus eum* has no counterpart in the verse — but it lies in a **resumption tail**, i.e. it is Augustine's sentence quoting the phrase, not Migne setting out a lemma. Declined |
| 0520D | *Et disposuit Jesus testamentum,* | Jos 24:25 | ⚠ **`[var:]`** — Vulg *****Percussit** ergo **Josue** in die illo **foedus***. Migne's is the LXX form (διέθετο διαθήκην), and it is the reading the whole final quaestio is about |
| 0520D | *usque ad: sed omnes me dereliquerunt, quod non illis imputetur* | 2Tim 4:16 | ○ Vulg *sed omnes me dereliquerunt: non illis imputetur*. Migne adds a relative *quod* that turns two sentences into one. Declined: a resumption tail again, and the negation is intact and on the same word |

**Totals for §1: 108 substantive spans walked. 74 ✅ · 6 ◇ · 16 ⚠ (marked) · 12 ○ (declined,
reasons above).**

### §1a · Divergences re-raised by the blind read — where each already stands

The blind read reported the divergence list **incomplete** and named six sites. ⚑ **Five of the
six were already in the table above, each as a recorded ○ with its reason; the sixth is not a
divergence at all.** They are gathered here because a reader hunting a particular divergence
should not have to walk 108 rows to learn it was seen, and because the objection is worth
answering in the open rather than silently.

| col | verse | Migne | Clementine | where it already stands |
|---|---|---|---|---|
| 0515B | Jos 13:6 | *Et omnes Sidonios ego exterminabo a facie filiorum Israel* | *Ego sum qui **delebo eos** a facie filiorum Israel* | ○ recorded; declined because the assertion is identical and **both texts name the Sidonians**, which is the thing the gloss turns on — so the gloss's point survives either reading |
| 0515B | Ps 56:7 | ***Laqueos*** (plural) | ***Laqueum*** (singular) | ○ recorded, expressly as "the kind of single-letter divergence the class exists for". **The English renders Migne's plural**, correctly |
| 0517C | Ez 2:6 | *in medio scorpionum tu habitas* | *et **cum scorpionibus** habitas* | ○ recorded; same assertion, and Migne compresses rather than diverges |
| 0513C→0520D | 2 Tim 4:16 | adds *quod* | *non illis imputetur* | ○ recorded **at 0520D**, not 0513C — the span sits in the CAPUT XXIV band. Declined as a resumption tail with the negation intact |
| 0509B | Jos 5:2 | *Circumcide secundo Israel* | *circumcide secundo **filios** Israel* | ○ recorded; a dropped noun, and Augustine's question is about *secundo*, not *filios* |
| 0516B | Jos 14:2 | *Sorte omnia **dividentes*** | *sorte omnia **dividentes*** | ⛔ **NOT a divergence.** The blind read reported "*dividentes* for *dividens*" at 0516C; the Clementine at Jos 14:2 reads *dividentes*, Migne reads *dividentes*, the span sits at **0516B**, and the row above already marks it ✅. Recorded as a rejected finding so it is not raised a third time |

**Nothing in §1 changed as a result of this item.** The five ○ rows keep their declines: each was
declined on the ground that the divergence changes no assertion, and re-reading them against the
flat file did not disturb that. **What the item is right about is findability, and this sub-table
is the fix.**

---

## §2 · THIS BOOK'S OWN CRUCES

### (a) 0510C · *interpetratur* — **WITHDRAWN. The plate reads *interpretatur*.**

The translator read *Jericho* **luna** *interpetratur* in our chunk, judged it a metathesis, and
fired `[sic: *interpetratur*]` — correctly, on the evidence then in hand (**PL 113–114 carry
`interpretatur` in quantity and this was the only `interpetr-` in the work**), and correctly asked
for the plate, because a two-letter transposition is exactly the shape the digitization is known
to produce on its own (the *Nephtlali* case, 8970 @0725C). **The plate was read (p. 260, cols
509/510) and Migne prints *interpretatur*.** The defect was ours. `data/tei-patches/8958.json`
carries the repair, the work was re-chunked, and the English now reads plainly **"Jericho is
interpreted *moon*, etc."** No marker.

### (b) 0514B · *per verse* and *nortales* — **BOTH WITHDRAWN. The plate reads *perverse* and *mortales*.**

Our chunk carried *…tam **per verse** de operibus Dei quam de peccatis hominum judicant… cum casuri
dejiciuntur et **nortales** moriuntur*, and the translator fired a `[sic:]` on each: *per verse*
as a word-division defect of the dangerous class (7a⁗-b, the quarantine the size of the adverb the
correlative *tam … quam* hangs on), *nortales* as a broken *m* in the clause's only subject. **Both
were read at the plate (p. 262, cols 513/514).** Migne prints ***perverse*** — hyphenated across
his line as `per-`/`verse`, which is precisely how the false word-division entered our text — and
he prints ***mortales***, with a sound *m*. Both defects were ours. Patched, re-chunked, and the
English now reads **"judge as perversely of the works of God as of the sins of men"** and **"and
mortals die"** with no markers.

⚑ The `per-|verse` case is worth keeping: **a line-break hyphen swallowed in transcription looks
exactly like split type**, and it is the one `[sic:]` shape in this work that no corpus-frequency
argument could have caught, because *per* and *verse* are both real words.

### (c) 0511D · *Quaeritur* **eum** *Dominus…* — **WITHDRAWN. The plate reads *cum*. ⭐ And this is the work's best argument for declining a conjecture.**

Our chunk printed *eum* twice: *Quaeritur **eum** Dominus eum qui furtum fecerat, etc.* The second
*eum* is the object of the abridged sentence (Achan) and construes; **the first had no grammatical
slot at all**, since *quaeritur* is impersonal and governs nothing in the accusative. The
translator carried it under Pattern 12 and marked it `[sic: *eum*]`.

**The plate (p. 261, cols 511/512) reads *cum*.** Migne's line is *Quaeritur **cum** Dominus eum
qui furtum fecerat, etc., usque ad peccato suo secum consumptis mori* — an ordinary causal *cum*,
and with it the sentence construes on the first reading. Patched, re-chunked; the English now
runs **"It is asked, since the Lord him who had committed the theft, etc."**, which is the same
idiom this work already uses for *Quaeritur cum* at 0520A (*"It is asked, since Israel not only
unto the day of the death of Jesus, etc."*), and no verb is supplied — the abridgment cut it, per
§0(b).

⭐ **THE POINT, AND IT IS THE METHODOLOGICAL FINDING OF THE WORK.** The translator weighed a
conjecture — *Quaeritur **cur*** — named it in this crux, and **declined to fire a `[cj:]` on it**,
on the reasoning that Pattern 18's bar is a printed word that makes the sentence assert something
*false*, whereas this sentence asserted nothing at all. **That decline was right, and the
conjecture it declined was wrong.** *cur* was a good guess — every other Augustinian excerpt in
the work opens *Quaeritur cur / quomodo / utrum* (0507B, 0509B, 0512A, 0513A, 0514B, 0520A), and
the argument for it was as strong as such arguments get. The plate gives *cum*. **Had the `[cj:]`
fired, this apparatus would now be printing, in our own voice, a reading Migne does not have and
never had.** This is the case for declining rather than guessing, stated from the one direction
that settles it: not that the guess was weak, but that a strong guess still lost to a plate.

### (d) 0511A · *si non modo blandus remissionem, modo truculentus iracundia* — a case that will not pair

*remissionem* is accusative; the answering *iracundia* is ablative; there is no verb in either
member. The construction the sentence's own parallel demands is an instrumental, and English
cannot leave an accusative floating. **Rendered "and if thou be not now bland, [offering]
remission, now truculent with wrath"** — the supplied word is bracketed, per corpus practice for
supplied English, so the reader can see it is ours. **No case was silently changed and no `[sic:]`
was fired**: *remissionem* is a perfectly good form, it is only unpaired.

### (e) 0514C · *aut certe nulla earum capta, sed earum quae in regionibus supra memoratis fuerunt* — elliptical, and the ellipsis decides the sense

Two constructions are possible and they say opposite things. **The one taken**: *nulla earum
[capta est], sed earum quae…* — "none of them was taken, but [only] those which were in the
regions mentioned above" — i.e. Augustine restricts the scope of Jos 11:19's conclusion. **The one
rejected**: *nulla earum capta* as an ablative absolute ("none of them being taken"), which is
grammatically available but leaves the genitive *earum quae…* in the *sed* clause with nothing to
depend on. The following sentence settles it: *Enumeratae sunt enim regiones in quibus fuerunt
civitates de quibus facta est ista conclusio, et omnes cepit bello* — the conclusion is **about**
the cities of the enumerated regions, and all of *those* he took. Nothing was supplied in the
English beyond the copula.

### (f) 0519C · *et sunt alia quae nos, si ignoranter admittimus, decernitur nobis…* — a relative with no verb

*quae nos* opens a relative clause that never receives a predicate; the sentence then restarts
impersonally with *decernitur nobis*. Rendered as printed — **"and there are others which, if we
admit them unknowingly, there is decreed for us, I believe, and prepared by the commandment of
God, some place…"** — and **no verb supplied**. This is Migne's anacoluthon, not the abridgment's:
there is no *usque ad* anywhere in the paragraph.

### (g) 0514D–0515A · *in supercilio Sodomorum quos interfecit Chodorlaomor* — an ambiguity kept, and named

*quos* is masculine plural and can attach either to *Sodomorum* or to the *gigantes* two words
earlier. **Gn 14:5 settles the fact** — Chodorlahomor smote the *Raphaim in Astarothcarnaim*, the
giants, not the Sodomites — but **Latin and English are ambiguous in exactly the same way**, so
the English keeps the ambiguity ("upon the brow of the Sodomites whom Chodorlaomor slew") and
nothing is resolved in the running text. Recorded so a reader knows it was seen.

⚠ **Re-raised by the blind read (item (e)) and re-affirmed, with one correction to the record.**
The objection was that English word order *does* force a choice the Latin leaves open, because
"the Sodomites **whom** Chodorlaomor slew" binds the relative to the nearest noun, whereas Gn 14:5
has him smiting the **giants**. That is true, and it is the reason this entry exists; but the
remedy — rewriting to bind *quos* to *gigantum* — would force the *other* choice just as hard, and
in the author's voice. **English cannot host this ambiguity, so the only honest options are to
pick one and say so, or to pick one and say so.** The picked reading is Jerome's word order; the
fact that Genesis is against it is stated here, which is where a reader can act on it. **No
edit.**

### (h) Migne's own apparatus is not tidied

- **0513C** attributes the CAPUT XI opening to `ADAMANT., hom. **24** in Jos.` and then the very
  next gloss to `ADAMAN., hom. **14** in Jos.` — the homily numbers run backwards across two
  adjacent paragraphs, and hom. 24 turns up again at 0519B where it belongs. Reproduced as
  printed; never reordered.
- **0518B** attributes Jos 15:63 to `ADAM., hom. **11** in Jos.` in the middle of the hom. 20
  sequence.
- **0519A** prints `[n: (ADAM., **nom.** 22.)]` for *hom.* — inside an `[n:]`, which passes through
  verbatim by the locked register. No `[sic:]` is stacked on a note.
- **0520B** prints `[n: (AUG., **quaest** 27.)]`, the point dropped. Same treatment.
- **0509B, 0509B, 0520A** print `in **Job.**` for *in Jos.* three times (`AUG., quaest. 6. in
  Job.`; `ISID. in Job.`; `ADAMAN., hom. 26 in **Job.**`). Verbatim.
- **0511A** cites Gal 6:14 as `(Gal. V)`; **0512C** cites 1 Cor 2:12 as `(II Cor. II)`; **0509D**
  cites 1 Cor 5:7–8 as `(I Cr. XVI)`. All rendered as printed. Citation repair belongs to
  `data/citation-corrections.json` at index time — the standing rule, and this book gives three
  clean instances of it.

### (i) Sentences Migne leaves without a terminal point — four, all preserved

0509A (*…ut multas perfectiones ad unum diem pendere significent*), 0509D (*…opprobrium Aegypti a
vobis*), 0510C (*Sitque civitas*), 0519A (*…quae est figura coelestis*), 0520B (*Solus enim
Salvator est ipse*). Pattern 8: never supply. The English stops where he stops.

### (k) 0507A · *Et factus est Christi minister circumcisionis* — a genitive, rendered as a genitive, with the conjecture beside it. **The work's only `[cj:]`**

Migne prints *Et factus est **Christi** minister circumcisionis ad confirmandas promissiones
Patrum*, and the subject carried down from the preceding sentence is ***Jesus Filius Dei***
(*Vide quomodo minister fuerit Mosi Jesus Filius Dei*). *Christi* is genitive. **The English read
"And Christ was made a minister of the circumcision"** — which is smooth, and is the received
English of Rom 15:8, and is only available by silently emending the printed genitive to a
nominative. It is also inconsistent within its own sentence: nine words earlier the identical
*minister **Mosi*** is correctly "the minister **of Moses**".

**Repaired 2026-08-23** (blind-read item 1). Pattern 7 settles the text: the printed genitive is
rendered as a genitive — **"And he was made Christ's minister of the circumcision, to confirm the
promises of the Fathers."**

⚑ **And a `[cj:]` was fired, which is the judgment call this crux exists to record.** Pattern 18's
bar is that the printed word is a *real form* and the faithful English then *asserts something the
author did not* — and both halves are met here as cleanly as anywhere in the corpus. *Christi* is
a perfectly good genitive, so Pattern 12 has nothing to wrap; and the faithful English makes **the
Son his own minister**, which is not what Origen is saying and not what the verse he is quoting
says. Rom 15:8 prints *Dico enim **Christum Jesum ministrum fuisse** circumcisionis… ad
confirmandas promissiones patrum* — verbatim in its second half with Migne's line, which is the
warrant that *Christus* (or *Christum*) is what the sentence was built out of. The English
therefore reads:

`And he was made Christ's [cj: *Christi*; read *Christus*, "Christ was made a minister"] minister
of the circumcision`

The gloss is additive: Migne's word keeps its English, our conjecture stands beside it, and
`verify-english` confirms *Christi* appears verbatim in the Latin twin — the check that makes it
impossible to gloss a word the plate does not carry. **Contrast §2(c), where a `[cj:]` was
declined and the decline was vindicated by the plate.** The difference is not confidence: it is
that at 0511D the printed word asserted *nothing*, while here it asserts something false about the
Son.

### (l) 0515D · *Sicut umbrae exemplari deserviunt coelestium* — two parses, one taken, the rival named

Migne prints *Sicut **umbrae exemplari deserviunt** coelestium, etc.* Two readings are available
and the English took one silently. It is named here because the crux must carry the rival.

- **Taken:** *umbrae* nominative plural, subject; *exemplari* dative under *deservire*;
  *coelestium* genitive under *exemplari*. → **"As shadows serve for a pattern of heavenly
  things"** — a general simile.
- **The rival:** Hbr 8:5 reads *qui **exemplari, et umbrae deserviunt caelestium***, where
  *exemplari* and *umbrae* are **both datives** under *deservire* — "who serve the pattern and the
  shadow of heavenly things." Migne's line is that clause with *et* dropped and the two words
  swapped, which is exactly what an abridger's eye produces.

**Why the rival lost, and it lost narrowly.** Under the dative reading the sentence has no
subject at all — Migne's *Sicut* clause would need one supplied, and §0(b)'s rule against supplying
into an abridged span is the strictest rule in this work. Under the nominative reading every word
has a slot as printed. **What the reading costs is real and is recorded**: it dissolves a verbatim
scriptural allusion into a general simile, and a reader who knows Hbr 8:5 will hear the loss.
No marker: `[var:]` fires on a divergence in a **quoted** scripture, and Migne does not set this
out as a lemma — he writes it into his own sentence.

### (m) 0512B · *pro palma victoriae et virtutis merito coronari* — an ablative that can go two ways

**Taken:** *pro palma victoriae* as a prepositional phrase, *virtutis merito* as a bare instrumental
ablative coordinated with it → **"to be crowned for the palm of victory and by the merit of
virtue."** **The rival, which is the cleaner Latin:** *victoriae et virtutis* as twin genitives both
under *palma*, and *merito* as the common adverb → *"deservedly to be crowned for the palm of
victory and virtue."* Named and not adopted: it is a resumption tail (*usque ad*), the choice
changes no assertion the gloss makes, and the reading taken keeps every word in the case Migne
prints it in. **A reader collating the tail should know the sentence does not decide between
them.**

### (j) 0517B · *ab Africa* beside *Africum* — rendered literally, both

*Hi sunt fines eorum **ab Africa*** … *in occidentis partibus **Africum** Aegyptum et occasum
nominat.* The second is the south-west wind used as a quarter of the compass (*Africus*); the
first is the ablative of *Africa*, the country. Reading *ab Africo* for *ab Africa* would make the
two agree and is very likely right — **and it is exactly the silent repair Pattern 7 forbids.**
Rendered "from Africa" and "Africus" respectively, unharmonized, and logged here.

---

## §3 · CANDIDATES REJECTED, WITH THE REASON, AND WHICH READING LOST

- ***Et fecerunt.*** → **"And they made."** — rejected. A transitive verb with no object is not
  usable English, and convention 3 governs a clipped lemma. The expansion takes ***pascha* from
  Migne's own next sentence** (*fecerunt filii Israel pascha*), **not** the Clementine's *Phase* at
  Jos 5:10 — which is the whole point of the Ruth ruling that an expansion supplies Migne's printed
  verse and not a foreign one. Both occurrences (0509D, 0510A) render identically.
- ***Regulamque.*** → **"And a golden rule."** — rejected. *Regulamque* is a **complete** word with
  nothing elided; expanding it from *auream* would manufacture the inconsistency the brief warns
  about against the genuinely clipped lemmata beside it (*Muri illico.*, *Omnis autem.*). "And a
  rule." stands, and *rule* is compulsory because the gloss is the pun.
- ***Quia ipse Deus est haereditas eorum.*** → `[var:]` — rejected, and this was the closest call
  in §1. The Vulgate's *possessio* and Migne's *haereditas* are near-synonyms; the sense the gloss
  builds (*horum haereditas ipse Dominus est*) is the same under either. A marker would have fired
  on vocabulary rather than on assertion, which is Pattern 14's own boundary.
- ***Novissimus inimicus*** forced to show the masculine in English ("the last enemy, he shall be
  destroyed, death") — rejected. That is not English, and it would have *looked* like our error
  rather than his reading. **The `[var:]` is what carries the gender**, and it is why the marker
  fired on a divergence English cannot show. ⚠ **But the received-text cadence was ALSO rejected,
  on the second pass**: "The last enemy that shall be destroyed is death" supplies a relative and a
  copula Migne does not print and reverses the gloss's own claim. The rendering is the literal one
  the work already used at 0515B — see the 0512B row in §1.
- ***Ne verearis a facie eorum*** rendered with a familiar "Fear not" cadence — kept, but the
  cadence is the *literal* rendering of *Ne verearis*, not a conformation; the divergence from
  *Ne timeas eos* is marked, so the reader is not left with the familiar verse only.
- ***et ab oriente mare salsum*** → a second `[var:]` — rejected. It belongs to the same quotation
  as the *ad occidentem* marker eleven words earlier, and Pattern 14 annotates a divergence, not
  every word of it.
- ***conteretur Satanas*** → declined because it is unitalicized — rejected. Migne attaches
  `[n: (Rom. XVI)]` to it, which makes it a scripture citation on the face of the page; italics are
  a typographic accident of the resumption tail. Marker fired.
- ***usque ad*** tails given a supplied verb — rejected everywhere, four sites named in §0(b).
  The *ferias* defect in Judith is exactly what that temptation produces.
- **A `[cj:]` on 0511D's *eum*** — rejected, **and the plate has since proved the decline right and
  the declined conjecture (*cur*) wrong: Migne reads *cum*.** §2(c). This is the entry to cite the
  next time a conjecture looks unarguable.
- **A `[cj:]` on 0507A's *Christi*** — **FIRED**, and it is the only `[cj:]` in the work. §2(k).
- **The dative reading of 0515D's *umbrae*** — weighed and not adopted; §2(l) carries the rival.
- **Re-parsing 0512B's *merito* as an adverb** — weighed and not adopted; §2(m).
- **A `[sic:]` on *ab Africa*** — rejected; §2(j). It is a real word in a real form.
- **Migne's homily numbers reordered to run forwards** — rejected. §2(h); his ordering is his.

---

## §4 · SECTIONS READ CLEAN, BY COLUMN BAND

Read a second time against the Latin with the counts already known clean, asking only *does it
assert what he asserts* (the brief's fourth test). **Nothing found in:**

- **0505D–0506D** the whole PRAEFATIO (Jerome's headnote and Adamantius hom. 1).
- **0507A–0507C** CAPUT PRIMUM and CAPUT II entire.
- **0508A–0509A** CAPUT III and CAPUT IV entire, including the seven etymologies at 0508B and the
  two direct questions at 0508C, whose marks Migne prints and the English keeps.
- **0509B–0509C** CAPUT V through VERS. 8.
- **0510A–0510B** the Isidore and Justin paragraphs.
- **0510C–0511B** CAPUT VI entire, including the long second-person chain at 0510D–0511A with its
  five negatives (each named to its host: *separes*, the *aliquando…aliquando* pair, the unpaired
  *blandus/truculentus* member of §2(d), *concupiscat*).
- **0511C** the *lingua aurea* gloss.
- **0512A–0512D** CAPUT VIII and CAPUT IX entire.
- **0513A–0513C** CAPUT X entire.
- **0513D–0514A** CAPUT XI through VERS. 12.
- **0514C–0515A** CAPUT XI's close and CAPUT XII entire (Jerome's gazetteer).
- **0515B–0516B** CAPUT XIII entire.
- **0516C–0517A** CAPUT XIV entire.
- **0517A–0518A** CAPUT XV's long boundary excursus — the densest prose in the work, read twice.
- **0518B–0518D** CAPUT XV's close and CAPUT XVI entire.
- **0519A** CAPUT XVII entire.
- **0519B–0520D** CAPUT XVIII through CAPUT XXIV entire.

### The five tests, as run

1. **`[sic:]` swallowing** — all four markers stripped and the remainder read aloud. Each leaves a
   clause with its verb, its object and its force: *interpreted*, *perversely*, *mortals*, and at
   0511D a clause whose object (*eum qui furtum fecerat*) is outside the quarantine. The fourth
   question — *does the clause still have the thing it acts on* — was asked at every site.
   ⭐ **This test is now retired for this work, because all four markers are gone**: the plate read
   *interpretatur*, *cum*, *perverse*, *mortales*, and the English says exactly those things with
   nothing quarantined. §5. ⚑ Worth noticing that the test **passed** at all four sites — the
   swallow test proves a marker is safely placed, not that it is deserved, and nothing short of the
   plate could have told the difference.
2. **Negatives named to their host** — every `non · nec · neque · nisi · ne · nullus · nihil ·
   nemo · nunquam` in all six chunks was located and its single host word named. **Nine sites fired
   2a's trigger condition** (a negative with a quantifier or correlative adjacent) and each was
   proved from the sentence's own structure, not from what read well: 0507A *non solum … sed*
   (→ *haeres*), 0509C *non filium Nave … sed Jesum* (→ *filium Nave*), 0512A *non tam auctor …
   quam minister* (→ *auctor*), 0513C *hodie **omnes** illos **non** possumus opprimere* (→ scope
   over *omnes*, proved by the answering *in crastino perimentur*), 0514B *nullum vivum … dimisit*,
   0514B *nec … nec … **omnes omnino** … capere potuerint* (→ scope over *omnes omnino*, proved by
   the two answers Augustine then gives), 0514C *Non sub Jesu … sed sub Jesu Christo* (→ *sub Jesu
   filio Nave*), 0518C *sed **non omnes** simul ejici possunt* (→ *omnes*), 0519C ***non omnes**
   homicidae … sed qui ignoranter* (→ *omnes homicidae*, proved by the `sed`), 0520C *non omnia quae
   facta sunt esse scripta* (→ *omnia*).
3. **Column anchors** — 57 anchors checked against **the word each stands beside in the Latin**,
   not merely for presence and order. Two are deliberately split mid-construction to match Migne:
   `*usque [0511C] ad*` → `*as far [0511C] as*`, and `*Dominus [0516C] pars haereditatis,*` →
   `*The Lord [0516C] is the portion of the inheritance,*`. Two more sit inside a parenthesis or an
   italic span and keep their place there (0507A, 0513B).
4. **Punctuation compared band by band**, never by total, using the anchors as the partition:
   colons, semicolons, question marks and guillemets, across all 63 bands of the work. **Zero
   mismatched bands, with three accounted exceptions**, all of them Pattern 8b: 0509B twice
   (*Quaeritur cur dixerit… ?* → "It is asked: why did he say…?" and *Dicant Judaei quomodo… ?* →
   "Let the Jews say: how can any man…?") and 0514B once (*Quaeritur quomodo hoc verum sit… ?* →
   "It is asked: how is this true…?"). Each adds exactly one colon and **preserves the question
   mark Migne prints**, which is what 8b exists to do. **Question-mark parity is exact**: 2·2·2·1·1·0
   across the six chunks, matching the Latin twins.
5. **The fourth test**, run last — see §4's band list. The passages re-read hardest were 0511A
   (the negative chain), 0514C (§2(e)), 0517A–0518A (the boundary excursus, where every direction of
   the compass had to be checked against the sentence that comments on it), and 0512B (where the
   English cannot show the gender the argument turns on, which is why the marker is there).

### The unexpressed subject — every supplied pronoun named

- **0510B** *Aliquando etiam Magistrum militiae **se dicit*** → "he calls himself" = **the rational
  power** begotten out of God, the subject of the whole Justin paragraph, not God the Father.
- **0510B** *utrum angelo **se prostraverit**…* → "he" = **Josue**, from the lemma *Cecidit Josue
  pronus* immediately above.
- **0513D** *…et **ipso jubente** jugulandae* → "at his own bidding" = **Christ**, named in the
  same clause (*quae est Christus*).
- **0518D** ***Subjecit** Chananaeos filiis Ephrem* → "He subjected" = **God**, the agent of the
  whole hom. 21 excerpt; the alternative (Ephraim, or Josue) is excluded because the verse being
  glossed says the Chanaanite was *not* subdued by Ephraim.
- **0520B** *…**fit ergo unus grex**…* → no subject supplied; the impersonal is kept impersonal.
- **0516A** *et omnibus praeclaris virtutibus **excolunt*** → object elided; supplied as bracketed
  **"[it]"**, referring to *mentem suam* four words earlier.
- **0517D** *sanctorum tantum **efficitur*** → predicate elided; supplied as bracketed **"[the
  city]"**, from *civitas Dei est* in the next clause.

---

## §5 · PLATE READS — SIX REQUESTED, SIX RUN, ALL SIX RESOLVED

`PDF page = (column + 11) / 2`, `raw/scans/pl113/patrologiaecurs04migngoog.pdf` (verified for this
volume against the printed corner numbers).

| col | page | what was asked | what the plate says | outcome |
|---|---|---|---|---|
| 0510C | 260 | *interpetratur* — Migne's metathesis or the digitization's? §2(a) | **interpretatur** | ⚠ **patched**; `[sic:]` withdrawn |
| 0511D | 261 | is the first *eum* on the plate, or is it *cur*? §2(c) | **cum** — neither | ⚠ **patched**; `[sic:]` withdrawn, and the declined *cur* refuted |
| 0514B | 262 | *per verse* — split type? §2(b) | **per-\|verse**, Migne's own line-break hyphen | ⚠ **patched**; `[sic:]` withdrawn |
| 0514B | 262 | *nortales* — broken *m*? §2(b) | **mortales** | ⚠ **patched**; `[sic:]` withdrawn |
| 0513B | 261 | *credulitatem* — or *crudelitatem*, given *crudelitas* two columns on? §6(a) | **creduli-\|tatem**, as our file has it | ✅ **checked negative**; no change |
| 0514C | 262 | *nulla earum capta* — is our text the plate's, given *et omnes cepit bello* four lines on? §6(b) | exactly our text | ✅ **checked negative**; no change |
| 0513B | 261 | *in manus* — does the plate carry *vestras*? §6(c) | **no *vestras*** | ⚠ **English repaired** (no patch: our Latin was right) |

⭐ **Four patches out of seven reads, and every patch went against OUR TRANSCRIPTION rather than
against Migne.** No `[sic:]` survives in this work. See the headline note at the top of this file.

⚑ The two checked negatives are recorded because a negative plate read is evidence too, and
because in both cases **the argument for a defect was good and the plate said otherwise** — which
is the same lesson as 0511D from the other side.

**Plate-notes status for this work remains `"spot"`, checked zero** (p. 258, the Judges/Josue
division, which falls mid-page, and p. 262). The four patch reads and the three checks above were
targeted line reads, not a foot-of-page sweep, and **do not upgrade the coverage.** There are
therefore **no `[cn:]` markers in this work and none were expected.** ⚑ That is a checked zero on
two pages, **not** a claim that the work has no foot-of-page notes anywhere.

---

## §6 · CHECKED NEGATIVES — arguments for a defect that the plate refused

Three sites were argued for repair, the argument was good in each, and the plate said otherwise.
They are recorded because a negative read is evidence, and because an unrecorded negative gets
re-argued.

### (a) 0513B · *credulitatem* — the plate prints *creduli-|tatem*. **No change.**

*Jesus interficit inimicos non **credulitatem** docens* → "Jesus slays the enemies, not teaching
credulity." The objection was that *crudelitatem* would read more naturally in a work whose own
*crudelitas*/*crudelem* sits two columns away at 0514B (*Non putanda est **crudelitas***… *ipsum
Deum fuisse **crudelem***), and that *credulitas*/*crudelitas* is a classic single-transposition
confusion. ⭐ **The objection also said, correctly, that corpus frequency could not settle it and
that the plate was required.** That was the right instinct and it is the reason this entry is a
clean negative rather than a silent emendation: **the plate (p. 261) prints *creduli-|tatem*,
hyphenated across Migne's line, exactly as our file has it.** The English stands.

### (b) 0514C · *aut certe nulla earum capta* — the plate prints exactly our text. **No change.**

The objection was that *nulla earum capta* ("none of them was taken") contradicts *et omnes cepit
bello* four lines on. **The plate (p. 262) prints our text without variation.** The apparent
contradiction is **Migne's own ellipsis**, and §2(e) already resolves it: *nulla earum [capta est],
sed earum quae in regionibus supra memoratis fuerunt* restricts the scope of Jos 11:19's
conclusion, and the *omnes* four lines on is of the cities **within** that restricted scope. The
sentence is elliptical, not corrupt.

### (c) 0513B · *tradidit vobis omnes inimicos in manus* — the plate carries **no *vestras***. ⚠ This one WAS a defect, and it was ours.

The read was requested to test the opposite hypothesis — that Migne printed *in manus vestras* and
we had dropped it. **He did not: the plate (p. 261) reads *in manus*, bare.** Which means the
English's two possessives ("all **your** enemies into **your** hands") were not recovering a
dropped word but reaching for the Clementine's *in manus **vestras*** at Jos 10:19 — a 7a″
conformation. Repaired; see the 0513A row in §1. **A negative read that convicts our English
instead of our Latin is the most useful shape a plate read has.**

---

## §7 · THE BLIND READ — what an independent reader found, and what was done

An independent reader who had not seen this file read the six chunks against the Latin twins.
**Six findings and five raised items. Six sites were repaired, three were affirmed as they stood
with the rival named, one raised item was rejected as a non-divergence, and one was refuted by the
plate before it could be applied.**

### Repaired

| # | col | what was wrong | what it is now |
|---|---|---|---|
| 1 | 0507A | *Christi* (genitive) silently read as a nominative — "Christ was made a minister" — smooth, and the received English of Rom 15:8, but only available by emending the plate; the identical *minister **Mosi*** nine words earlier was correctly a genitive | "And he was made **Christ's** minister of the circumcision", plus the work's only `[cj:]`. §2(k) |
| 2 | 0512B | 1 Cor 15:26 conformed to the AV/Douay cadence — a supplied relative and copula that **made death the last enemy**, in a sentence framed *de diabolo … ait*, contradicting the `[var:]` beside it. **The control was inside the work**: 0515B renders the identical Latin literally | "*The last enemy death shall be destroyed,*" — brought into line with 0515B, per the within-a-work reconciliation rule. §1 |
| 3 | 0508B | *Messis impleverat.* half-expanded: the object was supplied from Jos 3:15 but *messis* was kept as nominative subject, which the verse does not license and Migne's next clause (*tunc autem **ille fluvius** redundat*) contradicts | "*[The Jordan] had filled the banks at the time of harvest.*" — convention 3 applied to the whole phrase. §1 |
| 4 | 0519B | a `[var:]` misquoted the Clementine: *qui idonei **erunt*** where both copies on disk read ***erant*** | corrected to *erant*. **The other fifteen `[var:]` quotations were re-checked verbatim and are exact.** §1 |
| 5 | 0510D | "out of **the holy Scriptures**" — Pattern 3 wants both words capitalized, and the in-work control at 0517A ("the custom of Holy Scripture") was already right | "out of the **Holy Scriptures**" |
| (c) | 0513B | two supplied possessives pointing at the Clementine, not the plate | "hath delivered **all the enemies** into your hands". §6(c) |
| (f) | 0509B, 0510C | two stumps left un-English — "But after." and "And when Josue." — the same class as Ruth's *Non te.*, which this work expands well and often elsewhere (*Muri illico.* → "The walls immediately fell") | expanded from the verses they open: **"*But after all were circumcised.*"** (Jos 5:8 *Postquam autem omnes circumcisi sunt*) and **"*And when Josue had ended his words.*"** (Jos 6:8 *Cumque Josue verba finisset*). ⛔ The one-word lemmata (*Igitur.*, *Multi.*, *Itaque.*, *Nosti.*, *Absque.*) were **not** touched — different class, nothing elided |

### Affirmed, with the rival now on the record

- **(6) 0515D *umbrae*** — both parses are real; the nominative reading was kept because the dative
  reading has no subject and §0(b) forbids supplying one into an abridged span. The rival, and
  what the choice costs (a verbatim Hbr 8:5 allusion dissolved into a simile), is now named. §2(l)
- **(e) 0512B *merito*** — the twin-genitive/adverbial parse is the cleaner Latin and is named; not
  adopted, because it changes no assertion and the reading taken keeps every word in its printed
  case. §2(m)
- **(e) 0514D *quos*** — re-affirmed. English cannot host the ambiguity; the reading taken is
  Jerome's word order, and Gn 14:5's evidence for the *giants* is stated where a reader can act on
  it. §2(g)

### Rejected

- **(d) Jos 14:2 "*dividentes* for *dividens*" at 0516C** — there is no such divergence. The
  Clementine reads *dividentes*, Migne reads *dividentes*, and the span is at 0516B. §1a
- **(d) "the divergence list is incomplete"** — the other five sites named were **already in §1**,
  each as a recorded ○ with its reason. The complaint that stands is findability, and §1a is the
  answer to it.

### Affirmed by the blind read and left alone

- ***Jesus* / *Josue* preserved 1:1 throughout**, and the typological argument with it. §0(a). **Not
  harmonized in either direction, and not to be.**
- All **57 column anchors** present, in order, and checked against the word each stands beside.
- Punctuation at band-by-band parity, with three `+1` colons all licensed by Pattern 8b.
- Every printed negative located on its correct host, including *confugiunt **non omnes**
  homicidae, **sed** qui…* at 0519C.
- Nm 22:4's Old-Latin *ablinget … vitulus* rendered "the **calf** licks up" against the Vulgate's
  *bos*.
