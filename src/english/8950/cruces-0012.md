# *Glossa ordinaria*, **Liber Genesis** — cruces, chunks 0012–0018 (PL 113, 0106D–0120D)

Stint 4 of 8950. Seven chunks, 5,898 Latin body words → 8,477 English (1.437×).
Bands **0106D–0120D**: CAPUT VII (the flood) through CAPUT XIV (Melchisedech).
`verify-english.mjs` reports **no error on 0012–0018** — column anchors, `[n:]` notes,
guillemets, italic spans and question marks all 1:1 with the Latin twins. (The run exits
non-zero only on the chunks other stints have not yet filed.)

⭐⭐ **THE WHOLE RANGE WAS READ AT THE PLATE — all eight leaves, cols 0106D–0120D.**
archive.org `patrologiaecurs04migngoog`, **PDF page = (column + 11) / 2**, **corner numbers read
first on every page**: pp. 58 (105/106), 59 (107/108), 60 (109/110), 61 (111/112), 62 (113/114),
63 (115/116), 64 (117/118), 65 (119/120). Reads are recorded in
`data/briefs/8950-PLATE-READS-0012.json` for the coordinator to merge — **`data/plate-reads.json`
was NOT written**, and was verified byte-identical afterwards. `plate-gate.mjs 8950` returns
**`gate OK`** against a simulated merge.

**Apparatus fired: 16 `[var:]` · 3 `[ed:]` · 0 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[nt:]`.**
⛔ **Zero `[sic:]`, and that is a finding, not caution.** Every defect this range contains is
**Corpus Corporum's, not Migne's** — nine sites where the digitization silently *corrected* the
plate — so a `[sic:]` would fail `verify-english`'s verbatim-substring guard and would publicly
accuse Migne of the transcription's error. Five `[sic:]` are **OWED after the patch pass** and
are named in `data/briefs/8950-PENDING-TEI-PATCHES-0012.md`. This is the same result the
0008–0011 stint reached over its own range, independently.

Per-chunk parity (English = Latin in every column):

| chunk | anchors | `[n:]` | `?` | `«` / `»` | italic spans | `[var:]` | `[ed:]` |
|---|---|---|---|---|---|---|---|
| 0012 | 7 | 13 | 3 | 21 / 21 | 4 | 3 | 0 |
| 0013 | 10 | 17 | 2 | 26 / 25 | 4 | 2 | 0 |
| 0014 | 8 | 13 | 1 | 22 / 22 | 7 | 2 | 0 |
| 0015 | 5 | 4 | 1 | 22 / 23 | 8 | 1 | 1 |
| 0016 | 11 | 20 | 1 | 31 / 33 | 18 | 5 | 1 |
| 0017 | 6 | 2 | 1 | 17 / 17 | 10 | 1 | 1 |
| 0018 | 9 | 8 | 1 | 20 / 20 | 36 | 2 | 0 |

**Em-dashes: ZERO in all seven chunks** (four written in draft, all four removed for a comma).

⚑ **Ten places where the English now renders MIGNE'S TYPE rather than our twin's**, under
`translation-style.md` § "What the English translates — THE PLATE WHERE READ": 0108B
`VERS. 20-22.--`, 0110B *non dicit* and the dropped *et*, 0113A *Japhet* ×2, 0115D the comma
inside `*as far as*`, 0117B the head `CHAPTER XIII.`, 0118B a full stop for a comma, 0119B a
comma for a full stop **and** a full stop for a comma four lines apart, 0119B the two tag
periods, 0120D a semicolon inside a quotation. **Every one is filed as a pending patch**, so the
Latin converges on the English rather than the two drifting.

## §0 · SPAN COUNT AGAINST THE BRIEF — 245 against 245, EXACT

Counted mechanically over the seven chunk bodies (frontmatter excluded): guillemet spans matched
first with a non-greedy `«[\s\S]*?»`, then `\*[^*\n]+\*` over what remained, so an italic span
nested inside a guillemet span is not double-counted — the brief's own convention.

| chunk | `« … »` | `*…*` | total | raw `«` / `»` |
|---|---|---|---|---|
| 0012 | 21 | 4 | 25 | 21 / 21 |
| 0013 | 25 | 4 | 29 | 26 / 25 |
| 0014 | 22 | 7 | 29 | 22 / 22 |
| 0015 | 22 | 8 | 30 | 22 / 23 |
| 0016 | 31 | 18 | 49 | 31 / 33 |
| 0017 | 17 | 10 | 27 | 17 / 17 |
| 0018 | 20 | 36 | 56 | 20 / 20 |
| **total** | **158** | **87** | **245** | **159 / 161** |

**245 = the 245 printed in `data/briefs/8950-lemmata-0012.txt`.** Every inventory line was matched
to a span in my own Latin and every span to a line; there is no residue in either direction, and
the seven spans the rebuilt harvester recovered in this range (0108C ×2, 0108D ×2, 0115D, 0116C ×2)
are all present and all collated below. **The mis-split shape reported on 9001 is not present here.**

⚠ **The raw marks are unbalanced — 159 `«` against 161 `»` — and that is Migne, not a count error**
(§3). One extra open at 0013 and three extra closes at 0015/0016; the pairing regex absorbs them,
which is why the span total still reconciles.

---

## §1 · CONVENTIONS — inherited unchanged, and the three this stint had to settle

Ruth (8968 §1) and Tobit (8970 §1) govern and were **not re-opened**, nor were the three earlier
stints of this same work (`cruces-0000.md`, `cruces-0004.md`, `cruces-0008.md`), which I read
before drafting: `VERS. n.--` passes through verbatim; the lemma is Englished; a fragmentary lemma
is rendered as the phrase it stands for; sigla ride as ordinary `[n: …]` notes with Migne's own
internal spacing, contents unanglicized; **the guillemets are the plate's, 1:1**, and their
contents are Englished; `*usque ad*` → ***as far as***, with **no verb and no object ever
supplied**; the `*Historice / Allegorice / Mystice*` tags are translated inside their italic span
(stint 3 §1a) — `*Mystice.*` → ***Mystically.***, `*Allegorice.*` → ***Allegorically.***,
`*[n: (STRAB.)] Historice.*` → ***[n: (STRAB.)] Historically.*** with the note kept inside the span,
exactly where Migne sets it (0110B).

### (a) ⭐ NEW — an italic Latin word: MEANING is Englished, a word MENTIONED AS A WORD is not

This range is the etymological heart of the book (Genesis 10–14 is a name-list), and it carries
**53 italic spans that are Latin rather than Hebrew**. They split into two classes that must be
treated oppositely, and getting it wrong destroys an argument either way:

1. **The Latin gloss that gives the MEANING of a Hebrew name is Englished inside its span.**
   `Bethel … *domus Dei,*` → `*the house of God,*` · `Heber, *transitor,* … *transitores.*` →
   `*a passer-over,* … *passers-over*` (and the next sentence, *qui … transeunt*, turns on it) ·
   `*declinans*` → `*declining*` · `*descensum,*` → `*a going down,*` · `*rex justitiae,* …
   *rex pacis,*` → `*king of justice,* … *king of peace,*` · and the whole Genesis 14 chain at
   0118C–0119C (`*excussio dentium*`, `*fetor eorum*`, `*Decorus manipulus*`, `*Sciens jugum*`,
   `*in angustia constitutum,*`, `*cinguli maeroris,*`, `*praecipitatio*`, `*absorbitio:*` …).
   Leaving these Latin would leave an English reader the name and not the interpretation, which is
   the only thing the paragraph says.
2. ⛔ **The Latin word MENTIONED as a word — where the argument is about the form itself — stays
   Latin.** Two sites, both cross-linguistic:
   - **0115B** *in Latino **sidera** non **ferrea** significat, sicut in Graeco, sed **astra***.
     The whole point is that one letter-sequence means different things in the two languages;
     Englishing *sidera* would make the sentence say that "stars" does not signify "iron" but
     "stars". The transliteration `*in raudo sidera.*` is likewise carried untouched, as is the
     Greek ἐν ραβδῳ σιδηρᾶ.
   - **0118B** *quod in quibusdam codicibus, **mare** pro **occidente** ponitur*. A statement about
     what stands in certain codices, not about what a name means.
   Hebrew and Greek forms are never touched at all: `*heth*`, `χ *chi*`, `*Cham*`, `*Ham,*`,
   `*samech,*`, `*schin*`, `*scheba*`, `*seba.*`, `*tau*` ×2, `*Salissam*`, `*Zoara*`,
   `*in Ur Chesdim*`.

⚑ **The test, stated so a later stint can apply it without re-deriving it: is the italic word the
TRANSLATION of something, or the SUBJECT of the sentence?** A translation is Englished; a subject
is quoted. This is the same line Pattern 6's corollary draws for quotation marks and the same line
stint 1 §1(b) drew for *sementis/semen/seminium* — that stint had no italics in its twin and used
our own straight quotes; here the italics exist, so the span carries the distinction instead.

⚠ **Two spans resisted the rule and are recorded as such**, both because the Latin gloss contains an
untranslatable Hebrew element:
- **0118C** `*civitas, arbe quatuor.*` — *CHARIAT enim Hebraice **civitas, arbe quatuor.*** Rendered
  `*a city, arbe four.*`: *civitas* and *quatuor* are the Latin meanings, *arbe* is the Hebrew word
  being glossed, and all three sit in ONE italic span that cannot be split without breaking span
  parity. The English therefore mixes the two classes inside one span. Its twin four words earlier,
  `*civitas quatuor;*` → `*the city of four;*`, is a pure meaning-gloss and took the ordinary rule.
- **0119D** `*transfluviali;*` → `*one from beyond the river;*` — the Seventy's rendering of
  *Hebraeus* (περάτης). Englished as a meaning, because the next clause (*transito fluvio Euphrate*)
  is the argument for it.

### (b) `usque ad` — 16 formulas, 7 ORDINARY. Decided per occurrence by the `etc.` splice test

**Formula (italic, immediately after an `etc.`), 16×**, all → `*as far as*`, no verb, no object and
no antecedent supplied anywhere: **0107A · 0107B · 0108C · 0110B · 0111B · 0112C · 0113A · 0114D ·
0115C · 0115D · 0116A ×2 · 0116C · 0116D · 0119D · 0120D.** Fifteen are `*usque ad*`; the sixteenth
is 0115D's `*usque,*`, discussed below.
⚠ Two of the fifteen land mid-clause and are left mid-clause: **0112C** *aversi operuerunt, etc.,
**usque ad** « tanquam in pacem anguli concurrentes. »* — the resumption is itself inside guillemets
and has no finite verb; and **0113A** *etc., **usque ad** id est opus eorum* — a bare apposition.

⛔ **Seven ORDINARY, non-formula `usque ad`, none italic, none after an `etc.`, each rendered by
sense** (brief addendum D):

| col | Latin | English |
|---|---|---|
| 0109A | *quod **usque ad** ipsos montes aqua est exaltata* | "as far as the mountains themselves" |
| 0113B | *a Tauro et Amano … **usque ad** fluvium Tanaim* | "as far as the river Tanais" |
| 0113B | *in Europa vero **usque ad** Gadira* | "as far as Gadira" |
| 0116A | *quando ibi vixit **usque ad** nativitatem Jacob* | "until the birth of Jacob" |
| 0118C | *« Et dominabitur a mari **usque ad** mare. »* | "from sea to sea" — **Ps 71:8's own words** |
| 0120B | *ostendunt eum **usque ad** Isaac vixisse* | "until Isaac" |
| 0120B | *omnes primogenitos a Noe **usque ad** Aaron* | "from Noah to Aaron" |

⭐ **0115D `*usque,*` is a VARIANT OF THE FORMULA and is listed above only because it lacks *ad*.**
*« Tulit itaque Thare Abram, » etc., **usque,** facti sunt dies Thare ducentorum quinque annorum, et
mortuus est in Haran. »* — it follows an `etc.`, it names the point at which the abridgment resumes,
and the resumption is Gn 11:32 verbatim. **Rendered `*as far as,*`, with the comma inside the span
as Migne sets it.** Precedent: stint 2's `*usque ad haec*` at 0091D, ruled the formula on the same
grounds. **Said here explicitly, per the series brief's requirement that an exception name the Latin
that forced it.**
⚠ **0118C is the 8967 col 0953C shape and is the one that must not be swept**: Ps 71:8 prints
*usque ad* as part of the verse, four lines below a formula at 0116D. Rendered "from sea to sea".

### (c) The vocabulary axes — every instance, with the instrument checked before reporting

- **`gentes` / `gentilis`.** 25 occurrences (instrument checked: `gentesimo`, `indigentia` and
  `ducentorum` are excluded, and every remaining hit is listed). **Gentiles** where the *Judaei*/*gentes* opposition is
  live: 0111B *in vocatione **gentium** ad fidem* (Peter's dish); 0112A *« Judaeis scandalum,
  **gentibus** stultitiam … Judaeis et **gentibus**, »* glossed *quasi Sem et Japheth*; 0112D–0113A
  *in populo **gentium** orbem terrae occupavit Ecclesia*; 0113A *de Japheth **gentiles*** (the
  `gentilis` → Gentile rule, added on 9000); 0116C *non tantum gentis Judaicae, sed omnium
  **gentium** fidem suam sequentium*; 0118D *stultitiam **gentilium***; 0120C *Ecclesiam **gentium***.
  **nations** where the sense is plainly generic: 0113B *nomina locis et **gentibus** relinquentes*;
  0114A *caeterae sex **gentes** nobis ignotae* and *deletae sunt **gentes** bello Aethiopico*;
  0114B *hae **gentes** a fluvio Cono*; 0115B *diversis **gentibus** divisit*; 0117D *inter **gentes**
  Chananaei et Pheresaei*; 0118C *haereditas omnium **gentium*** and Ps 2:8's *dabo tibi **gentes***;
  0118D *rex **gentium*** (Gn 14:1's own words); 0119D *nomina locorum et **gentium***; 0118A *gente, sicut omnes Judaei* → **by nation**, the axis's
  singular-`gens`-of-the-Jewish-people rule; 0112D *Deus omnium **gentium*** and *in ipsis
  **gentibus***.
  - ⚠ **The one place the axis had to be applied twice in one sentence, and it is deliberate:**
    0116C sets the exposition *non tantum gentis Judaicae, sed omnium **gentium*** against its own
    proof-text *« Et benedicentur in te omnes **gentes** terrae. »* The exposition is the
    *Judaei*/*gentes* opposition → **Gentiles**; the verse is the axis's own generic exemplar shape
    (*omnes gentes*, Mt 28:19) and is universal, covering the Jews it has just named → **nations**.
    Singular *gens Judaica* → **the Jewish nation**, per the axis. **Recorded because it reads as an
    inconsistency and is not one.**
- **`natio` — ZERO in this range.** ⚑ Instrument checked before reporting, per the series brief: a
  raw `natio` grep returns **five** hits and every one is *damnatione* (0112D), *dominatio*
  (0115B), *cognationem* (0116B), *cognatione* (0116B) or *cognatione* (0118A). There is no
  `natio` in the range at all.
- **`turba` — ZERO.** Every `turb-` is absent entirely; there is no verb *turbare* here either.
  **`multitudo` ×2, both "multitude"** (0113A *lata est multitudo credentium*, 0120B *non in
  multitudine exercitus*).
- **`daemonium` — ZERO. `diabolus` ×2 → devil** (0113C, 0119C). No *satanas*.
- **`sacramentum` ×7 → sacrament** (0107D, 0108D, 0109B, 0110A, 0110C, 0110D, 0120A); **`mysterium` ×1 →
  mystery** (0110A *nullis egeamus mysteriis*). The 1:1 pair is exercised in adjacent columns and
  was kept 1:1.
- **The commentator's own voice is not archaised**: *dicit/ait/aiunt* → "says / say", never *saith*.
  `-eth`/`-est` forms appear only inside quoted scripture (Gal 5:17 *concupiscit* → "lusteth",
  1 Cor 3:7 *plantat/rigat* → "planteth/watereth", Job 5:2 *interficit/occidit* →
  "killeth/slayeth") and in second-person singular address.
- **Pattern 17.** Singular → *thou*: 0110C's whole Mystice paragraph (*addas · adjicias · pervenisti
  · egeas · invenies* → "thou add … thou hast come … thou needest … thou shalt find"); 0115D
  *« Ego sum qui eduxi **te** de Ur Chaldaeorum. »*; 0116D *« Dic ergo, obsecro, »*; 0117B *quomodo
  potuit dives esse valde* is third person and untouched; 0118A *si attenuatus fuerit frater
  **tuus** et vendiderit se **tibi***; 0118A–B *« Leva oculos, »* and *quantum **vides***; 0118C
  *« Tibi dabo. »* and Ps 2:8 *« Postula a me, et dabo **tibi** … »*. Plural → *you*: 0111B
  *« Et terror **vester**, »*; 0119D Jos 24 *« Quid **vultis** servire diis patrum **vestrorum**? »*.

### (d) Heads — numerals mirror the plate, INCLUDING a missing period

`CAPUT VII.` → `CHAPTER VII.` · `CAPUT VIII.` → `CHAPTER VIII.` · `CAPUT IX.` → `CHAPTER IX.` ·
`CAPUT X.` → `CHAPTER X.` · `CAPUT XI.` → `CHAPTER XI.` · `CAPUT XII.` → `CHAPTER XII.` ·
`CAPUT XIV.` → `CHAPTER XIV.` — numerals throughout, per the corpus measurement.
⚠ **Chunk 0017's head is `## CAPUT XIII` with NO terminal period**, and its `heads:` frontmatter
field carries the same defect (`"CAPUT XIII"`). **The English head is `## CHAPTER XIII`, also with
no period**, and the frontmatter is copied verbatim. This is the opposite call from Tobit's
`CAPUT XIV` case (8970 §1e), where the plate was READ and shown to carry the period, so the English
head restored it while the frontmatter kept the TEI's reading. **Here the plate is unread**, so
supplying a period would be a silent repair of a head I have no witness for. Filed in §5 as a
plate debt: **PDF p. 64 settles it.**

### (e) Frontmatter copied VERBATIM from each Latin chunk, field order included

Every field, in the Latin twin's own order, including `words:` figures that count the Latin.
Chunk 0012's `colContext: "0106D"` against `colFirst: "0107A"` is the chunker's, and is copied.

---

## §2 · THE THREE `[ed:]` — Corpus Corporum has dropped MIGNE'S HEBREW at four sites

Migne sets Hebrew square script in this book wherever Jerome is quoted on a name, and **our
transform has lost every occurrence in my range.** All four were read at 1200 dpi.

| col | our TEI reads | Migne's plate reads | what remains in our Latin |
|---|---|---|---|
| 0113C | `in Hebraeo habetur et *scheba* et *seba.*` | `in Hebraeo habetur **שׂבא** et **סבא** scheba et seba.` | a stray `et … et` that reads as a correlative |
| 0115C | `*in Ur Chesdim* **( )**` | `*in Ur Chesdim* (**אורכשׂדים**)` | an EMPTY pair of parentheses |
| 0117A | `habetur *gravis vehementer:*` | `habetur **כבד** *gravis vehementer*:` | nothing — the sentence still construes |
| 0118C | `*civitas quatuor;* CHARIAT enim Hebraice *civitas, arbe quatuor.*` | `*civitas quatuor*; **קרית** CHARIAT enim Hebraice *civitas*, **ארבע** *arbe quatuor*.` | two of Migne's italic phrases FUSED into one span |

**Three take an `[ed:]`; the fourth does not, and the line is Pattern 13a's own.** Clause 2 gives
the marker to a loss that would otherwise be **invisible as an absence**; clause 1 leaves an
ordinary mid-sentence loss to a silent patch and a crux. So:

- **0113C, 0115C and 0118C are MARKED** — each leaves a visible scar in our own text that
  misleads a reader who has only the two columns: a correlative that is not one, an empty
  bracket, and a fused italic span. ⭐ **0118C's scar is the one I had already flagged as a
  convention problem in §1(a) before I read the plate** — "two spans that resisted the rule" —
  and the plate shows the fusion is the digitization's, not Migne's oddity. That is the crux
  file catching something the Latin alone could not.
- **0117A is NOT marked** — the loss leaves the sentence sound and says nothing false. Crux and
  patch only.

⛔ **None of the four is a `[sic:]` or a `[var:]`.** They are Pattern 13 source loss: the plate
is perfectly legible and it is our transcription that has the hole. Pattern 13's rule that an
`[ed:]` **never supplies the lost text** is kept — the recovered Hebrew is recorded here and in
the patch file, not in the running English.

⚑ Stint 3 recorded the identical class at 0104C ("two Hebrew words dropped by CC"), so this is a
known, recurring behaviour in this book and not a local accident. **Eight Hebrew words are now
known lost across cols 0104–0118.**

---

## §3 · THE GUILLEMETS — the plate settles all four unpaired marks, and it splits them 2–2

Before the plate pass I reported four unpaired marks and called them all Migne's. **That was
half right, and the half that was wrong is the more interesting half.**

| col | our twin | the plate | verdict |
|---|---|---|---|
| 0108C | extra OPEN: `« Recordatus est autem Deus « Noe, »` | the same, with the repeat | **DECLINED** (an added auxiliary; sense unchanged). **MIGNE'S** — his line-continuation mark |
| 0116B | extra CLOSE: `VERS. 2-3.--Faciamque te in gentem magnam, »` | no opening mark either | **MIGNE'S** — reproduced unopened, per Pattern 5's corollary |
| 0113C | extra CLOSE: `Reges Arabum et Saba dona adducent, » in Hebraeo` | ⛔ **the plate has NO closing mark on `« Regma et Saba, etc.`** | **OURS** — our twin *supplies* a `»` Migne does not print, and that supplied mark is what leaves this one stranded |
| 0115D | extra CLOSE: `*usque,* facti sunt dies Thare … in Haran. »` | ⛔ **the plate OPENS `« facti`, and repeats it at each line head** | **OURS** — the plate is BALANCED here and our twin dropped the opener |

⭐ **So the class is not "Corpus Corporum drops Migne's repeated `«`." It is "Corpus Corporum
normalizes the quotation marks in whichever direction makes the pair balance"** — dropping an
opener at 0106D, 0107C, 0115C and 0115D, and *supplying* a closer at 0113C. That is a stronger
and more worrying statement than the one the earlier stints could make, and it means **a
balanced pair in our Latin is not evidence that Migne's pair was balanced.**

⛔ **Nothing was repaired.** Guillemet parity is checked against the twin, so the English mirrors
the twin at all four sites and the corrections belong in the patch file, where all six dropped
line-head repeats in this range are listed (0106D ×2, 0107C, 0113C, 0115C, 0115D).

---

## §4 · ⚠⚠ 7a″ — THE VULGATE COLLATION. **This is the deliverable.**

All 158 guillemet spans and the scriptural italic spans were collated **against
`sources/vulgate/clementine-flat.txt`, line by line, cited by book chapter:verse** — never from
memory, and never from the brief's pre-scan, whose `✓` addresses were read and in four places found
to point at the wrong book (Ps 119:7 filed under 1Par; Gn 11:8 under 1Par 24:3; Ps 71:8 and Ps 2:8
correctly). **The spans that AGREE are listed too (§4d): a list of divergences alone cannot be told
apart from a report by an agent that only chased the ⚠ marks.**

### 4a. ⭐ THE PLATE WAS READ, SO THE MARKERS COULD BE FIRED — 16 of the 26

All eight leaves were read before any marker was placed, and **every one of the 26 divergences
was confirmed as MIGNE'S TYPE at 200–1200 dpi.** Not one turned out to be the digitization
manufacturing a Vulgate divergence — the class `plate-gate.mjs` exists to catch, and the class
9003's collation showed a Vulgate collation can never catch by itself.

**Sixteen took a `[var:]`; ten are recorded and declined.** The line I drew, stated so it can be
checked rather than admired — **fire where the divergent word is (a) a different lexeme, (b) a
different referent or grammatical person, or (c) a word the gloss itself argues from; decline
where the difference is orthography, a clipped fragment boundary, a synonymous connective, or
word order alone.** Pattern 14's bar is "in a way that changes the sense", and a marker on
word order is noise that buries the fourteen that carry information.

⚑ The ten declines are in §4b's own table, flagged **DECLINED**, with the reason on each row —
not hidden in a separate list, because a reader comparing the two needs them side by side.

### 4b. DIVERGENT — 26 sites, ALL plate-confirmed as Migne's. **16 FIRED · 10 DECLINED.**

| col | Migne prints | Clementine | note · leaf |
|---|---|---|---|
| 0106D | `« Ex omnibus animantibus mundis **tolles** septena et septena, »` | Gn 7:2 ***tolle*** (imperative) | **DECLINED** (same lexeme, mood only; the gloss argues the number, not the verb). Future for imperative. **OCR-confirmed as Migne's.** p. 58 |
| 0107C | `« **Egressus est Noe et uxor ejus.** »` introduced *sic enim scriptum est* | Gn 8:18 *Egressus est **ergo** Noe, **et filii ejus : uxor illius, et uxores filiorum ejus cum eo*** | **FIRED.** ⚑ **Material**: the gloss's whole point is that they went out MINGLED, men with women, and the quotation has been cut to just Noah and his wife to make it. p. 59 |
| 0107C | `« Tempus enim **amplectendi** et tempus **abstinendi** [n: (Eccli. III)]. »` | Ecl 3:5 *tempus **amplexandi**, et tempus **longe fieri ab amplexibus*** | **FIRED.** A different verb and a wholly different second member. p. 59 |
| 0108B | `« **insufflavit** in faciem ejus **spiritum** vitae; »` | Gn 2:7 ***inspiravit** in faciem ejus **spiraculum** vitae* | **FIRED.** Two words. ⚠ Migne himself flags only the second (*sed quidam codices habent melius, « flatum vitae. »*), so the first is unlabelled. p. 59 |
| 0108C | `« Recordatus **est** autem Deus « Noe, »` | Gn 8:1 *Recordatus autem Deus Noe* | **DECLINED** (an added auxiliary; sense unchanged). *est* supplied. **OCR-confirmed as Migne's.** p. 59 |
| 0110D | `« **nunc** caro concupiscit adversus spiritum, **et** spiritus adversus carnem. »` | Gal 5:17 *Caro **enim** concupiscit adversus spiritum, spiritus **autem** adversus carnem* | **FIRED.** Two connectives changed; *nunc* is load-bearing (the gloss opposes *nunc* to *in resurrectione*). **OCR-confirmed as Migne's.** p. 60 |
| 0110D | `« Non percutiam omnem animam viventem sicut feci, »` | Gn 8:21 *non **igitur ultra** percutiam …* | **FIRED** — *ultra* is what limits the promise. *ultra* dropped, and it is the word that limits the promise. p. 60 |
| 0111A | `« Benedixitque Deus Noe et filiis; »` | Gn 9:1 *et filiis **ejus*** | **DECLINED** (a dropped possessive). p. 60 |
| 0112A | `« Erant **igitur** filii Noe, »` | Gn 9:18 *Erant **ergo** filii Noe* | **DECLINED** (synonymous connectives). p. 61 |
| 0112A | `« Judaeis scandalum, **gentibus** stultitiam, ipsis autem vocatis Judaeis et **gentibus**, »` | 1Cor 1:23–24 *Judaeis **quidem** scandalum, **gentibus autem** stultitiam, ipsis autem vocatis Judaeis, **atque Graecis***  | **FIRED.** ⚑ **Material and doubly so**: *gentibus* replaces *Graecis* in v. 24, and the gloss reads the two names as **Sem and Japheth** — i.e. the argument rests on the substituted word. p. 61 |
| 0112A | `« **Dei virtus,** et Dei sapientia: quia quod stultum est Dei … »` | 1Cor 1:24 ***Christum Dei virtutem**, et Dei sapientia* | *(covered by the same marker as the row above.)* Nominative for accusative, *Christum* dropped. p. 61 |
| 0112C, 0112D | `« Maledictus Chanaan **puer**, »` (twice) | Gn 9:25 *Maledictus Chanaan, **servus servorum erit fratribus suis*** | **FIRED once, at the first occurrence**, per Pattern 14's practice. *puer* is the Old-Latin/LXX παῖς and is not in the Clementine at all. **OCR-confirmed as Migne's.** p. 61 |
| 0113D | `« **Ascendam super astra coeli.** »` | Is 14:13 *In caelum **conscendam**, super astra **Dei** exaltabo solium meum* | **FIRED.** A free conflation, adduced as the devil's own words. p. 62 |
| 0114A | `« Ludim et Anamim. Laabim, **Nephetuim**, »` | Gn 10:13 *Ludim, et Anamim et Laabim, **Nephthuim*** | **DECLINED** (orthography of a proper name). p. 62 |
| 0114C | `« **viderunt**, inquit, campum in terra Sennaar, »` | Gn 11:2 ***invenerunt** campum in terra Senaar* | **FIRED.** ⚑ The gloss opens *Vide quomodo…*, so the substituted verb is the one the exposition echoes. **OCR-confirmed as Migne's.** p. 62 |
| 0114D | `« Descendamus, et confundamus linguam eorum, »` | Gn 11:7 *confundamus **ibi** linguam eorum* | **DECLINED** (a dropped adverb the gloss does not touch). p. 62 |
| 0115A | `« **Fecit** Deus hominem ad imaginem **et similitudinem** suam. »` | Gn 1:27 ***creavit** Deus hominem ad imaginem suam* | **FIRED.** The same divergence stint 1 logged at 0080B and 0081A; here it is adduced to prove the singular verb. p. 63 |
| 0115B | `« Sem **centum erat annorum**. »` | Gn 11:10 *Sem **erat centum** annorum* | **DECLINED** (word order alone). Word order only. p. 63 |
| 0115D | `« **Ego sum qui** eduxi te de Ur Chaldaeorum. »` | Gn 15:7 ***Ego Dominus qui** eduxi te de Ur Chaldaeorum* | **FIRED.** p. 63 |
| 0115D | `« **Aram** patris Melchae. »` (and *Aram filius Thare* below it) | Gn 11:29 ***Aran** patris Melchae* | **FIRED.** **OCR-confirmed as Migne's, in both places.** p. 63 |
| 0116C | `« Et benedicentur in te omnes **gentes** terrae. »` | Gn 12:3 *atque in te benedicentur **universae cognationes** terrae* | **FIRED.** ⚑ **Material**: this is the proof-text for Abraham as father *omnium gentium*, and the Clementine's word is not *gentes*. The form Migne prints is Gal 3:8 / Act 3:25. p. 63 |
| 0117D | `« Haereticum hominem post **primam** et secundam **correctionem** devita: »` | Tit 3:10 *post **unam** et secundam **correptionem** devita* | **FIRED.** Two words; *correptio* (rebuke) and *correctio* (correction) are different words, and the gloss is about avoiding heretics after rebuke. p. 64 |
| 0119D | `« Raphaim in **Astaroch**, »` | Gn 14:5 *Raphaim in **Astarothcarnaim*** | **FIRED.** p. 65 |
| 0119D | `« Quid vultis servire diis patrum vestrorum qui sunt trans flumen? »` | Jos 24:14–15 *auferte deos quibus servierunt patres vestri in Mesopotamia … utrum diis, quibus servierunt patres vestri in Mesopotamia* | **FIRED.** A free conflation of two verses; the words as printed occur nowhere. p. 65 |
| 0120C | `« sine patre **et** matre, »` | Hbr 7:3 *sine patre, **sine** matre, sine genealogia* | **DECLINED** (a conjunction for a repeated preposition; sense unchanged). p. 65 |
| 0120D | `« Malae bestiae, **pigri ventres**, »` | Tit 1:12 *malae bestiae, **ventres pigri*** | **DECLINED** (word order alone). Word order. **OCR-confirmed as Migne's** — and the OCR sets a semicolon inside the guillemets where our twin has a comma (§5). p. 65 |

### 4c. DIVERGENT AND DECLINED ON THE MERITS — Migne labels the version himself

Stint 3's ruling (§1b of `cruces-0008.md`) governs: **`[var:]` fires where the words are offered AS
the text and diverge; where Migne announces the version, its divergence IS the sentence's subject
and a marker would tell the reader twice.** Five sites, and this range would have carried five extra
markers without the rule:

- **0108B** `« flatum vitae. »` — introduced *sed quidam codices habent melius*. Migne's own
  variant-report.
- **0113D** `« quia ipse coepit esse **gigas** super terram. »` against Gn 10:8 *potens in terra* —
  introduced *vel « gigas, » **secundum alios***, and the next sentence argues with it.
- **0117A–B** `« Abiit unde venerat in desertum usque Bethel, »` — introduced *ut in LXX legitur*,
  and expressly contrasted with the next.
- **0117B** `« Abiit in itinere suo per austrum usque Bethel. »` — introduced *secundum Hebraeum*.
  Gn 13:3 reads *Reversusque est per iter quo venerat a meridie in Bethel*; the whole paragraph is
  Jerome adjudicating between the two, so the divergence is the text.
- **0117A** `*gravis vehementer:*` for Gn 13:2 *dives valde* — introduced *sed in Hebraica veritate
  habetur*, and the gloss then argues from it (*Aegypti enim pondere gravabatur*).
- **0108D** `*[Al., unum]*` — **Migne's own bracketed variant**, reproduced verbatim and
  untranslated per the locked register. It offers Gn 1:9's *unum* against the text's *suum*, and it
  is his conjecture layer, not ours (Pattern 19's instinct).

### 4d. COLLATED AND AGREEING — checked, exact or a clean whole-word fragment

Recorded so this can be told from a report by an agent who only read the ⚠ lines.

**Gn 7** — `« Dixitque Dominus, »` (7:1) · `« Ex omnibus animantibus, »` (7:2) · `« Ego pluam, »`
(7:4) · `« Fecit ergo Noe omnia, »` (7:5) · `« Eratque sexcentorum annorum, »` (7:6) ·
`« Ingressus est Noe et filii ejus, uxor, »` and `« Ingressus est Noe et filii ejus, »` and
`« uxor ejus et uxores filiorum ejus. »` (7:7 — the lemma opens mid-verse, dropping only the
Clementine's initial *Et*) · `« Cumque transissent, »` (7:10) · `« Anno sexcentesimo, »` (7:11) ·
`« Cataractae. »` (7:11) · `« Bina et bina, »` and `« In qua erat spiritus vitae, »` (7:15) ·
`« Quadraginta diebus, »` (7:17) · `« Quindecim cubitis altior, »` and `« Quindecim. »` (7:20) ·
`« Deleta sunt de terra. »` (7:23).
**Gn 8** — `« Adduxit spiritum super terram, »` (8:1) · `« centum quinquaginta dies »` (8:3) ·
`« Requievitque arca mense septimo, »` (8:4) · `« Decimo enim mense. »` (8:5) ·
`« Qui egrediebatur, »` (8:7) · `« Emisit quoque. »` (8:8) · `« Reversa est. »` (8:9) ·
`« Exspectatis, »` (8:10 — *Expectatis* is orthography, not divergence) · `« Portans ramum. »`
(8:11) · `« Exspectavitque nihilominus septem alios dies, »` (8:12, same orthography) ·
`« Sexcentesimo primo anno, »` (8:13) · `« Mense secundo. »` and `« Mense secundo, »` (8:14) ·
`« Egredere de arca, »` (8:16) · `« Et tollens, »` (8:20) · `« Sensus enim, »` (8:21).
**Gn 9** — `« Crescite et multiplicamini. »` (9:1) · `« Et terror vester, »` (9:2) ·
`« Carnem cum sanguine. »` (9:4) · `« Ecce ego statuam pactum, »` (9:9) · `« Arcum meum ponam, »`
(9:13) · `« Bibensque vinum, »` and `« In tabernaculo suo, »` (9:21) · `« Quod cum vidisset, »`
(9:22) · `« At vero Sem, »` (9:23) · `« Benedictus Dominus Deus Sem. »` (9:26) ·
`« Dilatet Deus Japheth. »` ×3 and `« Et habitet in tabernaculis Sem, »` (9:27) · `« Chanaan. »`.
**Gn 10** — `« Hae sunt generationes, »` (10:1) · `« Gomer. »` (10:2) · `« Thubal. »` (10:2) ·
`« Chanaan. »` (10:6) · `« Saba. »` (10:7) · `« Nemrod. »` and `« Ipse coepit esse potens, »` and
`« gigas, »` (10:8) · `« Robustus venator. »` (10:9) · `« Babylon. »` (10:10) · `« Assur. »` ×2
(10:11, 10:22) · `« At vero Mesraim, »` (10:13) · `« De Sem. »` (10:21) · `« Heber. »` (10:24) ·
`« Natique sunt Heber filii, »` (10:25).
**Gn 11–14** — `« Erat autem terra labii unius, »` (11:1) · `« Cumque proficiscerentur. »` (11:2) ·
`« Venite. »` (11:3) · `« Venite igitur, »` (11:7) · `« et divisit eos, »` and `« Divisit eos. »`
(11:8) · `« quia tulit eum Deus. »` (5:24, exact) · `« In Ur Chaldaeorum. »` (11:28) ·
`« Tulit itaque Thare Abram, »` (11:31) · *facti sunt dies Thare ducentorum quinque annorum, et
mortuus est in Haran. »* (11:32, **exact, including the terminal clause**) ·
`« Egredere de terra, »` and `« de domo patris, »` and `« Et veni in terram quam monstrabo tibi. »`
(12:1) · `Faciamque te in gentem magnam, »` (12:2) · `« Septuaginta quinque annorum. »` (12:4) ·
`« Bethel. »` · `« Hai. »` · `« Dic ergo, obsecro, »` (12:13, dropping only *te*) ·
`« Sublata est mulier. »` (12:15) · `« Ascendit ergo Abram, »` (13:1) · `« In Bethel, »` (13:3) ·
`« Erat quippe substantia eorum multa, »` (13:6) · `« Ne quaeso sit, »` and `« Fratres enim
sumus. »` (13:8) · `« Sicut paradisus, »` (13:10) · `« Coram Domino. »` (13:13) ·
`« Leva oculos, »` (13:14) · `« Omnem terram, »` and `« Tibi dabo. »` (13:15) ·
`« Surge et perambula terram, »` (13:17) · `« In Hebron. »` (13:18) · `« Amraphel. »` ×2 ·
`« Arioch. »` · `« Chodorlahomor. »` · `« Thadal. »` (14:1) · `« Balae. »` (14:2) ·
`« Duodecim, »` (14:4) · `« Percusseruntque. »` (14:5) · `« Hebraeo. »` (14:13) ·
`« Quod cum audisset Abram, »` (14:14) · `« At vero Melchisedech, »` (14:18) ·
`« Dedit ei decimas. »` (14:20) · `« Qui venerunt, »` (14:24).
**Non-Genesis proof-texts that agree exactly** — Gn 1:2 `« Spiritus Dei ferebatur super [0108D]
aquas: »` (the anchor falls **inside** the quotation and is reproduced inside it) · Gn 1:26
`« Faciamus hominem ad imaginem et similitudinem nostram. »` · Ps 106:25 `« Et stetit spiritus
procellae, »` · Ps 118:104 `« A mandatis tuis intellexi. »` · Lc 10:21 `« Abscondisti haec a
sapientibus et prudentibus, et revelasti ea parvulis. »` (**and Migne's `Luc X` is right**) ·
Ps 119:7 `« Cum his qui oderunt pacem eram pacificus: [0109D] cum loquebar illis, »` ·
1Cor 3:7 `« Neque qui plantat est aliquid, neque qui rigat, sed qui incrementum dat Deus »` ·
Ps 2:9 `« In virga ferrea, »` · Ps 2:8 `« Postula a me, et dabo tibi gentes haereditatem tuam »` ·
Ps 71:8 `« Et dominabitur a mari usque ad mare. »` · Ps 109:4 / Hbr 7:17 `« Tu es sacerdos in
aeternum secundum ordinem Melchisedech, »` · Hbr 7:2 `*rex justitiae,*` and `*rex pacis,*` ·
Job 5:2 `« Stultum interficit iracundia, parvulum occidit invidia. »` (dropping only *Vere* and
*et*, and Migne's `Job V` is right).

⚠ **`coelum`/`coeli` for *caelum*, `Sennaar` for *Senaar*, `Hierusalem` for *Jerusalem* and
`quaeso/caeteri` spellings are Migne's orthography, not divergences, and are not listed as such.**

### 4e. TWO CITATION SIGLA THAT POINT ELSEWHERE — reproduced verbatim, uncorrected

- **0109C `[n: (Psal. XIX)]`** on `« Cum his qui oderunt pacem eram pacificus … »`. The verse is
  **Ps 119:7**, and the Clementine agrees with Migne's words exactly. `XIX` for `CXIX` is a dropped
  C. **Notes pass through verbatim** (series brief convention 4) and this is not the English's to
  fix; the correction belongs in `data/citation-corrections.json` at index time.
- **0119C `[n: (I Cor. XV)]`** on `« Comedamus et bibamus, cras enim moriemur »`. 1Cor 15:32 reads
  ***Manducemus** et bibamus*; **Is 22:13 reads *comedamus et bibamus, cras enim moriemur* — Migne's
  words exactly.** So the words are Isaiah's under a Corinthians siglum (Paul is himself quoting
  Isaiah there). ⚑ **This is the reason a bare `✓` is not clearance**: the brief's own pre-scan
  matched it to Is 22:13, which is the mark telling you the siglum names a different verse.
  Reproduced as printed; **no `[var:]`, because against the address Migne's own words are the ones
  he printed and there is no divergence to report** — the anomaly is in the siglum, not the text.

---

## §5 · THE DECLINED LIST — suspect readings, what would settle each, and the leaf

**PDF page = (column + 11) / 2** on `raw/scans/pl113/patrologiaecurs04migngoog.pdf`. Cols 0106–0120
are pp. 58–65 and **every one is unread**. Where the archive OCR was consulted the result is given,
and it is **not a plate read**: it licenses no marker on its own.

### 5.1 ⭐⭐ 0110B — SETTLED AT THE PLATE. All three words go against our twin.

Migne's *Historice* on Gn 8:14 reads, **in our twin**:

> *Id est, Maio, Noe annum fecit in arca, **et** ipsa die qua ingressus fuerat, egressus est.
> **Ingressus es** enim vicesima septima die mensis secundi; **num** dicit quia egressus est
> septima et vicesima die ejusdem mensis.*

**The plate (p. 60, col 110, band D, read at 1200 dpi, corner numbers checked first) reads:**

> *Id est, Maio, Noe annum fecit in arca, ipsa die qua ingressus fuerat, egressus est.
> **Ingressus est** enim vicesima septima die mensis secundi; **non** dicit quia egressus est
> septima et vicesima die ejusdem mensis.*

1. ⛔ ***Ingressus es* is OURS.** The `t` is unmistakable. A second-person singular stranded in a
   narrative about Noah is Pattern 12's test-1 shape and would have earned a `[sic:]` on the
   Latin alone — **exactly the false public claim against Migne the ship test exists to stop.**
   The English already rendered *est*; no marker, patch owed.
2. ⛔ ***num* is OURS too, and the plate reads *non*.** Three clear letters, a round `o`, no `m`
   and no `c` — it is neither our twin's *num* nor the *nunc* the sense had tempted me toward.
   ⭐ **This is the entry I am most glad I declined.** Before the read I had rendered *num* as an
   interrogative particle without supplying a question mark, producing a sentence that read as
   broken and that I flagged as the stint's headline crux. **Had I "repaired" it to the *nunc*
   the argument seemed to want, I would have been wrong, and invisibly so.** The English now
   reads *non dicit* — "it does not say that he went out on the seventh and twentieth day of
   the same month" — which is what Migne printed, and the lunar computation that follows is
   what supplies the exit date he says Scripture does not give.
3. **The twin's *et* before *ipsa die* is OURS** — the plate has none. English corrected.
4. ⚠ ***vicesima septima* as the date of ENTRY is MIGNE'S.** It contradicts Gn 7:11
   (*septimodecimo die mensis*) and it contradicts this paragraph's own next sentence
   (*decima septima … dies mensis secundi fuit*). **Rendered as printed, and it is his
   contradiction, not ours.** It takes no `[cj:]`: a numeral slip is neither a negation nor a
   correlative, which is Pattern 18's declining class, and the sentence asserts nothing false
   about the argument once the lunar reckoning is read.

### 5.2 Real words that read oddly — checked at the plate. **Five stand as Migne's; two did not.**

Per addendum A: a real, well-formed word that reads oddly is **Migne's** until a plate says
otherwise, and the corpus argument loses even when it is good.

- **0110B** *Vitae Noe, id est, peractis sexcentis annis* — a genitive with no governing noun, the
  abridgment having cut the head of Bede's sentence. Rendered "Of Noah's life, that is, six hundred
  years being completed"; this is the formula working, not a defect.
- **0110D** *Juncti exeunt, qui disjuncti **intraverunt*** — the OCR reads `intraverant`
  (pluperfect). Both are real words and the sense is unaffected. **Rendered *intraverunt*
  ("who entered"), no marker.** Recorded because it is a genuine twin/plate disagreement candidate
  that changes nothing; p. 60.
- ⭐⭐ **0112B — the plate found a defect TWO WORDS to the left of the one I raised.** I had flagged
  *debebat* for having no infinitive and rendered it as printed. **The plate reads *ridiculum ei
  visum ET FACIMUS cui minime debebat*, where our twin has *visum est facinus*** — Corpus Corporum
  has repaired **two words at once**, and its repair is good Latin that reads so naturally nothing
  in the Latin column could ever have raised it. Migne's line does not construe: *facimus* is a
  first-person verb among third-person narrative about Cham, and *visum et* leaves the clause with
  no copula. **`[sic: *et facimus*]` is OWED and cannot be fired** until the patch lands, because
  the marker's content must be verbatim in the twin. *debebat* itself is Migne's and stands.
  ⚑ **This is addendum C exactly — "read the whole line, not the target word"** — and it is the
  strongest argument in this stint for reading plates at all: the site I flagged was sound, and
  the site four characters away was not. p. 61.
- **0113A** *Quia igitur lata est multitudo credentium, a latitudine, quae Japheth dicitur,
  **latitudo nominatur*** — the etymology names *latitudo* twice and says nothing new the second
  time. Real words; rendered literally. p. 62.
- **0117D** *Pastores ejus, haereticos et schismaticos, qui … ascendunt ad Dominum, pacem et
  unitatem continentes;* — an accusative in apposition with no verb to govern it (*significant* has
  to be carried over from the previous sentence), and *continentes* is a nominative plural that can
  attach neither to *Dominum* (accusative singular) nor coherently to the heretics, of whom the
  clause has just denied peace and unity. **Rendered in Migne's order with the participle left
  dangling exactly where he leaves it**; reordering it to disambiguate would be a silent repair of
  his syntax. p. 64.
- ⛔ **0119B — REFUTED BY THE PLATE, and it is the one entry on this list that the read reversed.**
  Our twin prints *in mare Mortuum versa est. **quod** a Graecis stagnum Asphalti … dicitur*, and I
  logged the full stop before a lower-case relative as Migne's under addendum A's rule that a real
  mark reading oddly is his until a plate says otherwise. **The plate says otherwise: Migne prints a
  COMMA.** Our twin introduced the sentence break. English corrected to a comma.
  ⭐ **And the same class runs the other way four lines below**: the plate prints *superant primum
  Bara. qui interpretatur* with a FULL STOP where our twin has a comma. **Corpus Corporum swapped
  both marks, in opposite directions, within four lines** — which no totals-based punctuation check
  could ever see, and which is why Test 3 compares band by band. Both now follow the plate. p. 65.
- **0118C** *Ibi enim situs est **Adam maximus** et Abram* — Jos 14:15's *Adam maximus ibi inter
  Enacim situs est*, a proper name in Migne's copy where modern texts read a common noun. Rendered
  "Adam the greatest", as printed. p. 64.

### 5.3 The head at 0117B, and the address anomalies — all reproduced, none tidied

- ✅ **`## CAPUT XIII` — SETTLED. The plate prints `CAPUT XIII.` WITH the terminal period** (p. 64,
  read at 1200 dpi), so the omission is our twin's and its `heads:` frontmatter carries the same
  defect. **The English head is now `## CHAPTER XIII.`**, and the frontmatter is left exactly as
  copied, because "copy the Latin chunk's frontmatter VERBATIM" is unconditional and the patch will
  fix both sides at once. **This is Tobit 8970 §1e applied, not re-derived** — and it is the call I
  declined to make before the read, correctly, because an unread plate could not license it.
- **0108B `VERS. 20-22--`** (chunk 0012) — no terminal period and the double hyphen unspaced from the numeral,
  against `VERS. n.-- ` in the other forty-one addresses of this stint. Reproduced verbatim.
- **0116B `VERS. 2-3.--Faciamque`** — no space after `.--`, and the lemma's opening `«` missing
  (§3.4). Reproduced verbatim.
- **0113C and 0113D both print `VERS. 8.`** — the first on `« Regma et Saba, »`, which is **Gn 10:7**
  (*Filii Regma : Saba et Dadan*), the second on `« Nemrod. »`, which is Gn 10:8. **Migne's own
  ordering and his own address; reproduced, never renumbered** (series brief: a verse number out of
  sequence is his). And **0113D prints `VERS. 10, 12.` before `VERS. 11.`** — the same class, four
  lines later. p. 62.

### 5.4 Unexpressed subjects supplied — named, with what decided each

- **0108D** *tunc ferebatur, ut, **congregatis** in suum locum, terra appareat* — the ablative
  absolute has no noun. Supplied **"the waters"**. Decided by the verse being expounded, not by
  proximity: Gn 1:9 *Congregentur aquae … in locum unum, et appareat arida*, which is also what
  Migne's own bracketed `*[Al., unum]*` is pointing at. The nearer candidate, *spiritus*, cannot be
  gathered into a place and is the subject of *ferebatur* in the same clause.
- **0108D** *nunc adducitur, ut … faciem terrae **revelaret*** — supplied **"it", the spirit**,
  from *adducitur* in the same clause; the alternative (God) would require a change of subject the
  Latin does not mark.
- **0111C** *ne perdat **eam** diluvio* — "it" = *omnem animam vivam*, the nearest and only feminine
  singular accusative in the sentence.
- **0112B** *quia forte nesciebat vino posse inebriari* — "he", Noah, named in the same sentence.
- **0113B** *Ad quas misit Dominus septuaginta duos discipulos* — "to which", the seventy-two
  **generations**, not the three sons: the number is the whole point of the sentence.
- **0114B** *quia ejus generationem, et generationis lineam prosequitur* — "he", **Moses the
  narrator**, not Sem: Sem is *ejus*.
- **0116A** *Sed per recapitulationem ostenditur vivo patre **Dominum** praecepisse* — the subject is
  printed; recorded only because the English word order has to move it.
- **0119A–C** the whole *Allegorice* passage: *superant · Vincunt · obruunt · hortantur · decipiunt
  · mittunt* all have **"they" = the four kings / the contrary powers**, fixed by *Quatuor reges
  quinque superant* two sentences above and by *Tales reges superant primum Bara*. No other plural
  agent is in view.
- **0120C** *Ex quo vult colligere* — "he", **the Apostle**, named as the subject of *refert* in the
  same paragraph; *Melchisedech* is its object.
- ⚠ **One place where both readings construe and nothing was chosen: 0111C** *Illi enim non pereunt
  diluvio **separati ab Ecclesia**, qui … agnoscunt gloriam Christi.* *separati* can be a predicate
  of *illi* ("they do not perish in the flood as men separated from the Church do") or a concession
  ("they, though separated from the Church, do not perish"), and the second reverses this book's own
  doctrine four columns earlier (0107C: *extra Ecclesiam aqua baptismi … non valet ad salutem*).
  **Rendered in Migne's order with the participle left where he puts it** — "For they perish not in
  the flood, separated from the Church, who … acknowledge the glory of Christ" — so the ambiguity
  survives into the English instead of being decided silently. p. 60.

### 5.5 Test 2a fired and checked — negatives on a verb with a quantifier or correlative nearby

Every site in the trigger population, with the host proved from the sentence's structure:

- **0108B** *non solum de hominibus, sed et de pecoribus dictum* — `non solum … sed et`; the host is
  **de hominibus**, not *dictum*. English: "is said **not of men only, but of cattle also**."
- **0106D–0107A** *Non geminatum septenarium … sed tantum septem* and *non quatuor, sed tantum duo* — the
  `sed tantum` correlative fixes the host on the numeral both times.
- **0111B** *sciant se irrationabilibus, sed non rationabilibus dominari* — `sed non` puts the
  negative on **rationabilibus**, not on *dominari*: they DO have dominion, but not over the
  rational. Rendered "they have dominion over the irrational, but not over the rational."
- **0110D** *« Non percutiam **omnem** animam viventem sicut feci »* — a negative on a verb with
  *omnem* beside it, the exact 8990 @0611D shape. **Left scope-ambiguous in English as it is in
  Latin** ("I will not strike every living soul as I have done"), because the Latin does not
  disambiguate and the gloss's next clause (*quae largitate bonitas donat indignis*) does not turn
  on the scope. See §4b for the separate *ultra* divergence.
- **0118B** *Non hoc **solum** promissum est* — host is **hoc solum**. "Not this only was promised."
- **0116C** *non tantum gentis Judaicae, sed omnium gentium* — `non tantum … sed`, host on the
  genitive. ✓
- **0116D** *non **solum** in hoc quod non inquinatur corpus **nec** anima **nisi** mentis consensu,
  sed etiam in hoc* — four negatives in one clause. Hosts: *solum* → "not only"; *inquinatur* +
  *nec* → "neither body nor soul is defiled"; *nisi* → "save by the consent of the mind". All four
  present, each on its own word.
- **0112C–D** *Non praetermittit Deus **inulta** peccata* — a negative verb with a privative
  adjective; both carried ("does not pass over sins **unavenged**"), which is the reading the
  following *sed ita judicium … incipit* requires.
- **0111D** *ne homines formidolosi timerent altero diluvio deleri* — host on *timerent*, and the
  purpose clause is the point of the rainbow. ✓
- **0115B** *ut **non** intelligeretur jubens homini, qui **noluit** intelligere ut obediret jubenti
  Deo* — two negatives, and the second is the reason for the first. Host of the first is
  *intelligeretur* (the punishment IS unintelligibility), proved by the preceding *dominatio
  imperantis in lingua est*; host of the second is *voluit*. Rendered "so that he who commanded
  should not be understood by man, the man who would not understand so as to obey God who
  commanded."

**No site in this range required a negative to be relocated, and none was.**

### 5.6 Sections read clean (Test 4 — does the English ASSERT what he asserts?)

Run last, with all counts already known clean, paragraph against paragraph:

- **0106D–0108C** — the seven-and-seven arithmetic, Origen's geometrical cubit, and the
  *spiritus/flatus vitae* variant. The densest numeral passage in the stint; every figure checked
  against the Latin digit by digit.
- **0108C–0110A** — Augustine on recapitulation, the raven and the dove. The *aut … aut* and
  *an … an* disjunctions were checked for completeness; both limbs survive in each.
- **0110B–0111A** — the lunar computation (§5.1), the *Mystice* on seventeen and twenty-seven, and
  Gregory on the *Moralia*. The arithmetic (*si decem et septem decem addas, fiunt viginti septem*)
  is internally consistent in the English.
- **0111A–0113A** — the rainbow, Cham's sin, and the blessing of Japheth. Procopius's catalogue of
  aggravations at 0112B is the one place where colons carry the argument and they were matched
  band-for-band.
- **0113B–0114B** — the table of nations. Almost pure onomastics; each name checked against Gn 10
  for spelling as Migne prints it.
- **0114C–0117A** — Babel, the *sidera/astra* argument, Thare's years, and Abram in Egypt. The
  hardest single sentence is 0115B's cross-linguistic pun (§1a).
- **0117B–0118C** — Jerome on *gravis vehementer*, the shepherds' quarrel, and the promise of the
  land. Read twice for §5.2's dangling *continentes*.
- **0118C–0120D** — the four kings, the etymological chain, and Melchisedech. Every one of the
  twenty-three etymological glosses was checked against the name it interprets.

**Candidates raised and rejected, so a blind reader knows they were looked at:** everything in
§5.2; plus *abusive* at 0107D (*Cataractae … abusive pro omnibus fenestris ponuntur* — a real
adverb, "by misuse", and the standard grammarians' term; rendered, no crux); *superfluus* at 0119C
(*Duodenarius superfluus est numerus* — the medieval arithmetical term for an abundant number, and
twelve is the first one, so the sentence is technically exact and not a slip); *Helia* at 0117B
(Aelia Capitolina, Migne's spelling, attested); *Phutaei* / *Laabin* / *Nephetuim* at 0114A (Migne's
onomastic spellings, which vary from the Clementine's throughout this chapter and are its own
class); and *ternarius quadratus* at 0107B (= nine, and the abridgment's tail says so).

---

## §6 · PENDING TEI PATCHES — 23 confirmed sites, and the class is NORMALIZATION

Full table with plate readings: **`data/briefs/8950-PENDING-TEI-PATCHES-0012.md`**. The summary
that matters here:

⭐⭐ **Nine of the twenty-three are Corpus Corporum silently CORRECTING Migne** — brief §4's
class, and **not one is detectable from the Latin alone, because every one reads perfectly
well**: `uspue`→`usque` (0108C), `et facimus`→`est facinus` (0112B, two words at once),
`es`→`est` and `num`→`non` (0110B), `debito`→`debita` and `utilitatum`→`utilitatem` (0120D),
`Japhet`→`Japheth` (0113A ×2), and two punctuation marks swapped in opposite directions four
lines apart (0119B `versa est,`→`versa est.` and `Bara.`→`Bara,`).

⭐ **The most consequential is 0112B.** Migne prints *ridiculum ei visum **et facimus** cui
minime debebat*, which does not construe — *facimus* is a first-person verb among third-person
narrative about Cham, and *visum et* leaves the clause with no copula. Our twin prints *visum
est facinus*, which is good Latin and reads so naturally that nothing in the Latin column could
ever have raised it. **I had logged *debebat* at this exact site as an addendum-A candidate
("a real word that reads oddly, rendered as printed"); the plate shows the real defect was two
words to its left.** That is addendum C's rule earning its place — read the whole line, not the
target word.

⛔ **Five `[sic:]` are OWED and none could be fired**, because `verify-english` requires the
marker's content to be a verbatim substring of the Latin twin and in every case the twin carries
the *repaired* form: `[sic: *uspue*]` · `[sic: *et facimus*]` · `[sic: *debito*]` ·
`[sic: *utilitatum*]` — and the fifth is not a `[sic:]` at all but the `es`/`num` pair, which
needs no marker once patched because *est* and *non* are what the English already prints. **This
is precisely the coordinator's prediction and the 0008–0011 stint's result, reproduced
independently: where the plate confirms our twin has tidied Migne's defect away, what is owed is
a patch, not a marker.**

⚑ **Also patched-not-marked: four Hebrew losses** (§2), **six dropped line-head guillemets and
one supplied closer** (§3), **a dropped head period** at 0117B, and **five siglum-punctuation
differences** (0107B `Ibid.`, 0110B `(Ibid )`, 0115C `lib. iii.`, 0112A capital `Χ`, 0113B
`CAPUT ·X.`).

**Foot-of-page apparatus: CHECKED ZERO on all eight pages, both layers** — no numbered notes and
no asterisk layer anywhere in cols 0106D–0120D. Neither foot rule nor note appears; p. 58 carries
only the signature `4` and p. 65 only a closing rule. ⚑ **This is a real result and it is
recorded as coverage, not as a skip.** With stint 3's six pages it takes PL 113's checked-zero
sample to **fourteen pages across this book**, and with Ruth's five and Tobit's four to
**twenty-three pages across four books** — but per CLAUDE.md it licenses nothing about the
columns nobody has opened, and it does not license the claim that this work has no notes.

---

## §7 · PUNCTUATION — compared BAND BY BAND, and the only added marks are four Pattern 8b colons

Test 3 run mechanically over all seven chunks: markers stripped, both twins partitioned by their
verified-1:1 column anchors, and colons, semicolons, question marks, `«`, `»` and `!` counted per
band. **Exactly four bands differ, all in the same direction, all the same class, and zero
elsewhere:**

| col | Migne | English |
|---|---|---|
| 0107A | *Quaeritur utrum tam magna arca centum annis potuit fabricari a quatuor hominibus … ?* | It is asked**:** could so great an ark be built … ? |
| 0108A | *De arca solet quaeri utrum tanta capacitate … ferre potuerit?* | Concerning the ark it is commonly asked**:** with so great a capacity … ? |
| 0109B | *Quaeritur utrum corvus mortuus sit, an aliquo modo vivere potuerit?* | It is asked**:** did the raven die, or could it in some way live? |
| 0109D | *Quaestio est quomodo columba non invenerit ubi resideret … ?* | It is a question**:** how did the dove not find where to settle … ? |

Migne's `?` is kept in all four; English cannot end an indirect construction with it (Pattern 8b),
and the colon carries the *quaeritur* frame. **Question-mark parity is exact in every chunk**
(3 / 2 / 1 / 1 / 1 / 1 / 1).

⚠ **The scan that produced this table also found 23 unlicensed marks in the draft, and the totals
had very nearly cancelled band for band.** All were repaired against the Latin:

- **7 supplied colons removed** (Migne prints a comma): 0110A *quando requies sanctorum erit,* ·
  0110B *Id est, Maio,* · 0111C *ne perdat eam diluvio,* and *per lapidem,* · 0114C *quod humanum
  genus perdit,* · 0116B *Duo promittuntur Abrae,* · 0120C *ministerium nostrum veri ordinis
  signatur,*
- **5 destroyed colons restored**: 0108D *terra appareat:* · 0109B *immunditia cupiditatis
  teterrimos:* · 0112B *facinus detexisset omnibus:* · 0117B *euntibus Neapolim:* · 0120B *usque ad
  Isaac vixisse:*
- **7 supplied semicolons removed**: 0107C *egressi sunt,* · 0107D *requiem significat,* · 0112B
  *Despectui habet parentem,* and *jacuerit pater,* · 0115A *Creatorem conspiciendo,* · 0117A
  *ascendisse legitur,* · 0117C *altare Domino aedificavit,*
- **4 destroyed semicolons restored**: 0107B *quod pertinet ad dies;* · 0114A *Phutaei vocabantur;*
  · 0117B *separata sacerdotibus;* · 0120C *dicta est Hierusalem;*

This is Test 3 earning its place again: the raw totals for the stint were within one of each other
before the repair, and only the per-band comparison found the sites.

⚑ **ONE band now differs from the twin on purpose, and it is a plate reading**: 0120D shows
`semi 1/2`, because Migne closes the Tit 1:12 quotation `« Malae bestiae, pigri ventres **;** »`
with a semicolon inside the guillemets and our twin has a comma (p. 65, 1200 dpi). The English
follows the plate and the divergence is filed as a pending patch. **Nine further English/twin
punctuation divergences of the same kind are listed in §6**; each is a mark Migne prints that our
twin has altered, and each is filed. A blind reader comparing the columns will meet them and
should not read them as supplied marks.

⛔ **No comma→semicolon sweep was made.** Migne prints semicolons freely in this range (31 in the
seven chunks), so Tobit's narrow exception does not apply and was not invoked.

⚑ **Three places where an English question was NOT given a mark, because Migne prints none:**
0114D–0115C *Magna quaestio nobis nascitur … quomodo Sem biennio post diluvium centum esse annorum
dicatur* (rendered as an indirect "how", no mark); 0116D *Quaeritur cur patriarcha voluit mentiri,
etc.* (no mark, no colon); 0112C *Quid est ergo quod filii verenda patris … operuerunt, nisi quia …
occultent:* — an interrogative sentence that Migne closes with a **colon**, reproduced with the
colon and no question mark.
