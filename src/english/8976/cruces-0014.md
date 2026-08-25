# *Glossa ordinaria*, **Actus Apostolorum** (PL 114) — cruces for chunks 0014–0017

**Stint: chunks 0014–0017, cols 0460A–0470A (3,553 Latin words), CAPUT XVII – CAPUT XXVIII.**
The Areopagus · Ephesus and Diana · the Miletus farewell · the arrest and the defences before
Felix, Festus and Agrippa · the shipwreck · Rome. **This is the tail of the book**, and the
Acts→Romans division at cols 469/470 falls inside it.

Three peers hold 0000–0004, 0005–0009 and 0010–0013. **This is a stint file. It is NOT
`cruces.md`; the merge is the launcher's.** I wrote only my four chunks and this file.

Marker tally for this stint: **4 `[var:]` · 0 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` ·
0 `[nt:]` · 0 `[cn:]` · 92 `[n:]`** (exact parity with the Latin twins: 22 + 22 + 32 + 16).
Zero guillemets in either language, all four chunks. Zero em-dashes in the English.
EN/LA ratio 1.41 · 1.43 · 1.50 · 1.45.

`verify-english.mjs` reports **OK on all 18 chunks of the work** — the three peers are on disk
and the whole book now verifies.

---

## §0 · WHAT I INHERITED, AND FROM WHERE — read before writing a word

Both earlier stint files were on disk when I began and I read them first, as instructed.
**Nothing below was re-derived.** ⟵ marks an inheritance; the few new decisions are marked
**new** and declared rather than smuggled.

| taken | from |
|---|---|
| `VERS. n.--` verbatim; the lemma Englished; a fragmentary lemma rendered as the phrase it stands for | 8968 (Ruth) `cruces.md` §1 |
| `CAPUT XVII.` → **CHAPTER XVII.** — a numeral stays a numeral, as Migne sets it | Ruth pilot + launch ruling |
| `[var: Vulg. Bk C:V *word* …]`, book **chapter and verse always explicit** | 8964 §M, and both peers' practice in this book |
| the mirror rule **and its ruled scope** (semantic-in-English only) | 8964 §M |
| *sermo* → **discourse** · *doctor* → **teacher** (never "doctors") · *praedicator* → **preacher** · *charitas* charity / *dilectio*, *amor* love · *scientia* knowledge / *sapientia* wisdom · *interpretatur* → "is interpreted" · *testamentum* → **testament** · *Divinitas* Divinity / *Deitas* Deity · *coenaculum* → **upper room** · *pascha* → **Pasch** · *virtus* **decided per occurrence** | `cruces-0000.md` §V |
| ***Ecclesia*/*ecclesia* and *Spiritus*/*spiritus* mirror the plate word for word** | `cruces-0000.md` §V |
| *clarifico* make renowned / *glorifico* glorify — held apart | `cruces-0000.md` §V (no *clarifico* in my range; *glorificat* at 0464B renders **glorifies**) |
| *signat* betokens / *significat* signifies — held apart | 8964 §M (only *significat* occurs here, 0463C) |
| `*usque ad*` → ***as far as***, censused per occurrence, **no verb ever supplied** | 8970 §1 via the brief; `cruces-0000.md` §4; `cruces-0005.md` §M2 |
| ***apostolus* NOT mirrored** (his casing alternates for one referent inside a sentence); ***Apostolus* as Paul's title** → "the Apostle" | `cruces-0005.md` §M1 — I extend the same finding, see §M1 below |
| Jerusalem renders *Jerusalem*, *Hierosolyma* and *Jerosolyma* alike | `cruces-0000.md` §V |
| a misprinted citation left **exactly as printed** and referred to `citation-corrections.json`, identified **from the quoted words, never the numeral** | `cruces-0000.md` §2.2–2.3, `cruces-0005.md` §P |
| a **non-word rendered for its evident sense**, logged as a plate candidate, **no marker** | the launch ruling, which settles the split between `cruces-0000.md` §3.1 (render) and `cruces-0005.md` §W (carry) **in favour of rendering** |

⚑ **On that last row: my range has three non-words and they are RENDERED, not carried.** The
launcher ruled the peers' disagreement (§S2 of `cruces-0005.md`) and I followed the ruling
rather than either peer. Sites in §W below.

**Corpus controls run before inventing anything** (`src/latin/`, `src/english/`): *Atheniensis*
2 : *Athenienses* 2 (both attested — see §W4) · *Sceno* 1 (mine alone) · *Tyrrhenc* 1 (mine
alone) vs *Tyrrheno* 1 elsewhere · *dithalassum* 0 : *Bithalassum* 1. "by antiphrasis" attested
(8976/0466C, peer's §X).

---

## §S0 · THE SEAM WITH 0010–0013 — its cruces landed while I was drafting, and I checked it

`cruces-0010.md` was **not on disk when I began** (only `cruces-0000.md` and `cruces-0005.md`
were, which is what the launch message named). It appeared while I was drafting, I read it
before filing, and **it found one real drift in my chunks, now repaired.**

⛔ **0461A — *Isaiae* had been rendered "Isaiah".** The third stint fixes the work's biblical
name forms as Douay-shaped and consistent — **Isaias · Ezechiel · Chanaan · Jonas · Judaea ·
Moses · Jerusalem** — and records that it corrected its own *Judea* to the peers' *Judaea*
before filing for exactly this reason. My *Isaiah* was the AV form, and the only occurrence of
the name in my range. **Repaired to "not of Isaias".** ⚑ Recorded rather than silently
conformed, per 8964 §M: a translator that quietly matches a peer's form leaves no trace that
the two ever differed.

**Checked across the seam and sound, needing nothing:**

- ***gentes* / *gentilis* → the Gentiles / gentile** (its declared extension) holds through my
  five sites: 0460C *de colentibus gentilibusque* and *gentiles permanserant* · 0461C *gentes
  sine circumcisione salvari* · 0465D *evangelizare gentibus* · 0467C *Philosophi gentium*.
  **Reached independently and identical.**
- ***designat* → designates**, its third verb held off *significat*. **No *designat* in my
  range**, so the extension is untested here; *significat* occurs twice (0463C *Sacrum … mundum
  et profanum **significat*** → "signifies", 0465A *ascensionis in castra **significat*** → "It
  signifies") and both take **signifies**, per 8964 §M. Consistent.
- ***Eutichus* → Eutychus** (0463D) — I did **not** keep the form, and the ruling is the first
  stint's, not a lapse: *Eutichus*/*Eutychus* is the ordinary medieval i-for-y, the same class
  as *Andraeas* → **Andrew** (`cruces-0000.md` §V), not the class of *Salamina*, *Lydda* or
  *Barnabas*, which are different **names**. My §Q lists it among the Pattern 9 items.
- **Its §2.7 records "the `. [a-z]` class the first stint found at 0435B — **ZERO** in my
  range."** ⭐ **Mine has one** (§M4), which together with 0435B is the whole population of the
  work, and its zero is what makes that count trustworthy.
- **Its §P has one misprinted citation, mine has two** (§P), and all three are treated
  identically: left exactly as printed, identified from the quoted words, referred to
  `citation-corrections.json`. **Four stints, six misprinted citations, one treatment.**
- **The `[var:]` marker form.** Its 21 markers, the first stint's six, the second's five and my
  four all carry **book, chapter and verse explicit**. **Thirty-six markers, one form**, and no
  repeat of 8964's two-form drift.
- **Its §2.5 declines a divergence because the evidence points at OUR file.** ⚑ **I met the same
  question at 0467B and came down the other way, with the reasoning written out** — see §D1.
  The two decisions are not in conflict: its *Hoc es* is a single occurrence with a sound twin
  nearby, mine is printed twice against one sound occurrence.

---

## §V · THE DIVERGENCE LIST — every italic span in cols 0460A–0470A walked

⛔ **The agreements are listed too.** A findings-only list cannot be told apart from no look at
all. Every reading was fetched **at its own verse** in `sources/vulgate/clementine-flat.txt`,
never matched "somewhere in the Clementine" and never from recollection.

### V1 · The four that took a `[var:]`

| col | Migne prints | Clementine, verse fetched | why it fired |
|---|---|---|---|
| **0463D** | `VERS. 4.-- *Sosipater.*` and the gloss *In Hebraeo **Sosipater** interpretatur idem esse quod narrans dispersionem, vel **salvans** dispersos* | **Act 20:4** *Comitatus est autem eum **Sopater** Pyrrhi Beroeensis* | ⭐ **The gloss is an etymology of the name, so the name is the argument.** Migne's *Sosi-* is what carries *salvans* (σῴζω); the Clementine's *Sopater* does not. Marked `[var: Vulg. Act. 20:4 *Sopater*; the form here glossed stands at Rom. 16:21]` — and Rom 16:21 was checked: it does read *Sosipater*, so Migne has the New Testament's other form of the name, not an invention. |
| **0464B** | *Nolite **accipere** aurum,* etc. | **Mt 10:9** *Nolite **possidere** aurum, neque argentum* | ⭐ **Self-witnessing, and the word is load-bearing.** The paragraph proves *Beatius est magis dare quam **accipere*** from two dominical sayings, and *accipere* is the very word of the maxim it is proving. ⚑ **This work prints the Clementine's word elsewhere**: at 0434B (peer's §1.2) Migne sets *Nolite **possidere** aurum et argentum*. Both forms are his. Marked `[var: Vulg. Matth. 10:9 *Nolite possidere aurum*, "do not possess gold"]`. |
| **0467B** | `VERS. 10.-- *Cum occiderentur **detulit** sententiam.*` | **Act 26:10** *et cum occiderentur, **detuli** sententiam* | Third person where Paul's own speech has the first. It is material: the gloss's exposition is first-person throughout (*ipse sententiam dedi*; *Judicavi illos occidendos*). Marked `[var: Vulg. Act. 26:10 *detuli sententiam*, "I brought the sentence," in the first person]`. **See §D1 — I weighed the OUR-FILE explanation and it loses on the evidence, and I say why.** |
| **0468B** | `VERS. 41.-- *Bithalassum.*` | **Act 27:41** *in locum **dithalassum*** | Migne's *Bi-* against the Clementine's Greek *di-*. Material because the gloss is an etymology (*Graeci Thalassan vocant mare*) and the numeral prefix is half of it. Marked `[var: Vulg. Act. 27:41 *dithalassum*, "having two seas"]`. |

All four `[var:]` contents were checked **not** to occur verbatim in their Latin twin (Pattern
14's mirror test, which `verify-english.mjs` enforces): *Sopater*, *Nolite possidere aurum*,
*detuli sententiam*, *dithalassum* — none of the four marker strings is in the chunk it annotates.

### V2 · Divergences found and a marker **DECLINED**, each with its reason

Pattern 14 fires on a divergence that **changes the sense**. These do not, and a `[var:]` is a
public claim; the crux is always available and always safe (ship test B).

- **0460B · *Quod ignorantes colitis, hoc annuntio.*** — Act 17:23 *Quod **ergo** ignorantes
  colitis, hoc **ego** annuntio **vobis***. Three trimmed words, no sense change.
- **0460B · *Nova quaedam infers,*** — Act 17:**20** *nova **enim** quaedam infers **auribus
  nostris***, and it is glossed under Migne's `VERS. 22, 23`. A trimmed connective; the verse
  displacement is §M3.
- **0460B · *vivimus, movemur et sumus,*** — Act 17:28 *vivimus, **et** movemur, **et** sumus*.
  Trimmed conjunctions in a re-quotation whose own lemma (*In ipso enim vivimus*) agrees exactly.
- **0460A · *Omnis qui se regem facit, contradicit Caesari*** — Jo 19:12 *Omnis **enim** qui se
  regem facit*. One connective. ⚑ The **citation** on it is misprinted — §P1.
- **0460C · *Viri Atheniensis,*** — Act 17:22 *Viri **Athenienses***. A morphological form, not a
  reading. §W4 gives the whole argument and why no marker fires.
- **0461C · *Sceno factoriae artis.*** — Act 18:3 *scenofactoriae artis*: the same word, divided
  across a space. That is §W1's plate candidate, not a textual variant.
- **0461D · *Apprehendentes omnes Graeci Sosthenem,*** — Act 18:17 *Apprehendentes **autem**
  omnes Sosthenem*. **Migne announces it himself** (*In Graeco*), so it is §V3's class.
- **0462B · *Ego baptizo in aqua, ille baptizabit in Spiritu sancto.*** — a **conflation**:
  *Ego baptizo in aqua* is Jo 1:26 verbatim; *ille … baptizabit in Spiritu sancto* is the sense
  of Jo 1:33 / Mc 1:8. **Unattributed** (no `[n:]`), so there is no single host verse for a
  marker to name. Recorded here instead, exactly as the peer did with Gal 3:12/Lv 18:5 at 0443B.
- **0462C · *Judicia Dei abyssus multa*** — Ps 35:7 *judicia **tua** abyssus multa*. **Roman, not
  italic**, so it is not a lemma and Pattern 14 does not reach it (peer's §1.5 class).
- **0460B · *Si vobis seminavimus, etc.*** — 1 Cor 9:11 *Si nos vobis **spiritualia**
  seminavimus*. Roman, same class.
- **0463A · *Capite nobis **vulpeculas** quae **devastant** vineas*** `[n: (Cant. II)]` — Ct 2:15
  *Capite nobis **vulpes parvulas** quae **demoliuntur** vineas*. ⚠ **The one I came closest to
  marking**, because two content words differ rather than a particle. Declined: *vulpecula* is
  the ordinary diminutive of *vulpes parvula* and *devastant*/*demoliuntur* are the same act, so
  the proof-text proves exactly what it proves in the Clementine — the guardians of the vineyard
  catching the foxes. Nothing the gloss argues turns on either word. **Named here so a reader
  can disagree with me from the evidence.**
- **0463A · *Multi autem ex eis qui **curiosa fuerant sectati*.*** — Act 19:19 *qui **fuerant
  curiosa** sectati*. A transposition.
- **0463C · *Vox facta **est una** omnium*** — Act 19:34 *vox facta **una est** omnium*. A
  transposition of the copula. ⚑ The **numeral in the same lemma agrees**: *quasi per horas
  duas* is Act 19:34's own reading.
- **0464C · *Huic autem erant filiae.*** — Act 21:9 *Huic autem erant **quatuor** filiae
  **virgines prophetantes***. A clipped lemma that drops a number. ⚠ **Checked with care because
  a dropped numeral is the prize this brief names: the gloss does not reason from the four.** It
  argues only whether these were the daughters of Philip the apostle or of Philip the deacon.
- **0464D · *Cum autem septem dies,*** — Act 21:27 ***Dum** autem septem dies consummarentur*.
  *Cum* for *Dum*, and the verb clipped — but the gloss's first words are *Nondum consummati
  erant*, which shows he had the clipped verb in view. Same sense.
- **0465B · *Aemulator legis Dei existentis*** — announced *In Graeco*, §V3's class.
- **0465B · *Testimonium **illis perhibeo**, quod aemulationem Dei habent*** `[n: (Rom. X)]` —
  Rom 10:2 *Testimonium **enim perhibeo illis** quod*. A transposition and a trimmed connective;
  the citation itself is **correct** and was checked (§P3).
- **0466C · *Tremefactus,* etc., *et sperans.*** — *tremefactus* is Act 24:25, *et sperans* is
  Act 24:**26** (*simul et sperans quod pecunia ei daretur a Paulo*). Both agree with the
  Clementine; the verse address is §M3.
- **0467D · *Ut autem judicatum est **eum navigare**,*** — Act 27:1 *Ut autem judicatum est
  **navigare eum** in Italiam*. A transposition, and the gloss's whole point is the **Greek's**
  *nos* against the Latin's *eum*, which he states himself.
- **0468B · *Eramus universae animae.*** — Act 27:37 *Eramus **vero** universae animae **in navi
  ducentae septuaginta sex***. ⭐ **The shipwreck's number is clipped away, and the gloss does not
  reason from it** — it reasons from *animae* against *viri* (*Non ait viri, quia fortasse erant
  et mulieres*). A checked zero on the numeral the brief singled out. See §N.
- **0468D · *Salvavit eum.*** — Act 28:8 agrees exactly; recorded here only because the
  neighbouring *Dysenteria* vel *dysin* is §W3's candidate.

### V3 · Readings MIGNE HIMSELF ATTRIBUTES to another witness — no marker, by construction

Pattern 14 is for a quotation that diverges **without saying so**. These announce the divergence
in their own words, so a `[var:]` would tell the reader twice and blur whose observation it was —
the same logic as Migne's own `( sic )`, and the same treatment the opening stint gave its four.

- **0460A** *in Graeco: *Jasonem et **quosdam alios** fratres** — Act 17:6 *quosdam fratres*. The
  gloss's conclusion (*Unde intelligendum est Jasonem fratrem et fidelem fuisse*) rests on the
  Greek's *alios*, which is exactly why he cites it.
- **0460D** *In Graeco: *ex uno **sanguine*** — Act 17:26 *ex uno omne genus hominum*, no
  *sanguine*. He is reporting the Greek (ἐξ ἑνὸς αἵματος) and glosses it as such.
- **0461D** *In Graeco: *Apprehendentes omnes **Graeci** Sosthenem*.*
- **0465B** *In Graeco: *Aemulator legis Dei **existentis***.* Rendered "*A zealot of the law of
  the God that is,*" — see §R2 for the parse and its rival.
- **0465C** *Quaedam exemplaria habent: *Saul, Saul***, against his own lemma *Saule, Saule*. See
  §M2: **both forms are kept in the English**, because the gloss exists to distinguish them.
- **0461D / 0462A** *Alia translatio:* / *Alia editio:* — 0462A *Profuit multum credentibus*
  (against Act 18:27 *contulit multum his qui crediderant*), 0467D *ventus tempestuosus* for
  *Typhonicus*, 0465D *Ego multa summa*'s fuller edition, 0467B *Occidendisque detulit
  sententiam*, 0466C *servus* "as is had in other codices". **Six announced variants, none marked.**

### V4 · Lemmata checked and found to **AGREE with the Clementine exactly**

Named, because the brief requires it, and each fetched at its own verse.

**Act 17 (0014):** *Et de colentibus gentilibusque* · *Trahebant Jasonem* · *Regem alium* ·
*A Paulo* · *Profecti* · *Epicurei* · *Quid vult seminiverbius* · *Alii vero* · *Ad Areopagum* ·
*Ignoto Deo* (both occurrences) · *Deus, qui fecit mundum* · *Ex uno omne genus hominum* ·
*In ipso enim vivimus* · *Sicut et quidam vestrorum poetarum* · *Ipsius enim* · *Genus ergo* ·
*non debemus* · *Despiciens Deus* · *Fidem praebens omnibus* · *Dionysius*.
**Act 18 (0014):** *Eo quod praecepisset Claudius discedere omnes* · *Sanguis vester* ·
*Titi Justi, colentis Deum* · *Si vero quaestiones sunt de verbo* · *et nominibus* ·
*Qui sibi totonderat* · *Caesaream* · *Contulit multum*.
Also inline **Rom 11:36** *Ex ipso, et per ipsum, et in ipso sunt omnia* (verbatim — the
citation on it is misprinted, §P2) and **1 Cor 3:6** *Ego plantavi, Apollo rigavit* (verbatim).

**Act 19 (0015):** *Joannes baptizavit* · *Erant autem omnes* · *Quotidie disputans in schola* ·
*In schola tyranni* · *Per biennium* · *Semicinctia* · *Exorcistis* · *Septem filii* ·
*His autem expletis* · *Romam videre* · *In Macedoniam* · *Magna Diana Ephesiorum* (both) ·
*Alii autem aliud clamabant* · *Vox facta … quasi per horas duas clamantium* (but for the
copula, §V2) · *Neque sacrilegos, neque blasphemantes deam vestram* · *Et cum haec dixisset*.
**Act 20 (0015):** *Ad Graeciam* · *Una autem sabbati* · *Eutichus* (Clem. *Eutychus*,
orthographic) · *Cum descendisset Paulus, incubuit* · *Anima enim ipsius in ipso est* ·
*Pentecosten* · *Memoria retinentes* · *Beatius est*. Also inline **Mt 9:24** *Non est mortua
puella, sed dormit* (verbatim but for a trimmed *enim*).

**Act 21 (0016):** *Cum autem* · *Coum, Rhodum, inde Pataram* · *Philippi evangelistae* ·
*Haec dicit Spiritus sanctus* · *Dicens non debere* · *Neque secundum* · *Quia quae de te* ·
*Et cum venisset ad gradus* · *Graece nosti?* (his `?` included) · *A Tarso*. Also **Ex 20:17**
*Non concupisces*.
**Act 22 (0016):** *Natus in Tarso* · *Aemulator legis* · *Saule, Saule* · *Audierunt* ·
*Et ibi* · *Saule frater, respice* · *Praeordinavit te* · *Fieri me in stupore mentis* ·
*Consentiebam* · *Ego multa summa* · *Civilitatem*.
**Act 23 (0016):** *Percutiet te* · *Nesciebam, fratres* · *Quid si spiritus?* ·
*Ne discerperetur Paulus ab ipsis* · *Devoverunt se dicentes* · *Parate milites ducentos*.
**Act 24 (0016):** *Patri et Deo meo* · *Nisi de una hac* · *De suis ministrare* ·
*Tremefactus* · *et sperans* (at 24:26, §M3) · *Reliquit Paulum vinctum*.
**Act 25 (0016):** *Festus ergo cum venisset in provinciam* · *De quibus* · *Sua superstitione* ·
*Cum multa ambitione*.
**Act 26 (0016):** *Quid incredibile?* · *Detuli sententiam* · *Puniens eos* ·
*et amplius insaniens* · *Contra stimulum* · *Insanis, Paule* · *Multae te* · *Ad insaniam*.
Also **Ps 39:5** *Non respexit in vanitates et insanias falsas* — **verbatim, and the citation
`(Psal. XXXIX)` is correct**, which is worth saying in a book with three misprinted ones.

**Act 27 (0017):** *Adrumetinam* · *Venimus Lystram* (⚑ **checked with care: the Clementine also
reads *Lystram*, not Myra** — the gloss's *Pro Lystra, in Graeco Smyrna* is a note on the Greek,
not a divergence from the Latin) · *Jejunium* · *Portum* · *Ad Africum* · *Asson* ·
*Typhonicus* · *Euroaquilo* · *Syrtim* · *Oportebat quidem* ·
*In insulam autem quamdam oportet nos devenire* (verbatim, in full) · *In Adria* ·
*Sumere cibum*.
**Act 28 (0017):** *Pyra* · *Dysenteria* · *Salvavit eum* · *Puteolos* · *Audissent fratres* ·
*Conductu* · *Sine prohibitione*.

---

## §P · MIGNE'S CITATIONS — two misprinted, both left EXACTLY as printed

Identified **from the quoted words, never from the numeral**, per the standing rule. Neither is
touched in the text; both are referred to `citation-corrections.json` here. `refDisplay` keeps
what Migne set; only `refKey` resolves. **No `Ibid.` chain depends on either** (runbook false
positive 2 checked: there is no `Ibid.` anywhere in my four chunks).

1. **0460A — `[n: (Joan. XVIII)]`** on *Omnis qui se regem facit, contradicit Caesari*. The words
   are **Jo 19:12**, verbatim but for a trimmed *enim*. John XVIII is the arrest and the first
   interrogation and contains no such sentence; the words stand in the trial before Pilate, one
   chapter later. → `refKey` John.19.12.
2. **0460D — `[n: (Rom. II)]`** on *Ex ipso, et per ipsum, et in ipso sunt omnia*. The words are
   **Rom 11:36**, verbatim. Romans II is the judgment of the Gentiles and the inward Jew.
   → `refKey` Rom.11.36.

⛔ **Neither is a plate candidate.** The peers found the same class twice each in this book
(*(Matth. XXVIII)* for Mc 16:19, *(Zach. V)* for Zach 9:11, *(Matth. VI)* for Mt 5:10,
*(II Tim. II, 9)* for 2 Tim 2:19) and every one read at the plate this session proved Migne's
own. An abbreviated book-name or numeral in an `[n:]` is exactly the class where the plate goes
his way. **Four in the book, and mine make six.**

3. **Checked and CORRECT, recorded so nobody re-raises them:** `(Rom. X)` on Rom 10:2 ✓ ·
   `(Psal. XXXIX)` on Ps 39:5 ✓ · `(I Cor. III)` on 1 Cor 3:6 ✓ · `(Cant. II)` on Ct 2:15 ✓.

**One reference in Migne's PROSE, not in an `[n:]`, that is loose** — the author's own sentence,
rendered as written, no apparatus: **0461C**, *Non fuit hic Titus discipulus Pauli … cum quo et
Barnabas ascendens Jerosolymam, contulit Evangelium cum apostolis*. The episode is Gal 2:1–2,
where **Paul**, not Barnabas, is the subject and Titus is taken along. Migne makes Barnabas the
nominative. Rendered as printed; see §S for the unexpressed subject that follows from it.

---

## §W · PLATE CANDIDATES — RAISED, NEVER PATCHED, **NO MARKER FIRED**

Nothing in this section carries a marker, so **my four chunks assert nothing about the plate.**
Addendum A's split governs: a **non-word** is worth raising and has been our digitization's error
ten times out of ten; a **real, well-formed word that reads oddly is MIGNE'S** until a plate says
otherwise, refuted five of five.

### W1–W3 · Three NON-WORDS, all **rendered for their evident sense** per the launch ruling

| col | printed | read as | why the reconstruction is safe | rendered |
|---|---|---|---|---|
| **0461B** | *Sceno factoriae artis* (a lemma) | *scenofactoriae artis* | Word division. *sceno* is no Latin word standing alone, *Sceno* occurs **once in the whole corpus** (here), and the Clementine's Act 18:3 reads *scenofactoriae* as one word. The gloss expounds tent-making (*tentoria sibi … aedificant*). | "*Of the tentmaking craft.*" |
| **0468B** | *nomen cujusdam freti in **Tyrrhenc** mari* | *Tyrrheno* | A truncated adjective with no possible slot: *in … mari* wants the ablative. Corpus: *Tyrrhenc* 1 (here), *Tyrrheno* 1 elsewhere. | "in the Tyrrhene sea" |
| **0468B** | *et mare a Graecis dicitur **Thelasson*** | *Thalassan* | ⭐ **Self-controlled: the same gloss prints *Thalassan* eleven words earlier** (*Graeci Thalassan vocant mare*), and the lemma it is explaining is *Bithalassum*. One transliteration, two spellings, inside one abridged note. | "the sea is called by the Greeks Thelasson" — **both spellings kept as printed**, because the doubling is the evidence |

⚠ **None is patchable from the file**; a `data/tei-patches/8976.json` entry needs the plate.
⚑ **7a⁗ was run on each**: none of the three is a verb, a negation or a conjunction, and none
governs anything. Nothing is quarantined, because nothing was carried — under the launcher's
ruling the English says what Migne evidently meant and the crux says what he printed.

⛔ **What a plate read would change, stated so a reader can act on it.** If the plate prints the
sound word in any of the three, the fix is a tei-patch and the English is already right. If the
plate prints the broken run, a `[sic:]` becomes correct and should be added — and under
`cruces-0005.md`'s treatment the run would be carried instead. **Either way nothing in the
running text asserts anything false today.** PL 114 = archive.org `patrologiaecurs06saingoog`,
**PDF page = (column + 11) / 2** — cols 0461, 0468 are pp. 236 and 239 (0468 covers both W2 and
W3, so **one crop settles two of the three**).

### W4 · *Viri Atheniensis* (0460C) — a REAL word, no marker, and the reason is Pattern 9

Migne sets `VERS. 22, 23.-- *Viri Atheniensis,* etc.` where Act 17:22 reads *Viri **Athenienses***.
*Atheniensis* is a perfectly good form — the corpus has it as a true singular at 7017/0000
(*Solon Atheniensis*) — so it is a real word in an odd slot, not a non-word, and the standing
ruling is that it is **Migne's** until a plate says otherwise.

⚑ **And it takes no defect marker for a second, independent reason: English has no exponent for
it.** "Men of Athens" and "Athenian men" are both number-neutral in the adjective, so a rendering
cannot show the disagreement either way — Pattern 9's gender/number class exactly. Rendered
**"*Men of Athens,*"**, no italic Latin, no crux beyond this line.

### W5 · *Dysenteria* vel *dysin* (0468D) — kept as printed, and it is a NAME not a word

*dysin* is offered by Migne as an alternative **name** for the affliction, alongside
*Dysenteria*, and both are Greek in Latin dress. It is kept as printed and italic (Migne
italicizes it), on the same footing as *Adrumetis*, *Bithalassum*, *Euroaquilo* and *Asson* —
transliterated names are carried, not Englished. **Not raised as a non-word candidate**, because
a name has no "evident sense" for the launcher's rendering ruling to recover; if a plate reader
is at col. 0468 for W2/W3, a glance at band D would settle whether he prints *dysin* or
*dysenteria* a second time.

### W6 · ⭐ THE SUSPICIOUSLY TIDY FORMS — a checked list, and it came back **EMPTY**

Brief §4 and addendum §C: the digitization silently *corrects* as well as corrupts, and the only
handle is a form that reads too tidy in a rough neighbourhood. **I read the whole line around
each of W1–W3 and around all 92 `[n:]` sites** (addendum §C's discipline: examine the neighbours
in the same look), and found nothing of that shape in 3,553 words. **Recorded as a negative**,
because the class is only credible when the zeros are reported.

The two forms I looked hardest at and cleared:
- **0467B *interrogando*** in *etc., [0467B] interrogando, quasi dicat* — a bare gerund after an
  abridgment tail. It construes ("by way of questioning") and it is the ordinary ablative of
  manner. Not tidy, just terse.
- **0466A *civilitatem*** — a late but well-attested noun which the gloss then defines at length
  (*Id est socialem inter cives conversationem*). The definition is the control: he knew the word.

---

## §D · WHERE THE EVIDENCE POINTS AT **OUR FILE** RATHER THAN HIS PLATE — one candidate, weighed

The brief invites this reasoning explicitly, so here is the one place it was live, and why I
came down the other way rather than declining.

### D1 · 0467B, *detulit* for *detuli* — the OUR-FILE reading considered and REJECTED

The peer's model case is a divergence declined *because Migne's own next clause printed the word
correctly, making the dropped letter likely ours*. That shape is present here: **four lines below
the lemma Migne prints ***Detuli sententiam*** as his own second lemma**, in the first person,
and glosses it *Judicavi illos occidendos*.

**It loses, on two counts, and both are on the page.**
1. ***detulit* is printed TWICE, not once** — in the lemma and again in the *Alia editio* he
   quotes (*Occidendisque **detulit** sententiam*). A digitization that adds the same letter to
   the same word twice, eight words apart, and leaves the third occurrence alone, is a much
   worse account of the page than an editor printing what his copy had.
2. **The gloss's own work is to reconcile the two persons.** He quotes a third-person text, then
   paraphrases it in the first (*qualiter occiderentur **ipse sententiam dedi***), then
   re-lemmatizes the first-person form. That is a discussion of the variant, not a slip: the
   paraphrase exists precisely because the printed form does not say what Paul says.

**So the `[var:]` fires on the Clementine, which is a true and checkable claim, and nothing in
the English or the apparatus claims the plate is defective.** ⚑ **The rival is named because a
reader never sees the reading I rejected**: if a plate read shows *detuli* in the lemma, the fix
is a tei-patch and this `[var:]` comes out with it.

---

## §N · THE NUMBERS — every one checked, and they all hold

The brief named the shipwreck's numerals and place-names as the highest-value target in this
range. **The result is a checked zero, and here is the whole of it rather than the conclusion.**

- **0468B, Act 27:37 — the two hundred and seventy-six.** ⭐ **Migne clips the number away**
  (*Eramus universae animae*, no *ducentae septuaginta sex*) **and the gloss does not reason from
  it**: it reasons from *animae* against *viri*. There is nothing to diverge and nothing to mark.
- **0462C — the twelve and the hundred and twenty, with the arithmetic stated.** *in duodecim
  discipulos, et supra in centum et viginti (**qui numerus perficitur duodenario decies ducto**)*.
  12 × 10 = 120. ✓ **The gloss reasons from the multiplication and the multiplication is right.**
  Both numbers agree with Act 19:7 and Act 1:15.
- **0462C — the hours of Paul's day.** *Ab hora quinta usque ad horam nonam et decimam … horas
  operi quinque, alias quinque doctrinae, duas dabat cibo et orationi.* 5 + 5 + 2 = 12, and the
  teaching hours (the fifth to the tenth) are the five the sentence claims. ✓ Internally sound,
  and Migne himself flags that it rests on nothing (*quod nulla tamen auctoritate firmatur*).
- **0463A — the seven sons of Sceva** ✓ Act 19:14. **0463C — the two hours' shouting** ✓ Act
  19:34. **0462D — the two years at Ephesus** ✓ Act 19:10. **0466B — the two hundred soldiers** ✓
  Act 23:23. **0464D — the fourfold synod**, and four are actually enumerated ✓.
- **0464C, Act 21:9 — the four daughters**, clipped out of the lemma and not reasoned from (§V2).
- **0468C — the four virtues** of Bede's allegory (*sapientiae, fortitudini, temperantiae et
  justitiae*): four named ✓.
- **0468D — the fasts.** *jejunium septimum … in quo occisus erat Godolias* ✓ (Gedaliah is killed
  in the seventh month, 4 Rg 25:25 / Jer 41:1) and *dies jejunii decimi in Januario, quando
  cognoverunt in Babylone captivi templum esse destructum* ✓ (the tenth-month fast, and the news
  reaching the exiles, Ez 33:21). **Both attach to the right month.** Nothing to mark.
- **0461B — Josephus's *nono anno Claudii*** for the expulsion of the Jews. Not resolvable from
  anything on disk, and the gloss does not compute with it. Rendered as printed, raised here.
- ⚠ **0470A — *Post passionem Domini vigesimo quinto anno*, the LAST gloss in the book.** It sits
  in an abridgment head (*etc., usque ad Petrus et Paulus martyrio coronati sunt*), so the words
  that would have reasoned from it are the ones the formula removed. **Rendered as printed, and
  flagged**: this is the one numeral in my range I cannot check against anything, and it is the
  one a reader is most likely to query, since the received chronology puts the two martyrdoms
  more than thirty years after the passion. **No marker: there is no witness to compare it to,
  and `[var:]` is for scripture.**

**Place-names of the voyage, form for form as Migne sets them, none normalized:** *Adrumetis*
(not Adrumetum) · *Lystram* (not Myra — and it is the Clementine's own word) · *Smyrna* and
*Myrrham*, the two names the gloss reports from the Greek and from Jerome · *Asson* · *Syrtis* ·
*Adria* · *Puteoli* · *Coum, Rhodum, Pataram* → Cos, Rhodes, Patara · *Phoenice* · *Creta*.
**Wind-names kept Latin** — *Africus*, *Corus*, *Euroaquilo*, *Boreas*, *aquilo* — see §M6.

⚠ **Two geographical claims of Migne's that are simply wrong are rendered as printed and marked
nowhere**, because they are what he asserts and the fourth test's question is whether the English
asserts it too: **0461D** *Caesarea metropolis est Cappadociae* (Act 18:22's Caesarea is the
maritime one, in Palestine) and **0469A** *Puteoli locus est ultra Romam* (Puteoli is south of
Rome, not beyond it). **0464C** *Cous et Patara insulae sunt* is a third: Patara is a Lycian city,
not an island. None is a textual defect and none takes a marker.

---

## §M · THE HOUSE CONVENTIONS AS APPLIED

### M1 · The mirror rule — its ruled scope, and the two words that tested it

- ***Ecclesia*** stands **capitalized at all three of its occurrences** in my range (0461B
  *rexit Ecclesiam*, 0463A *custodibus Ecclesiae*, 0466B *Christi et Ecclesiae*) and all three
  render **the Church**. There is no lower-case *ecclesia* in cols 0460A–0470A. Nothing to
  adjudicate — recorded as a checked negative.
- ⭐ ***spiritum* at 0462C is LOWER-CASE and is mirrored.** *In quo ostenditur illos tantum …
  **spiritum** replere, qui sunt in catholica unitate* — against *Spiritus sanctus* capitalized
  two lines above in the same paragraph. Rendered "**the spirit** fills only those … who are in
  catholic unity". ⚠ **It reads oddly and it is deliberate**, on `cruces-0000.md` §V's ruling
  (which found the same alternation at 0430A and 0427A) and `cruces-0005.md` §S1's (0444D). **My
  range has exactly this one lower-case site**, against ten capitalized *Spiritus*; a later
  sweep that capitalizes it would destroy something the plate makes. Also lower-case and
  mirrored: **0466A–B** *sadducaeos **spiritum** non confiteri* and *Pharisaei **spiritum**
  nominant* → "a spirit", where English would take the indefinite article anyway.
- ***apostolus* NOT mirrored**, following `cruces-0005.md` §M1 and on fresh evidence of my own:
  my range prints lower-case *apostoli* (0460A, *Apostoli vero contradicebant* is
  sentence-initial), *apostolis* (0461C, 0464B), *apostolos* (0463A) against capitalized
  **Apostolus as Paul's title** at 0462A and 0466A (*sed inspiratione divina dixit Apostolus*).
  **The title is capitalized and rendered "the Apostle"; the plural is not.** That is the same
  distinction the peer drew, reached independently here.
- **Mirrored where the case is semantic and his practice is consistent:** *Propheta* (0467C) →
  the Prophet · *Scripturarum* (0463D) → the Scriptures · *Judaei*, *Graeci*, *Christiani*,
  *Sadducaei*, *Pharisaei* → capitalized as printed · *Testamenta* (0463D), *Novi Testamenti*
  (0464D) → the Testaments, the New Testament · *Evangelio* (0460A, 0464B) → the Gospel.
- **NOT mirrored where English has no lower-case option**: *Spiritu sancto* → the Holy Spirit,
  *Deum*, *Dominus*, *Trinitatis*.

### M2 · ⭐ *Saule, Saule* — the ONE lemma left in Latin, and why the convention requires it

`VERS. 7.-- *Saule, Saule.* … Quaedam exemplaria habent: *Saul, Saul,* ut ostendatur de nomine
Saulis Saulum nominatum esse.` **The gloss exists to distinguish two forms of one name**: the
declinable *Saulus* (vocative *Saule*) against the indeclinable Hebrew *Saul*. Englishing the
lemma collapses both into "Saul, Saul" and the sentence explains nothing.

So the lemma is rendered **"*Saule, Saule.*"**, the variant **"*Saul, Saul,*"**, and the
conclusion "that it may be shown that **Saulus** was named from the name of **Saul**". This is
the Song-of-Songs case 2 exactly (*where the gloss IS the etymology, an English word sharing no
root makes the gloss explain nothing*), and it overrides the corpus control the peer ran
(Saul 187 : Saulus 1) **for this paragraph only** — every other *Saulus* in my range is **Saul**.
⚠ **Declared, not smuggled**: if the merge prefers a fully Englished lemma here, the cost is the
paragraph.

### M3 · The verse addresses, reproduced as printed

- **Every VERS. number in my four chunks is in ascending sequence**, chapter by chapter:
  XVII 4·6·7·13·15·18·19·22,23·24·26·28·29·30·31·34 · XVIII 2·3·6·7·15·18·22·27 ·
  XIX 4·7·9·10·12·13·14·19·21·22·28·32·34·37·40 · XX 2·4·7·9·10·16·31·35 ·
  XXI 1·8·9·11·21·24·27·35·37·39 · XXII 3·7·9·10·13·14·17·20·28 · XXIII 3·5·9·10·12·23 ·
  XXIV 14·21·23·25·27 · XXV 1·18·19·23 · XXVI 8·10·14·24 ·
  XXVII 1·2·5·9·12·13·14·17·21·26·27·34·37·41 · XXVIII 2·8·13·15·30·31.
  **No displaced number in this range** — a checked negative, since a sibling stint found several.
- **`VERS. 22, 23.--` at 0460C is a double address**, and both lemmata under it are correct
  (*Viri Atheniensis* is 17:22, *Quod ignorantes colitis* is 17:23). The third lemma in that
  paragraph, *Nova quaedam infers*, is **Act 17:20** — a mid-gloss second lemma reaching back,
  which convention does not address by its own `VERS.` Not a mis-numbering; recorded so the
  merge does not read it as one.
- **`VERS. 25` at 0466C** covers *Tremefactus* (24:25) and *et sperans* (24:**26**), and Migne's
  own gloss joins them deliberately (*Sic junge: tremefactus et sperans*). Same class.
- **`VERS. 4` at 0463D**, *Sosipater*, is Act 20:4 ✓. **`VERS. 30` at 0470A**, *Conductu*, is Act
  28:30 ✓ — and it is the last verse address in the book.
- **Every `VERS.` is well formed** (`VERS. n.-- `), with none of the malformed `VERS 34.--` the
  peer found at 0443A.

### M4 · ⭐⭐ THE SITE THE OPENING STINT PREDICTED — found, mirrored, and **the plate has since answered its twin, which changes what I think mine is**

⚠ `cruces-0000.md` §2.4 raised a full stop followed by a lower-case word at 0435B, mirrored it,
and recorded that it is **"the only `. [a-z]` in all eighteen chunks of this work except one at
0015."** ⭐ **That one is here, and this is it:**

**0462A–B** — *sicut circumcisio in patriarchis signaculum fidei quam habebant **fuit. ita** et
hoc lavacrum populus poenitens quasi signaculum suae devotionis accepit.* Mirrored: "…was a seal
of the faith which they had. so also the penitent people received this washing as a seal of
their devotion."

⛔⛔ **AND THE TWIN HAS NOW BEEN READ AT THE PLATE, AND IT WAS NOT WHAT ANYONE GUESSED.**
`data/tei-patches/8976.json` (commit `ae9ea49`, written this session and **deliberately not yet
applied** because agents were reading `src/latin/8976`) records the answer at 0435B: **Migne
prints a COLON there, not a full stop.** A colon before a lower-case word is ordinary, so **the
sentence was never his defect — the mark is OURS**, and the same read turned up a second lost
colon (become a spaced hyphen) and a normalization (*Chistus* tidied to *Christus*) in the same
line.

⚑ **The consequence for my site, stated as a prediction so it can be checked cheaply:** *fuit.
ita* is very probably **the identical class — a colon of Migne's that our transcription turned
into a full stop** — and not a lower-case sentence opening at all. Three things point that way,
and none of them is the resemblance alone:

1. **A colon is exactly what the sentence wants.** *sicut circumcisio … fuit **:** ita et hoc
   lavacrum … accepit* is a *sicut … ita* correlative, and Migne's colon before the answering
   member is his ordinary practice — my range prints 22 colons of his in 0014–0015 alone.
2. **His habit of continuing lower-case after a mark is documented right here**, in M4a below:
   eight `? [a-z]` sites in this work, six of them mine. Lower case after a mark is unremarkable
   in this book; **a full stop before one is the thing that is odd**, which is why the odd item
   is the mark and not the capital.
3. **The two sites are the entire population** of `. [a-z]` in eighteen chunks. A defect class
   with exactly two members, both at a *sicut … ita*-shaped hinge, in one transcription, is one
   mechanism, not two coincidences.

**So: the English stays mirrored and NOTHING is repaired here** — I have no plate, and a
translator patching a Latin chunk on a resemblance is precisely what the patch file's own
"prove it before patching" rule forbids. **What I am handing over is a one-crop question with the
answer already half-known**: PL 114 **p. 237 = cols 461/462** (re-calibrated the same way the
existing patch was, `page = (column + 11) / 2`, and the patch file's own p. 223 = cols 435/436
confirms the map). If the plate prints *fuit : ita*, the fix is a second entry in
`data/tei-patches/8976.json`:

```
"find":    "quam habebant fuit. ita et hoc lavacrum",
"replace": "quam habebant fuit : ita et hoc lavacrum",
```

…and **my English full stop must become a colon in the same commit**, which is a one-character
edit to `src/english/8976/0015.md`. ⚠ **Note the ordering constraint the patch file already
states**: applying a patch means re-chunking, so this belongs with the existing 0435B entry,
after the last Acts stint lands — **and I am the last Acts stint, so that gate is now open.**

⚑ **And addendum C says to read the neighbours in the same look.** When someone crops col. 0462
for this, the same page carries §W1's *Sceno factoriae* (col. 0461) and §R1's *aurum ex argentum*
(col. 0461) — **three of my open questions on one crop** — and the 0435B read is the reason to
expect a fourth nobody has flagged: **I searched my four chunks for the spaced-hyphen tell that
read turned up and there is none** (zero ` - ` in cols 0460A–0470A), which is a checked negative
worth having.

#### ⛔ M4a · AND THE `? [a-z]` CASES ARE **NOT** THE SAME CLASS — I nearly filed them as one

My first draft of this section named a second site, **0469A** *Christiani Romae habitantes
**unde? patet** Paulum non primo praedicasse Romanis*, as a companion anomaly. **It is not one,
and the control is what shows it.**

⚑ **A control has to be the same class as the thing it controls.** Scanning the work for
`? [a-z]` returns **eight** sites, six of them in my own four chunks: 0015 *baptizaretur**? cum***
· 0016 *te esse**? ego*** · *apud vos**? etc.*** · *quid dicis**? incredibile*** · 0017
*relinquat**? nisi*** · *unde**? patet***, plus two in the peer's range at 0005. **Continuing
lower-case after a question mark is Migne's ordinary practice in this book, not a defect** — and
against it, `. [a-z]` stands at **two sites in eighteen chunks**, which is what makes that one an
anomaly worth a crop.

**All eight are mirrored in the English anyway**, because Pattern 8 governs the marks and nothing
licenses recasting the sentence that follows one. But **they are recorded here as a checked
NON-defect**, so that nobody spends a plate read on them and nobody reads the mirroring as our
slip. ⚑ **Had I filed them beside the `. [a-z]` case, I would have manufactured an inconsistency
that is not there** — the 2026-08-19 addendum's exact failure, and three readers made it in one
batch.

### M5 · Two mid-italic oddities, reproduced

**0460A** — `*Trahebant Jasonem. [n: (BED.)]* in Graeco: …`. The note sits **inside** the italic
run and the sentence that follows it opens with a lower-case *in*. Reproduced exactly:
"*They dragged Jason. [n: (BED.)]* in the Greek: …". Same class as M4, smaller — and here too the lower-case is mirrored rather than tidied.
**0462D** — `*Semicinctia [n: (RAB.)]*`, with **no period** before the note where every other
lemma in the range has one. Reproduced exactly.

### M6 · `usque ad` — CENSUSED PER OCCURRENCE, and the census is 16 tokens, **15 formula, 1 not**

Decided from what stands on either side, never by rule (addendum §D).

**The abridgment formula (15), rendered *as far as*:** 0460C · 0460D · 0461C (0014, three) ·
0463A ×2 · 0463D ×3 · 0463D/0464A (0015, five) · 0464D · 0465A · 0465B · 0466A · 0467B (0016,
five) · 0468B · 0470A (0017, two).

⛔ **NOT the formula (1), and it is the trap:** **0462C**, *Ab hora quinta **usque ad** horam
nonam et decimam* — an ordinary prepositional phrase in **roman**, inside a gloss about how Paul
divided his day, and the sentence goes on to compute from it. Rendered "**From the fifth hour
until the ninth and the tenth**". ⚑ Confirmed mechanically: `grep "as far as"` returns **15**
across the four English chunks and `grep "usque ad"` returns **16** across the four Latin ones.

⚑ **No verb was ever supplied to complete a formula tail**, and each tail was parsed as strictly
as ordinary prose (the *ferias* discipline). Three needed it:
- **0461C** *…etc., usque ad et a ventis insidiarum verbo et opere **defendit*.** The verb has no
  expressed object; the abridgment took it. Rendered "and by word and deed **protects from** the
  winds of snares" — an intransitive English construction, so **nothing is supplied**.
- **0460D** *…usque ad quia quid non ex ipso de quo dicitur: Ex ipso… omnia**?*** The tail keeps
  its question mark, and it is the tail's own. See §T3.
- **0470A** *…usque ad Petrus et Paulus martyrio coronati sunt.* A complete clause; the head
  (*Post passionem Domini vigesimo quinto anno*) is the fragment. Rendered as it stands, abrupt.

### M7 · Lemma expansion — both classes stated, so the contrast is not misread

Per the 2026-08-19 addendum, **a control has to be the same class as the thing it controls.**

- **Clipped lemmata left as legible stumps** (nothing elided that English needs; the Latin stands
  opposite): *A Paulo.* → "*By Paul.*" · *Profecti.* → "*They departed.*" · *Alii vero.* →
  "*But others.*" · *Genus ergo,* etc. → "*Being therefore,* etc." · *Ipsius enim,* etc. →
  "*For his,* etc." · *Erant autem omnes.* → "*And they were all.*" · *Contulit multum.* → "*He
  helped much.*" · *De quibus,* etc. → "*Of whom,* etc." · *Neque secundum.* → "*Neither
  according to.*" · *Oportebat quidem,* etc. → "*It behoved indeed,* etc." · *Portum,* etc. →
  "*A haven,* etc." · *Cum autem,* etc. → "*And when it came to pass,* etc."
- **Clipped lemmata expanded, because the stump is not English at all**: *Quia quae de te,* etc.
  → "*That the things which they have heard of thee,* etc." (a bare relative with no verb) ·
  *Multae te.* → "*Much learning doth turn thee.*" (a bare adjective and pronoun; the verb
  supplied is Act 26:24's own *convertunt*, which is what convention 3 means by "the phrase it
  stands for") · *Ad Areopagum.* → "*To the Areopagus.*" · *Sine prohibitione.* → "*Without
  prohibition.*"

⛔ **Contrasting the two lists manufactures an inconsistency that is not there** — the first
group has nothing elided that English needs, the second does. Ruth's convention 3 governs both.

### M8 · Four glosses where the Latin word had to survive into the English

The Song-of-Songs case 2 (*where the gloss IS the etymology, an English word sharing no root
makes the gloss explain nothing*). Each adds one italic span the Latin does not have, and each
is declared here rather than left to look like drift:

- **0460B, *sermologus*.** *vel seminiverbius, id est **sermologus*** — a Greek-formed coinage
  offered as a synonym for *seminiverbius*. Kept Latin. The lemma itself is **rendered**:
  *seminiverbius* → "**word-sower**", because the gloss's own definition (*qui verbum seminat*)
  carries into English intact and Douay's "babbler" would delete it. ⚑ **That is a conformation
  refused**, in miniature.
- **0461B, *pagus*.** *Areopagus … nomen trahens a Marte, qui Graece Arios dicitur, **pagus**,
  villa.* The word being decomposed cannot be its own translation; *villa* is rendered "a
  village". So: "…who in Greek is called Arios, *pagus*, a village."
- **0463C, *sacrum*.** *Sacrilegi dicuntur a profana diligentia. **Sacrum** enim mundum et
  profanum significat.* Kept, because the whole sentence is about the Latin word's double sense.
- **0467A, *ambitio* / *phantasia*.** *Pro **ambitione** in Graeco ponitur **phantasia***. Both
  kept — a statement about which word each language sets.

⚑ **And the four places where the Latin did NOT need to survive**, recorded so the treatment
does not look arbitrary: *Typhonicus* → "*Typhonic.*" with *ventus tempestuosus* → "a tempestuous
wind" (the second is a description, not an etymology) · *Syrtim* → "*Syrtis*" with *angustia sive
tribulatio* Englished · *amens*/*fortunatus* (0463D, glossing *Eutichus*) → "*out of his mind*" /
"*fortunate*" · *caedens*/*occidens* (0465D) → "**he that strikes**" / "**him that kills**",
because English carries that distinction with no help from us.

### M9 · Three lemmata rendered AGAINST the familiar English Bible, deliberately

The 11551 *stylus* failure in miniature, three times. Each is a place where Douay's word would
have made the gloss explain nothing.

1. **0462D, *Semicinctia*** → "***Half-girdles***", not Douay's "aprons". The gloss's second
   definition is *vel **zonae*** — "or girdles" — and only a rendering that keeps the girdle in
   the lemma lets the alternative be an alternative.
2. **0467A, *Cum multa ambitione*** → "***With much ambition***", not Douay's "with great pomp".
   The gloss defines it as *multa turba **ambiente** eos*, "a great crowd **going about** them",
   which is the *ambi-* root doing the work; and *pompa* is a different word in the same
   sentence (*pompa regalis officii*), which "pomp" would have collided with.
3. **0470A, *Conductu*** → kept as "***Conductu***", not "in his hired lodging". Migne glosses it
   *in libera custodia per quam **conducebatur***, reading the noun from *conducere* "to lead" —
   and "hired" shares nothing with "conducted". The one lemma besides *Saule, Saule* that stays
   Latin, and for the same reason.

⚑ Also resisted, and recorded because the familiar English arrived first in my own reading before
the collation caught it: **0460B *Quid vult seminiverbius*** wanted Douay's "babbler" (see M8);
**0468B *Eramus universae animae*** wanted "we were in all two hundred threescore and sixteen
souls", which is a number Migne does not print (§N).

---

## §S · THE UNEXPRESSED SUBJECT — every supplied pronoun, named

The measured dominant defect class. Each site is a "he/she/it/they" the Latin does not print.
Where two readings both construe I say so rather than choosing silently.

- **0460A · *Apostoli vero contradicebant Christum regem esse Judaeorum*** → "But the apostles
  spoke **against it**, that Christ was king of the Jews". ⚠ **Both the object and the verb's
  force are open, and I did not resolve them.** (a) *contradico* + acc.-inf. normally means "to
  deny that", which would make the apostles deny Christ's kingship — and the appositive *id est
  confitentium* then explains nothing and the closing *unde et Judaei ipsum Christum accusabant*
  has nothing to follow from. (b) Migne is playing on the *contradicit Caesari* he has just
  quoted, and the apostles are **answering back**, asserting a kingship over the confessing
  rather than over the nation — which is what makes the Jews' accusation of Christ follow. **I
  supplied a bare "it" and the neutral "spoke against", which carry (b) without excluding (a).**
- **0460D · *docet esse*** → "**he** teaches" — Paul, from *Nota ordinem hujus disputationis*.
- **0461A · *loquitur*, *conservat et confirmat*, *ne nova videatur inferre*** → "**he** speaks",
  "**he** preserves and confirms", "lest **he** should seem" — Paul throughout; the paragraph is
  the Areopagus speech and *Sicut et quidam vestrorum poetarum* is his sentence.
- **0461A · *statuit judicare*** (0461B) → "**he** has appointed to judge" — God, from *Despiciens
  Deus* two lemmata above.
- **0461C · *contulit Evangelium cum apostolis, inquirens … an recte praedicaret*** → "**Barnabas**
  … conferred the Gospel with the apostles, inquiring … whether **he** preached rightly". ⚠
  **Migne makes *Barnabas* the nominative**, so *contulit* is his; but Gal 2:1–2, which he is
  summarizing, makes Paul the one who goes up and lays out his gospel, and *praedicaret* has no
  expressed subject at all. **Both construe; I followed the printed nominative and left
  *praedicaret* to take it, and did not resolve the second.** See §P's closing note.
- **0461D · *Nondum enim in Syriam Phoenicis venerat*** → "**he** had not yet come" — Paul.
- **0462A · *Hanc prius non viderat forsitan*** (0463B) → "Perhaps **he** had not seen **it**" —
  Paul, and *Hanc* is Rome, from the lemma *Romam videre*.
- **0462B · *quia in fide Trinitatis*** → "because **it is** in the faith of the Trinity". The
  Latin has no verb; English cannot leave the clause verbless. **Named because it is a supply.**
- **0463A · *ostendit de quibus custodibus Ecclesiae praecipitur*** → "**he** shows" — Bede, whose
  siglum opens the note.
- **0463B · *Transire volebat*** → "**He** wished to pass" — Paul, from *In Macedoniam*.
- **0463C · *Hoc loquitur quasi Judaeus … aut quasi Christianus locutus est*** → "**He** speaks
  this as a Jew … or **he** spoke as a Christian" — the town clerk of Act 19:35, who is the
  subject of *Et cum haec dixisset* in the lemma. ⚠ Not Paul: the whole point is that the
  speaker is the Ephesian *scriba*.
- **0463D · *transit autem a Macedonia et Achaia ire Jerusalem*** → "**he** passes" — Paul.
- **0464A · *redivivus adducitur*** → "**he** is brought back alive" — Eutychus, from the lemma.
- **0464B · *Non illis … praeponit … sed illos maxime glorificat*** → "**He** does not prefer …
  but **he** chiefly glorifies" — Paul, whose *Beatius est* is the lemma; the note's own closing
  address (*Vos igitur episcopi*) is a second voice inside the same abridged extract and is left
  as printed.
- **0464C · *meruit vocari*** → "**he** deserved to be called" — Philip, the lemma.
- **0465A · *Non enim ita reprobas … si autem ideo celebraret … non hoc diceret Jacobus*** →
  "**thou** dost not reject … but if **he** celebrated … **James** would not say this". ⚠ **The
  person shifts inside the sentence and it is Migne's**: *reprobas* is second singular (James
  speaking to Paul, which is the situation of Act 21:24), *celebraret* third. Rendered with the
  shift intact; see §T4.
- **0465B · *Quo captus cum parentibus commigravit*** → "Whither, having been taken captive,
  **he** migrated with his parents" — Paul.
- **0465D · *notat quia non occidit*** → "**he** notes that **he** did not kill" — Paul, the
  speaker of *Consentiebam*, in both places.
- **0466A · *stipabatur*** → "**she** was thronged on every side" (0467A) — **Bernice**, from
  *illam* in the same ablative absolute and from Act 25:23's *Agrippa et Bernice*. ⚠ *illam* is
  accusative, so the passive's subject is genuinely unexpressed; the feminine of *illam* and
  *ambiente* is what fixes it.
- **0466B · *quia hoc noverant contrarium esse illis*** → "because **they** knew this to be
  contrary to them" — the Pharisees, the nearest nominative.
- **0466C · *dimisit eum liberae custodiae*** → "**he** dismissed him" — Felix.
- **0467B · *Suscitavit quidem ante mortuos … vel suscitat*** → "**he** raised up the dead
  before … or **he** raises them up" — God, from *si Deus mortuos suscitat* in Act 26:8, which is
  the clause the lemma clips.
- **0468B · *quod supra hortabatur eos Paulus*** — **no pronoun supplied**; Migne names Paul.
- **0468C · *portum salutis consequitur*, *quaerat*** → "**he** attains … **he** may seek" — the
  *qui* of *nisi qui pane vitae pascitur*, carried through the whole period.
- **0469A · *destruxerunt, et aedificia mutilaverunt*** → "**the men of Salerno** … destroyed" —
  Migne names them (*Salernitani*).
- **0470A · *contra Judaeos disputabat*** → "**he** disputed" — Paul; the book's last clause.

---

## §R · REAL WORDS THAT READ ODDLY — rendered as printed, **every marker declined**

Per the standing rule (refuted five of five), a real, well-formed word that reads oddly is
**Migne's** until a plate says otherwise.

### R1 · 0461A · *aurum **ex** argentum* — the one that came nearest a `[cj:]`, and it is declined

> *Homo in medio est, habens Deum superiorem, **aurum ex argentum**, cum caeteris hujusmodi
> inferiora, quae non debent ei comparari.*

*ex* is a real preposition and it governs the ablative; *argentum* is accusative, so **the phrase
cannot construe as printed**. The conjecture is *et* — "gold and silver" — and it is near-certain
from the sense (man in the middle, God above, metals below).

⛔ **Declined, and here is the bar it fails.** Pattern 18a's test is whether the printed word
makes the sentence **assert something the author is arguing against**. *aurum ex argentum*
asserts nothing at all: it fails to construe, which 18a explicitly leaves outside the ruling
("mood, voice, number and person anomalies that merely fail to construe stay declined", 11064
@1154C the named parallel). A preposition governing the wrong case is that class, not the
negation-or-correlative class the 2026-08-15 extension admits.
**Rendered as closely as the printed words allow**: "gold from silver, with the rest of this kind
as lower". ⚑ **The rival, named because a reader never sees what I rejected:** the other reading
is that our digitization lost the *t* of *et* — a tei-patch, not a conjecture — and it loses only
because I cannot read the plate. Col. 0461 is page 236, the same crop W1 wants.

### R2 · 0465B · *Aemulator legis Dei **existentis*** — rendered, marker declined, rival named

*existentis* is a genitive singular participle and the only genitives near it are *legis* and
*Dei*, so it must agree with one: "a zealot of the law of the **God that is**". **The rival is
that it is a calque of the Greek's nominative ὑπάρχων** ("being a zealot for the law of God"),
which the Latin's case forbids but which the Greek behind Migne's own *In Graeco* would support.
**It loses because the case is printed and the case decides**; rendering it as a nominative
would be reading through the Latin to a Greek the page does not print. Rendered as printed, no
marker.

### R3 · Rendered literally, no marker, reasons given

- **0466A, *Non enim tribunus … civis esse **non** posset, sed…*** A double negative that
  construes perfectly ("it is not that he could not be"), and both negatives are carried on their
  own hosts. **Not a defect**; recorded because a count-based check will flag the pair.
- **0468D, *hoc autem **non indigebant***.** A plural verb with *hoc* accusative, where *indigere*
  usually takes the genitive or ablative. Attested with the accusative in later Latin; rendered
  "but these did not need this". Pattern 9 (attested medieval usage), no crux beyond this line.
- **0461D, *Nunc nimirum declarato et narrato, id est Evangelio*.** An ablative absolute with no
  expressed noun; the antecedent is *verbo*, carried over from the lemma *de verbo* four words
  earlier. Rendered as elliptically as it stands ("Now indeed declared and narrated, that is, the
  Gospel"), **nothing supplied**. ⚑ The alternative — supplying "the word" — was rejected as the
  kind of quiet completion the abridged books invite.
- **0466C, *jussit non prohibere quemquam ministrare ei de suis rebus*.** *quemquam* is the object
  of *prohibere*, not its subject; rendered "he commanded that no one be forbidden to minister to
  him", which keeps the negation on *prohibere* where Migne prints it.
- **0463D, *ut sit praeparatio virtutis faciendae et dicendae*.** *virtus* here is the moral one,
  so **"virtue"**, per `cruces-0000.md` §V's per-occurrence rule. (The other three *virtus*-family
  words in my range: 0463A *signa faciunt* is not one; there is no *virtus* meaning "miracle" in
  cols 0460A–0470A. A checked negative on the one term this work varies.)

---

## §T · THE TESTS, AND WHAT EACH RETURNED

### T1 · A `[sic:]` must not swallow the word it marks

**Vacuously clean: zero `[sic:]` in the range**, and zero `[cj:]`, `[d:]`, `[ed:]`, `[nt:]`.
The English was nevertheless read once **with every marker stripped**, which is the mechanical
form of the test: no stranded article or preposition sitting on punctuation, no doubled mark,
every sentence readable aloud. ⚑ The four `[var:]` were checked against the fourth question 7a⁗
does not ask — **does the clause still have the thing it acts on?** — and all four sit **beside**
complete renderings (*Sosipater*, *Do not receive gold*, *he brought the sentence*,
*Bithalassum*), none inside one.

### T2 + T2a · Every printed negative named to its single Latin host

**Eighty-six negative particles** across the four chunks (0014 ×18 · 0015 ×18 · 0016 ×41 ·
0017 ×9, counted per occurrence and not per line, taking *non · nec · neque · nisi · nullus · nihil · ne · nondum · nemo*), extracted
mechanically with context and then **each located in the English and checked to be ON its host**,
not merely present.

The 2a trigger population — a negative resting on a verb with a **quantifier, correlative or
predicate** adjacent — fired **twelve** times. Each host was proved from the sentence's own
structure, never from what reads well:

| col | Latin | the host, proved from | English |
|---|---|---|---|
| 0460D | *ut **non solum** pro luce et vita, **sed etiam** pro cognatione generis* | `non solum … sed etiam` | "not only for light and life, but also for the kinship of race" |
| 0461A | *His qui prophetas non recipiebant, **non Moysi, non Isaiae** … **sed** auctorum suorum loquitur testimonium* | the `sed auctorum suorum` answers the **genitives**, not the verb | "he speaks the testimony, **not of Moses, not of Isaias** … but of their own authors" |
| 0461A | *non de divina pagina, ne nova videatur inferre* | *de divina pagina*, answered by *De Arato poeta hoc sumptum est* in the same sentence | "not from the divine page" |
| 0461C | *ut **non solo verbo** terreat* | ⭐ **the quantifier, not the verb**: *solo* is what the sentence limits, and *vehementius disserit* follows as the second means | "that he may terrify **not by word alone**" |
| 0461C | *non quia ipse de hoc dubitaret, **sed ut** mentes … confirmaret* | the whole `quia`-clause, named by `sed ut` | "not because he himself doubted of this, but that he might confirm" |
| 0462A | *Non peccata Joannes suo baptismate remisit, **sed** poenitentiam docuit* | the whole *peccata … remisit*, named by `sed … docuit` | "John did not remit sins by his baptism, but taught penance" |
| 0463B | ***videre tantum** dicit, non autem multa pati* | *multa pati*, answered by *tantum dicit* | "he says only *to see,* and not to suffer many things" |
| 0464A | *Id est **non ex toto** discessit, vel rediit* | ⭐ **the quantifier *ex toto***: the gloss's point is that the soul **partly stayed** — *Anima enim ipsius in ipso est* is the lemma | "it did not wholly depart" (scoped, **not** "it wholly did not depart") |
| 0464B | ***non enim omnia** scripta sunt* | ⭐ *omnia*: the argument is that the Gospel is not exhaustive | "**not all things** are written" |
| 0464B | *Non illis qui relictis omnibus secuti sunt Dominum … praeponit, **sed** illos maxime glorificat* | *praeponit*, named by `sed … glorificat` | "He does not prefer … but he chiefly glorifies" |
| 0465A | *Non enim **ita** reprobas legalia **sicut** dictum est* | ⭐ the `ita … sicut` correlative: the denial is of the **manner**, not of the rejecting | "thou dost not reject the legal observances **in the manner that** has been said" |
| 0469A | *patet Paulum **non primo** praedicasse Romanis* | ⭐ **the adverb *primo***: the sentence's own premise is the question *Christiani Romae habitantes unde?* — there **were** Christians at Rome before him | "Paul was **not the first** to preach to the Romans" |

⚑ **0469A is the one that would have beaten test 2 on its own.** The plausible wrong reading is
"Paul did not preach to the Romans at first", which is grammatical, reads better, and asserts
something the paragraph denies: the gloss's whole work is to explain how there were Christians at
Rome already. The host is proved by the question, which is structure, not sense.
⚑ **0464A is the Esther shape** — a negative correctly attached and still liable to land in the
wrong place in English word order. "It wholly did not depart" and "it did not wholly depart" are
both English and only one of them is what *Anima enim ipsius in ipso est* says.

### T2b · Every anchor checked against the WORD it stands beside

All **39** anchors (9 + 9 + 13 + 8) were printed with their Latin context and the matching English
context and compared one by one. **Zero displaced.** Seven are deliberate mid-construction splits
matching Migne's, and one was **repaired during drafting**:

- **0460C** *vel Judaei sunt [0460C] qui hoc dicunt* → "or it is the Jews [0460C] who say this".
- **0460D** *unum Deum auctorem [0460D] mundi omnium* → "one God is the author [0460D] of the
  world, of all things".
- **0461B** *fidem praebens omnibus quod [0461B] resurgent* → "giving faith to all that [0461B]
  they shall rise again".
- **0462C** *Judicia [0462C] Dei abyssus multa* → "The judgments [0462C] of God are a great deep".
- **0465D** *audit ex ore [0465D] ipsius* → "hears from his own [0465D] mouth". ⚠ **English
  reverses the two words**, so the anchor sits inside the same two-word construction but on the
  other side of it. Named because it is the only one where the order could not be preserved.
- **0466B** *spiritum non confiteri [0466B] et angelos* → "do not confess a spirit [0466B] and
  angels".
- **0469A** *contra [0469A] quam, scilicet valerent aegritudinem* → "against [0469A] which
  sickness, namely, they availed".
- ⛔ **0461A, repaired.** Migne splits *loquitur [0461A] testimonium*. My first draft had fronted
  "a testimony" and left the anchor eleven words downstream, at *versum Arati ponens* — the 8995
  failure shape in miniature. The sentence was **restructured** so the anchor stands where he
  puts it: "he speaks the [0461A] testimony, not of Moses…". **Found by this test and by nothing
  else.**

### T3 · Punctuation compared BY COLUMN BAND, never by total

A band-partitioning script compared colons, semicolons, question marks, exclamations, guillemets
and parentheses across all **41 anchor-delimited bands**. ⛔ **First pass returned ten mismatched
bands, and every one was mine, and nine of the ten were a supplied semicolon** — precisely the
class the brief names.

| chunk | band | what I had written | what Migne prints |
|---|---|---|---|
| 0014 | [0460A] | "of them that confess**;** whence" | *id est confitentium,* **comma** |
| 0014 | [0461A] | "a verse of Aratus**;** and out of" | *versum Arati ponens,* **comma** |
| 0014 | [0461B] | "called Arios**;** *pagus*" | *Arios dicitur,* **comma** |
| 0014 | [0462A] | "by grace**;** this is what" | *per gratiam,* **comma** |
| 0015 | [0462C] | "by certain men**;** because he gave" | *sicut traditur a quibusdam**:*** — a **colon**, not a comma |
| 0015 | [0464A] | "kept in memory**;** for the memory" | *memoria retinendum,* **comma** |
| 0015 | [0464B] | "are written**;** but Paul" · "Holy Spirit**;** or it may" | two **commas** |
| 0016 | [0464C] | "prophetesses**;** but the truth" | *leguntur fuisse,* **comma** |
| 0016 | [0464D] | "New Testament**;** but they that" | *salutem habituri,* **comma** |
| 0016 | [0465A] | "has been said**;** but if he celebrated" | *sicut dictum est,* **comma** |
| 0016 | [0465B] | "Greek tongue**;** or, lest" | *loquebatur, vel,* **comma** |
| 0016 | [0466B] | "and angels**;** and therefore" | *et angelos,* **comma** |
| 0017 | HEAD | "according to some**;** but it is better" | *secundum quosdam,* **comma** |

**After repair: 41 bands, and every band matches on every mark counted — with ONE exception,
which is deliberate.**

⚑ **0015, band [0462B]: one colon in the English that Migne does not print, and it is Pattern
8b.** *Quaestio est, **utrum** ille qui per ignorantiam forte a non baptizato … debeat
rebaptizari**?*** is an **indirect** question closed with `?`, and English cannot end that
construction with a mark. Recast direct behind a colon: **"The question is: ought he who through
ignorance has perchance been baptized by one not baptized, but nevertheless of right faith, to be
rebaptized?"** The mark is kept, nothing is deleted, and the extra colon is the convention's own
cost. ⛔ **This is the only band mismatch in the stint, it is intentional, and the merge should
not "fix" it.** (The peer declared the identical thing at 0443C; two 8b recasts now stand in this
book.)

⛔ **No comma→semicolon sweep was performed.** Migne prints **33 semicolons of his own** in my
range (0014 ×9 · 0015 ×8 · 0016 ×10 · 0017 ×6), so Tobit's narrow exception — which rests on a
book printing **zero** — does not apply and was not invoked.

**Question-mark parity: 12 in the Latin, 12 in the English** (0014 ×2 · 0015 ×2 · 0016 ×6 ·
0017 ×2), each on the sentence Migne puts it on. Five are worth naming because they look like
errors and are not:
- **0460D** *…usque ad quia quid non ex ipso de quo dicitur: Ex ipso… sunt omnia?* — a `?`
  closing an **abridgment tail**. Kept exactly there.
- **0461D** *fuere tamen Paulus vel Aquila; vel timore Judaeorum, vel aviditate convertendi eos?*
  — a `?` on what reads as a statement with alternatives. Kept (Pattern 8).
- **0465B** *Graece nosti?* and **0466A** *Quid si spiritus?* and **0467B** *Quid incredibile?* —
  question marks **inside italic lemmata**, carried into the English lemmata unchanged.
- **0465D** *tam facile dicis civem Romanum te esse?* — a direct question, and Pattern 17 makes it
  singular ("dost **thou** so easily say that **thou** art").

### T4 · The fourth test — does the paragraph ASSERT what he asserts

Run last, with the counts already clean, on all 134 paragraphs. It is what produced §V1's four
divergences, §M9's three refused conformations, §M2's *Saule, Saule* decision and §R1's decline.
Four paragraphs were read twice under it and the reasoning is recorded, because a blind reader
will stop at each:

1. ⛔ **0464B, Act 20:35 — repaired.** My draft rendered *Nolite accipere aurum* as "Do not
   possess gold", from the familiar Mt 10:9 and from this work's own 0434B. **It read perfectly
   and it was false**: the paragraph proves *beatius est dare quam **accipere***, and *accipere*
   is the word it proves it with. Repaired to "Do not receive gold" and marked. **Nothing was
   missing, no count changed, the band matched.** This is the conformation the brief warned would
   arrive over the plate, and it did.
2. ⛔ **0463C, Act 19:40 — the speaker.** *Hoc loquitur quasi Judaeus, nolens Judaeos ab idolorum
   cultoribus occidi.* My first reading took the subject to be Paul; it is the **town clerk** of
   Act 19:35, who is the subject of the lemma *Et cum haec dixisset* and the only person in the
   chapter who could speak "as a Jew … or as a Christian" about protecting the Jews. Repaired
   before filing; §S records it.
3. **0465A, Act 21:24 — the person shift, left standing.** *Non enim ita reprobas legalia … si
   autem ideo **celebraret**, ut actione simulata suam occultaret sententiam, non hoc diceret
   Jacobus.* Second person to third inside one sentence. **It asserts what he asserts**: James is
   addressing Paul (*reprobas*) and then speaking of him in the third person as the subject of
   James's own hypothetical. Rendered with the shift intact, no marker, no repair.
4. **0468C, Act 27:34 — a long period that reads smoothly, and it is Bede's.** *Nemo saeculi
   tempestates evadit, nisi qui pane vitae pascitur, et qui … innititur, auxilio Domini
   coruscante portum salutis consequitur, ita ut saeculo expeditus, flammam dilectionis … quaerat.*
   ⚑ **A sentence that reads smoothly where the Latin is rough is a suspect, not a success**, so
   it was re-parsed: *consequitur* is the main verb of the second *qui*-clause, not a third
   parallel, and *auxilio Domini coruscante* is an ablative absolute, not an instrument of
   *innititur*. The English reproduces that structure. **Left as written.**

⚑ Two further smooth-where-rough suspects were re-examined and **left rough**: 0461D's verbless
ablative absolute (§R3) and 0470A's headless abridgment (§M6).

---

## §Z · WHAT I DID NOT DO, AND WHY

1. **No `[sic:]`.** The three non-words (§W1–W3) are **rendered**, per the launcher's ruling on
   the peers' split, and a `[sic:]` on any of them would publicly blame Migne's plate for what
   addendum A says is our digitization's error ten times out of ten. Ship test B.
2. **No `[cj:]`.** One candidate, *aurum ex argentum* at 0461A, **declined with the bar stated
   and the rival named** (§R1). A preposition governing the wrong case is 18a's declined class.
3. **No `[ed:]`.** Nothing in my four chunks is a hole in the digitization. The three non-words
   are corruptions **of** text, not losses **of** text, and Pattern 13 is for the second.
4. **No `[nt:]` — and I did not force one.** All **92** notes in my range are attribution sigla
   (`(RAB.)` ×37, `(ID.)` ×26, `(BED.)` ×19, `(AUG.)` ×2, `(CHRYS.)` ×2) or scripture locators
   (`(Joan. XVIII)`, `(Rom. II)`, `(I Cor. III)`, `(Cant. II)`, `(Rom. X)`, `(Psal. XXXIX)`).
   **Not one is editorial prose**, judged by content and not by length; the longest is thirteen
   characters. **Pattern 15 never fires**, exactly as the peer found for its 115.
5. **No `[f:]`** — runbook false positive 4. Lemma-and-gloss commentary, not a florilegium.
6. **No `[d:]`** — no run is set twice anywhere in the four chunks. *Ignoto Deo* appears twice at
   0460C but they are lemma and re-quotation, twenty words apart, with *usque ad* between them;
   *Magna Diana Ephesiorum* twice at 0463B–C in two different verses' lemmata. **Neither is a
   compositor's doubling**, and Pattern 11a's "which copy is the intrusion" question does not
   arise because neither copy is intrusive.
7. **No `[cn:]`, and none is owed.** PL 114's spot check for this work is a recorded **checked
   zero** — no numbered `Forte` apparatus, both mid-page work divisions examined, and **one of
   them is the Acts→Romans division at cols 469/470, which is inside my range and is the reason
   the zero covers this tail.** That zero licenses shipping; it does not license the claim that
   the work has no notes, and I make none.
8. **No plate was read by me**, and none blocks the range. ⭐ **But one of my questions is now
   half-answered by a read someone else already did** — the 0435B crop behind
   `data/tei-patches/8976.json` — and §M4 turns that into a prediction with a written patch.
   **If the merge will spend crops, spend two, in this order:**
   **(a) cols 461/462, p. 237** — the highest-yield page in the range, and it closes **three**
   entries at once: §M4's *fuit. ita* (predicted to be a lost colon, exactly as 0435B was),
   §W1's *Sceno factoriae*, and §R1's *aurum ex argentum*.
   **(b) col. 0468 band B/D, p. 239** — settles §W2 *Tyrrhenc* and §W3 *Thelasson* together, with
   §W5's *dysin* on the same page. **Two crops close six entries.**
   ⚠ **And the patch file's own ordering gate is now open**: it says the 0435B patch is held back
   until the last Acts stint lands, because applying it re-chunks `src/latin/8976` under any agent
   still reading. **I am the last Acts stint and I am done reading.**
9. **Column-band arithmetic not reported** — runbook false positive 1. My bands skip letters
   freely (0466D → 0467A → 0467B → 0467C, then 0467D → 0468A) and 0469A → 0470A jumps a whole
   column at the work division. **Normal, and the 469/470 jump is the book ending.**
10. **`(cont.)` handling: not applicable.** No `## ` head repeats across my chunk boundaries —
    0014 ends inside CAPUT XVIII and 0015 opens CAPUT XIX, 0015 ends inside CAPUT XX and 0016
    opens CAPUT XXI, 0016 ends inside CAPUT XXVI and 0017 opens CAPUT XXVII. **Checked, not
    assumed.**
11. **I did not write `cruces.md`, and I touched no file below 0014.**

---

## §Q · READ CLEAN — the sections where I found nothing

Named, because a findings list without its negatives is not a report.

- **Chunk 0017, cols 0468D–0470A (CAPUT XXVIII, the last chapter of the book)** — six verse
  addresses, thirteen lemmata, eight notes. The only entries anywhere in it are §N's *vigesimo
  quinto anno*, §W5's *dysin*, §M4's *unde? patet*, and §N's note that Puteoli is not beyond
  Rome. **The lemmata all agree with the Clementine.**
- **CAPUT XXIII and CAPUT XXV entire (0466A–0467A)** — eleven lemmata, all agreeing; two
  supplied pronouns, both named in §S; no divergence, no candidate, no marker.
- ***Ecclesia*: three occurrences, all capitalized, all rendered "the Church."** Checked at the
  source, not taken on trust.
- **Guillemets: zero in both languages, all four chunks.** Patterns 5 and 6 have nothing to govern.
- **Migne's own `( sic )`: none in this range**, so nothing to stack ours on (runbook false
  positive 5).
- **Pattern 9 items met and left alone**: *coelum/coelis* for *caelum* throughout · *tanquam* ·
  *nunquam*/*Nunquid* · *Jerosolymam* · *sylva*-class spellings · *Eutichus* for *Eutychus* ·
  *Ismaelites*-class name forms. **None marked, none italicized**, per runbook false positive 6.
