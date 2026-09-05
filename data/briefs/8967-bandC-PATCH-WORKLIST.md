# 8967 Band C — the applied patch pass, site by site

**134 patches applied 2026-09-05, built mechanically by `scripts/patch-build.mjs` from the six stint reports.** `patch-audit` passes on all 333: every find is unique AND lands in its declared column.

⛔ **This file is the WORKLIST for the English.** A patch is not done when the Latin is right. Every site below either (a) unlocks a marker that must now be FIRED in the English, or (b) says the English already follows the plate, in which case it must be CHECKED and nothing changed, or (c) owes a wording edit named in its note.

**`node scripts/marker-reconcile.mjs 8967 --band 10` checks every \"unlocks\" claim against the English and exits non-zero on any that is missing.** It reported 64 claims, 0 standing, before this pass began.

---

### 1000A
- our TEI WAS: `o, altum fecisti ⏎ refugium, ut jam sperem sequi quo praecessisti.</p> ⏎ <p>V`
- Migne PRINTS (now patched in): `o, altum fecisti ⏎ refugium, ut jam speram sequi quo praecessisti.</p> ⏎ <p>V`
- 🔴 CLASS 2 — CC repaired a defect Migne printed; the [sic:] this unlocks becomes available only after this patch. Plate-read by the 0069–0072 stint (PDF 501–506, corners verified). 600 dpi.

### 1000B
- our TEI WAS: `git de Christo secundum membra. <hi>Et conculcabis.</hi>  ⏎ <note>(AUG.)</note> Serpentem`
- Migne PRINTS (now patched in): `git de Christo secundum membra. <hi>Et conculcabit.</hi>  ⏎ <note>(AUG.)</note> Serpentem`
- 🟠 CLASS 1 — CC moved Migne ONTO the Clementine, invisible to any Vulgate collation by construction. Plate-read by the 0069–0072 stint. ⭐⭐ THE GLOSS IS BUILT ON THE THIRD PERSON: its very next words are `Serpentem calcat Ecclesia` — *the Church* treads. A conformed lemma destroys the exposition it carries, and no Vulgate collation could ever reach it. Once patched, a `[var: Vulg. *conculcabis*]` is owed here.

### 1000D
- our TEI WAS: `effectibus, et in ⏎ operibus manuum, quibus utor, vel quae miror.</p> ⏎ <p> ⏎           <pb n="1001A"/>`
- Migne PRINTS (now patched in): `effectibus, et in ⏎ operibus manuum, quibus uior, vel quae miror.</p> ⏎ <p> ⏎           <pb n="1001A"/>`
- 🔴 CLASS 2 — CC repaired a defect Migne printed; the [sic:] this unlocks becomes available only after this patch. Plate-read by the 0069–0072 stint (PDF 501–506, corners verified). 900 dpi. ⚑ THE GLYPH CARRIES AN i-DOT, so it is a set sort and not an under-inked `t` — which is exactly why it is reported and the `possit`→`rossit` ink class is not.

### 1004A
- our TEI WAS: `> Devotionem. <hi>Cantus</hi> hilaritarem significat.</p> ⏎ <p>VERS. 1.-- <hi>Venite`
- Migne PRINTS (now patched in): `> Devotionem. <hi>Cantus</hi> hilaritatem significat.</p> ⏎ <p>VERS. 1.-- <hi>Venite`
- 🅒 CC CREATED A NON-WORD MIGNE DOES NOT PRINT — no [sic:] is owed in either state, and the English already renders the sense the patched Latin carries. Plate-read by the 0073–0076 stint. Checked against a known `t` and a known `r` on the same printed line before believing it.

### 1004B
- our TEI WAS: `qua laude psalmus ⏎ agit. <hi>In psalmis jubilemus.</hi> Quae dicimus in psalm`
- Migne PRINTS (now patched in): `qua laude psalmus ⏎ agit. <hi>In psalmi jubilemus.</hi> Quae dicimus in psalm`
- 🅐 CC MOVED MIGNE ONTO THE CLEMENTINE — invisible to any Vulgate collation by construction. Plate-read by the 0073–0076 stint (PDF 506–511, corners verified). Ps 94:2 Clem. `et in psalmis jubilemus ei`. ⭐ Patching it back UNLOCKS a marker: Migne's `psalmi` is refuted by his own next words, `Quae dicimus in psalmis` — the gloss expands its lemma into the right case. Candidate `[cj: *psalmi*; read *psalmis*]`. No English change owed — `in psalms` renders either.

### 1005D
- our TEI WAS: `pars aliqua; ne quis ergo dicat: <hi>Ecce hic Christus, ⏎ ecce illic,</hi> subdit, <hi>Etenim correxit or`
- Migne PRINTS (now patched in): `pars aliqua; ne quis ergo dicat: <hi>Ecce hic Christus ⏎ esse illic,</hi> subdit, <hi>Etenim correxit or`
- 🅐 CC MOVED MIGNE ONTO THE CLEMENTINE — invisible to any Vulgate collation by construction. Plate-read by the 0073–0076 stint (PDF 506–511, corners verified). CC substituted `ecce` for Migne's `esse`, moving him toward Mt 24:23 (`Ecce hic est Christus, aut illic`). ⭐ THE ONE SITE IN THE RANGE WHERE THE TWO LATINS SAY DIFFERENT THINGS. ⚑ ENGLISH CHANGE OWED at patch time: `Lo, here is Christ, lo there,` → `Lo, here is Christ to be there,`, with the crux carrying the conjecture and a [var:] against Mt 24:23 becoming available.

### 1006B
- our TEI WAS: `Judaei, crucifixerunt, ⏎ atque regnum abjuraverunt ei. Sed <hi>restituta ⏎ est terra`
- Migne PRINTS (now patched in): `Judaei, crucifixerunt, ⏎ atque regnum adjuraverunt ei. Sed <hi>restituta ⏎ est terra`
- 🅑 CC REPAIRED A DEFECT MIGNE PRINTED, destroying a marker we are entitled to fire; it becomes available only after this patch. Plate-read by the 0073–0076 stint. The 8990 `concilio`→`consilio` class: an alteration to a DIFFERENT VERB, and CC's is the one the sense wants (the Jews renounced on oath the kingdom to him). ⭐ Unlocks `[cj: *adjuraverunt*; read *abjuraverunt*]`. English needs no change under the additive [cj:] form.

### 1007B
- our TEI WAS: `<pb n="1007B"/> <hi>Audivit et laetata.</hi> <note>(CASS.)</note`
- Migne PRINTS (now patched in): `<pb n="1007B"/> <hi>Audivi et laetata.</hi> <note>(CASS.)</note`
- 🅐 CC MOVED MIGNE ONTO THE CLEMENTINE — invisible to any Vulgate collation by construction. Plate-read by the 0073–0076 stint (PDF 506–511, corners verified). ⭐⭐ THE HIGHEST-VALUE SITE IN THIS RANGE. CC erased a FIRST-PERSON/THIRD-PERSON divergence before any instrument looked, and the gloss under it argues in the third plural (`Audierunt apostoli`). Ps 96:8 Clem. `Audivit, et laetata est Sion`. Patching makes `[var: Vulg. Ps 96:8 *Audivit*]` available. ⚑ ENGLISH CHANGE OWED at patch time: `He hath heard and was glad.` → `I have heard and she was glad.`

### 1007B
- our TEI WAS: `nificabant Deum.</p> ⏎ <p>VERS. 9.-- <hi>Terram . . . deos.</hi> <note>(ID.)</note> Per <hi>terram<`
- Migne PRINTS (now patched in): `nificabant Deum.</p> ⏎ <p>VERS. 9.-- <hi>Terra... deos.</hi> <note>(ID.)</note> Per <hi>terram<`
- 🅐 CC MOVED MIGNE ONTO THE CLEMENTINE — invisible to any Vulgate collation by construction. Plate-read by the 0073–0076 stint (PDF 506–511, corners verified). Ps 96:9 Clem. `super omnem terram … super omnes deos`. English unaffected — the case has no English exponent.

### 1008D
- our TEI WAS: `i>Terra scabellum vedum ejus</hi> dicit ⏎ <pb n=`
- Migne PRINTS (now patched in): `i>Terra scabellum pedum ejus</hi> dicit ⏎ <pb n=`
- 🅒 CC CREATED A NON-WORD MIGNE DOES NOT PRINT — no [sic:] is owed in either state, and the English already renders the sense the patched Latin carries. Plate-read by the 0073–0076 stint. Is 66:1. Our English already renders `the footstool of his feet`, which is right for the patched Latin.

### 1009C
- our TEI WAS: `confessio peccatorum ⏎ incipientibus; unde in hoc psalmo`
- Migne PRINTS (now patched in): `confessio peccatorum ⏎ inicipientibus; unde in hoc psalmo`
- 🅑 CC REPAIRED A DEFECT MIGNE PRINTED, destroying a marker we are entitled to fire; it becomes available only after this patch. Plate-read by the 0073–0076 stint. Migne sets the non-word `inicipientibus`. ⭐ Unlocks `[sic: *inicipientibus*]`. English unchanged.

### 1009D
- our TEI WAS: `v1> ⏎         <head>PSALMUS C.</head> ⏎  ⏎ <pb n="10`
- Migne PRINTS (now patched in): `v1> ⏎         <head>PSLMUS C.</head> ⏎  ⏎ <pb n="10`
- 🅑 CC REPAIRED A DEFECT MIGNE PRINTED, destroying a marker we are entitled to fire; it becomes available only after this patch. Plate-read by the 0073–0076 stint. Migne prints `PSLMUS C.` ⚑ This also stands in the chunk-0076 frontmatter `heads[]`. NO English change is owed: Pattern 9 normalizes a section label in English precisely because the facing Latin preserves the misprint, so the head reads `PSALM C.` either way — but the Latin column must carry what Migne set. ⚑ Column corrected at the patch pass: filed as 1010A, the reading stands in 1009D. Same printed column, adjacent band — Migne's A–D marks are positional, not four per column, so a band letter read off a leaf drifts by one easily. The plate read covers it; only the record moved.

### 1010D
- our TEI WAS: `⏎ diaboli de corde fugat, ibi, <hi>in matutinis.</hi> <note>(AUG.)</note> <hi>Non p`
- Migne PRINTS (now patched in): `⏎ diaboli de corde fugat, ibi, <hi>in mututinis.</hi> <note>(AUG.)</note> <hi>Non p`
- 🅑 CC REPAIRED A DEFECT MIGNE PRINTED, destroying a marker we are entitled to fire; it becomes available only after this patch. Plate-read by the 0073–0076 stint. Migne sets the non-word `mututinis`. ⭐ Unlocks `[sic: *mututinis*]`. English unchanged.

### 1011B
- our TEI WAS: `e>(AUG.)</note> Jam enumeravit quod ei non adhaeserunt ⏎ nisi boni, etc., <hi>usque ad<`
- Migne PRINTS (now patched in): `e>(AUG.)</note> Jam enumeravit quod et non adhaeserunt ⏎ nisi boni, etc., <hi>usque ad<`
- 🅑 CC REPAIRED A DEFECT MIGNE PRINTED, destroying a marker we are entitled to fire; it becomes available only after this patch. Plate-read by the 0073–0076 stint. Same class and direction: CC's reading is the better Latin. ⭐ Unlocks `[cj: *et*; read *ei*]`. ⚑ A REFERENCE-BINDING site — the class §4 of the launch brief names as invisible to every automated check, and worth looking at twice.

### 1011D
- our TEI WAS: `dies deficiunt`
- Migne PRINTS (now patched in): `deis deficiunt`
- Class 2: metathesis. Unlocks [sic: *deis*]. No English edit — both readings yield "the days fail".

### 1012A
- our TEI WAS: `<hi>Pelicano,</hi> etc. <note>(AUG.)</note>`
- Migne PRINTS (now patched in): `<hi>Pelicano,</hi> <note>(AUG.)</note>`
- Class 3: the plate prints `*Pelicano,* (AUG.) Tres aves` with NO `etc.` — CC inserted one. ⚑ MATERIAL TO THE `usque ad` SPLICE TEST, which keys on `etc.`: the real splice stands four words later. English already follows the plate.

### 1013C
- our TEI WAS: `et paganus credit`
- Migne PRINTS (now patched in): `et Paganus credit`
- Class 1: English already follows the plate ("the Pagan"). ⚑ Column corrected from the stint's 1013D.

### 1013D
- our TEI WAS: `transeunt, id est aeternitas`
- Migne PRINTS (now patched in): `transeant, id est aeternitas`
- Class 1: English already follows the plate; no English exponent.

### 1014B
- our TEI WAS: `homo qui audiat`
- Migne PRINTS (now patched in): `homo qut audiat`
- Class 2: `qui audiat` on the next line and `quis` on the line above both set a dotted i; the disputed glyph carries a crossbar and a curved foot. Unlocks [sic: *qut*].

### 1014D
- our TEI WAS: `benedicere per eas`
- Migne PRINTS (now patched in): `benedicere par eas`
- Class 2: three clean e-controls on the same and next line; the glyph is an open-topped a. Unlocks [cj: *par*; read *per*].

### 1015A
- our TEI WAS: `undaret ⏎ delictum.</p> ⏎ <p`
- Migne PRINTS (now patched in): `undaret ⏎ dilectum.</p> ⏎ <p`
- Class 2: Rom 5:20 is the source; 900 dpi. Unlocks [cj: *dilectum*; read *delictum*].

### 1015A
- our TEI WAS: `Per Moysenomnes`
- Migne PRINTS (now patched in): `Per Moysen omnes`
- Class 3: the plate prints two clean words; CC ran them together. ⚠ Translating the twin here would have produced garble or a false [sic:] against Migne. English already follows the plate.

### 1015A
- our TEI WAS: `</note> Vel secundum ⏎ aliam l`
- Migne PRINTS (now patched in): `</note> Vel secundam ⏎ aliam l`
- Class 2: the plate hyphenates `secun-|dam`. Unlocks [cj: *secundam*; read *secundum*].

### 1015C
- our TEI WAS: `Agratulando`
- Migne PRINTS (now patched in): `Aggratulando`
- Class 1: the plate sets `Ag-|gratulando` across a line break. No exponent.

### 1015C
- our TEI WAS: `Deum monet, primo`
- Migne PRINTS (now patched in): `Deus monet, primo`
- Class 2: ⚑ *Deus* DOES construe as the subject of *monet*, which is why the twin's repair is invisible; but the parallel gloss at 1014B is *hortatur benedicere Deum* and the psalm is *Benedic, anima mea, Domino*. The English renders the twin and the marker is owed. Unlocks [cj: *Deus*; read *Deum*].

### 1015D
- our TEI WAS: `non potes crescere`
- Migne PRINTS (now patched in): `non putes crescere`
- Class 2: control is the closed o of *non* on the same line. Unlocks [cj: *putes*; read *potes*].

### 1015D
- our TEI WAS: `<hi>magnificatus.</hi>`
- Migne PRINTS (now patched in): `<hi>mugnificatus.</hi>`
- Class 2: ⚠ the same word supplies its own control — the a of *-catus* four letters later is a closed-bowl italic a, the disputed glyph a two-stemmed open-topped u. 1200 dpi. Unlocks [sic: *mugnificatus*].

### 1015D
- our TEI WAS: `otitia, qui semper ⏎ magnus`
- Migne PRINTS (now patched in): `otitia, quia semper ⏎ magnus`
- Class 1: English already follows the plate ("because thou art always great").

### 1016C
- our TEI WAS: `mnantur.</p> ⏎ <p>VERS. 13.-- <hi>De fructu`
- Migne PRINTS (now patched in): `mnantur.</p> ⏎ <p>VERS. 15.-- <hi>De fructu`
- ⛔ HIGHEST PRIORITY. The lemma is *De fructu operum tuorum* = Ps 103:13 and Migne's own next address is `VERS. 14.`, so his sequence runs 12, 15, 14, 16, 17. CC silently renumbered him. Wilson's ruling: restore his number AND mark it. The English already prints `VERS. 15.--` and differs visibly from its twin until this lands.

### 1019C
- our TEI WAS: `promittitur haereditas`
- Migne PRINTS (now patched in): `promittitur haere ditas`
- Class 2: SPLIT TYPE. The gap equals the inter-word spacing of `huic fidei promittitur` on the same line. Unlocks [sic: *haere ditas*] (Pattern 10, whole run).

### 1021B
- our TEI WAS: `ut his adjuti`
- Migne PRINTS (now patched in): `ut hic adjuti`
- Class 1: English already follows the plate ("being helped here").

### 1021B
- our TEI WAS: `Et non erat infirmus`
- Migne PRINTS (now patched in): `Ft non erat infirmus`
- Class 2: control is the italic E of *Et eduxit* two lines above, which has a bottom bar; this sort has none. Unlocks [sic: *Ft*].

### 1022C
- our TEI WAS: `Id est, quid`
- Migne PRINTS (now patched in): `Id est, quod`
- Class 1: English already follows the plate. ⚑ Column corrected from the stint's 1022D.

### 1023A
- our TEI WAS: `mutati sunt, etc.,`
- Migne PRINTS (now patched in): `mutati sunt, ete.,`
- Class 2: control is the open crossbar-less c of *vindicantis* on the line above, against a clear crossbar here. 1200 dpi. Unlocks [sic: *ete.*].

### 1023C
- our TEI WAS: `peccantes, quod et boni`
- Migne PRINTS (now patched in): `peccantes, quod est boni`
- Class 1: English already follows the plate ("which belongs to a good man too").

### 1024B
- our TEI WAS: `ad inventionibus suis`
- Migne PRINTS (now patched in): `adinventionibus suis`
- Class 3: the plate sets ONE word, opening the line; CC split it. English already follows the plate. ⚑ Column corrected from the stint's 1024C.

### 1024D
- our TEI WAS: `et hic et supra`
- Migne PRINTS (now patched in): `et his et supra`
- Class 1: English already follows the plate ("both in these places and above").

### 1025B
- our TEI WAS: `coeperant eos`
- Migne PRINTS (now patched in): `caeperant eos`
- ⭐ Class 1: the twin's `coeperant` reads as *coepi* "they had begun", nonsense in the lemma; Migne's is *ceperant* "they had taken", and the gloss's own last clause (`sub quibus fuere captivi`) confirms it. English follows the plate.

### 1025C
- our TEI WAS: `eratum est`
- Migne PRINTS (now patched in): `oratum est`
- Class 3: clear round o at 900 dpi. THE NON-WORD IS OURS. English already follows the plate ("which was prayed").

### 1026D
- our TEI WAS: `subdens, <hi>dixit et stetit. In profundo. Dixit et stetit`
- Migne PRINTS (now patched in): `<hi>dixit et stetit. In profundo. Dixit et stetit</hi> subdens, <hi>`
- ⭐ Class 2: CC dropped a whole roman `subdens,` from BETWEEN the two italic runs — an eye-skip on the *subdens* eight words earlier — and moved it to the head of the passage. English follows the plate, and the span structure of the English differs from the twin here by design.

### 1026D
- our TEI WAS: `spiritus procellae,</hi> etc.`
- Migne PRINTS (now patched in): `spiritus procellae.</hi>`
- Class 2: the second half of the same site — CC added `, etc.` where Migne sets a full stop.

### 1027A
- our TEI WAS: `cclesia ⏎ commendatur, etc.,`
- Migne PRINTS (now patched in): `cclesia ⏎ conmendatur, etc.,`
- Class 2: attested assimilation; Pattern 9, no marker.

### 1027B
- our TEI WAS: `fructus bonorum operum`
- Migne PRINTS (now patched in): `fructus honorum operum`
- Class 1: unlocks [sic: *honorum*]. English edit owed in 0082.md.

### 1027B
- our TEI WAS: `c., <hi>usque ad</hi> sed ⏎ non era`
- Migne PRINTS (now patched in): `c., <hi>usque ad</hi> ⏎ non era`
- Class 2: CC inserted `sed`. English follows the plate.

### 1029A
- our TEI WAS: `Et posuerunt adversum`
- Migne PRINTS (now patched in): `Et posueruent adversum`
- Class 1: unlocks [sic: *posueruent*]. English edit owed in 0083.md.

### 1029A
- our TEI WAS: `quod et Deus judex`
- Migne PRINTS (now patched in): `quod est Deus judex`
- Class 2: CC turned `est` into `et`, SMOOTHING a hard clause. English follows the plate ("which is, God the judge does") and the strain is logged in the cruces.

### 1029B
- our TEI WAS: `sub regibus gentium`
- Migne PRINTS (now patched in): `regibus gentium`
- Class 2: CC inserted `sub`. English follows the plate ("of the kings of the Gentiles").

### 1029B
- our TEI WAS: `Diripiant labore ejus`
- Migne PRINTS (now patched in): `Diripiant labores ejus`
- Class 2: the plate agrees with Clementine Ps 108:11 `labores`; CC's singular is its own. English follows the plate.

### 1030C
- our TEI WAS: `quidquid in utroque`
- Migne PRINTS (now patched in): `quiquid in utroque`
- Class 1: unlocks [sic: *quiquid*]. English edit owed in 0083.md.

### 1031D
- our TEI WAS: `manet saeculum saeculi`
- Migne PRINTS (now patched in): `manet in saeculum saeculi`
- Class 2: CC dropped `in`. English follows the plate. ⚑ Column corrected from the stint's 1031B.

### 1032A
- our TEI WAS: `in futura glorificatus`
- Migne PRINTS (now patched in): `in futura glorificatur`
- Class 1: unlocks [cj: *glorificatur*; read *glorificatus*]. English edit owed in 0084.md. ⚑ Column corrected from the stint's 1032B.

### 1033A
- our TEI WAS: `a captivitate liberati`
- Migne PRINTS (now patched in): `a captivitate liberavi`
- Class 1: unlocks [sic: *liberavi*]. English edit owed in 0084.md.

### 1034A
- our TEI WAS: `laudandus sit`
- Migne PRINTS (now patched in): `laudamus sit`
- Class 1: unlocks [cj: *laudamus*; read *laudandus*]. English edit owed in 0085.md. ⚑ Column corrected from the stint's 1034B.

### 1035A
- our TEI WAS: `Barbaro lingua est`
- Migne PRINTS (now patched in): `Barbara lingua est`
- ⭐ Class 2: CC assimilated the gloss's first word to the italic lemma *Barbaro.* immediately before it, turning a DEFINITION ("that tongue is barbarous which praises not God") into an agreement error. English follows the plate. WHEN OUR LATIN AGREES SUSPICIOUSLY NEATLY WITH AN ADJACENT LEMMA, OPEN THE LEAF.

### 1036D
- our TEI WAS: `notat quod non est`
- Migne PRINTS (now patched in): `nota quod non est`
- Class 2: the nota/notat half is certain at the plate. ⛔ The `ostiosus`/`ostiosns` half of the same clause is REFUSED — the penultimate letter will not settle as u or n and a patch must not guess a letter (the Nafrubimus precedent). ⚑ Column corrected from the stint's 1037A.

### 1037D
- our TEI WAS: `ideo intrat in gaudium`
- Migne PRINTS (now patched in): `ideo intra in gaudium`
- Class 1: unlocks [cj: *intra*; read *intrat*]. English edit owed in 0086.md.

### 1038D
- our TEI WAS: `VERS. 18, 19.-- <hi>Vota mea reddam.</hi>`
- Migne PRINTS (now patched in): `VERS. 18, 19.-- <hi>Vota mea reddum.</hi>`
- Class 1: ⭐ the correct `reddam` stands three lines below IN THE SAME COLUMN — the same-page control, and the reason this is Migne's defect and not a reading. Unlocks [sic: *reddum*]. English edit owed in 0086.md after the FIRST "*I will pay my vows.*"

### 1039A
- our TEI WAS: `sequentem Psalmum`
- Migne PRINTS (now patched in): `sequentem Psalmus`
- Class 1: unlocks [cj: *Psalmus*; read *Psalmum*]. English edit owed in 0086.md.

### 1039A
- our TEI WAS: `non recipit divisionem`
- Migne PRINTS (now patched in): `non recipi divisionem`
- Class 1: unlocks [cj: *recipi*; read *recipit*]. English edit owed in 0086.md.

### 1039A
- our TEI WAS: `te> Sed ne quis ⏎ putet p`
- Migne PRINTS (now patched in): `te> Sed ue quis ⏎ putet p`
- Class 1: unlocks [sic: *ue*]. English edit owed in 0086.md.

### 1039C
- our TEI WAS: `solutus, etc.,`
- Migne PRINTS (now patched in): `solutus, ete.,`
- Class 2: third letter carries a full crossbar, identical to the first `e` of the same word at 600 dpi. Unlocks [sic: *ete.*].

### 1039C
- our TEI WAS: `evadit, et ad veram`
- Migne PRINTS (now patched in): `evadit, et et ad veram`
- Class 2: both copies mid-line and adjacent on the plate. Unlocks [d: et, et].

### 1039D
- our TEI WAS: `Nescientes Judaei rem omnium`
- Migne PRINTS (now patched in): `Nesciente Judae rem omnium`
- Class 2: two letters in two words, unambiguous at 900 dpi. English renders the plate ("Judah not knowing, they made..."). No marker owed.

### 1040A
- our TEI WAS: `spinis peccatorum`
- Migne PRINTS (now patched in): `spinis pecatorum`
- Class 2: `peccata` set CORRECTLY eleven words later on the SAME LINE — the same-line control. Unlocks [sic: *pecatorum*].

### 1041D
- our TEI WAS: `e quibus ad verbum`
- Migne PRINTS (now patched in): `et quibus ad verbum`
- ⭐⭐ THE PSALM CXVIII EDITORIAL SENTENCE. CC repaired Migne's `et` into the construing `e`. Mid-line, clear of col 1041's clipped inner margin, and the scan's own djvu OCR reads `et quibus` independently. English renders the plate.

### 1043A
- our TEI WAS: `</p> ⏎ <p>VERS. 4.--<note>`
- Migne PRINTS (now patched in): `</p> ⏎ <p>VESS. 4.--<note>`
- Class 2: ⛔ SECTION LABEL — Pattern 9 governs and NO marker is owed; the English normalizes it precisely BECAUSE the facing Latin preserves it.

### 1043C
- our TEI WAS: `securi et cum Domino`
- Migne PRINTS (now patched in): `securi et eum Domino`
- Class 2: `securi` on the same line gives the c-control. Unlocks [cj: *eum*; read *cum*]. ⚑ English edit owed — it now reads "shall judge with the Lord" (the twin); with the patch it must take the marker or it silently repairs a broken column (§F8 defect 3).

### 1043C
- our TEI WAS: `in quibus Deus`
- Migne PRINTS (now patched in): `in quibus Deum`
- Class 2: unlocks [cj: *Deum*; read *Deus*]. ⚑ English edit owed — it reads "in whom God sits"; with the patch it must take the marker.

### 1044A
- our TEI WAS: `proximos et fratres`
- Migne PRINTS (now patched in): `proximos fratres`
- Class 1: CC inserts `et`, a step toward Ps 121:8 `propter fratres meos ET proximos meos`. English already renders the plate.

### 1044A
- our TEI WAS: `in hoc quod te diligo`
- Migne PRINTS (now patched in): `in hoc hoc quod te diligo`
- Class 2: both copies mid-line — ⛔ NOT a column turn, so the manufactured-dittography trap does not apply. Unlocks [d: hoc, hoc].

### 1044B
- our TEI WAS: `Dat similitudinem`
- Migne PRINTS (now patched in): `Dat similttudinem`
- Class 2: unlocks [sic: *similttudinem*].

### 1045B
- our TEI WAS: `PSAMUS CXXIV.`
- Migne PRINTS (now patched in): `PSALMUS CXXIV.`
- Class 3: our TEI carries the non-word — CC's defect, not Migne's. No [sic:] either way (Pattern 9); the head is normalized in English.

### 1046C
- our TEI WAS: `Aventus`
- Migne PRINTS (now patched in): `Adventus`
- Class 3: CC MANUFACTURED the non-word. A [sic:] here would have been a false public accusation against a word Migne set correctly.

### 1047A
- our TEI WAS: `</note> Quasi diceret: ⏎ jam ve`
- Migne PRINTS (now patched in): `</note> Quasi dieeret: ⏎ jam ve`
- Class 2: `Ecce haereditas` on the same line supplies two c-controls. Unlocks [sic: *dieeret*]. ⚑ Column corrected from the stint's 1047C — the find resolves in 1047A, which is also where the control it names stands.

### 1048A
- our TEI WAS: `Beati omne`
- Migne PRINTS (now patched in): `Beati omnes`
- Class 2: the FIRST, unabridged occurrence. Migne is correct; no marker owed in either direction once patched.

### 1048A
- our TEI WAS: `labores cum gaudio`
- Migne PRINTS (now patched in): `labore cum gaudio`
- Class 2: English renders the plate ("taken up with joy even in the labour").

### 1048B
- our TEI WAS: `sancti venient`
- Migne PRINTS (now patched in): `sancti veniens`
- Class 2: unlocks [cj: *veniens*; read *venient*]. English edit owed.

### 1050A
- our TEI WAS: `lacte (quod est Verbum`
- Migne PRINTS (now patched in): `lacte quod est Verbum`
- Class 3: the plate prints NO parenthesis; our TEI carries an unmatched opening `(`. CC inserted it (the @0936D class). The English is written without a parenthesis.

### 1050C
- our TEI WAS: `quo nihil gratius`
- Migne PRINTS (now patched in): `quod nihil gratius`
- Class 2: the plate is good Latin and the English already renders it. ⚑ Column corrected from the stint's 1050D.

### 1052A
- our TEI WAS: `r Deus, etc., <hi>usque ad</hi> in ⏎ <pb n="`
- Migne PRINTS (now patched in): `r Deus, etc., <hi>usque ad</hi> tu ⏎ <pb n="`
- Class 2: English already renders the plate ("as far as for thou doest it"). ⚑ Column corrected from the stint's 1052B — CC's `in` stands before the column turn.

### 1052C
- our TEI WAS: `secure ⏎ exaltavit.</p> ⏎ <p`
- Migne PRINTS (now patched in): `secure ⏎ cxaltaxit.</p> ⏎ <p`
- Class 1: the x for v cannot be produced by ink failing to reach the paper. Unlocks [sic: *exaltaxit*]. English edit owed.

### 1053A
- our TEI WAS: `id est in latitudine`
- Migne PRINTS (now patched in): `id est iu latitudine`
- Class 1: unlocks [sic: *iu*]. English edit owed. ⚑ Column corrected from the stint's 1053B.

### 1053A
- our TEI WAS: `Non quod alia gratia sit`
- Migne PRINTS (now patched in): `Non alia gratia sit`
- Class 2: English already renders the plate. ⚑ Column corrected from the stint's 1053B.

### 1055B
- our TEI WAS: `totius orbis conditionem`
- Migne PRINTS (now patched in): `totius orbi conditionem`
- Class 1: unlocks [cj: *orbi*; read *orbis*]. English edit owed. ⚑ Column corrected from the stint's 1055C.

### 1055B
- our TEI WAS: `quasi dicat: Cultores`
- Migne PRINTS (now patched in): `quasi : Cultores`
- Class 2: English already renders the plate ("as it were: Let the worshippers of idols...").

### 1055B
- our TEI WAS: `VERS. 18.-- <hi>Similes illis fiant.</hi>`
- Migne PRINTS (now patched in): `VERS. -- <hi>Similes illis fiant.</hi>`
- ⭐⭐ Class 4: THE PLATE PRINTS NO VERSE NUMBER AT ALL — the em-rule follows `VERS.` directly, confirmed at 900 dpi. Ps 134:18 is the right verse, so CC's supplement is correct and SILENT. The English keeps `VERS. 18.--` (addresses pass through verbatim); the patch is Latin-only.

### 1056A
- our TEI WAS: `sanctos, qui non modo credere`
- Migne PRINTS (now patched in): `sanctos, cui non modo credere`
- Class 2: English already renders the plate ("to whom he granted not only to believe").

### 1056B
- our TEI WAS: `in Aegypto fecit`
- Migne PRINTS (now patched in): `in Aegypto facit`
- ⭐ Class 2: a TENSE change with no orthographic cover, invisible to any Vulgate collation — present typology turned into past history. English renders the plate.

### 1056D
- our TEI WAS: `mente et desiderio`
- Migne PRINTS (now patched in): `mente desiderio`
- Class 2: English already renders the plate.

### 1057C
- our TEI WAS: `Ideumaei`
- Migne PRINTS (now patched in): `Idumaei`
- Class 3: our TEI carries the non-word; the plate prints it cleanly at 900 dpi. The `Aventus` @1046C case exactly — CC's, not Migne's.

### 1058B
- our TEI WAS: `exspecto`
- Migne PRINTS (now patched in): `expecto`
- Class 3: orthographic, no English exponent.

### 1058C
- our TEI WAS: `dicit quomodo haec bona`
- Migne PRINTS (now patched in): `dici quomodo haec bona`
- Class 1: unlocks [cj: *dici*; read *dicit*]. ⛔ English must become "where it is said [cj: ...] how".

### 1058D
- our TEI WAS: `poena, non tantum culpa`
- Migne PRINTS (now patched in): `poena, noc tantum culpa`
- Class 1: unlocks [sic: *noc*]. ⛔ 7a⁗ — the English negative must stand OUTSIDE the marker.

### 1059A
- our TEI WAS: `princeps mundi peccatum`
- Migne PRINTS (now patched in): `principes mundi peccatum`
- ⭐ Class 2: a NUMBER change with no orthographic cover, invisible to any Vulgate collation — plural rulers turned into the devil, against *quare occideret*. English renders the plate.

### 1059B
- our TEI WAS: `Semitam meam`
- Migne PRINTS (now patched in): `Semitam meum`
- Class 1: Migne's concord defect on the Ps 138:3 lemma. Patch yes, NO marker — the mismatch has no English exponent (the `res aliena` @0971D precedent, Pattern 12(2)).

### 1059B
- our TEI WAS: `occurit`
- Migne PRINTS (now patched in): `occurrit`
- Class 3: same class. CC's non-word.

### 1059C
- our TEI WAS: `incomprehensibilis`
- Migne PRINTS (now patched in): `incomprehensibllis`
- Class 1: unlocks [sic: *incomprehensibllis*]. English edit owed.

### 1059C
- our TEI WAS: `gratia justificati.</p> ⏎ <p`
- Migne PRINTS (now patched in): `gratia justificaui.</p> ⏎ <p`
- Class 1: the disputed glyph is a bottom-arched u at 900 dpi against the tall crossed t of *gratia* on the same line. Whether Migne meant *justificavi* or set a broken *justificati* cannot be decided from the leaf; the reading is patched, the marker left to the pass.

### 1059C
- our TEI WAS: `peccatum lapsi sumus`
- Migne PRINTS (now patched in): `pecatum lapsi sumus`
- Class 1: unlocks [sic: *pecatum*]. English edit owed.

### 1059D
- our TEI WAS: `ab eo fugiendum`
- Migne PRINTS (now patched in): `ab eo fungiendum`
- Class 1: unlocks [sic: *fungiendum*]. ⛔ 7a⁗ — the `non` must stay outside the marker.

### 1059D
- our TEI WAS: `Quo ibo a spiritu tuo`
- Migne PRINTS (now patched in): `Quo ibo spiritu tuo`
- Class 1: Migne drops the `a` our twin carries. ⚠ An English edit rides with this: "Whither shall I go FROM thy spirit?" becomes "by thy spirit", which the gloss's own next clause (*non esse ab eo fugiendum*) contradicts. That contradiction is Migne's and is what Pattern 7 exists to show — taken deliberately, not by omission.

### 1060B
- our TEI WAS: `Et dixi, forsitan`
- Migne PRINTS (now patched in): `Et dixit forsitan`
- Class 1: the plate has the THIRD person; the gloss's own next word is `Deliberavi`, first person, so the patch makes Migne argue against his own gloss. English edit owed ("And he said").

### 1060B
- our TEI WAS: `<hi>Et dixi.</hi> <note>(AUG.)</note> Deliberavi`
- Migne PRINTS (now patched in): `<hi>Et dixit.</hi> <note>(AUG.)</note> Deliberavi`
- Class 1: the second lemma, same site, same reading. English edit owed.

### 1060C
- our TEI WAS: `quatenus agnoscis`
- Migne PRINTS (now patched in): `quatenus agnoscit`
- Class 2: English already renders the plate ("in so far as HE acknowledges").

### 1062A
- our TEI WAS: `cilicet linqua, manu e`
- Migne PRINTS (now patched in): `cilicet lingua, manu e`
- Class 3: our non-word; the plate has a double-storey g with a closed lower loop at 900 dpi.

### 1062B
- our TEI WAS: `VERS. 6.-- <hi>Superbi.</hi>`
- Migne PRINTS (now patched in): `VERS. 9.-- <hi>Superbi.</hi>`
- Class 2: unlocks [sic: *VERS. 9.*]. The English ALREADY prints Migne's `VERS. 9.--` per the 1016C ruling, so the columns disagree visibly until this lands. ⚑ Column corrected from the stint's 1062A — the English/Latin disagreement is at the second VERS. 6 of the psalm, in 1062B.

### 1063B
- our TEI WAS: `i petit apponi custodi`
- Migne PRINTS (now patched in): `i petit apponit custodi`
- Class 2: unlocks [cj: *apponit*; read *apponi*]. English edit owed in 0097.md.

### 1065C
- our TEI WAS: `Fortis non fugit`
- Migne PRINTS (now patched in): `Fortius non fugit`
- Class 2: ⭐ THE INTERNAL CONTROL IS MIGNE'S OWN NEXT CLAUSE — `Periit fuga concluso vel forti`, whose dative pair names *Circumclusus* and *Fortis*, so `Fortis` is what the argument requires. Unlocks [cj: *Fortius*; read *Fortis*]. ⚑ Column corrected from the stint's 1065B.

### 1065C
- our TEI WAS: `mente, quia non vult`
- Migne PRINTS (now patched in): `mente, qui non vult`
- Class 2: the second half of the same site; `qui non vult` construes, so NO marker is owed on this one.

### 1066A
- our TEI WAS: `poenitentialum`
- Migne PRINTS (now patched in): `poenitentialium`
- Class 3: CC dropped the i (the plate hyphenates `poeniten-|tialium`).

### 1067A
- our TEI WAS: `Auferes spiritum eorum`
- Migne PRINTS (now patched in): `Auferes spiritus eorum`
- Class 1: CC CONFORMS MIGNE TO THE VULGATE — the TEI's `spiritum` IS the Clementine's own reading at Ps 103:29. Final s clear at 900 dpi, control the m of *eorum* immediately after. English already renders the plate.

### 1067A
- our TEI WAS: `m.</hi> (CAS). Ut vas`
- Migne PRINTS (now patched in): `m.</hi> (CAS.) Ut vas`
- Class 3: the misplaced point is CC's, and it stops the chunker recognising a note, so it prints as body text. English edit owed in 0099.md.

### 1067D
- our TEI WAS: `conditus est, veritati ⏎ similis factus est`
- Migne PRINTS (now patched in): `conditus est, veriteti ⏎ simlis factus est`
- Class 2 — TWO Migne defects in one clause, patched as ONE entry because they are adjacent across a line break and two separate patches would have NESTED, which is the pair that deadlocked the Band B queue. `veriteti` is the `iniquitetem` class exactly; `simlis` stands inside the Ps 143:4 lemma with the two dotted i of *Vanitati* on the same line as its control. Unlocks [sic: *veriteti*] and [sic: *simlis*].

### 1068B
- our TEI WAS: `gladius bis acutus <note>(`
- Migne PRINTS (now patched in): `gladius bis actus <note>(`
- Class 2: control is *acumine* on the very next line. Unlocks [cj: *actus*; read *acutus*]. English edit owed.

### 1068D
- our TEI WAS: `Non labore macri`
- Migne PRINTS (now patched in): `Non laboro macri`
- Class 2: unlocks [cj: *laboro*; read *labore*]. English edit owed.

### 1068D
- our TEI WAS: `cum ipsi sint`
- Migne PRINTS (now patched in): `eum ipsi sint`
- Class 2: the SAME compositor slip stint 0087 found at 1043C. Crossbar clear at 900 dpi against the open c of *macri* one line above. Unlocks [cj: *eum*; read *cum*]. English edit owed.

### 1069C
- our TEI WAS: `sine fine dies`
- Migne PRINTS (now patched in): `sine fines dies`
- Class 2: unlocks [cj: *fines*; read *fine*]. English edit owed.

### 1069C
- our TEI WAS: `Bene dicit nunc`
- Migne PRINTS (now patched in): `Benedicit nunc`
- ⭐ Class 3: the gap to *nunc* is a full word space, the gap inside is none. CC's split gives "he rightly says", A DIFFERENT GLOSS. English already renders the plate ("He blesses now").

### 1069C
- our TEI WAS: `qua visione`
- Migne PRINTS (now patched in): `quia visione`
- Class 3: dotted i clear at 900 dpi. English already renders the plate ("because nothing is more delightful than that vision").

### 1070A
- our TEI WAS: `a ⏎ esset correctio; si ver`
- Migne PRINTS (now patched in): `a ⏎ esset corectio; si ver`
- Class 2: unlocks [sic: *corectio*].

### 1071B
- our TEI WAS: `ctus in omnibus operibu`
- Migne PRINTS (now patched in): `ctus in omnibns operibu`
- Class 2: inside the Ps 144:17 lemma. ⭐ A TURNED SORT, not the imaging hazard — *operibus* two words later on the SAME LINE shows a bottom-arched u where the disputed sort is cleanly top-arched. Unlocks [sic: *omnibns*].

### 1071C
- our TEI WAS: `quasi musica`
- Migne PRINTS (now patched in): `quasi musicas`
- Class 1: unlocks [cj: *musicas*; read *musica*]. English edit owed in 0102.md. ⚑ Column corrected from the stint's 1071D.

### 1071C
- our TEI WAS: `t.</hi> (ID). ⏎ Conclud`
- Migne PRINTS (now patched in): `t.</hi> (ID.) ⏎ Conclud`
- Class 3: same. English edit owed in 0101.md.

### 1071D
- our TEI WAS: `Hac spe erecta`
- Migne PRINTS (now patched in): `Haec spe erecta`
- Class 4: English already follows the plate ("This soul, lifted up by hope").

### 1072A
- our TEI WAS: `in puritate laudato`
- Migne PRINTS (now patched in): `in puritate laudatio`
- Class 1: unlocks [cj: *laudatio*; read *laudato*]. Marker rides beside "praised for its purity".

### 1072B
- our TEI WAS: `saecularium rerum amores`
- Migne PRINTS (now patched in): `saeculorum rerum amores`
- Class 4: English already follows the plate.

### 1073B
- our TEI WAS: `Diligi justos.`
- Migne PRINTS (now patched in): `Diligit justos.`
- Class 2: our twin's `Diligi` is a non-word CC made, and it is the lemma brief's ⚠ "NOT in Clementine verbatim" entry. Once patched the lemma agrees with Ps 145:8 EXACTLY and no [var:] is owed either. English already renders the plate.

### 1073B
- our TEI WAS: `viduam suscipiet`
- Migne PRINTS (now patched in): `viduam suseipiet`
- Class 1: the disputed glyph carries a CROSSBAR and the documented hazard runs the other way — a c cannot grow a bar by failing to ink. Unlocks [sic: *suseipiet*]. English edit owed. ⚑ Column corrected from the stint's 1072D.

### 1073D
- our TEI WAS: `dispersiones Israel`
- Migne PRINTS (now patched in): `disper iones Israel`
- Class 1: SPLIT TYPE, a full word-space on the plate. Unlocks [sic: *disper iones*] (Pattern 10, carry the whole run). English edit owed.

### 1075B
- our TEI WAS: `janam januam`
- Migne PRINTS (now patched in): `januam`
- ⛔⛔ Class 2: the plate prints `januam` ONCE. CC MANUFACTURED the dittography — a [d: januam] would have been a false public accusation, the `Ideo-|que` class from the Band B merge.

### 1075B
- our TEI WAS: `scandala. scandala.`
- Migne PRINTS (now patched in): `scandala.`
- ⛔⛔ Class 2: the plate prints it ONCE, at the end of the paragraph. Same class.

### 1075C
- our TEI WAS: `mitteret verbum`
- Migne PRINTS (now patched in): `mittere verbum`
- Class 1: unlocks [cj: *mittere*; read *mitteret*].

### 1076A
- our TEI WAS: `bucellas`
- Migne PRINTS (now patched in): `buccellas`
- Class 2: `buccellas` is the Clementine's own spelling. CC de-doubled the c and so MANUFACTURED the appearance of a divergence at Ps 147:6.

### 1076C
- our TEI WAS: `</hi>.</p> ⏎ <p>VERS. 19.-- <hi>Jacob . .`
- Migne PRINTS (now patched in): `</hi>.</p> ⏎ <p>VERS. 16.-- <hi>Jacob . .`
- Class 1: the plate runs 17, 18, 16. The 1016C ruling. English already prints Migne's `VERS. 16.`

### 1076C
- our TEI WAS: `perierunt domus Israel`
- Migne PRINTS (now patched in): `perierunt Israel`
- ⭐⭐ Class 3: Migne prints NO `domus`; CC inserted it, exactly matching Mt 15:24, DESTROYING a real [var:]. The English already follows the plate ("to the sheep that were lost of Israel"), so only the marker is outstanding.

### 1076C
- our TEI WAS: `gratia Trinitatis eluceat`
- Migne PRINTS (now patched in): `gratias Trinitatis eluceat`
- Class 4: `gratias` cannot be the subject of *eluceat*, but the CASE has no English exponent and the NUMBER does — English renders the plural. Pattern 9, no marker.

### 1077A
- our TEI WAS: `Profunditates aquarum`
- Migne PRINTS (now patched in): `Profunditas aquarum`
- Class 4: English already follows the plate ("The depth of the waters").

### 1077A
- our TEI WAS: `VERS. 7.-- <hi>Laudate Dominum.</hi>`
- Migne PRINTS (now patched in): `VERS. 7.-- <hi>Laudate Dominam.</hi>`
- Class 1: the Ps 148:7 lemma. Unlocks [cj: *Dominam*; read *Dominum*]. English edit owed in 0104.md.

### 1077A
- our TEI WAS: `<hi>Omnes abyssi.</hi>`
- Migne PRINTS (now patched in): `<hi>Omnes ubyssi.</hi>`
- Class 1: italic u with two stems and a bottom arch, no bowl; roman a/u control on the same column at 1077C. NOT the turned-sort class. Unlocks [sic: *ubyssi*]. English edit owed.

### 1077C
- our TEI WAS: `benevolus et beneficus`
- Migne PRINTS (now patched in): `benevolus et benficus`
- Class 1: unlocks [sic: *benficus*]. English edit owed in 0105.md.

### 1077C
- our TEI WAS: `Secundo agit de gaudiis`
- Migne PRINTS (now patched in): `Secunda agit de gaudiis`
- Class 4: `Secunda` construes as *secunda [pars]* and is not a defect.

### 1077D
- our TEI WAS: `cantari debeat hoc canticum`
- Migne PRINTS (now patched in): `cantari debat hoc canticum`
- Class 1: unlocks [sic: *debat*]. English edit owed.

### 1077D
- our TEI WAS: `canticum charitatis`
- Migne PRINTS (now patched in): `eanticcum charitatis`
- Class 1: crossbar control. Unlocks [sic: *eanticcum*]. English edit owed. ⚑ Column corrected from the stint's 1077C.

### 1078B
- our TEI WAS: `Nescitis quia angelos`
- Migne PRINTS (now patched in): `Neseitis quia angelos`
- Class 1: crossbar control. Unlocks [sic: *Neseitis*].

### 1078B
- our TEI WAS: `mansiones`
- Migne PRINTS (now patched in): `mahsiones`
- Class 1: the disputed glyph has a TALL ASCENDER to the height of the d of *domo* and the P of *Patris* on the same line; an n has none. Unlocks [sic: *mahsiones*].

### 1078B
- our TEI WAS: `unde non sit liberum`
- Migne PRINTS (now patched in): `unde nos sit liberum`
- Class 1: unlocks [cj: *nos*; read *non*]. ⛔ WILSON'S RULING OWED — following the plate here would put the opposite of Migne's own next clause on the page with nothing able to quarantine it, so the English follows the twin and says so.

### 1078D
- our TEI WAS: `ferreis, ne progrederentur`
- Migne PRINTS (now patched in): `ferrcis, ne progrederentur`
- Class 1: roman, and the disputed glyph is a clean open c with both terminals against three fully-inked barred e's on the same line. ⚠ THE ONE CALL IN THIS BAND A SECOND READER SHOULD RE-OPEN — it is the italic-e-images-as-c hazard's own shape, and the deciding evidence is that the glyph is WELL FORMED, not broken. Unlocks [sic: *ferrcis*].

### 1079A
- our TEI WAS: `secundum eam laudatur`
- Migne PRINTS (now patched in): `secundum eam laudatur.`
- Class 4: a FULL STOP where CC runs the clause on. Pattern 8 — the English follows the plate, and the resulting short sentence is Migne's, not ours.
