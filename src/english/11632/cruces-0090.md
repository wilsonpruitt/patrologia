# Cruces — 11632 chunks 0090–0095 (cols 0400D–0415C)

Philip of Harvengt, *Commentaria in Cantica canticorum*, PL 203. Six chunks,
6,255 Latin words, running from *Caput* XXVIII of **Book IV** through *Caput* VI
of **Book V** — the exposition of Cant. 4:15–5:2: *Fons hortorum, puteus aquarum
viventium* → *Surge aquilo, et veni auster* (expounded twice over, first with the
north wind driven off, *Caput* XXIX, then with him licensed to blow, *Caput* XXX)
→ *Veniat dilectus meus in hortum suum* → *Veni in hortum meum soror mea sponsa*
→ *Comedi favum cum melle meo* → *Comedite amici, bibite et inebriamini* → *Ego
dormio, et cor meum vigilat* → *Vox dilecti mei pulsantis.*

⭐ **A BOOK BOUNDARY FALLS IN THIS RANGE** — `LIBER QUINTUS.` at the bare anchor
`[0403]` in chunk 0091 — and it is the fourth crossed boundary in the work. See
§3a: no seam, confirming brief §7 a third time.

⚠ **AND IT CORRECTS A HEADER ERROR IN cruces-0084.** That file describes its
range (chunks 0084–0089, cols 0386D–0400C) as "*Caput* XXI–XXVII of **Book V**".
It is **Book IV**: chunk 0091 at 0404C prints Philip's own *hujus operis
**quartus liber** finem sibi congruum jam imponat*, and `LIBER QUINTUS.` follows
immediately. cruces-0078's "Book IV, *Caput* XIII–XX" is right and cruces-0084's
book number is not. **Nothing in either file's findings depends on it** — the
column numbers and chapter numerals are correct in both — but the merge should
fix the label before it propagates into a TOC.

**Marker totals for this range: 2 `[var:]` · 3 `[sic:]` · 0 `[ed:]` · 0 `[d:]` ·
0 `[nt:]` · 0 `[f:]`.** `verify-english.mjs` reports **no errors** on any of the
six (the run's `VERIFY FAILED` is 20 not-yet-translated chunks). Four ratio
warnings — 0091 1.62, 0092 1.69, 0094 1.62, 0095 1.68 — inside the band this work
has already shipped (0005 and 0046 both 1.68). Ratios: 1.59 / 1.61 / 1.68 / 1.57 /
1.64 / 1.67.

Column anchors (10/10/7/17/9/8, 61 in all), `[n:]` strings (1/0/0/9/10/1 = 21,
each matching its frontmatter `noteCount`), guillemet characters (1 «/1 » in 0090,
none elsewhere) and the marginal source-edition numbers *231*–*239* were diffed
**1:1 against the Latin twins by script, not by eye**: byte-identical in order and
place. **Two intra-paragraph line breaks** (0090, 0093) — Migne's displayed verse
lines — are reproduced as line breaks, and the parity of those was scripted too.
**No guillemet asymmetry in this range.**

---

## §1 · ⭐⭐ THE THREE FINDINGS THE MERGE SHOULD CARRY

### 1.1 · ⭐⭐⭐ THE DISPLAYED-VERSE RULE — settled work-wide, and it closes cruces-0084 §3b

cruces-0084 §3b found Horace at 0399B **adduced as an explicit authority and
printed in italics**, offered it to the merge as a refinement of brief §7 ("where
a run is BOTH classical verse AND an adduced authority, 11632 prints italics"),
and closed with: *"One instance is one instance; a second would settle it."*

**My range has two.** Both are Ovid, both introduced by the work's *ethnicus*
formula, both in **italics**, and — the part that matters — **both are set off by
Migne onto their own line**:

> Cum autem, juxta quemdam ethnicum *Capiant vitium ni moveantur aquae,*
> ⏎ in fundo putei non stativas… (0401B — Ovid, *Ex Ponto* I.v.6)

> Qualibus quidam ethnicus: *Quid vos,* ait, *perdiderit, dicam: nescitis amare.*
> ⏎ Isti non vino vel draconum… (0408C — Ovid, *Ars am.* III.41)

⭐⭐ **So I ran the technique brief §6 asks for and greped the other 125 chunks
for intra-paragraph line breaks.** The whole work contains **ten** of them, and
they are exactly the displayed verse quotations. **Nine of the ten are
italicised, without exception:**

| Chunk | Col | Quoted | Marked |
|---|---|---|---|
| 0000 | prologue | Horace, *A.P.* 38–39 *Sumite materiam vestris…* | *italic* |
| 0006 | — | Juvenal *…occurrit digna relatu / Pompa; senem potum pota trahebat anus* | *italic* |
| 0007 | — | *Qui properant, inquit, nova musta bibant; mihi fundat avitum / Testa merum* | *italic* |
| 0022 | — | Horace, *Epist.* I.ii.58 *Invidia… Siculi non invenere tyranni / Tormentum majus* | *italic* |
| 0089 | 0399B | Horace, *Epist.* I.xvi.52 *Oderunt… peccare boni virtutis amore* | *italic* (cruces-0084 §3b) |
| **0090** | **0401B** | **Ovid, *Ex Ponto* I.v.6** | ***italic*** |
| **0093** | **0408C** | **Ovid, *Ars am.* III.41** | ***italic*** |
| 0110 | — | Horace, *Epist.* I.vi.12 *Gaudia, inquit, pelle, / Pelle timorem* | *italic* |
| 0125 | — | Terence, *Andria* 555 *Irae amantium, redintegratio est amoris?* | *italic* |
| 0000 | 0182B | *Unam vos veteres nostis tantummodo lunam…* (six lines) | **bare** |

⚑ **And the one bare member is not a counter-instance: it is Philip's OWN
dedicatory epigram**, six lines closing the prologue, not a quotation at all. So
of ten displayed verse blocks, **every adduced one is italic and the only bare one
is the author's**.

⭐⭐ **The discriminator is therefore TYPOGRAPHIC DISPLAY, not function** — and
that is what dissolves brief §7's apparent inconsistency rather than adding to it.
Every classical quotation the work prints **bare** is run into the paragraph:
Sallust at 0314A, Virgil *Aen.* ii.390 at 0385A (cruces-0078 §1.2), Virgil's
*mille nocendi artes* at 0245A and 0330C, Horace's *Siculi… tormentum* at 0447D,
*Omnes ignoscunt, nemo succurrit* at 0473A, *Si mater est, inquiunt* at 0233B. The
guilleted Virgil at 0251D is run-in too. **Nothing that is set off is ever bare;
nothing that is run-in is ever italic.**

⚑ **The internal control the merge wants is Horace's Siculi line, printed TWICE in
this work under the two regimes**: displayed and italic at 0022 (*Invidia, inquit,
Siculi non invenere tyranni / Tormentum majus*), run-in and bare at 0447D (*majus
quo nec Siculi, juxta quemdam ethnicum, tormentum invenere*). Same poet, same
line, same *ethnicus* formula, two treatments — and the treatment tracks the
setting, not the citation. That is the *(Marc. XV)*/*(Matth. XXVII)* shape of §8b
applied to typography, and it needs no appeal to anything outside 11632.

⚑ **A second control, same shape, from my own range: OVID.** Brief §7 records an
Ovid case at 0259 printed **bare**; mine are printed **italic**. cruces-0078 §1.2
built the same argument out of Virgil (guilleted 0251D, bare 0385A). Ovid now
supplies it independently — and under the display rule the two Ovids are not in
conflict at all.

**What I am NOT claiming.** This is a description of what the plate does, not a
licence to add a mark. Brief §7's "reproduce what is printed. Never add a mark
because the function seems to call for one" is unaffected and was followed
literally: I supplied no mark anywhere and reproduced both line breaks. What the
rule buys the merge is that **§7's three "counter-instances" (Ovid 0259, Sallust
0314A, Ambrose 0337B) and cruces-0078's Virgil are no longer anomalies needing
explanation — they are the run-in class, which is the majority class.**

⚠ **Neither of my two carries an `[n:]`.** They were reachable only because they
are italicised, i.e. only through the extraction's italic channel. A range whose
classical quotation is run-in and unnoted (0314A, 0385A, 0447D, 0473A) can reach
it by **no mechanical channel whatever** — which is brief §8a's argument, restated
for pagans.

### 1.2 · ⭐⭐ 0407A — the LEMMA itself is broken type: Migne prints *fovum* for *favum*, and prints *favum* correctly six times in the next two columns

The head lemma of *Caput* III (Cant. 5:1c) is printed:

> *Comedi **fovum** cum melle meo: bibi vinum meum cum lacte meo.* (0407A)

Vulg. Cant. 5:1: *comedi **favum** cum melle meo.* ***fovum* is not a Latin word
in any form** — not a case of *favus*, not a form of *foveo* or *fovea*.

⭐ **The internal control is total and sits within two columns.** Migne prints
*favum* / *favus* / *favo* correctly **six times** in Philip's own exposition of
this very lemma: *nunc **favum** invenit* (0407B) · *Nostis **favum** quamdam velut
thecam* (0407B) · *in quo, **favum**, et in **favo**, miro studio mel recondit*
(0407C) · ***Favus** quidem tenerior* (0407C) · *quam in **favum** redigit
conversatio* (0407C) · ***Favum** igitur, quem interna siccat inanitas* (0407D).
The chapter is an eight-column exposition of the honeycomb and there is no doubt
what the word is.

**Pattern 7/10/12 govern: carried untranslated in italics, marked, not also
translated.** The English reads *"I have eaten [sic: *fovum*] with my honey"* and
**does not anywhere in that sentence say "honeycomb"** — the very failure brief §8
names (a `[sic:]` on a word that was ALSO translated) was checked for word by word
on a separate pass. Marker content verified as a verbatim substring of the twin.

⛔ **This is the single most repairable place in the range**, and worse than the
usual instance of that class, because **the defect is in the lemma** and every
reader will silently supply the right word. One letter restores it.

⚑ **A note for the merge on where this sits in the work's defect ledger.** All
three earlier real-word-merely-wrong instances the ranges have logged (*Incipit*/
*accipit* @0345B, *Adjuvo*/*Adjuro* @0299D, *Jesus*/*Jesu* @0397B) are **single
letters that produce another real word**, so they stay on the English side under
Pattern 12. *fovum* is a single letter that produces **no word at all**, which is
what puts it in the `[sic:]` class instead. The work now has one of each shape in
consecutive ranges, and they are worth telling apart in the merge's tally.

### 1.3 · ⭐⭐ 0412C — Migne's `(ibid.)` carries Psalm 118 onto a quotation of Psalm 31, and the two verses stand eleven words apart

Migne prints, in three consecutive sentences:

> *Dilata,* inquit, *os tuum, et ego adimplebo illud* `[n: (Psal. LXXX)]`. Et
> alibi: *Da mihi intellectum ut discam mandata tua* `[n: (Psal. CXVIII.)]` Et
> ille: *Intellectum,* ait, *tibi dabo, et instruam te* `[n: (ibid.)]`. (0412C)

The first two sigla are **correct** (Ps. 80:11; Ps. 118:73). The third is not.
***Intellectum tibi dabo, et instruam te* is Ps. 31:8** — *Intellectum tibi dabo,
et instruam te in via hac qua gradieris* — verbatim. **Psalm 118 contains no such
clause anywhere in its 176 verses**, and Philip's construction makes the error
visible: *Et ille* marks a change of speaker (the psalmist asks at Ps. 118:73, God
answers at Ps. 31:8), which is precisely what an *Ibid.* cannot express.

⭐ **This is the strongest siglum finding in my range and it belongs to a shape the
work has not yet logged.** Brief §8b's two attested shapes are "off by exactly one
chapter" and "note cites one book, the words are another book's." This is a
**third**: an *Ibid.* correctly formed and correctly resolving to its printed
antecedent, where the antecedent is wrong for the verse it now labels. It is not a
misprinted book name — *(ibid.)* names nothing — so no tally of misnamed books
would ever catch it.

⛔ **Reproduced verbatim, corrected nowhere, and NO correction proposed** — brief
§10.2 is unconditional and this is the exact case it describes: anaphora resolves
against the printed sequence at index time, so touching the antecedent
`(Psal. CXVIII.)` would make this *Ibid.* inherit the corrected key and resolve
wrong in a second way. **The merge should log it and leave it.**

⚠ Note also that `(Psal. CXVIII.)` prints a **full stop inside the parenthesis**,
alone among the twenty-one notes in this range. Reproduced.

---

## §2 · THE COLLATION — all 61 listed spans, plus 24 found on the prose pass

Every span in `data/quotations/11632/0090-0095.md` was collated word by word
against the Vulgate. **Spans recorded as AGREES were collated and found to agree;
the absence of a marker on them is a finding, not a silence.**

### 2a · Divergent — `[var:]` fired (2)

| Col | Ref | Migne prints | Vulgate | Note |
|---|---|---|---|---|
| 0401D | Cant. 4:16 | *perfla hortum meum: et **fluent** aromata illius* | *…et **fluant** aromata illius* | §2f. Future indicative for jussive subjunctive; the last clause stops being part of the invocation and becomes a promised result, which is how Philip reads it. |
| 0412D | Eph. 3:10 | *ut innotescat **principibus** et potestatibus* | *ut innotescat **principatibus** et potestatibus* | §2g. "Princes" for "Principalities" — the angelic order's proper name; **Philip repeats the divergent word in his gloss two lines later.** |

Both markers were re-read against the Latin as if written by someone else (brief
§8): neither elides its divergence behind an ellipsis, both name the witness
first, both quote a Vulgate reading that exists, and neither content string is a
verbatim substring of the twin (Pattern 14's `[ed:]` mirror test — scripted).

### 2b · Collated and AGREEING — no marker

**0090 (cols 0400D–0403A).** **Cant. 4:15** head lemma *Fons hortorum, puteus
aquarum viventium quae fluunt impetu de Libano* — **agrees word for word.** ·
**John 15:26** « Cum venerit, inquit, Paracletus quem ego mittam vobis
`[n: (Joan. XV)]`. » — Vulg. *Cum **autem** venerit Paraclitus, quem ego mittam
vobis **a Patre**, Spiritum veritatis…* Migne's *inquit* stands in the slot the
Vulgate's *autem* occupies (Pattern 5), and the quotation is cut after *vobis*.
Ordinary truncation plus a displaced connective; *Paracletus* for *Paraclitus* is
Pattern 9 orthography. **Logged, no marker.** Siglum correct. · **Cant. 4:16** head
lemma — see §2f. Its three re-quotations agree: *Surge* (0402A) · *Et veni,*
inquit, *auster.* (0402B) · *perfla,* (0402C).

**0091 (cols 0403B–0405B).** **Cant. 4:16a** re-quoted at the head of *Caput* XXX,
*Surge aquilo, et veni auster* — **agrees**, and note that **this second printing
stops before *fluent***, so it supplies no second attestation of §2f's divergence.
Its cues *Surge,* / *aquilo,* (0403B) agree. · **Cant. 4:16b / 5:1a**, the *Caput
primum* lemma of Book V: *[CAP. V.] Veniat dilectus meus in hortum suum, **ut**
comedat fructum pomorum suorum.* Vulg. *…**et** comedat fructum pomorum suorum.*
⚑ **A purpose conjunction for a coordinate one, in the same verse whose first half
carries §2f's mood change.** Sense untouched — both express the wish — so this
falls under §8c's stated threshold ("the sense is untouched, which is Pattern 14's
threshold") and takes **no marker**. See §2f for why the two halves were treated
differently. ⭐ **And the printed locator `[CAP. V.]` is itself a datum**: Migne
puts the chapter break **one clause earlier than the Clementine**, which runs
*Veniat dilectus meus…* as the last clause of 4:16 and opens chapter V at *Veni in
hortum meum*. Reproduced verbatim and untranslated, per the work's established
practice for this bracket (`[CAP. II.]`–`[CAP. VIII.]`, 15 in all, all carried).

**0092 (cols 0405C–0407A).** **Cant. 5:1a** head lemma *Veni in hortum meum soror
mea sponsa, messui myrrham meam cum aromatibus meis* — **agrees word for word**,
and its two re-quotations at 0406A (*Messui,* / *myrrham meam cum aromatibus
meis*) agree. ⚑ *Veni* is the perfect, not the imperative, and Philip's own gloss
proves it: *non adventum suum petenti pollicetur, sed **venisse** et fecisse… se
fatetur.* Rendered "I am come", matching Douay and, more to the point, matching
the exposition.

**0093 (cols 0407B–0411B).** **Cant. 5:1c** head lemma — see §1.2 for the *fovum*
defect; the rest of the lemma (*cum melle meo: bibi vinum meum cum lacte meo*)
**agrees word for word**, as does the re-quotation *Bibi,* ait, *vinum meum cum
lacte meo.* (0407D) · **Luke 12:19** *Anima,* inquit ille, *habes multa bona posita
in annos plurimos: requiesce, comede, bibe, epulare* `[n: (Luc. XII)]` — **agrees
word for word.** Siglum correct · **Prov. 9:5–6** *Bibite,* inquit, *vinum quod
miscui vobis: relinquite infantiam, et vivite* `[n: (Prov. IX)]` — **agrees word
for word** on every printed word; Migne opens at *Bibite* (Vulg. *Venite, comedite
panem meum, **et bibite** vinum…*) and cuts after *vivite*, before *et ambulate per
vias prudentiae*. Head- and tail-truncation only. Siglum correct · **Matt. 10:37**
*Qui amat filium vel filiam plus quam me, non est me dignus* `[n: (Matth. X)]` —
⚑ **a fusion of the verse's two limbs, and worth stating exactly.** Vulg.: *Qui
amat patrem aut matrem **plus quam** me, non est me dignus; et qui amat **filium
aut filiam super** me, non est me dignus.* Migne joins the **second** limb's
objects to the **first** limb's comparative, and prints *vel* for *aut*. Every
printed word is the Vulgate's; nothing is asserted that the verse does not assert,
and Philip's argument is about the ordering of the two loves, not about the
comparative particle. **Logged, no marker** — the cruces-0000 item-12 conflation
precedent, and cruces-0078's Phil. 3:7+3:8 case at 0385B. Siglum correct ·
**1 Cor. 2:2** *Non judicavi,* ait, *scire me aliquid inter vos nisi Jesum Christum
et hunc crucifixum* `[n: (I Cor. II)]` — Vulg. *Non **enim** iudicavi **me scire**
aliquid inter vos, nisi Iesum Christum, et hunc crucifixum.* Migne drops *enim*
and transposes *me scire* → *scire me*; the accusative-and-infinitive is unchanged
and the sense is untouched. **Logged, no marker.** ⭐ **Siglum correct, and this is
a brief §8b "log the ones that are RIGHT" item**: `(I Cor. II)` is the siglum §8b
singles out as having been "printed for three different wrong verses," and the
0048–0053 agent found it correct twice (0305C, 0318A). **This is the third correct
printing.** · **1 Cor. 3:2** *Tanquam parvulis,* ait, *lac vobis potum dedi non
escam* `[n: (I Cor. III)]` — **agrees word for word** (*Tanquam* for *tamquam* is
Pattern 9). Siglum correct · **Isa. 55:1** *Venite,* ait Isaias, *emite absque
argento: et absque ulla commutatione vinum et lac* `[n: (Isa. LV)]` — **agrees word
for word**; opened at the verse's third clause. Siglum correct.

**0094 (cols 0411C–0413C).** **Cant. 5:1d** head lemma *Comedite amici, bibite et
inebriamini charissimi.* Vulg. *Comedite, amici, **et** bibite, et inebriamini,
carissimi.* Migne drops the first *et*. Elision, sense untouched — the same shape
cruces-0084 logged for Cant. 4:10's dropped copula. **Logged, no marker.** Its two
re-quotations agree: *Comedite,* inquit, *amici.* (0411C) and *Bibite,* inquit,
*et inebriamini, charissimi.* (0413A) — ⚑ **and note the second restores the *et*
the head lemma dropped**, an internal control showing the omission is local ·
**Isa. 25:6** *medullatorum pinguium, et vindemiae defaecatae* `[n: (Isa. XXV)]` —
⚑ Vulg. *convivium pinguium, convivium vindemiae, **pinguium medullatorum**,
vindemiae defaecatae.* **The pair is transposed**, nothing else; *medullatus* and
*pinguis* qualify each other either way. Same threshold call cruces-0079 made for
Cant. 4:5's *gemelli capreae*. **Logged, no marker.** Siglum correct · **John 1:14**
*Verbum caro factum est* `[n: (Joan. I)]` — **agrees.** Siglum correct ·
**Ezek. 3:1** *Fili,* ait, *hominis comede volumen istud, et vadens loquere ad
filios Israel* `[n: (Ezech. III)]` — Vulg. *Fili hominis, **quodcumque inveneris
comede:** comede volumen istud, et vadens loquere ad filios Israel.* An **internal**
omission of the intervening clause, not a truncation — the same shape cruces-0084
distinguished at Luke 1:31, and recorded here in the same class. Sense untouched.
**Logged, no marker.** Siglum correct. ⚠ The Pattern 5 *ait* falls **between *Fili*
and *hominis***, inside the vocative; reproduced in place · **Ezek. 3:2** *Et
aperui,* inquit, *os meum, et cibavit me volumine illo* `[n: (ibid.)]` — **agrees
word for word.** The `(ibid.)` resolves correctly to *(Ezech. III)* · **Ezek. 2:10
+ 3:1** *Expandit,* inquit, *illum coram me: et dixit, comede volumen istud*
`[n: (ibid.)]` — ⚑ **a fusion of two chapters.** *Expandit illum coram me* is
Ezek. **2**:10 (*et expandit illum coram me, qui erat scriptus intus et foris*);
*et dixit… comede volumen istud* is Ezek. **3**:1. Every printed word is the
Vulgate's. **Logged, no marker.** ⚠ **The `(ibid.)` therefore resolves to
(Ezech. III) for a span whose first half is Ezech. II** — a mild instance of §1.3's
shape, recorded separately from it because here the *chapter named is right for
half the span* and because Philip is plainly quoting out of order for his own
argument's sake. **Not corrected** (§10.2) · **Ps. 80:11** *Dilata,* inquit, *os
tuum, et **ego adimplebo** illud* `[n: (Psal. LXXX)]` — Vulg. (Gallican and Roman
alike) *dilata os tuum, et **implebo** illud.* Migne adds the emphatic *ego* and
compounds the verb. ⭐ **Recorded prominently though unmarked**, because the
addition **supports** Philip rather than disturbing him: his gloss in the same
breath is *meum est os aperire… **illius** est implere* — the whole antithesis is
whose act it is, and *ego* underlines it. Rendered "and I will fill it up",
deliberately distinct from the gloss's "to fill", so that the compound is visible
in English. Nothing is asserted that the Vulgate does not assert; below Pattern
14's threshold. Siglum correct · **Ps. 118:73** *Da mihi intellectum **ut** discam
mandata tua* `[n: (Psal. CXVIII.)]` — Vulg. *da mihi intellectum, **et** discam
mandata tua.* Purpose for coordination; sense untouched. **Logged, no marker.**
Siglum correct · **Ps. 31:8** *Intellectum,* ait, *tibi dabo, et instruam te*
`[n: (ibid.)]` — **agrees word for word**, truncated before *in via hac qua
gradieris*. ⭐⭐ **The siglum is the range's headline §8b find — see §1.3** ·
**Eph. 3:9–10** — see §2g; apart from *principibus* the span agrees word for word,
with *qui omnia creavit* cut between *in Deo* and *ut innotescat* (an internal
omission, logged) · **Hos. 4:14** — see §2c, the range's `[n:]`-only hit.

**0095 (cols 0413D–0415C).** **Cant. 5:2a** head lemma *Ego dormio, et cor meum
vigilat* — **agrees word for word** · **Hos. 2:14** *Lactabo,* inquit, *eam, et
loquar ad cor ejus* `[n: (Osee. II)]` — Vulg. *Propter hoc, ecce ego lactabo eam,
**et ducam eam in solitudinem**, et loquar ad cor eius.* An internal omission of
the wilderness clause. Sense untouched, and the exposition wants precisely the two
verbs Migne keeps (*Lactabo, ait, cum in sinu meo… Loquar vero ad cor ejus, cum
eam, ut evigilet, commonebo*). **Logged, no marker.** Siglum correct. ⭐ **See §4.3
for the rendering decision** — *lactabo* is Englished "I will give her milk", not
Douay's "I will allure her", and the whole of *Caput* V depends on it ·
**Cant. 5:2b** *Vox dilecti mei pulsantis* — **agrees**, truncated before *Aperi
mihi, soror mea*.

### 2c · The `[n:]`-only class — **hit rate 1 of 4, and the hit AGREES**

The extraction lists **five** `[n:]`-only spans. **One of the five is not of the
class**: the 0410C listing (*Non judicavi, ait, scire me aliquid…*) is the **same
span** as the 0410B italic one, re-listed because the `[0410C]` anchor falls
between the italic run and its `[n:]`. That leaves **four genuine spans**.

1. ⭐⭐ **0413A, Hos. 4:14 — A HIT.** *et sicut **populus non intelligens**, Osee
   testimonio `[n: (Osee. IV)]`, **vapulabit***. Vulg. Hos. 4:14 ends: *et populus
   non intelligens vapulabit.* **Every word verbatim and contiguous**, broken only
   by Philip's own attribution *Osee testimonio* — which is not a hedge but the
   opposite: **he tells you he is quoting, by the prophet's name**, and Migne
   marks the words with neither guillemets nor italics. This is brief §8a's class
   exactly. **No `[var:]` (there is nothing divergent to mark, and the plate prints
   no boundary), no marker of any kind.** Siglum correct. ⚑ Recorded as a hit
   *even though it agrees*, because the class's question is "quotation or Philip's
   prose?", not "divergent or not" — and a null-result tally that counted only
   divergent hits would understate it.
2. **0408A, Deut. 32:33** `[n: (Deut. XXXII)]` — *Vinum quippe non illud
   **insanabile**, et **veneno** comparabile **aspidum** vel **draconum***. Vulg.
   *Fel **draconum** vinum eorum, et **venenum aspidum insanabile**.* Four of the
   verse's nouns survive, but redistributed: *venenum aspidum insanabile* is broken
   apart and rebuilt round Philip's own *comparabile*, under his own negated
   predicate. **Philip's prose. No marker.** ⭐ Siglum **correct**, and worth a §8b
   line: brief §8b names "Deut. 32/Ps. 91" as one of the attested wrong-book
   instances, and here the same book's siglum is right.
3. **0409B, Wisd. 2:24 under `[n: (Rom. V)]`** — *nec doleret mortis meritum
   incurrisse, quae illius **invidia in orbem terrarum** legitur **introisse***.
   Vulg. Wisd. 2:24: *invidia autem diaboli mors introivit in orbem terrarum.*
   Rom. 5:12, the chapter named, reads *per unum hominem peccatum **in hunc mundum
   intravit***. ⚠ **So the words are Wisdom's and the doctrine is Romans'**, and I
   record it as **ambiguous rather than wrong**: the note plainly points at the
   *locus* for death's entry, which is Rom. 5, and Migne's practice in this work is
   often to key a note to imagery rather than to words (cruces-0084 §2c.4, §2c.6).
   But *in orbem terrarum* and *introisse* are not Rom. 5's words in any form.
   **Philip's prose either way — the clause is governed by his own *legitur* and
   his own relative *quae* — so no marker.** Logged for the merge's ledger under
   §8b's second shape, flagged as ambiguous.
4. **0409D, Job 6:12** `[n: (Job VI)]` — *Neque enim **duritia lapidum** ejus
   duritia; nec **mens** ejus **aenea** potest dici.* Vulg. *Nec **fortitudo
   lapidum fortitudo mea**, nec **caro mea aenea** est.* Philip has changed the
   person (first → third), and changed **both** nouns — *fortitudo* → *duritia* and
   *caro* → *mens* — and the changes are the argument: he is denying that the
   Mother's tenderness is stony or brazen. **Philip's prose. No marker.** Siglum
   correct.

**Hit rate: 1 of 4.** Running total across the ranges that have reported it:
**3 of 113** (0/6, 0/20, 0/38, 0/19, 1/12, 1/14, 1/7, and now 1/4). ⚑ Two things
worth the merge's attention. First, this is the class's **second hit in three
ranges** after eighty-three straight misses, so the run of nulls in waves 1–2 was
not the class's true rate. Second, **it is the first hit that is scriptural and
that agrees with the Vulgate** — cruces-0078's was Virgil, wave 1's Rom. 8:10 was
divergent. The mechanism is indifferent to *what* is quoted and to *whether it
diverges*; a pass that stops at "does this differ from the Vulgate?" will not see
the next one.

### 2c′ · ⭐ Weaves the extractor could NOT list — 24 found on the mandatory prose pass

No guillemets, no italics **and no `[n:]`**, so they appear in the extraction in no
class whatever. **None takes a marker** (brief §8a). The first four are the ones
the merge should see.

1. ⭐⭐ **0401D–0402B — Isa. 14:12–14, and Philip has recast it as direct address.**
   *Tu, ait, qui **tibi posuisti sedem** quasi regiam **ad arcturum**, disponens
   imperare… **Putasti similem te fore Altissimo** qui tantum **Lucifer**
   dicebare… habens enim similem jam nec **Altissimus** potest dici.* Against Vulg.
   Isa. 14:12–14: *Quomodo cecidisti de caelo, **Lucifer**… **in caelum conscendam,
   super astra Dei exaltabo solium meum**, sedebo in monte testamenti, in lateribus
   **aquilonis**… **similis ero Altissimo**.* ⭐ **The whole of *Caput* XXIX rests
   on the fusion**: the Song's *aquilo* is identified with Isaiah's *lateribus
   aquilonis*, and the chapter's entire argument (that the north wind is Lucifer)
   exists only because Philip has read the two texts through each other. **Migne
   marks not one word of it.** The densest specimen this range found, and — like
   cruces-0084's Prov. 31 case at 0393A — one where the author signals the
   quotation (his *ait* announces a speech that is Isaiah's) and the plate does not.
   **No marker.**
2. ⭐ **0404D — Rom. 5:3–5, the whole chain, verbatim in its Vulgate order.**
   *ille tribulans, **patientiam, patientia probationem**, spem **probatio** non
   **confusam**, iste, operabitur **charitatem quae in nostris praebet cordibus se
   diffusam**.* Vulg. *tribulatio **patientiam operatur, patientia autem
   probationem, probatio vero spem, spes autem non confundit**: quia **caritas** Dei
   **diffusa est in cordibus nostris**.* Every noun of the chain, in order, plus the
   *non confundit* negation preserved as *non confusam*, all compressed under a
   single future *operabitur* of Philip's own. **Prose, no marker** — but a reader
   who does not know Rom. 5 will not learn it from this page.
3. ⭐ **0408D — Ps. 18:6, and it returns two columns later.** *Ille etenim qui **a
   summo coelo**, a secreto sinu Patris **egreditur**, qui **thalamum** nuptialem…
   ingreditur… **Sponsus egreditur***. Vulg. *tamquam **sponsus procedens de
   thalamo suo**… **a summo caelo egressio eius**.* And at 0410D the same psalm's
   next image returns in one word: *sed **geminae gigantem substantiae** geminato
   munere delectari* (Vulg. *exsultavit ut **gigas** ad currendam viam*), where
   *gigas geminae substantiae* is the received patristic gloss. Two unmarked
   touches of one psalm inside one chapter. **Prose, no marker.**
4. ⭐ **0404D — 1 Cor. 3:6–7.** *horto **quem plantavit**, quem **rigavit**, cui
   **dedit** etiam **incrementum***. Vulg. *Ego **plantavi**, Apollo **rigavit**:
   sed Deus **incrementum dedit**.* Three verbatim verbs turned into relative
   clauses. **Prose, no marker.**

**The remaining twenty, checked for silent conformation and left as Philip's own
prose** (none marked, none conformed):
**0090** — Ps. 35:9 / Jer. 2:13 (*Ad hunc fontem aquarum viventium… convenite*,
0401C, the lemma's own image turned into an invitation) · Gen. 2:8 (*de horto
**voluptatis***, 0400D) · John 4:14 (*in vitam vigore vivido **salientis***,
0401D — the same verse cruces-0084 logged at 0395D) · John 3:8 (*etsi **ubi vult**,
et quando vult, adesse*, 0403A) · John 15:26 in prose before its own guilleted
printing (*sicut Pater Spiritum, sic et Filius mittere se testatur*, 0402D).
**0091** — Rom. 8:17 / 2 Tim. 2:5 (*probationis merito dignius et gloriosius
**coronari***, 0403B) · Job 1:12 / 2:6 (*nec ad opus nequam exsurgere, **nisi data
licentia** sit permissus*, 0403A–B) · Matt. 7:25 (*fortique fundamento graves
impetus **fluminis illiduntur***, 0404B) · Ps. 51:10 (*sed **oliva fructifera**
medicinaliter impinguescit*, 0404B) · Job 40:4 / Prov. 30:32 (*ut… stylus noster
paulisper **ori digitum superponat***, 0404C).
**0092** — Luke 1:26–30 (*mittens ad Virginem… **gratiam invenisse***, 0405C, the
Annunciation narrated) · Eph. 2:3 (*supra **naturam irae***, 0406A) · Matt. 13:25
(***Inimicum hominem** qui super **triticum zizania** plerumque **seminat***,
0406D — near-verbatim, and the sentence the chapter's whole enemy-figure rests on)
· Matt. 6:26 / 13:4 (***Volatilia coeli** quae honestum aliquid… non seminant*,
0406B) · Isa. 22:22 / Apoc. 3:7 (*signatis **clave Davidica***, 0406C — the second
printing of the image cruces-0084 logged at 0395D, and unmarked both times).
**0093** — John 2:1–10 (*non exhauritur **hydria**, calix regius aquam nescit, non
**princeps in triclinio** mysterii nescius obstupescit*, 0408D — Cana narrated,
with *architriclinus* Englished into Philip's own phrase) · John 4:24 (*quia **Deus
Spiritus est***, 0409A) · Mark 12:30 / Deut. 6:5 (***toto corde, tota anima, totis
viribus***, 0409C) · Matt. 22:38–39 (*si **primo et maximo** non addatur **simile**
vel **secundum***, 0409D — four verbatim words carrying the paragraph's whole
architecture) · 1 Cor. 2:6 (***sapientiam loquitur ad perfectos***, 0410C, verbatim
but for the person) · Matt. 5:3 (*sed **spiritus pauperie***, 0411A) · Mark
14:51–52 (*relicta **molli sindone** nuditatem*, 0411B).
**0094** — Gal. 4:4 (*cum venit **plenitudo temporis***, 0412D) · Matt. 25:26 /
Luke 19:22 (***servus nequam***, 0413B) · Phil. 2:9 / Heb. 1:4 (*assumpta in Deum
humanitas meretur **super angelos exaltari***, 0413C).
**0095** — Phil. 3:13 (***oblitaque posteriorum***, 0414A) · 2 Cor. 5:6 (***Manens
in corpore**, ab his quae sunt corporis aliena*, 0414A) · Isa. 13:22 / 34:13
(***sirenarum** seductibiles melodias*, 0414B) · 2 Cor. 12:2–4 (*in excessum
rapitur mens serena*, 0414A).

### 2d · Migne's sigla — **twenty-one notes checked, nineteen right, one wrong, one ambiguous**

Reproduced verbatim, none corrected (§10.2). **Correct**, each checked against the
verse it actually stands on: *(Joan. XV)* Jn 15:26 · *(Luc. XII)* Lk 12:19 ·
*(Deut. XXXII)* Deut 32:33 · *(Prov. IX)* Prov 9:5–6 · *(Job VI)* Job 6:12 ·
*(Matth. X)* Matt 10:37 · *(I Cor. II)* 1 Cor 2:2 ⭐ · *(I Cor. III)* 1 Cor 3:2 ·
*(Isa. LV)* Isa 55:1 · *(Isa. XXV)* Isa 25:6 · *(Joan. I)* Jn 1:14 ·
*(Ezech. III)* Ezek 3:1 · *(ibid.)* → Ezek 3:2, resolving correctly ·
*(Psal. LXXX)* Ps 80:11 · *(Psal. CXVIII.)* Ps 118:73 · *(Ephes. III)* Eph 3:9–10 ·
*(Osee. IV)* Hos 4:14 · *(Osee. II)* Hos 2:14.

**The three that need comment:**

1. ⛔ **0412C `[n: (ibid.)]` on Ps. 31:8 — WRONG, and it is §1.3.** The only
   outright wrong siglum in the range.
2. ⚠ **0412B `[n: (ibid.)]` on the Ezek. 2:10 + 3:1 fusion — half right.** The
   chapter named is right for the second half of the span and off by one for the
   first. Recorded, not counted as an error, because the span is a fusion Philip
   made and the note can only name one chapter.
3. ⚠ **0409B `[n: (Rom. V)]` on words that are Wisd. 2:24's — ambiguous** (§2c.3).
   Recorded as ambiguous, not wrong, on the same reasoning cruces-0084 applied to
   *(Eccles. VII)* at 0398A: a tally that counted it wrong would manufacture a
   failure out of a pointer Migne is entitled to key to doctrine.

⭐ **The merge's running §8b picture is unchanged and strengthened.** Nineteen of
twenty-one right here; cruces-0078 fifteen of sixteen; cruces-0084 ten of twelve;
cruces-0066 thirteen of fourteen. **No siglum in this work is systematically
wrong** — including `(I Cor. II)`, now correct three times in three different
ranges, which is the specific claim §8b was revised to make.

⚑ **A numeral-style note for the tally**: **all twenty-one sigla in this range use
Roman numerals**, against cruces-0078's two arabic ones twenty columns earlier.
Recorded so a normalizing sweep does not erase either practice.

### 2e · Brief §6 and §8c — the coverage nulls, recorded

- **Cant. 1:12's *Cum*/*Dum* (§8c) does not occur in this range.** The lemma is at
  Cant. 4:15–5:2 throughout. **Null.**
- **Brief §6's three attested Philip readings** — Zech. 4:14 *splendoris*,
  Gen. 3:19 *Terra es*, Cant. 2:17 *Bethel* — **do not occur here.** **Nulls.**
- **Eccles. 9:1 (§6's fourth) does not occur here.** **Null.**
- ⭐ **§2f's *fluent* was checked against all 126 Latin chunks and is a SINGLETON**
  — *flu[ae]nt aromata* occurs in 0090 only, so unlike the four §6 readings it has
  **no copy-text shape** and should not be filed with them. Recorded because the
  test is cheap and a range that fired a `[var:]` without running it would have
  left the merge unable to tell the two classes apart. Likewise *fovum* (§1.2)
  occurs in 0093 and nowhere else in the work.

### 2f · The first `[var:]`, in full — Cant. 4:16 at 0401D

> *Surge aquilo, et veni auster, perfla hortum meum: et **fluent** aromata illius.*

Vulg. Cant. 4:16: *Surge, aquilo, et veni, auster: perfla hortum meum, et
**fluant** aromata illius.* One letter, and it is the mood: a **jussive
subjunctive** becomes a **future indicative**. Under the Vulgate the clause is the
last member of the invocation — *let its spices flow*; under Migne it is a
promised consequence — *and its spices shall flow* — and Migne's own colon after
*meum* points the sentence that way.

**Fired, and here is the reasoning stated so the merge can reverse it.** Philip
reads it as consequence: *ut ornetur hortus iste et fixo gaudeat de ornatu*
(0402C), *ut ex eis fiant aromata… quae fluant imo influant* (0402D), *hortus
aromatizans fluat, et nobis tanquam superfluat ad medelam* (0403A) — every gloss
turns the clause into a result. The English must therefore read "shall flow", and
a reader who knows "let the spices flow" needs to be told the plate does not say
it. `[var: Vulg. Cant. 4:16 *et fluant aromata illius*, "and let its spices flow"
— jussive subjunctive, where Migne prints the future indicative *fluent*]`

⚠ **Why the companion divergence eleven lines later took NO marker.** The same
verse's second half prints ***ut** comedat* for the Vulgate's ***et** comedat*
(0403D, §2b). Both are one-word changes to the same verse, so the merge should
know the two were weighed separately and deliberately: ***ut*/*et* leaves the wish
a wish** — *let him come, that he may eat* asserts nothing *let him come and let
him eat* does not — and brief §8c has already ruled that class below Pattern 14's
threshold on the *Cum*/*Dum* evidence. ***fluant*/*fluent* changes the mood of the
verb**, which is what Pattern 14 means by sense. If the merge decides the two
should be treated alike, **the consistent answer is to demote *fluent*, not to
promote *ut*** — the English rendering ("shall flow") stands either way, because
that is what is printed.

### 2g · The second `[var:]`, in full — Eph. 3:10 at 0412D

> *Quae sit,* inquit, *dispensatio sacramenti absconditi a saeculis in Deo, ut
> innotescat **principibus** et potestatibus in coelestibus per Ecclesiam
> multiformis sapientia Dei* `[n: (Ephes. III)]`.

Vulg. Eph. 3:9–10: *…quae sit dispensatio sacramenti absconditi a saeculis in Deo,
qui omnia creavit: ut innotescat **principatibus** et potestatibus in caelestibus
per Ecclesiam multiformis sapientia Dei.*

***principatus* is the proper name of an angelic order** — the Principalities of
Col. 1:16 and Eph. 1:21 — and it is what the Vulgate prints in all three of those
places. ***principes* is a generic word for rulers**, and as printed the verse
names no order at all.

**Why it clears Pattern 14's threshold: Philip expounds the divergent word.** Two
lines later he writes *quae **principibus** et angelicis potestatibus quasi
multiplicius innotescit* — repeating Migne's noun, and having to add *angelicis*
to the second member to keep the angelic sense that *principatibus* would have
carried on its own. **That is 7a″'s mechanism running in reverse**: the exposition
has adapted itself to the divergent lemma, which is exactly the evidence that the
divergence was in front of him. Conforming the lemma to *principatibus* would
leave his *angelicis* doing work no one asked for.

`[var: Vulg. Eph. 3:10 *principatibus et potestatibus*, "to the Principalities and
the Powers" — the angelic order; Migne prints *principibus*, "to the princes"]`

⚑ **Deliberately kept OUT of the marker so it cannot elide the finding**: the same
span cuts *qui omnia creavit* between *in Deo* and *ut innotescat*. That is an
internal omission of a relative clause and asserts nothing; it is logged in §2b and
the marker says nothing about it, so that the noun is the one thing the marker
asserts. Siglum correct.

⚠ **The one place in this range I would most welcome a second opinion.** If the
merge judges "princes" and "Principalities" to be the same thing in a
twelfth-century argument about angelic knowledge, this marker should come down.
The English is unaffected either way — it renders *principibus*.

---

## §3 · TYPOGRAPHY

### 3a · ⭐ THE BOOK BOUNDARY AT 0403 — no seam, confirming brief §7 a third time

`LIBER QUINTUS.` falls in chunk 0091, at the **bare anchor `[0403]`** (no band
letter), followed immediately by the marginal source number *233* and then
`CAPUT PRIMUM.` at `[0403D]`. Brief §7 records the question closed at
`LIBER SECUNDUS.` (0246C) and `LIBER TERTIUS.` (0303A). **This is the third
crossing, and the fourth boundary in the work, and it behaves identically:**

- **Guillemets run on both sides.** The last « » before the boundary is
  John 15:26 at 0403A; the next is in chunk 0096, three columns after it. Chunks
  0091–0095 carry none at all — **which is a density fluctuation, not a regime
  change**, because chunks 0092, 0094 and 0095 are pure exposition with no adduced
  proof-text in guillemet position, and 0093 carries nine noted proof-texts *all*
  set in italics as **lemma-adjacent quotations woven into Philip's syntax**
  (`*Bibite,* inquit, *vinum…*`), which is the italic function throughout.
- **Italics run identically on both sides** — head lemma, re-quotation cue,
  displayed verse (§1.1), printed locator (`[CAP. V.]`), marginal source number.
- **The `[CAP. V.]` locator sits INSIDE the italic lemma run**, exactly the
  behaviour brief §7 records for the locator inside a guillemet run at 0203A.

⚑ **Report of an exception, per brief §7's instruction: I found none.** The
boundary is translated as ordinary text.

⚠ **One head-rendering DRIFT the merge must settle, and it is not mine to settle.**
`CAPUT PRIMUM.` occurs five times in the work and the shipped English renders it
**two ways**: `CHAPTER ONE.` at 0002 and 0026 (Books I and II), `CHAPTER THE
FIRST.` at 0047 and 0069 (Books III and IV). **I used `CHAPTER THE FIRST.`**,
following the two nearest and most recent, and flag it here rather than
harmonizing anything outside my own six chunks. Within a work there is one voice
(translation-style, Song section, the ⚠ boundary), so **this needs a merge sweep of
four files, whichever way it goes.** ⚑ The Latin is `CAPUT PRIMUM` spelled in words
at every book head and numerals thereafter (`CAPUT II.`–`CAPUT VI.` in my range),
exactly as brief §7a describes; that half is mirrored and needs nothing.

**Heads in this range**, all reproduced with the full stop, all in numerals except
the book-opening `CAPUT PRIMUM.`: `CAPUT XXVIII.` `CAPUT XXIX.` `CAPUT XXX.`
`LIBER QUINTUS.` `CAPUT PRIMUM.` `CAPUT II.` `CAPUT III.` `CAPUT III. (cont.)`
`CAPUT IV.` `CAPUT V.` `CAPUT VI.` — the `(cont.)` is ours and untranslated
(§10.8).

### 3b · ⚑ §7a mirroring — the drift point — held word by word

Mechanically checkable against the twin by script, and I would check it first in
any review. **None of it was regularized.**

- ⭐⭐ **The chapter-level pattern is the strongest datum in this range, and it is
  counted, not eyeballed.** *Sponsus*/*sponsus* and *Virgo*/*virgo* swing by
  chapter, and the swing is total:
  - **0093 (*Caput* III, cols 0407B–0411B) capitalizes EVERYTHING** — *Sponsus* ×5,
    *Sponsum* ×2, *Sponso* ×2, *Sponsa*, *Sponsi*, *Sponsali*, *Virginali*, and
    *Virgo/Virginem/Virgine/Virgini/Virginis* ×11. **Not one lower-case token in
    1,912 words.**
  - **0095 (*Caput* V–VI, cols 0413D–0415C) is the inverse** — *sponsus* ×4,
    *sponsi* ×3, *sponso* ×2, *sponsae*, *sponsam*, *sponsum*, *sponsa*, and
    *virgo*, *virgineo*: **thirteen lower-case tokens and ONE capital**, *Sponsi*
    at 0415A, which falls inside the Bride's own first-person speech. All fourteen
    mirrored.
  - **0094 straddles**: capital *Sponsus* at 0411C and 0412C, then lower-case
    *sponsus* and *sponsa* at 0413C, in the chapter's last two sentences — **the
    same "slides into the new practice before the head" behaviour cruces-0078 §6.3
    documented at *Caput* XIV/XV.** A second instance of that shape, twenty-six
    columns later.
- ⭐ **0402B, both cases of *Virgo* in one clause, against a capital two columns
  earlier**: *virgo vel hortus **virginis** claudit tibi ostium jam deriso*
  (lower ×2) against *Virginis benevolentia* (0400D) and *Virginis sapientia*
  (0401A). Rendered "the virgin, or the virgin's garden" and "the Virgin's".
- ⭐ **0402C, capital *Virgo* twelve words from lower-case *virginis***: *adhuc
  **Virgo** tali est beneficio non contenta*.
- ⭐ **0403B, lower-case *virginem* and *virgini* in one sentence, against capital
  *Virgo* at 0404B and 0403D** — *adversus **virginem** effrenata malitia
  praevalere, venit auster dans **virgini*** vs *Virgo non ut cremium exarescit*.
- ⭐ **0405D, capital *Sponsae* four lines from lower-case *sponsam***: *quomodo
  **sponsam**, quam severo… suasit mysterialis unitas amplectendam* → *Cujusmodi
  nominum videlicet **Sororis** et **Sponsae***. ⚑ **And this one has a visible
  local logic**: the capitals fall on the two words **discussed as words**
  (*nominum videlicet*), the lower case on the ordinary uses. Recorded as an
  observation, **not** as a rule — the 0402B pair above has no such explanation.
- ⭐⭐ **0402D–0403A, the Trinity capitalized and then not, inside three lines**:
  *sicut **Pater Spiritum**, sic et **Filius** mittere se testatur, qui **spiritus**
  etsi ubi vult… « Cum venerit, inquit, Paracletus… » Mittit ergo **spiritum
  filius** horto…* — **capital Pater / Spiritum / Filius, then lower-case spiritus /
  spiritum / filius, with a guilleted scripture quotation standing between them.**
  All six mirrored ("the Father… the Son… the Spirit" then "which spirit… The son
  therefore sendeth the spirit"). ⚠ **This is the mirroring decision in my range
  most likely to read as an error to someone who has not seen the plate**, and it
  is one line of change if the merge prefers to regularize.
- **The *Spiritus sanctus* question, a fourth data point.** 0402C prints ***sancti
  Spiritus*** — *auster typum **sancti Spiritus** obtinere*. Brief §7a's worked
  example has 0305B *Spiritus sanctus* and 0356C *sancti Spiritus*; cruces-0078
  added 0379C's split *sanctusque… Spiritus*. **This is the second printing of the
  0356C arrangement**, and it is the second time the *sancti Spiritus* order has
  appeared. Rendered **"the holy Spirit"**, lower-case *holy*, matching cruces-0066
  and cruces-0078. **So the merge is choosing among three attested arrangements
  with a 2–1–1 count, not among three singletons** — which is the useful form of
  the fact.
- **Pattern 3 fires TWICE, and BOTH are bare forms** — the exact class brief §5
  flags as the one 11638's sweep missed. 0409D *legi satisfaciens vel
  **Scripturae*** and 0412A *non **Scripturae** sono tinnulo*, both genitive
  singular, no *divina*, no *sacra*, no *sancta*. **Both rendered "Holy
  Scripture."** ⚑ There is no other *Scriptura* of any form in the six chunks
  (scripted).

### 3c · Marginal source-edition numbers

*231* (0400D) · *232* (0402C) · *233* (0403, immediately under `LIBER QUINTUS.`) ·
*234* (0405D) · *235* (0407C) · *236* (0409B) · *237* (0411A) · *238* (0412C) ·
*239* (0414B). **Continuous with cruces-0084's *223*–*230*.** Each kept italic and
verbatim **at the exact word it interrupts**, and the English clause was built
round each rather than moving it: *231* falls between *bibendi* and *repulsam
duriorem*, *232* between *vultu ei* and *placido*, *234* between *severo* and *et
sincero*, *237* between *documentum* and *quid sibi vult*, *238* between *vobis
autem* and *mihi ministrantibus*, *239* between *subtilius* and *alloquenti*.
⚠ *232*'s and *239*'s slots forced "present thee to her with a calm *232*
countenance" and "more sweetly and more subtly *239* speaketh"; both are more
contorted than I would otherwise write, and both are deliberate. ⚑ ***233* is the
odd one and worth a line**: it stands alone on its own line between the book head
and the chapter head, beside a **bare `[0403]` with no band letter** — the only
bare anchor in the range.

### 3d · Pattern 17 — decided by morphology throughout, never by who is addressed

- **Singular → *thou*.** The address to the north wind, which is sustained for
  two columns and is the range's densest singular run (~35 tokens): *Tu, ait, qui
  **tibi posuisti** sedem… **surge**… **te** securum… **Putasti** similem **te**
  fore… **dicebare**… **tuae** nequitiae… **compesce**… **evanesce**… **te**
  disperge… **te** immerge… non **tua** ludibria… **tibi** perdito… **corrupisti**…
  **tibi** ostium* (0401D–0402B) · the address to the south wind: *Tu igitur qui non
  **gaudes**… nec… **sinis**… **te** praesenta… **veni**: spira et fla* (0402C) ·
  and both again at 0403B–C: ***Surge**, ait, aquilo, **erumpe**… **exere**…
  intona, fulgura, perstrepe, ingere… **congere**, **adde**… ne **putes**…
  quidquid **ingeris**… **Tu** aquilo **surge** et **insurge**… **persona**… **tu**
  auster intro **spira**, **da**… **tu** maligne… **exaspera**… **tu** benigne
  **confirma***. Likewise the Bridegroom to the Virgin at 0405C (*Tu, inquit,
  sollicite **petis** ut veniam*), and the scriptural singulars **Ezek. 3:1**
  (***comede**… **loquere***), **Ps. 80:11** (***Dilata** os **tuum***),
  **Ps. 118:73** (***Da** mihi… mandata **tua***), **Ps. 31:8** (***tibi** dabo, et
  instruam **te***).
- **Plural → *you*.** **John 15:26** (*quem ego mittam **vobis***) · Philip's
  address to the worldly-wise at 0401C (***convenite**… **vos** compedibus
  **expedite**… **effutite**… **vestri** ruinam studii… **resarcite***) · his
  address to his brethren at 0404A (*Nunquid non **vobis** visus est aquilo*) and
  0407B (***Nostis** favum*) · **Prov. 9:5–6** (*miscui **vobis**: **relinquite**…
  **vivite***) and Wisdom's own gloss on it (***Vos**, ait, quos tenet infantia…
  **laboratis**… **bibite***) · **Ovid** (*Quid **vos** perdiderit… **nescitis***) ·
  **1 Cor. 2:2** (*inter **vos***) and **3:2** (*lac **vobis***) · **Isa. 55:1**
  (***Venite**, **emite***) · **Cant. 5:1d** (***Comedite**… **bibite** et
  **inebriamini***) and Philip's whole gloss on it (0411C–0413A: ***Vos** ait…
  **comedite** quae **vobis** apponuntur… **intelligite**… **vobis** autem mihi
  ministrantibus… **capitis**… **estote**… **videamini** quod **coepistis**…
  **bibite**… **diligite** quod… **percepistis***, ~20 tokens).

⭐⭐ **The pair the merge should like is the finest one this work has yet produced,
and it needs no apparatus at all.** Within **eight lines** at 0411C–0412A Philip
sets the Song's plural *Comedite… bibite… vobis* (the Bridegroom to the angels)
beside Ezekiel's singular *comede… loquere* (God to one prophet) — **and his entire
argument is that "eating" means "understanding" in both.** Under Pattern 17 the
English reads "Eat, O friends… eat the things that are set before you" and then
"Son of man, eat this volume, and going speak", and a reader can see, with nothing
but the pronouns, that Philip has moved from a heavenly court to a single man. A
flat "you" makes the move invisible; a flat "thou" falsifies it. This is the
Dorotheus Phil. 4:7 case (Pattern 17's worked example) reproduced in Latin.

---

## §4 · PATTERN 7 / 8 / 9 / 10 — three `[sic:]`, and the readings rendered as printed

**None of the three carried runs is ALSO translated in the running text** (brief
§8's named failure — checked word by word on a separate pass, after the prose was
drafted).

1. ⭐⭐ **0407A `[sic: *fovum*]`** — the lemma defect. **See §1.2**; not repeated.
   Read ***favum***, certain.
2. ⭐ **0408D `[sic: *attunt*]`** — *et inde in celebrato nuptiarum mysterio Sponsus
   egreditur; tantam secum **attunt**; tantam voluit plenitudinem nuptiis
   interesse.* ***attunt* is not a Latin word** in any form — not a verb, not a
   noun, no attested medieval spelling. Read ***attulit***, probable: *tantam
   secum attulit* ("he brought so great a fullness with him") is what the
   accusative *tantam* requires, and the next clause supplies the very noun
   (*tantam… plenitudinem*). **Carried untranslated in italics**: the English reads
   "so great he [sic: *attunt*] with himself; so great a fullness he willed to be
   present at the nuptials", and it deliberately does not say "brought".
   ⚑ **Recorded but NOT marked `[d:]`**: the doubled *tantam* looks like a
   compositor's eye-skip, but the two occurrences govern different constructions
   and the second carries its own noun, so it is not the repeated *run* Pattern 11
   marks. Logged here instead.
3. ⭐ **0413D `[sic: *sommo*]`** — *nuptiali pausat in thalamo, et oculos vel ad
   modicum **sommo** claudit.* ***sommo* is not a Latin word**; read ***somno***,
   certain. **The internal control is three columns wide and inside the same
   chapter**: Migne prints *somno* / *somni* / *somnum* correctly **six times** in
   the next two columns — *procul a **somno** pellens nubes* (0414A), *inventam
   **somni** dulcedinem* (0414B), ***somnum** excutiat violenter* (0414B),
   *cum gustata **somni** dulcedine* (0414D), *praeoptato **somni** munere* (0415A),
   ***somno** delectabili delinita* (0415B) — and the chapter's entire subject is
   the Bride's sleep. Carried untranslated: "and closeth her eyes even for a little
   with [sic: *sommo*]".

All three marker contents verified as verbatim substrings of the twin by script.

**Rendered as printed, no marker (real words merely wrong, or Pattern 9 exempt) —
conjectures live here and NOT in the text:**

- ⛔ **0411A, *in quo omnis qui sane **Christus** amat, cum eo permanet in
  aeternum*.** Read ***Christum***, certain: *qui* is the subject of *amat*, so
  *Christus* stands in an object slot as a nominative. ⚑ **Pattern 9, and it needs
  to be told apart from the *Jesus*/*Jesu* case at 0397B (cruces-0084 §1.3), which
  it superficially resembles.** There, the nominative produced a **readable
  alternative sense** ("Jesus anointed the feet"), so the English could and did
  render the mis-bound agency and a `[var:]` fired. **Here no alternative reading
  exists** — *cum eo permanet* fixes Christ as the one abided with, and English has
  no way to put a nominative in an accusative slot. **Rendered normally, "everyone
  who soundly loveth Christ", unmarked**, and logged so a sweep does not churn it.
  ⚠ **The distinction is worth keeping: agency mis-bound is Pattern 7a mechanism 5
  only when English can express the wrong binding.**
- **0407A, *quamvis necdum omnia juxta libitum Virginis peregisse*** — an accusative
  infinitive left hanging where *peregerit* is wanted. Anacoluthon with no English
  exponent; rendered "although he had not yet accomplished all things according to
  the Virgin's pleasure." Pattern 9, logged.
- **0408C, *suavitate inebriat **quampraeclara***.** Run together for *quam
  praeclara*. ⚠ **Deliberately NOT marked `[sic:]`**, against my first instinct:
  *quamplures*, *quamplurimi* and *quamprimum* are attested solid compounds and
  this is the same formation, so Pattern 9's "attested medieval spellings are
  correct Latin" exempts it, and Pattern 10's run-together class is for type that
  **cannot be rendered**. It can: **rendered "with a right excellent sweetness."**
  ⚑ Logged rather than marked, and flagged as a judgment the merge may reverse —
  if it does, the marker is `[sic: *quampraeclara*]` and the English must stop
  rendering it.
- **0409A *debriare* and 0413B *debriati***, against the lemma's own *inebriamini* /
  *inebriantur* / *inebriat*. *debriare* is attested late Latin; Pattern 9,
  unmarked. ⭐ **But kept lexically distinct in English on purpose** — *inebriare*
  = "to inebriate" (the lemma word, and Philip glosses it: *inebriantur, cum
  stupent et haerent*), *debriare* = "to make drunken". Collapsing them would put
  the lemma's word in two places Migne does not.
- **0401C, *tumorem philosophicum iteratis vomitibus **effutite***.** *effutire* is
  "to blab, to pour out"; with *vomitibus* the natural English is "cast out", which
  would be a repair. **Rendered on the root sense, "pour out"**, and logged.
- **0405D, *quem **severo** et sincero commercio suasit mysterialis unitas
  amplectendam*.** *severo* is odd of a marriage-commerce and *sacro* would suit;
  but *severus* is a real word and the austerity theme runs through the chapter
  (*Districta castigatio, abstinentiae fortis austeritas*). **Rendered as printed,
  "by a severe and sincere commerce", NOT emended.**
- **0400D, *vel oblatae forte **gratis** repulsae contumeliam non referre*.**
  *gratis* (adverb) where *gratiae* (genitive, with *oblatae*) is wanted. Real word;
  **rendered as printed** — "or not to bring back the reproach of a repulse where
  grace is perchance offered" — and logged.
- **0413D, *Virgo **forum forense** judicans quidquid alto silentio non
  applaudit*.** Not corrupt, but very hard: *forum forense* is a figura etymologica
  with no English exponent. **Rendered as closely as the printed words allow** —
  "judging whatsoever applaudeth not in deep silence to be a market and a thing of
  the market-place" — and logged rather than smoothed.
- **0406B, *non avis alta sapiens introire*.** *alta sapiens* ("wise for high
  things") of a bird is strange but constructible; rendered "the bird that is wise
  for high things", unmarked.
- **Attested forms rendered normally, Pattern 9, no italics, no `[sic:]`:**
  *spiritalis / spiritali / spiritalem* throughout (Migne's habitual spelling) ·
  *Paracletus* (0403A) · *Tanquam* (0410C) · *vermescentis* (0401D) ·
  *hauritorium* (0401A ×2) · *reliduntur* (0404B) · *cremium* (0404B) ·
  *repostoriam* (0407B) · *mysterialis* / *mysterialibus* (0405D, 0412C) ·
  *sophistae* (0406D) · *nundinas* (0411B) · *asseclae* (0411B) ·
  *comparticipes* (0411B) · *exstasim* (0413B) · *delinita* (0415B).

**Pattern 8 — punctuation, three live cases, all preserved:**

1. ⭐ **0413A, a full stop in mid-sentence followed by lower case:** *Si me,
   inquit**. donante** sacramenta recondita capitis intellectu…* Brief §5 is
   explicit that Migne's lower case after a misplaced stop **stands**, and Pattern
   8 forbids deleting the stop. **Rendered "If, by me, saith he. giving, ye take in
   the hidden sacraments by understanding…"** — deliberately broken. ⚠ **Do not
   churn this.** Same call cruces-0084 §4 made for *inquam favus* at 0391C.
2. **0400D–0401A, a semicolon splitting a relative from its own main verb:**
   *Nos enim quibus placet inventa suavitas sentiendi, sed claudit velut aditum
   labor nimius requirendi**;** illius non exasperat…* Preserved.
3. **0408D, a semicolon between the participial run and its verb:** *et inde in
   celebrato nuptiarum mysterio Sponsus egreditur**;** tantam secum attunt* —
   preserved, and see §4.2.

Also preserved: 0401D's colon before *et fluent* (§2f), which is load-bearing;
0407A's colon inside the lemma (*cum melle meo**:** bibi vinum*); 0412C's stop
inside the note parenthesis (`(Psal. CXVIII.)`).

**Negation audit (brief §9), second pass, against the Latin.** Every printed
*non / nec / neque / nisi / nihil / nil / nullus / nunquam / nondum / necdum /
nequaquam / nonnisi / nesci- / ne* in the six Latin chunks was matched against the
English **after** the prose was drafted. The dense clusters are **0401B–0402B**
(*quidquam morticinum, quidquam noxium **non** accedit, **non** serpens insibilat,
**non** venefico flatu laedit; **non** lapsus desuper ramus turbat, limus influens
**non** succedit… quidquam inesse turbidum **non** concedit… nivibus **non**
solutis… largiore copia **non** haurimus… **ne** festinus praeveniat… **non** super
horti pulchritudinem saeviturum… **non** sit per alterum luminare… **nec**
Altissimus potest dici… **non** tua ludibria, **non** ludificantium placet jocus…
**non** est locus… **non** insanit… **ne** cures*), **0402C–0403C** (***non**
admittit… **non** gaudes… **nec**… sinis… **nil** habetur caliginis, **nil**
obsceni… **non** potest aquilo sustinere… **non** prorsus removet… **nisi** missus,
**nec** ad opus nequam exsurgere, **nisi** data licentia… **nec** timere minas…
posse **non** deficere… **nesciens** rei finem… **ne** putes… vel prorsus **non**
sentiat, vel saltem **non** deficiat*), **0404A–0405B** (***Nunquid non** vobis…
**Nunquid non** dure intonat… **Non** est dictu facile… **non** excussit…
**non** ut cremium exarescit… **non** auro comparabilia **non** argento… **Non**
ergo illi soli… **non** claudere cuncta silentio… **non** potest diutius
desiderium… **non** ardere… **non** praevaleant imo **nec** habeant quidquam
juris… **non** confusam… **non** vocatum… **non** vocare nequeat… **non** alterius,
**non** in jus alienum… **nisi** forte senserit intempestum… **non** praetendunt,
quae **non** sicut nonnullorum visa placent… **non** tam in agro… **nec** adventum
postulatum… **non** se spondet*), **0405C–0407A** (***Nec** enim dignum est…
**non** bona magis initia… **ne** fastidium generet… **nequaquam** forte solis
praesentibus… **ne** putetur illic torpore… **nil** egisse… **necdum** omnia…
**non** inferret extollentiae cariem, **non** vermiculum, **non** laesuram…
**non** posset agri bestia, **non** avis… **nil** suum in conceptu… **nil**
depopulatorium… **non** seminant… **non** violentia, **non** fraudulentia…
**non** exaudit… **ne** in agro feris exposito laedatur… **non** praevalens…
**Non** vult enim… quamvis caeteris inexperta*), **0407A–0408A** (***non** addit se
perfusum… **cum non** myrrha videatur… **cum non** dicat aromata quispiam…
**non** molli somno… **nihil** amaritudinis… **non** cujus nocte repetenda…
**non** spem tendit falsam… **neque** vannum… **nil** melle dulcius… **nulla**
Christo gratior… laedi **non** sustinet, arescere **non** permittit… **negato**
sibi melle… **non** dulcescit… **non** clarescit… **non** assumit… **non**
corruptibili… **non** aquis turbidis… **non** algere se defectu*), **0408A–0409B**
(***non** illud insanabile… **non** aquas insipidas… **non** annorum… **non**
aetatis… **non** defectu virium… **non** Falernum… **nequaquam** ad majora
sufficit… quae **non** amat, vel potius, **nonnisi** carnaliter scit amare…
**non** ad lucem promovet… **non** serenat… **nescitis** amare… **non** vino…
**non** exhauritur hydria… aquam **nescit**… **non** princeps… **nescius**
obstupescit… **non** conqueritur quispiam… **non** Sponsus arguitur… **nil**
deesse… **non** debent nuptiae sine vino… quae **non** fiunt solius carnis
intuitu… **non** vinum deficit… **non** solum reficit… **non** carnali… **non**
visibiliter vult videri*), **0409B–0410D** (***non** falleretur homo, **nec**
doleret… **non** in illis, sed in hominibus… **non** satis utile, **non** fecundum,
**si non** primo et maximo… **non** persequitur odio novercali… **Neque** enim
duritia lapidum… **nec** mens ejus aenea… **non** divino derogat, **non** vino
praejudicat, **non** semper est adversarius… **si non** solus principari… **non**
est me dignus… **non** damnavit… careat vel mensura… **necdum** sunt idonei…
sine primo… **non** novit invidere… **nonnisi** crucifixum… **necdum** poterant…
**Non** judicavi… **nisi** Jesum Christum… **non** escam… **non** detrectat*),
**0411A–0412C** (*absque argento: et absque **ulla** commutatione… **non**
placari… **non** admittitur **ulla** commutatio, **non** argentum… **non** auro,
**non** argento, **non** terreno… **Non** enim pecuniarum congerie… pretium vile
**nescit**, **nec** ab eo vult teneri… **nullam**… praeferunt mentionem… alterum
ille sine altero **non** sitiret… pulsis longe **non** amantibus… **non** esse
inopes sustinet, **non** jejunos… remotisque **non** amantibus… **non**
indigentiam intendit pellere… **nihil** vel parum prodest… **non** dente, sed
mente… **non** sola cibi contentus specie… **non** Scripturae sono tinnulo…
**nequit** suae solius viribus… **necdum** sibi sufficit… **nullo** mihi studio
**nullis**… viribus… **ne** ex toto a pastu sim dignus abigi*), **0412C–0413C**
(***noluit** eos esse… **non** amicis… quod natura **non** obtinet… **Neque**
enim, ut nonnulli aiunt… **non** angelo, **non** homini satis… **si non**
intellectui… **non** contenti… **Nihil** enim vel parum prodest… **si non** gratia
potiore… populus **non** intelligens… **non** diligens intellecta… **non** solum
intelligere… **non** sufficiunt admirari*), and **0413D–0415C** (***non** vino…
**non** applaudit… **Ne** vero dormitio videatur… **ne** turbet moles… **ne**
secretum cubiculi quaevis intret… **non** refutat… **nihil** se medium
interponet… **ne**, ut volo, veniat ad perfectum… **si non** meae voluntati…
**non** mediocriter complacere… exteris **non** patere… **non** instar patulum
lupanaris… **nunquam** prorsus noverit, **nisi** cum ipse pulsaverit… **non** sibi
claustrum aperiat, **non** prorumpat… **nisi** pulsata fuerit… **non** solum
**non** cuivis, sed **nec** sponso festinat aperire… **nisi** tandem… **non**
reposcit… **non** audit vel exaudit… **non** obturat… **non** solum secretius*).

**No negation was dropped and none was supplied.** ⚠ **Two places were caught by
this pass and would otherwise have shipped wrong**, both recorded per brief §9:

- ⛔ **0405A, mechanism 5 (scope), and it is the one I would most want a blind read
  to confirm.** *quae **non** sicut nonnullorum visa placent, tacta protinus
  evanescunt*: the `non` governs **both** verbs — the apples do not do what other
  men's apples do, namely please when seen and vanish when touched. The draft had
  rendered it "which please not, as the apples of some men do, when seen, and
  straightway when touched vanish away", which puts *evanescunt* **outside** the
  negation and makes Philip say the Virgin's apples vanish. Fixed to "which do not,
  as the apples of some men do, please when seen and straightway vanish when
  touched." ⚑ **No negation count could have caught this** — the *non* is present
  in both drafts. It is Pattern 7a's mechanism 3/5 territory, and exactly why the
  audit is a read and not a tally.
- **0402B, mechanism 2 (a softened negation).** *Inter nostra seria **non** tua
  ludibria, **non** ludificantium placet jocus* — two members under one *placet*.
  The draft rendered the first "thy mockeries have no place", which is a paraphrase
  rather than the printed *non… placent*. Fixed to "thy mockeries please not, the
  jest of them that make sport pleaseth not."

---

## §5 · CONVENTIONS SET OR HELD IN THIS RANGE

1. ⭐⭐ **`emissio` = "emission" — INHERITED AND HELD, and mine is the first range to
   inherit it.** cruces-0084 §5.1 set it at Cant. 4:13 and flagged that "the 0090+
   range inherits this word." **It arrives in my first sentence**: 0400D *Sicut
   **emissiones** tuae mala sunt Punica… sic **emissio** tua, est non horti unius,
   sed potius fons hortorum*. Two occurrences, both rendered **"emissions" /
   "emission"**, and the sentence is the hinge on which *Caput* XXVIII turns from
   Cant. 4:13's *emissiones* to Cant. 4:15's *fons hortorum*. Douay's "thy plants"
   would sever it. ⛔ **The cross-chunk decision held; the merge must not undo it.**
2. ⭐ **`lactare` at Hos. 2:14 = "to give milk", NOT Douay's "allure" — set here,
   and the whole of *Caput* V depends on it.** Douay renders *lactabo eam* "I will
   allure her" (following the Hebrew), and *lacto* does carry that sense in Latin.
   **But Philip reads the milk**, and reads nothing else: the verse arrives at the
   end of two chapters built on *lac* (Cant. 5:1's *vinum meum cum lacte meo*,
   1 Cor. 3:2's *lac vobis potum dedi*, the Virgin's *teneritudinis lac*), and his
   gloss is unmistakable — ***Lactabo**, ait, cum in sinu meo inclinato capite se
   deponet* (0414C) and ***Lactat** ergo Virginem sponsus, cum ad sui arcana
   pectoris introducit* (0414D). **Rendered "I will give her milk" / "giveth the
   Virgin milk" at all three sites.** This is the Song section's case 2 exactly:
   where the gloss IS the word, an English word sharing no sense makes the gloss
   explain nothing. ⚠ Offered to the merge as a new fixed equivalence; **the verse
   does not recur** (scripted).
3. ⚠ **`thalamus` = "bridal chamber" — ADOPTING cruces-0084 §5.5's recommendation,
   and the merge should now treat it as settled.** That file rendered *thalamus*
   two ways (0390B "bridal chamber", 0395D "nuptial bed") and said: "a merge that
   wants one English word for *thalamus* should pick 'bridal chamber' and change
   0395D." **I used "bridal chamber" at all four sites** — 0403A *horto sive
   **thalamo** virginali*, 0404A *confirma **thalamum***, 0408D ***thalamum**
   nuptialem*, 0413D *nuptiali pausat in **thalamo*** — which makes the
   recommendation a one-file change (0395D) instead of a five-file one. ⚑ The two
   *nuptialis* sites read "the nuptial bridal chamber", which is heavy, and the
   heaviness is the price of the single word.
4. **Bed- and chamber-words: `cubile` does NOT occur in this range**, so brief §5's
   live drift closure needs nothing from here. **Null recorded.** *cubiculum* =
   **"chamber"** (0413D, 0414B), held from cruces-0078 §5.2. *lectus* / *lectulus*
   do not occur. ⚠ ***accubitus* is new and I had to set it: rendered
   "reclining"** (0413D *molliore **accubitu** se reclinat* → "in a softer
   reclining"; 0415A *in meo… **accubitu** praeoptato* → "in my chosen reclining").
   **"Couch" was deliberately NOT used**, because brief §5 reserves it for *cubile*
   and a third word entering the pair would void the *lectus*/*lectulus*
   distinction the brief protects. ⚑ Flagged because *accubitus* is Cant. 1:12's
   word (*Dum esset rex in accubitu suo*) and later ranges will meet it as a lemma.
5. **Brief §5 vocabulary held where it occurs:** ***adolescentulae* = "maidens"**
   (0414D, *assistentibus sibi… **adolescentulis***) · ***cellarium* = "storeroom"**
   (0411C, *aperto **cellario***, matching *cellaria* = storerooms) ·
   ***charitas* = "charity"** (0404D, 0410B, 0414D — and note 0414D's *fraterna
   vigilans **charitate*** stands eight lines from *amore et curam proximorum*,
   rendered "love", so the §5 split is visible) · *Sponsus* = Bridegroom, *Sponsa*
   = Bride, *Virgo* = Virgin, with §3b's lower-case instances mirrored ·
   **Pattern 3** — see §3b · ***muraenula*, *ferculum*, *vermiculatas*, *cancelli*,
   *nigra/fusca/formosa*, *clementia*, *misericordia*, *moralitas*, *recti*,
   *torcular*, *candidatio*, *vicus*, *platea*, *amica mea*, *tomus* do not occur
   in this range.** ⚑ ***vermiculum* DOES occur once** (0406B, *non inferret
   extollentiae cariem, **non vermiculum**, non laesuram*) and is rendered **"little
   worm"** — the literal English that brief §5's *vermiculatas* ruling is built on
   (vermiculate → vermilion → little worm), here in its plain sense.
6. **New fixed equivalences this range had to set**, offered to the merge:
   - ***aquilo* = "the north wind" · *auster* = "the south wind"**, Englished
     rather than carried, on the brief §5 *candidatio* principle: *Caput*
     XXIX–XXX is four columns of weather and the argument (cold/warm, frost/breath,
     Lucifer/Spirit) is unreadable in Latin. The vocatives read "thou north wind",
     "O south wind". *arcturus* stays **"Arcturus"** (0401D), a proper name.
   - ***favus* = "honeycomb" · *mel* = "honey" · *cera* = "wax"**, fixed through
     *Caput* III's eight-column exposition, where all three are the argument
     (0407B–0407D). See §1.2 for the lemma's broken type.
   - ***inebriare* = "to inebriate" · *debriare* = "to make drunken" · *ebrius* =
     "drunken"**, kept apart — §4 above.
   - ***volumen* = "volume"** through the Ezekiel sequence (0411D–0412B, six
     occurrences), **not Douay's "book"**, because Migne prints *librum* four times
     in the same paragraph for the physical book and Philip's whole gloss turns on
     the roll being *expansum* (spread open) as against *involutum* (rolled up).
     ***liber* = "book"** accordingly.
   - ***sodales* = "companions" · *amici* = "friends" · *charissimi* = "most dearly
     beloved"**, fixed at Cant. 5:1d, where Philip distinguishes the three
     explicitly (0413C: *amicos nominavit, ebrios autem… **charissimorum** nomine
     cumulavit*).
   - ***affectus* = "affection" · *effectus* = "effect"**, held rigidly from
     cruces-0078 §7 — 0404B's *sic **affectu** vario et **effectu** contrario auster
     et aquilo conseruntur* is the pair again, twenty-eight columns later.
   - ***intellectus* = "understanding" · *intelligentia* = "understanding" (of the
     faculty's act) · *sensus* = "sense"**, and ***comestio* = "eating"**, fixed
     through *Caput* IV, where *comedere* = *intelligere* is the chapter's thesis.
   - ***probatio* = "trial" · *tribulatio*/*tribulare* = "tribulation"/"to
     tribulate"**, fixed at 0404D's Rom. 5 chain (§2c′.2), so the chain survives
     in English as a chain.
   - ***hauritorium* = "bucket" · *funis* = "rope" · *puteus* = "well" · *fons* =
     "fountain"**, fixed at Cant. 4:15, where *fons* and *puteus* are set against
     each other for a full column (0400D–0401B: the shallow fountain for the weak,
     the deep well for the strong) and a single English word would collapse the
     argument.
   - ***phantasma* = "phantasm" · *phantasia* = "phantasy"** (0414A), kept apart
     because Migne prints both in one clause.

---

## §6 · THINGS DELIBERATELY NOT REPORTED (brief §10, checked once each)

- **Column-band arithmetic.** Chunk 0091's anchors run `[0403B] [0403C] [0404A]
  [0404B] [0404C]` and then **back to a bare `[0403]`** before `[0403D] [0404D]`.
  That is §10.1's named false positive twice over — a recurring column number and a
  band regression — and it is normal: the book head is set on a fresh page and
  Migne's marks interleave. **Checked on the only real signal: no anchor in any of
  the six chunks is followed by text broken mid-word or mid-construction.** Chunk
  0094 opens with `[0411C]` inline before its lemma and 0092 closes with a bare
  `[0407A]` under `## CAPUT III.`; both are clean. **No `[ed:]`, no patch, no plate
  check, nothing reported.**
- **`noteCount` matches the body `[n:]` count in all six chunks** (1/0/0/9/10/1),
  verified by script against the Latin twins.
- **No `[f:]`.** 11632 is lemma-and-gloss, not a florilegium (§10.4).
- **No `[d:]`** — see §4.2 for the one candidate and why it is not one. **No
  `[nt:]`:** all twenty-one notes are bare citations, none editorial prose. **No
  `[ed:]`:** nothing lost.
- **Migne's own `( sic )`** does not occur here. **Migne's `[ *alias* …]` bracket**
  does not occur here (§10.7 — a work-wide singleton at 0321B).
- **`(cont.)` on 0093's `## CAPUT III.` head** is ours and is not translated
  (§10.8).

---

## §7 · WHAT A LATER BLIND READ SHOULD LOOK AT FIRST

1. ⛔⛔ **0407A, the lemma's *fovum*** (§1.2). **The single most repairable place in
   the range**, and the one a reader will silently fix without noticing. Confirm
   the `[sic:]` is still there, that the English does **not** also say "honeycomb"
   in that sentence, and that *favum* still stands correctly six times in the two
   columns after it.
2. ⛔ **0405A, the *non… placent / evanescunt* scope** (§4, negation audit). The
   one place a faithful negation was nearly put outside its own clause. A count
   cannot see it; only the pair can.
3. ⭐⭐ **§1.1's displayed-verse rule.** The claim to test is arithmetical and cheap:
   ten intra-paragraph line breaks in 126 chunks, nine italic quotations and one
   bare block that is Philip's own poem. If a single displayed classical quotation
   anywhere in the work is bare, the rule is wrong and cruces-0084 §3b's narrower
   statement should stand instead. **I did not verify the *identifications* of the
   0006, 0007 and 0110 verses against an edition** — only their marking — so treat
   the poet-attributions in that table as provisional and the marking as scripted.
4. ⭐⭐ **0412C, the `(ibid.)` → Ps. 118 on Ps. 31:8** (§1.3). Two things to test
   separately: that Ps. 118 contains no such clause (certain), and that Ps. 31:8
   is the right verse (verbatim). ⛔ **And confirm that nothing has been
   "corrected"** — §10.2 is the reason.
5. ⚠ **0412D, the Eph. 3:10 `[var:]`** (§2g). The divergence is certain
   (*principibus* ‖ *principatibus*); the judgment that it clears Pattern 14 is
   mine, and rests on Philip's *principibus et **angelicis** potestatibus* two
   lines later. **If the marker is wrong it is wrong on materiality, not on fact.**
6. ⚠ **0401D, the Cant. 4:16 `[var:]`** (§2f). Same test, and note the deliberate
   asymmetry with *ut comedat* at 0403D. Reversing either one should reverse it in
   the direction §2f names.
7. **§3b's Trinity capitalization at 0402D–0403A** — the mirroring decision in this
   range most likely to read as an error to someone who has not seen the plate.
8. ⚠ **§3a's `CAPUT PRIMUM` drift** — 2 files say "CHAPTER ONE.", 2 say "CHAPTER
   THE FIRST.", and mine makes it 3–2. **A merge sweep, not a range fix.**
