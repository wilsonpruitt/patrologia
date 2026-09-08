# 8949 *Liber Exodus* — cruces, chunks 0005–0009 (bands 0193C–0205C)

Stint: CAPUT IV–VII, Moses before Pharao and the first plagues. All seven leaves of the range
were read at the plate before anything below was written.

## §1 · Span count against the brief — 133 against 133, EXACT

`data/briefs/8949-lemmata-0005.txt` declares **133** marked spans for chunks 0005–0009. Counted in
my own Latin: **133 whole-file, 133 paragraph-bounded** — the two agree, which is the check the
brief asks for, and the agreement is not the false kind, because this book prints **no guillemets
at all** in my range (0 `«`, 0 `»` across all five chunks), so there is no unmatched delimiter that
could make two errors cancel. Per chunk: 0005 = 38 · 0006 = 8 · 0007 = 33 · 0008 = 14 · 0009 = 40.

## §2 · Marker tally

| marker | count | columns |
|---|---|---|
| `[var:]` | 6 | 0195A · 0196A · 0196C · 0202B · 0203A · 0203B |
| `[sic:]` | **0** | — every candidate resolved to OUR digitization, not Migne's type (§4) |
| `[cj:]` | 0 | — |
| `[d:]` | 0 | — |
| `[ed:]` | 0 | — |

Every column carrying a marker was read at the plate: 0195, 0196, 0202, 0203. See
`data/briefs/8949-PLATE-READS-0005.json`.

## §3 · The 7a″ collation — 6 `[var:]`, and why each fired

**0195A · Ps 72:23.** Migne prints *Ut jumentum **actus** sum apud te*; the Clementine has *ut
jumentum **factus** sum apud te*. A real word, a different claim ("I was driven" for "I was made"),
inside a quoted scripture — so Pattern 14, not Pattern 18, per that pattern's own boundary rule.
The plate reads *actus* (Gallica f98, native crop, left column).

**0196A · Ex 4:12.** Augustine's lemma *Perge igitur* is the Vulgate's; but the text he then quotes
and expounds is not — Migne prints *Sed nunc vade tu, et ego **aperiam** os tuum et **instruam** te
quae locuturus es*, against the Vulgate's *Perge igitur, et ego ero in ore tuo: doceboque te quid
loquaris*. **The whole gloss rests on the divergence**: Augustine's point is that the promise is
*double* — "he did not say, Open thy mouth, and I will instruct thee; but he promises both, I will
open, and I will instruct" — and neither verb is in the Vulgate wording. Marked.

**0196C · Ex 4:19.** Migne prints *Vade, **perge** in Aegyptum* against the Vulgate's *Vade, **et
revertere** in Aegyptum*, and Augustine's next sentence turns on it exactly: *Primo enim inquit:
Vade, perge in Aegyptum, tanquam non sufficeret alterum* — "as though one were not enough." The
argument is about the two imperatives, so a reader meeting the Vulgate's *et revertere* would not
see what is being discussed. Marked; the plate sets it twice, both confirmed.

**0202B · Rom 9:5 — the most consequential of the six.** Gregory is distinguishing God said *by
appellation* from God said *essentially*, and he cites Paul as the proof: *quod volens Paulus
discernere ait: Ex quibus Christus secundum carnem natus est, qui est Deus benedictus in saecula.*
**Migne's quotation omits *super omnia*** — and two lines later Gregory's own gloss demands it:
*ut ergo ostenderet Christum naturaliter Deum, **non tantum Deum, sed Deum super omnia** esse
memoravit.* As printed, the proof-text does not contain the words the argument says Paul
"recorded". Read at the plate (Gallica f101, right column, corner numbers 201/202 read first):
Migne genuinely prints it short. Marked.

**0203A · Ps 80:11.** Migne cites *psal. LXXX* and prints ***Aperi** os tuum et implebo illud*; the
psalm reads ***Dilata** os tuum, et implebo illud*. This one is worth the note precisely because
**the same commentary quotes the same verse correctly three times in my own range** — *Dilata os
tuum, et ego implebo illud* at 0195B, *Dilata os tuum, et ego adimplebo illud* at 0196A, and *et
implebo illud* at 0196B — so *Aperi* here is a departure from the book's own practice, not a house
form. Plate-confirmed at f102, left column.

**0203B · Gn 3:1.** Migne prints *Serpens erat **prudentior** cunctis **animalibus*** against the
Vulgate's *serpens erat **callidior** cunctis **animantibus** terrae*. Material, and the gloss is
built on the very word: the preceding sentence is *Serpens vero pro sapientia vel **prudentia**
poni solet*, and the citation is adduced to prove it. With *callidior* ("more crafty") the proof
collapses. Plate-confirmed at f102, left column.

### Divergences examined and DECLINED, with the reason

These were all walked against `clementine-flat.txt` by book chapter:verse, not from recollection.

- **0193D Jn 3:14** (cited *Joan. IV*) — *Sicut exaltavit Moses serpentem* for *Et sicut Moyses
  exaltavit serpentem*: word order and name-form only. No gloss turns on it.
- **0193C Mt 10:16** and **0203B** — *Estote prudentes sicut serpentes* drops *ergo*. Not material.
  (Note that at 0203B the *prudentes* is the Vulgate's own, which is what makes the Gn 3:1
  divergence beside it visible as a divergence.)
- **0194C Rom 11:25** — *Caecitas **enim** ex parte contigit* adds *enim*. Connective only.
- **0194C Apc 17:15** — *Aquas, quas vidisti, populi sunt et gentes* compresses the verse (drops
  *ubi meretrix sedet* and *et linguae*) and puts *Aquas* in the accusative. An abridgment, and
  Migne's own *etc.* practice elsewhere shows he abridges freely; the accusative is odd but nothing
  is asserted by it. Crux only.
- **0195C Ps 37:14** — Migne reverses the two clauses (*sicut mutus… et sicut surdus* for *tamquam
  surdus… et sicut mutus*) and gives *qui non aperuit* for *non aperiens*. Substantial in wording,
  but the gloss (a man shutting his ear) survives either order intact. **Declined deliberately** —
  this is the closest call of the range.
- **0195C/0195D "Non recipies auditum vanum"** (cited *Eccli. XLV*) — Origen's Old Latin form,
  against Ex 23:1 *Non suscipies vocem mendacii*. The gloss's whole point (*non dixit, Non audies;
  sed, Non recipies*) works against the Vulgate's *suscipies* as well as against his own text, and
  the reference itself is Migne's citation, which is `refDisplay` business, not ours. ⚑ Note that
  Migne prints the verse **twice, differently** on the same column: unitalicized *Ne recipias
  auditum vanum* at 0195C, italic *Non recipies auditum vanum* at 0195D. Both plate-confirmed as
  printed. No marker; the inconsistency is his and is visible in the facing Latin.
- **0196C Ex 4:19** second half — *mortui sunt omnes* drops *enim*. Not material.
- **0197B, 0198A–0198B, 0200B, 0200D** — the free/conflated New Testament citations (*Petra autem
  erat Christus* cited *II Cor. X*; *Quid venisti ante tempus torquere nos* conflating Mt 8:29;
  *Scimus te quis sis* conflating Mk 1:24/Lk 4:34; *Nulla enim societas luci ad tenebras* turning
  2 Cor 6:14's questions into statements; *Cui resistite fortes in fide: ut cito conteratur Satanas*
  joining 1 Pt 5:9 to Rom 16:20). **These are the commentary quoting from memory, which is what the
  scripture policy exists to preserve.** Rendered as printed, no markers.
- **0197A "Alia littera"** — Migne himself labels the divergent Exodus 4:24–26 text as another
  reading. **He has disclosed it; we do not mark on top of his disclosure.** Same logic as his own
  `( sic )`.
- **0201B Ex 6:12** — the divergent *Ecce ego gracili voce sum* is expressly labelled **LXX.** on
  the plate. Disclosed, so no marker.
- **0201B Lk 10:24** (cited *Lucae II*) — *Multi **reges et prophetae*** for *multi prophetae et
  reges*. An order swap inside an `etc.` abridgment; nothing turns on it.
- **0202B Ex 22:8** — *Applica illum ad deos* for *dominus domus applicabitur ad deos*. Gregory's
  form; the argument needs only the word *deos*, which both have.
- **0203A 1 Cor 14:1** — *Aemulamini spiritualia **dona*** adds *dona*. Not material.
- **0204A Job 41:15** — *quasi lapis* for *tamquam lapis*. Synonyms.
- **0204B Mk 3:27** (cited *Marc. XII*) and **0205A Mt 23:35** — loose paraphrase/conflation of
  well-known sayings. Same class as above.
- **0205B Rom 1:23** — *commutaverunt gloriam **Dei incorruptibilis*** for *mutaverunt gloriam
  **incorruptibilis Dei***. Prefix and word order; the sense is identical and the gloss (the change
  happening *in corde impiorum*) is untouched.

## §4 · Four `[sic:]` candidates WITHDRAWN at the plate — all four were OURS, not Migne's

This is the finding I would most want a later reader to have. Reading the twin alone, my range
looked as though it carried four defects in Migne's type. **Every one of them turned out to be the
digitization**, and each is filed as a pending TEI patch instead.

1. **0195A `guam`** for *quam* (*multo amplius **guam** apud nos pendens*). A non-word; on the twin
   alone it satisfies Pattern 7's non-word class exactly. **The plate reads *quam*, cleanly, on
   both witnesses.** Withdrawn.
2. **0195A `apud. Deum`** — a stray point mid-phrase in *quod erat in principio apud. Deum*.
   Gallica f98 shows a faint low speck between the two words; **the archive copy (p. 103, corner
   numbers 195/196 read first) prints *apud Deum* with nothing between them.** So the twin's period
   is ours and Gallica's mark is a flaw in that copy. Withdrawn, patch filed. ⚑ Had I gone by
   Gallica alone I would have carried a stray full stop into the English under Pattern 8.
3. **0198A `reunquenqus`** for *relinquendus* (*reunquenqus est mundus*). The strongest-looking
   `[sic:]` in the range — a flat non-word in the middle of a plain sentence. **Gallica f99 shows a
   worn, broken impression of a long word; the archive copy at p. 104 reads *relinquendus* clean.**
   The English renders the plate ("the world must be left behind") per the 2026-09-04 ruling, and
   the patch is filed.
4. **0204C `vasa. et liberandas`** — a full stop breaking a sentence before *et*. **Both witnesses
   print a comma**: the Gallica mark at 9× magnification carries a descending tail that the true
   full stops on the same page (e.g. *dicens .* at 0198D) do not, and the archive prints an
   unambiguous *vasa, et liberandas*. Withdrawn, patch filed.

⭐ **The class ratio in this range is therefore 0 Migne to 4 ours.** That is the 9003 finding
repeating, and it is the argument for reading the plate *before* firing, not after.

## §5 · Examined at the plate and deliberately NOT changed

- **0198D `dicens:`** — ⚠ **the two witnesses disagree and I let our twin stand.** Gallica f99
  shows a single baseline point (*dicens . Ne longe abeatis*), which is the 8957 @0758A pattern
  exactly and would have been a patch. But the archive copy prints a clear **colon**, and *this very
  page of the Gallica copy is the one proved under-inked* by the `relinquendus` case above — a
  dropped upper dot is precisely that failure. **Our colon stands; no patch, no marker.** Recorded
  here so nobody re-opens it from the Gallica image alone.
- **0201C `VERS 20.--`**, with no period after VERS. **The plate really prints it that way**, in
  the same small caps as every other; Migne's own slip. Carried as printed. Contrast the `Vers. 9.`
  at 0202D, which is *ours* — see §6.
- **0201D "…significat futuros"** ends with no terminal stop. Plate-confirmed. Not supplied
  (Pattern 8).
- **0201D "ut quisque, de tribu sua uxorem acciperet"** — a stray comma after *quisque*.
  Plate-confirmed as Migne's. Carried.
- **0197D `(Matth. VI)`** — Gallica renders this note **`Matih.`**, which is a named member of the
  attested Gallica worn-sort list (`reference` note on 8956, where *Matih.* was refuted by the
  archive). Note contents pass through verbatim in any case. No action.
- **0201C `pater excelsus`** — in Gallica's italic the *a* reads as *u* (*puter*). Inking, not
  type. No action.
- **`hom. 32` / `VERS. 27-31` / `hom. 3`** — Migne's figure **3** renders like a **5** throughout
  this fount at scan resolution (*VERS. 27-51*, *hom. 52*, *hom. 5 in Exod.*). It is systematic
  across every leaf, so it is a rendering artifact and not a reading. Our twin's digits stand.
- **The foot of every column in the range: CHECKED ZERO**, both apparatus layers — no numbered
  `Forte` conjectures, no asterisk or letter layer, on any of the seven leaves. This is consistent
  with the book's recorded spot check and extends it, but per the standing rule it does **not**
  license the claim that Exodus has no foot-of-page notes anywhere.

## §6 · One case where the plate corrected a label — `Vers. 9.` at 0202D

Our twin prints **`Vers. 9.--`** in lower case where all 22 other verse addresses in my range are
`VERS.` in small caps. That is exactly the shape of a Pattern 9 "section label" question, and I was
prepared to normalize it in the English on Pattern 9's authority. **The plate settled it instead:
Migne sets `VERS. 9.` in the same small caps as every other, so the lower case is the
digitization's.** Patch filed; the English reads VERS. 9. ⚑ Worth recording as a method point —
Pattern 9 would have produced the right English here for the wrong reason, and left the Latin
wrong for ever.

## §7 · Readings rendered literally, no marker

- **0196D `Mosi vel infantis uxorem`** — "the wife of Moses or of the child," which is what
  Augustine's compressed sentence says and is odd but construable. Rendered as printed.
- **0202A `et tu illi in his quae ad Deum;`** — the Vulgate's Ex 4:16 ends *quae ad Deum
  pertinent*; Migne's quotation stops at *Deum*. Rendered as the elliptical phrase it is ("and thou
  to him in those things which are unto God"), because Augustine's argument is precisely about what
  *was* and *was not* said. No `[var:]`: the ellipsis is an abridgment, not a divergent reading.
- **0200B `Quoniam fetere,`** — the lemma is cut before its governing verb (Ex 5:21 *quia fetere
  fecistis odorem nostrum*). Rendered as the truncated cue it is, "*Because to stink,* etc." The
  English is abrupt because the lemma is abrupt.
- **0204A `Apo tou δέρκειν`** — Migne sets the preposition and article in roman letters and the
  infinitive in Greek. Carried exactly as printed, Greek included, untranslated; his own gloss
  *id est videre* is what gets rendered.
- **0198B `Vides… videbitis`** — Migne moves from the singular to the plural inside two clauses.
  Under Pattern 17 the English carries the number: "**Thou** seest what raw pride does; **you** will
  see a little later…" The shift is Origen's and is now visible with no apparatus.

## §8 · Conventions aligned with the peer stints

`*Allegorically.* · *Mystically.* · *Morally.* · *Similarly.*` (English adverbs), `## CHAPTER N.`,
`*as far as*` for *usque ad*, and the `[var: Vulg. <book ch:v> *latin*, "gloss"]` form all match
chunks 0000–0004 and 0010–0011, which landed while this range was in progress. One voice within
the work.

## §9 · Structural verification run before shipping

Column anchors, `[n:]` notes and `## ` heads compared 1:1 against each Latin twin, by list and not
merely by count: 0005 = 14 anchors / 19 notes · 0006 = 3 / 3 · 0007 = 13 / 20 · 0008 = 4 / 5 ·
0009 = 14 / 19. All MATCH in content and order. Guillemets 0 in both columns throughout, as this
book requires. `node scripts/verify-english.mjs 8949` reports no error against any of 0005–0009
(its failures are the peer chunks not yet on disk). No em-dash was introduced in any of the five.
