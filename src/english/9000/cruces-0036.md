# Cruces — 9000, *Glossa ordinaria*, **Evangelium secundum Lucam**, chunks 0036–0040

Stint 8 of eight: cols **0340C–0356A**, the passion and resurrection (capita XXII–XXIV) and the
end of the work. 5,866 Latin words, five chunks, 159 italic spans.

---

## (a) THE POLICY I APPLIED — stated before the findings, so it can be argued with

1. **No `[sic:]`, anywhere, for any reason.** This is the launch brief's §2 finding from John,
   and I treated it as absolute. Every suspect word in this range — a real word reading oddly,
   a non-word, a case or number that will not agree — is **rendered as printed, logged in §(e),
   and left unmarked**. I do not know whether any of them is Migne's type or Corpus Corporum's
   transcription of it, and I say so site by site rather than once in a preamble. My attribution
   guess carries no evidential weight and I have not offered one.
2. **No `[cj:]` either.** Pattern 18's bar is that the printed word makes the sentence assert
   something the author is arguing *against*. Four sites in this range are strong conjecture
   candidates (§e.2 *Galliaeus*, §e.10 *ibi* for *ubi*, §e.13 *cum parte potestatis*, §e.16
   *teruisse*) and **none** of them inverts a negation, a correlative or a claim: each leaves the
   sentence obscure, not false. All four are declined, with the conjecture named in §(e), which
   is where 18a says an uncertain reading belongs.
3. **`[var:]` is the one marker I fire, twice, and only where different MATTER stands in a quoted
   clause and a reader would take away something the Vulgate does not say.** Both rest on
   `sources/vulgate/clementine-flat.txt`, cited book chapter:verse, and both sit on a **clause**,
   not a word — the class standing 88 of 88 across three Glossa gospels.
   **Declined, explicitly and as a class:** every **one-word** substitution (*novit*/*cognovit*,
   *ad dexteram*/*a dextris*, *super*/*supra* class, *enim* dropped, *ergo* dropped); every
   **word-order-only** divergence (Rom 10:4, 2 Cor 5:16, Lk 24:24); every **truncation or
   abridgment cut** (1 Pet 2:21 loses *vobis relinquens exemplum*; the many lemmata cut mid-verse);
   every **orthographic** difference (*Hierusalem*/*Jerusalem*, *Syndone*/*sindone*,
   *coel-*/*cael-*); and every **grammatical adaptation of a quotation into the gloss's own
   syntax** (Jn 5:46 recast into the third person). A one-word `[var:]` on an unread column is
   the trap 9003's collation exposed, where the digitization *manufactured* the divergence a
   collation then dutifully found.
4. **Migne's wrong citation ADDRESSES take no marker and no correction.** Five notes in this range
   point at the wrong book, chapter or verse — `(Luc. XX)` on John 14:30, `(Joan. VIII)` on John
   5:46, `(Matth. XXVIII)` on Matt 18:20, `(Rom. XVIII)` on Rom 4:25, `(I Tim. III)` on 2 Tim
   3:12. `[n:]` contents are reproduced verbatim and untranslated; they are logged in §(e) as
   addresses, not as text defects.
5. **The inherited axes (brief §1) were applied from the first line, not reconciled afterwards**,
   and are censused in §(d).1. One prose exception to *usque ad* → "as far as" is declared there,
   with the Latin that forced it.
6. **The end-of-work anchor sequence is NOT reported as a defect.** Chunk 0040 runs `0354C`,
   `0354D`, `0355A`, `0356A`. Per the brief's §6.2, read at the plate this session: p. 183 divides
   **full-width and horizontally** — Luke's ending fills the top band of both columns (355A and
   356A), then a rule and the `EVANGELIUM SECUNDUM JOANNEM` title span the page, then John fills
   both columns below, so **355B sits below 356A on the paper**. Nothing is missing between 0355A
   and 0356A; no anchor was touched.

---

## (b) SPAN COUNT — 159 counted against 159 in the brief

I counted the `*…*` spans in my own Latin with the inventory script's own rule (pairs of
asterisks, per line, frontmatter stripped):

| chunk | spans |
|---|---|
| 0036 | 42 |
| 0037 | 39 |
| 0038 | 26 |
| 0039 | 43 |
| 0040 | 9 |
| **total** | **159** |

`data/briefs/9000-lemmata-0036.txt` states **159**. **They agree exactly**, and no line of the
Latin carries an odd number of asterisks (unclosed-span check: 0).

⚑ **But re-running the pre-scan per verse rather than against the whole file changed two marks,
and the mechanism is worth recording.** `lemma-inventory.mjs` normalises the entire Clementine
into **one string** and searches that, so a span can score ✓ by matching **across a verse
boundary**. Two spans in my range are ✓ in the brief and match no single verse:

- **[0340D] *Orabat dicens.*** — Lc 22:41 ends *positis genibus orabat,* and 22:42 opens
  *dicens : Pater, si vis*. The ✓ is the join of the two lines.
- **[0353A] *Spiritum videre. Et dixit eis.*** — Lc 24:37 ends *existimabant se spiritum videre*
  and 24:38 opens *Et dixit eis*. Same join.

**Both are innocent**: they are the recension's own splice of two consecutive verses it expounds
together, which is exactly what it does elsewhere with `etc.` So this is not a divergence — but
it is a **third way a ✓ can mean nothing**, alongside the two the brief already names (matching
some other verse, and the prefix bug fixed on 2026-09-03). Worth a line in the script's comments.

---

## (c) THE LEMMA DIVERGENCE LIST — all 159 spans, in order, with the reason for every decline

Verdicts: **AGREES** = the exact word sequence stands in the verse being glossed (per-verse
anchored search, not the whole-file test). **DIVERGES** = it does not, with the reason it took no
marker. Verse addresses are mine, from `clementine-flat.txt`; Migne's own `[n:]` addresses are
reproduced in the text verbatim and are not corrected.

### Chunk 0036 — cols 0340C–0343D (Luke 22:40–71) — 42 spans

1. [0340C] *Orate.* — AGREES Lc 22:40.
2. [0340C] *ne intretis in tentationem. Orate,* — **DIVERGES, splice — DECLINED.** Lc 22:40 reads
   *Orate ne intretis in tentationem*; the recension has just quoted *Orate* as the lemma and
   re-quotes the rest with *Orate,* trailing, to run into *id est*. Its own typography, not a
   variant. All the words are the verse's.
3. [0340C] *Et ipse,* — AGREES Lc 22:41.
4. [0340C] *Jactus est lapidis,* — AGREES Lc 22:41 (*quantum jactus est lapidis*, cut at the head).
5. [0340D] *finis legis est Christus omni credenti ad justitiam [n: (Rom. X)]* — **DIVERGES, word
   order and copula — DECLINED.** Vulg Rom 10:4 *Finis enim legis, Christus, ad justitiam omni
   credenti*: Migne drops *enim*, adds *est*, and reverses *ad justitiam omni credenti*. Nothing a
   reader takes away changes, and the gloss turns on *finis legis*, which stands. The English
   keeps Migne's order ("to everyone that believeth unto justice") so the divergence is visible.
6. [0340D] *Orabat dicens.* — **DIVERGES, splice across Lc 22:41/42 — DECLINED.** See §(b): the
   words are the two verses' own, joined at the address. ⚑ Marked ✓ in the brief.
7. [0340D] *Istum,* — AGREES Lc 22:42 (*calicem istum*).
8. [0340D] *Pater, si vis,* — AGREES Lc 22:42.
9. [0340D] *Verumtamen,* — AGREES Lc 22:42.
10. [0340D] *Et factus est sudor.* — AGREES Lc 22:44.
11. [0341B] *Sanguinis decurrentis in terram.* — AGREES Lc 22:44.
12. [0341B] *Ut oscularetur.* — AGREES Lc 22:47.
13. [0341B] *Cum his qui oderunt pacem eram pacificus [n: (Psal. CXIX)]* — AGREES Ps 119:7,
    verbatim, address correct.
14. [0341B] *Domine, si percutimus in gladio.* — AGREES Lc 22:49.
15. [0341C] *Domine, si percutimus in gladio,* — AGREES Lc 22:49 (the same lemma re-quoted).
16. [0341C] *Sinite usque huc.* — AGREES Lc 22:51.
17. [0341C] *Converte gladium tuum in locum suum,* — AGREES **Mt 26:52**, which is what the gloss
    says (*cum apud Matthaeum legatur dixisse*). Not a Luke lemma.
18. [0341C] *Servum,* — AGREES Lc 22:50.
19. [0341C] *Venerant ad se,* — AGREES Lc 22:52.
20. [0342A] *Quasi ad latronem,* — AGREES Lc 22:52.
21. [0342A] *Principis sacerdotum.* — AGREES Lc 22:54.
22. [0342A] *Sequebatur a longe.* — AGREES Lc 22:54.
23. [0342A] *Igne in medio.* — AGREES Lc 22:55.
24. [0342C] *Ancilla quaedam.* — AGREES Lc 22:56.
25. [0342C] *At ille negavit.* — AGREES Lc 22:57.
26. [0342C] *Homo, nescio quid dicis.* — AGREES Lc 22:60.
27. [0342D] *Tu me negabis. Galliaeus est.* — **DIVERGES — DECLINED, and it is a TYPE question,
    not a text one.** Two spliced fragments: *ter me negabis* (Lc 22:61) cut to *Tu me negabis*,
    and *nam et Galilaeus est* (Lc 22:59). The divergence that matters is **Galliaeus** for
    *Galilaeus* — a **non-word**, logged at §(e).2 and rendered as printed inside the lemma. A
    `[var:]` would assert something about Migne's *text*; the question here is his *type*, which
    only the plate can answer.
28. [0342D] *Et continuo.* — AGREES Lc 22:60.
29. [0343A] *Et conversus Dominus.* — AGREES Lc 22:61.
30. [0343A] *Et egressus foras.* — AGREES Lc 22:62.
31. [0343A] *Illudebant,* — AGREES Lc 22:63.
32. [0343A] *In virga percutietur maxilla judicis Israel.* — **DIVERGES, voice — DECLINED.**
    Vulg Mch 5:1 *in virga percutient maxillam judicis Israel*: Migne turns the active into a
    passive (*percutietur* + nominative *maxilla*). No agent is named in either, the prophecy is
    adduced only as fulfilled, and nothing a reader takes away changes; so it fails Pattern 14's
    "changes the sense" test. **This is the closest call in the range** — it is a citable,
    clause-level, grammatical divergence, and a stint with a lower bar would have fired. Logged
    here so the plate reader can settle whether Migne prints it; leaf n177.
33. [0343A] *Dedi maxillam meam alapis.* — **DIVERGES — `[var:]` FIRED.** The Clementine has no
    such clause anywhere; Is 50:6 reads *Corpus meum dedi percutientibus, et genas meas
    vellentibus*. Migne's words are the Old Latin/LXX shape of the same verse (cheeks given *to
    blows*), and the gloss adduces it precisely for the buffeting (*caedebatur colaphis*), so the
    quoted matter itself — not its order or spelling — is what a reader would take away.
    `[var: Vulg. Is 50:6 *genas meas vellentibus*, "my cheeks to them that plucked them"]`.
    Per Pattern 14 I state the two readings and do **not** speculate why they differ.
34. [0343B] *Si enim crederent Moysi, crederent et Domino [n: (Joan. VIII)]* — **DIVERGES,
    grammatical adaptation — DECLINED.** Vulg Jo 5:46 *Si enim crederetis Moysi, crederetis
    forsitan et mihi*. The recension has recast the second person into the third and *mihi* into
    *Domino* because the sentence is *about* the Jews, not addressed to them; *forsitan* goes with
    the recast. That is the gloss weaving a quotation into its own syntax, which this work does
    constantly, and marking it would spam every page. (The address `(Joan. VIII)` is wrong for
    5:46 and is reproduced verbatim — §e.21.)
35. [0343B] *Prophetiza.* — AGREES Lc 22:64.
36. [0343B] *Prophetiza: Quis est qui te percussit?* — AGREES Lc 22:64.
37. [0343B] *Si tu es Christus.* — AGREES Lc 22:66.
38. [0343B] *Si vobis dixero.* — AGREES Lc 22:67.
39. [0343B] *Ex hoc autem erit.* — AGREES Lc 22:69.
40. [0343B] *Vos dicitis.* — AGREES Lc 22:70.
41. [0343B] *Ipsi enim audivimus.* — AGREES Lc 22:71.
42. [0343B] *Erit Filius hominis sedens ad dexteram virtutis Dei.* — **DIVERGES, two words —
    DECLINED.** Vulg Lc 22:69 *sedens a dextris virtutis Dei*; Migne *ad dexteram*. The same verse
    is quoted verbatim eight lines earlier (span 39) with no such wording, which proves an error
    exists here and, per the brief, nothing at all about whose. Sense unchanged; declined as a
    sub-clause substitution of a fixed idiom for its synonym.

### Chunk 0037 — cols 0343D–0347D (Luke 23:1–34) — 39 spans

43. [0343D] *Duxerunt illum.* — AGREES Lc 23:1.
44. [0343D] *Pilatus autem.* — AGREES Lc 23:3.
45. [0344A] *Reddite quae sunt Caesaris Caesari,* — **DIVERGES, one word — DECLINED.** Vulg Lc
    20:25 *Reddite ergo quae sunt Caesaris, Caesari*; Migne drops *ergo*, which is the connective
    of the verse's own context and cannot be carried into a quotation lifted out of it.
46. [0344A] *Tu dicis.* — AGREES Lc 23:3.
47. [0344A] *Nihil invenio.* — AGREES Lc 23:4.
48. [0344A] *Venit princeps mundi hujus, et non habet in me quidquam [n: (Luc. XX)]* — **DIVERGES,
    word order and one word — DECLINED.** Vulg Jo 14:30 *venit enim princeps mundi hujus, et in
    me non habet quidquam*: *enim* dropped (again, a lifted quotation) and *in me non habet*
    inverted to *non habet in me*. Identical sense; the negation stands in both and is carried.
    ⚑ The `[n: (Luc. XX)]` on it is the address of the **preceding** quotation (span 45) — an
    anaphora artifact of the abridgment, not a defect (brief §6.3), reproduced verbatim.
49. [0344B] *Commovet populum.* — AGREES Lc 23:5.
50. [0344B] *Et ut cognovit.* — AGREES Lc 23:7.
51. [0344B] *At ipse nihil respondit.* — **DIVERGES, tense and a dropped pronoun — DECLINED.**
    Vulg Lc 23:9 *At ipse nihil illi respondebat*; Migne *nihil respondit*. A perfect for an
    imperfect and *illi* dropped: the lemma is a citation address, and the recension routinely
    cuts and regularises one. Nothing turns on it — the gloss's point is the silence, which both
    readings carry.
52. [0344B] *Et illusit.* — AGREES Lc 23:11.
53. [0344D] *Et remisit ad Pilatum.* — AGREES Lc 23:11.
54. [0344D] *Et facti sunt amici.* — AGREES Lc 23:12.
55. [0344D] *Obtulistis.* — AGREES Lc 23:14.
56. [0344D] *Sed neque Herodes.* — AGREES Lc 23:15.
57. [0344D] *Emendatum ergo,* — AGREES Lc 23:16.
58. [0344D] *Tolle hunc,* — AGREES Lc 23:18.
59. [0345C] *Barabbam,* — AGREES Lc 23:18.
60. [0345C] *Vos ex patre diabolo estis.* — AGREES Jo 8:44 (quoted by the gloss, not a Luke lemma).
61. [0345C] *Crucifige, crucifige eum.* — AGREES Lc 23:21.
62. [0345C] *Corripiam,* — AGREES Lc 23:22.
63. [0345C] *Dimisit autem,* — AGREES Lc 23:25.
64. [0345C] *Apprehenderunt quemdam,* — **DIVERGES, elision — DECLINED.** Vulg Lc 23:26
    *apprehenderunt Simonem quemdam Cyrenensem*: the lemma drops *Simonem* out of the middle. An
    abridgment cut, and the gloss names Simon three lines later.
65. [0345C] *Christus enim passus est pro nobis ut sequamini vestigia ejus [n: (I Petr. II)]* —
    **DIVERGES, a clause elided and one word — DECLINED.** Vulg 1Ptr 2:21 *quia et Christus passus
    est pro nobis, vobis relinquens exemplum ut sequamini vestigia ejus*: *enim* for *et*, and
    *vobis relinquens exemplum* cut out. **This is the range's strongest declined `[var:]`
    candidate after span 32** — it is a clause-level omission I can cite. It is declined because
    the omission is the recension's own compression (it quotes the beginning and the end of a
    verse and drops the middle throughout this work, usually with *etc.*), and what is dropped
    does not bear on the gloss, whose whole point is *sequamini vestigia*.
66. [0345C] *Sequebatur,* — AGREES Lc 23:27.
67. [0346C] *novit Dominus qui sunt ejus [n: (II Tim. II)]* — **DIVERGES, one word — DECLINED.**
    Vulg 2Tim 2:19 *cognovit Dominus qui sunt ejus*; Migne *novit*. Simplex for compound, same
    sense; the single-word class, and as likely our transcription as his type.
68. [0346C] *Quae plangebant.* — AGREES Lc 23:27.
69. [0346C] *Filiae Hierusalem.* — **DIVERGES, orthography — DECLINED.** Vulg Lc 23:28 *Filiae
    Jerusalem*. Migne prints *Hierusalem* throughout the work; Pattern 9.
70. [0346C] *Nolite flere.* — AGREES Lc 23:28.
71. [0346C] *Ecce venient dies.* — AGREES Lc 23:29.
72. [0346C] *Cadite super nos.* — AGREES Lc 23:30.
73. [0346C] *Quia si in viridi ligno.* — AGREES Lc 23:31.
74. [0347A] *si nunc est tempus, ut incipiat judicium de domo Dei, et omnes qui volunt pie vivere
    Christo persecutionem patiuntur,* — **DIVERGES, a conflation of two verses — DECLINED.**
    Limb 1 = 1Ptr 4:17 *quoniam tempus est ut incipiat judicium a domo Dei* (Migne: *si nunc est
    tempus*, *de* for *a*). Limb 2 = 2Tim 3:12 *omnes qui pie volunt vivere in Christo Jesu,
    persecutionem patientur* (Migne: word order, *Christo* for *in Christo Jesu*, present
    *patiuntur* for future *patientur*). **Migne's own note names both places** —
    `(I Petr. IV; I Tim. III)` — so the conflation is the recension's declared method, not a
    variant reading, and it is welded into the gloss's own conditional (*Et si … qui finis*).
    The English carries all of it as printed, including the present tense.
75. [0347A] *Ducebantur autem.* — AGREES Lc 23:32.
76. [0347A] *Et cum iniquis deputatus est [n: (Isa. LIII)]* — **AGREES, but not where the note
    says.** The words are **Lc 22:37** verbatim (and Mc 15:28 has *reputatus*); Is 53:12 reads
    *et cum sceleratis reputatus est*. So the recension quotes Isaiah in the **New Testament's**
    form while citing Isaiah — the ordinary patristic practice, not a divergence in either text.
    No marker. ⚑ A worked instance of "✓ is not clearance" running the *other* way: the ✓ was
    right about the words and would have been wrong about the verse.
77. [0347A] *Calvariae locum.* — **DIVERGES, word order — DECLINED, and it is instructive.** The
    span is scored ✓, and it matches **Jo 19:17** (*qui dicitur Calvariae locum*), not the verse
    being glossed: Lc 23:33 reads *in locum qui vocatur Calvariae*. All the words are Luke's, in
    John's order. A two-word transposition with no change of sense.
78. [0347B] *Et latrones,* — AGREES Lc 23:33.
79. [0347B] *Jesus autem,* — AGREES Lc 23:34.
80. [0347B] *Dividentes.* — AGREES Lc 23:34.
81. [0347B] *Sortes.* — AGREES Lc 23:34.

### Chunk 0038 — cols 0347D–0350B (Luke 23:35–56) — 26 spans

82. [0347D] *Alios salvos fecit.* — AGREES Lc 23:35.
83. [0347D] *Illudebant autem ei,* — AGREES Lc 23:36.
84. [0347D] *Et acetum offerentes.* — AGREES Lc 23:36.
85. [0347D] *Erat autem,* — AGREES Lc 23:38.
86. [0347D] *Hic est rex Judaeorum.* — AGREES Lc 23:38.
87. [0347D] *Increpabat eum.* — AGREES Lc 23:40.
88. [0347D] *Domine, memento mei.* — AGREES Lc 23:42.
89. [0347D] *Amen dico tibi.* — AGREES Lc 23:43.
90. [0347D] *Memento mei,* — AGREES Lc 23:42 (re-quoted).
91. [0347D] *Hodie mecum eris,* — AGREES Lc 23:43 (re-quoted).
92. [0347D] *Et tenebrae,* — AGREES Lc 23:44.
93. [0347D] *mortuus est propter peccata nostra, et resurrexit propter justificationem nostram
    [n: (Rom. XVIII)]* — **DIVERGES — `[var:]` FIRED.** Vulg Rom 4:25 *qui traditus est propter
    delicta nostra, et resurrexit propter justificationem nostram*. The second limb is verbatim;
    the first replaces *traditus est* with *mortuus est* and *delicta* with *peccata* — the wording
    of 1Cor 15:3 (*Christus mortuus est pro peccatis nostris*). Different matter, not different
    order: a reader of Migne takes away that Paul wrote *died*, where Rom 4:25 says *was delivered
    up*, and the gloss's whole antithesis (crucified as the sun withdraws, risen as it returns)
    is built on the two limbs. `[var: Vulg. Rom 4:25 *qui traditus est propter delicta nostra*,
    "who was delivered up for our offences"]`. The note's address `(Rom. XVIII)` names a chapter
    Romans does not have and is reproduced verbatim (§e.24).
94. [0347D] *Velum templi,* — AGREES Lc 23:45.
95. [0347D] *Fugiamus ab his sedibus. Pater,* — **NOT SCRIPTURE in its first limb — DECLINED.**
    *Fugiamus ab his sedibus* is the gloss's quotation of **Josephus** (*Josephus ait*), for which
    the Clementine is not a witness and `[var:]` has no jurisdiction; *Pater,* is the head of
    Lc 23:46 (*Pater, in manus tuas*) and AGREES. The span is the recension's splice of the two.
96. [0347D] *Videns autem centurio.* — AGREES Lc 23:47.
97. [0347D] *Percutientes pectora.* — AGREES Lc 23:48.
98. [0347D] *Nomine Joseph.* — AGREES Lc 23:50.
99. [0347D] *Hic accessit,* — AGREES Lc 23:52.
100. [0347D] *Syndone.* — **DIVERGES, orthography — DECLINED.** Vulg Lc 23:53 *sindone*; Migne
     *Syndone*, the Greek-derived spelling. Pattern 9; no English exponent either way.
101. [0347D] *Et posuit eum.* — AGREES Lc 23:53.
102. [0347D] *In monumento exciso.* — AGREES Lc 23:53.
103. [0349D] *In quo nondum.* — AGREES Lc 23:53.
104. [0349D] *Et dies erat,* — AGREES Lc 23:54.
105. [0349D] *Mulieres.* — AGREES Lc 23:55.
106. [0349D] *Et revertentes.* — AGREES Lc 23:56.
107. [0350B] *Et sabbato,* — AGREES Lc 23:56.

### Chunk 0039 — cols 0350B–0354B (Luke 24:1–42) — 43 spans

108. [0350B] *Una autem sabbati,* — AGREES Lc 24:1.
109. [0350B] *Lapidem revolutum.* — AGREES Lc 24:2.
110. [0350B] *quia etsi cognovimus Christum secundum carnem, sed jam non novimus* — **DIVERGES,
     word order and one word — DECLINED.** Vulg 2Cor 5:16 *Et si cognovimus secundum carnem
     Christum, sed nunc jam non novimus*: *Christum* pulled before *secundum carnem*, *quia* for
     *Et*, *nunc* dropped. Both negations stand and are carried; sense identical.
111. [0350B] *Mente consternatae.* — AGREES Lc 24:4.
112. [0350B] *Declinarent vultum.* — AGREES Lc 24:5.
113. [0350B] *Recordamini.* — AGREES Lc 24:6.
114. [0350B] *Et recordatae sunt.* — AGREES Lc 24:8.
115. [0350B] *Nuntiaverunt.* — AGREES Lc 24:9.
116. [0350B] *Et non crediderunt.* — AGREES Lc 24:11.
117. [0350B] *Petrus autem surgens.* — AGREES Lc 24:12.
118. [0350B] *Nomine Emmaus.* — AGREES Lc 24:13.
119. [0350B] *Dum fabularentur.* — AGREES Lc 24:15.
120. [0350B] *Ubi sunt duo vel tres congregati in nomine meo, ibi sum in medio eorum
     [n: (Matth. XXVIII)]* — **DIVERGES, one word — DECLINED.** Vulg Mt 18:20 *Ubi **enim** sunt
     duo vel tres…*; everything else verbatim. A dropped connective in a lifted quotation, the
     same class as spans 45 and 48. (Address wrong — §e.25.)
121. [0350B] *Appropinquans,* — AGREES Lc 24:15.
122. [0350B] *Oculi,* — AGREES Lc 24:16.
123. [0352A] *Peregrinus es,* — AGREES Lc 24:18.
124. [0352A] *Quibus,* — AGREES Lc 24:19.
125. [0352A] *Vir propheta,* — AGREES Lc 24:19.
126. [0352A] *Et quomodo tradiderunt,* — **DIVERGES, a dropped pronoun — DECLINED.** Vulg Lc 24:20
     *et quomodo **eum** tradiderunt summi sacerdotes*. The lemma is cut before the subject and
     loses the object with the cut; an abridgment truncation.
127. [0352A] *Nos autem,* — AGREES Lc 24:21.
128. [0352A] *Terruerunt nos,* — AGREES Lc 24:22.
129. [0352A] *Abierunt quidam,* — AGREES Lc 24:24.
130. [0352A] *Quidam ex nostris abierunt ad monumentum,* — **DIVERGES, word order — DECLINED.**
     Vulg Lc 24:24 *Et abierunt quidam ex nostris ad monumentum*. The gloss is quoting the verse
     **as Cleophas's speech inside its own sentence** (*modo dicat Cleophas*), so the verb moves
     behind the subject; span 129, four lines earlier, quotes the same verse in the Vulgate's own
     order. Word order only, no word added or lost.
131. [0352A] *O stulti et tardi corde.* — AGREES Lc 24:25.
132. [0352A] *Et ipse,* — AGREES Lc 24:28 (*et ipse se finxit longius ire*).
133. [0352A] *Mane nobiscum,* — AGREES Lc 24:29.
134. [0352D] *Fregit,* — AGREES Lc 24:30.
135. [0352D] *Aperti sunt,* — AGREES Lc 24:31.
136. [0352D] *Et dixerunt,* — AGREES Lc 24:32.
137. [0353A] *Unus panis, unum corpus multi sumus [n: (I Cor. X)]* — AGREES 1Cor 10:17, cut before
     *Quoniam*; address correct.
138. [0353A] *Ardens. [n: (GREG.)]* — AGREES Lc 24:32 (*cor nostrum ardens erat*). The `[n:]` is
     an attribution siglum inside the span and is reproduced verbatim, in place.
139. [0353A] *Surrexit Dominus.* — AGREES Lc 24:34.
140. [0353A] *Stetit Jesus,* — AGREES Lc 24:36.
141. [0353A] *Cum sero esset die,* — **DIVERGES, one word — DECLINED.** Vulg Jo 20:19 *Cum **ergo**
     sero esset die illo* — the gloss says it is quoting John (*de qua Joannes ait*), and drops the
     connective, as at spans 45, 48 and 120.
142. [0353A] *et dixit eis: Pax vobis.* — AGREES Jo 20:19.
143. [0353A] *Spiritum videre. Et dixit eis.* — **DIVERGES, splice across Lc 24:37/38 —
     DECLINED.** See §(b): 24:37 ends *existimabant se spiritum videre* and 24:38 opens *Et dixit
     eis*. Both limbs verbatim; the join is the recension's. ⚑ Marked ✓ in the brief.
144. [0353A] *Quid turbati estis. [n: (AMBR.)]* — AGREES Lc 24:38.
145. [0353A] *usque ad* — **not a lemma**: the abridgment's own splice formula, marking where the
     Ambrose extract is cut. Rendered **as far as** (brief §1.6).
146. [0353A] *Cogitationes,* — AGREES Lc 24:38.
147. [0353A] *Palpate et videte.* — AGREES Lc 24:39.
148. [0353A] *Ostendit eis manus,* — AGREES Lc 24:40 (*ostendit eis manus et pedes*, cut).
149. [0353A] *Habetis hic aliquid.* — AGREES Lc 24:41.
150. [0353A] *Piscis assi.* — AGREES Lc 24:42.

### Chunk 0040 — cols 0354B–0356A (Luke 24:43–53, the end of the work) — 9 spans

151. [0354B] *Et cum manducasset.* — AGREES Lc 24:43.
152. [0354B] *Tunc aperuit.* — AGREES Lc 24:45.
153. [0354B] *Et praedicari in nomine ejus.* — AGREES Lc 24:47, cut before *poenitentiam*.
154. [0354B] *Oportebat,* — AGREES Lc 24:46.
155. [0354B] *Vos autem sedete.* — AGREES Lc 24:49.
156. [0354B] *Vos autem sedete.* — AGREES Lc 24:49 (re-quoted to open the exposition).
157. [0354B] *Eduxit autem eos.* — AGREES Lc 24:50.
158. [0354B] *In templo.* — AGREES Lc 24:53.
159. [0354B] *Laudantes et benedicentes.* — AGREES Lc 24:53.

**Tally: 159 spans — 135 agree in place, 22 diverge and are declined with the reason given, 2
diverge and are marked `[var:]`.** Every divergence above was checked against
`clementine-flat.txt` per verse, not against the brief's marks.

---

## (d) THIS RANGE'S CRUCES, BY COLUMN

### (d).1 The inherited axes — censused across all five chunks, and one prose exception

Measured against the Latin, with the instrument checked first (brief's warning: a bare `\bturba`
grep matches *turbare*, a bare `natio` grep matches *damnatio*).

| axis | Latin in my range | English | verdict |
|---|---|---|---|
| *turba* (noun) | 2 — *turbis* 0341D, *turba* 0346C | crowd 1, crowds 1 | **1:1**. ⚠ *turbantur* / *turbati* (0353C) are the **verb** *turbare* and are rendered "are troubled" / "are you troubled": a bare grep counts them as four missed crowds. They are not. |
| *multitudo* | 1 — 0340D *multitudo gentium* | multitude 1 | **1:1** |
| *daemonium* | **0 occurrences** | demon 0 | nothing to flatten |
| *diabolus* / *satanas* | 4 *diabol-*, 1 *Satana* | devil 4, Satan 1 | **1:1**; Satan as a proper name stays Satan (8999 precedent) |
| *mysterium* | 6 | mystery 4 + mysteries 2 | **1:1** |
| *sacramentum* | 7 | sacrament 2 + sacraments 5 | **1:1** |
| *natio* | **0 real occurrences** (only *damnatione*, *damnationis*, *expugnationem*) | — | nothing flattened by the *gentes* rule |
| *gentes* / *gens* | 14 | Gentiles 10 + Gentile 1 + nation 2 + nations 1 | see below |
| gloss-voice archaism | — | *saith* **0**, *says* 9 | clean |

**The *gentes* split, site by site**, since this is the axis the brief says runs hot in the
passion: **Gentiles** in the Judaei/gentes typology — 0340D *multitudo gentium* (against
*interitus Judaeorum* in the same sentence), 0344D *Judaei et gentiles* and *Judaeorum
gentiumque figura*, 0345A *Gentilis prius capiat regnum Dei*, 0345B *Judaeorum vel Gentilium*,
0346B *per eum Gentiles designantur* and *populi gentium*, 0348A *Gentilium sapientiam*, 0348D
*ad gentes transeant*, 0349B *Gentiles, moriente Domino Deum timentes* (opposed to *Judaei* in
the next clause), 0354D *gentes variis erroribus implicitae* (opposed to those who crucified the
Son of God). **nation** — 0349B *distantiam gentis et gentis*, singular *gens* of a people, twice
in one phrase. **nations** — 0354D *in omnes gentes*, the Lc 24:47 commission, the plainly generic
scripture phrase the convention assigns to "nations" (Matt 28:19 precedent from Mark and John).

**⚑ THE ONE DECLARED EXCEPTION — *usque ad* is rendered "until" twice, and the Latin is
temporal.** Eight instances in the range. The italic splice formula (0353C, *etc., usque ad*) and
every spatial or extensional use take **as far as**: 0340D *usque ad ipsum perducant*, 0344B *a
Galilaea usque ad Judaeam*, 0345D *ne usque ad crucifigendum saevirent*. But 0350B prints
*ut sabbati silentium a vespera **usque ad** vesperam servaretur* and *occupantur … **usque ad**
solis occasum* — pure time-span idiom, where "as far as evening" is not English and would look
like a defect. Rendered **until**. This follows 8999's own boundary ("only the italic formula was
touched; unitalicised prose was left alone") and is declared here rather than left silent.
0344B *a fine usque ad finem* is rendered **"from end to end"** for the same reason, and is the
third site under this exception.

### (d).2 Mechanism 5 — a census of the WHOLE range, not the first chunks

The brief's dominant defect class: a pronoun, relative or participle silently re-bound to the
contextually easier noun. Every site in all five chunks where two nouns compete, with the reading
the **case and gender** force:

| col | the ambiguity | what I bound it to, and why |
|---|---|---|
| 0341B | *quidquid **illa** scandali de morte ejus pertulisset* | *illa* is feminine = **fragilitas** (earthly frailty), not *fides*; "that frailty" |
| **0341D** | *Sinistra, id est, vilitate litterae **contentus*** | ***contentus* is masculine** and cannot agree with *sinistra* (auris, fem.): the subject is the **people** of the Jews, and *sinistra* is an **ablative** governed by it. Rendered "Content with the left, that is, with the cheapness of the letter". The easy reading — "the left ear, content with…" — is the one the morphology forbids |
| 0342A | *qui suae jussionis potestate venerunt* | binds to the **chief priests**, not to the *turbae* of the previous clause; the whole sentence exists to fix the guilt on them |
| 0345A | *ut illi quoque gloria majestatis **suae** corpus vestiant **Christi*** | *suae* is **Christ's** majesty, not the Jews' |
| 0346C | *quod contra **eos** senserit* | *eos* = the **chief priests** present, not the women |
| **0347C** | *significat Ecclesiam toto orbe, **quae** quatuor partibus constat, diffusam* | ***quae* is feminine; *orbis* is masculine**, so the relative can only be *Ecclesiam* — although the received sense (the four quarters of the *world*) wants *orbis*. I followed the **printed gender** and set the clause hard against "the Church" ("the Church, which consists of four parts, spread through the whole world"). Logged, unmarked: this is exactly the site where the easy reading and the grammar part company |
| 0348C | *quem negabant apostoli, quem viderant miracula … facientem* | both relatives = **Christ**, not the robber who is the sentence's subject |
| 0348D | *quo tunc peccanti Adae obcluserat* | the unexpressed object is **paradise**, supplied by *reserat* in the same clause |
| 0349B | *cujus vitam dilexerant* … *cujus mortem se impetrasse meminerant* | both = **Christ**; the subject throughout is the crowd |
| **0352A** | *a quorum fide resurrectionis **nescia** extraneus manebat* | ***nescia* agrees with *fide***, so it is their **faith** that is ignorant of the resurrection, not they. "from whose faith, ignorant of the resurrection, he remained an alien" |
| 0352C | *cum quibus veritas gradiebatur* | the relative is the **two disciples'**; they are the subject of *vocant … cogunt* |
| 0353A | *impedimentum quod a Satana in oculis erat* | *quod* = **impedimentum** (neuter), not *oculis* |
| 0353B | *fama … ab illis mulieribus facta* · *a Simone Petro **cui** apparuerat* | the report was **made by** the women; *cui* = **Peter**, to whom the Lord appeared |
| 0354A | *ostensa **quam** ab illis accepit cicatrice* | *quam* = **cicatrice**; *ab illis* = the impious who are being condemned |
| 0356A | *qui propter inobedientiam perversorum descendit* | subject = **Christ**, not Bethany, across a *quia* clause whose nearer noun is *domus obedientiae* |

**No re-binding was left to the sense where the morphology decides it.** Two sites (0341D, 0347C)
are ones where the easy reading is fluent and wrong, and both are called against fluency.

### (d).3 Negation and scope — every site where a limb could have been lost

- **0351B** *Si enim utramque suscepisset, nos a neutra liberasset* — the point of the whole
  paragraph inverts if *neutra* is softened. "he would have freed us from **neither**."
- **0343C** *sed illi **nec** dicenti credere, **nec** interroganti respondere, **nec** eum qui
  innoxius erat dimittere volebant* — three limbs, three negatives, all carried.
- **0352B** *qui **nec** in Scripturis quantum oportet edocti, **nec** ad implenda … intenti* —
  both limbs negative; the second is the one an English ear drops.
- **0343A** *non ut eorum scelera **non** videret, sed ut … abscondant* — a double negative that
  reads awkwardly and is exactly right; not smoothed.
- **0344D** *et si uterque reum **non** pronuntiat* — rendered "although each of the two does not
  pronounce him guilty", not "although neither pronounces": *uterque* is distributive and the
  negation sits on the verb.
- **0346D**, **0345D**, **0353D**, **0354C**, **0340C** — *ne*/*nisi*/*non* clauses, each carried
  in the running English, none parked inside a marker. (No marker in this range holds a negation:
  there is nothing to park one in.)

### (d).4 Two readings where the printed Latin is obscure and the English follows it anyway

- **[0343A]** *Ab impiorum concilio seclusus culpam lavat, **quae** non intus ob hoc **permissus
  est** haesitare ut…* — the relative is feminine, the participle masculine, and English has to
  choose (unlike the gender cases Pattern 9 covers, "who" and "which" are a real exponent here).
  I followed the **participle**, since it carries the sentence's verb: "he washes his guilt, who
  was permitted not within, and for this reason, to waver". The feminine relative is logged at
  §e.4 and takes no marker.
- **[0347B]** *Ibi crucifigitur, **ut, ibi erat area damnatorum,** erigantur vexilla martyrii* —
  the parenthetic clause has *ibi* where the construction requires *ubi*, and as printed it does
  not construe. Rendered as closely as the printed words allow, with Migne's own commas kept:
  "There he is crucified, that, there was the ground of the condemned, the standards of martyrdom
  might be raised up." No conjecture in the text (§e.10).

### (d).5 Non-Latin matter carried into the English, declared

Two italic Latin words stand in my English that are not lemma spans, so the English carries **163**
italic spans against the Latin's 159 (the other two are the italics inside the two `[var:]`
markers):

- **[0346B] *pagus*** — *Simon venit de villa, id est de pago, a quo pagani*. The gloss **is** the
  etymology, so an English word sharing no root with "pagan" makes it explain nothing: the
  *stylus*/*epistylium* case (11551). Rendered "from the village (*pagus*), from which come the
  pagans".
- **[0352B] *teruisse*** — a non-word, carried untranslated per Pattern 7's ruling on the class
  (§e.16). The clause keeps its frame ("They are rightly said *teruisse* those to whom…"), so the
  hole is exactly one lexeme wide and visible as one; per 7a⁗ nothing that word governed has been
  lost with it, because it governs only its own object, which stands.

### (d).6 The end of the work — read, and NOT reported

Chunk 0040's anchors run `0354C` · `0354D` · `0355A` · `0356A`. This is correct and is left
untouched, per the brief §6.2 and the plate read recorded there (p. 183 divides full-width and
horizontally; Luke's ending occupies the top band of both columns, and John's prologue at
0355B–0355D sits *below* 0356A on the paper). **No anchor was moved, nothing is missing between
0355A and 0356A, and this is not a defect.** Recorded here because the next reader of this file
will meet the same sequence and should not re-open it.

---

## (e) DECLINED-ODDITY LIST — every suspect word I did NOT mark, in one place, for the plate

**Attribution is not asserted for any entry.** For each, the defect could be Migne's type or
Corpus Corporum's transcription of it; my guess carries no evidential weight and none is offered.
Ordered by column. Items 1–20 are text; 21–25 are citation addresses. Leaf = archive.org
`patrologiaecursu0114mign`, **n = (column + 11) / 2**.

| # | col | leaf | chunk | printed | what it looks like | why no marker |
|---|---|---|---|---|---|---|
| 1 | 0341A | n176 | 0036 | *quamdam vim **terrori** patimur* | dative where the sense wants the genitive *terroris* | a real form; rendered in place, "a certain force unto terror" |
| 2 | 0342D | n176 | 0036 | ***Galliaeus** est* | **NON-WORD** for *Galilaeus* (Lc 22:59), inside the italic lemma; the very next sentence prints *Galilaei* correctly | the brief's rule: log a non-word, do not mark it. ⚠ It does **not** look like two halves of a real word, so it is not the hyphen-rejoin class; it looks like a lost *li*/*il* run. Rendered as printed, no second italic (nested italics are not expressible) |
| 3 | 0342D | n176 | 0036 | *…praesentia plene **quidque** putaverat erexit* | *quidque* where the sense wants *quidquid*; and *correxit* in the preceding limb has no expressed object | real words in real forms; the clause is obscure, not false |
| 4 | 0343A | n177 | 0036 | *culpam lavat, **quae** non intus … **permissus est** haesitare* | feminine relative against a masculine participle | English must pick who/which; I followed the participle and said so (§d.4). No emendation to make |
| 5 | 0344A | n177 | 0037 | *quod **attributa** reddi prohiberet* | a real word ("things assigned"), where the accusation at Lc 23:2 is *tributa dare Caesari* | renders in place ("the assigned dues"); one letter from the word the context supplies, which proves an error exists and never whose |
| 6 | 0344B | n177 | 0037 | *non criminis, sed judicium est virtutis* | an elliptical genitive with no governing noun in its own limb | a construction, not a word; nothing to wrap |
| 7 | 0346A | n178 | 0037 | *jam postulando et vociferando et **perficiendo perficiunt*** | a cognate figure, or a compositor's doubling | **Pattern 11 does not apply**: the two are different forms, not a repeated run, so there is no intrusive copy to wrap with `[d:]`. Both rendered |
| 8 | 0346B | n178 | 0037 | *Simon obediens **Cyreneae haeres** interpretatur* | the received etymology (Jerome) runs *Cyrene, haereditas* | rendered as printed, "obedient, heir of Cyrene" |
| 9 | 0346C | n178 | 0037 | *Nota cum ***filios*** Hierusalem vocat, quod non **solae quae**…* | masculine *filios* where the lemma one line above is *Filiae Hierusalem* and the following relative is feminine plural | **rendered "sons", against the lemma it glosses.** A silent *filias* would be exactly the repair Pattern 7 exists to forbid, and this is a clean, cheap plate question |
| 10 | 0347B | n179 | 0037 | *ut, **ibi** erat area damnatorum, erigantur* | *ibi* where the construction needs *ubi*; as printed the sentence does not construe | conjecture named, not made (§d.4) |
| 11 | 0347C | n179 | 0037 | *qui **zelam** Dei habentes* | feminine accusative for masculine *zelum* (Rom 10:2) | Pattern 9: the gender has no English exponent |
| 12 | 0347C | n179 | 0037 | *Ecclesiam toto orbe, **quae** quatuor partibus constat* | the grammar binds the relative to *Ecclesiam*; the received sense wants *orbis* | rendered per the printed gender (§d.2); no word is defective, so nothing is markable |
| 13 | 0349A | n180 | 0038 | *confidentiam ejusdem **cum parte potestatis*** | conjecture *cum Patre*; the clause is about the Son commending his spirit to the Father | real words; the sentence is obscure, not false, so 18a's bar is not met |
| 14 | 0350C | n180 | 0039 | ***Aromata** quae deferunt … **significat*** | plural subject, singular verb | English agreement is forced by "spices"; rendered "signify", and the mismatch has no exponent |
| 15 | 0351D | n181 | 0039 | *sub Marco Aurelio **Antonio** principe* | for *Antonino* — the emperor under whom Emmaus was refounded as Nicopolis | a real Roman name; rendered as printed |
| 16 | 0352B | n181 | 0039 | ***teruisse*** | **NON-WORD** for *terruisse*; the lemma two lines above prints *Terruerunt nos* | carried untranslated in italics (Pattern 7's non-word ruling); logged, not marked. ⚠ Like item 2, **not** the hyphen-rejoin shape |
| 17 | 0352B | n181 | 0039 | *gemina humiliandi **necesitas*** | single *s* for *necessitas* | treated as orthography (Pattern 9, geminate simplification) and rendered normally; flagged only so the sort gets read on the same leaf as item 16 |
| 18 | 0353B | n182 | 0039 | *invenisse undecim congregatos, et eos qui cum **eis erat*** | singular verb against a plural relative; Lc 24:33 reads *qui cum illis erant* | not an italic lemma, so outside §(c); English number is forced by "those who", and there is no exponent for the mismatch |
| 19 | 0354D | n183 | 0040 | *et **gloria testamenta**, et legislatio* | Rom 9:4 reads *et gloria, et testamentum*: a dropped *et* and a plural for a singular | not an italic lemma, so it takes no `[var:]` under §(a).3; rendered as printed, without supplying the missing connective or a comma (Pattern 8) |
| 20 | 0356A | n183 | 0040 | *cum **apostolis** ibi **ministros** … **futuros** … concludit* | ablative *apostolis* against accusative *ministros … futuros* | rendered with *apostolis* as printed ("concludes with the apostles there, ministers, namely, of the new priesthood to come"); a case, not a word |
| 21 | 0343B | n177 | 0036 | note `(Joan. VIII)` | the verse is Jo 5:46 | notes are reproduced verbatim and untranslated |
| 22 | 0344A | n177 | 0037 | note `(Luc. XX)` | stands on a quotation of Jo 14:30; the address belongs to the **preceding** quotation, Lc 20:25 | same; and an anaphora resolving to the "wrong" antecedent is not a defect (brief §6.3) |
| 23 | 0347A | n179 | 0037 | note `(I Petr. IV; I Tim. III)` | the second member is 2Tim 3:12; 1 Timothy has no such verse | same |
| 24 | 0347D | n179 | 0038 | note `(Rom. XVIII)` | Romans has 16 chapters; the verse is Rom 4:25, conflated with 1Cor 15:3 | same; the **text** of that quotation carries the `[var:]` (span 93), the address does not |
| 25 | 0350B | n180 | 0039 | note `(Matth. XXVIII)` | the verse is Mt 18:20 | same |

### What I would most want read at the plate, in order

1. **0342D *Galliaeus*** (leaf **n176**) — the only non-word inside a lemma in the range, and the
   correct form prints six words later, which settles nothing about whose it is. Item 1 (*terrori*,
   0341A) is on the **same leaf**, so one read settles both.
2. **0352B *teruisse*** and **0352B *necesitas*** (leaf **n181**) — the range's other non-word and
   the range's only orthographic simplification, on one leaf, four lines apart. If both are
   Migne's, that is a compositor having a bad column; if both are ours, it is a transcription
   artifact class. Item 15 (*Antonio*, 0351D) is on the same leaf: **three questions, one read.**
3. **0346C *filios* for *filias*** (leaf **n178**) — the one site where the English contradicts
   its own lemma on the same page, so a reader will meet it. Item 8 (*Cyreneae haeres*) and item 7
   (*perficiendo perficiunt*) are on the same leaf.
4. **0347B *ibi* for *ubi*** and **0347C *zelam*** (leaf **n179**) — the sentence at 0347B is the
   only one in the range that will not construe at all.
5. **0344A *attributa*** (leaf **n177**) — free: items 4 and 21 are on that leaf already.
6. **0349A *cum parte potestatis*** (leaf **n180**) — lowest priority; item 14 shares the leaf.
7. **[0343A] *In virga percutietur maxilla*** (leaf **n177**) — not an oddity but the range's
   closest declined `[var:]` (span 32). If Migne prints the passive, the decline stands as a
   judgement about materiality; if he does not, it was never a divergence at all.

⚑ **Eight of these twenty-five are sites where our file alone makes a `[sic:]` or a `[cj:]` look
obviously right.** None is marked. On John that discipline produced every one of the seventeen
corrections the work received, and the same wager is made here.
