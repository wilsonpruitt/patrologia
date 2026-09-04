# 8967 · *Glossa ordinaria*, **Liber Psalmorum** — cruces, chunks 0005–0009 (cols 0850A–0859A, Psalms V–IX)

Band A, stint covering `src/latin/8967/0005.md` … `0009.md`.

---

## §0 · SPAN COUNT RECONCILIATION — the brief and the Latin AGREE

`data/briefs/8967-lemmata-0005.txt` declares **21 italic spans**. Counted in my own Latin:

| chunk | spans |
|---|---|
| 0005 | 3 |
| 0006 | 2 |
| 0007 | 3 |
| 0008 | 2 |
| 0009 | 11 |
| **total** | **21** ✅ |

The identities match too, not merely the total: **12 × `*usque ad*`**, plus `*(Isa. [0851A] XXVI)*`,
`*Cognoscetur.*`, `*Convertantur peccatores.*`, `*convertentur,*`, `*In infernum,*`, `*Patientia.*`,
`*Exsurge.*`, `*exsurge.*`, `*Sciant.*` — the nine named spans of the brief, in the brief's order.

⚠ **The brief's COLUMN BANDS are unreliable, though its list is not.** Several spans are labelled with
the chunk's `colContext` rather than the band they actually stand under: e.g. all three of chunk 0005's
are labelled `[0850A]` when they fall at 0850D, 0850D→0851A and 0851B; chunk 0009's mid-chunk spans are
all labelled `[0857A]`, when two of them stand at 0858C and 0859A; and the brief's `[0852D]` and
`[0855C]` entries are really 0853A and 0855C-in-chunk-0008. **The count and the identities are sound;
do not use the brief's band labels to locate a span.**

---

## §1 · PLATE READS — I READ MY WHOLE RANGE AT THE PLATE, AND IT CHANGED THREE CALLS

At launch only cols 0849A–0850D of my range had been read. I rendered and read
**PDF pages 430–435 of `raw/scans/pl113/patrologiaecurs04migngoog.pdf`** (map `PDF page = (column + 11)/2`,
re-verified against the printed corner numbers on every page), covering **cols 0849A–0859D**, plus one
600-dpi crop. All five new reads are recorded in `data/plate-reads.json`.

**Foot-of-page apparatus: ZERO on all six pages**, of either layer (numbered `Forte` conjectures or
asterisk cross-references). Full page width was rendered each time, so this is not a bottom-strip crop.
Coverage for this work stays `spot`; a checked zero over ten more columns is worth having, but it is not
a claim that the work has none.

### ⚑⚑ 1a. THE mod-4 CLIPPING RULE IS FALSIFIED — 853 AND 857 ARE CLEAN

`data/plate-reads.json` recorded, from five pages, that *"a left-hand column whose number is congruent
to 1 (mod 4) loses ~3–5 characters at the start of most lines; 3 (mod 4) is clean,"* and the launch
brief's §3 turned that into a policy: a quarter of this work's columns cannot license a claim about
line-opening type.

**It does not hold.** Read today at 200 dpi:

| col | mod 4 | inner margin |
|---|---|---|
| 0851 | 3 | clean |
| **0853** | **1** | **CLEAN** |
| 0855 | 3 | clean |
| **0857** | **1** | **CLEAN** |
| 0859 | 3 | clean |

Two counter-examples in five pages. Against the earlier tally (841 clipped·1, 849 clipped·1, 1043
clean·3, 1045 clipped·1, 1047 clean·3) the rule now stands at **5 confirmations and 2 refutations**, so
congruence 1 (mod 4) is a **predictor of risk, not a rule**. The scan's clipping is a per-gathering
accident of how tightly that copy was held open, not an arithmetic property of the column number.
`scan_defect` in `data/plate-reads.json` has been amended to say so.

⭐ **Operationally: never decline a reading on the strength of the column number. Render the page.**
It costs one `pdftoppm` call, and on this range it turned a policy-declined column into two shipped
markers and one withdrawn accusation.

---

## §2 · `deeidam` @0853B — NOT MIGNE'S. CORPUS CORPORUM'S. NO `[sic:]` OWED.

Our Latin at 0853B prints

> *« merito » (etsi non videatur hominibus) « **deeidam** ab inimicis meis inanis, »*

a non-word, with the correct form *Decidam* printing eleven words later in the same paragraph
(*« Decidam merito ab inimicis. »*). Every internal signal said "carried type, fire a `[sic:]`" — and
`CLAUDE.md` says in as many words that internal corroboration proves an error **exists**, never
**whose** it is.

**The plate settles it: Migne prints `de-` at the end of one line and `cidam` at the head of the next.**
The word is *decidam*, correctly set, hyphenated across a line break. Corpus Corporum's OCR fused the
break and misread `c` as `e`.

- **English:** rendered normally — *« let me deservedly fall away from my enemies. »* — because that is
  what Migne prints.
- **No `[sic:]`.** Firing one would have accused Migne of his transcriber's defect, exactly as the
  already-repaired `PSAMUS CXXIV` would have.
- ⭐ **Recommended: a `data/tei-patches/8967.json` entry, `deeidam` → `decidam` at 0853B**, on the same
  footing as the `PSALMUS CXXIV` repair. Left for the merge — I did not write the patch file, since a
  patch changes the Latin column for every downstream stint.

⚑ This is the single most instructive site in my range: it is the shape 9004 measured (confident
our-file/Migne calls running 5 right and 9 wrong), and it went the way only the plate could decide.

---

## §3 · MARKERS FIRED — 10, ALL ON COLUMNS I READ AT THE PLATE TODAY

`node scripts/plate-gate.mjs 8967` returns **✓ (read: read)** on all ten. **Unread markers added by this
stint: ZERO** — the ratchet is not touched.

### The one `[sic:]`

**@0852C — `[sic: *poenitentes avertitur*]`** · *Narrat aerumnas quibus **poenitentes avertitur***.
A plural subject against a singular passive verb. Plate-verified at **600 dpi** (page 431, crop): Migne
prints `pœnitentes avertitur`. This is Pattern 12's second test — English *"penitents are turned away"*
is number-neutral in a way the Latin is not, so **rendering it silently repairs the disagreement and
leaves the reader nothing to see**; it is the *signa … ardeat* case (11632 @0304A) exactly.

Per 7a⁗ the marker does **not** stand alone: the sense is rendered in plain words beside it
(*"the hardships by which penitents are turned away [sic: …]"*), so stripping the marker leaves a clause
with its verb intact.

⚠ **The alternative parse, recorded because it is not absurd:** if *poenitentes* were read as a
singular participle agreeing with an unexpressed subject, the clause construes. It cannot be: the form
is plural and Latin does not take an accusative object under a passive. But a reader who wants to
re-adjudicate has the printed reading and this note.

### The nine `[var:]` — Migne's scripture against the Clementine

Every one is plate-confirmed as Migne's own text, not our source's, and every one is cited from
`sources/vulgate/clementine-flat.txt`.

| col | Migne prints | Clementine | why it is material |
|---|---|---|---|
| 0850D/0851A | *sed tolletur impius, ne videat gloriam Dei (Isa. XXVI)* | Is 26:10 *et non videbit gloriam Domini* | the Vulgate has **nothing** answering to *tolletur impius*; the gloss's argument is the **removal** (*quia tunc non habitabit*) |
| 0852A | *Adhuc te loquente dicam, ecce adsum (Isa. LXV)* | Is 65:24 *adhuc illis loquentibus, ego audiam* | 2nd person singular against 3rd plural, and *ecce adsum* is Is 58:9's clause, not Is 65's |
| 0853C | *Melior est qui vincit iram, quam qui cepit civitatem (Prov. XVI)* | Prv 16:32 *Melior est patiens viro forti, et qui dominatur animo suo expugnatore urbium* | an entirely different rendering of the verse (LXX-shaped) |
| 0853D | *Terra es, et in terram reverteris (Gen. III)* | Gn 3:19 *pulvis es et in pulverem reverteris* | ⭐ **the gloss argues from the divergent word**: *quia terra, id est, terrena est*. On the Vulgate's *pulvis* the argument does not run |
| 0856B | *Stulta mundi elegit Deus ut confundat fortia (I Cor. I)* | 1Cor 1:27 *quae stulta sunt mundi elegit Deus, ut confundat sapientes* | *fortia* belongs to the **second** clause, *infirma mundi elegit Deus*; Migne welds the halves |
| 0857A | *In finem pro occultis **filiis*** | Ps 9:1 *pro occultis **filii*** | ⭐ see §4 — Migne's plural cannot bear the gloss's own next words |
| 0857B | *Ite, maledicti (Matth. XXV)* | Mt 25:41 *Discedite a me maledicti* | "Go" for "Depart from me": the whole quoted tag is the divergence |
| 0858B | *requiring **ultione** sanguinem eorum* | Ps 9:13 *quoniam requirens sanguinem eorum* | *ultione* is an interpolation, and the gloss builds on it (*in judicio, ubi … poena occisori erit*) |
| 0858C | *Vidua, quae vivit in deliciis, mortua est (I Tim. V)* | 1Tim 5:6 *Nam quae in deliciis est, vivens mortua est* | the Vulgate's paradox — *living*, she is dead — is what the gloss is expounding (*mors jam est ipsa laetitia*), and Migne's rewriting loses it |

---

## §4 · `pro occultis filiis` @0857A — read at 600 dpi, and the gloss is the witness

Migne heads Psalm IX *« In finem pro occultis **filiis**. »* and glosses it at once:
**« *Nec additur cujus*, per excellentiam est unigenitus Dei »** — *nor is it added whose*. The
question "whose?" can only be asked of a **genitive singular**, which is what the Clementine prints
(*pro occultis filii*). Migne's *filiis* is a dative/ablative plural and cannot govern *cujus*.

I re-cropped the line at **600 dpi** (page 434) before touching it, precisely because a terminal `-s`
is the class of reading a 200-dpi render gets wrong. **The plate is unambiguous: `filiis`.**

- **English renders Migne**: *« Unto the end, for the hidden sons. »* Pattern 7, no exception.
- **`[var:]` beside it**, naming the Clementine's *filii* and saying that this is what the gloss's
  *cujus* presupposes.
- **Not a `[cj:]`.** The reading is not a conjecture question: nothing is defective, and a second
  witness (the Clementine) settles what the received text says. Pattern 14 is the marker that carries
  a divergence between Migne's scripture and the received text, and this is exactly that.

---

## §5 · THE RULED AXES — what my range did with each

- **`In finem` → "Unto the end."** Three occurrences: 0853A (*In finem, psalmus*), 0855C
  (*In finem, pro torcularibus*), 0857A (*In finem pro occultis filiis*). All rendered "Unto the end."
  **No choirmaster anywhere.**
- **`Diapsalma`.** ⚠ **My range does NOT contain the explaining passage** — the launch message says it
  does, but `Diapsalma secundum Hieronymum semper, Hebraei Sela…` stands at **0849B, in chunk 0004**,
  the previous stint's range. What my range has is **one genitive at 0858D–0859A**: *Hic est canticum
  **diapsalmatis***, rendered **"Here is the canticle of the *diapsalma*"** — the term kept,
  unanglicized, italic, per the ruling. Note that **Migne does not italicize it here**, so this is one
  italic span in the English that has no counterpart in the Latin; that is the register rule for
  untranslated technical Latin, and it is deliberate.
- **`usque ad`.** All **12 italic** occurrences → **"as far as"**, the splice formula, unvaried.
  ⚑ **Three UNITALICISED occurrences are NOT the formula and were rendered by sense**, per the axis's
  own exception clause: 0855D–0856A *Scripturae **usque ad** infantes ductae* ("led down as far as
  babes") and *per eas **usque ad** robur nutriuntur* ("nourished **unto** strength") — ordinary extent;
  and 0857C *et qui modo occulte, **usque ad quem** aliquid valent hostis frameae* — a relative
  (**"up to which"**), which "as far as" cannot render at all. A raw `usque ad` grep over my chunks
  returns 15, not 12; that is the instrument, not drift.
- **`gentes`.** One occurrence, 0850B, inside Ps 2:8 *dabo tibi **gentes**, haereditatem tuam*, rendered
  **"Gentiles."** The frame is the *Judaei*/*gentes* typology in its sharpest form — the Church against
  the *aemula* who is shut out of the inheritance — not the generic *in omnes gentes*.
- **`turba` / `multitudo` / `daemonium` / `mysterium` / `sacramentum`.** `daemones` at 0857C → **demons**;
  `diabolus` throughout → **devil**; `mysterium` at 0853A (*futura mysteria*, *Mysterium incarnationis*)
  → **mystery**. No *turba*, no *multitudo*, no *sacramentum*, no *natio*, no *gentilis* in my range.
- **Sigla.** 111 `[n: …]` across the five chunks, passed through verbatim. **No `(ID.)` or `(Ibid.)`
  expanded** — 32 `(Ibid.)` and 0 `(ID.)` stand exactly as printed. Migne's `(CAS.)` at 0852D and
  `(CASS.)` elsewhere are **both** reproduced as printed; they are not normalized to one another.
- **Numerals in heads.** `PSALMUS V.` → `PSALM V.`, numerals kept, after 9003's shipped
  `IN PSALMUM VI.` → `ON PSALM VI.`
- **Psalm numbering.** Vulgate throughout, nothing converted. My range ends at 0859A, one column before
  the double-numbered head at 0859B; the `⚑ Ps 9:2x` flags of §1 of the launch brief fall in chunk 0010,
  not here.
- **Pattern 17.** One live site: 0858B *imo non est oblitus **ut putatis*** → **"as you think"**
  (2nd person **plural**). Also 0850D *non dicit **intendite**, sed **intende*** — the gloss's whole
  point is the number, so it is rendered "he does not say attend **ye**, but attend."

---

## §6 · CRUCES — passages rendered literally, with the difficulty named

1. **@0850C — *contra timorem mortis, periculi, utilitatis.*** The three fears of adversity are given
   as death, peril and **utility**, which is not a fear. Rendered as printed, *"against the fear of
   death, of peril, of profit."* Probably *inutilitatis*, or *utilitatis* in the sense of the loss of
   one's goods, but nothing on the plate decides it and the conjecture would be ours. Plate-confirmed
   (page 430) — Migne prints *utilitatis*. No marker: it is a real word in a real slot, and the English
   does not assert something false, only something odd.
2. **@0850C — the closing sentence of the argumentum has no main verb.** *Ad postremum commemorans
   praemia beatorum, ut … converteret, et … concitarent.* Rendered as the fragment it is. Note also the
   number: *poena converteret* (sg.) beside *praemia concitarent* (pl.), which is correct Latin, each
   verb with its own subject.
3. **@0850C — *Trina oratio, verba, oris psalmodiam, clamorem, cordis affectum … Ecce ter de eodem.***
   The gloss announces three and names two (words = the mouth's psalmody; a cry = the heart's
   affection); the third is *intellige* in the psalm verse, which the gloss does not repeat. Rendered as
   printed. No emendation.
4. **@0852B — *cujus comparatione coactus est confiteri mala sua*.** The unexpressed subject is **the
   rich man** (Dives), not Lazarus: he is the subject of *Confessus est dives* two clauses back, and it
   is he who is compelled. *ab his praemoneri* — "forewarned **by these**" — is genuinely ambiguous
   between Moses-and-the-prophets (Lc 16:29) and Lazarus; rendered with the ambiguity kept, since English
   can keep it here.
5. **@0854B — *Superbus diabolus, quia per iniquitatem vincitur, subdit:*** An anacoluthon: the
   participial clause has no finite verb of its own and *subdit* has no expressed subject. Rendered
   flat — *"The devil is proud, because he is overcome by iniquity, he adds:"* — with the roughness
   visible.
6. **@0854A — *Et quia ablatio hominis, quia poena est diabolo, dicitur ira Dei contra eum.*** A second
   anacoluthon (*Et quia … dicitur*, with no apodosis). Rendered as printed.
7. **@0854C — *et earum fines dirigit justum, et non solum dirigit, sed adjuvat justum*.** *justum* is
   accusative where the sense wants *justi* ("their ends, the just man's"). Rendered literally, *"directs
   also their ends, the just man"*. ⛔ **Declined for `[cj:]`**: the English is awkward, not false — the
   sentence still asserts that God directs and helps the just man, which is what the gloss asserts, so
   Pattern 18's bar ("the English then asserts something the author did not") is not met.
8. **@0854D/0855A — *« Nunquid irascitur. »* and *« Nunquid adducit iram per singulos dies. »*** Both
   are questions in the psalm and **both are closed with a full stop on the plate** (page 432, verified).
   Pattern 8: the marks ride as printed, so the English reads *« Is he angry. »* and *« Doth he bring
   anger every day. »* Not 8b — nothing is being recast, and English is not refusing the mark; **Migne
   simply did not print one.** Both chunks 0007 and 0009 carry zero question marks in Latin and zero in
   English.
9. **@0855A — *Alia littera: « Nunquid adducit iram per singulos dies. »*** and **@0855A *Alia littera:
   Frameam suam splendificavit.*** ⛔ **No `[var:]` on either.** Migne flags these himself as variant
   readings; marking our own would tell the reader twice and blur whose observation it is (the
   *( sic )* principle of Pattern 12).
10. **@0855A — *nec impar dictum est hoc, quia arcum suum tetendit, »*** — a closing guillemet with no
    opener. Reproduced. **Guillemets across my range are 1:1 with the Latin and deliberately unbalanced**
    in five places (0005 23«/22», 0006 24«/23», 0007 62«/61», 0008 29«/26», 0009 41«/36»), all
    plate-confirmed: Migne opens quotations he never closes (*« Ut scuto.*, *« In inferno.*, *« Frameae.*,
    *« Conculcet in terra vitam meam,*, *« Stulta mundi « elegit Deus*). **Do not balance these.**
11. **@0855C — *superdescendent*** (0007, VERS. 17). A rare compound, not a defect; rendered "they shall
    come down upon". *detrudent* has an unexpressed object, supplied as "it" (the *caput/anima* of the
    same clause).
12. **@0856A — *cum tamen et illi fidem, et hi sapientiam veram impugnent*.** The pronoun binding is the
    trap: *illi* = the **heretics** (defenders of the faith), *hi* = the **philosophers** (defenders of
    wisdom), so each impugns the thing he defends. Rendered "the former … the latter" to fix the binding
    in English, which has no *ille/hic* proximity contrast.
13. **@0856B — *hoc bene convenit primitivis*.** *primitivis* is substantival with no noun; rendered
    "those of the first age" rather than supplying "[Christians]" in brackets, since the gloss's subject
    (the apostles seen *in posteris*) makes the reference plain.
14. **@0852D — CC drops a comma the plate prints** (*Dat exemplum fideliter, orantes audiri*, page 431).
    Noted, not marked: the Latin column is our source's, `[sic:]`/`[var:]` do not reach punctuation, and
    the sense is unaffected either way ("faithfully" attaching to *orantes* or to *audiri*). Rendered on
    the sense our Latin gives: "those who pray faithfully are heard."
15. **Migne's own verse numbering skips**, reproduced as printed, never reordered: chunk 0006 runs
    VERS. 3 → **VERS. 5** (no 4); chunk 0007 runs VERS. 8 → **VERS. 10** and VERS. 13 → **VERS. 15**;
    chunk 0008 runs VERS. 5 → **VERS. 8**; chunk 0009 runs VERS. 2 → **VERS. 4** and VERS. 7 → **VERS. 10**.
    All plate-confirmed on pages 431–434.

---

## §7 · DECLINED — divergences and defect candidates I checked and did NOT mark

⭐ On Luke, 12 of 17 corrections came out of declined lists. This is the list.

### Scripture that AGREES with the Clementine — checked, verbatim, clean

| col | quotation | verdict |
|---|---|---|
| 0850B | *Postula a me, et dabo tibi gentes, haereditatem tuam* | = Ps 2:8 exactly (Migne's comma after *gentes* aside) |
| 0853D | *Qui gloriatur, in Domino glorietur* | = 1Cor 1:31 exactly |
| 0856B | *qui non honorificat Filium, non honorificat Patrem* | = Jo 5:23 exactly (fragment) |
| 0856C | *Lunam et stellas quae tu fundasti* | = Ps 8:4 exactly |
| 0857A | *Posuerunt in coelum os suum* | = Ps 72:9 (only *coelum*/*caelum*) |
| 0855A | *arcum suum tetendit* | = Ps 7:13 exactly |
| 0857D | lemma *« Quoniam requirens. »* | = Ps 9:13 opening exactly (the divergence is *ultione*, downstream — see §3) |
| 0858D | lemmata *« Exsultabo »*, *« In laqueo »* | = Ps 9:16 exactly |
| 0859A | *Cognoscetur* (Ps 9:17), *Convertantur peccatores* / *In infernum* (Ps 9:18), *Patientia* (Ps 9:19), *Sciant* (Ps 9:21) | all exact; the brief's ✓ on *Convertantur peccatores* at Ps 9:18 is confirmed, and it is **its own psalm's verse**, not a ⚑ |

### Divergences that are REAL and were judged not material — logged, not marked

- **0852A, 1Pt 4:18** — Migne *« Si justus vix salvabitur, impius ubi apparebit? »*; Clementine
  *et si justus vix salvabitur, impius **et peccator** ubi **parebunt**?* An omitted *et peccator* and a
  singular for a plural. The proposition is unchanged and the gloss uses only the *justus*/*impius*
  contrast. **Declined** — Pattern 14's bar is "changes the sense."
- **0853D, Gn 3:14** — *« Terram manducabis »* for the Clementine's *terram comedes*. A synonym; the
  gloss turns on *terram*, which both texts have. **Declined.**
- **0854A, Ps 7:2** — *« O Domine Deus meus, etc. »* for *Domine Deus meus, in te speravi*. A supplied
  vocative *O* on an abridged citation. **Declined.**
- **0854D, Ps 6:3** — *« Infirmus sum, sana me, Domine »* for *Miserere mei, Domine, quoniam infirmus
  sum; sana me, Domine*. An abridgment stitched from the verse's own words, and one this very
  commentary glossed forty columns earlier at Ps VI. **Declined.**
- **0856A, 1Pt 2:2** — *« quasi modo geniti »* for *sicut modo geniti infantes*. Synonym plus
  abridgment. **Declined.**
- **0856B, Is 40:12** — *« Qui appendit tribus digitis molem terrae »* for *quis appendit…*. A relative
  for an interrogative in a phrase quoted as a description. **Declined.**
- **0857A, Is 14:13–14** — *« Ascendam in coelum et exaltabo solium meum, et ero similis Altissimo »*
  for *In caelum conscendam, super astra Dei exaltabo solium meum … similis ero Altissimo*.
  *ascendam*/*conscendam* is a near-synonym, the missing *super astra Dei* is the recension's ordinary
  abridging, and the word order is the only other difference. **Declined** — this is the one I came
  closest to firing, and the reason I did not is that no clause of the gloss rests on any of the three
  differences.
- **0858A, Ps 9:11** — lemma *« Quoniam non reliquisti »* for *quoniam non **de**reliquisti*.
  Simplex for compound, identical sense. **Declined.**

### Defect candidates that were NOT defects

- **`deeidam` @0853B** — plate says *de-cidam*. **Withdrawn before it was ever fired.** See §2.
- **`praedicaris` @0856A** (*et est, non solum a perfectis, sed et ab insipientibus praedicaris*) — a
  second-person passive dropped into a third-person context. It is **correct Latin in a change of
  address**: the gloss turns to God, as *thou hast perfected praise* four lines later confirms. Not a
  defect; rendered "thou art proclaimed."
- **`quibusdam quies, quibusdam tormentum` @0852C** — verbless, but a normal Latin ellipsis. No marker.
- **`Arguuntur in judicio, qui sine fundamento.` @0851D–0852A** — verbless relative clause, the same
  ellipsis. No marker.
- **`superdescendent` @0855C** — a rare compound, not a non-word; Pattern 9. No marker.
- **The `[Gen. III]` / `(Gen. III)` bracket difference** @0853D — the plate sets square brackets where
  our TEI gives `[n: (Gen. III)]`. That is the chunker's note form, not a textual matter. Noted only.

---

## §8 · CHECKS RUN, WITH RESULTS

- **Column anchors:** 36 across the five chunks, verbatim, in order, and each checked against **the word
  it stands beside in the Latin** (2b), not merely for presence. Two are deliberately mid-construction,
  matching Migne: `*(Isa. [0851A] XXVI)*` sits inside an italic span, and `[0855D]`, `[0851D]`, `[0852B]`,
  `[0853D]`, `[0857C]` open a line immediately before `VERS.`, exactly as the Latin sets them.
- **`[n: …]` notes:** 111, identical strings in identical order. No `[nt:]` conversions — every note in
  my range is a bare attribution siglum or a scripture locator, none is editorial prose (Pattern 15).
- **Guillemets:** exact 1:1 per chunk, unbalanced where Migne is unbalanced. See §6.10.
- **Question marks:** 0/0, 2/2, 0/0, 1/1, 0/0. Exact.
- **Punctuation by band (Test 3):** semicolons now **exact** in all five chunks (1/1, 2/2, 12/12, 6/6,
  3/3) — my first draft ran 10 against Migne's 1 in chunk 0005, which is precisely the comma→semicolon
  drift the test exists to catch, and it was corrected rather than swept. Colons run 31/30, 28/28, 56/56,
  30/29, 47/47 after markers are stripped.
- **Word ratios:** 1.46 · 1.47 · 1.44 · 1.45 · 1.43. Tight, and within the band on every chunk.
- **Em-dashes:** **zero** in all five chunks.
- **7a⁗ strip test:** every marker deleted and the English read back. Nothing stranded; the one `[sic:]`
  leaves a clause with its verb, its subject and its sense.
- **Test 2 / 2a (negation attachment):** all 88 printed negation words walked one at a time, each mapped to
  the single Latin word it attaches to. Five sites carry the 2a trigger shape (a negative on a verb with
  a correlative adjacent) and all five were resolved from the structure, not from what reads well:
  0851D *non vult a mortuis, **sed** a vivis rogari* · 0854C *non delectari in carne, **sed** in Domino* ·
  0855A *non in ipso est ira, **sed** in angelis irae* · 0855A *non propter justitiam qua non gaudent,
  **sed** propter malitiam* (two negatives, two different hosts, one sentence) · 0856A *qui nondum escam,
  **sed** lac sumere possunt*.
- **Test 5 (does it ASSERT what he asserts?):** each finished paragraph read back against the Latin. The
  two that changed as a result are §6.12 (the *illi*/*hi* binding, which had been reversed in draft) and
  §6.4 (the subject of *coactus est*).
- **`node scripts/plate-gate.mjs 8967`** — ✓ on all ten of my markers.
- **`node scripts/verify-english.mjs 8967`** — zero errors and zero warnings on 0005–0009 (the run fails
  only on chunks other stints have not yet written).
- **`node scripts/scan-raw-markers.mjs`** — clean.

---

## §9 · FOR THE MERGE

1. **`data/plate-reads.json` was edited by this stint** — five new reads (cols 0851A–0859D) and an
   amendment to `scan_defect`. The amendment is a substantive correction to a rule the launch brief
   relies on; **it should be reflected in the launch brief's §3 before the remaining stints run**, or
   they will keep declining markers on 1 (mod 4) columns that are in fact perfectly legible.
2. **`deeidam` @0853B wants a TEI patch** (`data/tei-patches/8967.json`, → *decidam*). Not written here
   because it changes the Latin column for everyone.
3. **The lemma brief's band labels are wrong** for at least chunks 0005 and 0009 (§0). The counts are
   right. If another stint reports "my spans are not at the bands the brief gives," that is this, not a
   mis-split.
4. **`(CAS.)` @0852D vs `(CASS.)` elsewhere** is Migne's own inconsistency, plate-confirmed, and is
   passed through. If a later pass normalizes sigla across the work, this is one of the sites.
