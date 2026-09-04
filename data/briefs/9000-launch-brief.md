# Launch brief — 9000, *Glossa ordinaria*, **Evangelium secundum Lucam**

PL 114, cols 0243D–0356A · 44,075 words · 41 chunks · **eight stints**.

> Committed deliberately, like 8999's. A cruces file that cites "the launch instruction" is
> unreadable a month later if the instruction was thrown away.

---

## What this work is

The nineteenth-century **abridged recension** of the marginal gloss on Luke: a `VERS. n.--`
address, the Vulgate words being glossed in italics, then the comment, with attribution sigla
(`BEDA.`, `AMBR.`, `AUG.`, `HIER.`, `GREG.`, `ID.`) arriving as ordinary `[n:]` notes.
**Migne's attributions in this recension are unreliable, and passing a siglum through is not
endorsing it.** Do not correct, expand or query one.

⚑ Luke is printed **inside the Glossa proper** — the verso running head reads `GLOSSA
ORDINARIA. — EVANG. LUC.`, confirmed at the plate this session (p.144, p.164). Like Mark and
John, and unlike 9003 and 9004 in this same volume, whose bylines were corrected off the Glossa
author. **There is no attribution question to reopen here.**

This is the **largest gospel in the block** and the third consecutive one: Mark (9001) and John
(8999) are shipped and live. Their settled conventions are §1, and they are the reason this
brief exists.

## Read before you start

1. **`translation-style.md`** — the frozen register rulebook. Follow it exactly, and read
   **7a** (negation fidelity) and **7a″** (the scripture-quoting clause) before writing a line.
2. **`src/latin/9741/0000.md` + `src/english/9741/0000.md`** — the style-anchor pair: exact
   format, marker handling, register.
3. **`src/english/8999/cruces.md` and `src/english/9001/cruces.md`** — John and Mark. §1 below
   restates what they settled; read the originals for the evidence.
4. **Your own lemma brief**, `data/briefs/9000-lemmata-NNNN.txt`, named in your launch message.

---

## §1. CONVENTIONS INHERITED FROM MARK AND JOHN — settled, apply from your first chunk

**They are not open questions and they are not yours to re-decide.** The cost of not carrying
them in is measured: the merge cost **100+ edits on Mark, 147 on 9004, and 15 on John** — and
John is the run where all six stints were handed these axes *before they wrote a line*.

1. **The commentator's own voice is NOT archaised.** `dicit`/`ait` → **says**, never *saith*.
   `-eth` forms are permitted only **inside quoted scripture**; the italic-membership test is
   how you tell. (9004 stint 4 archaised 168 gloss-side verbs.)
2. **`turba` → crowd. `multitudo` → multitude.** Never the same English word for both.
   ⚠ A `\bturba` grep also matches the **verb** *turbare*; that false signal wasted a pass at
   John's merge. Check the instrument before reporting drift.
3. **`daemonium` → demon. `diabolus` / `satanas` → devil.** Do not let the Douay "devils" for
   *daemonia* pull the first into the second.
4. **`natio` → nation, always. `gentes` → Gentiles in the Judaei/gentes typological opposition,
   nations where the sense is plainly generic.** Singular `gens` of the Jewish people → "their
   own nation". `ethnicus` → heathen, a fourth word, not part of this axis.
5. **`mysterium` → mystery; `sacramentum` → sacrament**, 1:1.
6. **`usque ad` → "as far as"** — settled at John's merge (within-work majority 26–15, and the
   form Mark uses). This is the abridgment's own splice formula, marking where the recension
   cuts a father's sentence short; it is frequent and it is exactly the kind of axis six stints
   drift on. **"Down to", "up to", "as far as the words" are all the same decision made
   differently — use "as far as".**

⚑ **If Luke forces an exception, take it and SAY SO in your cruces file with the Latin that
forced it.** An inherited convention that breaks on this book is a finding, not an error — but a
silent departure is drift, and the merge cannot tell the two apart.

---

## §2. ADDENDUM A — MARKERS, AND THE ATTRIBUTION RULE THAT GOVERNS THEM

`[sic:]` accuses **Migne's type**. `[var:]` asserts **Migne's text** diverges from a witness.
Both are public claims about a printed page, and **our Latin is not that printed page** — it is
Corpus Corporum's transcription of it, which departs from Migne at roughly **three sites per
page** (measured on 9003, page by page).

### The measured class split — use it as your prior

| work | `[var:]` fired → stood | `[sic:]` fired → fell |
|---|---|---|
| 8999 *Ev. sec. Joannem* | 23 → **23 stood, 0 fell** | **0 fired** |
| 9004 *Expositio in quatuor Evang.* | 46 → **46 stood, 0 fell** | 27 → 8 fell |
| 9001 *Ev. sec. Marcum* | 19 → **19 stood, 0 fell** | 8 → **7 fell** |
| 11535 + 11550 | 92 → 91 stood | 77 → 53 fell |

**88 of 88 `[var:]` have now stood across the three Glossa gospels.** Suspicion of a single
WORD is suspicion of our file; suspicion of a quoted CLAUSE is evidence about Migne. The
asymmetry is mechanical: an OCR letter-swap manufactures broken words and cannot invent a
semantically coherent divergent clause.

### ⭐⭐⭐ THE FINDING FROM JOHN THAT THIS BRIEF EXISTS TO PASS ON

**No stint fired a single `[sic:]` in 29,727 words. They logged nineteen suspect words unmarked,
for the plate. The 23 leaf-reads spent on fired markers produced NO corrections at all — and the
nineteen declined oddities produced ALL SEVENTEEN.**

A stint that had guessed would have spent its credibility on exactly the wrong sites. **Do what
John's stints did.**

### ⛔ Your attribution guess is not evidence, and this has a number on it

On 9004 the stints classed fourteen readings as "probably our-file". The plate agreed with
**five** and refuted **nine**; three further withdrawals came from the one stint that made no
class claim at all. On 9004's siblings the stints' own guesses ran **right 5 / wrong 9**. Across
those works, **confidence and truth are close to uncorrelated.** Every wrong call rested on
internal corroboration that reads as decisive at the time: *"the correct form prints eleven
words later"*, *"a non-word, and the sentence is an etymology of that very word"*, *"a fusion at
a line break"*. **Frequency and internal corroboration prove an error EXISTS. They never prove
whose it is.**

### ⛔⛔ AND THE PRIOR DOES NOT EVEN HOLD WITHIN ONE WORK — measured on John

| range | declined non-words read at the plate | verdict |
|---|---|---|
| cols 381–390 | 4 | **4 of 4 were MIGNE'S** |
| cols 399–415 | 5 | **5 of 5 were OURS** |
| 9001 (whole work) | 6 | 6 of 6 ours |

Same author, same recension, same volume, ~200 columns apart. **No policy may be inherited from
a sibling book, or from another range of this one.** Only "log, do not attribute, read the
plate" survives.

Corollaries, each learned the expensive way:
- **A fused word is not automatically ours.** 9004 @0897C *prava indirecta* was classed as our
  fusion; the plate at 400 dpi sets it fused, with normal spacing either side.
- **A non-word is not automatically ours either.** 9001 @0203A *magnitudino* is a genuine
  non-word and **Migne prints it**.
- **A defect correctly SEEN is not a defect correctly ATTRIBUTED.** A blind reader rightly saw
  that "in the passion" matched neither the Latin nor Bede's sense. The plate prints **IN
  COENA** — at the supper. Ours.

### ⚑ TWO MECHANISM CLASSES FOUND ON JOHN — expect both here

1. **THE HYPHEN-REJOIN CLASS.** Corpus Corporum mis-rejoins a word Migne broke at a line or
   column turn: `scie-`/`bat`, `im-`/`pleretur`, `li-`/`gnis`, `inter-`/`rogare` — and in one
   case it kept the orphan syllable **as well**, so our file printed it twice. It manufactures a
   plausible non-word, and **no frequency test can tell it from Migne's own.** Four of John's
   seventeen withdrawals were this class, found independently by four readers who could not see
   each other. If a non-word looks like two halves of a real word, say so in your log.
2. **SILENT REPAIRS, running the other way.** CC quietly *fixed* Migne's broken type, so a
   `[sic:]` would have been TRUE and our clean file hides it — *contringitur*, *cupidites*,
   *fierit*. **No Vulgate collation can ever reach this class**, because the digitization removed
   the evidence first. You cannot detect it from our file alone. It is named so you know why a
   clean-looking Latin is not proof of a clean plate.

### So, the operating rule

- **A real, well-formed Latin word that merely reads oddly: render as printed, log it in your
  cruces file, and fire NO marker** — however good your internal argument. Say plainly that you
  do not know whose it is.
- **A non-word or broken word: same treatment.** Log it, name it, do not mark it.
- **A `[var:]` you can cite** — the divergence rests on `sources/vulgate/clementine-flat.txt`,
  cited **book chapter:verse** — you may fire, and it is the marker most likely to stand.
- **Never present attribution as settled.** Where a defect could be Migne's type or Corpus
  Corporum's transcription, name both and assert neither.
- ⛔ **If you fire a `[cj:]` for a word you think Migne mis-set, THE NEGATION AND THE FORCE OF
  THE SENTENCE MUST STAND IN THE RUNNING ENGLISH, NOT INSIDE THE BRACKET.** John @0415A parked
  the negation in the marker; the running text then read *"they to such a degree understand for
  us"*, self-contradictory against three neighbours on one line — and because the marker's own
  text contained "not", **every particle count, `verify-english`, and the reader's own tally
  scored it CLEAN.** A reader reads the running text. Apparatus is not force.

⚑ **A plate read WILL follow this translation, before the work ships.** You are not losing
information by declining to mark; you are handing it to a step that can settle it.

⚑ **Migne's own `( sic )`**: reproduce his mark verbatim, never stack ours on top. (None occurs
in this work's Latin — grepped this session.)

⚑ **A bracketed `Forte` in your Latin is MIGNE'S OWN conjecture**, not our artifact. Pattern 19.
None occurs in this work either, but the rule stands if one appears.

### The witnesses, for your information only

The on-disk scan is `raw/scans/pl114/patrologiaecurs06saingoog.pdf`, **PDF page = (column + 11) /
2**, re-calibrated on this work's own range this session (p.129 = cols 247/248). It **clips both
margins on some leaves of this range**; the clean second witness is archive.org
**`patrologiaecursu0114mign`**, `leaf n = (column + 11) / 2`. **You are not asked to read
plates.** They are named so you know the step is real.

---

## §3. 7a″ — THE LEMMA DIVERGENCE LIST IS YOUR MOST VALUABLE DELIVERABLE

This work quotes scripture on every page, so 7a″ governs it throughout.

**Measured on 8930, within one work**: the range whose prompt named the specific lemma words to
check, and said the divergence list was the most valuable thing it would produce, returned **11
`[var:]` and the later blind read found ZERO defects in it**. The range given a strong but
generic "read every lemma word by word" returned 1 marker and the blind read found **SEVEN**.
Same rule, same model, same work. **A general instruction to be careful does not work. Naming
the words does.** Your brief file names them.

Your file `data/briefs/9000-lemmata-NNNN.txt` lists **every italic span in your chunks, in
order, with its column band**, phrase-searched against the Clementine and marked ✓ / ⚠ / single.
**✓ is not clearance** (the sequence occurs *somewhere* in the Clementine, not necessarily at the
verse being glossed), and **⚠ is a place to look, not a divergence.** You walk every line either
way. The work has **1,459 spans**: 1,100 ✓, 161 ⚠, 198 single-word.

⚑ **The ✓ test was strengthened this month and is still not proof.** It was an unanchored
substring test until 2026-09-03, so a span whose last word was a *prefix* of the Clementine's
word scored ✓ — and at 8999 @0401A the prefix *congregare*/*congregaret* **was** the divergence.
Anchored now, but 23 false ✓ remain measured corpus-wide.

### ⛔ COUNT YOUR OWN SPANS AGAINST THE FILE'S TOTAL, AND SAY THAT YOU DID

Your brief file prints the number of spans in your range. **Count the italic spans in your own
Latin chunks and compare.** An ad-hoc splitter got 9001's five briefs wrong by −0/+13/−11/+15/−17
spans and **nothing downstream could see it**: the master inventory was complete, the English
unaffected, `verify-english` silent. **The count is the only handle there is.** It was caught
because two of five stints ran it and said so. (`split-lemma-brief.mjs` now splits by chunk
membership and asserts the ranges sum to the master — 1,459 across eight files here. Run the
count anyway.)

Report your list as: every span, its verdict, and for each divergence you **declined** to mark,
the reason. **A report of findings alone cannot be told apart from a report by an agent that
never looked.**

---

## §4. NEGATION FIDELITY — read `translation-style.md` 7a before you start

Every `non`, `nec`, `neque`, `nisi`, `haud`, `nunquam`, `nullus`, `nihil` the Latin prints
appears in your English, and none appears that the Latin does not — **including when carrying it
makes the sentence contradict itself.** That contradiction is usually a defect in Migne's plate
and is exactly what this edition exists to show.

**Never translate a word as its opposite, or as anything other than what it means, to rescue a
sentence that will not construe.** Render it as closely as the printed words allow and log the
crux. A repair hidden inside the translation leaves no trace, passes every automated check, and
is the one error class nobody downstream can find.

⚑ **The dominant defect class in this corpus is not negation — it is MECHANISM 5: a reference
silently re-bound to the contextually easier noun.** 11 of 19 on John, 5 of 6 on Mark, 5 of 8 on
9004. When a pronoun, relative or participle could attach to either of two nouns, **the easier
reading is the one that will be wrong. Check the case and the gender, not the sense.** 9004's
worst site made **God** the maker of man's mortality in a sentence whose whole point is that the
devil was.

⚑ **`non` governing two limbs negates both.** John @0366C negated only the first of two perfect
subjunctives, and the fault hid because a wandering adverb made the un-negated limb read
tolerably.

⚑ **And if your cruces file records a decision, the English must actually carry it.** John
@0409B declined a crux expressly because *modo* construes as "only" — and the shipped English
printed "presently", the very construal the crux had rejected. No re-reading of the apparatus can
catch that, **because the crux says the right thing.** Before you close a chunk, re-read your own
rulings against the English you actually wrote.

⚑ **Census the whole range, not the first chunks.** John's stint apparatus named three
mechanism-5 sites, all in its first two chunks, while all four of the blind read's serious
re-bindings sat in the chunks that never got a census. **A stint's apparatus is a complete record
of what it looked for and silent about the rest.**

---

## §5. SACRED MARKERS — violating any of these fails verification

- **Column anchors** `[0287B]`: reproduce **verbatim, in order, in place**. Your chunk's
  frontmatter `colContext`/`noteCount` say what to expect — **count your markers before writing
  each file.** The work has 444 column marks and 278 notes in total.
- **Notes `[n: ...]`**: reproduce verbatim, contents **untranslated** — they are Migne's
  citations and sigla. Same count, same order. *Exception, pattern 15*: a note whose content is
  editorial **prose** rather than a citation is translated and re-marked `[nt: ...]` at the same
  position. Judge by content, not length.
- **`## ` heads**: translate the head text, keep the `## ` line structure 1:1.
- **Italics `*...*` and list `- ` lines**: preserve structure. The italics are load-bearing —
  they are how a lemma is told from the gloss, and every convention test depends on them.
- **Frontmatter**: copy each Latin chunk's frontmatter **verbatim** into the English chunk. Do
  not invent fields.
- **One Greek word occurs in this work** — `Ὕδωρ` in chunk **0024** (*Ὕδωρ, aqua, inde
  hydropis*). Reproduce it in Greek, verbatim, and do not transliterate it.
- **`(cont.)` on a repeated `## ` head** is our chunk division, merged at assembly. Not a defect;
  never translate the marker.

**Em-dashes: keep them rare.** Migne prints none in the entire Latin corpus. Prefer a comma, a
colon, or a full stop. A tendency to resist, **not** a defect class — never mark one, never
report one, never restructure a faithful sentence to avoid one.

---

## §6. KNOWN FALSE POSITIVES — do NOT report these

1. **Column-band arithmetic.** Migne's A–D marks are positional quarter-guides transcribed where
   they appear on the plate — **not four per column**. `0260A → 0260A` on consecutive chunks is
   normal; a D-band followed by an A-band is normal; a recurring column number is normal. 49
   phantom gaps were examined corpus-wide and **none was real**. The only real signal is **text
   broken mid-word or mid-construction across an anchor.**
2. ⛑ **THE WORK'S FIRST AND LAST PAGES DIVIDE HORIZONTALLY, AND THE BAND LETTERS LOOK WRONG
   UNTIL YOU SEE THE PLATE — read this if you have chunk 0000 or chunk 0040.** Read at the plate
   this session (pp. 127 and 183). At the end, our Luke anchors run `0355A` then `0356A` while
   John's prologue occupies `0355B–0355D` and then `0356B`. That reads like interleaved nonsense
   and it is correct: the division is **full-width**. Luke's ending fills the **top band of both
   columns** (355A and 356A); then a rule and the `EVANGELIUM SECUNDUM JOANNEM` title span the
   whole page; then John fills both columns below. **So 355B sits BELOW 356A on the paper.** The
   opening (p.127, Mark ending, `EVANGELIUM SECUNDUM LUCAM` below the rule at 0243D) has the same
   structure. **Neither is a defect. Do not report it, and do not "fix" an anchor.**
3. **An `Ibid.` resolving to the "wrong" antecedent.** Anaphora resolves against the printed
   sequence at index time. Never propose a correction to a reference a following *Ibid.* depends
   on.
4. **`noteCount` off by one against the body.** The frontmatter `heads[]` can hold a duplicate;
   corpus-wide there are **0** real mismatches. Count `[n:]` in the body only.
5. **Pattern 4 `[f:]` inline citation tails.** Pattern 4's trigger is a work whose citing
   *practice* is inline tails (florilegia, *sententiae*). **A commentary that quotes a lemma and
   expounds it is not that.** This work does not qualify. Do not tag it.
6. **Pattern 9 items are not defects**: attested medieval spellings, gender mismatches with no
   English exponent, section labels. Read Pattern 9 before marking any of them.
7. **There is no `<LACUNA>` in this work** and no foot-of-page apparatus: nine pages spanning the
   whole work were read at the plate this session and Migne prints **no** numbered *Forte*
   conjecture and **no** asterisk-keyed cross-reference on any of them. No `[cn:]` is owed.

---

## §7. DELIVERABLES

1. **`src/english/9000/NNNN.md`** for every chunk in your range — same filenames as the Latin.
2. **`src/english/9000/cruces-NNNN.md`**, NNNN = your first chunk. It must contain, in this
   order: **(a)** the policy you applied, stated **before** your findings so it can be argued
   with; **(b)** your span count against the brief's total; **(c)** the lemma divergence list,
   every span, with declined divergences and their reasons; **(d)** this range's own cruces, by
   column; **(e)** your **declined-oddity list** — every suspect word you did NOT mark, with its
   column, in one place. On John that list produced every correction the work got. Make it easy
   to read; it is what the plate reader works from.

**Do not stop early.** Your batch is four to six chunks; peer agents complete batches this size
at full fidelity routinely. If you find yourself writing "context budget" at chunk 2, you are
repeating a documented failure pattern — push through your full batch. If a tool call fails, that
is transport, not a limit: retry, and do not shorten your work because of it.
