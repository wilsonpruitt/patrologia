# 9006 — *Prophetia Jeremiae* (Glossa ordinaria, PL 114) — cruces, chunks 0000–0004

Columns **0009A–0018C**: front matter (Jerome's prologue, PRAEFATIO, ARGUMENTUM) + CAPUT
PRIMUM–V. 3,538 Latin words → 5,613 English (≈1.59×). One translator, 2026-08-29.

**Parity, verified mechanically per chunk and again band by band:** column anchors 1:1 in
order and *in place* (each checked against the Latin word it stands beside, not merely
present) · `[n:]` notes 1:1 verbatim · italic spans 1:1 outside markers · question marks 1:1
**by band** · paragraph/line structure 1:1 · frontmatter copied verbatim · zero guillemets in
either column · zero `!` in either column.

| chunk | cols | anchors | `[n:]` | italics | `?` | EN words |
|---|---|---:|---:|---:|---:|---:|
| 0000 | 0009A–0010C | 6 | 8 | 23 | 0 | 745 |
| 0001 | 0011A–0013A | 9 | 20 | 54 | 3 | 1279 |
| 0002 | 0013B–0014C | 6 | 14 | 40 | 2 | 990 |
| 0003 | 0014D–0017A | 10 | 23 | 55 | 3 | 1592 |
| 0004 | 0017B–0018C | 6 | 21 | 39 | 0 | 1007 |

**Apparatus fired: 10 `[var:]` · 1 `[cj:]` · 0 `[sic:]` · 0 `[d:]` · 0 `[ed:]` · 0 `[nt:]`.**

⚠ **Superseded in part by §9 (repair pass, 2026-08-29), which also extends this file's coverage to
chunks 0005–0007.** After that pass the apparatus in chunks 0000–0007 is **14 `[var:]` · 2
`[sic:]` · 1 `[cj:]`**; three conformed lemmata and three parses were repaired. Read §9 before
relying on anything above it.

⛔ **Corrected 2026-08-29 (reconciliation pass): the `[var:]` figure above was written as 18 and is
14.** 18 is 11 (chunks 0000–0004, after §9d added the 0013B marker to the ten of §1a) + 7, but the 7
is `cruces-0005.md`'s whole batch, chunks 0005–**0009**, and this file reaches only to chunk 0007.
The three `[var:]` in chunks 0005–0007 are 0019D, 0022B, 0024D. Counted against the files: chunks
0000–0007 carry **14 `[var:]` · 2 `[sic:]` · 1 `[cj:]`**. The old figure is corrected rather than
deleted because the arithmetic, not the count of markers, was the error, and the next reader should
see which two bands were being added. **This file's own five chunks (0000–0004) stand at 11
`[var:]` · 2 `[sic:]` · 1 `[cj:]`**, against the `10 · 1 · 0` printed two lines above.

---

## §0 · ⛔ PLATE-GATE DEBT — read these ten columns before this work is marked `ours`

`data/plate-reads.json` has **no entry for 9006** and `data/plate-notes/coverage.json` records
no spot check. Under CLAUDE.md hard rule 8a every `[var:]` below stands on an unread column and
`scripts/plate-gate.mjs 9006` will name all ten. They are listed here so the read is a
half-hour's work and not an archaeology:

**0010A · 0010C · 0011D (×3) · 0013C · 0014B · 0015C · 0017A · 0017D.**

✅ **DISCHARGED 2026-08-29, and this paragraph's premise is now false.** The full plate gate was
run before the work shipped — 24 pages of `patrologiaecurs06saingoog` at 300 dpi, three readers,
recorded in `data/plate-reads.json` (entry `9006`) and `data/tei-patches/9006.json`. `node
scripts/plate-gate.mjs 9006` now returns **gate OK**. The debt is kept on the page because the
markers below were *fired* under it, and the reasoning in the next two paragraphs is why they were
safe to fire before it was paid. ⚠ Two of the ten columns named above are named from an older
anchor placement: the gate resolves them as **0014C** and **0017B**.

⚑ **The line I drew, and why the markers were fired at all rather than left as cruces.** The
digitization's known ways of *manufacturing* a Vulgate divergence are single-letter alteration
(`concilio`→`consilio`, `judicabit`→`judicavit`), single-word loss, and normalization. **Eight of
the ten `[var:]` rest on a divergence of several words or a whole different clause, which no OCR
path produces.** Every candidate that turned on **one letter alone** or on **one omitted word
alone** was declined and logged in §2 instead.

⚠ **The two exceptions, named so nobody has to find them:** 0013C *Adversatrix* is a single
letter and was fired only because Migne repeats it consistently four lines later
(*adversatricem*), which a stray slip does not do; 0011D Gn 9:25 bundles a name-letter with an
omitted word, neither of which would have earned a marker alone. **If only two columns can be
read, read those two.**

---

## §1 · THE DIVERGENCE LIST — every lemma and inline citation in bands 0009A–0018C

This is the 7a″ deliverable. **Agreements are recorded as well as divergences**, because a list
of findings alone cannot be told apart from a report by an agent that never looked. Every entry
was collated against `sources/vulgate/clementine-flat.txt` at the verse actually being glossed,
not merely phrase-searched.

### 1a · Fired `[var:]` — ten

| col | Migne prints | Clementine (locus) | why material |
|---|---|---|---|
| 0010A | *Virgam vigiliarum* | *Virgam vigilantem* (Jr 1:11) | "rod of watchings" vs "watching rod"; a genitive plural noun for a present participle — five letters, no OCR path. Migne is consistent: the gloss below re-quotes *Virga vigiliarum*, and I held my rendering fixed across both. |
| 0010C | *qui putabantur esse columnae Ecclesiae* | *qui videbantur columnae esse* (Gal 2:9) | substitution (*putabantur*/*videbantur*) **plus an addition** (*Ecclesiae*). An addition cannot be digitization loss. |
| 0011D | *Non sint tibi dii alieni in conspectu meo* | *Non habebis deos alienos coram me* (Ex 20:3) | a wholly different wording of the first commandment (Old-Latin/LXX shape). Migne introduces it as *secundum quod in eodem loco scriptum est*, so he is citing, not paraphrasing. |
| 0011D | *quasi clibanus corda eorum* | *quasi clibanus succensus a coquente* (Os 7:4) | Migne's clause is the Hebrew/LXX "their hearts are as an oven"; the Clementine's is "an oven heated by the baker". Three words for four, no overlap. |
| 0011D | *Maledictus Chanaam, servus erit fratribus suis* | *Maledictus Chanaan, servus servorum erit fratribus suis* (Gn 9:25) | fired for the **name**, `Chanaam`/`Chanaan`, only because it is bundled with the *servorum* question — see the caveat in §2b. The marker names both readings. |
| 0013C | *Adversatrix Israel* | *aversatrix Israel* (Jr 3:6) | one letter, which would normally be declined — **fired because it occurs twice**, once in the lemma and once in the gloss (*Priorem adversatricem vocat*), and a stray OCR slip does not repeat itself consistently four lines apart. Both are hapax in `src/latin/`: 1 `Adversatrix`, 1 `adversatricem`, 0 `aversatri-`. |
| 0014B | *Dic tu prius iniquitates tuas, ut justificeris* | *narra si quid habes ut justificeris* (Is 43:26) | the Old-Latin/LXX form of the verse, sharing only the final clause. ⚠ The note is `[n: (Ibid.)]` and I did **not** touch the reference (runbook false positive 2). |
| 0015C | *Spiritus plenitudinis veniet mihi* | *Spiritus plenus ex his veniet mihi* (Jr 4:12) | Migne quotes the lemma verse back in a variant form under *Unde scriptum est*, and the whole gloss turns on it — the variant is what licenses the jump to Jn 1:16 *de plenitudine ejus*. |
| 0017A | *Mittam filium meum, forsitan ipsum verebuntur* | *Verebuntur filium meum* (Mt 21:37) | **the gloss's entire argument is the word Matthew's Vulgate does not have**: *Utitur Deus sermone dubitantis*. *forsitan* stands at Lc 20:13. This is the purest 7a″ case in the batch. |
| 0017D | *Assimilatus est jumentis insipientibus* | *Comparatus est jumentis insipientibus* (Ps 48:13, 48:21) | lexical substitution in the verb; the rest of the verse is verbatim. |

### 1b · Fired `[cj:]` — one

**0012A · *de cujus sarculo plantavit Israel*.** *sarculum* is a real word — a hoe — so Pattern 12
has nothing to wrap and Pattern 7 renders it. But the faithful English ("from whose hoe he
planted Israel") asserts something the author did not: the sentence is about *soreth*, a kind of
vine, and one plants from a **shoot**, *surculo*. Jerome's own commentary on Jr 2:21 has *de
cujus surculo*. Additive marker per Pattern 18, Migne's word first and kept in the English:
`from whose hoe [cj: *sarculo*; read *surculo*, "shoot"]`. **The rival I weighed and rejected:**
reading *sarculo* straight as an instrument of planting ("with whose hoe"). It lost because
*cujus* is the vine, not the planter, and a vine has no hoe.

### 1c · Checked and found to agree with the Clementine EXACTLY

Every lemma below was read word by word against its own verse and diverges in nothing:

**Jr 1** — 1:1 *Verba Jeremiae* · 1:2 *In diebus* · 1:5 *Priusquam te* (fragment; ⛔ the expansion
"Before I formed thee" was WITHDRAWN in the repair pass — see §9a — and the lemma now reads
"Before thee") · 1:6 *A, a, a, Domine Deus* · 1:9 *Et misit* · 1:13
*Et factum est*, *Ollam succensam* · 1:14 *Habitatores terrae* · 1:17 *Tu ergo accinge* · 1:18
*Et in columnam*, *Regibus Juda* · 1Tim 3:15 *Columna et firmamentum veritatis*.

**Jr 2** — 2:2 *Adolescentiam* · 2:3 *Omnes qui devorant* · 2:4 *Israel* · 2:5 *Quid invenerunt
patres* · 2:6 *Neque habitavit homo* · 2:7 *Et induxi vos* · 2:10 *Cethim*, *Et considerate* ·
2:11 *Populus meus* · 2:12 *Obstupescite, coeli* · 2:13 *Me dereliquerunt*, *Fontem aquae
vivae* · 2:14 *Nunquid servus* · 2:15 *Leones* · 2:16 *Usque ad verticem* · 2:19 *Arguet te
malitia tua* · 2:20 *A saeculo confregisti* · 2:21 *Vineam electam*, *Quomodo ergo conversa
es?* · 2:22 *Borith* · 2:23 *Vide vias tuas* · 2:25 *Prohibe pedem tuum* · 2:28 *Secundum
numerum* · 2:29 *Quid vultis?* · 2:30 *Filios vestros* · 2:32 *Nunquid obliviscetur?* · 2:34
*In omnibus* · 2:35 *Et dixisti*, *Ecce ego judicio* · 2:36 *Et ab Aegypto* · 2:37 *Super caput
tuum* · Gn 1:26 *Faciamus hominem ad imaginem et similitudinem* (truncated, not altered) · Is
1:6 *A planta pedis usque ad verticem* (verbatim) · Ex 20:2 *Ego sum Dominus Deus tuus qui
eduxi te de terra Aegypti* (truncated before *de domo servitutis*, not altered).

**Jr 3** — 3:1 *Vulgo dicitur: si dimiserit*, *Si dimiserit vir*, *Tu autem fornicata es*,
*Tamen revertere* · 3:2 *Leva oculos tuos*, *Quasi latro* · 3:3 *Frons mulieris* · 3:4–5 *Dux
virginitatis meae tu es. Nunquid irasceris in perpetuum* · 3:6 *Nunquid vidisti quae fecerit?*
(both occurrences) · 3:7 *Et vidit* · 3:11 *Justificavit animam* · 3:12 *Et non avertam
faciem* · 3:13 *Verumtamen scito* · 3:14 *Convertimini* · 3:16 *Cumque multiplicati fueritis* ·
3:17 *Vocabunt* · 3:18 *In diebus illis* · 3:19 *In filios* · 3:20 *Mulier amatorem* · 3:21
*Vox in viis audita est* · 3:22 *Aversiones vestras* · 3:25 *Dormiemus* · 2:35 *non peccavi*
(quoted back from the previous chapter, correctly) · Lc 18:14 *Descendit hic justificatus in
domum suam ab illo* (verbatim) · Ps 50:11 *Averte faciem tuam* (verbatim) · Ps 79:2 *Qui sedes
super Cherubim, manifestare* (verbatim).

**Jr 4** — 4:1 *Si reverteris*, *Si abstuleris* · 4:2 *Et jurabis, vivit*, *Novate* · 4:4
*Circumcidimini*, *Ne forte* · 4:7 *Ascendit leo*, *ascendit leo de cubili suo*, *Et praedo* ·
4:8 *Super hoc* · 4:9 *Principum*, *Sacerdotes*, *Prophetae consternabuntur*, *peribit cor
regis* · 4:11 *Ventus urens* · 4:12 *Spiritus plenus*, *Et nunc ego* · 4:13 *Ecce quasi*, *Vae
nobis quoniam vastati sumus* (all three *Vae nobis*) · 4:14 *Lava a malitia*, *Lava* · 4:15
*Vox enim annuntiantis*, *De monte* · 4:16 *Custodes* · 4:18 *Viae tuae* · 4:19 *Ventrem meum* ·
4:21 *Usquequo videbo* · 4:22 *Quia stultus populus*, *Sapientes sunt* · 4:23 *Aspexi terram* ·
4:27 *Haec enim dicit* · 4:28 *Cogitavi et non poenituit me* · 4:29 *A voce equitis* · 4:30 *Tu
autem vastata*, *Cum vestieris* · 4:31 *Vocem enim quasi* · 3:17 *in tempore illo vocabunt
Jerusalem solium Domini* (quoted back, verbatim) · Ps 72:2 *Mei autem pene moti sunt pedes,
pene effusi sunt gressus mei* (verbatim) · Ps 9:26 *Omnium inimicorum suorum dominabitur*
(verbatim — and Migne's `(Psal. IX)` is right) · Jn 14:30 *Venit enim princeps mundi hujus, et
in me non habet quidquam* (verbatim) · Is 1:16 *Lavamini, mundi estote* (verbatim).

**Jr 5** — 5:1 *Circuite vias* · 5:3 *Domine, oculi tui*, *Percussisti eos*, *Et non
doluerunt* · 5:4 *Forsitan pauperes sunt* · 5:5 *Ecce magis*, *Vincula* · 5:6 *Pardus
vigilans* · 5:7 *Saturavi eos* · 5:8 *Equi amatores* · 5:10 *Et dissipate* · 5:12 *Negaverunt
Dominum* · 5:14 *Ecce ego do* · 5:15 *Ignorabis linguam* · 5:17 *Et comedet segetes* · 5:18
*Verumtamen* · 5:19 *Quod si dixeritis* · 5:21 *Audi, popule stulte*, *Qui non habes cor*,
*Qui habentes* · 5:25 *Iniquitates vestrae* · 5:27 *Sicut decipula* · 5:28 *Incrassati sunt*,
*Et impinguati* · Ps 2:3 *Dirumpamus vincula eorum et projiciamus a nobis jugum ipsorum*
(verbatim; Migne's `(Psal. I)` is his, untouched) · Ps 113:13 *oculos habent, et non videbunt*
and Ps 113:16 *Similes illis fiant qui faciunt ea, et omnes qui confidunt in eis* (both
verbatim) · Dt 32:15 *Incrassatus, impinguatus, dilatatus, dereliquit Deum factorem suum* and
*Incrassatus est dilectus et recalcitravit* (**both verbatim**, and note Migne quotes the verse's
two halves in reverse order — that is his arrangement, reproduced, not a divergence).

---

## §2 · DIVERGENCES FOUND AND DECLINED — the marker was withheld, the finding is here

### 2a · Declined because the divergence is ONE LETTER

- **0012C · Jr 2:31 *Videre verbum Domini*** — the Clementine has ***Videte*** ("See ye"),
  an imperative; Migne's is an infinitive standing as a lemma title, which is odd but construes
  ("To see the word of the Lord"), and the gloss below (*Moyses videbat vocem Domini*) works with
  either. **`t`→`r` is exactly the single-letter alteration class the digitization is documented
  to produce.** Rendered as printed, no marker. ⭐ **Top plate candidate of this batch after the
  two in §2c**: one look at col. 0012C settles it, and if the plate reads *Videte* the fix is a
  `data/tei-patches/9006.json` entry, not a `[var:]`.
- **0011D · Gn 9:25 *Chanaam*** for *Chanaan*. Carried inside the Gn 9:25 marker rather than
  standing on its own, and flagged there. A proper-name letter is the weakest possible
  independent claim.
- **0015A · Job 2:2 *Circumivi*** for *Circuivi* — both are legitimate forms of *circumeo*.
  Pattern 9: no defect, no marker, no crux beyond this line.
- **0011A · Jr 2:12 *coeli*** for *caeli* — the flat Clementine expands ligatures to `ae`;
  Migne's `oe` is PL house orthography throughout. Not a divergence in any sense. Likewise
  *Nunquid*/*Numquid* at Jr 2:14, 2:32, 3:5, 3:6 — orthographic, four occurrences, all silent.

### 2b · Declined because the divergence is a single OMITTED word (a live digitization-loss risk)

- **0010A · 1Ptr 1:1** — Migne: *Electis advenis Ponti…*; Clementine: *electis advenis
  **dispersionis** Ponti…*. One word absent. It does not change what the gloss argues (the
  scattering of the *habitatores terrae*), so the marker fails Pattern 14's "changes the sense"
  test on its own terms as well.
- **0011D · Gn 9:25 — *servus* for *servus servorum***. This is the one I came closest to firing
  alone: the omission flattens the famous phrase. It is inside the marker's text because the
  marker was fired for the whole reading, but **the omission by itself would not have earned
  one.**
- **0011C · Rom 6:19** — *sicut exhibuistis* for *sicut **enim** exhibuistis*. Connective.
- **0015C · Jn 1:16** — *De plenitudine ejus omnes accepimus* for *Et de plenitudine ejus **nos**
  omnes accepimus*.
- **0014B · Jn 1:12** — *Quotquot **enim*** for *Quotquot **autem***. A connective
  *substitution*, not an omission, so my own rule would license a marker; declined because
  nothing in the sense moves, and because 8960's Jdt 7:7 *autem*/*tamen* lean is the standing
  warning against exactly this reflex.

### 2c · Declined because the form is a NON-WORD — raise at the plate, never accuse Migne

Addendum A is unambiguous: every suspicion aimed at a non-word has been confirmed as **our**
corruption, and **seven false `[sic:]` were withdrawn in one batch for publicly blaming Migne
for the digitization's error.** So both of these are carried into the English exactly as printed,
**with no `[sic:]`**, and named here as plate candidates.

- ⭐ **0011B–C · *Velut anthropophormitae*** — no Latin word; a metathesis of
  *anthropomorphitae* (the Anthropomorphite heretics), `morph`→`phorm`, the same shape as
  8970's *Nephthali*→*Nephtlali*. **Hapax in `src/latin/`.** Carried as plain roman
  `anthropophormitae` — *not* italicised, because italic Latin in our English already means "our
  editorial choice of a technical term", and because adding an italic span would have broken the
  1:1 italic structure. The relative clause after it tells a reader it is a sect name.
  **If the plate reads *anthropomorphitae*, this is a tei-patch; if it reads as ours, then and
  only then a `[sic:]`.**
- ⭐ **0014B · Jr 3:19 gloss opens *i In numero filiorum*** — a stranded lower-case `i` with no
  grammatical slot. **Carried verbatim as `i`**, unmarked. Two conjectures, and I adjudicate
  rather than merely naming them: **`i` = an abbreviated *id est*** (Migne uses *id est*
  constantly in this work and the phrase that follows is exactly an *id est* apposition to the
  lemma *In filios*) **beats** a stray broken sort, because a broken sort would not land in the
  one slot where a discourse marker belongs. Neither conjecture entered the text; a plate read
  decides which repair applies. 7a⁗ check: the clause loses nothing — *In numero filiorum qui de
  gentibus crediderunt* is a verbless apposition either way, and no negation, conjunction,
  interrogative or **object** sits inside the carried token.

### 2d · Declined because Migne NAMES the other witness himself

Pattern 14 marks a *Vulgate* divergence. Where Migne says which text he is quoting, there is no
claim to make:

- **0009A · *LXX: Verbum Dei*** (Jr 1:1) and **0011C · *LXX: Obstupuit coelum*** (Jr 2:12) —
  labelled *LXX*.
- **0014D · *Septuaginta: Si conversus fuerit Israel, ait Dominus, ad me convertatur*** (Jr 4:1)
  — labelled.
- **0014D · *Alia littera, converteris*** — Migne's own "another reading". ⚠ The word is **not
  italic in the Latin**, so it is carried untranslated in plain roman rather than being given an
  italic span our source does not have. Adding one would have broken italic parity.
- **0015B · Aquila, *amentes erunt*** (Jr 4:9) — Aquila, named.
- **0018A · *In Hebraeo: Non intelliges quid loquatur*** (Jr 5:15, where the Clementine has *nec
  intelliges*) — labelled *In Hebraeo*.
- **0012A · *In Hebraeo, soreth*** — the Hebrew word, carried as printed. (The Clementine's
  Latin at Is 5:2 has *sorec*; irrelevant, since Migne is transliterating, not quoting.)

### 2e · Scripture quoted OUTSIDE any italic span — recorded, not marked

- **0015D · *Cum conversus ingemueris, salvus eris*** — the Old-Latin/LXX shape of Is 30:15,
  where the Clementine reads *Si revertamini et quiescatis, salvi eritis*. A substantial
  divergence, and I would have fired on it — **except that Migne sets it as running prose with
  no italics and no reference**, so the page does not present it as a citation and a `[var:]`
  would be asserting a citation he did not make. Rendered literally; recorded here.
- **0013D · *Justificata est Sodoma soror tua ex te*** (after Ez 16:52) — same treatment, same
  reason. Not italic, no reference.
- **0012C · *Joannes supra pectus Domini in coena recubuit*** — italic, but it is the
  **glossator's own sentence about** Jn 13, not a quotation of it (the nearest Vulgate wording is
  Jn 21:20 *qui et recubuit in coena super pectus ejus*). Pattern 14 does not reach a paraphrase.
- **0015B · *Stultam enim fecit Deus sapientiam hujus mundi*** (1Cor 1:20) — the words are
  verbatim; Migne has turned Paul's *Nonne … ?* into a statement with *enim*. A change of
  sentence type, not of wording. Recorded; no marker; **and no `?` supplied** (Pattern 8).
- **0014A · Rom 9:29** — *sicut Sodoma essemus, et similes Gomorrhae fuissemus* for *sicut
  Sodoma facti essemus, et sicut Gomorrha similes fuissemus*. Word order and one dropped
  participle; the sense is untouched. Declined.
- **0013D · Ps 13:4** — *Qui devorant **populum** meum* for *plebem meam*. Declined for a reason
  worth stating: **English has no exponent for it.** Both render "my people", so a marker would
  annotate a distinction our page cannot show, which is Pattern 9's logic rather than Pattern
  14's.
- **0018C · Lc 12:19** — *Anima, multa bona habes posita…* for *Anima, habes multa bona
  posita…*, and truncated before *epulare*. Word order + truncation. Declined.
- **0018C · *Omnis dives, aut iniquus, aut haeres iniqui*** — Migne calls it *illam
  philosophorum sententiam*; it is not scripture and takes no Vulgate collation.

---

## §3 · MIGNE'S OWN PRINTING — reproduced, not tidied

- **0014A · `VERS. 17. *Vocabunt.*`** — the verse address prints **without the `--`** that every
  other address in the work carries. Reproduced exactly. Not a defect of ours and not corrected.
- **0014B · `VERS 22.--`** — and here **without the period after `VERS`**. Reproduced exactly.
  Two different malformations of the same address, four columns apart, which is itself mild
  evidence that they are the compositor's and not systematic.
- **0009A–B · `PRAEFATIO`** prints with **no closing period** where `ARGUMENTUM.` and every
  `CAPUT` head has one. The English head `PREFACE` matches it, period for period.
- **0015B · *cum principes et reges et sacerdotes quondam suos sub leone conspexerit.*** — a
  plain rhetorical question (*Quis enim non insaniat…*) that Migne closes with a **full stop**.
  Preserved. No `?` supplied; Pattern 8, and it is the reason the band check is run rather than
  the total.
- **0015B · *Et dixi: Heu, heu, heu, Domine Deus.*** — the Clementine prints *Heu ! heu ! heu !*
  Migne prints commas. Punctuation, not wording; his marks ride as printed and **the batch
  carries zero `!` on either side.**
- **0015C · Virgil, *Quos ego; sed motos praestat componere fluctus*** — Aeneid 1.135, the
  locus classicus of aposiopesis, and modern texts print a dash. **Migne prints a semicolon.**
  Preserved as a semicolon. (No em-dash was introduced anywhere in the batch.)
- **0015A · `[n: (Job. XIV.)]`** keyed to a quotation of **John** 14:30. Migne's reference, and
  it passes through verbatim and untranslated like every other. Not corrected — and note a
  following `[n: (Ibid.)]` chain exists in this work (runbook false positive 2).
- **0009C, 0014B · bare italic `*(ID)*`** (no period, no `[n:]` wrapper) where the same siglum is
  elsewhere `[n: (ID.)]`. Reproduced as an italic span, untranslated, exactly as printed.
- **0009A · `[n: (Vide Operum ejus tomo IX, col. 847.)]`** kept as `[n:]`, **not** converted to
  `[nt:]`. Judged by content per Pattern 15: it is a locator with an imperative, not a statement.
  Corpus control: `Vide …` notes are shipped untranslated as `[n:]` in the existing English
  (`Vide inter Opera Hieronymi, tom. III.`, `Vide scholia ad calcem opusculi.`, `Vide tomo VIII
  operum.`). No new convention invented.

---

## §4 · READINGS THAT CONSTRUE ODDLY AND ARE MIGNE'S — rendered as printed

Addendum A: a **real, well-formed word** that reads oddly is Migne's until a plate says
otherwise. None of these took a marker.

- **0009B · *defugatis*** (*postulatione sua defugatis ab eodem loco serpentibus*) — hapax in
  `src/latin/`, and *fugatis* is likewise a hapax, so frequency says nothing. But *defugare* is
  attested medieval Latin (Du Cange) and the form is well-made. Pattern 9: rendered "driven
  away", no italics, no marker.
- **0009A · *Non errore neque reprehensione superiori, sed certo consilio*** — *reprehensione
  superiori* is the hardest phrase in the batch. Rendered literally, "nor by any higher censure".
  Two readings construe and I could not choose: *superiori* as "from above / on high", or
  *superiori* as "the foregoing" (the censure mentioned earlier — except that nothing earlier
  censures anything, which is what makes it hard). **Neither reading was smuggled into the
  English**; the rendering is neutral between them. Negation hosts proved from the `sed certo
  consilio` correlative: *non* is on *errore*, *neque* on *reprehensione superiori*, and neither
  is on *intelliguntur*.
- **0017D · *Audiat hoc qui acceptis divitiis luxuriae serviunt*** — a **number disagreement**:
  singular *Audiat … qui* against plural *serviunt*. Rendered so that the disagreement survives
  into English — "Let him hear this who, riches having been received, serve luxury" — rather
  than being repaired by a plural "them", which is the silent-repair move Pattern 12's second
  test names (rendering that *hides* the defect). English **does** have an exponent here
  (him/serve), so Pattern 7 governs and no marker is needed.
- **0013B · *Tamen revertere.* Si revertebaris ad me, dicit Dominus.*** — Jr 3:1 reads *tamen
  revertere ad me, dicit Dominus*, an imperative; the gloss opens with an imperfect indicative,
  *Si revertebaris*, which yields "If thou wert returning to me, saith the Lord" and hangs
  without an apodosis. Two conjectures weighed: **(a) *Sive: revertere ad me***, on the model of
  the *Sive:* that opens the immediately preceding gloss in the same column, and **(b) Jerome's
  alternative rendering *si reverteris ad me***. **Neither was taken into the text** and the
  printed reading stands, because (a) requires deleting a syllable Migne prints and (b) requires
  changing tense — and the two conjectures pull in different directions, which is itself the
  reason to render and log rather than choose. Plate candidate, low priority.
- **0013C · *quae ad nullum declinare erubescit*** — carried with its negation intact ("who is
  ashamed to turn aside to no man"), which is the double-negative Latin idiom for shamelessness
  and reads as a contradiction in English. **That is the required treatment**: 7a forbids
  translating a word as its opposite to rescue a sentence.
- **0012B · *convallem filiorum Ennon*** (for *vallis filii Ennom*, Jos 15:8) · **0009B ·
  *Thamnas*** (the usual form is *Taphnas*) · **0016A · *Paneas*** · **0016A · *circumitu*** for
  *circuitu*. Proper names and an attested orthographic variant, all in gloss prose rather than
  in a lemma. Rendered as printed; Pattern 9; no markers.

---

## §5 · THE `usque ad` LOOK-ALIKES — decided per occurrence, as addendum D requires

`usque ad` occurs **44 times** in these five chunks (43 lower-case plus the capitalised lemma at
0011D). **41 are the abridgment formula**, rendered
`*as far as*` in their own italic span per the settled convention (8978 → 8970; 1,361 shipped
instances corpus-wide). **No verb was supplied to complete any of them**, and where the
resumption lands mid-clause the English lands mid-clause.

**Three are NOT the formula** and were caught by reading what stands on either side:

1. **0011D · Jr 2:16 lemma *Usque ad verticem.*** — the verse's own words. Rendered "Unto the
   crown of the head."
2. **0011D · Is 1:6 *A planta pedis usque ad verticem*** — the verse's own words, inside a
   quoted citation, **and the very next `usque ad` in the same sentence IS the formula.** The
   two stand nine words apart. This is the trap addendum D was written about.
3. **0015C · Jr 4:10 *pervenerit gladius usque ad animam*** — the verse's own words, **again
   followed by the formula in the same sentence.**

---

## §6 · NEGATION AND THE UNEXPRESSED SUBJECT — the sites I proved from structure

Every `non · nec · neque · nisi · nunquam · nullus · nihil · ne · nequaquam · nolle` in the five
chunks is in the English, and none is in the English that is not in the Latin. Test 2a's trigger
population — a negative resting near a verb with a quantifier, correlative or `sed` pivot — fired
at these sites, and in each the host was proved **from the sentence's structure, not from what
reads well**:

| col | Latin | host, and what proves it | English |
|---|---|---|---|
| 0017A | *ut **non** juxta interrogationem Abrahae… sed si unum invenerit* | the prepositional phrase, proved by `sed si` | "that it is **not according to** the questioning of Abraham… but if he shall find one" |
| 0015A | *nisi ad Deum **non solum** mente, **sed etiam** corpore convertamur* | *mente*, proved by `sed etiam corpore` | "**not only in mind**, but also in body" |
| 0015C | ***nequaquam** populo, **sed** mihi veniet* | *populo*, proved by `sed mihi` | "**by no means to the people**, but to me shall it come" |
| 0015D | *Et **non** futura, **sed** jam facta sentit* | *futura*, proved by `sed jam facta` | "perceives them **not as things to come**, but as already done" |
| 0016C | ***non** sapientia, **sed** versutia et calliditas vocatur* | *sapientia*, proved by `sed versutia` | "it is called **not wisdom**, but craft" |
| 0017C | *Praeceptorum Dei, **non** Pharisaeorum* | *Pharisaeorum* (no verb in the clause at all) | "of the precepts of God, **not of the Pharisees**" |
| 0017C | *quia vero **non** de futuro, **sed** de praeterito… historiam texit* | *de futuro*, proved by `sed de praeterito` | "weaves his history **not of the future**, but of the past" |
| 0018C | *et **non** a nobis, et venientium ad nos, **non** manus contemplentur, **sed** ora* | first *non* on *a nobis*; second on *manus*, proved by `sed ora` | "**not by us** … they should look **not upon the hands**, but upon the faces" |
| 0011A | ***non** secundum duas et decem tribus, **sed** juxta omnem populum* | *secundum duas et decem tribus* | "**not according to** the two and the ten tribes, but according to the whole people" |
| 0011A | ***non quod** peccata patrum filiis imputentur, **sed quia*** | the whole *quod* clause | "**not because** the sins of the fathers are imputed" |
| 0013A | ***non ut** deponant venena pectoris, **sed ut** insinuent aliis* | the purpose clause | "**not that** they may lay aside the poisons" |
| 0017B | *sed **non** emendatur Jerusalem **nec** per tormenta* | *emendatur*; then *nec* on *per tormenta* | "Jerusalem is **not amended**, **not even through torments**" |
| 0010A | *primitiae debentur sacerdotibus, **non** hostibus* | *hostibus* | "to the priests, **not to enemies**" |
| 0017D | *propter clementiam judicis, **non** propter meritum peccantium* | *propter meritum* | "**not because of** the merit of the sinners" |
| 0012D | ***nolle** peccatum humiliter confiteri, **sed** impudenter jactare* | the infinitive *confiteri* | "**to be unwilling** humbly to confess sin" |
| 0012B | *ut **nec** in impietate viderentur habere consensum; **sed** pugnans contra se superstitio* | ⚠ *viderentur*, with concessive force on *in impietate* — the one site where I am reporting a judgment rather than a proof. `nec` here is "and not", and the `sed` pivots on *superstitio*, not on *in impietate*. | "so that **not even in impiety might they seem** to have agreement" |

**Unexpressed subjects supplied — the antecedent named, per site.** In a gloss the antecedent is
usually in the lemma or the verse above, not in the sentence:

- **0009C** *nihilominus populum ad poenitentiam vocat* → "he calls" = **God**, from *Mirabilis
  Dei clementia* two clauses earlier.
- **0009C** *Non quod ante conceptionem fuerit* → "he existed" = **Jeremiah**, from the lemma
  *Priusquam te* (Jr 1:5, of Jeremiah).
- **0010A** *sed ille … corripitur, quasi puero huic venia datur* → "the one" = **Moses**, named
  in the preceding clause; "this one" = **Jeremiah**, the *puer* of Jr 1:6.
- **0011D** *pro quo secutus est daemones* → "he followed" = **the people**, from *Populus meus*
  / *Me dereliquerunt* above; the speaker in the same sentence (*Qui praeceptum dedi*) is God,
  and the subject changes at *secutus est*.
- **0015B** *turbatur propheta, et in se putat Deum mentitum* → the prophet, printed.
- **0016B** *Loquitur hoc Dominus* → printed.
- ⚠ **0018C** *venientium ad nos, non manus contemplentur, sed ora* — **two readings construe
  and I did not choose silently.** *contemplentur* is third plural, so the subject is either
  **indefinite ("they/men")** or, taken from the preceding *et non a nobis*, **"we" of the
  Church**, in which case the third-plural is a loose generalising shift. The English uses
  "they", which is the reading nearer the printed morphology; the rival is recorded here.

---

## §7 · SECTIONS READ CLEAN

Named so a blind reader can tell a checked passage from an unvisited one:

- **The PRAEFATIO (0009A) in full** — the LXX-vs-Hebrew argument, which is the passage most
  exposed to 7a″ conformation because it is *about* textual divergence. Nothing in it is a
  scripture quotation; the only crux is *reprehensione superiori* (§4). *utraque … firmata est*
  is singular by construction, not a disagreement.
- **The ARGUMENTUM (0009B) in full** — Jeremiah's death and Egyptian cult. One flagged word
  (*defugatis*), no quotations, no anchors inside it.
- **CAPUT PRIMUM entire (0009B–0010C)** — 12 glosses, 6 anchors, 8 notes, zero question marks in
  either column.
- **The whole of chunk 0004 (CAPUT V, 0017B–0018C)** carries **zero question marks on both
  sides** — checked band by band, not by total, and worth stating because a supplied `?` in the
  rhetorical *Quis enim non insaniat* family is the exact defect this book invites (see §3, and
  the parallel site at 0015B in chunk 0003).
- **All 44 `usque ad` occurrences** individually classified (§5) rather than swept — the
  count was taken mechanically per chunk against the English `as far as` count, which is what
  exposed the capitalised lemma the lower-case grep had missed.
- **Fourth test (does the English ASSERT what he asserts) run paragraph by paragraph on all five
  chunks with the counts already known clean.** It produced two changes and no third: the
  *sarculo* `[cj:]` (§1b), where the containment checks all passed and the sentence was simply
  false about vines; and the negation host at 0017A, where "great is the love of justice, that
  God does not free the city for ten just men" reads perfectly and is not what the `sed`
  correlative permits.

---

## §8 · CONVENTIONS APPLIED WITHOUT RE-OPENING THEM

`VERS. n.--` passes through verbatim · the lemma is Englished · a fragmentary lemma is rendered
as the phrase it stands for — ⛔ **but see §9: the *Priusquam te.* expansion was CONFORMATION,
not convention 3, and has been withdrawn** (**0010A *Regibus Juda.* → "To the kings of Juda"**,
dative, from Jr 1:18, stands: nothing is imported there, the dative is in the printed word) · sigla ride as `[n:]`
verbatim, unanglicized, and passing one through is not endorsing it · heads translated 1:1,
matching Ruth's shipped forms (`CAPUT PRIMUM.` → `CHAPTER ONE.`, `CAPUT II.` → `CHAPTER II.`)
and 8977's for the prologue (`PROLOGUS HIERONYMI.` → `THE PROLOGUE OF JEROME.`, so
`PROLOGUS HIERONYMI IN JEREMIAM.` → `THE PROLOGUE OF JEROME ON JEREMIAH.`; `ARGUMENTUM.` →
`THE ARGUMENT.`) · Pattern 17 observed throughout, and the batch has a worked contrast at
**0012C**, where *disceretis … diceretis* (plural, the sons' generation) sits in the same
sentence as *noluisti* (singular, addressed to God): "that **you** might learn … lest **you**
should say: **Thou** wouldst not rebuke us."

⛔ Nothing was copied from Ruth (8968) except the head forms and the settled conventions; no
rendering was carried across from another book.

---

## §9 · REPAIR PASS, 2026-08-29 — the conformation class, the two plate patches, and four new cruces

Chunks **0000–0007** (cols 0009A–0025D) re-read against the **re-chunked Latin** (14 TEI patches
of 2026-08-29; two of them fall in this range). Sections 0–8 above were written before those
patches and before the blind polarity read; nothing in them is deleted, but where §8 recorded a
rendering that has now been withdrawn it is corrected in place and the reason is here.

⚠ **Scope note.** This pass owns chunks 0000–0007, so it reaches two columns documented in
`cruces-0005.md` (0019A in chunk 0005 and the chunk-0006 candidates). Those entries are recorded
here, not there, because `cruces-0005.md` is another agent's file.

### 9a · ⛔ THE LEMMA-EXPANSION FINDING — **DECLINED AND REVERTED**; only the conformation site stands

⛔ **Correction, same day, after the ruling was applied. Two of the three repairs below were WRONG
and have been undone. The entry is kept, not deleted, so that the next reader sees the finding,
sees why it fails, and does not raise it a fourth time.**

**What was originally written here** (2026-08-29, first repair pass, now superseded): three blind
polarity readers reported a class they called "the lemma silently completed from the Vulgate" —
Migne prints a short lemma, our English carries the whole phrase — and this section ordered the
lemmata contracted back to word-for-word stumps. That repair pass was stopped mid-run.

**The governing ruling** (`GLOSSA-NT-AGENT-BRIEF.md`, final section, *Before you call something
inconsistent, NAME THE CONTROL'S CLASS*):

> A clipped lemma whose governed word is missing and a complete one-word lemma are **different
> classes**. The first is a fragment and **convention 3 renders it as the phrase it stands for**;
> the second has nothing elided and is rendered as it stands. Contrasting the two manufactures an
> inconsistency that is not there — three readers did exactly that in one batch, and all three
> findings were declined. … **the defect is never expansion or its absence, it is CONFORMATION** —
> following the familiar English Bible where Migne's own plate **diverges** from it. **Expanding a
> fragment per convention 3 is not conformation.** Where a work really does treat the same bare
> lemma two ways, **resolve it by EXPANDING the stump, not by contracting its twin.**

Convention 3's own model (brief, *The Glossa conventions*): Ruth's `VERS. 3.-- *Non te.*` — Ruth
3:3, *non te videat homo* — is rendered **"Let no man see thee"**, not "Not thee."

⚠ **Where the reasoning above went wrong.** It read Pattern 8's "never supply" as outranking
convention 3. It does not. Pattern 8 governs *content the plate does not stand for*; a clipped
lemma **does** stand for its verse-phrase, and supplying that phrase is what convention 3 is for.
The list of correctly-short fragments cited as proof (*Verba Jeremiae*, *In diebus*, *Et factum
est*, *Ab extremitatibus*, *Lignum*, *Borith*, *Grex*) is a **different class** — complete one-word
or self-standing lemmata with nothing elided — and so cannot control clipped ones. That is exactly
the class error the ruling names.

⛔ **This is now the third time this non-defect has been raised by fenced readers.** It is settled.
Do not re-raise it, and do not accept a finding that contrasts a clipped lemma with a complete one.

| col | chunk | Migne prints | class | disposition |
|---|---|---|---|---|
| 0009C | 0000 | *Priusquam te.* | clipped fragment (*priusquam te **formarem***) | ⛔ **contraction REVERTED** — restored to **"Before I formed thee."** Convention 3; not conformation. |
| 0019A | 0005 | *Sicut frigidam.* | clipped fragment (*sicut frigidam **fecit cisterna aquam suam***) | ⛔ **contraction REVERTED** — restored to **"As a cistern maketh her water cold."** Convention 3; not conformation. |
| 0016C | 0003 | *Sapientes malitiosi* | **not a lemma** — the opening of an abridged gloss | ✅ **repair STANDS**: "Wise to do mischief" → **"Malicious wise men"** |

⭐ **0016C is the only genuine defect of the three, and it is genuine because it is CONFORMATION,
not because it was long.** *Sapientes malitiosi* is not a clipped lemma at all: it is the head of
an abridged gloss, and Migne prints an **adjective**. "Wise to do mischief" is Douay's rendering of
Jer 4:22's *sapientes sunt ut faciant mala* — a phrase **Migne's plate does not carry** — so the
English was following the familiar English Bible where the plate diverges from it. The proof is
the gloss's own resumption tail, *non sapientia, sed versutia et calliditas vocatur*, which
glosses the adjective and was left explaining a word the English no longer had.

⚑ **The test to apply, in order.** (1) Name the class: is the lemma *clipped* (a governed word
missing) or *complete*? (2) If clipped, convention 3 applies and the phrase it stands for is the
right rendering — say so and stop. (3) A defect exists only if the English follows an English
Bible **against** what Migne prints. (4) If one work renders the same bare lemma two ways,
**expand the stump**; never contract its twin.

⚠ **Sites restored in the corrective pass (2026-08-29, second pass), for the record** — 25 in all
across chunks 0000–0023; the two in this file's range are 0009C and 0019A above. The other 23 lie in
chunks 0008–0022, and **the rulings that license them were already written, correctly, by the
batch agents before the contraction pass ran**: see `cruces-0005.md` §2d(ii) (*Sicut frigidam* ·
*Si mutare potest* · *Nunquid avis discolor*), `cruces-0010.md` §1b (the eleven bare fragments of
cols 0031B–0044D, including the three *Si non reliquiae* rendered alike), `cruces-0015.md` §1
(fragments rendered as the phrase they stand for) and `cruces-0020.md` §3 (*Ad filios* · *Confusa
est* · *Dissoluta* · *Subito cecidit* · *Stultus factus est* · *Confusus est*). **Those sections
need no correction — the contraction pass contradicted them, and the restoration puts the English
back in agreement with them.** The 0055D *ejus* repair (chunk 0019, "their" → "his") is
**conformation** and **stands**, like 0016C.

### 9b · PARSE AND SUBJECT REPAIRS — three sites where the English did not assert what Migne asserts

Fourth-test class (brief §5): everything was present, in order, at parity, and the page said
something else.

- **0013A (chunk 0002)** — *Habuisti pastores multos **in offensionem tui***, was "unto thine own
  hurt". The gloss that follows exists solely to fix the genitive as **subjective** —
  *ut Deum scilicet offenderes* — so as written the second half explained something the first
  half had not said. Now **"unto thy giving of offence, that is, that thou mightest offend God."**
- **0012D (chunk 0001)** — *Audiat haeresis nova ex veteri, iram Dei esse vel maximam, nolle
  peccatum humiliter confiteri, sed impudenter jactare justitiam.* The English had made three
  coordinate objects of *audiat*; the Latin predicates *iram Dei esse vel maximam* **of** the
  infinitive phrase that follows. Now **"…hear that it is the very greatest wrath of God, to be
  unwilling to confess sin humbly, but shamelessly to boast one's righteousness."** The sentence's
  actual claim is no longer floating as an apposition.
- **0017D (chunk 0004)** — *Audiat hoc Ecclesia negligens: et providentiam Dei refutans, quod et
  gladium et famem sustineat…* The English had followed Migne's stray colon into inventing a
  **second hearer** ("the negligent Church, and that which rejects the providence of God").
  *refutans* is a nominative participle agreeing with *Ecclesia*: one hearer. Now **"Let the
  Church, negligent and rejecting the providence of God, hear this: that she shall suffer…"**
  ⚠ **Migne's colon is kept exactly as printed** — the English was fixed, not his punctuation;
  the 0017D band still carries one colon on each side.

### 9c · TWO NEW `[sic:]` — both restored by TEI patch, both Migne's own defect

Corpus Corporum had silently supplied the correct form in each case, so **our Latin read
correctly and no check we own could see it** (brief §4, the normalization direction). Both are
plate-verified in `data/tei-patches/9006.json`; these are the only two `[sic:]` in chunks
0000–0007 and the first in this work.

- **0011D (chunk 0001)** — the Latin now prints ***fratibus*** (no *r*) in
  *Maledictus Chanaam, servus erit fratibus suis*; plate p.11 at 9×, clean type. English:
  **"a servant shall he be to his brethren [sic: *fratibus*] [n: (Gen. IX)]"**.
- **0015C (chunk 0003)** — the Latin now prints ***Quos egos*** in the Virgil tag (Aen. 1.135,
  correctly *Quos ego—*); plate p.13 at 5×, the final *s* a full sort distinct from the
  semicolon. English: **"Whom I [sic: *egos*]; but it is better to settle the troubled waves."**

⛔⛔ **BOOKKEEPING GAP — RAISED HERE, AND SINCE CLOSED.** As written this section reported that the
2026-08-29 plate gate lived **only** in `data/tei-patches/9006.json` and that `data/plate-reads.json`
had no `9006` entry at all, so `plate-gate.mjs` saw 0 recorded reads and refused all 44 markers then
standing. ✅ **The entry was written.** `data/plate-reads.json` now carries `works.9006` — 24 `reads`,
pp. 10–36, each with the page, the source, the corner-number calibration and what was found — and
`node scripts/plate-gate.mjs 9006` returns **gate OK** on all **50** plate-claiming markers (37
`[var:]` + 13 `[sic:]`; `[cj:]`, `[ed:]` and `[nt:]` make no claim about the plate and the gate does
not read them). The warning is corrected in place, not deleted: it is the record of a real gap
between the evidence and the file the gate reads, and that gap is exactly the failure mode hard rule
8a exists to catch.

⛔ **Neither marker swallows the word it marks.** Strip every marker from both sentences and what
is left reads complete — "a servant shall he be to his brethren", "Whom I; but it is better…" —
no stranded article, no stranded preposition, no doubled mark. And the fourth question 7a⁗ does
not ask: **the clause still has the thing it acts on** — *fratibus suis* is the dative *serviet*
governs and it is present as "to his brethren"; the Virgil tag is an **aposiopesis** by Migne's
own word for it, so "Whom I" is complete precisely by being incomplete, and its object *quos* is
rendered. `[sic:]` content is verbatim in the Latin twin in both cases (`fratibus`, `egos`).

### 9d · ONE NEW `[var:]` — fired for parity, verified against the file before writing

- **0013B (chunk 0002)** — Migne prints *Si revertebaris ad me, dicit Dominus* where the
  Clementine (Jr 3:1, checked in `sources/vulgate/clementine-flat.txt`, not from memory) reads
  *…tamen revertere ad me, dicit Dominus, et ego suscipiam te.* An **imperative** in the received
  text against Migne's **indicative behind *si***, which is a change of what the sentence does,
  not of its wording only — and the gloss that follows (*Arguit impudentiam meretricis*) reads on
  either. The English was already literal and correct; it fired no `[var:]` where the same
  translator fired ten elsewhere in these chunks, so this is a parity repair, not a new reading.
  The lemma above it, *Tamen revertere.*, agrees with the Clementine exactly and is left unmarked.

### 9e · ONE NEW CRUX, NO MARKER — *In divinis confisi* (0018C, chunk 0004)

Migne prints *Et impinguati, etc. **In divinis confisi:** quasi dicat: Anima, multa bona habes
posita in annos plurimos…* The gloss attaches the Lucan rich fool, so the presumption at issue is
on **wealth**, and *divinis* is very likely the plate's slip for **divitiis**. **The literal
rendering "Trusting in divine things" is correct and stands** (Pattern 7).

⛔ **No `[sic:]`, deliberately.** The column was read at the plate in the 2026-08-29 gate and
Migne does print *divinis*: it is a real, well-formed word, so the defect is his **sense**, not
his type as we can prove it, and addendum A is explicit that a real word reading oddly is Migne's
until a plate says otherwise. A `[cj:]` was weighed and **rejected** as well — Pattern 18 requires
the conjecture to be one the printed word's own context forces, and here the rich fool is adduced
for *impinguati* as much as for *confisi*, so *divinis* is odd rather than false. A crux asserts
nothing and is always safe; this is where the finding lives.

### 9f · OPEN QUESTION LEFT FLAGGED, ENGLISH UNCHANGED — 0021B (chunk 0005)

*Ne dubitetis indurare cervices, etc., usque ad nunc saltem loquere eis verbis meis*, glossing
Jr 7:27 (*Et loqueris ad eos omnia verba haec, et non audient te*). The English reads **"Hesitate
not to harden your necks"** and is **left exactly as it stands.** Two readings, both construing:

1. **Ours, as printed:** *dubitetis* second plural + prolative infinitive — "hesitate not to
   harden your necks", an ironic imperative addressed to the people.
2. **The rival:** accusative-and-infinitive with an unexpressed subject — "do not doubt that
   **they** harden their necks" — addressed to the prophet, which is what Jr 7:27 is about
   (*et non audient te*) and which fits *nunc saltem loquere eis verbis meis*, an imperative
   plainly addressed to Jeremiah.

⛔ **Neither was chosen silently, and neither could be settled from this repo.** The reading turns
on what Jerome writes at the corresponding place in *In Hieremiam* (PL 24), which the abridgment
is cutting into and which is **not on disk here**. The rival is the stronger on sense; the printed
words are the stronger on syntax, since *dubito* + bare infinitive is Jerome's ordinary idiom and
the acc.+inf. would need a subject the plate does not print. Pattern 7 breaks the tie for the
running text. **Whoever gets PL 24 should settle this and it is the one open reading in these
eight chunks.**

### 9g · NEW NON-WORD CANDIDATES FOUND IN CHUNK 0006 — plate read requested, NO markers fired

Chunk 0006 (cols 0021D–0024A) was **not** in the 2026-08-29 plate gate — that read covered the
37 fired markers, and chunk 0006 fires only one `[var:]`, at 0022B. Four non-words stand in its
Latin, none of them named in the findings I was given, all four read through in the English:

| col | our Latin prints | evidently | English currently |
|---|---|---|---|
| 0021D | *uque ad* | *usque ad*, the abridgment formula | "*as far as*", per the formula |
| 0021D–0022A | *Omne g enus hominum* | *Omne genus* — a split run, Pattern 10 shape | "Every kind of men" |
| 0023A | *Oui intelligit sedebit* | *Qui* — O for Q | "He that understandeth" |
| 0023C | *Et dabo Jesusalem* | *Jerusalem* | "And I will give Jerusalem" |

⛔ **No `[sic:]` on any of them, and that is the ruling, not an omission.** Addendum A: every
suspicion aimed at a non-word has been confirmed as **our** corruption, and seven false `[sic:]`
were withdrawn in one batch for publicly blaming Migne for the digitization's error. All four
have the exact shape of Corpus Corporum damage (*Qui dam*, *quorum dam*, *quisbusdam*), and
`Jesusalem` in particular is a dittographic OCR slip no compositor makes. **Ship test B: an
unread candidate is safe iff it fires no marker.** If the plate reads as ours in any of the four,
that one is owed a tei-patch and then a `[sic:]`; if it reads correctly, our Latin needs the
repair and the English is already right. The same holds for the two candidates §2c already
named at 0011B–C (*anthropophormitae*) and 0014B (*i*).

⚑ **These four are worth the reader's half-hour precisely because chunk 0006 has no plate cover
at all** — the gate's coverage follows the markers, so a chunk that fires nothing is a chunk
nobody has looked at.

### 9h · PARITY RE-CHECKED AGAINST THE FRESH LATIN TWINS

The Latin word count changed by design (patches restore Migne's own defective forms), so
Latin↔English ratios shift slightly; **anchors and notes did not move.** Re-measured after every
edit above:

| chunk | anchors | `[n:]` | italic spans | `?` `:` `;` `!` `«` `»` band by band |
|---|---:|---:|---:|---|
| 0000 | 6 | 8 | 23 | zero mismatched bands |
| 0001 | 9 | 20 | 54 | zero mismatched bands |
| 0002 | 6 | 14 | 40 | zero mismatched bands |
| 0003 | 10 | 23 | 55 | zero mismatched bands |
| 0004 | 6 | 21 | 39 | zero mismatched bands |
| 0005 | 12 | 36 | 80 | zero mismatched bands |
| 0006 | 10 | 34 | 63 | zero mismatched bands |
| 0007 | 7 | 22 | 47 | zero mismatched bands |

Column anchors verbatim, in order, and checked **in place** against the Latin word they stand
beside (test 2b), including the two the repairs moved text around — 0013B and 0017D both still
open on the word they opened on. `scripts/verify-english.mjs 9006` passes on all 24 chunks.
Italic spans counted with markers stripped, so the italics **inside** the two new `[sic:]` do not
enter the count and structure stays 1:1. **Apparatus in chunks 0000–0007 after this pass: 18
`[var:]` (17 standing + 1 new at 0013B) · 2 `[sic:]` · 1 `[cj:]` · 0 `[d:]` · 0 `[ed:]` ·
0 `[nt:]` · 0 « ».**

### 9i · READ CLEAN IN THIS PASS, AND WHAT I LOOKED FOR

- **Every lemma in chunks 0000–0007 re-read word by word against the fresh Latin** for the 9a
  class specifically. Beyond the three repaired, **no fourth conformation** — checked hardest at
  the fragments most likely to invite one: *A, a, a, Domine Deus* (0010A), *Tu ergo accinge*
  (0010B), *Quid invenerunt patres* (0011A), *Vulgo dicitur: si dimiserit* (0013A), *Lava a
  malitia* (0015D), *Circuite vias* (0017A), *Sicut decipula* (0018C), *State super vias*
  (0019D), *Quis dabit* (0022D), *Nolite ergo timere* (0024B), *Ab extremitatibus* (0024D). All
  stop where Migne stops.
- **Chunks 0006 and 0007 carry no repair of any kind** — they were re-read in full against the
  fresh Latin and the only findings are the four non-words of §9g, which are candidates against
  our own text, not defects in the English.
- **Negation host named for every printed negative in the two repaired sentences** (9b): the
  *non* of *non quod ante conceptionem fuerit* (0009C) rests on the clause, not on *fuerit*
  alone, and survives the *Priusquam te* repair untouched; 0017D's *nisi* stays on
  *crediderit* and did not move when the subject was unified.
- **Migne's punctuation untouched everywhere**, including the 0017D colon that caused the defect.
