# Cruces — 8999, *Glossa ordinaria*, **Evangelium secundum Joannem**, chunks 0010–0014

Stint 3 of six. **PL 114, cols 0380C–0394C** (John VI. 1 – VIII. 59), 6,020 words of Latin in
five chunks. Written to the governing document, `data/briefs/8999-launch-brief.md`, and to
`translation-style.md`; the four Mark conventions of `src/english/9001/cruces.md` §1 were applied
from the first line and none of them was forced open by this book (§d.6 below records the
controls).

---

## (a) THE POLICY I APPLIED — stated first, so it can be argued with

**1. Attribution is not mine to assert, and I asserted none.** Per the brief's §2: every reading
in this range that is a real, well-formed Latin word which merely reads oddly is **rendered as
printed and logged with no marker**, however good the internal argument for what was meant. I
found **no non-word and no split or fused run** anywhere in the five chunks — the one
word-division candidate, *a me ipso* at 0387B, is a normal orthographic variant of *meipso* and
is not a defect. **I fired zero `[sic:]`.** Nine of the fourteen attribution calls made on 9004
were wrong at the plate; I am not adding a fifteenth guess to that record.

**2. `[var:]` fires only on a coherent CLAUSE-level divergence, never on a single short token.**
The measured asymmetry (46/46 and 19/19 `[var:]` stood; 7 of 8 single-word `[sic:]` fell) is
mechanical: a transcription slip manufactures broken or missing tokens and cannot invent a
semantically coherent divergent clause. So a substituted or recast clause I may cite against
`sources/vulgate/clementine-flat.txt`; a **dropped or altered single token** — *vivus* at 0384B,
*vestrum* at 0389C, *de* at 0391A, *et* at 0387B, *cognovimus*/*cognoscimus* at 0393D — I log and
leave for the plate, because a `[var:]` asserts that **Migne's text** diverges and our Latin is
not Migne's page. **Three `[var:]` fired**, all on clauses, all cited book chapter:verse.

**3. Below Pattern 14's bar is not a divergence.** Word order, a connective swapped for another of
the same force (*enim*/*autem*), *nunquid* for *numquid*, *coelo* for *caelo*, a lemma abridged
before its last word: these are logged in §(c) with the reason and take no marker. Marking them
would bury the three that matter.

**4. `[cj:]` only where the faithful English ASSERTS SOMETHING FALSE — not where it is merely
opaque.** Pattern 18a closed the conjecture census and left ~90 candidates declined; the stated
bar is that the English asserts what the author did not, and I have held to it strictly.
**Two `[cj:]` fired** (0381A *vanitatem*, 0383A *me esse Patrem*), each of which otherwise puts a
falsehood on the page in the author's voice. **Two obvious conjecture candidates were DECLINED
because the English they produce is odd, not false** — 0387D *assensionem* and 0385D *audit* —
and both are logged for the plate in §(d). ⚑ `[cj:]` is non-attributive by design (Pattern 18:
Migne's word stands first and keeps its English; ours is added beside it), so neither marker
claims anything about whose the reading is. If the plate shows our file corrupt at either site,
they become `data/tei-patches/8999.json` entries — not withdrawn accusations against Migne.

**5. Negation and mechanism 5.** Every `non`, `nec`, `neque`, `nisi`, `ne`, `nemo`, `nihil`,
`nullus`, `nondum` the Latin prints is in the English and none is in the English that the Latin
does not print, including where carrying it leaves the sentence at odds with itself. Where a
relative or participle could bind to either of two nouns I read the **case and gender**, not the
sense; the three sites where the easier reading would have been the wrong one are named in §(d).

**6. No plate was read for this range and none is claimed.** Everything I could not settle is
named as unsettled, with the column, so the read that follows this translation has a list rather
than a hunt.

---

## (b) SPAN COUNT — RUN, AND IT AGREES

`data/briefs/8999-lemmata-0010.txt` states **215 spans** for chunks 0010–0014.
Counting the `*…*` spans in my own Latin:

| chunk | spans |
|---|---|
| 0010 | 48 |
| 0011 | 19 |
| 0012 | 52 |
| 0013 | 56 |
| 0014 | 40 |
| **total** | **215** |

**215 = 215, and the brief's first span (`[0380C] *Trans mare.*`) and last (`[0394C] *Et
exivit.*`) are the first and last italic spans in my own files** — so the range is aligned at both
ends, not merely equal in count. Every asterisk in all five chunks is inside a body span; the
frontmatter carries none. This is the check that caught the −0/+13/−11/+15/−17 splitter error on
9001; it is clean here.

Marker-parity counts, checked before each file was written: column anchors 14 / 6 / 15 / 14 / 7,
`[n: …]` notes 2 / 1 / 8 / 4 / 7 — each equal to its Latin twin and to the frontmatter
`noteCount`. `node scripts/verify-english.mjs 8999` passes on all five.

---

## (c) THE LEMMA DIVERGENCE LIST — all 215 spans, in order

Every italic span in the range, with its verdict; every divergence I **declined** to mark carries
its reason. Verdicts were formed by reading the printed Latin word by word against
`clementine-flat.txt` at **its own verse** — the pre-scan's ✓ is not clearance and was not treated
as any (the seven `*usque ad*` spans it marks ✓ are the clearest demonstration: they are Migne's
abridgment formula and not scripture at all).

**Summary: 3 `[var:]` fired · 21 divergences examined and declined · 7 structural spans ·
184 conform.**

[0380C] VERS. 1.-- *Trans mare.* — Conforms, read against its own verse.
[0380C] VERS. 2.-- *Et sequebatur.* — Conforms, read against its own verse.
[0380C] VERS. 5.-- *Cum sublevasset.* — Conforms, read against its own verse.
[0380C] VERS. 7.-- *Ducentorum.* — Conforms, read against its own verse.
[0380C] VERS. 9.-- *Est puer unus.* — Conforms, read against its own verse.
[0381A] *Sed haec,* — Conforms, read against its own verse.
[0381A] VERS. 10.-- *Facite homines.* — Conforms, read against its own verse.
[0381A] VERS. 14.-- *Illi ergo homines cum vidissent quod,* — Conforms, read against its own verse.
[0381A] VERS. 15.-- *Jesus ergo.* — Conforms, read against its own verse.
[0381A] *Percipite regnum quod vobis paratum est.* — **DIVERGENCE — `[var:]` FIRED.** Matt 25:34 reads *possidete paratum vobis regnum a constitutione mundi*. Migne substitutes the verb (*percipite*) and recasts the clause; a coherent clause-level variant, the class that stood 19/19 on 9001 and 46/46 on 9004.
[0381A] *Ut autem sero factum est.* — Conforms, read against its own verse.
[0381A] VERS. 19.-- *Timuerunt.* — Conforms, read against its own verse.
[0381A] *Nolite timere, ego sum.* — Divergence, DECLINED. Jo 6:20 reads *Ego sum, nolite timere* (so Matt 14:27, Mc 6:50). Migne reverses the two clauses and changes nothing else: word order, no sense at stake, and the gloss turns on neither clause's position.
[0381A] VERS. 22.-- *Altera die.* — Conforms, read against its own verse.
[0381D] VERS. 25.-- *Et cum invenissent.* — Conforms, read against its own verse.
[0381D] *Amen, amen dico vobis,* — Conforms, read against its own verse.
[0381D] VERS. 26.-- *Amen, amen dico vobis.* — Conforms, read against its own verse.
[0381D] VERS. 27.-- *Signavit Deus.* — Conforms, read against its own verse.
[0381D] VERS. 29.-- *Hoc est opus Dei.* — Conforms, read against its own verse.
[0382B] VERS. 32.-- *Dixit ergo.* — Conforms, read against its own verse.
[0382B] VERS. 33.-- *Panis enim verus.* — **DIVERGENCE — `[var:]` FIRED.** Jo 6:33 reads *Panis enim Dei est, qui de caelo descendit*. Migne's lemma puts the content word *verus* where the received text has *Dei est* (possibly drawn from *panem de caelo verum*, Jo 6:32, the lemma directly above). A substitution, not a dropped token.
[0382B] VERS. 34.-- *Domine, semper,* — Conforms, read against its own verse.
[0382B] *Qui biberit de hac aqua, non sitiet in aeternum,* — **DIVERGENCE — `[var:]` FIRED.** Jo 4:13-14: *Omnis qui bibit ex aqua hac, sitiet iterum : qui autem biberit ex aqua quam ego dabo ei, non sitiet in aeternum.* Migne's single clause collapses the two halves, so that drinking of THIS water is what quenches for ever, which is the reverse of the verse's own contrast; and the gloss builds on the quotation (*secundum corpus accepit*). The received reading belongs beside it.
[0382B] *Da mihi [0382C] hanc aquam,* — Conforms, read against its own verse.
[0382C] *Ego sum panis vitae.* — Conforms, read against its own verse.
[0382C] VERS. 36.-- *Sed dixi vobis.* — Conforms, read against its own verse.
[0382C] VERS. 37.-- *Omne quod dat mihi Pater,* — Conforms, read against its own verse.
[0382C] *Veniet.* — Conforms, read against its own verse.
[0382C] VERS. 39.-- *Haec est enim voluntas ejus qui misit me Patris,* — Divergence, DECLINED. Jo 6:39 reads *Haec est AUTEM voluntas ejus qui misit me, Patris*. One connective for another of the same force, below Pattern 14's bar ("in a way that changes the sense").
[0382C] *Non perdam,* — Conforms, read against its own verse.
[0382C] VERS. 40.-- *Ut omnis,* — Conforms, read against its own verse.
[0382C] *Qui audit verbum meum et credit ei qui me misit;* — Divergence, DECLINED. Jo 5:24 reads *Qui verbum meum audit, et credit ei qui misit me*. Two transpositions; no word added or lost, no sense changed.
[0383A] *Qui videt Filium et credit in eum.* — Conforms, read against its own verse.
[0383A] VERS. 41.-- *Murmurabant.* — Conforms, read against its own verse.
[0383A] VERS. 43.-- *Nolite murmurare.* — Conforms, read against its own verse.
[0383A] VERS. 44.-- *Nisi Pater. [n: (AUG.)]* — Conforms, read against its own verse.
[0383B] *usque ad* — Structural, not scripture: Migne's abridgment formula, rendered *as far as*. The pre-scan's tick is a phrase-search artefact, the two words being common in the Vulgate.
[0383B] *Et ego resuscitabo,* — Conforms, read against its own verse.
[0383B] VERS. 45.-- *Est scriptum.* — Conforms, read against its own verse.
[0383B] *erunt docibiles Dei,* — Not a divergence. Jo 6:45 reads *Et erunt OMNES docibiles Dei*; the gloss has taken *omnes* into its own sentence (*Omnes homines regni illius ... erunt docibiles Dei*), so the italics open after it. An artefact of where Migne set the span.
[0383B] *In prophetis.* — Conforms, read against its own verse.
[0383C] VERS. 46.-- *Non quia Patrem,* — Conforms, read against its own verse.
[0383C] *Ego sum panis vitae. Patres vestri,* — Conforms, read against its own verse.
[0383D] *Ego sum panis vitae.* — Conforms, read against its own verse.
[0383D] *Verba vitae aeternae habes.* — Conforms, read against its own verse.
[0383D] VERS. 52.-- *Et panis,* — Conforms, read against its own verse.
[0383D] VERS. 54.-- *Nisi manducaveritis carnem,* — Conforms, read against its own verse.
[0383D] *usque ad* — Structural, not scripture: Migne's abridgment formula, rendered *as far as*. The pre-scan's tick is a phrase-search artefact, the two words being common in the Vulgate.
[0384A] VERS. 55.-- *Qui manducat.* — Conforms, read against its own verse.
[0384B] VERS. 56.-- *Caro enim.* — Conforms, read against its own verse.
[0384B] *caro mea vere est cibus.* — Not a divergence. Jo 6:56 reads *Caro ENIM mea vere est cibus*; the span is quoted inside the gloss's own *quia* clause, which is why the connective stands outside it.
[0384B] VERS. 57.-- *Qui manducat.* — Conforms, read against its own verse.
[0384B] VERS. 58.-- *Sicut misit me.* — Conforms, read against its own verse.
[0384B] *Et ipse vivet.* — Conforms, read against its own verse.
[0384B] VERS. 59.-- *Hic est panis.* — Conforms, read against its own verse.
[0384B] *Ego sum panis qui de coelo descendi.* — Divergence, DECLINED. Jo 6:41/51 read *Ego sum panis VIVUS, qui de caelo descendi*. One token absent from a self-quotation the gloss introduces with *Supra dixerat*. A single short token is the class the brief's Sect. 2 measures as at least as likely ours as Migne's, and no `[var:]` can assert whose it is. Logged for the plate. (*coelo* for *caelo* is orthography throughout and is never marked.)
[0384B] *panis qui de coelo descendit:* — Conforms, read against its own verse.
[0384B] VERS. 61.-- *Multi ergo.* — Conforms, read against its own verse.
[0384D] *Durus est,* — Conforms, read against its own verse.
[0384D] VERS. 63.-- *Si ergo,* — Conforms, read against its own verse.
[0384D] VERS. 64.-- *Spiritus est qui vivificat.* — Conforms, read against its own verse.
[0384D] *Verba quae ego,* — Conforms, read against its own verse.
[0384D] VERS. 65.-- *Sed sunt quidam,* — Conforms, read against its own verse.
[0384D] *Et quis traditurus.* — Conforms, read against its own verse.
[0384D] VERS. 66.-- *Quia nemo potest,* — Conforms, read against its own verse.
[0384D] VERS. 67.-- *Ex hoc,* — Conforms, read against its own verse.
[0384D] VERS. 71.-- *Nonne ego vos,* — Conforms, read against its own verse.
[0385C] VERS. 1.-- *Post haec autem.* — Conforms, read against its own verse.
[0385C] VERS. 2.-- *Dies festus.* — Conforms, read against its own verse.
[0385C] VERS. 3.-- *Ut et discipuli.* — Conforms, read against its own verse.
[0385C] VERS. 4.-- *Nemo.* — Conforms, read against its own verse.
[0385C] VERS. 6.-- *Tempus.* — Conforms, read against its own verse.
[0386A] VERS. 8.-- *Ego enim non ascendo. [n: (AUG.)]* — Divergence, DECLINED. Jo 7:8 reads *ego AUTEM non ascendo*. Connective only, same ground as Jo 6:39 above. The negation is intact and is carried in the English.
[0386A] VERS. 10.-- *Non manifeste,* — Conforms, read against its own verse.
[0386A] VERS. 16.-- *Respondit eis: Mea doctrina,* — Not a divergence. Jo 7:16 reads *Respondit eis Jesus, et dixit : Mea doctrina*; the lemma abridges the speech frame. Note that Migne interleaves this span with roman gloss (*Mea doctrina,* hominis, *non est mea,* sed Dei), and the interleaving is reproduced 1:1 in the English.
[0386A] *non est mea,* — Conforms, read against its own verse.
[0386A] VERS. 18.-- *Qui a semetipso.* — Conforms, read against its own verse.
[0386A] *Qui autem,* — Conforms, read against its own verse.
[0386A] VERS. 19.-- *Nonne Moyses,* — Conforms, read against its own verse.
[0386C] VERS. 20.-- *Daemonium.* — Conforms, read against its own verse.
[0386C] VERS. 21.-- *Unum opus feci.* — Conforms, read against its own verse.
[0386C] VERS. 22.-- *Circumcisionem. [n: (ALC.)]* — Conforms, read against its own verse.
[0386C] *usque ad* — Structural, not scripture: Migne's abridgment formula, rendered *as far as*. The pre-scan's tick is a phrase-search artefact, the two words being common in the Vulgate.
[0386D] VERS. 23.-- *Si circumcisionem,* — Conforms, read against its own verse.
[0386D] VERS. 24.-- *Nolite judicare,* — Conforms, read against its own verse.
[0386D] VERS. 25.-- *Dicebant ergo.* — Conforms, read against its own verse.
[0387B] *Generationem ejus quis enarrabit [n: (Isa. LIII)]* — Conforms, Is 53:8. The sentence carries NO TERMINAL STOP after the note in the Latin; none is supplied in the English (Pattern 8).
[0387B] VERS. 28.-- *Et me scitis.* — Conforms, read against its own verse.
[0387B] *et unde sim* — Conforms, read against its own verse.
[0387B] *a me ipso non veni.* — Not a divergence. Jo 7:28 reads *a meipso non veni*: word division inside *meipso*, an orthographic variant attested both ways, not a Pattern 10 broken run. Negation intact.
[0387B] *Ego scio.* — Conforms, read against its own verse.
[0387B] *nemo novit Patrem nisi Filius, et cui Filius voluerit revelare [n: (Marc. XI)]* — Divergence, DECLINED. The text is Matt 11:27 (*neque Patrem quis novit, nisi Filius, et cui voluerit Filius revelare*) / Lc 10:22; Migne's wording is a synonymous recasting with nothing of substance added or lost. His CITATION, however, points to Mark XI, where no such text stands. Logged in (d) as a citation crux and not marked: `[n:]` contents pass through verbatim by rule, and the index's `refDisplay`/`refKey` split is where that is answered.
[0387B] VERS. 29.-- *Sed scio eum.* — Conforms, read against its own verse.
[0387B] *quia ab ipso sum ipse,* — Divergence, DECLINED. Jo 7:29 reads *quia ab ipso sum, ET ipse me misit*; Migne's span runs the two clauses together across the missing *et* and breaks off with *etc.* A single short token inside an abridgment span: our file or his, and nothing in our hands decides it. Logged for the plate.
[0387C] *ab ipso sum,* — Conforms, read against its own verse.
[0387C] VERS. 30.-- *Hora ejus.* — Conforms, read against its own verse.
[0387C] VERS. 32.-- *Audierunt Pharisaei.* — Conforms, read against its own verse.
[0387D] VERS. 33.-- *Adhuc modicum tempus.* — Conforms, read against its own verse.
[0387D] *Quid faciemus? Vobiscum sum et vado.* — Not a Vulgate divergence. The italic run MERGES TWO TEXTS: *Quid faciemus?* is Act 2:37 (there *Quid faciemus, viri fratres?*), and *Vobiscum sum et vado* is the return to the Jo 7:33 lemma, which the gloss expounds in the next breath (*Non ait ero, sed sum*). Migne's italics swallow the join; rendered as printed, in one run.
[0387D] *Filius [0388A] hominis qui est in coelo,* — Conforms, read against its own verse.
[0387D] VERS. 34.-- *Non potestis venire.* — Conforms, read against its own verse.
[0387D] *Non potes me sequi modo, sequeris autem postea [n: (Joan. XIII)]* — Divergence, DECLINED. Jo 13:36 reads *non potes me modo sequi : sequeris autem postea*. Transposition of *modo* only.
[0387D] VERS. 35.-- *Ad semetipsos,* — Conforms, read against its own verse.
[0387D] VERS. 36.-- *Quis est hic?* — Conforms, read against its own verse.
[0387D] VERS. 37.-- *In novissimo autem.* — Conforms, read against its own verse.
[0387D] *Si quis sitit.* — Conforms, read against its own verse.
[0387D] *et cum biberit, flumina de ventre ejus fluent aquae vivae.* — Divergence, DECLINED. Jo 7:38 reads *Qui credit in me, sicut dicit Scriptura, flumina de ventre ejus fluent aquae vivae*. The opening words are the glossator's own resumption of his sentence (*Bibat spiritum ... et cum biberit*), swallowed by the italics; the quoted portion agrees with the Vulgate word for word, so there is no claim about Migne's scripture text to be made here.
[0387D] *usque ad* — Structural, not scripture: Migne's abridgment formula, rendered *as far as*. The pre-scan's tick is a phrase-search artefact, the two words being common in the Vulgate.
[0387D] *Nondum enim,* — Conforms, read against its own verse.
[0388D] *Quia Jesus nondum erat glorificatus,* — Conforms, read against its own verse.
[0388D] *Ex illa ergo turba,* — Conforms, read against its own verse.
[0388D] *Oportet obedire magis Deo quam hominibus [n: (Act. V)]* — Divergence, DECLINED. Act 5:29 reads *Obedire oportet Deo magis quam hominibus*. Transposition only.
[0388D] VERS. 45.-- *Venerunt ergo.* — Conforms, read against its own verse.
[0388D] VERS. 47.-- *Nunquid et vos,* — Not a divergence. *nunquid* for *numquid* is Migne's settled orthography (four spans in this range) and is Pattern 9 matter, never marked. Jo 7:47 otherwise.
[0388D] VERS. 48.-- *Nunquid ex principibus aliquis,* — Not a divergence. Orthography as above; conforms to Jo 7:48.
[0388D] *Ut non videntes videant, et videntes caeci fiant [n: (Joan. IX)]* — Divergence, DECLINED. Jo 9:39 reads *ut qui non vident videant, et qui vident caeci fiant*. Participles for relative clauses; the assertion is identical and the antithesis the gloss rests on survives untouched. Both negations carried.
[0388D] VERS. 51.-- *Nunquid lex.* — Not a divergence. Orthography as above; Jo 7:51 otherwise.
[0388D] *Et tu Galilaeus es,* — Conforms as far as it runs: Jo 7:52 opens *Numquid et tu Galilaeus es?* and the lemma begins one word in.
[0388D] *Et reversi sunt,* — Conforms, read against its own verse.
[0389B] VERS. 1.-- *Jesus autem.* — Conforms, read against its own verse.
[0389C] *Qui sine peccato est, primus in illam lapidem mittat.* — Divergence, DECLINED. Jo 8:7 reads *Qui sine peccato est VESTRUM, primus in illam lapidem mittat*. One token absent: single-token class, no marker. (*in illam lapidem*, a feminine pronoun on a masculine noun, is the Clementine's OWN reading and is not a defect here.)
[0389C] VERS. 3.-- *Adducunt.* — Conforms, read against its own verse.
[0389C] VERS. 6.-- *Jesus autem inclinans se deorsum.* — Conforms, read against its own verse.
[0389C] VERS. 8.-- *Et iterum se inclinans.* — Conforms, read against its own verse.
[0389C] VERS. 11.-- *Nec ego te condemnabo.* — Conforms, read against its own verse.
[0389C] *Nec ego te condemnabo,* — Conforms, read against its own verse.
[0389C] VERS. 12.-- *Iterum ergo.* — Conforms, read against its own verse.
[0389C] *Ego sum lux mundi.* — Conforms, read against its own verse.
[0389C] VERS. 13.-- *Testimonium.* — Conforms, read against its own verse.
[0389C] VERS. 14.-- *Verum est testimonium.* — Conforms (Jo 8:14, *verum est testimonium meum*), abridged.
[0389C] VERS. 15.-- *Vos secundum carnem judicatis.* — Conforms, read against its own verse.
[0390C] *Ego non judico quemquam.* — Conforms, read against its own verse.
[0390C] *Et si judico ego,* — Conforms, read against its own verse.
[0390C] VERS. 16.-- *Quia solus [n: (AUG.)]* — Conforms (Jo 8:16, *quia solus non sum*), but the lemma STOPS BEFORE THE NEGATION; the gloss restores it in its first words (*Ideo verum, quia non solus*), and the English follows the gloss rather than supplying a negative to the lemma.
[0390C] VERS. 17.-- *Et in lege vestra scriptum est. [n: (ID.)]* — Conforms, read against its own verse.
[0390C] *usque ad* — Structural, not scripture: Migne's abridgment formula, rendered *as far as*. The pre-scan's tick is a phrase-search artefact, the two words being common in the Vulgate.
[0390C] VERS. 19.-- *Dicebant ergo ei.* — Conforms, read against its own verse.
[0390D] *Ubi est Pater tuus.* — Conforms, read against its own verse.
[0390D] *Forsitan et Patrem,* — Conforms (Jo 8:19), abridged before *meum*, so the English reads "Perhaps also the Father," and does not supply the possessive.
[0390D] VERS. 20.-- *Haec verba,* — Conforms, read against its own verse.
[0391A] *Et nemo apprehendit eum.* — Conforms, read against its own verse.
[0391A] VERS. 21.-- *Ego vado.* — Conforms, read against its own verse.
[0391A] *Quaeretis,* — Conforms, read against its own verse.
[0391A] *In peccato vestro moriemini.* — Conforms, read against its own verse.
[0391A] VERS. 22.-- *Nunquid interficiet semetipsum?* — Not a divergence. Orthography only (Jo 8:22).
[0391A] VERS. 23.-- *Vos deorsum estis.* — Divergence, DECLINED. Jo 8:23 reads *Vos DE deorsum estis*. The dropped preposition shifts "you are from beneath" to "you are beneath", but it is one short token, the class most often our own file, and the gloss's continuation (*ideo terram sapitis*) reads the same under either. Rendered as printed ("You are below"), logged for the plate.
[0391A] VERS. 24.-- *Dixi ergo vobis.* — Conforms, read against its own verse.
[0391A] *Si enim.* — Conforms (Jo 8:24, *si enim non credideritis*); the lemma likewise cuts before *non*, and the gloss's continuation carries it.
[0391A] *Credideritis.* — Conforms, read against its own verse.
[0391A] *Ego sum, moriemini,* — Conforms: one italic run splicing two fragments of Jo 8:24 (*credideritis quia ego sum, moriemini in peccato vestro*), reproduced as one run.
[0391A] VERS. 25.-- *Principium. [n: (AUG.)]* — Conforms, read against its own verse.
[0391C] *usque ad* — Structural, not scripture: Migne's abridgment formula, rendered *as far as*. The pre-scan's tick is a phrase-search artefact, the two words being common in the Vulgate.
[0391C] *Loquor vobis.* — Conforms, read against its own verse.
[0391C] VERS. 27.-- *Et non cognoverunt.* — Conforms, read against its own verse.
[0391C] *qui misit me, verax est,* — Divergence, DECLINED. Jo 8:26 reads *sed qui me misit, verax est*. Transposition only; the gloss quotes it mid-sentence, which is why *sed* falls outside the span.
[0391D] *Cum exaltaveritis Filium,* — Divergence, DECLINED, AND THE WITNESS IS WHAT IS ODD HERE. `clementine-flat.txt` reads Jo 8:28 *Cum exaltaveriS Filium hominis*, a singular. Migne's plural *exaltaveritis* is the reading the Clementine editions print and the one the context demands (he is addressing the Jews). A `[var:]` here would rest on what looks like a defect IN OUR COLLATION FILE. Flagged so the file can be checked; no marker.
[0391D] VERS. 29.-- *Quia ego sum.* — Conforms, read against its own verse.
[0391D] *Et a meipso facio nihil;* — Conforms, read against its own verse.
[0391D] *Quia ego,* — Conforms, read against its own verse.
[0391D] VERS. 30.-- *Multi crediderunt in eum.* — Conforms, read against its own verse.
[0391D] VERS. 31.-- *Vere discipuli.* — Conforms, read against its own verse.
[0391D] *Liberi.* — Conforms, read against its own verse.
[0391D] *Veritas liberabit vos,* — Conforms, read against its own verse.
[0391D] *Respondit eis,* — Conforms, read against its own verse.
[0391D] *liberabit vos,* — Conforms, read against its own verse.
[0391D] *Et nemini servivimus.* — Conforms (Jo 8:33), abridged before *umquam*.
[0391D] *Amen, amen dico,* — Conforms, read against its own verse.
[0391D] VERS. 35.-- *Servus autem,* — Conforms, read against its own verse.
[0391D] VERS. 37.-- *Scio,* — Conforms, read against its own verse.
[0391D] VERS. 39.-- *Responderunt et dixerunt ei.* — Conforms, read against its own verse.
[0391D] *Si filii Abrahae,* — Conforms, read against its own verse.
[0391D] VERS. 40.-- *Nunc autem quaeritis,* — Conforms, read against its own verse.
[0391D] VERS. 41.-- *Vos facitis opera.* — Conforms, read against its own verse.
[0391D] *Dixerunt,* — Conforms, read against its own verse.
[0391D] *Nos,* — Conforms, read against its own verse.
[0392D] VERS. 42.-- *Dixit ergo.* — Conforms, read against its own verse.
[0393A] *Ego enim.* — Conforms, read against its own verse.
[0393A] VERS. 43.-- *Quare loquelam.* — Conforms, read against its own verse.
[0393A] VERS. 44.-- *Vos ex patre,* — Conforms, read against its own verse.
[0393A] *Pater tuus Amorrhaeus est, mater tua Cethaea [n: (Ezech. XVI)]* — Divergence, DECLINED. Ez 16:3 reads *pater tuus Amorrhaeus, et mater tua Cethaea*: Migne supplies the copula and drops *et*. Function words only.
[0393A] *Et desideria.* — Conforms, read against its own verse.
[0393A] *desideria patris [0393B] vestri vultis facere,* — Conforms, read against its own verse.
[0393B] *Ille homicida.* — Conforms, read against its own verse.
[0393B] *Lingua eorum gladius acutus [n: (Psal. LVI)]* — Conforms, read against its own verse.
[0393B] *Et in veritate non stetit.* — Conforms, read against its own verse.
[0393B] *Quia non est in eo veritas.* — Divergence, DECLINED. Jo 8:44 reads *quia non est veritas in eo*. Transposition only, and the gloss's own next sentence prints Migne's order back (*quia non est ipsa in eo*), which is evidence for the reading rather than against it. Negation intact in both.
[0393B] *Ex propriis loquitur, quia mendax est.* — Conforms, read against its own verse.
[0393B] *Et pater ipsius.* — Divergence, DECLINED. Jo 8:44 reads *et pater ejus*. One pronoun for another of the same reference; the exposition (*Scilicet mendacii quod invenit*) is indifferent to which.
[0393B] *Ex propriis.* — Conforms, read against its own verse.
[0393B] VERS. 46.-- *Quis ex vobis,* — Conforms, read against its own verse.
[0393B] VERS. 48.-- *Nonne,* — Conforms, read against its own verse.
[0393B] VERS. 49.-- *Honorifico.* — Conforms, read against its own verse.
[0393B] VERS. 50.-- *Ego autem.* — Conforms, read against its own verse.
[0393B] *Daemonium habes,* — Conforms, read against its own verse.
[0393D] *Honorifico Patrem,* — Conforms (Jo 8:49), abridged before *meum*; same treatment.
[0393D] *est qui quaerat et judicet.* — Conforms, read against its own verse.
[0393D] *Tentat vos Deus [n: (Deut. XIII)]* — Divergence, DECLINED. Dt 13:3 reads *tentat vos Dominus Deus vester*. An abridgment of a proof-text quoted for its verb; nothing substituted.
[0393D] *Deus intentator malorum est [n: (Jac. II)]* — Divergence, DECLINED. The text is Jac 1:13, *Deus ENIM intentator malorum est*: connective only. Migne's citation reads Jac. II where the verse is Jac. I; logged in (d) with the *Marc. XI* case, not marked.
[0393D] *Judica me, Deus, et discerne causam meam [n: (Psal. XLII)]* — Conforms, read against its own verse.
[0393D] VERS. 51.-- *Amen, amen dico vobis.* — Conforms, read against its own verse.
[0393D] *Non videbit.* — Conforms, read against its own verse.
[0393D] VERS. 52.-- *Nunc cognoscimus.* — Divergence, DECLINED. Jo 8:52 reads *Nunc cognovimus*. Present for perfect, one token; the English renders the printed present ("Now we know"). Single-token class.
[0393D] VERS. 53.-- *Quem teipsum facis?* — Conforms, read against its own verse.
[0394B] *Non rapinam arbitratus est esse se aequalem Deo [n: (Philip. II)]* — Conforms, read against its own verse.
[0394B] VERS. 54.-- *Respondit Jesus.* — Conforms, read against its own verse.
[0394B] *Quem te facis?* — Not a Vulgate divergence: it is MIGNE AGAINST MIGNE. His lemma at VERS. 53 prints *Quem teipsum facis?* (= Jo 8:53), his gloss at VERS. 54 re-quotes it as *Quem te facis?*, and the close of the earlier gloss prints *quem teipsum facis?* again. All three are rendered as printed. Whether the short form is his or our transcription's, nothing here decides.
[0394B] *Est Pater meus.* — Conforms, read against its own verse.
[0394B] *Qui glorificat.* — Conforms, read against its own verse.
[0394B] *Et non cognovistis.* — Conforms, read against its own verse.
[0394B] *Et si dixero,* — Conforms, read against its own verse.
[0394C] *et si dixero.* — Conforms, read against its own verse.
[0394C] VERS. 56.-- *Abraham.* — Conforms, read against its own verse.
[0394C] *Diem meum. [n: (AUG.)]* — Conforms, read against its own verse.
[0394C] *usque ad* — Structural, not scripture: Migne's abridgment formula, rendered *as far as*. The pre-scan's tick is a phrase-search artefact, the two words being common in the Vulgate.
[0394C] VERS. 59.-- *Et exivit.* — Conforms, read against its own verse.

---

## (d) THIS RANGE'S OWN CRUCES, BY COLUMN

Two markers fired in the whole range, both `[cj: …]`, both at sites where the faithful English
would otherwise state a falsehood in the author's voice. **No `[sic:]`, and no non-word or broken
run was found to justify one.** Everything else below is rendered as printed and carries no
marker, with the column named so the plate read can settle it.

### FIRED

**0381A — `[cj: *vanitatem*; read *unitatem*, "the unity"]`** (chunk 0010, VERS. 9).
*Est puer unus … Unus, quia vanitatem Ecclesiae futuram praefigurabat.* The boy is one because he
prefigured something future about the Church; *vanitatem* makes that the Church's coming
**vanity**, which is not a thing this gloss or any near relative of it says, and the argument
(oneness prefiguring a future one-ness) has no purchase on it. *vanitatem* is a real word, so
Pattern 12 has nothing to wrap and Pattern 7 requires the English to render it — which it does,
with the conjecture added beside it, per Pattern 18. ⚠ **Whose reading it is, I do not know.**
The two forms are not an obvious optical confusion, which argues mildly for the type rather than
the transcription, and that argument is exactly the kind measured as unreliable; it is offered as
context, not as a finding.

**0383A — `[cj: *me esse Patrem*; read *me esse a Patre*, "that I am from the Father"]`**
(chunk 0010, VERS. 43). *…nemo potest venire ad me nisi a Patre tractus, et ideo vos non creditis
me esse Patrem, quia non estis tracti a Patre.* Rendered flat, the page has Christ complaining
that the Jews do not believe **him to be the Father** — a claim the same chunk denies twice over
(0383A: *hoc est credere in Filium quod et in Patrem*; 0383C: *ego novi Patrem, quia ab illo
sum*), and which the sentence's own two other clauses contradict, both of which turn on being
drawn *a Patre*. One short preposition is missing. ⚠ **That is precisely the shape that comes
back as our own file more often than not**, so no accusation is made: the English renders
*Patrem*, the conjecture stands beside it, and if the plate prints *a Patre* this becomes a TEI
patch and the marker comes out.

### DECLINED — the two conjecture candidates I did NOT mark

**0387D `assensionem`** (chunk 0012, VERS. 33). *quaeretis me post resurrectionem et
assensionem.* The sense wants *ascensionem*; *assensio* ("assent") is a real word, and the same
chunk prints *post ascensionem* correctly at 0388C. ⛔ **I decline the conjecture marker anyway**,
on the bar in (a).4: "after the resurrection and the assent" is opaque, not false, and the
internal corroboration four columns later is the exact argument 9004 measured as worthless for
attribution (*"the correct form prints eleven words later"*). A single c/s difference is also the
most ordinary transcription slip there is. **Rendered as printed; flagged here as the first thing
to look at on leaf n199.**

**0385D `audit`** (chunk 0012, VERS. 6). *et ideo non audit vos mundus suos falsos testes.*
The verse being glossed is Jo 7:7, *Non potest mundus odisse vos: me autem odit*, which makes
*odit* the expected verb and the whole sentence turn: the world does not **hate** you, its own.
As printed, the world does not **hear** its own false witnesses, which is odd but asserts nothing
false, so it stays under Pattern 7 with no marker. **Rendered "does not hear"; flagged for the
plate.**

### RENDERED AS PRINTED, NO MARKER — read at the plate before anyone corrects them

- **0384A (0010)** — *sed audivit, unde magis moveantur.* A third-singular perfect where the
  clause wants a present, and it does not construe with *moveantur*. Rendered "but he heard,
  whence they are the more moved."
- **0387A (0012)** — *non est judicandum secundum faciem, id est actionem personarum.* The
  standing phrase is *acceptio personarum*, and the gloss's **next sentence** prints *ne in
  judicandis causis personas accipiamus*. *actionem* is a real word; rendered "the action of
  persons."
- **0387C (0012)** — *Breviter utrumque complectatur.* Subjunctive where the sense wants an
  indicative; rendered "Let him briefly comprise both."
- **0388B (0012)** — *quibus alii conderentur, alii docerentur.* *conderentur* construes
  ("might be founded") and is left; noted only because the pairing with *docerentur* invites a
  reader to emend it.
- **0388B (0012)** — *non fuit ille fons.* Perfect where the argument is timeless; carried as a
  past ("that man was not a fountain"), negation intact.
- **0389D (0013)** — *Vel signat Ecclesiam, quae relinquens Deum, fornicata erat cum daemonibus.*
  The third allegory of the adulteress makes **the Church** the one who forsook God and fornicated
  with demons; the reading a commentator would expect here is the Gentile people. A real word,
  rendered as printed.
- **0390B (0013)** — *confirmatur. veni missus a Patre.* A sentence opening in lower case after a
  full stop. English orthography capitalises it; the lower case may be his or the transcription's,
  and nothing is claimed. No mark was added or deleted.
- **0392B (0013)** — *isti eidem tributis Caesaris.* The verb is gapped from the preceding clause;
  rendered "these men serve the same by the tributes of Caesar."
- **0393A (0014)** — *ostendit Deum non patrem eis esse eorum.* Both *eis* and *eorum* stand;
  both are carried ("that God is not their father to them"). Not a Pattern 11 dittography — the
  run is not repeated, the pronoun is doubled by case.
- **0394A (0014)** — *Hinc discat homo Jesus, non malum, sed bonum reddere.* A nominative *Jesus*
  where the sense wants *a Jesu*. Rendered literally, "Hence let man learn Jesus, to render not
  evil but good," rather than supplying the preposition.
- **0383B (0010)** — *licet diversa prophetarant.* Syncopated pluperfect for *prophetaverant*:
  Pattern 9, correct Latin for its period, translated normally with no crux owed. Listed only so
  a later sweep does not churn it.

### PUNCTUATION AND LAYOUT

- ⚑ **0393C (0014), VERS. 49 ends with NO TERMINAL STOP** — *…sicut ego honorifico Patrem, sic vos
  me honoraretis* — and **none is supplied** (Pattern 8: never supply, including a terminal stop).
  The English paragraph ends the same way. This is the one place in the range where an English
  reader will see something that looks like our error and is not.
- **0387B (0012)** — the Isaias citation likewise closes without a stop after `[n: (Isa. LIII)]`;
  reproduced.
- **0386A (0012)** — *quod est - Ego non sum a meipso.* Migne's spaced hyphen is reproduced as
  printed rather than converted to a colon or a dash.
- **0384D (0011)** — *Suspenditur oratio, Quasi dicat:* — a capital after a comma, kept.
- **No em-dash occurs in any of the five English chunks** (checked mechanically: zero).

### CITATIONS THAT DO NOT RESOLVE — logged, not marked

Both pass through verbatim inside `[n: …]` per the sacred-marker rule; neither is corrected,
queried or expanded, and neither is a defect class this edition marks in the text.

- **0387B (0012)** — `[n: (Marc. XI)]` on *nemo novit Patrem nisi Filius, et cui Filius voluerit
  revelare*. The text is Matt 11:27 / Lc 10:22; **Mark has no such verse anywhere**, let alone in
  chapter XI. ⚑ Per the brief's Sect. 6.2 this is NOT the *Ibid.* class and is not proposed for
  correction; it is recorded for the index, where `refDisplay` keeps what Migne prints.
- **0393D (0014)** — `[n: (Jac. II)]` on *Deus intentator malorum est*, which is Jac **1**:13.

### CONVENTIONS INHERITED FROM MARK — the controls, none forced open

1. **The gloss voice is not archaised.** 33 `says`/`said` for *dicit*/*ait* across the five
   chunks; **zero `saith`**. Every `-eth` form in the range (13 of them: *believeth*, *eateth*,
   *quickeneth*, *seeth*, *speaketh*, *knoweth*, *seeketh*, *judgeth*, *glorifieth*, *tempteth*)
   sits **inside an italic lemma** — checked mechanically, not by eye. The archaic second person
   in the gloss (*thou doest*, *thou seest*, *thy words*) is Pattern 17's number marker on a
   singular addressee, not archaism, and it alternates with plain "you" wherever the Latin turns
   plural, in the same paragraph where it does so (0385B, 0390D, 0393B).
2. **`turba` → crowd, `multitudo` → multitude.** Mechanically 1:1 in this range: 6 `turba*` nouns
   → six "crowd", 2 `multitudo`/`multitudinem` → two "multitude", and no third word used for
   either. 0381A puts *multitudinem in te creditorum* eleven words from *turba*'s territory and
   the two stay apart.
3. **`daemonium` → demon, `diabolus` → devil.** *daemonium* at 0386C and *Daemonium habes* at
   0393D → "demon"; *daemonibus* at 0389D → "demons"; *diabolus/diaboli* at 0392C, 0393A, 0393B →
   "devil". No crossing, and the Douay "devils" pull was resisted at 0386C where it is strongest
   (*daemonium habere, qui daemonia pellit*).
4. **`gentes`.** *de Judaea ad gentes* (0385C) and *iturus est ad gentes credituras* (0388A) are
   the Judaei/gentes typology → **Gentiles**; *templo gentium* (0394C), which closes the range
   against *de figuris Judaeorum*, likewise → **Gentiles**. *ut omnes gentes docerent* (0388C) is
   the Matt 28:19 phrase → **nations**, per the rule. ⚑ One judgement call: **0380C *gentium magna
   turba sequitur*** glosses Jo 6:2's *multitudo magna* — a crowd following in Galilee, with no
   Jew/Gentile contrast in sight — so it is rendered **"a great crowd of the nations"**, generic.
   Flagged because it is the only site in the range where the axis is genuinely ambiguous, and a
   merge that prefers "Gentiles" there will get no argument from me.
   **No `natio` occurs in this range**, so nothing was flattened.
5. **`mysterium` → mystery, `sacramentum` → sacrament**, 1:1 and both present: mystery at 0381C,
   0390D, 0394C; sacrament at 0381D, 0383D, 0384C. This is the control that shows the other four
   axes are being tracked rather than asserted.

⚑ **No inherited convention was broken and no exception was taken.**

### MECHANISM 5 — the three sites where the easier reading was the wrong one

Checked by case and gender, not by sense, per the brief's Sect. 4.

- **0384C (0011)** — *ut homo vivat ex me, participatio facit **quae** me manducat.* The relative
  is **feminine** and agrees with *participatio*, not with *homo*. The English reads "the
  participation effects which eats me"; the easy reading ("he who eats me") would have rebound the
  clause to the man.
- **0383C (0010)** — *quia verbum est vita hominum **quod** et carni suae … dat vitam in
  resurrectione.* The relative is **neuter**: the giver of life is *verbum*, not *vita* (feminine)
  and not the flesh. Rendered so.
- **0382D (0010)** — *Mihi unitur humilis humili.* *humili* is dative and agrees with *Mihi*:
  "the humble man is united to me, myself humble" — not "the humble is united to the humble."

One further binding is genuinely ambiguous on the page and is left ambiguous:
**0383C, *patribus murmuratoribus quorum estis filii, murmurando non fuit panis vitae*** —
*murmurando* can attach to *quorum estis filii* ("whose sons you are by murmuring") or to *non
fuit panis vitae*. The comma before it and its position beside the verb decide the English for the
second ("was, by their murmuring, not the bread of life"). ⚑ Recording the ruling here because the
brief's Sect. 4 warns that a crux can state one reading while the English carries the rival: **the
English carries the reading just stated, and I checked the shipped sentence against this line
after writing it.**

### THE `usque ad` ABRIDGMENTS

Seven in the range (0383B, 0383D, 0386C, 0387D, 0390C, 0391C, 0394C), all rendered *as far as*,
following 9001. The text after the formula is Migne's resumed extract and is translated; the
`etc.` before it is left as printed.
