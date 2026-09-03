# Launch brief — 8999, *Glossa ordinaria*, **Evangelium secundum Joannem**

PL 114, cols 0355B–0426B · 29,728 words · 28 chunks · six stints.

> This file is committed deliberately. 9001's cruces cite "addendum A of the brief" and "the
> launch instruction" repeatedly, and **no such file exists in the repo** — the reasoning behind
> seven withdrawn markers is preserved while the instruction that produced them is not. That gap
> closes here.

---

## What this work is

The nineteenth-century **abridged recension** of the marginal gloss on John: a `VERS. n.--`
address, the Vulgate words being glossed in italics, then the comment, with attribution sigla
(`AUG.`, `BEDA.`, `HIER.`, `ALCUIN.`, `GREG.`) arriving as ordinary `[n:]` notes. **Migne's
attributions in this recension are unreliable, and passing a siglum through is not endorsing
it.** Do not correct, expand or query one.

⚑ John is printed **inside the Glossa proper**, under the running head `GLOSSA ORDINARIA. —
EVANG. JOAN.` — unlike 9003 and 9004 in the same volume, whose bylines were corrected off the
Glossa author. There is no attribution question to reopen here.

## Read before you start

1. **`translation-style.md`** — the frozen register rulebook. Follow it exactly, and read
   **7a** (negation fidelity) and **7a″** (the scripture-quoting clause) before writing a line.
2. **`src/latin/9741/0000.md` + `src/english/9741/0000.md`** — the style-anchor pair: exact
   format, marker handling, register.
3. **`src/english/9001/cruces.md` §1** — the four conventions settled on **Mark**, the
   immediately preceding book of this same work. §1 below restates them; read the original for
   the evidence.
4. **Your own lemma brief**, `data/briefs/8999-lemmata-NNNN.txt`, named in your launch message.

---

## §1. CONVENTIONS INHERITED FROM MARK — settled, apply from your first chunk

These were reconciled at 9001's merge, each tested against the Latin. **They are not open
questions and they are not yours to re-decide.** Applying them from the start is the point:
on 9001 five stints diverged and the merge cost 100+ edits, and on 9004 the same axis
(*gentes*) had to be settled across four stints after the fact.

1. **The commentator's own voice is NOT archaised.** `dicit`/`ait` → **says**, never *saith*.
   `-eth` forms are permitted only **inside quoted scripture**; the italic-membership test is
   how you tell. (9004 stint 4 archaised 168 gloss-side verbs; 9001 stint 5 did eight.)
2. **`turba` → crowd. `multitudo` → multitude.** Never the same English word for both — Mark
   0211C prints them in one sentence.
3. **`daemonium` → demon. `diabolus` / `satanas` → devil.** Do not let the Douay "devils" for
   *daemonia* pull the first into the second.
4. **`natio` → nation, always. `gentes` → Gentiles in the Judaei/gentes typological opposition,
   nations where the sense is plainly generic** (peoples, lands, `omnes gentes` at Matt 28:19).
   Singular `gens` of the Jewish people → "their own nation". `ethnicus` → heathen, a fourth
   word and not part of this axis.
5. **`mysterium` → mystery; `sacramentum` → sacrament**, 1:1.

⚑ **If John forces an exception, take it and SAY SO in your cruces file with the Latin that
forced it.** An inherited convention that breaks on this book is a finding, not an error —
but a silent departure is drift, and the merge cannot tell the two apart.

---

## §2. ADDENDUM A — MARKERS, AND THE ATTRIBUTION RULE THAT GOVERNS THEM

**This is the section that has been measured three times, and it is the one that matters most.**

`[sic:]` accuses **Migne's type**. `[var:]` asserts **Migne's text** diverges from a witness.
Both are public claims about a printed page, and **our Latin is not that printed page** — it
is Corpus Corporum's transcription of it, which departs from Migne at roughly **three sites per
page** (measured on 9003, the first page-by-page collation ever run).

### The measured class split — use it as your prior

| work | `[var:]` fired → stood | `[sic:]` fired → fell |
|---|---|---|
| 9004 *Expositio in quatuor Evang.* | 46 → **46 stood, 0 fell** | 27 → 8 fell |
| 9001 *Ev. sec. Marcum* | 19 → **19 stood, 0 fell** | 8 → **7 fell** |
| 11535 + 11550 | 92 → 91 stood | 77 → 53 fell |

**Suspicion of a single WORD is suspicion of our file. Suspicion of a quoted CLAUSE is evidence
about Migne.** The asymmetry is mechanical: an OCR letter-swap manufactures broken words and
cannot invent a semantically coherent divergent clause.

### ⛔ Your attribution guess is not evidence, and this has a number on it

On 9004 the stints classed fourteen readings as "probably our-file". The plate agreed with
**five** and refuted **nine** — and three further withdrawals came from the one stint that made
no class claim at all. **Across that work, confidence and truth were close to uncorrelated.**
Every wrong call rested on internal corroboration that reads as decisive at the time: *"the
correct form prints eleven words later"*, *"a non-word, and the sentence is an etymology of that
very word"*, *"a fusion at a line break"*. **Frequency and internal corroboration prove an error
EXISTS. They never prove whose it is.**

Corollaries, each learned the expensive way:
- **A fused word is not automatically ours.** 9004 @0897C *prava indirecta* was classed as our
  fusion; the plate, at 400 dpi, sets it fused with normal spacing either side.
- **A non-word is not automatically ours either.** 9001 @0203A *magnitudino* is a genuine
  non-word and **Migne prints it** — the first counter-example in the series.
- **A defect correctly SEEN is not a defect correctly ATTRIBUTED.** On 9001 a blind reader
  rightly saw that "in the passion" was neither the Latin's *poena* nor Bede's sense, and
  proposed a `[sic:]`. The plate prints **IN COENA** — at the supper. Ours.

### So, the operating rule

- **A real, well-formed Latin word that merely reads oddly: render as printed, log it in your
  cruces file, and fire NO marker** — however good your internal argument. Say plainly that you
  do not know whose it is.
- **A non-word or broken word: same treatment.** Log it, name it, do not mark it. Two of 9001's
  five stints fired zero `[sic:]` and logged their non-words for the plate instead; that was the
  right call and it is what this brief asks of you.
- **A `[var:]` you can cite** — the divergence rests on `sources/vulgate/clementine-flat.txt`,
  cited **book chapter:verse** — you may fire, and it is the marker most likely to stand.
- **Never present attribution as settled.** Where a defect could be Migne's type or Corpus
  Corporum's transcription, name both and assert neither.

⚑ **A plate read WILL follow this translation, before the work ships** — the second witness is
already found and calibrated (below), so nothing you log will be left to guess. You are not
losing information by declining to mark; you are handing it to a step that can settle it.

⚑ **Migne's own `( sic )`**: where he has already flagged the type, reproduce his mark verbatim
and do **not** stack a `[sic:]` of ours on top.

⚑ **A bracketed `Forte` in your Latin is MIGNE'S OWN conjecture**, not our artifact (PL 114
col. 0865A prints one inline). Pattern 19. Never mark it as ours.

### The witness, for your information only

archive.org **`patrologiaecursu0114mign`** — colour, 2215×3603, clean at both margins where our
on-disk PL 114 scan clips them. `https://archive.org/download/patrologiaecursu0114mign/page/n<N>.jpg`,
**leaf n = (column + 11) / 2**, calibrated on this work's own range at n183 = cols 355/356.
(Needs `-L` and a browser user-agent; a bare curl returns HTTP 200 with an empty body.)
**You are not asked to read plates.** It is named so you know the step is real.

---

## §3. 7a″ — THE LEMMA DIVERGENCE LIST IS YOUR MOST VALUABLE DELIVERABLE

This work quotes scripture on every page, so 7a″ governs it throughout.

**Measured on 8930, within one work**: the range whose prompt named the specific lemma words to
check, and said the divergence list was the most valuable thing it would produce, returned **11
`[var:]` and the later blind read found ZERO defects in it**. The range given a strong but
generic "read every lemma word by word" returned 1 marker and the blind read found **SEVEN**.
Same rule, same model, same work. **A general instruction to be careful does not work. Naming
the words does.** Your brief file names them.

Your file `data/briefs/8999-lemmata-NNNN.txt` lists **every italic span in your chunks, in
order, with its column band**, phrase-searched against the Clementine and marked ✓ / ⚠ / single.
Read its own header for what the marks mean. In short: **✓ is not clearance** (the sequence
occurs *somewhere* in the Clementine, not necessarily at the verse being glossed), and **⚠ is a
place to look, not a divergence.** You walk every line either way.

### ⛔ COUNT YOUR OWN SPANS AGAINST THE FILE'S TOTAL, AND SAY THAT YOU DID

Your brief file prints the number of spans in your range. **Count the italic spans in your own
Latin chunks and compare.** This check exists because an ad-hoc splitter got 9001's five briefs
wrong by −0/+13/−11/+15/−17 spans, leaving two stints short at the head of their own range and
carrying tail spans that were not theirs — and **nothing downstream could see it**. The master
inventory was complete, the English was unaffected, `verify-english` was silent. **The count is
the only handle there is.** It was caught because two of five stints ran it and said so.

(The splitter is now `scripts/split-lemma-brief.mjs`, which splits by chunk membership and
asserts the ranges sum to the master — 1,030 spans across six files for this work. Run the count
anyway.)

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
silently re-bound to the contextually easier noun.** 5 of 6 on 9001, 5 of 8 on 9004, 12 of 25 on
11613. When a pronoun, relative or participle could attach to either of two nouns, the easier
reading is the one that will be wrong. Check the case and the gender, not the sense. 9001's worst
site made **God** the maker of man's mortality in a sentence whose whole point was that the devil
was; another made a neuter `quod` agree with a masculine `diem festum`.

⚑ **And if your cruces file records a decision, the English must actually carry it.** 9001
@0199A states the ruling outright — *"I take qui gravatur as the Lord … The English follows the
first"* — and the shipped English carried the **rival** reading. No re-reading of the apparatus
could ever have caught that, because the crux says the right thing.

---

## §5. SACRED MARKERS — violating any of these fails verification

- **Column anchors** `[0473A]` (also bare `[1137]`): reproduce **verbatim, in order, in place**.
  Your chunk's frontmatter `colContext`/`noteCount` say what to expect — **count your markers
  before writing each file.**
- **Notes `[n: ...]`**: reproduce verbatim, contents **untranslated** — they are Migne's
  citations and sigla. Same count, same order. *Exception, pattern 15*: a note whose content is
  editorial **prose** rather than a citation is translated and re-marked `[nt: ...]` at the same
  position. Judge by content, not length.
- **`## ` heads**: translate the head text, keep the `## ` line structure 1:1.
- **Italics `*...*` and list `- ` lines**: preserve structure. The italics are load-bearing here
  — they are how a lemma is told from the gloss, and the merge's convention tests depend on them.
- **Frontmatter**: copy each Latin chunk's frontmatter **verbatim** into the English chunk. Do
  not invent fields.
- **One Greek word occurs in this work** — `λόγος` at chunk 0023 (0417A, *Graece λόγος, Latine
  verbum vel sermo*). Reproduce it in Greek, verbatim.
- **`(cont.)` on a repeated `## ` head** is our chunk division, merged at assembly. Not a defect;
  never translate the marker.

**Em-dashes: keep them rare.** Migne prints none in the entire Latin corpus. Prefer a comma, a
colon, or a full stop. This is a tendency to resist, **not** a defect class — never mark one,
never report one, never restructure a faithful sentence to avoid one.

---

## §6. KNOWN FALSE POSITIVES — do NOT report these

Each has been investigated and settled. Re-raising one costs a session, and acting on one has
twice nearly broken working data. If you believe you have a genuine exception, say so **as an
exception**, with the evidence named below.

1. **Column-band arithmetic.** Migne's A–D marks are positional quarter-guides transcribed where
   they appear on the plate — **not four per column**. `0350A → 0351A` "missing B–D" is normal; a
   D-band followed by an A-band is normal; a recurring column number is normal. 49 phantom gaps
   were examined corpus-wide and **none was real**. The only real signal is **text broken
   mid-word or mid-construction across an anchor.** Report that and nothing else in this class.
2. **An `Ibid.` resolving to the "wrong" antecedent.** Anaphora resolves against the printed
   sequence at index time. Never propose a correction to a reference a following *Ibid.* depends
   on.
3. **`noteCount` off by one against the body.** The frontmatter `heads[]` can hold a duplicate;
   corpus-wide there are **0** real mismatches. Count `[n:]` in the body only.
4. **Pattern 4 `[f:]` inline citation tails.** Pattern 4's trigger is a work whose citing
   *practice* is inline tails (florilegia, *sententiae*). **A commentary that quotes a lemma and
   expounds it is not that**, however much inline scripture it carries. This work does not
   qualify. Do not tag it.
5. **Pattern 9 items are not defects**: attested medieval spellings, gender mismatches with no
   English exponent, section labels. Read Pattern 9 before marking any of them.
6. **The `<LACUNA>` at 0416D is already settled — there is none.** Corpus Corporum lost one word,
   `nos`, at the column break and tagged the rest of the paragraph lacunose. The plate (leaf n213)
   prints *ut sint unum sicut et **nos**, haec est pax illa* continuously. **Patched at chunking**
   (`data/tei-patches/8999.json`); your Latin is whole. No marker is owed there.

---

## §7. DELIVERABLES

1. **`src/english/8999/NNNN.md`** for every chunk in your range — same filenames as the Latin.
2. **`src/english/8999/cruces-NNNN.md`**, NNNN = your first chunk. It must contain, in this
   order: **(a)** the policy you applied, stated **before** your findings so it can be argued
   with; **(b)** your span count against the brief's total; **(c)** the lemma divergence list,
   every span, with declined divergences and their reasons; **(d)** this range's own cruces,
   by column.

**Do not stop early.** Your batch is four or five chunks; peer agents complete five-chunk batches
at full fidelity routinely. If you find yourself writing "context budget" at chunk 2, you are
repeating a documented failure pattern — push through your full batch. If a tool call fails,
that is transport, not a limit: retry, and do not shorten your work because of it.
