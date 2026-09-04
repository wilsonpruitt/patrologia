# 8967 · *Glossa ordinaria*, **Liber Psalmorum** — cruces, chunks 0073–0076
### BAND B, stint 8 (the last) · cols 1002B–1011B · Psalms XCIII–C · 3,774 Latin words

---

## §0 · SPAN COUNT RECONCILIATION — the required check, and it AGREES

`data/briefs/8967-lemmata-0073.txt` declares **258** italic spans for chunks 0073–0076.
Counted in my own Latin, per chunk:

| chunk | spans |
|---|---|
| 0073 | 79 |
| 0074 | 69 |
| 0075 | 74 |
| 0076 | 36 |
| **total** | **258** |

**Exact agreement.** The brief was cut by chunk membership, not by column band, and it is complete
at both ends of my range: its first entry is `[1002B] *Psalmus David*`, which is the first span of
0073, and its last is `[1011B] *usque ad*`, which is the last span of 0076. No span in my Latin is
missing from it and it carries none from a neighbour's range.

**English/Latin span parity after translation: 79/79 · 69/69 · 74/74 · 36/36**, counted with the
`[var: …]` markers stripped (each of mine contains one italic Vulgate reading of its own, which is
Band A's own form for the marker). `verify-english.mjs` returns **zero findings on all four of my
chunks**; the only failures in the run are peer chunks not yet written.

Other 1:1 checks, per chunk, Latin against English: **column anchors** (10 · 10 · 10 · 5, verbatim
and in order) · **`[n: …]` notes** (39 · 38 · 41 · 19 in the body) · **`## ` heads** (2 · 2 · 3 · 1)
· **question marks** (5 · 2 · 2 · 2). No guillemets occur anywhere in my range. No `[nt: …]` was
made: every note in these four chunks is a bare citation siglum or a scriptural locator, and
Pattern 15 wants prose.

⚑ Frontmatter `noteCount` runs one under the body count in all four chunks (39/40, 38/39, 41/42,
19/20). That is the runbook's known false positive #3 and is **not** reported: the extra `[n:]` in
each case is the one inside the frontmatter's own `incipit` string.

---

## §1 · MARKERS FIRED — 11 `[var:]`, and nothing else

**No `[sic:]`, no `[cj:]`, no `[d:]`, no `[ed:]`.** Every marker stands on a column I opened at the
plate today; `plate-gate.mjs` passes all eleven (`read: full`). Why the other four classes are
empty is in §4 — in every case the reason is that the defect turned out to be **Corpus Corporum's
and not Migne's**, which is a patch, not a marker.

### 1a. ⭐⭐ The three the GLOSS ITSELF depends on — a conformed lemma would destroy the exposition

| col | chunk | Migne prints | the Vulgate has | why it is load-bearing |
|---|---|---|---|---|
| **1005D** | 0074 | *Non est inventus qui daret **honorem** Deo, nisi hic alienigena* | Lc 17:18 *Non est inventus qui **rediret, et daret gloriam** Deo, nisi hic alienigena* | **The lemma being glossed is `*Honorem.*`** The proof-text is adduced for no other purpose than to attest that word. Conform it to Douay's "glory" and the gloss is quoting a verse that no longer contains the term it was cited for. |
| **1006B** | 0074 | *Psalmus ipsi David.* | Ps 96:1 ***Huic David, quando terra ejus restituta est.*** | **The whole psalm-preface expounds a clause Migne's titulus does not print.** `restituta est terra` is quoted three times in the next twelve lines — as the literal history (Absalom), as the Church (`restituta est terra ei`), and as the resurrection (`restituta est terra`). The words being expounded are simply absent from the lemma above them. |
| **1003A** | 0073 | Vel, *Qui **erudit**.* | Ps 93:10 *qui **docet hominem scientiam*** | The gloss's very next words are **`Propter quam eruditionem`**. The argument is built on the noun cognate to Migne's verb; the Vulgate's *docet* yields no such noun. ⚑ The pre-scan marked this span `✓ Pr 9:7` — a match in a book the gloss is not expounding. **Reading the address is what caught it**, exactly as the brief's header says. |

### 1b. The Migne-vs-Clementine tituli — Band A's settled practice, applied

Band A fired `[var:]` on this class and I follow it rather than re-deciding it: `src/english/8967/0031.md`
carries `[var: Vulg. Ps 36:1 *Psalmus ipsi David.*, "a psalm for David himself"]` on exactly a
Migne `Psalmus David`. Four sites here:

- **1002B** (0073) Ps 93 — `[var: Vulg. Ps 93:1 *Psalmus ipsi David, quarta sabbati.*]`
- **1005A** (0074) Ps 95 — `[var: Vulg. Ps 95:1 *Canticum ipsi David, quando domus aedificabatur post captivitatem.*]`
- **1007C** (0075) Ps 97 — `[var: Vulg. Ps 97:1 *Psalmus ipsi David.*]`
- **1008B** (0075) Ps 98 — `[var: Vulg. Ps 98:1 *Psalmus ipsi David.*]`

⭐ **And the negative that makes the class evidence rather than noise.** At **1010A** (0076) Migne
prints `*Psalmus ipsi David.*` — the Clementine's Ps 100:1 **exactly**, with the *ipsi* he drops at
the four sites above. **No marker is owed there and none is fired.** Migne is not uniformly
dropping *ipsi*; he prints both forms, four columns apart, and §A4's ruling that *Psalmus David*
and *Psalmus ipsi David* are different lemmata is confirmed from his own plate inside one stint's
range. English follows: "*A psalm of David.*" against "*A psalm for David himself.*"

### 1c. The remaining four

- **1003A** (0073) Rm 14:10 — Migne prints `*Omnes astabimus ante tribunal Christi, ut recipiat
  unusquisque*` under the citation `(Rom. XIV)`. Rom 14:10 reads `omnes enim **stabimus** ante
  tribunal Christi` and **has no following clause at all**; `ut **referat** unusquisque` belongs to
  2Cor 5:10. Migne's text is conflated **and** the borrowed verb is reversed in direction —
  *recipiat*, "receive", against *referat*, "render". Material, and marked.
- **1009B** (0075) Ps 98:7 — Migne `*Testimonia ejus et **praecepta**.*` against the Clementine's
  `et **praeceptum quod dedit illis**` (singular, with a relative clause). ⭐ The gloss is built on
  the plural: `**Praecepta** sunt sicut praecepta legis per Moysen data.`
- **1009D** (0075) Jo 8:31 — Migne `*Si manseritis in **verbo** meo*` against `Si **vos** manseritis
  in **sermone** meo`. A word substitution, not an orthography; marked on *sermone*. (The dropped
  *vos* and the transposed *veritas vos liberabit* ride with it and are not separately marked.)
- (the fourth is the Ps 98:1 titulus, listed in 1b)

---

## §2 · PLATE READS — SIX LEAVES, TWELVE COLUMNS, ALL OF THEM NEW

**0 of the work's plate reads fell in cols 1002–1011 before today.** All six leaves are recorded in
`data/plate-reads.json` at `depth: "full"`, with the corner numbers read **before** the page was
trusted, per the launch brief.

| PDF page | columns | corners read | inner margin |
|---|---|---|---|
| 506 | 1001–1002 | `1001` / `1002`, foot `PATROL. CXIII.` | **clean** |
| 507 | 1003–1004 | `1003` / `1004` | **clean** |
| 508 | 1005–1006 | `1005` / `1006` | **clean** |
| 509 | 1007–1008 | `1007` / `1008` | **clean** |
| 510 | 1009–1010 | `1009` / `1010` | **clean** |
| 511 | 1011–1012 | `1011` / `1012` | **clean** |

**No foot-of-page conjecture apparatus on any of the six leaves, in either layer.**

⚑ **Twelve more clean columns, and three of them are ≡ 1 (mod 4): 1001, 1005, 1009.** The
withdrawn mod-4 clipping rule would have predicted all three clipped and would have silently
withheld four markers standing in those bands (1002B is on leaf 506; 1005A, 1005D, 1006B on leaf
508; 1009B, 1009D on leaf 510). Recorded here as three more counterexamples, not as a new rule in
the other direction: **I opened every column and inferred nothing.**

⚠ **The two imaging hazards were live on these leaves and I ran the control before believing any
suspect glyph.** The 200-dpi renders show `undc` for *unde* (1003A), `verbornm` for *verborum*
(1004D), `agom` for *agam* (1002D) and `nocent` with a spur (1004C). **Every one was withdrawn at
500 dpi against a known instance of the same letter on the same printed line.** Not one entered
the report. Without that step I would have manufactured four `[sic:]` candidates on this stint
alone — which is the class the brief says the control exists to prevent.

---

## §3 · ⛔ FOURTEEN CORPUS-CORPORUM DEPARTURES — reported, NOT patched, NOT marked

Appended in full to `data/briefs/8967-PENDING-TEI-PATCHES.md` with column, leaf and class.
**≈1.4 sites per column over ten columns**, matching the band rate. Summary only here:

- **🅐 CC moves Migne onto the Clementine (4):** `In psalmis`←*psalmi* (1004B) · `Audivit`←*Audivi*
  (1007B) · `Terram`←*Terra* (1007B) · `ecce illic`←*esse illic* (1005D).
- **🅑 CC repairs Migne's real defects (5) — each unlocks a marker once patched back:**
  the head **`PSLMUS C.`** (1010A) · **`inicipientibus`** (1009C) · **`in mututinis`** (1010D) ·
  `adjuraverunt`→*abjuraverunt* (1006B) · `quod et non adhaeserunt`→*ei* (1011B).
- **🅒 CC creates non-words Migne does not print (2), so no `[sic:]` is owed:**
  `hilaritarem` for the plate's **`hilaritatem`** (1004A) · `vedum` for **`pedum`** (1008D).
- **🅓 Punctuation and note-placement (10 further sites)**, listed in the patches file.

⭐ **Two of these carry a required ENGLISH change at patch time, and I have flagged rather than
made them**, because the ordering rule exists precisely to stop a patch rewriting Latin under a
filed translation:

1. **1005D** — after the patch our Latin will read `Ecce hic Christus **esse** illic`. My English
   currently renders **our TEI** ("*Lo, here is Christ, lo there,*"). It must become "*Lo, here is
   Christ to be there,*", with the crux carrying the conjecture and a `[var:]` against Mt 24:23
   becoming available. **This is the one site in my range where the two Latins say different
   things**, and I have named it in both files rather than quietly translating whichever I liked.
2. **1007B** — after the patch our Latin will read `**Audivi** et laetata`. My English currently
   reads "*He hath heard and was glad.*" and must become "*I have heard and she was glad.*"

The other twelve need no English change: a non-word has nothing to render but its sense, an
orthographic case-form has no English exponent, a psalm head normalizes under Pattern 9 either
way, and `abjuraverunt`/`ei` are the readings my English already carries.

---

## §4 · THE FOUR MARKER CLASSES I DID NOT FIRE, AND WHY — the measured instrument

**Six defect candidates were raised on the Latin alone and the plate withdrew or reclassified
every one.** Not one survived as a marker. That is the whole case for §2 restated on my own range.

| candidate | what the plate said | verdict |
|---|---|---|
| `hilaritarem` @1004A | plate reads **`hilaritatem`** | CC's non-word. **No `[sic:]` owed.** Patch. |
| `vedum` @1008D | plate reads **`pedum`** | CC's non-word. **No `[sic:]` owed.** Patch. |
| `abjuraverunt` @1006B | plate reads **`adjuraverunt`** | CC's repair of Migne. **The marker runs the other way** and is unlocked only after the patch. |
| `in matutinis` @1010D | plate reads **`in mututinis`** | ditto — the defect is Migne's and CC hid it. |
| `incipientibus` @1009C | plate reads **`inicipientibus`** | ditto. |
| `PSALMUS C.` @1010A | plate reads **`PSLMUS C.`** | ditto. |

⭐ **Five of the six read as confident, markable Migne defects or as perfectly clean text from our
Latin alone, and in every case the truth was the opposite of what the Latin suggested.** Three
words I would have marked belong to Corpus Corporum; three words I would have passed over in
silence are Migne's own defects that our text has hidden. **Neither "trust the text" nor "suspect
the transcriber" would have produced a single right answer here.**

### 4a. `non quas eminus` @1004D — `[cj:]` raised, argued, and DECLINED

Migne prints, and **the plate confirms our TEI verbatim**:

> *oves manus,* **non quas eminus, quia sunt,** et oves quas non fecimus, sed ipse gratia sua nos
> oves fecit.

`quas` is a relative accusative with no verb to govern it, so the clause does not construe as
printed. The conjecture is **`emimus`**, "which we bought", and it is a good one: the very next
clause is `et oves **quas non fecimus**`, the same relative in the same construction with the verb
present, and Augustine's argument is about how these sheep came to be his.

**Declined, and the reasons are three, in order of weight:**
1. Pattern 12 excludes **a real word that is merely wrong** from `[sic:]`; `eminus` is a real
   adverb. Corpus control: **16 `eminus` against 2 `emimus`** in `src/latin/`, and the ones I
   checked (11065 @0128B, 11551 @0219A, 11062 @0415D) are all ordinary adverbial "from afar". The
   form is not itself suspect, so a frequency argument does not reach it either.
2. Pattern 18's additive `[cj:]` form requires Migne's word to keep its English beside the
   conjecture, and here **Migne's word has no English** — there is no predicate for it to sit in.
   The marker would have to swallow the clause, which is exactly what 7a⁗ forbids.
3. 18a closed the conjecture census, and this is a candidate of the kind it declined.

**So the English renders as literally as the words allow** — "not those which from afar, because
they are" — and the crux carries the conjecture where a later reader can find it. ⚑ It is a
**Migne** crux, not a CC one; no patch is owed and none is proposed.

### 4b. `postquam resurrectionem` @1006C — no marker, crux only

The plate sets it as **one word**, and our TEI agrees. `postquam` cannot take an accusative; the
syntax wants `post quam resurrectionem`, "after which resurrection". Pattern 10 does cover
run-togethers whose halves are real words (`sedet` for *sed et*), but Pattern 12's exclusion of
"a real word that is merely wrong" is the nearer rule here: `postquam` stands in an ordinary
place and only the following accusative betrays it. **English renders the syntax the printed
letters permit** — "after which resurrection all these things which are here sung were done" —
and the crux says so. I record that I can argue this both ways and did not want a marker resting
on a coin flip.

### 4c. Divergences that are REAL and were judged not material — the declined list

- **1002C `*Quarto sabbati,*`** against Ps 93:1 `quarta sabbati`. A case form, letter-level, and
  §C1's rule excludes exactly this. The gloss argues from the **day** (`quo die fecit Deus
  luminaria`), which both readings give. Declined.
- **1006A `*Regnavit a ligno*`** — not in the Clementine at all (the Old-Latin addition to
  Ps 95:10). **Declined because Migne flags it himself**: he introduces it as `Alia littera:`. This
  is the `( sic )` principle — where he has already told the reader, we do not stack our note on
  top of his.
- **1006A `*Et gentes in ira tua.*`** — same reasoning, same column: Migne introduces it with
  `Alii addunt,`.
- **1003C Mt 14:28** — Migne prints `jube me venire ad te` for the Vulgate's `jube me **ad te
  venire** super aquas`. Word order plus an ellipsis; the gloss argues from Peter on the water,
  which survives either order. Declined. (The citation `(Matth. XXVI)` for Mt 14 is Migne's and
  passes through verbatim.)
- **1006A Mt 26:64** and **1004D Mt 28:20** — both compressed quotations, dropping `sedentem a
  dextris virtutis Dei` / `caeli` and `omnibus diebus` respectively. Abridgment ellipses, not
  variants; the gloss's argument (the clouds = the apostles; the forty years = all the ages) turns
  on words that are present. Declined.
- **1005D `*Terra autem,*`** — Ps 95:9 reads `universa terra` with no `autem`. A single particle in
  a lemma stub the gloss does not argue from. Declined.
- **1007D `*Israeli,*`** for Ps 97:3 `domui Israel` — a fragment inflected to fit the gloss's own
  sentence (`Sed cui? *Israeli*`). Declined.
- **1009C `*Servite in laetitia.*`** for Ps 99:2 `servite **Domino** in laetitia` — a cut lemma,
  not a variant text. Declined.
- **1009A `*Terra scabellum pedum ejus*`** for Is 66:1 `terra autem scabellum pedum **meorum**` —
  first person to third because the Glossa is **reporting** it (`dicit Scriptura`). Declined as
  oblique report, not divergence.
- **1002C `*Exaltare, quia, usquequo peccatores.*`** — a splice of the openings of Ps 93:2 and
  93:3, in the gloss's own voice, to point at two verses at once. Not a quotation. Declined.
- **1009A `*Hoc erit vobis in testimonium.*`** — introduced as `saepe in lege dicitur`, i.e. as a
  formula rather than a citation, and it occurs nowhere in the Clementine verbatim (the nearest are
  Dt 31:26, Gn 21:30, Jos 22:27, all `in testimonium` in other constructions). Declined; a formula
  cannot diverge from a text it does not claim to quote.
- **1008B `(Psal. XLVIII)`**, **1003C `(Matth. XXVI)`**, **1010D `(Matth. VIII)`** — three wrong
  locators (for Ps 84:12, Mt 14:28 and Mt 5:6). **Migne's, passed through verbatim** per the series
  rule; `refDisplay` keeps the printed reference. Not defects of ours and not marked.

### 4d. Quotations collated and found to AGREE with the Clementine — the checked negatives

A list of findings alone cannot be told from a report by an agent that never looked, so:

**Exact, word for word:** Ps 93:1 `Deus ultionum Dominus` · Ps 93:1 `Libere egit` · Ps 93:6
`Viduam et advenam` · Ps 93:8 `Intelligite … insipientes … in populo … stulti … aliquando sapite`
(all five spans) · Ps 93:11 `Dominus scit` and `Quoniam vanae sunt` · Ps 93:13 `donec fodiatur` and
`Peccatori fovea` · **Ps 93:19 `consolationes tuae laetificaverunt animam meam`** · **Ps 93:22 `Et
factus est mihi Dominus in refugium, et Deus meus in adjutorium spei meae`** (the longest lemma in
the range, checked entire) · Ps 93:20 `Sedes iniquitatis` and `Qui fingis` · Ps 94:1 `Venite,
exsultemus` · Ps 94:2 `Faciem ejus`, `In confessione` · Ps 94:6 `Venite, adoremus`, `Ploremus`,
`Qui fecit nos` · Ps 94:8 `Hodie si vocem`, `si vocem ejus audieritis`, `Nolite obdurare` · Ps 94:9
`Sicut in irritatione` · Ps 95:1 `Cantate Domino`, `Canticum novum` · Ps 95:2 `Domino et benedicite`,
`De die in diem` · Ps 95:6 `Sanctimonia et magnificentia` · Ps 95:9 `Adorate Dominum in atrio`,
`Commoveatur`, `Universa terra` · Ps 95:10 `Etenim correxit orbem terrae`, `Dicite in gentibus`,
`Populos in aequitate` · Ps 95:13 `Quoniam venit`, `populos in veritate` · Ps 96:1 `Dominus
regnavit`, `Exsultet terra`, `Insulae`, `Multae` · Ps 96:2 `Nubes et caligo`, `Justitia et judicium`
· Ps 96:3 `Ignis ante ipsum praecedet` · Ps 96:4 `Illuxerunt fulgura` · Ps 96:7 `Confundantur`,
`Adorate` · Ps 96:10 `Custodit Dominus` · **Ps 84:12 `veritas de terra orta est, et justitia de
coelo prospexit`** (twice, at 1007D and 1008B, and exact both times) · **Job 1:21 `Dominus dedit,
Dominus abstulit`** · **Ps 97:6 `In tubis ductilibus et voce tubae corneae`** · Ps 97:9 `Orbem
terrarum`, `In justitia` · Ps 98:1 `Irascantur populi` · Ps 98:2 `Dominus in Sion`, `In Sion magnus`
· Ps 98:4 `Et honor regis`, **`Tu parasti directiones`**, `In Jacob`, `Tu fecisti` · Ps 98:7 `Nubis
loquebatur ad eos` · **Ps 98:8 `Propitius fuisti eis`**, `in omnes adinventiones` · **2Cor 12:7
`Datus est mihi stimulus carnis meae`** · **Ps 99:1 `Psalmus in confessione`** · Ps 99:2 `Jubilate`,
`Omnis terra`, `In laetitia`, `Introite in conspectu` · **Ps 100:1 `Psalmus ipsi David`,
`Misericordiam et judicium cantabo`** · Ps 100:2 `Quando venies ad me`, `Perambulabam in innocentia`
· Ps 100:3 `Non proponebam`, `Non adhaesit` · Ps 100:4 `Cor pravum` · **Mt 5:6 `Beati qui esuriunt
et sitiunt justitiam`** · **Ps 100:6 `Ut sedeant mecum`** · **Ps 100:7 `Non habitabit in medio
domus meae`** · **Ps 100:8 `In matutino`, `Interficiebam`, `Peccatores`, `Civitate Domini`, `Omnes
operantes iniquitatem`**.

**Every one of the 258 spans was read against the Clementine or, where it is a gloss word rather
than a quotation, identified as such in place.**

---

## §5 · THE INHERITED CONVENTIONS — what my range did with each

- **`In finem`** — **does not occur** in cols 1002B–1011B. Zero occurrences; nothing to apply.
- **`Diapsalma` / `Diapsalmus`** — **does not occur.** Zero.
- **`Canticum graduum` / `gradus`** — does not occur; the gradual psalms begin at Ps 119, in Band C.
- **`usque ad` → "as far as"** — **33 occurrences of the italic `*usque ad*` splice formula across the four
  chunks, all 33 rendered `*as far as*`, zero rivals.** Two further occurrences of the words stand
  outside the formula and are counted separately — ⭐ **two licensed exceptions, each with the
  Latin that forced it:**
  1. **1004D `*Vobiscum sum usque ad consummationem saeculi.*`** — the phrase is **inside a
     scripture quotation** (Mt 28:20), not the abridgment formula. It renders "**unto** the
     consummation of the world". This is the 9000 @0316A case exactly (Lc 16:16's *usque ad
     Joannem*), and the italic-membership test does not settle it because the *whole quotation* is
     one italic span in the Latin — the test is membership in **a splice**, not membership in
     italics. Worth Band C's brief carrying that refinement.
  2. **1010C `*Non proponebam,* usque, *oculi mei.*`** — bare `usque`, **unitalicized**, and it is
     Cassiodorus marking a stretch of verses rather than splicing a father's sentence. Rendered
     "**down to**", which is the treatment Band A's four non-formula look-alikes received.
- **`Psalmus David` ≠ `Psalmus ipsi David`** — **six sites: four `Psalmus David` (1002B, 1005A,
  1007C, 1008B) → "A psalm of David", and two `Psalmus ipsi David` (1006B, 1010A) → "A psalm for
  David himself"**, plus `*Ipsi David.*` → "*For David himself.*" at 1010A. Migne's own plate
  confirms the distinction inside one stint's range (see §1b).
- **Psalm numbering** — Vulgate throughout; Psalms XCIII–C, no conversions, no anomalies. Migne's
  verse numbering skips within psalms (Ps 93 runs 1, 4, 6, 7, 8, 10, 11, 12, 13, 16, 17, 18, 19,
  20, 22; Ps 96 runs 1, 2, 3, 4, 5, 7, 8, 9, 10) — **those verses are simply not glossed, not
  misnumbered**, and nothing was reordered or supplied.
- **Heads** — `PSALMUS XCIII.` → `PSALM XCIII.` etc., Roman numerals kept Roman, four heads, one
  per psalm boundary in 0073/0074/0075 and one in 0076. ⚑ **`PSALMUS C.` is `PSLMUS C.` on the
  plate** (§3); the English head is `PSALM C.` either way under Pattern 9.
- **`Dominus virtutum` → "Lord of hosts"** — does not occur.
- **`sedes` → "seat", never "throne"** — **four occurrences of `sedes`, all "seat"**: `*Sedes iniquitatis.*`
  → "*The seat of iniquity.*" (1003D) · `Qui correcti sunt sedes ejus` → "his seat" (1006D) ·
  `correcti sunt sedes Dei` → "the seat of God" (1007A) · `quae est sedes Dei` → "the seat of God"
  (1008C). Zero "throne". (A fifth English "seat" at 1003A is `tribunal` in `*ante tribunal Christi*`,
  "the judgment seat of Christ" — a different Latin word, and named here so the count reconciles.)
- **`(ID.)` and `(Ibid.)` never expanded** — **23 `(ID.)`** in my range, all verbatim; `(Ibid.)`
  does not occur here at all.

### 5a. The vocabulary axes, decided per site and recorded

- **`gentes` family — 9 occurrences, and they split.** **Gentiles (5)**, every one in an explicit
  *Judaei*/*gentes* opposition, which is what the axis rules: `nunc omnes gentes monet` against
  `Praemonuit Judaeos` in the same sentence (1005A) · `aliae oves de gentibus` against `Judaea,
  quae crucifixerat` (1006C) · `gentes receperunt verbum Dei` against `qui erant in Judaea fratres`
  (1007B) · `Fideles de Judaeis et gentibus` (1008A) · `super populos gentium` against `in Sion
  Judaeorum` (1008C). **nations (4)**, where the sense is plainly generic: `*Qui corripit gentes*`
  (Ps 93:10, God correcting the nations at large, 1003A) · `*Dicite in gentibus*` (1005D),
  `*Et gentes in ira tua*` and `gentes vero, id est, malos` (1006A) — ⚑ **the second of these is a `populi`/`gentes` contrast, not a
  `Judaei`/`gentes` one**: the gloss opposes `bonos` to `malos`, and importing "Gentiles" would
  make an ethnic claim the sentence does not make. Zero `natio`, zero `gentilis`, zero `ethnicus`.
- **⚑ `gens tenebrarum` — does not occur in my range.** The open question is untouched; nothing to
  flag and nothing decided.
- **`daemonium` / `diabolus` — 4 : 5, no bleed.** demons: `daemonibus imperant` (1005B), `non super
  daemonia` (1004B), `suggestiones daemonum` and `Daemones, qui omnem carnem faciunt peccare`
  (1011B). devil: `patre diabolo` (1002D), `malleo … id est diabolo` (1008A), `versutias diaboli`
  (1010D), `diabolus dispergitur` and `immissiones diaboli` (1011B). Zero Satan.
- **`mysterium` / `sacramentum` — 0 : 2, kept 1:1.** `Universa legis sacramenta` → "all the
  sacraments of the law" (1008A) · `signati nobiscum sacramentis` → "sealed with the sacraments
  along with us" (1010D). No `mysterium` occurs.
- **`turba` / `multitudo`** — neither occurs. (Instrument checked: the only `turb-` string in my
  range is `titubaverant` at 1006C, which is a different verb entirely and is exactly the false
  positive the series brief names.)
- **The archaism test, run with BOTH memberships.** No guillemets occur in my range, so italic
  membership is the whole test here — and I ran it after translating, not before: stripping every
  `*…*` span and every `[var: …]` from all four English chunks leaves **zero** `hath`, `saith` or
  `doth`. ⚑ **One site failed this check and was repaired**: at 1005D `Quod regnavit et correxit,
  et judicavit` had been given "That he **hath** reigned and corrected and judged" in **gloss
  voice** — it now reads "That he reigned". The 12 surviving `hath` are all inside italic lemmata
  (`*He hath saved.*`, `*The Lord hath reigned.*`, `*Dominus dedit, Dominus abstulit*` and so on).
  **The check only worked because it was run on the finished English.**
- **Thou/you (Pattern 17), as a number marker.** Singular `tu` → thou throughout the gloss prose
  (`Be not hasty to punish another, if he has hurt **thee**`; `of **thyself** thou canst fail`;
  `if **thou** hast charity`; `**thou** didst not eat, whence then wast **thou** fed?`). Plural
  `vos` → you, including where it stands two lines from a singular (`If perchance **you** are
  solicitous`, 1004C, against `for of **thyself** thou canst fail`, same column). Ps 94:8's
  `si vocem ejus audieritis` and Jo 8:31's `Si manseritis` are both plural and both take "you".

---

## §6 · CRUCES — passages rendered literally, with the difficulty named

1. **1004D — `non quas eminus, quia sunt`.** Argued in full at §4a. Rendered "not those which
   from afar, because they are". Migne's crux, plate-confirmed, no marker, conjecture *emimus*.
2. **1006C — `postquam resurrectionem`.** §4b. Rendered "after which resurrection".
3. **1002D — `non me curat Deus, quid agam?`** The wicked man's speech, and the question mark is
   Migne's. Rendered "God does not care for me, what I may do?" — which is not comfortable English
   and is not meant to be: `quid agam` is a bare deliberative with no governing verb printed, and
   supplying one ("what care I…") would be the silent repair Pattern 7a names. Both `non`s carried.
4. **1010B — `quem iste tantum desiderat`.** `tantum` is ambiguous between "only" ("whom he alone
   desires") and "so much" ("whom he so greatly desires"). Rendered **"whom this man so greatly
   desires"** because the sentence is about the intensity of the psalmist's longing (`Quando venies
   ad me`), not about his being the sole desirer; but the two constructions both parse and I record
   that I chose rather than found.
5. **1008C — `contra quam nihil possunt irati`.** `quam` is feminine and both `Plenitudo` and
   `charitatem` are feminine and available. The English "against which the angry can do nothing"
   **preserves the same ambiguity** rather than resolving it in one direction. Deliberate.
6. **1010B — `*Quando venies ad me.*`** ⚠ **Migne prints a full stop where the Vulgate prints a
   question mark**, and prints a comma at the second occurrence. Pattern 8 forbids supplying a mark
   he does not print, so the English reads "*When wilt thou come to me.*" with a full stop. This is
   a site where the familiar verse pulls hard the other way; naming it here so a blind reader does
   not repair it.
7. **1007D — `*Misericordia* est quo promisit`.** Our TEI's nominative against the plate's
   `*Misericordiae*` (§3). Rendered "*Mercy* is that whereby he promised", which serves our Latin;
   at patch time the oblique case wants no different English. Cross-referenced to the unresolved
   0932B in the patches file.

---

## §7 · THE FOUR TESTS, RUN ON THE FINISHED FILES

**1 · No `[sic:]` swallows the word it marks.** Vacuously clean: **no `[sic:]` was fired.** I ran
the mechanical form anyway — stripping every marker from all four English chunks and reading what
is left — and found no stranded article, preposition or doubled mark. Every sentence reads aloud
without its brackets.

**2 · Each printed negative named to its host, then found on that host in the English.** Run on
all four chunks. The sites where it mattered:

- **1006D `permittendo dicit, non imperando`** — the `non` is on **`imperando`**, not on `dicit`.
  English: "he speaks by permitting, not by commanding." ✓
- **1008D `non levi voluntate colendus est, sed fixa deliberatione`** — ⚠ **the 2a trigger fires
  here**: a negative before a gerundive with a `sed` correlative one clause away. The `non` belongs
  to **`levi voluntate`**, and the `sed fixa deliberatione` proves it from the sentence's own
  structure, not from what reads well. English: "he is to be worshipped **not with a light will**,
  but with fixed deliberation." ✓ Had it floated onto `colendus est` the page would have said he is
  not to be worshipped at all.
- **1008D `Non solum patriarcha, sed populo`** — 2a trigger again (`non solum … sed`). The negative
  is on **`solum`**. English: "**Not only** the patriarch, but the people whom he signifies." ✓
- **1009B `Non enim fuit … Moysi poena non intrare in terram promissionis`** — two negatives, two
  hosts: the first on **`fuit`** (it was not a punishment), the second on **`intrare`** (not to
  enter). English keeps them apart: "it was **not**, as is thought by very many, a punishment to
  Moses **not** to enter." ✓ Collapsing either would reverse Augustine's whole point.
- **1009B `qui sub lege essent, et sub gratia esse nollent, non intrarent`** — three, the middle
  one lexical (`nollent`). English: "who were under the law, and **were unwilling** to be under
  grace, should **not** enter into rest." ✓
- **1011A `non praeeminet meritis, nihil potest; non est in populo meo granum, sed palea`** — three,
  and **the apposition rule applies to the last**: English does not inherit a negative across the
  `sed`, so the clause is written out in full — "he is **not** grain in my people, but chaff" —
  rather than "not grain, but chaff" hanging off the previous negative. ✓
- **1011B `quod et non adhaeserunt nisi boni`** — `non … nisi` is a single scope, and English marks
  it twice or not at all: "that **none** clave to him **but** the good." ✓
- **1010C `Innocens est qui nec sibi nec alii nocet`** — both `nec`s carried, both on their own
  host: "who harms **neither** himself **nor** another." ✓

**3 · Punctuation compared BY COLUMN BAND, never by total.** The anchors verify 1:1, so they
partition both twins identically. Colons, semicolons and question marks compared band by band
across all 39 bands in my four chunks — **and this test earned its place: 11 of the 39 bands
came back mismatched, on SIXTEEN individual marks, every one of them mine.** None was a dropped or
supplied clause — all sixteen were the translator's convenience against what Migne prints — and all
sixteen are now repaired:

- **fifteen supplied marks demoted to the comma Migne prints** — `As it were:` → `As it were,`
  (1002D, Migne `Quasi,`) · `that he may see; God` → `see, God` (1002D) · `canst not remake; he
  remakes` → `remake, he remakes` (1004C) · `to the prelates: declare` → `prelates, declare`
  (1005B) · `by the eternal sun; the one foretells` → `sun, the one` (1005B) · `because you are
  little; understand` → `little, understand` (1005B) · `The apostles and the angels; whence` →
  `angels, whence` (1005B) · `thanks are rendered; whence` → `rendered, whence` (1005C) ·
  `reigned in peace; of which` → `peace, of which` (1006B) · `wish to be adored; the good adore`
  → `adored, the good` (1007A) · `grow wanton; but they who` → `wanton, but they` (1007C) ·
  `whereby he promised; *truth* follows` → `promised, *truth*` (1007D) · `the glorious preaching;
  *judgment* requires` → `preaching, *judgment*` (1008D) · `save of sins: merciful` → `sins,
  merciful` (1009B) · `also in avenging; behold` → `avenging, behold` (1009B)
- **one mark I had DROPPED, restored** — 1003C `In acie patiens; sed quia ille vincit, qui vim
  sustinet; perdit, qui ferit` had lost its **second** semicolon, so "he loses who strikes" was
  hanging off the previous clause as a comma-splice instead of standing as Cassiodorus's own
  antithesis. It now reads "who bears the violence**;** he loses who strikes."

**After the repairs: 39 bands, zero mismatched.** ⚑ Recording the before-state because a test that
is only ever reported as passing is indistinguishable from a test nobody ran. The totals would have
partly cancelled here — 0073 alone was +2 in one band and −1 in another — which is exactly the
failure the by-band form exists to prevent.

**3a · Anchor POSITION, not merely presence (test 2b).** All 35 anchors checked against the word
they stand beside in the Latin, not merely that they are present and in order. Two sit inside
constructions and were split to match Migne exactly: `*oculi [1010D] mei.*` → `*mine [1010D]
eyes.*` (inside an italic span) and `non quas eminus, quia [1004D] sunt` → "because [1004D] they
are". One further, `[1011B]`, was checked **against the plate's own band mark**, which stands
beside `ubi ostendit / quis finis sit malorum` — the same place.

**4 · Does the English ASSERT what he asserts?** Read back paragraph by paragraph with the counts
already known clean. ⚑ **Run at the SUBJECT level, not the negation level**, because that is where
Band A's blind read found four of its six. Every "he", "she", "it" or "they" I supplied that the
Latin does not print was named to itself:

- **1003D `ut de eis pungas`** — no object is printed, and my first draft supplied one ("prick
  **men** by means of them"). **Removed**: it now reads "that thou mayest prick by means of them",
  because the Latin leaves it open and Augustine's `de eis` is instrumental, not objective.
- **1006D `Impiis … nubilosus et caliginosus`** — the supplied subject is **the Lord**, from
  `qualis sit Dominus primo adventu` two lines above, not from the sentence.
- **1008C `Parvum erat quando irascebantur`** — the supplied subject is **the name**, from
  `Confiteantur nomini tuo magno` (Ps 98:3), the verse the lemma `*Magno.*` cuts into.
- **1011A `non praeeminet meritis, nihil potest`** — the supplied subject is **the depraved man
  tolerated**, from `Etsi aliquandiu toleretur` in the same sentence and from Ps 100:7's `qui facit
  superbiam`. Not "the Church", which is the nearer noun and would invert the claim.
- **1009A `In hac specie loquebatur`** — the speaker is **God**, from Ps 98:7's `in columna nubis
  loquebatur ad eos`, not the pillar.
- **1006B `quem iniqui filii … crucifixerunt, atque regnum abjuraverunt ei`** — `ei` is **Christ**,
  and the sons are the agents of both verbs. Checked because the dative sits where an English
  reader expects an accusative.
- **1004C `nec scandala tibi nocent, quae mensuram a Deo accipiunt`** — `quae` is **scandala**, not
  `fluctus`; the relative is neuter plural and `fluctus` is masculine. English keeps it on the
  scandals.
- **1003A `quod ipsi per se non possunt scire, sed Dominus novit esse vanas`** — `ipsi` are **the
  men whose thoughts are vain**, and what the Lord knows to be vain is **the thoughts**, not the
  men. Both bindings are load-bearing and both were checked against Ps 93:11.

---

## §8 · SECTIONS READ CLEAN, AND WHAT THAT MEANS

Read at the plate, collated word for word against our TEI, and carrying no crux, no marker and no
patch: **1002C–1002D** entire (Ps 93 opening through VERS. 8) · **1003B–1003C** (Ps 93 VERS. 12–18)
· **1005A–1005B** (Ps 95 opening through VERS. 5) · **1006D–1007A** (Ps 96 VERS. 1–3) ·
**1007C–1007D** as far as `*Misericordiae*` (Ps 97 opening) · **1008B–1008C** (Ps 98 opening
through VERS. 2) · **1009A–1009B** (Ps 98 VERS. 6–8) · **1010B–1010C** (Ps 100 VERS. 2) ·
**1011A–1011B** (Ps 100 VERS. 6–8).

⚑ **A logged column is not a checked column, so here is what "clean" cost.** For each of those
bands I compared the printed line against our TEI word by word at 200 dpi, dropped to 500 dpi on
every glyph that looked wrong, and then re-read the English against the Latin asking only whether
it asserts what he asserts. The four suspect glyphs named in §2 were all withdrawn inside these
"clean" bands. **They are clean because they were read, not because nothing caught my eye.**

---

## §9 · FOR THE MERGE, AND FOR BAND C

1. **Fourteen TEI-patch sites** are queued in `data/briefs/8967-PENDING-TEI-PATCHES.md`. **Five of
   them unlock markers** (two `[sic:]` on non-words Migne prints, two `[cj:]` on words CC replaced,
   one `[cj:]` on `psalmi`); **two require an English change at patch time** and I have named the
   exact replacement text for both (§3). None was patched and no chunk was re-chunked.
2. **⭐ For Band C's brief — the `usque ad` refinement.** The italic-membership test does not settle
   a case where the *whole scripture quotation* is one italic span and the phrase falls inside it
   (my 1004D, Mt 28:20). Band A's formulation ("the italic-membership test decides it") reads as
   though italics were sufficient; the real test is membership in **a splice**. Band C carries the
   gradual psalms and will meet a great deal of `usque ad`; it should be told this.
3. **For Band C's brief — nothing at my tail runs over.** My range ends at 1011B in the middle of
   Ps 100's VERS. 8, and chunk 0077 opens at 1011B with the same psalm's closing note and then
   Ps CI. No convention, marker or crux of mine is left open across that boundary. Ps 119 and the
   `Canticum graduum` series are well beyond it.
4. **`gens tenebrarum` remains open.** It does not occur in cols 1002B–1011B; I have neither
   settled it nor added evidence.
5. **Nothing on my six leaves needs Gallica.** Every question I raised could be answered on this
   copy at 500 dpi. The `f443` / `f449` / `f453` list is unchanged.
6. **Band B marker totals from this stint: 11 `[var:]` · 0 `[sic:]` · 0 `[cj:]` · 0 `[d:]` ·
   0 `[ed:]`.**
