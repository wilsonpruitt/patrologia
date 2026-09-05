# 9002 — cruces, stint 0006–0011 (cols 0079A–0096B)

*Glossa ordinaria*, **Evangelium secundum Matthaeum**, PL 114. Chunks 0006–0011: `CAPUT III`
(the Baptist), `CAPUT IV` (the Temptation and the call of the first disciples), and `CAPUT V`
as far as Mt 5:37 — 7,153 Latin words, 15 columns, both plates read.

---

## (a) The policy applied, stated before the findings so it can be argued with

**1. Plates first, and both of them.** Every one of the nine leaves in this range was rendered
from the archive copy at 300 dpi and read column by column with the printed corner numbers checked
first, and **every candidate raised there was then checked at Gallica**. Twenty-one candidates,
twenty refuted, one confirmed. No `[sic:]` is fireable in this range and none is fired. The two
divergences that survived are Corpus Corporum's and are filed as TEI patches
(`data/briefs/9002-PENDING-TEI-PATCHES-0006.md`); the per-page ledger is
`data/briefs/9002-PLATE-READS-0006.json`.

**2. Where the plate was read and our twin diverges, the English renders the plate**
(`translation-style.md` §"What the English translates"). Two sites: @0090D `maledicta` (our twin
prints the non-word `maledieta`) and @0081D the colon after `Ac si dicat`. Both are patched-pending,
and the second is the single deliberate band-level punctuation mismatch in this stint.

**3. `[var:]` threshold — stated, so the declines can be judged against it.** Launch brief §2 rules
that a single-word `[var:]` stands only where the divergence has a witness of its own: either the
gloss argues from the word, or **the form is one that letter-level corruption cannot manufacture.**
I applied the second limb mechanically:

- *fires* — a different word (*Habitantibus*/*sedentibus*, *illi*/*ei*, *autem*/*enim*), a changed
  number carried across two words (*fructus dignos*/*fructum dignum*), an added or restructured
  clause. None of these can be produced by a broken sort.
- *declines* — a one-letter difference in a form that means the same thing (*Abscinde*/*abscide*,
  *Dextera*/*dextra*, *circumibat*/*circuibat*, *supra*/*super*, *Inexstinguibili*/*inextinguibili*,
  *Iota*/*jota*), and a fragment cut at a particle (*enim*, *autem*, *ergo* absent because the
  quotation starts after them).

**13 fired, and every declined span is listed in §c with the reason.**

**4. Vocabulary axes, applied from the first chunk.** `turba` → crowd (0088D *Quadripartitae
turbae* "fourfold crowds"; 0089A *in turba remanere* "in the crowd"); no `multitudo` in the range.
`daemonium` → demon (0095B *incenderent daemoniis*); `diabolus` → devil throughout CAPUT IV;
no `satanas`. `gentes` → **Gentiles** everywhere in this range, because every occurrence sits in the
*Judaei*/*gentes* typology (0080C *excaecatio Judaeorum et gentium*; 0086C the two Galilees;
0086D *in medio gentium*, *vocandi … de gentibus*); `gentiles` → Gentiles (0080D, 0081B);
**the one singular `gens` is the Jewish people and takes "nation"** — 0092B *terminis unius gentis
inclusit*, "within the bounds of a single nation". No `natio`, no `ethnicus`, no `gentilitas`.
`mysterium` → mystery, `sacramentum` → sacrament, 1:1 and never crossed (0081C *incarnationis
mysterium*; 0082A *Evangelii sacramenta*; 0088C *mysterium justitiae*; 0089B *profunditatem …
sacramenti*; 0092C *sacramentis spiritualibus*).

**5. `usque ad` — the `etc.` splice test, applied per occurrence. 34 in the range: 29 formula,
5 ordinary.** The five ordinary ones, each rendered by sense and named here as the axis requires:

| col | Latin | rendered | why not the formula |
|---|---|---|---|
| 0078D | *sed omnes usque ad praedicationem Joannis comprehendit* | "up to the preaching of John" | no `etc.` before it; extent of a span of years |
| 0089A | *quam eadem doctrina usque ad finem saeculi plenius erudiret* | "unto the end of the world" | temporal |
| 0091B | *ut sis salus mea usque ad extrema terrae* | "unto the ends of the earth" | **the verse's own words** (Is 49:6 / Act 13:47), inside a scripture quotation |
| 0095D | *dum a summo usque ad imum* | "from the highest to the lowest" | a *a … ad* range |
| 0095D | *a coelo usque ad capillum* | "from heaven to a hair" | the same range, restated |

**6. Second person by number, not by reverence** (Pattern 17). The range moves between the two
repeatedly and the Latin decides every time: plural **you** for the Pharisees at 0080B
(*deponitis*), for the crowd baptized at 0081B (*baptizo vos*), and for the apostles through
0090D–0092B (*Vos estis sal terrae*, *regite*, *constituatis*); singular **thou** for the individual
worshipper from 0093C to the end (*munus tuum*, *frater tuus*, *tu laesisti*, *reddas*, *jurabis*,
*potes*), for the Son at 0083D (*ut tu … placeas*) and 0082D (*a te*), and inside every singular
scripture address (*Dominum Deum tuum*, *Erue eum*, *angelis suis mandavit de te*).

**7. Nothing supplied.** Where Migne's sentence lacks a word English cannot do without, the English
is left as broken as the Latin and the site is logged in §d — three of them, at 0079B, 0083D-side
0084A, and 0094B. **No bracketed conjecture stands in the running text anywhere in this stint.**

---

## (b) Span count against the brief's total

`data/briefs/9002-lemmata-0006.txt` heads its inventory **241 spans, 0 open-ended**.

Counted in my own Latin, chunks 0006–0011, both whole-file and **paragraph-bounded** (the brief
requires both numbers, because an unmatched delimiter defeats a counter in either direction):

| | 0006 | 0007 | 0008 | 0009 | 0010 | 0011 | **total** |
|---|---|---|---|---|---|---|---|
| italic `*…*`, whole file | 46 | 8 | 63 | 19 | 56 | 49 | **241** |
| italic `*…*`, paragraph-bounded | 46 | 8 | 63 | 19 | 56 | 49 | **241** |
| guillemet `« … »` | 0 | 0 | 0 | 0 | 0 | 0 | **0** |

**241 = 241, on both counts, with 482 asterisks and zero guillemet characters in the range** — so
the two figures cannot have cancelled a pair of errors. Matthew is an italic-lemma book, like Luke
and unlike Genesis. The cut is clean: the file opens at `[0078D] VERS. 1.-- *In diebus autem.*`,
which is chunk 0006's first span, and closes at `[0096B] VERS. 37.-- *Est, est; non, non.*`, which
is chunk 0011's last.

---

## (c) The lemma divergence list — all 241 spans, in order, declines and reasons included

The `✓ / ⚠ / ⚑` column is the brief's mechanical pre-scan; the last column is my verdict after
reading the line. ⛔ **A ✓ was never taken as clearance**: the launch brief's warning that in a
gospel the harmony answers for the wrong verse is the reason §c reads the printed references rather
than the ticks, and it caught @0087A *Habitantibus in regione*, which carries no `VERS.` address
and therefore never showed as ⚑ at all.

| col | span | pre-scan | verdict |
|---|---|---|---|
| 0078D | `VERS. 1.-- *In diebus autem.*` | ✓ 1Par 5:10, Dn 2:44, Mt 3:1, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0078D | `*In diebus.*` | ✓ 1Mcc 1:12, 1Mcc 2:1, 1Mcc 5:55, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0078D | `*Praedicans.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0079A | `*In deserto Judaeae.*` | ✓ Mt 3:1 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0079A | `VERS. 2.-- *Poenitentiam.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0079B | `*Poenitentiam agite.*` | ✓ Mt 3:2, Mt 4:17 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0079B | `*Regnum coelorum.*` | ✓ Mt 3:2, Mt 4:17, Mt 5:3, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0079C | `*Appropinquavit enim,*` | ✓ Mt 3:2, Mt 4:17 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0079C | `VERS. 3.-- *Vox clamantis.*` | ✓ Is 40:3, Jo 1:23, Lc 3:4, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0079C | `*Paravi lucernam Christo meo [n: (Psal. CXXXI)]*` | ✓ Ps 131:17 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0079C | `*In deserto.*` | ✓ 1Cor 10:5, 1Mcc 2:31, 1Mcc 9:62, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0079D | `*Viam Domini.*` | ✓ Act 18:25, Act 18:26, Act 19:9, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0079D | `VERS. 4.-- *Ipse autem Joannes.*` | ✓ Mt 3:4 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0079D | `VERS. 5.-- *Tunc exibat ad eum,*` | ✓ Mt 3:5 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0079D | `*Baptizabantur ab eo in Jordane:*` | ✓ Mt 3:6 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0079D | `*descensio*` | — single word, check in place | Not scripture — the gloss's own etymology of *Jordanis*. Rendered "*a going down*". |
| 0080A | `VERS. 6.-- *In Jordane.*` | ✓ 4Rg 5:10, 4Rg 5:14, Mc 1:9, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0080A | `*Confitentes.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0080A | `VERS. 7.-- *Multos Pharisaeorum,*` | ✓ Mt 3:7 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0080B | `*Progenies viperarum,*` | ✓ Mt 3:7, Mt 12:34 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0080B | `VERS. 8.-- *Facite ergo fructus dignos. [n: (BEDA.)]*` | ⚑ MATCHES ONLY ELSEWHERE — Lc 3:8  (lemma is Mt 3) — CHECK | **⚑ ADJUDICATED — `[var:]` FIRED.** Mt 3:8 reads *fructum dignum* (sing.); Migne prints the plural, confirmed on BOTH witnesses. See §d. |
| 0080C | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0080C | `VERS. 9.-- *Dico enim.*` | ✓ Lc 3:8, Lc 7:28, Lc 10:24, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0080C | `*De lapidibus.*` | ✓ 3Rg 6:7, 3Rg 7:10, 3Rg 7:12, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0080D | `VERS. 10.-- *Jam enim securis.*` | ✓ Lc 3:9, Mt 3:10 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0080D | `*Securis.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0080D | `*Posita est:*` | ✓ Apc 21:16, Gal 3:19, Is 21:4, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0081A | `*Ad radicem.*` | ✓ Ex 32:19, Lc 3:9, Mt 3:10 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0081A | `*Ad radicem.*` | ✓ Ex 32:19, Lc 3:9, Mt 3:10 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0081B | `*Omnis ergo arbor,*` | ✓ Lc 3:9, Mt 3:10 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0081B | `VERS. 11.-- *Ego quidem.*` | ✓ 1Cor 1:12, 1Cor 3:4, 1Cor 5:3, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0081B | `*Ego quidem baptizo vos in aqua.*` | ✓ Mt 3:11 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0081B | `*Post me venturus est.*` | ✓ Jo 1:15, Jo 1:27, Mt 3:11 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0081B | `*Fortior me est.*` | ✓ Mt 3:11, Nm 22:6 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0081C | `*Cujus non sum,*` | ✓ Act 13:25, Lc 3:16, Mc 1:7, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0082A | `*Et vos mundi estis propter verbum quod locutus sum vobis [n: (Joan. XV)]*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** Jo 15:3 reads *Jam vos mundi estis propter **sermonem quem** locutus sum vobis*. Migne prints *Et … **verbum quod***, and the gloss argues from *verbum* ("baptizat in verbo"). Not letter-level. |
| 0082A | `*Mundans eos lavacro aquae in verbo vitae sanctificatae [n: (Ephes. V)]*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** Eph 5:26 reads *ut illam sanctificaret, mundans lavacro aquae in verbo vitae*; Migne adds *eos* and *sanctificatae*. Two whole words, not letter-level. |
| 0082A | `*In Spiritu sancto.*` | ✓ 1Cor 12:3, 1Thes 1:5, 2Cor 6:6, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0082B | `VERS.12.-- *Cujus ventilabrum.*` | ✓ Lc 3:17, Mt 3:12 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0082B | `*In manu,*` | ✓ 1Mcc 2:8, 1Mcc 3:6, 1Mcc 4:30, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0082B | `*Permundabit,*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0082B | `*Permundabit,*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0082B | `*Paleas autem.*` | ✓ Lc 3:17, Mt 3:12 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0082B | `*Qui non credit, jam judicatus est,*` | ⚠ NOT in Clementine verbatim — CHECK | Jo 3:18 *qui **autem** non credit…* — a fragment cut at the connective. Agrees. No marker. |
| 0082B | `*Inexstinguibili.*` | — single word, check in place | Mt 3:12 reads *inextinguibili*; Migne prints *Inexstinguibili*, with the *s*, on **both** witnesses. One inserted letter, orthographic, no sense at stake. **Declined** per the single-word rule. ⚑ Raised on the archive copy as a suspected *loss* of the s and refuted at Gallica — see the plate ledger. |
| 0082C | `*Igne nos examinasti [n: (Psal. LXV)]*` | ✓ Ps 65:10 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0082C | `VERS. 13.-- *Tunc venit.*` | ✓ Mt 3:13, Mt 26:36, Mt 26:45 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0082D | `*A Galilaea in Jordanem.*` | ✓ Mt 3:13 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0082D | `VERS. 15.-- *Sine modo.*` | ✓ Mt 3:15 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0082D | `*Tunc dimisit.*` | ✓ 1Rg 6:6, Mt 3:15, Mt 27:26 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0083A | `VERS. 16.-- *Baptizatus autem.*` | ✓ Mt 3:16 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0083A | `*Aperti sunt,*` | ✓ Apc 20:12, Dn 7:10, Ez 1:1, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0083B | `*Sicut columbam.*` | ✓ Mt 3:16 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0083D | `*Complacui.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0083D | `VERS. 1.-- *Tunc Jesus.*` | ✓ Mt 4:1, Mt 16:24, Mt 21:1, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0084A | `*Tunc Jesus ductus est,*` | ✓ Mt 4:1 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0084A | `*Spiritui*` | — single word, check in place | Mt 4:1 reads *ductus est … **a Spiritu***, ablative. Migne's lemma is the **dative** *Spiritui*, with only that word in italic and *Sancto* following in roman — confirmed on both witnesses. Rendered "*To the Spirit*, the Holy…", which keeps the printed case and the printed italic boundary. **Declined** as a marker: a case-ending is exactly what letter-level corruption manufactures, and nothing in the gloss argues from the case. |
| 0084A | `*Ut tentaretur a diabolo.*` | ✓ Mt 4:1 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0084A | `VERS. 2.-- *Et cum jejunasset. [n: (BEDA.)]*` | ✓ Mt 4:2 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0084B | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0084B | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0084B | `*Postea esuriit.*` | ✓ Mt 4:2 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0084B | `VERS. 3.-- *Et accedens.*` | ✓ 3Rg 20:28, Dt 2:19, Mc 1:31, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0084B | `*Si Filius [0084C] Dei es.*` | ✓ Lc 4:3, Lc 4:9, Mt 4:3, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0084C | `*Si Filius Dei es.*` | ✓ Lc 4:3, Lc 4:9, Mt 4:3, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0084D | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0084D | `VERS. 4.-- *Scriptum est.*` | ✓ 1Cor 1:19, 1Cor 1:31, 1Cor 2:9, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0084D | `*Non in solo pane vivit homo.*` | ✓ Lc 4:4, Mt 4:4 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0084D | `*Sed in omni verbo,*` | ✓ Dt 8:3, Lc 4:4, Mt 4:4 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0085A | `VERS. 5.-- *Tunc assumpsit.*` | ✓ Mt 4:5 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0085B | `*Supra pinnaculum. [n: (RAB.)]*` | ⚠ NOT in Clementine verbatim — CHECK | Mt 4:5 *super pinnaculum templi*. `supra`/`super` differ by one letter and are interchangeable; letter-level corruption could manufacture it. **Declined** per the single-word rule. |
| 0085B | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0085B | `*Si filius. [n: (BEDA.)]*` | ✓ Gal 4:7, Jr 31:20, Lc 4:3, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0085B | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0085B | `*Mitte.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0085C | `*Si persecuti vos fuerint in civitate ista, fugite in aliam.*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** Mt 10:23 reads *Cum autem persequentur vos in civitate ista, fugite in aliam*. A different construction, not letter-level. Both witnesses. |
| 0085C | `*Quia angelis suis mandavit de te. [n: (BEDA.)]*` | ✓ Mt 4:6 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0085C | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0085C | `VERS. 8.-- *Iterum assumpsit.*` | ✓ Mt 4:8 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0085D | `*Ostendit,*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0085D | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0085D | `VERS. 9.-- *Haec omnia tibi dabo.*` | ✓ Mt 4:9 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0086A | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0086A | `VERS. 10.-- *Scriptum est.*` | ✓ 1Cor 1:19, 1Cor 1:31, 1Cor 2:9, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0086A | `*Dominum Deum tuum.*` | ✓ 1Rg 12:19, 1Rg 15:30, 1Rg 25:29, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0086A | `*Non tentabis Dominum Deum tuum,*` | ✓ Dt 6:16, Lc 4:12, Mt 4:7 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0086B | `*Servies.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0086B | `*Eritis sicut dii.*` | ✓ Gn 3:5 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0086B | `*Scientes bonum et malum.*` | ✓ Gn 3:5 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0086B | `VERS. 11.-- *Accesserunt.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0086C | `VERS. 12.-- *Cum autem audisset. [n: (RAB.)]*` | ✓ 1Mcc 14:24, 2Rg 13:21, Mt 4:12 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0086C | `*usque ad, Hoc fecit initium signorum Jesus.*` | ⚠ NOT in Clementine verbatim — CHECK | Jo 2:11 verbatim, cut before *in Cana Galilaeae*. Agrees. |
| 0086C | `*Nondum Joannes missus erat in carcerem.*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** Jo 3:24 reads *Nondum **enim** missus **fuerat** Joannes in carcerem*. Word order, tense and a dropped particle. Both witnesses. |
| 0086C | `*Joannes,*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0086C | `*In Galilaeam.*` | ✓ 1Mcc 5:20, 1Mcc 5:21, 1Mcc 12:47, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0086D | `VERS. 13.-- *Nazareth. [n: (RAB.)]*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0086D | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0086D | `VERS. 15.-- *Terra Zabulon. [n: (ID.)]*` | ✓ Is 9:1, Mt 4:15 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0086D | `*Primo tempore alleviata est terra Zabulon et terra Nephtalim [n: (Isa. IX)]*` | ⚠ NOT in Clementine verbatim — CHECK | Is 9:1 verbatim except the name: Vulg *Nephthali*, Migne *Nephtalim* — which is Mt 4:15's own spelling, in a commentary on Mt 4:15. **Declined**: proper-name orthography, and the form is the host verse's. |
| 0086D | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0086D | `VERS. 16.-- *Populus. [n: (AUG.)]*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0087A | `*Habitantibus in regione.*` | ✓ Is 9:2 | **`[var:]` FIRED — and this one the pre-scan could not flag**, because it carries no `VERS.` address. Mt 4:16 reads *sedentibus in regione*; Migne prints *Habitantibus*. A wholly different participle, and the class 7a″ exists for. |
| 0087A | `*Umbrae mortis.*` | ✓ Is 9:2, Mt 4:16, Ps 22:4 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0087A | `VERS. 17.-- *Exinde.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0087A | `*Exinde,*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0087A | `*Si cui revelatum fuerit, prior taceat.*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** 1Cor 14:30 reads *Quod si **alii** revelatum fuerit **sedenti**, prior taceat*. Both witnesses. |
| 0087A | `*Poenitentiam agite.*` | ✓ Mt 3:2, Mt 4:17 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0087B | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0087C | `VERS. 18.-- *Qui vocatur Petrus.*` | ✓ Mt 4:18 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0087C | `*Tu vocaberis Cephas [n: (Joan. I)]*` | ✓ Jo 1:42 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0087C | `*Petrus:*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0087C | `*Tu es Christus Filius Dei vivi,*` | ✓ Jo 11:27, Mt 16:16 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0087C | `*Tu es Petrus et super hanc petram aedificabo Ecclesiam meam [n: (Matth. XVI)]*` | ✓ Mt 16:18 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0087C | `*agnoscens:*` | — single word, check in place | Not scripture — a name etymology (Peter). Rendered "*acknowledging*". |
| 0087C | `*virilis:*` | — single word, check in place | Not scripture — a name etymology (Andrew). Rendered "*manly*". |
| 0087C | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0087C | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0087D | `*Mittentes rete.*` | ✓ Mt 4:18 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0087D | `*Venite post me, et faciam vos fieri piscatores hominum [n: (Joan. I)]*` | ✓ Mc 1:17, Mt 4:19 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0087D | `VERS. 19.-- *Piscatores.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0087D | `VERS. 20.-- *Continuo.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0088A | `VERS. 21.-- *Vidit alios duos.*` | ✓ Mt 4:21 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0088A | `*Quos vocavit [n: (Rom. VIII)]*` | ✓ Rom 8:30 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0088A | `*Multi sunt vocati [n: (Matth. X)]*` | ⚠ NOT in Clementine verbatim — CHECK | Mt 22:14 *Multi **enim** sunt vocati*, cut at the particle. Agrees. ⚑ Migne's own citation *(Matth. X)* is wrong; it passes through verbatim under the sigla rule. |
| 0088A | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0088B | `*Zebedaei et Joannem.*` | ✓ Mc 1:19, Mc 3:17, Mt 4:21 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0088B | `*Et vocavit eos. Illi autem,*` | ⚠ NOT in Clementine verbatim — CHECK | Mt 4:21–22 verbatim, but it **crosses a verse boundary**, which is exactly why the per-verse scan could not tick it. Agrees. |
| 0088B | `VERS. 23.-- *Et circumibat Jesus totam Galilaeam.*` | ⚠ NOT in Clementine verbatim — CHECK | Mt 4:23 *Et **circuibat***. One inserted letter, and *circumire*/*circuire* are the same verb. **Declined** per the single-word rule. |
| 0088B | `*Docens in synagogis.*` | ✓ Mt 4:23, Mt 9:35 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0088C | `*In synagogis.*` | ✓ Act 9:20, Act 13:5, Act 15:21, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0088C | `*Evangelium.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0088C | `*Et sanans.*` | ✓ Mt 4:23 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0088C | `VERS. 24.-- *Et abiit opinio. [n: (BEDA.)]*` | ✓ Mt 4:24 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0088D | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0088D | `VERS. 25.-- *Secutae sunt. [n: (AUG.)]*` | ✓ Gn 24:61, Lc 9:11, Mt 4:25, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0088D | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0088D | `VERS. 1.-- *Videns autem Jesus. [n: (AUG.)]*` | ✓ Lc 18:24, Mt 5:1, Mt 8:18 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0088D | `*Factum est autem in illis diebus, exiit in montem orare [n: (Luc. VI)]*` | ✓ Lc 6:12 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0088D | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0089A | `*Ascendit.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0089A | `*Sedisset.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0089A | `*Et mundus eum non cognovit,*` | ✓ Jo 1:10 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0089A | `*Accesserunt.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0089B | `VERS. 2.-- *Et aperiens.*` | ✓ Dn 10:16, Gn 8:13, Mt 5:2, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0089B | `*usque ad, Omnis qui audit verba mea haec et faciat, assimilabo eum viro sapienti [n: (Matth. VII)]*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** Mt 7:24 reads *Omnis **ergo** qui audit verba mea haec, et **facit ea, assimilabitur** viro sapienti*. Migne turns the passive future into a first-person *assimilabo eum*. ⚑ Also note the `usque ad` here is the abridgment formula and the whole verse rides inside one italic span — the case the `etc.` splice test was written for. |
| 0089B | `VERS. 3.-- *Beati. [n: (GREG. NYSS.)]*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0089B | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0089C | `*Beati pauperes.*` | ✓ Lc 6:20, Mt 5:3 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0089C | `*[n: (HIER.)] Beati pauperes spiritu.*` | ✓ Mt 5:3 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0089C | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0089C | `VERS. 4.-- *Beati mites.*` | ✓ Mt 5:4 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0089D | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0089D | `*Possidebunt terram. [n: (AUG.)]*` | ✓ Mt 5:4 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0089D | `*Spes mea es tu, portio mea in terra viventium [n: (Psal. CLXI)]*` | ⚠ NOT in Clementine verbatim — CHECK | Ps 141:6 *Tu es spes mea, portio mea in terra viventium*. Word order only, inside an AUG. citation. **Declined** — no sense turns on it. ⚑ Migne's *(Psal. CLXI)* is his own error for CXLI; both witnesses print CLXI, so it rides. |
| 0089D | `VERS. 5.-- *Beati qui lugent.*` | ✓ Mt 5:5 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0090A | `*Beati qui lugent.*` | ✓ Mt 5:5 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0090A | `VERS. 6.-- *Beati qui esuriunt.*` | ✓ Mt 5:6 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0090B | `VERS. 7.-- *Beati misericordes.*` | ✓ Mt 5:7 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0090C | `*Estote misericordes sicut et Pater vester misericors est [n: (Luc. VI)]*` | ⚠ NOT in Clementine verbatim — CHECK | Lc 6:36 *Estote **ergo** misericordes…*, cut at the particle. Agrees. |
| 0090C | `VERS. 9.-- *Beati pacifici. [n: (RAB.)]*` | ✓ Mt 5:9 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0090C | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0090C | `VERS. 10.-- *Beati qui persecutionem.*` | ✓ Mt 5:10 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0090D | `VERS. 11.-- *Beati estis cum maledixerint.*` | ✓ Mt 5:11 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0090D | `*Vos estis sal terrae, vos estis lux mundi;*` | ⚠ NOT in Clementine verbatim — CHECK | Mt 5:13 + Mt 5:14 joined into one clause. **Not a wording divergence** — Migne is conflating two verses, and the per-verse scan is why it shows ⚠. Declined. |
| 0090D | `*Maledixerint.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0090D | `*Cum oderint vos homines, et dixerint omne malum, et expulerint.*` | ⚠ NOT in Clementine verbatim — CHECK | ⛔ **Declined on principle.** Migne introduces this with *Antiqua translatio habet* — he is quoting an Old Latin reading and says so. Pattern 14 records a divergence from the received text; it does not mark a citation the author labels as another version. |
| 0091A | `*Mentientes.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0091A | `*Propter me,*` | ✓ 1Rg 23:10, 4Rg 19:34, 4Rg 20:6, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0091A | `VERS. 12.-- *Quoniam merces vestra copiosa est in coelis.*` | ✓ Mt 5:12 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0091B | `*Sic enim persecuti,*` | ✓ Mt 5:12 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0091B | `VERS. 13.-- *Vos estis sal terrae.*` | ✓ Mt 5:13 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0091B | `*Posui te in lucem gentium, ut sis salus mea usque ad extrema terrae.*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** A conflation: *Posui* and the frame are Act 13:47, *salus mea* is Is 49:6, and *extrema terrae* is neither (both read *extremum terrae*). Both witnesses. ⚑ The `usque ad` here is **the verse's own words**, not the formula — rendered "unto the ends of the earth". |
| 0091B | `*Quod si sal,*` | ✓ Mc 9:49, Mt 5:13 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0091C | `*Hic homo coepit aedificare, et non potuit consummare. Si sal evanuerit [n: (Luc. IV)]*` | ⚠ NOT in Clementine verbatim — CHECK | Two fragments in one span: Lc 14:30 cut before *Quia*, Lc 14:34 cut before *autem*. Both agree. ⚑ *(Luc. IV)* is Migne's error for XIV; it rides. |
| 0091C | `*Ad nihilum valet ultra,*` | ✓ Mt 5:13 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0091C | `*Nisi abundaverit justitia,*` | ✓ Mt 5:20 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0091C | `*Et conculcetur ab hominibus.*` | ✓ Mt 5:13 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0091D | `VERS. 14.-- *Vos estis lux mundi.*` | ✓ Mt 5:14 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0091D | `*Lux mundi.*` | ✓ Jo 8:12, Mt 5:14 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0091D | `*Non potest civitas,*` | ✓ Mt 5:14 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0091D | `*Supra montem.*` | ✓ 1Rg 17:3, Apc 14:1, Mt 5:14 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0092A | `VERS. 15.-- *Neque accendunt lucernam.*` | ⚠ NOT in Clementine verbatim — CHECK | ⚠ **The comparand is what diverges here, not Migne.** `sources/vulgate/clementine-flat.txt` AND `sources/vulgate/clementine/Mt.lat` both read `accedunt` at Mt 5:15; Migne and our twin read `accendunt`, which is the standard text. No marker, and the on-disk Clementine should not be trusted at this verse. |
| 0092A | `*Castigo corpus meum,*` | ✓ 1Cor 9:27 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0092B | `*Sic luceat,*` | ✓ Mt 5:16 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0092B | `*Candelabrum.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0092B | `VERS. 16.-- *Sic luceat,*` | ✓ Mt 5:16 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0092B | `*Ut videant,*` | ✓ 4Rg 6:20, Dn 12:2, Is 41:20, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0092B | `VERS. 17.-- *Nolite putare.*` | ✓ Jo 5:45, Mt 5:17 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0092C | `*Non veni solvere legem, sed adimplere,*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** Mt 5:17 reads *non veni solvere, sed adimplere* — no object in the second clause. Migne supplies *legem*, and does so **twice** (again at 0094C), which is its own witness. |
| 0092C | `VERS. 18.-- *Iota. [n: (BEDA.)]*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0092C | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0092C | `*Omnia fiant.*` | ✓ Lc 21:32, Mt 5:18 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0092D | `VERS. 19.-- *Qui ergo solverit,*` | ✓ Mt 5:19 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0092D | `*Minimus vocabitur,*` | ✓ Mt 5:19 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0093A | `*Qui autem fecerit.*` | ✓ 1Mcc 14:45, Mt 5:19 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0093A | `*Soli enim factores legis justi sunt apud Deum [n: (Rom. II)]*` | ⚠ NOT in Clementine verbatim — CHECK | **`[var:]` FIRED.** Rom 2:13 reads *Non enim **auditores** legis justi sunt apud Deum, **sed factores legis justificabuntur***. Migne collapses the antithesis into a single affirmative with *Soli*. The gloss rests on it ("sed facit quod docet"). |
| 0093A | `VERS. 20.-- *Dico autem vobis.*` | ⚑ MATCHES ONLY ELSEWHERE — Lc 9:27, Lc 12:4, Lc 12:8, …  (lemma is Mt 5) — CHECK | **⚑ ADJUDICATED — `[var:]` FIRED.** Mt 5:20 reads *Dico **enim** vobis*. Both witnesses. See §d. |
| 0093A | `*Nisi,*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0093B | `*Justitia vestra.*` | ✓ Mt 5:20 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0093B | `VERS. 21.-- *Audistis,*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0093B | `VERS. 22.-- *Ego autem,*` | ✓ 1Cor 1:12, 1Cor 7:28, 1Cor 9:15, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0093B | `*Omnis qui irascitur.*` | ✓ Mt 5:22 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0093C | `VERS. 23.-- *Si ergo offers munus tuum.*` | ✓ Mt 5:23 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0093C | `*Si ergo offers.*` | ✓ Mt 5:23 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0093C | `*Et ibi,*` | ✓ 1Rg 7:17, 3Rg 17:4, Act 9:7, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0093D | `VERS. 24.-- *Relinque ibi,*` | ✓ Mt 5:24 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0093D | `*Vade.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0093D | `*Offeres.*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0094A | `VERS. 25.-- *Esto consentiens.*` | ✓ Mt 5:25 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0094A | `*Si fieri potest quod ex vobis est cum omnibus hominibus pacem habentes [n: (Rom. XII)]*` | ✓ Rom 12:18 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0094A | `*Cito,*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0094A | `*Dum es in via,*` | ✓ Mt 5:25 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0094A | `*In via cum eo.*` | ✓ Mt 5:25 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0094B | `*Viam mandatorum tuorum cucurri, cum dilatasti cor meum [n: (Psal. CXVIII)]*` | ✓ Ps 118:32 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0094B | `*Ne forte tradat.*` | ✓ Mt 5:25 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0094B | `*Tradat,*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0094B | `VERS. 26.-- *Novissimum quadrantem.*` | ✓ Mt 5:26 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0094C | `VERS. 27.-- *Audistis. [n: (RAB.)]*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0094C | `*Non veni solvere legem, sed adimplere [n: (Marc. XI)]*` | ⚠ NOT in Clementine verbatim — CHECK | The same divergence as 0092C, re-quoted inside a RAB. tail. Marked once, at its first occurrence. ⚑ *(Marc. XI)* is Migne's own citation for Mt 5:17 and rides verbatim; confirmed on both witnesses. |
| 0094C | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0094C | `*Viderit mulierem. [n: (BEDA.)]*` | ✓ Mt 5:28 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0094C | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0094C | `*Ad concupiscendum.*` | ✓ Mt 5:28 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0094D | `VERS. 29.-- *Erue eum.*` | ✓ Mt 5:29, Mt 18:9 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0095A | `VERS. 30.-- *Dextera manus tua.*` | ⚠ NOT in Clementine verbatim — CHECK | Mt 5:30 *Et si **dextra** manus tua*. One inserted letter, same word. **Declined** per the single-word rule. |
| 0095A | `*Abscinde eam,*` | ⚠ NOT in Clementine verbatim — CHECK | Mt 5:30 *absc**i**de eam*. **Declined**, and this is the closest call in the range: *abscindere* and *abscidere* are different verbs, but they differ by one inserted letter, are constantly interchanged in the Vulgate tradition, and **the gloss argues from neither** — it uses a third verb, *resecetur*. Under launch-brief §2 a single-word `[var:]` needs a witness of its own and this has none. |
| 0095A | `*In gehennam.*` | ✓ Lc 12:5, Mc 9:42, Mc 9:44, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0095B | `VERS. 31.-- *Det illi. [n: (AUG.)]*` | ⚑ MATCHES ONLY ELSEWHERE — 2Tim 1:18  (lemma is Mt 5) — CHECK | **⚑ ADJUDICATED — `[var:]` FIRED.** Mt 5:31 reads *det **ei** libellum repudii*. Both witnesses. See §d. |
| 0095B | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0095C | `*usque ad*` | ✓ 1Cor 16:8, 1Mcc 1:3, 1Mcc 2:38, … | Abridgment formula, not a lemma — rendered "as far as". |
| 0095C | `VERS. 32.-- *Causa fornicationis.*` | ⚠ NOT in Clementine verbatim — CHECK | Mt 5:32 *excepta **fornicationis causa***. Migne prints the words in both orders in the same column — *Causa fornicationis* here and *Fornicationis causa* eight lines later, the second matching the Vulgate. English cannot carry the difference and both render "By reason of fornication". Declined; recorded because the facing Latin column shows what the English cannot. |
| 0095C | `*Fornicationis causa.*` | ✓ Mt 5:32 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0095D | `*Et qui,*` | ✓ 1Cor 3:8, 1Cor 7:29, 1Cor 7:30, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0095D | `VERS. 33.-- *Reddes autem.*` | ✓ Mt 5:33 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0095D | `*Ego autem,*` | ✓ 1Cor 1:12, 1Cor 7:28, 1Cor 9:15, … | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0096A | `*Per coelum.*` | ✓ Jac 5:12, Mt 5:34 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0096A | `*Neque per terram.*` | ✓ Jac 5:12, Mt 5:35 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0096A | `*Non est potestas nisi a Deo [n: (Rom. XIII)]*` | ⚠ NOT in Clementine verbatim — CHECK | Rom 13:1 *Non est **enim** potestas nisi a Deo*, cut at the particle. Agrees. |
| 0096B | `*Neque,*` | — single word, check in place | Single word, checked in place against the verse it opens; agrees as printed. |
| 0096B | `VERS. 36.-- *Quia non potes,*` | ✓ Apc 2:2, Mt 5:36 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
| 0096B | `VERS. 37.-- *Est, est; non, non.*` | ✓ Jac 5:12, Mt 5:37 | Checked against the reference(s) printed in the brief; agrees with the Vulgate as printed. |
**Tally: 241 spans. 13 `[var:]` fired · 21 divergences examined and declined with reasons ·
207 checked and found to agree as printed.**

---

## (d) This range's cruces, by column

### ⚑ THE THREE `MATCHES ONLY ELSEWHERE` CANDIDATES — each adjudicated, with the losers named

The launch brief §3 lists three of its eight live candidates in this range and requires me to say
which of three explanations each is — a real divergence, a harmony parallel Migne has reached for,
or our own file's corruption — **and why the other two lost.**

#### 1. @0080B `VERS. 8.-- Facite ergo fructus dignos.` (matched only Lc 3:8; the lemma is Mt 3)

**It is a real divergence, and the plural is the Lucan form. `[var:]` fired.**

- *Our file's corruption loses first, and decisively.* **Both witnesses print `fructus dignos`** —
  archive p.45 and Gallica f40, at 300 dpi and native resolution respectively, in the italic lemma
  immediately after `VERS. 8. —`. There is nothing for the digitization to have done.
- *"Harmony parallel Migne reached for" and "real divergence" are not rivals here, and the second
  is what the apparatus records.* Mt 3:8 reads *Facite ergo **fructum dignum** poenitentiae*, Lc 3:8
  *fructus dignos poenitentiae*. Migne prints the plural under a Mt 3 address, so the lemma diverges
  from the verse it addresses — which is precisely what Pattern 14 marks. Whether the plural got
  there because a compositor's eye slipped to Luke, or because the glossator's copy of Matthew read
  so, is a transmission question, and Pattern 14 forbids speculating about it in the marker. The
  marker therefore states both readings and names Luke as the place the plural is found, without
  asserting a route.
- ⭐ **The internal evidence pushes the same way and is worth recording**: the work's own prose uses
  the plural twice more in the same two columns, outside any lemma — @0079B *Poenitentiam agere est
  **dignos fructus** poenitentiae facere*, and @0081B *Et si moneo **dignos fructus** poenitentiae
  facere*. Migne's Matthew glossator says the phrase in the plural as a matter of course. That is
  corroboration, not proof of ownership, and the plates are what settled it.

#### 2. @0093A `VERS. 20.-- Dico autem vobis.` (matched only Lc 9:27, Lc 12:4, Lc 12:8 …; lemma is Mt 5)

**It is a real divergence in a single connective. `[var:]` fired.**

- *Our file's corruption loses.* **Both witnesses print `Dico autem vobis`** — archive p.52,
  Gallica f47, in the italic lemma after `VERS. 20. —`.
- *Harmony parallel loses, and this is the one where the pre-scan's own list is misleading.* The
  Lucan verses it matched (Lc 9:27, 12:4, 12:8) are **not parallels of Mt 5:20 at all** — they are
  simply other places in the corpus where the three words *dico autem vobis* happen to stand
  together. There is no Lucan verse corresponding to Mt 5:20's *nisi abundaverit justitia vestra*;
  Luke has no Sermon-on-the-Mount antithesis here. So nothing was reached for.
- *Real divergence wins.* Mt 5:20 reads *Dico **enim** vobis*. The lemma is unmistakably Mt 5:20:
  the very next lemma in the gloss is `*Nisi,* etc.` and the one after it `*Justitia vestra*`, which
  are that verse's own following words. **And it passes the single-word test's second limb**:
  *autem* cannot be manufactured out of *enim* by a broken sort — they share no letter in any
  position. So the marker stands on the form, not on my confidence.

#### 3. @0095B `VERS. 31.-- Det illi.` (matched only 2Tim 1:18; the lemma is Mt 5)

**It is a real divergence in the pronoun. `[var:]` fired.**

- *Our file's corruption loses.* **Both witnesses print `Det illi.`** — archive p.53, Gallica f48.
  (The archive appears to drop the final period; Gallica has it, as our twin does. The period is
  archive ink, and that is in the plate ledger, not here.)
- *Harmony parallel loses, and here the pre-scan's single match is a coincidence rather than a
  parallel.* 2 Tim 1:18 is *det illi Dominus invenire misericordiam* — Paul on Onesiphorus. It has
  no relation whatever to the bill of divorce, it is not in a gospel, and Migne could not be
  "reaching for" it: the gloss underneath is entirely about Deuteronomy's *libellus repudii* and
  Moses' permission. Two words coinciding is not a citation.
- *Real divergence wins.* Mt 5:31 reads *det **ei** libellum repudii*. *illi* for *ei* is a
  different pronoun, not a letter-level slip, so it clears the single-word bar.

### The rest of the range's cruces, by column

**@0079B — Migne's sentence has no verb, and both plates agree.** The plate prints
*qui vere poenitet, in se praeteritos errores, deinde erigit animum ad coeleste regnum* — there is
**no verb governing *in se praeteritos errores***, and the sense wants one (*damnat*, *plangit*,
*condemnat*). Read on archive p.45 and Gallica f40, at the same line and with the same wording on
both. ⛔ Nothing is supplied: the English reads "he who truly repents, in himself his past errors,
then lifts up his mind to the heavenly kingdom", which is as broken as the Latin. No marker is
available — nothing here is a non-word, so `[sic:]` cannot reach it, and the missing word is not a
printed word that misleads, so `[cj:]` cannot either. This is what Pattern 7 asks for and it is
logged here because a blind reader will stop at it.

**@0084A — the lemma is in the wrong case, and the italic boundary proves it is the lemma.**
Migne prints ***Spiritui*** Sancto (italic on the first word only, roman on *Sancto*), glossing
Mt 4:1's ablative *ductus est … a Spiritu*. Confirmed on both witnesses. Rendered
"*To the Spirit*, the Holy, who sends strong to the battle those whom he fills" — the dative kept,
the italic boundary kept where Migne set it. No marker: a case-ending is the one thing letter-level
corruption manufactures most easily, and nothing in the gloss turns on the case.

**@0087B — *in Jordane organo*, where the argument wants *in Joanne*.** Migne prints
*Christus enim verbum quod clamat **in Jordane** organo et in omnibus qui ab initio aliquid
divinitus dixerunt*. The whole paragraph is the voice/word argument about **John** (*Joannes vox,
Christus verbum, qui clamat in Joanne* at 0079C says it in those words), and *organo* — "by his
instrument" — has no antecedent under *Jordane*. **Both witnesses print `Jordane`**, at normal
spacing, so this is Migne's, not ours. Rendered as printed: "which cries in the Jordan by his
instrument". Logged, not marked: *Jordane* is a real, well-formed word in a construction that
parses, so `[sic:]` is closed to it and `[cj:]` would be a conjecture with no plate behind it.

**@0090D — our twin's `maledieta`, and the plates' `maledicta`.** The only confirmed defect in the
range and it is the digitization's. The English renders the plate ("since revilings come from
hatred of the heart"); patch filed. No `[sic:]`: the marker would accuse Migne of an error he did
not make, and would in any case be quoting a word about to disappear from our Latin.

**@0094B — Migne contradicts himself two clauses apart, on both witnesses.** He prints
*Sic temperavit, ut poenitentiae locum **non** afferret* and then, four lines later,
*Sed et locum poenitentiae reliquit*. Carried as printed — "He so tempered it, that it should not
bring in a place of repentance… But he both left a place of repentance" — because 7a is explicit
that a printed negation rides **including when carrying it makes the sentence contradict itself**,
and that is exactly what this edition exists to show. `afferret` (not `afferet`) confirmed at
Gallica f47 after the archive suggested the shorter form.

**@0094B — *Christus ministro* has no verb.** *Christus ministro, id est angelo, qui colliget
zizania* — the verb (*tradit*, carried over from *Judex tradat te ministro* in the sentence before)
is unexpressed. Rendered "Christ to the officer, that is, to the angel, who shall gather the
cockle." Nothing supplied.

**@0090A — an unexpressed antecedent, named here because two readings construe.** *Pro suis vel
aliorum peccatis, **qui** est ab irriguo inferiori* — the masculine relative has no expressed
antecedent in its own sentence. I take it as *luctus*, "mourning", which the gloss supplies
explicitly six lines later (*Luctus pro peccatis vel pro desiderio coelesti consolationem
meretur*), and rendered "which mourning is from the lower watering". The rival is *qui* = "he who
[mourns]", which also construes; it loses because the following *sed **qui** fit ab irriguo
superiori **est** ex desiderio* has a neuter/abstract predicate that only *luctus* takes.

**@0093D — *offeres*, and why the English follows our twin and not the archive.** The archive prints
*si praesens est, **offeres**. Hoc ex spiritu* — a comma and a lower-case lemma, which would make
*offeres* the tail of the previous sentence rather than the lemma of the next. **Gallica prints
*est. Offeres.*, exactly as our twin has it**, and the archive's comma is a broken period. Recorded
because it is the one refuted candidate in this range that would have changed the English.

**@0093D — *ei prosternas* with the reflexive unexpressed.** *Non pedibus, sed animo humiliter ei
prosternas* — *prosternas* is transitive and its object (*te*) is not printed. Rendered "mayest thou
humbly prostrate thyself before him"; the reflexive is English grammar, not a supplied Latin word.

**@0094A — *pro consentiens ex Graeco habetur benignus vel benevolus*.** Migne discusses three
words as words, none of them italicised on the plate. Rendered with our own quotation marks
(Pattern 6: `« »` is Migne's, `" "` is ours) rather than by adding italic spans the Latin does not
carry, so that the span inventory stays 1:1.

**@0093A — *sed facit quod docet* where the sense wants *nisi*.** *Qui non solverit, et sic docet,
non minimus, non tamen magnus: **sed** facit quod docet.* Carried as "but he does what he teaches";
the connective is Migne's and Pattern 7's third mechanism (a smoothed connective) is exactly what
changing it would be.

**@0096A — one `Non` governing two purpose clauses, and no second negative supplied.**
*Non juremus per creaturas ut veneremur eas ultra quam debemus per eas, ut viles existimemus…* An
English ear wants "nor by them so as to esteem them cheap"; Migne prints no *nec*. Both `ut`
clauses are left under the single printed *Non*.

**Migne's own citations, all confirmed on both witnesses and all riding verbatim** — they are his,
not ours, and correcting one would be an emendation: `(Matth. X)` for Mt 22:14 @0088A;
`(Psal. CLXI)` for Ps 141:6 @0089D; `(Luc. IV)` for Lc 14:34 @0091C; `(Marc. XI)` for Mt 5:17
@0094C; `(Joan. I)` for Mt 4:19 @0087D.

**Verse addresses.** The sequence in this range runs 1–13, 15, 16, 18–21, 23–27, 29–33, 36, 37 —
i.e. it skips 14, 17, 22, 28, 34, 35, and 6–7 fall inside CAPUT IV as 6 and 8. **Nothing is
reordered and nothing is touched.** Per the withdrawn-verse-address rule I checked no number
against the plate as a target and altered none.

---

## (e) Declined-oddity list — every suspect word I did NOT mark, in one place

⚑ **Twenty-one of these were raised from the archive copy and killed by Gallica.** They are listed
in full in `data/briefs/9002-PENDING-TEI-PATCHES-0006.md` under "NOT patches" rather than repeated
here; the summary is that the archive copy of pp. 45–53 is over-inked badly enough to manufacture
turned letters in both directions, lost letters, and false word-splits, and that **it lost 20 of 21
to the second witness.** What follows is the list of oddities that survive *after* the plates —
things that are really on Migne's page and that I chose not to mark.

| col | printed | why it looked wrong | why no marker |
|---|---|---|---|
| 0079B | *qui vere poenitet, in se praeteritos errores, deinde erigit* | no verb for *praeteritos errores* | §d. Nothing is a non-word; no marker class reaches it |
| 0084A | *Spiritui* Sancto | dative lemma for Mt 4:1's ablative | case-ending; letter-level; gloss does not argue from it |
| 0087B | *in Jordane organo* | the argument is about *Joanne* | real well-formed word, both plates; `[cj:]` would rest on no witness |
| 0088B | *circumibat* | Vulg *circuibat* | one inserted letter, same verb |
| 0089D | *(Psal. CLXI)* | Ps 141 is CXLI | Migne's own citation; both plates; rides verbatim |
| 0090D–0091A | *Vos estis sal terrae, vos estis lux mundi;* | two verses joined | conflation, not a wording divergence |
| 0091C | *(Luc. IV)* | Lc 14:34 is XIV | Migne's own; rides |
| 0092A | *accendunt* | flagged ⚠ by the pre-scan | **the on-disk Clementine is what is wrong here** (it reads *accedunt*); Migne is right |
| 0092C | *Iota* | Vulg *jota* | i/j orthography |
| 0093A | *sed facit quod docet* | sense wants *nisi* | connective; Pattern 7 mechanism 3 |
| 0094B | *ut poenitentiae locum non afferret* | contradicts the next clause | 7a: a printed negation rides even into a contradiction |
| 0094B | *Christus ministro* | no verb | ellipsis; nothing supplied |
| 0094C | *(Marc. XI)* | Mt 5:17 | Migne's own; both plates |
| 0095A | *Dextera* | Vulg *dextra* | one inserted letter |
| 0095A | *Abscinde* | Vulg *abscide* | one inserted letter; gloss uses a third verb (*resecetur*) |
| 0095C | *Causa fornicationis* / *Fornicationis causa* | the same words in two orders eight lines apart | English cannot carry the difference; both render alike; the Latin column shows it |
| 0082B | *Inexstinguibili* | Vulg *inextinguibili* | one inserted letter; both plates print the *s* |
| 0085B | *Supra pinnaculum* | Vulg *super pinnaculum* | one letter; interchangeable preposition |
| 0086D | *Nephtalim* | Is 9:1 has *Nephthali* | it is Mt 4:15's own spelling, in a commentary on Mt 4:15 |

⭐ **And the negatives worth recording, because a checked zero is a result.** Three things I went
looking for in this range and did not find: (i) **no `[sic:]` is fireable anywhere in 0079A–0096B** —
twenty-one attempts, twenty refuted at the second witness and the twenty-first belonging to Corpus
Corporum; (ii) **no anchor is displaced by more than two lines** — all 70 column anchors in the range were
checked against the word they stand beside on the plate, and against Migne's marginal band letter
wherever the margin was legible in the render; the largest divergence is a two-line drift at
`[0083D]`, `[0087B]` and `[0091C]`, and the systematic one is that Corpus Corporum sets the `<pb>`
*after* a word broken across the column break where Migne's column begins with its second half
(`bapti-|zando` at 0079A, `praedicatio-|nem` at 0082A, `nesci-|vit` at 0083A, `bapti-|zatos` at
0084A, `su-|perbiam` at 0086A). That is the granularity at which the digitization places an anchor,
not a defect, and it is uniform across the range; (iii) **no `Forte` or foot-of-page conjecture
appears on any of the nine leaves** — the bottoms of pp. 45–53 and f40–f48 carry no apparatus layer
at all, numbered or asterisked, which is consistent with PL 114's recorded sample and is recorded
here as a checked zero for these nine pages.

⚠ **One bookkeeping note for the orchestrator, not a crux:** chunk 0010's frontmatter declares
`noteCount: 16` and the chunk body carries **17** `[n: …]` markers. The frontmatter is copied
verbatim into the English as the brief requires, and the marker sequence itself is 17:17 across the
pair, so nothing is wrong with the text — but the declared count is off by one and something
upstream generated it.
