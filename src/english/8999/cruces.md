# Cruces — 8999, *Glossa ordinaria*, **Evangelium secundum Joannem** (PL 114, cols 0355B–0426B)

Merged from the six translation stints' files (`cruces-0000`, `-0005`, `-0010`, `-0015`,
`-0020`, `-0024`) **after the whole apparatus had been read at Migne's plate**. The stints'
own sections are preserved below, verbatim and unabridged, because their reasoning is the
record of how each reading was reached. **Where a stint's attribution class disagrees with the
plate, the plate governs, and §0 says so site by site.** Nothing below §2 has been silently
altered; the two corrections that were made to a stint's own text are named in §0.4.

This is a nineteenth-century abridged recension of the marginal gloss: a `VERS. n.--` address,
the Vulgate words being glossed in italics, then the comment, with attribution sigla (`AUG.`,
`BEDA.`, `HIER.`, `ALCUIN.`, `GREG.`) arriving as ordinary notes. Migne's attributions in this
recension are known to be unreliable, and passing a siglum through is not endorsing it.

John is printed **inside the Glossa proper**, under the running head `GLOSSA ORDINARIA. —
EVANG. JOAN.` — unlike 9003 and 9004 in the same volume, whose bylines were corrected off the
Glossa author. There is no attribution question here.

---

## §0. THE PLATE READ — 23 of 23 `[var:]` stand, and every correction came from the DECLINED list

**Source.** archive.org **`patrologiaecursu0114mign`** — a second copy of PL 114, colour,
2215×3603, clean at both margins where our on-disk scan (`patrologiaecurs06saingoog.pdf`) clips
them. Established and calibrated on 9001, so this work never had to stop and hunt one.

    https://archive.org/download/patrologiaecursu0114mign/page/n<N>.jpg

**leaf n = (column + 11) / 2**, i.e. leaf n carries columns (2n−11) and (2n−10). Calibrated on
this work's own range at n183 = cols 355/356, and **each of the six readers calibrated
independently on the printed corner numbers of its own first leaf before reading anything**.
⚠ The endpoint returns HTTP 200 with an **empty body** to a bare curl; it needs `-L` and a
browser user-agent.

**23 leaves, 26 markers, all read.** Recorded in `data/plate-reads.json` under `8999`;
per-reader files in `data/plate-findings/8999-plateA.md` … `-plateF.md`.

### §0.1 The result

| class | fired | confirmed as Migne's | withdrawn as ours |
|---|---|---|---|
| `[var: …]` — a quoted clause | 23 | **23** | **0** |
| `[cj: …]` — a conjecture on his text | 3 | **3** | 0 |
| `[sic: …]` — a single word | **0** | — | — |

**No stint fired a single `[sic:]` in 29,728 words**, so nothing could fall. That is the launch
brief working as designed, not an absence of defects: §2 of the brief told the stints their
attribution guess carries no evidential weight, and to log a suspect word unmarked for the
plate instead. They logged nineteen.

⭐ **With 9004 (46/46) and 9001 (19/19), that is 88 of 88 `[var:]` standing across three Glossa
books.** Suspicion of a quoted clause is evidence about Migne. Suspicion of a single word is
suspicion of our file.

### §0.2 ⭐⭐ EVERY ONE OF THE 17 CORRECTIONS CAME FROM THE DECLINED LIST

The 23 leaf-reads spent on **fired** markers produced **no corrections at all**. All seventeen
TEI patches came from the nineteen oddities the stints logged *and refused to attribute*, plus
lines read in passing. A stint that had guessed would have spent its credibility on exactly the
wrong sites — and it is worth saying that the reverse also held: the markers they *did* fire
were right 26 times out of 26.

### §0.3 ⭐⭐⭐ THE NON-WORD PRIOR DOES NOT HOLD WITHIN A SINGLE WORK

| range | declined non-words read | verdict |
|---|---|---|
| cols 381–390 | 4 (*audit*, *actionem*, *assensionem*, the Jo 4:13–14 clause) | **4 of 4 MIGNE'S** |
| cols 399–415 | 5 (*impieretur*, *Sea*, *liguis*, *manao*, *interrogate*) | **5 of 5 OURS** |
| 9001, cols 179–244 | 6 | 6 of 6 ours |

Same author, same recension, same volume, ~200 columns apart. So
`reference_plate-sweep-rate-varies-by-work` is too weak: **the rate varies by RANGE inside one
work**, and no policy may be inherited from a sibling book. The only safe procedure is the one
the brief already mandates — log, do not attribute, and read the plate.

⚑ 9001 @0203A *magnitudino* remains the standing counter-example on the other side: a genuine
non-word that **Migne prints**. A non-word is not automatically ours, and *manao* is explicitly
not that case — its plate is clean.

### §0.4 ⚑ FIVE WITHDRAWALS ARE ONE MECHANISM: THE HYPHEN-REJOIN CLASS

Corpus Corporum **mis-rejoining a word Migne broke at a line or column turn**:

| col | ours | Migne | the break |
|---|---|---|---|
| 0361A | *sciebat* **+ orphan** *bat* | *sciebat* | `scie-` foot of col. 360 / `bat` head of 361 |
| 0399B | *impieretur* | *impleretur* | `im-` / `pleretur` |
| 0410D | *liguis* | *lignis* | `li-` / `gnis` |
| 0415A | *interrogate* | *interrogare* | `inter-` / `rogare` |

**Four readers found it independently, on four different leaves, unable to see each other.**
It manufactures a plausible non-word and **no frequency test can distinguish it from Migne's
own**. It is greppable, and it is a candidate pass over other works. The 0361A case is the
sharpest: CC resolved the hyphenation *and kept the orphan syllable as well*, so our file
printed the syllable twice.

⚑ The reader who settled *interrogate* noted that the same column prints *interroges*,
*interrogeris*, *interrogavit* and *interrogatus* correctly — **and explicitly refused to rest
its verdict on that**, because corroboration proves an error exists and never whose it is. The
ground was the printed `inter-` / `rogare`.

### §0.5 ⚑ AND THE READ RAN IN BOTH DIRECTIONS — FIVE SILENT REPAIRS

Sites where Corpus Corporum quietly **fixed Migne's own broken type**, i.e. where a `[sic:]`
would have been **true** and our clean file hid it:

| col | Migne prints | our file read |
|---|---|---|
| 0365B | *contringitur* | *constringitur* |
| 0410D | *cupidites* | *cupiditas* |
| 0414D | *Redit **sd** patriam* | *Redit ad patriam* |
| 0420C | *fierit* | *fieri* |
| 0417B | *sanctificati **iu** veritate* | *sanctificati in veritate* |

**This is the class no Vulgate collation can ever reach**, because the digitization removed the
evidence before any collation could run — the mirror of 9003's *manufactured* `judicabit` →
`judicavit`. Migne's readings are restored in `data/tei-patches/8999.json`; **the `[sic:]` each
one owes is deliberately NOT fired**, because firing one is a fresh public claim per site.

⛔ **A recorded disagreement.** The reader who found the last two argued against restoring them,
on the ground that it "would introduce two non-words." That is precisely the reasoning the
NORMALIZED convention exists to override, and 9001 settled it by restoring *Tlbi* (a wrong
dotless-l sort) and *cruxifixum*. **Our Latin is not a corrected Latin; it is Migne's page.**
The objection is recorded rather than silently resolved.

### §0.6 ⭐ *Panes nostri* IS MIGNE'S — the hardest decline in the work, and the stint would have guessed wrong

0373B, Jo 4:20. The gloss four words later is entirely about *patres adoraverunt* and
*patriarchae in montibus*, so "Our loaves" looks indefensible. Read at 12× on a native crop, the
plate sets an unambiguous italic **n** — no *t* ascender, no *r* flag — with the genuine *tr* of
*nostri* two letters away as an on-page control. **Migne's.** The stint declined for the right
reason and **had leaned toward *Patres***. A `[var:]` against Jo 4:20 is now fired and the
English stands as printed. Fourth measured case in this project of a confident attribution
refuted by the page.

### §0.7 Two corrections made to the stints' own text

1. **cruces-0000 §c.14** reported that *super Filium hominis* occurs in the Clementine "zero
   times". That was a case-sensitive search error: it occurs **twice**, Ps 79:16 and 79:18. The
   finding itself survives and is the cleaner for it — the ✓ came from a *different verse*, which
   is the documented trap in its pure form. **The pre-scan had no defect at that site.**
2. **cruces-0003's 0365B `[var:]`** quoted the normalised *constringitur*; corrected to name
   Migne's printed *contringitur*.

### §0.8 ⛔ A TRAP IN THE PLATE ITSELF, AND ONE IN OUR ANCHORS

**Leaf n215's printed right-hand corner reads `421`, not `420`.** Verified at 6×. Leaf n216
then reads `421 / 422`, so **`421` is printed twice in PL 114 and `420` is never printed at
all** — the compositor mis-numbered it. The running text settles it (n215-right runs *VERS. 37
Tu dicis* → *Sicut agnus coram tondente*, and n216-left opens with that sentence's
continuation, our `[0421A]`), so n215-right **is** column 420. A reader trusting corner numbers
alone would misfile every finding on that column by one.

**And a `<pb>` anchor is not a locator for a phrase near it.** Four sites sit in a different
band from the anchor that precedes them — *actionem personarum* at 386D not 0387A, the `[cj:]`
*nobis* at 414D not 0415A, *liberatum* at 0420A not 0420B, *Separatur* at 0422B not 0422A.
Two of those errors were mine, in the readers' briefs, and both came from reading the TEI
`<pb>` position instead of the plate. This is CLAUDE.md's band-arithmetic false positive seen
from the other side, it is **not** a defect, and nothing was patched.

---

## §1. WORK-WIDE CONVENTIONS — tested at the merge, and only one needed a sweep

⭐ **This is the first Glossa book to carry the conventions INTO the translation rather than
reconcile them afterwards.** The launch brief handed all six stints Mark's four settled axes
before they wrote a line. The merge cost on 9001 was 100+ edits and on 9004 was 147. **Here it
was 15, all on one axis.**

Every axis below was measured mechanically against the Latin, not judged by impression.

### 1. *usque ad* → ***as far as*** — the one real drift, 15 sites swept

The abridgment formula, always italic and always following `etc.,`. **Each stint was internally
consistent; the drift was purely between stints, and it split three against three:**

| stint | chunks | *as far as* | *down to* |
|---|---|---|---|
| 1 | 0000–0004 | 7 | 0 |
| 2 | 0005–0009 | 0 | 5 |
| 3 | 0010–0014 | 7 | 0 |
| 4 | 0015–0019 | 0 | 8 |
| 5 | 0020–0023 | 12 | 0 |
| 6 | 0024–0027 | 0 | 2 |

Settled on **as far as** — the within-work majority (26 to 15) *and* the form 9001 uses
throughout, so Mark and John now agree. All 15 normalised; the count is now 41 / 0.

⚑ **Only the italic formula was touched.** Unitalicised "down to" is ordinary prose ("goes down
to Capharnaum", "down to the last times of Domitian") and was left alone — contrasting two
different word classes is how the 9001 merge nearly manufactured a *throng*/*turba*
inconsistency that was not there.

⚑ Stint 6 flagged this axis but misread its shape, reporting a 2:1 split with chunk 0000 on the
*down to* side. 0000 carries no instance of the formula at all; its "down to" is prose.

### 2–5. The four inherited axes — ALL HELD, NO EXCEPTION FORCED

Measured across the whole work:

| axis | Latin | English | verdict |
|---|---|---|---|
| *turba* | 10 | crowd 10 | **exact 1:1** |
| *multitudo* | 4 | multitude 4 | **exact 1:1** |
| *daemon-* | 7 | demon 7 | **exact 1:1** |
| *diabolus* / *satanas* | 17 | devil + Satan 17 | 1:1 (the 18th "Satan" is inside a `[var:]` quoting the Vulgate) |
| *mysterium* | 13 | mystery 13 | **exact 1:1** |
| *sacramentum* | 19 | sacrament 19 | **exact 1:1** |
| gloss-voice archaism | — | *saith* 13, *says* 65 | **all 13 `saith` inside italic spans** — italic-membership test run mechanically, zero on a metalanguage verb |

**`natio` does not occur in this work at all** (0 instances), so nothing is flattened by the
*gentes* convention. All ten English "nation"s fall in the classes convention 4 permits: the
generic sense (divisions after the flood, *omnes gentes* at Matt 28:19, "the wise men of the
nations"), or singular *gens* of a people ("the Jewish nation", "their own nation", *pro gente*
at Jo 11:50, *gens sancta* at 1 Pet 2:9). Twenty-eight "Gentiles" carry the typology.

⚑ **A measurement trap, recorded because it cost time and would cost it again.** A naïve
`\bturba` grep matches the **verb** *turbare* (*turbavit*, *turbatur*, *turbata* — "to be
troubled"), which is a different word from the noun *turba*, and it made chunks 0017–0020 look
like five unrendered "crowds". They contain none. `\bdaemoni` likewise misses *daemones*, and
BSD `grep -o '\bnation'` matches inside *incarnation*, *damnation* and *predestination*.
**Three separate false drift signals in one merge, every one an artifact of the measuring
instrument.** Check the instrument before reporting the drift.

---

## §2. THE STINTS' OWN FILES, VERBATIM

Six files, unabridged and in range order. Each states the policy it applied *before* its
findings, so it can be judged; each records its span count against the brief's total. Where
§0 overturned or corrected something below, the correction is named there, not here.


---

<!-- ===== cruces-0000.md ===== -->

# Cruces — 8999, *Glossa ordinaria*, **Evangelium secundum Joannem**, chunks 0000–0004

Stint 1 of six. Cols **0355B–0369C** (Prologue; CAP. I, II, III to VERS. 29).
Written against `data/briefs/8999-launch-brief.md`, `translation-style.md`,
the 9741/0000 anchor pair, `src/english/9001/cruces.md` §1, and
`data/briefs/8999-lemmata-0000.txt`.

---

## (a) THE POLICY I APPLIED — stated before the findings, so it can be argued with

**1. Attribution. I made no attribution claim anywhere, and I fired no `[sic:]`.**
Brief §2 is the governing rule and I took it literally. Every defect I met in this range,
whether a real word reading oddly or a broken run, is **rendered as printed** (or, for the one
duplicated syllable, read through in the manner 9001's stints used) and **logged below with no
marker and no guess about whose it is**. Where I have an internal argument — the corrected form
prints eleven words later, the gloss expounds the other reading, the run breaks exactly at a
column anchor — I have written the argument down and then explicitly declined to convert it into
a class claim, because 9004 measured that exact reasoning at 5 right and 9 wrong. §0 below is a
list of things for the plate, not a list of accusations against Migne.

⚑ Corollary I want on the record: **`sciebat`/`bat` at the 0361A break (§0.1) is the site I would
have marked** under any earlier convention. I did not. If the plate confirms it is ours, the
right outcome is a `data/tei-patches/8999.json` entry, not a marker.

**2. `[var:]` is the only marker class I fired — eight of them, every one on a QUOTED CLAUSE,
every one cited to `sources/vulgate/clementine-flat.txt` by book chapter:verse.** None rests on
the brief's pre-scan or on recollection; I read each verse out of the file. The measured record
(9004 46/46, 9001 19/19, 11535+11550 91/92) says a clause-level `[var:]` is evidence about
Migne and a word-level suspicion is evidence about our file, so I let that asymmetry set my
threshold: a divergence gets a marker when it is **a clause, citable, and changes what the verse
says**; a divergence of word ORDER or ORTHOGRAPHY alone is logged and not marked, however real.

**3. Where the gloss itself adjudicates the divergence, I did not mark it.** Two sites
(*Joanna*/*Jona* at 0362A, and the whole 0356C punctuation dispute) print the rival readings
side by side in Migne's own type and expound the difference. The divergence is already on the
page; a `[var:]` there annotates what the reader has just been told. This is the Nicetas
calibration (a plate that carries its own apparatus settles its own marker) applied to a gloss.

**4. Inherited Mark conventions (§1 of the brief) applied from the first line.** `dicit`/`ait`
→ **says**, never *saith*, in the commentator's voice; `-eth`/`thou` only inside quoted scripture
or a printed singular address. `mysterium` → **mystery**, `sacramentum` → **sacrament**, 1:1.
`diabolus` → **devil**. **No exception was forced.** ⚑ The *turba*/*multitudo* and
*natio*/*gentes* axes have **no instance at all** in cols 0355B–0369C — neither word of either
pair occurs — so I have set no precedent on them and later stints should not read my silence as
one. `Judaei` occurs and is **the Jews** throughout; `Pharisaei` **the Pharisees**;
`Israelita` **an Israelite**.

**5. Pattern 7 / 7a / 7a⁗.** Every printed negation is carried, including where it makes the
sentence fight itself (0357C *sed non in resurrectione*; 0369A). Nothing is translated as its
opposite to rescue a clause. Punctuation follows the plate: the **missing full stop at 0368C**
(*diligit mala Et hoc est*) is carried as printed and not supplied. **Zero em-dashes** in all
five chunks.

**6. Mechanism 5 was the class I checked hardest,** it being 5-of-6 on 9001 and 5-of-8 on 9004.
Four sites in this range could have bound a reference to the easier noun; §0.3 lists them with
the case and gender that decided each, not the sense.

---

## (b) SPAN COUNT — RUN, AND IT AGREES

The brief states **168** italic spans for chunks 0000–0004. I counted the `*…*` spans in my own
Latin files:

| chunk | spans |
|---|---|
| 0000 | 0 |
| 0001 | 49 |
| 0002 | 47 |
| 0003 | 31 |
| 0004 | 41 |
| **total** | **168** |

**168 = 168. The split is correct for this range**, so I am neither short at the head nor
carrying a tail that belongs to stint 2. (0000 is the Prologue and carries no italics at all,
which is why the count is concentrated in four files.) Marker parity was also run per file:
column anchors 15/14/10/14 and body `[n:]` 8/5/10/3 all reproduce 1:1 against the Latin twins.

---

## (c) THE LEMMA DIVERGENCE LIST — all 168 spans walked

Verdicts: **=** agrees with the Clementine at the verse glossed (allowing for a lemma clipped
mid-phrase, which is this recension's normal habit and is not a divergence) · **≠M** a real
divergence, marked `[var:]` · **≠d** a real divergence, **declined** with the reason given ·
**g** not a scripture citation at all (gloss-side etymology, re-narration, or an abridgment
formula), so 7a″ has nothing to compare.

### Chunk 0001 — cols 0356C–0360A, 49 spans

| span | verdict |
|---|---|
| *In principio erat Verbum.* (×2, 0356B) | **=** Jo 1:1 |
| *Omnia per ipsum facta sunt.* | **=** Jo 1:3 |
| *usque ad* (0356C) | **g** abridgment formula |
| *Et sine ipso factum est nihil.* (×2) | **=** Jo 1:3 |
| *Nihil est quod factum est sine ipso.* | **≠d** — see §c.1 |
| *Quod factum est, erat vita in ipso.* | **≠d** — see §c.1 |
| *Et sine ipso factum est nihil. Quod factum est.* | **=** Jo 1:3 (Chrysostom's division) |
| *Sine ipso factum est nihil, quod factum est in ipso.* | **≠d** — see §c.1 |
| *Fuit homo missus.* · *Homo missus.* | **=** Jo 1:6 |
| *Erat lux vera.* | **=** Jo 1:9 |
| *Et sui eum non receperunt.* | **=** Jo 1:11 |
| *Quotquot autem receperunt.* | **=** Jo 1:12 |
| *Filios Dei fieri.* | **=** Jo 1:12 |
| *Qui non ex sanguinibus.* | **=** Jo 1:13 |
| *Et Verbum caro factum est.* (×2) | **=** Jo 1:14 |
| *Plenum gratiae et veritatis.* | **=** Jo 1:14 |
| *Hic erat quem dixi.* | **=** Jo 1:15 |
| *Qui post me venturus est.* | **=** Jo 1:15 |
| *Ante me factus est, quia prior me erat.* | **=** Jo 1:15 |
| *Et de plenitudine.* | **=** Jo 1:16 |
| *Verbum caro factum est: vidimus gloriam ejus plenam gratiae…* | **≠d** — see §c.2 |
| *Accepimus.* | **=** Jo 1:16 |
| *Gratiam pro gratia.* | **=** Jo 1:16 |
| *Per Moysen.* | **=** Jo 1:17 |
| *Deum nemo vidit unquam.* | **≠d** — see §c.3 |
| *Non videbit me homo et vivet* [Exod. XXXIII] | **≠d** — see §c.4 |
| *Sta in foramine petrae, et cum pertransiero videbis posteriora mea* [Ibid.] | **≠M** — see §c.5 |
| *Unigenitus Filius,* | **=** Jo 1:18 |
| *Haec est vita aeterna, ut cognoscant te unum verum Deum…* | **≠M** — see §c.6 |
| *Ostende mihi teipsum* [Exod. XXXIII] | **≠M** — see §c.7 |
| *quia nemo novit Patrem nisi Filius, et cui voluerit Filius revelare* [Luc. X] | **≠M** — see §c.8 |
| *Et hoc.* · *Tu quis es.* | **=** Jo 1:19 |
| *Confessus est.* | **=** Jo 1:20 |
| *Ego vox clamantis.* | **=** Jo 1:23 |
| *Elias es tu?* | **=** Jo 1:21 |
| *Non sum Elias,* | **≠d** — see §c.9 |
| *Ego vox clamantis in deserto.* (×2) | **=** Jo 1:23 |
| *Ecce agnus Dei. Isaias,* | **=** Jo 1:29/36 + a stray name inside the italics; see §0.4 |
| *Ex Pharisaeis.* | **=** Jo 1:24 |
| *Quid ergo baptizas.* | **=** Jo 1:25 |
| *Ego baptizo in aqua.* | **=** Jo 1:26 |
| *Cujus ego non sum dignus,* | **=** Jo 1:27 |
| *Haec in Bethania.* | **=** Jo 1:28 |

### Chunk 0002 — cols 0360B–0363C, 47 spans

| span | verdict |
|---|---|
| *Altera die vidit Joannes Jesum.* · *Venientem ad se, et ait.* · *Ecce agnus Dei,* | **=** Jo 1:29 |
| *Peccata mundi.* | **≠M** — see §c.10 |
| *Post me venit vir.* | **=** Jo 1:30 |
| *Ut manifestetur.* · *Baptizans.* | **=** Jo 1:31 |
| *Et testimonium.* | **=** Jo 1:32 |
| *vidit spiritum.* | **g** — see §c.11 |
| *Spiritum descendentem.* | **=** Jo 1:32 |
| *Et ego nesciebam.* | **=** Jo 1:33 |
| *usque ad* | **g** abridgment formula |
| *In labore et mente sunt differentes, in operatione indifferentes.* | **≠d** — see §c.12 |
| *Et manentem.* · *Qui baptizat.* | **=** Jo 1:33 |
| *Hic est Filius Dei.* | **=** Jo 1:34 |
| *Altera die iterum stabat Joannes.* | **=** Jo 1:35 |
| *Secuti sunt Jesum.* | **=** Jo 1:37 |
| *Conversus.* · *Quid quaeritis?* · *Ubi habitas?* | **=** Jo 1:38 |
| *Venite.* · *Die illo.* · *Hora autem erat quasi decima.* | **=** Jo 1:39 |
| *Frater Simonis Petri, unus ex duobus qui audierant a Joanne, et secuti fuerant.* | **=** Jo 1:40 (clipped before *eum*) |
| *Invenit hic primum.* · *Invenimus Messiam,* | **=** Jo 1:41 |
| *Tu es Simon filius.* · *Tu es Simon.* | **=** Jo 1:42 |
| *Filius Joanna,* | **≠d** — see §c.13 |
| *columba,* · *gratia* | **g** gloss-side etymologies |
| *In Galilaeam et invenit Philippum.* | **=** Jo 1:43 |
| *A Bethsaida civitate.* | **=** Jo 1:44 |
| *Invenit Philippus,* · *Quem scripsit Moyses.* | **=** Jo 1:45 |
| *Et dixit ei Nathanael.* · *Veni et vide,* | **=** Jo 1:46 |
| *Ecce vere Israelita.* | **=** Jo 1:47 |
| *Unde me nosti?* · *Sub ficu vidi te.* | **=** Jo 1:48 |
| *Rabbi, tu es Filius Dei.* | **=** Jo 1:49 |
| *Videbitis coelum apertum.* | **≠d** orthography only (*coelum*/*caelum*) |
| *Angelos Dei.* | **=** Jo 1:51 |
| *Super Filium hominis.* (×2) | **≠d** — see §c.14 |
| *Absit a te, Domine.* | **=** Mt 16:22, verbatim |

### Chunk 0003 — cols 0363D–0366A, 31 spans

| span | verdict |
|---|---|
| *Et die tertia.* · *Et die.* | **=** Jo 2:1 |
| *Vocatus est autem.* | **=** Jo 2:2 |
| *Deficiente.* | **=** Jo 2:3 |
| *usque ad* (×5, at 0364A ×3, 0365C, 0365D) | **g** abridgment formula |
| *Quid mihi.* | **=** Jo 2:4 |
| *Binas vel.* | **=** Jo 2:6 |
| *Et impleverunt.* | **=** Jo 2:7 |
| *Ut autem gustavit.* · *Aquam vinum factam.* | **=** Jo 2:9 |
| *Hoc fecit.* | **=** Jo 2:11 |
| *Post haec,* | **=** Jo 2:12 |
| *Et prope erat Pascha.* · *Et ascendit.* | **=** Jo 2:13 |
| *Et invenit in templo.* | **=** Jo 2:14 |
| *De funiculis.* | **=** Jo 2:15 |
| *Vae qui trahitis iniquitatem in funiculis vanitatis* [Isa. V] | **=** Is 5:18, verbatim |
| *Funiculis peccatorum suorum quisque constringitur* [Prov. V] | **≠M** — see §c.15 |
| *Qui columbas.* | **=** Jo 2:16 |
| *Zelus domus tuae.* | **=** Jo 2:17 |
| *Quod signum ostendis nobis, quia haec facis? Respondit.* | **=** Jo 2:18 |
| *Solvite.* | **=** Jo 2:19 |
| *Dixerunt ergo.* · *Quadraginta et sex.* · *Aedificatum.* | **=** Jo 2:20 |
| *Ille autem dicebat de templo corporis sui.* | **=** Jo 2:21, verbatim |
| *Cum autem.* | **=** Jo 2:23 |

### Chunk 0004 — cols 0366B–0369C, 41 spans

| span | verdict |
|---|---|
| *Erat autem homo,* · *Nicodemus nomine.* | **=** Jo 3:1 |
| *Hic venit,* | **=** Jo 3:2 |
| *Amen, amen dico.* · *Nisi quis.* · *Renatus fuerit.* | **=** Jo 3:3 |
| *Ex aqua.* | **=** Jo 3:5 |
| *Quod natum.* · *Quod natum est. Ex carne.* · *Et quod,* · *Spiritus est.* | **=** Jo 3:6 |
| *Spiritus ubi vult.* · *Et vocem ejus,* | **=** Jo 3:8 |
| *Tu es magister,* (×2) | **=** Jo 3:10 |
| *Quod scimus loquimur.* · *Et quod vidimus testamur.* | **=** Jo 3:11 |
| *Si terrena dixi vobis.* | **=** Jo 3:12 |
| *Nisi qui descendit.* | **=** Jo 3:13 |
| *Et sicut Moyses exaltavit serpentem in deserto.* · *Ita exaltari oportet Filium hominis,* | **=** Jo 3:14 |
| *Sic enim dilexit Deus.* | **≠d** — see §c.16 |
| *Mundum.* | **=** Jo 3:16 |
| *mundus* | **g** gloss-side etymology (Cosmos/*mundus*/*ornatus*) |
| *Ut Filium suum unigenitum daret, ut omnis qui credit,* | **=** Jo 3:16 |
| *Hoc est autem judicium.* · *Erant enim eorum.* | **=** Jo 3:19 |
| *Erant enim opera eorum mala.* | **≠d** — see §c.16 |
| *Qui autem facit.* (×2) | **=** Jo 3:21 |
| *Post haec.* | **=** Jo 3:22 |
| *In terram Judam, et illic demorabatur,* | **≠M** — see §c.17 |
| *et ibi morabatur et baptizabat.* | **≠M** — see §c.17 |
| *Erat autem.* | **=** Jo 3:23 |
| *Nondum enim missus fuerat Joannes in carcerem.* | **=** Jo 3:24, verbatim |
| *Facta est autem quaestio ex discipulis Joannis,* | **=** Jo 3:25 |
| *Et venerunt ad Joannem et dixerunt ei: Rabbi,* | **=** Jo 3:26 |
| *Respondit Joannes, et dixit,* · *Non potest.* | **=** Jo 3:27 |
| *Non sum ego Christus.* | **=** Jo 3:28 |
| *Hoc ergo gaudium.* | **=** Jo 3:29 |

### The eight I marked

- **§c.5 · 0358A `[var:]`** — *Sta in foramine petrae, et cum pertransiero videbis posteriora mea*,
  under an **Exod. XXXIII** siglum. The Clementine has no such sentence: Ex 33:21 *stabis supra
  petram*, 33:22 *ponam te in foramine petrae … donec transeam*, 33:23 *videbis posteriora mea*.
  Migne's is an imperative conflation of three verses, and **the gloss expounds its own wording
  word by word** — *petra*, *foramen*, *pertransiero*, *posteriora* — so the divergence is
  load-bearing, not decorative. Marked.
- **§c.6 · 0358A `[var:]`** — *ut cognoscant te **unum verum Deum*** for Jo 17:3 *ut cognoscant
  te, **solum Deum verum***. A lexical substitution (*unum* for *solum*) inside a clause adduced
  as the definition of eternal life, in a paragraph whose subject is the knowledge of the Trinity.
  Marked.
- **§c.7 · 0358A `[var:]`** — *Ostende mihi teipsum* under **Exod. XXXIII**. The Clementine offers
  *ostende mihi faciem tuam* (33:13) and *Ostende mihi gloriam tuam* (33:18); *teipsum* is in
  neither, and the gloss's argument is precisely that Moses asked to see God **himself** and did
  not. Marked, both candidates named.
- **§c.8 · 0358A–C `[var:]`** — *nemo novit Patrem nisi Filius* under **Luc. X**. Lc 10:22 prints
  *nemo scit quis sit Filius, nisi Pater: et quis sit Pater, nisi Filius*; the Matthean parallel
  (Mt 11:27 *neque Patrem quis novit, nisi Filius*) is nearer but is not what the siglum cites.
  Both given in the marker. ⚑ I state the two readings and no more: whether this is Migne's
  compositor, his copy-text, an Old Latin form or the glossator quoting from memory is a research
  question, and Pattern 14 forbids me to guess at it.
- **§c.10 · 0360A `[var:]`** — the lemma reads ***Peccata* mundi**, plural; Jo 1:29 reads
  *peccatum mundi*, singular. **The gloss immediately expounds the singular** — *Peccatum mundi
  dicitur originale peccatum* — so the printed lemma and its own exposition disagree in number on
  the same line. Marked on the lemma. (I did **not** also mark the gloss-side *qui tollit peccata*
  at 0360B: that is the commentator's own prose, not a quotation.)
- **§c.15 · 0365A `[var:]`** — *Funiculis peccatorum suorum quisque constringitur* under
  **Prov. V**. Pr 5:22 prints *et **funibus** peccatorum suorum constringitur*, with no *quisque*.
  Material because the whole paragraph turns on ***funiculi***, the cords of Jo 2:15, and Migne's
  proof-text carries the lemma's own word where the received text does not. Marked.
- **§c.17 · 0368D and 0369A, two `[var:]`** — Jo 3:22. The lemma prints *In terram **Judam**, et
  illic demorabatur* where the Clementine has *in terram **Judaeam** : et illic demorabatur **cum
  eis***; and eight lines later the same clause is re-quoted as ***et ibi morabatur** et
  baptizabat* — a second, different departure from *illic demorabatur*, **inside our own range and
  contradicting our own lemma**. Both marked, and the internal disagreement stated as the fact it
  is, with no claim about its origin.

### The eight I DECLINED, and why

- **§c.1 · 0356C, three spans — the punctuation dispute at Jo 1:3–4.** *Nihil est quod factum est
  sine ipso* (labelled ***Ordo:***), *Quod factum est, erat vita in ipso*, and Hilary's *Sine ipso
  factum est nihil, quod factum est in ipso*. All three transpose or re-divide Jo 1:3–4 rather than
  disagreeing with it, **and re-dividing that sentence is the entire subject of the paragraph**:
  Migne prints Origen's division, Chrysostom's and Hilary's one after another and labels them as
  such. A `[var:]` would annotate a divergence the page has just declared. Declined, all three.
- **§c.2 · 0357D — *Verbum caro factum est: vidimus gloriam ejus **plenam** gratiae et veritatis, et
  de plenitudine ejus nos omnes accepimus.*** Against Jo 1:14 + 1:16 this drops *gloriam quasi
  unigeniti a Patre* and reads **plenam** (agreeing with *gloriam*) for the received **plenum**
  (agreeing with *Verbum*) — the celebrated grammatical crux of that verse, resolved in Migne's
  favour. ⚠ **This is the closest call in the range and the one I would most like a second opinion
  on.** I declined because the clause is introduced by ***Quasi dicat*** — an avowed paraphrase,
  the evangelist made to summarize himself — and Pattern 14 governs *quotations*, not the gloss's
  own reconstructions. If the merge takes the other view, the marker is `[var: Vulg. Jo 1:14
  *gloriam quasi unigeniti a Patre plenum gratiae et veritatis*]` and I would not argue.
- **§c.3 · 0358A — *Deum nemo vidit **unquam***** for Clementine *umquam*. Orthography, both forms
  standard; Pattern 9. Declined.
- **§c.4 · 0358A — *Non videbit me homo et vivet***: Ex 33:20 reads *non **enim** videbit me homo et
  vivet*. A dropped connective at the head of a clipped quotation, no sense change. Declined.
- **§c.9 · 0358D — *Non sum Elias***. Jo 1:21 prints only *Non sum*; the predicate is supplied from
  the question two words earlier (*Elias es tu?*), which the lemma itself quotes. Nothing is added
  to the sense and nothing is taken from it. Declined.
- **§c.11 · 0360C — *vidit spiritum*.** Third-person, inside the gloss's own sentence
  (*ita perhibuit testimonium, scilicet* …), against Jo 1:32's first-person *vidi Spiritum*. This
  is the glossator re-narrating, not citing; the italics are Migne's way of pointing at the verse,
  not of quoting it. **g**, not a divergence. Declined.
- **§c.12 · 0360D — *In labore et mente sunt differentes, in operatione indifferentes*, under
  *unde Apostolus*.** Not in the Clementine anywhere, in any form; I searched the whole file.
  ⛔ **I decline a `[var:]` on the ground that there is nothing to cite**: Pattern 14 requires a
  received reading, and I cannot supply one for a sentence I cannot locate in the canon. Logged
  here instead so the plate read has it. The attribution to *Apostolus* stands untouched per the
  brief's rule on this recension's sigla.
- **§c.13 · 0362A — *Filius **Joanna***** for Jo 1:42 *filius **Jona***. A real divergence. Declined
  because **Migne's very next sentence adjudicates it**: *Jona dicitur et Joanna indifferenter.
  Jona* columba, *Joanna* gratia *interpretatur.* Both forms are on the page, in his type, with
  their etymologies. A marker here would tell the reader what the gloss has just told him.
- **§c.14 · 0363C — ***Super** Filium hominis*** (twice) for Jo 1:51 ***supra** Filium hominis*.
  ⚑ **Worth flagging as a method finding**: the brief's pre-scan marks this span **✓ Clementine
  verbatim**, and the ✓ came from somewhere other than the verse glossed, exactly as the brief
  warned a ✓ can. ⛔ **CORRECTED AT THE MERGE:** this stint reported that *super Filium hominis*
  occurs in the Clementine **zero times**, which is a case-sensitive search error on its part.
  It occurs **twice — Ps 79:16 and Ps 79:18**, *et super filium hominis quem confirmasti tibi* —
  and the pre-scan is therefore behaving exactly as `lemma-inventory.mjs` specifies (it
  lower-cases both sides). **The tool has no defect here and must not be "fixed".** The finding
  itself survives untouched, and is in fact the cleaner for it: this is the documented trap in
  its pure form — a lemma matching a *different verse* verbatim while diverging from its own. The
  divergence is real; I declined it because *super*/*supra* are interchangeable prepositions here
  and no sense turns on the choice. **But a stint trusting the ✓ would never have looked.**
- **§c.16 · 0368A and 0368C — two transpositions in Jo 3.** *Sic enim **dilexit Deus*** for *Sic
  enim **Deus dilexit***; and *Erant enim **opera eorum mala*** for *erant enim **eorum mala
  opera***. Word order only, no sense change. ⚑ The second is the more interesting: the **same
  chunk prints *Erant enim eorum* four lines earlier, in the received order**, so Migne has the
  clause both ways within one paragraph. Logged, declined, and handed to the plate.

---

## (d) THIS RANGE'S OWN CRUCES, BY COLUMN

### §0.1 The one site I would have marked, and did not

**0360D–0361A — `nam sciebat` / `[0361A]` / `bat eum Filium Dei esse`.** The syllable *bat*
stands alone at the head of column 0361A, immediately after a complete *sciebat* at the foot of
0360D. The shape is a hyphenated line-break (`scie-` / `bat`) whose first half has been expanded
and whose second half has been kept.

⛔ **I do not know whose it is and I have not said.** The reasoning that it must be the
digitization's — a duplicated fragment, sitting exactly on a column boundary, no lexeme lost —
is the reasoning 9004 measured at 5 right and 9 wrong, and 9001's `magnitudino` proved that a
genuine non-word can be Migne's. I have therefore **read through it** (the English reads "for he
knew him to be the Son of God"), exactly as two of 9001's five stints did with their six
non-words, and fired nothing. The verb survives, so 7a⁗ is satisfied. **Plate: leaf n186
(cols 361/362), left column, band A, first line.** If it is ours, this is a `8999.json` patch,
not a marker.

### §0.2 Real, well-formed words that read oddly — logged, unmarked, no attribution claimed

| col | printed | what one expects | note |
|---|---|---|---|
| 0356C | *quae concordant cuncti potentiae Divinitatis* | — | the tail of an abridged Augustine passage; *concordare* with a dative is unusual and the clause will not construe cleanly. Rendered as closely as the words allow ("which all agree unto the power of the Divinity"). No conjecture offered. |
| 0357C | *sed venturus in praedicatione, in morte, **sed non** in resurrectione* | *et in resurrectione*? | the printed **non** is carried (7a: every negation the Latin prints appears in the English). As it stands the sentence denies of the resurrection what it has just affirmed of preaching and death. That contradiction is the evidence, and I have not smoothed it. |
| 0358B | *Unde **nec** ipse Moyses **nedum** per eum data sit gratia* | — | no main verb for *Moyses*; *nedum* + subjunctive is doing work the syntax cannot support. Rendered literally and left standing. |
| 0359D | *altera **circa** non longe ab Hierusalem* | *citra* | ⚑ **This is the textbook §2 case and I want it on the record as one.** *citra* prints **eleven lines later** in the same paragraph (*Illa quae est **citra** Jordanem*), and the antithesis *trans*/*citra* is the whole structure of the passage. That is the "the correct form prints eleven words later" argument by name — the one 9004 identified as a **failed** attribution test, and 9001 @0187D then confirmed as failed a second time, where the obvious patch (*Nunquid*) was the wrong one. *circa* is a real Latin word. Rendered "round about". **No marker.** |
| 0362B | *unde a petra Christo dicitur Petrus, **infirmus** in illo* | *firmus*? | in a sentence whose point is that Peter is named from the rock, "weak in him" pulls against the figure. *infirmus* is a real word and the paradox is available (weak in himself, firm in Christ). Rendered "weak in him", conjecture withheld. |
| 0362B | *Nam **quibus quidam** a prima aetate debebat virtus clarescere* | *quidem* | inside the CHRYS. note. Real word, one letter from the expected particle. Untouched. |
| 0363D | *tertia die … **post tempus**, id est ante legem et sub lege* | *post tempora*? | a singular governing two epochs. Carried. |
| 0364B | *Architriclinus* | *architriclinius* (Vulg.) | a real form of the word and this recension's spelling; Pattern 9, no marker, no crux beyond this line. |
| 0366C | *si tu non natus fueris desuper, **et** dogmatum susceperis certitudinem* | *nec*? | inside the CHRYS. note; the conditional's second limb is positive where the sense wants a negative. **The printed *et* is rendered as *and*.** Repairing it to "nor" would be mechanism 3 (a smoothed connective), which the corpus sweep found leaves no lexical trace at all. Logged instead. |
| 0367B | *Qua in potestate habet cujus cor illustret* | — | rendered "By which he has in his power whose heart he shall enlighten." Construes, barely. Flagged because the opening *Qua* may be a real word standing where *Quia* belongs, and I cannot tell. |

### §0.3 Mechanism 5 — the four sites where a reference could have been re-bound

Checked on case and gender, not on which reading reads more easily. Recorded so the blind read
can disagree with a stated decision rather than guess at an unstated one.

1. **0358D–0359A, *praecessurus … judicaturum … judicandum*.** *Sed ipse Elias praecessurus, in
   potestate **judicaturum**, Joannes figuraliter Elias eumdem **judicandum***. The two accusative
   participles are **active** and **passive** and they are the entire point: Elias goes before the
   Christ who **will judge**, John before the same Christ who **will be judged**, so that the two
   heralds answer the two advents. Collapsing them into one voice destroys the antithesis. The
   English keeps them opposed.
2. **0367C, *qui omnibus praeest*.** *Non insultat ei, ut superior eo habeatur **qui omnibus
   praeest***. The relative attaches to the **subject** of *insultat* — Christ, who is set over
   all — not to Nicodemus, the nearer noun and the easier reading. Nicodemus is the *magister in
   Israel*; he is not set over all, and the next clause has Christ willing him to be born of the
   Spirit. Rendered accordingly.
3. **0360B, *reconciliat nos ei*.** *Filius Dei in quo Patri congruit et peccata dimittendo
   reconciliat nos **ei***. *ei* is the Father, named three words earlier in the dative, not
   Christ. Rendered "reconciles us to him", with the Father as the antecedent established by the
   clause it stands in.
4. **0361C, *illi personam respondent*.** *qui rem, non personam, quid, non quem, ne se videatur
   ostendere, **illi** personam respondent*. Two different subjects in one sentence — the
   questioner asks a *thing*, **they** answer a *person* — and the easy reading merges them. Kept
   distinct.

### §0.4 Structure and punctuation carried as printed

- **0359A — an italic span closing over a proper name.** Migne's italics run
  *…Ecce agnus Dei. **Isaias,*** and then break to roman for *Hoc de Joanne prophetavit*. The name
  is inside the lemma's italics though it belongs to the sentence that follows. **Reproduced with
  the boundary exactly where the plate has it**; the English reads *…Behold the Lamb of God.
  Isaias,* / prophesied this of John. Not a defect I can attribute, and no marker: an italic
  boundary is not type.
- **0368C — a full stop that is not there.** *…odit lucem et diligit mala Et hoc est quod dicit:*
  Pattern 8 forbids supplying a mark the plate lacks, so the English runs on in the same way
  ("…and loves evil things And this is what he says:"). ⚑ 9001 @0202D is the neighbouring case in
  the opposite direction — a full stop the digitization **added** at a hyphenated break — and that
  stint was right to carry it and say it could not tell whose it was. Same here.
- **0365C — *Quia signum quaerunt quare solita commercia de templo ejicit?*** A question mark
  closing what is grammatically not a question. Preserved (Pattern 8).
- **0367B — *Quae quia incognita sunt carnali, iterum quaerit? Quomodo possunt haec fieri…*** The
  question mark falls before the question rather than after it. Preserved.
- **0365C — *Anatole … dysme … arctos*.** Greek words in Latin letters, as Migne sets them. Left
  in Latin script; §5's single Greek-script word is at chunk 0023 and does not concern this range.
- **0364B, 0368B — *triclinium*, *mundus*.** Kept in italic Latin where the gloss is expounding the
  word itself (the *triclinium* as three ranks of diners; *Cosmos*/*mundus*/*ornatus*), per the
  Register rule for terms whose English equivalent would make the gloss explain nothing.

### §0.5 One note that stays a note

The `[n:]` markers in this range are **all citations or attribution sigla** — `(AUG.)`, `(ORIG.)`,
`(HIER.)`, `(CHRYS.)`, `(ID.)`, `(Exod. XXXIII)`, `(Ibid.)`, `(Luc. X)`, `(Isa. V)`, `(Prov. V)`.
None is editorial prose, so **no `[nt:]` conversion is owed anywhere in chunks 0000–0004**. The
substantial extracts under `[n: (AUG.)]` at 0366C, `[n: (CHRYS.)]` at 0366C and `[n: (HIER.)]` at
0361A are **body text following a siglum**, not note contents — the marker is the siglum alone —
and they are translated as body text, which is how 9001 handled the same shape.

### §0.6 What I am handing to the plate read, in the order I would look

1. **0361A** *bat* (§0.1) — the only site in the range where a marker was genuinely in question.
2. **0359D** *circa* / *citra* (§0.2) — and read the whole line, per 9001's addendum C, which
   found two real defects four words away from what it went looking for.
3. **0362B** *infirmus* — decides nothing in the translation, but decides whether the figure is a
   paradox or a slip.
4. **0357C** *sed non in resurrectione* — the sentence contradicts itself as printed.
5. **0366C** *et dogmatum susceperis* — a connective, and mechanism 3 leaves no trace.
6. **0360D** *In labore et mente sunt differentes…* (§c.12) — an unlocatable "Apostle."


---

<!-- ===== cruces-0005.md ===== -->

# Cruces — 8999, *Glossa ordinaria*, **Evangelium secundum Joannem**, chunks 0005–0009

Stint 2 of six. Cols **0369C–0380C** (chunk frontmatter bands 0369D–0380C), covering John
3:30–36, 4:1–54 and 5:4–43. Governed by `data/briefs/8999-launch-brief.md`; the four Mark
conventions of §1 were applied from the first line, not reconciled afterwards.

---

## (a) THE POLICY I APPLIED — stated before the findings, so it can be argued with

**1. Attribution.** I fired **no `[sic:]` and no `[cj:]`.** Every defect I found is logged
below with the printed form named and **no claim about whose it is**. Where our Latin holds a
real, well-formed word that reads oddly, and where it holds a non-word, I rendered or carried
it as printed and said plainly that I cannot tell Migne's type from Corpus Corporum's
transcription. This is the brief's §2 operating rule taken literally, and it cost me two
findings I would otherwise have marked with confidence — 0373B *Panes* and 0379D *Sicut
autem*, both below. **On the brief's own measurement, that confidence would have been worth
nothing**, and both sites are handed to the plate read intact rather than half-decided.

**2. `[var:]`.** I fired **three**, all on **quoted clauses**, all cited to
`sources/vulgate/clementine-flat.txt` by book chapter:verse, and all where **the gloss's own
argument rests on the divergent words**:

| col | lemma | witness |
|---|---|---|
| 0370D | *Mundas eam lavacro aquae **et** verbo vitae* | Vulg. Eph 5:26 *mundans lavacro aquae **in** verbo vitae* |
| 0373D | *Vos adoratis **Patrem quem** nescitis* | Vulg. Jo 4:22 *vos adoratis **quod** nescitis* |
| 0373D | *nisi credideris non **intelliges*** | Vulg. Is 7:9 *si non credideritis, non **permanebitis*** |

Each is a multi-word, semantically coherent divergence of the kind an OCR letter-swap cannot
manufacture. **I declined every single-word divergence, without exception** — including four I
believe are real errors (0372B *Dixit*, 0379C *veniet*, 0373B *Panes*, 0379D *autem*). That
line is deliberate and it is where the brief's measured class split puts it.

**3. Negation.** Every `non`, `nec`, `neque`, `nisi`, `nullus`, `nihil`, `nunquam` the Latin
prints is in the English, including where it makes the sentence awkward (0377A *nec in
potestate ideo magnum*, rendered "neither in power was it therefore great"). None was added.

**4. Mechanism 5.** At each site where a pronoun, relative or participle could bind either of
two nouns, I checked case and gender and **rendered so as to keep the ambiguity the Latin has**
rather than resolve it to the easier noun. The four sites are listed in §(d): 0370B *se
distinguit a Christo*, 0371D *privaverunt*, 0375C *Judaeis spiritualiter edoctis*, 0377B *quae
… cessare jubet*.

**5. Register.** Gloss voice not archaised; no `-eth` on a metalanguage verb anywhere in my
range. Every `saith` (3) sits inside an italic lemma rendering *Dicit*. Pattern 17 applied as a
NUMBER rule: *thou* for singular *tu* (the Samaritan woman throughout ch. IV, the healed man at
0377A–B), *you* for plural *vos* (the Jews at 0378A, 0380A–B).

**6. Repairs that would have been invisible, and were not made.** Two are recorded in §(d) as
*written and removed*, because 7a′ says a crux describing a repair is not the same as a text
that carries the ruling: the supplied `?` at 0376D, and the supplied `?` I nearly put on
0377C's *cur mihi invidetis … operor.*

---

## (b) SPAN COUNT — RUN, AND IT AGREES

`data/briefs/8999-lemmata-0005.txt` declares **148 spans** for chunks 0005–0009.
Counting the `*…*` spans in the body of my own five Latin files (frontmatter excluded):

| chunk | spans |
|---|---|
| 0005 | 13 |
| 0006 | 46 |
| 0007 | 37 |
| 0008 | 51 |
| 0009 | 1 |
| **total** | **148** |

**148 = 148.** I went further and diffed the two sequences rather than only the totals: the
brief's 148 span texts and my 148, both in document order, are **byte-identical, line for
line**. The head of my range (*Illum oportet crescere*, 0369C) and its tail (*Si alius*,
0380B) are both mine, and neither is a neighbour's. `scripts/split-lemma-brief.mjs` is correct
for this range.

Marker parity was checked the same way, per chunk, against the Latin twin: column anchors
**4 / 15 / 10 / 14 / 1**, `[n: …]` notes **1 / 5 / 1 / 5 / 0**, body lines **7 / 31 / 19 / 31 /
1** — all equal to the Latin, all in the same order and position. `verify-english.mjs 8999`
reports **no warning against any of my five chunks**; the only failures it prints are the
missing chunks of other stints' ranges.

⚑ One anchor was lost and restored during drafting: **[0380C] was dropped from 0009** on the
first write and put back before anything else was done. Recorded because the brief asks that
markers be counted before writing each file, and this is what that check is for.

---

## (c) THE LEMMA DIVERGENCE LIST — all 148 spans, in order, with verdicts

**Verdict key.** *conforms* = the printed Latin agrees with the Clementine at the verse being
glossed, allowing for the span's own cut (Migne quotes incipits and tails constantly, and a cut
is not a variant). *n/a* = not a scripture span (an *usque ad* abridgment formula, or the
glossator's own words in italic type). *DECLINED* = a real divergence from the Clementine on
which I fired no marker, with the reason. *MARKED* = a `[var:]` fired.

⛔ **The pre-scan's ✓ cleared three genuine divergences** — nos. 37, 139 and (partly) 20 —
exactly as its own header warned it could: the sequence occurs *somewhere* in the Clementine
and so passes, while diverging at the verse in hand. No. 139 is the sharpest instance, and I
found it only by reading the line rather than the mark.

### Chunk 0005 — cols 0369C–0370C (John 3:30–4:1)

1. [0369C] VERS. 30.-- *Illum oportet crescere.* — conforms, Jo 3:30.
2. [0369C] *Illum oportet crescere.* — conforms; re-quotation of no. 1.
3. [0369C] VERS. 31.-- *Me autem minui.* — conforms to Jo 3:30b. Migne's address (31) is one ahead of the Clementine's versification; a verse-number, not a text divergence — it rides as printed and takes no marker (brief §6.2 family).
4. [0369C] *Qui desursum venit, super omnes est,* — conforms, Jo 3:31.
5. [0370A] *usque ad* — n/a, abridgment formula.
6. [0370A] *De terra.* — conforms, Jo 3:31.
7. [0370A] *Et quod vidit.* — conforms, Jo 3:32.
8. [0370A] *Signavit quia Deus.* — conforms, Jo 3:33, cut before *verax est*.
9. [0370A] *Verax est. Quem enim misit Deus.* — conforms, Jo 3:33b + 3:34a. The full stop is Migne's splice of two verses, not a divergence.
10. [0370B] *Verba Dei loquitur.* — conforms, Jo 3:34.
11. [0370B] *Non enim ad mensuram dat Deus spiritum. Pater diligit Filium et omnia dedit in manu ejus.* — conforms **verbatim**, Jo 3:34b + 3:35. The longest clean span in the range.
12. [0370C] VERS. 36.-- *Qui credit in Filium habet vitam aeternam: qui autem,* — conforms, Jo 3:36 (Clementine points with `;`, Migne with `:` — punctuation only, carried).
13. [0370C] *Sed ira Dei manet super eum.* — conforms, Jo 3:36.

### Chunk 0006 — cols 0370C–0374B (John 4:1–24)

14. [0370C] VERS. 1.-- *Ut ergo cognovit.* — conforms, Jo 4:1.
15. [0370C] *Et baptizat.* — conforms, Jo 4:1.
16. [0370D] *Mundas eam lavacro aquae et verbo vitae [n: (Ephes. V)]* — **DIVERGENCE, MARKED `[var:]`.** See §(d) 0370D.
17. [0370D] VERS. 2.-- *Sed discipuli.* — conforms, Jo 4:2.
18. [0370D] VERS. 3.-- *Reliquit Judaeam.* — conforms, Jo 4:3.
19. [0370D] *Et abiit.* — conforms, Jo 4:3.
20. [0371A] *Et abiit in Galilaeam,* — divergence: Clementine Jo 4:3 has *et abiit **iterum** in Galilaeam*. **DECLINED.** The span is a cut (it closes on a comma), the dropped word is an adverb of repetition, and nothing in the gloss — which expounds Galilee as the spiritual sense of the letter — turns on it. A dropped short word is also precisely what our transcription produces. No marker; noted for the plate only because the pre-scan's ✓ conceals it.
21. [0371A] *In Galilaeam.* — conforms.
22. [0371A] VERS. 4.-- *Oportebat.* — conforms, Jo 4:4.
23. [0371B] VERS. 5.-- *Venit ergo.* — conforms, Jo 4:5.
24. [0371B] *Quae dicitur Sichar.* — conforms, Jo 4:5.
25. [0371B] VERS. 6.-- *Erat autem,* — conforms, Jo 4:6.
26. [0371B] *Jesus ergo fatigatus,* — conforms, Jo 4:6.
27. [0371C] *Sedebat.* — conforms, Jo 4:6.
28. [0371C] *Supra.* — conforms, Jo 4:6 (*supra fontem*).
29. [0371C] VERS. 7.-- *Venit.* — conforms, Jo 4:7.
30. [0371D] *usque ad* — n/a, abridgment formula.
31. [0371D] *Da mihi.* — conforms, Jo 4:7, cut before *bibere*.
32. [0371D] *Da mihi.* — conforms; re-quotation of no. 31.
33. [0371D] VERS. 8.-- *Discipuli enim.* — conforms, Jo 4:8.
34. [0371D] VERS. 9.-- *Dicit ergo.* — conforms, Jo 4:9.
35. [0371D] *Non enim,* — conforms, Jo 4:9 (*non enim coutuntur*).
36. [0371D] VERS. 10.-- *Respondit Jesus.* — conforms, Jo 4:10.
37. [0372B] VERS. 11.-- *Dixit ei mulier.* — divergence: Clementine Jo 4:11 reads ***Dicit** ei mulier*, present. **DECLINED, and the pre-scan cleared it wrongly** (*dixit ei mulier* occurs elsewhere in the Clementine, so the phrase search passed). One word, one tense, and Migne prints *Dicit ei Jesus* correctly at no. 45 six verses later in the same chunk — which is the "the correct form prints a few lines later" argument the brief names as a *failed* attribution test. It proves an error exists, not whose. No marker; **for the plate.**
38. [0372B] VERS. 12.-- *Nunquid tu.* — divergence orthographic only (*Nunquid* / Clementine *Numquid*). **DECLINED:** an attested medieval spelling with no English exponent, Pattern 9. Not a defect.
39. [0372C] *Et ipse ex eo.* — conforms, Jo 4:12.
40. [0372C] VERS. 13.-- *Qui autem.* — conforms, Jo 4:13.
41. [0372C] VERS. 14.-- *Aqua.* — conforms, Jo 4:14.
42. [0372C] VERS. 16.-- *Vade, voca virum tuum,* — conforms, Jo 4:16.
43. [0372D] *vade, voca virum tuum.* — conforms; re-quotation, lower-cased as printed.
44. [0372D] VERS. 17.-- *Respondit mulier.* — conforms, Jo 4:17.
45. [0372D] *Dicit ei Jesus.* — conforms, Jo 4:17.
46. [0372D] VERS. 18.-- *Quinque enim viros.* — conforms, Jo 4:18.
47. [0373B] *Quem nunc habes, non est tuus vir.* — divergence in order: Clementine Jo 4:18 *et nunc, **quem** habes, non est tuus vir*. **DECLINED:** the span opens mid-verse, so *Quem* is fronted by the cut and not by a variant reading. Every word, and the negation, is present; the sense is identical.
48. [0373B] VERS. 19.-- *Quia propheta tu es.* — divergence in order: Clementine Jo 4:19 *quia propheta **es tu***. **DECLINED:** English has no exponent for Latin word order, and no word of the gloss (which turns on the woman's *partial* understanding) depends on it.
49. [0373B] VERS. 20.-- *Panes nostri,* — **DIVERGENCE. MARKER DECLINED. The most important crux in the range** — Clementine Jo 4:20 reads ***Patres** nostri in monte hoc adoraverunt*. Rendered as printed, "Our loaves". Full reasoning at §(d) 0373B.
50. [0373B] VERS. 21.-- *Mulier.* — conforms, Jo 4:21.
51. [0373D] *Vos adoratis Patrem quem nescitis,* — **DIVERGENCE, MARKED `[var:]`.** See §(d) 0373D.
52. [0373D] *Quia salus ex Judaeis est,* — conforms, Jo 4:22.
53. [0373D] *Crede mihi.* — conforms, Jo 4:21.
54. [0373D] *Quia nisi credideris non intelliges [n: (Isa. VII)]* — **DIVERGENCE, MARKED `[var:]`.** See §(d) 0373D.
55. [0373D] *Quando neque in monte.* — conforms, Jo 4:21.
56. [0374A] *quia salus ex Judaeis est,* — conforms; re-quotation of no. 52.
57. [0374A] VERS. 23.-- *Sed venit hora, et nunc est, quando.* — conforms, Jo 4:23.
58. [0374A] *In spiritu et veritate.* — conforms, Jo 4:23.
59. [0374A] VERS. 24.-- *Spiritus est Deus.* — conforms, Jo 4:24.

### Chunk 0007 — cols 0374B–0376D (John 4:25–54)

60. [0374B] *Scio quia Messias venit, qui dicitur,* — conforms, Jo 4:25.
61. [0374B] *Ille nobis annuntiabit omnia. Dicit ei Jesus.* — divergence: Clementine Jo 4:25 *cum ergo venerit ille, nobis annuntiabit omnia*. **DECLINED:** Migne drops the temporal clause and *ille* becomes the subject of the surviving words. That is an abridgment of a lemma, of the kind this recension makes on every page; the words retained are verbatim, and the gloss expounds *Messias*, not the dropped clause.
62. [0374B] *Ego sum qui loquor.* — conforms, Jo 4:26, cut before *tecum*.
63. [0374C] *Ego sum Messias,* — **n/a: not a scripture citation.** These are the glossator's own words, introduced by his own *unde dicit* and set in italic because Migne italicises them; no verse reads so. Nothing is owed against the Clementine, and no marker.
64. [0374C] *Reliquit ergo hydriam,* — conforms, Jo 4:28.
65. [0374C] VERS. 27.-- *Et mirabantur quia.* — conforms, Jo 4:27.
66. [0374C] *qui venit quaerere quod perierat.* — divergence: Lc 19:10 reads *Venit enim Filius hominis quaerere, **et salvum facere** quod perierat*. **DECLINED:** the words are woven into the gloss's own comparative clause (*sicut qui venit…*), not adduced as a proof-text, and the omission is the author's compression of an allusion. Pattern 14 is for scripture quoted *as* scripture.
67. [0374C] VERS. 28.-- *Reliquit ergo.* — conforms.
68. [0374C] *ego sum,* — conforms; re-quotation of Jo 4:26.
69. [0374C] VERS. 29.-- *Venite et videte.* — conforms, Jo 4:29.
70. [0374C] VERS. 33.-- *Nunquid aliquis attulit.* — orthographic only (*Nunquid*/*Numquid*), Jo 4:33. **DECLINED**, Pattern 9, as no. 38.
71. [0374C] VERS. 34.-- *Meus cibus est.* — conforms, Jo 4:34.
72. [0374C] *Meus cibus est ut faciam,* — conforms, Jo 4:34.
73. [0374C] *Voluntatem ejus.* — conforms, Jo 4:34.
74. [0374C] VERS. 35.-- *Nonne vos dicitis.* — conforms, Jo 4:35.
75. [0374C] *Levate oculos vestros.* — conforms, Jo 4:35.
76. [0374C] VERS. 36.-- *Ut et qui seminat.* — conforms, Jo 4:36.
77. [0374C] VERS. 38.-- *Ego misi vos.* — conforms, Jo 4:38.
78. [0374C] *Laboraverunt, et vos in labores eorum introistis.* — conforms, Jo 4:38, cut before *alii*.
79. [0374C] VERS. 40.-- *Cum venissent.* — conforms, Jo 4:40.
80. [0375C] *Et mansit ibi duos.* — conforms, Jo 4:40, cut before *dies*.
81. [0375C] VERS. 42.-- *Et mulieri dicebant.* — conforms, Jo 4:42.
82. [0375C] VERS. 43.-- *Ipsi enim audivimus.* — conforms to Jo 4:42. Migne's address (43) is again one ahead of the Clementine's versification; verse-number, not text.
83. [0375C] VERS. 44.-- *Quia propheta.* — conforms, Jo 4:44.
84. [0375C] VERS. 46.-- *Et erat quidam regulus cujus filius.* — conforms, Jo 4:46.
85. [0375C] VERS. 47.-- *Et rogabat.* — conforms, Jo 4:47.
86. [0375C] *Nisi signa et prodigia,* — conforms, Jo 4:48.
87. [0375C] *Dic verbo et sanabitur puer [0376B] meus [n: (Matth. VIII)]* — conforms, Mt 8:8, cut before *sed tantum*. (The column anchor falls **inside** the italic span; it is reproduced in place, inside the English span.)
88. [0376B] *Non inveni tantam fidem in Israel.* — conforms **verbatim**, Mt 8:10. ⚑ Worth saying because it is the one place a conformation would have been easy: the parallel Lc 7:9 reads *nec in Israel tantam fidem inveni*, and Migne's own siglum names Matthew. He prints Matthew's wording. No divergence.
89. [0376B] *Nisi signa et prodigia.* — conforms, Jo 4:48.
90. [0376B] VERS. 48.-- *Nisi signa.* — conforms, Jo 4:48.
91. [0376B] *Et prodigia.* — conforms, Jo 4:48.
92. [0376C] *Descende.* — conforms, Jo 4:49.
93. [0376C] *Vade, filius tuus.* — conforms, Jo 4:50, cut before *vivit*.
94. [0376C] *Credidit ipse.* — conforms, Jo 4:53.
95. [0376C] *Hoc iterum secundum signum fecit Jesus.* — conforms, Jo 4:54.
96. [0376C] VERS. 54.-- *Hoc iterum secundum signum fecit [0376D] Jesus cum venisset a Judaea in Galilaeam.* — conforms **verbatim**, Jo 4:54. (Anchor inside the span, reproduced in place.)

### Chunk 0008 — cols 0376D–0380B (John 5:4–42)

97. [0376D] VERS. 4.-- *Angelus autem.* — conforms, Jo 5:4.
98. [0376D] VERS. 5.-- *Triginta et octo.* — conforms, Jo 5:5.
99. [0376D] VERS. 6.-- *Vis sanus fieri.* — conforms, Jo 5:6 in wording. ⚑ **In punctuation it does not**: the Clementine closes with `?`, Migne with a full stop. Pattern 8 governs, the full stop is carried, and the `?` I had drafted was removed — see §(d) 0376D.
100. [0376D] VERS. 8.-- *Tolle grabatum tuum.* — conforms, Jo 5:8.
101. [0376D] VERS. 9.-- *Et ambulabat.* — conforms, Jo 5:9.
102. [0376D] VERS. 10.-- *Dicebant ergo.* — conforms, Jo 5:10.
103. [0376D] *Tolle grabatum,* — conforms, Jo 5:10.
104. [0376D] *Non licet.* — conforms, Jo 5:10.
105. [0376D] VERS. 11.-- *Respondit eis.* — conforms, Jo 5:11.
106. [0377C] VERS. 13.-- *Nesciebat quis esset.* — conforms, Jo 5:13.
107. [0377C] VERS. 14.-- *In templo.* — conforms, Jo 5:14.
108. [0377C] *Noli peccare.* — conforms, Jo 5:14, cut before *jam*.
109. [0377C] VERS. 16.-- *Quia haec faciebat in sabbato.* — conforms, Jo 5:16.
110. [0377C] VERS. 17.-- *Jesus autem respondit.* — conforms, Jo 5:17.
111. [0377C] VERS. 18.-- *Respondit itaque Jesus.* — conforms, Jo 5:18 (its closing words).
112. [0377C] VERS. 19.-- *Amen, amen dico vobis.* — conforms, Jo 5:19.
113. [0378B] *Non potest filius.* — conforms, Jo 5:19, cut before *a se facere quidquam*.
114. [0378B] *Haec et Filius.* — conforms, Jo 5:19.
115. [0378B] VERS. 20.-- *Omnia demonstrat.* — conforms, Jo 5:20.
116. [0378B] *Et majora his demonstrabit ei,* — conforms, Jo 5:20.
117. [0378C] *Sicut enim Pater suscitat mortuos et vivificat.* — conforms, Jo 5:21.
118. [0378C] *Majora his.* — conforms, Jo 5:20.
119. [0378C] VERS. 21.-- *Sicut enim Pater suscitat.* — conforms, Jo 5:21.
120. [0378C] *Sic et Filius. [n: (AUG.)]* — conforms, Jo 5:21. (Note marker inside the italic span; reproduced in place.)
121. [0378D] *usque ad* — n/a, abridgment formula.
122. [0378D] *quia Filius hominis est.* — conforms, Jo 5:27.
123. [0378D] VERS. 23.-- *Ut omnes honorificent.* — conforms, Jo 5:23.
124. [0378D] *Qui non honorificat. [n: (AUG.)]* — conforms, Jo 5:23. (Note marker inside the span.)
125. [0378D] VERS. 24.-- *Quia qui,* — conforms, Jo 5:24.
126. [0379A] *Audit et credit.* — **n/a: not a verbatim citation but the glossator's own catchword**, splicing Jo 5:24's *qui verbum meum **audit**, et **credit** ei qui misit me* into two words. His very next sentence re-quotes the clause in full and correctly (*Audit verbum meum et credit, non mihi, sed ei qui me misit*), which is what shows the two-word form to be his shorthand rather than a variant. No marker.
127. [0379A] *Sed transiit.* — conforms, Jo 5:24.
128. [0379A] *Amen, amen dico vobis, quia venit hora et nunc est,* — conforms, Jo 5:25 (the Clementine's comma before *et nunc* is punctuation only).
129. [0379A] VERS. 25.-- *Quia venit.* — conforms, Jo 5:25. ⚑ Note the **present** tense here, printed correctly, against no. 137 below.
130. [0379B] *Vocem Filii.* — conforms, Jo 5:25.
131. [0379B] *Sicut enim Pater. [n: (AUG.)]* — conforms, Jo 5:26. (Note marker inside the span.)
132. [0379B] *usque ad* — n/a, abridgment formula.
133. [0379B] *In semetipso.* — conforms, Jo 5:26.
134. [0379B] VERS. 27.-- *Et potestatem.* — conforms, Jo 5:27.
135. [0379C] *Beati mundo corde, quoniam ipsi Deum videbunt [n: (Matth. V)]* — conforms **verbatim**, Mt 5:8. (Note marker inside the span.)
136. [0379C] *usque ad* — n/a, abridgment formula.
137. [0379C] VERS. 28.-- *Quia veniet hora.* — divergence: Clementine Jo 5:28 reads *quia **venit** hora*, present. **DECLINED.** One word, one letter, in the tense — the exact profile an OCR pass manufactures, and the class the brief assigns to our file. ⚠ **The tempting argument, and I am naming it because it is the shape the brief says has failed:** the exposition here *does* set the future resurrection of the flesh against the present resurrection of the mind at no. 129, and no. 129 prints *venit* correctly eight lines earlier — so a future at v. 28 fits the argument perfectly. **That is internal corroboration, and it proves only that the two forms differ on the page, never who set them.** The gloss states the distinction in its own words (*ita etiam hic est auctor de resurrectione carnis*) and never quotes the tense. No marker; **for the plate.**
138. [0379C] VERS. 30.-- *Non possum ego a meipso facere.* — conforms, Jo 5:30, cut before *quidquam*.
139. [0379D] *Sicut autem.* — **DIVERGENCE THE PRE-SCAN CLEARED, and the second most important crux in the range.** Clementine Jo 5:30 reads *Sicut **audio**, judico*. **DECLINED.** See §(d) 0379D — the reason it matters is that the gloss's first word after the lemma is *Audio*.
140. [0379D] *Non quaero.* — conforms, Jo 5:30.
141. [0379D] VERS. 31.-- *Si ego testimonium.* — conforms, Jo 5:31. ⚑ Migne sets a **doubled full stop** after the closing italic (`*Si ego testimonium.*.`); carried into the English exactly, Pattern 8. Not marked: I cannot tell his type from our transcription, and the class is the same as 9001's *multae. fidelium catervae*.
142. [0379D] VERS. 34.-- *Sed haec.* — conforms, Jo 5:34.
143. [0379D] VERS. 35.-- *Ille erat,* — conforms, Jo 5:35.
144. [0380B] *quod illuminat omnem hominem venientem in hunc mundum.* — divergence: Clementine Jo 1:9 reads *lux vera, **quae** illuminat*. **DECLINED:** the relative has been conformed to the gloss's own host noun — *Christus verum **lumen**, quod illuminat* — which is neuter and takes *quod*. That is scripture woven into the author's sentence, not a variant text, and every other word of the verse is verbatim. English has no exponent for the gender either way.
145. [0380B] VERS. 37.-- *Neque vocem.* — conforms, Jo 5:37.
146. [0380B] VERS. 41.-- *Claritatem.* — conforms, Jo 5:41.
147. [0380B] VERS. 42.-- *Quia dilectionem.* — conforms, Jo 5:42.

### Chunk 0009 — col 0380B–0380C (John 5:43)

148. [0380B] VERS. 43.-- *Si alius.* — conforms, Jo 5:43.

### Tally

**148 spans walked. 3 `[var:]` fired. 12 divergences declined** — nos. 20, 37, 38, 47, 48,
49, 61, 66, 70, 137, 139 and 144, of which 38 and 70 are a single orthographic class
(*Nunquid*) and 47, 48 and 144 have no English exponent at all.
**7 spans are not scripture at all**: nos. 63 and 126, the glossator's own words in italic
type, and the five *usque ad* abridgment formulae, nos. 5, 30, 121, 132 and 136. The
remaining 129 conform.

---

## (d) THIS RANGE'S OWN CRUCES, BY COLUMN

### 0370B — *In hoc se distinguit a Christo* (mechanism 5, ambiguity preserved)

The reflexive has two candidate subjects on the page: the Baptist, who is the speaker of the
whole passage, and the Evangelist, named two sentences earlier (*Hoc Evangelista dicit*). The
next clause, *sed quia missus et verba Dei loquitur, apertius addit*, then makes the *sent* one
Christ while *addit* stays with the speaker. **The English keeps all three pronouns bare** — "In
this he distinguishes himself from Christ; but because he is sent and speaks the words of God,
he adds more openly" — because resolving them would be an assertion the Latin does not make,
and the easier resolution is the one the brief says will be wrong.

### 0370D — `[var:]` FIRED · Eph 5:26

Migne: *Mundas eam lavacro aquae **et** verbo vitae.* Clementine Eph 5:26: *ut illam
sanctificaret, **mundans** lavacro aquae **in** verbo vitae.* Three differences at once —
participle to finite verb, *illam* to *eam*, and *in* to *et*.

**Fired because the gloss's argument stands on the third of them.** Its own preceding roman
words are *ejus baptismus fit etiam in corpore, qui est **in duobus**, scilicet **in aqua et
verbo vitae*** — the whole point is that baptism consists of *two* things, which the Vulgate's
*in verbo* does not say and Migne's *et verbo* does. A three-site divergence carrying a
coordinating conjunction the exposition depends on is not a shape OCR produces; it is a clause,
and the brief's class split puts clauses on Migne's side of the line.

⚠ I am **not** claiming the divergence originates with Migne's copy-text rather than his
compositor, nor that the author quoted from memory. Pattern 14 forbids that speculation and the
marker states only the two readings.

### 0371A — VERS. 4, a sentence with no verb in its relative clause

*inter legem litterae, **quae per Judaeam** et divinas leges circa Deum revolutas, quarum figura
est Galilaea, est lex naturalis in medio constituta.* The relative *quae* has no predicate: the
sentence needs something like *significatur*. I did **not** emend and did **not** mark; the
English supplies the missing verb in our own square brackets, "which [is signified] by Judaea",
which is the corpus's existing convention for a word we add (`[it]`, `[them]`). The printed
words are otherwise untouched. Whether the verb fell out at Migne's press or at Corpus
Corporum's transcription I cannot say.

### 0372A — *legis valle muniti* (real word, reads oddly)

*Judaeos, qui **legis valle** muniti, et prophetiae sunt telis armati.* *muniti* + *telis
armati* wants a fortification, and *vallo* (rampart) would give one; *valle* is the ablative of
*vallis*, a valley, which fortifies nothing. **It is a real, well-formed Latin word, so it is
rendered as printed** — "who are fenced by the valley of the law" — **and no marker is fired.**
I do not know whether Migne set *valle* or whether an *o* became an *e* in transcription, and
the brief is explicit that my belief about that is worth nothing. For the plate.

### 0372B — the gloss's *melior* against John's *major*

The lemma (no. 38) is only *Nunquid tu*, so nothing italic diverges. But the gloss expands it
as *Nunquid tu **melior** es, id est potes **melior** esse Jacob*, where Jo 4:12 reads *Numquid
tu **major** es patre nostro Jacob*. **This is the glossator restating the verse in his own
roman prose, not quoting it**, so Pattern 14 does not reach it and no marker is owed. Rendered
"better" twice, as printed. Recorded because a later reader meeting "better" against the
Vulgate's "greater" would otherwise suspect us.

### 0372D–0373A — *quodum*, a non-word, CARRIED WITH NO MARKER

*sed utebatur **quodum** non legitimo.* *quodum* is not a Latin form; *quodam* is plainly what
the sentence wants. Under Pattern 7 there is nothing to render, so the run is **carried into
the English untranslated, in italics** — "but was making use of a *quodum* not lawful" — and
under the brief's §2 **no `[sic:]` is fired**, because a non-word is not automatically ours
(9001 @0203A *magnitudino* is Migne's) and I cannot settle it.

**7a⁗ check, performed before closing it:** with the carried run deleted the clause still has
its verb (*utebatur* → "was making use of"), still carries its negation (*non legitimo* → "not
lawful"), and loses no conjunction or interrogative. Nothing is hiding inside the quarantine.

### 0371D — *privaverunt* (mechanism 5, ambiguity preserved)

*Samaritanos Judaei exsecrantur et supplantatores vocant, quia **eos** haereditate patris sui
Jacob **privaverunt** abstinendo a cibis et vasis **eorum**.* The subject of *privaverunt* can
be the Samaritans (who supplanted the Jews' inheritance, which is why they are called
supplanters) or the Jews (whose abstention from Samaritan food and vessels is the participial
clause). Both *eos* and *eorum* flip with it. **Rendered with bare pronouns throughout**, so the
English is as undecided as the Latin.

### 0373B — ⭐ *Panes nostri* FOR *Patres nostri* — RENDERED AS PRINTED, NO MARKER

VERS. 20's lemma reads *Panes nostri,* — "Our loaves". Clementine Jo 4:20: ***Patres** nostri in
monte hoc adoraverunt.* The gloss that follows is about the fathers and nothing else: *pro
monte, in quo et non in templo **patres adoraverunt**, qui Deo placuerunt. Et sic **patriarchae
in montibus**, Judaei in templo adoraverunt.* There is no doubt whatever that *Patres* is the
word the passage is expounding.

**And that is exactly why no marker is fired.** *Panes* is a real, well-formed Latin word; the
divergence is **one word inside a two-word lemma**, which is the class the brief's measurement
assigns to our own file; and the corroboration available to me — that the correct sense prints
four words later in the gloss — is *verbatim* the reasoning the brief lists among 9004's nine
wrong calls. A `[var:]` here would be a public assertion that **Migne's page** reads *Panes*,
and I have not seen his page.

- **English:** "*Our loaves,* etc." — Pattern 7, rendered as printed.
- **7a⁗ check:** nothing is quarantined, so nothing is swallowed; the gloss states the
  fathers' worship in its own words and the argument survives intact beside the odd lemma.
- **For the plate:** if Migne prints *Patres*, this is a `data/tei-patches/8999.json` entry and
  the English becomes "Our fathers". If he prints *Panes*, it is owed a `[var:]` against Jo
  4:20. **Both outcomes are live and I decline to guess between them.**

### 0373D — `[var:]` FIRED ×2 · Jo 4:22 and Is 7:9

**(i) *Vos adoratis Patrem quem nescitis*** against Clementine Jo 4:22 *Vos adoratis **quod**
nescitis*. Migne adds *Patrem* and makes the relative masculine to agree with it. Fired because
the gloss is built on the added word: *quia nullus adorat **Patrem** nisi Filium adoret, per
quem ad notitiam **Patris** venitur*. ⚑ And the control is on the same column in Migne's own
roman type: eight lines later the gloss paraphrases the verse *without* the addition — *vos
Samaritani adoratis **quod** nescitis, sed nos Judaei … adoramus **quod** scimus* — so the two
readings stand beside each other on one page. Multi-word, semantically coherent, load-bearing:
a clause, not a letter-swap.

**(ii) *nisi credideris non intelliges*** [n: (Isa. VII)] against Clementine Is 7:9 *si non
credideritis, non **permanebitis***. A whole-clause divergence with a large change of sense
(*understand* against *continue*) and a change of number, on a verse Migne himself cites by
siglum. Fired. **Pattern 14 forbids me to say why the two differ** and the marker says only what
each reads; the crux does not argue it either.

Also on this column, both carried and neither marked:

- *id est. quia Christus, qui est salus* — a **full stop set mid-sentence**, after *id est*.
  Carried into the English as printed ("that is. because Christ…"), Pattern 8. Whose stop it is,
  I cannot say; 9001 @0202D is the same class and turned out to be the digitization's.
- The paragraph **ends** *et hoc est.* with nothing following. Carried, unfinished, per Pattern
  8's "a sentence that simply stops stops in the English too". No `[ed:]`: nothing demonstrates
  a loss, and the same formula (*et hoc est*) is used mid-paragraph three lines above.

### 0375C — VERS. 42, *Judaeis spiritualiter edoctis* (mechanism 5, ambiguity preserved)

*Postquam Dominus carnis praesentia **Judaeis spiritualiter edoctis** gratiam suae cognitionis
infudit **mulieri**, id est legi, dicebant…* The dative-or-ablative *Judaeis … edoctis* can be
an ablative absolute ("the Jews having been taught") or a second dative alongside *mulieri*
("poured into the Jews… and into the woman"). **Rendered as an English absolute**, which is the
construction that leaves the reader where the Latin leaves him, rather than choosing the second
and quietly giving the Jews the grace the sentence gives the woman.

### 0376B — the *prodigium* etymology keeps its Latin

*Prodigium quasi **porro dictum** … Prodigium quasi **procul a digito***. The gloss *is* the
etymology, so under the Song-of-Songs ruling's case 2 an English word sharing no root would make
it explain nothing. The Latin terms are kept in italic inside the gloss with the sense given
beside them: "*Prodigium* as it were *porro dictum*, spoken far off … as it were *procul a
digito*, far from the finger". **These four italic runs are ours, not Migne's lemma italics**,
which is why my English chunk carries 41 italic spans against the Latin's 37; the same accounts
for the counts in 0006 (50 vs 46) and 0008 (51 vs 51 — there the `[var:]` italics replace none).

### 0376D — ⛔ A `?` I SUPPLIED AND REMOVED

The lemma *Vis sanus fieri.* closes with a **full stop** in Migne; the Clementine closes Jo 5:6
with `?`. I first wrote "*Wilt thou be made whole?*" — a mark the plate does not print, supplied
because the English sounds wrong without it. **It is out.** The English reads "*Wilt thou be
made whole.*" Pattern 8 forbids supplying a mark, and 8b's colon licence does not apply: this is
a *direct* question, and English can take Migne's full stop perfectly well. `verify-english`
caught it as a quotation-mark parity warning (2 EN vs 1 LA), which is the check earning its
place. Recorded here per 7a′, because the ruling has to be in the text and not only in the crux
— **it is: the shipped English carries the full stop.**

### 0377A — *aetate* (real word, reads oddly)

*et non solum **aetate** de tua erectione, sed etiam de proximorum sollicitus esto salute.* The
ablative of *aetas* does not construe with the *non solum … sed etiam* pair, which wants two
parallel *de* phrases. **Rendered as printed** — "be solicitous not only in age concerning thine
own raising up, but also concerning the salvation of thy neighbours" — with both members of the
correlative intact. No `[cj:]`: Pattern 18's bar is that the English *assert something false*,
and this English asserts nothing false, only something obscure. No `[sic:]`: it is a real word
and I cannot say whose. For the plate.

### 0377B — *quae … cessare jubet* (mechanism 5, ambiguity preserved)

*nescientes **gratiam** qua **lex** impletur, **quae** ab omni servili opere … cessare jubet.*
*quae* is feminine and both *gratiam* and *lex* are feminine, so it may bind either. Rendered
"which bids us cease", binding nothing.

### 0377C — a direct question closed with a full stop, carried

*Quasi dicat caeci in lege cur mihi invidetis, si hominem in sabbato sano, qui Deus cum Patre
semper operor.* A direct *cur* question that Migne closes with a period. **Carried as printed**
— the English ends on a full stop — and the `?` I would have supplied was not supplied. This is
Pattern 8's "preserve, never supply" in the direction that looks like our error, and 8b's
licence does not reach it (8b is for *indirect* questions English syntax cannot punctuate).

### 0379A — *ut cognoscant te quem misi Jesum Christum esse unum verum Deum*

Not italic, so not a lemma and not a `[var:]` candidate. But as printed, the accusative-infinitive
makes *quem misi Jesum Christum* an apposition to *te* and the sentence therefore says that
**thou, Jesus Christ whom I sent, art one true God** — where Jo 17:3, which the gloss is
paraphrasing (*ut post dicet*), distinguishes the Father from the Son he sent. **Rendered as
printed** ("that they may know thee, Jesus Christ whom I sent, to be one true God") and logged.
The compression may be the glossator's own; it may be a lost *et*. Not marked.

Also on this column: the direct question *Cur ait: Audit verbum meum et credit, non mihi, sed ei
qui me misit:* closes with a **colon**, not a question mark. Carried as printed; the answer
(*quia verbum ejus est in me*) follows the colon, so no mark is supplied and none deleted.

### 0379D — ⭐ *Sicut autem* FOR *Sicut audio* — DECLINED, AND THE PRE-SCAN CLEARED IT

The lemma at VERS. 30 reads *Sicut autem.* Clementine Jo 5:30: *Sicut **audio**, judico.* **The
gloss's very first word after the lemma is *Audio*** — *Audio per unitatem substantiae, id est,
scio quia non est aliud audire, quam scire vel esse* — and the whole comment is an exposition of
*audire*. The lemma as printed quotes a word the gloss never touches and omits the one it
expounds.

**No marker.** One word; the corroboration is internal and four characters away; and the
pre-scan marked this span **✓ Clementine verbatim** because *sicut autem* occurs somewhere in
the Clementine — which is precisely the false clearance the brief's header describes, and the
reason this was found by reading the line rather than by reading the mark. **English:** "*But
as.* I hear through the unity of substance…", rendering *autem* as printed and leaving the
gloss's *Audio* to say "I hear" on its own. For the plate.

### 0380B — Jo 1:9 with *quod* for *quae*

Covered at no. 144. Declined: the relative follows the gloss's own *lumen*, which is how this
recension habitually weaves a verse into its sentence.

---

## INHERITED CONVENTIONS — applied from the first line, and where they were TESTED

Per the brief's §1, each is reported with the evidence in my own range rather than merely
asserted. **No exception was forced, and nothing was silently departed from.**

1. **Gloss voice not archaised.** `dicit`/`ait`/`dicat` → *says*, never *saith*, throughout. The
   italic-membership test was run mechanically over all five chunks: **every one of the 3
   `saith` tokens sits inside an italic lemma** rendering *Dicit*, and of 28 other archaic verb
   forms, 20 are inside italic lemmata. **The remaining 8 were each read individually and all 8
   stand:** five are second-person singulars compelled by Pattern 17 (*savourest, receivest,
   awaitest, goest*, and *wast*), which is a NUMBER marker and not archaism of the gloss voice;
   three are the gloss re-quoting its own lemma's scripture words **unitalicised** — 0370C *he
   does not say, cometh, but abideth* (Migne: *non ait, venit, sed manet*), and 0379A *He
   heareth my word and believeth* (Migne: *Audit verbum meum et credit*). Those are quoted
   scripture, which is where 9001's ruling leaves them. **Zero third-person `-eth` on a
   metalanguage verb.**
2. **`turba` → crowd · `multitudo` → multitude.** ⚑ **Both words are live in my range, so the
   axis is tested, not assumed:** *turba* three times on one column at 0377C (*In turba positus*
   · *fugiat turbam suorum affectuum* · *Non in turba, sed in templo*) → **crowd** every time;
   *multitudo* at 0376C (*multitudo gentium solo verbo convertendarum*) → **multitude**. No
   English word does duty for both.
3. **`daemonium` → demon · `diabolus`/`satanas` → devil.** **Neither root occurs anywhere in
   chunks 0005–0009** (grepped). The axis is untested here and I have introduced no word into
   it. *Antichristus* at 0380C is rendered **Antichrist** and belongs to no part of it.
4. **`natio` → nation · `gentes` → Gentiles / nations.** ⚑ **No standalone `natio` occurs in my
   range** — the four apparent hits are *incarnatio*, *incarnatione*, *sanationis*,
   *seminationis* — so, as on 9004, nothing is flattened by the choice. `gentes` in the
   Judaei/gentes typological opposition → **Gentiles**: 0371A *ad gentes transire*, 0371B
   *gentilis populus*, 0371C–D and 0374C *Ecclesia de gentibus*, 0375D *a gentibus facile
   conversis … revertetur ad Judaeos* (the opposition is explicit in that clause), 0376B *fides
   gentium*, 0376A *Ecclesia gentium*, 0376C *multitudo gentium*. `gentes` **generic** →
   **nations**: 0373A *de divisionibus gentium*, the fourth of the five laws, which is the
   post-diluvian division of Genesis 10 and carries no Jew/Gentile contrast at all. Singular
   *gens* of the Jewish people → **nation**: 0376A *aliquem gentis Judaicae doctorem* → "some
   teacher of the Jewish nation".
5. **`mysterium` → mystery · `sacramentum` → sacrament, 1:1.** ⚑ **Both are live here too:**
   *mysterium* at 0373A (*adhuc mysteria loquitur*), 0374C (*mysterium Ecclesiae de gentibus
   futurae*) and 0375A (*mysterium redemptionis*) → **mystery/mysteries**; *sacramentum* at
   0377D (*constat sacramentum esse quod de requie sabbati legitur*) → **sacrament**. One
   English word each.

**Two further consistencies fixed within my range**, so a merge can check them: *fons* →
**fount** and *puteus* → **well** throughout, which the gloss at 0371C requires by expounding
the difference between them; and *grabatum* → **bed** at all three occurrences (0376D ×2,
0377B), matching the Vulgate's own wording, which Migne prints unchanged.

---

## FOR THE PLATE READ — the five sites I could not settle, ranked

Every one is a place where I know an error exists and refused to say whose. Leaf n =
(column + 11) / 2 on `patrologiaecursu0114mign`.

| col | leaf | our Latin | what the gloss wants | why it matters |
|---|---|---|---|---|
| 0373B | n192 | *Panes nostri* | *Patres nostri* (Jo 4:20) | decides between a TEI patch and a `[var:]`; the English reads "Our loaves" until it is read |
| 0379D | n195 | *Sicut autem* | *Sicut audio* (Jo 5:30) | the gloss's next word is *Audio*; same fork as above |
| 0372A | n191 | *legis valle muniti* | *vallo* | one letter; decides whether "the valley of the law" stands |
| 0372B | n191 | *Dixit ei mulier* | *Dicit* (Jo 4:11) | one tense; *Dicit ei Jesus* prints correctly six verses later |
| 0379C | n195 | *Quia veniet hora* | *venit* (Jo 5:28) | one tense; *Quia venit* prints correctly eight lines earlier |

Secondary, same rule, lower stakes: 0372D *quodum* (non-word, carried in italics); 0379D–0380A
the doubled full stop after *Si ego testimonium.*.; 0373D the full stop inside *id est.*; 0371A
the verbless *quae per Judaeam*.

**Not one of these carries a marker, and that is the deliverable.** If the plate agrees with me
at every site, nothing was lost by waiting; if it agrees with me at five of nine, which is the
brief's measured rate, four false public claims against Migne were not made.


---

<!-- ===== cruces-0010.md ===== -->

# Cruces — 8999, *Glossa ordinaria*, **Evangelium secundum Joannem**, chunks 0010–0014

Stint 3 of six. **PL 114, cols 0380C–0394C** (John VI. 1 – VIII. 59), 6,020 words of Latin in
five chunks. Written to the governing document, `data/briefs/8999-launch-brief.md`, and to
`translation-style.md`; the four Mark conventions of `src/english/9001/cruces.md` §1 were applied
from the first line and none of them was forced open by this book (§d.6 below records the
controls).

---

## (a) THE POLICY I APPLIED — stated first, so it can be argued with

**1. Attribution is not mine to assert, and I asserted none.** Per the brief's §2: every reading
in this range that is a real, well-formed Latin word which merely reads oddly is **rendered as
printed and logged with no marker**, however good the internal argument for what was meant. I
found **no non-word and no split or fused run** anywhere in the five chunks — the one
word-division candidate, *a me ipso* at 0387B, is a normal orthographic variant of *meipso* and
is not a defect. **I fired zero `[sic:]`.** Nine of the fourteen attribution calls made on 9004
were wrong at the plate; I am not adding a fifteenth guess to that record.

**2. `[var:]` fires only on a coherent CLAUSE-level divergence, never on a single short token.**
The measured asymmetry (46/46 and 19/19 `[var:]` stood; 7 of 8 single-word `[sic:]` fell) is
mechanical: a transcription slip manufactures broken or missing tokens and cannot invent a
semantically coherent divergent clause. So a substituted or recast clause I may cite against
`sources/vulgate/clementine-flat.txt`; a **dropped or altered single token** — *vivus* at 0384B,
*vestrum* at 0389C, *de* at 0391A, *et* at 0387B, *cognovimus*/*cognoscimus* at 0393D — I log and
leave for the plate, because a `[var:]` asserts that **Migne's text** diverges and our Latin is
not Migne's page. **Three `[var:]` fired**, all on clauses, all cited book chapter:verse.

**3. Below Pattern 14's bar is not a divergence.** Word order, a connective swapped for another of
the same force (*enim*/*autem*), *nunquid* for *numquid*, *coelo* for *caelo*, a lemma abridged
before its last word: these are logged in §(c) with the reason and take no marker. Marking them
would bury the three that matter.

**4. `[cj:]` only where the faithful English ASSERTS SOMETHING FALSE — not where it is merely
opaque.** Pattern 18a closed the conjecture census and left ~90 candidates declined; the stated
bar is that the English asserts what the author did not, and I have held to it strictly.
**Two `[cj:]` fired** (0381A *vanitatem*, 0383A *me esse Patrem*), each of which otherwise puts a
falsehood on the page in the author's voice. **Two obvious conjecture candidates were DECLINED
because the English they produce is odd, not false** — 0387D *assensionem* and 0385D *audit* —
and both are logged for the plate in §(d). ⚑ `[cj:]` is non-attributive by design (Pattern 18:
Migne's word stands first and keeps its English; ours is added beside it), so neither marker
claims anything about whose the reading is. If the plate shows our file corrupt at either site,
they become `data/tei-patches/8999.json` entries — not withdrawn accusations against Migne.

**5. Negation and mechanism 5.** Every `non`, `nec`, `neque`, `nisi`, `ne`, `nemo`, `nihil`,
`nullus`, `nondum` the Latin prints is in the English and none is in the English that the Latin
does not print, including where carrying it leaves the sentence at odds with itself. Where a
relative or participle could bind to either of two nouns I read the **case and gender**, not the
sense; the three sites where the easier reading would have been the wrong one are named in §(d).

**6. No plate was read for this range and none is claimed.** Everything I could not settle is
named as unsettled, with the column, so the read that follows this translation has a list rather
than a hunt.

---

## (b) SPAN COUNT — RUN, AND IT AGREES

`data/briefs/8999-lemmata-0010.txt` states **215 spans** for chunks 0010–0014.
Counting the `*…*` spans in my own Latin:

| chunk | spans |
|---|---|
| 0010 | 48 |
| 0011 | 19 |
| 0012 | 52 |
| 0013 | 56 |
| 0014 | 40 |
| **total** | **215** |

**215 = 215, and the brief's first span (`[0380C] *Trans mare.*`) and last (`[0394C] *Et
exivit.*`) are the first and last italic spans in my own files** — so the range is aligned at both
ends, not merely equal in count. Every asterisk in all five chunks is inside a body span; the
frontmatter carries none. This is the check that caught the −0/+13/−11/+15/−17 splitter error on
9001; it is clean here.

Marker-parity counts, checked before each file was written: column anchors 14 / 6 / 15 / 14 / 7,
`[n: …]` notes 2 / 1 / 8 / 4 / 7 — each equal to its Latin twin and to the frontmatter
`noteCount`. `node scripts/verify-english.mjs 8999` passes on all five.

---

## (c) THE LEMMA DIVERGENCE LIST — all 215 spans, in order

Every italic span in the range, with its verdict; every divergence I **declined** to mark carries
its reason. Verdicts were formed by reading the printed Latin word by word against
`clementine-flat.txt` at **its own verse** — the pre-scan's ✓ is not clearance and was not treated
as any (the seven `*usque ad*` spans it marks ✓ are the clearest demonstration: they are Migne's
abridgment formula and not scripture at all).

**Summary: 3 `[var:]` fired · 21 divergences examined and declined · 7 structural spans ·
184 conform.**

[0380C] VERS. 1.-- *Trans mare.* — Conforms, read against its own verse.
[0380C] VERS. 2.-- *Et sequebatur.* — Conforms, read against its own verse.
[0380C] VERS. 5.-- *Cum sublevasset.* — Conforms, read against its own verse.
[0380C] VERS. 7.-- *Ducentorum.* — Conforms, read against its own verse.
[0380C] VERS. 9.-- *Est puer unus.* — Conforms, read against its own verse.
[0381A] *Sed haec,* — Conforms, read against its own verse.
[0381A] VERS. 10.-- *Facite homines.* — Conforms, read against its own verse.
[0381A] VERS. 14.-- *Illi ergo homines cum vidissent quod,* — Conforms, read against its own verse.
[0381A] VERS. 15.-- *Jesus ergo.* — Conforms, read against its own verse.
[0381A] *Percipite regnum quod vobis paratum est.* — **DIVERGENCE — `[var:]` FIRED.** Matt 25:34 reads *possidete paratum vobis regnum a constitutione mundi*. Migne substitutes the verb (*percipite*) and recasts the clause; a coherent clause-level variant, the class that stood 19/19 on 9001 and 46/46 on 9004.
[0381A] *Ut autem sero factum est.* — Conforms, read against its own verse.
[0381A] VERS. 19.-- *Timuerunt.* — Conforms, read against its own verse.
[0381A] *Nolite timere, ego sum.* — Divergence, DECLINED. Jo 6:20 reads *Ego sum, nolite timere* (so Matt 14:27, Mc 6:50). Migne reverses the two clauses and changes nothing else: word order, no sense at stake, and the gloss turns on neither clause's position.
[0381A] VERS. 22.-- *Altera die.* — Conforms, read against its own verse.
[0381D] VERS. 25.-- *Et cum invenissent.* — Conforms, read against its own verse.
[0381D] *Amen, amen dico vobis,* — Conforms, read against its own verse.
[0381D] VERS. 26.-- *Amen, amen dico vobis.* — Conforms, read against its own verse.
[0381D] VERS. 27.-- *Signavit Deus.* — Conforms, read against its own verse.
[0381D] VERS. 29.-- *Hoc est opus Dei.* — Conforms, read against its own verse.
[0382B] VERS. 32.-- *Dixit ergo.* — Conforms, read against its own verse.
[0382B] VERS. 33.-- *Panis enim verus.* — **DIVERGENCE — `[var:]` FIRED.** Jo 6:33 reads *Panis enim Dei est, qui de caelo descendit*. Migne's lemma puts the content word *verus* where the received text has *Dei est* (possibly drawn from *panem de caelo verum*, Jo 6:32, the lemma directly above). A substitution, not a dropped token.
[0382B] VERS. 34.-- *Domine, semper,* — Conforms, read against its own verse.
[0382B] *Qui biberit de hac aqua, non sitiet in aeternum,* — **DIVERGENCE — `[var:]` FIRED.** Jo 4:13-14: *Omnis qui bibit ex aqua hac, sitiet iterum : qui autem biberit ex aqua quam ego dabo ei, non sitiet in aeternum.* Migne's single clause collapses the two halves, so that drinking of THIS water is what quenches for ever, which is the reverse of the verse's own contrast; and the gloss builds on the quotation (*secundum corpus accepit*). The received reading belongs beside it.
[0382B] *Da mihi [0382C] hanc aquam,* — Conforms, read against its own verse.
[0382C] *Ego sum panis vitae.* — Conforms, read against its own verse.
[0382C] VERS. 36.-- *Sed dixi vobis.* — Conforms, read against its own verse.
[0382C] VERS. 37.-- *Omne quod dat mihi Pater,* — Conforms, read against its own verse.
[0382C] *Veniet.* — Conforms, read against its own verse.
[0382C] VERS. 39.-- *Haec est enim voluntas ejus qui misit me Patris,* — Divergence, DECLINED. Jo 6:39 reads *Haec est AUTEM voluntas ejus qui misit me, Patris*. One connective for another of the same force, below Pattern 14's bar ("in a way that changes the sense").
[0382C] *Non perdam,* — Conforms, read against its own verse.
[0382C] VERS. 40.-- *Ut omnis,* — Conforms, read against its own verse.
[0382C] *Qui audit verbum meum et credit ei qui me misit;* — Divergence, DECLINED. Jo 5:24 reads *Qui verbum meum audit, et credit ei qui misit me*. Two transpositions; no word added or lost, no sense changed.
[0383A] *Qui videt Filium et credit in eum.* — Conforms, read against its own verse.
[0383A] VERS. 41.-- *Murmurabant.* — Conforms, read against its own verse.
[0383A] VERS. 43.-- *Nolite murmurare.* — Conforms, read against its own verse.
[0383A] VERS. 44.-- *Nisi Pater. [n: (AUG.)]* — Conforms, read against its own verse.
[0383B] *usque ad* — Structural, not scripture: Migne's abridgment formula, rendered *as far as*. The pre-scan's tick is a phrase-search artefact, the two words being common in the Vulgate.
[0383B] *Et ego resuscitabo,* — Conforms, read against its own verse.
[0383B] VERS. 45.-- *Est scriptum.* — Conforms, read against its own verse.
[0383B] *erunt docibiles Dei,* — Not a divergence. Jo 6:45 reads *Et erunt OMNES docibiles Dei*; the gloss has taken *omnes* into its own sentence (*Omnes homines regni illius ... erunt docibiles Dei*), so the italics open after it. An artefact of where Migne set the span.
[0383B] *In prophetis.* — Conforms, read against its own verse.
[0383C] VERS. 46.-- *Non quia Patrem,* — Conforms, read against its own verse.
[0383C] *Ego sum panis vitae. Patres vestri,* — Conforms, read against its own verse.
[0383D] *Ego sum panis vitae.* — Conforms, read against its own verse.
[0383D] *Verba vitae aeternae habes.* — Conforms, read against its own verse.
[0383D] VERS. 52.-- *Et panis,* — Conforms, read against its own verse.
[0383D] VERS. 54.-- *Nisi manducaveritis carnem,* — Conforms, read against its own verse.
[0383D] *usque ad* — Structural, not scripture: Migne's abridgment formula, rendered *as far as*. The pre-scan's tick is a phrase-search artefact, the two words being common in the Vulgate.
[0384A] VERS. 55.-- *Qui manducat.* — Conforms, read against its own verse.
[0384B] VERS. 56.-- *Caro enim.* — Conforms, read against its own verse.
[0384B] *caro mea vere est cibus.* — Not a divergence. Jo 6:56 reads *Caro ENIM mea vere est cibus*; the span is quoted inside the gloss's own *quia* clause, which is why the connective stands outside it.
[0384B] VERS. 57.-- *Qui manducat.* — Conforms, read against its own verse.
[0384B] VERS. 58.-- *Sicut misit me.* — Conforms, read against its own verse.
[0384B] *Et ipse vivet.* — Conforms, read against its own verse.
[0384B] VERS. 59.-- *Hic est panis.* — Conforms, read against its own verse.
[0384B] *Ego sum panis qui de coelo descendi.* — Divergence, DECLINED. Jo 6:41/51 read *Ego sum panis VIVUS, qui de caelo descendi*. One token absent from a self-quotation the gloss introduces with *Supra dixerat*. A single short token is the class the brief's Sect. 2 measures as at least as likely ours as Migne's, and no `[var:]` can assert whose it is. Logged for the plate. (*coelo* for *caelo* is orthography throughout and is never marked.)
[0384B] *panis qui de coelo descendit:* — Conforms, read against its own verse.
[0384B] VERS. 61.-- *Multi ergo.* — Conforms, read against its own verse.
[0384D] *Durus est,* — Conforms, read against its own verse.
[0384D] VERS. 63.-- *Si ergo,* — Conforms, read against its own verse.
[0384D] VERS. 64.-- *Spiritus est qui vivificat.* — Conforms, read against its own verse.
[0384D] *Verba quae ego,* — Conforms, read against its own verse.
[0384D] VERS. 65.-- *Sed sunt quidam,* — Conforms, read against its own verse.
[0384D] *Et quis traditurus.* — Conforms, read against its own verse.
[0384D] VERS. 66.-- *Quia nemo potest,* — Conforms, read against its own verse.
[0384D] VERS. 67.-- *Ex hoc,* — Conforms, read against its own verse.
[0384D] VERS. 71.-- *Nonne ego vos,* — Conforms, read against its own verse.
[0385C] VERS. 1.-- *Post haec autem.* — Conforms, read against its own verse.
[0385C] VERS. 2.-- *Dies festus.* — Conforms, read against its own verse.
[0385C] VERS. 3.-- *Ut et discipuli.* — Conforms, read against its own verse.
[0385C] VERS. 4.-- *Nemo.* — Conforms, read against its own verse.
[0385C] VERS. 6.-- *Tempus.* — Conforms, read against its own verse.
[0386A] VERS. 8.-- *Ego enim non ascendo. [n: (AUG.)]* — Divergence, DECLINED. Jo 7:8 reads *ego AUTEM non ascendo*. Connective only, same ground as Jo 6:39 above. The negation is intact and is carried in the English.
[0386A] VERS. 10.-- *Non manifeste,* — Conforms, read against its own verse.
[0386A] VERS. 16.-- *Respondit eis: Mea doctrina,* — Not a divergence. Jo 7:16 reads *Respondit eis Jesus, et dixit : Mea doctrina*; the lemma abridges the speech frame. Note that Migne interleaves this span with roman gloss (*Mea doctrina,* hominis, *non est mea,* sed Dei), and the interleaving is reproduced 1:1 in the English.
[0386A] *non est mea,* — Conforms, read against its own verse.
[0386A] VERS. 18.-- *Qui a semetipso.* — Conforms, read against its own verse.
[0386A] *Qui autem,* — Conforms, read against its own verse.
[0386A] VERS. 19.-- *Nonne Moyses,* — Conforms, read against its own verse.
[0386C] VERS. 20.-- *Daemonium.* — Conforms, read against its own verse.
[0386C] VERS. 21.-- *Unum opus feci.* — Conforms, read against its own verse.
[0386C] VERS. 22.-- *Circumcisionem. [n: (ALC.)]* — Conforms, read against its own verse.
[0386C] *usque ad* — Structural, not scripture: Migne's abridgment formula, rendered *as far as*. The pre-scan's tick is a phrase-search artefact, the two words being common in the Vulgate.
[0386D] VERS. 23.-- *Si circumcisionem,* — Conforms, read against its own verse.
[0386D] VERS. 24.-- *Nolite judicare,* — Conforms, read against its own verse.
[0386D] VERS. 25.-- *Dicebant ergo.* — Conforms, read against its own verse.
[0387B] *Generationem ejus quis enarrabit [n: (Isa. LIII)]* — Conforms, Is 53:8. The sentence carries NO TERMINAL STOP after the note in the Latin; none is supplied in the English (Pattern 8).
[0387B] VERS. 28.-- *Et me scitis.* — Conforms, read against its own verse.
[0387B] *et unde sim* — Conforms, read against its own verse.
[0387B] *a me ipso non veni.* — Not a divergence. Jo 7:28 reads *a meipso non veni*: word division inside *meipso*, an orthographic variant attested both ways, not a Pattern 10 broken run. Negation intact.
[0387B] *Ego scio.* — Conforms, read against its own verse.
[0387B] *nemo novit Patrem nisi Filius, et cui Filius voluerit revelare [n: (Marc. XI)]* — Divergence, DECLINED. The text is Matt 11:27 (*neque Patrem quis novit, nisi Filius, et cui voluerit Filius revelare*) / Lc 10:22; Migne's wording is a synonymous recasting with nothing of substance added or lost. His CITATION, however, points to Mark XI, where no such text stands. Logged in (d) as a citation crux and not marked: `[n:]` contents pass through verbatim by rule, and the index's `refDisplay`/`refKey` split is where that is answered.
[0387B] VERS. 29.-- *Sed scio eum.* — Conforms, read against its own verse.
[0387B] *quia ab ipso sum ipse,* — Divergence, DECLINED. Jo 7:29 reads *quia ab ipso sum, ET ipse me misit*; Migne's span runs the two clauses together across the missing *et* and breaks off with *etc.* A single short token inside an abridgment span: our file or his, and nothing in our hands decides it. Logged for the plate.
[0387C] *ab ipso sum,* — Conforms, read against its own verse.
[0387C] VERS. 30.-- *Hora ejus.* — Conforms, read against its own verse.
[0387C] VERS. 32.-- *Audierunt Pharisaei.* — Conforms, read against its own verse.
[0387D] VERS. 33.-- *Adhuc modicum tempus.* — Conforms, read against its own verse.
[0387D] *Quid faciemus? Vobiscum sum et vado.* — Not a Vulgate divergence. The italic run MERGES TWO TEXTS: *Quid faciemus?* is Act 2:37 (there *Quid faciemus, viri fratres?*), and *Vobiscum sum et vado* is the return to the Jo 7:33 lemma, which the gloss expounds in the next breath (*Non ait ero, sed sum*). Migne's italics swallow the join; rendered as printed, in one run.
[0387D] *Filius [0388A] hominis qui est in coelo,* — Conforms, read against its own verse.
[0387D] VERS. 34.-- *Non potestis venire.* — Conforms, read against its own verse.
[0387D] *Non potes me sequi modo, sequeris autem postea [n: (Joan. XIII)]* — Divergence, DECLINED. Jo 13:36 reads *non potes me modo sequi : sequeris autem postea*. Transposition of *modo* only.
[0387D] VERS. 35.-- *Ad semetipsos,* — Conforms, read against its own verse.
[0387D] VERS. 36.-- *Quis est hic?* — Conforms, read against its own verse.
[0387D] VERS. 37.-- *In novissimo autem.* — Conforms, read against its own verse.
[0387D] *Si quis sitit.* — Conforms, read against its own verse.
[0387D] *et cum biberit, flumina de ventre ejus fluent aquae vivae.* — Divergence, DECLINED. Jo 7:38 reads *Qui credit in me, sicut dicit Scriptura, flumina de ventre ejus fluent aquae vivae*. The opening words are the glossator's own resumption of his sentence (*Bibat spiritum ... et cum biberit*), swallowed by the italics; the quoted portion agrees with the Vulgate word for word, so there is no claim about Migne's scripture text to be made here.
[0387D] *usque ad* — Structural, not scripture: Migne's abridgment formula, rendered *as far as*. The pre-scan's tick is a phrase-search artefact, the two words being common in the Vulgate.
[0387D] *Nondum enim,* — Conforms, read against its own verse.
[0388D] *Quia Jesus nondum erat glorificatus,* — Conforms, read against its own verse.
[0388D] *Ex illa ergo turba,* — Conforms, read against its own verse.
[0388D] *Oportet obedire magis Deo quam hominibus [n: (Act. V)]* — Divergence, DECLINED. Act 5:29 reads *Obedire oportet Deo magis quam hominibus*. Transposition only.
[0388D] VERS. 45.-- *Venerunt ergo.* — Conforms, read against its own verse.
[0388D] VERS. 47.-- *Nunquid et vos,* — Not a divergence. *nunquid* for *numquid* is Migne's settled orthography (four spans in this range) and is Pattern 9 matter, never marked. Jo 7:47 otherwise.
[0388D] VERS. 48.-- *Nunquid ex principibus aliquis,* — Not a divergence. Orthography as above; conforms to Jo 7:48.
[0388D] *Ut non videntes videant, et videntes caeci fiant [n: (Joan. IX)]* — Divergence, DECLINED. Jo 9:39 reads *ut qui non vident videant, et qui vident caeci fiant*. Participles for relative clauses; the assertion is identical and the antithesis the gloss rests on survives untouched. Both negations carried.
[0388D] VERS. 51.-- *Nunquid lex.* — Not a divergence. Orthography as above; Jo 7:51 otherwise.
[0388D] *Et tu Galilaeus es,* — Conforms as far as it runs: Jo 7:52 opens *Numquid et tu Galilaeus es?* and the lemma begins one word in.
[0388D] *Et reversi sunt,* — Conforms, read against its own verse.
[0389B] VERS. 1.-- *Jesus autem.* — Conforms, read against its own verse.
[0389C] *Qui sine peccato est, primus in illam lapidem mittat.* — Divergence, DECLINED. Jo 8:7 reads *Qui sine peccato est VESTRUM, primus in illam lapidem mittat*. One token absent: single-token class, no marker. (*in illam lapidem*, a feminine pronoun on a masculine noun, is the Clementine's OWN reading and is not a defect here.)
[0389C] VERS. 3.-- *Adducunt.* — Conforms, read against its own verse.
[0389C] VERS. 6.-- *Jesus autem inclinans se deorsum.* — Conforms, read against its own verse.
[0389C] VERS. 8.-- *Et iterum se inclinans.* — Conforms, read against its own verse.
[0389C] VERS. 11.-- *Nec ego te condemnabo.* — Conforms, read against its own verse.
[0389C] *Nec ego te condemnabo,* — Conforms, read against its own verse.
[0389C] VERS. 12.-- *Iterum ergo.* — Conforms, read against its own verse.
[0389C] *Ego sum lux mundi.* — Conforms, read against its own verse.
[0389C] VERS. 13.-- *Testimonium.* — Conforms, read against its own verse.
[0389C] VERS. 14.-- *Verum est testimonium.* — Conforms (Jo 8:14, *verum est testimonium meum*), abridged.
[0389C] VERS. 15.-- *Vos secundum carnem judicatis.* — Conforms, read against its own verse.
[0390C] *Ego non judico quemquam.* — Conforms, read against its own verse.
[0390C] *Et si judico ego,* — Conforms, read against its own verse.
[0390C] VERS. 16.-- *Quia solus [n: (AUG.)]* — Conforms (Jo 8:16, *quia solus non sum*), but the lemma STOPS BEFORE THE NEGATION; the gloss restores it in its first words (*Ideo verum, quia non solus*), and the English follows the gloss rather than supplying a negative to the lemma.
[0390C] VERS. 17.-- *Et in lege vestra scriptum est. [n: (ID.)]* — Conforms, read against its own verse.
[0390C] *usque ad* — Structural, not scripture: Migne's abridgment formula, rendered *as far as*. The pre-scan's tick is a phrase-search artefact, the two words being common in the Vulgate.
[0390C] VERS. 19.-- *Dicebant ergo ei.* — Conforms, read against its own verse.
[0390D] *Ubi est Pater tuus.* — Conforms, read against its own verse.
[0390D] *Forsitan et Patrem,* — Conforms (Jo 8:19), abridged before *meum*, so the English reads "Perhaps also the Father," and does not supply the possessive.
[0390D] VERS. 20.-- *Haec verba,* — Conforms, read against its own verse.
[0391A] *Et nemo apprehendit eum.* — Conforms, read against its own verse.
[0391A] VERS. 21.-- *Ego vado.* — Conforms, read against its own verse.
[0391A] *Quaeretis,* — Conforms, read against its own verse.
[0391A] *In peccato vestro moriemini.* — Conforms, read against its own verse.
[0391A] VERS. 22.-- *Nunquid interficiet semetipsum?* — Not a divergence. Orthography only (Jo 8:22).
[0391A] VERS. 23.-- *Vos deorsum estis.* — Divergence, DECLINED. Jo 8:23 reads *Vos DE deorsum estis*. The dropped preposition shifts "you are from beneath" to "you are beneath", but it is one short token, the class most often our own file, and the gloss's continuation (*ideo terram sapitis*) reads the same under either. Rendered as printed ("You are below"), logged for the plate.
[0391A] VERS. 24.-- *Dixi ergo vobis.* — Conforms, read against its own verse.
[0391A] *Si enim.* — Conforms (Jo 8:24, *si enim non credideritis*); the lemma likewise cuts before *non*, and the gloss's continuation carries it.
[0391A] *Credideritis.* — Conforms, read against its own verse.
[0391A] *Ego sum, moriemini,* — Conforms: one italic run splicing two fragments of Jo 8:24 (*credideritis quia ego sum, moriemini in peccato vestro*), reproduced as one run.
[0391A] VERS. 25.-- *Principium. [n: (AUG.)]* — Conforms, read against its own verse.
[0391C] *usque ad* — Structural, not scripture: Migne's abridgment formula, rendered *as far as*. The pre-scan's tick is a phrase-search artefact, the two words being common in the Vulgate.
[0391C] *Loquor vobis.* — Conforms, read against its own verse.
[0391C] VERS. 27.-- *Et non cognoverunt.* — Conforms, read against its own verse.
[0391C] *qui misit me, verax est,* — Divergence, DECLINED. Jo 8:26 reads *sed qui me misit, verax est*. Transposition only; the gloss quotes it mid-sentence, which is why *sed* falls outside the span.
[0391D] *Cum exaltaveritis Filium,* — Divergence, DECLINED, AND THE WITNESS IS WHAT IS ODD HERE. `clementine-flat.txt` reads Jo 8:28 *Cum exaltaveriS Filium hominis*, a singular. Migne's plural *exaltaveritis* is the reading the Clementine editions print and the one the context demands (he is addressing the Jews). A `[var:]` here would rest on what looks like a defect IN OUR COLLATION FILE. Flagged so the file can be checked; no marker.
[0391D] VERS. 29.-- *Quia ego sum.* — Conforms, read against its own verse.
[0391D] *Et a meipso facio nihil;* — Conforms, read against its own verse.
[0391D] *Quia ego,* — Conforms, read against its own verse.
[0391D] VERS. 30.-- *Multi crediderunt in eum.* — Conforms, read against its own verse.
[0391D] VERS. 31.-- *Vere discipuli.* — Conforms, read against its own verse.
[0391D] *Liberi.* — Conforms, read against its own verse.
[0391D] *Veritas liberabit vos,* — Conforms, read against its own verse.
[0391D] *Respondit eis,* — Conforms, read against its own verse.
[0391D] *liberabit vos,* — Conforms, read against its own verse.
[0391D] *Et nemini servivimus.* — Conforms (Jo 8:33), abridged before *umquam*.
[0391D] *Amen, amen dico,* — Conforms, read against its own verse.
[0391D] VERS. 35.-- *Servus autem,* — Conforms, read against its own verse.
[0391D] VERS. 37.-- *Scio,* — Conforms, read against its own verse.
[0391D] VERS. 39.-- *Responderunt et dixerunt ei.* — Conforms, read against its own verse.
[0391D] *Si filii Abrahae,* — Conforms, read against its own verse.
[0391D] VERS. 40.-- *Nunc autem quaeritis,* — Conforms, read against its own verse.
[0391D] VERS. 41.-- *Vos facitis opera.* — Conforms, read against its own verse.
[0391D] *Dixerunt,* — Conforms, read against its own verse.
[0391D] *Nos,* — Conforms, read against its own verse.
[0392D] VERS. 42.-- *Dixit ergo.* — Conforms, read against its own verse.
[0393A] *Ego enim.* — Conforms, read against its own verse.
[0393A] VERS. 43.-- *Quare loquelam.* — Conforms, read against its own verse.
[0393A] VERS. 44.-- *Vos ex patre,* — Conforms, read against its own verse.
[0393A] *Pater tuus Amorrhaeus est, mater tua Cethaea [n: (Ezech. XVI)]* — Divergence, DECLINED. Ez 16:3 reads *pater tuus Amorrhaeus, et mater tua Cethaea*: Migne supplies the copula and drops *et*. Function words only.
[0393A] *Et desideria.* — Conforms, read against its own verse.
[0393A] *desideria patris [0393B] vestri vultis facere,* — Conforms, read against its own verse.
[0393B] *Ille homicida.* — Conforms, read against its own verse.
[0393B] *Lingua eorum gladius acutus [n: (Psal. LVI)]* — Conforms, read against its own verse.
[0393B] *Et in veritate non stetit.* — Conforms, read against its own verse.
[0393B] *Quia non est in eo veritas.* — Divergence, DECLINED. Jo 8:44 reads *quia non est veritas in eo*. Transposition only, and the gloss's own next sentence prints Migne's order back (*quia non est ipsa in eo*), which is evidence for the reading rather than against it. Negation intact in both.
[0393B] *Ex propriis loquitur, quia mendax est.* — Conforms, read against its own verse.
[0393B] *Et pater ipsius.* — Divergence, DECLINED. Jo 8:44 reads *et pater ejus*. One pronoun for another of the same reference; the exposition (*Scilicet mendacii quod invenit*) is indifferent to which.
[0393B] *Ex propriis.* — Conforms, read against its own verse.
[0393B] VERS. 46.-- *Quis ex vobis,* — Conforms, read against its own verse.
[0393B] VERS. 48.-- *Nonne,* — Conforms, read against its own verse.
[0393B] VERS. 49.-- *Honorifico.* — Conforms, read against its own verse.
[0393B] VERS. 50.-- *Ego autem.* — Conforms, read against its own verse.
[0393B] *Daemonium habes,* — Conforms, read against its own verse.
[0393D] *Honorifico Patrem,* — Conforms (Jo 8:49), abridged before *meum*; same treatment.
[0393D] *est qui quaerat et judicet.* — Conforms, read against its own verse.
[0393D] *Tentat vos Deus [n: (Deut. XIII)]* — Divergence, DECLINED. Dt 13:3 reads *tentat vos Dominus Deus vester*. An abridgment of a proof-text quoted for its verb; nothing substituted.
[0393D] *Deus intentator malorum est [n: (Jac. II)]* — Divergence, DECLINED. The text is Jac 1:13, *Deus ENIM intentator malorum est*: connective only. Migne's citation reads Jac. II where the verse is Jac. I; logged in (d) with the *Marc. XI* case, not marked.
[0393D] *Judica me, Deus, et discerne causam meam [n: (Psal. XLII)]* — Conforms, read against its own verse.
[0393D] VERS. 51.-- *Amen, amen dico vobis.* — Conforms, read against its own verse.
[0393D] *Non videbit.* — Conforms, read against its own verse.
[0393D] VERS. 52.-- *Nunc cognoscimus.* — Divergence, DECLINED. Jo 8:52 reads *Nunc cognovimus*. Present for perfect, one token; the English renders the printed present ("Now we know"). Single-token class.
[0393D] VERS. 53.-- *Quem teipsum facis?* — Conforms, read against its own verse.
[0394B] *Non rapinam arbitratus est esse se aequalem Deo [n: (Philip. II)]* — Conforms, read against its own verse.
[0394B] VERS. 54.-- *Respondit Jesus.* — Conforms, read against its own verse.
[0394B] *Quem te facis?* — Not a Vulgate divergence: it is MIGNE AGAINST MIGNE. His lemma at VERS. 53 prints *Quem teipsum facis?* (= Jo 8:53), his gloss at VERS. 54 re-quotes it as *Quem te facis?*, and the close of the earlier gloss prints *quem teipsum facis?* again. All three are rendered as printed. Whether the short form is his or our transcription's, nothing here decides.
[0394B] *Est Pater meus.* — Conforms, read against its own verse.
[0394B] *Qui glorificat.* — Conforms, read against its own verse.
[0394B] *Et non cognovistis.* — Conforms, read against its own verse.
[0394B] *Et si dixero,* — Conforms, read against its own verse.
[0394C] *et si dixero.* — Conforms, read against its own verse.
[0394C] VERS. 56.-- *Abraham.* — Conforms, read against its own verse.
[0394C] *Diem meum. [n: (AUG.)]* — Conforms, read against its own verse.
[0394C] *usque ad* — Structural, not scripture: Migne's abridgment formula, rendered *as far as*. The pre-scan's tick is a phrase-search artefact, the two words being common in the Vulgate.
[0394C] VERS. 59.-- *Et exivit.* — Conforms, read against its own verse.

---

## (d) THIS RANGE'S OWN CRUCES, BY COLUMN

Two markers fired in the whole range, both `[cj: …]`, both at sites where the faithful English
would otherwise state a falsehood in the author's voice. **No `[sic:]`, and no non-word or broken
run was found to justify one.** Everything else below is rendered as printed and carries no
marker, with the column named so the plate read can settle it.

### FIRED

**0381A — `[cj: *vanitatem*; read *unitatem*, "the unity"]`** (chunk 0010, VERS. 9).
*Est puer unus … Unus, quia vanitatem Ecclesiae futuram praefigurabat.* The boy is one because he
prefigured something future about the Church; *vanitatem* makes that the Church's coming
**vanity**, which is not a thing this gloss or any near relative of it says, and the argument
(oneness prefiguring a future one-ness) has no purchase on it. *vanitatem* is a real word, so
Pattern 12 has nothing to wrap and Pattern 7 requires the English to render it — which it does,
with the conjecture added beside it, per Pattern 18. ⚠ **Whose reading it is, I do not know.**
The two forms are not an obvious optical confusion, which argues mildly for the type rather than
the transcription, and that argument is exactly the kind measured as unreliable; it is offered as
context, not as a finding.

**0383A — `[cj: *me esse Patrem*; read *me esse a Patre*, "that I am from the Father"]`**
(chunk 0010, VERS. 43). *…nemo potest venire ad me nisi a Patre tractus, et ideo vos non creditis
me esse Patrem, quia non estis tracti a Patre.* Rendered flat, the page has Christ complaining
that the Jews do not believe **him to be the Father** — a claim the same chunk denies twice over
(0383A: *hoc est credere in Filium quod et in Patrem*; 0383C: *ego novi Patrem, quia ab illo
sum*), and which the sentence's own two other clauses contradict, both of which turn on being
drawn *a Patre*. One short preposition is missing. ⚠ **That is precisely the shape that comes
back as our own file more often than not**, so no accusation is made: the English renders
*Patrem*, the conjecture stands beside it, and if the plate prints *a Patre* this becomes a TEI
patch and the marker comes out.

### DECLINED — the two conjecture candidates I did NOT mark

**0387D `assensionem`** (chunk 0012, VERS. 33). *quaeretis me post resurrectionem et
assensionem.* The sense wants *ascensionem*; *assensio* ("assent") is a real word, and the same
chunk prints *post ascensionem* correctly at 0388C. ⛔ **I decline the conjecture marker anyway**,
on the bar in (a).4: "after the resurrection and the assent" is opaque, not false, and the
internal corroboration four columns later is the exact argument 9004 measured as worthless for
attribution (*"the correct form prints eleven words later"*). A single c/s difference is also the
most ordinary transcription slip there is. **Rendered as printed; flagged here as the first thing
to look at on leaf n199.**

**0385D `audit`** (chunk 0012, VERS. 6). *et ideo non audit vos mundus suos falsos testes.*
The verse being glossed is Jo 7:7, *Non potest mundus odisse vos: me autem odit*, which makes
*odit* the expected verb and the whole sentence turn: the world does not **hate** you, its own.
As printed, the world does not **hear** its own false witnesses, which is odd but asserts nothing
false, so it stays under Pattern 7 with no marker. **Rendered "does not hear"; flagged for the
plate.**

### RENDERED AS PRINTED, NO MARKER — read at the plate before anyone corrects them

- **0384A (0010)** — *sed audivit, unde magis moveantur.* A third-singular perfect where the
  clause wants a present, and it does not construe with *moveantur*. Rendered "but he heard,
  whence they are the more moved."
- **0387A (0012)** — *non est judicandum secundum faciem, id est actionem personarum.* The
  standing phrase is *acceptio personarum*, and the gloss's **next sentence** prints *ne in
  judicandis causis personas accipiamus*. *actionem* is a real word; rendered "the action of
  persons."
- **0387C (0012)** — *Breviter utrumque complectatur.* Subjunctive where the sense wants an
  indicative; rendered "Let him briefly comprise both."
- **0388B (0012)** — *quibus alii conderentur, alii docerentur.* *conderentur* construes
  ("might be founded") and is left; noted only because the pairing with *docerentur* invites a
  reader to emend it.
- **0388B (0012)** — *non fuit ille fons.* Perfect where the argument is timeless; carried as a
  past ("that man was not a fountain"), negation intact.
- **0389D (0013)** — *Vel signat Ecclesiam, quae relinquens Deum, fornicata erat cum daemonibus.*
  The third allegory of the adulteress makes **the Church** the one who forsook God and fornicated
  with demons; the reading a commentator would expect here is the Gentile people. A real word,
  rendered as printed.
- **0390B (0013)** — *confirmatur. veni missus a Patre.* A sentence opening in lower case after a
  full stop. English orthography capitalises it; the lower case may be his or the transcription's,
  and nothing is claimed. No mark was added or deleted.
- **0392B (0013)** — *isti eidem tributis Caesaris.* The verb is gapped from the preceding clause;
  rendered "these men serve the same by the tributes of Caesar."
- **0393A (0014)** — *ostendit Deum non patrem eis esse eorum.* Both *eis* and *eorum* stand;
  both are carried ("that God is not their father to them"). Not a Pattern 11 dittography — the
  run is not repeated, the pronoun is doubled by case.
- **0394A (0014)** — *Hinc discat homo Jesus, non malum, sed bonum reddere.* A nominative *Jesus*
  where the sense wants *a Jesu*. Rendered literally, "Hence let man learn Jesus, to render not
  evil but good," rather than supplying the preposition.
- **0383B (0010)** — *licet diversa prophetarant.* Syncopated pluperfect for *prophetaverant*:
  Pattern 9, correct Latin for its period, translated normally with no crux owed. Listed only so
  a later sweep does not churn it.

### PUNCTUATION AND LAYOUT

- ⚑ **0393C (0014), VERS. 49 ends with NO TERMINAL STOP** — *…sicut ego honorifico Patrem, sic vos
  me honoraretis* — and **none is supplied** (Pattern 8: never supply, including a terminal stop).
  The English paragraph ends the same way. This is the one place in the range where an English
  reader will see something that looks like our error and is not.
- **0387B (0012)** — the Isaias citation likewise closes without a stop after `[n: (Isa. LIII)]`;
  reproduced.
- **0386A (0012)** — *quod est - Ego non sum a meipso.* Migne's spaced hyphen is reproduced as
  printed rather than converted to a colon or a dash.
- **0384D (0011)** — *Suspenditur oratio, Quasi dicat:* — a capital after a comma, kept.
- **No em-dash occurs in any of the five English chunks** (checked mechanically: zero).

### CITATIONS THAT DO NOT RESOLVE — logged, not marked

Both pass through verbatim inside `[n: …]` per the sacred-marker rule; neither is corrected,
queried or expanded, and neither is a defect class this edition marks in the text.

- **0387B (0012)** — `[n: (Marc. XI)]` on *nemo novit Patrem nisi Filius, et cui Filius voluerit
  revelare*. The text is Matt 11:27 / Lc 10:22; **Mark has no such verse anywhere**, let alone in
  chapter XI. ⚑ Per the brief's Sect. 6.2 this is NOT the *Ibid.* class and is not proposed for
  correction; it is recorded for the index, where `refDisplay` keeps what Migne prints.
- **0393D (0014)** — `[n: (Jac. II)]` on *Deus intentator malorum est*, which is Jac **1**:13.

### CONVENTIONS INHERITED FROM MARK — the controls, none forced open

1. **The gloss voice is not archaised.** 33 `says`/`said` for *dicit*/*ait* across the five
   chunks; **zero `saith`**. Every `-eth` form in the range (13 of them: *believeth*, *eateth*,
   *quickeneth*, *seeth*, *speaketh*, *knoweth*, *seeketh*, *judgeth*, *glorifieth*, *tempteth*)
   sits **inside an italic lemma** — checked mechanically, not by eye. The archaic second person
   in the gloss (*thou doest*, *thou seest*, *thy words*) is Pattern 17's number marker on a
   singular addressee, not archaism, and it alternates with plain "you" wherever the Latin turns
   plural, in the same paragraph where it does so (0385B, 0390D, 0393B).
2. **`turba` → crowd, `multitudo` → multitude.** Mechanically 1:1 in this range: 6 `turba*` nouns
   → six "crowd", 2 `multitudo`/`multitudinem` → two "multitude", and no third word used for
   either. 0381A puts *multitudinem in te creditorum* eleven words from *turba*'s territory and
   the two stay apart.
3. **`daemonium` → demon, `diabolus` → devil.** *daemonium* at 0386C and *Daemonium habes* at
   0393D → "demon"; *daemonibus* at 0389D → "demons"; *diabolus/diaboli* at 0392C, 0393A, 0393B →
   "devil". No crossing, and the Douay "devils" pull was resisted at 0386C where it is strongest
   (*daemonium habere, qui daemonia pellit*).
4. **`gentes`.** *de Judaea ad gentes* (0385C) and *iturus est ad gentes credituras* (0388A) are
   the Judaei/gentes typology → **Gentiles**; *templo gentium* (0394C), which closes the range
   against *de figuris Judaeorum*, likewise → **Gentiles**. *ut omnes gentes docerent* (0388C) is
   the Matt 28:19 phrase → **nations**, per the rule. ⚑ One judgement call: **0380C *gentium magna
   turba sequitur*** glosses Jo 6:2's *multitudo magna* — a crowd following in Galilee, with no
   Jew/Gentile contrast in sight — so it is rendered **"a great crowd of the nations"**, generic.
   Flagged because it is the only site in the range where the axis is genuinely ambiguous, and a
   merge that prefers "Gentiles" there will get no argument from me.
   **No `natio` occurs in this range**, so nothing was flattened.
5. **`mysterium` → mystery, `sacramentum` → sacrament**, 1:1 and both present: mystery at 0381C,
   0390D, 0394C; sacrament at 0381D, 0383D, 0384C. This is the control that shows the other four
   axes are being tracked rather than asserted.

⚑ **No inherited convention was broken and no exception was taken.**

### MECHANISM 5 — the three sites where the easier reading was the wrong one

Checked by case and gender, not by sense, per the brief's Sect. 4.

- **0384C (0011)** — *ut homo vivat ex me, participatio facit **quae** me manducat.* The relative
  is **feminine** and agrees with *participatio*, not with *homo*. The English reads "the
  participation effects which eats me"; the easy reading ("he who eats me") would have rebound the
  clause to the man.
- **0383C (0010)** — *quia verbum est vita hominum **quod** et carni suae … dat vitam in
  resurrectione.* The relative is **neuter**: the giver of life is *verbum*, not *vita* (feminine)
  and not the flesh. Rendered so.
- **0382D (0010)** — *Mihi unitur humilis humili.* *humili* is dative and agrees with *Mihi*:
  "the humble man is united to me, myself humble" — not "the humble is united to the humble."

One further binding is genuinely ambiguous on the page and is left ambiguous:
**0383C, *patribus murmuratoribus quorum estis filii, murmurando non fuit panis vitae*** —
*murmurando* can attach to *quorum estis filii* ("whose sons you are by murmuring") or to *non
fuit panis vitae*. The comma before it and its position beside the verb decide the English for the
second ("was, by their murmuring, not the bread of life"). ⚑ Recording the ruling here because the
brief's Sect. 4 warns that a crux can state one reading while the English carries the rival: **the
English carries the reading just stated, and I checked the shipped sentence against this line
after writing it.**

### THE `usque ad` ABRIDGMENTS

Seven in the range (0383B, 0383D, 0386C, 0387D, 0390C, 0391C, 0394C), all rendered *as far as*,
following 9001. The text after the formula is Migne's resumed extract and is translated; the
`etc.` before it is left as printed.


---

<!-- ===== cruces-0015.md ===== -->

# Cruces — 8999, *Glossa ordinaria*, **Evangelium secundum Joannem**, chunks 0015–0019

Stint 4 of six. Cols **0394C–0407A** (chunk `colContext` bands), covering CAPUT IX–XIII: the
man born blind, the good shepherd, the *encaenia*, the raising of Lazarus, the entry into
Jerusalem, and the supper and washing of feet.

---

## (a) THE POLICY I APPLIED — stated before the findings, so it can be argued with

**1. Attribution.** I treat my own guess about whose a defect is as carrying **no evidential
weight** (brief §2; measured wrong 9 times in 14 on 9004). Concretely:

- A **real, well-formed Latin word that merely reads oddly** is rendered as printed, logged in
  §(d), and takes **no marker** — however good the internal argument. Where the argument is
  good I say so and say that it settles nothing.
- A **non-word or broken run** gets the same treatment: carried, logged, **not marked**. I fired
  **zero `[sic:]`** in this range. Two non-words are logged (0399B *impieretur*, 0400C *Sea*).
- A **`[var:]` I can cite** from `sources/vulgate/clementine-flat.txt` by book chapter:verse I
  fired — **three** of them, and every one rests on a **multi-word or lexical** divergence
  inside a quoted clause, never on a single letter.
- I fired **zero `[cj:]`**, **zero `[d:]`**, **zero `[ed:]`**.

**2. The `[var:]` bar I set, and why it is narrower than "any divergence from the Clementine."**
The class split says a quoted clause is evidence about Migne and a single word is suspicion of
our file. I read that as a statement about **what a letter-swap can manufacture**, not about
span length — so my test was: *could an OCR have produced this?* A different verb (*Redi* for
*Vade*), an inserted conjunction that re-shapes a sentence (*nisi Unigenitus*), a clause pulled
in from another verse — no. An inflection (*est* for *es*), a vowel (*quid* for *quod*), a
fusion (*Romam* for *Romani*), word order, an ae/e spelling — yes, and those are all declined
below with the reason given per span. ⛔ The hardest decline is **0395D Jo 9:34 *natus est
totus***, which is a genuine sense change (third person for second) inside a quoted clause and
would have been my fourth marker: it is declined because CLAUDE.md rule 8a records the
digitization **manufacturing** exactly this shape at 9003 (`judicabit`→`judicavit`), and a
Vulgate collation cannot see that class by construction.

**3. Negation and mechanism 5.** Every printed `non`/`nec`/`nisi`/`nullus`/`nihil` is carried,
including where carrying it leaves the sentence at odds with itself (0396D, 0398C). Where a
pronoun or relative could attach to two nouns I checked case and gender rather than sense; the
sites where I had to choose are logged in §(d) with the reading the English actually carries,
and I have re-read each English clause to confirm it carries the reading the crux claims.

**4. Inherited conventions (brief §1).** Applied from the first line. **No exception was
forced by John in this range**; the axes are exercised as follows:

| axis | in my range |
|---|---|
| `turba` / `multitudo` | **neither noun occurs**. Nothing to reconcile. |
| `daemonium` / `diabolus` | *daemones* 0398C → **demons**; *diabolus* 0395B, 0397B, 0402A → **devil**. No *satanas* as a common noun (*Satana* at 0399C is the vocative proper name inside a quotation). |
| `natio` / `gentes` | ***natio* does not occur.** *gentibus / gentium / gentili* 6× → **Gentiles**, all inside the Judaei/gentes typology (0396B, 0397D, 0402B, 0402C ×2, 0403? none). ⚑ The singular *gentem suam* at 0401A, of the Jewish people, → **"their own nation"**, Mark's third class. |
| `mysterium` / `sacramentum` | *mysterii* 0405B → **mystery**; *sacramentis* 0401D, *sacramentum* 0406B, *sacramento* 0406C → **sacrament**. 1:1. |
| gloss voice | *dicit / ait / subdit / dixit* → **says / adds / said**, never *saith*. Every `-eth` form on the page is inside an italic lemma; the italic-membership test was run on each. |

**5. Other standing rules.** Pattern 17: *tu Juda* (0401D) and *Tu quid dicis* (0394C) are
singular → **thou**; *vos / habetis / creditis* → **you**. Pattern 8b fired once, at VERS. 7
(0394D–0395A), where Migne closes an indirect question with `?` — rendered "It is asked: how
did he heal…?" Pattern 8: Migne's marks stand, including the missing terminal stop on the
0405D lemma and the medial commas at 0396C and 0405D. Guillemets: **Migne prints none in this
range and none were supplied**; three straight-quote pairs are ours (0397D "of mine", 0401C
"faithful", 0407A "whither I go"). **Em-dashes: zero.**

**6. `*usque ad*` → "down to"** (7 occurrences). ⚠ **Flag for the merge, not a finding:** the
work is already inconsistent on this above my range — chunk 0001 renders it **"as far as"**,
chunk 0005 **"down to"**. I follow 0005. One of the three should be swept at merge.

---

## (b) SPAN COUNT — RUN, AND HERE IS THE RESULT

`data/briefs/8999-lemmata-0015.txt` declares **199 spans** for chunks 0015–0019.

**I counted the `*…*` spans in my own Latin: 25 + 47 + 40 + 50 + 37 = 199. The totals agree
exactly, chunk by chunk.** No head-of-range span is missing and no tail span belongs to
another stint.

Two secondary checks, both clean: **column anchors** 6 / 12 / 9 / 13 / 10 and **`[n:]` notes**
1 / 7 / 5 / 4 / 5 reproduce the Latin 1:1, in order and in place. `node scripts/verify-english.mjs 8999`
reports *verify OK: 28 chunks, columns/notes/sections aligned*.

⚠ **One caveat on the brief's own column labels.** The brief attributes most spans to the
chunk's `colContext` band; I attribute each to the last anchor actually preceding it in the
Latin, so the band letters in my list below are finer-grained than the brief's and will not
match it line for line. The **order and the count** match exactly, which is what the check is for.

⚠ **And one substantive finding about the pre-scan itself:** at 0401A the span
`Sed ut filios Dei qui erant dispersi congregare.` is marked **✓ Clementine verbatim**, and a
literal grep of it returns **0 hits** (Jo 11:52 reads *congregaret in unum*). So a ✓ in this
file is not merely "not clearance" — at least one of them **is not a verbatim match at all**.
Walk the ✓ lines as carefully as the ⚠ ones.

---

## (c) THE LEMMA DIVERGENCE LIST — all 199 spans, in order

`=` means: read word by word against the Clementine at **the verse actually being glossed**, and
it conforms (or is a bare incipit/fragment of it, or an `*usque ad*` abridgment marker, which is
apparatus and not scripture). Everything else carries its verdict and, where declined, the reason.

**Markers fired: 3 `[var:]` — 0397C ×2, 0399C ×1. Those three columns need the plate read
before ship (`plate-gate.mjs`). No other marker of any kind was fired in this range.**

#### Chunk 0015 — 25 spans

1. [0394C] `Et praeteriens.` — =
2. [0394C] `Caecum.` — =
3. [0394D] `Neque hic peccavit.` — =
4. [0394D] `ut manifestentur opera Dei in illo.` — =
5. [0394D] `Me oportet operari.` — =
6. [0394D] `Quandiu sum in mundo.` — ⚠ **declined.** Vulg. Jo 9:5 *quamdiu*. Orthographic only, and *quandiu* is this work's own spelling elsewhere (0403C, 0403D). Pattern 9, no marker.
7. [0395A] `Et fecit lutum.` — =
8. [0395A] `Unxit oculos.` — = — but the words stand at **Jo 9:11** (*et unxit oculos meos*), not at 9:6, under which Migne prints them as a second lemma. The recension's `VERS.` addresses cover a span of verses; not a divergence.
9. [0395A] `Et venit videns,` — =
10. [0395B] `Non est hic homo a Deo,` — =
11. [0395B] `Tu quid dicis,` — =
12. [0395B] `Ille autem dixit,` — =
13. [0395B] `Donec vocaverunt,` — =
14. [0395B] `Da gloriam Deo: Nos scimus,` — =
15. [0395C] `Quid iterum,` — ⚠ **declined.** Vulg. Jo 9:27 *quod iterum vultis audire*. One word, and *quod*→*quid* is an o/i substitution of exactly the class an OCR manufactures. The gloss (*Stomachatur contra duritiam eorum*) reads equally on either. Rendered as printed, "Why again". No marker.
16. [0395C] `Maledixerunt ergo ei.` — =
17. [0395C] `Hunc autem nescimus.` — =
18. [0395C] `Hunc scimus:` — = at **Jo 7:27** (*Sed hunc scimus unde sit*), not at 9:29; the gloss's *Superius dixerant* is correct.
19. [0395C] `Nisi esset hic a Deo,` — =
20. [0395D] `In peccatis natus est totus.` — ⚠ **declined — the range's most tempting `[var:]`.** Vulg. Jo 9:34 *In peccatis natus **es** totus* (2nd person); Migne prints *est*. **Reason declined:** a one-letter inflectional difference inside a quoted clause is precisely the class CLAUDE.md rule 8a records the digitization *manufacturing* — 9003's `judicabit`→`judicavit`, which a Vulgate collation then dutifully "found" — and no collation can catch that class. A `[var:]` here would be a public claim against Migne resting on a letter. Rendered as printed ("He was born wholly in sins"); logged for the plate.
21. [0395D] `Et tu doces nos? Et ejecerunt eum foras.` — =
22. [0395D] `Quis est,` — =
23. [0395D] `Et vidisti.` — =
24. [0396A] `Ut qui non vident.` — =
25. [0396A] `Ego non judico quemquam.` — = at **Jo 8:15**, adduced as a cross-reference under VERS. 39.

#### Chunk 0016 — 47 spans

1. [0396A] `Amen, amen dico vobis.` — =
2. [0396B] `Per ostium.` — =
3. [0396B] `Fur.` — =
4. [0396B] `Pastor est ovium.` — =
5. [0396C] `Huic ostiarius aperit.` — =
6. [0396C] `Et oves,` — =
7. [0396C] `usque ad` — =
8. [0396D] `Illi autem non cognoverunt.` — =
9. [0396D] `Omnes,` — =
10. [0397A] `Si quis.` — =
11. [0397A] `Et ingredietur.` — =
12. [0397A] `Ut vitam habeant.` — =
13. [0397A] `Nisi ut furetur,` — =
14. [0397A] `Mercenarius autem,` — =
15. [0397B] `Et lupus rapit.` — =
16. [0397B] `Quia mercenarius est,` — =
17. [0397B] `Ego sum pastor.` — =
18. [0397C] `Ego sum pastor bonus et animam pono pro ovibus.` — ⚠ **`[var:]` FIRED.** Vulg. Jo 10:11 *Ego sum pastor bonus. **Bonus pastor animam suam dat pro ovibus suis.*** Migne's span joins 10:11a to a form of **10:15** (*et animam meam pono pro ovibus meis*), possessives dropped. Multi-word and structural: a letter-swap cannot manufacture it, and the gloss that follows (*Quod non ipse unus fecit*) expounds the joined clause.
19. [0397C] `Et ego.` — =
20. [0397C] `Deum nemo vidit unquam, nisi Unigenitus qui est in sinu Patris, ipse enarraverit [n: (Matth. XI)]` — ⚠ **`[var:]` FIRED.** Vulg. **Jo 1:18** *Deum nemo vidit umquam: **unigenitus Filius**, qui est in sinu Patris, ipse **enarravit**.* Migne prints *nisi Unigenitus … ipse **enarraverit***: a conjunction inserted, *Filius* dropped, the verb out of the perfect indicative. That re-shapes the sentence, not a letter of it. (Migne's note reads `(Matth. XI)` on a John quotation; reproduced verbatim per §2, not queried.)
21. [0397C] `nemo novit Filium nisi Pater, neque Patrem quis novit nisi Filius, et cui Filius voluerit revelare [n: (Matth. XI; Luc. X)]` — ⚠ **declined.** Vulg. Mt 11:27 *et cui **voluerit Filius** revelare*; Migne *et cui **Filius voluerit** revelare*. Word order only. Pattern 14's bar is a change of sense, and there is none.
22. [0397C] `Et animam meam pono.` — =
23. [0397C] `Pro ovibus.` — =
24. [0397D] `Oportet me.` — =
25. [0397D] `Et vocem meam.` — =
26. [0397D] `Quia ego,` — =
27. [0397D] `usque ad` — =
28. [0397D] `Facta sunt autem encaenia,` — =
29. [0398A] `In porticu.` — =
30. [0398A] `Circumdederunt ergo eum Judaei.` — =
31. [0398A] `Quousque animam nostram tollis?` — = verbatim Jo 10:24 — ⚑ **but a 7a″ near-miss worth recording.** The familiar English ("hold our soul in suspense") is not what *tollis* says, and the gloss turns on *tollere animas*. Rendered "take away".
32. [0398A] `Si tu es Christus, dic nobis palam.` — =
33. [0398B] `Et nemo potest rapere de manu Patris mei.` — =
34. [0398B] `Ego et Pater unum sumus.` — =
35. [0398B] `Sustulerunt ergo lapides.` — =
36. [0398C] `Facis teipsum.` — =
37. [0398C] `Ego et Pater unum sumus,` — =
38. [0398C] `Nonne scriptum est,` — =
39. [0398C] `Quia ego.` — =
40. [0398C] `Ego dixi: Dii` — =
41. [0398C] `Si illos dixit deos.` — =
42. [0398D] `Operibus credite.` — =
43. [0398D] `Quia in me est Pater.` — ⚠ **declined.** Vulg. Jo 10:38 *quia **Pater in me est***; Migne *quia in me est Pater*. Word order only.
44. [0398D] `Ego et Pater unum sumus.` — =
45. [0398D] `qui videt me, videt et Patrem;` — =
46. [0398D] `Et multi venerunt.` — =
47. [0398D] `Quia Joannes,` — =

#### Chunk 0017 — 40 spans

1. [0399A] `Erat autem.` — =
2. [0399A] `Languens Lazarus.` — =
3. [0399A] `Ecce quem amas,` — =
4. [0399B] `Pro gloria Dei,` — =
5. [0399B] `Diligebat.` — =
6. [0399B] `Duobus diebus.` — =
7. [0399B] `Eamus in Judaeam.` — =
8. [0399B] `Dicunt ei discipuli.` — =
9. [0399C] `Absit a te, Domine,` — = Mt 16:22 (the italic stops at *Domine,*). ⚑ The roman continuation Migne sets after it, *non fiet tibi istud*, diverges from the Vulgate's *non erit tibi hoc* — outside the italic, so outside 7a″. Logged, no marker.
10. [0399C] `Beatus es, Simon Barjona, quia Pater revelavit tibi,` — ⚠ **declined.** Vulg. Mt 16:17 *quia **caro et sanguis non revelavit tibi, sed** Pater meus, qui in caelis est.* Migne's span is an **abridgment**, not an altered reading: every word retained agrees with the Vulgate and the retained clause's sense is unchanged. ⚑ The dropped material contains a *non*, but no negation is dropped from anything the English renders — the span is shorter, not negated differently.
11. [0399C] `Redi post me, Satana, quia sapis non quae Dei, sed quae hominis sunt.` — ⚠ **`[var:]` FIRED.** Vulg. Mt 16:23 ***Vade** post me Satana, **scandalum es mihi**: quia **non sapis ea quae Dei sunt, sed ea quae hominum**.* Migne prints ***Redi** post me* — a different verb, not a letter-swap — and omits *scandalum es mihi*. (The *non* is displaced but not lost, and *hominis* for *hominum* is a single letter; the marker rests on *Redi*, which is what makes it a claim about wording rather than about type.)
12. [0399C] `Nonne duodecim sunt horae. [n: (HIER.)]` — =
13. [0399D] `usque ad` — =
14. [0399D] `Ut credatis.` — =
15. [0399D] `Et invenit. [n: (AUG.)]` — =
16. [0399D] `usque ad` — =
17. [0399D] `Sed et nunc scio.` — =
18. [0399D] `Etiam si mortuus fuerit.` — =
19. [0400A] `Vivet.` — =
20. [0400A] `Silentio.` — =
21. [0400A] `Et vocat te.` — =
22. [0400A] `Secuti sunt.` — =
23. [0400B] `Infremuit spiritu.` — =
24. [0400B] `Ubi posuistis eum?` — =
25. [0400B] `Non novi vos [n: (Matth. VII)]` — ⚠ **declined.** Vulg. Mt 7:23 *numquam novi vos*; cf. Mt 25:12 *nescio vos*. A loose citation of a proverbially quoted clause; sense unchanged.
26. [0400B] `Ubi est Adam? [n: (Gen. III.)]` — ⚠ **declined.** Gen 3:9 reads *Ubi **es**?* Migne gives the traditional third-person paraphrase. The gloss's point — God asking as though he did not know — is unaffected either way.
27. [0400C] `Jesus ergo,` — =
28. [0400C] `Erat autem spelunca.` — =
29. [0400C] `Domine, jam fetet.` — ⚠ **declined.** Vulg. Jo 11:39 *foetet*. ae/e orthography, Pattern 9.
30. [0400C] `Sea propter populum,` — ⚠ **NON-WORD — logged, NO MARKER.** Migne's span opens *Sea* where Jo 11:42 reads ***sed** propter populum*. Carried untranslated inside the italic lemma (nested italics are not expressible, Pattern 10). The conjecture *Sed* is certain in sense and **unattributable in origin**: d→a is an ordinary OCR shape and an ordinary broken sort alike. The span governs no translated clause, so nothing is quarantined (7a⁗ qq. 1–3 all pass).
31. [0400D] `Voce magna.` — =
32. [0400D] `Et statim prodiit.` — =
33. [0400D] `Solvite eum.` — =
34. [0400D] `Credent in eum. Et venient Romani.` — =
35. [0401A] `Et venient Romam.` — ⚠ **declined, and see §d.** Vulg. Jo 11:48 *et venient **Romani***, which Migne's own lemma four lines above prints correctly. *Romam* is a real Latin word (acc. of *Roma*), and *ni*→*m* is a textbook OCR fusion. ⛔ "The correct form prints a few lines earlier" is the reasoning §2 names as a **failed** attribution test: it corroborates that an error exists and says nothing about whose. Rendered as printed. No marker.
36. [0401A] `Hoc a semetipso. [n: (AUG.)]` — = fragment of Jo 11:51 (*Hoc **autem** a semetipso non dixit*); the lemma incipit drops *autem*.
37. [0401A] `usque ad` — =
38. [0401A] `Pro gente.` — =
39. [0401A] `Sed ut filios Dei qui erant dispersi congregare.` — ⚠ **declined — and the brief's ✓ on this span does not reproduce.** Vulg. Jo 11:52 *sed ut filios Dei, qui erant dispersi, **congregaret in unum***; Migne has the infinitive *congregare* and drops *in unum*. A literal grep of the span against `clementine-flat.txt` returns **0 hits**, so this ✓ is a pre-scan artifact — reported per the brief's own warning that ✓ is not clearance. Declined because the span is a truncated lemma and an abridgment cannot be told from a transcription slip.
40. [0401B] `Proximum autem.` — =

#### Chunk 0018 — 50 spans

1. [0401B] `Venit in Bethaniam.` — ⚠ **declined.** Vulg. Jo 12:1 *venit Bethaniam* (no preposition). ⚑ Migne's own gloss on the next line prints *prius **Bethaniam venit***, without the preposition — the two forms stand five words apart, which corroborates that they differ and says nothing as to whose the *in* is. One particle. No marker.
2. [0401B] `Maria ergo.` — =
3. [0401B] `Dixit ergo unus.` — =
4. [0401C] `Non quia,` — =
5. [0401C] `Loculos habens,` — =
6. [0401C] `Sinite illam.` — =
7. [0401D] `praevenit ungere corpus meum in sepulturam.` — =
8. [0401D] `Me autem non semper habetis.` — =
9. [0401D] `Et venerunt.` — =
10. [0401D] `Cogitaverunt.` — =
11. [0402A] `In crastinum.` — =
12. [0402A] `Clamabant. [n: (AUG.)]` — =
13. [0402A] `Rex Israel.` — =
14. [0402A] `Noli timere, filia.` — =
15. [0402B] `Ecce totus.` — ⚠ **declined.** Vulg. Jo 12:19 *ecce **mundus** totus post eum abiit*. An incipit taking the first and third words; the recension abridges lemmata this way throughout.
16. [0402B] `Hi ergo accesserunt.` — =
17. [0402B] `Jesus autem.` — =
18. [0402B] `Benedictus qui venit in nomine Domini;` — =
19. [0402B] `Venit hora ut clarificetur.` — =
20. [0402C] `Amen, amen dico vobis,` — =
21. [0402C] `Qui amat animam suam,` — =
22. [0402C] `Nisi granum frumenti. [n: (AUG.)]` — =
23. [0402C] `Qui amat. [n: (AUG.)]` — =
24. [0402D] `Qui odit animam,` — =
25. [0402D] `Si quis mihi ministrat.` — =
26. [0402D] `si quis mihi ministrat.` — =
27. [0402D] `Nunc anima mea turbata est. Et quid dicam?` — =
28. [0403A] `Pater, clarifica.` — =
29. [0403A] `Non propter me vox.` — ⚠ **declined.** Vulg. Jo 12:30 *Non propter me **haec** vox **venit***. Lemma abridgment.
30. [0403A] `Nunc judicium est.` — =
31. [0403B] `Ejicietur.` — =
32. [0403B] `Et quomodo tu,` — =
33. [0403B] `si exaltatus fuerit Filius hominis. Quis est iste Filius hominis?` — ⚠ **declined.** Vulg. Jo 12:34 *Oportet exaltari Filium hominis?*; Migne's first clause instead echoes **Jo 12:32** *si exaltatus fuero a terra*. The gloss argues that the crowd remembered his habitual self-designation rather than this sentence, and that argument stands on either wording.
34. [0403B] `Ambulate.` — =
35. [0403C] `Nescit quo vadat.` — =
36. [0403C] `Dum lucem habetis.` — =
37. [0403C] `Ab eis.` — =
38. [0403C] `Ut sermo Isaiae impleretur.` — ⚠ **declined.** Vulg. Jo 12:38 *ut sermo Isaiae **prophetae** impleretur*. One word dropped from a lemma incipit.
39. [0403D] `Non poterant. [n: (AUG.)]` — =
40. [0403D] `Gloriam Dei.` — =
41. [0403D] `Jesus.` — =
42. [0404A] `Qui credit in me.` — =
43. [0404A] `Et qui me videt, videt et eum qui,` — ⚠ **declined.** Vulg. Jo 12:45 *Et qui **videt me**, videt eum qui misit me*; Migne *Et qui **me videt**, videt **et** eum qui*. Word order plus one added *et* — and *videt **et** Patrem* is genuine Vulgate at Jo 14:9, which Migne quotes at 0398D, so contamination in either direction cannot be told apart.
44. [0404A] `Qui videt me.` — =
45. [0404A] `qui credit in me, non credit in me, sed in eum qui misit me,` — =
46. [0404B] `Ego lux.` — =
47. [0404B] `Sermo quem locutus sum.` — =
48. [0404B] `Mandatum.` — =
49. [0404C] `Et scio.` — =
50. [0404C] `Quae ergo ego loquor sicut dixit mihi Pater, sic loquor.` — =

#### Chunk 0019 — 37 spans

1. [0404C] `Ut transeat.` — =
2. [0404D] `In finem dilexit.` — =
3. [0404D] `Et coena facta.` — =
4. [0405A] `accepit vestimenta,` — =
5. [0405A] `Surgit a coena.` — =
6. [0405A] `Et ponit vestimenta.` — =
7. [0405A] `Deinde mittit.` — =
8. [0405B] `Dicit ei Petrus,` — =
9. [0405B] `Respondit.` — =
10. [0405B] `Dicit ei Simon.` — =
11. [0405B] `Qui lotus.` — =
12. [0405B] `Qui lotus.` — =
13. [0405C] `Et cum recubuisset, iterum dixit eis: Scitis quid fecerim vobis? Vos vocatis me,` — ⚠ **declined — the divergence is a COMMA.** Vulg. Jo 13:12 *cum recubuisset **iterum**, dixit eis*; Migne *cum recubuisset**,** iterum dixit eis*, which moves *iterum* from the reclining to the saying. Punctuation follows the plate (Pattern 8): rendered "when he had sat down, he said to them **again**". Migne's marks are his editors' work, and recording them is the point. No marker.
14. [0405D] `Non de omnibus.` — = Jo 13:18. ⚑ Migne's roman gloss beside it reads *qui manducat **meum** panem* where Jo 13:18 has *mecum panem* — outside the italic, so outside 7a″. Logged, no marker.
15. [0405D] `levabit contra me calcaneum suum,` — =
16. [0405D] `Amodo dico vobis.` — =
17. [0405D] `Amen, amen dico vobis.` — =
18. [0406A] `Cum haec dixisset Jesus` — = Jo 13:21 — ⚑ the span carries **no terminal stop** in Migne, and none was supplied (Pattern 8).
19. [0406A] `Et cum intinxisset panem.` — =
20. [0406B] `Dedit Judae Simonis Scariothis,` — ⚠ **declined.** Vulg. Jo 13:26 *Judae Simonis **Iscariotae***. *Scariothis* is a widely attested medieval form of the name; Pattern 9 — translate normally, no italics, no marker.
21. [0406B] `Quod facis.` — =
22. [0406B] `Quia loculos habebat.` — =
23. [0406C] `Erat autem.` — =
24. [0406C] `Nunc clarificatus est Filius hominis. [n: (AUG.)]` — =
25. [0406C] `Non estis mundi omnes,` — =
26. [0406C] `usque ad` — =
27. [0406C] `Filioli. [n: (ID.)]` — =
28. [0406C] `usque ad` — =
29. [0406C] `Quo ego vado vos non potestis venire.` — =
30. [0406D] `Mandatum novum do. [n: (AUG.)]` — =
31. [0406D] `Diliges proximum tuum sicut teipsum,` — =
32. [0406D] `usque ad` — =
33. [0406D] `Ut diligatis invicem sicut dilexi vos.` — =
34. [0406D] `Domine, quo,` — =
35. [0407A] `Sequeris autem postea.` — =
36. [0407A] `Animam meam.` — =
37. [0407A] `Non cantabit gallus,` — =
---

## (d) THIS RANGE'S OWN CRUCES, BY COLUMN

Nothing below is marked in the running text unless it says so. Where I name a conjecture I am
naming a conjecture, not an attribution.

### 0394D — *vitium propter naturam inolevit*

Real, well-formed words that read oddly: the idiom the sentence wants is *in naturam inolevit*,
"grew ingrained **into** nature," which is what makes the clause explain hereditary blindness.
*propter naturam* says "by reason of nature," which is close enough that the argument survives
and different enough to notice. Rendered as printed. **No marker; I do not know whose it is.**

### 0396A — VERS. 39: the antithesis of Jo 9:39 collapses, and the same gloss serves both halves

Migne prints: *Ut qui non vident. Id est, **qui se videre putant**, quaerunt ut videant, et qui
vident, id est, **qui se videre putant**, et medicum non quaerunt…*

The verse is an antithesis — *ut qui non vident videant, et qui vident caeci fiant* — and the
gloss glosses **both** of its halves with the identical phrase. The second occurrence is right
(*qui vident* = those who think they see); the first is glossing *qui non vident* with the
description of its opposite. As printed, the English says the same thing of both members.

⛔ **Not marked as dittography.** Pattern 11 governs a run the plate sets **twice adjacently**;
here the two copies are separated by a full clause each and each is syntactically at home. So
this is either an eye-skip in Migne's copy-text, a compositor's, or a loss in transcription, and
**I cannot tell which** — which is exactly why 11a's "mark the intrusive copy" cannot be applied:
under 11a I would have to identify an intrusion, and the first copy is not intruded matter, it is
a wrong gloss standing where a right one belongs. Rendered as printed; the broken antithesis
stays visible on the page, which is the evidence.

⚑ The same sentence has **no apodosis**: *caeci fiant* is never supplied, so the *et qui vident…*
member trails off into *et hoc est judicium*. Rendered elliptically, as printed. **Best plate
candidate in chunk 0015.**

### 0396D — the wolves persevere too: *sed in fine perseverant* twice

*Praedestinatae oves … in fine perseverant, e contra lupi ad tempus audiunt, sed in fine
perseverant.* The sheep's clause and the wolves' clause **end in the identical three words**, so
*e contra* ("on the contrary") contrasts nothing at all and the sentence asserts that the
reprobate persevere to the end. Every word is well formed. Conjecture: the wolves' verb wants a
negative, or *pereunt* / *deficiunt*. **Rendered as printed, no marker** — a plate read settles
whether Migne's page says this. ⭐ **This is the strongest single plate candidate in my whole
range**, and it is a *sense* defect with no lexical trace, so nothing mechanical will find it.

### 0396D–0397A — *Nec talis dicendus est mercenarius, ideo lupo veniente non resistit*

The *ideo* has no protasis, and Migne's comma after *mercenarius* leaves the two clauses merely
juxtaposed. It does not construe as printed. Rendered as closely as the printed words allow,
with the comma kept (Pattern 8). No conjecture I would put my name to.

### 0396C — *quia si aliud, praedicat, non audiunt oves*

Migne sets a comma **inside** the protasis, between *aliud* and *praedicat*. English word order
cannot carry a comma at that point without producing nonsense ("because if something else, he
preaches, the sheep do not hear"), so the English reads "because if he preaches something else,
the sheep do not hear." ⚠ **Recorded as a deliberate departure from Pattern 8's letter**: a
medial comma whose position has no English counterpart. Pattern 8's "render as printed and log
a crux where a printed mark makes the English genuinely unreadable" is the clause I am invoking.
Nothing is added or removed; only the comma's position is not reproducible.

### 0397A — *Unde post et abundantius habeat vitam et pascua inveniet*

Subjunctive and future indicative coordinated under one *et … et*. No English exponent for the
mismatch in a way that shows; rendered as printed ("and may have life more abundantly, and …
shall find pastures"). Pattern 9 family. No marker.

### 0399B — ***impieretur*: a non-word, carried, NOT marked**

*Ut quatriduum **impieretur**.* There is no such Latin verb; *impleretur* ("might be fulfilled")
is near-certain, and l→i is one of the commonest OCR shapes — **which is an argument that an
error exists and no argument at all about whose it is** (§2). **No `[sic:]` fired**, per the
brief.

⚠ **How it is rendered, and why the handling needed a decision.** The carried run was the
clause's **only predicate**, so 7a⁗ question 1 bites: quarantining it (or here, merely carrying
it) leaves the English verbless. Since no marker is available to hold the sense beside it, the
English reads:

> That the four days might *impieretur* [be fulfilled].

The printed run stands in italics, untranslated, per Pattern 7; the supplied sense sits in
**square brackets**, which is the corpus's existing convention for our own supplied English
(`[it]`, `[them]`), so nothing on the page claims the bracketed words are Migne's. **Flagged
for the merge** in case the plate read prefers to convert this to a `[sic:]` with the sense
beside it in the 7a⁗ form.

### 0400A — VERS. 28: *non sequeretur*, a singular where the paragraph needs a plural

*Quia si audissent Judaei eam vocatam fuisse a Jesu, **non sequeretur**, et ita **non viderent**
miraculum.* The very next verb is plural and the next sentence is *secuti sunt* — the paragraph
plainly means **the Jews** would not have followed. The printed verb is singular, and the only
singular subject available is Mary (*eam*), of whom the statement makes no sense.

**Rendered with the printed singular** ("she would not follow"), and **declined for `[cj:]`**
under Pattern 18a: a person/number anomaly that merely fails to construe stays declined, and the
English here does not assert something false so much as something incoherent, which 18a's own
examples (*suscepit* for *suscepi*) put outside the bar. No marker. ⚑ Logged as a mechanism-5
site because the *contextually easier reading is the plural* — which is precisely why I did not
take it.

### 0400C — ***Sea*: a non-word inside a lemma, carried, NOT marked**

Detailed in §(c). *Sea* for *sed* at Jo 11:42. Carried untranslated **inside** the italic span
(nested italics are not expressible, Pattern 10). Nothing translated stands under the missing
conjunction, so no force is quarantined.

### 0401A — ***Et venient Romam***, with *Romani* printed correctly four lines above

Migne's VERS. 48 lemma prints *Et venient **Romani*** (= Jo 11:48); the second lemma, in the
same column, prints *Et venient **Romam***. The gloss beside it is about the loss of place and
nation, and turns on neither.

⛔ **I decline to attribute this, and the reason is the interesting part.** *Romam* is a real
Latin word; *ni*→*m* is a textbook OCR fusion; and the correct form standing a few lines earlier
is **the exact reasoning §2 records as a failed attribution test on 9004** ("the correct form
prints eleven words later"). All three observations together establish that the two readings
differ and **nothing whatever** about which of Migne's type or Corpus Corporum's transcription
produced the second. Rendered as printed: "And they will come to Rome." **No marker.**

### 0401B — *hoc tantum Caiphas*

Elliptical; the verb is not printed. The English supplies it in square brackets, "this only did
Caiphas [say]", per the supplied-English convention. No marker.

### 0403B — *qui olim a paucis etsi extra tentetur, non laedit intus*

Does not construe: *a paucis* has no verb to govern it, and the passive *tentetur* has no
expressed subject in a clause whose sense wants an active ("though he tempt from without").
⛔ **I did not render *tentetur* actively** — that is Pattern 7a's mechanism 1, a word translated
as something other than what it means to rescue a sentence. The English reads "who of old by few,
even though he be tempted without, does not hurt within," which is as close as the printed words
allow and is visibly broken. No marker; no conjecture I would defend.

### 0404C — *ut est nata veritas **ex Pater***

*ex* governing a nominative. A real word in the wrong case — and **English has no exponent for
the case**, so "born of the Father" renders it in place and the defect is *invisible* in the
English. That is the shape Pattern 12's second test was written for (a defect that renders only
by hiding itself), and under the brief's rule it still takes **no marker**, because I cannot say
whether the *e* is Migne's sort or the transcription's. ⚑ **Named here explicitly as a marker
candidate for the plate read**, since it is the one site in my range where the English alone will
never show a reader that anything is wrong.

### 0405A — *Praetermisit altitudinem, suppositurus **ejus** humilitatem*

Mechanism 5. *ejus* can attach to **Christ** or to the *altitudinem* just named. I take it as
Christ's own lowliness, on the strength of the clause that follows in the same sentence — *cum
tam altus sic **se** humiliaverit* — and **the English carries that reading**: "being about to
place **his** lowliness beneath it." Recorded so that the choice is visible and reversible.

### 0399C, 0400B, 0405D — three quotations whose divergence sits OUTSIDE the italics

Migne quotes scripture in roman type within the gloss as well as in italic lemmata. Three of
those roman quotations diverge from the Clementine: *non fiet tibi istud* for Mt 16:22's *non
erit tibi hoc* (0399C); *Ubi est Adam?* for Gen 3:9's *Ubi es?* (0400B, though this one is
italic); and *qui manducat **meum** panem* for Jo 13:18's *mecum panem* (0405D). **None is a
lemma**, so none falls under 7a″ and none is marked. Logged because a later 7a″ pass that reads
only the italic spans will not see them, and *meum* for *mecum* is a one-letter change that
turns "eateth **with me**" into "eateth **my** bread" — a real difference of sense in a verse
about betrayal at table.

### Not reported, per brief §6

No column-band gap, no `Ibid.` antecedent, no `noteCount` mismatch, no Pattern 4 `[f:]` tail, no
Pattern 9 item is raised above as a defect. The `<LACUNA>` at 0416D is outside this range. No
bracketed *Forte* occurs in these five chunks.

---

## Summary of markers fired

| marker | count | columns |
|---|---|---|
| `[var: …]` | **3** | 0397C ×2 (Jo 10:11 conflation, Jo 1:18), 0399C ×1 (Mt 16:23 *Redi*) |
| `[sic: …]` | **0** | two non-words logged instead: 0399B *impieretur*, 0400C *Sea* |
| `[cj: …]` | **0** | 0400A *sequeretur* declined under 18a; 0404C *ex Pater* declined under §2 |
| `[d: …]` · `[ed: …]` | **0** | 0396A's doubled gloss declined under 11a (see above) |

**Plate-read debt created by this stint: three columns — 0397C and 0399C.** The seven sites
named above as candidates (0396A, 0396D, 0399B, 0400A, 0400C, 0401A, 0404C) carry **no** marker
and create no debt; they are handed to the plate read as questions, which is what the brief asks.


---

<!-- ===== cruces-0020.md ===== -->

# Cruces — 8999, *Glossa ordinaria*, **Evangelium secundum Joannem**, chunks 0020–0023

PL 114, cols **0407A–0418A** — CAPUT XIV–XVII, the Farewell Discourse and the High Priestly
Prayer (John 14–17). Stint 5 of six.

---

## (a) THE POLICY I APPLIED — stated before the findings, so it can be argued with

**1. Attribution.** I made **no claim about whose any defect is.** Where the printed Latin is
odd, broken, or a non-word, I rendered or carried it, logged it by column, and named both
candidates (Migne's type / Corpus Corporum's transcription) without asserting either. **I fired
zero `[sic:]`.** That is deliberate and it is the brief's §2: on 9004 the stints' class calls
were right 5 times and wrong 9, and on 9001 seven of eight `[sic:]` fell at the plate. My
internal arguments here read as decisive too, and that is precisely the reason not to trust
them. Every one is written out below so the plate read can settle it.

**2. Markers actually fired — 4 in 4 chunks.**

| marker | count | where |
|---|---|---|
| `[var: …]` | **3** | 0414C (1Cor 2:14), 0414C (Jo 16:29), 0416D (Jo 17:19) |
| `[cj: …]` | **1** | 0415A (*nobis* for *non*) |
| `[sic: …]` | **0** | — three candidates logged unmarked: 0411C *manao*, 0410D *liguis*, 0415A *interrogate* |
| `[d:]` `[ed:]` `[nt:]` | 0 | no dittography, no source loss, no prose notes in range |

Every `[var:]` sits on a **quoted clause** and cites `sources/vulgate/clementine-flat.txt` by
book chapter:verse — the class the brief's measured prior says stands (46/46 on 9004, 19/19 on
9001). The one `[cj:]` is on a **lost negation**, which is Pattern 18a's ratified ✅ class
(11064 @1090B *apud non* for *apud nos* is its mirror image); it is additive, asserts nothing
about whose the defect is, and the printed word keeps its English beside it.

**3. Pattern 7 / 7a.** Every `non`, `nec`, `nisi`, `nullus`, `nihil` the Latin prints is in the
English and none is in the English that the Latin does not print — including at **0409B**,
where carrying the plate faithfully leaves the sentence arguing for a distinction it does not
draw (logged below, marker declined). Printed punctuation is carried, including the comma
inside *de eo quod, videtur* (0410B), the full stop inside *est vitis. tamen* (0410D), and the
comma in *quare debeant, eum in hoc imitari* (0411D).

**4. Mechanism 5 was the live risk and I checked case and gender, not sense**, at every site
where a pronoun, relative or participle could bind two ways. The Trinitarian sites are worked
out one by one in §(d); where I made a construal, **the English carries the construal I state**
(the brief's §4 closing warning — 9001 @0199A recorded one ruling and shipped the rival).

**5. Inherited conventions (brief §1).** *turba* does not occur; *multitudo* (0407C) →
**multitude**. *daemonium* does not occur; *diabolus* (0410B) → **devil**. *mysterium* does not
occur; *sacramentum* (0410C) / *sacramentis* (0415C) → **sacrament**. *natio* does not occur.
The commentator's own voice is **not archaised** — *dicit*/*ait* → *says*; the `-eth`/`-est`
forms in these chunks all sit **inside italic lemmata** (*saith*, *believeth*, *abideth*,
*hath*, *knowest*, *speakest*), which is the italic-membership test. Pattern 17: *thou* renders
the singular address to Philip at 0408A–B and to the Father throughout CAPUT XVII; *you*
renders the plural apostles. **No inherited convention broke on this range.**

⚑ **One convention judgment worth naming:** *gens sancta* at 0409B → **holy nation** (singular
*gens* of a people, brief §1.4), and *gentibus praedicando* at 0416A → **Gentiles**, because
CAPUT XV has just set the Judaei/mundus opposition expressly (*Hic expressius Judaeos ostendit*,
0411D). Both are the settled axis, not a departure.

**6. Sacred markers.** Column anchors, `[n: …]` notes and `## ` heads reproduced verbatim, in
order, in place; counts checked mechanically against each Latin twin before writing. **λόγος at
0417A is reproduced in Greek, verbatim.** The `<LACUNA>` at 0416D is the settled false positive
of brief §6.6: our Latin reads *ut sint unum sicut et nos, haec est pax illa* continuously and
**no marker is owed there** — I confirmed the text is whole and left it alone.

---

## (b) SPAN COUNT AGAINST THE BRIEF'S 187 — I RAN IT, AND IT AGREES

`data/briefs/8999-lemmata-0020.txt` declares **187** italic spans for chunks 0020–0023. I
counted the `*…*` spans in my own Latin files:

| chunk | spans | anchors | `[n:]` |
|---|---|---|---|
| 0020 | 55 | 13 | 11 |
| 0021 | 38 | 9 | 3 |
| 0022 | 51 | 11 | 6 |
| 0023 | 43 | 11 | 2 |
| **total** | **187** | 44 | 22 |

**187 = 187. No head- or tail-slippage in my range.** (The one span that straddles a column
anchor — *Animalis [0414C] autem qui non percipit…* — is counted once, as the brief counts it.)

⚠ **Two spans that the ENGLISH adds, deliberately, and they are the only two.** English 0021 has
39 spans and English 0022 has 52, against 38 and 51 in the Latin. Both extras are **non-words
carried untranslated in italics under Pattern 7** — *liguis* (0410D) and *interrogate* (0415A).
Neither carries a `[sic:]`. **These are the only italic spans in my four chunks that do not
answer 1:1 to the Latin**, and a merge that finds the counts unequal should read this line
rather than "repair" them. Anchors and notes are 1:1 in all four chunks.

---

## (c) THE LEMMA DIVERGENCE LIST — every span, in order, with its verdict

**How to read it.** `✓` / `⚠` / `1w` are the brief's pre-scan marks, reproduced. The verdict is
mine, formed by reading the printed Latin word by word against the Clementine at the verse being
glossed — ✓ was treated as no clearance and ⚠ as no finding. **Every divergence I DECLINED
carries its reason.** The 151 entries reading "Conforms" were each walked; where a span is a
lemma cut (Migne addresses a verse by its opening words and stops), conformity means the words
he does print agree with the verse he is addressing.

| # | col | scan | span as Migne prints it | verdict |
|---|---|---|---|---|
| 1 | 0407A | ✓ | `VERS. 1.-- *Non turbetur cor vestrum,*` | Conforms to the Clementine at the verse glossed. |
| 2 | 0407A | ✓ | `*usque ad*` | Conforms to the Clementine at the verse glossed. |
| 3 | 0407A | ✓ | `VERS. 2.-- *In domo,*` | Conforms to the Clementine at the verse glossed. |
| 4 | 0407A | ✓ | `*usque ad*` | Conforms to the Clementine at the verse glossed. |
| 5 | 0407A | ⚠ | `*Si quo minus,*` | Jo 14:2. Migne *Si quo minus*, Clem. *si quominus*. **Word division only**; no sense at stake. Declined. |
| 6 | 0407A | ✓ | `*usque ad*` | Conforms to the Clementine at the verse glossed. |
| 7 | 0407A | ✓ | `VERS. 3.-- *Et si abiero. [n: (ID.)]*` | Conforms to the Clementine at the verse glossed. |
| 8 | 0407A | ✓ | `*usque ad*` | Conforms to the Clementine at the verse glossed. |
| 9 | 0407A | ✓ | `VERS. 4.-- *Et quo ego vado.*` | Conforms to the Clementine at the verse glossed. |
| 10 | 0407A | ✓ | `VERS. 5.-- *Dicit ei Thomas,*` | Conforms to the Clementine at the verse glossed. |
| 11 | 0407A | ✓ | `VERS. 7.-- *Si cognovissetis me.*` | Conforms to the Clementine at the verse glossed. |
| 12 | 0408A | ✓ | `*Si cognovissetis,*` | Conforms to the Clementine at the verse glossed. |
| 13 | 0408A | ✓ | `*Et vidistis eum.*` | Conforms to the Clementine at the verse glossed. |
| 14 | 0408A | ✓ | `VERS. 9.-- *Quomodo tu dicis.*` | Conforms to the Clementine at the verse glossed. |
| 15 | 0408A | ✓ | `*Quomodo tu dicis,*` | Conforms to the Clementine at the verse glossed. |
| 16 | 0408A | ✓ | `*A meipso.*` | Conforms to the Clementine at the verse glossed. |
| 17 | 0408B | ✓ | `VERS. 12.-- *Qui credit in me.*` | Conforms to the Clementine at the verse glossed. |
| 18 | 0408B | ✓ | `*Opera quae ego facio.*` | Conforms to the Clementine at the verse glossed. |
| 19 | 0408B | ✓ | `*Non est servus major domino.*` | Conforms to the Clementine at the verse glossed. |
| 20 | 0408B | ✓ | `*Majora horum. [n: (AUG.)]*` | Conforms to the Clementine at the verse glossed. |
| 21 | 0408B | ✓ | `*usque ad*` | Conforms to the Clementine at the verse glossed. |
| 22 | 0408B | ✓ | `VERS. 15.-- *Si diligitis me.*` | Conforms to the Clementine at the verse glossed. |
| 23 | 0408B | ✓ | `VERS. 16.-- *Et ego rogabo Patrem. [n: (THEOPH.)]*` | Conforms to the Clementine at the verse glossed. |
| 24 | 0408B | ✓ | `*usque ad*` | Conforms to the Clementine at the verse glossed. |
| 25 | 0408B | ✓ | `*Rogabo Patrem.*` | Conforms to the Clementine at the verse glossed. |
| 26 | 0408B | ✓ | `VERS. 17.-- *Quia non videt,*` | Conforms to the Clementine at the verse glossed. |
| 27 | 0408B | ✓ | `*Et in vobis.*` | Conforms to the Clementine at the verse glossed. |
| 28 | 0408D | ✓ | `VERS. 18.-- *Non relinquam.*` | Conforms to the Clementine at the verse glossed. |
| 29 | 0408D | ✓ | `VERS. 19.-- *Adhuc modicum et mundus.*` | Conforms to the Clementine at the verse glossed. |
| 30 | 0408D | ✓ | `*Quia ego vivo, et vos vivetis.*` | Conforms to the Clementine at the verse glossed. |
| 31 | 0408D | ✓ | `VERS. 20.-- *Et vos in me et ego in vobis.*` | Conforms to the Clementine at the verse glossed. |
| 32 | 0408D | ✓ | `VERS. 21.-- *Qui habet,*` | Conforms to the Clementine at the verse glossed. |
| 33 | 0408D | ✓ | `*Et ego diligam eum.*` | Conforms to the Clementine at the verse glossed. |
| 34 | 0408D | ✓ | `*Et manifestabo ei.*` | Conforms to the Clementine at the verse glossed. |
| 35 | 0408D | ✓ | `*Manifestabo ei meipsum.*` | Conforms to the Clementine at the verse glossed. |
| 36 | 0408D | ✓ | `VERS. 22.-- *Dicit ei Judas,*` | Conforms to the Clementine at the verse glossed. |
| 37 | 0408D | ✓ | `VERS. 23.-- *Ad eum veniemus.*` | Conforms to the Clementine at the verse glossed. |
| 38 | 0408D | ✓ | `*Et mansionem,*` | Conforms to the Clementine at the verse glossed. |
| 39 | 0408D | ✓ | `VERS. 25.-- *Haec locutus sum vobis.*` | Conforms to the Clementine at the verse glossed. |
| 40 | 0409C | ✓ | `*Apud vos manens.*` | Conforms to the Clementine at the verse glossed. |
| 41 | 0409C | 1w | `VERS. 26.-- *Paracletus.*` | Jo 14:26. Migne *Paracletus*, Clem. *Paraclitus*. An attested -e-/-i- spelling of one word (Pattern 9), and Migne's own gloss spells it *Paracletum* at 0408B, so it is his usage, not a slip. Declined; no English exponent. |
| 42 | 0409C | ✓ | `*Ille vos.*` | Conforms to the Clementine at the verse glossed. |
| 43 | 0409C | ✓ | `*Ille vos docebit omnia.*` | Conforms to the Clementine at the verse glossed. |
| 44 | 0409C | ✓ | `VERS. 27.-- *Pacem relinquo vobis.*` | Conforms to the Clementine at the verse glossed. |
| 45 | 0409C | 1w | `*Pacem,*` | Single word; checked in place against the verse it addresses. Conforms. |
| 46 | 0409C | ✓ | `*Pacem meam do.*` | Conforms to the Clementine at the verse glossed. |
| 47 | 0409C | ⚠ | `*Pacem super pacem [n: (Isa. XXVII)]*` | **Not located, and I decline to say where it is.** Migne's note reads (Isa. XXVII), but no Isaiah verse prints *Pacem super pacem*: Isa 27:5 has *faciet pacem mihi, pacem faciet mihi*; the nearest phrasings are Isa 26:3 *servabis pacem ; pacem* and Isa 57:19 *pacem ; pacem ei qui longe est*. A `[var:]` would have to assert WHICH verse is quoted, and that is a research question, not a translation one. **Declined**; rendered as printed. The note is reproduced verbatim and not corrected. |
| 48 | 0409C | ⚠ | `*omnia aperta et laus unicuique [n: (I Cor. IV)]*` | **A conflation, not a quotation.** *omnia aperta* answers Hbr 4:13 (*omnia autem nuda et aperta sunt oculis ejus*) and *laus unicuique* answers 1Cor 4:5 (*tunc laus erit unicuique a Deo*); Migne's note cites only (I Cor. IV). Two sources woven into one clause cannot be collated against one verse. **Declined**; rendered as printed, note verbatim. |
| 49 | 0409C | ✓ | `*Ipse enim est pax nostra [n: (Ephes. II)]*` | Conforms to the Clementine at the verse glossed. |
| 50 | 0409C | ✓ | `*Non turbetur.*` | Conforms to the Clementine at the verse glossed. |
| 51 | 0409C | ✓ | `VERS. 28.-- *Si diligeretis. [n: (AUG.)]*` | Conforms to the Clementine at the verse glossed. |
| 52 | 0409C | ✓ | `*usque ad*` | Conforms to the Clementine at the verse glossed. |
| 53 | 0409C | 1w | `*Gauderetis,*` | Single word; checked in place against the verse it addresses. Conforms. |
| 54 | 0410B | 1w | `VERS. 28.-- *Credatis.*` | Lemma conforms. ⚑ But *credatis* stands at **Jo 14:29**, not at the *VERS. 28* the address prints, and *VERS. 28* has already been used 8 lines above (0409C, correctly, for Jo 14:28). The address is Migne's structure and is reproduced exactly as printed; not corrected, not marked (brief §6.2 family). |
| 55 | 0410B | ✓ | `*Et in me,*` | Conforms to the Clementine at the verse glossed. |
| 56 | 0410B | ✓ | `VERS. 1.-- *Ego sum vitis vera.*` | Conforms to the Clementine at the verse glossed. |
| 57 | 0410C | ✓ | `*Et Pater,*` | Conforms to the Clementine at the verse glossed. |
| 58 | 0410C | ✓ | `VERS. 3.-- *Propter sermonem,*` | Conforms to the Clementine at the verse glossed. |
| 59 | 0410C | ✓ | `VERS. 5.-- *Ego sum,*` | Conforms to the Clementine at the verse glossed. |
| 60 | 0410C | ✓ | `*Ego sum vitis, vos palmites.*` | Conforms to the Clementine at the verse glossed. |
| 61 | 0410C | ✓ | `*Qui manet in me.*` | Conforms to the Clementine at the verse glossed. |
| 62 | 0410C | ✓ | `*Et ego in eo.*` | Conforms to the Clementine at the verse glossed. |
| 63 | 0410C | ✓ | `*Hic fert.*` | Conforms to the Clementine at the verse glossed. |
| 64 | 0410C | ✓ | `VERS. 6.-- *Si quis.*` | Conforms to the Clementine at the verse glossed. |
| 65 | 0410C | ✓ | `VERS. 7.-- *Et verba.*` | Conforms to the Clementine at the verse glossed. |
| 66 | 0410C | 1w | `*Petetis.*` | Single word; checked in place against the verse it addresses. Conforms. |
| 67 | 0411A | ✓ | `VERS. 8.-- *In hoc clarificatus,*` | Conforms to the Clementine at the verse glossed. |
| 68 | 0411A | ✓ | `*In hoc,*` | Conforms to the Clementine at the verse glossed. |
| 69 | 0411A | ✓ | `*Ut fructum plurimum.*` | Conforms to the Clementine at the verse glossed. |
| 70 | 0411A | 1w | `*Efficiamini.*` | Single word; checked in place against the verse it addresses. Conforms. |
| 71 | 0411A | ✓ | `VERS. 11.-- *Ut gaudium.*` | Conforms to the Clementine at the verse glossed. |
| 72 | 0411A | ✓ | `VERS. 12.-- *Hoc est praeceptum,*` | Conforms to the Clementine at the verse glossed. |
| 73 | 0411A | ✓ | `VERS. 13.-- *Majorem hac.*` | Conforms to the Clementine at the verse glossed. |
| 74 | 0411A | ✓ | `VERS. 15.-- *Jam non dicam.*` | Conforms to the Clementine at the verse glossed. |
| 75 | 0411C | ⚠ | `VERS. 17.-- *Haec manao,*` | ⛔ **NON-WORD.** Jo 15:17 reads *Haec mando vobis*; Migne's *manao* is a form of nothing. **Carried untranslated inside the italic lemma** (Pattern 10: a broken run inside an already-italic lemma takes no second italic marker) and **NO `[sic:]` FIRED** — brief §2. I do not know whether this is Migne's type or Corpus Corporum's transcription and I assert neither. **Plate read owed at 0411C.** |
| 76 | 0411C | ✓ | `*Ut diligatis. [n: (AUG.)]*` | Conforms to the Clementine at the verse glossed. |
| 77 | 0411C | ✓ | `VERS. 18.-- *Si mundus.*` | Conforms to the Clementine at the verse glossed. |
| 78 | 0411C | ✓ | `VERS. 19.-- *Mundus quod suum.*` | Conforms to the Clementine at the verse glossed. |
| 79 | 0411C | ✓ | `VERS. 20.-- *Sermonis mei.*` | Conforms to the Clementine at the verse glossed. |
| 80 | 0411C | ✓ | `*Non est.*` | Conforms to the Clementine at the verse glossed. |
| 81 | 0411C | ✓ | `*Scitote, quia me priorem vobis odio habuit.*` | Conforms to the Clementine at the verse glossed. |
| 82 | 0411C | ✓ | `*Non est servus major,*` | Conforms to the Clementine at the verse glossed. |
| 83 | 0411C | ✓ | `VERS. 22.-- *Si non venissem.*` | Conforms to the Clementine at the verse glossed. |
| 84 | 0411C | 1w | `*Excusationem,*` | Single word; checked in place against the verse it addresses. Conforms. |
| 85 | 0412A | ⚠ | `*qui sine lege peccaverunt, sine lege peribunt [n: (Rom. II)]*` | Rom 2:12. Clem. *Quicumque enim sine lege peccaverunt*; Migne opens *qui*, because the clause is woven into his own sentence (*Priores vero qui…*). Grammatical accommodation of a quotation to its host sentence, not a textual divergence. Declined. |
| 86 | 0412A | ✓ | `*De peccato.*` | Conforms to the Clementine at the verse glossed. |
| 87 | 0412A | ✓ | `VERS. 24.-- *Quae nemo,*` | Conforms to the Clementine at the verse glossed. |
| 88 | 0412A | ✓ | `*usque ad*` | Conforms to the Clementine at the verse glossed. |
| 89 | 0412A | 1w | `*Oderunt,*` | Single word; checked in place against the verse it addresses. Conforms. |
| 90 | 0412A | ✓ | `VERS. 25.-- *Quia odio.*` | Conforms to the Clementine at the verse glossed. |
| 91 | 0412A | ✓ | `VERS. 26.-- *Cum autem.*` | Conforms to the Clementine at the verse glossed. |
| 92 | 0412C | ✓ | `*Quem ego mittam.*` | Conforms to the Clementine at the verse glossed. |
| 93 | 0412C | ✓ | `*Qui a Patre.*` | Conforms to the Clementine at the verse glossed. |
| 94 | 0412C | ✓ | `*Haec locutus sum,*` | Conforms to the Clementine at the verse glossed. |
| 95 | 0412C | ✓ | `*Haec locutus sum,*` | Conforms to the Clementine at the verse glossed. |
| 96 | 0412C | ✓ | `VERS. 2.-- *Sed venit hora.*` | Conforms to the Clementine at the verse glossed. |
| 97 | 0412C | ✓ | `VERS. 4.-- *Haec autem.*` | Conforms to the Clementine at the verse glossed. |
| 98 | 0412C | ⚠ | `*Haec non dixi,*` | Jo 16:5. Clem. *Haec autem vobis ab initio non dixi*. Migne's span is a **lemma cut**, not a variant text. Declined. |
| 99 | 0412C | ✓ | `VERS. 5.-- *Vado ad eum.*` | Conforms to the Clementine at the verse glossed. |
| 100 | 0412C | ✓ | `*Domine, quo vadis?*` | Conforms to the Clementine at the verse glossed. |
| 101 | 0412C | ✓ | `VERS. 7.-- *Si enim,*` | Conforms to the Clementine at the verse glossed. |
| 102 | 0412C | ✓ | `*Si autem.*` | Conforms to the Clementine at the verse glossed. |
| 103 | 0413B | ✓ | `VERS. 8.-- *Ille arguet.*` | Conforms to the Clementine at the verse glossed. |
| 104 | 0413B | ✓ | `*usque ad*` | Conforms to the Clementine at the verse glossed. |
| 105 | 0413B | ✓ | `*Et de justitia.*` | Conforms to the Clementine at the verse glossed. |
| 106 | 0413B | ✓ | `*Non videbitis me,*` | Conforms to the Clementine at the verse glossed. |
| 107 | 0413B | ✓ | `*Justus ex fide vivit.*` | Conforms to the Clementine at the verse glossed. |
| 108 | 0413C | ✓ | `VERS. 10.-- *Et jam,*` | Conforms to the Clementine at the verse glossed. |
| 109 | 0413C | ⚠ | `*Et si novimus Christum secundum carnem, sed jam non novimus [n: (II Cor. V)]*` | 2Cor 5:16. Clem. *Et si cognovimus secundum carnem Christum, sed nunc jam non novimus*; Migne *Et si novimus Christum secundum carnem, sed jam non novimus*. Three differences: *novimus* for *cognovimus*, word order, and *jam* for *nunc jam*. **No sense turns on any of them** — and *novimus* is the word the surrounding gloss itself uses (0413A *desistant nosse*), so conforming it would have been the 7a″ error in reverse. Declined. |
| 110 | 0413C | ✓ | `VERS. 11.-- *De judicio.*` | Conforms to the Clementine at the verse glossed. |
| 111 | 0413C | ✓ | `VERS. 13.-- *Omnem veritatem,*` | Conforms to the Clementine at the verse glossed. |
| 112 | 0413C | ✓ | `*A semetipso,*` | Conforms to the Clementine at the verse glossed. |
| 113 | 0413C | ✓ | `*usque ad*` | Conforms to the Clementine at the verse glossed. |
| 114 | 0413C | ✓ | `VERS. 14.-- *Ille me clarificabit.*` | Conforms to the Clementine at the verse glossed. |
| 115 | 0413C | ✓ | `*De meo.*` | Conforms to the Clementine at the verse glossed. |
| 116 | 0413C | ⚠ | `*Omnia quaecunque habet Pater mea sunt.*` | Jo 16:15. Difference is *quaecunque* for *quaecumque*, orthographic. Declined. |
| 117 | 0414A | 1w | `VERS. 15.-- *Omnia,*` | Single word; checked in place against the verse it addresses. Conforms. |
| 118 | 0414A | ✓ | `*Spiritus Patris,*` | Conforms to the Clementine at the verse glossed. |
| 119 | 0414A | ✓ | `*usque ad*` | Conforms to the Clementine at the verse glossed. |
| 120 | 0414A | 1w | `VERS. 16.-- *Modicum.*` | Single word; checked in place against the verse it addresses. Conforms. |
| 121 | 0414A | ✓ | `*Quia vado.*` | Conforms to the Clementine at the verse glossed. |
| 122 | 0414A | ✓ | `VERS. 20.-- *Quia plorabitis.*` | Conforms to the Clementine at the verse glossed. |
| 123 | 0414A | ✓ | `VERS. 23.-- *Si quid petieritis. [n: (AUG.)]*` | Conforms to the Clementine at the verse glossed. |
| 124 | 0414A | ✓ | `*Dabit vobis.*` | Conforms to the Clementine at the verse glossed. |
| 125 | 0414A | ✓ | `VERS. 25.-- *Haec in proverbiis.*` | Conforms to the Clementine at the verse glossed. |
| 126 | 0414A | ⚠ | `*Animalis [0414C] autem qui non percipit quae sunt Spiritus Dei [n: (I Joan. I)]*` | ⭐ **`[var:]` FIRED.** Migne prints *Animalis autem **qui** non percipit **quae** sunt Spiritus Dei*; the Clementine reads **1Cor 2:14** *Animalis autem **homo non percipit ea quae** sunt Spiritus Dei*. Migne's clause has lost its subject noun and its finite verb and stands as a relative fragment. This is a **quoted clause**, which is the class the brief's measured prior says stands (46/46 on 9004, 19/19 on 9001). ⚑ Migne's note cites *(I Joan. I)*; the verse is 1Cor 2:14. **The note is reproduced verbatim and NOT corrected** — his attributions in this recension are not ours to repair. |
| 127 | 0414C | ✓ | `*Sed venit hora.*` | Conforms to the Clementine at the verse glossed. |
| 128 | 0414C | ✓ | `*In nomine meo petite.*` | ✓ in the pre-scan, and walked anyway. Migne prints *In nomine meo petite* (imperative) where **Jo 16:26** reads *in nomine meo petetis* (future) — which looked like a live divergence. **The pre-scan's ✓ decides it against me:** Jo 16:24 prints *…quidquam in nomine meo : petite, et accipietis*, so the exact sequence IS in the Clementine one verse earlier. A conflation of 16:24 into the 16:26 address is not something I can assert as a divergence. **Declined.** |
| 129 | 0414C | ⚠ | `*Et non dico vobis, quoniam ego rogabo Patrem.*` | Jo 16:26. Clem. *et non dico vobis quia ego rogabo Patrem de vobis*; Migne *quoniam* for *quia* and stops before *de vobis*. Interchangeable conjunction plus a lemma cut; no sense change. Declined. |
| 130 | 0414C | ✓ | `VERS. 27.-- *Ipse enim.*` | Conforms to the Clementine at the verse glossed. |
| 131 | 0414C | ✓ | `VERS. 28.-- *Iterum relinquo mundum.*` | Conforms to the Clementine at the verse glossed. |
| 132 | 0414C | ✓ | `VERS. 29.-- *Dicunt ei discipuli ejus.*` | Conforms to the Clementine at the verse glossed. |
| 133 | 0414C | ⚠ | `*Ecce nunc palam loquitur.*` | ⭐ **`[var:]` FIRED.** Migne prints *Ecce nunc palam **loquitur*** — third person — where **Jo 16:29** reads *Ecce nunc palam **loqueris***, the disciples addressing Jesus directly. A **person change inside a quoted clause**, and the verse is a speech TO him. Rendered as Migne prints it ("now he speaketh plainly"), with the received reading beside it. |
| 134 | 0415A | ✓ | `*Modo creditis,*` | Conforms to the Clementine at the verse glossed. |
| 135 | 0415A | ✓ | `VERS. 30.-- *Nunc scimus quia scis omnia.*` | Conforms to the Clementine at the verse glossed. |
| 136 | 0415A | ✓ | `*Et non opus est tibi,*` | Conforms to the Clementine at the verse glossed. |
| 137 | 0415A | ✓ | `VERS. 31.-- *Modo creditis.*` | Conforms to the Clementine at the verse glossed. |
| 138 | 0415B | ⚠ | `*Sperabamus quod redempturus esset Israel.*` | Lc 24:21. Clem. *nos autem sperabamus quia ipse esset redempturus Israel*; Migne *Sperabamus quod redempturus esset Israel* — drops *nos autem* and *ipse*, *quod* for *quia*, and reorders the periphrastic. A memorial abridgment used as an illustration, not as a proof-text. Declined. |
| 139 | 0415B | ✓ | `VERS. 32.-- *Et non sum,*` | Conforms to the Clementine at the verse glossed. |
| 140 | 0415B | ✓ | `*A Deo existi,*` | Conforms to the Clementine at the verse glossed. |
| 141 | 0415B | ✓ | `*Pater mecum est,*` | Conforms to the Clementine at the verse glossed. |
| 142 | 0415B | ✓ | `*Quia Pater mecum est.*` | Conforms to the Clementine at the verse glossed. |
| 143 | 0415B | ✓ | `*Relinquo mundum et vado ad Patrem,*` | Conforms to the Clementine at the verse glossed. |
| 144 | 0415B | ✓ | `*Pater mecum est,*` | Conforms to the Clementine at the verse glossed. |
| 145 | 0415C | ✓ | `VERS. 1.-- *Haec locutus est.*` | Conforms to the Clementine at the verse glossed. |
| 146 | 0415C | ✓ | `*Pater, venit hora.*` | Conforms to the Clementine at the verse glossed. |
| 147 | 0415C | ✓ | `*Venit hora.*` | Conforms to the Clementine at the verse glossed. |
| 148 | 0415C | ✓ | `*Clarifica Filium.*` | Conforms to the Clementine at the verse glossed. |
| 149 | 0415D | ✓ | `*ut Filius tuus clarificet te.*` | Conforms to the Clementine at the verse glossed. |
| 150 | 0415D | ✓ | `*Ut Filius tuus clarificet te.*` | Conforms to the Clementine at the verse glossed. |
| 151 | 0415D | ⚠ | `*ut cognoscant te, et quem misisti.*` | Jo 17:3, abridged: Clem. *ut cognoscant te, **solum Deum verum**, et quem misisti **Jesum Christum***. ⛔ **Declined, and the evidence is on the same page:** the gloss at 0416A expounds *esse unum et solum verum Deum*, so the glossator plainly has the full verse and is citing it short. An abridgment a writer demonstrably knows he is making is not a variant. |
| 152 | 0415D | ✓ | `VERS. 3.-- *Haec est autem,*` | Conforms to the Clementine at the verse glossed. |
| 153 | 0415D | ⚠ | `*Ut cognoscant te, et quem misisti,*` | Jo 17:3, same abridgment as #151, same reason. Declined. |
| 154 | 0416A | ✓ | `*ut omne quod dedisti ei det eis vitam aeternam:*` | Conforms to the Clementine at the verse glossed. |
| 155 | 0416A | ⚠ | `*haec est vita aeterna, ut cognoscant te.*` | Jo 17:3. Clem. *Haec est **autem** vita aeterna*; Migne drops *autem* here while printing it in the VERS. 3 address twelve words above (*Haec est autem,*). Within-column inconsistency of a citation's opening particle, no sense at stake. Declined; both forms rendered as printed. |
| 156 | 0416A | ✓ | `*Ut cognoscant te.*` | Conforms to the Clementine at the verse glossed. |
| 157 | 0416A | ✓ | `*Ego te clarificavi super terram.*` | Conforms to the Clementine at the verse glossed. |
| 158 | 0416A | ✓ | `VERS. 4.-- *Opus consummavi.*` | Conforms to the Clementine at the verse glossed. |
| 159 | 0416B | ⚠ | `*Quam habui apud te priusquam mundus esset;*` | Jo 17:5. Clem. *claritate quam habui, prius quam mundus esset, **apud te***; Migne moves *apud te* forward: *Quam habui apud te priusquam mundus esset*. **Word order only** — every word of the clause is present and the sense is identical. Declined. |
| 160 | 0416B | ✓ | `*Dedisti mihi,*` | Conforms to the Clementine at the verse glossed. |
| 161 | 0416B | 1w | `VERS. 5.-- *Hominibus.*` | Single word; checked in place against the verse it addresses. Conforms. |
| 162 | 0416B | ✓ | `VERS. 6.-- *Tui erant. [n: (AUG.)]*` | Conforms to the Clementine at the verse glossed. |
| 163 | 0416B | ✓ | `*usque ad*` | Conforms to the Clementine at the verse glossed. |
| 164 | 0416B | 1w | `VERS. 7.-- *Cognoverunt.*` | Single word; checked in place against the verse it addresses. Conforms. |
| 165 | 0416B | ✓ | `VERS. 9.-- *Ego pro eis rogo.*` | Conforms to the Clementine at the verse glossed. |
| 166 | 0416B | ⚠ | `*Clarifica Filium, ut Filius clarificet te,*` | Jo 17:1. Clem. *clarifica Filium **tuum**, ut Filius **tuus** clarificet te*; Migne drops both possessives here. ⚑ **Not a variant reading**: the same work prints *Clarifica Filium.* and *ut Filius tuus clarificet te.* at 0415C–D, so this is the glossator quoting his own earlier lemma short. Declined. |
| 167 | 0416B | ✓ | `VERS. 10.-- *Et mea omnia.*` | Conforms to the Clementine at the verse glossed. |
| 168 | 0416B | ⚠ | `*Mea omnia tua et tua mea sunt.*` | Jo 17:10. Clem. *et mea omnia tua **sunt**, et tua mea sunt*; Migne elides the first *sunt*. Rendered with the ellipsis kept ("All mine thine and thine mine are") rather than smoothed. Declined. |
| 169 | 0416D | ✓ | `VERS. 11.-- *Serva eos.*` | Conforms to the Clementine at the verse glossed. |
| 170 | 0416D | ✓ | `VERS. 12.-- *Cum essem.*` | Conforms to the Clementine at the verse glossed. |
| 171 | 0416D | 1w | `VERS. 17.-- *Sanctifica.*` | Single word; checked in place against the verse it addresses. Conforms. |
| 172 | 0416D | ✓ | `*Sermo tuus veritas est,*` | Conforms to the Clementine at the verse glossed. |
| 173 | 0416D | ⚠ | `VERS. 19.-- *Et pro eis ego sanctifico.*` | ⭐ **`[var:]` FIRED.** Migne prints *Et pro eis ego **sanctifico*** — present — where **Jo 17:19** reads *et pro eis ego **sanctificabo** meipsum*, future. ⚑ **The gloss decides that this is material:** the very next clause expounds it with the FUTURE, *ego me hominem **sanctificabo** in me Verbo*. The lemma and its own exposition disagree in tense on the page. Rendered as printed, received reading beside it. |
| 174 | 0417B | ✓ | `*ut sint et ipsi*` | Conforms to the Clementine at the verse glossed. |
| 175 | 0417B | ✓ | `*sanctificati in veritate*` | Conforms to the Clementine at the verse glossed. |
| 176 | 0417B | ✓ | `VERS. 20.-- *Non pro eis.*` | Conforms to the Clementine at the verse glossed. |
| 177 | 0417B | ✓ | `*Sed et pro eis qui.*` | Conforms to the Clementine at the verse glossed. |
| 178 | 0417B | ✓ | `*Per verbum.*` | Conforms to the Clementine at the verse glossed. |
| 179 | 0417C | ✓ | `VERS. 21.-- *Ut omnes unum sint.*` | Conforms to the Clementine at the verse glossed. |
| 180 | 0417C | ✓ | `*Ut et ipsi.*` | Conforms to the Clementine at the verse glossed. |
| 181 | 0417C | ⚠ | `*Ut mundus.*` | Jo 17:21. The lemma cuts *ut credat mundus* to its first and last word; the gloss then reorders it itself (*ut mundus credat*). A lemma address, not a text. Declined. |
| 182 | 0417C | ✓ | `VERS. 24.-- *Quos dedisti.*` | Conforms to the Clementine at the verse glossed. |
| 183 | 0417C | 1w | `*Volo.*` | Single word; checked in place against the verse it addresses. Conforms. |
| 184 | 0417C | ✓ | `*Non sicut ego volo [n: (Matth. XXVI)]*` | Conforms to the Clementine at the verse glossed. |
| 185 | 0417C | 1w | `*Videant.*` | Single word; checked in place against the verse it addresses. Conforms. |
| 186 | 0418A | ✓ | `VERS. 26.-- *Ut dilectio.*` | Conforms to the Clementine at the verse glossed. |
| 187 | 0418A | ⚠ | `*Et ego in ipsis sum.*` | Jo 17:26. Clem. *et ego in ipsis*; Migne adds *sum*. ⛔ Declined, and again the page says why: the gloss's next words are *Quasi dicat: Quia ego **sum** in ipsis* — the glossator is supplying the copula himself. Not a variant witness. |

---

## (d) THIS RANGE'S OWN CRUCES, BY COLUMN

Sites are grouped by what they are. **Nothing in §d.1 or §d.2 carries a marker**, and the class
claim in every heading is a description of the *shape*, never of whose the defect is.

### d.1 — Non-words and broken forms: LOGGED, CARRIED, NOT MARKED

These are the three sites I would have fired a `[sic:]` on under the older habit. Brief §2 says
log and hand them to the plate, and that is what this does. **I do not know whose any of them
is.** All three are OCR-plausible *and* compositor-plausible; the plate settles it, I cannot.

- **0411C — *Haec manao*.** Jo 15:17 reads *Haec **mando** vobis*, and the gloss immediately
  after (*Hic ostendit quis sit fructus…*) is about the commandment, so *mando* is what the
  sentence needs. *manao* is a form of nothing (*mano, manare* would give *mano*). **Carried
  untranslated inside the italic lemma** — Pattern 10's nested-italics rule, so it takes no
  second italic marker and adds no span. A reader meets `*These things manao,* etc.` and the
  facing Latin shows the same. ⚑ Note against a familiar argument: the correct form *mandatum*
  prints at 0409A and 0411B, and *praecipit* twice in the same column — which is exactly the
  "the right form prints eleven words later" reasoning the brief identifies as a failed
  attribution test. It proves the error exists. It proves nothing about whose it is.
- **0410D — *caeteris liguis*.** *ligonibus* (mattocks) is the only word *liguis* is near, and
  the sentence is about cut vine-shoots being worth less than other **woods** (*lignis*) because
  they serve no use but fire. *liguis* is a non-word. **Carried in italics, no marker**; this is
  one of the two spans the English adds (see §b).
- **0415A — *quae ipsi interrogate volebant*.** *interrogate* is a real form — a second-person
  plural imperative — with **no grammatical slot**: *volebant* governs an infinitive, and the
  clause is third-person narrative about the disciples. Under Pattern 12's own test this is the
  class that cannot render in place; under brief §2 it takes no marker. **Carried untranslated
  in italics.** The second added span.

### d.2 — Real words that read oddly: RENDERED AS PRINTED, NO MARKER

Each of these makes a sentence that limps. Under Pattern 7 the English limps with it, and under
Pattern 18a's ❌ boundaries none of them reaches the `[cj:]` bar — the printed word does not make
the sentence assert what the author is arguing against; it merely makes it awkward.

- **0409B — the distinction with nothing to distinguish. ⭐ The most interesting decline in the
  range.** Migne prints *Audito quod mundus modo videbit eum, sed ipsi videbunt … quaerit Judas
  causam hujus **discretionis***. Jo 14:22 is Judas asking why he will manifest himself to them
  *et non mundo*, and the gloss at 0408D has just said *mundus … post modicum **non** videbit*.
  With no negative here, the two halves of the contrast say the same thing and *discretio* has
  no work to do. **I declined the `[cj:]`, and the reason is that a construal survives**:
  *modo* can be read "only" rather than "now" — *the world will see him only [for a while]*,
  they always — which restores the distinction without emending anything. Where a plausible
  construal exists, 18a's ❌ ("merely awkward") governs. Rendered "will presently see him".
  **Plate read wanted at 0409B.**
- **0414A — *quo clausus non videbo*.** The parallel eight words later is *quo resuscitatus
  **videbor*** ("in which, raised up, I shall be seen"), so the active *videbo* reads as a slip
  for passive *videbor*. **Declined**: 18a scopes the ruling to negations and correlatives and
  leaves voice/person anomalies that merely fail to construe declined (its @1154C *suscepit*
  precedent). Rendered "I shall not see".
- **0414D — *Redit ad patriam*.** The three neighbouring clauses are *Reliquit mundum … **Vadit
  ad Patrem** … Reliquit mundum*, and Jo 16:28 is *vado ad Patrem*, so *patriam* reads as a slip
  for *Patrem*. **Declined** — "He returns to the fatherland" is coherent and asserts nothing
  the glossator is arguing against. Rendered as printed.
- **0416A — *Quod hic est ex Patre, in futuro erit plene*.** Against *plene* the expected
  correlative is *ex parte* (1Cor 13:9–10), and the whole paragraph is about knowledge partial
  now and full hereafter. **Declined**: *ex Patre* construes on its own terms (what we have here
  we have from the Father), and 18a's ratified correlative extension is narrow — a correlative
  whose answering member is printed and whose own member is not. Here a whole different word
  would have to be supplied. **Named as a plate-read candidate**, because *Patre*/*parte* is a
  shape a scan mangles and a compositor mis-sorts equally.
- **0411A — *similitudo dans eis aeternam aeternitatem*.** "Eternal eternity." Both words are
  real and the phrase is pleonastic, not false. Rendered as printed; no marker.
- **0415D — *id est populus innotescat*.** Intransitive *innotescat* with *populus* as subject
  gives "that the people become known", where the argument wants the Father becoming known
  through the people. Rendered literally; no marker.
- **0411B — *de dilectione proximo*.** Dative where *proximi* is expected; construable as a
  dative of reference and rendered "love toward the neighbour". No marker.
- **0409D — *singulas personas … quos*.** *quos* is masculine against feminine *personas*.
  **Pattern 9: Latin grammatical gender has no English exponent** — "whom" is the same word
  either way, there is no emendation to make or to undo. Logged so a later sweep does not churn
  it.
- **0410D — *Christus est vitis. tamen hanc gratiam…***  A full stop mid-sentence, followed by a
  lower-case *tamen*. **Pattern 8: never delete a printed mark.** Carried into the English
  exactly ("is the vine. yet he would not give"). The 9001 precedent at 0202D is the reason I do
  not guess: there a period at a line break turned out to be the digitization's, and the stint
  that carried it faithfully and said it could not tell whose it was was right to.
- **0410B — *de eo quod, videtur*.** A comma between relative and verb. Carried.
- **0411D — *subdit quare debeant, eum in hoc imitari*.** A comma splitting the verb from its
  infinitive. Carried.
- **0412D — the head address prints *VERS 1.--*, without the period** that every other address
  in these four chunks prints (*VERS. 1.--*). Reproduced exactly as printed.
- **0410B — *VERS. 28.-- Credatis*.** The address repeats *VERS. 28*, already used at 0409C for
  Jo 14:28, while *credatis* stands at **Jo 14:29**. Reproduced as printed; brief §6.2's family
  (never correct a printed reference).

### d.3 — Mechanism 5: the reference that could bind two ways

The brief names this as the dominant defect class (5 of 6 on 9001, 5 of 8 on 9004). These are
the sites in my range where it was live. **In each case I checked the morphology, and the English
carries the construal stated here** — not the other one.

- **0412C — *Spiritus procedit a Patre et Filio, sed Filius dicitur a Patre procedere*.** The
  tempting reading makes *Spiritus* the subject of *dicitur* ("but he is said to proceed from
  the Father"), which is the smoother theology. **The morphology forbids it:** *Filius* is
  nominative and *dicitur* is passive, so the Son is the subject. The sentence is then Jo 8:42
  (*ego ex Deo processi*), and it sets up the conclusion exactly: *A quo ergo habet ut sit, ab
  illo habet ut de illo procedat Spiritus* — the Son has from the Father both his being and the
  Spirit's proceeding from him. **English follows the printed nominative.**
- **0410C — *licet non de suo, nec per ipsos, sed per meipsum*.** *suo* is reflexive and would
  ordinarily bind the subject (the husbandman, i.e. Christ) — but *sed per **meipsum*** then
  contradicts it. It must bind *palmites*. Rendered **"though not out of what is their own"**.
  Logged because the case alone does not settle it; the *meipsum* contrast does.
- **0411C — *eis tollit nomen servi, qui est ex timore foras mittendo, qui nescit…***  Two
  relatives, two antecedents. The first *qui* is *nomen servi* (the name that comes of fear,
  cast out by charity — 1Jo 4:18); the second is the servant of Jo 15:15 who does not know what
  his lord does. English binds them that way.
- **0408A — *ostendit ex se noto nosci Patrem*.** *ex se noto* is ablative absolute on the Son,
  not on the Father: **"from himself, once known, the Father is known."**
- **0409A/0409B — *et quia Pater, tunc ego diligam eum*.** The elided verb of *quia Pater* is
  *diliget*, from the clause immediately before; supplied in brackets, not silently.
- **0416B — *Non enim quia Filio dedit Pater amisit*.** *Pater* is the subject of *amisit*, not
  of *dedit* alone: "the Father did not lose because he gave to the Son."
- **0417D–0418A — *quia nos sumus ille, cum secundum hominem ejus capitis sumus corpus*.** *ejus
  capitis* is genitive depending on *corpus*; rendered "we are the body of his head", not "his
  body, the head".
- **0416D — *ut sint unum in natura sua, sicut et nos in nostra sumus unum*.** The whole point is
  that the disciples' unity is **in their own nature**, not with God's; the negatives that follow
  (*non ait, ut sint unum nobiscum*) are carried in full. This is the site the brief warns about
  in kind — a mis-binding here would make the creature consubstantial with God.

### d.4 — Notes and citations: passed through, never corrected

- **0414C — `[n: (I Joan. I)]` on a quotation of 1 Cor 2:14.** Reproduced verbatim. The `[var:]`
  fired there cites the correct verse in **our** voice; Migne's siglum stays his.
- **0409C — `[n: (Isa. XXVII)]` on *Pacem super pacem***, which is at no verse of Isaiah 27 (see
  span #47). Reproduced verbatim, uncorrected, unmarked.
- **0409C — `[n: (I Cor. IV)]` on a clause conflating Hbr 4:13 with 1Cor 4:5** (span #48). Same
  treatment.
- **0408B — the THEOPH. gloss quotes Jo 14:16 as *alium **Paracletum mittet** vobis***, where the
  Clementine reads *alium Paraclitum **dabit** vobis*. This is in the **roman gloss, not an
  italic lemma**, so it is outside the 7a″ inventory and takes no `[var:]`; logged because the
  verb differs, and because the same *Paracletus* spelling recurs at 0409C and 0412C — Migne's
  usage across the work, not a local slip.
- **0416A — the gloss paraphrases Jo 17:2 as *potestatem omnis **creaturae***, where the verse
  reads *omnis **carnis***. Again roman gloss, not lemma; logged, no marker. The lemma of the
  same verse (span #156, *ut omne quod dedisti ei det eis vitam aeternam*) conforms exactly,
  which is what makes the gloss's word visible as the glossator's own.

### d.5 — The `<LACUNA>` at 0416D: confirmed closed, no marker owed

Brief §6.6. Our Latin reads *Gaudium quod supra expressit, ut sint unum sicut et **nos**, haec
est pax illa et beatitudo in [0417A] futuro saeculo* — continuous, with *nos* present and the
column break falling where the patch says it does. I checked the text at that point rather than
taking the brief's word for it, translated it as whole prose, and **fired nothing**.

---

## PLATE READ — the columns this range hands forward

In priority order, and with what each would settle:

1. **0411C** — *Haec manao*: is the non-word Migne's or Corpus Corporum's? If Migne's, a `[sic:]`
   is owed and the English carrying is already correct; if ours, a `data/tei-patches/8999.json`
   entry and the lemma reads "These things I command".
2. **0410D** — *caeteris liguis*, same question, and **the full stop in *est vitis. tamen* on the
   same column** (the 9001 @0202D shape: a stop that may belong to the digitization at a line
   break). Read the whole line, not the word.
3. **0415A** — *interrogate*, and on the same column ***nobis*** for *non*, where I fired the
   one `[cj:]`. If the plate prints *non*, the `[cj:]` comes out and the sentence is repaired at
   source; if it prints *nobis*, the `[cj:]` stands and the column is Migne's own.
4. **0409B** — the missing negative in *mundus modo videbit eum*. My decline rests on a construal
   of *modo*; the plate may print *non videbit* and end the question.
5. **0416A** — *ex Patre* / *ex parte*.
6. **0414A** — *videbo* / *videbor*; **0414D** — *patriam* / *Patrem*. Both low priority: real
   words, coherent as printed, declined on the rule rather than on doubt.
7. **The three `[var:]` columns — 0414C and 0416D** — required by the ship test (`plate-gate.mjs`)
   before this work can be marked `ours`, whatever the reading turns out to be.


---

<!-- ===== cruces-0024.md ===== -->

# Cruces — 8999, *Glossa ordinaria*, **Evangelium secundum Joannem**, chunks 0024–0027 (cols 0418A–0426B)

Stint 6 of six, and the **last range of the work**. Chunk 0027 closes at 0426B with *Nec ipsum.
Non dicit spatio non posse capi, sed capacitate legentium…*, which is the last sentence of the
work; the brief records that the plate (leaf n213/n218 of `patrologiaecursu0114mign`) shows
*Actus Apostolorum* opening below a rule on the same leaf. **Nothing is missing at the end and
no `[ed:]` is owed there.**

---

## (a) THE POLICY APPLIED — stated before the findings, so it can be argued with

### A1. Attribution: no marker on any defect whose owner I cannot name

Per the launch brief §2 and CLAUDE.md 8a. **My guess about whose a defect is carries no
evidential weight**, and I have not offered one. Concretely:

- A **real, well-formed Latin word that merely reads oddly** is rendered as printed, logged in
  §(d) below, and takes **no marker** — however good the internal argument. Sites: `liberatum`
  (0420B), `magistri` (0420B), `Separatur` (0422A), `Magdalenae`/`vidit` (0423A).
- A **non-word** gets the same treatment: carried into the English untranslated, in italics
  under Pattern 7/10, logged, and **not marked**. One site in this range: `undet` (0423B).
  I fired **zero `[sic:]`** across four chunks. Two of 9001's five stints did the same and the
  merge recorded it as the right call; that precedent is what I followed.
- Where a defect could be Migne's type or Corpus Corporum's transcription, I say so and
  **assert neither**.

### A2. `[var:]`: fired only where the divergence is bigger than one word, or where the gloss itself corroborates the divergent reading

Three `[var:]` fired, all on quoted clauses cited from `sources/vulgate/clementine-flat.txt`.
The discriminator I used, and it is the whole of it:

1. **Fire** where the divergence is a **phrase present or absent**, or a whole clause of
   different shape — an OCR letter-swap cannot manufacture that. (0420C Gen. 3:18; 0420D
   Isa. 53:7.)
2. **Fire** where the divergence is one word **but the surrounding gloss independently
   expounds the divergent reading** — the gloss is then a witness, printed on the same page,
   that the exemplar carried it, so the divergence is the text's and not a transcription slip.
   (0420C Jo. 1:29 *peccata* plural, expounded three times over as *peccatorum*.)
3. **Decline** every one-word / one-inflection divergence with no such corroboration —
   *autem* for *ergo*, *Jesum* for *illum*, *negat* for *negavit*, *vidit* for *vidi*,
   *Separatur* for *separatim*. This is the class CLAUDE.md names as unfalsifiable from our
   files: the `judicabit → judicavit` case, where the digitization **manufactured** a Vulgate
   divergence and a collation then dutifully found it. Every one is logged in §(c) with its
   reason.

I have **not** claimed that a declined divergence agrees with the Vulgate; I have claimed only
that I cannot tell our file from Migne's plate at that site.

### A3. Negation and mechanism 5

Every `non`, `nec`, `neque`, `nisi`, `nullus`, `nihil`, `ne`, `minus` the Latin prints is in the
English, including where carrying it reads awkwardly. Chunk 0027's closing pile-up (Jn 21:23–25)
is carried in full: *non sit mortuus* → "did not die"; *Non enim magnum erat dare dilecto non
mori* → "it was no great thing to grant the beloved not to die"; *Non spatio locorum … capere
non posse* → "Not by the space of places … could not contain"; *Non dicit spatio non posse
capi* → "He does not say that they cannot be contained by space". Mechanism-5 checks were made
by case and gender at every relative and participle; the four that could have gone the easy way
are recorded in §(d).

### A4. Inherited conventions (brief §1) — applied from the first line, one exception-adjacent note

- `dicit`/`ait` in the commentator's voice → **says** throughout. Archaism appears **only inside
  italic lemmata** (*He saith: I am not*, *Thou shalt deny me thrice*, *Why weepest thou?*), and
  in the unitalicised Matt. 22:30 tag at 0425B *neque nubent neque nubentur*, where 9004's
  ruling leaves it.
- `turba` → **crowd** (0418B *sine turbis* → "without the crowds"). `multitudo` does not occur
  in this range.
- `diabolus` → **devil** (0420B, twice). `daemonium` does not occur in this range.
- `natio` does not occur in this range. `gentes`: **Gentiles** in the Judaei/gentes opposition
  (0418B *converte ad gentes* against *Mitte … ad Israel*; 0419D *a Judaeis traditum gentes
  interficerent*; 0421C *Judaeos … gentes significat*; 0424A *fidem gentium* against Thomas who
  saw); **nations** where plainly generic (0421D *gentium sapientes*, *omnibus gentibus
  imperantes* — three tongues for three peoples, no typology). *gentilium* at 0420A is a fourth
  word and takes **Gentiles** in the Judaei/gentiles pairing; *gentis alienae* at 0421A, of a
  single foreign people, takes **nation**.
- `mysterium` → **mystery**, `sacramentum` → **sacrament**, 1:1. ⚑ **This range settles it
  mechanically for the merge: both words occur, and close together.** 0421C prints *grande
  mysterium piis*; 0422B prints *sacramenta Divinitatis*, 0422C *cujus sacramenta*, 0424B *tanta
  … sacramenta*. They cannot share an English word. I record that "the sacraments of the
  Godhead" (0422B) reads strainedly where "mysteries" would be idiomatic, and I **did not
  depart** — this is not an exception, it is the convention doing its job.

### A5. One drift axis the merge must settle, and it is not mine to settle

*usque ad* as the recension's abridgment marker. The three chunks of 8999 already shipped are
split **2 : 1** — 0000 and 0005 render it *down to*, 0001 renders it *as far as* — while the
sibling book **9001 (Mark) uses *as far as* throughout**. I used **down to** (within-work
majority, brief §1's "one voice within a work"), at four sites: 0421B, 0425B, 0426A ×2. **Flag,
counts and both candidates are here so the merge can flip it with one sweep either way.**

---

## (b) SPAN COUNT AGAINST THE BRIEF'S TOTAL — **RUN, AND IT AGREES**

`data/briefs/8999-lemmata-0024.txt` states **113 spans** for chunks 0024–0027.

I counted the `*…*` spans in the body of my own four Latin chunks (frontmatter excluded):

| chunk | spans |
|---|---|
| 0024 | 31 |
| 0025 | 28 |
| 0026 | 30 |
| 0027 | 24 |
| **total** | **113** |

**113 = 113. No head-of-range or tail-of-range slide.** The list in §(c) walks all 113 in the
brief's order. English italic parity holds 1 : 1 in three chunks; **0026 carries one extra
italic run in the English (31 vs 30)** and that is the Pattern 7 carry-through of the non-word
`undet` at 0423B, not a lemma.

---

## (c) THE LEMMA DIVERGENCE LIST — every span, its verdict, and the reason for every decline

Verdicts: **✓ conforms** = the printed Latin matches the Clementine at the verse being glossed
(punctuation, capitalization and lemma truncation ignored — a lemma is a cue and stops where
Migne stops). **▲ fired** = a `[var:]` stands in the English. **○ declined** = a real divergence,
logged, no marker, reason given.

### Chunk 0024 (0418A–0420B) — 31 spans

| # | col | span | verdict |
|---|---|---|---|
| 1 | 0418A | *Ubi erat.* | ✓ Jo 18:1 |
| 2 | 0418A | *Cohortem.* | ✓ Jo 18:3 |
| 3 | 0418B | *Venit illuc.* | ✓ Jo 18:3 |
| 4 | 0418B | *Ego sum.* | ✓ Jo 18:5 |
| 5 | 0418B | *Abierunt retrorsum et ceciderunt in terram.* | ✓ Jo 18:6 verbatim |
| 6 | 0418B | *Sinite hos abire.* | ✓ Jo 18:8 |
| 7 | 0418B | *Mitte.* | ✓ Jo 18:11 |
| 8 | 0418B | *Omnes enim qui gladium acceperint gladio peribunt* | **○ declined** |
| 9 | 0418B | *Cohors autem.* | **○ declined** |
| 10 | 0418B | *Et adduxerunt eum.* | ✓ Jo 18:13 |
| 11 | 0418B | *Et alius discipulus.* | ✓ Jo 18:15 |
| 12 | 0418B | *Dicit ille: Non sum.* | ✓ Jo 18:17 |
| 13 | 0419A | *Ter me negabis* | ✓ Mt 26:34 verbatim |
| 14 | 0419A | *Quid me interrogas?* | ✓ Jo 18:21 |
| 15 | 0419A | *Haec autem.* | ✓ Jo 18:22 |
| 16 | 0419A | *Si male locutus.* | ✓ Jo 18:23 |
| 17 | 0419A | *Erat autem.* | ✓ Jo 18:25 |
| 18 | 0419A | *In praetorium.* | ✓ Jo 18:28 |
| 19 | 0419C | *Ut non contaminarentur.* | ✓ Jo 18:28 verbatim |
| 20 | 0419C | *Nobis non,* | ✓ Jo 18:31 |
| 21 | 0419D | *Nobis non licet interficere quemquam;* | ✓ Jo 18:31 verbatim |
| 22 | 0419D | *A temetipso hoc dicis,* | ✓ Jo 18:34 verbatim |
| 23 | 0419D | *Quid fecisti.* | ✓ Jo 18:35 |
| 24 | 0419D | *Regnum.* | ✓ Jo 18:36 |
| 25 | 0419D | *Regnum meum non est de hoc mundo.* | ✓ Jo 18:36 verbatim |
| 26 | 0419D | *Tu dicis.* | ✓ Jo 18:37 |
| 27 | 0419D | *Ergo rex es tu?* | ✓ Jo 18:37 verbatim |
| 28 | 0420B | *Tu dicis, quia rex sum ego.* | ✓ Jo 18:37 (Migne's comma only) |
| 29 | 0420B | *Iterum.* | ✓ Jo 18:38 |
| 30 | 0420B | *Est autem.* | ✓ Jo 18:39 |
| 31 | 0420B | *Erat autem Barabbas latro.* | ✓ Jo 18:40 verbatim |

**Declines in 0024:**

- **#8, 0418B, Mt 26:52.** Migne: *Omnes enim qui **gladium acceperint** gladio peribunt.*
  Clementine: *omnes enim, qui **acceperint gladium**, gladio peribunt.* **Word order only,
  and Migne also drops the Clementine's commas.** No word is added, removed or changed, and
  the gloss that follows (*Quo gladio?*) turns on the sword, not on the order. Not material;
  a `[var:]` here would be apparatus noise on a page that already carries three.
- **#9, 0418B, Jo 18:12.** Migne: *Cohors **autem**.* Clementine: *Cohors **ergo**.* A
  one-word connective inside a two-word lemma cue, of exactly the class an OCR pass can
  manufacture and no internal evidence can attribute. Declined per A2.3. ⚑ Note the gloss
  does not touch the connective, so there is no corroboration either way.

### Chunk 0025 (0420C–0422A) — 28 spans

| # | col | span | verdict |
|---|---|---|---|
| 32 | 0420C | *Tunc ergo.* | ✓ Jo 19:1 |
| 33 | 0420C | *Coronam de spinis imposuerunt.* | ✓ Jo 19:2 (Migne drops his comma) |
| 34 | 0420C | *Ecce Agnus Dei, ecce qui tollit peccata mundi.* | **▲ `[var:]` fired** |
| 35 | 0420C | *Terra tua spinas et tribulos germinabit* | **▲ `[var:]` fired** |
| 36 | 0420C | *Exivit ergo.* | ✓ Jo 19:4 |
| 37 | 0420D | *Et dicit eis.* | ✓ Jo 19:5 |
| 38 | 0420D | *Crucifige, crucifige.* | ✓ Jo 19:6, truncated before *eum* |
| 39 | 0420D | *Filium Dei.* | ✓ Jo 19:7 |
| 40 | 0420D | *Jesus autem.* | ✓ Jo 19:9 |
| 41 | 0420D | *Sicut agnus coram tondente sine voce, sic non aperuit os suum* | **▲ `[var:]` fired** |
| 42 | 0420D | *Et exinde.* | ✓ Jo 19:12 |
| 43 | 0420D | *Si hunc dimittis, non es amicus.* | ✓ Jo 19:12, truncated before *Caesaris* |
| 44 | 0420D | *Erat autem parasceve.* | **○ declined** |
| 45 | 0420D | *praeparatio,* | — not scripture: the Latin gloss on *parasceve* |
| 46 | 0420D | *usque [0421B] ad* | — abridgment marker, not a lemma |
| 47 | 0420D | *Regem vestrum crucifigam?* | ✓ Jo 19:15 verbatim |
| 48 | 0420D | *Regem vestrum crucifigam?* | ✓ Jo 19:15 verbatim (re-quoted in the gloss) |
| 49 | 0420D | *Tunc ergo.* | ✓ Jo 19:16 |
| 50 | 0420D | *Tradidit eis Jesum ut crucifigeretur.* | **○ declined** |
| 51 | 0420D | *Bajulans.* | ✓ Jo 19:17 |
| 52 | 0420D | *Et cum eo.* | ✓ Jo 19:18 |
| 53 | 0420D | *Et erat scriptum.* | ✓ Jo 19:19 |
| 54 | 0420D | *Milites ergo cum crucifixissent eum.* | ✓ Jo 19:23 verbatim |
| 55 | 0420D | *Quatuor.* | ✓ Jo 19:23 (*quatuor partes*) |
| 56 | 0420D | *Desuper.* | ✓ Jo 19:23 (*desuper contexta*) |
| 57 | 0420D | *Cum vidisset ergo Jesus matrem et discipulum stantem quem diligebat.* | ✓ Jo 19:26 (Migne drops three commas) |
| 58 | 0420D | *Si quis suorum curam non habet, fidem negat* | **○ declined** |
| 59 | 0420D | *Et ex illa hora accepit eam discipulus.* | ✓ Jo 19:27, truncated before *in sua* |

**The three fired, with their evidence:**

- **▲ #34, 0420C, Jo 1:29.** Migne: *ecce qui tollit **peccata** mundi* (plural). Clementine:
  *ecce qui tollit **peccatum** mundi* (singular). One word, and therefore inside the class A2.3
  declines — **except that the gloss expounds the plural three times over**: the lemma sits
  inside *In spinea corona **nostrorum** notatur susceptio **peccatorum***, and is followed by
  *Spinae namque in **peccatorum** significatione ponuntur.* The exposition is built on the
  plural, on the same page, in Migne's own type, which is independent evidence that the exemplar
  carried it. Fired:
  `[var: Vulg. Jo. 1:29 has the singular, "the sin of the world"]`
- **▲ #35, 0420C, Gn 3:18.** Migne: ***Terra tua** spinas et tribulos germinabit.* Clementine:
  *Spinas et tribulos germinabit **tibi**.* **A phrase present that the Vulgate does not have,
  and a word absent that it does** — the shape an OCR pass cannot manufacture. And the gloss
  is an exposition of *terra tua* specifically: *Id est, **conscientia tua** punctiones … 
  procreare non desistet.* The gloss explains nothing if the Vulgate's wording is restored.
  Fired: `[var: Vulg. Gen. 3:18 has no "thy earth," and reads "shall bring forth thorns and
  thistles to thee"]`
- **▲ #41, 0420D, Is 53:7.** Migne cites *(Isa. LIII)* and prints *Sicut agnus coram tondente
  **sine voce**, sic **non aperuit** os suum* — which is not Isaiah's Clementine wording
  (*quasi agnus coram tondente se **obmutescet**, et **non aperiet** os suum*) but, to the word,
  the form in which **Acts 8:32** quotes it. Whole-clause divergence, plus a tense shift from
  future to perfect; the gloss then argues from the silence as an accomplished fact
  (*in suo silentio non reus sed innocens habeatur*). Fired, naming both witnesses:
  `[var: Vulg. Isa. 53:7 reads "and as a lamb before his shearer shall be dumb, and he shall
  not open his mouth"; the wording printed here is that of Act. 8:32]`
  ⚑ I do **not** assert why they differ (Pattern 14 forbids it): an Old Latin reading, the
  author quoting Acts from memory, and Migne's copy-text are all open.

**Declines in 0025:**

- **#44, 0420D, Jo 19:14.** Migne: *Erat **autem** parasceve.* Clementine: *Erat **enim**
  parasceve **Paschae**.* Two differences, both innocent: a one-word connective (A2.3) and the
  ordinary truncation of a lemma cue before *Paschae*. Truncation is how this recension prints
  every lemma and is never a divergence.
- **#50, 0420D, Jo 19:16.** Migne: *Tradidit eis **Jesum** ut crucifigeretur.* Clementine:
  *tradidit eis **illum** ut crucifigeretur.* A proper name for a pronoun with the same
  referent: no change of sense, and the gloss that follows turns on *eis* and on
  *crucifigerent* vs *crucifigeretur*, never on the object. ⚑ Note that the gloss's own
  paraphrase eight words earlier prints *tradidit eis Jesum ut **crucifigatur*** — present
  subjunctive against the lemma's imperfect. **Both stand as printed**; I make no claim about
  whose the difference is.
- **#58, 0420D, 1Tm 5:8.** Migne: *Si quis suorum curam non habet, fidem **negat**.*
  Clementine: *Si quis **autem** suorum, **et maxime domesticorum**, curam non habet, fidem
  **negavit**, et est infideli deterior.* The omissions are lemma abridgment (the span carries
  Migne's own *etc.* immediately after it), and the residue is a one-word tense shift
  perfect → present. Declined on both counts; the English reads "denieth the faith", the
  present that Migne prints, and **not** the Douay perfect.

### Chunk 0026 (0422B–0424A) — 30 spans

| # | col | span | verdict |
|---|---|---|---|
| 60 | 0422A | *Currebant autem.* | ✓ Jo 20:4 |
| 61 | 0422A | *Separatur.* | **○ declined** |
| 62 | 0422A | *In unum locum.* | ✓ Jo 20:7 verbatim |
| 63 | 0422A | *Nondum enim.* | ✓ Jo 20:9 |
| 64 | 0422A | *Plorans.* | ✓ Jo 20:11 |
| 65 | 0422A | *Dum ergo,* | ✓ Jo 20:11 |
| 66 | 0422A | *Vidit duos.* | ✓ Jo 20:12 |
| 67 | 0422D | *In principio erat Verbum.* | ✓ Jo 1:1 verbatim |
| 68 | 0422D | *Verbum caro factum est.* | ✓ Jo 1:14 (Clementine's *Et* dropped at the cue's head) |
| 69 | 0422D | *Quid ploras?* | ✓ Jo 20:13 |
| 70 | 0422D | *Noli peccare.* | ✓ Jo 5:14 (*jam noli peccare*); rendered "Sin not", **not** "sin no more" — Migne prints no *amplius* |
| 71 | 0422D | *Quia tulerunt Dominum meum,* | ✓ Jo 20:13 verbatim |
| 72 | 0423A | *Et non sciebat quia Jesus,* | ✓ Jo 20:14, truncated before *est* |
| 73 | 0423A | *Quem quaeris? Illa existimans quia hortulanus esset, dicit ei.* | ✓ Jo 20:15 verbatim |
| 74 | 0423A | *Domine.* | ✓ Jo 20:15 |
| 75 | 0423A | *Si tu sustulisti eum.* | ✓ Jo 20:15 verbatim |
| 76 | 0423A | *Maria. Conversa illa dicit ei: Rabboni, quod dicitur magister. Dicit ei Jesus.* | ○ composite, see below |
| 77 | 0423A | *Venit Maria Magdalenae annuntians discipulis, quia vidit Dominum,* | **○ declined ×2** |
| 78 | 0423A | *Cum ergo,* | ✓ Jo 20:19 |
| 79 | 0423A | *Ostendit eis manus et latus.* | ✓ Jo 20:20 verbatim |
| 80 | 0423A | *Dixit ergo eis iterum. Pax vobis,* | ✓ Jo 20:21; Migne's **full stop** for the Clementine's colon is carried under Pattern 8 |
| 81 | 0423A | *Accipite Spiritum sanctum.* | ✓ Jo 20:22 |
| 82 | 0423A | *Quorum remiseritis peccata.* | ✓ Jo 20:23 |
| 83 | 0423A | *Accipite Spiritum sanctum,* | ✓ Jo 20:22 (re-quoted in the gloss) |
| 84 | 0423A | *Quorum remiseritis peccata.* | ✓ Jo 20:23 (re-quoted in the gloss) |
| 85 | 0423A | *Thomas autem unus.* | ✓ Jo 20:24 |
| 86 | 0423A | *Qui dicitur Didymus.* | ✓ Jo 20:24 |
| 87 | 0424A | *Respondit.* | ✓ Jo 20:28 |
| 88 | 0424A | *Quia vidisti me, Thoma, credidisti.* | ✓ Jo 20:29 verbatim |
| 89 | 0424A | *Beati.* | ✓ Jo 20:29 |

(#60–#89 are 30 spans, counting the two re-quotations at #83–#84. The carried non-word *undet*
at 0423B is not a lemma and is not in this list; it is logged in §(d), and it is why the English
of 0026 carries 31 italic runs against the Latin's 30.)

**Declines in 0026:**

- **#61, 0422A, Jo 20:7.** Migne's lemma is ***Separatur*** — a well-formed passive verb, "it
  is separated". The Clementine reads ***separatim***, the adverb. One word; the sense of the
  gloss (*a nostrae infirmitatis cognitione **remota** sunt*, *occultata **seorsum***) is
  compatible with either, so there is **no corroboration** in the direction A2.2 requires.
  Rendered as printed, "*It is separated.*" **I do not know whether this is Migne's type or
  Corpus Corporum's transcription and I do not guess.** The plate settles it in one line.
- **#77, 0423A, Jo 20:18 — two divergences, both declined.**
  - ***Magdalenae*** for the Clementine's ***Magdalene***. A genitive where the received text
    has the indeclinable epithet. Real Latin, one letter, no gloss depends on it; rendered
    literally, "Mary of Magdalene". ⚑ Note that the gloss on the next lemma but one
    prints *Mariae Magdalenae* correctly as a dative at 0423C — which proves an inconsistency
    exists on the page and **proves nothing about whose it is** (brief §2: "the correct form
    prints eleven words later" is the reasoning 9004 measured as a failed attribution test).
  - ***vidit*** for the Clementine's ***vidi***. One letter, and it converts Mary's direct
    speech ("I have seen the Lord") into an indirect report ("that she had seen the Lord").
    Material in sense, and I have rendered the indirect report Migne prints. But it is exactly
    the one-letter shape A2.3 declines: the gloss (*modo mulier vitam nuntiat viris*) reads
    the same under either. **Logged for the plate; no marker.**
- **#76, 0423A.** Not a divergence: the span is Jo 20:16 entire, with the opening words of
  Jo 20:17 (*Dicit ei Jesus*) run on to it as the next cue. Migne's lowercase *magister* against
  the Clementine's *Magister* is orthography with no English exponent (Pattern 9). No marker.

### Chunk 0027 (0424B–0426B) — 24 spans

| # | col | span | verdict |
|---|---|---|---|
| 90 | 0424A | *Postea manifestavit.* | ✓ Jo 21:1, truncated before *se iterum* |
| 91 | 0424B | *Sicut misit me Pater, et ego mitto vos,* | ✓ Jo 20:21 verbatim |
| 92 | 0424B | *Hoc jam.* | ✓ Jo 21:14 |
| 93 | 0424B | *Cum ergo prandissent.* | ✓ Jo 21:15 verbatim |
| 94 | 0424B | *Pasce agnos meos.* | ✓ Jo 21:15 verbatim |
| 95 | 0424B | *pasce agnos meos.* | ✓ Jo 21:15 (re-quoted in the gloss) |
| 96 | 0424D | *Simon Joannis,* | ✓ Jo 21:15 verbatim |
| 97 | 0424D | *Dicit ei tertio.* | ✓ Jo 21:17 verbatim |
| 98 | 0424D | *Contristatus est Petrus.* | ✓ Jo 21:17 verbatim |
| 99 | 0425A | *Pasce.* | ✓ Jo 21:17 |
| 100 | 0425A | *Cum autem senueris.* | ✓ Jo 21:18 verbatim |
| 101 | 0425A | *Et cum hoc dixisset.* | ✓ Jo 21:19 verbatim |
| 102 | 0425A | *Sequere me,* | ✓ Jo 21:19 (Migne's word order for the Clementine's *tu me sequere* at 21:22 is not in play; this is 21:19 *Sequere me*) |
| 103 | 0425A | *Quem diligebat Jesus.* | ✓ Jo 21:20 |
| 104 | 0425A | *usque ad* | — abridgment marker, not a lemma |
| 105 | 0426A | *Super pectus.* | ✓ Jo 21:20 (*super pectus ejus*) |
| 106 | 0426A | *omnes thesauri sapientiae et scientiae absconditi,* | ✓ Col 2:3 verbatim |
| 107 | 0426A | *Domine, hic autem quid?* | ✓ Jo 21:21 verbatim |
| 108 | 0426A | *Sic eum volo manere, donec veniam.* | ✓ Jo 21:22 (Migne's comma only) |
| 109 | 0426A | *Et non dixit ei.* | ✓ Jo 21:23 |
| 110 | 0426A | *Hic est,* | ✓ Jo 21:24 |
| 111 | 0426A | *Nec ipsum arbitror mundum.* | ✓ Jo 21:25 verbatim |
| 112 | 0426A | *usque ad* | — abridgment marker, not a lemma |
| 113 | 0426A | *Nec ipsum.* | ✓ Jo 21:25 (re-quoted as the closing cue) |

**No declines and no markers in 0027.** Every scripture span in the work's last chunk conforms
to the Clementine at its own verse. ⚑ Worth recording because it is the negative that makes the
three fired markers credible: the same walk over the same brief returned zero here.

**Summary: 113 spans walked · 3 `[var:]` fired · 7 divergences declined and reasoned · 0
`[sic:]` · 0 `[cj:]` · 0 `[ed:]` · 0 `[d:]`.**

---

## (d) THIS RANGE'S OWN CRUCES, BY COLUMN

### 0418C — *non quin post sint morituri*
Rendered "not but that they should die afterwards". Migne's `non quin` is carried whole; the
sentence is deliberately double-negative in Augustine's argument (they are let go, not because
they will never die, but because they do not yet believe as the saved believe). No defect.

### 0418B — *Illo qui igneus vertitur ante paradisum*
*igneus*, masculine nominative, agrees with *Illo … qui* (the sword), not with *paradisum*.
Rendered "By that fiery one which is turned before paradise". **Mechanism-5 site checked by
gender**; the easy reading would have attached the fire to paradise.

### 0420A — *sed ad regnum coeleste credendo venire*
Anacoluthon. *impedio* governs *dominationem vestram*; the *sed* clause then swings to a bare
infinitive with no governing verb printed. Rendered as closely as the printed words allow —
"but to come by believing to the heavenly kingdom" — with nothing supplied. **No emendation and
no marker.**

### 0420B — *sed ita liberatum est, ut neque se regem neget, nec de mundo se fateatur esse*
***liberatum*** is a real, well-formed participle and is rendered as printed: "but it is so set
free that…". ⚑ I record, and do not act on, the possibility that Migne's text stood at
***libratum*** ("so poised/balanced"), which would answer exactly to the same gloss's own
formula fifteen lines earlier at 0419A: *Ita **temperat** responsionem, ut nec veritatem
taceret, nec defendere se videretur* — the identical "neither … nor" shape about the identical
kind of answer. **That parallel proves an oddity exists. It does not prove whose it is**, and
under brief §2 it earns no marker: not a `[sic:]` (the word is real and renders in place), and
not a `[cj:]` (the English asserts nothing the author is arguing against — it is merely odd,
which 18a's bar explicitly excludes, and the 18a census is closed). Both negatives are carried.

### 0420B — *Id est filius magistri, id est diaboli … Vel Barabbas, id est filius patris*
Migne glosses *Barabbas* first as *filius **magistri*** and only then as *filius **patris***,
which is the etymology (bar-abbas). Rendered as printed, both times. ⚑ The first gloss is
**corroborated by its own sentence** — *qui latroni in suo scelere Judaeis in perfidia
**magister** fuit* — so whatever it is, it is not a bare slip of a single word; and the
recension's *Vel* signals that Migne is offering two glosses, not correcting one. No marker.

### 0421A — *(et si minus illis invidis)*
Parenthesis, elliptical, and the datives have no governing word printed. Rendered literally,
"(and if less so to those envious men)". Logged because it does not construe cleanly and a
reader will feel it; nothing is supplied and nothing is marked.

### 0421D–0422A — *Quadripertita vestis signat Ecclesiam toto orbe, qui quatuor partibus constat diffusam*
**Mechanism-5 site, decided on gender.** *qui* is masculine and can only be *orbe*, not the
feminine *vestis* or *Ecclesiam*; it is the **world** that consists of four parts, not the
garment or the Church. English follows: "the Church spread through the whole world, which
consists of four parts". The easy reading (the fourfold garment consisting of four parts) is
the wrong one and is the shape 9001's worst site had.

### 0422A — *quae in sorte Dei gratia commendatur*
Genuinely ambiguous: *Dei gratia* may be ablative ("is commended by the grace of God") or
nominative ("the grace of God is commended in the lot"). I took the ablative, which keeps
*Ecclesia* as the subject of *commendatur* across the relative — the construction the sentence
has been running since *a quo toto*. Logged so the choice is visible; the rival reading is
defensible.

### 0422B — *sed et mortuum credere noluit*
Rendered "but refused to believe him even dead", taking *et* adverbially. This is what makes
the antithesis work with the next clause (*Petrus Ecclesiam, quae cognovit carne mortuum,
viventem credidit Deum*): the Synagogue would not believe him even dead, the Church knew him
dead and believed him living. The alternative (*et* for *eum*) is not needed to construe and
would be an emendation; not taken, not marked.

### 0422C — *quia longe a nostra*
*nostra* is feminine with no expressed noun; from the sentence it is *passio*. Rendered "because
it is far from ours". Nothing supplied.

### 0422C — *nec suis oculis, nec oculis illorum duorum credentium putavit*
*putavit* takes datives that belong to *credere*. Rendered "she gave no thought either to her
own eyes or to the eyes of those two who believed", which carries both `nec`s and does not
substitute a verb Migne does not print. **Not repaired to *credidit*.**

### 0423B — *Ibi culpa abscinditur `undet` processit* — **the one non-word in this range**
`undet` is not a Latin word. **Carried into the English untranslated, in italics** under Patterns
7 and 10 — "There the fault is cut off *undet* it proceeded" — **and no `[sic:]` is fired**,
per brief §2 and CLAUDE.md 8a.

- The obvious conjecture is *unde* ("whence"), which construes at once. A second, and to my eye
  the better shape, is a **fusion of *unde* + *et*** ("whence also"), which is the class the
  brief warns is invisible to any mechanical test.
- ⚠ **7a⁗ check, run explicitly.** The quarantined run is the clause's relative adverb, which is
  7a⁗'s question 3. The clause still has both its verbs (*abscinditur*, *processit*) and carries
  no negation, so nothing false is asserted by the carry; what the reader loses is the
  connective, and the conjecture is one line away here. I have **not** silently supplied
  "whence" in the running text.
- ⛔ **I do not claim whose it is.** A non-word is not automatically our file's — 9001 @0203A
  *magnitudino* is Migne's — and this is precisely a plate question.

### 0423B — *et quae tunc verba serpentis modo narrat verba vivificatoris*
Zeugma: one verb (*narrat*) serving two clauses in different tenses, with nothing printed for
the first. English cannot carry that, so the supplied verb rides in **square brackets** on the
existing supplied-word convention: "and she who then **[told]** the words of the serpent now
relates the words of the Life-giver". Flagged so a later reader can see the bracket is ours.

### 0423B — *De qua manu illatus est potus mortis, de ipsa suscipite potum vitae*
Migne prints **no quotation marks** here, so the English uses none either and the sentence runs
on from *ac si ipsis rebus dicat Deus:* exactly as the plate has it. Pattern 6: guillemets are
his and there are none to reproduce; a supplied `" "` was considered and dropped as needless.

### 0424B — *sacramenta* / 0421C — *mysterium*
See A4. Both words occur in this range, three columns apart, so the 1 : 1 convention is forced
mechanically rather than by preference. "The sacraments of the Godhead" (0422B) and "such great
sacraments" (0424B) read strainedly; that is the convention working, not drift.

### 0424C — *sed ad dies, refert*
Migne's comma falls between *dies* and *refert*, splitting the phrase from its verb. **Carried**
(Pattern 8, never delete a printed mark): the English reads "but he refers it to the days:" with
the sense-break kept as a colon before the enumeration, which is where his own construction goes.
Logged because it is a punctuation judgment and not a free one.

### 0425A — *Est ideo vel ad demonstrationem … tenet hominem poena*
Anacoluthon: *Est* is stranded with no complement, and the sentence resumes with a finite
*tenet*. Rendered "It is therefore either for the showing of the misery that is owed … that
punishment holds a man for a time", which construes the printed words without adding any.
No marker.

### 0425A — *nec parva videretur culpa, si cum illa auferretur poena*
The `nec` is carried: "and the fault would seem no small thing if the punishment were taken
away along with it". ⚑ This is a sentence that reads backwards on a first pass and is **not** a
defect: Augustine's point is that a fault whose punishment vanished with it would look trivial.
Recorded so a later sweep does not "repair" it.

### 0426A — *quanta arcana divinitate prae caeteris esset scripturus*
*divinitate* is ablative and has no governing preposition printed; *quanta arcana* is the
accusative object of *scripturus*. Rendered "how great secret things concerning the divinity he
was to write beyond the rest", which is the least-supplied reading available. The rival
("with what divinity") is possible and is logged here rather than in the text.

### 0426B — the end of the work
*Nec ipsum. Non dicit spatio non posse capi, sed capacitate legentium, quamvis salva fide rerum
plerumque verba videantur excedere fidem per hyperbolen.* Rendered with all three negations
intact. **This is the last sentence of 8999 and nothing is missing after it** (brief, plate leaf
n213/n218); **no `[ed:]` is owed and none is fired.**

### Punctuation and layout, carried without comment elsewhere
- 0423A *Dixit ergo eis iterum. **Pax vobis**,* — Migne's full stop inside the lemma where the
  Clementine has a colon. Carried (Pattern 8).
- 0424C *Prima, quotiescunque sit facta, uno die resurrectionis.* — verbless, carried.
- **Em-dashes: zero** in all four English chunks.
- **Guillemets: zero in the Latin, zero in the English**; the two places English wanted a
  quotation mark (0423B, 0424C) take none, because supplying one would misrepresent the plate
  and `" "` would have added nothing a reader needs.

---

## What the plate read should look at first, in this range

In descending order of what a single line of reading would settle:

1. **0423B `undet`** — the only non-word. One line.
2. **0422A `Separatur`** vs the Vulgate's *separatim*. One word, and it is the lemma.
3. **0423A `Magdalenae`** and **`vidit`** in Jo 20:18 — two one-letter questions in one line.
4. **0420B `liberatum`** — is Migne's text *libratum*?
5. The three `[var:]` columns, **0420C** and **0420D**, which the ship test requires read before
   the work can be marked `ours` (CLAUDE.md 8a): they are two columns and cover all three markers.

