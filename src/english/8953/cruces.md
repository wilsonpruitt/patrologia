# *Glossa ordinaria*, **Liber II Regum** (PL 113, 0563A–0580D) — cruces and lemma collation

Translated 2026-08-23, one translator, 8 chunks (6,815 Latin words), on Opus.
`verify-english.mjs` clean: columns, notes and sections aligned, no duplicate paragraphs.

**Apparatus fired: 6 `[var:]` · 1 `[cj:]` · 0 `[sic:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]` ·
115 `[n:]`** (body count; the frontmatter `noteCount` fields sum to 111 — runbook false positive 3, count the body) (exact parity with the Latin twins, contents verbatim). Zero guillemets in
either language. Zero em-dashes in the English. Structure: CAPUT PRIMUM–CAPUT XXIV.

**Conventions.** Ruth (8968) §1 governs and nothing here re-opens it: `VERS. n.--` passes
through verbatim; the lemma is Englished; a fragmentary lemma is rendered as the phrase it
stands for; the attribution sigla ride as ordinary `[n: …]` notes with Latin unanglicized.
`*usque ad*` → `*as far as*` in its own italic span (8978/8970 precedent), **no verb ever
supplied to complete an abridgment**. Chapter heads follow **Ruth's shipped English forms** —
`CAPUT PRIMUM.` → `CHAPTER ONE.`, `CAPUT II.` → `CHAPTER II.` (Ruth ships the roman numeral,
not "CHAPTER TWO"; where the launch brief and Ruth's plate differ, the brief's own tiebreaker
is "match Ruth's shipped forms").

---

## §1 · MIGNE'S OWN IRREGULARITIES, REPRODUCED NOT TIDIED

- **0571D · `VERS. 15--`** — the only verse address in the work that lacks the period after
  the numeral (every other reads `VERS. n.--`). Reproduced exactly.
- **0566C · `…et sub Joab calcandus subditur`** — the sentence ends with **no full stop**.
  The English ends without one (Pattern 8: never supply).
- **0576C · `…id est Christum Filium Dei rediit`** — likewise, and it is also the last line of
  its chunk. No stop supplied.
- **0576D · `…Armoni scilicet et Miphiboseth`** — likewise. No stop supplied.
- **0576B · `cur non servas legem Israelitis, quae olim servata est alienigenis.`** — Migne
  closes a direct question with a **full stop**, four words after closing the previous one with
  `?`. Both marks ride as printed.
- **0569A, 0570B, 0570C, 0573C, 0574C, 0579C, 0580D** — the anchor is set hard against the
  verse address with no space (`[0569A]VERS. 16.--`). Reproduced without a space.
- **0564C · `(qui interpretatur *patris lucerna* )`** — Migne's space before the closing
  parenthesis is kept.
- **0576A · `[n: (HIERON., quaest. Hebr. in Reg. )]`** — the note's own internal spacing is
  kept verbatim.
- **0565D · `*Duo autem viri. (RAB. in lib. Reg., [0565D] tom. II.)*`** — this siglum is **not**
  an `[n: …]` note; Migne sets it inside the italic lemma span as running text, and a column
  anchor falls inside it. Carried verbatim, unanglicized, anchor in place.

## §2 · MARKERS FIRED, AND WHY

### 2.1 `[cj:]` — one, at 0563B

> *…quomodo Saul recedens a timore Domini **per obedientiam** periit.*

Rendered "perished through **obedience**", with
`[cj: *obedientiam*; read *inobedientiam*, "disobedience"]`.

**Why it clears Pattern 18's bar.** The printed word is a perfectly good Latin noun, so
Pattern 12 has nothing to wrap and Pattern 7 renders it — and the English then asserts the
opposite of the author's own argument. **The control is in this work, eight lines below, in
the same voice**: 0563C reads *o Saul, **inobedientia** tua quasi idololatria in excelsis
reputata est*, and 0563B's own preceding clause has Saul *recedens a timore Domini*. Saul
perishing "through obedience" is the thing the passage is written to deny.

**The rival, and why it lost.** The alternative was to leave it as a crux only. Declined: 18a's
extension covers the case where the faithful English *asserts something false*, and this one
does, on a reading page, with no marker anywhere to warn a reader. The gloss is **additive** —
Migne's word keeps its English and the conjecture stands beside it — and the verbatim-in-the-
Latin-twin guard is satisfied by *obedientiam*, exactly as 7561 @0648 is satisfied by *solum*.

### 2.2 `[var:]` — six, all resting on `sources/vulgate/clementine-flat.txt`

| col | Migne prints | Clementine | why it fired |
|---|---|---|---|
| 0565C | *Qui gladio percutit gladio peribit* (Matt. XXVI) | Matt 26:52 *omnes enim, qui acceperint gladium, gladio peribunt* | different verb and different subject — "he that **striketh** with the sword" for "all that **take** the sword". Not a clip: the words are substituted, and the gloss builds on the striking (*Haeretici gladio oris perfodiunt*). |
| 0568A | lemma *Cumque intrasset **arcam**.* | 2 Rg 6:16 *Cumque intrasset **arca** Domini in civitatem David* | accusative for nominative turns the ark from subject into object — "when **he** had entered the ark". The gloss expounds the ark's *introitum*, so the divergence is visible and material. |
| 0570D | lemma *rasitque **barbam**,* | 2 Rg 10:4 *rasitque **dimidiam partem barbae eorum*** | not clipping — a substitution mid-lemma. The half is what the gloss then expounds (*Radit ergo Hanon barbam **dimidiam***), so the lemma as printed drops the word its own exposition turns on. |
| 0575A | *Primus veni hodie de omni **tribu** Joseph.* | 2 Rg 19:20 *primus veni de omni **domo** Joseph* | **the gloss's whole argument is the tribe** — *Ipse Semei ex **tribu** Ephraim*, *quia in **tribu** Joseph habitavit*. Material on its face. |
| 0577B | *cui constituta est **scala** Christo Dei Jacob* | 2 Rg 23:1 *cui **constitutum** est **de christo** Dei Jacob* | a substantive (*scala*) that the received text does not contain at all, plus dative *Christo* for *de christo*. |
| 0580A | *de Juda **quadraginta** septuaginta millia* | 1 Par 21:5 *de Juda autem **quadringenta** septuaginta millia* | a number. As printed the phrase does not even count ("forty seventy thousand"); 470,000 is the received figure and the passage is an argument about census totals. |

**Not fired, and the reasoning is the point:** every `[var:]` above is a claim about the
*Clementine*, cited by book chapter:verse from the file on disk. Where the divergence is a
single letter, a tense, an enclitic, a connective, or a name-spelling, **no marker** — see §3.
`sources/vulgate/README.md` warns that this copy is not trustworthy to single-letter precision,
and a `[var:]` is a public claim.

### 2.3 `[sic:]` — NONE, deliberately

Three non-word candidates were found (§4.1). All three are raised as **plate-read candidates**
and none carries a marker, because the 2026-08-23 addendum measured non-words at **10 for 10 as
OUR digitization's corruption, not Migne's** — and a `[sic:]` publicly blames Migne's plate.
The ship test governs: the crux is always safe, the marker is a claim.

---

## §3 · THE LEMMA COLLATION — all 275 italic spans walked

Every span in `data/briefs/8953-lemmata.txt` was read against the Clementine. **The agreements
are listed as well as the divergences**, because a findings-only list cannot be told from a list
by a reader who never looked.

### 3.1 Checked and AGREEING with the Clementine exactly (clip at either end excepted)

**CAPUT I–IV (0563A–0565D):** *Apparuit homo veniens de castris Saul,* (1:2, opening clipped
from *In die autem tertia*) · *Accedens,* (1:15) · *Filios.* · *Arcum.* · *In libro.* ·
*scriptum est.* · *Considera, Israel.* (all 1:18) · *Geth.* (1:20) · *Montes Gelboe,* ·
*Montes Gelboe, nec ros,* (1:21) · *A sanguine interfectorum.* · *Sagitta.* (1:22) · *Igitur
post.* (2:1) · *Veneruntque.* (2:4) · *Dixitque.* (2:5) · *Isboseth.* · *Circumduxit.* (2:8) ·
*Et fuit.* (2:11) · *Egressus.* (2:12) · *Porro Asael cursor velocissimus fuit quasi unus de
capreis.* (2:18, clipped before *quae morantur in silvis*) · *An ignoras quod periculosa sit
desperatio?* (2:26, **question mark included, as Migne and the Clementine both print it**) ·
*Facta est ergo.* (3:1) · *Natique.* (3:2) · *De Egla.* (3:5) · *Sermonem.* (3:17) · *Fluxum
seminis.* · *Tenens fusum.* · *Cadens.* (3:29) · *Delicatus.* (3:39) · *Duo autem viri.* (4:2) ·
*Et ostiaria.* (4:5) · *transfigurat se in angelum lucis* (2 Cor 11:14).

**CAPUT V–VI (0566A–0568C):** *Et venerunt.* (5:1) · *Os tuum et caro tua sumus:* (5:1, clipped
before *Ecce nos*) · *Seniores.* · *Unxeruntque.* (5:3) · *Et quadraginta.* (5:4) · *Caecos et
claudos.* (5:6) · *Cepit autem.* (5:7) · *Domatum.* · *Fistulas.* (5:8) · *Et aedificavit.*
(5:9) · *Misit quoque.* (5:11) · *Natique sunt.* (5:13) · *Baal Pharasim.* (5:20) · *Pyrorum.*
(5:23) · *In cacumine.* (5:24) · *Congregavit.* (6:1) · *Sedentis.* (6:2) · *Qui mortuus.*
(6:7) · *Tribus mensibus.* (6:11) · *In organis.* (6:5, *in omnibus lignis fabrefactis* context)
· *Egressa Michol filia Saul in occursum David,* (6:20) · *Gloriosus.* · *Et nudatus.* (6:20) ·
*Factus est in pace locus ejus,* (Ps 75:3, clipped before *Et*) · *Mihi autem absit gloriari
nisi in cruce Domini* (Gal 6:14, clipped before *nostri Jesu Christi*).

**CAPUT VII–X (0568D–0571A):** *Nunquid.* (7:5) · *Et ponam locum.* (7:10) · *Et fidelis.*
(7:16) · *Et sedit coram.* (7:18) · *Lex Adam.* (7:19) · *Quae est.* · *Ex Aegypto.* (7:23) ·
*Invenit servus.* (7:27) · *Frenum.* ×2 (8:1) · *Coaequans.* (8:2) · *Sanctificavit rex.*
(8:11) · *Caesis.* (8:13) · *A commentariis.* (8:16) · *Sacerdotes.* (8:17) · *Et dixit David,*
(9:1) · *Factum est autem post haec, ut moreretur rex filiorum Ammon,* (10:1, **verbatim**) ·
*Faciam,* (10:2) · *Dominus celavit a me, et non indicavit mihi* (4 Rg 4:27, **verbatim**) ·
*Constitui te Deum Pharaonis* (Ex 7:1, clipped before *Ecce*) · *et sorte divisit eis terram in
funiculo distributionis* (**Ps 77:54**, verbatim; Migne's `(Psal. LXXVII)` is right).

**CAPUT XI–XII (0571B–0573C):** *Factum est autem vertente anno, eo tempore quo,* (11:1) · *Dum
haec.* (11:2) · *Ponite Uriam,* (11:15) · *Dixitque Nathan ad David,* (12:13) · *Misitque Joab
nuntios,* (12:27) · *Urbs aquarum,* (12:27) · *Et tulit,* (12:30) · *Solliciti servare unitatem
spiritus in vinculo pacis* (Eph 4:3, verbatim but for lower-case *spiritus*) · *In sole posuit
tabernaculum suum* (Ps 18:6, verbatim).

**CAPUT XIII–XX (0573D–0576C):** *Sorbitiunculas.* (13:6) · *Oppressit.* (13:14) · *Et exosam
eam habuit,* (13:15) · *Tholomai.* (13:37) · *Cessavitque.* (13:39) · *Et ancillae,* (14:6) ·
*In me, Domine mi.* (14:9, clipped before *rex*) · *Igitur post.* (15:1) · *Post quadraginta
autem annos.* (15:7) · *Et deposuerunt arcam,* (15:24) · *Sadoc.* (15:24) · *Chusai.* ×3
(15:32) · *Quid mihi?* ×2 (16:10) · *Vadam et amputabo.* (16:9) · *Dimittite.* (16:10) · *Semei
autem.* (16:13) · *Achitophel.* ×2 (16:15) · *Et fortissimus.* · *Scit enim.* (17:10) ·
*Absalom.* (17:14) · *Accidit autem ut occurreret Absalom servis David sedens mulo.* (18:9, the
Clementine's comma before *sedens* dropped) · *Quid mihi.* (19:22) · *Illotis.* (19:24) · *Tu et
siba.* (19:29) · *Est autem.* (19:37) · *Et tenuit,* (20:9) · *Nonne.* ×2 (20:19) · *Qui
abscissum.* (20:22) · *Et insidiis suis capientur iniqui* (**Prov 11:6, verbatim**).

**CAPUT XXI–XXII (0576D–0577A):** *Facta est.* (21:1) · *Tulit itaque rex duos.* (21:8) ·
*Filios Michol filiae,* (21:8) · *Gob.* (21:18) · *Tertium.* (21:19) · *Quartum,* (21:20) ·
*Bethlehemites,* (21:19) · *Locutus est,* (22:1).

**CAPUT XXIII (0577B–0579D):** *Egregius.* (23:1) · *In timore.* (23:3) · *Nec est.* (23:5) ·
*Et si quis.* (23:7) · *Fortium.* · *Ipse.* · *Tenerrimus ligni.* (23:8) · *Semma filius.* ·
*Age de,* · *Arari.* (23:11) · *Stetit.* (23:12) · *Descenderant tres.* (23:13) · *Abisai quoque
frater Joab filius Sarviae,* (23:18, verbatim) · *Sed libavit.* (23:16) · *Tres primos.* (23:19)
· *Ipse percussit* (23:20) · *In media.* (23:20) · *Virum Aegyptium.* · *Dignum.* · *Hastam.*
(23:21) · *Qui erant.* (23:23) · *Urias.* (23:39) · *Et addidit furor Domini,* (24:1) · *Dei
aedificatio estis.* (1 Cor 3:9, **verbatim**) · *Lavabis me,* · *et super nivem dealbabor,*
(Ps 50:9, **verbatim**) · *diebus nivis.* (23:20).

**CAPUT XXIV (0580A–0580D):** *Percussit autem,* (24:10) · *Sermo Domini.* (24:11) · *Aut.*
(24:13) · *Erat autem.* (24:16) · *Areuna.* (24:18) · *Et obtulit holocausta.* (24:25) ·
*Sacrificium laudis honorificabit me,* (Ps 49:23, **verbatim**) · *Sacrificium Deo spiritus
contribulatus,* (Ps 50:19, **verbatim**) · *Haec est domus Dei,* (1 Par 22:1).

### 3.2 DIVERGENT but taking no marker — every one named, with the reason

- **0563A · *Qui enim fodit foveam, **incidit** in eam*** (Prov XXVI). Clementine Prov 26:27
  *Qui fodit foveam **incidet** in eam*. Two differences: an added connective *enim*, and
  present for future. **No marker**: the connective is the gloss's own stitching, and the
  tense turns on a single letter, which `sources/vulgate/README.md` says this copy should not
  be trusted to adjudicate. Rendered "falleth into it", present, as printed. The same
  quotation recurs at **0575C** in the same form and is rendered identically.
- **0563A · *Os quod mentitur occidit animam*** (Sap I). Sap 1:11 has *os **autem** quod…*.
  Clipping at the head of a quotation. Not a divergence.
- **0565B · *Igitur Michol filiae Saul non est natus filius, **usque ad** diem mortis suae***
  (2 Rg 6:23 *usque **in** diem*). ⚑ **This `usque ad` is the verse's own words, not the
  abridgment formula** — hazard D of the brief, and it is why the span is not italicised as
  `*usque ad*` on its own. A preposition swap with identical sense; no marker.
- **0565D · *Erat autem **Jonathae filius** pedibus debilis*** (2 Rg 4:4 *Erat autem **Jonathae
  filio Saul filius** debilis pedibus*). Migne drops *Saul*, turns the dative into a genitive
  and reverses *debilis pedibus*. The assertion is unchanged ("Jonathan's son was weak in his
  feet"); no marker.
- **0566A · *In Hierusalem.*** — Migne's spelling of the lemma against the Clementine's
  *Jerusalem*. Orthography, and Migne uses both forms in this work (*Hierusalem* at 0566B and
  0574C, *Jerusalem* everywhere else). Kept as printed at each site.
- **0567C · *Nisi circumcidamini secundum morem Moysi, non potestis **salvi fieri**.***
  Act 15:1 has *non potestis **salvari***. A periphrasis with the identical sense and **no
  English exponent** — both render "you cannot be saved". Recorded here rather than marked,
  and the English is not contorted to make a Latin-internal difference visible.
- **0569C · *Percussit David Philisthiim, et humiliavit eos, et tulit Geth et filias ejus de
  manu **eorum****,* against 1 Par 18:1 *ut **percuteret**…**humiliaret**…**tolleret**…de manu
  **Philisthiim***. The mood shift follows from clipping the governing *ut*; *eorum* is a
  pronoun for the noun it replaces, same referent. No marker.
- **0570C · *Hic ne ingredietur domum meam?*** against 1 Rg 21:15 *hiccine ingredietur domum
  meam?* ⚠ **A negation trap, and it is not a negation.** Migne's *ne* is the interrogative
  enclitic detached from *hiccine*, not the negative particle: rendered "**Shall this man
  enter my house?**", with no negative anywhere in the English. Reading it as *non* would
  invent a negative the plate does not carry and reverse Achis's taunt. No marker: the
  divergence is one orthographic split of a single word, which is exactly the class the README
  says not to adjudicate from this file. The tail *Abiit inde David et fugit in speluncam
  Odollam* is 1 Rg 22:1 with *inde David* for *ergo David inde* — same class.
- **0571B · *fons aquae salientis in vitam aeternam, quam qui biberit non sitiet in aeternum***
  (Joan IV). A **conflation of John 4:14 with 4:13**, both printed accurately, joined by
  *quam*. Same family as the *usque ad* abridgment (8970 precedent: an abridgment is not a
  variant). No marker.
- **0572C · *Si crederetis Mosi…*** — John 5:46 has *Si **enim** crederetis **Moysi***. A
  dropped connective and a name-spelling.
- **0573A · *Dominus transtulit peccatum tuum,*** — 2 Rg 12:13 has *Dominus **quoque**
  transtulit*. Dropped particle.
- **0573A · *quia multi **venient ab Oriente et Occidente**…*** — Matt 8:11 reads *multi **ab
  oriente et occidente venient**, et recumbent cum Abraham, **et** Isaac, **et** Jacob*. Word
  order and two dropped *et*. Free quotation, nothing asserted differently.
- **0573C · *Tulit David coronam **Melchon**…*** — 1 Par 20:2 *Tulit **autem** David coronam
  **Melchom***. Dropped particle, name spelling. The gloss then argues *Melchon* is not a
  proper name at all, so the form is load-bearing for the gloss and is kept exactly.
- **0576A · *Dixi, Tu et Siba dividite **agrum**.*** — Migne labels this **In Hebraeo**, not as
  a Vulgate quotation (2 Rg 19:29 has *possessiones*). Pattern 14 does not reach a reported
  Hebrew reading; the same holds for *cessavit rex exire post Absalom* (0573D), *An ignoras
  quod amarus erit finis…* (0564D), *Traduxit eum in Mahanaiim* (0564D), *Fortissimus ipse
  cujus est cor quasi leo pavore solvetur* (0575B), *infectis* (0575D) and *Ecce servus tuus*
  (0575D). **Seven reported-Hebrew readings, none marked, all rendered as printed.**
- **0576A · *usque ad: Ephraim et Manasses **tanquam** Ruben et Simeon **erunt** mihi.***
  Gen 48:5 reads *sicut Ruben et Simeon **reputabuntur** mihi*. Two synonym swaps inside an
  abridgment tail, and *erunt mihi* echoes the same verse's own *mei erunt*. No marker.
- **0576D · *Vana salus **hominum**. In Deo faciemus virtutem, et ipse ad nihilum **reducit**
  tribulantes nos*** cited `(Psal. CVII)`. ⚑ **The words are Ps 59:13–14, not Ps 107** — Ps
  107:14 ends *deducet **inimicos nostros***, while *tribulantes nos* occurs only at Ps 59:14.
  Against its real source the divergences are *hominum* for *hominis* and *reducit* for
  *deducet*. **No `[var:]`**: measured against the verse Migne actually quotes, what is left is
  a number and a tense. The wrong reference is a citation misprint and belongs in
  `data/citation-corrections.json` at index time, never in the running text (Ruth precedent).
- **0575C · `[n: (Prov. XI; XXV)]`** on *Qui enim fodit foveam…Et insidiis suis capientur
  iniqui*. The first half is Prov **26**:27, the second Prov 11:6. Same class: citation
  repair, not text repair. Left as printed.
- **0577B · *Haec sunt autem.*** — 2 Rg 23:1 reads *Haec **autem sunt** verba David novissima*.
  Word order inside a two-word lemma; and **0577C *Haec sunt nomina.*** adds *sunt* to 23:8's
  *Haec nomina fortium David*. Neither changes an assertion.
- **0577C · *Usque ad tres primos non **pervenit**.*** (roman, not italic) — 2 Rg 23:19 has
  *non **pervenerat***. ⚑ Another **`usque ad` look-alike**: these are the verse's own words
  and are rendered as ordinary prose, not as the abridgment formula. Tense only; no marker.
  The same holds for *usque ad excellentiam divinae Trinitatis non attingunt* (0577C) and
  *Praecidit tunicas usque ad inguina* (0570D). **48 occurrences of `usque ad` in the work;
  four are not the formula, and all four were decided from what stands on either side.**
- **0577C · *Quis enim in nubibus aequabitur Domino in filiis Dei?*** (roman) — Ps 88:7 reads
  *Quoniam quis in nubibus aequabitur Domino; **similis erit Deo** in filiis Dei?* Migne drops
  the middle member. Abridgment family, no marker.
- **0579A · *Et Bana.*** — 2 Rg 23:20 has *Et **Banaias** filius Jojadae*, and the gloss below
  spells *Banaias* in full four times. The lemma prints the shortened form with a stop, which
  reads as Migne's abbreviation of the name. **Rendered as printed ("*And Bana.*")** — the Ruth
  ruling on *Liam*/*Lia* governs: Migne's name-forms are kept everywhere. Logged, not marked.
- **0579A · *de Capseel,*** for 23:20 *de **Cabseel***; **0578B** *Semma filius Age* /
  *Semeiam filium Heli* / *Achimea* beside 0577D's *Achimaea*; **0579D** *Semmaa filius Agge*.
  Name-form variance inside one work. Each kept as printed at its own site — the Latin column
  carries the variance and normalizing it would be our hand.
- **0580B · *Porro angelus Domini stabat…proni in terram, juxta aream.*** — a **conflation of
  1 Par 21:15b with 21:16**, plus *vidit angelum Domini* for *vidit angelum Domini **stantem***
  and *juxta aream* carried down from 21:15 to close 21:16. Abridgment family; the dropped
  participle changes nothing. No marker.

### 3.3 The Hebrew-etymology italics — rendered as the Latin says, italics 1:1

These are **glossed Latin equivalents of Hebrew names, not scripture lemmata**, and 7a″ does
not apply to them; they are rendered as the Latin says and never conformed to a lexicon:
*conjugium* → wedlock (0564B) · *filius confusionis* → son of confusion · *patris lucerna* →
the father's lamp (0564C) · *castra* → camps (0564D) · *inimicorum divisio* → the enemies'
division (0567B, with the column anchor kept between the two words by using the possessive) ·
*flentium* → of the weepers (0567B) · *ex patre* → from the father · *sanguinis poculum* → the
cup of blood · *sublimis* / *humecta* → lofty / moist (0569D) · *interficientes* / *vivificantes*
→ slaying / making alive (0570B) · *pater pacis* / *patris pax* → father of peace / the father's
peace · *donans* → giving · *amaritudo* → bitterness (0573D) · *festinans* → hastening (0574D) ·
*ruina fratris* → the ruin of a brother (0575B) · *pax pacis* → the peace of peace (0575C) ·
*columbae domum* → the dove's house (0575C) · *suspirans* → sighing (0575D) · *lacus* → a pit
(0576D) · *occidentes* / *vivificantes* → killing / making alive (0579A) · *leo Dei* → the lion
of God (0579A) · *aedificator Dominus* → the Lord is builder (0579B) · *lumen nobis* → a light
to us (0580C) · *puteus septem* → a well of seven (0572A) · *lux mea Dei* → my light of God
(0572B).

⚠ Two pairs are deliberately **not** harmonized with each other: *interficientes/vivificantes*
(0570B) reads "slaying / making alive" while *occidentes/vivificantes* (0579A) reads "killing /
making alive" — Migne prints two different Latin words for the Cerethi, and one English for both
would erase that. **Within a work: one voice; but two words are two words.**

---

## §4 · CRUCES — the plate, and what was declined

### 4.1 Non-word candidates — three, PLATE READ **RUN AND SETTLED** (orchestrator, 2026-08-24)

⭐⭐ **VERDICTS FIRST — the plate was read the same session, so nothing below is outstanding.**
PL 113, archive.org `patrologiaecurs04migngoog` on disk, page map **re-calibrated** against the
printed corner numbers (p. 287 = cols 563/564) before any crop, and every crop taken deliberately
wider than its target word.

| site | our file | the plate at 450 dpi | verdict |
|---|---|---|---|
| **0563C** | *precaepit* | **præcepit** | **OURS** — patched, `data/tei-patches/8953.json` |
| **0567A** | *neminum* | **nominum** | **OURS** — patched, same file |
| **0569D** | *Maseth* | **Maseth** | **MIGNE'S** — refuted, kept as printed, no patch |

⚑ **The non-word rule holds and is now 12 for 12**: both non-words were ours, and the one form
that was a *name* rather than a non-word was Migne's — the same split the addendum records.
**Firing no `[sic:]` was right at all three sites**: two of them would have blamed Migne's plate
for Corpus Corporum's letters, and the third would have asserted a defect in a word the plate
prints exactly as we hold it.

⚑ **The TEI newline agreed at 0563C and disagreed at 0567A** (it falls after *precaepit*, exactly
where Migne breaks the line; at the second site it falls after *Samua,* while the plate breaks
*Sa-/mua*). Corroboration after the plate has spoken, never a substitute for it.

⚑ The work has been **re-chunked** so the patched Latin is what the page prints; `verify-english`
passes unchanged, chunk boundaries unmoved, and the English needed no edit at either site — it
had rendered both words for their evident sense ("commanded", "of the names"), which is what
7a⁗ requires and what left these two repairs free to be made in the Latin alone.

#### The candidates as the translator filed them

Per the 2026-08-23 addendum, a form that is no Latin word at all has been **our digitization's**
corruption 10 times out of 10, never Migne's. Each is rendered for its evident sense, logged
here, and carries **no `[sic:]`**, because that marker would blame Migne's plate for what is
probably Corpus Corporum's.

- **0563C · *precaepit*** for *praecepit* (`et ob hoc precaepit verus David`). A vowel
  transposition; *praecepit* stands correctly at 0563B, eleven lines above, in the same gloss.
  Rendered "commanded". **Non-word — worth the plate.**
- **0567A · *interpretationes **neminum**.*** for *nominum* (`quibus congruunt interpretationes
  neminum: Samua, audacia; …`), followed immediately by nine name-etymologies. *neminum* is no
  form of any Latin word. Rendered "the interpretations of the names". **Non-word — worth the
  plate.**
- **0578B · *Achimea*** beside 0577D's *Achimaea* for the same man in the same argument. This
  one is a **name-form**, not a non-word, and is kept as printed at both sites; named here only
  because it sits four words from the next candidate and §C of the addendum says to look at the
  neighbours when you look at anything.
  ⚑ **Deliberately NOT plate-read** (orchestrator): a name-form is the real-word class, where the
  plate has refuted the suspicion four times out of four and where corpus frequency — including
  the work's own inconsistency between the two spellings — is worthless by the addendum's own
  rule. It fires no marker, so shipping asserts nothing about it. The read stands available at
  p. 294 (cols 577/578) if it is ever wanted.

⭐ **Recording the negatives too, as the addendum asks.** Three real words that read oddly were
suspected and **refused a marker on the addendum's rule that a real word is Migne's until a
plate says otherwise**: *habeat* (0563A), *rectorum* (0566C), *donum* (0567B) — see 4.2.

### 4.2 Real words that read oddly — rendered as printed, `[cj:]` DECLINED, reasons given

- **0563A · *Diadema autem et armillam a patre commendatam **habeat**.*** A jussive/potential
  subjunctive in a run of perfect indicatives (*fuisse*, *fuit*). Rendered literally, "But let
  him have the diadem and the bracelet entrusted to him by his father." **Declined:** 18a's bar
  is that the English *asserts something false*; an odd mood asserts nothing false, and the
  ruling explicitly leaves mood and person anomalies that merely fail to construe declined
  (11064 @1021A, @1154C).
- **0566C · *Domatum.* Id est **rectorum**.*** *tectorum* ("of the roofs") is the obvious
  suspect for a gloss on *domata*, and the sentence that follows is flatly literal (lead pipes,
  aqueducts), which argues for it. **Declined, and the rival is named because it is strong:**
  the Glossa allegorizes exactly this way three lines later (*per Joab, id est, praedicatores*),
  so "the housetops, that is, the rulers" is a live reading in this author's own idiom, not a
  defect. A real word plus a good argument is precisely the combination the addendum measured
  as **refuted four times out of four**. Rendered "That is, of the rulers."
- **0567B · *Qui est gradientis, id est **donum** in carne advenientis*** — *sonum* is the
  obvious suspect, since *sonitus* stands twice in the same paragraph and the lemma is
  *sonitum gradientis* (5:24). **Declined:** "the gift of him coming in the flesh" is not a
  false claim in this author's mouth; and neither *donum* (neuter) nor *sonum* (masculine
  accusative) agrees with *Qui*, so the conjecture does not even repair the grammar. Rendered
  as printed.
- **0571C · *sic nonnunquam concepta intrinsecus compellit sibi extrinsecus **oculus**
  deservire.*** *oculum* is required by *compellit … deservire*; *oculus* leaves two
  nominatives. Rendered on the structure the sentence's own *sicut … sic* pivot demands —
  temptation drawn IN through the eyes, then temptation conceived within driving the eye
  outward — i.e. "compels the eye without to serve it". **Declined:** a case slip with no
  English exponent (Pattern 9 family); reading *oculus* as the subject would reverse Gregory's
  pivot, which is the one thing the structure forbids.
- **0572D · ***istae** per vitae innocentiam in prophetia exprimit culpam*** — feminine plural
  with a singular verb, for *iste* (Urias, answering *ille* = David). Rendered "and this man…".
  **Declined:** Pattern 9 — Latin grammatical gender and number agreement have no English
  exponent here, and the antecedent is fixed by the *ille … iste* pair.
- **0579C · *Neminem **moverat**…*** where *moveat* ("let it move no one") is expected.
  Rendered "It had moved no one that…". **Declined:** a tense, not a false assertion.

### 4.3 The one genuinely undecided passage

**0575B · *In Hebraeo: «Fortissimus ipse cujus est cor quasi leo pavore solvetur,» subaudis non
fortissimus iste David intelligitur. Unde: «Scit enim.»***

Two parses, and the whole sense turns on where *non* attaches:

1. **taken:** *subaudis "non"; fortissimus iste David intelligitur* — "supply 'not'; that most
   valiant one is understood to be David." Rendered `understand "not", that most valiant one is
   understood to be David.`
2. **rejected:** *subaudis: non fortissimus iste David intelligitur* — "understand: that most
   valiant one is **not** understood to be David."

**Why (2) lost.** (a) *subaudi(s)* takes the word to be supplied as its object throughout this
work — 0566D prints *subaudi murum* and *subaudi alium murum*, the same construction two columns
earlier, and that is a control of the same class. (b) The clause Migne quotes next, *Scit enim*
(2 Rg 17:10, *scit enim omnis populus Israel fortem esse patrem tuum*), **identifies David as the
valiant man**, which reading (2) denies four words earlier. Reading (1) makes the Hebrew say that
David, the valiant, will *not* melt with fear, and *Scit enim* is then adduced as its proof.

⚠ Recorded as a crux and not as a marker: the printed word is *non*, the English carries a
negative in the position the printed word occupies, and nothing here is a claim about the plate.
The straight quotes around "not" are ours (Pattern 6) and are the only added punctuation in the
work besides §5's one licensed colon.

### 4.4 Rough syntax rendered as it stands, nothing supplied

- **0566D · *Haereticorum ecclesias quae … gloriantur.*** An accusative with no governing verb —
  the head of a sentence the abridgment has decapitated. Rendered as the noun phrase it is; **no
  verb supplied** (the standing *usque ad* rule, and it applies to every abridged fragment).
- **0570D · *qui Ammonitarum, id est, malignorum spirituum, id est, rector populi moeroris…***
  A genitive chain with *rector* stranded in the nominative. Rendered clause for clause. No word
  supplied.
- **0575D · *ad explorandum factum Absalom et David renuntiandum decreti fugientes Absalom***
  — a gerundive chain the abridgment has cut. Rendered as it stands.
- **0576C · The chunk, and CAPUT XX, end mid-clause** (*id est Christum Filium Dei rediit*, no
  stop). Left mid-clause.
- **0564A · *ita illi fortitudinem dabant subjectis, a quibus Saul et Jonathas interfecti sunt
  quasi non a rusticis.*** The referent of *a quibus* is genuinely open (the *fortes* of the
  lemma, or the *subjecti*). Rendered word for word so that both remain open, as they are in the
  Latin. **Nothing was resolved silently.**
- **0563C · *Alii excelsi*** — an elliptical "others [render it] the high places". Rendered
  "Others, high places", with no bracketed supplement.
- **0565C · *Antiqui delicata dicebant diis consecrata, quae nunc dicimus dedicata.*** Migne sets
  **no italics** on *delicata*/*dedicata*, and the gloss IS the etymology, so both Latin words
  are carried in roman exactly as he sets them: "The ancients called things consecrated to the
  gods delicata, which we now call dedicata." Italicising them would have added two spans the
  plate does not have.

### 4.5 Unexpressed subjects that were supplied — named, per the brief

Every "he/she/it/they" not in the Latin was fixed from the lemma above or the verse it comes
from, not from the sentence:

- **0563B–C · *vult* / *praecepit* / *precaepit*** — the subject is **the true David** (Christ),
  named in the lemma's own gloss at 0563B and again at 0563C; not Saul, not the Philisthines.
- **0564D · *traduxit … constituit*** — **Abner**, from 2 Rg 2:8's *Abner … tulit Isboseth … et
  circumduxit eum*, which is the lemma. Not Isboseth.
- **0566D–0567A · *mittit … aedificatur … cognoscitur*** — **Hiram**, from the lemma *Misit
  quoque* (5:11); the *gentilitas* he figures is feminine and takes "it".
- **0568C · *quem dum Michol irridet, gloriosior ancillis apparet, quae in typo Synagogae
  sterilis permansit*** — the last relative is **Michol**, not the handmaids: *sterilis
  permansit* is 2 Rg 6:23, Michol's barrenness, the verse this book already glossed at 0565B.
  The English names her by keeping "she" bound to Michol and moving the handmaids into a
  prepositional phrase.
- **0575A · *dicit ad David*** — **Semei**, from the lemma *Semei autem* (16:13), against the
  nearer *Jeroboam*.
- **0578C · *sedit … desideravit … reprehendit … libavit*** — **David**, named two clauses
  earlier (*David vero alienam uxorem concupivit*); Gregory's *vir flagellis eruditus* is the
  same man.
- **0579B · *interfecit*** — **Banaias**, and then in the Hebrew reading **the lion is Moab**;
  the two readings are kept distinct as Migne keeps them.

---

## §5 · TESTS RUN, AND THE SECTIONS READ CLEAN

1. **Column anchors — position, not merely presence** (brief 2b). All 72 anchors verbatim and in
   order; each checked against the **word it stands beside in the Latin**. Three sit inside a
   construction and were split to match: *usque [0564A] ad* → *as far [0564A] as*;
   *inimicorum [0567B] divisio* → *the enemies' [0567B] division* (the possessive was chosen
   precisely so the anchor keeps its two neighbours); *Christo [0577B] Dei Jacob* → *the Christ
   [0577B] of the God of Jacob*. Seven anchors set hard against a `VERS.` address keep the
   missing space.
2. **Notes.** 115 `[n: …]`, byte-identical to the Latin twins in content and order. **No
   `[nt:]`**: every note in this work is a citation or a siglum, not editorial prose — including
   the long ones, which are attributions with book and chapter (`(RAB., ex Aug. de Civit.,
   lib. XVII, cap. 8.)`, `(GREG., lib. XXXIII Moral., cap. 10.)`). Judged by content, not length.
3. **Marker-strip read.** Every `[var:]`/`[cj:]` deleted and the English read back: no stranded
   article or preposition, no doubled punctuation, every clause keeps its verb, its negation,
   its conjunction **and its object** (the fourth question 7a⁗ does not ask). All seven markers
   are **additive** — none stands in place of a rendering.
4. **Per-negative host check + 2a.** Every printed negative walked (99 particle tokens in the eight chunk bodies), each attached to the single
   Latin word it governs and that word found in the English. The 2a population (a negative on a
   verb with a quantifier or correlative nearby) fired at six sites, each proved from structure
   rather than from what reads well: *nec solum … sed etiam* (0571A, on *solum*) · *Nec pro
   seductione … sed pro adulterio* (0574C, on the causal phrase, not on *ejectus est*) · *Non
   enim … intantum humiliabantur, ut … sed adeo* (0569C, on the degree) · *Non enim David …
   studiose respexit, quia concupiverat, sed potius* (0571C, on the whole causal clause) · *non
   nisi tertio* (0576D) · *in summa non triginta, sed septem et triginta* (0579C, on the number).
5. **Punctuation, band by band** (brief 3, never by total). Colons, semicolons, question marks,
   guillemets and exclamations compared inside every anchor-partitioned band of all eight chunks (80 segments).
   **Zero mismatched bands**, with two declared exceptions: (a) **0566A**, one colon the Latin
   does not print, licensed by **Pattern 8b** — *Quaeritur cur non in summa quadraginta anni et
   sex menses numerentur?* is an indirect question closed with `?`, recast as "It is asked: why
   are not forty years and six months reckoned in the sum?" so the mark survives in a sentence
   that can hold it; (b) **0575B**, the two straight quotes around "not" (§4.3), which are ours
   and free under Pattern 6. **Nine semicolons and four colons introduced on the first draft
   were reverted to the plate's commas** in the course of this compare.
   All 16 question marks in the work are Migne's, in place, and the one direct question he closes
   with a **full stop** (0576B) keeps the full stop.
6. **Italic spans.** 275 spans, 1:1 in place. The three etymological pairs and the two
   Greek-derived glosses (πῦρ at 0567B, kept in Greek script) are unmoved.
7. **`usque ad` decided per occurrence.** 48 occurrences: 44 are the abridgment formula and are
   italic in Migne, rendered `*as far as*`; **4 are the words of the text itself** and are
   rendered as ordinary prose — 0565B (2 Rg 6:23), 0570D (*usque ad inguina*), 0577C (*Usque ad
   tres primos non pervenit*), 0577C (*usque ad excellentiam divinae Trinitatis*). No abridgment
   reading was allowed to swallow a lemma's own words.
8. **The fourth test** — each finished paragraph read back against the Latin asking only *does it
   assert what he asserts*. This is what produced §2.1 (the *obedientiam* site, which every count
   check passes), §4.3 (the *subaudis non* parse, which reads smoothly either way), and the
   *Domatum/rectorum* decline. **Read clean and reported so:** the whole of CAPUT VII–IX
   (0568D–0570B), CAPUT XI's long Gregory extracts (0571C–0572D, the densest prose in the work
   and the one most likely to hide a smoothed connective), CAPUT XXI–XXII (0576D–0577A), and
   CAPUT XXIV (0580A–0580D) apart from its census number.

### 5.1 Candidates raised and REJECTED, with reasons

- **Chapter-head numerals** — `CAPUT II.` was not turned into "CHAPTER TWO." The launch brief
  offers that form, but its own tiebreaker is Ruth's shipped English, and Ruth ships
  `## CHAPTER II.` beside `## CHAPTER ONE.` Following the plate's shipped precedent, not the
  paraphrase of it.
- **`[f: …]` inline citation tails** — not tagged anywhere. This is a lemma-and-gloss commentary,
  which the runbook's false-positive 4 rules out explicitly. The one italic locator in the
  work, *(I Paral. [0569C] XVIII.)* at 0569C, is carried **verbatim and untranslated inside its
  italic span**, exactly as Migne sets it, and takes no marker.
- **Column-band arithmetic** — not reported. The bands run 0563A–D, 0564A–D, … with no gaps and
  no text broken mid-word across an anchor (runbook false positive 1).
- **`*Quid mihi?*` (0574D ×2) vs `*Quid mihi.*` (0575D)** — not reported as an inconsistency.
  Migne prints the mark twice and omits it once; both ride as printed. The lemma was **not**
  expanded to the Vulgate's *Quid mihi et vobis, filii Sarviae?* because "What is it to me?" is
  complete English on its own — the ⚑ class distinction between a clipped lemma and a complete
  short one.
- **`*Nonne.*` (twice) and `*Qui abscissum.*`** — expanded under convention 3 to "Am not I." and
  "Who cast forth the severed head.", because neither renders as English word for word. Both
  occurrences of *Nonne.* were expanded **identically**, per the ruling that a work treating one
  bare lemma two ways is resolved by expanding the stump, never by contracting its twin.
- **`*Tenerrimus ligni.*`** — expanded to "The most tender little worm of the wood." for the same
  reason (23:8 *quasi tenerrimus ligni vermiculus*), and the gloss at 0579A picks the phrase back
  up as *ipse ligni vermiculus*, which fixes the expansion rather than guessing at it.
- **Migne's `( sic )`** — none in this work. Nothing was stacked.
- **Foot-of-page conjecture notes (`[cn:]`)** — none present in our Latin, as everywhere in the
  PL block. **This work's plate has NOT been read**; that is a gap, not a checked zero, and it is
  the difference between this entry and Ruth's §1.5. The three plate candidates in §4.1 and the
  one suspicious tidiness below are what a reader should look at first.
- **Suspiciously tidy forms** (brief §4 / addendum C) — one raised: **0569D *Maseth ancillae
  Abrahae filius***, where *Masek* (Gen 15:2 LXX, Abraham's handmaid) is the expected form and
  *Maseth* is not a form this corpus otherwise carries. Kept as printed; named here because a
  reader going to the plate for §4.1's *precaepit* is one page away from it.
