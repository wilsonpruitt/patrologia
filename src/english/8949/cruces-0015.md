# 8949 *Liber Exodus* — cruces, chunks 0015–0019 (bands 0221B–0234D)

Stint: CAPUT XII (cont.) – CAPUT XV — the departure from Ramesse, the Red Sea, and the canticle of
Moses. **All seven leaves of the range (Gallica f111–f117 = cols 221–234) were read at the plate,
both columns, corner numbers first, before anything below was written.** No column in this range had
been read during prep.

## §1 · Span count against the brief — 143 against 143, EXACT

`data/briefs/8949-lemmata-0015.txt` declares **143** marked spans for chunks 0015–0019. Counted in my
own Latin: **143 line-bounded, 143 paragraph-bounded** — the two agree. The agreement is not the false
kind the brief warns of: this range contains **0 `«` and 0 `»`**, so there is no unmatched delimiter that
could let two counting errors cancel. Per chunk: 0015 = 28 · 0016 = 31 · 0017 = 34 · 0018 = 35 · 0019 = 15.

## §2 · Marker tally

| marker | count | columns |
|---|---|---|
| `[var:]` | **33** | 0221C · 0223A · 0223D ×2 · 0224B ×2 · 0224C · 0224D · 0225B ×2 · 0225C · 0226A · 0227A ×2 · 0227C · 0227D ×2 · 0228A · 0228B · 0228C · 0229C · 0230A · 0230B · 0230C · 0230D ×2 · 0231B · 0231D · 0232A · 0233B · 0234A ×2 · 0234D |
| `[sic:]` | **1** | 0225A (`ververba`) |
| `[cj:]` | 0 | — |
| `[d:]` | 0 | — |
| `[ed:]` | 0 | — |

Every column carrying a marker was read at the plate. See `data/briefs/8949-PLATE-READS-0015.json`.

Four further candidate defects proved to be **ours, not Migne's**, and are filed as pending TEI
patches (`data/briefs/8949-PENDING-TEI-PATCHES-0015.md`): `miqui`, `id est.`, `scili cet`, `6 n Exod.`

## §3 · The one `[sic:]` — 0225A, `ververba`

Our twin prints `Quomodo autem sunt accipienda haec ververba, [0225A] cum viderint postea Israelitae
Aegyptios?` — and this one is **Migne's**, not ours, which is the opposite of what this book's four
previous candidates turned out to be.

- Gallica **f112**, printed corners **223 / 224**, right column, **last line of 0224D**:
  `Quomodo autem sunt accipienda haec ver-` — hyphenated at the foot of the column.
- Gallica **f113**, corners **225 / 226**, left column, **first line of 0225A**: `verba, cum viderint
  postea Israelitae Aegyptios? An`.
- The archive copy agrees independently (`patrologiaecurs04migngoog_djvu.txt` ll. 17226 / 17238:
  `hæc ver-` … `Terba, cam viderint`).

So the compositor set the catch-fragment `ver-` at the foot of one column and then **reset the whole
word** at the head of the next. Read through, the plate says *haec ververba*. Two independent witnesses,
both clean, both showing the doubling; it is not the class CLAUDE.md warns about (a hyphen at a break
that our transcription lost), because here our transcription has exactly what both plates print.

Marked `[sic: *ververba*]` rather than `[d:]` deliberately: Pattern 11 wraps a **rendered** intrusive
copy, and the fragment `ver` has no English exponent to wrap — there is nothing on the English page that
would read as our repetition. Pattern 12, as amended 2026-09-05, is the right home: the sense is rendered
(*these words*) and Migne's type sits inside the marker. Conjecture: read *verba*.

## §4 · The 7a″ collation — 33 `[var:]`, and why each fired

Grouped by column. Every reading below was **confirmed on the Gallica plate** before the marker was
fired, and every Clementine reading is quoted from `sources/vulgate/clementine-flat.txt` by address.

**0221C · Os 6:3.** Migne: *Resuscitabit nos Deus post biduum, et in die tertia resurgemus, et vivemus
in conspectu ejus.* Clementine: *Vivificabit nos post duos dies; in die tertia suscitabit nos, et vivemus
in conspectu ejus.* Three departures in one clause (*Resuscitabit … Deus*, *post biduum*, *resurgemus*
for *suscitabit nos*), and the gloss is built on the third: the resurrection of the **people**, not God's
raising of them, is what carries the three-day figure into baptism in the next sentence.

**0223A–B · Eph 5:8.** Migne: *Fuistis aliquando tenebrae, nunc autem lux in Domino.* Clementine:
*Eratis enim aliquando tenebrae : nunc autem lux in Domino.* Perfect for imperfect, and the connective
dropped.

**0223D · Mt 7:14.** Migne: *Arcta est enim et angusta via quae ducit ad vitam.* Clementine: *Quam
angusta porta, et arcta via est, quae ducit ad vitam.* Migne's form has lost the gate entirely and turned
an exclamation into a statement — and the gloss immediately reasons from *ascenditur anguste et
difficulter*, i.e. from the road, not the gate.

**0223D · Lc 14:28.** Migne: *Quis vestrum volens turrim aedificare, non prius sedens computat sumptus,
si habet unde perficiat?* Clementine: *Quis enim ex vobis volens turrim aedificare, non prius sedens
computat sumptus, qui necessarii sunt, si habeat ad perficiendum.*

**0224B · 2 Tim 3:12.** Migne: *Qui enim volunt pie vivere in Christo, persecutionem patiuntur.*
Clementine: *Et omnes, qui pie volunt vivere in Christo Jesu, persecutionem patientur.* Present for
future, *omnes* dropped, *Jesu* dropped.

**0224B · Ex 14:19–20.** Origen's text as Migne prints it: *Levavit … angelus Domini, qui antecedebat
castra Israel, et abiit post illos. Elevavit et columnam nubis a facie eorum, et stetit post illos, et
intravit inter castra Aegyptiorum et Israel.* Clementine: *Tollensque se angelus Dei, qui praecedebat
castra Israel, abiit post eos: et cum eo pariter columna nubis, priora dimittens, post tergum stetit,
inter castra Aegyptiorum et castra Israel.* In the Vulgate the pillar goes **with** the angel; in Migne's
text the angel **lifts** the pillar and the pillar itself enters between the camps — which is the whole
of the gloss that follows (*Haec columna nubis populo Dei efficitur murus*). The lemma word *Levavit* is
italicized separately by Migne precisely because it is not the Vulgate's *Tollensque se*.

**0224C · Ex 14:11.** Migne: *Tanquam non essent sepulcra in Aegypto, ita eduxisti nos.* Clementine:
*Forsitan non erant sepulchra in Aegypto, ideo tulisti nos ut moreremur in solitudine.* ⚑ Note that
Migne prints the Vulgate form himself six lines later as the verse lemma (*Forsitan non erant sepulcra*),
so the two forms stand on the same column: this is a quotation from a different text, not a compositor's
slip.

**0224D · Ex 14:13.** Augustine's text: *Sicut enim vidistis Aegyptios hodie, non apponetis amplius
videre eos in aeternum tempus.* Clementine: *Aegyptios enim, quos nunc videtis, nequaquam ultra videbitis
usque in sempiternum.* Again the divergence is load-bearing: Augustine's whole *quaestio* turns on
*sicut … hodie* and on *in aeternum tempus*, and he says so (*An, non eos videbitis sicut hodie … ut nulla
sit quaestio nec de aeterno tempore quod hic posuit*). Neither phrase exists in the Vulgate wording.

**0225B · Gal 4:6.** Migne: *Quia dabit Deus Spiritum Filii sui in cordibus nostris clamantem: Abba,
Pater.* Clementine: *Quoniam autem estis filii, misit Deus Spiritum Filii sui in corda vestra, clamantem:
Abba, Pater.* Future for perfect, first person for second.

**0225B · Rom 8:26.** Migne: *ipse Spiritus interpellat pro nobis gemitibus inenarrabilibus.*
Clementine: *sed ipse Spiritus postulat pro nobis gemitibus inenarrabilibus.* ⚑ *interpellat* is the
Old-Latin/Vetus reading and is a real verb, so this is Pattern 14 and not Pattern 18; the following
sentence (*postulante Spiritu sancto*) shows the gloss knows *postulat* as well.

**0225C · Ps 67:28.** Migne: *Ibi Benjamin minor in stupore. Principes Juda, duces eorum, principes
Zabulon et principes Nephthali.* Clementine: *Ibi Benjamin adolescentulus, in mentis excessu; principes
Juda, duces eorum; principes Zabulon, principes Nephthali.*

**0226A · Eph 6:16.** Migne: *Assumentes scutum fidei, ut possitis omnia maligni ignita jacula
exstinguere.* Clementine: *in omnibus sumentes scutum fidei, in quo possitis omnia tela nequissimi ignea
extinguere.* ⚠ Migne does **not** italicize this one, though he introduces it with *secundum illud Eph.
VI*. Marked anyway: Pattern 14 attaches to a scripture citation, not to a typographic class.

**0227A · Jo 17:1.** Migne: *Pater, venit hora, glorifica Filium tuum.* Clementine: *Pater, venit hora:
clarifica Filium tuum.* ⭐ This one is the most consequential in the stint. The entire gloss is a
distinction between *glorificari* and *gloriose glorificari*, and it is built on the verb: the Vulgate's
*clarifica* would break the argument outright.

**0227A · Lc 24:26.** Migne: *Quia oportebat pati Christum, et sic intrare in gloriam suam.* Clementine:
*Nonne haec oportuit pati Christum, et ita intrare in gloriam suam?* A question turned into a statement,
which is what the argument needs it to be.

**0227C · Hab 3:8.** Migne: *Equitatus tuus salus.* Clementine: *Qui ascendes super equos tuos, et
quadrigae tuae salvatio.* Migne's *equitatus* is exactly the word the gloss then works (*de equitatu
salutis erat*); the Vulgate's *quadrigae* would not serve, and Origen's horse-and-rider figure needs the
cavalry, not the chariots.

**0227D · Jo 16:28.** Migne: *Vado ad Patrem meum.* Clementine (Jo 16:28): *vado ad Patrem*, without
*meum*. Marked because *meum* is the pivot: the gloss reads *Deus meus … Deus patris mei* off it.

**0227D · Am 9:6.** Migne cites *Amos IX* and prints *Dominus nomen est illi.* Clementine Am 9:6 reads
*Dominus nomen ejus*; the wording Migne prints is that of **Jdt 16:3** (*Dominus conterens bella, Dominus
nomen est illi*) — the very verse whose first half he has just given as his *Alia littera*. So the
pre-scan's bare ✓ against Jdt 16:3 is, read against the address Migne himself prints, a finding.
⛔ The *Alia littera* itself (*Dominus conteret bella*) takes **no** marker: Migne has disclosed the
divergence in his own voice, and the standing rule is not to stack ours on his.

**0228A · Ex 15:4.** Migne: *Quadrigas Pharaonis et exercitum ejus projecit in mare: electos ascensores,
ternistratores demersit in mare Rubrum.* Clementine: *currus Pharaonis et exercitum ejus projecit in
mare: electi principes ejus submersi sunt in mari Rubro.* Unitalicized, but quoted; and *ternistratores*
(τριστάτας) is the word two whole paragraphs then expound. The Vulgate has no such word.

**0228B · 1 Cor 3:12.** Migne: *Qui aedificat supra fundamentum argentum, aurum, lapides pretiosos.*
Clementine: *Si quis autem superaedificat super fundamentum hoc, aurum, argentum, lapides pretiosos.*
Note the order silver-then-gold, against the Vulgate's gold-then-silver.

**0228C · Ex 15:10.** Migne: *Demersi sunt quasi plumbum in aqua validissima.* Clementine: *submersi
sunt quasi plumbum in aquis vehementibus.* Migne's singular *aqua validissima* is repeated verbatim at
0229A as the clincher of the whole lead-and-gold argument, so the form is the author's, not a slip.

**0229C · Ex 15:12.** Migne: *Extendisti dexteram tuam et devoravit eos terra.* Clementine: *Extendisti
manum tuam, et devoravit eos terra.* ⭐ The gloss exists **because** of this word: *quasi ut devorarentur
a terra, causa fuerit quod dexteram extendit* — and it then reads the right hand as the outstretched arm
on the cross. With the Vulgate's *manum* there is no crux to solve.

**0230A · Ex 15:14.** Migne: *Audierunt gentes et iratae sunt, dolores apprehenderunt habitatores
Philisthiim.* Clementine: *Ascenderunt populi, et irati sunt: dolores obtinuerunt habitatores Philisthiim.*
The lemma Migne prints two words earlier is *Ascenderunt*; the text he then quotes says *Audierunt*.
Both stand as printed.

**0230B · Is 65:2.** Migne cites *Isa. LXV* and prints *Tota die expandi manus meas ad populum non
credentem.* Clementine Is 65:2 reads *Expandi manus meas tota die ad populum incredulum*; the wording
printed is verbatim **Rom 10:21**. Another ✓-against-the-wrong-verse.

**0230C · Rom 11:25–26.** Migne: *Caecitas enim ex parte contigit in Israel, donec plenitudo gentium
intraret, et tunc Israel salvus fieret.* Clementine: *quia caecitas ex parte contigit in Israel, donec
plenitudo gentium intraret, et sic omnis Israel salvus fieret.* *tunc* for *sic* and *omnis* dropped —
and *tunc* is what makes the verse answer the *donec pertranseat populus tuus* the gloss is expounding.

**0230D · Dt 32:6.** Migne: *Nonne hic ipse Dominus Deus tuus, qui fecit et creavit te, et acquisivit
te?* Clementine: *numquid non ipse est pater tuus, qui possedit te, et fecit, et creavit te?* Migne's
*acquisivit* is the whole point of the passage (*quomodo acquisisse dicitur quod suum esse dubium non
est?*); the Vulgate's *possedit* would dissolve the question.

**0230D · Is 50:1.** Migne: *Peccatis vestris venundati estis, et pro iniquitatibus vestris dimisi
matrem vestram.* Clementine: *Ecce in iniquitatibus vestris venditi estis, et in sceleribus vestris
dimisi matrem vestram.* The two nouns have exchanged places and *venundati* stands for *venditi* — and
*venundati* is the word the gloss repeats twice in the next four lines.

**0231B · Ps 79:10.** Migne: *… et plantasti radices ejus, et replevit terram.* Clementine: *plantasti
radices ejus, et implevit terram.* One prefix; recorded because the surrounding three verses are quoted
verbatim, which makes the single departure legible rather than noise.

**0231D · Ex 15:17.** Migne prints the Vulgate lemma *Sanctuarium tuum* and then Origen's text
*Sanctimonium tuum, Domine* — for which the Clementine has *sanctuarium tuum, Domine*. Marked on the
second, since the gloss then etymologizes *Sanctimonium* for eight lines (*Sanctimonium dicitur
tabernaculum Dei*).

**0232A · Ex 15:18.** Migne: *Domine, qui regnas in saeculum et in saeculum et adhuc.* Clementine:
*Dominus regnabit in aeternum et ultra.* ⭐ The gloss is a word-by-word exposition of *in saeculum … et
adhuc* running a full column, and *et adhuc* is quoted five further times. Nothing of it survives against
*in aeternum et ultra*.

**0233B · Pr 3:18.** Migne: *Sapientia lignum vitae est in omnibus amplectentibus eam.* Clementine:
*Lignum vitae est his qui apprehenderint eam, et qui tenuerit eam beatus.* Migne supplies the subject
*Sapientia*, which is what lets Origen call the wood cast into Mara *lignum sapientiae Christi*.

**0234A · Ex 15:25.** Migne: *posuit illi Deus justitias et judicia, ibi tentabat eum dicens: Si audieris
vocem Domini Dei tui.* Clementine: *ibi constituit ei praecepta, atque judicia, et ibi tentavit eum,
dicens: Si audieris vocem Domini Dei tui.* Note that Migne prints the Vulgate form as his own lemma
(*Ibi constituit ei praecepta*) immediately above, so the two readings face each other on the column.

**0234A · Ez 20:25.** Migne: *Dedi vobis praecepta et justificationes non bonas in quibus non vivent.*
Clementine: *Ergo et ego dedi eis praecepta non bona, et judicia in quibus non vivent.* Second person for
third, *justificationes* for *judicia* — and the gloss's next sentence works *justificationes*.

**0234D · Is 7:9.** Migne: *nisi crediderint, non intelligent.* Clementine: *Si non credideritis, non
permanebitis.* The familiar Old-Latin/LXX form; the argument is about **understanding** the wood, and
*non permanebitis* would not close the chapter.

## §5 · Divergences examined and DECLINED, with the reason

Recorded so that a later pass does not re-open them. All were checked against
`sources/vulgate/clementine-flat.txt` and confirmed on the plate.

1. **0221D · Ex 12:46, the lemma *Nec illius*.** Ex 12:46 reads *nec os illius confringetis*; Migne's
   lemma cuts to *Nec illius*, which is not a contiguous run of the verse. This is Migne's own
   catchword abridgment (he closes it with *etc.*), not a textual reading: the gloss supplies the missing
   word in its very first phrase, *Os Christi in cruce non est confractum*. No `[var:]`.
2. **0224C · Ex 14:11 lemma *Forsitan non erant sepulcra*.** Only *sepulcra* for *sepulchra* — Pattern 9
   orthography, and the same spelling stands three lines above in Migne's own prose.
3. **0224C · the citation *Matth. XIII* for Mt 14:31.** Migne's printed reference is wrong (the verse is
   Mt 14:31, and Migne prints *Matth. XIV* correctly for the same verse at 0228D). Confirmed at the plate,
   f112 right column. This is a `refDisplay` matter and is left exactly as printed; no marker.
4. **0233C · the citation *II Cor. III* for 2 Cor 4:7.** Same class, and it is inside an `[n:]`, whose
   contents are verbatim. The quotation itself (*Habemus thesaurum istum in vasis fictilibus*) differs
   from the Clementine only by the dropped *autem* — an abridgment, no marker.
5. **0230C · Mt 3:9 and 0231C · Mt 3:10.** *Potens est enim Deus …* and *Nam omnis arbor …* differ from
   the Clementine only in the connective (*enim* for *Dico enim vobis quoniam*; *Nam* for *ergo*). No
   sense turns on either.
6. **0231D · 1 Cor 3:9.** *Dei agricultura, Dei aedificatio estis* against *Dei agricultura estis, Dei
   aedificatio estis* — a single dropped *estis*, an abridgment of a doubled verb.
7. **0232B · Ex 15:19.** *filius es Israel, potes ambulare per siccum in medio maris* is Origen turning
   the verse into second-person application, not quoting it; italicized as an echo. Not a claim about the
   text of Exodus, so not a `[var:]`.
8. **0232D · Ex 15:22, *Tulit autem Moses Israel*.** *Moses* for *Moyses* is this work's house spelling
   throughout (it stands so in the running prose at 0221C, 0225B, 0233A and elsewhere). Pattern 9.
9. **0233A · Ex 15:25, *ostendit illi lignum Deus*.** *illi* for *ei*; the Vulgate form *ostendit ei*
   stands italicized four lines later at 0233D in the same chunk. A dative pronoun with no change of
   sense, and Migne carries both — recorded, not marked.
10. **0227D and 0229A · the two *Alia littera* readings** (*Dominus conteret bella*; *Misisti spiritum
    tuum et cooperuit eos mare*). **Migne has flagged both himself.** Per the standing rule, no marker
    where he has already marked it. Both confirmed on the plate (f114 left, f115 left).

## §6 · Readings examined at the plate and left alone

- **0221C · *resurgant*.** Our twin reads *resurgant*; the Gallica impression at this point sets a heavily
  inked bowl that could be read *o* (*resurgont*), and a 14× crop did not settle it. The archive copy
  prints *resurgant* cleanly (l. 16978), our twin agrees, and the subjunctive is what the *ut* clause
  requires. **No marker, no patch.** Recorded so the Gallica image alone does not re-open it.
- **0229D · *dicite* … *dicito*.** Migne addresses a singular throughout (*talem cum videris* … *si quem
  videris*) and then sets a **plural** imperative *dicite* the first time and a singular *dicito* the
  second. Both witnesses read *dicite* (Gallica f115 left, archive l. 17614) and our twin agrees. A real
  Latin form, so Pattern 7 governs and Pattern 12 has nothing to wrap; under Pattern 17 the plural is
  rendered as a plural and the singular as a singular, and the inconsistency stays visible on the page.
- **0231D · *praeparatum.***  *Quid est ergo hoc sanctimonium non manu hominum, sed Dei praeparatum.* —
  an interrogative closed with a full stop. Migne's mark, kept (Pattern 8); this is not the 8b class,
  because English can carry the sentence as printed.
- **0233D · *laudandus est.*** *Sed in tali etiam ligno quis nisi creator et demonstrator laudandus est.*
  Same class, same treatment.
- **0233C · `concludit [condidit]`.** The square brackets are **Migne's own**, confirmed on the plate
  (f117 left column, corners 233/234). This is his inline conjecture layer, the *[devicto eo]* class at
  0184B. The bracketed word rides into the English untranslated and unmarked; we do not stack a `[cj:]`
  or a `[sic:]` on his own mark.
- **0234A · the point after *vocem Domini Dei*.** The Gallica impression looks like a full stop; the
  archive copy prints a comma and so does our twin. Not fired — and the same page is one where Gallica
  drops a hyphen (§ patches, `scili cet`), so its small marks on this leaf are suspect by the standing
  under-inking rule.
- **Foot-of-page apparatus: CHECKED ZERO on all seven leaves**, both columns, both layers (numbered
  *Forte* notes and the asterisk/letter layer). What stands at the foot of f117 is the signature
  `PATROL. CXIII.` and the sheet number `8`.

## §7 · Register notes

- ***ternistratores*** (Ex 15:4, Greek τριστάτας) is kept as italic Latin at all four occurrences
  (0228A ×2, 0228B ×2). It is a technical word with no English exponent — "third-riders", "chariot
  officers" and "chosen captains" all decide the etymology the gloss spends a paragraph deciding for
  itself — and the register rule for untranslatable technical Latin covers exactly this case.
- **The canticle is prose in Migne and is prose here.** Ex 15 is set as continuous text on ff. 113–116
  with no lineation of any kind; Pattern 8a forbids imposing verse lines, however plainly the Latin
  scans. Checked on every leaf.
