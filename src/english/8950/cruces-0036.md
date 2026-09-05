# *Glossa ordinaria*, **Liber Genesis** — cruces, chunks 0036–0041 (PL 113, 0160B–0173C)

Translated 2026-09-05, one stint, 6 chunks (5,480 Latin words by the frontmatter; 5,193 body
words with anchors and notes stripped → 7,638 English, **1.47×**).
Bands: **0160B–0173C** — CAPUT XXXIII, XXXIV, XXXV, XXXVI, XXXVII, XXXVIII, XXXIX, XL, XLI,
XLII, XLIII, CAP. XLIV.
`verify-english.mjs 8950` reports **no error on 0036–0041** (the only failures in the work are
`MISSING English chunk` for ranges other stints hold).

**SPAN COUNT — 235, of which 1 OPEN-ENDED, and the check was a span-for-span DIFF, not a
comparison of totals.** Counted **paragraph-bounded** in my own six Latin chunks: **141 closed
`« … »` spans + 93 `*…*` spans + 1 unclosed `«` = 235**, matching the brief's header exactly.
Per chunk: 0036 14+13+0 · 0037 29+23+1 · 0038 21+14+0 · 0039 26+24+0 · 0040 31+14+0 ·
0041 20+5+0. ⭐ **The two lists were then diffed line for line against the brief's inventory and
they are identical, with no residue** — the only difference the diff returns is my own
`OPENENDED:` label on the one span the brief itself flags. Nothing in my Latin is absent from the
brief and nothing in the brief is absent from my Latin.
⚠ The raw body marks are **143 `«` / 143 `»`**, and the four-mark gap between that and the 141
closed spans is real and accounted for: **one unclosed `«`** (0163A), **one nested line-head `«`
inside a closed span** (0168B), and **two orphan `»` with no opener** (0168B, 0169A). All four are
plate-confirmed as **Migne's**, on two witnesses (§3). A bare `«`/`»` total is not a checkable
number on this book.
⚑ The counting method matters: a DOTALL `«.*?»` over a whole chunk body runs the 0163A unclosed
quotation forward across a paragraph break and swallows the next span. Counting paragraph-bounded
is what keeps two such errors from cancelling.

**Apparatus fired: 11 `[var:]` · 1 `[sic:]` · 3 `[ed:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[nt:]`.**
Every one stands on a column read at the plate this session, on **two witnesses**.

Per-chunk parity (English / Latin), all exact: column anchors 7/11/9/10/9/8 · `[n:]` notes
10/22/13/15/17/13 · `«` 14/30/21/27/31/20 · `»` 14/29/21/28/31/20 · italic spans
13/23/14/24/14/5 · question marks 2/5/7/1/0/3 · `## ` heads 2/2/1/2/2/3.
**Zero em-dashes supplied in 5,480 words.**

⭐ **THE WHOLE RANGE WAS READ AT THE PLATE BEFORE THE ENGLISH WAS WRITTEN, ON TWO WITNESSES**:
archive.org `patrologiaecurs04migngoog` (on disk), **PDF page = (column + 11) / 2**, pp. **85–92**;
and Gallica `ark:/12148/bpt6k5505319w`, **f = (column + 1) / 2**, ff. **80–87**. **Corner numbers
read first on every page of both copies**, and all sixteen confirmed the map. **Foot-of-page
apparatus: CHECKED ZERO on all eight pages, both witnesses, both layers** (numbered and
letter-keyed); the foot of p. 90 carries only `PATROL. CXIII.` and the gathering signature `6`.
⚑ Note that **p. 89 (cols 0167/0168) had been sampled foot-only by an earlier pass; its running
text is now read.** Reads are recorded in `data/briefs/8950-PLATE-READS-0036.json`; twin/plate
divergences in `data/briefs/8950-PENDING-TEI-PATCHES-0036.md`.

---

## §1 · CONVENTIONS — inherited, and what this stint had to settle

Ruth (8968 §1) and Tobit (8970 §1) govern and were **not re-opened**, nor were the five earlier
stints of this same work (`cruces-0000.md`, `-0004.md`, `-0008.md`, `-0012.md`, `-0019.md`), all
of which I read before drafting: `VERS. n.--` passes through verbatim; the lemma is Englished; a
fragmentary lemma is rendered as the phrase it stands for; sigla ride as ordinary `[n: …]` notes
with Migne's own internal spacing (`(AUG. in Q. super Genesin. )`, `(HIER., ibid. )`,
`(AUG., ubi supra. )`, `(HIER. in Quaest. Hebr. )`); the guillemets are the plate's, **1:1 with the
twin**, and their contents are Englished; `*usque ad*` → ***as far as***, with **no verb and no
object ever supplied**.

The four conventions the earlier 8950 stints settled were adopted, not re-derived:
**(i)** no `[var:]` on a quotation Migne himself labels a rival version — **eight** instances
here, §4.3; **(ii)** words follow the plate, punctuation follows the twin — eleven instances,
patch file Parts A and B; **(iii)** a Latin gloss giving the MEANING of a name is Englished inside
its span, a word MENTIONED as a word stays Latin — §1(b); **(iv)** unpaired guillemets are
mirrored, never tidied, and are usually Migne's — four here, all his, §3.

### (a) The sense tags are translated in their italic span
`*Historice.*` → ***Historically.*** (0164C) · `*Moraliter.*` → ***Morally.*** (0162B) ·
`*Allegorice.*` → ***Allegorically.*** (0163B, 0166A, 0167B, 0169A, 0170C, 0171C) ·
`*Mystice.*` → ***Mystically.*** (0165D). No tag is abbreviated in this range, so 0019's
`*Moral.*` question does not recur.

### (b) The italic Latin words — MEANING Englished, MENTION kept
This range is thick with name-etymologies, and every one is a **meaning** and is therefore
Englished inside its span, per the 0012–0018 stint's rule:
`*tabernacula*` → *tabernacles* · `*consummatam* … *perfectam:*` → *finished … perfect:* ·
`*pacificam.*` → *peaceful.* · `*curati* … *perfecti*` → *the healed … the perfected* ·
`*pacificos,*` → *peaceable,* · `*consummatos, atque perfectos*` → *finished, and perfect* ·
`*amygdalum,*` → *an almond,* · `*frugifera*` / `*domus panis,*` → *fruitful* / *the house of
bread,* · `*filium doloris mei?*` → *the son of my sorrow?* · `*filium dierum*` → *son of days* ·
`*campum*` → *a plain* · `*liberi*` ×2 → *free men* · `*tunica varia*` → *a parti-coloured
tunic* · `*talarem,*` → *reaching to the ankles,* · `*manicatam,*` → *sleeved,* ·
`*Defectionem.*` → *A falling away.* · `*visio filii*` → *the vision of the son* ·
`*coquus,*` / `*occidere:*` → *a cook,* / *to kill:* · `*videns Deum:*` → *seeing God:* ·
`*testimonium in aqua,*` → *testimony in water,* · `*humilis professionis,*` → *of humble
profession,* · `*pelliceus*` → *made of skin* · `*moeror eorum,*` → *their sorrow,* ·
`*amaritudo,*` → *bitterness,* · `*commutans*` → *changing* · `*Confessio*` → *Confession* ·
`*fons:*` → *a fountain:* · `*oculos.*` → *eyes.* · `*maceria*` / `*divisionem*` / `*divisionis*`
/ `*divisi*` → *a wall* / *a division* / *of division* / *divided* · `*oriens.*` → *the rising.* ·
`*pincernam,*` → *a butler,* · `*augmentatio*` / `*ampliatio:*` → *increase* / *enlargement:*
⛔ **Kept as printed, because they are the words being talked about, not translations:**
`*Socoth*` · `*Selemim.*` · `*Arbee*` · `*Bennoni.*` · `*Benjamin.*` · `*iamin,*` · `*n;*` ·
`*iamim,*` · `*m.*` · `*Phares.*` · `*masqueh*` · `*Sarigim*` — and the Greek ἀστραγάλον,
μάγειρος, μαγειρειύεν, χ.
⚠ **One span mixes the two classes and could not be split**, exactly as 0118C did for the earlier
stint: `*Bennoni. Filius vero dextrae,*` → ***Bennoni. But son of the right hand,*** — *Bennoni*
is the Hebrew name under discussion and *Filius vero dextrae* is its Latin meaning, and both sit
in ONE italic span whose boundaries cannot move without breaking span parity.
⚑ **`*dimidiavit,*` (0160B) is Englished** → ***he divided them in half,*** — it is Aquila's
rendering being reported, i.e. a meaning, on the same footing as *consummatos atque perfectos*
two columns later. Recorded because it is the range's first italic span and sets the pattern.

### (c) Four fragmentary lemmata expanded per convention 3, and what fixed each
| col | Migne prints | English | the phrase it stands for |
|---|---|---|---|
| 0161C | `« Arreptis, »` | « Having taken up their swords, » | Gn 34:25 *arreptis … gladiis* |
| 0161C | `« Nunquid ut scorto, »` | « Ought they to have abused our sister as a harlot, » | Gn 34:31 *Numquid ut scorto abuti debuere sorore nostra?* |
| 0165B | `« Num ego, »` | « Shall I, » | Gn 37:10 *num ego et mater tua … adorabimus te* |
| 0168C | `« Quare divisa, »` | « Why is the wall divided, » | Gn 38:29 *Quare divisa est propter te maceria?*, and *maceria* is glossed in the next line |
⚑ Each keeps Migne's own closing comma. ⛔ **A complete one-word lemma is NOT expanded** —
`« Socoth. »`, `« Pacifici. »`, `« Ruben. »`, `« Extrahentes. »`, `« Vendiderunt. »`,
`« Husan. »`, `« Judas, »`, `« Fuitque, »`, `« Apertoque, »` are rendered as they stand. The two
classes are different and contrasting them manufactures an inconsistency that is not there.

### (d) `usque ad` — 29 formulas, 3 ORDINARY, decided per occurrence by the `etc.` splice test
**Formula (italic, following an `etc.`), 29×**, all → `*as far as*`, no verb, no object and no
antecedent supplied anywhere: 0160B · 0161C · 0162A · 0163A · 0163B · 0164B · 0164C · 0164C ·
0165B · 0165C · 0166A · 0166D · 0167B ×2 · 0168D · 0169A ×2 · 0169B · 0169C · 0169D ×2 ·
0171A · 0171B ×2 · 0172A ×2 · 0172C · 0173C ×2.

⭐ **0165C's `*usque*` is a VARIANT OF THE FORMULA and is listed above although it lacks *ad*, and
the Latin that forced the call is this**:

> `VERS. 12-22.-- « Cumque fratres illius, » etc., « in pascendis gregibus, » *usque* « Renuntia
> mihi, » etc.`

It follows an `etc.`, it names the point at which the quotation resumes, and both the point of
departure and the point of resumption are guillemet lemmata. **This is the splice applied to the
LEMMA itself rather than to a father's sentence** — the only such instance in the range.
Rendered ***as far as***, no verb supplied. Precedent: the 0012–0018 stint ruled 0115D's
`*usque,*` the formula on the same grounds. **Said explicitly, per the series brief's requirement
that an exception name the Latin that forced it.**

⛔ **Three ORDINARY, non-formula occurrences, none italic, none after an `etc.`, each rendered by
sense** (brief addendum D) — **all three in chunk 0038, and two of them inside one paragraph**:

| col | Latin | English |
|---|---|---|
| 0165A | *sive quod ad talos **usque** descenderet* | "came down **as far as** the ankles" |
| 0165A | *Joseph inter fratres **usque ad** finem vitae justus perseverasse* | "**to** the end of his life" |
| 0165A | *bona actio … **usque ad** terminos vitae nos regit* | "**to** the bounds of life" |

⚠ The two *usque ad* at 0165A stand **eleven lines below a formula at 0164C and eight above one at
0165B**, which is the 8967 col 0953C shape and the reason the test is run per occurrence. They
were deliberately **not** given the formula's "as far as", so that the abridgment mark stays
distinguishable on a page where both appear.
⚠ Also present and NOT this word: *usque hodie* ×3 (0160C, 0169C, 0169B) → "to this day".

### (e) The vocabulary axes, with the instrument checked first
- **`gentes` — 9 occurrences, split by the axis 5 / 3 / 1, and the split is recorded because two
  of them stand within eight lines of each other.**
  **Gentiles** where the *Judaei*/*gentes* typology is explicit: **0167D** *Ecclesiam de
  **gentibus** vocatam*, against *ut sit de Synagoga Ecclesia* in the same paragraph; **0168C**
  *populus vero **gentium** postea prorumperet*, set in one sentence against *Israel in opere
  legis*; **0169B** *conspicuum se **gentibus** praebuit*, set against *Synagoga* in the same
  sentence.
  **Nations** where the sense is plainly generic, which is the axis's own named exception:
  **0164A** *regionibus et **gentibus** Idumaeorum*; **0166A** *ab omnibus **gentibus** fidei
  commercio comparatur*; **0167C** *in omnibus **gentibus** Ecclesia constituta*; **0167C**
  *praedicari … per omnes **gentes*** (Lc 24:47's own formula, the axis's exemplar shape).
  ⚠ **The one place the split shows on a single page: 0167C–0167D.** *in omnibus gentibus Ecclesia
  constituta* and *per omnes gentes* read "among all **nations**" four lines above *Ecclesiam de
  **gentibus** vocatam*, which reads "out of the **Gentiles**". Both are the axis as written — the
  first two are universal and cover the Jews, the third is the typological opposition and does
  not. **Flagged here rather than decided silently.**
  - Singular **`gens`** of a people → **nation**: 0164C *patrem **gentis** Edom* → "the father of
    the nation of Edom".
  - **`gentilis`** → **Gentile**: 0170A *gentilis populus* → "the Gentile people" (the rule added
    on 9000).
- ⚑ **Instrument checked before reporting, and it changed one answer.** A raw `gent` grep returns
  **21** hits in this range and **twelve are noise** — *argentum* ×5, *argenteis* ×2, *Argentum*,
  *lugentem*, *intelligentiae*, *indigentiam*, *diligentius*, *diligenti*. A raw `natio` grep
  returns **four** and three are *expugnationi*, *comminationibus*, *cognatione* — **but the
  fourth is real**: 0173A *quasi exteris **natione*** → "as for men foreign **by nation**", the
  only `natio` in the range, and a grep that had been trusted to return zero would have missed it.
- **`turba` — ZERO.** `turb-` fires twice and **both are *perturbati*** (0160B, 0160B). So the
  *turba*/*multitudo* pair is not exercised on either side: **`multitudo` is also ZERO.**
- **`daemonium` ×2 → demons** (0165B *daemoniorum*, *daemonia* — Beelzebub *principe
  daemoniorum*, so both words stand in one clause and both are "demons"). **`diabolus` ×1 →
  devil** (0161A). **No `satanas`, no `ethnicus`, no `gentilitas`.**
- **`mysterium` ×1 → mystery** (0163B). **`sacramentum` — ZERO**, so the 1:1 pair is not exercised
  in this range.
- **The commentator's own voice is not archaised**: *dicit / ait / loquitur / aiunt* → "says",
  never *saith*. `-eth` forms appear **only** inside quoted scripture (Ps 17:45 *servivit* →
  "hath served"; Ps 18:5 *exivit* → "hath gone forth"; Ps 64:10 *Visitasti … inebriasti* → "Thou
  hast visited … hast made drunk"; 2 Cor 3:6's *litteram occidentem … spiritum vivificantem* →
  "the letter that killeth … the spirit that quickeneth", woven unguilleted into the gloss at
  0172A) and in second-person singular address.
- **Pattern 17.** Singular → *thou / thee / thy*: 0162A–B *« Non vocaberis ultra Jacob, »* → "Thou
  shalt no more be called Jacob"; 0171A *« Ecce constitui **te** super universam terram
  Aegypti, »* → "I have set **thee**"; 0172B *« si non reduxero illum **tibi**, »* → "if I bring
  him not back to **thee**"; 0173A Ps 64:10 *« **Visitasti** terram et **inebriasti** eam, »* →
  "**Thou hast** visited … and **hast** made it drunk".
  Plural → *you / your*: 0171D *« Mititte ex **vobis** unum … exploratores **estis**. »* → "Send one
  of **you** … **you** are spies"; 0172B *« **Deducetis** canos meos, »* → "**You** shall bring
  down my grey hairs"; 0172C *« Deus **vester** et Deus patris **vestri** dedit **vobis**
  thesauros, »*; 0173B *« Scyphus quem furati **estis**, »* and 0173C *« An **ignoratis** … »*.
  ⚑ Three imperatives are rendered as bare English imperatives, which mark no number:
  0162B *« Cresce et multiplicare. »* → « Increase and multiply. » (singular),
  0165C *« Renuntia mihi, »* → « Bring me word, » (singular),
  0170D–0171A *« Parate viam Domini. »* → « Prepare the way of the Lord. » (plural).
  *Prepare ye* was drafted and withdrawn: Pattern 17 gives the plural **you**, not *ye*, and an
  English imperative supplies no pronoun at all — the 0019–0023 stint's ruling, followed here.
  0168A's vocative *« genimina viperarum, »* → « brood of vipers, » for the same reason.

### (f) Heads — numerals mirror the plate, and `CAP.` keeps its abbreviation
`CAPUT XXXIII.` → `CHAPTER XXXIII.` and so through `CAPUT XLIII.` → `CHAPTER XLIII.` — numerals
throughout, per the corpus measurement (zero spelled-out forms above ONE).
⭐ **Chunk 0041's last head is `## CAP. XLIV.`, abbreviated on both plates**, where every other
head in the range spells *CAPUT*. Rendered **`## CHAP. XLIV.`**, keeping the abbreviation.
**This is corpus practice, not a fresh decision**: the shipped English carries **81** `## CHAP.`
heads against 157 Latin `## CAP.` heads, and 11085/0006 is the worked pair (`## CAP. IV.` →
`## CHAP. IV.`). ⛔ It is therefore **not** the Pattern 9 normalization the 0019–0023 stint applied
to an abbreviated `*Moral.*` tag — a head has an English exponent for the abbreviation and a
sense-tag does not.

### (g) Frontmatter copied VERBATIM from each Latin chunk, field order included
Every field, in the Latin twin's own order, including `words:` figures that count the Latin and
`heads:` fields carrying the chunker's own forms. Chunk 0036's `colContext: "0160A"` against
`colFirst: "0160B"` is the chunker's, and is copied.

### (h) Two addresses Migne prints irregularly, both reproduced as printed
- **`VERS. 18-20. « Transivitque in Salem, »` at 0160D** — no `--` after the period, where every
  other address in the range prints one. Reproduced bare; confirmed on both plates.
- **`VERS. 27-34. « Apertoque, »` at 0172A** — the same, and **`VERS. 26.--Qui agnitis, »` at
  0168B** prints no space after the `--`. All reproduced.

---

## §2 · ⛔⛔ THE FINDING THAT GOVERNS EVERY OTHER — OUR ARCHIVE COPY MANUFACTURES DIVERGENCES

**Twelve letter-level divergences were read off the archive.org copy of pp. 85–88, at 300 and 600
dpi, with the words plainly legible. Gallica refuted ALL TWELVE, agreeing with our twin in every
case.** They are listed in full in §5.0 and the withdrawal is unqualified.

The archive.org copy of this gathering is **heavily over-inked**. Thin strokes fill and close, so:
`sed`→`seu` (the *d*'s ascender fills), `cur`→`cum` (the *r* closes into an *m*), `expugnationi`→
`expurgationi`, `Sanguis`→`Sanguinis`, italic `F`→`P`, `talarem`→`tularem`, `colobiis`→`colcbiis`,
`id est`→`in est`, a leading `t` swallowed by the space before it (`tunica`→`unica`), a preposition
lost into the word before it (`a parente`→`parente`), and **a `9` blotted into a `6`** in a verse
address (`VERS. 4-9.` read as `VERS. 4-6.`).

⭐ **Every one of those readings looked decisive at 600 dpi.** This is `reference_plate-read-triage`'s
rule met from the other side: frequency and internal corroboration prove an error exists, never
whose it is — and here the *plate itself* proved an error that was not there. CLAUDE.md already
records that "unreadable is a fact about YOUR copy"; **this range says the same of
legible-but-wrong**, which is the more dangerous half, because nothing prompts a second look.

⚑ **What follows for the work.** The 0008, 0012, 0019, 0024 and 0031 stints built their patch
files from the archive copy alone. That does **not** show their findings are wrong — different
gatherings are inked differently, and their most striking finds (a dropped `non`, a normalized
verse address) are of classes an ink blot cannot produce. But the class is now measured, and on
PL 113 **a single-witness letter call is worth one Gallica request before it is applied.** A
Gallica region fetch costs one HTTP request and no download.

⚠ **And the converse holds, which is why the second witness was not simply substituted for the
first: at 0171D the two copies genuinely disagree** (§5.1). Neither is the plate; both are.

---

## §3 · THE FOUR UNPAIRED GUILLEMET MARKS — all four MIGNE'S, all plate-read on two witnesses

| col | our twin | the plate (both witnesses) | verdict |
|---|---|---|---|
| 0163A | unclosed `«` — `« Sanguis ejus super nos, et super filios nostros [n: (Matth. XXVII)].` | the same; Migne closes it nowhere, and the paragraph ends there | **MIGNE'S** — reproduced unclosed, Pattern 5's corollary |
| 0168B | orphan `»` — `VERS. 26.--Qui agnitis, » etc.` | the same, with no opener | **MIGNE'S** — reproduced unopened |
| 0168B | nested `«` inside a closed span — `« Cognovit autem Judas, etc. In Hebraeo habetur: « justificata est ex me; »` | the same | **MIGNE'S** — a genuine inner quotation, counted once with its host |
| 0169A | orphan `»` — `Qui relicto, » etc.` | the same, with no opener | **MIGNE'S** — reproduced unopened |

⭐ **The 0163A span is the brief's one open-ended span, and the brief's warning that it "may be
SHORT" does not apply here — I read it at the line.** Migne prints
`« Sanguis ejus super nos, et super filios nostros (Matth. xxvii.)` and then **starts a new
paragraph** with `« Et factum est cum dimitteret animam. »`. The span the brief shows is the whole
span there is.

⛔ **Six sites where Migne repeats `«` at the head of a continued line and our TEI drops it**:
0161D, 0162C, 0164C, 0169A ×2, 0169B, 0171C, 0172D. **Guillemet parity is checked against the
twin, so every dropped one is invisible to `verify-english`** — this is the class stint 1 named at
0067C/0069C and it is still running. Nothing was repaired; the English mirrors the twin and the
corrections are in the patch file.

---

## §4 · ⚠⚠ 7a″ — THE VULGATE COLLATION. **This is the deliverable.**

All 141 guillemet spans and every scriptural italic span were collated **against
`sources/vulgate/clementine-flat.txt`, line by line, cited by book chapter:verse** — never from
memory and never from the brief's pre-scan, whose `✓` addresses were read and checked. **The spans
that AGREE are listed too (§4.4): a list of divergences alone cannot be told apart from a report
by an agent that only chased the ⚠ marks.**

⚑ **The ERRATA of our own comparand were read first and they touched this range twice.** At
**Gn 35:18** our copy prints ***Benomi*** where the Clementine reads *Benoni* — so the `[var:]`
at 0163A is deliberately argued from *vocavit nomen filii sui* / *appellavit eum*, the substantive
differences, and **not** from the spelling of the name, and its content cites *Benoni*. At
**Gn 36:34** our copy reads *Husam*; the internal control (`Husam` ×3, `Husan` ×0) makes that the
Clementine's own reading rather than a defect, so the 0164C decline (§4.2) rests on a checked file.

### 4.1 The eleven `[var:]` fired — every one on a column read at the plate on TWO witnesses

| col | Migne prints | Clementine | marker |
|---|---|---|---|
| 0161A | `« Tristemque **blanditus delinivit**. »` | Gn 34:3 *tristemque **delinivit blanditiis*** | `[var: Vulg. Gen. 34:3 *tristemque delinivit blanditiis*, "and he soothed her, being sad, with flatteries"]` |
| 0162A | `« Venit igitur Jacob **Suzam**, »` | Gn 35:6 *Venit igitur Jacob **Luzam*** | `[var: Vulg. Gen. 35:6 *Luzam*]` |
| 0162C | `« Reges**que** de lumbis **ejus** egredientur, »` | Gn 35:11 *reges de lumbis **tuis** egredientur* | `[var: … *reges de lumbis tuis egredientur*, "from thy loins"]` |
| 0163A | `« Et factum est cum dimitteret animam. »` | Gn 35:18 *Egrediente autem anima prae dolore* | `[var: … *Egrediente autem anima prae dolore*, "and her soul departing for pain"]` |
| 0163A | `« vocavit **nomen ejus**, filius doloris mei: pater vero ejus **vocavit nomen ejus** Benjamin. »` | Gn 35:18 *vocavit **nomen filii sui Benoni, id est,** Filius doloris mei : pater vero **appellavit eum** Benjamin* | `[var: …]` |
| 0163B | `« Abraham duos filios habuit, unum de ancilla, et **alterum** de libera, »` (cited *Gal. IV*) | Gal 4:22 *unum de ancilla, et **unum** de libera* | `[var: …]` |
| 0165C | `« **Misit** Deus Filium suum in similitudinem carnis peccati. »` (cited *Galat. capite quarto*) | Rom 8:3 *Deus Filium suum **mittens** in similitudinem carnis peccati*; Gal 4:4 *Misit Deus Filium suum, **factum ex muliere*** | `[var: …]` |
| 0165C | `« **Non veni** nisi ad oves quae **perierant** domus Israel. »` (cited *Matthaei decimo quinto*) | Mt 15:24 *Non **sum missus** nisi ad oves, quae **perierunt** domus Israel* | `[var: …]` |
| 0170C | `« Non permanebit Spiritus meus in **hominibus istis**, »` | Gn 6:3 *Non permanebit spiritus meus in **homine in aeternum, quia caro est*** | `[var: …]` |
| 0170D | `« **Dedit ei** nomen quod est super omne nomen, »` (cited *Phil. II*) | Phlp 2:9 *et **donavit illi** nomen, quod est super omne nomen* | `[var: …]` |
| 0172B | `« **Reus ero peccati in patrem** omni tempore, »` | Gn 43:9 *ero **peccati reus in te** omni tempore* | `[var: …]` |

**Notes on four of them.**
**0161A** is the marker the whole paragraph turns on: Gregory is expounding how the corrupter
*calls up an empty hope and security* before the penitent mind, and Migne's *blanditus* makes
flattery the corrupter's **act** where the Vulgate's *blanditiis* makes it his instrument.
**0165C (Gal./Rom.)** — the marker states both readings and does not say why they differ, per
Pattern 14. What is on the page is that Migne cites *Galatians four* for words that stand at
Rom 8:3, and that Gal 4:4 does open *Misit Deus Filium suum*. The reader is given both and the
crux argues nothing further.
**0170C (Gn 6:3)** — *in homine in aeternum, quia caro est* → *in hominibus istis* narrows a
universal sentence about man to a particular judgment on the men of that generation. That is a
change of sense, and it fires; **the neighbouring quotation in the same sentence does not** (below).
**0172B** — *in patrem* for *in te* moves Judas's guilt from the man he is speaking to onto his
father, in a gloss whose whole point is what Judas undertook and Ruben did not.

### 4.2 DIVERGENT and DECLINED ON THE MERITS — every one on a read column, so the marker was available

- **0161C `« Nunquid ut scorto, »`** — Clementine Gn 34:31 *Numquid*. **Orthography, not
  divergence**, of the same class as Migne's *coelum* against the Clementine's *caelum*; not
  counted as a divergence anywhere in this file.
- **0161C `« Assensi, »`** — Clementine Gn 34:24 *Assens**ique*** *sunt omnes*. A dropped enclitic
  in a bare one-word lemma cut with `etc.` Nothing rests on it.
- **0163D `« Isti filii Seir, »`** — Clementine Gn 36:20 *Isti **sunt** filii Seir Horraei*. The
  copula is omitted; the lemma is cut with `etc.`, no step of the gloss depends on it, and the
  gloss's own subject is the Horrites' name, which the lemma does not reach.
- **0164C `« Husan. »`** — Clementine Gn 36:34 ***Husam***, and the internal control is decisive:
  `Husam` occurs **three times** in the whole file and `Husan` **none**. So the divergence is real
  and is Migne's (confirmed on both plates). **Refused** because it is one letter of a proper name
  and the gloss's argument — that this man may be Job — is untouched by it. Same standing as stint
  1's decline of the supplied *Deus* at 0079D.
- **0165C `« In Dothaim. »`** — Clementine Gn 37:17 ***Dothain*** ×4 (and *Dothan* ×1 elsewhere);
  `Dothaim` occurs **nowhere** in the file. **Refused for the same reason**, and with the added
  control that the etymology the gloss builds on it (*Defectionem*, "a falling away") is
  unaffected by the final consonant.
- **0165D `« Viderunt viatores Ismaelitas. »`** — Clementine Gn 37:25 *viderunt **Ismaelitas
  viatores***. Word order only. The gloss's question is *quare Ismaelitas Scriptura [nominat]* —
  about the name, not its position. **Refused**; firing here would spend the marker on noise.
- ⭐ **0170C `« Qui Spiritus Dei plenus sit, »`** — Clementine Gn 41:38 *qui **spiritu** Dei plenus
  sit*. This looks exactly like the 0170C Gn 6:3 site four words away, **and it is not the same
  thing.** *plenus* governs the genitive as readily as the ablative, and *Spiritus* is the genitive
  singular of a fourth-declension noun; so Migne's clause **says precisely what the Vulgate's
  says**, in another construction, and Pattern 14's test — "differs in a way that changes the
  sense" — is not met. **Weighed and refused.** Recorded at length because the two sites sit in one
  paragraph and a reader who saw one marked and the other not will want the reason.

### 4.3 Divergences Migne LABELS as rival versions — no `[var:]` by construction (eight)

The convention is the 0008–0011 stint's and was not re-opened: where Migne announces the version,
its divergence from the Clementine **is the sentence's own subject**, and a marker restates what
the page already says. This range is unusually thick with them — **eight, against eleven fired**,
which is why the rule matters here.

| col | the span | Migne's own label |
|---|---|---|
| 0166A | `« argenteis. »` | *Hebraica veritas habet* |
| 0168A | `« Et sedit ad portam Enaiim, quae est in transitu Thamna. »` | *Sermo Hebraicus, Enaiim, transfertur in oculos*, in the next clause |
| 0168B | `« justificata est ex me; »` | *In Hebraeo habetur* |
| 0169B | `« principem vinariorum »` | *Ubi nos posuimus* |
| 0169C | `« Et ecce vitis in conspectu meo, et in vite tres fundi, et ipsa germinans tres fundos. »` | *Hebraeus sermo significat*, in the next clause |
| 0169C | `« tria canistra farinae »` | *Ubi in Latinis codicibus … scriptum est* — and it agrees with the Clementine anyway |
| 0171A | `« et clamavit ante eum praeco, et constituit eum super omnem terram Aegypti. »` | set at once against *Pro quo Aquila transtulit* |
| 0171A | `« Et clamavit in conspectu ejus ad geniculationem. »` | *Aquila transtulit* |
⚑ Two of the eight (0168A, 0169C) carry the label in the **following** clause rather than before
the quotation. They are declined on the same ground, and the difference is recorded rather than
smoothed: a reader checking the rule will find these two do not have the prefix shape.

### 4.4 COLLATED AND AGREEING — checked, exact or a clean whole-word fragment

**Gn 33:** 33:1 `« Elevans autem Jacob oculos. . . . divisitque filios Liae et Rachel, »` (both
limbs exact across Migne's own ellipsis) · 33:10 `« Sic enim vidi, »` · 33:14 `« Et ego sequar, »` ·
33:17 `« Socoth. »` · 33:18 `« Transivitque in Salem, »`.
**Gn 34:** 34:1 `« Egressa est autem Dina, »` · 34:2 `« Quam cum vidisset Sichem. . . . et dormivit
cum illa, »` (both limbs exact) · 34:21 `« Pacifici. »` · 34:25 `« Arreptis, »` · 34:30 `« Nos pauci
sumus, »`.
**Gn 35:** 35:4 `« Dederunt ergo ei, »` · `« Et inaures, »` · 35:10 `« Non vocaberis ultra, »` and
`« Non vocaberis ultra Jacob, »` ×2 · 35:11 `« Cresce et multiplicare. »` · 35:14 `« Ille vero
erexit titulum lapideum in loco quo locutus fuerat, »` · 35:16 `« Ephratam. »` · 35:18
`« Egrediente autem, »` · 35:21 `« Egressus inde, »` · 35:22 `« Abiit Ruben, »` and `« Erant
autem, »` · 35:27 `« Civitatem Arbee. »` ×2.
**Gn 36:** 36:6 `« Abiit in alteram regionem. »` · 36:20/21 `« Filii Seir, »` · 36:22 `« Erat autem
soror, »` · 36:24 `« Iste est Ana. »` ×2 · 36:30 `« Isti duces. »` (the address is *VERS. 29, 30*
and the words are v. 30's) · 36:31 `« Reges autem. »` ×2.
**Gn 37:** 37:2 `« Joseph cum sedecim esset annorum, »` · `« Et erat cum filiis Balae, »` · `« Et
erat cum, »` · 37:3 `« eo quod in senectute genuisset eum. »` · `« Fecitque ei tunicam
polymitam. »` · 37:4 `« Videntes autem fratres ejus, »` · 37:10 `« Num ego, »` · 37:12 `« Cumque
fratres illius, »` and `« in pascendis gregibus, »` · 37:14 `« Renuntia mihi, »` · 37:21f
`« Ruben. »` · 37:23 `« Nudaverunt eum, »` · 37:28 `« Extrahentes. »`, `« Vendiderunt. »`,
`« argenteis. »` · 37:34 `« Scissisque vestibus, »` · 37:35 `« Descendam ad filium meum. »`.
**Gn 38:** 38:1 `« Eodem tempore, »` · 38:3 `« Quae concepit, »` · 38:5 `« Tertium quoque
peperit, »` · 38:13 `« Ad tondendas oves. »` · 38:14 `« Quae depositis viduitatis vestibus, »` and
`« Sedit in bivio. »` / `« Sedit in bivio, »` · 38:20 `« Misit autem Judas. »` · 38:25 `« Quae cum
duceretur, etc. »` · 38:26 `Qui agnitis, »` · 38:27 `« Instante autem, »` · 38:29 `« Quare
divisa, »`.
**Gn 39–44:** 39:1 `« Igitur Joseph ductus est in Aegyptum, »` · 39:2 `« Fuitque, »` · 39:7 `« Post
multos itaque dies injecit domina, »` and `« Injecit domina sua, »` · 39:12 `« Qui, relicto in manu
ejus pallio, »` · 40:1 `« His ita gestis, accidit ut peccarent duo eunuchi, »` and `« Pincerna regis
Aegypti, et pistor, domino suo, »` · 40:9 `« Videbam coram me vitem, »` · 40:16 `« Tria
canistra. »` · 40:20 `« Natalitius Pharaonis. »` · 41:1 `« Post duos annos vidit Pharao somnium.
Putabat se stare, »` · 41:2 `« De quo ascendebant septem boves, »` · 41:9 `« Tunc demum reminiscens
pincernarum magister, »` · 41:17 `« Putabam me stare, »` · 41:33 `« Nunc ergo, »` · 41:34 `« Et
quintam partem fructuum, »` · 41:41 `« Dixitque rursus Pharao, »` and `« Ecce constitui te super
universam terram Aegypti, »` · 41:43 `« Clamante praecone, »` · 41:45 `« Et vocavit, »` and
`« Deditque illi uxorem, »` · 41:50 `« Nati sunt autem Joseph filii duo, »` · 41:56 `« Aperuitque
Joseph universa horrea, »` · 42:1 `« Audiens autem Jacob quod alimenta venderentur in Aegypto, »` ·
42:16 `« Mititte ex vobis unum . . . . . alioquin per salutem Pharaonis exploratores estis. »`
(**both limbs exact**; the *Mititte* form is a typographic matter, §5.1, not a Vulgate divergence) ·
42:23 `« Nesciebant autem, »` · 42:27 `« Apertoque, »` · 42:35 `« Singuli repererunt, »` · 42:37
`« Cui respondit Ruben, »` and `« Duos filios meos interfice, si non reduxero illum tibi, »`
(**exact**) · 42:38 `« Deducetis canos meos, »` · 43:11 `« Modicum resinae et mellis et
storacis, »` · 43:23 `« Deus vester et Deus patris vestri dedit vobis thesauros, »` · 43:29
`« Attollens autem Joseph oculos vidit Benjamin, »` · 43:32 `« Quibus appositis, »` · 43:34
`« Biberuntque et inebriati sunt, »` · 44:5 `« Scyphus quem furati estis, »` · 44:15 `« An ignoratis
quod non sit similis mei in augurandi scientia? »` (**exact, including Migne's `?`**) · 44:16
`« Cui Judas, »`.
**Outside Genesis:** Mt 27:25 `« Sanguis ejus super nos, et super filios nostros »` (**exact**) ·
Jo 1:29 `« Ecce Agnus Dei, »` · Ct 4:2 `« Dentes tui sicut greges tonsarum. »` · Ps 17:45
`« Populus, quem non cognovi, servivit mihi. »` (**exact**) · Rom 8:30 `« Quos autem praedestinavit,
hos et vocavit; et quos vocavit, hos et justificavit »` (**exact but for Migne's `;` where the
Clementine sets `:`**) · Mt 3:7 / Lc 3:7 `« genimina viperarum, »` · Mt 19:30 `« primi novissimi, et
novissimi primi. »` · **Gn 1:2** `« Spiritus Dei ferebatur super aquas, »` — ⭐ **exact, and it is
exact only because the plate was read**: our twin has dropped *Dei*, and the restored lemma agrees
with the Vulgate word for word, so **no marker.** Had the twin been translated as it stands, this
would have looked like a divergence Migne never made · Ps 67:18 `« Currus Dei decem millibus
multiplex; »` (**exact**) · Phlp 2:9–10 `« nomen quod est super omne nomen, ut in nomine Jesu omne
genu flectatur »` (**exact, joined across the verse break**) · Mt 3:3 `« Parate viam Domini. »` ·
Ps 18:5 `« In omnem terram exivit sonus eorum »` (**exact**) · Os 11:1 `« Ex Aegypto vocavi Filium
meum. »` (**exact**; Migne's capital *F* is his) · Ps 11:7 `« Eloquia Domini eloquia casta, argentum
igne examinatum, probatum terrae, purgatum septuplum, »` (**exact but for the Clementine's `;`
after *casta***) · Ps 64:10 `« Visitasti terram et inebriasti eam, »` (**exact**).

⚠ **One quotation is NOT scripture quoted as scripture and was not collated as such:** 0161D
`« Paratique sint ulcisci omnem inobedientiam, »`, which echoes 2 Cor 10:6 (*et in promptu habentes
ulcisci omnem inobedientiam*). Migne recasts it into the jussive of his own surrounding sentence,
gives it no `[n:]`, and prints the same words **unguilleted** eight lines earlier at 0161C
(*parati ulcisci omnem inobedientiam*). Pattern 14 is for scripture quoted as scripture.
**Declined, and recorded so a blind reader knows it was looked at.**

---

## §5 · THE DECLINED LIST — every suspect reading, what settles it, and the page

### 5.0 ⛔⛔ TWELVE ARCHIVE-COPY READINGS, ALL WITHDRAWN — the settling witness is Gallica

Each was read at 300 dpi and re-read at 600 dpi on `patrologiaecurs04migngoog`, and each was then
refuted by the Gallica copy, which agrees with our twin. **All twelve are withdrawn. No marker was
fired on any of them, and the English follows the twin at every one.**

| col | what our archive copy appeared to read | Gallica (= our twin) | archive p. / Gallica f |
|---|---|---|---|
| 0160D | `nominantur` | `nominatur` | 85 / 80 |
| 0160D | `Melchisedech.` (full stop) | `Melchisedech,` | 85 / 80 |
| 0161C | `expurgationi` | `expugnationi` | 86 / 81 |
| 0162A | `seu sensu` | `sed sensu` | 86 / 81 |
| 0162A | `Christi primum est,` (no stop) | `Christi. Primum est,` | 86 / 81 |
| 0162B | `cum legatur` | `cur legatur` | 86 / 81 |
| 0163A | `Sanguinis ejus super nos` | `Sanguis ejus super nos` | 87 / 82 |
| 0163A | `Pilius vero dextrae` | `Filius vero dextrae` | 87 / 82 |
| 0163D | `parente recesserit` | `a parente recesserit` | 87 / 82 |
| 0164D | `Pro unica varia` | `Pro tunica varia` | 87 / 82 |
| 0165A | `tularem` · `colcbiis` · `in est` | `talarem` · `colobiis` · `id est` | 88 / 83 |
| 0165A | `VERS. 4-6.` | `VERS. 4-9.` | 88 / 83 |

⭐ **Four of these were the strongest candidates in the whole stint.** *expurgationi* and
*cum legatur* both construed and both would have changed what the page says; *Sanguinis* is a
genitive with nothing to govern it, which is Pattern 12's own test for a real word with no
grammatical slot; and `VERS. 4-6.` had the shape of the 0019–0023 stint's genuine `VERS. 27-19.`
find. **Not one of them survived a second photograph.**

### 5.1 ⛔⛔ 0171D `Mititte` — THE TWO WITNESSES DISAGREE, so no marker can stand

> `VERS. 16-22.-- « Mititte ex vobis unum . . . . . alioquin per salutem Pharaonis exploratores
> estis. »`

**Gallica f86 prints `Mititte`. The archive.org copy prints `Mittite`.** Both are crisp — the
archive reading at 600 dpi, the Gallica reading blown up to 1600 px — and the difference is a
letter **order**, `t-i-t-t-e` against `t-t-i-t-e`, which no inking artifact produces in either
direction. Our twin follows the Gallica reading.

**Verdict: two printings, not two photographs.** That is a fact about PL 113 the second-witness
protocol in CLAUDE.md does not yet record, and it has a direct consequence: **"the plate" is not
a single object for this volume.**

⛔ **No `[sic:]`.** A `[sic:]` is a public claim that Migne's type is defective, and one witness
shows sound type. **No patch either**: there is nothing to correct our twin *to*. The English
renders the sense ("Send one of you") and this crux is the whole record.

### 5.2 ⭐ THE ONE `[sic:]` — 0169B `trangressionis`, confirmed on BOTH witnesses

> `Invenit Joseph duos eunuchos in carcere, etc., *usque ad* **trangressionis** ligno suspenditur.`

*trangressionis* is no Latin word (the *s* of *transgressionis* is missing). **Both plates print
it and our twin carries it**, so the verbatim-substring guard is satisfied and the defect is
demonstrably Migne's and not the digitization's. Fired as
`upon the wood of transgression [sic: *trangressionis*]` — the sense rendered **beside** the
marker, per Pattern 7's 2026-09-05 amendment, so that stripping the marker still leaves a
readable clause.

⭐ **This is the first `[sic:]` in this work**, against ~34,000 words and 40+ `[var:]` standing.
It is fired only because the two-witness read makes the attribution certain; the six other
non-words met in this range all went the other way (§5.3).

### 5.3 Non-words in our twin — SIX, and all six are OURS. No `[sic:]`, patches instead

| col | our twin | the plate (both witnesses) |
|---|---|---|
| 0166A | `exspolitus` | `exspoliatus` |
| 0166C | `sb;αρχιμαγείρους` | `ἀρχιμαγείρους` |
| 0170A | `veritalis` | `veritatis` |
| 0173A | `scorsum` | `seorsum` |
| 0173C | `sedjoco` | archive: `sed joco` (a clear space); Gallica: letters touching |
| 0169B / 0169C / 0160C / 0167D | four **holes** where Migne sets Hebrew | סכות · עינים · משקה · שריגים |

⛔ **None of these is markable.** A `[sic:]` on any of them would publicly accuse Migne of the
digitization's error, and the verbatim guard would in any case reject it for the four Hebrew sites.
Per the locked "plate where read" rule the English renders the plate at each, and the patch file
carries the repairs.
⚑ **`sedjoco` is the one I would not swear to.** The archive copy shows an unambiguous space; the
Gallica copy shows the letters touching, which is a spacing question and therefore far weaker
evidence than the *Mititte* letter-order case. I have called it **our lost space** — the class stint
1 recorded at 0078D (`possunt,ita`) — and fired nothing. If a third witness ever settles it the
other way, the site becomes a Pattern 10 split-type `[sic: *sedjoco*]`.

### 5.4 ⭐ THREE `[ed:]`, and the fourth Hebrew site takes none — Pattern 13a's own line

Migne sets Hebrew square script wherever Jerome is quoted on a name, and **our transform has lost
every occurrence in my range**, exactly as it did for stints 3 and 4 in theirs. Pattern 13a
clause 2 gives the marker to a loss that would otherwise be **invisible as an absence**; clause 1
leaves an ordinary mid-sentence loss to a patch and a crux.

| col | our TEI reads | the plate reads | the scar our text carries | marked? |
|---|---|---|---|---|
| 0160C | `legitur *Socoth* Est autem` | `legitur *Socoth* סכות. Est autem` | **two sentences run together with no stop** | **YES** |
| 0169B | `habetur *masqueh* , illud` | `habetur *masqueh* משקה, illud` | **a comma floating after a space** | **YES** |
| 0169C | `vocantur *Sarigim* .` | `vocantur *Sarigim* שריגים.` | **a full stop floating after a space** | **YES** |
| 0167D | `ad portam Enaiim [0167D], quod` | `ad portam Enaiim עינים, quod` | **none — the sentence is sound** | **no** |

⛔ **None is a `[sic:]` or a `[var:]`**: the plate is perfectly legible and it is our transcription
that has the hole. Pattern 13's rule that an `[ed:]` **never supplies the lost text** is kept — the
recovered Hebrew is in this file and in the patch file, not in the running English.
⚑ **The count for the work is now TWELVE Hebrew words known lost** (two at 0104C, four across
0113C–0118C, four here). It is systematic, not accidental, and the patch file names the cheap
work-wide detector.

### 5.5 Real words that read oddly — rendered as printed, no marker (Addendum A)

- ⭐ **0164B `filii Ismael`** — *Sciendum quod non omnes reges commemorat qui fuerunt antequam
  haberent reges **filii Ismael**, quorum primus Saul.* Gn 36:31 has *filii **Israel***, and Saul
  is Israel's first king, not Ishmael's — so the sentence as printed is false. **Confirmed on both
  witnesses as MIGNE'S.** Rendered as printed ("the children of Ismael"). ⛔ **`[cj:]` declined**:
  this is a proper-name slip, and 18a scopes the pattern to negations, correlatives and the named
  ✅ list. It is also gloss prose, not a quoted lemma, so Pattern 14 does not reach it either.
  **The most interesting thing on these eight pages, and the apparatus has no marker for it** —
  which is exactly what a crux is for.
- ⭐ **0166D–0167A `qui descendit ab baptismum Joannis`** — *ab* governing an accusative, in a
  sentence whose next clause reads *Joannes videns Christum venientem **ad** baptismum*. Read at
  native resolution on Gallica: **the plate prints *ab***. Rendered literally, "who went down
  **from** the baptism of John", because Pattern 7a forbids translating a word as anything other
  than what it means in order to rescue a sentence. ⛔ **`[cj:]` declined, and the control is
  exact: 11535 @1360C is *ab* for *ad subdiaconatum*, direction reversed, and 18a records it as
  DECLINED with visible reluctance and rules against re-adjudicating it.** The conjecture (*ad*)
  is here and not in the text by that ruling, not by my judgment.
- **0166A `Ismaelitis venditis venditur`** — *Joseph de cisterna levatus Ismaelitis venditis
  venditur.* Confirmed on the Gallica native crop. The only grammatical reading is a dative plural
  *Ismaelitis venditis*, "to Ismaelites that had been sold", which is odd but construes. Rendered
  so; **no marker on a corpus argument, however good** (addendum A).
- **0165D `polimyta`** for the lemma's *polymitam* — an orthographic variant on the plate, not a
  defect. Rendered "of divers colours" in both places.
- **0166D `Hiras`** for Gn 38:1 *Hiram* — gloss prose, not a lemma; one letter of a proper name;
  the etymology (*videns Deum*) is unaffected. Rendered as printed.
- **0170B `Notandum Aegyptii quod quintam partem`** — the word order is Migne's on both witnesses.
  Rendered "It is to be noted that the Egyptians gather…"; the displaced nominative is not
  reproducible in English and there is nothing to mark.
- **0164A `quibus expulsis. Idumaei habitaverunt pro illis.`** — the full stop after an ablative
  absolute is Migne's on both plates. Reproduced.

### 5.6 Unexpressed subjects supplied — every one named, with what decided it

1. **0161A** *ut tunc bona nulla percipiat … et tunc plenius absorbeatur suppliciis, quae nunc
   gaudet in deliciis.* Subject of *percipiat* / *absorbeatur*, and antecedent of *quam* and
   *quae*, is **mens** — the only feminine singular in the sentence, and the thing whose penance
   is being put off. Rendered "it whom evils now make sad" / "it which now rejoices in delights",
   keeping the relative rather than repeating the noun.
2. **0161A** *modo misericordem Deum loquitur, et tempus ad poenitentiam pollicetur.* Subject is
   **corruptor**, named two clauses earlier, **not** *mens* — *mens* is what is being deceived
   (*decepta mens ducitur*), so the flattery cannot be hers.
3. **0161D** *ne violenter corporali delicto, aut fornicatione spirituali succumbant.* Subject is
   **animae … sibi commissae**, not the pastors: the clause *ne* depends on is *curam habere
   animarum sibi commissarum*, and it is the souls that would succumb to a bodily offence or to
   spiritual fornication. Rendered "lest they be violently overcome".
4. **0163C** *« Civitatem Arbee, » etc. Angelorum vel sanctarum animarum, quibus est appositus.*
   Masculine singular subject is **Isaac**, supplied from the lemma's own verse (Gn 35:29,
   *appositus est populo suo*); the gloss contains no other masculine antecedent. Rendered "to
   whom he was gathered".
5. **0167D** *Illo non cognoscente fecundatur.* *Illo* is **Judas**, the man of the verse.
   Rendered "she is made fruitful, he not knowing it", which supplies no noun and keeps the
   negative on the participle.
6. **0168D** *ejusque pondera leviat, quae volens portat.* The subject of *leviat* — Gregory's
   *Deus* — **was cut away by the abridgment.** Nothing was supplied; the English keeps the bare
   third person the Latin's own verb carries.
7. **0173C** *sed qui noverat eum scire … narrationi inserebat.* *inserebat* has **no expressed
   object in the Latin either**; none was supplied.

### 5.7 Negation — every host named (tests 2 and 2a)

The 2a trigger — a negative resting on a verb with a quantifier, correlative or predicate nearby —
fires **ten times** in this range. Each host was proved from the sentence's own structure, never
from what reads well:

- **0161C** *non quod multo minus haberet **quam possent** expugnationi civitatis sufficere.* The
  *non* governs the whole *quod*-clause; the comparative *minus … quam* sits **inside** it. → "not
  because he had far fewer than would suffice".
- **0162A** *comprobatur Bethel **non** Ulam … **sed** Luzan.* → host **Ulam**, by the correlative,
  not the verb.
- ⭐ **0168A** *In hoc facto Judae **non** justitiae cernitur sinceritas, **sed** promissionis
  fidelitas.* The 2a shape exactly: the *non* stands immediately before the verb *cernitur*, and
  the *sed* limb proves it governs **justitiae sinceritas**. Rendered as an English cleft — "it is
  **not the sincerity of justice** that is discerned, but the faithfulness of his promise" — which
  is the only construction that keeps the negative on the noun.
- **0168B** *non quod justa fuerit, sed quod … minus male fecerit* → host *justa fuerit*; and
  *non vaga turpitudine, sed requirendo filios* → host **vaga turpitudine**.
- **0168B** *dicunt **non** hunc esse populum Christi, **nec** Abrahae semen, **sed** …* → hosts
  *hunc populum Christi* and *Abrahae semen*; all three particles carried.
- ⭐ **0172A** *quia **non** pecunia emitur Christus, **sed** gratia.* Host is **pecunia**, by the
  *sed*. Rendered as a cleft — "it is **not with money** that Christ is bought, but with grace" —
  for the same reason as 0168A. A flat "Christ is not bought with money" would have put the
  negative on the verb.
- **0172B** *noster Joseph **non** quaerit nostra, **sed** nos.* → host **nostra**.
- ⭐ **0173B** *nam ita inebriari ut inebriantur ebriosi, **nec ipsi terrae** utile est.* The
  negative carries the intensifier *ipsi*: → "is not useful **even to the earth itself**".
  Dropping the *ipsi* would have made the sentence a flat denial instead of an a-fortiori.
- **0173B** *qui **non** satietate se replet, **sed** mergit diluvio.* → host **satietate**.
- **0171C** *in illo Joseph ampliationem **non** habuit **nisi sola** Aegyptus.* *non … nisi* with
  the quantifier *sola*; both carried → "none had the enlargement **save Egypt alone**".

⚑ Every other printed negative in the range (`non` ×24, `nec` ×5, `neque` ×2, `nisi` ×7, `nondum`
×3, `nullus`, `nulla`, `ne` ×4, `nunquam` 0) was read against its English word by word. **None was
dropped and none was supplied.**

### 5.8 The seven licensed Pattern 8b colons, and the band scan that found everything else

The band-by-band comparison (Test 3 — `:` `;` `?` `«` `»` `!` per column anchor, markers stripped)
was run on all six chunks. It returned **fourteen** mismatched band/mark pairs on the first pass.
**Six were my own errors and were repaired**; the remaining eight are accounted for below.

⛔ **The six repaired**, which is Test 3 earning its place a fourth time on this work: a **destroyed
colon** at 0161A (*admissum flere conatur:*) and another at 0161A (*quam nunc mala contristant:*,
softened to a semicolon **and** wrapped in two supplied em-dashes); **supplied semicolons** at
0161B, 0164B and 0172A where Migne prints commas; and a **colon moved inside an italic span**
(`*son of days:*` for `*filium dierum*` + `:`). The 0161A pair is the dangerous shape — one mark
destroyed and one supplied within four lines, which very nearly cancelled in the totals.

✅ **Seven supplied colons remain, and every one is Pattern 8b** — Migne closes an indirect question
with `?`, English cannot end that construction with the mark, so the question goes direct behind a
colon. Nothing is deleted and nothing invented:

| col | Migne | English |
|---|---|---|
| 0162A | *Quaeritur quale inaures, quae ornamenta erant … non pertinentia?* | It is asked**:** of what sort were the earrings … ? |
| 0162B | *Quaeritur cum semel dictum sit … cur legatur postea Jacob vocatus?* | It is asked**:** since it was once said … why is he afterwards read to have been called Jacob? |
| 0163C | *Quaeri potest cur Esau … in Seir dicatur habitasse?* | It may be asked**:** why is Esau said … ? |
| 0166B | *Quaeritur quomodo hoc intelligatur, utrum mali tantum … descendant?* | It is asked**:** is this to be understood of the wicked only … ? |
| 0166C | *Ubi quaeritur quomodo postea uxorem habere dicatur?* | Whereupon it is asked**:** how is he afterwards said to have a wife? |
| 0166D | *Quaeritur quomodo ista fieri potuerunt?* | It is asked**:** how could these things have come to pass? |
| 0172B | *Quaeritur utrum ideo ad infernum … haec loquatur?* | It is asked**:** does he speak thus … ? |

⭐ **And one band differs by design, in the other direction.** At **0166C** the twin carries **two**
semicolons and the English **one** — because the twin's second semicolon is inside `sb;`, the
mangled entity prefix that is our transform's artifact and not Migne's punctuation (§5.3). This is
the only mark in the range where the English does not follow the twin, and it is recorded here so
that a later band scan does not read it as a defect.

⛔ **Not one comma→semicolon sweep was made.** Migne prints semicolons freely in this range (38 in
six chunks), so Tobit's narrow exception does not apply and was not invoked.

### 5.9 One bracketed English exponent supplied, and it is the only supply in the stint

**0165D–0166A** — *Quaeritur quare Ismaelitas Scriptura, etc., usque ad …*. The abridgment's `etc.`
has cut out the governing verb (Augustine's *appellet*), leaving an accusative and a nominative
with nothing between them. Rendered **"It is asked why Scripture [names them] Ismaelites, etc."**,
with the supplied word in square brackets, which is corpus practice for supplied English and the
0008–0011 stint's exact precedent (*"but it can **[be]** begotten in exile"* at 0098A).
⛔ **This is not the formula being completed.** All 29 `*usque ad*` resumptions were left exactly
where they land, three of them mid-clause and one (0172A) ending without a full stop because Migne
prints none: *… erit Deus, for he shall not be, but shall be accounted*. **No verb and no object
was supplied to any of the twenty-nine.**

---

## §6 · SECTIONS READ CLEAN (Test 4 — does the English ASSERT what he asserts?)

Read paragraph by paragraph against the Latin **after** the counts were known clean, asking that
one question only:

- **0160B–0160D** — Aquila on the division of the companies, and Jerome's double Salem. The two
  etymologies (*consummatam atque perfectam* / *pacificam*) and their re-use six lines later
  (*curati atque perfecti*) are the paragraph's whole argument and were checked against each other.
- **0161A** — Gregory on Dina, the densest passage in the stint: five clauses whose subject
  alternates between *mens* and *corruptor* with neither named (§5.6). Checked twice.
- **0162A–0163A** — the *Non vocaberis ultra* question, the Bennoni/Benjamin etymology and its
  Hebrew letter-argument (*iamin* in *n*, *iamim* in *m*), where the whole point is which letter
  ends which word. Clean.
- **0164C–0166D** — Joseph as the type of Christ; Isidore's *Mystice*, the *tunica polymita*, and
  Jerome on the ἀρχιμαγείρους. Clean, with the one supplied bracket at 0166A recorded above.
- **0167A–0168D** — Thamar and the Church of the Gentiles, the longest continuous allegory in the
  range and the passage where the *gentes* axis is exercised on both sides within eight lines
  (§1e). Clean.
- **0169C–0171C** — Joseph's exaltation, the three intimations of the Spirit, and the granaries.
  Clean; and reading this stretch **against the plate rather than the twin** is what recovered
  *sancti* and *Dei*, neither of which is detectable from the Latin alone.
- **0171D–0173C** — the brethren in Egypt, the cup in Benjamin's sack, and Augustine on drunkenness
  (whose *nec ipsi terrae* a-fortiori is the sharpest negation in the stint). Clean.

**Candidates rejected, with reasons, so a blind reader knows they were looked at:** §5.0's twelve
withdrawn archive readings · §5.1's `Mititte` · §5.2's fired `trangressionis` and §5.3's six
declined non-words · §4.2's seven declined divergences and §4.3's eight declined by construction ·
§5.5's seven odd-but-real words, including the two — *filii Ismael* and *ab baptismum* — that came
closest to a `[cj:]` and were declined on named precedent · the `. . . .` and `. . . . .` ellipsis
runs after `VERS. 1-9.`, `VERS. 2-32.` and `VERS. 16-22.` (Migne's, reproduced with his own
spacing) · and the sigla whose internal spacing our TEI alters (`(AUG. in Q. super Genesin. )`,
`(HIER., ibid. )`, `(AUG., ubi supra. )`), reproduced from the twin and logged in the patch file.
