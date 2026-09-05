# Cruces — 8967 *Glossa ordinaria*, **Liber Psalmorum**, chunks 0082–0086
### cols 1025C–1039B · Psalms CVI–CXVI · BAND C

---

## §0 · SPAN COUNT RECONCILIATION — **389 = 389, exact**

| chunk | italic spans in my Latin |
|---|---|
| 0082 | 71 |
| 0083 | 96 |
| 0084 | 75 |
| 0085 | 83 |
| 0086 | 64 |
| **total** | **389** |

`data/briefs/8967-lemmata-0082.txt` declares **389** and carries **389** addressed lines. Counted
with a newline-tolerant `\*[^*]+\*` sweep over the body (frontmatter excluded), so a span broken
across a line — and the one broken across a column anchor, `*usque [1033A] ad*` — is counted once.
**No mis-split.** Band B went eight for eight; this is nine.

⚑ One deliberate span-structure divergence in the ENGLISH, and it is not a count error: at **1026D**
the plate carries a roman `subdens,` between two italic runs that CC merged into one, so my English
has one span more than the twin at that site. It is filed as patch #14. `verify-english` does not
compare span counts, so this note is the only record of it.

---

## §1 · MARKERS FIRED — two, both on col 1036D, both plate-gated

1. **`[var: Vulg. Ps 48:19 *confitebitur tibi*, "he will praise thee," in the third person, which is
   what the gloss's argument requires]`** — 0086.md, **col 1036D**.
   Migne prints `*Confitebor tibi cum benefeceris ei [n: (Psal. XLVIII)]*`, the FIRST person. The
   Clementine has `confitebitur`. **The sense turns on it and the gloss is what turns**: the
   proof-text is adduced for the proposition *Diligitur Deus et ab infidelibus quia bona dat* — that
   God is loved even by unbelievers because he gives good things. Third person, the verse proves it
   (*he* will praise thee when thou dost well to him); first person, it proves nothing about anyone
   else. Rendered as Migne prints it, per Pattern 14, with the received reading beside it.

2. **`[cj: *eum*; read *cum*, "when"]`** — 0086.md, **col 1036D**.
   `Diligitur perfecte, eum animus adversis non movetur, sed spe accenditur.` **The plate was read
   at 900 dpi and confirms `eum`, exactly as our twin has it** — so this is Migne's, not CC's, and
   the printed word is present in the twin, which is what makes the marker legal.
   ⚑ **A named departure from Pattern 18's canonical shape.** The pattern says Migne's word keeps
   its English and the conjecture stands beside it; here the accusative `eum` has no English in this
   clause at all (`Diligitur … eum animus … non movetur` cannot be construed), so the marker stands
   beside the conjecture's English rather than Migne's. Recorded because the alternative was a
   silent repair, which is worse.

**No `[sic:]` was fired in this range.** Ten are *owed* and cannot be written yet — see §3.

---

## §2 · THE PLATE — eight leaves, fifteen columns, every corner number checked

`raw/scans/pl113/patrologiaecurs04migngoog.pdf`, page map `(col + 11) / 2`, calibrated leaf by leaf
against the printed corner numbers before anything was read off the page. Recorded as eight `full`
entries in `data/plate-reads.json`.

| PDF page | cols | running head | condition |
|---|---|---|---|
| 518 | 1025 / 1026 | GLOSSA ORDINARIA. — LIB. PSALM. | clean |
| 519 | 1027 / 1028 | WALAFRIDI STRABI FULD. MON. OPP. | clean |
| 520 | 1029 / 1030 | GLOSSA ORDINARIA. — | clean |
| 521 | 1031 / 1032 | WALAFRIDI STRABI FULD. MON. O… | clean |
| 522 | 1033 / 1034 | GLOSSA ORDINARIA. — | clean; `PATROL. CXIII.` signature at the foot |
| 523 | 1035 / 1036 | WALAFRIDI STRABI FULD. MON. OP… | clean |
| 524 | 1037 / 1038 | GLOSSA ORDINARIA. — LIB. PSA… | ⛔ **col 1037 CLIPPED**, ~7–9 chars/line at the inner margin |
| 525 | 1039 / 1040 | WALAFRIDI STRABI FULD. MON. | clean |

**Zero foot-of-page conjecture apparatus on any of the eight leaves, in either layer.**

⛔ **Col 1037 is a new entry for the known-clipped list** (841, 849, 893, 897, 1045, **1037**). And it
refutes the withdrawn congruence rule once more: 1037 ≡ 1 (mod 4) and is clipped, 1033 ≡ 1 (mod 4)
and is clean, on facing leaves of the same gathering. **The clip cost one finding and saved one
false one** — see the `dilector` entry in §5.

### What the plate did that the Latin alone could not have done
- ⭐ **1035A. The plate reversed a reading, not merely corrected one.** Our twin prints
  `*Barbaro.* Barbaro lingua est, quae Deum non laudat` — the gloss agreeing with its own lemma, and
  ungrammatical. **Migne sets `Barbara lingua est`**: a definition, "that tongue is barbarous which
  praises not God." CC had assimilated the first word of the gloss to the italic lemma standing
  immediately before it. **From the Latin alone this reads as Migne's slip and would have taken a
  marker.** The English follows the plate.
- ⭐ **1027B. `honorum` for `bonorum`, and the control was in the word two lines above.** The h/b
  hazard fires in both directions, so the reading rests on `inhabitabant` in the preceding sentence,
  which sets an `h` and two `b`'s in one word: the disputed glyph is an open arch with no bowl, an
  `h`. Migne prints the non-word.
- ⭐ **1038D. A same-column control settled a lemma.** `*Vota mea reddum.*` at the VERS. 18, 19
  address, with the correct `*Vota mea reddam.*` set three lines below in the same column. The `a`'s
  of `*Vota*`, `*mea*` and `*laudis*` on the same line are closed-bowl; the disputed letter is not.
- ⭐ **1039A. `Sed ue quis putet`, and the turned-sort excuse does not apply.** The glyph is a clean
  bottom-arched `u` against the `n` of `nominat` on the line below. Per the band brief's own rule, an
  `n` cannot become that by failing to ink.
- ⚑ **1032D. The plate CONFIRMED our TEI where the TEI looked wrong.** `Timor Domini.` stands there
  as a lemma but is set ROMAN, not italic, in a column where every other lemma is italic. Our twin
  has it roman. **Migne really does set it roman**, so this is his inconsistency, not CC's, and it is
  not a departure. The same at 1036C for `Sicut misit me Pater, et ego mittam vos`.

---

## §3 · THE DIVERGENCE LIST — every CC departure, and the ten markers I could not fire

**24 departures over 15 columns, ≈1.6 per column**, which is the rate the band brief predicts.
The full table with columns and leaves is appended to `data/briefs/8967-PENDING-TEI-PATCHES.md`;
this section records only what bears on the English.

### The ten owed markers — and why not one of them is on the page
`[sic:]` content is checked as a substring of the Latin twin, and `[cj:]` requires the printed word
to be present in it. **Every one of these markers is unreachable until the patch lands**, and per
§3 of the band brief the honest form is to say so rather than to fire something else:

| col | plate | owed |
|---|---|---|
| 1027B | `honorum` | `[sic: *honorum*]` |
| 1029A | `posueruent` | `[sic: *posueruent*]` |
| 1030C | `quiquid` | `[sic: *quiquid*]` |
| 1032B | `glorificatur` | `[cj: *glorificatur*; read *glorificatus*]` |
| 1033A | `liberavi` | `[sic: *liberavi*]` |
| 1034B | `laudamus sit` | `[cj: *laudamus*; read *laudandus*]` |
| 1034B | `Ili` / `domo ejus` | `[sic: *Ili*]` **and** `[cj: *domo*; read *dono*]` |
| 1037D | `intra` | `[cj: *intra*; read *intrat*]` |
| 1038D | `reddum` | `[sic: *reddum*]` |
| 1039A | `ue` / `Psalmus` / `recipi` | `[sic: *ue*]`, `[cj: *Psalmus*]`, `[cj: *recipi*]` |

**At every one of these sites the English renders the reading our TWIN carries**, which is also the
correct Latin, and the site is filed with the English edit that is owed once the Latin moves. That
is deliberate: an English that had already moved to Migne's defective reading, with no marker
available to say so, would be an unannounced defect on the page.

### Where the English DOES follow the plate (§A6 licence, leaf read, patch filed)
**1026D** (`subdens,` restored, `, etc.` dropped) · **1027B** (`sed` dropped) · **1029A**
(`quod est Deus judex facit`) · **1029B** (`sub` dropped; `labores`) · **1031B** (`in saeculum
saeculi`) · **1035A** (`Barbara lingua est`) · **1028C, 1030C** (Migne's full stops where CC set
commas) · **1038C** (`Ego servus tuus Filius ancillae` as one clause).

### ⛔⛔ The one OPEN site — 1029B, and it is a class, not a case
Our twin: `Quia **non** thesaurizant in coelo.` **The plate: `Quia thesaurizant in coelo.`**
Mid-line, unclipped, 900 dpi, unambiguous. The gloss is on the curse of Ps 108:11 and the negative
is the whole argument. **No marker class reaches an omission**: `[sic:]` may wrap only printed type,
`[cj:]` needs a printed word to gloss, `[ed:]` confesses our loss and not Migne's. So the choice was
between an un-markable reversal on the page and a declared repair. **I took the declared repair**:
the English at 0083.md carries the negative, and the site is filed for Wilson with the class stated.
This is the same shape as §F8's two left-open sites, and it is left open in the same way.

---

## §4 · SCRIPTURE — every quotation in the range, the clean ones included

**Fired:** Ps 48:19 (see §1). **Declined, with the reason, every one of them:**

| site | Migne | Clementine | why declined |
|---|---|---|---|
| 1031C | Phil 2:9-11 *Propter hoc exaltavit illum, et dedit Deus illi nomen … est in gloria Dei Patris* | *Propter quod et Deus exaltavit illum, et donavit illi nomen … in gloria est Dei Patris* | three real differences, **no change of sense**: *dedit*/*donavit*, the position of *Deus*, and *est* moved. Pattern 14's bar is sense, not difference. |
| 1034A | 1 Cor 14:20 *…ut mentibus perfecti sitis* | *sensibus autem perfecti estote* | a purpose clause for an imperative, and *mentibus* for *sensibus*. The gloss uses it only to gloss *Pueri* as "children in malice, not in sense," which both forms carry. Declined — but it is the closest call in the range. |
| 1035D | 2 Cor 5:19 *mundum sibi reconcilians* | *mundum reconcilians sibi* | word order only |
| 1036C | Jn 20:21 *et ego mittam vos* | *et ego mitto vos* | future for present; and **Migne's citation `(Joan. VI)` is wrong** (the verse is Jn 20:21). ⛔ Not corrected — Pattern: do not expand or repair Migne's addresses. |
| 1036D | Rom 10:14 *Quomodo invocabunt* | *Quomodo ergo invocabunt* | one dropped particle |
| 1036D | 2 Cor 6:2 *Ecce nunc tempus acceptabile* | identical | **clean** |
| 1037B | Mt 8:22 *Dimitte mortuos sepelire mortuos suos* | identical | **clean** |
| 1037B | Ps 113:25 *Non mortui laudabunt te, Domine* | identical | **clean text**; Migne's address `(Psal. CIII)` is wrong (it is Ps 113). Not corrected. |
| 1038A | Mt 25:21 *Euge, serve bone et fidelis, intra in gaudium Domini tui* | the Vulgate has *quia super pauca fuisti fidelis…* between | an abridgment, not a divergence |
| 1038B | 1 Cor 10:13 *Fidelis Deus, qui non patitur* | *Fidelis autem Deus est, qui non patietur* | abridged opening + present for future |
| 1033D | Wis 5:8 *Quid nobis profuit superbia et divitiarum jactantia?* | *Quid nobis profuit superbia? aut divitiarum jactantia quid contulit nobis?* | Migne compresses two clauses into one; the sinner's cry is unchanged |
| 1035C | Jn 7:37 *Si quis sitit, veniat ad me et bibat* | identical | **clean** (the plate, unlike our twin, has no comma before *et bibat*) |
| 1035D | Ps 113:11 *Omnia quaecunque voluit fecit* | *quaecumque* | orthography |
| 1033A | Wis 9:15 *terrena inhabitatio deprimit sensum multa cogitantem* | *deprimit terrena inhabitatio sensum* | word order |
| 1027C | 1 Cor 10:12 *Qui stat, videat ne cadat* | *qui se existimat stare, videat ne cadat* | abridged |
| 1027A | Ps 106:34 *In salsugine* | *in salsuginem* | one letter, no exponent in English; §C1 excludes the class |
| 1027B | Ps 106:34 *A malitia habitantium* | *inhabitantium* | one prefix, same sense |
| 1030D | Lk 24:47 *et remissio peccatorum per omnes gentes* | *et remissionem peccatorum in omnes gentes* | inside an abridgment splice |
| 1030A | Jn 7:39 *quia Jesus nondum fuit glorificatus* | *nondum erat glorificatus* | inside an abridgment splice |
| 1033A | Ps 111:2 *Erit potens in terra* | *Potens in terra erit semen ejus* | word order in a stump |

### ⚑ One internal control worth recording, at 1028C
Migne's lemma prints `*Quis deducit me in civitatem munitam*` — **present tense** — and his own gloss
four lines below quotes it back as `singulariter dicendo, deducet me`, **future**, which is the
Clementine's reading. The English keeps both as printed ("Who bringeth me…" then "he will bring me"),
because smoothing either would erase Migne's own inconsistency. Declined as a `[var:]`: it is a
one-letter difference and the gloss does not argue from the tense.

---

## §5 · CANDIDATES REJECTED — the instrument, not the leftovers

**Six candidates that read as confident Migne defects from the Latin alone, and the plate or a
control withdrew every one:**

1. **`de hærcticis` @1027B, `incipicntibus` @1030D, `saccrdos` @1031A** — the italic/roman `e`→`c`
   hazard, three times in one stint. Our TEI is right at all three. **Band B withdrew eleven of
   these; briefing works.**
2. **`nt nnnquam moveatur` @1039B** — reads as a spectacular Migne failure. It is one over-inked
   line whose `u` bowls have filled; `quia` on the *same line* prints a clean `u`. Copy condition.
3. **`eyo` for `ego` @1037C**, italic, in `*O Domine, quia ego,*`. The lower bowl of the italic `g`
   has not closed. ⛔ **Declined because the control is missing, not because the glyph looked
   innocent**: there is no italic `g` on that line or the two around it, and a worn descender is ink,
   not a wrong sort. Recorded here so a later reader does not file it as new.
4. **`dilector` @1037A missing from the plate** — our twin has it, and the plate's line appears to
   stop at `ostiosus`. ⛔ **Not filed as a CC insertion.** Col 1037 is clipped ~7–9 characters at the
   head of each line and `dilector.` sits exactly there. **A clipped column cannot testify to an
   absence** — this is the one place in the range where the clipping rule earned its keep.
5. **`tempcre` @1030A, `(Aus.)` @1030A, `(Cass )` @1031C** — damaged sorts on those leaves.
6. **The bracket-shaped sort before `[psalmorum` @1039A** — this is the already-reported stray-sort
   class from cols 1039–1041, and I add only a second sighting, not a finding.

**Two markers declined on the RULE, not on the fact:**
- **`VERS. 2. — 2. —` @1030D**, the verse number set twice adjacently. It is a genuine Migne
  dittography and it is patchable; **no `[d:]` is owed in the English.** Pattern 9 exempts section
  labels, and §5 of the band brief declined `PSLMUS` on exactly this ground — normalizing is right
  *because* the facing Latin will preserve the misprint once the patch lands.
- **`Cass.)` with no opening parenthesis @1029D.** Note contents are checked against the twin, so
  the English cannot move; and a `(` that never inked is a copy-condition question, not a reading.

**One patch declined for the same reason a marker would be:** **`ostios[u|n]s` @1037A.** The
intrusive `s` is certain at 1200 dpi; the penultimate letter will not settle as `u` or `n`, and the
same-line controls (`non`, `quod`) give one of each. Per the `Nafrubimus` @0962B precedent, **a patch
must not guess a letter.** Left open, needs a second copy.

---

## §6 · THE RULED AXES, measured over my own five chunks

| axis | count in my Latin | what I did |
|---|---|---|
| `usque ad` | **61 occurrences** (62 raw hits, one of them inside `utriusque` @1035B) | **61 formula, 0 non-formula.** Every one follows an `etc.` and names the resumption point, so §A7's splice test passes them all. **All 61 → "as far as"; zero "down to"**, and the English count reconciles per chunk (15 / 20 / 11 / 11 / 4), the 0084 pair being the anchor-split `*as far [1033A] as*`. |
| `gentes` family | 20 (`gentes` 8, `gentium` 7, `gentibus` 3, `gentilem` 1, `Gentiles` 1) | **Gentiles** where the contrast is with the Jews (`populus gentium` @1029B, `regnat in gentibus` @1034B, `Ecclesiam gentilem` @1034C, `simulacra gentium` @1035D–1036A, `Idumeae gentes` @1028C); **nations** where the reference is the whole world without that contrast (`Judicabit in nationibus` @1031B, `per omnes gentes` in Lk 24:47 @1030D, `Laudate Dominum, omnes gentes` @1039A/B). Decided per site, as the axis intends. |
| `mysterium` / `sacramentum` | mysterium 1, sacramentum **0** | `Haec tanta mysteria` @1027C → "these mysteries". 1:1 preserved trivially. |
| `daemonium` / `diabolus` | daemonium **0**, diabolus 5 | **devil** ×5, no bleed. |
| `turba` / `multitudo` | **0 / 0** | ⚑ The instrument was checked, not just run: this is a Psalter and the Gospel crowds are simply absent — exactly Band A's finding, not evidence of drift. |
| `Canticum graduum` / `gradus` | **0 / 0** | ⭐ **The gradual psalms are NOT in this stint's range.** My span is Psalms CVI–CXVI; `Canticum graduum` begins at Ps CXIX, which falls in chunks 0087+. The ruling ("A canticle of degrees" / "degree") is untouched by this range and **remains untested against a plate by me.** The stints holding 0087–0096 own it. |
| `In finem` | 1 (@1028C, `*In finem, Psalmus.*`) | → **"*Unto the end, a psalm.*"** Not "for the choirmaster." |
| `Diapsalma` | **0** | not engaged in this range |
| `Psalmus David` / `Psalmus ipsi David` | `Psalmus David` 1 (@1030C), `ipsi David` 0 | → "*A psalm of David.*", kept distinct from 0076's "*A psalm for David himself.*" |
| `Dominus virtutum` / `sedes` | **0 / 0** | not engaged |
| `gens` singular, non-ethnic | **0** | not engaged; nothing to flag for Wilson |
| archaisms | 0 `saith`, 0 `doth`, 0 `-eth` outside quoted scripture | checked against BOTH memberships (italic lemmata and « guillemets »); this range carries no guillemets at all |
| em-dashes | **0** | none written |

---

## §7 · CRUCES — rendered literally, difficulty named

1. **@1029A `quod est bonum pro malo quod est Deus judex facit`** (plate; CC smooths it to `quod et
   Deus judex facit`). Two finite verbs, no conjunction. Rendered on the reading that the second
   `quod est` is the explanatory formula: "which is good for evil, which is, God the judge does."
   **The strain is Migne's and CC erased it**; the English follows the plate and says so here.
2. **@1029B `*Viduae,* amisso regno`** — the Clementine has `vidua`. Rendered "*Widows,*", the
   printed plural, rather than repairing it to agree with `Uxor, id est plebs` two words earlier.
   No marker: the plate was read and prints `*Viduæ*,`, so it is Migne's, and a concord mismatch
   with no English exponent takes no marker (Pattern 9, `res aliena` @0971D).
3. **@1029B `*Mendicent*, regibus gentium`** (plate; CC inserts `sub`). Rendered as a bare dative,
   "of the kings of the Gentiles," rather than "under," which is what CC's preposition would give.
4. **@1029C `quia cum essent rami naturales, facti sunt`** — `facti sunt` has no complement. Rendered
   "because, though they were natural branches, so they became," with nothing supplied.
5. **@1029D `Nullis enim operum etc.`** — a genitive with no governing noun. Rendered "For by no
   works, etc.", the ellipsis carried.
6. **@1030B `Una est maledictio malorum Deus, cum benedicit, facit quod dicit`** — `Deus` stands
   between two clauses and belongs to neither cleanly. Rendered as printed: "One is the cursing of
   the wicked; God, when he blesses, does what he says." **The plate was read and reads exactly
   this**; no repair, no marker.
7. **@1033C `Vel, si quis mala minatur, non timet, sed paratum`** — an accusative where a nominative
   is wanted. Rendered "but is ready," and named here.
8. **@1038A `sed virtus Dei est, si non credit`** — obscure, and the twin and the plate agree.
   Rendered as printed: "but it is the power of God, if he does not believe." Not conjectured.
9. **@1038C `Vel ut ancilla, non sibi, sed Domino`** — the verb is elided and is supplied from the
   following clause (`parturiam`): "as a handmaid brings forth not for herself, but for her lord."
   **The supplied word is the sentence's own, three words later, and nothing else is added.**

### Copulas and pronouns supplied, each one named
- **@1030A `*Manus tua haec.*`** → "*This is thy hand.*" The copula is supplied because an English
  clause cannot stand without a verb; nothing else is added, and the gloss's own next words
  (`Christus haec manus`) confirm the predication.
- **@1030A `viderunt pendere in cruce`** → "they saw **him** hanging on the cross." The object is
  elided in the Latin; the referent is Christ and is not in doubt in the sentence.
- **@1030A `*Moverunt capita.*`** → "*They moved their heads.*" English requires a possessive with a
  plural body-part; ⚑ the Clementine's `capita **sua**` would be "their own," and that is precisely
  the word I have NOT imported.

### ⛔ Stumps rendered SHORT — the fourteen-site failure profile of Band B, checked by name
Migne prints these lemmata clipped, and the English is clipped with them. **No possessive, subject
or object has been completed from the Vulgate at any of them:**

`*Et deduxit.*` → "*And he led.*" (not "led **them**") · `*Esurientem.*` → "*Him that is hungry.*"
(no "soul") · `*Deus laudem.*` @1028D → "*O God, praise.*" (not "**my** praise") · `*Mala adversus
animam.*` @1029D → "*Evils against the soul.*" (not "**my** soul") · `*Quia egenus et pauper.*`
@1029D → "*Because needy and poor.*" (no "I am") · `*Dominus Domino.*` @1030C → "*The Lord to the
Lord.*" (⭐ **not "to MY Lord"** — Ps 109:1 prints `Domino meo` and Migne does not) · `*Virgam
virtutis.*` @1030D → "*The rod of power.*" (not "**thy** power") · `*Virtutem operum.*` @1032B →
"*The power of the works.*" (not "**his** works") · `*Fidelia omnia mandata.*` @1032C → "*All the
commandments are faithful.*" (not "**his** commandments") · `*In mandatis.*` @1033A → "*In the
commandments.*" · `*Super filios.*` @1036B → "*Upon the children.*" (not "**your** children") ·
`*Ubi est Deus.*` @1035D → "*Where is God.*" (not "**their** God") · `*De morte oculos.*` @1037B →
"*From death, the eyes.*" (not "**mine** eyes" — this is the exact shape of Band B's
*Anticipaverunt vigilias*) · `*Filius ancillae.*` @1038C → "*The son of the handmaid.*" (not "**thy**
handmaid") · `*Dies pauci.*` @1029A → "*Few days.*" · `*Filii orphani:*` @1029B → "*Children
fatherless:*" · `*Et non sit illi,*` @1029B → "*And let there not be for him,*"

⚑ **`*Transferatur,*` @1029B** was the hardest of them: a third-singular passive subjunctive with no
subject. Rendered "*Let it be transferred,*" — neutral — rather than "let **him** be removed," which
would invent a person the gloss (`ut in captivitate factum est`) does not name.

### Negation scope — where Latin marks it once and English must mark it twice
- **@1029D `qui dicunt non esse ex Patre, vel minorem Patre`** → "who say **that he is not** of the
  Father, **or that he is** less than the Father." The `non` governs the first limb only; English
  apposition would have carried it into the second and made the gloss say the opposite about the
  Arian charge. Marked twice deliberately.
- **@1033B `et credunt promittenti, non credunt perisse opera sua`** → "and who **believe** him when
  he promises, and who **believe not** that their works have perished." Two verbs, opposite polarity,
  three words apart. Both marked.
- **@1035C/1036A `inania simulacra probat`** — note that Migne writes `probat` here and `reprobat`
  eight lines above at 1034D. Both are his; both rendered as printed ("proves the idols empty" /
  "reproves the empty idols").

### A word order that is Migne's, not a slip
**@1035A `*Vidit mare,*` and @1035B `*Mare vidit.*`** — Migne sets the same clause in both orders,
four lines apart, and glosses each. `mare` is neuter, so both are "the sea saw," and **both are
rendered identically**. Recorded because the natural instinct is to differentiate them, and there is
nothing there to differentiate.

---

## §8 · HANDOFF

1. **The patch pass owes ten English edits**, each one named with its file and its site in the §3
   table and in `data/briefs/8967-PENDING-TEI-PATCHES.md`. ⛔ **Reconcile reported sites against
   applied ones**: seven of Band B's 28 blind-read findings were patch-pass omissions, and two of
   those were patches a stint reported and nobody built.
2. **Wilson owes a ruling on the 1029B class** — what the English does when the plate DROPS a
   negative and no marker class reaches the omission. The site is open and the English currently
   carries the negative.
3. **Col 1037 is clipped** and joins the known-clipped list. One site in it (`ostios[u|n]s`) needs a
   second copy; it is the only Gallica-class site this range produced, and it is a sixth alongside
   the five standing work-wide.
4. **The gradual-psalm ruling is still untested against a plate.** It is not engaged anywhere in
   1025C–1039B. Chunks 0087+ own it; the tituli columns from 1051 onward are where it must be
   checked.
5. **For the blind polarity read**, the four places in this range where a reader should look hardest,
   because they read perfectly in English and rest on a judgement: the supplied copula at 1030A
   (`*Manus tua haec.*`), the supplied object at 1030A (`viderunt pendere`), the supplied possessive
   at 1030A (`*Moverunt capita.*` → "their heads"), and the declared repair at 1029B (the restored
   `non`). ⚑ **Logging them is not checking them** — each is recorded with WHAT was checked, not
   merely that it was looked at.
