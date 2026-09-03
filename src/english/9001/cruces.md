# Cruces — 9001, *Glossa ordinaria*, **Evangelium secundum Marcum** (PL 114, cols 0179A–0244C)

Merged from the five translation stints' files (`cruces-0000`, `-0005`, `-0010`, `-0015`,
`-0020`) **after the whole apparatus had been read at Migne's plate**. The stints' own
sections are preserved below, verbatim and unabridged, because their reasoning is the record
of how each reading was reached. **Where a stint's attribution CLASS disagrees with the plate,
the plate governs, and §0 says so site by site.** Nothing below §1 has been silently altered.

This is a nineteenth-century abridged recension of the marginal gloss: a `VERS. n.--` address,
the Vulgate words being glossed in italics, then the comment, with attribution sigla (`BEDA.`,
`HIER.`, `ISID.`, `RAB.`) arriving as ordinary notes. Migne's attributions in this recension
are known to be unreliable, and passing a siglum through is not endorsing it.

---

## §0. THE PLATE READ — what it settled, and what it overturned

**Source, and why it is not our usual one.** Our on-disk PL 114 scan
(`raw/scans/pl114/patrologiaecurs06saingoog.pdf`) **clips both margins through Mark's range**,
badly enough to eat whole words — 2–4 characters off the right column's line-ends at p.95,
3–6 off the left column's line-starts at pp.114 and 118. That was recorded as a caveat at
chunking, before it could bite. The read therefore used a **second witness**: archive.org
**`patrologiaecursu0114mign`**, a different copy of PL 114, colour, 2215×3603, clean at both
margins. Same remedy that settled all seven contested markers on PL 196 (2026-08-31).

    https://archive.org/download/patrologiaecursu0114mign/page/n<N>.jpg

**leaf n = (column + 11) / 2**, calibrated against the **printed corner numbers** at n95
(179/180), n115 (219/220) and n126 (241/242) *before* any read — never from the digits in the
identifier, which name the item and not the volume. ⚠ The endpoint returns HTTP 200 with an
**empty body** to a bare curl; it needs `-L` and a browser user-agent. A usable witness would
otherwise have been discarded as having no page images.

**23 leaves, 29 markers, all read.** Recorded in `data/plate-reads.json` under `9001`.

### The result

| class | fired | confirmed as Migne's | withdrawn as ours |
|---|---|---|---|
| `[var: …]` — a quoted clause | 19 | **19** | **0** |
| `[cj: …]` — a conjecture on his text | 2 | **2** | 0 |
| `[sic: …]` — a single word | 8 | 1 | **7** |

**The 11535/11550/9004 asymmetry again, and at full strength. Every marker aimed at a quoted
clause was Migne's. Seven of eight aimed at a single word were ours.** Suspicion of a word is
suspicion of our file; suspicion of a clause is evidence about Migne.

### ⚠ BUT THE RATE IS NOT COMPARABLE TO 9004's, AND MUST NOT BE QUOTED AS IF IT WERE

9004 withdrew 8 of 27 `[sic:]`; this work withdrew 7 of 8. **The stints here were briefed on
addendum A and deliberately did not fire on the non-words they were most confident about** —
two of the five fired zero `[sic:]`, logging their non-words as cruces and asking for the
plate instead. The eight that were fired are a residue, not a sample. The direction agrees
with the earlier works; the denominator does not.

⭐ Stint 1 predicted its own result in its §0, before any plate was pulled: *"I expect some or
all to become `data/tei-patches/9001.json` entries rather than accusations against Migne."*
All three of its `[sic:]` fell. Stint 3 named its likeliest withdrawal by name and was right.

### ⭐⭐ THE ONE THAT SURVIVED IS THE INTERESTING ONE

**0203A `magnitudino`** — `magnitudino signi notesceret`. A genuine non-word, and **Migne
prints it.** Addendum A's measured claim was that non-word suspicions came back **10 for 10**
as the digitization's corruption. This is the first counter-example in the series. **A
non-word can be his**, and the rule is therefore a prior, not a law.

### The seven withdrawals, and what each cost to find

| col | ours | the plate | shape |
|---|---|---|---|
| 0183C | `Femmam` | **`Feminam`** | `-in-` lost |
| 0187D | `Nunquia possunt` | **`Nonquid possunt`** | see below — the obvious patch was wrong |
| 0188A | `aestruere` | **`destruere`** | `de-` read as `ae-`; **decided the translation** |
| 0207D | `serminobusque` | **`ser-` / `monibusque`** | mangled at Migne's line break |
| 0210C | `Ex exspuens` | **`Et exspuens`** | `t` read as `x` in the lemma |
| 0212B | `vineunt` | **`vincunt`** | `c` read as `e` |
| 0214D | `Hoc genus nonullo` | **`Hoc genus in nullo`** | preposition fused in, a letter dropped |

⭐ **0188A decided the translation, exactly as the stint said it would.** It flagged that
*destruere* gives "do away with" while *astruere* would reverse the sense, and declined to
assert which. The plate reads *destruere*; the rendering stands.

⛔ **0187D: THE OBVIOUS PATCH WAS THE WRONG ONE.** Our `Nunquia` is corrupt, but Migne's lemma
reads **`Nonquid`** — with an *o* — while his own Matthew quotation **eleven words later**
reads `Nunquid`. Patching to `Nunquid` would have conformed the lemma to his quotation and
printed a word he does not set at that spot. ⚑ Note what this does to a familiar argument:
"the correct form prints eleven words later" is the reasoning 9004 identified as a failed
attribution test, and here the two forms **genuinely differ on the page**. Migne's own
`Nonquid`/`Nunquid` inconsistency is his; it is owed a `[sic:]` and none is fired.

### ⭐⭐⭐ TWO REAL DEFECTS THAT NO MARKER POINTED AT

Both found by reading the **whole line** while checking something else four words away —
the brief's addendum C, earning its place twice on one work.

- **0203A `cursus habentis saeculi`, where Migne prints `labentis`.** A real, well-formed
  word, so no corpus argument could have touched it, and addendum A's rule sent stint 2 to log
  it as a crux and ask for the plate rather than accuse Migne on the strength of an argument.
  **The rule worked exactly as designed.** English repaired: "the course of the passing age",
  not "the age that now holds".
- **0202D `multae. fidelium catervae`.** Migne sets it hyphenated across a line break —
  `mul-` / `tae fidelium catervae` — with **no full stop**. The stop is the digitization's, at
  that same break. Stint 2 carried it faithfully under Pattern 8 and **said plainly it could
  not tell whose it was**, which is the right behaviour; the English was otherwise about to
  publish "many. bands of the faithful".

**Both stint behaviours are the ones to keep.** Neither fired a marker, both named what they
could not settle, and both were right to leave it to the plate.

### Two silent normalisations — Migne's reading restored, a `[sic:]` owed

Corpus Corporum does not only corrupt; it also tidies. **Neither of these was flagged by
anyone, and nobody could have flagged them: a normalised form reads perfectly.**

- **0185D** — Migne sets the italic lemma **`A quator portabatur`** and his roman gloss **on
  the same line** reads `Quia quatuor virtutibus`. Both forms in his own type, directly
  comparable: the ideal control, and the same shape as 8993 @0650A (`dia`/`die`). Confirmed
  at 4×. CC supplied the *u*, so our Latin held a word Migne does not print.
- **0203A** — Migne sets **`Pascha cruxifixum Dominum`**; CC tidied it to `crucifixum`.
  Confirmed at 4×. Surfaced only because the whole line was read for `cursus labentis`, four
  words away.

⚑ **Each is owed a `[sic:]`, and neither is fired here.** Firing one is a fresh public claim
per site, and that is Wilson's call, not the merge's.

**11 TEI patches** in `data/tei-patches/9001.json` — 9 `corrupted`, 2 `normalised`. No chunk
boundary moved. Every withdrawn marker's **rendering** was checked, not merely unmarked:
0210C's lemma needed "And spitting" restored once the `[sic: Ex]` came out.

---

## §1. WORK-WIDE CONVENTIONS — reconciled at the merge, and now settled

Five stints could not see one another, and they diverged. Each axis below was tested **against
the Latin** before it was called drift, per the brief's rule that a control must be the same
class as the thing it controls. **Do not re-open these; a later sweep that churns them is
undoing measured work.**

### 1. The commentator's own voice is not archaised

Stint 5 rendered the metalanguage verb **`saith`** eight times (`Luke saith`, `as Matthew
saith`, `as the Apostle saith`, and one lemma). The other four ranges use **`says`** 51 times
and `saith` **zero**, on the same `dicit`/`ait` — and stint 5 itself used `says` and `said`
elsewhere, so it was inconsistent within its own range. `translation-style.md` forbids
archaising the gloss voice. **All eight normalised to `says`/`said`.** This is the 9004 stint-4
defect (168 `-eth` forms) in milder form.

⚑ Everything else that looks archaic in this work is **inside quoted scripture** and is left:
47 `-eth` forms, of which the italic-membership test found only a handful outside a quotation,
and those sit in unitalicised scripture (Ezek 33:11, 1 Cor 2:9) where 9004's ruling leaves them.

### 2. *turba* → **crowd**; *multitudo* → **multitude**

*turba* was rendered **crowd** (~20 sites), **throng**, and **multitude** across the ranges.
The decisive site is 0211C, where one sentence prints **both** words — `Turba multa triduo
Dominum sustinet, cum multitudo fidelium…` — and the English rendered them **identically**.
Six sites repaired; the three surviving "multitude"s all render `multitudo`.

⚠ **"Throng" was NOT drift and was left alone.** It renders the **verb** `comprimere`
(`ne comprimerent eum`), not the noun `turba` — a different class, and contrasting the two
would have manufactured an inconsistency that is not there.

### 3. *daemonium* → **demon**; *diabolus*/*satanas* → **devil**

Both English words were in use for `daemon-`, twice **within a single chunk** (0002, 0010),
while `diabolus` was consistently "devil". Eight sites repaired. Every surviving "devil" now
sits in a chunk where `diabolus` or `satanas` is present. ⚑ "Devils" for *daemonia* is also
the Douay rendering, so this was mild conformation to the familiar English Bible as well as
internal drift.

### 4. *gentes* → **Gentiles** in the typology, **nations** in the generic sense; *natio* → **nation**

The 9004 axis. 9004 settled on "gentiles" *after checking that no `natio` occurs in the work*,
so nothing was flattened. **Mark does print `natio` — twice — and one of them settles the
convention mechanically: 0243B reads `Omni nationi gentium`, both words in a single phrase.**
They cannot share an English word.

So: `natio` is always **nation**; `gentes` in the **Judaei/gentes typological opposition** is
**Gentiles**; `gentes` in a plainly generic sense keeps **nations** — the peoples descended
from Noah's sons (0198B), Judea distinguished from the surrounding lands (0217B), and the
scripture phrases `omnes gentes` at Matt 28:19 and Mark 13:10, which two different stints
rendered identically without conferring. Two typological sites were corrected to "Gentiles"
(0197D `per gentes praedicant`, 0207B `ad salvandas gentes`). Singular `gens` of the Jewish
people ("their own nation", 0224C, 0227A) is a third class again and stands.

⚑ `Ethnicus` at 0235D → "the heathen" is a fourth Latin word and is not part of this axis.

### 5. Not drift, checked and left

*mysterium* / *sacramentum* map to **mystery** / **sacrament** at near-perfect 1:1 in every
range — a useful control, because it shows the five stints *could* agree, and therefore that
the four axes above are real divergence rather than noise.

---

## §2. THE STINTS' OWN FILES, VERBATIM

Preserved unabridged. Where §0 overturns a stint's attribution, §0 governs — but the
reasoning is kept because it is the record of how the reading was reached, and because on
this work the stints' *conclusions* were mostly right where their *attributions* were not.


---

<!-- ===== stint file: cruces-0000.md, verbatim ===== -->

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

---

<!-- ===== stint file: cruces-0005.md, verbatim ===== -->

# Cruces — 9001 *Evangelium secundum Marcum* (Glossa ordinaria), chunks 0005–0009

Stint file. Cols **0193A–0205A**, CAPUT III (tail) through CAPUT VI, 4,786 Latin words,
**187 italic spans** (every span the launch brief lists for this range except the fifteen at
0205A that open CAPUT VII — those belong to chunk **0010**, not to this stint; see §6.1).

Written to be merged with the other four stints' files. Nothing below has been silently
altered after the fact.

---

## §1. THE POLICY THIS STINT APPLIED, stated before the findings so it can be judged

1. **Pattern 7 throughout.** Every printed reading is rendered as printed. Where a real,
   well-formed Latin word reads oddly, it is rendered as printed and logged here **with no
   marker**, however good the internal argument — per addendum A of the brief and the launch
   instruction. Ten such sites are listed in §4.
2. **Markers fired: one `[sic:]`, three `[var:]`, zero `[d:]`, `[ed:]`, `[cj:]`.** The
   `[sic:]` sits on a **non-word** (§3.1). The three `[var:]` each rest on
   `sources/vulgate/clementine-flat.txt`, cited by book chapter:verse, and each sits where
   **the gloss's own exposition turns on the divergent word** — that is the bar this stint
   used, and it is stated here so a reader can see which divergences were *not* marked and why.
3. **Divergences that are real but do not bear on the gloss take no marker** — orthography,
   word order, a dropped *autem*, a compressed citation, a wrong `[n:]` reference. They are all
   listed in §2 anyway, because a list of findings alone cannot be told apart from a report by
   an agent that never looked.
4. **Attribution is never presented as settled.** Where a defect could be Migne's type or Corpus
   Corporum's transcription, both are named and neither is asserted. (9004: the stints' guesses
   about whose a defect was were wrong 9 times in 14.)

---

## §2. THE LEMMA DIVERGENCE LIST — all 187 spans, verdict for each

Verdicts: **=** agrees with the Clementine exactly (allowing *coeli/caeli*-class orthography
and initial capitals) · **frag** a clipped lemma, agreeing so far as it goes · **DIV** a real
divergence, itemized below the table · **ref** the wording agrees but Migne's `[n:]` locator
does not resolve to it.

### 2.1 Chunk 0005 — CAPUT III tail, cols 0193A–0194A (16 spans)

| col | printed span | Clementine | verdict |
|---|---|---|---|
| 0193A | *Et Scribae.* | Mc 3:22 *Et scribae* | = |
| 0193A | *Scribae,* | Mc 3:22 | = |
| 0193A | *Ab Hierosolymis.* | Mc 3:22 *qui ab Jerosolymis descenderant* | **DIV** (a) |
| 0193A | *Beelzebub habet.* | Mc 3:22 | = |
| 0193A | *Quomodo potest Satanas,* | Mc 3:23 | = frag |
| 0193A | *Et tunc domum ejus diripiet.* | Mc 3:27 | = |
| 0193A | *Qui autem blasphemaverit.* | Mc 3:29 | = frag |
| 0193C | *usque ad: Qui enim fecerit et docuerit…* | Mt 5:19 *qui **autem** fecerit* | **DIV** (b) |
| 0193C | *Qui blasphemaverit in Spiritum sanctum vel verbum,* | Mt 12:31–32 | **DIV** (c) |
| 0193C | *In aeternum.* | Mc 3:29 | = |
| 0193C | *Reus erit aeterni delicti.* | Mc 3:29 | = |
| 0193D | *Fratres.* | Mc 3:31 *et fratres* | = frag |
| 0193D | *Quae est mater.* | Mc 3:33 *Quae est mater mea et fratres mei?* | = frag |
| 0193D | *Honora patrem et matrem* | Ex 20:12 *Honora patrem **tuum** et matrem **tuam*** | **DIV** (d) |
| 0193D | *Qui amat patrem aut matrem plus quam me, non est me dignus* | Mt 10:37 | = |
| 0193D | *Ecce mater mea,* | Mc 3:34 | = frag |

- **(a) 0193A *Ab Hierosolymis.*** The Clementine spells *Jerosolymis*, and **Migne's own gloss
  prose four lines later spells it *Jerosolymis* twice** (*a Galilaea et Jerosolymis* · *Scribae
  ab Jerosolymis*). Latin orthography of a proper name has no English exponent (Pattern 9 family)
  and rendering the lemma "Hierosolyma" against the prose's "Jerusalem" would manufacture an
  inconsistency inside one paragraph. **Rendered "From Jerusalem." in both places; no marker.**
- **(b) 0193C *Qui enim fecerit*** for the Clementine's *Qui autem fecerit* (Mt 5:19). One
  particle, no change of assertion. **English reads "For he that shall do and teach"** — note that
  8947/0011 renders the same verse "But he that shall do and teach," from *its* plate; the two
  Englishes correctly differ. No marker.
- **(c) 0193C *Qui blasphemaverit in Spiritum sanctum vel verbum,* etc.**, cited to Matth. XII.
  Mt 12:31–32 reads *Spiritus autem blasphemia non remittetur* and *qui autem **dixerit** contra
  Spiritum Sanctum*; Migne's cue **conflates** 12:31 with the *verbum contra Filium hominis* of
  12:32 under one verb. **Declined a `[var:]`:** the span is a cue closing in *etc.*, the gloss
  hangs on the part elided (*neque in hoc saeculo neque in futuro*), and Pattern 14's "received
  reading" cannot be stated cleanly for a conflation. Rendered as printed; logged here.
- **(d) 0193D *Honora patrem et matrem*** for Ex 20:12 *Honora patrem tuum et matrem tuam* — the
  possessives dropped, i.e. the New Testament's own citation form (Mt 15:4, Mc 7:10). Rendered as
  printed; no marker.

### 2.2 Chunk 0006 — CAPUT IV, cols 0194B–0196D (42 spans)

| col | printed span | Clementine | verdict |
|---|---|---|---|
| 0194A/B | *Et iterum coepit docere.* | Mc 4:1 | = |
| 0194A | *usque ad* ×1 | abridgment formula | n/a |
| 0194B | *Navim ascendens,* | Mc 4:1 *ita ut navim ascendens sederet* | = frag |
| 0194B | *Et omnis turba circa mare.* | Mc 4:1 | = |
| 0194C | *In parabolis multa.* | Mc 4:2 *docebat eos in parabolis multa* | = frag |
| 0194D | *Aliud cecidit secus viam,* | Mc 4:4 *aliud cecidit **circa** viam* | **DIV** (e) |
| 0194D | *Et conculcatum est, et volucres coeli comederunt* | Lc 8:5 | = |
| 0194D | *Hi autem,* | Mc 4:15 | = frag |
| 0194D | *Reliqua concupiscentiae,* | Mc 4:19 *circa reliqua concupiscentiae* | = frag |
| 0194D | *Concupisces sapientiam: serva mandata* | Prv 7:2 | **DIV** (f) — `[var:]` FIRED |
| 0194D | *Beatus vir qui timet Dominum, in mandatis ejus volet nimis* | Ps 111:1 | = but **ref** (g) |
| 0194D | *Lucerna,* | Mc 4:21 | = |
| 0194D | *usque ad* ×2 | formula | n/a |
| 0194D | *Nonne ut super candelabrum ponatur?* | Mc 4:21 | = (mark as printed) |
| 0194D | *Non est enim aliquid,* | Mc 4:22 | = frag |
| 0195B | *quando illuminabit Deus abscondita tenebrarum…* | **1Cor 4:5**, *qui et illuminabit* | **DIV** (h) |
| 0195B | *In qua mensura,* | Mc 4:24 | = frag |
| 0195B | *Qui enim habet,* | Mc 4:25 | = frag |
| 0195C | *Sic est regnum Dei.* | Mc 4:26 | = |
| 0195C | *Regnum Dei* | Mc 4:26 | = |
| 0195C | *usque ad: Quoniam adest messis,* | Mc 4:29 *quoniam **adsit** messis* | **DIV** (i) |
| 0195C | *Mittit falcem.* | Mc 4:29 | = |
| 0195C | *Sicut granum.* | Mc 4:31 *Sicut granum sinapis* | = frag |
| 0195C | *Seminatum fuerit.* | Mc 4:31/32 | = |
| 0195C | *Minus est,* | Mc 4:31 *minus est omnibus seminibus* | = frag |
| 0196A | *Ascendit,* | Mc 4:32 | = |
| 0196A | *Oleribus.* | Mc 4:32 *fit majus omnibus oleribus* | = frag |
| 0196A | *Sine parabola.* | Mc 4:34 | = |
| 0196A | *Seorsum autem discipuli.* | Mc 4:34 *seorsum autem **discipulis suis** disserebat* | **DIV** (j) |
| 0196A | *In navi.* | Mc 4:36 | = |
| 0196A | *In puppi.* | Mc 4:38 | = |
| 0196A | *usque ad: Tranquillitas magna;* | Mc 4:39 *facta est tranquillitas magna* | = frag |
| 0196A | *Dormiens.* | Mc 4:38 | = |
| 0196C | *Tace, obmutesce.* | Mc 4:39 | = |
| 0196C | *Quid timidi estis?* | Mc 4:40 | = (mark as printed) |
| 0196C | *exprobravit incredulitatem illorum…non crediderunt* | Mc 16:14 | **DIV** (k) |
| 0196D | *O stulti et tardi corde…intrare in gloriam suam* | Lc 24:25–26 | **DIV** (l) |
| 0196D | *Et timuerunt.* | Mc 4:40 | = |
| 0196D | *Porro homines mirati sunt, dicentes: Qualis est,* | Mt 8:27 | = frag |
| 0196A–C | *usque ad* ×4 | formula | n/a |

- **(e) 0194D *Aliud cecidit secus viam.*** Mark reads *circa viam*; ***secus viam* is Luke's**
  wording (Lc 8:5), and the gloss's very next words quote Luke. A harmonization, not a change of
  sense (both = "by the way side"). **No marker**; the English reads "by the way side" either way,
  which is why this one is here and not in the text.
- **(f) 0194D *Concupisces sapientiam: serva mandata,* [n: (Prov. VII)] — `[var:]` FIRED.**
  Prv 7:2 reads *serva mandata **mea, et vives***; **no clause about coveting wisdom stands
  anywhere in Proverbs.** The nearest received wording is Sir 6:37 *concupiscentia sapientiae
  dabitur tibi* — where the desire is **given**, not **commanded**. The marker fires because
  the gloss's whole point is that the desire *is* a precept (*Quod praeceptum est. Praecipitur
  enim*), so a reader must be able to see that the precept is not in the cited book.
- **(g) 0194D [n: (Psal. III)]** — the *words* are Ps 111:1 verbatim (*Beatus vir qui timet
  Dominum, in mandatis ejus volet nimis*). **The locator is wrong** (III for CXI). Locators pass
  through verbatim (brief §4, runbook false positive 2): **reproduced as printed, no marker.**
- **(h) 0195B *quando illuminabit Deus abscondita tenebrarum, et manifestabit consilia cordium*
  [n: (Matth. X)].** This is **1 Cor 4:5**, not Matthew, and the Clementine reads *qui et
  illuminabit* — Migne supplies *Deus* as the subject where Paul has a relative. **No `[var:]`:**
  supplying the subject changes nothing the gloss uses (the gloss uses only the fact of a
  disclosure at the judgment). Locator reproduced as printed.
- **(i) 0195C *Quoniam adest messis*** for Mc 4:29 *quoniam adsit messis* — indicative for
  subjunctive. The gloss expounds *messis* (= *consummatio saeculi*), not the mood. **No marker.**
- **(j) 0196A *Seorsum autem discipuli.*** Mc 4:34 reads *seorsum autem **discipulis suis**
  disserebat omnia* — dative, governed by *disserebat*; Migne's lemma is **nominative**
  *discipuli*. A one-letter difference, and it is exactly the class where the plate is worth a
  look (see §5.2). It construes as printed — the gloss's own continuation (*Illi enim digni
  erant audire*) takes the disciples as subject — so it is rendered **"But apart, the
  disciples."** with **no marker.**
- **(k) 0196C** Migne: *incredulitatem **illorum*** · *quia **hi qui viderunt** eum **resurgere***.
  Mc 16:14: *incredulitatem **eorum*** · *quia **iis, qui viderant** eum **resurrexisse***. Free
  re-quotation, no change of assertion. **No marker.**
- **(l) 0196D** Migne drops *haec* and prints *sic* for *ita* (Lc 24:26 *Nonne **haec** oportuit
  pati Christum, et **ita** intrare*). **No marker.** The `?` Migne closes it with is preserved.

### 2.3 Chunk 0007 — CAPUT V, cols 0197A–0200B (61 spans)

Every one of the following agrees with the Clementine at its own verse, allowing for clipping:
*Et venerunt,* (Mc 5:1) · *Homo in spiritu.* (5:2) · *Et neque catenis,* (5:3) · *Torqueas.*
(5:7) · *Quod tibi nomen est?* (5:9) · *Legio mihi nomen est.* (5:9) · *Mitte nos.* (5:12) ·
*Grex praecipitatus est.* (5:13) · *Qui autem.* (5:14) · *Et vident illum.* (5:15) ·
*Vestitum.* (5:15) · *Et timuerunt.* (5:15) · *Et rogare coeperunt eum.* (5:17) · *Vade in
domum tuam.* (5:19) · *Et venit quidam,* (5:22) · *Quoniam filia mea.* (5:23) · *Et
comprimebant.* (5:24) · *Et mulier,* (5:25) · *Multa perpessa,* (5:26) · *Venit in turba.*
(5:27) · *Tetigit.* (5:31) · *Adhuc,* (5:35) · *Archisynagogo.* (5:36) · *Et non admisit,*
(5:37) · *Flentes et ejulantes.* (5:38) · *Non est mortua.* (5:39) · *Ejectis omnibus.* (5:40)
· *Talitha cumi.* and *Tibi dico, surge,* (5:41) · *Si quis mihi ministrat, me sequatur*
(Jo 12:26) · *Noli me tangere: nondum enim ascendi ad Patrem meum* (Jo 20:17) · *Justificata
est sapientia ab omnibus filiis suis* (see (q)) · *mortuos sepelire mortuos suos* (Mt 8:22) ·
plus the seventeen `*usque ad*` abridgment spans and `*illuminans*` / `*illuminatus:*`
(gloss-Latin, not scripture).

Divergences:

- **(m) 0197C *Et rogabant **eum** ne imperaret illis, ut in abyssum irent*** [Luc. VIII].
  Lc 8:31 reads *rogabant **illum***. One pronoun. **No marker.**
- **(n) 0197D *Sedentem ad pedes ejus.*** attributed to Lucas. Lc 8:35 has the words but
  **split**: *invenerunt hominem **sedentem**, a quo daemonia exierant, vestitum ac sana mente,
  **ad pedes ejus***. Migne closes the gap. The very next lemma (*Vestitum.*) is the word he
  jumped over, so the reader has both. **No marker.**
- **(o) 0198A *Exi a me, Domine, quia homo peccator sum,* etc.** [Luc. V]. Lc 5:8 puts *Domine*
  **last**: *Exi a me, quia homo peccator sum, Domine.* Word order only. **No marker.**
- **(p) 0198C *Quia **filia unica** erat **illi** fere annorum duodecim, et haec moriebatur***
  [Luc. VIII]. Lc 8:42: *quia **unica filia** erat **ei***. Order + pronoun. **No marker.**
- **(q) 0199A *Post Dominum **Deum** ambulabis*** [Ose. XI]. Os 11:10 reads *Post Dominum
  **ambulabunt*** — third plural, and no *Deum*. Migne's second-singular future is closer to the
  Deuteronomic formula. **`[var:]` DECLINED**: the gloss turns on *post* ("she does not see God
  present in the flesh, but afterwards…"), which both readings carry, and neither the added
  *Deum* nor the person touches it. Rendered "Thou shalt walk after the Lord God."
- **(r) 0199C *Super cathedram **Moysis** sederunt scribae et Pharisaei*** [n: (Matth. XXVIII)].
  Mt 23:2 spells *Moysi*; and the locator says **XXVIII** where the verse is **XXIII**.
  Orthography + a wrong locator, both reproduced as printed. **No marker.**
- **(s) 0199C *Justificata est sapientia ab omnibus filiis suis*** [n: (Matth. XI)]. **The words
  are Luke's** (Lc 7:35, *ab omnibus filiis suis*); Mt 11:19 has *a filiis suis*, without
  *omnibus*. A cross-gospel harmonization under a Matthew locator. **No marker** — nothing in
  the gloss (mysteries revealed to the faithful, not to mockers) turns on *omnibus*.
- **(t) 0199C *Laetentur omnes qui sperant in **Domino**, **et** in aeternum exsultabunt***
  [Psal. V]. Ps 5:12: *Laetentur omnes qui sperant **in te**; in aeternum exsultabunt.* Second
  person made third, one *et* added. **No marker.**
- **(u) 0199D *Nolumus vos ignorare, fratres, de dormientibus*** [I Thess. IV]. 1Thes 4:13 has
  *Nolumus **autem** vos ignorare*. A dropped particle in a lemma cut for citation. **No marker.**
- **(v) 0200A *Credidit Abraham Deo, et reputatum est **ei** ad justitiam*** [Jac. II]. Jac 2:23
  (and Rom 4:3, Gal 3:6) all read ***illi***. One pronoun. **No marker.**

### 2.4 Chunk 0008 — CAPUT VI, cols 0200C–0204B (56 spans)

Agreeing exactly (allowing clipping): *Unde huic,* (Mc 6:2) · *Faber.* (6:3) · *Non est
propheta.* (6:4) · *Et non poterat,* (6:5) · *Et mirabatur.* (6:6) · *Et vocavit.* and *Et
dabat illis,* (6:7) · *Ne quid tollerent,* (6:8) · *Calceatos sandaliis.* and *Ne induerentur
duabus tunicis.* (6:9) · *Excutite pulverem de pedibus.* (6:11) · *Et ungebant oleo.* (6:13) ·
*Et audivit rex.* (6:14) · *Philippi fratris sui.* (6:17) · *Non licet tibi habere,* (6:18) ·
*Et juravit.* (6:23) · *Et contristatus,* (6:26) · *Caput ejus in disco.* (6:27) · *Et
tulerunt.* (6:29) · *Et convenientes.* and *Omnia.* (6:30) · *Venite seorsum.* /
*Requiescite.* / *Erant enim,* (6:31) · *Et pedestres.* (6:33) · *Et misertus est.* (6:34) ·
*Et cum jam hora.* (6:35) · *Date illis.* (6:37) · *Quinque.* (6:38) · *Secundum contubernia.*
(6:39) · *Per centenos et quinquagenos.* (6:40) · *Et acceptis.* / *Fregit.* (6:41) · *Et
sustulerunt,* (6:43) · *Quinque millia.* (6:44) · *Et statim coegit.* / *Ad Bethsaidam.*
(6:45) · *Abiit in montem.* (6:46) · *Infirmatur quis in vobis?…ungentes eum oleo* (Jac 5:14,
exact to the point where *etc.* cuts) · plus twelve `*usque ad*` spans.

Divergences:

- **(w) 0200B *Ipse baptizabit vos in igne et spiritu* [n: (Joan. I)] — `[var:]` FIRED.**
  The Clementine has this only at **Mt 3:11 / Lc 3:16**, and there in the **reverse order and
  with *Sancto***: *ipse vos baptizabit in Spiritu Sancto, et igni*. Jo 1:33 (the locator Migne
  gives) has **only** *qui baptizat in Spiritu Sancto* — no fire at all. **The marker fires
  because the gloss is built on the order:** *Faber* is glossed *qui operatur **igni et
  spiritu***, and Migne adduces the verse to prove that pairing. Under the received order the
  proof-text stops proving it.
  ⚑ Rendering note: *faber* is Englished **"craftsman"** and *fabricatus est* **"crafted"**, so
  that *Faber est qui fabricatus est auroram et solem* keeps the figura etymologica the gloss
  is made of. "Carpenter" (the received English of Mc 6:3) would leave "he who works with fire"
  explaining nothing — the *stylus*/*epistylium* rule in translation-style, Song-of-Songs §2.
- **(x) 0200C *Quis est filius Isai* [n: (III Reg. XII)].** 3Rg 12:16 reads *vel quae haereditas
  in filio Isai*; ***Quis est filius Isai* is Nabal's, 1Rg 25:10.** Migne's words are a real
  verse under the wrong locator. Locator reproduced as printed, **no marker** — the gloss needs
  only "meanness attends a man's origin", which either verse supplies.
- **(y) 0200C *Humilia Dominus respicit, et alta a longe cognoscit* [Psal. CXXXVII].** Ps 137:6:
  *quoniam **excelsus Dominus, et** humilia respicit, et alta a longe cognoscit.* Migne
  compresses the first half. Same assertion. **No marker.**
- **(z) 0200D *In Jesu nomine surge et ambula* [Act. III].** Act 3:6: *in nomine Jesu Christi
  Nazareni surge, et ambula.* Compression. **No marker.**
- **(aa) 0201B *Audivit Herodes tetrarcha omnia quae fiebant,* etc.** [Luc. IX]. Lc 9:7 has
  *Audivit **autem** Herodes*. A dropped particle at the head of a citation. **No marker.**
- **(bb) 0202A *Abierunt in deserto.*** Mc 6:32 reads *abierunt **in desertum locum seorsum***.
  Migne's lemma is the **ablative** *in deserto* against the Vulgate's accusative of motion, and
  drops *locum seorsum*. **`[var:]` DECLINED and this is a judgment call I want recorded:** the
  case difference does have an English exponent ("in" vs "into"), but the span is also a
  truncation, and the gloss (*Petendo solitudinem…*) is indifferent to the case. **Rendered
  literally, "They went away in the desert."**, and named as a plate candidate in §5.2 — a
  two-letter ending is exactly the shape Corpus Corporum alters in both directions.
- **(cc) 0202C *Et misertus est eis, et curavit languores eorum.* — `[var:]` FIRED.**
  Attributed to Matthew; Mt 14:14 reads *curavit ***languidos*** eorum* — **the sick**, not
  **their infirmities**. The marker fires because **Migne's own next sentence expounds the
  Vulgate word, not his own**: *et **languidos** curare*. This is the 7a″ shape exactly, running
  the other way: the quotation has drifted off the word the exposition uses. Both are rendered
  as printed — "healed their infirmities" in the quotation, "the languishing to heal" in the
  gloss — and the marker records the divergence.

### 2.5 Chunk 0009 — CAPUT VI cont., cols 0204C–0205A (12 spans)

All twelve agree with the Clementine: *Et ipse solus,* (Mc 6:47) · *Et circa quartam.* and *Et
volebat praeterire eos.* (6:48) · *Putaverunt.* (6:49) · *Nolite timere.* (6:50) · *Non enim
intellexerunt.* (6:52) · *Cognoverunt.* (6:54) · *Fimbriam vestimenti.* (6:56) · *Ut quid,
Domine, recessisti longe* (**Ps 9:22** in the Clementine's numbering, which is Migne's
*Psal. X*: a numbering system, not a divergence — the words agree letter for letter) · plus
three `*usque ad*` spans.
The Isaiah tail inside the abridgment at 0204C (*Cum ambulaveris in igne, non combureris, et
flamma non ardebit in te*) is **Is 43:2 verbatim** and is set roman, not italic, in the Latin;
it is carried roman.

---

## §3. MARKERS FIRED — the four public claims this stint makes

### 3.1 `[sic: *magnitudino*]` — 0203A, chunk 0008. The only `[sic:]` in the range.

Printed: *ut illis se non habere testantibus, **magnitudino** signi notesceret.*
*magnitudino* **is not a Latin word** in any inflection: *magnitudo, -inis* has no such form,
and the clause needs the nominative subject of *notesceret*. Corpus-checked: the form occurs
nowhere else in this work.

Rendered **"the greatness [sic: *magnitudino*] of the sign might become known"** — 7a⁗ applied:
the marker records the type, and the sense is supplied in plain words beside it, so the clause
keeps both its subject and its verb when the bracket is stripped. (Fourth question, per the
brief: the clause still has its object of knowledge, *signi* → "of the sign".)

⛔ **Attribution not settled.** Addendum A says a non-word suspicion has been right every time
*that a defect exists*, and 9004 says the guess about **whose** it is was wrong nine times in
fourteen. If the plate reads *magnitudo*, this marker must be **withdrawn** and the fix is a
`data/tei-patches/9001.json` entry, not an apparatus note. **This is the highest-priority line
in §5.1.**

### 3.2 `[var:]` ×3

| col | chunk | fired on | Clementine | why it clears the bar |
|---|---|---|---|---|
| 0194D | 0006 | *Concupisces sapientiam: serva mandata* [Prov. VII] | Prv 7:2 *serva mandata mea, et vives* | the gloss asserts the desire is **commanded**; the cited book commands nothing of the kind |
| 0200B | 0008 | *Ipse baptizabit vos in igne et spiritu* [Joan. I] | Mt 3:11 / Lc 3:16 *in Spiritu Sancto, et igni* | the gloss glosses *Faber* as *qui operatur **igni et spiritu*** and adduces this verse to prove it |
| 0202C | 0008 | *curavit languores eorum* | Mt 14:14 *curavit languidos eorum* | Migne's own next clause expounds *languidos* |

Each content string was checked not to appear verbatim in the Latin twin (Pattern 14's mirror
test), and each cites the Clementine by book chapter:verse, per the brief's `[var:]` rule.

### 3.3 Zero `[d:]`, zero `[ed:]`, zero `[cj:]`

- **No dittography** anywhere in the range. Checked by eye at every `etc.` and every abridgment
  seam, which is where an eye-skip would sit.
- **No `[ed:]`**: nothing in these five chunks reads as digitization *loss*. The frontmatter
  `noteCount` matches the body `[n:]` count in all five chunks (14/25/40/34/6, with the incipit's
  note not double-counted), and no list, heading or verse address is missing.
- **`[cj:]` considered twice and declined both times**, per §4 (b) and §4 (c) below. Neither
  clears Wilson's bar — the printed word must make the sentence say something the author is
  arguing **against** — and neither falls in the narrow negation/correlative class the 2026-08-15
  and 2026-08-17 rulings admit.

---

## §4. RENDERED AS PRINTED, LOGGED, NO MARKER — the real-word class

Ten sites. **Every one is a real, well-formed Latin word or phrase**, so addendum A governs:
Migne's until a plate says otherwise, however good the argument. The argument is given anyway,
because it is what a plate reader would want to know.

**(a) 0193C — *Ubi ostendit quaedam **revelari** in futuro.*** (chunk 0005)
The frame is Mt 12:32, *neque in hoc saeculo neque in futuro* — about **remission**, and the
gloss's own next sentence is about pardon (*quorum etiam haec vita **veniam** promeruit*). One
expects *remitti*. But *revelari* is a real infinitive in its slot and yields a defensible sense
(what is forgiven is **disclosed** hereafter). Rendered **"certain things are revealed in the
world to come."** Plate candidate, low priority.

**(b) 0197A — *Ruptis catenis (ut Lucas scribit) subito agebatur **a Domino** in deserto.***
(chunk 0007) ⚠ **The single most consequential reading in this range.**
Lc 8:29 reads *Et ruptis vinculis agebatur ***a daemonio*** in deserta*, and Bede's source has
the demon. As printed, Migne's sentence says the demoniac was driven into the desert **by the
Lord**, which is the opposite agency, in a paragraph about the Gentiles bursting the restraint
of law and being carried off by lust. **A `[cj:]` was considered and declined**: *Domino* is a
real word in the right case, the sentence is a paraphrase in the gloss's own prose (so
Pattern 14 does not reach it), and the printed reading is not one the author is visibly
arguing *against* — it can be read as the Lord permitting the driving. Rendered **"he was
suddenly driven by the Lord into the desert."** ⭐ **Ask the plate. If Migne prints *a
daemonio*, this is a Corpus Corporum substitution of one real word for another — the
*concilio*/*consilio* class (brief §4) — and belongs in a tei-patch.**

**(c) 0197A — *Catenis et compedibus **graves**, et duae leges gentium signantur.***
(chunk 0007) The sentence wants *gravibus* (ablative, with *compedibus*) or a different
construction: as printed, a nominative plural *graves* has no subject to agree with and the
clause does not construe. Rendered literally, **"Heavy with chains and fetters, and the two
laws of the Gentiles are signified…"** A `[cj:]` was declined: a case anomaly that merely
fails to construe stays declined under the 2026-08-15 scoping (the *efferte* / *suscepit*
class), and the sentence asserts nothing false.

**(d) 0194D — *Via mens, **metu** carnalium cogitationum trita.*** (chunk 0006)
*trita* ("worn smooth") wants ***meatu*** — the *traffic* of carnal thoughts wearing the road —
which is the received figure and the only one that makes *trita* mean anything. *metu* ("by
fear") is a real noun in the right case. Rendered **"worn by the fear of carnal thoughts."**
Plate candidate: a single dropped *a* is a shape the digitization produces.

**(e) 0196A — *quae **tanto** apertius excrescunt, viliores fiunt.*** (chunk 0006)
A stranded *tanto* with no *quanto*. The 11535 ruling admits a stranded **comparative** whose
answering member is printed; here neither member's partner is printed, so the sentence is
merely elliptical, not false. Rendered **"which grow up so much the more openly, become the
more worthless."** No marker.

**(f) 0198B — *quia unus eorum clarioris nominis, **est** famosioris.*** (chunk 0007)
Reads as though an *et* has been lost (*clarioris nominis **et** famosioris*), or *est* is
intrusive. Rendered as printed: **"because one of them was of a more illustrious name, is of a
more famous."** A `[d:]` was considered — a doubled comparative could be an eye-skip — and
declined: the two comparatives are **different words**, so nothing is repeated, and Pattern 11
has nothing to wrap.

**(g) 0200D — *datur eis potestas praecepta docendi.*** (chunk 0008)
Two nominatives/accusatives in apposition with no connective. Rendered **"there is given them
power, precepts of teaching."** No marker; the asyndeton is characteristic of this abridgment.

**(h) 0202A — *Non solum **requisitionis** causa.*** (chunk 0008)
The lemma is *Venite seorsum … et requiescite*, so one expects *requietionis* / *requiei*
("for the sake of rest"). *requisitio* ("a seeking again") is a real noun. Rendered **"Not only
for the sake of a seeking again."** Plate candidate, low priority.

**(i) 0203A — *cursus **habentis** saeculi.*** (chunk 0008)
Bede's *De tabernaculo* tradition reads *cursus **labentis** saeculi*, "the course of the
gliding age", and *labentis* is what the list of the five books' contents wants. *habentis* is
a real participle. Rendered **"the course of the age that now holds."** Plate candidate — an
*l*/*h* confusion is a scan shape, and this is the strongest of the real-word cases after (b).

**(j) 0205A — *Rumore, non facie vel magnitudine signorum: **etiam vultu plurimis notus
erat.*** (chunk 0009) The sentence **contradicts itself**: they knew him by report, *not by his
face*, and then he was known to very many *by his countenance*. Under 7a the contradiction is
carried: **"By report, not by his face nor by the greatness of his signs: he was also known by
his countenance to very many."** No word is translated as its opposite to rescue it. (A likely
reading is *etiam vultu plurimis **notus non** erat*, or *paucis*; both are conjecture and stay
here.)

---

## §5. WHAT I WANT THE PLATE FOR

### 5.1 Priority order

1. **0203A *magnitudino*** — the range's one `[sic:]`. Confirm or withdraw.
2. **0197A *a Domino* (Lc 8:29 = *a daemonio*)** — the reading with the largest consequence.
   Read the **whole line**, not the word (addendum C): its neighbours *graves* and *subito* are
   both suspect in the same clause.
3. **0203A *cursus habentis saeculi*** — read *habentis* / *labentis*.
4. **0202D *multae. fidelium catervae*** — see 5.2.
5. **0194D *metu / meatu*** · **0196A *discipuli / discipulis*** · **0202A *Abierunt in
   deserto / in desertum locum*** — three one-or-two-letter endings, cheap to settle if the
   pages are being pulled anyway.

### 5.2 The stray full stop at 0202D, chunk 0008 — the one shape I could not resolve

Migne (as our file has him) prints, inside a `[n: (BEDA.)]` paragraph:

> *Christum deserta gentium petentem **multae. fidelium catervae** relictis moenibus priscae
> conversationis … sequuntur*

A full stop stands **between the adjective and its noun**, and *multae … catervae* plainly agree.
Under Pattern 8 the mark is carried and not deleted, so the English reads **"many. bands of the
faithful follow"** — placed at the same point in the same construction, so that the mark is
visible as the source's and not as ours.

⛔ **I could not tell whether this is Migne's type or the digitization's.** It has the shape of a
lost abbreviation point or a line-break artifact (the digitization's), and equally the shape of
a compositor's dropped space (Migne's). Both readings are stated; neither is asserted. **If the
plate has no stop, the repair is a tei-patch and the English loses the period silently.**
This is the one place in the range where a reader will think the *edition* has erred, so it is
worth a page even though nothing turns on the sense.

### 5.3 A negative worth recording

Per brief §4 ("record the negatives too"): **`Matthaeus` is spelled `Mattheus`, once, at
0201A** (chunk 0008), against six `Matthaeus` elsewhere in this range. English has no
exponent for it — "Matthew" either way — so nothing is concealed, and Pattern 9 governs. Raised
here only so a plate reader glancing at 0201A knows it was seen and not missed.

---

## §6. WHAT WAS READ CLEAN, AND WHAT WAS REJECTED

### 6.1 Scope

- **The brief's last fifteen spans (0205A, CAPUT VII: *Et conveniunt.* through *Nihil est
  extra,*) are NOT in this stint.** Chunk 0009 ends at *Fimbriam vestimenti* (Mc 6:56);
  `src/latin/9001/0010.md` opens CAPUT VII with `colFirst: 0205B` and `colContext: 0205A`.
  They belong to whoever holds 0010. **Not checked here** — do not read their absence from §2
  as clearance.
- All 187 spans that *are* in range are accounted for in §2. None was skipped.

### 6.2 Read clean, and named so a blind reader knows where I looked

- **Verse-address order.** All five chunks run strictly ascending
  (0005: 22–34 · 0006: 1–40 · 0007: 1–41 · 0008: 2–46 · 0009: 47–56). **No out-of-sequence
  address anywhere in the range** — the Jude phenomenon does not occur here.
- **Question marks.** Latin 0 / 4 / 1 / 1 / 0; English identical, band by band. Every mark
  Migne prints is preserved (*Nonne ut super candelabrum ponatur?* · *Quid timidi estis?* ·
  *Quid me praesente timetis?* · *…intrare in gloriam suam?* · *Quod tibi nomen est?* ·
  *Infirmatur quis in vobis?*) and **none is supplied**. Pattern 8b was **not** needed: this
  work prints no indirect question closed with `?` in this range.
- **Colons, semicolons, guillemets — compared BY COLUMN BAND, not by total** (brief test 3).
  All 54 bands across the five chunks match at zero mismatched bands. Thirteen mismatches were
  found and repaired this way before filing, every one of them a colon or semicolon I had
  supplied where Migne prints a comma; **the totals would have hidden at least two of them**,
  which is the reason the test exists. No guillemets occur in this range.
- **Column anchors.** 49 anchors, verbatim and in order, and each checked against the *word* it
  stands beside in the Latin, not merely for presence (test 2b). Nine are deliberately split
  mid-construction to match Migne: *principem [0193B] daemoniorum* → "the prince [0193B] of
  demons" · *volet [0195A] nimis* → "he shall delight [0195A] exceedingly" · *major est [0195D]
  omnibus oleribus* → "greater than [0195D] all herbs" · *plures [0197C] sectae* → "more
  [0197C] sects" · *annis duodecim [0198D]* → "of twelve years [0198D]" · *Mittuntur duodecim
  [0200D] apostoli* → "The twelve [0200D] apostles are sent" · *ad fractionem [0203A] panis* →
  "to the breaking [0203A] of bread" · *ut edant et [0203B] bibant* → "that they may eat and
  [0203B] drink" · *praesentiae [0204D] suae* → "his own [0204D] presence".
  Two sit one word downstream of their Latin position because English word order forced it and
  the alternative was unreadable: **0198A** (Latin between *legem* and *dicunt*; English before
  "because" = *quia*) and **0204C** (Latin before *dicitur*; English before "said").
- **`usque ad` — decided per occurrence** (addendum D). **38 occurrences in the range. 36 are
  the abridgment formula** and are rendered *as far as*, in italics, following 8945/8947
  precedent. **Two are not**, and one of them is the trap: **0201B**, *quod praedicatio **usque ad** illos
  pervenerit* — "that the preaching **reached even unto** them", the words' own sense, inside a
  gloss on shaking the dust from the feet. Rendered as ordinary prose, not as the formula.
  The other is **0193A** *esse persequendum **usque ad** mortem*, rendered ordinary prose, 'even unto death'.
- **Negation, word by word, with the host named** (tests 2 and 2a). Every *non · nec · neque ·
  nisi · nihil · nullus · ne · nunquam* in the range appears in the English, and none appears
  that the Latin does not print. The five sites that fired the 2a trigger condition (a negative
  with a quantifier or correlative nearby) were each proved from the sentence's own structure:
  **0193D** *Nec fratres injuriose contemnit, **sed** opus spirituale praeficit* (the *sed*
  pivot puts the negative on the contemning, not on the manner) · **0196A** *Non quod nullum
  sermonem … **sed** quia nullus sermo* · **0195C** *etsi **non aeque multum** omnes* —
  the negative is on *aeque multum*, **not** on *omnes*: "though not all equally much", not
  "though not all bear wheat", which the sentence's own first half (*omnes enim ferunt
  frumentum*) forbids · **0196C** *Non quod **omnia** animata … **sed** majestate conditoris*
  (the *sed* shows the denial is of animacy, so English's ambiguity here matches the Latin's) ·
  **0202A/0202B** the two *Non solum … sed etiam* pairs, negative on *solum* both times.
- **Unexpressed subjects — named, per the brief's dominant-defect section.** Every supplied
  "he/she/it/they" was resolved from the lemma above or from the verse it comes from:
  0193A *gentiles desiderabant* → object supplied ("longed for **him**", i.e. Christ, from
  *illum … perduxit* in the same sentence) · 0193C *dicebat* → the blasphemer of the lemma ·
  0197A *agebatur* → the demoniac of Mc 5:2–3, not the Gentile people of the allegory ·
  0197B *dimittit … possidet* → the demon (*ei* in the same clause) · 0197C *in abditis agunt*
  → the demons/idolaters left by the freed Gentiles, **not** the swine · 0199A *non videt* →
  the woman with the issue (Mc 5:27) · 0199A *emundat* → Christ, not the woman (the sacraments
  are *suis vestimentis*, his garments) · 0199B *quae … substantiam* → the woman · 0200A
  *spargit … colligit* → *anima*, feminine, rendered "it" · 0202A *venit seorsum, ducit quos
  eligit* → Christ.
  **One site where two readings both construe, recorded rather than chosen:** 0199A *Quia qui
  … gravatur, solo fideli Ecclesiae corde tangitur.* I take *qui gravatur* as **the Lord**
  (thronged by the crowd of heresies, touched only by the Church's faithful heart), on the
  strength of the preceding sentence's *quem passim comitans turba comprimit*. The rival reading
  makes the burdened man the heretic. **The English follows the first**; the second is named
  here because a blind reader will see the ambiguity.

### 6.3 Candidates raised and rejected, with reasons

- **`[f:]` inline citation tails.** Not applicable — runbook false positive 4. This is a
  lemma-and-gloss commentary; its scripture arrives inside the prose and inside `[n:]`, not as
  apparatus tails. Nothing tagged.
- **Column-band arithmetic.** 0194A → 0194B, 0200B → 0200C and the rest are positional
  quarter-guides. Runbook false positive 1. Not reported.
- **`(cont.)` on the CAPUT III and CAPUT VI heads** (chunks 0005 and 0009). Our chunk division,
  not Migne's. Carried verbatim, untranslated: `## CHAPTER III. (cont.)`, `## CHAPTER VI.
  (cont.)`. Runbook false positive 7.
- **Head numerals.** `CAPUT IV.` → **`CHAPTER IV.`**, `CAPUT V.` → **`CHAPTER V.`**,
  `CAPUT VI.` → **`CHAPTER VI.`** — numerals mirror the plate. No head in this range is spelled
  out in the Latin, so none is spelled out in the English.
- **0199C — the siglum `(ID)` set as bare text inside the italics.** *VERS. 38.-- *Flentes et
  ejulantes. (ID)*.* — no `[n: ]` wrapper, no internal period, and the sentence's own period
  falls **outside** the italics. Every other siglum in the range is `[n: (ID.)]`. **Reproduced
  exactly as printed**, untranslated, italics and stop positions included. Not a defect to
  mark: it is a transcription-layer difference (this one was never wrapped as a `<note>`), and
  the frontmatter `noteCount: 40` counts the 40 wrapped notes, so nothing is missing.
- **0199C — *ejulantes* in the lemma, *ululantes* in the gloss** four lines later (*inter
  flentes et **ululantes** mortua jacet*). Not a defect: Mc 5:38 has *ejulantes*, the gloss
  paraphrases. Rendered "wailing" and "howl" respectively — the variation is Migne's and is
  preserved.
- **0197D — *Sedentem ad pedes ejus.* followed by lower-case *quod signat*** after a full stop.
  Migne's own punctuation; carried, lower case and all ("*Sitting at his feet.* which signifies
  that…"). Pattern 8: never delete a mark he prints, and no case-repair is ours to make.
- **Em-dashes.** None used in the five chunks. Not a defect class; recorded only so the merge
  knows this stint carries none.
- **Lemma expansions under convention 3, each named because expansion is a judgment.** Four
  spans were expanded to the phrase they stand for rather than left as stumps:
  **0197A *Homo in spiritu.*** → "A man with an unclean spirit." (Mc 5:2 *in spiritu immundo*)
  · **0197B *Torqueas.*** → "Torment me not." (Mc 5:7 *ne me torqueas* — ⚠ **the expansion
  imports the *ne***; it is the Ruth *Non te.* → "Let no man see thee" precedent exactly, and it
  is flagged because importing a negation is the one expansion a 7a check should look at twice)
  · **0197D *Qui autem.*** → "But they that fed them." (Mc 5:14) · **0200C *Non est
  propheta.*** → "A prophet is not without honour." (Mc 6:4) · **0199A *Tetigit.*** → "Who
  touched me." (Mc 5:31 *Quis me tetigit?* — the period Migne prints is kept; **no `?` is
  supplied**).
  Bare one-word lemmata with nothing elided were **not** expanded and stand as they are:
  *Scribae,* · *Fratres.* · *Lucerna,* · *Ascendit,* · *Vestitum.* · *Dormiens.* ·
  *Archisynagogo.* · *Omnia.* · *Requiescite.* · *Quinque.* · *Fregit.* · *Putaverunt.* ·
  *Cognoverunt.* ⚑ Per the brief's "name the control's class" note, these two groups are
  **different classes** and the difference between them is not an inconsistency.

---

<!-- ===== stint file: cruces-0010.md, verbatim ===== -->

# 9001 *Glossa ordinaria* on **Mark** — cruces for chunks 0010–0014 (cols 0205B–0217A)

Stint file. Chunks **0010, 0011, 0012, 0013, 0014**, CAPUT VII through CAPUT IX,
4,948 Latin words / 7,795 English. One translator, Opus. To be merged with the other four
stints' cruces at assembly.

`verify-english.mjs` clean on all five chunks (no errors, no warnings): frontmatter verbatim,
column anchors 14/16/0/16/2 in order, `[n:]` 39/34/0/27/4 at parity, question marks
2/5/0/1/2 at parity, ratios 1.54 / 1.59 / 1.43 / 1.59 / 1.59.

**Apparatus fired in this range: 4 `[sic:]` · 3 `[var:]` · 1 `[cj:]` · 0 `[d:]` · 0 `[ed:]` ·
0 `[nt:]`.** Guillemets: **zero in the Latin, zero in the English** (checked band by band).

⛔ **Nothing in this range has been read at Migne's plate by me.** Every `[sic:]` and `[var:]`
below is listed again in §5 with the column it stands on, so `plate-gate.mjs` has a work list.
I have stated for each what I think happened and, per the 9004 measurement, **I do not present
any attribution as settled** — the stints' whose-is-it guesses there were wrong 9 times in 14.

---

## §1 · THE MARKERS, ONE BY ONE

### `[sic:]` — four, all of them a form that has no grammatical slot

Rendered *and* marked in every case (7a⁗): strip the four markers out of the English and
every clause still reads aloud with its verb, its negation and its object.

| col | chunk | printed | English beside the marker | class |
|---|---|---|---|---|
| 0207D | 0010 | *serminobusque* | "ill-composed discourses" | **non-word** — metathesis of *sermonibusque*; the run sits third in the series *cogitationibus … actibus … serminobusque incompositis*, and *incompositis* requires a noun in the ablative plural |
| 0210C | 0011 | *Ex* (in the lemma *Ex exspuens.*) | "spitting" | **real word, no slot** — a bare preposition standing before a participle. Mark 8:23 reads *et exspuens*; Pattern 12's test 1 (*Pecte*, *ama*, *sternis* at 11632) governs, not the *fuges*/*munde* class |
| 0212B | 0011 | *vineunt* | "overcome" | **non-word** — for *vincunt*; the clause needs a finite verb governing *avaritiam* |
| 0214D | 0013 | *nonullo* (lemma *Hoc genus nonullo.*) | "This kind by nothing" | **non-word** — for Mark 9:28 *Hoc genus in nullo potest exire*; *nonullo* is not a Latin form (*nonnullo* has two n's and would be a quantifier, which will not stand here) |

⚠ **The one I am least sure of is *Ex*, and it is the one that is a real word.** Two readings
are open and I cannot choose between them from the file: (a) Migne (or the digitization) set
*Ex* for *Et*; (b) the compositor's eye slipped and re-set the first syllable of *exspuens*,
which would be a partial dittography and would take `[d:]`, not `[sic:]`. I took `[sic:]`
because it makes the weaker claim — that the type as printed will not construe — and because a
`[d:]` would additionally assert *which* copy is intrusive. **If the plate reads *Et exspuens*,
withdraw the marker and patch the Latin; that outcome would not surprise me.**

### `[var:]` — three, and only where the sense turns on it

1. **0217A · Eccli. 12:13.** Migne prints *Quis **medebitur** incantatori a serpente percusso?*
   The Clementine (Sir 12:13) reads ***miserebitur*** — "who will **pity** a charmer struck by a
   serpent". Material, and the gloss is built on the divergent word: its question is *quo alio
   doctore **corrigitur*** — by what other teacher is the apostate **corrected**. Healing, not
   pity, is what the sentence is arguing about. `[var: Vulg. Eccli. 12:13 reads *miserebitur*,
   "shall have pity on"]`. ⚑ Migne's own citation `(Eccli. XII.)` is **correct** here.
2. **0211D · Matt. 4:10.** The gloss's whole point is a contrast of two forms of address —
   *Diabolo dicitur:* ***Vade retro, Satanas.*** *Petro:* ***Vade retro me.*** The Clementine at
   Matt 4:10 reads simply **Vade Satana** (and Lk 4:8 has no *vade* at all); *retro* appears in
   the Vulgate only at Mark 8:33, *Vade retro me Satana*, which is the second member of the very
   contrast. So the distinction the gloss draws does not exist in the Vulgate's wording.
   Rendered with one English word for *retro* in both members ("Go behind" / "Go behind me"), so
   the contrast survives; `[var:]` records the received reading.
3. **0215D · Mark 9:36.** Migne re-quotes his own lemma as *Quisquis unum ex hujusmodi pueris
   receperit, me recipit* — **without *in nomine meo***, which the Clementine has, and with no
   *etc.* to mark the omission. This is not ordinary compression: the very next clause of the
   gloss reasons *from* the missing phrase (*intelligit Joannes quod **in nomine ejus** eos non
   recipiant*). Without the `[var:]` a reader meets a gloss whose hinge is not in its own
   proof-text.

### `[cj:]` — one

**0212D–0213A · *nequeant*.** Migne: *in judicio, in forma servi et bonis et malis, ut impii
quem sprevere, quem Judaei negavere, milites quem crucifixere, Pilatus Herodesque quem
judicavere **nequeant** judicem agnoscere.* Rendered as printed — "may **not** be able to
recognize the judge" — and glossed `[cj: *nequeant*; read *queant*, "may be able"]`.

The bar is met on Pattern 18's own terms and on 18a's negation clause: the sentence's stated
reason for his appearing *in forma servi et bonis et malis* is precisely that those who spurned
him should know their judge, and the printed negative makes the page assert the opposite of the
clause it is the purpose of. The word that went wrong is a negation, which is the class 18a
admits even where the result is merely incoherent. **The gloss is additive**: Migne's word keeps
its English and the conjecture stands beside it.

⛔ **Rival considered and rejected:** reading *nequeant … agnoscere* as a litotes ("cannot fail
to recognize"). Latin does not license that without a second negative, and supplying one would
be the silent repair Pattern 7 forbids. The conjecture *queant* is the minimal change and is
the only one that makes the purpose clause serve its stated reason.

---

## §2 · THE LEMMA / SCRIPTURE COLLATION — ALL 186 SPANS WALKED, INCLUDING THE AGREEMENTS

Per 7a″ point 4. **Every span in `data/briefs/9001-lemmata-0010.txt` was checked against
`sources/vulgate/clementine-flat.txt` at its own verse**, not merely against the pre-scan's
✓/⚠. Recorded here are (a) the divergences that took a marker, (b) the divergences that did
**not**, with the reason, and (c) the classes that agree.

⚑ **A verse-numbering check first, because it could have manufactured findings and did not.**
Migne's `VERS.` numbers in this range track the **Clementine's** Mark chapter-and-verse exactly,
not the modern one: his CAPUT VIII ends at *VERS. 39 Amen dico* and CAPUT IX opens at
*VERS. 1 Et post dies*, which is Clementine Mc 8:39 / Mc 9:1. No offset, nothing to log.

### 2a · Verse lemmata that agree with the Clementine word for word (no marker, no crux)

Mark 7: *Et conveniunt* (7:1) · *Communibus manibus* · *Non lotis* (7:2) · *Pharisaei* (7:3) ·
*Baptismata* (7:4) · *Quare discipuli tui* (7:5) · *Bene prophetavit* (7:6) · *Bene irritum*
(7:9) · *Vos autem dicitis* · *Tibi profuerit* (7:11) · *Nihil est extra* (7:15) ·
*Et vos imprudentes* (7:18, fragment of *Sic et vos imprudentes estis*) · *Et in secessum*
(7:19) · *De corde hominum* (7:21) · *Et inde surgens* · *Neminem* (7:24) · *Mulier enim*
(7:25) · *Sine prius saturari filios* · *Filiorum* (7:27) · *De micis* (7:28) ·
*Propter hunc sermonem* (7:29) · *Tyri* · *Sidonem* · *Decapoleos* · *Venit ad mare Galilaeae
inter medios fines Decapoleos* (7:31) · *Surdum et mutum* · *Et deprecabantur* (7:32) ·
*Et apprehendens eum* · *Seorsum* · *Tetigit linguam* (7:33) · *Et suscipiens* · *Ingemuit* ·
*Adaperire* (7:34) · *Et statim apertae* · *Et loquebatur recte* (7:35) ·
*Et praecepit illis ne cui dicerent* · *Quanto autem eis praecipiebat* (7:36).

Mark 8: *Misereor super turbam* · *Triduo sustinent* (8:2) · *Si dimisero eos* · *De longe*
(8:3) · *Septem* (8:5) · *Super terram* (8:6) · *Pisciculos* (8:7) · *Manducaverunt* ·
*Quod superaverat* · *Septem sportas* (8:8) · *Et statim* (8:10) · *Quaerentes* (8:11) ·
*Si dabitur* (8:12) · *Ascendit navim* (8:13, fragment of *ascendit iterum navim*) ·
*Quid cogitatis* (8:17) · *Video homines* (8:24) · *Deinde iterum* (8:25) · *Et misit* ·
*Nemini dixeris* (8:26) · *Quem me dicunt* · *Homines* · *Vos vero* (8:27–29) ·
*Tu es Christus* (8:29) · *Et comminatus est* (8:30) · *Quoniam oportet* (8:31) ·
*Et apprehendens* (8:32) · *Vade retro* · *Vade retro me* · *Quae Dei sunt* (8:33) ·
*Si quis vult* · *Deneget* · *Tollat crucem* (8:34) · *Qui enim* · *Qui enim me* (8:38) ·
*Amen dico* (8:39) · *Regnum Dei* (8:39, chunk 0012).

Mark 9: *Et post dies* · *Et post dies sex* · *In montem excelsum* · *Transfiguratus* (9:1) ·
*Et vestimenta* (9:2) · *Et apparuit* · *Elias cum* (9:3) · *Rabbi* · *Bonum est* (9:4) ·
*Nubes obumbrans* · *Hic est* (9:6) · *Et statim* (9:7) · *Praecepit illis* (9:8) ·
*Verbum continuerunt* · *Conquirentes* (9:9) · *Quid ergo* (9:10) · *Restituet* ·
*Quomodo scriptum* (9:11) · *Turbam magnam* (9:13) · *Et interrogavit* (9:15) ·
*Et dixi discipulis* (9:17) · *O generatio* (9:18) · *Statim spiritus* (9:19) ·
*Ab infantia* (9:20) · *Et frequenter eum* · *Adjuva* (9:21) · *Discerpens* · *Factus* (9:25) ·
*Occident eum* (9:30) · *Ignorabant* (9:31) · *Capharnaum* · *Quid in via* (9:32) ·
*Inter se disputaverunt* (9:33) · *Et residens* (9:34) · *Complexus* (9:35) ·
*Quisquis unum* · *Et quicunque* · *Et quicunque me susceperit* (9:36) · *Respondit illi* ·
*Magister, vidimus quemdam* · *Et prohibuimus eum* · *Nolite prohibere* (9:37–38) ·
*Et quisquis scandalizaverit* · *Mola asinaria* (9:41) · *Et si scandalizaverit* ·
*Manus tua* · *Quam duas manus* (9:42) · *Ubi vermis* (9:43) · *Omnis enim igne* ·
*Omnis victima sale salietur* (9:48) · *Quod si sal* · *Habete in vobis sal et pacem* (9:49).
*Habete in vobis sal et pacem* at 0217A is the last span in my range; *Et inde exsurgens* and
*Pharisaei interrogabant* belong to chunk 0015 and are not mine.

Two internal re-quotations agree too and are worth naming because a divergence there would have
been invisible: *Quanto autem eis* and *Statim apertae* at 0208B, and *Omnis enim igne* /
*Omnis victima sale salietur* re-quoted twice each at 0216D.

### 2a-bis · THE REGENERATED BRIEF (coordinator's correction of 2026-09-03)

The first `data/briefs/9001-lemmata-0010.txt` was split by column BAND and was therefore short
at its head; the corrected file is split by chunk membership, **197 spans, bands 0205A–0217A**.
⚑ **I counted my own Latin before trusting it: 62 + 57 + 1 + 68 + 9 = 197 italic spans in
chunks 0010/0011/0012/0013/0014. The totals agree.**

**Nothing in this stint's collation changes**, because the collation above was made by walking
the five Latin chunks themselves rather than the brief, so the thirteen head-of-range spans that
had slid out of the old file (band 0205A, *Et conveniunt* through *Nihil est extra*) were
already walked and already stand in §2a. Confirmed span by span against the regenerated file:

*Et conveniunt* (7:1) · *Communibus manibus* (7:2) · *Non lotis* (7:2) · *Pharisaei* (7:3) ·
*Baptismata* (7:4) · *Quare discipuli tui,* (7:5) · *Bene prophetavit* (7:6) · *Bene irritum*
(7:9) · *Vos autem dicitis* (7:11) · *usque ad* (the abridgment formula) · *Tibi profuerit*
(7:11) · *Nihil est extra,* (7:15) — **all agree with the Clementine**, and the two carrying
Migne's comma (*Quare discipuli tui,* · *Nihil est extra,*) keep it with `etc.` in the English.

⭐ **One span in the head gap is a scripture quotation and not a Mark lemma, and it is the only
one of the thirteen that needed a verse look-up rather than a lemma check:**
**0205A** *Quia abscondisti haec a sapientibus et prudentibus, et revelasti ea parvulis*
`[n: (Matth. XI)]`. The Clementine Mt 11:25 reads *quia abscondisti haec a sapientibus, et
prudentibus, et revelasti ea parvulis* — **verbatim agreement**, and the citation is right.
(Lk 10:21 carries the same words with *quod* for *quia*; Migne's *Quia* is Matthew's, so the
locator and the wording point the same way. No marker, nothing to log beyond this line.)

⛔ The old file's tail also carried two spans that are **not** mine — *Et inde exsurgens* and
*Pharisaei interrogabant* (Mark 10:1–2, chunk 0015). They are struck from §2a above.

### 2b · Divergences from the Clementine that took a marker

The three `[var:]` of §1: **Eccli. 12:13** *medebitur* / *miserebitur* · **Matt. 4:10**
*Vade retro, Satanas* / *Vade Satana* · **Mark 9:36** the dropped *in nomine meo*.

### 2c · Divergences from the Clementine that took NO marker, with the reason

Every one of these was checked at the verse and declined; they are listed so a blind reader can
see the line I drew (Pattern 14 fires on a divergence **that changes the sense**).

| col | Migne prints | Clementine | why declined |
|---|---|---|---|
| 0206A | *Non potestis **bibere calicem Domini** et calicem daemoniorum* (I Cor. X) | 1 Cor 10:21 *non potestis **calicem Domini bibere*** | word order only; the clause also stops where Migne stops it |
| 0206C | *clamat post nos* / *Non respondit ei verbum* (Matth. XV) | Mt 15:23 verbatim, in the reverse order on the page | Migne quotes two clauses of one verse in the order his argument needs; nothing is altered |
| 0207A | *Circumdederunt me canes multi* (Psal. XXI) | Ps 21:17 *Quoniam circumdederunt…* | dropped conjunction at the head of a fragment |
| 0207A | *Alias oves habeo…* (Joan. X) | Jo 10:16 *Et alias oves habeo…* | same |
| 0207B | *Coangustatum est stratum et pallium breve, utrumque operire non potest, ut transferat se ad alias gentes* (Isai. XVIII) | Is 28:20 *Coangustatum est **enim** stratum, **ita ut alter decidat**; et pallium breve utrumque operire non potest* | Migne drops *enim* and the clause *ita ut alter decidat*, and the italic run then carries *ut transferat se ad alias gentes*, which is **not Isaiah** but the gloss's own continuation swept into the same italics (compare Pattern 4 rule 3 on an italic run swallowing content). Nothing asserted is reversed; the exegetical point (the bed too narrow, hence a move to the nations) stands in both. ⚠ The citation *(Isai. XVIII)* is wrong for Is 28 — see §4 |
| 0207B | *Nosti mandata, haec fac et vives* (Luc. XVIII) | Lk 18:20 *Mandata nosti*; Lk 10:28 *hoc fac, et vives* | a conflation of two Lucan verses (and *haec* for *hoc*). A conflation is not a divergence in either verse; the sense of neither is touched |
| 0207D | *Opera digitorum tuorum sunt coeli* (Psal. VIII) | Ps 8:4 *Quoniam videbo caelos tuos, opera digitorum tuorum* | recast as a predication; both say the heavens are the work of God's fingers, which is the only thing the gloss uses |
| 0207D | *Ephpheta* | Mc 7:34 *Ephphetha* | spelling of a transliterated Aramaic word |
| 0207D | *Corde creditur ad justitiam* (Rom. X) | Rom 10:10 *Corde **enim** creditur ad justitiam* | dropped *enim* |
| 0207D | *Ego vinctus sum, sed verbum Dei non est alligatum **in me*** (I Tim. II) | 2 Tim 2:9 *…quasi male operans: sed verbum Dei non est alligatum* | the first half is recast as a summary and *in me* is added, but nothing is reversed and the gloss uses only "the word is not bound". ⚠ The citation is wrong (2 Tim, not 1 Tim) — §4 |
| 0208B | *Civitas in monte posita **undique circumspecta** abscondi non potest* (Matth. XV) | Mt 5:14 *Non potest civitas abscondi supra montem posita* | **not italic on the page**: this is the gloss's own paraphrase, not a quotation set as one, so Pattern 14 does not reach it |
| 0208C | *Domine, labia mea aperies* (Psal. V) | Ps 50:17 verbatim | text agrees; only the citation is wrong — §4 |
| 0209D | *Si vis perfectus esse, vade **et** vende **omnia** quae habes* (Matth. XIX) | Mt 19:21 *…vade, vende quae habes, et da pauperibus* | *omnia* is an addition, but Lk 18:22 has *omnia quaecumque habes vende*, so this is harmonization, not a reading against the sense; the gloss's point (the higher counsels) is unaffected |
| 0210B | *Quid operaris? Patres nostri manducaverunt manna in deserto* (Joan. VI) | Jo 6:30–31 verbatim across the verse join | agrees |
| 0211A | *Beati **enim** mundo corde* (Matth. V) | Mt 5:8 *Beati mundo corde* | *enim* is the gloss's connective, inside the italics |
| 0211C | *Euntes docete omnes gentes…* (Matth. XVIII) | Mt 28:19 *euntes **ergo** docete…* | dropped *ergo*. ⚠ Citation wrong (XXVIII) — §4 |
| 0211C | *Si quis vult venire post me, abneget **se*** (Matth. XVI) | Mt 16:24 *Si quis vult post me venire, abneget **semetipsum*** | word order and the simple reflexive for the emphatic; no sense change |
| 0212B | *Castigo corpus meum, et in servitutem redigo* (II Cor. IX) | 1 Cor 9:27 verbatim | text agrees; citation wrong — §4 |
| 0212C | *Dedit illis regiones gentium…et legem ejus requirant* (Psal. CIV) | Ps 104:44–45 verbatim across the verse join, minus the opening *Et* | agrees |
| 0213A | ***Qui** in Christo baptizati estis Christum induistis* (Gal. III) | Gal 3:27 ***Quicumque enim** in Christo…* | opening relative shortened |
| 0213A | *Quia nunc **quidem** filii sumus Dei, **sed** nondum apparuit… **Cum ergo** apparuerit…quia videbimus* (I Joan. III) | 1 Jo 3:2 *Carissimi, nunc filii Dei sumus: et nondum apparuit…**Scimus quoniam** cum apparuerit…quoniam videbimus* | connectives adjusted and *Scimus quoniam* dropped; every proposition survives unchanged |
| 0214D | *Fiat tibi secundum fidem tuam* (Matth. XV) | Mt 15:28 *fiat tibi **sicut vis***; the wording Migne gives is Mt 9:29 *Secundum fidem vestram, fiat vobis* | ⛔ **declined deliberately, and this is the closest call in the range.** The words on the page do not stand at the verse Migne cites, and the gloss turns on faith (*Fides cum lacrymis optata vota capit*) — the Pattern 14 shape exactly. But the wording IS a Vulgate reading, at Mt 9:29, so what is wrong is the **citation**, not the text; and citation repair belongs to `citation-corrections.json` at index time, never to the running text (the Ruth precedent, 8968 §2). A `[var:]` here would tell a reader that Migne's *text* diverges from the received one, which is false |
| 0214D | *Mortui enim estis, et vita vestra **abscondita est** cum Christo in Deo* (Col. III) | Col 3:3 *vita vestra **est abscondita*** | word order only |
| 0215B | *Occisus **die tertia** resurget* (Joan. XII) | Mc 9:30 *occisus **tertia die** resurget* | word order only. The note *(Joan. XII)* belongs by sense to the *granum frumenti* sentence that follows (Jo 12:24–25), not to the Marcan clause it stands beside — §4 |
| 0216A | *Sed sive **occasione** sive **veritate** Christus annuntietur* (Phil.) | Phlp 1:18 *sive **per occasionem**, sive **per veritatem*** | bare ablatives for *per* + accusative; identical sense |
| 0217A | *Habete in vobis sal et pacem* | Mc 9:49 *Habete in vobis sal, et pacem **habete inter vos*** | compressed, and Migne is quoting his own lemma |

### 2d · The `usque ad` audit (brief addendum D)

The formula occurs **20 times** in this range and is rendered ***as far as*** throughout, after
the shipped precedent in this same work (9001/0015 and 9001/0005). ⚑ **Two occurrences in the
range are NOT the formula and were not rendered as one:**

- **0205B** *communio apostolorum non tota extendit palmites suos **usque ad mare*** — the words
  of Ps 79:12 (*Extendit palmites suos usque ad mare*), rendered "as far as the sea".
- **0207B** *sed **usque ad mare** venisse* — Bede's own geography of Mark 7:31, rendered "as far
  as the sea".

Both sit within a line of a real formula occurrence, which is exactly the trap 8969's Sap 8:1
lemma set.

---

## §3 · MIGNE'S OWN, RENDERED AS PRINTED — NO MARKER

Each of these is a **real, well-formed Latin word or construction** that reads oddly. Per
addendum A they are Migne's until a plate says otherwise: rendered as printed, logged here, no
marker fired, **and no corpus-frequency argument treated as licence**.

1. **0205B · *communio apostolorum **non tota** extendit palmites suos usque ad mare.*** The
   negation is printed and is carried: "the communion of the apostles does **not wholly** stretch
   out its branches as far as the sea." *tota* is nominative and agrees with *communio*, so the
   scope is on the subject, not on the verb (Test 2a). Jerome's antithesis wants the apostolic
   communion to be the vine that *does* reach the sea against the Pharisees' barren cleanness, so
   the printed *non* pulls against the argument. **I have not conjectured**: the sentence has no
   correlative or quantifier whose member is missing, so Pattern 18 does not reach it, and the
   *non* may be doing work the abridgment has cut away.
2. **0205C · *crebro eleemosynarum, aliorumque justitiae fructuum **lamento** sua opera
   purgare.*** *lamento* is a real ablative and occupies its slot; rendered "by the frequent
   lament of alms and of the other fruits of justice". A washing-word would suit "purge" better,
   but **I decline to name one**: I have no witness on disk for Bede's text here and a
   conjecture from memory is exactly what the edition forbids. Worth a look if the plate is
   being read for something else on the page (addendum C).
3. **0205C–D · *reprimit **furca rationis**, id est, Moysi et Isaiae **increpatione****. The
   nominative instrument and the ablative apposition do not agree; both are rendered as printed.
   Gender/case slips of this kind are not defects under Pattern 9 and no marker is right.
4. **0205A · *et ideo cupita salute patiuntur.*** *patior* does not govern an ablative, so
   *cupita salute* is taken as an ablative absolute: "and therefore, having desired health, they
   suffer." ⛔ **`[cj: *patiuntur*; read *potiuntur*]` was weighed and DECLINED.** *potiuntur*
   ("they obtain") takes the ablative, restores the antithesis with the Pharisees, and would
   match the 10703 @1126B shape (a lexical slip leaving a stranded ablative). It loses because
   Pattern 18's bar is that the English **assert something the author argues against**, and "they
   suffer" asserts nothing false — it is merely limp. 18a is explicit that a merely uncertain
   reading stays in the crux. **This is the strongest declined conjecture in the range.**
5. **0206C · *Mulier est mater nostra Romana **Ecclesiae**.*** Rendered by the only construction
   the printed cases allow: "The woman is our Roman mother of the Church" (*Ecclesiae* genitive
   with *mater*). *Ecclesia* nominative — "our mother the Roman Church" — is the obvious reading
   and is deliberately **not** adopted; adopting it would be a silent repair of a case.
6. **0206D · *non panem **infractum** litterae cupit.*** *infractus* can be read privatively
   ("unbroken", against the *micas* of the preceding clause) or as "broken/weakened". Rendered
   "the unbroken bread of the letter", which is the reading the crumb/loaf antithesis supports.
   The other reading is not excluded and nothing in the gloss decides it.
7. **0207D · *Spuma de carne Domini, divina sapientia.*** *spuma* is "foam", not *sputum*;
   rendered "the foam from the flesh of the Lord". The context is unmistakably the spittle of
   Mark 7:33, but *spuma* is a real word in its slot and is left alone.
8. **0207C · *dum odorat **emungitur***. Rendered "its nose is wiped while it smells" — the
   literal force of *emungo* — inside a list of twelve paradoxes where every member is a real
   word. Nothing is emended.
9. **0208C · *cujus auditum … divina gratia **referat****. *referat* ("brings back") is rendered
   as it stands; *reparet*/*reficiat* would be smoother and is not adopted.
10. **0209A · *quod viam praesentis saeculi, **aliter** incolumes transire nequimus, alimento
    verbi sui Christus nos reficiat.*** *aliter* has no answering *nisi*, so the second clause
    hangs with no conjunction. Rendered with a colon and nothing supplied: "…we cannot otherwise
    pass unharmed the way of the present world: that Christ refresh us with the food of his
    word." ⛔ **A `[cj:]` on the 11535 @1231B model (a correlative whose answering member is not
    printed) was weighed and DECLINED** — *aliter … nisi* is a weaker pair than *quam* after a
    comparative, and 18a says that ruling was not to be read wider. The colon leaves the gap
    visible.
11. **0210D · *et quae vix et quasi per gradus ad lucem redeat*** — a relative-subjunctive clause
    with no clean antecedent; taken with *caecitatis* and rendered so.
12. **0211B · *ne confessio eorum vulgi opinione, **sed** veritatis agnitione videatur
    infirmata.*** The *sed* limb has no predicate of its own and *infirmata* cannot serve it
    ("seem weakened by the recognition of the truth" is the opposite of the point). Rendered with
    both limbs as printed, sharing the printed participle. No conjecture: the word in doubt is a
    participle, not a negation or a correlative, and 18a keeps that class declined.
13. **0212A · *Sed perfectioribus, quanta passurus quod a mortuis resurrecturus esset
    aperuit.*** *passurus* has no *esset*; rendered "how great things he was to suffer, and that
    he was to rise again from the dead", with the copula taken from the second limb. The English
    "and" is doing the work of the missing coordination and is flagged here rather than
    bracketed, because the two objects of *aperuit* are unambiguous.
14. **0215A · *quia eis in figuris loqui **consueverunt***. A plural verb where the subject is
    the Lord (*consuevit*). Rendered with the plural as printed; a number slip is a real form in
    a real slot and 18a keeps number anomalies declined.
15. **0214D · *Credulitas nostra, ut **rostrata lingua** infirma est.*** "like a beaked tongue" —
    rendered literally. The simile is opaque to me and I offer nothing.
16. **0217A · *…eo plus a concordiae virtute desipiunt. **subjungit**: …*** Migne prints a full
    stop and then a **lower-case** *subjungit*, leaving the long *Quia autem sunt multi…* period
    without an apodosis. The stop is preserved (Pattern 8) and the English capitalizes at the
    sentence break, since capitalization after a full stop has no English exponent for the
    defect. **Recorded so a later reader knows it was seen.**
17. **0208C · *quantoque frequentius [ferventius] praedicare debeant.*** `[ferventius]` is
    **Migne's own bracketed variant** and is carried verbatim and untranslated, like every other
    bracketed variant in this corpus. No marker of ours is stacked on it.
18. **0216B · Σκάνδαλον** is reproduced in Greek script exactly as printed; the three glosses
    that follow (*offendiculum vel ruina vel impactio pedis*, and *ut alii, scrupulus*) are
    translated.

### Sections read clean

**Chunk 0012 in its entirety** (0212C, 42 words) — nothing to report; the `(cont.)` in its head
is our chunk division and is not translated. **Chunk 0014's VERS. 43 paragraph** (0216C–D) and
**chunk 0013's VERS. 33–35** (0215B–D) were read twice for negation scope and are clean.
**Chunk 0010's VERS. 25–29** (0206C–0207A), the densest scripture cluster in the range, carries
five citations and every one agrees with the Clementine.

---

## §4 · MIGNE'S CITATIONS PRINTED AS HE PRINTED THEM

Six `[n:]` locators in this range do not point where their text comes from. **All are reproduced
verbatim; none is corrected in the running text.** Citation repair belongs to
`data/citation-corrections.json` at index time (the standing rule, and 8968 §2's two worked
instances).

| col | printed | the text is actually |
|---|---|---|
| 0207B | `[n: (Isai. XVIII)]` | Isaiah **28**:20 |
| 0207D | `[n: (Psal. VIII)]` | Ps 8:4 — correct, listed only because the wording is recast (§2c) |
| 0207D | `[n: (I Tim. II)]` | **2** Tim 2:9 |
| 0208C | `[n: (Psal. V)]` | Ps **50**:17 |
| 0211C | `[n: (Matth. XVIII)]` | Matt **28**:19 |
| 0212B | `[n: (II Cor. IX)]` | **1** Cor 9:27 |
| 0214D | `[n: (Matth. XV)]` | the wording is Matt **9**:29 (see §2c) |
| 0215B | `[n: (Joan. XII)]` | stands beside a clause from Mark 9:30; Jo 12:24–25 is the *next* sentence |

⚠ **0208B `[n: (Matth. XV)]` on *Civitas in monte posita*** is Matt **5**:14 — but note this one
sits on a non-italic paraphrase, so it is a citation attached to the gloss's own words.

---

## §5 · WHAT I WANT READ AT THE PLATE, IN PRIORITY ORDER

Our PL 114 scan clips the margins on leaves in this range, so these are requests, not
assumptions. **Columns carrying a marker come first — `plate-gate.mjs` will refuse to ship
without them.**

**Gate-blocking (marker stands on the column):**

1. **0214D** — *Hoc genus **nonullo*** (`[sic:]`). A non-word; the question is only whether the
   plate reads *in nullo* (then the fault is the digitization's and the Latin needs a
   `tei-patch`) or something else.
2. **0210C** — *Ex exspuens* (`[sic:]`). **The likeliest withdrawal in the range.** See §1.
3. **0207D** — *serminobusque* (`[sic:]`). Non-word. ⚑ While that line is up, read *Spuma* and
   *emungitur* on the same column (addendum C: both normalizations found in the last batch were
   found while reading for a different word).
4. **0212B** — *vineunt* (`[sic:]`). Non-word.
5. **0217A** — *medebitur* (`[var:]`). The `[var:]` rests on the Clementine, which is on disk;
   the plate read is to confirm Migne prints *medebitur* and not *miserebitur*. ⚑ Read
   *subjungit* (§3.16) and *phylargyria* on the same column while it is up.
6. **0211D** — *Vade retro, Satanas* (`[var:]`). Confirm *retro* is printed in the first member.
7. **0215D** — the Mark 9:36 re-quotation (`[var:]`). Confirm *in nomine meo* is absent from the
   printed quotation and that no *etc.* stands where our file has none.

**Not gate-blocking, but worth the look while the leaf is up:**

8. **0205C** — *lamento* (§3.2). A real word; I have fired nothing and offer no conjecture, but
   this is the reading most likely to be a normalization or a broken sort.
9. **0206C** — *Romana Ecclesiae* (§3.5), and *infractum* four lines below it (§3.6).
10. **0205B** — *non tota* (§3.1). The negation that pulls against Jerome's antithesis.
11. **0209A** — the missing *nisi* after *aliter* (§3.10).
12. **0212D** — *nequeant* (§1, `[cj:]`). Not gate-blocking, since `[cj:]` makes no claim about
    the plate, but if Migne prints *queant* the marker comes out and the English changes.

---

## §6 · UNEXPRESSED SUBJECTS SUPPLIED, AND WHO I TOOK THEM TO BE

Per the brief's dominant-defect section. Every "he/she/it/they" below is one the Latin does not
print; where two readings construe I say so rather than choosing silently.

- **0206B, VERS. 21** — *ut si pulchram mulierem nos crebro viderit inspicere, **intelligit** nos
  amare.* Supplied "he". The subject is cut away by the `usque ad` abridgment; from Bede's
  argument on Mark 7:21 the observer is **the devil**, learning our inclinations from what we
  look at. ⚠ **Not certain, and it cannot be settled from what is on the page** — the sentence
  is the tail of a resumption. Rendered with a bare "he", which leaves the ambiguity where Migne
  leaves it.
- **0207B, VERS. 31** — *ut **transferat se** ad alias gentes.* Supplied "he", taken as **the
  Lord**, which is what Mark 7:31 narrates and what the whole column is about (the withdrawal to
  Tyre, Sidon and Decapolis). The rival is Judea/the covering transferring itself, which also
  construes; the Lord wins because *cui Dominus* two clauses earlier makes him the sentence's
  active person and because the gloss's point is the passage to the Gentiles.
- **0206C, VERS. 25** — *dedit intelligere quod **ambo tacuerunt***. "Both" is Migne's word;
  I take it of **the Lord and the woman**, who are the pair who *cum silentio ingressi sunt*.
  Matthew and Mark, the other candidate pair, do not enter a house.
- **0206D** — *Micas intellectus **quaerit**, non panem infractum litterae **cupit**.* Rendered
  "she"; the nearer antecedent is *Nata* (the daughter, the western barbarism), the further is
  *Mulier*, and it is the mother who asks for crumbs in Mark 7:28. **The Latin leaves it open
  and so does the English** — this is deliberate, not an oversight.
- **0209A** — *ipse ab infimis delectationibus abstractam pane coeli reficit.* *abstractam* is
  feminine accusative with **no noun printed**; supplied as `[the soul]` in brackets, which is
  the standing convention for a supplied English word. *animam* is the only candidate the gloss
  offers.
- **0207C, VERS. 32** — *ut eos quos humana fragilitas nequit, gratiae dextera salvet.* The verb
  of the relative clause is elided; supplied as `[heal]` in brackets.
- **0210D, VERS. 24** — *ut David se vocari hominem.* The governing verb is elided; supplied as
  `[refused]` in brackets, since *sed canem mortuum et pulicem unum* requires a verb of refusing.
- **0216D, VERS. 48** — *qui corpus et animam, etc.* The verb falls inside the abridgment;
  supplied as `[offers]` in brackets.
- **0213C, VERS. 6** — *ipsaque **illustrabitur** gratia et in perpetuum **protegetur***.
  Rendered "it", left as vague in English as in the Latin; the resumption tail gives no subject
  and I decline to name one.

---

## §7 · PUNCTUATION, BAND BY BAND (Test 3)

Compared band by band across all 14+16+0+16+2 column anchors, for `:` `;` `?` `!` `«` `»`, with
our markers stripped from both sides first.

- **Question marks: exact parity in every band.** The two lemma-borne marks (*Quem me dicunt?*
  at 0211B, *Quis medebitur…?* at 0217A) ride as printed; the indirect-question case of Pattern
  8b does not arise anywhere in this range.
- **`!` at 0205C** (*Mira stultitia!*) preserved.
- **Colons: zero deficits.** Four bands initially showed a printed colon softened into a comma
  or a semicolon in the English (0206D, 0208C, 0210D, 0214B) and two showed a colon we had
  supplied where Migne prints a comma (0205B, 0205D); **all six were repaired before filing**,
  and the band scan now shows no band in which the English carries fewer of any mark than the
  Latin.
- **Semicolons: the English carries a surplus** — 28 in the English against **9** in the Latin, the difference falling where Migne prints commas
  or full stops in asyndetic pairs (*Munditia … sterilis est, communio apostolorum …*;
  *Micas intellectus quaerit, non panem … cupit*). These are the translator's punctuation of a
  Latin comma, not a rendering of any mark on the plate. **Recorded as a class, not swept**:
  per the 2026-08-14 measurement this is a rate question, and Migne prints semicolons himself in
  this book (0215B, 0215D).

---

## §8 · CONVENTIONS FOLLOWED (so the merge can check them against the other four stints)

- `VERS. n.--` verbatim, untranslated. Lemma Englished. `*usque ad*` → ***as far as***
  (matching 9001/0005 and 9001/0015, already on disk).
- Heads: `CAPUT VII.` → `CHAPTER VII.`, `CAPUT VIII.` → `CHAPTER VIII.`, `CAPUT IX.` →
  `CHAPTER IX.` — **numerals mirror the plate**. `(cont.)` carried untranslated on the two
  continuation heads (0012, 0014); it is our chunk division and the builder merges it.
- Sigla `(BEDA.)` `(HIER.)` `(HIERON.)` `(ISID.)` `(AUG.)` `(ID.)` `(ISID., RAB.)` pass through
  inside `[n: …]` verbatim, unanglicized, in place. **The work prints both `(HIER.)` and
  `(HIERON.)` and the distinction is preserved as printed** — it is not normalized.
- Pattern 17: *tu/tibi/tuus* → **thou/thee/thy** (0205D *Proderit tibi?*, *In tuos usus*;
  0212A *tu non vis*; 0215D *in nomine tuo*); *vos* → **you** (0205D *Vos … contemnitis*,
  0207A *vos gentes*, 0211B *Vos vero*).
- Pattern 2: *De concordia evangelistarum* at 0210B rendered as a work title,
  *On the Concord of the Evangelists*.
- Em-dashes: **none used anywhere in the five chunks.**
- Repeated `## ` heads, `[f:]` tails, `[nt:]` prose notes, `[ed:]` holes, `[d:]` doublings:
  **none in this range** — the four runbook false-positive classes (band arithmetic, `Ibid.`,
  `noteCount`, Pattern 4 tails) were checked and none applies.

---

<!-- ===== stint file: cruces-0015.md, verbatim ===== -->

# 9001 *Evangelium secundum Marcum* (Glossa ordinaria, PL 114) — cruces, chunks 0015–0019

Stint of five chunks, **cols 0217B–0232C**, CAPUT X – CAPUT XIV (through VERS. 30 of CAP. XIV),
6,329 Latin words → 9,862 English (1.56×). One translator, Opus.

**Apparatus fired in this range: `[sic:]` 0 · `[var:]` 5 · `[cj:]` 1 · `[d:]` 0 · `[ed:]` 0 ·
`[nt:]` 0.** `[n:]` 157, at exact parity with the Latin twins.
`verify-english.mjs` clean for 0015–0019 (columns, notes, sections, no duplicate paragraphs).

**Mechanical checks run and clean, band by band** (column anchors partition both twins 1:1):
question marks (3·1·1·2·3), colons, semicolons (0·0·2·5·3), guillemets (zero in both languages),
italic spans, `[n:]` count and position, paragraph count. Every residual band delta is exactly the
content of a marker of ours and is itemised below. **Anchor POSITION** (brief test 2b) was checked
word-against-word for all 62 anchors: every one stands beside the same word as in the Latin.
The one loose case is 0224C, where Migne sets `δευτερώσεις [0224C] vocant)` and English word order
puts the verb first; the anchor is one word off inside the same parenthesis. Not moved.

⚠ **Range boundary, stated explicitly.** This stint is chunks 0015–0019 and **nothing past the
last line of 0019** — CAPUT XIV, VERS. 30, ending *et trinae negationis sordes lavit lacrymis* at
col. 0232C. Everything from `VERS. 32.-- *Gethsemani.*` onward (the Gethsemane glosses, all under
band 0232C) belongs to **chunk 0020 and another stint**. It was not translated, not collated, and
not checked here. ⛔ **Its absence from this file is not clearance for it.**

⚠ **Brief correction of 2026-09-03, and I re-did the count rather than trusting it.**
`data/briefs/9001-lemmata-0015.txt` was regenerated (split by chunk membership rather than by
column band), from **312 spans to 297**. Counting `*…*` spans in my own five Latin files gives
**73 + 48 + 53 + 42 + 81 = 297**, which agrees exactly. The correction dropped 15 tail rows that
were chunk 0020's and restored **two head rows** that the band split had pushed into the previous
stint's file; both are collated in **§2d** below.

---

## §0 · THE THINGS I MOST WANT A PLATE READ FOR

Ordered by value. None of these fired a marker; each is a candidate, per addendum A and the
ship test (B). ⛔ Attribution below is argued, never settled — 9004's stints guessed *whose* a
defect was wrongly 9 times in 14.

### 1. Three NON-WORDS, one per chunk, all singletons in the whole work

Addendum A's decisive class. Each is a form that is no Latin word; each occurs **once** in 9001;
in each case the work itself prints the correct form elsewhere, which is the 8995 *circumcicis*
control done in the affirmative direction.

| col | printed | wanted | control |
|---|---|---|---|
| **0224C** | *simpiliciter* | *simpliciter* | 9001 prints **`simpliciter` correctly five times elsewhere** — chunks 0008 and 0013 (outside this stint) and 0015, 0016 and 0019 **inside it**, the last at 0232C, *Alii simpliciter*, four columns away. Zero other `simpilic-` forms anywhere in `src/latin/`. |
| **0230B** | *juugitur* | *jungitur* | doubled *u*; no `juug-` form anywhere in `src/latin/`. |
| **0227B** | *praegnantibu.,* | *praegnantibus,* | a word truncated **with a period inside the phrase** — `Vae autem praegnantibu., etc.` No `praegnantibu.` anywhere else. |

**No `[sic:]` was fired on any of the three, deliberately.** Addendum A's measured result is that a
non-word suspicion is confirmed *as our corruption* — which makes `[sic:]`, a public claim against
Migne's plate, the wrong marker, and is exactly how eight of 9004's twenty-seven were withdrawn.
Each is rendered for its evident sense (*simply* · *is joined* · *them that are with child*) and
logged here. **If the plate carries the defect, a `[sic:]` belongs at that word; if the plate is
clean, a `data/tei-patches/9001.json` entry does. I cannot tell which from the file, and the
rendering is correct either way.**

⚑ **None of the three falls on a clipped column.** Under PL 114's verified map (PDF page =
(column + 11) / 2, `patrologiaecurs06saingoog`), 0224C is the right column of p. 117, 0227B the
left of p. 119, 0230B the right of p. 120 — and the launch's clipping is confined to the LEFT
column of pp. 114 and 118. All three should be clean, unobstructed reads.

### 2. 0225B — the *sed* with no *non*. THE ONE `[cj:]` I FIRED.

> *Nam in hoc infirmitatem filii, sed quia alter in altero operatur ostendit.*

The `sed` has nothing to answer. Rendered as printed and glossed additively:

`For in this he shows the weakness [cj: *infirmitatem*; read *non infirmitatem*, "not the weakness"] of the Son, but that the one works in the other.`

**Why this one and not the others.** Pattern 18a's bar is that the English *asserts something the
author is arguing against*, and it is explicitly reopened for a **dropped negation answering a
printed correlative** — 7561 @0648, where Migne's setting drops the *non* of *non solum … sed*, is
the same shape and took the same treatment (the gloss opens on the word Migne DID print, so the
verbatim-in-the-Latin-twin guard is satisfied by *infirmitatem*). Without the gloss the page says
Christ shows the weakness of the Son, which the next clause and the whole *Sede a dextris* argument
deny: *Nam et filius subjicit inimicos Patri, et Deum Patrem glorificat super terram.*
⛔ **Not** `[sic:]` — nothing is broken type. **Not** `[var:]` — this is the glossator's own prose,
not a quoted scripture (18a's `WHERE the divergence sits` rule).
⭐ **Plate value:** if Migne prints *non infirmitatem* the defect is ours and this marker must be
withdrawn and a patch filed. This is the single highest-value plate read in the stint.

### 3. 0226B — *Recedent de templo Domino*

Bede's lemma-gloss opens `Recedent de templo Domino, etc.` *Recedent* is a real word (future, 3 pl.)
in a slot that wants the ablative absolute *Recedente*, which *de templo Domino* is otherwise
built for. **Rendered as printed** — "They shall withdraw from the temple, the Lord, etc." — which
does not construe, and is meant not to: Pattern 7. **No marker**: a real, well-formed word is
Migne's until a plate says otherwise (addendum A), and this is also the exact shape of a lost final
letter in transcription. Not glossable under Pattern 18 either: the anomaly is person/number, which
18a leaves declined.

### 4. 0225D — *in libro Regnum*

For *in libro Regum*, "in the book of Kings" — *Regnum* is a real word with no genitive-plural slot
here. Rendered **"in the book of Kings"**, because Migne's own siglum three words later fixes the
reference beyond doubt (`[n: (IV Reg. XII)]`). No marker; one letter, real word, plate candidate.
I record that the rendering is a reading and not a transcription, so a later sweep can see it.

### 5. 0219B — *Et assument.* for the Vulgate's *Et assumens*

Lemma at Mc 13:32 [recte 10:32]; see §2 row for it. A one-letter, OCR-shaped divergence in a
lemma whose gloss (Bede, on Christ foreseeing the disciples' trouble) needs the participle.
Rendered as printed, **no `[var:]`** — see §2's stated policy.

---

## §1 · THE `[var:]` MARKERS — five, each resting on `sources/vulgate/clementine-flat.txt`

**Policy applied throughout, stated so it can be checked:** a `[var:]` fires where a **different
lexeme or a different construction** changes what the English says. It does **not** fire on
orthography (*quicunque* · *maechatur* · *coelum* · *nunquid* · *Joiada*), on word order alone, on a
dropped or swapped connective (*autem* · *enim* · *vero* · *et*), on a synonym (*dilectio* for
*caritas*, *facile* for *cito*), on a lemma clipped short, or on a one-letter divergence of the shape
a scanner makes. Every declined case is still listed in §2 — a list of findings alone cannot be told
apart from a report by an agent that never looked.

1. **0218A · 1 Cor. 14:20.** Migne: *Nolite effici **parvuli** sensibus, sed malitia parvuli estote.*
   Clementine: *nolite **pueri** effici sensibus, sed malitia parvuli estote.* Migne collapses the
   verse's two different words into one, in a gloss whose whole subject is childlikeness
   (*Talium … non istorum*; *similem habent simplicitatem*). Marked
   `[var: Vulg. 1 Cor. 14:20 *nolite pueri effici sensibus*, "be not children in understanding"]`.

2. **0222B · Matt. 25:41.** Migne: *Discedite a me, **mali**, in ignem aeternum.* Clementine:
   *Discedite a me **maledicti** in ignem aeternum.* A different word, in a proof-text quoted for
   the sentence of the reprobate. Marked `[var: Vulg. Matt. 25:41 *maledicti*, "ye cursed"]`.
   ⚑ Two further divergences in the same quotation are logged in §2 and took no marker: Migne's
   *quia* for *enim* (he conflates vv. 41 and 42) and *manducandum* for *manducare*, with a comma
   before it that the English carries.

3. **0223C · John 16:12.** Migne: *Adhuc multa habeo vobis dicere, **quae** non potestis portare
   modo.* Clementine: *sed non potestis portare modo.* A relative for an adversative — a different
   construction, not a different word only. Marked
   `[var: Vulg. Jo. 16:12 *sed non potestis portare modo*, "but you cannot bear them now"]`.

4. **0228D · 1 Cor. 15:34.** Migne: ***Vigilate**, justi, et nolite peccare.* Clementine:
   ***Evigilate** justi.* The whole paragraph is an exposition of *vigilate* (VERS. 36,
   *omnes vigilare praecipimur*), so the proof-text has been drawn to the argument's keyword — the
   7a″ shape exactly, in the direction that matters. Marked
   `[var: Vulg. 1 Cor. 15:34 *Evigilate*, "Awake"]`.

5. ⭐ **0229D · 2 Cor. 5:16 — A DROPPED NEGATION INSIDE A QUOTED SCRIPTURE.** Migne prints
   *Etsi noverimus Christum secundum carnem, sed nunc jam **novimus**.* The Clementine reads
   *sed nunc jam **non** novimus* — "but now we know him so no longer." **As printed, the proof-text
   asserts the opposite of the sentence that adduces it**: Bede's point is that Christ is no longer
   joined to us *corporali praesentia et familiaritate sicut nunc*, and the next clause says
   *Spiritualiter autem semper est nobiscum*. **Rendered without the negation, as printed** —
   Pattern 7a forbids supplying one — and marked
   `[var: Vulg. 2 Cor. 5:16 *sed nunc jam non novimus*, "but now we know him so no longer"]`.
   ⛔ **Deliberately `[var:]` and not `[cj:]`:** 18a's decline class is explicit that a divergence
   inside a quoted scripture is Pattern 14's, wherever it would otherwise meet Pattern 18's bar —
   the rule that separates them is WHERE the divergence sits, not how badly it reads.
   ⚑ Also in the same quotation and not marked: *noverimus* for the Clementine's *cognovimus*.

**Marker-content parity.** Every `[var:]`/`[cj:]` content string was checked against the guard:
the four `[var:]` contents do **not** occur in the Latin twin (they are the Clementine's words), and
the `[cj:]`'s leading italic *infirmitatem* **does** occur verbatim in the Latin twin. That is the
inverted test and both halves hold.

---

## §2 · THE LEMMA DIVERGENCE LIST — 7a″ point 4, agreements included

Every italic span in cols 0217B–0232C, collated against `clementine-flat.txt` by book chapter:verse.
**Agreements are recorded, because a list of findings alone cannot be told apart from a report by an
agent that never looked.**

### 2a. Checked and AGREEING with the Clementine exactly (orthography aside)

Verse lemmata, in order: Mc 10:8 *Et erunt* · 10:9 *Homo non separet* · 10:10 *Et in domo* ·
10:13 *Discipuli autem comminabantur offerentibus* · 10:14 *Talium enim est regnum Dei* ·
10:15 *Quisquis non receperit regnum* + *Regnum Dei* · 10:17 *Procurrens quidam genu* ·
10:18 *Quid me dicis* · 10:19 *Ne adulteres* · 10:20 *Magister* · 10:21 *Et veni, sequere me* ·
10:23 *Quam difficile* · 10:25 *Facilius est camelum* · 10:26 *Et quis potest* · 10:27 *Apud Deum* ·
10:28 *Ecce nos dimisimus* + *et secuti sumus te* · 10:30 *Centies tantum* · 10:31 *Multi autem* (×2) ·
10:32 *Et stupebant* · 10:35 *Et accedunt* · 10:38 *Aut baptismo* · 10:39 *Calicem quidem* ·
10:40 *Sedere autem* + *Vobis* · 10:41 *Indignati sunt* · 10:42 *Jesus autem vocans eos* ·
10:46 *Et veniunt Jericho* + *Et proficiscente eo* + *Bartimaeus caecus* · 10:47 *Qui cum audisset* +
*Fili David* · 10:49 *Et vocant caecum* · 10:50 *Qui, projecto vestimento suo* + *Exsiliens* ·
10:52 *Vidit et sequebatur* + *In via* ·
11:1 *Bethaniae* + *Duos ex discipulis* (Migne omits *suis*) · 11:2 *Et statim* · 11:4 *Pullum ligatum* ·
11:6 *Et dimiserunt* · 11:7 *Et sedit* · 11:8 *Alii autem* · 11:9 *Et qui praeibant* ·
11:10 *Benedictus qui venit* · 11:11 *Et introivit* + *In templum* + *Et circumspectis* ·
11:13 *Cumque vidisset* · 11:14 *Jam non amplius* · 11:15 *Coepit ejicere* + *Vendentes* ·
11:16 *Et non sinebat* · 11:17 *Vos autem fecistis* · 11:20 *Aridam factam* · 11:21 *Recordatus Petrus* +
*Amen, dico vobis* · 11:23 *Quicunque dixerit* · 11:25 *Et cum stabitis* · 11:28 *In qua potestate* ·
11:29 *Interrogabo* · 11:31/32 *Si dixerimus* (×2) · 11:33 *Neque ego dico vobis* ·
12:1 *Lacum* + *Peregre profectus* · 12:6 *Quia reverebuntur* · 12:7 *Coloni autem* · 12:8 *Et ejecerunt* ·
12:10 *Lapidem quem reprobaverunt* · 12:13 *Et mittunt ad eum* · 12:14 *Magister, scimus* ·
12:15 *Qui sciens versutiam* + *Denarium* · 12:17 *Reddite ergo quae sunt Caesaris* + *Quae sunt Dei Deo*
(×2) · 12:18 *Sadducaei* (×2) · 12:20 *Septem ergo* · 12:25 *Neque nubent, neque* + *neque nubent* +
*neque nubentur* · 12:26 *Ego sum Deus* · 12:28 *Interrogavit eum* · 12:29 *Primum omnium* ·
12:32 *Bene magister* · 12:34 *Et nemo* · 12:36 *Sede a dextris* · 12:38 *Cavete* ·
12:40 *Qui devorant domos viduarum* · 12:41 *Gazophylacium* + *Aspiciebat quomodo* + *Divites* ·
12:42 *Quadrans* · 12:44 *Omnes enim* ·
13:1 *Et cum egrederetur* · 13:2 *Vides has* · 13:3 *Et cum* · 13:5 *Et respondens* ·
13:6 *Multi enim venient* · 13:8 *Exsurget enim* · 13:9 *Videte autem* + *Videte* ·
13:10 *Et in omnes gentes* · 13:14 *Cum autem videritis* · 13:21 *Et tunc si quis* ·
13:24 *Sed in illis diebus* · 13:25 *Decidentes* + *Et virtutes quae* + *Movebuntur* ·
13:27 *A quatuor ventis* · 13:28 *A ficu autem* · 13:31 *Coelum et terra transibunt* · 13:32 *Neque filius* ·
13:33 *videte, vigilate* · 13:34 *Et janitori* · 13:35 *Vigilate ergo* (×2) · 13:37 *Quod autem vobis* ·
14:1 *Erat autem pascha* + *Et quaerebant summi sacerdotes* · 14:2 *Non in die festo* ·
14:3 *Et cum esset Bethaniae* + *Simonis leprosi* + *Et recumberet, venit* + *Mulier* + *Alabastrum* +
*Nardi spicati* + *Et fracto* · 14:4 *Erant autem quidam* + *Ut quid perditio ista* ·
14:5 *Poterat enim unguentum* · 14:6 *Bonum opus operata* · 14:7 *Me autem non semper* ·
14:8 *Quod habuit* · 14:9 *Amen dico vobis* · 14:10 *Uno de duodecim* + *Abiit ad* ·
14:11 *Et quaerebat quomodo illum* · 14:13 *Ite in civitatem* + *Homo lagenam aquae* + *Sequimini* ·
14:15 *Coenaculum grande* · 14:17 *Vespere autem* · 14:18 *Amen dico* + *Unus ex vobis* ·
14:19 *Contristari* · 14:20 *Unus ex duodecim* + *Qui intingit* + *Unus ex vobis tradet me* ·
14:21 *Vae autem* · 14:22 *Manducantibus* + *Accepit* · 14:23 *Gratias* + *Biberant* ·
14:25 *Jam non bibam* + *Vitis* · 14:26 *Et hymno dicto* + *In montem Olivarum* +
*Omnes scandalizabimini* · 14:27 *Percutiam pastorem* (×2) · 14:29 *Petrus autem*.

In-gloss scripture agreeing exactly: Luc. 9:23 *Si quis vult post me venire* · Psal. 24:16
*Unicus et pauper sum ego* · Psal. 61:11 *Divitiae si affluant, nolite cor apponere* · Psal. 33:6
*Accedite ad eum et illuminamini* · Joan. 12:26 *Si quis mihi ministrat, me sequatur* ·
Psal. 131:17–18 *Paravi lucernam Christo meo: inimicos ejus induam confusione* · Luc. 1:32
*Hic erit magnus, et filius Altissimi vocabitur* · Psal. 4:7 *Signatum est super nos lumen vultus tui*
(Migne stops before *Domine* and prints *etc.*) · Psal. 110:10 *initium sapientiae timor Domini* ·
Matt. 22:29 *Erratis nescientes Scripturas neque virtutem Dei* · Psal. 108:7 *Oratio ejus fiat in
peccatum* · Joan. 8:20 *Haec verba locutus est Jesus in gazophylacio, docens in templo* ·
Job 26:11 *Columnae coeli contremiscunt, et pavent ad nutum ejus* · Act. 1:7 *Non est vestrum nosse
tempora vel momenta quae Pater posuit in sua potestate* · Matt. 25:34 *Venite, benedicti Patris mei* ·
1 Cor. 5:7 *Etenim Pascha nostrum immolatus est Christus* · Psal. 18:3 *nox nocti indicat scientiam* ·
Psal. 40:10 *Qui edebat panes meos, magnificavit super me supplantationem* · Matt. 26:22/25
*Nunquid ego sum, Domine? / Rabbi?* · 1 Thess. 5:7 *Qui ebrii sunt, nocte ebrii sunt* ·
Marc. 4:11 *Vobis datum est nosse mysterium regni Dei* · Luc. 10:19 *Dedi vobis potestatem* ·
Zach. 13:7 *Percute pastorem* (the prophet's imperative) against Marc. 14:27 *Percutiam pastorem*
(the Father's answer) — **Migne's contrast is exact in both directions and is not a defect.**

### 2b. Checked, DIVERGENT, and NOT marked — with the reason in each case

| col | Migne prints | Clementine | why no marker |
|---|---|---|---|
| 0217C | *Si licet **viro*** (Mc 10:2) | *Si licet **vero*** | **The Clementine is the outlier here**, not Migne: *viro* is the reading the gloss expounds and the one most Vulgates carry. A call turning on one letter is exactly what `sources/vulgate/README.md` says not to trust this copy to. Recorded; marking Migne would be backwards. |
| 0217D | *maechatur* (Matt. 19:9) | *moechatur* | ae/oe interchange, Pattern 9 orthography. Note also that Migne's siglum reads `(Matth. V)` for what is Matt. 19:9 — **his citation, passed through verbatim**, not ours to correct. |
| 0217D | *Quicunque* | *quicumque* | orthography, throughout the work. |
| 0218C | *Vade, quaecunque habes vende* | Mc 10:21 exactly | agrees; the siglum `(Matth. V)` is again Migne's own. |
| 0219B | ***Et assument.*** (Mc 10:32) | *Et **assumens*** | different tense/person, and the gloss needs the participle. **One letter, OCR-shaped** (ns → nt), so it is as likely ours as his; §0.5. Rendered "*And they shall take.*" |
| 0219C | *Baptismo habeo baptizari … perficiatur.* (Lc 12:50) | *Baptismo **autem** habeo … perficiatur **?**` | dropped connective; and Migne closes with a **period** where the Vulgate has a question mark. Pattern 8: the period rides as printed and **no `?` is supplied**. |
| 0219D | *Non enim personarum acceptio est apud Deum* `[n: (Act. X)]` | Act. 10:34 is *non est personarum acceptor Deus*; the WORDS are Rom. 2:11 *non enim est acceptio personarum apud Deum* | Migne's siglum points at a different verse from the one he quotes. Recorded; Pattern 14 compares a quotation with its own received text, and there is no single text to compare this against. |
| 0220B | *At **illo** multo magis* (Mc 10:48) | *At **ille** multo magis* | oblique form with no subject slot; one letter, OCR-shaped. Rendered as the fragment it stands for, "*But he much the more.*" |
| 0220B | *Et, surge qui dormis* (Eph. 5:14) | *Surge qui dormis* | Migne's own connective, carried. |
| 0220D | *Quodcunque petieritis in oratione credentes accipietis* (Matt. 21:22) | *Et omnia quaecumque petieritis* | singular for plural; sense unchanged. |
| 0220D | *Rabboni, **et** videam* (Mc 10:51) | *Rabboni, **ut** videam* | et/ut, one letter, OCR-shaped, in a lemma. Rendered "*Rabboni, and let me see.*" |
| 0220D | *Vade, fides tua **salvum te** fecit* (Mc 10:52) | *fides tua **te salvum** fecit* | word order only. |
| 0221A | *Ego sum via, veritas et vita* (Jo. 14:6) | *Ego sum via, **et** veritas, et vita* | dropped connective. |
| 0221B | *Multi autem straverunt* (Mc 11:8) | *Multi autem **vestimenta sua** straverunt in via* | a clipped lemma; rendered as the phrase it stands for per Glossa convention 3 ("But many spread their garments"). Not a divergence. |
| 0221B | *ei omne genu flectatur* (Phil. 2:10) | *in nomine Jesu omne genu flectatur* | the glossator has woven the verse into his own *ut* clause and put *ei* where the syntax needs it. Weave, not variant. |
| 0222A | *Discedite … quia esurivi et non dedistis mihi, **manducandum*** | Matt. 25:42 *esurivi **enim**, et non dedistis mihi **manducare*** | conflation of vv. 41–42 plus a gerundive for the infinitive; the marked half of this quotation is §1.2. The odd comma before *manducandum* is Migne's and is carried. |
| 0223A | *Digne transferimur ad gentes, quia vos indignos judicatis* `[n: (Matth. XXI)]` | Act. 13:46 *sed quoniam repellitis illud, et indignos vos judicatis aeternae vitae, ecce convertimur ad gentes* | a free paraphrase of Acts under a Matthew siglum, and the gloss itself says *quando dixerunt apostoli*. Too loose to reduce to one marker; argued here instead. |
| 0223C | *Nolite **sanctum dare** canibus* (Matt. 7:6) | *Nolite **dare sanctum** canibus* | word order only. |
| 0224D | *Justi ut palma **florebunt*** (Ps. 91:13) | *Justus ut palma florebit* | Migne pluralises to fit the gloss's *omnibus reprobis* frame; recorded, sense unchanged. |
| 0225A | *fides quae per **dilectionem** operatur* (Gal. 5:6) | *fides quae per **caritatem** operatur* | synonym, and the gloss's own preceding words are *in dilectione Dei et proximi*, so the quotation has been drawn to them. Recorded as a 7a″-shaped pull that does **not** change what the English says. |
| 0225B | *Non longe es a regno Dei* (Mc 12:34) | *Non es longe a regno Dei* | word order only. |
| 0225B | *Qui **facile** credit **levis est corde**, et minorabitur* (Eccli. 19:4) | *Qui credit **cito** levis corde est* | synonym plus order. |
| 0225D | *Tulit **Joiada** pontifex* (IV Reg. 12:9) | *Et tulit **Jojada*** | spelling and a dropped connective. |
| 0225D | *Vidua pauper* (Mc 12:42) | *vidua **una** pauper* | Migne drops *una*; a clipped lemma. |
| 0226A | *Lapis super lapidem non relinquetur* (Lc 21:6) | *non relinquetur lapis super lapidem, qui non destruatur* | order plus truncation. |
| 0226C | *quia non statim finis* | Mc 13:7 *sed nondum finis*; Lc 21:9 *sed nondum statim finis* | a re-quotation folded into the glossator's own sentence (*admonentur, quia…*). Closest to Luke; the divergence is the connective and *non* for *nondum*. Recorded, not marked. |
| 0226D | *cui auscultabant omnes **qui erant in Samaria** a minimo usque ad maximum … **eo quod** multo tempore **magicis artibus** dementasset eos* | Act. 8:10–11, without the Samaria clause, with *propter quod* and *magiis suis* | a conflation of two verses with three small divergences; better argued here than flattened into one marker. |
| 0227B | *Et erit lux lunae sicut **sol*** (Is. 30:26) | *sicut **lux solis*** | one dropped word; the siglum `(Isa. III)` is Migne's for Isaiah 30. |
| 0228B | *repositi sunt **et** igni reservati* (II Pet. 3:7) | *repositi sunt, igni reservati* | added connective. |
| 0228B | *terra **vero** in aeternum stat* (Eccl. 1:4) | *terra **autem*** | synonym. |
| 0228B | ***In eo enim** sunt omnes thesauri* (Col. 2:3) | ***in quo** sunt* | demonstrative for relative, so the verse can stand as its own sentence. Weave. |
| 0228C | *Si non annuntiaveris iniquo iniquitatem suam, sanguinem ejus de manu tua requiram* `[n: (Ezech. III)]` | Ez. 3:18 is far longer and reads *non annuntiaveris **ei*** … *sanguinem **autem** ejus* | a compression, close also to Ez. 33:8. Recorded. |
| 0230B | *Unumquodque animal ad sibi simile **juugitur*** `[n: (Matth. XXVIII)]` | Eccli. 13:19 *Omne animal **diligit** simile sibi* | a different verb and a different construction, under a Matthew siglum; **and the verb as printed is a non-word** (§0.1), which is why no `[var:]` was fired on top of it — the divergence cannot be stated cleanly until the word is known. |
| 0230C | *Et **prima** die azymorum* (Mc 14:12) | *Et **primo** die azymorum* | one letter, OCR-shaped. |
| 0230C | *Circumamicta **varietate*** (Ps. 44:15) | *circumamicta **varietatibus*** | number; the gloss continues *varietate virtutum*, which is why the singular sits there. |
| 0229D | *Ecce ego vobiscum sum **usque ad consummationem saeculi omnibus diebus*** (Matt. 28:20) | *omnibus diebus, usque ad consummationem saeculi* | order reversed. ⚑ **This is an addendum-D `usque ad` LOOK-ALIKE** — the words are the verse's own, not the abridgment formula, and are rendered as scripture. |
| 0229D | *Vulnerasti cor meum, soror mea, in uno oculorum tuorum* (Cant. 4:9) | *soror mea, **sponsa; vulnerasti cor meum** in uno* | Migne drops the repetition and *sponsa*. |
| 0232A | *Nunquid **quia** dormit non adjiciet ut resurgat?* (Ps. 40:9) | *Numquid **qui** dormit* | one letter. **Both negatives, *Nunquid* and *non*, are carried in the English** ("Because he sleepeth, shall he not rise again?"), and the printed `?` is kept. The siglum `(Zach. XIII.)` belongs to the *Percutiam pastorem* that follows, not to this psalm; Migne's, passed through. |
| 0232C | *Priusquam gallus cantet* (Matt. 26:34) | *antequam gallus cantet* | synonym. |
| 0232C | *Qui viderit mulierem ad concupiscendum, jam moechatus est eam* (Matt. 5:28) | *ad concupiscendum **eam** … eam **in corde suo*** | two truncations. |

### 2c. Fragmentary lemmata expanded under Glossa convention 3

Recorded so nobody reads them as conformation later. ⛔ Per the "name the control's class" note, a
**clipped** lemma and a **complete one-word** lemma are different classes and are not to be
contrasted: *Magister.* · *Denarium.* · *Alabastrum.* · *Quadrans.* · *Contristari.* · *Gratias.* ·
*Exsiliens.* · *Decidentes.* · *Movebuntur.* · *Bethaniae.* · *Vitis.* · *Cavete.* · *Interrogabo.*
have nothing elided and are rendered as they stand.

Expanded: *Si licet viro.* → "Whether it is lawful for a man to put away his wife" (Mc 10:2) ·
*Quicunque dimiserit.* → "Whosoever shall put away his wife" (Mc 10:11) · *Quid me dicis.* → "Why
callest thou me good" (Mc 10:18) · *Et quis potest.* → "And who can be saved" (Mc 10:26) ·
*Ecce nos dimisimus.* → "Behold, we have left all" (Mc 10:28) · *Procurrens quidam genu.* → "A
certain man running up, on bended knee" (Mc 10:17, *genu flexo*) · *Multi autem straverunt.* → "But
many spread their garments" (Mc 11:8) · *Bis gallus vocem.* → "The cock shall twice give voice"
(Mc 14:30).

⚑ **A distinction kept on purpose:** Mc 10:28's lemma is *dimisimus* and the gloss's re-quotation of
the same act is Matthew's *reliquimus*. They are rendered with two different English verbs ("we have
left" / "we have forsaken") so the change of word is visible; collapsing them would be the
conformation 7a″ names.

---

## §3 · CRUCES BY COLUMN — Migne's own prose

### 0217D · *Non discipuli interrogaverunt prius* — where the negative sits

Rendered **"It was not the disciples who asked first"**: the *non* stands before the subject, not
before the verb, and English's only exponent for subject-focus negation is the cleft. The rival
("The disciples did not ask first") puts the negative on the verb, which is the 2a misattachment
class exactly. Both construe; the word order decides, and it is recorded here because it is a
judgment and not a reading.

### 0217D · *Deus separat: qui conjungit … sic habent uxores quasi non habentes*

Migne's sentence changes number in the middle: singular *qui conjungit*, then plural *habent*.
Rendered as printed, with the colon and the parenthesis where he sets them; no verb supplied and no
number smoothed. The *quasi non habentes* (1 Cor. 7:29) is carried with its negative.

### 0220B–C · *Populus gentium … contradicebant multi* — an anacoluthon, kept

The nominative *Populus gentium* is left hanging and the sentence continues with *contradicebant
multi*. **Kept hanging in the English.** Straightening it would put our hand on a break the plate
makes, and *nec tamen … poterat … prohibere* is carried as "nor yet could".

### 0221C · *Pedes sunt extremi quos ad jungendum constituit Apostolus*

*ad jungendum* has no expressed object. Rendered "which the Apostle appointed for the joining
together", and the relative *qui* is taken as the feet, which is the only antecedent available.

### 0221D–0222A · *significat quod **adventum** Christi … salus est*

An accusative where the *quod* clause wants a nominative. English has no exponent for the case, so
the clause is rendered with "the coming of Christ" as its subject and the anomaly is invisible on
our side — recorded here for that reason, and left unmarked (Pattern 9's boundary: the defect has no
English exponent, and unlike 11632's *signa … ardeat* nothing about the printed sentence is
recoverable by marking one word).

### 0223C · *cum aut hic **cui** quaerit minus intelligit*

*cui* where the sense wants *qui* — "he **who** seeks". Rendered as printed ("he to whom he seeks"),
which does not construe. Real word, one letter, plate candidate; no marker. The correct reading is
plain from the sentence's own second limb (*aut odio aut contemptu veritatis indignus est*).

### 0224C · *recte hujusmodi fabulam fingunt*

Bede's sentence, as printed, says the Sadducees **rightly** frame the seven-brothers fable to convict
of raving those who assert the resurrection of bodies — which is not what Bede is arguing. Rendered
with *recte* as "rightly", **not** softened to "fittingly" or "consistently": both are readings, and
Pattern 7 forbids choosing one inside the text. Flagged here so a blind reader does not take it for
a silent repair. Declined for `[cj:]`: *recte* is neither a negation nor a correlative, and 18a's
extension is scoped to those.

### 0226B · *usque ad erat luitura* — a supplied "it"

The abridgment removes the subject of *erat luitura* (feminine singular, presumably the city or
the nation named inside Bede's elided sentence). English cannot leave it unexpressed; **"it" is
supplied and is ours.** The same applies to three other resumption tails in the stint —
0217C *concessa est*, 0218C *testatur*, 0219B *fruuntur* — where the unexpressed subject is inside
the elided text and the supplied pronoun is a translator's necessity, not a reading of the Latin.
Brief §"unexpressed subject" requires this to be said, so it is said here in one place.

### 0227B · *uxorem Jonathae … filium sinu suo lapsum recepisse perpetuo claudum*

Migne's *libro Historiarum* anecdote; *recepisse* takes *filium … claudum*. Rendered "took back her
son, fallen from her bosom, lame for ever". No difficulty beyond the truncated *praegnantibu.* in
the lemma above it (§0.1).

### 0230A · *passuros post paucos dies praescit*

A dangling accusative plural in a clause whose subject is Christ; the sense wants *passurus*
("about to suffer"). **Rendered as printed** — "those about to suffer after a few days, he foreknows
that his Gospel is to be preached in the whole world" — which does not construe, deliberately.
Declined for `[cj:]`: 18a leaves number/person anomalies that merely fail to construe declined
(11064 @1154C is the named precedent), and this is one.

### 0230A · *futura impii contumelias tacet*

*futura* (neuter plural) against *contumelias* (feminine plural). Gender/number disagreement with no
English exponent — Pattern 9. Rendered "is silent about the coming reproaches of the wicked man".
Marked here so a later sweep does not churn it.

### 0230A · *nomine non numine*

A jingle Migne prints and English cannot keep: *nomen* / *numen*. Rendered "in name not in divine
power", which loses the sound and keeps the sense. Recorded because the loss is ours.

### 0231C · *Judas aliis contristatis … qua Dominum tradit; etiam manum … mittit*

The semicolon falls inside what should be one clause and the ablative phrase has no verb until after
it. **Migne's semicolon is kept exactly where he sets it** (Pattern 8), and the English breaks where
he breaks.

### 0231D · *exstinguuntur inimici quae sunt mysteria Ecclesiae Christi*

*quae* (neuter plural) after *inimici* (masculine plural). Rendered as printed, "the enemies are
extinguished, which are the mysteries of the Church of Christ" — gender with no English exponent
again, and the resumption tail's own referent is inside the elided text.

### 0232A · VERS. 26 lacks its `--`

Migne sets `VERS. 26. *Et hymno dicto.*` where all 111 other verse addresses in this stint print
`VERS. n.-- `. **Reproduced exactly as printed**, per "Migne's own printing is not yours to tidy."
The verse addresses are otherwise in sequence throughout cols 0217B–0232C; no out-of-order verse
number in this range.

### 0225D–0226A · VERS. 42 for Mc 12:42, and VERS. 36 for Mc 13:37

Two places where Migne's verse address does not match the verse his lemma quotes
(`VERS. 36.-- *Quod autem vobis.*` is Mc 13:37). **His numbering, reproduced.**

### 0224C · *nubere* / *ducere* — a lexical point English cannot carry in the same words

Bede's note is that Latin says *nubere* of women and *ducere* of men, so *neque nubent, neque
nubentur* has to be taken loosely. Rendered "it is properly of women that marrying is said: and of
men, the taking of a wife", then *neque nubent* / *neque nubentur* as "neither shall they marry" /
"neither shall they be married". No new italic span was opened for the mentioned verbs, because
italic spans are 1:1 with the Latin.

### 0224B, 0226D · Greek carried verbatim

δευτερώσεις (0224C) and Φυλάττειν (0225D) are reproduced exactly as printed, untranslated where
Migne leaves them untranslated and glossed where he glosses them (*Φυλάττειν Graece, servare
Latine*).

### 0223D–0224A · Migne's *Regnum* / two elliptical verbs

*Ficus enim non peccavit … sed sacerdotes* (0222B) is elliptical; English supplies "did" to close it
("but the priests did"), which is an English ellipsis and not a supplied Latin verb. Recorded.

---

## §4 · SECTIONS READ CLEAN — named, so a blind reader knows where I looked

The following were read line by line against the Latin and are **clean**: no defect, nothing
declined, nothing left:

- **0217B–0217C**, CAPUT X opening through VERS. 5 (the Judaea/Galilee geography and the
  *Cornuto syllogismo* tail).
- **0218A–0219A** entire, VERS. 13 through VERS. 28 — fifteen consecutive glosses, the densest
  stretch of straightforward lemma-and-comment in the stint, including all four *usque ad*
  resumptions and the two Psalm citations, both of which agree verbatim.
- **0219C–0220A**, VERS. 35 through VERS. 42 (the sons of Zebedee), apart from the Act. X siglum
  noted in §2b.
- **0221A–0221C**, CAPUT XI VERS. 1 through VERS. 8.
- **0222C–0223B**, VERS. 16 through VERS. 32 — the temple-cleansing and the *In qua potestate*
  exchange, entire.
- **0224A–0224B**, VERS. 10 through VERS. 17 (the tribute money), entire.
- **0225A**, VERS. 28 through VERS. 34 as far as *Et nemo*.
- **0226C–0227A**, CAPUT XIII VERS. 3 through VERS. 10, entire.
- **0227C–0228A**, VERS. 21 through VERS. 28, entire.
- **0229A–0229D**, CAPUT XIV VERS. 1 through VERS. 6, entire (the Bethany anointing) — the only
  entry from this stretch is the §1.5 `[var:]` at its far end.
- **0230C–0231B**, VERS. 12 through VERS. 18, entire.
- **0232B–0232C**, VERS. 27 through VERS. 30, entire.

**Zero guillemets in either language across all five chunks** — checked, not assumed.
**Zero `usque ad` look-alikes missed:** the string `usque ad` occurs 59 times in this stint and was decided per
occurrence (addendum D). One occurrence is **not** the formula — Matt. 28:20 at 0229D, §2b — and one
is the formula standing *inside* the same italic span as its resumption, `*usque ad Deus meus
misericordia ejus praeveniet me [n: (Psal. LVIII)]*` at 0225D, which is reproduced as one span.

**Foot-of-page apparatus:** none in this range per the launch's checked zero for the work; no `[cn:]`
is expected or present in the Latin twins, and none was invented.

---

## §5 · CANDIDATES CONSIDERED AND REJECTED, with reasons

Each of these was a live suspicion. All were declined; the reasoning is recorded so it is not re-run.

1. **`[sic:]` on *simpiliciter*, *juugitur*, *praegnantibu.*** — declined. Addendum A: a non-word
   suspicion has been confirmed as OUR corruption every time it was tested, and `[sic:]` is a public
   claim against Migne's plate. Cruces + plate request instead (§0.1). **This is the single decision
   in the stint most likely to be reversed by a plate read, and it should be — in the direction of
   adding three markers, not removing any.**
2. **`[sic:]` on *Recedent*, *illo*, *assument*, *cui*, *Regnum*, *prima*, *et videam*** — declined.
   All are real, well-formed Latin words. Addendum A is 4-for-4 that a real word reading oddly is
   Migne's, and two of the four refuted arguments in that batch were excellent ones. Rendered as
   printed, logged.
3. **`[var:]` on the *dilectio*/*caritas*, *facile*/*cito*, *vero*/*autem*, *noverimus*/*cognovimus*
   pairs** — declined as synonym-level. Firing on these would put a marker on most pages and bury
   §1's five.
4. **`[var:]` on every dropped *autem*/*enim*/*et*** — declined; Pattern 14's test is a change of
   sense, and eight such were found (listed in §2b).
5. **`[cj:]` on *recte* (0224C), *passuros* (0230A), *futura* (0230A), *adventum* (0221D)** —
   declined. 18a's reopened class is negations and correlatives (plus a stranded comparative);
   mood, case, number and person anomalies that merely fail to construe stay declined, and 18a is
   explicit that its census is closed and not to be reopened.
6. **A `[d:]` on *Percutiam pastorem* printed twice at 0232B** — declined, and it is not close. The
   two occurrences are the two halves of Jerome's own argument (the prophet asks *Percute*, the
   Father answers *Percutiam*), and the second is the answer, not an eye-skip. Marking it would
   destroy the point.
7. **A `[d:]` on *Sadducaei, etc.* printed twice at 0224B–C** — declined. Two separate glosses on
   the same lemma, one Jerome's and one Bede's, each with its own comment. The Glossa does this
   throughout; it is structure, not dittography. Same for *Si dixerimus* at VERS. 31 and VERS. 32,
   which are two different verses, and *Quae sunt Dei Deo* at 0224B, which Migne glosses twice
   under *Aliter*.
8. **Supplying `?` at 0223A** (*quid amplius rogabit, nisi quod perseveret in eo quod obtinuit?*) —
   not needed: Migne prints the mark and it is kept. **Conversely, no `?` was supplied** at
   0217C *Nunquid Deus contrarius sibi est, etc.*, 0227A *Quare haec omnia inferantur*, or
   0219C's *Baptismo habeo baptizari … perficiatur.*, all of which Migne closes without one.
   Question-mark parity is exact per band in all five chunks.
9. **A comma→semicolon sweep in 0015 and 0016**, where Migne prints **zero** semicolons in 2,558
   Latin words — declined as an *initiative*, and instead simply obeyed: the English carries zero
   semicolons in those two chunks. The Tobit exception was not invoked, because it does not need to
   be; the plate's own practice was counted first (Latin 0·0·2·5·3 across the five chunks) and matched
    exactly, band by band. The English shows 0·0·**3**·5·3 only because the `[cj:]` marker's own
    fixed form carries a semicolon inside it at 0225B.
10. **A `[nt:]` conversion of any note** — declined. All 157 notes in this range are citations or
    bare attribution sigla (`(BEDA.)`, `(HIER.)`, `(ID.)`, `(BED.)`, `(ISID.)`, `(HILAR.)`,
    `(Id.)`, `(Cap. I)`), which Pattern 15 keeps as `[n:]`. Note that Migne prints **both**
    `(BEDA.)` and `(BED.)`, and both `(ID.)` and `(Id.)`, within a few columns; the variance is
    his and is carried per occurrence, unnormalized.
11. **A `[f:]` tag anywhere** — declined per runbook false positive 4: this is lemma-and-gloss
    commentary, not a florilegium, however much inline scripture it carries.
12. **Reporting the column-band gaps** (0217B→0217C with no A; 0223C→0223D; 0226A→0226B) —
    declined per runbook false positive 1. No text breaks mid-word or mid-construction across any
    anchor in this range; that was checked, and it is the only signal in the class.
13. **`*BEDA.*` at 0230B, set as an italic span in running text rather than as a note** — carried
    verbatim, untranslated, in its italics. It is a siglum, and sigla pass through (convention 4);
    it is not a lemma and was not rendered as one. The same treatment was given to the bare
    `HIER.` at 0224D, which Migne sets in roman inside the paragraph.

---

## §6 · WHAT THE FOURTH TEST TURNED UP

Run last, with the counts already known clean: each finished paragraph read back against the Latin
asking only *does it assert what he asserts?* Three repairs came out of it, all in the negation-scope
family that no count-based check sees, and all made **after** the chunks otherwise verified:

- **0220D** — *non falsas divitias quaeramus, sed lucem* had been rendered "let us **not seek** false
  riches, but the light", floating the negative onto the verb. The `sed` pivots on *falsas divitias*.
  Now "let us **seek not** false riches, but the light."
- **0223D** — *Non hoc ignorando dixit … sed* had been "He **did not say** this in ignorance",
  same class, same fix: "He **said this not** in ignorance."
- **0231D** — *sanguis … non **omnes** emundat* had been "does not cleanse all", where English
  scope is genuinely ambiguous and the wrong reading (that it cleanses nobody) is available. Now
  "cleanses not all", which is the 2a trigger population exactly: a negative on a verb with
  *omnes* adjacent.

⚑ All three read perfectly well before the fix. That is the point of the test.

Two further sentences read *smoothly where the Latin is rough* and were therefore treated as
suspects rather than successes; both were left rough on purpose and are logged above — 0226B
*Recedent* (§0.3) and 0230A *passuros* (§3).


---

## §2d · THE TWO HEAD SPANS RESTORED BY THE 2026-09-03 BRIEF CORRECTION

Both stand at band **0217A** — the last anchor of chunk 0014 — while belonging to chunk 0015, which
is why the band split lost them. **Both were translated in the normal course** (they open CAPUT X in
my Latin, and the English carries them); what was missing was their entry in the collation, and this
supplies it. **Both agree with the Clementine exactly**, and neither is a divergence:

| span | Migne | Clementine | verdict |
|---|---|---|---|
| `VERS. 1.-- *Et inde exsurgens.*` | *Et inde exsurgens.* | Mc 10:1 *Et inde exsurgens venit in fines Judaeae ultra Jordanem* | **agrees verbatim**; a lemma clipped at the verb, and the gloss on it is geographical (*Hucusque ea quae in Galilaea … hinc narrat quae in Judaea*), so nothing turns on the elided words. Rendered "*And rising up from thence.*" — no expansion needed, the fragment is English as it stands. |
| `VERS. 2.-- *Pharisaei interrogabant.*` | *Pharisaei interrogabant.* | Mc 10:2 *Et accedentes pharisaei interrogabant eum* | **agrees verbatim** (Migne capitalises *Pharisaei*, which is his own practice throughout). Rendered "*The Pharisees asked.*" |

⚑ Nothing in either changes a rendering already filed, and no marker follows from them. The third
span in that head region, *Si licet viro* at 0217C, **was** in the original brief and is adjudicated
at §2b — it is the one interesting divergence in the head, and it runs the unexpected way, with the
Clementine as the outlier.

---

## §7 · WHAT THE SHIP TEST (CLAUDE.md 8a) STILL OWES ON THIS RANGE

`node scripts/plate-gate.mjs 9001` currently fails for the whole work — 27 `[sic:]`/`[var:]` markers
against **0 recorded plate reads** — and **five of those 27 are mine**, at cols **0218A · 0222B ·
0223C · 0228D · 0229D**. They cannot ship until those columns are read. Recorded here so the debt is
attached to the range that incurred it.

⚑ **The measured prior says these five are the safe half of the population:** on 9004, *46 of 46
`[var:]` stood at the plate and 8 of 27 `[sic:]` fell, every fall a single word and not one a quoted
clause.* All five of mine are `[var:]` on quoted clauses of three words or more, which is the class
that has never fallen. **I fired zero `[sic:]`**, which is why the three non-words of §0.1 are cruces
and not markers.

⚑ The `[cj:]` at **0225B** (§0.2) is not in the gate's population, and it is the one marker in this
stint I would most want a plate to adjudicate before ship — not because it is likely wrong about the
sense, but because if Migne prints *non infirmitatem* the defect is Corpus Corporum's and the marker
must be withdrawn in favour of a patch.

**Columns I would put in front of a reader, in order:** 0224C (*simpiliciter*, and read the whole
line — addendum C) · 0225B (the *sed* with no *non*) · 0230B (*juugitur*) · 0227B (*praegnantibu.*) ·
0226B (*Recedent*) · then the five `[var:]` columns for the gate. **None of the six candidate columns
falls on the two clipped leaves** named in the launch (pp. 114 and 118, cols 0217/0218 and
0225/0226) — 0225B is on p. 118 and is in the LEFT column, so that one may be affected; the other
five should be clean reads.

---

<!-- ===== stint file: cruces-0020.md, verbatim ===== -->

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
