# 9002 — cruces, stint 0032–0037 (cols 0150B–0166D)

*Glossa ordinaria*, **Evangelium secundum Matthaeum**, PL 114. Chunks 0032–0037: `CAPUT XX.`
through `CAPUT XXV.`, 6,703 Latin words — the labourers in the vineyard, the entry into Jerusalem,
the marriage feast, the woes on the Pharisees, the eschatological discourse and the last judgment.

Companion files from this stint: `data/briefs/9002-PLATE-READS-0032.json` (every page opened, both
witnesses) and `data/briefs/9002-PENDING-TEI-PATCHES-0032.md` (two sites where our Latin has
departed from Migne).

---

## (a) THE POLICY I APPLIED — stated before the findings, so it can be argued with

**1. Markers.** **One `[sic:]`**, **seven `[var:]`**, zero `[cj:]`, zero `[d:]`, zero `[ed:]`,
zero `[cn:]`/`[nt:]`.

**2. When a `[var:]` fires.** I inherited the 0000–0005 and 0016–0021 bar and did not loosen it:
Migne's quoted scripture takes a `[var:]` where his words **assert something different** from the
received text — a *substitution*. It does **not** fire where he merely **shortens** a verse, where
he **splices or conflates** two verses, where the difference is **word order**, where it is
**orthographic** (*Nunquam*/*Numquam*, *Quicunque*/*Quicumque*, *Quandiu*/*Quamdiu*,
*Nummulariis*/*numulariis*, *Circumitis*/*circuitis*), or where it is the **form of a
transliterated Hebrew word or proper name** (*Osanna*, *saba* for *Sabaoth*).

⚑ **One boundary I drew that is new, and it is the load-bearing one in this file.** Two of my
spans are the *same* substitution — a connective swapped for the verse's own (`autem` for `enim`
at @0156A, `autem` for `et` at @0165B) — and **I fired one and declined the other.** The line I
drew is **where the lemma starts**: at @0156A Migne's lemma *begins the verse itself* (Mt 22:14
opens *Multi enim sunt vocati*), so nothing but a different text explains the connective; at
@0165B the lemma is **clipped out of the middle** of Mt 25:19 (*venit dominus servorum illorum,
et posuit rationem cum eis*), and a postpositive *autem* sits exactly where a clip needs a
connective and *et* cannot stand. I checked Migne's own practice in this range against that
argument before I used it: he keeps the verse's own connective in four other clipped lemmata
(@0155D *Et missis,* · @0165D *Et date ei,* · @0166C *Non dedistis,* · @0155A *Et qui ceciderit,*),
which is the fact that **weakens** my decline, and I record it here rather than only the fact that
helps it. Full ruling at §(d) 6.

**3. When a single-word `[var:]` fires.** Launch brief §2 requires a witness of its own. **Three of
my seven are single words** (@0155D *videret*, @0161D *posset*, @0162C *stabit*). All three meet
the **second** limb outright — **I read all three on both witnesses**, so our transcription is
eliminated as the other owner — and all three meet the **first** as well, though not equally:
@0155D and @0161D are re-argued by the gloss in its own next words, while @0162C's case is the
weaker one, that the verse is adduced by *unde dicitur* to prove a **future** state and the tense
is what makes it prove it. Ownership is settled by the plate, never by the argument.

**4. Every claim about the type rests on two witnesses.** I read all **nine** pages of my range on
the archive PDF **and** all **nine** leaves on Gallica, corner numbers first on each. **This changed
the answer about thirty-four times** — see §(e). Nothing in this file rests on one copy, and in
particular **a verse number I would have altered on the archive alone is refuted at Gallica**
(§(d) 8), and a lemma that reads perfectly on the archive is a non-word on Gallica (§(d) 3).

**5. Where the plate and our twin disagree, the English renders the plate** and the site is filed as
a pending TEI patch. Two sites, both Corpus Corporum's, neither Migne's.

**6. The vocabulary axes bind.** `turba`/`turbae` → **crowd/crowds** (0152C ×2, 0156B, 0160B);
**`multitudo` → multitude** (0157A, *Ut multitudine vincerent* → "that by their multitude they
might overcome"), and the two stand three columns apart, so the axis is doing real work here.
`daemonibus` → **demons** (0166D); `diabolus`/`diaboli` → **devil** (0152C, 0159C, 0160A).
`gentes`/`gentibus`/`gentium` → **Gentiles** in the *Judaei*/*gentes* opposition (0150C, 0150D,
0151C ×2, 0152A ×2, 0152B, 0153D, 0154D, 0155A, 0158B) — Matthew is that gospel and this range is
thick with it. Singular `gens` of the Jewish people → **nation** (0156D *in gente eorum*, 0160C
*excidio gentis*, 0161B–C *suae gentis* ×2), and the one plainly generic plural, *de omni gente
collectos* at 0161C, → **nation** as well. `mysterium`/`mysteria` → **mystery/mysteries**
(0153B, 0158A, 0165D); **`sacramentum` → sacrament** (0152A *sacramentum geminae dilectionis*,
0155D *omne sacramentum incarnationis*), 1:1 with the above.
⚑ **`natio`, `ethnicus`, `gentilis` and `gentilitas` do not occur in this range.** The `natio`
grep returns nine hits and **all nine are the documented false positives** — *destinatione*,
*praedestinati*, *generatione(m)* ×4, *damnatur*, *indignati*, *contaminatione*. Recorded because
the brief asks for the instrument check to be **stated**, not merely run.

**7. The commentator's own voice is not archaised.** `dicit`/`ait`/`dixit` → *says*/*said*
throughout; `-eth` and `-est` forms appear **only inside quoted scripture** (*sojourneth*,
*cometh*, *standeth*, *believest*, *knewest*, *wouldst*). `thou` is singular and `you` plural
throughout — the switch is visible inside a single gloss at 0152B (*Tibi.* → "*To thee.* If thou
believest") and at 0160A, where Jerusalem is addressed *tu* ("I would, and thou wouldst not") four
words after the plural *Rei estis sanguinis* ("You are guilty of blood").

**8. Punctuation is checked band by band, not by total** (brief §3's third test). All 71 column
bands in my six chunks now match their Latin twin **exactly** on `?`, `:` and `;`. Every band that
differed was repaired against the Latin: **six carried a *deleted* mark**, restored (0150C ×2,
0156C ×2, 0157D, 0159D ×2, 0162B, 0166C), and the rest carried a **supplied** one, softened to the
comma or full stop the Latin actually prints. Question marks: 9 in the Latin, 9 in the English,
band for band, and the three at 0160C are Pattern 8b's — §(d) 12.

---

## (b) SPAN COUNT — 268 against 268, paragraph-bounded

`data/briefs/9002-lemmata-0032.txt` declares **268 spans** for chunks 0032–0037, of which 0 are
open-ended.

Counting my own Latin **paragraph by paragraph** (per the file's own warning that a bare total can
agree falsely when two errors cancel):

| chunk | italic `*…*` | guillemet `« … »` | paragraphs with an odd asterisk count |
|---|---|---|---|
| 0032 | 23 | 0 | 0 |
| 0033 | 64 | 0 | 0 |
| 0034 | 41 | 0 | 0 |
| 0035 | 37 | 0 | 0 |
| 0036 | 56 | 0 | 0 |
| 0037 | 47 | 0 | 0 |
| **total** | **268** | **0** | **0** |

**268 = 268, exact**, and the whole-file total and the paragraph-bounded total agree at every
chunk. Not one paragraph in my range carries an odd number of asterisks, and there is not a single
guillemet in 6,703 words, so both failure modes that make a bare total lie are excluded. Matthew
is an **italic-lemma** book throughout.

**The 268 split: 147 verse lemmata · 2 `*usque ad*` formula spans · 119 second lemmata, inline
scripture, glossed words and name-etymologies.**

⚑ **On the dashless-address bug the coordinator warned of: my range has NONE.** I counted the
verse addresses in my own Latin rather than from the brief's marks, and **all 147 are printed
`VERS. n.-- `, with the dash**; a regex over the chunk bodies that accepts `VERS. n.` with *or*
without the dash returns 147 and 147. (A naïve `grep -c 'VERS\.'` returns 153 because it also
catches the six `incipit:` lines in the frontmatter — worth saying, because that is the shape of
error the count exists to catch.) So the coordinator's hand-check of the eight work-wide spans is
confirmed from this end: none of the remaining dashless addresses falls in cols 0150–0166, and the
⚑ ownership test did not silently skip anything here.

---

## (c) THE LEMMA DIVERGENCE LIST — all 268 spans collated against `sources/vulgate/clementine-flat.txt`

Migne's citation sigla pass through verbatim under convention 4 and are **not** treated as
divergences; a wrong siglum is his attribution practice. **Five in my range are demonstrably wrong
and are recorded, not corrected**: `(cap. IV)` at 0154C on what is **Is 5:7**; `(Luc. XX)` at 0155A
on a quotation his own sentence attributes to **Marcus** and which is **Mc 12:8**; `(Joan. II)` at
0154D on what is **Jo 11:48**; `(II Col. II)` at 0162C on what is **Col 2:3**; `(I Thess. III)` at
0164B on what is **1 Thess 5:2**. All five were read at the plate and all five are Migne's.

### C1. THE SEVEN THAT FIRED

| col | Migne prints | received text | why it fired |
|---|---|---|---|
| **0152A** | *Omnes enim peccaverunt et egent **gratia** Dei* `[n: (Rom. III)]` | Rom 3:23 *omnes enim peccaverunt, et egent **gloria** Dei* | **Grace for glory** — a different noun in a proof-text Migne cites by chapter, and the one word the sentence turns on. The gloss is arguing that the Gentile colt "was itself also ensnared in the bonds of sins", so *gratia* reads as though Paul had written what the argument needs. The strongest of my seven: multi-word quoted clause, cited siglum, one substituted content word. |
| **0155B** | *Ite in ignem aeternum.* | Mt 25:41 ***Discedite a me maledicti** in ignem aeternum* | The clause is put in the Lord's mouth by *cum dicit*, and the verb he is made to say is not the verb of the verse. *Ite* is not an abbreviation of *Discedite a me maledicti*; it is a word the verse does not contain, supplied to govern the surviving phrase. The English on the page changes from "Depart from me, ye cursed" to "Go". |
| **0155D** | VERS. 11.-- *Ut **videret** discumbentes.* | Mt 22:11 *Intravit autem rex ut **viderent** discumbentes* | Singular for plural: **who does the seeing** changes, from the guests to the king. The gloss argues from it in the next four words — *videri faciat judicandorum merita, et discernat*, both singular, both of the king. Single word, so §2's bar applies and is met on **both** limbs: the gloss leans on it, and I read it on both witnesses. ⚠ **The call turns on one letter, so `sources/vulgate/README.md`'s caution applies and is stated: our Clementine copy is not authoritative to that precision.** The marker names the reading, not a verdict. |
| **0156A** | VERS. 14.-- *Multi **autem** sunt vocati, pauci vero electi.* | Mt 22:14 *Multi **enim** sunt vocati, pauci vero electi* | *autem* for *enim* at **the verse's own opening**, so no clipping explains it. This is the class launch-brief §7 adjudicated work-wide at @0093A (*Dico autem vobis* for *Dico enim vobis*) and confirmed on both plates there; I read it on both plates here. ⚑ The gloss re-quotes the lemma four lines later, still with *autem*, so the reading stands twice on the page. |
| **0159A** | *Stulte, qui fecit quod deforis est etiam id quod intus est, fecit* `[n: (Luc. XI)]` | Lc 11:40 ***Stulti nonne** qui fecit quod deforis est, etiam id quod **deintus** est fecit **?*** | Three changes at once and two of them are structural: **plural vocative to singular** (*Stulti* → *Stulte*) and **an interrogative made declarative** by the loss of *nonne*, so a rhetorical question put to many becomes a statement made to one. The third, *intus* for *deintus*, is not what the marker names. This is the only span in my range where the **sentence type** of the received text differs. |
| **0161D** | VERS. 24.-- *Si fieri **posset**.* | Mt 24:24 *ita ut in errorem inducantur **(si fieri potest)** etiam electi* | Imperfect subjunctive for present indicative. **The gloss argues from it explicitly**: *Id est, si aliquo modo fieri **posset**, ut Dei praefinitio mutaretur* — the whole exposition is that the clause is counterfactual, which is what the subjunctive gives and the indicative does not. Read on both witnesses. ⚑ Per the coordinator's instruction I checked the **surrounding clause** too: Migne's words are the verse's own parenthesis, and the next lemma he glosses is *Electi*, which is the verse's next word — so the tense is the only divergence, not a symptom of a different verse. |
| **0162C** | *Terra in aeternum **stabit**.* | Ecl 1:4 *terra autem in aeternum **stat*** | Future for present in a proof-text adduced by *unde dicitur* for a claim **about the future**: heaven and earth *innovabuntur*, the form laid aside and the substance remaining. The future is what makes the verse prove the point, and a reader who is told nothing takes Migne's Ecclesiastes for the Vulgate's. |

⚑ **The three that are single words all satisfy the harder limb**, and I say so because §2 warns
that confidence and truth are close to uncorrelated on ownership: in each case what settles
ownership is that **both copies print it**, not that the argument is good.

### C2. THE NINE VERSE LEMMATA THAT ARE NOT VERBATIM IN THEIR OWN VERSE

I collated **all 147 verse lemmata** against their own Matthew chapter and verse — chapter taken
from the `CAPUT` head in my own Latin and verse from the `VERS.` address in my own Latin, never
from the brief's pre-scan. **138 agree word for word. Nine do not**, and here they all are.
Three fired (above); six are declined, each with its reason.

| col | verse | Migne | Clementine | verdict |
|---|---|---|---|---|
| 0155D | Mt 22:11 | *Ut videret discumbentes.* | *ut viderent* | **FIRED** (C1) |
| 0156A | Mt 22:14 | *Multi autem sunt vocati…* | *Multi enim* | **FIRED** (C1) |
| 0161D | Mt 24:24 | *Si fieri posset.* | *si fieri potest* | **FIRED** (C1) |
| 0157D | Mt 23:1 | *Tunc locutus est.* | *Tunc **Jesus** locutus est ad turbas* | **DECLINED — an artifact, not a divergence.** Launch-brief §7 rules it and the plate confirms the ruling: the lemma is **clipped**, and the phrase search fails only because one word stands between Migne's two halves. This is convention 3's ordinary fragment. See §(d) 1. |
| 0158B | Mt 23:15 | *Circumitis.* | *circuitis* | **DECLINED — orthographic.** Both are real forms of *circumeo*; the uncontracted *circum-* is the regular one. Nothing in the gloss turns on the syllable and the English is "You go about" either way. |
| 0158B | Mt 23:16 | *Quicunque.* | *Quicumque* | **DECLINED — orthographic**, the *-cunque*/*-cumque* pair the 0016–0021 stint declined across *Nunquid*/*Numquid*. |
| 0165B | Mt 25:19 | *Posuit autem.* | *et posuit* | **DECLINED, and argued rather than asserted** — the coordinator's third ⚑. Full ruling at §(d) 6. |
| 0165D | Mt 25:27 | *Nummulariis.* | *numulariis* | **DECLINED — orthographic**, a doubled *m*. Migne prints the same word with **one** *m* at 0153A (*Mensas numulariorum*) and at 0153A again (*posuerunt numularios*), both confirmed at the plate, so this is his own loose practice inside three columns, not a reading. |
| 0166C | Mt 25:40 | *De his fratribus.* | *uni **ex** his fratribus meis minimis* | **DECLINED.** *de* for *ex* is a preposition of identical force here, and the lemma reads as a **topic head** rather than a quotation — the gloss under it quotes not Mt 25:40 at all but **Mt 12:50** (*Fratres mei et mater sunt qui faciunt voluntatem Patris mei*), so Migne is naming the subject, not citing the words. Read on both plates. |

### C3. THE ⚠ SPANS — every failed Clementine search in my range, with the CAUSE of each named

Launch-brief §7 asks that, before a ⚠ is called a divergence, I say **which of the five causes** I
have excluded: (i) a real divergence, (ii) an elided word, (iii) a word division, (iv) a defect in
our own Clementine copy, (v) a defect in our own TEI twin. Here is every one, with its cause.

| col | span | cause |
|---|---|---|
| 0150C | *Advena qui tecum moratur, ascendet super te: ille erit in caput, et tu eris in caudam.* | **Conflation + substitution.** Migne splices **Dt 28:43** (*Advena, qui tecum **versatur in terra**, ascendet super te*) to **Dt 28:44** (*Ipse erit in caput, et tu eris in caudam*), dropping *eritque sublimior : tu autem descendes, et eris inferior. Ipse foenerabit tibi…* between them, and prints *moratur* for *versatur in terra* and *ille* for *Ipse*. **Declined:** the splice is ellipsis, which the bar excludes; *moratur*/*versatur* are near-synonyms that render identically in English; *ille*/*Ipse* is "he" either way. **The gloss's own keywords — *caput* and *caudam* — agree with the Vulgate exactly**, which is the test that matters, since the whole gloss is built on them. Read on both plates. |
| 0151A | *Non enim personarum acceptio est apud Deum:* | **Word order.** Col 3:25 *non est personarum acceptio apud Deum*; Rom 2:11 *non enim est acceptio personarum apud Deum*. Migne's clause is those two words re-ordered and carries no siglum. Declined. |
| 0151D | *Non potest civitas abscondi super montem posita.--Ad montem Oliveti: tunc Jesus,* | **Two quotations inside one span**, which is why the phrase search fails: **Mt 5:14** (*supra* → Migne's *super*) followed by Migne's own em-rule and then **Mt 21:1** (*ad montem Oliveti : tunc Jesus*, verbatim). *super*/*supra* renders "upon a mountain" either way. Declined. |
| 0152D | *Benedictus. Osanna,* | **Elision + transliteration.** Mt 21:9 *benedictus, qui venit in nomine Domini : hosanna in altissimis*; Migne clips the relative clause and prints *Osanna* without the *h*. ⚑ **The gloss argues from the form** (*Osi*, *id est, salva* + *Anna*), so §2's first limb is met — and I still decline, because the divergence is the **spelling of a transliterated Hebrew acclamation**, which the 0000 stint's Policy 4 excludes, and because the English keeps *Osanna* as printed, so the reader meets the form the etymology needs. Declined. |
| 0152D | *In excelsis.* (×2) | **Substitution, declined.** Mt 21:9 reads *in **altissimis***; *in excelsis* is Luke's word (Lc 2:14) and the liturgy's. The English is "in the highest" for both, so nothing on the page changes; a reader loses nothing. Recorded because it is a real harmony/liturgy pull and the next reader should not have to re-derive it. |
| 0153C | *Infantium et lac.* | **Migne's own abbreviation.** Mt 21:16 *ex ore infantium et **lactentium***; the plate prints `lac.` with the stop, on both copies, and the gloss immediately expounds *Lactentes quasi lacte*. Rendered per convention 3 as the phrase it stands for, "Of infants and sucklings". Declined. |
| 0153D | *Nunquam ex te fructus.* | **Orthographic** (*Numquam*). Declined. |
| 0154B | *Habeo multa vobis dicere, sed non potestis portare modo;* | **Elision + word order.** Jo 16:12 *Adhuc **multa habeo** vobis dicere*. Declined. |
| 0154B | *Nolite sanctum dare canibus.* | **Word order.** Mt 7:6 *Nolite **dare sanctum** canibus*. Declined. |
| 0154C | *Vinea Domini saba,* etc. | **Transliteration + clipping — my closest call.** Is 5:7 reads *Vinea enim Domini **exercituum** domus Israel est*; Migne prints the Hebrew title untranslated and cut short by his own *etc.*, and mis-cites it *(cap. IV)*. **Declined** because *Sabaoth* and *exercituum* are the same word in two languages and assert the same thing, and because the class — a transliterated Hebrew form standing where the Vulgate translates — is the 0016 stint's *Gerazenorum* class. ⛔ **The argument that nearly carried it, so the next reader can weigh it:** the English word on the page really does change ("of Sabaoth" for "of hosts"), and that was the 0016 stint's own test for firing its three inflectional markers. What decided it against firing is that **nothing in the gloss touches the title at all** — the exposition runs entirely on *Fodit in ea torcular* — so there is no witness of the kind §2 requires. Read on both plates. |
| 0155D | *Non restitum veste nuptiali.* | **A PRESS VARIANT, not a divergence.** Mt 22:11 *non **vestitum** veste nuptiali*. Gallica f78 prints *restitum*; archive p.83 prints *vestitum*; **both clean at 400 dpi.** Full ruling at §(d) 3. No `[var:]`, no `[sic:]`, no patch. |
| 0156A | *Multi autem sunt vocati.* (second lemma) | **The same divergence as the verse lemma above**; the marker fires once, on the first occurrence, per Pattern 14's "a note beside the faithful rendering". |
| 0157B | *Non longe es a regno Dei.* | **Word order.** Mc 12:34 *Non **es longe** a regno Dei*. Declined. |
| 0157B | *Deus tuus unus est. Non assumes nomen Dei tui in vanum. Observa diem sabbati.* | **An abridged three-clause conflation of the first table**, which is why no single verse matches: Dt 6:4 (*Dominus Deus noster, Dominus unus est* → Migne's *Deus tuus unus est*), Ex 20:7 (*Non assumes nomen **Domini** Dei tui in vanum*, Migne dropping *Domini*), and Dt 5:12 (*Observa diem sabbati*, **verbatim**). Declined: shortening and conflation, both excluded by the bar. |
| 0157D | *Venite ad me qui laboratis et onerati estis.* | **Elision.** Mt 11:28 *Venite ad me **omnes** qui laboratis*. Declined. |
| 0159A | *Qui mundatis.* | **A single function word.** Mt 23:25 *quia mundatis*; Migne prints *Qui*. Read on both plates, so it is his. **Declined**: the gloss makes nothing of it, and Migne forms his lemma-heads as relatives elsewhere in the same series of woes where the Vulgate has one (*Qui decimatis* at 0158C, *Qui aedificatis* at 0159B, both verbatim), so *Qui mundatis* is his house form for the address rather than a reading. |
| 0159A | *Stulte, qui fecit…* | **FIRED** (C1). |
| 0161D | *Ecce hic Christus.* | **Elision of the copula.** Mt 24:23 *Ecce hic **est** Christus*. Read on both plates; the English is "Behold, here is Christ" either way. Declined. |
| 0161D | *Ecce in cubilibus, ecce in deserto.* | **Not in the Clementine at all, in any book** — this is Migne's own formation on the two halves of Mt 24:26 (*Ecce in deserto est* … *Ecce in penetralibus*), with *cubilibus* for *penetralibus*. Declined as a paraphrase rather than a quotation: it is introduced by *unde dicitur* in a list of what heresy says, not adduced as a proof-text, and the gloss quotes the real *in penetralibus* correctly nine lines later at 0162A. |
| 0161D | *hic aut illic.* | **A fragment of Mt 24:23** (*Ecce hic est Christus, **aut illic***). Agrees. |
| 0162C | *Terra in aeternum stabit.* | **FIRED** (C1). |
| 0162C | *In eo esse absconditos thesauros sapientiae et scientiae* `[n: (II Col. II)]` | **Recast into indirect speech**, which is why the search fails: Col 2:3 *in **quo sunt omnes** thesauri sapientiae et scientiae absconditi*; Migne turns it into an accusative-and-infinitive governed by *sicut Apostolus ait*. **Declined** — the recast is a grammatical consequence of the frame, and *omnes* is the only word lost. |
| 0162D | *Cum enim dixerint pax et securitas, tunc repentinus eis superveniet interitus* `[n: (I Thess. V)]` | ⛔ **CAUSE (iv): A DEFECT IN OUR OWN CLEMENTINE COPY.** `sources/vulgate/clementine-flat.txt` line 3391 prints 1 Thess 5:3 as *tunc **repentius** eis superveniet interitus* — **`repentius` is not a Latin word.** The true reading is *repentinus*, which is what **both plates** print, what our TEI twin prints, and what the sense requires. **Migne agrees with the Vulgate exactly here and the ⚠ is entirely the comparand's**; the only real difference is that Migne drops the punctuation before *Pax*. See §(d) 9 — this is a fifth entry for the README's list of defects in our Clementine copy, and it is the second time in this work that a ⚠ has been traced to that file rather than to Migne. |
| 0163B | *Simile est regnum coelorum decem virginibus.* | **Tense, declined.** Mt 25:1 *Tunc simile **erit** regnum caelorum decem virginibus*. Read on both plates. ⛔ **Why this declines where @0162C fires, since they are the same class:** here the clause is not adduced as a proof of anything. It is one of **three back-references in a row** naming where each of three parables begins (*quod est ubi dicit:* …), and the other two — *Vigilate ergo* and *Sicut enim homo peregre proficiscens* — are verbatim. A locator is not a proof-text, and nothing in the gloss rests on whether the kingdom *is* or *shall be* like the ten virgins. |
| 0164A | *servos vel ancillas* `[n: (Luc. XII)]` | **A single connective.** Lc 12:45 *percutere servos **et** ancillas*. Declined: *vel* for *et* asserts nothing different in a list of two, the gloss's point is the weakness of age and sex in both, and it is a clipped fragment where a connective is doing the work of the clip. |
| 0164B | *Dies Domini sicut fur in nocte veniet* `[n: (I Thess. III)]` | **Elision of the correlative.** 1 Thess 5:2 *quia dies Domini, sicut fur in nocte, **ita** veniet*. Declined. (The siglum is wrong — 5, not 3 — and passes through as printed.) |
| 0166B | *Sedebitis et vos super sedes duodecim judicantes tribus Israel.* | **Elision.** Mt 19:28 *judicantes **duodecim** tribus Israel*; Migne drops the second *duodecim* while keeping the first. Declined. |
| 0166B | *Esurivi et dedistis mihi manducare.* | **Elision.** Mt 25:35 *esurivi **enim**, et dedistis mihi manducare*. Declined. |
| 0166B | *Esurivi, et non dedistis mihi manducare,* | **Elision.** Mt 25:42 *esurivi **enim**, et non dedistis mihi manducare*. Declined. |
| 0166C | *De his fratribus.* | See C2. |
| 0166D | *Quandiu non fecistis uni,* | **Orthographic.** Mt 25:45 *Quamdiu*; the 0016–0021 stint declined this exact pair. Declined. |

### C4. THE REST — every span not listed above, checked and found to agree

Every remaining span was read against the Clementine in place: **the 138 verse lemmata of C2's
"agree" column, and every second lemma, inline quotation, glossed word and name-etymology not
itemized in C3.** They match the received text word for word, allowing only *ae*/*e* and
*coe*/*cae* orthography, which is Corpus Corporum's expansion convention and not Migne's. Among the ones worth naming because a reader might expect trouble and
there is none: *Phlp 2:10* at 0152D (*ut in nomine Jesu omne genu flectatur coelestium, terrestrium
et infernorum*) is **exact**; *Ps 57:7* at 0154B (*Deus conteret dentes eorum in ore ipsorum*) is
**exact**; *Ps 2:8* at 0154D (*Postula a me, et dabo tibi gentes haereditatem tuam*) is **exact**;
*Jo 11:48* at 0154D and *Jo 19:15* at 0152B are **exact**; *Mc 12:8* at 0155A is **exact** despite
being cited as Luke; *Rom 8:18* at 0166C (*Non sunt condignae passiones hujus temporis ad futuram
gloriam*) is **exact**; *Lc 17:34* at 0163A (*in illa nocte*, *Duo in lecto*, *Unus assumetur*) is
**exact** three times; *Mc 13:27* at 0162B (*A summo terrae usque ad summum coeli*) is **exact**.

**Recording the negatives is the point of this section**: a list of findings alone cannot be told
apart from a report by an agent that never looked.

### C5. THE `usque ad` AUDIT — 2 formula spans, 5 ordinary occurrences, and the `etc.` splice test applied to each

The raw grep returns **eight** hits in my range and **one is a false positive** (*necatusque* at
0159D, and *cujusque* at 0164D is a ninth that the `\busque` form catches). The seven real ones:

| col | text | formula? | rendering |
|---|---|---|---|
| 0150B | *Denarius habet imaginem regis,* **etc.,** *usque ad* vel in ultimis resipiscite | **YES** — follows `etc.` and names where the quotation resumes | **as far as** |
| 0150D | *Ecce ascendimus,* etc. … Hoc saepe eis dixerat, **etc.,** *usque ad* resurrecturum non dubitent | **YES** | **as far as** |
| 0150A | quae ab Abel **usque ad** ultimum electum | no — ordinary extent, no `etc.` anywhere near it | "from Abel **to** the last of the elect" |
| 0150A | a mundi hujus initio **usque ad** finem | no — ordinary extent | "from the beginning of this world **to** its end" |
| 0159C | *Usque ad sanguinem.* | no — **the verse's own words** (Mt 23:35 *a sanguine Abel justi usque ad sanguinem Zachariae*), and a `VERS. 35` lemma at that | "**Even to** the blood." |
| 0160A | a primo parricida **usque ad** ultimum perditionis filium | no — ordinary extent | "from the first parricide **to** the last son of perdition" |
| 0162A–B | *A summo terrae **usque ad** summum coeli,* … ab extremis terrae finibus per directum **usque ad** ultimos terminos | no ×2 — the first is **Mc 13:27's own words** inside the lemma, the second is the gloss expounding it | "**to** the utmost part of heaven"; "straight on **to** its uttermost limits" |

⚑ **The `etc.` splice test separates them cleanly here and italic membership would not have**: both
formula instances sit inside an italic span *and so does the Mt 23:35 lemma at 0159C*, which is not
the formula at all. That is 8967 col 0953C's exact trap, met again. Per the brief's instruction the
five exceptions are named here **with the Latin that forced them**, so that a silent departure and
a reasoned one can be told apart.

---

## (d) THIS RANGE'S CRUCES, BY COLUMN

### 1. @0157D — `VERS. 1.-- *Tunc locutus est.*`, the first ⚑, adjudicated as §7 rules it

Launch-brief §7 rules this **an artifact of the instrument, not a divergence**, and instructs that
no `[var:]` fire. I confirm the ruling from my own side and record what I checked, because a flag
declined without a reason is indistinguishable from a flag missed.

Mt 23:1 reads *Tunc **Jesus** locutus est ad turbas, et ad discipulos suos*. Migne's lemma is
*Tunc locutus est* — his two halves are contiguous in the Clementine **except for one word
standing between them**, which is exactly what a phrase search cannot see. The ⚑'s only other
match, **Jos 10:12**, is *Tunc locutus est Josue Domino*: three common words in a different book,
not a harmony parallel, and — following §7's own warning that *a reference list is not a parallel*
— I read it rather than trusting the reference. It has nothing to do with Matthew 23.

Read at **archive p.84 and Gallica f79**, corner numbers 157/158 confirmed on both: both print
`VERS. 1. — *Tunc locutus est.*` with the dash, agreeing with our twin. Rendered per convention 3
as the fragment it is: **"Then he spoke."** No marker.

### 2. @0158D — `in est` for *id est*: the one `[sic:]` in 6,703 words, and why it is fireable

    Colunt ergo Judaei culicem, in est, minima observant

**Both witnesses print `in est`** — archive p.84 and Gallica f79, corner numbers first on both, at
normal letter spacing with clean commas either side. Our twin carries it verbatim. So the two
owners a one-word defect can have are reduced to one: **it is Migne's**, and the `[sic:]` is
fireable without the patch-first problem that made the class unfireable for the 0000 and 0016
stints.

It passes Pattern 12's test on the first branch: **`in est` has no grammatical slot.** It stands
where *id est* must stand, between an accusative object and its gloss, and no English can carry
"in is". Per Pattern 7's **2026-09-05 amendment** the English renders the sense and Migne's type
sits inside the marker:

> The Jews therefore strain the gnat, **that is [sic: *in est*]**, they observe the least things…

⚑ **Test 1 run on it** (strip every marker and read what is left): *"The Jews therefore strain the
gnat, , they observe the least things"* — the sentence keeps its subject, its verb and **its
object**, which is 7a⁗'s missing fourth question. Nothing is hiding inside the bracket.

### 3. @0155D — `restitum` / `vestitum`: THE TWO COPIES DIVERGE, AND THE ARCHIVE IS THE GOOD ONE

| | |
|---|---|
| **Gallica f78** | *Non **restitum** veste nuptiali.* |
| **archive p.83** | *Non **vestitum** veste nuptiali.* |
| **our twin** | *Non **restitum** veste nuptiali.* |
| **Mt 22:11** | *vidit ibi hominem non **vestitum** veste nuptiali* |

Read at **400 dpi on both copies**, on the letter itself: Gallica's is an unambiguous italic `r`,
with the shoulder and the dot terminal of the face's `r` and nothing of the `v` that stands four
letters later in *veste*; the archive's is an unambiguous italic `v`, identical to the `v` of its
own *veste*. Neither letter is broken, over-inked or ambiguous. Corner numbers 155/156 confirmed
on both pages before either reading.

**This is launch-brief §6's press variant** — `Bethehem`/`Bethlehem` at 0073A, 8950's
`Mititte`/`Mittite` — and it takes:

- **no `[sic:]`**, because a `[sic:]` needs two witnesses and there is one;
- **no TEI patch**, because our twin faithfully follows one of the two printings and I have no
  ground for preferring the other;
- **no `[var:]`**, because on the archive's printing there is no divergence from Mt 22:11 at all.

**The English renders "Not clothed with a wedding garment"** — the sense the archive's *vestitum*
and the verse both give — and this crux is the whole of the disclosure. ⛔ I record that this is a
rendering **against** our twin's word, made deliberately and not silently: our twin prints a
non-word, and Pattern 7's untranslated-carry is available only with a `[sic:]`, which I may not
fire.

⚑ **What this site adds to the work's structural finding, and it cuts against the trend.** Five
stints have now measured the archive as much the worse witness. Here it is the **better** one, and
the direction matters: read on the archive alone, this lemma would have looked **completely clean**
and nothing would have been raised at all. **A single-witness read can produce a false clearance as
easily as a false finding**, and a clearance leaves no trace for anyone to check.

### 4. @0153C — a stop our twin supplies, and it changes what the sentence says

See `9002-PENDING-TEI-PATCHES-0032.md` §2. Recorded here because it is the crux, not merely the
patch: with the supplied stop the English reads *"Witnesses of the miracles. They are called
Christ's infants…"*; against the plate it reads *"Witnesses of the miracles of Christ, they are
called infants…"*. **Both construe**, which is why nothing downstream could have caught it, and
only the plate decides. It was found while reading that line for `oriminis` four lines above —
addendum C's rule.

### 5. @0166C — `quid` for *qui*, a real word rendered as printed

    Quid meretur qui aliena rapuit, si aeternaliter damnatur quid de suo non dedit?

**Both witnesses print `quid`** (archive p.88, Gallica f83, read at 3× magnification on the word
itself). The sense wants the relative *qui*: "if he **who** has not given of his own is eternally
damned". As printed, *quid* is the indefinite that regularly follows *si*, and it is rendered as
what it means:

> What does he deserve who has seized what belongs to another, if he is eternally damned who has
> not given **anything** of his own?

Pattern 12 excludes it from `[sic:]` — it is a real word that occupies a slot and can be rendered.
⛔ **`[cj:]` considered and declined.** Pattern 18 fires where the faithful English **misleads**;
here it does not: with *quid* read as the indefinite object of *dedit*, the sentence asserts what
the gloss needs (that not giving is damnable, so seizing is worse). The English supplies the
relative pronoun that Latin may elide and English may not, which is the ordinary work of
translation, not an emendation of *quid*. ⚑ The plate's question mark is preserved.

### 6. @0165B — `Posuit autem`, the coordinator's third ⚑: DECLINED, and here is why the rival lost

Mt 25:19 reads *Post multum vero temporis venit dominus servorum illorum, **et posuit** rationem
cum eis*. Migne's lemma is `VERS. 19.-- *Posuit autem.*`

**The read.** Archive **p.88** and Gallica **f83**, corner numbers 165/166 confirmed on both.
Both print *Posuit autem*, in italic, with the B band beside the line on both copies. Our twin
agrees. ⛔ **So ownership is settled and it is not ours**: `et`→`autem` is a different word, not a
filled counter or a thickened stroke, and ink cannot manufacture it — which is precisely why the
coordinator flagged our twin as the thing to check, and the twin is right.

**What §2 asks next.** A single-word `[var:]` stands on either of two limbs.

1. **Does the gloss argue from the word?** No. The gloss is *Coepit singulorum actus discutere
   accusante conscientia unumquemque vel excusante* — it expounds the **reckoning**, and there is
   nothing in it that the connective carries. Contrast @0161D four columns earlier, where the gloss
   re-quotes *fieri posset* by name.
2. **Is the form one that letter-level corruption cannot manufacture?** Yes. But that limb settles
   **ownership**, which two plates have already settled, and it does not by itself make the
   divergence material.

**And the reason for declining, which is the argument and not the absence of one.** Migne's lemma
is **clipped out of the middle of the verse**. *Et posuit* cannot open a lemma without dragging in
the clause it coordinates; a postpositive *autem* is the ordinary Latin way to open a sentence
lifted from a *cum*-clause, and it stands exactly where the clip needs something. A `[var:]` here
would be a **public claim about Migne's Matthew text** resting on a word that his lemma-forming may
have supplied, and §2's own warning — *a marker that quotes only the witness cannot be audited* —
tells against it.

⛔ **The rival, and it is a good one, stated so a reader can overrule me.** Migne keeps the verse's
own connective in **four** other clipped lemmata in this same range — *Et missis,* (0155D, Mt 22:7),
*Et date ei,* (0165D, Mt 25:28), *Non dedistis,* (0166C, Mt 25:42), *Et qui ceciderit,* (0155A,
Mt 21:44) — all four verbatim and all four read at the plate. So the "a clip needs a connective"
account is **not** his uniform practice, and on that evidence @0165B is anomalous within his own
habits. What holds me to the decline is that the alternative is a marker on a function word that
changes no assertion, in a work that already carries seven `[var:]` from my range; §2's bar exists
to keep exactly that from happening. **If a later reader wants it fired, this is the paragraph to
argue from, and the plates are already read.**

⚑ The distinction I am relying on is stated once more in §(a) 2 with its cost, because it is the
same substitution I **did** fire at @0156A and a rule that fires one and declines the other must be
statable in advance.

### 7. @0156D — `Unde` capitalized after a comma, and it is Migne's

    *Erratis.* Ideo quia nescitis Scripturas, Unde sequitur, ut nesciant virtutem Dei.

Confirmed on **both** copies (archive p.84, Gallica f79). A capital in mid-sentence after a comma,
where the clause also has no main verb of its own. Rendered literally — *"For this reason, because
you know not the Scriptures, Whence there follows, that they know not the power of God."* — capital
and all, under Pattern 7 and Pattern 8. No marker: nothing here is a non-word, nothing is a
divergence, and the capital is the printed page's.

### 8. @0154D — the verse number I would have changed on one witness, and did not

The archive p.82 prints **`VERS. 27.`** where Gallica f77 and our twin print **`VERS. 37.`** The
context settles which is right — the lemma is *Novissime,* and the gloss is *Vide patrisfamilias
patientiam*, which is Mt 21:37 (*Novissime autem misit ad eos filium suum*) and not Mt 21:27 — but
**that is not why I left it alone.** I left it alone because a verse address may not be altered on
one witness, ever, and because the second witness agrees with our twin.

⚑ This is the 8950 class reproduced on a sixth range: over-inking closing the counter of a `3`.
And it is worth recording that **the sense-argument and the second witness happened to agree here**;
the standing rule is written for the case where they do not, and it holds either way. Nothing
machine-readable consumes a `VERS.` number.

### 9. @0162D — a ⚠ whose cause is OUR OWN CLEMENTINE COPY, not Migne

`sources/vulgate/clementine-flat.txt` line 3391 prints 1 Thess 5:3 with **`repentius`**, which is
no Latin word. Migne prints *repentinus* on **both** copies, our TEI twin prints *repentinus*, and
the received Vulgate reads *repentinus*. **The lemma agrees with the Vulgate exactly and the ⚠ is
the comparand's alone.**

⛔ **This is the fifth cause launch-brief §7 names, and the second time it has fired in this
work** (after `Mt 5:15 accedunt/accendunt`). It is worth a line in `sources/vulgate/README.md`, and
it is worth saying plainly why: **a defect in the comparand manufactures a divergence that looks
exactly like Migne's, and no plate read is triggered by it, because nothing about the Latin looks
wrong.** It was caught only because the whole span was collated word by word rather than trusted to
the pre-scan's ⚠.

### 10. @0165A — `Christi carnem nostram`, a genitive with no head

    Locus carnis terra est, ergo Christi carnem nostram ad peregrina duxit, quando coelum ascendit.

**Both witnesses print `Christi`** (archive p.88, Gallica f83). The sense wants the nominative —
*ergo **Christus** carnem nostram ad peregrina duxit*, "therefore Christ led our flesh into a far
country" — and with *Christi* the sentence has a genitive attached to nothing and an unexpressed
subject. Rendered as printed, with the genitive kept and the subject supplied as English requires:

> The place of the flesh is the earth, therefore he led the flesh of Christ, our own, unto foreign
> parts, when he ascended into heaven.

**Who "he" is**, per the brief's unexpressed-subject rule: Christ, from *coelum ascendit* in the
same clause and from the lemma *Peregre proficiscens vocavit servos suos* above it — the man going
into a far country is Christ ascending, which the gloss states outright. No marker: `[sic:]` is
excluded (a real word in its slot), and `[cj:]` is declined because the faithful English asserts
what the gloss asserts and misleads nobody.

### 11. @0164A — `*Fletus*` with no stop after the lemma

Gallica f82 prints *diversae voluntatis apparuit. **Fletus** Per similitudinem membrorum magnitudo
ostenditur tormentorum*, with **no point after the italic lemma**, and our twin agrees. The archive
p.87 prints *Fetus.* — a broken word **and** a supplied stop, its two departures cancelling into a
reading that looks plausible. Rendered as Gallica and our twin have it, with no stop:
*"**Weeping** By a likeness of the members the greatness of the torments is shown."* Pattern 8:
never supply a mark the plate lacks, even where the English reads oddly for want of it.

### 12. @0160C — three indirect questions behind one colon (Pattern 8b)

    Tria quaerunt: quo tempore destruenda Jerusalem sit? quo venturus Christus? quo consummatio
    saeculi ventura sit?

Migne closes three **indirect** questions with `?`, which English syntax cannot take. Pattern 8b's
ruling applies exactly: the *quaerunt* frame goes in front of the colon and the questions go direct
behind it, so all three marks survive.

> They ask three things: at what time is Jerusalem to be destroyed? when is Christ to come? when is
> the consummation of the world to come?

Three marks in, three marks out, in the same band. Both copies print all three.

### 13. Negation — the sites I walked slowly, per test 2 and 2a

Test 2a's trigger fires on a negative resting on a **verb** with a quantifier, correlative or
predicate nearby. Four sites in my range meet it and each is recorded with **the single Latin word
the negative attaches to**:

- **@0150C** *Quaerendum esset, **non** si daret quod **non** deberet: sed si **non** quod deberet.*
  Three negatives, and the `non … sed` correlative pivots on the **whole conditional**, not on the
  verb: the first `non` is on *si daret*, the second on *deberet*, the third on the elided *daret*.
  The English keeps all three on those hosts and keeps the ellipsis: "not whether he gave what he
  did not owe: but whether he did not give what he did owe." ⚑ The trap here is that an English
  ear wants "not *whether* he gave" to collapse into "whether he did not give", which would move
  the first negative onto the verb and destroy the *sed* pivot.
- **@0150D** *nec omnes primi nec omnes novissimi ad numerum electorum pertinent* — the negatives
  are on **omnes**, not on *pertinent*: "neither **all** the first nor **all** the last belong",
  not "the first do not belong". This is 8990 @0614B's class precisely; the quantifier is the host.
- **@0155D** *supponit **non omnes** qui sunt in Ecclesia, esse dignos regno* — the negative is on
  **omnes**, not on *esse dignos*: "he adds that **not all** who are in the Church are worthy of the
  kingdom", never "that those who are in the Church are not worthy". The whole point of the gloss is
  the clause that follows, *ne torpeant sui* — the warning is aimed at the many who ARE worthy, and
  the wrong host destroys it. 8990 @0611D's class exactly (*quia non omnibus patent*).
- **@0154C** *nolunt dicere quod sentiunt* — on *nolunt*, rendered "they are unwilling to say".
  No relocation: *velle*/*nolle* is lexical here and the 8987 @0624B trap (pressing a `non solum …
  sed` into double duty) does not arise, since there is no correlative.
- **@0166A** *Sed qui in fide **non** habet etiam virtutes quas naturaliter habet, perdit sine qua
  non sunt virtutes.* The first `non` is on *habet* (the faith), the second on *sunt*; *etiam* is
  the quantifier-like word and it belongs to *virtutes*, not to the negative. Rendered: "But he who
  has it not in faith loses **even** the virtues which he has naturally, without which there are no
  virtues." The *sine qua* refers back to **fides**, and that is the antecedent I supplied.

**The gloss-prose negatives elsewhere** (*non desistit* 0150A; *non voluntas, non propositum
culpatur, sed ignorantia* 0151A; *nemo potest cum Christo regnare, nisi passionem ejus sit imitatus*
0151A; *non in una via fidei, sed in diversis erroribus* 0152B; *nec ubi offendat* 0152C; *non
patet calumniae, non, ait, bene faciunt* 0153C; *nondum erat tempus* 0153D; *nisi per patientiam*
0154A; *nullus fuit in illo contumaci populo* 0154D; *non per ignorantiam, sed per invidiam* 0154D;
*non judicabuntur* 0166B) were each checked host by host and none moved.

### 14. Test 5 — the reading-back pass, and the two paragraphs it changed

Run last, with the counts already clean: **does the English assert what he asserts?**

- **@0151A** *et si impetrare non debet simplicitas, non meretur confundi.* My first pass had "if
  simplicity ought not to obtain **its request**"; the Latin's *impetrare* is absolute and the
  object is the mother's petition from the lemma above, so the English now reads "if simplicity
  ought not to obtain what it asks", which keeps the object where Migne left it — inferable, not
  stated.
- **@0164C** *Ne forte* is a **bare lemma** followed by roman prose (*unusquisque pro suis operibus
  mercedem suscipiet*). My first pass punctuated it *"Lest perhaps:"* with the colon **inside** the
  italic span, which turns Migne's lemma into a lemma-plus-mark he does not print. Repaired to
  *"Lest perhaps each one shall receive a reward for his own works"*. ⚑ Caught by the band test,
  not by reading — the supplied colon showed as a band mismatch — which is the argument for running
  both.

---

## (e) THE DECLINED-ODDITY LIST — every suspect I did NOT mark, in one place

### e1. Suspects in our Latin, adjudicated at the plate

| col | suspect | verdict |
|---|---|---|
| 0153B | `oriminis` — a non-word | **OURS.** Both copies print *criminis*. TEI patch 1; no `[sic:]` is writable until it lands. |
| 0153C | the full stop after `Testes miraculorum` — suspiciously tidy in a rough passage | **OURS, and SUPPLIED.** Neither copy prints it. TEI patch 2. |
| 0158D | `in est` for *id est* — a non-word | **MIGNE'S.** Both copies. `[sic:]` fired — §(d) 2. |
| 0154C | `saba` — a clipped Hebrew title, on the face of it a broken word | **MIGNE'S**, both copies, and it is an abbreviation, not breakage: his own *etc.* follows it. No marker. |
| 0166C | `quid` for *qui* | **MIGNE'S**, both copies. Real word, rendered as printed — §(d) 5. |
| 0165A | `Christi` for *Christus* | **MIGNE'S**, both copies. Real word, rendered as printed — §(d) 10. |
| 0156D | `Unde` capitalized after a comma | **MIGNE'S**, both copies — §(d) 7. |
| 0158B | `proselytum` set lower-case as a lemma | **A PRESS VARIANT.** Gallica lower-case, archive capital, both clean; our twin follows Gallica. Rendered lower-case as our twin and Gallica print it. No marker. |
| 0164A | `*Fletus*` with no stop | **MIGNE'S** on Gallica and our twin; the archive's *Fetus.* is that copy's — §(d) 11. |
| 0150A | *quotquot sanctos protulit, tot palmites misit* — a correlative that reads oddly | **NOT A DEFECT.** Ordinary *quot…tot*. Rendered "has sent forth as many branches as it has brought forth saints." |
| 0158D | *Ne eleemosynas fructum terrae videretur respuere* — a double accusative with no conjunction | **MIGNE'S**, both copies (the archive's *videreretur* is a dittography of that copy alone). Rendered literally, "Lest he should seem to spurn alms, the fruit of the earth". Declined: a real construction, harshly compressed, and Pattern 9's rule against burying real defects in noise applies. |
| 0160B | *omnia legis aedificia et compositio mandatorum ista destructa est* — plural subject, singular verb | **MIGNE'S**, both copies. Pattern 9: English has no exponent for the disagreement once the nearest subject is singular. Rendered "all the buildings of the law and that framing of the commandments was destroyed"; no marker, logged so a later sweep does not churn it. |
| 0157B | *malevolentia et livor nutrit impudentiam* — two subjects, singular verb | **MIGNE'S**, both copies. Ordinary Latin agreement with the nearer subject; no exponent in English. Rendered "ill-will and spite nourish shamelessness". |
| 0159A | *Lucas ita.* — a two-word sentence with no verb | **MIGNE'S**, both copies. Rendered as it stands: "Luke thus." |
| 0156D | *turpitudinem fabulae fingunt, quae deliramenti eos arguat* | **NOT A DEFECT.** *quae* agrees with *fabulae*/*turpitudinem*; subjunctive of purpose. Rendered "they invent the foulness of a fable to convict of raving those who assert the resurrection." |
| 0163A | *Duae differentiae sequentium orbem rerum mobilium, qui feminino genere designantur* — masculine *qui* on a feminine antecedent | **MIGNE'S**, both copies. Pattern 9: grammatical gender has no English exponent. |

### e2. Archive-only readings, every one refuted at Gallica

Recorded because launch-brief §6 asks for the number and because **each of these would have been a
false claim about Migne's type** had the second witness not been fetched. Our twin agrees with
Gallica at every one.

**Punctuation and address (17):** the comma after *essent* (0150B) · an intrusive comma inside
*usque ad,* (0150B) · the comma after *interrogante* (0151A) · `VERS 24.` for `VERS. 24.` (0151A) ·
the comma after *Vel* (0151B) · **`VERS. 30.` without the dash** (0151B) · the comma after *ait*
(0151C) · `, *super eos.*` for `. *Super eos.*` (0152C) · the comma after *facta est* (0156B) ·
`*Vos autem*` without its stop (0154C) · the comma displaced in *Postula, a me* (0154D) ·
`*Verebuntur..*` doubled (0154D) · **`VERS. 27.` for `VERS. 37.`** (0154D) · `*Fetus*.` with a
supplied stop (0164A) · `*Oves ad,*` for `*Oves ab,*` (0166A) · `VERS. 33 —` without its stop
(0166B) · `Sed` for `sed` after a colon (0151B).

**Letters (10):** `monte` for `montis` (0151D) · `Israël` for `Israel` (0152C) · `offerent` for
`offerrent` (0153A) · `iu` for `in` (0153B) · `Pharisiaes` for `Pharisaeis` (0155D) · `gnotis`
(left margin clipped, 0156B) · `sociatem` for `societatem` (0158B) · `videreretur` for `videretur`
(0158D) · `secundnm` for `secundum` (0157C) · `occureret` for `occurreret` (0163C) · `quoquot` for
`quotquot` (0160A).

### e3. Gallica-only readings, refuted at the archive

Fewer, and worth naming because the trend does not make them impossible: `Chritum` for `Christum`
(0158B) · `.ructum` for `fructum` (0158D) · `adoptivo.` for `adoptivo,` (0162D) · `moaum` for
`modum` (0166A). Our twin agrees with the archive at all four.

### e4. Press variants — both copies clean, no one to accuse

`aliqui` / `alii` (0153A) · `patrisfamilias` / `patris familias` (0154C) · `restitum` / `vestitum`
(0155D, §(d) 3) · `*proselytum.*` / `*Proselytum.*` (0158B) · `tollendo. Exemplo` / `tollendo,
exemplo` (0158B) · `Cujus` / `cujus` (0157C) · `quinquepertita` / `quinque pertita` (0164B). Our
twin follows Gallica at all seven. **No `[sic:]`, no patch, crux only** — launch-brief §6's
corollary.

### e5. Sections read clean

Cols **0159A–0160D** (archive p.85 / Gallica f80) are a **checked zero on both columns and both
copies** — the Zacharias-son-of-Barachias excursus, both printed question marks, the Nazaraean
Gospel note and all of `CAPUT XXIII`'s close agree with our twin line for line. Col **0150** is a
checked zero against our twin on Gallica. The **feet of all nine pages** were inspected on both
copies across the full page width: **zero numbered notes, zero raised asterisks, no apparatus
anywhere in cols 0149–0166.** Per launch-brief §8, a `[cn:]` or an `[nt:]` may never be recovered
from one witness, and this zero is recorded from two.
