# 9001 *Evangelium secundum Marcum* (Glossa ordinaria, PL 114) — cruces, chunks 0015–0019

Stint of five chunks, **cols 0217B–0232C**, CAPUT X – CAPUT XIV (through VERS. 30 of CAP. XIV),
6,329 Latin words → 9,862 English (1.56×). One translator, Opus.

**Apparatus fired in this range: `[sic:]` 0 · `[var:]` 5 · `[cj:]` 1 · `[d:]` 0 · `[ed:]` 0 ·
`[nt:]` 0.** `[n:]` 157, at exact parity with the Latin twins.
`verify-english.mjs` clean for 0015–0019 (columns, notes, sections, no duplicate paragraphs).

**Mechanical checks run and clean, band by band** (column anchors partition both twins 1:1):
question marks (3·1·1·2·3), colons, semicolons (0·0·2·5·3), guillemets (zero in both languages),
italic spans, `[n:]` count and position, paragraph count. Every residual band delta is exactly the
content of a marker of ours and is itemised below. **Anchor POSITION** (brief test 2b) was checked
word-against-word for all 62 anchors: every one stands beside the same word as in the Latin.
The one loose case is 0224C, where Migne sets `δευτερώσεις [0224C] vocant)` and English word order
puts the verb first; the anchor is one word off inside the same parenthesis. Not moved.

⚠ **Range boundary, stated explicitly.** This stint is chunks 0015–0019 and **nothing past the
last line of 0019** — CAPUT XIV, VERS. 30, ending *et trinae negationis sordes lavit lacrymis* at
col. 0232C. Everything from `VERS. 32.-- *Gethsemani.*` onward (the Gethsemane glosses, all under
band 0232C) belongs to **chunk 0020 and another stint**. It was not translated, not collated, and
not checked here. ⛔ **Its absence from this file is not clearance for it.**

⚠ **Brief correction of 2026-09-03, and I re-did the count rather than trusting it.**
`data/briefs/9001-lemmata-0015.txt` was regenerated (split by chunk membership rather than by
column band), from **312 spans to 297**. Counting `*…*` spans in my own five Latin files gives
**73 + 48 + 53 + 42 + 81 = 297**, which agrees exactly. The correction dropped 15 tail rows that
were chunk 0020's and restored **two head rows** that the band split had pushed into the previous
stint's file; both are collated in **§2d** below.

---

## §0 · THE THINGS I MOST WANT A PLATE READ FOR

Ordered by value. None of these fired a marker; each is a candidate, per addendum A and the
ship test (B). ⛔ Attribution below is argued, never settled — 9004's stints guessed *whose* a
defect was wrongly 9 times in 14.

### 1. Three NON-WORDS, one per chunk, all singletons in the whole work

Addendum A's decisive class. Each is a form that is no Latin word; each occurs **once** in 9001;
in each case the work itself prints the correct form elsewhere, which is the 8995 *circumcicis*
control done in the affirmative direction.

| col | printed | wanted | control |
|---|---|---|---|
| **0224C** | *simpiliciter* | *simpliciter* | 9001 prints **`simpliciter` correctly five times elsewhere** — chunks 0008 and 0013 (outside this stint) and 0015, 0016 and 0019 **inside it**, the last at 0232C, *Alii simpliciter*, four columns away. Zero other `simpilic-` forms anywhere in `src/latin/`. |
| **0230B** | *juugitur* | *jungitur* | doubled *u*; no `juug-` form anywhere in `src/latin/`. |
| **0227B** | *praegnantibu.,* | *praegnantibus,* | a word truncated **with a period inside the phrase** — `Vae autem praegnantibu., etc.` No `praegnantibu.` anywhere else. |

**No `[sic:]` was fired on any of the three, deliberately.** Addendum A's measured result is that a
non-word suspicion is confirmed *as our corruption* — which makes `[sic:]`, a public claim against
Migne's plate, the wrong marker, and is exactly how eight of 9004's twenty-seven were withdrawn.
Each is rendered for its evident sense (*simply* · *is joined* · *them that are with child*) and
logged here. **If the plate carries the defect, a `[sic:]` belongs at that word; if the plate is
clean, a `data/tei-patches/9001.json` entry does. I cannot tell which from the file, and the
rendering is correct either way.**

⚑ **None of the three falls on a clipped column.** Under PL 114's verified map (PDF page =
(column + 11) / 2, `patrologiaecurs06saingoog`), 0224C is the right column of p. 117, 0227B the
left of p. 119, 0230B the right of p. 120 — and the launch's clipping is confined to the LEFT
column of pp. 114 and 118. All three should be clean, unobstructed reads.

### 2. 0225B — the *sed* with no *non*. THE ONE `[cj:]` I FIRED.

> *Nam in hoc infirmitatem filii, sed quia alter in altero operatur ostendit.*

The `sed` has nothing to answer. Rendered as printed and glossed additively:

`For in this he shows the weakness [cj: *infirmitatem*; read *non infirmitatem*, "not the weakness"] of the Son, but that the one works in the other.`

**Why this one and not the others.** Pattern 18a's bar is that the English *asserts something the
author is arguing against*, and it is explicitly reopened for a **dropped negation answering a
printed correlative** — 7561 @0648, where Migne's setting drops the *non* of *non solum … sed*, is
the same shape and took the same treatment (the gloss opens on the word Migne DID print, so the
verbatim-in-the-Latin-twin guard is satisfied by *infirmitatem*). Without the gloss the page says
Christ shows the weakness of the Son, which the next clause and the whole *Sede a dextris* argument
deny: *Nam et filius subjicit inimicos Patri, et Deum Patrem glorificat super terram.*
⛔ **Not** `[sic:]` — nothing is broken type. **Not** `[var:]` — this is the glossator's own prose,
not a quoted scripture (18a's `WHERE the divergence sits` rule).
⭐ **Plate value:** if Migne prints *non infirmitatem* the defect is ours and this marker must be
withdrawn and a patch filed. This is the single highest-value plate read in the stint.

### 3. 0226B — *Recedent de templo Domino*

Bede's lemma-gloss opens `Recedent de templo Domino, etc.` *Recedent* is a real word (future, 3 pl.)
in a slot that wants the ablative absolute *Recedente*, which *de templo Domino* is otherwise
built for. **Rendered as printed** — "They shall withdraw from the temple, the Lord, etc." — which
does not construe, and is meant not to: Pattern 7. **No marker**: a real, well-formed word is
Migne's until a plate says otherwise (addendum A), and this is also the exact shape of a lost final
letter in transcription. Not glossable under Pattern 18 either: the anomaly is person/number, which
18a leaves declined.

### 4. 0225D — *in libro Regnum*

For *in libro Regum*, "in the book of Kings" — *Regnum* is a real word with no genitive-plural slot
here. Rendered **"in the book of Kings"**, because Migne's own siglum three words later fixes the
reference beyond doubt (`[n: (IV Reg. XII)]`). No marker; one letter, real word, plate candidate.
I record that the rendering is a reading and not a transcription, so a later sweep can see it.

### 5. 0219B — *Et assument.* for the Vulgate's *Et assumens*

Lemma at Mc 13:32 [recte 10:32]; see §2 row for it. A one-letter, OCR-shaped divergence in a
lemma whose gloss (Bede, on Christ foreseeing the disciples' trouble) needs the participle.
Rendered as printed, **no `[var:]`** — see §2's stated policy.

---

## §1 · THE `[var:]` MARKERS — five, each resting on `sources/vulgate/clementine-flat.txt`

**Policy applied throughout, stated so it can be checked:** a `[var:]` fires where a **different
lexeme or a different construction** changes what the English says. It does **not** fire on
orthography (*quicunque* · *maechatur* · *coelum* · *nunquid* · *Joiada*), on word order alone, on a
dropped or swapped connective (*autem* · *enim* · *vero* · *et*), on a synonym (*dilectio* for
*caritas*, *facile* for *cito*), on a lemma clipped short, or on a one-letter divergence of the shape
a scanner makes. Every declined case is still listed in §2 — a list of findings alone cannot be told
apart from a report by an agent that never looked.

1. **0218A · 1 Cor. 14:20.** Migne: *Nolite effici **parvuli** sensibus, sed malitia parvuli estote.*
   Clementine: *nolite **pueri** effici sensibus, sed malitia parvuli estote.* Migne collapses the
   verse's two different words into one, in a gloss whose whole subject is childlikeness
   (*Talium … non istorum*; *similem habent simplicitatem*). Marked
   `[var: Vulg. 1 Cor. 14:20 *nolite pueri effici sensibus*, "be not children in understanding"]`.

2. **0222B · Matt. 25:41.** Migne: *Discedite a me, **mali**, in ignem aeternum.* Clementine:
   *Discedite a me **maledicti** in ignem aeternum.* A different word, in a proof-text quoted for
   the sentence of the reprobate. Marked `[var: Vulg. Matt. 25:41 *maledicti*, "ye cursed"]`.
   ⚑ Two further divergences in the same quotation are logged in §2 and took no marker: Migne's
   *quia* for *enim* (he conflates vv. 41 and 42) and *manducandum* for *manducare*, with a comma
   before it that the English carries.

3. **0223C · John 16:12.** Migne: *Adhuc multa habeo vobis dicere, **quae** non potestis portare
   modo.* Clementine: *sed non potestis portare modo.* A relative for an adversative — a different
   construction, not a different word only. Marked
   `[var: Vulg. Jo. 16:12 *sed non potestis portare modo*, "but you cannot bear them now"]`.

4. **0228D · 1 Cor. 15:34.** Migne: ***Vigilate**, justi, et nolite peccare.* Clementine:
   ***Evigilate** justi.* The whole paragraph is an exposition of *vigilate* (VERS. 36,
   *omnes vigilare praecipimur*), so the proof-text has been drawn to the argument's keyword — the
   7a″ shape exactly, in the direction that matters. Marked
   `[var: Vulg. 1 Cor. 15:34 *Evigilate*, "Awake"]`.

5. ⭐ **0229D · 2 Cor. 5:16 — A DROPPED NEGATION INSIDE A QUOTED SCRIPTURE.** Migne prints
   *Etsi noverimus Christum secundum carnem, sed nunc jam **novimus**.* The Clementine reads
   *sed nunc jam **non** novimus* — "but now we know him so no longer." **As printed, the proof-text
   asserts the opposite of the sentence that adduces it**: Bede's point is that Christ is no longer
   joined to us *corporali praesentia et familiaritate sicut nunc*, and the next clause says
   *Spiritualiter autem semper est nobiscum*. **Rendered without the negation, as printed** —
   Pattern 7a forbids supplying one — and marked
   `[var: Vulg. 2 Cor. 5:16 *sed nunc jam non novimus*, "but now we know him so no longer"]`.
   ⛔ **Deliberately `[var:]` and not `[cj:]`:** 18a's decline class is explicit that a divergence
   inside a quoted scripture is Pattern 14's, wherever it would otherwise meet Pattern 18's bar —
   the rule that separates them is WHERE the divergence sits, not how badly it reads.
   ⚑ Also in the same quotation and not marked: *noverimus* for the Clementine's *cognovimus*.

**Marker-content parity.** Every `[var:]`/`[cj:]` content string was checked against the guard:
the four `[var:]` contents do **not** occur in the Latin twin (they are the Clementine's words), and
the `[cj:]`'s leading italic *infirmitatem* **does** occur verbatim in the Latin twin. That is the
inverted test and both halves hold.

---

## §2 · THE LEMMA DIVERGENCE LIST — 7a″ point 4, agreements included

Every italic span in cols 0217B–0232C, collated against `clementine-flat.txt` by book chapter:verse.
**Agreements are recorded, because a list of findings alone cannot be told apart from a report by an
agent that never looked.**

### 2a. Checked and AGREEING with the Clementine exactly (orthography aside)

Verse lemmata, in order: Mc 10:8 *Et erunt* · 10:9 *Homo non separet* · 10:10 *Et in domo* ·
10:13 *Discipuli autem comminabantur offerentibus* · 10:14 *Talium enim est regnum Dei* ·
10:15 *Quisquis non receperit regnum* + *Regnum Dei* · 10:17 *Procurrens quidam genu* ·
10:18 *Quid me dicis* · 10:19 *Ne adulteres* · 10:20 *Magister* · 10:21 *Et veni, sequere me* ·
10:23 *Quam difficile* · 10:25 *Facilius est camelum* · 10:26 *Et quis potest* · 10:27 *Apud Deum* ·
10:28 *Ecce nos dimisimus* + *et secuti sumus te* · 10:30 *Centies tantum* · 10:31 *Multi autem* (×2) ·
10:32 *Et stupebant* · 10:35 *Et accedunt* · 10:38 *Aut baptismo* · 10:39 *Calicem quidem* ·
10:40 *Sedere autem* + *Vobis* · 10:41 *Indignati sunt* · 10:42 *Jesus autem vocans eos* ·
10:46 *Et veniunt Jericho* + *Et proficiscente eo* + *Bartimaeus caecus* · 10:47 *Qui cum audisset* +
*Fili David* · 10:49 *Et vocant caecum* · 10:50 *Qui, projecto vestimento suo* + *Exsiliens* ·
10:52 *Vidit et sequebatur* + *In via* ·
11:1 *Bethaniae* + *Duos ex discipulis* (Migne omits *suis*) · 11:2 *Et statim* · 11:4 *Pullum ligatum* ·
11:6 *Et dimiserunt* · 11:7 *Et sedit* · 11:8 *Alii autem* · 11:9 *Et qui praeibant* ·
11:10 *Benedictus qui venit* · 11:11 *Et introivit* + *In templum* + *Et circumspectis* ·
11:13 *Cumque vidisset* · 11:14 *Jam non amplius* · 11:15 *Coepit ejicere* + *Vendentes* ·
11:16 *Et non sinebat* · 11:17 *Vos autem fecistis* · 11:20 *Aridam factam* · 11:21 *Recordatus Petrus* +
*Amen, dico vobis* · 11:23 *Quicunque dixerit* · 11:25 *Et cum stabitis* · 11:28 *In qua potestate* ·
11:29 *Interrogabo* · 11:31/32 *Si dixerimus* (×2) · 11:33 *Neque ego dico vobis* ·
12:1 *Lacum* + *Peregre profectus* · 12:6 *Quia reverebuntur* · 12:7 *Coloni autem* · 12:8 *Et ejecerunt* ·
12:10 *Lapidem quem reprobaverunt* · 12:13 *Et mittunt ad eum* · 12:14 *Magister, scimus* ·
12:15 *Qui sciens versutiam* + *Denarium* · 12:17 *Reddite ergo quae sunt Caesaris* + *Quae sunt Dei Deo*
(×2) · 12:18 *Sadducaei* (×2) · 12:20 *Septem ergo* · 12:25 *Neque nubent, neque* + *neque nubent* +
*neque nubentur* · 12:26 *Ego sum Deus* · 12:28 *Interrogavit eum* · 12:29 *Primum omnium* ·
12:32 *Bene magister* · 12:34 *Et nemo* · 12:36 *Sede a dextris* · 12:38 *Cavete* ·
12:40 *Qui devorant domos viduarum* · 12:41 *Gazophylacium* + *Aspiciebat quomodo* + *Divites* ·
12:42 *Quadrans* · 12:44 *Omnes enim* ·
13:1 *Et cum egrederetur* · 13:2 *Vides has* · 13:3 *Et cum* · 13:5 *Et respondens* ·
13:6 *Multi enim venient* · 13:8 *Exsurget enim* · 13:9 *Videte autem* + *Videte* ·
13:10 *Et in omnes gentes* · 13:14 *Cum autem videritis* · 13:21 *Et tunc si quis* ·
13:24 *Sed in illis diebus* · 13:25 *Decidentes* + *Et virtutes quae* + *Movebuntur* ·
13:27 *A quatuor ventis* · 13:28 *A ficu autem* · 13:31 *Coelum et terra transibunt* · 13:32 *Neque filius* ·
13:33 *videte, vigilate* · 13:34 *Et janitori* · 13:35 *Vigilate ergo* (×2) · 13:37 *Quod autem vobis* ·
14:1 *Erat autem pascha* + *Et quaerebant summi sacerdotes* · 14:2 *Non in die festo* ·
14:3 *Et cum esset Bethaniae* + *Simonis leprosi* + *Et recumberet, venit* + *Mulier* + *Alabastrum* +
*Nardi spicati* + *Et fracto* · 14:4 *Erant autem quidam* + *Ut quid perditio ista* ·
14:5 *Poterat enim unguentum* · 14:6 *Bonum opus operata* · 14:7 *Me autem non semper* ·
14:8 *Quod habuit* · 14:9 *Amen dico vobis* · 14:10 *Uno de duodecim* + *Abiit ad* ·
14:11 *Et quaerebat quomodo illum* · 14:13 *Ite in civitatem* + *Homo lagenam aquae* + *Sequimini* ·
14:15 *Coenaculum grande* · 14:17 *Vespere autem* · 14:18 *Amen dico* + *Unus ex vobis* ·
14:19 *Contristari* · 14:20 *Unus ex duodecim* + *Qui intingit* + *Unus ex vobis tradet me* ·
14:21 *Vae autem* · 14:22 *Manducantibus* + *Accepit* · 14:23 *Gratias* + *Biberant* ·
14:25 *Jam non bibam* + *Vitis* · 14:26 *Et hymno dicto* + *In montem Olivarum* +
*Omnes scandalizabimini* · 14:27 *Percutiam pastorem* (×2) · 14:29 *Petrus autem*.

In-gloss scripture agreeing exactly: Luc. 9:23 *Si quis vult post me venire* · Psal. 24:16
*Unicus et pauper sum ego* · Psal. 61:11 *Divitiae si affluant, nolite cor apponere* · Psal. 33:6
*Accedite ad eum et illuminamini* · Joan. 12:26 *Si quis mihi ministrat, me sequatur* ·
Psal. 131:17–18 *Paravi lucernam Christo meo: inimicos ejus induam confusione* · Luc. 1:32
*Hic erit magnus, et filius Altissimi vocabitur* · Psal. 4:7 *Signatum est super nos lumen vultus tui*
(Migne stops before *Domine* and prints *etc.*) · Psal. 110:10 *initium sapientiae timor Domini* ·
Matt. 22:29 *Erratis nescientes Scripturas neque virtutem Dei* · Psal. 108:7 *Oratio ejus fiat in
peccatum* · Joan. 8:20 *Haec verba locutus est Jesus in gazophylacio, docens in templo* ·
Job 26:11 *Columnae coeli contremiscunt, et pavent ad nutum ejus* · Act. 1:7 *Non est vestrum nosse
tempora vel momenta quae Pater posuit in sua potestate* · Matt. 25:34 *Venite, benedicti Patris mei* ·
1 Cor. 5:7 *Etenim Pascha nostrum immolatus est Christus* · Psal. 18:3 *nox nocti indicat scientiam* ·
Psal. 40:10 *Qui edebat panes meos, magnificavit super me supplantationem* · Matt. 26:22/25
*Nunquid ego sum, Domine? / Rabbi?* · 1 Thess. 5:7 *Qui ebrii sunt, nocte ebrii sunt* ·
Marc. 4:11 *Vobis datum est nosse mysterium regni Dei* · Luc. 10:19 *Dedi vobis potestatem* ·
Zach. 13:7 *Percute pastorem* (the prophet's imperative) against Marc. 14:27 *Percutiam pastorem*
(the Father's answer) — **Migne's contrast is exact in both directions and is not a defect.**

### 2b. Checked, DIVERGENT, and NOT marked — with the reason in each case

| col | Migne prints | Clementine | why no marker |
|---|---|---|---|
| 0217C | *Si licet **viro*** (Mc 10:2) | *Si licet **vero*** | **The Clementine is the outlier here**, not Migne: *viro* is the reading the gloss expounds and the one most Vulgates carry. A call turning on one letter is exactly what `sources/vulgate/README.md` says not to trust this copy to. Recorded; marking Migne would be backwards. |
| 0217D | *maechatur* (Matt. 19:9) | *moechatur* | ae/oe interchange, Pattern 9 orthography. Note also that Migne's siglum reads `(Matth. V)` for what is Matt. 19:9 — **his citation, passed through verbatim**, not ours to correct. |
| 0217D | *Quicunque* | *quicumque* | orthography, throughout the work. |
| 0218C | *Vade, quaecunque habes vende* | Mc 10:21 exactly | agrees; the siglum `(Matth. V)` is again Migne's own. |
| 0219B | ***Et assument.*** (Mc 10:32) | *Et **assumens*** | different tense/person, and the gloss needs the participle. **One letter, OCR-shaped** (ns → nt), so it is as likely ours as his; §0.5. Rendered "*And they shall take.*" |
| 0219C | *Baptismo habeo baptizari … perficiatur.* (Lc 12:50) | *Baptismo **autem** habeo … perficiatur **?**` | dropped connective; and Migne closes with a **period** where the Vulgate has a question mark. Pattern 8: the period rides as printed and **no `?` is supplied**. |
| 0219D | *Non enim personarum acceptio est apud Deum* `[n: (Act. X)]` | Act. 10:34 is *non est personarum acceptor Deus*; the WORDS are Rom. 2:11 *non enim est acceptio personarum apud Deum* | Migne's siglum points at a different verse from the one he quotes. Recorded; Pattern 14 compares a quotation with its own received text, and there is no single text to compare this against. |
| 0220B | *At **illo** multo magis* (Mc 10:48) | *At **ille** multo magis* | oblique form with no subject slot; one letter, OCR-shaped. Rendered as the fragment it stands for, "*But he much the more.*" |
| 0220B | *Et, surge qui dormis* (Eph. 5:14) | *Surge qui dormis* | Migne's own connective, carried. |
| 0220D | *Quodcunque petieritis in oratione credentes accipietis* (Matt. 21:22) | *Et omnia quaecumque petieritis* | singular for plural; sense unchanged. |
| 0220D | *Rabboni, **et** videam* (Mc 10:51) | *Rabboni, **ut** videam* | et/ut, one letter, OCR-shaped, in a lemma. Rendered "*Rabboni, and let me see.*" |
| 0220D | *Vade, fides tua **salvum te** fecit* (Mc 10:52) | *fides tua **te salvum** fecit* | word order only. |
| 0221A | *Ego sum via, veritas et vita* (Jo. 14:6) | *Ego sum via, **et** veritas, et vita* | dropped connective. |
| 0221B | *Multi autem straverunt* (Mc 11:8) | *Multi autem **vestimenta sua** straverunt in via* | a clipped lemma; rendered as the phrase it stands for per Glossa convention 3 ("But many spread their garments"). Not a divergence. |
| 0221B | *ei omne genu flectatur* (Phil. 2:10) | *in nomine Jesu omne genu flectatur* | the glossator has woven the verse into his own *ut* clause and put *ei* where the syntax needs it. Weave, not variant. |
| 0222A | *Discedite … quia esurivi et non dedistis mihi, **manducandum*** | Matt. 25:42 *esurivi **enim**, et non dedistis mihi **manducare*** | conflation of vv. 41–42 plus a gerundive for the infinitive; the marked half of this quotation is §1.2. The odd comma before *manducandum* is Migne's and is carried. |
| 0223A | *Digne transferimur ad gentes, quia vos indignos judicatis* `[n: (Matth. XXI)]` | Act. 13:46 *sed quoniam repellitis illud, et indignos vos judicatis aeternae vitae, ecce convertimur ad gentes* | a free paraphrase of Acts under a Matthew siglum, and the gloss itself says *quando dixerunt apostoli*. Too loose to reduce to one marker; argued here instead. |
| 0223C | *Nolite **sanctum dare** canibus* (Matt. 7:6) | *Nolite **dare sanctum** canibus* | word order only. |
| 0224D | *Justi ut palma **florebunt*** (Ps. 91:13) | *Justus ut palma florebit* | Migne pluralises to fit the gloss's *omnibus reprobis* frame; recorded, sense unchanged. |
| 0225A | *fides quae per **dilectionem** operatur* (Gal. 5:6) | *fides quae per **caritatem** operatur* | synonym, and the gloss's own preceding words are *in dilectione Dei et proximi*, so the quotation has been drawn to them. Recorded as a 7a″-shaped pull that does **not** change what the English says. |
| 0225B | *Non longe es a regno Dei* (Mc 12:34) | *Non es longe a regno Dei* | word order only. |
| 0225B | *Qui **facile** credit **levis est corde**, et minorabitur* (Eccli. 19:4) | *Qui credit **cito** levis corde est* | synonym plus order. |
| 0225D | *Tulit **Joiada** pontifex* (IV Reg. 12:9) | *Et tulit **Jojada*** | spelling and a dropped connective. |
| 0225D | *Vidua pauper* (Mc 12:42) | *vidua **una** pauper* | Migne drops *una*; a clipped lemma. |
| 0226A | *Lapis super lapidem non relinquetur* (Lc 21:6) | *non relinquetur lapis super lapidem, qui non destruatur* | order plus truncation. |
| 0226C | *quia non statim finis* | Mc 13:7 *sed nondum finis*; Lc 21:9 *sed nondum statim finis* | a re-quotation folded into the glossator's own sentence (*admonentur, quia…*). Closest to Luke; the divergence is the connective and *non* for *nondum*. Recorded, not marked. |
| 0226D | *cui auscultabant omnes **qui erant in Samaria** a minimo usque ad maximum … **eo quod** multo tempore **magicis artibus** dementasset eos* | Act. 8:10–11, without the Samaria clause, with *propter quod* and *magiis suis* | a conflation of two verses with three small divergences; better argued here than flattened into one marker. |
| 0227B | *Et erit lux lunae sicut **sol*** (Is. 30:26) | *sicut **lux solis*** | one dropped word; the siglum `(Isa. III)` is Migne's for Isaiah 30. |
| 0228B | *repositi sunt **et** igni reservati* (II Pet. 3:7) | *repositi sunt, igni reservati* | added connective. |
| 0228B | *terra **vero** in aeternum stat* (Eccl. 1:4) | *terra **autem*** | synonym. |
| 0228B | ***In eo enim** sunt omnes thesauri* (Col. 2:3) | ***in quo** sunt* | demonstrative for relative, so the verse can stand as its own sentence. Weave. |
| 0228C | *Si non annuntiaveris iniquo iniquitatem suam, sanguinem ejus de manu tua requiram* `[n: (Ezech. III)]` | Ez. 3:18 is far longer and reads *non annuntiaveris **ei*** … *sanguinem **autem** ejus* | a compression, close also to Ez. 33:8. Recorded. |
| 0230B | *Unumquodque animal ad sibi simile **juugitur*** `[n: (Matth. XXVIII)]` | Eccli. 13:19 *Omne animal **diligit** simile sibi* | a different verb and a different construction, under a Matthew siglum; **and the verb as printed is a non-word** (§0.1), which is why no `[var:]` was fired on top of it — the divergence cannot be stated cleanly until the word is known. |
| 0230C | *Et **prima** die azymorum* (Mc 14:12) | *Et **primo** die azymorum* | one letter, OCR-shaped. |
| 0230C | *Circumamicta **varietate*** (Ps. 44:15) | *circumamicta **varietatibus*** | number; the gloss continues *varietate virtutum*, which is why the singular sits there. |
| 0229D | *Ecce ego vobiscum sum **usque ad consummationem saeculi omnibus diebus*** (Matt. 28:20) | *omnibus diebus, usque ad consummationem saeculi* | order reversed. ⚑ **This is an addendum-D `usque ad` LOOK-ALIKE** — the words are the verse's own, not the abridgment formula, and are rendered as scripture. |
| 0229D | *Vulnerasti cor meum, soror mea, in uno oculorum tuorum* (Cant. 4:9) | *soror mea, **sponsa; vulnerasti cor meum** in uno* | Migne drops the repetition and *sponsa*. |
| 0232A | *Nunquid **quia** dormit non adjiciet ut resurgat?* (Ps. 40:9) | *Numquid **qui** dormit* | one letter. **Both negatives, *Nunquid* and *non*, are carried in the English** ("Because he sleepeth, shall he not rise again?"), and the printed `?` is kept. The siglum `(Zach. XIII.)` belongs to the *Percutiam pastorem* that follows, not to this psalm; Migne's, passed through. |
| 0232C | *Priusquam gallus cantet* (Matt. 26:34) | *antequam gallus cantet* | synonym. |
| 0232C | *Qui viderit mulierem ad concupiscendum, jam moechatus est eam* (Matt. 5:28) | *ad concupiscendum **eam** … eam **in corde suo*** | two truncations. |

### 2c. Fragmentary lemmata expanded under Glossa convention 3

Recorded so nobody reads them as conformation later. ⛔ Per the "name the control's class" note, a
**clipped** lemma and a **complete one-word** lemma are different classes and are not to be
contrasted: *Magister.* · *Denarium.* · *Alabastrum.* · *Quadrans.* · *Contristari.* · *Gratias.* ·
*Exsiliens.* · *Decidentes.* · *Movebuntur.* · *Bethaniae.* · *Vitis.* · *Cavete.* · *Interrogabo.*
have nothing elided and are rendered as they stand.

Expanded: *Si licet viro.* → "Whether it is lawful for a man to put away his wife" (Mc 10:2) ·
*Quicunque dimiserit.* → "Whosoever shall put away his wife" (Mc 10:11) · *Quid me dicis.* → "Why
callest thou me good" (Mc 10:18) · *Et quis potest.* → "And who can be saved" (Mc 10:26) ·
*Ecce nos dimisimus.* → "Behold, we have left all" (Mc 10:28) · *Procurrens quidam genu.* → "A
certain man running up, on bended knee" (Mc 10:17, *genu flexo*) · *Multi autem straverunt.* → "But
many spread their garments" (Mc 11:8) · *Bis gallus vocem.* → "The cock shall twice give voice"
(Mc 14:30).

⚑ **A distinction kept on purpose:** Mc 10:28's lemma is *dimisimus* and the gloss's re-quotation of
the same act is Matthew's *reliquimus*. They are rendered with two different English verbs ("we have
left" / "we have forsaken") so the change of word is visible; collapsing them would be the
conformation 7a″ names.

---

## §3 · CRUCES BY COLUMN — Migne's own prose

### 0217D · *Non discipuli interrogaverunt prius* — where the negative sits

Rendered **"It was not the disciples who asked first"**: the *non* stands before the subject, not
before the verb, and English's only exponent for subject-focus negation is the cleft. The rival
("The disciples did not ask first") puts the negative on the verb, which is the 2a misattachment
class exactly. Both construe; the word order decides, and it is recorded here because it is a
judgment and not a reading.

### 0217D · *Deus separat: qui conjungit … sic habent uxores quasi non habentes*

Migne's sentence changes number in the middle: singular *qui conjungit*, then plural *habent*.
Rendered as printed, with the colon and the parenthesis where he sets them; no verb supplied and no
number smoothed. The *quasi non habentes* (1 Cor. 7:29) is carried with its negative.

### 0220B–C · *Populus gentium … contradicebant multi* — an anacoluthon, kept

The nominative *Populus gentium* is left hanging and the sentence continues with *contradicebant
multi*. **Kept hanging in the English.** Straightening it would put our hand on a break the plate
makes, and *nec tamen … poterat … prohibere* is carried as "nor yet could".

### 0221C · *Pedes sunt extremi quos ad jungendum constituit Apostolus*

*ad jungendum* has no expressed object. Rendered "which the Apostle appointed for the joining
together", and the relative *qui* is taken as the feet, which is the only antecedent available.

### 0221D–0222A · *significat quod **adventum** Christi … salus est*

An accusative where the *quod* clause wants a nominative. English has no exponent for the case, so
the clause is rendered with "the coming of Christ" as its subject and the anomaly is invisible on
our side — recorded here for that reason, and left unmarked (Pattern 9's boundary: the defect has no
English exponent, and unlike 11632's *signa … ardeat* nothing about the printed sentence is
recoverable by marking one word).

### 0223C · *cum aut hic **cui** quaerit minus intelligit*

*cui* where the sense wants *qui* — "he **who** seeks". Rendered as printed ("he to whom he seeks"),
which does not construe. Real word, one letter, plate candidate; no marker. The correct reading is
plain from the sentence's own second limb (*aut odio aut contemptu veritatis indignus est*).

### 0224C · *recte hujusmodi fabulam fingunt*

Bede's sentence, as printed, says the Sadducees **rightly** frame the seven-brothers fable to convict
of raving those who assert the resurrection of bodies — which is not what Bede is arguing. Rendered
with *recte* as "rightly", **not** softened to "fittingly" or "consistently": both are readings, and
Pattern 7 forbids choosing one inside the text. Flagged here so a blind reader does not take it for
a silent repair. Declined for `[cj:]`: *recte* is neither a negation nor a correlative, and 18a's
extension is scoped to those.

### 0226B · *usque ad erat luitura* — a supplied "it"

The abridgment removes the subject of *erat luitura* (feminine singular, presumably the city or
the nation named inside Bede's elided sentence). English cannot leave it unexpressed; **"it" is
supplied and is ours.** The same applies to three other resumption tails in the stint —
0217C *concessa est*, 0218C *testatur*, 0219B *fruuntur* — where the unexpressed subject is inside
the elided text and the supplied pronoun is a translator's necessity, not a reading of the Latin.
Brief §"unexpressed subject" requires this to be said, so it is said here in one place.

### 0227B · *uxorem Jonathae … filium sinu suo lapsum recepisse perpetuo claudum*

Migne's *libro Historiarum* anecdote; *recepisse* takes *filium … claudum*. Rendered "took back her
son, fallen from her bosom, lame for ever". No difficulty beyond the truncated *praegnantibu.* in
the lemma above it (§0.1).

### 0230A · *passuros post paucos dies praescit*

A dangling accusative plural in a clause whose subject is Christ; the sense wants *passurus*
("about to suffer"). **Rendered as printed** — "those about to suffer after a few days, he foreknows
that his Gospel is to be preached in the whole world" — which does not construe, deliberately.
Declined for `[cj:]`: 18a leaves number/person anomalies that merely fail to construe declined
(11064 @1154C is the named precedent), and this is one.

### 0230A · *futura impii contumelias tacet*

*futura* (neuter plural) against *contumelias* (feminine plural). Gender/number disagreement with no
English exponent — Pattern 9. Rendered "is silent about the coming reproaches of the wicked man".
Marked here so a later sweep does not churn it.

### 0230A · *nomine non numine*

A jingle Migne prints and English cannot keep: *nomen* / *numen*. Rendered "in name not in divine
power", which loses the sound and keeps the sense. Recorded because the loss is ours.

### 0231C · *Judas aliis contristatis … qua Dominum tradit; etiam manum … mittit*

The semicolon falls inside what should be one clause and the ablative phrase has no verb until after
it. **Migne's semicolon is kept exactly where he sets it** (Pattern 8), and the English breaks where
he breaks.

### 0231D · *exstinguuntur inimici quae sunt mysteria Ecclesiae Christi*

*quae* (neuter plural) after *inimici* (masculine plural). Rendered as printed, "the enemies are
extinguished, which are the mysteries of the Church of Christ" — gender with no English exponent
again, and the resumption tail's own referent is inside the elided text.

### 0232A · VERS. 26 lacks its `--`

Migne sets `VERS. 26. *Et hymno dicto.*` where all 111 other verse addresses in this stint print
`VERS. n.-- `. **Reproduced exactly as printed**, per "Migne's own printing is not yours to tidy."
The verse addresses are otherwise in sequence throughout cols 0217B–0232C; no out-of-order verse
number in this range.

### 0225D–0226A · VERS. 42 for Mc 12:42, and VERS. 36 for Mc 13:37

Two places where Migne's verse address does not match the verse his lemma quotes
(`VERS. 36.-- *Quod autem vobis.*` is Mc 13:37). **His numbering, reproduced.**

### 0224C · *nubere* / *ducere* — a lexical point English cannot carry in the same words

Bede's note is that Latin says *nubere* of women and *ducere* of men, so *neque nubent, neque
nubentur* has to be taken loosely. Rendered "it is properly of women that marrying is said: and of
men, the taking of a wife", then *neque nubent* / *neque nubentur* as "neither shall they marry" /
"neither shall they be married". No new italic span was opened for the mentioned verbs, because
italic spans are 1:1 with the Latin.

### 0224B, 0226D · Greek carried verbatim

δευτερώσεις (0224C) and Φυλάττειν (0225D) are reproduced exactly as printed, untranslated where
Migne leaves them untranslated and glossed where he glosses them (*Φυλάττειν Graece, servare
Latine*).

### 0223D–0224A · Migne's *Regnum* / two elliptical verbs

*Ficus enim non peccavit … sed sacerdotes* (0222B) is elliptical; English supplies "did" to close it
("but the priests did"), which is an English ellipsis and not a supplied Latin verb. Recorded.

---

## §4 · SECTIONS READ CLEAN — named, so a blind reader knows where I looked

The following were read line by line against the Latin and are **clean**: no defect, nothing
declined, nothing left:

- **0217B–0217C**, CAPUT X opening through VERS. 5 (the Judaea/Galilee geography and the
  *Cornuto syllogismo* tail).
- **0218A–0219A** entire, VERS. 13 through VERS. 28 — fifteen consecutive glosses, the densest
  stretch of straightforward lemma-and-comment in the stint, including all four *usque ad*
  resumptions and the two Psalm citations, both of which agree verbatim.
- **0219C–0220A**, VERS. 35 through VERS. 42 (the sons of Zebedee), apart from the Act. X siglum
  noted in §2b.
- **0221A–0221C**, CAPUT XI VERS. 1 through VERS. 8.
- **0222C–0223B**, VERS. 16 through VERS. 32 — the temple-cleansing and the *In qua potestate*
  exchange, entire.
- **0224A–0224B**, VERS. 10 through VERS. 17 (the tribute money), entire.
- **0225A**, VERS. 28 through VERS. 34 as far as *Et nemo*.
- **0226C–0227A**, CAPUT XIII VERS. 3 through VERS. 10, entire.
- **0227C–0228A**, VERS. 21 through VERS. 28, entire.
- **0229A–0229D**, CAPUT XIV VERS. 1 through VERS. 6, entire (the Bethany anointing) — the only
  entry from this stretch is the §1.5 `[var:]` at its far end.
- **0230C–0231B**, VERS. 12 through VERS. 18, entire.
- **0232B–0232C**, VERS. 27 through VERS. 30, entire.

**Zero guillemets in either language across all five chunks** — checked, not assumed.
**Zero `usque ad` look-alikes missed:** the string `usque ad` occurs 59 times in this stint and was decided per
occurrence (addendum D). One occurrence is **not** the formula — Matt. 28:20 at 0229D, §2b — and one
is the formula standing *inside* the same italic span as its resumption, `*usque ad Deus meus
misericordia ejus praeveniet me [n: (Psal. LVIII)]*` at 0225D, which is reproduced as one span.

**Foot-of-page apparatus:** none in this range per the launch's checked zero for the work; no `[cn:]`
is expected or present in the Latin twins, and none was invented.

---

## §5 · CANDIDATES CONSIDERED AND REJECTED, with reasons

Each of these was a live suspicion. All were declined; the reasoning is recorded so it is not re-run.

1. **`[sic:]` on *simpiliciter*, *juugitur*, *praegnantibu.*** — declined. Addendum A: a non-word
   suspicion has been confirmed as OUR corruption every time it was tested, and `[sic:]` is a public
   claim against Migne's plate. Cruces + plate request instead (§0.1). **This is the single decision
   in the stint most likely to be reversed by a plate read, and it should be — in the direction of
   adding three markers, not removing any.**
2. **`[sic:]` on *Recedent*, *illo*, *assument*, *cui*, *Regnum*, *prima*, *et videam*** — declined.
   All are real, well-formed Latin words. Addendum A is 4-for-4 that a real word reading oddly is
   Migne's, and two of the four refuted arguments in that batch were excellent ones. Rendered as
   printed, logged.
3. **`[var:]` on the *dilectio*/*caritas*, *facile*/*cito*, *vero*/*autem*, *noverimus*/*cognovimus*
   pairs** — declined as synonym-level. Firing on these would put a marker on most pages and bury
   §1's five.
4. **`[var:]` on every dropped *autem*/*enim*/*et*** — declined; Pattern 14's test is a change of
   sense, and eight such were found (listed in §2b).
5. **`[cj:]` on *recte* (0224C), *passuros* (0230A), *futura* (0230A), *adventum* (0221D)** —
   declined. 18a's reopened class is negations and correlatives (plus a stranded comparative);
   mood, case, number and person anomalies that merely fail to construe stay declined, and 18a is
   explicit that its census is closed and not to be reopened.
6. **A `[d:]` on *Percutiam pastorem* printed twice at 0232B** — declined, and it is not close. The
   two occurrences are the two halves of Jerome's own argument (the prophet asks *Percute*, the
   Father answers *Percutiam*), and the second is the answer, not an eye-skip. Marking it would
   destroy the point.
7. **A `[d:]` on *Sadducaei, etc.* printed twice at 0224B–C** — declined. Two separate glosses on
   the same lemma, one Jerome's and one Bede's, each with its own comment. The Glossa does this
   throughout; it is structure, not dittography. Same for *Si dixerimus* at VERS. 31 and VERS. 32,
   which are two different verses, and *Quae sunt Dei Deo* at 0224B, which Migne glosses twice
   under *Aliter*.
8. **Supplying `?` at 0223A** (*quid amplius rogabit, nisi quod perseveret in eo quod obtinuit?*) —
   not needed: Migne prints the mark and it is kept. **Conversely, no `?` was supplied** at
   0217C *Nunquid Deus contrarius sibi est, etc.*, 0227A *Quare haec omnia inferantur*, or
   0219C's *Baptismo habeo baptizari … perficiatur.*, all of which Migne closes without one.
   Question-mark parity is exact per band in all five chunks.
9. **A comma→semicolon sweep in 0015 and 0016**, where Migne prints **zero** semicolons in 2,558
   Latin words — declined as an *initiative*, and instead simply obeyed: the English carries zero
   semicolons in those two chunks. The Tobit exception was not invoked, because it does not need to
   be; the plate's own practice was counted first (Latin 0·0·2·5·3 across the five chunks) and matched
    exactly, band by band. The English shows 0·0·**3**·5·3 only because the `[cj:]` marker's own
    fixed form carries a semicolon inside it at 0225B.
10. **A `[nt:]` conversion of any note** — declined. All 157 notes in this range are citations or
    bare attribution sigla (`(BEDA.)`, `(HIER.)`, `(ID.)`, `(BED.)`, `(ISID.)`, `(HILAR.)`,
    `(Id.)`, `(Cap. I)`), which Pattern 15 keeps as `[n:]`. Note that Migne prints **both**
    `(BEDA.)` and `(BED.)`, and both `(ID.)` and `(Id.)`, within a few columns; the variance is
    his and is carried per occurrence, unnormalized.
11. **A `[f:]` tag anywhere** — declined per runbook false positive 4: this is lemma-and-gloss
    commentary, not a florilegium, however much inline scripture it carries.
12. **Reporting the column-band gaps** (0217B→0217C with no A; 0223C→0223D; 0226A→0226B) —
    declined per runbook false positive 1. No text breaks mid-word or mid-construction across any
    anchor in this range; that was checked, and it is the only signal in the class.
13. **`*BEDA.*` at 0230B, set as an italic span in running text rather than as a note** — carried
    verbatim, untranslated, in its italics. It is a siglum, and sigla pass through (convention 4);
    it is not a lemma and was not rendered as one. The same treatment was given to the bare
    `HIER.` at 0224D, which Migne sets in roman inside the paragraph.

---

## §6 · WHAT THE FOURTH TEST TURNED UP

Run last, with the counts already known clean: each finished paragraph read back against the Latin
asking only *does it assert what he asserts?* Three repairs came out of it, all in the negation-scope
family that no count-based check sees, and all made **after** the chunks otherwise verified:

- **0220D** — *non falsas divitias quaeramus, sed lucem* had been rendered "let us **not seek** false
  riches, but the light", floating the negative onto the verb. The `sed` pivots on *falsas divitias*.
  Now "let us **seek not** false riches, but the light."
- **0223D** — *Non hoc ignorando dixit … sed* had been "He **did not say** this in ignorance",
  same class, same fix: "He **said this not** in ignorance."
- **0231D** — *sanguis … non **omnes** emundat* had been "does not cleanse all", where English
  scope is genuinely ambiguous and the wrong reading (that it cleanses nobody) is available. Now
  "cleanses not all", which is the 2a trigger population exactly: a negative on a verb with
  *omnes* adjacent.

⚑ All three read perfectly well before the fix. That is the point of the test.

Two further sentences read *smoothly where the Latin is rough* and were therefore treated as
suspects rather than successes; both were left rough on purpose and are logged above — 0226B
*Recedent* (§0.3) and 0230A *passuros* (§3).


---

## §2d · THE TWO HEAD SPANS RESTORED BY THE 2026-09-03 BRIEF CORRECTION

Both stand at band **0217A** — the last anchor of chunk 0014 — while belonging to chunk 0015, which
is why the band split lost them. **Both were translated in the normal course** (they open CAPUT X in
my Latin, and the English carries them); what was missing was their entry in the collation, and this
supplies it. **Both agree with the Clementine exactly**, and neither is a divergence:

| span | Migne | Clementine | verdict |
|---|---|---|---|
| `VERS. 1.-- *Et inde exsurgens.*` | *Et inde exsurgens.* | Mc 10:1 *Et inde exsurgens venit in fines Judaeae ultra Jordanem* | **agrees verbatim**; a lemma clipped at the verb, and the gloss on it is geographical (*Hucusque ea quae in Galilaea … hinc narrat quae in Judaea*), so nothing turns on the elided words. Rendered "*And rising up from thence.*" — no expansion needed, the fragment is English as it stands. |
| `VERS. 2.-- *Pharisaei interrogabant.*` | *Pharisaei interrogabant.* | Mc 10:2 *Et accedentes pharisaei interrogabant eum* | **agrees verbatim** (Migne capitalises *Pharisaei*, which is his own practice throughout). Rendered "*The Pharisees asked.*" |

⚑ Nothing in either changes a rendering already filed, and no marker follows from them. The third
span in that head region, *Si licet viro* at 0217C, **was** in the original brief and is adjudicated
at §2b — it is the one interesting divergence in the head, and it runs the unexpected way, with the
Clementine as the outlier.

---

## §7 · WHAT THE SHIP TEST (CLAUDE.md 8a) STILL OWES ON THIS RANGE

`node scripts/plate-gate.mjs 9001` currently fails for the whole work — 27 `[sic:]`/`[var:]` markers
against **0 recorded plate reads** — and **five of those 27 are mine**, at cols **0218A · 0222B ·
0223C · 0228D · 0229D**. They cannot ship until those columns are read. Recorded here so the debt is
attached to the range that incurred it.

⚑ **The measured prior says these five are the safe half of the population:** on 9004, *46 of 46
`[var:]` stood at the plate and 8 of 27 `[sic:]` fell, every fall a single word and not one a quoted
clause.* All five of mine are `[var:]` on quoted clauses of three words or more, which is the class
that has never fallen. **I fired zero `[sic:]`**, which is why the three non-words of §0.1 are cruces
and not markers.

⚑ The `[cj:]` at **0225B** (§0.2) is not in the gate's population, and it is the one marker in this
stint I would most want a plate to adjudicate before ship — not because it is likely wrong about the
sense, but because if Migne prints *non infirmitatem* the defect is Corpus Corporum's and the marker
must be withdrawn in favour of a patch.

**Columns I would put in front of a reader, in order:** 0224C (*simpiliciter*, and read the whole
line — addendum C) · 0225B (the *sed* with no *non*) · 0230B (*juugitur*) · 0227B (*praegnantibu.*) ·
0226B (*Recedent*) · then the five `[var:]` columns for the gate. **None of the six candidate columns
falls on the two clipped leaves** named in the launch (pp. 114 and 118, cols 0217/0218 and
0225/0226) — 0225B is on p. 118 and is in the LEFT column, so that one may be affected; the other
five should be clean reads.
