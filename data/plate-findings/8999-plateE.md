# 8999 — plate findings, reader E (leaves n210–n213, cols 409–416)

**Witness:** archive.org `patrologiaecursu0114mign` (PL 114, colour, 2215×3603).
**Map:** leaf n carries columns (2n−11) and (2n−10); left column = lower number.

## CALIBRATION

Calibrated on **leaf n210** before reading any marker. Cropped the top 7% and read the
printed corner numbers: **`409`** at the left margin and **`410`** at the right, with the
running head `GLOSSA ORDINARIA. — EVANG. JOAN.` between them. The map predicted 409/410 for
n210 and the plate agrees. Re-checked on the two later leaves I opened:
**n212 reads `413` … `414`** (running head `GLOSSA ORDINARIA. — EVANG. JOAN.`) and
**n213 reads `415` … `416`** (running head `WALAFRIDI STRABI FULD. MON. OPP. PARS I. —
THEOLOGICA.`). The map holds across all four leaves; no offset.

All four assigned leaves (n210, n211, n212, n213) were downloaded and read.

---

# PRIMARY — the fired markers

## 1. 0414C `[var:]` — 1 Cor 2:14 — **CONFIRMED as Migne's**

**Leaf n212, column 414, band C** (the anchor `[0414C]` falls inside the italic lemma at the
top of band C; the lemma runs over from the last line of band B).

What Migne prints, exactly — italic for the lemma, roman for the note:

> *Ani-* / *malis autem qui non percipit quæ sunt Spiritus Dei* (I *Joan*. ɪ). Quæcunque
> dicuntur de incorporea et immutabili substantia, habet quasi proverbia.

(The word *Animalis* is broken `Ani-` / `malis` across the band-B/band-C line break; the band
letter `C` stands in the gutter beside the second line.)

**Verdict: CONFIRMED.** Migne prints **no *homo*** and **no *ea***: the clause really does read
*Animalis autem **qui** non percipit **quæ** sunt Spiritus Dei*, having lost the subject noun
and with the relative *qui* standing where the Vulgate has *homo … percipit ea quae*. Our
Latin reproduces the plate word for word. The `[var:]` stands and it is a true claim about
Migne's page.

⚑ **The note is Migne's too.** He prints `(I Joan. ɪ)` — the misattribution of a 1 Corinthians
verse to 1 John — and we reproduce it uncorrected, which is correct. **One cosmetic
difference:** Migne sets the chapter numeral as a *lowercase* roman `ɪ` in italic
(`(I *Joan*. ɪ)`), where our TEI has an uppercase `(I Joan. I)`. This is a case-normalisation
by the digitization, not a reading; **no patch proposed** — it changes nothing citable and the
same normalisation runs through every `[n:]` in the work.

## 2. 0414D `[var:]` — Jo 16:29 *loquitur* — **CONFIRMED as Migne's**

**Leaf n212, column 414, band D** (the `D` band letter stands beside *…quem et ipsum amamus…*
in the preceding paragraph; VERS. 29 is the second paragraph of the band).

What Migne prints, exactly:

> VERS. 29. — *Dicunt ei discipuli ejus.* Cum nondum venisset hora quam promisit : *Ecce nunc
> palam loquitur.* Illa quæ Dominus scit non intelligentibus esse proverbia : illi usque adeo
> nobis intelligunt, ut nec saltem se non intelligere intelligant. De qua

**Verdict: CONFIRMED.** The plate reads **`loquitur`** — third person — in italic, against the
Vulgate's second-person *loqueris*. Read at 2× and again at the word; the terminal is
unambiguously `-tur`, not `-ris`. The `[var:]` stands.

## 3. 0415A `[cj:]` — *nobis* for *non* — **CONFIRMED as Migne's**

**Leaf n212, column 414, band D** — ⚠ note the *word* sits in col. 414 D, one line above the
`[0415A]` anchor; the anchor falls at *De qua* / *eorum infirmitate*, and the crux's own
sentence is the last full sentence of col. 414 D. I read it there, on n212, and the whole
sentence is transcribed in item 2 above.

Migne prints: **`illi usque adeo nobis intelligunt, ut nec saltem se non intelligere
intelligant.`**

**Verdict: CONFIRMED — *nobis* is on the plate.** Magnified, the word is `nobis` with a clear
`b`; there is no `n`-`o`-`n` and no space where one could hide. The `[cj:]` is therefore
correctly formed: it conjectures *non* against a printed *nobis* that is really printed, it is
additive, and it asserts nothing about whose the defect is. Nothing to withdraw.

---

# SECONDARY — the six declined oddities

## 4. 0410D `liguis` — **WITHDRAWN as ours**

**Leaf n210, column 410, band D** (the `D` band letter stands beside *est vitis, tamen…*, two
lines above).

What Migne prints, exactly:

> VERS. 6. — *Si quis*. Sarmenta præcisa cæteris li- / gnis sunt viliora, quia nullis usibus
> deputantur, sed igni, vel in vite sunt vel in igne.

**Verdict: WITHDRAWN.** Migne prints **`lignis`**, hyphenated `li-` / `gnis` across a line
break — the ordinary ablative of *lignum*. *liguis* is Corpus Corporum's `n`→`u` misreading of
the second half of a broken word. There is no non-word on the plate and the sentence is plain:
"cut-off branches are of less worth than other **woods**".

TEI patch (`sources/pl/tei/8999.xml`, line 3626; `find` is unique — `grep -c -F` = 1):

- find: `caeteris liguis`
- replace: `caeteris lignis`

⚑ Downstream: the English (`src/english/8999/0021.md`) carries *liguis* untranslated in
italics under Pattern 7. That italic span must go and the word be translated ("other woods"),
which also restores the 38/38 Latin-vs-English span parity the stint flagged in cruces-0020 §(b).

## 5. 0411C `manao` — **WITHDRAWN as ours**

**Leaf n211, column 411, band C** (the `C` band letter stands in the gutter beside the second
line of this very paragraph).

What Migne prints, exactly:

> VERS. 17. — *Hæc mando*, etc. Hic ostendit quis sit fructus quem dixerat, pro quo et dabit
> Pater quod petimus, qui et hoc dedit, ut diligamus.

**Verdict: WITHDRAWN.** Migne prints **`mando`** in italic, set whole on one line, no break, no
damage — the lemma of John 15:17 *Hæc mando vobis*. *manao* is Corpus Corporum's `d`→`a`
misreading. This is not the 9001 @0203A *magnitudino* case; the plate is clean.

TEI patch (line 3668; `find` unique, count 1):

- find: `<hi>Haec manao,</hi>`
- replace: `<hi>Haec mando,</hi>`

## 6. 0415A `interrogate` — **WITHDRAWN as ours**

**Leaf n213, column 415, band A** (the `A` band letter stands beside the first line of the
column, *eorum infirmitate admonens respondit : Modo credi-*).

What Migne prints, exactly:

> VERS. 30. — *Nunc scimus quia scis omnia.* Aperte ostendunt, quia loquens de eis, ad eos
> maxime agebat quæ illos delectabant audire : et quæ ipsi inter- / rogare volebant, hæc ipse
> præveniens ultro proferebat, et ideo illum, quia cogitationes noverat, confitentur scire
> omnia quasi Deum et Dei Filium.

**Verdict: WITHDRAWN.** Migne prints **`interrogare`**, hyphenated `inter-` / `rogare` across a
line break — the plain complementary infinitive with *volebant*. *interrogate* is Corpus
Corporum's `r`→`t` misreading at the second half of the broken word. Note that the same column
prints *interroges*, *interrogeris*, *interrogavit*, *interrogatus* correctly a few lines
below — but that is corroboration that an error exists, not evidence of whose, and it is not
the ground of this verdict: the ground is the printed `inter-` / `rogare`.

TEI patch (line 3896; `find` unique, count 1):

- find: `et quae ipsi interrogate`
- replace: `et quae ipsi interrogare`

⚑ Downstream: the English (`src/english/8999/0022.md`) carries *interrogate* untranslated in
italics. That span must go and the clause be translated ("the things they themselves wished to
ask"), restoring 51/51 span parity for chunk 0022.

## 7. 0409B — the *discretio* with no negation — **CONFIRMED as Migne's; no marker owed**

**Leaf n210, column 409, band B.** ⭐ The stint's top request. Whole sentence, exactly as
printed:

> VERS. 22. — *Dicit ei Judas*, etc. Audito quod mundus modo videbit eum, sed ipsi videbunt,
> pro omnibus quæsiturus quærit Judas causam hujus discretionis. Hæc autem causa est secundum
> responsionem Domini, dilectio, per quam solam et non per aliam discernitur gens sancta a non
> sancta.

**Verdict: CONFIRMED — no negation stands on the plate.** I read the whole VERS. 22 paragraph
at 2× and there is **no *non*, *nec*, *nisi*, *nullus* or *nihil* anywhere between *Audito* and
*discretionis*. The only two negatives in the paragraph are the two in the last clause (*non
per aliam*, *a non sancta*), which our Latin and our English both carry. Our text reproduces
the plate word for word, punctuation included.

So the stint's decline was correct, and it was correct for the right reason: what Migne printed
is what we have, and *mundus **modo** videbit eum* ("the world will **only** see him", against
*ipsi videbunt*, "but they will see") is a surviving construal of the *discretio* on the printed
words alone. **A `[cj:]` here would have been a conjecture against a plate nobody had read.**
No patch, no marker.

## 8. 0416A `ex Patre` — **CONFIRMED as Migne's**

**Leaf n213, column 416, band A** (the `A` band letter stands beside the column's first line).

What Migne prints, exactly:

> *Ut cognoscant te.* Quod hic est ex Patre, in futuro erit plene. Qui ergo proficit in
> cognitione, magis vivere tendit.

**Verdict: CONFIRMED.** Magnified 4× on the word: `ex Patre,` — a full capital **P** with the
bowl closed, then `a-t-r-e`. It is not `parte`; there is no `r` before the `t` and the initial
is upper case, which *parte* would never be. Migne prints **Patre**, and the answering *plene*
stands as he set it. No patch, no marker.

## 9. 0414A `videbo` / `videbor` — **CONFIRMED as Migne's**

**Leaf n212, column 414, band A** (the `A` band letter stands beside `VERS. 15.`, at the head
of the column).

What Migne prints, exactly:

> VERS. 16. — *Modicum.* Id est, parvum tempus restat usque ad hoc quod patiar et claudar
> sepul- / cro, et iterum parvum tempus usquequo me videatis resuscitatum. Vel parvum tempus
> est , id est tri- / duum quo clausus non **videbo**. Et iterum parvum, id est quadraginta
> dies, quo resuscitatus **videbor**. *Quia vado.* Hoc est quia tempus est ut, deposita
> mortalitate, humanam naturam cœlis inferam.

**Verdict: CONFIRMED.** Both forms are Migne's, exactly as our Latin has them: the active
`videbo` in the first limb and the passive `videbor` in the second, three words apart on
adjacent lines, both set whole with no break and no damage. The asymmetry (*"the three days in
which, shut up, I shall not see"* against *"the forty days in which, raised, I shall be seen"*)
is on the plate; it is not our artifact. No patch, no marker. (The stint's decline stands.)

---

# INCIDENTAL — three departures found while reading, outside the marker set

These are not markers and none is at stake in any public claim; they are recorded because they
are further evidence of the same thing rule 8a exists for — **our Latin is not the printed
page** — and because two of them are the *opposite* direction from the usual: Corpus Corporum
silently repairing Migne.

**(i) 0410D — `est vitis. tamen` is OURS.** Leaf n210, col. 410 D. Migne prints
`…secundum hominem Christus est vitis, tamen hanc gratiam palmitibus non daret, nisi etiam
Deus esset.` — a **comma**, magnified and unambiguous, not a full stop. cruces-0020 §(a)3 lists
the mid-sentence full stop among the printed punctuation it faithfully carried; it is not
printed. Patch (line 3624; `find` unique, count 1):
- find: `est vitis. tamen hanc gratiam`
- replace: `est vitis, tamen hanc gratiam`

**(ii) 0416A — a dropped `ei` is OURS.** Leaf n213, col. 416 A. Migne prints the italic lemma
`ut omne quod **ei** dedisti ei det eis vitam æternam :` — the *ei* twice, magnified 4× and
clear. Our TEI has it once. Patch (line 3959; `find` unique, count 1):
- find: `<hi>ut omne quod dedisti ei det eis vitam aeternam:</hi>`
- replace: `<hi>ut omne quod ei dedisti ei det eis vitam aeternam:</hi>`

**(iii) Two SILENT REPAIRS by Corpus Corporum — Migne's own broken type, which we do not
carry.** Both read at 4×:
- **col. 410 D:** Migne prints `sed quod habet **cupidites** et infirmitas carnis.` — a
  non-word for *cupiditas*. Our TEI reads `cupiditas`.
- **col. 414 D:** Migne prints `**Redit sd patriam**, quia amatoribus suis se æqualem
  credendum docuit Patri.` — `sd` for *ad*, a damaged or foul sort. Our TEI reads `Redit ad
  patriam`.

Each is a genuine defect of Migne's type that our source has quietly corrected — i.e. a site
where a `[sic:]` **would** have been true and where our file made the defect invisible. **No
patch is proposed for either**: restoring them would put non-words into the Latin column for no
reader's benefit, they carry no marker, and the no-retrofit ruling covers the class. They are
logged so that nobody later reads our clean text as evidence about Migne's page.

---

# SUMMARY

| # | site | marker | verdict |
|---|---|---|---|
| 1 | 0414C | `[var:]` 1 Cor 2:14 | **CONFIRMED** as Migne's |
| 2 | 0414D | `[var:]` Jo 16:29 *loquitur* | **CONFIRMED** as Migne's |
| 3 | 0414D→0415A | `[cj:]` *nobis* → *non* | **CONFIRMED** as Migne's |
| 4 | 0410D | *liguis* (unmarked) | **WITHDRAWN** as ours → *lignis* |
| 5 | 0411C | *manao* (unmarked) | **WITHDRAWN** as ours → *mando* |
| 6 | 0415A | *interrogate* (unmarked) | **WITHDRAWN** as ours → *interrogare* |
| 7 | 0409B | negation (declined) | **CONFIRMED** — no negation printed; decline correct |
| 8 | 0416A | *ex Patre* (declined) | **CONFIRMED** as Migne's |
| 9 | 0414A | *videbo* / *videbor* (declined) | **CONFIRMED** as Migne's |

**Fired markers: 3 read, 3 confirmed, 0 withdrawn.** All three sit on quoted clauses or on a
word magnified at the plate; the class prior (`[var:]` on a quoted clause stands) held again.

**Declined oddities: 6 read, 3 were ours and 3 were Migne's.** Every one of the three
non-words — *liguis*, *manao*, *interrogate* — is the digitization's, and two of the three are
the same failure mode: **a one-letter misread in the second half of a word Migne hyphenated
across a line break** (`li-`/`gnis`, `inter-`/`rogare`). No crop was unreadable.

**5 TEI patches proposed**, every `find` verified unique in `sources/pl/tei/8999.xml` by
`grep -c -F`. Two of them (items 4 and 6) also require an English repair, since both non-words
are carried untranslated in italics in `src/english/8999/0021.md` and `0022.md`; removing those
two spans restores the 1:1 Latin/English span counts that cruces-0020 §(b) flags as deliberate
exceptions.
