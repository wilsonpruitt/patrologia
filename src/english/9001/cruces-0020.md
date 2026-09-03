# *Glossa ordinaria*, **Evangelium secundum Marcum** (PL 114) — cruces, chunks 0020–0023

**Range: cols 0232D–0244C, the tail of CAPUT XIV through CAPUT XVI (the Passion and the
Resurrection), 4,702 Latin words, 4 chunks.** One of five stints on idno 9001; this file is
`cruces-0020.md` for merging.

## §0 · Counts, and what shipped

| | 0020 | 0021 | 0022 | 0023 |
|---|---|---|---|---|
| head | CAPUT XIV. (cont.) | CAPUT XV. | CAPUT XV. (cont.) | CAPUT XVI. |
| Latin words | 1,242 | 1,569 | 632 | 1,259 |
| English words | 1,863 | 2,408 | 927 | 1,919 |
| ratio | 1.50× | 1.53× | 1.47× | 1.52× |
| column anchors | 12 | 15 | 6 | 14 |
| `[n:]` | 35 | 45 | 21 | 32 |
| italic spans | 62 | 70 | 36 | 55 |
| `?` | 2 | 4 | 0 | 4 |
| guillemets | 0 | 0 | 0 | 0 |
| paragraphs | 32 | 37 | 15 | 33 |

**Apparatus fired in this range: `[var:]` × 2 · `[sic:]` 0 · `[cj:]` 0 · `[d:]` 0 · `[ed:]` 0 ·
`[nt:]` 0.** Anchors, notes, italic spans and paragraph counts are 1:1 with the Latin twins;
`:` `;` `?` `«` `»` `!` were compared **band by band** against the Latin (Brief test 3) and every
band matches, with the two sanctioned exceptions named in §6.4. `verify-english.mjs 9001` reports
no error against any of my four chunks (it fails only on peer chunks not yet on disk).

⭐ **The range ends where the manifest says it ends.** 0023 stops at `[0244C] verbum per totum
orbem seminaverunt.` — the last words of Mark. Nothing of the Luke commentary that opens below it
on the same plate page is present in my Latin, and none was translated.

## §1 · ⛔ THE PLATE-READ REQUESTS — three split/non-word runs, and NO marker fired on any of them

These are the three places in my range where the type is **not a Latin word**. Per the brief's
addendum A a non-word is worth raising explicitly as a plate candidate, and per the launch
instruction I raise them **here and fire no marker**, because addendum A's own data says this
class has been **the digitization's corruption, 10 times out of 10** — a `[sic:]` would blame
Migne publicly for what is most likely Corpus Corporum's error, which is exactly the seven
withdrawals of the 2026-08-23 batch. Each is rendered on the page at the reading Migne
self-evidently printed, and the crux is the receipt.

| col | our Latin reads | almost certainly the plate reads | English shipped |
|---|---|---|---|
| **0237D** | `Et curcifigentes cum.` | `Et crucifigentes eum.` (Mc 15:24, verbatim in the Clementine) | *And crucifying him.* |
| **0240C** | `*us que ad*` | `*usque ad*` — the abridgment formula, split | *as far as* |
| **0242C** | `circa ve peram` | `circa vesperam` | "about evening" |

⚑ **Why all three are one finding.** `curcifigentes` is an r/u metathesis; `us que` and `ve peram`
are word-division splits. All three are the shape addendum A names (*per verse*, *Qui dam*,
*quorum dam*) and all three read as line-break artifacts. **`us que ad` is the strongest of the
three as evidence**, because the identical formula is set correctly **thirty-nine other times in
my four chunks** — a single split against 39 clean occurrences within 4,700 words is not a
compositor's habit.

⚠ **`curcifigentes cum` is a double defect** — the metathesis *and* `cum` for `eum` — and it sits
in a **lemma**, where a reader meets it first. If only one line of my range gets a 400 dpi look,
make it col. 0237D. If the plate reads `crucifigentes eum`, the fix is `data/tei-patches/9001.json`
and nothing in my English changes. If the plate really prints `curcifigentes cum`, then the English
needs a `[sic:]` and I have under-marked it — I say so plainly rather than guess.

⛔ **I make no claim about WHOSE these are.** 9004 measured stints' attributions wrong 9 times in
14, and my argument above is a probability, not a finding.

## §2 · The conventions I applied, stated so a merge can check them

1. **`VERS. n.--` verbatim, lemma Englished** (Glossa convention 1–2). 77 verse addresses in range,
   none altered.
2. **`*usque ad*` → `*as far as*`**, in its own italic span — settled on 8978, reused on Tobit
   (8970 cruces §1b) and **not re-opened**. 40 occurrences in my range (0020: 13 · 0021: 9 ·
   0022: 7 · 0023: 11). ⭐ **No verb, subject or object was supplied to any of them**, including the
   four whose resumption lands mid-clause (0233D *adversariis dare didicerunt* — the object of
   *dare* is inside the excised middle and stays missing in the English; 0236D *purpura vel cocco
   vestitur*; 0238B *Hic sortita, etc.*; 0240C *lineo terreno celebrat*).
3. ⚠ **`usque ad` LOOK-ALIKES (brief addendum D): four in my range, decided one at a time, and
   NONE of the four is the formula.**
   - **0232D** *Humiliavit semetipsum factus obediens **usque ad mortem*** — Phil 2:8's own words,
     inside a quoted scripture. Rendered "unto death".
   - **0235A** *inviolata permanet castitas **usque ad consummationem saeculi*** — ordinary prose.
     "even to the consummation of the world".
   - **0238D/0239A** *excitantur vincula inferni **usque ad cervicem*** — ordinary prose. "even to
     the neck".
   - **0243A** *etc., **usque ad**: Euntes in mundum universum, praedicate Evangelium.* — this one
     IS the formula, and it is the one case where Migne prints the colon **inside** the italic span
     and runs the resumption on. Reproduced exactly, colon and all.
4. **A lemma is expanded only where the printed words cannot stand as English.** This is Ruth's
   own calibration and not a new rule: Ruth expanded `*Non te.*` → "Let no man see thee" but left
   `*She went out,* etc.` unexpanded. So in my range —
   - **expanded** (the stump is not English): `*Summum,*` → "*The high priest,*" (Mc 14:53);
     `*Tristis est,*` → "*My soul is sorrowful,*" (Mc 14:34); `*Sed non quod.*` → "*But not what I
     will.*" (Mc 14:36); `*Nam et Galilaeus.*` → "*For thou art also a Galilean.*" (Mc 14:70);
     `*Alios salvos.*` → "*He saved others.*" (Mc 15:31); `*Si mortiferum,*` → "*If they shall
     drink any deadly thing,*" and `*Super aegros manus,*` → "*They shall lay hands upon the
     sick,*" (Mc 16:18); `*Et induunt.*` / `*Ut crucifigerent.*` / `*Et non accepit.*` take the
     object English cannot omit.
   - **left as printed** (the stump IS English): `*Vere,*` → "*Truly,*"; `*Currens autem,*` →
     "*And running,*"; `*Velare faciem,*` → "*To cover the face,*"; `*At ille,*`, `*Tunc,*`,
     `*Novissime,*`, `*Illi autem,*`, `*Maria autem,*`, `*Jesus autem,*`, `*Et quidam,*`,
     `*Vide,*`, `*Signa autem,*`, `*Qui omnes,*`, `*Et exsurgens,*` and the rest.
   ⚑ Per the brief's "name the control's class" section, contrasting these two groups would
   manufacture an inconsistency that is not there — they are different classes, and where I had to
   choose I **expanded the stump rather than contracting its twin**.
5. **`(cont.)` on the repeated heads of 0020 and 0022 is our chunk division and is not translated**
   — carried as printed, per runbook false-positive 7.
6. **Heads: numerals mirror the plate.** `CAPUT XIV.` → `CHAPTER XIV.`, `CAPUT XV.` → `CHAPTER
   XV.`, `CAPUT XVI.` → `CHAPTER XVI.` Checked against the shipped corpus, which has `CHAPTER
   XI./XV./XVI.` in numerals throughout and zero spelled-out forms above ONE.
7. **Pattern 17:** *thou* wherever the Latin is singular (Peter at 0234B/0235B *me negabis*; Pilate
   to Jesus at 0235D *Tu dicis*; the psalmist's addressee at 0236C *tabernaculo tuo*; Death at
   0241A *aculeus tuus*; the young man at 0241C *in adolescentia tua*), *you* wherever it is plural
   (0233A *ut non intretis*; 0233D *potestas vestra*; 0234C *Et videbitis*; 0236A *Quid ergo
   vultis*; 0237B *vobis relinquens exemplum*; 0241D *Vos autem, quid timetis*; 0242A *Praecedit
   vos*). No archaism in the commentator's own voice.
8. **Greek passes through verbatim, unitalicized where Migne prints it roman:** ἀναβόλαιον
   (0239A) and Παρασκευὴ (0240B). The gloss on the second (*Παρασκευὴ Graece, praeparatio Latine*)
   sets *praeparatio* in roman, so it is **translated** ("preparation in Latin") rather than kept
   as italic Latin — adding italics would break span parity.
9. **Pattern 4 `[f:]` does NOT fire.** This is a lemma-and-gloss commentary, not a florilegium
   (runbook false-positive 4). Its inline scripture is text, not apparatus.

## §3 · The two `[var:]` markers, and why the other nineteen divergences did not get one

### 3.1 ✅ FIRED — 0234B, Mc 14:60, the lemma `*Non respondens,*`

Migne prints `VERS. 60.-- *Non respondens,* etc.` The Clementine reads **`Non respondes quidquam
ad ea quae tibi objiciuntur ab his ?`** — a finite second-person verb inside the high priest's
**question**, not a participle. The gloss immediately below turns on the question being asked
(*Ad responsum provocat, ut ex qualibet occasione sermonis locum accusandi inveniat* — "he
provokes him to an answer"), so the divergence is material: Migne's participle converts the
priest's interrogation into a description of Jesus. Rendered as printed — "*Not answering,* etc."
— with `[var: Vulg. Mc 14:60 *Non respondes*, "Dost thou not answer"]` beside it.
⚑ **Why this is Pattern 14 and not Pattern 18:** the divergence sits inside a quoted scripture,
and `[var:]` is the convention for that boundary (Pattern 18a's last decline class states it).
⚑ **The rival I rejected:** that *respondens* is a plate slip for *respondes* and deserves a
plate read. It may be — but it is a **real, well-formed Latin word**, which addendum A says is
Migne's until a plate says otherwise, so no `[sic:]` and no `[cj:]`. The `[var:]` records the
divergence without asserting a defect, which is the only claim I can stand behind.

### 3.2 ✅ FIRED — 0238C, Rom 6:6, quoted as *Sicut dicit Apostolus*

Migne: *Vetus homo noster **simul cum illo** crucifixus est ut destruatur corpus peccati, **ut
ultra non dominetur super nos peccatum**.* Clementine Rom 6:6: *vetus homo noster simul crucifixus
est, ut destruatur corpus peccati, **et ultra non serviamus peccato**.* Two divergences, the
second material: Migne's final clause is Rom 6:14's *peccatum … non dominabitur* ("sin shall not
have dominion") pulled into 6:6's slot, so the proof-text asserts sin's loss of **dominion** where
the Vulgate asserts our ceasing to **serve**. Rendered as Migne prints it, with the Vulgate reading
in the marker. The added *cum illo* is not separately marked — it is explicative, and marking it
would double a note the reader already has.

### 3.3 ❌ DECLINED, with the reason in each case

Every one of these was checked against `sources/vulgate/clementine-flat.txt` and cited by
book chapter:verse. **None is unchecked; all are declined on the merits.**

| col | Migne prints | Clementine | why no marker |
|---|---|---|---|
| 0232D | *Et majorem hac dilectionem nemo habet **ut ponat quis animam suam** pro amicis suis* | Jo 15:13 *ut animam suam ponat qui pro amicis suis* | word order + *quis* for *qui*. Migne's is the **clearer** of the two and the sense is identical. |
| 0232D | *Venit **princeps hujus mundi*** | Jo 14:30 *venit enim princeps mundi hujus* | word order, *enim* dropped by the clip. No sense change. |
| 0233A | *Et si oporteat me mori tecum, non te negabo: etsi omnes scandalizati fuerint, sed non ego* | Mt 26:35 *Etiamsi oportuerit me mori tecum, non te negabo* **+** Mc 14:29 *Et si omnes scandalizati fuerint in te, sed non ego* | a **conflation of two verses**, and Migne's own `[n: (Matth. XXVI)]` names only the first. Both halves are near-verbatim; the joint is the interesting fact and it is a citing habit, not a textual variant. Logged, not marked. |
| 0233B | *Caro **autem** infirma.* | Mc 14:38 *caro **vero** infirma* | one connective for another; both are "but" in English, so the page shows nothing a marker could annotate. **Named here because a silent agreement and a silent divergence look identical in a findings list.** |
| 0233C | *Cum his qui oderunt pacem* | Ps 119:7 *Cum his qui oderunt pacem eram pacificus* | a clip, closed by Migne's own `etc.` |
| 0233C | *Quod Dominus tetigit auriculam et sanavit **eam*** | Lc 22:51 *Et cum tetigisset auriculam ejus, sanavit **eum*** | ⚠ the strongest declined candidate. *eam* heals the **ear**, *eum* heals the **servant**. But Migne introduces it as *Lucas ait: Quod…* — an **indirect report**, not a quotation, and the whole span is already his own paraphrase; *eam* is internally coherent with it. A `[var:]` measuring a paraphrase word-for-word against Lc 22:51 would misdescribe what the span is. |
| 0233D | *Tanquam ad latronem* | Mc 14:48 *Tamquam ad latronem* | orthography (*tanquam*/*tamquam*), Pattern 9. |
| 0234B | *Falsum testimonium* | Mc 14:56 *testimonium falsum* | word order only; English is the same three words. |
| 0234C | *Cum nubibus **coeli*** | Mc 14:62 *cum nubibus **caeli*** | orthography, Pattern 9. Same for *In coelum* @0244A (Mc 16:19 *in caelum*) and *Exaltare super coelos* @0239D (Ps 56:12 *caelos*). |
| 0234C–D | *humiliavit **seipsum*** … *et **dedit** illi nomen* | Phil 2:8 *semetipsum*; 2:9 *donavit* | ⭐ note that **Migne himself prints *semetipsum* two columns earlier at 0232D** in the same quotation — an internal inconsistency in his own text, not a divergence from the Vulgate. Both rendered "himself"; *dedit*/*donavit* are both "gave". |
| 0236B | *Circumdederunt me canes multi* | Ps 21:17 *Quoniam circumdederunt me canes multi* | clip. |
| 0236B | *Facta est **haereditas mea mihi sicut** leo in silva* | Jr 12:8 *Facta est **mihi haereditas mea quasi** leo in silva* | word order + *sicut* for *quasi*. Both "as". |
| 0236C | *Et **exuentes** eum, chlamydem coccineam circumdederunt ei* | Mt 27:28 in **this copy** reads *et **exeuntes** eum* | ⛔ **the divergence runs the other way — Migne is right and our Clementine copy is the odd one.** *exeuntes* ("going out") does not construe with *chlamydem … circumdederunt*; *exuentes* ("stripping") does. The README warns that upstream correction diffs after 2005 are **not** applied to this copy and that a call turning on one letter must say so. This is such a call: **no marker, and the negative is recorded because it is worth having.** |
| 0236C | `[n: (Marc. XXVII)]` on a quotation the text itself introduces as *Matthaeus ita:* and which is **Matt** 27:28 | — | **Migne's own note is wrong (Marc. for Matth.), and it is not ours to tidy.** `[n:]` contents pass through verbatim and untranslated; the error stands on the page in both columns. |
| 0236C | *Ut **sciamus** quae sit latitudo, longitudo, sublimitas et profundum* | Eph 3:18 *ut **possitis comprehendere cum omnibus sanctis**, quae sit latitudo, et longitudo…* | a compressed adduction. ⭐ **The control is inside the work:** at **0238C** Migne quotes the same verse **in full and correctly** (*Ut in charitate radicati et fundati possitis comprehendere cum omnibus sanctis…*). Two citations of one verse at two degrees of fidelity is Migne's citing practice, and the 0238C occurrence anchors the reader. Neither marked. |
| 0237B | *Christus enim passus pro nobis* | 1Ptr 2:21 *quia et Christus passus **est** pro nobis* | *est* dropped by the clip; the rest verbatim. |
| 0237C | *Olivam uberem, pulchram, fructiferam, speciosam vocavit Dominus nomen tuum* | Jr 11:16 *Olivam uberem, pulchram, fructiferam, speciosam, vocavit Dominus nomen tuum* | comma only. Note Migne's frame — *per Jeremiam ad Judaeam dicitur* — is correct as to the prophet. |
| 0237D | *Quae non rapui tunc exsolvebam* | Ps 68:5 *quae non rapui, tunc exsolvebam* | comma only. |
| 0238B | *Vestimenta **sua*.** (of the soldiers' division) | Mc 15:24 *diviserunt vestimenta **ejus*** | *suus* for *is*. **English has no exponent** — "his garments" either way (Pattern 9's gender/case reasoning applies to the possessive). Logged, English untouched. |
| 0238C | *Hi omnes declinaverunt* | Ps 13:3 / Ps 52:4 *Omnes declinaverunt* | *Hi* is Migne's own connective into his sentence. |
| 0239B | *salvum fac **te** et nos* | Lc 23:39 *salvum fac **temetipsum** et nos* | both "thyself". |
| 0239C | *Dominus plantavit vineam **Soreth**: et quomodo conversa es in amaritudinem vitis alienae: et exspectavi ut faceres uvas, et fecisti spinas* — cited `[n: (Isa. V)]` | Jr 2:21 *plantavi te vineam **electam** … quomodo ergo conversa es mihi in pravum, **vinea aliena**?* + Is 5:4 *exspectavi ut faceret uvas, et fecit labruscas* | ⚠ **a conflation of Jeremiah 2:21 and Isaiah 5:4 under an Isaiah siglum**, with *Soreth* (the Hebrew *śōrēq*) where the Clementine has *electam*. Rendered as printed; **no marker**, because there is no single received text this span diverges *from* — a `[var:]` would have to pick one of two verses and would misstate the case. This is the most interesting scripture site in my range and it belongs in the work-page note if one is written. ⭐ **And I did not supply the `?` the Jeremiah verse carries** — Migne prints a colon (Pattern 8, never supply). |
| 0239C | *Pater, in manus tuas commendo spiritum meum; et **hoc** dicens **exspiravit*** | Lc 23:46 *Et **haec** dicens, expiravit* | *hoc*/*haec* and an orthographic *exspiravit*; no sense change. |
| 0239C | *Cum accepisset acetum, dixit: Consummatum est: et inclinato capite tradidit spiritum* | Jo 19:30 *Cum **ergo** accepisset **Jesus** acetum…* | compression only. |
| **0239D** | *inclinato capite **emisit** spiritum* | the same clause re-quoted **eight words after** Migne himself wrote *tradidit spiritum* | ⭐ **7a″ point 3, live.** Migne's own re-quotation diverges from his own quotation. The obvious smoothing — rendering both "gave up the ghost" — would erase the seam the sentence is **built on**, since Bede's whole point is what happened *between* the two utterances. Shipped as two different English verbs: **"delivered up the spirit"** for *tradidit*, **"sent forth the spirit"** for *emisit*. Not marked — nothing here diverges from the Vulgate, which is Jo 19:30 *tradidit*; the second form is Migne's paraphrase. |
| 0240A | *Ite, et docete omnes gentes* | Mt 28:19 *euntes ergo docete omnes gentes* | imperative for participle. Considered and declined: the span is one of four rapid-fire proof-texts (*Ante dicebatur … nunc autem … prius … et post passionem*) where every one is clipped to its first words, so the looseness is the citing pattern, not a reading. |
| 0240D | *Quia **astabant** omnes noti ejus a longe, et mulieres quae **secutae fuerant eum*** | Lc 23:49 *Stabant autem omnes noti ejus a longe, et mulieres, quae secutae eum erant a Galilaea* | Migne's *Quia* recasts it as the indirect report his *Lucas dicit* frames; *astabant*/*Stabant* and the word order follow from that. |
| 0241A | *Haec est dies quam fecit Dominus* | Ps 117:24, verbatim | ✓ **agrees exactly.** Migne's own `[n: (PSAL. CXVII)]` is correct. |
| 0241A | *Ubi est, mors, aculeus tuus* | 1Cor 15:55 *ubi est mors **stimulus** tuus* | a genuine lexical variant (*aculeus* / *stimulus*), both "sting", widely attested in Latin fathers. **No sense change, so no marker** — but named, because it is the only real word-substitution in a quoted verse in my range. ⭐ Migne's own word order (*Ubi est, mors, aculeus tuus*) is preserved in the English ("Where is, O death, thy sting?") rather than being reset to the familiar "O death, where is thy sting?" — that reordering is exactly 7a″'s conformation. |
| 0241C | *Laetare, juvenis, in adolescentia tua* | Ecl 11:9 *Laetare **ergo**, juvenis…* | *ergo* dropped by the clip. |
| 0241C | *Sedentem in **dexteris*** | Mc 16:5 *sedentem in **dextris*** | a form of the same word. |
| 0241D | *Erat aspectus ejus sicut fulgur, et **vestimenta** ejus sicut nix* | Mt 28:3 *erat **autem** aspectus ejus … et **vestimentum** ejus sicut nix* | ⚠ **singular → plural, and English HAS an exponent** ("garment" / "garments"), so this one could not be shrugged off the way a gender mismatch can. Rendered **plural**, as Migne prints it. Declined for a marker because the number of the angel's clothing changes nothing anyone argues from — but if the merge wants a `[var:]` anywhere beyond my two, this is the next one in line. |
| 0242C | *Petrus autem surgens cucurrit ad monumentum* — introduced *secundum Joannem* | Lc **24:12**, verbatim | ⛔ **the words agree with the Clementine exactly; Migne's ATTRIBUTION is wrong** (Luke, not John — John's parallel at Jo 20:3 has different wording). Rendered as printed, attribution and all. Pattern 7: Migne's own printing is not ours to tidy, and a `[var:]` is for divergent *words*, which these are not. |
| 0242D | *Apparuit primo Mariae **Magdalenae*** | Mc 16:9 *apparuit primo Mariae **Magdalene*** | a spelling of the name. |
| 0243A | *Surgentes eadem hora **reversi** sunt in **Hierusalem*** | Lc 24:33 *Et surgentes eadem hora **regressi** sunt in **Jerusalem*** | synonym + spelling; rendered "went back to Jerusalem". |
| 0243A | *usque ad: Euntes in mundum universum, praedicate Evangelium.* | Mc 16:15, verbatim but for a comma | ✓ agrees. |
| 0244B | *Nunquid si signa non faciamus, non credimus?* | — | not scripture; Migne's own rhetorical question. Both negatives carried, mark preserved. |

**Checked and found to agree with the Clementine exactly** (7a″ point 4 — the list is worthless
without these): Mc 14:32 *Gethsemani* · *Sedete hic* · *donec orem* — 14:33 *Et coepit pavere* —
14:34 *Tristis est* — 14:35 *et orabat* — 14:36 *Sed non quod* · *Non quod ego volo, sed quod tu* —
14:37 *Et ait Petro* — 14:38 *ut non intretis in tentationem* — 14:42 *Surgite* · *Surgite, eamus*
— 14:44 *Signum* — 14:45 *Rabbi* — 14:47 *Unus* — 14:50 *Tunc* — 14:52 *At ille* · *Ab eis* —
14:53 *Summum* — 14:54 *A longe* · *Atrium* · *Et calefaciebat se* — 14:60 *Et exsurgens* — 14:61
*Tu es Christus* — 14:62 *Et videbitis* · *A dextris virtutis* — 14:63 *Summus autem sacerdos* ·
*Vestimenta sua* — 14:64 *Qui omnes* — 14:65 *Velare faciem* · *Alapis eum caedebant* — 14:68 *At
ille* · *me negabis* · *Et exiit foras* — 14:70 *Nam et Galilaeus* — 14:72 *Et recordatus est* —
15:1 *Et confestim* · *Vincientes Jesum* — 15:2 *Tu es rex Judaeorum?* · *Tu dicis* — 15:4 *Vide* ·
*Vide in quantis* — 15:11 *Ut magis Barabbam* — 15:12 *Quid ergo vultis faciam regi Judaeorum?* —
15:13 *Crucifigatur* (Migne's passive for the Vulgate's *Crucifige eum* — see below) — 15:14
*Pilatus vero* · *Quid enim mali fecit?* · *At illi magis* — 15:15 *Barabbam, et tradidit* · *Jesum
flagellis* · *Jesum flagellis caesum* — 15:17 *Et induunt* — 15:19 *Et percutiebant* · *Adorabant
eum* — 15:20 *Ut crucifigerent* · *Et educunt illum* — 15:21 *Et angariaverunt* · *Patrem
Alexandri* — 15:22 *Calvariae locus* — 15:23 *Et dabant* · *Et non accepit* — 15:24 *Mittentes
sortem* — 15:26 *Et erat titulus* — 15:27 *Et cum eo crucifigunt* · *Duos latrones* — 15:29
*Moventes capita* — 15:31 *Alios salvos* — 15:32 *Descendat nunc* · *Et qui cum eo* — 15:33 *Et
facta hora sexta* · *Tenebrae* — 15:35 *Et quidam* — 15:36 *Currens autem* — 15:37 *Jesus autem* —
15:38 *Et velum templi* — 15:39 *Videns autem* · *Vere* — 15:40 *Erant autem* · *Jacobi minoris et
Joseph* — 15:42 *Et cum jam sero esset* — 15:43 *Venit Joseph* — 15:46 *Joseph autem* · *Quod erat
excisum* — 15:47 *Maria autem* — 16:1 *Et cum transisset* — 16:2 *Et valde mane* — 16:3 *Et
dicebant ad invicem* — 16:4 *Revolutum lapidem* — 16:5 *Juvenem* — 16:6 *Nolite expavescere* ·
*Jesum* · *Crucifixum* · *Surrexit, non est hic* · *Ecce locus* — 16:7 *Et Petro* (×2) · *Praecedit
vos* · *Praecedit vos in Galilaeam* — 16:8 *Fugerunt* · *Et nemini* — 16:9 *Surgens autem* — 16:11
*Et illi audientes* — 16:12 *Duobus ex his* · *Ambulantibus* — 16:14 *Novissime* · *Duritiam
cordis* — 16:15 *Omni creaturae* — 16:16 *Qui crediderit* — 16:17 *Signa autem* · *Daemonia
ejicient* · *Linguis loquentur novis* — 16:18 *Si mortiferum* · *Super aegros manus* — 16:19 *In
coelum* · *Et sedet a dextris* — 16:20 *Illi autem*. Also, verbatim: Jo 18:13 *adduxerunt eum ad
Annam primum* · Mt 27:19 *Nihil tibi et justo illi* · Is 5:7 *Exspectavi ut faceret judicium, et
ecce iniquitas: et justitiam, et ecce clamor* · Ps 90:10 *Flagellum non appropinquabit tabernaculo
tuo* · Ps 31:10 *Multa flagella peccatoris* · Jo 19:1 *Apprehendit Pilatus Jesum et flagellavit* ·
Jo 19:2 *Et milites plectentes coronam de spinis* · Mt 27:34 *cum felle mistum* · *Et cum gustasset,
noluit bibere* · Eph 3:17–18 (the 0238C full form) · Ps 2:6 *Ego autem constitutus sum rex ab eo* ·
Ps 115:3 *Quid retribuam Domino pro omnibus quae retribuit mihi?* · Ps 75:2 *Notus in Judaea Deus,
in Israel magnum nomen ejus* · Mt 10:5 *In viam gentium ne abieritis* (twice, 0240A and 0243B) ·
Jo 19:25 *Stabant autem juxta crucem Jesu mater ejus* · Ps 117:19 *Aperite mihi portas justitiae* ·
Ps 29:6 *Ad vesperum demorabitur fletus et ad matutinum laetitia* · Is 35:10 *Fugiet dolor et
gemitus*.

⚑ **`*Crucifigatur,*` @0236A** is Migne's paraphrase of Mc 15:13 *Crucifige eum* inside his own
narrative sentence (*Cumque respondissent: Crucifigatur*), not a lemma. Rendered "Let him be
crucified." Not marked: he is reporting, not quoting.

## §4 · ⛔ THE INVENTORY BRIEF FOR THIS RANGE IS SHORT BY 17 SPANS — please fix upstream

`data/briefs/9001-lemmata-0020.txt` says my range holds **206** italic spans. My four Latin chunks
hold **223**. The seventeen missing are **all at the head of chunk 0020, cols 0232D–0233B** — the
brief's listing opens at `[0233B] *Caro autem infirma.*`, so everything from `VERS. 32.-- *Gethsemani.*`
through `VERS. 38.-- *ut non intretis in tentationem,*` was never pre-scanned. The generator appears
to have keyed the slice on a later column than the chunk's own `colFirst: 0232D`.

The seventeen: *Gethsemani.* · *Sedete hic.* · *Donec orem.* · *usque ad* · *Humiliavit semetipsum
… pro amicis suis* · *Et coepit pavere.* · *Venit princeps hujus mundi …* · *Tristis est,* ·
*usque ad* · *Et orabat.* · *usque ad* · *Non quod ego volo, sed quod tu.* · *Sed non quod.* · *Et
ait Petro,* · *Et si oporteat me mori tecum …* · *Ut non intretis.* · *ut non intretis in
tentationem,*.

**I collated all seventeen myself against the Clementine** and they are in §3 above — three of the
range's more interesting divergences (Jo 15:13's word order, Jo 14:30's, and the Mt 26:35 / Mc
14:29 conflation) are in that unscanned head. ⚠ **If the same generator produced the other four
stints' briefs, their head columns may be missing too.**

## §5 · This range's own cruces — Migne's readings, rendered as printed

### 0233A · *somnium* for *somnum* — RENDERED "sleep", and here is why that is not a silent repair

*nunc tristitiae magnitudine **somnium** vincere non potest*, of Peter in Gethsemane. *somnium* is
"a dream"; the sense wants *somnum*, "sleep" (Lc 22:45 *invenit eos dormientes prae tristitia*).
**No marker, and no carried Latin**: *somnium/somnus* interchange is ordinary medieval orthography
and Pattern 9 governs it — carrying every non-classical form would bury the real defects. Recorded
so a later sweep does not churn it.

### 0233B · *tres personas nos habere in orando* — rendered literally, sense not adjudicated

*Trina Domini vigilia tres personas nos habere in orando docet, et de praeteritis et de
praesentibus, et futuris veniam rogare.* Rendered "teaches us that we have three persons in
praying, and to ask pardon both for things past and for things present and for things to come."
*personas* here is odd — the triad that follows is of **times**, not persons — but *persona* is a
real word in its slot and the abridgment gives no more of Jerome's sentence. Not marked.

### 0233B · *ut passuri gaudium et confidentiam videant* — TWO READINGS, and I say so rather than choose

Both construe. (a) *passuri* nominative plural attaching loosely to the *nos* of *eamus*: "so that,
we being about to suffer, they may see joy and confidence" — the subject of *videant* is then the
same party as the subject of *inveniant* two clauses earlier, the arresting men. (b) *passuri* as
the subject of *videant*: "that those about to suffer may see joy and confidence" — grammatically
tidier but makes the captors, who are not about to suffer, disappear from a sentence that has just
named them (*nos non inveniant*).
**Shipped as (a)**, because the *nos non inveniant … sed ultro eamus obviam* frame keeps one
subject running through *inveniant* and *videant*, and because (b) leaves *ultro eamus obviam*
pointing at nobody. ⛔ (b) is not thereby refuted, and a reader should know it was weighed.

### 0234A · *sicut Isaac caligantibus oculis, Jacob sub manibus non agnoscebat* — the case decides it

Read as: **Isaac**, eyes dim, did not know **Jacob** under his hands (Gen 27:22–23), *Jacob* being
the indeclinable **object**. The tempting alternative — Jacob as a second subject alongside Isaac —
leaves *sub manibus* with nothing to attach to and contradicts the source story, where the hands
felt are Jacob's and the man deceived is Isaac. Shipped accordingly. ⚑ This is the brief's
unexpressed-subject class exactly: nothing in the sentence names who fails to recognize whom, and
only Genesis decides it.

### 0234A / 0234B / 0233C / 0233B — every supplied pronoun in this range, named

Per the brief, each "he"/"she"/"they" I supplied that the Latin does not print, with what fixed it:
- **0233B** *Dat signum osculi* → "**He** gives the sign of a kiss" — **Judas**, from *Signum* /
  Mc 14:44 *Dederat autem traditor ejus signum eis*.
- **0233C** *Ipse enim pietatis nunquam obliviscitur* → "**he himself**" — **Christ**, from
  *Dominus tetigit auriculam* in the preceding sentence.
- **0234A** *Quorum et praesentiam detestabatur … servavit in mente* → "**he**" — the **young man
  who fled** (Mc 14:51–52), the subject of the lemma *At ille … Ab eis*. Not Peter, who is two
  verses away and is the subject of the **next** paragraph.
- **0234B** *Quia negationi proximus … quod Dominum non reliquit* → "**he**" — **Peter**, from the
  lemma *A longe* / Mc 14:54.
- **0236D** *purpura vel cocco vestitur, cum triumpho gloriosorum martyrum gloriatur* → "**she**"
  — the **Church**. Feminine singular, and the martyrs-and-purple topos in this gloss has no other
  subject; the abridgment has removed the sentence's own antecedent, so this is stated rather than
  assumed.
- **0237C** *Cleophae videtur eam dicere* → "**He** seems to call her" — **Bede**, the speaker of
  the whole `[n: (BEDA.)]` paragraph.
- **0240B** *si forte valeant imitari* → "**they** … imitate **him**" — the **women** of
  *solae mulieres*.
- **0242D** *ut ipsis evangelistis et apostolis resurrectionem evangelizaret* → "**she**" —
  **Mary Magdalen**, from the paragraph's own *mulier auctor culpae* / *In principio mulier*.

### 0234C · *Sacerdos interrogat Filium Dei; Jesus respondit Filium hominis* — the accusatives are ambiguous in Latin and in English

Both accusatives can be read as the person addressed or as the title spoken. Rendered "The priest
asks after the Son of God; Jesus answers the Son of man", which keeps the ambiguity English can
keep. The argument (*ut intelligamus eumdem Filium Dei esse et Filium hominis*) requires the
**titles** reading, and a reader who wants it has the sentence.

### 0237B · *Oriens de virtute fulget* — rendered "The east shines from the power"

The *quadrata mundi* topos assigns the four quarters to the four arms of the cross; *de virtute*
most likely means the cross's **top** (*virtus* for the head or summit of a thing). Rendered
literally as "from the power" and **not** repaired to "from the top", because that is Pattern 7's
whole business. The conjecture lives here.

### 0237B · *arcton* — Migne's Greek accusative in a Latin sentence

*arcton dextera tenet.* ἄρκτος = the Bear, the north. Rendered "the right hand holds the north".
Not italicized (Migne sets it roman) and not marked.

### 0237D · *Id pro quo patitur* — a two-word sentence with no verb of its own

Following *Et non accepit.* Rendered "That for which he suffers." Elliptical in Latin, elliptical
in English; nothing supplied.

### 0238B · *Erat autem hora ter.* — Migne's contraction, expanded

Mc 15:25 reads *Erat autem hora tertia*. The lemma prints `ter.` with a stop, which is a
**contraction of a word the sentence grammatically contains** (Pattern L5's test), not a truncation
that stops short — and the gloss immediately reasons about the third hour against the sixth (*nam
sexta hora tenebrae suffuderunt terram*). Expanded to "Now it was the third hour."
⚠ **The alternative reading, and it loses:** that `ter` is the adverb "thrice". It cannot be —
*hora ter* is not Latin, and the gloss's own arithmetic is about hours.

### 0238B · *praepositi, separati* in the four orders — rendered "the prelates, the set apart"

*conjugati, viduati, praepositi, separati* — the married, the widowed, the prelates, the
set-apart. The last two are unusual as an order-list and I have not smoothed them into the more
familiar *virgines*; they are what Migne prints.

### 0238C · *Quandiu ergo agunt opera nostra* — rendered "So long therefore as our works act"

*agunt* is transitive with no object, because the *usque ad* has excised the rest of the sentence
along with it. **No object supplied.**

### 0238C · *sinistri latronis mentem imitatur et actus* — singular verb, plural relative

*Qui autem pro humana gloria … imitatur* answers *Et qui hoc … gerunt* two clauses earlier.
Rendered with the number Migne prints on each ("they who do this … but whoever does it").

### 0239C · *Ut arcam testamenti … appareant* — accusative subject of an intransitive

*arcam* is accusative where *appareant* wants a nominative. **English carries no case ending, so
there is nothing to render either way** — Pattern 9's exemption in its exact form. Logged so a
later sweep does not churn it; the Latin column shows it.

### 0240A · `[n: (Matth. X)]*.;` — Migne prints a full stop AND a semicolon

*et in Evangelio prius: In viam gentium ne abieritis.; et post passionem: …* Reproduced verbatim,
both marks, in the English. Pattern 8: never delete a mark the plate prints, however odd.
⚠ Worth one glance on the plate if it is being read anyway — a stop-then-semicolon is also the
shape a digitization produces at a line end.

### 0240B · *Sicut non excluditur … ita non repellitur* — negation hosts named (test 2/2a)

A `sicut … ita` pivot with a negative on each side is precisely the trigger condition. **Both
negatives sit on their verbs** (*excluditur*, *repellitur*) and there is no quantifier or
correlative nearby competing for the host: the sentence's structure is a parallel of two
**exclusions**, not of a *solus*/*omnis* scope. Rendered "is not shut out … is not driven back."
Checked, and clean.

### 0242C · *sequenti nocte … cum sequenti nocte* — the phrase stands twice, ten words apart

*Sepultus ergo sexta sabbati … circa ve peram **sequenti nocte** et die sabbati, **cum sequenti
nocte** in monumento positus, die tertia … surrexit.* **Both are rendered**, in place.
⛔ **Not marked `[d:]`.** Pattern 11's dittography is the *same run set twice, adjacent*; these are
ten words apart with *et die sabbati* between, and the sentence's arithmetic (one day, two nights)
arguably needs two nights named. A `[d:]` would assert a compositor's doubling I cannot demonstrate.
The crux is the honest home for it, and it is a plate-read candidate of second priority.

### 0244B · *quod inde eis non nocet si mortiferum bibunt* — the *quod* clause hangs loose

Rendered "thereby it does them no hurt if they drink a deadly thing", with both negatives
(*nec … perducunt*, *non nocet*) on their own verbs. The *quod* has no governing verb in Migne's
sentence; nothing was supplied to give it one.

## §6 · Sections read clean, and the tests run

### 6.1 Read clean, nothing to report
Chunk **0022 in its entirety** (cols 0239C–0240D, VERS. 35–47) apart from the two items above
(*us que ad* @0240C, *arcam* @0239C) — it is the most regular stretch of the four, with no
non-words, no scripture divergence beyond spelling, and no ambiguous subject. Chunk **0023 cols
0241A–0242B** (VERS. 1–7) likewise. Chunk **0021 cols 0236D–0237C** (VERS. 19–22) likewise.

### 6.2 Test 1 — a `[sic:]` must not swallow the word it marks
**Vacuously clean: no `[sic:]` was fired.** The strip test was still run on both `[var:]` sites —
delete the marker and each sentence reads whole, because a `[var:]` by construction stands beside
a full rendering and never inside one. Neither marker is load-bearing for a verb, a negation, a
conjunction or an **object**.

### 6.3 Test 2 / 2a — negation hosts
Every printed negative in the range was matched to the single Latin word it attaches to and then
found on that word in the English. The four **trigger-condition** sites (a negative on a verb with
a correlative or quantifier adjacent) were worked explicitly and are recorded above or here:
- **0240B** *sicut non … ita non* — §5, clean.
- **0243A** *non tam est illorum infirmitas, quam nostra firmitas* — the *non* hosts on **tam**,
  not on *est*. Rendered "is **not so much** their weakness as our strength", which is the only
  English that puts it there. Had it drifted onto the verb ("it is not their weakness but our
  strength") the concessive would have become a denial.
- **0234D** *Non ut scelera eorum non videat, sed …* — two negatives, the first on the purpose
  clause as a whole (*Non ut*), the second on *videat*. Both carried: "Not that he might not see
  their crimes, but that…". The self-contradictory look is Migne's construction, not a defect.
- **0238C** *nec occidendo potuerunt efficere quod non esset eis rex* — *nec* on *occidendo*
  ("not even by killing"), *non* on *esset*. Both carried; collapsing them into one negative would
  reverse the sentence.

### 6.4 Test 3 — punctuation compared BY BAND, not by total
Every column band in all four chunks matches its Latin twin for `:` `;` `?` `«` `»` `!`, with
**two deliberate exceptions, both licensed and both here so a checker does not re-find them**:
1. **0241B, one extra colon — Pattern 8b.** Migne closes an **indirect** question with `?`:
   *Quomodo lapis per angelum sit revolutus, Matthaeus dicit?* English cannot end that construction
   with a mark, so it is recast direct behind a colon: "**Matthew says: how was the stone rolled
   away by the angel?**" The mark is kept, nothing supplied, nothing deleted. This is the range's
   only 8b site.
2. **0234B and 0238C, extra colons inside `[var:]` content** (`Mc 14:60`, `Rom. 6:6`) — ours, not
   Migne's, and stripped from the ratio count.

⚠ **No comma→semicolon sweep was run.** Migne prints semicolons freely in this range (20 of them),
so Tobit's narrow exception does not apply. Where a first draft had reached for a semicolon on
English rhythm I put the Latin's own mark back — nine such corrections in 0020 alone.

### 6.5 Test 2b — anchors checked for POSITION, not just presence
All 47 anchors were checked against the word they stand beside in the Latin, not merely for
presence and order. Six needed the English clause rebuilt to keep them there rather than letting
them drift to the end of a sentence: **0232D** (*dilectionem* [ ] *nemo*), **0234B** (*saecularis*
[ ] *circumitus*), **0236D** (*martyrum* [ ] *gloriatur*), **0240C** (*resurrectione* [ ]
*glorificata*), **0242B** (*gloriam* [ ] *post*), **0243C** (*remittuntur,* [ ] *peccata*). The
last is the one worth naming: *ea quae in baptismo eis remittuntur, peccata, extraxerunt* puts
*peccata* in **apposition**, so the English reads "…which are remitted to them in baptism,
[0243C] their sins" — the anchor lands exactly where Migne has it *because* the apposition was
seen. Read as a direct object instead, the anchor has nowhere to go.

### 6.6 Test 5 — does the English ASSERT what he asserts
Every paragraph was read back against the Latin for this and not for containment. Three sites
where a smooth English reading was available and **was rejected as the wrong assertion**:
- **0239D** *emisit* smoothed to match *tradidit* — rejected; see §3.3. The seam is the argument.
- **0234A** Jacob read as a subject rather than the object — rejected; see §5.
- **0241A** *Ubi est, mors, aculeus tuus* reset to "O death, where is thy sting" — rejected. It
  reads better and it is 7a″'s conformation exactly.

### 6.7 Brief §4 / addendum C — the normalization class (a form that is suspiciously *tidy*)
Read for, and **nothing raised.** ⚑ Recording the negative because addendum C's own point is that
two of its four instances were found while reading a neighbouring word. The candidates I looked at
and let go: **0234B** *obreptionis* (rare but classical, and *obreptio* is standard in this
register — rendered "of stealth"); **0236B** *apompeius* (a Latinization of ἀποπομπαῖος, printed
roman and left roman, "the emissary"); **0238D** *ἀναβόλαιον* (Gen 49:11's Greek, carried
verbatim); **0242C** *simplae*/*duplae* (real adjectives, deliberately paired — "single"/"twofold"
— and the whole paragraph's arithmetic depends on them).

## §7 · What I want the plate read for, in priority order

1. **0237D, `curcifigentes cum`** — one line. Decides whether the range needs a `[sic:]` or a
   tei-patch, and it is in a lemma.
2. **0240C, `us que ad`** and **0242C, `ve peram`** — same class, same page range, cheap to take in
   the same look. ⚑ Per addendum C, **read the whole line at each of the three**, not the target
   word.
3. **0240A, `[n: (Matth. X)]*.;`** — is the stop-plus-semicolon Migne's, or the digitization's?
4. **0242C, the doubled `sequenti nocte`** — if the plate prints it once, that is a `[d:]` we do
   not need and a patch we do.

⚠ **The launch note says our PL 114 scan clips both margins on leaves in this range.** All four
requests are mid-column, none at a margin, so a clipped leaf should still answer them.
