# Glossa ordinaria, NT books — translation agent brief

*Glossa ordinaria* (PL 114), attributed by Migne to Walafrid Strabo, in fact
**Anselmus Laudunensis et schola**. Latin: `src/latin/<idno>/NNNN.md` →
English: `src/english/<idno>/NNNN.md` (same filenames).

**Read this whole file before you write anything. Your work, its columns and its named
lemma words come in the launch message, not here.**

## What this work is

An **abridged nineteenth-century recension** of the standard medieval marginal gloss on
Scripture: an `ARGUMENTUM` (a short summary of the epistle) followed by one or more
`CAPUT` sections of verse-keyed glosses. The form is fixed and you will see nothing else:

    VERS. 4.-- *Gavisus sum valde.* Quasi dicat: Quod tenetis, tenete. …
    *Ambulantes in veritate.* Positus est Adam in paradiso, ut operaretur …

A `VERS. n.--` address, then the **Vulgate words being glossed** in italics, then the
comment — which may itself pick up a **second italic lemma** mid-paragraph and gloss that.

## The Glossa conventions — SETTLED, and they bind you

These were settled on **Liber Ruth (8968)**, the pilot; the full statement is
`src/english/8968/cruces.md` §1. Do not re-open them, and do not invent alternatives.

1. **`VERS. n.--` is an address and passes through VERBATIM, untranslated.** Precedent:
   shipped work 21413 (Alcuin, *In Cantica canticorum*) already prints it this way.
2. **The lemma is Englished.** *Gavisus sum valde* → "I rejoiced greatly". The Latin lemma
   is never lost to a reader — it stands opposite in the parallel column.
3. **A fragmentary lemma is rendered as the phrase it stands for**, not as a word-for-word
   stump. Ruth's `VERS. 3.-- *Non te.*` (Ruth 3:3, *non te videat homo*) became
   **"Let no man see thee"**, not "Not thee". Judge from the verse the fragment opens.
   ⚠ A lemma ending in a comma or `etc.` (`*Videte vos,* etc.`) is a fragment of exactly
   this kind — carry the comma/`etc.` through as Migne prints it.
4. **The attribution sigla need NO new convention.** `(RAB.)`, `(ISID.)`, `(BEDA, ubi
   supra.)`, `(CHRYS.)`, `(AUG., lib. II …)` arrive as ordinary `[n: …]` notes and the
   locked register already governs them: **markers pass through verbatim, Latin
   abbreviations unanglicized.** Passing a siglum through is not endorsing it — Migne's
   attributions in this recension are known to be unreliable, and the reader is told so on
   the work page.
5. **The standard work-page template is sufficient.** No lemma-aware layout. Do not ask.

## Context you must read first

1. **`translation-style.md`** — the frozen register rulebook. Follow it exactly. The
   sections that will actually decide calls here: **7** (render the printed Latin
   literally), **7a + 7a″** (negation fidelity; the lemma quietly conformed to a familiar
   English), **8 + 8b** (sentence-type punctuation: never supply a `?` Migne does not
   print, **never delete one he does**; an indirect question keeps its mark by going direct
   behind a colon), **9** (what is NOT a defect), **10** (split type), **12** (`[sic:]`),
   **14** (`[var:]`), **15** (`[nt:]`), **17** (thou = singular, you = plural), **18**
   (`[cj:]`), **19** (`[cn:]`, Migne's own conjecture — none in this volume).
2. **`src/latin/9741/0000.md` + `src/english/9741/0000.md`** — the style anchor pair:
   exact file format, marker handling, register.
3. **`src/english/8968/`** — Ruth: the Glossa pilot, Latin and English side by side. This
   is your format model for a gloss book. **It is a different book with a different plate:
   never copy a rendering from it, and never let it override what Migne prints in yours.**
4. **`translation-runbook.md` § "Known false positives — do NOT report these"** (items
   1–7). **Item 1 (column-band arithmetic) and item 4 apply to you directly**: this is a
   lemma-and-gloss commentary, so Pattern 4 `[f:]` inline citation tails do **not** apply —
   do not tag them.
5. Your own chunks' frontmatter. **Copy each Latin chunk's frontmatter VERBATIM into the
   English chunk** — do not invent, reorder, or drop fields.

## Sacred markers (violating any = the work fails verification)

- **Column anchors** `[0705A]`: reproduce VERBATIM, in order, in place. Count them before
  you write the file and again after. A bare `[0704]` form also occurs — same rule.
- **Notes** `[n: (RAB.)]`: reproduce verbatim, contents untranslated. Same count, same
  order. **Pattern 15 exception:** a note whose content is editorial PROSE rather than a
  citation is translated and re-marked `[nt: …]` in place. Judge by content, not length.
- **Guillemets « »**: sacred, 1:1, if any appear.
- `## ` heads: **translate the head text** (`ARGUMENTUM.` → `THE ARGUMENT.`;
  `CAPUT UNICUM.` → `THE ONLY CHAPTER.`; `CAPUT PRIMUM.` → `CHAPTER ONE.`), keeping the
  `## ` structure 1:1. Match Ruth's shipped English for the `CAPUT` forms.
- Italics `*…*` and list `- ` lines: preserve structure. **Every italic span in the Latin
  is an italic span in your English, in the same place.**
- Defect markers are ENGLISH-ONLY, patterns 11–13: `[d: …]`, `[sic: …]`, `[ed: …]`. Read
  those patterns before using any of them.

## ✅ THE VULGATE IS NOW ON DISK — collate against it, not from memory

Added 2026-08-19, because four calls in one batch were declined or hedged for want of it and two were
settled only from an agent's recollection.

**`sources/vulgate/clementine-flat.txt`** — grep this. One verse per line, `Book C:V<TAB>text`,
35,811 verses, all 73 books of the Clementine canon including Tobit, Judith, Esther, Wisdom and
Sirach. Ligatures are expanded (`quae`, not `quæ`) **to match Corpus Corporum's orthography in
`src/latin/`**, and the source's poetic markup is stripped, so a phrase search actually works.
**`sources/vulgate/clementine/<Book>.lat`** holds the faithful text with ligatures and layout intact —
cite from those; search the flat file.

⚠ **It is the CLEMENTINE**, which is the right comparand: it is the text Migne's own lemmata are
measured against. Read `sources/vulgate/README.md` before relying on an edge case — it records the
release, the normalizations, and the fact that later upstream corrections are **not** applied, so a
call turning on a single letter should say so rather than trust this copy to that precision.
⚠ Book abbreviations are the source's own and four are easily confused: **`Jo` = John, `Jud` = Jude,
`Jdc` = Judges, `Jdt` = Judith.**

⛔ **What this changes: "declined for want of a Vulgate" is no longer an available answer.** Look it up.
⛔ **And a `[var:]` is a public claim about another text — it must rest on this file, never on
recollection.** That rule was written before the text was on disk and it still holds: when 8960's
reader leaned *autem* at Jdt 7:7 from a stylistic inference and **declined to log it**, the lean was
**wrong** — the Clementine reads *tamen*, exactly as Migne prints it, and there is no divergence at
all. The decline was right. Now you can simply check.

## ⚠⚠ 7a″ — NAME THE WORDS. The divergence list IS the deliverable.

**This is the class that beat Ruth.** Ruth's blind read found **not one polarity defect** —
and **four silent repairs**: scripture words quietly conformed to the familiar English
Bible against what Migne prints (*manum* rendered "to eat", *manibus* "handfuls", *Adam
filium Dei* given Douay's "who was of God", Old-Latin *Phoenicium* given "as scarlet").
⛔ **All four were made by a translator who was marking `[sic:]` correctly two columns
away. Using the apparatus somewhere is not evidence you used it where it was needed.**

Your launch message lists **every lemma in your work**. For each one:

1. Render **what Migne prints**, not what the Vulgate, the Douay, the AV or any other
   English Bible prints. **You are glossing a Latin phrase, not quoting a Bible.**
2. Where his lemma diverges from the Vulgate, that divergence is data — mark it
   `[var: …]` per Pattern 14 and say what the Vulgate has.
3. Then hold your rendering fixed and check **every re-quotation of it in the gloss
   below.** The gloss re-quotes its lemma constantly, sometimes as a fragment.
4. **Treat the list of divergences as the most valuable thing you produce.** Put it in
   `cruces.md` even where you took no marker — including the lemmas you checked and found
   to agree with the Vulgate exactly. A list of findings alone cannot be told apart from a
   report by an agent that never looked.

## Negation fidelity — read `translation-style.md` 7a before you start

Every `non`, `nec`, `neque`, `nisi`, `haud`, `nunquam`, `nullus`, `nihil` the Latin prints
appears in your English, and none appears that the Latin does not print — **including when
carrying it makes the sentence contradict itself.** That contradiction is usually a defect
in Migne's plate and is exactly what this edition exists to show. **Never translate a word
as its opposite, or as anything other than what it means, to rescue a sentence that will
not construe.** Render as closely as the printed words allow and log the crux. A repair
hidden inside the translation leaves no trace, passes every automated check, and is the one
error class nobody downstream can find.

⚑ Gloss prose is dense with negation by nature — it defines by contrast (*separat se a
Deo ne habeat Deum*; *nihil aliud ab haereticis recipite*). Go slowly there.

## ⚠ The unexpressed subject — the dominant defect class, measured

11613's blind read: **12 of 25 sites** were *an unexpressed Latin subject that English
cannot leave unexpressed, supplied wrongly.* Ruth's worst site was exactly this — at 0538C
our bare "she"s made the Gentile Church Christ's nurse instead of his mother, because the
subject lifted from Ruth 4:16 is **Noemi**. It parsed perfectly either way; **only the
source decided.**

So: **every time you supply a "he", "she", "it" or "they" that the Latin does not print,
name to yourself who it is and what tells you so.** In a gloss the antecedent is very often
in the **lemma above**, or in the Vulgate verse the lemma comes from — not in the sentence.
Where two readings both construe, say so in `cruces.md` rather than choosing silently.

## Punctuation — Pattern 8, and it has cost us twice

Migne's marks ride as printed. A `?` he prints on what reads as a statement is preserved; a
`?` he does not print is never supplied. `verify-english.mjs` checks question-mark parity
against your Latin twin — that check has caught a vanished 46-word sentence (11632) and two
supplied marks (11550). If your count differs from the Latin's, you have almost certainly
dropped or invented a clause. Go and find it before you file the chunk.

**8b:** where Migne closes an **indirect** question with `?` (*Quaeritur quid sit gratia
Dei?*), English cannot end that construction with a mark, so recast it into direct form
behind a colon — "It is asked: what is the grace of God?" Never drop the mark, and never
write the un-English "It is asked what the grace of God is?"

## Em-dashes

Migne prints **none** in the entire Latin corpus; our English carries thousands, most of
them the translator's convenience. Prefer a comma, a colon, or a full stop. Use a dash only
where it genuinely carries the sense. This is a tendency to resist, **not** a defect class —
never mark one, never report one, never restructure a faithful sentence to avoid one.

## The corpus is its own control

Before you invent a rendering for a hard word, **grep the other paragraphs of your own
work**, then the other Glossa books in `src/latin/89*/`. That move settled every hard call
on 11632 with no appeal outside the work. But: **a rendering found in another BOOK is a
hint, never an authority** — each book is its own plate.

## Migne's own printing is not yours to tidy

- A verse number **out of sequence** (Jude prints VERS. 23 before VERS. 21) is his
  ordering. Reproduce the order as printed and log it in `cruces.md`. Never reorder.
- Garbled type: render literally, log the crux (column + printed reading + your note).
- **Migne's own `( sic )`**: reproduce verbatim, and do NOT stack a `[sic: …]` of ours on
  top of it.

## Cruces

Log to `src/english/<idno>/cruces.md`: column + printed reading + your note. **A flagged
passage is not a checked passage** — if you decline a call, say why, because a blind reader
will look there. Twice now the translating agent has SEEN the work's worst defect, named it,
and left it. **Name the sections you read clean, and the candidates you rejected with
reasons.**

## ⛔⛔ THE THREE TESTS THAT CAUGHT WHAT EVERYTHING ELSE MISSED (added 2026-08-18f)

These come from blind reads of the last two batches. Each caught a defect that `verify-english.mjs`,
marker parity, and a careful self-audit all passed. **Run all three on your own files before you file.**

### 1. A `[sic:]` MUST NOT SWALLOW THE WORD IT MARKS

The marker records the plate's defect; **it does not stand in for your translation.** Englishing the
corrupt word for its evident sense and marking it are BOTH required (7a⁗).

⛔ Measured on Tobit (8970): **all four** of its `[sic:]` sites used the bracket *instead of* the
rendering, so four content words vanished from the English while the verifier saw a well-formed marker
and passed — *"Christ laid hold of the [sic: di bolum]"*, a sentence with no object. Also lost:
"spiritually", "incautiously", "cunning".

⚑ **The test, and it is mechanical: strip every marker from your English, then read what is left.**
Look for a stranded article or preposition sitting on punctuation ("of the ___", "of his ___"), or a
doubled mark. **If the sentence cannot be read aloud without the bracket, the rendering is missing.**

⚑⚑ **And know that 7a⁗'s three questions are NOT sufficient.** At 0728C that translator actually ran
them — verb? negation? conjunction? — got three clean answers, and concluded the marker could stand
alone. **The quarantine had taken the OBJECT.** 7a⁗ asks what *governs*; nothing in it asks whether
the clause still has the thing it acts on. Ask that fourth question yourself.

### 2. A NEGATION CAN BE RELOCATED — so "are all the negatives present?" passes the defect

⛔ Measured on 2 Thessalonians (8987) @0624B: `velint` ("they wish") was rendered **"unwilling"**, by
pressing the `non` of `non solum … sed` into double duty, which that correlative does not permit. A
second relocation sat four lines away (`sed non ut` silently reordered to `ut non`). **Nothing was
added and nothing dropped, so every count-based check passed — and the false reading read BETTER than
the true one.** Plate-confirmed: Migne prints `velint`.

⚑ **The test:** for each printed negative, **name the single Latin word it attaches to, then find that
word in your English and check the negative is ON it.** Not "are all the negatives present."

⚑ Both defects were in the **gloss prose, not the lemmata** — all 57 named lemmata in that work were
right. Your lemma list does its job; it does not cover the sentences between the lemmata.

### 2a. ⚠ TEST 2 HAS A KNOWN HOLE — it assumes YOUR naming of the host is right

Added 2026-08-18g, found by the Colossians translator on its own work. Test 2 catches a negative
that has **moved**. It does **not** catch a negative that never moved but was **attached to the wrong
host in the first place** — because the procedure takes your own identification of the host as its
input. A wrong identification produces a clean pass, with high confidence.

⛔ Measured: 8990 @0614B *ne **solus** nomen deitatis habeat* was rendered "that he alone may not have
the name of deity". It **passed test 2** — the negative was present, on a plausible host, band counts
matched. But the negative belongs on `solus`, not on `habeat`: idolatry's aim is not that God should
fail to have the name of deity, but that he should not have it **alone**. The `sicut … ita` parallel
pivots on *solus*, **affirmed** of the covetous man (`ut solus usurpet`) and **denied** of God.

⭐ **The sharpest statement of the hole, from the Esther translator, who found it from the other end:
test 2 validates THE MAPPING YOU PROPOSE, not the mapping the Latin makes.** Colossians hit it as a
wrong *identification* of the host passing cleanly; Esther hit it as a negative correctly attached to
`omnem` and still landing in the wrong place in English. Same gap, both ends. ⛔ Esther's own pass had
already caught the identical class two columns away and still did not see the second one.

⚑ **Trigger condition — fire on exactly this population:** a negative resting on a **verb** with a
**quantifier, correlative or predicate** nearby (*solus*, *omnis*, *omnino*, *solum*, *tantum*, a
`non solum … sed`, a `sicut … ita` pivot). Both sites that beat the test in that book had a
grammatically plausible verb adjacent to the real host, which is what made the misattachment invisible.

⚑ **Then prove the host from the sentence's own STRUCTURE — the correlative, the pivot, the `sed`
clause — never from what reads well.** Reading well is what the wrong host gives you.

⭐ Worked examples of the same class across the series, all repaired: 8948 @0742A *Non solum **regem**
laesit regina* floated onto the verb; 8990 @0611D *quia non **omnibus** patent* floated onto the verb;
8960 @0734B *veritatem **omnino non** celant*, where English word order reversed the scope. And handled
CORRECTLY, as the model: 8960 @0740B *non affliguntur **ex desperatione**, sed…*, where the *non*
stands before the verb but the `sed` correlative shows it governs the phrase.

### 2b. ⚠ AN ANCHOR CAN BE PRESENT, VERBATIM, IN ORDER — AND IN THE WRONG PLACE

`verify-english.mjs` checks column anchors for presence and order. **It does not check position**, so a
displaced anchor passes silently. Measured on 8995 @0601D: the anchor belonged at *Id est intimo
[0601D] amore Christi* and had migrated to the **second** occurrence of *amore Christi*, three
sentences and ~55 English words downstream — pointing a reader at the wrong fifth of the column.

⚑ Column anchors are the citation-resolving unit of this whole edition (CLAUDE.md hard rule 1), so this
matters more than its size suggests. **Check each anchor against the WORD it stands beside in the
Latin, not merely that it is present.** Splitting one mid-construction to match Migne is correct and
expected — 8995 did that deliberately at 0605B (`non [0605B] recedentes` → "not [0605B] departing").

### 4. ⭐ THE DIGITIZATION ALTERS MIGNE'S SPELLING — IN BOTH DIRECTIONS

Corpus Corporum does not only lose or corrupt text; **it also silently "corrects" it.** Three instances
now, all found by plate reads and none detectable from the Latin alone:

- **8970 @0725C** `Nephthali` → `Nephtlali` — a **corruption** (h/l metathesis).
- **8948 @0739D** `convivum` → `convivium` — a **normalization**: Migne printed a defective form and the
  digitization tidied it. Without the patch our Latin column prints a word Migne did not print.
- **8990 @0611A** `concilio` → `consilio` — an **alteration** to a different word (assembly → counsel).

⚑ **The consequence for you: a word that reads perfectly well may read well because someone upstream
fixed it.** You cannot detect that from the Latin. **Where a form strikes you as suspiciously tidy in a
passage that is otherwise rough, say so in the cruces and ask for a plate read** — that is cheap, and it
is how all three surfaced. A corpus-frequency check is the right way to raise it (8995 did this on
*circumcicis*: 172 `circumcis-` forms, no other `circumcic-`). ⭐ **Record the negatives too** — that
one came back clean, the twin agreeing with the plate, and a checked negative is worth having precisely
because the other three came back positive.

### 3. PUNCTUATION: compare BY COLUMN BAND, never by total

⛔ Twice now the totals have cancelled exactly. 8989: three semicolons against three, one softened in
one place and one supplied in another. Tobit chunk 0: **19 colons against 19**, one supplied at 0725C
and one destroyed at 0726D.

⚑ **The test:** your column anchors are verified 1:1, so they partition both twins identically.
**Compare marks band by band** — colons, semicolons, guillemet-opens, question marks — and require zero
mismatched bands. Tobit's translator built this and it returns the sites instantly.

⚠ **Do NOT sweep comma→semicolon changes on your own initiative.** A corpus-wide measurement closed
that as *a rate question, not an absence*, because Migne prints plenty of semicolons himself. Tobit was
a narrow exception because he prints **zero** in its first chunk — and that exception rests on his
practice in that book, not on a general rule. **Count your own book's plate before invoking it.**

### 5. ⭐⭐⭐ THE FOURTH TEST — the other three are CONTAINMENT checks

Named by the Judith translator, 2026-08-18g, and it is the most useful sentence to come out of two
batches of blind reads:

> **Parity, counts, attachment and bands are all containment checks — they ask what the English
> *contains*. Every defect that beat them was a question about what the English *says*.**

Three of Judith's five repairs were invisible to every check this edition runs, and they failed the
same way: **a mis-parse that produced plausible English** (*ferias*, a subjunctive verb demoted to the
noun "holidays"), **a right conjecture aimed at the wrong lemma** (the `[cj:]` on *generatione* where
*quindecim* was the corrupt word), and **a right negation in an inverted scope** (*omnino non*).
Nothing was missing in any of them. Everything was present, in order, at parity.

⚑ **So run this last, with the counts already known clean: read each finished paragraph back against
the Latin asking one question only — does it ASSERT what he asserts?** Not "is everything there".
It has no mechanical form and cannot be automated; that is the point. It is the only test that would
have caught any of the three.

⚑ Two habits that make it bite:
- **A sentence that reads smoothly where the Latin is rough is a suspect, not a success.** "for thee
  for holidays" survived because it read as an odd but harmless Latinism.
- ⛔ **Naming a rival in the cruces is not adjudicating between them.** Where a crux names two
  conjectures it must say **which the marker took and why the other lost** — the apparatus records
  only what the marker says, and a reader never sees the rival you weighed and rejected.

⚑ For the abridged books: **the `usque ad` formula removes words, it does not suspend grammar.** Parse
every resumption tail as strictly as ordinary prose. A tail that reads oddly is not evidence the
abridgment made it odd — that blind spot is exactly what produced the *ferias* defect.

## For the guillemet books — Judith, Esther, and the rest of the OT

If your lemmata are wrapped in `« »` rather than italics, **the conventions are already settled** and
you should reuse them rather than re-derive them: `src/english/8970/cruces.md` §1 (Tobit) carries
guillemet-lemma handling, the `*usque ad*` abridgment formula with **no verb ever supplied** to complete
it, Tyconius vocabulary, and sigla with Migne's own internal spacing. Read that section first.

## Do not stop early

Your work is short. Peer agents complete 5-chunk batches at full fidelity routinely. If you
find yourself writing "context budget", you are repeating a documented failure pattern —
finish the whole work, apparatus included.

## ⚑ Before you call something inconsistent, NAME THE CONTROL'S CLASS

Added 2026-08-19, after three blind readers in one batch raised the same non-defect.

A clipped lemma whose governed word is missing (*Multas.* for *Multas curas*, *Nolite.* for
*Nolite plures magistri fieri*) and a complete one-word lemma (*Sepultura.* · *Bellum.* ·
*Virum.*) are **different classes**. The first is a fragment and convention 3 renders it as the
phrase it stands for; the second has nothing elided and is rendered as it stands. **Contrasting
the two manufactures an inconsistency that is not there** — three readers did exactly that in one
batch, and all three findings were declined.

⛔ And the ruling those declines rest on, which is settled and not to be reopened: **the defect is
never expansion or its absence, it is CONFORMATION** — following the familiar English Bible where
Migne's own plate diverges from it. Expanding a fragment per convention 3 is not conformation.
Where a work really does treat the same bare lemma two ways (8998 rendered *Nolite.* both
expanded and as a stump), **resolve it by EXPANDING the stump, not by contracting its twin.**

⚑ The general form, worth carrying beyond lemmata: **a control has to be the same class as the
thing it controls.** State what class your control belongs to before you let it convict anything.
