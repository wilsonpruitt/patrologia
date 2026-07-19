# Fable brief — florilegium citation policy

**Status:** open decision, blocks no current work. Written 2026-07-18 for a Fable
session. Paste the prompt below; the deliverable is a written convention, not code.

---

## Prompt

You are setting a corpus-wide convention for the Wroot Press `patrologia` project
(`~/patrologia`, migne.app) — the English translation of Migne's *Patrologia Latina*
and *Graeca*. Read `CLAUDE.md`, `PLAN.md`, `translation-style.md`, and
`reference_data-repository-standard` in memory before deciding anything.

**Your deliverable is a written artifact, not an implementation:** a numbered pattern
added to `translation-style.md`, plus whatever index-schema note belongs in
`CLAUDE.md` rule 9. An Opus session will execute against it. Do not translate
anything yourself.

### The decision

Florilegia — anthologies of excerpted sentences — are a recurring genre in Migne.
The first one through the pipeline is `11208`, *Flores seu sententiae ex S. Bernardo*
(PL 183, 2 chunks, ~207 sentences), already translated and staged at
`src/english/11208/`. Read it alongside `src/latin/11208/`.

Each excerpted sentence carries an abbreviated Latin locator naming its source in
Bernard's corpus: `De convers. ad cler., num. 37`, `Tr. de cont. mun. ad cler., n. 55`,
`IV, De consid., c. 3`, `Lib. II, De consid. cap. 7`, `Ibid.`

Decide how these locators are handled, and write the rule.

### What is already settled — do not relitigate

- The **text layer keeps them verbatim in Latin, untranslated.** Three locked rules
  converge on this: `[n: ]` note contents are untranslated because they are Migne's
  citations; scripture is translated as Migne prints it, never substituted; and
  CLAUDE.md rule 9 stores fontes "raw verbatim — the controlled source-name vocab is
  derived later FROM the accumulated raws, never from memory." Expanding
  *De consid.* → *On Consideration* in the prose would invent text Migne does not
  print and would normalize from memory.
- The **locator/comment distinction** the translating agent drew is correct and should
  be formalized: a *locator* is a pointer and stays Latin; an *editorial comment* is
  Migne's prose and gets translated. It applied this to *Proverb. vulgare* and
  *Nempe amorem comparis*.

### What is open — this is your call

1. **Where does the English expansion live, if anywhere?** The working proposal is a
   third layer: verbatim in the text, resolved in the index, expanded on demand in the
   display (hover/popover, same mechanism as the existing author-byline popover,
   generated from the index and never edited into the HTML per the `work-about.json`
   rule). Ratify, amend, or reject. Consider whether an English-first reading site
   (locked decision 1) can defensibly leave ~207 opaque Latin tails on the page.

2. **The index schema for fontes.** Scripture already uses a dual key —
   `refKey` (OSIS) + `refDisplay` (verbatim). Does a florilegium locator get the
   analogous `fonsKey` + `fonsDisplay`? If so, what is `fonsKey`'s vocabulary? Note
   the constraint in rule 9: the controlled vocab is meant to be *derived from
   accumulated raws*, not authored up front — so decide whether an early florilegium
   forces that vocabulary prematurely, and if so whether that is acceptable.

3. **`Ibid.` chains.** 22 of ~207 sentences (>10%) are bare `*Ibid.*`. Resolving the
   chain to its antecedent is cheap at index time and impossible later from the display
   string alone. Decide whether resolution is mandatory, and whether a resolved
   `Ibid.` is a *correction* (recorded like `data/citation-corrections.json`, with the
   printed form retained) or simply an index-layer inference that needs no audit trail.

4. **Citation-form variance.** One source, cited eight ways in one work:
   `De consid., cap.` · `De consid. cap.` · `De consid., n.` · `De consid.` ·
   `De consid., cap. 6, n.` — with the book number sometimes inside the italics,
   sometimes outside. This variance is evidence of how Migne cited and is destroyed by
   any normalization done in the prose. Decide whether it is worth *preserving as
   data* (a `fonsDisplay` per occurrence) or whether only the resolved key matters.

5. **Scope.** Does this rule govern all florilegia, all *sententiae*/*flores*/
   *excerpta* collections, or any work whose citations are inline italic tails rather
   than `[n: ]` notes? Name the trigger precisely enough that a translating agent can
   tell whether it applies.

### One known defect to rule on

At `src/english/11208/0000.md`: *"Nothing is so hard that it does not yield to
something harder. IV, De consid., c. 3. Hence habit is conquered by habit."* — Migne's
italic run has swallowed a sentence of actual Bernard content *into* the locator. This
is a mis-segmentation, not a mistranslation, and no existing rule catches it. Decide
whether the convention needs a detection step (e.g. flag italic runs containing finite
verbs) or whether this is left to read-through.

### Live constraint worth knowing

`11208` indexed **0 fontes** despite carrying ~207 locators, because the indexer only
harvests `[n: ]` notes and these are inline italic tails. So the current de facto
policy is not "verbatim" but "invisible." Whatever you decide, say explicitly whether
these locators must become indexed fontes — that is the gate on every downstream
layer.

### Output

1. A numbered pattern for `translation-style.md`, written in that file's voice, ready
   to paste, and specific enough that an Opus agent needs no interpretation.
2. Any `CLAUDE.md` rule-9 amendment for the index schema.
3. A short note on what is deliberately deferred and what would reopen the decision.
