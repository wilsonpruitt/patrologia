# Cruces — 11632 chunks 0042–0047 (cols 0289D–0303D)

Philip of Harvengt, *Commentaria in Cantica canticorum*, PL 203. Range covering
**Book II *Caput* XXII–XXVI** (Cant. 2:3–7: *Sub umbra illius quem desideraveram,
sedi* → *Introduxit me rex in cellariam vinariam* → *Fulcite me floribus* →
*Laeva ejus sub capite meo* → *Adjuvo vos, filiae Hierusalem*), then the
*explicit*-less transition to **`LIBER TERTIUS.`** and Book III *Caput* I–II on
Cant. 2:8 *Vox dilecti mei*. Six chunks, 6,343 Latin words.

**Marker totals for this range: 7 `[var:]` · 1 `[sic:]` · 0 `[ed:]` · 0 `[d:]` ·
0 `[nt:]` · 0 `[f:]`.** `verify-english.mjs` reports **no errors** on any of the
six; four ratio warnings (0044 1.62, 0045 1.65, 0046 1.68, 0047 1.61), all inside
the 1.35–1.68 band this work has already shipped (0004 1.64, 0005 1.68, 0026
1.66, 0035 1.65). Column anchors (13/10/8/9/13/4), `[n:]` strings (16/7/5/5/4/4,
each matching its frontmatter `noteCount`) and guillemet counts were **diffed
1:1 against the Latin twins by script**, not by eye: anchors byte-identical in
order and place, `[n:]` contents byte-identical in order. Every italic run in the
English is accounted for against the Latin's own runs plus the seven `[var:]` and
the one `[sic:]`.

---

## §1 · ⭐⭐ THE THREE FINDINGS THE MERGE SHOULD CARRY

### 1.1 · Lam. 4:20 at 0291B — an expounded quotation Migne marks with NOTHING AT ALL, and the extractor could not see it

**This is the range's principal find and it came from the §8a second pass, not
from the list.** After the guilleted half-verse « In umbra, inquiunt, ejus vivemus
in gentibus » `[n: (Thren. IV)]`, Philip turns back to the first half of the same
verse and writes:

> *Ideo praemittunt: **Spiritus ante faciem nostram Christus Dominus.***

The Vulgate reads ***spiritus oris nostri* christus dominus** — "the breath of our
mouth". Migne prints ***ante faciem nostram***, which is the Old Latin / LXX
reading (πνεῦμα προσώπου ἡμῶν, *spiritus faciei nostrae*). **And the divergent
phrase is the one Philip expounds** — it is the subject of his next two sentences,
three times over:

> *Christus Dominus **ante faciem nostram** spiritus tunc habetur, cum eum nostra
> fides jam non secundum carnem, sed secundum spiritum intuetur… Ideo Paulus… Deum
> et ea quae sunt ejus, **ante faciem** proponenda.*

Conform the lemma to *oris nostri* and the whole *ante faciem* / *posteriora
Christi* architecture of the chapter — Peter putting Christ's hinder parts first,
Paul setting God before the face — collapses.

⛔ **Migne marks this span with NEITHER guillemets, NOR italics, NOR a note.** It
is not in `data/quotations/11632/0042-0047.md` in any class, because the
extractor keys the `[n:]`-only class on the note and there is no note. **No
`[var:]` fired**, per brief §8a: where the plate marks the words as neither
quotation nor lemma we cannot establish the quotation's left edge, so marking it
would assert a boundary the plate does not print. Logged in full so the merge can
rule the class with this candidate in front of it. **It is the exact shape of
Ps. 90:5–6 at 0245A (cruces-0024 §2c.2) and of Rom. 8:10 at 0226B, and it is the
third instance of the class in three ranges — which is itself the argument that
the class is real.**

⚑ **A methodological consequence worth stating.** Two of this work's three
`[n:]`-only-class finds were attached to a note; this one was not. **A range that
reads only the extractor's ⭐ list will miss this shape entirely.** The pass that
found it was: read every scripture-sounding clause in the prose, note or no note.

### 1.2 · ⭐⭐ Cant. 2:7 at 0299D — the head lemma prints *Adjuvo* for *Adjuro*, and the correct form stands seven words earlier

The head lemma of *Caput* XXVI is printed:

> *****Adjuvo** vos, filiae Hierusalem, ne suscitetis, neque evigilare faciatis
> dilectam, quoadusque ipsa velit.*

*Adjuvo* means "I help". The verse is *Adiuro vos* — "I adjure you" — and **the
entire chapter is about the adjuration**: *humano more obtestatur durius et
**adjurat*** · *astringit eas durius et interserit **juramentum*** · *Sponsi
monita, quibus **adjurat** filias Hierusalem* · *filiae Hierusalem **adjurantur***
(twice) · *Mandatum vero sic **adjurantis*** · *si, per quod **adjuratur***… and
the verse returns in full at 0302A as « *Adjuro vos,* inquit, *filiae Jerusalem,
per capreas, cervosque camporum.* »

⚑ **The decisive detail: Migne prints the right form immediately before the wrong
one.** The last words of chunk 0045 (col. 0299C) are the lemma tag *Adjuro,* etc.
— so within seven words of printed text the plate has *Adjuro* and then *Adjuvo*.

**Rendered as printed** ("I help you"), which is meant to look wrong, with a
`[var:]` naming the received reading. Not a `[sic:]`: *adjuvo* is a real word and
Pattern 12's "real word merely wrong" clause keeps it on the English side.
⚠ **This is the sentence in the range most likely to be silently repaired by a
later reader**, and the repair would be invisible — one letter restores a
perfectly smooth chapter opening.

The head lemma also **omits *per capreas cervosque camporum*** (truncation, not a
variant; the words return at 0302A) — which is itself notable, because the whole
back half of the chapter is an exposition of the roes and harts.

### 1.3 · ⭐ Cant. 2:4 at 0292D — *rex* added, and *cellariam* for *cellam*

> *****Introduxit me rex in cellariam vinariam:** ordinavit in me charitatem.*

The Vulgate has *introduxit me in **cellam** vinariam*, with **no *rex***.

- ***rex* is Philip's text, not a slip.** His first sentence glosses it: *Quem et
  quare nominet **regem**, supra recolo me dixisse* — he takes the lemma to name
  the king and refers back to his own exposition of Cant. 1:3. Conforming would
  strand the gloss.
- ***cellariam*** is the harder call, and it matters because **brief §5 rules
  *cellaria* = storerooms against *cella vinaria* = wine cellar**, and this lemma
  fuses them. Philip's own prose immediately separates them again: *cum in regis
  **cellaria** introductam Virgo meminit se fuisse; quae… non tamen esse vinaria
  memorantur. Nunc vero in **cellam vinariam** Virgo se perhibet introduci* — and
  thereafter *tota **cella vinaria*** (0293A), *sed **cella** redundans; domus
  vinaria* (0293A), *Hoc in **cella vinaria** Christus beneficium operatur*
  (0295B). **Six printings of the prose form against one of the lemma form.**

**Rendered so the distinction survives on the page:** the lemma reads "**the wine
storeroom**", the retrospect reads "the king's **storerooms**", and every prose
occurrence reads "the **wine cellar**" — three English forms for Migne's three
Latin forms. `[var:]` fired on the lemma for both divergences.

---

## §2 · THE COLLATION — all 72 listed spans, every one accounted for

Every span in `data/quotations/11632/0042-0047.md` was collated word by word
against the Vulgate. **Spans recorded as AGREES were collated and found to agree;
the absence of a marker on them is a finding, not a silence.** Lemma
re-quotations (*Sub umbra,* *Et fructus,* *Ordinavit,* *Fulcite me,* *Dextera,*
*Adjuro vos,* etc.) are short repetitions of a head-text collated at its full
occurrence; each was checked against its head-text and **none re-quotes it with
different words** — with the single, decisive exception of *Adjuvo* / *Adjuro*
(§1.2), which runs the other way: the re-quotation is right and the head is wrong.

### 2a · Divergent — `[var:]` fired (7)

| Col | Ref | Migne prints | Vulgate | Note |
|---|---|---|---|---|
| 0290C | Ps. 115:1 | « **Credidit**, propter quod et **locutus est** » | *Credidi propter quod locutus sum* | **first person → third**, and *et* added. Philip needs the third person: he is arguing about *quispiam*, "anyone", who believes and is therefore said to be. Rendered "He believed, for which cause he also spoke." |
| 0290C | Esther 14:11 | « Ne tradas **regnum tuum** his qui non sunt » | *ne tradas **Domine sceptrum tuum** his qui non sunt* | lexical substitution + dropped vocative. Same class as the 0251C Job 2:10 *Domini*/*Dei* marker (cruces-0024 §2a). |
| 0290D | Hab. 2:4 | « Justus, inquit, **meus ex** fide sua vivit » | *iustus autem **in** fide sua vive**t*** | ⭐ **cited Habakkuk, worded Hebrews.** *iustus **meus ex** fide vivit* is Heb. 10:38; the *sua* is Habakkuk's. A fusion of the two, under a Habakkuk siglum. See §2d. |
| 0291A | Lam. 4:20 | « In umbra, inquiunt, **ejus** vivemus in gentibus » | *in umbra **tua** vivemus in gentibus* | second person → third, matching the third-person frame Philip has built (*justi… in umbra **ejus*** three words earlier). |
| 0291C | Matt. 16:23 | « Vade, ait, **retro**, non sapis quae Dei sunt » | *Vade **post me Satana**… quia non sapis **ea** quae Dei sunt* | ⭐ **cited Matthew (`[n: (ibid.)]` on `(Matth. XVI)`), worded Mark.** *Vade retro* + *non sapis quae Dei sunt* without *ea* is Mark 8:33; *Satana* is dropped. Same class as cruces-0024's Luke 9:58-cited / Matt. 8:20-worded case at 0240B. |
| 0292D | Cant. 2:4 | *Introduxit me **rex** in **cellariam** vinariam* | *introduxit me in **cellam** vinariam* | ⭐ see §1.3 |
| 0299D | Cant. 2:7 | *****Adjuvo** vos, filiae Hierusalem* | *Adiuro vos filiae Hierusalem* | ⭐⭐ see §1.2 |

### 2b · Collated and AGREEING or abridged only — no marker (recorded so the absence is evidence)

**0042** — Cant. 2:3 lemma *Sub umbra illius quem desideraveram, sedi; et fructus
ejus dulcis gutturi meo* — **agrees word for word** (and at all four
re-quotations) · Heb. 11:6 « Oportet, inquit, accedentem ad Deum credere quia
est; et inquirentibus se remunerator sit » — every word the Vulgate's; *enim*
dropped and *credere* moved behind *accedentem ad Deum*. Transposition, **no
marker** · Heb. 3:14 « Si tamen, inquit, initium substantiae ejus usque ad finem
firmum retineamus » — **agrees exactly** · Matt. 7:21 « Domine, Domine » —
**agrees** · 1 Thess. 2:12 « Ut ambuletis, inquit, digne Deo » — Vulg.
*ambula**retis***, imperfect subjunctive in a past-sequence indirect command;
Migne's present is the same construction in primary sequence, and nothing is
asserted that the Vulgate does not assert. Logged, **no marker** ·
2 Cor. 5:16 « Etsi novimus Christum secundum carnem, sed nunc jam non novimus » —
Vulg. *et si **cognovimus** secundum carnem **Christum***; verb of the same
family, word order. **Checked specifically for negation loss under brief §9: the
single *non* is carried.** No marker.

**0043** — Luke 10:27 « Ex toto, ait, corde tuo, et ex tota anima tua, et ex
omnibus viribus tuis » — **agrees word for word** for what is printed; truncated
at both ends (*diliges Dominum Deum tuum* before, *et ex omni mente tua* after).
No marker.

**0044** — Cant. 2:5 lemma *Fulcite me floribus, stipate me malis, quia amore
langueo* — **agrees word for word** (and at both re-quotations) ·
2 Sam. 13:1–4 « Factum est, inquit, ut sororem Absalon Thamar adamaret Ammon
filius David… » — a heavily compressed but faithful stitch: drops *post haec*,
*speciosissimam vocabulo*, *cur non indicas mihi*, and *fratris mei*; *Absalon* /
*Ammon* for *Absalom* / *Amnon* is transmission orthography. Every word printed is
the Vulgate's. **No marker**; see §3 for the guillemet asymmetry inside it ·
Acts 5:29 « Oportet obedire Deo, magis quam hominibus » — **agrees** (Vulg.
*oboedire oportet*, transposition) · Acts 4:20 « Non possumus quae **audivimus et
vidimus** non loqui » — Vulg. *non enim possumus quae **vidimus et audivimus** non
loqui*. ⚑ **The two verbs are transposed and *enim* dropped; both negations are
carried in the English.** Sense untouched, so **no marker** — but recorded,
because a transposition inside a double negative is exactly where a silent repair
would hide.

**0045** — Cant. 2:6 lemma *Laeva ejus sub capite meo; et dextera illius
amplexabitur me* — **agrees word for word** (and at all three re-quotations) ·
Matt. 8:6 « Domine, inquit, puer meus jacet in domo » — **agrees**, Philip
splitting off *paralyticus et male torquetur* into his own question-and-answer
outside the marks · Matt. 8:8 « Non sum, inquit, dignus ut intres sub tectum meum;
sed tantum dic verbo, et sanabitur puer meus » — **agrees**, dropping the opening
*Domine* · John 5:3 — **agrees** for every word printed; Migne breaks the verse
into **four separate guillemet runs** with Philip's own questions between them
(see §3), and abridges *caecorum, claudorum, aridorum*. No marker ·
Ps. 15:11 « Delectationes, inquit, in dextera tua usque in finem » — **agrees word
for word.** ⚠ The siglum reads **(Psal. LI)**; see §2d.

**0046** — Ps. 100:5 « Detrahentem, inquit, proximo suo, hunc persequebar » —
Vulg. *detrahentem **secreto** proximo suo hunc persequebar*. One adverb dropped,
and the clause asserts nothing the Vulgate does not. Logged, **no marker** — same
treatment as the dropped *cito* at Matt. 5:25 (cruces-0030) · Cant. 2:7 re-quoted
*Adjuro vos… filiae Jerusalem, per capreas, cervosque camporum* at 0302A —
**agrees word for word**, and is the control that convicts the head lemma (§1.2).
Note *Jerusalem* here against *Hierusalem* five times elsewhere in the same
chunk: **mirrored, not regularized.**

**0047** — Cant. 2:8 lemma *Vox dilecti mei* — **agrees** (both printings) ·
Isa. 52:6 « Ego ipse, ait, qui loquebar, ecce adsum » — **agrees word for word**;
opens mid-verse after *quia*.

### 2c · The `[n:]`-only class — **hit rate 0 of 20 on the listed spans**

All twenty ⭐ spans on the list were traced back to their real left edge. **Every
one of the twenty is Philip's own prose**, written *with* scripture rather than
quoting it: accusative-and-infinitive frames, third-person and first-person
recastings, his own rhymed clause-endings. **None takes a marker**; a `[var:]` on
unmarked prose would misrepresent it as a lemma.

Reported per brief §8a even though it is a null result, and it is a real datum
about the class: **0/20 here, against 1/14 for the 0024–0029 range and 0/19 for
0018–0023.**

The twenty, listed so nobody re-opens them:
**0042** — 0290C 1 Cor. 14:38 (*ignorans… legitur ignorari*, recast as a passive
maxim) · 0291A Heb. 11:1 (*fides optatae praesentia non est rei, sed sperandae
substantia*, his own antithesis; note the siglum, §2d) · 0291B Heb. 11:1 again
(*id maxime habebunt prae oculis quod habere promerentur nonnisi spiritales*) ·
0291C John 6:64 (*eum qui vivificat, Deum spiritum novit esse*) · 0291D Eccl. 9:1
(*nescit enim **miser** homo utrum **odio** dignus sit an **amore*** — his own
adjective, and the Vulgate's *amore an odio* reversed, inside his own clause).
**0043** — 0293A Ps. 22:5 (*quam praeclarus ille calix inebriat*) · 0293A
Acts 2:13 (*tanquam madentes musto linguosos efficiat*) · 0293B Isa. 12:3 (*ex
ipso vel in ipso fonte haurit aquas gaudio pleniori*) · 0293C 1 Cor. 13:4–5 (*malum
non cogitat, non agit perperam… ordinat charitatem* — Paul's predicates strung
into Philip's own list, with *diligit aequitatem*, *iram non suscitat*, *amorem
nutrit* added; **all six negations carried**) · 0293D Matt. 22:39 (*amat, sicut
scriptum est, omnem proximum ut seipsam*) · 0294B Eph. 5:29 (*cum nemo carnem suam
odio habeat*, subjunctive inside his *cum*-clause).
**0044** — 0297A Ps. 110:10 (*et intellectus bonus est omnibus, **non habentibus,
sed facientibus** intellectum* — the antithesis is Philip's, and so is
*intellectum* for the Vulgate's *eum*) · 0297B Acts 5:41 (*Gaudeam et cum sensero
vos ire gaudentes a conspectu concilii*, second person, in his own *cum*-clause).
**0045** — 0299C Ps. 16:15 (*mane astabo vigilans… sub ejus dextera, apparente
ipsius gloria satiabor* — an ablative absolute for the Vulgate's *cum apparuerit
gloria tua*, and *sub ejus dextera* imported from the lemma).
**0046** — 0302A Gal. 6:2 (*Sic sua invicem onera portantes legem Christi satagunt
adimplere*) · 0302C Num. 23:10 (*ne compellar… resilire*; see §2d for the note's
position) · 0302C Ps. 83:3 (*si anima mea morte justorum moriens et deficiens in
atria Domini concupiscat*).
**0047** — 0303C Ps. 118:66 (*docet disciplinam, docet et scientiam, docet etiam
bonitatem* — the Vulgate's *bonitatem et disciplinam et scientiam doce me* recast
into three third-person clauses; note the siglum, §2d) · 0303C John 3:29 (*Ego
igitur **amica** Sponsi sto et gaudeo propter vocem Sponsi* — the Vulgate's
masculine *amicus… sponsi qui stat et audit eum* turned feminine and first person;
see §5.1 on *amica*) · 0303C Isa. 64:1 (*Utinam **disrumperet** coelos et
**veniret*** for *utinam disrumperes caelos et **descenderes*** — third person and
a different verb, inside Philip's own *utinam*).

**Further unmarked weaves checked for silent conformation and left as Philip's own
prose** (none marked, none conformed): Isa. 9:2 / Luke 1:79 (*in tenebris et in
umbra mortis*, 0289D) · Acts 2:2 + Luke 1:78 (*spiritus vehemens… ex alto visitans
oriens… lumine matutino*, 0290A) · 1 Cor. 13:12 (*videt per speculum*, 0290B) ·
Ps. 30:15 / Ps. 117:28 (*Tu es ipse Deus meus*, 0290C — see §4) · Mark 14:15
(*in coenaculo grandi strato*, 0292A) · Ps. 45:5 (*fluminis impetus civitatem*,
0293A) · Luke 1:39 (*ad montana provehitur*, 0295A) · Phil. 1:23 (*vult dissolvi*,
0299A) · Eccles. 1:3 (*sub sole laborantem*, 0299A) · Eph. 5:16 (*dum dies mali
sunt*, 0299B) · Ps. 102:5 (*sicut aquila, juvenescam*, 0299B) · Ps. 62:2 (*de mane
vigilabo*, 0299B) · 1 Pet. 5:3 (*non dominari clero, sed formam subditis se
praebere*, 0300C) · Ps. 13:4 (*sicut escam panis, plebem devorant perditorum*,
0301C) · Luke 17:10 (*servos tamen se inutiles dicunt esse*, 0301D) ·
Ps. 118:32 (*viam currunt mandatorum, cum corde et animo dilatantur*, 0301D) ·
2 Tim. 3:5 (*sine virtute non est pietatis species fructuosa*, 0297A) ·
Ps. 26:5 + Isa. 4:6 (*ab aestu et turbine et pluvia in abscondito tabernaculi*,
0302C) · 1 Cor. 13:12 (*facie ad faciem*, 0296D) · Phil. 3:8 (*pro Christo
judicans detrimenta*, 0298B) · 1 John 2:27 (*cui dat intellectum quem docet
scientiam unctio spiritalis*, 0298C).

### 2d · Migne's sigla — four to add to the merge's accumulating count (brief §8b)

**Reproduced verbatim, none corrected.** Thirty-seven of the range's forty-one
notes name their reference correctly, which is a markedly better rate than
cols 0212–0227. The four:

1. **0291A `[n: (Hebr. II)]` for Heb. 11:1** — off by nine chapters, and the
   chunk's *own* correct Hebrews sigla (`(Hebr. XI)` at 0290B, `(Hebr. III)` at
   0290D) stand a few lines away.
2. **0298D `[n: (Psal. LI)]` for Ps. 15:11** (*Delectationes in dextera tua usque
   in finem*) — off by thirty-six psalms.
3. **0303C `[n: (Psal. CXII)]` for Ps. 118:66** (*bonitatem et disciplinam et
   scientiam*) — off by six.
4. **0302C `[n: (Num. XXIII)]` is correctly *named* but wrongly *placed*** — it
   sits after *resilire*, while the Numbers matter (*morte justorum*, Num. 23:10)
   arrives in the **next** sentence, which carries its own `[n: (Psal. LXXXIII)]`.
   Reproduced in place; §10.2 forbids moving it.

⚑ Also for the count, and of a different kind: **0290D `[n: (Habac. II)]` names
the right chapter of the wrong book** for a lemma whose wording is Heb. 10:38
(§2a), and **0291C `[n: (ibid.)]` on `(Matth. XVI)`** does the same for wording
that is Mark 8:33. Both are *cited-X-worded-Y*, the class cruces-0024 §2c.1 and
cruces-0012 opened. **This range has two, and both are inside guillemets** — which
is why both took a `[var:]` where the earlier instances, being on unmarked prose,
could not.

---

## §3 · TYPOGRAPHY — the Book II/III boundary is crossed, and there is NO SEAM

⭐ **This range answers the question cruces-0024 §1 left for a later agent.**
Chunk 0047 opens `## LIBER TERTIUS.` at col. 0303A (empty body, exactly as
`LIBER SECUNDUS.` sat at 0246C), and `## CAPUT PRIMUM.` follows under it. Migne
prints the transition in Philip's own voice at 0302D — *stylus meus ad
prosequendum caetera non festinet, sed dormiente Sponsa, iste paululum se
reclinet* — and names the division himself: *cujus ab osculo primus liber sumpsit
exordium, in somno finem accipiat hic secundus*.

**Nothing about the marking changes across it.** Both marks run in the same
functional division on both sides: Book II side (0046) has the italic lemma, the
italic marginal numbers *171*–*172*, and a guillemeted Ps. 100:5; Book III side
(0047) has the italic lemma twice, the italic marginal *173*, and a guillemeted
Isa. 52:6. **So 11632 crosses two book boundaries with no seam at either, and
11638's book-boundary model is now falsified twice over on this work. The merge
can stop looking.**

`LIBER TERTIUS.` → **"BOOK THREE."**, after `LIBER PRIMUS.` → "BOOK ONE." and
`LIBER SECUNDUS.` → "BOOK TWO." `CAPUT PRIMUM` spelled in words then `CAPUT II`
in numerals, in the same chunk, **preserved as printed** (brief §7a) — and note
that Book III restarts the numbering while Book II ended at `CAPUT XXVI`.

### 3a · ⚠ The guillemet asymmetry at 0295C — a NESTED unclosed «

0044 prints **4 « against 3 »**, and the extra opening is *inside* an existing
quotation run:

> « Factum est, inquit, ut sororem Absalon Thamar adamaret Ammon filius David…
> Dixitque Ammon: **«** Thamar sororem Absalon amo `[n: (II Reg. XIII)]`. **»**

Migne opens a run at *Factum est*, and then, at the point where the narrative
gives Ammon his own direct speech, opens a **second** « without ever closing the
first. The single » at the end closes the inner one. **Reproduced exactly as
printed, unbalanced** (Pattern 5 corollary), and logged here rather than repaired.
It is the first guillemet asymmetry recorded in this work since wave 1.

### 3b · Four guillemet runs carved out of ONE verse — John 5:3 at 0298A

Migne dismantles the verse and reassembles it around Philip's own questions,
guillemeting each fragment separately:

> « In his, » ait, porticibus « jacebat multitudo magna. » Quare jacebat, exponit:
> « Languentium. » Quare in porticibus, adjungit: « Exspectantium aquae motum
> `[n: (Joan. V)]`. »

*porticibus* — Philip's word, pulled up from John 5:2 — sits **outside** the
marks, between them. This is why 0045 has seven guillemet pairs where a reader
counting quotations would expect four. **Reproduced 1:1**; the English keeps the
same four fragments and the same interleaved prose, at the cost of some awkward
word order ("« In these, » he says, porches, « there lay a great multitude. »").
Same class as 0254B's « Meos » / « tuos » (cruces-0024 §1b): the mark is doing
grammatical work, not quotation work.

### 3c · A printed locator outside `[n:]`, again — *(Jacob II)* at 0297A

*sic fides sine opere legitur et intelligitur otiosa **(Jacob II)***. Italic,
inside the running prose, **with no `[n:]` wrapper**, and correctly **not** counted
in 0044's `noteCount` of 5 (verified against the body). Fourth or fifth instance
of the class in this work (cf. 0203A, 0222B–C, 0244C, 0260D, 0267B). Reproduced
exactly, italics and all.

### 3d · Marginal source-edition numbers

*165* (0290A) · *166* (0291D) · *167* (0293C) · *168* (0295B) · *169* (0297A) ·
*170* (0298C) · *171* (0300B) · *172* (0302A) · *173* (0303C). Continuous with
*101*–*155* from the earlier ranges. Each kept italic and verbatim **at the exact
word it interrupts** — *165* falls between *torpentem* and *invenire*, *170*
between *desiderantibus* and *spondet*, *173* between *praestolantibus* and *non
tacet* — and the English clause was built round each rather than moving it.

### 3e · ⚑ §7a mirroring — the drift point — held word by word

Mixed case inside single sentences, none of it regularized:

- **0291D *virgo Mater*** — lower-case *virgo*, capital *Mater*, in a work that
  capitalizes *Virgo* almost everywhere. Rendered "**the virgin Mother**".
- **0294A, 0294B, 0295C *Virgo mater*** — the same pair the other way up.
  Rendered "**the Virgin mother**" all three times.
- **0292D *non modicam **virgo** fiduciam sibi sumit*** and **0293A *cujus meriti
  **virginem** aestimamus*** — lower case in chapters that capitalize *Virgo*
  eleven times. Rendered "the virgin".
- **0290A *nonnullos miserans **spiritus**, vehemens terret*** — lower case, the
  Acts 2:2 *spiritus vehemens*. Rendered "**the vehement spirit**", against
  capital *Spiritus* at 0291B, 0292A, 0293A, 0293D, 0294D, 0295A, 0298C.
- **0293D *vera Mater*** and **0295A *in Matre diligente*** — capital, rendered
  "Mother".
- *Sponsus* / *Sponsa* / *Sponsi* / *Sponsae* are capitalized **everywhere** in
  this range (thirty-odd instances, no lower-case exception), which is itself
  worth recording against 0243B–C where Migne dropped the capital.

**This is mechanically checkable against the Latin twin and I would check it
first in any review.**

### 3f · Pattern 17

Both frames in this range are **plural** and take *you*: the Virgin addressing the
*adolescentulae* (*vos interim… convenite, fulcite, removete, refovete, floreatis,
proferatis, vos ire gaudentes, digni habiti estis*, 0296B–0297B) and the
Bridegroom addressing the *filiae Hierusalem* (*ne suscitetis, neque evigilare
faciatis, revocetis, vobis, volo ergo vos, adjuro vos*, 0299D–0302C). Philip's own
frame to his brethren is plural too (*ut audistis*, *ne putetis*, *vobis profero*,
*ut legistis*, *sicut recolitis vos legisse*, *de quo legistis*).

**Every second-person singular in the range is inside a quotation and every one is
singular in the Latin** — *Ne tradas **regnum tuum*** · *Absit a **te*** · *non
**sapis*** · *Ex toto **corde tuo**… ex omnibus viribus **tuis*** · *ut **intres**
sub tectum meum* · *in **dextera tua*** · *Quare sic **attenuaris** macie* ·
*Tu es ipse Deus meus* — so **thou** throughout. The one plural inside a quotation
is 1 Thess. 2:12 *Ut **ambuletis** digne Deo*, rendered *you*, sitting four lines
from the singular Matt. 16 pair. The number distinction is visible on the page
exactly as Pattern 17 intends.

---

## §4 · PATTERN 7 — one `[sic:]`, and the readings rendered as printed

**One carried run, and it is NOT also translated in the running text** (brief §8's
named failure):

1. **0294C `[sic: *reete*]`** — *Hunc itaque proximum **reete** Virgo diligit ut
   seipsam.* Read ***recte***, certain: Philip uses *recte* correctly at 0290A,
   0290C, 0292B, 0297A, 0299D and 0303A. *reete* is not a Latin word, so Pattern 7
   governs: carried untranslated in italics, and the English deliberately does
   **not** also say "rightly" — it reads "This neighbour therefore the Virgin
   [sic: *reete*] loves as herself." The plate sets the broken word between
   *proximum* and *Virgo*; English word order puts it one word later, immediately
   before the verb it modifies.

**Rendered as printed, no marker (real words, merely wrong or merely odd) —
conjectures live here and NOT in the text:**

- ⛔ **0290D, *quia fides mortua, etsi non diligens, operatur*.** As printed this
  says that **a dead faith, though it does not love, does work** — which is the
  reverse of the Jas. 2:20 maxim Philip quotes correctly at 0297A (*fides sine
  opere… otiosa*) and sits awkwardly against his own next sentence, *Dilectio
  quippe vita est fidei*. Rendered exactly as printed ("since a dead faith, even
  though it does not love, does work"). Conjectures: *quia fides mortua est, si non
  diligens, operatur*, or *quia fides mortua, etsi non diligens, **non** operatur*.
  **Neither supplied.** ⚠ **This is the single most likely place in the range for a
  well-meaning repair**, and under brief §9 the printed negation count is exactly
  what stands: one *non*, on *diligens*, and no other.
- **0290C, *Tu es ipse Deus meus*.** A four-word sentence standing outside the
  Ps. 115:1 guillemets, with no mark of any kind, in a paragraph otherwise in the
  third person. It reads as the continuation of the psalm-verse in the psalmist's
  voice (cf. Ps. 30:15 *Deus meus es tu*, Ps. 117:28), but Migne marks it as
  nothing. **Rendered as printed** ("Thou art thyself my God"), no marker, no
  quotation supplied.
- **0290A, *insolubilis vi necturae*.** *nectura* is not classical, but it is
  **Philip's own word** — he uses it again at 0294B, *natura, naturalique
  **nectura** proximum suum esse*. Pattern 9: attested usage of this author,
  unmarked. Rendered "the unloosable force of her binding".
- **0298B, the doubled comma.** Migne prints *Quae ideo laeva satis congrue
  nominantur**,,** quia in hac praesenti vita…*. A doubled comma has no English
  exponent (Pattern 9's test) and reproducing it would read as our own build
  defect; **one comma is set and the doubling is logged here.** ⚑ If the merge
  prefers Pattern 8's "never delete a mark", the fix is one character at 0298B.
- **0292C, *nondum ad ventrem pervenit, quo perfecta satietas, invenitur*.** Migne
  sets a comma between subject and verb. Not reproduced (English cannot carry it
  without reading as a typo of ours); logged.
- **0291A, *fides optatae praesentia non est rei*.** The genitive *rei* is split
  from *praesentia* by *non est*, which is Philip's rhyme-driven word order, not a
  defect. Rendered "faith is not the presence of the thing wished for".
- **0299D, *timorem incutiat sacramentum*.** *sacramentum* here means the sworn
  oath (*juramentum* two words earlier), not the sacrament. **Rendered
  "sacrament", the word Migne prints**, because English carries the same
  ambiguity and glossing it would be an emendation. Logged.
- **0301A, *Verum in hoc dramate*.** *drama* for the Song's dialogue. Rendered
  "in this play"; not italicized, because English has the word.
- **0295A, *carne mundum et Spiritu Deo cunctis inaccessum genere counitum*.** The
  word order is very hard; *cunctis inaccessum* is taken with *Deo*, and *genere*
  with *counitum*, giving "clean in flesh and by the Spirit united in kind to God
  who is inaccessible to all". An alternative construal takes *cunctis inaccessum*
  with the child. Logged, not adjudicated in the text.
- **0296C, *malagma sive oleum, sive ligatura reputabitur aegrotanti*.** Rendered
  "a poultice, or oil, or a binding"; *malagma* is a real English-available word
  (emollient plaster) and is not carried in Latin.

**Negation audit (brief §9), second pass, against the Latin.** Every printed
*non / nec / neque / nisi / nunquam / nullus / nihil / nil / nondum / necdum / ne*
was matched against the English. The dense clusters are **0290C** (*Sine hac fide
Deo quispiam **non** placebit, **nec** est digna conscientia, cujus Deum scientia
**non** tenebit… qui **nescitur**, a **nesciente** **non** potest acceptari…
qui **non** crediderit, **nec** dici debet esse; qui autem **non** est,
consequenter **nec** in umbra est… his qui **non** sunt… **Non** esse recte
dicitur, qui Deum esse **nescit***), **0290D** (***Etiam non justus** erit in fide,
sed **nonnisi** justus vivet in fide* — carried as "Even one that is not just will
be in faith, but none save the just shall live in faith"), **0291C** (***non**
fiet istud, **non** morieris… **non** sapis quae Dei sunt*), **0293B–C** (*non
perturbat… **non** confundit… **non** obscurat, **non** aufert scientiam, sed
infundit; malum **non** cogitat, **non** agit perperam… iram **non** suscitat,
**non** infert odium* — six in one sentence), **0294A** (***non** jubetur modus
aliquis, **non** mensura… **non** scriptor aliquis docuit, **non** Scriptura…
videtur **non** quantum, sed ex quanto*), **0294C** (***non** amplexum pertulit,
**non** juncturam… **nullum** sensit dolorem corporis, **non** laesuram… **nec**
omnino potuit… **nec** erat quis tam felix*), **0295A** (*ut seipsam illi **non
solum non** praeferat, sed **nec etiam** conferat in amore* — a triple, carried as
a triple), **0297A–B** (***non** habentibus, sed facientibus… **Non** possumus quae
audivimus et vidimus **non** loqui… **non** capitis injuria, **non** membrorum
paralysi… **non** febris angustia, **non** corporis quavis molestia… **nihil**
ardentius, **nihil** vehementius… videtur **nec** tenetur… **nec** potest
inveniri*), **0300C–D** (***non** audimus, vel magis audientes… **nullatenus**
obedimus… **non** dominari clero… **non** curis exterioribus, **non** negotiis
saecularibus… **non** causis forensium, **non** saecularium contentionibus…
necessitas eos referat, **non** voluptas*), and **0302C** (*ut **non solum non**
suscitem **nec** evigilare faciam quoslibet dormientes, **nec** mandati reus
inveniar* — carried whole). **No negation was dropped and none was supplied.**

---

## §5 · CONVENTIONS SET OR HELD IN THIS RANGE

1. ⭐ **`amica Sponsi` = "the friend of the Bridegroom" (0303C).** Brief §5's
   ruling on *amica mea* is honoured in its other grammatical form: Philip recasts
   John 3:29's *amicus sponsi* into the feminine and the first person, *Ego igitur
   **amica** Sponsi sto et gaudeo propter vocem Sponsi*. **"Friend", never
   "beloved" or "love"** — the whole point of the sentence is that the Bride, who
   is about to hear the Bridegroom's voice, is standing in the Baptist's place.
   This is the same lemma-word the merge must hold across the work.
2. **New fixed equivalences this range had to set**, offered to the merge:
   - ***langueo / languor / languens* = "languish / languor" throughout**
     (*Caput* XXIV–XXV turn on the single root: *quia amore langueo* → *amoris
     incendio Virgo dixerat se **languere*** → *ne amor durius **langueat**,
     **languor** moram sufferat duriorem* → *nihil undique **languidum**
     relinquetur*). Kept strictly distinct from ***aegrotare* = "to sicken"** and
     ***deficere* = "to fail"**, because the Ammon paragraph at 0295C runs all
     three of them in two sentences and the argument is the contrast between the
     sick lover and the languishing one.
   - ***fulcire* = "to stay up" · *stipare* = "to compass about"**, fixed at the
     lemma and held through *fulta vel stipata* (0296D) and *se stipari* (0296C).
   - ***otium* = "leisure" against *negotium* = "business"** — *Caput* XXVI's whole
     argument is the pair (*otio vel negotio spiritali*, *spiritali otio quamdam
     velut injuriam*, *vestra debere negotia… sua vero otia*), and any variation
     would dissolve it.
   - ***laeva* = "left hand" · *dextera* = "right hand"**, nouns not adjectives,
     after the lemma; *sinistra* (0299B, 0299C) likewise "the left".
3. **Pattern 3 fires on a bare *Scriptura* at 0294A** — *quantum diligatur Deus,
   **non scriptor aliquis** docuit, **non Scriptura***. Neither *divina* nor
   *sacra* is present. Rendered "**Holy Scripture**", per brief §5's ⚑ and the
   0260A precedent (cruces-0030 §2). **This is the second attested bare-form
   instance in this work; a later sweep must match bare *Scriptura(e)* too.**
4. **Brief §5 vocabulary held:** *charitas* = **charity** throughout (0293C
   *ordinat charitatem*, *ordo charitatis*; 0295A–B *charitatem praecipuam
   ordinavit*, *excellentia charitatis*; 0296D, 0302A *affectus charitatis*), kept
   distinct from *dilectio* / *amor* = **love** (0290D *Dilectio quippe vita est
   fidei*; 0293C *in caeteris pluribus dilectio sit diffusa*; 0301D *geminae
   dilectionis mandatum*) — and note 0294A, where *dilectione* and *diligatur* and
   *diligendi* run in three consecutive clauses beside *charitas*, which is exactly
   the doublet pressure the rule exists to resist · *candidatur* (0293B) is
   **translated** ("is made white"), per the *candidatio* rule · *cellaria* =
   **storerooms**, *cella vinaria* = **wine cellar** (§1.3) · *adolescentulae* =
   **maidens** (0296A, 0296C, 0296D, 0299D) · *Sponsus* = Bridegroom, *Sponsa* =
   Bride. *nigra / fusca / formosa*, *clementia*, *misericordia*, *recti*,
   *torcular*, *muraenula*, *moralitas* do not occur in this range.
5. **`## CAPUT XXII.`–`XXVI.` → "CHAPTER XXII."–"XXVI."; `CAPUT PRIMUM.` →
   "CHAPTER THE FIRST."** — the numeral/word distinction preserved as printed
   inside chunk 0047, which carries both forms.
6. **0303A's frontmatter `incipit` begins `## CAPUT PRIMUM.`** — i.e. the chunker
   captured a head into the incipit field. Copied **verbatim** into the English
   frontmatter, unaltered, per the brief's frontmatter rule. Not a defect of ours
   and not to be tidied.

---

## §6 · THINGS DELIBERATELY NOT REPORTED (brief §10, checked once each)

- **Column-band arithmetic**: 0042's `colContext` is 0289C while its `colFirst` is
  0289D, and 0046's body opens with a bare `[0299D]` on its own line before the
  lemma. Both are brief §10.1's class. **Checked: no anchor in any of the six
  chunks is followed by text broken mid-word or mid-construction.** The bands run
  cleanly A–D throughout 0289–0303. No `[ed:]`, no patch, no plate check.
- **`noteCount` matches the body `[n:]` count in all six chunks** (16/7/5/5/4/4),
  verified by script — and note that the printed locator *(Jacob II)* (§3c) is
  correctly *outside* that count.
- **Attested medieval spellings left alone, unmarked** (Pattern 9): *tanquam*,
  *coelum / coelestium / coelis*, *quandiu*, *inpraesentiarum*, *nonnisi*,
  *quodpropter*, *Hierusalem* (beside *Jerusalem*, §2b), *charitas*, *mirrha*-class
  orthography, *spiritalis / spiritaliter*, *ammonere* (0303A, for *admonere*),
  *Absalon* / *Ammon*, *Isaiae*, *aethnicum*-class forms.
- **No `[f:]`.** 11632 is lemma-and-gloss, not a florilegium (§10.4).
- **No `[d:]`, no `[nt:]`, no `[ed:]`:** no dittography in the range, and all
  forty-one notes are bare citations, not editorial prose.
- **Migne's own `( sic )`** does not occur here.

---

## §7 · OPEN — for the merge or a blind read

1. ⛔ **The blind polarity read has not been done and cannot be done by me.**
   The three passages most likely to be wrongly "repaired" are, in order:
   **(a) *Adjuvo* at 0299D** (§1.2) — one letter makes a smooth chapter opening,
   and the correct form stands seven words earlier on the plate, which makes the
   repair *feel* authorized; **(b) *quia fides mortua, etsi non diligens,
   operatur* at 0290D** (§4) — the English is meant to read against the Jas. 2:20
   maxim, because the Latin does; **(c) the carried *reete* at 0294C.**
2. ⚑ **§1.1's Lam. 4:20 is this range's candidate for the class brief §8a left
   open**, and if the merge rules that an expounded unmarked weave earns a
   `[var:]`, the marker goes at 0291B on *Spiritus **ante faciem nostram** Christus
   Dominus*. ⚠ **Note that it is a harder case than Ps. 90:5–6, because it carries
   no `[n:]` at all** — so a rule framed as "an expounded `[n:]`-only weave" would
   not reach it. **The class the merge needs to name is "an expounded weave Migne
   leaves unmarked", note or no note.**
3. ⚑ **The *cited-X-worded-Y* count is now at least five across four ranges**
   (0240B Luke/Matthew · 0290D Habakkuk/Hebrews · 0291C Matthew/Mark · plus
   cruces-0012's Deuteronomy/Psalms). Two of this range's three are inside
   guillemets, which is new. **Worth a work-wide tally before anyone proposes
   anything**, per §8b.
4. ⚑ **§3's no-seam result at the Book II/III boundary should be recorded in the
   merge as closing the question**, together with cruces-0024 §1's result at
   Book I/II. Two boundaries, two negatives; brief §7's ruling is now confirmed
   rather than assumed.
5. **The doubled comma at 0298B** (§4) is a one-character judgment I made against
   Pattern 8's letter and in favour of Pattern 9's test. If the merge disagrees,
   it is a one-character fix and I flag it rather than defend it.
