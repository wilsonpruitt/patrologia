# Wolbero, *Commentaria in Canticum canticorum* (PL 195, 1001–1278A) — merge layer

This file sits beside the sixteen per-stint files (`cruces-0000.md` … `cruces-0075.md`), which hold the column-by-column cruces as each translating stint found them at the plate. This layer records what was decided across the whole work after all sixteen were in: the conventions that hold throughout, and what the second-witness check changed. Where this file and a stint file disagree, this file is later and governs.

## Work-wide conventions

- **Lemma labels.** Migne's `VERS. n.` is rendered **VERSE n.** throughout.
- **Bride and Bridegroom follow Migne's case at each instance.** Migne capitalizes *Sponsus* 19 times and writes *sponsus* 99 times (*Sponsa* 2, *sponsa* 96). The English copies his choice instance by instance: *Sponsus* → Bridegroom, *sponsus* → bridegroom. No house style is imposed. Forty-two capitals that the stints had introduced where Migne prints lower case were lowered at merge.
- **Holy Scripture.** *divina Scriptura*, like *sacra* and *sancta Scriptura*, is "Holy Scripture" (translation-style Pattern 3). Eighteen early renderings of "divine Scripture" were brought into line.
- **Recurring Song vocabulary.** *accubitus* "reclining" (the gloss plays on *accumbere* and *reclinatorium*); *murenulae* stays in italic Latin (the gloss derives it from *murena*); *monilia* "necklaces". The plural *vos* addresses the community of sisters for whom Wolbero wrote and is rendered "you".
- **Headings mirror the Latin's form.** *CAPUT PRIMUM* is "CHAPTER ONE", *CAP. III.-- Continuatio.* is "CHAP. III.-- *Continuation.*", and so on. They are not normalized.
- **The bold numbers** in the text (*138*, *229*, *251*, *282* …) are the page numbers of the 1630 Cologne edition, which Migne reprints. They are kept verbatim.
- **Migne's four foot notes are in the Latin only.** They are numbered, and a numbered note takes no English twin (verify-english, the 11613 precedent). They are (1) at 1006A, (1) at 1008C, (3) *Deest aliquid.* at 1213A, and (4) *Locus obscurus.* at 1263B. The numbering is Migne's own and is irregular. Every page of the work was read, so the missing (2) is his gap, not ours (coverage.json `sequence_gaps_documented: [2]`). The two commentary notes are Migne's own judgment that the text is faulty at those points, and the passages are rendered as printed.

## The second-witness check (2026-09-26)

Scan A (`patrologiaecursu0195mign`) ink-fills *c* and *e* and blacks out one-letter words; T10 found two `[sic:]` that scan A had made look like Migne's. So every `[sic:]` and every proposed correction of our Latin was re-read on scan B (`patrologiaecur195mign`) at 600 dpi, and in the hardest cases at 1200 dpi. The ledgers are `data/briefs/11512-BCHECK-*.tsv`.

- **`[sic:]`: 105 stand, 1 withdrawn.** At 1191B the plate prints *percunctantium*: the fourth letter is an open *c*, the second an *e* with its eye. *pereunctantium* was our digitization's error, so the accusation against Migne is withdrawn and our Latin corrected.
- **Corrections of our Latin: 70 applied** (`data/tei-patches/11512.json`), 4 rejected, and 5 left undecidable and not applied.
- **Twelve `[sic:]` fired after the corrections.** These are sites where our Latin had silently corrected a misprint that the plate carries, so the Latin now carries Migne's type and the English marks it: 1017D *sibipo rrigi*, 1039B *vinnm*, 1148C *colnmbarum*, 1159D *illua*, 1185A *Exspoliari* (in the re-quotation; the lemma itself prints *Exspoliavi*), 1203D *candidutio*, 1209A *coelestus*, 1246B *corruvta*, 1248D *anidmavertis* and *di ciplinas*, 1249A *concapivit*, and 1254A *dieitur*.
- **One of our own errors that no marker stood on.** At 1215D the plate prints *necessariam*; our *neeessariam* is corrected.

### Undecidable on both copies: no correction, no `[sic:]`

A `[sic:]` is a public claim about Migne's type, so it needs a legible plate. Where neither copy settles the letter, the printed text stands untouched and the doubt is recorded here.

- **1152D** *crubescenti* / *erubescenti*. One checker read scan B at 10× as an open *c*; T10 read *e*. At 1200 dpi the first letter shows no clear crossbar but is not the open *c* of *cter* on the same line either. Our Latin keeps *crubescenti* and the English carries no marker.
- **1088D** *Ezechicle* / *Ezechiele*. The medial letters are ink-filled on both copies. Our Latin is unchanged.
- **1257D** *pentibus* / *gentibus*. The same broken sort on both copies; it leans *g*, and the sense requires *gentibus*. Unchanged.
- **1231C** *dil?tionis*. Only one letter stands between *l* and *t*, so the plate has no *c*; that letter is *e* or *a*. The English keeps "love".
- **1262C** *esse. quia*. The mark after *esse* could be a point or a comma with its tail broken off.
- **1198A** *sapphiris. Si* / *sapphiris: Si*. Scan A shows a colon and scan B only a baseline point, so the two copies disagree. Unchanged.
- **1024B** *fecunditata*. Scan B's copy cuts the line at the page edge. Unchanged.

### Rejected corrections (our Latin was right)

1018 (a comma, not a stop, after *Trinitatis 3*), 1027D (one point, not a colon), 1150B (*insti-|titutis*: the plate itself doubles the syllable across the line break, a real dittography of Migne's type, so our Latin was faithful; the English now carries `[sic: *instititutis*]`, making thirteen owed markers fired, not twelve), and 1152D (above).

### Other decisions

- **1070D. A heading invented by the digitization is removed.** Corpus Corporum wrapped *. . . . Axa quippe* in a `<head>.</head>`. The plate (p. 541) prints **59** ..... *Axa quippe* as running text. The dots are Migne's and stay; the heading is gone.
- **1067–68. Migne's diagram.** A full-width figure (*56 FIGURA*) that the digitization omits. The English lists its labels under an `[ed:]`, which is the marker's defined use: text the plate carries and our source lost. The Latin labels are in `cruces-0015.md`. No earlier work in the corpus has a figure, so this sets the first precedent.
- **1013A.** Our TEI wraps Wolbero's own running parenthesis in a `<note>`. The English renders it as an `[nt:]` at the same point, so the note count holds. The structure is left alone rather than patched.
- **1172D** *virtu e* stands as a `[sic:]`: scan B shows at most a pinpoint where the *t* should be. **1225C** *dici* → *dicit* was applied, because there a pointed *t*-head is visible on both copies. The rule is the same in both cases: a worn letter whose sort is visible is the full word, and an absent one is Migne's defect. The evidence differs.
- **1040D** *a regione* against the Vulgate's *e regione*. Scan B prints an italic *a* (a bowl with a right-hand stem and no eye). The divergence is real and small, and it is rendered as printed with no marker.
- **1169C** `[cj: scriptum; read Christum]` is kept. The column has just quoted Christ calling himself the door, and the next pronoun, *per eum*, is masculine. The conjecture is offered, not adopted.
- **Comparand errors, not Migne's.** `clementine-flat.txt` misprints Ct 2:5 (*Fulcite in me*), Ct 4:4 (*pendant*) and 1 Rg 15:23 (*nole*). No marker was fired on any of them.
