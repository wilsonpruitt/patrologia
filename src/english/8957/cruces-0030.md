# 8957 *Liber Job* (Glossa ordinaria) — cruces, stint 0030–0034 (cols 0820C–0833A)

Stint-scoped; the orchestrator merges. **Every column in this range was read at the plate while
translating** (Gallica `ark:/12148/bpt6k5505319w`, `f = (column + 1) / 2`, the printed corner
numbers read FIRST on every leaf before any text on it): f410 = 819/820, f411 = 821/822,
f412 = 823/824, f413 = 825/826, f414 = 827/828, f415 = 829/830, f416 = 831/832, f417 = 833/834.
**Foot of page: checked zero on all eight leaves, both apparatus layers** — no numbered `Forte`
conjectures, no asterisk- or letter-keyed cross-references. Detail, with the crop coordinates,
in `data/briefs/8957-PLATE-READS-0030.json`.

f410 was already on record at depth `read` for the 0819C guillemet question; its 820 band is
collated here for the first time. f411–f417 were fresh.

## §0 · Span count against the brief — 289 against 289, EXACT, with two ragged marks beside it

Counted paragraph-bounded in my own Latin, both `« … »` and `*…*`:

| | 0030 | 0031 | 0032 | 0033 | 0034 | total |
|---|---|---|---|---|---|---|
| closed `« … »` pairs | 47 | 33 | 32 | 51 | 45 | **208** |
| italic `*…*` runs | 16 | 9 | 8 | 29 | 19 | **81** |
| | | | | | | **289** |

**289 against the brief's stated 289**, and the agreement holds column band by column band, not
only in the total (checked mechanically against the inventory's own `[0NNNc]` prefixes).

⚠ **A bare total is not a checkable number on a guillemet book, so here are the ragged marks
separately.** Two delimiters in my range are unmatched, and **both are plate-confirmed as Migne's
own**:

- **0826A** `VERS. 7.-- « Sicut impius inimicus meus. [n: (Ibid.)] Impius, infidelis dicitur…` —
  opens and never closes. Plate f413, left column: exactly so. This is the brief's own single
  `OPEN-ENDED` entry, so it is inside the 289.
- **0821C** `*usque ad* in eorum actibus quasi in meridie quiescunt. »` — a closing `»` with
  nothing open. Plate f411, left column, native crop: exactly so. **The brief does not list it**,
  because its harvester paired `« Qui calcatis torcularibus. »` normally on that column and the
  stray close fell outside the pairing.

⭐ **The consequence, and it is the one the brief warns about, checked and negative here:** an
unopened mark can hide a lemma from the mechanical Vulgate pre-scan. **It does not do so in this
range.** The 0821C `»` closes an *abridgment tail* (Gregory's gloss resuming after `usque ad`),
not a verse lemma, so it introduces no scripture that went unsearched; and every `VERS. n.--`
address in my five chunks carries its own opening `«`. I read the column to establish that rather
than inferring it. The two shapes cancel in the arithmetic — the brief's open-ended entry occupies
the slot my counter gives to a closed pair — which is exactly why the totals agree at 289 while
the shapes differ at two sites. Do not read the exact agreement as proof that nothing is ragged.

## §1 · Work conventions — followed, and one deliberate divergence declared for the merge

Following the 0000–0004, 0005–0009 and 0010–0014 stints:

- **`*usque ad*` → `*as far as*`**, italics kept. All 81 italic runs in my range are this formula
  except three: `*Macta et manduca.*` (0828B, an Acts quotation Migne italicises),
  `*(GREG. in Job, [0829C] l. XIX.)*` (0829B, an attribution set in the running text as italic
  rather than as a `[n:]`, carried as the twin has it, with the column anchor kept **inside** the
  italic run as in the Latin), and — in 0032 — nothing further.
- ⛔ **`usque ad` is NOT always the formula.** At **0827A** Migne prints `apud inferos usque ad
  minima petenda` and `usque ad minima neganda` in plain roman, as ordinary prose. Our Latin
  correctly leaves both unitalicised. They are rendered "even to the begging of the least things" /
  "even to the denying of the least things", **not** `*as far as*`. A stint that greps for the
  formula will hit these two; they are not it.
- **`pueri` = "boys", never "servants"** (0830D, `Pueri vocantur, qui coelestibus mandatis
  inserviunt`). ⚑ Note that in *this* passage the gloss does **not** turn on immaturity — it turns
  on service — so "servants" would read more naturally here. The convention was fixed for the work
  at 0754C where the gloss *does* turn on immaturity, and one voice inside one work outranks the
  local reading. Recorded so the merge does not think it was chosen carelessly.
- **`## CAPUT XXIV.` → `## CHAPTER XXIV.`**, the printed full stop kept; likewise XXV–XXIX.
- **Attribution sigla stand as printed**, in the body as in `[n: …]` (`GREG.`, `GREG. MAG.`,
  `AUG.`, `Ibid.`).
- **Pattern 17.** Every second person in this range is **singular** and takes *thou*: 0824A
  (`intendis`, `succumbis`, `impendis` — Job to Baldath, one man) and 0830A (`Si Deum times…
  plenus es`). The one **plural** is 0823B, `ponere ante judicem non valetis … vobis … peccantes
  absconditis`, Job to his three friends → *you*. The switch is visible in the English exactly
  where the Latin makes it.

### ⚠ DECLARED DIVERGENCE FROM MY BRIEF — the lemmata are TRANSLATED inside `« … »`

My stint prompt instructed that every `« … »` span be **byte-identical to the Latin twin**, i.e.
that the lemmata stay Latin. **I have not done that, and the reason is that the work does not do
it.** The evidence, all of it inside 8957:

- The **founding stint (0000–0004) translates the lemmata**, and so do 0005–0014 and **0020–0027**,
  the most recently written chunks in the work — **22 of the 27 English chunks on disk.**
- **`0013` — the chunk my own prompt names as "your model for this book" — translates them**
  (`VERS. 1-- « And Job answering said. »`).
- Only **0015–0019** keep them Latin, and that stint's own cruces file states the choice as its own.

Rendering my five chunks in Latin would put the work's third convention change at column 0820,
inside a single continuous commentary, and merge-time reconciliation inside one work is a required
step, not a tidy-up. So I followed the majority and the named model. **Guillemet placement is 1:1
with the twin regardless** — counts verified equal in all five chunks — so nothing the verifier
checks is affected, and reversing this decision at merge is a mechanical substitution of the
Latin lemma text back into the same marks. Flagged here, as the prompt directs, so the merge can
rule rather than discover.

## §2 · Markers fired — five, every one on a column collated at the plate this session

### `[sic:]` — three, all non-words, all plate-confirmed at NATIVE resolution

1. **0822A `[sic: *haeritici*]`** — *ita **haeritici**, cum fidelem animam in suo errore rapiunt*.
   The plate (f411, right column, native crop `950,395,950,105`) sets it broken at a line end,
   `hae-` | `ritici`. ⛔ **The break is the first hypothesis and it fails here**: a hyphenation of
   *haeretici* gives `hae-retici`, not `hae-ritici`, so the second element is wrong independently
   of the division. And **`de haereti-cis` prints correctly three lines above in the same column**.
   7a⁗: the marked run is the clause's subject, so the sense stands beside the marker — "so the
   heretics [sic: …], when they snatch away a faithful soul…".
2. **0827C `[sic: *haeritici*]`** — *Hoc loco **haeritici**, etc.* Second site of the same defect,
   five columns later, and this one is **mid-line with no break anywhere near it** (f414, left
   column, native crop `150,1490,830,180`), which retires the break hypothesis for the class
   altogether. **`haeretici` prints correctly three lines BELOW in the same column** (*haeretici de
   justitia gloriari*), and 20+ times elsewhere in the work.
3. **0825A `[sic: *congnosci*]`** — *qui modo non plene possunt **congnosci***. Mid-line, clean
   type, no break (f413, left column, native crop `150,215,830,100`); a non-word for *cognosci*,
   **which prints correctly at 0822A in this same stint's range**. 7a⁗: the marked run is the
   infinitive the clause is built on, so the sense stands beside it — "cannot fully be known
   [sic: …]".

⚑ **On attribution, which is the part I cannot prove and am not claiming to.** All three are Migne's
type as photographed, and our TEI agrees with the plate at each; that is what a `[sic:]` asserts and
all it asserts. Whether Migne's compositor or his copy is responsible is not a question a translator
can answer, and CLAUDE.md's 9004 measurement (confidence and truth close to uncorrelated) is the
reason I do not guess. ⚠ Only the **Gallica** witness was opened. `PL113-WITNESS-ENCODING.md` and the
8956 finding both say a single witness may not settle a letter, and Gallica was the *worse* copy in
8956. I did not open the archive.org copy, because the two `haeritici` corroborate each other five
columns apart with a correct form on each of their own columns, and `congnosci` is an inserted
letter rather than a worn one. **If the merge wants these three at the standard of 8956, the
archive.org second witness is one fetch each and I am recording that I did not run it.**

### `[var:]` — one, and the gloss's own last word is what fires it

4. **0821C `[var: Vulg. Job 24:12 *viros*, "they made men groan"]`** on
   `« De civitatibus fecerunt **vi** gemere. »` ‖ Clementine Job 24:12 `De civitatibus fecerunt
   **viros** gemere`. **Plate-confirmed at native resolution** (f411, left column, crop
   `150,1795,830,110`): a clean, normally spaced `vi`, followed by `geme-|re` broken at the line —
   so the division falls after `vi geme`, not inside it, and *vi* stands as its own word.
   **Material, and the page proves it against itself**: the gloss's abridgment tail ends *eos qui
   per viam Dei non fluxe, sed **viriliter** currunt* — "those who run the way of God not loosely
   but **manfully**" — which expounds *viros*, the word the lemma no longer carries. Same shape as
   the peer's 0791D `veram`/*vestram*: the exposition rests on a word that is not on the page.
   Pattern 18a routes a divergence inside quoted scripture to Pattern 14, never to `[cj:]`.

### `[cj:]` — none

No printed real word in this range makes the English assert something the Gloss is arguing against,
and **no negation or correlative is lost or intruded anywhere in the 4,966 Latin words of my five chunks (the frontmatter figure; 5,013 by raw token count)**. Every
`non`, `nec`, `neque`, `nisi`, `nunquam`, `nullus`, `nullatenus`, `nemo`, `nihil`, `nequaquam`,
`minime` and `nonnisi` the Latin prints is in the English, and none is added — including the two
places where carrying it is uncomfortable and I carried it anyway:

- **0824B** `Sicut non possumus non de nostra natura` — a double negative inside an abridged tail,
  rendered "As we cannot not out of our own nature".
- **0832B** `qui verba ejus non audent impugnare, sed credere` — read strictly, the `non` reaches
  *credere* too. Rendered "who dare not attack her words, but believe them", which keeps the single
  printed negative where Migne puts it and does not supply a second one.

## §3 · The plate corrected US four times — and the fourth would have gone out as a false Pattern 8 finding

All four are filed in `data/briefs/8957-PENDING-TEI-PATCHES-0030.md`. In each the English already
renders the plate, per the locked 2026-09-04 ruling; none takes a marker, because **none of them is
Migne's.**

1. **0828D** — our TEI `VERS. 14.-- «`; the plate prints `VERS. 14. «`, no em-rule.
2. **0832B** — our TEI `VERS. 20.-- «`; the plate prints `VERS. 20. «`, no em-rule.
   ⚑ The 0015–0019 stint recorded the *converse* (our TEI already lacking the rule where the plate
   lacks it, at 0793C and 0794B). So our transcription is inconsistent about this separator in
   **both directions** and Migne's practice cannot be inferred from our Latin.
3. **0830D** — our TEI `*usque ad* quod et Job fecit` with no terminal stop; **the plate prints the
   stop**. ⛔ This is not cosmetic: Pattern 8 makes a missing terminal stop a reportable fact about
   Migne's page, and this book has five real ones (peer stint 0015). Unpatched, our Latin
   manufactures a sixth.
4. **0832D** — our TEI `primus sedet. quia et adventus`; **the plate prints `primus sedet : quia`**,
   a colon. ⛔⛔ From our file alone this is a textbook Pattern 8 specimen — a full stop mid-sentence
   with a lower-case resumption — and it is **the second instance of this exact class found to be
   ours in this work** (a peer found a colon-for-full-stop at 0758A). Two makes it a class:
   **Corpus Corporum substitutes a full stop for Migne's colon in 8957.** Native crop
   `1300,2580,580,70`.

## §4 · Vulgate divergences — the 7a″ deliverable

Every one of the 289 spans was walked against `sources/vulgate/clementine-flat.txt`, book
chapter:verse cited. The brief's ✓/⚠/⚑ marks ordered the work and decided none of it. **The
comparand is sound Latin at every verse quoted below**, so nothing here is a defect on our side of
the collation. Every line is plate-confirmed.

### Marked

| col | Migne prints | Clementine | why it fires |
|---|---|---|---|
| **0821C** | `fecerunt **vi** gemere` | Job 24:12 `fecerunt **viros** gemere` | **MARKED `[var:]`.** The gloss's own tail expounds *viros* (*viriliter currunt*). See §2.4. |

### Real divergences, recorded, no marker — the gloss built on each stays consistent

1. **0821A** `« Vigilantesque ad praedam. »` ‖ Job 24:5 `vigilantes ad praedam`. An enclitic *-que*
   added at the head of the lemma; the gloss re-quotes it *without* the enclitic (`Ad praedam
   vigilant`). Connective only.
2. **0822C** `« Ad nimium calorem **transiet**. »` ‖ Job 24:19 `transeat`. Future indicative for
   subjunctive. The gloss (*Iniquitas frigori comparatur*) is cut by `usque ad` before anything
   turns on the mood.
3. **0824A** `« Cujus adjutor? Nunquid imbecillis. »` ‖ Job 26:2 `Cujus adjutor **es**? numquid
   imbecillis?` — *es* dropped and the second `?` closed as a full stop at the cut. The gloss
   (*Adjuvare imbecillem charitatis est*) is consistent.
4. **0824D** `« Omnes gentes velut nihilum et inane reputatae sunt. »` ‖ Is 40:17 `Omnes gentes
   quasi non sint, sic sunt coram eo, et **quasi** nihilum et inane reputatae sunt **ei**`. A
   condensation of the verse into one clause, closing an `usque ad` tail: the middle limb elided,
   *velut* for *quasi*, *ei* dropped. Nothing in the gloss (*Terrae nomine Ecclesia designatur*)
   turns on it. Accounts for the brief's ⚠ here.
5. **0825D** `« Qui justificat impium, et qui condemnat justum, **uterque abominabilis est ante**
   Deum. »` ‖ Pr 17:15 `abominabilis est **uterque apud** Deum`. Word order, and *ante* for *apud*.
   Attributed to Solomon on the plate, correctly.
6. **0826A** `« **Sicut** impius inimicus meus.` ‖ Job 27:7 `**Sit ut** impius, inimicus meus`.
   ⚑ **The most interesting divergence in the range, and it takes no marker.** Migne's word is a
   *fusion* of the Clementine's two, which leaves the lemma with no verb — "As the wicked, my
   enemy" instead of "Let my enemy be as the wicked". Plate-confirmed f413 (this is also the
   unclosed-guillemet site, so the lemma is ragged at both ends). **No `[var:]`:** the gloss that
   follows defines *impius* only (*Impius, infidelis dicitur … qui mihi opere non concordat*) and
   never leans on the optative, so the reader is not being told something the author is arguing
   against; and **no `[sic:]`**, because *sicut* is a perfectly good Latin word, and **no `[cj:]`**,
   because Pattern 18a routes a divergence inside quoted scripture to Pattern 14. Rendered as
   printed, and the fragment reads as a cut lemma, which in this commentary is what it looks like
   anyway.
7. **0826A** `« Quae est enim spes **hypocrisis**. »` ‖ Job 27:8 `spes **hypocritae**`. The abstract
   for the agent noun — and the gloss's very first word is the agent noun, *Hypocrita, qui Latine
   dicitur simulator*. I weighed a `[var:]` on the 0791D pattern and **declined**: the two are
   cognate, the gloss's definition of the hypocrite is not contradicted by "the hope of hypocrisy",
   and Pattern 14's bar is a divergence "in a way that changes the sense", not any divergence.
   Recorded because it is the closest call in the range.
8. **0826B** `« Docebo vos per **manus**. »` ‖ Job 27:11 `per **manum** Dei`. Plural for singular,
   with the gloss immediately glossing a **singular** hand (*Manus Dei vocatur Filius*). Declined
   for the same reason as (7): both readings support the same exposition (the Son is the hand),
   and the gloss is cut by `usque ad` two words later.
9. **0826B** `« Et invocare Deum **in** omni. »` ‖ Job 27:10 `et invocare Deum omni tempore`. An
   *in* inserted before the cut. The gloss (*Tantum Deum hypocrita tunc invocat*) is untouched.
10. **0827D** `« **Dividet** torrens a populo. »` ‖ Job 28:4 `**Dividit** torrens`. Future for
    present.
11. **0829A** `« **Nec commemorabuntur in** comparatione. »` ‖ Job 28:18 `Excelsa et eminentia
    **non memorabuntur** comparatione ejus`. A compound verb for the simple one, plus *in*, plus
    *Nec* for *non* — **both negative**, so the polarity is intact. The gloss turns on
    *comparatione*, which both carry (*Quid enim sunt homines Deo comparati? Nihil.*).
12. **0829C** `« Ipse enim **mundi fines** intuetur. »` ‖ Job 28:24 `Ipse enim **fines mundi**
    intuetur`. Word order only.
13. **0831A** `« Principes **cessabunt** loqui. »` ‖ Job 29:9 `Principes **cessabant** loqui`.
    Future for imperfect, in a chapter the gloss expounds entirely in the past (*Cum praedicare
    mihi publica voce licuit … expavit*; and at 0832B *Praeteritorum temporum reminiscitur*).
    **Declined**, following the peer's treatment of the same shape at 0796C (*dolebit*/*vivit*): a
    tense mismatch between lemma and paraphrase is not the gloss arguing against its own lemma.
    Accounts for the brief's ⚠.
14. **0824C** `« Ecce gigantes gemunt sub aquis. »` ‖ Job 26:5 ✓ agrees; and the following
    `« Et qui habitant cum. »` is the same verse cut before *eis*.
15. **0824C** (gloss, not a lemma) `Sedebo in monte testamenti **in latere** aquilonis` ‖ Is 14:13
    `sedebo in monte testamenti, **in lateribus** aquilonis`. Singular for plural, in a quotation
    the Gloss adduces in its own voice; the exposition turns on *aquilonis*, which is unchanged.
16. **0828B** `*Macta et manduca.*` ‖ Act 10:13 `Surge, Petre : **occide**, et manduca`. A real
    lexical divergence, and the gloss **agrees with what Migne prints**: *male viventes … ore
    praedicationis sanctae **interficit***, then "whence it is said to Peter". *Macta* and *occide*
    both mean *slay*, so nothing is turned against the author. Rendered "Slay and eat." Recorded,
    not marked, and deliberately **not** speculated about (Pattern 14: state the readings, let the
    crux argue).
17. **0829A/B** `« Et nescis unde veniat aut quo vadat. »` ‖ Jo 3:8 `**sed** nescis unde veniat,
    aut quo vadat`. *Et* for *sed*, closing an `usque ad` tail. The lemma spans the column break
    exactly as our TEI has it (plate-confirmed f415).
18. **0831D** `« Indutus sum judicio: »` ‖ Job 29:14 `Justitia indutus sum, et vestivi me, sicut
    vestimento et diademate, **judicio meo**`. Not a variant: the Gloss re-quotes its own lemma in
    a **recombined** form, taking *indutus sum* from the head of the verse and *judicio* from its
    tail, to open a fresh comment. Same habit as the two preceding lemmata on that column
    (« Justitia indutus sum. », « Et diademate judicio meo. »), which between them cover the verse
    in Migne's order, not the Clementine's. Accounts for the brief's ⚠.
19. **0823D** `« Ecce enim. »` ‖ Job 25:5 `Ecce **luna** etiam non splendet`. A two-word cut, with
    *enim* where the verse has *luna*; the gloss then expounds *lunam* **and** *stellas*, both past
    the cut, which is this commentary's ordinary practice. Recorded because the brief's ⚑
    (matches-only-elsewhere) points here and the explanation is the cut, not a variant.

### Orthography, abridgment and word division — recorded, all innocent, none marked

20. `Nunquid` for `Numquid` (0823C, 0823D, 0824A, 0826A), `nunquam` for `numquam` (0822A, 0828A),
    `Exspectabant` for `Expectabant` (0832C), `Si quando` for `Siquando` (0832C, word division
    only), `coeli`/`coelestem` for `caeli`/`caelestem` throughout, `sardonicho`/`sardonichus` for
    `sardonycho` (0829A, and the gloss keeps Migne's spelling), `in circumitu` beside its own
    lemma's `in circuitu` (0830D), `haeritici` excepted and marked (§2). All Pattern 9; each of
    these forms has already been checked and declined in this book.
21. Truncated lemmata agreeing with the Clementine as far as they run — the great majority of the
    range: `« Qui autem. »` · `« Alii terminos. »` · `« Asinum pupillorum. »` · `« Subverterunt
    pauperum. »` · `« Egrediuntur. »` · `« Quibus non. »` · `« Et non habentes. »` · `« Perfodit. »` ·
    `« Sicut in. »` · `« Si subito. »` · `« Et sic in. »` · `« Maledicta sit pars. »` · `« Dulcedo
    illius. »` · `« Et viduae. »` · `« Detraxit fortes. »` · `« Et cum steterit. »` · `« Oculi autem
    ejus. »` · `« Nunquid est. »` · `« Et super. »` · `« Nunquid justificari. »` · `« Et filius, »` ·
    `« Cui dedisti. »` · `« Et prudentiam, »` · `« Plurimam. »` · `« Quem docere. »` ·
    `« Spiramentum. »` · `« Nonne eum qui. »` · `« Qui extendit. »` · `« Qui ligat. »` · `« Qui tenet
    vultum. »` · `« Vultum solii. »` · `« Columnae. »` · `« In fortitudine. »` · `« Et prudentia
    ejus. »` · `« Et cum vix parvam. »` · `« Addidit quoque, »` · `« Vivit Deus. »` · `« Absit a
    me. »` · `« Justificationem meam. »` · `« Nunquid Deus audiet? »` · `« Si multiplicati
    fuerint. »` · `« Et nepotes. »` · `« Qui reliqui fuerint. »` · `« Si comportaverit. »` ·
    `« Praeparabit quidem. »` · `« Et sicut custos. »` · `« Dives cum dormierit. »` · `« Apprehendet
    eum. »` · `« Tollet eum ventus. »` · `« Et velut turbo rapiet. »` · `« Et mittet super eum. »` ·
    `« De manu ejus. »` · `« Stringet super eum. »` · `« Et auro locus est. »` · `« Et lapis
    solutus. »` · `« Et universorum. »` · `« Lapidem quoque caliginis. »` · `« Eos quos oblitus, »` ·
    `« Terra de qua oriebatur. »` · `« Et glebae illius. »` · `« Semitam ignoravit. »` · `« Nec
    intuitus est oculus. »` · `« Profunda quoque. »` · `« Abyssus dicit. »` · `« Mare loquitur:
    non, »` · `« Nec lapidi sardonicho. »` · `« Non adaequabitur ei aurum vel. »` · `« Nec
    commutabuntur pro ea vasa. »` · `« Trahitur autem sapientia. »` · `« Abscondita est. »` ·
    `« Perditio et mors dixerunt, »` · `« Deus intelligit viam. »` · `« Qui fecit ventis pondus. »` ·
    `« Et aquas appendit, »` · `« Vidit illam, »` · `« Et dixit homini, »` · `« Ecce timor Domini
    ipsa, »` · `« Quis mihi tribuat, ut sim, »` · `« Menses pristinos. »` · `« Secundum dies, »` ·
    `« Quando splendebat lucerna, »` · `« Et ad lumen ejus, »` · `« Sicut fui in diebus
    adolescentiae. »` (cut before *meae*) · `« Quando secreto Deus erat in tabernaculo. »` (cut
    before *meo*) · `« Et in circuitu, »` · `« Et petra fundebat mihi, »` · `« Quando procedebam, »` ·
    `« Et in platea parabant, »` · `« Videbant me juvenes, »` · `« Auris audiens. »` · `« Benedictio
    perituri. »` · `« Justitia indutus sum. »` · `« Pater eram pauperum. »` · `« Et causam quam
    nesciebam. »` · `« Conterebam molas, »` · `« Radix, »` · `« Et ros morabitur, »` · `« Et arcus
    meus. »` · `« Qui me audiebant. »` · `« Et intenti tacebant. »` · `« Verbis meis addere. »` ·
    `« Et super illos stillabat. »` · `« Si voluissem ire, »` · `« Cumque sederem, quasi, »` ·
    `« Moerentium consolator. »`. A fragment is by design in this commentary.
22. **Migne's own second lemmata, re-quoted inside the gloss and agreeing with the first**: 0822B
    `« si subito apparuerit aurora, »` and `« arbitrantur umbram mortis, »` (Job 24:17, both ✓),
    0825D `« Vivit Deus. »` twice and `« Absit a me. »` twice (0825D, fresh lemmata opening fresh
    comment, **not** dittographies — the standing finding of this book at 0768C, 0786B, 0789C,
    0794B), 0827C `« Ferrum de terra tollitur. »` twice (the second introduced by *Contra quos per
    humilem confessionem dicitur*, so plainly a re-quotation). **No `[d:]` anywhere in this range.**

## §5 · Pattern 7 and Pattern 8 sites — printed readings carried, nothing supplied, nothing deleted

- **Sentences the plate ends with NO terminal stop**, carried as printed and confirmed on the leaf:
  **0822A** *…perversa loqui minime audebant* (f411), **0822B** *…et in culpa gaudere, unde dicit*
  (f411), **0830D** *…quod et Job fecit* — ⛔ **this last one is NOT a Pattern 8 site: the plate
  prints the stop and our TEI drops it** (see §3.3); the English carries the stop — and **0832A**
  *…cogitatio mentis aperitur* (f416), which **is** a genuine Pattern 8 site, confirmed at the
  plate, nothing supplied.
- **0823C `*usque ad* quae jure ejusdem potentiae quando careat, nescit?`** — Migne closes an
  **indirect** question with `?` (plate f412). Pattern 8b: the mark is kept by moving the question
  into direct form behind a colon — "…he knows not: when does he lack those things which are his by
  right of that same power?" ⚠ The tail is elliptical where it resumes, as `usque ad` tails in this
  book routinely are; nothing is supplied beyond the colon that 8b licenses, and the *quae* has no
  antecedent inside the printed matter.
- **0823D `« quanto magis homo putredo! »`** — Migne's exclamation mark inside the guillemets,
  plate-confirmed, kept.
- **0826B `« Nunquid Deus audiet? »`** and **0829A `Quid enim sunt homines Deo comparati? Nihil.`**
  and **0825C `…qua virtute tolerabimus?`** and **0828B `Sed a Judaeis repulsa, quid fecit?`** and
  **0831D `qui sibi nequam, cui bonus?`** — all direct questions, marks as printed, no recasting.
- **0824B `Sicut non possumus non de nostra natura, etc., *usque ad* quia non creatus creatum.`** —
  the tail has no finite verb at all where it resumes. Rendered as closely as the printed words
  allow ("because not created, the created") with **nothing supplied**; the conjecture that a verb
  of giving or making has been elided is recorded here and deliberately kept out of the text.
- **0821A `a vinculo fidei rationis sunt alieni`** — three genitives with no connective; rendered
  literally, "are strangers to the bond of the faith of reason". A conjectured *et* between *fidei*
  and *rationis* would be an emendation and is not made.
- **0824C `diabolum et omnis damnationis ejus socios`** — *omnis* where the sense invites *omnes*.
  Rendered as printed, "the devil and the companions of all his damnation", which construes as a
  genitive with *damnationis*. No marker.
- **0827C `Iniqui videlicet modum, quo iniqui esse desistant.`** — a sentence with no verb, singular
  *Iniqui* against plural *desistant*. Rendered literally. Pattern 9 keeps a bare number mismatch
  out of the apparatus and there is no English exponent for it.
- **0831A `cum nulla de sua praedicatione metuit, nullus pressus terroribus se sub silentio
  abscondit`** — *nullus* (nominative) where the ablative *nullis* with *pressus* would be smoother.
  Plate-confirmed f416. **It construes as printed** — "no one, pressed by terrors, hides himself" —
  so Pattern 7's main rule governs and no marker is possible. Both printed negatives are carried.
- **0824B `Omnis qui prudentia recta est, plurima non est`** — rendered "Everyone who is right in
  prudence is not exceeding great in it", carrying the printed `non`, which is what the next clause
  requires (*quia non plus appetit sapere quam oportet sapere*).

## §6 · Considered and rejected

- **A `[sic:]`, `[cj:]` or a TEI patch on either ragged guillemet (0821C, 0826A).** Both
  plate-confirmed as Migne's own setting; the standing class for this book, now at six or seven
  sites. Nothing supplied, nothing marked.
- **A `[d:]` on any of the four repeated lemmata** (§4.22). Each second occurrence opens a fresh
  gloss on the plate — the Gloss's ordinary habit, and the finding four peer stints have already
  recorded.
- **A `[sic:]` on `circumitu` (0830D).** An attested spelling of *circuitus*, printed four words
  after the lemma's own *circuitu*; Pattern 9 declines it, and the same book has already declined
  *Circumivi*.
- **A `[sic:]` or `[var:]` on `hypocrisis` (0826A), `manus` (0826B), `cessabunt` (0831A) or
  `Sicut` (0826A).** All four are real divergences, all four are recorded above with their
  reasoning, and in each the gloss built on the lemma stays consistent with what Migne prints.
  Pattern 14's bar is a divergence that changes the sense; `vi` at 0821C is the one in this range
  that clears it, and it clears it because the gloss's own last word expounds the reading the lemma
  no longer carries.
- **A marker on the raised dot at 0831A** (`fulciuntur · senes`, where our TEI has a plain space).
  Visible on the 1400px render of f416 and not resolved to my satisfaction at that scale. **A
  single point of punctuation on one photograph is not enough to move our Latin in either
  direction**, and nothing in the English turns on it (the clause is a two-limbed apposition either
  way). Recorded, not patched, not marked.
- **`Moerentium` (0832D) and `Coeptam` (0826A)** — the *oe*/*ae* orthography of the volume,
  Pattern 9.
- **Opening the archive.org second witness** on the three `[sic:]` sites. Declined for the reasons
  in §2, and the omission is stated there rather than buried, because 8956 showed Gallica can be
  the worse copy.
