# 8967 *Glossa ordinaria*, Liber Psalmorum — cruces, chunks 0069–0072 (Band B, stint 7)

Range: `src/latin/8967/0069.md`–`0072.md`, cols **0991D–1002B** (Psalms LXXXVIII–XCII).
Lemma brief: `data/briefs/8967-lemmata-0069.txt`.

⚠ **This file is one stint's range. It must be merged into `src/english/8967/cruces.md`.**

---

## §0 · SPAN COUNT RECONCILIATION (the required check)

My brief's header declares **302 spans** for chunks 0069–0072. Counting `*…*` in my own Latin:

| chunk | italic spans |
|---|---|
| 0069 | 97 |
| 0070 | 84 |
| 0071 | 55 |
| 0072 | 66 |
| **total** | **302** |

**The brief agrees with my Latin exactly. No mis-split at either end of the range.** Column anchors,
notes and `## ` heads were counted against the Latin twin before and after writing: 16 / 10 / 9 / 7
anchors, 38 / 32 / 25 / 36 `[n:]`, 1 / 2 / 1 / 2 heads, all identical in sequence.
(`noteCount` in the frontmatter is one short in each chunk against the body — the known false
positive: the nested `[n: (Rom. XV)]`-type citations inside italic spans are not counted there.)

---

## §1 · THE PLATE — six leaves, twelve column-bands, all read

**Nobody had opened a column in this range before this stint.** PDF pp. **501–506** on
`raw/scans/pl113/patrologiaecurs04migngoog.pdf`, map `(col + 11) / 2`, **corner numbers read first
on every page** (991/992 · 993/994 · 995/996 · 997/998 · 999/1000 · 1001/1002; the foot of p. 506
reads `PATROL. CXIII.` with signature 32, which also re-confirms the volume from the plate itself).
Six pages at 200 dpi full width, with 600 / 900 / 1200 dpi crops on every candidate. All six
recorded in `data/plate-reads.json` at depth `full`; `plate-gate.mjs` passes all 14 markers.

⛔ **NOT ONE OF THE TWELVE COLUMNS IS CLIPPED at the inner margin** — twelve more counterexamples
to the withdrawn mod-4 rule, including 993 and 997, which the rule would have called clipped.

**Zero foot-of-page conjecture apparatus on any of the six pages, in either layer.**

### What the plate changed
The plate produced **16 word-level departures between Migne and our Corpus Corporum Latin over 11
collated columns — 1.5 per column**, matching Band A's measured rate almost exactly. They are
tabulated with their controls in `data/briefs/8967-PENDING-TEI-PATCHES.md`; the classes are:

- **12 sites where CC REPAIRS a real Migne defect** (`Humilitatus` · `hemo` · `iuferiori` ·
  `Opprobri` · `Elcce` · `aani` · `qnasi` · `delectatio` · `iniquitales` · `jauna` · `speram` ·
  `uior`). ⭐ **Every one of these, once patched back, unlocks a `[sic:]` this stint could not fire**
  — a `[sic:]` may only wrap type the Latin twin carries, and our twin carries the repaired word.
  **That is why this stint fired zero `[sic:]` on a range with twelve of them in it.**
- **2 sites where CC moves Migne ONTO the Clementine**, the class no Vulgate collation can see:
  `considerabit`→`considerabis` @0999D and the lemma `conculcabit`→`conculcabis` @1000B.
- **6 sites where our Latin carries what the plate does not**, including one dittography CC
  manufactured at a column turn (`Ideoque [1000A] que`, where Migne breaks `Ideo-|que` across the
  column) and one inserted `et` @0996D.

⭐⭐ **The single most consequential of them, and it is the shape the launch brief named.**
@1000B Migne's lemma is `*Et conculcabit.*` — third person — and **the gloss's very next words are
`Serpentem calcat Ecclesia`, "*the Church* treads upon the serpent."** Our Latin carries the
Vulgate's second-person `conculcabis`, so the exposition in our file rests on a word Migne does not
print. Nothing in the Latin looks wrong; nothing in a Vulgate collation could find it, because the
divergence had already been erased. Only the leaf reached it.

### Candidates the plate WITHDREW
None — but the reason is worth recording, because it is the opposite of Band A's stint that lost
five of six. **This stint formed no `[sic:]` candidate from the Latin alone**, because our Latin in
this range is unusually clean *precisely where Migne is not*. The suspect-glyph work therefore ran
in the other direction: every candidate came off the plate and had to be defended against the two
imaging hazards.

**Controls actually run on the ambiguous glyphs** (not "looked at" — the specific comparison made):

- `iuferiori` @0996A — the `u`/`n` call. Compared against the italic `u` of **`manu`, three words
  earlier on the same line**, and the italic `n` of **`animas`, same line**. The glyph is the cup,
  not the arch. Turned sort, therefore a set sort, therefore Migne's.
- `qnasi` @0996D — same call, controlled against the `n` of **`nihil`, same line**.
- `hemo` @0996A — the italic `e`/`o` call, run *because* the launch brief's `e`→`c` hazard says
  this scan lies about italic vowels. Controlled against the round italic `o` in `hemo`'s own last
  letter and, decisively, against **`*Quis est homo?*` printing correctly eleven lines above at
  0995D**.
- `Elcce` @0996C — read at **1200 dpi**: five separate glyphs, the `l` a full-height vertical with
  its own serif foot and clear white space on both sides. Not an over-inked `c`.
- `uior` @1000D — **the glyph carries an i-dot.** A broken `t` does not grow a dot. This is what
  puts it on the reportable side of the `possit`→`rossit` line and keeps the under-inked class off it.
- `aani` @0996D — 1200 dpi; two closed bowls, then `n`, then dotted `i`.

⚑ **`deservit`/`deserit` — the standing check was run and neither form occurs anywhere in this
range.**

---

## §2 · THE VULGATE WALK — every lemma word, named

Run against `sources/vulgate/clementine-flat.txt`, book–chapter–verse in hand, one span at a time.
**14 `[var:]` fired.** The pre-scan's ⚠ marks ordered the work and decided none of it: several ⚠
spans are innocent abridgments and two ✓ spans were real divergences.

### Fired

| col | Migne prints | received text | why it is material |
|---|---|---|---|
| 0992B | `propter veritatem Dei **implendam**` (Rom 15:8) | `propter veritatem Dei, **ad confirmandas promissiones patrum**` | ⭐ **The gloss is built on the word.** Two lines above it argues `Non exhibetur veritas in **impletione promissorum**`. Conform the proof-text and the argument's keyword vanishes from its own proof-text — 7914 @1079C exactly |
| 0992C | `Ecce **ergo** constitui te super gentes et regna` (Jer 1:10) | `Ecce constitui te **hodie** super gentes et **super** regna` | `ergo` for `hodie` turns a dating into an inference |
| 0994A | lemma `Tunc locutus **est** in visione` (Ps 88:20) | `Tunc locutus **es** in visione sanctis tuis` | ⭐ **The gloss itself prints the second person four lines below** (`tunc locutus **es** sanctis`). Migne's lemma and Migne's exposition disagree on the page |
| 0995B | `Destruxisti eum ab **emendatione**` (Ps 88:45) | `ab **emundatione**` | amendment for cleansing — a different word, and the gloss's `quidam **mundi** defecerunt` sits directly under it |
| 0995C | `Quis est homo qui **vivit**` (Ps 88:49) | `qui **vivet**` | present for future in a fully quoted clause |
| 0996A | `**eruent animas suas** de manu **inferiori**` (Ps 88:49) | `**eruet animam suam** de manu **inferi**` | ⭐⭐ **The highest-value divergence in the range.** The gloss's entire argument is `non tamen **ipsi** eruent animas suas … sed ille` — *they* do not deliver *their own* souls, He does. A conformed singular lemma destroys the exposition it carries |
| 0997C | lemma `Quis **novi**` (Ps 89:11) | `Quis **novit** potestatem irae tuae` | first person for third. **Confirmed at 900 dpi as Migne's, not CC's.** A `[var:]` and never a `[sic:]`: *novi* is a real form, so Pattern 12 has nothing to wrap |
| 0998B | `Splendor … super nos, **et operamini**` (Ps 89:17) | `**Et sit** splendor … super nos, **et opera manuum nostrarum dirige super nos**` | an imperative plural verb standing where the received text has a clause |
| 1000D | `Ipsius **figmentum** sumus` (Eph 2:10) | `Ipsius **enim sumus factura**` | ⭐ and the gloss's next lemma is `In **factura** tua` (Ps 91:5) — the received word is on the same line, in the other citation |
| 1001A | `Cum exorti **fuerunt**` (Ps 91:8) | `Cum exorti **fuerint**` | perfect indicative for future perfect: a past event for a condition |
| 1001B | `Et **ab** insurgentibus` (Ps 91:12) | `et **in** insurgentibus in me malignantibus` | different preposition, different construction. Not the letter-level class §C1 excludes |
| 1001B | `**Ite**, maledicti, in ignem aeternum` (Mt 25:41) | `**Discedite a me**, maledicti` | different verb, and the clause is quoted as the sentence of judgment itself |
| 1001D | lemma `**In diem**` (Ps 92:1) | `**in die** ante sabbatum` | ⭐ **the gloss's own next three words print `In die`.** Lemma and exposition disagree in the same line of type |
| 1002B | `**mirabilis elatio** maris` (Ps 92:4) | `**Mirabiles elationes** maris` | singular for plural |

### Checked, named, and NOT fired — with the reason
The recension abridges its citations constantly, and marking every abridgment would bury the real
divergences in noise. **These were each read word by word against the Clementine and deliberately
left unmarked:**

- `Venit princeps mundi hujus` @0994B (Jn 14:30) — Migne drops `enim`. A connective.
- `a transeuntibus viam` @0995B (Ps 88:42, `Diripuerunt eum omnes **transeuntes** viam`) — the
  glossator has recast the clause into the passive **in his own sentence** (`quidam jam sunt direpti
  a transeuntibus viam`). That is the gloss's syntax accommodating the quotation, not a divergent text.
- `tamen vane constituisti` @0995D — `tamen` is the glossator's own insertion into the run of Ps 88:48.
- `De terra veritas orta est` @0999B (Ps 84:12, `Veritas de terra orta est`) — **word order only**,
  and the gloss does not argue from the order.
- `Sedebitis super sedes duodecim` @0999C (Mt 19:28) — drops `et vos`.
- `Despondi vos uni viro` @1000B (2 Cor 11:2) — drops `enim`.
- `Quid nobis profuit superbia et divitiae?` @1001B (Wis 5:8) — Migne compresses two clauses of the
  received text into one. An abridgment of the class described above.
- `melior est qui vincit iram quam qui capit civitatem` @1002A — a medieval form of Prov 16:32, whose
  Clementine text (`Melior est patiens viro forti…`) is too far from it to pair cleanly. **Pattern 14
  needs a received reading to name; naming the wrong one would be worse than silence.**
- `Nimis profundae **sunt** cogitationes tuae` @1001A (Ps 91:6, `nimis profundae **factae** sunt`) —
  a dropped auxiliary; the sense does not turn on it.
- `Mane misericordia tua exsultavimus` @0997D (Ps 89:14, `Repleti sumus mane misericordia tua; et
  exsultavimus`) — the lemma simply **opens mid-verse**, which is Convention 3, not a divergence.
- `Laus cantici` @0998B (Ps 90:1, `Laus cantici David`) — likewise: the gloss expounds only the two
  words it prints.
- `Mittite a latere vestro` @0999C — **not identified in any book of the Clementine.** Recorded as an
  unplaced citation rather than guessed at.
- `et pascua **eveniet**` @0998C (cf. Jn 10:9 `inveniet`) — **stands in the gloss's own prose, not in
  an italic lemma**, so it is paraphrase, not quotation. Confirmed as Migne's at the plate.

---

## §3 · CRUCES — passages read at the SUBJECT level, not only the negation level

Band A's blind read found four defects that no other check could see, and their shapes were a
flipped word, a subject/object swap, a supplied possessive, and a self-reversing clause. **I re-read
every hard passage in this range for those four shapes specifically, after drafting.** It caught
nine of my own, and they are recorded here rather than quietly fixed, because a fixed defect nobody
records teaches the next stint nothing:

| col | what I had written | what the Latin says | shape |
|---|---|---|---|
| 0993B | "or of men **thou didst take up** some" | `alios **assumpsit**` — third person, against `reliquisti`/`permisisti` second | **person swap**; Migne changes person mid-sentence and my draft levelled it |
| 0993D | "prepare themselves **a seat**" | `parant **se sedem** Domino` — *se* is the predicate accusative: they prepare **themselves as** the seat | **object swap**, and it inverts the whole point of the clause |
| 0994C | "separated from **their** crimes" | `a criminibus` — bare | **supplied possessive**, the exact Band A shape |
| 0994D | "**his** father does not cast him off" | `non **pater** abjicit eum` | supplied possessive |
| 0992A | "not mindful of **his** misery" | `miseriae` — bare | supplied possessive |
| 0998A | "yet **their** children" and "through **their** iniquities"; and `vel` rendered "yet" | `vel filii`, `per iniquitates` | supplied possessive ×2, plus `vel` ("at least") flattened |
| 0999B | "distinguishes the humble **from** the proud" | `discernit humiles **vel** superbos` | a conjunction turned into a preposition |
| 0999C | "who also protects **his** offspring" | `proles` — bare | supplied possessive |
| 1000B | "The Church treads upon the serpent, **which** is wary of his cunning" | `Serpentem calcat Ecclesia, **quae** cavet astutiam ejus` — `quae` is the Church | **relative mis-attached**: my English gave the serpent the Church's wariness |

### Passages rendered as printed, where the printed Latin does not construe

- **@0993B `qui per humilem Christum, in quo alii sunt humiles, humiliantur`.** The relative is
  singular (`qui`, the dragon) and the verb is plural (`humiliantur`). **Rendered with the mismatch
  intact** — "who through the humble Christ, in whom others are humble, are humbled." Pattern 9:
  there is no English exponent for it either way, so nothing was emended and nothing is marked.
- **@0993B `qui in mari factus est ad illudendum ei`.** `ad illudendum` + dative admits two readings
  — "made … to be mocked at" (Augustine's usual sense here) and the Ps 103:26 sense "formed to play
  therein". I have rendered the first and **record the second**; no marker, because both are readings
  of a perfectly sound printed text.
- **@0997D `ut pro fide omnia spernerent, quae magna habentur, in Veteri et aeterna morte
  quaererent`.** ⛔ **This does not construe as printed**: `quaererent` has no expressed object and
  `in Veteri et aeterna morte` yokes an implied *Testamento* to *morte*. **Rendered as closely as the
  printed words allow** and logged rather than smoothed. No `[cj:]` is offered: every word on the page
  is a real word in a possible form, so there is nothing to conjecture *about* without rewriting the
  clause, and §18a's census is closed.
- **@0996D `*Qui est misit me ad vos?*`** Migne prints a **question mark on Ex 3:14, which is a
  statement.** Pattern 8: the mark is carried, not deleted, and not converted. It is not §8b's case —
  English grammar can hold this mark perfectly well; it is simply Migne's oddity, which is the point.
- **@0992B `per Spiritum manifestati`.** Our Latin has a participle governing nothing.
  **The plate reads `manifestasti`** — a second-person perfect parallel to `dixisti`, and the sentence
  runs. This English renders our Latin ("made manifest through the Spirit"); ⚑ **the patch pass must
  change the English with the Latin here**, as Band A did at 0904A.
- **@1000A `Ideoque [1000A] que diligenter adverte`.** Our Latin carries a dittography **Migne does
  not print** — he breaks `Ideo-|que` across the column turn. I have rendered `Therefore` once, kept
  the anchor in place, and reported the site. ⛔ **No `[d:]` was fired and none is owed**: a `[d:]`
  accuses Migne's compositor of a doubling that is ours.

### Second person
`tu`/`te` throughout Ps XC (`te ponit`, `te urat`, `de te dicens`, `oculis tuis considerabis`) is
singular and takes **thou**; `vos` at `*Mittite a latere vestro*`, `*Sedebitis super sedes duodecim*`,
`*Despondi vos uni viro*` and `misit me ad vos` is plural and takes **you** (Pattern 17). Both
memberships were used for the archaism test (§A4). **The range carries 10 `-eth` forms and every one
is licensed**: `dwelleth` ×5 (all inside the italic Ps 90:1 lemmata `*Qui habitat*`/`*habitat*`),
`knoweth` (`*Beatus populus qui scit*`), `liveth` (`*Quis est homo qui vivit*`), `cometh` (`*Venit
princeps mundi hujus*`), `overcometh` + `taketh` (`*melior est qui vincit iram quam qui capit
civitatem*`). **No `saith`, no `doth`, and no gloss-voice archaism anywhere** — `dicit`/`ait` render
"says" throughout.

---

## §4 · INHERITED CONVENTIONS — how each behaved in this range

- **`usque ad` → "as far as"**: **34 occurrences of the italic formula, 34 renderings, zero rivals.**
  ⚑ **Instrument check run first, and it mattered**: a raw grep returns **35**. The extra one is
  @0997C `qui etiam usque ad *octoginta* annos aliquas vires habere videntur` — **unitalicised, and
  therefore not the formula**, exactly the case §A4 carves out. It is rendered by sense ("who even up
  to *eighty* years are seen to have some strength"), and it is named here rather than left as a
  silent 34-vs-35.
- **`Diapsalma` roman, unanglicized**: 5 in the Latin, 5 in the English (0992D, 0994A, 0994D, 0995C,
  0996A). **Four of the five were read at the plate and Migne sets them ROMAN in every case** — four
  more reads behind §A1.2.
- **`In finem`**: **does not occur in this range.**
- **`gentes` family — 8 sites, decided one at a time.** → **Gentiles** ×5: 0992B `misericordia,
  gentibus` (the *Judaei*/*gentes* typology in its purest form) and the `gentes autem super
  misericordia` of the Rom 15:9 quotation beside it; 0993C `per eos gentes accipiuntur`; 0993C
  `*Hermon,* Gentes, quae prius fuerunt anathematizatae`; 0995A `promissa Judaeis, ad gentes lata
  sunt`. → **nations** ×3: 0992C `super gentes et regna` inside Jer 1:10, where the sense is the
  prophet's generic one; 0996A `Illati servis a multis gentibus`; 0996B `Contra maledictiones
  gentium`. **No `gentilis`, no `gentilitas`, no `ethnicus`, and no `natio`** — ⚑ the `natio` grep
  returns 3 and all three are `illuminatione`/`incarnatione`/`incarnatio`, the documented instrument
  false positive; the `gent-` grep likewise catches `resurgentes` and `insurgentibus`, and `diligenter`
  answers to `genter`.
- **`gens tenebrarum`**: ⚑ **does not occur in this range.** Nothing to flag; §A5 stands open.
- **`Dominus virtutum`**: does not occur. **`sedes` → "seat"** at 0993D (`*Sedes* Dei aeterna`,
  `parant se sedem Domino`) and 0995C (`*Sedem ejus in terram collisisti*`) — never "throne".
- **`mysterium`/`sacramentum`, `daemonium`/`diabolus`, `turba`/`multitudo`**: `diabol-` 9 ×→ devil,
  `daemonium`/`daemones`/`daemonum` 3 ×→ demon(s), no bleed in either direction. **No `satanas`, no
  `mysterium`, no `sacramentum`, no `turba`, no `multitudo` anywhere in the range** — ⚑ and the
  `turb-` grep's 3 hits are `turbati`/`turbatus` (Ps 89:7 `turbati sumus`), the documented verb false
  positive, not the noun.
- **Heads**: `PSALMUS LXXXVIII.` → `PSALM LXXXVIII.` etc., Roman numerals kept, and
  `PSALMUS LXXXVIII. (cont.)` keeps its `(cont.)` (known false positive — not reported).
- **`VERS. n.--`** passes through verbatim, including Migne's `VERS. 1, —` at 0996B, which our TEI
  regularises to `VERS. 1.--` (recorded as a punctuation departure, not argued as a patch).

---

## §5 · MARKER TOTALS FOR THIS STINT

**14 `[var:]` · 0 `[sic:]` · 0 `[d:]` · 0 `[cj:]` · 0 `[ed:]` · 0 `[nt:]`.**
All 14 stand on columns read at depth `full`; `plate-gate.mjs` passes.

⭐ **The zero in the `[sic:]` column is a finding, not an absence.** **Twelve `[sic:]` are owed on
this range and none can be fired until the TEI is patched**, because our Latin has been repaired out
from under every one of them. That inverts Band A's stint-1 experience (six candidates, five
withdrawn at the plate) and it is the same lesson from the other side: *the Latin alone predicts
nothing about the plate, in either direction.*

**No `[nt:]`**: all 131 notes in the four chunks are attribution sigla or bare citation locators
(`(CASS.)`, `(AUG.)`, `(ID.)`, `(Rom. XV)`, `(Matth. XXV.)`). Pattern 15's prose test was applied by
content and none passes it.
