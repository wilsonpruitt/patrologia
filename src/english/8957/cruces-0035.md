# Cruces — 8957 *Liber Job*, chunks 0035–0037 (cols 0833A–0840D) — the closing stint

Stint-scoped; the orchestrator merges. **All four leaves in this range were read at the plate
while translating** (Gallica `ark:/12148/bpt6k5505319w`, `f = (column + 1) / 2`, **printed corner
numbers read FIRST on every leaf, before any body text**): f417 = 833/834, f418 = 835/836,
f419 = 837/838, f420 = 839/840. All four collated **word by word**, `depth: "full"`.
**Foot-of-page apparatus: checked ZERO on all four leaves, both layers** (no numbered `Forte`
conjectures, no asterisk- or letter-keyed notes). Running heads alternate as expected
(`GLOSSA ORDINARIA. — LIB. JOB.` on the odd leaves, `WALAFRIDI STRABI FULD. MON. OPP. PARS I. —
THEOLOGICA.` on the even). **Six sites were additionally opened at native resolution**, and two of
those on the **second witness** (archive.org `patrologiaecurs04migngoog`). Reads filed in
`data/briefs/8957-PLATE-READS-0035.json`; the one proposed patch in
`data/briefs/8957-PENDING-TEI-PATCHES-0035.md`.

⚠ **Second-witness page map, re-calibrated and it had drifted.** `n424` carries corners **839/840**
and `n423` carries **837/838**, so in this quire the archive copy runs `n = (column + 9) / 2`, **one
leaf off** the `(column + 11) / 2` recorded by the earlier stints. The corner numbers were read
before the text on both. Anyone reaching for that copy in cols 833–840 should re-read the corners
rather than trust the stored offset.

## Span count against the brief

| | |
|---|---|
| brief's stated total for chunks 0035–0037 | **191** (1 flagged OPEN-ENDED) |
| counted in my own Latin, **paragraph-bounded** | **191** (124 guillemet + 67 italic) |
| delta | **0** |

**The agreement is item-for-item, not merely a total.** Because a bare total is worthless on this
book, the spans were extracted in order and diffed against the brief's inventory line by line
(stripping the `VERS. n.-- ` addresses): the sequence matcher returns **no** insert, delete or
replace opcode anywhere in the 191. So this is not the false 52/52-style agreement a peer was
caught by; the two lists are the same list.

Per-chunk: 0035 = 90 (56 guillemet + 34 italic) · 0036 = 80 (58 + 22) · 0037 = 22 (11 + 11).

### The two ragged classes, counted separately

- **Unclosed openings (`«` with no `»`): 1.** 0833B
  `« Qui rodebant in solitudine, etc. Haeretici qui ab universalis, etc., *usque ad* Lambunt vero
  qui blandimento linguae tollunt.` The brief carries this one, flagged `⚠ UNCLOSED «`, so it costs
  nothing in the total. **Collated by hand anyway**, because the harvested span swallowed the gloss
  and was never phrase-searched as a lemma: the lemma proper is `Qui rodebant in solitudine,` and
  it agrees with Clem Job 30:3 exactly. Per the standing rule the lemma boundary was read from the
  sense and Migne's own `etc.`, not from the marks, and the gloss after it is translated.
- **Unopened closings (`»` with no `«`): 0.** None in this range. The raw body totals are 56/55
  (0035), 58/58 (0036), 11/11 (0037), and the single 0035 surplus is the unclosed opening above —
  nothing cancels anything here, and the paragraph-bounded walk confirms it.

### ⭐ A THIRD shape, new to the class register: an INTERIOR `«` the plate has and our TEI has not

**0833B, plate-confirmed at native resolution (f417, crops `150,1230,830,120` and
`150,1255,560,45`).** Migne prints

    « Qui rodebant in solitudine, « etc. Hæretici qui ab universalis, etc., …

with a **second, mid-line opening guillemet** before `etc.` — where his usual setting for this
shape is a *closing* `»`. It was confirmed to be an *opening* mark by comparing its direction
directly against the closing `»` on the `Quocum virtus manuum erat. »` line of the same column
(crop `150,795,700,60`): the two marks point opposite ways, and the Qui-rodebant pair point the
same way as each other. It is **not** at the head of a line, so it is not the continuation mark
read at 0751B/0754B — it is a compositor setting an opening for a closing, and it is the first
*interior* instance recorded for this book.

**Our TEI carries only the first mark.** Per the standing rule, **no `[sic:]`, no `[cj:]`, and no
TEI patch was filed**, and the interior mark was not read as opening a second span. The English
therefore reproduces our twin's single `«`, and the divergence lives here. This is site 12 of the
book's guillemet class and the eighth leaf on which it has been read at the plate.

## ⚠ Lemma-translation convention — the brief was corrected mid-stint

My brief originally instructed that every `« … »` span be **byte-identical** to the Latin twin's,
and chunks 0035 and 0036 were first written that way. The coordinator corrected it: the guillemets
stay 1:1 with the twin, but **the words between them are translated**, as in 0024 and in 8950
Genesis. **Both chunks were revised in place** — the marks did not move, only the words inside
them — and 0037 was written correctly from the start. Recorded here because the shipped English for
this work is genuinely split (0005, 0016 leave lemmata in Latin; 0024, 0031 translate them) and the
merge will have to settle it. **This stint translates them.**

## Load-bearing vocabulary fixed for this stint

Following the peer stints wherever they had already ruled, and saying so.

| Latin | English | note |
|---|---|---|
| `*usque ad*` | ***as far as*** | peer convention (0005, 0010, 0015, 0020), unchanged. **65 of my 67 italic spans are this formula.** The other two are `*sentium,*` (0833D) and `*Vide Greg. loc. cit. usque ad fin. cap.*` (0840D). |
| `elatio` | **elation** | peer convention. It is the governing vice of CAPUT XXXII: *vitio elationis*, *elationis pravitate*, *quid de elatione timerent*, *elatione vanescit* — four occurrences in three columns, never varied to "pride". |
| `tumor` / `tumentes` | **swelling** | 0838A, where the gloss's *cum tumentes desuper imminent* is the whole evidence that the lemma's `tu mentes` is a split word. |
| `reprobi` / `electi` | **the reprobate** / **the elect** | peer convention; both stand in one sentence at 0835C and 0836D. |
| `praedicatio` | **preaching** | peer convention (0835C). |
| `agricola` | **husbandman** | 0839D–0840A. Follows the 0020 stint, which fixed *colonus* → husbandman for the tenure argument at 0809A; the same English word keeps the two passages legible together, and the gloss here is about the *rector Ecclesiae* and those from whom he takes *fructus corporeae servitutis*. |
| `flagellum` | **scourge** | peer convention. |
| `squalidus` / `squalere` / `squalidus`-family | **squalid** | 0833B–0833C, where the gloss defines the word three times over (*Calamitate et miseria squalidi perhibentur*, *Nullus squaleret*) and the lemma is *Squalentes*. One English root, or the definition explains nothing. |
| `calamitas` / `miseria` | **calamity** / **misery** | kept apart at 0833B: the gloss's whole point is that they are two things (*Calamitas est quasi aegritudo: miseria est illius negligentia*). |
| `glarea` | **gravel** | 0833D, defined in place (*munitissimos lapides … quos aqua fluvialis trahit*). |
| `sentes` | **brambles** | 0833D–0834A. The italic mention `Nomine *sentium,*` is translated to `*brambles,*` **because the lemma `« Et esse sub sentibus, »` is now translated too**; leaving one Latin and Englishing the other would break the link the gloss depends on. This is a mention, not an etymology — there is no *homo*/*humus* case here. |
| `simplicitas` | **simplicity** | 0837A, where the gloss turns on *a vera simplicitate distem*. |
| `praesumptio` | **presumption** | 0838C–D, set against *humilitas* and *desperatio*. |
| 2nd person | **thou** singular, **you** plural (Pattern 17) | Job addresses God in the singular (`Clamo ad te`, `Mutatus es mihi`, `Elevasti me`, `Scio quia morti trades me`, `in duritia manus tuae`) → **thou/thy**; the Gloss addresses Job in the singular at 0839C (`sed cur, beate Job, scribi librum desideras?`) → **thou**. In CAPUT XXXII Eliu addresses the three friends in the plural (`sermones vestros`, `prudentiam vestram`, `Ne forte dicatis`, `non secundum sermones vestros`) → **you/your**. The switch is visible in the English exactly where the Latin makes it. |

## Markers fired — 1 `[sic: …]`, 1 `[var: …]`, 1 `[nt: …]`; 0 `[cj:]`, 0 `[d:]`, 0 `[ed:]`

Both of the first two stand on columns collated at the plate this session; the `[sic:]` is confirmed
on **both** witnesses.

### 1. `[sic: *tu mentes*]` — 0838A, VERS. 23 (Pattern 10 split run, Pattern 12 marker)

Migne prints `VERS. 23.-- « Semper enim quasi tu mentes. »` The Clementine has Job 31:23
*Semper enim quasi **tumentes** super me fluctus timui Deum* — so `tu mentes` is *tumentes*, split.

**Why the break hypothesis was tested first and fails.** The prompt is right that a candidate at a
break is a break until proved otherwise, and three withdrawals in this book were exactly that.
Here it is not a break: at native resolution (f419, crop `1000,595,880,90`) the words stand
**mid-line**, with ordinary inter-word spacing, and the line runs on past them to the closing `»`
and a comma. There is no hyphen and no line end. This is the `Vastitas e s` shape at 0770D, where a
peer rightly fired, not the `« Per`/`« eat` or `in-`/`ferat` shape.

**And it is not ours.** Our TEI carries `quasi tu mentes` identically, and the **second witness**
(archive.org `n423`, cols 837/838) sets the same mid-line space with the same word spacing as its
neighbours. Two independent scans, so the 1-bit copy is not a sole witness for anything.

**And Migne's own gloss holds the whole word.** The very next line reads *Fluctus, cum **tumentes**
desuper imminent* — the participle, unbroken, in the page's own voice, one line below the lemma
that lost it.

**Why a marker rather than a rendering.** Pattern 12's test is "does it render IN PLACE?" `tu
mentes` is "thou minds" — a nominative pronoun and a plural noun with no grammatical slot inside
`quasi …` — so no English can carry it, and any English that reads smoothly here has silently
repaired the break. The whole broken run is wrapped, per Pattern 10. **No `[var:]` beside it:** the
received reading is not a textual variant here but the word Migne's own compositor divided, and
saying it twice would blur whose observation it is.

### 2. `[var: Vulg. Job 31:27 has no negative here, and reads that the heart did rejoice in secret]` — 0838C

Migne prints `« Et non est laetatum in abscondito cor meum. »` The Clementine has Job 31:27
*et laetatum est in abscondito cor meum* — **no negative at all.**

**Plate-verified at native resolution** (f419, crop `1000,1660,880,80`): the `non` is plainly there,
clean type. **Carried as printed**, per 7a and the two peer precedents (0773C, 0760C); the English
reads "And my heart hath not rejoiced in secret."

**Why this one clears the bar the peers set, when the others below do not.** The gloss built on it
asserts the opposite of the negative it is glossing — *Sunt enim qui suis praeconiis extolluntur
apud se, et gaudent*, "there are those who are exalted in their own praises before themselves, and
**rejoice**" — and then **Migne himself re-quotes the clause affirmatively eight words later**, as
`VERS. 27.-- « Et laetatum est, etc. »`. This is the 0809B `decorabat`/*deprecabar* shape exactly:
the page's own next paragraph is the witness against the page's own lemma. Under a faithful
rendering with no marker, the Gloss appears to expound a negation it never had.

### 3. `[nt: …]` — 0840D, the note that ends the work (Pattern 15)

**The book stops at CAPUT XXXIII, and that is Migne's editorial decision, not a truncation.** Under
the head he prints, in italics inside parentheses, a statement that the exposition of chapters 33
and following, expressed word for word out of Gregory, is omitted *compendii causa*, with the
reference `Vide Greg., Moralium in Job, lib. XXIII, cap. 7 et seq., Opp. tom. II.` Confirmed at
native resolution (f420, crops `1000,2590,890,180` and `1000,2700,890,110`).

The content is a **statement**, not a locator, so Pattern 15 governs: our Latin twin keeps `[n: …]`
and the English carries a translated **`[nt: …]` at the same position**, marker parity preserved.
**No `[ed: …]` was supplied and nothing was reported as missing** — there is no hole here; there is
an editor telling the reader what he chose not to reprint. The reference tail inside is kept
verbatim Latin, on the `[n:]`/Pattern-4 locator principle, so that what is Migne's pointer stays
Migne's pointer.

⛔ **One TEI-side divergence inside it, filed as a patch, not as a marker.** The plate reads
`Moralium in Job**,** lib. XXIII`; our TEI prints a period. It is a Corpus Corporum artifact — the
class the peers found at 0758A — so the English renders the plate's comma per the plate-where-read
rule and `8957-PENDING-TEI-PATCHES-0035.md` carries the patch that makes the Latin converge.

## The 7a″ walk — Vulgate divergences in the lemmata, the stint's deliverable

Collated against `sources/vulgate/clementine-flat.txt`, cited by book chapter:verse. Every lemma in
the range was read word by word against the printed Latin before the English was trusted. **Every
entry is plate-confirmed**; the brief's marks ordered the work and decided none of it. Marked
divergences are §1–2 above. The rest are real and are recorded **without a marker**, because in
each the gloss built on them stays consistent — the ~thirty-entry class the peers have been
building.

### Real divergences, recorded, no marker

1. **0833A** `« Nunc autem me juniores. »` ‖ Clem Job 30:1 `Nunc autem **derident** me juniores
   tempore`. Migne drops the verb from the **middle** of the clause, not at a word boundary — so
   this is not the ordinary abridgment shape. It costs nothing, because the gloss immediately
   supplies it in its own voice: *Juniores tempore Ecclesiam **irrident***. Recorded because a
   reader meeting a verbless lemma should know where the verb went.
2. **0833A** `« Quorum patres non dignabar, »` ‖ Clem Job 30:1 `quorum **non dignabar patres**
   ponere`. Word order only; sense identical.
3. **0833A** `« Quocum virtus manuum erat. »` ‖ Clem Job 30:2 `**quorum** virtus manuum **mihi**
   erat pro nihilo`. Two divergences in five words: *Quocum* ("with whom") for *quorum*, and *mihi*
   dropped. The gloss is abridged at once (*Virtus manuum est magnitudo, etc.*) and turns on
   neither. Rendered "With whom was the strength of hands."
4. **0833B** `« Squalentes calamitate. »` ‖ Clem Job 30:3 `**squallentes** calamitate et miseria`.
   ⚠ **The divergence is on the comparand's side of the collation**: the standard orthography of
   *squalere* is single-l, and Migne's *Squalentes* is the normal form. This is a Tweedale-copy
   spelling, not a Migne defect, and no marker could honestly stand on it. Noted per the brief's
   own instruction to add new comparand observations to its list.
5. **0833C** `« In desertis habitant torrentium. »` ‖ Clem Job 30:6 `In desertis **habitabant**
   torrentium`. Present for imperfect. The gloss is abridged and the tense is not at issue;
   rendered "They dwell."
6. **0833D** `« Qui inter hujuscemodi laeta. »` ‖ Clem Job 30:7 `qui inter hujuscemodi
   **laetabantur**`. A finite verb reduced to what looks like a neuter plural adjective. The gloss
   moves straight to *Nomine sentium*, i.e. to the **next** clause, so nothing in the printed matter
   rests on it; rendered literally, "Who among such things glad."
7. **0834A** `« Et factus sum eis proverbium. »` ‖ Clem Job 30:9 `et factus sum eis **in**
   proverbium`. The preposition dropped; sense identical.
8. **0834B** `« Et frenum posuit in os me. »` ‖ Clem Job 30:11 `et frenum posuit in os **meum**`.
   **Plate-confirmed at native resolution** (f417, crop `1000,1055,870,55`): clean type, no worn or
   broken sort, Migne prints `me`. A real word in the wrong case — the `munde`/`mundo` class that
   Pattern 12 explicitly exempts from `[sic:]` — and English has no exponent for a Latin case
   error, so it is rendered by the possessive ("into my mouth") and recorded here. The gloss is
   about the silence of holy doctors and turns on nothing in the pronoun.
9. **0834C** `« Et oppresserunt quasi fluctibus semitis. »` ‖ Clem Job 30:12 `et oppresserunt quasi
   fluctibus semitis **suis**`. **Not a divergence at all** — an abridgment at a word boundary, and
   `semitis` is the Clementine's own ablative. Listed because the brief's ✓ could be read as
   clearance of a reading it never tested, and because "paths" as an ablative instrument is what
   the gloss then expounds (*Adversariorum semita fluctibus comparatur*).
10. **0836A** `« Exspectabam bona… »` · **0840B** `« Exspectavi enim sermones vestros… »` ·
    **0840C** `« exspectavi, etc., »` ‖ Clem `Expectabam` / `Expectavi`. Pattern 9 spelling,
    checked and declined in this book already. Three of the brief's ⚠ marks are this and nothing
    else. Likewise `Nunquid` (0836D, 0837C) for Clem `Numquid`.
11. **0836A** `« interiora ejus efferbuerunt. »` ‖ Clem Job 30:27 `Interiora **mea** efferbuerunt`.
    **Not scripture as printed**: it is the Gloss re-quoting the lemma in the third person, in its
    own voice, to apply it to the Church (*et hoc est, « interiora ejus efferbuerunt. »*). The
    brief's ⚠ is an artifact of harvesting the Gloss's own paraphrase as though it were a lemma.
12. **0836D** `« Quam enim partem haberet Deus in me desuper. »` ‖ Clem Job 31:2 `Quam enim partem
    haberet **in me Deus** desuper`. **Plate-confirmed at native resolution** (f418, crop
    `1000,2410,880,75`). Word order only; the gloss (*Habere me possessionem suam excelsorum
    conditor renuit*) reads the same either way.
13. **0837A** `« Si ambis. »` ‖ Clem Job 31:5 `Si **ambulavi** in vanitate`. **Plate-confirmed at
    native resolution** (f419, crop `150,365,880,60`): clean type, `ambis`. Two divergences at
    once — a different verb, and the **second person** where Job's protestation is first. It is
    sound Latin ("if thou goest about"), so Pattern 12 declines it: rendered as ordinary English,
    in the person Migne prints, per Pattern 17. **Nothing rests on it in the printed matter** — the
    lemma is a bare pointer that the gloss reaches with *Ideo dicit* and then leaves. This is the
    stint's closest call and the reason it stays unmarked is that the gloss says nothing about it
    either way.
14. **0837D** `« Si despexi praetereuntem. »` ‖ Clem Job 31:19 `si despexi **pereuntem**` — "him
    that was perishing," not "him that was passing by." A substantive lexical divergence, and
    ⭐ **Migne's text is internally consistent about it**: the gloss's own words are *Ignoto autem
    proximo misertum se indicat, **quem praetereuntem vocat***, "he shows that he had pity on a
    neighbour unknown to him, **whom he calls one passing by**." The Gloss is expounding Migne's
    reading, not the Clementine's, and it builds a real argument on it (that a stranger merely
    passing is helped because *natura plus valet quam notitia*). Under the peers' bar this is
    precisely the shape that is **recorded and not marked**: the divergence is real, and the gloss
    built on it is consistent. Rendered "him that passed by."
15. **0838A** `« Si levavi super pusillum. »` ‖ Clem Job 31:21 `si levavi super **pupillum** manum
    meam` — "the little one" for "the orphan." **Confirmed on both witnesses** (Gallica f419 and
    archive `n423`, where the lemma sits in the same crop that settled `tu mentes`). One letter,
    and the gloss is abridged immediately (*Ac si patenter dicat, etc.*) so nothing turns on it.
16. **0836C** `« Versa est in luctum cithara. »` ‖ Clem Job 30:31 `Versa est in luctum cithara mea`.
    Abridged at a word boundary; the possessive is what is cut. The English says "The harp",
    not "My harp", because *mea* is not on the page.
17. **0836B** `« Sine furore consurgens. »` ‖ Clem Job 30:28 `Moerens incedebam sine furore **;**
    consurgens, in turba clamabam`. Migne's second lemma **re-divides the verse across the
    Clementine's own semicolon**, binding *consurgens* to *sine furore* where the received text
    binds it forward. The gloss then expounds exactly Migne's division (*contra tumultus
    insolentium clamorem habent, et furorem non habent*), so it is internally consistent and
    unmarked — but it is a division divergence, not a mere abridgment, and worth the merge's notice.
18. **0840A** `« Gloria ejus quasi flos feni. »` ‖ **1 Pt 1:24** `et omnis gloria ejus **tamquam**
    flos **foeni**`. The brief's ⚠ resolved: the source is 1 Peter (not Is 40:6, which has *flos
    **agri***). *quasi* for *tamquam*, and the *feni*/*foeni* orthographic pair, which is Pattern 9.
19. **0840A** `« Miserunt autem tres. »` ‖ Clem Job 32:1 `**Omiserunt** autem tres viri isti
    respondere Job`. **Plate-confirmed at native resolution** (f420, crop `1000,760,880,60`): the
    `M` is unambiguous and there is clear space between the guillemet and it, so there is no dropped
    or broken initial — Migne prints *Miserunt*, "they sent," where the received text has "they left
    off." A real word in a slot it can occupy, so Pattern 12 declines it; the gloss is abridged
    after four words (*Tandem beati Job plenas, etc.*) and does not decide. Rendered "But the three
    sent." ⭐ The gloss's opening *Tandem*, "at length," is faint evidence for the received sense,
    but it is inside an abridgment and cannot carry a marker.
20. **0840B** `« Iratus est autem adversus Job. »` ‖ Clem Job 32:2 `iratus est autem **adversum**
    Job`. Preposition form only.
21. **0840C** `« Sed, ut video, non est qui arguere possit Job. »` ‖ Clem Job 32:12 `non est qui
    **possit arguere** Job`. Word order only. The negation is present in both and is carried.
22. **0837C** — not a lemma divergence but worth the record: the lemma prints `« Et omnia eradicans
    **genimina**. »`, which agrees with Clem Job 31:12 exactly, while the gloss's own first word is
    **`Germina`** (*Germina animae sunt operationes bonae*). Migne is glossing his lemma with a
    near-homonym. Both stand on the plate; both are rendered as they stand ("offshoots" in the
    lemma, "germs" in the gloss) and nothing was harmonized.

### Checked and found to AGREE, against a brief mark that might have suggested otherwise

`« Qui rodebant in solitudine, »` (Job 30:3, the unclosed span, collated by hand) · `« Et fame
steriles. »` (30:3) · `« Redactus sum in nihilum. »`, `« Abstulisti quasi ventus desiderium meum. »`,
`« Velut nubes pertransiit. »` (30:15) · `« Comparatus sum luto. »` (30:19) · `« Mutatus es mihi in
crudelem. »`, `« Et in duritia manus tuae. »` (30:21) · `« Quae est iniquitas. »` + `« Maxima. »`
(31:28 — the Clementine's own *quae est iniquitas maxima*, split by Migne into two lemmata; a
provisional *Quae*/*haec* divergence was **withdrawn** on checking the file) · `« Et non magis
tacui. »` (31:34) · `« Si fructus ejus comedi. »`, `« Animam agricolarum ejus afflixi. »` (31:39) ·
`« Pro frumento. »` (31:40) · `« Et laetatum est, etc. »` (31:27 — the brief's ⚠ is the trailing
`etc.` defeating the phrase search, nothing more).

## Other cruces

- **Pattern 8, Migne's punctuation carried as printed.** Three sentences in this range end with
  **no terminal stop** and are left that way: 0837B *…a stabilitate rectitudinis opere evellit*,
  0838D *…ipse ad bonum crevit*, 0839D *…et rudes contra eum clamant, et perfecti deflent*. All
  three confirmed on the plate. 0836C prints `Ac si diceret Pacis meae tempore` with **no
  punctuation after *diceret*** — also confirmed, also carried; no colon was supplied. The verifier
  was run and passes, and no `?` was added anywhere.
- **0838C, an anacoluthon carried.** `Quia auctoris sui gratiam negare convincitur quisquis sibi
  tribuens quod operatur.` has a participle where a finite verb is wanted and no main clause for
  *quisquis*. Plate-confirmed; rendered literally ("whosoever ascribes to himself what he works is
  convicted of denying the grace of his own author") without supplying the missing verb.
- **0838D, an ellipsis carried.** `tanto gravius desperatione` has no verb; *est* must be
  understood from the previous clause. Rendered as printed, with no verb supplied.
- **0833D and 0837B, `usque ad usque ad`.** Both read `etc., *usque ad* usque ad …` — the italic
  abridgment formula followed by a resumption that itself **begins** with the words *usque ad*
  (*usque ad mala descendit*, *usque ad perditionem devorat*, the latter agreeing with Clem Job
  31:12 *usque ad perditionem devorans*). **Confirmed on the plate at both sites.** Not a
  dittography, and Pattern 11 does not fire: the second run is the resumed text, not a repetition of
  the formula.
- **0840D, `*Vide Greg. loc. cit. usque ad fin. cap.*`** — an inline italic cross-reference in
  Migne's own editorial voice, closing VERS. 15. **Kept verbatim Latin**, on the `[n:]`/Pattern-4
  locator principle: it is a pointer and a range, carrying no argument, and expanding it into
  English would invent an edition's words where Migne set an abbreviation. It is **not** tagged
  `[f: …]` — Pattern 4 does not apply to this work (known false positive 4). It is also the one
  place where the stint's own `*usque ad*` = "as far as" convention was deliberately **not**
  applied, because the span is a citation, not the abridgment formula. Flagged for the merge in
  case a later stint of another Migne book wants a shared rule.
- **0833D column mark.** The plate's `D` guide stands beside *sunt* mid-paragraph while our TEI
  places `[0833D]` after the lemma. Positional quarter-guide, known false positive 1; not reported,
  not moved.

## Candidates considered and REJECTED, with the reason

1. **`[sic:]` or a patch on the interior `«` at 0833B** — rejected. The standing rule for this book
   forbids a marker or a patch on a missing, unmatched or interior guillemet, and only a plate read
   may say otherwise; the plate read here says it is Migne's setting. Recorded above instead.
2. **`[sic: *me*]` at 0834B (`in os me`)** — rejected. Pattern 12 names the `munde`/`mundo` class —
   a real word in the wrong case — as exempt, because it occupies its slot and can be rendered.
   Recorded as divergence 8.
3. **`[sic:]` at 0840A (`Miserunt` for `Omiserunt`)** — rejected on the same ground, plus a native
   crop showing there is no clipped or broken initial to blame. Recorded as divergence 19.
4. **`[var:]` at 0837D (`praetereuntem`/`pereuntem`)** — rejected, and this is the most substantive
   rejection of the stint. The divergence is real and lexical, but the gloss expounds **Migne's**
   word by name; under the bar the peers set, a divergence the page's own argument stays consistent
   with is recorded, not marked.
5. **`[var:]` at 0837A (`ambis`/`ambulavi`)** — rejected. Sense-changing, but the gloss neither
   expounds it nor contradicts it; firing here would put a note on every abridged pointer in the
   book.
6. **`[ed:]` about the work ending at CAPUT XXXIII** — rejected, and it would have been a false
   report. Nothing is lost: Migne says on the page that he omitted it and why. See §3 above.
7. **A `[sic:]` on `squalentes`** (0833B) — rejected; the anomalous spelling is the **comparand's**,
   not Migne's. Added to the brief's comparand-defect list instead.
8. **Pattern 9 items** — `Exspectabam`, `Exspectavi`, `Nunquid`, `exstinguere`, `coelo`, `foenum`/
   `feni`: each checked in place and declined, per the book's standing list.
9. **A `?` supplied anywhere** — none. Two peers were caught doing this; the verifier was run
   before reporting and passes on all 38 chunks.
