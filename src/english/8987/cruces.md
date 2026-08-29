# *Glossa ordinaria*, **Epistola II ad Thessalonicenses** (PL 114, 0619D–0624C) — cruces

Translated 2026-08-18, one translator, 2 chunks (1,445 Latin words → 2,233 English), on Opus.
Structure: ARGUMENTUM, CAPUT PRIMUM, CAPUT II, CAPUT III.

Apparatus: **3 `[var:]` · 2 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` · 2 `[n:]`**
(exact parity with the Latin twin). 14 column anchors (10 + 4), 58 italic spans in the Latin
(45 + 13) against 63 in the English (47 + 16), the difference being exactly the 3 `[var:]`
and 2 `[sic:]` contents, which the verifier strips. **Both `[sic:]` markers are at 0624B and
both were added after a blind polarity read; see §9, which is the section to read first.** 1 question mark and 1 exclamation mark, both in chunk 0,
both at parity. Zero guillemets in either language. `node scripts/verify-english.mjs 8987`
returns clean.

Conventions follow `src/english/8968/cruces.md` §1 (Ruth, the Glossa pilot) and shipped 8978
(Jude, same volume, same form): `VERS. n.--` passes through verbatim; the lemma is Englished;
the attribution sigla ride as ordinary `[n:]` notes with contents untranslated; italic
*usque ad* → *as far as* (8978 cruces §205).

---

## §0 · PLATE STATUS — a CHECKED ZERO

**Foot-of-page apparatus for cols. 0619–0624: `notes_recovered: 0`, coverage `full`, tier 3.**
Read this session by the orchestrator, not by the translator.

**Method.** archive.org `patrologiaecurs06saingoog`, leaf **n = (column + 9) / 2**, calibrated
against the running head (n312 = cols. 615/616). Leaves **n314, n315, n316** read at full page
width across the whole foot. **No foot rule, no numbered notes: the columns simply end.**

⭐ Two of the three leaves carry a **mid-page work division** and were read *there* as well as
at the foot: **n314** (1 Thessalonians ends; `EPISTOLA II AD THESSALONICENSES` opens below the
rule, which is where this work begins) and **n316** (this work ends; 1 Timothy begins). That is
the configuration that lost three notes on PL 202. It is clean here.

⛔ This is a **checked zero**, not a skip and not "unchecked." Consequently **any `[cj:]` in
this work would be ours, not a conjecture Migne had already answered at the foot** — and this
work takes none.

**Two corroborations from the same plate read** (used, but not treated as licence to skip the
translator's own reading):

1. **The ARGUMENTUM is confirmed word for word against n314**, and `CAPUT PRIMUM.` opens at
   `VERS. 3. — *Gratias agere*, etc.`, exactly as our Latin twin has it.
2. ⭐ **The question mark at 0621A is Migne's own**: the plate prints `quid faciet induratis ?`
   (n315, left column). It is therefore **preserved, not supplied**, and the Pattern 8 parity
   for chunk 0 stands at one question mark against one, as recorded in the header.

---

## §1 · ⛔ MIGNE'S OWN VERSE NUMBERING — TWO INDEPENDENT DEFECTS. NOTHING RENUMBERED.

Verse addresses pass through verbatim by the settled convention. Both of the following are
recorded, not repaired; the reader's Latin column would otherwise disagree with our English.

### 1a · `VERS. 5.` at 0622A is a misprint for **VERS. 3**, and it puts the sequence out of order

Chapter II runs on the plate: **1 · 2 · 5 · 4 · 6 · 7 · 8 · 9,10 · 12 · 13 · 15.**

The lemma printed under `VERS. 5.` is *Quoniam nisi venerit* / *Nisi venerit refuga primum*
/ *Filius perditionis*. All three words stand in **2 Thess 2:3** (*quoniam nisi venerit
discessio primum, et revelatus fuerit homo peccati, filius perditionis*). **2 Thess 2:5
contains none of them** (*non retinetis quod cum adhuc essem apud vos, haec dicebam vobis?*).
The following address is `VERS. 4.`, and the gloss under it (*In templo*) is genuinely 2:4 —
so read as 3, Migne's run is **1 · 2 · 3 · 4 · 6 …**, continuous. The defect is one digit.

⚠ Note also that **`VERS. 5.` and the true `VERS. 5.` are not both present**: 2:5 is simply
not glossed. So no gloss has been displaced and no text is lost; no `[ed:]`.

### 1b · From `VERS. 12.` at 0623A the addresses run **one behind the text they gloss**

| Migne's address | lemma printed | where the words actually stand |
|---|---|---|
| VERS. 12. | *Primitias in salutem.* | 2 Thess **2:13** (*elegerit vos Deus primitias in salutem*) |
| VERS. 13. | *In acquisitionem gloriae Domini nostri Jesu Christi.* | 2 Thess **2:14** |
| VERS. 15. | *Et dedit consolationem.* / *In gratia.* | 2 Thess **2:16** (*dedit consolationem aeternam … in gratia*) |

A consistent −1 offset over the last three addresses of Chapter II, beginning immediately
after the AUG. note. Chapter III's addresses (1 · 2 · 6 · 7 · 9 · 10 · 11 · 13) are **all
correct** against the Vulgate, so the offset does not propagate.

⛔ Not corrected. The two defects have different shapes (1a is one wrong digit inside an
otherwise sound run; 1b is a sustained offset), which is itself evidence that neither is our
business to normalise.

---

## §2 · THE LEMMA DIVERGENCE LIST — ALL 57 SPANS CHECKED AGAINST THE VULGATE

Every italic lemma span in both chunks, checked word by word against the Clementine Vulgate
**before** the English was written, and each rendering then held fixed against every
re-quotation of it in the gloss below. **Agreements are listed too**, so this can be told
apart from a report by someone who only listed findings. (The 58th italic span, *usque ad*
at 0623A, is Migne's abridgment formula, not a lemma; see §5.)

### 2a · The three that diverge — all marked `[var: …]`

| col | Migne prints | Vulgate | marker + reasoning |
|---|---|---|---|
| 0621A | VERS. 7 *In revelationem.* | *in revelatione Domini Jesu* (1:7) | `[var: Vulg. *in revelatione*, ablative, "at the revelation"]`. Migne's **accusative** turns a point of time into a terminus, so the English reads "**Unto** the revelation." The gloss below settles nothing either way (*Incipit ostendere quam horribilis tribulatio…*), which is exactly why the printed case had to decide it and not the sense. ⭐ The rendering an eye that knows 1 Thess/2 Thess reaches for first is Douay's "at the revelation" — that would have been a silent repair of the case ending. |
| 0622A | VERS. 5 *Nisi venerit **refuga** primum.* | *nisi venerit **discessio** primum* (2:3) | `[var: Vulg. *discessio*, "the departure"]`. **Material and load-bearing**: *discessio* is an event (a falling away), *refuga* a **person** (a deserter), and the whole gloss turns on the person: *quem refugam vocat: utique a Domino Deo* — "whom he calls a deserter: from the Lord God, assuredly." Rendered "Unless **the deserter** come first," with *refugam* in the gloss carried as the same word, "a deserter." ⚠ Migne himself flags it (*Sic aliqui codices habent*), and that flag is **not** a substitute for the marker: his sentence tells the reader some codices read so, ours tells him what the received text reads. Note also that the **immediately preceding** gloss uses the Vulgate word (*vel discessione a fide*), so both readings stand on the same plate within two lines. |
| 0623C | VERS. 7 *Scitis **quomodo** oporteat **nos imitari**.* | *scitis **quemadmodum** oporteat **imitari nos*** (3:7) | `[var: Vulg. *quemadmodum oporteat imitari nos*, "how you ought to imitate us"]`. Sense-neutral (*quomodo* and *quemadmodum* are synonyms; the word order does not change which of *nos*/*imitari* governs). Marked anyway because it is a real lexical substitution in a quoted verse and the launch instruction is to name divergences, not only sense-changing ones. **The `[var:]` gloss deliberately repeats the same English** to say so: the divergence is in the Latin, not in what it means. ⛔ Do **not** read the marker as a claim that the sense shifts. |

### 2b · The one that is orthographic only — checked, deliberately NOT marked

| col | Migne prints | Vulgate | why no marker |
|---|---|---|---|
| 0621A | 1:8 ***His** qui non noverunt Deum.* | *iis qui non noverunt Deum* | *his* for *iis* is the ordinary medieval/Migne spelling of the same dative-ablative plural, not a different word. Nothing in the gloss turns on it. A `[var:]` here would train a reader to discount the three that matter. Recorded so the absence of a marker is a decision, not an oversight. |

### 2c · The alternative-version reading, quoted as such — checked, deliberately NOT marked

| col | Migne prints | why no marker |
|---|---|---|
| 0621A | *Siquidem justus est,* etc. | Migne **labels** it: *unde alius interpres ait*. It is not offered as the text of 2 Thess 1:6 but as another translator's rendering of it, so it is not a divergence in a scripture citation but a cited variant version. Pattern 14 does not reach it. ⚠ But see §3 — the **masculine** *justus* against *justum* is the whole point of quoting it, and the English has to carry that. |
| 0622B | *in templum Dei sedeat,* | Migne prints **both** readings and argues between them in his own prose (*non* in templo, *sed* in templum Dei sedeat, *sicut in Graeco est*). The Vulgate reading he rejects is already on the page in the same sentence. A `[var:]` would only re-state what the gloss says out loud. |

### 2d · The fifty-two that agree with the Vulgate exactly (checked, no marker)

**Chunk 0, Chapter I (1:3–1:11):** *Gratias agere,* (1:3) · *In invicem.* (1:3) ·
*In exemplum justi,* (1:5) · *Justi: si tamen justum est,* (1:5 + 1:6) · *si tamen,* (re-quote) ·
*Domini Jesu.* (1:7) · *in flamma ignis* (1:8) · *Qui poenas dabunt.* (1:9) ·
*In interitu aeternas.* (1:9) · *Cum venerit glorificari,* (1:10) · *Quia testimonium.* (1:10) ·
*In quo.* (1:11) · *in quo,* (re-quote) · *Opus fidei.* (1:11) · *In virtute* (1:11).

**Chunk 0, Chapter II (2:1–2:16):** *Rogamus autem vos, fratres, per adventum Domini nostri
Jesu Christi,* (2:1) · *Non cito moveamini.* (2:2) · *Neque per spiritum.* (2:2) ·
*Neque per Epistolam.* (2:2) · *Quasi instet dies Domini.* (2:2) · *Quoniam nisi venerit.* (2:3) ·
*Filius perditionis.* (2:3) · *In templo.* (2:4) · *templum.* (2:4, accusative variant named by
the gloss) · *in templo,* (re-quote) · *Scitis.* (2:6) · *Suo tempore.* (2:6) ·
*Nam mysterium,* (2:7) · *Donec de medio fiat.* (2:7) · *De medio fiat.* (re-quote) ·
*Spiritu oris sui.* (2:8) · *Mendacibus et in omni seductione.* (2:9–10) ·
*Ideo mittet illis Deus.* (2:11) · *Primitias in salutem.* (2:13) ·
*In acquisitionem gloriae Domini nostri Jesu Christi.* (2:14) · *Et dedit consolationem.* (2:16) ·
*In gratia.* (2:16).

**Chunk 0, the two spans that are the gloss's own re-ordering, not quotations:**
*In quo die oramus, ut dignetur,* and *Semper oramus.* — Migne prefaces them
*Ordo verborum talis est*, i.e. he is re-arranging 1:11 (*In quo etiam oramus semper pro
vobis: ut dignetur…*) to show the construction. Every word is 1:11's; only the order is his,
and he says so. Rendered as the re-arrangement he prints.

**Chunk 1, Chapter III (3:1–3:13):** *De caetero, fratres, orate.* (3:1) · *Ut liberemur.* (3:2) ·
*Et malis,* (3:2) · *liberemur,* (re-quote) · *Non enim omnium est fides.* (3:2) ·
*Denuntiamus.* (3:6) · *Sed ut nosmetipsos.* (3:9) · *Quoniam si quis non vult operari.* (3:10) ·
*Curiose agentes.* (3:11) · *Nolite deficere.* (3:13).

**Chunk 1, the Matthew citation, quoted twice:** *Nolite solliciti esse, quid manducetis*
[0624A] and *Nolite solliciti esse quid manducetis,* [0624B]. Matt 6:25 reads *Nolite
solliciti esse **animae vestrae** quid manducetis*. Migne's two quotations both drop *animae
vestrae* and both close with *etc.* — i.e. this is **abridgment of a citation, not
divergence**: the omitted words sit between the quoted ones and the *etc.* announces the
truncation. No `[var:]`, per the fragment convention (brief §3). ⚠ The two quotations differ
from each other by one comma (`esse, quid` vs `esse quid`); both are reproduced as printed.

---

## §3 · 0621A · *si tamen* — the argument the English had to leave standing

Migne: *Justi: si tamen justum est,* quod constat esse. Non enim ponitur hic, *si tamen,* pro
dubitatione, sed pro affirmatione, unde alius interpres ait: *Siquidem justus est,* etc.

The gloss's whole claim is that *si tamen* is **not** conditional-dubitative here. So the
English of the lemma may not be a rendering that only reads as doubt.

- **Rejected: "if however it is just"** and **"if nevertheless it is just."** Both force the
  concessive, which is precisely the reading the gloss denies; the paragraph would then
  contradict its own lemma.
- **Rejected: "since it is just."** This *resolves* the argument inside the lemma and leaves
  the gloss with nothing to argue. It would also be a silent repair of a conditional into a
  causal.
- **Adopted: "if indeed it is just."** English *if indeed* genuinely carries both values, so
  the gloss can say which one is meant and the reader can see that it needed saying. The
  re-quotation two clauses later is held to the identical words, *if indeed*.

⭐ **The masculine in *Siquidem justus est*.** *justum est* (neuter, "it is just") against
*justus est* (masculine, "he is just") — the alternative version supplies a **personal
subject**, and that is a second, unremarked way of turning the concession into an assertion.
The unexpressed subject is **God**, from *apud Deum* in 1:6 (*si tamen justum est apud Deum
retribuere*). Rendered "**Since indeed he is just,**" and the "he" is named here rather than
supplied silently. ⚠ A blind reader may want to weigh "Since indeed it is just" — but the
printed *justus* is unambiguously masculine nominative and *justum* stands three words
earlier in the same sentence for contrast. The call is not close; it is only easy to miss.

---

## §4 · THE UNEXPRESSED SUBJECT — every supplied pronoun, named

Sites where English forced a pronoun the Latin does not print. Antecedent named, with what
fixes it.

| col | Latin | supplied | what fixes it |
|---|---|---|---|
| 0620D | *Hic gratias agit Deo* | "he" = **the Apostle** | The ARGUMENTUM's subject (*scribit Epistolam Apostolus*), and *gratias agit* answers the lemma *Gratias agere* of 1:3, whose subject is Paul. |
| 0620D | *ne … extollantur … habentes* | "they" = **the Thessalonians** | *de bonis eorum* in the same clause. |
| 0621A | *Si enim tam severe punit … quid faciet induratis?* | "he" = **God** | The lemma is *in exemplum justi (judicii **Dei**)*; and the next clause names him: *non parcit impiis*. ⚠ Not the Apostle, who is the subject of the *following* sentence (*Hoc dicit*). The two sentences change subject without saying so. |
| 0621A | *Hoc dicit, ut intelligatur* | "he" = **the Apostle** | *dicit* of the writer, contrasted with *punit* of God above. |
| 0621A | *quod constat esse* | "it" = **that it is just** | Refers to *justum est* immediately preceding. |
| 0621A | *Incipit ostendere* | "he" = **the Apostle** | Same speaker as *Hoc dicit*. |
| 0621A | *quam horribilis tribulatio **illis**, et quam jucunda requies **istis*** | "those" / "these" | 1:6–7 supplies both: *illis* = **the persecutors** (*iis qui vos tribulant*), *istis* = **the Thessalonians** (*et vobis qui tribulamini, requiem*). Rendered "for those" / "for these" so the deixis survives; ⛔ collapsing them to "them" and "you" would have destroyed the contrast. |
| 0621A | *Venientis … quia inimicos exuret* | "he"/"his" = **the Lord Jesus** | The lemma directly above is *Domini Jesu*, and *Venientis* is its genitive participle. |
| 0621A | *Nam alii sunt qui nesciunt legem* | none supplied | Impersonal; rendered "For others are they who know not the law." |
| 0621B | *Id est sustinebunt* | "they" = **the ungodly of 1:9** | From the lemma *Qui poenas dabunt*. |
| 0621B | *Semper sentient poenas, non tamen semper deficient* | "they" = same | See §6 on the negation. |
| 0621B | *Ipse enim clarus … videbitur … apparebit … coarctabit* | "he" = **the Lord** | *Ipse* is printed, and the lemma is *Cum venerit glorificari* (1:10, of the Lord). |
| 0621B | *Ideo vobis tribulatis dat requiem nobiscum* | "he" = **God/the Lord** | Subject carried from *Veniet punire malos* in the sentence before; *vobis* and *nobiscum* are printed. |
| 0621B | *ut dignetur, id est dignos judicet* | object **"you"** | ⚠ The Latin prints no object. Vulgate 1:11 reads *ut dignetur **vos** vocatione sua Deus noster*, so the object is the Thessalonians and the subject is God. Rendered "may judge **you** worthy." ⭐ This is the one place a supplied word came from the **verse behind the lemma** rather than from the sentence, and it is flagged for that reason. "may judge **them** worthy" also construes; it was rejected because the whole paragraph is second-person (*det vobis perseverantiam* four lines later). |
| 0621C | *ut a confessione nullo modo flecti possint* | "they" | Latin prints 3rd plural *possint*. ⛔ Not conformed to the surrounding "you": the Latin changes person here and the English follows it. |
| 0621C | *ut scilicet det vobis perseverantiam* | "he" = **God** | *dignetur … Deus noster* of 1:11. |
| 0621C | *Hucusque dixit se eis gratias agere* | "he" = **the Apostle** | *se* + *eis*, writer and addressees. |
| 0622A | *Occulte loquitur … ne irritaret eos* | "he" = **the Apostle** | Continues *dixit … determinat* from the preceding paragraph. |
| 0622A | *eum dixisse, quem refugam vocat* | "he" = **the Apostle**; "whom" = **Antichrist** | *de Antichristo eum dixisse* is printed. |
| 0622B | *Eos scire dicit quid detineat* | "he" says, "they" know | *dicit* = the Apostle; *eos* = the Thessalonians, from the lemma *Scitis* (2:6, *et nunc quid detineat scitis*). |
| 0622C | *sicut per illum tunc aperte facturus est* | "he" = **the devil**, "him" = **Antichrist** | *Diabolus … occidebat* is the printed subject; *illum* is the Antichrist of the same paragraph. |
| 0622C | *qui fidem tenet, teneat* / *qui detinet illum … detineat* | "he" | Both relatives are printed masculine; the English keeps "he who," ⚠ even in the second case where the apposition *id est accessio ad fidem* is feminine. Not tidied. |
| 0622C | *jam … revelabitur* | "he" = **that wicked one** | 2:8, *tunc revelabitur ille iniquus*; and *aderit ille iniquus* stands at 0622B. ⚠ *revelabitur* could formally take *discessio* (fem.) as subject, but *discessio* has just been given its own verb in the same sentence (*revelata discessione*), so a second subject is required. Flagged; the call is made. |
| 0622C | *quia ab eo procedit* | "he" = **the Spirit**, "him" = **the mouth's owner** | *qui dicitur spiritus oris* names the Spirit; *ab eo* is the one whose mouth it is. |
| 0623A | *ad mendacium trahent* | "they" = **the signs** | *Signa illa vocantur mendacia* opens the paragraph. Object "men" supplied for English; noted. |
| 0623B | *dedit … speramus* | "he" gave, "we" hope | *quam dedit* and *speramus* are both printed; only the subject of *dedit* (God) is supplied. |
| 0623C | *ne nostros seducant … tendant* | "they" = **the false ones** | *A pseudo* opens the clause. |
| 0623C | *acceperunt omnes fidem per me* | "me" printed | Paul speaking in his own person, as *Ideo dico liberemur* shows. |
| 0624A | *cum illi haec non faciant, debetis vitare* | "them" as object of *vitare* | *illi* is printed as subject; English requires the object. From 3:6, *ut subtrahatis vos ab omni fratre ambulante inordinate*. |
| 0624B | *cum multis aliis locis epistolarum quid hic sentiat Apostolus apertissime doceat* | **the Apostle** teaches, and "he" means | ⛔ **REPAIRED after the blind read, see §9.3.** The first rendering was "since **he** most plainly teaches what **the Apostle** here means," which reads as two agents where the paragraph has one. The *cum*-causal is the answer to the mist-drawers: **Paul himself** settled it elsewhere. Now "since **the Apostle** in many other places of the epistles most plainly teaches what **he** here means." |
| 0624B | *Vult enim servos Dei corporaliter operari* | "he" = **the Apostle** | Same subject as *doceat*. |
| 0624C | *possunt tamen nonnullis indigere* | "they" = **those who work** | *etsi operentur* immediately before; the workers of 3:10–12. *nonnullis* read as neuter ("some things"), not masculine ("some men") — *indigere* takes the thing lacked. |
| 0624C | *Et ideo monet* | "he" = **the Apostle** | Continues the paragraph. |

---

## §5 · SMALLER CALLS, MADE AND RECORDED

1. **0623A · *usque ad*.** *Deus diabolum ista facere permittet, etc., usque ad alias
   injustissime judicatum.* Migne's abridgment formula, rendered *as far as* per 8978 §205,
   italics kept. The tail it points to, *alias injustissime judicatum*, is the **closing
   fragment of the abridged Augustine passage**, not a complete clause, and is rendered as
   the fragment it is: "otherwise most unjustly judged." ⛔ Not completed into a sentence.

2. **0621B · *Qui poenas dabunt* must be rendered "give," not "suffer."** The entire gloss is
   a lexical note on that verb (*Dare enim aliquando ponitur pro sustinere*). Douay's "shall
   suffer eternal punishment" would delete the thing being explained. The gloss's own *dare*
   and *sustinere* are then carried as "to give" and "to undergo," in double quotes as
   mention rather than use.

3. **0622B · *Sedet in amicum, id est ut amicus.*** Rendered "He sits **into** a friend, that
   is, as a friend." ⚠ Deliberately un-English. The sentence exists to illustrate that
   *in* + accusative can mean "as," which the reader can only see if the accusative survives
   the crossing. "He sits as a friend, that is, as a friend" would be a tautology on the page.
   Migne prints it without italics; none were added.

4. **0621C · *Non cito moveamini* glossed *Si moveamini; cito est.*** Rendered "If you be
   moved; it is soon, for nothing is brought upon you which lasts long." ⚠ The semicolon is
   Migne's, in that position, and it makes the sentence read oddly in both languages: the
   apodosis *cito est* has no expressed subject and no obvious complement. Read as "it is
   [only] for a short while," which *nihil … quod diu duret* confirms. **Nothing supplied
   into the English**; the elliptical shape is preserved and logged here instead.

5. **0621C · *In virtute* perseverantiae.** Migne's italic closes at *virtute*, so the English
   italic closes at "power" and "of perseverance" stands outside it, exactly as printed.

6. **0623C · *importunis* / *portu*.** *liberemur ab **importunis** … nec stant in **portu**
   quietis.* There is a play on *importunus* / *portus* which no English carries. Rendered
   "importunate men" and "haven of quiet," which keeps the Latinate first word so a reader
   with the parallel column can see the figure. ⛔ Not marked; a lost pun is not a defect
   (Pattern 9).

7. **Register.** Addressees are plural throughout (Thessalonians, *vobis*, *fratres*), so
   Pattern 17 gives **you**, never *thou*, in every second-person clause of both chunks. No
   singular addressee occurs in this work.

8. **Both notes are citations, not prose.** `(AUG., lib. XX, de Civit. Dei, c. 19.)` and
   `(Matth. VI)` stay `[n:]` with contents untranslated. Neither is a candidate for Pattern
   15; judged by content, both are pure locators.

9. **The AUG. note sits *inside* the italic span** at 0623A
   (`*Ideo mittet illis Deus. [n: …]*`). Reproduced in that position, inside the italics.

10. **Em-dashes: none introduced.** Where Latin colons and semicolons invited one, a comma,
    colon, or full stop was used instead.

---

## §6 · NEGATION — the passages read slowly, and what each one says

Every printed negative is carried. None is added. Listed because the launch brief names them.

- **0621A · *non parcit impiis qui non parcit justis.*** "he spares not the ungodly who spares
  not the just." Both negations stand; the sentence is an *a fortiori* and construes as it is.
- **0621A · *His qui non noverunt Deum. Nam alii sunt qui nesciunt legem.*** Two different
  negated verbs (*non noverunt* / *nesciunt*) distinguishing two groups; rendered "have not
  known" and "know not" so the distinction the gloss is drawing survives.
- **0621B · *Semper sentient poenas, non tamen semper deficient.*** ⭐ Rendered "They will
  always feel the penalties, yet they will not always fail." *deficere* = to give out, to be
  used up. The point is that the damned are not consumed by what they suffer, so the
  suffering can be endless. ⛔ **Rejected: rendering *deficient* as "cease" or "perish" to
  make the antithesis sharper in English** — both are readings, not translations, and the
  gloss's own antithesis is *sentient* against *deficient*, feeling against being used up.
  The apparent paradox is the plate's and is left standing.
- **0621C · *ut a confessione **nullo modo** flecti possint.*** "in no wise." Kept.
- **0621C · *Non cito moveamini* … *Neque per spiritum* … *Neque per Epistolam*.** Three
  negations in three consecutive lemmata, all carried: "Be not soon moved," "Nor by spirit,"
  "Nor by epistle."
- **0621C · *nolite credere.*** "do not believe him." Object supplied (*si quis dicat*); named
  in §4's spirit, recorded here.
- **0621C · ⭐ *Non hoc ita dicit **quin** velit, ut habeant succinctos lumbos…*** The hardest
  negation in the work: *non … quin* is a double negative meaning "he does not say it in such
  a way that he would not wish." Rendered "**He does not say this in such a way as not to
  wish** that they should have their loins girt…" ⛔ **Rejected: "He does not say this so as
  to forbid…"** and **"He says this without meaning that they should not…"** — both collapse
  the two negatives into one and would be a repair. Both printed negatives appear.
- **0622A · *nulli dubium est.*** "it is doubtful to none," not "it is certain." The negation
  is Migne's construction and stays.
- **0622A · *non per naturam, sed per imitationem.*** Kept.
- **0622B · *nec aperte exponit, et ideo nos nescimus, nisi quod…*** Three negatives (*nec*,
  *nescimus*, *nisi*) in one sentence, all carried: "and he does not openly expound it, and
  therefore we know not, save that…"
- **0622B · *Apostolum **non** id aperte scribere voluisse.*** "the Apostle was unwilling to
  write this openly." The negative attaches to *voluisse*, not to *scribere*; a rendering
  "wished not to write" would say the same, but "was unwilling to write" keeps *voluisse*
  as the negated verb.
- **0622C · *ut **non** erubescat homo adulterari vel furari, sicut **nec** ambulare vel
  loqui.*** "so that a man blush not to commit adultery or to steal, as neither to walk or to
  speak." ⚠ The *nec* clause is elliptical (it depends on *erubescat*), and the English keeps
  the ellipsis rather than expanding it to "as he does not blush to walk or to speak."
- **0623A · *vel quia **non** vera ut videntur, sed phantastica erunt.*** "either because they
  will not be true as they appear, but phantastic." ⚠ Migne opens with *vel* and the second
  arm follows (*Vel si vera*), so "either … or"; the negation sits inside the first arm.
- **0623B · *haec omnia dedit **non** merito nostro, sed in gratia sua.*** Kept.
- **0623C · ⭐ *quia **nondum** acceperunt omnes fidem per me qui accepturi sunt.*** "because
  **not yet** have all received the faith through me who are to receive it." ⚠ Word order in
  English follows the Latin so *nondum* keeps initial force in its clause.
- **0623C · *nec stant in portu quietis.*** "and stand not in the haven of quiet."
- **0623C · *nec vobis orantibus omnes sunt credituri.*** "not even with you praying will all
  believe." *nec* read as "not even," which the *sed tantum praeordinati* that follows
  requires.
- **0624A · *cum illi haec non faciant* / *non ambulant secundum traditionem* / *quod in illis
  non videtis* / *Non est opus ut exponam* / *quod non inquieti fuerimus*.** Five negations in
  one paragraph, all carried.
- **0624A · *Apostolus non solum verbis docebat, sed hortabatur et factis.*** Kept.
- **0624B · ⭐⭐⭐ *ut quod utiliter charitas monet, **non solum** facere velint, sed **nec**
  intelligere.*** ⛔ **REPAIRED after the blind read, see §9.1.** Now "so that they not only
  **wish** [sic: *velint*] to do what charity profitably admonishes, but not even to
  understand it." *velint* is **wish**, as everywhere else in this work. The first rendering
  ("are not only **unwilling** to do") translated it as its opposite by pressing the *non* of
  *non solum … sed* into double duty, which that correlative does not permit.
- **0624B · ⭐ *ut **non** compellantur egestate necessaria petere.*** "that they be **not**
  compelled by want to beg for necessaries." ⚠ *necessaria* is the object of *petere*, not an
  adjective on *egestate*; "compelled by necessary want" is the misreading to watch for.
- **0624B · ⭐ the densest sentence in the work: *Non enim hoc ideo dictum est, ut **non**
  procurent quantum necessitati sat est, unde honeste potuerunt, sed **non** ut ista
  intueantur, **nec** propter ista faciant quidquid…*** Four negatives. ⛔ **PARTLY REPAIRED
  after the blind read, see §9.2.** All four were present, but the third had been **moved**:
  *sed **non ut*** was rendered "but that they should **not** look," i.e. as *ut non*, which
  is a different scope. Now "but **not in order that** [sic: *sed non ut*] they may look upon
  these things." ⚠ A negation can be fully **present** and still be **wrong**, because scope
  is not tallied. That is why the counting check did not catch it.
- **0624C · *Non enim in reprehensionem venit qui humanus est in largiendo, sed hic qui…***
  "For he does not come under reproof who is kindly in bestowing, but he who…" Kept.
- **0624C · *Nolite deficere.*** Rendered "**Faint not.**" ⛔ Rejected: Douay's "do not be
  weary in well doing," which imports *benefacientes* from 3:13 that Migne does not print in
  the lemma.

---

## §7 · READ CLEAN — sections examined and found without defect

- **ARGUMENTUM (0619D).** Three clauses, no divergence, no crux. *acolythum* rendered
  "acolyte," the technical order-word, per the register rule on institution vocabulary.
- **0620D, VERS. 3 entire.** Both lemmata agree with 1:3; the gloss construes without
  strain.
- **0621A, VERS. 7 gloss and VERS. 8 gloss.** Clean apart from the lemma case noted in §2a.
- **0621B, VERS. 10 gloss.** Clean.
- **0622A, VERS. 4 gloss** (Augustine's *in templum* discussion). Clean; the Greek-reading
  argument is Migne's own and is reproduced whole, see §2c and §5.3.
- **0622B, VERS. 6 gloss on *Suo tempore*.** Long and clean; a single ablative-absolute chain
  (*Completa accessione … qua impleta … impleto tempore*) rendered as three, with the sense
  order preserved.
- **0622C, VERS. 7 gloss.** The Nero/Enoch/Elias paragraph is clean; the four *Vel* limbs of
  *Donec de medio fiat* are four distinct readings and are kept as four, not merged.
- **0623A–0623B, VERS. 12/13/15 glosses.** Clean apart from the address offset of §1b.
- **Chunk 1 entire, VERS. 1, 6, 9, 11, 13 glosses.** Clean.

---

## §8 · WHAT A BLIND READER SHOULD HIT HARDEST

In order of how much I want a second pair of eyes.

1. **⭐⭐ 0623C · *Et malis,* qui persequuntur infideles.** The one call I am least sure of,
   and it is the site to check first. Two readings both construe:
   - **(a) *infideles* accusative, the object:** "who persecute **unbelievers**." The
     grammatically dominant reading of the bare words. But it makes no sense in the argument:
     the gloss is dividing Paul's *importunis et malis hominibus* into unbelievers who
     *resist* (already defined as *infidelibus* one clause earlier) and wicked men who
     *persecute* — and what wicked men persecute is the faithful, not other unbelievers.
   - **(b) *infideles* nominative, predicative to *qui*:** "who, **being unbelievers**,
     persecute." Requires no emendation, keeps every printed word, and construes with the
     argument.
   - **Adopted: (b)**, rendered "**who, being unbelievers, persecute.**" Reading (a) was
     rejected on sense; a third possibility, that *infideles* is a compositor's error for
     *fideles* ("who persecute the faithful"), was rejected because it needs the plate to be
     wrong and (b) does not. ⚠ If the foot-of-page apparatus or the underlying Glossa
     tradition shows *fideles*, this becomes a `[sic:]` site and the English should change.
     **Flagged, and a call was still made rather than left open.**
2. **⭐ 0621B · *non tamen semper deficient*** (§6). The rendering "will not always fail" is
   literal and the antithesis is genuinely odd in English. Check that it has not been quietly
   improved.
3. **⭐ 0622C · *jam … revelabilur*** — the subject of *revelabitur* (§4, last entry of the
   0622C block). *ille iniquus* is adopted over *discessio*; both formally construe.
4. **0621B · *ut dignetur, id est dignos judicet*** — the object "you," supplied from Vulgate
   1:11 rather than from the sentence (§4). The single most Vulgate-dependent word in the
   English.
5. **0622A · *refuga*** rendered "deserter" (§2a). Alternatives "renegade" and "apostate" were
   weighed; "deserter" was chosen because *utique a Domino Deo* names what he deserts *from*,
   and "deserter … from the Lord God" carries that in English where "apostate from" is
   pleonastic and "renegade" loses the direction.
6. **0624B · the four-negative sentence** (§6, §9.2). All four survive **and each is now in
   its printed position**; a tally alone will not confirm this, so read the scope.
7. **The verse addresses** (§1). Confirm nothing was renumbered anywhere.

---

## §9 · WHAT A BLIND POLARITY READ FOUND, AND THE MECHANISM

A blind polarity reader, **which never saw this file**, read 8987 and returned **three real
defects, all in col. 0624B**. The orchestrator then **confirmed all three against the plate**
(archive.org `patrologiaecurs06saingoog`, **leaf n316, right-hand column**, read at full
resolution), so the Latin is settled and these were repairs, not proposals. Two further
punctuation restorations and one negation-exponent fix came with them. All are now in the text.

⛔ **Where this happened matters more than what it was.** Each of the three sits **one
paragraph from the `[var:]` at 0623C that this file already reports as correctly taken.**
Consistent apparatus use two columns away is not evidence of use here. That is the documented
shape of the failure, and §2's list of fifty-seven checked lemmata did not protect the prose
between them, because **the lemmata were what I was told to check and the gloss prose was not.**

### 9.1 · ⭐⭐⭐ *velint* rendered as its opposite — the serious class

Migne prints *non solum facere **velint**, sed nec intelligere*. I wrote "**not only unwilling
to do**." *velle* is "wish" everywhere else in this same work, including *ut **velint** haberi
ministri Christi* at 0622C and *quin **velit*** at 0621C, both of which I rendered "wish."
Only here did it turn negative.

**The mechanism, and it is the useful thing on this page: a negation was relocated to make a
sentence run.** The literal rendering does not construe, because Augustine's received text
reads *nolint* and Migne's plate has lost the *n*. Facing a sentence that would not construe,
I took the *non* of the correlative *non solum … sed* and spent it a second time on *velint*.
That is free of charge in English and invisible afterwards: no negative is added and none is
lost, so **every count-based check passes**. Nothing in the apparatus recorded it, and the
resulting sentence reads better than the true one.

⛔ **That is precisely the case the rule is written for.** The defect belongs to Migne, and
this edition exists to show it. Now rendered "so that they not only **wish** to do what
charity profitably admonishes, but not even to understand it," with `[sic: *velint*]` on the
verb. The sentence is odd. It is supposed to be.

### 9.2 · ⭐⭐ *sed non ut* smoothed into *ut non* — the same mechanism, one line later

Migne prints *sed **non ut** ista intueantur*: "but **not in order that** they may look upon
these things." I wrote "but that they should **not** look upon these things," which is *ut
non* — the same two words, the negation moved across the conjunction, and the scope changed
with it.

⚠ **This is why §6 could report "all four negatives are present in the English" and still be
wrong.** Presence is a tally; scope is not. A relocated negation is invisible to any check
that counts. It is also invisible to the translator, because the version that survives is
always the one that reads better.

And, exactly as in 9.1, the sense the passage wants **is** the smoothed one: the following
*nec … faciant* shows it, and Augustine reads *sed ut non*. ⛔ **That is the argument for
logging the defect, not for translating it away.** Now literal, with `[sic: *sed non ut*]`.

### 9.3 · ⭐⭐ *doceat* given a second agent

*cum multis aliis locis epistolarum quid hic sentiat **Apostolus** apertissime **doceat***.
I supplied "he" for *doceat* and left *Apostolus* on *sentiat*, producing two agents where
the paragraph has one. The *cum*-causal is the reply to the mist-drawers, and its whole force
is that **Paul himself** settled the question elsewhere; Augustine's transmitted text has
*apostolus* as the subject of *doceat*. Repaired to "since **the Apostle** in many other
places of the epistles most plainly teaches what **he** here means."

⚠ §4 had flagged this site, set out both readings, and then **supplied the wrong one anyway**.
A flagged passage is not a checked passage. The flag stands in this file as evidence that the
warning was read and did not work.

### 9.4 · Punctuation restored — matched by position, never by tally

Migne's mark is authoritative wherever it falls, and four had been normalised toward English
habit rather than reproduced:

| col | Migne prints | I had | now |
|---|---|---|---|
| 0621C | colon at *quod fides exigit**:** et sine quibus* | comma | colon |
| 0622B | **two** colons (*ab utroque imperio**:*** … *intrat ad fidem**:***) | semicolon, then colon | colon, colon |
| 0622C | colon at *de medio mundi**:** quia omnes undique* | comma | colon |
| 0624B | Matt. VI quoted **with** an internal comma at its first occurrence and **without** one at its second | printed without both times | each reproduced as printed |

⭐ The 0624B item is its own small lesson: I had **conformed the two citations to each other**,
which is the same instinct as conforming a lemma to the Vulgate, applied to punctuation. The
plate prints them differently and now so do we.

### 9.5 · *non … voluisse* at 0622B given an exponent

*Apostolum **non** id aperte scribere voluisse.* "Was unwilling to write" is not wrong in
sense, but it leaves the printed *non* with **no exponent in the English**, so a later checker
grepping the negations will not find it, and *voluit/noluit* is a named class in this work's
defect vocabulary. Now "**did not wish** to write this openly." §6's entry for this line,
which argued for "was unwilling," is superseded: it weighed the sense and forgot the checker.

### 9.6 · Confirmed correct by the plate and by the reader — recorded so they are not churned

- **0623C · *qui persequuntur infideles*** read as nominative-appositional. My §8.1 call
  stands; the preceding clause settles it. ⭐ The site I was least sure of was **not** the site
  that was wrong.
- **0622C · *revelabitur*** with *ille iniquus* as subject: the ablative absolute has already
  revealed the *discessio*.
- **0621C · the *non … quin … ut* triple**: all three members survive.
- **0624C · *eorum enim deus venter est, qui … provident***, the mismatched relative:
  confirmed on the plate, rightly not smoothed.
- **Both misnumbered `VERS.` runs in CAPUT II** (§1a, §1b): correctly reproduced.
- **0622C · *tollatur* and *manifeste appareat*** rendered jussively: declined by the
  orchestrator as not worth churning. The subjunctive is the lemma's own, carried over from
  the suppressed *donec*, and the distinction is drawn correctly three lines on.
- **0621B · the double quotation marks on "to give" / "to undergo"**: kept. English needs them
  to mark cited words.

### 9.7 · CLOSED · the one-word discrepancy was the CROP, not the plate and not the twin

**Resolved on a re-read of leaf n316 with the left margin widened. The plate prints
*quidquid Evangelii praeconio facere **jubentur*.*** Our Latin twin agrees, and the English
"whatever they are **bidden** to do by the proclamation of the Gospel" is correct.
**Nothing changed; no source-pipeline gap.**

⭐ **Keep the mechanism, because it cuts against the plate reader as much as the translator.**
The first transcription read *debentur*. **This Google scan clips line-initial characters down
the inner column of several leaves**, and *jubentur* begins its line, so the crop returned
`…bentur` — and the missing head was **completed from context**. That is exactly how a false
reading enters the record: not by misreading a letter, but by supplying one that was never
seen, in a word that then construes.

⚠ It is also the same mechanism as §9.1 and §9.2, one level up. There, a sentence that would
not construe was made to run by moving a negation; here, a word that would not construe was
made to run by restoring a letter. **Both repairs are invisible afterwards and both produce
something that reads better than the truth.** The clipping is a known property of this scan:
it is what made 8970's *Nephthali* need a 900 dpi read.

**The rule, for the next book: when a plate transcription and the Latin twin differ by one
word, widen the crop before believing the plate.** ⛔ And note which way this one went: the
twin was right and the plate reading was wrong, so "the plate settles it" is true only of a
plate that has actually been seen whole.

Also confirmed on the same re-read: *sed non ut ista intueantur, nec propter ista faciant*.
**Repair 9.2 stands exactly as made.**

### 9.8 · The standing lesson for the next Glossa book

**A negation relocated to make a sentence run is the defect that no count can see.** Both 9.1
and 9.2 add nothing and drop nothing; they move something. Every parity check in the toolchain
passed on both, twice, and this file argued the wrong reading confidently in prose.

The only test that catches it: **for each printed negative, name the single word it attaches
to in the Latin, then find that same word in the English and check the negative is on it.**
Not "are all the negatives present," which was the test I ran and reported passing in §6.

⭐ And the second lesson: **the failure was in the gloss prose, not in the lemmata.** The
launch instructions named the lemmata, I checked all fifty-seven, and all fifty-seven were
right. The three defects were in the sentences between them, where nothing had been named.


---

## ⛔ PLATE SWEEP, 2026-08-29 — every `[sic:]` in this work read at Migne's plate

This work's `[sic:]` markers stood on columns nobody had read. All were read this session from the on-disk PL 114 scan at 300 dpi (500 dpi where a single letter decided it), full page width, with the volume's page map re-calibrated against the printed corner numbers **before** the read.

**A `[sic:]` asserts a defect in MIGNE'S TYPE, and our Latin is not the printed page — it is Corpus Corporum's transcription of it.** Where the plate disagrees with our file, the fault is ours and the accusation is withdrawn.

### Confirmed — Migne's own defect; the marker stands

| col | the plate prints |
|---|---|
| 0624B | **velint** — plate prints what we print |
| 0624B | **sed non ut** — plate prints what we print |

Full ledger for all 23 works swept: `data/plate-sweep/2026-08-29-sic-sweep.tsv`.
