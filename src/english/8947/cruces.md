# Cruces — 8947, *Liber Ecclesiasticus* (Glossa ordinaria)

PL 113, cols 1183C–1232A · 18 chunks · translated 2026-08-29 by four agents
(0000–0004, 0005–0009, 0010–0013, 0014–0017). This file is the MERGE of their four
cruces files; the per-stint files are preserved below in full, unedited, under their
own headings. Nothing has been summarised away.

---

## ⭐ WORK-WIDE CONVENTIONS — reconciled at the merge, 2026-08-29

**Read this before touching the English.** These are the decisions that differed between
stints and were settled work-wide. A later sweep that "fixes" one of them will be
re-introducing the drift this section exists to remove.

### 1. Migne's elision formula *usque ad* → ***as far as*** (settled; 135 occurrences)

The stints split cleanly down the middle: **0000–0009 rendered it "down to" (48×) and
0010–0017 "as far as" (88×)** — one work, two renderings of the same editorial formula,
which is precisely the failure the merge step exists to catch (cf. 11551's
*stylus*/"epistyle" split, 11063's `ALLEGORICE`).

**Resolved to "as far as"**, because it is the form already shipped in the sister Glossa
books — **8976** (Acts) and **8985** — and this is an *editorial* formula, not a lemma.
The "each commentary stands on its own" ruling (do not harmonise a LEMMA across works)
does not reach it: harmonising Migne's own abridgement mark across the Glossa is
desirable, and one voice per work is required regardless.

⚠ Two genuine prose uses of "down to" survive and are CORRECT — *"despising to be bowed
down to earthly things"* and *"come down to us from above"*. They carry no asterisk. Any
future sweep must match the italic formula (`*down to*` / `*down to:`), never the bare
words.

⚠ One site, **0003 @1191D**, prints the formula with no closing asterisk —
`*as far as He taketh seven other spirits…*` — because **the Latin does the same**
(`*usque ad Assumit septem alios spiritus nequiores se*`): the italic runs on through the
quoted continuation. That is mirrored deliberately. Do not "repair" it.

### 2. *impius* → **ungodly** (settled; 10 Latin occurrences)

Three renderings were in use across the work: **"impious"** (0005, 0006, 0008),
**"wicked"** (0006's Ps. 1 quotation, 0013), **"ungodly"** (0014, 0015). Normalised to
**ungodly**, the form shipped in **8985** (2/2).

⛔ **The other occurrences of "wicked" in this work are CORRECT and must not be swept**:
they render *nequam*, *iniquus*, *nequior* and *malitia*, not *impius* — e.g. "wicked
servants" @1217C, "the offerings of the wicked" @1218D, "more wicked than himself"
@1191D. The normalisation was applied site by site against the Latin, never by
find-and-replace on the English.

### 3. Non-words: **carried through, per Pattern 7** — NOT rendered for the evident sense

⚠ **A live contradiction in the corpus, flagged not swept.** The 0005–0009 stint raised
that the sister Glossa work **8976** ruled work-locally that non-words are *rendered for
their evident sense and not carried*, firing no marker on six sites — the opposite of
`translation-style.md` Pattern 7, which Wilson ruled on **2026-07-28**: *"carry it
through… Pattern 7 has no exceptions."*

**8947 follows Pattern 7.** The markers stand; nothing was unwound. 8976's departure is
recorded here for a ruling, and is NOT retrofitted (the 2026-08-18 no-retrofit rule).

### 4. Vocabulary held apart deliberately — do not collapse these

| kept apart | why |
|---|---|
| *Libanus* the **mountain** → "Lebanon" vs *Libanus* the **gum** → kept Latin | the gloss @1209D is an etymology *of the word* (*in Hebraeo candorem significat: in Graeco, θοῦς*); "frankincense" would leave it explaining nothing. Note *ad collem thuris* IS "the hill of frankincense" — a different word, *thus*. |
| *stultus* → "fool" vs *fatuus* → "senseless man" | CAPUT XXI prints both as lemma-words four verses apart (*Fatuus in risu* 21:23, *Stultus a fenestra* 21:26); collapsing them erases a distinction the plate makes. |
| *ungula* (24:21) kept Latin | the gloss IS *Graece ὀνύξ, Latine ungula* — "onycha" makes it circular. |
| *litare* / *sacrificare* (35:3) kept Latin | the whole gloss is the distinction between them. |
| *praecordia* → "inward parts" vs *cor* → "heart" | both stand in one gloss @1216D. |
| *scientia* "knowledge" vs *sapientia* "wisdom"; *charitas* "charity" vs *dilectio*/*amor* "love" | inherited from 8976 §V. |
| *acharis* (20:21) kept Latin inside the italic lemma | Migne's gloss is its etymology. |

Agreed across all four stints, no reconciliation needed: *doctor* → **teacher** (never
"doctor" — 0 occurrences work-wide), *praedicator* → "preacher", *CAPUT N.* →
"CHAPTER N.", `VERS. N.--` kept verbatim, *virtus* decided per occurrence (power of God,
virtue where moral), second person per Pattern 17 (*tu* thou/thee/thy, *vos* you).

### 5. Greek

All 8 Greek words are reproduced in Greek script with accents intact, none
transliterated: φοινίκον · ἐλαἴον · ἐλαία · πλατός · ἄκανθον · στακτήμ · ὀνύξ · θοῦς.
They fall almost entirely in CAPUT XXIV (chunk 0010).

### 6. Plate status — ⭐ THE GATE HAS BEEN RUN (2026-08-29)

**All 22 pages bearing a marker were read at Migne's plate**, covering all 69 original markers.
Scan `raw/scans/pl113/patrologiaecurs04migngoog.pdf`, PDF page = (column + 11)/2, corner numbers
read BEFORE the text on every page, every site re-verified at 600 dpi. Reads recorded in
`data/plate-reads.json`; `node scripts/plate-gate.mjs 8947` passes.

⛔ **Our scan CLIPS THE LEFT MARGIN inside this work** (pp. 598, 604, 620). Left-column sites were
settled at the **Gallica second witness** `ark:/12148/bpt6k5505319w`, **f = (column + 1)/2**.

**Result — and it ran hard in both directions:**

| | |
|---|---|
| `[var:]` | **56 of 56 CONFIRMED on the plate.** Not one was withdrawn. |
| `[sic:]` standing | **4** — *magnituditudinem* 1184C, *obsentiamus* 1197A, *reconciliatione* 1207A, *erudiunmultos* 1210D |
| `[sic:]` **WITHDRAWN as false** | **9** — every one was a Corpus Corporum corruption we were about to blame on Migne |
| `[sic:]` **newly owed** | **4** — defects of Migne's own type that CC had silently repaired, invisible to every check we run |

⭐ **Nine of thirteen `[sic:]` markers were false accusations against Migne** — *misericodia*
(plate: misericordia), *ex* (plate: **et**), *Possuntt* (plate: Possunt), *Ad monitio* (plate
hyphenates Ad-/monitio = **Admonitio**, the 8946 rejoin class), *Domini* (plate: **Domino**),
*cum* (plate: **eum**), *nunde* (plate: nunc/de), *jurejarando* (plate: jurejurando),
*JesusChristus* (plate: two words). All withdrawn; TEI patched.

⭐ **And four of Migne's own defects had been hidden from us** by CC's silent tidying:
**loquendeum** 1190C, **descretur** 1199D, **interrogatia** 1200C, **orationm** 1202C. Restored by
TEI patch and now carried with a `[sic:]` per Pattern 7. ⚑ Note what this means: the translating
agents could not have found these, because our Latin already read correctly. Only the plate shows them.

All 13 corrections are in `data/tei-patches/8947.json`, which runs in both directions.

---


---

# ═══ STINT 0000 — as written by its agent, unedited ═══

# Cruces — 8947 (Liber Ecclesiasticus, Glossa ordinaria), chunks 0000–0004

Agent batch: chunks 0000–0004, cols 1183C–1196C (CAPUT I – CAPUT XI).
No foot-of-page conjecture apparatus is available for this work (plate spot check
2026-08-29 records none on the pages read); every reading below is rendered as printed
and conjectured only here.

---

## A. Carried type and non-construing readings (Pattern 7 / 12)

### 1184C — *magnituditudinem*
Printed: *vel magnituditudinem bonitatis ejus et misericordiae*.
Non-word (dittographic syllable). Carried as `[sic: *magnituditudinem*]`.
Conjecture: *magnitudinem*, near-certain. The clause keeps its governing verb
(*posse … penetrare*) and its negation (*neminem*) outside the marker.

### 1184D — bracketed supply `[non est in charitate]` inside the 1 John 4:18 lemma
Printed: *Timor* [non est in charitate] *animae in charitate, [n: (Joan. IV)]*, etc.
The square brackets are in the source, not ours. The bracketed words are the Vulgate's
(1 Jn 4:18 *Timor non est in charitate*); what remains outside them, *animae in
charitate*, does not construe with them. Rendered with the bracket preserved and its
contents translated (they are scripture, not an *al.* variant). Not marked `[sic:]`:
the type is legible and the bracket looks editorial.
⚠ Candidate left-margin clip: this sits at the head of a column band. Plate check wanted.

### 1187D–1188A — *Cui Deum honorem constituit*
Printed: *Cui Deum honorem constituit, non debet a filiis inhonorari.*
Rendered literally as a double accusative ("He for whom he appointed God as his
honour…"). Conjecture: *Cui Deus honorem constituit*, "for whom God appointed honour" —
which is what the following clause (*quia Deus judicio suo exquiret*) expects. Not
emended in the text.

### 1189C — *Per fores autem potes Scripturas et eorum doctores intelligit.*
Second-person *potes* and third-person *intelligit* in one clause; it will not construe.
Rendered as closely as the printed words allow ("And by the doors thou canst, he
understands the Scriptures and their teachers"). Conjectures: *potest … intelligi*, or
*potes … intelligere*. Both are real words, so nothing is carried under Pattern 12.

### 1196B — *nec immunes sunt a dilecto*
*dilecto* is a real word (abl. of *dilectus*), so it is rendered, not carried: "nor are
they free from the beloved." Conjecture: *delicto*, "from fault" — which is what
*quia meditatio eorum est in dolo* in the same sentence requires. Logged, not repaired.

### 1186A / 1194C — *Hypocrita..* and *VERS 37.--*
Printed punctuation preserved: the double stop after *Hypocrita* (1186A) and the missing
stop after *VERS* at 1193C. Pattern 8, not defects of ours.

---

## B. Vulgate divergences marked `[var: …]` in the text

| col | Migne prints | Vulgate | note |
|---|---|---|---|
| 1184C | *in mandatis ejus **cupit** nimis* (Ps 111:1) | *volet nimis* | verb changed; the gloss does not turn on it |
| 1184D | *Timor Domini sanctus **permanet** in saeculum saeculi* (Ps 18:10) | *permanens* | ⚠ the SAME verse is printed correctly as *permanens* at 1187C, four columns later — internal evidence that 1184D is the defective setting |
| 1185B | *Non amat pestilens eum qui se **corrigit*** (Prov 15:12) | *corripit*, "him that rebuketh him" | reflexive vs. transitive; changes who is corrected |
| 1185C | *qui autem fatuus est **aperuit** stultitiam* (Prov 13:16) | *aperiet* | perfect for future |
| 1185C–D | *ostendat **conversationem bonam** in mansuetudine sapientiae* (Jas 3:13) | *ostendat ex bona conversatione operationem suam* | the object of *ostendat* is different |
| 1186D | *Beatus qui confidit in Domino, et erit **Deus** fiducia ejus* (Jer 17:7) | *Benedictus vir qui confidit in Domino, et erit **Dominus** fiducia ejus* | opening and divine name both diverge |
| 1186D | *Qui autem **dereliquerint Deum**, confundentur et in terra scribentur* (Jer 17:13) | *omnes qui te derelinquunt confundentur; recedentes a te in terra scribentur* | second-person address of the Vulgate lost |
| 1187A | ***Prope est Deus** omnibus invocantibus **se** in veritate* (Ps 144:18) | *Prope est **Dominus** omnibus invocantibus **eum*** | divine name; cf. the *timor/amor* risk class |
| 1188B | *maxime qui laborant in **doctrina et verbo*** (1 Tim 5:17) | *in verbo et doctrina* | word order reversed |
| 1188D | *thesaurizas tibi iram **in die judicii*** (Rom 2:5) | *in die irae* | |
| 1189A | *Vade et revertere, **cum cito possis dare*** (Prov 3:28) | *cras dabo tibi: cum statim possis dare* | |
| 1189A–B | *clamabit, et non exaudiet **Dominus*** (Prov 21:13) | *et ipse clamabit, et non exaudietur* | passive turned active with a supplied subject; the negation is present in both and is carried |
| 1189B | *substantiam **mundi** … fratrem suum **necesse habentem*** (1 Jn 3:17) | *substantiam **hujus** mundi … **necessitatem habere*** | ⚠ the SAME verse is printed with *hujus mundi … necesse habere* at 1193C |
| 1190A | ***Negotia**, dum venio* (Lk 19:13) | *Negotiamini* | *Negotia* is a real (if rare) active imperative, so it is rendered, not carried |
| 1190C | *stultitia magis speranda est, quam **correctio illius*** (Prov 29:20) | *quam illius correptio* | word and order |
| 1191A | lemma **Amicus fortis** (Sir 6:14) | *Amicus fidelis protectio fortis* | the adjective has migrated onto *amicus*; the gloss at VERS. 16 then repeats *Amicus fidelis* |
| 1191B | lemma *Qui timet **Dominum*** (Sir 6:17) | *Qui timet **Deum*** | ⚠ MODERATE confidence — verify on the plate |
| 1191C | *ut cognoscant te **solum verum Deum*** (Jn 17:3) | *solum Deum verum* | word order |
| 1192A | *Non est homo **super terram**, qui faciat bonum* (Eccl 7:21) | *Non est enim homo **justus in terra*** | *justus* absent from Migne |
| 1192A | *et magis illo **spem habet stultus*** (Prov 26:12) | *magis illo spem **habebit insipiens*** | |
| 1192B | lemma *Noli **amare** mendacium* (Sir 7:13) | *Noli **arare** mendacium* | ⚠ the strongest single finding in this batch: the Vulgate's odd "plough a lie" has become "love a lie", and the gloss (*Omne mendacium malum*) is compatible with either, so nothing on the page flags it |
| 1194A | *blanditiis labiorum **traxit eum*** (Prov 7:21) | *protraxit illum* | |
| 1194D | *Praecipe divitibus **non altum sapere*** (1 Tim 6:17) | *Divitibus hujus saeculi praecipe non **sublime** sapere* | |
| 1195D | *Homo enim videt ea quae **patent*** (1 Sam 16:7) | *quae **parent***, "the things that appear" | both are real words; the sense shift is small but real |

---

## C. Divergences observed and NOT marked (logged only)

Truncated lemmas are not listed; only mid-lemma or mid-quotation differences judged too
small, or too uncertain against the recension this gloss follows, to carry a `[var:]`.

- **1185A** Jas 1:26 *Si quis putat…* — Vulg *Si quis **autem** putat*.
- **1185D** *Timor Domini sapientiae et disciplinae custodia est* (n. cites Prov. XIII) —
  no Vulgate verse matches; closest is Prov 15:33 *Timor Domini disciplina sapientiae*.
- **1186A/B** Ps "LXI" *Disperdet enim Deus omnes qui loquuntur mendacium* — Ps 5:7 has
  *Perdes omnes*; and Mt 24:51 *ibi* for Vulg *illic*.
- **1187A** Rom 1:17 *Justus **enim** ex fide vivit* — Vulg *autem*.
- **1187C–D** *Finis **enim** praecepti charitas* — 1 Tim 1:5 has *autem … est*; the second
  half is Rom 13:8. A conflation, printed without a note marker.
- **1188A** Eph 3:15 *in coelo* for Vulg *in caelis*.
- **1188C** Dan 4:24 opening reshaped (*Consilium meum, o rex, placeat tibi*).
- **1189A** Prov 14:21 drops *suum* and *autem*. **1189C** Prov 24:11 *illos* for *eos*.
- **1189C** Prov 8:34 *vigilat **ante** fores meas* for *ad fores meas*.
- **1190B** Mt 5:29 drops *dexter*; Lk 9:23 *venire post me* for *post me venire*.
- **1190B** 1 Cor 4:20 drops *enim* and *est*.
- **1190C vs 1192C** Jas 1:19 is printed WITHOUT *autem* at 1190C and WITH it at 1192C —
  the same internal-inconsistency shape as the Ps 18:10 and 1 Jn 3:17 pairs above.
- **1190D** lemma *Nolite fieri* (Sir 6:1) — Clementine has singular *Noli fieri*. Not
  marked: this gloss's verse numbering diverges from the Clementine throughout (e.g.
  *eleemosyna* at CAP. III VERS. 15, not 3:33), so the underlying recension is not settled.
- **1191A** Rom 16:17 omits *praeter doctrinam quam vos didicistis*.
- **1191B** Jn 15:15 *quae* for *quaecumque*. **1192A** Lk 11:26 drops *secum*.
- **1192B** Rom 1:32 *consentiunt **facienti*** for *facientibus*; Prov 26:18–19 reshaped
  and cited as *(Prov. XX)*.
- **1193B** Sir 30:10 *arrideas … obstupescant* for *corrideas … obstupescent*.
- **1193B** *Sive enim servi, sive liberi, omnes in Christo unum sumus* — 1 Cor 12:13
  conflated with Gal 3:28.
- **1194C** *Vae terrae cujus rex puer est* is Eccl 10:16, cited *(Isa. IX)*; and
  *Manducemus et bibamus* matches 1 Cor 15:32, cited *(Isa. XXII)*. Anaphoric references
  left untouched per the standing rule.
- **1194D / 1195A** 1 Tim 6:10 printed three ways in three columns: *Radix enim omnium
  malorum **est** cupiditas* (1193D), *Radix enim omnium malorum cupiditas* (1194D),
  *Radix omnium malorum cupiditas* (1195A).
- **1195C** Jas 2:1 heavily truncated; Ps 33:11 printed *Divites **autem** eguerunt* at
  1195C and *Divites eguerunt* at 1196C.
- **1195C** lemma *Magnus est judex* (Sir 10:27) — Clementine *Magnus, et judex, et potens
  est in honore*. Not marked: uncertain against this recension.
- **1195D** 2 Cor 10:17 drops *autem*; 1 Sam 16:7 *Non … nec* for *Ne … neque*, and drops
  *ego*.
- **1196B** *Fili, ne facias multos libros, quibus non est finis* is attributed to
  *Ecclesiasticus* but is Eccl 12:12 (*Faciendi plures libros nullus est finis*). The
  negation *non est finis* is Migne's and is carried.

---

## D. Notes on structure (no action)

- Column bands run 1183C → 1183D → 1184C in chunk 0000 and 1188D → 1189A across the
  0001/0002 boundary. Per the standing ruling these are positional quarter-guides;
  no text breaks mid-word or mid-construction at any anchor in this batch.
- CAPUT VII and CAPUT IX each open with a lemma carrying no `VERS.` number. Printed so.
- No Greek occurs in chunks 0000–0004 (the Ecclus. 24 spice list falls later in the work).

---

# ═══ STINT 0005 — as written by its agent, unedited ═══

# *Liber Ecclesiasticus* (Glossa ordinaria), PL 113 — cruces for chunks **0005–0009**

Stint: chunks 0005, 0006, 0007, 0008, 0009 = **CAPUT XII–XXIII**, cols **1196C–1208B**.
Latin words 4,531. `verify-english.mjs` clean; column anchors and `[n:]` notes at exact 1:1
parity with the Latin twins in all five chunks; zero em-dashes, zero guillemets (the Latin
twin prints none).

**Apparatus fired in this stint: 17 `[var:]` · 4 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` ·
0 `[nt:]` · 0 `[f:]`.** Every one is listed below with its column for the plate check.

⚠ **No editorial apparatus was available.** The 2026-08-29 spot read of this work (pp. 597–598
= cols 1183–1186) found **no foot-of-page conjecture notes**, and the spot coverage does not
license extending that to cols 1196–1208. Nothing below was settled against Migne's own
conjecture, because there is none in hand. The left-margin clipping confirmed at p. 598 did
**not** recur in any column of this stint: no lemma or gloss in 0005–0009 has lost
word-openings at a column start.

---

## §V · LOAD-BEARING VOCABULARY (for the merge)

Fixed at first occurrence and never varied inside this stint. Where the peer stint
(0000–0004) had already committed, I inherited from it rather than re-deciding.

| Latin | English | note |
|---|---|---|
| *usque ad* (in Migne's abridged Raban excerpts) | ***down to*** | **inherited from the peer stint 0000–0004.** The sister Glossa work 8976 (Acts) uses *as far as*; within 8947 the peer's form governs. |
| *CAPUT* | CHAPTER | |
| *VERS. N.--* | kept verbatim, unanglicized | |
| *doctrina* | **teaching** | never "doctrine", even in *sana doctrina* → "sound teaching" (1199A). Peer stint uses "teaching" at 1189C. |
| *doctor* | **teacher** | *officium doctoris* = "the office of a teacher" (1197B); *sancti doctores* = "the holy teachers" (1206A). Peer uses "teachers" for *doctores* at 1189C. |
| *stultus* | **fool / foolish** | |
| *fatuus* | **senseless (man)** | held apart from *stultus* deliberately: CAPUT XXI prints both as lemma-words within four verses (*Fatuus in risu* 21:23, *Stultus a fenestra* 21:26) and collapsing them would erase the plate's own distinction. |
| *insipiens* | **senseless** only in the fixed Ps. 48 tag, rendered "beasts without understanding" (1201A) to avoid colliding with *fatuus* | |
| *sensus* | **sense / understanding** | "understanding" where it means the mind's grasp, "sense" where it means the meaning of a text. |
| *haereticus / catholicus* | heretic / catholic (lower case, as Migne prints) | |
| *Ecclesia* | the Church (capital, mirrored from the plate) | |
| *Synagoga* | the Synagogue | |
| *eleemosyna* | alms / almsgiving | |
| *timor Domini* | the fear of the Lord | Ps. 110:10 at 1202D checked word-for-word: Migne prints **timor**, not *amor*. So does every other occurrence in this stint. |
| *Mystice / Allegorice / Historice / Moraliter / Tropologice / ad litteram* | Mystically / Allegorically / Historically / Morally / Tropologically / according to the letter | adverbs, following the plate's adverbs (Pattern 9 precedent, 11057). |
| *casula* (Ecclus. 14:25) | "little dwelling" | no gloss depends on the word. |
| *loramentum* (Ecclus. 22:19) | "binding" / "wooden binding" | the gloss expounds *ligna* and *fundamentum*, not the binding itself. |
| *acharis* (Ecclus. 20:21) | **kept as Latin** inside the italic lemma | Migne's gloss IS the etymology (*Sine gratia Spiritus sancti; vel amarus*) — case 2 of the "each commentary stands on its own" ruling. No second italic marker inside an italic lemma (Pattern 10). |

---

## ⛔ §1 · THE VULGATE COLLATION — every lemma and every quotation, collated word by word

Collated against the on-disk Clementine text (`sources/vulgate/clementine/`), not from memory.
**Truncation is not divergence** and no short lemma is reported below. Roughly 130 lemmata and
inline quotations were collated; the ones that agree are not listed.

### §1a · MARKED `[var:]` — 12, with columns for the plate check

| col | Migne prints | Vulgate | why it is material |
|---|---|---|---|
| **1197B** | *Si enim sal **infatuatum fuerit**, ad nihilum valet ultra* (Matth. 5:13) | *Quod si sal **evanuerit**, in quo salietur? ad nihilum valet ultra* | different verb, and the Vulgate's question is absent entirely. The gloss applies it to the heretic-teacher who claims to be a physician of souls. |
| **1198D** | ***Operamini** dum dies est: venit enim nox, quando jam **non licet** operari* (Joan. 9:4) | *Me oportet operari opera ejus qui misit me, donec dies est: venit nox, quando **nemo potest** operari* | Migne turns a first-person statement into a **plural imperative** and the argument rests on the imperative ("he exhorts that we offer"). |
| **1199B** | *Qui biberit aquam quam ego dabo **vobis**, fiet in eo fons aquae salientis in vitam aeternam* (Joan. 4:14) | *qui autem biberit ex aqua quam ego dabo **ei**, non sitiet in aeternum: sed aqua quam ego dabo ei, fiet in eo…* | conflated, and **plural *vobis*** against Vulg. singular *ei*, with *fiet in eo* singular left standing after it. |
| **1199D** | *quoniam justus **Deus**, et justitias dilexit* (Psal. 10:8) | *quoniam justus **Dominus**, et justitias dilexit* | ⭐ a divine-name swap, and **this work quotes the same verse correctly at 1202C** (*Justus Dominus, et justitias dilexit: aequitatem vidit vultus ejus*). Two printings of one verse, four columns apart, disagreeing. |
| **1199D** | ***A tribus impiis** deseretur* (Ecclus. 16:5, lemma) | ***tribus impiorum** deseretur* | ⭐⭐ the strongest lemma finding in the stint. Vulg = "the **tribe** of the impious shall be made desolate"; Migne = "**by three impious men** it shall be deserted". **The gloss expounds Migne's reading, not the Vulgate's**: *qui cogitatione, locutione, opere seipsos sequestrant* — thought, word, deed, **three** of them. 7a″ exactly: the exposition rests on a word that is not in the received text. |
| **1200B** | *interrogatio **hominum*** (Ecclus. 16:22, lemma) | *interrogatio **omnium*** | the gloss then names the classes of men (idolaters, heretics, false catholics), following *hominum*. |
| **1201B** | *Statuit terminos gentium juxta numerum **angelorum Dei*** (Deut. 32:8) | *constituit terminos populorum juxta numerum **filiorum Israel*** | ⭐⭐ the LXX/Vet. Lat. reading, and **the whole gloss depends on it**: the lemma is *Rectorem* and the gloss reads it as *Angelos, quibus commisit Deus custodiam singularum gentium*. On the Clementine reading the proof-text proves nothing. |
| **1201C** | ***Currite** dum lucem habetis, **ne** tenebrae vos comprehendant* (Joan. 12:35) | ***Ambulate** dum lucem habetis, **ut non** vos tenebrae comprehendant* | different verb; the urgency ("Run") is the point of the gloss (*non est tempus operandi, sed praemium recipiendi*). |
| **1202B** | *Sermo durus suscitat **rixas**, lenis mitigat suscitatas* (cited *Prov. XV*) | Prov. 15:1 *sermo durus suscitat **furorem***; Prov. 15:18 *qui patiens est mitigat suscitatas* | a **conflation of two verses** four columns apart in Proverbs, with *rixas* for *furorem* and *lenis* for *qui patiens est*. Cited again at 1207B in the same conflated form, so it is Migne's stable text here, not a one-off slip. |
| **1203D** | *Qui enim scit voluntatem domini et non facit, vapulabit **paucis*** (Luc. 12:47) | *…vapulabit **multis*** | ⭐⭐⭐ **the most consequential finding of the stint.** The Vulgate gives *multis* to the servant who KNEW and *paucis* to the one who did not; Migne's 1203D gives *paucis* to the one who knew, **inverting the verse**, and then glosses it *exiguo enim conceditur misericordia* — building an argument on the inverted reading. **And this same work prints the verse correctly at 1206C**: *Servus enim qui scit voluntatem domini sui, et non facit: vapulabit multis. Qui autem nescit, paucis.* Three columns apart, the plate contradicts itself. Rendered as printed at 1203D per Pattern 7; the `[var:]` carries the received reading. **Plate-check both 1203D and 1206C together.** |
| **1204C** | *Voca pauperes et debiles, **caecos, claudos**, et beatus eris* (Luc. 14:13) | *voca pauperes, debiles, **claudos, et caecos**: et beatus eris* | word order of the last pair reversed, plus *et* inserted after *pauperes*. Reported because the pair is a fixed list. |
| **1205B** | *Bonus homo de bono thesauro **cordis sui** profert **bonum*** (Matth. 12:35) | *Bonus homo de bono thesauro profert **bona*** | *cordis sui* imported from Luc. 6:45; singular *bonum* for plural *bona*. |
| **1205C** | *Adversarius **noster** diabolus* (I Petr. 5:8) | *adversarius **vester*** | first person for second. A person-of-pronoun swap has a full English exponent, which is why it is marked and the *eum/eam* case below is not. |
| **1206D** | ***Sicut paleae***, etc. (Ecclus. 22:21, lemma) | ***Sicut pali in excelsis**, et caementa sine impensa posita* | ⭐⭐ *paleae* (chaff) for *pali* (stakes) — a completely different image, and the gloss follows Migne by supplying the house built on **sand** (Matth. 7:26) rather than stakes on high ground. |
| **1207D** | ***Anima callida*** (Ecclus. 23:22, lemma) | ***Anima calida** quasi ignis ardens* | ⭐⭐ *callida* (crafty) for *calida* (hot), one letter. **Migne's own gloss contradicts his own lemma**: it reads *ardentem animam habent* — a **burning** soul — which is *calida*. So the plate diverges from the Vulgate in the lemma and agrees with it in the gloss, in one entry. |
| **1208A** | *Haec **in Ecclesia*** (Ecclus. 23:34, lemma) | *Haec **in ecclesiam adducetur*** | ablative for accusative, and the verb is gone. The gloss reads it locatively (*in conventu fidelium… declaratur*), so the divergence is what is expounded. |

*(All sixteen rows carry a `[var:]` in the text — 1197B, 1198D, 1199B, 1199D ×2, 1200B, 1201B,
1201C, 1202B, 1203D, 1204C, 1205B, 1205C, 1206D, 1207D, 1208A — and a seventeenth sits at
**1203B** (Ecclus. 19:7 *verbum durum et nequam* for Vulg. *verbum nequam et durum*), listed with
the unmarked divergences in §1b because the pair's order is all that moved. **17 `[var:]` in
all.**)*

### §1b · COLLATED DIVERGENCES DELIBERATELY LEFT UNMARKED

Real differences from the Clementine text that fire **no** marker, because English has no
exponent for them or the sense does not turn on them. Listed so that a later sweep does not
re-derive them, and so that the *absence* of a marker is itself on the record.

- **1196D** Amos 1:3 *non convertam **eam*** (Vulg. ***eum***). Grammatical gender only; English
  "it" either way (Pattern 9 — no English exponent). ⚠ Note the negation *non* IS printed and IS
  carried.
- **1196D** Tob. 4:18 *Panem tuum et **vinum*** (Vulg. *vinum **tuum***). One dropped possessive.
- **1197A** Matth. 7:6 *Nolite **sanctum dare** canibus* (Vulg. *Nolite **dare sanctum** canibus*).
  Word order; no English exponent.
- **1197C** Ecclus. 13:2 lemma *Pondus super se **tollet*** (Vulg. ***tollat***). Future indicative
  for jussive subjunctive. Left unmarked because the gloss (*Haec moraliter nos instruunt*) reads
  it as instruction either way; recorded because it is a mood change, which normally would be
  material.
- **1198A** Prov. 26:11 *ita **qui** iterat stultitiam suam* (Vulg. *sic **imprudens qui** iterat*).
  One dropped noun; sense unchanged.
- **1198B** Prov. 19:4 *a paupere **vero*** (Vulg. *a paupere **autem***). Connective only.
- **1198C** Jac. 3:2 ***Qui** in verbo non offendit, perfectus est* (Vulg. *Si quis in verbo non
  offendit, **hic** perfectus est **vir***). Compression; both negations present and carried.
- **1199C** Jac. 1:13 *Deus intentator malorum est* (Vulg. *Deus **enim** intentator*).
- **1199D** Ecclus. 16:6 lemma *Multa talia vidit **oculus*** (Vulg. *oculis **meus***, itself odd
  in the Clementine). Dropped possessive.
- **1199D** Ecclus. 16:12 lemma *Misericordia enim et ira cum illo* (Vulg. *et ira **est** cum illo*).
- **1200C** Rom. 2:13 *Non enim auditores legis **justificantur**, sed factores* (Vulg. *auditores
  legis **justi sunt apud Deum**, sed factores legis **justificabuntur***). Compressed; sense held.
- **1201B** Ecclus. 17:13 lemma *Coram **illo*** (Vulg. *coram **ipso***). No English exponent.
- **1201D** Ecclus. 18:1 lemma *Qui **vivit** in aeternum* (Vulg. *Qui **vivet** in aeternum*).
  Present for future, one letter, and a very widely attested Vulgate variant. **This one is a
  judgement call**: it has an English exponent ("liveth"/"shall live") and I rendered the present.
  If the merge wants a thirteenth `[var:]`, this is the candidate.
- **1202A** Ecclus. 18:14 lemma *Excipiens doctrinam* (Vulg. *Miseretur **excipientis** doctrinam
  miserationis*). Nominative for genitive; the lemma is being re-cut as a heading.
- **1203A** Ecclus. 18:32 quoted in the gloss as ***Non** oblecteris in turbis* (Vulg. ***Ne**
  oblecteris*). ⚠ A negation-form difference, checked deliberately: both are negative, and English
  ("Be not delighted") has no exponent for *ne* vs *non*. **The negation is present in Migne and
  present in the English.**
- **1203B** Ecclus. 19:7 lemma *verbum **durum et nequam*** (Vulg. *verbum **nequam et durum***).
  Word order of a fixed pair — reported per the brief, marked `[var:]` in the text because the pair
  is quoted as a unit.
- **1203C** Ecclus. 19:16 lemma *Est qui labitur lingua **sua*** (Vulg. *lingua*, no possessive).
- **1204B** Ecclus. 20:6 lemma *Est **autem** tacens*.
- **1204C** Rom. 5:20 *ubi abundavit delictum, **superabundet** gratia* (Vulg. *superabundavit*).
  Migne's own framing *Ut* governs the subjunctive, so the change is grammatically motivated.
- **1204D** Ecclus. 20:22 lemma *Fatui reprobabitur parabola* (Vulg. ***Ex ore** fatui reprobabitur
  parabola*). The lemma drops the head of the verse rather than its tail — the reverse of ordinary
  incipit truncation. Recorded for that reason, not for the sense.
- **1205A** Luc. 9:26 *Qui erubuerit **me et meos sermones**, hunc erubescet **Filius hominis***
  (Vulg. *Nam qui **me** erubuerit, et meos sermones: hunc **Filius hominis erubescet** cum venerit
  in majestate sua*). Word order and truncation.
- **1205B** Eccle. 7:20–21 *Non est enim qui faciat bonum, et non peccet* (Vulg. *non est enim
  **homo justus in terra** qui faciat bonum et non peccet*). Both negations carried.
- **1205D** Ecclus. 21:11 lemma *Via **peccantium*** (Vulg. *Via **peccatorum***). Participle for
  noun; "them that sin" / "sinners" is barely an exponent.
- **1206A** Ecclus. 21:18 lemma *Displicet illi* (Vulg. *displice**bit** illi*).
- **1206C** II Joan. 11 *Qui enim **dixerit ei** ave, communicat **ejus operibus** malignis* (Vulg.
  *Qui enim **dicit illi** Ave, communicat **operibus ejus** malignis*).
- **1206D** Ecclus. 22:19, the gloss's own re-quotation: *Loramentum ergo ligneum colligatum
  fundamento aedificii non **dissolvitur*** (Vulg. *colligatum **in** fundamento… non
  **dissolvetur***). Present for future, and a dropped preposition, **inside a re-quotation the
  commentator makes of his own lemma** — so the divergence is between Migne's gloss and Migne's
  Vulgate, not only between Migne and the Clementine.
- **1206D** Matth. 7:26 *similis **est** viro stulto, qui **aedificat** domum suam super arenam*
  (Vulg. *similis **erit** viro stulto, qui **aedificavit***). Tenses; and the quotation is
  unitalicized in the plate, so it is unitalicized in the English (Pattern 8a family).
- **1207A** Ecclus. 23:15 lemma *Est alia loquela* (Vulg. *Est **et** alia loquela*).

### §1c · MIGNE'S OWN `[n:]` CITATIONS THAT POINT TO THE WRONG PLACE

Reproduced **verbatim and untranslated** in every case, per the note rule. Recorded here only
so the indexer's `refKey` resolution has the true target, and so nobody proposes a text change.
⚠ None of these is a defect claim.

- 1199B `[n: (Joan. XIV)]` on *Qui biberit aquam* → **Joan. 4**:14.
- 1200A `[n: (Joan. XIV)]` on *Qui habet mandata mea* → correct, Joan. 14:21.
- 1198A `[n: (Prov. VI)]` on *Sicut canis revertitur ad vomitum* → **Prov. 26**:11.
- 1197D `[n: (Eccle. XXVII)]` on *Stultus ut luna mutatur* → **Ecclus. 27**:12 (this book, not
  Ecclesiastes; the same abbreviation *Eccle.* serves both in this work — see 1205B).
- 1201A `[n: (Ephes. IX)]` on *Induite novum hominem* → **Ephes. 4**:24. Ephesians has six
  chapters; "IX" cannot be right, but it is what the plate carries.
- 1203B `[n: (I Cor. XII)]` on *Omnia credit, omnia sperat* → **I Cor. 13**:7.
- 1205B `[n: (Eccle. VII)]` on *Non est enim qui faciat bonum* → **Eccl. 7**:20–21 (here
  Ecclesiastes proper).
- 1198C `[n: (Psal. XXXVIII)]` on *Qui thesaurizat* → correct, Ps. 38:7.

---

## §2 · MARKED DEFECTS — 3 `[sic:]`, with columns

### ⭐ 1207A — *reconciliatione* : a FUSED word-division defect that eats the sentence's negation

Migne prints, at Ecclus. 22:27, in the gloss:

> *Effugiet amicus. Non rediturus, nec post reconciliationem; unde: **Amico reconciliatione
> credas in aeternum**.*

The maxim as printed says **"trust a reconciled friend for ever"** — the exact opposite of the
gloss it is adduced to prove, whose own words are *Non rediturus, **nec** post reconciliationem*
("not to return, **nor** after reconciliation"). The received sententia is *Amico **reconciliato
ne** credas in aeternum*. **Migne's *reconciliatione* is *reconciliato* + *ne* run together**, the
fused direction of Pattern 10 — and the *ne* it swallows is the clause's only negation.

Treatment, and it is the pair of rules working together:
- **Pattern 10**: the whole broken run is carried, untranslated, in italics — `[sic: *reconciliatione*]`.
- **7a⁗ question 2**: *does the clause still carry its negation?* It does not, so the negation is
  restored **in plain English beside the marker**, not inside it. The English reads: *To a friend
  [sic: *reconciliatione*], once reconciled, trust thou not for ever.*

This is precisely 7a⁗-b's dangerous shape: the quarantine is the size of a lexeme, and the lexeme
was carrying the negative. Marking the run and letting the sentence go affirmative would have
printed, on a reading page, the reverse of what the plate's own next words argue.
**Plate-check 1207A.**

### 1197B — *obsentiamus* : a non-word carrying the clause's verb

*Non ergo eis **obsentiamus**, nec potestatem tribuamus.* *obsentiamus* is not a Latin word; the
conjecture is ***assentiamus*** ("let us not assent to them"), which the dative *eis* and the
coordinate *nec potestatem tribuamus* both support. Carried untranslated in italics with
`[sic: *obsentiamus*]` per Pattern 7's non-word class and Pattern 12. 7a⁗ checked: the negation
*Non* is **outside** the marker and stands in the English, and the coordinate clause supplies a
predicate, so the sentence is not left verbless.

⚖ **Flagged for the merge as a live disagreement of practice, not as a settled call.** The
sister Glossa work **8976** (Acts) ruled in its own cruces, work-locally, that non-words are
**rendered for the evident sense and not carried**, and fired no marker on six such sites. I
have followed `translation-style.md` (Pattern 7's non-word ruling, Wilson 2026-07-28) instead,
because that is the file my brief names as authoritative. **If 8947 wants 8976's practice, this marker
and the ones at 1203D and 1205A are the three to unwind** — and the unwinding is mechanical, since
both cruces entries carry the conjecture. Do not unwind them silently.

### 1203D — *misericodia* : a non-word carrying the clause's SUBJECT

*Qui enim scit voluntatem domini et non facit, vapulabit paucis: exiguo enim conceditur
**misericodia**.* *misericodia* is *misericordia* with its **r** dropped — a single missing letter
that leaves a form which is not a word. Carried untranslated in italics with
`[sic: *misericodia*]` (Pattern 7 / Pattern 12).

7a⁗ checked, and it changed the rendering: the marked run is the clause's **subject**, so
quarantining it alone would have left an English verb with nothing to do it — "for to the small is
granted." The sense is therefore supplied **beside** the marker, in apposition and in plain
English: *for [sic: *misericodia*], mercy, is granted in small measure.* The verb, the subject and
the sense all survive outside the quarantine.

⚠ **This is the same column as the Luke 12:47 *paucis* finding (§1a).** One column carrying both
an inverted scripture quotation and a broken word is worth reading as a whole. **Plate-check
1203D.**

### 1205A — *ex* : a real word with no grammatical slot

*Homo acharis… vel amarus, quia **amarum ex noxium** sensum ingerit auditoribus.* *ex* governs
the ablative and cannot stand between two accusative adjectives agreeing with *sensum*; the
conjecture is ***et***. Marked `[sic: *ex*]` under Pattern 12's first test — a real word that has
no grammatical slot cannot be carried by any English — and both adjectives are rendered around
it, so nothing is swallowed. **Plate-check 1205A.**

---

## §3 · RENDERED LITERALLY, NO MARKER — the Pattern 7 cases

Each of these is a reading that does not construe, or barely construes. **None of them is
repaired in the English.** There is no Migne conjecture to consult (see the plate note above),
so each is rendered as closely as the printed words allow and left here.

### ⭐ 1203C — *ictum* : the clause's object is the wrong noun, and the English is nonsense

> *Stultus enim perturbat sensum, ut gemitum doloris exprimat per actum nefandum: sed **non
> conturbat ictum** quidquid acciderit.*

Rendered as printed: "but whatever shall have happened **disturbs not the blow**." The sense the
passage plainly needs is a *person* — the wise man of the opening sentence (*Non aequaliter
stultum et sapientem commovet stultum verbum*), and the next clause is about *illi qui de
firmitate cordis confidit*. The likeliest conjecture is ***justum***, "the just man"
(*ictum* / *justum*, an easy misreading); ***sapientem*** would also serve the sense but is not
close to the type.

⚠ **Deliberately NOT marked `[cj:]`.** Pattern 18 fires where the faithful English **misleads** —
where a reader takes away a false claim and never knows. "Disturbs not the blow" misleads nobody;
it is visibly broken, and a reader who meets it knows to look. Firing `[cj:]` here would put our
conjecture on the page for a case that does not need protecting, which is the spam direction of
that marker. ⚠ Note also that the negation *non* is printed, is carried, and is **not** what is
wrong with the sentence.

### 1196D — a verbless fragment after the Amos citation

> *Dubiam et dolosam doctrinam, quam in expositione divinae Scripturae expendunt.*

An accusative noun phrase with a relative clause and **no governing verb** — rendered as the
fragment it is: "A doubtful and deceitful teaching, which they expend in the exposition of Holy
Scripture." It reads as a stranded gloss on a lemma that is not printed (Ecclus. 12:4 territory).
7a⁗ question 1 asked and answered: nothing was quarantined here, so nothing was swallowed; the
verblessness is the plate's. Rendered, not repaired. **Worth a plate read at 1196D** — if
anything is lost before *Dubiam*, it is source loss and would take an `[ed:]`, not a `[sic:]`.

### 1198D — *cruciendam* for *cruciandam*

Gerundive of *cruciare* in *-endam* rather than *-andam*. **Rendered normally** ("to be tormented"),
no italics, no marker: first/third-conjugation gerundive confusion is an attested medieval
orthographic habit, and Pattern 9 explicitly reserves carry-through for forms unique to this
plate. Recorded so a later sweep does not churn it.

### 1206C — a sentence that simply stops

The Raban excerpt at Ecclus. 22:10 ends *…mors enim corporis, finis laboris mundani* with **no
terminal mark at all**. Pattern 8: never supply. The English stops where the plate stops, without
a period. Not a defect of ours.

### 1201C — *postquam*, which does construe

*In praesenti vita, **postquam** non est tempus operandi, sed praemium recipiendi.* Read as *post
quam* ("after which"), which construes and matches the parallel argument at 1198D (*post mortem
enim… non est tempus operandi, sed mercedem recipiendi*). **Checked and dismissed as a
non-defect** — recorded because it looks like one at first sight.

---

## §4 · CHECKED NON-DEFECTS — do not spend a plate read on these

- **Column bands.** The stint runs 1196D → 1208B with the ordinary A–D pattern; **no anchor breaks
  a word or a construction.** No band arithmetic was performed, per the standing rule.
- **Repeated `## ` heads.** None: each of CAPUT XII–XXIII opens once, in its own chunk.
- **Pattern 4 `[f:]`.** Not fired, and correctly so — this is lemma-and-gloss commentary, which the
  brief's false-positive list rules out explicitly.
- **`noteCount` frontmatter.** 0006's frontmatter says 27 and its body carries **28** `[n:]`.
  Body-to-body parity with the Latin twin is exact (28 = 28), which is the test that matters.
- **Guillemets.** The Latin twin prints none in any of these five chunks; the English prints none.
  Straight quotes were not needed either: every quotation in this stint is marked by Migne's own
  italics.
- **Ecclus. verse numbering.** Migne's *VERS. N* headings track the Clementine numbering exactly
  throughout CAPUT XII–XXIII, including the awkward joins (VERS. 5, 6 at 20:5–6; VERS. 9, 10 at
  23:9–10; VERS. 13 with a single hyphen at 17:13, which is the plate's punctuation and is kept).
- **Ecclus. 19:4** (*Qui credit*, glossed at 1203B) has **no verse 4** in the on-disk Clementine
  file, which jumps 19:3 → 19:5. That is a gap in our witness, not in Migne. No marker.

---

## §5 · FOR THE MERGE

1. **§V is the vocabulary table.** The only term where I could see the peer stint had already
   committed is *usque ad* → "down to", and I inherited it. *doctrina*/*doctor* were checked
   against 0002 and agree.
2. **The 8976-vs-Pattern-7 non-word split (§2) needs a ruling**, and it is a two-marker change
   either way.
3. **1203D and 1206C must be plate-read as a pair** — the same Luke 12:47 quoted two ways three
   columns apart is either the most interesting thing in this work or a transcription artifact,
   and only the plate can say which.
4. **1199D and 1202C are the same pair-shape** for Ps. 10:8 (*justus Deus* / *justus Dominus*).
5. Nothing in this stint was left untranslated and no chunk was abridged. Five files, five
   complete chapters' worth of glosses, all lemmata collated.

---

# ═══ STINT 0010 — as written by its agent, unedited ═══

# Cruces — 8947 (*Liber Ecclesiasticus*, Glossa ordinaria), chunks 0010–0013

Agent batch: chunks **0010–0013**, cols **1208C–1219C** (CAPUT XXIV – CAPUT XXXVI).
1,081 + 1,138 + 1,024 + 1,108 Latin words. Note parity 28 / 27 / 22 / 25 exact;
column anchors 11 / 11 / 11 / 12, all verbatim and in order.

**Apparatus fired in this batch: 8 `[var:]` · 1 `[sic:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` ·
0 `[cj:]` · 0 `[cn:]`.** Zero em-dashes. Zero guillemets.

No foot-of-page conjecture apparatus is available for this work (the 2026-08-29 plate spot
check, cols 1183–1186, records none on the pages read, and coverage is "spot"). Every
reading below is rendered as printed and conjectured only here. ⚠ The same read confirms
the scan **clips the left margin** inside this work; nothing in cols 1208C–1219C looked
clipped to me, but §A.7 and §C.3 are the two candidates if a plate read is ever run.

---

## §V · Vocabulary fixed in this batch — for the merge

Inherited from **8976 §V** (Glossa on Acts, the sister book) without change: *doctor* →
**teacher** (never "doctors"), *praedicator* → **preacher**, *charitas* → **charity** vs.
*dilectio*/*amor* → **love**, *scientia* → **knowledge** vs. *sapientia* → **wisdom**,
*usque ad* → ***as far as***, *Ecclesia* capitalization mirrors the plate, *virtus* decided
per occurrence. `VERS. N.-- ` and `## CHAPTER N.` follow 8976's shipped format exactly,
including whether the head carries a final stop (CAPUT XXIV does not; XXV–XXXVI do).

Fixed here, at first occurrence, and held across all four chunks:

| Latin | English | why |
|---|---|---|
| *Libanus* (mountain, 24:17; *sub Libano monte*, 24:36) | **Lebanon** | it is the mountain, and the gloss says so (*mons est Phoenicis*). |
| *Libanus* (the gum, 24:21) | **Libanus**, kept Latin | the gloss is an etymology *of the word* — *in Hebraeo candorem significat: in Graeco, θοῦς* — and "frankincense" would leave that etymology explaining nothing. Held apart from the mountain deliberately: a later sweep collapsing the two destroys the distinction the plate makes. Note the SAME gloss renders *ad collem thuris* (Cant. 4:6) as "unto the hill of frankincense" — that is *thus*, a different word. |
| *ungula* (24:21) | ***ungula***, kept Latin | ditto: the gloss is *Ungula est quae in Exodo onycha dicitur … Graece ὀνύξ, Latine ungula*. Rendering the lemma "onycha" or "nail" makes the gloss circular. |
| *virtus* | per occurrence | **power** at 1208B (*virtutis illius*, of God), 1208C (*Dei virtute*, *potentia divinitatis*); **virtue** everywhere moral (1208C *altioribus … virtutibus*, 1216C *quatuor principalium virtutum*, 1218A *aedificium virtutum*). Both stand in this range. |
| *timor Dei* / *timor Domini* | **the fear of God** / **the fear of the Lord**, mirroring the plate word for word | see §B.0. |
| *praecordia* (33:5) | **inward parts** | held apart from *cor* → heart, which stands two clauses later in the same gloss (*Cor stultorum*). |
| *litare* / *sacrificare* (35:3) | kept Latin, italic | the whole gloss is the distinction between them; there is no English pair that carries it. |
| *caprea* / *ibices* / *avices* (27:22) | **roe** / ***ibices*** / ***avices*** | *caprea* is glossed by a Latin pun (*quasi capiens ardua*) which is reproduced in Latin beside the English; *ibices* and *avices* are the names the gloss is explaining, so they stay. *avices* is not standard Latin but is the form Isidore's etymology needs (*ad instar avium*) and the gloss states that etymology — so it is **rendered as a name, not marked**. |
| *eleemosyna* (29:16–18, 31:28) | **alms** / **almsgiving** | on the brief's risk list; both occurrences are in glosses, not lemmas. |

---

## §B · VULGATE COLLATION — every lemma and inline citation, cols 1208C–1219C

Collated word by word against `sources/vulgate/clementine-flat.txt` (Clementine).
**Truncation of a lemma is not divergence and is not listed.** Migne's *coelum*/*caelum*
orthography is not listed. Verse-number mismatches are §C.

### B.0 — the *timor* risk class: CLEAN in this batch
Every occurrence of the phrase in cols 1208C–1219C prints **timor**, never *amor*:
1211C *Timor Dei* (lemma, Sir 25:16, agrees with Vulg) · 1213C *Qui Deum timet* ·
1214A *quasi semper praesentem pertimescit* · 1216C *Catholicus enim Deum timens* ·
1219B *mulier timens Deum* (the one divine-name divergence, B.2 below). **No *Amor Domini*.**

### B.1 — marked `[var: …]` in the text (8)

| chunk | col | Migne prints | Vulgate | why it is marked |
|---|---|---|---|---|
| 0010 | **1209B** | *Quasi platanus **dilatata sum** in plateis* (Sir 24:19) | *quasi platanus **exaltata sum juxta aquam** in plateis* | ⭐ **the gloss turns on the divergent word.** Migne introduces the quotation with *Nomen ergo, et formam arboris expressit dicens*, and closes the paragraph *Christum significat, qui per membra sua in orbe **dilatatur***. The Vulgate's *exaltata* would leave both the introduction and the application explaining nothing; *juxta aquam* is simply absent. |
| 0010 | **1210D** | lemma *Ego quasi fluvius **Dorix*** (Sir 24:41) | *ego quasi **fluvii dioryx*** | ⭐ two changes, and the gloss builds on both: nominative *fluvius* for genitive *fluvii*, and *Dorix* for *dioryx* (Gk διῶρυξ, "channel"). Migne's exposition ends *unde tertia lingua Graecorum **Dorica** dicitur* — i.e. it has read the channel-word as the Doric dialect. The whole gloss is downstream of the divergence. |
| 0011 | **1211B** | *Et ecce timor Domini **ipse** est sapientia, et recedere a malo **intelligentiam*** (Job 28:28) | *Ecce timor Domini, **ipsa** est sapientia; et recedere a malo, **intelligentia*** | *intelligentiam* is accusative where the construction needs a nominative predicate; the clause does not construe as printed. Latin case has no English exponent (Pattern 9), so the English reads "understanding" and the marker carries the difference. *ipse* agrees with *timor* rather than *sapientia* — grammatical either way, but it is not what the Vulgate prints. |
| 0011 | **1212A** | *Statim eam sequitur quasi bos ad victimam, et quasi agnus lasciviens, et **ignorat quod ad victimam pertrahatur*** (Prov 7:22) | *quasi bos **ductus** ad victimam … et **ignorans quod ad vincula stultus trahatur*** | ⭐ the second half of the verse is a different sentence: Migne repeats *ad victimam* where the Vulgate has *ad vincula stultus*, so the printed proof-text has lost the fool and the bonds. Sense changes; marked. |
| 0011 | **1213A** | *Non laudes ante mortem quemquam* (Sir 11:30) | *Ante mortem **ne** laudes **hominem** quemquam* | printed negation swapped (*non* for *ne*), *hominem* absent, order reversed. Marked because the brief names printed negations as the class to surface; the sense is unchanged. |
| 0013 | **1217C** | lemma *Si est tibi fidelis* (Sir 33:31) | *Si est tibi **servus** fidelis* | ⭐ the noun the lemma is about is missing from the lemma, and the gloss immediately supplies it: *Boni **servi** legem tradidit*. Not truncation — *fidelis* follows. |
| 0013 | **1219A** | lemma ***Extolle** adversarium* (Sir 36:9) | ***Tolle** adversarium* | ⭐ **the strongest single finding in this batch.** *Tolle adversarium, et afflige inimicum* is a prayer that the adversary be **taken away**; Migne prints *Extolle*, "exalt". The gloss (*Significat per adventum Christi … pro statu Ecclesiae et fidelium salute*) is compatible with either and flags nothing. |
| 0013 | **1219B** | *mulier timens **Deum** ipsa laudabitur* (Prov 31:30) | *mulier timens **Dominum**, ipsa laudabitur* | divine name. Marked on the strength of the brief's *timor Domini* risk class and the peer batch's precedent at 1186D / 1187A / 1191B, where the same substitution recurs in this work. |

### B.2 — divergences NOT marked in the text (logged only)

Pattern 14's gate is "differs … **in a way that changes the sense**". These do not clear it.
They are recorded so the collation is complete and so a later sweep does not re-find them
as discoveries.

| chunk | col | Migne prints | Vulgate | class |
|---|---|---|---|---|
| 0010 | 1210A | *Docete omnes gentes … **docentes** servare omnia* (Mt 28:19–20) | *docentes **eos** servare* | pronoun dropped |
| 0010 | 1210C | *Nemo novit Filium nisi Pater, **nec** Patrem quis novit* (Mt 11:27) | ***neque*** | connective; both negative, both carried |
| 0010 | 1210D | *Aqua sapientiae salutaris **potavit** illum* (Sir 15:3) | ***potabit*** | perfect for future |
| 0010 | 1210D | *Flumina de ventre ejus fluent aquae vivae* (Jn 7:38) | agrees exactly | ⚠ **no divergence** — but the note reads `[n: (Job. VII)]` for John 7. Reference only; carried verbatim per the note rule and the standing "do not correct a reference" ruling. |
| 0010 | 1210D | *fulgebunt **sicut** splendor firmamenti* (Dan 12:3) | ***quasi*** | and *autem* absent from the opening. See §A.1 for the fused run in the same verse. |
| 0011 | 1211A | *sicut et Christus Ecclesiam* (Eph 5:25) | *sicut et Christus **dilexit** Ecclesiam* | verb of the second clause dropped; ordinary ellipsis in citation |
| 0011 | 1211A | *Si **duo consenserint ex vobis**, fiet illis* (Mt 18:19) | *si **duo ex vobis consenserint** super terram, de omni re quamcumque petierint, fiet illis* | word order (the rest is truncation) |
| 0011 | 1211B | *Qui autem meditatur in lege Domini, dabit fructum in tempore suo* (Ps 1:2–3) | conflates *in lege ejus meditabitur* (v.2) with *quod fructum suum dabit in tempore suo* (v.3) | loose quotation from two verses |
| 0011 | 1211B | *Corde creditur* (Rom 10:10) | *Corde **enim** creditur* | particle |
| 0011 | 1212C | *Qui **servat** mandata mea, ille est qui diligit me, et diligetur a Patre meo* (Jn 14:21) | *Qui **habet** mandata mea, **et servat ea**: ille est qui diligit me. **Qui autem diligit me,** diligetur…* | compression |
| 0011 | 1213C | *Dimittite et **dimittetur vobis*** (Lk 6:37) | *Dimitte, et **dimittemini*** | number and voice; sense identical |
| 0011 | 1213C | *Noli esse **nimium justus*** (Eccl 7:17) | *Noli esse **justus multum*** | order/word; all three negations (*noli*, *neque*, *ne*) present in both and carried |
| 0012 | 1214A | lemma ***Multis*** (Sir 29:10) | ***Multi*** | ⚠ one letter, and the gloss reads it as the nominative plural (*Illos notat, qui neminem laedere volunt*). **Deliberately NOT marked** — a `[var:]` asserts something about Migne's plate, and a single-letter difference is exactly what our own transcription could have produced. **Plate check wanted.** |
| 0012 | 1214B | lemma ***Qui** perdiderit* (Sir 29:23) | ***cum** perdiderit* | ⚠ same reservation, compounded by the verse-order anomaly at §C.1. Not marked. |
| 0012 | 1215B | *Viri sanguinum non dimidiabunt dies suos* (Ps 54:24) | *Viri sanguinum **et dolosi** non dimidiabunt* | phrase dropped mid-verse; negation present and carried |
| 0012 | 1215D | lemma *Et **vome*** (Sir 31:25) | ***evome*** | word division. Not carried under Pattern 10: *Et* and *vome* are both real words and the run construes, so nothing is quarantined. |
| 0012 | 1216B | *Qui major est **vestrum*** (Lk 22:26) | *qui major est **in vobis*** | genitive for prepositional phrase |
| 0012 | 1216C | lemma *Hora **surgenti*** (Sir 32:15) | *Et hora **surgendi** non te trices* | dative participle for gerund |
| 0013 | 1217D | *ut possimus consolari eos* (2 Cor 1:4) | *ut possimus **et ipsi** consolari eos* | phrase dropped |
| 0013 | 1218B | lemma ***Propitiationum*** (Sir 35:3) | ***propitiationem*** | ⚠ single-letter class again; not marked |
| 0013 | 1219C | *Invenit sibi passer domum, et turtur nidum, ubi **reponat** pullos suos* (Ps 83:4) | ***Etenim** passer invenit sibi domum, et turtur nidum **sibi**, ubi **ponat** pullos suos* | order and compound verb |

### B.3 — lemmas checked and found to AGREE (so the list above is a list, not a sample)

Every remaining lemma in cols 1208C–1219C agrees with the Clementine text within the words
it prints: Sir 24:2–3, 5, 6, 7, 12, 13, 14, 15, 17, 18, 19 (*Quasi oliva*, *Quasi platanus*),
20, 21 (all six spice lemmas incl. *Balsamum non mistum*, whose closing quotation *Et quasi
balsamum non mistum odor meus* matches word for word), 22, 29, 34, 35, 36, 37, 38, 39, 41
(*Quasi trames*), 46, 47 · 25:2, 3, 5, 6, 9, 13, 16, 17, 18, 22, 26, 30 · 26:1, 4, 5, 6, 11,
12, 16, 18, 23, 25, 28 · 27:1, 5, 7, 8, 13, 15, 17, 22, 24, 30 · 28:8, 13, 19, 21, 23, 28 ·
29:5, 12, 13, 16–18, 20, 27, 28, 29, 30, 33, 35 · 30:1, 8, 14, 15, 18, 21, 23, 26 ·
31:1, 12, 13, 19, 22 (both), 24, 27, 28, 30, 31, 32 (both) · 32:1, 7, 14, 22, 24 ·
33:5, 6, 7, 8, 10 (both), 13, 15, 18, 19, 25 · 34:2, 8, 9, 10–11, 12, 23, 26, 28, 30 ·
35:1, 4, 10 (both), 13, 14, 21 · 36:1, 7, 16, 17, 19, 20, 24 (both), 25, 26, 28.
Inline citations that agree exactly: Prov 10:4, Prov 6:12–13, Prov 15:7, Gen 3:5, Ps 33:9,
Ps 44:3, Ps 7:11, Mt 5:19, Lk 22:31, 1 Cor 13:13, 2 Cor 9:6.
**Every printed negation in every lemma of this range is present in the English**, including
Sir 25:22 *Non est caput*, 24:38 *Non investigabit*, 29:13 *Et non abscondas*, 35:10 *Et non
minuas*, 35:14 *Noli offerre*, 36:25 *Non est vir*, 36:28 *Qui non habet nidum*.

---

## §A · Carried type and non-construing readings (Patterns 7, 10, 12)

### A.1 — 1210D · *erudiunmultos* — the only `[sic:]` in the batch
Printed (Dan 12:3, inside the italic lemma): *et qui ad justitiam **erudiunmultos**, quasi
stellae in perpetuas aeternitates*. A **fused run** (Pattern 10, the direction no grep
finds). The Vulgate has *erudiunt multos*.
Carried as `[sic: erudiunmultos]` — **no second italic marker**, per Pattern 10, because it
sits inside an already-italic scripture lemma.
⚠ **7a⁗ applied:** the fused run is the clause's **only verb and its object**. Deleting the
marker would leave "and they who … unto justice", a relative clause with no predicate. The
English therefore states the sense in plain words beside the marker — *and they that
instruct many* `[sic: erudiunmultos]` *unto justice* — satisfying both Pattern 12 (the
marker must not swallow what it marks) and 8976 §M's ruling (render for the evident sense).

### A.2 — 1209A · *Platanus ab **altitudine** dicta*
Printed: *Platanus ab altitudine dicta, vel quia patula et ampla. Nam πλατός Graeci amplum
vocant.* Rendered literally, "so called from its height".
⚠ **The sentence contradicts itself as printed** and that is exactly what is being shown:
the alternative etymology and the Greek gloss both require **breadth**, not height (Isidore,
*Etym.* 17.7.40, *a latitudine foliorum*). Conjecture *latitudine*, near-certain. **Not
emended, not marked** — both *altitudine* and *latitudine* are real words, so there is
nothing to carry under Pattern 12, and a `[var:]` would be wrong because this is Migne's
own prose, not a scripture citation.

### A.3 — 1209A · *ad, coelestia se sustollit*
A comma between preposition and object. **Preserved** (Pattern 8: punctuation follows the
plate). The English reads "raises itself up to, heavenly things". Not a defect of ours.

### A.4 — 1215B · *Sicut spado. Non facit ad complexum virginis, sic adoratio idoli…*
Will not construe: an unannounced third-person subject, then *sic* with no *sicut*.
Rendered as closely as the printed words allow ("He does not serve for the embrace of a
virgin, so is the adoration of an idol, unfitting and unprofitable to those who adore").
⚠ The printed **negation is carried**; the smooth reading ("As an eunuch is unfit for the
embrace of a virgin, so is the adoration of an idol") would require reading *Non facit* as
concessive and is not what is printed. Not emended.

### A.5 — 1213A · *loquela ad mala dicendum prona*
Gerund/gerundive mismatch (*ad mala dicendum* for *ad mala dicenda*). Rendered "prone to
the saying of evil things". Real words; nothing carried. Latin case has no English exponent.

### A.6 — 1213D · *Pejor est interitus animae quam occidunt haeretici, quam quilibet
cruciatus corporis.*
Two *quam* clauses, the first relative (*quam* = the soul) and the second comparative,
inside one sentence. Rendered literally ("Worse is the destruction of the soul, which
heretics slay, than any torment whatever of the body"). Reads as a zeugma; not emended.

### A.7 — 1212D · *Sicut in medio.* — an orphan
Printed: *VERS. 1.-- Propter inopiam, etc., [n: (RAB.)] Sicut in medio. Hic comparatione,
etc., usque ad…* — *Sicut in medio.* stands between the note and the *Hic comparatione*
formula and governs nothing. ⚠ Candidate second lemma whose closing words were lost, or a
left-margin clip. Rendered as printed ("As in the midst."), not marked. **Plate check
wanted.**

### A.8 — 1218A · *aedificium virtutum **praeparere***
*praeparere* for *praeparare*. **Rendered normally as "prepare", not carried and not
marked**: a/e vowel confusion is ordinary medieval orthography (Pattern 9 — "attested
medieval spellings are correct Latin"), and carrying it would bury the real defects in
noise. Logged so that a sweep does not churn it.

### A.9 — 1216C · *bonis [operibus] omnibus replevit*
The **square brackets are in the source, not ours.** Following the peer batch's ruling at
1184D, the bracket is preserved and its contents translated: "filled us with all good
[works]". Not marked `[sic:]` — the type is legible and the bracket reads as editorial.

### A.10 — 1217B · *quia non aliter potest habere pacem et quietem*
Singular *potest* after plural *admonet … ut … non omittant*. Rendered literally ("because
not otherwise can he have peace and quiet"). Number mismatch; no emendation made.

### A.11 — 1216C · the chunk ends without a full stop
*…per sanctos praedicatores divinis arguetur sententiis* — no closing period on the plate.
**Preserved** (Pattern 8). This is a chunk boundary of ours; the sentence continues into
0014, which is another agent's file. Flagged for the merge, not a defect.

---

## §C · Migne's verse numbering — observed, not corrected

### C.1 — 1214A–B · CAPUT XXIX runs **16, 17, 18 → 23 → 20 → 27**
*VERS. 23* (*Qui perdiderit*) is printed **before** *VERS. 20* (*Gratiam fidejussoris*).
Reproduced in the printed order. This is the printed sequence and anaphora resolves against
it; no reordering, no correction.

### C.2 — lemma-to-verse offsets, all reproduced as printed
1209C *VERS. 21 · Balsamum* and *Quasi myrrha* are Vulg **24:20** · 1215B *VERS. 1 · Lignum
offensionis* is Vulg **31:7** · 1216C *VERS. 15 · Hora surgenti* is Vulg **32:15** (agrees) ·
1219A *VERS. 15 · Extolle adversarium* is Vulg **36:9**. Migne's numbering of Ecclus. runs
ahead of and behind the Clementine division at several points in this range. **Not reported
as divergence**; the lemma text is what was collated.

### C.3 — 1215C · the anchor is printed `[01215C]`, with a leading zero
Every other anchor in cols 1208C–1219C is four digits. **Reproduced verbatim** in the
English, as the marker rule requires. ⚠ Almost certainly a digitization artifact rather
than Migne's type — it is a column *guide*, not text — so it is **not** marked `[sic:]`.
Flagged for whoever owns the anchor normalizer.

---

## §D · Checked non-defects — do not spend a plate read on these

- **Column bands.** 1208C→1211A, 1211B→1213D, 1214A→1216C, 1216D→1219C: every band letter
  runs A→D in order with no text broken mid-word or mid-construction across any anchor.
  Nothing to report (known false positive 1).
- **`[n: (ID.)]` chains.** Long runs of *(ID.)* after a *(RAB.)* resolve against the printed
  sequence. Not touched (known false positive 2).
- **`[n: (Job. VII)]` for John 7:38** and **`[n: (Matth. XXVII)]` for Matt 28:19–20**:
  references, carried verbatim, no correction proposed.
- **`[n: (Prov. VII)]`, `[n: (Psal. LIV)]`, `[n: (II Cor. XII)]`** — same class.
- **Greek.** Eight words, all reproduced in Greek script with accents intact and none
  transliterated: φοινίκον · ἐλαἴον · ἐλαία · πλατός · ἄκανθον · στακτήμ · ὀνύξ · θοῦς.
  ⚠ Four of them are irregular as printed (*ἐλαἴον* for ἔλαιον; *πλατός* for πλάτος;
  *στακτήμ* for στακτή; *θοῦς* for θύος/λίβανος), and **none is marked** — Greek accentuation
  and ending are Migne's, we have no Greek apparatus for this work, and marking them would
  be four public claims about a plate nobody has read. Recorded here so the class is visible.
- **Pattern 4 `[f:]`** — not tagged. This work quotes a lemma and expounds it; it is not a
  florilegium (known false positive 4).

---

# ═══ STINT 0014 — as written by its agent, unedited ═══

# Cruces — 8947 (Glossa ordinaria, *Liber Ecclesiasticus*), chunks 0014–0017

Cols 1219D–1232A: CAPUT XXXVII–LI (the close of the work). Translated as one batch;
chunks 0000–0013 were rendered in parallel by other agents and terminology is to be
reconciled at merge.

## Load-bearing vocabulary choices (for the merge)

| Latin | English used here |
|---|---|
| `*usque ad*` (excerpt-elision formula) | `*as far as*` (matches shipped 8985 Glossa practice) |
| `VERS. N.-- ` | kept verbatim, lemma translated inside the italics |
| `CAPUT N.` | `CHAPTER N.` (Roman numeral kept; XXXIX has no stop in the plate and none here) |
| `juxta historiam` / `ad litteram` | "according to the history" / "to the letter" |
| `mystice` | "mystically" |
| `doctor` | "teacher" (never "doctor") |
| `praedicator` / `rector` | "preacher" / "ruler" |
| `conversatio` | "conversation" (in its older sense: manner of life) |
| `sacramentum` / `mysterium` | "sacrament" / "mystery" |
| `impius` / `iniquus` / `injustus` | "ungodly" / "unjust" / "unjust" |
| `disciplina` / `documentum` | "discipline" / "lesson" |
| `electi` / `subjecti` | "the elect" / "those subject to him" |
| `virtus` | "virtue" of a moral quality, "power/strength" of God |
| second person | Pattern 17: `tu` → thou/thee/thy; `vos` → you |

## ⛔ Vulgate collation — divergences found (Clementine text, `sources/vulgate/`)

Every `VERS. N` lemma in cols 1219D–1232A was collated word-by-word against the
Clementine Sirach; the inline proof-texts were collated against their own books.
Truncated incipits are not listed. Seven divergences were judged material enough to
carry a `[var: …]`; the rest are recorded here only.

### Marked `[var: …]` in the English

1. **1220A · Ecclus. 37:14** — Migne *Non attendite* (2nd pl. imperative); Vulg.
   *Non attendas his in omni consilio* (2nd sg.). Number of the address is
   load-bearing under Pattern 17, so the divergence has an English exponent
   ("attend ye not" vs "attend thou not"). Marked.
2. **1222B · Ecclus. 39:41** — Migne *Et nunc in omni tempore suo*; Vulg. 39:41
   *Et nunc in omni corde et ore collaudate, et benedicite nomen Domini*. Migne's
   lemma has taken up *in tempore suo* from vv. 39–40, and **the gloss rests on the
   divergent word**: it expounds *tempus* ("Say not that former times were better…
   Virtues make the days good"). A conformed lemma would have destroyed the gloss.
   Marked.
3. **1223A · Ecclus. 40:32** — Migne *conculcabitur inopia* ("want shall be trodden
   down"); Vulg. *condulcabitur inopia* ("want shall be sweetened"). One letter,
   opposite sense. Marked.
4. **1223C · Ecclus. 41:19** — Migne *Verumtamen **revertimini*** ("return ye");
   Vulg. *Verumtamen **reveremini*** ("revere ye"). **The gloss rests on Migne's
   reading**: *suadet ut **revertantur** ad studium docendi* — he expounds it as a
   returning. Marked.
5. **1223D · Ecclus. 41:20** — Migne *omnem **irreverentiam** observare*; Vulg. *omnem
   **reverentiam** observare*. Sense-reversing, and the neighbour of no. 4 — the two
   sit in the same short passage, which is worth a plate check as a pair. Marked.
6. **1229C · Ecclus. 50:5** — Migne *ingressum domus atrii*; Vulg. *ingressum domus
   **et** atrii*. The dropped *et* fuses two things the gloss keeps apart: *in rudibus,
   quos signat **atrium**; et in perfectis, qui signantur per **domum***. Marked.
7. **1229C · Ecclus. 50:13** — Migne *de manu **sacerdotis*** (sg.); Vulg. *de manu
   **sacerdotum*** (pl.). The gloss repeats and builds on the singular
   (*Partes accipit de manu sacerdotis, qui … exigit a ministris*). Marked.

### Divergences recorded, NOT marked (immaterial to the sense or to the gloss)

- **1219D · 37:3** — the gloss quotes *cooperiendo aridam malitiam* against Vulg.
  *cooperire aridam malitia*. The gerund is the commentator bending the verse into his
  own clause (*cum malus se bonum esse simulat cooperiendo…*), i.e. adaptation, not a
  variant text. No marker.
- **1220A · 37:18** — Migne *Anima sancti viri*; Vulg. *Anima viri sancti*. Word order.
- **1220B · Job 14:5** — Migne *numerus mensium apud te est*; Vulg. *numerus mensium
  **ejus** apud te est*. One word absent, sense unchanged.
- **1221A · Gal. 4:19** — Migne *donec formetur **in vobis Christus***; Vulg. *donec
  formetur **Christus in vobis***. Word order only; English has no exponent for it.
- **1222C · 40:11** — Migne *Et aquae omnes*; Vulg. *et omnes aquae*. Word order.
- **1222D · 40:15** — Migne *Nepotes impiorum non multi*; Vulg. *Nepotes impiorum non
  multiplicabunt ramos*. ⚠ Ambiguous: either a real variant ("are not many") or the
  incipit broken inside *multi|plicabunt*. Both readings suit the gloss (*progeniem
  impiorum cito deficere*), so it is rendered as printed and left unmarked. **A plate
  read would settle it** — this is the one item in this batch where a marker was
  declined for want of the page.
- **1223C · Prov. 11:26** (quoted at 41:18) — Migne *Qui **abscondet frumentum***;
  Vulg. *Qui **abscondit frumenta***. Tense and number; sense unchanged.
- **1223D · 41:26** — Migne *Non avertas faciem **tuam** a proximo tuo*; Vulg. *Ne
  avertas faciem a proximo tuo*. Both negations present, different particle, plus an
  added possessive. Not a polarity finding.
- **1224A · Prov. 11:1** (quoted at 42:4) — Migne *abominatio est apud **Deum***; Vulg.
  *apud **Dominum***.
- **1226C · 44:21** — Migne *In carne ejus **facit stare** testamentum*; Vulg. *In carne
  ejus **stare fecit** testamentum*. Present for perfect, plus order.
- **1227A · 1 Petr. 4:11** (quoted at 45:14) — Migne's italic quotation runs *per Jesum
  Christum, **qui est caput nostrum***; the clause after *Christum* is not in 1 Peter.
  Judged the commentator's own apposition swept into the italics rather than a variant
  text, so unmarked. Flagged here because that judgment is contestable.
- **1228B · IV Reg. 2:9** (quoted at 48:13) — Migne *Fiat spiritus tuus duplex in me*;
  Vulg. *Obsecro ut fiat in me duplex spiritus tuus*. Order and compression.
- **1230D · 51:9** — Migne *appropinquans erat **inferno***; Vulg. *appropinquans erat
  **in inferno deorsum***. Bare ablative for *in* + abl.; sense unchanged.

### Proper-name forms in the Praise of the Fathers — checked, all ATTESTED (Pattern 9)

Cols 1226B–1229B carry the dense name sequence. Each was checked against the Clementine
and against ordinary medieval usage; **none is a defect and none is marked**:
*Henoch* (Clem. *Enoch* at 44:16, but *Henoch* at 49:16 — Migne is internally consistent
with the second), *Noe*, *Phinees filius Eleazari*, *Jesus Nave*, *Josue*, *Roboam*,
*Jeroboam*, *Ezechias*, *Josias*, *Joram*, *Achaz*, *Ezechiel*, *Nehemias*, *Josedec*,
*Sichem*/*Neapolis*, *Seth*, *Sem*, *Onias*. The *-as/-ias* Latin nominatives and the
*coelum* spelling throughout are Migne's house orthography, not variants.
⚠ One name IS worth a note but is not a Vulgate matter: **1228B, 48:1**, the gloss says
the two captains of fifty were sent *ab **Ozia** rege*; IV Reg. 1 names **Ochozias**.
Rendered as printed ("king Ozias"); *Ozias* is an attested short form of the same name in
medieval usage, so no marker.

## Carried type — every `[sic: …]` in these four chunks

Each entry gives column, the run carried, and the conjecture. Per 7a⁗ the English
supplies in plain words whatever force the quarantined run carried.

1. **1219D–1220A (0014, 37:5)** — ***Possuntt*** for *Possunt*. Doubled *t*; a non-word,
   so carried. It was the clause's only finite verb, so the English says "can be
   understood" beside the marker.
2. **1220D (0014, 38:21)** — ***Ad monitio*** for *Admonitio*. Pattern 10 split type; the
   whole run is carried, including the fragment *Ad* which is a real word. English
   supplies "An admonition" beside it.
3. **1221C (0014, 39:20)** — ***Domini*** for *Domino* in Ps. 32:2, *Confitemini Domini
   in cithara*. A real word form, but the genitive has no slot after *confitemini*, so it
   fails Pattern 12's "does it render in place?" test and is carried; the English supplies
   "to the Lord". This is simultaneously a divergence from the Vulgate (*Domino*): it is
   marked once, as type, because a one-letter case ending is far likelier to be the
   compositor than a variant text. **Worth a plate check.** No second italic marker is
   used since the run sits inside an italic lemma.
4. **1222A (0014, 39:35)** — ***cum*** for *eum* in *bestiae quoque contra cum saeviunt*.
   Real word, no slot after *contra*; carried, with "against him" supplied beside it.
5. **1226B (0016, 44:1)** — ***nunde*** for *nunc de*. Pattern 10 fused run. It swallowed
   a preposition, so the English supplies "now concerning" beside the marker.
6. **1226C (0016, 44:22)** — ***jurejarando*** for *jurejurando*, inside the italic lemma
   (hence no nested asterisks in the marker content). English supplies "by an oath".
7. **1230C (0017, 51:1)** — ***JesusChristus***. Pattern 10 fused run; it was the clause's
   subject, so the English supplies "Jesus Christ" beside it.

## Other cruces — rendered as printed, no marker

- **1220C (0014, 38:5)** — Migne prints no stop between *…ligni medicina indulcari aquas*
  and *Mystice autem aqua amara…*. Under Pattern 8 nothing is supplied: the English runs
  "…are made sweet by the medicine of the wood But mystically the bitter water…". This
  reads as our error and is not; it is the plate.
- **1222D–1223A (0015, 40:22)** — the gloss ends *bonorum operum virore excellit* with no
  terminal stop. Reproduced without one.
- **1223B (0015, 41:10)** — the gloss ends *damnabitur pro eis* with no terminal stop.
  Reproduced without one.
- **1221B (0014, 38:28)** — *Cum praesentis vitae volubilem conversationem … ostendit
  immutabilem*: he shows the *rolling* conversation of this life to be *unchangeable*.
  The oxymoron is the plate's and is rendered, not smoothed.
- **1222A (0014, 39:38)** — *non causam, sed modum divino consilio manifestum dimisit*
  will not construe cleanly (what agrees with *manifestum*, and what *dimisit* governs,
  are both open). Rendered as literally as the words allow: "he left not the cause, but
  the manner, manifest to the divine counsel." No conjecture offered.
- **1225B (0016, 43:1)** — the Rabanus excerpt begins mid-sentence with a lower-case
  *pulchritudo firmamenti*. The English keeps the lower case; capitalizing would hide
  that the excerpt is truncated at its head.
- **1225D (0016, 43:16)** — *increpando, scilicet duritiam pravi cordis **lapident** vitale
  gramen*: two accusatives on one verb and no room for *vitale gramen*. Rendered literally
  ("by rebuking they stone the hardness of a depraved heart, the living grass").
  Conjecture, offered here and NOT in the text: *lapideam* ("the **stony** hardness"), with
  a verb governing *vitale gramen* lost. Migne prints no foot-of-page note here, so there
  is no witness to settle it.
- **1223C (0015, 41:19)** — *bonum nomen et bonam et vitam utilem esse praedixit* has no
  predicate for *esse*. The English supplies the bracketed word "[good]" per the corpus's
  supplied-word convention and logs it here.
- **1228B (0017, 48:13)** — *Qui oravit **die*** was examined and is NOT a defect: Eliseus
  did ask for the double spirit on the day Elias was taken up (IV Reg. 2:9), so "who prayed
  on the day" construes and is true. No conjecture (*dicens*) proposed.
- **1227A (0016)** — the column band runs 1226D → 1227B with no 1227A anchor. Per the
  standing ruling this is normal positional transcription, not a gap: no text is broken
  across the anchor. Recorded only so a later reader does not re-raise it.
- **1231A → 1232A (0017)** — likewise: the last anchor of the work jumps a band, and
  *usque [1232A] ad* splits the elision formula across it. Both as printed.

## Plate

No plate read is available for cols 1219–1232 (the 2026-08-29 spot check covered
1183–1186 only) and Migne prints no conjecture apparatus on the pages that were read.
Every `[var: …]` and `[sic: …]` above therefore stands on the Corpus Corporum text alone
and carries its column here so it can be checked against the leaf before shipping. The
left-margin clipping confirmed on p. 598 was not observed in these chunks: no column start
in 1219D–1232A shows lost word-openings.

## Completeness

Chunk 0017 ends the work at CAPUT LI, VERS. 37, col. 1232A (*Laetetur anima*), which is
the last verse Migne glosses. Nothing is truncated.
