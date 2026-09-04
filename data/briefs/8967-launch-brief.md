# Launch brief — 8967, *Glossa ordinaria*, **Liber Psalmorum**

PL 113, cols 0841A–1080B · 96,650 words · **106 chunks** · run in **three bands**, this is **Band A**.

> **Band A = chunks 0000–0038** (prothemata + prologue through Psalm 50), 39 chunks, ~32,200 words,
> eight stints. Bands B (0039–0076, Ps 51–100) and C (0077–0105, Ps 101–150) are separate runs with
> their own hard-stops. **The work ships once, when all three bands are merged** — nothing deploys
> at the end of a band.

**Read first: `GLOSSA-NT-AGENT-BRIEF.md`.** It is series-wide despite its filename, it carries the
five settled Glossa conventions and **all six vocabulary axes**, and it binds you from your first
chunk. This file adds only what is new in the Psalter. Then `translation-style.md` (7a and 7a″
before you write a line), the style-anchor pair `src/latin/9741/0000.md` + its English twin, and
**your own lemma brief**, `data/briefs/8967-lemmata-NNNN.txt`, named in your launch message.

---

## §1. WHAT IS NEW HERE, AND IT IS THE NUMBERING

⛔⛔ **THE PSALM NUMBERS ARE THE VULGATE'S, AND YOU MUST NOT "FIX" THEM.** Vulgate/LXX numbering
runs one BEHIND the Hebrew and English psalters for most of the book (their 11 is our 10). Migne
prints Vulgate numbers and our Clementine uses them, so the two agree and **nothing needs
adjusting.** Never convert a psalm number, and never cite a psalm by an English Bible's number.

⚑ **AND THE OBVIOUS INFERENCE FROM THE ONE ODD HEAD IS WRONG — this was measured, not assumed.**
Chunk 0010 carries **two heads both numbered X**:

    ## PSALMUS X.-- *Secundum Hebraeos.*      <- the HEBREW psalm 10
    ## PSALMUS X.                             <- the VULGATE psalm 10, "In Domino confido"

The first glosses the Hebrew division, which in our Clementine is **the tail of Psalm 9** (that
psalm runs to 39 verses and absorbs it), with its `VERS.` numbers restarted at 1. Migne glosses
the passage twice under one numeral. **It would be natural to conclude the Glossa follows the
Hebrew division and that every later psalm is offset by one. It does not.** First-lemma probes
against the Clementine for every psalm head in this work score **138 same-number / 0 offset / 3
undecided**. The Hebrew split is a LOCAL insert at one head. Vulgate numbering governs the book.

⭐ **This is why nine spans at 0859B–0860D carry `⚑ MATCHES ONLY ELSEWHERE — Ps 9:2x`.** Those
flags are the checker reporting the text correctly. Do not treat them as divergences and do not
fire a `[var:]` on them. **They are the ONLY place in the work where a lemma legitimately
resolves to a psalm other than its own head.** Anywhere else, take a `⚑` seriously.

## §2. THE TITULI — settled here, and settled from the Glossa's own argument

These recur across all three bands (**82 · 38 · 19** occurrences) and are exactly the axis that
drifted as *gentes* did on 9004. **They are not open questions.**

1. **`In finem` → "Unto the end."** ⛔ NOT "For the choirmaster," which is what the Hebrew
   *lamnatseach* means and what a modern translation would give. **The Glossa argues from
   *finis* meaning END**: its own gloss is `Finis duobus dicitur modis, quando aliquid deficit,
   vel quando perficitur` — "*Finis* is said in two ways: when a thing fails, or when it is
   completed" — and elsewhere it reads the *finis* as Christ. A "choirmaster" rendering makes
   the commentary incoherent on its own lemma. This is the test the `[var:]` rule already uses:
   **the gloss argues from the word.**
2. **`Diapsalma` → `diapsalma`, unanglicized and ROMAN — not italic.**
   ⛔ This brief originally said "italic as Migne sets it" and **that was a mistake of fact on my
   part: Migne sets it ROMAN.** Three stints have now confirmed it at the plate (0849B, 0870D–
   0883A, 0887C, 0891D, including the masculine `Diapsalmus`). One stint had already followed the
   erroneous instruction; its single italic has been reverted. Setting it italic also breaks the
   Latin/English italic-span parity that every stint checks. ⛔ Not "Selah," not
   "pause." **The Glossa treats it as a term under discussion**, glossing it directly:
   `Diapsalma secundum Hieronymum semper, Hebraei Sela, id est, …`. A word the text stops to
   explain cannot be silently replaced by the explanation. Same standing as the sigla.
3. **`Canticum graduum` → "A canticle of degrees."** Keep **`gradus` → degree** everywhere, and
   this is load-bearing rather than stylistic: the gloss numbers the gradual psalms as a series
   in its own voice — *Quartus gradus*, *Septimus gradus*, *Decimus gradus* — so "step" or
   "ascent" in the lemma breaks a chain the commentary builds across fifteen psalms.
4. **`Psalmus David` / `Psalmus ipsi David`** are DIFFERENT lemmata and stay different in
   English ("A psalm of David" / "A psalm for David himself"). Several carry a `⚑` because
   Migne's titulus and the Clementine's differ — that is a real finding, not a checker fault.

⚑ **If a psalm forces an exception, take it and SAY SO in your cruces file with the Latin that
forced it.** A silent departure is drift and the merge cannot tell the two apart.

## §3. WHAT THE PLATE CAN AND CANNOT LICENCE HERE

⛔⛔ **THE INNER MARGIN IS CLIPPED ON MANY LEAVES — AND YOU MUST OPEN THE COLUMN TO KNOW.**
On many leaves the left-hand column loses 3–5 characters at the start of most lines (`VERS.`
prints as `s.`). **A marker resting on a line-opening word in such a column cannot ship on this
copy** — log it as needing a second witness (Gallica; `data/volumes.json`) and do not fire it.

⛔ **THIS BRIEF ORIGINALLY GAVE YOU A RULE FOR PREDICTING IT AND THE RULE IS WRONG.** It said a
left-hand column numbered 1 (mod 4) is clipped. That held on the first five pages and was
REFUTED on the eleventh: **col 901 is 1 (mod 4) and is perfectly clean**, found by the stint on
chunks 0025–0029 and verified independently. Tally after eleven more columns were read: mod-1 columns stand at **5 clipped (841, 849, 893,
897, 1045) against 6 clean (853, 857, 861, 865, 869, 901)**. Not a rule and not even a
tendency — a coin flip. My original five pages were four consecutive leaves plus one, so they
sampled a single physical gathering and the congruence was an artifact of contiguity.

⚑ **Use it to decide WHICH LEAF TO PULL FIRST. Never use it to decide a marker.** The failure
mode runs in the direction nobody audits: applied blind it WITHHOLDS good markers on columns
this copy answers, and it had already blocked three of them in cols 0892–0901 before that stint
opened the page. **The plate is the arbiter; a rule about the plate is not.**

⭐ **If your range covers columns nobody has read, read them before you fire anything.** Page map
`PDF page = (column + 11) / 2`, scan at `raw/scans/pl113/patrologiaecurs04migngoog.pdf`; record
every read in `data/plate-reads.json`. Two stints have now done this and it is what let their
markers ship at all.

- Five pages read at the plate, **zero foot-of-page conjecture apparatus** of either layer.
  Coverage is `spot`, not `full`: absence elsewhere is unproven.
- **`PSAMUS CXXIV` is already handled — you will not see it.** The plate reads `PSALMUS CXXIV.`,
  so CC's dropped *L* was CC's and is silently repaired in the TEI. No `[sic:]` is owed; firing
  one would accuse Migne of his transcriber's defect.
- **CC drops Hebrew from this work entirely** (zero Hebrew codepoints in 96,650 words). One site
  is recovered from the plate — `nebel (נבל)` at 0841C, in Band A, chunk 0001; print it as it
  stands. **Three `In Hebraeo` clauses remain unread**; if one falls in your range, do not
  invent Hebrew — log it.

## §4. THE SIGLA ARE FIVE TIMES DENSER HERE THAN IN ANY BOOK BEFORE

**One note per 28.6 words** — against Luke's 1 per 158 and John's 1 per 254. **3,377 notes in
this work; Luke had 278.** They are the attribution sigla — `(AUG.)`, `(CASS.)`, `(HIERON.)`,
`(REMIG.)`, `(BEDA.)`, `(ID.)`, `(Ibid.)` — arriving as ordinary `[n:]` notes, and convention 4
of the shared brief already governs them: **pass through verbatim, unanglicized, and passing a
siglum through is not endorsing it.** Migne's attributions in this recension are unreliable and
the work page says so. **Do not expand `(ID.)` or `(Ibid.)` to the name they point at** — that
is an editorial act, and at this density it would be thousands of them.

⚑ Migne's running head over this work reads **`WALAFRIDI STRABI FULD. MON. OPP.`** The byline is
**Anselm of Laon and his school**, as everywhere in the Glossa, and that question is closed —
9003's correction already shipped. Do not reopen it and do not note it.

## §5. COUNT YOUR OWN LATIN

Your lemma brief names its span total. **Count the italic spans in your own chunks against it and
say so in your cruces file.** A mis-split brief is invisible to `verify-english` and **the count
is the only detector there is** (9001's five briefs were off by −0/+13/−11/+15/−17). Two stints
did this check on 9001 and that is the only reason the defect was found. It is cheap. Do it.

⚑ The master total for this work is **5,997** spans across 22 ranges. It read 5,999 until
2026-09-04, when two phantom spans — empty `<hi></hi>` elements CC left in the TEI — were
removed. If your arithmetic disagrees with your brief, **say so rather than assuming you are
wrong**: that is exactly how both defects above were caught.
