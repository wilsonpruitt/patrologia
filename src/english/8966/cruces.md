# *Glossa ordinaria*, **Liber Proverbiorum** (PL 113, cols 1079C–1116D) — cruces

Anselm of Laon and his school, on Proverbs. Translated 2026-08-25 by three translators working in
parallel — **0000–0004** (Prov. I–VIII, cols 1079C–1091D), **0005–0009** (Prov. IX–XXIII,
1092A–1107B) and **0010–0013** (Prov. XXIV–XXXI, 1107C–1116D) — and merged here. 14 chunks,
13,510 Latin words. `verify-english.mjs` clean over the whole work.

**Apparatus fired, work-wide: 33 `[var:]` · 0 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` ·
0 `[nt:]` · 0 `[cn:]`.** **The work asserts nothing whatever about Migne's plate**, and that is a
deliberate result rather than an absence of candidates: every non-word met was rendered for its
evident sense and logged, because a `[sic:]` is a public claim and the class it would blame Migne
for has been our digitization's every time it has been tested.

⭐ **This book is APHORISM, and the briefs warned all three stints that the danger moves with the
genre**: in a narrative a dropped negative leaves a sentence that will not construe, but **in a maxim
it leaves a maxim** — one that reads perfectly and says the opposite. Each stint accordingly named
the single Latin word every printed negative attaches to rather than merely counting them. The
2a trigger population came to 11 sites in one stint alone.

---

## §M · THE MERGE

Three translators. **The second and third read their predecessors' cruces off disk and inherited
from them**, which is the seam working: the second changed three of its own renderings to the
first's table (*doctrina* → **doctrine**, never "learning" or "teaching") and the third followed
both. *doctores* → teachers, *charitas*/*dilectio* held apart, *scientia*/*sapientia* held apart,
*Ecclesia* mirrored word for word (every occurrence in the middle range is capitalized and so is its
English), Roman-numeral chapter heads per the Ruth pilot.

### ⚖ *mulier fortis* — RULED: "a **strong** woman", and it stays

The third stint held ***fortis* → "strong" everywhere**, including the Prov. XXXI acrostic, and
declared it **a deliberate refusal of the Douay phrase**, offering to move all nine sites if ruled
against. **It is not ruled against.** *Fortis* means strong; "valiant woman" is another edition's
translational choice, and reaching for it precisely because it is the familiar English is
**conformation — the defect this whole apparatus exists to catch.** Measured across the work: five
"strong woman", zero "valiant". Consistent, and it stays.

⭐ **And the acrostic itself came back clean**, which is worth recording because it was the chapter
the brief told that stint to fear: **Prov. XXXI agrees with the Clementine at every lemma.** Its only
two departures are punctuation — a period for 31:10's `?` and a colon for 31:29's `;` — both carried
as printed. **The divergences all sit in XXV–XXX, not in the famous chapter.** Familiarity was the
predicted risk and it did not fire; the risk was real, and naming it is what made the reading careful.

### The *correptio* / *correctio* drift — one note, not two

Migne's text wavers between *correptio* (rebuke) and *correctio* (correction), and it drew a
`[var:]` in **Part I** (1082A, the lemma *Ad correctionem* against Prov. 1:23's *ad correptionem
meam*) and another in **Part III** (1110B, Prov. 27:5). The third stint asked whether the pair
deserves one work-level note rather than two isolated markers. **Both markers stand** — each records
a real divergence at its own verse — and the connection between them is recorded here rather than in
a third marker, which would assert nothing new.

⚑ The Part I site is the sharper of the two: **the lemma has drifted off the word its own gloss is
built on**, since the gloss below it reads *corripit*.

### Checked and sound

- ***usque ad*** censused per occurrence in all three stints, never by rule: **98 of 98** the formula
  in the first range (recorded as a checked negative), 118 in the second, and **96 tokens with 93
  formula** in the third, including an anchor-split `*usque [1116C] ad*` mirrored in the English.
- **Verse numbers out of register** reproduced and never renumbered — and in two places the offset
  **does not persist**, so each was checked rather than a run being assumed.
- `VERS. 1.` printed with no `--` at 1110B, reproduced as printed.

---

## §P · WHAT THE BRIEF GOT WRONG ABOUT THIS BOOK, recorded so it is not repeated

The launch brief warned the first stint at length about **Jerome's letter and double prologue** under
this work's opening head — continuous epistolary prose in Jerome's own voice, which must not be
forced into the gloss register.

⛔ **There is no such prose.** Under that head Migne prints exactly one thing — the cross-reference
note *(Vide inter ejus Opera, tom. I, III et VIII.)* — and goes straight to CAPUT PRIMUM. The
warning had nothing to bite on.

⚑ Recorded for two reasons: so that a later reader does not conclude our text **lost** the prologue,
and because the head is genuinely misleading — it promises a letter the volume does not reprint here.

---

## §Q · THE UNDECODED ENTITY AT 1107B — a defect class of exactly one

The second stint found `VERS. 35.emdash;` in its Latin twin and **did the right thing twice**: it
printed the house form `VERS. 35.--` in the English under Pattern 9's section-label ruling, and
**flagged the Latin rather than editing it.**

**Measured: the only occurrence in all of `src/latin`, and the only one in all 5,276 PL TEI files.**
Not a letter substitution, not an unjoined line break, not a normalization — the entity reference
`&emdash;` lost its ampersand upstream of us, so our Latin column was printing seven literal
characters that are **not a word, not Migne's, and not a defect of his that this edition exists to
show.** It was our own pipeline leaking XML at a reader.

**Read at the plate before patching**, per the standard the other patch files set: **Gallica f554
prints *VERS. 35. — Verberaverunt me.*** with the ordinary dash, as every verse address in the Glossa
is set. So the repaired form is the corpus's own attested convention and not a conjecture. Patched at
the TEI (`data/tei-patches/8966.json`) and re-chunked; the ten already-translated chunks still
verified, and the timing was deliberate — no agent held this book and its last stint had not yet read
its Latin.

---

## §R · WHERE THE EVIDENCE POINTED AT US, AND THE MARKER WAS DECLINED

⭐ Worth naming as a class, because the discipline usually runs the other way. At **1103C** the second
stint declined a divergence on the ground that **Migne's own next clause prints the word correctly**,
which makes the dropped letter likelier ours than his. At **1109D** the third declined to call
`(Eccl. X)` a misprint, because John 9:39 is already correctly cited four words earlier — so the
second note is a cross-reference, and Eccles. 10:3 is the exact parallel to Prov. 26:12.

⚑ **And at Prov. 23:4 Migne is the TIDIER witness**: he prints *Pone modum* against the Clementine's
own oddity *ponde*. Marking it would have misdescribed which text departs from which.

**Seven misprinted citations** were found across the three stints, every one identified from the
**quoted words and never from the numeral**, all left exactly as printed and referred to
`data/citation-corrections.json`. ⬜ **They are not yet entered there** — see the resume note.

---

# PART I — chunks 0000–0004, cols 1079C–1091D (Prov. I–VIII)

# PART I — chunks 0000–0004, cols 1079C–1091D

*Glossa ordinaria*, **Liber Proverbiorum** (PL 113). Translated 2026-08-25, one translator,
**5 chunks, 4,403 Latin words** (frontmatter counts: 1,063 + 411 + 951 + 898 + 1,080).
`verify-english.mjs` reports no failure over this range (the only failures it reports are the
peers' still-missing 0007–0013).

**Apparatus fired: 4 `[var:]` · 0 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` ·
0 `[cn:]` · 37 `[n:]` (exact parity with the Latin twins).** Zero guillemets in either language.
Marker parity, anchor parity, italic-span parity and paragraph parity are 1:1 in all five chunks;
punctuation was compared **band by band** (colons, semicolons, question marks, exclamation marks),
not by total, and **all 51 bands match with zero mismatched bands** after two repairs made by that
test (see §5).

---

## §V · WORK-WIDE VOCABULARY FIXED IN THIS STINT — for the merge

Stated before comparison, so a later merge can reconcile drift against the English files rather
than against this table.

| Latin | English | note |
|---|---|---|
| *doctores* | **teachers**, never "doctors" | 8965/8954 convention, inherited |
| *praedicatores* · *praedicatio* · *praedicare* | preachers · preaching · to preach | held apart from *doctores* |
| *doctrina* | **doctrine** | never "teaching", which would collide with *doctores* |
| *disciplina* | **discipline** | throughout, incl. the lemmata (Pr 1:2, 3:11, 5:23) |
| *sapientia* / *scientia* / *prudentia* | wisdom / **knowledge** / prudence | three words, three renderings, never interchanged |
| *charitas* / *dilectio* | **charity** / **love** | held apart (8965 convention); *charitas* once, 1080C |
| *Ecclesia* / *ecclesia* | **Church** / **church** — mirrors the plate word for word | 9 capitalized, **1 lowercase** (1088A, the Pr 5:14 lemma *In medio ecclesiae*), rendered lowercase |
| *Scriptura* / *Scripturae* (the canon) | Scripture / **the Scriptures** | Pattern 3; 1087A, 1088B, 1091D |
| *illusor* · *illudere* | **mocker** · to mock | one root in English, because the gloss at 1086A defines the noun from the verb |
| *meretrix* | **harlot** | *fornicaria* = fornicatress, held apart (1087D) |
| *haeresis* · *haereticus* | heresy · heretic | |
| *parvuli* | **little ones** | lemma and gloss alike |
| *simplex* / *rectus* | simple / **upright** (of persons), *right* (of ways) | the Job 1:1 pair at 1083C is the control |
| *typice* | **typically** | 8965 convention (1085A) |
| *usque ad* as the abridgment formula | ***as far as***, inside its own italic span | see §4 — decided per occurrence, not by rule |
| `VERS. n.--` | passes through **verbatim, untranslated** | Ruth §1.1 |
| *interpretatur* | "is interpreted" | **does not occur in this range** — recorded so the merge knows it was looked for |
| second person | **thou = singular, you = plural** (Pattern 17) | see §6 |

**Head forms:** `CAPUT PRIMUM.` → **CHAPTER ONE.**; `CAPUT II.` → **CHAPTER II.**, and so on with
the Roman numeral kept. ⚠ This follows **Ruth (8968), the pilot, and 8954**, and the register rule
that heads keep their Roman numeral. **8965 spells its numerals out** (CHAPTER THREE for *CAPUT
III.*) and therefore diverges from the pilot; I did not follow it, and I flag the divergence rather
than quietly siding with one. The head at 1079C, `B. HIERONYMI EPISTOLA ET PROLOGUS DUPLEX DE
LIBRIS SALOMONIS.`, is rendered **THE LETTER OF BLESSED JEROME AND THE DOUBLE PROLOGUE ON THE BOOKS
OF SOLOMON.**

### ⛔ THE JEROME LETTER AND DOUBLE PROLOGUE ARE NOT IN THE TEXT — the head is a stub

My launch brief warned that chunk 0000 opens with continuous epistolary prose in Jerome's own voice
which must not be forced into the gloss register. **It does not.** Under that head Migne prints
**one thing and nothing else**: the cross-reference note `[n: (Vide inter ejus Opera, tom. I , III
et VIII .)]` — "see among his Works, vols. I, III and VIII." He heads the section, refers the reader
to Jerome's own works for the letter and the two prologues, and goes straight on to `CAPUT PRIMUM.`
So there is no epistolary prose in this work at all, and the warning had nothing to bite on. Recorded
because a later reader meeting that head will otherwise look for the letter and think our text has
lost it: **it is not lost, it was never printed here.**

---

## §1 · THE LEMMA COLLATION — every italic span in cols 1079C–1091D, walked

All **340 italic spans** in my five chunks (67 + 44 + 72 + 71 + 86) were walked against
`sources/vulgate/clementine-flat.txt`, cited by book chapter:verse. **The agreements are listed as
well as the divergences**, because a list of findings alone cannot be told from a report by a reader
who never looked.

### 1a · The four divergences that fired a `[var:]`

| col | Migne prints | Clementine | why it fired |
|---|---|---|---|
| **1079D–1080C** | *Multiplicabitur ejus imperium, et **regni ejus** non erit finis. Super solium David, et super regnum ejus sedebit* `[n: (Luc. I)]` | **Isa. 9:7** *Multiplicabitur ejus imperium, et **pacis** non erit finis ; super solium David, et super regnum ejus sedebit* | A **conflation**: the frame is Isaiah's, one phrase is Luke's (**Luc. 1:33** *et regni ejus non erit finis*), and Migne's own `[n:]` cites Luke. Material — *pacis* and *regni* are different promises, and the gloss is adducing the verse for the kingdom. Rendered as printed; the marker names both witnesses and speculates about neither. |
| **1082A** | *Quae dico vobis in tenebris, dicite **in lucem**.* | **Matt. 10:27** *Quod dico vobis in tenebris, dicite **in lumine*** | *in lucem* (into the light, accusative of motion) for *in lumine* (in the light), plus *Quae* for *Quod*. Rendered "speak ye **into** the light". |
| **1082A** | VERS. 23.-- *Ad **correctionem**.* | **Pr. 1:23** *convertimini ad **correptionem** meam* | ⭐ The sharpest of the four, because **the gloss itself preserves the Clementine's word and the lemma does not**: Migne's exposition reads *Per apostolos Judaeos **corripit*** — the verb of *correptio*, not of *correctio*. The lemma has drifted off the word its own gloss is built on. Rendered "*To correction*", the gloss's *corripit* rendered "rebukes", and the marker carries the Clementine. |
| **1085D** | VERS. 30.-- *Non contendas adversus hominem.* | **Pr. 3:30** ***Ne** contendas adversus hominem **frustra*** | ⭐⭐ Same shape and worse. The lemma **drops *frustra***, and the gloss's whole argument is *frustra*: *quia hoc **frustra** non fit, quod certa necessitas cogit* — "because that which a sure necessity compels is not done in vain." Without *frustra* in the lemma the gloss answers a question the verse no longer asks. Also *Non* for *Ne*, which English cannot distinguish in a prohibition. Rendered as printed; marker carries the Clementine and says what the gloss turns on. |

### 1b · Divergences found, logged, and DECLINED a marker — with the reason

**None of these fires a `[var:]`, because Pattern 14's bar is a divergence that CHANGES THE SENSE**,
and each of these is a form, an orthography, or a syntactic integration. They are listed because a
blind reader will find them and needs to know they were seen.

| col | Migne | Clementine | why declined |
|---|---|---|---|
| 1082A | *Multa turba sacerdotum **obediret** fidei* | Act. 6:7 *multa **etiam** turba sacerdotum **obediebat** fidei* | Migne has drawn the verse into his own *ita ut* result clause, which takes the subjunctive. A syntactic integration, not a textual variant. |
| 1082C | *Videns civitatem flevit super **eam*** | Lc. 19:41 *videns civitatem flevit super **illam*** | *eam*/*illam*, no sense at stake. |
| 1082C | VERS. 29.-- *Exosam **habuerunt**.* | Pr. 1:29 *exosam **habuerint*** | Indicative for subjunctive; the *eo quod* clause is gone with the abridgment. |
| 1082D | *ad **infernum** descendunt* | Job 21:13 *ad **inferna** descendunt* | Singular for neuter plural of the same noun. |
| 1083B | *Ego ex ore Altissimi **prodii*** | Sir. 24:5 *Ego ex ore Altissimi **prodivi*** | Alternate perfect of the same verb. ⚠ But see §2 for the CITATION here, which is a real error. |
| 1084B | *Thesaurizate vobis thesauros in coelo* | Matt. 6:20 *Thesaurizate **autem** vobis…* | A dropped connective in a quotation cut at both ends. |
| 1085D | *Ipsi non introistis, et eos qui **intrabant**, prohibuistis* | Lc. 11:52 *…eos qui **introibant**…* | Simple verb for compound, same sense. |
| 1086A | *terrena **est**, animalis, diabolica* | Jac. 3:15 *sed **terrena, animalis, diabolica*** | Migne supplies the copula his own sentence needs (*ut Jacobus ait:*). |
| 1086B | *Abscondisti haec sapientibus et prudentibus* | Lc. 10:21 *abscondisti haec **a** sapientibus…* | Dative for *a* + ablative; identical sense. |
| 1088D | *laetare cum **ea, cui ab adolescentia*** | Pr. 5:18 *laetare cum **muliere adolescentiae tuae*** | The glossator has re-cased the lemma so that his own relative clause (*conjunctus es*) can hang on it. Adaptation, not variant. |
| 1088D | VERS. 19.-- *Cerva **charissima**.* | Pr. 5:19 *Cerva **carissima*** | *ch-* orthography, corpus-wide. ⭐ And note that **Migne himself flags the real variant here**: *Vel* ***gratissima,*** *ut quidem codices habent* — the Clementine's *gratissimus* attaches to *hinnulus*. His own apparatus is on the page; ours would be redundant. |
| 1089B | VERS. 11.-- *Egestas, et **paupertas**.* | Pr. 6:11 *egestas, et **pauperies*** | Two nouns of the same root and the same meaning. |
| 1089C | VERS. 20.-- *Conserva, **fili**.* | Pr. 6:20 *Conserva, **fili mi*** | A clipped lemma. Rendered "*Keep, O son*", **not** "my son", precisely so the clipping is not conformed away. |
| 1089C | VERS. 29.-- ***Nunquid*** *potest homo abscondere ignem* / 1091A ***Nunquid non*** *sapientia* | Pr. 6:27 / 8:1 ***Numquid*** | *Nunquid*/*Numquid* is the corpus's ordinary orthography. |
| 1090B | *Et ecce **mulier occurrit ornatu illi meretricio*** | Pr. 7:10 *Et ecce **occurrit illi mulier ornatu meretricio*** | Word order only; every word is present and the sense is untouched. |
| 1090C | *Sed venit hora, ut omnis qui interficit vos* | Jo. 16:2 (same words) | ✓ agrees; listed here only because the span is cut mid-verse. |
| 1091A | *Qui diligit me, diligetur a Patre* | Jo. 14:21 *Qui **autem** diligit me, diligetur a Patre **meo*** | Dropped connective and possessive. |
| 1087B | tail: *quia currens non **habebit** offendiculum* | Pr. 4:12 *et currens non **habebis** offendiculum* | Third person for second, inside an abridgment resumption tail where the subject has been generalized. |
| 1087D | VERS. 10.-- *Ne forte **impleantur** extranei* | Pr. 5:10 *ne forte **implentur** extranei* | Subjunctive for the Clementine's own anomalous indicative. |

### 1c · Checked and found to AGREE with the Clementine EXACTLY

Listed by verse, because this half of the collation is what distinguishes a report from a guess.

- **Prov. I** (1079C–1083A): 1:1 *Parabolae Salomonis* · 1:2 *Ad sciendam sapientiam et disciplinam* ·
  1:3 *Ad intelligenda verba prudentiae* · 1:5 *Audiens sapiens, sapientior* (×2) and *Et intelligens* ·
  1:7 *Timor Domini* · 1:8 *Audi, fili mi, disciplinam* · 1:9 *Addatur gratia* and *Et torques collo
  tuo* · 1:10 *Fili mi* · 1:11 *Insidiemur* and *Insontem frustra* · 1:12 *Deglutiamus eum, sicut
  infernus viventem* · 1:13 *Omnem pretiosam substantiam reperiemus* · 1:14 *Sortem mitte nobiscum* ·
  1:16 *Ad malum currunt* · 1:17 *Frustra* · 1:20 *Sapientia*, *foris*, *In plateis dat vocem suam* ·
  1:21 *In capite turbarum clamitat*, *In foribus portarum urbis* · 1:22 *Usquequo* · 1:23
  *Convertimini* · 1:26 *Ego quoque* · 1:27 *Cum irruerit repentina calamitas*, *Quando venerit super
  vos* · 1:28 *Mane consurgent et non invenient me*, *Invocabunt* · 1:31 *Comedent igitur*, *Suisque
  consiliis saturabuntur* · 1:32 *Aversio*, *Parvulorum* · 1:33 *Qui autem me audierit, absque terrore
  requiescet*.
- **Prov. II** (1083A–1084A): 2:1 *Fili mi* · 2:2 *Audiat sapientiam*, *Inclina cor* · 2:3 *Si enim
  sapientiam invocaveris* (×2) · 2:4 *Et sicut thesauros* · 2:5 *Tunc intelliges* · 2:6 *Quia Dominus
  dat*, *Ex ore* · 2:7 *Custodiet* · 2:12 *A via mala* · 2:13 *Qui relinquunt iter* · 2:14 *Qui
  laetantur* · 2:16 *Ut eruaris a muliere* · 2:17 *Et relinquit ducem* · 2:18 *Pacti Dei sui*,
  *Inclinata est enim* · 2:19 *Ad eam non revertentur* · 2:21 *Qui enim* · 2:22 *Impii*.
- **Prov. III** (1084A–1086C): 3:1 *Fili mi, ne* · 3:2 *Pacem* · 3:3 *Misericordia et veritas*,
  *Circumda eas gutturi tuo* · 3:4 *Et invenies gratiam* · 3:5 *Habe fiduciam in Domino* · 3:7 *Ne sis
  sapiens*, *Time Deum et recede a malo* · 3:8 *Sanitas quippe erit* · 3:9 *Honora Dominum de tua
  substantia*, *Et de primitiis omnium* · 3:10 *Implebuntur horrea tua saturitate*, *Torcularia
  redundabunt* · 3:11 *Disciplinam* · 3:12 *Quem enim diligit Dominus corripit* · 3:13 *Beatus homo*,
  *Et qui affluit prudentia* · 3:14 *Melior est*, *Primi et purissimi* · 3:16 *Longitudo dierum in
  dextera ejus et in sinistra* · 3:17 *Viae ejus* · 3:18 *Lignum vitae* · 3:19 *Dominus sapientia*,
  *stabilivit coelos prudentia* · 3:20 *Sapientia illius eruperunt abyssi* · 3:21 *Fili mi, ne
  effluant* · 3:22 *Et erit vita animae tuae*, *Et gratia faucibus tuis* · 3:23 *Tunc ambulabis
  fiducialiter*, *Et pes tuus non impinget* · 3:24 *Si dormieris, non timebis, quiesces, et suavis* ·
  3:27 *Noli prohibere benefacere eum qui*, *Noli*, *prohibere* · 3:28 *Ne dicas amico tuo…* · 3:32
  *Quia abominatio Domini est omnis illusor*, *illusor*, *Et cum simplicibus sermocinatio ejus* ·
  3:33 *In domo impii* · 3:34 *Illusores*.
- **Prov. IV–V** (1086C–1089A): 4:1 *Audite, filii* · 4:3 *Nam et ego*, *Unigenitus coram matre* ·
  4:4 *Suscipiat* · 4:5 *Posside* · 4:9 *Dabit capiti* · 4:10 *Audi, fili mi* · 4:11 *Per semitas
  aequitatis* · 4:12 *Et currens* · 4:17 *Comedunt panem impietatis* · 4:18 *Justorum autem semita* ·
  4:19 *Via impiorum* · 4:20 *Fili mi, ausculta sermones meos* · 4:23 *Omni custodia serva cor tuum* ·
  4:24 *Remove a te* · 4:25 *Et palpebrae* · 4:26 *Stabilientur* · 4:27 *Ne declines*, *Averte pedem
  tuum* · 5:1 *Fili mi, attende*, *Inclina aurem* · 5:2 *Labia tua* · 5:3 *Favus enim*, *Labia
  meretricis*, *Oleo guttur* · 5:4 *Novissima autem*, *biceps* · 5:6 *Vagi* · 5:8 *Longe fac* ·
  5:9 *Ne des* · 5:11 *Et gemas* · 5:12 *Cur detestatus* · 5:14 *In medio ecclesiae* · 5:15 *Bibe
  aquam* · 5:16 *Deriventur* · 5:17 *Habeto*, *Nec sint alieni*, *Solus* · 5:18 *Sit vena* ·
  5:21 *Respicit Dominus* · 5:22 *Iniquitates* · 5:23 *Ipse morietur*.
- **Prov. VI–VIII** (1089A–1091D): 6:1 *Fili mi* · 6:3 *Suscita* · 6:4 *Ne dederis* · 6:5 *Eruere* ·
  6:6 *Vade ad formicam* · 6:9 *Usquequo, piger, dormies, quando* · 6:11 *veniet tibi quasi viator*,
  *Si vero impiger* · 6:12 *Homo apostata* · 6:16 *Sex sunt*, *Detestatur anima* · 6:17 *Oculos* ·
  6:21 *Liga ea in corde* · 6:22 *Cum ambulaveris*, *Cum dormieris* · 6:25 *Non concupiscat* ·
  6:26 *Pretium enim scorti* · 6:30 *Non grandis est culpa* · 6:34 *Quia zelus et furor viri non* ·
  7:1 *Fili mi* · 7:2 *Et legem meam* · 7:4 *Dic sapientiae, soror* · 7:6 *De fenestra* · 7:8 *Juxta
  angulum*, *prope viam domus illius graditur* · 7:9 *In obscuro advesperascente* · 7:11 *Nec valens
  in domo* · 7:13 *Apprehensumque deosculatur juvenem*, *Et procaci vultu blanditur, dicens* ·
  7:16 *Intexui funibus lectulum* · 7:17 *Aspersi cubile meum* · 7:18 *Veni, inebriemur uberibus* ·
  7:20 *Sacculum pecuniae secum tulit* · 7:26 *Et fortissimi quique interfecti sunt ab ea* ·
  7:27 *Viae inferi domus ejus, penetrantes*, *Interiora mortis* · 8:2 *In summis* · 8:4 *O viri, ad
  vos* · 8:5 *Intelligite, parvuli* · 8:7 *Labia mea* · 8:13 *Arrogantiam* · 8:14 *Meum est
  consilium* · 8:15 *Per me reges* · 8:17 *Ego diligentes*, *Mane*, *vigilant* · 8:18 *Mecum sunt
  divitiae* · 8:22 *Dominus possedit me* · 8:31 *Ludens in orbe* · 8:34 *Ad fores*.
- **Non-Proverbs quotations checked verbatim and agreeing:** Jo. 16:25 *Haec in proverbiis locutus sum
  vobis* (1079C) · Ps. 118:113 *Iniquos odio habui, et legem tuam dilexi* (1082C) · Is. 1:20 *Os
  Domini locutum est* (1083B) · Job 1:1 *simplex et rectus* (1083C) · Pr. 1:11 *Veni nobiscum,
  insidiemur sanguini* (1083C) · Lc. 22:30 *Ut edatis* (1084D) · Apc. 3:19 *Ego quos amo, arguo et
  castigo* (1084D) · Ps. 33:9 *beatus vir qui sperat in eo* (1085B) · Rom. 8:28 *diligentibus Deum
  omnia cooperantur in bonum* (1085C) · Jo. 15:14 *Vos amici mei estis, si feceritis* (1085D) ·
  Jac. 4:6 *Deus superbis resistit, humilibus autem dat gratiam* (1086C) · 1 Cor. 15:58 *Stabiles
  estote et immobiles, abundantes in opere Domini semper* (1087C) · Ps. 138:12 *et nox sicut dies
  illuminabitur* (1088D) · Is. 1:14 *Solemnitates vestras odivit anima mea* (1089C) · 2 Cor. 2:15
  *Christi bonus odor sumus Deo* (1090D) · Mt. 16:18 *Portae inferi non praevalebunt adversus eam*
  (1091A) · Jo. 15:5 *Sine me nihil potestis facere* (1091C) · Eph. 1:3 *Qui benedixit nos in omni
  benedictione spirituali in coelestibus in Christo* (1086B).

---

## §2 · FOUR MISPRINTED CITATIONS — every one identified from the QUOTED WORDS, never the numeral

All four are inside `[n:]` notes, which pass through verbatim; the text keeps exactly what Migne
prints and only the **index** should be corrected, through `data/citation-corrections.json`. **None
was read at the plate**, so each is a candidate and not a claim — but each was identified the settled
way, from the words rather than from the number.

| col | Migne prints | the words are | note |
|---|---|---|---|
| **1079C** | *(Joan. VI)* | **Jo. 16:25** *Haec in proverbiis locutus sum vobis* | verbatim John 16:25. |
| **1083B** | *(Isai. LVIII)* | **Sir. 24:5** *Ego ex ore Altissimi prodii, primogenita ante omnem creaturam* | ⭐ Not a wrong chapter but a **wrong book** — Ecclesiasticus cited as Isaiah, and Isaiah has no 58th verse of the kind. Same class as 8954's *I Cor.* for *III Reg.* at 0592D. |
| **1086B** | *(Matth. XV)* | **Eph. 1:3** + **Matt. 25:34** | The run is a composite: the first clause is Ephesians 1:3 verbatim, the closing *Venite, benedicti* is Matt. 25:34, and the joining words (*qui in remuneratione audient*) are the glossator's own. The numeral is short by ten whichever half it points at. |
| **1085D / 1087D** | *(Matth. XVIII)* @1085D; *(Luc. XII)* @1087D | **Lc. 17:3** *Si peccaverit in te frater tuus, increpa illum*; **Mt. 10:28** *sed potius timete eum, qui potest et animam et corpus perdere in gehennam* | ⭐ The pair is worth seeing together: **the two evangelists have been exchanged.** Mt. 18:15 reads *vade, et corripe eum*, not *increpa illum*; Lc. 12:5 reads *timete eum qui… habet potestatem mittere in gehennam*, not *animam et corpus perdere*. Neither numeral is defensible against its own words, and each points at the other's gospel. |

⚠ **No `Ibid.` in this range depends on any of the four**, so correcting them upstream cannot poison
an anaphora chain (runbook false positive 2 checked, not assumed).

---

## §3 · THREE VERSE NUMBERS THAT DO NOT MATCH THE VERSE GLOSSED — reproduced, never renumbered

| col | Migne | the lemma is actually | |
|---|---|---|---|
| **1080C** | `VERS. 2.-- *Ad intelligenda verba prudentiae.*` | **Pr. 1:3** | consistent with his treating 1:1–2 as one verse: the gloss on VERS. 1 quotes *Ad sciendam sapientiam et disciplinam* (= 1:2) as part of the *titulus*. |
| **1089C** | `VERS. 28.-- *Pretium enim scorti.*` | **Pr. 6:26** | +2 |
| **1089C** | `VERS. 29.-- *Nunquid potest homo abscondere ignem.*` | **Pr. 6:27** | +2 |

⭐ **The 6:26/6:27 pair is the interesting one, because the offset does not persist**: the very next
address, `VERS. 30.-- *Non grandis est culpa*`, is **Pr. 6:30 exactly**, and `VERS. 34.-- *Quia zelus
et furor viri non*` is **Pr. 6:34 exactly**. So this is not a chapter numbered on a different system;
it is two addresses out of register inside an otherwise correct sequence. **All three are Migne's and
all three are reproduced as printed.**

---

## §4 · `usque ad` — CENSUSED PER OCCURRENCE, NOT BY RULE

**98 occurrences of `usque ad` in the body of my five chunks, and every one of them is the
abridgment formula** — 91 bare `*usque ad*`, and **7 that carry their resumption tail inside the same
italic span**: `*usque ad: in platea vocem ejus.*` (1082A) · `*usque ad et bene tibi erit.*` (1082D) ·
`*usque ad: et ipsi sunt jacula.*` (1083D) · `*usque ad: beatus vir qui sperat in eo.*` (1085B) ·
`*usque ad,*` (1088D, the comma inside the italics) · `*usque ad: et nox sicut dies illuminabitur.*`
(1088D) · `*usque ad: gradiantur tecum mandata Dei, ut te instruant.*` (1089C). All render
***as far as***, inside the italic span, with **no verb ever supplied** to complete the formula
(8970 convention), and the seven tails were parsed as strictly as ordinary prose.

**Six look-alikes, decided per occurrence from what stands on either side:**

- **1080C** `VERS. 22.-- *Usquequo. Jam*` — Pr. 1:22's own word, "how long".
- **1089B** `VERS. 9.-- *Usquequo, piger, dormies, quando.*` and, in the gloss, *Usquequo, piger,
  dormies in vitiis* — Pr. 6:9's own word, twice.
- **1081D** *Hucusque persecutiones, quas Christo Judaei intulere* and **1091C** *Hucusque locutus est
  parabolice ad Filium* — "thus far", the glossator's own transition adverb, not a formula.
- **1088C** *juxta uniuscujusque qualitatem* — the letters inside another word.

⚠ **The trap the brief warned of did not fire in this range**: no lemma in cols 1079C–1091D has
*usque ad* among the verse's own words, so the formula never had a chance to swallow one. Recorded
as a checked negative, since 8954's first stint met that trap 14 times in its 94.

⚑ One placement worth naming: at **1087B** the column anchor falls **between the `etc.,` and the
formula** (`Dicit de his, etc., [1087B] *usque ad* quia currens…`), which is the one place a careless
reading would attach the formula to the wrong sentence. The English anchor sits in the same place.

---

## §5 · THE NEGATION CENSUS — every printed negative, with the WORD it attaches to

Proverbs is aphorism, so a lost negative leaves a maxim that reads perfectly and says the opposite.
**Every negative in all five chunks was walked and its host named**; the list below gives the ones
where the host was not the obvious verb, or where a correlative or quantifier stood nearby (the 2a
trigger population). **100 negative tokens** stand in the five chunks (43 *non* · 23 *ne* · 9 *nec* · 7 *nihil* · 4
*nunquam* · 4 *nullus/nulla/nullum/nullo* · 2 *noli* · one each of *nisi*, *nil*, *neque*, *nemo*,
*neminem*, *nequeunt*, *nequeat*, *noluerunt*). The ~88 not tabulated below rest on their own finite
verb with no correlative or quantifier in reach, and were checked one at a time.

**The 2a trigger population, host proved from the sentence's own structure:**

| col | Latin | host | proof |
|---|---|---|---|
| 1079C | *Proverbiorum liber, **non** ut simplices arbitrantur, patentia habet praecepta, **sed** quasi in terra aurum…* | ***patentia habet praecepta*** | the `sed` answers it with the hiddenness images; the *ut simplices arbitrantur* is a parenthesis the negative reaches over. |
| 1080C | *Id est, **non solum** sapientiam… **sed etiam** verba prudentiae* | ***solum*** | textbook `non solum … sed etiam`; the verbs (*amplectantur*, *auscultent*) are both affirmative. |
| 1081D | ***Non solum** quod facturi, **sed** quod pro factis passuri* | ***solum*** | both members verbless; the negative cannot be on a verb that is not printed. |
| 1084C | ***Non solum** de substantia pecuniae* … *usque ad* ***non** sibi, **sed** ei tribuit* | ***solum***; then ***sibi*** | the second is the model case: `non … sed` across two **datives**, so the English must read "not to himself, but to him", never "does not attribute". |
| 1084D | ***Non** metuat de correctione inopiae, **quisquis** opes acquisivit sapientiae* | ***metuat*** | *quisquis* is the subject of the second clause, not a quantifier the negative can reach; the `enim` clause gives the reason for not fearing. |
| 1088D | ***Non** uxorio amori insistere docet; **sed ne** prima vivente aliam ducas* | ***docet*** | ⭐ the one real risk in this range. The rival host is *uxorio amori* ("teaches to persist not in wifely love"). The `sed` clause decides it: what he **does** teach is stated there (*ne… ducas, vel… socieris*), which is only an answer if the first member denied the teaching itself. |
| 1089A | ***Non tantum** ipse bene vivendo vigilare memento, **sed** illum… suscita* | ***tantum*** | the `sed` supplies the second duty; *memento* is affirmative in both members. |
| 1089C | *Soli ei conceditur… qui… ut… **nequeat** ab ea separari* | ***separari*** | *soli* is affirmative here (it is the concession's own limit), and *nequeat* has its own infinitive. |
| 1091B | *plenitudinem virtutum **sola** Dei sapientia possidet* | **no negative** | recorded because *sola* sits four words from the preceding *Non se extollat*: that `Non` is on ***extollat*** in its own clause and does **not** reach across the colon. |
| 1088B | *quia **nec** veterum patrum **nec** novorum dictis et exemplis potuerunt… revocari* | ***veterum patrum*** / ***novorum*** | the two `nec` are on the two ablative phrases, not on *potuerunt*: "neither by the sayings of the ancient fathers nor by those of the new", never "could not be recalled". |

**Contradictions carried, not repaired:** none arose in this range — no printed negative in cols
1079C–1091D makes its own sentence contradict its neighbour, and I looked for the 0639C shape
(a negative Migne supplies that the received text lacks) at every scripture quotation in §1c. **That
is a checked zero, and it is recorded as one**: the one place a supplied negative could hide,
1082C's *Mane consurgent et **non** invenient me*, is Pr. 1:28's own *non*, printed by the
Clementine too.

**Two repairs the band-by-band punctuation test made, both mine:** at **1079C** I had rendered
Migne's colon before *ita in eis* as a semicolon and moved a comma; at **1082A** I had rendered his
comma before *unde* as a semicolon. Both restored. **Totals would have cancelled the first pair
exactly** (one colon lost, one semicolon gained), which is the failure the band test exists for.

---

## §6 · PATTERN 17 — thou/you, with the Latin that fixes the number

The book addresses one hearer (*fili mi*) and takes **thou** throughout. **One passage is plural and
takes "you", and it is plural in Migne's own morphology:**

- **1082A, VERS. 22** — *Christum in carne **vidistis**… quem **sprevistis**… **diligite**… quod
  **peccastis*** — four second-person **plurals**, addressed to the persecuting Jews, inside a
  paragraph whose neighbours are all singular. Rendered "you have seen… you have despised… love…
  you have sinned".
- **1082C, VERS. 27** — the lemma *Quando venerit super **vos***, plural, likewise.
- Everything else — *serva cor tuum*, *ne dederis*, *bibe aquam*, *keep thou thyself*, *thou art
  joined* — is singular and takes **thou**.

---

## §7 · PLATE CANDIDATES — raised, none patched, none marked

**No `[sic:]` and no `[cj:]` was fired in this range, so these five chunks assert nothing whatever
about Migne's plate** (ship test B). Each item below is a crux and a request, not a claim.

### 7a · *palma* for *plasma* @ 1084C — a REAL WORD, so rendered as printed

`VERS. 9.-- *Honora Dominum de tua substantia.* Ut scilicet homines, **qui ejus palma sunt**, qui ad
ejus imaginem facti sunt recreentur.`

*palma* is a perfectly good Latin word, and the sentence with it in reads "men, **who are his palm**".
The word the argument wants is ***plasma*** — "who are his moulding, his handiwork" — which pairs
exactly with the following *qui ad ejus imaginem facti sunt*, is the standard word for the creature
in this register, and differs from *palma* by two letters.

⛔ **No marker.** The addendum's rule is measured and unambiguous: **a real, well-formed word that
reads oddly is Migne's until a plate says otherwise — refuted 5 of 5.** The English therefore reads
"who are his palm", the conjecture lives here, and a plate read at PL 113 col. 1084 band C would
settle it in one request. **Nor does it reach Pattern 18's bar**, which is narrow: *palma* does not
make the sentence assert something the author is arguing against; it makes it fail to construe, and
18a declines exactly that class.

### 7b · *paraemias* @ 1079C — the only near-non-word in the range

`Graece παροιμιας *paraemias,* id est, proverbia dicit`

The standard Latin transliteration of παροιμίας is ***paroemias***; *paraemias* has *ae* for *oe*.
It sits **in italics beside the Greek it transliterates**, which is where a compositor is most likely
to err and least likely to be corrected — but it is a legible form of a real word, not a hole, so it
is rendered as printed (carried in italics, untranslated, as a mentioned Greek word), with **no
`[sic:]`**. ⚠ It is also exactly the shape of brief §4's **normalization class running the other
way**, and I cannot tell from the file whether the *ae* is Migne's or ours.

### 7c · *clàmitat* @ 1082A — a grave accent on a finite verb

`VERS. 21.-- *In capite turbarum **clàmitat**,* etc.`

Migne prints the word with a grave accent. The Clementine has *clamitat*, and at 1091A the same
verb's cognate is printed unaccented. An accent on *à* is ordinary in this corpus **as a
disambiguator on the preposition**; on a third-person verb it is not. **English has no exponent for
a Latin accent** (the Pattern 9 family), so the English reads "crieth out" with nothing marked, and
this is logged so a later reader does not take the accent for our own.

### 7d · The clipped left margin — where it would show in this range, and it does NOT

Our archive.org copy of PL 113 clips the left margin on some pages, and 8965 found its split runs
sitting at left-column heads because of it. **I looked for that shape here and found none**: there is
no split run, no doubled syllable, and no truncated word anywhere in cols 1079C–1091D. ⭐ **Recorded
as a checked negative**, because the same photograph produced positives two books away and a reader
comparing the two needs to know this range was examined and came back clean.

### 7e · A misplaced semicolon @ 1086A — carried, unreadable, and logged

`Illusor est et ille, qui promissa ejus, quasi prava, despicit, ac iram districtionis, quasi
tolerabilem**;** spernit.`

The semicolon falls **between the object and its verb**. Pattern 8 is explicit that a printed mark
rides even where it makes the English unreadable, and that the crux, not the text, adjudicates — so
the English reads "…and the anger of his strictness, as though tolerable; he spurns." The supplied
"he" is the only addition; *spernit*'s subject (*ille*) is four clauses back. ⚠ I cannot tell whether
the semicolon is Migne's or our digitization's, and **that is precisely why nothing was moved**.

---

## §8 · THE UNEXPRESSED SUBJECT — every pronoun I supplied that the Latin does not print

Named individually, because 12 of 25 sites in 11613's blind read were this class and both readings
usually construe.

| col | supplied | who, and what fixes it |
|---|---|---|
| 1079D | "[he signifies]" in *Sicut templi constructione… aedificationem Ecclesiae* | **Solomon**, subject of *significat* two clauses earlier; the clause has no verb at all and the bracket says so. |
| 1082A | "**he** plainly repeated" (*manifeste replicabat*) | **Christ.** The paragraph's own apposition decides it: *Sapientia,* ***id est Christus,*** *loquitur foris*. ⚠ The lemma immediately before keeps **"she"** (*dat vocem **suam***), because *sapientia* is the grammatical subject there; the shift from "she" in the lemma to "he" in the gloss is Migne's own and is not smoothed. |
| 1082A | "**he** called back his own grace" (*gratiam suam revocabat*) | Christ, same referent, same paragraph chain. |
| 1082A | "exhorts **them** to be converted" (*hortatur converti*) | the persecuting Jews of VERS. 20–22, who are the addressees throughout this stretch. |
| 1084B | "**he** may lose the piety" (*amittat*), 1084D | the *qui in prosperis serviunt Domino* of the same sentence, generalized to the singular by the abridgment. |
| 1087D | "he keeps **him** from the wickedness" (*prohibet*) | ***auditorem***, printed in the preceding clause (*castigaverat auditorem*). |
| 1090A | "or **he** presumes to corrupt" (*praesumit*) | ⚠ **Unresolved, and flagged rather than chosen.** The subject sits inside the text the *usque ad* removed; from *sive… quamque fidelem* the referent is some corrupter set against the *Dominus* of the sentence's first half, but nothing on the page names him. A bare "he" is the least the English can do. |
| 1084A (0001) | "they come to **that which** reigns with Christ" (*quae… regnat*) | ⚠ **Also unresolved.** The antecedent is feminine singular and stands inside the elided text; the Church is the obvious candidate and is **not** asserted. Rendered with a neutral "that which" so the English claims no more than the page does. |

---

## §9 · THE FOURTH TEST — read back for what the English ASSERTS

Run last, with counts already clean, on every paragraph. Three passages were re-read and changed;
the rest stand.

1. **1082A** *Ad correctionem* — first drafted with the gloss's *corripit* rendered "corrects", which
   made the lemma and the gloss agree and hid the divergence §1a records. Restored to "rebukes",
   which is what *corripit* says, and the `[var:]` now has something to be read against.
2. **1085D** *Non contendas adversus hominem* — first drafted with "in vain" attached to the wrong
   clause ("this is not done in vain, which a sure necessity compels" reordered so that *frustra*
   floated onto *cogit*). Repaired: the *frustra* is on *fit*, and it must be, or the marker in
   §1a is arguing against our own sentence.
3. **1091D** *ne quis eum cum creaturis et temporibus esse prohiberet* — the smooth reading ("lest
   anyone should deny that he began with the creatures") is the one the argument seems to want and
   **is not what the words say**. Rendered literally, "lest anyone should forbid him to be with the
   creatures and the times", and left rough. ⚠ A sentence that reads smoothly where the Latin is
   rough is a suspect, not a success; this one is logged rather than fixed.

**Sections read clean under this test and needing nothing:** the whole of CAPUT II (1083A–1084A),
CAPUT IV (1086C–1087C), and CAPUT VII (1090A–1091A).

---

## §10 · DECLINED, WITH THE REASON

- **`[cj:]` at 1084C (*palma*)** — declined: real word, no false assertion, and 18a's bar was not
  reopened. See §7a.
- **`[sic:]` anywhere** — declined throughout: there is no non-word, no split run and no doubled run
  in this range. A `[sic:]` is a public claim and seven false ones were withdrawn from an earlier
  batch.
- **A `[var:]` on any of the nineteen divergences in §1b** — declined individually, each with its
  reason in the table. The bar is a divergence that changes the sense; orthography, verb form and
  syntactic integration do not.
- **A `[var:]` on the four misprinted citations in §2** — declined: the **words** agree with their
  true sources, so there is no textual variant to record. The defect is in the numeral, which is
  `[n:]` matter and belongs in `data/citation-corrections.json`, not in the English.
- **Any tei-patch** — declined: nothing in this range fails to construe from a transcription defect.
- **Renumbering the three verse addresses in §3** — declined absolutely; they are Migne's.
- **`[cn:]`** — none, and none was expected: the plate spot check for this work is a checked zero.

---

# PART II — chunks 0005–0009, cols 1092A–1107B (Prov. IX–XXIII)

# PART II — chunks 0005–0009, cols 1092A–1107B

*Glossa ordinaria*, **Liber Proverbiorum** (PL 113), CAPUT IX–XXIII. Translated 2026-08-25,
one translator, **5 chunks, 5,713 Latin words** (frontmatter counts: 1,139 + 1,049 + 1,189 +
1,156 + 1,133; body counts 1,146 + 1,058 + 1,200 + 1,167 + 1,142). `verify-english.mjs` reports
no failure over this range — at the time of filing the only failures it reports are the peer's
still-missing 0010–0013. EN/LA ratio **1.56** with `[var:]` content stripped.

**Apparatus fired: 19 `[var:]` · 0 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` ·
0 `[cn:]` · 20 `[n:]`** (5 + 3 + 5 + 1 + 6, exact parity with the Latin twins, contents verbatim
and untranslated, Migne's own internal spacing kept — `[n: (HIER., de morte Fabiolae. )]` and
`[n: (Matth. X.)]`). Zero guillemets in either language. **The plate spot check for this work is a
checked zero**: Migne prints no numbered *Forte* apparatus here, there is no `[cn:]` in the Latin
and none in the English.

**Parity, measured not assumed:** column anchors 12 + 12 + 13 + 13 + 12 = **62, verbatim and in
order**, and each was checked against the WORD it stands beside in the Latin, not merely for
presence (test 2b). Italic spans **410 in the Latin, 410 in the English** once `[var:]` contents
are stripped (87 · 85 · 80 · 75 · 83). `VERS. n.--` addresses pass through verbatim, untranslated.
Paragraph structure 1:1. Punctuation was compared **band by band** (colons, semicolons, question
marks, exclamation marks) across all 62 bands — see §5, which is where this stint's real repairs
came from.

---

## §V · VOCABULARY — INHERITED FROM `cruces-0000.md`, NOT RE-DERIVED

`src/english/8966/cruces-0000.md` was on disk before I filed, and I read it and followed its table
rather than inventing my own. **Where it decided a word, I used its word.** The places where that
changed what I had first written are named, because a merge needs to know a convention was obeyed
on purpose and not by luck:

| Latin | English | how this stint used it |
|---|---|---|
| *doctores* | **teachers**, never "doctors" | 1098A *Ecclesiae doctores* → "the teachers of the Church"; 1102C *perfecti doctoris* → "a perfect teacher"; 1100C *sanctis doctoribus* → "the holy teachers"; 1106A *statuere doctores* → "the teachers established" |
| *praedicatores* · *praedicatio* | preachers · preaching | held apart from *doctores* throughout (1092A, 1099D, 1100C, 1103D) |
| *doctrina* | **doctrine**, never "teaching" | ⭐ **two renderings were changed to obey this**: 1102C *Doctrina viri* had been "the learning of a man" → **"the doctrine of a man"**, and *Doctrina ecclesiastica* had been "ecclesiastical teaching" → **"ecclesiastical doctrine"**. *dogma* is held apart and rendered "teaching(s)" (1095A *pravi dogmatis*, 1095C *nova dogmata*), which is what makes the *doctrina* rule visible rather than ambiguous. |
| *disciplina* | **discipline** | ⭐ **one rendering was changed**: the expanded lemma at 1098A had been "the instruction of his father" → **"the discipline of his father"**. Also 1093D/1094A *ignorantiam disciplinae*, 1103A *per disciplinam ligari*, 1105A *ecclesiastica disciplina* |
| *sapientia* / *scientia* / *prudentia* | wisdom / **knowledge** / prudence | never interchanged. 1093B *Abscondunt scientiam* → "They hide knowledge"; 1100B *sine scientia praedicandi* → "without the knowledge of preaching"; 1093B *Prudentia a providendo* → "Prudence … from providing" |
| *charitas* / *dilectio* | **charity** / **love** | held apart. *charitas*: 1095B (faith, hope, charity), 1098B, 1100B, 1101C. *dilectio*: 1092B, 1093B, 1101A |
| *Ecclesia* / *ecclesia* | **Church** / church — **mirrors the plate word for word** | **every occurrence in this range is capitalized in Migne** (1092A *Ecclesiae* ×2 and *Ecclesias*, 1092C *Ecclesiam*, 1098A/1099D/1101A *Ecclesiae*, 1102C *Ecclesiae*), and every one is "Church"/"Churches" in the English. There is **no lowercase *ecclesia*** in these five chunks; the adjective *ecclesiastica* (1102C, 1105A) is "ecclesiastical" |
| *Scriptura* / *Scripturae* | Scripture / the Scriptures | Pattern 3; 1093B, 1096C, 1097B, 1098A, 1101B, 1102C, 1106C, 1106D |
| *usque ad* as abridgment | ***as far as***, inside its own italic span | **decided per occurrence, never by rule** — see §2 |
| `VERS. n.--` | verbatim, untranslated | Ruth §1.1 |
| *interpretatur* | "is interpreted" | ⚠ **the etymology formula does not occur in this range.** The one occurrence of the verb (1106B, *quae non intelligit in Scripturis, ut libet interpretatur*) is the ordinary transitive verb, "interprets as he pleases", and is not the name-etymology formula the convention governs. Recorded so the merge knows it was looked for. |
| second person | **thou = singular, you = plural** | §4b |

**Head forms:** `CAPUT IX.` → **CHAPTER IX.**, and so on with the Roman numeral kept — Ruth's
shipped form, 8954's, and the form chunk 0000 chose for this book. My heads are CHAPTER IX, X, XI,
XII, XIII, XIV, XV, XVI, XVII, XVIII, XIX, XX, XXI, XXII, XXIII. (8965 spells its numerals out and
therefore diverges from the pilot; chunk 0000 flagged that and did not follow it, and neither did I.)

**Words this stint had to fix that chunk 0000's table does not reach**, stated here so the merge can
reconcile them against the peers' English rather than against this table:

- ***derisor* → scorner** (1097A ×2, 1105C), held apart from ***illusor* → mocker**, which chunk 0000
  fixed and which **does not occur in my range**. Also ***illudere*** does not occur here.
- ***dissimulare* → to dissemble** (1095B *Qui autem dissimulat*, 1103A *ligari dissimulat*) and
  ***simulator* → the dissembler** (1094A) — both from the same idea, and Migne uses them of
  different people, so they are kept in one English family. ***versipellis* → the turncoat**
  (1097C), deliberately **not** "the dissembler", because Migne glosses it of the devil who changes
  his skin and the two words stand nine lines apart.
- ***fatuus* → the fool · *stultus* → the fool · *insipiens* → the unwise · *imprudentia* →
  imprudence.** ⚠ *fatuus* and *stultus* both come out "fool" because English has one word where the
  Latin has two, and **1097B prints them in the same sentence** (*Fatuitas stultorum* → "The folly of
  fools"). Flagged rather than solved: inventing a second English word here would be our
  distinction, not his.
- ***pascha*** does not occur; ***typice*** does not occur; ***meretrix* → harlot** (1107A);
  ***parvuli* → little ones** (1092B).
- **Proper names, form for form as Migne prints them:** *Porphyrius* → Porphyry · *Julianus* →
  Julian · *Caiphas* → Caiphas · *Sareptanam* → of Sarepta · *Origenes* → Origen · *Pelagianus* →
  the Pelagian · *Leonidis* → Leonides · *Alexandrum magnum* → Alexander the Great · *Herodes* →
  Herod · *Joannem* → John · *Judaea* → Judea · *Anna* → Anna · *Judae* → Judas. None normalized
  toward a familiar English Bible spelling.

---

## §1 · THE LEMMA COLLATION — every italic span in 1092A–1107B, walked

All **410 italic spans** in my five chunks were walked, in order, against
`sources/vulgate/clementine-flat.txt`, cited by book chapter:verse. **The agreements are listed as
well as the divergences** (§1c), because a list of findings alone cannot be told apart from a report
by a reader who never looked. Of the 410, **118 are the *usque ad* abridgment span** (§2), which is
not a scripture lemma at all, leaving 292 real spans.

### 1a · The nineteen divergences that fired a `[var:]`

Each names the book, chapter and verse explicitly, which is 8965's form and the house form.

| chunk · col | Migne prints | Clementine | why it fired |
|---|---|---|---|
| 0005 · 1093A | *mors et vita in **manibus** linguae* `[n: (Isa. LXVI)]` | **Prov. 18:21** *Mors et vita in **manu** linguae* | Plural for singular, **and the words are Proverbs, not Isaias** — the note's book is wrong and the note passes through verbatim, so the `[var:]` is the only place a reader learns it. (Migne is quoting his own book two chapters ahead of where he stands.) |
| 0005 · 1093A | *nihil enim **occultum** quod non **reveletur*** `[n: (Matth. X)]` | **Matt. 10:26** *Nihil enim est **opertum**, quod non **revelabitur*** | Two words changed. ⭐ And the form Migne prints is **Luke's** (Lc. 12:2 *Nihil autem opertum est, quod non reveletur*) crossed with Matthew's *occultum*; his own note cites Matthew. The marker states the Vulgate Matthew and speculates about neither. |
| 0005 · 1093B | VERS. 18.-- *Abscondunt **scientiam**,* etc. | **Prov. 10:18** *Abscondunt **odium labia mendacia*** | ⭐⭐ The sharpest in the range. The lemma standing under VERS. 18 is **the wording of Prov. 10:14** (*Sapientes abscondunt scientiam*) — which Migne himself has quoted five lines above as the resumption of VERS. 13. The gloss beneath it expounds **10:18 and nothing else** (*odium neque in abscondito cordis conteges, neque per oris contumeliam proferas*): hatred, the hiding, and the reviling of the mouth. So the gloss rests on a verse the lemma no longer prints. Rendered as printed; the marker carries both verses. |
| 0005 · 1093B | *A nobis **exierunt**, sed ex nobis non erant* `[n: (I Joan. II)]` | **1 Joan. 2:19** *Ex nobis **prodierunt**, sed non erant ex nobis* | Different verb and reordered preposition-phrases. The sense survives; the wording does not, and the gloss is adducing the verse as a proof-text about heretics. |
| 0005 · 1093D | VERS. 29.-- *Fortitudo simplicis via **ejus**, et pavor.* | **Prov. 10:29** *Fortitudo simplicis via **Domini**, et pavor **his qui operantur malum*** | *ejus* for *Domini* changes whose way it is — the simple man's, not the Lord's. Material, and the gloss (*Si obscura Scripturarum … operari contemnunt*) is about men's ways of reading. |
| 0006 · 1095B | *sicut Dominus ait: **Percutiunt** **pueros** et ancillas,* … *Moram facit Dominus meus venire.* | **Luc. 12:45** *Moram facit dominus meus venire: et coeperit **percutere servos**, et ancillas* | *pueros* for *servos*, indicative *Percutiunt* for the infinitive of the Lucan construction, **and the two halves are printed in the reverse order from Luke's** — Migne strikes first and speaks after. The marker names all three. |
| 0006 · 1095C | VERS. 23.-- *Homo **versutus**.* | **Prov. 12:23** *Homo **versatus** celat scientiam* | *versutus* is "crafty", *versatus* "practised" — and Migne's own gloss on it reads *Sapiens et prudens*, which is the sense of *versatus*. The lemma has drifted off the word its own gloss glosses. Rendered "*A crafty man*". |
| 0006 · 1096B | *ipse est enim **lignum vitae amplectentibus se.*** | **Prov. 3:18** *Lignum vitae **est his qui apprehenderint eam***; and Prov. 13:12, the verse under gloss, reads *lignum vitae **desiderium veniens*** | The phrase is in neither verse in this form, and it is applied to Christ (*ipse est enim*). Both readings are named. |
| 0007 · 1098A | VERS. 10.-- *Doctrina mala. Qui solverit … minimus **est** in regno coelorum.* | **Matt. 5:19** *Qui **ergo** solverit … minimus **vocabitur** in regno caelorum* | *est* for *vocabitur* — "is the least" for "shall be called the least" — inside a Matthew quotation that Migne prints **inside the same italic span as the Proverbs lemma**, with no note. The span's structure is reproduced exactly. |
| 0007 · 1098C | *Descendunt in infernum viventes* `[n: (Psal. LIV)]` | **Psal. 54:16** *et **descendant** in infernum viventes* | Indicative for the psalm's imprecatory subjunctive: Migne's page states as fact what the psalm asks for. The citation is right; the mood is not. |
| 0007 · 1098D | VERS. 1.-- *Hominis est **animum** praeparare.* … *et **Dei** gubernare linguam?* | **Prov. 16:1** *Hominis est **animam** praeparare, et **Domini** gubernare linguam* | Two changes, both carried into the gloss's own restatement, so this is Migne's text and not a slip of one line: *animum* (the mind) for *animam* (the soul), *Dei* for *Domini*. |
| 0007 · 1098D | *Nolite cogitare quomodo, aut **quod** loquamini: **datur** enim in illa hora, quid loquamini* `[n: (Matth. X)]` | **Matt. 10:19** *aut **quid** loquamini: **dabitur** enim **vobis** in illa hora, quid loquamini* | Present for future, *vobis* dropped, and *quod* for the first *quid*. |
| 0007 · 1099C | *Multi **reges et prophetae** voluerunt videre, quae vos **vidistis**, et non viderunt.* | **Luc. 10:24** *multi **prophetae et reges** voluerunt videre quae vos **videtis**, et non viderunt* | Order of the two nouns reversed and the tense of *videtis* changed to a perfect. ⭐ Worth marking because the gloss immediately turns on the kings (*Reges enim terrae saepe labia justa detestantur, ut Herodes Joannem*), which is why the noun that Migne fronts matters. |
| 0007 · 1100A | VERS. 27.-- *Vir **insipiens** fodit malum.* | **Prov. 16:27** *Vir **impius** fodit malum* | "Unwise" for "wicked". Material, and the gloss reads it of the heretic. |
| 0008 · 1103C | VERS. 8.-- *Rex qui **sedit** in solio judicii.* | **Prov. 20:8** *Rex qui **sedet** in solio judicii* | ⚠ **A single vowel, and it therefore rests on our transcription as much as on the plate — but it is printed TWICE in the same column** (once as the forward reference *Rex qui sedit.* at the end of VERS. 7, once as the lemma of VERS. 8), which is what took it past the single-letter bar. Rendered "who hath sat"; §3 lists it again as a cheap plate read. |
| 0008 · 1104A | VERS. 23.-- *Abominatio est apud **Deum** pondus et pondus, statera dolosa,* etc. | **Prov. 20:23** *Abominatio est apud **Dominum** pondus et pondus; statera dolosa **non est bona*** | A different divine name in a lemma, and Migne's lemma has also drawn in the *statera dolosa* clause without its *non est bona*. ⚑ Note the negative belongs to a clause the lemma does not print, so nothing was dropped in the English: there is no negative on this page to carry. |
| 0009 · 1106C | VERS. 9.-- *In auribus. **Nolite sanctum dare** canibus, neque **mittas** margaritas ante porcos.* | **Matt. 7:6** *Nolite **dare sanctum** canibus: neque **mittatis** margaritas **vestras** ante porcos* | ⭐ The important one is *mittas*: Migne's second verb is **singular**, where Matthew's is plural — and Pattern 17 makes that visible in the English ("neither cast **thou**"), against the plural *Nolite* four words earlier. Also word order and the dropped *vestras*. |
| 0009 · 1106D | VERS. 20.-- *Noli esse in conviviis **peccatorum**.* | **Prov. 23:20** *Noli esse in conviviis **potatorum*** | "Of sinners" for "of great drinkers" — and the whole of Migne's gloss on it is about **detraction at table**, not about drink, so the lemma he prints is the lemma his gloss needs. |
| 0009 · 1107A | *Cui **suffossio** oculorum?* | **Prov. 23:29** *cui **suffusio** oculorum?* | "The undermining" for "the suffusion (redness)" of the eyes. A real word for a real word, and the gloss goes with what he prints (*ingerit caecitatem*, brings in blindness). |

### 1b · Divergences found, LOGGED, and declined a marker — each with its reason

**None of these fires a `[var:]`**, because Pattern 14's bar is a divergence that CHANGES THE SENSE,
and because a `[var:]` is a public claim. They are listed because a blind reader will find them and
needs to know they were seen and weighed.

| col | Migne | Clementine | why declined |
|---|---|---|---|
| 1092B | *sedet,* (of the foolish woman) | Prov. 9:14 *sedit in foribus domus suae* | One letter, and a present tense suits Migne's own framing verb (*quae est ei contraria, sedet*). Below the single-letter bar. |
| 1092D | *messis multa **est**, operarii **vero** pauci* `[n: (Matth. IX)]` | Matt. 9:37 *Messis **quidem** multa, operarii **autem** pauci* | Two particles and a supplied copula; the assertion is identical. |
| 1093A | *os* illius *iniquitas **operuit*** | Prov. 10:6 *os autem impiorum **operit** iniquitas* | A re-quotation woven into Migne's own relative clause, which needs the perfect. Not a proof-text. |
| 1094D | *nosipsos seducimus, et veritas in nobis non est* | 1 Joan. 1:8 *ipsi **nos** seducimus…* | *nosipsos* for *ipsi nos*: the same two words fused. Sense untouched. ⚑ Both of the sentence's negatives (*non sumus*, *non est*) and its *negamus* are carried. |
| 1095B | *Lingua autem sapientium **est sanitas**,* | Prov. 12:18 *lingua autem sapientium **sanitas est*** | Word order only. |
| 1095D | *cum adjungit, **moeror justi**,* | Prov. 12:25 *Moeror in corde **viri** humiliabit illum* | A forward pointer in Migne's own shorthand to the verse he glosses in the very next paragraph, where he prints the lemma correctly as *Maeror in corde*. A shorthand is not a quotation. |
| 1095D | *Maeror* here, *moeror* five lines above | Prov. 12:25 *Moeror* | *ae*/*oe* orthography, and Migne prints both forms himself on one page. Pattern 9. |
| 1096A | *Vae peccatori terram **duabus viis ingredienti*** | Sir. 2:14 *et peccatori terram **ingredienti duabus viis*** | Word order, plus Migne fronting the *Vae* from earlier in the same verse. He names his source correctly (*Jesus filius Sirach*). |
| 1096C | VERS. 22.-- *Bonus **homo**,* etc. | Prov. 13:22 *Bonus reliquit haeredes…* | One supplied noun in a two-word lemma cut by *etc.* |
| 1098A | *Vultusque **ejus** non sunt amplius in diversa mutati* | 1 Reg. 1:18 *vultusque **illius**…* | *ejus*/*illius*. Migne names Anna correctly. |
| 1098B | inside the abridgment span: *discedite a me operarii iniquitatis* | Luc. 13:27 *discedite a me **omnes** operarii iniquitatis* | A dropped *omnes* inside a resumption tail that the abridgment has already cut at both ends. |
| 1103C | *Beatos post se filios **relinquet*** | Prov. 20:7 *beatos post se filios **derelinquet*** | Simple verb for compound, same sense. |
| 1103C | VERS. 9.-- ***Qui** potest dicere.* | Prov. 20:9 ***Quis** potest dicere* | ⚠ One letter, and **Migne's own gloss two words later prints *quis*** (*Non dicit, quis habet*), so the plate probably reads *Quis* and our transcription has dropped the *s*. **That makes it a candidate against OUR file, not a divergence in his** — firing a `[var:]` would blame Migne for a fault the evidence points at us. Rendered as printed ("*He that can say*"), logged in §3 as a plate read. |
| 1103C | *Amicus stultorum similis **efficitur*** | Prov. 13:20 *amicus stultorum similis **efficietur*** | Present for future; one letter. |
| 1104A | *corona vitae quam **repromittit** Deus diligentibus se* | Jac. 1:12 *coronam vitae, quam **repromisit** Deus diligentibus se* | Present for perfect in a promise that holds in both tenses. |
| 1104C | *Ita cor regis quocunque voluerit* … *inclinat* | Prov. 21:1 *ita cor regis **in manu Domini**: quocumque voluerit, **inclinabit illud*** | Migne has cut *in manu Domini* (which he has already quoted in his own words two lines above) and put the verb outside the italics in his own present tense. Adaptation, not variant. |
| 1104D | *In coetu **gigantium*** | Prov. 21:16 *in coetu **gigantum*** | Third-declension genitive plural in *-ium* for *-um*; ordinary medieval orthography, Pattern 9. |
| 1105A | *Si adhuc hominibus placerem, Christi servus non essem**!*** | Gal. 1:10 (same words) | ✓ agrees word for word. The **`!` is Migne's** and is preserved under Pattern 8; it is listed here only so nobody reads it as ours. |
| 1105C | VERS. 13.-- *Dicet piger,* | Prov. 22:13 *Dicit piger* | One letter, future for present. |
| 1105D | *Fili mi.* opening the VERS. 16 gloss | Prov. 22:17 *Inclina aurem tuam* | Migne uses *Fili mi* as the label of the section that begins at 22:17 (his gloss says so: *Hucusque titulus parabolarum Salomonis qui supra positus*). A section label, not a quotation. |
| 1106B | VERS. 4.-- *Pone modum.* | Prov. 23:4 *sed prudentiae tuae **ponde** modum* | ⭐ **The one place where MIGNE is the tidier witness.** *ponde* is the Clementine's own well-known oddity; Migne prints the ordinary imperative *Pone*. Marking this as a divergence would tell a reader that Migne departs from the received text, when what has actually happened is that the received text is the odd one. Crux only. |
| 1106D | *Quia **vacant** potibus* | Prov. 23:21 *quia **vacantes** potibus et dantes symbola consumentur* | Finite verb for participle, because Migne has cut the verse in half and needs a clause. |
| 1106D | *Cui vae, cujus.* | Prov. 23:29 *Cui vae **?** cujus patri vae ?* | Migne prints a comma where the Clementine prints a question mark, and stops at *cujus*. Punctuation rides as printed (Pattern 8); the four question marks he DOES print at 1107A are all carried. |

### 1c · Checked and found to AGREE with the Clementine exactly

Listed by verse, because this half of the collation is what distinguishes a report from a guess.
Fragments are counted as agreeing when every word Migne prints is the verse's own word in the
verse's own order.

- **Prov. IX** (1092A–1092C): 9:1 *Sapientia aedificavit*, *Columnas septem* · 9:5 *Venite, comedite
  panem meum*, and the gloss's *pane* / *vino* · 9:6 *Relinquite* · 9:7 *Qui erudit* · 9:8 *Noli
  arguere* · 9:12 *Si sapiens*, *sapiens fueris* · 9:13 *Mulier stulta* (×2), *Mulier* · 9:16 *Qui
  est parvulus* · 9:17 *Aquae furtivae* · 9:18 *Et ignoravit quod ibi*.
- **Prov. X** (1092C–1093D): 10:1 *Parabolae Salomonis*, *Filius sapiens* · 10:2 *Nil proderunt* ·
  10:3 *Non affliget Dominus* · 10:4 *Egestatem operata* · 10:5 *Qui congregat* · 10:6 *Os autem
  impiorum*, *os* · 10:7 *Memoria* · 10:8 *Stultus **ceditur** labiis* (see §3 on the *ae*/*e*) ·
  10:9 *Qui ambulat* · 10:13 *Virga in dorso ejus* · 10:14 *Sapientes abscondunt* · 10:15
  *Substantia divitis* · 10:23 *Quasi per risum stultus operatur scelus* · 10:24 *Quod timet impius,
  veniet super* · 10:25 *Quasi tempestas* · 10:26 *Sicut acetum dentibus* · 10:28 *Spes autem*.
  Also **Psal. 118:2** *Domine, libera animam meam a labiis iniquis* (Migne's `[n: (Psal. CXIX)]`
  numbering is the Vulgate's own, and correct).
- **Prov. XI** (1093D–1094D): 11:1 *Statera dolosa* · 11:2 *Ubi fuerit superbia* · 11:7 *Mortuo
  homine impio*, *Exspectatio sollicitorum* · 11:9 *Simulator* · 11:12 *Qui despicit* · 11:14 *Ubi
  non est gubernator, populus corruet, salus autem ubi multa consilia* · 11:15 *Affligetur*, *Qui
  autem cavet laqueos securus erit* · 11:20 *Abominabile Domino cor pravum* · 11:21 *Manus in manu* ·
  11:22 *Circulus aureus in naribus* · 11:27 *Bene consurgit diluculo qui quaerit bona* · 11:28
  *Justi autem quasi* · 11:29 *Qui stultus est* · 11:30 *Qui suscipit* · 11:31 *Si justus*.
- **Prov. XII** (1094D–1096A): 12:2 *Qui bonus est* · 12:4 *Mulier* · 12:5 *Cogitationes* · 12:7
  *Verte impios* · 12:10 *Novit*, *Viscera autem impiorum crudelia* · 12:12 *Desiderium*, *Radix
  autem justorum proficiet* · 12:16 *Fatuus*, *Qui autem dissimulat* · 12:19 *Labium veritatis* ·
  12:23 *Cor insipientium provocat* · 12:24 *Manus fortium*, *Quae autem remissa* · 12:25 *Maeror in
  corde* · 12:26 *Qui negligit damnum* · 12:27 *Non inveniet*.
- **Prov. XIII** (1096A–1096D): 13:1 *Filius sapiens* · 13:4 *Vult et non vult piger*, *Anima autem
  operantium*, *impinguabitur* · 13:7 *Est quasi dives* · 13:11 *Substantia* · 13:12 *Spes quae
  differtur* · 13:13 *Qui detrahit* · 13:14 *Lex sapientis* · 13:16 *Cum consilio* · 13:20 *Qui cum
  sapientibus*, *Amicus stultorum* · 13:23 *Multi cibi* · 13:24 *Qui parcit virgae odit filium suum*.
  Also **Psal. 62:6** *Sicut adipe* (Migne's `[n: (Psal. XXVI)]` does not match those words — §3),
  **Luc. 16:19** *purpura et bysso*, **Gal. 6:1** *Si praeoccupatus fuerit homo in aliquo delicto*.
- **Prov. XIV** (1096D–1097D): 14:1 *Sapiens*, *Destruet* · 14:3 *In ore stulti* · 14:4 *Ubi non* ·
  14:6 *Quaerit derisor sapientiam* · 14:7 *Vade contra* · 14:10 *Extraneus* · 14:16 *Sapiens timet
  et declinat* · 14:17 *Impatiens* · 14:19 *Jacebunt mali ante bonos* · 14:24 *Fatuitas stultorum* ·
  14:25 *Liberat animas testis fidelis*, *Profert mendacia*, *Versipellis* · 14:26 *In timore
  Domini* · 14:27 *Timor Domini* · 14:30 *Vita carnium*, *Putredo ossium invidia*. Also **Psal.
  110:10** *Initium sapientiae timor Domini* (Migne's `[n: (Psal. IX)]` does not match — §3).
  ⚠ *Dominus impiorum* (1097B) is treated separately in §3; it agrees with no verse.
- **Prov. XV** (1097D–1098D): 15:1 *Responsio mollis frangit iram* · 15:2 *Ebullit stultitiam* ·
  15:5 *Stultus irridet* · 15:7 *Cor stultorum dissimile* · 15:10 *Doctrina mala* · 15:15 *Omnes
  dies* · 15:17 *Melius est vocari ad olera* · 15:19 *Pigrorum*, *Via justorum absque offendiculo* ·
  15:23 *Laetatur homo* · 15:24 *De inferno novissimo* · 15:26 *Firmabitur* · 15:30 *Lux oculorum
  laetificat animam*, *Lux oculorum*. ⚠ *Viduae Ecclesiae* (15:25) and *Videns bona oculus delectat
  corda bona* are treated in §3 — the first fuses a gloss word into the lemma's italics, the second
  is announced by Migne himself as *Alia translatio* and is therefore not a Vulgate citation at all.
- **Prov. XVI** (1098D–1100B): 16:2 *Omnes viae* · 16:3 *Revela Domino* · 16:4 *Universa propter
  semetipsum* · 16:5 *Abominatio est* · 16:7 *Cum placuerint Domino* · 16:8 *Melius est parum cum
  justitia* · 16:10 *Divinatio in labiis regis* · 16:11 *Pondus et statera* · 16:13 *Voluntas regum* ·
  16:14 *Nuntii mortis*, *Placabit* · 16:15 *In hilaritate vultus regis vita*, *Et clementia ejus
  quasi imber serotinus* · 16:22 *Fons vitae* · 16:24 *Favus mellis composita verba* · 16:26 *Anima
  laborantis laborat sibi* · 16:29 *Vir iniquus lactat amicum suum* · 16:30 *Qui attonitis oculis
  cogitat* · 16:32 *Melior est patiens viro forti* · 16:33 *Sortes mittuntur in sinum*. Also **Luc.
  3:6** *videbit omnis caro salutare Dei*, **Psal. 9:24** *quoniam laudatur peccator in desideriis
  animae suae, et iniquus benedicitur*, **Jac. 3:6** *inflammat rotam nativitatis nostrae inflammata
  a gehenna*.
- **Prov. XVII** (1100B–1101A): 17:1 *Melior est buccella* · 17:6 *Corona senum* · 17:8 *Gemma
  gratissima* · 17:12 *Expedit magis ursae* · 17:14 *Qui* · 17:16 *Quid prodest* · 17:17 *Omni
  tempore* · 17:22 *Animus gaudens* · 17:24 *In facie prudentis* · 17:26 *Non est bonum damnum
  inferre justo*. Also **Rom. 8:28** *Quoniam diligentibus Deum omnia cooperantur in bonum*,
  **Prov. 26:10** *Qui imponit stulto silentium, iras mitigat*. ⚠ 17:18 *Homo stultus plaudet
  manibus* reverses the Clementine's *Stultus homo* — word order only, and it is listed here rather
  than in §1b only because the two words are the whole lemma.
- **Prov. XVIII** (1101B–1102A): 18:3 *Impius cum in profundum venerit* · 18:4 *Aqua profunda*, *Et
  torrens redundans fons sapientiae* · 18:9 *Qui mollis et dissolutus* · 18:11 *Substantia divitis
  urbs roboris ejus* · 18:13 *Qui prius respondet quam audiat* · 18:14 *Spiritus viri sustentat
  imbecillitatem*, *Spiritum vero ad irascendum* · 18:16 *Donum hominis* · 18:17 *Justus prior* ·
  18:19 *Frater qui adjuvatur* · 18:23 *Cum obsecrationibus loquetur pauper* · 18:24 *Vir amabilis*.
- **Prov. XIX** (1102A–1103B): 19:1 *Melior est pauper* · 19:2 *Ubi non* · 19:3 *Stultitia* · 19:4
  *Divitiae addunt amicos* · 19:5 *Testis falsus* · 19:10 *Non decent stultum* · 19:11 *Doctrina
  viri*, *Et gloria ejus est iniqua praetergredi* · 19:13 *Dolor patris*, *Tecta jugiter* · 19:15
  *Pigredo immittit soporem* (×2), *Et anima dissoluta esuriet* · 19:18 *Erudi filium* · 19:19 *Qui
  impatiens est sustinebit damnum et cum rapuerit* · 19:22 *Melior est pauper* · 19:24 *Abscondit
  piger manum* · 19:28 *Devorat*. Also **Gen. 6:6–7** *tactus dolore cordis intrinsecus: Delebo,
  inquit, hominem quem creavi a facie terrae*.
- **Prov. XX** (1103B–1104B): 20:1 *Luxuriosa res* · 20:4 *Aestate* · 20:10 *Pondus et pondus* ·
  20:11 *Ex studiis suis intelligitur* · 20:12 *Dominus fecit utrumque* · 20:14 *Malum est* · 20:15
  *Est aurum et multitudo* · 20:17 *Suavis est homini panis mendacii* · 20:21 *Haereditas* · 20:25
  *Ruina est homini devorare sanctos, et post vota retractare* · 20:26 *Dissipat impios rex sapiens,
  et incurvat super eos fornicem* · 20:30 *Livor vulneris*. Also **Rom. 8:18** *non sunt condignae
  passiones hujus temporis*.
- **Prov. XXI** (1104C–1105A): 21:1 *Sicut divisiones* · 21:8 *Perversa via* · 21:13 *Qui obturat
  aurem* · 21:15 *Pavor operantibus iniquitatem* · 21:18 *Pro justo datur* · 21:20 *Thesaurus
  desiderabilis* · 21:22 *Civitatem fortium* · 21:28 *Testis mendax* · 21:29 *Vir impius*. Also
  **Psal. 94:4** *in manu ejus sunt omnes fines terrae*, **Matt. 25:41** *Discedite a me, maledicti,
  in ignem aeternum, qui paratus est diabolo et angelis ejus*, **Matt. 10:28** *Nolite timere eos qui
  occidunt corpus*.
- **Prov. XXII** (1105A–1106A): 22:1 *Melius est*, *Nomen bonum*, *Gratia bona* · 22:2 *Dives et
  pauper* · 22:3 *Callidus vidit malum* · 22:4 *Finis modestiae*, *Divitiae et gloria* · 22:6
  *Proverbium est* · 22:8 *Qui seminat iniquitatem*, *Et virga irae suae* · 22:16 *Qui calumniatur* ·
  22:24 *Noli esse amicus*, *Homini iracundo, neque ambules cum viro* · 22:26 *Noli esse cum his, qui
  defigunt manus* · 22:28 *Ne transgrediaris* · 22:29 *Vidisti virum velocem in opere suo? coram*.
  Also **Gal. 1:10** *Si adhuc hominibus placerem, Christi servus non essem*, **Matt. 26:52** *Omnes
  enim qui acceperint gladium, gladio peribunt*.
- **Prov. XXIII** (1106A–1107B): 23:1 *Quando sederis* · 23:3 *Ne desideres* · 22:28 (quoted at
  1106B) *Ne transgrediaris terminos antiquos quos posuerunt patres* · 23:6 *Ne comedas* · 23:7
  *Comede* · 23:8 *Cibos quos comederas* · 23:9 *In auribus* · 23:10 *Ne attingas* · 23:17 *Non
  aemuletur cor tuum peccatores* · 23:21 *Dantes symbola consumentur* · 23:27 *Fovea enim profunda
  est meretrix* · 23:29 *Cui rixae? cui foveae? Rixae*, *Cui sine causa vulnera?* · 23:30 *Nonne
  his* · 23:33 *Oculi tui videbunt* · 23:34 *Et eris sicut dormiens* · 23:35 *Verberaverunt me*.
  Also **Apoc. 2:10** *Esto fidelis usque ad mortem, et dabo tibi coronam vitae*, **Joan. 8:44** *Vos
  ex patre diabolo estis*, **Isa. 5:22** *Vae qui potentes estis ad bibendum vinum, et viri fortes ad
  miscendam ebrietatem*.

### 1d · Clipped lemmata — BOTH classes listed, so the split is not misread later as inconsistency

Ruth's convention 3 renders a fragmentary lemma as the phrase it stands for; the 2026-08-19 addendum
adds that a **complete** one-word lemma has nothing elided and is rendered as it stands. Both classes
occur here and the split is deliberate.

**Expanded** (the governed word is missing and English will not carry the stump): 1092A *Sapientia
aedificavit* → "Wisdom hath built herself a house" · 1092A *Relinquite* → "Forsake childishness" ·
1092A *Noli arguere* → "Rebuke not a scorner" · 1092B *Si sapiens* → "If thou be wise" · 1092C *Et
ignoravit quod ibi* → "And she knew not that there are giants there" · 1092C *Nil proderunt* → "The
treasures of wickedness shall profit nothing" · 1092D *Non affliget Dominus* → "The Lord will not
afflict with famine" · 1092D *Egestatem operata* → "The slack hand hath wrought want" · 1093B
*Quod timet impius, veniet super* → "…shall come upon him" · 1093D *Spes autem* → "But the hope of
the wicked" · 1094A *Affligetur* → "He shall be afflicted with evil" · 1094D *Qui suscipit* → "He
that receiveth souls" · 1094D *Si justus* → "If the just man receive on earth" · 1096C *Qui cum
sapientibus* → "He that walketh with the wise" · 1096D *Sapiens,* etc. → "A wise woman," etc. ·
1097A *Ubi non,* etc. → "Where there are no oxen" (Prov. 14:4) · 1098A *Stultus irridet* → "The fool
laugheth at the discipline of his father" · 1100C *Qui.* → "He that letteth out water" (see §3) ·
1102B *Ubi non,* etc. → "Where there is no knowledge of the soul" (Prov. 19:2) · 1103B *Devorat* →
"Devoureth iniquity" · 1103B *Luxuriosa res* → "Wine is a luxurious thing" · 1102C *Non decent
stultum* → "Delicacies are not seemly for a fool".

⚠ **The two *Ubi non* lemmata are the control for this whole class**: Migne prints the identical
stump at 1097A and at 1102B for two different verses, and each was expanded from **its own verse**
(oxen at Prov. 14:4, the knowledge of the soul at Prov. 19:2). Expanding them alike, or leaving them
alike, would have been the error.

**Left as they stand** (nothing is elided; the lemma is a complete English phrase): *Columnas
septem* · *Mulier stulta* · *Aquae furtivae* · *Memoria* · *Substantia divitis* · *Quasi tempestas* ·
*Statera dolosa* · *Simulator* · *Manus in manu* · *Mulier* · *Cogitationes* · *Desiderium* ·
*Fatuus* · *Substantia* · *Extraneus* · *Impatiens* · *Versipellis* · *Aqua profunda* · *Stultitia* ·
*Haereditas* · *Aestate* · *Thesaurus desiderabilis* · *Nomen bonum* · *Gratia bona* · *Pone modum* ·
*Comede* · *Fili mi*.

---

## §2 · `usque ad` — CENSUSED PER OCCURRENCE, NEVER BY RULE

**126 tokens of *usque* in my five Latin chunks. 118 are the abridgment formula** (25 · 24 · 22 · 23
· 24), each inside its own italic span and each answered by exactly one italic ***as far as*** in the
English — verified 1:1 per chunk, not in total. **Eight are not the formula:**

- **Six sit inside another word** and are invisible to a careless sweep: *Vultusque* (1098A),
  *utriusque* (1101B, 1101C), *ejusque* (1096B, 1105A), *Hucusque* (1105D).
- **1099D — *Serotinus imber in Judaea usque hodie … venire consuevit***: ordinary "even to this
  day". Rendered so.
- ⭐ **1106D — *Esto fidelis **usque ad** mortem, et dabo tibi coronam vitae* `[n: (Apoc. II)]`.**
  **This is the trap in my range and it is a real one**: the words *usque ad* stand in italics,
  inside a quotation, immediately after an abridgment formula three words earlier in the same
  paragraph. They are **Apoc. 2:10's own words** — "faithful **unto** death" — and rendering them as
  the formula would have cut the crown out of the promise. Decided from what stands either side, as
  the brief requires.

Two further spans carry the formula with Migne's own punctuation **inside** the italics and are
reproduced that way rather than normalized: `*usque ad, discedite a me operarii iniquitatis.*`
(1098B, where the resumption is fused into the same italic run) and `*usque ad,*` (1100C).

---

## §3 · THIS RANGE'S CRUCES — including everything declined, with the reason

### ⭐ 3a · 1107B · `VERS. 35.emdash;` — a broken HTML entity in OUR TEI. The English prints `VERS. 35.--`

The Latin chunk reads **`VERS. 35.emdash; *Verberaverunt me.*`**. Every other one of the 201 verse
addresses in this work reads `VERS. n.-- `. `emdash;` is the tail of an undecoded `&emdash;`
character entity, and it occurs **exactly once in the whole of `src/latin/`** — a corpus-wide grep
returns this one line and nothing else. It is not type Migne set; it is our source's decoding
failure.

**What I did, and why:** the English prints `VERS. 35.-- `, which is what Migne prints. This follows
Pattern 9's ruling on section labels — *"the English head translates a structural label and there is
no English exponent for a Latin typo, and the Latin side of the parallel page preserves the misprint
verbatim, so nothing is concealed from the reader."* A verse address is exactly that kind of
structural label.

⚠ **This is the one band where my punctuation comparison does not match, and the mismatch is this and
only this**: the semicolon of `emdash;` counts as a semicolon in band 1107B of the Latin and has no
counterpart in the English. It is not page punctuation.

⛔ **It should be fixed by a `data/tei-patches/8966.json` entry**, not by anything in the English —
find `VERS. 35.emdash;`, replace `VERS. 35.-- `, which corrects the markup and not one word of
Migne. **I have not written the patch**, because a patch requires re-chunking and confirming chunk
boundaries are unchanged, and that is the merge's business, not a translating stint's. It is the
cheapest open item in this range.

### 3b · Plate candidates — raised, never patched, and **NO MARKER FIRED ON ANY OF THEM**

Ship test B: an unread candidate is safe if and only if it fires no marker. **This range asserts
nothing about the plate.** Our archive.org copy of PL 113 (`patrologiaecurs04migngoog`) is known to
clip the left margin on some pages, and `data/volumes.json` lists a second witness for PL 113 —
Gallica `ark:/12148/bpt6k5505319w`, IIIF, one HTTP request per read, map **f = (column + 1) / 2**
(NOT the archive map). Every candidate below is one fetch away.

| col | reading | class | what I did |
|---|---|---|---|
| **1094A** | ***damuante** propria conscientia* | ⭐ **NON-WORD** — no Latin word; *damnante* is certain from the ablative absolute (*conscientia*) and from *damnabitur* three words earlier | The non-word class has been **ours 19 times out of 19** in this series. Rendered by its evident sense ("their own conscience condemning them") and **no `[sic:]`**, exactly as 8965 handled *for es* → "valiant men". This is the strongest plate candidate in my range. Gallica **f548** (cols 1093/1094). |
| **1100B** | *parva bona **eum** charitate facere* | Real word, **no grammatical slot** — *eum* is accusative and cannot govern the ablative *charitate*; *cum* is certain, and c/e is the commonest OCR confusion | Under Pattern 12's own test 1 this would take a marker. **It does not get one**, because my brief's rule is decisive for this series — a real word that reads oddly is Migne's until a plate says otherwise, refuted 5 of 5 — and because the fault shape (single letter, c→e) points at our scan. Rendered "with charity", crux, Gallica **f551**. |
| **1103C** | VERS. 9.-- ***Qui** potest dicere* | Real word; Prov. 20:9 has *Quis*, **and Migne's own next clause prints *quis*** (*Non dicit, quis habet*) | Rendered as printed ("*He that can say*"), `[var:]` **declined** — see §1b. Gallica **f552**. |
| **1097A** | *Destruet male vivendo, et aliquando aperte **regnando*** | Real, well-formed word that reads oddly of the foolish woman of Prov. 14:1 | Rendered as printed ("by reigning openly"). **No conjecture is offered**, because I have none I would stand behind, and naming a rival I cannot adjudicate is worse than naming none. Gallica **f549**. |
| **1103A** | *cupiditatis infimae **famae** sauciatur* | *fame* (ablative of *fames*, hunger) written *famae* — and hunger is exactly what the lemma promises (*anima dissoluta **esuriet***, and Migne's own *esuriens* two lines later) | An *-ae*/*-e* orthographic swap in the direction of hypercorrection: **Pattern 9, an attested medieval spelling, not a defect.** Rendered "by the hunger of lowest covetousness". No marker, no plate read needed. |
| **1093A** | *Stultus **ceditur** labiis* | *caeditur* written *ceditur* | Same class: *ae*→*e* is the corpus's ordinary orthography. Rendered "is beaten", which is *caedo*, because *cedo* ("yield") leaves the ablative *labiis* with nothing to do and the gloss is about a sentence of condemnation. Pattern 9, no marker. |
| **1097B** | *unde subditur: **Dominus** impiorum,* etc. | ⭐ Real word. Prov. 14:11 reads ***Domus** impiorum delebitur*, and *Domus impiorum* is precisely the verse Migne's *subditur* points to | This is Pattern 18's shape exactly — the printed word is real, and the faithful English ("*The Lord of the wicked*") says something the verse does not. **I declined the `[cj:]`.** The brief for this batch is explicit that a real, well-formed word is Migne's until a plate says otherwise and that no marker fires on a corpus argument however good; and 18a's census is closed. The conjecture is here, in the crux, where a reader who is asking the question will meet it. **⭐ If one plate read is bought for this range, buy this one** — Gallica **f549**, right column, band B. |

⭐ **And the negatives, recorded because a checked negative is worth having:** I looked for the
"suspiciously tidy" normalization class (brief §4 / addendum C) in every line I examined closely and
found **no candidate**. The passages here are rough in the ordinary way — ellipsis, anacoluthon,
abridgment tails — and nowhere does a form strike me as tidier than its neighbours.

### 3c · Migne's own irregularities, reproduced and not tidied

- **Citations whose numerals do not match the words they carry — THREE, all identified from the
  QUOTED TEXT and never from the numeral, all left exactly as printed.** They are the *index's*
  business (`data/citation-corrections.json`), not the text's, and I have not touched that file:
  - **1093A · `[n: (Isa. LXVI)]`** on *mors et vita in manibus linguae* — the words are **Prov.
    18:21**. ⚑ Not a random miss: Isa. 66:24 is the source of *ignis eorum non exstinguetur* five
    lines above, so the compositor's eye had Isaiah 66 on the page.
  - **1096B · `[n: (Psal. XXVI)]`** on *Sicut adipe* — the words are **Psal. 62:6** (*Sicut adipe et
    pinguedine repleatur anima mea*). Psalm 26 has no such words.
  - **1097B · `[n: (Psal. IX)]`** on *Initium sapientiae timor Domini* — the words are **Psal.
    110:10** (also Sir. 1:16). Psalm 9 has no such words.
- **Verse numbers that do not match the verse glossed — FOUR, reproduced as printed, never
  renumbered:** 1093B VERS. 18 over a lemma from 10:14 (§1a) · 1100C VERS. 13 over a gloss on 17:14
  (*Aquam dimittere*) · 1101B VERS. 1 over 18:3 · 1103B VERS. 2 over 20:1 (*Luxuriosa res*).
  ⚑ At 1100C the lemma is the bare stump *Qui.*, so the verse number and the gloss disagree about
  which verse it opens. **I expanded it from Migne's own next words** (*Aquam dimittere*), i.e. from
  Prov. 17:14, and not from the printed numeral — the expansion is licensed by his gloss, not by my
  guess. Both readings are on the page for a reader to check.
- **1098C · *Viduae Ecclesiae*** — the italic span takes in *Ecclesiae*, which is **not in Prov.
  15:25** (*firmos faciet terminos viduae*); Migne has drawn his own gloss word inside the lemma's
  italics. Reproduced with the italics where he set them: "*Of the widow the Church,*". **No
  `[var:]`**, because the lemma is not claiming to be the verse.
- **1098D · *Alia translatio: Videns bona oculus delectat corda bona*** — Migne says himself that
  this is another version. Pattern 14 is for scripture quoted as the Vulgate; a labelled alternate
  version is not a divergence, it is a second witness he names. No marker.
- **1105B · *quia opus sunt divinum*** — plural subject, singular predicate, of the rich man and the
  poor man together. Rendered as printed ("because they are a divine work"); English carries the
  disagreement visibly, so there is nothing to mark.
- **1105D–1106A · *praecipue Judaeo, qui … furebant*** — singular antecedent, plural verb. English
  has no exponent (Pattern 9); rendered "who raged", crux, no marker.
- **1095C · *et aliis, quae sequantur, demonstrant*** — **the sentence ends with no terminal stop.**
  Pattern 8: the English stops where he stops, with no full stop supplied. This is deliberate and is
  not a truncation of ours.
- **1106B · *ita haereticus, quae non intelligit in Scripturis, ut libet interpretatur?*** — a
  question mark closing what is plainly a statement. **Preserved** (Pattern 8; this is HIS oddity and
  recording it is the point). It is not the 8b indirect-question case: the English construction takes
  the mark without recasting.
- **1105A · *Christi servus non essem!*** — Migne's exclamation mark on Gal. 1:10. Preserved.
- All four question marks at **1107A** and the one inside the lemma at **1106A** (*Vidisti virum
  velocem in opere suo? coram.*) are Migne's and stand where he sets them, including **inside** the
  italic spans.

### 3d · Passages that will not construe cleanly, rendered as closely as the printed words allow

Named, because a blind reader will stop at each of them and needs to know they were read, not
skated over.

- **1092C, *Nil proderunt* gloss: *usque ad* quod pro vita sunt dati, conferunt.** The abridgment
  has taken the subject. Rendered "because they were given for life, they profit"; the subject
  supplied is the *thesauri* of the lemma. Both the *quod*-clause's force ("because"/"in that") and
  the bare *conferunt* are elliptical in the Latin and are elliptical in the English.
- **1096A, *Filius sapiens*: *ut hic … perveniat: ille, ne, cum arguitur, audiat.*** The second limb
  has no verb of its own; *ne … audiat* hangs on the *ut* of the first. Rendered "the other, that he
  may not hear when he is reproved," which keeps the ellipsis visible.
- **1104D, *Thesaurus desiderabilis*: *Reprobi non tantum virtutes non assequi, etc.*** An
  accusative-and-infinitive with its governing verb cut away by the abridgment. ⚑ **Two negatives,
  and both are carried on their own hosts**: rendered "The reprobate not only do not attain the
  virtues, etc." A finite verb is supplied where Latin has the infinitive, because English cannot
  carry a bare infinitive here; nothing else is added.
- **1106A, *Vidisti virum velocem*: *usque ad* quorum cavit errorem esse ponendum.** Rendered "he
  took heed that their error was to be set down." I can construe the words and I am not confident of
  the sense; the resumption tail is short and the antecedent of *quorum* is inside the elided matter.
- **1099C, *Pondus et statera*: *Lapides justi fortes*.** *justi* is a genitive singular or a
  nominative plural and both construe. Rendered "The stones of the just are strong"; the alternative
  ("Just stones are strong ones") is named here rather than chosen silently.
- **1094C, *Circulus aureus in naribus*: *Si suis naribus circulum auri fixeris*.** *suis* is either
  the reflexive possessive ("in his own nostrils") or the **genitive of *sus*, a swine**. ⭐ I chose
  the swine, and the reason is grammatical rather than traditional: the sentence's only person is the
  second-person *fixeris*, so a reflexive *suis* would have **no antecedent at all**, while Prov.
  11:22's *in naribus suis* is the swine's snout on every reading of the verse. Rendered "in a
  swine's nostrils"; the rival is here.

---

## §4 · SUPPLIED PRONOUNS AND SECOND PERSON

### 4a · Every "he/she/it/they" the Latin does not print, named, with what names it

The 11613 measurement makes this the dominant defect class. Where two readings both construe I say
so rather than choosing silently.

- **1092C, *Et ignoravit quod ibi*** → "**she** knew not". Prov. 9:18's subject is not expressed;
  **Migne's own next words name her** — *Nescit **mulier adultera***. Not my inference.
- **1092D, *Non affliget Dominus* tail** → "**he** turns it back by justly avenging". The Lord, from
  the lemma directly above.
- **1093B, *Quod timet impius*** → "**He** speaks of that wicked man"; **1093C, *Quasi tempestas***
  → "**He** speaks of the persecutors". The subject of *dicit* throughout Migne's Proverbs glosses is
  the writer of the proverb; the same unexpressed subject governs *subdit*, *subditur*, *adjungit*,
  *praemissum est* everywhere in this range, and is rendered "he" uniformly.
- **1093C, *Quasi tempestas*: *Sed illa … collocata*** → "**that house**". *illa* is feminine and the
  only feminine noun in the sentence is *domum fidei*.
- **1094D, *Qui stultus est*: *ille damnatur, iste accipit bravium*** → "the **former** … the
  **latter**". *ille* is the *impius* of the preceding clause (who is condemned), *iste* the *pius*
  (who receives the prize) — fixed by which of them the prize belongs to, not by the demonstratives
  alone.
- **1095D, *Cor insipientium provocat*** → "**they** take away that which they seemed to have". The
  plural of the lemma (*insipientium*), carried through *appetunt · habent · tenent · nequeunt*.
- **1096A, *Filius sapiens*: *hic … ille***→ "the **one** … the **other**", mapped in the printed
  order to *sapientem* and *stultum*. ⚠ Migne uses *hic* of the FIRST-named, which inverts the
  classical habit; **Prov. 13:1's own second half decides it** (*qui autem illusor est non audit cum
  arguitur* — the fool is the one who will not hear), and that is the limb *ille* carries.
- **1096D, *Sapiens,* etc. / *Destruet*** → "**She** shall destroy". Prov. 14:1's subject for
  *destruet* is the *insipiens* woman, against the *Sapiens mulier* of the first half — the lemma
  Migne prints.
- **1098D, *Videns bona oculus*** → "**it** beholds them … **it** is delighted". The eye of the
  lemma, which is the sentence's only available subject for *contemplatur* and *delectatur*.
- **1105C, *Dicet piger* tail: *aut, sicut alios justos, consumat tormentis*** → "or, as **it** did
  other just men, may consume him". The lion of Prov. 22:13 (*Leo est foris*), which is the verse the
  lemma opens.
- **1104C, *Sicut divisiones*** → "**he** inclines", "**he** bestows", "**he** renders" — the *Dominus*
  of the lemma and of *in manu Domini*.

### 4b · Pattern 17 — thou is the singular, you is the plural

Every archaic form in these five chunks answers a **grammatically singular** Latin address, and the
Latin that fixes the number is named:

- 1092A *Quasi interrogares* → "As though **thou** shouldst ask" (2 sg.).
- 1092B *Moneo **te*** … *quod tamen **tibi** prodest* … *Si enim sapiens **fueris*** → "I admonish
  **thee** … profits **thee** … if **thou** be wise".
- 1093B *si … **desideras*** · *conteges* · *proferas* · *tuum cor* · *os* → "if **thou** desirest …
  **thou** shalt neither cover … nor utter … **thy** heart … **thy** mouth".
- 1094A *Ne enim **putares*** → "lest **thou** shouldst think"; 1094C *si … **fixeris*** → "if
  **thou** shouldst fix".
- 1102D–1103A *conspicis · castiga · tuis verbis* → "if **thou** seest … chastise … **thy** words";
  1103A *labaris* → "if **thou** shouldst slip".
- 1106A *quo indutus **videbaris**?* → "wherewith **thou** didst seem to be clothed?"; *Non
  transgrediaris* → "Do not **thou** pass over".
- 1106B–1106C *sederis · desideres · loquaris · comedas · attingas · comederas · didiceras ·
  deseras · sustineas · perdas · putaveras · auscultares · ingeras* → all singular, all *thou*.
- ⭐ 1106C *neque **mittas** margaritas* → "neither cast **thou** pearls" — **and this is where the
  rule earns its keep**: Matthew's verb is the plural *mittatis*, Migne prints the singular, and the
  `[var:]` at that point and the *thou* in the text are saying the same thing from two directions.
  Migne's own *Nolite* four words earlier stays plural ("Give **ye** not"), so the shift is visible
  on the page exactly as he printed it.
- **No plural *vos* is rendered "thou" and no singular *tu* is rendered "you" anywhere in the range.**

---

## §5 · THE TESTS, RUN, AND WHAT THEY RETURNED

**Test 1 — a `[sic:]` must not swallow the word it marks.** ⭐ **Vacuously clean, and for the right
reason: this range fires ZERO `[sic:]`.** Nothing is quarantined, so nothing can be quarantined with
its verb, its negation or its object inside. I also ran the mechanical form — stripped every marker
from the English and read what was left — and found no stranded article, preposition or doubled
mark; every sentence reads aloud without its brackets. The `[var:]` markers are all **beside** a
complete rendering, never in place of one.

**Test 2 and 2a — name the single Latin word each printed negative attaches to.** Proverbs is
aphorism, so this was run on every proverb, not on every paragraph. **The `non solum` / `non tantum`
/ `nisi` / correlative population — 2a's own trigger condition — is nine sites, and each was proved
from the sentence's structure and not from what reads well:**

| col | Latin | host | English |
|---|---|---|---|
| 1092C | *ut **non**, sicut prius, de singulis … **disputet**; sed … describat* | *disputet* | "that he should **not** … dispute … but should describe" |
| 1095D | *Perfecti **non solum** vitiorum bella superant, **sed et** … principantur* | *vitiorum bella superant* | "**not only** overcome the wars of the vices, **but** rule also" |
| 1096C | *Qui stultos, **non quia** homines sunt, **sed** propter stultitiam … **non ut** instruendo **corrigat**, amat, **sed ut** favendo, deteriores efficiat* | *quia homines sunt*; then *ut instruendo corrigat* | "**not because** they are men, **but** for their folly's sake … **not that** he may correct them by instructing, **but that** by favouring them he may make them worse" |
| 1098C | *vere sapiens **non solum** quod **loquitur**, **sed etiam** opportunitatem* | *quod loquitur* | "**not only** what he speaks, **but also** the fitness" |
| 1098C | *quando **non solum** factis, **sed et** verbis omnibus digna praemia reddet* | *factis* | "**not only** to deeds, **but also** to all words" — ⚠ on the DATIVE, not on *reddet*; putting it on the verb would have God rendering no rewards |
| 1099A | *tunc **non solum** opera, **sed** cogitationes dirigit* | *opera* | "he directs **not only** our works, **but** our thoughts" |
| 1099A | *Nulla fuit Domino causa operandi, **nisi sola voluntas*** | *causa*, resolved by *nisi* | "There was **no** cause … **save** his will alone" |
| 1103C | *quibus **non praesens, sed futura** beatitudo promittitur* | *praesens* (an adjective) | "**not** the present **but** the future blessedness" |
| 1104C | *Omnium hominum, **non solum** regis cor, in manu Domini* | ⭐ *regis* | "The heart of all men, **not only** of the king, is in the hand of the Lord" — **the sharpest 2a site in the range.** The negative sits beside a genitive and next to a verbless predicate; attached to the copula it would deny that the king's heart is in God's hand, which is the exact opposite of the proverb the whole gloss is expounding. The `Omnium hominum` fronting is what proves the host. |
| 1105A | *Quod fidelium testimonio laudatur, **non** vulgi imperiti* | *vulgi imperiti* | "praised by the testimony of the faithful, **not** of the unskilled crowd" |
| 1107A | ***Non** vetat bibere vinum ad necessitatem, **sed** morari …* | *bibere vinum ad necessitatem* | "He does **not** forbid the drinking of wine for necessity, **but** the tarrying" |

Every other printed negative — the *non · nec · neque · ne · nisi · nunquam · nullus · nemo · nihil ·
nolite · noli* population, ~90 tokens across the five chunks — was checked the same way, one host at
a time. **No negative was relocated, none was dropped, and none was invented.** Two are worth naming
because they read as contradictions and were carried anyway: **1093A** *et ignis eorum **non**
exstinguetur* inside a gloss on the memory of the just, and **1094D** *etsi enim impii **non** sumus,
certe si peccatores nos esse negamus…*, where three negations stack in one sentence and all three
stand.

**Test 2b — each anchor against the WORD it stands beside.** All 62 were checked at the site, not for
presence. Migne's band breaks fall mid-construction constantly in this book and the English follows
them there: *Denique [1093A] os* → "In fine, [1093A] the *mouth*" · *Stultus [1093C] est igitur* → "A
fool [1093C] therefore is he" · *Hoc Origenes [1094A] nescivit* → "This Origen [1094A] knew not" ·
*Prudens autem [1094B] publice tacet* → "But the prudent man [1094B] keeps silence in public" ·
*glorificatur [1105B] Pater* → "is glorified [1105B] the Father", where the English keeps Migne's
order rather than the natural English one **precisely so that the anchor lands where he puts it**.
⚠ One anchor is approximate and is declared: **1103A**, where Migne breaks inside the noun phrase
*cupiditatis infimae famae | sauciatur*; my English breaks inside the same noun phrase ("the hunger
of lowest [1103A] covetousness") but two words earlier than the Latin, because English word order
puts *sauciatur* at the head of the clause. It is inside the same clause and the same phrase.

**Test 3 — punctuation compared BY COLUMN BAND, never by total.** This is where the repairs came
from, and the peers' warning was exactly right. **First pass: four mismatched bands, and all four
were marks I had supplied, three of them semicolons:**

| band | what I had | what Migne prints | fixed to |
|---|---|---|---|
| 1092B | "by the divinity and the humanity**;** now by the contrary" | comma | comma |
| 1094C | "*But the just as,* etc. As it were**:** they who" | comma (*Quasi, qui spe*) | comma |
| 1097C | "By the flesh, weak things**;** by the bones, firm things" | comma | comma |
| 1102B | "who followed after words only**;** now he refutes" | comma | comma |

**Every one is the documented shape**: an aphorism in two halves invites a semicolon, and the
translator supplies one without noticing. A fifth, in 0008, was a different error the same pass
caught — an `[n: none]` I had typed into a paragraph that carries no note at all, which broke note
parity and would have shipped an empty marker.

**After the repairs: 61 of 62 bands match exactly** — colons, semicolons, question marks and
exclamation marks. **The one that does not is band 1107B and it is `emdash;` and nothing else**
(§3a). Totals were never used; had they been, 1092B's supplied semicolon and 1094C's supplied colon
would have hidden inside a chunk total that happened to come out right.

**The fourth test — does the paragraph ASSERT what he asserts?** Run last, with the counts already
clean, reading each finished paragraph against its Latin and asking that one question. Three
paragraphs were rewritten by it, and none of them was missing anything:

1. **1103D, *Malum est*** — *Qui aeterna praemia … desiderat, **malum est**, quod in praesenti debet
   sustinere*. My first English quietly repaired the anacoluthon into a well-formed sentence. Migne's
   sentence is not well-formed: he begins with a nominative *Qui* and finishes with an impersonal
   *malum est*, **because he is playing on the buyer's cry of Prov. 20:14** (*Malum est, malum est,
   dicit omnis emptor; et cum recesserit, tunc gloriabitur*) — the *recesserit* and the *glorietur*
   are both in his sentence. Restored to the printed shape.
2. **1094D, *Qui stultus est*** — *Impius vivit pio*. First rendered as though the wicked man merely
   lives alongside the godly. The dative is a dative of service and the verse is *qui stultus est
   serviet sapienti*: "The wicked man lives **for** the godly."
3. **1099A, *Omnes viae*** — my first version put "he discerns" at the head of the sentence, which
   read better and moved the anchor. Migne's *discernit* is at the end and the anchor falls after
   *bonorum*; the English now follows him.

⚑ Two habits, applied: a sentence that reads smoothly where the Latin is rough was treated as a
suspect (that is what caught 1 and 3), and the abridgment resumption tails were parsed as strictly as
ordinary prose rather than excused as "abridged" — which is what produced §3d's list instead of a
silent smoothing of five awkward tails.

---

## §6 · WHAT I DECLINED, AND WHAT THE MERGE SHOULD KNOW

- **Four markers that a strict reading of the patterns would allow, all declined**, each named above
  with its reason: the `[cj:]` at 1097B (*Dominus impiorum*), the `[sic:]` at 1094A (*damuante*), the
  `[sic:]` at 1100B (*eum charitate*), and the `[var:]` at 1103C (*Qui potest dicere*). ⚑ The common
  reason is not timidity: in three of the four the evidence points at **our** file rather than at
  Migne's plate, and a marker would publicly blame him for a fault that is probably ours — which is
  precisely why seven false `[sic:]` were withdrawn from an earlier batch. The fourth (1097B) is a
  real-word case the brief rules is Migne's until a plate says otherwise.
- **No tei-patch written**, though §3a argues for one and states the exact find/replace. Patching
  requires re-chunking and a boundary check, which belongs to the merge.
- **No `data/citation-corrections.json` entries written** for the three misprinted citations of §3c,
  for the same reason: the printed forms stand verbatim in the text and the *index* is where they are
  resolved. All three are identified from the quoted text and never from the numeral.
- **`[cn:]`: a checked zero for this range**, consistent with the work's own spot check.
- **For the merge, the two things most likely to need reconciling with the peers' halves:** (1) the
  ***fatuus*/*stultus* collision** — both are "fool" here and 1097B prints them together, so if a
  peer has held them apart with two English words, mine is the half that should move; and (2) the
  **clipped-lemma expansion split** in §1d, which lists **both** classes on purpose, so that a later
  reader does not mistake the deliberate split for drift. Nothing in the peers' chunks was read or
  altered; I read `cruces-0000.md` only, and only for its vocabulary table.

---

# PART III — chunks 0010–0013, cols 1107C–1116D (Prov. XXIV–XXXI)

# PART III — chunks 0010–0013, cols 1107C–1116D

*Glossa ordinaria*, **Liber Proverbiorum** (PL 113), CAPUT XXIV–XXXI — the tail of the book.
Translated 2026-08-25, one translator, **4 chunks, 3,491 Latin words** (frontmatter counts
1,068 + 807 + 757 + 859; body counts 1,074 + 811 + 764 + 869). With these four the work is
complete: `verify-english.mjs 8966` now reports **`verify OK: 14 chunks, columns/notes/sections
aligned, no duplicate paragraphs`** for the whole work, where before it reported the missing tail.
EN/LA ratio **1.54** with `[var:]` content stripped (peers: 1.56 in Part II).

**Apparatus fired: 10 `[var:]` · 0 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` ·
0 `[cn:]` · 15 `[n:]`** (8 + 1 + 3 + 3, exact parity with the Latin twins, contents verbatim and
untranslated). Zero guillemets in either language. **The plate spot check for this work is a checked
zero** — Migne prints no numbered *Forte* apparatus here, there is no `[cn:]` in the Latin and none
in the English.

**Parity, measured and not assumed:** column anchors 11 + 9 + 8 + 10 = **38, verbatim and in order**,
each checked against the WORD it stands beside in the Latin (test 2b, §5). Italic spans: asterisk
counts 170 / 110 / 106 / 160, **identical in both twins** once `[var:]` contents are stripped.
Paragraph structure 1:1 (50 / 35 / 34 / 38 non-blank lines each side). `VERS. n.--` addresses pass
through verbatim, untranslated. Punctuation compared **band by band** across all **42 bands** —
see §5, which is where this stint's one repair came from.

---

## §V · VOCABULARY — INHERITED FROM `cruces-0000.md` AND `cruces-0005.md`, NOT RE-DERIVED

Both earlier stints were on disk before I wrote a word and I read them first. **Where they decided a
word, I used their word**, including the three renderings that Part II deferred to Part I:

| Latin | English | how this stint used it |
|---|---|---|
| *doctrina* | **doctrine**, never "learning" or "teaching" | 1107D *doctrinam sapientiae* → "the doctrine of wisdom"; 1111B *per doctrinam haereticam* → "by heretical doctrine". ⭐ **My first draft of 1107D read "the teaching of wisdom" and was changed to obey the table**, exactly as Part II changed *Doctrina viri*. |
| *disciplina* | **discipline** | 1111D *disciplina divinae legis* → "the discipline of the divine law" (drafted "the ordinance of", changed). |
| *doctores* | **teachers**, never "doctors" | 1111C *Doctor fidelis et sapiens* → "A faithful and wise teacher" |
| *praedicatores* · *praedicare* | preachers · to preach | 1114D, 1116A, 1114A (*Gallus, scilicet praedicatores* → "namely the preachers"), held apart from *doctores* |
| *sapientia* / *scientia* / *prudentia* | wisdom / **knowledge** / prudence | never interchanged. 1108C *scientia apostolorum* → "the knowledge of the apostles"; 1112D *saecularis scientia* → "secular knowledge"; 1112C *prudentiores* → "**more prudent**", not "wiser", because *sapientiores* at 1113D is what "wiser" renders |
| *charitas* / *dilectio* / *amor* | **charity** / **love** / love | *charitas* 1109A ×2, 1115C; *dilectio* 1110D; *amor* 1108A, 1110B, 1110C, 1113A |
| *stultus* / *insipiens* / *fatuus* | **fool** / **unwise** / fool | held to Part II's split. ⭐ 1109C renders 2 Cor. 12:11 *Factus sum insipiens* as "**I am become unwise**", not the familiar "foolish", because *stultus* is "fool" four words away in the same paragraph. The convention costs a familiar cadence here and that is the point. |
| *derisor* / *illusor* | scorner / mocker | **neither occurs in this range** — recorded so the merge knows it was looked for |
| *meretrix* | **harlot** | 1113B |
| *Ecclesia* / *ecclesia* | **Church** / church — mirrors the plate word for word | **every occurrence in my range is capitalized in Migne** (1110D, 1112B *Ecclesia enim convocatio*, 1113D, 1114D, 1115A, 1116D *Ecclesiae haereticorum*) and every one is "Church"/"Churches". There is **no lower-case *ecclesia*** in these four chunks. ⚠ 1116D is capitalized **of the heretics' churches** and is mirrored as "the Churches of the heretics" rather than quietly lowercased. |
| *usque ad* as the abridgment formula | ***as far as***, inside its own italic span | censused per occurrence, never by rule — §2 |
| `VERS. n.--` | verbatim, untranslated | Ruth §1.1 |
| *interpretatur* | "is interpreted" | ⚠ the name-etymology formula **does not occur**. The one occurrence of the verb (1113C, *quod murem et choerogyllum … interpretantur*) is the ordinary transitive plural, "which they interpret to be". Recorded so the merge knows it was looked for. |
| second person | **thou = singular, you = plural** | §4b |

**Extensions this stint had to make, declared rather than smuggled:**

- ***fortis* → strong, everywhere, including *mulier fortis*.** The `[1114D]` lemma is rendered
  ***A strong woman***, not the Douay's "a valiant woman", and *Fortitudo* (1116B) → "Strength",
  *fortia* (1115C) → "strong things", *fortissimum* (1114A) → "most strong", *fortis* of the wise man
  (1107C) → "strong". ⚑ **This is a deliberate refusal of the most familiar English phrase in the
  book.** One Latin word, one English word, and the chapter's own argument — that the same
  *fortitudo* belongs to the Church, to the soul, and to the man of Prov. 24:5 — survives only if the
  word does not change costume.
- ***correptio* → rebuke · *correctio* → correction**, held apart, which is what makes the
  divergence at 1110B visible at all (§1a). This inherits chunk 0000's ruling at 1082A on the same
  pair.
- ***detractor* / *detrahere* → backbiter / to backbite** (1108A, 1109A ×3, 1116B).
- ***sacrum eloquium* / *sacra eloquia* → the sacred word / the sacred words** (1108C, 1116C).
- **Proper names and technical words, form for form as Migne prints them:** *Lamuel* → Lamuel ·
  *Ezechiae regis Juda* → "Ezechias king of Juda" · *Simon Barjona* → Simon Barjona (his spacing) ·
  *Jeremias* → Jeremias · *Moyses* → Moses · *Nitria* → Nitria · *Antichristus* → Antichrist ·
  *doma*, *institor*, *saphan*, *choerogryllus*/*choerogyllum*, *philargyria*, ἐκκλησιαστής,
  *Ecclesia* (in the etymology at 1112B) **left in the Latin/Greek as printed**, because in every one
  of those places the gloss IS the word-study. None normalized toward a familiar English Bible form.

**Head forms:** `CAPUT XXIV.` → **CHAPTER XXIV.**, and so through XXV, XXVI, XXVII, XXVIII, XXIX,
XXX, XXXI — Roman numeral kept, per Ruth, 8954, and both earlier stints of this book. (8965 spells
its numerals out and therefore diverges from the pilot; chunk 0000 flagged that and did not follow
it, chunk 0005 did not follow it, and neither did I.)

---

## §1 · THE LEMMA COLLATION — every italic span in cols 1107C–1116D, walked

All the italic spans of my four chunks were walked, in order, against
`sources/vulgate/clementine-flat.txt`, cited **book, chapter and verse explicitly** (the house form
ruled in 8964 §M). **The agreements are listed as well as the divergences** (§1c), because a list of
findings alone cannot be told apart from a report by a reader who never looked. Of the spans, **93
are the *usque ad* abridgment formula** (§2), which is not a scripture lemma at all.

### 1a · The ten divergences that fired a `[var:]`

| chunk · col | Migne prints | Clementine | why it fired |
|---|---|---|---|
| 0010 · 1108C | VERS. 12.-- *Inauris aurea **margaritarum** fulgens.* | **Prov. 25:12** *Inauris aurea, **et margaritum** fulgens* | Migne's genitive plural makes **one** ornament of the Vulgate's **two** — an earring shining with pearls, not "an earring, and a shining pearl". ⭐ His own gloss goes with what he prints: it closes *gratioremque fulgorem **gemmae ardentis annectit*** — it *annexes* the gem's brightness to the earring, which is only a movement if the two are one object. |
| 0010 · 1108D | *Habentes speciem pietatis, **veritatem** autem ejus abnegantes* `[n: (II Tim. III)]` | **2 Tim. 3:5** *habentes speciem **quidem** pietatis, **virtutem** autem ejus abnegantes* | *veritatem* for *virtutem*: "denying the **truth** thereof" for "denying the **power** thereof". Material, and the note's book and chapter are right, so the divergence is in the words alone. |
| 0010 · 1108D | VERS. 19.-- ***Deus** putridus et pes.* | **Prov. 25:19** ***Dens** putridus, et pes **lassus*** | ⭐⭐ **The sharpest divergence in the range, and the most uncomfortable.** Migne's lemma reads *a rotten **God*** where the verse has *a rotten **tooth***, and the English says so. Rendered exactly as printed. ⚠ *Deus* is a real, well-formed word, so the addendum's rule governs — it is his until a plate says otherwise — and the marker asserts only what the Clementine reads, never that his type is broken. **This is the one line in my range I would spend a plate read on**: Gallica **f555**. See §3a. |
| 0011 · 1110B | VERS. 5.-- *Melior est manifesta **correctio**.* | **Prov. 27:5** *Melior est manifesta **correptio** quam amor absconditus* | *correctio* (setting right) for *correptio* (rebuke). ⭐ **The second occurrence of this exact drift in this book** — chunk 0000 fired a `[var:]` on *Ad correctionem* for *ad correptionem* at 1082A, where the gloss's own *corripit* preserved the Clementine's word. Two sites, one direction, and the pair is worth the merge's attention. |
| 0011 · 1111B | VERS. 10.-- *Qui decipit justos in via **mea**,* etc. | **Prov. 28:10** *Qui decipit justos in via **mala*** | "In **my** way" for "in an **evil** way" — the way is God's in Migne's lemma and the deceiver's in the Vulgate's. Material, and the gloss reads it of the heretic who deceives *amatores justitiae*. |
| 0011 · 1112A | VERS. 21.-- *Qui delicate a pueritia **sua**.* | **Prov. 29:21** *Qui delicate a pueritia **nutrit servum suum*** | ⭐ The Vulgate's proverb is about a man who **pampers his slave**; Migne's lemma is about a man who is **pampered himself**. And the gloss goes with Migne, not with the Vulgate: *Sero enim malorum poenitet, qui in tenera aetate noluit* — "he repents late who would not in tender age", which is the pampered man, not the master. ⚑ Migne's own *Alia translatio* printed beside it (*Qui deliciatur a pueritia sua, servus erit*) is announced by him as another version and therefore takes **no** marker of its own: it is not a Vulgate citation. |
| 0011 · 1112B | *Qui timet **Dominum**,* etc. | **Prov. 29:25** *Qui timet **hominem** cito corruet* | The gloss's own sentence proves what the citation is for: *Et **ne metu personae potentioris se excuset**, addit* — "and lest he excuse himself **by the fear of a more powerful person**, he adds". The verse adduced against the fear of man reads, as Migne prints it, "he that feareth **the Lord**". |
| 0012 · 1112C | *Sapientiam vero non **hominum**,* | **1 Cor. 2:6** *sapientiam vero non **hujus saeculi**, neque principum hujus saeculi* | "Not the wisdom **of men**" for "not the wisdom **of this world**". ⚑ Note that Migne's own continuation keeps *hujus saeculi* in the next clause (*neque principum hujus saeculi*), so the two phrases stand three words apart on his page and only the first has moved. |
| 0012 · 1114A | *Esto mihi in **lapidem fortissimum, in domum munitam, ut salves me, quia petra mea et munitio mea es tu**.* | **Ps. 30:3–4** *Esto mihi in **Deum protectorem**, et in **domum refugii**, ut **salvum me facias** … quoniam **fortitudo mea et refugium meum** es tu* | Every clause differs, and Migne attributes it *cum Psalmista*. ⚑ **The wording is Jerome's Psalter *iuxta Hebraeos*, not a corruption** — but Pattern 14 names the received reading and does not speculate about why it differs, so the marker gives the Clementine and the crux says this much and no more. |
| 0013 · 1114D | *et arguet **inaequitate** pro mansuetis terrae* | **Isa. 11:4** *et arguet **in aequitate** pro mansuetis terrae* | ⭐⭐ **A word-fusion, and it inverts the sentence**: *in aequitate* ("in equity") set as one word *inaequitate* makes the Prophet's Lord reprove **with inequity** on behalf of the meek. Rendered literally, and the marker carries the Vulgate's two words. **No `[sic:]`** — see §3a, where the fusion is raised as a plate candidate and the reason for declining the marker is given. |

### 1b · Divergences found, LOGGED, and declined a marker — each with its reason

**None of these fires a `[var:]`**, because Pattern 14's bar is a divergence that CHANGES THE SENSE
and because a `[var:]` is a public claim. They are listed because a blind reader will find them.

| col | Migne | Clementine | why declined |
|---|---|---|---|
| 1108A | *Qui **enim** non honorificat Filium…* | Jo. 5:23 (no *enim*) | A connective Migne's own sentence needs. ⚠ But the **citation** is wrong — §3b. |
| 1108B | *Beatus es Simon **Barjona**, quia caro,* etc. | Mt. 16:17 *Simon **Bar Jona*** | Word division inside a proper name; the corpus's ordinary practice. Rendered "Simon Barjona". |
| 1108C | VERS. 3.-- ***Coelum** sursum et terra deorsum.* | Prov. 25:3 ***Caelum*** | *oe*/*ae*, corpus-wide. Pattern 9. |
| 1108C | *Humiliamini sub potenti manu Dei, ut **exaltet vos**…* | 1 Pt. 5:6 *Humiliamini **igitur**… ut **vos exaltet*** | A dropped connective and word order. ⚠ Citation wrong — §3b. |
| 1109A | VERS. 2.-- ***Nam** sicut avis.* | Prov. 26:2 *Sicut avis* | A connective fronted into Migne's own sentence. |
| 1109A | VERS. 4.-- ***Non** respondeas . . .* | Prov. 26:4 ***Ne** respondeas* | *Non* for *Ne* in a prohibition, **which English cannot distinguish** — chunk 0000 ruled exactly this at 1085D and I follow it. ⚑ The spaced ellipsis ` . . . ` is Migne's own and is reproduced with his spacing; the address gathers **two** verses (26:4 and 26:5) under one `VERS. 4.--`, which is the point of the gloss (*Non sunt contraria*). |
| 1109C | *In judicium **ergo** in hunc mundum veni* `[n: (Joan. IX)]` | Jo. 9:39 *In judicium **ego** in hunc mundum veni* | One letter, and *veni* is still first person singular, so nothing is asserted that Jo. 9:39 does not assert; *ergo* is the connective Migne's sentence wants. Below the bar. |
| 1110C | *Melior est vicinus.* | Prov. 27:10 (the verse's own tail) | ✓ agrees; listed because the lemma is cut from the middle of a long verse. |
| 1110D | VERS. 26.-- *Agni **sunt** ad vestimentum.* | Prov. 27:26 *Agni ad vestimentum **tuum*** | A supplied copula and a dropped possessive; the assertion is identical. Same class as chunk 0000's Jac. 3:15 decline. |
| 1111A | VERS. 5.-- *Qui autem **requirunt**.* | Prov. 28:5 *qui autem **inquirunt** Dominum* | Simple verb for compound of the same root, same sense. |
| 1111D | inside a resumption tail: *qui fodit foveam **proximo suo**, incidet in eam* | Prov. 26:27 *Qui fodit foveam incidet in eam* (no *proximo suo*) | Two words added inside an abridgment tail, unitalicized and uncited — this is Migne's prose, not a quotation offered as one. |
| 1112A | *Noli **verbis contendere**, ad **nihilum** utile est* | 2 Tim. 2:14 *Noli **contendere verbis**: ad **nihil** enim utile est* | ⭐ Woven into the gloss **without italics and without a note** — Migne is not quoting, he is speaking with Paul's words. `[var:]` is reserved for scripture quoted AS scripture (Pattern 14 / L3's boundary). |
| 1112C | *Filii hujus saeculi prudentiores **sunt** filiis lucis in generatione sua* | Lc. 16:8 *…in generatione sua **sunt*** | Word order only. |
| 1112C | *Si quis videtur esse sapiens in hoc saeculo* | 1 Cor. 3:18 *si quis videtur **inter vos** sapiens **esse*** | A dropped *inter vos* and word order. ⚑ **The English drops "among you" too** — restoring it would be the conformation 7a″ exists to forbid. |
| 1112B | *Verba **congregantis*** | Prov. 30:1 *Verba **Congregantis**, filii Vomentis* | Case only — and here the case is doing work: Migne lower-cases the word **because his gloss treats it as a common noun** (*latine congregans; Ecclesia enim convocatio*), where the Clementine reads it as a name. Mirrored, and rendered "the gatherer". |
| 1113A | *Tria sunt **mihi difficilia**.* | Prov. 30:18 *Tria sunt **difficilia mihi*** | Word order only. |
| 1113B | *Os vulvae, et terra quae non satiatur aqua,* | Prov. 30:16 ***Infernus, et** os vulvae…* | The lemma is cut at the front; *Infernus* is what the paragraph above has just glossed. Nothing is altered. |
| 1114A | VERS. 29.-- *Tria sunt quae gradiuntur.* | Prov. 30:29 *Tria sunt quae **bene** gradiuntur* | A dropped adverb in a lemma already cut before its *et quartum* clause. Nothing in the gloss turns on *bene*. |
| 1116B | *Vade et amplius noli peccare.* | Jo. 8:11 *vade, et **jam** amplius noli peccare* | One dropped particle. |
| 1116D | VERS. 29.-- *Multae filiae congregaverunt divitias**:** tu supergressa es universas.* | Prov. 31:29 *…divitias **;** tu supergressa…* | Punctuation only, and Migne's mark rides as printed under Pattern 8. |
| 1114D | *Mulierem fortem quis inveniet**.*** | Prov. 31:10 *Mulierem fortem quis inveniet **?*** | ⭐ Same class and worth naming: **Migne closes with a period where the Clementine asks a question.** Pattern 8 is unconditional — the mark he prints is the mark we print — so the English ends "*Who shall find a strong woman.*" and **no `?` is supplied**. My four chunks contain **zero** question marks in either language, and that is a measured parity, not an oversight. |

### 1c · Checked and found to AGREE with the Clementine EXACTLY

Listed verse by verse. Fragments count as agreeing when every word Migne prints is the verse's own
word in the verse's own order.

- **Prov. XXIV** (1107C–1108B): 24:1 *Ne aemuleris* · 24:3 *Sapientia aedificabitur domus* ·
  24:5 *Vir sapiens* · 24:7 *Excelsa stulto* · 24:8 *Qui cogitat* · 24:10 *Si desperaveris* ·
  24:11 *Erue eos* · 24:13 *Comede, fili mi* · 24:15 *Ne insidieris* · 24:16 *Septies enim cadet* ·
  24:17 *Cum ceciderit inimicus tuus* · 24:21 *Time Dominum, fili mi* and *Cum detractoribus* ·
  24:23 *Haec quoque sapientibus* · 24:26 *Labia deosculabitur* · 24:27 *Praepara* ·
  24:28 *Nec lactes quemquam labiis tuis* (quoted at 1108D, verbatim) · 24:30 *Per agrum hominis
  pigri transivi*.
- **Prov. XXV** (1108B–1109A): 25:1 *Hae quoque parabolae* · 25:2 *Gloria Dei* and *Investigare* ·
  25:5 *Aufer impietatem* · 25:6 *Ne gloriosus appareas* · 25:11 *Mala aurea* · 25:13 *Sicut frigus* ·
  25:14 *Vir gloriosus* · 25:16 *Mel invenisti, comede quod sufficit tibi* · 25:20 *Acetum in nitro
  qui cantat* · 25:22 *Prunas enim congregabis* · 25:23 *Ventus aquilo* · 25:24 *Melius est sedere in
  angulo domatis, quam* · 25:25 *Aqua frigida* · 25:26 *Fons turbatus* · 25:27 *Sicut qui mel* ·
  25:28 *Sicut urbs patens*.
- **Prov. XXVI** (1109A–1110A): 26:1 *Quomodo nix in aestate* · 26:5 *Responde stulto juxta
  stultitiam* · 26:6 *Claudus pedibus* and *Et iniquitatem bibens* · 26:9 *Quomodo si spina
  nascatur* · 26:11 *Sicut canis* · 26:12 *Vidisti hominem* · 26:13 *Dicit piger* · 26:16
  *Sapientior* · 26:17 *Sicut qui apprehendit*.
- **Prov. XXVII** (1110A–1111A): 27:1 *Ne glorieris* · 27:3 *Grave est saxum* and *Ira stulti utroque
  gravior* · 27:7 *Anima saturata calcabit favum* · 27:8 *Sicut avis transmigrans* ·
  27:14 *Qui benedicit proximo* · 27:17 *Ferrum ferro* · 27:20 *Infernus* · 27:23 *Diligenter* ·
  27:25 *Aperta sunt prata* · 27:27 *Sufficiat tibi lac caprarum* · and **28:14** *Beatus homo qui
  semper est pavidus*, quoted whole inside the VERS. 1 gloss at 1110B.
- **Prov. XXVIII–XXIX** (1111A–1112B): 28:1 *Fugit impius* and *Justus autem quasi leo* ·
  28:12 *In exsultatione* · 28:14 *Beatus homo* · 28:22 *Vir qui festinat ditari* · 28:28 *Cum
  surrexerint impii* · 29:5 *Homo qui blandis* · 29:6 *Peccantem virum* · 29:9 *Vir sapiens* ·
  29:11 *Totum spiritum suum* · 29:13 *Pauper et creditor obviaverunt* · 29:18 *Cum prophetia* ·
  29:20 *Vidisti hominem* · 29:22 *Vir iracundus* · 29:24 *Qui cum fure participat, odit animam
  suam*.
- **Prov. XXX** (1112B–1114B): 30:1 *Visio quam* · 30:2 *Stultissimus* and *stultissimus sum
  virorum* and *Non didici* · 30:4 *Quis ascendit in coelum*, *Quis continuit*, *Quis suscitavit
  omnes*, *Quod nomen est ejus, et quod nomen filii ejus*, *Si nosti* · 30:5 *Omnis sermo* and
  *Clypeus est* · 30:7 *Duo rogavi te* · 30:11 *Generatio quae patri* · 30:14 *Generatio quae pro
  dentibus gladios habet* · 30:15 *Sanguisugae duae sunt filiae*, *Duae filiae*, *Tria sunt
  insaturabilia* · 30:17 *Oculum qui subsannat* and *Filii aquilae* · 30:20 *Talis est et via
  mulieris adulterae* · 30:24 *Quatuor* · 30:25 *Formicae populus infirmus* · 30:26 *Lepusculus*
  (×2) · 30:27 *Regem locusta* · 30:28 *Stellio manibus* · 30:31 *Gallus* and *Et aries* ·
  30:33 *Qui autem* and *Et qui provocat iras, producit*.
- ⭐ **Prov. XXXI — the *mulier fortis* acrostic, and EVERY LEMMA AGREES.** 31:1 *Verba Lamuelis* ·
  31:3 *Et divitias tuas* · 31:4 *Noli regibus* · 31:6 *Date siceram moerentibus* · 31:8 *Aperi os* ·
  31:9 *Aperi os tuum, decerne* · 31:10 *Mulierem fortem* and *Mulierem fortem quis inveniet* ·
  31:11 *Confidit in ea cor viri* and *Et spoliis non indigebit* · 31:12 *Reddet ei bonum et non
  malum* · 31:13 *Quaesivit* · 31:14 *Facta est quasi navis institoris de longe* · 31:15 *De nocte*,
  *Surrexit*, *Deditque praedam domesticis suis* · 31:16 *Consideravit* and *De fructu manuum
  suarum* · 31:17 *Accinxit* · 31:18 *Gustavit et vidit quia bona est* · 31:19 *Manum suam misit*,
  *Et digiti ejus*, *apprehenderunt fusum* · 31:20 *Manum suam aperuit inopi, et palmas suas* ·
  31:21 *Non timebit* and *Omnes enim domestici ejus vestiti sunt duplicibus* · 31:22 *Stragulatam
  vestem* · 31:23 *Nobilis in portis vir* · 31:24 *Sindonem fecit et vendidit* · 31:25 *Fortitudo* ·
  31:26 *Os suum* and *Lex clementiae* · 31:27 *Consideravit* and *Panem otiosa non comedit* ·
  31:28 *Surrexerunt filii ejus* · 31:29 *Multae filiae congregaverunt divitias: tu supergressa es
  universas* · 31:30 *Fallax gratia et vana est pulchritudo* · 31:31 *Date ei de fructu manuum
  suarum* and *Date ei de fructu*.
  ⚑ **This is the checked negative that matters most in my range.** The brief warned that CAPUT XXXI
  is where familiarity would conform a lemma, and the answer is that **Migne's own text needed no
  conforming**: the only two departures in the whole chapter are a period for a question mark
  (31:10) and a colon for a semicolon (31:29), both punctuation, both carried as printed. The
  divergences in this stint are all in chapters XXV–XXX, not in the one I was told to fear.
- **Non-Proverbs quotations checked and agreeing:** Jo. 5:23 *Qui non honorificat Filium, non
  honorificat Patrem, qui misit illum* (1108A) · Mt. 16:17 *Beatus es Simon Bar Jona, quia caro*
  (1108B) · Mt. 16:19 *Quodcunque ligaveris super terram erit ligatum et in coelis* (1109C) ·
  2 Cor. 12:11 *Factus sum insipiens, vos me coegistis* (1109C) · Jo. 9:39 *ut qui non vident
  videant, et qui vident caeci fiant* (1109D) · Job 33:27 *Respiciet homines, et dicet, Peccavi*
  (1111C) · Jo. 15:5 *sine me nihil potestis facere* (1111C) · Ps. 49:18 *Si videbas furem, currebas
  cum eo* (1112B) · 1 Cor. 4:10 *Nos stulti propter Christum* (1112C) · 1 Cor. 2:6 *Sapientiam autem
  loquimur inter perfectos* (1112C) · Mt. 6:2 *Amen dico vobis, receperunt mercedem suam* (1115A) ·
  Mt. 11:12 *Regnum coelorum vim patitur, et violenti rapiunt illud* (1115C) · Mt. 16:18 *portae
  inferi non praevalebunt adversus eam* (1116A) · Isa. 11:4 *sed judicabit in justitia pauperes*
  (1114D, the first half; the second half is §1a's fusion).

### 1d · Clipped lemmata — BOTH classes listed, so the split is not misread later as drift

The 2026-08-19 addendum's rule: a **fragment** whose governed word is missing is rendered as the
phrase it stands for; a **complete** one-word or one-phrase lemma has nothing elided and stands as it
is. Both classes occur here and the split is deliberate.

**Expanded, because the governed word is missing and English will not carry the stump:**
*Ne aemuleris* → "Emulate not **evil men**" (transitive verb, object elided) · *Excelsa stulto* →
"**Wisdom** is too high for a fool" · *Qui cogitat* → "He that deviseth **to do evil**" ·
*Si desperaveris* → "If thou despair **in the day of distress**" · *Erue eos* → "Deliver them **that
are led to death**" · *Septies enim cadet* → "For **the just** shall fall seven times" · *Praepara* →
"Prepare **thy work without**" · *Sicut frigus* → "As the cold **of snow in the day of harvest**" ·
*Melius est sedere in angulo domatis, quam* → "…than **with a contentious woman**" · *Sicut qui mel*
→ "As he that eateth **much** honey" · *Sapientior,* etc. → "**The slothful man seemeth to himself**
wiser," etc. · *Sicut qui apprehendit* → "As he that taketh **a dog by the ears**" · *Sicut avis
transmigrans* → "As a bird that removeth **from her nest**" · *Noli regibus* → "**Give not wine** to
kings" · *Stellio manibus* → "The stellio **supporteth itself** on hands" · *Et qui provocat iras,
producit* → "…bringeth forth **discords**".

⭐ **One expansion supplies a NEGATIVE and is therefore declared on its own line: 1114A,
*Regem locusta.* → "*The locust hath no king.*"** Prov. 30:27 reads *regem locusta **non habet***,
and the two printed words alone ("A king the locust") are not English at all. Convention 3 requires
the phrase the fragment stands for, and the gloss beneath is built on the absence of the king —
*tamen instanter in suis locis Christo militare* ("nevertheless it is wont to serve Christ instantly
in its own places"), which is only a *nevertheless* if there is no king. ⚠ **Every other negative in
these four chunks is one Migne prints. This one is not, and it is the only one, and it is here.**

**Left as they stand, because nothing is elided:** *Vir sapiens* · *Comede, fili mi* · *Ne insidieris*
· *Cum detractoribus* · *Hae quoque parabolae* · *Gloria Dei* · *Coelum sursum et terra deorsum* ·
*Aufer impietatem* · *Ne gloriosus appareas* · *Mala aurea* · *Vir gloriosus* · *Acetum in nitro qui
cantat* · *Ventus aquilo* · *Aqua frigida* · *Fons turbatus* · *Sicut urbs patens* · *Quomodo nix in
aestate* · *Nam sicut avis* · *Claudus pedibus* · *Sicut canis* · *Vidisti hominem* (×2) · *Dicit
piger* · *Ne glorieris* · *Grave est saxum* · *Anima saturata calcabit favum* · *Melior est vicinus*
· *Ferrum ferro* · *Infernus* · *Diligenter* · *Aperta sunt prata* · *Fugit impius* · *In
exsultatione* · *Beatus homo* · *Vir iracundus* · *Verba congregantis* · *Visio quam* · *Omnis
sermo* · *Duo rogavi te* · *Quatuor* · *Lepusculus* · *Gallus* · *Et aries* · *Verba Lamuelis* ·
*Aperi os* · *Mulierem fortem* · *Quaesivit* · *De nocte* · *Surrexit* · *Consideravit* (×2) ·
*Accinxit* · *Fortitudo* · *Os suum* · *Lex clementiae* · *Non timebit* · *Stragulatam vestem*.

⚑ **One lemma was deliberately NOT expanded, and the reason is worth keeping**: **1108B
*Investigare.*** Prov. 25:2 reads *investigare **sermonem***, so the stump wants its object — but
**Migne's gloss opens with that very word**: *Investigare.* **Sermonem,** *etc.* Expanding the lemma
would print *sermonem* twice on our side of the page and once on his. Rendered "*To search out.*",
with the gloss's own "The speech, etc." completing it exactly as he arranged.

⚑ **And one control the range provides for free**: *Vidisti hominem* stands as a complete lemma at
**1109D** (Prov. 26:12) and again at **1112A** (Prov. 29:20), for two different verses. Neither was
expanded, and both were checked against **their own** verse — the same discipline chunk 0005 applied
to its two *Ubi non* stumps.

---

## §2 · `usque ad` — CENSUSED PER OCCURRENCE, NEVER BY RULE

**96 tokens of *usque* in the bodies of my four chunks. 93 are the abridgment formula** (30 · 17 ·
13 · 33), each inside its own italic span and each answered by exactly one italic ***as far as*** in
the English — **verified 1:1 per chunk, not in total**. **Three are not the formula:**

- **1112B — *Huc usque parabolae Salomonis*** — "Thus far the parables of Solomon", the glossator's
  own transition at the head of CAPUT XXX.
- **1114D — *Hucusque verba Lamuelis regis*** — the same adverb written as one word, at the head of
  the *mulier fortis* section.
- **1115B — *Hodie et usque in finem saeculi*** — "to-day and even to the end of the world",
  ordinary *usque in*.

**Three formula spans carry something other than the bare two words, and all three are reproduced as
Migne arranges them rather than normalized:**

- **1110C — `*usque ad, in Jericho, et incidit,* etc`** — the resumption tail (Lc. 10:30's own words)
  is fused into the same italic run, Migne's commas included, and the paragraph ends on **`etc`
  with no period**. Both are carried: the English ends "*as far as, into Jericho, and fell,* etc".
- **1114B — `*usque ad postquam elevatus est in sublime.*`** — tail inside the italics.
- **1116C — `*usque [1116C] ad*`** — ⭐ **the column anchor falls INSIDE the formula, between the two
  words.** The English splits its own formula at the same place: "*as far [1116C] as*". This is the
  deliberate mid-construction split that 8995 established at 0605B.

⚠ **The trap the brief names did not fire in this range: no lemma in cols 1107C–1116D has *usque ad*
among the verse's own words.** Recorded as a checked negative, because Part II met that trap once
(Apoc. 2:10, *Esto fidelis usque ad mortem*) and 8954 met it fourteen times.

---

## §3 · CRUCES — including everything declined, with the reason

### 3a · Plate candidates — raised, never patched, and **NO MARKER FIRED ON ANY OF THEM**

Ship test B: an unread candidate is safe if and only if it fires no marker. **No `[sic:]` and no
`[cj:]` was fired in this range, so these four chunks assert nothing whatever about Migne's plate.**
Gallica `ark:/12148/bpt6k5505319w` is the second witness for PL 113, **f = (column + 1) / 2** (Part
II's map, not the archive.org one), one fetch each.

| col | reading | class | what I did, and why |
|---|---|---|---|
| **1114D** | *et arguet ***inaequitate*** pro mansuetis terrae* | ⭐ **WORD-FUSION** — *in aequitate* set as one token. *inaequitas* is not a Latin word; *iniquitas* is the word it looks like, and *in aequitate* is what Isa. 11:4 reads | **Rendered by its printed shape** ("shall reprove with inequity"), with a `[var:]` carrying the Vulgate's two words. ⛔ **No `[sic:]`**, and the reason is measured, not timid: the addendum records the non-word class as **ours, not Migne's, in every instance tested**, and a `[sic:]` publicly blames his plate. Part II declined the identical call at 1094A (*damuante*) and rendered by the evident sense. ⚑ **This is the strongest plate candidate in my range after 1108D** — Gallica **f558**. |
| **1108D** | VERS. 19.-- ***Deus** putridus et pes.* | Real, well-formed word in a position where it is theologically absurd; *Dens* is certain from Prov. 25:19 | Rendered exactly as printed, **`[var:]` fired** (a claim about the Clementine, which is safe and checkable), **`[sic:]` and `[cj:]` declined** — the addendum's rule is that a real word that reads oddly is Migne's until a plate says otherwise, refuted 5 of 5, and n/u is equally a compositor's slip and a scanner's. Gallica **f555**. ⭐ **If one plate read is bought for this range, buy this one.** |
| **1116A** | *ad tolerandas apertorum ***nostium*** pugnas* | **NON-WORD** — *nostium* is no Latin form; *hostium* ("of enemies") is certain from the sentence (*apertorum … pugnas*, open battles) and from the antithesis with *haereses* in the same clause | Rendered by its evident sense, "the battles of open **enemies**", **no `[sic:]`**, exactly as Part II handled *damuante*. h/n is the commonest of all scan confusions. Gallica **f559**. |
| **1113C** | *choerogryllus* … *choerogyllum* | The same transliterated Greek word spelled **two ways nine words apart**, the second missing its *r* | Both carried as printed, untranslated, **no marker**. The gloss is a word-study (*saphan*, mouse, coney, hare, hedgehog), so normalizing either spelling would be normalizing the evidence. Gallica **f557**. |
| **1109A** | *Deus putridus* neighbours; *Nitrum a Nitria provincia* | ⭐ **A checked negative on the normalization class** (brief §4 / addendum C) | I read the whole line, not the target word, at every place I examined closely, and **no form in these four chunks strikes me as suspiciously tidy in a rough passage**. Recorded as a negative because the class is invisible from the Latin alone and a later reader needs to know it was looked for. |

⭐ **The clipped left margin — looked for, and NOT found.** Our archive.org copy of PL 113 clips the
left margin on some pages, and 8965 found split runs sitting at left-column heads because of it.
**In cols 1107C–1116D there is no split run and no truncated word**; the two suspect tokens above
(*inaequitate*, *nostium*) are a **fusion** and a **letter substitution**, neither of which is the
margin's shape. Recorded as a checked negative alongside Part I's, for cols 1079C–1091D.

### 3b · Three misprinted citations, each identified from the QUOTED WORDS and never from the numeral

All three sit inside `[n:]` notes, which pass through verbatim; the text keeps exactly what Migne
prints and only the **index** should be corrected, through `data/citation-corrections.json`. **None
was read at the plate**, so each is a candidate and not a claim. **I have written no entries** — the
printed forms stand and the index is where they resolve.

| col | Migne prints | the words are | note |
|---|---|---|---|
| **1108A** | *(Joan. III)* | **Jo. 5:23** *Qui non honorificat Filium, non honorificat Patrem, qui misit illum* | Verbatim John 5:23. John 3 has *qui non credit Filio*, which is neither these words nor this argument. |
| **1108C** | *(I Petr. III)* | **1 Pt. 5:6** *Humiliamini … sub potenti manu Dei, ut vos exaltet in tempore visitationis* | Verbatim 1 Peter 5:6; 1 Peter 3 has no such clause. |
| **1114C** | *(Exod. XIII)* | **Exod. 23:3** *Pauperis quoque non misereberis in judicio* | ⭐ A **transposed numeral**, XIII for XXIII — and Exodus 13 is the consecration of the firstborn, which has nothing to do with judging the poor. |

⛔ **One note considered and DECLINED as a misprint, with the reason, because a blind reader will
raise it:** **1109D `[n: (Eccl. X)]`.** It closes *ut qui non vident videant, et qui vident, caeci
fiant*, which is John 9:39 — and John 9:39 is **already correctly cited** by the note four words
earlier, `[n: (Joan. IX)]`. So the second note is not a rival attribution of the same words; it is
almost certainly a **cross-reference** for the gloss as a whole, and **Eccles. 10:3** (*cum ipse
insipiens sit, omnes stultos aestimat* — "since he himself is a fool, he counts all men fools")
is precisely the parallel to Prov. 26:12, the verse under gloss. **A note that points somewhere else
on purpose is not a misprint**, and `citation-corrections.json` must not be fed a guess.

### 3c · Migne's own irregularities, reproduced and not tidied

- ⭐ **1110A/B — `VERS. 1.` with NO `--`.** Every other verse address in my four chunks (and in the
  whole work) reads `VERS. n.-- `. This one, opening CAPUT XXVII, prints a bare `VERS. 1. `. **The
  English reproduces it exactly**, because the address passes through verbatim and this is his
  setting, not a class of ours. ⚠ It is **not** the `emdash;` defect Part II found at 1107B — that
  one is an undecoded entity in our TEI with a visible tail; this is simply a missing rule.
- **Two verse numbers out of register, both reproduced, never renumbered:**
  **1107C `VERS. 4.-- *Vir sapiens.*`** is **Prov. 24:5**, and **1111C `VERS. 1.-- *Homo qui
  blandis,* etc.`** is **Prov. 29:5**. ⭐ **Neither offset persists** — the very next address after
  each is exact (`VERS. 7.` = 24:7; `VERS. 6.` = 29:6) — so this is the same shape Part I found at
  1089C and it must be checked one address at a time rather than assumed to run.
- **1109A `VERS. 4.--` gathers TWO verses** under one address, *Non respondeas . . . Responde stulto
  juxta stultitiam* (Prov. 26:4 **and** 26:5), because the gloss exists to say they are not contrary.
  His spaced ellipsis ` . . . ` is carried with his spacing.
- **1112B–1112C — the Greek.** ἐκκλησιαστής stands in the Latin unitalicized and is carried into the
  English unitalicized and untranslated, with *congregans* and *Ecclesia* beside it: Migne's sentence
  IS the etymology, and Englishing its terms would leave it explaining nothing (the 11551 *stylus*
  precedent).
- **1109B — *doma*.** The gloss says the Greek of Acts 10 reads *doma* where the Latin has
  *superiora*. Migne prints *doma* **roman**, not italic, all three times; italic-span parity is
  sacred, so the English prints it roman too, untranslated. Logged because a reader will expect the
  register's italic-Latin treatment and it is not available here.

### 3d · Passages that will not construe cleanly, rendered as closely as the printed words allow

- **1107D — *usque ad si algore perituros, victu, veste recrea.*** The resumption tail opens on a
  bare *si* whose protasis is inside the text the abridgment removed, and *perituros* is an accusative
  with no expressed governing verb but *recrea*. Rendered literally: "if those about to perish of
  cold, refresh thou with food, with raiment." ⚑ Parsed as strictly as ordinary prose, per the
  brief's *ferias* warning; the roughness is the abridgment's cut, not a licence to smooth.
- **1110C — *Bona consolatio consilium sapientum: qui dum se invicem consolando instruunt, ferrum
  ferro acuitur.*** A masculine plural relative (*qui*, the wise) opens a clause whose main verb
  (*acuitur*) has *ferrum* for its subject — an anacoluthon. Rendered as printed: "who, while by
  consoling they instruct one another, iron is sharpened by iron." No conjecture offered.
- **1115C — *usque ad* sic sed et nocte accensa lucerna manibus operatur.** *sic sed et* is not a
  sequence English can smooth without inventing a connective. Rendered "so but also by night, the
  lamp being lighted, she works with her hands."
- **1113C — *quot cogitationibus juvenis agitur, qui viam veritatis ***deservit***.*** ⚠ *deservit*
  is a real, well-formed verb ("serves diligently") and is rendered as such: "who **serves** the way
  of truth". The rival is *deserit* ("deserts"), which the moral shape of Prov. 30:19's *via viri in
  adolescentia* might seem to want. ⛔ **The `[cj:]` is declined and the reason is stated rather than
  left implied:** both readings construe, so the printed one does not make the sentence assert
  something the author is arguing against, and 18a declines exactly that class; and the addendum's
  rule for a real word is decisive. **The rival is named here and loses on those two grounds** — the
  apparatus records only what the marker says, and a reader never sees a rival weighed in silence.
- **1108C — *Sicut superius praelatum, etc.*** Rendered "As was set forth above", taking *praelatum*
  as the neuter participle of *praeferre*. ⚠ The rival is the noun *praelatus*, "the prelate", which
  the surrounding matter (kings, rigid rulers, *plebis odium*) makes attractive. **It loses because
  the sentence has no verb for a nominative subject to govern** and because *Sicut superius* + a
  perfect participle is Migne's ordinary back-reference formula in this book. Named because it is a
  genuine fork.

---

## §4 · SUPPLIED PRONOUNS AND SECOND PERSON

### 4a · Every "he / she / it / they" the Latin does not print, named, with what names it

12 of 25 sites in 11613's blind read were this class, and in a gloss the antecedent is very often in
the lemma above or inside the text the abridgment removed.

| col | supplied | who, and what fixes it |
|---|---|---|
| 1107C, 1107D, 1108B, 1116C | "**he** discloses / compares / begins / shows" (*Aperit*, *comparat*, *incipit*, *ostendit*) | **Solomon**, the speaker of the book, who is the subject of every glossing verb in this work (*subdit*, *subjungit*, *addidit*, *aperit*). Unambiguous and uniform. |
| 1108B | "whence **he** calls himself rather the son of man than the Son of God" | **Christ.** Only he can be *Filius Dei*, and the clause is the standard Christological *filius hominis / Filius Dei* contrast. ⚠ Migne's own casing (lower-case *filium hominis*, capital *Filium Dei*) is mirrored, because here the case IS carrying the contrast. |
| 1108B | "for straightway **he** heard: *Blessed art thou, Simon Barjona*" | **Peter**, named inside the quotation itself. |
| 1108D | "and **he** annexes the more pleasing brightness" (*annectit*) | ⚠ **Unresolved and flagged rather than chosen.** The subject sits inside the elided text; either the glossator or the wise reprover of Prov. 25:12 construes. A bare "he" is the least the English can do. |
| 1109B | "**they** lead **them** in to the palm of recompense" (*inducunt*) | ⚠ **Also unresolved.** The plural subject is inside the elided text; the object is supplied because English cannot leave *inducunt* bare. Nothing is asserted about who they are. |
| 1109C | "if **it** has not the wall of silence" (*habet*) | The antecedent is **feminine singular** — *contra **semetipsam*** in the same sentence proves it — and stands inside the elided text; *anima* or *mens* are both candidates and neither is asserted. Rendered with a neutral "it". |
| 1109D | "nor yet the glory of his own wisdom does **he** lose" | ***sapiens***, printed two words earlier in the same sentence. |
| 1110C | "so that what **he** had begun … **he** finishes by human favour" | ⚠ The Latin is ambiguous in exactly the same way — the man begun for God's love and finishing for man's may be the flatterer or the flattered — and the English keeps the ambiguity rather than resolving it. The sense of the paragraph (*simplicitatem puri cordis minuit*) leans to the **flattered**. Not asserted. |
| 1114D–1115A | "when through the preachers **he** calls back … those whom **he** had deceived" | ⚠ **Two different "he"s, and Migne prints neither.** *revocat* is the *Vir, redemptor* of the lemma above; *deceperat* is the **devil**, who is named in the very next paragraph (*deceptas a diabolo animas*). The English keeps both as "he", as the Latin does; the crux, not the text, disambiguates. |
| 1115B | "**He** gives a prey to **his** household" (*Dat*) | ⭐ **A real gender shift in Migne and it is followed, not smoothed.** The chapter's subject is the *mulier fortis*, feminine; but the preceding sentence is *Cum **quis fidelis** … accingitur*, masculine, and the two *Dat* sentences continue it. Our English says "he" because his Latin does. |
| 1116C | "but in the judgment **he** will show how great is the glory of **his own** resurrection" | The prophet of *Quod futurum novit ut propheta* — the subject of the same sentence's first half. |
| 1114D | "so, where **he** shall have erred" (*ubi erraverit*) | The **poor man** (*pauperis*) of the immediately preceding clause: the gloss's whole point is that the same mouth opened for him is opened against him when he sins. |

### 4b · Pattern 17 — thou is the singular, you is the plural, decided by the morphology

The book addresses one hearer and takes **thou** throughout my range: *Ne desideres* · *videris* ·
*recrea* · *Comede, fili mi* · *ne desistas* · *quod faciebas* · *Melior est tibi* · *si tuo tempore
bene paveris* · *vestieris* · *comparas* · *acquiris* · *Sufficiat tibi* · *Si videbas furem,
currebas cum eo* · *tuam sapientiam jactans … vocas* · *noli corrumpere* · *non misereberis* ·
*esto fortis* · *Vade et amplius noli peccare* · *tu supergressa es universas*.

**Four passages are plural and take "you", and every one is plural in Migne's own morphology:**

- **1108C** — *ut exaltet **vos** in tempore visitationis* and *Humiliamini* (1 Pt. 5:6): "Be **you**
  humbled … that he may exalt **you**."
- **1109C** — ***vos** me coegistis* (2 Cor. 12:11): "**you** have compelled me."
- **1111C** — *nihil **potestis** facere* (Jo. 15:5): "**you** can do nothing."
- **1115C** — *ut bonis operibus **fulgeatis***: "that **you** may shine with good works."

⭐ The 1116D lemma is the instructive one: *tu supergressa es universas* is **singular** inside a
sentence about *multae filiae*, and the English keeps "**thou** hast surpassed them all" so that the
turn from the many daughters to the one woman is visible with no apparatus.

---

## §5 · THE TESTS, RUN, AND WHAT THEY RETURNED

**Test 1 — a `[sic:]` must not swallow the word it marks.** ⭐ **Vacuously clean, and for the right
reason: this range fires ZERO `[sic:]`.** Nothing is quarantined, so nothing can be quarantined with
its verb, its negation or its object inside. I also ran the mechanical form — stripped every marker
from the English and read what was left — and found no stranded article, no stranded preposition and
no doubled mark; every sentence reads aloud without its brackets. All ten `[var:]` stand **beside** a
complete rendering, never in place of one. ⚑ The fourth question (does the clause still have the
thing it acts on?) has nothing to bite on here for the same reason.

**Test 2 and 2a — name the single Latin word each printed negative attaches to.** **83 negative
tokens** stand in the four chunks (*non* 50 · *ne* 15 · *nunquam* 4 · *noli* 4 · *nihil* 3 · *nec* 2
· and one each of *nisi*, *neque*, *nullus*, *nemo*, *noluit*, *nequeat*). Proverbs is aphorism, so
this was run on every proverb rather than every paragraph. **The 2a trigger population — a negative
resting near a quantifier, a correlative, a predicate or a bare case-phrase — is TWENTY sites, and
each host was proved from the sentence's own structure and never from what reads well:**

| col | Latin | host | English |
|---|---|---|---|
| 1107C | ***Non omnis** fortis sapiens, **sed e converso*** | ⭐ ***omnis*** | "**Not every** strong man is wise, but the contrary" — on the verb it would deny that any strong man is wise, and the *e converso* is what proves the host: the converse he affirms is that the wise man IS strong. |
| 1107C | ***non** ingenio tardum, **sed** eum qui … peccat* | ***ingenio tardum*** | "**not** one slow of wit, but him who sins" — a `non … sed` across two accusatives; there is no verb in either member. |
| 1109C | ***Non sunt** contraria* | ***contraria*** (the predicate) | "They are **not** contrary" |
| 1110B | *prorsus videre **non vales*** | ***vales*** | "thou art **utterly unable** to see" — *prorsus* intensifies, it does not host. |
| 1111A | *etiam si **nullus** persequatur* | ***nullus*** | "even if **none** pursue him" |
| 1111A | *quem **nemo** invitus amittit* | ***nemo*** | "which **no man** loses unwillingly" |
| 1111A | *Qui **non est** fortis* | ***est fortis*** | "He that is **not** strong" |
| 1111B | ***Non** de praesentibus* | ***de praesentibus*** | "**Not** concerning present things" — a verbless phrase; there is no verb for the negative to float onto. |
| 1111C | ***Non** ergo **justo** laqueus peccantium* | ⭐ ***justo*** | "**Not for the just man** therefore is the snare of sinners" — again verbless, and the whole gloss is that the snare catches its own setter. |
| 1112A | *sed **non levius** verbositatis* | ***levius*** | "but that of wordiness **not lighter**" — a bare comparative, the class 11535 @1231B rules on. |
| 1112A/B | ***Non solum** a peccato, **sed etiam** a consensu … abstinere docet sapientia* | ⭐ ***a peccato*** | "**Not only** from sin, but even from consent does wisdom teach us to abstain" — ⚠ on the **prepositional phrase**, not on *docet*: put on the verb it would have wisdom teaching nothing. |
| 1112B | ***Non** enim **fur solum**, **sed et** ille reus tenetur* | ***fur*** (with *solum*) | "For **not the thief alone**, but he also is held guilty" |
| 1112C | *Sapientiam vero **non hominum**, scilicet **neque** principum* | ***hominum*** ; ***principum*** | "wisdom **not of men** … **neither** of the princes" — two genitives, no verb in either. |
| 1113B | *avarus **non** dicit, sufficit* | ***dicit*** | "the covetous man **says not**, It is enough" |
| 1113D | ***Non** nos moveat* | ***moveat*** | "Let it **not** move us" |
| 1114A | *quia **non suis viribus**, **sed** in Dei auxilio sperare salutem didicit* | ⭐ ***suis viribus*** | "to hope for salvation **not by its own strength**, but in the help of God" — the `sed` names what it DOES hope by, so the negative cannot be on *didicit*. |
| 1115A | *Reddet ei bonum **et non malum*** | ***malum*** (a noun) | "good **and not** evil" |
| 1116C | ***non solum** otiosae, **sed** verbosae et curiosae* | ***otiosae*** (an adjective) | "**not only** idle, but wordy and curious" |
| 1109A | *discit **non libenter** dicere, quod didicerit **non libenter** audire* | ⭐ ***libenter***, twice | "he learns **not gladly** to say that which he has learned **not gladly** to hear" — ⚠ **the adverb is the host both times.** Moved onto *dicere* / *audire* the maxim becomes "he learns not to say what he has not heard", which is not a maxim about the sour face at all. |
| 1113A | *si natus est, fuit tempus quando **non fuit** filius* | ***fuit*** | "there was a time when he **was not** a son" — the Arian formula, carried exactly. |

The remaining ~61 negatives rest on their own finite verb with no correlative, quantifier or bare
case-phrase in reach, and were checked one at a time.

**Contradictions carried, not repaired: a checked zero.** No printed negative in cols 1107C–1116D
makes its own sentence contradict its neighbour, and I looked specifically for the 8964 shape (a
negative Migne supplies where the received text has none) at every scripture quotation in §1c. The
one place a supplied negative could hide — *Et spoliis **non** indigebit* at 1114D and *portae inferi
**non** praevalebunt* at 1116A — carries a *non* that Prov. 31:11 and Mt. 16:18 both print themselves.

**Test 2b — each anchor against the WORD it stands beside.** All 38 were checked at the site, not for
presence. Migne breaks mid-construction constantly here and the English follows him there, keeping
his word order where English would prefer its own **precisely so the anchor lands where he puts it**:

- *Non omnis fortis sapiens, [1107C] sed* → "wise, [1107C] but the contrary"
- *sapientiae suae gloriam [1109D] perdit* → "the glory of his own wisdom does he [1109D] lose" —
  ⚑ the object is fronted in English for no other reason than the anchor.
- *audientium [1113B] animas* → "the hearers' [1113B] souls it slays"
- *minores videntur [1113D] justi* → "the just seem [1113D] lesser" — the anchor sits immediately
  after *videntur* / "seem" in both.
- *sperare salutem [1114A] didicit* → "in the help of God, it hath [1114A] learned"
- *proximorum [1115B] curam* → "girds himself solicitously to take [1115B] the care of his neighbours"
- *quid [1115C] potest* → "what [1115C] she can"
- *cum late [1116A] longeque* → "when far [1116A] and wide"
- *Colus [1115D] in sinistra* → "The distaff [1115D] in the left hand"
- *et [1114D] arguet* → "and [1114D] shall reprove"
- *usque [1116C] ad* → "as far [1116C] as" — the formula split at his break, deliberately.
- *ad superiora [1109B] ascendit* → "to the upper places [1109B] ascendeth"

⚠ **One anchor is approximate and is declared: 1112B.** Migne breaks at *a consensu [1112B] abstinere
docet sapientia*; my English fronts the whole `non solum … sed etiam` pair so that the negative stays
on *a peccato* (test 2a above), which puts the anchor after "consent" and immediately before "does
wisdom teach us to abstain". It is inside the same clause and beside the same verb phrase; the two
requirements pulled against each other and **2a won**, which is the right order.

**Test 3 — punctuation compared BY COLUMN BAND, never by total.** Colons, semicolons, question marks
and exclamation marks were counted in **all 42 bands** (12 + 10 + 9 + 11, with `[n:]` and `[var:]`
contents stripped from both sides). **First pass: one mismatched band, and it was a mark I had
supplied.**

| band | what I had | what Migne prints | fixed to |
|---|---|---|---|
| 1110A | "to beget contentions**;** but the wise man altogether avoids it" | comma (*generare, sed sapiens*) | comma |

**It is the documented shape exactly** — a maxim in two halves invites a semicolon and the translator
supplies one without noticing. ⚑ **And the totals would not have caught it**: chunk 0010's Latin
carries 5 semicolons of its own, so a chunk-level total of 6-against-5 would have looked like a
rounding error rather than a located fault.

⛔ **No comma→semicolon sweep was made in either direction, and the reason is measured on this
book's own plate: Migne prints 19 semicolons of his own in these four chunks** (5 · 4 · 7 · 3),
including four in one band at 1113B. Tobit's exception rests on a book where he prints **zero**;
this is not that book. **After the repair, 42 of 42 bands match exactly**, and there are **zero
question marks and zero exclamation marks on either side** — which is itself a parity worth stating,
since Prov. 31:10 and Prov. 30:4 both end in `?` in the Clementine and Migne closes them with periods
(§1b).

**The fourth test — does the paragraph ASSERT what he asserts?** Run last, with the counts already
clean, reading each finished paragraph against its Latin and asking that one question. **Four
paragraphs were changed by it, and not one of them was missing anything:**

1. **1109A, *Prunas enim congregabis*** — I had written "do good things to an enemy for the sake of
   **his** evil", which quietly made the sentence about the enemy's wickedness. *mali causa* is
   "for the sake of evil", i.e. **in order to harm him** — the reading the paragraph exists to reject,
   since the coals are *ardorem charitatis*. The supplied "his" was doing an argument's work.
2. **1110C, *Ferrum ferro*** — I had rendered the relative *qui* as "which", which tidied the
   anacoluthon into a sentence about the counsel. *qui* is masculine plural and means **the wise
   men**; restored, and the sentence left rough (§3d).
3. **1110C, *Qui benedicit proximo*** — "he **may** finish by human favour" read as a purpose; *ut …
   finiat* here is consecutive and the flatterer's effect is a result, not his aim. Changed to
   "finishes".
4. **1112B, *Verba congregantis*** — *perpenditur* rendered "is weighed", which is the dictionary and
   not the assertion: Migne is saying the point **is discerned** from the name. Changed.

⚑ Two habits, applied: **a sentence that reads smoothly where the Latin is rough was treated as a
suspect** (that is what caught 2), and the abridgment resumption tails were parsed as strictly as
ordinary prose rather than excused as abridged — which is what produced §3d's list instead of a
silent smoothing of four awkward tails.

---

## §6 · WHAT I DECLINED, AND WHAT THE MERGE SHOULD KNOW

- **Four markers a strict reading of the patterns would allow, all declined**, each named above with
  its reason: the `[sic:]` at **1114D** (*inaequitate*), the `[sic:]` at **1116A** (*nostium*), the
  `[cj:]` at **1113C** (*deservit*), and the `[sic:]`/`[cj:]` at **1108D** (*Deus* for *Dens*, where
  the `[var:]` fired instead). ⚑ **The common reason is not timidity.** In the first two the fault
  shape (a fusion, an h/n substitution) points at **our** file rather than at his plate, and a marker
  would publicly blame Migne for a fault that is probably ours — the reason seven false `[sic:]` were
  withdrawn from an earlier batch. The third and fourth are real-word cases that the addendum rules
  are Migne's until a plate says otherwise.
- **No `data/citation-corrections.json` entries written** for the three misprints of §3b: the printed
  forms stand verbatim in the text, and the index is where they resolve. **No `Ibid.` in this range
  depends on any of them** (runbook false positive 2 checked, not assumed — there is no `Ibid.` in
  these four chunks at all).
- **No tei-patch written.** ⚠ Part II's open item stands and is **not mine to close**: the
  `VERS. 35.emdash;` at 1107B has been repaired in the Latin since — my chunk 0010 begins at 1107C,
  just past it, and I confirmed the corpus-wide grep now returns **no** `emdash;` anywhere in
  `src/latin/`. Recorded so the merge knows that item is done and need not be re-raised.
- **`[cn:]`: a checked zero for this range**, consistent with the work's own spot check.
- **For the merge, the four things most likely to need reconciling with the peers' stints:**
  1. ***fortis* → "strong", including *mulier fortis* → "a strong woman"** (§V). It is the most
     visible vocabulary choice in the book's most famous chapter, and if Wilson or the merge prefers
     the received "valiant woman", **mine is the half that should move** — but it should move
     *everywhere*, including the eight other *fortis*/*fortitudo* sites in my range, or the argument
     the chapter makes about one strength stops being visible.
  2. ***insipiens* → "unwise"** carried into 2 Cor. 12:11 at 1109C, against the familiar "foolish".
     This is Part II's convention applied where it costs something; flagged so it is not read as a
     slip.
  3. **The *correptio*/*correctio* pair**, which now has a `[var:]` in Part I (1082A) and another in
     Part III (1110B). Two sites, one drift; the merge may want a single note on the work page.
  4. **The clipped-lemma split of §1d**, which lists **both** classes on purpose, exactly as Parts I
     and II did, so that a later reader does not mistake the deliberate split for drift — and the one
     expansion that supplies a **negative** (*Regem locusta* → "The locust hath no king") is declared
     on its own line rather than buried in the list.
- **Nothing in the peers' chunks was read or altered.** I read `cruces-0000.md` and `cruces-0005.md`
  for their vocabulary and their rulings, and 8968 §1, 8964 §M and 8954 §M for the conventions, and
  wrote only `0010`–`0013` and this file.
