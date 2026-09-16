# 8973 Nicholas of Lyra, *Prologus in moralitates Bibliorum* — cruces, chunk 0000

Stint A, 2026-09-16. Every column (0033B–0036A) was read at the plate on Gallica
`bpt6k5505319w` f17 (corners 33/34) and f18 (corners 35/36) at native resolution, corner numbers
first. The archive.org copy, PDF p. 22, was used as second witness for 0034D.

## Markers

- **0033D `[var: Vulg. *Dominus Deus noster*, "the Lord our God"]`.** Migne prints Deut 6:4 as
  *Audi, Israel, Dominus Deus tuus, Dominus unus est*. The Clementine has *Dominus Deus noster*.
  The printed wording carries on into the *Deum tuum* of 6:5, which it quotes next. That shift from
  "our" to "thy" changes who is speaking in the Shema, so it gets a marker. Plate-read on f17 (left
  column foot, col 33). The *Dominus unus est* after the [0034B] anchor is at the head of col 34.

No `[sic:]`, `[cj:]`, `[ed:]` or `[d:]`.

## Plate divergence from our twin (patch filed)

- **0034D `flios` → plate `filios`.** *Abraham duos flios habuit*. On Gallica f17 the **fi** is worn
  but has the height and spacing of a whole *fi*. The archive copy prints *filios* cleanly. Two
  witnesses agree, so the twin's *flios* is the digitization's. Rendered "two sons".
- **0033D the mnemonic is LINEATED on the plate.** Both lines are set in smaller type and indented
  below *unde versus:*, in both witnesses. Our twin runs the first line onto the prose line. The
  English keeps the verse as two lines ending "…whither thou shouldst tend," but, like the twin,
  leaves the first line on the prose line so the parallel columns stay aligned. The lineation is
  filed as a pending patch, and once it lands, splitting the English is a one-line edit.

## Readings kept as printed

- **0033D verse punctuation.** The plate ends the second line with a comma (*anagogia,*) and runs on
  into lowercase *exemplum*. That is kept: "…whither thou shouldst tend, / an example in this name
  Jerusalem…".
- **0033D Greek `ἀναγωγικὸς`.** Checked on the plate, and it agrees with our twin.
- **0034C `per manum abscindendum`.** A gender mismatch (*manum* is feminine). Pattern 9, so no
  marker; rendered "by the hand to be cut off". Confirmed on the plate.
- **0034C `quia ligna nunquam hoc fecerunt nec facere potuerunt: Similiter`.** The capital after the
  colon is kept, as the plate prints it.
- **0034B `secundum quod dicitur in Collationibus Patrum, collatione octava`.** Cassian treats the
  senses of Scripture in *Conference* XIV, ch. 8. "Eighth" here is the chapter number, not the
  Conference number. Rendered as printed, with nothing corrected.
- **0033D `ut habetur III Regum XIV`.** 3 Kgs 14:21 is *in Jerusalem civitate, quam elegit
  Dominus* ✓. The address is sound.
- **0036A `Matthaei XIII et Marci IV`.** The quoted wording is Matthew's, not Mark's (see the table).
  Rendered as printed.

## Scripture quotations checked (7a″ list), against `sources/vulgate/clementine-flat.txt`

| column | printed | cited | found at | result |
|---|---|---|---|---|
| 0033B | *Vidi in dextera sedentis **super** thronum, librum scriptum intus et foris* | Apoc. V | Apoc 5:1 *supra thronum* | Minor (*super*/*supra*), no change of sense, so no marker. Vulgate's opening *Et* is absent. |
| 0033B | *In dextera ejus ignea lex* | Deut. 33 | Deut 33:2 | ✓ verbatim |
| 0033C | *Omnia in figura contingebant illis* | 1 Cor. 10 | 1 Cor 10:11 *Haec autem omnia…* | Truncated opening; no change of sense. ✓ |
| 0033D–0034B | *Audi, Israel, Dominus Deus **tuus**, Dominus unus est* | Deut. 6 | Deut 6:4 *Dominus Deus **noster*** | **DIVERGENT → `[var:]`** |
| 0034B | *Diliges Dominum Deum tuum ex toto corde, etc.* | Deut. 6 | Deut 6:5 *…corde tuo…* | Truncated with *etc.*; ✓ |
| 0034B | *Ierunt ligna, ut ungerent **supra** se regem* | Judic. IX | Judg 9:8 *super se* | Minor, no change of sense, so no marker |
| 0034B–C | *Si manus tua scandalizat te, **abscinde** eam, et projice abs te* | Matth. V | Mt 5:30 *Et si **dextra** manus tua… **abscide*** | *dextra* is absent and *abscinde* stands for *abscide*, with the same sense ("cut off"). Mt 18:8 also opens *Si autem manus tua*. No marker: the sense is unchanged. The address ✓ (5:30). |
| 0034D | Abraham's two sons; Gal. IV | Gal. IV | Gal 4:22–24 | Allusion, not a quotation ✓ |
| 0034D–0035A | *Ecce vicit leo de tribu Juda* | Apoc. V | Apoc 5:5 | ✓ verbatim |
| 0035A | *Adversarius vester diabolus tanquam leo rugiens, **circumit** quaerens quem devoret* | 1 Petr. V | 1 Pet 5:8 *circuit* | Spelling variant only ✓ |
| 0036A | *Dederunt fructum: aliud centesimum, aliud sexagesimum, aliud **tricesimum*** | Matth. XIII et Marc. IV | Mt 13:8 *et **dabant** fructum… trigesimum* | Perfect for imperfect; *tricesimum* is a spelling variant. No change of sense, so no marker. Mark 4:8/20 has different wording altogether (*unum triginta…*): the printed form is Matthew's. |

**Divergence list: one material divergence (Deut 6:4), marked.**

## Vocabulary

*sensus litteralis / mysticus* → literal / mystical sense; *allegoricus, moralis, anagogicus* →
allegorical, moral, anagogical; *sacra Scriptura* → Holy Scripture (Pattern 3). *voces* → "words"
throughout (the sign/thing distinction). *subjective* → "as subject". Every term held.

---

## Merge, 2026-09-16

- **TEI patch applied** (`data/tei-patches/8973.json`, re-chunked, verify OK): *flios*→*filios* @0034D.
- ⚑ **FOR WILSON — the mnemonic's lineation @0033D, not resolved at merge.** Migne sets *Littera gesta
  docet, quid credas allegoria, / Moralis quid agas, quo tendas anagogia,* as two lines of its own. Our
  TEI encodes both as `<l>`, but the chunker breaks only after each `<l>`, so the first line runs on
  from *unde versus:* — same limitation and same decision as 8975 @0019A (see that work's cruces):
  a chunker change, not a patch, and not made here.
