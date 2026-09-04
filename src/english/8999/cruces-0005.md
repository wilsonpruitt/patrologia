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
