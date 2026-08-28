# 8977 · *Glossa ordinaria*, **Apocalypsis B. Joannis** — cruces, chunks 0015–0019 (cols 0739C–0752B)

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

## §1 · THE 7a″ DIVERGENCE LIST — every lemma in the range, collated

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
| 0743C | VERS. 12.-- *Sicut flamma **lignis**.* | Apc 19:12 *sicut flamma **ignis*** | Rendered "*As a flame in timber.*" *lignis* is a real, well-formed word, so Pattern 12 has nothing to wrap and Pattern 7 requires it Englished as it stands; the divergence from the received text is what Pattern 14 exists for. ⚠ **Also logged as a plate-read candidate** — *ignis* → *lignis* is exactly the class §4 of the brief describes, and one letter decides it. Note the gloss (*comburit … accendit … illuminat*) construes with either reading, so the gloss cannot adjudicate. |
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

## §2 · THE `[cj:]`, AND THE RIVAL IT BEAT

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

## §3 · REFERENTS SUPPLIED, AND WHERE TWO READINGS BOTH CONSTRUE

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

## §4 · PLATE-READ CANDIDATES AND CONSTRUCTIONS CARRIED AS PRINTED

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

## §5 · THE FOUR TESTS, RUN

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

## §6 · SMALLER RENDERING CALLS, RECORDED

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
