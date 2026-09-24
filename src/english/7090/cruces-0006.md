# 7090 cruces — stint T2 (chunks 0006–0011, cols 0488B–0519A, PDF pp. 249–265)

Every page in range was opened at the plate once (`raw/scans/pl020/pl020.pdf`, 300 dpi full width, 600 dpi
crops where a letter or digit was in doubt, corner numbers read first on every page: 249 = 487/488 … 265 =
519/520). Text collated and every foot note read in the same visit. The English renders what the plate prints.
Hand edits to the Latin `[cn:]` layer are listed under "Notes" so that `data/plate-notes/7090.tsv` can be
brought into line before any re-chunk (a re-chunk from the TSV as it stands would erase them).

## Standing decisions

- Coustant's lettered notes: Latin `[cn: a | …]`, English `[nt: …]` only (T1's decision, followed: the brief's
  "keep each verbatim in the English" conflicts with `verify-english.mjs` check 9a and Pattern 19).
- **Greek parallel texts** (Ep. V, VII, IX, XII: Migne prints Palladius's/Sozomen's Greek after the Latin) are
  TRANSLATED from the Greek as printed, not carried in Greek and not harmonized with the Latin. Where the Greek
  says something the Latin does not, the English of the Greek says it (see Greek cruces below). This roughly
  doubles those letters in the English; the Greek is Migne's text on the page. No `[lat:]` markers (a PG device).
- Pattern 17: Exsuperius, Theophilus, Arcadius (Ep. IX), John (Ep. XII), Rufus, Aurelius (Ep. XIV), Juliana →
  thou. The Toledo bishops, the Constantinopolitan clergy and people, Aurelius+Augustine (Ep. X), Honorius's
  *vos/vestra* to Arcadius in Ep. VIII → you.
- Migne's bracketed matter kept and rendered: `[ *Forte* expolitam]` → `[ *Perhaps* expolitam]`, `[ *Baron.
  addit.* ecclesiae]`, `[ *Supple,* quis]` → `[ *Supply,* quis]`, `[ *Antiquo more pro* spectat]` → `[ *By the
  ancient usage for* spectat]`, `*[Baron. consortem]*`, `*[Baron. praemissa]*`, `[ut compertum habeas]`
  (translated: it is Coustant's supplement, note c says so), `[Lab. παραμυθήσεται]`, `[Add. ἢ]` kept as printed.
- *CAP.* → *CHAP.*; *EPISTOLA* → *EPISTLE*; Migne's `--` kept.

## Plate readings that differ from our TEI (English follows the plate; patches filed in
## `data/briefs/7090-PENDING-TEI-PATCHES-0006.md`)

- **0489A** TEI `tamquam singulis scripta, sint, accipiant` — plate `scripta sint, accipiant`. Punctuation only.
- **0490B** TEI `reprebendimus` — plate `reprehendimus` (600 dpi: the ascender is h). Rendered "reprehend".
- **0492B** TEI `elegendi` — plate `eligendi`. Rendered "chosen".
- **0498A** TEI `remittetur. Ita ut` — plate `remittetur, ita ut`. English runs the two as one sentence.
- **0501 (Ep. VII head)** TEI `ipsorummel` — plate `ipsorummet`; TEI `aecumenica` — plate `oecumenica`.

## Plate defects (Migne's)

- **0491A** `editiotiones` — the plate prints *editio-|tiones*, a doubled syllable across the line break.
  Carried `[sic: *editiotiones*]` with the sense ("shows", *editiones*) beside it; Coustant's note (c) on the
  word (*supple ludorum vel munerum*) shows he read *editiones*. Not a hyphenation artifact of ours: the plate
  sets the extra *tio* in type.
- **0494A (Ep. IV summary list, 0007)** `reprëssione ( pro reprehensione)` — Migne's own gloss on his own form;
  rendered "repression" with his parenthesis kept. No marker (he flagged it himself).
- **0508B** `quo pacto extra summum … [ *Supple,* quis] putaret esse discrimen` — the sentence needs Migne's
  supplied *quis*; rendered with his bracket, as printed.

## Notes (placement and correction by hand)

Sequence check per page: every page in range runs complete (249 e [a–d are T1's]; 250 a–i; 251 a–i; 252 a–d;
253 a–k; 254 a–g; 255 a–d; 256 a–g; 257 a–c; 258 a–d; 259 a–f; 260 a–f; 261 a–e; 262 a–e; 263 a–g; 264 a–m;
265 a is mine, b–j are chunk 0012's). No gap found; no note missed by the sweep.

**Placed from `7090-UNPLACED-NOTES.md` (10 of the 11 on my pages):**
- p. 250 (h) after *ne perturbationes* (0490B) — the plate reader's anchor "nisi perturbationes" abbreviates
  *nisi perpenderemus ne perturbationes*.
- p. 253 (c) on the head *EPISTOLA VI.*; the note runs on in the right column of the same page (*…ut
  sententiam suam adversus eos, qui aut scientes aut ignorantes peccassent, aequo discrimine moderaretur.*),
  completed. (f) after *--III.* in the Dionysian title list, before *De administratoribus*.
- p. 254 (c) after *Non* (0497B, *Non permanentem in concupiscentia*); (d) after *et* before *habentem filios*
  (0498A).
- p. 261 (a) in the head *EPISTOLA IX.* (plate: EPISTOLA ª IX.); (e) in the head *EPISTOLA X.* (plate: EPISTOLA
  ᵉ X.).
- p. 262 (c) in the head *EPISTOLA XII.* (plate: EPISTOLA XII ᶜ).
- p. 263 (e) after *in minus bonis*, before *censio* (0516A).
- p. 264 (b) in the head *EPISTOLA XIV.* (plate: EPISTOLA ᵇ XIV.). Plate reads *sed ab anno 453 certior fieri*
  (the TSV had 455, which makes Leo inform himself in the year itself); corrected to 453.
- **Not placed: p. 265 (b)**, keyed to *EPISTOLA XVI*, which opens chunk 0012 (another stint's). Left for T3;
  its text in the TSV reads clean against the plate.

**Moved to the printed key:**
- p. 256 (e) after *Martias* (was before it): the plate raises the key after *Martias*, before the comma.
- p. 261 (c) after *scriptae*, before *sunt* (was after *quae ad me*): plate *quae ad me scriptæ ᶜ sunt*.
- p. 265 (a) after *gratiae* (was after *nobilitatem*): plate *gratiæ ª, nobilitatem*.

**Completed / corrected in the Latin:**
- p. 250 (i) the note runs over to p. 251 top-left; completed from *additur, exstat quidem in decurtatis…* to
  *…gratiae Christianae sacramentum appellare familiare est.* (the sweep stopped at *addi-*).
- p. 251 (d) runs on into the right column of the same page: *…seu summarium capitulum Innocentii explicans
  textum. In iisdem libris mox pro creatoribus substitutum est ordinatoribus.* Completed.
- p. 253 (a) plate *opem ferre citius* (TSV *obesse ferre cutius*), *ad synodum* (TSV *synodam*); (b) plate
  *frustra niti* (TSV *viti*). Corrected. (a) prints *γενουμένη* and italic *cogitur*: kept as printed.
- p. 254 (e) ends *…altera ad eos qui scientes:* at the foot of the page and does NOT continue on p. 255 (the
  top of p. 255 carries only the run-over of (g)). Truncated as printed; the sweep's "continues at top of p.255"
  was wrong. Translated as printed, nothing supplied.
- p. 254 (g) sweep's parenthetical removed (note ends *…conversionem ac mutationem petit.*). ⚠ It prints *Leo
  epist. 100* (the plate figure is worn: 100 or 108); left as the TSV had it.
- p. 255 (a) the unkeyed paragraph in the right-hand apparatus (*Cui Ambrosius n. 2 respondet: …ut in voluntate
  magis abstinentis, quam in necessitate sit legis.*) is the run-on of (a) itself (it continues the Ambrose
  *ad Studium* quotation (a) introduces); appended to (a). The sweep had recorded it as a keyless excursus.
- p. 257 (c) sweep's parenthetical and stray quotation marks removed. The raised *d* inside the quoted canon
  (*locum d fensionis*) is Migne's stray sort; carried in the note, rendered "place of d efence".
- p. 258 (a) the sweep dropped a clause by eye-skip: plate reads *Sardicenses canones ut a Nicaenis
  distinctos, non ut pro Nicaenis habitos eorumque nomine vestitos, ab eo receptos esse*; restored.
- p. 261 (c) runs over to the top of the right column on p. 261/262 apparatus: completed *…cum varias epistolas
  accepisset, ad Honorium scripsisse, ὑποτάξαντα κατὰ μέρος τῶν γραμμάτων δύναμιν, … simul ad ipsum fuisse
  destinata.*
- p. 263 (a) the TSV's tail (*quintum, Eo ipso forte, qui a Siricio…*) splices two notes. Plate: (a) ends on
  p. 263/264 *…quintum Theodosii, non quartum aut tertium, ac vicissim cum quinto Theodosii nonum Honorii, non
  septimum aut alium quemvis componerent.* Corrected. Plate *anno 413, quo frumentum Heraclianus…* (TSV 417;
  600 dpi, the last digit is a 3; Heraclianus's embargo is 413). Plate *ut ne me Rufi ordinatio* (TSV *nec
  me*); the type is broken, left as the TSV has it; English "neither Rufus's ordination nor".
- p. 263/264 (g): the plate prints under key (g) at *Senecione* the words *In edit. Concil. 11. Quae autem 14
  erat, nunc 25.* and the note runs on at the head of p. 264's apparatus *Eo ipso forte, qui a Siricio epist. 9,
  n. 5, Basso episcopo in consortium regendae ecclesiae datus dicitur.* Both carried as (g), as printed. The
  first sentence is the usual heading-note formula and belongs by sense to the head of EPISTOLA XIII (whose own
  note (a) lacks it); Migne's (or Coustant's) misplacement, NOT moved.
- p. 264 (h) prints *ante Paschu* / *ante hoc Paschu* (the sweep normalized to *Paschae*); plate form restored.
- p. 264 (k) prints *Arelatensis I synodus anno 514 habita* (Arles I is 314). Coustant's/Migne's figure;
  translated as printed.

## Greek-text cruces (translated from the Greek as printed)

- **0504A (Ep. VII Gk)** τῆς ἐπιστολῆς τῆς **ἡμετέρας** ἀγάπης — "the letter of **our** charity" where the Latin
  has *litterarum charitatis vestrae*. Rendered as printed.
- **0506B (Ep. VII Gk)** τοῦ Χριστοῦ **αὐτῶν** — "the Christ of them" (Latin *Christi ipsius*). As printed.
- **0506A (Ep. VII Gk)** TEI βεῳαιότητα — plate βεβαιότητα (a digitization error; patch filed); rendered "firmness".
- **0512A (Ep. IX Gk)** ἀποστῆναι τῆς **αὐτῶν** κοινωνίας — "their communion" where the Latin has *ab ejus
  communione* (John's). As printed. ἐκ πασῶν τῶν **ἐπισκοπῶν** — "all the bishoprics" (Latin *epistolis*;
  ἐπιστολῶν would match). As printed. The note (b) spells the word ἐθελοχακοῦντας, the text ἐθελοκακοῦντας.
- **0514B (Ep. XII Gk)** Migne's `[Add. ἢ]` supplies the comparative particle; rendered with it kept.
- **0514C (Ep. XII Gk)** καθαρισθεῖσα … στήσεται — "having been cleansed, will stand" (Latin *pura consistit*).

## Other

- **0507B** Honorius *cur ista vos detrimenta* — Coustant's note (d) says the sense requires *nos*; rendered
  "why you", as printed.
- **0515A** *consolationibus* — Coustant's note (b) conjectures *consultationibus*; rendered "consolations", as
  printed; his note carries the conjecture.
