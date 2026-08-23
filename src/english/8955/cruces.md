# *Glossa ordinaria*, **Liber IV Regum** (PL 113, 0611A–0630D) — cruces and collation

Anselm of Laon and his school. Translated 2026-08-23, one agent, 8 chunks, 7,556 Latin
words → 11,521 English (**1.52×**, the expected Glossa ratio). `verify-english.mjs`:
**clean** — 8 chunks, columns/notes/sections aligned, no duplicate paragraphs.

**Apparatus: 4 `[var:]` · 2 `[cj:]` · 0 `[sic:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` ·
168 `[n:]` (exact parity with the Latin twins).** Zero guillemets in either language.
Per-chunk parity of column anchors, `[n:]`, italic spans, `## ` heads, `?`, `!`, `:` and
`;` was checked band by band against the Latin twin and is exact everywhere (the markers'
own colons, semicolons and italics account for every arithmetic difference).

Structure: CAPUT PRIMUM–CAPUT XXV, twenty-five heads, 1:1 with the Latin.

---

## §1 · CONVENTIONS — Ruth's §1 applied, plus what this book had to settle

The Glossa conventions were settled on **Liber Ruth (8968) §1** and are not reopened here:
`VERS. n.--` passes through verbatim; the lemma is Englished; a fragmentary lemma is
rendered as the phrase it stands for; attribution sigla ride as ordinary `[n:]` notes,
unanglicized (passing `(RAB.)` through is not endorsing Migne's attribution). Heads follow
Ruth's shipped forms: `CAPUT PRIMUM.` → `CHAPTER ONE.`, `CAPUT II.` → `CHAPTER TWO.`

Four further calls this book forced:

### 1a. `*usque ad*` → `*as far as*`, and **six of the thirty-seven occurrences are not the formula**

The abridgment formula is Englished in its own italic span per shipped 8978 and Tobit
(8970 §1b): `etc., *as far as* …`. **No verb is ever supplied to complete a resumption
tail**, and none was here.

⚠ The launch brief's warning was live. The Latin prints `usque ad` **37 times; 31 are the
formula and 6 are ordinary prose or the verse's own words**, decided one by one from what
stands on either side:

| col | occurrence | verdict |
|---|---|---|
| 0617B | *in porticibus circa domum Domini **usque ad** sabbatum manentes* | ordinary — "until the sabbath" |
| 0620B | *aquis … fervefactis, et **usque ad** salis firmitatem coquendo perductis* | ordinary — "as far as the firmness of salt" |
| 0620C | *…terminos Israel, ab introitu Emath **usque ad** mare solitudinis* | **the verse's own words** (4 Kings 14:25), inside the lemma's italics — exactly the Sap 8:1 trap named in the brief |
| 0620C | *per stadia quingenta octuaginta **usque ad** Zoaros Arabiae* | ordinary |
| 0620C | *in longitudine centum quinquaginta, **usque ad** vicinia Sodomorum* | ordinary |
| 0620D | *eo quod **usque ad** nubes caput erigat* | ordinary — "as far as the clouds" |

⭐ Related and NOT an instance: the lemma `*Igitur usque.*` at 0618A is 4 Kings 12:6's own
opening (*Igitur usque ad vigesimum tertium annum*) clipped before *ad*. Rendered
"*Therefore until.*", not as a formula.

Two formula occurrences carry their resumption **inside** the italic span rather than
after it — `*usque ad Fides sine operibus mortua est.*` (0620A) and `*usque ad: et orietur
vobis timentibus sol justitiae.*` (0627B, with Migne's colon). Both reproduced with the
italic boundary and the colon exactly where he sets them.

### 1b. **`CAPUT XVI` and `CAPUT XXV` print without the final stop. That is Migne, and it stands.**

Twenty-three of the twenty-five heads print `CAPUT N.`; **two do not** — chunk 0003's
`CAPUT XVI` and chunk 0007's `CAPUT XXV`. The English heads reproduce the presence and the
absence 1:1 (`CHAPTER SIXTEEN`, `CHAPTER TWENTY-FIVE`, no period). **Recorded here so a
later blind reader does not report it as a dropped stop**: it is the plate's own
inconsistency, and Pattern 8 forbids supplying a mark he does not print as firmly as it
forbids deleting one he does.

### 1c. **The non-word policy — and why NOT ONE `[sic:]` was fired in this work**

Four forms in this work are no Latin word at all: **0618A *Paralimopenis*** (for
*Paralipomenis*), **0618D *raeedificabant*** (for *reaedificabant*), **0628A *cupuditati***
(for *cupiditati*), **0629D *ulit*** (for *Tulit*, opening a lemma at a paragraph head —
the TEI reads `<p> <hi>ulit Saraiam,</hi>`).

Pattern 7's non-word class says carry them; Pattern 12 says mark the carried run `[sic:]`.
**Both were declined, and the reason is the 2026-08-23 addendum, clause A: measured ten
times out of ten, a suspicion aimed at a NON-WORD came back as OUR digitization's
corruption, not Migne's.** A `[sic:]` would therefore be a public claim blaming the plate
for a defect the plate almost certainly does not have — the exact failure that withdrew
seven false `[sic:]` in that batch. The governing rule instead is **13a clause 1**: words
lost mid-sentence with the plate effectively certain are restored **silently and logged**.
So the English reads *Paralipomenon* · *rebuilt* · *cupidity* · *He took Saraias*, and all
four are named in §4 as tei-patch candidates for a plate read.

⭐ Recorded as method, not as a preference: this is the one place where a reader comparing
the columns will find an English word with no exactly corresponding Latin form, and it must
be said somewhere.

### 1d. Etymological glosses of names are **glossed Latin equivalents, not scripture**

This book is thick with them — *Elisaeus salus Dei* · *Moab … de patre* · *Naaman decus
sive commotio* · *Athalia temporalis Domini* · *Josabeth … saturitas Domini* · *Joas …
memoria Domini* · *Joiada … dilectus Domini* · *Jectehel … coetus Dei vel auxilium Dei* ·
*Aphec … continebit vel apprehendet* · *Ezechias, apprehendens Dominum vel fortitudo
Domini* · *Nohestan … aes eorum* · *Thopheth … latitudo* · *Pharao dissipans, Nechao
percussio, Mageddo de tentatione* · *Matthathia … munus sive donum* · *Sedecias justus
Dominus* · *Nabuzardan … ventilabrum* · *Saraias … vinctus* · *Sophonias … absconditus* ·
*Sopher … dissipans vel dividens* · *Reblatha … multitudo scelerum* · *Elios enim Graece
sol dicitur*. Each is translated as the Latin gloss it is, never conformed to a received
English form of the Hebrew, and none takes a `[var:]` — a name-etymology is not a
scripture citation. **Migne's own spellings of the names are kept everywhere**, including
where they diverge from the Clementine (§2c).

### 1e. Pattern 15 — a **checked zero**

All 168 notes were read. Every one is a citation or an attribution siglum — `(RAB.)`,
`(ID.)`, `(ISID.)`, `(GREG.)`, `(AUG., serm. 211, de temp.)`, `(BEDA in lib. Reg., quaest.
30, tom. II.)`, `(RAB. ex Euch.)`, `(RAB. ex Bed., ibid.)`, `(ID., ibid.)`, and the
scripture references. **Not one is editorial prose, so no `[nt:]` fires.** Recorded as a
zero that was checked, not skipped. Note that at 0615B Migne prints the marker with a stop
outside it (`[n: (RAB.)].`) — reproduced as printed.

---

## §2 · THE FULL COLLATION — all 225 italic spans, walked against the Clementine

`sources/vulgate/clementine-flat.txt`, book `4Rg` (Migne's numbering, no conversion).
**Every span below was looked up at its own verse**, not merely phrase-searched: the
launch inventory's ✓ marks were treated as an ordering device and re-checked in place.

### 2a. Spans that AGREE with the Clementine exactly (or are clean clips of it) — 190

Listed so that this report can be told from one by an agent that never looked.

**Chapter 1–5 (chunk 0000):** *Ceciditque Ochozias.* (1:2) · *Factum est.* (2:1) · *Fiat
in.* (2:9) · *Si videris.* (2:10) · *Pallium.* (2:13) · *Mittite.* (2:17) · *Ascendit
autem.* (2:23) · *Facite.* (3:16) · *Parumque.* (3:18) · *Civitatem.* · *Lignum.* (3:19) ·
*Mulier,* (4:1) · *Crevit autem.* (4:18) · *Et ille.* (4:29) · *Filii prophetarum.* (4:38)
· *Concidit.* (4:39) · *Vir autem.* (4:42) · *Naaman,* (5:1) · *Porro de Syria.* (5:2) ·
*Tollam onus.* (5:17) · *Giezi.* (5:20) · *Vos ex patre diabolo estis* (Joh. 8:44,
verbatim).

**Chapter 6–10 (chunk 0001):** *Accidit autem.* · *Hoc ipsum.* (6:5) · *Heu, heu,* (6:5,
6:15) · *Qui cum venissent.* (6:14) · *Plures.* (6:16) · *Domine, aperi.* (6:17) ·
*Percute.* (6:18) · *Congregavit.* (6:24) · *Cras modius,* (7:1) · *Quatuor,* (7:3) ·
*Porro.* (7:17) · *Vade.* (9:1) · *Diligite inimicos vestros, et benefacite his qui oderunt
vos* (Luke 6:27; Migne adds only *et*).

**Chapter 11–12 (chunk 0002):** *Athalia vero.* (11:1) · *Ad portam.* (11:6) ·
*Scutariorum et custodietis excubias domus.* (11:6, two halves of the verse joined) · *Et
posuit super eum diadema et testimonium.* (11:12) · *inter se:* (2 Par. 23:16) ·
*Sartatecta.* (12:5) · *Igitur usque.* (12:6) · *Ad instaurationem templi reddite eam,*
(12:7) · *Et tulit.* · *Et posuit.* (12:9) · *Scriba regis,* (12:10) · *Verumtamen non
fiebant.* · *Non fiebant.* · *Et fuscinulae,* · *Thuribula.* · *Tubae omne vas,* (12:13,
the last a clip across the verse's *et*) · *Pecuniam vero pro delicto,* (12:16) ·
*Dirigatur oratio mea, sicut incensum in conspectu tuo* (Ps. 140:2, verbatim) · *Quasi tuba
exalta vocem tuam* (Isa. 58:1, verbatim).

**Chapter 13–17 (chunk 0003):** *Elisaeus autem.* (13:14) · *Superposuit.* (13:16) · *Aperi
fenestram.* · *Sagitta.* (13:17) · *Tolle. Qui cum.* (13:18, two clips of one verse) · *In
anno secundo.* (14:1) · *Et fecit.* (14:3) · *In valle.* · *Petram.* · *Jectehel.* (14:7) ·
*Ipse restituit terminos Israel,* and the fuller *… ab introitu Emath usque ad mare
solitudinis.* (14:25, both verbatim) · *Quae est in,* (14:25) · *Ipse aedificavit.* (15:35)
· *Consecravit.* (16:3) · *Musach quoque.* (16:18, twice) · *Adduxistis.* (17:27) · *Et
unaquaeque.* (17:29) · *Et cum.* (17:33).

**Chapter 18–19 (chunk 0004):** *Anno tertio. Ezechias.* (18:1) · *Confregitque.* (18:4) ·
*Rabsacen.* (18:17) · *Eliacim.* (18:18) · *Haec dicit rex magnus, rex Assyriorum.* (18:19)
· *An speras.* (18:21) · *In Domino.* (18:22) · *Dabo vobis.* (18:23) · *Dominus dixit.* ·
*Ascende.* (18:25) · *Precamur.* (18:26) · *Non vos,* (18:29) · *Cumque audisset.* (19:9) ·
*Virgo filia.* (19:21) · *Excelsa.* (19:23) · *Et siccavi.* (19:24) · *Nunquid.* (19:25,
Migne's *Nunquid* for *Numquid* is an attested spelling, Pattern 9, not a divergence) ·
*Hoc erit signum.* · *Comede.* (19:29) · *Et propter David servum.* (19:34) · *Factum est
igitur.* (19:35) · *Cumque adoraret in templo.* · *In terram Armeniorum.* (19:37) ·
*Vocabo servum meum Eliacim* (Isa. 22:20, verbatim) · *Ne timeas a facie verborum quae
audisti* (**Isa. 37:6, verbatim** — see §3 on the citation).

**Chapter 20–22 (chunk 0005):** *In diebus illis.* (20:1) · *Qui convertit.* (20:2) ·
*Flevit itaque.* (20:3) · *Afferte massam.* (20:7) · *Laetatus est autem in adventu eorum
Ezechias.* · *Domum aromatum, et aurum et argentum.* (20:13) · *De terra longinqua
venerunt.* · *Ad me de Babylone.* (20:14) · *Dormivitque Ezechias cum patribus,* (20:21) ·
*Josiam.* (21:24) · *In Secunda.* (22:14) · *Tradidit in captivitatem virtutem eorum.* (Ps.
77:61) · *Vidi Dominum sedentem super solium excelsum* (Isa. 6:1, clipped before *et
elevatum*) · *Ululatus a Secunda.* (Soph. 1:10).

**Chapter 23–24 (chunk 0006):** *Contaminavit.* · *In convalle.* (23:10) · *Abstulit.*
(23:11) · *Excelsa.* · *Quae aedificaverat.* · *Et Chamos.* · *Offensioni Moab.* (23:13) ·
*Tulit ossa,* (23:16) · *Facite phase.* (23:21) · *Nec enim factum est phase tale,* (23:22)
· *Joachaz filium Josiae.* (23:30) · *Argentum autem et aurum dedit,* (23:35) ·
*Jerusalem.* (24:8) · *Artificem et inclusorem, nihilque relictum est, exceptis pauperibus
populi terrae.* (24:14) · *Sepultura asini sepelietur* (Jer. 22:19) · *quia videbitur Deus
Deorum in Sion.* (Ps. 83:8; Migne's capital *Deorum* is his) · *k* · *m* · *ch* · *n* (the
four letters discussed **as letters** at 0628B–C; kept in italics, untranslated).

**Chapter 25 (chunk 0007):** *Et interrupta est,* (25:4) · *Mense quinto.* · *Venit
Nabuzardan,* (25:8) · *Columnas autem aereas quae,* (25:13, verbatim including *autem*) ·
*Ollas quoque.* (25:14) · *Thuribula et phialas.* (25:15) · *Tulit quoque.* ·
*Saraiam,* · *sacerdotem primum,* · *Sophoniam,* · *sacerdotem secundum,* (25:18) ·
*Quinque viros de his qui steterant coram rege* · *Sopher principem.* · *Et sexaginta viros
e vulgo,* · *Et sexaginta viros.* (25:19) · *Et Saraia.* (25:23).

Plus the 31 `*usque ad*` formula spans (§1a), which quote nothing.

### 2b. Divergences from the Clementine — the whole list, with the verdict on each

**Four fired a `[var:]`. The rest are logged and unmarked, and the reason is stated for
each**, because Pattern 14's gate is *a divergence that changes the sense*, and a marker on
every dropped *enim* would bury the four that matter.

| col | Migne prints | Clementine | verdict |
|---|---|---|---|
| **0614B** | *Ecce securis ad radicem **arboris** posita est.* | Matt. 3:10 / Luke 3:9 *Jam enim securis ad radicem **arborum** posita est* | **`[var:]` FIRED.** Two changes at once: the opening formula, and singular *tree* for plural *trees*. The gloss is about Christ cutting down the Jews *tanquam infructuosas arbores* — plural — so the number is doing work in the sentence and the divergence is visible to any reader. |
| **0615A** | *Nolite timere.* | 4 Kings 6:16 *Noli timere*, **singular** | **`[var:]` FIRED.** A number change in the addressee, which Pattern 17 treats as load-bearing throughout this edition; and Migne's plural is exactly what lets the gloss answer it with the plural Gospel word (*Nolite timere eos qui occidunt corpus*). Rendered "*Fear ye not.*" so the plural is visible without the apparatus. |
| **0618D** | *Unicuique autem **vestrum** data est gratia* | Eph. 4:7 *Unicuique autem **nostrum*** | **`[var:]` FIRED.** *us* → *you*. This is the prose analogue of the ἡμεῖς/ὑμεῖς class the style file names as a hazard; the whole paragraph is about apostles apportioning gifts **to their hearers**, so Migne's *vestrum* changes who is being spoken of, not merely how. |
| **0619B** | *Et non fiebat ratio iis **omnibus**,* | 4 Kings 12:15 *iis **hominibus*** | **`[var:]` FIRED.** A substantive word swap: "with all these" for "with those men." The gloss that follows turns on *who* was trusted (*Tam religiosi fuerunt, ut nullus dubitaverit…*), so the reader needs to know the plate reads *omnibus*. |
| 0611A | *ut apprehenderent **Jesum*** | Joh. 7:32 *ut apprehenderent **eum*** | logged, no marker — the referent is identical and the substitution is the ordinary one an author makes when quoting out of context. |
| 0611B | *et quinquaginta **viros*** | 4 Kings 1:9 *et quinquaginta **qui erant sub eo*** | logged, no marker — the count is the same and nothing in the gloss (which expounds the *number* fifty) turns on it. |
| 0611C | *qui ascendens in, altum captivam duxit captivitatem, dedit dona hominibus* | Eph. 4:8 *Ascendens in altum, captivam duxit captivitatem : dedit dona hominibus* | see §3 — the *qui* is Migne's own stitching and the comma is a punctuation crux, not a textual one. |
| 0612C | *ut aliquis **vos doceat*** | 1 Joh. 2:27 *ut aliquis **doceat vos*** | logged, no marker — word order only. |
| 0612C | *Bibent homines et jumenta* | **no such sequence anywhere in the Clementine** | logged, no marker — the words are close to 4 Kings 3:17 (*bibetis vos … et jumenta vestra*), the very verse being glossed, and to Jonah 3:7–8; the note reads `(Joan. III)`, which is a citation misprint. Citation repair belongs to `citation-corrections.json` at index time, never to the running text. |
| 0613C | *Littera occidit* | 2 Cor. 3:6 *littera **enim** occidit* | logged, no marker — a dropped connective. |
| 0613C | *Prudentia carnis mors est … vita* | Rom. 8:6 *Nam prudentia carnis, mors est … vita **et pax*** | logged, no marker — head-and-tail clipping, the standard way this gloss quotes. |
| 0613C | *de **Baalalisa*** (twice) | 4 Kings 4:42 *de **Baalsalisa*** | logged, no marker — **and deliberately kept**: the gloss *is* the etymology (*Baalalisa enim tertium habens interpretatur*), so Migne's own form is the form the argument uses. Rule 2 of the "each commentary stands on its own" ruling. |
| 0614A | *quos praescivit, hos et vocavit* | Rom. 8:29–30 *quos **praescivit, et praedestinavit** … quos autem **praedestinavit**, hos et vocavit* | logged, no marker — a conflation of two consecutive verses, not a variant reading; nothing in the gloss turns on *praescivit* against *praedestinavit*. |
| 0614C | *et hoc **mutuo acceperam*** | 4 Kings 6:5 *et hoc **ipsum** mutuo acceperam* | logged, no marker — and note Migne prints *Hoc ipsum.* whole as its own lemma four lines earlier, so nothing is concealed. |
| 0614D | *Quod confregit lignum et jactavit, et sic ferrum sustulit.* | not the Clementine | **not a divergence at all**: Migne introduces it *in alia translatione*, and a text quoted as another version is not a variant of the Vulgate. No marker, by the same logic that keeps `[var:]` off a chant text (L3). |
| 0615A | *Nolite timere eos qui occidunt corpus, et post non habent quid faciant vobis* | Luke 12:4 / Matt. 10:28 | logged, no marker — **unitalicized in the Latin**, i.e. the gloss speaking, not a lemma. Same for *Possum rogare Patrem meum…* (Matt. 26:53, where the Vulgate's *An putas, quia **non** possum* is a question and Migne's is an assertion) — the gloss is answering *Plures*, and it is not set as a quotation. |
| 0616A | *Vae vobis … **qui** clauditis* | Matt. 23:13 *Vae **autem** vobis … **quia** clauditis* | logged, no marker — relative for causal; the negatives (*non intratis*, *nec … sinitis*) are identical in both. |
| 0616B | *Benedab, rex Syriae,* | 4 Kings 8:7 *Benadad rex Syriae* | logged, no marker — a proper-name spelling, and see §2c. |
| 0616C | *Regnavitque.* | 4 Kings 9:29 *regnavit* | logged, no marker — an added enclitic. |
| 0616C | *Estne cor tuum,* | 4 Kings 10:15 *Numquid est cor tuum rectum* | logged, no marker — the same question recast; no negative is added or lost. |
| 0616D | *Hic est **dilectus Filius meus*** | Matt. 3:17 *Hic est **Filius meus dilectus*** | logged, no marker — word order. |
| 0617A | *misit Joiada **pontifex*** | 4 Kings 11:4 *misit Jojada* (no title) | logged, no marker — the title is true of him and the gloss below calls him *summus pontifex* on its own account; the lemma carries *etc.* and is a clip. |
| 0617C | *Et imposuerunt ei diadema dederuntque…* | 2 Par. 23:11 *…diadema **et testimonium**, dederuntque…* | logged, no marker — a clip inside a text Migne cites as the parallel (*In libro Dierum apertius*). |
| 0617D | *Pepigit **igitur** Joiada* | 4 Kings 11:17 *Pepigit **ergo** Jojada* | logged, no marker — synonymous connective. |
| 0618B | *Praedicate Evangelium omni creaturae, infirmos curate … gratis date* | Mark 16:15 + Matt. 10:8 (which also has *daemones ejicite*) | logged, no marker — a conflation of two gospels under one reference, the same class as 0614A. |
| 0619A | *Cum complessent* | 2 Par. 24:14 *Cumque complessent* | logged, no marker. |
| 0620A | *Tu autem, homo Dei, haec fuge, sectare vero justitiam et pietatem, et apprehende vitam aeternam* | 1 Tim. 6:11 (*o homo Dei* … *justitiam, pietatem, fidem, caritatem, patientiam, mansuetudinem*) + 6:12 (*apprehende vitam aeternam*) | logged, no marker — an abridged list spliced to the next verse. |
| 0620D | *Anno **vicesimo** Azarias* | 4 Kings 15:1 *Anno **vigesimo septimo** Jeroboam … Azarias* | logged, no marker — a clipped lemma; *vicesimo/vigesimo* is an attested spelling pair (Pattern 9). |
| 0620D | *Hepher* | 4 Kings 14:25 *Opher* | logged, no marker — **and kept**, because the gloss builds on *Hepher* as a Hebrew word for darkness/cloud. |
| 0621B | *dum recordaremur* | Ps. 136:1 *cum recordaremur* | logged, no marker. |
| 0621C | *fabricata est **Deum** suum* | 4 Kings 17:29 *fabricata est **deum** suum* | logged, no marker — **rendered lowercase "god"** in the English: the sentence asserts that each nation made an idol for itself, and an English capital G would assert the opposite. Migne's capital is recorded here rather than in the text. |
| 0621C | *Viri enim **Babylonici*** | 4 Kings 17:30 *Viri enim **Babylonii*** | logged, no marker — both mean "of Babylon". |
| 0622A | *Nohestan vocavit,* | 4 Kings 18:4 *vocavitque nomen ejus Nohestan* | logged, no marker — a lemma reordered to open on the name it glosses. |
| 0622D | *Non seducat vos Ezechias, et non vobis tribuat fiduciam super Domino Deo vestro.* | 4 Kings 18:29–30 *Non vos seducat Ezechias : non enim poterit eruere vos … neque fiduciam vobis tribuat super Domino* | logged, no marker — word order plus *Deo vestro*; **both printed negatives are carried** and neither is relocated. |
| 0623C–D | the long *Comede hoc anno…* | Isa. 37:30–32 (*in anno secundo pomis vescere* · *seminate **et metite**, et plantate* · *fructum earum* · *de **Jerusalem*** · *faciet **istud***) | logged, no marker — an abridged running quotation Migne himself frames as *Isaias ita*. |
| 0624A | *principemque exercitus Assyriorum* | 2 Par. 32:21 *principem exercitus **regis** Assyriorum* | logged, no marker. |
| 0625D | *Non fuit **verbum** quod non monstraret* | 4 Kings 20:13 has **no** *verbum*; **Isa. 39:2 does** (*Non fuit verbum quod non ostenderet*) | logged, no marker, **and this is the most interesting non-marker in the book**: the divergence is the point of the gloss, whose parenthesis *(quod apud Hebraeos pro re frequenter accipitur)* exists precisely to explain *verbum*. Firing `[var:]` against 4 Kings would tell the reader Migne's text is wrong when in fact he is conflating the two canonical parallels on purpose. The second span's *ostenderit* against Isaiah's *ostenderet* is the same seam. |
| 0626A | *sepultus est Ezechias super sepulcra regum* | 2 Par. 32:33 *sepelierunt eum super sepulchra **filiorum David*** | logged, no marker — unitalicized, an indirect report. |
| 0627B | *et orietur vobis timentibus sol justitiae* | Mal. 4:2 *orietur vobis timentibus **nomen meum** sol justitiae* | logged, no marker — the resumption tail of an abridgment, clipped like every other. |
| 0627C | *Non utique in fermento malitiae et nequitiae* | 1 Cor. 5:8 *non in fermento **veteri, neque** in fermento malitiae* | logged, no marker — clipping; the negative count is unchanged in what Migne prints. |
| 0627C | *planctus Adremon* | Zach. 12:11 *planctus **Adadremmon***, and *magnus erit planctus* | logged, no marker — unitalicized, and a name spelling. |
| 0628B | *Regnavitque **Joachim**,* | 4 Kings 24:6 *regnavit **Joachin*** | logged, no marker — **but flagged, because the gloss contradicts its own lemma**: it rules that the son's name is written *per ch et n* and the father's *per k et m*, yet the lemma (of the son) prints *ch* + *m*. See §3. |
| 0628C | *…gladium aut lanceam **ad repugnandum*** | 1 Kings 13:19 ends at *lanceam* | logged, no marker — an added tail. |
| 0629D | *Escae ejus electae sunt* `[n: (Job XXXIII)]` | **nowhere in the Clementine**; Job 33:20 reads *Abominabilis ei fit in vita sua panis*, and the nearest thing in the canon is Hab. 1:16 *cibus ejus electus* | logged, no marker — the source cannot be identified with enough confidence to name a "received reading", so `[var:]` would be an assertion I cannot support. Rendered as printed; the reference is a candidate for `citation-corrections.json`. |
| 0630A | *Et tres **inani**,* | 4 Kings 25:18 *et tres **janitores*** | **`[cj:]` FIRED** — see §3. |

### 2c. The proper-name spellings, gathered — Migne's forms kept everywhere

*Elisaeus* (Clem. *Eliseus*) · *Baalalisa* (*Baalsalisa*) · *Benedab* at 0616B against the
work's own *Benadad* at 0615B (*Benadad*) · *Joiada* (*Jojada*) · *Hepher* (*Opher*) ·
*Nohestan* · *Beenon* / *Beennon* / *Gehennon* / *Ennon* / *Ennom* within four lines of each
other at 0621A and 0626C (Clem. *Ennom*) · *Nebahan* at 0621C against *Nebahath* at 0621D,
and *Tharthac* against *Tharthach* in the same pair (Clem. *Nebahaz* · *Tharthac*) ·
*Adremon* (*Adadremmon*) · *Joachim* (*Joachin*) · *Zoaros* · *Jectehel* · *Sochoth Benoth*
(Clem. *Sochothbenoth*).

**None is marked.** They are rendered as printed, each occurrence on its own, including
where Migne is inconsistent with himself two lines apart — that inconsistency is his and
the parallel Latin column shows it. Harmonizing them would be exactly the editorializing
the corpus rules forbid.

---

## §3 · CRUCES — column, printed reading, the reading taken, and why the rival lost

### 0614B · *deservit* — the printed word is real, and the English it yields is false. **`[cj:]`**

> *Ab eis interveniente passione corpus ipsum **deservit**: profunda descendit…*

*deservit* is a perfectly good present of *deservio*, "serves diligently" — so Pattern 12
has nothing to wrap and Pattern 7 requires it to be rendered. **But *deservio* does not take
*ab*,** and the allegory is the axe-head flying off the haft: the body leaves them, goes
down into the deep, and comes back. *deseruit* (perfect of *desero*) is the only form that
takes *ab eis* and the only one the next three clauses continue.

**Rendered "the body itself does service", with `[cj: *deservit*; read *deseruit*,
"forsook"]` beside it.** The rival — leaving it as a crux only — lost on Pattern 18's
founding ruling: *munde*/*mundo* at 11081 was left as a crux and the page went on asserting
what the author did not, "where a reader would not meet it". The marker is additive: Migne's
word keeps its English and the conjecture stands next to it. ⚠ It is **not** a `[sic:]`,
because nothing is broken; and I do not claim the plate is at fault — the single-letter
difference could as easily be the digitization's (§4).

### 0630A · *Et tres inani* — the gloss proves the word it does not print. **`[cj:]`**

> *Et tres **inani**, qui ostium fidei aperire debuerant, et tenentes clavem scientiae…*

4 Kings 25:18 reads *et tres **janitores***, and **the gloss expounds them as door-keepers
in its own next breath** — they "ought to have opened the door of faith" and hold "the key
of knowledge". *inani* is a real word (dat./abl. sg. of *inanis*) and so is Migne's under
addendum A; but it does not agree with *tres* and yields no clause.

**Rendered "*And three empty,*" with `[cj: *inani*; read *janitores*, "doorkeepers"]`.**
The rendering is as literal as the printed words allow: English adjectives carry no case,
so the number and case mismatch has no English exponent (Pattern 9) and "empty" is what the
word says. The rival readings: (a) rendering "door-keepers" silently — rejected, that is the
conformation Pattern 7 exists to forbid, and it destroys the evidence; (b) a `[sic:]` —
rejected, it would blame the plate for a defect I have not seen; (c) crux only — rejected
for the same reason as 0614B, and more strongly here, because the surrounding gloss makes
the false English ("three empty ones" who hold the key of knowledge) actively misleading.

### 0616B · *ultione juxta perimeret* — **crux only, no marker**

> *…quem Dominus destinavit ut sacrilegam civitatem … **ultione juxta** perimeret…*

***justa*** is the obvious reading: it agrees with *ultione* and gives the sentence its
point. **But *juxta* is a real word with a real adverbial sense ("alike, equally"), and
addendum A is explicit that a real word reading oddly is Migne's until a plate says
otherwise.** Rendered "should destroy with vengeance alike".

**Why this one did not earn the `[cj:]` that 0614B and 0630A did**, and the line is worth
stating because it is the same class: at 0614B the construction (*ab eis*) forbids the
printed word, and at 0630A the gloss's own next clause names the conjecture. Here neither
holds — *juxta* construes, however oddly, and nothing in the sentence requires *justa*
except taste. **Reading well is what the wrong host gives you** (test 2a), and it is what
the wrong conjecture gives you too. Crux, no marker; plate candidate in §4.

### 0611C · *qui ascendens in, altum captivam duxit captivitatem* — a comma English cannot host

Migne (Eph. 4:8) sets the comma **between the preposition and its noun**. English has no
position corresponding to that; a comma between "on" and "high" is not a mark, it is a typo.
Rendered *who ascending on high, led captivity captive, gave gifts to men* — **the mark is
kept, one word later, where English can carry it**, on exactly the reasoning of 8b (the
English refuses the mark because of English grammar, not because we improved his sentence).
Nothing is supplied and nothing deleted; the chunk's colon/semicolon/comma bands still
compare 1:1. ⚠ The *qui* opening the quotation is Migne's own stitch into his sentence, not
part of Eph. 4:8.

### 0614B · *Dominum suum* with a capital D — rendered "his own lord"

> *…et super eam consistens, **Dominum** cujus erat terra, adoraret, ne offenderet **Dominum
> suum** si pariter non adoraret.*

The first *Dominum* is God, and Migne capitalizes the second identically. **Rendered
lowercase**, because 4 Kings 5:18 — the verse the gloss is expounding — is Naaman asking
pardon for bowing in the house of Remmon *when my lord (dominus meus) leaneth on my hand*.
The rival (both capitals, both God) makes the sentence say Naaman feared to offend God by
not worshipping God alongside himself, which is not a sentence. Latin capitalization is
Migne's compositor's; the crux records it and the facing column shows it.

### 0611C · *non esse discipulus super magistrum postulavit* — the nominative kept, the negative kept

*discipulus* is nominative where the infinitive wants an accusative. **No English exponent**
(Pattern 9): rendered "he asked not to be a disciple above his master", with the negative on
*esse*, where Migne prints it. The gloss is alluding to Matt. 10:24 *Non est discipulus super
magistrum*, and the alternative parse — "he asked that the disciple should not be above the
master" — is not excluded and would need the nominative. **Both readings construe and both
assert the same thing**, which is why nothing is marked; recorded because a blind reader will
stop here.

### 0628B · *Regnavitque Joachim* — the gloss's own rule contradicts its lemma

The gloss rules that the name is written *per **k** et **m*** for the father and *per **ch**
et **n*** for the son, then prints, as the son's lemma, ***Joachim*** — *ch* + *m*, neither.
The Clementine reads *Joachin* at 24:6. **Rendered as printed** and the four discussed
letters kept in italics, untranslated, as the mentions of letters that they are. No marker:
the defect, if it is one, is in the plate's own consistency and is fully visible in the
facing column.

### 0620C · *quod hanc vel coetus populi Dei vel Deo adjuvante ceperit* — an ambiguity kept

The two limbs of the *vel … vel* are not parallel: a nominative (*coetus populi Dei*) against
an ablative absolute (*Deo adjuvante*), both governed by one singular *ceperit* whose subject
is Amasias. Rendered "in that he had taken it either as the assembly of the people of God, or
with God helping" — the one construction that lets the printed singular verb stand. Nothing
emended; the rival (making *coetus* the subject of *ceperit*) breaks the number.

### 0622B · *quem tradunt Hebraei … prodidisse Jerusalem* — the antecedent is **Sobna**, not Eliacim

The paragraph is headed *Eliacim*, and the bare *quem* four words after *post Sobnam* invites
the wrong reading. **The sentence settles it itself**: it ends *quem etiam **Sobnam** cum
Eliacim ad Rabsacen exisse quidam autumant*. The English keeps the relative rather than naming
the man, exactly as Migne does, so nothing is supplied — but this is the unexpressed-referent
class the brief names as dominant, and a reader who takes it as Eliacim will have the betrayal
on the wrong man.

### 0626B · *reduxitque eum in regnum suum* — a supplied subject, named

The verb's subject is God (2 Par. 33:13, *reduxitque eum Jerusalem in regnum suum*, of the
Lord), but the nearest English noun is Manasses, and a bare "he" would make Manasses restore
himself. **Rendered "and the Lord brought him back"** — the one supply of a noun in the whole
work, logged here because the rule requires it to be logged.

### 0626A · *quia princeps Sodomorum appellavit eos* — a nominative for an accusative plural

Isa. 1:10 reads *principes Sodomorum*. Migne prints the nominative singular *princeps* against
a plural object *eos*. **Rendered literally, "because he called them prince of Sodom"** — the
English is odd because the Latin is. Not marked: a case/number slip is Pattern 9's class and a
real word is Migne's until the plate says otherwise. Plate candidate, §4.

### 0623D · *comede quae iterum germinare,* — an italic boundary falling mid-construction

*potuerunt* stands only in the **second** italic span and governs both. English cannot leave
the first span without a modal, so "*eat what could again sprout,*" carries "could" that the
Latin span does not print. **The alternative — leaving the first span verbless — is not
English and would read as a dropped word of ours.** The italic boundary is 1:1 with Migne.

### 0625C · *latrocinantium spiritum incursione* — accusative for genitive plural

*spirituum* is what the sense wants. Rendered "by the onset of robber spirits". Case slip,
Pattern 9, no marker.

### 0620B · *Valli Salinarum erat* — a dative/locative for a nominative

Rendered "It was at the Valley of the Saltpits". No English exponent for the case, no marker.

### Sentences Migne leaves without a terminal stop — three, all kept open

**0612C** *…doctrinam accipient, ingeniosi et simplices* · **0627B** *…Deo retribuente
secundum merita* · **0628C** *…componere possit vel resarcire*. Pattern 8: never supply a mark
the plate lacks, a terminal stop included. All three English sentences stop where his do.

### 0621B · *sicut alia multa Achaz sibi tribuente. quo inveniret gratiam illius.*

A full stop mid-sentence followed by a lowercase *quo*. **Reproduced exactly** — stop, lower
case, and all. This is the 11542/11436 class where the mark had been silently swallowed; it is
not swallowed here.

### 0628D · *quae significatur denario, numero.*

A comma between *denario* and *numero* that leaves *numero* stranded. Rendered "which is
signified by ten, the number." Preserved as printed; no marker, nothing is broken.

### 0626C · *Josias Thopheth … dispergens, quatenus … appareret.*

A sentence with a participle and no main verb. Rendered as it stands. Migne's, not ours; no
marker exists for "a sentence that will not close", and inventing one for a single site is
worse than saying so here (the 8968 @0534A precedent).

### 0623B · `[n: (Isa. XLI)]` on *Ne timeas a facie verborum quae audisti*

**The text is Isa. 37:6 verbatim** (and 4 Kings 19:6 in Jerome's other wording, *Noli timere a
facie sermonum quos audisti*). The reference is a misprint. Rendered as printed; citation
repair belongs to `citation-corrections.json` at index time, never to the running text. Same
class: `[n: (Joan. III)]` on *Bibent homines et jumenta* (0612C), `[n: (Job XXXIII)]` on *Escae
ejus electae sunt* (0629D), and `[n: (Matth. V)]` on *Quinque viros de his qui steterant coram
rege* (0630B), which is 4 Kings 25:19.

### 0611D · *Lethi fluvium dirupit* — "the river of death"

*Lethi* is read as the genitive of *lethum*/*letum*, death, against the proper name Lethe. The
clause continues *nobisque transitum ad **vitam** praeparavit* and the whole gloss is Elias
dividing the Jordan as a figure of the Incarnation; a classical underworld river would be an
intrusion in a sentence whose own antithesis is death/life. Not marked.

---

## §4 · PLATE CANDIDATES — **READ AND SETTLED** (orchestrator, 2026-08-24)

⭐⭐ **The plate was read the same session**, PL 113 `patrologiaecurs04migngoog` on disk, page map
calibrated against the printed corner numbers before any crop, each crop taken wider than its
target and the whole line read.

| site | our file | the plate at 450 dpi | verdict |
|---|---|---|---|
| 0618A | *Paralimopenis* | **Paralipomenis** | **OURS** — patched |
| 0618D | *raeedificabant* | **reædifi- / cabant** | **OURS** — patched |
| 0628A | *cupuditati* | **cupiditati** | **OURS** — patched |
| 0629D | *ulit Saraiam* | — page clipped — | **UNREADABLE in this scan** |

Three of the four non-words are ours and are patched in `data/tei-patches/8955.json`; the work is
re-chunked and `verify-english` passes with no boundary moved. **§1c's policy is vindicated as
written**: not one `[sic:]` was fired at any of them, so this work never asserted a defect in
Migne's plate, and the repair belonged in our Latin.

### ⚠ 0629D — UNREADABLE, and not guessed

**This copy of PL 113 clips the left margin on some pages.** PDF p. 320 (cols 629/630) is one of
them — the left column's opening characters are cut off, and the line under test reads
*t Saraiam, qui interpretatur vinctus, sacer-* with whatever preceded the *t* lost with the
margin. The reading the context points to is *Tulit Saraiam* (4Rg 25:18 *Tulit quoque princeps
militiae Saraiam sacerdotem primum*, and the gloss two lines above lemmatizes *Tulit quoque*) —
**but a contextual reconstruction is a conjecture, and a conjecture entered as a patch would wear
Migne's own voice.** It stays exactly as our source has it. ⚑ I Esdrae has one candidate waiting
on the same defect (0697A *magistorum*); a second PL 113 scan settles both in two pages.

### The candidates as the translator filed them

Cheap, and named explicitly because three of the four normalization-class finds in this
series surfaced exactly this way. **Every entry below is a request, not an assertion**; none
fires a marker.

**Non-words (addendum A says these have been OUR corruption ten times out of ten):**

| col | our Latin reads | almost certainly | class |
|---|---|---|---|
| 0618A | *Paralimopenis* | *Paralipomenis* | metathesis, the *Nephtlali* class |
| 0618D | *raeedificabant* | *reaedificabant* | doubled/transposed vowel |
| 0628A | *cupuditati* | *cupiditati* | vowel |
| 0629D | *ulit* Saraiam | *Tulit* Saraiam | lost initial capital at a paragraph head (TEI: `<p> <hi>ulit Saraiam,</hi>`) |

**Real words that read oddly — Migne's until the plate says otherwise, and rendered as
printed:** 0614B *deservit* (for *deseruit*) · 0616B *ultione juxta* (for *justa*) · 0620D
*sive nubea* (a form that is no standard Latin adjective; rendered "or cloudy") · 0626A
*princeps Sodomorum* for *principes* · 0630A *inani* (for *janitores*).

**A "suspiciously tidy" check, per brief §4 and addendum C**, run on the passages that are
otherwise rough: the four `Beenon / Beennon / Gehennon / Ennon` spellings at 0621A, and
`Nebahan/Nebahath · Tharthac/Tharthach` at 0621C–D, are **inconsistent, not tidy** — which is
evidence that the digitization has *not* normalized them, and is worth recording as a checked
negative. Nothing else in the work read as suppressed roughness.

**Migne's foot-of-page apparatus:** none is available. `data/plate-notes/` carries no entry
for 8955, so no `[cn:]` reaches the Latin chunks, and no crux above could be settled from his
own notes. This is a **gap, not a checked zero**, and it is stated as one — unlike Ruth, whose
plate pages were read and whose zero is real.

---

## §5 · READ CLEAN, AND THE CANDIDATES THAT WERE REJECTED

### Read clean

- **Column anchors: 80, all verified for presence, order AND position** (test 2b) — each was
  checked against the word it stands beside in the Latin, not merely that it is present. Two
  are deliberately split mid-construction to match Migne: *sacerdotem [0630A] primum* and
  *et [0620B] potius ibi quam hic*. ⚠ At 0630A the anchor stands one word earlier in the
  English (*the first [0630A] priest*) than in the Latin (*sacerdotem [0630A] primum*),
  because English fixes the order of adjective and noun; there is no rendering that puts it
  between them and remains English.
- **Negation: 110 printed negatives across the eight chunks, every one present, none
  invented.** Each was checked by test 2's method — name the single Latin word it attaches
  to, then find that word in the English and check the negative is on it.
- **Test 2a's trigger population was worked explicitly** — every negative resting on a verb
  with a quantifier, correlative or predicate nearby. Twenty sites, worked one by one: 0611C *non nisi … nisi
  … non potest* · 0614C *non solum … sed etiam* · 0615B *non eos occidi permisit, sed* ·
  0616B *non invasione hostium fuisset factum* (the 8960 @0740B model: the *non* stands
  before the verb, and *et … fuisset factum* shows it governs the phrase) · 0619A *non de
  eadem pecunia … sed de reliqua* · 0619B *non minus fideles … quam* · 0619C *non proprio
  cujusque, sed sacerdotum judicio* · 0620A *non debet … sed magis* · 0620B *sed non corde
  perfecto* (twice) · *non civitatem dicit, sed magnam petram* (0620C) · 0622A *non solum … quin* ·
  0622C *non contra Deum, sed pro Deo* · 0622C *non de imbecillitate populi … sed quia* ·
  0622C *non sua voluntate, sed Dei* · 0624A *non suo merito, sed Dei clementia* · 0624B *nec
  angelico perit gladio … sed parricidio* · 0624B *non ad montes generaliter Armeniae, sed
  ad montes Tauri* · 0625D *non solum thesauros … sed et templi* · 0627B *non solum pecora
  … sed et seipsos* · 0629D *Non solum populares, sed et fortes*. **In every one the host is
  the phrase or the quantifier, not the adjacent verb, and the English puts it there.**
- **Question marks: 2, both in the Augustine extract at 0615D** (*Cur famem, o miserrime,
  pateris? Cur tanta penuria laceraris?*), both direct, both carried. **No indirect question
  closed with `?` anywhere in this work**, so Pattern 8b never fires — a checked zero. One
  exclamation, *Proh nefas!* at 0615D, carried; one more, *Quomodo sedet sola civitas!* at
  0627C, carried.
- **Pattern 17:** the work's second persons are Augustine's address to a single sinner at
  0615D (*pateris · laceraris · vita · compesce · convertere · relinque · poteris · in te*),
  rendered **thou** throughout, and the plural scripture addresses (*Vos ex patre diabolo
  estis* · *Nolite timere … vobis* · *Vae vobis … non intratis* · *Diligite inimicos vestros*
  · *gratis accepistis, gratis date* · *Non seducat vos Ezechias* · *Unicuique autem
  vestrum*), rendered **you**. The lemma *Estne cor tuum* and the darts of 0620A (*Tu autem,
  homo Dei*) are singular and take **thou**.
- **Pattern 4 does not apply** (runbook false positive 4): this is a lemma-and-gloss
  commentary, not a florilegium, and no `[f:]` is tagged.
- **Column-band arithmetic** (runbook false positive 1): the bands run
  0611A→0630D with the ordinary irregularities and three anchors — `[0621C]`, `[0623D]`, `[0630A]` — sitting *inside* an
  italic span. Nothing is reported.

### Rejected, with the reason

- **A `[sic:]` on any of the four non-words.** Rejected on addendum A + B: a `[sic:]` is a
  public claim about the plate, and the measured base rate says these four are ours. §1c.
- **A `[var:]` on *Benedab* (0616B) or any other proper-name spelling.** Rejected as a class:
  Migne diverges on a dozen names, is inconsistent with himself on four of them within two
  lines, and marking each would put a maroquin note beside every third proper noun while
  telling the reader nothing he cannot see in the facing column. Gathered in §2c instead.
- **A `[var:]` at 0625D on *Non fuit **verbum***.** Rejected because the "received text" is
  ambiguous here — the word is absent from 4 Kings 20:13 and present in Isa. 39:2, and the
  gloss is expounding precisely that Hebraism. A marker would assert a divergence where Migne
  is quoting a parallel. §2b.
- **A `[var:]` on *Possum rogare Patrem meum…* (0615A), where the Vulgate's Matt. 26:53 has
  *An putas, quia **non** possum*.** Rejected because the sentence is **not italicized** in
  the Latin: it is the gloss answering the lemma *Plures*, not a quotation set as one. The
  polarity difference is real and is logged; the marker is reserved for quoted scripture.
- **A `[cj:]` on *ultione juxta* (0616B).** Rejected — §3. The conjecture is attractive and
  nothing in the sentence compels it.
- **Reporting the missing stops at 0612C, 0627B, 0628C.** Rejected: Pattern 8. They are Migne's
  and they are now on record.
- **Reporting the two heads without final stops.** Rejected as a defect, recorded as a fact:
  §1b.
- **Harmonizing *sartatecta*.** The word appears as a lemma at 0618A and again in the gloss at
  0618D; rendered "the repairs" in both, which is reconciliation *within* one work — required
  — and not the cross-work harmonizing that is forbidden.
- **Reading *Regnavitque Joachim* as *Joachin* to agree with the gloss's own rule** (0628B).
  Rejected: that is conformation, and the mismatch between a gloss and its lemma is precisely
  the kind of evidence this edition exists to keep. §3.
- **Em-dashes.** Not marked, not reported, and kept rare: the whole work carries none.
