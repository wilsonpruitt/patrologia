# 8949 *Liber Exodus* — cruces, stint 0040–0043 (bands 0288C–0296C)

Chunks 0040, 0041, 0042, 0043 — **CAPUT XXXIII to the end of the book**: the vision of God's
glory, the renewed tablets, the shining face of Moses, the completion of the tabernacle, and the
closing recapitulation that names Exodus in Greek, Hebrew and Latin. The **last** stint on this
work.

Plate range Gallica `bpt6k5505319w` **f144–f148**, all five leaves opened, printed corner numbers
read first on every one (287/288, 289/290, 291/292, 293/294, 295/296 — the `f = ceil(column/2)`
map held with no quire drift). Apparatus companions:
`data/briefs/8949-PLATE-READS-0040.json`, `data/briefs/8949-PENDING-TEI-PATCHES-0040.md`.

⚠ **`cruces-0030.md` and `cruces-0035.md` were not on disk when I began** — chunks 0030–0039 had
not landed — so I built the tabernacle vocabulary from the **shipped English of chunks 0000–0029**
first, and reconciled against the two peer files when they appeared mid-stint. **The reconciliation
is clean:** *hyacinth* (never "violet" for *hyacinthus*), *scarlet twice dyed*, *propitiatory*,
*candlestick* / *lamp*, *laver*, *snuffers*, *bar* for *vectis*, *ring* for *circulus*, *curtain*
for *cortina*, *board* for the tabernacle's *tabula*, *setim wood*, *brass* for *aes*, *ark of the
testament*, *Beseleel*, *prolepsis*, *precept* for *praeceptum*, *as far as* for *usque ad* — every
one of these is what I had already written.

**Two departures, both deliberate and both flagged rather than taken silently:**

1. ***sethim*, not *setim*, at 0295A.** `cruces-0030.md`'s reason for keeping the word untranslated
   is that the gloss at 0273A says outright *nec translatum est nomen Hebraeum*. Migne spells it
   **sethim** here (plate-confirmed, f148, first text line), and the same reasoning that keeps the
   Hebrew name keeps the spelling Migne gives it. Not a divergence from the convention; an
   application of its own argument.
2. ⚑ ***tabulae* of the Law: I render "tables", and so does the stint that wrote the rule.**
   `cruces-0030.md`'s vocabulary table rules *tabula* (of the Law) = **"tablet"**. But the shipped
   English of chunks **0000–0029 reads "tables of stone" at four sites, and chunks 0030–0039 — that
   stint's own chunks — read "tables of stone" and "the tables" at three more.** So the rule as
   written was never applied, including by its author, and the house usage is *tables* for the Law
   and *boards* for the tabernacle. I followed the usage, which keeps my three sites (0291B ×2,
   0291C) consistent with all seven shipped ones and with 0290C's *duas tabulas lapideas*.
   ▶ **Owed at merge: ratify the usage and correct the table, or sweep all ten sites.** Flagging it
   because a later sweep reading the rule and not the corpus would churn seven correct sites — and
   because ADJUDICATIONS §1 exists for exactly this shape of split.

---

## §1 · Span count against the brief — 120 against 120, EXACT

The brief declares **120 marked spans, of which 0 open-ended**, for chunks 0040–0043.

| chunk | italic spans, regex | italic spans, **paragraph-bounded** | `«` | `»` | anchors | `[n:]` |
|---|---|---|---|---|---|---|
| 0040 | 42 | 42 | 0 | 0 | 9 | 20 |
| 0041 | 69 | 69 | 0 | 0 | 12 | 41 |
| 0042 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0043 | 9 | 9 | 0 | 0 | 11 | 11 |
| **total** | **120** | **120** | **0** | **0** | **32** | **72** |

The two counts agree, and I checked **why** rather than inferring it from the totals: no paragraph
in any of the four files contains an odd number of asterisks, so neither an unmatched `*` running
forward nor an unmatched one shifting the pairing backward can be cancelling an error against
another (the 8950 0004–0007 false reconciliation is exactly that shape). **Zero guillemets** in all
four chunks, consistent with the brief's statement that the work's single `«` stands at 0192A,
far outside my range.

Anchors and notes are 1:1 with the Latin twin, in the same order, and each chunk's `[n:]` count
equals its own frontmatter `noteCount`.

⚑ The English files carry more asterisk pairs than the Latin, by 6 in 0040, 9 in 0041 and 1 in
0043. **Every one of those is inside a `[var: …]` marker**, where Migne's word or the Clementine's
is quoted in italic; the body counts are 42 / 69 / 0 / 9, exact.

## §2 · Marker tally

| marker | count | columns |
|---|---|---|
| `[var:]` | 8 | 0289C, 0290C ×2, 0291A, 0291B, 0292A, 0292C, 0294B |
| `[sic:]` | 2 | 0290C, 0291C |
| `[d:]` | 0 | — (one drafted at 0289B and **withdrawn at the plate**) |
| `[ed:]` | 0 | — |
| `[cj:]` | 0 | — |

**Every marked column was opened at the plate by me.** No marker in this stint stands on an unread
column, and none stands on the archive copy alone.

---

## §3 · ⭐ THE HEADLINE — this book's FIRST two `[sic:]`, and what made them safe to fire

Six stints have now run on Exodus and the running total of `[sic:]` was **zero**. Stint 0005–0009
put the reason on record: four readings that looked like Migne's broken type were all Corpus
Corporum's, and its finding was that `[sic:]` is a public accusation against Migne that this book
had not yet earned. I fired two. Both turn on a single letter, and both were settled the same way.

### 0290C — `iu` for *in*

Migne prints, in italic, inside the verse lemma of Ex 34:7:

> VERS. 7. — *Qui reddis iniquitatem patrum filiis ac nepotibus **iu** tertiam et quartam*, etc.

- **Gallica f145** (photograph, corners read first, right column, 2.6×): `iu`, plainly, the second
  stroke carrying no shoulder.
- **Our Corpus Corporum twin:** `iu`.
- **The archive copy:** `in iertiam` — it reads the preposition as `in` and breaks *tertiam*
  instead.

That third reading is the whole argument. **A 1-bit symbol-substitution codec producing a frequent,
expected word (`in`) in place of a rare non-word, while manufacturing a defect one word along, is
the documented mechanism of `PL113-WITNESS-ENCODING.md`** — it is not evidence against Gallica, it
is the behaviour ADJUDICATIONS §5 says to expect. Here Gallica and our twin **agree**, and it is
the archive that needs explaining. Rendered under the 2026-09-05 amendment: the sense is carried
and Migne's type sits inside the marker, `unto [sic: iu] the third and fourth`.

⚑ **7a⁗ check.** The marker swallows the preposition. The English says *unto* in plain words beside
it, so the clause keeps the direction the type was carrying.

### 0291C — `Isael` for *Israel*

> VERS. 34. — *Et tunc loquebatur ad filios **Isael** omnia quae sibi fuerant*, etc.

Same shape, and cleaner: **Gallica prints `Isael` in italic with no under-inking at that letter**
(the surrounding line is well inked — `loquebatur`, `omnia`, `fuerant` are all crisp at 2.6×), our
twin prints `Isael`, and the archive prints `Israel`. The archive is again the copy moving toward
the expected word, and again it is the one that needs explaining. `to the children of Israel
[sic: Isael]`.

⭐ **The rule I applied, stated so it can be checked:** a `[sic:]` fires in this book only where
**Gallica and our twin agree against the archive**. Where our twin stands alone — which is where
the other three candidates in my range fell — the finding is a TEI patch and the English renders
the plate.

## §4 · ⭐ THREE `[sic:]` CANDIDATES WITHDRAWN AT THE PLATE, and one `[d:]`

All four are filed in `8949-PENDING-TEI-PATCHES-0040.md`. Listing them here because the *class* is
the finding, not the individual sites.

| col | our twin | the plate | what was withdrawn |
|---|---|---|---|
| 0289A/B | `aliquam [0289B] quam partem` | `quod ali-` / `quam partem` — **one word, hyphenated** | a `[d: ]` dittography |
| 0291B | `decem quater dueta` | `decem quater ducta` | a `[sic: *dueta*]` |
| 0295A | `annuns erant infixi` | under-inked `annulis` (archive: `annulis`) | a `[sic: *annuns*]` |
| 0296C | `de plagis-Aegypti` | `de plagis` / `Aegypti` — line break, **no hyphen** | a `[sic:]` on a fused run |

**The 0289A/B site is the one worth reading twice.** From our twin alone it is a textbook Pattern
11 dittography — a run set twice across a column anchor, exactly the shape 0224D/0225A produced a
correct `[sic:]` for earlier in this book. It is not. Our transform doubled the fragment while
inserting the band anchor at Migne's hyphenated line break. **A dittography marker there would have
been an accusation founded entirely on our own markup**, and nothing downstream could have seen it.

⚑ Note the direction of the 0296C case: the hyphen in `plagis-Aegypti` is *ours*, and it fuses two
words the plate keeps apart. That is the **7a⁗-b fused direction** — a single well-formed-looking
token that no mechanical test sees. It was found by reading the line, and only by that.

---

## §5 · `annuns` at 0295A — what I can and cannot say

Read at **16×**. The plate shows `annu`, then three strokes, then `s`: a short minim, then a taller
stroke, then a short minim. That is not `annuns` (which needs two strokes) and it is not cleanly
`annulis` either, because the middle stroke's ascender is partly lost to inking.

What is established: **the plate does not print our twin's word**, and the archive reads the word as
*annulis*, and the sense requires *annulis* — the bars are fixed *in the rings* so the boards can
be lifted from station to station. The patch is proposed as `annulis` and the English reads "in
whose rings". **The residual uncertainty is here rather than buried**: if a later reader with a
better copy finds a third reading, the patch is the thing to revisit, not the English's "rings".

I fired no `[sic:]`, because what I demonstrated is a difference between our twin and *both*
witnesses — not a defect Migne carries.

---

## §6 · The eight `[var:]`, ranked by what the gloss is BUILT ON

The brief's rule is that the divergences worth most are the ones an argument stands on. Ranked:

### ⭐⭐ 1. 0291A — *immolatorum meorum* (Ex 34:25), and Augustine's question exists only because of it

Migne prints the Vulgate lemma and then Augustine's own text four words later:

> VERS. 25. — *Non immolabis*, etc. (AUG., quaest. 162 et 163.) Quid est quod ait: **Non occides
> super fermentum sanguinem immolatorum meorum?** An illa hoc loco dicit **immolata sua**, quae per
> pascha occiduntur…

The Clementine (Ex 34:25) has *Non immolabis super fermento sanguinem **hostiae meae***. Augustine's
next sentence asks whether *immolata sua* — "his immolated things", a **noun** — means the paschal
victims. **The Vulgate's *hostiae meae* gives him no such noun**, and the question cannot be put
from it. Conform the lemma and the paragraph loses the word it is about. Plate-confirmed at the
head of f146's left column, the first line under the running head.

### ⭐⭐ 2. 0291B — *Videns autem Aaron* and the vanished horned face (Ex 34:30)

> VERS. 30. — ***Videns** autem Aaron*, etc. (ORIG., hom. 12 in Exod.) Scriptum est quia vidit Aaron
> et omnes filii Israel **Moysen**…

The Clementine has *Videntes autem Aaron et filii Israel **cornutam Moysi faciem***. Two
divergences in one line, and they run together: Migne's participle is **singular**, agreeing with
the gloss's *vidit*, and what they see is **Moses himself**, not the *cornuta facies* — Jerome's
horned face, the most famous word in this verse. Origen's homily is about the face being
**glorified**, and it continues *in lege vultus Moysi glorificatur, licet velamine contegatur*.
The Vulgate's horns are not what he is expounding. One marker on the lemma; the gloss's *Moysen* is
named inside it rather than marked twice.

### ⭐ 3. 0289C — *prae omnibus* (Ex 33:17), which the whole question hangs from

> VERS. 17. — *Et teipsum novi*, etc. (AUG., quaest. 153.) ***Quoniam scio te prae omnibus***, etc.
> Nunquid Deus plus aliqua scit et aliqua minus?

The Clementine has *et teipsum novi **ex nomine***. Augustine's question — *does God know some
things more and some less?* — is generated by the comparative force of *prae omnibus*, "above all".
*Ex nomine* has no comparison in it at all, and from the Vulgate the question is unmotivated.
Plate-confirmed at 2.6×.

### 4. 0292A — Rom 13:14, *in deliciis* for *in desideriis*

> *Induite vos Dominum Jesum Christum, et carnis curam ne feceritis **in deliciis*** (Rom. XIII).

Clementine: *sed **induamini** Dominum Jesum Christum, et carnis curam ne feceritis **in
desideriis***. Two changes, and the second is lexical, not morphological: *deliciis* (delights,
pleasures) for *desideriis* (desires). Origen adduces the verse for *nobiliora indumenta* — nobler
**garments** — so the imperative *Induite vos* is doing work here that the passive *induamini* does
less plainly. Plate-confirmed; the archive corroborates *in deliciis*.

### 5. 0294B — the ✓-against-the-wrong-ADDRESS class, live again

> unde: *Caput viri Christus est* (**II Cor. XI**).

The words are **1 Cor 11:3**'s — and reordered: the Clementine has *omnis viri caput, Christus est*.
Migne's own citation names **Second** Corinthians. This is the class the brief names from 0227D and
0230B, and it is the reason a ✓ in the pre-scan is the beginning of a check and not the end: the
inventory scored this span ⚠ and the address it should have matched was one book away from the one
Migne prints. Plate-confirmed at f147, right column; the archive corroborates the II Cor.
attribution, so it is not our transcription.

### 6–7. 0290C — Augustine's Exodus text, twice in one paragraph

> *Et protegam* (AUG., ubi supra.) *et **tegam manu mea super te***, etc., usque ad deinde contexit
> quid Dominus postea dicat: ***Excide** tibi duas tabulas lapideas*, etc.

Clementine Ex 33:22 *et protegam **dextera mea, donec transeam***; Ex 34:1 ***Praecide**, ait, tibi
duas tabulas lapideas*. Migne sets the Vulgate's *Et protegam* and Augustine's *tegam manu mea
super te* in one breath, which is itself the evidence. Both plate-confirmed on the same 2.6× crop.
Ranked below the first five: the glosses they head are abridged away by *usque ad*, so nothing
visible on the page is built on either reading.

### 8. 0292C — Ex 36:2, the Vulgate and Augustine side by side again

> *Et qui sponte*, etc. (AUG., quaest. 170 in Exod.) *Et omnes qui **sponte vellent ire ad opera**,
> ut consummarent ea*, etc.

Clementine: *et qui **sponte sua obtulerant se ad faciendum opus***. Plate-confirmed. Same class,
same ranking reason.

## §7 · The class stated once, and the divergences I did NOT mark

**The class:** chapters XXXIII–XXXVI are carried by Augustine's *Quaestiones in Exodum* and by
Origen's homilies, and both quote a Latin Exodus that is not the Vulgate. That is a fact about the
sources, not about Migne's press, and marking every instance would turn the page into apparatus.
I marked five sites in the class and state it here for the rest.

**Declined, each with its reason:**

- **0290C `Excide`/`Praecide`** — marked (6 above), but ranked low for exactly this reason.
- **0291A `Non coques agnum in lacte matris suae`** vs the lemma's own *haedum* (Ex 34:26). Migne
  prints **both**, three words apart, the Vulgate's *kid* and Augustine's *lamb*. The gloss is then
  abridged away by *usque ad*, so nothing on the page turns on the swap. **No marker; Migne's own
  juxtaposition is the disclosure.**
- **0291C `Alia littera: Sumite a vobis ipsis redemptionem Domino`** and **0291D `Alia littera:
  Unusquisque vestrum`** — ⛔ **Migne labels these himself.** §11's rule holds: take no marker where
  he has already marked it.
- **0289B `Lucem habitat inaccessibilem`** vs 1 Tim 6:16 *lucem **in**habitat inaccessibilem*.
  Plate-confirmed as *habitat*. English has no exponent for the prefix — "dwelleth in light
  inaccessible" renders either — so a marker would announce a divergence the reader cannot see.
  Pattern 9's logic, no marker.
- **0290B `Super hanc petram aedificabo Ecclesiam`** — Mt 16:18 has *Ecclesiam **meam***. Migne
  abridges and closes with a full stop, as he abridges everywhere in this work. Not a divergence,
  an abridgment. No marker.
- **0290A `Ecce, inquit, locus est apud me`** vs Ex 33:21 *Ecce, inquit, **est locus** apud me*.
  Word order only, no sense at stake. No marker.
- **0288C `Audiens populus`** vs Ex 33:4 *Audiens**que** populus*. A lemma head clipped of its
  enclitic. No marker.
- **0293A `Fecitque candelabrum`** vs Ex 37:17 *Fecit **et** candelabrum ductile*; **0292D `Fecit
  autem Beseleel arcam`** vs Ex 37:1 *Fecit autem Beseleel **et** arcam*; **0292A `Pilosque
  caprarum`** vs Ex 35:6 *pilos caprarum*. Three lemma heads differing by a connective. No markers.
- **0293C `Locutusque est Dominus ad Moysen dicens: Mense primo`** — scored ⚠ only because it
  conflates Ex 40:1 and 40:2, which the pre-scan searches as one line. Verbatim against both. No
  marker.

## §8 · Renderings fixed here, for the merge's conventions header

- ***usque ad*** → ***as far as***, italic, following every shipped chunk of this work.
- ***praeceptum*** → **precept** throughout (ADJUDICATIONS §1's provisional convention, applied);
  ***mandatum*** keeps **commandment**. In my range the noun does not fall, but the **verb**
  *praecipio* does, three times — 0288D *praecipiente Domino*, 0290D *Cum de Sabbato praeciperet*,
  0291A *praecipit ne tunc sit in domo fermentum*. I rendered these **"the Lord enjoining it"**,
  **"when he was giving precept concerning"** and **"gives precept that"** — keeping "command" out
  of the verb as well, so the noun convention is not undercut eleven words away by its own cognate.
  ⚑ **This is a decision the merge should ratify or overturn once, not per stint.**
- ***Nostis*** at 0291D and ***Unusquisque vestrum*** at 0291D are **plural** → "you", while
  *inveniat aliquid **tuum*** … *sibi **te** defendit* in the same sentence is **singular** →
  "thine", "thee". Pattern 17 exactly, and the shift is visible on the page as Origen turns from
  the congregation to the single hearer.
- ***sethim*** (0295A), not *setim*. Chunks 0000–0029 render *setim wood* because Migne spells it
  *setim* there; here he spells it *sethim* and the English follows the plate.
- ***hyacinthum*** → **hyacinth**, never "violet" — inherited from the shipped chunks, per the note
  at the head of this file.
- ***paxillus*** → **pin** (0293B, Ex 38:20). New here; the word does not fall in any earlier range.
  Chosen over "stake" and "peg" because the gloss turns on the pins being *in modum linguae facti*
  — made after the manner of a tongue — and on their being what the cords are tied *back* to at the
  foot while little loops hold them above. "Pin" is also the Douay word at Ex 38:20, so it collides
  with nothing already fixed. ***ansula*** → **little loop**, kept distinct from *circulus* (ring),
  which stands eleven lines away at 0292D.

## §9 · Cruces carrying no marker

- **0296A `spiritualis exitus sanctus sanctorum de mundo`.** Plate-confirmed (f148, right column,
  2.6×). *sanctus* is nominative singular standing beside *sanctorum*; the phrase will not construe
  smoothly, and the obvious conjecture is that *sanctus* is a compositor's echo of the genitive
  beside it. **Rendered as printed** — "and the spiritual going out, holy, of the saints from the
  world" — with no marker: *sanctus* is a real word occupying a real slot (an adjective in
  apposition to *exitus*), which is precisely what Pattern 12 says takes no `[sic:]`. The conjecture
  lives here, and the awkwardness on the page is Migne's.
- **0291C `de servitute saeculi liberati libertatem scientiae requiramus`.** The archive reads
  *liberari*. **I did not open that line on Gallica** and take no position: *liberati* is sound,
  agrees with the subject of *requiramus*, and the archive may never be a sole witness for a letter.
  Recorded as an open, immaterial disagreement so a later reader does not think it was missed.
- **0292D `[n: (AUG., quaest. 171)].`** — the note's closing period stands **outside** the bracket,
  where every other note in the work closes inside. Migne's parenthesis is `(AUG., quaest. 171.)` on
  the plate. This is a transform artifact of the same family as §3 of the patches file, but it
  changes nothing a reader sees and no count; recorded, not patched.

## §10 · The end of the book, and the leaf it ends on

- **f148 is the work-division leaf.** Exodus ends at **0296C** and *LIBER LEVITICUS* begins below
  it; the **foot of that same leaf is already Leviticus matter** (*Tribus Levi tabernaculi
  ministerium sortita est*; *Latine Offertorius vel sacrificativus dicitur*), which is an
  independent confirmation of where the division falls. **Nothing past 0296C was translated.**
- **The Hebrew at 0296A was not re-opened and carries no marker.** ואלה שמות stands verbatim in the
  English beside Migne's own transliteration *veelle semoth*, which is what gets translated —
  mirroring the banner at 0183A. It is unitalicized in the English because our twin sets no italics
  there and span structure is 1:1.
- **CAPUT XXXIX (chunk 0042) is a row of dots on the plate too.** Migne prints the chapter head and
  a single line of widely spaced points, with no gloss. Verified at f147, left column. It is **his**
  blank, not lost digitization, and it correctly takes no `[ed: …]`.
- **The foot of all five leaves is a CHECKED ZERO**, both columns, all three key shapes (number,
  asterisk, raised letter). Recorded as a result in the plate-reads file. Per ADJUDICATIONS §4 this
  says nothing whatever about any leaf I did not open.
