# 11535 — cruces, chunks 0010–0014 (PL 196, cols 1254B–1263C)

Richard of St Victor, *De eruditione hominis interioris*, Book I, CAPUT XV–XIX.
Range: `src/english/11535/0010.md` … `0014.md`. Entry form: **column · printed reading ·
what I did · why.**

---

## 1. Markers placed

### 1254B · *secretioria* · `[sic: *secretioria*]`
Printed *secretioria aequitatis arcana* where the comparative is *secretiora*.
**Control run:** `grep -rlF` over the 5,276 PL TEI files — **`secretioria` 2 files
(11535, 11787) against `secretiora` 107 files.** A form that occurs twice in 87M
words is the plate's, not the language's. Carried untranslated in italics under
Patterns 7/10/12; the English reads "the [sic: *secretioria*] secrets of equity".
**7a⁗ check:** the marked run is an attributive adjective — it carries no verb, no
negation, no conjunction, and the clause's predicate (*quaerere*) and its object
(*arcana*) are both outside the quarantine. No sense is supplied beside it, and none
is needed. Conjecture: *secretiora*, "the more secret".

### 1256B · *ita que* · `[sic: *ita que*]` — **the weakest marker in this range; say so**
Printed `Quidam ita que sunt qui nunquam nisi…` — *itaque* split across a space.
**Controls run, three of them:** (a) `"ita que "` across all 5,276 TEI files returns
**0 files** — the string does not exist in the corpus outside this site, where our
chunker joined a line break into a space; (b) the TEI carries **no line-final hyphens
at all** (`grep -c -- '-$' 11535.xml` = 0), so the transcriber's convention is to rejoin
hyphenation, and a surviving split is anomalous; (c) a scan of every line-boundary in
11535.xml for a short line-final token joining a following `-que/-tur/-tio/-bus`
suffix returns **exactly one hit in the whole work: this one.** Unique at this site,
against a convention that elsewhere holds.
⚠ **The honest weakness:** the split lives on a TEI *line break* (`ita`↵`que`), so it
is equally consistent with Corpus Corporum having failed to rejoin one hyphenated
word. Our source is the TEI, not the plate, and I could not check the plate. If a
plate read ever happens on col. 1256B and shows *itaque* set whole, this marker should
be withdrawn and the line rejoined silently — it would be a source artifact
(Pattern 13's family), not Migne's type.
**7a⁗ check:** *itaque* is a discourse connective and the quarantine is the size of the
whole lexeme (7a⁗-b). Its force is therefore supplied **in plain words beside the
marker**: "There are certain men, **then** [sic: *ita que*], who…". Nothing else in the
clause was inside the quarantine.

### 1259A · *scipsos* · `[sic: *scipsos*]`
Printed `qui scipsos inglorios vident` for *seipsos* — broken type, the familiar
Migne *e*→*c*. **Control:** `scipsos` = **2 files** corpus-wide (11535, 7266);
`seipsos` = **631 files**. Carried untranslated.
**7a⁗ check:** the run is a reflexive pronoun object. The clause keeps its verb
(*vident* → "see"), its predicate (*inglorios* → "without glory") and its following
negation (*videri non refugiunt* → "do not shrink from being so seen"). The English
supplies "themselves" in plain words beside the marker so the clause still has an
object — no brackets, per the brief's ten-marker rule.

---

## 2. The Vulgate-divergence list — `[var: …]` fired (6)

Every italic span named in my launch message was read word by word against the
received text before the English was written. Six diverged materially.

### 1256A · Dan 2:19 · `[var: Vulg. *per visum nocte*, "by a sight in the night"]`
Migne prints *Tunc Danieli **per visionem** nocte mysterium revelatum est*; the
Vulgate has *Tunc Danieli mysterium **per visum** nocte revelatum est*.
**Material, and material to this work specifically:** Richard's whole exposition runs
on the *somnium* / *visio* distinction (fixed vocabulary table: "keep them apart —
Richard argues from the difference"), and the sentence he is glossing is the one that
gives him *mysticae visionis notitiam*. The received text's *visus* would not carry
that hook. Word order also differs; not separately marked.

### 1256D · 1 Pet 3:15 · `[var: Vulg. *de ea, quae in vobis est, spe*, …]`
Migne prints *parati semper … ad satisfactionem omni poscenti rationem **et ea quae in
nobis est fide, et spe***. The received text reads *ad satisfactionem omni poscenti
**vos** rationem **de ea, quae in vobis est, spe*** — no *fide*, *vobis* not *nobis*,
*de* not *et*, and *vos* dropped. Introduced by *quemadmodum scriptum est* and carrying
its own `[n: (I Petr. III)]`, so Pattern 14 fires squarely.
**Declined alongside it:** the printed *et* for *de* is a real word in a real slot —
*ea … fide, et spe* construes as an ablative of accompaniment ("and with that faith and
hope which is in us"), which is how the English renders it. Under Wilson's 2026-08-15
bar a `[cj:]` is available only where the wrongly-printed word is a **negation or a
correlative**; *et* is neither. Declined, named here as a census candidate.

### 1257B · Dan 2:25 · `[var: Vulg. *annuntiet*, "may announce" …]`
The lemma prints *qui solutionem regi **significet***. The Vulgate has *annuntiet* —
**and so does Richard**, three times, in his own exposition of this very verse at
1257D (twice) and 1259A. The divergence is therefore internal to the plate as well as
external to it, which is what makes it material rather than cosmetic: the word the
commentary expounds is not the word the lemma prints. The English keeps *significet*'s
"may signify" in the lemma and "may announce" in every re-quotation, exactly as printed.

### 1259D–1260A · Dan 2:28 · `[var: Vulg. *tibi, rex Nabuchodonosor* …]`
The lemma prints *qui indicavit **tibi Nabuchodonosor** quae ventura sunt novissimis
temporibus*; the Vulgate has *indicavit tibi, **rex** Nabuchodonosor*. Same shape as the
entry above: Richard's own re-quotation at **1261A restores the title** — *Qui indicavit
tibi, **rex** Nabuchodonosor* — and then builds a whole argument on the verse's other
words (*non ait quae ventura sunt tibi, sed quae ventura sunt novissimis temporibus*).
The same note records the second divergence in the lemma, **Migne's plural *in coelis*
against the received singular *in caelo***; that one is not sense-changing and would not
have earned its own marker.
*Also noted, not marked:* Migne sets *sapientes, magi, **et** arioli, et aruspices*
where the received text has no *et* after *magi*. A list connective; no sense at stake.

### 1261A · Luke 17:21 · `[var: Vulg. *regnum Dei*, "the kingdom of God" …]`
**The clearest divergence in the range.** Migne prints *Regnum, inquit Dominus,
**coelorum** intra vos est* with `[n: (Luc. XVII)]`. Luke 17:21 reads *regnum **Dei**
intra vos est*; *regnum coelorum* is Matthew's formula, not Luke's, and the note names
Luke. Rendered as printed ("The kingdom … of heaven is within you"), because Richard's
surrounding argument is explicitly about *regnum coelorum* — *Neque enim alibi quam apud
electos **regnum coelorum** suscitatur* — so conforming the lemma to *regnum Dei* would
have detached the proof-text from the sentence it proves.

### 1262A · Dan 2:29 · `[var: Vulg. *post haec*, "after these things"]`
Migne prints *cogitare coepisti in stratu tuo quid esset futurum **post te***; the
Vulgate has *post haec*. Material: "what should be **after thee**" is a statement about
the king's succession, "after these things" about the sequence of ages, and Richard's
gloss (*Quia de futuris studiose quaesisti*) leans on the futurity either way.
*Also in the same lemma, not marked:* *in **stratu** tuo* for the received *in strato
tuo* — a fourth-declension form of a second-declension noun, no sense at stake
(Pattern 9's neighbourhood).

### 1262C · Ps 37:11 · `[var: Vulg. *lumen oculorum meorum*, "the light of my eyes"]`
Migne prints *Et lumen **oculorum**, et ipsum non est mecum*, dropping the possessive.
Marked because the English then has to read "the light of **the** eyes, even that is not
with me", which is exactly the reading a translator's ear wants to repair back to "my
eyes" — the 7a″ pull, made visible rather than smoothed.

### 1262C · Job 29:2 · `[var: Vulg. *Quis mihi tribuat, ut sim juxta menses pristinos*, "the former months"]`
Migne prints *Quis mihi **det**, ut sim juxta **dies** pristinos?* Two divergences, one of
them material: **months → days**. Richard adduces the verse for *ad pristinam gratiam
aspirabat*, and the English keeps "the former days" as printed.

---

## 3. The pulls I resisted — lemmata where Migne agrees and my instinct wanted to "improve"

Recorded as positive evidence, per the brief.

1. **1254B · Dan 2:24** (*Post haec Daniel ingressus ad Arioch …*). Agrees with the
   received text word for word, including *introduc me **in conspectu** regis* — the
   ablative, which reads like a slip for *in conspectum* and is not one. **The pull was
   real and it has a witness:** twenty lines later at **1256A Richard himself re-quotes
   it as *in conspectum regis*, accusative**, and at 1259C back to *in conspectu*. Both
   forms stand as printed in the English; no marker, since the sense is identical and
   the lemma is the form that agrees with the Vulgate.
2. **1255B · Ps 111:5** (*Jucundus homo qui miseretur et commodat…*) — exact. Wanted the
   Douay cadence "Acceptable is the man"; the printed *Jucundus* is "pleasant", and that
   is what the English says.
3. **1256B · Job 3:24** (*Antequam comedam suspiro…*) — exact, *tanquam* for *tamquam*
   being orthography only.
4. **1256C · Ps 38:4** (*Et in meditatione mea exardescet ignis*) — exact; traditional
   "shall flame out" allowed under the scripture-echo licence because the Latin matches.
5. **1258A · Dan 9:5** (*Peccavimus, iniquitatem fecimus…*) — exact, all five verbs and
   both objects.
6. **1258B · Ps 43:16** and **1258C · Ps 43:18** — both exact. The second carries two
   printed negations (*nec obliti sumus te*, *inique **non** egimus*) and both are in the
   English.
7. **1260B · Ps 50:8**, **Ps 77:2**, **1260B · Jer 1:11**, **Jer 1:13** — all four exact.
   *Ollam succensam* wanted the Douay "boiling caldron"; rendered "a pot set burning",
   which is what *succensam* says.
8. **1260D · Dan 2:35** (*Lapis autem qui percusserat statuam, factus est mons magnus, et
   implevit universam terram*) — exact, **and printed in roman, not italic.** Resisted
   the pull to italicize it into a lemma; the plate does not, so neither do we.
9. **1261C/1262A · Dan 2:28b and 2:30** (*Somnium tuum, et visiones capitis tui…*;
   *Mihi … non in sapientia quae est in me plus quam in cunctis viventibus…*) — both
   exact. 2:30 also carries a **printed italic boundary that English wants to close up**:
   Migne sets *Mihi* **autem** *quoque non in sapientia…*, with *autem* in roman outside
   the quotation. The two italic runs are preserved 1:1 ("*To me* moreover *too, not in
   the wisdom…*") even though it reads awkwardly.
10. **1262B · Ps 102:8–9** (*Miserator, et misericors Dominus…*) — exact, both negations
    (*non in perpetuum*, *neque in aeternum*) carried.
11. **1262C · Ps 73:9** (*Jam non est propheta, et nos non cognoscet amplius*) — exact,
    both negations carried.
12. **1262C · Ps 118:18** (*Revela oculos meos…*) — exact.
13. **1263B · Matt 10:8** (*Gratis accepistis, gratis date*) — exact. Second person
    **plural**, so "you", not "thou", per Pattern 17 — inside a chapter that is otherwise
    addressing one reader as *tu* throughout. The switch is the source's and is visible
    on the page.

### Divergences noticed and deliberately NOT marked (sub-material)
- **1258C · 1 Cor 4:4** — Migne prints *Nihil mihi conscius sum* without the received
  *enim*. A dropped connective, no sense at stake.
- **1260C · Jer 1:6** — Migne prints *A, a, a, Domine, nescio loqui*; the received text
  has *A, a, a, Domine **Deus**, ecce nescio loqui, quia puer ego sum*. Treated as an
  **abbreviated citation** rather than a divergent one — Richard quotes only as far as he
  needs, which is the norm throughout this work — so no marker. Named here as a declined
  site in case a later census wants it.
- **1262B · Ps 76:8–9** — Migne prints *Nunquid in aeternum projiciet Deus, **et** non
  apponet…? **Aut** in finem…?* against the received *…projiciet Deus? **aut** non
  apponet…*. Migne fuses the psalm's first two questions into one by swapping the
  connective and deleting a question mark. Rendered exactly as printed (one question,
  then a second), **both printed `?` preserved and none supplied** (Pattern 8). Declined:
  a connective swap plus repunctuation, with the *non* intact in both witnesses.
- **1263B · 1 Cor 4:7** — *Quid **enim** habes* for the received *Quid **autem** habes*.
  Connective only.
- **1259B · 1 Cor 2:15**, **1262D · Rev 2:5 + Luke 10:41**, **1262D · Ps 9:38** — four
  scriptural sentences woven into Richard's own prose, **printed in roman with no note**.
  The most interesting is 1 Cor 2:15: Migne prints *Spiritualis **enim dijudicat** omnia*
  where the received text has *Spiritualis **autem judicat** omnia* — and the verb has
  been conformed **to Richard**, whose immediately preceding clause is *omnia discutit,
  omnia **dijudicat***. Rev 2:5 likewise prints *priora opera fac* for the received
  *prima opera fac*. Both rendered as printed; no `[var:]`, because none of the four is
  adduced as a proof-text or set off as a quotation — Pattern 14 is for scripture quoted
  **as** scripture. Named as declined sites.

---

## 4. Conjectures DECLINED — census candidates, by name

Under Wilson's 2026-08-15 bar (`[cj:]` only where the wrongly-printed real word is a
**negation or a correlative**) every one of these stays out of the text. All are real
Latin words in real grammatical slots; all are rendered literally.

- **1254D–1255A · *suspicere*.** *Cum locum magisterii sive ex praecepto, sive pro officio
  **suspicere** oportet* — the sense the sentence needs is *suscipere*, "to take up"
  (and Richard writes *docendi locum **suscipimus*** eight lines later, and *ad tantae
  gratiae **susceptionem*** at 1257D). *suspicere* is a real verb, "to look up to", and
  the English says so: "When the place of mastery must be **looked up to**…". Neither a
  negation nor a correlative → declined. **Control:** `officio suspicere` occurs in
  **1 file** corpus-wide (this one); `officio suscipere` in 2. That control is too thin
  to carry weight either way, and *suspicere*/*suscipere* interchange is itself attested
  in medieval orthography (Pattern 9 territory) — which is a second reason not to mark it.
- **1261A · *praefectis*.** *…non uni alicui tantum, sed pluribus, seu etiam **praefectis**
  pene omnibus juxta aliquid convenire queat* — almost certainly *perfectis*, "the
  perfect", which is the class Richard has been describing and which *praefectis*,
  "prefects", is not. Rendered literally ("or even almost all prefects"). Declined:
  a noun substitution, not a negation or correlative. **This is the site in my range most
  likely to be wanted if the bar is ever widened.**
- **1257B · *Daniel **ad** Arioch manuducitur*.** The whole exposition has Daniel led *by*
  Arioch (*ab Arioch … introducitur*, 1257B, twice). Printed *ad*. Rendered literally
  ("Daniel is led by the hand **to** Arioch"). A preposition, declined.
- **1263B · *devotione* (ablative).** *Si igitur **devotione** gratis accipimus* — the
  argument wants the accusative *devotionem* ("if we receive devotion freely"), which is
  what the preceding sentence establishes (*ipsam devotionem … ex munere largientis
  accipimus*) and what the apodosis needs (*id quod **ejus** merito obtinemus*). Rendered
  on the printed ablative: "If therefore **by** devotion we receive freely…". Case
  anomaly, declined.
- **1256C · *tam*.** *quando meditationibus nostris **tam** divina revelatio occurrit* —
  reads as *jam*. Rendered on *tam* ("when **so** divine a revelation occurs"). Declined.

---

## 5. Passages that would not construe, and other judgment calls

- **1257B · *Optimus autem pene modus compunctionis qui surgit ex consideratione districti
  examinis.*** No finite verb printed. The English supplies "is" as **plain text with no
  brackets** (a grammatical ellipsis supply, per the brief's ten-marker rule), and nothing
  else. No marker, no `[ed:]`.
- **1254D · *fierique defendit*.** In *devotio saepe iniquum esse invenit, **fierique
  defendit**, quod violentus animi impetus … fieri decrevit*, *defendere* has to be the
  medieval "forbid" (cf. French *défendre*), against the classical "defend" — which would
  make devotion defend the very thing it has just found iniquitous, and would contradict
  the parallel *Daniel … fieri **prohibuit*** three lines above. Rendered "forbids its
  being done". Flagging the call because it is a lexical choice, not a rendering of an
  obvious word, and a later reader may want to revisit it.
- **1256A · the mid-sentence full stop.** Migne prints *alii in sua oratione, alii in sua
  meditatione**.** alii autem in ipsa sua saepe locutione, revelationem divinam
  accipiunt* — a period inside the sentence, followed by lowercase *alii*. **Preserved
  exactly**, period and lowercase both (Pattern 8: never delete a mark he prints).
- **1258C · no stop after the note.** Migne prints *…in testamento tuo [n: (ibid.)] Sed
  cum inter instantia flagella…* with **no terminal punctuation** between the quotation
  and *Sed*. Mirrored: the English also runs the note straight into "But when…". Never
  supplied.
- **1258B · *Nonne … gemebat, qui dicebat: …cooperuit me.*** A *Nonne* question that
  Migne closes with a **period, not a question mark**. Preserved as a period. This is the
  one place in the range where an English ear insists on a `?` and does not get one.
- **1259A · the anchor inside the marked run.** Latin sets *qui scipsos [1259A] inglorios
  vident*. The English keeps marker and anchor in printed order —
  `see themselves [sic: *scipsos*] [1259A] without glory` — rather than moving the anchor
  to a tidier English boundary.

---

## 6. Vocabulary — where I followed the table against my own judgment, and where the work
needs a ratification

**Followed the fixed table without exception.** *mens* = mind, *animus* = spirit,
*anima* = soul, *cor* = heart, *somnium* = dream, *visio* = vision, *gradus* = step,
*detrimentum* = decline, *virtus* = virtue, *industria* = effort, *studium* = zeal,
*praesumere* = presume, *impudenter* = shamelessly, *liberum arbitrium* = free will.
**No *spiritus* occurs anywhere in 0010–0014**, so the *animus*/*spiritus* collision the
brief warns about (chunks 0005 and 0034) does not arise here; *animus* is "spirit"
throughout with no competitor on the page.

Two places where the table cost something and I followed it anyway:

- **1256D · *ad tantam **eruditionem** profecisse*** → "have advanced to so great an
  **instruction**". The sentence wants "learning" or "attainment"; *eruditio* is the
  title word and is fixed as "instruction", so "instruction" it is. It reads better at
  1258D (*modo ad eruditionem, modo ad probationem … flagellamur* → "now for instruction,
  now for testing"), which is presumably why the table was set that way.
- **1259B · *subtilis* of a hair.** *Est autem capillus capitis … longus admodum atque
  **subtilis*** — natural English is "fine" or "slender", but the etymology gloss for
  **Balthasar** hangs on it: *subtilis profunditas, et profunda **subtilitas** mentis*,
  *ad omnem **subtilitatem** exacuit*, *ad miram **subtilitatem***, *subtilia penetrare*,
  *subtiliter disserere*. Rendered **"subtle" everywhere**, including of the hair, so the
  gloss still explains something. Same reasoning as the *stylus*/*epistylium* precedent.

**Calls I set for this range and would like ratified for the whole work** (all five are
words that recur far beyond my chunks):

| Latin | my English | why |
|---|---|---|
| *scientia* | **learning** | frees "knowledge" for *cognitio*, which stands beside it in CAPUT XVI's own head and body (*mysteriorum **cognitio** proficit* … *ad quantam **scientiae** perfectionem*). Flattening both to "knowledge" would do to this chapter what 11536 did to *mens*/*animus*. |
| *notitia* | **cognizance** | the chapter's whole architecture is a ladder — *Danielis notitia* → *sociorum* → *regia notitia* — and it needs a word distinct from both of the above. |
| *enodatio* / *solutio* | **unravelling** / **solution** | Richard glosses the lemma's *solutio* **by** *enodatio*, so they must stay two words. |
| *magisterium* | **mastery** | one root for both *locum magisterii* ("the place of mastery") and *devotionis magisterio* ("by the mastery of devotion"), which Richard plays against each other at 1259D. |
| *mentis excessus* | **excess of mind** | the standing Victorine term; not modernized to "ecstasy". |

## 7. Proper names — one call that a reader will notice

**Migne's *Judae* / *Judas* is rendered "Judas", not "Juda(h)."** Dan 2:25's *de filiis
transmigrationis **Judae*** is genitive and could be either; but at 1258A Richard prints
the nominative outright — ***Nam et Judas confitens interpretatur*** — in order to gloss
it, and the brief requires that the Latin name an etymology explains stay visible so the
gloss still explains something. Following the plate's own nominative, the English reads
"the sons of the transmigration of **Judas**" at all five occurrences and "For **Judas**
too is interpreted *confessing*". ⚠ It will read oddly to anyone expecting Douay's "the
children of the captivity of Juda", and a reader may momentarily think of Iscariot.
Flagging it rather than deciding for the whole work: if a later agent finds Richard
using *Juda* elsewhere, this range should be swept to match.

Related, and *not* a defect: **Migne prints both *Hierusalem* and *Jerusalem* within four
lines at 1258A–B** (*quasi de **Hierusalem** ad Babylonem* … ***Hierusalem** namque visio
pacis* … *de **Jerusalem** in Babylonem*, and *de **Jerusalem** in Babylonem captivatus*
at 1257D). Both spellings are carried into the English exactly where they stand. Pattern 9.

**Etymology glosses, all three in this range, handled per the brief** — translated, with
the Latin name kept visible beside them: *Judas* = *confessing* (1258A) · *Hierusalem* =
*a vision of peace*, *Babylon* = *confusion* (1258A) · *Balthasar* = *a hair of the head*
(1259B). *confusio* is then held to "confusion" for the rest of the chapter — *locum
**confusionis***, *injustae **confusionis** opprobrio*, *illam **confusionis** suae
captivitatem*, and Ps 43:16's ***confusio** faciei meae* — so the etymology keeps paying
out where Richard makes it pay.

---

## 8. Left unresolved

1. **The *ita que* marker at 1256B** — plate-checkable, and should be checked. See §1.
2. **1261A *praefectis*** — the strongest declined-conjecture site in the range; wanted by
   name if the `[cj:]` bar is ever widened past negations and correlatives.
3. **0010's word ratio is 1.63** (verifier warn; corpus target ~1.5). It is not padding:
   the chunk is a dense chain of *quando*/*quasi*/*ejusmodi* subordination and of
   ablative abstracts (*ex magna animi devotione*, *intima perscrutatione*, *rectitudinis
   zelo*) that English cannot carry in fewer words without paraphrase. Recording it so a
   later reader does not read the number as a symptom.
4. **Not mine, but seen while verifying:** `0008.md` carries
   `[var: Jer. 3:2 *vide ubi non prostrata sis* …]`, which fails `verify-english` check 11
   because a `[var: …]` must **open** with the witness name (`Vulg.` | `LXX` | `Gk` |
   `Heb.` | `Douay` | `Vet. Lat.`). Reordering it to `[var: Vulg. Jer. 3:2 …]` clears it.
   Flagged for whoever holds 0005–0009.
