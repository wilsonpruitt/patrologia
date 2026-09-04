# Cruces — 8967 *Glossa ordinaria*, Liber Psalmorum, chunks 0010–0014 (cols 0859B–0870C)

Stint 5 of Band A. Psalms X (Hebrew division) · X · XI · XII · XIII · XIV · XV · XVI · XVII.

## 0. Span reconciliation — REQUIRED CHECK, and it AGREES

`data/briefs/8967-lemmata-0010.txt` declares **307 spans** for chunks 0010–0014.
Counted mechanically in my own Latin (`re.findall(r'\*[^*]+\*')` over the body of each chunk):

| chunk | spans |
|---|---|
| 0010 | 69 |
| 0011 | 68 |
| 0012 | 44 |
| 0013 | 32 |
| 0014 | 94 |
| **total** | **307** |

**307 = 307. No discrepancy.** The brief's first and last entries (`[0859A] *Secundum Hebraeos.*`
and `[0870B] *Magnificans, salutes.*`) are also the first and last spans of my Latin, so the split
is correct at both ends, not merely in total.

⚑ Re-checked against the **corrected** brief issued mid-stint (stale column labels repaired):
the header still declares 307 and the file still carries 307 `[0…]` rows. Membership is by
chunk, not by band, so nothing moved. The count stands.

English span counts run higher by exactly the italics inside our own markers: 0010 +4 (three
`[var:]`), 0011 +3 (one `[var:]`, one `[cj:]`), 0012 +0, 0013 +0, 0014 +2 (one `[var:]`). Every
italic span of the Latin has an italic span in the English at the same place.

## 1. The two heads both numbered X — NOT a defect, and nothing was touched

Chunk 0010 carries `## PSALMUS X.-- *Secundum Hebraeos.*` (0859B–0861A) and then
`## PSALMUS X.` (0861A–0861D). **Both are reproduced as Migne prints them, in his order, with
his `VERS.` numbers restarted at 1 in the second.** Read at the plate (p. 435, cols 859/860 and
p. 436, col 861): the heads print exactly so. No renumbering, no merge, no marker.

The nine `⚑ MATCHES ONLY ELSEWHERE — Ps 9:2x` flags in my brief (0859B–0860D) are the checker
reporting correctly — the Hebrew division is the tail of Clementine Ps 9 — and **no `[var:]` was
fired on any of them.** Collated individually against `sources/vulgate/clementine-flat.txt`:

`Ut quid.` = Ps 9:22 · `Dum superbit.` = 9:23 · `Incenditur pauper…cogitant.` = 9:23 ·
`Quoniam laudatur.` = 9:24 · `Irae suae.` = 9:25 · `Inquinatae.` / `In omni tempore.` /
`omnium inimicorum suorum dominabitur.` = 9:26 · `Dixit,` / `sine malo,` / `Non movebor.` = 9:27 ·
`cujus maledictione os plenum,` / `sub lingua ejus,` = 9:28 · `In occultis,` = 9:29 ·
`Oculi ejus in pauperem,` / `Leo in spelunca,` = 9:30 · `Inclinabit.` = 9:31 · `In finem.` = 9:32
(*ne videat in finem*) · `Contere brachium.` / `Quaeretur.` = 9:36 ·
`Dominus regnabit…saeculi.` = 9:37 · `desiderium pauperum,` / `Praeparationem cordis.` = 9:38 ·
`Judicare pupillo et humili,` = 9:39. **All agree with the Clementine word for word** except the
three sites marked in §2.

Vulgate numbering governs from PSALMUS XI onward and it was checked, not assumed: every lemma
of Psalms XI–XVII in chunks 0011–0014 resolves to Clementine Ps 11–17 at the same number
(spot-verified across all 24 `VERS.` heads in the range). Nothing is offset.

## 2. Markers fired — five, every one on a column read at the plate this session

Plate: on-disk `raw/scans/pl113/patrologiaecurs04migngoog.pdf`, PDF page = (column + 11) / 2,
re-calibrated against the printed corner numbers on every page opened (p. 435 = 859/860,
436 = 861/862, 437 = 863/864, 438 = 865/866, 439 = 867/868, 440 = 869/870). **All six pages of
my range were read; all six are recorded in `data/plate-reads.json`.** `plate-gate.mjs 8967`
passes every marker below.

| col | marker | why it is licensed |
|---|---|---|
| 0860B | `[var: Vulg. Ps 9:33 *exaltetur manus tua ; ne obliviscaris pauperum*…]` | Migne prints *Exsurge, Domine Deus, et exaltetur manus, **ut** obliviscaris* — read at 400 dpi. **A polarity flip**: the Clementine's *ne obliviscaris* ("forget not") becomes a purpose clause ("that thou mayest forget"), in a lemma whose own gloss is *Precatur judicium*. Material by any test. |
| 0860B | `[var: Vulg. Ps 9:34 *Propter quid*…]` | Migne's lemma reads *Propter **quod** irritavit impius Deum* — but **his own gloss four words later quotes *propter quid?*** and expounds it as a question. The interrogative the commentary argues from is not the word the lemma prints. This is the `[var:]` test exactly: the gloss argues from the word. |
| 0860B | `[var: Vulg. Ps 9:34 *dixit enim in corde suo*, with no *Deus*…]` | Migne prints *Dixit enim **Deus** in corde suo*. The Clementine has no subject there, and the subject the psalm supplies is the *impius* of the preceding clause. Inserting *Deus* changes who speaks — and Augustine's gloss (*Sensus iste pronuntiationem quaerit*) is precisely about how the sentence is to be delivered. Material. |
| 0862D | `[var: Vulg. Prov 20:26 *Dissipat impios rex sapiens, et incurvat super eos fornicem*…]` | Migne prints *ventilator est impiorum rex sapiens, et immittit illis rotam malorum* under his own reference `(Prov. II)`. Read at the plate on p. 436. This is **not a variant of the Clementine's wording, it is a different Latin version of the verse** (a winnower and a wheel against a scatterer and an arch), and the gloss builds on the wheel — *id est, ambitum volubilium*. |
| 0868A | `[var: Vulg. Ps 17:11 *volavit super pennas ventorum*…]` | Migne prints *Volavit super pennas **vento*** — singular — and then glosses it *Ventos, quibus nihil est velocius* — plural. Read on p. 439. The gloss expounds a word the lemma no longer prints. |

And one Pattern-18 conjecture note:

| col | marker | why |
|---|---|---|
| 0862B | `[cj: *Germinatio*; read *Geminatio*, "the doubling"]` | Ps 11:3 prints *in corde et corde*; Migne's gloss is *Germinatio, duplex cor significat* — and *germinatio* ("a budding") signifies nothing of the kind, while *geminatio* ("a doubling") is the whole point of the repeated *corde*. **Read at 500 dpi: Migne prints *Germinatio*,** so this is his and not CC's, which is why it takes `[cj:]` and not a source patch. Pattern 18's bar is met — the faithful English ("germination signifies a double heart") asserts something the author did not. The gloss is additive: the printed word keeps its English. |

## 3. ⛔ SIX CORPUS CORPORUM DEPARTURES FROM THE PLATE — patch candidates, NOT `[sic:]`

Every one was found by reading the plate, none is detectable from the Latin alone, and **none
takes a marker, because a `[sic:]` would accuse Migne of his transcriber's defect.** This is
~1 per page, against the standing 9003 estimate of ~3 per page, so the class is behaving as
documented.

1. **0862C — a compound siglum split.** The plate sets `(AUG., CASS.)`. Our TEI gives bare
   running text `AUG.,` followed by a separate `[n: (CASS.)]`. The English reproduces the twin.
2. **0863D — a siglum unencoded and its point dropped.** The plate sets `(CASS.)`; our TEI gives
   bare text `(CASS)` — no `[n: ]` wrapper, no full stop. English reproduces the twin.
3. **0864A — a dropped letter inside a siglum.** The plate sets `(CASS.)`; our TEI gives
   `[n: (CAS.)]`. ⚠ **Do not sweep this**: Migne's own `(CAS.)` at 0863A and 0863C was read at
   400 dpi and IS his. Two forms, one of them ours, and only the plate tells them apart.
4. **0866D — an inserted word.** The plate reads `non humiles, adipem, id est, carnalem sensum
   retinuerunt`; **our TEI inserts `vel` before `adipem`** (read twice at 400 dpi). This is the
   only one of the six that touches the sense.
5. **0870A — a full stop softened to a comma.** The plate reads `et dilatatio. et confirmatio`
   (500 dpi); our TEI gives `et dilatatio, et confirmatio`. Pattern 8 class.
6. **0870C — an inserted comma.** The plate reads `*Magnificans salutes.*`; our TEI gives
   `*Magnificans, salutes.*`.

Plus a seventh which is not a word at all: **0867C `captu+m`.** The plate reads `captum`
cleanly (p. 439); the `+` is the only one in this work's TEI. **The English renders Migne's word
("a man taken captive") and fires no marker** — carrying an unrenderable CC artifact into the
English under a `[sic:]` would blame Migne for it.

⛔ **THE POLICY I APPLIED, stated so the merge can undo it in one pass.** For (1)–(6) — all
renderable — **the English follows the Latin twin as it currently stands**, so the parallel
columns agree and a blind reader does not report a dropped or invented word that is really a
pending patch. Only for `captu+m`, which cannot be rendered at all, does the English follow the
plate instead. **If `data/tei-patches/8967.json` is extended and the work re-chunked, item 4
requires one English edit** (0013.md: drop the "or" before "the fat") and items 5–6 require none,
being punctuation of the Latin only. I did **not** patch or re-chunk: seven other stints are
writing chunks of this work in parallel and `chunk-work.mjs` rewrites every chunk from TEI.

## 4. Divergences from the Clementine CHECKED AND DECLINED — the declined list

Per 7a″ these are the deliverable as much as the fired markers. Each was collated against
`sources/vulgate/clementine-flat.txt` and each is Migne's, confirmed at the plate.

**Declined as immaterial (sense unchanged):**

- **0861B `quia quae perfecisti destruxerunt`** — Ps 10:4 has *quoniam*. A connective swapped
  for its synonym inside the gloss's own re-quotation; the lemma above it prints *Quoniam*
  correctly. No sense turns on it.
- **0863A `Cupio dissolvi et esse cum Christo` (Phil. I.)** — Phil 1:23 reads *desiderium habens
  dissolvi*. Same sense; the *cupio* form is the ordinary patristic citation of this verse.
- **0863B `Est peccatum ad mortem, non pro eo dico ut quis oret`** — 1 Jo 5:16 reads *non pro
  illo dico ut roget quis*. Pronoun and word order only; the negation and the sense are intact.
- **0863D `Veniet ex Sion qui avertit captivitatem, vel impietatem a Jacob`** — Rom 11:26 (citing
  Is 59:20) reads *qui eripiat, et avertat impietatem a Jacob*. ⚑ **Declined for a positive
  reason, not a weak one: Migne's own *vel* shows the Glossa is offering the two readings
  itself.** A `[var:]` would tell the reader what the text already tells him, in our voice.
- **0864C `Nec fecit proximo malum`** — Ps 14:3 has *proximo **suo** malum*. A possessive
  dropped in a lemma that is clipped anyway.
- **0864C `Vade retro, Satanas`** — no Clementine verse reads this; Mt 16:23 has *Vade post me
  Satana*, Mk 8:33 *Vade retro me Satana*. This is the proverbial form, adduced by the gloss as
  a commonplace ("ut cum dixit"), not quoted as a proof-text. Crux, no marker.
- **0864C `timentes Dominum glorificat`** — Ps 14:4 has *timentes **autem** Dominum glorificat*.
  Clipped, not divergent.
- **0864D `Jam non dicam vos servos, sed amicos`** — Jo 15:15 reads *Jam non dicam vos servos …
  vos autem dixi amicos*. A compression of two clauses into one, with no change of assertion.
- **0865A `Sanctis qui sunt in terra`** — Ps 15:3 has *in terra **ejus***. Clipped.
- **0868D `Ecce praevenerunt`** — Ps 17:19 has *praevenerunt me in die afflictionis meae*; the
  *Ecce* is the gloss's own pointing word, not a variant reading.
- **0869A/B `tu, Domine, populum humilem salvum facies`** — Ps 17:28 has no vocative. An added
  *Domine* in a formula the gloss quotes three times; nothing turns on it.
- **0869A `Habemus thesaurum istum in vasis fictilibus`** — 2 Cor 4:7 has *Habemus **autem***.
  A connective dropped at the head of a quotation.
- **0870B `Disperdidisti, Pater,`** — Ps 17:41 has *odientes me disperdidisti* and no vocative;
  the gloss introduces it as *Supra ait* and supplies the addressee its own argument needs
  (*eadem operatio Patris et Filii*). The gloss's construction, not a divergent text.
- **0870B `Et exaltetur Deus salutis`** — Ps 17:47 has *Deus salutis **meae***. Clipped, and the
  gloss immediately restores *de Deo salutis meae*.
- **0868A `Virga furoris mei Assur, ipse vero non cognovit`** — a conflation of Is 10:5 and
  10:7, freely quoted; neither half is being adduced as a text with a reading at stake.
- **0868A `Clarificavi, et iterum clarificabo`** — Jo 12:28 exactly, with the Clementine's
  leading *Et* dropped.

**Declined suspicions that the plate REFUTED (recorded because a checked negative is worth as
much as a finding):**

- **0866B doubled *scilicet*** — `Scilicet opera hominum: quas scilicet merentur opera hominum`
  reads like a dittography and is not: the plate prints it exactly so (p. 438). Rendered as
  printed, no `[d:]`.
- **0869A `sordescat`** — checked at the coordinator's request, since the same form was a
  confirmed CC normalisation elsewhere in this work (the other site's plate reads *sordescet*).
  **Here the plate agrees with our TEI: p. 440, read at 500 dpi, prints `qui in sordibus est,
  sordescat adhuc`.** No patch is owed at this site, and the other site's finding must not be
  generalised to it.
- **0867B `iustorum`** for *justorum* — our TEI's only i/j outlier in the range; the plate prints
  *justorum*. An orthographic normalisation of no consequence, exempt under Pattern 9. Recorded
  only so the next reader does not spend the page-fetch I already spent.

**Declined because they are Migne's own apparatus, not ours to mark:**

- **0868A `aqua satians [ *alias* saliens]`** — Migne's own inline variant note, in his brackets,
  with his italic *alias*. Carried through verbatim, the reading untranslated (a reading needs no
  English), exactly as a numbered `[cn:]` would be. **Not marked as ours.**
- **0868A `[n: (Matth. II)]`** — the reference is attached to *non per speciem*, which is
  2 Cor 5:7, and it does not fit; the next paragraph cites `(II Cor. V)` correctly. Migne's
  citation, passed through verbatim under convention 4. **Not expanded, not corrected** — a
  reference correction is `citation-corrections.json`'s business, not a translator's.
- **`(ID.)` / `(Ibid.)`** — 20 of them in the range, none expanded.

## 5. Cruces in the gloss prose

- **0859D `vel, Deus eum, ut hic ulciscatur`** (Ps 9:25). The verb is elided; it must be carried
  over from *non quaeret* three clauses earlier, so the English reads "God will not seek him
  out." The negation therefore governs a verb the Latin does not print at this point. Rendered
  with the negation, per 7a; the alternative (an affirmative "God seeks him out to avenge
  himself here") would be exactly the silent repair 7a forbids.
- **0859D `id est levior, lingua ejus, quae intus nocet: illa, scilicet poena extra.`** The
  comparative has no *quam*, and *illa* has no clear antecedent. Rendered as closely as the words
  allow ("that is, it is the lighter; his tongue, which harms within: that other, namely, is the
  punishment without"). Not smoothed; not marked — the words are all real and in their slots.
- **0861C `usque ad qui tunc dicit sancta sacramenta, cum per sanctos dentur.`** The abridgment's
  resumption tail opens with a relative whose antecedent was cut away with the omitted text.
  Parsed as ordinary prose per the brief's warning and rendered "he then calls the sacraments
  holy"; the *qui* is left to do the work of a demonstrative, which is what the splice made of it.
- **0866B `Quo sui judicatus videatur prodisse`** (Ps 16:2). *sui* is doing something the syntax
  does not license cleanly. Rendered "whereby he who was judged may be seen to have come forth as
  his own." Real words in real slots; crux, no marker.
- **0866C `Mira, sunt quae nova sunt: haec sunt quae in carne cessit mirantibus Judaeis.`**
  *cessit* is intransitive and takes no *quae*. Rendered literally ("which he yielded in the
  flesh"). Crux, no marker.
- **0867B `et hoc qui praeoccupavit mortalitas et possibilitas`** (Ps 17:8 gloss). *qui* does not
  agree with anything; the sentence does not construe. Rendered as closely as the printed words
  allow, "and this, which mortality and possibility forestalled." **No conjecture is offered,
  because two are available (*quod*, *quae*) and nothing in the passage chooses between them.**
- **0868A `Dedit vocem: ut non dixit: Hic est Filius meus dilectus`** — flagged, examined,
  and **found sound**: at Jo 12:28 the voice from heaven did *not* say what it said at the
  Transfiguration, and Cassiodorus is drawing exactly that contrast. The plate prints *non*
  (p. 439) and the English carries it. Recorded here because it reads at first like a dropped
  *cum* and a later reader will stop on it.

## 6. Unexpressed subjects supplied, with the authority for each

Per the brief's dominant-defect warning, every pronoun the Latin does not print:

- **0859B *Dum superbit.*** → "While the wicked man is proud." Subject *impius* from Ps 9:23,
  the verse the lemma clips.
- **0859B *Quoniam laudatur.*** → "For the sinner is praised." Subject *peccator* from Ps 9:24.
- **0859C *Inquinatae.*** → "Defiled." Its noun is *viae illius* (Ps 9:26), and the gloss's own
  next clause supplies it (*et ideo viae ejus … sordent*), so the English keeps the participle
  bare and lets the gloss govern.
- **0860C *Vides enim quoniam tu laborem et dolorem.*** → "…that thou considerest labour and
  sorrow." The verb *consideras* is the next word of Ps 9:35 and the lemma stops before it;
  English cannot leave the accusatives without a verb. Expanded per convention 3.
- **0861B *Quoniam quae perfecisti.*** → "For the things which thou hast perfected." Here I did
  **not** supply *destruxerunt*, because the same paragraph re-quotes the fuller
  *quia quae perfecisti destruxerunt* and expanding both would erase Migne's clipping.
- **0863D *Dominum non,*** → "The Lord they have not called upon." *invocaverunt* from Ps 13:5.
- **0864D *Et munera super innocentem.*** → "And gifts against the innocent." ⚑ **I did NOT
  expand to the Vulgate's *non accepit*.** Convention 3 would license it, but 7a forbids a
  negation in the English that the Latin does not print, and 7a wins: the gloss's own
  *sed non contra innocentes* carries the sense two clauses later.
- **0867B *Frameam.*** → "The sword," not "thy sword": Ps 16:13 has *frameam tuam*, and the gloss
  makes the sword the soul, not God's.
- **0867A `Populus *catulus leonis*`** — "the people is the young of a lion." The predicate is
  unexpressed; *Populus* is the printed subject.

## 7. Vocabulary axes — every decision in the range

- **`In finem` → "Unto the end"** at 0860A, 0861A, 0862D. ⚑ The 0860A occurrence glosses
  Ps 9:32's *ne videat in finem*, so the rendering is not merely the titulus convention here —
  the gloss (*Negant videre Deum*) argues from the end of seeing. No exception taken.
- **`Diapsalma`** at 0859B: unanglicized, **and set roman, because Migne sets it roman there**
  (p. 435). The launch brief says "italic as Migne sets it"; he does not, so neither do we, and
  the span counts stay 1:1.
- **`gentes` family**, all seven occurrences decided from the context, not by rule:
  - 0859D `Omnes gentes occupabo` (Antichrist speaking) → **nations** — generic.
  - 0860D `ab hoc regno peribitis gentes` → **nations** — the psalm's own vocative (Ps 9:37),
    generic, no *Judaei* in view.
  - 0862C `*Inopes,* gentiles … *pauperes,* Judaei` → **Gentiles** — the typological opposition
    in its purest form, printed in one clause.
  - 0863D `plenitudo gentium` (Rom 11:25) → **Gentiles** — same opposition, the Jews named in
    the same sentence.
  - 0865C `Haereditas enim ad gentes` → **Gentiles** — Christ's inheritance against the cup of
    the passion, in a psalm the gloss reads *ut sit rex Judaeorum*.
  - 0867B `Gentiles in inferno` → **Gentiles** (`gentilis` per the 2026-09-04 addition).
  - 0868C `transitus ad gentes` and 0870B `exaltatio gentium` → **Gentiles** — both stand against
    *Judaei* in their own clause (`depressio Judaeorum, et exaltatio gentium`).
  - 0869D `non dii gentium` → **nations** — generic, and set against *paganos* in the next
    clause, which is rendered "pagans".
- **singular `gens`** at 0864A `ut pro gente et loco` → **nation**. This is the Jo 11:48 formula
  (*tollent locum nostrum et gentem*) and it is the axis's own worked example.
- **`usque ad`.** 25 italic occurrences, all the abridgment formula, all → **"as far as"**.
  ⚑ **Three look-alikes were decided the other way and are named here per addendum D:**
  0863D `qui sunt usque ad secundam divisionem` (unitalicised, spatial → "as far as the second
  division"); 0863D `usque ad unum` is not in my range but its neighbour `*usque ad: Timor Dei
  ante oculos*` IS the formula with Migne's colon carried; and **0865D `*Usque ad noctem,*`
  which is Ps 15:7's own words and renders "Even till night"** — a lemma, not a splice.
- **`turba` / `multitudo` / `daemonium`:** the range contains no `turba` and no `multitudo`
  (grep run and checked against the brief's instrument warning — the `natio` hits in this range
  are all *examinatio-*, *conclusione*, and the like, i.e. the documented false positive).
  One `daemonibus` at 0868C → **demons**; `diabolus` at 0864C, 0866D, 0867A, 0870A → **devil**.
- **`mysterium` / `sacramentum`:** no `mysterium` in the range; `sacramenta` at 0861C and
  `sacramentorum` at 0868A → **sacraments**.
- **thou / you (Pattern 17):** every second-person singular is *thou* — the psalm's addressee
  throughout, and the gloss's own *ut justos accipias* (0861D) and *Hinc trahe exemplum* (0865D),
  both singular imperatives to the reader. No plural second person occurs in the range.

## 8. Sections read clean, and how

- **Question marks:** 0010 five, 0011–0014 one each; English matches Latin exactly, chunk by
  chunk. The five in 0010 are *propter quid?* / *quid proficit…?* (0860B), *Cur dicunt
  transmigra?* / *…sagittare rectos?* (0861B), *Justus autem, quid fecit?* (0861C) — all read on
  the plate. **No mark was supplied and none deleted; no 8b recast was needed**, because Migne
  prints no `?` on an indirect question anywhere in this range.
- **Column anchors:** all 26 verified present, in order, **and against the word they stand beside
  in the Latin** (test 2b), not merely present. Two sit mid-construction and were split to match:
  `et exaltetur [0860B] manus` → "and let [0860B] thy hand be exalted", and
  `*De absconditis* [0867B] *tuis.*` → "*Of the hidden things* [0867B] *that are thine.*" — two
  spans in the Latin, two in the English, the anchor between them. ⚠ One anchor cannot be placed
  exactly: `Bonorum [0865B] meorum` reverses in English, so it stands as "Of my [0865B] goods";
  the slot inside the two-word phrase is the same, the word order is not.
- **Notes:** 146 `[n: …]` across the five chunks, identical in count, order and content to the
  Latin. **No `[n:]` was converted to `[nt:]`** — every one is a bare attribution siglum or a
  scripture reference, i.e. a citation, never prose.
- **Negation, checked by attachment and not by count (test 2/2a).** The trigger population —
  a negative near a quantifier or correlative — fires at five sites in the range, and each host
  was proved from the sentence's structure:
  - 0859C `non solum non metuitur reprehensor, sed etiam auditur laudator` — the first *non* is
    on *solum*, the second on *metuitur*; the *sed etiam* clause proves it.
  - 0864C `malignum non esse, nisi qui a Creatore ad creata convertitur` — the *non* is on the
    predicate and the *nisi* restores the exception; "no one is malignant save he who…".
  - 0861D `sed non nisi his qui peccatores sunt` — *non nisi* is the correlative, rendered
    "but not save upon those who are sinners", both particles carried.
  - 0867A `nemo non prius in se quam in alium peccat` — a double negative, carried as one
    ("there is no one who does not sin against himself first"), not collapsed into a positive.
  - 0863B `Non solum propter me illuminare, sed ne inimicus gaudeat` — *non* on *solum*, and the
    second clause's *ne* kept as its own negative.
- **7a⁗ (a marker swallowing the sense):** not applicable — **no `[sic:]` is fired in this
  range**, so nothing is quarantined and nothing can hide inside a bracket. Stripping every
  marker from the English leaves five readable chunks with no stranded article or preposition.
- **Punctuation by band:** colons and semicolons compared band by band against the Latin twin
  across all 26 anchors; zero mismatched bands. (The two plate-vs-TEI punctuation departures at
  0870A and 0870C are §3 items — differences between the plate and our Latin, not between our
  Latin and our English.)
- **Foot-of-page apparatus:** **six pages read full width (435–440) and ZERO notes of either
  layer** — no numbered `Forte` conjecture and no asterisk cross-reference. The work's
  coverage stays `spot`; this is six more checked zeros, not a claim that the work has none.
- **The mod-4 clipping rule fails on my pages.** Columns **861, 865 and 869 are all ≡ 1 (mod 4)
  and all three are CLEAN** in this copy. That is three more counterexamples on top of the ones
  stints 0015–0019 and 0025–0028 recorded the same day, and it means **no marker in this range
  needed the Gallica second witness**: every column of 0859–0870 is legible in the on-disk scan.
  The rule should be treated as withdrawn, not merely qualified.
- **`In Hebraeo` clauses:** one of the work's three outstanding ones falls in my range, at
  **0868A `(quod in Hebraeo)`**, and it is now **read**: the plate sets no Hebrew type there at
  all, so nothing was dropped and none is to be supplied. Two remain unread elsewhere in the work.
- **The fourth test (does the English ASSERT what he asserts?):** run last, paragraph by
  paragraph against the Latin, with the counts already known clean. It changed three renderings:
  the elided *quaeret* at 0859D (§5), the refusal to supply *non accepit* at 0864D (§6), and the
  scope of *non in labiis dolosis* at 0866A, where the negative belongs on the prepositional
  phrase and not on *prodeat* — "let my judgment come forth from thy countenance **not in
  deceitful lips**", never "let not my judgment come forth".
