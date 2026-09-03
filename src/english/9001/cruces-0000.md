# *Glossa ordinaria*, **Evangelium secundum Marcum** (PL 114) — cruces, chunks 0000–0004

Stint 1 of 5. **Cols 0179A–0192D**, chunks `0000`–`0004`, 5,495 Latin words →
8,042 English words (ratio 1.52–1.56, on the register's expected ~1.5×).
`verify-english.mjs` clean on all five: column anchors, `[n:]` notes, italic spans,
`VERS. n.--` addresses and paragraph counts all 1:1 with the Latin twins.

**Apparatus fired in this range: 3 `[sic:]` · 6 `[var:]` · 1 `[nt:]` · 0 `[cj:]` · 0 `[d:]` ·
0 `[ed:]`.** Notes carried: 170 `[n:]` (+1 converted to `[nt:]`). Guillemets: zero in either
language, in either direction.

---

## §0 · ⛔ PLATE READ OWED — the three `[sic:]`, and I do NOT claim to know whose they are

All three stand on columns nobody has read. Each is a **non-word** — a form that is no Latin
word at all — so Pattern 7 cannot render it and Pattern 12 requires the marker on carried
type; there is no third treatment available inside the conventions. **But addendum A's own
measurement says these are as likely to be OUR corruption as Migne's:** every one of the ten
non-word suspicions in the 2026-08-23 batch was confirmed as the digitization's error, not the
plate's, and eight of 9004's twenty-seven `[sic:]` were withdrawn on exactly this class, every
fall a single word. **Read these three first; I expect some or all to become
`data/tei-patches/9001.json` entries rather than accusations against Migne.**

| col | chunk | printed | what it must be | corpus control |
|---|---|---|---|---|
| 0183C | 0002 | *Femmam* | *Feminam* — "Virum … **Femmam** vero a febribus … curatam" | `Femmam` occurs **once in all 5,276 PL TEI files** (this one). `femin-`/`Femin-` = 645. |
| 0187C | 0003 | *Nunquia* | *Nunquid* — the lemma of Mc 2:19 | `Nunquia` occurs **twice** corpus-wide: here, and 8718 at Mich. 6:7, where the Clementine reads *Numquid*. `Nunquid` = 254 in the chunked Latin alone. |
| 0188A | 0003 | *aestruere* | *destruere* — "apostolos litteram sabbati **aestruere** contra Ebionitas" | standalone `aestruere` occurs **twice** corpus-wide: here, and 8923 quoting Rom 14:20, where the received text is *destruere* and the next clause reads *aedificium destruit*. (The 16 raw grep hits are all *prae-struere*.) |

⚑ **The two 0003 sites share a shape and that is worth a look at the plate in one pass:** both
are a final **-d** standing as **-a** (*Nunquid*→*Nunquia*, *destruere*→*aestruere* is *de-*→*ae-*,
but 8718's twin is the same *-d*→*-a* class). Both twins occur in *other* works, which argues —
without settling — for a source-side class rather than this plate. **I offer no attribution.**
9004 measured translating agents' attribution guesses at 5 right, 9 wrong.

**7a⁗ compliance on all three** — the marker does not swallow the sense:
- 0183C: the marked run was the clause's **object**; "the woman" stands beside it.
- 0187C: the marked run carried the **interrogative**; "Can" stands beside it, and the lemma
  keeps Migne's terminal period rather than a `?` he does not print. Per Pattern 10 the marker
  takes no second italic because it sits inside an already-italic lemma.
- 0188A: the marked run was the clause's **only verb**; "do away with" stands beside it. The
  conjecture is *destruere* and the reason it beats *astruere* (a real word, and the reading a
  bare ae/a spelling would give) is the argument itself: the Ebionites are the party that
  *keeps* the letter and repudiates Paul, so the apostles' plucking **undoes** the letter of
  the sabbath, it does not affirm it — and 8923's twin, at a verse whose received text is
  *destruere*, points the same way. If the plate reads *astruere* the English must be reversed
  to "build up", so this is the one of the three where the plate read changes the *translation*
  and not only the apparatus.

Strip every marker from these five chunks and each sentence still reads aloud without it: no
stranded article, no stranded preposition, no doubled mark. (Test 1, run mechanically.)

---

## §1 · THE LEMMA DIVERGENCE LIST — all 256 italic spans walked (7a″ point 4)

**Brief count check, run first (brief §7a″ addendum):** `data/briefs/9001-lemmata-0000.txt`
declares **256 spans** for chunks 0000–0004. Counting the italic spans in my own Latin gives
**0 + 80 + 45 + 49 + 82 = 256**, and the file's first and last entries are the first and last
spans of my range (0179A *Initium Evangelii* · 0192D *In propria venit*). **The totals agree and
the cut is aligned for this range** — no span is missing from my file and none belongs to the
next stint. (Recorded because the split has been wrong on this very work; on the evidence here
stint 1 is the range it did not damage.)

The pre-scan ordered the work; every span was then read word by word against
`sources/vulgate/clementine-flat.txt` at **the verse actually being glossed**, which is what the
pre-scan's ✓ does not do.

### 1a · The line I drew, stated before the findings so it can be argued with

`[var:]` **fired** where a whole word or clause is **replaced by different matter** that changes
what the verse says. `[var:]` **declined**, and the divergence logged here instead, where the
difference is (i) a **clip** at either end of the quotation, (ii) an **inflection or a single
letter**, or (iii) an **adaptation to the citing sentence** (case, person, or a relative pronoun
bent to the gloss's own antecedent).

⚑ **The reason (ii) is a decline and not a judgement call:** CLAUDE.md records 9003's collation
finding Corpus Corporum departing from Migne at ~3 sites per page, and finding the digitization
**manufacturing a Vulgate divergence** — `judicabit`→`judicavit`, a single letter — that a
collation then dutifully "found." A single-letter `[var:]` on an unread column is that trap
exactly. Six such sites are logged below unmarked, and each is a plate candidate if anyone
wants them.

### 1b · `[var:]` FIRED — six sites

| col | Migne prints | Clementine | why it is material |
|---|---|---|---|
| 0179A | *…et appropinquavit **regnum coelorum*** | Mc 1:15 *appropinquavit **regnum Dei**: poenitemini, et credite Evangelio* | Matthew's formula standing in Mark's verse — **and the gloss's own preceding clause says *regnum Dei***, nine words earlier, so the quotation contradicts the sentence that introduces it. The clause order is reversed too; that is in the marker as a fact, not a theory. |
| 0182A | *Beati pauperes spiritu, quoniam **ipsi possidebunt*** | Mt 5:3 *quoniam **ipsorum est regnum caelorum*** | A conflation with the **next** beatitude (Mt 5:4 *Beati mites, quoniam ipsi possidebunt terram*). Not a clip: a different predicate. The gloss then argues about the earthly kingdom yielding to poverty, so the reader needs to know the printed verb is not Matthew's here. |
| 0185C | *Sobrietatem et **sapientiam** docet, et **scientiam** et virtutem* | Sap 8:7 *sobrietatem enim et **prudentiam** docet, et **justitiam**, et virtutem* | **Two** substitutions in a four-item list — and the gloss's very next clause names the cardinal virtues (*prudentiam, fortitudinem, temperantiam et justitiam*), i.e. the list the Vulgate actually prints. The exposition rests on words that are no longer in its proof-text. This is the range's clearest 7a″ site. |
| 0191B | *Diligite inimicos vestros* ut sitis ***filii Dei*** | Lc 6:35 *eritis **filii Altissimi*** | A different divine title, in a proof-text adduced **precisely** to show that "the name of a son of God is acquired through peace and love." The substituted words are the argument's keyword. |
| 0192B | *nemo dignus inventus est aperire librum **et solvere signacula ejus*** | Apc 5:4 *aperire librum, **nec videre eum*** | A wholly different second member (Migne's is Apc 5:2's). Note it also **removes a *nec***: the Clementine's negative is absent from what Migne prints, so our English is correctly without it — that is what the marker records. |
| 0192D | *qui manducat **corpus Domini** indigne* | 1 Cor 11:29 *Qui enim manducat **et bibit** indigne* | *corpus Domini* is substituted into the protasis, where the received text has the second verb — and the phrase then stands twice in one sentence. Material because the gloss is about eating bread unworthily and the added words are what make it about the Eucharist. |

### 1c · Divergences found and DECLINED — twenty-two sites, with the class

**Clips at either end of the quotation** (Migne's citing practice; convention 3 governs, and
per the ⚑ ruling expansion is not conformation):
- **0179A** *Ecce mitto.* — Mc 1:2/Mal 3:1 read *Ecce **ego** mitto*. The same gloss quotes
  *Ecce ego mitto angelum,* correctly three lines below, which is what makes this a clip.
- **0179C** *Rectas facite semitas.* — Mc 1:3 adds *ejus*.
- **0180A** *Gratia salvati estis* — Eph 2:5/8 *Gratia **enim** estis salvati*, and the words are
  in the other order.
- **0181B** *Hoc sentite in vobis* — Phlp 2:5 *Hoc **enim** sentite*; *Propter quod et Deus
  **illum exaltavit*** — Phlp 2:9 *exaltavit illum*.
- **0181B** *Et baptizatus est in Jordane.* — Mc 1:9 *baptizatus est **a Joanne** in Jordane*.
- **0181D** *Jesus plenus Spiritu sancto* — Lc 4:1 *Jesus **autem** plenus*.
- **0184B** *Nemo principum hujus saeculi cognovit.* — 1 Cor 2:8 opens ***quam** nemo principum*;
  Migne makes the relative clause a sentence.
- **0184C** *Date eleemosynam: et ecce omnia munda sunt.* — Lc 11:41 ends *munda sunt **vobis***.
- **0184D** *Dixit et facta sunt* — Ps 32:9 *Quoniam **ipse** dixit*.
- **0186B** *ne deterius tibi contingat* — Jo 5:14 *ne deterius tibi **aliquid** contingat*.
  ⚑ The first draft here read "lest **something** worse befall thee," which silently restored
  the dropped *aliquid*. Caught and removed; the English now stops where Migne stops.
- **0186D** *Et relictis omnibus secutus est eum* — Lc 5:28 *relictis omnibus, **surgens**
  secutus est*.
- **0189A** *Fili, non sit manus tua porrecta ad **capiendum*** — Sir 4:36 has no *Fili*, sets
  *Non sit porrecta manus tua*, and reads *ad **accipiendum***. A near-synonym plus a vocative
  Sirach uses habitually; the sense of the precept is untouched.
- **0189A** *a latere cadent mille* — Ps 90:7 *Cadent a latere **tuo** mille*; the *tuo* goes
  because the gloss has bent the verse into a relative clause on *cujus*.
- **0192D** *non habebitis vitam* — Jo 6:54 *non habebitis vitam **in vobis***.

**Inflection or a single letter** (the manufactured-divergence class; see 1a):
- **0179C** *custodiunt … exquirunt* — Mal 2:7 *custodient … requirent*: present for future, and
  a different compound of the same verb. Nothing in the gloss (that priests are called angels)
  turns on either.
- **0180D** *Testimonium **perhibuit*** — Jo 1:34 *perhibui*, and *Filius Dei* for Migne's *Dei
  Filius*. Third person for first, because Migne has recast John's testimony into his own
  reporting frame. English cannot render the *Dei Filius* order at all.
- **0186D** *Justus **in primis** accusator est sui* — Pr 18:17 *Justus **prior** est accusator
  sui*. Different word, same sense.
- **0186D** *Fecit **eis** convivium magnum Levi* — Lc 5:29 *Fecit **ei***. One letter, and it
  moves the feast from Christ to the company — the gloss's own next words (*Qui enim Christum
  intus recipit*) favour *ei*. **Left unmarked deliberately**, and it is the single strongest
  candidate in this list for a `[var:]` after a plate read.
- **0187C** *praecedent vos in **regno** Dei* — Mt 21:31 *in **regnum** Dei*.
- **0188D** *Misericordiam **volo*** — Os 6:6 *volui*; the present is Matthew's form of the
  same verse (Mt 9:13, 12:7), which is likelier the source of Migne's wording than a variant.
- **0189B** *magis autem laboret **operans*** — Eph 4:28 *operando*.
- **0191A** *imposuit eis **nomen** Boanerges* — Mc 3:17 *nomina*.
- **0192B** *Fiat contra Dominum semper* — Ps 108:15 *Fiant*.

**Adapted to the citing sentence:**
- **0180B** *In Jordane* addressed to VERS. 5, where Mc 1:5 reads *in **Jordanis flumine***
  (*in Jordane* is verse 9's wording). The gloss is an etymology of Jordan and works either way.
- **0180D** *Ego baptizo vos aqua* (present) against the same chapter's own lemma *Ego
  **baptizavi** vos aqua* at VERS. 8 — Isidore is quoting Mt 3:11, not Mark. Both forms are
  rendered as printed, and they differ in the English as they differ on the page.
- **0180D** *Fortior me* — Mc 1:7 prints *Venit fortior **post** me*; *fortior me* is Lc 3:16's
  and the Greek's. The gloss turns on *fortior*, not on *me*.
- **0181C** *Vidit **apertos coelos*** — Mc 1:10 *vidit caelos apertos*. Word order only, and
  English has no exponent for it; recorded because 7a″'s own worked case (@1079B, *cinis et
  pulvis*) was an order reversal that **did** matter. Here nothing in the gloss depends on it.
- **0185C** ***in qua** corrigit adolescentior viam suam* — Ps 118:9 *In **quo** corrigit …
  viam suam**?***. The feminine is bent onto the gloss's *sublimitas … Scripturae*, and the
  Psalm's question mark is gone. Pattern 8: we do not supply the mark Migne does not print.
- **0184D** *corpora **sua*** — Rom 12:1 *corpora **vestra***, because Migne has recast the
  imperative into an infinitive after *offerre*.
- **0191B** *Mandabo nubibus **meis** ne pluant* — Is 5:6 *nubibus mandabo ne pluant super eam
  imbrem*; the possessive is added, and the gloss is precisely about *him that suspends the
  waters*, so it fits the argument rather than the verse.
- **0191B** *ut leo et bos simul comedant, et lupus cum agno* — Is 11:6–7 compressed and
  re-worded (*leo quasi bos comedet paleas* · *Habitabit lupus cum agno*). This is an allusion
  woven into the gloss's own *ut* clause, not a quotation; Pattern 14 fires on quotations.

**Checked and found to agree with the Clementine EXACTLY** — logged because a findings-only
list cannot be told from a report by an agent that never looked (7a″ point 4). Mc 1:1 *Initium
Evangelii* · *Jesu Christi* · *Filii Dei* · Mt 1:1 *filii David filii Abraham* · Mc 1:2 *Sicut
scriptum est* · Mc 1:3 *Clamantis* · *In deserto* · *Parate* · *Viam Domini* · Mc 1:4 *Joannes*
· *Baptizans* · Mt 10:8 *gratis accepistis, gratis date* · Mc 1:5 *Confitentes* · Ps 95:6
*Confessio et pulchritudo in conspectu ejus* · Lc 1:28 *Benedicta tu in mulieribus* · Mc 1:6
*Et erat Joannes* · *Vestitus pilis cameli* · Mc 1:7 *Solvere corrigiam* · Mc 1:8 *Ego
baptizavi vos aqua* · *Ille vero baptizabit vos Spiritu sancto* · Ps 45:5 *Fluminis impetus
laetificat civitatem Dei* · Apc 2:7 *Vincenti dabo edere de ligno vitae, quod est in paradiso
Dei mei* · Jo 1:14 *Plenum gratiae et veritatis* · Mc 1:10 *Manentem in ipso* · Mc 1:11 *Tu es
Filius meus dilectus* · Mc 1:12 *Spiritus* · Lc 4:1 *et agebatur a Spiritu in desertum* · Mc
1:13 *Quadraginta diebus* · *Eratque cum bestiis* · Mc 1:14 *Postquam autem* · *Praedicans* ·
Jo 18:36 *Regnum meum non est de hoc mundo* · Mc 1:15 *Poenitemini* · Mc 1:16 *Vidit Simonem* ·
Mc 1:21 *Et ingrediuntur* · *Capharnaum* · Mc 1:22 *Erat enim* · Mt 5:21/22 *Audistis quia
dictum est antiquis* · *Ego autem dico vobis* · Mc 1:24 *Quid nobis* · Mc 1:25 *Obmutesce* · Mc
1:26 *Discerpens* · Mc 1:27 *Quidnam est?* · Mc 1:30 *Et statim dicunt ei* · Ps 18:13 *Delicta
quis intelligit? ab occultis meis munda me* · Mc 1:31 *Apprehensa* · *Ministrabat eis* · Mc
1:32 *Vespere autem* · *Afferebant ad eum omnes male habentes* · Mc 1:33 *Ad januam* · Mc 1:34
*Quoniam sciebant eum* · Mc 1:35 *Et diluculo* · Mc 1:38 *Ad hoc enim veni* · Mc 1:39 *Et erat
praedicans in synagogis* · Mt 8:2 *Et ecce leprosus veniens adorabat eum, dicens: Domine, si
vis, potes me mundare* · Mc 1:40 *Et genu flexo* · *Si vis potes* · Mc 1:41 *Extendit manum* ·
*Volo, mundare* · Mc 1:42 *et cum dixisset, statim discessit ab eo lepra* · Ps 113:11 *omnia
quaecunque voluit fecit* · Mc 1:44 *Vide* · *Ostende te* · Mc 1:45 *At ille egressus* · *Ita ut
jam* · Mc 2:2 *Ita ut non caperet* · Mc 2:3 *Paralyticum* · *A quatuor portabatur* · Mc 2:4
*Nudaverunt tectum ubi erat* · Mc 2:5 *Cum autem vidisset* · *Fili* · Mc 2:5 *Dimittuntur tibi
peccata* · Mc 2:7 *Quis potest dimittere* · Mc 2:9 *Quid est* · Mc 2:10 *Filius hominis* · Mc
2:11 *Vade in domum tuam* · Mc 2:13 *Et egressus* · Mc 2:14 *Levi* · Lc 14:33 *qui non
renuntiat omnibus quae possidet, non potest meus esse discipulus* · *Secutus est eum* · Mc 2:15
*Et factum est* · *Publicani* · Mc 2:17 *Non necesse* · Mc 2:18 *Et erant discipuli* · Mt 9:15
*Nunquid possunt filii sponsi lugere quandiu cum illis est sponsus* · Mc 2:21 *Nemo assumentum*
· Mc 2:22 *Sed vinum novum* · Mc 2:23 *Et vellere spicas* · Mc 2:25 *Nunquam legistis* · Mc 2:26
*Sub Abiathar* · *Panes propositionis* · *Et dedit eis* · Mc 2:27 *Homo propter sabbatum* · Mc
2:28 *Itaque Dominus* · Mc 3:1 *Manum aridam* · Mc 3:2 *Et observabant* · Mc 3:4 *Licet sabbatis
benefacere* · *Animam* · *Perdere* · Mc 3:5 *Extende manum* · *Et restituta est manus illi* ·
Lc 3:11 *Qui habet duas tunicas, det non habenti: et qui habet escas, similiter faciat* · Mc
3:6 *Exeuntes autem* · *Cum Herodianis* · Mc 3:7 *Secessit* · *Et multa turba* · Mc 3:9
*Navicula* · *Ne comprimerent* · Mc 3:11 *Et spiritus immundi* · Mc 3:12 *Ne manifestarent* ·
Mc 3:13 *Et ascendens* · Mc 3:14 *Ut essent duodecim* · 1 Cor 14:22 *linguae in signum sunt non
fidelibus, sed infidelibus* · Mc 3:16 *Et imposuit* · Jo 1:42 *Tu vocaberis Cephas, quod
interpretatur Petrus* · Jo 21:18 *Alius te cinget et ducet quo tu non vis* · Mc 3:17 *Et
Jacobum* · Mt 17:5 *Hic est Filius meus dilectus* · Ps 100:1 *Misericordiam et judicium cantabo
tibi, Domine* · Jo 1:1 *In principio erat Verbum* · Mc 3:18 *Et Andream* · *Et Philippum* · *Et
Bartholomaeum* · Mt 5:9 *pacifici, quoniam filii Dei vocabuntur* · Lc 6:35 *Diligite inimicos
vestros* · *Et Matthaeum* · *Et Thomam* · 2 Cor 12:2 *scio hominem in Christo* · 2 Cor 12:4
*quae non licet homini loqui* · *Et Jacobum Alphaei* · *Thaddaeum* · *Et Simonem* · Mc 3:18 *Et
Simonem Cananaeum* · Mt 5:5 *qui lugent, quoniam ipsi consolabuntur* · Ps 105:30 *Et cessavit
quassatio* · Ps 108:14 *Et peccatum matris ejus non deleatur* · Jr 9:23 *Non glorietur sapiens
in sapientia sua* · 1 Cor 1:31 *qui gloriatur, in Domino glorietur* · Mc 3:20 *Et veniunt* · Jo
1:11 *In propria venit, et sui eum non receperunt* · Mc 3:21 *Et cum audissent*.

⚑ **Every re-quotation inside the gloss was then checked against the rendering fixed for its
lemma** (7a″ point 3). The two that matter: 0184D *Volo, mundare* is quoted three times in one
paragraph and reads identically each time; 0189A *licet sabbato benefacere* re-quotes VERS. 4's
*Licet sabbatis benefacere* with **sabbato** for **sabbatis**, and the English follows the
number Migne prints in each place rather than levelling them.

---

## §2 · MIGNE'S CITATION MISPRINTS — rendered as printed, NOT corrected in the text

Citation repair belongs to `data/citation-corrections.json` at index time, never to the running
text (Ruth's standing rule). Five in this range:

| col | Migne's note | the verse actually quoted |
|---|---|---|
| 0180D | `[n: (Joan. III)]` on *Testimonium perhibuit, quia hic est Dei Filius* | John 1:34 |
| 0189A | `[n: (Eccl. IV)]` on *Fili, non sit manus tua porrecta* | Ecclesiasticus (Sir.) 4:36 — Migne's own abbreviation for Sirach, so this may be his convention rather than an error |
| 0190D | `[n: (I Cor. IV)]` on *Alius te cinget et ducet quo tu non vis* | John 21:18 |
| 0192B | `[n: (Num. XXV)]` on *Et cessavit quassatio* | **Psalm 105:30**, verbatim — the Numbers verse (25:8) reads *Cessavitque **plaga***. The words Migne prints agree with the Clementine exactly; only the address is wrong, which is why this took no `[var:]`. |
| 0192D | `[n: (Joan. VI)]` on *In propria venit, et sui eum non receperunt* | John 1:11 (the *other* `(Joan. VI)` in the same paragraph, on *Nisi manducaveritis*, is correct) |

---

## §3 · THIS RANGE'S OWN CRUCES

### 0179A · The prologue chunk, and why its one note became `[nt:]`

Chunk 0000 is ten words: a head and `[n: ( Vide Opera ejus. )]` — Migne does not reprint
Jerome's prologue, he points at it. Pattern 15 decides by content, not length, and Pattern 4
already classes a **cross-reference** (*Vid. notas, ibid.*, *nunc tomo V*) as editorial comment
that is **translated**, against a **locator** (work title + number) that is not. This is a
sentence with a verb, addressed to the reader; it is a locator only in the loosest sense. It is
also the exact shape of the asterisk-layer ruling of 2026-08-24: an editorial cross-reference
gets an English twin **because leaving it Latin-only strands an English-only reader in front of
the only line on his page.**

⭐ **The corpus settles it independently.** 8976 (*Actus Apostolorum*, PL 114, same recension)
opens with the identical device — `## PROLOGUS B. HIERONYMI.` then *Vide inter opera ejus.* —
and its shipped English **translates it**: *See among his works.* There the words are body
italics, here they arrive inside a `[n:]`, so the vehicle differs and the ruling does not.
Rendered `[nt: ( See his Works. )]`, keeping Migne's spacing inside the parentheses and his
capital on *Opera*, which in a cross-reference of this kind names the collected edition.

⚠ **One deliberate divergence from 8976, flagged rather than swept:** its English head reads
`THE PROLOGUE OF THE BLESSED JEROME.` for the same Latin. I have written **`THE PROLOGUE OF
BLESSED JEROME.`**, which is the launch instruction and also the corpus majority for `B.`
(three works: *…OF BLESSED JEROME ON ESDRAS AND NEHEMIAS*, *…ON THE BOOK OF ECCLESIASTES*,
*…ON THE BOOK OF ESTHER*; 8976 is the lone "OF THE BLESSED"). Cross-work harmonization is not
required and I have not proposed one; this is recorded so the difference is known to be seen.

**Heads, and the numerals rule:** `CAPUT PRIMUM.` → `CHAPTER ONE.` · `CAPUT PRIMUM. (cont.)` →
`CHAPTER ONE. (cont.)` (22 corpus precedents for that exact string; the marker is chunking's,
never translated) · `CAPUT II.` → `CHAPTER II.` · `CAPUT III.` → `CHAPTER III.` The corpus was
checked: `CHAPTER ONE.` in 61 works, `CHAPTER XIII.` in 26, **zero** spelled-out forms above ONE.

### 0182A · *transferamur* — the paragraph ENDS WITH NO FULL STOP, and so does ours

*…a quibus corpore absoluti in coelum transferamur* — Migne closes VERS. 13's second gloss with
no terminal mark at all. Pattern 8: never supply. The English stops in the same place, in the
same way. **A later reader or a proof-pass will read this as our typo; it is not.**

### 0182A · *mysterium angelorum* — a real word, rendered as printed, NOT emended

*mysterium angelorum meremur, a quibus corpore absoluti in coelum transferamur.* The relative
*a quibus* wants persons, the verse being glossed is *et angeli **ministrabant** illi* (Mc
1:13), and **ministerium** is the word the sense asks for — "we deserve the **ministry** of
angels, by whom…". Rendered **"the mystery of the angels"**, which is what the page says.
*mysterium* is a perfectly good Latin word occupying its slot, so Pattern 12 has nothing to
wrap and addendum A governs: **a real, well-formed word that reads oddly is Migne's until a
plate says otherwise.** The conjecture is *ministerium* and it is **not adopted**. Plate
candidate; the two words differ by three letters, so it is worth the look.

### 0184B · *Neque enim **solo** illius divinitatis auctoritas* — the case has no host

*solo* is ablative, and there is no ablative for it to agree with: *per hoc* is accusative and
*auctoritas* is the nominative subject. *solum*, the adverb, is the obvious suspect and is
**not adopted**. Rendered by taking *solo* with the instrument — **"For not by this alone is
the authority of his divinity shadowed forth, but also the humility of his voluntary
emptying"** — which is the one construction the printed words allow.

⚑ **This site is a test-2a trigger and was worked as one:** a negative (*Neque*) with *solo*
adjacent and a `verum etiam` correlative. The correlative pivots on **what** is shadowed forth
(*auctoritas* … *verum etiam … humilitas*), which puts the negative on ***solo***, not on
*adumbratur*. Rendering it "the authority is **not** shadowed forth" would have been the 8990
@0614B defect exactly, and it reads better than the true one.

### 0187C · *Publicani* — two parses, both construe, neither chosen silently

*…nec ut Pharisaei calumniantur in vitiis permanentes, sed poenitentes.* *permanentes* and
*poenitentes* are nominative **or** accusative plural, so either (a) the converted publicans do
not slander as the Pharisees do, **who remain in vices**, but **repent**; or (b) they do not
slander, as the Pharisees do, **those remaining in vices**, but **those repenting**. Rendered
**"and slander not as the Pharisees do, remaining in vices, but repenting"** — English
participles dangle exactly as the Latin ones do, so the ambiguity survives into the English
rather than being adjudicated in it. (a) fits the paragraph's argument better; nothing decides it.

### 0187A · An open parenthesis Migne never closes — NOT supplied

*Ipse (secundum hoc quod scriptum est: `Justus in primis accusator est sui`; Matthaeum se et
publicanum nominat…* The parenthesis opened after *Ipse* is never closed anywhere in the
paragraph, and a semicolon stands where the close belongs. Mirrored: the English opens the
parenthesis in the same place and leaves it open, per Pattern 5's corollary on unclosed
quotations, which is the same principle. Plate candidate.

### 0188C · *Abrathar* against the lemma's *Abiathar* two lines above — no marker

*Achimelech pater, et **Abrathar** filius* — and the verse address five words earlier is
`VERS. 26.-- *Sub Abiathar,*`. Corpus-wide: `Abrathar` once (here), `Abiathar` seven times.
⛔ **No `[sic:]`, and the reason is the Pattern 12 test rather than the frequency count: a
proper name renders in place.** "Abrathar the son" is perfectly good English; nothing has to be
carried untranslated, so there is no carried type for the marker to wrap. Rendered as printed,
logged, and worth the plate read while §0's are being done.

### 0189C · *in crimen reputant., quod* — a period AND a comma, both carried

Our Latin prints `reputant., quod` at VERS. 5. Pattern 8 forbids deleting either mark, so the
English carries both: *"they reckon it for a crime., that at his word the hand was healed."*
It will read as our defect and it is not ours. ⚠ **Very likely the digitization rather than the
plate** — a stray period is the classic transcription artifact — but that is a guess and I make
no claim. Plate candidate. The sentence's own parse is also loose: *Magnum studium nequitiae*
is taken as an exclamatory nominative in apposition, with *quod…* as the object of *in crimen
reputant*; the alternative (*Magnum studium nequitiae* as the object) makes them reckon the
zeal, not the healing, a crime, which the argument denies.

### 0191A · *in pluviam spargerent in terris. quoniam Dominus* — lowercase after a full stop

Carried as printed, both the stop and the lowercase opening. Same class as the above and the
same caveat: an artifact of either layer, unread.

### 0183A · *Pharao dimissus ab Israel, persequimur eum*

"Pharao, let go by Israel, we pursue him." The Exodus logic runs the other way (Pharaoh pursues
Israel), and *persequitur* would give it — but *persequimur* is a real, well-formed first-person
plural in a sentence whose subject shifts to "we" for the moral application (*diabolus contemptus
surgit in scandala* follows). Rendered as printed; *persequitur* named and **not adopted**.

### 0190B · *Uterque* with plural participles

*Uterque et plagas habentes, et immundi spiritus.* A singular pronoun over two plural members.
Rendered **"Each of the two, both they that had plagues, and the unclean spirits"** — the
number stands in the English because English has an exponent for it, unlike the gender
mismatches Pattern 9 exempts. No emendation; nothing to mark.

### 0180B · *commuta* — an imperative in a resumption tail

*…et sic mundatos Christianam religionem promittentes in Ecclesiae membra **commuta**.* Second
person singular imperative closing an abridged Bede extract whose frame has been removed by the
*usque ad*. *commutat* would give a third-person indicative. Rendered as the imperative Migne
prints — "and so change those who are cleansed…" — under the standing rule that **the `usque ad`
formula removes words, it does not suspend grammar**; a tail that reads oddly is not evidence the
abridgment made it odd. Not adopted: *commutat*.

### 0180C · *qui baptismum, etc.* — NO VERB SUPPLIED

*Debent enim melioris vitae novitatem promittere, qui baptismum, etc.* The relative clause is cut
off before its verb by Migne's own *etc.* The English stops where he stops — "who baptism, etc."
— under Tobit's rule that **no verb is ever supplied to complete an abridgment**. It is abrupt
because the plate is abrupt. Same treatment at **0190D**, *ut virtus ostensa fidem, etc.*, which
is rendered "that the power shown, faith, etc."

### ⚑ *usque ad* — 38 formula occurrences and TWO look-alikes, decided per occurrence

Brief addendum D. In this range the plate's own italics do the work and were used as the
detector, then each was checked from what stands on either side:
- **38 italic `*usque ad*`** are the abridgment formula, rendered **`*as far as*`** — the
  corpus's fixed English for it (1,875 instances; zero alternatives anywhere).
- **0180D, roman:** *…etc., `*usque ad*` et **usque ad** centum quadraginta quatuor millia
  pervenit.* The second one is **not** the formula — it is *reaching up to* the 144,000 of the
  Apocalypse, and it is set roman while the formula beside it is italic. Rendered as ordinary
  prose.
- **0181B and 0191B, roman `usque:`** — a bare *usque* with a colon, not *usque ad*, introducing
  the closing words of an elided quotation (*Propter quod et Deus illum exaltavit*; *quae non
  licet homini loqui*). Rendered "even to:" in roman, distinct from the formula's italic.

### ⚑ Unexpressed subjects supplied, and what fixed each one

Every "he/she/it/they" the Latin does not print, named:
- **0181A** *saltus dat, culmina pratorum carpit, palmas in vertice portat … summatim gustat* —
  four third-singular verbs whose subject is ***cervus***, from the simile's own opening
  (*Sicut cervus*, Ps 41:2); *palmas in vertice* are a stag's antler-palms, which is the tell.
  Named as "the hart" so no bare pronoun carries it.
- **0180D** *…et usque ad centum quadraginta quatuor millia **pervenit*** — the subject fell
  inside the *usque ad* elision and is genuinely unrecoverable. Two readings construe: *gratia*
  (the grace the question is about) and *Ille qui* (the last expressed nominative before the
  cut). Rendered "it reaches", which takes the first. **Nothing decides it and the crux is the
  record**, per the brief's instruction where two readings both construe.
- **0184C** *Leprosus … mundatur **qui** non vult mortem peccatoris* — the relative cannot be
  the leper: the words are God's, from Ezek 33:11, and the antecedent is *Domini* four words
  back. Rendered "is made clean **by him who** willeth not the death of the sinner," binding it
  explicitly rather than leaving an English relative that would attach to the leper. This is
  Ruth @0538C's class (the Noemi site) and it was worked the same way — from the verse the words
  come from, not from the sentence.
- **0186A** *Cum grabato ante Jesum **deponitur*** — the paralytic, from *Paralyticum* at VERS. 3
  and *grabato* itself.
- **0185C** *Sobrietatem et sapientiam **docet*** — Wisdom, the subject of Sap 8 and of the
  book Migne names in the citing sentence.
- **0184D–0185A** *tribuit · dubitat · praesumit · tangit · probat* — the leper for the first
  three, Christ for the last two; the switch is marked in the Latin by *Dominus legis est*.

### ⚑ Negation — every particle named to its host, and the four correlative sites

135 negative particles across the four gloss chunks, each carried, none supplied. The four that
sat on the test-2a trigger (a negative on a verb with a quantifier or correlative adjacent) were
each proved from the sentence's **structure**, not from what read well:
- **0182C** *non ex majestate sensuum, sed ex verborum judicant utilitate* — host is the
  prepositional phrase, proved by `sed ex … utilitate`; the verb *judicant* stays affirmative.
  (This is 8960 @0740B's model case, handled the same way.)
- **0182D** *non subductis ad terram navibus tanquam cura redeundi, sed tanquam vocantem et
  jubentem secuti sunt* — the `sed` pairs the two *tanquam* phrases, so the negative governs the
  first of them and **not** *secuti sunt*: "they followed him, not with the ships drawn up to
  land as though with a care of returning, but as one calling and commanding."
- **0185A** *Non ideo tangit, quia sine tactu curare non poterat, sed sic probat* — host is
  *ideo*, i.e. the reason, not the touching. He **does** touch.
- **0184B** *Neque enim solo …* — see the entry above.
Also worked, all straightforward `non … sed` on a noun or a phrase rather than the adjacent
verb: 0179C *non societate naturae, sed officii dignitate* · 0180B *non mundatis non proficit,
sed in deterius mutat* (two negatives, two different hosts) · 0183B *Non est hic voluntatis
confessio, sed necessitatis extorsio* · 0185B *non legis ordine, sed gratia* · 0185C *Non
omnibus manifestatus est Jesus … sed his* · 0186D *non solum cives, sed et maris habitatores* ·
0190B *non solum timore coacti ad procidendum, verum etiam ad confitendum* · 0190B *Non solum
daemones … sed et apostoli* · 0191C *non solum remissio peccatorum, sed etiam in apostolorum
numero esse* · 0190D *linguae in signum sunt non fidelibus, sed infidelibus*.

### ⚑ Punctuation — compared BAND BY BAND, not by total (test 3), and it caught nineteen sites

Column anchors partition both twins identically, so `:` `;` `?` `!` were counted per band across
all 41 anchors and every mismatch closed. **Nineteen supplied marks were found and removed** —
sixteen semicolons and three colons that English habit had introduced where Migne prints a comma
or nothing (e.g. 0179A *Salvator Latine, Christus Graece* had become "in Latin; Christus"; 0186A
*Mira humilitas, despectum* had become "humility: him"), plus **one colon restored** at 0190B
(*in eis daemones: non solum*) that had been softened to a comma. **The totals had NOT cancelled
here, but a per-chunk total would still have hidden the 0190B restoration behind the removals in
the same chunk** — which is the reason the test is per band. Final state: **zero mismatched
band/mark pairs in all five chunks.**

Question marks: 6 in the range, all direct questions, all preserved in place (0180D *Quis
fortior est gratia…?* · 0182C *Quem non inebriat eloquentia saecularis?* · 0183A *Quidnam est?*
· 0183D *Delicta quis intelligit?* · 0188C *An non Davidem … meministis?* · 0188D *cur in his
causam improbatis…?*). **No Pattern 8b site exists in this range**: the one *Quaeritur* is at
0182D (*Quaeritur quomodo primum Petrum … vocaverit*) and Migne closes it with a **period**, so
it is rendered as an indirect question with no mark and no recasting. The single `!` (0189A
*quanto magis Filius hominis verus Rex et Sacerdos!*) is preserved.

### ⚑ Pattern 17 — thou/you

*thou* throughout for a printed singular: 0185A *Vides*, 0187D *agnosceres*, 0188D *Non te
turbet*, 0190D *te attentum reddit* and Jo 21:18's *quo tu non vis*. *you* for the printed
plural at 0188C (*meministis*, *improbatis* — the Pharisees) and inside quoted scripture that is
plural (*gratis accepistis, gratis date*; *Diligite inimicos vestros*; *Nisi manducaveritis*).

---

## §4 · SECTIONS READ CLEAN, AND CANDIDATES REJECTED WITH REASONS

**Read clean** — walked line by line and nothing raised: chunk 0000 entire · 0179B–0180A
(VERS. 1–3, the Isidore etymologies) · 0181C–0182A (VERS. 10–13) · 0183B–0183D (VERS. 24–33) ·
0186B–0186D (VERS. 6–13, the Arian polemic and the five causes) · 0188A–0188B (VERS. 21–23
after the *aestruere* site) · 0189D–0190A (VERS. 6–9) · 0191C–0192A (the apostle etymologies
Philip through Thaddeus) · 0192C (the Judas etymology).

**Rejected, with the reason:**
- ***Potinum*** (0185A) for *Photinum* — Migne's spelling of Photinus, an attested Latin form of
  the name and the sort of orthography Pattern 9 exempts. Rendered "Potinus". No marker, no crux
  beyond this line.
- ***calcamentorum*** (0180D) for *calceamentorum* — attested medieval orthography (Pattern 9).
  Rendered normally, no italics.
- ***convexans*** (0183B) — flagged and dropped: Migne himself frames it as a variant reading
  (*sicut quidam codices habent*), so it is a reported reading, not a defect, and *convexare* is
  attested late Latin. Rendered "shaking".
- ***Scariotem* / *Scarioth*** (0192B–C) — Migne prints both forms within four lines. Both are
  kept ("Scariot" for the accusative lemma, "Scarioth" for the indeclinable), on Ruth's *Lia*
  precedent that Migne's name-forms stand. Not an inconsistency of ours.
- ***Andraeas* / *Andream*** (0182B, 0191B) — spelling variation in Migne; "Andrew" throughout,
  since English has no exponent and no gloss depends on it.
- **`(cont.)` on the repeated CAPUT PRIMUM head** (chunk 0002) — runbook false positive 7. Not a
  defect, marker not translated.
- **Column-band arithmetic** — the range runs 0179A→0192D with bands appearing as Migne set
  them; no gap was reported and none should be (runbook false positive 1). No text breaks
  mid-word or mid-construction across any anchor in this range. ⚑ Two anchors DO split a
  construction and were placed to match: `non [0179C] societate naturae` and `non [0185A]
  obsequitur legi`, both rendered with the anchor inside the English construction at the same
  juncture (the 8995 @0605B precedent). Every anchor was checked against **the word it stands
  beside**, not merely for presence and order (test 2b).
- **Pattern 4 `[f:]` inline locators** — not applicable, this is lemma-and-gloss commentary
  (runbook false positive 4). None tagged.
- **A lemma expanded vs. a one-word lemma left as it stands** — not an inconsistency; the two
  are different classes and contrasting them has been declined three times. Expanded here as
  fragments: *Non necesse* → "They have no need" · *Quid est* → "Which is easier" · *Nemo
  assumentum* → "No man seweth a piece" · *Apprehensa* → "Taking her by the hand" · *Cum
  sabbatis* → "When on the sabbath days." Left as they stand, because nothing is elided:
  *Clamantis* · *Parate* · *Joannes* · *Baptizans* · *Spiritus* · *Poenitemini* · *Obmutesce* ·
  *Discerpens* · *Paralyticum* · *Fili* · *Levi* · *Publicani* · *Animam* · *Perdere* ·
  *Secessit* · *Navicula* · *Thaddaeum* · *Jacobum* · *Joannem* · *Filii*.
- **Suspiciously tidy forms** (brief §4, the normalization class): the neighbours of every line
  examined closely were read in the same look, per addendum C. Nothing struck me as tidied —
  but that is a negative recorded, not a clearance: a normalized form reads perfectly and the
  only handle is a tidy word in a rough passage. The roughest passages here (0189C's
  `reputant.,`, 0191A's lowercase *quoniam*) are rough in their punctuation, not their words.

---

## §5 · WHAT I WANT THE PLATE READ FOR, in priority order

1. **0183C *Femmam* · 0187C *Nunquia* · 0188A *aestruere*** — the three `[sic:]`. Expect
   withdrawals; expect tei-patches. **0188A also decides the English**: *destruere* gives "do
   away with", *astruere* would reverse it.
2. **0182A *mysterium*** for *ministerium*, and **0188C *Abrathar*** for *Abiathar* — real
   words, no markers fired, both plausibly ours.
3. **0186D *Fecit eis convivium magnum Levi*** — one letter against the Clementine's *ei*, and
   the strongest declined `[var:]` in the list.
4. **0189C `reputant.,`** and **0191A `in terris. quoniam`** — punctuation artifacts of unknown
   layer; cheap to settle on the same page pass as (1) and (2), since 0188A–0189C sit together.
5. **0184B *solo*** for *solum* — three letters, and the case has no host on the page.
6. **0187A** — the unclosed parenthesis after *Ipse*, to see whether Migne closes it and our
   file lost it.

⚠ The launch brief records that **our PL 114 scan clips both margins on p. 95 (cols 179/180)**,
losing 2–4 characters off the right column's line-ends. Nothing I have raised falls in
0179–0180 except the *calcamentorum* spelling, which is declined anyway — so the clipping should
not obstruct any of the six above. Per the two-witness rule, `data/volumes.json` lists PL 114's
other scans if a line will not come clear.
