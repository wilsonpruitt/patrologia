# 8999 — plate findings, reader A

**Witness:** archive.org `patrologiaecursu0114mign` (PL 114, colour, 2215×3603).
**Leaves read:** n184, n185, n186, n188.

## Calibration

Calibrated on **n184**, top-of-page crop: printed corner numbers read **357** (left) and
**358** (right), with the running head *GLOSSA ORDINARIA. — EVANG. JOAN.* between them. The map
`leaf n → columns (2n−11), (2n−10)` therefore holds for this scan. Re-checked on every further
leaf: **n185 = 359/360** (head *WALAFRIDI STRABI FULD. MON. OPP. PARS I. — THEOLOGICA.*),
**n186 = 361/362**, **n188 = 365/366**.

Band letters were also checked against our anchors on col. 358: the plate's **B** stands beside
*carnalibus oculis* and its **C** beside *revelare (Luc. x)*, exactly where our TEI puts
`<pb n="0358B"/>` and `<pb n="0358C"/>`. The column-anchor placement in this range is sound.

---

## 1. 0358A `[var:]` — Ex 33:21/33:22 conflation

**Leaf n184, col. 358, band A** (right column, lines 5–9 of the *Vers. 18* paragraph).

Migne prints:

> Unde ista adjecit Deus Moysi: *Sta in foramine petræ, et cum pertransiero videbis posteriora
> mea (Ibid.)*. Petra, id est, Christus, foramen, crucis patibulum, pertransiero, id est,
> transiero de mundo ad Patrem.

(*Sta … mea* in italic; *Ibid.* italic inside upright parentheses.)

**CONFIRMED as Migne's.** The imperative conflation *Sta in foramine petræ* is on the plate,
letter for letter as our text has it, and the exposition of *petra / foramen / pertransiero /
posteriora* follows it on the same lines. The `[var:]` stands.

## 2. 0358B `[var:]` — Jo 17:3 *unum verum Deum*

**Leaf n184, col. 358, band B–C** (two lines below the B letter).

Migne prints:

> Trinitatis, unde : *Hæc est vita æterna, ut cognoscant te unum verum Deum, et quem misisti
> Jesum Christum.*

**CONFIRMED as Migne's.** *unum verum Deum* is set in italic, word-spaced tightly but
unambiguous. The `[var:]` against Vulg. *solum Deum verum* stands.

## 3. 0358B `[var:]` — *Ostende mihi teipsum*

**Leaf n184, col. 358, band B–C** (last full line before the C letter's line).

Migne prints:

> in typo Dei dixit: *Ostende mihi teipsum (Exod.* xxxiii*)*, sed Filius qui est in secreto
> Patris narravit, …

(*Ostende mihi teipsum* italic; *Exod.* italic, the numeral in small capitals, parentheses
upright.)

**CONFIRMED as Migne's.** *teipsum* is printed, not *faciem tuam* or *gloriam tuam*. The
`[var:]` stands.

## 4. 0358C `[var:]` — Lc 10:22 / Mt 11:27

**Leaf n184, col. 358, band C** (the C letter stands beside the *revelare* line).

Migne prints:

> … narravit, *quia nemo novit Patrem nisi Filius, et cui voluerit Filius revelare (Luc.* x*)*.
> Ipse narrat suis quid de Trinitate deitatis sentiendum sit, …

**CONFIRMED as Migne's.** The clause *nemo novit Patrem nisi Filius* under a **Luc. x** siglum is
on the plate. The `[var:]` stands.

## 5. 0360A `[var:]` — Jo 1:29 *Peccata mundi*

**Leaf n185, col. 360, band A** (the A letter stands beside the column's first line, *in qua
Christus mortuum suscitat…*).

Migne prints, ten lines down:

> menta virtutum, esum carnis suæ. *Peccata mundi.* Peccatum mundi dicitur originale peccatum
> quod …

(*Peccata mundi.* italic lemma including the full stop; the exposition upright.)

**CONFIRMED as Migne's.** The plural lemma and the singular exposition disagree on Migne's own
line, exactly as the marker asserts. The `[var:]` stands.

## 6. 0365B `[var:]` — Pr 5:22 *funiculis*

**Leaf n188, col. 365, band B** (the *Vers. 15* paragraph, four lines after the B-band break at
*potationes*).

Migne prints:

> Vers. 15. — *De funiculis.* Funiculi quibus ejiciuntur sunt incrementa actionum malarum, unde
> Isaias : *Væ qui trahitis iniquitatem in funiculis vanitatis (Isa.* v*)*. Et Salomon :
> *Funiculis peccatorum suorum quisque contringitur (Prov.* v.*)*

**CONFIRMED as Migne's** — *Funiculis* (not *funibus*) and the interpolated *quisque* are both on
the plate. The `[var:]` stands.

⚑ **But the plate does not read what our Latin reads.** Migne prints **`contringitur`**, not
`constringitur` — verified at 5× magnification, no *s*, and the letterforms *c-o-n-t-r-i-n-g-i-t-u-r*
are clean. Our TEI has silently normalised a Migne non-word into a real one. Also note Migne's
closing siglum is *(Prov. v.)* with a full stop inside, and the sentence ends without a further
period.

This is a `[sic:]` candidate against Migne's type and a TEI departure; I am reporting it, not
firing it, since it is outside my marker list. If it is taken up, the TEI patch is:

```
find:    quisque constringitur
replace: quisque contringitur
```
(`constringitur` occurs exactly once in `sources/pl/tei/8999.xml`; verified by grep.)
The crux note and the existing `[var:]` text at 0365B would need the same correction, and the
English gloss ("is bound") is unaffected in sense.

---

## 7. 0359D `circa` (declined non-marker) — SETTLED AT THE PLATE

**Leaf n185, col. 359, band D** (the *Vers. 28* paragraph, second line).

Migne prints:

> Vers. 28. — *Hæc in Bethania.* Duæ sunt Bethaniæ. Una trans Jordanem, altera circa non longe ab
> Hierusalem, ubi Lazarus suscitatus est.

and, eight lines further down in the same column:

> Illa quæ est citra Jordanem significat eadem humanam …

**CONFIRMED as Migne's.** Magnified 5×, the word is **`circa`** — an unmistakable *r* with its
shoulder and a round *c*, in no way a *t*. Migne sets *circa* here and *citra* eight lines later,
on the same plate. The stint's decision to decline the marker was correct, and the *trans/citra*
argument is once again shown to be a failed attribution test: whatever the reading's history, the
page in front of us prints *circa*. **Nothing to patch; no marker owed.** Our TEI agrees with the
plate.

## 8. 0361A `sciebat` / `bat` (declined non-marker) — WITHDRAWN AS OURS

**Leaf n185, col. 360, foot of band D** and **leaf n186, col. 361, band A, first line.**

Migne prints at the very foot of col. 360:

> (Hier.) Ostendit Joannem non scire per baptismum
> Christi, id est mundum esse redemptum, nam scie-

— the last word broken with a hyphen at the end of the column — and at the head of col. 361:

> bat eum Filium Dei esse, et natum in carne. Aug.
> dicit Joannem ignorasse hoc tantum utrum sibi re-

**Migne's word is a single *sciebat*, hyphenated across the column break.** There is no
duplicated syllable on the plate: the foot of 360 reads `scie-`, not `sciebat`. Our TEI carries
the completed *sciebat* **and** the orphan *bat*, which is a digitization artefact — Corpus
Corporum resolved the hyphenation and then kept the catchword-like fragment as well.

**WITHDRAWN as ours.** TEI patch:

```
find:
redemptum, nam sciebat
<pb n="0361A"/>
bat eum Filium Dei esse

replace:
redemptum, nam scie<pb n="0361A"/>bat eum Filium Dei esse
```

(The `find` string occurs exactly once in `sources/pl/tei/8999.xml`; verified by grep. The
`<pb n="0361A"/>` anchor is preserved in place, mid-word, which is where Migne breaks it — if the
chunker cannot take a mid-word `<pb/>`, the alternative is to keep the pb between whitespace and
patch only the duplicated syllable: `nam sciebat` → `nam sciebat` with the following bare `bat `
deleted.)

The English at 0361A currently begins the sentence from *sciebat*; no English change is needed
beyond the removal of nothing — the orphan `bat` was never rendered as a word.
