# Cruces — 8967 *Glossa ordinaria*, **Liber Psalmorum**, chunks 0077–0081
### Band C, stint 1 · cols 1011B–1025C · Psalms CI–CV · 5,928 Latin words

---

## §0 · SPAN COUNT RECONCILIATION — **357 against 357, exact**

| chunk | `*` in the Latin body | spans |
|---|---|---|
| 0077 | 138 | 69 |
| 0078 | 70 | 35 |
| 0079 | 174 | 87 |
| 0080 | 158 | 79 |
| 0081 | 174 | 87 |
| **total** | **714** | **357** |

`data/briefs/8967-lemmata-0077.txt` declares **357** and carries **357** `[10xx]`-prefixed entries.
**They agree exactly.** First entry (`[1011B] VERS. 1.-- *Oratio pauperis.*`) and last
(`[1025C] *in beneplacita populi tui*`) are the first and last spans of my Latin. The brief is
correctly split by chunk; nothing is missing at either end.

Every English chunk was then checked against its twin for **column anchors (11/6/12/14/14, verbatim
and in order), `[n:]` count (35/15/51/48/52), italic-span count and question-mark count** —
**all five 4-for-4.** `verify-english` reports no error on 0077–0081 (only the MISSING lines for
chunks other stints hold), `plate-gate` passes with all five of my markers licensed, and my chunks
contain **zero em-dashes** (two were written and both removed).

---

## §1 · ⭐⭐ THE PLATE — EIGHT LEAVES, ALL OF THEM NEW, AND IT DECIDED 28 SITES

`raw/scans/pl113/patrologiaecurs04migngoog.pdf`, **PDF pp. 511–518 = cols 1011–1026**, map
`(col+11)/2` re-verified against the printed corner numbers on **every** page. 300 dpi full page,
then 600 / 900 / 1200 dpi crops. All eight recorded in `data/plate-reads.json` as `depth: full`.

⚑ **Col 1011/1012 (p. 511) had already been read by an earlier stint; I re-read and fully collated
it, and found two sites it had not** (`deis` @1011D, the spurious `etc.` @1012A). A logged column is
not a collated column.

⛔ **No column in this range is clipped**, inner margin or outer. That is 15 more refutations of the
mod-4 rule, and it means **not one marker in my range had to be withheld for a second copy.**

**Result: 28 departures over 15 collated columns, ~1.9 per column** — above Band A's 1.5 and
Band B's 1.4. Full report appended to `data/briefs/8967-PENDING-TEI-PATCHES.md`.

### The controls that decided the hard glyphs, named
- **`mugnificatus` @1015D** — the word is its own control: the `a` of *-catus*, four letters later
  and in the same italic sort, is a closed-bowl `a`; the disputed glyph is a two-stemmed,
  open-topped `u`. **Migne prints a non-word inside an italic lemma.**
- **`qut` @1014B** — `qui audiat` on the *next* line and `quis` on the line above both set a dotted
  `i`; the disputed sort carries a crossbar and a curved foot. A `t`.
- **`ete.` @1023A** — `vindicantis` on the line above supplies an open, crossbar-less `c`. The
  glyph here has a crossbar. An `e`. Read at 1200 dpi because the claim runs *opposite* to the
  briefed italic-`e`-images-as-`c` hazard, and a hazard briefed in one direction is not evidence
  in the other.
- **`Ft` @1021B** — the italic `E` of *Et eduxit* two lines above has a bottom bar; this sort has
  none. An `F`.
- **`par` @1014D** — `benedicere` (three `e`) on the same line, `posteris` on the next.
- **`putes` @1015D** — the closed `o` of *non*, same line, three words away.

### ⚠ And the site where the imaging hazard was the RIGHT answer
**`usque ud` @1012A.** The `d` of *ad* has lost its ascender and images as a `u`. Reported as
**copy condition, not a reading** — §3's line: a compositor's error is Migne's and gets restored,
ink damage is this leaf's and does not.

---

## §2 · ⛔⛔ NINE MIGNE DEFECTS I CANNOT FIRE, AND WHY THAT IS THE HEADLINE

`deis` · `qut` · `par` · `dilectum` · `secundam` · `Deus` · `mugnificatus` · `putes` · `haere ditas`
· `Ft` · `ete.` — **eleven sites where Migne's type is defective and our twin has already been
repaired**, so a `[sic:]` or `[cj:]` on any of them would be rejected by the content check, and
firing one anyway would accuse Migne at a word the facing column shows him setting correctly.

**My fired marker count is therefore 5 `[var:]`, 0 `[sic:]`, 0 `[cj:]`, 0 `[d:]`, 0 `[ed:]` — and
that number means nothing until the patch pass runs.** It is Band B's §F2 lesson recurring
exactly: one stint there reported zero `[sic:]` on a range containing twelve. **Read this stint's
marker count only after the eleven owed markers land.**

### ⚑ The rule I applied where the plate and the twin disagree, stated so it can be audited
§A6 says the English renders the plate where the leaf has been read. That is unambiguous where the
plate's reading renders cleanly. It deadlocks where the plate's reading **needs a marker the
content check will not yet accept**: rendering `dilectum` as "the beloved" with no `[cj:]` would
put on a reading page an assertion the author did not make, with nothing to warn the reader — the
exact failure Pattern 18 exists to prevent. So:

- **Plate reading renders cleanly → the English renders the PLATE.** 14 sites (##12–25, 26 in the
  patch report), including the two CC word-division defects, where translating the twin would have
  produced garble.
- **Plate reading needs an unfireable marker → the English renders the TWIN, and the marker is
  filed as owed with the patch.** 9 sites. Every one is named in the patch report with its marker.

**This is a departure from a literal reading of §A6 and I am flagging it rather than taking it
silently.** If Wilson prefers the other branch, the change is nine one-line English edits, all
listed.

---

## §3 · MARKERS FIRED — FIVE `[var:]`, EACH ON A COLUMN I COLLATED TODAY

| col | chunk | marker | why it clears the bar |
|---|---|---|---|
| 1016D | 0079 | `[var: Vulg. 1 Cor. 12:7 *Unicuique autem datur manifestatio Spiritus ad utilitatem*…]` | Migne prints *Unicuique datur **Spiritus ad manifestationem***, inverting the Clementine's *manifestatio Spiritus* and replacing *ad utilitatem*. **Different assertion**, and the gloss builds on it (*gratia ergo et nitor quidam … ut exhilaretur facies in oleo*) — brightness/manifestation, not profit. |
| 1018A | 0079 | `[var: Vulg. Gen. 3:14 *cunctis diebus vitae tuae*…]` | ⭐ Migne prints *Terram comedes omnibus diebus **vitae meae***. God is speaking **to the serpent**; *meae* puts the days in the speaker's mouth instead of the serpent's. Rendered as printed ("all the days of my life") under Pattern 7 — the contradiction is the evidence. |
| 1018C | 0079 | `[var: Vulg. Isa. 1:16-18 *…discite benefacere … et venite, et arguite me*…]` | ⭐⭐ **Load-bearing.** Migne prints *et venite et **disputemus***, and the gloss is built entirely on that word: *Disputatio enim hominis ad Deum, est confessio peccatorum … Disputatio ergo tua, sacrificium humilitatis tuae.* An English that gave the Clementine's *arguite me* would take the argument's keyword out of its own proof-text (7a″ exactly). Migne also prints *dicite* for *discite*. |
| 1024D | 0081 | `[var: Vulg. Ps. 105:38 *Et infecta est terra in sanguinibus*…]` | ⛔ **The Clementine reads *infecta*, "was defiled" — not *interfecta*.** Both our twin and the plate carry an *interfic-* form, and the gloss is built on it (*ipsi enim **interficiebant** animas suas*). The lemma brief's `⚑ MATCHES ONLY ELSEWHERE — 4Rg 11:16` pointed straight at it. |
| 1025B | 0081 | `[var: Vulg. Ps. 105:46 *in conspectu omnium qui ceperant eos*…]` | Migne prints no *qui*, leaving a bare finite clause. The Vulgate sense is confirmed from inside the gloss: *Vel, coram daemonibus liberi facti, sub quibus fuere **captivi***. |

⚑ **Every marker was checked against the word it stands on** (§F8's misplaced-`[sic:]` lesson). All
five sit at the end of the lemma or clause they annotate.

---

## §4 · THE DIVERGENCE LIST — EVERY SCRIPTURE SPAN IN THE RANGE, INCLUDING THE CLEAN ONES

Collated against `sources/vulgate/clementine-flat.txt`, cited by book chapter:verse. **A list of
findings alone cannot be told from a report by an agent that never looked**, so the clean ones are
here too.

### Agrees with the Clementine, checked and clean
- **Is 6:6** @1016A `*Volavit ad me unus de seraphim*` — verbatim.
- **1 Cor 1:31** @1016C `*qui gloriatur, in Domino glorietur*` — verbatim.
- **Ps 33:3** @1019A `*In Domino laudabitur anima mea*` + `*audiant mansueti et laetentur*` — both verbatim.
- **Mt 5:6** @1023B `*Beati qui esuriunt et sitiunt justitiam, quoniam ipsi saturabuntur*` — verbatim.
- **Ps 101:4** @1011D `*Ossa mea sicut cremium aruerunt*` — verbatim.
- **Ps 105:2** @1022B `*Quis loquetur*` (twice) · **Ps 105:4** @1025C `*Memento nostri*` — verbatim.
- **Ps 105:40** @1024D `*Abominatus est*` · **Ps 105:43** @1025A `*Saepe liberavit*`, `*In consilio suo*` — verbatim.
- The Ps CI–CV lemmata proper agree with the Clementine throughout except where noted below. The
  titulus **`*Psalmus David.*` @1015C is confirmed at the plate** and is *not* `Psalmus ipsi David`
  (§A4): Migne's two forms stay two forms, and 1010A four columns back prints the other one.

### Diverges, and the divergence was CHECKED and DECLINED — with the reason
- **Jo 3:36** @1012B `*Ira Dei manet super eos qui non credunt*` — Clementine `manet super **eum**`
  (singular, and *qui autem incredulus est Filio* stands earlier in the verse). **Declined**: the
  gloss turns on *manet* against *veniet*, which is untouched; number is not the sense here.
- **Is 53:2** @1012D `*Vidimus eum non habentem speciem neque decorem*` — Clementine
  `Non est species ei, neque decor, et vidimus eum`. A recast, not a variant reading: every word is
  in the verse. **Declined.**
- **Mt 28:20** @1013C `*Vobiscum sum usque ad consummationem saeculi*` — Clementine adds
  `omnibus diebus`. An abridgment. **Declined.**
- **2 Pt 3:7** @1013D `*Terra autem et coeli qui nunc sunt…*` — Clementine `Caeli autem, qui nunc
  sunt, **et terra**`. Migne reverses the pair and truncates at *reservati*. ⚑ Worth a second
  thought because the gloss says *Ipsi coeli peribunt, de proximis terrae hoc constat* — but the
  argument needs both members present, which they are. **Declined.**
- **1 Cor 9:19** @1016C `*omnium me feci servum*` — Clementine `omnium me servum feci`. Word order.
  **Declined.**
- **Dt 8:3 / Mt 4:4** @1018A `*quod procedit de ore Dei*` — Dt 8:3 has `egreditur`, Mt 4:4 has
  `procedit`; Migne cites `(Deut. VIII)` and quotes Matthew's verb. **Declined**: no sense change,
  and a citation-vs-text mismatch of this kind is a `citation-corrections.json` question, not a
  translation one.
- **1 Pt 5:8** @1017C `*circumit quaerens quem devoret*` — Clementine `circuit`. Orthographic.
  **Declined.**
- **Phil 2:12** @1018B `*Cum tremore operamini vestram salutem*` — Clementine `cum **metu et**
  tremore vestram salutem operamini`. Abridged, and the gloss is entirely about *tremor*.
  **Declined.**
- **Ex 3:6** @1019C `*Ego sum Deus Abraham, Deus Isaac, Deus Jacob*` — Clementine prefixes
  `Deus patris tui`. Abridged to make the point (`Ecce tres patriarchae … Ecce triplex auctoritas`);
  restoring the fourth clause would spoil it. **Declined.**
- **Jo 8:56** @1019D `*Abraham exsultavit, ut videret diem meum, vidit et gavisus est*` — Clementine
  `Abraham **pater vester** exsultavit`. Abridged. **Declined.**
- **1 Tim 2:5** @1020A `*unus enim mediator Christus*` — Clementine `unus et mediator Dei et hominum
  homo Christus Jesus`. Abridged. **Declined.**
- **Ps 104:16** @1020A `*Ita vocavit, et omne firmamentum panis contritum*`, cited `(Gen. XXXVII)` —
  the words are the psalm's own v. 16 (`Et vocavit famem super terram, et omne firmamentum panis
  contrivit`), with `Ita` for `Et` and the participle `contritum` for the finite `contrivit`.
  ⚑ **Declined for the `[var:]`, reported for the record**: Gen. XXXVII is where Joseph is sold, so
  Migne's locator points at the narrative rather than at the words, which is his ordinary practice
  in this recension.
- **Mt 6:33** @1020A `*primum quaerite regnum Dei, et omnia adjicientur*` — Clementine adds
  `et justitiam ejus` and `vobis`. Abridged. **Declined.**
- **Ps 104:30** @1021A `*et dedit terra eorum ranas*` — Clementine `**Edidit** terra eorum ranas`,
  and Migne's own lemma eight lines above prints `*Edidit terra.*` ⚑ Raised precisely because the
  two forms stand in one column; **declined** because both construe and give the same English, and
  because *dedit* for *edidit* is the shape a patch must not guess at.
- **Mt 6:25** @1023B `*Nonne anima est plus quam esca?*` — Clementine `Nonne anima plus est quam
  esca`. Word order. **Declined.**
- **Ex 32:32** @1023D `*Si non dimittis illis, dele me de libro tuo*` — Clementine
  `aut si non facis, dele me de libro tuo **quem scripsisti**`. A conflation of vv. 31–32, and the
  gloss argues from the intercession, not the wording. **Declined.**
- **Ps 105:25** @1024A `*In tabernaculis ejus*` — Clementine `in tabernaculis **suis**`. **Declined**:
  no sense change (rendered "In his tents" as printed), though it is a real divergence and is logged.
- **Ps 105:47** @1025B `*Salvos fac nos*` — Clementine `Salvos **nos fac**`. Word order. **Declined.**
- **Ps 105:4** @1025C `*in beneplacita populi tui*` — Clementine `in beneplacit**o**`. ⭐ Migne's
  plural is **confirmed at the plate**, so it is his and not CC's; rendered "in the good pleasures
  of thy people". **Declined** for the marker: the sense of the clause is untouched.
- **Ps 103:3** @1016A `*Quis tegis.*` — ⛔ **the plate prints `Quis`, our twin `Qui`, and the
  Clementine `Qui tegis aquis superiora ejus`.** Migne's own gloss two lines below writes
  `Vel qui *tegis aquis*`. A `[var:]` is owed here and is **unfireable until the patch lands**,
  because our Latin column would show `Qui` and contradict the note. **Filed, not fired.**
- **Ps 101:5** @1011D `*Percussus sum ut fenum*` — Clementine `ut **foenum**`. Orthographic.
  **Declined.**
- **`*Diligas Deum et proximum*` @1022A** — not a verse; a summary of the two commandments in
  Migne's own voice. No collation possible, no marker.

---

## §5 · `usque ad` — THE `etc.` SPLICE TEST, COUNTED

**59 occurrences of `usque ad` / `ad usque` in my Latin. 57 formula, 2 not.** (A 60th hit,
`usque in aeternum` @1024B, is not in the class at all.)

- **57 formula → "as far as."** Each follows an `etc.` and names where the abridged father resumes.
  ⚑ **Two of them are separated from their `etc.` by a column anchor** (`etc., [1016D] *usque ad*`
  and `etc., [1017B] *usque ad*`). A naive regex scores both as non-formula. **The `etc.` test is
  about the token before, not the character before.**
- **2 non-formula, both at 1013C and both in one sentence:**
  1. `*Vobiscum sum usque ad consummationem saeculi*` — **Mt 28:20 itself**, rendered
     **"unto the consummation of the world"**, matching §A7's repair of the Mic 4:10 site at 0984C
     and 0073's rendering. This is col 0953C's problem recurring: a formula and a quotation of the
     same two words a few lines apart.
  2. `Totum tempus **usque ad finem**` — ordinary Latin, rendered **"unto the end."**
- ⭐ **One typographic finding the counter would have missed: at 1015A Migne prints the formula
  REVERSED, `*ad usque*`, and CC normalized it to `usque ad`.** It follows an `etc.` and names the
  resumption point, so it is the formula and is rendered "as far as"; the reversal is filed as a
  patch. **If the work-wide count of 777 was taken from our TEI, it is short by however many
  `ad usque` Migne set and CC turned round.** Worth one grep before the count is quoted again.

---

## §6 · THE RULED AXES — WHAT MY RANGE DID WITH EACH

| axis | my range |
|---|---|
| `gentes` family | **Gentiles** where the *Judaei*/*gentes* opposition is explicit — @1019A `ibi ex gentibus sumpturus Ecclesiam`, and @1025B where the gloss says `de **Judaeis** fuerunt … id est **gentium**, ut eos **gentes** mirarentur` in one sentence. **nations** where the sense is generic — @1024C `*Gentes.* Septem illos populos` (the seven Canaanite peoples), @1024C `gentium conformitate`, @1025C `de omnibus gentibus congregetur` and `*Et congrega nos de **nationibus***`. `natio` → **nation**, always. Singular `gens` of a people → **nation**: @1019A `in una gente secundum carnem … sed non alii genti`. |
| `mysterium` / `sacramentum` | `sacramentum` once (@1014C `in baptismi sacramento` → **sacrament**); `mysterium` does not occur. The adverb `mystice` @1022A → "mystically". 1:1 held. |
| `daemonium` / `diabolus` | **demon** for `daemones` @1017B, `daemoniorum`/`daemonia` @1017C, `daemonibus` @1024B, `daemonibus` @1025B. **devil** for `diaboli` @1018A, @1023A. **Satan** for `Satanae` @1017D. **No bleed in either direction.** |
| `turba` / `multitudo` | **Neither word occurs in my range.** Reporting the absence rather than a zero that could be read as drift (Band A's instrument check). |
| `usque ad` | 57 formula / 2 not — §5. |
| archaism | `-eth`/`saith` used **only inside italic scripture**: `abideth` @1012B, `goeth about` @1017C, `proceedeth` @1018A, `glorieth` @1016C, `saith` @1018C, `doeth` @1014D. **All six are inside an italic span.** Gloss-voice verbs are plain (`says`, `adds`, `admonishes`). No guillemets occur in my range, so the second membership test had nothing to catch here. |
| `sedes` | Once, @1015B `*Dominus in coelo paravit **sedem** suam*` → **"his seat"**, per §A5. Distinct from `throno` @1014C (`cum rex sederit in throno` → "upon his throne"), which is a different Latin word and keeps "throne". |
| `Dominus virtutum` | Does not occur. |
| `In finem` · `Diapsalma` · `Canticum graduum` | **None of the three occurs in my range.** The Ps CI–CV tituli are *Oratio pauperis*, *Benedic anima*, *Psalmus David* and *Alleluia*; the gradual psalms begin later in the band. Recorded so a sweep does not read the absence as an omission. |
| heads | `PSALMUS CI.`–`PSALMUS CV.` → `PSALM CI.`–`PSALM CV.` **All five numerals left Roman**, per §A3. |
| `(ID.)` / `(Ibid.)` | Never expanded. 201 notes pass through verbatim across the five chunks, including `[n: (Id. )]` @1021B with Migne's own spacing and `[n: (HIER., CASS.)]` @1017A. |

---

## §7 · CRUCES — RENDERED LITERALLY, WITH THE DIFFICULTY NAMED

1. **`Timebat Israel, ne reliquias eorum consumeret` @1021C.** ⛔ **The subject is Egypt, not
   Israel, and *Israel* is the OBJECT of *timebat*.** The lemma is Ps 104:38, whose first half is
   `Laetata est **Aegyptus** in profectione eorum`, and *reliquias eorum* must name someone other
   than the fearer. Rendered **"Egypt feared Israel, lest he should consume what was left of
   them."** ⚑ Flagged loudly because "Israel feared" parses, reads perfectly, and is the reading a
   blind English pass would never question — §F8's exact profile.
2. **`Laus Dei, qui suos vindicavit qualitas poenae facta indicat` @1023B.** *qualitas … indicat* is
   the subject and verb; *Laus Dei* is the object, fronted. Rendered **"The quality of the
   punishment inflicted declares the praise of God, who has avenged his own."** The fronting is why
   this one is easy to read backwards.
3. **`Causa est, ne Israel pro debito periret Testamentum Novum` @1025A.** *Testamentum Novum* is
   the predicate of *Causa est*, with the *ne*-clause between. Rendered **"The cause that Israel did
   not perish for its debt is the New Testament."** The *ne* is carried.
4. **`Quia mutavit, quod perdituros eos videbatur` @1025A.** ⛔ **Does not construe as printed** —
   *perdituros* is accusative plural masculine with nothing to govern it. Rendered as closely as the
   words allow, **"Because he changed what seemed about to destroy them,"** and the difficulty is
   recorded rather than repaired. No emendation offered: this is a place where a conjecture would be
   invention.
5. **`Fortes, quorum frixorium sunt, qui scandalizantur` @1011D.** Rendered literally, **"The
   strong, whose frying-pan they are, who are scandalized."** Who is whose frying-pan is left where
   Migne leaves it; the splice cuts Augustine off before he says.
6. **`Dux est eorum` @1017A** — the whole gloss is about the *gender* of `eorum`
   (`quod tamen Latine dici non potest, quia cedri feminini generis sunt`). English carries no
   gender on "their", so the point would vanish; I rendered **"Is the leader of them, that is, of
   the sparrows, or of the cedars, which nevertheless cannot be said in Latin, because cedars are
   of the feminine gender"** — keeping the explanation in the clear rather than adding a marker.
   **This is Pattern 9's gender case where the Latin itself supplies the exponent.**
7. **`unde meruit inter alias regni privilegium vel principatum obtinere` @1022D.** The subject is
   unexpressed and feminine (*inter alias*): the tribe. Rendered **"whence it deserved to obtain
   among the others the privilege or the princedom of the kingdom"** — "it" for the tribe, and no
   name supplied, because the splice removed the sentence that named it.
8. **`Magna oblivio quidem in memoria, si non liberatio` @1023D.** Rendered **"Great forgetfulness
   indeed in the memory, if not the deliverance."** The negative is carried and the ellipsis left
   open; smoothing it would decide what the Latin declines to say.
9. **`Efflorebit … id est deflorebit. Et sic est intentivum, vel privativum` @1015B.** The gloss is
   about the force of the prefix. Rendered "shall flourish forth … shall shed his flower … it is
   either intensive or privative", keeping both members so the grammatical point survives.

### Unexpressed subjects supplied, each with its authority
- @1021C "**Egypt** feared" — Ps 104:38's own first half (see crux 1). The only supplied proper name
  in the range.
- @1014C "**He** bestowed when he made me, **he** requites when he justifies" — God, from
  *retribuit ei **Deus*** in the previous sentence. ⚑ Note that *Tribuit homo* two clauses earlier
  has a **different** subject, printed; the English keeps them apart.
- @1022D "whence **it** deserved" — the tribe (crux 7); deliberately not "he".
- @1024B "**he** delivered him whose destruction was to be the greater" — the subject is God, from
  the *(AUG.)* gloss it opens; no name supplied.
- Nowhere did I supply a possessive or a completion the Latin does not print. **Checked
  specifically against §F8's fourteen**: `*Benedic, anima.*` @1014B stays **"Bless, O soul"** (not
  "my soul"), `*Potum.*` @1012B stays **"Drink"** (not "my drink"), `*Mei.*` @1012A stays **"My"**,
  `*Cinerem.*` stays **"Ashes"**, `*In gloria.*` stays **"In glory"**, `*Christos,*` @1019D stays
  **"The anointed"** (not "my anointed"), `*Possessione.*` @1017D stays **"With possession"** (not
  "thy possession"), `*Laudamini in nomine*` @1019A stays **"in the name"** (not "in his holy
  name"), `*filii servorum tuorum habitabunt*` @1014A stays **"shall dwell"** (not "shall dwell
  **there**"), and `*Et non erat infirmus*` @1021B stays **"And there was no one weak"** (not
  "no one weak **among their tribes**").

---

## §8 · CANDIDATES RAISED AND **REJECTED** — the instrument, not the leftovers

1. **`[sic: *deis*]` @1011D and the other ten of §2** — the reading is Migne's and confirmed, but
   the marker content must be verbatim in the twin and is not. **Filed as owed, not fired.**
2. **`[sic:]` on `VERT. 41.` @1025A, `VERS 28.` @1020D, `VERS, 32.` @1021A** — **declined.**
   Pattern 9 normalizes a section label in English *precisely because* the facing Latin preserves
   the misprint. This is §F8's "right about the fact, wrong about the rule" case; the observation
   goes in the patch report, the English prints `VERS.`
3. **`[sic:]` on `interfectus` @1024D** — declined. A gender/number mismatch with **no English
   exponent** (Pattern 12(2) does not reach it, Pattern 9 governs). The `[var:]` against the
   Clementine's `infecta` is the honest marker and is fired instead.
4. **`[d:]` on `Alleluia. Alleluia.` @1022A** — **declined, and it is the trap in this range.**
   Migne prints the word twice adjacently, which is Pattern 11's literal shape; but the entire
   gloss that follows exists to argue *whether* there should be one or two
   (`Quidam dicunt, unum *alleluia* ad finem superioris psalmi pertinere, alterum esse sequentis`).
   **Marking one copy as an intrusion would delete the thing the paragraph is about.**
5. **`[d:]` on `amen amen` @1022A** — declined for the same reason: Migne is *quoting* the Lord's
   doubling and says so (`pro majore certitudine rei`).
6. **`[d:]` on `Concupierunt concupiscentiam` @1023A and `Id est inter medium, etc.` @1016B** —
   declined. The first is the Hebraism the gloss then explains
   (`Nimietas desiderii, geminatione verbi ostenditur`); the second is a lemma re-quoted, eight
   words from its first appearance and in a different clause — `[d:]` marks type printed twice
   **adjacently**, and §F8 withdrew `[d: videantur, et]` for exactly this.
7. **`[cj:]` on `dedit` for `Edidit` @1021A** — declined. Both construe, both give the same English,
   and a patch must not guess a letter (§F7's `Nafrubimus` discipline).
8. **`[var:]` on the fifteen abridged or reordered quotations in §4** — declined individually, each
   with its reason. Abridgment is this recension's method, not a variant reading.
9. **A patch on `Quas consequentur.` @1014D** (Migne's mark reads as a point, the next word is
   lowercase) — **declined**: it is ambiguous between a point and a worn comma, and *a patch must
   not guess a mark any more than a letter.*
10. **`[sic:]` on the bracket-shaped marks at 1019A and 1019C** — declined as ink on this leaf.
    ⚑ Distinguished from the `[psalmorum` / `[ostendit` stray-sort class reported from cols
    1039–1041: those are a repeating sort, these two are isolated and shapeless.
11. **A `[sic:]` or patch on `usque ud` @1012A** — declined; broken ascender, copy condition.
12. **Column-band arithmetic** — not reported. Migne's A/B/C/D marks sit in the central gutter and
    serve both columns at the same height; nothing in my range breaks mid-word across an anchor.

---

## §9 · SECTIONS READ CLEAN, AND HOW

- **Ps CII in full (0078, cols 1014B–1015C)** — collated at the plate line by line. Two departures
  found (`qut`, `par`), both filed; the remaining 33 spans and all 15 notes agree with the leaf.
- **Cols 1017A–1018C (the second half of 0079)** — the leanest page in the range: **one** departure
  in two full columns (the siglum `(AU.)` @1017B). Named because a clean page is evidence too.
- **1025A `afflictis iterum miseretur`** — raised as a possible `misereretur` at 300 dpi and
  **checked at 600: the plate agrees with our twin.** A checked negative, recorded per the
  GLOSSA brief's instruction.
- **Negation sweep (7a, tests 2 and 2a).** Every `non`/`nec`/`nisi`/`nullus`/`nihil`/`nunquam` in
  the five chunks was located, its host word named, and the English negative checked to be **on
  that host**. The population test 2a names fired at four sites — `non solum … sed usque in
  aeternum` @1024B, `nulli Graecorum codices … habeant` @1022B, `non ut … sed ut` @1021D (twice),
  and `sed non sunt nisi dimidii, si non addantur aeterni` @1013C — and each was proved from the
  correlative rather than from what read well. ⚑ `nulli … codices` is the one where English word
  order most wanted to move the negative onto the verb; it stays on the quantifier: **"no codices
  of the Greeks have"**.
- **English apposition does not inherit a negative across a comma** (§F8): checked at
  `Non ait, veniet; sed *manet*` @1012B, `Non ait peccantes … sed *peccatores*` @1023C,
  `Non ait in similitudinem, sed in similitudine` @1023C and `non vetat laudari, si boni; si non,
  nisi in Domino` @1019A. **Each negative is stated twice in the English where the Latin marks it
  once.**
- **Question marks: 1/1, 1/1, 5/5, 1/1, 4/4** against the twins. No indirect question needed
  Pattern 8b recasting in this range.

---

## §10 · HANDOFF

1. **The patch queue owes eleven markers, not zero.** They are listed by column in the patch
   report with the exact marker text. **Do not read this stint's `0 [sic:] / 0 [cj:]` as a clean
   range.**
2. **`VERS. 15.` @1016C is the one to land first.** My English prints Migne's address and the
   Latin twin still prints CC's `VERS. 13.`, so the two columns disagree visibly until the patch
   runs. It is deliberate (§A6) and it is flagged in three places.
3. **One English edit is owed with the patch and is not a marker**: `0079.md`, the note at 1017B,
   `[n: (AUG.)]` → `[n: (AU.)]`. It cannot be made first, because note contents are checked as a
   substring of the Latin twin.
4. **`ad usque` @1015A may not be unique.** If the work-wide `usque ad` census (777 / 733 / 44) was
   taken from our TEI rather than from the plate, it silently counts CC's normalizations. One grep
   of the plate text layer for `ad usque` would settle it.
5. **Open for a ruling, not decided by me:** the §2 rule (twin where the plate needs an unfireable
   marker). Nine sites turn on it, all listed, each a one-line edit either way.
6. **Nothing was committed, deployed or re-chunked.** `data/plate-reads.json` gained eight entries;
   `data/briefs/8967-PENDING-TEI-PATCHES.md` gained one section.
