# 8999 (Glossa ordinaria on John, PL 114) — blind reader 2

**Range:** chunks 0010–0018, cols 0380C–0404C (John 6–12).
**Method:** Latin `src/latin/8999/NNNN.md` read against English `src/english/8999/NNNN.md`,
clause by clause; particle tally per chunk; every relative, pronoun, participle and
reflexive checked for case/gender/number binding rather than for sense.
Written **before** opening `src/english/8999/cruces.md` (see §4).

Where a reading looked defective I checked it against the upstream transcription
`sources/pl/tei/8999.xml`. **In every case the TEI agrees with our Latin chunk**, so
none of the defects below were introduced by chunking. ⛔ That still does not reach the
plate: I cannot see Migne's page, so where I say "Migne's defect" I mean "defective in
the transcription we and the TEI both carry" — the attribution to the plate is a
conjecture, not an observation.

---

## 1. Chunks read, with particle tally

Latin count = `non|nec|neque|nisi|haud|nunquam/numquam|nullus-|nihil|nemo/neminem|ne`.
English count = `not|nor|no|none|never|nothing|unless|except|cannot|un-` (the `un-`
bucket is noisy — it catches *unity, unless, unto* siblings — so treat the ratio as a
pointer only). Every chunk was read in full regardless of its ratio.

| chunk | cols | LAT | ENG | ratio | verdict |
|---|---|---|---|---|---|
| 0010 | 0380D–0384A | 62 | 79 | 1.27 | 1 finding (unflagged *sed audivit*); otherwise clean |
| 0011 | 0384B–0385C | 23 | 35 | 1.52 | **clean** — read in full, no candidate survived |
| 0012 | 0385D–0389B | 61 | 76 | 1.25 | 3 findings (incl. the worst in the range) |
| 0013 | 0389C–0392D | 62 | 64 | 1.03 | 3 findings |
| 0014 | 0393A–0394C | 42 | 46 | 1.10 | 1 finding (mechanism 5) |
| 0015 | 0394D–0396A | 24 | 31 | 1.29 | 2 findings |
| 0016 | 0396B–0399A | 57 | 57 | 1.00 | 2 findings — note the tally is *exactly level* and the chunk still carries the flattest self-contradiction in the range |
| 0017 | 0399B–0401B | 23 | 29 | 1.26 | 1 low-rank finding; otherwise clean |
| 0018 | 0401C–0404C | 57 | 62 | 1.09 | 1 low-rank finding; otherwise clean |

**Tally verdict: it found nothing.** Not one of the fifteen findings below was surfaced
by the count — the level 57/57 chunk holds the *perseverant/perseverant* contradiction,
and the two most serious defects (0385D, 0394A) involve no negation at all. Recorded as
another datum for "a tally is a pointer, not a verdict."

---

## 2. Findings, ranked

### ①  0385D (chunk 0012, VERS. 6) — *non audit vos mundus* → "the world does not hear you"
- **Latin:** "quia non sum amator mundi ut vos, sed accusator, et ideo **non audit vos
  mundus** suos falsos testes, qui dicitis bona mala et mala bona."
- **English as shipped:** "…and therefore **the world does not hear you**, its own false
  witnesses, who call good things evil and evil things good."
- **What is wrong:** the verse being glossed is Jo 7:7, *Non potest mundus **odisse** vos:
  me autem odit* — and the whole point (Augustine's, in *Tract. in Jo.* on this verse) is
  that the world **does not hate** its own. "The world does not *hear* its own false
  witnesses" says the opposite of what the sentence is built to say: the world's own
  witnesses are precisely the ones it does listen to. *audit* is *odit* with one letter
  changed — the sense-reversing-letter class named in the brief.
- **Direction:** primarily **1** (a defect in the printed/transmitted Latin), but it lands
  in our text as a **direction-2** failure: the English rendered the corrupt letter into
  perfectly smooth, plausible English ("does not hear you") instead of rendering it
  literally *with a crux*, so the reader has no signal at all that anything is wrong.
- **Why it is the worst in the range:** it reads correctly. Every other finding either
  produces visible nonsense (a reader stumbles) or is doctrinally minor. This one ships a
  false sentence in fluent English about the world's relation to its own, and nothing —
  not the tally, not `verify-english`, not a proofreader without the Latin — can see it.
- **Repair (for the merge, not applied here):** render the printed *audit* literally
  ("does not hear") **with** a crux noting Jo 7:7 *odisse* and the near-certain *odit*;
  or, if the plate is checked and prints *odit*, correct the Latin and read "does not
  hate you, its own false witnesses."

### ②  0396D (chunk 0016, VERS. 6) — the wolves "at the end persevere" too
- **Latin:** "Praedestinatae oves ad tempus se nesciunt, nec vocem pastoris audiunt, sed
  in fine **perseverant**, e contra lupi ad tempus audiunt, sed in fine **perseverant**."
- **English as shipped:** "…but at the end they persevere; **on the contrary** the wolves
  for a time hear, but at the end **they persevere**."
- **What is wrong:** *e contra* announces an antithesis and the two halves then say the
  identical thing. The second verb must be its opposite (*pereunt* / *deficiunt* /
  *non perseverant*); the sheep don't hear now and persevere at the end, the wolves hear
  now and don't. The page as printed asserts that the wolves persevere to the end, which
  the immediately preceding clause and the whole predestination argument deny.
- **Direction:** **1**. The English is faithful to the Latin it was given, which is the
  right policy — but it is shipped **with no crux and no marker**, so a self-contradicting
  sentence stands unremarked. This is the clearest "sentence that contradicts its own
  immediate neighbour" in my nine chunks.
- Confirmed present in `sources/pl/tei/8999.xml`; plate unverified.

### ③  0394A (chunk 0014, VERS. 53) — *aequalem sibi* → "equal to himself"
- **Latin:** "Secundum illos se faciebat Filium Dei, **aequalem sibi**, quasi non esset,
  sed non faciebat, imo vere erat; unde Apostolus: *Non rapinam arbitratus est esse se
  aequalem **Deo***."
- **English as shipped:** "According to them he was making himself the Son of God,
  **equal to himself**, as though he were not so…"
- **What is wrong:** *sibi* is bound to the surface subject (*se* = Christ) instead of to
  the head it depends on, *Filium **Dei***. "Equal to himself" is vacuous — it is not a
  charge anyone could bring — where the Latin states the actual charge, that he made
  himself the Son of God, **equal to God**. Three independent controls settle it: (a) the
  Philippians tag in the very next clause reads *aequalem **Deo***; (b) the same work at
  VERS. 23 writes "Honorat Patrem, qui credit eum habere Filium **aequalem sibi**", where
  *sibi* likewise means the governing noun (the Father), not the subject; (c) our own
  English at chunk 0011 VERS. 58 renders "Me **aequalem sibi** misit" correctly as "equal
  to himself" *because there* the referent really is the subject — so the work's English
  is internally inconsistent about the same two words.
- **Direction:** **2 — our defect.** Mechanism 5, textbook: the reflexive re-bound to the
  contextually easier noun. Leaves no trace; no automated check sees it.

### ④  0392C (chunk 0013, VERS. 37) — the Jews made to glory in the true servitude of sin
- **Latin:** "Exposito a Domino **contra gloriantes** de vana libertate carnis, **et vera
  servitute peccati, et vera libertate per se filium**, concedens istis…"
- **English as shipped:** "The Lord having expounded against **those who gloried in** the
  vain liberty of the flesh, **and in the true servitude of sin, and in the true liberty
  through himself the Son**, granting to these men…"
- **What is wrong:** only the first ablative phrase belongs to *gloriantes*; the second and
  third are the content of the Lord's **exposition** (*Exposito a Domino … de vana
  libertate carnis, et vera servitute…*) — he expounds, against men who glory, the vain
  liberty of the flesh, the true servitude of sin, and the true liberty through the Son.
  As shipped, the page says the Jews gloried in the true servitude of sin and in the true
  liberty through the Son — which is the precise opposite of the sentence's point and is
  contradicted by its own next clause ("he shows that such children are **not** sons of
  Abraham … but are sons of the murderer the devil").
- **Direction:** **2 — our defect.** Mechanism 5 at phrase level: three ablatives re-bound
  to the nearer participle.

### ⑤  0387A (chunk 0012, VERS. 25) — *cujus* bound to *potentia*
- **Latin:** "Mirantur aliqui, quia **potentia non tenetur cujus mors** tantopere
  quaerebatur, et nondum plene intelligentes **ejus esse potentiam**, putant esse
  scientiam principum…"
- **English as shipped:** "Some wonder, because **he is not held by any power whose death
  was so greatly sought**; and not yet fully understanding that it is his own power…"
- **What is wrong:** two joined errors. (a) *cujus mors* is bound to *potentia*, so the
  English literally attributes a death to a *power*; it belongs to the unexpressed
  subject, Christ. (b) *potentia* is an ablative of means for the escaping, not a negated
  agent: "by [his own] **power** he is not held, he whose death was so greatly sought."
  Turning it into "not held by **any** power" (the "any" is an insertion) removes the very
  power that the next clause insists is *his* — the sentence then contradicts its
  neighbour, which explains that some mistake that power for the princes' knowledge.
- **Direction:** **2 — our defect.** Mechanism 5 plus an inserted quantifier.

### ⑥  0395A (chunk 0015, VERS. 6) — "he received light **from his sins**"
- **Latin:** "**Baptizatus a peccatis** lumen recepit."
- **English as shipped:** "Baptized, **he received light from his sins**."
- **What is wrong:** *a peccatis* is bound to *baptizatus* (baptized/washed **from** his
  sins — the standing idiom of the passage, which has just described the catechumen sent
  to wash in Siloe), not to *recepit*. As shipped the page says light comes *from sins*,
  which is false and is the reverse of the allegory being built.
- **Direction:** **2 — our defect.** Mechanism 5 on a prepositional phrase.
- Correct: "Baptized from his sins, he received the light."

### ⑦  0396A (chunk 0015, VERS. 39) — a dropped *non* left unflagged
- **Latin:** "*Ut qui non vident.* Id est, **qui se videre putant, quaerunt ut videant**,
  et qui vident, id est, qui se videre putant, et medicum non quaerunt…"
- **English as shipped:** "That is, **they who think that they see seek to see**; and they
  who see, that is, they who think that they see and do not seek the physician…"
- **What is wrong:** the gloss on *qui non vident* and the gloss on *qui vident* are given
  word-for-word the same explanation ("qui se videre putant"), so the same men both seek
  to see and refuse the physician. The first almost certainly wants a *non* ("qui se
  **non** videre putant" / *sciunt*): those who know they do not see seek to see. This is
  the dropped-negative class.
- **Direction:** **1**, faithfully rendered — but again **with no crux**, so a
  self-cancelling sentence ships unremarked.

### ⑧  0384A (chunk 0010, VERS. 52) — *sed audivit* → "but he heard"
- **Latin:** "…nec talibus exponitur quomodo Dominus carnem suam det ad manducandum,
  **sed audivit, unde magis moveantur**."
- **English as shipped:** "…nor is it expounded to such men how the Lord gives his flesh
  to be eaten, **but he heard, whence they are the more moved**."
- **What is wrong:** singular *audivit* has no possible subject; the plural subjunctive
  *moveantur* in the same breath shows the subject should be the Jews (*audiunt* — "but
  they hear that whereby they are the more moved"). The English renders the defective form
  literally, which is right, but ships a subject-less clause with no marker.
- **Direction:** **1**, unflagged.

### ⑨  0387D (chunk 0012, VERS. 33) — *assensionem* → "the assent"
- **Latin:** "quaeretis me post resurrectionem et **assensionem** cum tanta miracula
  fient per apostolos…"
- **English as shipped:** "…will seek me after the resurrection and **the assent**, when so
  great miracles shall be done by the apostles…"
- **What is wrong:** *assensionem* is *ascensionem*; the whole chunk has been talking about
  the ascension (0381B–C: "ascendit coelos"; "Sero mundi est post ascensionem Christi").
  "After the resurrection and the assent" is meaningless English.
- **Direction:** **1**, rendered literally (correct) but **unflagged**, where our own
  practice elsewhere in this very chunk-set is to fire a marker (0381A `[cj: *vanitatem*;
  read *unitatem*]`, 0383A `[cj: *me esse Patrem*; read *me esse a Patre*]`). The
  inconsistency is the finding: three comparable defects in my range got a `[cj:]` and
  five did not.

### ⑩  0390C (chunk 0013, VERS. 15) — *ut nos* silently emended to "as you do"
- **Latin:** "Ego non judico, quasi, secundum carnem, **ut nos**, vel penitus non judico
  hoc primo adventu, sed salvo…"
- **English as shipped:** "I judge not, as it were, according to the flesh, **as you do**;
  or I do not judge at all at this first coming, but save…"
- **What is wrong:** the printed Latin has *nos* (first person). The English silently
  corrects it to *vos*. The emendation is almost certainly right in sense — Christ is
  answering *Vos secundum carnem judicatis* — but this is the **direction-2** failure in
  its purest procedural form: a defect in the printed Latin repaired invisibly, so the
  reader is told the plate says something it does not. Register rule is: render literally,
  log the crux.

### ⑪  0403B (chunk 0018, VERS. 31) — "even though **he** be tempted without"
- **Latin:** "praedicantibus apostolis plene expelletur qui olim a paucis **etsi extra
  tentetur, non laedit intus**."
- **English as shipped:** "…he shall be fully driven out, who of old by few, even though
  **he** be tempted without, does not hurt within."
- **What is wrong:** *non laedit* has the devil as subject; the passive *tentetur* cannot.
  Its subject is the believer: "though [a man] be tempted from outside, [the devil] does
  not hurt within." As shipped, one "he" carries both verbs and the devil is made the one
  tempted. Mechanism 5, mild — the Latin is genuinely elliptical, but the English's single
  pronoun forecloses the only coherent reading.
- **Direction:** **2**, low severity.

### ⑫  0397A (chunk 0016, VERS. 10) — "kill, by drawing back from the faith"
- **Latin:** "Furetur alienam rem sibi usurpando, **mactet, a fide retrahendo**, perdat in
  aeternam damnationem."
- **English as shipped:** "He would steal, by usurping to himself what is another's;
  **kill, by drawing back from the faith**; destroy, unto eternal damnation."
- **What is wrong:** the gerunds are transitive with the sheep as understood object
  (*retrahendo* [oves] *a fide*) — the thief kills by drawing **them** away from the faith.
  "Drawing back from the faith" reads as the thief's own apostasy, which is not how one
  *kills* anybody. Small but it moves the victim.
- **Direction:** **2**, low severity.

### ⑬  0386D (chunk 0012, VERS. 23) — negation raised out of the infinitive
- **Latin:** "sicut vos ipsi circumcidentes in sabbato … **non solvere vos sabbatum
  creditis**." ("you believe that you do **not** break the sabbath")
- **English as shipped:** "…**do not believe that you break** the sabbath."
- **What is wrong:** the *non* sits on the infinitive in Latin and on the main verb in
  English. "You believe you do not break it" is an assertion; "you do not believe you break
  it" is at best an absence of belief. The argument needs the assertion.
- **Direction:** **2**, low severity, but it is the negation-displacement class.

### ⑭  0401A (chunk 0017, VERS. 48) — lemma *Et venient Romam* does not match its gloss
- **Latin:** "*Credent in eum. Et venient Romani.* … *Et venient **Romam**.* De
  temporalibus timent, non de aeternis … **Locus** est Hierusalem quem perdiderunt,
  **gentem** suam perdiderunt ubique dispersi."
- **English as shipped:** "*And they will come to Rome.* They fear for temporal things…"
- **What is wrong:** the gloss expounds *locum* and *gentem* — i.e. the second half of
  Jo 11:48, *et tollent nostrum locum et gentem*. The printed second lemma *Et venient
  Romam* is a repetition of the first lemma corrupted, not the text being glossed. English
  is faithful; the miss is the absent crux, and "they will come to Rome" reads as a
  historical claim the gloss never makes.
- **Direction:** **1**, unflagged.

### ⑮  0391B (chunk 0013, VERS. 24) — *quae mittuntur* (low confidence)
- **Latin:** "Caetera vero omnia **quae mittuntur**, non vere sunt."
- **English as shipped:** "But all other things which **are sent**, are not truly."
- **What is wrong, maybe:** the argument is about immutable being (*Ecce quid est esse …
  mutari non potest*), which wants *quae **mutantur*** — "all other things which are
  changed are not truly." But the immediately preceding sentences are all about *mittere*
  (Moses *missus*), so *mittuntur* may be the author's own echo and perfectly sound.
  Logged as a low-confidence candidate only; **no repair proposed.**

---

## 3. Rejected candidates (looked hard, cleared)

- **0010 / 0382D VERS. 39 "de tumentibus perit, de pusillis nihil"** → "of the swollen
  there perishes one, of the little ones nothing." Looked like a dropped subject; the
  asymmetry is in the Latin and the English carries it. Clean.
- **0010 / 0383C VERS. 46 "carni suae … cui intervenit mors ut mortem tolleret"** →
  "to his own flesh … upon which death came in that it might take away death." Prime
  mechanism-5 site (three candidate antecedents); *cui* is correctly bound to *carni*.
  Clean.
- **0010 / 0382C VERS. 36 "Non dixi de hoc pane, qui sciam vos esse satiandos"** — the
  English makes *qui sciam* a content clause ("that I know you are to be filled") where a
  causal ("because I know") is likelier. The Latin *qui/quia* is itself unstable and the
  English is defensible; no repair worth firing.
- **0011 / 0384C VERS. 58 "participatio facit quae me manducat"** — "the participation
  effects which eats me" is odd English, but the relative really does attach to
  *participatio* in the Latin. Faithful; clean.
- **0011 / 0385A VERS. 64 "ipsa tamen vas spiritus, qui in ea salutem operatur"** —
  checked *qui* (spiritus, masc.) against *ipsa/ea* (caro, fem.); English binds both
  correctly. Clean. **0011 has no surviving candidate at all.**
- **0012 / 0386A VERS. 8 "non in festivitate scenopegiae, sed in paschali"** — negation
  and contrast both intact.
- **0012 / 0388D "Nondum ergo erat Spiritus in apostolis, nec de ventre eorum fluebant"** —
  double negation preserved exactly.
- **0013 / 0389D VERS. 3 "quam Judaeus accusat"** — *quam* is fem. sg. = *Ecclesiam*, and
  English "whom the Jew accuses" can be misread as the demons; ambiguous but not wrong,
  and the following "because **she** comes to Christ" disambiguates. Cleared.
- **0013 / 0391D VERS. 29 "Esse est immutabile divinae substantiae"** → "the
  unchangeableness". Substantival neuter turned into an abstract noun; a shade loose, not
  a sense change. Cleared.
- **0014 / 0393D VERS. 50 "Deus intentator malorum est"** with `[n: (Jac. II)]` — the
  citation is Jas 1:13, not 2; Migne's own misattribution, correctly passed through
  untouched (as is `[n: (Marc. XI)]` at 0387B for Mt 11:27). Not defects — our policy
  working.
- **0014 / 0394A VERS. 51 "Hinc discat homo Jesus"** → "let man learn Jesus." Probably
  *a Jesu*; but "learn Jesus" is a defensible literal rendering of the printed nominative
  and nothing downstream contradicts it. Cleared, not logged.
- **0016 / 0397D VERS. 15 "a quibus non sunt dissimiles"** → "from whom … are not unlike."
  Double negative kept, no smoothing to "are like." Clean — the right handling of exactly
  the class this pass hunts.
- **0016 / 0399A VERS. 41 "Nullum in Hierusalem fecit ut iste"** → "He did none in
  Jerusalem such as this man did." Subject is John, object *signum* understood (Jo 10:41,
  *signum fecit nullum*); binding correct. Clean.
- **0017 / 0400A VERS. 25 "Credens etiam mortuus vivit, sicut non credens etiam vivens
  mortuus est"** — the chiasmus of negations is reproduced intact. Clean.
- **0018 / 0404A VERS. 45 "Non ait non videt me, sed eum qui me misit"** — a stacked
  double negation inside a scripture-echo; shipped exactly. Clean; the highest-risk
  negation site in the range and it survived.
- **0018 / 0404C VERS. 50 "ut est nata veritas ex Pater"** — ungrammatical *ex Pater*
  normalized in English to "of the Father." A pure case-ending slip that English cannot
  display; not worth a marker.

---

## 4. Checked against `src/english/8999/cruces.md` — after §§1–3 were written

The cruces file for this range is **very good on direction 1 and blind to direction 2.** Every
Migne-side defect I found was already logged there, usually with better reasoning than mine and
with an explicit attribution refusal. **Not one of my seven mechanism-5 / silent-emendation
findings appears anywhere in it** — I grepped `aequalem sibi`, `ut nos`, `cujus mors`,
`gloriantes`, `Baptizatus`, `a peccatis`, `retrahendo`, `solvere vos`, `mittuntur` across
`cruces.md`, `cruces-0010.md` and `cruces-0015.md` and got nothing.

### Already known (7 of 15) — no credit claimed

| mine | cruces entry | how it stands there |
|---|---|---|
| ② 0396D *perseverant* | §"the wolves persevere too" | called "the strongest single plate candidate in my whole range." Full agreement. |
| ⑦ 0396A *qui non vident* | §"Migne prints: *Ut qui non vident…*" | same diagnosis, rendered as printed, no marker. |
| ⑧ 0384A *sed audivit* | "RENDERED AS PRINTED, NO MARKER" list | same. |
| ⑨ 0387D *assensionem* | "DECLINED — the two conjecture candidates I did NOT mark" | declined on the bar "opaque, not false." |
| ⑭ 0401A *Et venient Romam* | §0401A | declined, with an explicit refusal to attribute. |
| ⑪ 0403B *tentetur* | §0403B | logged; see the dissent below. |
| ① 0385D *audit* | "DECLINED", §(d) | **known, and this is where I dissent.** |

### ⚠ Two of the "already known" entries need re-opening, and that is my main use to the merge

**① 0385D `audit` — the declining reason is wrong.** The cruces file declines a marker because
"the world does not **hear** its own false witnesses … is odd but **asserts nothing false**."
It does assert something false. The clause is in apposition to *suos falsos testes* — *its own*
false witnesses — and the whole sentence turns on the world's affinity with them (*non sum
amator mundi **ut vos***). "The world does not hear its own" is not opaque; it is a clean,
readable, wrong proposition, and it is exactly the sentence Jo 7:7 was cited to deny. Under the
file's own stated bar — `[cj:]` fires "where the faithful English ASSERTS SOMETHING FALSE" —
this site clears the bar and `0381A vanitatem` / `0383A me esse Patrem` are its precedents.
**Recommendation: promote to `[cj: *audit*; read *odit*, "hate"]`, or at minimum stop describing
it as merely odd.** I reached this independently and only saw the declining reason afterward.

**⑪ 0403B `tentetur` — a construal that may dissolve the defect.** The cruces entry says the
passive "has no expressed subject in a clause whose sense wants an active." It does not consider
that the subject is the **believer**, not the devil: *etsi extra tentetur* ("though [a man] be
tempted from outside"), *non laedit intus* ("[the devil] does not hurt within"). That construes
without emendation and is the standard shape of the thought. If it is right, the Latin is sound
and the defect is only in our English, whose single "he" ties both verbs to the devil.
**Recommendation: re-read as a translation question, not a plate question.**

### New (8 of 15) — none of these is in the cruces file

Seven of the eight are **direction 2, our own defects**, which is the predicted result: the
cruces file is a census of what Migne got wrong, and it cannot see what we did.

| mine | site | class |
|---|---|---|
| ③ | 0394A *aequalem sibi* → "equal to himself" | mechanism 5 — reflexive re-bound to the subject; contradicted by the Phil 2:6 tag two lines later and by our own correct rendering of the same two words at 0384C |
| ④ | 0392C the three ablatives after *Exposito a Domino contra gloriantes* | mechanism 5 at phrase level — the page has the Jews glorying in the true servitude of sin |
| ⑤ | 0387A *potentia non tenetur cujus mors* | mechanism 5 — *cujus* bound to *potentia*, plus an inserted "any" that negates away the power the next clause calls his |
| ⑥ | 0395A *Baptizatus a peccatis lumen recepit* | mechanism 5 — *a peccatis* re-bound to *recepit*: "light from his sins" |
| ⑩ | 0390C *ut nos* → "as you do" | silent emendation of the printed Latin, no marker |
| ⑫ | 0397A *a fide retrahendo* | mechanism 5 — implied object dropped, moves the victim |
| ⑬ | 0386D *non solvere vos sabbatum creditis* | negation raised out of the infinitive |
| ⑮ | 0391B *quae mittuntur* | possible Migne defect (*mutantur*), low confidence, no repair proposed — the one genuinely new direction-1 candidate |

**Note on 0387A:** the cruces file has an entry at this column, but for a different defect
(*actionem personarum* for *acceptio personarum*). The *potentia … cujus mors* binding is a
separate site on the same column and is unlogged.

### What this pass says about the method

The cruces file's own §(a).5 claims that mechanism 5 was "the class I checked hardest" and names
**three** sites — 0382D, 0383C, 0384C, all inside chunks 0010–0011. Chunks 0012–0018 got no
mechanism-5 census at all, and that is exactly where my four serious re-bindings sit. The
blindness rule earned its keep here: had I read the cruces file first, its confident "every
`non` … is in the English and none is in the English that the Latin does not print" would have
closed the question, and the ⑬ negation-raising at 0386D — which is real and which that sentence
does not cover, since the particle *is* present, only relocated — would not have been looked for.
