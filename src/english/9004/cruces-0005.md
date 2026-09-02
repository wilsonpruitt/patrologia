# Cruces — 9004 (Walafrid Strabo, *Expositio in quatuor Evangelia*), chunks 0005–0009

PL 114, cols 0877B–0892B. Chunks 0005–0007 close the Matthew section, 0008 is the
242-word tail of Matthew, 0009 opens `IN EVANGELIUM MARCI`.

⚠ **General caution for this work.** Martianay's *Admonitio* warns that the Latin is
full of barbarisms and solecisms deliberately left uncorrected. Case, number and
gender routinely fail to agree (*messes multa*, *hoc sunt prophetas*, *clamidem
coccineo*, *doctrinam paternarum*, *duobus tunicis*). These are rendered as printed
and are **not** logged individually below except where the sense is at stake — under
Pattern 9 they carry no English exponent and are not defects to mark.

⚠ **Marker-attribution classes.** Per CLAUDE.md 8a, our Latin is Corpus Corporum, not
Migne's plate. Every `[sic:]` and `[var:]` below carries a class judgment:
**(A)** likely Migne's own type/text; **(B)** likely a Corpus Corporum digitization
artifact (letter swap, metathesis, split/fused run). **No column in this range has
been plate-read**; `plate-gate.mjs` must clear all of them before the work ships.

---

## `[sic: …]` markers fired — carried non-word type

| col | reading | conjecture | class | note |
|---|---|---|---|---|
| 0879D | *synanoga* | *synagoga* | **B** | single n/g swap in a word the work prints correctly a dozen times elsewhere. Classic OCR class. Carried because the run is not a word and cannot be rendered. |
| 0881A | *anteguis* (in *non cum pecuniis anteguis*) | *antiquis*, "with ancient moneys" | **B** | q→g is a common CC substitution. The negation *non* is outside the marker and stands in the English. |
| 0883A | *cornemium* (in *ostendit cornemium*) | *Cornelium* — Cornelius, the first gentile convert, which is exactly the sense the fish "which first ascends" requires | **A/B, undecided** | too far from any single-letter slip to be a confident B; the word is the object of *ostendit*, and the verb is retained outside the marker per 7a⁗. |
| 0884D | *sustitutionem* | *superstitionem*, "the superstition of the Jews" — the parallel *doctrinam paternarum* beside it supports it | **A/B, undecided** | a syllable is missing, not a letter. |
| 0885A | *es me Barth* | *est Zacharias filius Barachiae* — the prophet stoned (Matt 23:35); *Barth* looks like a remnant of *Barachiae*, and *Stephanus* follows as the alternative | **A** | a **whole broken run**, not one word, and Pattern 10 requires it carried entire. 7a⁗ applies: the run swallowed the clause's only copula, so **"is" is supplied in plain words beside the marker**. |
| 0885B | *Eccelsiae* | *Ecclesiae* | **B** | pure metathesis of a word printed correctly throughout the work. |
| 0889C | *Judaeroum* | *Judaeorum* | **B** | pure metathesis; same class as *Eccelsiae*. |
| 0890A | *simulares* | *simulatores*, "dissemblers/hypocrites" | **A/B** | *simulares* is a formally possible verb (2 sg. impf. subj.) but has **no grammatical slot** in a nominative-plural position governed by *qui … quaerunt* — Pattern 12's test (1). |
| 0890A | *transierum* (in *vetera transierum et ecce facta sunt nova*, 2 Cor 5:17) | *transierunt* | **B** | dropped *nt*. 7a⁗: the run was the clause's only verb, so **"passed" is supplied beside the marker**. Note Migne also prints *et* where the Vulgate has asyndeton; that addition is left unmarked. |
| 0890D | *restitus* (in *restitus est*) | *restitutus est*, "he was restored" | **B** | haplography of *tu*. 7a⁗: predicate quarantined, so **"restored" is supplied beside the marker**. |

## `[d: …]` — dittography

**0888A–B.** Migne prints the gloss on the scarlet cloak twice, with variation:

> *induit* [0888B] *clamidem coccineo, id est Christum indutum fide gentium.*
> **Induitur** *clamidem coccineo, id est Christum indutum fide gentium* **aliter** *per
> coccineum clamidem, ostendit effusionem sanguinis…*

**The SECOND copy is marked** — and per Pattern 11a the reason has to be stated,
because the two copies differ (*induit* / *Induitur*):

1. The first copy's *induit* is **active**, matching the active *exuerunt Christum*
   that governs the whole sequence; the second's *Induitur* is passive and agrees with
   nothing before it.
2. Deleting the second copy leaves *…induit clamidem coccineo, id est Christum indutum
   fide gentium. Aliter per coccineum clamidem, ostendit…* — a first gloss closed by a
   full stop and an *aliter* introducing the alternative, which is this work's standard
   shape. Deleting the first would strand the column anchor [0888B] inside the deleted
   run.

Class: **A/B undecided.** An eye-skip at a column break is as plausible in a
compositor as in a transcriber; the [0888B] anchor falling inside the doubled run is
weak evidence for the plate.

---

## Vulgate divergences

### Marked `[var: …]` (whole-clause or whole-word divergence, sense at stake)

| col | Migne prints | Vulgate | why marked |
|---|---|---|---|
| 0877A/B | *Attendite vobis* (Matt 7:15) | *Attendite a falsis prophetis* | the gloss immediately supplies *a falsis doctoribus cavete* — the sense of the Vulgate wording that is **not** on the page. A whole-phrase substitution (possibly conformed to Luke 17:3 / 21:34), not a letter. Class **A**. |
| 0879A | *cantavimus vobis et non saltastis tibias* (Matt 11:17) | *Cecinimus vobis et non saltastis* | two independent divergences: *cantavimus* for *cecinimus*, and an added *tibias*. Both answer to the Greek ηὐλήσαμεν, so this is very likely a **genuine Old Latin reading**, not damage. Class **A**. |
| 0879A | *Confitebor tibi, Domine* (Matt 11:25) | *Confiteor tibi Pater Domine caeli et terrae* | future for present, and *Domine* alone where the Vulgate has *Pater Domine caeli et terrae* — the psalm incipit (Ps. 9:2) has evidently attracted the lemma. The gloss then enumerates four kinds of *confessio*, so the word is load-bearing. Class **A**. |
| 0881C | *tradidi hujusmodi hominem in interitum Satanae* (1 Cor 5:5) | *tradere huiusmodi Satanae in interitum carnis* | *carnis* is gone and *Satanae* has moved into its slot, so the printed text delivers the man to **Satan's** destruction rather than the flesh's. Multi-word transposition. Class **A**. |
| 0885C | *fides sine caritate mortua est* (Jas. 2:26, cited as the Apostle's) | *fides sine operibus mortua est* | **this work itself prints *sine operibus* at col. 0882A** — the two readings stand three columns apart. The gloss on the wedding garment turns on *caritas*, so the substitution is doing argumentative work. Class **A**, and the internal parallel is the strongest evidence in this range that a divergence is Migne's rather than ours. |
| 0886A | *Expandit alas suas et adsumpsit eos super scapulas suas* (Deut. 32:11) | *expandit alas suas et adsumpsit eum atque portavit in umeris suis* | plural *eos* for *eum*, *super scapulas* for *in umeris*, and *portavit* dropped. A whole-clause divergence. Class **A**. |
| 0889D | *quid vultis virga veniam ad vos, an in spiritu mansuetudinis et consolationis* (1 Cor 4:21) | *quid vultis in virga veniam ad vos an in caritate et spiritu mansuetudinis* | *caritate* → *consolationis* and the word moved to the end; the preceding gloss glosses the rod as *consolationem sive disciplinam*, so the divergent word is the one the gloss uses. Class **A**. |

### Logged only — divergence real but single-word, so probably OUR file, not Migne's

Per the standing rule (single broken word ⇒ suspect the digitization; whole clause ⇒
evidence about Migne), none of these got a marker. Each still needs the plate.

- **0877C** *Et omnis qui audit verba mea et non faciet ea* (Matt 7:26) — Vulg. *verba
  mea haec et non facit ea*: future for present, *haec* absent. Rendered "will not do".
- **0877D** *tantum dic verbum, et sanabitur* (Matt 8:8) — Vulg. *tantum dic verbo et
  sanabitur puer meus*.
- **0878B** *reversus in domum suam* (Matt 9:7) — Vulg. *abiit in domum suam*.
- **0878D** *Nihil opertum quod non reveletur* (Matt 10:26) — Vulg. *Nihil enim est
  opertum quod non revelabitur*: subjunctive for future indicative.
- **0879B** *lignum fumigans* (Matt 12:20) — **Vulg. *linum fumigans*, "smoking flax."**
  Rendered "smoking wood". This is the most consequential single-word divergence in the
  range: the printed *lignum* makes the gloss ("the hearts of the gentiles made ready
  for the faith") read against a famous image the plate may or may not carry. *lin* →
  *lign* is one inserted letter and therefore the class the rule says is usually ours.
  ⭐ **Priority plate read.**
- **0880A** *videntes non videant* (Matt 13:13) — Vulg. *non vident*.
- **0880B** *Et facit fructum* (Matt 13:23) — Vulg. *et fructum adfert*.
- **0881C** *tu solus discipulus ejus es?* (John 9:28, of the blind man) — Vulg. *Tu
  discipulus eius sis*; *solus* may be attracted from Luke 24:18.
- **0883D** *difficile dives intravit* (Matt 19:23) — Vulg. *dives difficile intrabit*.
- **0885A** *spe circumdedit* (Matt 21:33) — **Vulg. *sepem circumdedit*, "he set a hedge
  about it."** Rendered "he surrounded it with hope"; the gloss (*id est custodia
  angelorum*, "the guard of angels") fits a hedge, not a hope, so the printed reading is
  probably damaged. One letter; plate needed.
- **0885C** *Nemo militans Deo implicans se* (2 Tim. 2:4) — Vulg. *implicat se*.
- **0886A** *ecce relinquetur domus vestras desertas* (Matt 23:38) — Vulg. *relinquetur
  vobis domus vestra deserta*; number disagreement, no English exponent for the verb.
- **0887A** the five-senses proof texts are all heavily compressed rather than divergent
  (Ps. 118:37; Ecclus. 28:28; 2 Cor. 2:15; Rom. 12:14; Eph. 4:28) — compression is not a
  variant and none is marked.
- **0892A** *consepulti enim sumus cum Christo per baptismum: in morte enim ipsius
  baptizati sumus* — a conflation of Rom. 6:4 and 6:3 (*cum illo*), not a divergence in
  a single text; left unmarked.

---

## Other cruces (no marker)

- **0877D** *vel vidissent quod natus esset a lepra* — "that he had been born from
  leprosy." *natus* will not construe with *a lepra*; *mundatus* or *sanatus* is what the
  sense wants (the healed leper shows himself to the priest). Rendered literally.
- **0878C** *pulvis tribus modis impendit, gressus obligat, oculus obscurat, vestimenta
  inquinat* — *oculus* is **nominative** in a run of accusative objects (*gressus*,
  *vestimenta*). Rendered "the eye darkens", which keeps the printed case; *oculos* is
  the obvious conjecture but supplying it would be a silent repair.
- **0878D** *seu Christus Barabias* — the name printed thus; carried as printed, not
  normalized to *Barabbas*.
- **0880D** *Thetrarcha, id est inita pars regni* — "an entered part of the kingdom."
  A tetrarch rules a **fourth** part; *quarta* is what the etymology requires and *inita*
  is a real word occupying its slot, so Pattern 7 governs and no marker is fired.
- **0884A** *prima hora, id est infantia secunda; hora adolescentia, sexta juventus* —
  Migne's punctuation splits *secunda hora* across a semicolon. Reproduced exactly under
  Pattern 8; the English is correspondingly broken.
- **0884C** *qui baptismum vel quacumque sacrationem* — the verb is elided. The English
  supplies **[sell]** in the corpus's existing supplied-word brackets rather than
  smoothing.
- **0884C** *relectis illis abiit foras* — *relectis* ("re-read") where the sequence wants
  *relictis* ("left behind"), which the very next clause prints (*ostendit relictos
  Judaeos*). A real word in its slot, so rendered literally ("those having been read over
  again") under Pattern 7; the conjecture lives here.
- **0884D** *Mens id est Christus, tollite hinc* — *Mens* ("the mind") where Matt 21:21
  requires *Mons* ("the mountain… be thou taken up and cast into the sea"); the following
  *jactate in mare* proves the mountain is meant. Real word, rendered as printed.
- **0885D** *Mulier* **.** — the plate sets a space before the stop. Reproduced.
- **0886A** *in spiris pinnis, id est sublevatis alis* — "in coiled feathers"; the gloss
  says the wings are **raised**, so *spiris* is doing no work the gloss recognizes.
  Rendered literally.
- **0888C** *consolationem recorrectionis* — "the consolation of re-correction."
  *resurrectionis* is the sense the paragraph (the empty tomb, the first day of the week)
  wants. *recorrectio* is a formable Latin word, so it is rendered, not carried.
- **0889A** *temperantia est omni irae, imponere motum* — "to lay upon all anger, a
  motion." *modum* ("a limit") is plainly intended, and *motum* inverts the definition.
  A real word in its slot: rendered as printed, comma and all, per Patterns 7 and 8.
- **0890B** *invenit eam in pristino.. . . . . corporis sui* — **Migne prints a lacuna
  here**, as a run of spaced points. Reproduced verbatim in the English rather than filled
  or normalized; no `[ed:]`, because nothing has been lost by the digitization — the hole
  is in the text as printed. Plate read wanted to confirm the exact number of points.
- **0891B** ⭐ *ut ait Propheta frater non redemit, id est Moyses per legem redemit.* —
  **The gloss contradicts its own lemma.** Ps. 48:8 (*fratrem non redimit homo*) is quoted
  with its negative, and the exposition then says Moses **did** redeem through the law,
  where the whole surrounding argument is that neither Prophets nor Patriarchs could heal
  the human race *nisi veniens Christus*. The negation is carried in the lemma and **not**
  supplied in the gloss: the printed page contradicts itself and the English says so. A
  dropped *non* in the gloss is the near-certain conjecture. This is the one Pattern 7a
  site in the range where the temptation to repair is strong.
- **0891C** *humiliare se in sacculo per poenitentiam* — "in a sackcloth"; *saeculo* ("in
  the world") is the likelier reading, since the lemma is *mergere in mare* and the gloss
  chain runs through worldly things. Real word in its slot, rendered as printed.
- **0891A** *revocavit illum ad pristinam mundanae naturae* — *pristinam* has no noun.
  Rendered "to the former of his worldly nature", keeping the hole visible.
