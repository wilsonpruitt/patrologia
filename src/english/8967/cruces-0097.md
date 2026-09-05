# Cruces — 8967 *Glossa ordinaria*, **Liber Psalmorum**, chunks 0097–0101
### Band C, stint 5 · cols 1061D–1071C · Psalms CXXXIX–CXLIV · 4,163 Latin words

---

## §0 · SPAN COUNT RECONCILIATION — 234 against 234, exact

| chunk | `*` in the Latin body | spans |
|---|---|---|
| 0097 | 150 | 75 |
| 0098 | 64 | 32 |
| 0099 | 62 | 31 |
| 0100 | 94 | 47 |
| 0101 | 98 | 49 |
| **total** | **468** | **234** |

`data/briefs/8967-lemmata-0097.txt` declares **234** and carries **234** `[10xx]`-prefixed entries.
**They agree exactly.** Ends checked as well: the brief's first entry is
`[1061D] VERS. 1.-- *In finem Psalmus David.*` and my Latin's first span is
`*In finem Psalmus David.*`; its last is `[1071C] VERS. 21.-- *Laudationem.*` and my last span is
`*Laudationem.*` **The split is sound at both ends.**

English spans, with the English-only markers stripped from the ratio count, are **75 / 32 / 31 /
47 / 49** — 1:1 with the Latin in every chunk. Anchors **12 / 6 / 5 / 7 / 10**, verbatim and in
order (each mid-sentence anchor placed at the word-break Migne prints it at, including the two
inside italic spans, `*I have [1066D] meditated.*` and
`*For thy name's sake, [1067B] O Lord…*`). Notes **37 / 16 / 16 / 22 / 37**, byte-identical to the
Latin by `diff`. Question marks **1 / 1 / 1 / 1 / 1** in both twins. Heads **2 / 1 / 1 / 1 / 1**.
`verify-english` reports no error on my five chunks (only the MISSING lines for 0102–0105, another
stint's); `plate-gate` passes with all eight markers licensed. **Zero em-dashes** in the five files.

---

## §1 · ⭐⭐ THE PLATE — SIX LEAVES, ELEVEN COLUMNS, NONE OF THEM EVER OPENED, AND EVERY MARGIN CLEAN

`raw/scans/pl113/patrologiaecurs04migngoog.pdf`, **PDF pp. 536–541 = cols 1061–1072**, map
`(col+11)/2` re-verified against the printed corner numbers on **every** page (1061/1062,
1063/1064, 1065/1066, 1067/1068, 1069/1070, 1071/1072). 300 dpi full page, then 900–1200 dpi crops
on every disputed glyph. All six recorded in `data/plate-reads.json` as `depth: full`.

⛔ **NOT ONE COLUMN IN 1061–1071 IS CLIPPED.** I looked at the inner margin of every leaf before
reading a word of text: every line begins with a whole word in both columns of all six pages. That
matters twice over. **(a)** No marker in my range had to be withheld for a second copy — nothing is
added to the Gallica list. **(b)** It is eleven more counter-examples to the mod-4 rule, three of
them (**1061, 1065, 1069**) ≡ 1 (mod 4) and all three clean; stint 0087 found 1041 clipped and
**1041 is also ≡ 1 (mod 4)**, which is exactly why the congruence is worthless. **Open every column.**

**Result: 24 departures over 11 collated columns, ~2.2 per column** — above Band A's 1.5, Band B's
1.4 and stint 0077's 1.9. Full report appended to `data/briefs/8967-PENDING-TEI-PATCHES.md`.

### The control named for every hard call
- **`omnibns` @1071B** — `operibus`, two words later **on the same line**, sets a `u` whose arch is
  at the bottom; the disputed sort's arch is cleanly at the top. **A turned sort, and per the launch
  brief that is NOT in the imaging-hazard class.** An `n` cannot become a bottom-arched `u` by
  failing to ink.
- **`lingua` @1062A** (our TEI has the non-word `linqua`) — the descender closes into a lower loop.
  A `q` in this face carries a straight descender; the `q` of `quae` on the line above supplies it.
- **`Dixit Domino` @1061D** — ⭐ **the control is Migne himself**: he sets `Dixi Domino` correctly at
  1062B and again at 1062B in the full lemma, twelve lines down the facing column.
- **`Fortius … qui non vult` @1065B** — the control is the argument, not a glyph: **Migne's own next
  clause is `Periit fuga concluso vel forti`**, a dative pair naming *Circumclusus* and *Fortis*.
- **`bis actus` @1068B** — `acumine` opens the very next line and shows what `acu-` looks like.
- **`eum ipsi sint` @1068D** — the disputed sort carries a closed crossbar; `macri` one line above
  supplies an open `c`, and `veritate` on the same line supplies `e`.
- **`veriteti` @1067D** — the same line prints `vanitati` twice over with unmistakable `a`.
- **`simlis` @1067D** — `Vanitati` on the same line sets two dotted `i` where `simlis` sets none.
- **`Frov.` @1071A** — the glyph has a **mid-arm**, which a `P` does not possess at all; and Migne
  sets `(Prov. XXVII)` correctly at 1070A. Not a broken `P`.
- **`VERS. 9.` for 6 @1062A** — the digit has a closed bowl **above** a descending tail; the `6` of
  the running head `1061` on the same leaf has its bowl **below** an ascending stroke. ⭐ **And the
  sequence itself is the second control: a real `VERS. 9.` stands three glosses further down the
  same column**, so Migne prints the number twice.

---

## §2 · ⛔⛔ THIRTEEN MIGNE DEFECTS I CANNOT FIRE — and that is the headline, not the marker table

`VERS. 9.` (for 6) · `Dixit` · `apponit` · `Fortius` · `simlis` · `veriteti` · `actus` · `laboro` ·
`eum` · `corectio` · `fines` · `etc,,` · `omnibns` — **thirteen sites where Migne's type is
defective and our twin has already been repaired**, so a `[sic:]` or `[cj:]` on any of them is
rejected by the content check, and firing one anyway would accuse Migne at a word the facing column
shows him setting correctly.

**My fired marker count is 7 `[var:]` + 1 `[sic:]`, 0 `[cj:]`, 0 `[d:]`, 0 `[ed:]` — and it will be
7 `[var:]` · 5 `[sic:]` · 6 `[cj:]` after the patch pass.** ⛔ **Do not quote the first pair as a
fact about this Psalter.** It is §F2's lesson recurring for the third time in Band C.

⚑ **Seven of the thirteen carry an English edit that must land in the same commit**, because the
English currently renders the TWIN at those sites (see §3). Each is itemised in the patch file with
the exact edit, rather than left for the merge to notice — §F8's defect number 4, verbatim.

---

## §3 · THE RULE I APPLIED WHERE PLATE AND TWIN DISAGREE — and it is stint 0077's, not a new one

§A6 says the English renders the plate where the leaf has been read. Stint 0077 found that this
deadlocks where the plate's reading **needs a marker the content check will not yet accept**, and
split the class in two. **I applied the same split, so the band is consistent:**

- **Plate reading renders cleanly → the English renders the PLATE.** Five sites:
  `spiritus` @1067A ("their **spirits**"), `Quia persecutus` @1066B ("*Because he has
  persecuted.*"), `Benedicit` @1069C ("**He blesses** now *every day*"), `quia visione` @1069C
  ("**because** nothing is more delightful than that vision"), and the address **`VERS. 9.` @1062A**,
  which the English prints as Migne numbers it.
- **Plate reading needs an unfireable marker → the English renders the TWIN, and the marker is
  filed as owed.** Seven sites: `Dixit`, `apponit`, `Fortius`, `actus`, `laboro`, `eum`, `fines`.

⚑ **`Benedicit`/`Bene dicit` is the one where the choice changes what the page says**, and it is
worth naming: CC's split gives "he **rightly says** *per singulos dies*" (a remark about Augustine's
diction); the plate's one word gives "**he blesses** now day by day" (a remark about the psalmist's
act). The plate governs, and the patch is filed.

⚑ **`VERS. 9.` is deliberate and it will look wrong.** My English prints Migne's misnumber while the
Latin twin still prints CC's `VERS. 6.`, so the two columns disagree visibly until the patch runs.
That is the ruled class (Migne's wrong numbers are restored **and** marked); it is flagged here, in
the patch file and in the handoff.

---

## §4 · MARKERS FIRED — 7 `[var:]` and 1 `[sic:]`, every one on a column I collated today

| col | chunk | marker | why it clears the bar |
|---|---|---|---|
| 1062B | 0097 | `[var: Vulg. Isa. 5:18 *Vae qui trahitis iniquitatem in funiculis vanitatis, et quasi vinculum plaustri peccatum*…]` | ⭐⭐ Migne prints *Vae his qui trahunt **peccata** sicut vestem longam* — an Old-Latin form sharing scarcely a word with the Clementine. **Load-bearing:** the gloss's next words are *quia addunt **peccata** peccatis*, and the Clementine's *iniquitatem* would take the argument's keyword out of its own proof-text. |
| 1062C | 0097 | `[var: Vulg. Ps. 139:9 *Ne tradas*, a prohibitive subjunctive]` | Migne prints ***Non** tradas me, Domine, a desiderio* at the VERS. 9 lemma. A negation particle swapped for another in a lemma; not a letter-level corruption of one word, so the settled single-word exclusion does not reach it. |
| 1063D | 0097 | **`[sic: *quae dam*]`** | see §4a |
| 1064C | 0098 | `[var: Vulg. Prov. 21:20 *Thesaurus desiderabilis, et oleum in habitaculo justi*…]` | ⭐⭐ Migne prints *Thesaurus desiderabilis **requiescit in ore sapientis*** — the LXX form. **Load-bearing:** the gloss is built entirely on the mouth and the eating (*sapiens, quae audierit, cogitat; retractando ruminat; vir autem stultus **glutit** illum*), and the Clementine's *oleum in habitaculo justi* has no mouth in it at all. |
| 1065C | 0098 | `[var: Vulg. Mt 10:23 *Cum autem persequentur vos in civitate ista, fugite in aliam*…]` | Migne prints *Si vos persecuti fuerint **in una** civitate*. Not an abridgment: a different protasis and a different demonstrative, in the sentence that licenses bodily flight from city to city. |
| 1067B | 0100 | `[var: Vulg. Ps. 143:1 *Psalmus David. Adversus Goliath*]` | The titulus. Migne prints *Psalmus David **ad Goliam***. Three stints in Bands A and B fired `[var:]` on divergent tituli, consistently; this is the same class. ⚑ **Confirmed at the plate**, so it is Migne's and not CC's. |
| 1070A | 0101 | `[var: Vulg. Prov. 27:2 *Laudet te alienus, et non os tuum ; extraneus, et non labia tua*…]` | ⭐⭐ **The most load-bearing of the seven.** Migne prints *Non te laudet os tuum, **ne arrogans videaris***, and the gloss's reply is *Sed non est **arrogantia**, quia Deum in te, non te laudas.* **The purpose clause exists nowhere in the Vulgate, and the keyword of the answer exists only inside it.** 7a″'s exact profile. |
| 1070C | 0101 | `[var: Vulg. Mt 25:41 *Discedite a me maledicti in ignem aeternum*…]` | Migne prints ***Ite,** maledicti* — a different verb and no *a me*. |

**Every marker was checked against the word it stands on** (§F8's misplaced-`[sic:]` lesson): the
seven `[var:]` sit at the end of the lemma or quotation they annotate, and the `[sic:]` wraps the
broken run and nothing else.

### 4a. The one `[sic:]`, and why it is fireable when thirteen of its siblings are not
At **1063D** both the plate and our twin read **`Sunt quae dam contemptibilia`**. The gap between
`quae` and `dam` measures the same as the gaps `Sunt`–`quae` and `dam`–`contem-` on that justified
line, and a compositor does not open a space inside a word to justify. **Split type, Pattern 10, and
the twin carries it** — which is the whole difference between this site and the thirteen in §2. The
whole broken run is carried untranslated in italics, spacing included:
"There are [sic: *quae dam*] contemptible things from which nevertheless the earth receives its
fatness." ⚑ **The quarantine takes nothing with it** (7a⁗): *quaedam* governs no verb, negation or
preposition, so the English beside it says everything the Latin says.

---

## §5 · THE DIVERGENCE LIST — EVERY SCRIPTURE SPAN IN THE RANGE, INCLUDING THE CLEAN ONES

Collated against `sources/vulgate/clementine-flat.txt`. **A list of findings alone cannot be told
from a report by an agent that never looked**, so the clean ones are here too.

### 5a. Divergent, marker FIRED (7) — listed in §4.

### 5b. Divergent, marker DECLINED, with the reason
- **Ps 139:8** @1062C `*Virtus salutis meae obumbrasti super caput meum.*` — Clementine
  `**Domine, Domine,** virtus salutis meae, obumbrasti super caput meum **in die belli**`. Abridged
  at both ends. **Declined**; every printed word is the verse's own.
- **Ps 139:14** @1063A `*Habitabunt cum vultu tuo.*` — Clementine `habitabunt **recti** cum vultu
  tuo`. **Declined**: a stump, and the gloss (*Quia Deum, sicut est, videbunt*) does not argue from
  *recti*. **Rendered as the stump**, "They shall dwell with thy countenance."
- **2 Cor 2:16** @1062D `*Aliis **sumus** odor **vitae in vitam**, aliis odor mortis in mortem*` —
  Clementine `aliis quidem odor **mortis in mortem** : aliis autem odor **vitae in vitam**`.
  ⚑ Migne **reverses the two members**, drops *quidem/autem* and supplies *sumus* from v. 15.
  **Declined**: a recast, not a variant reading (stint 0077's Is 53:2 precedent); both members are
  present and the gloss adduces it for the double effect, not for the order.
- **1 Rg 15:23** @1063B `*Quasi peccatum **hariolandi** est repugnare, et quasi scelus idololatriae
  **est** nolle acquiescere*` — Clementine `quasi peccatum **ariolandi** est, repugnare : et quasi
  scelus idololatriae, **nole** acquiescere`. **Declined**: an attested orthography (Pattern 9) plus
  a supplied copula in the second member. ⚑ Note the Clementine's own `nole` is the defective form
  here, not Migne's `nolle`.
- **Mt 6:6** @1065A `*…et clauso ostio ora Patrem tuum qui videt in abscondito,* etc.` — Clementine
  `…ora Patrem tuum **in abscondito : et Pater tuus,** qui videt in abscondito, **reddet tibi**`.
  **Declined**: an abridgment closed with `etc.`; every word is in the verse.
- **Jn 10:12** @1065C `*Videt lupum venientem et fugit*` — Clementine adds `**et dimittit oves**`.
  Abridgment. **Declined.**
- **Lk 15:19** @1066C `*non sum dignus vocari filius tuus*` — Clementine `**jam** non sum dignus`.
  Abridgment. **Declined.**
- **Jer 2:29** @1066C `*Quid vultis mecum **in** judicio contendere?*` — Clementine `mecum judicio
  contendere`. A supplied preposition. **Declined.**
- **Zach 1:3** @1067A `*Convertimini ad me, et **ego** convertar ad vos*` — Clementine drops the
  *ego* and interposes `ait Dominus exercituum`. An abridgment plus an emphatic pronoun.
  **Declined**; the gloss argues from the turning, not the pronoun.
- **Ps 103:29** @1067A `*Auferes **spiritus** eorum, et deficient*` — Clementine `spiritum`.
  ⭐ **Migne's plural is confirmed at the plate and CC had moved him onto the Clementine.**
  **Declined for the marker** (number alone, and the gloss's argument is the failing, not the
  number) but **filed as a Class-1 patch**, and the English renders the plate.
- **Ps 143:4** @1067D `*Vanitati similis factus est: dies ejus sicut umbra.*` — Clementine
  `**Homo** vanitati similis factus est ; dies ejus sicut umbra **praetereunt**`. A stump at the
  head, abridged at the tail. **Declined**; see the crux at §8.2 for the supplied "he".
- **Ps 143:13** @1068D `*Oves eorum **fetosae**.*` — Clementine `foetosae`. Orthographic.
  **Declined.**
- **Ps 144:18** @1071C `*Prope est omnibus invocantibus eum.*` — Clementine `Prope est **Dominus**
  omnibus invocantibus eum`. **Declined**: a stump, rendered as one ("He is near to all that call
  upon him") with no name supplied.
- **Ps 83:5** @1069C `*In saecula saeculorum laudabunt*`, cited `(Psal. XXXVIII)` — the words are
  Ps 83:5's own, minus its `te`; **the locus is wrong** (Ps 83, not 38). **No `[var:]`**: Pattern 14
  marks divergent scripture *text*, and a wrong locus is Migne's and stands (stint 0087's
  `(Matth. XVIII)` ruling, and the 0971A precedent for repairing one).
- **Prov 24:16** @1071A `quia septies **cadit** justus et **resurgit**; impii autem **infirmantur in
  malis**` — Clementine `Septies enim **cadet** justus, et **resurget** : impii autem **corruent in
  malum**`. A real divergence, **declined**: Migne does **not** set it as a quotation (no italic
  anywhere in the run) and absorbs it into his own `quia` clause, so it is paraphrase in the gloss's
  voice. Logged rather than marked.
- **Jas 4:6 / 1 Pt 5:5** @1071A `quia superbis resistit` — Clementine `**Deus** superbis resistit,
  humilibus **autem** dat gratiam`. **Declined**, and this is the same phrase stint 0087 declined at
  1050B for the same reason: unitalicised, subjectless, in gloss voice.
- **Ps 142:11** @1067B `*Propter nomen tuum, Domine, vivificabis me in aequitate tua.*` — the
  Clementine's colon falls after `vivificabis me` and the verse continues `educes de tribulatione
  animam meam`. Punctuation and abridgment, no word divergence. **Declined.**
- **Ps 141:4** @1065A `*defecit spiritus meus,*` re-quoted in the gloss — Ps 141:4 reads
  `in deficiendo ex me spiritum meum`; the words Migne quotes are **Ps 142:7's** verbatim, and he is
  glossing Ps 141. **Declined**: a cross-quotation, not a variant, and the gloss turns on the
  failing spirit, not on the case.
- **Ps 142:1** @1066B `*O Domine,* etc.` — Migne prefixes a vocative `O` the Clementine has nowhere
  (`Domine, exaudi orationem meam`). **Declined**; logged because it is an addition and not an
  abridgment.

### 5c. Collated and found to AGREE with the Clementine — the checked negatives
`In finem. Psalmus David` (Ps 139:1) · `Eripe me, Domine, ab homine [malo]` and `A viro iniquo`
(139:2) · `Qui cogitaverunt` (139:3) · `Acuerunt` · `Sicut serpentis` · `Venenum aspidum sub labiis
eorum` (139:4, **verbatim**) · `Custodi me, Domine` (139:5) · `Superbi` · `Et funes extenderunt in
laqueum` (139:6, **verbatim**) · `Dixi Domino` · `Dixi Domino: Deus meus` · `Exaudi, Domine, vocem
deprecationis meae` (139:7, **verbatim**) · `Caput circuitus` and `Labor labiorum ipsorum operiet
eos` (139:10, **verbatim**) · `Cadent super eos` (139:11) · `Vir linguosus`, `Injustum`, `in
interitu` (139:12) · `confitebuntur`, `Et habitabunt`, `Verumtamen` (139:14) · `Dirigatur oratio`,
`Oratio`, `incensum`, `Elevatio manuum mearum` (140:2) · `Pone, Domine, custodiam`, `Ostium`
(140:3) · `Non declines`, `Ad excusandas excusationes`, `Non communicabo`, `Cum electis` (140:4) ·
`Corripiet me`, `Oleum autem peccatoris` (140:5) · `Judices`, `Audient` (140:6) · `Crassitudo
terrae`, `Secus infernum` (140:7) · `Quia ad te, Domine` (140:8) · `Custodi me a laqueo`, `quem
statuerunt mihi`, `A scandalis operantium iniquitatem` (140:9, **verbatim**) · `Cadent in
retiaculo`, `Singulariter sum ego donec transeam`, `Transeam` (140:10, **verbatim**) · `Intellectus
David` (141:1) · `Voce mea ad Dominum clamavi`, `Deprecatus sum` (141:2) · `In conspectu ejus`
(141:3) · `Et tu cognovisti`, `Semitas`, `In via` (141:4) · `Considerabam ad dexteram`, `et non erat
qui cognosceret`, `Periit fuga`, `Et non est qui requirat [animam]` (141:5) · `Clamavi ad te,
Domine`, `Spes mea`, `Portio` (141:6) · `A persequentibus me` (141:7) · `Educ de custodia` (141:8) ·
`Hodie mecum eris in paradiso` (Lk 23:43, **verbatim**) · `Psalmus David` (142:1) · `In veritate
tua`, `in tua justitia` (142:1) · `Et non intres in judicium`, `Cum servo tuo` (142:2) · `Quia
persecutus` (142:3) · `Memor fui`, `Meditatus sum`, `In factis manuum`, `Memor fui dierum` (142:5) ·
`Velociter`, `Defecit spiritus`, `In lacum` (142:7) · `Mane`, `Notam fac mihi viam`, `Animam`
(142:8) · `Spiritus tuus bonus` (142:10) · `Benedictus`, `Qui docet manus meas` (143:1) ·
`Misericordia mea` (143:2) · `Domine, quid est homo quia`, `Quia reputas eum?` (143:3) · `Domine,
inclina` (143:5) · `Emitte manum`, `de alto`, `Emitte manum tuam de alto`, `Eripe me`, `Et libera`
(143:7) · `Deus, canticum novum cantabo tibi`, `Canticum` (143:9, **verbatim**) · `Gladio`,
`Maligno` (143:10) · `Et erue me de manu filiorum alienorum` (143:11, **verbatim**) · `Quorum
filii`, `Filiae`, `Compositae` (143:12) · `Promptuaria`, `Ex hoc in illud`, `In egressibus` (143:13)
· `Boves`, `Maceriae`, `Neque transitus, neque clamor` (143:14, **verbatim**) · `Beatum` (143:15) ·
`Lingua eorum gladius acutus` (Ps 56:5, **verbatim**) · `Non veni pacem mittere, sed gladium`
(Mt 10:34, **verbatim**) · `Laudatio ipsi David`, `Exaltabo te`, `In saeculum saeculi` (144:1,
**verbatim**) · `Per singulos dies` (144:2) · `Nimis` (144:3) · `Generatio et generatio`, `Opera
tua`, `Et potentiam tuam` (144:4) · `Et virtutem` (144:6) · `Memoriam abundantiae suavitatis tuae
eructabunt`, `Eructabunt` (144:7, **verbatim**) · `Miserator et misericors`, `miserator`, `Patiens`
(144:8) · `Miserationes`, `Misericors`, `Et miserationes ejus` (144:9) · `Confiteantur tibi, Domine,
omnia opera tua`, `Et sancti tui` (144:10, **verbatim**) · `Gloriam regni` (144:11) · `Ut notam`
(144:12) · `Regnum tuum`, `Fidelis Dominus in omnibus`, `Fidelis` (144:13) · `Qui corruunt`, `Et
erigit omnes elisos` (144:14, **verbatim**) · `Oculi omnium in te sperant, Domine`, `Et tu das escam
illorum in tempore opportuno` (144:15, **verbatim**) · `Aperis tu manum` (144:16) · `Justus`,
`Viae`, `Viis suis, et sanctus in omnibus operibus suis` (144:17, **verbatim** apart from the
plate's `omnibns`) · `Voluntatem timentium se faciet` (144:19, **verbatim**) · `Laudationem`
(144:21).

### 5d. The verse numbering was checked, not assumed
Every `VERS. n.--` in my range was resolved against the Clementine's versification for the psalm
named in the head. **All agree except one, and that one is Migne's own defect**: at **1062A** he
runs 3, 4, 5, **9**, 7, 8, 9, 10, 11, 12, 14 — the first `9` is the Ps 139:6 lemma `*Superbi*`
(`absconderunt superbi laqueum mihi`), and a second, genuine `VERS. 9.` follows three glosses later.
**Restored as printed and marked** (§2, §3). The gaps elsewhere (139 skips 13; 140 skips 1; 141
skips 9–10; 142 skips 4, 5, 9, 11, 12; 143 skips 2, 6, 8, 11; 144 skips 5, 20) are **non-glossing,
not misnumbering** — the same pattern the 0847A read found in Psalm II.

---

## §6 · `usque ad` — THE `etc.` SPLICE TEST, COUNTED, AND THE REVERSAL CHECKED FOR

**29 occurrences of `usque ad` in my Latin. 29 formula, 0 non-formula.** Every one follows an `etc.`
and names where the abridged father resumes; every one is rendered **"as far as."** By chunk:
13 / 1 / 2 / 9 / 4.

- ⚑ **One is separated from its `etc.` by an intervening column anchor** — `etc., [1069B] *usque
  ad*` @0101 — and a naive regex scores it non-formula. **The test is about the TOKEN before, not
  the character before**, exactly as stint 0077 found; I applied it across the anchor.
- ⭐ **Zero `ad usque`, and I checked the PLATE for it, not our TEI.** Stint 0077's finding is that
  the reversal is invisible to any count taken from our file by construction. On all six leaves I
  read the italic pair as printed at each of the 29 sites: **Migne sets `usque ad` at every one.**
  The reversal exists (1015A) but does not occur in cols 1061–1071.
- **No look-alike in the range.** The only other `usque` in my Latin is inside `quibusque`
  (@1063C), which is not in the class; there is no temporal or spatial `usque ad`, and no scripture
  quotation containing the two words.

---

## §7 · THE RULED AXES — what my range actually did with each

| axis | my range |
|---|---|
| `gentes` family | ⛔ **ZERO occurrences.** The instrument was checked, not trusted: a `gent` grep returns exactly one hit in my five chunks, **`diligentes`** — the documented false positive. No `gentes`, `gentium`, `gentilis`, `gentilitas`, `ethnicus`, and no singular `gens`, so §A5's named exception is not engaged either. |
| `natio` | **Zero.** The grep's only hits are `dominationis` ×2 — the second documented false positive. |
| `mysterium` / `sacramentum` | **mystery 0 · sacrament 1.** ⚑ The one site is a strain and I am naming it rather than hiding it: @1069B `juxta illud **sacramentum** quod praecepit Dominus Moysi in tabernaculo septem lucernas ponere`. The sense is the older "sacred sign / mystery", not a sacrament of the Church. **The axis is binding and I obeyed it** — "according to that sacrament wherein the Lord commanded Moses…" — but if Wilson wants a named exception for `sacramentum` of an Old-Testament type, this is the site that asks for it. **Flagged, not decided.** |
| `daemonium` / `diabolus` | **demon 1** (`daemones` @1067B, "the demons") · **devil 6** (`diabolus` ×4, `diaboli`, `diabolum`) · Satan 0 (`satanas` does not occur). **No bleed in either direction.** |
| `turba` / `multitudo` | **Neither word occurs.** Reporting the absence rather than a zero that could be read as drift: these are psalms of complaint and praise, and the Gospel crowds are simply absent, as in Bands A and B and in every Band C stint so far. |
| `usque ad` | 29 formula / 0 not — §6. |
| **`Diapsalma`** | ⭐ **Two occurrences, both @1062B and @1062D, both ROMAN and unitalicised in our TEI, and I confirmed both at the plate**: Migne sets the word upright in both places. **Two more plate confirmations for §A2**, which now stands on five reads in Band A, twelve in Band B and these two. Rendered **Diapsalma**, roman, never "Selah", never italic. |
| **`In finem`** | **One body occurrence**, the Ps CXXXIX titulus @1061D, rendered **"Unto the end."** Zero rivals. |
| **`Canticum graduum` / `gradus`** | ⛔ **NOT ENGAGED — zero occurrences of either.** The three `canticum` in my range are Ps 143:9's `canticum novum` (×2) and its stump `*Canticum.*`, rendered "a new canticle" and "*A canticle.*" **The gradual psalms end at Ps CXXXIII, before my range opens.** Recorded so a sweep does not read the absence as an omission. |
| `Psalmus David` / `Psalmus ipsi David` | ⭐ **Both forms occur, and both are confirmed at the plate.** `*In finem Psalmus David.*` @1061D and `*Psalmus David.*` @1066A → "A psalm of David"; `*Psalmus David ad Goliam.*` @1067B → "A psalm of David against Goliath" (with a `[var:]`); and **`*Laudatio ipsi David.*` @1069A → "Praise, for David himself."** They stay different English. |
| `Dominus virtutum` | Does not occur. |
| `sedes` | Does not occur (`sedes`, `sedem`, `sede` all zero), so §A5's "seat" ruling is not engaged. |
| heads | `PSALMUS CXXXIX.`–`PSALMUS CXLIV.` → `PSALM CXXXIX.`–`PSALM CXLIV.` **All six numerals left Roman**, per §A3. |
| **archaism** | ⛔ **ZERO `-eth`, zero `saith`, zero `doth` in all five chunks.** I checked both memberships and then simply did not need the form: `thou/thy/thee` carries Pattern 17's number marking, and `-est` on a second-person singular verb (`thou givest`, `thou deferrest`) is grammar, not register. **No guillemets occur anywhere in my range**, so the second membership test had nothing to catch. |
| em-dashes | **Zero across all five chunks.** |
| `(ID.)` / `(Ibid.)` | Never expanded. 128 notes pass through verbatim, `(ID.)` and `(CAS.)`/`(CASS.)` included, **and the two malformed ones are passed through as the twin has them**: `(CAS).` @1067A and `(ID).` @1071C are printed in the English as body text exactly as our Latin carries them. ⭐ **The plate prints both correctly** — the misplaced point is CC's — so both are patch sites with an English edit owed. |
| **Pattern 17** | Checked site by site. The one place it decides a rendering is the Jer 2:29 quotation @1066C: `vultis` and `dereliquistis` are **plural** ("Why will **you** contend… **you** have all forsaken me") while `servo **tuo**` in the same italic run is **singular** ("with **thy** servant"). Both are in one span, and the number shift is Migne's. |

---

## §8 · CRUCES — rendered literally, with the difficulty named

1. ⭐⭐ **`AUG.)` @1065B, with no opening parenthesis.** Both the plate and our twin print it, and CC
   could not parse it, so it is not an `[n:]` in the Latin at all — it stands as body text. **I have
   rendered it as printed**, `AUG.)`, and fired **no marker**. The reasoning, so it can be audited:
   Pattern 8 carries printed punctuation as printed and never marks it, and Pattern 9 keeps a
   structural label out of the marker system precisely because the facing Latin preserves the
   defect. ⚑ **A reader will think we lost a bracket.** If Wilson prefers a `[sic: *AUG.)*]` — the
   content check would accept it, since the twin carries the run — it is one edit. **Flagged, not
   decided.**
2. **`*Vanitati similis factus est*` @1067D — the one supplied subject in my range, and its
   authority is on the same line.** Migne prints the Ps 143:4 lemma without the Vulgate's `Homo`,
   so English has to supply something. **The authority is the gloss's own next sentence**, *Quando
   **homo** conditus est, veriteti similis factus est*. Rendered "He is become like to vanity" — and
   nothing else in the range supplies a subject the Latin does not print.
3. ⭐ **`Vel, *combinabor.*` @1063C — where a negative must NOT be pulled inside an italic span.**
   The lemma is `*Non communicabo.*`; Migne offers the alternative reading as the bare verb, without
   repeating the negative. Rendering the span "I shall **not** be coupled" would put a negation
   inside an italic span that does not print one. **Rendered "*I shall be coupled.*"**, and Migne
   himself supplies the negative two clauses later in roman type (`Non combinabor ad similitudinem
   carnis`), which the English carries at the place he prints it. This is §F8's apposition rule read
   in the other direction.
4. **`non ut homines Domini, qui emunt saccello, tu sanguine` @1062C.** Rendered literally, "not as
   the men of the Lord, who buy with a purse, thou with blood." The splice cuts Augustine off before
   the construction closes; `Domini` is genitive or nominative plural and cannot be a vocative
   (`Domine`). **No word supplied, and the difficulty is here rather than smoothed.**
5. **`Custodi me, quia per multa fallit, quae nequit praecavere` @1062B.** ⚑ **The subject of
   `nequit` is not the subject of `fallit`.** The deceiver deceives; the one who cannot forestall is
   the one praying. Rendered "because he deceives through many things which he cannot guard against
   beforehand," with the shift of subject named here — this is precisely §F8's "a case or a subject
   silently reassigned", and it parses either way.
6. **`Sicut Absalom David, sic Judas Christum, falsi fratres corpus ejus` @1066A.** No verb is
   printed anywhere in the sentence. Rendered "As Absalom did to David, so Judas to Christ, false
   brethren to his body" — **"did" is the only word supplied, and it is supplied from the psalm's own
   titulus** (*quando persequebatur eum Absalom*), which Migne prints two lines above as the head
   lemma. Naming a stronger verb ("persecuted") would decide what he leaves open.
7. **`Novem sunt opera` @1069D, followed by EIGHT.** Migne lists *potentia, magnificentia, sanctitas,
   mirabilia, virtus, terribilium magnitudo, memoria, justitia* — eight items under the word "nine".
   **Both the twin and the plate agree**, so it is his. Rendered as printed, nothing supplied, no
   marker: a miscount in the author's own prose is not broken type.
8. **`Quae de solis saxis in hortis sed vel vineis` @1068D.** ⛔ **Does not construe as printed** —
   `sed vel` has no slot and no verb governs `Quae`. Twin and plate agree word for word. Rendered as
   closely as the words allow, "Which are of stones alone in gardens but or in vineyards," and the
   difficulty recorded rather than repaired. **No conjecture offered: here it would be invention.**
9. **`id est vita ejus notoria, id est transitoria` @1067D.** `notoria` glossed by `transitoria` is
   strained (one expects *nocturna* or *notata*), but twin and plate agree. Rendered "his notorious
   life, that is, his transitory life", literally, with the strain named.
10. **`Quod dicit *clamavi, exponit, deprecatus sum.*` @1064D.** ⚑ **Migne's italic runs across his
    own gloss verb.** The span is one span and contains `exponit`, which is not scripture. Rendered
    as one span, "*I have cried, he expounds, I have made supplication.*" — deliberately awkward,
    because splitting it would break span parity and silently correct his compositor.
11. **`Qui hic per singulos dies, in aeterno die merebitur laudare` @1069B.** The first clause has no
    verb at all. Rendered "He who here every day **does so**, shall deserve in the eternal day to
    praise" — "does so" is the minimum English needs, and it is flagged rather than dressed up.
12. **`inde nos ejus` @1070A.** Elliptical: "thence we [are mindful] of him". Rendered "and thence
    we of him", the ellipsis left open.
13. **`Si opera laudas, et te qui es Dei opus` @1070A.** The second limb has no verb; rendered "If
    thou praisest the works, thou praisest thyself also, who art the work of God" — the verb carried
    over by zeugma from the printed first limb, nothing new introduced.
14. **`Dicent ergo virtutem disciplinantis et punientis, si praedicant regnum aeternum, non tacent
    ignem aeternum` @1070A.** Two coordinate clauses that English wants to subordinate. **Rendered
    with Migne's commas and both clauses left coordinate**, per Pattern 8, rather than smoothed into
    "if they preach… and do not keep silent" — which would have supplied a conjunction he does not
    print.
15. ⭐ **`eructabunt` → "shall belch forth", and it is a deliberate register call.** The Douay's
    "shall publish" is the received English of Ps 144:7, and it would break the gloss, whose whole
    argument is alimentary: *Manducat qui discit, **eructat** qui docet… Sic ergo manduca ut
    eructes.* **7a″ requires the exposition to rest on the word on the page**, so all five
    occurrences read "belch forth". Recorded because it is the least comfortable rendering in the
    stint and a later sweep should not "fix" it.
16. **`*Ut notam.*` @1070D rendered "*That known.*"** Migne prints two words of Ps 144:12 (`ut notam
    faciant filiis hominum`) and stops. Completing it to "That they may make known" would supply the
    verb the Vulgate has and Migne does not — the §F8 class. **Rendered as the stump, awkwardly and
    on purpose**, the way stint 0087 rendered `*Domine, non est.*` at 1050A.

### 8a. Every stump checked against §F8's fourteen, by name
`*Eripe me, Domine, ab homine.*` stays **"from the man"** (not "the **evil** man" — and Migne's own
gloss quotes `*Ab homine malo*` three lines later, so completing the head would pre-empt it) ·
`*Non tradas me, Domine, a desiderio.*` stays **"from desire"** (not "from **my** desire") ·
`*Dirigatur oratio.*` stays **"Let prayer be directed"** (not "**my** prayer") · `*Caput
circuitus.*` stays **"The head of the compassing"** (not "of **them**") · `*Cadent in retiaculo.*`
stays **"in the net"** (not "in **his** net") · `*Considerabam ad dexteram.*` stays **"to the right
hand"** (not "**my** right hand") · `*et non erat qui cognosceret.*` stays **"none that knew"** (not
"knew **me**") · `*Et non est qui requirat animam.*` stays **"the soul"** (not "**my** soul") ·
`*Defecit spiritus.*` stays **"The spirit hath failed"** (not "**my** spirit" — where the SAME
words with `meus` printed do get "my spirit" at 1065A) · `*In factis manuum.*` stays **"of the
hands"** (not "of **thy** hands") · `*velociter exaudi;*` stays **"hear speedily"** (not "hear
**me**") · `*Emitte manum.*` stays **"Send forth the hand"** while the full lemma `*Emitte manum
tuam de alto*` twelve words later keeps its "thy" — **the gloss expounds the two differently and the
English keeps them apart** · `*Promptuaria.*` stays **"Storehouses"** (not "**their**") ·
`*In egressibus.*` stays **"In the goings out"** (not "**their**") · `*Aperis tu manum.*` stays
**"Thou openest the hand"** (not "**thy** hand") · `*Prope est omnibus invocantibus eum.*` stays
without **"the Lord"** · `*Ostium.*` stays **"A door"** (not "the door **of circumstance**").
**Nowhere did I supply a possessive or a completion the Latin does not print.**

---

## §9 · CANDIDATES RAISED AND **REJECTED** — the instrument, not the leftovers

1. ⛔ **`[cj:]` or a patch on `retiaculo`/`retiuculo` @1064C — the most important rejection in the
   stint.** The Ps 140:10 lemma looked to me like `retiuculo`, a non-word, at 300 and again at 900
   dpi; the vowel between `reti` and `culo` reads open-topped where an italic `a` should close.
   **REFUSED.** The scan does not resolve italic `a` from `u` at this size with a control I trust,
   and the form our twin carries is the correct Latin. **A patch needs positive evidence, and an
   ambiguous glyph whose printed form is correct Latin is refused** — the `locutus`/`locutos` rule
   exactly. Recorded so the next reader does not present it as a new finding.
2. ⛔ **`[sic:]` on the thirteen of §2** — the readings are Migne's and confirmed, but the marker
   content must be verbatim in the twin and is not. **Filed as owed, not fired.**
3. ⛔ **`[sic:]` on `VERS 8.` @1066A and `VERS. 19,` @1071B** — **declined.** Pattern 9 normalizes a
   section label in English *precisely because* the facing Latin preserves the misprint. This is
   §F8's "right about the fact, wrong about the rule" case; the observation goes in the patch
   report, the English prints `VERS. 8.--` and `VERS. 19.--`. ⚑ **Distinguished from the `VERS. 9.`
   case at 1062A, which is NOT this class**: a misspelt label has no English exponent, but a wrong
   *number* is an address a reader can follow to the wrong verse, and Wilson has ruled that class.
4. ⛔ **`[sic:]` on the sigla `(AUG,)` @1067A, `(CAS).` @1067A, `(ID).` @1071C** — declined, all
   three, and for two different reasons. `(AUG,)` is Migne's comma and takes no marker (Pattern 9).
   `(CAS).` and `(ID).` are **CC's**, not Migne's — the plate prints both correctly — so a marker
   there would be a false public accusation, the `Aventus` @1046C failure in a new costume.
5. ⛔ **`[d:]` on `Domine, Domine` — not present.** Checked because Ps 139:8 and 142:1 both double
   the vocative in the Clementine; **Migne prints it once in each place**, so there is nothing to
   mark and nothing to restore.
6. ⛔ **`[d:]` on `in saeculum et in saeculum saeculi` @1069C and `Generatio et generatio` @1069A.**
   Both are the psalm's own figure, expounded as such by the gloss (*ut repetendo confirmet*
   reasoning at the parallel site). **Declined**: `[d:]` marks a compositor's doubling, not a
   Hebraism the text argues from — the `Concupierunt concupiscentiam` precedent.
7. ⛔ **`[var:]` on the eighteen abridged, reordered or re-cast quotations of §5b** — declined
   individually, each with its reason. **Abridgment is this recension's method, not a variant
   reading.**
8. ⛔ **`[var:]` on `spiritus`/`spiritum` @1067A** — declined although it is a genuine, plate-
   confirmed divergence from the Clementine: number alone, with no argumentative weight in the
   gloss. **The patch is filed and the English renders the plate**; the marker is not owed.
9. ⛔ **`[sic:]` on the seven bracket-shaped stray sorts** (1062C ×2, 1067D, 1068A, 1070A, 1070C,
   1071B) — declined as furniture of this gathering, and **explicitly matched to stint 0087's
   `[psalmorum` / `[ostendit` class at 1039–1041**: a repeating sort, not a reading. ⚑ They are
   reported as copy condition, not suppressed.
10. ⛔ **Word fusions at 1062A (`Eripeme`, `impugnantenim`), 1068A (`venerit,ei`)** — declined. Each
    stands on a tightly justified line whose neighbouring word spaces are equally narrow. ⭐ **The
    contrast with `quae dam` @1063D is the whole point**: there the internal gap *equals* the
    neighbouring word spaces, here it is visibly smaller than them. **The rule cuts both ways and I
    ran it in both directions on the same leaf-run.**
11. ⛔ **`Ex per|sona` @1066A** — a line break with no hyphen. Declined: a hyphenation failure at a
    turn is not a word-division defect, and CC correctly joins it. The `Ideo-|que` precedent.
12. ⛔ **Column-band arithmetic** — not reported. Migne's A–D marks sit in the central gutter and
    serve both columns at the same height; **nothing in my range breaks mid-word across an anchor.**
13. ⛔ **The `(Psal. XXXVIII)` @1069C and `(Prov. XII)` @1064C wrong loci** — no `[var:]` (§5b), and
    no patch either: they are Migne's own citations and stand. Only the **`Frov.`** at 1071A is a
    patch, because that is broken type rather than a wrong reference.
14. ⛔ **`[nt:]` on any note** (Pattern 15) — none owed. **All 128 notes in my range are attribution
    sigla or scripture locators**; not one is editorial prose. Checked, not assumed.

---

## §10 · SECTIONS READ CLEAN, AND WHAT I CHECKED IN THEM

⚑ **A logged column is not a checked column**, so this names the check, not the looking.

- **1063A–1063C (Ps CXL, vv. 2–4).** Collated word by word against the plate: two departures
  (`apponit`, `(CASS.)`), the remaining run agreeing at every word. Checked specifically: the
  double negation `ut **nec** cogitatio iniqua sapiat, **nec** prava voluntas … erumpat` — **both
  carried, and scoped twice in English** ("that neither may… nor may…"), because English apposition
  does not inherit a negative; and the `combinabor`/`combinari` chain for a supplied negative
  (§8.3).
- **1064D–1065A (Ps CXLI, the opening).** Checked the Prov 21:20 quotation word by word against the
  Clementine before writing the `[var:]`, and the Mt 6:6 quotation against it before declining one.
  Also checked that `David … significat Christum. Spelunca vero carnem` keeps its three appositions
  distinct in English (flesh / world / sepulchre) and that none of the three is collapsed.
- **1066C–1067A (Ps CXLII, vv. 2–7).** Negation sweep run in full: `non justificabitur` (not
  printed — the lemma stops at `Cum servo tuo`), `**ne** cum rogante disceptet, **ne** eum qui se
  damnat judicet`, `quod **non** iste humilis`, `**non** petivit justitiam judicii`, `**non** sum
  dignus`, `**non** ex meritis`, `**non** audit Deum dicentem`, `licet Deus omnia gratis faciat`
  (concessive, not negative — checked and not treated as one). **Eight negatives, eight carried, and
  each checked against the word it governs rather than against the sentence.**
- **1069D–1070A (Ps CXLIV, the nine works).** Checked every one of the five conditional clauses in
  the `Si in magnitudine deficimus … Si opera laudas` chain for a reassigned subject: the subject
  stays "we"/"thou" as printed at each turn, and `laudatur magis in illo qui fecit` keeps the
  passive with the beauty as its subject rather than being turned into "he praises".
- **1070C (the Mt 25:41 gloss).** Checked the three negatives of `si … non in te remaneant **nisi**
  opera ejus, **non** te dimittet miseratio ejus: si autem tu **non** dimittas opera tua` for scope,
  because the sentence turns entirely on which of the two lets the other go. **The subject of
  `dimittet` is his mercy, and of `dimittas` is thou** — the English keeps them apart.
- **1071A–1071C (my last column).** Checked `aequum est enim **et** diligentes custodire **et**
  peccatores perdere` as a correlative pair (both limbs kept), and the `Viae … opera` distinction
  through `haec secundum nos dividuntur. Sed apud illum, hoc est velle, quod facere` — the antecedent
  of `haec` is the *distinction*, not the works, and the English says so.

---

## §11 · HANDOFF

1. ⛔ **The patch queue owes THIRTEEN markers from this stint, not one**, and **seven of them carry
   an English edit that must land in the same commit**. Both are itemised site by site in
   `data/briefs/8967-PENDING-TEI-PATCHES.md` under `BAND C — stint 0097–0101`. **Do not read this
   stint's `7 [var:] / 1 [sic:] / 0 [cj:]` as a clean range.**
2. ⚑ **`VERS. 9.` @1062A is the one to land first.** My English prints Migne's misnumber and the
   Latin twin still prints CC's `VERS. 6.`, so the two columns disagree visibly until the patch
   runs. It is deliberate, it is the ruled class, and it is flagged in three places.
3. ⭐ **Cols 1061–1071 are ALL CLEAN at the inner margin** — eleven more counter-examples to the
   mod-4 rule, three of them ≡ 1 (mod 4). **No Gallica site is added by this stint**; the work-wide
   open list stands where stint 0087 left it, at seven.
4. **Two open questions that are not mine to settle**, both flagged rather than decided:
   - **`AUG.)` @1065B** (§8.1) — render as printed with no marker, as I have, or fire
     `[sic: *AUG.)*]`? The content check would accept it.
   - **The lowercase chapter numerals** — Migne sets `(I Reg. xv)`, `(Joan. x)`, `(Psal. ciii)` and
     the rest with the chapter in **lowercase roman**, and **CC has uppercased every one in this
     work.** That is an editorial decision about the whole edition, not thirty separate patches, and
     I have filed it as one flag rather than thirty rows.
   - **`sacramentum` @1069B** of an Old-Testament type (§7) — the axis binds and I obeyed it, but
     this is the site that would ask for a named exception.
5. ⚑ **`quia visione` @1069C and `Benedicit` @1069C will look like defects to the next reader** and
   should not be "fixed" twice: both are Migne's, both confirmed at 900 dpi, and the English already
   renders them.
6. ⭐ **One inconsistency in the already-merged bands, found while settling my own rendering and
   worth one line to the merge:** `in saeculum saeculi` is rendered **"For ever and for ever and
   ever"** at 0039 and **"Unto the age of the age"** at 0092. I have followed the traditional form
   ("For ever and ever" / "For ever, and for ever and ever"). **Two renderings of one phrase across
   Bands A and B — the merge should pick one.**
7. **Nothing was committed, deployed or re-chunked.** `data/plate-reads.json` gained six entries;
   `data/briefs/8967-PENDING-TEI-PATCHES.md` gained one section.
