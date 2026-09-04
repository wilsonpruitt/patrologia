# 8967 *Glossa ordinaria*, Liber Psalmorum — cruces, chunks 0059–0063 (BAND B, stint 5)

Range: `src/latin/8967/0059.md`–`0063.md`, cols **0967C–0981A**. Psalms **LXXVII–LXXX**
(Ps 77 across three chunks, then Ps 78, 79, 80). Lemma brief: `data/briefs/8967-lemmata-0059.txt`.

⚠ **This file is one stint's range. It must be merged into `src/english/8967/cruces.md`.**

---

## §0 · SPAN COUNT RECONCILIATION (the required check)

My brief's header declares **352 spans** for chunks 0059–0063. Counting `*…*` in my own Latin:

| chunk | italic spans |
|---|---|
| 0059 | 101 |
| 0060 | 78 |
| 0061 | 52 |
| 0062 | 79 |
| 0063 | 42 |
| **total** | **352** |

**The totals AGREE (352 = 352)**, and the brief's entries are the same spans in the same order —
I walked the two lists against each other, not merely the counts. **This brief was split correctly.**
No head-of-range shortfall, no tail spill. The English carries 352 spans outside markers, 1:1 and in
place, in all five chunks (`verify-english.mjs 8967` reports no error on any of them).

⚑ **Two of the 352 are span-boundary artefacts of Migne's italics, not lemma boundaries**, and I
reproduce them rather than tidying them:
- **0974B** `*usque ad opprobrium* enim [0974B] *sempiternum dedit illis.*` — the abridgment formula
  and the verse it splices into are ONE run in Migne's type, broken by an unitalicised `enim` and by
  the column turn. English keeps two spans in the same two places, which costs readability
  (`*as far as: reproach* indeed [0974B] *everlasting he gave to them.*`). Rendered as printed.
- **0974B** `*Unam petii a Domino, hanc requiram. Sanctificium.*` — Migne's italic swallows the NEXT
  lemma (`Sanctificium`, Ps 77:69) into the Ps 26:4 quotation. One span in Latin, one in English.
- **0975C** `*Visitabo peccata patrum … generationem [n: (Ezech. XVIII.)] Antiquarum.*` — same shape:
  the quotation's italic runs on past its own note and swallows the lemma `Antiquarum`.

---

## §1 · MARKERS FIRED — 20 `[var:]`, 2 `[sic:]`, no `[d:]`, `[ed:]`, `[cj:]`, `[nt:]`

`plate-gate.mjs 8967` returns **gate OK**: every one stands on a column I opened this session (§3).

### 1a. The two `[sic:]`

1. **`[sic: facti]` @0968D (0059)** — Migne prints *Ephraim fuctus est **facti** columba insipiens,
   non habens cor* for Os 7:11 *factus est Ephraim **quasi** columba seducta*. `facti` is a real
   Latin form (nom. pl. / gen. sg. participle) standing where the verse needs `quasi`, and it has
   **no grammatical slot at all** between a singular verb and a singular predicate: Pattern 12's
   test 1. Marked, not rendered away — the rest of the lemma is Englished around it, so the clause
   keeps its verb, its subject and its object (7a⁗, and its fourth question).
   ⚑ **The neighbouring word is worse and I could NOT mark it.** The plate reads **`fuctus`**, a
   non-word; our TEI carries `factus`, i.e. CC repaired it. `[sic:]` may wrap only type the twin
   carries, so the marker is **unlocked by the patch, not by me** — reported as patch site A1.
2. **`[sic: tribu]` @0971C (0060)** — Migne prints *Manus ejus et de manu **tribu**;* — the
   compositor's truncation of *tribulationis*, and the plate confirms it letter for letter with the
   semicolon. The clause keeps its sense (*quae multum differunt*, of the two hands), and the hole
   where the object should be is **Migne's hole**, so nothing is quarantined that the plate supplies.

### 1b. The twenty `[var:]`, in order

**Chunk 0059**
| col | lemma as Migne prints it | Clementine |
|---|---|---|
| 0968A | *Charitas, quae **pellit** timorem* | 1 Jo 4:18 *perfecta caritas foras mittit timorem* |
| 0968C–D | *Omnia, quaecunque **dixerit nobis Dominus**, faciemus et **audiemus*** | Ex 24:7 *Omnia quae locutus est Dominus, faciemus, et erimus obedientes* |
| 0968D | *Ephraim … **insipiens*** (and `facti` for `quasi`) | Os 7:11 *quasi columba **seducta*** |
| 0968D | *Beneficiorum.* | Ps 77:11 *benefactorum* |
| 0969B | *De peccato quidem, quia non **credunt** in me* | Jo 16:9 *quia non **crediderunt** in me* |
| 0970A | *…et non creditis **mihi**, quomodo **si dico** vobis coelestia?* | Jo 3:12 *et non creditis : quomodo, si **dixero** vobis caelestia, **credetis**?* |

**Chunk 0060**
| col | Migne | Clementine |
|---|---|---|
| 0971A–B | *Et non **dispersit** eos.* | Ps 77:38 *et non **disperdet** eos* — different verb AND tense |
| 0971B | *Spiritus vadens et non **revertens*** | Ps 77:39 *non **rediens*** |
| 0971B | *Omnes qui **ambulant in ea** non revertentur* | Pr 2:19 *qui **ingrediuntur ad eam*** |
| 0971C | *De manu **tribulationis*** | Ps 77:42 *de manu **tribulantis*** |
| 0971D | *Cynomia.* | Ps 77:45 *coenomyiam* |
| 0972B | *Thanis,* | Ps 77:12, 43 *Taneos* |
| 0973B | *Non **erunt tibi dii alieni*** | Ex 20:3 *Non **habebis deos alienos coram me*** |
| 0974A | *Et percussit **iniquitatem**.* | Ps 77:66 *percussit **inimicos suos in posteriora*** |

**Chunk 0061**
| col | Migne | Clementine |
|---|---|---|
| 0975C | *Visitabo **peccata** patrum in filios, **usque** in tertiam et quartam generationem* | Ex 20:5 *visitans **iniquitatem** patrum in filios, in tertiam et quartam generationem* (Migne cites Ezech. XVIII, which is the PREVIOUS quotation's book) |

**Chunk 0062**
| col | Migne | Clementine |
|---|---|---|
| 0976D | ***Intellectus** pro his qui commutabuntur.* | Ps 79:1 *In finem, pro iis qui commutabuntur* |
| 0977C | ***Ascendit Deus** super nubem levem* | Is 19:1 *Ecce **Dominus ascendet** super nubem levem* |
| 0979A | *…**ut** plenitudo gentium intraret* | Rom 11:25 *…**donec** plenitudo gentium intraret* |
| 0979A | *…nisi ut **ardeat**?* | Lc 12:49 *nisi ut **accendatur**?* |

**Chunk 0063**
| col | Migne | Clementine |
|---|---|---|
| 0979B | *Exsultat Deo.* | Ps 80:2 *Exsultate Deo adjutori nostro* |
| 0980B | ***Erit** hic in ruinam, et resurrectionem multorum* | Lc 2:34 *Ecce **positus est** hic in ruinam et in resurrectionem multorum **in Israel*** |
| 0980C | *Erravimus a via veritatis, et **sol justitiae non illuxit** nobis* | Sap 5:6 *justitiae **lumen non luxit** nobis, et **sol intelligentiae non est ortus** nobis* |

### 1c. ⭐ SIX OF THESE ARE DIVERGENCES THE GLOSS ITSELF DEPENDS ON

The launch brief asks specifically for these. Six of the twenty are load-bearing: **conform the
lemma and the exposition built on it collapses.**

1. **0979B `Exsultat Deo` (Ps 80:2).** Migne prints a **third-person singular indicative**; the
   Clementine has the **second-person plural imperative** *Exsultate*. The gloss immediately under
   it reads *Asaph … electos ad celebritatem **incitat*** — Asaph **stirs the elect up** to the
   feast, which is a gloss on a command, not on a report. **A conformed lemma would leave the gloss
   commenting on a sentence Migne does not print.** Plate-confirmed at 400 dpi (p. 495).
2. **0971C `De manu tribulationis` (Ps 77:42).** The Clementine's *tribulantis* is a **participle**
   ("the hand of him that afflicted them"); Migne prints the **noun** *tribulationis*. The gloss:
   *Tribulatio solet esse in memoria, sed non eis* — it expounds **tribulation as a thing**, which
   only Migne's noun licenses.
3. **0971D `Cynomia` (Ps 77:45).** The Clementine has *coenomyiam*, κοινόμυια, the *common* fly.
   Migne's form carries **κυνο-, dog** — and the entire gloss is three words long: ***Canini mores
   sunt.*** "They are dog-like manners." Conform the lemma to *coenomyiam* and the gloss becomes a
   non sequitur.
4. **0971B `Spiritus vadens et non revertens` (Ps 77:39).** Clementine *rediens*. The gloss plays on
   Migne's stem twice in one sentence — *per gratiam **revocat*** … *per se **redire** non possunt*
   … *non **revertentur*** … *per gratiam **revocabuntur***. The *revert-/revoc-* chain is the
   argument.
5. **0976D `Intellectus pro his qui commutabuntur` (Ps 79:1).** Migne's titulus reads
   **`Intellectus`** where the Clementine reads **`In finem`**. The gloss's very next words are
   *Asaph. **Illuminatus** agit de adventu Christi* — Asaph glossed as **enlightened**, i.e. read
   straight off *Intellectus*. ⚑ **This is also an exception worth recording against §A1.1**: the
   Band A ruling (`In finem` → "Unto the end") is not in play here, **because Migne does not print
   `In finem` at this titulus at all.** Plate-confirmed (p. 493).
6. **0980C `sol justitiae non illuxit nobis` (Sap 5:6).** The Clementine has TWO clauses,
   *justitiae **lumen** non luxit nobis* and ***sol intelligentiae** non est ortus nobis*; Migne
   **fuses them into `sol justitiae`** — and that fused phrase is the hinge of the whole paragraph,
   which is expounding *Samson interpretatur **sol** eorum* and which adduces Mal 4:2 *Sol justitiae
   est* in the very next sentence as the pair to it. **The conformed reading would break both ends
   of the chain at once.**

---

## §2 · THE SPANS I CHECKED AND DID **NOT** MARK — with the words, not a tally

A findings list alone cannot be told from a report by an agent that never looked. These are the
divergences I found, named, and declined, with the reason for each decline.

- **`Quanta audivimus ab initio.` @0967C** — not in the Clementine as one sequence. It is the gloss
  **splicing Ps 77:3 (*Quanta audivimus*) to Ps 77:2 (*ab initio*)**, both of them this psalm's own
  words, quoted as "what Asaph said below". A conflation of two verses of the SAME psalm is not a
  divergence from either. No marker.
- **`finis legis ad justitiam omni credenti` @0967D** (Rom 10:4 *Finis enim legis, Christus, ad
  justitiam omni credenti*) — the gloss supplies *Christus* **outside** the italic span (*sed hic
  Christus, finis legis…*), so nothing is lost; an abridgment woven into the host sentence.
- **`Vade et dic domui exasperanti` @0968B** — Migne cites Ezech. II. Not verbatim anywhere: it
  conflates the *vade… loquere* of Ez 3:4 with the formula *domus exasperans* that recurs at
  Ez 2:5, 2:6, 3:9, 3:26, 12:2 and elsewhere. **There is no single received reading to name**, and a
  `[var:]` must name one. Declined.
- **`Non est creditus cum Deo spiritus ejus [n: (Joan. I)]` @0968B** — the words are **Ps 77:8
  itself**, verbatim; the citation `(Joan. I)` is Migne's misattribution. A citation tail, and the
  runbook's known-false-positive list covers it. Note passes through verbatim. No marker.
- **`Discite a me… [n: (Joan. VII.)]` @0969A** — Mt 11:29 verbatim (given our TEI's *Discite*), under
  a wrong book. Same class. No marker. ⚑ The **plate reads `Discit`** — patch site A2.
- **`Spiritus arguet mundum de peccato` @0969B** — Jo 16:8 has *arguet mundum de peccato* with
  *ille* as subject; Migne supplies *Spiritus* from his own frame. Supplying the subject a Gospel
  pronoun stands for does not change what is asserted. No marker.
- **`Nunquid poterimus de petra aquam vobis ejicere?` @0970C** — Nm 20:10 *num de petra **hac**
  vobis aquam poterimus ejicere*. Migne reorders and drops *hac*. **Order and a demonstrative only;
  sense identical.** No marker — but the English drops "this" with him ("out of the rock"), which is
  where a silent conformation would have crept in.
- **`Manna, quid est hoc?` @0970A** — Ex 16:15 prints *Manhu? quod significat : Quid est hoc?* The
  gloss is naming the word, not quoting the verse. No marker.
- **`Non omnem iram accendit` @0971B** — Ps 77:38 *et non accendit omnem iram suam*. **Word order and
  a dropped possessive**; the gloss's own next words (*non punivit eos quantum digni erant*) turn on
  neither. No marker.
- **`abstulit eos de Aegypto, et induxit eos in montem sanctificationis [n: (Gen. IV)]` @0971A** —
  the note resolves to Cain, four lines above, not to this quotation. **Known false positive** (an
  `Ibid.`-class note answering to the "wrong" antecedent). No marker.
- **`Propterea tradidit illos in reprobum sensum` @0972C** — Rom 1:28 *tradidit illos **Deus** in
  reprobum sensum*. Migne supplies *Propterea* and drops *Deus*, both to fit his own sentence. No
  marker.
- **`Primogenitum in Aegypto` @0972D**, **`In iram concita` @0973B**, **`Usquequo, Domine?` @0975A**
  — fragmentary lemmata cut mid-phrase, rendered as the phrase they stand for (convention 3). Not
  divergences.
- **`Injice pedem tuum in compedes ejus` @0976A** — Sir 6:25 *in compedes **illius***. A one-word
  pronoun swap with no change of sense; the settled single-word rule excludes it. No marker.
- **`Alias oves habeo…` @0977A** — Jo 10:16: Migne has *de hoc ovili* for *ex hoc ovili*, *ut fiat*
  for *et fiet*, and **omits *et vocem meam audient***. The omission is the recension's ordinary
  abridgment and the gloss argues from none of the three. Named here; no marker.
- **`Reminiscentur, et convertentur universi fines terrae` @0977B** — Ps 21:28 *…et convertentur **ad
  Dominum** universi fines terrae*. Migne drops *ad Dominum*; the gloss turns on *reminiscentur*
  (*ut jam illi venias in mentem*), which is untouched. No marker.
- **`Fidelis Deus, qui non patitur vos tentari…` @0977C and again @0977D** — 1 Cor 10:13 *Fidelis
  **autem** Deus **est**, qui non **patietur*** (future). Present for future, twice, consistently.
  The gloss uses it as a standing maxim either way. No marker; named because the tense is real.
- **`Flagellat enim omnem filium quem recipit` @0977C** — Heb 12:6 *flagellat **autem***. A
  connective. No marker.
- **`aspice` @0978D** — Ps 79:15 *respice de caelo, et vide*. A prefix swap with the same sense
  (*ad-*/*re-* + *spicio*); the settled letter-level exclusion applies. No marker, named.
- **`Domine Deus virtutum, converte nos, ostende faciem tuam…` @0979A** — Ps 79:20 has *et ostende*.
  A dropped conjunction. No marker.
- **`Sol justitiae est, et sanitas in pennis ejus` @0980D** — Mal 4:2 *orietur vobis timentibus nomen
  meum sol justitiae, et sanitas in pennis ejus*. Migne reduces the clause to a predication; the
  quoted words are the Vulgate's. No marker. (Its neighbour, Sap 5:6, **is** marked — §1c.6.)
- **`Clama ne cesses, ut tuba exalta vocem tuam` @0979C** — Is 58:1 *quasi tuba*. *ut* for *quasi*,
  same sense. No marker.
- **`Si spiritualia seminavimus vobis…` @0979C** — 1 Cor 9:11 *Si **nos vobis** spiritualia
  seminavimus, magnum est si **nos** carnalia vestra metamus*. Word order and two dropped pronouns.
  No marker.
- **`Qui facit peccatum, servus est peccati` @0979D** — Jo 8:34 *omnis qui facit peccatum*. A dropped
  *omnis*, absorbed by the gloss's *Peccata servilia opera sunt, juxta illud*. No marker.
- **`Grex tonsarum` / `ascendens de lavacro` / `sterilis non erat in eis` @0974B–C** — these three
  answer to Ct 4:2 (*greges tonsarum quae ascenderunt de lavacro … sterilis non est inter eas*), in
  the singular and in the imperfect. ⛔ **Declined deliberately:** Migne gives **no citation** and the
  words are woven into the gloss's own syntax as Augustine's paraphrase, not set as a quotation.
  A `[var:]` is a public claim that a QUOTATION diverges; this is not one. Named in full so a later
  reader can overrule me with the evidence in front of him.
- **`Ego sum, ego sum, et nemo alius` @0978D** — an allusion to Is 47:8/10 and Soph 2:15, verbatim in
  neither, and put in the mouth of "every proud man" rather than quoted. No marker.
- **Confirmed to AGREE with the Clementine word for word** (checked, not assumed): *Anima quae
  peccaverit ipsa morietur* (Ez 18:4/20), *Reliquiae salvae fient* (Rom 9:27), *Verbum caro factum*
  (Jo 1:14), *Vanum est vobis ante lucem surgere* (Ps 126:2), *Unam petii a Domino, hanc requiram*
  (Ps 26:4), *Ubi est Deus tuus?* (Ps 41:4/11), *Aqua contradictionis* (Nm 20:13), *Loquar
  propositiones ab initio* (Ps 77:2), and all thirty-odd single-word lemmata of Ps 77–80 checked
  in place against their own verse.

---

## §3 · THE PLATE — eight pages, sixteen columns, nobody had opened one of them

**0 of the work's 92 recorded reads fell in cols 0967–0982 before this stint. I opened all eight
pages (489–496) and read the printed corner numbers on every one before trusting the page map.**
All eight are now in `data/plate-reads.json`; seven are `depth: full` (collated word by word), the
eighth (`0981–0982`) is `read`, because col 0981 is clipped.

**15 departures of our TEI from Migne across 15 fully collated columns**, ~1.0 per column against
the band's running ~1.4. **The full list, with what each one does to the apparatus, is appended to
`data/briefs/8967-PENDING-TEI-PATCHES.md`** as sites A1–A4, B5, C6–C15. The four that matter here:

⭐⭐ **The plate WITHDREW a marker I would otherwise have fired.** @0973B our TEI prints
`qui non **ominus** jaculatur` — a non-word, and under Pattern 7/12 an obvious `[sic:]`. **The plate
reads `eminus`.** The non-word is Corpus Corporum's, not Migne's, so **no `[sic:]` is owed and
firing one would have accused Migne in public of a defect he does not have.** The English renders
*eminus*: "which does not shoot from afar". This is the single most valuable thing the plate did in
my range, and it is invisible from the Latin alone.

⭐ **The plate UNLOCKED four markers I cannot fire yet**, because `[sic:]` may wrap only type our
twin carries: `fuctus` @0968D, `Discit` @0969A, `proptes` @0973D, `Illuminatur` @0976D — four Migne
defects that CC silently repaired. Each becomes available the moment its patch lands.

⭐ **One CC-onto-Clementine move, the class no Vulgate collation can see.** @0973D the plate sets the
lemma **`Virtutum eorum`**; our TEI reads `Virtutem`, which is exactly Ps 77:61. Migne's genitive
plural is the reading his own gloss expounds (*virtutes abstulit in malis*). **A `[var:]` is
unlocked by the patch.** ⚑ **The English as filed renders our twin's `Virtutem` ("Their strength.")
and must change with the Latin** — flagged in the patch file too.

⚑ **One departure changes the English and I have flagged it in both places.** @0980A the plate reads
*sed jam **bene** siccata est* where our TEI reads *pene*: "well dried up" against "almost dried up".
Controlled at 6× against the descender-bearing `p` of *populorum* one line below and the `b` of
*turbabantur* on the same line, so the `b` is a set sort. The English currently renders *pene*.

### 3a. What I controlled, and against what — because a logged column is not a checked column
- **`fuctus` @0968D**: the suspect `u` was checked at 5× against the closed-bowl `a` of *facti*,
  *columba* and *Ephraim* **on the same printed line**. Without that control I would have been
  inventing the class the brief warns about.
- **`Illuminatur` @0976D**: controlled **on the facing column**, where 0977A prints *Asaph
  illuminatus* correctly. Both forms on one opening; the `-tur` is Migne's, not the scan's.
- **`bene` @0980A**: controlled against a known `p` and a known `b` on adjacent lines, per the h↔b
  hazard note. It is a `b`.
- **The italic-`e`-images-as-`c` hazard**: I hunted for it and found **no instance** in sixteen
  columns. A checked negative on a class that produced three false candidates in eleven columns for
  a peer stint.
- **`hunc panem, id est verbum` @0970A**: raised as a suspected CC insertion at 150 dpi and
  **withdrawn at 400 dpi** — Migne prints it. My own false candidate, recorded.
- **`deserit` @0973D** (*Sic deserit corpora nostra*): the standing *deservit*/*deserit* check. Plate
  reads `deserit`, our TEI agrees, and the accusative object settles it independently, since
  *deservio* governs the dative. Checked negative.
- **`Diapsalma` @0980B**: set **ROMAN**, unitalicised — a sixth plate confirmation of §A1.2, and my
  English follows it.

### 3b. The clipping question — three more counterexamples
**0981 is clipped** at the inner margin; **0967, 0969, 0971, 0973, 0975, 0977, 0979 are clean.**
Since **0969, 0973 and 0977 are each ≡ 1 (mod 4) and clean** while 0981 is ≡ 1 and clipped, this
stint adds three clean counterexamples **from a single gathering** to the rule Band A withdrew.
No marker of mine rests on a line-opening word in 0981, so nothing is withheld and no second copy
is needed for this range.

---

## §4 · CRUCES — passages rendered as printed, with what I checked

**§4.1 · @0968C — an affirmative where the lemma requires a negative. Plate-confirmed as Migne's.**
> *Non est creditus cum Deo spiritus ejus, id est, et si ratio bene suasit, ei acquievit.*

Rendered: "*His spirit was not trusted with God*, that is, and if reason persuaded him well, he
yielded to it." **The gloss as printed says the man DID yield to reason** — the opposite of the
lemma it is glossing and of the sentence three lines below (*quam fidem non habet generatio prava*).
The conjecture is *nec ei acquievit* or *ei non acquievit*. **Not repaired**: no word is translated
as its opposite and no negative is supplied. Plate read at 400 dpi (p. 489): Migne prints exactly
this. ⚑ **Checked at the SUBJECT level too, not only the negation level**: the subject of *acquievit*
is the man of *qui prave intellecta non corrigit*, not *ratio* and not *spiritus*; the dative *ei*
is *rationi*. The defect is the missing negative, and nothing else in the clause is wrong.

**§4.2 · @0970C — `Correcti` with no subject to agree with.**
> *Correcti post haec omnia graviora sunt peccata, quae semper accrescunt.*

*Correcti* is nominative plural masculine; the only nominative in the sentence is *peccata*, neuter.
Rendered as printed, with the participle left dangling: "Corrected after all these things, the sins
are the graver, which ever increase." No emendation; the anacoluthon is Migne's.

**§4.3 · @0970A — `non tentati Synagogae`, a gender mismatch with no English exponent.**
*Synagogae* is feminine and would take *tentatae*. **Pattern 9**: Latin grammatical gender has no
English exponent, so there is nothing to render either way and nothing to mark. Rendered "not to the
tempting Synagogue", against *credenti Ecclesiae* in the same clause. Logged so a later sweep does
not churn it.

**§4.4 · @0977C — a double negative that reads as one negative too many.**
> *Transit ira a servo, ut non flagellet ut patet, sed ne damnet.*

Rendered word for word: "Wrath passes from the servant, that he may not scourge, as is plain, but
that he may not condemn." **Both printed negatives are carried, each on the verb it stands before.**
The sense the paragraph wants is almost certainly *not* that wrath departs so as not to scourge —
the next clause says *conversis enim durat ira, sed corrigens*, wrath endures upon the converted as
a correcting wrath, i.e. it DOES scourge. The likely reading is that *ut patet* is parenthetical and
the first clause is being denied by the *sed*. **Rendered as printed; the conjecture stays here.**

**§4.5 · @0969A — `coram patribus novit`, two readings and neither settled.**
> *Sic Christus in terra positus coram patribus novit, humile mandatum docuit.*

Rendered "So Christ, set upon the earth, knew before the fathers, and taught the humble
commandment." *novit* may be "knew" or, less likely, a perfect of *nosco* used causatively ("made
known"), which the parallel with *docuit* would favour. **Both construe; I took the printed word at
its ordinary value and record the alternative rather than choosing silently.**

**§4.6 · @0980B — `et quia populus iste fremens nihil erat, nisi languidus peccator`.**
A *quia* clause with no main clause. Rendered as printed ("and because that roaring people was
nothing but a sickly sinner"), carrying both *nihil* and *nisi*. Migne's fragment, not ours.

**§4.7 · Unexpressed subjects I supplied, and what told me who they are.**
Every "he", "she", "it", "they" below is one the Latin does not print.
- **@0969C `dans prius quod, licet tentando, petebat`** — singular *petebat* after plural *petebant*
  one line above. The subject is **the people, taken collectively**, as *populus* throughout this
  psalm; rendered "what it was asking". Migne's number shift is preserved, not levelled.
- **@0970C `impedivit ne illis prodessent, quibus … cupiebant`** and **`compedivit ut cum eis
  molestias sustinerent electi`** — the subject of *sustinerent* is **`electi`, printed**, and the
  "them" they suffer with are the murmurers. Rendered so. (This is the exact shape Band A's blind
  read caught at the subject level, so I checked it twice.)
- **@0971A `Quia caro vel spiritus vadens`** — no verb and no subject. Supplied "they are", from
  **Ps 77:39 itself**, *recordatus est quia caro sunt*, which is the verse this gloss stands under.
- **@0974A `quando populum suum dedit in manus eorum, quos odit`** — the unexpressed subject of
  *odit* is **God**, the subject of *dedit* in the same sentence, and I rendered it so. ⚑ The rival
  reading ("whom his people hate", i.e. their enemies) also construes and is arguably the more
  natural sense. **Both work; naming the choice here rather than burying it.**
- **@0976B `Pia precatio, ne filios eorum projiciat, qui pro eo puniti sunt.`** — *qui* is
  nominative and *filios* accusative, so *qui* **cannot** attach to the children; it attaches to
  *eorum*, the martyrs. Rendered "the children of those who were punished for him". Grammar decided
  it, not sense.
- **@0975D `Per hoc nec ingratus est gratiae, nec tollit liberum arbitrium.`** — subject is the
  speaker of the verse, not God; "he" throughout.
- **@0977A `Hic psalmus Synagogae est testimonium de capite ipso, et corpore ejus.`** — *Synagogae*
  read as **possessive genitive** ("the testimony of the Synagogue"), against the dative reading
  ("a testimony TO the Synagogue"), which the preceding *commutatis … testimonium dat* would
  support. **Both construe; the genitive matches the psalm's own title (*Testimonium Asaph*) and
  Asaph's role as the Synagogue's voice throughout this psalm.** Named, not settled.

**§4.8 · Etymological wordplay that does not survive into English, deliberately not italicised.**
@0970D *unde fides dicitur quod fiant dicta* — *fides* from *fiant dicta*. Rendered "whence faith is
so called because the things said are done." ⛔ **I did NOT put the Latin words into the English**,
because every added italic span breaks the 352-span parity that is the only detector for a mis-split
lemma brief. The play is recorded here instead.

---

## §5 · CONVENTIONS — inherited, applied, and the one exception

- **`usque ad` → "as far as"**: **23 italic-set occurrences in my range, all rendered by the
  formula.** ⚑ **ONE exception taken, and here is the Latin that forced it:** @0974B *sic ab initio
  electionis Hebraeae gentis **usque ad** Christum procedit* — **not italic**, and a plain temporal
  extent. Rendered "down to Christ" per the italic-membership test, which is the test §A4 settles.
- **`Diapsalma` @0980B** — unanglicized, **roman**, not italic, not "Selah". Plate-confirmed.
- **`Dominus/Deus virtutum` → "God of hosts"** — §A5's ruling on *Dominus virtutum* applied to the
  five occurrences of `Deus virtutum` in Ps 79 (0977D×2, 0978D×2, 0979A). Plate-confirmed as
  Migne's at 0977–0978, on a page with zero departures.
- **`sedes` → "seat"** — @0970B *ut in suis sedibus … audiant* → "in their own seats". §A5.
- **Heads mirror the plate**: `PSALMUS LXXVII.` → `PSALM LXXVII.`, and **`PSAL. LXXVIII.` →
  `PSAL. LXXVIII.` is Migne's own abbreviation on p. 492 and is followed, not regularised** to
  `PSALMUS`. `(cont.)` on the repeated heads is the chunker's, not Migne's — known false positive.
- **`Psalmus Asaph` → "A psalm of Asaph"**, matching Band A's `Psalmus David` → "A psalm of David"
  (0017, 0024). Ps 80's Clementine titulus is *Psalmus **ipsi** Asaph*; Migne's lemma at 0979B is
  only `*Asaph,*`, so §A1.4's distinction is not engaged here.
- **The *gentes* axis, decided per site, with the sites named:** *gentes* @0973A (Ps 77:54, the
  Canaanite peoples) → **nations**; @0974D (Ps 78:1, the invaders of the inheritance) → **nations**;
  @0978A and @0979D (the Church gathered out of the nations, against the Jews) → **Gentiles**;
  @0978C (*invenerunt eam gentes*) → **nations**; *gentilis*/*gentiles* @0976A → **Gentiles**;
  singular *gens* of the Jewish people @0971A, @0974B, @0975B, @0977B → **nation**. **`ethnicus`
  does not occur, and "heathen" appears nowhere in my English** — consistent with Band A's 0.
- **`sacramentum` @0979A → "sacrament"** (*Grande sacramentum*); no *mysterium* in range, so the 1:1
  pair is untested here. **`diabolus` @0972C, @0978D → "devil"**; no *daemonium* in range.
- **Archaism**: the only `-eth`/`-est` forms in my English stand **inside italic scripture lemmata**
  (*Whosoever committeth sin is the servant of sin*; *he scourgeth every son whom he receiveth*;
  *suffereth you not to be tempted*). **The commentator's own voice is never archaised.** Checked
  against BOTH memberships per §A4 — there are **no « guillemets » anywhere in my range** (checked:
  zero in all five Latin chunks), so the italic test is sufficient here, and I say so rather than
  leaving it implied. ⚑ **The sweep caught one of my own**: @0971B I had written "a spirit that
  **goeth**" in the GLOSS's unitalicised re-quotation of its lemma (*Quia caro vel spiritus vadens*).
  The lemma itself two lines above is italic and keeps its *goeth*; the gloss's echo now reads
  "goes". Recorded because it is exactly the shape the italic test exists to catch.
- **Thou/you (Pattern 17)**: *thou* only where the Latin is singular (*tibi* @0973B, *tuis* @0977D,
  *te*/*tuo* throughout Ps 80's address to Israel, *Ubi est Deus tuus?* @0974A). *you* where the
  Latin is plural (*vobis* @0970A, @0977C, @0977D, @0979C). No reverence-driven *thou* anywhere.
- **Em-dashes: zero** in all five chunks.
- **Question marks**: 3 / 2 / 3 / 3 / 0, matching the Latin twin band for band. **One `?` was
  removed from inside a `[var:]` marker's quoted Vulgate text** so that no mark of ours can be
  counted against Migne's parity.

---

## §6 · FLAGGED FOR WILSON — not decided here

1. **`gens tenebrarum` does NOT occur in my range.** Checked; nothing to match or flag. Recorded
   because a silent absence and an unchecked absence look identical.
2. **@0973D `Virtutem` → `Virtutum` is a patch that MOVES THE ENGLISH.** If the patch lands, the
   English twin at 0973D must change from "*Their strength.*" to "*Of their virtues.*" Flagged in
   both this file and the patch queue so it cannot fall between them.
3. **@0980A `pene` → `bene` likewise moves the English** ("almost dried up" → "well dried up").
4. **@0979A `Super te fundatam` → `Super et fundatam` moves it a third time, and worse:** restored,
   the clause does not construe, and a `[sic: *et*]` or a `[cj:]` becomes live. **I rendered our
   twin's `te` rather than pre-empting the patch pass with a conjecture of my own.**
5. **A boundary I want ruled, not assumed: I translated the twin, except once.** Where our TEI
   carries a **CC-manufactured non-word** (`ominus` @0973B) I rendered the plate's `eminus`, because
   rendering the non-word would have required a `[sic:]` that publicly blames Migne. Everywhere else
   — including `Virtutem`, `pene`, `Super te` — **I rendered our twin as it stands and flagged the
   site**, on the Band A precedent that English twins change WITH the Latin in the patch pass.
   If that division is wrong, it is wrong in exactly four places and they are all named above.
