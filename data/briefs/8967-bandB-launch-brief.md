# Launch brief — 8967, *Glossa ordinaria*, **Liber Psalmorum** · **BAND B**

**Chunks 0039–0076 · cols 0918D–1011B · Psalms LI–C · 38 chunks · 39,328 Latin words · eight stints.**

> **Band A (0000–0038, Psalms I–XLIX) is DONE**: translated, TEI-patched, cruces merged, blind
> polarity read recorded. Band C is 0077–0105. **The work ships only when all three bands are
> merged — nothing deploys at the end of a band.**

## Read before you write a line
1. **`src/english/8967/cruces.md` §A–§D** — the Band A merge. **§A is the settled convention set
   and it binds you.** Do not re-derive it and do not re-decide it.
2. **`GLOSSA-NT-AGENT-BRIEF.md`** — series-wide despite the filename; five Glossa conventions, six
   vocabulary axes.
3. **`translation-style.md`** — 7a (negation) and 7a″ (scripture-quoting) before your first line.
4. `src/latin/9741/0000.md` + its English twin — the style-anchor pair.
5. **Your own lemma brief**, `data/briefs/8967-lemmata-NNNN.txt`.

**Your ranges and span totals** (split by CHUNK, never by column band):
`0039`→384 · `0044`→294 · `0049`→373 · `0054`→367 · `0059`→352 · `0064`→272 · `0069`→302 · `0073`→258.
⚑ These briefs were regenerated after Band A's patch pass and are current. **Count the italic spans
in your own Latin against your total and say so in your cruces file** — a mis-split brief is
invisible to `verify-english` and the count is the only detector there is.

---

## §1 · SETTLED IN BAND A — inherit, do not re-open

- **`In finem` → "Unto the end."** Ruled from the Glossa's own gloss (`Finis duobus dicitur modis…`)
  and confirmed at 0884B where Migne uses the phrase in his own prose. **NOT "for the choirmaster."**
  Band A: 26 occurrences, zero rivals.
- **`Diapsalma` / `Diapsalmus` → unanglicized, ROMAN, never italic, never "Selah."** Settled on five
  plate reads. ⚑ Band A's one convention conflict came from a brief that said "italic"; Migne sets
  it roman. Italicising it also breaks the Latin/English span parity you check.
- **`usque ad` → "as far as"** (209 in Band A, zero rivals). **The italic-membership test decides
  it, not the words** — unitalicized look-alikes are ordinary prose and are rendered by sense.
- **`Psalmus David` ≠ `Psalmus ipsi David`.** Different lemmata, different English.
- **Vulgate psalm numbering governs. Never convert a psalm number.** (The two heads both numbered X
  are in Band A and are Migne's own; nothing like it recurs here.)
- **Heads:** `PSALMUS PRIMUS.` → `PSALM ONE.` but `PSALMUS II.` → `PSALM II.` — **Migne spells the
  first out and numbers the rest; follow his inconsistency, do not regularise.**
- **`Dominus virtutum` → "Lord of hosts"** (the gloss glosses it by angels). **`sedes` → "seat", not
  "throne"** — "throne" collides with the order *Throni*.
- **Do not expand `(ID.)` or `(Ibid.)`.** Note density here is 1 per 28.6 words — five times Luke's.

⚑ **If Band B forces an exception, take it and SAY SO in your cruces with the Latin that forced it.**
An inherited convention that breaks on a psalm is a finding; a silent departure is drift.

## §2 · ⛔ NOBODY HAS READ A SINGLE COLUMN OF YOUR BAND AT THE PLATE

**0 of the work's 46 plate reads fall in cols 0918–1011.** Band A's markers shipped *only* because
its stints read their own leaves. **Read yours before you fire anything.**

- Page map **`PDF page = (column + 11) / 2`**, scan `raw/scans/pl113/patrologiaecurs04migngoog.pdf`.
  **Check the printed corner numbers before trusting a page.** Record every read in
  `data/plate-reads.json` — `plate-gate.mjs` refuses a marker on a column nobody opened.
- ⛔ **There is NO rule for predicting the inner-margin clipping.** A "column ≡ 1 (mod 4) is clipped"
  rule was stated in Band A and **refuted**: 841/849/893/897/1045 clip while 853/857/861/865/869/
  877/881/889/901/909 are clean. It was drawn from four consecutive leaves and was an artifact of
  contiguity. **Open the column.** Its failure mode runs where nobody audits — applied blind it
  silently *withholds* good markers and leaves no artifact behind.
- Where a column genuinely IS clipped and your marker rests on a line-opening word, it needs a
  second copy (Gallica; `data/volumes.json`). Log it; do not fire.

⭐⭐ **The measured case for all this, from Band A:** one stint had **six `[sic:]` candidates and the
plate withdrew five** — every withdrawn one read as a confident Migne defect *from the Latin alone*.
Another had the mirror: it **declined** a doubled word as "the classic transcriber artifact" and the
plate showed Migne sets it plainly. **Neither "trust the text" nor "suspect the transcriber" is a
rule. Only the leaf is.**

## §3 · ⛔⛔ OUR LATIN IS NOT MIGNE'S — expect ~1.5 departures per column

Band A found **~67 sites over 46 columns**, agreeing with 9003's independent collation of the
sibling PL 114 Psalter (~3 per page). **Your band is ~93 columns; budget for finding well over a
hundred.** They are **TEI-patch candidates, NEVER markers** — a `[sic:]` on one publicly accuses
Migne of his transcriber's defect. **The class runs in three directions:**

1. **CC moves Migne ONTO the Clementine** — `sordescat`, `audiebam`, `populis`, `Dominus conservet`,
   `super numerum`. **Invisible to any Vulgate collation by construction**: the divergence is erased
   before an instrument looks. Only the plate reaches it.
2. **CC REPAIRS Migne's real defects**, destroying markers we are entitled to fire — `Nocere` for
   *noscere*, the non-word `iniquitetem`, and two erased dittographies (`etsi. Etsi` → `etc.`).
3. **Our Latin carries words the plate lacks** — at 0904A CC replaced Migne's `quasi,` with
   `sed Deus` and inserted `in`.

⭐ **THE LINE THAT DECIDES WHETHER TO REPORT ONE**, settled in Band A's patch pass:
**compositor errors are Migne's and get restored; INK DAMAGE IS THIS COPY'S AND DOES NOT.** A
damaged `p` that images as `r` (`possit`→`rossit`) is the condition of one physical leaf, not a
reading of the edition. Restoring it would import a defect that exists nowhere else. Report the
first class; note the second as copy condition.

**Do NOT patch, and do not re-chunk.** `chunk-work.mjs` rewrites every chunk in the work and eight
stints are live. **Report each site with its column and leaf; append to
`data/briefs/8967-PENDING-TEI-PATCHES.md`.** The patch pass runs once, after the band's translation
is complete — that ordering is not bureaucracy, it is what stops a patch rewriting Latin under a
translation somebody has already filed.

## §4 · WHAT THE BLIND POLARITY READ CAUGHT IN BAND A — write so it finds less

Six of our own defects, and **four were invisible to every other check**. None had a marker, a crux,
or a grep signature, and each read perfectly in English:

- `linguae **continentiam**` → "the **incontinence** of the tongue" — **one word flipped to its
  opposite** because the translator had mis-parsed the governing verb and needed the sentence to run.
- `memor Dei est` → "**God** is mindful" for "mindful **of God**", leaving `Dei` doing no work.
- A clause that made **God receive all things from a creature** — the opposite of its own next line.
- "the testimony of **their** enemies" — a possessive the Latin never printed, inverting the argument.

⚑⚑ **AND ONE OF THEM STOOD IN A COLUMN THAT WAS ALREADY LOGGED.** The cruces recorded that clause
among negations "carried without smoothing" — **true, and beside the point, because the defect was
the SUBJECT, not the negative.** **A logged column is not a checked column.** When you log a site,
log what you checked, not that you looked.

⚑ **English apposition does not inherit a negative across a comma.** `nec … compuncti sunt, id est,
poenituerunt` became "that is, they repented" — the opposite of the gloss. **Scope that Latin marks
once must be marked twice in English.**

⚑ **The archaism test needs BOTH memberships.** `-eth`/`saith` is licensed only inside quoted
scripture, and this work marks quotation **two ways — italic lemmata AND « guillemets ».** An
italic-only check mis-flags.

## §5 · OPEN — Wilson owes a ruling, flag rather than decide

- **`gens tenebrarum`** (singular `gens` in a **non-ethnic metaphor**) — the `gentes` axis does not
  rule on it. Band A rendered "nation of darkness" and flagged. **If you meet it, match Band A and
  flag; do not settle it.**
- Three sites Band A could not read on this copy, all in Band A columns — `f443`, `f449`, `f453`.
  If your own range produces such a site, log it the same way rather than guessing.

## §6 · BAND B SPECIFICS

- **Psalms LI–C.** Ps 50 (the *Miserere*) closes Band A; you open mid-Psalm-LI territory at 0918D.
- **No gradual psalms here** — `Canticum graduum` and the numbered `gradus` series begin at Ps 119,
  in Band C. The ruling ("a canticle of degrees", `gradus` → degree) is recorded for them, not you.
- Ps 71 ends Book II with `Defecerunt laudes David filii Jesse`; Ps 72–88 are Book III. Migne marks
  the book divisions — **reproduce them as he prints them and do not regularise their wording.**
