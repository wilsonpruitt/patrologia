# Cruces — 11537, Richard of St Victor, *De gemino paschate* (PL 196)

Garbled, doubtful, or impossible readings in Migne's plate, logged here. Where
the printed reading is intelligible as it stands it has been rendered literally;
where it is a pure orthographic or compositorial slip that yields no Latin at
all, the intended reading has been rendered and the printed form recorded here
(the convention followed in `src/english/10103/cruces.md`). Note contents
(`[n: …]`) and bare parenthetical citations always pass through verbatim and
untranslated, so citation errors are flagged here only.

## Structural / editorial

- **Work title vs. heads.** The work is catalogued as *De gemino paschate*, but
  Migne's own heads are two sermons: `SERMO IN RAMIS PALMARUM.` (chunks
  0000–0002, cols 1059A–1067B) and `SERMO IN DIE PASCHAE.` (chunks 0003–0004,
  cols 1067C–1074B). Both heads translated 1:1; the `work:` field left as the
  frontmatter has it. A human should decide whether the site TOC presents this
  as one work with two sermons.

- **cols 1059A–1060A (chunk 0000)** — this work's opening columns overlap the
  closing columns of 11534 (*De differentia sacrificii Abrahae…*, whose last
  anchors are 1059A and 1060A). The two works share the column range in Migne's
  plate; reproduced as printed on both sides, not reconciled.

- **col. 1073B → 1074A (chunk 0004)** — the column sequence jumps from 1073B
  straight to 1074A; there are no 1073C–D anchors in the TEI. Reproduced as
  printed; not an error on our side.

## Chunk 0000 (Palm Sunday sermon)

- **col. 1059B** — `Vinae florentes odorem dederunt` for *Vineae* (Cant. 2:13);
  rendered per the intended reading, "the flowering vines."

- **col. 1060A** — `(Num. [1060A] XXIII)` — a bare parenthetical citation, not
  an `[n: …]` note, with a column anchor falling inside it. Both kept exactly as
  printed and untranslated.

- **col. 1060C** — `Cur, quaeso, homines in hoc pascha florido conveniunt, nisi
  ut processionem pro more faciant!` Migne closes an interrogative with an
  exclamation mark. Reproduced as printed.

- **col. 1061A, note** — `[n: (Eccle. II)]` on `Oculi sapientiae in capite ejus`
  = Eccles. 2:14, whose text is *Sapientis oculi in capite ejus* ("the eyes of
  **the wise man**"). Migne prints *sapientiae*; rendered as printed, "the eyes
  of wisdom."

- **col. 1061A–B** — `Vide ergo quomodo processit, vel qua te via praecessit
  certe paschalis ista hodiernae festivitatis processio, quae generaliter **sit**
  ex operum ejus recordatione, vel imitatione processit.` The sentence is broken:
  no punctuation after *praecessit*, a subjunctive *sit* where *fit* is required,
  and *processit* apparently duplicating *praecessit*. Rendered as literally as
  the printed words allow; a human read-through may want an apparatus note.

- **col. 1061C** — `Servate, fratres, unitatem **fidei** in vinculo pacis` for
  Eph. 4:3, *unitatem Spiritus*. Rendered as printed, "the unity of faith."

- **col. 1061C** — `Denique **quintum** in nobis est, habeamus pacem cum omnibus`
  — *quintum* ("fifth") is impossible; read *quantum* ("as far as in us lies,"
  cf. Rom. 12:18). Rendered per the intended reading.

- **col. 1062A** — `illos **perfecit** electio humana` — read *praefecit* ("set
  them over"), which the parallel *istos extulit ordinatio divina* requires.
  Rendered per the intended reading.

- **col. 1062B** — `Nam et **ὄλεον** apud Graecos *misericordiam* sonat`. The
  Greek for "mercy" is ἔλεος; Migne prints ὄλεον (assimilated to *oleum*, which
  is in fact the point Richard is making). The Greek is reproduced **verbatim**
  as printed.

## Chunk 0001 (Palm Sunday sermon, cont.)

- **col. 1063C–D** — `Sed si **non** oculis hominum se humiliare vel
  contemptibile apparere erubescit, matrem quidem praesentem habet, sed usque
  adhuc pulli praesentia caruit.` With *non* the sentence asserts the opposite of
  its own conclusion (and of the next sentence, *Si te exterius humilias, sed
  magnum aliquid de te existimas, pullum habes, sed matrem non habes*). The *non*
  is intrusive. Rendered without it, per the intended reading.

- **col. 1063D** — `Alioquin si te ficte humilias, et fraudulenter incedis,
  **eum**, secundum prophetae sententiam…` *eum* is unconstruable; read *tum*
  ("then"). Rendered per the intended reading.

- **col. 1063D–1064A** — `Constat namque quia inter pares maxime nasci solet
  invidia, et ex invidia discordia?` Migne closes a statement with a question
  mark. Reproduced as printed.

- **col. 1064B** — `**humilationis** suae materiam` for *humiliationis* (dropped
  syllable). Rendered per the intended reading.

- **col. 1064C** — `(Job XXVII)` — bare parenthetical citation, not an `[n: …]`
  note; kept verbatim and untranslated. Likewise `(Rom. [1066A] V)` at 1066A,
  with a column anchor falling inside the citation.

## Chunk 0002 (Palm Sunday sermon, cont.)

- **col. 1066B** — `libenter, ut arbitror, nos humiliamus, **sive** verae
  humiliationis fructum attendimus` — read *si* ("if"). Rendered per the intended
  reading.

- **col. 1067A, note** — `[n: (Matth. XI)]` on *Non veni mittere pacem in terram,
  sed gladium* = Matt. **10**:34. Verbatim; flagged.

- **col. 1067A, note** — `[n: (Joan. XII)]` on *Pacem relinquo vobis, pacem meam
  do vobis* = John **14**:27 — and Migne cites the very same verse correctly as
  `(Joan. XIV)` a few lines earlier at 1066D. Verbatim; flagged.

- **col. 1067B** — `**Quid** de secunda ad tertiam, secundum jam transitum
  fecit` — read *Qui* (with a verb of passing understood): "He who [passes] from
  the second to the third…". Rendered per the intended reading.

- **col. 1067B** — `Ecce de floribus, ecce de fructibus **tentamus**: istos
  desideremus, illos, **ut in aeternum fuit**, mereamur`. Both italicized
  stretches are doubtful: *tentamus* is probably *tetigimus* ("we have touched
  on"), and *ut in aeternum fuit* is unconstruable (perhaps *ut in aeternum
  fruamur*). Rendered as literally as the printed words allow.

## Chunk 0003 (Easter sermon)

- **col. 1069A, note** — `[n: (Luc. XXIII)]` on *Ecce ejicio daemonia, et
  perficio sanitates* = Luke **13**:32. Verbatim; flagged.

- **col. 1067C** — `utrum aqua quam vobis propinabo fluat **de medio fontium**`
  — the antithesis requires something other than "fountains" on the near side of
  the *an* (Migne's second member is *de fontibus Salvatoris*). Rendered as
  printed.

- **col. 1068A** — `non solum majoris vel **partis**, sed etiam inferioris` —
  read *paris* ("an equal"), which the sequence greater / equal / inferior
  requires. Rendered per the intended reading.

- **col. 1069D** — `Unde sancti **jam** mortem timent, sed cupiunt dissolvi et
  esse cum Christo.` A negative has dropped out: the sense (and *sed*) requires
  *jam non timent*. Rendered per the intended reading, "now no longer fear
  death."

## Chunk 0004 (Easter sermon, cont.)

- **col. 1070C** — `Ubi ergo non est fides, nec justitia, ibi non est justitia
  nec vita.` The clause is garbled by haplography; the intended chain is *ubi non
  est fides, nec justitia; ubi non est justitia, nec vita*. Rendered as printed.

- **col. 1070D, note** — `[n: (Philipp. XXI)]` = Philipp. **2**:9. Philippians
  has four chapters, so XXI is impossible; the intended reading is II. Verbatim;
  flagged.

- **col. 1071D, note** — `[n: (Psal. XCV)]` on *Honor regis judicium diligit* =
  Ps. **98**:4 (Vulg. 98). Verbatim; flagged.

- **col. 1072D, note** — `[n: (Psal. XXXVI)]` on *Exsurge gloria mea, exsurge
  psalterium et cithara* = Ps. **56**:9 (Vulg.). Verbatim; flagged.

- **col. 1072D, note** — `[n: (I Cor. XXI)]` on *Vir est imago et gloria Dei* =
  I Cor. **11**:7. First Corinthians has sixteen chapters, so XXI is impossible.
  Verbatim; flagged.

- **col. 1071D** — `psalterium vero sonat a superiori, et ideo **signifiat**
  bonorum operum exhibitionem` for *significat*. Rendered per the intended
  reading.

- **col. 1072B** — `Reus peccati est aliquis, id est, **dignius** ut pro peccato
  puniatur` for *dignus* (the parallel clause two lines later prints *dignus*
  correctly). Rendered per the intended reading.

- **col. 1072C** — `**Iste** igitur tres auctoritates … intelligendae sunt` for
  *Istae* (feminine plural, agreeing with *auctoritates*). Rendered per the
  intended reading.

- **col. 1072D** — `Panis azymus absque fermento est, **si gignat**
  sinceritatem` — read *significat*, which the parallel next sentence (*designat
  veritatem*) requires. Rendered per the intended reading.

- **col. 1072D** — `Sinceritas **partim** ad citharam, veritas ad psalterium` —
  read *pertinet*. Rendered per the intended reading.
