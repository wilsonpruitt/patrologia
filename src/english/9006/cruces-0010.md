# *Glossa ordinaria*, **Prophetia Jeremiae** (PL 114) — cruces, chunks 0010–0014 (cols 0031B–0044D)

One translator, five chunks, 5,417 Latin words (Jer. 15–30, `CAPUT XV`–`CAPUT XXX`).
`verify-english.mjs` clean. EN/LA ratio 1.48–1.55 (markers stripped), against the
Tier-2 expectation of ~1.5×.

**Apparatus fired in this batch: 4 `[var:]` · 1 `[ed:]` · 0 `[sic:]` · 0 `[cj:]` · 0 `[d:]` ·
0 `[nt:]`.**

⛔ **CORRECTED 2026-08-29, after the plate gate: the `[sic:]` count is 2, not 0** — `0033D`
*pμtantes* (chunk 0010) and `0037A` *Nuntlis* (chunk 0012). Final for chunks 0010–0014:
**4 `[var:]` · 2 `[sic:]` · 1 `[ed:]` · 0 `[cj:]`.** See §7. The zero above and the ⛔ paragraph
below it are kept, not deleted, because the policy they state was never overturned — **neither new
marker is a letter-level accusation against Migne of the kind that policy withheld.** Both are the
opposite direction: Corpus Corporum silently *repaired* a defect in Migne's own type, our Latin
therefore read correctly, and no check we own could see the site at all. Only a plate could.

Notes carried verbatim: 35 · 33 · 26 · 10 · 17 = 121, exact parity with the
Latin twins. Column anchors 11 · 12 · 12 · 12 · 8 = 55, verbatim, in order, each checked
against the word it stands beside in the Latin (§6). Guillemets: zero in either language.

⛔ **THE SHIP TEST GOVERNED EVERY MARKER DECISION IN THIS BATCH, AND IT IS WHY THE
`[sic:]` COUNT IS ZERO.** No column in 0031B–0044D has been read at Migne's plate
(`data/plate-reads.json` carries no `9006` entry). A `[sic:]` accuses Migne's type and a
`[var:]` asserts his text diverges from a witness; our Latin is Corpus Corporum's
transcription, not the page. So the rule applied throughout was:

- **A non-word, or a real word with no grammatical slot, is CARRIED in italics with a crux
  and named here as a plate candidate — and takes no marker.** Three sites (§3).
- **A `[var:]` fires only where the divergence is of a shape the digitization cannot
  manufacture** — an added or dropped *phrase*, a different *lexeme*, a changed word order
  that alters the syntax. **A one- or two-letter difference gets a crux and no marker**,
  because that is exactly what OCR produces (§4b). Four `[var:]` fired; **eleven candidate
  divergences were declined on this ground and are listed with reasons.**

---

## §1 · THE 7a″ DIVERGENCE LIST — every lemma in cols 0031B–0044D, checked against the Clementine

Method: each italic span in `data/briefs/9006-lemmata.txt` for these bands was read against
`sources/vulgate/clementine-flat.txt` **at the verse it glosses**, not merely searched for
somewhere in the canon (the pre-scan's ✓ is not clearance). Book/chapter/verse cited.

### 1a. Lemmata that agree with the Clementine EXACTLY (allowing for clipping at the lemma's end)

**These were checked and found clean. They are recorded because a findings-only list cannot
be told apart from a report by an agent that never looked.**

*Jer. 15* — 15:1 *Et dixit Dominus* · 15:3 *Et visitabo super eos* · 15:4 *Et dabo eos in
fervorem* · 15:5 *Quis enim miserebitur tui?* · 15:6 *Retrorsum abiisti* · 15:8
*Multiplicatae sunt mihi* · 15:9 *Septem* · 15:10 *Vae mihi, mater mea* · 15:11 *Si non
reliquiae* / *Si non reliquiae tuae in bonum* / *occurri tibi* · 15:13 *Et thesauros* /
*In omnibus peccatis tuis* · 15:14 *Ardebit* · 15:15 *Noli in patientia tua suscipere me* ·
15:17 *Non sedi* / *A facie manus tuae* / *Solus sedebam* · 15:19 *Si separaveris* / *Quasi
os meum*.
*Jer. 16* — 16:1 *Et factum est verbum* · 16:4 *Mortibus aegrotationum* · 16:5 *Ne
ingrediaris domum* · 16:6 *Neque plangentur* · 16:9 *Ecce ego auferam* · 16:12 *Sed et vos*
· 16:14 *Ecce dies veniunt* · 16:16 *Ecce ego mittam piscatores* / *Cavernis petrarum* ·
16:18 *Duplices iniquitates* · 16:19 *Ad te gentes venient* / *Ab extremis* · 16:20 *Deos*.
*Jer. 17* — 17:1 *Peccatum Juda scriptum est* (twice) · 17:3 *Excelsa* · 17:5 *Maledictus
homo* · 17:7 *Benedictus vir* · 17:8 *Quod ad humorem* · 17:11 *In dimidio dierum* · 17:14
*Sana me, Domine* · 17:15 *Ecce ipsi dicunt ad me: Ubi est verbum* · 17:21 *Custodite
animas* · 17:24 *Ut non inferatis onera per portas civitatis hujus in die sabbati* (verbatim,
whole) · 17:27 *Si autem non audieritis me, ut sanctificetis diem sabbati, et ne portetis
onus, et ne inferatis per portas Jerusalem* (verbatim, whole) · *Si autem*.
*Jer. 18* — 18:1 *Verbum quod factum est ad Jeremiam a Domino dicens* · 18:4 *Et dissipatum
est* · 18:7 *Repente loquar* · 18:11 *Ecce ego* · 18:12 *Post cogitationes* · 18:16 *Ut
fieret terra* · 18:17 *Sicut ventus* · 18:19 *Attende, Domine, ad me, et audi vocem
adversariorum meorum* (verbatim, whole) · 18:23 *Ne propitieris iniquitati eorum*.
*Jer. 19* — 19:1 *Haec dicit Dominus: Vade et accipe lagunculam* · 19:4 *Eo quod* · 19:5
*Quae non praecepi* · 19:6 *Topheth, et vallis filii Ennom* · 19:7 *Et dabo cadavera* ·
19:11 *Sic conteram populum istum* / *Et in Topheth sepelientur* · 19:13 *Et erunt domus
Jerusalem et domus regum*.
*Jer. 20* — 20:1 *Et audivit Phassur* · 20:3 *Cumque illuxisset* / *Non Phassur* · 20:7
*Seduxisti me, Domine* / *Factus sum in derisum* · 20:12 *Et tu, Domine exercituum* /
*Videam* / *Tibi enim* · 20:13 *Quia liberavit* · 20:14 *Maledicta* / *Maledicta dies in qua
natus sum* · 20:15 *Maledictus vir*.
*Jer. 21* — 21:1 *Verbum quod* / *Quando misit* / *Phassur filium* · 21:4 *Ecce ego* · 21:7
*Dabo Sedeciam* / *In manu* · 21:8 *Et ad populum* / *Ecce ego do coram vobis* · 21:12
*Judicate mane* · 21:13 *Ecce ego ad te habitatricem* · 21:14 *In saltu*.
*Jer. 22* — 22:1 *Haec dicit* · 22:3 *Facite judicium* · 22:6 *Si non posuero* · 22:10
*Nolite flere mortuum* · 22:11 *Ad Sellum* · 22:13 *Vae qui aedificat* · 22:18 *Non plangent
eum* · 22:24 *Vivo ego dicit* / *Quia si fuerit* · 22:28 *Vir iste* · 22:30 *Scribe* /
*Sterilem*.
*Jer. 23* — 23:1 *Vae pastoribus* · 23:5 *Ecce dies veniunt, dicit* · 23:7 *Propter hoc* ·
23:9 *Quasi homo madidus a vino* / *A facie Domini* · 23:10 *Luxit terra* · 23:11 *Propheta
namque* · 23:12 *Afferam super eos mala* (Vulg. *afferam **enim** super eos mala* — the lemma
simply begins one word later) · 23:14 *Et in prophetis* · 23:15 *A prophetis* · 23:18 *Quis
enim?* · 23:19 *Ecce turbo* · 23:25 *Audivi quae dixerunt* / *somniavi* · 23:26 *usquequo
istud* · 23:27 *Somnia eorum quae* · 23:28 *Quid paleis?* · 23:29 *Quasi ignis* · 23:30 *Qui
furantur* · 23:39 *Et derelinquam*.
*Jer. 24* — 24:1 *Ostendit* / *Duo calathi* / *Positi ante templum* · 24:2 *Et calathus unus*
· 24:4 *Et factum est* · 24:6 *Et ponam oculos meos*.
*Jer. 25* — 25:1 *Verbum* / *Anno quarto* · 25:4 *Et misit Dominus ad vos omnes servos* /
*Neque inclinastis* · 25:6 *Post deos* · 25:9 *Et assumam* / *Nabuchodonosor servum meum* ·
25:10 *Perdamque* · 25:11 *Et servient* · 25:15 *Sume calicem vini furoris* · 25:18
*Jerusalem et civitatibus Juda* · 25:19 *Pharaoni regi Aegypti* · 25:22 *Tyri et universis
regibus* · 25:25 *Regibus Elam et cunctis* · 25:26 *Et rex Sesach* · 25:31 *Judicium Domino*
· 25:34 *Ululate, pastores*.
*Jer. 26* — 26:1 *In principio regni* · 26:2 *In atrio domus* · 26:3 *Si forte audiant* ·
26:4 *Si non audieritis* · 26:6 *Dabo domum istam sicut Silo* · 26:10 *Portae domus* · 26:11
*Et locuti sunt* · 26:12 *Et ait* / *In veritate enim misit me Dominus ad vos* (verbatim,
whole) · 26:13 *Nunc ergo bonas* · 26:16 *Et dixerunt* · 26:20 *Fuit quoque* · 26:22 *Et
misit rex* · 26:24 *Igitur manus Ahicam*.
*Jer. 27* — 27:1 *In principio regni* · 27:2 *Haec dicit Dominus* · 27:5 *Terram et homines*
/ *In fortitudine* / *Et dedi* · 27:6 *In manu Nabuchodonosor* / *Insuper et* · 27:7 *Donec
veniat* · 27:12 *Et ad Sedeciam* · 27:14 *Nolite audire* / *Non servietis* · 27:16 *Et ad
sacerdotes* · 27:17 *Ut vivatis* · 27:18 *Occurrant Domino* · 27:19 *Ad columnas*.
*Jer. 28* — 28:1 *Et factum est* / *In domo Domini* · 28:3 *Omnia vasa* · 28:6 *Amen, sic* ·
28:7 *Verumtamen* · 28:10 *Et tulit* · 28:13 *Ananias* · 28:14 *Et facies* / *Catenas* ·
28:15 *Et dixit* · 28:16 *Hoc anno* · 28:17 *Mense septimo*.
*Jer. 29* — 29:1 *Et haec* / *Verba libri* / *Ad reliquias seniorum* · 29:6 *Accipite
uxores* · 29:8 *Non vos seducant* · 29:10 *Cum coeperint* / *Septuaginta anni* · 29:14 *Et
reverti* · 29:17 *Quasi ficus* · 29:19 *De nocte* · 29:21 *Ad Achab* · 29:24 *Ad Semeiam* ·
29:27 *Quare non increpasti* · 29:31 *Haec dicit* / *Ecce ego visitabo*.
*Jer. 30* — 30:1 *Hoc verbum* · 30:7 *Vae quia magna* · 30:9 *Et David* · 30:10 *Serve meus*
· 30:12 *Plaga* · 30:16 *Propterea* · 30:18 *Ecce ego convertam* · 30:19 *Ludentium, et
multiplicabo eos*.

**Inline NT and other scripture that agrees exactly:** Matt. 21:43 *Auferetur a vobis regnum
Dei, et dabitur genti facienti fructus ejus* (0032A) · Rom. 3:2 *credita sunt illis eloquia
Dei* (0032A) · 1 Cor. 11:30 *Ideo inter vos multi infirmi et imbecilles* (0032C) · Phil. 4:4
*Gaudete in Domino semper, iterum dico gaudete* (0033A; and again 0040A, where Migne sets a
comma after *dico*) · Matt. 27:25 *sanguis ejus super nos et super filios nostros* (0035B) ·
Ps. 72:23 *Ut jumentum factus sum apud te* (0038B) · Jer. 23:4 *[Et] suscitabo super eos
pastores* (0038B — see §4a.1) · Ex. 32:6 *Sedit populus manducare et bibere, et surrexerunt
ludere* (0044B) · John 3:18 *qui non credit jam judicatus est* (0041A, Vulg. *qui **autem**
non credit*) · Jer. 16:13 *Et ejiciam vos* (0042C).

### 1b. Where Migne's lemma is a FRAGMENT — how it was rendered, and the rule used

Convention 3 (Ruth `cruces.md` §1.2) renders a fragment as the phrase it stands for. This work
prints fragments in two shapes, and **the shape decided the treatment**:

- **A fragment Migne himself marks as truncated with a comma + `etc.` is rendered from the
  printed words only**, with the comma and `etc.` carried through — Migne has already told the
  reader that words are elided, so supplying them would add text he chose not to print.
  So *Ecce ego,* etc. (0036D, Jer. 21:4) is **"*Behold I,* etc."**, not an expansion.
- **A bare fragment that ends in a full stop, with nothing marking the elision, is expanded**,
  because there the stump is simply not English. Expanded here: *Si non reliquiae.* → "If thy
  remnants be not unto good" (three occurrences, all rendered alike — the brief's rule that a
  stump is resolved by EXPANDING, never by contracting its twin) · *Quod ad humorem.* →
  "Which sendeth forth its roots toward moisture" · *Ecce ego.* (0035A, Jer. 18:11) → "Behold
  I frame evil against you" · *Ut fieret terra.* → "That the land might become a desolation" ·
  *Nunquid de petra:* → "Shall the snow of Libanus fail from the rock:" (Migne's colon kept) ·
  *Non Phassur.* → "Not Phassur hath the Lord called thy name" · *Maledicta.* → "Cursed be the
  day wherein I was born" · *Nunquid?* → "Is this man Jechonias a broken earthen vessel?" ·
  *Quis enim?* → "For who hath stood in the counsel of the Lord?" · *Quid paleis?* → "What
  hath the chaff to do with the wheat?" · *Nunc ergo bonas.* → "Now therefore make your ways
  good."
- ⚠ **TWO BARE FRAGMENTS WERE DELIBERATELY NOT EXPANDED, and the reason is not inconsistency
  but DOUBLING.** At 0038A Migne glosses *Scribe.* and then, four lines later, *Sterilem,* —
  both out of Jer. 22:30 *Scribe virum istum sterilem*. Expanding the first would print
  "barren" twice and make the second lemma look like a repetition of the first. Same at
  0038D–0039B, where *Nunquid non verba mea?* is followed by *Quasi ignis.* out of Jer. 23:29
  *Numquid non verba mea sunt quasi ignis*. Both were therefore rendered from the printed
  words: **"Write."** and **"Are not my words?"** ⭐ **The general form, offered for the rest
  of the book: convention 3 expands a fragment to the phrase it stands for, EXCEPT where the
  next lemma in the same gloss is the continuation of that same phrase.**
- **Complete one-word lemmata are rendered as they stand** and were not expanded, per the
  brief's "name the control's class": *Septem.* · *Ardebit.* · *Deos.* · *Excelsa.* ·
  *Verumtamen.* · *Ananias.* · *Catenas.* · *Plaga.* · *Propterea.* · *Ostendit.* ·
  *Verbum.* · *Videam.* · *Perdamque.* · *Venit.* (on which see §3.3).

---

## §2 · THE FOUR `[var:]` MARKERS — what each claims, and why the shape licenses the claim

### 2.1 · 0032D · 1 Cor. 7:29 — Migne's quotation carries a CLAUSE the Vulgate does not

⚠ **This heading read `0032C` and is corrected to `0032D`.** Ruled 2026-08-29 by reading the
chunk: `0010.md` prints the `[0032D]` anchor in the paragraph before this one and the next anchor is
`[0033A]`, three paragraphs later, so **the `[var:]` stands under 0032D by anchor position** — which
is also where `plate-gate.mjs` resolves it, where `data/tei-patches/9006.json` files the plate read,
and what `migne.app/pl/114/32d` will show a reader who follows the citation. ⛔ **The marker itself
was not moved**; only this heading was wrong.

> *Quia tempus breve est **et consummatio imminet**, ut qui **uxores** habent, sint quasi non
> habentes* [n: (I Cor. VII)]

Clementine 1 Cor. 7:29: *Hoc itaque dico, fratres: tempus breve est: reliquum est, ut et qui
habent uxores, tamquam non habentes sint.* **The four-word clause *et consummatio imminet*
is in no part of 1 Cor. 7 and no digitization inserts a clause.** `[var:]` fired, on that clause and
on the word order.

⛔ **The marker's second claim has been WITHDRAWN, and the quotation above is corrected.** As
written, this entry read *ut qui **exores** habent* and said the `[var:]` "also carries the
Vulgate's *uxores*, which is what lets a reader decode *exores* (§3.1)." **The plate prints
*uxores*, in italic, unmistakably** (p. 21; `data/tei-patches/9006.json`, the work's one `corrupted`
patch). *exores* was Corpus Corporum's, not Migne's — so there was never anything to decode, and a
`[var:]` clause contrasting our reading with the Vulgate's was contrasting the Vulgate with a
digitization error. The Latin is patched to *uxores*; the marker now reads *without* `et consummatio
imminet` *and in a different word order*, and nothing else. **The clause about *et consummatio
imminet* and the word order stands unaltered** — it was never in question, and the plate confirms
it.

### 2.2 · 0034B · Jer. 17:11 — the divergence is what the gloss ARGUES FROM

> ***Novissimum ejus** erit insipiens,* cum omnia subjecta fuerint Christo. *Novissimus
> inimicus destruetur mors.*

Clementine Jer. 17:11: *et **in novissimo suo** erit insipiens* — "in his latter end he shall
be a fool," a prepositional phrase. Migne's *Novissimum ejus* makes "his last" the **subject**,
and the gloss immediately reads it as "his last [enemy]" and yokes it to 1 Cor. 15:26. ⭐ **The
exposition rests on the diverging words**, which is 7a″'s own test, and the divergence is a
change of construction, not of a letter. `[var:]` fired.

### 2.3 · 0038D · Jer. 23:11 — singular against plural, and English has an exponent

> *Propheta namque et **sacerdotes** polluti sunt.*

Clementine: *Propheta namque et **sacerdos** polluti sunt.* Rendered "**the priests**", with
`[var:]`. Fired rather than declined because (a) English has an exponent for number, so
rendering it silently would conceal the divergence; (b) the divergence is an *appended*
syllable, which is not an OCR shape (the digitization drops and confuses letters, it does not
supply a plural ending); (c) it is a **re-quotation** — the VERS. 11 lemma five words earlier
prints *Propheta namque,* alone — and it is plural precisely because the gloss has just said
*in principibus ejus*. ⚠ The rival reading (our transcription's slip) is recorded here and is
the reason this is the batch's least secure marker; a plate read of col. 0038 settles it.

### 2.4 · 0043C · Ps. 141:8 — a different LEXEME, and the gloss turns on it

> *Educ de **carcere** animam meam*

Clementine Ps. 141:8: *Educ de **custodia** animam meam.* Migne's sentence is *de carceribus
corporum liberamur … secundum illud quod male interpretantur haeretici*: **the whole argument
is about prisons of the body**, so *carcere* is not an accident of type but the word the
heretics' misreading hangs on. A different lexeme is not a transcription shape. `[var:]` fired.

---

## §3 · PLATE CANDIDATES — carried in italics, NO marker fired, and each needs one page

⚠ **Status after the 2026-08-29 plate gate:** §3.1 is **settled** (ours, not Migne's — and the
column relabelled 0032D); §3.2 sits on a page that was read with nothing recorded against it;
§3.3–3.5 are on pp. 23 and 26, **the two pages the gate did not reach**, and remain owed. §3.6's
`[ed:]` is unaffected — it makes no claim about type.

⭐ All three are on unread columns and all three are named here so a plate sweep is cheap.
Under addendum A the first is a real word in an impossible slot and the second and third are
non-words or near-non-words: **a non-word suspicion has been right every time.**

### 3.1 · 0032D · *exores* for *uxores* — RAISED, AND SETTLED AT THE PLATE: **OURS, NOT MIGNE'S**

✅ **RESOLVED 2026-08-29. Read the ⛔ below before the entry.** Plate p. 21 prints italic
***uxores***. *exores* was Corpus Corporum's corruption; the Latin is patched
(`data/tei-patches/9006.json`, `direction: "corrupted"` — the only one in the work) and the English
now reads plainly, *"that they who have wives be as those that have not."* **No marker is owed and
none fired**: a CC corruption is not a defect of Migne's type and takes no `[sic:]`.

⛔ **What this cost a reader, and it is the reason the entry is kept.** For as long as it stood, our
English **published the non-word untranslated** — *"they who have exores be as those that have
not"* — presenting a digitization error to a reader as though it were Migne's Latin. The quarantine
reasoning below is sound as reasoning and reached the wrong reader anyway, because the premise it
rests on ("a real word reading oddly is Migne's until a plate says otherwise") is a rule about
*whose* the word is, and the answer to that question was one page render away the whole time. The
heading's column is also corrected, `0032C` → `0032D`, per §2.1.

**The entry as originally written, kept intact:**

*ut qui **exores** habent, sint quasi non habentes.* *Exores* is a well-formed Latin form
(2nd sg. pres. subj. of *exorare*), which is why no `[sic:]` was fired — addendum A's finding
is that a real word reading oddly is Migne's until a plate says otherwise. **But it has no
grammatical slot**: *qui … habent* wants an accusative object and a finite verb cannot supply
one. The Vulgate's *uxores* is certain, an `x`/`u` confusion at the head of the word is the
commonest OCR shape in this corpus, and the whole passage is about a prophet forbidden a wife
(the gloss's own *ne … uxoris quoque et liberorum miseriis torquearis*). **Rendered by
carrying the word untranslated in italics inside the already-italic quotation** (nested
italics are not expressible — Pattern 10's rule), with the Vulgate's *uxores* given in the
`[var:]` beside it, so the sense is outside the quarantine (7a⁗). ⬜ **Plate read owed, col.
0032, PL 114 p. 21.** ← ✅ read; verdict above.

### 3.2 · 0031B · *serta lignea* for *serra lignea* — RAISED AS A PLATE CANDIDATE

*Isaiam **serta lignea** secuit*, of Manasses sawing Isaias asunder. *Serta* is a real noun
(*sertum*, garlands) but only as a neuter plural; the slot here is a feminine ablative
singular of instrument, which *serta* is not, while *serra* ("saw") is exactly that and is the
received form of the legend. **Rendered "he cut Isaias with a wooden *serta*"** — the verb and
its object stay in plain English outside the carried word, so the clause still has the thing it
acts on. **No `[sic:]`**: a `t`/`r` confusion is the digitization's signature and blaming
Migne's type for it is the class from which seven false `[sic:]` were withdrawn in the
2026-08-23 batch. ⬜ **Plate read owed, col. 0031.**

⚠ **Page read, no verdict recorded.** Col. 0031 is on p. 21, which the 2026-08-29 gate read; the
read note for that page speaks only of 0031C/0032C ("heavy ink spatter … scan debris over legible
type, NOT broken sorts — our Latin there is correct") and `data/tei-patches/9006.json` carries no
patch at 0031B, so our Latin still reads *serta lignea*. **That is corroboration, not a recorded
confirmation**, and it is worth exactly what it costs: no marker rests on it. Left as written.

### 3.3 · 0035B · *Venit.* for Jer. 18:18 *Venite* — RAISED, AND RENDERED AS PRINTED

VERS. 18's lemma is *Venit.*; Jer. 18:18 reads *Venite, et cogitemus contra Jeremiam
cogitationes*, and the gloss is about the Jews' plotting *contra Jeremiam vel Christum*.
**Rendered "*He came.*"** — as printed, per Pattern 7 — and not expanded, because expanding a
stump presupposes knowing which word the stump is. A dropped final `-e` is a transcription
shape; **no marker**. ⬜ **Plate read owed, col. 0035 — STILL OWED.** Col. 0035 falls on p. 23, which
is one of the pages the 2026-08-29 gate did **not** read (it read pp. 10–22, 24, 27–36). No marker
stands here, so nothing is blocked.

### 3.4 · 0035A · *ege* for *lege* — a NON-WORD, carried

*quando nullus Judaeorum terram et urbem sanctam ingredi **ege** permittitur.* *Ege* is no
Latin word; *lege* ("by law") construes and is what Jerome's sentence about Hadrian's edict
requires. Carried in italics — "is permitted by *ege* to enter" — with the negation *nullus*
and the verb outside the carried run. **No `[sic:]`, for the reason in §3.2.** ⬜ **Plate read
owed, col. 0035 — STILL OWED**, same unread page as §3.3.

### 3.5 · 0041A · *in furore. Domini.* — a full stop inside a phrase

*conticescent bona pacis et auferentur in furore. Domini.* Rendered exactly so: "shall be taken
away in fury. Of the Lord." *in furore Domini* is the obvious phrase and the stop is almost
certainly not Migne's, but **Pattern 8 forbids deleting a printed mark** and the ship test
forbids asserting the plate is at fault. Recorded; not repaired, not marked. ⬜ **Plate read
owed, col. 0041 — STILL OWED**; col. 0041 is p. 26, also unread. No marker stands here.

### 3.6 · 0044A · the empty parenthesis — the ONE `[ed:]` of the batch

*quae Hebraice suarim **( )**.* An empty parenthesis where Migne sets a Hebrew word, in a
sentence that exists to give the Hebrew (Theodotion's *suarinas*, Symmachus's *novissimas*,
"which in Hebrew are *suarim*"). This is the 11055 signature — an empty element where the plate
has text — and rendered faithfully it reads as **our** bug to any reader who does not open the
notes. `[ed:]` fired per Pattern 13a clause 3: the hole is marked, **nothing is supplied**, and
the note says recovery needs the plate. It is the only place in five chunks where the edition
speaks in its own voice.

---

## §4 · DIVERGENCES FOUND AND DECLINED — the eleven, with reasons

**Declining is not overlooking.** Each of these is a real difference from the Clementine; none
took a marker, and the ground is stated per item.

### 4a. Declined because the SENSE is unchanged (Pattern 14's own bar)

1. **0038B · *Super eos suscitabo pastores* [n: (Ezech. XXXIV)].** Not Ezech. 34 at all: the
   words are **Jer. 23:4**, *Et suscitabo super eos pastores* — the very chapter being glossed,
   with only the word order inverted. **So there is no textual divergence; the SIGLUM is
   wrong.** Citation repair belongs to `data/citation-corrections.json` at index time, never
   to the running text (the Ruth precedent). Two more of the same class in these chunks:
   **0032A** *credita sunt illis eloquia Dei* is cited *(I Cor. I)* and is **Rom. 3:2**;
   **0033C** *Voluntarie nobis peccantibus…* is cited *(Hebr. VI)* and is **Heb. 10:26**.
   ⚠ Do NOT correct any of these in the text.
2. **0035B and 0038B–C · Rom. 11:25–26, quoted twice and differently.** 0035B ends an
   abridgment *usque ad tunc omnis Israel salvus **fiet***; 0038C has *ut postquam intraverit,
   plenitudo gentium, tunc omnis Israel salvus **fiat***. The Clementine reads *donec plenitudo
   gentium intraret, et **sic** omnis Israel salvus **fieret***. Both are the glossator weaving
   Paul into his own syntax (a resumption tail; a *ut … tunc* clause) and **both assert exactly
   what Paul asserts**. Declined — and declined *together*, deliberately: firing on one and not
   the other would have been the incoherence the within-work reconciliation rule forbids.
3. **0033A · Jer. 1:6 *A a a Domine, nescio loqui*** for *A, a, a, Domine Deus, ecce nescio
   loqui, quia puer ego sum*. Compression of a familiar verse, no word changed.
4. **0033C · Luke 12:47** *servus sciens et non faciens voluntatem Domini, vapulabit multis*
   for the Vulgate's much longer *Ille autem servus qui cognovit voluntatem domini sui…*. A
   condensation; every element of the sense survives, both negatives included.
5. **0033C · Heb. 10:26**, **0032A · Matt. 21:43**, **0034B · John 14:6** (*Ego sum vita* for
   *Ego sum via, et veritas, et vita*) — all truncations or compressions that change nothing.
6. **0033C · 1 Cor. 10:4 *Petra enim Christus*** for *petra **autem erat** Christus*; **0036C ·
   Eph. 5:13 *Omne quod manifestatur **lux** est*** for *lumen est* (**and English has no
   exponent** — both are "light"); **0031B · 1 Reg. 12:23 *Absit a me hoc peccatum, **quia**
   cessem orare pro vobis*** for *Absit **autem** a me hoc peccatum **in Dominum, ut** cessem*
   (late-Latin *quia* introducing a noun clause is not a different assertion).
7. **0033B · Jer. 31:29 / Ezech. 18:2 *patrem comedisse uvam acerbam, et dentes filiorum
   obstupescere***. The accusative-and-infinitive is forced by the gloss's own *Injusta
   sententia est*; the singular *patrem* against the Vulgate's *Patres* is the one real
   difference, and it is a two-letter one — §4b.
8. **0040C · Jer. 25:25 *Elam et reges Medorum*** for *cunctis regibus Elam, et cunctis regibus
   Medorum*: a compression inside the gloss's own sentence, not a quotation offered as text.

### 4b. Declined on the SHIP TEST — real differences of a shape the digitization manufactures

⛔ **These are the eleven-minus-list's sharp end, and every one of them would have been a
plausible `[var:]`. None was fired, because a one- or two-letter difference is exactly what
Corpus Corporum produces, and 9003's collation showed the digitization MANUFACTURING a Vulgate
divergence that a collation then dutifully "found."**

- **0031D · *Nunquid* for *Numquid*** (Jer. 15:12; also 0035A, 0037D, 0038D) — orthography,
  Pattern 9, not a defect at all.
- **0040A · *A tertio decimo anno*** for *A tertiodecimo anno* (Jer. 25:3) — word division of a
  compound numeral; both forms are ordinary Latin.
- **0040C · *Philisthiim et Ascalonis*** for *…et Ascaloni* (Jer. 25:20) — genitive for dative,
  **and English has no exponent** in a list of place names.
- **0040C · *Cum impleti*** for *Cumque impleti* (Jer. 25:12) — one enclitic, at a lemma head.
- **0041A · *Ecce egredietur*** for *Ecce **afflictio** egredietur* (Jer. 25:32) — a dropped
  noun. Raised because a dropped word is what §4b exists to catch, and declined because a
  dropped word is also what OCR does. ⬜ plate read would settle it.
- **0042C · *Verba prophetae*** for *verba prophetarum* (Jer. 27:14) — singular for plural,
  with an English exponent, and the gloss's own next words are plural (*pseudoprophetas vocari
  prophetas*). Rendered "the words of the prophet". ⬜ plate read owed, col. 0042.
- **0043B · *Haec dixit Dominus*** for *Haec dicit Dominus* — **rendered as the perfect,
  "Thus hath the Lord said,"** so the divergence survives into the English rather than being
  smoothed into the formula every reader expects. That is the 7a″ discipline; the marker was
  still withheld because *dixit*/*dicit* is one letter.
- **0034B · *Novissimus inimicus destruetur mors*** for 1 Cor. 15:26 *Novissima **autem
  inimica** destruetur mors* — the masculine is what ties it to *Novissimum ejus* in §2.2, but
  **English has no exponent for the gender** (Pattern 9), so there is nothing for a marker to
  show. Recorded, not marked.
- **0031D · *Reliquiae enim tuae in bonum*** against Jer. 15:11 *Si non reliquiae tuae in
  bonum*. **This one is not a variant at all and the proof is on the same line**: Migne prints
  the verse verbatim, *Si non reliquiae tuae in bonum*, two sentences later. The *enim* form is
  the glossator restating the Hebrew oath-formula as the assertion he says it is (*Noli
  considerare praesentia tantum, sed futura*). Declined, and it would have been a false claim.
- **0043C · *Mors viro requies est*** — in no verse of the Clementine. The words correspond to
  Job 3:23 as the Septuagint has it, against the Vulgate's wholly different *viro cujus
  abscondita est via*. **No `[var:]`, because identifying the source verse is itself the
  inference**, and Pattern 14 forbids speculating about why two readings differ. Recorded.
- **0033A · *Cum hujusmodi nec cibum sumere*** for 1 Cor. 5:11 *cum **ejusmodi** nec cibum
  sumere* — "with such a one" either way.

---

## §5 · UNEXPRESSED SUBJECTS — every supplied pronoun, named

Per the brief, each "he/she/it/they" the Latin does not print is named here with what fixes it.

- **0031B** *si liberi nepotesque similia gesserint ad posteros perveniunt* — "**they** come
  down upon the descendants." Subject = the fathers' sins and their punishment, from the
  abridged Jerome on Ex. 20:5 that the *usque ad* has cut out. The alternative (the children
  themselves reaching their descendants) does not construe with *ad posteros*.
- **0031B** *Aegyptias carnes desideravit* — "**he** longed for the flesh of Egypt." Subject =
  *populus*, masculine, lifted from the lemma's addressee (*Retrorsum abiisti*, Jer. 15:6, of
  Jerusalem/Juda). Not Jeremias: it is the people who went backward.
- **0031C** *confusa est in aeternum … perdens populum suum* — "**she** is confounded …
  destroying **her own** people." Feminine subject = *quae peperit septem* of Jer. 15:9, the
  synagogue. Fixed by the verse, not by the sentence.
- **0032D** *si … voluerit* — "if **it** shall have willed to deliver." The nearest and only
  nominative is *sermo doctoris*. A rival reading takes the *doctor* himself as subject and
  construes equally well; **the nominative decided it**, and the difference changes nothing in
  the argument.
- **0033A** *et quotidie deceptorum funera prosternunt in Ecclesia?* — "**they** cast down."
  Third plural with no antecedent in our text: the abridgment removed it, and Jerome's sentence
  is about the deceivers/heretics. Supplied as a bare "they"; nothing narrower is warranted.
- **0033C** *sed et Petro donavit* — "**he** gave also to Peter": Christ, named in the same
  clause (*Petra enim Christus*).
- **0034B** *et derelinquimus per diem* — "we forsake **[them]** through the day." The object
  is Jer. 17:11's *eas* (the riches), which Migne does not print; supplied in brackets, our
  convention for a supplied word.
- **0035A** *Ubi est absque gratia Dei* — "Where **he** is apart from the grace of God." The
  abridgment has cut the antecedent; a bare third singular is all the words license.
- **0036B** *Propheta putaverat … et populus aestimabat quod statim non venerat, non esse
  venturum* — both negatives kept and both on their own hosts (*venerat*; *venturum*).
- **0042C** *sacerdotibus loquitur, et populo, qui jam interitum prophetis annuntiaverat* —
  taken as **the Lord** who had already announced destruction **by the prophets** (*prophetis*
  ablative), because the sentence's next words are his own quoted *Et ejiciam vos* (Jer. 16:13).
  ⚠ The rival takes *qui* as *populus* and *prophetis* as dative ("the people, who had already
  announced destruction to the prophets"); it construes, and it is recorded here rather than
  chosen silently. The reading taken is the one the quoted verse supports.
- **0043C** *ideo mortuum mentiuntur* — "**they** falsely say that he died": the *haeretici*
  named in the preceding gloss (0043B–C), the only third plural in view.
- **0044A** *qui idem erat regni Sedeciae* — "which was the same **[year]**": *annus* is
  elided; supplied in brackets.

---

## §6 · WHAT WAS CHECKED AND FOUND CLEAN

- **Column anchors, all 55**, checked against the word each stands beside in the Latin, not
  merely for presence (brief §2b). **Ten stand mid-construction and were deliberately split
  to match Migne**, and in each of these the English word order was bent to keep the anchor
  beside its Latin neighbour rather than moved to the nearest comfortable place: 0031C (*ut* |
  *qui*), 0032D (*errore* | *quempiam*), 0033C (*apostolicis* | *viris*), 0034B (*mortuus* |
  *est*), 0035A (*arbitrium* | *significat*), 0038A (*Jechonia* | *dicatur*), 0038C
  (*plenitudo* | *gentium*), 0040A (*tredecimo* | *anno*), 0040B (*servum* | *meum*), 0044D
  (*principio* | *Epistolarum*).
- **Punctuation compared PARAGRAPH BY PARAGRAPH** (finer than band; the twins have identical
  paragraph structure, 34 · 50 · 54 · 53 · 38, verified). Colons, semicolons and question
  marks are now **zero-mismatch in every paragraph of all five chunks**. ⚠ **Seven mismatches
  were found and fixed by that test after the first draft read clean by eye** — five supplied
  marks (0010 ×2, 0012 ×1, 0013 ×2, 0014 ×2) and one *deleted* semicolon at 0012 para 8, where
  Migne's *quam in Ecclesia illa permanere; in qua fames sit* had been smoothed into one
  clause. **The by-total count would have hidden four of the seven**, exactly as the brief
  warns.
- **Question marks: 2 · 1 · 6 · 2 · 1**, at parity, each on the Latin's own sentence. Two
  indirect questions (*Quaeritur cum Urias eadem*, *Quaeritur quomodo Joachim rex*, 0041D)
  carry **no** mark in Migne and were given none — Pattern 8b was not needed anywhere here.
- **`usque ad` — decided per occurrence, addendum D.** The five chunks print it **107 times**,
  by far the heaviest run in the Glossa block so far. **106 are the abridgment formula** and
  are rendered *as far as* in their own italic span, per the settled 8978/8970 convention,
  **with no verb ever supplied** to complete a resumption tail. ⭐ **One is NOT the formula and
  was caught: 0032B**, *A quintodecimo anno Tiberii Caesaris **usque ad** subversionem templi*
  — an ordinary "from … to", and **unitalicized in Migne, which is the tell** (every one of the
  106 sits inside asterisks). Rendered "From the fifteenth year of Tiberius Caesar **to** the
  overthrow of the temple". ⚠ Three further occurrences look like look-alikes and are not:
  at 0033D, 0035B and 0041C the formula and its resumption sit **inside one italic span**
  (*usque ad Quiescite ab homine…* · *usque ad tunc omnis Israel salvus fiet.* · *usque ad: In
  veritate enim misit me Dominus ad vos.*), so the English keeps them inside one span too.
- **Negation fidelity.** Every printed `non/nec/neque/ne/nisi/nullus/nihil/nunquam/nondum` was
  matched to the single Latin word it attaches to and checked in the English. The 2a trigger
  population — a negative near a quantifier or correlative — fired at seven sites, and at each
  the host was proved from structure, not from what read well: **0031A** *ut Creatore neglecto
  **non universa** creatura consurgeret* (host *universa*, proved by the enumeration of exactly
  four plagues that the clause exists to explain — "not the whole creation") · **0031B** *qui
  **non in toto orbe** terrarum* (host the phrase, not *fuit*) · **0032A** *non apparuit ultra
  … **sed tantum** credentibus* · **0032A** *Non est … causa ardoris **in Domino, sed in his*** ·
  **0033D** *Non solum de corporeis simulacris* · **0035D** *vocabula **non urbem** significant,
  **sed locum*** · **0037B** *vitio suo accideret eis, **non duritia** comminantis*. Also
  **0040C** *non solum contra Babylonem, sed contra omnes gentes* and **0043D**'s four-negative
  chain (*ne accipiat … nec faciat … non habentibus … ne accipiant*), all four carried.
- **Sections read clean, with nothing to report:** `CAPUT XXIV` entire (0039C–0039D), `CAPUT
  XXVI` entire (0041A–0041D), `CAPUT XXX` (0044C–0044D). Their lemmata agree with the
  Clementine, their negatives are simple, and no word in them is a candidate.
- **Migne's own printing, reproduced and not tidied:** `## CAPUT XXV` prints **without** a
  final stop where every other head has one — carried as `## CHAPTER XXV`. `VERS. 14.` at
  0038D prints **without** the `.--` that every other verse address carries — carried verbatim.
  At 0040C the siglum for Jerome is set as italic body text, ***(ID)***, not as a note, and is
  carried as printed rather than promoted to `[n: …]`. Chunk 0014 **ends with no terminal
  stop** (*…ante arcam Domini [n: (I Par. XIII)]*) and the English ends with none either.
- **Mention vs. use, 0035C.** *Lagunculam figuli* **pro** laguncula figuli — Jerome is
  discussing the case of the noun, which English cannot show. Both forms are kept in Latin,
  the first italic as Migne sets it and the second roman as Migne sets it. The same treatment
  at *et pro Hierihoh* ***Chiricho.***, and for the versions' readings at 0038A (*suarinas*,
  *sterilem*, *non crescentem*, *vacuum*, *abominabilem et abdicatum*) and at 0038B
  (*excelsus Domini*), which are Aquila's, Symmachus's and Theodotion's words, not the
  Vulgate's, and take no `[var:]` for that reason.
- **Pattern 4 `[f:]` was NOT used anywhere**, per the runbook's known-false-positive 4: this is
  a lemma-and-gloss commentary, not a florilegium.
- **Em-dashes: none in these five chunks.**

---

## §7 · THE PLATE GATE, 2026-08-29 — two `[sic:]`, one withdrawn claim, one restored address

Bands 0031B–0044D fall on **pp. 21–28** of `patrologiaecurs06saingoog`. The gate read pp. 21, 22,
24, 27 and 28 of that span and did **not** read pp. 23, 25, 26 — recorded in `data/plate-reads.json`
(`works.9006`), patched in `data/tei-patches/9006.json`. What came back changed four things in this
file, in three different directions.

⛔ **The direction this batch's whole policy was blind to.** §1's ⛔ rule withheld `[sic:]` wherever
a letter-level defect might be the digitization's rather than Migne's — sound, and it is why no
false accusation was fired. But it is a rule about **one direction of departure**. The plate
returned the other: **Corpus Corporum silently repairing a defect in Migne's own type.** In that
direction our Latin reads *correctly*, the token is an ordinary word, every mechanical check passes,
and there is nothing at all to be suspicious of. Both `[sic:]` below are of that class. The Latin is
now patched back to what the plate prints, and the `[sic:]` is what tells the reader the defect is
Migne's.

### 7a · `0033D` (chunk 0010) · *pμtantes* — a Greek mu in a Latin word

| | |
|---|---|
| Migne prints | *…adoraverunt opera manuum suarum, **pμtantes** vera esse quae finxerunt* — a Greek **mu** sort in place of the `u`, its descender below the baseline |
| Corpus Corporum gave | *putantes* |
| the marker says | `thinking [sic: *pμtantes*] those things to be true which they had feigned` |
| evidence | plate **p. 21**, col. 0033D |

A foul case from the Greek sorts, standing in an ordinary Latin word in an ordinary sentence.
⚑ The marker does not carry the force: strip it and "thinking those things to be true which they
had feigned" is complete (7a⁗).

### 7b · `0037A` (chunk 0012) · *Nuntlis* — an `i` set as an `l`

| | |
|---|---|
| Migne prints | ***Nuntlis** regis, qui venerant* — the `i` set as an `l`, full ascender, no dot |
| Corpus Corporum gave | *Nuntiis* |
| the marker says | `To the king's messengers [sic: *Nuntlis*], who had come` |
| evidence | plate **p. 24**, col. 0037A |

⚠ **This is precisely the shape §1's rule refused to accuse Migne of** — one letter, and `i`/`l` is
a classic OCR confusion. The rule was right and this marker does not contradict it: the rule
forbids firing on *suspicion*, and this fires on a plate. Note also that the confusion runs the
**opposite** way from the one the rule anticipated — the digitization did not manufacture the
defect, it erased one.

### 7c · `0043A` (chunk 0014) · a VERSE ADDRESS restored — **and no `[sic:]` is owed**

⚠ **Logged here because it appears nowhere else in this file, and it is not a marker.**

| | |
|---|---|
| Migne prints | `VERS. 5.-- *Omnia vasa,* etc.` |
| Corpus Corporum gave | `VERS. 3.` |
| our chunk now reads | `[0043A]VERS. 5.-- *All the vessels,* etc.` |
| evidence | plate **p. 27**, col. 0043A |

⛔ **CC was right on the merits, and that is exactly what made the departure invisible.** Jer 28:3
*is* the *vasa* verse — §1a above lists `28:3 *Omnia vasa*` among the lemmata checked and found to
agree with the Clementine, and it agreed because it had been silently corrected before it reached
us. A checker collating our address against the Clementine confirms a number Migne did not print.
No collation we own can catch that class.

**Restored, per the standing rule that Migne's own printing is not ours to tidy**
(`GLOSSA-NT-AGENT-BRIEF.md`): `VERS. n.--` addresses pass through **verbatim**, and out-of-sequence
addresses are reproduced and logged, never reordered. §1c of `cruces-0020.md` records three more of
his versification disagreements on the same principle.

⛔ **No `[sic:]`, deliberately.** A `[sic:]` accuses Migne's **type**, and marks a word of his text.
`VERS. 5.--` is an **address**, not a word of the text — it is the apparatus by which he points at a
verse, it takes no marker in any of the twenty-four chunks, and marking it would put a defect claim
on a piece of furniture. The record of the departure is this entry.
