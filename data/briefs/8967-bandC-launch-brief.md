# Launch brief — 8967, *Glossa ordinaria*, **Liber Psalmorum** · **BAND C** (the last band)

**Chunks 0077–0105 · cols 1011B–1080B · Psalms CI–CL · 29 chunks · 30,038 Latin words · six stints.**

> **Bands A (0000–0038) and B (0039–0076) are DONE** — translated, TEI-patched, cruces merged,
> blind polarity read run on both. **This band closes the work.** Nothing deploys at the end of a
> band; the three-band merge, then the ship gate, come after.

## Read before you write a line
1. **`src/english/8967/cruces.md` §A** — the settled convention set. **It binds you. Do not
   re-derive it and do not re-decide it.** Then §F (the Band B merge) and **§F8** (the blind
   polarity read) — §F8 is the list of the mistakes two bands actually made.
2. **`GLOSSA-NT-AGENT-BRIEF.md`** — series-wide despite the filename; five Glossa conventions, six
   vocabulary axes.
3. **`translation-style.md`** — 7a (negation) and 7a″ (scripture-quoting) before your first line.
4. `src/latin/9741/0000.md` + its English twin — the style-anchor pair.
5. **Your own lemma brief**, `data/briefs/8967-lemmata-NNNN.txt`.

**Your ranges and span totals** (split by CHUNK, never by column band):
`0077–0081` → **357** · `0082–0086` → **389** · `0087–0091` → **277** · `0092–0096` → **329** ·
`0097–0101` → **234** · `0102–0105` → **146**.
⚑ These briefs were regenerated after Band A's patch pass and **verified unchanged by Band B's**:
re-chunking with all 192 patches left Band C's 29 Latin chunks byte-identical. They are current.
**Count the italic spans in your own Latin against your total and say so in your cruces file** — a
mis-split brief is invisible to `verify-english`, and the count is the only detector there is.
Band B went eight for eight on this check; do not be the one who skips it.

---

## §1 · SETTLED IN A AND B — inherit, do not re-open

- **`In finem` → "Unto the end."** Ruled from the Glossa's own gloss (`Finis duobus dicitur
  modis…`), confirmed at 0884B in Migne's own prose. **NOT "for the choirmaster."** Band A: 26
  occurrences, zero rivals. ⚑ One recorded non-engagement in B (@0976D Migne prints no `In finem`
  at that titulus) — note the same way if it recurs.
- **`Diapsalma` / `Diapsalmus` → unanglicized, ROMAN, never italic, never "Selah."** Settled on
  five plate reads in A, **confirmed by twelve more in B.** Italicising it also breaks the span
  parity you check.
- **`usque ad` — ⛔ the test is the `etc.` SPLICE, not italic membership (§A7, Wilson 2026-09-04).**
  It is Migne's abridgment formula ("as far as") **only where it follows an `etc.` and names the
  point at which the quotation resumes.** Everywhere else it is ordinary Latin, rendered by sense.
  Italic membership is WITHDRAWN as the test: col 0953C carries both cases four words apart inside
  one italic run. Work-wide: 777 occurrences, 733 formula, 44 not. **⭐ Your band needs this more
  than either of the others** — see §6.
- **`Psalmus David` ≠ `Psalmus ipsi David`.** Different lemmata, different English. ⭐ Evidenced
  from the plate at 1010A, four columns before your band opens: **Migne sets both forms.**
- **Vulgate psalm numbering governs. Never convert a psalm number.** Tested, not assumed:
  first-lemma probes across the work score 138 same-number / 0 offset / 3 undecided.
- **Heads:** `PSALMUS PRIMUS.` → `PSALM ONE.` but `PSALMUS II.` → `PSALM II.` — Migne spells the
  first out and numbers the rest. **Every head in your band is a numeral; leave them Roman.**
- **`Dominus virtutum` → "Lord of hosts"** (the gloss glosses it by angels). **`sedes` → "seat",
  not "throne"** — "throne" collides with the order *Throni*.
- **`gens tenebrarum` → "people of darkness"** (Wilson, §A5). A singular `gens` in a **non-ethnic
  metaphor is a named exception to the `gentes` axis, flagged rather than folded in.** If you meet
  another, match and flag; do not settle it.
- **Do not expand `(ID.)` or `(Ibid.)`.** Note density in this work is 1 per 28.6 words — five
  times Luke's.

⚑ **If Band C forces an exception, take it and SAY SO in your cruces with the Latin that forced
it.** An inherited convention that breaks on a psalm is a finding; a silent departure is drift.

## §2 · ⛔ EIGHT OF YOUR ~70 COLUMNS HAVE BEEN READ AT THE PLATE

`data/plate-reads.json` holds **1011, 1012, 1043–1048** for this range and nothing else. Bands A
and B shipped their markers *only* because each stint read its own leaves. **Read yours before you
fire anything.**

- Page map **`PDF page = (column + 11) / 2`**, scan
  `raw/scans/pl113/patrologiaecurs04migngoog.pdf` — **on disk.** Col 1011 → p. 511; col 1079 →
  p. 545. **Check the printed corner numbers before trusting a page.** Record every read in
  `data/plate-reads.json`; `plate-gate.mjs` refuses a marker on a column nobody opened.
- Render at 500–1200 dpi as the glyph demands. **Band B closed seven "unanswerable" sites on this
  same local scan** after they had been filed as needing Gallica — open the leaf harder before you
  declare it unreadable.
- ⛔ **There is NO rule for predicting the inner-margin clipping.** A "column ≡ 1 (mod 4) is
  clipped" rule was stated in Band A and **refuted twice**: Band B opened ~90 columns and found
  **exactly one clipped column in the whole band.** ⚑ **Col 1045 IS clipped and is in your range**
  (it is in the known-clipped list: 841, 849, 893, 897, 1045). That is one column, not a pattern.
  **Open every column; never infer.** Applied blind, the rule's failure mode is silent
  *withholding* of good markers, and it leaves no artifact behind.
- Where a column genuinely IS clipped and your marker rests on a line-opening word, it needs a
  second copy (Gallica; `data/volumes.json`). **Log it; do not fire.** Five such sites stand open
  work-wide; do not add a sixth that the local scan could have closed.

⭐⭐ **The measured case, from both bands:** one stint had **six `[sic:]` candidates and the plate
withdrew five** — every one read as a confident Migne defect *from the Latin alone*. Another had
the mirror: it **declined** a doubled word as "the classic transcriber artifact", and the plate
showed Migne sets it plainly. **Neither "trust the text" nor "suspect the transcriber" is a rule.
Only the leaf is.**

### ⚠ The two imaging hazards, and the control that defeats them
- **Italic `e` images as `c`** (`Ostcndisti`, `omncs`, `Vallcs`). Briefed into Band B's second
  wave, it then **withdrew eleven false accusations against Migne.**
- **`h`/`b`** — and it fired in *reverse* in Band B, our TEI carrying `biatu` where the plate reads
  `hiatu`.
- ⛔ **A turned sort is NOT in that class.** `Viuo`, `Clamabuut`: an `n` cannot become a clean
  bottom-arched `u` by failing to ink. **The test is a same-letter control on the same line** —
  Band B's `Nafrubimus` @0962C fired only because Migne sets `Narrabimus` correctly a few lines
  above, and the `t` of `tua` on the same line is short and straight-stemmed where the disputed
  glyph has a tall hooked ascender. Find the control, then decide.

## §3 · ⛔⛔ OUR LATIN IS NOT MIGNE'S — expect ~1.5 departures per column

Band A: 67 sites over 46 columns. Band B: **149 patches over 73 columns.** Both agree with 9003's
independent collation of the sibling PL 114 Psalter (~3 per page). **Budget for finding well over a
hundred in your ~70 columns.** They are **TEI-patch candidates, NEVER markers** — a `[sic:]` on one
publicly accuses Migne of his transcriber's defect. **The class runs in THREE directions:**

1. **CC moves Migne ONTO the Clementine** — `sordescat`, `audiebam`, `populis`, `super numerum`.
   **Invisible to any Vulgate collation by construction**: the divergence is erased before an
   instrument looks. ⭐ `conculcabit`→`conculcabis` @1000B is the one to remember — the gloss's very
   next words are *Serpentem calcat Ecclesia*, the third person the whole exposition rests on.
2. **CC REPAIRS Migne's real defects**, destroying markers we are entitled to fire — `Nocere` for
   *noscere*, the non-word `iniquitetem`, erased dittographies, and @0991C a **compositor eye-skip**
   CC reconstructed, so nothing in our twin could ever have shown the plate was broken.
3. **CC MANUFACTURES readings.** ⭐ @0942A it INSERTS `Sina` into a lemma whose whole point is that
   `Sina` is absent — **making Migne argue against a text he did not print.** And at a column turn
   it manufactured a dittography where Migne breaks `Ideo-|que`: **no `[d:]` is owed, the doubling
   is ours.**

⭐ **THE LINE THAT DECIDES WHETHER TO REPORT ONE: compositor errors are Migne's and get restored;
INK DAMAGE IS THIS COPY'S AND DOES NOT.** A damaged `p` imaging as `r` (`possit`→`rossit`) is the
condition of one physical leaf, not a reading of the edition. Report the first class; note the
second as copy condition. And **a patch needs positive evidence** — `locutus`→`locutos` was refused
at 900 dpi because the glyph was ambiguous and the printed form is the correct Latin.

⭐ **A patch can be a PRECONDITION for an apparatus entry, not a cleanup after it** (0876B,
`Seb isti`/`Sedisti`): `[sic:]` may wrap only type the twin carries, `[cj:]` needs the printed word
present. If your marker is unreachable because the twin disagrees with the plate, **say so in the
patch report** so the marker can be fired after the pass.

⛔ **Do NOT patch, and do not re-chunk.** `chunk-work.mjs` rewrites every chunk in the work and six
stints are live. **Report each site with its column and leaf; append to
`data/briefs/8967-PENDING-TEI-PATCHES.md`.** ⚑ **Write the column WITH its leading zero** where the
column is under 1000 — a bare `971a` matches nothing and still reports 0 unparsed. The patch pass
runs once, after the band's translation is complete; that ordering is what stops a patch rewriting
Latin under a translation somebody has already filed.

⚑ **What the English is a translation OF (§A6): the plate where the leaf has been read; our twin
where it has not.** The licence exists only for a column somebody actually opened, and **every such
site MUST appear in the patch file.** An English that silently outruns its Latin, with no pending
patch to close the gap, is the drift the rule exists to prevent.

## §4 · WHAT THE BLIND POLARITY READS CAUGHT — write so they find less

Band A: six of our own defects, four invisible to every other check. **Band B: 28 sites, 24 ours.**
Every one read perfectly in English. Three classes, and none has a grep signature:

- **A word flipped to its opposite to make a mis-parsed sentence run.** `linguae continentiam` →
  "the **incontinence** of the tongue". `sub spe religionis` → "under the **show** of religion"
  (*specie* for *spe*) — an unfulfilled hope converted into hypocrisy, a different charge.
- **A case or a subject silently reassigned.** `memor Dei est` → "**God** is mindful"; a nominative
  read as a genitive so **the English lost who is praying**; a supplied "he" that resolved to God,
  so **the page had God praying "Hear us, thou who art the Saviour."**
- ⛔⛔ **A SUPPLIED POSSESSIVE OR COMPLETION THE LATIN NEVER PRINTED — fourteen sites in Band B,
  and this is the failure profile of verse-by-verse commentary.** Migne prints the lemma SHORT and
  the translator completes it from the Vulgate: *Anticipaverunt vigilias* → "**My eyes** prevented
  the watches" · *Cibabis* → "Thou wilt feed **us**" · *In pennis* → "**Under his** feathers".
  ⭐ At 0965B *Oculi mei* is **itself a separate lemma** which the glossator then expounds — so
  supplying it in the head lemma pre-empts the gloss it exists to introduce. **Render the stump as
  printed.**
- ⚑ **English apposition does not inherit a negative across a comma.** `nec … compuncti sunt, id
  est, poenituerunt` became "that is, they repented" — the opposite of the gloss. **Scope that
  Latin marks once must be marked twice in English.**
- ⚑ **The archaism test needs BOTH memberships.** `-eth`/`saith` is licensed only inside quoted
  scripture, and this work marks quotation **two ways — italic lemmata AND « guillemets ».** An
  italic-only check mis-flags.

⚑⚑ **A LOGGED COLUMN IS NOT A CHECKED COLUMN.** One Band A defect stood in a column the cruces had
already logged as "negation carried without smoothing" — true, and beside the point, because the
defect was the **subject**, not the negative. **When you log a site, log what you checked, not that
you looked.**

⭐ **And the blind read audited the pass before it.** Seven of Band B's 28 were defects the merge
itself introduced or left behind — including **a `[sic:]` fired on the WRONG WORD**
(`[sic: *Eccesiam*]` sitting after "kingdom"), which is a false public accusation against Migne at
a word he set correctly. **Check that every marker you fire sits on the word it accuses.**

## §5 · A MARKER IS A CLAIM WITH A SHAPE — the withdrawals worth knowing
- **`[d:]` marks type Migne prints twice ADJACENTLY.** `[d: videantur, et]` @0991C was withdrawn:
  the earlier `videantur` was eight words back in a different clause and `et … et` was a
  correlative pair, so firing it deleted a finite verb and one limb of the correlative.
- **A section label misprinted in the Latin does not take a `[sic:]` in English.** Pattern 9
  normalizes it *precisely because* the facing Latin preserves the misprint (`PSLMUS` declined).
- **A concord mismatch with no English exponent takes no marker** once the reading is confirmed
  Migne's (`res aliena` @0971D).
- **Where CC has CORRECTED a citation of Migne's**, restoring it needs a `citation-corrections.json`
  entry landed with the patch, so the index still resolves ((Rom. IX)→(Rom. IV) @0971A).

## §6 · ⭐ BAND C SPECIFICS — what only your band has

1. **⛔⛔ THE GRADUAL PSALMS ARE YOURS, AND THE RULING IS ALREADY MADE (§A1.3).**
   **`Canticum graduum` → "A canticle of degrees", and `gradus` → degree throughout.** This is
   load-bearing, not stylistic: **the gloss numbers the steps as a series in its own voice** —
   `Primus gradus` through `Duodecimus gradus`, all present in your Latin — and any other rendering
   of `gradus` breaks the series. **19 `Canticum graduum` and 17 `gradus`/`gradibus` in your
   range; Bands A and B had none between them.** Nobody has tested this ruling against a plate.
   Read the tituli columns and confirm Migne's own form.
2. **⭐⭐ PSALM CXVIII IS NOT COMMENTED, AND MIGNE SAYS SO IN HIS OWN VOICE.** Chunk 0087 carries
   the whole psalm as a single italic editorial sentence:
   *Expositionem hujus psalmi, ut valde prolixam, omittimus. Vide Ambrosii, Cassiodori, Augustini
   Enarrationes in psalmos, e quibus ad verbum expressa est glossa ordinaria in hunc locum.*
   ⛔ **This is the EDITOR speaking, not the Glossa** — render it as the editorial note it is, keep
   it italic as Migne sets it, and **do not supply, summarise or gloss the missing exposition.**
   ⚑ It is an italic span and it is in your count. **Read this column at the plate** — a
   one-sentence dismissal of the longest psalm in the Psalter is exactly the kind of place a
   transcription silently tidies, and it is the single most quotable line in your band.
3. **Psalms CI–CL, and the work ENDS in your range** at Ps 150:6, col 1080B, chunk 0105 —
   `[n: (AUG.)] Tria sunt genera, etc., usque ad vitae aeternae vox est: Omnis spiritus laudet
   Dominum.` **There is no colophon in our twin. Check the plate for one** (a `FINIS`, a subscription,
   an editor's rule) and report it if Migne prints one — the end of a work is the place a
   transcription most often drops matter, and no other band can catch it.
4. **Book V of the Psalter (Ps 107–150 Hebrew = Ps 106–150 Vulgate) falls entirely inside your
   band.** Migne marks the book divisions where he marks them: **reproduce them as he prints them
   and do not regularise their wording** — and do not supply one he does not print.
5. **The `usque ad` splice is denser here than anywhere.** The gradual psalms carry it constantly,
   and §A7's test is mechanical: **is there an `etc.` in front of it naming the resumption point?**
   Formula → "as far as". No `etc.` → ordinary Latin, rendered by sense. Report your own count of
   both in your cruces.

## §7 · OPEN — Wilson owes a ruling; flag rather than decide
- A **singular `gens` in a non-ethnic metaphor** (as `gens tenebrarum` @0887D was): match Band A's
  "people of darkness" only for that phrase; anything else, **flag it.**
- **Five Gallica sites stand open work-wide** (`f443`, `f449`, `f453`, 0932B, 0981C), one IIIF
  request each, and Wilson has not ruled on spending them. If your range produces a site this copy
  genuinely cannot answer — **after you have rendered the leaf at 1200 dpi and looked for a
  same-line control** — log it the same way rather than guessing.

## §8 · WHAT YOU FILE
Your English chunks; **your own `cruces-NNNN.md`** with (§0) the span-count reconciliation, the
markers fired with the column each stands on, **the plate reads you did**, the divergence list
including the clean ones, **the candidates you REJECTED and why**, the ruled axes, and a handoff
section. Append every CC departure to `data/briefs/8967-PENDING-TEI-PATCHES.md`.

**The declined list is the instrument, not the leftovers.** Across eight stints and 44,073 words on
a sibling work it fired zero `[sic:]` and logged ~140 suspect words instead — and of 17 plate
patches, **not one came from a fired marker.** Write the rejections down.
