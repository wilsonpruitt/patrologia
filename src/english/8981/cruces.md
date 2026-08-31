# 8981 · *Glossa ordinaria*, **Epistola I ad Corinthios** — cruces

PL 114, cols **0519C–0550D** · 14 chunks · 12,614 Latin words. Attributed by Migne to Walafrid
Strabo; in fact **Anselmus Laudunensis et schola**. Translated 2026-08-30 by three Opus stints,
none of which could see the others, then read by three blind polarity readers and gated at the
plate.

**This file is the MERGE LAYER, and it is not a copy of the range files.** `cruces-0000.md`
(chunks 0000–0004, ARGUMENTUM + CAPUT I–VI), `cruces-0005.md` (0005–0009, CAPUT VII–XII) and
`cruces-0010.md` (0010–0013, CAPUT XIII–XVI) stand beside it and carry the per-site detail — the
full lemma collations, the negation tables, the unexpressed-subject rulings, the plate candidates.
This file records only what was settled **across** the three ranges, or after them by the plate.

⚠ Kept to the merge layer alone, per the 8986 finding: `build-cruces.mjs` concatenates every
`cruces*.md` in the directory, so a merge that embeds its range files publishes the apparatus twice.

## §0 · Apparatus, counted from the English after the plate gate

**0 `[sic:]` · 14 `[var:]` · 6 `[cj:]` · 0 `[ed:]` · 0 `[d:]` · 0 `[nt:]`** — counted from
`src/english/8981/0*.md` after the gate and the polarity repairs, not summed from the reports.

The three stints filed **14 `[var:]` · 1 `[cj:]` · 0 `[sic:]`**. The plate gate **added five
`[cj:]`** that no stint and no blind reader could have fired, because firing them required the page.

`verify-english.mjs 8981` → **OK, 14 chunks.** `scan-raw-markers.mjs` → clean.
✅ **`plate-gate.mjs 8981` PASSES.** `polarity-record` → `chunks: 14 · sites: 12 · ours: 8`.

⭐ **All three stints independently declined to fire a single `[sic:]`**, each giving the same
reason unprompted: a `[sic:]` accuses *Migne's type*, our Latin is Corpus Corporum's transcription
and not the plate, and no column had been read. That is now the **fourth work running** where the
stated marker policy produced zero false accusations — and the third where the plate then proved
the instinct right in detail.

## §1 · THE PLATE GATE — 12 pages, and the result

Pages 266–268, 272, 274–280 read at 300 dpi with 600 dpi crops for every letter-level call, plus
p.269 for the polarity read's open items. Read by the session directly, not by fenced agents —
deliberately, because briefing several readers on one suspicion produces convergence, not
corroboration. Calibration: p.266 prints 521/522, checked before the first read; the map
`page = (col + 11) / 2` held at every subsequent page.

**ALL 14 `[var:]` STAND · 0 REVISED · 0 FALSE.**

⭐⭐ **The marker policy predicts the false rate, not the volume.** This is PL 114, the volume that
returned **65% false** on a letter-level sweep in August. Four consecutive works that fired no
letter-level type accusation have now returned 36/37, 14/14, 7/7 and **14/14**.

## §2 · ⭐⭐⭐ THE GATE CREATED FIVE MARKERS RATHER THAN DESTROYING ANY

Every one is Pattern 18: Migne prints a **real word**, the faithful English asserts what the author
did not, and the conjecture stands beside it additively. **Every one had been correctly WITHHELD**
by a stint or a blind reader for want of the column — the marker policy working in both directions,
which is the thing this run demonstrates that the previous three did not.

| col | Migne prints | read | who withheld it, and why |
|---|---|---|---|
| 0524A | *voluerit* | *violaverit* (I Cor. III, 17) | stint A **and** a blind reader, independently; both declined `[sic:]` **and** `[cj:]` and named this page as what would settle it |
| 0528C | *suo potestate* | *sub potestate* | blind reader; the plate prints *sub* in the parallel clause **on the same line** |
| 0541D | *Memora* | *membra* (I Cor. XII, 18) | blind reader; the following gloss *ut nihil desit illi* presupposes *membra* |
| 0542A | *honesti* | *inhonesti* | blind reader; the same gloss prints *inhonesti* of the same men two lines below |
| 0522D | *spiritui. Dei subjectus* | *spiritui Dei subjectus* | blind reader, on CASE — *Dei* is genitive, and *subjectus* governs the dative |

⭐ **0522D is the one no plate read could have found and no reader could have settled alone.** The
session confirmed at p.266 that the full stop after *spiritui* is **Migne's own**, so Pattern 8
keeps it; the reader showed that our English had then given the genitive *Dei* a dative's job to
rescue the fragment. Text untouched, `[cj:]` names the elision (the settled 8993 @0655C treatment).

## §3 · WHAT THE PLATE REFUSED

- ⛔ **0546C — a blind reader's proposed `[cj:]` is DECLINED.** Our file reads *min re*; the reader
  proposed `[cj: *min re*; read *minore*]`. **The plate prints *minore* whole and clean at 600 dpi**,
  so the defect is **Corpus Corporum's** and a conjecture would have accused Migne of a word he
  never set. TEI patch, **no marker**. This is exactly the class 8993 had to WITHDRAW two `[cj:]`
  for; caught here before shipping.
  ⭐⭐ **Stint C had already reasoned it out from the files alone**: *min re* and *ves tra* eleven
  words apart is a **scanning** signature, not a compositor's, and it withheld the marker on that
  ground. The plate confirmed it.
- ⛔ **0538C — a blind reader's plate request REFUTED.** It proposed *disserentis* for *deserentis*
  at medium-high confidence, arguing from the contrast with *praecipientis*. **The plate prints
  *deserentis*.** The English stands; the crux is Migne's.
- ✅ **0528C–D *Spiritus* and 0527C *veritatis*** — two more reader suspicions that the plate
  answered in Migne's favour. Both were correctly raised **without** a proposed emendation.

⚑ **The standing rule held again: blind readers are strongest on what the English SAYS and weakest
on what the page PRINTS.** Of six reader claims about the printed page, **one was confirmed, three
were refuted, and two were declined** — while every reader claim about the *English* stood.

## §4 · SIX HIDDEN DEFECTS, and two were MIGNE'S

`data/tei-patches/8981.json`. Our Latin read **correctly** at both normalized sites, so no check we
own could have found either.

- **0522A `qni` for `qui`** — a **turned u**, MIGNE'S OWN, silently corrected by CC. The controls
  are in the same breath: *quibus* on the next line and *Filii **qui** dederunt* two lines below,
  both a clean u in his own type.
- **0522C a spurious `et`** — CC **inserted a word the plate does not print** (*a spirituali homine,
  personaliter legitur*). It had reached the English as "and it is read personally".
- Four ordinary CC corruptions: `min re`→*minore*, `ves tra`→*vestra* (the pair eleven words apart),
  `nomines`→*homines*, `spituale`→*spirituale*.

⚠ **A methodological warning worth more than the patch it belongs to.** The first 600 dpi crop taken
for `nomines` landed on a **different occurrence eight lines away** (*amplius non dissolventur
homines*) which our file transcribes correctly. Had that been accepted as the control, a correct
line would have "verified" a defect on another. **The control has to be the line the defect is on,
not the nearest line containing the same word.**

## §5 · CONVENTION DRIFT, resolved across the three ranges

- ⭐ **`Quasi dicat` — three stints, three renderings.** A "as if he should say" (×4) · B "As if he
  said" (×3) · C "as if to say" (×9). **Settled by the corpus, not by preference:** "as if he should
  say" runs **239** occurrences corpus-wide and is the form used in *every* sibling Pauline epistle
  in this volume (8986, 8993, 8987, 8990) and in 9006. Normalized work-wide, **16 sites**, each
  checked 1:1 against the Latin first. Stint A's *ac si diceretur* (passive) and bare *Quasi:* were
  correctly left alone as different constructions.
- ✅ **Head form — the launch brief was WRONG and all three stints were right to ignore it.** The
  brief's example said `CHAPTER SEVEN.`; the corpus has **zero** spelled-out forms, `CHAPTER XIII.`
  in 26 works, and `CHAPTER ONE.` in 61. The rule is to **mirror the plate**: Migne sets *CAPUT
  PRIMUM* spelled and *CAPUT XIII* in numerals, so the English does the same. All three stints
  converged on this independently. The brief's example wants correcting.
- ✅ **Register: `ye` = 0, `you` = 103.** *thou* 44 / *thee* 4 / *thy* 15, singular address only.
  **The first work in four where the merge layer had nothing to convert** — 8993 needed twelve.

## §6 · WHAT IS KNOWN TO BE UNRESOLVED

- ⚠ **0533 `rationē`.** The plate sets *sed **ratione** praeditarum animarum* with a clear MACRON
  over the final e; our file has plain *ratione*. The macron expands to *rationem*, which does
  **not** construe (*praeditus* governs the ablative), while *ratione* does — which is what makes
  the tidying invisible. **Recorded, NOT patched, NOT marked**: the defensible claim is "the plate
  prints a macron and our file does not", not "Migne intended *rationem*". The second witness
  (`raw/scans/pl202/copyB_patrologiaecurs114unkngoog.pdf`) closes it in one page.
- ⚠⚠ **FOUR PAGES IN THIS WORK CLIP THE LEFT MARGIN — p.274, p.276, p.278, p.280**, each losing the
  left column's opening characters and its left-hand corner number (537, 541, 545, 549). **This is
  new information about the volume**: PL 114's clipping was on record for p.265/p.281 (RIGHT) and
  p.290/p.330/p.340 (LEFT). It is **per-page, not per-volume, and now confirmed on both margins
  inside a single work**. No marker here depends on a clipped column; any future crux in one needs
  the second witness.
- ⬜ **`workStatus` is null**, so the page publishes the weaker "New English translation". Whether a
  prior English of the Glossa *on I Corinthians* exists is a first-English determination and is
  Wilson's call — the same one made for 8947 against 8946.
