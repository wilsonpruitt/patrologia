# 9002 — cruces, stint 0038–0041 (cols 0167A–0178D)

*Glossa ordinaria*, **Evangelium secundum Matthaeum**, PL 114. Chunks 0038–0041: `CAPUT XXVI.`
through `CAPUT XXVIII.` — the passion, the crucifixion and the resurrection, Mt 26:1 to Mt 28:20.
4,719 Latin words, 12 columns, **both plates read on every page, corner numbers first.**
**This is the end of the work, and the end of the last gospel in the Glossa.**

Companion files from this stint: `data/briefs/9002-PLATE-READS-0038.json` (every page opened, both
witnesses, findings and negatives, including the two page-foot checks) and
`data/briefs/9002-PENDING-TEI-PATCHES-0038.md` (three sites where our Latin has departed from
Migne; all three are Corpus Corporum's).

**Apparatus fired: 9 `[var:]` · 1 `[cj:]` · 0 `[sic:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` ·
0 `[cn:]`.** Guillemets: zero in either language, either direction — Matthew is an italic-lemma
book. `verify-english.mjs` is clean on all four chunks: 48 column anchors, 25 `[n:]` notes, 106
`VERS.` addresses, paragraph counts and question marks all 1:1 with the Latin twins; and the
band-by-band punctuation test (colons, semicolons, question marks, exclamation marks, guillemets,
partitioned by the 48 verified anchors) returns **zero mismatched bands** in all four.

---

## (a) THE POLICY I APPLIED — stated before the findings, so it can be argued with

**1. No claim about Migne's type stands on one witness, in either direction.** Every candidate
raised from the archive copy was taken to Gallica before it was written down. **Nineteen candidates
raised on the archive copy, nineteen refuted at Gallica, none confirmed.** That is a sixth
independent reproduction of the ratio this work has now measured five times (12 of 13, 20 of 21,
15 of 16, 8 of 9, 17 of 17). The archive copy of PL 114 lost **19 times out of 19** in these six
pages. Every one of the nineteen is itemized in §(e) with what Gallica prints instead; the
non-words among them (`uque`, `omino`, `potesta`, `contexereunt`, `homnes`, `constristatus`,
`Munierum`, `domun`, `compendi`) are exactly the class `GLOSSA-NT-AGENT-BRIEF.md`'s CORRECTION TO
ADDENDUM A says is a reason to fetch the second witness and never a substitute for it. It was
right nine times out of nine here.

**2. Where the plate was read and our twin diverges, the English renders the plate**
(`translation-style.md` §"What the English translates"). One site in this range changes a word:
@0175A our Latin prints `Pro quam`, both plates print **`Pro qua`**; the English renders the plate.
Two more are punctuation and are filed as patches but leave the English unchanged (@0171B a comma
our twin supplies after *perdiderunt*; @0178A a full stop our twin drops inside `[n: (Joan XX)]`).

**3. Zero `[sic:]`, and that is a measurement rather than timidity.** A `[sic:]` accuses Migne's
type and must quote a word still standing in our Latin. Nothing in this range survived two
witnesses as a defect of Migne's; the only defects found are the digitization's, and at those sites
the marker cannot even be written until the patch lands. Same result as the 0000, 0006, 0012 and
0027 stints reported for their ranges.

**4. When a `[var:]` fires.** I applied a rule I can state in one line, and I applied it both ways:
**a substitution or an addition of words takes the marker; an elision or a transposition does not.**
An abridged recension shortens verses constantly and a shortened verse asserts nothing new;
a transposition (*animam meam ponam pro te* for *animam meam pro te ponam*) changes no claim, and
English cannot show it anyway. A substituted word does change what stands on the page, and every
substitution in this range is marked. For a **single-word** divergence I applied launch brief §2's
bar exactly — it stands only where the gloss argues from the word, **or** where the form is one that
letter-level corruption cannot manufacture — and both limbs are named at each firing in §(c).

**5. `[cj:]` once, on Migne's own prose** — @0170B `non occidant`, an intruded negation, confirmed
on **both** witnesses. Argued at length in §(d).

**6. The ⚑ flag in my range is an ARTIFACT and I checked it at the plate anyway.** @0169D
`VERS. 33.-- *Etsi omnes.*` — Mt 26:33 reads *Et si omnes scandalizati fuerint in te*. The
difference is **a word division and nothing else**: the phrase search fails on the space. Both
plates print `Etsi` closed up (Gallica f85 col. 0169D, archive p.90 col. A — and note that the
archive copy prints `homnes` here, an ink defect Gallica refutes, which would have manufactured a
second and entirely false "divergence" on the same three words). **No `[var:]`, and no `[sic:]`
either.** Cause excluded: word division, the second of the five causes launch brief §7 names.

**7. The span the tool bug hid.** @0172D `VERS. 4. *Peccavi tradens,*` is addressed without the
`--` dash, so `lemma-inventory.mjs` filed it as an ordinary second lemma and the ⚑ ownership test
skipped it. Mt 27:4 reads *Peccavi**,** tradens sanguinem justum*: **a comma-only artifact**, not a
divergence. ⚑ And the plate has something to add that the brief could not know: **the archive copy
DOES print the dash (`VERS. 4. — Peccavi tradens`) and Gallica does not.** Our twin follows Gallica.
A `VERS.` address may not be altered on one witness, the two witnesses disagree only about a dash
and not about a digit, and nothing machine-readable consumes it — so the twin is left exactly as it
stands and the English carries `VERS. 4.` verbatim, dashless.

**8. Vocabulary axes, applied from the first line.** `turba` → **crowd** (0176C *comparatione
turbae propioris*, *a densitate turbae*) — **no `multitudo` anywhere in the range**, so the pair
never had to be separated here. `daemonium`: none; **`daemones` → demons** (0175B *hoc daemones
immiserunt*); **`diabolus` → devil** (0168C, 0173C, 0173D, 0174B, 0175B); no `satanas`. The
*gentes* family: **`gentes`/`gentium`/`gentibus` → Gentiles** at 0170B (*ut gentes intrent*, the
Rom 11 typology), 0174C (*opera gentium cruenta*), 0176A (*ad gentes transeant*, *pateret
gentibus*) — every one inside the *Judaei*/*gentes* opposition the passion narrative is built on;
**`gentiles` → Gentiles** (0170B *credant gentiles*); **`gentilis` → Gentile** (0173D *uxor viri
gentilis*, 0174A *Gentilem populum*, 0176A *corda gentilium*); no `gentilitas`, no `ethnicus`;
**`natio` → nation** at its one true occurrence (0171A *omnes nationes insurgant*), and singular
`gens` of the Jewish people → **nation** (0174A *amissa gente et loco et libertate*). ⚑ **I checked
the instrument before reporting any of this**, as the brief requires: the raw `natio` grep returns
**eight** hits across my four chunks and **seven are false** — *damnatione* (0173C), *indignati*
(0167C), *narrationis* (0167A), *narrationem*/*narrandam* (0172C), *resurrectionem* is not one but
*imprecatio* and *damnatione* are, and only 0171A's `nationes` is a `natio` at all. Likewise
`\bdaemoni` returns **zero** in this range while `daemones` stands at 0175B, exactly the miss the
brief predicts; and `\bturba` catches *turbantur* at 0174C (the elements being troubled), which is
*turbare* and not a crowd.

**9. `usque ad` — the `etc.` splice test, applied per occurrence.** Seven occurrences of `usque`
in the range and **only two are the abridgment formula.** Both are in chunk 0041 and both follow an
`etc.`: @0177B *Quod diversa tempora istarum mulierum, **etc.,** usque ad adire non potuerunt* and
@0178D *Prima sabbati diluculo, **etc.,** usque ad dicente eis angelo* — rendered **"as far as"**,
and both are italicized in the Latin, which here agrees with the test. The other five are ordinary
Latin and are rendered by sense, and I name them because a silent departure and a ruled one cannot
be told apart afterwards: @0167A *ab initio Evangelii usque ad passionem* → "**until** the passion"
(temporal); @0167C *usque ad consummationem saeculi* → "**even to** the consummation of the world"
— this is **Mt 28:20 itself**, the verse's own words, and it recurs as the work's closing lemma at
@0178C/D; @0170A the lemma *Usque ad mortem* → "**Even unto death**" — Mt 26:38's own words, and
Hilary's note glosses precisely that phrase, so reading it as the splice formula would have
destroyed the note; @0172C *usque ad mane* and *usque ad negationem Petri narrandam* → "**up to**
the morning", "**back to** the telling of Peter's denial" (Migne describing how the evangelists
weave their narrative, with no `etc.` anywhere near). ⚑ Note the trap in the last pair: they sit
four words apart in one sentence, exactly the shape 8967 col 0953C is recorded for, and neither is
the formula.

**10. Pattern 8, and it was worked band by band, not by total.** The two totals cancelled once in
my first draft — a supplied semicolon in one band against a destroyed colon in another — which is
the failure the brief records for 8989 and Tobit. Sixteen sites were repaired against the Latin's
own marks before filing. Two are worth naming because they read as errors and are Migne's:
@0171C *quod idem est: Et est similis* keeps its colon before a capital; @0175A the paragraph on
*Blasphemabant* **ends in a colon** (*et caput agitant:*), and that colon is on both plates.

**11. Second person, Pattern 17.** Singular addressees take *thou* (@0167D *Ubi vis*, @0168C/0171C
*Tu dixisti*, @0168D *tu es sacerdos*, @0170A *Animam meam ponam pro te*, @0170B *quid me
persequeris* and *sicut tu*, @0172D *tu videris · tu scias · tu istud probaveras · tu inde fac quod
vis*, @0173D *Nihil tibi*, @0175D *Ne mireris … videas*, @0177D *intelligeres … comprobes*,
@0178A *Noli me tangere*); plural ones take *you* (@0167C *vobiscum sum · vos putatis*, @0167D
*Quid vultis*, @0169B *Vobiscum*, @0170B *dedistis*, @0171B *Existis · potestas vestra*, @0171C
*judicatis*, @0175B *non creditis · non crederetis*, @0177C *vestros concives videtis*, @0178D
*vobiscum sum*). Archaic verb forms appear only inside quoted scripture; the commentator's own
`dicit`/`ait` is **says**, never *saith*.

**12. Migne's own printing is not mine to tidy.** Three things are reproduced as printed and
argued in §(d): the citation `(Zac. II)` on a quotation of **Mt 22:21** (@0173B); the citation
`(Marc. XXIV)` on a gospel with sixteen chapters (@0173B); and **Jupiter and Apollo** at @0171D for
Acts 14's Jupiter and Mercury. None is corrected, none is queried in the text.

---

## (b) MY SPAN COUNT AGAINST THE BRIEF'S TOTAL

`data/briefs/9002-lemmata-0038.txt` heads its inventory **189 spans, of which 0 open-ended**.

**My own count of the marked spans in my four Latin chunks: 189, paragraph-bounded** — 0038: 65 ·
0039: 22 · 0040: 63 · 0041: 39. Counted paragraph by paragraph as the brief requires, so an
unmatched delimiter running forward across a paragraph could not swallow a span or shift the
pairing backwards; **no paragraph in the range carries an odd number of asterisks**, and the
guillemet count is **zero in all four chunks**, which is the right answer for an italic-lemma book.
**The totals agree: 189 = 189.**

I also counted the thing the brief warns the instrument gets wrong. **`VERS.` addresses in my own
Latin: 106** — 0038: 31 · 0039: 17 · 0040: 34 · 0041: 24. Of these **105 are the `VERS. n.--`
dash form and exactly one is the bare `VERS. n.` form**: @0172D *Peccavi tradens*, the span the
launch message names. So the tool's blind spot costs exactly one span in this range, it is the one
already adjudicated, and there is no second hidden one.

---

## (c) THE LEMMA DIVERGENCE LIST — every span, declines and reasons included

All 189 spans were walked against `sources/vulgate/clementine-flat.txt`, and the ✓ addresses were
**read** rather than trusted: launch brief §3's warning that a gospel harmony answers for the wrong
evangelist is acute in a passion narrative, where all four evangelists run parallel. Nothing in
this range cleared off the wrong gospel undetected; where Migne himself cites another evangelist
(*Marcus: in catino*, *Marcus: Ego sum*, *noluit bibere*, *non accepit*) the ✓ correctly points at
Mark, and that is the gloss's own comparison rather than a mis-clearance.

### The nine that took a `[var:]`

| col | Migne prints | Vulgate | why it fires |
|---|---|---|---|
| 0168A | *Invenerunt coenaculum grande stratum* | Mc 14:15 *Et ipse vobis demonstrabit coenaculum grande, stratum* | **substitution**, and of the governing verb: "they found" for "he will show you". The three nouns are Mark's exactly; the clause is not. Read on both plates. |
| 0169C | *Omnes vos scandalum pati* | Mt 26:31 *Omnes vos scandalum patiemini* | **substitution**: an infinitive for a finite future, which changes the construction of the whole lemma. Read on both plates (archive p.90 col. A, Gallica f85 col. A). Launch brief §2's second limb: an inflected ending three letters shorter is not what ink does to a word in the middle of a line. |
| 0170B | *Sed non sicut ego volo, sed sicut tu* | Mt 26:39 *verumtamen non sicut ego volo, sed sicut tu* | **substitution**: *Sed* for *verumtamen*. Ambrose is quoted saying the words, so the words are the point. |
| 0170D | *Dedit eis signum* | Mt 26:48 *dedit illis signum* | **substitution**, single word — and it passes §2's bar on the second limb: `illis`→`eis` is a different pronoun of a different length and shape, not a letter-level accident. It is also the same class as @0095B *Det illi* for *det ei*, which the 0006–0011 stint confirmed on both plates in this work. Read on both plates. |
| 0173B | *Et non erant convenientia testimonia eorum* | Mc 14:56 *et convenientia testimonia non erant* | **addition** (*eorum*) as well as transposition. The addition is what fires it; the transposition alone would not. |
| 0174A | *Quid ergo faciam de Jesu, qui dicitur Christus?* | Mt 27:22 *Quid igitur faciam de Jesu, qui dicitur Christus?* | **substitution**: *ergo* for *igitur* — and this one has an internal witness of its own, because **Migne prints the verse correctly with *igitur* as the lemma nine words above** and then re-quotes it with *ergo*. Both readings on both plates. English can only carry it as "therefore"/"then", so the marker does the disclosing. |
| 0174B | *Jesum vero flagellatum* | Mt 27:26 *Jesum autem flagellatum* | **substitution**, single word; same class as @0093A *Dico autem vobis* for *Dico enim vobis*, confirmed in this work. Read on both plates. |
| 0175A | *Morte turpissima condemnemus eum. Erit enim respectus in sermonibus illius. Si enim vere Filius Dei est, suscipiet illum et liberabit illum de manu contrariorum* | Sap 2:20 *…erit enim ei respectus ex sermonibus illius*; Sap 2:18 *Si enim est verus filius Dei, suscipiet illum, et liberabit eum de manibus contrariorum* | five substitutions in one quotation (*in* for *ex*, *vere*+adverb for *verus*+adjective, *illum* for *eum*, singular *manu* for plural *manibus*, and *ei* dropped), plus the two verses quoted in reverse order. `de manu contrariorum` read letter by letter on both plates. |
| 0175B | *Et credemus ei* | Mt 27:42 *et credimus ei* | **substitution** of tense — and **the gloss argues from it**: Migne's next two words are *Fraudulenta promissio*, "a fraudulent promise", and a promise needs the future that Migne prints and the Vulgate does not. This is §2's first limb, and it is the strongest single-word `[var:]` in the range. Read letter by letter on both plates. |

### The ⚠ spans I checked and declined, with the reason for each

- **@0168A `Et fecerunt discipuli sicuti`** — Mt 26:19 has *sicut*. `sicuti` is on **both** plates
  (zoomed on archive p.89 col. B and Gallica f84 col. B). Declined: *sicuti* is the same lexeme with
  its enclitic, an orthographic variant and not a substitution, in the same class as *quemcunque*
  below. Rendered "even as".
- **@0170A `Animam meam ponam pro te`** — Jo 13:37 has *animam meam pro te ponam*. **Transposition
  only**, no word added, removed or changed, and English word order cannot show it. Crux, no marker.
- **@0170B `Esurivi et dedistis mihi manducare. Et quid me persequeris?`** — Mt 25:35 has *esurivi
  **enim**, et dedistis*; Act 9:4 has *quid me persequeris* without *Et*. **Elision** in the first,
  and the *Et* in the second is Migne's own connective joining two proof-texts, not part of the
  quotation. Declined on both counts.
- **@0170D `Quemcunque osculatus`** — Mt 26:48 spells *Quemcumque*. Nineteenth-century orthography,
  Pattern 9. Declined.
- **@0172C `Respexit Dominus Petrum`** — Lc 22:61 has *Et conversus Dominus respexit Petrum*.
  Transposition plus elision, no substitution. Declined.
- **@0173B `Reddite quae sunt Caesaris Caesari`** — Mt 22:21 has *Reddite **ergo** quae sunt
  Caesaris, Caesari*. **Elision** of a connective. Declined. (Migne's citation `(Zac. II)` on it is
  a separate matter and is in §(d).)
- **@0173C `Qui dicebatur Barabbas`** — this ⚠ is **the comparand's, not Migne's**: our Clementine
  copy spells the name **`Barrabas`** at Mt 27:16 and `Barabbam` at 27:17, 21 and 26. The phrase
  search fails on the double r. This is launch brief §7's third cause (a defect in our own
  Clementine copy) and it should be added to `sources/vulgate/README.md`'s list.
- **@0173C `filius patris` · `magister eorum` · `os malleatoris`** — Hebrew etymologies, not
  scripture. ⚠ is correct and means nothing.
- **@0174B `Jesum vero flagellatum` / `Jesum vero`** — one divergence, quoted twice; the marker
  stands at the first and the rendering is held fixed at the second, per 7a″ step 3.
- **@0174D `mirrhatum`** — Mc 15:23 spells *myrrhatum*. Orthography. Declined. (Migne prints
  *myrrhae* with the y four words later, in the same sentence, on both plates — his own
  inconsistency, reproduced.)
- **@0176D `Discipulus erat Jesu. Hic accessit ad Pilatum.`** — two clipped fragments of Mt 27:57
  and 27:58, each verbatim; the search fails only because they cross a verse boundary and the scan
  is per verse. Not a divergence.
- **@0176D `In syndone munda`** — Mt 27:59 spells *sindone*, and so does Migne himself two words
  later (*Sindone munda Jesum involvit*), on both plates. Orthography, and his own. Declined.
- **@0177A `Munierunt sepulcrum`** — Mt 27:66 spells *sepulchrum*. Orthography. Declined. (The
  archive copy prints `Munierum`, a non-word; Gallica prints `Munierunt`. See §(e).)
- **@0177B `Terrae motus`** — Mt 28:2 sets *terraemotus* as one word. **Word division**, the same
  cause as the ⚑ at @0169D. Not a divergence.
- **@0178A `Nuntiate`** — our Clementine copy reads *ite, **nuntiare** fratribus meis* at Mt 28:10.
  A one-letter difference against a single-word lemma, and the comparand is the suspect party here:
  the imperative is what the sentence wants and what Migne prints. Declined explicitly, and flagged
  for `sources/vulgate/README.md` as a possible fifth entry beside `Mt 5:15 accedunt/accendunt`.
- **@0169D `Etsi omnes`** and **@0172D `Peccavi tradens`** — the two pre-checked artifacts; see
  §(a) 6 and 7.

### The spans I checked and found to agree with the Clementine exactly

Recorded because a list of findings alone cannot be told apart from a report by an agent that never
looked. **Mt 26**: *Et factum est cum consummasset* (26:1, clipped before *Jesus sermones hos
omnes*) · *Cum autem* · *tunc abiit unus de duodecim* (26:14) · *Simonis* · *Mulier habens* ·
*Unguenti pretiosi* · *Discipuli indignati* (26:8, clipped) · *Me autem* · *Ecce ego vobiscum sum
omnibus diebus usque ad consummationem saeculi* (28:20, verbatim, and correctly cleared off
**Matthew's own** last verse rather than a parallel) · *Mittens enim* · *Quid vultis* · *Ubi vis* ·
*Ad quemdam* ×3 · *Ite in civitatem* · *Quia unus* · *Coeperunt singuli* · *Qui intingit* · *In
paropside* · *in catino* (Mc 14:20) · *Bonum erat ei* · *Rabbi* · *Tu dixisti* ×2 · *Coenantibus
autem* · *juravit Dominus et non poenitebit eum: tu es sacerdos* (Ps 109:4) · *Accepit* · *Et
benedixit ac fregit* · *Fregit* · *Gratias egit* · *Non bibam* · *Novum in regno Patris* (clipped
before *mei*) · *novum* · *Vobiscum* · *De hoc genimine* · *Et hymno* · *Edent pauperes et
saturabuntur* (Ps 21:27) · *Exierunt in montem* · *Postquam* · *Praecedam vos* · *Et orem* ·
*Coepit contristari* ×3 · *Tristis* · *Usque ad mortem* · *Si possibile est* ×2 · *iste* · *Non
sicut ego volo* · *Caro autem* · *Iterum secundo* · *Oravit tertio* · *Cum gladiis et fustibus* ·
*Et osculatus est* · *Cum his qui oderunt pacem, eram pacificus* (Ps 119:7) · *Gladio peribunt* ·
*An putas quia* · *Existis cum gladiis* · *Ad Caipham* · *A longe* · *Ego sum* (Mc 14:62) · *Filium
hominis* · *Scidit vestimenta* · *Tunc exspuerunt* · *Prophetiza* · *Una ancilla* · *Non novi
hominem* · *Qui stabant* · *Et continuo gallus cantavit* · *Recordatus est* · *Et egressus*.
**Mt 27**: *Mane autem* · *Quid ad nos* · *tu videris* · *Et projectis* · *Et abiens* · *Et oratio
ejus fiat in peccatum* (Ps 108:7) · *Non licet eos* · *Per Jeremiam* · *A filiis Israel* · *Tu es
rex Judaeorum* · *Vos ex patre diabolo estis* (Jo 8:44) · *Quem vultis* · *Qui dicitur Christus* ·
*Pro tribunali* · *Uxor ejus* · *Nihil tibi* · *Barabbam* · *Quid igitur faciam de Jesu* ·
*crucifigatur* · *Quid enim mali fecit* · *Lavit manus* · *Crucifige, crucifige eum* (Lc 23:21) ·
*Sanguis ejus* · *Tunc dimisit illis Barabbam* · *Chlamydem coccineam* · *Cyrenaeum* · *Golgotha* ·
*Calvariae* · *Cum felle mistum* · *Et cum gustasset noluit* · *noluit bibere* · *non accepit*
(Mc 15:23) · *Diviserunt* · *Causam* · *Unus a dextris* · *Blasphemabant* · *Si Filius Dei es* ·
*Idipsum autem et latrones* · *A sexta autem hora* · *Et circa horam nonam* · *Eli, Eli, lamma* ·
*Quidam autem* · *Sine videamus* · *Et ecce velum templi* · *Terra mota est* · *Petrae* · *Et
monumenta* · *Corpora sanctorum* · *In sanctam civitatem* · *Centurio autem* · *Mulieres multae* ·
*Ministrantes ei* · *Jacobi* · *Homo dives* · *In monumento suo novo* · *Erant autem ibi* · *Post
tres*. **Mt 28**: *Vespere* · *Maria Magdalene, et altera Maria* · *Revolvit lapidem* · *Sicut
fulgur* · *Nolite timere* ×2 · *Et cito euntes* · *Cum timore et gaudio* · *Et ecce Jesus* · *Et
tenuerunt* · *Noli me tangere, nondum enim ascendi ad Patrem meum* (Jo 20:17) · *Fratribus meis* ·
*Pecuniam copiosam* · *Furati sunt eum nobis dormientibus* · *Et divulgatum est* · *Abierunt* · *In
montem* · *Quidam autem dubitaverunt* · *Et accedens* · *Data est* · *Euntes* · *Docete* · *Et ecce
ego vobiscum sum* · *Ecce ego vobiscum sum* · *Sic veniet quemadmodum vidistis eum euntem in
coelum* (Act 1:11) · and the two `usque ad` formula spans.

⚑ **Two ✓ marks in the brief point at the wrong verse and I say so rather than leaving it silent.**
*Nolite timere* clears off 1 Rg 12:20 and a dozen other places before Mt 28:5 and 28:10; *Data est*
clears off 1 Cor 1:4 before Mt 28:18. In a gospel the harmony and the common formulae both answer,
and reading the printed addresses is the only thing that separates them. Both are Matthew's own
here.

---

## (d) CRUCES, BY COLUMN

**@0167B — *Diligenter observa, quae de duabus super caput.*** Elliptical: no verb governs *quae*
and no noun governs *duabus*. Rendered "Observe diligently what is said of the two women concerning
the head", supplying *is said* and *women* from the sentence that follows (*Siquidem peccatrix,
super pedes, et ea quae dicitur non fuisse peccatrix, super caput*), which distinguishes exactly two
women. Read clean on both plates: this is Migne's compression, not a defect. **The supplied words
are named here because the brief's dominant defect class is the unexpressed subject supplied
silently.**

**@0167B — πίστις.** Migne's Greek is reproduced verbatim, untransliterated, and it is on both
plates. *fides Latine* is rendered "faith in Latin" in roman: the Latin twin sets no italics there,
and adding a span would break the 1:1 italic rule for the sake of a typographic nicety.

**@0168B — *paropsis* and *catinum*.** Two vessel-words the gloss is defining, so they cannot be
Englished away; they are carried in **roman**, not italics, because the Latin sets no italic span
around them and the register's licence for technical Latin does not outrank the 1:1 italic rule.
The two lemmata they gloss are rendered **"in the dish"** (Mt) and **"in the bowl"** (Mc) so that a
reader can see which is which, which is the distinction the whole paragraph is about.

**@0168C — *An diabolo dicit non nasci ad peccatum: an etiam bonum illi erat…?*** The first limb
has no construable governing sense: *dicit* takes a dative *diabolo* and then an unattached
infinitive phrase. Rendered as closely as the printed words allow — "Or does he say to the devil,
not to be born unto sin:" — and **not smoothed**. The colon and the single question mark at the end
of the second limb are Migne's, both on both plates. No marker: nothing is defective type, and
under Pattern 18 the English asserts nothing false, only something obscure.

**@0168C — *Alii dicunt, Domine, iste, rabbi.*** Migne separates the two speakers with commas only,
which in English reads as a list. Rendered with his commas ("The others say, Lord, this man,
Rabbi") rather than the semicolon my first draft supplied: Pattern 8 forbids supplying a mark, and
the band test caught it.

**@0169C — *ut post eum tum non desperent*.** *tum* is redundant beside *post eum*, and *post eum*
can be read as "afterwards" or as "of him". Rendered "that afterwards they may not then despair",
carrying both. Both readings construe; the negative is on *desperent* in either, so nothing turns
on the choice. Read clean on both plates.

**@0169D–0170A — *propassio*.** Jerome's technical term, and the whole point of the paragraph
(*non passio ejus animo dominatur: verum propassio est*). Rendered **"a propassion"** rather than
translated away, in roman for the reason given at 0168B. ⚑ Our twin sets it closed up and **the
archive copy prints it split, `pro passio`** — refuted at Gallica f85, which sets it closed. Had
that stood on one witness it would have been a Pattern 10 split-type `[sic:]` swallowing a lexeme,
which is 7a⁗-b's most dangerous shape.

**@0170B — *ne Judaei, qui excusationem ignorantiae non habent, non occidant* — the one `[cj:]`.**
Both `non`s are on **both** witnesses; I zoomed the line on archive p.90 col. B and on Gallica f85
col. B before writing anything. The sentence as printed says he prays out of mercy **lest the Jews
should NOT kill him** — the opposite of everything around it. The scope is fixed by the sentence's
own structure and not by what reads well: the next clause is *ut sine interitu Judaeorum credant
gentiles, passionem recuso*, "that the Gentiles may believe **without the destruction of the Jews**,
I refuse the passion", and the clause after that makes the alternative explicit (*Sin autem illi
excaecandi sunt ut gentes intrent*). The mercy asked for is mercy **to the Jews**, so the thing to
be prevented is their killing him. One `non` is intruded.

Rendered faithfully — "should not kill him" — with the conjecture beside it, additive, per
Pattern 18: `should not kill him [cj: *non occidant*; read *occidant*, "should kill him"]`.
⛔ **Why `[cj:]` and not a crux alone.** Pattern 18a rules that incoherence is not a defence where
the word that went wrong is a negation: a lost or intruded negative is the class the whole 7a⁗
apparatus exists for, and where no `[sic:]` can reach it — and none can here, because the type is
sound and the word is real — the conjecture has nowhere else to live but this marker.
⛔ **The rival I rejected, and why.** The rival reading is that *ne … non* is emphatic rather than
doubled, i.e. "lest they should by no means kill him". It loses because it makes the mercy fall on
the wrong party: the passage's mercy is for the Jews, twice over, and on that reading Christ would
be asking that they be *sure* to kill him, which is the reading `Sin autem illi excaecandi sunt` is
set against. The marker takes the intruded-`non` reading.

**@0170C — *a poenitentibus malis tutelam*.** Read on **both** plates; the word is Migne's. The
triad is *a praeteritis peccatis · a poenitentibus malis · a futuris periculis*, and the obvious
conjecture is *praesentibus*. **Declined, and this is a decline with a rule behind it**: Addendum A
is 10 for 10 that a real, well-formed word which reads oddly is Migne's, and the plates have now
said so directly. *poenitentibus* also construes without emendation — "the evils we repent of" —
which is how it is rendered, and a construable printed word does not meet Pattern 18's bar.

**@0170C — *timor utilitatis*.** Same treatment, same reasoning, and read on both plates: *utilitas*
is a real word, the conjecture (*vilitatis*) is attractive and unprovable, and the printed word is
rendered — "the fear of advantage". Crux, no marker.

**@0170C — *ut me occidat*.** The Jonah allegory ends with a purpose clause whose subject is the
withered gourd and whose object is *me*: "so that it may kill me". Odd but printed, on both plates,
and rendered as it stands.

**@0171A — *Gladio illo quo igneus vertitur ante paradisum*.** *igneus* is masculine nominative
with no noun; Gn 3:24's *flammeum gladium atque versatilem* stands behind it. Rendered "that sword
which, being of fire, is turned before paradise" — a gender mismatch has no English exponent
(Pattern 9), so there is nothing to mark and nothing to emend. Logged so a later sweep does not
churn it.

**@0171B — *cum Tito et Vespasiano perdiderunt, homicidas illos*.** Our twin sets a comma after
*perdiderunt*; **neither plate has it** (the word is hyphenated across a line break on both, so the
comma could not have stood there). Filed as a pending patch. The English is unaffected — English
punctuation cannot show it — and no marker is owed.

**@0171C — *Caiphas, id est, investigator vel sagax ad implendam, scilicet doli sui nequitiam*.**
Migne defers the noun *nequitiam* behind a *scilicet*, leaving *ad implendam* momentarily
governing nothing. Reproduced with his comma exactly. Both plates agree, including the comma after
*id est* that the archive copy appears to lack.

**@0171D — Jupiter and Apollo.** Acts 14:11 has Jupiter and **Mercury**. Migne prints *Apollo*, on
both plates. Reproduced; not corrected, not marked. It is neither defective type nor a quotation
from scripture, so neither Pattern 12 nor Pattern 14 reaches it, and Pattern 18 does not apply
because the English asserts exactly what Migne asserts.

**@0172A — *in necem Domini peccasse: et per passionem redemptus*.** *redemptus* is a nominative
participle where the construction wants an accusative to match *peccasse*. No English exponent;
rendered "to have sinned unto the death of the Lord: and redeemed through the passion", with
Migne's colon. Pattern 9, logged not marked. ⚠ **And note what Migne does NOT print here: a
question mark.** *Cur prima ancilla prodit… nisi ut…* is a direct question in Latin and he closes it
with a full stop. Both plates agree. The English closes with a full stop too — Pattern 8 forbids
supplying the mark, and chunk 0039's question-mark count is zero in both columns.

**@0172A — *mulier prima rerurrectionis mysterium accepit* — a press variant, not a defect.**
Our twin prints the non-word `rerurrectionis`. **Gallica f86 prints `rerurrectionis` too** (split
`re-` / `rurrectionis` across a line), and **the archive copy prints `resurrectionis`**. The two
copies simply differ, exactly as at @0073A (`Bethehem`/`Bethlehem`) and 8950 @0171D
(`Mititte`/`Mittite`): two printings, not two photographs. **No `[sic:]`** — it would need two
witnesses and the second refutes it — **and no TEI patch**, because our twin faithfully reproduces
the copy it was made from. The English renders the sense both copies intend, "the mystery of the
resurrection", and this crux is the whole of the record. ⚑ It is worth noticing that this is the
first site in six pages where the **archive** copy is the cleaner of the two.

**@0172C/D — *VERS. 4.* without the dash.** See §(a) 7. Archive prints the dash, Gallica does not,
our twin follows Gallica, and the twin is left alone.

**@0173B — *(Zac. II)* on Mt 22:21 and *(Marc. XXIV)* on a sixteen-chapter gospel.** Both citations
are Migne's, both are on both plates, both pass through verbatim and untranslated as `[n:]`
contents. Passing a siglum through is not endorsing it.

**@0173C — *et ad ultimum conterit, quando in extrema damnatione confringet*.** Both verbs have an
unexpressed object. The subject is *Dominus* from the preceding clause (*per quem Dominus vasa sua
permittit probari*), and the object is the devil, not the vessels: the devil is what the sentence is
about (*Pilatus … diabolum significat*) and the vessels are what he is permitted to try, not what
is crushed at the last. Rendered "at the last he grinds him down… he shall break him in pieces".
Named here because it is supplied and both readings construe.

**@0173D — *Nihil tibi*, expanded.** Mt 27:19 reads *Nihil tibi, et justo illi*. A bare "Nothing to
thee" is not English and stands for nothing a reader can use, so convention 3 applies and the lemma
is rendered as the phrase it opens: "Have thou nothing to do with that just man." The stump was
expanded rather than its twin contracted, per the ⚑ ruling in `GLOSSA-NT-AGENT-BRIEF.md`.

**@0174B — the `[n: (ISID.)]` sentence has no main verb.** *Diabolus qui jam olim ob superbiam a
patria lucis expulsus, et in tenebrarum carcerem fuerat missus.* Rendered as the fragment it is;
both plates agree; no marker.

**@0174D — *in libro Jesu*.** The book of Josue, called by Migne after its Latin title's first
element. Rendered "in the book of Josue", which is what the Latin names; "the book of Jesus" would
be a different claim about the page. Logged as a naming decision, not a silent normalization.

**@0175A — *Pro quam* → *Pro qua*: the one word in this range where the English follows the plate
and not our Latin.** Our twin prints *Pro quam eum Judaei Pilato tradiderunt*; **both plates print
*Pro qua***, read at the foot of Gallica f87 col. B and archive p.92 col. B. The English renders the
plate ("For which the Jews handed him over to Pilate"). Filed as a pending patch; a marker becomes
available only after the patch lands, and none is owed even then, since with *qua* restored there
is no defect at all.

**@0175A — *et caput agitant:*** The paragraph ends in a colon on both plates, with a new `VERS.`
address after it. Preserved, per Pattern 8: never delete a mark he prints.

**@0176B — *quod nulla alia*.** Elliptical: "which no other". Rendered "which no other city has",
supplying the verb English requires and naming it here.

**@0176B — *Arius … praedicat creaturam, quem caeci Judaei nec tot miraculis credunt*.** *quem* is
masculine and cannot refer to *creaturam*; the antecedent is Christ. Rendered "preaches a creature,
whom the blind Jews do not believe even for so many miracles", keeping the relative where Migne
puts it. Both readings of the antecedent were weighed; only Christ construes with the masculine.

**@0177A — *Tertius dies a parte prima, id est, nocte totius cum suo diurno*.** *totius* has no
noun. Rendered "from its first part, that is, from the night, for the whole with its own daytime",
as closely as the printed words allow, and not smoothed. Both plates agree.

**@0178C — *Euntes. Qui jam in lucem venit, quod hactenus quibusdam de causis dubium hominibus
fuerat*.** *Qui* is masculine singular and *quod* neuter: two different antecedents in one sentence,
neither expressed. Rendered "He who has now come into the light, which until now had for certain
causes been doubtful to men", carrying both as Migne sets them. The commission to the nations is
the likelier referent of *quod*; that is a reading and it is here rather than in the text.

**Sections read clean.** Cols 0167A, 0168D–0169A, 0172B, 0173A, 0174C–0174D, 0175C, 0176A–0176C and
0177B–0177D, 0178B–0178C were read line by line against both plates and returned nothing: no divergence from our
twin, no defect, no apparatus at the page feet. **A checked zero is a result and it is recorded as
one.**

---

## (e) THE DECLINED-ODDITY LIST — every suspect word I did NOT mark, in one place

### The nineteen archive-copy readings, all refuted at Gallica

Nineteen raised, **nineteen refuted, zero confirmed.** Each was read on the archive copy at 300 dpi
first and taken to the Gallica leaf before being written down; had I stopped at one witness, this
stint would have shipped nineteen false claims about Migne's type, nine of them non-words.

| col | archive reads | Gallica reads | our twin |
|---|---|---|---|
| 0167B | `domun` | `domum` | `domum` ✓ |
| 0167C | `uque ad` | `usque ad` | `usque ad` ✓ |
| 0167D | `compendi` | `compendio` | `compendio` ✓ |
| 0168A | `littera egrediens` | `litterae egrediens` | `litterae` ✓ |
| 0168B | `specialiter ne,` | `specialiter, ne` | `specialiter, ne` ✓ |
| 0168C | `omino` | `omnino` | `omnino` ✓ |
| 0169B | `Ethymno` (fused) | `Et hymno` | `Et hymno` ✓ |
| 0169D | `Etsi homnes` | `Etsi omnes` | `Etsi omnes` ✓ |
| 0169D | `orant` | `orat` | `orat` ✓ |
| 0169D | `constristatus` | `contristatus` | `contristatus` ✓ |
| 0169D | `pro passio` (split) | `propassio` | `propassio` ✓ |
| 0170B | `justa divinam` | `juxta divinam` | `juxta` ✓ |
| 0170C | `Tribus viribus` | `Tribus vicibus` | `vicibus` ✓ |
| 0170D | `cum non meum palam tradidit` | `cum non eum` | `eum` ✓ |
| 0171B | `potesta vestra` | `potestas vestra` | `potestas` ✓ |
| 0172C | `contexereunt` | `contexerent` | `contexerent` ✓ |
| 0173D | `pro filio Dei` | `pro Filio Dei` | `Filio` ✓ |
| 0174A | `Crucifige, crucifige eum !` | `… eum.` | `eum.` ✓ |
| 0178D | `Et ecce ego vobiscum suum` | `… sum` | `sum` ✓ |

⚑ **Three of these deserve naming separately, because each is a documented trap firing exactly as
documented.** `Etsi homnes` @0169D is the `homnibus` @0099B defect reproduced — the archive copy's
ink adds an initial *h* — and it fell on the one span in my range the launch brief had already
flagged, so a reader who trusted the archive would have found "corroboration" for a divergence that
does not exist. `pro passio` @0169D is a **word division**, the shape 7a⁗-b calls the most dangerous
under Pattern 10, because quarantining it would take a whole lexeme out of the English. And
`Tribus viribus` @0170C is a **well-formed real word** in place of another — "with three powers"
for "three times over" — which no non-word heuristic would ever have caught and which changes what
the sentence says.

### Non-plate declines

- **@0170C `a poenitentibus malis`** — real word, on both plates, construes; *praesentibus* declined
  (see §(d)).
- **@0170C `timor utilitatis`** — real word, on both plates; *vilitatis* declined (see §(d)).
- **@0169C `post eum tum`** — redundant *tum*; both plates; rendered as printed.
- **@0172A `redemptus`**, **@0171A `igneus`** — case and gender mismatches with no English exponent;
  Pattern 9, no marker, logged so a sweep does not churn them.
- **@0171D Apollo for Mercury**, **@0173B `(Zac. II)`**, **@0173B `(Marc. XXIV)`** — Migne's own
  errors of fact and of citation, on both plates, reproduced verbatim.
- **@0177A `nocte totius`**, **@0174B the verbless `(ISID.)` sentence**, **@0168C `An diabolo dicit
  non nasci`**, **@0167B `quae de duabus super caput`** — elliptical or unconstruable as printed;
  rendered as closely as the words allow, no marker, no conjecture in the text.
- **The running head on archive p.93 prints `THOLOGICA`** for THEOLOGICA; Gallica f88 prints it
  correctly. Recorded only because it is a twentieth measurement of that copy's condition — running
  heads are not part of our TEI and nothing is owed.

### Page feet — the checked zero, and the last page of the work

⚑ **Feet of all six pages inspected on both copies at full resolution: no apparatus anywhere in
cols 0167–0178.** No numbered note, no asterisk, no editorial line. Neither the raised asterisk of
@0103C (ink, refuted) nor anything of the kind occurs here.

⚑ **p.94 / f89 is the last page of the work**, and it was re-read on both copies at 300 dpi as the
launch message required, because a work's closing page is where Migne sets a note mid-page and the
earlier spot check was single-witness and at 150 dpi. **It is empty.** Matthew closes at
`Sic veniet quemadmodum vidistis eum euntem in coelum (Act. I).` in col. 0178D, a short centred rule
stands below it, and the remaining two-fifths of the leaf is blank paper on **both** copies. The
single-witness spot check is now confirmed by a second witness. There is no closing apparatus, no
colophon and no note to recover: **the Glossa's Matthew, and with it the last gospel in the
Glossa, ends where our chunk 0041 ends.**
