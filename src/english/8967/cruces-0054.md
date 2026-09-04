# 8967 *Glossa ordinaria*, Liber Psalmorum — cruces, chunks 0054–0058 (BAND B, stint 4)

Range: `src/latin/8967/0054.md`–`0058.md`, cols **0953D–0967C** · Psalms LXXI–LXXVI.
Lemma brief: `data/briefs/8967-lemmata-0054.txt`.

⚠ **This file is one stint's range. It must be merged into `src/english/8967/cruces.md`.**

---

## §0 · SPAN COUNT RECONCILIATION (the required check)

My brief's header declares **367 spans** for chunks 0054–0058. Counting `*…*` in my own Latin:

| chunk | italic spans |
|---|---|
| 0054 | 69 |
| 0055 | 64 |
| 0056 | 74 |
| 0057 | 72 |
| 0058 | 88 |
| **total** | **367** |

**The totals AGREE, exactly, and the brief's first and last entries match my range's first and
last spans** (`[0953D] *In Salomonem,*` … `[0967C] *mons fortitudinis:*`). The brief is correctly
split by chunk; nothing was collated from a neighbour's tail and nothing is missing at the head.

Per-chunk parity re-checked mechanically against the Latin twin after writing, with `[var:]`,
`[sic:]` and `[cj:]` content stripped first (their contents carry italics of their own):
**anchors identical in order and count · `[n:]` identical in order and count · italic spans equal
paragraph by paragraph · question marks equal · `## ` heads 1:1.** Zero em-dashes were written.

---

## §1 · THE PLATE — eight pages, and what they overturned

**Map used: PDF page = (column + 11) / 2**, `raw/scans/pl113/patrologiaecurs04migngoog.pdf`.
Verified on the first render before anything else: **p. 482 corners read 953 / 954**. All eight
reads are recorded in `data/plate-reads.json` with what was checked, not merely that the page was
opened.

| PDF p. | cols | clipped? | conjecture apparatus |
|---|---|---|---|
| 482 | 0953 / 0954 | no | none, either layer |
| 483 | 0955 / 0956 | no | none |
| 484 | 0957 / 0958 | no | none |
| 485 | 0959 / 0960 | no | none |
| 486 | 0961 / 0962 | no | none |
| 487 | 0963 / 0964 | no | none |
| 488 | 0965 / 0966 | no | none |
| 489 | 0967 / 0968 | no | none |

⛔ **The withdrawn mod-4 clipping rule would have been wrong on all four odd-left columns here** —
953, 957, 961 and 965 are all ≡ 1 (mod 4) and **all four are clean to the inner margin.** Nothing
in my range needed a second witness.

⭐ **The plate reversed my reading three times, and in both directions.** These are the reason the
gate exists, stated as what I checked:

1. **0958D `temporatia`.** A non-word in a psalm gloss, sitting four words from a scripture
   quotation, in a paragraph otherwise rough. From the Latin alone it is a confident Migne defect
   and I had it written down as a `[sic:]` candidate. **The leaf sets `temporalia`, cleanly, with a
   normal line-break hyphen.** The defect is Corpus Corporum's. Marker withdrawn; TEI patch
   reported; the English renders "temporal things."
2. **0966B `Caepi`.** Same shape, same verdict: the plate sets `Coepi.` The English renders
   "I have begun."
3. **0967C `intrepretatur`.** The mirror. A metathesis that reads exactly like the transcriber
   artifact class, and I was ready to decline it. **At 900 dpi Migne sets `intrepretatur` plainly**,
   so a `[sic:]` is owed and now stands.

Eleven further sites went the other way — Migne's own defects that our TEI has repaired
(`corparabitur`, `mo` for *mox*, `dica` for *dicat*, `uque ad`, `Nafrubimus`, `Dum` for *Deum*) or
his own numbering that our TEI has tidied (**two `VERS.` numerals**, one of them a doubled
`VERS. 17.`). All are in `data/briefs/8967-PENDING-TEI-PATCHES.md` under this stint's heading;
none is a marker, because a `[sic:]` on one would accuse Migne of his transcriber's work, and
because `[sic:]` content must be verbatim in the twin, which for all six it is not.

**One site declined as copy condition, not compositor error:** 0959D `ducens eos in finem`, where
the `s` of `eos` is a half-inked sort. That is this leaf's inking, the `possit`→`rossit` class, and
restoring it would import a defect that exists nowhere else.

⚠ **The `h`/`b` hazard produced nothing in this range** — I checked every candidate against a known
`h` on the same line and found no site where the two could be confused.
⚠ ***deservit* / *deserit*: no instance.** The two `deser-` forms in the range are `deserendos`
@0958A and `deserendus` @0961B, both from *desero* ("forsake") and both unambiguous in context;
neither is the *deservio* dative confusion.

---

## §2 · MARKERS FIRED

**1 `[sic:]` · 1 `[cj:]` · 12 `[var:]` · 0 `[d:]` · 0 `[ed:]`.** All rest on columns read above;
`plate-gate.mjs` flags nothing in 0953–0967.

### `[sic: *intrepretatur*]` — 0967C
`Moyses intrepretatur *assumptus de flumine*`. Metathesis for *interpretatur*; a non-word, and
Migne's, confirmed at 900 dpi. **The marker does not swallow the sense**: the English reads
"Moses is interpreted [sic: *intrepretatur*] *taken up from the river*" — strip the bracket and the
sentence still has its verb, its subject and its complement (7a⁗ test 1, plus the fourth question:
the object survives).

### `[cj: *exspecta*; read *excepta*, "the tribe of Levi being excepted"]` — 0963B
`cum reliquis undecim filiis Jacob duodecim tribus sunt, exspecta tribu Levi, quae sacerdotalis`.
**Plate-confirmed as Migne's.** *exspecta* is a perfectly good imperative, so Pattern 12 has no
broken type to wrap; but an imperative "wait!" has **no grammatical slot** in a declarative clause
governed by *sunt*, and the ablative `tribu Levi` beside it demands an ablative-absolute
participle. This is the 11632 *Pecte*/*ama* shape. Pattern 18 is the right marker because the type
is not broken at all and the gloss is **additive**: Migne's word keeps its English ("await"), and
the conjecture stands beside it. Chose `[cj:]` over `[sic:]` deliberately, and record the reason
here because a later reader cannot reconstruct it.

### The nine `[var:]`, with the Clementine reading each rests on

| col | Migne prints | Clementine | why material |
|---|---|---|---|
| 0955D | *Defecerunt **hymni** David filii Jesse* | Ps 71:20 *Defecerunt **laudes** David, filii Jesse* | the very next paragraph is a definition of *hymnus*; the word the argument turns on is the one that differs |
| 0956B | *Rectis corde* | Ps 72:1 *his qui recto sunt corde* | the gloss asks "Sed quibus?" and answers with this phrase |
| 0956C | *quia non est **declinatio** morti eorum* | Ps 72:4 *quia non est **respectus** morti eorum* | the gloss expounds it as "non cito moriuntur, sed diu vivunt" — a turning-aside, not a regard |
| 0956D | *Lingua transivit **super terram*** | Ps 72:9 *lingua eorum transivit **in terra*** | the gloss's whole point is that the tongue passes *beyond* human frailty |
| 0959B | *Repulisti **nos*** | Ps 73:1 *repulisti in finem*, no object | the gloss supplies "quasi alienos", i.e. it reads the object |
| 0959D | *Leva **manum tuam*** | Ps 73:3 *Leva **manus tuas***, plural | singular against plural, and the singular hand is what the gloss then takes up at v. 11 |
| 0960A–B | *In securi et ascia **polluerunt tabernaculum nominis tui*** | Ps 73:6 *in securi et ascia dejecerunt eam*; 73:7 *in terra polluerunt tabernaculum nominis tui* | two verses spliced; the gloss then expounds *securis* and *ascia* as the instruments of the defiling |
| 0960C | *Cum venerit Sanctus sanctorum, cessabit unctio* (cited Dan. IX) | Dn 9:24 *et impleatur visio et prophetia, et ungatur Sanctus sanctorum* | not a variant of the verse but a different sentence, adduced as proof that the unction has ceased |
| 0964B | *In revelatione Domini **nostri** Jesu de coelo cum angelis **venient ad judicium exercendum*** (cited I Thes. I) | 2Thes 1:7 *in revelatione Domini Jesu de caelo cum angelis **virtutis ejus*** | the predicate is different, and the citation points at the wrong epistle |
| 0965A | *Vox mea ad eum* | Ps 76:2 *voce mea ad Deum* | ⭐ **the gloss argues from the nominative**: "Ad hoc est vox, propter quod editur." A conformed lemma would have destroyed its own exposition |
| 0966D | *Filios Joseph* | Ps 76:16 *filios Jacob et Joseph* | the entire gloss is an exposition of Joseph alone |
| 0967A | *Mandabo nubibus **meis** ne pluant super eam imbrem* | Is 5:6 *et nubibus mandabo ne pluant super eam imbrem* | word order plus the added possessive |

Twelve rows, twelve markers, distributed 2 / 2 / 4 / 1 / 3 across chunks 0054–0058 and counted
back out of the written files.

---

## §3 · 7a″ — THE FULL LEMMA WALK. Divergences AND the lemmata checked and found to agree

⛔ Every lemma below was read word by word against `sources/vulgate/clementine-flat.txt`. A list of
findings alone cannot be told apart from a report by an agent that never looked, so the agreements
are recorded too.

### Checked and AGREEING with the Clementine, verbatim
**Ps 71 (chunk 0054):** *In Salomonem* (71:1) · *Deus judicium* / *Justitiam tuam* (71:2) ·
*Montes* / *Et colles* / *montes pacem populo* / *suscipiant montes* (71:3, and the Vulgate word
order `Suscipiant montes pacem populo, et colles justitiam` is exactly what the gloss redistributes)
· *Judicabit pauperes populi* / *Pauperes populi* / *Humiliabit calumniatorem* (71:4) ·
*permanebit cum sole* / *ante lunam* (71:5) · *Descendet sicut pluvia* / *In vellus, et sicut
stillicidia* (71:6) · *Et dominabitur a mari usque ad mare* / *A flumine* (71:8) ·
*Reges Tharsis et insulae munera offerent* (71:10) · *Quia liberabit pauperem a potente* (71:12) ·
*Ex usuris* / *iniquitate* / *Nomen* / *Coram illo* (71:14) · *Et vivet, et dabitur ei de auro* /
*Arabiae* / *De ipso semper* (71:15) · *Firmamentum* / *In summis montium* / *In terra* /
*Super Libanum* (71:16) · *Sit nomen ejus benedictum* / *Ante solem* / *Omnes gentes* (71:17) ·
*Benedictus Dominus Deus Israel* (71:18) · *Fiat, fiat* (71:19) · *Defecerunt laudes* (71:20) ·
*Hic est Filius meus dilectus* (Mt 3:17).
**Ps 72 (0055):** *Quam bonus* (72:1) · *Pedes* / *Gressus* / *pene* (72:2) · *Pacem peccatorum* /
*Videns* (72:3) · *Et firmamentum in plaga eorum* (72:4) · *Operti sunt iniquitate et impietate
sua* (72:6) · *Prodiit quasi* / *Transierunt* (72:7) · *In excelso* (72:8) · *In coelum* (72:9) ·
*Ideo convertetur* / *Dies pleni invenientur in eis* (72:10) · *Et dixerunt* / *Quomodo scit*
(72:11) · *Et dixi: Ergo sine causa justificavi cor meum* (72:13) · *Et castigatio* (72:14) ·
*Si dicebam* / *Reprobavi* (72:15) · *Existimabam* / *Ante me* / *Labor est ante me* (72:16) ·
*Sanctuarium* (72:17) · *Verumtamen* / *propter dolos* (72:18) · *Velut somnium* / *In civitate* /
*In civitate tua imaginem* (72:20) · *Inflammatum est cor meum* / *Et renes mei commutati sunt*
(72:21) · *Ad nihilum redactus sum* / *Nescivi* (72:22) · *Jumentum* (72:23) · *Tenuisti manum* /
*Cum* (72:24) · *In aeternum* (72:26) · *Qui fornicantur abs te* (72:27) · *In portis filiae Sion*
(72:28).
**Ps 73 (0056):** *Intellectus Asaph* / *Ut quid Deus* / *In finem* / *Tuae* (73:1) ·
*Possedisti* / *Redemisti* / *Mons* / *Virgam haereditatis* / *Mons Sion* (73:2) · *Leva* /
*Quanta malignatus est* / *Inimicus* / *In sancto* (73:3) · *Gloriati sunt* / *In medio
solennitatis tuae* / *Signa* (73:4 — ⚑ see below on *solennitatis*) · *In exitu* / *Quasi in
silva* (73:5) · *Securis* / *ascia* (73:6) · *In terra* (73:7) · *Signa nostra non vidimus* /
*Et nos non cognoscet amplius* (73:9) · *Usquequo* / *irritat adversarius* (73:10) ·
*Ut quid avertis* / *Manum tuam et dexteram* (73:11) · *Deus autem rex noster* / *In medio terrae*
(73:12) · *Tu confirmasti* (73:13) · *Escam* (73:14) · *Fontes et torrentes* (73:15) ·
*Tuus est dies et tua est nox* / *Auroram et solem* (73:16) · *Tu fecisti omnes* / *Terminos
terrae* (73:17) · *Memor esto* / *Hujus* / *Inimicus improperavit Domino, et populus insipiens
incitavit nomen tuum* (73:18, **word for word**) · *Respice in Testamentum tuum* (73:20) ·
*Ne avertatur humilis, factus confusus* (73:21) · *Exsurge, Deus* / *Causam tuam* / *Tota die*
(73:22) · *Superbia eorum qui te oderunt* (73:23) · *Verbum caro factum est et habitavit in nobis*
(Jo 1:14) · *Nox nocti indicat scientiam* (Ps 18:3).
**Ps 74–75 (0057):** *In finem, ne corrumpas* (74:1) · *Confitebimur tibi, Deus* / *Confitebimur* /
*Narrabimus mirabilia tua* (74:2) · *Cum accepero tempus* / *Justitias* (74:3) · *Liquefacta est
terra* / *Terra et omnes* (74:4) · *Inique agere* / *Nolite exaltare cornu* (74:5) · *Loqui*
(74:6) · *Quia neque ab oriente* (74:7) · *et hunc exaltat* (74:8) · *Quia calix* / *Calix* (74:9)
· *Ego autem annuntiabo in saeculum: cantabo Deo Jacob* (74:10) · *Cornua justi* (74:11) ·
*Canticum* / *Ad Assyrios* (75:1) · *Notus in Judaea* / *In Judaea* (75:2) · *In Sion* / *In pace*
(75:3) · *Ibi confregit potentias* (75:4) · *Illuminans tu mirabiliter a montibus aeternis turbati
sunt* (75:5–6, a splice across the verse division, and **word for word**) · *turbati sunt omnes
insipientes corde* / *Dormierunt* / *Somnum suum* / *Et nihil invenerunt omnes viri divitiarum* /
*Nihil invenerunt* / *Viri divitiarum* / *In manibus* (75:6) · *Ab increpatione* / *Qui
ascenderunt* / *Equos* (75:7) · *De coelo auditum* (75:9) · *Cum exsurgeret* / *Mansuetos terrae*
(75:10) · *Quoniam cogitatio* / *Cogitatio hominis* / *Reliquiae* / *reliquiae cogitationis*
(75:11) · *Vovete et reddite* / *Vovete* / *Munera* / *Terribili et ei qui aufert* (75:12–13, also
a splice across the division, and it agrees) · *Spiritum principum* (75:13) · *Esurivi* (Mt 25:35).
**Ps 76 (0058):** *Voce mea ad Dominum clamavi* / *Intendit mihi* (76:2) · *Renuit consolari*
(76:3) · *Et exercitatus sum* (76:4) · *Anticipaverunt vigilias* / *Oculi mei* / *Turbatus* /
*Non sum locutus* / *turbatus sum* (76:5) · *Cogitavi dies antiquos* / *Dies antiquos, et annos
aeternos in mente habui* (76:6, **word for word**) · *Cum corde* / *Et exercitabar* / *Scopebam
spiritum meum* / *Exercitabar et scopebam* (76:7) · *ut complacitior* (76:8) · *Aut obliviscetur
misereri Deus* (76:10) · *Et dixi: Nunc coepi* / *Mutatio dexterae* (76:11) · *In adinventionibus*
(76:13) · *Deus in sancto* / *quis Deus magnus* / *Via tua* (76:14) · *Mirabilia* / *Populis
virtutem* / *redemisti* (76:15–16) · *Viderunt* (76:17) · *Multitudo* / *Sonitus aquarum* /
*vocem dederunt nubes* (76:18) · *Vox tonitrui* / *in rota* / *Contremuit terra* (76:19) ·
*In mari* / *Et vestigia tua non cognoscentur* / *Vestigia tua* (76:20) · *Sicut oves* /
*Moysi et Aaron* (76:21).

### Divergences found and DECLINED, each with the reason
- **0954B *Justitia judicabit pauperem*** — Migne introduces it himself as `secundum aliam
  litteram`. He has already told the reader it is a variant; a `[var:]` would say it twice.
- **0957B *index meus in matutino*** (Clementine 72:14 *castigatio mea in matutinis*) and
  **0965C *inimici mei anticipaverunt vigilias*** (76:5 *Anticipaverunt vigilias oculi mei*) —
  both are introduced by Migne's own `Alias`. Same reason.
- **0955B *Sicut fenum*** — Clementine 71:16 *sicut foenum terrae*. Orthography only.
- **0956D *In coelum*** (Clem. *caelum*), **0964A *De coelo*** (Clem. *caelo*), **0965D *Nunquid***
  (Clem. *Numquid*) — orthography, not reading.
- **0960A *qui te oderunt*** — Clementine 73:4 *qui oderunt te*. Word order only, and the Clementine
  itself prints *qui te oderunt* at 73:23, which this chunk also quotes.
- **0960A *solennitatis*** — ⚑ **this one nearly became a false marker.** Against our TEI it looks
  like a Migne divergence from the Clementine's *solemnitatis*. **The plate prints
  *solemnitatis*, agreeing with the Clementine**: the divergence is Corpus Corporum's and the
  marker would have been aimed at Migne. Patch reported.
- **0961A *Fluvii Ethan*** (Clem. 73:15 *fluvios Ethan*) and **0963A *vinum merum*** (Clem. 74:9
  *vini meri*) — both are lemma head-words lifted into the nominative, which is this commentary's
  ordinary citation practice, not a variant.
- **0964D *In finem pro Idithum*** — Clementine 76:1 *pro Idithun*. **Plate-checked: the `m` is
  Migne's**, not our TEI's. A proper-name form with no consequence for the sense; recorded rather
  than marked.
- **0965A *In die tribulationis exquisivi*** (Clem. *In die tribulationis meae Deum exquisivi*),
  **0966C *quis Deus magnus?*** (Clem. *quis deus magnus sicut Deus noster?*), **0958D
  *Dedit … potestatem filios Dei fieri*** (Jo 1:12 *dedit eis potestatem*) — abridged lemmata,
  cut short with the gloss continuing. Fragmentation is not divergence.
- **0965D *Et etiam meditatus sum nocte*** (Clem. 76:7 *Et meditatus sum nocte*) — an added
  *etiam*. Real, checked, and **not material**: nothing in the gloss turns on it, and Pattern 14's
  bar is a change of sense. Named here rather than marked, so the merge can overrule me cheaply.
- **0961B the citation `(Psal. XXVIII)`** on a text that is Ps 18:3 — a citation number, which
  rides verbatim inside the `[n:]` per the settled convention. Plate-checked as Migne's.

⚑ **Verse-address divergences, reported as a class and not marked.** Migne's `VERS. n.--` addresses
in Ps 71 run one ahead of the Clementine's numbering from *Descendet sicut pluvia* onward
(his `VERS. 7.` = Ps 71:6; his `VERS. 8.` = 71:8 again, so the offset closes). His addresses are
his, they are reproduced as printed, and **no psalm number was converted anywhere** (§A2 holds:
Vulgate numbering throughout, Ps LXXI–LXXVI).

---

## §4 · INHERITED CONVENTIONS — how each behaved in this range

- **`In finem` → "Unto the end."** Five occurrences (0959B, 0959D ×2, 0960B, 0962A, 0964D), all
  rendered so, zero rivals. ⚑ One is a *titulus* (`In finem, ne corrumpas` @0962A) and one is
  *inside* the gloss's own prose (`In finem mundi, vesperam scilicet` @0960B, "unto the end of the
  world"); the formula carries both without strain.
- **`Diapsalma` → roman, unitalicized, unanglicized.** Four occurrences: 0963C, 0964B, 0965B,
  0966D. **All four read at the plate and all four are set ROMAN**, confirming the Band A ruling
  against the launch brief's original wording. Rendered `Diapsalma` in every case.
- **`usque ad` → "as far as".** 34 italic occurrences, all rendered "as far as", zero rivals.
  ⛔ **Two exceptions taken, both forced by the Latin, both stated here rather than smuggled:**
  1. **0954D `*Et dominabitur a mari usque ad mare.*`** — the words are *inside a scripture
     lemma*, Ps 71:8 itself. Rendered **"from sea to sea"**. The axis governs the abridgment
     formula, not the words wherever they fall (GLOSSA brief §6, the Lc 16:16 precedent).
  2. **0954D `dilatatur usque ad terminos orbis terrae`, 0955C `perveniat usque ad terminos orbis
     terrae`, 0960B `Usque ad terram dejecerunt culmina`** — unitalicized prose. Rendered by sense
     ("as far as the ends of the earth", "down to the ground"). The italic-membership test decides
     it, as §A4 says.
- **`Dominus virtutum` → "Lord of hosts"** — **does not occur in this range.** Checked by grep.
- **`sedes` → "seat"** — does not occur.
- **`Psalmus David` / `Psalmus ipsi David`** — neither occurs; the tituli here are *In Salomonem*,
  *Intellectus Asaph*, *In finem ne corrumpas*, *Canticum ad Assyrios*, *In finem pro Idithum*.
- **Heads.** `PSALMUS LXXI.` … `PSALMUS LXXVI.` → `PSALM LXXI.` … `PSALM LXXVI.` Roman numerals
  kept as Roman, per §A3; Migne spells out only the first psalm of the book, which is in Band A.
- **`(ID.)` and `(Ibid.)` never expanded.** 29 `(ID.)` and 0 `(Ibid.)` in this range; all pass
  through verbatim.
- **The vocabulary axes.** `gentes` → **Gentiles** throughout, because every occurrence here sits
  inside the *Judaei*/*gentes* typology (0954D *gentilitas* → "the Gentile world"; 0959D *regibus
  gentium*; 0966D *significat gentes, de quibus augmentatus est populus Dei*). The one place I
  weighed "nations" was 0959D `regibus gentium` — the Roman destroyers of Jerusalem — and the
  paragraph's own frame (`Sed quia haec et de gentibus … Id est, non de gentibus`) settles it as
  the typological word. Singular `gens` of the Jewish people → **nation** (0959D `Tota gens`).
  `natio` → **nation** always (0957B, 0957C ×2). `daemonium` → demon (0956A, 0960A) and
  `diabolus` → devil (0961A, 0962D `diabolorum` → "devils"), no bleed. `multitudo` → multitude
  (0967A), `turba` absent. `mysterium` → mystery (0961A, 0963A), `sacramentum` → sacrament
  (0954D), 1:1.
- **Archaism.** No `saith` anywhere. **Six `-eth` forms were written and every one is inside an
  italic lemma or an italic scripture quotation** — the both-memberships test: *sheweth* (Ps 18:3
  @0961B), *exalteth* (*et hunc exaltat* @0963A), *dwelleth / enlighteneth / saveth* (@0963B),
  *taketh* (*Terribili et ei qui aufert* @0964D). No guillemets occur in this range, so italic
  membership was the only test available and it was applied to all six. Gloss-voice `dicit`/`ait`
  → "says". (The one place the temptation was live, 0963B `*habitat, illuminat, salvat*`, is a
  quoted-scripture lemma set, so `dwelleth / enlighteneth / saveth` is licensed by italic
  membership and is what I wrote.)
- **`thou` / `you`.** 95 second-person-singular forms (`thou`/`thee`/`thy`/`thine`), every one
  standing on singular Latin — `ne putes`, `quod pecces`, `Memor esto`, `Respice`, `quae
  promisisti`, `Leva manum tuam`, `Quomodo exquisisti`, `Tenuisti manum`. **Four plurals**, all on
  plural Latin and checked individually: `Vovete et reddite` @0964C → "Vow ye and pay",
  `Nolite exaltare cornu` @0962D → "Lift not up your horn", and `si Judaei, tunc in vobis notus
  est Deus: quod si non est, tunc non Judaei` @0963B → "if ye are Jews … among you … then ye are
  not Jews". One further plural possessive, `unctio vestra` @0960C → "the unction of yours",
  addressed to the Jews.
- **`gens tenebrarum`** — **does not occur in this range.** Checked by grep; nothing to flag.
- **Fragmentary lemmata (Glossa convention 3) — the policy I actually applied, stated so the merge
  can overrule it in one place.** A stump is rendered **literally** wherever the literal English is
  readable as a citation head (`*Deus judicium.*` → "*O God, judgment.*"; `*Montes.*` →
  "*Mountains.*"; `*Nomen.*` → "*Name.*"), and expanded to the phrase it stands for **only** where
  the stump would be unreadable or would misassign a case (`*Tenuisti manum.*` @0958C → "*Thou
  hast held my hand,*" from Ps 72:24 *Tenuisti manum dexteram meam*; `*Cum,*` @0958C → "*With,*"
  kept literal because the gloss immediately supplies its own context). Ruth's `Non te.` → "Let no
  man see thee" is the expanding end of that range; most of this range's 367 spans do not need it,
  and expanding them all would have supplied hundreds of unprinted words.

---

## §5 · THE SENTENCES. Passages read hard, and what I checked in each

⚑ Recorded as *what was checked*, not that the column was looked at.

- **0954C `permanebit cum sole splendor`.** The italic span is `*permanebit cum sole*` and
  `splendor` stands outside it. English had to keep the split, so it reads "*there shall remain
  with the sun* a brightness" rather than the natural "brightness shall remain". Subject checked:
  the sentence's own apposition names it — "id est, Filius cum Patre".
- **0955B `Non aetas seni sed viriditas sanctis comparatur.`** Test 2a trigger: a negative on a
  verb with a `non … sed` correlative nearby. **The host is `aetas`, not `comparatur`** — the
  correlative pivots on the two nominatives, and the datives *seni*/*sanctis* are parallel. English
  therefore reads "It is not age that is compared to the old man, but greenness to the saints",
  with the negative on "age". Rendering it as "age is not compared" would have been the
  Colossians @0614B failure.
- **0956A `deficit laus, non Filii Dei, sed *filii Jesse*.`** Same class: the negative governs the
  genitive, not `deficit`. Carried onto "not of the Son of God".
- **0956A `quae a Deo, non a daemonibus, ut gentes, quaerebat`.** The negative sits on the
  prepositional phrase; the subject of `quaerebat` is the Synagogue, named two clauses earlier
  (`loquitur *Asaph,* id est Synagoga`). Every unexpressed "it" in that long paragraph is the
  Synagogue, and the feminine participles `Attendens`, `castigans`, `admonitus`… ⚑ **`admonitus` is
  MASCULINE** where the string of feminine participles would want *admonita*. Pattern 9: Latin
  gender has no English exponent, nothing to render either way. Logged so a later sweep does not
  churn it.
- **0956B `tamen inde correctum, et correctus alios corrigit`.** Migne prints neuter `correctum`
  then masculine `correctus` of the same subject. Pattern 9 again; rendered "yet corrected from
  that, and being corrected it corrects others", and the mismatch is invisible in English by
  necessity, not by choice.
- **0956D `non amicti, ut vel liberum caput haberent, sed toti operti`.** The `non … sed` pivots on
  *amicti*/*operti*, so the negative is on "clothed", not on "have". Rendered "not merely wrapped
  about, so as at least to have the head free, but wholly covered."
- **0957A `Non dicit, nescit`.** Two negatives, one on the reporting verb and one inside the
  reported words. Both carried: "He does not say, He knows not."
- **0957B `judicavi quod non est`.** Kept as "I judged that which is not" — the temptation was
  "I judged wrongly", which would have deleted the negative and the object together.
- **0957C `nisi Deus aperiat`** — `nisi` carried ("unless God open it"); the supplied "it" is
  flagged here because the Latin has no object: the antecedent is the difficulty of `major me, me
  superans`, and I could not make the clause English without one.
- **0961B `Diem illustrat sed incommutabilis sapientiae.`** ⛔ **Does not construe.** A genitive
  `incommutabilis sapientiae` hangs with no head noun; the sense wants something like *lumen* or
  *sol*. Rendered as closely as the printed words allow — "He illumines the day but of unchangeable
  wisdom" — **and not smoothed.** Plate-checked: this is exactly what Migne sets. Conjecture
  offered but not placed in the text; a `[cj:]` would need a printed word to gloss and there is
  none, the fault being an omission.
- **0962B `Confiteri peccata vel semel terreno judici mortem inducit, sed Deo frequens confessio
  vitam?`** Migne closes a plain statement with `?`. **Pattern 8: preserved as printed** — this is
  his oddity and recording it is the point. Not an indirect question, so 8b does not apply.
  Plate-checked.
- **0962B `Inde invocatio, post narratio; unde sequitur: *Narrabimus. Invocabimus nomen tuum.*`**
  The order of the two quoted words contradicts the sentence that introduces them (and the
  Clementine has *invocabimus* before *narrabimus*). **Plate-checked: Migne's own.** Rendered as
  printed, in his order.
- **0962C `Judicandi igitur ante precentur absolvi.`** Compressed past easy construing;
  `Judicandi` is read as a genitive gerundive depending on `absolvi`. Rendered "Therefore let them
  pray beforehand to be absolved of him who is to judge", which is the closest the printed words
  allow. Flagged rather than smoothed.
- **0962D `perniciosus defendendo se, in Deum culpam refundere`.** The series runs
  *malum … pejus … perniciosus* — the third member is a **positive** where the comparative
  *perniciosius* is wanted. **Plate-checked: Migne sets `perniciosus`.** Rendered "pernicious",
  NOT "more pernicious": upgrading it would be the silent repair Pattern 7 forbids, and a `[cj:]`
  is not owed because the English asserts nothing false, only something less pointed.
- **0964D `et facit renes sui, qui corpus suum moderantur`.** `sui` for *suos*. Rendered "and makes
  them reins of his own, who govern their own body"; the printed genitive is carried rather than
  corrected. Declined a `[cj:]` — it is a case slip in a possessive, the Pattern 9 shape.
- **0966A `In alio modo, non est misericordia, nisi Deus eam donet: et ipse erit sine ea.`**
  ⛔ Read as printed the second clause says God will be without mercy, which contradicts the first.
  **Both the `non` and the `nisi` are carried and nothing is smoothed** — this is precisely the
  contradiction this edition exists to show. Rendered "there is no mercy unless God bestow it: and
  he himself will be without it."
- **0958C `vel in super coelesti Ecclesia`.** Rendered "or in the supercelestial Church"; `in
  super` printed as two words is carried as one adjective because there is no other reading that
  construes with the ablative. Flagged.
- **0959B `Vel vacat in eo.`** Glossing Ps 73:2's pleonastic `in quo habitasti **in eo**` — the
  note says the phrase is idle. Rendered "Or it is redundant in it", deliberately without adding
  an italic span for the quoted words, because inventing one would break the span parity that is
  this stint's only detector against a mis-split brief.
- **0965D `Sed contra *dies antiquos, annos* ponit *aeternos:*`** Migne's italics split the
  construction across `ponit`. English keeps the split — "But over against *the ancient days, the
  years* he sets *eternal:*" — rather than regularising it into one span.
- **0966A `quod de servis filii`** — verbless. Rendered "in that of servants there are made sons",
  supplying only a copula; flagged.

**Anchors:** every one of the 55 column anchors was placed against the *word* it stands beside in
the Latin, not merely reproduced in order (2b). Three sit mid-construction in the Latin and sit
mid-construction in the English too: `0954A` inside *secundum … utramque naturam*, `0955D` inside
*septuagesimus primus*, `0961C` between *judicem* and *provocat*.

---

## §6 · FALSE-POSITIVE CANDIDATES CONSIDERED AND REJECTED

- **Column-band arithmetic.** 0954A–D then 0955A–D and so on run cleanly; nothing is broken
  mid-word across an anchor. Not reported.
- **`noteCount`.** 34 / 36 / 51 / 41 / 39 in the frontmatter; the bodies carry 34 / 36 / 51 / 41 /
  39. Exact. Not an issue in this range.
- **Pattern 4 `[f:]`.** Not applicable — this is lemma-and-gloss commentary, runbook item 4.
  Nothing tagged.
- **Pattern 15 `[nt:]`.** All 201 notes in this range are sigla or bare citations
  (`(AUG.)`, `(CAS.)`, `(CASS.)`, `(HIER.)`, `(HIERON.)`, `(ID.)`, `(REM.)`, `(Dan. IX)`,
  `(Joan. I)`, `(Psal. XXVIII)`, `(I Thes. I)`). **None is editorial prose**; every one stays `[n:]`.
- **Migne's own `( sic )`** — does not occur in this range.
- **`(cont.)`** — no head repeats across a chunk boundary here.

## §7 · OWED / OPEN

1. **`Nafrubimus` @0962B: the leaf must be re-read before the `[sic:]` is transcribed.** The letter
   between `Na` and `rubimus` could not be settled as `f` or `t` even at 1200 dpi, and a marker
   must not guess a letter. The patch entry says so.
2. The 20 TEI-patch sites appended to `data/briefs/8967-PENDING-TEI-PATCHES.md`. **Two English
   edits are already made in anticipation and must not be made twice**: 0958D "temporal things"
   (for our `temporatia`) and 0966B "I have begun" (for our `Caepi`), both following the plate.
   Once the patch pass restores Migne's own defects at 0955C, 0958A, 0960C, 0960D, 0962B and
   0965C, **six further `[sic:]` become available** and this stint's English should be revisited
   for them.
3. **The blind polarity read** on these five chunks, as on all the rest.
