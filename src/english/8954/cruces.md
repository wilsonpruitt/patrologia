# *Glossa ordinaria*, **Liber III Regum** (PL 113, cols 0581A–0610D) — cruces

Anselm of Laon and his school, on the third book of Kings. Translated 2026-08-25 by two
translators working in parallel — **chunks 0000–0005** (cols 0581A–0599D, 7,348 Latin words) and
**chunks 0006–0010** (cols 0600A–0610D, 4,270 words) — and merged here. 11 chunks, 11,618 Latin
words. `verify-english.mjs` clean over the whole work.

**Apparatus fired, work-wide: 13 `[var:]` · 1 `[sic:]` · 1 `[cj:]` · 0 `[d:]` · 0 `[ed:]` ·
0 `[nt:]` · 0 `[cn:]`.** Column anchors and `[n:]` notes at exact parity throughout; zero
em-dashes in the English; **question-mark parity exact in every one of the eleven chunks.**

Ruth (8968) `cruces.md` §1 governs and was not reopened. Tobit (8970) §1(b) governs the
abridgment formula: `*usque ad*` → *as far as*, **with no verb ever supplied** to complete a
resumption tail — which this book needed repeatedly, since three of its sentences assert nothing
at all once the abridgment has taken their verb, and they are rendered verbless.

---

## §M · THE MERGE — one real drift, repaired; the rest checked and sound

Two translators cannot see each other's work and diverge on terminology without knowing it. So
the merge is a check, not a concatenation, and **it was made against the English files themselves,
not against the two stints' vocabulary tables** — a table records what a translator believed it
did.

### ⛔ The drift that was real: a lowercased *Ecclesia*

At **0600C** the second stint rendered Migne's *benedixit omni **E**cclesiae Israel* as "he blessed
all the **church** of Israel." Its Latin twin capitalizes all four of its `Ecclesia` forms and
prints no lowercase one anywhere in the chunk. **Repaired to "the Church of Israel".**

⚑ Two things make this worth recording rather than fixing quietly. First, **that stint's own table
claimed the mirror-the-plate rule as an inherited convention** — it stated the rule correctly and
then broke it once, which is exactly the failure a merge exists to catch and exactly the failure a
self-audit cannot. Second, **the site was afterwards read at the plate** (Gallica f300, right
column band C, for an unrelated citation check) and Migne prints *omni Ecclesiae Israel* with the
capital. The repair is confirmed from the photograph, not merely from our transcription.

### Checked across the seam and sound, needing no intervention

- **Migne's Solomon-etymology, "the peaceable one"** — carried identically across the seam
  (0000 and 0005 in the first stint, 0006 and 0007 in the second), including in the four glosses
  that turn on it.
- ***doctores* → teachers, never "doctors"**, in both stints, ten occurrences.
- **The Temple vocabulary**, which is where this book was most at risk. The first stint held cols
  0586A–0599D — CAPUT VI and VII, Solomon's building account and the densest notes in the book —
  and fixed the members before translating them: *oraculum* = **oracle**, *tabulatum* =
  **boarding**, *latera* = **sides**, *humeruli* = **little shoulder-pieces**, and ***anaglypha*
  left in Latin because the gloss is an etymology of the Greek word** (Migne prints Ἀνάγλυφα and
  glosses it *Latine dicuntur caelaturae*). Anglicizing that one would have left the gloss
  explaining nothing — the 11551 failure exactly. The second stint inherited the table and its
  chapters carry the vocabulary over without divergence.
- **The clipped-lemma expansion rule**, applied ~20 times in the second stint, which listed **both
  classes** — expanded and unexpanded — so the split is not misread later as inconsistency. Two
  lemmata were deliberately NOT expanded (*In sanctum*, *Praebente regi*) because Migne's own
  lemma diverges there and expanding would be conformation.
- ***usque ad*, censused per occurrence in both halves and never by rule**: 94 occurrences in the
  first range of which **14 are not the formula**, 27 in the second of which **2 are not**. The
  traps were caught, including the lemma *A labio usque ad labium*, where the words are the
  verse's own.

**Nothing else was rewritten.** A merge that silently edits a translator's chunk destroys the only
record of what that translator actually read.

---

## §P · SIX MISPRINTED CITATIONS — ALL SIX READ AT THE PLATE, ALL SIX MIGNE'S

The first stint found six citations whose numerals do not match the words they are attached to,
left every one exactly as printed, and referred them to `data/citation-corrections.json` — the
right move twice over, since the text keeps what Migne prints and only the *index* is corrected.

**Each was identified from the QUOTED TEXT and never from the numeral**, which is the settled
discipline, and **each was then read on the second witness** rather than asserted from our file.
Five crops settled all six, at one HTTP request apiece:

| col | Migne prints | the words are | plate |
|---|---|---|---|
| 0589D | *(Psal. CXVIII, 72)* | Ps. 72:28 *adhaerere Deo* | f295 left D — **his** |
| 0590B | *(Joan. III)* | 1 John 3:2 *videbimus eum sicut est* | f295 right B — **his** |
| 0592D | *(I Cor. II)* | **III Reg. 6:36** *Aedificavit atrium interius tribus ordinibus* | f296 right C/D — **his** |
| 0593B | *(II Cor. III)* | 1 Cor. 3:6 *Ego plantavi, Apollo rigavit* | f297 left B — **his** |
| 0599C | *(II Cor. XV)* | 1 Cor. 15:41 *stella a stella differat in claritate* | f300 left C — **his** |
| 0599D | *(Joan. XV)* | John 14:2 *In domo Patris mei mansiones multae sunt* | f300 left D — **his** |

⭐ **The 0592D one is the striking case**: it is not a wrong numeral inside a book but a wrong
BOOK, and not even a wrong Testament — the words are the very verse the gloss is expounding, III
Reg. 6:36, cited as I Corinthians. **On the facing page Migne cites I Cor. correctly twice** (*I
Cor. IV*, *Ibid. VI*), so the fault is local to that note and not a compositor losing the thread.

⚑ **And the 0589D one shows why the quoted-text discipline is not pedantry.** Ps. 118 *does* have a
verse 72. A reader checking the numeral alone would find a real verse there and stop; only the
words (*Bonum mihi lex oris tui* — not these) show the citation is wrong.

**What was done:** all six printed forms stand verbatim in the text, `refDisplay` keeps them, and
the index resolves to the true reference with the printed key retained and auditable. **Unparsed
citations for this work: 0.**

---

## §Q · WHAT THE PLATE ALSO SETTLED, UNASKED

The five crops were fetched for the citations, and read whole — which is the addendum's own advice,
that the normalization class lives in the neighbouring words rather than the target one. **Three of
the first stint's declines came back confirmed:**

- **0593C** *usque ad ... **ulla in parte declinemus*** — a negative is plainly wanted (*ne ... ulla
  in parte declinemus*) and the translator **did not supply it**, judging that the *ne* fell inside
  what the abridgment elides. The plate prints exactly that, with nothing lost by us.
- **0599D** *Rivocorulam* — a strange real word, `[sic:]` declined per addendum A. Migne prints it.
- **0600C** *capere non poterat* standing without its object — his, not ours.

⚑ **All three were declines, and all three were right.** That is the addendum's finding restated
from the other end: the argument for a marker loses, and the crux is what survives.

---

# PART I — chunks 0000–0005, cols 0581A–0599D

# *Glossa ordinaria*, **Liber III Regum** (PL 113) — cruces, chunks 0000–0005 (cols 0581A–0599D)

Translated 2026-08-25, one translator, 6 chunks (7,348 Latin words by the frontmatter counts; 7,417 counting the body as written), on Opus.
`verify-english.mjs` reports no error on these six files (the run fails only on 0006–0010,
which are a peer's batch and not yet written). EN/LA ratio 1.43–1.52.

**Apparatus fired in this half: 6 `[var:]` · 0 `[sic:]` · 0 `[cj:]` · 0 `[d:]` · 0 `[ed:]` ·
0 `[nt:]` · 161 `[n:]`** (body count; the frontmatter `noteCount` fields sum to 156 — runbook
false positive 3, count the body). Exact `[n:]` parity with the Latin twins, contents verbatim.
Zero guillemets in either language. Zero em-dashes in the English. Structure: CAPUT PRIMUM,
CAPUT II–VII, with `CAPUT VI. (cont.)` and `CAPUT VII. (cont.)` at the chunk splits.

**The plate spot check for this work is a checked zero** — Migne prints no numbered `Forte`
apparatus here, no `[cn:]` is in the Latin and none is in the English.

---

## §0 · WORK-WIDE VOCABULARY — FIXED AT THE HEAD, FOR THE MERGE

⚠ **My range is the Temple (CAPUT VI–VII, chunks 0002–0005). The 11551 failure — one half of a
split work anglicizing a column's members while the other kept the Latin — is the risk this
section exists to close.** These are the choices I made and held; a peer taking 0006–0010 should
either adopt them or say why not, and the merge should reconcile against this list, not against
taste.

| Latin | English used, everywhere | note |
|---|---|---|
| *templum* | temple | |
| *domus* | house | |
| *oraculum* | **oracle** | never "inner sanctuary"/"holy of holies": the gloss reasons from the word (*Oraculum ubi erat arca*, 0589B) |
| *porticus* | porch | and *vestibulum* = **vestibule**; 0594B turns on the two words being different (*eadem porticus … etiam vestibulum vocatur*), so they may never be collapsed |
| *atrium* | court | |
| *tabulatum · tabulata* | **boarding · boardings** | ⚠ the hardest choice. Migne uses the word in two senses — the three-tier side structure (0587B *pinnacula templi*) and plain planking (0588B *Laquearia sunt tabulata*) — and "storey" fits the first but makes the second say that ceilings are storeys. *Tabula* = board, so **boarding** carries both without asserting either |
| *latera* | **sides** | the lemma of 6:5, glossed *muros vel cancellos, vel luriculas* (0587C) |
| *laquearia* | panelled ceilings | |
| *trabes* | beams · *parietes* walls · *pavimentum* pavement · *tectum* roof |
| *ostium · ostiola · fores · postes* | door · little doors · doors · doorposts | 0591C's argument counts the *ostiola*, so the diminutive is kept visible |
| *fenestrae obliquae* | slanting windows | |
| *coenaculum* | upper chamber | |
| *tornaturae* | turned work | 0589A: *tornaturas suas et juncturas fabrefactas* |
| *caelaturae / coelaturae* | carvings | Migne spells it both ways (0589A *Caelaturas*, 0590C *coelaturis*); one English, and the Latin column carries the variance |
| *anaglypha* | **left in Latin, unanglicized** | 0591C's gloss IS the etymology (*Ἀνάγλυφα anaglypha Graece, Latine dicuntur caelaturae*); an English word would make the gloss explain nothing. The Greek and the Latin words in that sentence stand as printed, mention not use |
| *sculptura · sculptura histriata* | carving · **storied carving** | the gloss defines it (*quae aliquas rerum historias imitatur*, 0595C) |
| *columna · capitellum · retiacula · malogranata* | pillar · capital · nettings · pomegranates | ⚠ Migne spells the fruit *malagranata / malisgranatis* at 0593D and *malogranat-* everywhere else; one English, spellings logged |
| *mare · luter, luteres · bases* | sea · laver, lavers · bases | |
| *rota · axis · humeruli* | wheel · axle · **little shoulder-pieces** | *humerulus* is a diminutive of *humerus* and the gloss works from the thing's function, not its name; "undersetters" (Douay) would import a word Migne does not print |
| *coronulae · plectae* | little crowns · plaited work | |
| *funiculus · resticula* | cord · little cord | 0594C keeps them apart: the *resticula* girds the sea, the *funiculus triplex* is the proof-text |
| *labium* | brim | of the sea |
| *batus · cubitus* | bath · cubit | |
| *aes · fusura · fundere · fingere* | brass · casting · to cast · to fashion | |
| *forcipes · emunctoria · hydriae · fuscinulae · mensa* | tongs · snuffers · waterpots · fleshhooks · table | |
| *latomi · caesores lapidum · praepositi · indictio* | stone-hewers · cutters of stones · overseers · levy | |
| *Giblii · Giblos* | the Giblites · Giblos | |
| *usque ad* (the abridgment formula) | ***as far as***, in its own italic span | 8978/8970/8953 precedent; **no verb is ever supplied to complete it** |

**Chapter heads follow Ruth's shipped English** (8968), as II Regum (8953) did: `CAPUT PRIMUM.` →
`CHAPTER ONE.`, `CAPUT II.` → `CHAPTER II.`, and so on with the roman numeral kept. `(cont.)`
rides through unchanged.

---

## §1 · `usque ad` — 94 OCCURRENCES, AND 14 OF THEM ARE NOT THE FORMULA

Counted mechanically and then decided one by one from what stands on either side, per addendum D.
**94 occurrences of *usque* in the six chunks: 81 fall inside an italic span, 13 stand in ordinary
roman prose.** Of the 81, **80 are the abridgment formula**; the remaining one is a lemma. So the
non-formula population is **14**, and here is every one of them:

- **0581B** *in incommoditate frigoris **usque ad** mortem permansit* — "even unto death."
- **0583D** *inclinavit **usque ad** humilitatem hyssopi, id est, **usque ad** stultitiam crucis*
  — twice, inside the resumption tail of a formula that ends four words earlier. ⚑ **This is the
  trap the addendum names**: the formula's own words and the tail's words are the same words.
- **0586C** *non **usque ad** tectum templi, sed **usque ad** coenaculum inferius pertingebant* —
  twice, and see §4.1: the printed negative belongs to the first phrase, and the `sed` proves it.
- **0588C–D** five in one sentence — *a pavimento domus **usque ad** summitatem parietum et
  **usque ad** laquearia … a primis fidei rudimentis **usque [0588D] ad** perfectionem … et
  **usque ad** ingressum patriae coelestis … a primis justis **usque ad** ultimos*. ⚑ The third
  of these has a **column anchor inside it**, exactly as the formula sometimes does; it is not
  the formula.
- **0592D** *Usque ad hoc atrium universi conscendunt electi* — capitalized, sentence-initial.
- **0594C** the lemma ***A labio usque ad labium.*** (III Reg. 7:23) — **the verse's own words**,
  and the one *usque* inside an italic span that is not the formula. Rendered "*From brim to
  brim.*" and not italicised as a formula.
- **0594C** *a primo baptizato … **usque ad** ultimum qui in fine saeculi crediturus est*.
- **0595B** *a triginta cubitis circuitus … **usque ad** decem est coactum*.

---

## §2 · MIGNE'S OWN IRREGULARITIES, REPRODUCED NOT TIDIED

- **0583D · `[0583D]VERS. 32.--`** — the anchor set hard against the verse address with no space.
  Reproduced without a space. Same at **0584B**, **0585A**, **0588C**, **0593A**, **0597C**,
  **0599B**.
- **0584B · `[n: (BEDA, ut supra. )]`** — the note's own internal space before the closing
  parenthesis is kept verbatim. Same class at **0584D** (`*Latomorum. [n: (BEDA, ibid.)]*.` — a
  full stop *after* the closing italic as well as inside it, both reproduced), **0596A**
  (`*Duodecim. [n: (BED. ubi supra)]*.`), **0598A** (`*Eratque. [n: (ID., ibid)]*.`).
- **0591C · `*(BEDA, [0591C] ibid., cap. 15.)*`** — this siglum is **not** an `[n: …]` note:
  Migne sets it inside an italic span as running text, and a column anchor falls inside it.
  Carried verbatim, unanglicized, anchor in place. Exactly the class 8953 logged at 0565D.
- **0593A · `Psal. VI)`** — an unbalanced closing parenthesis inside the italic scripture span
  (`*Domine, ne in furore tuo arguas me, neque in ira tua corripias me Psal. VI)*`), with no
  `[n:` wrapper and no opening bracket. Carried verbatim and unanglicized, on the 0591C footing.
  **Not marked**: it is apparatus, not prose, and stacking a `[sic:]` on a citation would be a
  claim about the plate I cannot make.
- **0590A · `possunt intelligi.-- *Olivarum.*`** — a second lemma introduced mid-paragraph by
  `.--` rather than on a new line. Reproduced.
- **0599A · *…in modum repandi lilii erat efformata*** — the sentence ends with **no full stop**,
  and the English ends without one (Pattern 8: never supply).
- **0596B · *Grossitudo.* printed twice** — once as the VERS. 26 lemma and again four lines below
  as *unde subjungitur, Grossitudo.* **This is not dittography and takes no `[d:]`**: Migne is
  re-quoting his own lemma to hang a second gloss on it, which is this recension's ordinary habit
  (cf. 0594B *Malogranatorum.* re-quoted the same way).
- **0596C · `VERS. 27.-- [n: (ID., ibid.)] Mille perfectionem significat`** — a verse address with
  **no lemma at all**, the note standing where the italic span would be. Reproduced as printed.
- **0590C · `*[n: (ID., ibid.)] Et opus.*`** — the note stands *inside* the italic lemma span and
  *before* the lemma words. Reproduced in place.
- **Wrong citation numerals, five of them, left exactly as printed** (they are `data/citation-
  corrections.json` business at index time, never text repairs — the Ruth precedent):
  `(Joan. III)` at 0590B for **1 Joan. 3:2** · `(I Cor. II)` at 0592D for **III Reg. 6:36**, which
  is not a New Testament text at all · `(Psal. CXVIII, 72)` at 0589D for **Ps. 72:28** · `(II Cor.
  III)` at 0593B for **1 Cor. 3:6** · `(II Cor. XV)` at 0599C for **1 Cor. 15:41** · `(Joan. XV)`
  at 0599D for **Joan. 14:2**.

---

## §3 · THE SIX `[var:]`, AND WHY EACH EARNED A PUBLIC CLAIM

Every one rests on `sources/vulgate/clementine-flat.txt`, cited by book chapter:verse.

| col | Migne prints | Clementine | why it fired |
|---|---|---|---|
| 0582B | *Introduxit me rex in **cubiculum suum*** (Cant. II) | Ct 1:3 *Introduxit me rex in **cellaria sua*** | **the gloss's whole argument is the *cubiculum***: the Gentile Church *nec egressa est de cubiculo, sed ingressa*, and the lemma above is *Peperi apud eam in cubiculo*. The received text has no *cubiculum* anywhere at that verse (Ct 2:4 has *cellam vinariam*), so the proof-text as printed contains the keyword and the Vulgate's does not. |
| 0582B | *[Pilatus] **Mundus** ego sum a sanguine justi hujus* (Matth. XXVII) | Mt 27:24 ***Innocens** ego sum a sanguine justi hujus* | a substituted word, and **the gloss is built on it**: Pilate is introduced *lavantem manus*, and *mundus* ("clean") is the washing-word. Migne's reading is in fact Daniel's (Dn 13:46 *Mundus ego sum a sanguine hujus*); the divergence is stated, not explained (Pattern 14 forbids speculating why). |
| 0583B | *si **legem observatis**, Christus vobis nihil proderit* (Galat. V) | Gal 5:2 *si **circumcidamini**, Christus vobis nihil proderit* | **the load-bearing word.** The gloss's point is the child *inter legem divisus et gratiam*; Migne's lemma names the law and the Vulgate's names circumcision. |
| 0583D | lemma ***Quinque millia.*** (III Reg. 4:32) | 3Rg 4:32 *et fuerunt carmina ejus **quinque et mille*** | **a number**, and the gloss counts on it — *per eos quasi carmina quinque millia Domino canit.* Five thousand against a thousand and five. Same class as 8953's *quadraginta septuaginta millia*. |
| 0584A | *Omnia enim nuda et aperta sunt **Christo*** (Hebr. IV) | Hbr 4:13 *omnia autem nuda et aperta sunt **oculis ejus, ad quem nobis sermo*** | a substantive the received text does not contain at that place, and the gloss's subject (*Disputat autem, cum … proponit in Scripturis suis*) rests on Christ being the one to whom all lies open. 8953's *scala* precedent exactly. |
| 0598A | *rotunditas **unius et dimidii** cubiti* (III Reg. 7:35, quoted as *quod ita describitur*) | 3Rg 7:35 *rotunditas **dimidii** cubiti* | **a number, quoted as scripture and then reasoned from**: the very next sentence is *Latitudo ergo fundi in luteribus **unius** erat **cubiti et dimidii**.* A reader collating against a Vulgate would find the arithmetic unsupported. |

⚠ **Every `[var:]` content string was checked NOT to be a verbatim substring of its Latin twin**
(the Pattern 14 mirror test) — which is why 0598A's reads *rotunditas dimidii cubiti* whole rather
than the bare *dimidii cubiti*, a fragment the twin does contain.

---

## §4 · THE LEMMA COLLATION — EVERY ITALIC SPAN IN 0581A–0599D WALKED

`data/briefs/8954-lemmata.txt` was walked line by line for the whole band. **The agreements are
listed as well as the divergences**, because a findings-only list cannot be told from a list by a
reader who never looked. Verse references are to the Clementine on disk; a lemma clipped at either
end is counted as agreeing.

### 4.1 Checked and AGREEING with the Clementine (clip at either end excepted)

**CAPUT I–IV (0581A–0584A):** *Et rex David senuerat.* (3Rg 1:1) · *Cumque operiretur,* (1:1) ·
*Adonias autem.* (1:5) · *Tu quoque.* (2:5) · *Venit ergo Bethsabee ad regem.* (2:19, clipped
before *Salomonem*) · *Et non egredieris,* (2:36) · *Si autem ambulaveris in viis meis,* (3:14) ·
*Ego et mulier.* (3:17) · *Peperi apud eam in cubiculo.* (3:17) · *Mortuus.* (3:19) · *Tulit
filium.* (3:20) · *Quem diligentius intuens,* (3:21) · *Dixit ergo.* (3:24) · *Dividite.* (3:25) ·
*Dixit autem.* (3:26) · *Cibus Salomonis.* (4:22) · *Viginti boves.* (4:23) · *Excepta venatione.*
(4:23) · *Quadraginta,* (4:26) · *Et duodecim.* (4:26) · *Hordeum,* (4:28) · *Et fuerunt carmina
ejus.* (4:32) · *Hyssopum.* (4:33) · *Et disseruit.* (4:33) · *Ignem veni mittere in terram*
(Lc 12:49, **verbatim**) · *Nonne cor nostrum ardens erat* (Lc 24:32, clipped before *in nobis*,
**question mark as Migne prints it**) · *Ubi posuisti eum* (Jo 20:15) · *Quis me tetigit*
(Lc 8:45).

**CAPUT V (0584A–0585D):** *Et quia non potuerit aedificare domum,* (5:3, **the negative is the
verse's own**) · *Praecipe igitur ut praecidant mihi,* (5:6) · *Scis enim quomodo non est in
populo meo vir qui noverit ligna,* (5:6, clipped before *caedere sicut Sidonii*) · *Itaque Hiram
dabat Salomoni ligna cedrina et ligna abiegna, juxta omnem,* (5:10, the Clementine's comma after
*cedrina* not printed) · *Elegitque rex Salomon.* (5:13) · *Operarios de omni Israel, et erat
indictio triginta millia virorum.* (5:13, **verbatim**) · *Absque praepositis.* (5:16) · *Trium
millium.* (5:16) · *Praecepitque rex ut tollerent.* (5:17) · *Lapides grandes.* (5:17) · *In
fundamentum templi.* (5:17) · *Porro Giblii praeparaverunt ligna et lapides.* (5:18, **verbatim**)
· *Aperi, Libane, portas tuas* (Za 11:1, **verbatim**) · *Superaedificati super fundamentum
apostolorum et prophetarum* (Eph 2:20, **verbatim**) · *Mundemus nos ab omni inquinamento,*
(2Cor 7:1, clipped before *carnis et spiritus*) · *Corripite inquietos, consolamini pusillanimes,*
(1Thes 5:14, **verbatim**).

**CAPUT VI (0586A–0593A):** *Anno quarto.* (6:1) · *Mense Zio (ipse est mensis).* (6:1, clipped
before *secundus* — **and the gloss supplies it**, *Quod mense secundo*) · *In longitudine,* ·
*Viginti cubitos.* · *In latitudine.* · *Triginta cubitos.* · *In altitudine.* (all 6:2) ·
*Porticus erat,* (6:3) · *Viginti cubitorum longitudinis, juxta mensuram latitudinis templi.*
(6:3, **verbatim**) · *Fenestras obliquas.* (6:4) · *Et aedificavit,* (6:5) · *Latera.* (6:5) ·
*Trabes autem posuit in domo per circuitum forinsecus.* (6:6, **verbatim**) · *Trabes,* ·
*forinsecus.* (6:6) · *Domus autem,* (6:7) · *Et malleus et securis.* (6:7) · *Ostium lateris.*
(6:8) · *Ascendebant in medium coenaculum et a medio in tertium. Et aedificavit.* (6:8–9, a join
of the two verses across the verse boundary, both **verbatim**) · *Laquearibus.* · *Cedrinis.*
(6:9) · *Tabulatum super omnem domum quinque cubitis altitudinis.* (6:10, **verbatim**) · *Et
aedificavit parietes.* · *Parietes domus.* · *A pavimento.* (6:15) · *Et texit pavimentum.*
(6:15) · *Porro.* (6:17) · *Et cedro omnis.* · *Habens tornaturas.* · *Caelaturas.* · *Omnia
cedrinis,* (6:18) · *Oraculum.* (6:19) · *Porro oraculum.* · *Sed et altare.* (6:20) · *Domum
quoque ante oraculum.* · *Clavis aureis.* (6:21) · *Nihilque erat in templo.* (6:22) · *Cherubim
de lignis.* · *Olivarum.* · *Decem cubitorum.* (6:23) · *Quinque cubitorum.* · *Ala cherub
altera.* (6:24) · *Decem quoque cubitorum.* (6:25) · *Et opus.* (6:25) · *In medio templi
interioris.* (6:27) · *Extendebant autem alas,* (6:27) · *Texit quoque cherubim.* (6:28) ·
*Sculpsit variis coelaturis.* (6:29, Migne's *coe-* against the Clementine's *cae-*; orthography
only) · *Et palmas.* · *Et picturas varias.* (6:29) · *Et in ingressu oraculi,* (6:31) ·
*Postesque angulorum.* (6:31) · *Anaglypha.* (6:32) · *Fecitque in introitu.* · *Postes de
lignis.* (6:33) · *Altrinsecus.* · *Et utrumque ostium.* · *Et se invicem.* (6:34) · *Et sculpsit
cherubim.* (6:35) · *Aedificavit atrium.* · *Aedificavit atrium interius tribus ordinibus* · *Et
uno ordine.* (6:36) · *Ipse est mensis.* · *Aedificavitque eam.* (6:38) · *Christi bonus odor
sumus Deo* (2Cor 2:15, clipped) · *De regionibus congregavit eos. A solis ortu et occasu, ab
Aquilone et mari* (Ps 106:2b–3, **verbatim**) · *Ego diligam eum, et manifestabo ei meipsum.*
(Jo 14:21, **verbatim**) · *Venit hora cum jam non in proverbiis loquar vobis,* (Jo 16:25,
**verbatim**, clipped before *sed palam*) · *Mihi autem adhaerere Deo,* (Ps 72:28, clipped before
*bonum est*) · *et quae sursum sunt sapite, non quae super terram* (Col 3:2, **verbatim, both
negatives intact**) · *In hoc cognoscent omnes, quia discipuli mei estis, si dilectionem
habueritis ad invicem* (Jo 13:35, *quia* for the Clementine's asyndeton after *omnes*) ·
*Imitatores mei estote sicut et ego Christi* (1Cor 4:16, **verbatim**) · *Nescitis quoniam angelos
judicabimus, quanto magis saecularia* (1Cor 6:3, **verbatim; Migne prints neither of the
Clementine's two question marks and none is supplied**) · *Domine, ne in furore tuo arguas me,
neque in ira tua corripias me* (Ps 6:2, **verbatim, both negatives intact**) · *in spiritu et
virtute Eliae* (Lc 1:17, **verbatim**) · *Beati immaculati in via,* (Ps 118:1).

**CAPUT VII (0593B–0599D):** *Fecit omne opus.* (7:14) · *Et finxit.* · *Decem,* · *Et linea.*
(7:15) · *Duo,* (7:16) · *Septena,* (7:17) · *Et duos.* · *Ut tegerent.* · *Malogranatorum.*
(7:18) · *Quasi,* · *In porticu.* (7:19) · *Et rursum* · *Malogranatorum.* (7:20) · *Columnam.*
(7:21) · *Fecit quoque.* · *A labio usque ad labium.* · *Quinque cubitorum.* · *Et resticula
triginta cubitorum cingebat illud.* (7:23, clipped before *per circuitum*) · *Et sculptura.*
(7:24) · *Duodecim.* · *E quibus tres.* (7:25) · *Grossitudo.* ×2 · *Lilii.* (7:26) · *Et fecit.*
· *Quatuor cubitorum longitudinis.* (7:27) · *Et ipsum opus basium.* (7:28) · *Et subter leones.*
(7:29) · *Et quatuor rotae.* · *Humeruli.* · *Contra.* (7:30) · *Unum cubitum.* · *Media.* ·
*pariterque habebat unum cubitum et dimidium,* (7:31, **verbatim**) · *In hunc modum fecit decem
bases, fusura una, et mensura, sculpturaque,* (7:37, clipped before *consimili*) · *Quadraginta
batos capiebat luter unus,* · *Eratque.* (7:38) · *Et constituit decem bases, quinque ad dexteram
partem templi, et quinque ad sinistram.* (7:39, **verbatim**) · *Mare autem posuit ad dexteram
partem templi,* (7:39, clipped before *contra orientem*) · *Jordanis fudit ea rex in.* (7:46, a
fragment clipped at BOTH ends — see §5.6) · *Argillosa terra.* (7:46) · *Fecitque Salomon omnia
vasa in domo,* (7:48, clipped before *Domini*) · *Altare aureum.* (7:48) · *Mensam.* (7:48) ·
*Quasi lilii.* · *Lucernas desuper aureas.* · *Forcipes.* (7:49) · *Hydrias.* · *Fuscinulas.* ·
*Domus interioris.* (7:50) · *Perfecit omne opus.* · *Et intulit quae sanctificaverat.* ·
*Reposuitque in thesauris domus Domini.* (7:51) · *Ex parte enim cognoscimus, et ex parte
prophetamus,* (1Cor 13:9, **verbatim**) · *Non alligabis os bovi trituranti,* (1Cor 9:9,
**verbatim**) · *Funiculus triplex difficile rumpitur* (Ecl 4:12, **verbatim**) · *Poenitentiam
agite,* (Mt 3:2) · *Capitella autem quae erant super capita columnarum,* (7:19, **verbatim**) ·
*In domo Patris mei mansiones multae sunt* (Jo 14:2, **verbatim**) · *Habemus firmiorem
propheticum sermonem, cui bene facitis attendentes,* (2Pt 1:19, *Et* dropped at the head and
*benefacitis* printed as two words).

### 4.2 DIVERGENT but taking no marker — every one named, with the reason

- **0581A · *Hi sunt qui venerunt de calore domus Rechab*** (I Par. II). 1Par 2:55 reads *Hi sunt
  **Cinaei**, qui venerunt de Calore **patris** domus Rechab.* Two dropped words. **No marker:**
  the gloss adduces the verse only for the *calor*, which is intact.
- **0582B · *Introducam **te** in domum matris meae, et in **cubiculum ejus, quae concepit me****
  (Ibid. III). Ct 3:4 reads *donec introducam **illum** in domum matris meae, et in cubiculum
  **genetricis meae**.* Two divergences: the object pronoun is switched from third person to
  second, and *genetricis meae* is paraphrased. **No marker, and the reasoning is the point:** the
  two words the gloss builds on — *domum matris meae* and *cubiculum* — agree exactly, and this
  quotation is adduced *after* the one at 0582B that does take a `[var:]`, as a second witness to
  the same word. Marking the pronoun would put a public claim on the half of the citation that is
  not doing any work. Logged, not marked.
- **0582C · *Vere hic erat Filius Dei*** (Marc. XV). Mc 15:39 reads *Vere hic **homo** Filius Dei
  **erat**.* A dropped noun and a word order change; the centurion's confession asserts the same
  thing either way.
- **0582C · *Pater, ignosce illis,*** Lc 23:34 reads *Pater, **dimitte** illis.* A verb
  substitution with the same sense ("pardon" for "forgive"), and **nothing in the gloss turns on
  it** — the paragraph is about the three and five thousand who believed afterward. Contrast the
  Matt 27:24 site above, where the substituted word IS the gloss's image; that is the whole
  difference between a `[var:]` and a line here.
- **0581A · *Abiit itaque **Salomon**.*** 3Rg 3:4 reads *Abiit itaque in Gabaon.* Migne supplies
  the subject from later in the same verse (*obtulit Salomon*). Not a divergence in substance.
- **0584C · *Adoniram erat super hujuscemodi **indictionem**.*** 3Rg 5:14 has *indictione*,
  ablative. One letter, and `sources/vulgate/README.md` says this copy is not to be trusted to
  that precision.
- **0584D · ***Fuerunt itaque** Salomoni septuaginta millia…*** 3Rg 5:15 has ***Fueruntque***.
  A connective.
- **0585C · *Ad **aedificandum** domum.*** 3Rg 5:18 has *ad **aedificandam** domum*. A gerundive
  ending; the English is identical either way.
- **0586A · *Aedificare coepit.*** ⚑ 3Rg 6:1 has ***aedificari** coepit domus Domino* — passive.
  Migne's lemma is **active**: "he began to build" against "the house began to be built."
  ⚠ **This one is worth the next reader's attention and I want to be plain about why I declined
  it.** Two things pull opposite ways: the divergence is a single letter (*-e* for *-i*), which
  the README says not to adjudicate from this file; but the difference is a change of **voice**,
  and the gloss's own re-quotation three lines above prints the passive (*coepit aedificari
  domus*). I rendered Migne's active and fired nothing. **The rival — a `[var:]` on the voice —
  lost because the marker is a public claim about a one-letter difference in a copy whose own
  README disclaims one-letter precision, and because nothing in the gloss is falsified either
  way.** It is a good plate candidate if this work is ever read at the plate.
- **0586A · *Quae praeparaverat David,*** — ⚑ **located nowhere in the Clementine.** There is no
  such clause at III Reg. 6, and the nearest text is 2Par 3:1 *in loco quem **paraverat David***,
  which the gloss then expounds (*paraverunt … locum Domino*). Recorded as unlocated rather than
  as divergent: it may be Bede's text of the Chronicles parallel. No marker.
- **0586A · *Levate oculos vestros … ut qui seminat simul gaudeat et qui metit*** (Joan. IV). A
  **conflation of Jo 4:35 with 4:36**, both halves printed accurately, joined at *ad messem: et
  qui metit*. Abridgment family (8970 precedent: an abridgment is not a variant). The Clementine's
  *ut **et** qui seminat* loses its *et*. No marker.
- **0586D · *Porticum vero ante frontem quae tendebatur in longum juxta mensuram latitudinis
  cubitorum viginti*** (II Paral. III). 2Par 3:4 has *juxta mensuram latitudinis **domus**,
  cubitorum viginti*. One dropped noun. **No marker:** the gloss argues from the twenty cubits
  and the orientation, not from whose breadth it is.
- **0588A · *Noe vir perfectus in generationibus suis,*** Gn 6:9 has *Noe vir **justus atque**
  perfectus **fuit** in generationibus suis*. Migne compresses. **No marker:** the argument turns
  on *perfectus*, which is the word that survives, and the sentence is adduced precisely to be
  qualified (*nullus vere perfectus … incedere potest*).
- **0588D · *Super omnia autem charitatem **habentes**,*** and **0591A · *super omnia autem
  charitatem, quae est vinculum perfectionis*** (both Col. III). Col 3:14 reads *Super omnia autem
  **haec, caritatem habete, quod** est vinculum perfectionis.* Migne drops *haec*, turns the
  imperative into a participle at the first site and into a bare accusative at the second, and
  writes *quae* for *quod*. **No marker at either:** both are woven into the glossator's own
  sentence (the second continues a list of virtues in the accusative), which is quotation-as-
  syntax, not a rival text.
- **0588D · *Aedificavit viginti.*** 3Rg 6:16 has ***Aedificavitque***. An enclitic.
- **0590B · *Cum apparuerit, similes ei erimus **et** videbimus eum **sicut** est*** (cited
  Joan. III, in fact 1Jo 3:2). The Clementine has ***quoniam** videbimus eum **sicuti** est*.
  A causal connective flattened to a coordinating one, and one letter on *sicuti*. **No marker:**
  the gloss adduces the verse for the *imago* recovered, and neither reading disturbs that.
- **0591C · *Duo ostiola de **ligno** olivarum.*** ⚑ 3Rg 6:31 reads *fecit **ostiola** de
  **lignis** olivarum* (no number), and 6:32 reads *Et **duo ostia** de lignis olivarum*. Migne's
  lemma is a **conflation** of the two verses, taking *duo* from 6:32 and *ostiola* from 6:31, and
  printing the singular *ligno*. **This one is a near miss and I say so**: the gloss's first
  sentence is *Duo sunt ostiola*, so the number is load-bearing — but it is load-bearing on a word
  the received text *does* print one verse later, which makes this a conflation and not a
  substitution. Conflations take no `[var:]` in this series (8953 @0571B, @0580B). Logged.
- **0593B · *Ego plantavi, Apollo rigavit, **Dominus autem** incrementum dedit*** (cited II Cor.
  III, in fact 1Cor 3:6). The Clementine has ***sed Deus** incrementum dedit*. A connective and a
  divine name. **No marker:** *Dominus* and *Deus* have the same referent here and the gloss
  (*opus Dei operantur*) is unaffected.
- **0594A · *ambulant de virtute in virtutem*** (Psal. LXXXIII). Ps 83:8 has ***ibunt** de virtute
  in virtutem.* A verb substitution of the same sense, and the phrase is woven into the
  glossator's own clause (*quod sancti ambulant*). No marker. The same idea stands unquoted at
  0585D (*proficiendum de virtute in virtutem*).
- **0594B · *Inter vestibulum et altare **plorabant**;*** Joel 2:17 has *plora**bunt** sacerdotes.*
  A tense and a dropped subject. **No marker:** the quotation is adduced only to prove that
  *vestibulum* and *porticus* name the same place.
- **0596B · *Duo millia batos capiebat **et tria millia**,*** ⚑ 3Rg 7:26 has *duo millia batos
  capiebat* and nothing more; *tria millia* comes from **2Par 4:5**. A conflation — and Bede's
  gloss on it is precisely about reconciling the two accounts, so the conflated lemma is doing
  exactly the work the gloss needs. No marker.
- **0596D · ***Inter et** coronulas et plectas…*** 3Rg 7:29 reads ***Et inter** coronulas.* The
  *et* has moved one word. Rendered by taking the printed *et* adverbially ("Between the little
  crowns **also** and the plaited work"), which is a real sense of *et* and needs no emendation.
  Logged; no marker.
- **0597B · *Initium Evangelii Filii Dei sicut scriptum est in Isaia propheta;*** Mc 1:1 reads
  *Initium Evangelii **Jesu Christi,** Filii Dei*, and *Sicut scriptum est in Isaia propheta* is
  1:2. A dropped name and a join across the verse boundary. Conflation family; no marker.
- **0597B · *ut adimpleretur **Scriptura** prophetarum*** (Matth. XXVI). Mt 26:56 has *ut
  adimple**rentur** Scriptur**ae** prophetarum.* Singular for plural, twice over, asserting the
  same thing. No marker.
- **0599C · *quamvis in ea **stella a stella differat** in claritate*** (cited II Cor. XV, in fact
  1Cor 15:41). The Clementine has *Stella **enim** a stella **differt** in claritate.* The
  subjunctive follows from the glossator's own *quamvis*, which is inside the italic span; this is
  quotation-as-syntax again. No marker.
- **0598A · *ita fabrefacta ut luter **superimponi posset**.*** 3Rg 7:35 has *ut luter **desuper
  posset imponi**.* A compound verb for a verb-plus-adverb, same sense. Recorded beside the
  `[var:]` that the same lemma earns for its number, and deliberately kept out of the marker.

### 4.3 The name- and etymology-italics — rendered as the Latin says

These are not scripture and 7a″ does not reach them; they are rendered from the Latin printed and
never from a Hebrew lexicon. In my range there are only two, plus one that is not italicised:
*dominator dominus* → **"ruler lord"** (0581B, of Adonias) · *cherubim … id est, multiplicata
scientia, vel scientiae multitudo* → "multiplied knowledge, or a multitude of knowledge" (0590A) ·
and the roman etymology of Adoniram at 0584C, *Dominus meus excelsus* → "My lord is exalted."

---

## §5 · CRUCES — the plate, and what was declined

### 5.1 Non-word candidates — SEVEN, all raised for the plate, NONE marked

Per the 2026-08-23 addendum, a form that is no Latin word at all has been **our digitization's**
corruption ten times out of ten, never Migne's, and 8953 then made it twelve. Each is rendered for
its evident sense, logged here, and carries **no `[sic:]`**, because that marker is a public claim
that Migne's plate is defective. ⛔ **I have no plate access and did not patch anything.**

| col | our file reads | evident word | shape of the defect | rendered as |
|---|---|---|---|---|
| **0585A** | *crudimur* | *erudimur* | dropped initial syllable | "we are trained" |
| **0587C** | *Id. est* | *Id est* | an intruded period splitting a two-word phrase | "That is" |
| **0588A** | *Qui dam* | *Quidam* | word split across a space | "Certain men" |
| **0593B** | *vi.* | *viduae* | **truncation** — see 5.2 | carried as printed |
| **0597B** | *fifides* | *fides* | doubled syllable | "faith" |
| **0599B** | *dedicacationi* | *dedicationi* | doubled syllable | "for dedication" |
| **0589A** | `*usque* et *ad*` | `*usque ad*` | the formula split by an intruded roman *et* — see 5.3 | see 5.3 |

⚑ ***Qui dam* is on the addendum's own confirmed list** (found in the 2026-08-23 batch and proved
to be ours). It recurs here, in a different volume, which is worth recording.

### 5.2 0593B · ***Domum autem mulieris vi.*** — the chunk's opening lemma, and a truncation

Migne's lemma for CAPUT VII opens the chapter and reads, as we hold it, ***Domum autem mulieris
vi.*** The gloss is *Ecclesiae, scilicet praesentis, pro qua Christus **vir suus** morte gustata
surrexit* — the Church whose husband died, i.e. **the widow**. Bede's own lemma at that place is
III Reg. 7:14, *filium mulieris **viduae** de tribu Nephthali*, and the `[n:]` on this very
paragraph cites *lib. de templo Salom., cap. 17*, which is the chapter on 7:13–14.

**So *vi.* is with near-certainty a truncation of *viduae*, and the sense is not in doubt.**

**What I did, and what I refused.** I carried the stub into the English inside the lemma's own
italic span — "*But the house of the woman vi.*" — and fired no marker.
- **Expanding it to "the widow woman"** was the rival, on Glossa convention 3 (a fragmentary lemma
  is rendered as the phrase it stands for). **It lost** because convention 3 is about lemmata Migne
  *clipped* deliberately, and this is a broken word, not a clipped phrase: expanding it would put
  a word on the page that no witness we hold prints, exactly the silent repair Pattern 7a forbids.
- **A `[sic:]`** was the other rival. **It lost** on the ship test: it is a public claim that
  Migne's plate is broken, and the seven-for-seven finding above says this class is *ours*.
- 7a⁗'s fourth question was asked: the quarantine takes no verb, no negation, no conjunction and
  **no object** — *vi.* is an attributive on *mulieris* and the phrase stands without it.

⚠ **This is the single best plate candidate in my half.** PL 113 col. 593 is p. 302 of the
archive.org copy by the recorded map, and CLAUDE.md records that **that copy clips the left margin
on some pages** — so if it comes back clipped, the Gallica witness (`ark:/12148/bpt6k5505319w`,
`f = (column + 1) / 2`) settles it in one request.

### 5.3 0589A · `*usque* et *ad*` — the abridgment formula split by an intruded *et*

Migne prints, in the gloss on *Omnia cedrinis*: *Lapides parietis vel pavimentum, et tabulae, et
aurum, etc., **usque** et **ad** qui gratiam Evangelii perfecte susceperunt, aeterna vita pariter
perfruuntur.* The two words of the formula stand in **two separate italic spans** with a roman
*et* between them — the only occurrence of that shape in 94 uses of *usque* in this half.

**Rendered as printed**, with the italic structure 1:1: "*as far as* and *to* those who have
perfectly received the grace of the Gospel alike enjoy eternal life." The English is awkward
because the printed line is.

**The reading I believe is behind it, and did not put in the text:** `*usque ad* et qui gratiam
Evangelii perfecte susceperunt…` — the formula whole, followed by a resumption tail opening on
*et qui*, which construes perfectly and is this work's ordinary shape. **The rival — treating
*et* as a stray to be dropped — lost** because dropping a printed word is an emendation, and
because the italic markup may be ours rather than Migne's (11632's *informen t* is the precedent
for suspecting our own asterisks). **Plate candidate**, and cheap: p. 300 of the archive copy.

### 5.4 Real words that read oddly — rendered as printed, markers DECLINED, rivals named

Per addendum A: a real, well-formed word is **Migne's** until a plate says otherwise (refuted five
times out of five), so none of these fires anything.

- **0591A · *ne eo minus **ab arcae** justitiae cadant*** — *arce* is what *ab* governs, and the
  work's own control is one column away in my other chunk: 0584D prints *ad **arcem** virtutum quae
  est in unitate Ecclesiae*, the same image in the same voice. Rendered "from the citadel of
  justice". **Declined:** a case slip has no English exponent (Pattern 9 family), and 18a leaves
  case and mood anomalies that merely fail to construe declined.
- **0596A · ***Apostolus** evangelistas, imo omnes verbi ministros;*** — a nominative heading a
  series of accusatives (*evangelistas … ministros*), where *Apostolos* is required. Rendered as a
  flat list, "The Apostle, the evangelists, nay rather all the ministers of the word", with **no
  copula supplied**, because supplying one would decide the case question in the English.
  **Declined:** same class as above.
- **0599C · *Quia **deos suos** abscondit in abdito vultus sui a conturbatione hominum.*** ⚑ This
  is Ps 30:21, *Abscondes **eos** in abscondito faciei tuae a conturbatione hominum* — third-person
  and freely paraphrased throughout (*abdito* for *abscondito*, *vultus* for *faciei*), and *deos*
  for *eos* is one letter more than the rest of the paraphrase.
  **The `[cj:]` was seriously considered and DECLINED, and here is why the rival lost.** *deos* is
  a perfectly good Latin word, and in this sentence it reads: "he hides **his gods** in the hidden
  place of his countenance" — the saints, who are the treasures of the house of the Lord, called
  gods by adoption after Ps 81:6 *Ego dixi: Dii estis*. That is a live patristic reading in this
  author's own idiom, and the paragraph is about the saints hidden among many treasures in one
  house. Pattern 18's bar is that the English **asserts something false**, and under that reading
  it does not. Rendered as printed.
- **0593C · *…a recta via qua ad promissam patriam gradimur, **ulla** in parte declinemus.*** ⚑
  *ullus* wants a negative, and there is none on the page. **No negative was supplied** (7a is
  unconditional), and the English reads "that in any part we may turn aside from the straight
  way." **The reason it is not a defect of Migne's:** the missing *ne* falls in the text the
  `usque ad` **elides** — this is the tail of an abridgment, and the formula removes words. The
  brief's own warning applies in reverse here: the formula removes words, it does not suspend
  grammar, and the grammar of what survives is exactly what was printed. Logged, nothing marked.
- **0587D · *Tantae longitudinis **erat**, ut capita **earum** forinsecus prominerent.*** A
  singular verb against a plural genitive. *earum* fixes the referent as *trabes* two words above
  in the lemma. Rendered "It was of such length that their heads projected on the outside."
  Declined: number agreement has no English exponent here.
- **0592A · *cum sobrie, et juste, et pie cogitant de eis per ipsos corporis sensus agere
  decernunt.*** Two finite verbs with no conjunction between them. Rendered as a *cum* clause
  answered by a main clause ("when they think soberly, and justly, and piously, they determine to
  act upon those things through the senses of the body themselves"), which is the only reading
  that gives both verbs a slot. Declined: asyndeton is not a false claim.
- **0587C · *luriculas*, twice** — for *loriculas*, little parapets. Listed apart from the
  non-words above **because it may not be one**: *u* for *o* is ordinary medieval orthography
  (Pattern 9), and the form is printed **consistently twice in the same gloss**, which is what a
  spelling looks like and not what a slip looks like. Rendered "little parapets", no marker, no
  crux beyond this line.
- **0590B · *veniunt denarium*** — an accusative of the goal without *ad*. Rendered "they come to
  the denary". Declined, Pattern 9 family.
- **0594B · *Notandum autem in hac sententia **Paralipomenis**…*** — the book name without a
  preposition. Rendered "in this sentence of Paralipomenon". Declined, same class.

⭐ **Recording the negatives, as the addendum asks.** Four real words were suspected and refused a
marker on the rule that a real word is Migne's until a plate says otherwise: *deos* (0599C),
*arcae* (0591A), *Apostolus* (0596A), *aedificare* (0586A). Two of the four had good arguments
behind them — the first two — and the argument is exactly what the addendum measured as losing.

### 5.5 A form that struck me as suspiciously TIDY (brief §4, the normalization class)

**0588A–B · *Qui dam hunc locum male intelligentes*** — and its neighbours in the same look, per
addendum C. Reading the whole line rather than the target word: *et bene unum ostium, propter
consonam in omnibus sanctis fidem et dilectionem veritatis* runs clean, and *Notandum quod triginta
cubiti altitudinis de quo supra legitur* has the well-known *quod … de quo* mismatch that reads
like Migne rather than like a tidy-up. **Nothing in my range struck me as normalized**, which I
record as a checked negative rather than as silence.

### 5.6 A lemma clipped at BOTH ends

**0598C · *Jordanis fudit ea rex in.*** — III Reg. 7:46 reads *In campestri regione **Jordanis
fudit ea rex in** argillosa terra, inter Sochoth et Sarthan.* Migne's lemma begins mid-phrase (the
genitive *Jordanis* with its governing *In campestri regione* cut away) and stops on the preposition
*in*, because the words it stops before are the **next lemma**, *Argillosa terra.* Rendered as the
printed words stand — "*Of Jordan the king cast them in.*" — and **not completed**, per the brief's
rule on clipped lemmata: nothing is elided inside it, so convention 3's expansion does not apply.

---

## §6 · UNEXPRESSED SUBJECTS — every supplied pronoun named, and what named it

The dominant defect class. Every "he/she/it/they" in my English that the Latin does not print:

- **0581A–B · "he grows not warm", "he wasted away", "he remained"** — David, from the lemma
  *Et rex David senuerat* and *Frigidus senex*.
- **0586A · "she was made possessed of that inward peace"** — feminine, and **not decidable from
  the sentence**: it is the tail of an abridgment (*compos effecta est*) and the noun it agrees
  with was elided by the *usque ad*. Bede's chapter is on Jerusalem/the Church, both feminine, and
  either reading construes. **Said here rather than chosen silently.**
- **0586C, 0586D · "she patiently bears", "she may rejoice", "she despises"** — the Church, named
  in the first clause of the same gloss (*longanimitatem Ecclesiae significat*).
- **0587B · "they could not hear his doctrine"** — the *antiqui justi* of the same sentence.
- **0590B · "they have twin wings", "they preach", "they show"** — the cherubim, i.e. the two
  Testaments, named in the note-paragraph immediately above (*Possunt per duo cherubim duo
  Testamenta figurari*) and confirmed by *suis auditoribus*.
- **0590C · "they embrace one another"** — the two cherubim.
- **0590D · "their writers … take care for our salvation"** — printed (*scriptores eorum*).
- **0591A · "he makes palms", "he fixes"** — the Lord/Solomon of the lemma *Sculpsit*; the same
  unexpressed subject runs through *Facit picturas varias* and *Texit ergo Salomon*, where Migne
  names him.
- **0591D · "they do somewhat", "they think", "they determine"** — the *qui … Domino serviunt* of
  the same sentence.
- **0592D · "he speaks briefly of the inner court"** — Bede, the cited author, whose voice the
  whole `usque ad` block is.
- **0594C · "he foretold"** — the Lord, from the parable of the vineyard the clause alludes to.
- **0596B · "he makes them glow"** — the subject of the abridged tail; not printed, and the tail
  is Bede's. Named here.
- **0598B · "I consider that they are alien from the flame of divine charity"** — ⚑ the **verb**
  is printed first person (*considero*, Bede's own voice, which this recension keeps), and the
  **subject of *aliena esse* is not printed at all**; the neuter plural *aliena* is left without an
  antecedent by the abridgment. Rendered with "they" and flagged here.
- **0599B–C · "he does indeed the work", "he grants", "he finishes"** — the Lord, named two clauses
  later (*cum noster pacificus … glorificat*).
- **0599C · "he hides his gods"** — God, from Ps 30:21 (see 5.4).

---

## §7 · THE TESTS, RUN, AND WHAT THEY RETURNED

1. **`[sic:]` swallow test** — **vacuously clean: no `[sic:]` was fired anywhere in my half.** The
   test was still run in its stripped form (every marker deleted, the remainder read aloud) on all
   six chunks, because the `[var:]` markers occupy the same position class: no stranded article or
   preposition, no doubled mark, every sentence readable without any bracket.
2. **Negation attachment (2 + 2a)** — every printed negative was traced to the single Latin word it
   attaches to. The trigger population (a negative on a verb with a quantifier, correlative or
   predicate nearby) fired **five times**, and each host was proved from structure, not from what
   reads well:
   - **0582D** *non ut possideret, **sed** ut occideret* — hosts are the two purpose clauses.
   - **0582D** ***Non** enim fecit hoc **filii amore**, sed **odio** aemulae* — the negative is on
     the **ablative phrase**, not on *fecit*; the `sed odio` correlative proves it. (Rendering it
     on the verb — "she did not do this" — would have read better and been wrong.)
   - **0584C** *Vivunt enim **non agrum colendo**, sed negotiando* — on the gerund phrase.
   - **0586C** *triginta cubiti altitudinis **non usque ad tectum** templi, **sed** usque ad
     coenaculum* — on the first prepositional phrase, not on *pertingebant*.
   - **0591C** ***non solum** animas electorum aula coelestis recipit, **sed et** corporibus …
     fores aperit* — on *animas electorum*.
   - **0597B** ***non quod** quatuor sint **tantum** libri prophetici, **sed** omnia quae locuti
     sunt prophetae … testimonium praebuere* — ⚠ the sharpest of the five, because *tantum* sits
     right beside the verb. The `sed` clause affirms that ALL prophecy witnesses to the four
     Gospels, so what is denied is the whole *quod* clause with its *tantum* inside it, not the
     number four. Rendered "not that the books of the prophets are only four."
   Total negatives carried: every *non*, *nec*, *neque*, *nisi*, *ne*, *nullus*, *nemo*, *nihil*,
   *nondum*, *nunquam* the Latin prints, and none supplied — including at **0593C**, where *ulla*
   plainly wants one (§5.4).
3. **Column anchors, position not merely presence (2b)** — all 76 anchors reproduced verbatim and
   in order, and **each was then checked against the WORD it stands beside in the Latin.** Six were
   found displaced on the first pass and moved: **0584C** (belongs before *colendo*, "not by
   [0584C] tilling the field"), **0584D** (before *et visitatore*), **0589D** (before *veniens*),
   **0595C** (before *rerum historias*), **0595D** (before *Domino* — it had migrated a phrase
   downstream), **0596C** (before *surgat*). Anchors split mid-construction to match Migne where he
   splits them: `*usque [0594B] ad*`, `usque [0588D] ad perfectionem`, and the anchor inside the
   0591C siglum.
4. **Punctuation, band by band, never by total (3)** — the six chunks partition into 76 bands, and
   `: ; ? ! « » —` were counted in each band on both sides with the markers stripped. The first run
   returned **23 mismatched bands**, and every mismatch was a mark of mine, not of his: **20
   semicolons written where Migne prints a comma**, and **5 colons** — three of his restored where I
   had written a comma, two of mine removed where he prints none. All were repaired to the plate. **Second run: zero mismatched bands in all six chunks.** ⚠ Migne prints semicolons
   himself in this book — 23 of them across my half — so the Tobit exception does not apply and no
   comma→semicolon sweep was attempted; the repairs went the other way, back to his commas.
   Question marks: 4 in chunk 0000, 1 in chunk 0003, 0 elsewhere, matched exactly.
   ⚑ **8b did not fire.** 0593A prints *Quaeritur quomodo dicatur domus Domini in mense octavo
   perfecta…* with a **comma**, not a question mark, so the indirect question was rendered
   indirectly and no colon was introduced. Supplying one would have been the mirror of the defect
   8b exists to prevent.
5. **The fourth test — does it ASSERT what he asserts?** Every finished paragraph read back against
   the Latin with that question only. It returned **three repairs that no count would have caught**:
   *qui de suo situ **vel** abstracti sunt* (0585D) had lost its *vel* — "even drawn away" —
   restored; *quia **non nisi** per Evangelium* (0594B) had been softened to "not otherwise than",
   restored to "not except through the Gospel", which carries the exceptive as an exceptive; and
   the resumption tail at 0589A had been given "they who" where the clause needs "those who" as
   the subject of *perfruuntur* (§5.3). It also confirmed the *filii amore* and *non solum … sed et*
   attachments above, which had been the two I was least sure of.
6. **Em-dashes: zero** in all six English chunks.

---

## §8 · WHAT I DECLINED, AND WHAT THE MERGE SHOULD KNOW

- **No `[sic:]`, no `[cj:]`, no `[d:]`, no `[ed:]`, no `[nt:]`.** Seven non-word candidates and
  four real-word suspicions are logged above and none of them fires anything; the ship test governs
  and the crux is the safe place. Nothing here asserts a defect in Migne's plate.
- **No plate read was performed** — I have no plate access from this seat. The three candidates
  worth one page each, in priority order: **0593B *vi.*** (col. 593), **0589A `*usque* et *ad*`**
  (col. 589), **0586A *aedificare* / *aedificari*** (col. 586). All three fall inside the range
  where our archive.org copy of PL 113 is known to clip the left margin, so the Gallica witness is
  the one to use.
- **Vocabulary drift is the merge's real risk and §0 is the answer to it.** The peer's chunks
  0006–0010 are CAPUT VIII–XXII — the dedication, the queen of Saba, the schism — and only the
  first of those still handles Temple furniture. If the peer's half renders *oraculum*, *tabulata*,
  *latera* or *anaglypha* differently, §0 states the reason each choice was made so the merge can
  adjudicate rather than split the difference.
- **Recurring names checked against I and II Regum (8952, 8953) and kept:** Solomon, David,
  Bethsabee, Adonias, Hiram, Nathan, Sadoc, Joab, Semei, Libanus, Gabaon, Jerusalem, Israel,
  Sion. Two conventions carried without change: Migne's *Hierusalem*/*Jerusalem* variance is kept per site
  (my half prints the name once only, at 0581C, and prints it *Jerusalem*), and *noster pacificus* / *verus Salomon* render as
  "our peaceable one" / "the true Solomon", as 8953 has them.

---

# PART II — chunks 0006–0010, cols 0600A–0610D

# *Glossa ordinaria*, **Liber III Regum** (PL 113) — cruces for chunks 0006–0010 (cols 0600A–0610D)

Translated 2026-08-25, one translator, 5 chunks (4,270 Latin words), cols **0600A–0610D**
(III Reg. 8:6 – 22:19). `verify-english.mjs` clean across all 11 chunks of the work.
Apparatus fired in this range: **1 `[sic:]` · 1 `[cj:]` · 7 `[var:]` · 0 `[d:]` · 0 `[ed:]` ·
0 `[nt:]` · 83 `[n:]`** (exact parity with the Latin twins). Zero guillemets, zero em-dashes,
zero `[cn:]` (this volume's plate apparatus is a checked zero — see the Ruth pilot, §5).

⚠ **Chunks 0000–0005 are a peer's stint and are not covered here.** Where a rendering of theirs
governs mine it is named below (§0).

---

## §0 · CONVENTIONS INHERITED, AND THE ONE I HAD TO STATE

### 0.1 Followed from the peer's 0000–0005, not re-derived

- **`*usque ad*` → `*as far as*`**, italics kept as one span. 25 occurrences in my range.
- ***Pacificus noster* → "our peaceable one"**, lowercase — the peer's §0 traces it to 8953, and
  I carry it at 0601A, 0601B (twice) and 0602B. **Not** "our Peacemaker" — 8958 uses "peacemaker"
  for *pacificus* in the Beatitude sense and that is a different word doing a different job.
- **Chapter heads**: `CAPUT VIII.` → `CHAPTER VIII.`, roman numeral kept, per the peer's §0 and
  Ruth's shipped English. My range runs CHAPTER VIII to CHAPTER XXII with no `(cont.)`.
- **Migne's own name-spellings ride as printed.** The peer records that their half prints
  *Jerusalem*; my 0602B lemma of Isa. 62:6 prints ***Hierusalem*** and is rendered "Hierusalem",
  while the gloss prose at 0603B–C prints *Jerosolymis* / *Jerusalem* and is rendered "Jerusalem".
  Three spellings in one work is what he set, and the English does not level them.
- **`In Paralipomenis` → "in Paralipomenon"** (peer, five times). *Verba/Verbis Dierum* is a
  separate thing and is rendered literally, **"the Words of the Days"** (0600D), after 8951's
  ruling at 0700A — Migne prints two names for the book and the English keeps two.
- **Names take the Latinate/Douay forms already standing in 8952 and 8953**: Elias, Eliseus,
  Josue, Jeroboam, Naboth, Nathan, Esdras, Juda, Abdias, Nicodemus, Caiphas. Extended here, with
  no divergence, to **Jezabel, Achab, Abia, Roboam, Baasa, Sesac, Micheas, Semer, Thersa, Emath,
  Ophir, Amorrhites**. The one place I departed from Migne's own spelling is *Michaeas* →
  **Micheas** (0610B, twice), the received English form of the name; recorded here so it is not
  read as a slip.

### 0.2 The expansion rule I used for clipped lemmata, stated because I applied it ~20 times

Convention 3 (a fragment is rendered as the phrase it stands for) does most of the work in this
range, which is the abridgment at its densest. The rule I held to, and it has a boundary:

> **A clipped lemma is completed to the smallest phrase from the glossed verse that stands as
> English on its own.** A lemma that is grammatically complete as printed is rendered as it
> stands, however short. **And words are supplied from the verse ONLY where Migne's own lemma
> does not itself diverge from the Clementine there** — where it diverges, the printed words
> alone are rendered, because expanding would be conformation, which is the thing forbidden.

- **Expanded** (clipping leaves a dangling verb, conjunction, subject or governed word):
  *Cumque.* → "And when the staves stood out." · *Subter alas.* → "Under the wings of the
  cherubim." · *In die.* → "In that day." · *Ab introitu.* → "From the entrance of Emath." ·
  *Universum.* → "The whole people." · *De filiis.* → "Of the children of Israel." · *Ligna.* →
  "Wood." · *Ducenta.* → "Two hundred shields." · *Et duodecim.* → "And twelve little lions." ·
  *Rex autem.* → "And king Solomon." (both at 10:13 and at 11:1) · *Erat autem.* → "Now Jeroboam
  was a valiant man." · *Tolle tibi.* → "Take thee ten pieces." · *Venit autem. Durissimum.* →
  "And Roboam came. A most hard yoke." · *Fecit duos.* → "He made two calves of gold." · *Ecce
  vir.* → "Behold a man of God." · *Sepelite,* etc. → "Bury me," etc. · *Aedificavit Hiel.* →
  "Hiel built." · *Apprehendite.* → "Take the prophets of Baal." · *Multae pluviae.* → "Of a
  great rain." · *Et ecce angelus Domini tetigit.* → "And behold an angel of the Lord touched
  him." · *Fecitque.* → "And he made a trench." · *Erit anima.* → "Thy life shall be for his
  life." · *Et furibundus.* → "And in a rage he came into Samaria." · *Haec faciant mihi.* →
  "These things may the gods do to me." · *Tulitque Elias.* → "And Elias took the child."
- **Left as printed** (complete English as it stands): *In arca.* "In the ark." · *Stetit.* "He
  stood." · *Et benedixit.* "And he blessed." · *Altare.* "The altar." · *Festivitatem.* "A
  festival." · *Laetantes.* "Rejoicing." · *Aedificavit.* "He built." · *Et Palmiram.* "And
  Palmira." · *Quinquaginta.* "Fifty." · *Classem.* "A fleet." · *In Ophir.* "In Ophir." ·
  *Cantoribus.* "For the singers." · *Saltus Libani.* "The forest of Libanus." · *Thronum de
  ebore.* "A throne of ivory." · *Voraginem.* "The gulf." · *Dies autem.* "Now the days." ·
  *Adolescentes.* "The young men." · *Scorpionibus.* "With scorpions." · *Ad Roboam.* "To
  Roboam." · *Prophetes.* "A prophet." · *Haec dicit Dominus.* "Thus saith the Lord." · *Ecce.*
  "Behold." · *Qui mortuus fuerit.* "He that shall die." · *In Abiram.* "In Abiram." · *Et
  dixit.* "And he said." · *Abscondere.* "Hide thyself." · *In torrente Carith.* "By the torrent
  of Carith." · *Mulier.* "A woman." · *Abdias autem*. "And Abdias." · *Curavit altare.* "He
  repaired the altar." · *Et spiritus.* "And a wind." · *Non in spiritu.* "Not in the wind." ·
  *Quicunque.* "Whosoever." · *Profectus.* "He departed." · *Secutus.* "He followed." · *Fugit
  quoque.* "And he fled." · *Abiit ergo.* "He went therefore." · *Post verba,* etc. "After the
  words," etc. · *Naboth.* "Naboth."
- **NOT expanded, because Migne's lemma diverges there**: ***In sanctum*** (0600A) and
  ***Praebente regi*** (0601A) — see §2.1 and §2.2.

⚑ Per the standing ruling, the split between these two lists is **class, not inconsistency**: the
first list is clipped mid-phrase, the second is complete. Do not contrast them.

### 0.3 `usque ad` — 27 occurrences, and **two of them are not the formula**

Decided per occurrence, from what stands either side, as the brief requires.

- **0600A**, inside the scripture quotation *Fuit itaque arca ibi **usque ad** praesentem diem:* —
  the verse's own words (2 Par. 5:9). Rendered **"until this present day"**, not the formula.
- **0600A**, in the gloss prose *significante **usque ad** tempora aetatis suae eam ibi
  permansisse* — ordinary prose. Rendered **"down to the times of his own age"**.
- The other **25** are the abridgment formula and take *as far as*. One of them, at **0604A**,
  has the tail INSIDE the italic span (`*usque ad et cujus principes vescuntur in tempore suo.*`)
  and is carried as one span, `*as far as and whose princes eat in due season.*` — the tail is
  Eccl. 10:17 verbatim.

---

## §1 · THE DIVERGENCE LIST — every lemma and inline scripture span in 0600A–0610D

⛔ **Checked against `sources/vulgate/clementine-flat.txt`, cited by book chapter:verse. Nothing
below rests on recollection.** The agreements are listed because a findings-only list cannot be
told apart from a report by an agent that never looked.

### 1a. `[var: …]` fired — 7 sites, material divergence

| col | Migne prints | Clementine | why material |
|---|---|---|---|
| 0600C | *Fecerat Salomon basim aeneam, et posuit in medio basilicae, **super quam stans benedixit omni Ecclesiae Israel*** | 2 Par. 6:13 *posuerat eam in medio basilicae … **stetitque super eam, et deinceps flexis genibus** contra universam multitudinem Israel* | Migne's Solomon **stands and blesses**; the Clementine's **kneels**, and the blessing formula is 3 Reg. 8:55's, not Paralipomenon's. The gloss adduces the verse precisely as what Paralipomenon adds to III Reg., so the added words are the point. |
| 0602B | *tota die et nocte **non cessabunt laudare nomen Domini*** (Isa. LXII) | Isa. 62:6 *tota die et tota nocte in perpetuum **non tacebunt*** | the gloss turns on **praise** (*laudem … pronuntiare non cessant*); the Clementine's watchmen only do not hold their peace. |
| 0602B | *lectulum Salomonis **septuaginta** fortes ambiunt* | Cant. 3:7 *En lectulum Salomonis **sexaginta** fortes ambiunt* | a number, in a gloss counting shields and guards. |
| 0603A | ***Non est in sermone verbum Dei**, sed in virtute **et praedicatione Evangelii*** (I Cor. I) | 1 Cor. 4:20 *Non enim in sermone est **regnum Dei**, sed in virtute* | *verbum* for *regnum* and a whole added clause; the gloss is built on preaching. |
| 0603C | *unus **Deus**, una fides, unum baptisma* | Eph. 4:5 *Unus **Dominus**, una fides, unum baptisma* | the divine name in a credal triad quoted as a proof-text. |
| 0605A | *Attamen bellum fuit inter **Abiam** et Jeroboam omni* | 3 Reg. 15:6 *inter **Roboam** et Jeroboam omni tempore vitae ejus* | a different king, and the gloss that follows is entirely about **Abia** fighting Jeroboam. The divergence is what makes the gloss cohere. |
| 0608C | ***Reliqui** mihi septem millia virorum* | 3 Reg. 19:18 *Et **derelinquam** mihi **in Israel** septem millia virorum* | perfect for future. The gloss requires the perfect (*dum non solum se remansisse cognosceret* — Elias learns what has **already** happened). |

### 1b. Divergences found and DELIBERATELY not marked — crux only

Each of these differs from the Clementine and none changes what the sentence asserts, so
Pattern 14's "in a way that changes the sense" is not met. Recorded so a later reader knows they
were seen and weighed.

- **0600A** *Fuit itaque arca ibi **usque ad** praesentem diem* ‖ 2 Par. 5:9 *usque **in**
  praesentem diem*. Preposition only. (3 Reg. 8:8 also reads *usque in*.)
- **0601A** *Praebente **regi*** ‖ 3 Reg. 9:11 *praebente **Salomoni***. Same referent, and this
  is why the lemma was NOT expanded — see §2.2.
- **0602B** *Quaecunque petieritis Patrem in nomine meo, dabit vobis* ‖ Jo. 16:23 *si quid
  petieritis Patrem in nomine meo, dabit vobis*, conflated with Jo. 15:16 *ut quodcumque
  petieritis Patrem in nomine meo, **det** vobis*. A loose conflation; the assertion is identical.
  Migne prints no citation here, so there is nothing to bind it to one verse.
- **0606D** *Expedit vobis ut unus moriatur pro populo* ‖ Jo. 11:50 *ut unus moriatur **homo** pro
  populo*. One word dropped; sense untouched.
- **0608D** ***Qui** in Christo baptizati estis* ‖ Gal. 3:27 ***Quicumque enim** in Christo
  baptizati estis*. A clipped opening.
- **0608D** ***nisi quis** renuntiat omnibus, non potest meus esse discipulus* ‖ Luc. 14:33 *Sic
  ergo omnis ex vobis, **qui non** renuntiat omnibus **quae possidet**, non potest meus esse
  discipulus*. Recast from a relative to a conditional; the proposition is the same, and the
  negation count is unchanged (*nisi … non*).
- **0610C** *Vidi **universum Israelem** dispersum* ‖ 3 Reg. 22:17 *Vidi **cunctum Israel**
  dispersum **in montibus***. Synonym plus a declined form of the indeclinable.

### 1c. Checked and found to AGREE with the Clementine, exactly, at their own verse

*In arca* (8:9) · *Nebula implevit domum Domini, et non poterant* (8:10 + 8:11, a lemma spanning
two verses, not a divergence) · *Stetit* / *Et benedixit* (8:55) · *In die* (8:64) ·
*Festivitatem* / *Ab introitu* (8:65) · *Laetantes* (8:66) · *Subter alas* (8:6) · *Cumque* /
*Qui et fuerunt* (8:8) · *Aedificavit* (9:17) · *Et Palmiram* (9:18) · *Universum* (9:20) · *De
filiis* (9:22) · *Quinquaginta* (9:23, the second word of the Clementine's *quingenti
quinquaginta*) · *Offerebat quoque* (9:25) · *Classem* (9:26) · *In Ophir* (9:28) · *Videns
autem* (10:4) · *Verus est sermo* (10:6) · *Beati viri* (10:8, clipped of *tui*) · *Ligna*
(10:11) · *Cantoribus* (10:12) · *Rex autem* (10:13) · *Ducenta* (10:16) · *Saltus Libani*
(10:17) · *Thronum de ebore* (10:18) · *Et duodecim* / *Non est factum* (10:20) · *Sed et omnia
vasa* / *Nec alicujus* (10:21) · *Deferens inde aurum* (10:22) · *Congregavitque Salomon* (10:26)
· *Invenimus eam in campis sylvae* (Ps. 131:6, *sylvae* for *silvae* is orthography only) ·
*Multae filiae congregaverunt divitias, tu supergressa es universas* (Prov. 31:29) · *fons aquae
salientis in vitam aeternam* (Jo. 4:14) · *Rex autem* (11:1) · *Voraginem* (11:27) · *Erat autem*
(11:28) · *Tolle tibi* (11:31) · *Dies autem* (11:42) · *Venit autem* (12:1) / *Durissimum* (12:4)
· *Adolescentes* (12:8) · *Scorpionibus* (12:11) · *Ad Roboam* (12:23) · *et cujus principes
vescuntur in tempore suo* (Eccl. 10:17) · *Fecit duos* (12:28) · *Ecce vir* (13:1) · *Prophetes*
/ *Omnia opera* (13:11) · *Haec dicit Dominus* (13:21) · *Et leo stabat* (13:24) · *Sepelite*
(13:31) · *Ascendit Sesac* (14:25) · *Factus est autem sermo* (16:1) · *Prophetas tuos occiderunt*
(19:10 and 19:14, clipped of *gladio*) · *Ecce* (16:3) · *Qui mortuus fuerit* (16:4) ·
*Aedificavit Hiel* / *In Abiram* (16:34) · *Et dixit* / *In cujus conspectu* (17:1) · *Converte,
Domine, captivitatem nostram* (Ps. 125:4, verbatim) · *Abscondere* / *In torrente Carith* (17:3) ·
*Mulier* (17:10) · *Quid mihi et tibi* (17:18) · *Tulitque Elias* (17:23 — see §2.6 on the verse
number) · *Nunc in isto cognovi quoniam vir Dei es tu* (17:24) · *Abdias autem* (18:3) · *Curavit
altare* (18:30) · *Fecitque* (18:32) · *Dominus ipse est Deus* (18:39) · *Apprehendite* (18:40) ·
*Multae pluviae* (18:41, clipped of *sonus*) · *Timuit ergo Elias et surgens abiit* (19:3) · *Et
ecce angelus Domini tetigit* (19:5) · *Et ecce ad caput suum* (19:6) · *Et spiritus* / *Non in
spiritu* (19:11) · *Ego solus* (19:14) · *Quicunque* (19:17) · *Profectus* (19:19) · *Secutus*
(19:21) · *Haec faciant mihi* (20:10) · *Ne glorietur accinctus* and the full *Ne glorietur
accinctus aeque ut discinctus* (20:11 — the Clementine prints a comma after *glorietur*, and only
that) · *Fugit quoque* (20:20) · *Abiit ergo* (20:38) · *Erit anima* (20:39) · *Et furibundus*
(20:43) · *Post verba* (21:1) · *Vidi Dominum* (22:19) · *Contra spiritualia nequitiae in
coelestibus* (Eph. 6:12, *coelestibus* for *caelestibus* is orthography only).

The Hebrew-name etymologies — *vivens Deo*, *domus Dei*, *Deus meus Dominus*, *Deus meus*, *Deus
fortis*, *captivans*, *convertens*, *cognitio*, *concisio*, *divisio* — are Rabanus's onomastica,
not scripture citations, and no Clementine comparand exists for them. Rendered, italics kept
1:1, no marker.

---

## §2 · THIS RANGE'S CRUCES

### 2.1 · 0600A · *In sanctum* — the Clementine reads *in Sanctum sanctorum*. NOT expanded.

Migne's lemma at 8:6 prints *In sanctum*; the Clementine prints *in Sanctum sanctorum*. Rendered
**"Into the holy place."** — the printed words, which stand as English on their own. **Expanding
to "Into the holy of holies" was considered and rejected**: it would supply from the Vulgate at
exactly the point where Migne's plate diverges from it, which is conformation, and conformation
is the failure this range's brief exists to prevent. The gloss's own *sancta sanctorum*, two
words later, is rendered "the holy of holies" as printed — so the reader sees both forms and can
see that Migne set them differently.

### 2.2 · 0601A · *Praebente regi* — *regi* where the Clementine has *Salomoni*. NOT expanded.

Rendered **"Furnishing to the king."** For the same reason: the lemma diverges, so no words come
in from 3 Reg. 9:11. The ablative absolute's subject (Hiram) is not printed and is not supplied.
Not marked — "the king" and "Solomon" are the same man and the sentence asserts the same thing
(§1b).

### 2.3 · 0603D · `[sic: *vides*]` — **the one `[sic:]` in this range, and here is the argument**

*qui reddebant regi **per vides** singulis mensibus annonam.* **`per` governs the accusative and
*vides* is a second-person finite verb.** There is no reading of the printed form that occupies
the slot: not "thou seest", not any noun. This is Pattern 12's first test — *a form in the wrong
person or mood cannot be carried by any English* (the 11632 *Pecte* / *ama* / *sternis* ruling,
2026-08-09) — and it is the one case where the marker is the only honest treatment.

⚑ **The rival, and why it lost.** The obvious conjecture is ***per vices***, "by turns", which
fits 3 Reg. 4:7's *per singulos enim menses in anno, singuli … ministrabant* exactly. It was
**not** entered in the text: a conjecture in the running text wears Migne's voice, and *c* → *d*
is precisely the shape of a Corpus Corporum misread, which would make this **our** defect and not
his. So the marker records the type and this crux records the conjecture, and neither pretends to
be the other.

⚠ **Plate read wanted.** If the plate prints *vices*, the fix is `data/tei-patches/8954.json` and
the `[sic:]` is withdrawn in the same commit. I have no plate access and have not asserted one.
7a⁗ check: with the marker's contents deleted the clause still has its verb (*reddebant*, "rendered")
and its object (*annonam*, "the provision") — the quarantine took only the prepositional object.

### 2.4 · 0609B · `[cj: *morte*; read *more*, "after the manner"]` — the one `[cj:]`

*Samaria **morte** civitatum habebat terram interius ipsis muris pene aequalem.* *morte* is a
perfectly good ablative and renders in place ("by the death of cities"), so `[sic:]` cannot reach
it — and the English it yields asserts something the passage does not: the sentence is describing
how Samaria's ground was banked up **after the manner of cities** (*more*) as a support against
the ram. This is Pattern 18's founding shape exactly. The gloss is **additive**: Migne's word keeps
its English and the conjecture stands beside it.

### 2.5 · 0605D · *In Thersa regna* — a real word that will not construe. RENDERED AS PRINTED.

Two things are wrong on this line and neither was patched.

1. **The verse number.** Migne prints `VERS. 6.--`, but 3 Reg. 16:6 says only *sepultusque est in
   Thersa*; the gloss (*Sex annos fecit in Thersa*) expounds **16:23**, *in Thersa regnavit sex
   annis*, which is Amri, not Baasa. **Migne's ordering and numbering are his and are reproduced
   as printed** — never renumbered.
2. **The word.** *regna* is a real, well-formed Latin word (imperative of *regno*, or the plural
   of *regnum*), and it occupies no slot the sentence has. Under the 2026-08-23 addendum — a real
   word that reads oddly is Migne's until a plate says otherwise, refuted 5 of 5 — **no marker was
   fired.** Rendered **"In Thersa reign."**, which is the imperative the letters give. The
   expected form is *regnavit*, and if a plate read shows it, this is a tei-patch and not an
   emendation.

⛔ Note this is deliberately treated differently from §2.3: *vides* has **no** slot after a
preposition; *regna* stands in a bare lemma with no governing structure at all, so "carried
untranslated" would be a stronger claim than the evidence supports.

### 2.6 · Verse numbers that do not match the verse glossed — all reproduced as printed

- **0605D** `VERS. 6.--` on a gloss of 16:23 (§2.5).
- **0606D** `VERS. 19.--` on *Tulitque Elias*, which is **17:23** (*Tulitque Elias puerum, et
  deposuit eum … et tradidit matri suae*); 17:19 has *Tulitque **eum** de sinu ejus*. The gloss
  ("Elias took the boy and restored him to his mother") follows 17:23. Not renumbered; the lemma
  is expanded from 17:23, which is the verse it actually opens.
- **0610B** `VERS. 43.--` *Et furibundus* is 20:43 and is correct; but the gloss attached to it
  ("Achab commanded the prophet to be kept shut up … confounded by the words of Micheas") is the
  matter of **22:26–27**, and *Michaeas* does not appear in III Reg. before ch. 22. Likewise
  **0610A** `VERS. 38.-- *Abiit ergo*` is 20:38, where the prophet is unnamed, and the gloss names
  Micheas. This is the abridgment folding two chapters together. Reproduced; nothing moved.

### 2.7 · Real words that read oddly, rendered as printed, NO marker — the refuted-class discipline

Each was raised, weighed and left. None is a non-word; per addendum A the corpus argument loses.

- **0600D** ***Rivocorulam*** — "another stream which flows into the sea beside *Rivocorula*". The
  place is **Rhinocorura**, the town at the Brook of Egypt, and every other spelling in the
  tradition is closer to that. Migne's form is well-formed as a Latin proper name and is
  transliterated as printed.
- **0600C** *Quid est quod Salomon **aedificavit** medium atrii* — 3 Reg. 8:64 has
  ***sanctificavit** rex medium atrii*, and Migne's own next paragraph reads *medium atrii sub
  divo **sanctificavit***. This is gloss prose, not a quoted lemma, so Pattern 14 does not reach
  it. Rendered "built".
- **0604B** ***Gaddo*** for the seer's name (2 Par. 12:15 *Addo*). Rendered as printed.
- **0607B** *Abdias **princeps exercitus Israel*** — 3 Reg. 18:3 makes him *dispensatorem domus
  suae*, the steward. Gloss prose; rendered as printed.
- **0608D** *Elias enim interpretatur **Dominus Deus*** — the same work interprets Elias as *Deus
  meus Dominus* at 0606B. **The work contradicts itself two columns apart and both stand**; that
  is a fact about this recension, and harmonizing them inside the English would conceal it.
- **0609B** *ducenta millia et triginta duo* — 3 Reg. 20:15 counts *ducentorum triginta duorum*,
  232. Rendered **"two hundred thousand and thirty-two"**, the printed words, not 232.
- **0610A** *Si prosperitate concessa Deo gratiae **agentur*** — future passive where *agantur*
  is wanted. Real form, real slot; rendered "thanks shall be rendered to God".
- **0610C** *Si Dominus est, inquit eis, **in Deum*** — will not construe (*vobis in Deum*, "God
  to you", is the obvious want). Rendered literally, "If the Lord is, saith he to them, for God".
  No conjecture entered.
- **0610D** *voluntas electorum spirituum divinae **deseruit** potestati* — the **dative**
  *potestati* settles it: *desero* takes the accusative, so the verb is *deservio*, "is subject
  to". Rendered "has been devoted to the divine power", keeping the perfect against the parallel
  present *obtemperat*. This is a reading, not a repair, and it is decided by the case ending.

### 2.8 · Grammatical mismatches with no English exponent — Pattern 9 family, no marker

- **0601B** *palma, quae Graece **vocantur** Palmira* — singular noun, plural verb. English
  carries it visibly ("the palm, which in Greek are called Palmira") and nothing is concealed.
- **0601A/0600D** *Qui non fuerat de filiis Israel, fecit Pacificus noster **tributarios*** —
  singular relative, plural predicate. Carried: "He who had not been … made tributaries."
- **0603D** *quare **vitulus** fecerit* — nominative singular where the object of *fecerit* is
  wanted, and against the lemma's own *Fecit **duos***. **Marker considered and declined.** English
  nouns have no case exponent, so this sits with *manum meum* (8715) and the gender class rather
  than with 11632's number disagreement; and the ship test forbids an unread `[sic:]`. Rendered
  "Why Jeroboam made a calf".
- **0608C** *nec **discipulis** ejus Elisaeus unxit* — dative/ablative plural where the nominative
  singular *discipulus* is wanted. Same treatment: "nor Eliseus his disciple, anointed".
- **0604B** *sicque regi persuadere **possent**, sicut **fecit*** — plural then singular in one
  clause. Rendered "they might be able to persuade the king, as he did".

### 2.9 · Sentences that do not construe, rendered as closely as the printed words allow

- **0600A (opening, VERS. 6)** *Illata in sancta sanctorum arca assumptam Christi humanitatem
  intra velum regiae coelestis inductam.* — **no finite verb at all**; the abridgment has removed
  the *designat/significat* that *designant* supplies in the sentence before. Rendered as the
  verbless apposition it is, and **no verb was supplied**: "The ark brought into the holy of
  holies, the assumed humanity of Christ led within the veil of the heavenly court."
- **0602A (opening of CAPUT X)** *Haec regina venturam Ecclesiam de gentibus, etc.* — the same
  shape, an accusative with the verb abridged away. Rendered as apposition, verb not supplied.
  ⚑ This is the *ferias* trap the brief names: the tail of an abridgment is parsed as strictly as
  ordinary prose, and a missing verb is reported, not invented.
- **0600C** *quia illud angustum erat, et **capere non poterat*** — the object (3 Reg. 8:64's
  *holocaustum, et sacrificium*) is not printed. Rendered "and was not able to contain", with the
  gap left open rather than filled with a supplied "them".
- **0605B** *Sed nulla virtus illic est, ubi (**licet** cum multis millibus) **licet** unus pugnat
  injuste.* — *licet* twice, the second resuming after the parenthesis. **Not marked as
  dittography**: the two are not an eye-skip of one run, they are a resumption across an
  interrupting parenthesis, and Pattern 11 wraps only an intrusive copy. Both rendered.
- **0605B** *quae scilicet apud nos est, **servantes** a principio leges et verum Deum venerantes*
  — nominative plural participles with no subject to agree with. Carried as loose participles.
- **0605B** *Nam **quanta** nullo bello refertur caedes fuisse commissa, neque Graecorum, neque
  Barbarorum, mirabilem perceperunt, Deo conferente, victoriam.* — the *quanta* clause has no
  main-clause hook. Rendered in the order printed, with both negations on their printed hosts
  (*nullo bello*, *neque … neque*), and left rough.
- **0610A** *…alio statim vincere conatur* — **the sentence stops with no terminal mark.** Pattern
  8: no full stop supplied. The English stops too.

### 2.10 · `VERS. 28--.` at 0601D — the dash and period transposed

Every other verse address in this work prints `VERS. n.--`. This one prints `VERS. 28--.` The
verse address passes through verbatim under convention 1, so the transposition rides as printed.
Not a candidate for normalization: Pattern 9's section-label licence covers a translated
structural head, and this address is not translated at all.

### 2.11 · 0602C · *ferculum* — why "carriage" and not "litter"

*Thronus vel solium … quae in canticis **ferculum** appellatur, **eo quod residentes ferat**, vel
de loco ad locum circum**fer**at.* The gloss **is** the etymology: *ferculum* from *ferre*. An
English word sharing no root with "bear/carry" would make the gloss explain nothing (the
*murenulae* / *stylus* precedent). "Litter" was rejected on exactly that ground; **"carriage"**
keeps the derivation visible in English — *carriage … carries … carries about* — with no italic
Latin added, so span parity is untouched.

### 2.12 · 0603D · *divina Scriptura* rendered "divine Scripture"

Pattern 3 lists *divina Scriptura* among the forms promoted to "Holy Scripture". I used **"divine
Scripture"** instead, which is attested in the shipped corpus (11064) and renders the word Migne
prints; *sanctae Scripturae* at 0602A **is** rendered "Holy Scripture", so the promotion is
applied where the Latin says *sancta*. Flagged because it is a deliberate narrowing of a pattern,
not an oversight.

### 2.13 · Unexpressed subjects supplied — named, with what fixes each

The dominant defect class. Every "he/she/it/they" I supplied that Migne does not print:

- **0600A** *nunc dicitur posuisse* → **Solomon**, from *Salomon addidit* two words earlier.
- **0600C** *medium atrii sub divo sanctificavit* … *quod fecerat* → **Solomon**, from the lemma
  *In die* (8:64, *sanctificavit rex*) and from 2 Par. 4:1's twenty-cubit altar.
- **0600D** *designat* → **the sacred writer**, the subject Rabanus is expounding throughout this
  block; "he designates".
- **0600B** *quibus … Dominus de se etiam aperta narravit* → **the priests**, from *sacerdotes*
  earlier in the same sentence.
- **0603B–C** *constituit ducibus* → **the king**; *egreditur*, *suadebat* → **Jeroboam**. Both
  fixed by the named subjects standing in the same sentence.
- **0604B** *excogitavit* → **the false prophet**; *transgrederetur* → **the man of God**;
  *illius iram* → **God's**. Fixed by *Iste pseudopropheta* and *virum Dei* in the clause.
- **0605D** *Sex annos fecit* and *nominavit eam* → **Amri**, the subject of 16:23, which is the
  verse the gloss expounds (§2.5); rendered "he", not named, because Migne does not name him.
- **0606A** *restauravit* → **Hiel**, from the lemma *Aedificavit Hiel*; *destructa … anathematizata*
  agree with **Jericho**, feminine, not with Hiel.
- **0605D** *ab eo Samaria appellatur* → **from him**, i.e. **Semer**, named in the previous
  clause — not "from it" (the city), which would make the etymology circular.
- **0610A** *Si viderint coelestia desiderare* → the accusative subject is unexpressed; supplied
  as **them**, i.e. the **animas** of the preceding sentence.

⚑ **Where two readings both construe I have said so rather than choosing silently:** at **0601A**
*quas non potuerunt filii Israel delere* the antecedent of *quas* may be *civitates* or
*reliquiis* — both are feminine and both construe. Rendered "which the children of Israel could
not destroy", which keeps the ambiguity that the Latin keeps. 3 Reg. 9:21 has masculine *quos*
(the sons), so neither Latin reading is the Vulgate's.

---

## §3 · READ CLEAN — sections examined and found sound

- **Negation fidelity.** Every printed negative in the five chunks was located, its **host word**
  named, and the negative checked to be on that host in the English: 17 in 0006, 15 in 0007, 22
  in 0008, 16 in 0009, 7 in 0010. **Seven sites fell in test 2a's trigger population** (a negative
  by a verb with a quantifier or correlative nearby) and each was decided from the sentence's
  structure, not from what read well:
  - 0601B *qui **non ancillae** filii sunt, **sed liberae*** → "sons **not of the bondwoman** but
    of the free", **not** "who are not sons of the bondwoman". The *sed liberae* pivot proves the
    host is *ancillae*.
  - 0602B ***Non solum** quod petimus, **imo etiam** …* → "Not only what we ask, but even …"; the
    *non* is on *solum*, and *largitur* is affirmative.
  - 0603A *Non in persuasibilibus … verbis consistit, **sed** in ostensione* → the negative is on
    the phrase, shown by *sed in*.
  - 0605B *quae **vestrae** sunt impietatis et **non religionis** indicia* → "of your impiety and
    **not of religion**"; the host is *religionis*, against the *impietatis* contrast.
  - 0604A *Juvenes Scriptura **non semper** juxta aetatem appellat, **sed** juxta instabilitatem*
    → "does not always … but according to".
  - 0606C *quam Dominus **non frumenti, sed verbi** pane pascit* → "feeds **not with the bread of
    wheat** but of the word"; host *frumenti*.
  - 0608A/0608C *quibus **non sufficit simplex** pastus, **sed duplex*** and *dum **non solum se**
    remansisse cognosceret* → both resolved onto the quantifier, not the verb.
- **Punctuation, band by band.** Colons, semicolons, question marks, exclamation marks and
  guillemets compared **within each of the 44 column bands** in this range, never by total. Zero
  mismatched bands at file time. **Three supplied semicolons were caught this
  way and reverted to Migne's commas** (0600A, 0600C, 0608C); two more were caught while drafting
  (0605C, 0609A). All **nine** question marks Migne prints are preserved (1 · 2 · 4 · 1 · 1 across
  the five chunks) and all nine are **direct** questions, so **8b did not fire
  anywhere in this range** — there is no indirect *Quaeritur* here.
- **Column anchors.** 44 anchors (8 · 9 · 12 · 8 · 7), verbatim, in order, and each checked against **the word it
  stands beside in the Latin**, not merely for presence. Two are deliberate mid-construction
  splits matching Migne: 0601B (*regio eo* | *quod nusquam*) and 0602A (*provocata* | *est*).
  0601D stands before *aureos* in both twins ("because it has [0601D] golden mountains").
- **`[sic:]` swallowing test.** Both in-text markers stripped and the sentences read aloud: no
  stranded article or preposition on punctuation, no doubled mark, verb and object intact in both.
- **Marker parity.** 83 `[n:]`, same count and order, contents untranslated, Migne's own internal
  spacing and his lowercase `(Id.)` at 0602B kept as he sets them.
- **The fourth test.** Every paragraph re-read against its Latin asking only *does it assert what
  he asserts* — which is what produced §2.9 (three sentences that assert nothing, because the
  abridgment removed the verb) and §2.11.

## §4 · Candidates rejected, with the reason

- **Pattern 4 `[f:]`** — not applicable. This is a lemma-and-gloss commentary, not a florilegium
  (runbook false positive 4). No tag was placed.
- **Column-band arithmetic** — not reported (false positive 1). No text breaks mid-word or
  mid-construction across any anchor in this range.
- **Em-dashes** — none used, none reported.
- **`[nt:]`** — every note in this range is a citation siglum or a locator; none is editorial
  prose. Zero conversions.
- **`[ed:]`** — no demonstrated source loss. The brief warns that our archive.org copy of PL 113
  clips the left margin on some pages; **no word in this range is truncated at a column head**, so
  nothing was attributed to that cause and nothing was patched.
- **A `[var:]` on the etymologies** (§1c) — declined: onomastica are not scripture citations.
- **A `[sic:]` on *vitulus* (0603D) and *discipulis* (0608C)** — declined, §2.8.
- **A `[sic:]` on *regna* (0605D), *Rivocorulam* (0600D), *agentur* (0610A), *morte* (0609B as a
  `[sic:]` rather than a `[cj:]`)** — declined; all are real, well-formed words, and addendum A's
  10-for-10 split says the corpus argument loses against a plate we do not have.

---

## §Z · THE BLIND POLARITY READ (step 4a)

Run 2026-08-25 by a reader **fenced from this file**. All 11 chunks read against their Latin twins.
**Every printed negation in cols 0581A–0610D is present in the English and on the right word. Zero
polarity defects of the classic kind** — the same profile as every other book in this batch.

### Repaired, four sites

1. **0587C — agency inverted.** *Domus **quae** tabulata portant* became "The houses which the
   boardings bear." *quae* is nominative (an accusative referring to *domus* would be *quas*), so the
   houses bear the boardings. ⚑ **The column's own continuation is the control** and our English
   renders it correctly nine lines later: *non muris templi infixa, sed juxta muros trabibus …
   superposita.* Repaired.
2. **0592A — a referent inverted for the reader.** *Iste ingressum nostrum ad fidem, ille designat ad
   spem* was "The one … the other", which in English binds to the **nearest** antecedent — the
   entrance of the oracle — so the reader took faith to the oracle and hope to the temple, exactly
   backwards. *Iste* is the nearer, the entry into the present Church, just named. **The next sentence
   proves it**: *postes **hujus** introitus quadrangulati sunt propter quatuor Evangelii libros,
   quorum doctrina **in fide veritatis** erudimur.* Repaired to "This … that".
3. ⛔ **0610D — a silent repair that reversed the printed word.** *voluntas electorum spirituum
   divinae **deseruit** potestati* was rendered "has been devoted to the divine power" — which is the
   **emendation** *deservit*, printed with no marker at all. As Migne prints it the sentence says the
   elect spirits **deserted** the divine power, the opposite of the paragraph's claim that *omnis
   exercitus assistit Deo*. ⚑ The dative *potestati* is the argument: *desero* takes the accusative,
   *deservit* the dative. **This is the 7a specimen exactly — a repair hidden inside the translation,
   passing every automated check.** Now rendered "serves" **with `[cj: *deseruit*; read *deservit*]`**,
   so the reading is shown rather than smuggled.
4. **0610C — a supplied pronoun with the wrong referent.** "if **he** had had a good and pious
   shepherd, **he** would have overcome" — but the lemma is *Vidi universum Israelem dispersum*, and
   **Achab is the shepherd**, so as it stood Achab needed a shepherd and Achab won the battle. The one
   lacking a shepherd is the people. Repaired to "it".

### ⬜ NOT repaired — 0593C, and the reason is that a deliberate decision already stands there

The reader argues that *usque ad … **ulla** in parte declinemus* cannot be affirmative: *ulla* is
negative-polarity, the governing *ne* fell inside what the abridgment elides, and our page therefore
tells a reader that the apostolic *linea* exists **so that** we may stray.

**The argument is good and it is not being dismissed.** But three things stand against acting on it
unilaterally: the translating stint **considered this exact site and declined it deliberately**,
recording that the *ne* lies inside the elision; **the plate confirms the printed text** (Gallica
f297, read this session for an unrelated citation, prints *usque ad a recta via qua ad promissam
patriam gradimur, ulla in parte declinemus* with nothing lost by us); and **7a forbids supplying a
negative Migne does not print**, which is the rule that has protected this edition more often than
any other.

⚑ So the question is genuinely open, and it is a question about a **rule**, not a fact: does 7a's
prohibition reach a negative that the *abridgment formula* has swallowed, when the surviving word
(*ulla*) is itself negative-polarity? **That is Wilson's to rule.** Recorded here and in the resume
note; the text is unchanged meanwhile.

### 0599C · *deos suos* for Ps. 30:21's *eos* — the crux, settled 2026-08-26

**Migne prints** *Quia **deos suos** abscondit in abdito vultus sui a conturbatione hominum.*
**The English reads** "Because he hides his gods in the hidden place of his countenance from the
disturbance of men."

**The psalm reads otherwise.** Ps. 30:21 is *Abscondes **eos** in abscondito faciei tuae a
conturbatione hominum* — "Thou shalt hide them in the secret of thy face from the disturbance of
men." The glossator is paraphrasing throughout, not quoting: he turns the second person into the
third (*abscondes* → *abscondit*), *abscondito* into *abdito*, *faciei* into *vultus*. **Against
that, *deos* for *eos* is one letter further along the same road**, and it is impossible to say from
the page whether the letter is the glossator's, a copyist's, or the printer's.

**What was done, and why.** ⭐ **Rendered as printed, with no `[cj:]` and no `[sic:]`.** *deos* is a
perfectly good Latin word, and in this sentence it carries a live patristic sense: the saints, who
are the treasures of the house of the Lord, are called **gods by adoption** after Ps. 81:6 *Ego
dixi: Dii estis* — and the paragraph the sentence opens is precisely about the saints, many
treasures differing in merit within the one house. Pattern 18 fires only when the English **asserts
something false**; under that reading it does not, so the bar is not met and the printed word
stands.

⚠ **What a reader should know.** The sentence is not about idols. Read it with Ps. 81:6 in hand and
the "gods" are the saints of the next sentence; read it against Ps. 30:21 and the word is one letter
from *eos*, "them", which is the same people under a plainer name. **Both roads end at the saints**,
which is why the choice between them changes no doctrine and did not warrant a marker. **Not read at
the plate** — Gallica f300 was read this session for the *(II Cor. XV)* citation in the same column
and the crop was not extended to this line, so a second witness could still settle whose letter it
is.

### ⚠ The 24 lemma expansions — RAISED, AND NOT ACTED ON. See §Z2.

### §Z2 · THE 24 LEMMA EXPANSIONS — the finding, and why nothing was changed

The reader found **24 English lemmata carrying words the Latin twin does not print**, every added
word verbatim the Clementine continuation, and — this is the striking part — **all 24 in chunks
0006–0010 and none in 0000–0005.** That is a **stint boundary**, not scattered slips: the first
stint keeps bare lemmata scrupulously (*Aedificavit viginti.* → "He built twenty."; *Porro.* →
"Moreover."; *Ecce.* → "Behold."), and the practice changes at col. 0600A and does not change back.

⛔⛔ **The reader classed all 24 as conformation. On the settled conventions they are not, and acting
on that reading would have damaged the work.** The same finding was made on the sister book II
Paralipomenon in this session, acted on, **and withdrawn**:

- **Convention 3 (the Ruth pilot) licenses expanding a FRAGMENT** — a lemma whose governed word is
  missing — and renders it as the phrase it stands for rather than a word-for-word stump. Most of
  these 24 are exactly that: *Subter alas.* (wings of *what*), *Cumque.*, *Ducenta.* (two hundred
  *what*), *Sepelite.*, *Fecitque.*
- **The standing ruling on a work that treats the same bare lemma two ways is to EXPAND THE STUMP,
  NOT CONTRACT ITS TWIN.** So the half that should move is **the first stint's**, not the second's.
- ⛔ **The defect is never expansion or its absence — it is CONFORMATION**, following the familiar
  English Bible where Migne's plate diverges from it. Expanding a fragment per convention 3 is not
  conformation.

⚑ **What the sister book cost, written down because it is the reason this one was left alone.**
There, two numeral lemmata were contracted on this reading. Both were wrong and both were reverted:
*Centum.* and *Ducenti.* are **clips of two-word numerals** (2 Par 1:17 *equum centum quinquaginta*,
8:10 *ducenti quinquaginta*), so both are fragments. Worse, the contraction was justified on the
ground that Migne's gloss supplies the figure itself — *Qui sunt ter quinquageni* — and **that reading
was backwards**: *ter quinquageni* is **thrice fifty**, which is 150. The gloss was not withholding
the number, it was **confirming** it, and contracting the English left the lemma saying one hundred
above a gloss saying one hundred and fifty.

⭐ **The general lesson, and it applies to every blind read this edition runs: a reader's finding can
be right about the FACT and wrong about the RULE.** These 24 English lemmata really do print words the
Latin twin does not — that observation is correct, valuable, and was invisible to every other check.
What a fenced reader cannot supply is whether the convention licenses them.

⬜ **What is genuinely owed here is a ruling on scope, and it is Wilson's**: whether to expand the
first stint's stumps so the work is internally consistent, and how far convention 3 reaches when the
supplied word is a **proper name** rather than a generic slot-filler (the sister book I Paralipomenon
has *Her pater.* → "Her the father **of Lecha**", which is new lexical content). **Nothing has been
changed in either direction.** The count is the useful thing to carry forward: 24 sites here, 3 in
8964 against 4 identical shapes left bare, 5 in 8965.
