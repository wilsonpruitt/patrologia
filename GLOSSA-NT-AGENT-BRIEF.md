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

## Do not stop early

Your work is short. Peer agents complete 5-chunk batches at full fidelity routinely. If you
find yourself writing "context budget", you are repeating a documented failure pattern —
finish the whole work, apparatus included.
