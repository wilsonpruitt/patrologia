# PL 113 prefatory matter: blind polarity read, range R1

Runbook step 4a. Three texts: 8975 (Douai theologians, *Ad lectorem*, 1617), 8973 (Lyra, prologue to
the *Moralitates*) and 8971 (Lyra, first prologue, *de commendatione sacrae Scripturae*). I read the
English `src/english/<idno>/NNNN.md` sentence by sentence against the Latin `src/latin/<idno>/NNNN.md`,
looking for sentences that contradict their immediate neighbour. I opened no fenced file (cruces,
`data/briefs/` other than the 8949 model report, `data/tei-patches/`, `data/plate-reads.json`)
before writing sections 1–3. I edited no file other than this one.

## 1. Coverage: every chunk in range

| text | chunk | cols | content | verdict |
|---|---|---|---|---|
| 8975 | 0000 | 0011B–0016A | Against the lovers of novelty; the Gloss as a "council of masters"; before printing; the Paris 1588 edition and Possevino's judgment; the Douai method (collation, striking out Rabbis and profane writers) | clean (1 low-confidence ambiguity, below) |
| 8975 | 0001 | 0016B–0020C | Errata and delays; asterisk conventions; Tornigus's abuse of Burgensis pruned; lives of Walafrid Strabo, Anselm of Laon, Lyra (Sixtus of Siena, epitaphs), Paul of Burgos, Tornigus; sacred text left unemended | clean (1 non-polarity lexical oddity, below) |
| 8975 | 0002 | 0020C | The index: principal matters only | clean |
| 8973 | 0000 | 0033B–0036A | Apoc 5 book written within and without; literal vs mystical; the fourfold sense and Jerusalem; places with only literal or only mystical sense; parabolic = literal "broadly"; the plan of the *Moralitates* | clean (1 low-confidence, below) |
| 8971 | 0000 | 0025B–0028D | *Haec omnia liber vitae*: four excellences; theology's nobler subject and more certain mode; wisdom and understanding; *omnia*; the book as a mirror; prophets reading in the book of foreknowledge; one letter, several senses | **2 findings** (+1 low-confidence) |
| 8971 | 0001 | 0029A–0030B | Jerusalem as example of the four senses; Ezek 2 and Apoc 5; *vitae*; *putatis* in John 5:39 | clean |

## 2. Findings

### F1: 8971 chunk 0000, col. 0026B: *haec* is Englished as a plural while the gloss calls it singular (ours)

Latin as printed:

> Primo enim describitur, ut singularis eminentiae, quod notat **pronomen singulare**, cum dicitur, ***haec.***

English as written:

> For first it is described as of singular eminence, which **the singular pronoun** marks, when it is said, ***these.***

**Why it contradicts its neighbour.** In one sentence the English calls a word "the singular pronoun" and
then quotes it as "*these*", which is plural. Lyra's whole first excellence rests on reading *haec* in
*Haec omnia liber vitae* (Ecclus 24:32) as feminine **singular** ("this [Scripture]"), not neuter plural.
The same reading comes back at 0027D, where the parallel lemma is *Hoc quod continet omnia* and the gloss
reads *Hoc, scilicet volumen sacrae Scripturae … continet omnia*: a singular subject that *contains* all
things. The Latin form can be singular or plural, so the plate has no defect. The English chose the plural
number, and the gloss beside it rules that out. This is mechanism 5 of 7a (agreement mis-bound). The lemma at
0025B ("All these things are the book of life") renders the verse as the Vulgate reader hears it, which is
defensible for the heading. The gloss, though, has to render the word the way Lyra construes it.

**Whose:** ours. **Proposed fix:** in the gloss, quote Lyra's word and give his construal, for example
"when it is said, ***haec*** ('this')". If the house convention prefers, add an `[nt:]` saying that Lyra reads
*haec* as feminine singular (Scripture) rather than as neuter plural with *omnia*. Leave the 0025B lemma
alone, or add the same note there.

### F2: 8971 chunk 0000, col. 0028A: passive *leguntur* rendered active "read" (ours as rendered; the underlying reading is unsure)

Latin as printed:

> Unde et divina praescientia, in qua relucent omnes veritates, *liber* vocatur: in quo libro **leguntur** sancti apostoli et prophetae qui hanc scientiam tradiderunt.

English as written:

> Hence also the divine foreknowledge, in which all truths shine back, is called a *book:* in which book the holy apostles and prophets who handed down this science **read**.

**Why it matters.** *Leguntur* is passive: "in which book the holy apostles and prophets … **are read**". Its
neighbour, the gloss on Isa 38 (*Prophetae in ipso libro praescientiae Dei … legere possunt*) and the
following *dicuntur prophetae in libro praescientiae Dei legisse*, makes the prophets the ones who read.
The printed sentence makes them the ones who are read, that is, written in the book. That is a real clash
with the neighbour, and the English removed it by turning the voice around, so the reader cannot see the
clash. This is the 7a silent-repair shape (agency reversed so the sentence agrees with its neighbour). The
underlying defect is probably *leguntur* for *legunt*/*legerunt*, but it could be in Migne's type, in
Corpus Corporum's text, or in the late-medieval source (a deponent-style use of *legi* is not impossible).
I cannot tell which from our files.

**Whose:** the silent change of voice is ours. The source of *leguntur* is unsure and needs a plate read.
**Proposed fix:** restore the passive and carry the conjecture beside it: "in which book the holy apostles
and prophets who handed down this science are read [cj: *leguntur*; read *legunt*, 'read']". If a plate read
shows a different printed form, use `[sic:]` or a TEI patch instead.

## Low-confidence candidates (reported, not asserted)

- **8971/0000, col. 0028C: *speciale et huic libro*.** Latin: *commune est omnibus libris, quod voces aliquid
  significent, sed speciale **et** huic libro quod res significatae per voces aliud significent.* English:
  "but special **also** to this book". "Also" weakens the contrast the sentence is built on (*commune …
  omnibus* against *speciale … huic*): a property "special also" to one book is no longer special to it. The
  parallel clause wants *sed speciale **est** huic libro*, so *et* looks like a slip for *est* in type or
  digitization. Whose: unsure (the English renders *et*; the likely defect is upstream). Fix: "but special to
  this book [cj: *et*; read *est*]", or, if *et* is kept, render it so it does not read as "also".
- **8973/0000, col. 0034C: *Sensus enim litteralis est proprie qui significatur, ut praedictum est*.** As
  printed, this defines the literal sense as "that which is signified", which is true of the mystical sense
  too, so the sentence cannot do the work its conclusion (*talis sensus non est hic*) needs. What was "said
  before" at 0033C is *per voces significatur*. *Per voces* seems to have dropped out. This is not a polarity
  reversal and the English is literal. Migne-direction if real. Worth a crux only.
- **8975/0000, col. 0014A–B: *saeculum illud (si cum nostro conferatur hac in re pauperrimum)*.** *Pauperrimum*
  can only agree with *saeculum illud*: the earlier age was the poor one. The English "that age (if it be
  compared with ours, very poor in this respect)" puts "very poor" right after "ours", and a reader can easily
  take it as describing our age, which reverses the point (the next sentence praises printing, which has
  multiplied books). This is ambiguity rather than an error. Ours. Fix: "(very poor in this respect, if it be
  compared with ours)".

## 3. Candidates considered and rejected

- **8975/0001, col. 0018B: *Utraque vera glossa*** → "Each true gloss". *vera* almost certainly stands for
  *vero* ("Both glosses, however, …"). "True" hints that there are untrue glosses, which nobody raises. This is
  lexical, not a polarity reversal, and the English renders the printed adjective. Out of scope here but worth
  a `[cj:]` note.
- **8975/0000, col. 0014C: *quod a majoribus nostris jam per octo saecula … fuit habitum*** → "since it has now
  … been held". Relative *quod* rendered as causal. Both readings are available, and neither reverses anything
  or clashes with a neighbour.
- **8975/0000, col. 0014C: *non quia aliquid fieri potest perfectius …, ideo negligendum fuit*** → "it was not
  because something more perfect can be made … that the work … was therefore to be neglected". I checked the
  scope of the negation: it correctly falls on the *quia* clause, not on the main verb.
- **8975/0001, col. 0017A: *cumque parum referat … rectene an secus in rebus adiaphoris … arguatur; ibi
  Tornigus … conviciis onerat*** → "whereas it matters little … there Tornigus loads …". The concessive and
  circumstantial force is kept: Tornigus rages exactly where it does not matter. No reversal.
- **8975/0001, col. 0017B: *praeterea vero nihil, nec in ipso etiam immutare voluimus*** → "but beyond this,
  nothing; nor did we wish to change anything even in him". The awkward double negative is carried and the
  sense (no other change, not even in Tornigus) holds. Style, not polarity.
- **8975/0001, col. 0017A: *ut praeseferat aperte non se in certamen … descendere veritatis inveniendae causa,
  sed tantum ne videatur Liranus juste reprehensus*** → negation and purpose clause both correct.
- **8975/0001, col. 0019B: *et faciet etiam conjectura probabilis*** → "a probable conjecture will also favour
  this". *facere* = "support" is right. The Norman conclusion is consistent with *crebro … Gallicanae, nusquam
  autem Brabantinae*.
- **8973/0000, col. 0034C–D: *Alicubi vero non habet litteralem sensum proprie loquendo* against *aliqui doctores
  dicunt sensum parabolicum esse litteralem*.** These look contradictory, but Lyra resolves it himself (*large
  loquendo … ego sensum parabolicum vocavi … litteralem*). The English carries both halves and the resolution.
- **8971/0001, col. 0030A: *nec est etiam dubium, quin ad vitam perducat beatam*** → "nor is there any doubt
  either that it leads". *quin* after a negated doubt is correctly positive.
- **8971/0000, col. 0027B: Rom 1:21 *non sicut Deum glorificaverunt, aut gratias egerunt*** → "did not glorify him
  as God, or give thanks". The negation carries over the *aut* clause, as it does in the Latin.
- **8971/0000, col. 0028B: *Quod tamen non est sic intelligendum quod prophetae viderint ipsam Dei essentiam***
  → the negation is correctly placed on the understanding, not on the seeing, and it agrees with the *pro tanto
  … quia per species* that follows.
- Negations deliberately spot-checked and found **intact**: 8975/0000 *nihil magnopere suspiciant … nisi quod
  aetate*; *non nisi cum maximo animarum periculo*; *nihil sibi aut scribendum judicarunt … quod non …
  probaretur*; *tantorum defectuum non nisi maximam causam*; *non possumus nobis persuadere … fuisse …
  observatum*. 8975/0001 *lectorem non inventurum errata magni momenti, aut crebra*; *nihil prorsus … immutatum
  … nisi cum falsa*; *Neque enim in Glossae manuscriptis … ubique*; *quasi salus a Judaeis non processerit*.
  8973/0000 *non est mysticus sensus requirendus*; *ligna nunquam hoc fecerunt nec facere potuerunt*; *Salvator
  non monuit*; *non tamen intendo omnes sensus mysticos scribere, nec per singula verba discurrere*. 8971/0000
  *licet non sit error quantum ad … principia … tamen … potest esse error*; *cui non potest subesse falsum*;
  *qui lumine prophetico illustrati non sumus, non possumus legere*. 8971/0001 *nulla alia scriptura, nisi ista*;
  *quae nullum falsum continet*.
- Not reported, as instructed: the stray « in *Apocalypsis « quinto* (8971/0001), *verum judicatur.;* double
  punctuation (8971/0000, which follows the plate), and thou/you variation in the two renderings of the
  *Littera gesta docet* verses.

## 4. Post-hoc check against the existing record (consulted only after sections 1–3 were written)

I searched `src/english/8971/cruces.md`, `8973/cruces.md` and `8975/cruces.md` by column and by keyword.

- **F1 (8971 @0026B, *haec* as "the singular pronoun" / "these"): NOT logged.** In 8971's cruces,
  *singularis eminentia* appears only in the §1 vocabulary list. The only 0025B *Haec omnia* entry is
  about the wrong chapter address (Eccli. XXIII for 24). New finding.
- **F2 (8971 @0028A, *leguntur* → "read"): NOT logged.** There is no *leguntur* entry and no 0028A crux
  (0028A appears only in the scripture table, for Jn 16:13). Stint B read f14 at the plate without
  commenting on the word. That suggests the plate does print *leguntur*, but it records nothing either
  way. New finding.
- **Low-confidence *speciale et huic libro* (8971 @0028C): ALREADY LOGGED, with a different verdict.**
  Cruces §2 records it as a word-level press variant (Gallica prints **est**, the archive and our twin
  **et**) and rules "both construe … the sense is unchanged; no patch, no marker." This blind read
  reached *est* independently from the sentence's own parallel. It still disputes "sense unchanged":
  "special **also** to this book" undercuts the *commune/speciale* contrast. That is a wording
  question for the English, not a new plate fact.
- **Rejected note *Utraque vera glossa* (8975 @0018B): ALREADY LOGGED** ("Readings kept as printed";
  both witnesses print *vera*; probably meant for *vero*; no `[cj:]`). This read found nothing new.
- **Low-confidence *pauperrimum* (8975 @0014A–B): NOT logged.** It is an English ambiguity only, not a
  crux class.
- **Low-confidence *per voces* missing (8973 @0034C): NOT logged.** The 0034C cruces cover
  *manum abscindendum* and the capital after *potuerunt:*, not this sentence.
