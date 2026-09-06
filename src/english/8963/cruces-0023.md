# 8963 *Liber Numeri* — cruces, chunks 0023–0025 (cols 0439A–0446D)

Anselm of Laon and his school, *Glossa ordinaria* on Numbers. This stint closes the book:
chunk 0025 ends at 0446D, where `LIBER DEUTERONOMII` begins on the same plate.

## 0. Span count against the lemma brief

`data/briefs/8963-lemmata-0023.txt` states **102 spans** for chunks 0023–0025.
Counted **paragraph-bounded** in my own Latin: **0023 = 50 · 0024 = 38 · 0025 = 14 = 102.**
No unmatched `*` delimiter in any paragraph of any of the three files. **Guillemets: 0** in my
range, as the launch brief says for this book. **The totals agree.**

**`⚑ MATCHES ONLY ELSEWHERE`: zero spans in my range.** The string occurs in my brief only in
the legend that explains the mark; no inventory line carries it. Nothing to adjudicate.

## 1. Plates read — pp. 225, 226, 227 (unread before this stint) and p. 228 (re-read)

Corner numbers read FIRST on every page, before anything else on it:

    p.225 → 439 / 440      p.226 → 441 / 442      p.227 → 443 / 444      p.228 → 445 / 446

confirming `page = (column + 11) / 2` for `patrologiaecurs04migngoog.pdf`. Gallica calibrated the
same way: f220 corners 439/440, so `f = (column + 1) / 2` holds. Both maps verified, not assumed.

⛔ **FOOT-OF-PAGE APPARATUS: NONE, ON ALL FOUR PAGES, BOTH COLUMNS.** Checked zeroes, recorded in
`data/briefs/8963-PLATE-READS-0023.json`. ⭐ p.228 is the page where **the work division falls
mid-page** — the shape CLAUDE.md warns sets notes mid-page — and there is no note there either:
the rule under the last line of Numbers is followed directly by the `LIBER DEUTERONOMII` head.

## 2. ⭐ Second-witness tally — 15 archive-only candidates, 14 refuted at Gallica

Every letter- and word-level candidate the archive copy produced was taken to Gallica
`ark:/12148/bpt6k5505319w`, leaves f220–f223. **Fourteen fell. One stood, and it was ours.**

| col | archive prints | Gallica prints | our TEI | verdict |
|---|---|---|---|---|
| 0439B | `discretio˙ fit crescente` | `discretio fit  crescente` | `discretio fit, crescente` | archive's raised dot is dirt; **neither witness prints the comma our TEI has** — §5 below |
| 0439C | `vere lucis` | `verae lucis` | `verae` | REFUTED — archive ink |
| 0440A | `frutres` | `fratres,` | `fratres` | REFUTED — archive ink (a→u) |
| 0440B | `Thabath` (lemma) | `Thahath` | `Thahath` | REFUTED — archive ink |
| **0440C** | **`Thabath`** | **`Thabath`** | `Thahath` | **STANDS — both witnesses print `Thabath`; ours is the odd one** |
| 0441C | `victos` | `vinctos` | `vinctos` | REFUTED |
| 0441C | `collo` | `colla` | `colla` | REFUTED |
| 0442A | `confandar` | `confundar` | `confundar` | REFUTED |
| 0442B | `praeteribunt` | `praeteribant` | `praeteribant` | REFUTED |
| 0442C | `antem` | `autem` | `autem` | REFUTED |
| 0442D | `alius campis` | `alius in campis` | `in campis` | REFUTED — ink swallowed a two-letter word |
| 0443C | `nou` | `non` | `non` | REFUTED — and this one is a NEGATION |
| 0443D | `(Luc. XV)` | `(Luc. XVI)` | `XVI` | REFUTED — ink filled the final `i` |
| 0444A | `et ne carne` | `et in carne` | `in carne` | REFUTED |
| **0444B** | **`post montana enim tam ad`** | `post montana enim ad` | `enim ad` | **press variant — the archive printing carries a word the Gallica printing does not** |
| 0445B | `id est Hena` | `id est atrio Hena` | `atrio Hena` | REFUTED — ink swallowed a five-letter word |
| 0446D | `solomnitatem` | `solemnitatem` | `solemnitatem` | REFUTED |

⭐ **This range corroborates the run's governing finding from the other side.** Our TEI agrees with
Gallica at every one of the fourteen refuted sites — and at 0444B, where the two printings really
differ, **our TEI again follows Gallica.** The one site where our TEI stands alone (0440C) is the
one where **the two printings agree with each other**.

⛔ **And it reproduces the "never let one adjudication settle the next" warning exactly.** `Thabath`
for `Thahath` was raised at 0440B and 0440C on the same column, from the same archive page, on the
same evidence. **The first is ink and the second is real.** Had I settled 0440C from the 0440B
refutation I would have silently kept a reading neither plate carries.

⚑ Three of the fourteen refutations were words the archive **lost**, not letters it changed
(`in` @0442D, `atrio` @0445B, and the `i` of `XVI`). That is the direction the withdrawn
"direction rule" once called safe on one witness; here it was wrong three times out of three.

## 3. The one divergence I judge to be OURS — 0440C `Thahath` for `Thabath`

Filed in `data/briefs/8963-PENDING-TEI-PATCHES-0023.md`.

Migne sets the VERS. 26 lemma **`Thahath`** (both witnesses; = Vulg. Nm 33:26) and then, eleven
lines below in the Origen gloss, **`Thabath`** (both witnesses). Our TEI prints `Thahath` in both
places — the digitization tidied Migne's second form into agreement with his first and with the
Vulgate. This is brief §4's normalization class, caught only because the plate was open.

**Under `translation-style.md` "THE PLATE WHERE READ", the English renders `Thabath` at 0440C** —
so the English chunk deliberately reads *Thahath* at the lemma and *Thabath* in the gloss, exactly
as Migne prints. No `[sic:]`: the type is not defective (it is a variant transliteration of a
Hebrew name), and a `[sic:]` would in any case fail the verbatim-substring guard, since the word it
would accuse is not in our Latin.

## 4. Markers fired — eight, all `[var:]`, all on read columns

⛔ **No `[sic:]`, no `[cj:]`, no `[ed:]`, no `[d:]` in this stint.** Fourteen of my fifteen
candidates were the archive copy's ink; the fifteenth is our file's and takes a patch, not a marker.
Zero `[sic:]` in 3,109 Latin words is what this class looks like when it is measured.

Each `[var:]` stands beside a faithful rendering of what Migne prints; none replaces one.
Columns: **0439B · 0441B · 0441D · 0442A · 0442B · 0444A · 0444C · 0444C** — all four pages read.

1. **@0439B** *si fuerint peccata vestra sicut Phoenicium, ut nivem dealbabo* (Is 1:18). Clementine:
   *Si fuerint peccata vestra ut coccinum, quasi nix dealbabuntur.* Migne prints an **Old Latin**
   form: *Phoenicium* (Phoenician purple, not "scarlet") and an **active** *dealbabo*, "I will
   whiten", against the Vulgate's passive. ⚠ This is the exact site of one of Ruth's four measured
   silent repairs (*Phoenicium* rendered "as scarlet"); it is deliberately **not** conformed here.
2. **@0441B** *Si spiritus potestatem habenti ascenderit super te, locum tuum ne dimittas.*
   Clementine Ecl 10:4: *potestatem **habentis** … locum tuum ne **demiseris**.* Migne's `habenti`
   is a real Latin form (dative participle) with no construction in the sentence, so Pattern 7
   governs and it is rendered flat — "for him that hath power" — not silently repaired to the
   genitive the Vulgate has. **Both witnesses print `habenti`.** Migne's own siglum reads
   `(Eccli. X)` (Ecclesiasticus) for a verse of **Ecclesiastes**; that is his, and rides as printed.
3. **@0441D** *Maledictus qui facit opus Dei negligenter et prohibet gladium suum a sanguine*
   (Jer 48:10). Clementine: *opus **Domini fraudulenter**, et maledictus qui prohibet…* Two
   substantive changes (**Dei** for *Domini*, **negligenter** for *fraudulenter*) plus the loss of
   the second *maledictus qui*. `negligenter` is the material one and is what the marker names.
   Both witnesses.
4. **@0442A** *Pastor enim, bonus ponit animam suam pro ovibus suis* (Jo 10:11). Clementine:
   *Bonus pastor animam suam **dat** pro ovibus suis.* `ponit` for `dat`. ⚑ Migne's comma after
   *enim* is his and is carried into the English ("a shepherd, a good one, layeth down…"); it looks
   like a compositor's slip and both witnesses print it.
5. **@0442A–B** *Transiens, videbo visionem hanc magnam* (Ex 3:3). Clementine: ***Vadam, et**
   videbo…* — and the divergence is **load-bearing**: the gloss is expounding *transitus* and calls
   the speaker *verus Hebraeus, id est transitor*. Conforming this lemma would have destroyed the
   argument it is quoted for. Both witnesses.
6. **@0444A** *Venerunt ad **montem** Abarim contra Nabo* (Nm 33:47). Clementine: ***montes**
   Abarim.* Migne's singular sits against his own gloss two lines down (*vertitur in **montes**
   transeuntium*, *mansio transeuntium in **montibus** sita est*). Both witnesses print the singular.
7. **@0444C** *Versatus sum in miseria, dum mihi configitur spina* (Ps 31:4). Clementine:
   *conversus sum in **aerumna mea**, dum configitur spina* — an Old Latin / Roman-Psalter shape,
   with *mihi* added. Both witnesses.
8. **@0444C** *Beatus qui tenebit et allidet parvulos **suos** ad petram* (Ps 136:9). Clementine:
   *parvulos **tuos**.* Material: the gloss has just made the little ones belong to the malignant
   spirits, which is what *suos* gives and *tuos* does not. Both witnesses print `suos`.

## 5. 7a″ — every marked span collated, INCLUDING the ones that agree

⭐ The list below is the deliverable, not the markers. Spans that agree with the Clementine
verbatim are recorded as such; a list of findings alone cannot be told apart from a report by an
agent that never looked.

**Agreeing exactly with the Clementine** (checked, no marker, no crux owed):
*Nive dealbabuntur in Selmon* (Ps 67:15) · *Domine, quis habitabit in tabernaculo tuo?* (Ps 14:1) ·
*Idoneos nos fecit ministros Novi Testamenti* (2Cor 3:6) · *Mihi mundus crucifixus est* (Gal 6:14) ·
*Virga tua et baculus tuus, ipsa me consolata sunt* (Ps 22:4) · *Quam dulcia faucibus meis eloquia
tua* (Ps 118:103) · *Dirupisti vincula mea* (Ps 115) · *Nolite locum dare diabolo* (Eph 4:27) ·
*Afferte Domino filios arietum* (Ps 28:1) · *In matutino interficiebam omnes peccatores terrae*
(Ps 100:8) · *Et non dixerunt qui praeteribant, Benedictio Domini super vos* (Ps 128:8) ·
*Quando autem factus sum vir, evacuavi quae erant parvuli* (1Cor 13:11) · *Commovebit Dominus
desertum Cades* (Ps 28:8) · *Qui parce seminat, parce et metet…* (2Cor 9:6) · *Ne polluatis terram
habitationis vestrae* (Nm 35:33) · *Attendite ne justitiam vestram faciatis coram hominibus*
(Mt 6:1) · *Cui vult nubat, tantum in Domino* (1Cor 7:39) · *Praeterit enim figura hujus mundi*
(1Cor 7:31) · the Numbers station lemmata *In Rethma · In Remmomphares · In Lebna · In Ressa · In
monte Sepher · In Arada · In Maceloth · In Thahath · Castrametati sunt in Thare · In Salmona ·
Transieritis Jordanem · Disperdite cunctos · Pluribus dabitis latiorem · Ibuntque confinia · Haec
erit terra · Decernite quae urbes · Postquam autem ille obierit · Accesserunt autem et principes.*

**Diverging, but NOT materially — crux only, no `[var:]`** (a `[var:]` is a public claim and
Pattern 14 reserves it for divergence that changes the sense):

- **@0439A** *Multitudinis credentium erat cor unum et anima una* — Act 4:32 has *Multitudinis
  **autem** credentium.* A dropped connective.
- **@0440A** *Ecce quam bonum et quam jucundum, habitare, fratres, in unum* — Ps 132:1 has
  *habitare fratres in unum*, i.e. only commas differ, and our TEI does not carry them at all
  (Gallica prints *fratres,* with the comma, the archive without: press variant, §2).
- **@0440B** *Noli altum sapere, sed sapere ad sobrietatem [Rom. XII]* — a **conflation**, not a
  variant: *Noli altum sapere* is Rom 11:20 (which continues *sed time*) and *sapere ad sobrietatem*
  is Rom 12:3. Migne's own siglum says Rom. XII. There is no single received verse to set against
  it, so no `[var:]` is possible; the note is the whole record. ⚑ The brackets round `[Rom. XII]`
  are Migne's own, printed in the running line, and pass through as printed.
- **@0440C** *Ego enim ostendam ei quanta oporteat eum pati pro nomine meo* — Act 9:16 has *ostendam
  **illi** quanta oporteat eum **pro nomine meo pati**.* Pronoun and word order; sense unmoved.
- **@0441A** *Sinistra ejus sub capite meo et dextera ejus amplexabitur me* — Ct 2:6 has ***Laeva**
  ejus … dextera **illius***. `Sinistra` for `Laeva` is a genuine Old Latin lexical divergence, but
  both words are "left hand" and nothing in the gloss turns on it. Both witnesses print it.
- **@0442A** *Domine, in te speravi non confundar in aeternum* — Ps 30:2 has *In te, Domine,
  speravi; non confundar…* Word order only.
- **@0442C** *Aqua alta consilium in corde viri* — Pr 20:5 has *Sicut aqua **profunda**, **sic**
  consilium in corde viri.* `alta` for `profunda` is the same sense; the correlative is abridged.
- **@0443B** *Corde creditur ad justitiam* — Rom 10:10 has *Corde **enim** creditur.*
- **@0443D** *Inter nos et vos magnum chaos firmatum est* — Lc 16:26 has *inter nos et vos **chaos
  magnum** firmatum est.* Word order.
- **@0445C–D** *Si quis scandalizaverit unum ex pusillis istis qui in me credunt* — Mt 18:6 has
  ***qui autem** scandalizaverit unum **de** pusillis istis.*
- **@0445D** *Omnis qui oderit fratrem suum, homicida est, nec habet vitam aeternam* — 1Jo 3:15 has
  *omnis qui **odit** fratrem suum, homicida est. **Et scitis quoniam omnis homicida non habet vitam
  aeternam in semetipso manentem.*** The second clause is the recension's own abridgment, not a
  variant reading; `oderit` for `odit` has no English exponent (Pattern 9's class).
- **@0446C** *Omnes enim fratres sumus.* ⚠ **Declined deliberately, and here is why.** The nearest
  received text is Mt 23:8 *omnes autem vos fratres estis* — second person, not first — but Migne
  cites **three** places at once (*Joan. X; Matth. XXIII; II Cor. XI*), and *sumus* stands in none
  of them. A `[var:]` would have to assert which verse is being diverged from, and I cannot show
  that. Addendum B: the crux is always available and always safe. The first person is the clincher
  of Rabanus' argument about schism and is rendered as printed.

**Non-scriptural spans checked in place** (the 19 italic `*usque ad*`, `*Montem.* · *Habitatores.* ·
*Jetebathae.* · *Reus,* · *Nubant.* · *Audivitque.* · *Locutus est ergo Dominus ad Moysen* ·
*omnis qui procedit in virtute Israel* · *contra fontem*): none is a scripture quotation to collate.
**All 19 italic `*usque ad*` in my range follow an `etc.`** and are the abridgment formula,
rendered "*as far as*" without exception — the `etc.` splice test returns 19 for 19, and no
look-alike hides inside an italic span. The instrument was checked before this was reported: a raw
`usque` grep over the three files returns **29**, of which only 19 are the formula. The other ten
are *ad septimum usque pervenias* @0441B (postposed *usque*, "as far as the seventh"),
*pervenientes usque ad montem altissimum* @0445A and *tendunt fines usque ad Sephama* @0445B —
three ordinary, unitalicised uses rendered by sense — plus *eousque* @0440B, *usquequo* @0441C and
@0442B, *usque eo* @0441D, and *Hucusque* @0442B and @0443C, which are different words and must not
be swept in with the formula.

## 6. Renderings, subjects supplied, and things a blind reader will stop at

- **The station lemmata.** *In X* is rendered **"At X"** throughout (At Rethma, At Remmomphares, At
  Lebna, At Ressa, At mount Sepher, At Arada, At Salmona, At Dibongad, At Asiongaber), *In finibus*
  as "In the borders" and *In desertum* as "Into the desert". ⚑ **Flagged for the merge:** chunks
  0022 (another stint) carries the same construction from VERS. 5 onward and may have chosen
  differently; this note exists so the merge can normalize rather than guess.
- **@0441B `habenti`.** Rendered "for him that hath power" — a flat dative, which does not construe
  and is not meant to. The Vulgate genitive is in the `[var:]` and nowhere in the running text.
- **@0442A `*Jetebathae.*`** Migne prints the lemma in a genitive/dative form where the station is
  *Jetebatha* (Nm 33:33) and his own gloss two words later reads *Jetebatha interpretatur bona*.
  A proper name's case ending has no English exponent (Pattern 9's class), so it is rendered
  "*Jetebatha.*" and logged here rather than marked.
- **@0441A `Seman`.** The lemma is *Hesmona* (VERS. 29) and the Origen gloss beneath it says
  *Inde ad **Seman** venitur*. Migne's; rendered as printed, no reconciliation attempted.
- **@0440D `Methcha`** against the Vulgate's *Methca* (Nm 33:28); Migne's spelling, both witnesses,
  rendered as printed.
- **@0442B `decimas octavas continet mansiones`.** Rendered literally, "contains the eighteenth
  stations". It does not read well; *decimas octavas* is an ordinal where the sense wants eighteen,
  and "contains eighteen stations" would be a silent repair of Migne's own Latin. Both witnesses.
- **@0442D–0443A `Alius enim in valle, alius in campis, alius moritur in monte…`.** The verb
  *moritur* stands only in the third member and governs all four. English cannot open a series with
  no verb, so "dies" is placed in the first member and the printed position is recorded here.
- **@0443A `Aaron, plangitur,`.** Migne prints a comma between subject and verb. An English comma
  in that slot is simply an error rather than a preserved oddity, so it is not carried; the printed
  comma is recorded here instead. Every sentence-level mark in the range is carried 1:1 (colons
  33/33, semicolons 13/13, question marks 2/2, exclamation 1/1 on chunk 0023; 12/12, 8/8 on 0024;
  4/4, 3/3 on 0025 — counted with markers stripped).
- **@0446A `VERS. 28.` printed BEFORE `VERS. 26.`** — verified on the plate, both columns of p.228.
  Migne's ordering, reproduced as printed and not reordered (and `VERS. 26.` in fact addresses
  Nm 35:33). Nothing machine-readable consumes a `VERS.` number.
- **@0446A** *quia humanum genus peccando sibi mortem intulit post mortem veri sacerdotis … accepit*
  — two finite verbs with no connective and no mark between them (plate confirms: no comma after
  *intulit*). The English carries the asyndeton rather than supplying a semicolon.
- **@0445D — a full stop our TEI lacks.** The archive plate prints `… nec habet vitam aeternam
  (I Joan. III). Hic secundum Exodum …`; our TEI runs the two sentences together with no mark. The
  English carries the stop, because English prose cannot run them together, and the divergence is
  filed in the pending-patch file — ⚠ marked there as resting on **one** witness, since I did not
  fetch Gallica for a full stop and a period is exactly the mark ink adds and removes most readily.
- **@0446D `complacet; sibi solemnitatem agit`.** Migne's semicolon between the two halves of one
  clause; carried, per Pattern 8, though it reads oddly.
- **Subjects supplied.** *venitur* / *applicatur* impersonal passives are rendered "one comes",
  never "he comes", except where Migne himself has a personal subject (*venit in Gadgad* @0441D,
  *applicuerunt* @0442B). At 0444A–B the subject of *transit … abscedit … non invenitur* is
  **anima** from the *Ubi enim … anima transierit* clause above, so the English carries "it", not
  "he" — the same slot that produced Ruth's worst site.
- **Vocabulary axes.** *turba* → **crowd** and *multitudo* → **multitude**, and they stand four
  words apart at 0439A (*omnem turbam credentium* … *Multitudinis credentium*), which is exactly the
  pair the axis exists for. *gentes* → **nations** at 0442B (*multitudinem gentium*, generic, no
  Judaei/gentes opposition in view) but → **Gentiles** at 0446C, where Rabanus sets *credentium
  Judaeorum* against *doctori de gentibus* in one sentence; *gentilis* → **Gentile** @0446B per the
  axis. *mysterium* → mystery (0441C, 0443B) and *sacramentum* → sacrament (0445D), 1:1.
  No *natio*, no *daemonium*, no *ethnicus* in the range. ⚑ Instrument checked before reporting:
  a raw `\bturba` grep in my range also catches nothing spurious, and `natio` matches only
  *interpretatur*-type strings, i.e. none.
- **Register.** The commentator's own verbs are not archaised (*dicit* → "says", *ait* → "says");
  `-eth` forms appear only inside quoted scripture (*layeth*, *hateth*, *soweth*, *doth*).
  *thou/thee/thy* renders singular address throughout (0439C *Vides*, 0440B–D *Venisti · ascendisti
  · confiteris*, 0441B *super te · locum tuum*, 0441C *fueris eruditus · scieris*, 0441D–0442A
  *transieris · applicabis*, 0442B *venias · te*); *you* renders the plurals at 0444C
  (*Transieritis · dabitis*), 0446A (*Ne polluatis*) and 0446B (*Attendite … faciatis*).

## 7. Negations — named host by host (test 2 / 2a)

Every printed negative in the range, with the single Latin word it attaches to:

`non superbiat` @0440B → *superbiat* ("may not be proud") · `nec … vidit, nec … audivit` @0439D →
the two verbs · `nec ab isto unquam recedit` @0440A → *recedit*, and **both** negatives are carried
("nor does he ever depart"), not collapsed into one English "never" · `non debemus esse otiosi`
@0440D–0441A → *esse otiosi* · `ne … se ingerat` @0440C → *ingerat* · `nec minimum quidem …
praetereat` and `nec unum iota, aut unus apex … otiosus` @0441C → *praetereat* and *habeatur* ·
`Non enim possumus … nisi … interfecerimus, nec parcat manus nostra` @0441C–D → *possumus*, then
*parcat* · `nec decorae esse nec plenae` @0441D → the two predicates, **not** the verb ·
`non nisi post tentationum experimenta venitur` @0442A → *venitur* · `non confundar` @0442A →
*confundar* · `Et non dixerunt` @0442B → *dixerunt* · `non ponuntur` @0442B → *ponuntur* ·
`nec aliter expedit` @0442C → *expedit* · `non desperemus salutem, sed iterum pugnemus` @0443A →
*desperemus*, and the `sed` correlative confirms the host · `quae non licet homini loqui` @0443B →
*licet* · `ne audiamus` @0443C → *audiamus* · `quamvis non invenerimus … non dubitamus` @0443C →
*invenerimus*, then *dubitamus* (⚠ the archive plate prints `nou` for the first of these; refuted
at Gallica, §2 — had it been believed, the English would have lost a negative in a concessive
clause where nothing downstream would have caught it) · `nisi contempta fuerint … non possumus`
@0444A → *contempta fuerint*, then *possumus* · `qui non inveniebatur` and `non invenitur in ullo
saeculari actu` @0444A–B → *inveniebatur*, *invenitur* · `non invenitur ejus memoria` @0444B →
*invenitur* · `sine fine perseverat` @0444B → *perseverat* · `Nihil enim tam periculosum` @0444B →
*periculosum* · `ne … pervadantur` @0446B → *pervadantur* · `ne … perdatur` @0446B → *perdatur* ·
`ne … detrimentum patiatur` @0446C → *patiatur* · `Non debet esse schisma` @0446C → *esse schisma* ·
`nec habet vitam aeternam` and `nec revocatur … nisi` @0445D–0446A → *habet*, *revocatur* ·
`Et nisi … occidantur … nullo modo mundabitur, nec … habitabit` @0446A–B → *occidantur*,
*mundabitur*, *habitabit*.

⚑ **Test 2a trigger population** (a negative on a verb with a quantifier or correlative adjacent)
fires at three sites in the range, and all three were proved from the structure, not from what read
well: `nec decorae esse nec plenae` @0441D (the correlative `nec … nec` puts both negatives on the
**predicates**, not on *videantur*); `nec minimum quidem mandatum praetereat` @0441C (the negative
is on the verb, and `quidem` intensifies *minimum* — "not even the least"); `non nisi post
tentationum experimenta venitur` @0442A (the `non nisi` is a unit governing the whole temporal
phrase, not the impersonal verb alone, hence "not save after").

## 8. Test 4 — does the English ASSERT what he asserts?

Read back paragraph by paragraph with the counts already clean. Two places where a smooth English
sentence would have said something Migne does not, both left rough on purpose:

- @0441B the Ecclesiastes citation (§4.2): the smooth reading is the Vulgate's genitive, and the
  smooth reading is the one that is not on the page.
- @0442B *decimas octavas … mansiones* (§6): "eighteen stations" is the smooth reading and is a
  repair of Migne's ordinal.

And one place where the printed text is odd and is **not** a defect: @0442D *alius in monte, alius
in monte montis* — "on the mountain of the mountain" is Origen's own figure for a further ascent,
not broken type; both witnesses, no marker.

## 9. What I did NOT do

- No `[sic:]` anywhere. Fourteen of fifteen candidates were the archive copy's ink and the
  fifteenth is our own file's; neither class licenses a public claim against Migne's type.
- No conjecture (`[cj:]`). No site in the range meets Pattern 18's bar: nowhere does a real printed
  word give faithful English that asserts something the author did not. `habenti` @0441B comes
  closest and is handled by `[var:]`, because the rival reading is a **received text**, not a
  conjecture of ours.
- No `[ed:]`. Nothing in my range is text the digitization lost that the plate carries, apart from
  the two punctuation sites in the pending-patch file, which are patch questions, not holes.
