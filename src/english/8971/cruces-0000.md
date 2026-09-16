# 8971 Nicholas of Lyra, *Prologus de commendatione sacrae Scripturae in generali*: cruces, stint B (chunks 0000–0001, cols 0025B–0030B)

Every column was read at the plate, word by word: Gallica `bpt6k5505319w` leaves f13 (cols 25/26),
f14 (27/28), f15 (29/30). Where needed the archive.org copy (`patrologiaecurs04migngoog`, PDF
pp. 18–20) was a second witness.

## §0 · The two copies are TWO PRINTINGS, and our twin follows the archive one

The archive and Gallica copies of these pages were set differently. The display title on f13 is in
italic upper-and-lower case on Gallica and in small capitals on the archive, and the running text
differs by word and by mark. **At every site in this range where the two disagree, our TEI twin
agrees with the archive printing, letter for letter and mark for mark.** So these divergences are
press variants between two Migne printings, not transcription errors, and nobody is to blame
(CLAUDE.md, the PL 114 `Bethehem`/`Bethlehem` rule: a crux, no `[sic:]`, no patch). **The English
follows the twin, which means it follows the archive printing.** Each variant is listed below so a
later ruling can reverse that choice. Patches are filed only where the twin departs from BOTH
printings (see `data/briefs/PL113L-PENDING-TEI-PATCHES-B.md`).

## §1 · Work conventions (for the merge with 8972)

- *sensus litteralis / mysticus / spiritualis / allegoricus / moralis / anagogicus*: literal /
  mystical / spiritual / allegorical / moral / anagogical sense (brief §8). *tropologicus* =
  tropological. *historicus* = historical.
- *sacra Scriptura* = **Holy Scripture** throughout (Pattern 3), including *Scriptura sacra*.
- *specularis intelligentia* = "mirroring understanding" (the *liber*/*speculum* argument turns
  on the mirror, so "speculative" would lose the word the gloss explains). *generalis continentia*
  = "general comprehensiveness"; *salutaris efficacia* = "saving efficacy"; *singularis eminentia* =
  "singular eminence".
- *expositio* = exposition; *elucidare* = explain (Ecclus 24:31, "They that explain me").
- *habitus principiorum* = "the habit of principles"; *intellectus possibilis / agens* = possible /
  agent intellect; *phantasma* = phantasm.
- Book numbers in running prose (*tertio de anima*, *primo Metaphys.*) are rendered as ordinal books
  with the title in italics (Pattern 2); scripture chapter ordinals (*Deuteronomii quarto*) as "the
  fourth chapter of Deuteronomy"; roman addresses as printed (*Romanos I* → "Romans I").

## §2 · Cruces

- **0025B `[n: (Eccli. XXIII)]` — WRONG ADDRESS, Migne's.** *Haec omnia liber vitae* is Ecclus
  24:32 in the Clementine, not chapter 23. Plate-verified on both printings (Gallica f13 native crop,
  archive p. 18). The note rides verbatim; nothing is corrected.
- **0025B *Homil. 35 Evangeliorum* — ⚑ BRIEF §7 SETTLED: THE PLATE PRINTS 35, NOT 55.** Native crop
  of Gallica f13 at 8×: the first digit is this fount's flat-topped 3 (a horizontal top bar with a
  diagonal falling into the bowl), and the second is a 5 (a vertical stem at the upper left under a
  flagged bar). The two glyphs are visibly different at native resolution; prep's 1400-px survey
  merged them. The archive printing reads a round-topped **35** too. Our twin is right; no patch, no
  marker. The quotation *Temporalis vita, aeternae vitae comparata, mors est potius dicenda quam
  vita* is Gregory, *Hom. in Ev.* 37, so Lyra's (or Migne's) number is wrong, and it is rendered as
  printed ("Homily 35 on the Gospels").
- **0026C `[sic: *processis*]`.** *In quo quidem processis licet non sit error*: the sense needs
  *processu* ("in which process"), matching *in tali processu* four lines on. *processis* has no
  slot (at most a dative/ablative plural participle, "for those having proceeded", with no
  construction), so it fails Pattern 12's "renders in place" test. Plate: Gallica f13 prints
  *processis*; archive p. 18 prints *processis*. Two witnesses, so the `[sic:]` stands. The English
  gives the sense beside the marker (7a⁗).
- **0026D *duo decimo*: our split, not Migne's.** The twin splits *duodecimo*. The archive printing
  sets **duodecimo** as one word. On Gallica there is a worn mark between *duo* and *decimo* but no
  word space. It is a mid-line word, so it is not a line break. This is our file's defect: no
  `[sic:]`. Rendered "twelfth". Patch filed.
- **0027B `verum judicatur.; quod autem`: press variant.** The archive printing and our twin set a
  full stop and a semicolon together. The Gallica printing sets the semicolon alone. The English
  follows the twin: "is judged true.; but" (Pattern 8, preserve). No patch.
- **0027B *ex illis, judicatur*.** Gallica shows a full stop where the archive and the twin have a
  comma. It is probably a worn comma on the Gallica copy (that copy also loses the period after
  *tertio* at 0028B). The English follows the twin. No patch.
- **0027A *Mt 22:40* guillemets.** Migne opens « after *in* (*dicit quod in « duobus praeceptis
  charitatis tota lex pendet et prophetae: »*). They are mirrored exactly ("that on « the two precepts
  …"). The quotation is Lyra's paraphrase (*charitatis* is his, and the Vulgate has *his duobus mandatis
  universa lex*), not a divergence claim.
- **0028B *I Corinthiorum decimo tertio. Sed*.** Gallica shows no stop, while the archive and the
  twin have one. It is a worn stop on Gallica. The English follows the twin.
- **0028B–C *illustrati non sumus, non possumus*.** Gallica shows a stop, while the archive and the
  twin have a comma. The English follows the twin.
- **0028C *sed speciale et huic libro*: press variant, WORD-LEVEL.** Gallica prints **est** (*sed
  speciale est huic libro*). The archive printing and the twin print **et**. Both construe
  ("but special also to this book" / "but it is special to this book"), and the sense is unchanged.
  The English follows the twin. No patch, no marker.
- **0028D *ἀνάγω*: plate-verified** on Gallica f14 and archive p. 19, with acute on the α. Kept.
- **0028D verse couplet.** Migne lineates the two hexameters *Littera gesta docet… / Moralis quid
  agas…* on both printings. Our twin keeps the first line run into the prose paragraph and breaks
  before *Moralis*. The English mirrors the twin's line structure (Pattern 8a). The lineation
  difference is layout only.
- **0028D *postea per Salomonem dilata et fortificata*: press variant, WORD-LEVEL.** Gallica prints
  **dilatata** ("enlarged"). The archive printing and the twin print **dilata**. *dilata* (from
  *differo*) is a real word whose older sense is "spread abroad, extended", so it renders in place:
  "afterwards spread abroad and fortified by Solomon". It is not a `[cj:]` case (no negation or
  correlative, and the English asserts nothing false). The English follows the twin.
- **0028D *Secundum Vero sensum*.** Our twin capitalizes *Vero*, while both printings have lower-case
  *vero*. It is a trivial transcription slip with no English exponent. Not patched (no sense, no mark).
- **0029A *est mater nostra, » Et sicut*.** Gallica shows a stop, while the archive and the twin have a
  comma. The English follows the twin, keeping the comma before the capital "And".
- **0029A *in una oratione: et sicut*.** Gallica shows a single spaced dot, which is Migne's spacing
  for a colon, so it is a worn colon. The English follows the twin.
- **0029A *Apocalypsis « quinto: Vidi …*: GUILLEMET LOST BY OUR TWIN.** Both printings set *Et
  Apocalypsis* at a line end, then *« quinto : « Vidi in dextera …*. The first « is a stray line-start
  continuation mark and the second is the real opening. Our twin keeps the stray and drops the real
  one. The English mirrors the twin's single « (the verifier checks guillemet parity against the
  twin), which puts it before "five". A patch is filed to restore « before *Vidi*. When it lands, the
  English needs the matching « before "I saw".
- **0029A–B, 0030A: *Scrutamini … in quibus putatis* (Jn 5:39).** The Clementine has *quia vos
  putatis in ipsis*. Lyra's exposition turns on *putatis*, which is present, and "in which you
  think" versus "because you think in them" does not alter his argument. Listed, not marked.
- **0030A *Ecclesiastici vigesimo quarto*: *Qui elucidant me* = Ecclus 24:31 ✓.**
- No foot-of-page apparatus on f13, f14 or f15, in either the numbered layer or the asterisk/letter
  layer. Checked zero.

## §3 · Scripture checked against `sources/vulgate/clementine-flat.txt`

| col | quotation | Migne's address | Clementine | verdict |
|---|---|---|---|---|
| 0025B | *Haec omnia liber vitae* | Eccli. XXIII | Sir 24:32 | ✓ wording; **wrong chapter** (crux) |
| 0026C | *Haec est sapientia vestra, et intellectus coram populis* | Deut. 4 | Dt 4:6 *Haec est enim vestra sapientia* | order/*enim*, no sense change |
| 0027A | *duobus praeceptis charitatis tota lex pendet et prophetae* | Matt. 22 | Mt 22:40 *his duobus mandatis universa lex* | paraphrase |
| 0027A | *Finis praecepti est charitas … ac fide non ficta* | 1 Tim. 1 | 1Tim 1:5 *autem … et fide* | ✓ minor |
| 0027A–B | *Qui cum Deum cognovissent … stulti facti sunt* | Rom. 1 | Rom 1:21–22 *Quia cum cognovissent Deum* | ✓ minor |
| 0027C | *Implebit eum spiritu sapientiae, et intellectus* | Eccli. 15 | Sir 15:5 *adimplebit illum* | ✓ minor |
| 0027C | *Impleamini agnitione voluntatis ejus in omni sapientia, et intellectu* | Col. 1 | Col 1:9 (+ *spiritali*) | ✓ truncated |
| 0027D | *Hoc quod continet omnia scientiam habet vocis* | Sap. 1 | Sap 1:7 | ✓ |
| 0027D | *In principio erat Verbum* | Jo. 1 | Jo 1:1 | ✓ |
| 0028A | *Docebit vos omnem veritatem* | Jo. 16 | Jo 16:13 | ✓ |
| 0028B | *dispone domui tuae* | Isa. 38 | Is 38:1 | ✓ |
| 0029A | *Consurge, sede, Jerusalem* | Isa. 52 | Is 52:2 *consurge ; sede, Jerusalem* | ✓ |
| 0029A | *Vidi civitatem sanctam Jerusalem novam …* | Apoc. 21 | Apc 21:2 *vidi sanctam civitatem …* | order, no sense change |
| 0029A | *Illa quae sursum est Jerusalem, est libera, quae est mater nostra* | Gal. 4 | Gal 4:26 | ✓ minor |
| 0029A | *Ecce manus missa ad me … scriptus intus et foris* | Ezech. 2 | Ez 2:9 | ✓ (address right) |
| 0029A | *Vidi in dextera sedentis super thronum librum scriptum intus et foris* | Apoc. 5 | Apc 5:1 *supra thronum* | *super/supra*, no sense change |
| 0029B–0030A | *Scrutamini Scripturas, in quibus putatis vos vitam aeternam habere* | Jo. 5 | Jo 5:39 *quia vos putatis in ipsis* | construction differs; see §2 |
| 0030A | *Qui elucidant me, vitam aeternam habebunt* | Eccli. 24 | Sir 24:31 | ✓ |

**`[var:]` fired in 8971: none.** No divergence changes the sense a reader takes from the quotation.

Non-scripture authorities, rendered as printed, not checked for correction: Gregory *Hom. 35* (=37,
see above); Aristotle *De anima* III and I, *Metaph.* II (*In foribus quis delinquet*), I, XII, IV,
*Phys.* VIII; Jerome, Ep. to Paulinus; Augustine, *De Trin.* XIV.1; "the Gloss" on Jn 16:13 and Is 38:1.
