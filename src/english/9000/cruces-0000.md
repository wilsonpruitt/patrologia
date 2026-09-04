# Cruces — 9000 *Glossa ordinaria*, **Evangelium secundum Lucam**, stint 1 (chunks 0000–0005, cols 0243D–0256A)

Chunks `0000`–`0005`; 4,758 Latin words; Jerome's prologue head, the Proemium, and Caput I–IV
(Luke 1:1 – 4:42). Written against `data/briefs/9000-launch-brief.md`, `translation-style.md`,
the 9741 anchor pair, and §1 of `src/english/8999/cruces.md` and `src/english/9001/cruces.md`.

---

## (a) THE POLICY I APPLIED — stated before the findings, so it can be argued with

**1. No `[sic:]`. None fired, and none was close.** The brief's measured result on John — 23
leaf-reads on fired markers produced **zero** corrections while nineteen *declined* oddities
produced **all seventeen** — is the whole procedure here. Every suspect word in this range is in
§(e) below, unmarked, with its column, and **with no attribution claim.** I do not know whose any
of them is. Where a form looks like it could be Migne's type or Corpus Corporum's transcription,
I name both possibilities and assert neither, and where I can see a mechanism (a hyphen-rejoin
shape, an assimilated medieval spelling) I say what the shape is and stop there.

**2. `[var:]` only on a quoted CLAUSE, only against `sources/vulgate/clementine-flat.txt`, cited
book chapter:verse, and only where the divergence changes the sense.** Three markers fired
(§(c)). Every other divergence in the lemma inventory — and there are twelve — is
listed with the reason it was declined. Declines fall into four classes and I applied them
mechanically: **(i) truncation** (the abridgment cuts the lemma mid-phrase, so the sequence is
absent from the Clementine because it is a fragment, not because it differs); **(ii)
orthography** (*Elizabeth*/*Elisabeth*, *Enoch*/*Henoch*, *nunquam*/*numquam*, *his*/*iis*);
**(iii) word order with no change of assertion**; **(iv) a one- or two-word difference**, which
per the brief is suspicion of *our file*, not evidence about Migne, and therefore goes in the
declined list rather than into a marker.

**3. Pattern 7 without exception.** Nothing is smoothed. Migne's printed punctuation stands
where he sets it, including the semicolon that cuts a subject from its verb at 0248A and the
question mark that breaks a sentence in half at 0252B. Both are logged in §(d); neither was
repaired.

**4. Negation fidelity (7a), counted by hand chunk by chunk.** Every `non`, `nec`, `neque`,
`nisi`, `nullus`, `nihil`, `nunquam`, `ne` the Latin prints stands in the English, and none was
added. Two sites needed a ruling and got one in the running text, not in an apparatus:
0252C `In hac vita omnis homo Christum videre non potuit` is rendered "**not every man** could
see Christ" (the contrast is with the day of judgment, when the elect **and** the reprobate see
him) rather than the flatter "no man could"; and 0254A's `nihil pro diaboli arbitrio, nec
declarandae virtutis consideratione faciendum` carries both particles.

**5. Mechanism 5 was censused over ALL SIX chunks, not the first two.** §(d) names the sites and
says what fixed each binding — case and gender, never the easier sense. The brief's warning that
John's stint apparatus named three sites all inside its first two chunks is the reason the
census below runs to 0005.

**6. The six inherited axes carried in from the first line, not reconciled afterwards.**
Measured across my whole range: `usque ad` → **as far as**, 62 italic spans, **62/62**, no other
form used; `mysterium` → **mystery** 7/7; `diabolus`/`satanas` → **devil** 13/13; `daemon-` →
**demon** 4/4; `natio` (`nationum`, 0255B) → **nation**; `gentes` → **Gentiles** at all five
sites, every one inside the Judaei/gentes typology (the widow of Sarepta, Naaman, the desert of
the Gentiles, the calling of the Gentiles, the appearing after the resurrection). **No exception
was forced and none is claimed.** `multitudo` and `sacramentum` do not occur in this range.
⚠ `turba` **does not occur as a noun here either** — the four `turb-` hits are the verb
*turbare* (`turbatus`, `turbati`, `turbari`, `turbantur`), the exact false signal the brief
names; I checked the instrument before reporting anything. One further word is *not* on this
axis: `turmis` (0256A, `a credentium turmis`) is *turma*, a fourth noun, rendered **companies**
so that crowd / multitude / throng stay free.

**7. Gloss voice not archaised.** *dicit*/*ait* → **says**; there is no `saith` in my range
outside an italic span. The one `saith` I did write is inside the italic scripture at 0250A
(*Non est pax impiis, dicit Dominus*), which is the italic-membership test working as intended.
Second person follows Pattern 17: `thou` where the Latin addresses a singular (Zacharias at
0245A; the Father at 0253A), `you` where it is plural (`quaerebatis`, 0251D).

**8. Ratio.** `verify-english.mjs` passes my six chunks with two warnings, 0002 at 1.64 and
0005 at 1.62 against the 1.5× guide. Both are real expansions of the abridgment's own
shorthand — truncated lemmata that need an English verb, and `etc., usque ad` splices — not
padding. No clause was added.

---

## (b) SPAN COUNT AGAINST THE BRIEF — I RAN IT, AND IT AGREES

`data/briefs/9000-lemmata-0000.txt` says **247 spans** for chunks 0000–0005.

I counted the `*…*` spans in the body of my own six Latin files (frontmatter excluded, since the
`incipit:` field can carry italics and inflate a naive file-level count):

| chunk | spans | of which italic *usque ad* | other |
|---|---|---|---|
| 0000 | 5 | 2 | 3 |
| 0001 | 76 | 18 | 58 |
| 0002 | 15 | 2 | 13 |
| 0003 | 55 | 13 | 42 |
| 0004 | 40 | 14 | 26 |
| 0005 | 56 | 13 | 43 |
| **total** | **247** | **62** | **185** |

**247 = 247. The brief's total is right for this range.** The English carries 62 `*as far as*`
spans (61 plain plus `*as far [0245B] as*`, which has the column anchor inside the span exactly
where Migne breaks the column) and 185 others, and every chunk's span count matches its Latin
twin once `[var:]` content is stripped.

⚠ Two prose `usque ad` were deliberately **not** treated as the formula, per John's merge rule
that only the italic splice is on the axis: `a sabbato usque ad sabbatum` (0245A) and
`A baptizato Dei Filio usque ad Deum Patrem` (0253B). Both read naturally as "from … to" / "as
far as" in ordinary prose and neither is italic.

**Marker parity, checked mechanically before each file was closed:** column anchors 1:1 and in
order in all six chunks (1 / 15 / 3 / 12 / 6 / 10); `[n: …]` sequences byte-identical to the
Latin in all six (3 / 35 / 5 / 25 / 16 / 22), matching every frontmatter `noteCount`.

⛑ **§6.2 of the brief is mine and I did not report it.** Chunk 0000 opens the work at 0243D
below the full-width rule on plate p. 127, with Mark's gloss ending across the top of both
columns. The band letters do not run down one column here, that is the plate, and no anchor was
touched.

---

## (c) THE LEMMA DIVERGENCE LIST — every span walked, three markers fired, eleven declined

I walked all 247 spans against the Clementine, ✓ and ⚠ alike, per 7a″. **✓ was treated as
nothing at all**: for every ✓ span I asked whether it matches *the verse being glossed*, not
whether the words occur somewhere. That is what caught 0250D, which the pre-scan marks ✓.

### The three `[var:]` fired

| col | Migne prints | the Clementine | why it is material |
|---|---|---|---|
| **0249D** | *Quia cum esset dives, pauper pro nobis factus est, ut inopia sua nos ditaret* [n: (II Cor. VIII)] | **2 Cor 8:9** *propter vos egenus factus est, cum esset dives, ut illius inopia vos divites essetis* | a quoted clause, cited by Migne to the verse, differing in the word for poverty (*pauper* ‖ *egenus*) **and in person throughout** — Migne's proof-text says he was made poor *for us* and enriches *us*, where Paul says *for you* … *you* might be rich. The person is the difference between a statement about the reader and a statement about the speaker. |
| **0250D** | *Ecce puer meus,* | **Isai 42:1** *Ecce servus meus* | ⭐ **the pre-scan marks this ✓ and it is the sharpest divergence in the range.** The words occur verbatim elsewhere in the Clementine, so the mechanical test cleared it; at its own verse Isaiah reads *servus*. And **the entire gloss turns on the divergent word**: *Jesus frequenter **puer** dicitur, non tam aetate quam pro servitio, unde Propheta: Ecce **puer** meus.* Conform the lemma to "servant" and the sentence stops arguing anything. This is 7a″'s worked shape exactly, and it is the reason ✓ is not clearance. |
| **0253B** | *Sacerdos est in aeternum secundum ordinem Melchisedech.* | **Psal 109:4** *Tu es sacerdos in aeternum secundum ordinem Melchisedech* | a quoted clause reporting in the **third person** what the psalm speaks in the **second**, i.e. changing who is addressed. Migne introduces it as what is *deferred to* the subject (*cui judicium a Deo rege defertur*), so the printed third person construes and is rendered; the psalm's address is noted beside it. |

All three markers name the witness first, are English, and quote only Vulgate wording that does
**not** stand in the Latin twin (checked, so the `[ed:]`/`[var:]` mirror test holds).

### The twelve divergences I DECLINED, each with its reason

| col | Migne | the Clementine | class | why declined |
|---|---|---|---|---|
| 0244D | *Justi ante Deum.* | Lc 1:6 *Erant autem **justi ambo** ante Deum* | (i) truncation | a second lemma picked out of a verse whose first words Migne has already given as *Erant autem ambo*. The two spans between them quote the verse entire; nothing is missing, only re-cut. |
| 0245A | *…uxor tua **Elizabeth** pariet…* | Lc 1:13 *Elisabeth* | (ii) orthography | *z* for *s* in the name, six times through the range and never otherwise. No sense in it. |
| 0245A | *Gaudium et exsultatio.* | Lc 1:14 *erit gaudium **tibi**, et exsultatio* | (i) truncation | the gloss lifts the two nouns as a heading for Ambrose's comment on them; the dative it drops is the word the previous span already carried. |
| 0246A | *Et salutavit Elizabeth.* | Lc 1:40 *et salutavit **Elisabeth*** | (ii) orthography | same name, same substitution. |
| 0250C | *Mulier quae suscepto,* etc. | Lv 12:2 *Mulier, **si** suscepto semine* | (iv) one word | *quae* for *si* in a lemma the recension cuts before its verb, so nothing is asserted either way in the printed fragment. **One word: suspicion of our file, not evidence about Migne.** Named in §(e) for the plate. |
| 0250D | *Christi bonus odor sumus Deo, in **his** qui salvi fiunt* | 2 Cor 2:15 *…in **iis** qui salvi fiunt* | (i)+(ii) | the sequence fails the phrase search only because Migne drops the opening *quia* and prints *his* for *iis*. Neither touches the sense, and the gloss's own next sentence (*alii salvantur, alii pereunt*) restates it. |
| 0252B | *Qui habet duas.* | Lc 3:11 *Qui habet duas **tunicas*** | (i) truncation | cut at the numeral; the gloss's very next words supply *tunica*. |
| 0253B | *Qui fuit **Enoch**.* | Lc 3:37 *qui fuit **Henoch*** | (ii) orthography | unaspirated form of the name; *Mathusale* for *Methusale* three lines above is the same class. |
| 0253C | *Mihi traditur.* | Lc 4:6 *quia mihi **tradita sunt*** | (iv) one/two words | singular passive against the Vulgate's plural. It construes on the page — the gloss answers it with *Non a diabolo est **potestas***, a singular subject — so I rendered it and did not mark it. Two words is not a clause. §(e). |
| 0253C | *Si **procidens** adoraveris me,* | Mt 4:9 *si **cadens** adoraveris me* | (iii)/(iv) | a synonym for falling down, in a clause the gloss quotes from Matthew's parallel while glossing Luke. Pattern 14 requires a change of sense; there is none. |
| 0255C | *Cum sol autem occidisset.* | Lc 4:40 *Cum **autem sol** occidisset* | (iii) word order | two words transposed inside the lemma. Nothing is asserted differently. |
| 0256A | *si cognovissent Dominum gloriae, nunquam crucifixissent* | 1 Cor 2:8 *si enim cognovissent, numquam Dominum gloriae crucifixissent* | (iii)+(ii) | *Dominum gloriae* moved ahead of the negative, *enim* dropped, *nunquam* for *numquam*. The assertion is identical in both. ⚠ **But its note is not** — see §(e), the citation reads `(Matth. I)`. |

**Inventory arithmetic, checked against the brief file itself: 247 lines = 201 ✓ + 16 ⚠ + 30
single-word.** Of the 16 ⚠, three became the markers in the table above, twelve are declined in
the table here, and one (`*Qui habet duas.*`, 0252B) is a plain truncation whose separate
typographic anomaly is #14 in §(e). Of the 201 ✓, one — **0250D `Ecce puer meus`** — was a real
divergence the mechanical test could not see.

### The rest of the inventory, accounted for

- **62 italic *usque ad*** — the abridgment's splice formula, not scripture. All rendered
  *as far as*. Not divergences.
- **30 single-word spans** (`Omnia`, `Theophile`, `Zacharias`, `Elizabeth`, `Sorte`, `Convertat`,
  `Unde`, `Occultabat`, `Gabriel`, `Jesum`, `Exsultavit` ×2, `Benedictus`, `Visitavit`, `Prima`,
  `Nazareth`, `Puerum`, `Gladius`, `Publicani`, `Herodes`, `Nathan`, `Mathusale`, `Seth`,
  `Esuriit`, `Mitte`, `Angelis`, `Docebat`, `Spiritus`, `Medice`, `Viduam`) — each checked **in place** against its own verse. All are the Vulgate's word at that
  verse except the two orthographies already listed (`Elizabeth`, `Mathusale`). *(The
  `*Qui habet duas. (BEDA)*` span at 0252B is carried in the inventory as a ⚠, not as a single
  word; its anomaly is #14 in §(e).)*
- **The remaining ✓ spans** were each read word by word against their own verse. Beyond the table
  above I found no wording that diverges. Where the recension stops a lemma mid-phrase — and it
  does so constantly, which is what most of the ⚠ marks are — the English stops there too
  (*And there was not unto them.*, *And mercy.*, *As was made.*, *And being ended.*), rather than
  completing the verse from memory. **That is the single most frequent 7a″ temptation in this
  range, and refusing it is the reason so many of my lemma renderings read as fragments.**

---

## (d) THIS RANGE'S CRUCES, BY COLUMN

### Printed punctuation preserved against the grain

- **0248A** (`0001`) — `Qui aeterna toto studio desiderant; saturabuntur, cum Christus apparuerit
  in gloria.` Migne sets a **semicolon between the subject clause and its verb**. Pattern 8
  forbids deleting a printed mark, so the English reads "They who desire eternal things with all
  zeal; shall be filled…". It is not a construction I would write and it is what the page prints.
- **0252B** (`0004`) — `Qui fidem et bona opera praedicat, quid aliud quam venienti Domino? ad
  corda audientium viam parat…` A **question mark inside the sentence**, after the elliptical
  *quid aliud quam venienti Domino*. Preserved in place; the following clause is carried as a new
  English sentence, which is what Migne's mark makes it. Not repaired, not merged.
- **0246C** (`0001`) — the sentence *…ita sexto millenario missus est Christus,* **ends on a
  comma**. Left ending on a comma (Pattern 8: never supply a terminal stop).

### The mechanism-5 census — all six chunks

The brief's dominant defect class. Every site where a pronoun, relative or participle could bind
to either of two nouns; each decided on **case and gender**, never on which reading was easier.

| col | chunk | the two candidates | what fixes it |
|---|---|---|---|
| 0243D | 0000 | *quae … credit idonea* — the readers, or the things? | *quae* neuter plural against `legentium` genitive: **the things**. |
| 0245A | 0001 | *et ipsos donum Dei gratius afficeret, et caeteros stupor miraculi pararet* | two clauses, two nominatives: **the gift** affects the parents, **the astonishment** prepares the rest. Rendered as two, not collapsed. |
| 0246A | 0001 | *intra quem currit angelus* — within the angel, or within God? | *quem* masculine singular agrees with `summus spiritus qui Deus est`: **within God**. The easier reading (the angel's own compass) reverses Gregory's point, which is that the angel is the circumscribed one. |
| 0247B | 0001 | *se ancillam illius esse fatetur, cujus mater eligitur* | *cujus* picks up *illius*, **the Lord**, not her own condition. |
| 0248C | 0002 | *sicut **illa** … sic **ista*** | both feminine; *illa* is the remoter **circumcision**, *ista* the nearer **resurrection**, and the predicates confirm it (absolving the guilt of death ‖ exhibiting the birth of immortal life). |
| 0249C | 0003 | *nisi augmentum … acceperit* — who receives? | the subject is *instantia*, **the teacher's insistence**, not the hearer. |
| 0250A | 0003 | *ab humana natura quam in suo rege considerat* | *quam* = *natura*; the angel fears to be adored by the nature he beholds **in his own king**. |
| **0251B** | **0003** | *Id est beati, descendit, **qui** inter duodecim patriarchas ordine nascendi octavus est* | ⭐ **the trap of the range.** The sentence is about **Anna**, and the easy binding makes her the eighth. *qui* is **masculine**: it is **Aser**, whose tribe the lemma names, who is eighth among the patriarchs — which is why the resurrection is the mystery invoked. Decided on gender alone. |
| 0251D | 0003 | *quid potius debeat ei cui est aeternus Filius* | *ei / cui* both the Father; rendered "him whose eternal Son he is". |
| 0252B | 0004 | *ut haec vis gratiae illustret, ut … faciat, dum … format* | three third-singular verbs after one feminine nominative. I bound **all three** to *vis gratiae* rather than switching subject mid-sentence. ⚠ *format* could as easily be the preacher; the Latin does not decide it, and I have not pretended it does. |
| 0253C | 0005 | *nam nisi **ille** certasset, **iste** mihi non vicisset* | *ille* the **devil**, *iste* **Christ** — Ambrose's own antithesis; the dative *mihi* stays ("would not have conquered **for me**"), because the whole point is that the victory is ours. |
| **0254A** | **0005** | *Vere enim erat filius fabri, **qui** per ipsum in principio omnia fecit* | ⭐ the easy reading makes **the Son** the maker, which is what the surrounding clauses would suggest. But *per ipsum* is already the Son: *qui* is **the carpenter**, the Father, who made all things **through him**. Rendered "the son of a carpenter: of one who through him made all things in the beginning." Getting this backwards would have made the sentence say the Son created through himself, and it would have read perfectly well. |
| 0254B | 0005 | *qui nulli possit nocere, nisi prius **ille** se deorsum miserit* | *ille* is **the man**, not the devil: the devil can hurt no one unless the man first throws himself down. |
| 0256A | 0005 | *per **quam** plures sanantur daemoniaci, **quam** ante vivens…* | first *quam* relative (= *passio*), second *quam* comparative ("than"). Two different words, one spelling. |

### Constructions rendered as printed, where the printed Latin resists

- **0243D** (`0000`) — *et propriis quibusdam libri singuli mysteriorum gestorumque miracula
  eminerent*: *eminere* is intransitive and *miracula* is accusative. Rendered so that the
  marvels are what stand out and *propriis quibusdam* is the means, which is the only reading the
  words allow. No emendation, no marker. §(e).
- **0252A** (`0004`) — *praecurretur suo baptismate quo peccata solvi non possunt*: a future
  **passive** of *praecurro*, an intransitive verb, inside an `etc., usque ad` splice.
  Rendered impersonally, "there will be a going before by his own baptism". §(e).
- **0252B** (`0004`) — *Tunica plus **sui** necessaria quam pallium*: a genitive where a dative or
  ablative of respect is wanted. There is no English exponent for the case, so the English reads
  "more necessary of itself"; nothing was emended. §(e).
- **0254A** (`0005`) — *Docet magis doctrina quam miraculis pugnare, **humilitati** quam potentia*:
  a dative in a row of ablatives. Pattern 9: a case mismatch has no English exponent, so the
  English reads "with humility rather than with power" and the crux carries the observation.
  §(e).
- **0254D** (`0005`) — *qua doctrina per miracula praecedentia magnificat*: *magnificat* with no
  expressed object. Rendered without one. §(e).
- **0247D** (`0001`) — VERS. 47 carries **two identical notes back to back inside one lemma
  span**, `*Et exsultavit. [n: (ID.)] [n: (ID.)]*`. Notes are verbatim, so both are reproduced,
  in place, untranslated. Whether the doubling is Migne's or the transcription's is not
  something our file can settle. §(e).

### Migne's citations — reproduced, never corrected

Per the brief and CLAUDE.md, a printed reference is `refDisplay` and is not ours to fix. Two in
this range point elsewhere than their clause, and both stand as printed:

- **0256A** (`0005`) — *si cognovissent Dominum gloriae, nunquam crucifixissent* is **1 Cor 2:8**,
  and the note reads `[n: (Matth. I)]`.
- **0250D** (`0003`) — `[n: (Isa. XLII)]` closes the sentence after *Filius hominis non venit
  ministrari, sed ministrare*, which is **Mt 20:28**; Isaiah 42 belongs to *Ecce puer meus*, the
  span before it. The note is positioned after the second quotation, and I did not move it.

### Two lemma renderings that are deliberately unfamiliar

- **0247C** (`0001`) — *Mater Domini.* Migne cuts before *mei*; the English reads "**The mother
  of the Lord**", not the Douay's "the mother of my Lord". Conforming it would have supplied a
  word the plate does not print.
- **0248A** (`0001`) — *Et misericordia.* cut before *ejus*: "**And mercy**", not "And his
  mercy".

---

## (e) ⭐ THE DECLINED-ODDITY LIST — every suspect word I did NOT mark, in one place

**No marker stands on any of these. I make no claim about whose any of them is.** On John this
list produced every correction the work received; it is what the plate reader works from. Ordered
by column.

| # | col | chunk | the reading | shape, and what I can and cannot say |
|---|---|---|---|---|
| 1 | 0243D | 0000 | *eminerent* governing accusative *miracula* | a real word in a construction that does not govern an accusative. Could be Migne's, could be a dropped word in transcription. **No idea whose.** |
| 2 | 0245A | 0001 | *Elizabeth* (×6 through the range) | *z* for the Clementine's *s*. Consistent everywhere, so almost certainly an orthography rather than a slip — but consistency is not proof, and the plate settles it in one look. |
| 3 | 0245C | 0001 | *Quinetiam* set solid | one word for *quin etiam*. Attested medieval practice; noted only so a fusion-hunting pass does not double-count it. |
| 4 | 0246A | 0001 | *circonscriptus* / *incirconscriptus* | *m* → *n* before *s*, **twice in a single sentence**, in both the simple and the compounded form. The internal consistency argues it is the compositor's or the author's habit rather than damage — ⛔ and internal corroboration proves an error exists, never whose it is, so this stays here rather than in a marker. |
| 5 | 0247A | 0001 | *commistione* | for *commixtione*. Attested; listed for completeness. |
| 6 | 0247D | 0001 | `[n: (ID.)] [n: (ID.)]` — two identical notes adjacent inside one lemma | a doubling in the **apparatus**, not the text. Migne setting the siglum twice, or the transcription emitting it twice, are indistinguishable from our file. Both reproduced. |
| 7 | 0248B | 0002 | *Tandiu* (×2) | for *tamdiu*; same *m*→*n* assimilation as #4, in a different word and a different chunk. **⚑ Worth reading beside #4** — if the plate has *tamdiu* and *circumscriptus*, the two are one mechanism in our file; if it has both as printed here, they are Migne's habit. Either answer is informative and neither can be had from our text. |
| 8 | 0248D | 0002 | *lenticula* of Saul's anointing | a real word (a small vessel, I Reg. 10:1). Flagged only because it reads oddly beside *cornu olei*; **I believe it is correct and am not suspicious of it.** |
| 9 | 0250B | 0003 | *rethores* | for *rhetores*. A very common medieval spelling; low interest, listed so the class is complete. |
| 10 | 0250C | 0003 | *Mulier **quae** suscepto* | Lv 12:2 prints *si*. One word, in a truncated lemma. Could be Migne's copy-text, could be *si* misread. |
| 11 | 0250D | 0003 | `[n: (Isa. XLII)]` after a Matthaean clause | a citation apparently keyed to the previous span. Not corrected (false-positive rule 3). |
| 12 | 0252A | 0004 | *praecurretur* | **future passive of an intransitive verb.** The likeliest neighbours are *praecurret* and *praecurreret*, one letter away in either direction — which is exactly why it must not be guessed. ⚑ It sits at the tail of an `usque ad` splice, i.e. at a point where the recension has cut a sentence, so the governing subject is simply not on the page. |
| 13 | 0252B | 0004 | *Tunica plus **sui** necessaria quam pallium* | genitive where a dative/ablative of respect is expected. |
| 14 | 0252B | 0004 | `*Qui habet duas. (BEDA)*.` | ⭐ **the shape most worth a leaf-read in this range.** Every other attribution siglum in 4,758 words arrives as `[n: (BEDA.)]`; this one is **bare parentheses inside the italic span**, without the abbreviating period, and is followed by a **second full stop outside the span**. Our file therefore does not treat it as a note at all — it is running text, and `noteCount` counts it as nothing. Whether Migne set it differently on the plate, or the transcription failed to lift it into the note layer, is precisely the question our file cannot answer. Reproduced verbatim, untranslated. |
| 15 | 0253B | 0004 | *Enoch* · *Mathusale* | for the Clementine's *Henoch* · *Methusale*. Orthography of names. |
| 16 | 0253C | 0005 | *Mihi traditur* | singular where Lc 4:6 has *tradita sunt*. Two words; it construes against the gloss's own *potestas*. |
| 17 | 0253C | 0005 | *procidens* for Mt 4:9's *cadens* | a synonym, in a clause quoted from the parallel. Almost certainly a real variant rather than damage, which is why no marker fired. |
| 18 | 0253C/0254A | 0005 | *Hierusalem* · *Hiericho* | Migne's H-forms. Not suspicious; listed for completeness of the orthographic class. |
| 19 | 0254A | 0005 | *humilitati quam potentia* | a dative among ablatives, one letter from *humilitate*. **A hyphen-rejoin or a broken sort would both produce this, and so would the author.** |
| 20 | 0254D | 0005 | *magnificat* with no object | the clause has been cut by the recension; nothing is recoverable from our side. |
| 21 | **0255C** | 0005 | ***Tibi dixi*** | ⭐⭐ **the one I would spend a leaf-read on first.** The gloss contrasts what others said (*In nomine Jesu*) with what Christ himself said, and the formula in the Gospels is **`Tibi dico`** (Lc 7:14, Mc 5:41; cf. *ego tibi praecipio*, Mc 9:24). *dixi* is a perfectly good perfect, so **Pattern 12 has nothing to wrap and Pattern 18 would be a guess**; but it is one letter from the phrase the sentence needs, inside an italic span the gloss is quoting as a formula. Logged unmarked, exactly per the brief. |
| 22 | 0255C | 0005 | *Majora facietis?* | second person plural future against Jo 14:12's *majora horum faciet*. Reads as the gloss reporting Christ's words to the Apostles rather than citing them (it carries no `[n:]`), so I declined a `[var:]`; but a reader may want to know the verse does not say it that way. |
| 23 | 0256A | 0005 | `[n: (Matth. I)]` on a clause from **1 Cor 2:8** | a mis-keyed citation. Not corrected. ⚑ If the plate reads `I Cor. II`, the divergence is our file's and this is a hyphen-class artifact of a different kind; if the plate reads `Matth. I`, it is Migne's own slip and belongs in the record as such. **Our file cannot tell, and I have not guessed.** |

### What I looked for and did NOT find, said plainly

- **No `<LACUNA>`, no bracketed `Forte`, no `( sic )`, no asterisk-keyed note, no foot-of-page
  apparatus** anywhere in my six chunks. Consistent with §6.7 of the brief; recorded as a
  negative so a later reader knows it was checked and not merely unmentioned.
- **No dittography** — nothing in this range doubles a run, so no `[d:]` was owed.
- **No split or fused word-division defect** of the Pattern 10 shape. The hyphen-rejoin class the
  brief warns of (John's *scie-/bat*, *im-/pleretur*) **did not appear here in its visible form**;
  ⚠ but #12, #19 and #21 above are each a single-letter or single-syllable difference of exactly
  the kind that class manufactures, and none of them can be told from an authorial form in our
  text. That is the whole reason they are in this list.
- **One Greek word exists in this work and it is in chunk 0024, not mine.**
