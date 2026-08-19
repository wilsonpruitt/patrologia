# *Glossa ordinaria*, **Epistola I B. Joannis** (1 John; PL 114, 0693D–0704D) — cruces

Translated 2026-08-19, one agent, 5 chunks (4,275 Latin body words → 6,458 English, 1.51×).
Conventions are those settled on **Liber Ruth (8968) §1** and restated in
`GLOSSA-NT-AGENT-BRIEF.md`; nothing new is ruled here. The two shipped siblings —
**2 John (8984)** and **3 John (8989)** — were read first and their vocabulary reused
(*Charissimi* → "Dearly beloved"; `*usque ad*` → `*as far as*`; `VERS. n.--` verbatim;
fragment lemmata expanded to the phrase they stand for).

Apparatus taken: **6 `[var:]` · 10 `[sic:]` · 1 `[d:]` · 1 `[cj:]` · 0 `[ed:]` · 0 `[nt:]`**.
Marker parity with the Latin twins: **42 column anchors · 19 `[n:]` notes · 166 italic spans ·
0 guillemets · 11 question marks**, all 1:1 and in place.
`verify-english.mjs 8979`: **clean** (5 chunks, columns/notes/sections aligned, no duplicate
paragraphs).

**Punctuation checked BAND BY BAND, not by total** (test 3). The 42 verified anchors partition
both twins into 47 bands; colons, semicolons, question marks, guillemets and exclamations were
compared inside every band and **zero bands mismatch**. No mark was supplied and none deleted;
in particular no `?` was invented, and Migne's five in chunk 0, two in chunk 2, one in chunk 3
and three in chunk 4 all ride as printed.

---

## §1 · THE LEMMA DIVERGENCE LIST (7a″) — all 156 lemmata collated against the Clementine

Every italic lemma in the work was collated against `sources/vulgate/clementine-flat.txt`
before the gloss under it was rendered, and each rendering was then held fixed against every
re-quotation of it in the gloss below. **Agreements are named individually below, not passed
over**, because a list of findings alone cannot be told apart from a list by someone who did
not check.

### 1.1 · The six divergences that took a `[var:]`

| col | Migne prints | Clementine | why it earned the marker |
|---|---|---|---|
| 0698D | *Adjutor meus **es tu**, ne derelinquas me* (Ps 26:9) | *Adjutor meus **esto**; ne derelinquas me* | **Mood.** Petition ("be thou my helper") becomes assertion ("thou art my helper"). Bede's excerpt is arguing that grace does not remove free will and puts these words in the mouth of the one praying, so the mood is the point. |
| 0699B | *Quoniam semen ipsius **est**.* (1 Jo 3:9) | *quoniam semen ipsius **in eo manet*** | **Lexical.** The verse's *in eo manet* ("abideth in him") is replaced by a bare copula. Rendered "*Because it is his own seed.*" |
| 0699D | *In hoc **cognoscimus**,* etc. (1 Jo 3:16) | *In hoc **cognovimus** caritatem Dei* | **Tense**, with an English exponent. Present for perfect, almost certainly assimilated to the identical lemma at VERS. 19 (3:19), which *is* present and agrees exactly. |
| 0700A | *Majorem **enim charitatem** nemo habet **quam ut** animam suam ponat **quis** pro amicis suis* (Jo 15:13) | *Majorem **hac dilectionem** nemo habet, **ut** animam suam ponat **qui** pro amicis suis* | **Four-word divergence**, and *charitas* for *dilectio* matters in a work whose whole argument is built on *charitas*. |
| 0700D | *Qui **avertit aurem suam ut non** audiat legem* (Prov. 28:9) | *Qui **declinat aures suas ne** audiat legem* | **Three-word divergence** in a proof-text quoted as *sapientia*'s own voice. |
| 0701C | *Qui diligit, ex Deo natus est et Deum novit, **quia Deus charitas est.*** (1 Jo 4:7) | v. 7 closes *quia **caritas ex Deo** est*; *Deus caritas est* is **v. 8** | **The most consequential divergence in the work — see §2.1.** Migne's VERS. 7 lemma ends with v. 8's clause, and the gloss's own next sentence contradicts it. |

### 1.2 · Divergences examined and DECLINED, with the reason for each

None of these was absorbed silently; all are recorded because a blind reader will look here.

- **The clipped-possessive class (three sites, one habit).** 0693D *et manus contrectaverunt*
  (Vulg. *manus **nostrae** contrectaverunt*); 0695B *Remittat nobis peccata* (Vulg. *remittat
  nobis peccata **nostra***); 0699A *apparuit, ut peccata tolleret* (Vulg. *ut peccata
  **nostra** tolleret*). **Declined as a class, not one at a time**: three lemmata drop exactly
  one possessive and nothing else, which is a lemmatizer's clipping habit rather than three
  independent variants. Rendered without the possessive in every case — *"and hands have
  handled"*, *"That he may forgive us sins"*, *"that he might take away sins"* — so the English
  does not quietly restore what Migne does not print. ⚠ These three are the sites where the
  familiar English ("our hands", "forgive us our sins") pulls hardest, and none of them followed
  it.
- **0695A *quia Deus lux est*** for Vulg. *quoniam Deus lux est* (1 Jo 1:5). Pure connective
  substitution; identical English ("that God is light"). Pattern 14 fires on sense.
- **0695A *quae societas **lucis** ad tenebras*** for 2 Cor 6:14 *quae societas **luci** ad
  tenebras*. Genitive for dative; identical English. Migne also drops *autem* and *aut* and
  prints v. 15 **before** v. 14. The re-ordering is his, is reproduced, and is not a textual
  variant. No marker.
- **0695D *Si mandata ejus **observamus*** for Vulg. *observemus* (1 Jo 2:3). Indicative for
  subjunctive; English "if we keep his commandments" either way, Pattern 9's "no English
  exponent" logic. Recorded, not marked.
- **0697D *quicunque negat Christum,* etc.** The Clementine 2:22 reads *Quis est mendax, nisi is
  qui negat quoniam Jesus est Christus?* Migne's italic run is the gloss's **own compression**,
  introduced by its own *scilicet*, not a quotation of a variant text. Same call 3 John made on
  *quae forsitan* (8989 §1). No marker.
- **0699B *Si enim dixerimus quia peccatum non habemus, nos ipsos seducimus*** for 1 Jo 1:8
  *Si dixerimus **quoniam** peccatum non habemus, **ipsi nos** seducimus*. *enim* is the gloss's
  connective; *quia*/*quoniam* and *nos ipsos*/*ipsi nos* yield identical English. No marker.
- **0703B *honorificabit **illum** Pater meus*** for Jo 12:26 *honorificabit **eum** Pater meus*;
  **0703B *quis contra nos?*** for Rom 8:31 *qui contra nos?*. Both render as the same English
  word. No marker.
- **0704A *quoniam **cui** talia agunt*** (Gal 5:21 *quoniam **qui** talia agunt, regnum Dei non
  consequentur*). This one is **not** declined: it took a `[cj:]` instead, see §2.4.
- **Orthography, all Pattern 9, none marked:** *Charissimi* for *Carissimi* (0698C, 0701C);
  *charitas* for *caritas* throughout; *unquam* for *umquam* (0702A); *exsecrabilis* for
  *execrabilis* (0700D). These are PL's nineteenth-century house spellings, printed corpus-wide.
  The precedent is 3 John §1, which declined *Charissime* on the same ground.
- **0694D *Beati qui non viderunt et crediderunt [n: (Luc. XXIV)]*** — the **text** agrees
  verbatim with **John 20:29**; the **citation** does not, Migne printing *Luc. XXIV*. The note
  passes through verbatim per the locked register. This is a misattributed locator, not a textual
  divergence, and takes no `[var:]`.

### 1.3 · Verified agreements, named by chunk

Everything not listed in §1.1–§1.2 was collated and **agrees with the Clementine word for word**
(fragments agreeing as far as they run). Named so a later reader can tell a checked book from a
skipped one:

- **Chunk 0 (21 lemmata).** *Quod fuit ab initio · quod audivimus · quod vidimus · quod perspeximus
  · Vidimus · Annuntiamus vobis · Et haec est annuntiatio · Annuntiamus · Si dixerimus · Et in
  tenebris · Si autem in luce · Sicut et ipse · Si dixerimus · Habemus · Mendacem* — all agree.
  (*habuimus:* is not scripture; it is the contrastive form the gloss coins to set against
  *Habemus*.)
- **Chunk 1 (48).** All agree except the two named in §1.2 (*observamus*, *quicunque negat
  Christum*). Includes the full VERS. 10–11 chain *qui odit est in tenebris · et nescit · quo eat;
  et · nescit quo eat · quia tenebrae obcaecaverunt oculos ejus*, which reproduces 2:11 exactly,
  and the split lemma *quia tenebrae* … *transierunt* (2:8), whose two italic spans and the roman
  *jam* between them are all reproduced in place.
- **Chunk 2 (40).** All agree except the four named above (*es tu*, *semen ipsius est*,
  *cognoscimus*, *Majorem enim charitatem*, *Qui avertit aurem suam*) and the clipped possessives.
  *Quotquot autem receperunt eum, dedit eis potestatem filios Dei fieri* (Jo 1:12) and *Cum autem
  senueris … quo tu non vis* (Jo 21:18) agree **verbatim**, which is worth saying: three of the
  work's eight cited proof-texts diverge and two do not, and only collation tells them apart.
- **Chunk 3 (18).** All agree except the VERS. 7 composite (§2.1). *Hic est Filius meus dilectus*
  (Mt 17:5 / 3:17), *Deum nemo vidit unquam*, *Timor non est in charitate*, *Et nos debemus
  alterutrum diligere*, *Ideo de mundo loquuntur*, *Quoniam in eo manemus* — all verbatim.
- **Chunk 4 (29).** All agree. Including the entire 5:16–21 run (*Est peccatum ad mortem · Omnis
  iniquitas peccatum · Omnis qui natus est · Non peccat · Sed generatio Dei · Et mundus totus ·
  Et scimus · Filioli · Custodite*), and *Quoniam tres sunt* — on which see §2.2.

### 1.4 · ⚠ THE SCRIPTURE-CONFORMATION HUNT, run separately

This is the fault that beat Ruth and it is this book's named risk, so it was hunted as its own
pass rather than folded into the collation. **Every place where the familiar AV/Douay wording
and Migne's Latin part company was listed first, then checked in the finished English:**

| the familiar English | what Migne prints | what we print |
|---|---|---|
| "our hands have handled" | *et manus contrectaverunt* | "and hands have handled" — no *our* |
| "forgive us our sins" | *Remittat nobis peccata* | "That he may forgive us sins" |
| "that he might take away our sins" | *ut peccata tolleret* | "that he might take away sins" |
| "no temptation … but such as is common to man" (1 Cor 10:13) | *ut non apprehendat vos tentatio nisi humana* | "that temptation may not take hold of you except such as is human" — the negative stays on the verb, not on "temptation" |
| "his seed remaineth in him" | *Quoniam semen ipsius est* | "Because it is his own seed", with a `[var:]` |
| "In this we have known the charity of God" | *In hoc cognoscimus* | "In this we know", with a `[var:]` |
| "Greater love than this no man hath" | *Majorem enim charitatem … quam ut* | "For no man hath greater charity than that…", with a `[var:]` |
| "his prayer shall be an abomination" (Prov 28:9) | *Qui avertit aurem suam ut non audiat* | rendered from Migne, with a `[var:]` on the three divergent words |
| "he that turneth away his ear" | — | kept singular *aurem*, against the Vulgate's plural *aures* |
| "God is love" / "perfect love casteth out fear" | *Deus charitas est* · *Timor non est in charitate* | "God is charity" · "Fear is not in charity". **The whole epistle's vocabulary is *charitas* and is rendered "charity" throughout, never "love", because the gloss's argument at 0701C turns on the identity of *charitas* with God.** *dilectio*, a different word, is "love". |
| "Beloved" | *Charissimi* | "Dearly beloved", the shipped 3 John rendering |

**Result: zero conformations found in the finished English.** The two places the pull was
strongest and was resisted are the 1 Cor 10:13 echo at 0695C and *Deus charitas est* at 0701C.

---

## §2 · CRUCES

### 2.1 · 0701C · VERS. 7 — the lemma ends with v. 8's clause, and the gloss's own next sentence says so. `[var:]`

**Printed:** *…in quo eum maxime debemus audire, scilicet: **Qui diligit, ex Deo natus est et
Deum novit, quia Deus charitas est.** Dixerat: **Charitas ex Deo est;** hic superaddidit: **Deus
charitas est.***

The composite lemma set out as 1 Jo 4:7 ends *quia Deus charitas est*. But 4:7 ends *quia
**caritas ex Deo** est*; *Deus caritas est* is **4:8**, and the very next sentence of the gloss
says so in as many words — *he had said "Charity is of God"; here he added "God is charity."*
**The gloss's argument requires the lemma to end the way the Vulgate ends it, and Migne's lemma
does not.**

Rendered exactly as printed, with a `[var:]` naming both clauses and which verse each belongs to.
No emendation, and **no re-ordering of the lemma to rescue the argument** — the mismatch between a
lemma and the gloss built on it is precisely what this edition exists to show. The gloss also
prints *Deum novit* where 4:7 has *cognoscit Deum*; same English, recorded in §1.2 and not marked
separately.

⚑ This is a crux that would obviously profit from an editor's note. **None is available**: the
plate spot-check for this work (p. 352 cols 693/694, p. 354 cols 697/698, full width, 300 dpi)
found no foot-of-page apparatus and no asterisk-keyed EDIT. note, so no `[cn:]` exists to settle
it. Cols 701–702 were not themselves sampled, and a plate read there is the one cheap thing that
could still add evidence.

### 2.2 · ⭐ 0702D–0703A · VERS. 7 · THE *COMMA JOHANNEUM* — what Migne actually prints, and it is not the Comma

The brief flags this as the corpus's densest region for 1 Jo 5:7–8. **The finding is negative and
it is the interesting kind of negative.**

Migne lemmatizes VERS. 7 with the bare stump ***Quoniam tres sunt.*** and **prints no more of the
verse at all** — not *qui testimonium dant in caelo*, not *Pater, Verbum, et Spiritus Sanctus*, not
*et hi tres unum sunt*, and nothing of v. 8's earthly triad either. Verses 8 and 9 are not
lemmatized; the next verse address is VERS. 10. **Nothing was imported and nothing was omitted on
the strength of what the verse is expected to say**: the stump was collated against the Clementine
(*Quoniam tres sunt, qui testimonium dant in caelo*), **agrees exactly as far as it runs**, and is
rendered "*For there are three.*"

The Comma is nevertheless **presupposed by the gloss**, which is the substantive observation:

> *Et de utroque habemus certum testimonium, de Deitate quidem per **Patrem, et Filium, et
> Spiritum sanctum**: de humanitate per **animam, aquam, et sanguinem**.*

Two things worth a later reader's attention, neither of which took a marker:

1. The heavenly triad is named ***Filium***, where the Comma reads ***Verbum***. This is the
   gloss's **own prose**, in roman, not a quotation and not a lemma, so Pattern 14 does not reach
   it (the same call 2 John made on *Positus est Adam in paradiso*). Recorded here so the
   substitution is not invisible.
2. The earthly triad is *anima, aqua, sanguis* where v. 8 reads *spiritus, aqua, sanguis* — and
   the gloss has already declared its own equivalence four lines earlier at 0702D
   (*Spiritus. Id est, humana anima*). So this is exegesis, not a variant text.

**No `[var:]`, no `[sic:]`, no conjecture.** The zero here is a checked zero.

### 2.3 · The `[sic:]` register — ten sites, and what each one was NOT allowed to swallow

Every marker was closed by stripping it and reading the clause aloud (test 1). Where the carried
run took a verb, a subject, a conjunction or an object, the sense is supplied in plain words beside
the marker; where it took only a modifier, the marker stands alone and the conjecture lives here.

| col | printed | conjecture | what it governed | what we did |
|---|---|---|---|---|
| 0696D | *hae eticorum* | *haereticorum* | the genitive after *instinctu* | **supplied**: "by no instigation of heretics [sic: *hae eticorum*]" — without it the English strands "of" on punctuation |
| 0697B | *acciplunt* | *accipiunt* | **the clause's only verb** | **supplied**: "Many who are not of us receive [sic: *acciplunt*] with us the sacraments" |
| 0697C | *ten atio* | *tentatio* | **the clause's subject** | **supplied**: "temptation [sic: *ten atio*] proves" |
| 0698A | *Creora* | *crebra* | an adjective only | **marker stands alone.** Strip test: "By repetition he drives it home, that he may fix it the more closely in their minds" reads aloud complete, so nothing is missing. The conjecture *crebra* ("frequent") is recorded here and deliberately kept out of the text. |
| 0698D | *Latin* | *Latini* | **the subject of *appellant*** | **supplied**: "What the Latins [sic: *Latin*] call law" — stripped, "What the call law" is broken |
| 0699C | *nis* | *nisi* | **the clause's conjunction** (7a⁗ question 3) | **supplied**: "He does not call Cain's works evil, save [sic: *nis*] envy and hatred of his brother." The parallel sentence immediately after — *Opera Abel justa non dicit, **nisi** charitatem* — prints *nisi* in full and is the structural proof that the negative stays on *dicit* and the exception on *nisi*. |
| 0702C | *viucendum* | *vincendum* | the gerund after *ad* | **supplied**: "for overcoming [sic: *viucendum*] the world" |
| 0702D | *apparel* | *apparet* | **the main verb** | **supplied**: "Through this it appears [sic: *apparel*]" |
| 0703A | *Filil* | *Filii* | the genitive after *testimonio* | **supplied**: "in the testimony of the Son [sic: *Filil*]" |
| 0703B | *aetenam* | *aeternam* | an adjective on *vitam* | **supplied**: "eternal [sic: *aetenam*] life", since without it "he would give life to us also" loses the whole point of the sentence |

All ten are Pattern 10/12 non-word type: *viucendum*, *apparel*, *Filil*, *aetenam*, *acciplunt*
and *Creora* are single-letter substitutions (n/u, t/l, i/l, r-loss, i/l, b/o); *hae eticorum* and
*ten atio* are split runs and carry their spacing; *Latin* and *nis* are truncations. **Whether any
of them is Migne's plate or Corpus Corporum's transcription cannot be told from the Latin**, and
the brief's §4 warning cuts both ways here — see §2.7.

### 2.4 · 0704A · *cui* for *qui* — `[cj:]`, not `[sic:]`, and why

**Printed:** *…et ideo oratione justorum non purgatur: quoniam **cui** talia agunt, regnum Dei non
consequentur.*

The clause quotes Gal 5:21, which reads *quoniam **qui** talia agunt, regnum Dei non consequentur*.
*cui* is a **perfectly real Latin word** — the dative of *qui* — so Pattern 12 cannot reach it
(`[sic:]` may only wrap type that is not a word), and Pattern 7 requires it to be rendered. But
*cui* cannot govern the plural *agunt*, and the faithful English is broken. That is exactly the gap
Pattern 18 was ruled for.

Rendered **additively**: "since to whom [cj: *cui*; read *qui*, "who"] do such things, they shall
not obtain the kingdom of God." Migne's word keeps its English, the conjecture stands beside it,
and nothing is replaced. The rival reading — treating *cui* as broken type and marking `[sic:]` —
**loses**, because a `[sic:]` asserts the type is not a word, and *cui* is one; Pattern 12's own
boundary paragraph ("a real word that is merely wrong") puts this case on the far side of it.

### 2.5 · 0699A · *iniquitatibus | quitatibus* — a doubling ACROSS the column break. `[d:]`

**Printed:** *Ne nos (qui peccatis et **iniquitatibus** [0699A] **quitatibus** carere non possumus)
de salute desperemus…*

The two runs **differ** (*iniquitatibus* / *quitatibus*), so Pattern 11a governs and the marker
goes on the **intrusion, wherever it stands**. The intrusion is the **second**: *iniquitatibus* is
the complete word, agrees with *peccatis*, and is what the sentence needs; *quitatibus* is its tail
re-set immediately after the column break and is not a word at all. Marked `[d: *quitatibus*]`,
which renders as text with the "repeated in Migne's plate" rule, and the reader loses nothing —
stripping it leaves "who cannot be free of sins and iniquities", complete.

**`[sic:]` was considered and rejected**: the defect here is not that a word is broken, it is that a
run is *set twice*, and `.dittog` is the mark that says so. Saying it with `[sic:]` would file a
doubling under broken type and make the two classes indistinguishable in a corpus that separates
them deliberately.

⚑ **This one wants a plate read and is the strongest candidate in the work.** A partial re-set of
the last word before a column break is the classic shape of a **catchword**, and it is equally the
classic shape of a digitization re-reading one. If the plate has *iniquitatibus* once, this is
Corpus Corporum's doubling and belongs in `data/tei-patches/8979.json`, not in a `[d:]` marker.
**Recorded as unresolved rather than assumed either way.** Col. 0699 was not in today's spot-check.

### 2.6 · Printed oddities rendered literally, with no marker available

- **0698A · *Et nunc, filioli., manete.*** Migne sets a **full stop and then a comma** inside the
  lemma. Rendered exactly so: "*And now, little children., abide.*" Pattern 8 governs (marks ride
  as printed); no marker fits, because the type is not broken, nothing is missing from the
  digitization, and the Vulgate agrees (2:28 *Et nunc, filioli, manete in eo*). ⚑ A stray period
  is also a plausible transcription artifact and this is the second site in the work worth a plate
  read.
- **0696A · *quia tenebris, ejectis desiderium novae lucis infundit.*** The comma falls **inside**
  the ablative absolute (*tenebris ejectis*) rather than after it. Preserved; the English cannot
  reproduce a comma in that position and reads "because, the darkness being cast out, it pours in
  the desire of a new light." Recorded so the displacement is not invisible.
- **0700B · *Quia non est perfecta charitas in illo; qui non ponit animam…*** A **semicolon** where
  the sense wants a comma, cutting the relative clause off from its antecedent. Reproduced 1:1
  ("perfect in him; who does not lay down his life"), Pattern 8.
- **0704B · *non peccavit, ad mortem, sed veniam poenitendo meruit.*** The comma splits *peccavit*
  from *ad mortem*. Reproduced ("he did not sin, unto death, but by repenting he earned pardon").
- **0702D · *contra naturam **aqua sanguis** vivaciter fluxit.*** Migne prints the two nouns with
  **no *et***, four lines after printing the lemma *aqua et sanguis* in full. Rendered as English
  asyndeton, "water, blood flowed vigorously" — the conjunction was **not** supplied. Nothing is
  broken and nothing is missing, so no marker; but a reader comparing the columns will see it, and
  this is where it is said.
- **0704B · *sic justitia et iniquitas malignus et generatio Dei.*** The comparison has **no verb**
  in its second member and no conjunction between its two pairs. Rendered with the same ellipsis:
  "so justice and iniquity, the malignant one and the generation of God." No verb supplied — the
  same discipline the `*usque ad*` formula requires.
- **0704C · *Nemo sine divina cognitione ad vitam aeternam **pervenire**, nemo cognoscere sine
  gratia Dei **potest**.*** One *potest* serves two infinitives across a comma. English cannot
  carry that ellipsis, so "can" is repeated: "No one can come to eternal life without the divine
  knowledge, no one can know without the grace of God." Recorded because a word appears twice in
  the English that appears once in the Latin.
- **0699B · *Hoc ipsum quod qui justus est ab illo justus est.*** A verbless sentence. Rendered
  verbless: "This very thing, that he who is just is just from him."

### 2.7 · ⚑ Forms that read suspiciously TIDY, raised per brief §4

The digitization alters spelling in both directions, and a word that reads well may read well
because someone upstream fixed it. Two candidates, both **raised and neither acted on**:

- **0704A · *supra*** in *Sed **supra** alia est peccatum ad mortem*. It construes ("but above",
  i.e. as said earlier) and it also reads as though it might be tidied from *super* or from a
  displaced *supra dicta*. Corpus check: *supra* is overwhelmingly common across `src/latin/`, so
  frequency gives no signal, and the sentence is intelligible as printed. **Left alone**, and the
  translation deliberately does not choose between "above" (anaphoric) and "besides" — see §3.2.
- **0703C · *In fide et confessione nominis*** opening a Bede excerpt whose surroundings are rough.
  Nothing anomalous found; **a checked negative**, recorded because the other candidates in this
  section came back inconclusive and a clean one is worth having.

⚑ And the general caution, since this work carries ten `[sic:]` sites in 4,275 words, which is a
high rate: **the run of single-letter substitutions (*apparel*, *Filil*, *viucendum*, *acciplunt*,
*aetenam*) has the profile of OCR, not of a nineteenth-century compositor.** Cols 0697–0704 were
not sampled today. **If a plate read is ever run on this work, run it on those five first**: if the
plate is clean, all five are `data/tei-patches/8979.json` entries and the `[sic:]` markers come out.
They are marked as the plate's defects because that is what the evidence on disk supports, not
because the question was settled.

---

## §3 · THE SUPPLIED-SUBJECT REGISTER — every pronoun our English prints that the Latin does not

The brief names this the largest defect class corpus-wide and 1 John its worst case, because the
referent of *ille* / *hic* / *ipse* oscillates between Father and Son. Each supplied pronoun below
carries the evidence that fixes it.

### 3.1 · Settled, with the evidence

- **0693D, ARGUMENTUM · *manifestat · dissertat · comprobet*** → "**he** makes plain… **he**
  discourses… **he** proves". Subject = **John**. Evidence: the ARGUMENTUM is a summary of what the
  epistle's author does, the same construction as the ARGUMENTUM of 2 John (8984), and every finite
  verb in it is third singular with no other candidate in the sentence.
- **0695A · *monstrat*** (*Hac sententia divinae puritatis excellentiam monstrat*) → "**he** shows".
  = John. Fixed by the immediately preceding *vide quid voluit docere* — the one doing the teaching
  is the writer whose *sententia* it is.
- **0695A–0695B · *ostendit*, 0695B *Non ait*, 0695B *vocat / appellat*** → "**he** shows",
  "**he** does not say", "**he** calls". = John throughout; *Non ait, habuimus* is decisive, since
  only the epistle's author can be said not to have written a word.
- **0696A · *promisit*** (*Secundum quod promisit*) → "**he** promised". **Two readings both
  construe** and the English keeps both open: God, who is the promiser of the knowledge and love in
  question, or John, the subject of every other verb in the paragraph. **Not resolved**, and the
  reason is in §3.2.
- **0696A · *impletum*** (*Christo impletum*) → "Fulfilled in Christ, because **he** obeyed the
  Father unto death: and therefore **he** was glorified." Subject = **Christ**, named in the
  clause itself. No ambiguity.
- **0698B–0698C · *ostenderit Deus … Dedit enim … Deus dedit*** — subject **printed** in all three.
  Nothing supplied. Named here because *Dedit.* is a lemma and the temptation is to supply a
  different subject for the lemma than for the gloss; the gloss prints *Deus*.
- **0698D · *viderunt mali, et in judicio sunt visuri*** → "the wicked have seen **him**, and in the
  judgment they shall see **him**." Object supplied. = the Word made flesh, from the same sentence's
  *Verbum caro factum est*. The contrast with *videbunt soli justi* (of the Word *in principio*)
  makes the object identical in both halves.
- **0699B · *sicut ille est … in illo … in isto*** → "as **that one** is… in **that one**… in
  **this one**." *ille* = **Christ** (the *ille* of 1 Jo 3:7, *sicut et ille justus est*, which is
  the verse being glossed); *iste* = the man who does justice. The English keeps the *ille/iste*
  deixis rather than naming either, because the Latin does not name them.
- **0699A · *subdit*, 0700A *supponit*, 0701D *voluit*, 0704D *perhibuerit / demonstrat*** →
  "**he** adds / subjoins / wished / had borne / shows". = **John** in every case; each sits in a
  sentence about the ordering of the epistle's own argument.
- **0700C · *scimus nos esse in conspectu*** → "we know that we are in **his** sight." Possessive
  supplied from the gloss's own next clause, *id est promereri **ejus** conspectum*. Migne prints
  the possessive four words later.
- **0701B · *Solvit.*** → "**He** dissolveth." Subject = *omnis spiritus qui solvit Jesum*, the
  lemma directly above (1 Jo 4:3). The gloss closes *hic solvit Jesum*, naming the same subject.
- **0702C · *Vere per fidem vincit mundum*** → "**he** conquers the world." Subject = the believer,
  from the lemma above (*Quis est autem?*, 1 Jo 5:5 *qui vincit mundum*).
- **0702C · *Quis est autem?* etc.** → "*But who is **he**?* etc." The one supplied word in a
  lemma anywhere in this work. Fixed by 5:5, *Quis est, qui vincit mundum*; "But who is?" is not
  English and Ruth §1.2 governs. The `etc.` carries the rest and the expansion stops there.
- **0702D–0703A · the *dedit testimonium* sequence.** *Pater dedit … Ipse Filius dedit … Spiritus
  sanctus dedit* — all three subjects are **printed**. The English supplies only the object "it"
  for the second and third (*dedit* absolute), which is the testimony named in the first. **This
  is the paragraph the brief warns about most — Father, Son and Spirit in three consecutive
  clauses — and Migne names every one of them.**
- **0703A · *quando super baptizatum … requievit*** → "when **he** rested upon **him who had been
  baptized**". Subject = the Holy Spirit, printed as the sentence's subject; *baptizatum* is the
  substantive participle, i.e. Christ. Neither is a free choice.
- **0703B · *quasi dicat*** → "as if **he** should say". = John, continuing the paragraph.
- **0704D · *Cum testimonium … perhibuerit **illis***** → "Although **he** had borne **them**
  testimony". *illis* is printed; only the subject is supplied, and it is John.

### 3.2 · Declined calls, said plainly rather than left to look decided

**A flagged passage is not a checked passage.** Where this file declines, it declines out loud.

1. **0696A · *Secundum quod promisit*.** The subject is genuinely undetermined between **God** and
   **John**. Evidence for God: the content promised is *ad ipsius cognitionem et dilectionem
   perveniri*, and the immediately preceding gloss (VERS. 3) says *per quae ad cognitionem ipsius
   venitur* — the promise is about reaching God, which suits God as promiser. Evidence for John:
   every other finite verb of narration in the surrounding chapter has John for its subject. The
   English prints "he promised" and **supplies no name**, which is the one rendering that leaves
   the ambiguity exactly where Migne leaves it. **Declined deliberately, not overlooked.**
2. **0704A · *Sed supra alia est peccatum ad mortem*.** *supra* is either anaphoric ("but above",
   as said earlier in the chapter) or "besides / beyond these". Rendered "**But above**, the sin
   unto death is another thing," which carries the printed word and lets the reader see the
   difficulty. **Declined**: nothing in the paragraph decides it, and choosing would put a reading
   into the text that the page does not make.
3. **0702D · *aqua sanguis*** (§2.6). Whether the missing *et* is Migne's asyndeton or a lost word
   cannot be told from the Latin, so the English reproduces the asyndeton and **no conjecture is
   offered**. If the plate is ever read, this is the third site to look at.

⚠ Both 2 John and Esther were beaten by a translator who **saw** the crux, set out both readings,
declined to resolve, **and then supplied the wrong one anyway**. The three declines above were
therefore re-read after the English was finished, specifically to check that the rendering does not
quietly encode a choice. It does not: item 1 prints a bare "he", item 2 prints the printed adverb,
item 3 prints the asyndeton.

---

## §4 · NEGATION AUDIT — every printed negative, its host named from STRUCTURE

Test 2 validates the mapping you propose, not the mapping the Latin makes (test 2a), so the
population the brief names — **a negative resting on a verb with a quantifier, correlative or
predicate nearby** — was worked first, and each host is proved from the sentence's own structure.

### 4.1 · The trigger population: every `non solum … sed`, `nisi`, `omnis`, `solus`, `sicut … ita`

| col | printed | host, proved from | rendering |
|---|---|---|---|
| 0695A | *non debemus putare nos … **omnino** posse a peccatis mundari* | *omnino* modifies *posse … mundari*; the *non* stands on *debemus*, its own verb, with no correlative to move it | "we ought **not** to think that we can, so long as we live, be **wholly** cleansed" |
| 0695C | *ut **non** apprehendat vos tentatio **nisi** humana* | 1 Cor 10:13; the *nisi* carries the exception, so the *non* stays on *apprehendat* | "that temptation may **not** take hold of you **except** such as is human" — ⛔ **not** "no temptation… but", which is the AV cadence and would move the negative onto the subject |
| 0695D | ***non semper** propter notitiam dicitur, **sed** propter experimentum* | the *sed* pivots on the two *propter* phrases, so the *non* governs *propter notitiam* | "is **not always** said on account of acquaintance, **but** on account of experience" |
| 0696D | *super hanc radicem **nihil** aedificetis, **nisi** quod convenit charitati* | *nihil* is itself the object; *nisi* is the exception | "build **nothing** upon this root **except** what befits charity" |
| 0697C | *quoniam **non** sunt **omnes** ex nobis qui … sacramenta Christi recipiunt* | the relative clause defines the population, and the whole gloss argues that receiving the sacraments does **not** make one *ex nobis* — the negative scopes over *omnes* | "that **not all** are of us who … receive the sacraments" |
| 0697D | *omne mendacium **non** esse ex veritate* | the *non* stands on *esse*, and Bede's excerpt keeps the Vulgate's own word order (2:21 *omne mendacium ex veritate non est*) | "that **every** lie is **not** of the truth" — the tempting "no lie is of the truth" would relocate it onto *omne* |
| 0698C | ***non** tamen ut dominum servi, **sed** ut patrem filii* | *sed* pivots on the two *ut* phrases | "yet **not** as servants a master, **but** as sons a father" |
| 0699A | ***Non solum** ergo per gratiam facti sumus filii Dei … **sed etiam** ab iniquitate liberamur* | textbook correlative; the negative is on *solum* | "**Not only** therefore have we been made sons of God … **but** we are **also** freed" |
| 0699B | ***Non** de **omni** peccato dicit … **sed** de violatione charitatis* | the *sed de violatione* pivot proves the negative governs *de omni peccato*, **not** *dicit* | "He does **not** say it **of every** sin … **but** of the violation of charity" — ⛔ **not** "he says it of no sin" |
| 0699C | *Opera Cain mala **non** dicit, **[nis]** invidiam* | the parallel next sentence prints *nisi* in full | "He does **not** call Cain's works evil, **save** envy" |
| 0700B | ***non** propter jactantiam, vel propter aliquod temporale commodum, **sed** respectu solius Dei* | *sed* pivots on the *propter* phrases | "**not** for the sake of boasting, **nor** … **but** with regard to God alone" |
| 0700D | *quia **non** bono animo bona nostra faceremus* | *non* governs the ablative *bono animo*, not *faceremus* — the sentence is about the motive, not about whether the deeds were done | "because we were doing our good deeds **not** with a good mind" |
| 0701A | *Spiritus Dei **non** sono linguae, **sed** amando et faciendo dicit* | *sed* pivots on the two ablative phrases | "says … **not** by the sound of the tongue, **but** by loving and by doing" |
| 0701C | ***non** transnominative a justitia dicitur justus … **sed** quia est justitia … sua* | *sed* pivots on the manner of predication | "he is **not** called just by a transferred name from justice … **but** because he is his own justice" |
| 0701D | ***Non prius** dileximus … **sed** ipse **prior** dilexit nos* | the *sed* clause repeats *prior*, which is the word under contrast, so the *non* governs *prius* | "We did **not** love **first** … **but** he himself loved us **first**" |
| 0702A | *De hac radice **non** potest **nisi** bonum exire* | *nisi* carries the exception | "From this root **nothing** can come forth **except** good" — see §4.3 |
| 0702B | ***noluit** illum esse **unum**, **sed** ut fratres haberet* | *sed* pivots on solitude against brotherhood, so the negation governs *unum* | "he willed **not** that he should be **one alone**, **but** that he might have brethren" |
| 0704B | *Tangit ergo aliquos malignus … **sed non** ad malum eorum* | *sed* pivots on the purpose phrase | "touches some … **but not** to their harm" |
| 0704C | ***Nemo** … **nemo** … quia **nemo** novit Filium **nisi** Pater, **neque** Patrem quis novit **nisi** Filius* | four negatives and two *nisi*; each exception is printed | rendered one for one, with the two *nisi* as "but" |
| 0704C | ***Non solum** mundi amatores, **sed etiam** nuper nati … **nisi** gratia Dei eruantur | correlative plus a *nisi* clause | "**Not only** the lovers of the world, **but also** the newly born … **unless** by the grace of God they are rescued" |

### 4.2 · Read clean, and named

Every remaining `non · nec · neque · nisi · ne · nemo · nihil · nullus · nolite · noluit ·
nequeunt` in all five chunks was placed on its host and checked in the English. The dense
stretches, all clean: **0696B** (VERS. 10–11, six negatives in one sentence — *nescit · non
providet · nescit · non ideo · non sit · non exsequatur*); **0697B** (VERS. 19, five — *non
terreat · non putetis · non erant · Non potuissent … nisi · non est*); **0704A–0704B** (VERS.
17–18, eight). **No negative was added and none dropped**; the antithetical construction the
brief warns of (*qui dicit se in luce esse et fratrem suum odit*, *non diligamus verbo sed opere*)
is present at 0696A, 0696B and 0700B and each was mapped onto its correlative before it was
rendered.

### 4.3 · The one place English has no exponent, said so rather than hidden

**0702A · *De hac radice non potest nisi bonum exire*.** The *non* is on *potest*; English cannot
keep it there without an indefinite object ("there cannot come forth anything except good"), and
the natural rendering moves it onto the object ("nothing can come forth except good"). The two are
identical in scope here — there is no quantifier for the negative to interact with — so nothing is
at stake, and the reading chosen is the one that is English. **Recorded because the class it
belongs to is the one that has beaten this pipeline, and a checked instance of it is worth having
even when the answer is "no difference".**

---

## §5 · CANDIDATES EXAMINED AND REJECTED

- **The `VERS. n.--` sequence is Migne's and is not out of order.** 1, 2, 5, 6, 7, 8, 9, 10 · 1, 3,
  4, 7, 8, 9, 10–11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 27, 28, 29 · 1, 2, 3, 4,
  5, 6, 7, 8, 9, 12, 14, 15, 16, 17, 18, 19, 20, 22, 23 · 1, 3, 5, 7, 8, 9, 10, 11, 12, 13, 16, 18
  · 1, 3, 4, 5, 6, 7, 10, 11, 14, 15, 16, 17, 18, 19, 20, 21. **Ascending throughout, with gaps but
  no inversions** — nothing of the Jude kind. Two glosses (*Ex ipso.* at 0698B, *Et haec est vita.*
  at 0703C, *Est peccatum ad mortem.* at 0704A, *Spiritus.* at 0702D) stand as their own paragraphs
  with no verse address; that is Migne's setting and is reproduced.
- **The bare one-word lemmata are NOT inconsistent with the expanded fragments** (brief, 2026-08-19).
  Different classes, and the class was named before either was rendered: ***Habemus.*** ·
  ***Filioli.*** · ***Adolescentes.*** · ***Solvit.*** · ***Dedit.*** · ***Custodite.*** ·
  ***Videte.*** are complete in themselves and are rendered as they stand. ***Advocatum.*** ·
  ***Justum.*** · ***Mendacem.*** · ***Quoniam multi.*** are bare accusatives or bare subordinators
  whose governing word is elided, and Ruth §1.2 expands them to the phrase they open ("We have an
  advocate", "Jesus Christ the just", "We make him a liar", "Because many false prophets are gone
  out"). **The rule applied, stated so it can be checked: expand where the English stump is not a
  well-formed English phrase; leave it where it is.** Every expansion tracks Migne's own Latin
  verse, never an English Bible's wording.
- **⭐ 0694D · *Scripturas perhibentes testimonium de ipso Verbo* — a mis-parse caught on the
  fourth-test read-back, and repaired.** The first draft read "with much handling **of the
  Scriptures** bearing witness", taking *Scripturas* as a genitive with *contrectatione*. It is
  **accusative**, and *perhibeo* takes a double accusative ("to bring forward X as Y"). Now
  rendered "with much handling **bringing forward the Scriptures as testimony** concerning the
  Word himself." ⚑ Recorded because the wrong reading was smooth English and passed every count:
  it is the exact shape test 5 exists to catch, and it was caught by reading the paragraph back
  against the Latin and nothing else.
- **⭐ 0698D · *tolletur impius ne videat gloriam Dei* — Isaiah 26:10 in its OLD LATIN form.**
  The Clementine reads *Misereamur impio, et non discet justitiam … et **non videbit gloriam
  Domini***; Migne's clause matches instead the Vetus Latina/LXX form (*ἀρθήτω ὁ ἀσεβής, ἵνα μὴ
  ἴδῃ τὴν δόξαν κυρίου*), the version Augustine quotes. **`[var:]` declined**: Migne sets it in
  roman, with no citation, no note and no *unde*, as a clause of the gloss's own sentence, and
  Pattern 14 governs citations. Rendered from Migne — "the wicked man shall be taken away, lest
  he see the glory of God" — with the negative on *videat* where he prints it. Logged here
  because a reader collating against the Clementine will find no such verse, and the reason is
  worth having.
- **0698C *nomine et actu nominaremur filii Dei, et in futuro simus*.** *simus* has no complement;
  it takes *filii Dei* from the clause before. Ordinary Latin ellipsis, not a defect. Rendered "and
  that in the world to come we should be so."
- **0701C *Non differt charitas in Deo*.** *differt* prints no *a Deo*. Sound as it stands (the
  point is that in God charity is not a distinct thing), and the rest of the sentence spells it
  out. No marker.
- **0703B *ut bene optando tendat in ipsum habet testimonium*.** No comma between the *ut* clause
  and *habet*. Punctuation only, Pattern 8; reproduced, and the English reads through.
- **0696C *Patres, adolescentes, juvenes*** against the Vulgate's *patres, adolescentes … infantes
  … juvenes* (2:13–14). The gloss's list is its own summary of two verses, not a quotation; it also
  drops *infantes*, which it has already covered with *filioli*. **No `[var:]`** — Pattern 14
  governs citations, and this is prose. Rendered *adolescentes* "youths" and *juvenes* "young men",
  fixed at first occurrence and held through VERS. 13 and 14, whose glosses depend on the two being
  distinguishable.
- **Gender and attested spellings.** No Pattern 9 item was marked anywhere: no gender mismatch has
  an English exponent, and *Charissimi · charitas · unquam · exsecrabilis · quandiu · ocius* are all
  attested forms.
- **No guillemets, no Migne *( sic )*, no `[ed:]` hole, no `[nt:]` prose note.** All nineteen `[n:]`
  notes are bare attribution sigla or locators — *(RAB.)*-class material: *(Luc. XXIV) · (II Cor.
  VI.) · (BEDA.) ×7 · (Joan. I) · (ID.) · (Psal. XXVI) · (Joan. XXI) · (Ibid. XV) · (Prov. XXVIII)
  · (Joan. XII) · (Rom. VIII.)*. **Not one is editorial prose**, so Pattern 15 does not fire and the
  `[nt:]` count is a checked zero.
- **Pattern 4 `[f:]` was not applied**, per runbook false positive 4: this is a lemma-and-gloss
  commentary, not a florilegium.

---

## §6 · PLATE STATUS

Spot-checked today at **p. 352 (cols 693/694)** and **p. 354 (cols 697/698)**, full width, 300 dpi:
**no foot-of-page apparatus and no asterisk-keyed EDIT. note.** So no `[cn:]` is expected for this
work and **no conjecture of Migne's is available to settle any crux above**. That is a sample, not a
proof, and it is consistent with the PL 114 sampling recorded in 8984's cruces (leaves n356–n357,
cols 703–706, also zero).

**Four sites in this work would profit from a plate read, in priority order:**

1. **0699A** — the *iniquitatibus | quitatibus* doubling (§2.5). If the plate has the word once,
   this is a tei-patch, not a `[d:]`.
2. **0697B–0703B** — the five single-letter substitutions *acciplunt · apparel · Filil · viucendum ·
   aetenam* (§2.3, §2.7). Their profile is OCR, not compositor.
3. **0698A** — *filioli.,* the stray full stop inside a lemma (§2.6).
4. **0701C** — VERS. 7, the crux that most obviously wants an editor's note and has none (§2.1).

---

## §Adjudication — plate read + blind polarity read (2026-08-19)

### ⭐⭐⭐ ELEVEN OF TWELVE SUSPECTED PLATE DEFECTS WERE OURS — see `data/tei-patches/8979.json`
The translator raised its ten `[sic:]`/`[d:]` sites for a plate read, observing that five had **the profile
of OCR damage rather than compositor error**. It was right eleven times and wrong once, and **nothing in
our files could have told us which** — only the plate. pp. 353–357 (cols 695–704) read at 400 dpi, every
reading taken from a full-resolution crop of the whole line.
**Patched and re-chunked; ten markers removed from the English.** Three sub-kinds:
- **line-break damage**, where Migne hyphenates and the transcription mangles the join: *ten-|tatio*,
  *vin-|cendum*, and **the *ini-|quitatibus* duplication, which spans a COLUMN break** (698D→699A) — our
  source kept the rejoined whole word AND its tail. No dittography of Migne's; he sets it once.
- **single-letter OCR substitutions** a compositor does not make: *acciplunt · Creora · apparel · Filil ·
  aetenam · nis*.
- **a lost final letter at an unhyphenated line end** (*Latin* for *Latini*) and a spurious full stop
  inside a lemma (*filioli., manete*).
⭐ **THE SURVIVOR IS WHY THE READ WAS NECESSARY: `hae eticorum` at 0696D IS MIGNE'S** — a full word-space
where the *r* belongs, mid-line, no line break to blame, no broken sort. Its `[sic:]` **stands**, and the
`[sic:]` on every other site would have been a public false claim about the primary witness.
⚑ **And one of the removals exposed a swallowed word:** "By `[sic: *Creora*]` repetition" had the bracket
standing in the adjective slot, so deleting it left "By repetition". *Crebra* = "frequent"; supplied.
⚠ Contrast with 8959 the same day, where the suspicion ran the other way and the plate said the defect
was **Migne's own**. **The profile of a defect never decides it.**

### Blind read — 3 sites, all repaired
Reader fenced from this file, all five chunks read against the CORRECTED Latin, with the eleven
orchestrator-edited sites named for particular attention (they had been edited by an adjudicator, not by
a translator, and nobody had read them). It reported them faithful, and checked every negative against
its host individually.

1. **REPAIRED · 0704A · a `[cj:]` STANDING IN THE SLOT OF THE WORD IT MARKS** — the swallow class again,
   twice in one work. *quoniam cui talia agunt* had been rendered "since **to whom** do such things, they
   shall not obtain…", which is not a readable clause: the corrupt *cui* was translated **and** the
   conjecture logged, so the conjecture never reached the English. Now "since **they who** [cj: *cui*;
   read *qui*] do such things shall not obtain the kingdom of God."
2. **REPAIRED · 0697A · both relatives re-hosted, and a mis-parse.** *qui … impugnet, qui … exstirpet* are
   **masculine** and *pestis* is feminine, so they attach to **Antichristi**, not to the plague — and
   *hujus nequissimi capitis* downstream requires exactly that personal antecedent, which our English had
   left dangling. Also *praeconia* is neuter plural of *praeconium*, "proclamations", not "heralds"
   (*praecones*). Both fixed.
3. **DECLINED as proposed, RESOLVED THE OTHER WAY · the lemma-expansion cluster** (0701A *Quoniam multi.*
   · 0695C *Justum.* and *Advocatum.*). The reader proposed contracting them to the printed catchword.
   **Declined: expansion is never the defect, CONFORMATION is**, and convention 3 renders a fragment as
   the phrase it stands for. ⚑ **Its control was mixed, for the third time in two batches:** of the three
   "fragments kept fragmentary" it cited, *Filioli.* → "Little children." and *Ex ipso.* → "Of him." are
   **complete phrases with nothing elided**, not clipped lemmata. Only *Non quasi nos.* was the same
   class — so the work held three expansions against one stump, and **the stump was expanded** to
   *"Not as though we had loved God"* (1 Jo 4:10, *non quasi nos dilexerimus Deum*), confirmed by the
   gloss's own next words, *Non prius dileximus*. Same resolution as 8998's *Nolite.* this morning.

⚑ Reader's most valuable rejection: **0699B *Hoc ipsum quod qui justus est ab illo justus est*** — a
sentence asserting nothing, which is the **dropped-line signature** found in 8962 today. It checked the
Latin on disk, found it equally verbless, and **flagged the site without proposing words**. Correct on
both counts.
