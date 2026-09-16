# PL 113 Lyra prologues — Blind polarity read R2 (8972 0000–0001, 8974 0000–0003)

Nicholas of Lyra, *Prologus secundus* (textIdno 8972), and Paul of Burgos, *Additiones*: the
prologue to his son and the opening of the question *utrum sensus litteralis sit dignior*
(textIdno 8974). Blind pass: English `src/english/<idno>/NNNN.md` read sentence by sentence against
Latin `src/latin/<idno>/NNNN.md`, hunting sentences that contradict their immediate neighbour. No
fenced file (cruces, `data/briefs/` other than the 8949 model, `data/tei-patches/`,
`data/plate-reads.json`) was opened before sections 1–3 were written. No file was edited.

## 1. Coverage — every chunk in range accounted for

| chunk | cols | content | verdict |
|---|---|---|---|
| 8972/0000 | 0029B–0032B | Apoc 5:1 lemma; why the literal sense is obscured (scribes, correctors, translation, mystical multiplication); Lyra's intentions and protestation; rules 1–4 | clean (1 low-confidence Migne candidate) |
| 8972/0001 | 0032C–0034B | Rules 5–7: times (synecdoche, fractions, termini, prophetic past; predestination vs. threat), recapitulation/anticipation, the devil and his body | clean |
| 8974/0000 | 0035B–0037D | Rubric; Paul's prologue to Alphonsus: conversion, baptism, career, Levitical descent, gift of the *Postilla*, the additions | **1 finding** (F1) |
| 8974/0001 | 0037D–0040B | Question opened, *videtur quod non*: seven arguments; *Sed contra*; six articles announced; art. 1 (what the literal sense is) | clean (objection/position boundaries hold throughout; 1 non-polarity note) |
| 8974/0002 | 0040B–0042D | Art. 2 (not every text has four senses; Thomas *Quodl.* 7); art. 3 opened (*videtur quod non*), Augustine's three expositions, reply, several literal senses, *Si autem dicatur contra* | **1 finding** (F2) |
| 8974/0003 | 0042D–0044D | Art. 3 (cont.: secondary literal senses, Luke 20); art. 4 (which literal sense to prefer); art. 5 (effective argument; Dan 9; Ps 32:6 vs. unbelievers; the Postillator criticized) | **1 finding** (F3) |

## 2. Findings

### F1 — 8974/0000, col. 0037B — predicate mis-bound; the English denies what the previous clause asserts (ours)

Latin as printed:

> Unusquisque enim tanti debitor est, quantum ingenii sui vires exsolvere valent: nec quisquam apud
> Deum solvendo non est, cum ultra facultatem non petat; **nec opulentior debitor est, cum nihil
> habeat quod non receperit**, sed misericordia ejus his, quae possumus, contentatur

English as written:

> For each man is a debtor for as much as the powers of his wit are able to pay: nor is anyone before
> God not solvent, since he does not ask beyond one's means; **nor is the wealthier man a debtor,
> since he has nothing that he has not received**; but his mercy is content …

**Why it contradicts.** Two clauses earlier the same sentence says *every* man is a debtor
(*unusquisque … debitor est*). The English then makes *opulentior* the subject and *debitor* the
predicate, so it asserts that the rich man owes nothing — flatly against its neighbour, and the
*cum*-clause ("since he has nothing that he has not received") gives no reason why a rich man should
be free of debt; it gives the reason why no debtor is *richer* than another. *debitor* is the subject
and *opulentior* the predicate: no debtor is the wealthier (the better able to pay out of his own),
because all he has was received. That is Paul's point: the gift is small, but no one is excused and
no one is advantaged. Mechanism 5 (reference/agency mis-bound). The Latin is sound; the defect is
ours.

**Proposed fix:** "nor is any debtor the wealthier, since he has nothing that he has not received;"

### F2 — 8974/0002, col. 0041D — a subjunctive result clause under *non successive* read as asserted fact (ours)

Latin as printed:

> Ex qua littera apparet quod simul in eodem tempore fuerunt masculus et femina humanae speciei
> creatae, **et non successive, sic ut femina esset, post creationem masculi, de latere ejus
> subtracta.**

English as written:

> From which letter it appears that male and female of the human species were created together at
> the same time, **and not successively, so that the woman, after the creation of the male, was taken
> out of his side.**

**Why it contradicts.** The *sic ut … esset … subtracta* clause describes the successive creation
that is being *denied*. It sits under *non successive*: "not successively, [i.e.] in such a way that
the woman would have been taken from his side after the male was created." That is the apparent
contradiction with Gen 2 that Augustine's "anagogical" exposition exists to resolve. The English
renders the subjunctive as an indicative ("was taken"), and after the comma the *so that*-clause
reads as the consequence of the main assertion. So in one sentence the English says male and female
were created *at the same time* and that the woman was taken out of him *after* the male's creation.
The reader can no longer see which account the verse from Gen 1 is supposed to rule out. The
subordinate clause has the wrong force, and the defect is ours.

**Proposed fix (Latin comma kept):** "… were created together at the same time, and not
successively, in such a way that the woman would have been taken out of his side after the creation
of the male."

### F3 — 8974/0003, col. 0044D — "observe" reads as keeping the rule the next clause says Lyra breaks (unsure; leaning ours)

Latin as printed:

> … non curans an ex ea posset sumi efficax argumentum contra infideles Trinitatem negantes, an non:
> quia non oportet quod ex quolibet sensu litterali argumentum sumatur apud omnes, ut jam dictum est.
> **Quod tamen postillator in hoc loco, et aliis nonnullis videtur observare**: videtur enim aestimare
> quod non sit sensus litteralis, nisi ille a quo sumitur argumentum validum etiam contra adversarios,
> quod tamen non est sic intelligendum, ut dictum est.

English as written:

> … not caring whether an effective argument could be taken from it against unbelievers who deny the
> Trinity, or not: because it is not necessary that an argument be taken from every literal sense
> among all, as has already been said. **Which nevertheless the postillator seems to observe in this
> place, and in not a few others**, as will be plain in their places: for he seems to think that there
> is no literal sense except that from which a valid argument is taken even against adversaries, which
> nevertheless is not so to be understood, as has been said.

**Why it contradicts.** In English, "Which … the postillator seems to observe" takes the nearest
antecedent, the principle just stated (a catholic expounds catholically without caring about
arguments against unbelievers), and "observe" means *keep*. So the sentence says Lyra keeps the
principle, while the *enim*-clause after it says he holds the opposite view, and *tamen* marks the
sentence as adverse. As written, the English sets the Postillator on the wrong side of Paul's
criticism.

**Whose.** The Latin construes only if *observare* means "to heed, attend to" and *Quod* refers to
the *an … an non* concern, i.e. whether an argument against unbelievers can be taken. On that reading
the Postillator heeds exactly what the catholic expositor should not care about, and the *enim*-clause
explains why. If so, the Latin is sound and the ambiguity is ours. The alternative is a dropped
*non* in Migne (*videtur **non** observare*, "which the postillator seems not to keep"), which fits
equally well. The two readings cannot be told apart from the page, and both give the same sense. The
English is wrong under either one.

**Proposed fix (no conjecture needed):** "Which concern nevertheless the postillator seems to heed in
this place, and in not a few others, …" If a plate read shows an erased or dropped *non*, handle it
under the Migne-defect conventions instead.

## 3. Candidates considered and rejected

- **8972/0000, 0031D `Quod autem subditur, « sicut pelles Salomonis, » refertur ad nos`** ("is
  referred to us"). The neighbour is *ad malos refertur*, and the rule is about good and bad, so
  *ad bonos* is what you would expect, and *nos* could be a lost or misread *bo-*. But "us" does not
  reverse anything: the Church's good members include the writer and reader, and the next sentence
  (*in quo boni colebant Deum*) carries the contrast correctly. Low-confidence Migne candidate at
  most. The English is literal.
- **8972/0001, 0033A `quando praeponuntur posteriora, dicitur anticipatio: quando autem fit e
  converso, dicitur recapitulatio, sicut Gen. X`**. The example after *recapitulatio* actually
  illustrates *anticipation* (Gen 10's division of tongues comes before Gen 11's Babel), and the text
  says so itself (*dicitur per anticipationem*). This is Lyra's own compressed order: the Gen 2 example
  that follows is the recapitulation. No reversal, and the English is faithful.
- **8972/0001, 0032C `Isaac … triginta annis post egressum Abrahae de Aram`**. Thirty years, not the
  twenty-five you get from Gen 12:4 + 21:5, but this is Lyra's arithmetic, not polarity. (Non-polarity
  note: *de Aram* is given as "from **Haran**", which names a city for a region. Worth a look, not in
  scope.)
- **8972/0000, 0030D `Rabbi Salomonis, qui … locutus est rationabilius`** gives "most reasonably" for a
  comparative. The direction is kept (more, not less), so no reversal.
- **8972/0001, 0032D `talis modus loquendi non habet locum, nisi prophetiae praedestinationis … in
  prophetia vero comminationis non habet locum`**. Checked because *non … nisi* next to a second
  *non* is where a drop would hide. Both are carried, and the Jonah example (punishment threatened,
  not inflicted) agrees.
- **8974/0000, 0036C `a cujus memoria haec excidere nullo unquam tempore vellem`** becomes "from whose
  memory I would wish these things to fall away at no time ever". Clumsy, but the negation is on the
  right verb.
- **8974/0000, 0036C `ut quae beneficio aetatis non vidisti`** becomes "what thou didst not see, by
  the benefit of age". The commas slightly let "by the benefit of age" drift toward "commit to
  memory". The negation is intact, and this is style.
- **8974/0000, 0037D `Gratanter igitur donum hoc … accepta affectione, et laeta manu donatum`**. There
  is no finite verb as printed (*accipe* wanted?). The English supplies "accept" and binds the
  ablative to *donatum*. This is a construal problem, not polarity.
- **8974/0001, 0038A–0039A, the seven *videtur quod non* arguments**. Each was checked to be sure it
  stays an objection and its *ergo* conclusion keeps its direction ("does not quicken, but kills";
  "not more worthy"; "of lesser worth"). All intact. The *Sed contra* is clearly marked as such
  ("But on the contrary"), and the six articles are announced as the author's own. No objection is
  voiced as Paul's position.
- **8974/0001, 0039B `posset summi efficax argumentum`** is rendered "could be taken". *summi* is a
  real form with no grammatical slot (for *sumi*), so rendering it as *sumi* is a small silent repair
  under Pattern 12 (2). It is not a polarity issue and is out of scope, but worth a marker check.
- **8974/0002, 0041C–0042B, art. 3 opened with *videtur quod non***. Paul then rejects the Augustinian
  argument (*Sed bene attendenti*) but reaches the same conclusion by another route (*Et sic patet
  quod non cujuslibet textus … tantum unus sensus litteralis*). The English keeps the sides: the
  argument is refuted, and the conclusion stands on new grounds. This is not a reply attached to the
  wrong argument.
- **8974/0002, 0041C `quem vocat anagogicum`**. Augustine's term in *De utilitate credendi* is
  *analogia*, not anagogy. This is a lexical slip (Paul's or Migne's), not polarity. It recurs
  consistently at 0041D and 0042A, so it is probably Paul's own.
- **8974/0002, 0042C `duos sensus litterales secum impassibiles`** becomes "impassible with one
  another". Probably *incompassibiles* (compare *compassibiles* just before), and the English word is
  misleading. But the negating prefix is carried and the sense (incompatible) survives. Possible
  `[cj:]`, not a reversal.
- **8974/0003, 0043A Luke 20:38 `Est Deus mortuorum vel vivorum`**. The negative is deliberately
  absent and marked `[var:]`, as the brief says. This is correct policy and was not reported.
- **8974/0003, 0044C `sed ex hoc non tolletur quin talis sensus catholicorum sit verus`** becomes "but
  it will not be taken away by this that such a sense … is true". *non … quin* is where a doubled or
  dropped negative would show. The English gives *quin* as a plain "that", which is correct: it does
  not follow that the sense is false.
- **8974/0003, 0043C–D preference rules (*quorum neuter repugnat*; *tum ne … detur infidelibus
  occasio*; Leo's *nullam eis, vel tenuem, occasionem demus*)**. All negations carried.
- **8974/0003, 0044A–B art. 5 (*licet a solo … non tamen ex quolibet*; *ex nullo talium sensuum
  possit sumi*; *Bene tamen si … concordant*)**. The concessive/adversative structure and every
  negation are intact.
- Negations spot-checked and found **intact** elsewhere: 8972/0000 *in quibus non est verisimile …
  cum nec causam … nullum videtur periculum*; *non sum ita peritus … quin in multis possim deficere*;
  *nihil intendo dicere assertive … nisi*; 8974/0000 *Nec tamen … successus defuerunt*; *non ad
  parvum … gradum*; *nec quisquam apud Deum solvendo non est*; *Nondum tamen … valui*; 8974/0002
  *non consueverunt exponi nisi anagogice*; *nullo alio sensu consueta sunt exponi*; 8974/0001
  *talis enim sensus non solum non intenditur … sed potius est haereticus*.

## 4. Post-hoc check against the existing record (consulted only after sections 1–3 were written)

Files opened: `src/english/8972/cruces.md`, `src/english/8974/cruces.md`, `src/english/8974/cruces-0000.md`
(and a grep of `cruces-0006.md`).

- **F1 (0037B, *nec opulentior debitor est*): LOGGED, BUT AS SOUND.** `8974/cruces-0000.md` (and the
  merged `cruces.md`) quotes the exact sentence and the exact English and closes with "Both
  negations carried." That checked the negation count and missed the mis-bound predicate, which is
  mechanism 5, the one 7a says "no negation-aware check will ever see". **The finding is new.** The
  existing crux entry should be corrected along with the English.
- **F2 (0041D, *sic ut femina esset … subtracta*): NOT LOGGED.** 0041D appears only in the scripture
  table (*Masculum et feminam*, ✓). New finding.
- **F3 (0044D, *Quod tamen postillator … videtur observare*): NOT LOGGED.** 0044D appears only in the
  scripture table (Ps 32:6) and the article map. New finding.
- **Rejected: 0039B *summi*.** Already logged and resolved as a press variant (Gallica *summi*, archive
  *sumi*, both clean). So the "silent repair" worry in section 3 is withdrawn: the English follows a
  clean printing.
- **Rejected: 0042C *impassibiles*.** Already logged and declined for `[cj:]`. Same reasoning as here.
- **Rejected: *anagogicum* for Augustine's *analogia*.** Already logged (merged `cruces.md`; C6's note).
- **Rejected: 8972 0031D *refertur ad nos*.** Not logged. The only 0031D entries concern the unopened
  » and a worn colon. It remains an open low-confidence candidate, and is not a polarity reversal.
- **Rejected: 8972 0032C *de Aram* → "Haran".** Not logged (0032C entries are the Gen XII press
  variant, the Exod. XII paraphrase, and the scripture table). Out of scope. Noted for whoever next
  touches that chunk.
