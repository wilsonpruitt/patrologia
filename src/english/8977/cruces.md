# 8977 · *Glossa ordinaria*, **Apocalypsis B. Joannis** — cruces

PL 114, cols **0709C–0752B** · 20 chunks · 16,670 Latin words. Attributed by Migne to
Walafrid Strabo; in fact **Anselmus Laudunensis et schola**. Translated 2026-08-28 by four
Opus stints of five chunks each, none of which could see the others.

**This file is the four-way MERGE.** The range files (`cruces-0000.md`, `cruces-0005.md`,
`cruces-0010.md`, `cruces-0015.md`) are preserved below, unedited, each under its own
heading. This head is the work-wide layer: what was reconciled ACROSS the four ranges, and
what a later sweep must not churn.

## §0a · Apparatus, counted from the English and not summed from four reports

**34 `[var:]` · 2 `[sic:]` · 2 `[cj:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]`** — counted from the
English after the plate reads and the blind reads, not summed from the stints' own reports.
Three markers the stints took were **withdrawn** on evidence (§0b, §0g); one silent
conformation the stints missed was **repaired** (§0g).

`verify-english.mjs 8977` → **OK, 20 chunks**, columns/notes/sections aligned, no duplicate
paragraphs. `scan-raw-markers.mjs` → no marker rendered as literal bracket text. One ratio
warning stands on 0000 (1.72×), reviewed by its stint clause-by-clause: Jerome's prologue is
compressed synthetic Latin, and no padding was found.

## §0b · ✅ THE PLATE READ — PL 114 p. 377, and why it was worth one page

Two of the range files independently flagged a **single-letter difference on a real word in a
lemma** and correctly declined to settle it from the file. Both sites fall on **one page**
(cols 743/744; corner numbers read before the crop, page map `(column + 11) / 2` calibrated
this session on p. 381 = cols 751/752). The plate answered them **in opposite directions**:

- **0743C — *lignis* was OURS.** Migne prints ***Sicut flamma ignis***. Corpus Corporum
  inserted an `l`, manufacturing "a flame of timber". There was therefore **no divergence
  from Apc 19:12 at all**, and the `[var:]` had asserted one on the strength of our own
  digitization's error. Marker **withdrawn**, English now reads *As a flame of fire.*, TEI
  patched (`data/tei-patches/8977.json`), work re-chunked. The gloss corroborates from inside
  the work: *comburit … accendit … illuminat* is about fire and never mentions wood.
- **0744C — *vide* is MIGNE'S.** He prints ***Et vide sedes***, the imperative, where the
  Clementine has *Et vidi sedes*. The `[var:]` **stands, confirmed** — and his own gloss
  below re-quotes *vidi* three times (*Ligato diabolo, **vidi** solutos fideles … **Vidi** in
  tempore ligationis … **vidi** statim in gloriam intrare*). The plate contradicts its own
  lemma, which is exactly what this edition exists to show, and is not ours to tidy.

- **0733B — the `[cj:]` DISSOLVED, on a second page (p. 372).** The blind reader raised it as
  an observation rather than a finding: the conjecture sat oddly for a defect that was purely
  an anchor splitting a word. The plate shows why. **Migne prints *infructuosos*, hyphenated
  across a line break** (*in-* / *fructuosos*), and Corpus Corporum **failed to rejoin it** —
  the mirror image of the 8946 *Salomomonis* case, where the same digitization rejoined a
  hyphenated word and duplicated the syllable. Our anchor then landed in the gap. The
  conjecture was right in substance (*super arenam* requires the privative) and **wholly
  unnecessary**. Word made whole, anchor kept at the line turn where band B falls, marker
  withdrawn, TEI patched. ⚑ Corroborated from the source side as 8946 was: the TEI preserves a
  newline on **both** sides of the `<pb/>`, which is where the printed hyphen and the line turn
  stand. ⭐⭐ **THE GENERAL RULE: an anchor that appears to fall INSIDE a word is a REJOIN
  candidate before it is a conjecture candidate. Check the plate for a hyphen before reaching
  for `[cj:]`.**

⭐ **The lesson worth carrying:** these two were indistinguishable from the file — same class,
same shape, flagged by the same kind of reader in the same breath. Corpus frequency and
Vulgate collation could not separate them. Only the plate did. **A single-letter difference
on a real word in a lemma is a plate question, always, and it is cheap when the volume's page
map is already calibrated.**

## §0c · VOCABULARY RECONCILED ACROSS THE FOUR RANGES — the merge's real work

The four ranges were diffed for the book's load-bearing vocabulary before merging. **No
convention drift was found**, and the apparent splits are distribution by content, not
disagreement: *candlestick(s)* only in chunks 0000–0004 (Apc 1–2, where they occur),
*harlot* only in 0015–0019 (Apc 17–19), *plagues* and *vials* only in 0010–0014 (Apc 15–16),
*beast* only from 0010 on (Apc 13 forward). Counted with word boundaries, after a first pass
with bare substrings gave a false *seat*/*throne* split by matching *seated*.

**One real distinction, and it is deliberate — do not flatten it.** *sedes* is rendered
**"throne"** where it is God's throne of judgment (the dominant sense, chs. 4–5, 20) and
**"seat"** where it is a dwelling or a base: *sunt sedes Dei* → "who are the seat of God"
(0718B, of the subjects in whom God rests) and *sedem bestiae* → "upon the seat of the
beast" (Apc 16:10). English has no one word that carries both, and the gloss turns on the
difference at both sites. A later sweep that normalizes *sedes* to a single English word
will destroy an argument Migne is making.

## §0d · STANDING CHECKS — the negatives, recorded so they count

- ***deservit* / *deserit*: CHECKED ZERO across all twenty chunks**, verified mechanically
  over the whole Latin work, not inherited from the stints' individual reports. Neither
  spelling, nor any *deservi-* / *deseru-* form, occurs anywhere in 0709C–0752B. This pair
  has fired in both directions elsewhere in the series, so the zero is worth having on record.
- **No polarity defect was found by any of the four stints**, in either direction. The
  negation work that did land was hosting, not presence — see §0e.
- Migne's own `( sic )` does not occur in this work; the two `[sic:]` are ours, both on
  non-words, both with the corrupt word Englished beside the marker (7a⁗).

## §0e · WHAT A BLIND READER SHOULD GO TO FIRST

Listed here because the range files each named their own, and a merged list is what the
step-4a reader actually needs. **This section is NOT to be given to that reader** — the
runbook forbids showing the cruces before findings are formed; it is for whoever adjudicates
afterwards.

1. **0717C** — the lemma counsels buying tried gold; the gloss says *talia opera **non**
   perducent ad salutem*, contradicting its own lemma. Rendered as printed with the negation
   intact. Likeliest explanation is a gloss slipped from Apc 3:17, but relocating it would be
   rearranging Migne's page.
2. **0733B** — `[cj: *fructuosos*; read *infructuosos*]`. A negative **hidden inside a column
   split** (`in [0733B] fructuosos`); *super arenam* requires the privative. The class to
   watch generally: any anchor falling inside a word.
3. **0745A** — `[cj: *augentur*; read *anguntur*]`.
4. **0719B** — `[cj: *Augusti*; read *Augustinus*]`, settled by the corpus (this work prints
   *Augustinus* at chunk 0019 and *Augusti* nowhere else).
5. **0739D** — *In die ortus **sui*** where Ez 16:4 has *tui*, and Migne's own next lemma
   keeps the second person four words later.

## §0f · PLATE-READ CANDIDATES STILL OPEN

Carried as printed, no marker, awaiting a plate that has not been bought. All are in PL 114
and the page map is calibrated, so each costs one render.

| col | reading | page | why it is worth reading |
|---|---|---|---|
| 0712D | *Ephesas* | 361 | the book spells it *Ephesus* two columns away |
| 0725B | `VERS. 3--` | 368 | the one address in the work printed without its period |
| 0731–0735 | *tundamentum* (1 vs 107 *fundamentum*), *centecimum* (1 vs 21), *corrrigitur* (1 vs 8) | 370–373 | three non-words; a `[sic:]` on any of them would blame Migne for what may be the digitization |
| 0745B | *Vitrum per lucidum* | 378 | split word — Migne's or ours, undecidable from the file |
| 0751B | no terminal stop on the last sentence of CAPUT XXI | 381 | already rendered without one per Pattern 8; the plate would confirm |

⚑ **0751B is already answered and needs no render** — p. 381 was read this session for the
plate spot check, and Migne indeed sets no terminal mark there. Recorded so it is not bought
twice.

---


# RANGE FILE — chunks 0000–0004 · cols 0709C–0719D

*Preserved unedited from `cruces-0000.md`.*

## 8977 · *Glossa ordinaria*, **Apocalypsis B. Joannis** — cruces, chunks 0000–0004

PL 114, cols **0709C–0719D** (Prologue + Argument + CAPUT I–IV). Range file: this covers
chunks 0000–0004 only. `cruces.md` is the four-way merge and is written once at the end;
nothing here is to be duplicated into it by hand before that merge.

Attributed by Migne to Walafrid Strabo; in fact **Anselmus Laudunensis et schola**.
Conventions followed: `src/english/8968/cruces.md` §1 (Ruth, the Glossa pilot) and
`GLOSSA-NT-AGENT-BRIEF.md`.

**Apparatus taken in this range: 18 `[var:]` · 1 `[cj:]` · 0 `[sic:]` · 0 `[d:]` ·
0 `[ed:]` · 0 `[nt:]`.** Marker parity against the Latin twins: column anchors 3/14/7/8/8,
`[n:]` notes 0/1/4/7/2, italic spans 0/78/39/50/42, question marks 0/0/2/0/0 — all exact.
Punctuation compared **band by band** (colons, semicolons, `?`, `!`, guillemets) across the
verified anchor partition: zero mismatched bands after four supplied semicolons were removed
(see §4). Zero guillemets in either language.

---

### §1 · THE 7a″ DELIVERABLE — every lemma in cols 0709C–0719D, collated

Collated against `sources/vulgate/clementine-flat.txt`, cited from
`sources/vulgate/clementine/Apc.lat` etc. **This section lists what was checked, not only
what was found** — the agreements are the evidence that the divergences were looked for.

### 1a. Divergences that took a `[var:]` — 18, one per row

| col | Migne prints | Clementine | why material |
|---|---|---|---|
| 0710D | *In his quae vidit.* | Apc 1:2 *quaecumque vidit* | different construction; the gloss expounds **in his** twice over (*In his quae corporaliter vidit*) — the phrase it glosses is not the Clementine's |
| 0710D | *audient,* | Apc 1:3 *audit* (sg.) | the gloss's whole point is the plural: *in hoc notat auditores, **quia plures*** |
| 0711B | *Et fecit nos Deo nostro regnum.* | Apc 1:6 *et fecit nos regnum, et sacerdotes Deo et Patri suo* | *Deo nostro* attached to *regnum*, and *Patri suo* absent |
| 0711B | *Nos **putabamus** quod ipse esset redempturus Israel* | Lc 24:21 *nos autem **sperabamus** quia…* | thought ≠ hoped, and the gloss adduces the verse **for despair** (*propter desperantes*) |
| 0714A | *primus et novissimus, fui mortuus et vivus.* | Apc 1:17–18 *primus, et novissimus, et vivus, et fui mortuus* | the two members reversed |
| 0714C | *Sed hoc habes **bonum**.* | Apc 2:6 *Sed hoc habes, quia odisti…* (no *bonum*) | the gloss turns on the added word: *tamen non desperes, quia **habes bonum*** |
| 0715A | *Quoniam nec oculus vidit, nec auris audivit* | 1Cor 2:9 *Quod oculus non vidit, nec auris audivit* | recast opening; the negative moves from *vidit* onto *oculus* |
| 0715A | *Gemma **gravissima** exspectatio praestolantis* | Pr 17:8 *Gemma **gratissima*** | weight ≠ acceptableness, and Migne's reading is the one the gloss uses — *corpus **solidum*** in the next clause |
| 0715D | *Si videris mulierem ad concupiscendam eam* | Mt 5:28 *omnis qui viderit mulierem ad concupiscendum eam* | second person for third; gerundive for gerund |
| 0716A | *qui in uno offendit, omnium reus est* | Jac 2:10 *Quicumque autem totam legem servaverit, offendat autem in uno, factus est omnium reus* | the protasis about keeping the whole law is gone |
| 0716B | *quodcunque petieritis Patrem in nomine meo, **dabit vobis*** | Jo 14:13 ends *hoc faciam*; *dabit vobis* is Jo 16:23 | a **conflation**, and Migne's own siglum reads (Joan. XIV) |
| 0716C | *Non possumus quae vidimus non loqui* | Act 4:20 *Non enim possumus quae vidimus **et audivimus** non loqui* | *et audivimus* dropped — in a gloss about **speaking** what is seen |
| 0717C | *Praeceptum Domini illuminans oculos* | Ps 18:9 *praeceptum Domini **lucidum**, illuminans oculos* | *lucidum* dropped from a gloss whose subject is *veri luminis claritatem* |
| 0718A | *quae oportet fieri **cito** post haec* | Apc 4:1 *quae oportet fieri post haec* (no *cito*) | *cito* carried in from Apc 1:1; the gloss offers it as a distinct reading |
| 0718A | *post haec fui in spiritu.* | Apc 4:2 *Et **statim** fui in spiritu* | Migne prints it as a rival to his own *Statim fui* lemma seven lines later |
| 0718B | *Circumamicti **stolis** albis.* | Apc 4:4 *circumamicti **vestimentis** albis* | *stolis* is Apc 7:9's word, not 4:4's |
| 0719C | *ut **ei** omne genu flectatur* | Phlp 2:10 *ut **in nomine Jesu** omne genu flectatur* | the naming clause replaced by a pronoun |
| 0719C | *Et quod factum est, in ipso vita erat* | Jo 1:3–4 punctuates *…factum est nihil, quod factum est. In ipso vita erat* | the **ancient punctuation crux** of John 1:3–4; Migne's clause-division makes "that which was made" the subject of *in ipso vita erat* |

Distribution: 5 in chunk 0001, 4 in 0002, 4 in 0003, 5 in 0004.

### 1b. Divergences examined and DECLINED, with the reason — the marker would have been noise

- **0709C `*Joannes septem Ecclesiis quae sunt in Asia. Quam dedit.*`** — one italic span
  joining Apc 1:4's opening to Apc 1:1's *Quam dedit*. Both agree with the Clementine
  verbatim; the join is the gloss's own citation practice, not a textual variant. No marker;
  the span is kept as **one** span in the English, as Migne sets it.
- **0709D (prologue) `Ego sum Alpha et Omega, initium et finis`** — agrees **verbatim** with
  Apc 21:6. It is *not* Apc 1:8 (*principium et finis*), and reading it as a divergent 1:8
  would have been the error. Checked clean, no marker. Note it is **not italicized** in the
  Latin and is therefore not italicized here.
- **0712A `*Alpha, principium.* / *Omega, finis.*`** — Apc 1:8 reads *alpha et omega,
  principium et finis*. Migne re-pairs the four words into two glossable couples. A
  lemma-splitting device, not a variant reading.
- **0711D `*Videbit omnis terra talem.*`** — Migne himself labels it *Alia translatio habet*.
  His own apparatus has already adjudicated it; a `[var:]` would restate what the page says.
- **0713B `aurichalco Libani`** — likewise introduced *In alia translatione habetur*. Declined
  for the same reason. Not italicized in the Latin; not italicized here.
- **0713C `*Et ex ore.*`** vs Apc 1:16 *et **de** ore*. Preposition only; nothing in the gloss
  turns on it. Cruces, no marker.
- **0716A `Dedistis mihi manducare et bibere`** vs Mt 25:35 *dedistis mihi manducare : sitivi,
  et dedistis mihi bibere*. A **condensation**, not a divergent wording: every word Migne
  prints stands in the verse in that order. Pattern 14 asks for a sense-changing divergence
  and there is none. ⚠ Note the 7a″ trap here and that it was avoided: *manducare* is rendered
  "to eat" because that is what *manducare* means, **not** by the route that produced the
  7914 *manum* → "to eat" defect.
- **0716A `charitatem autem non habeam, nihil sum`** vs 1Cor 13:2 *caritatem autem non
  habuero*. Present subjunctive for future perfect; *charitatem/caritatem* is orthographic.
  Not material. ⚠ **But see §3 on the siglum**, which is a separate finding.
- **0717D `*Ecce **ego** sto ad ostium et pulso*`** vs Apc 3:20 *Ecce sto ad ostium*. An added
  emphatic pronoun; the gloss (*Exspecto, vel inspiro*) does not use it. Cruces, no marker.
- **0714A `*Et angelo.*`** at Apc 2:1, where the Clementine has bare *Angelo Ephesi ecclesiae
  scribe*. Migne's *Et* matches his own 2:8 and 2:12. Cruces, no marker.
- **0715A `*Et dabo ei.*`** vs Apc 2:17 *et dabo **illi***. Pronoun only.
- **0715A `Abscisus est lapis sine manibus`** vs Dn 2:34 *abscissus est lapis **de monte** sine
  manibus* (and Dn 2:45 in the other order). *de monte* dropped, *Abscisus* with one *s*. The
  gloss argues **only** from *sine manibus*, so nothing turns on the omission. Cruces, no
  marker. ⚠ Migne's own siglum reads **(Dan. I)** for what is Daniel 2 — passed through
  verbatim, per convention 4; it is not ours to correct.
- **Orthographic only, all checked and all declined:** *tanquam* for *tamquam* (five sites,
  0713A–0713B), *coelo* for *caelo* (0716D, 0718A), *charitatem* for *caritatem* (0714C,
  0716A), *Pathmos* for *Patmos* (0709C, 0712B — Migne is consistent in both places),
  *aurichalcum* for *auricalco* (0713B), *chrystallus* for *crystallo* (0718D).

### 1c. Lemmata checked and found to agree with the Clementine EXACTLY

Apc 1: *Apocalypsis Jesu Christi* · *Quae oportet fieri* · *Cito* · *Qui testimonium
perhibuit* · *Verbo Dei* · *Beatus* · *Qui legit* · *Servat ea* · *Septem ecclesiis* ·
*septem* · *In Asia* · *Gratia vobis* · *Qui est et qui erat* · *Throni* · *Testis fidelis* ·
*Primogenitus mortuorum* · *Princeps regum terrae* · *et sacerdotes* · *Ecce venit* · *Cum
nubibus* · *Et videbit eum* · *Omnis oculus* · *Plangent* · *plangent se* · *Ego sum* · *Ego
Joannes* (×2) · *Frater vester* · *in Christo* · *Propter verbum Dei* · *In Dominica die* ·
*Audivi post me vocem* · *Quod vides, scribe* · *Epheso* · *Et conversus sum* · *Septem
candelabra* · *Aurea* · *Similem Filio hominis* · *Podere* · *Praecinctum ad mamillas* · *ad
mamillas* · *Capilli erant candidi* · *Nix* · *Oculi* · *Et pedes* · *In camino ardenti* · *Et
vox illius tanquam vox aquarum multarum* · *Stellas* · *Sicut sol lucet in virtute* ·
*Cecidi* · *Tanquam mortuus* · *Dexteram suam* · *Noli timere* · *Sum vivens* · *Et habeo* ·
*Mortis et inferni* · *Quae oportet fieri post haec* · *Sacramentum*.

Apc 2: *Ephesi Ecclesiae* · *Septem* · *Non potes sustinere* (×2) · *Tentasti eos qui se* ·
*Sustinuisti propter nomen meum* · *Et non defecisti* · *Sed habeo adversum te quod
charitatem* · *Movebo candelabrum* · *Facta Nicolaitarum* · *Qui habet aurem* · *Smyrnae* ·
*quasi myrrha* · *Haec dicit primus* (×2) · *Aliquos ex vobis* · *Ut tentemini* · *Diebus
decem* · *A morte secunda* · *Rhomphaeam* · *Non negasti fidem meam* · *Balaam* · *Doctrinam
Nicolaitarum* · *Manna* · *Et in calculo* · *Scriptum* · *Novi opera tua* · *Fornicari* ·
*Non mittam*.

Apc 3: *Et angelo Ecclesiae Sardis* · *Scio opera tua* · *Esto vigilans* · *Non enim invenio
opera tua plena* · *In mente ergo habe* · *Audieris* · *Non inquinaverunt vestimenta sua* ·
*Non delebo* · *Induravit Dominus cor Pharaonis* (Ex 10:20, less its opening *Et*) · *De libro
vitae* · *Confitebor nomen ejus* · *Venite, benedicti Patris mei* (Mt 25:34) · *Haec dicit* ·
*Claudit* · *aperit* · *Ecce dedi coram te* · *Ostium* · *Judaeos* · *Hunc nescimus* (Jo 9:29,
a fragment of *hunc autem nescimus unde sit*) · *Mentiuntur* · *Ecce faciam illos ut veniant*
· *Scient* · *Servasti verbum patientiae meae* · *Ab hora tentationis* · *Tentare habitantes
in terra* · *Ecce venio cito* · *Columnam in templo* · *Non egredietur* · *Novae* · *De coelo*
· *Testis* · *Et verus* · *Neque frigidus es, neque calidus* · *Utinam frigidus* · *Incipiam
te evomere* · *Ex ore meo* · *Dives sum* · *Suadeo tibi emere a me aurum ignitum probatum* ·
*Non appareat confusio* · *Collyrio* · *Sedere mecum in throno meo* · *Sicut et ego vici et
sedi cum Patre meo in throno ejus*.

Apc 4: *Post haec vidi* · *In coelo* · *Tanquam tubae loquentis mecum* · *Ostendam tibi* ·
*Statim fui* · *Et ecce sedes* · *Sedens* · *Qui sedebat* · *Similis erat aspectui* ·
*Jaspidis et sardinis* · *Smaragdinae* · *Viginti quatuor seniores* · *Coronae* · *De throno*
· *Septem spiritus* · *In conspectu* · *Mare vitreum* · *In medio* · *Sedis* · *Quatuor* ·
*Animalia* · *Plena oculis* · *Leoni* · *Et quatuor animalia singula eorum habebant alas
senas* · *Alas senas* · *In circuitu et intus* · *Plena sunt oculis* · *et in circuitu* · *Qui
venturus est* · *Et benedictionem* · *Et adorabant* · *Dicentes* · *Creasti omnia* · *Propter
voluntatem tuam* · *Erant* · *Creata sunt*.

**Not scripture, so not collated** (Hebrew-name etymologies and the gloss's own re-cuts):
*voluntas mea* · *lapsus profundus* · *consilium* (0712D, 0714B) · *voluntas* (0714B) ·
*canticum* (0714D) · *principium pulchritudinis* (0715D) · *plena sunt oculis intus* (0719B,
Migne's own re-division of Apc 4:8 for the gloss, not a variant).

---

### §2 · THE ONE CONJECTURE — 0719B, *Augusti*

Migne prints, of the sixth wing of the four living creatures:

> *sexta, quorumcunque decreta, ut **Augusti**, Gregorii, Ambrosii, per quos Ecclesia alta petit*

*Augusti* is a perfectly good Latin word — the genitive of *Augustus* — so nothing is broken
and Pattern 12 has nothing to wrap. But the faithful English **asserts something false**: it
makes the decrees of the emperor Augustus a wing of the Church, standing between Gregory and
Ambrose in a list of doctors, and it is *decreta* of the Fathers *a quibus praedicatores
accipiunt totius praedicationis fundamentum*. Pattern 18 exactly.

⭐ **The corpus is its own control and it is decisive here: this same work prints *Augustinus*
at chunk 0019, and *Augusti* nowhere else.** One occurrence of the truncated form against a
full one in the same plate, in the same company of Fathers.

Marker taken, additive, Migne's word kept and rendered:
`of Augustus [cj: *Augusti*; read *Augustini,* "of Augustine"]`

**The rival considered and rejected:** that Migne means the civil *decreta Augusti* — Roman
imperial law as a source of ecclesiastical discipline, which is not absurd in itself. It loses
on the sentence's own structure: the three genitives are a single series governed by *per quos
Ecclesia alta petit* and *a quibus praedicatores accipiunt … fundamentum*, and neither
predicate is sayable of imperial legislation in a list whose other two members are Gregory and
Ambrose.

---

### §3 · CRUCES — logged, no marker fired

Each of these was examined and left as printed under Pattern 7. **A crux asserts nothing about
the plate;** where I could not settle a thing from the file, the crux is where it stays.

### 3a. Referents supplied, and what decided them

- **0709C (prologue), *commendasset* / *asciverat* / *tradidisset*.** Three unexpressed
  subjects in one sentence, and they are **not** the subject of the verb before them.
  *recumberet* is John; *commendasset*, *asciverat* and *tradidisset* are all **Christ** —
  *matrem propriam* and *virginem* are his mother, and *ad crucem astanti soli* is John in the
  dative. Rendered so. This is the class the brief names as dominant; naming it here is the
  record that it was decided rather than defaulted.
- **0709C, *ab eodem***: the Apocalypse *praeostensa* by **Christ**, not by John — *a Christo
  electus atque dilectus* is the sentence's own antecedent for *idem*.
- **0714A, *requirit***: *Id est episcopo scribit, de manu cujus peccata subditorum
  **requirit**, et sine cujus consensu … non praesumit **ipse Joannes***. Two readings both
  construe: the subject of *requirit* is God/Christ (who requires the sins at the bishop's
  hand), or John. ⚠ **The explicit *ipse Joannes* in the second clause is evidence for the
  first** — Migne names John only where the subject changes. **The English keeps a bare "he",
  which is exactly as under-determined as the Latin**, so nothing is decided in the text; this
  entry is the record that the ambiguity is real and was not resolved silently.
- **0714B, *(qui lapsi fuerant)***: the parenthesis attaches to the implicit subject of
  *corrigantur*, i.e. those to be corrected, **not** to *quorum operibus Deus delectatur* in
  the clause before. Rendered "that by the example of these they (who had fallen) may be
  corrected", keeping Migne's parenthesis in his own position.
- **0718B, *quos hortatus est ad pugnam***: a plural relative with **no plural antecedent in
  its sentence** (*de quo* singular precedes it). Rendered literally as "whom he has exhorted
  to the fight". A dative *quibus* would construe; that is a conjecture and it stays here.
  ⛔ Not a `[cj:]`: Pattern 18's bar is that the English *asserts something false*, and this
  English asserts nothing at all — it is incoherent, and 18a's exception covers only a
  negation or a correlative gone wrong. This one is neither.

### 3b. Grammar the plate prints and English cannot mend

- **0714A, *ministri ejus sunt infernus***: plural subject, singular predicate nominative.
  Rendered as printed: "his ministers are hell, in whom he has a place." No English exponent
  for the mismatch, and no emendation to make.
- **0714D, *etiam canticum in quibus delectatur***: singular *canticum*, plural *in quibus*.
  Rendered "a song also, in which things he delights", carrying the plural.
- **0712C, *quae monuit communiter mittere ecclesiae Asiae … per quas***: *ecclesiae* is
  singular by form and *per quas* wants a plural (a dative plural would be *ecclesiis*).
  ⭐ English "by which" carries no number at all, so the rendering reproduces the Latin's own
  indeterminacy without choosing. Logged rather than fixed.
- **0718B, *In quibus sedet Deus et judicat, et etiam subditos***: *sedes* at Apc 4:2 is
  singular; *In quibus* is plural. English "In which" is number-neutral. *subditos* is an
  accusative object gapped off *judicat*; the English repeats the verb ("and judges also"),
  which is ordinary English gapping and adds no claim.
- **0712B–C, *in fervorem fidei* / *in perditionem Sodomae***: *in* + accusative where sense
  wants time or occasion. Rendered "unto the fervour of faith" / "unto the destruction of
  Sodom", literally, rather than smoothed to "at".

### 3c. Sentences that do not construe, or construe against their own neighbour

- **0711A, *Christus dedit haec mihi, beatus autem quia me acceperit*.** Elliptical: no subject
  for *beatus*, and a perfect subjunctive with no governing verb. Rendered as printed, "but
  blessed because he has received me." No conjecture offered; there are at least two (*beatus
  autem [est] qui…*, or a first-person *sum*) and nothing in the column chooses between them.
- **0711A, *quia nec longa mora laboris, et praemia vicina*.** A *nec … et* pair where sense
  wants *nec … et* to be *neque … sed* or a bare asyndeton. **The *nec* is carried**: "because
  neither is there a long delay of labour, and the rewards are near." It reads oddly. That is
  the point of Pattern 7a — I have not converted *nec* to "there is no" plus a smoothed second
  limb, which would hide the plate's own awkwardness.
- **0717C, *Suadeo tibi emere a me aurum ignitum probatum.* Quia talia opera non perducent ad
  salutem.** The gloss **contradicts its own lemma**: the lemma counsels buying tried gold and
  the gloss says such works do not lead to salvation. Rendered as printed, negation intact.
  ⚠ The likeliest explanation is that the gloss belongs to a neighbouring lemma (Apc 3:17's
  *dives sum* / *nudus*) and has slipped; but that is an editorial rearrangement of Migne's
  page and **Pattern 7 forbids it in the text.** Flagged here for a blind reader — this is the
  most conspicuous sense-defect in the range.
- **0712C, *Salomon, non reservaturus, sapientiam nocte suscepit*.** A bare future participle
  with no object. Rendered "Solomon, not about to keep it, received wisdom by night", the "it"
  supplied from *sapientiam* in the same clause and flagged here as supplied.
- **0717A, *quidam Eliae monitis legem spiritualiter impleturi, hostem credunt victuri*.** Two
  future participles, the second in an accusative-and-infinitive with the copula elided.
  Rendered "certain, being about to fulfil the law spiritually by the warnings of Elias,
  believe that they will vanquish the enemy." The construction is elliptical in the plate and
  is left elliptical.
- **0718C, *Per ruborem ejusdem*** — a *redness* predicated of an emerald, two clauses after
  its green is expounded. Real words, coherent syntax, odd content. Rendered as printed.
  ⚠ Raised under brief §4 only as a **negative**: nothing here reads suspiciously *tidy*, and
  no plate read is requested.

### 3d. Migne's own sigla, passed through and NOT corrected

Convention 4 governs: the sigla ride verbatim and passing one through is not endorsing it.
Three in this range are demonstrably wrong and are recorded rather than repaired.

- **0715A `[n: (Dan. I)]`** on a quotation of **Daniel 2** (2:34 / 2:45).
- **0716B `[n: (Jac. II)]`** stands after *charitatem autem non habeam, nihil sum*, which is
  **1 Cor 13:2**. The James 2:10 matter is the *preceding* quotation in the same sentence, so
  the siglum has either slipped one clause or is meant to cover both.
- **0716B `[n: (Joan. XIV)]`** on a quotation whose second half is **Jo 16:23** — the
  conflation already marked `[var:]` at that column.

### 3e. Words examined for the digitization-alteration class (brief §4), and the finding

- **0712D, *Ephesas*.** Migne prints *Epheso.* as the lemma, then glosses **Ephesas *voluntas
  mea* interpretatur**. ⭐ **The work's own control refutes any tidying instinct**: at 0714B
  the same etymology is introduced as *Ephesus secundum bene persistentium partem* — so the
  book spells the name *Ephesus* two columns away and *Ephesas* only here. Rendered **as
  printed** ("Ephesas is interpreted…"), because Pattern 7 governs a proper-name form exactly
  as it governs any other. Not a `[sic:]`: *Ephesas* is a well-formed token, not a non-word,
  and Addendum A is explicit that a real, well-formed word is Migne's until a plate says
  otherwise. **A plate read of col. 0712D would settle it and is cheap.**
- ⭐ **Recorded negatives.** *deservit* / *deserit*, the standing confusion pair for this
  series: **grepped across the whole of 8977 and it occurs zero times, in either spelling.**
  Nothing to check. Likewise no split or fused runs (Pattern 10) anywhere in cols 0709C–0719D,
  no `( sic )` of Migne's own, no dittography, and no non-word of any kind — which is why this
  range fires **no `[sic:]` at all**. A checked zero is worth having; the alternative is a
  reader who cannot tell this range from one nobody read.

---

### §4 · SELF-AUDIT — the tests the brief requires, and what each returned

- **Test 1 (a `[sic:]` must not swallow the word it marks).** Vacuously clean: **no `[sic:]`
  in this range.** The `[cj:]` at 0719B is additive by construction — "of Augustus" stands in
  the running text and the bracket is beside it, so stripping every marker leaves a readable
  sentence. Stripped and read aloud; no stranded article or preposition anywhere in the five
  chunks.
- **Test 2 / 2a (name the host of each negative).** All 84 printed negatives in chunks 0001–4
  walked one by one, each mapped to the single Latin word it attaches to. **Five sat in the
  trigger population** (a negative on a verb with a quantifier or correlative adjacent) and
  each was proved from the sentence's structure, not from what read well:
  - 0711D *quia **non tantum** dolebunt de ipso tormento, **quam** quod repellentur* — host is
    *tantum*, proved by the *quam* correlative. English: "shall **not** grieve **so much** over
    the torment itself, **as** that…"
  - 0712A *Ne a me hoc dictum, **sed** ab ipso Christo credatis* — host is *a me*, proved by
    *sed ab ipso Christo*, **not** *credatis*. English negates the agent, not the believing.
  - 0714C *Hoc **non** fecisti **pro humana laude**, **sed** propter nomen meum* — host is the
    prepositional phrase, proved by *sed*.
  - 0715C *non enim **prius** est charitas **quam** fides* — host is *prius*, proved by *quam*.
  - 0717B *quia **neque omnino** fidem ignoras, **neque aperte** negas acceptam* — the two
    adverbs *omnino* ‖ *aperte* are the pivot, so the scope is "not **wholly** ignorant" and
    "not **openly** denying", which is what makes the man lukewarm rather than either cold or
    hot. Reading the first as "thou art not ignorant of the faith at all" would collapse the
    contrast the whole gloss is built on.
  - 0717B *Non optat eum frigidum **simpliciter**, **sed** talem de quo major spes habeatur* —
    host is *frigidum simpliciter*, proved by *sed talem*.
  - 0718B *Ubi **tantum** boni sunt, **non** est opus judicare* — ⚠ here *tantum* is in the
    protasis and is **not** the host; the negative is on *est opus*, and the *ubi … ubi* pivot
    proves it. Recorded because it is the same shape as the trigger cases and resolves the
    other way.
- **Test 2b (anchor POSITION, not presence).** All 40 anchors in the range compared against
  the word they stand beside in the Latin, not merely counted. All 40 sit at the same point in
  the construction. Four stand **inside** an italic lemma and were kept inside it: `*Ut [0715A]
  tentemini.*`, `*…qui loquitur [0713D] in vobis…*`, `*Si videris mulierem ad concupiscendam
  [0715D] eam…*`, `*Ecce ego sto ad ostium et pulso. Si [0717D] quis audierit,*`. Four stand
  hard against a `VERS.` address with no space (`[0714D]VERS. 7.--`, `[0716A]VERS. 2.--`,
  `[0717B]VERS. 14.--`, `[0718B]VERS. 2.--`, `[0718D]VERS. 6.--`) and are reproduced that way.
  One was moved during the audit: **0719A**, first set after "gentle" and re-set immediately
  after "are", which is the word *sunt* it stands before in the Latin.
- **Test 3 (punctuation BY BAND, never by total).** Built over the verified anchor partition,
  markers stripped from the English first. It returned **four supplied semicolons** where
  Migne prints a comma — 0711A (*Asia est elatio, Ecclesia ergo*), 0711B (*nemo mala
  intellexerat, ponit*), 0712D (*consummatur, et haec*), 0714D (*delectatur, myrrha*) — all
  four repaired to commas. ⚠ **Reported honestly: in this range the totals did NOT cancel** —
  chunk 0001 stood at 16 semicolons against Migne's 13 and chunk 0002 at 3 against 2, so a
  total-only check would have caught these four too. The band test is still what located them:
  it named the four columns instantly instead of leaving four sites to be found by re-reading
  1,563 words. Final state: zero mismatched bands on `:` `;` `?` `!` `«` `»`.
  ⛔ No comma→semicolon sweep was attempted in the other direction: this book prints
  semicolons freely (27 in the range), so the Tobit exception does not apply here.
- **Test 5 (does the English ASSERT what he asserts).** Run last, counts already clean, each
  paragraph read back against its Latin. It produced §3c's list — the four sentences that do
  not construe are recorded there rather than repaired, and 0717C is named as the site a blind
  reader should go to first.

### §5 · CONVENTION CALLS MADE IN THIS RANGE

- **Fragmentary lemmata expanded per Ruth's convention 3** at two places, and only two:
  `*Tentasti eos qui se.*` → "Thou hast tried them who say themselves to be apostles" and
  `*Sed habeo adversum te quod charitatem.*` → "But I have against thee, that thou hast left
  thy charity." Both stumps end mid-clause and are not English. ⚠ Note what was **not** done:
  neither expansion imports a word where Migne diverges from the Clementine, and
  `*Sed habeo adversum te quod charitatem.*` deliberately does **not** carry the Clementine's
  *primam* ("thy **first** charity"), because Migne's fragment stops before it.
  ⛔ Complete one-word lemmata (*Nix.* · *Oculi.* · *Manna.* · *Judaeos.*) are a **different
  class** and are rendered as they stand; the two are not contrasted here.
- **`*Et videbit eum.*` (0711D) rendered "And shall see him."** — a verb phrase with its
  subject deliberately withheld, because Migne makes *Omnis oculus* the **next** lemma and
  glosses it separately. Expanding to "And every eye shall see him" would have swallowed the
  following lemma and is precisely the conformation 7a″ forbids. Logged because the English is
  visibly incomplete and that incompleteness is Migne's.
- **`Non possumus quae vidimus non loqui` (0716C) → "We cannot but speak the things which we
  have seen."** English "cannot but" is the exponent of the Latin double negative, not the
  loss of one; both negatives are present in the idiom. Recorded because a negation-counting
  check will see only one.
- **Pattern 17.** The addressee of CAPUT II–III is the **angel of each church, singular**, and
  takes *thou* throughout; the plural passages (Apc 2:10 *Aliquos ex vobis … ut tentemini*,
  and the Apostle's *vos* at 0712B, 0713C, 0714A) take *you*. The distinction is Migne's
  morphology, not a register choice.
- **`VERS. n.--` passed through verbatim** everywhere, per convention 1. `CAPUT PRIMUM.` →
  `CHAPTER ONE.`, `CAPUT II./III./IV.` → `CHAPTER II./III./IV.`, matching Ruth's shipped
  English. `PROLOGUS HIERONYMI.` → `THE PROLOGUE OF JEROME.`; `ARGUMENTUM.` → `THE ARGUMENT.`,
  after Ruth.
- **Pattern 4 `[f:]` NOT applied** — this is a lemma-and-gloss commentary, which the runbook's
  false-positive 4 excludes by name.
- **Column-band gaps not reported.** 0709C → 0709D → 0710C skips 0710A–B, and 0709C reappears
  as the `colContext` of three later chunks in the lemma brief. Runbook false-positive 1: the
  A–D marks are positional quarter-guides, not four per column. Named here only so a later
  reader can see it was recognized, not missed.
- **Ratio warn on chunk 0000 (1.72×).** `verify-english.mjs` flags it. The chunk is 188 words
  of Jerome's prologue — ablative absolutes, gerundives and a triple *ut*-chain — which unpack
  long in English. Checked for padding clause by clause and none found; nothing is summarized
  and nothing is doubled. Recorded rather than trimmed, because trimming would cost content.

---


# RANGE FILE — chunks 0005–0009 · cols 0719D–0729A

*Preserved unedited from `cruces-0005.md`.*

## 8977 · *Glossa ordinaria*, **Apocalypsis B. Joannis** (PL 114) — cruces, chunks 0005–0009

Range: **CAPUT V–IX**, cols **0719D–0729A** (`colFirst` 0720A → `colLast` 0729A).
One translator, five chunks (3,640 Latin words). `verify-english.mjs` clean.

**Apparatus taken in this range: 2 `[sic:]` · 5 `[var:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` ·
0 `[nt:]` · 2 `[n:]` (parity with the Latin twins).** Anchors 37/37, verbatim, in order, and
each checked against the WORD it stands beside in the Latin (test 2b). Question marks 0/0 in
both columns. Punctuation compared band by band (test 3): **zero mismatched bands** for
colons, semicolons, question marks, exclamation marks and guillemets, after the corrections
recorded in §4. Zero guillemets in either column. `## ` heads 1:1 (`CAPUT V.` → `CHAPTER V.`,
and so through IX, matching Ruth's shipped English).

⚠ **Nothing in this file has been checked against Migne's plate.** Every candidate below that
would need the plate is named as such, and none of them fired a marker.

---

### §1 · THE 7a″ DELIVERABLE — every lemma in the range, collated against the Clementine

Collated against `sources/vulgate/clementine-flat.txt`; readings cited from
`sources/vulgate/clementine/Apc.lat` etc. The range glosses **Apc 5:1–9:19**.

### 1a. Divergences that took a `[var: …]` (4 of the 5; the fifth is in §1b)

**0721D (chunk 0006), Apc 6:4** — Migne's lemma prints
*Sumeret pacem de terra, et ut **indicem**,* etc.; **Clementine Apc 6:4: *ut sumeret pacem de
terra, et ut invicem se interficiant*.** *indicem* ("an informer") is a real, well-formed
accusative and takes no `[sic:]`, but it leaves the clause with no verb and it is not the
verse. Rendered as printed ("and that an informer, etc.") with
`[var: Vulg. *ut invicem se interficiant,* "that they should kill one another"]`.
⚑ **Plate-read candidate**: *indicem* / *invicem* is a plausible n→d misreading, and brief §4
warns the digitization alters spelling in both directions. The marker claims only what the
Clementine reads, which is checked; it does not claim the plate.

**0722B (chunk 0006), Apc 6:6** — Migne's lemma prints *Et **vivum** et oleum ne
**laeseritis**.*; **Clementine Apc 6:6: *et vinum, et oleum ne laeseris*.** Two divergences in
five words: *vivum* ("the living thing") for *vinum* ("wine"), and a plural imperative
*laeseritis* for the singular *laeseris*. Rendered as printed with
`[var: Vulg. *et vinum, et oleum ne laeseris,* "and the wine and the oil hurt thou not"]`.
⚑ **This is the site where the lemma and its own gloss disagree**, which is why it matters:
the gloss immediately under it expounds *vino, id est sanguine meo* ("with wine, that is, with
my blood"), and the same paragraph has already given *Vinum, praelo quidem attriti…* and
*Vinum similiter emitur denario uno*. **The gloss reads *vinum* three times; only the lemma
reads *vivum*.** Both are rendered as printed — "the living thing" in the lemma, "wine" in the
gloss — and the contradiction stands on the page, per 7a. Pattern 17 governs the number:
*laeseritis* is plural, so the English imperative addresses a plural ("do not hurt").
⚑ **Plate-read candidate** (*vivum* / *vinum*, again a real word, so no marker beyond the
`[var:]`).

**0722D (chunk 0006), Apc 6:10** — Migne's lemma prints *Judicas et non vindicas sanguinem.*;
**Clementine Apc 6:10: *non judicas, et non vindicas sanguinem nostrum*.** **Migne's lemma
lacks the first *non*.** Rendered as printed — "Thou judgest and dost not avenge the blood" —
with `[var: Vulg. *non judicas, et non vindicas sanguinem nostrum,* "thou dost not judge, and
dost not avenge our blood"]`. Pattern 17: *judicas* is singular, so *thou*.
⚑ Note that the gloss under it, *Faciendo discretionem bonorum et malorum* ("By making a
distinction between the good and the evil"), construes **more easily with the affirmative
lemma Migne prints than with the Clementine's negative one** — so this is not obviously a
compositor's slip, and no conjecture is offered. The negative that Migne does print
(*non vindicas*) is carried; no negative is supplied that he does not print.

**0724B (chunk 0007), Phil 1:23** — the gloss on *Issachar* quotes *Cupio dissolvi, et esse cum
Christo*; **Clementine Phlp 1:23: *desiderium habens dissolvi, et esse cum Christo*.**
`[var: Vulg. *desiderium habens dissolvi, et esse cum Christo,* "having a desire to be
dissolved, and to be with Christ"]`. The received-text form is the familiar patristic citation
form, not the Clementine's; it is recorded, not explained (Pattern 14 forbids speculating why).

### 1b. The remaining divergences — one marker taken, the rest declined with the reason

- **0723A (0006), *Exite de Babylone, populus meus, et immundum ne tetigeritis*.** This is a
  **conflation and is not any single Clementine verse**: the nearest are **Apc 18:4** (*Exite de
  illa populus meus*), **Jr 51:45** (*Egredimini de medio ejus, populus meus*), and **2 Cor
  6:17**, whose closing clause it matches; "Babylon" is in none of them at that point. A
  `[var:]` **was** taken here, worded so it names the witness and does not repeat Migne's own
  words (the verifier's mirror test): it seemed worse to leave a reader believing he was
  meeting a verse. Recorded here as the one marker in the range whose content is a
  *composite* statement rather than a single received reading.
- **0720B (0005), Luke 10:24** — Migne prints *Multi **reges et prophetae** voluerunt videre*;
  Clementine Lc 10:24 has *multi **prophetae et reges** voluerunt videre*. **Order only, sense
  unchanged**; Pattern 14 fires on divergence "in a way that changes the sense", so declined.
  Logged because a blind reader will see it.
- **0725C (0008), Apc 8:3** — Migne's lemma *Super **aureum altare**.*; Clementine *super
  **altare aureum***. Word order only; the gloss turns on neither. Declined, logged.
- **0728D (0009), Apc 9:17** — Migne's lemma *Procedebat ignis* (imperfect); Clementine *de ore
  eorum **procedit** ignis* (present). Rendered as printed ("Fire went forth"). The gloss is
  three words long (*Causa aeternae poenae*) and depends on no tense. Declined as immaterial,
  logged. ⚠ Note that 7914 @1071D treats a tense change as material **when the English restores
  the Vulgate tense**; nothing is restored here — Migne's tense is what is rendered.
- **Orthography, none material, none marked:** *tanquam* for *tamquam* throughout (0720C,
  0723A, 0727B, 0728D) is this corpus's normal orthography, not a divergence; *lacrymam* for
  *lacrimam* (0725A); *Haebraei* for *Hebraei* (0720D); *Hebraice* lower-cased in the
  Clementine, capitalized by Migne (0727C).

### 1c. Lemmata checked and found to agree with the Clementine EXACTLY

Recorded in full, because a findings list alone cannot be distinguished from a report by an
agent that never looked. Each of the following is verbatim at the verse it glosses (allowing
only the Clementine's own comma-spacing and the *tanquam*/*tamquam* orthography noted above):

**Apc 5 (chunk 0005):** *Et vidi in dextera sedentis* · *Librum* · *Foris* · *Intus* ·
*Signatum* · *Sigillis* · *Septem* (all six from 5:1, the last five being the single words
*librum … intus et foris, signatum sigillis septem* glossed one by one) · *Angelum* ·
*Praedicantem* · *Aperire librum* (5:2) · *Flebam multum* (5:4) · *Et unus de senioribus* ·
*Vicit leo* (5:5) · *Et ecce in medio throni* · *Tanquam occisum* · *Cornua septem* (5:6) ·
*Ceciderunt coram agno* · *Habentes singuli citharas* (5:8) · *Cantabant canticum* · *Tribu*
(5:9) · *Vidi* · *audivi* · *Vocem angelorum* · *Multorum in circuitu throni et animalium et
seniorum* · *Millia millium* (5:11) · *Sapientiam, et fortitudinem* (5:12) · *Benedictio* ·
*et honor* · *et gloria* · *et potestas* (5:13) · *Et quatuor animalia* · *Ceciderunt in
facies* (5:14).

**Apc 6 (chunk 0006):** *Et vidi* · *Quod aperuisset* · *Veni et vide* (6:1) · *Ecce equus
albus* · *Arcum* (6:2) · *Et cum aperuisset sigillum secundum* (6:3) · *Equus rufus* · *Et
datus est ei gladius magnus* (6:4) · *Et ecce equus niger* · *Stateram* (6:5) · *Et audivi
tanquam* · *Bilibris* · *tritici* (6:6) · *Ecce equus pallidus* · *Nomen illi mors* · *Et
infernus* · *Super quatuor* (6:8) · *Et cum* · *Vidi subtus altare* · *sub* · *Altare* ·
*Interfectorum propter verbum* (6:9) · *Usquequo* (6:10) · *Conservi eorum* (6:11) · *Sol
factus est niger* · *Tanquam saccus* (6:12) · *Grossos suos* (6:13) · *Coelum* (6:14) ·
*Reges terrae* · *Divites* · *Fortes* (6:15) · *Et dicunt montibus* (6:16).

**Apc 7 (chunk 0007):** *Post haec* · *Quatuor angelos* · *Angelos* · *Tenentes* · *Ventos* ·
*Super mare* (7:1) · *Et vidi alterum* · *Ascendentem* · *Signum* (7:2) · *Centum quadraginta*
· *Ex omni tribu* (7:4) · *Duodecim* (7:5) · *Simeon* · *Levi* · *Issachar* (7:7) · *Zabulon*
· *Joseph* · *Benjamin* (7:8) · *Post haec* · *Stantes* (7:9) · *Salus Deo nostro qui sedet*
(7:10) · *Et omnes* (7:11) · *Amen* · *benedictio* · *claritas* (7:12) · *Et respondit unus*
(7:13) · *Stolas suas* (7:14) · *Non esurient, neque sitient* (7:16) · *Deducet eos ad vitae* ·
*Absterget Deus omnem lacrymam* (7:17). **Also the one full proof-text in the chunk: Rom 10:10,
*Corde enim creditur ad justitiam, ore autem confessio fit ad salutem* — verbatim in the
Clementine, punctuation apart.**

**Apc 8 (chunk 0008):** *Et cum aperuisset* (8:1) · *Septem angelos* · *Et datae sunt* (8:2) ·
*Et alius angelus* · *Stetit ante altare* · *Habens* · *Thuribulum* · *De orationibus* (8:3) ·
*Fumus* (8:4) · *Praeparaverunt* (8:6) · *Et primus angelus* · *Et facta est grando* · *In
terram* · *Arborum* (8:7) · *Et secundus angelus* · *In mare* (8:8) · *Mortua est tertia* ·
*Quae habebant animas* (8:9) · *Et tertius angelus* · *Fontes* (8:10) · *Et quartus angelus*
(8:12) · *Unius aquilae* (8:13).

**Apc 9 (chunk 0009):** *Et quintus angelus* · *Et vidi stellam* · *Stellam* · *Et data est*
(9:1) · *Aperuit puteum abyssi* · *Fumus fornacis* · *Obscuratus est sol et aer* (9:2) ·
*Exierunt locustae* (9:3) · *Praeceptum est illis ne laederent* (9:4) · *Ne occiderent* ·
*Mensibus quinque* · *Ut cruciatus scorpii* (9:5) · *Et fugiet mors ab eis* (9:6) ·
*Similitudines locustarum* · *Similes equis* · *Tanquam coronae* (9:7) · *Et habebant capillos*
· *Dentes leonum* (9:8) · *Loricas* · *Sicut vox curruum* (9:9) · *Et habebant caudas* (9:10) ·
*Et habebant super se regem* · *Cui nomen Hebraice Abaddon* (9:11) · *Vae unum abiit* (9:12) ·
*Ex quatuor cornibus* · *Altaris aurei* · *Vocem unam* (9:13) · *Solve quatuor* · *Qui alligati
sunt in flumine magno Euphrate* · *solve* (9:14) · *Soluti sunt* · *In horam et diem* · *horam*
· *diem* · *mensem* · *annum* (9:15) · *Vicies millies* · *Et audivi* · *audivi* (9:16) · *Et
ita vidi* · *Habebant loricas igneas* · *Vel habebant loricas igneas* · *Tanquam capita
leonum* · *Vel ignis* · *fumus* · *sulphur* · *Fumus et sulphur* (9:17) · *Occisa est tertia
pars* (9:18) · *Similes serpentibus* (9:19).

⚑ **One lemma is the commentator's own citation of a variant, not a divergence:** at 0727B he
writes *Alia littera dicit **mensibus sex**, propter sex aetates* — he is reporting a rival
reading against the *mensibus quinque* of Apc 9:5, and says so. No marker; the English says so
too.

### 1d. Fragmentary lemmata — how each was resolved, and why the two calls differ

Convention 3 renders a fragment as the phrase it stands for; the brief's closing note adds that
a complete one-word lemma is rendered as it stands, and that contrasting the two classes
manufactures an inconsistency. Two lemmata in this range sit on that boundary and were decided
in **opposite** directions, deliberately:

- **0724D–0725A, *Deducet eos ad vitae,* etc. — EXPANDED** to "He shall lead them to the
  fountains of the waters of life". "To life's" is not English at all; the fragment breaks
  inside a genitive phrase (Apc 7:17 *ad vitae fontes aquarum*), which is precisely Ruth's
  *Non te.* class.
- **0723D–0724A, *Centum quadraginta.* — NOT expanded**, rendered "A hundred and forty". The
  clip lands on a whole numeral that is readable English; nothing is ungrammatical, so
  convention 3's trigger is not met, and expanding it to "a hundred and forty-four thousand"
  would import a number into a paragraph where the number is itself in question (see §2,
  0724A). The Latin fragment stands opposite in the parallel column either way.
- **0727A, *Sicut habent scorpiones.* — rendered as printed**, "As the scorpions have". This
  one elides **internally**: Clementine Apc 9:3 reads *sicut habent **potestatem** scorpiones
  **terrae***, so both the object and the qualifier are gone from the middle of the lemma, not
  clipped off its end. Supplying "power" would have been the only expansion available and it
  would have put a word inside Migne's phrase rather than after it. Rendered as it stands; the
  elision logged here.
- Ordinary end-clips, rendered as the phrase they open and needing no note: *Cornua septem,*
  etc. · *Ceciderunt in facies,* etc. · *Sapientiam, et fortitudinem,* etc. · *Sumeret pacem…,*
  etc. · *quia bilibris tritici,* etc. · *Post haec,* etc. · *Stolas suas,* etc. · *Non
  esurient, neque sitient,* etc. · *Similitudines locustarum,* etc. · *Sicut vox curruum,* etc.
  · *Et audivi,* etc. · *Soluti sunt,* etc. · *Quae habebant animas,* etc. · *Praeceptum est
  illis ne laederent,* etc.

---

### §2 · THE PLATE'S OWN TROUBLE — rendered as printed, logged here

### 0720A (0005) · *intellexeruut* — a non-word. `[sic:]` TAKEN.

*Sancti et antiqui Veteris Testamenti patres **intellexeruut** aliquando…* — *intellexeruut* is
no Latin word (u for n). Corpus control: **1 occurrence against 21 *intellexerunt*** across all
of `src/latin/`. Per addendum A a non-word is the class worth raising, and it is carried under
Patterns 7/10/12: the English gives the sense **and** the marker —
"…of the Old Testament understood [sic: *intellexeruut*] at one time…". Strip the marker and
the sentence still reads (test 1). ⚑ **Plate-read candidate**: this may be the digitization's
corruption rather than Migne's type; the marker asserts only that the run in our Latin twin is
carried, which is what the verifier checks.

### 0726D–0727A (0009) · *baereticorum* — a non-word. `[sic:]` TAKEN.

*Discipuli **baereticorum** locustis comparantur.* Corpus control: **1 occurrence of
*baereticorum* (plus one *baereticae* elsewhere) against 501 *haeretic-* forms**; this work
alone prints *haeretic-* fifteen times in the same chunk. Rendered "The disciples of the
heretics [sic: *baereticorum*] are compared to locusts". Same plate-read caveat.

### 0722A (0006) · a full stop mid-sentence — PRESERVED, per Pattern 8

*Videns diabolus se per apertas persecutiones non profecisse**. i**mmittit haereticos…* — Migne
sets a period and then a lower-case *immittit*, which is the same class as 11542 @1041D. The
English reproduces both: "…had not prevailed by open persecutions. he sends in heretics…".
Pattern 8's "never delete"; not tidied, not merged.

### 0722D (0006) · a paragraph that simply stops — PRESERVED

*Interfectorum propter verbum.* Vel aperto martyrio, vel aliquibus anxietatibus* — no terminal
mark. The English stops in the same place with no mark supplied (Pattern 8).

### 0725B (0008) · `VERS. 3--` — one verse address out of eighty lacks its period

Every other address in the range is set `VERS. n.--`; this one is `VERS. 3--`. The address
passes through **verbatim, untranslated**, so the English prints `VERS. 3--` too.
⚑ **Plate-read / TEI-patch candidate.** This is exactly Ruth's 0537D class, where the
digitization dropped the space after `VERS.` at one mark in twenty-three and the plate set it
like all the others. **Not patched here** — a patch is a claim about the plate and this range
has had no plate read. If a reader confirms Migne sets `VERS. 3.--`, it belongs in
`data/tei-patches/8977.json`, not in the English.

### 0724A (0007) · the arithmetic does not come out — *centum sexaginta quatuor*. NO MARKER.

*duodecim per quatuor multiplicamus, et fiunt quadraginta octo; ut vero ad Trinitatem haec
perfectio referatur, quadraginta octo multiplicamus, et sic fiunt **centum sexaginta
quatuor**.* 48 × 3 = **144**, which is the verse's own number (Apc 7:4 *centum quadraginta
quatuor millia*), and the same column's preceding lemma prints *Centum quadraginta*. Migne
prints 164. Rendered as printed, "a hundred and sixty-four".
⛔ **`[cj:]` considered and DECLINED.** *sexaginta* is a real, well-formed word occupying its
slot, so Pattern 12 has nothing to wrap; and Pattern 18a's ruling is scoped to negations and
correlatives (with the census closed over verb and word substitutions), while addendum A is
explicit that a real word reading oddly **is Migne's until a plate says otherwise** and must
not take a marker on the strength of an argument, however good the argument. This is a good
argument. It is still an argument. ⚑ **Plate-read candidate, high value**: *sexaginta* /
*quadraginta*.
⚑ Note also that *quadraginta octo multiplicamus* names no multiplier — "we multiply
forty-eight" — the *per tria* being elided as *per quatuor* was not. Rendered elliptically, as
printed.

### 0726C (0009) · the fifth angel called *quartus*. NO MARKER.

*Et quintus angelus.* **Ordine narrationis et ordine temporis hic angelus dicitur esse
quartus.** The formula recurs three times in the range and elsewhere agrees with the lemma
(0725C *Et primus angelus* … *Ordine narrationis*; 0726A *Et tertius angelus, ordine
narrationis*; 0726B *Quartus dicitur ordine narrationis*; and at 0727C *Vae unum abiit* is
glossed *primum ordine narrationis et ordine temporis*). Against a lemma reading *quintus*,
*quartus* is the odd man. Rendered as printed. Declined for the same reason as 0724A: a real
word in its slot, and the corpus cannot convict it. ⚑ **Plate-read candidate.**

### 0726C (0009) · *clavis illa sunt* — a number disagreement with an English exponent

*Vel **clavis illa sunt** ipsi principes per quos haeretici operantur.* A singular noun and
demonstrative against a plural verb and plural predicate. English **does** have an exponent for
this (that/those, is/are), so Pattern 12's second test does not apply — rendering it does not
hide it. Rendered literally: "Or that key are the very princes through whom the heretics work."
No marker; logged. ⚑ **Plate-read candidate** (*claves illae*).

### 0722B (0006) · *nec per apertas haereses* — *apertas* against the work's own scheme

*Videns diabolus **nec per apertas tribulationes, nec per apertas haereses** posse proficere…*
The chapter's own frame two columns earlier makes the third horse *haereticorum persecutio
**occulta*** and only the second one open, so "open heresies" is what the argument denies.
Rendered as printed. ⛔ **`[cj:]` considered and DECLINED** on addendum A's ground: *apertas* is
a real word in its slot, the second *apertas* may simply be Migne repeating the first, and no
corpus argument may fire a marker. ⚑ **Plate-read candidate.** Both negatives (*nec … nec*) are
carried and each is on its own prepositional phrase, not on the verb (test 2/2a).

### 0728D (0009) · *nunquam fuerunt baptizati, nec ab Ecclesia separati* — the contradiction stands

*omnes Judaei vel pagani, qui **nunquam** fuerunt baptizati, **nec** ab Ecclesia separati.*
Carried whole: "who were never baptized, nor separated from the Church." Under 7a this is
rendered as printed even though the two limbs sit oddly together (one who was never baptized
was never in the Church to be separated from it). No word translated as its opposite; no
negation moved; nothing supplied. Whether the plate reads otherwise is a question for a plate
read, not for the English.

### 0723D (0007) · *signatio pectoris, confessio est cordis* — rendered as printed

*Signum geritur in fronte ne celetur in tribulatione, nam **signatio pectoris, confessio est
cordis**.* The very next sentence assigns the breast to *fidem cordis* and the forehead to
*confiteatur*, so the two do not divide the body the same way. Rendered literally, "for the
signing of the breast is the confession of the heart". No conjecture offered.

### 0723C–D (0007) · *Vel a se descendit* — rendered as printed

In a paragraph glossing *Ascendentem* and running *ascendit … ascendit ab ortu*, the third
alternative prints *Vel a se **descendit***. A real verb in its slot; rendered "Or he came down
from himself". ⚑ Plate-read candidate; no marker.

### Pattern 9 items — checked and NOT marked

- **0727C *sagita*** for *sagitta* (corpus: 1 against 76 *sagitta-*). Single-for-double
  consonant is standard medieval orthography, and Pattern 9 rules that attested medieval
  spellings are correct Latin for their period. **Declined**, though it is the closest call in
  the range: it is a hair's breadth from the non-word class, and a plate read would settle it.
- **0728D *Antechristi*** in a chunk that prints *Antichrist-* fifteen times. *Antechristus* is
  an attested medieval form; corpus-wide it occurs **once**, which is a reason to raise it and
  not a reason to mark it. Rendered "Antichrist". ⚑ Plate-read candidate.
- **0727C *adherentes*** for *adhaerentes* — ordinary ae/e monophthongization. No marker.
- **0720D *Haebraei***, **0725A *lacrymam***, **0723A *coelum***, *tanquam* throughout —
  orthography, no marker.

---

### §3 · REFERENTS AND NEGATION — the sites where two readings construe, or where a supplied
## pronoun had to be named

The brief's dominant defect class. Every "he/she/it/they" not printed in the Latin was named to
a specific antecedent before it was written. The ones worth recording:

- **0720A (0005), *et doctrina et exemplo munivit*** — no object is printed. Supplied as the
  **Church**: she is the subject of the immediately preceding *quae fuit albus equus*, and the
  next relative, *quam rufus equus impugnavit*, is feminine accusative and can only be the
  Church. The horse (*equus*, masculine) is excluded by that *quam*. English: "which he
  fortified by doctrine and by example, and which the red horse assailed."
- **0720D (0005), *caro sanctorum, quae tenditur in ligno, dum … imitantur*** — *quae* is
  singular and binds **caro** (the flesh), while *reddentes … imitantur* is plural and binds
  **the saints**. The English keeps both: "the flesh of the saints, which is stretched upon the
  wood, while by divers torments, rendering the same sound, they imitate the cross of Christ."
  Collapsing them into one number was the available error and was not made.
- **0723C (0007), *ne sui aliquatenus torpeant vel desperent*** — *sui* is God's own, not the
  devil's: the clause explains why the devil's readiness to hurt is reported **together with**
  his being bridled, and the consolation is for the faithful. Both readings parse; the sense
  decides, and the English says "his own" with the ambiguity recorded here rather than resolved
  silently in a footnote the reader cannot see.
- **0723D (0007), *qui est ortus solis, id est Patris*** — the genitive *Patris* glosses
  *solis*, not *ortus*; the sun is the Father. Kept on its own noun: "who is the rising of the
  sun, that is, of the Father." (The brief's named failure — a genitive lifted off its noun —
  was the risk here.)
- **0728C (0009), *sicut intellexeram … sic intellexit*** — a first-person pluperfect answered
  by a **third**-person perfect. Rendered as printed: "as I had understood … so **he**
  understood". Under Pattern 18a a person slip is explicitly declined for `[cj:]`, and under 7a
  the English may not quietly become "I understood". ⚑ Plate-read candidate (*intellexi*).
- **Test 2a sites — the host of the negative proved from the sentence's own structure, not from
  what reads well:**
  - 0722A *non solum in minores, sed etiam in majores* — host is *in minores*, proved by the
    *sed etiam* limb. English: "not only against the lesser, but even against the greater".
  - 0722B *oleum sunt **non** alios inebriantes, **sed** prius orationibus ungentes* — host is
    *alios inebriantes*, proved by the *sed* limb; **not** the copula *sunt*.
  - 0723D *Hoc signum etsi **non re**, fide tamen antiqui patres praetulerunt* — host is *re*,
    proved by the answering *fide tamen*. English: "though not in fact, yet in faith".
  - 0724C *Non per nos, sed per agnum habemus salutem* — host is *per nos*.
  - 0725C *quia **non omnes** orationes repraesentat Patri, **sed** eas exaudit quae…* — host is
    the quantifier *omnes*, proved by the *sed* limb, which is what makes the sentence
    coherent: he presents **not all** prayers, not "he does not present prayers". English:
    "because not all prayers does he present to the Father, but he hears those which pertain to
    salvation." ⚑ This is the one site in the range with 2a's exact trigger shape (negative,
    verb, quantifier adjacent), and the wrong host reads perfectly well.
  - 0727B *non aperte tormentant, sed apud saeculi principes accusant* — host is *aperte*,
    proved by the *sed* limb (they do torment; not openly).
- **Every other printed negative was checked onto its own word and carried:** *non*/*nec*/
  *neque*/*nisi*/*ne*/*nihil*/*nullus*/*nemo*/*nunquam*/*nolentes*/*nondum* at 0720A, 0720B,
  0721B, 0721C, 0721D, 0722A ×3, 0722B ×4, 0722C ×2, 0722D ×2, 0723A ×3, 0723B, 0723C ×2,
  0723D ×4, 0724B ×2, 0724C, 0725B ×3, 0725C ×2, 0726A, 0726D, 0727A ×4, 0727B ×2, 0727C,
  0727D, 0728D ×2. **None appears in the English that Migne does not print, and none of his is
  missing.**

---

### §4 · PUNCTUATION — what was corrected in our own draft, and the standing decision

Test 3 was run band by band across all 37 anchor-delimited bands. The **first** pass found
**24 mismatched bands**, every one of them the translator's convenience and not the plate's:
semicolons and colons supplied where Migne prints commas (and, at 0725D and 0726D, two of his
semicolons softened to commas in our English). All were conformed to the printed marks; the
second pass returns **zero mismatched bands**. Recorded because the brief's own warning is that
the totals can cancel — here they did not cancel, but the class is exactly the one it names,
and it was invisible until the bands were compared.

⚠ No comma→semicolon sweep was performed in the other direction: Migne prints semicolons
himself in this range (twelve of them), so Tobit's narrow exception does not apply and was
not invoked.

---

### §5 · SECTIONS READ CLEAN, AND CANDIDATES REJECTED

**Read clean, no crux:** CAPUT V's glosses on 5:8–5:14 (0720D–0721B); CAPUT VII's tribal
etymologies at 0724B (*Simeon* / *Levi* / *Issachar* / *Zabulon* / *Joseph* / *Benjamin* — the
Hebrew glosses are the commentator's and are rendered as he gives them, not corrected against
Jerome); CAPUT VIII entire apart from 0725B's `VERS. 3--`; CAPUT IX's 0728B chronology
(*horam* = half a year, *diem* = a year, *mensem* = a second, *annum* = a third, totalling the
three and a half years Migne then names — **internally consistent, checked, no defect**).

**Candidates raised and rejected, with the reason:**
1. *sagita* (0727C) — Pattern 9 orthography, not a non-word. Declined.
2. *Antechristi* (0728D) — attested medieval form. Declined.
3. *centum sexaginta quatuor* (0724A) — real word, corpus argument cannot fire a marker.
   Declined; plate read requested.
4. *quartus* for *quintus* (0726C) — same. Declined; plate read requested.
5. *apertas haereses* (0722B) — same. Declined; plate read requested.
6. *descendit* for *ascendit* (0723D) — same. Declined.
7. *intellexit* for *intellexi* (0728C) — a person slip, explicitly outside Pattern 18a.
   Declined.
8. *clavis illa sunt* (0726C) — English has an exponent for the disagreement, so rendering it
   does not hide it and Pattern 12's second test is not met. Declined.
9. Luke 10:24 word order, Apc 8:3 word order, Apc 9:17 tense — divergences that do not change
   the sense. `[var:]` declined for each, all three logged in §1b.
10. The A–D band sequence of this range (0719D → 0720A … 0729A) contains no gap or recurrence
    worth reporting; per runbook false positive 1, no band arithmetic was performed and none is
    reported. No text is broken mid-word or mid-construction across any anchor.
11. No `[f: …]` tags: this is a lemma-and-gloss commentary, runbook false positive 4.
12. No em-dash was marked, reported, or engineered around.

**Open, for whoever reads the plate:** the eight plate-read candidates flagged above, in
descending value — *centum sexaginta quatuor* (0724A) · *vivum*/*vinum* (0722B) ·
*indicem*/*invicem* (0721D) · `VERS. 3--` (0725B) · *quartus* (0726C) · *apertas haereses*
(0722B) · *clavis illa sunt* (0726C) · *intellexeruut* (0720A) and *baereticorum* (0726D),
these last two only to establish whether the corruption is Migne's or the digitization's, since
the `[sic:]` markers stand either way on the run our Latin twin carries.

---


# RANGE FILE — chunks 0010–0014 · cols 0729A–0739B

*Preserved unedited from `cruces-0010.md`.*

## *Glossa ordinaria*, **Apocalypsis B. Joannis** (PL 114) — cruces, chunks 0010–0014 (cols 0729A–0739B)

Range file for the third of four agent stints (Apc 10–16). **Not the merge** — the merged
`cruces.md` is written once at the end from all four range files.

Translated 2026-08-28. Chunks 0010, 0011, 0012, 0013, 0014.
Marker parity against the Latin twins, verified paragraph by paragraph: **column anchors
11 · 6 · 6 · 12 · 6, verbatim and in order**; `[n:]` 2 · 0 · 0 · 0 · 0; italic spans
106 · 60 · 112 · 118 · 62 (exact, with marker contents stripped); question marks 0 in both
languages throughout; guillemets 0; `## ` heads 1:1 (`CAPUT X.–XVI.` → `CHAPTER X.–XVI.`,
Ruth's shipped form). Colons and semicolons compared **band by band** (paragraph by
paragraph, the anchors partitioning both twins identically): **zero mismatched bands** after
the five repairs listed in §4.

Apparatus taken in this range: **7 `[var:]` · 1 `[cj:]` · 0 `[sic:]` · 0 `[d:]` · 0 `[ed:]` ·
0 `[nt:]`.**

---

### §1 · THE 7a″ DELIVERABLE — every lemma in the range, collated

Collated against `sources/vulgate/clementine-flat.txt`, cited from
`sources/vulgate/clementine/Apc.lat`, `Ps.lat`, `Mt.lat`, `1Cor.lat`, `Zach.lat`.
**This section lists the agreements as well as the divergences**, because a findings-only
list cannot be told apart from a report by an agent that never looked.

### 1a. Divergences that took a `[var:]` (7)

| col | Migne prints | Clementine | why marked |
|---|---|---|---|
| 0729A | *Tanquam columna ignis.* | Apc 10:1 *pedes ejus tamquam **columnae** ignis* | singular for plural; the gloss then expounds a plurality (*Illi in quibus vere lucet imago Dei*), so the number is at issue on the page |
| 0729C | *nec oculus vidit, nec auris audivit* | 1 Cor 2:9 ***Quod** oculus **non** vidit, nec auris audivit* | the clause is recast; both readings are negative, but the construction is not the Clementine's |
| 0732A | *Cruciatur ut pariat.* | Apc 12:2 *et **cruciabatur** ut pariat* | present for imperfect. Material: the gloss re-quotes the **present** (*Vel cruciatur a seipsa*) and builds a continuing, not a past, torment on it |
| 0734D | *Hi reddunt fructum, alii tricesimum, … sexagesimum, … centecimum.* | Mt 13:8 *aliud **centesimum**, aliud **sexagesimum**, aliud **trigesimum*** | free citation, and the **order is reversed** (ascending, not descending) — which is exactly what the gloss's 6/60/100 ladder requires |
| 0735B | *Et alius angelus secutus est **eum**.* | Apc 14:8 *Et alius angelus secutus est **dicens*** | *eum* is not in the Clementine, and the gloss turns on it: *praedicatores sibi invicem succedunt* |
| 0738B | *Exire spiritus.* | Apc 16:13 *spiritus tres immundos* — no *exire* | the infinitive is not in the Clementine at that verse |
| 0739A | *Universae **enim** viae Domini misericordia et veritas.* | Ps 24:10 *Universae viae Domini, misericordia et veritas* | *enim* inserted, welding the psalm into the argument as a premise |

⚠ On the last: *enim* is a connective, not a sense-word, and the marker was still taken
because the insertion is what turns a quoted verse into the gloss's own middle term. A reader
who does not know the psalm cannot see that the "for" is Migne's.

### 1b. Divergences examined and deliberately NOT marked, with the reason

- **0729C *Tempus amplius non erit.*** — Apc 10:6 reads *Quia tempus **non erit amplius***.
  Word order only; the negation, its host (*erit*) and the sense are untouched. Pattern 14
  wants a divergence "in a way that changes the sense". Logged, not marked.
- **0729C *Et ea quae in illo.*** — Apc 10:6 has *ea quae in **eo** sunt* (three times).
  A bare demonstrative swap, *illo* for *eo*, with no change of reference or sense. ⭐ Worth
  recording that **the gloss's own re-quotation four words later reverts to *eo*** (*Creavit
  ea quae in eo sunt*), so the divergence is confined to the lemma. Logged, not marked.
- **0735C *Et angelus tertius.*** — Apc 14:9 *Et **tertius angelus** secutus est illos*.
  Word order only.
- **0739A *Dare ei calicem.*** — Apc 16:19 *dare **illi** calicem*. Same pronoun swap as
  0729C; no sense change.
- **0736C, the Prophet's *Lacus ubi non erat aqua*** — the nearest Clementine text is Zach
  9:11 *de lacu **in quo non est** aqua* (Gn 37:24 *cisternam … quae non habebat aquam* is the
  other candidate). Migne's is a loose allusion, **not italicized on his page**, and the
  negation is intact in both. No marker; the English keeps it unitalicized, as he prints it.
- **0729C *Nam si Christus resurrexit, et nos resurgemus* [n: (I Cor. XV)]** — no such
  sentence stands in 1 Cor 15. It is a free epitome of the chapter's argument (cf. 15:12–16,
  20), and Migne's own note cites the **chapter**, not a verse. ⛔ A `[var:]` here would have
  to pick one verse to be "the" received reading, which would misdescribe what he is doing.
  Declined deliberately; logged instead.
- **Orthography, throughout, and none of it marked:** *coelo/coelum/coeli* for *caelo* etc.;
  *tanquam* for *tamquam* (0729A, 0737A, 0738A); *characterem* for the Clementine's
  *caracterem* (0734B); *Citharaedorum* for *citharoedorum* (0735A); *terraemotus* set solid.
  These are Pattern 9 items — conventions of the printing, carrying no information about this
  plate — and marking them would bury the seven real divergences in noise.

### 1c. Lemmata checked and found to agree with the Clementine exactly

Every remaining italic span in cols 0729A–0739B was walked against the flat file. All of the
following agree word for word with the verse they gloss (fragments agreeing with the
corresponding stretch of it):

**Apc 10 (chunk 0010):** *Et vidi alium angelum fortem* · *De coelo* · *Amictum nube* ·
*Et iris in capite* · *Et habebat in manu sua libellum apertum* · *Pedem suum* ·
*Sinistrum autem super terram* · *Quemadmodum cum leo rugit* · *Scripturus eram* ·
*Signa quae locuta* · *Levavit manum suam ad coelum* · *Juravit* · *Consummabitur mysterium* ·
*Mysterium Dei* · *Sicut evangelizavit* · *Et audivi* · *Vade* · *Stantis super mare* ·
*Et abii* · *Ad angelum* · *Et dixit mihi: Oportet*.
**Apc 11:** *Metire* · *Atrium* · *Civitatem sanctam* · *Et dabo duobus* · *Duobus testibus* ·
*Diebus mille* · *Super aquas* · *In sanguinem* · *Aegyptus* · *Et munera mittent* ·
*Et post dies* · *Super pedes* · *Vocem magnam* · *Terraemotus magnus* · *Et decima pars* ·
*Occisa sunt in terraemotu* · *Gloriam Deo* · *Et septimus angelus* · *Factum* ·
*Et regnabit* · *Et viginti quatuor seniores* · *Ceciderunt in facies* ·
*Qui corruperunt terram* · *Et apertum est* · *Arca* · *Et grando magna*.
**Apc 12 (chunk 0011):** *Et signum* · *Luna sub pedibus* · *Et in capite ejus corona* ·
*Draco magnus* · *Et cornua decem* · *Et cauda* · *Stellarum* · *Stetit ante mulierem* ·
*Devoraret* · *Et peperit* · *Diebus mille* · *Michael et angeli ejus praeliabantur* ·
*Non valuerunt* · *Et audivi vocem* · *Accusabat illos* · *Die ac nocte* ·
*Descendit diabolus* · *Sciens quod modicum tempus habet* · *Et postquam vidit* ·
*Et datae sunt mulieri* · *Aquilae* · *Per tempus, et tempora* (all three quotations) ·
*Et adjuvit terra mulierem* · *Et aperuit* · *Absorbuit* · *Iratus est draco in mulierem* ·
*Et stetit*.
**Apc 13 (chunk 0012):** *Et vidi* · *Capita septem et cornua decem* · *Nomina blasphemiae* ·
*Quasi occisum* · *Et plaga mortis ejus curata est* (and its re-quotation) ·
*Et aperuit os suum* · *Et tabernaculum* · *Occisus est ab origine mundi* ·
*Qui in captivitatem* · *Qui in gladio occiderit* · *Hic est* · *Et vidi* · *Cornua* ·
*Et loquebatur sicut draco* · *Et potestatem* · *Terram* (and its re-quotation) ·
*habitantes in ea* · *Adorare* · *Ignem* · *In conspectu* · *Ut loquatur imago* ·
*Numerum* · *Qui habet*.
**Apc 14–15 (chunk 0013):** *Et vidi: et ecce Agnus stabat* · *Centum quadraginta* ·
*Tonitrui* · *Citharizantium* · *Et cantabant* · *Hi sunt qui cum mulieribus non sunt* ·
*Ex hominibus primitiae* · *Et vidi* · *Alterum angelum* · *Per medium coeli* ·
*Evangelium aeternum* · *Timete Dominum* · *Quia venit* · *Cecidit* (both) ·
*Vino irae fornicationis* · *Quod mistum* · *In calice* · *Et fumus tormentorum* ·
*Ascendet in saecula* (both) · *Nec habent requiem* · *Hic patientia* · *Opera* · *Et vidi* ·
*Similem Filio hominis* · *Angelus* · *Exivit de templo* · *Quia venit hora* ·
*Et alius angelus* · *Alius angelus* · *Mitte falcem* · *Et misit in lacum* ·
*Et exivit sanguis* · *Usque ad frenos equorum* · *Per stadia* · *Et vidi* · *Et mirabile* ·
*Plagas septem* · *Quoniam in illis* · *plagas* · *novissimas* ·
*Tanquam mare vitreum mistum igne* · *Habentes citharas* · *Canticum Moysi* · *Viae* ·
*justae* · *verae* · *Judicia tua* · *Et post haec* · *Apertum est templum* · *Et exierunt* ·
*Et unum* · *Iracundiae* · *Fumo a majestate* · *Introire*.
**Apc 16 (chunk 0014):** *Vulnus* · *Et factus est sanguis* · *Sanguis* · *tanquam mortui* ·
*Omnis anima vivens* · *Super flumina* · *Audivi* · *Qui es et qui eras* ·
*Et sanguinem eis dedisti bibere* · *Et audivi* · *Etiam, Domine Deus omnipotens* · *Justa* ·
*Et aestuaverunt* · *Neque egerunt* · *Super sedem bestiae* · *Commanducaverunt* ·
*Praepararetur via* · *Vidi* · *Ranarum* · *Procedunt* · *Et congregabit* ·
*Et septimus angelus* · *Et facta est civitas* · *Civitates gentium ceciderunt* ·
*Venit in memoriam* · *Et omnis insula fugit* · *Talentum* · *Et blasphemaverunt*.

### 1d. Fragment lemmata — how each was rendered, per convention 3

- **0729C *Signa quae locuta:*** rendered **"Seal up the things which the seven thunders have
  spoken:"**. *Signa* is the Vulgate's **imperative** (Apc 10:4 *Signa quae locuta sunt septem
  tonitrua*), not the noun "signs"; a stump ("Signs which have spoken") is not English and
  would also invite the wrong part of speech. The trailing colon is Migne's and is carried.
- **0730B *Et dabo duobus.*** expanded to **"And I will give to my two witnesses"** — the
  governed noun is elided (Apc 11:3 *dabo duobus testibus meis*). Its neighbour *Duobus
  testibus.* is a **complete phrase**, nothing elided inside it, and is rendered as it stands,
  "To two witnesses". ⚑ Per the brief's control-class rule these are two different classes and
  the pair is **not** an inconsistency.
- **0730D and 0732B *Diebus mille.*** kept as **"A thousand days"**, NOT expanded to the
  verse's *diebus mille ducentis sexaginta*. Reason, and it decides the sense: the gloss
  argues *hi dies **non** perficiunt tres annos et dimidium*. On 1,260 days that is at best
  arguable (1,260 = 3½ years of 360 days); on the bare thousand Migne prints it is plainly
  true. Expanding would have imported the very number the gloss is denying.
- Ordinary clipped lemmata (*De coelo*, *Pedem suum*, *Gloriam Deo*, *Super pedes*, *Cornua*,
  *Opera*, *Talentum*, *Vulnus*, *Justa*) are rendered as the phrase they open, without
  importing wording from any English Bible. **No lemma in this range was conformed to Douay or
  AV**; each was read word by word off the Latin before any English was written.

---

### §2 · CRUCES

### 0733B · *in [0733B] fructuosos* — the word is split **across the column anchor**, and the split hides a negative. `[cj:]` TAKEN.

Migne, glossing Apc 12:18 *Et stetit [supra arenam maris]*:

> *Non tamen omnes illos vicit minores, sed tantum super arenam, id est, in [0733B]
> fructuosos moram fecit, in quibus apparent signa vestigii.*

The dragon did **not** conquer all the lesser ones, but only *super arenam* — and sand is
barren. *in fructuosos*, "among the fruitful", says the opposite of what *arenam* and the
whole sentence require; *infructuosos*, "the unfruitful", says exactly it, and sand is
precisely what takes and shows a footprint (*in quibus apparent signa vestigii*).

**This is the one thing the runbook's false-positive item 1 does tell us to report: text
broken mid-word across an anchor.** The anchor falls between *in* and *fructuosos*, which is
also a legitimate word boundary if the text really is two words — which is what makes it
undecidable from the file.

- Marker: **`[cj: *fructuosos*; read *infructuosos*, "the unfruitful"]`**, additive per Pattern
  18 — Migne's word keeps its English ("among the … fruitful") and the conjecture stands
  beside it. Nothing is removed and the reader sees both.
- Not a `[sic:]`: *fructuosos* is a perfectly good Latin form occupying its slot, so Pattern
  12 has nothing to wrap. This is the 11081 @0030B *munde*/*mundo* shape exactly.
- Corpus control: *infructuos-* is attested 32 times across `src/latin/` (though not in this
  exact accusative plural), so the conjectured word is a word this corpus uses.
- ⛔ **The rival reading, and why it lost:** "he made his stay among the fruitful" can be
  construed — *moram facere in* + accusative for "among" is loose but medieval. It loses
  because it contradicts *super arenam* in the same clause, which is the sentence's own
  structure and not a matter of what reads well.
- **Plate read wanted at col. 0733B.** If Migne prints *infructuosos* broken at the column
  turn, this is Corpus Corporum's division and belongs in `data/tei-patches/8977.json`, and
  the `[cj:]` is withdrawn in the same commit.

### 0734A · *tundamentum* — a NON-WORD. Plate read wanted. No marker fired, deliberately.

> *Quia et hi, simulata resurrectione, praedicationis suae faciunt **tundamentum**.*

*tundamentum* is no Latin word. Corpus frequency across `src/latin/`: **1 × *tundamentum*
against 107 × *fundamentum***. The shape (f → t, the crossbar) is a classic broken-type or
mis-transcription.

⛔ **No `[sic:]`.** The brief's addendum A records that *every* suspicion aimed at a non-word
in that batch was confirmed as **our** corruption, not Migne's — and addendum B records seven
false `[sic:]` withdrawn in one batch, each publicly blaming Migne for the digitization's
error. Firing one here on a corpus argument alone would be the same mistake. The Glossa
block's own precedent points the same way: Ruth's *significaRuth* @0534A was resolved by a
**tei-patch after a plate read**, not by a marker.

The English therefore reads "make the foundation of their preaching", and this entry is the
trace. ⚑ **If the plate reads *tundamentum*, a `[sic:]` must be added here and the sense kept
beside it** (7a⁗ test 1: the word is the clause's object, so quarantining it alone would leave
"make the ___ of their preaching").

### 0734D · *centecimum* — non-word or attested medieval spelling? No marker; plate read wanted.

> *Hi reddunt fructum, alii tricesimum, alii sexagesimum, alii **centecimum**.*

Corpus: **1 × *centecimum* against 21 × *centesim-* forms.** Two readings, and they point
different ways:

1. **Our corruption** (s → c), same class as *tundamentum* above.
2. **An attested medieval spelling.** Assibilated c/s before a front vowel is a real
   convention of the period (cf. *nuncius*/*nuntius*), and under Pattern 9 an attested
   medieval spelling is **correct Latin for its period** — translate normally, no italics, no
   crux.

Because reading (2) is live, and because either way the marker would be wrong, none was
fired; the English reads "a hundredfold". ⚑ Raised here as a plate candidate. Note also that
*tricesimum* in the same line is **not** suspect — it is classical, and no divergence.

### 0735C · *corrrigitur* — trebled *r*. Same class, same treatment.

> *Qui non **corrrigitur** vindicta ejus ad correctionem data, punietur aeterna poena.*

Corpus: **1 × *corrrigitur* against 8 × *corrigitur***. A doubled letter is a plate or
transcription accident, not a reading; the negation *non* attaches to it and is carried
("He who is **not** corrected …"), which is the thing that matters. No marker; plate read
wanted at 0735C.

### 0737B–C · CAPUT XV prints **VERS. 18** for what is Apc 15:8. Reproduced as printed.

Apocalypse 15 has eight verses. Migne's last address in the chapter is `VERS. 18.-- *Fumo a
majestate,* etc.`, and the text glossed is unmistakably 15:8 (*Et impletum est templum **fumo
a majestate** Dei … nemo poterat **introire***). The verse number is his, and the brief is
explicit that his numbering is not ours to tidy: **reproduced verbatim**, not corrected to
VERS. 8, and logged here. (The following chunk resumes at CAPUT XVI VERS. 2, so nothing
downstream depends on it.)

### 0737B · *Cum ostendissent* — a plural verb where the sentence has a singular subject.

> *Cum **ostendissent** illos angelos habere potestatem plagandi, … prius **proponit** causam…*

*ostendissent* is 3rd plural, *proponit* 3rd singular, and both clauses have the same
implied subject (John). Rendered as printed — "When **they** had shown … he first sets forth"
— because English **does** have an exponent for the number, so the disagreement stays visible
to the reader (this is not the Pattern 9 gender case, where English has no exponent). No
marker: a real word in its own slot, wrong only in number, is Pattern 7's business and not
Pattern 12's.

### 0729C · *Cum dicis* — second person singular. `[cj:]` CONSIDERED AND DECLINED.

> *Cum **dicis**: Creavit ea quae in eo sunt, haeresim quorumdam destruxit…*

*dicis* is "thou sayest", and the first reflex is that the sense wants *dicit*, "when **he**
says", since the words quoted are the angel's and *destruxit* has a third-person subject.
**Declined**, and the reason is that the printed reading construes without help: the
commentator is addressing **John**, whose vision this is and to whom he has been speaking
throughout the chunk (*monetur*, *sibi*, *Ecce revelavi **tibi** omnia*), and John both says
the words and, by saying them, destroys the heresy. A `[cj:]` asserts that the faithful
English misleads; here it does not. Rendered "When thou sayest", singular per Pattern 17.

### 0736D–0737A · *consideratione tamen* — rendered literally, sense not settled.

> *Sed omissa prima, quae fuit de correctione ecclesiarum, de aliis tribus dicit,
> **consideratione tamen**.*

A bare ablative closing the sentence with no governing word. "Yet with consideration" is what
the words say and is what the English prints; whether Migne means "though with [some further]
consideration", or the phrase is the stub of something longer, cannot be settled from the
file. No marker, no conjecture — flagged so a blind reader does not read past it.

### 0738D · *ad quem gloriabuntur* — *ad* for *in*.

*gloriari* takes *in*; *ad quem gloriabuntur* is not standard. Rendered "or unto whom all the
wicked of the diverse sects will glory", as closely as the printed words allow. Real word,
real construction, merely unusual — Pattern 7, no marker.

### 0734B · *remunerationem eo minorem* — obscure, rendered literally.

*eo* read as an ablative of degree of difference against *minorem*: "a reward so much the
less, or a middling one, or the greatest", answering the *sex / sexaginta / centum* ladder
that follows. Flagged because the alternative (*eo* = "from him", already carried by *ab eo*
three words earlier) would be a dittography of sense and is not obviously wrong.

### 0735A · *sua corda devota* — a pun English cannot hold.

> *ut extenderent sua **corda** devota super lignum crucis.*

Under *Citharaedorum*, "of harpers": *corda* is **strings** (of the cithara) and *devota* is
the language of the heart. English must choose one vehicle; **"their devout strings"** was
taken, because the harp governs the whole image and the wood of the cross is the sounding
board. The heart-sense is not lost to a reader who has the Latin column opposite. Recorded
because a later reader may reasonably prefer "hearts".

---

### §3 · REFERENTS SUPPLIED — every "he/she/it/they" the Latin does not print

The dominant Glossa defect class. Each supplied pronoun in this range, with what fixes it:

- **0729A–0730B, chunk 0010 passim** — the unexpressed subject of *exsuperavit*, *fecit*,
  *posuit*, *rugit* is the **angel of Apc 10:1 identified with Christ** by the opening gloss
  (*fortis armatus … exsuperavit*, and *ita **Christus** suos in fide concludens*). Named in
  the sentence itself at 0729B, so the "he"s are not free.
- **0729C *Cum dicis … destruxit*** — see §2. Subject of *destruxit* is **John**, addressed
  in *dicis*, not "the angel"; either reading gives the same English word, but the crux
  records that the choice was made and not defaulted.
- **0730A *monetur quae vidit interim praedicare*** — **John**, from *Et audivi* (Apc 10:8)
  and from *quasi dicatur aperte **sibi***.
- **0733C *ejus* in *Et tabernaculum. Id est omnem institutionem ejus*** — **God's**, from
  Apc 13:6 (*blasphemare nomen ejus, et tabernaculum ejus*), not the beast's. The following
  *per quam laudabilis apparet* confirms it: it is God who appears praiseworthy through his
  institution. ⚑ Binding *ejus* to the nearest noun (the beast) would have made the beast's
  own apparatus praiseworthy, which is the exact "relative bound to the nearest noun" failure
  the brief names.
- **0735A *ad consortium suum*** under *Tonitrui* — "their fellowship" = the **hundred and
  forty-four thousand** of the lemma above (Apc 14:1), not the thunder's. The antecedent is in
  the previous lemma, as the brief warns is usual here.
- **0736B *numerus tuorum*** — **thine**, singular, addressed to Christ/God (*ut Deus
  separationem faciat* two clauses earlier). Pattern 17: singular addressee takes *thou*.
- **0732D *aggreditur expugnare*** — the object supplied as "her" = the **woman/Church**
  (*mulierem* in the same verse and *Ecclesiam* throughout the gloss), not the Son.
- **0738B *isti malitia diabolum*** — verb supplied from the parallel (*generant*): "so these
  by malice **beget** the devil". The ellipsis is Migne's and the parallel is his own.

Where two readings both construe, they are named above rather than chosen silently.

---

### §4 · NEGATION AND PUNCTUATION — what was checked, and what was repaired

**Negation (test 2 + 2a).** Every printed `non · nec · neque · nisi · nunquam · nullus ·
nihil · ne · haud` in cols 0729A–0739B was located, its **host word named**, and the host
found under the negative in the English. The population that fires trigger 2a — a negative on
a verb with a quantifier or correlative nearby — was worked from the sentence's structure,
not from what reads well:

- **0729C** *non ad detrimentum suae salutis praedicationem subtrahi* — host is the phrase
  *ad detrimentum*, not *subtrahi*. English: "preaching is withdrawn **not to the detriment**
  of their salvation." (The 8960 @0740B model.)
- **0730A** *non tanta patieris quanta patientur* — host is the quantity *tanta*, fixed by the
  *quanta* correlative. English: "thou shalt **not** suffer **so great things as** they shall
  suffer."
- **0731B** *Non tantum minores ita glorificant Deum, sed etiam majores* — host is *tantum
  minores*, fixed by *sed etiam*. English: "**Not only** do the lesser thus glorify God, but
  the greater also." ⛔ Not "the lesser do not glorify".
- **0732A** *Non de magno effectu, sed de potentia* — host is the prepositional phrase.
- **0735C** *non dicit pro damnatione describenda: sed tantum pro terrore inferendo* — host is
  *pro damnatione describenda*, fixed by *sed tantum*.
- **0736B** *non quales olim fuerant, sed quales in aeternum mansuri* — host is *quales olim
  fuerant*.
- **0736C** *Aeterna poena … non autem vinum … ponitur* — host is *vinum*, not *ponitur*;
  one verb serves both limbs.
- **0738A** *non quia aperte persequuntur, sed propter consensum damnabuntur* — host is the
  *quia* clause, not *damnabuntur*. English: "they shall be damned **not because** they openly
  persecute, but on account of their consent."
- **0738B** *ii sunt tantum corpora, et non spiritus* … *corporalia et non spiritualia dabit*
  — hosts are the two nouns.
- **0739A** *sed non quantum meruerunt* — host is *quantum*.
- **0733B** — see §2: a negative that may have been **removed** by a word division, handled
  with a `[cj:]` rather than silently supplied.

⛔ **Nothing was rendered as its opposite anywhere in this range, and no negative was
supplied that Migne does not print.** The sentences that read awkwardly in English
(0736D *consideratione tamen*, 0738D *ad quem gloriabuntur*, 0734B *eo minorem*) read
awkwardly because he prints them so.

**Punctuation (test 3, by band).** Compared paragraph by paragraph, the verified column
anchors partitioning both twins identically. **Question marks: zero in the Latin of all five
chunks and zero in the English** — nothing supplied, nothing deleted, and Pattern 8b never
arose (the indirect questions at 0731C *ad quae supplicia ducatur nescit* and 0737D *quare
alios elegit* both close with a **full stop** on his page and do so on ours). Five first-draft
mismatches were found by the band comparison and repaired **toward Migne**, not away:

| col | what the draft had | what Migne prints |
|---|---|---|
| 0729C | comma after "taken away" | `;` (*ablata; ne fideles desperent*) |
| 0729D | `;` before "but now see" | comma (*venerat, sed modo vide*) |
| 0730A | `;` before "now go and preach" | comma (*omnia, modo vade*) |
| 0730C | `:` after "imbued with virtues" | no mark at all |
| 0731D | `;` before "and in all these things" | comma (*occulte, et in omnibus*) |
| 0739A | `;` before "the lesser, of fifty" | comma (*septuaginta duarum, minus quinquaginta*) |

Semicolon and colon counts now match band for band in all five chunks, **including chunk
0012's 25 semicolons**, nearly all of them inside the Greek and Latin numeral tallies at
0734B–C, which are reproduced with Migne's own mixture of spelled-out numbers (*unum*,
*quinquaginta*) and Roman numerals (*CCCC*, *LXX*, *XL*) rather than normalized to one or the
other. The unitalicized *A, unum* at 0734C, sitting among italicized letters, is his
inconsistency and is reproduced.

**Em-dashes:** none introduced. **`deservit`/`deserit`:** neither form occurs anywhere in
cols 0729A–0739B — checked, and recorded as a checked zero.

---

### §5 · TEST 5 — does the English ASSERT what he asserts?

Each finished paragraph was read back against the Latin with the counts already known clean,
asking only that question. Three sentences that read *smoothly* were re-examined on that
ground alone, and two of the three turned out to need nothing:

- **0730C** "Know ye that all the persecutions … proceed from Antichrist, as do those which
  shall be in his own time." — *sicut illas quae erunt in tempore suo*. Checked: the
  comparison is that past and present persecutions proceed from Antichrist **just as** the
  ones in his own time will; the English does not soften it into "including". Clean.
- **0736C** "just as to a vineyard, that it may bear fruit, greater care is applied than to
  land" — *sicut vineae, ut fructificet major cura quam terrae adhibetur*. The dative *vineae*
  and *terrae* are both governed by *adhibetur*; the English keeps the comparison on the
  **care**, not on the fruit. Clean.
- **0733D** *quia, illo destructo, sciunt se remunerandos* — "he being destroyed" is
  **Antichrist**, from *Qui in captivitatem … scilicet Antichristus* two clauses up, not the
  sword and not the devil. Fixed by the lemma above; recorded in §3's class.

⚠ **Not read clean, and named as such:** 0736D–0737A *consideratione tamen* (§2). It reads as
a stub, the English reads as a stub, and no reading was chosen.

---

### §6 · WHAT A LATER READER SHOULD LOOK AT FIRST

1. **0733B** — the `[cj:]` on *fructuosos*/*infructuosos*. A plate read settles it and may
   convert it to a tei-patch.
2. **0734A *tundamentum*, 0734D *centecimum*, 0735C *corrrigitur*** — three plate candidates
   in one stint, all in the non-word class, none marked. If the plate is read for any one of
   them, read the whole line, not the word (addendum C).
3. **0737B CAPUT XV VERS. 18** — Migne's own numbering, reproduced. Do not "fix" it.
4. **The seven `[var:]`** — 0729A, 0729C, 0732A, 0734D, 0735B, 0738B, 0739A. Each rests on
   `sources/vulgate/clementine-flat.txt`, cited above by book chapter:verse.

---


# RANGE FILE — chunks 0015–0019 · cols 0739C–0752B

*Preserved unedited from `cruces-0015.md`.*

## 8977 · *Glossa ordinaria*, **Apocalypsis B. Joannis** — cruces, chunks 0015–0019 (cols 0739C–0752B)

Range file for the fourth and last agent block (CAPUT XVII–XXII, the close of the work).
Merge into `cruces.md` with the other three range files. Conventions are those settled on
Ruth (`src/english/8968/cruces.md` §1) and the Glossa NT brief; they are not re-argued here.

`verify-english.mjs 8977`: **verify OK — 20 chunks, columns/notes/sections aligned, no
duplicate paragraphs.**

**Marker tally for this range: 5 `[var:]` · 1 `[cj:]` · 0 `[sic:]` · 0 `[d:]` · 0 `[ed:]` ·
0 `[nt:]` · 10 `[n:]` (parity with the Latin twins).**

Parity checked mechanically before filing, per chunk: column anchors (verbatim, in order, and
each re-checked **against the word it stands beside in the Latin**), italic-span count with
marker contents stripped, `[n:]` count, and **punctuation band by band** (`;` `:` `?`), which
is the check that actually returned sites — see §5.

| chunk | cols | anchors | italic spans | `[n:]` | `;` / `:` / `?` |
|---|---|---|---|---|---|
| 0015 | 0739C–0741B | 8 | 39 | 3 | 4 / 14 / 0 |
| 0016 | 0741C–0744B | 12 | 56 | 1 | 21 / 17 / 1 |
| 0017 | 0744C–0745D | 6 | 26 | 0 | 4 / 4 / 0 |
| 0018 | 0746A–0749D | 16 | 62 | 6 | 3 / 28 / 0 |
| 0019 | 0750A–0752B | 8 | 32 | 0 | 1 / 13 / 1 |

---

### §1 · THE 7a″ DIVERGENCE LIST — every lemma in the range, collated

Collated against `sources/vulgate/clementine-flat.txt`, cited from
`sources/vulgate/clementine/Apc.lat` and the other books named. **The whole of Apc 17–22 was
pulled and read line by line**; the pre-scan in `data/briefs/8977-lemmata.txt` was used only
to order the work, and it is **incomplete for this range** — it carries no entry for chunk
0015's opening spans (*Et venit unus* · *Angelis* · *Ostendam tibi damnationem*) or for chunk
0018's (*Et vidi* · *Coelum novum et terram novam* · *Sicut sponsam ornatam* · *Vocem magnam
de throno* · *Ecce tabernaculum*). Those were walked in place.

### 1a. The five `[var:]` taken

| col | Migne prints | Clementine | why it fired |
|---|---|---|---|
| 0739D | *In die ortus **sui**,* | Ez 16:4 *in die ortus **tui*** | Third-person for second. **The gloss's own next lemma keeps the second person** — *non est praecisus umbilicus **tuus*** — and its comment is *non refrenasti luxuriam*, "thou hast not bridled". Migne's own sentence is at odds with itself across four words. |
| 0742B | VERS. 20.-- *Exsultate super eam.* | Apc 18:20 *Exsulta super eam caelum* | Plural imperative for singular. |
| 0742D | *Exsultate super eam, **coeli**,* | Apc 18:20 *…caelum* | The same verse re-quoted, and here the addressee is pluralized too. Marked separately because it is a second, distinct divergence (the noun) on a second occurrence; a reader meeting the re-quotation is entitled to the same note. |
| 0743C | VERS. 12.-- *Sicut flamma **ignis**.* | Apc 19:12 *sicut flamma **ignis*** — AGREES | ✅ **PLATE-READ AND WITHDRAWN, 2026-08-28.** PL 114 p. 377 (cols 743/744, corner numbers read first) prints ***ignis***. The *lignis* was **Corpus Corporum's**, not Migne's — an inserted l manufacturing 'a flame of timber'. So there was never a divergence from Apc 19:12, and the `[var:]` asserted one on the strength of our own digitization's error. Marker removed, English now reads *As a flame of fire.*, TEI patched (`data/tei-patches/8977.json`) and the work re-chunked. ⭐ The crux was right that the gloss could not adjudicate — *comburit … accendit … illuminat* construes either way — and right to send it to the plate. |
| 0744C | VERS. 4.-- *Et **vide** sedes.* | Apc 20:4 *Et **vidi** sedes* | Imperative for first-person perfect. Rendered "*And see thrones.*" **The gloss immediately below re-quotes it in the first person three times** — *vidi solutos fideles* · *Vidi in tempore ligationis* · *vidi statim in gloriam intrare* — so Migne's own comment reads *vidi*. ⚠ **Plate-read candidate**, same class as the above. |
| 0749C | *Plateae civitatis aurum.* | Apc 21:21 *platea civitatis aurum* | Plural for singular. Rendered "*The streets of the city gold.*", verbless as Migne prints it. The gloss construes a **plural** (*pleni*, *mundi*), so the plural is not a stray *-e*: it is carried into the comment. |

⚠ Two of these five (*lignis*, *vide*) are single-letter differences on a **real word**, which
is the shape brief §4 says the digitization can create in either direction. **The `[var:]` is
still the right marker and is safe**: it asserts only what the Clementine reads, never that
Migne's compositor erred. If a plate read returns *ignis* / *vidi*, the fix is a TEI patch and
the markers come out in the same commit; nothing on the page has to be retracted as a false
accusation.

### 1b. Divergences found and **declined**, with the reason

Recorded because a findings-only list cannot be told from a report by an agent that never
looked. Each of these was checked against the flat file and is a real difference from the
Clementine; none of them changes the sense, which is Pattern 14's own threshold.

- **0739D · Job 40:11.** Migne: *Virtus ejus … in lumbis … in umbilico*. Clementine:
  *Fortitudo ejus in lumbis ejus, et virtus illius in umbilico ventris ejus.* Migne
  substitutes *virtus* for *fortitudo*, drops *ejus* and *ventris*, and so attaches to the
  **loins** the noun the Vulgate attaches to the **navel**. **Declined**: *virtus* and
  *fortitudo* are near-synonyms here, and the gloss's whole argument turns on *lumbis* and
  *umbilico*, which Migne prints exactly as the Vulgate does. This is the strongest of the
  declines and a later editor may reasonably reverse it.
- **0741A · Jo 4:18.** Migne: *Quem nunc habes non est tuus vir.* Clementine: *et nunc, quem
  habes, non est tuus vir.* Trimmed opening plus *quem nunc* for *nunc quem*. **Declined**:
  word order only; the negative and every content word stand.
- **0743A · the *Vende omnia* quotation.** *Vende omnia, et sequere me* answers to **no**
  single verse: Lc 18:22 *omnia quaecumque habes vende … et veni, sequere me*; Mc 10:21
  *vade, quaecumque habes vende … et veni, sequere me*; Mt 19:21 *vade, vende quae habes …
  et veni, sequere me*. **Declined**: a `[var:]` names one received reading against one
  printed one, and there is no single verse this compresses. Migne prints it without a note.
- **0745A · Apc 20:5.** Migne: *Caeteri **vero** mortuorum non vixerunt.* Clementine: *Ceteri
  mortuorum non vixerunt.* An added adversative particle. **Declined**: connective only, and
  the gloss builds nothing on it. (*Caeteri* for *ceteri* is orthography, not a divergence.)
- **0748B · Phil 3:20.** Migne: *Nostra conversatio in coelis est.* Clementine: *Nostra
  **autem** conversatio in caelis est.* A dropped particle in a quotation the gloss puts in
  the saints' own mouths (*dicentes*). **Declined**, same ground as the item above. Applying
  the two declines the same way is deliberate: added and dropped particles are one class.
- **0748B · Apc 21:19.** Migne heads the stone *Chalcedoni,*; the Clementine reads
  *tertium, **calcedonius***. **Declined**: a stone-name form in a series of lemma heads, all
  the rest of which Migne sets nominative (*Smaragdus · Sardonyx · Sardius · Beryllus ·
  Topazius · Chrysoprasus · Hyacinthus · Amethistus*). No sense turns on it. Rendered
  "*Chalcedony,*", keeping Migne's comma and the `[n: (BED.)]` inside the span as he sets it.
- **0749C · Apc 21:21.** Migne's second lemma *sunt margaritae* reorders the verse's own
  *duodecim margaritae sunt*. **Declined**: order only, inside a lemma he has already clipped.
- **0741B · Apc 17:16.** Migne *Igne concremabunt*; Clementine *et ipsam **igni** concremabunt*.
  **Declined**: *igne* and *igni* are both regular ablatives of *ignis*.
- **0745B · Apc 20:8.** Migne *circumierunt*; Clementine *circuierunt*. **Declined**: both are
  standard forms of *circumeo*.
- **The *coel-* class is not a divergence and took nothing.** *Et vidi **coelum** apertum*
  (0743B) · *Coelum novum* (0745D) · *in **coelis*** (0748B) · *Exsultate super eam, **coeli***
  (0742D, whose `[var:]` is about **number**, not spelling). The pre-scan flags these ⚠ because
  `clementine-flat.txt` spells *cael-*; that is a known false positive and was ignored.

### 1c. Lemmata checked and found to agree with the Clementine exactly

Listed so a later reader can tell a checked lemma from an unchecked one.

**Apc 17 (0015):** *Et venit unus* (17:1) · *Angelis* (17:1) · *Ostendam tibi damnationem*
(17:1) · *Meretricis* (17:1) · *Quae sedet super aquas multas* (17:1) · *Inebriati sunt*
(17:2) · *Mulierem sedentem* · *Capita septem* · *Cornua decem* (17:3) · *Circumdata purpura*
· *Auro* · *Poculum aureum* · *Abominatione* (17:4) · *Et in fronte* · *in fronte* (17:5) ·
*Ebriam* · *Et miratus sum* (17:6) · *Ego tibi dicam* (17:7, = *ego dicam tibi*, order only) ·
*Bestiae quae portat eam* · *Fuit* (17:7–8) · *Ascensura est* · *Et in interitum ibit* ·
*Mirabuntur* (17:8) · *Septem capita* (17:9) · *Quinque ceciderunt* (17:10) · *De septem est*
· *et ipsa octava* (17:11) · *Populi sunt* (17:15) · *Desolatam facient* · *Et nudam* ·
*Carnes* (17:16) · *Donec consummentur verba* (17:17) · **Ez 16:4** *non est praecisus
umbilicus tuus* · **Job 40:11** *in lumbis* · *in umbilico*.

**Apc 18–19 (0016):** *Et post haec vidi* (18:1) · *Cecidit, cecidit* · *Custodia omnis
spiritus immundi* (18:2) · *De virtute* (18:3) · *Et audivi* · *Exite* (18:4) · *Quoniam
pervenerunt peccata* (18:5) · *Reddite illi* · *Duplicate duplicia* (18:6) · *Quantum
glorificavit se* · *Et vidua non sum* (18:7) · *Mors* (18:8) · *Et flebunt* · *Reges terrae* ·
*Cum viderint fumum incendii ejus* (18:9) · *Et negotiatores terrae flebunt* (18:11) · *Auri
et argenti* (18:12) · *Cinnamomum* · *Similae et tritici* · *Mancipiorum et animarum* (18:13)
· *Et sustulit* · *Lapidem quasi molarem* · *Hoc impetu* (18:21) · *Post haec audivi* ·
*Alleluia* (19:1) · *Et ceciderunt seniores* · *Amen* (19:4) · *Et vox* · *Pusilli* (19:5) ·
*Et audivi quasi vocem* (19:6) · *Et uxor ejus* (19:7) · *Et cecidi* · *Vide ne feceris* ·
*Testimonium enim* (19:10) · *Et vidi coelum apertum* · *Equus albus* (19:11) · *Verbum Dei*
(19:13) · *Vestiti byssino albo et mundo* (19:14) · *Gladius ex utraque parte acutus* · *Reget
eas* (19:15) · *Et habet in vestimento* · *Rex regum* (19:16) · *Et vidi unum angelum* ·
*Omnibus avibus* · *Venite* · *Et congregamini* (19:17) · *Et apprehensa est bestia* · *Vivi
missi sunt hi duo* (19:20) · *Et caeteri occisi sunt* · *Et omnes aves* (19:21) · **Ps 32:9**
*Ipse dixit, et facta sunt*.

⚠ **Apc 19:5.** The Clementine copy on disk prints *Ex vox de throno exivit*; Migne's lemma
*Et vox* agrees with the ordinary text and **no divergence was logged**. `sources/vulgate/
README.md` warns that later upstream corrections are not applied, and a call turning on one
letter should say so: this is one, and it is our file that is odd, not Migne's.

**Apc 20 (0017):** *Et vidi angelum* · *Abyssi* (20:1) · *Apprehendit* · *Ligavit eum* (20:2)
· *Et misit eum* · *Signavit super illum* · *Et post haec oportet* (20:3) · *Et animas
decollatorum* · *Et vixerunt* (20:4) · *Haec est resurrectio* · *Prima* (20:5) · *Qui habet
partem* · *Secunda mors* · *Sed erunt sacerdotes* (20:6) · *De carcere* · *Magog* (20:7) ·
*Et circumierunt castra sanctorum* (20:8) · *Die ac nocte* (20:10) · *Et vidi thronum* (20:11)
· *Et libri aperti sunt* · *Alius liber* · *Ex his quae scripta erant* (20:12) · *Et dedit
mare mortuos* (20:13) · *Haec est mors secunda* (20:14).

**Apc 21 (0018):** *Et vidi* · *Coelum novum et terram novam* (21:1) · *Sicut sponsam ornatam*
(21:2) · *Vocem magnam de throno* · *Ecce tabernaculum* · *Et ipsi populus ejus* (21:3) · *Et
mors* (21:4) · *Et dixit* · *Scribe: quia haec* (21:5) · *Et dixit mihi* · *Factum est* ·
*Alpha et omega* · *Sitienti* (21:6) · *Possidebit haec* (21:7) · *Timidis* (21:8) · *Veni et
ostendam* (21:9) · *In montem magnum* · *mons* · *altus* · *Ostendit mihi civitatem* (21:10) ·
*Lumen* · *Jaspidis* (21:11) · *Murum* · *Portas duodecim* · *Nomina inscripta* (21:12) · *Ab
oriente portae tres* (21:13) · *Murus* · *Et in ipsis duodecim* (21:14) · *Et qui loquebatur
mecum* · *Mensuram arundineam auream* · *Ut metiretur civitatem et portas ejus* (21:15) · *In
quadro posita est* · *Per stadia* · *Duodecim millia* (21:16) · *Mensura hominis* (21:17) ·
*Et erat* · *Structura muri ejus ex lapide jaspide* · *Aurum* (21:18) · *Jaspis* · *jaspis* ·
*Sapphirus* (21:19) · *Sardonyx* · *Sardius* · *Beryllus* · *Topazius* · *Chrysoprasus* ·
*Hyacinthus* · *Amethistus* (21:20; *Amethistus* for *amethystus* is i/y orthography) · *Et
duodecim portae* · *Per singulas* · *Singulae portae* (21:21) · **2 Cor 3:2** *Epistola nostra
vos estis scripta in cordibus nostris*.

**Apc 21–22 (0019):** *Non eget sole* · *non eget sole, neque luna* (21:23) · *Et ambulabunt*
· *ambulabunt gentes* · *In lumine* · *Reges terrae* (21:24) · *Et portae* (21:25) ·
*Afferent* (21:26) · *Non intrabit in eam* (21:27) · *Et ostendit* · *Fluvium* · *De sede Dei*
(22:1) · *Et ex utraque* · *lignum vitae* · *Lignum vitae* · *Fructus* · *Et folia ligni*
(22:2) · *Et dixit mihi* · *Dominus* · *Angelum suum* (22:6) · *Et postquam audissem, et
vidissem* (22:8) · *Et fratrum tuorum* (22:9) · *Qui nocet, noceat adhuc* (22:11) · *Beati qui
lavant* (22:14) · *Ego Jesus* · *quod ego Jesus misi angelum meum testificari vobis haec.
Stella splendida.* (22:16 — the span elides *in ecclesiis* and *et matutina*, an ordinary clip,
not a divergence) · *Et spiritus* · *Et spiritus et sponsa dicunt* · *Et qui sitit, veniat* ·
*Qui vult, accipiat aquam vitae gratis* (22:17) · *Contestor enim* (22:18) · *Gratia Domini
nostri Jesu Christi* (22:21).

### 1d. The re-quotation check (7a″ step 3)

Every lemma marked `[var:]` was held fixed and every re-quotation of it in the gloss below
was read against the fixed rendering. **Two of the five markers were confirmed BY the
re-quotation**, and they are the strongest sites in the range:

- **0739D** *ortus **sui*** is contradicted four words later by Migne's own *umbilicus **tuus***
  and *non refrenasti*. The English keeps both persons as printed and does not harmonize.
- **0744C** *vide* is contradicted by three first-person *vidi*s in the sentences under it.
  The English renders the lemma as the imperative Migne prints and the gloss as the first
  person he prints.
- **0742D** *Exsultate … coeli* is the gloss's own re-quotation of the 0742B lemma; both
  occurrences carry a marker.
- **0749C** *Plateae* (plural) is carried into the gloss's plural *pleni, mundi*, so the
  plural is Migne's throughout, not a stray ending.

---

### §2 · THE `[cj:]`, AND THE RIVAL IT BEAT

**0745A** · *Secunda mors … non apprehendet electos, **qui in nullo unquam augentur**.*

Rendered: *…shall not lay hold of the elect, who are never in anything increased*
`[cj: *augentur*; read *anguntur*, "are distressed"]`.

*augentur* is a perfectly good form, so Pattern 12 has nothing to wrap and Pattern 7 requires
the English "increased"; Pattern 18 is exactly the gap this falls into — the printed word is
real and the faithful English misleads. The sentence's own structure decides it: the clause is
appended to *non apprehendet electos*, a statement about what the second death does **not** do
to them, and *anguntur* ("are afflicted") continues that thought where *augentur* changes the
subject to the measure of their glory.

**The rival, and why it lost.** *augentur* can stand, meaning that the elect's state admits no
increase — a real medieval commonplace. It lost on **attachment**: the *qui* clause is
subordinate to *non apprehendet*, and an aside about the fixity of glory has no business
there, whereas *anguntur* is the conclusion the main clause is driving at. The marker is
additive, so a reader who prefers the rival still has Migne's word and its English on the page.

---

### §3 · REFERENTS SUPPLIED, AND WHERE TWO READINGS BOTH CONSTRUE

Every "he/she/it/they" the Latin does not print was named before it was written. The ones a
later reader should be able to check:

1. **0739D · *quos attrahit ad se luxuria*.** *luxuria* is nominative or ablative, and both
   construe. **Taken as ablative of means** — "whom **she** draws to herself by wantonness" —
   because *quae regnat* has just set the harlot as subject and no new nominative is marked;
   *ad se* then points at her, which is what the imagery wants. **The rival**: *luxuria*
   nominative, "whom **wantonness** draws to itself". Nothing in the sentence excludes it. Not
   adjudicable from the file; recorded here rather than chosen silently.
2. **0740B–D · the beast and the devil.** The lemmata are feminine (*Ascensura est*, *bestia*),
   the gloss masculine (*recipiet*, *ascendet*, *habebit*), because the gloss has identified
   the beast as *diabolus*. The English follows each as printed: "it" for the beast-lemmata,
   "he" for the devil in the comment. Not a defect; the identification is Migne's own.
3. **0741B · *Carnes fornicariae manducare dicuntur*.** Unexpressed subject supplied as
   "they" = the ten horns of Apc 17:16 (*hi odient fornicariam … carnes ejus manducabunt*),
   which is the verse the lemma comes from, not anything in the sentence.
4. **0741D · *Reges terrae … dolebunt, quod nunquam similes illis fuerint*.** *illis* is not
   determinable from the sentence: it may be the saints who never fornicated, or the kings who
   governed their earthliness well. Rendered "like to them", which keeps the Latin's own
   openness. **Flagged, not resolved.**
5. **0743B · *In veteri lege non prohibuit se adorari*.** Subject is the **angel** (Apc 19:10,
   *Vide ne feceris*), not Christ; *videns super se exaltatum hominem* confirms it — the man
   exalted above him is the reason he now refuses. The English says "he" throughout and the
   antecedent is the lemma above.
6. **0744C · *peccasse ostendit dum se immunem a peccato ille diabolus occidit*.** *se* is used
   loosely for *eum*: the subject of *ostendit* is Christ, and *se* is Christ as object of
   *occidit*. Read reflexively to *diabolus* the sentence says the devil killed himself, which
   it cannot mean. Rendered "he showed him to have sinned, in that that devil slew him who was
   free from sin", which keeps the Latin's own two "him"s unresolved on the page.
7. **0744C · *Abyssus tenebrosa vocantur corda impiorum; vel ipse diabolus, quos Dominus…***
   *quos* is plural after a singular *diabolus*; it reaches back past it to the ungodly.
   Rendered "whom", carrying the anacoluthon rather than repairing it.
8. **0750C · *ipse etiam dat eis qui pararent eos quibus ipse reddat*.** Three pronouns, no
   antecedent printed for any of them. Rendered as literally as English allows; **the clause
   is obscure in the Latin and is left obscure.** Flagged.

---

### §4 · PLATE-READ CANDIDATES AND CONSTRUCTIONS CARRIED AS PRINTED

**No `[sic:]` was fired anywhere in this range, and that is deliberate** — the ship test
(brief addendum B) says an unread candidate is safe iff it fires no marker, and none of the
candidates below can be settled from the file.

### Plate-read candidates, in priority order

1. **0743C *lignis* for *ignis*** and **0744C *vide* for *vidi*** — see §1a. Both are
   one-letter differences on a real word in a scripture lemma; both are the shape of brief §4's
   normalization/corruption class, which is invisible from the Latin alone. A plate read
   settles both cheaply.
2. **0749C *Vitrum per lucidum*** (Apc 21:21 *tamquam vitrum **perlucidum***). A word split
   across a space is Pattern 10's shape and brief addendum A says a **non-word** raised as a
   plate candidate has been right every time — but "right" there meant **our** digitization's
   corruption, not Migne's, and a `[sic:]` publicly blames Migne. **No marker.** Rendered by
   sense, "*Glass thoroughly clear.*", which is also what the gloss requires (*nullas sordes in
   se celantes*). Note too that *perlucidus* written open is ordinary medieval practice and may
   be Pattern 9, not a defect at all.
3. **0748D *obscurascit***. A hapax in the whole Latin corpus (one occurrence, here); the
   standard inchoative is *obscurescit*. **But it is a well-formed inchoative on *obscurus*,
   and addendum A is explicit that corpus frequency is near-worthless against a real word.**
   Rendered "grows dark", no marker. Raised only so a plate reader can glance at it while
   reading the *topazius* paragraph for something else — which is how the normalization class
   has been found twice (addendum C).
4. **0741B *tormentabuntur***. Also a corpus hapax. *tormentare* is well attested medieval
   Latin; rendered "shall be tormented", no marker, recorded as a checked negative.
5. **0748D *vel minori meritis fiunt***. *minori* where *minores* is wanted. Rendered "or
   become less in merits". A real form, so no marker; worth a look if the page is opened.

### Constructions carried as printed, not repaired

- **0740D–0741A · *Adam, si in obedientia perseverasset, sensus corporis … verterentur*.** A
  nominative left hanging. Carried: "Adam, if he had persevered in obedience, the senses of the
  body would have been turned to no pleasure". Not smoothed into "Had Adam persevered".
- **0745A · *Et non dico vivent et regnabunt in futuro, sed etiam in hoc praesenti*.** The
  `non … sed etiam` correlative with its *solum* elided. **No "only" was supplied**; the
  English reads "And I say not, they shall live and reign in the time to come, but also in this
  present time", which is as unbalanced as the Latin.
- **0748A · *ut sit defensor aliorum … ut sit defensor aliorum*.** The same purpose clause
  twice in one sentence, eleven words apart. **Both rendered; no `[d:]`.** Pattern 11 is for a
  set run repeated; here a full clause intervenes and the second reads as a resumptive purpose
  clause, which a compositor's doubling would not. Recorded as a possible dittography a plate
  read could settle.
- **0744C · *pseudo apostolorum*** set open, against *pseudoprophetis* set closed at 0741C in
  the same work. Rendered "false apostles" / "false prophets". No marker: Pattern 9 covers
  period orthography, and the open form is common.
- **0739D · *quarum semen est umbilico*** — ablative of place with no preposition, against
  *quorum seminarium **in** lumbis est* in the same sentence. Rendered "whose seed is in the
  navel". Not a defect; recorded for the asymmetry.
- **0751B · the chapter's last sentence has NO terminal stop.** *…per meam resurrectionem in
  mane factam* — Migne prints nothing after *factam*. **Pattern 8: never supply.** The English
  ends the same way. This is the range's most visible oddity on the page and it is his.
- **0750D–0752A · the anchor sequence jumps 0751B → 0752A**, skipping 0751C–D. Runbook false
  positive 1 (band arithmetic): the A–D marks are positional quarter-guides, gaps are normal,
  **not reported as a defect.** Recorded only so a reader is not surprised.
- **0748B · Migne glosses no seventh stone.** *Sardius* is the sixth and *Beryllus* the eighth,
  with *chrysolithus* (Apc 21:20) passed over in silence. The ordinals he does print — fourth,
  fifth, sixth, eighth, ninth, tenth (*in denario numero*), eleventh, twelfth — all agree with
  the Clementine's order, so nothing is displaced; the seventh is simply not commented.
  Abridgment, not loss. No `[ed:]`.

### `usque ad` — decided per occurrence (brief §D)

Four occurrences in 0018 (0748B ×3, 0748C ×1), **all four the abridgment formula**, all inside
Bede excerpts opening *etc.*, and all rendered `*as far as*` on the settled precedent
(8985 §371, 8976 §191, from 8978 §205). **No verb was supplied to complete any of them.**

Two look-alikes in 0019 are the words' own, **not the formula**, and were rendered as ordinary
prose: *usque ad finem mundi* (0749D, "even to the end of the world") and *duxit filios Israel
usque ad flumen Jordanis* (0750B). One more in 0016: *Peccata perveniunt usque ad contemptum
Dei* (0741D). Three ordinary uses, four formulas, seven occurrences, all decided in place.

---

### §5 · THE FOUR TESTS, RUN

**Test 1 — no `[sic:]` may swallow its word.** Vacuous here: the range fires no `[sic:]`. The
strip-and-read pass was still run over the `[var:]` and `[cj:]` sites, since the same failure
is available to them. All six sentences read aloud complete with every marker removed; the
`[cj:]` site keeps its verb ("are never in anything increased"), and each `[var:]` sits beside
a lemma that is already fully Englished.

**Test 2 / 2a — name the host, prove it from structure.** Every printed negative in the range
was walked. The population 2a fires on — a negative on a verb with a quantifier or correlative
nearby — has **eight** members here, and all eight are governed by an explicit correlative,
which is the only reason they can be called clean:

| col | Latin | host, proved by | English |
|---|---|---|---|
| 0740D | *sed post licet **non penitus** amisit, tamen **non modice** debilitatam habet* | the *licet … tamen* pivot; both negatives sit on adverbs, not on the verbs | "has **not utterly** lost it, yet he has it weakened **not a little**" |
| 0740D | *dolebunt: **non** quasi poenitentes, **sed tantum** admirantes* | the *sed tantum* | "**not** as men repenting, **but only** as men wondering" |
| 0741A | *jam **non** sensibus, **sed** errori imputatur* | the *sed* | "imputed **not** to the senses **but** to error" |
| 0742D | ***Non** minores sancti **solummodo** … **sed etiam** illi majores* | the *sed etiam*; the negative is on *solummodo*, not on *laudaverunt* | "**Not only** did the lesser saints praise God … **but also** those greater ones" |
| 0744A | ***non** diversas haereses sequentes sicut mali* | the participle it stands before | "**not** following divers heresies as the wicked do" |
| 0746C | ***Non** dabo sitienti **ad horam, sed** perseveranti* | the *sed perseveranti* proves the negative governs the **dative phrase**, not *dabo* | "I will give, **not** to him that thirsteth for an hour, **but** to him that perseveres" |
| 0747B | *et **non omnes** ibi vidi aequales inter se: **sed** unumquemque perfectum* | the *sed unumquemque* proves the host is *omnes*, not *vidi* — this is precisely the 8990/Esther shape | "I saw there that **not all** were equal among themselves: **but** each one perfect" |
| 0749B | *qui **non modo** inter se, **sed etiam** ad inimicos … flammas charitatis emittunt* | the *sed etiam* | "**not only** among themselves, **but even** toward their enemies" |
| 0752A | ***Non** tamen quilibet, **sed** ille **tantum** veniat, qui sitit | the *sed … tantum* | "Yet **not** just anyone, **but** let him **only** come who thirsts" |
| 0750D | ***Non** propter me facta est haec annuntiatio mihi, **sed** ut vos mihi credatis | the *sed* clause | "made to me **not** for my own sake, **but** that you may believe me" |
| 0750C | *nec **tantum** eum, **sed** Deum adorare | the *sed Deum* | "to adore **not** him **only**, **but** God" |

Simple negatives carried without incident, named so they are checkable: *nihil timet* ·
*nec Deum diligant, nec poenas timeant* (0740A) · *ne desperetis* (0740B) · *nisi doctis*
(0740C) · *amplius non habebit* (0740D) · *ad nullam voluptatem* (0741A) · *nunquam similes*
(0741D) · *et vidua non sum* (0742A) · *nullus possit resistere* (0743C) · *nequeunt … nec
possunt* (0743A) · *nisi bene pugnaveritis* (0744A) · *nunquam ad inferos descendere* (0744D) ·
*Caeteri vero mortuorum non vixerunt* · *omnes perfecti esse non possunt, nec in eadem
claritate* · *in nullo unquam* (0745A) · *ne pro velle saeviat* (0745B) · *non fecerat
mentionem* · *se non praedestinatos* · *quae agere noluerunt* (0745C–D) · *dubitabilis non est
quin* (0746A) · *in nullo offendentes, quod non esse potest* · *non erunt ibi lacrymae … non
erit causa* (0746B) · *nihil restare* (0746B) · *una non debet aliam excedere* · *ne nimis
justus* (0747C–D) · *fides non marcescens* (0748A) · *quae non finitur* (0749A) · *ne fures
intrent* (0749D) · *qui non* (0750A) · *Non sunt … alieni putandi* (0750C) · *ne ideo cesset*
(0751A) · *non est labor* (0752A). Count in, count out: **no negative added, none dropped.**

**Test 2b — anchor position.** All 50 anchors were re-checked against the word they stand
beside in the Latin, not merely for presence. Three sit mid-construction and were kept there:
*Et [0742A] vidua non sum* (inside an italic lemma, reproduced as "*And [0742A] I am not a
widow*"), *crucifixus [0748C] est* ("Christ was crucified [0748C] on the sixth day"), and
*cum aere [0749B] mutatur*. Four are the no-space form Migne sets — `[0740A]VERS. 2.--`,
`[0742B]VERS. 12.--`, `[0744A]VERS. 17.--`, `[0745A]VERS. 5.--`, `[0745B]VERS. 7.--`,
`[0752A]VERS. 17.--`, `[0752B]VERS. 21.--` — reproduced closed up, as printed.

**Test 3 — punctuation by band, never by total.** This is the check that returned sites, and
it returned **twenty-three**: every one an English semicolon or colon where Migne prints a
comma, or the reverse. All twenty-three were repaired; the range now matches band for band on
`;`, `:` and `?`, verified per chunk after the edits. ⚠ **The totals would have hidden most of
them** — 0018 alone had a supplied colon at 0747C and a destroyed colon at 0747B, which is the
Tobit failure exactly. **No comma→semicolon sweep was made**: Migne prints 33 semicolons in
these five chunks himself, so the Tobit exception does not apply to this book.

Both `?` marks are direct questions and ride as printed: *Et isti, quare damnabuntur?* (0743B)
and *Cum sim malus, quare me poeniteret?* (0751A). **No `?` was supplied and none deleted**,
and no 8b recasting was needed — the indirect questions in the range (*mirantur … quare Deus
permittit illos exaltari*, 0740C; *non fecerat mentionem corporum, si deberent glorificari vel
puniri*, 0745C; *Ne quaereret aliquis: Quid post illam innovationem futurum est*, 0746B) all
close with Migne's own comma or full stop, so nothing had to be moved behind a colon.

**Test 5 — does the English ASSERT what he asserts?** Read back paragraph by paragraph against
the Latin with the counts already clean. Two things came out of it and neither is a
containment failure:

- **0741B · *perdet* is rendered twice, two different ways** — "whom he shall **destroy**"
  (*quos perdet*, of persons) and "this he shall **lose**" (*hanc perdet*, of the power). Both
  are proper senses of *perdo* and the object decides which; recorded because a reader
  comparing the columns will see one Latin verb against two English ones.
- **0741B · *Desolatam facient* / *Solatium diaboli*.** The gloss is a pun: *desolatam* is
  glossed by *solatium*. The English keeps "desolate" against "solace" so the pun survives.
  Nothing is claimed about whether Migne's source intended it.

**Em-dashes: none in this range.** Nothing was restructured to avoid one and none is reported.

---

### §6 · SMALLER RENDERING CALLS, RECORDED

- **0739C *Angelis*** (from Apc 17:1 *de septem angelis*) rendered "*Of the angels.*" — a
  case-form fragment, Ruth convention 3, the phrase it stands for rather than the bare noun.
  *Meretricis* (0739D) likewise "*Of the harlot.*" **Neither is a stump-vs-expanded
  inconsistency with the true one-word lemmata in the range** (*Auro* · *Ebriam* · *Fuit* ·
  *Carnes* · *Mors* · *Amen* · *Prima* · *Magog* · *Lumen* · *Aurum* · *Jaspis* · the eight
  stone names · *Fluvium* · *Dominus* · *Fructus*), which have nothing elided and are rendered
  as they stand. Naming the two classes before contrasting them, per the brief's closing rule.
- **0742D *antonomastice*** rendered "by antonomasia" — a rhetorical term with a settled
  English form, not italicized as untranslatable Latin.
- **0745B *detectos*** rendered "the uncovered", to hold the *detectos / tegentes* play the
  gloss builds *Magog* on.
- **0749A *pan* · *Chryson* · *prasos*** are Greek words Migne sets **roman, not italic**; the
  English keeps them roman. Italicizing them would have added three italic spans the Latin
  does not have.
- **0750B · one connective supplied.** *…in quibus reficimur ultra flumen, id est, in futuro
  habebimus ipsum praesentem.* Migne prints no mark between *reficimur* and *ultra flumen*,
  where the sense turns from *circa flumen* to *ultra flumen*. Rather than supply a mark
  (Pattern 8) the English supplies the word "and": "in which we are refreshed, **and** beyond
  the river…". A word, not a mark; recorded because it is the one place the English adds
  anything.
- **Pattern 17.** *tibi* / *thou oughtest* / *si polis, obscuras* are singular and take **thou**
  (0740C, 0742B, 0748D, 0750C); *vobis*, *vos*, *cavete*, *providete vobis*, *debetis* are
  plural and take **you** (0739C, 0742D, 0743A, 0744A, 0752A). The two plural scripture
  imperatives keep "ye" under the scripture-echo licence: *Exsultate* → "Rejoice ye" (0742B,
  0742D), *Venite* → "Come ye", *Et congregamini* → "And be ye gathered together" (0744A).
- **Pattern 4 `[f:]` does not apply** to this work (runbook false positive 4): it is a
  lemma-and-gloss commentary and its `[n:]` citations are Migne's inline parentheticals.
  **None was tagged.**
- **Pattern 15.** All ten `[n:]` in the range are citations or attribution sigla —
  `(Job. XL)` · `(Ezech. XVI)` · `(Joan. IV)` · `(Psal. XXXII)` · `(II Cor. III)` ·
  `(Phil. III)` · `(BED.)` ×2 · `(ID.)` ×2. **No note in this range is editorial prose, so no
  `[nt:]` was made.** A checked zero, not a skip.

### ✅ PLATE READ, 2026-08-28 — the two single-letter candidates of §1a, settled OPPOSITE ways

Both were flagged here as needing one letter decided at the plate. **PL 114 p. 377 carries both**, and it splits them:

- **0743C *lignis*** was **OURS**. Migne prints *ignis*; the `[var:]` is withdrawn and the TEI patched. See the row in §1a.
- **0744C *vide*** is **MIGNE'S**. He prints the imperative *Et vide sedes*, and the `[var:]` against Clementine *Et vidi sedes* **stands, confirmed**. His own gloss below re-quotes *vidi* three times (*Ligato diabolo, vidi solutos fideles … Vidi in tempore ligationis … vidi statim in gloriam intrare*), so the plate contradicts its own lemma — exactly what this edition exists to show, and not ours to tidy.

⭐ **The lesson, and it is the argument for reading plates at all:** these two were indistinguishable from the file. Same class, same shape, same evidence, flagged by the same reader in the same breath — and the answers were opposite. Corpus frequency and Vulgate collation could not have separated them; only the plate did.

---
