# 11535 — cruces, chunks 0005–0009 (cols 1241C–1254A)

Richard of St Victor, *De eruditione hominis interioris*, PL 196. Agent range: chunks
0005, 0006, 0007, 0008, 0009. Entries give **column · printed reading · what was done · why.**

---

## A. The *animus* / *spiritus* collision — 0005 @1244A (flagged in the launch brief)

**Printed:** *…quod meminit se prius per **spiritus sui** impetum statuisse? Multa enim …
quae prius **ex animi impetu**, et quasi praecipitanter definivit … et multa saepe **ex eodem
spiritus sui impetu** homo contra conscientiam suam dictat, et tamen **eamdem animi sui**
praecipitationem … temperat.*

**What was done:** both words rendered **spirit**, per the fixed vocabulary table, with no
disambiguating gloss and no marker.

**Why — and this is the point:** the collision here is **benign, and the table is what makes
Richard legible.** The sentence turns on *eodem* and *eamdem*: Richard is explicitly asserting
that the *spiritus sui impetus* and the *animi impetus* are **the same impulse**, and that the
*animi praecipitatio* is **the same headlong rush**. Rendering the two words differently
("mind"/"spirit", or "soul"/"spirit") would silently deny the identity his own correlatives
assert, and the reader would meet two faculties where Richard has one. So the one-English-word
outcome the table produces is not a loss here; it is the reading. No tension to escalate.

(For the record, the four sites in order: 1244A *per spiritus sui impetum* → "through the
impulse of its own spirit" · *ex animi impetu* → "out of the impulse of its spirit" ·
*ex eodem spiritus sui impetu* → "out of that same impulse of his spirit" ·
*eamdem animi sui praecipitationem* → "that same headlong haste of his spirit".)

⚠ Note for the merge: *mens* is kept visibly distinct as **mind** throughout this range
(0005 *studiosa mens*, *compuncta mens*; 0006 *devota mens*; 0007 *mens studiosa*), and *anima*
as **soul** (0008 @1248D *in amaritudine animae meae*; 0009 @1252B *anima diu multumque
oppressa*). No flattening anywhere in the range.

---

## B. Markers placed

### B1. `[sic: *doctrinam*]` — 0005 @1242C
**Printed:** *prius saecularium, postea spiritalium **doctrinam curam** deponit.*
**Done:** "first lays aside the care of secular, afterwards of spiritual **teachings**
[sic: *doctrinam*]".
**Why:** *saecularium … spiritalium* require a genitive plural; *doctrinam* is an accusative
singular standing beside a second accusative, *curam*, and has no grammatical slot (Pattern 12,
test 1). **Corpus control run:** `doctrinam curam` occurs **once in 87M words of PL TEI — here**;
`doctrinarum curam` occurs in 11535, in this very chapter's own head six lines above
(*tam saecularium quam spiritalium **doctrinarum** curam deponit*). The plate contradicts itself
on the same column-block, which settles it.
**7a⁗ check:** the clause keeps its verb (*deponit*) and its object (*curam*); the lexeme the
quarantine removes is supplied in plain words ("teachings") beside the marker, so nothing of the
sense sits inside the marker.
**Declined:** a `data/tei-patches/11535.json` entry. A patch corrects markup, never words, and
there is no markup defect here — only a reading. Left to Pattern 12.

### B2. `[sic: *alios*]` — 0009 @1252B
**Printed:** *In eamdem sententiam currit, quod **alios** idem Propheta de vitiorum exstirpatione,
vel virtutum plantatione **cavit**.*
**Done:** "…that which the same Prophet [sic: *alios*] took heed of concerning…"
**Why:** *alios* is a bare masculine accusative plural with no noun to agree with and no verb to
govern it; it cannot be rendered in place. The near-certain reading is *alias* ("elsewhere") —
and **the plate itself supplies the internal control**: one column later, at 1253B, Richard
writes exactly the parallel formula with the right word, *quod **alias** psallit*.
**Corpus control:** `alios idem Propheta` and `alias idem Propheta` both return **zero** files in
the PL TEI, so the corpus is silent; the decisive evidence is the internal one at 1253B.
**7a⁗ check:** verb (*cavit*), negation (none) and conjunction (*quod*) all remain outside the
marker.

### B3–B9. `[var: …]` — the Vulgate-divergence list

See section C, which is the deliverable.

---

## C. THE VULGATE-DIVERGENCE LIST (7a″)

Every italic span named in the launch brief was worked through word by word against the received
text, plus every unitalicized continuous quotation in the range (Pattern 14 has no formatting
precondition). **Marked** = a `[var: …]` fired. **Logged** = a real divergence, rendered as
printed, judged immaterial. **Resisted** = Migne agrees with the received text and the instinct to
"improve" was refused.

### Marked (6)

| col | Migne prints | received text | marker |
|---|---|---|---|
| 0005 @1243D | *Scimus quia **regnum coelorum intra nos** est* | Luke 17:21 *regnum Dei intra vos est* | `[var: Vulg. Luke 17:21 …]` — the subject noun differs (*coelorum* for *Dei*), and *nos* for *vos*. Adduced with *Scimus quia* as a proof-text for the interior kingdom, so it functions as a citation. Rendered "the kingdom of heaven is within us." |
| 0008 @1248D | *et vide tunc ubi **prostrata sis**, meretrix* | Jer. 3:2 *vide ubi **non** prostrata sis* | `[var: Vulg. Jer. 3:2 …]`. **The highest-value entry in the range.** The clause is a composite: *Leva in circuitu oculos tuos* is Isa. 49:18 (Migne's own `[n:]`), but *vide … ubi prostrata sis* is Jer. 3:2 — **and the received text's *non* is not printed here.** Rendered without the negative, per Pattern 7a; the marker names what the received text carries. Whether Richard dropped it deliberately for the rebuke or the plate lost it is a research question the marker refuses to answer (Pattern 14: "never speculate about why they differ"). |
| 0008 @1249A | *Omnia fac cum consilio, et **in aeternum** non poenitebis* | Eccli. 32:24 *Fili, sine consilio nihil facias, et **post factum** non poeniteberis* | `[var: Vulg. Eccli. 32:24 …]`. Both halves diverge: a positive imperative for the received prohibition, and *in aeternum* for *post factum* — "never repent" vs. "not repent after the deed", which is a materially larger promise. The negative *non* is printed and is carried ("unto eternity thou shalt not repent"). |
| 0009 @1252B | *Ejecisti gentes, et plantasti **eos**, afflixisti populos, et expulisti eos* | Ps. 43:3 *Manus tua gentes disperdidit, et plantasti eos* | `[var: Vulg. Ps. 43:3 …]`. **This is the *eam*/*eos* seam the brief flagged, and it is a conflation, not a variant reading.** The opening clause *Ejecisti gentes* is lifted verbatim from Ps. 79:9, quoted eight lines earlier in the same paragraph (where its object is the vine, *eam*); the remainder is Ps. 43:3, whose object is masculine plural *eos*. Migne's `[n:]` reads *(ibid.)* — i.e. it binds the second quotation to Ps. LXXIX, the first one's reference. **Richard's gloss hangs on the second half, not the first**: *Odiosus ille vitiorum **populus** … expellitur* glosses *afflixisti **populos**, et expulisti **eos*** — so the English keeps "peoples … them" and the marker carries the opening-clause divergence. |
| 0009 @1252D | *O altitudo **sapientiae et scientiae Dei*** | Rom. 11:33 *O altitudo **divitiarum** sapientiae et scientiae Dei* | `[var: Vulg. …]`. A whole noun is absent — the depth is of *the riches of* the wisdom in the received text. Also absent: *sunt* in *quam incomprehensibilia sunt judicia ejus* (logged, not marked). The `!` is printed once, at the end, where the Vulgate puts one after *Dei*; **Pattern 8 governs: one `!`, where Migne prints it, and no second one supplied.** |
| 0009 @1253B | *Omnia autem nuda, et aperta sunt oculis **Dei*** | Heb. 4:13 *oculis **ejus*** | `[var: Vulg. Heb. 4:13 …]`. A noun for the pronoun. Marked because the naming is the point of the citation in context (Richard is arguing that *God* knows the dark places), so the divergence and the argument coincide. |
| 0009 @1253D | *Tibi, Deus patrum **meorum** confiteor* | Dan. 2:23 *Deus patrum **nostrorum*** | `[var: Vulg. Dan. 2:23 …]`. Marked because **the my/our seam is exactly what Richard's gloss is about**: the whole close of CAPUT XIV turns on Daniel saying *dedisti **mihi*** and then *aperuisti **nobis***, and on *Praecipuus ordo charitatis bona communia praeferre privatis*. A first-person-singular *meorum* at the head of the verse changes the shape of the seam the exposition reads. |
| 0009 @1254A | re-quote: *Et nunc ostendisti **nobis** quae rogavimus te* | the lemma at 1253D, and Dan. 2:23, both print *ostendisti **mihi*** | `[var: Vulg. Dan. 2:23 …]`. **An internal divergence: the plate quotes its own lemma against itself, twelve lines apart, on the one word the chapter's argument turns on.** Rendered as printed in both places, and both printings marked so the reader can see the plate disagreeing with itself rather than suspecting our transcription. |

*(That is eight rows; "6" above counts distinct marker sites — 1253D and 1254A are two markers on
one textual crux.)*

### Logged, rendered as printed, no marker (immaterial or non-scriptural)

| col | Migne | received | why no marker |
|---|---|---|---|
| 0005 @1241B | Dan. 2:12 *rex … **praecipit*** | Vulg. *praecepit* | Present for perfect. Tense, not sense; a historic present narrates the same event, and Richard's own gloss two lines later supplies the perfect (*perire decrevit*). It is also a one-letter *i*/*e*, the commonest orthographic slip class. **Declined deliberately** — Pattern 14 fires on divergence that changes the sense, and marking tense shifts would put a marker on a large fraction of the corpus. |
| 0005 @1242B | Dan. 2:13 ***Quaerebanturque** Daniel et socii ejus* | Vulg. *et quaerebantur Daniel* | Enclitic for the conjunction. No sense change. |
| 0005 @1243B | Dan. 2:15 ***Cum ergo** rem indicasset* | Vulg. *Cumque rem indicasset* | Connective substituted. Watched carefully because "connective smoothed" is 7a's mechanism 3 — but the smoothing that rule forbids is **ours**; here it is Migne's printed word and it is rendered ("When therefore"). |
| 0005 @1243B | Dan. 2:14 *interrogavit eum qui **a rege acceperat potestatem*** | Vulg. *qui a rege potestatem acceperat* | Word order. |
| 0005 @1243C | Eph. 6:12, woven: *non est nobis colluctatio adversus carnem et sanguinem, **sed adversus** spiritualia nequitiae in coelestibus* | Vulg. interposes *adversus principes et potestates, adversus mundi rectores tenebrarum harum*, then *contra spiritualia* | An abridged allusion inside Richard's own sentence, not a quotation offered as proof-text. Every printed negation (*non*) carried. |
| 0006 @1244C | Ps. 6:8 *Turbatus est **a furore** oculus meus* | — | ⚑ **See "resisted", below — this one is exact.** |
| 0006 @1245D | Dan. 2:15 re-quote *quam ob causam tam crudelis sententia **a facie esset regis** egressa* | the lemma at 0005 @1243B prints *a facie **regis esset** egressa* | Internal word-order variance between the plate's two printings of one verse. Immaterial; logged for the record because the brief asked the two printings be compared. |
| 0008 @1248B | Dan. 2:17 *Et **ingressus** domum suam, **Ananiae, Misaeli, Azariae** sociis suis* | Vulg. *Et ingressus **est** domum suam, **Ananiaeque et** Misaeli **et** Azariae* | Dropped copula and dropped conjunctions in a name list. No sense change. |
| 0008 @1249A | 1 Cor. 11:31 ***Si nos ipsos** dijudicaremus* | Vulg. *Quod si **nosmetipsos** dijudicaremus* | Emphatic weakened; *Quod* dropped at the quotation's opening, which is ordinary citation practice. **Both negations (*non utique judicaremur*) carried.** |
| 0008 @1250B | Dan. 2:19–20 *Et **Daniel benedixit Deo** coeli* | Vulg. *Et benedixit Daniel **Deum** caeli* | Word order plus *benedicere* + dative for + accusative. The dative is standard liturgical/Old-Latin construction, not a defect; rendered "Daniel blessed the God of heaven". |
| 0008 @1250C | Eccl. 1:16 *Praecessi **sapientia omnes** qui fuerunt ante me* | Vulg. *praecessi **omnes sapientia** qui fuerunt ante me **in Jerusalem*** | Word order; the closing *in Jerusalem* is outside the quotation Richard takes. |
| 0008 @1249D | Dan. 2:19 *Tunc Danieli **per visionem nocte** mysterium revelatum est* | Vulg. *Tunc Danieli **mysterium per visionem nocte** revelatum est* | Word order. Unitalicized. |
| 0009 @1251C | 1 Cor. 4:7 *Quid **enim** habes* | Vulg. *Quid **autem** habes* | Connective. (Migne's own `[n:]` reads *(I Cor. XIV)* for chapter 4 — his citation, reproduced verbatim; see D3.) |
| 0009 @1252C | Eccli. 1:1 *et **cum eo** fuit semper* | Vulg. *et cum **illo** fuit semper* | Pronoun form. |
| 0009 @1252D | Rom. 11:33 *quam incomprehensibilia judicia ejus* | Vulg. *quam incomprehensibilia **sunt** judicia ejus* | Dropped copula; the English supplies the English copula because English cannot omit it. |
| 0009 @1253B | 1 John 1:5, unitalicized: *Deus lux est, et **in eo tenebrae non sunt ullae*** | Vulg. *et **tenebrae in eo** non sunt ullae* | Word order. Negation carried. |
| 0009 @1253B | Richard's own re-quote *sed ait, et **cum eo lux** est* against the lemma's *et **lux cum eo** est* (1252C) | — | Internal word-order variance in the clause he is at that very moment interrogating. Rendered so the reader sees it: "and light is with him" in the lemma, "and with him is light" in the re-quote. |

### Pulls RESISTED (Migne agrees with the received text; the instinct to "improve" was refused)

1. **0006 @1244C — *Turbatus est a furore oculus meus*.** My first reflex bound this to Ps. 30:10
   (*conturbatus est **in ira** oculus meus*) — which would have been catastrophic here, because the
   entire chapter Richard has just written distinguishes ***furor*** from ***ira*** (0005 @1241D:
   *Furor est perturbatio mentis, totius expers rationis. Ira est mentis perturbatio magna, sed a
   ratione non penitus aliena*). **Checked: this is Ps. 6:8, where the Vulgate reads *a furore*
   exactly.** Migne is right, my memory was wrong, and *furore* is the word the argument needs.
   No marker, nothing changed. **The most instructive site in the range.**
2. **0008 @1248D — Isa. 38:15 *Recogitabo tibi omnes annos meos in amaritudine animae meae*.**
   Exact. The familiar English ("I shall go softly all my years") is a different verse tradition
   entirely and was not allowed near it.
3. **0008 @1248D — Ps. 115:12 *Quid retribuam Domino pro omnibus quae retribuit mihi?*** Exact,
   `?` and all. Kept the `?` Migne prints (Pattern 8).
4. **0008 @1248D — Isa. 49:18 *Leva in circuitu oculos tuos*.** Exact. The pull was to complete
   the verse (*et vide: omnes isti congregati sunt*) because Richard's next words are *et vide* —
   they are **not** Isaiah's, they are the Jeremiah half (see C, row 2), and completing the
   Isaiah verse would have buried the divergence.
5. **0008 @1250C / 1250D — Ps. 33:4 and Ps. 15:7.** *Magnificate Dominum mecum, et exaltemus nomen
   ejus in idipsum* and *Benedicam Dominum qui tribuit mihi intellectum*: both exact.
6. **0008 @1250C — Ps. 80:4 *Buccinate in neomenia tuba in insigni die solemnitatis vestrae*,**
   unitalicized and unnoted. Exact.
7. **0009 @1251B — Dan. 9:5 and Dan. 9:19.** *Peccavimus, iniquitatem fecimus, impie egimus, et
   recessimus, et declinavimus a mandatis tuis ac judiciis* and *Exaudi, Domine; placare, Domine;
   attende, et fac*: both exact, including the semicolons.
8. **0009 @1252C — Dan. 2:21–22, the *Dat sapientiam sapientibus* block.** Exact through
   *et lux cum eo est*, which is the clause the next column interrogates.
9. **0009 @1252C — Jas. 1:17.** Exact (*de sursum* / *desursum* is spacing only).
10. **0009 @1253A / 1253B — Ps. 50:8, Ps. 118:18, Ps. 30:5, Ps. 13:3, Ps. 7:10.** All five exact.
    On Ps. 118:18 the pull was Douay's "**Open** thou my eyes"; rendered **"Unveil mine eyes"**
    instead, because *Revela* is the very word the whole column is expounding (*Revelat profunda
    et abscondita* six times over) and "open" shares no root with it. Pattern 17: *tuos*/*tua*
    singular → *thine/thy* throughout.
11. **0008/0009 — Dan. 2:20–21 printed TWICE (0008 @1250B, 0009 @1251B), as the brief asked
    be compared.** ✅ **Word for word identical between the two printings.** The only difference
    is comma placement — 0009 adds a comma after *sapientia* and after *regna*. Both English
    renderings are therefore word-for-word identical and mirror the plate's commas. Also compared
    against the Vulgate: agrees, except that the Vulgate closes a sentence after *ejus sunt* where
    Migne runs on with *et ipse mutat* (punctuation, carried as printed).

---

## D. Passages that will not construe, rendered as closely as the printed words allow

1. **0007 @1247A — *Sed, ut omnes communiter et sollicitudine efficimus, alia orando, et Deo
   supplicando precibus obtinemus.*** The correlative is broken: *alia … alia* is wanted and only
   the second *alia* is printed, leaving *efficimus* without an object. Rendered "But, as we all in
   common effect things by carefulness too, other things we obtain by prayers, by praying and
   beseeching God." **Declined `[cj:]`** — it is a correlative, which is inside Wilson's 2026-08-15
   bar, but the defect is an **absent word with no printed word to open the gloss on** (`[cj:]`
   requires Migne's printed word first, verbatim in the twin, and *alia* here would be glossing the
   surviving half of the pair, not the lost one). Flagged as a **census candidate**: if the
   convention is ever extended to a missing correlative whose surviving half is a bare *alia*, this
   is the site.
2. **0008 @1248C — *et de praesentibus **se** explicare*.** Governed by *possimus*, so *nos* is
   wanted; *se* strands a third-person reflexive in a first-person-plural run. Rendered literally
   ("and extricate oneself from present ones"). **Declined `[cj:]`** — a person anomaly, explicitly
   outside the bar (11064 @1154C precedent).
3. **0008 @1250C — *Neomenia, nova luna, nova luna **intelligenti** innovata, et divinitus
   aspirata.*** *intelligenti* is dative/ablative where the equation the sentence is making wants
   nominative *intelligentia* ("the new moon is understanding renewed"). Rendered "the new moon,
   renewed for the understanding and divinely inspired." **Declined `[cj:]`** — case anomaly, not
   a negation or correlative. Census candidate.
4. **0009 @1252B — *cavit* for *cecinit*.** *cavit* is a real word occupying the verb slot, so no
   `[sic:]` (Pattern 12: it renders in place); rendered "took heed of". **Corpus control:**
   `Propheta … cecinit` is a common formula in the PL TEI (five hits in the first sample alone);
   `Propheta … cavit` returns none. The conjecture *cecinit* is near-certain and lives here, not in
   the text. Declined under the bar. See B2 for its neighbour *alios*, which **is** marked.
5. **0009 @1251C — *nunc harum, illarum virtutum*.** The second *nunc* is not printed, though the
   exactly parallel sentence at 1252A prints it (*qui nunc harum, nunc illarum virtutum*).
   Rendered as printed ("now to the exercises of these virtues, of those"). Declined — a dropped
   adverb, not a negation.
6. **0009 @1253C — *Praecipuus ordo charitatis bona communia praeferre privatis.*** No finite
   verb; *est* is not printed. Rendered as the printed ellipsis ("The chief order of charity, to
   prefer common goods to private ones"), **with no bracket of any kind** — an ellipsis supply is
   plain text or nothing, and here it is nothing.

## E. Conjectures DECLINED — census candidates, named as the brief asks

| col | printed | conjecture | why declined |
|---|---|---|---|
| 0006 @1245C | *sed etiam **nunc** quidem, quando aliquid per impudentiam … ordinat* | *tunc* (answering *non … tunc tantum* in the same sentence) | The correlative pair is *non tunc tantum … sed etiam*; *nunc* weakens it but does not invert it, and the sentence still asserts what Richard wants. Not a negation. Rendered "but even now indeed". **The closest call in the range**, since the ruling does reach correlatives — declined because the *non* itself is printed and carried, so nothing is lost or reversed. |
| 0006 @1244D | *zelum quidem rectitudinis **generantes**, sed secundum scientiam non habentes* | *gerentes* (Rom. 10:2 *zelum Dei habent, sed non secundum scientiam*) | **Corpus control:** `zelum … generantes` occurs once in the PL TEI — here. But *generantes* is a real participle in a real slot and renders ("begetting a zeal of rectitude"); the *non* is printed and carried. Person/lexis, not negation. |
| 0007 @1246C | *et hoc est sapientes ante conspectum regis **amittere*** | *admittere* | ⚠ **The strongest declined site in the range, and it is worth a second reader.** Richard has just said that the vice is *sapientium neminem coram rege audere apparere*; the remedy he is prescribing is that the spirit **flee to discretion**, which should bring the wise men *in*, not lose them. As printed the sentence says the opposite of the clause it is the remedy for. It has the exact shape Pattern 18 was written for — but *amittere*/*admittere* is neither a negation nor a correlative, and Wilson's 2026-08-15 bar is explicitly not to be widened by the agent. Rendered literally ("and this is to lose the wise men before the king's sight"). **Corpus control:** both *regis amittere* (2 files) and *regis admittere* (1 file) exist in the PL TEI, so the corpus does not settle it. **If the [cj:] bar is ever revisited, start here.** |
| 0007 @1247D | *ne sub concitati furoris impetu divina **eum** pietas … permittat* | *eam* (the antecedent is *devota mens*, feminine) | Rendered "him". **Not** exempt under Pattern 9: that exemption covers participles, adjectives and possessives, which carry no English gender — a **pronoun does**, and rendering "it" would silently re-bind the reference (7a mechanism 5). Declined as a conjecture; rendered as printed. |
| 0007 @1248A | *si magnanimitatem nostram pro amore ejus … vincamus* | *pusillanimitatem*? | Rendered "our own magnanimity". Not obviously wrong: Richard may mean the self-reliant greatness of spirit that presumption feeds on, which the whole chapter is against. Merely uncertain, so it stays here (Pattern 18's closing proviso). |
| 0008 @1250C | *Quod multi sunt qui cum lumen veritatis accipiunt* | *Quia* / *Nam* | *Quod* for a causal is attested medieval Latin (Pattern 9). No marker, no crux weight; noted only so a later reader does not re-raise it. |

---

## F. Vocabulary calls — for ratification across the whole work

1. ⭐ ***fortitudo* = "fortitude"**, not "strength". It is not in the brief's table but it occurs
   four times in this range, all inside Dan. 2:20 / 2:23 (*quia sapientia et fortitudo ejus sunt*;
   *sapientiam et fortitudinem dedisti mihi*), which is quoted **three times** across 0008 and
   0009 and which Richard then expounds at length (0009 @1251C, the whole *sapientia et
   fortitudo* paragraph). "Fortitude" is also the Douay reading, and it keeps **strength** free
   for *virtus corporis* (below). **Please ratify or overrule for the whole work before merge** —
   this word will recur.
2. ***virtus corporis* rendered "the strength of the body"** (0009 @1251D), against the table's
   *virtus* = virtue. Followed my own judgment here and am logging it as the table instructs: the
   phrase is physical vigour in a list of the ages of man, no gloss hangs on it, and "the virtue
   of the body is more robust" would read as a moral claim in a work whose spine word is
   *vir virtutum*. **Everywhere else in the range *virtus* is "virtue"** (0009 @1252A *virtutes
   regnare facit*, *diversarum virtutum efficaciam*, etc.) — this is the single exception.
3. ***sacramentum* = "sacrament", *mysterium* = "mystery"** (0008 @1248B, @1249B–1249D). They
   **collide** if *sacramentum* is rendered "mystery", and they collide in adjacent sentences:
   Richard's argument at 1249B is *that Daniel calls the matter a **sacramentum**, whence a
   **mystica** understanding must lie hidden in it* — and four lines later *mysterium revelatum
   est* begins a whole page on *mysterii revelatio*. Kept apart. The etymological hook
   (*sacramentum* → *mysticam*) is weaker in English than in Latin; the alternative loses the
   distinction entirely, which is worse.
4. ***spiritalis* / *spiritualis* both = "spiritual".** The plate alternates them freely within one
   sentence (0005 @1241C *spiritalium … spectaculorum*, @1242C *spiritalium doctrinam*, beside
   @1242D *spiritualia exercitia*). Pattern 9 orthography; no marker, no crux.
5. **Fixed-table words honoured against instinct, for the record:** *eruditio* → **instruction**
   (0005 @1242D *sacrae eruditionis studia*; 0006 @1246A *ad nostram eruditionem* — "chastening"
   is plainly the sense at 1246A, sitting in a list with *correctionem, correptionem,
   damnationem*, and the table's ruling that the sentence carries it was followed). *industria* →
   **effort** (0007 @1247C *supra humanam industriam*; 0008 head XIII *non nostram industriam*).
   *impudentia* → **shamelessness** (0006 @1245C). *praesumere* → **presume** (0007 @1248A;
   0009 @1252C).

## G. Punctuation and structure carried under Pattern 8 — all deliberate, none to be "fixed"

1. **0006 head — `## CAPUT IX *Quod quidquid…*` prints NO period after the numeral**, where
   CAPUT VII, VIII, X, XI, XIII and XIV all do. **0008 head — `## CAPUT XII` likewise.** Preserved
   in the English heads exactly (`## CHAPTER IX *That whatever…*`, `## CHAPTER XII *With what…*`).
2. **0006 @1246A — *Daniel ingressus rogavit regem Quid est autem praedicta illa…*** No terminal
   stop between the closing re-quotation and the next sentence. **No period supplied**; the English
   runs on identically ("…asked the king But what is that aforesaid…"). This will look like our
   defect and is not.
3. **0006 @1246B — the chapter ends on a question (*Quid est … nisi … agnoscere*) that Migne
   closes with a PERIOD.** No `?` supplied. Same at 0009 @1253B (*Sed quid sibi voluit quod dicit,
   et lux cum eo est.*) — a direct interrogative, closed with a period, carried as a period.
4. **0005 @1243C — *(rigor videlicet; et severitas justitiae)*** — a semicolon inside a
   parenthetical gloss. Preserved: "(namely rigor; and the severity of justice)".
5. **Question-mark and exclamation parity verified per chunk against the Latin twin**: 0005 8/0,
   0006 3/0, 0007 5/0, 0008 7/0, 0009 8/1. Column anchors 12/8/7/12/12 and `[n:]` 2/0/0/11/16, all
   matching frontmatter.

## H. Migne's own citations, reproduced verbatim and NOT corrected

Flagged only so a later reader does not mistake them for our binding errors. Three `[n:]`
references in this range do not point where their text lives, and all three are reproduced exactly
as printed (the `[n:]` verbatim rule; and per the runbook's false-positive 2, an antecedent a
following *(ibid.)* depends on is never "corrected"):

1. **0008 @1248D — `[n: (Psal. XCVIII)]`** on *Feci judicium et justitiam*, which is Ps. 118:121.
2. **0009 @1251C — `[n: (I Cor. XIV)]`** on *Quid enim habes, quod non accepisti?*, which is
   1 Cor. 4:7.
3. **0009 @1253B — `[n: (Psal. XII)]`** on *Scrutans corda et renes Deus*, which is Ps. 7:10.
   And **@1252B `[n: (ibid.)]`** binds a Ps. 43:3 text to the preceding Ps. LXXIX — the *(ibid.)*
   whose divergence is marked in section C.
