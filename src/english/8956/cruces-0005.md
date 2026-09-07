# Cruces — 8956 *Liber Isaiae prophetae*, chunks 0005–0009 (cols 1243A–1255D)

Stint file; the orchestrator merges it with the peers'. **Every column in the range was read at
the plate before these entries were written** — Gallica `ark:/12148/bpt6k5505319w`, leaves
**f622–f628**, `f = (column + 1) / 2`, calibrated against the printed top corners of f622
(1243 / 1244) before any collation was done. The archive.org copy
(`patrologiaecurs04migngoog`) was not consulted: every leaf was legible at native resolution
and no candidate turned on a letter Gallica left open. Reads recorded in
`data/briefs/8956-PLATE-READS-0005.json`; the foot of every column in the range is blank, so
this work carries no numbered and no asterisk conjecture layer in cols 1243–1255.

---

## Plate vs. our TEI

**1245D — `auctoritatatem`, an extra syllable in our file.** The plate reads *tanquam
**auctoritatem** habens*; our TEI prints *auctoritatatem*, which is not a word. The English
renders the plate ("as having authority"); patch filed in
`data/briefs/8956-PENDING-TEI-PATCHES-0005.md`. No `[sic:]` — the defect is not Migne's.

**1248D — Hebrew type our source dropped.** The plate sets *Verbum Hebraicum **(דבר)** Dabar*;
our TEI carries the transliteration only. Unpointed, read at 4×; the classic Corpus Corporum
scar of `hebrew-recovery.md`. Not inserted into the English on its own, because that recipe
patches both twins in one commit and a translating stint cannot edit the Latin; patch filed.

## Migne's own type — markers fired

**1250C — `apotolos`.** The plate prints *reprehendentes apo-/tolos*, broken over a line, with
no `s`; our TEI has the same. A non-word, and the plate licenses the accusation, so
`[sic: *apotolos*]` stands and the sense is rendered beside it ("them that reproved the
apostles"), per Pattern 7's 2026-09-05 amendment. Conjecture: *apostolos*, which the same
sentence's argument requires.

**1254A — `quas` for `quasi`.** The plate prints *impii quasi plumbum merguntur in aquis
vehementibus, et descendunt in profundum **quas** lapis* — read on a tight native crop, with a
clear word space before *lapis* on the following line. *Quas* is a real Latin word (accusative
feminine plural relative) but has no grammatical slot in its clause, which is Pattern 12's
first test, so it takes `[sic: quas]` and the sense is supplied beside it ("as a stone").
Inside an italic lemma, so the marked run takes no second italic marker (Pattern 10). The
conjecture *quasi* is what *merguntur quasi plumbum*, nine words earlier in the same sentence,
already prints — which proves an error exists, not whose it is; the plate settles that.

## Migne's own type — marker DECLINED

**1252B — `Et requiscere`.** Migne prints the lemma *Et requiscere*, confirmed on a tight crop,
and our TEI agrees. The shape invites `[sic:]` — the ordinary form is *requiescere*, and
*quiescere faciet arrogantiam daemonum* prints eleven lines later at 1252C. **No marker was
fired**, and the reason is a witness outside this plate: our own Clementine flat file prints
*et **quiscere** faciam superbiam infidelium* at Is 13:11, the very verse this lemma quotes. A
syncopated `-quiscere` stem therefore has a life beyond this compositor, and Pattern 9 (attested
spellings are not Pattern 7 defects) governs. The English renders it plainly, "And to rest".
Recorded here so a later reader meets the argument and not just the silence.

## Vulgate divergences — the collation

Every lemma in the range was walked word by word against `sources/vulgate/clementine-flat.txt`.
Divergences in **wording** took a `[var:]`; divergences that are only Migne's abridgment of a
verse, or that English cannot show, are recorded here without a marker.

**Marked `[var:]` (eleven lemmata, twelve markers):**

| col | Migne prints | Clementine | marked |
|---|---|---|---|
| 1244C | Ps 119:3 *quid **adjiciatur** tibi* | *quid **apponatur** tibi* | ✓ |
| 1246A | Lc 2:52 ***Puer autem** proficiebat **aetate et sapientia*** | *Et **Jesus** proficiebat **sapientia, et aetate, et gratia*** | ✓ |
| 1247A | Is 8:6 *abjecit **populus** aquas **Siole*** | *abjecit **populus iste** aquas **Siloe*** | ✓ |
| 1247B | Is 8:18 ***Pueri mei, ex Deo nati*** | *Ecce ego et pueri mei **quos dedit mihi Dominus*** | ✓ |
| 1247C | Is 8:20 *Non **eris** eis* | *non **erit** eis matutina lux* | ✓ |
| 1248B | Is 9:6 ***Puer** natus est nobis* | ***Parvulus enim** natus est nobis* | ✓ |
| 1250A | Is 10:26 *virgam suam **in** mare* | *virgam suam **super** mare* | ✓ |
| 1250D | Mt 3:2 *appropinqua**b**it* · Mt 3:10 *facit **fructus bonos eradicetur*** | *appropinqua**v**it* · *facit **fructum bonum, excidetur*** | ✓ (two markers) |
| 1252B | 2 Cor 3:18 ***Nos autem** revelata facie gloriam Domini **contemplantes*** | ***Nos vero omnes**, revelata facie gloriam Domini **speculantes*** | ✓ |
| 1253B | Mt 25:41 ***Ite** in ignem aeternum* | ***Discedite a me maledicti** in ignem aeternum* | ✓ |
| 1253C | Ps 28:5 ***Conteret** Dominus cedros Libani* | *et **confringet** Dominus cedros Libani* | ✓ |

The two that matter most to the argument on the page are **1248B** and **1247B**. *Puer natus
est nobis* is the christological lemma of the chapter, quoted once as the address and once
inside the exposition, and the gloss builds on *nobis* ("Non Judaeis, nobis"), not on the noun
— so the substitution of *Puer* for *Parvulus* passes unnoticed by every check but this one.
At 1247B *ex Deo nati* replaces the Vulgate's whole relative clause with a phrase out of
John 1:13; the gloss that follows ("The other Prophets and their disciples") is indifferent to
either reading, which is exactly why it survives.

**Not marked — abridgment, not divergence.** Migne routinely quotes a verse short, and an
omission is not a variant reading:

- **1248C** Is 7:11 *Pete tibi signum **a Deo*** for *a Domino Deo tuo*.
- **1252A** Ps 67:27 *Benedicite **Domino** de fontibus Israel* for *benedicite **Deo Domino***.
- **1253B** Mt 6:12 *Dimitte nobis debita* for *debita **nostra***, cited *(Matth. V)* for Mt 6.
- **1251B** Is 11:10 *Qui stat in signum* for *in signum **populorum***; **1255C** Is 14:31 *Ab
  aquilone enim fumus* for *fumus **veniet***.

**Not marked — no English exponent.** A one-letter mood or spelling variant that renders
identically in English is recorded, not marked, because a `[var:]` a reader cannot see in the
text beside it is noise:

- **1255B** Is 14:29 *Ne **laeteris*** against Clementine *Ne **laetaris*** (subjunctive for
  indicative; both "Rejoice not").
- **1255C** Is 14:31 *qui **effugiat*** against *qui **effugiet***.

**Not marked — conflation, wording exact.** **1244A–B** quotes *Et regem Dominum exercituum
vidi oculis meis: et volavit ad me unus* as one lemma. That is the tail of Is 6:5 followed
immediately by the head of Is 6:6, each verbatim; the join is Migne's, the words are the
Vulgate's. **1250D** *Ego lux et vita*, ascribed to Christ, is likewise a fusion — of Jn 8:12
*Ego sum lux mundi* and Jn 11:25 / 14:6 *ego sum ... vita* — and belongs to no single verse to
be collated against.

## Readings carried through under Pattern 7

**1254C — the double negative `nisi ... non`.** Migne prints *quod adhuc mansisset, **nisi**
superbia tua **non** fuisset*, which says the opposite of the sentence's own argument (the
kingdom fell *because* of the pride). Both particles are carried: "which would still have
remained, unless thy pride had not been." Confirmed on the plate; conjecture, *nisi superbia
tua fuisset*, is not in the text by design.

**1254B — `Invitus Christus; descendit voluntarius`.** The plate's semicolon falls after
*Christus*, so the printed sentence reads "Christ unwilling; he came down willing," which
attributes the unwillingness to Christ in a gloss whose whole point is the contrast with
Lucifer, who is drawn down against his will. Punctuation follows the plate (Pattern 8); the
English keeps the printed break. Conjecture: *Invitus; Christus descendit voluntarius* —
"[thou art drawn down] unwilling; Christ came down willing."

**1253D — an infinitive with no expressed subject.** *Nos pro imbecillitate sensuum putabamus
non posse resistere potentiae Dei, et te solum in altitudine tua permanere.* The second
accusative-and-infinitive has *te*; the first has no subject at all, and supplying one decides
who could not resist whom. The English keeps it impersonal — "thought that it was not possible
to resist the power of God" — rather than choosing.

**1251B — the seized asp.** *Id est, divinam potentiam in comprehensum exinde aspidem vel
regulum, id est, diabolum, tradet captivum.* The *in* + accusative will not attach to
*tradet*, and *divinam potentiam* is left without a governing verb. Rendered as closely as the
words allow, with the agency the Latin does fix: the subject that delivers up is God, and what
is delivered up captive is the asp. No word supplied.

**1246D — `nullius est enim`.** *Ad Spiritum sanctum ... quae Graece neutri generis pneuma,
Hebraice feminini Ruach, Latine masculini generis est, et ideo diversis positionibus sortitur,
nullius est enim.* The last clause is elliptical past construing — the sense wanted is that the
Spirit belongs to no one gender — and *sortitur* has no object. Rendered literally.

**1244D–1245A — `Et pro, id est, adhuc`.** *Et adhuc. Et pro, id est, adhuc ex ea gente
decimatio.* *Pro* stands with no complement; the gloss is telling the reader what the lemma's
*Et* stands in place of. Rendered "And in place of, that is, still out of that nation a
tithing," which keeps the ellipsis visible.

## Not defects — recorded so a later reader does not report them

**Migne's `3` glyph.** Throughout this range the VERS. numeral 3 prints in a shape that reads
as a 5 at native resolution (VERS. 3 *Et clamabant* at 1243C, VERS. 3 *Derelictus est* at
1245A, VERS. 3 *Ad prophetissam* at 1246D). The verse numbers in our TEI are correct against
Isaias throughout; nothing here is a divergence.

**`Genezareth` / `Genesareth`.** Both spellings stand within four lines at 1247C–D, and the
plate prints them exactly so. Not normalized.

**`Siole` at 1247A.** Migne's own spelling of Siloe, confirmed on a top-strip crop of the
column. Covered by the `[var:]` on that lemma; no `[sic:]` — a metathesized proper name is not
the same claim as broken type.

**δορκὰς at 1252C.** Read at native resolution and again at 3×: grave accent over the alpha,
exactly as our TEI has it. Reproduced verbatim, untranslated.

## Span count

The brief `data/briefs/8956-lemmata-0005.txt` declares **303** marked spans for chunks
0005–0009. Counted paragraph-bounded in my own Latin: **47 + 55 + 57 + 72 + 72 = 303**, and the
unbounded count is the same number, because this work sets no guillemets at all (0 `«` and 0
`»` across all five chunks) and therefore has no unmatched-delimiter failure mode in either
direction. The two counts agree for a reason, not by cancellation.
