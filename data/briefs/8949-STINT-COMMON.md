# 8949 *Liber Exodus* (Glossa ordinaria, PL 113) — common stint brief

Every stint on this work reads this file. Your launch message names your chunk range, your
lemma brief, and your plate range; everything below is the same for all nine stints.

**The work:** Glossa ordinaria on Exodus, Anselm of Laon and his school, PL 113 cols
**0183A–0296C**, 44 chunks / 46,353 words. It is a lemma-and-gloss commentary: a verse lemma
(`VERS. n.-- *lemma*`), then glosses attributed by siglum (`[n: (RAB.)]`, `[n: (BED.)]`,
`[n: (ISID.)]`, `[n: (ORIG.)]`, `[n: (GREG.)]`, `[n: (STRAB.)]` …).

## 1. Read these first, in this order

1. `translation-style.md` — the frozen register rulebook. Follow it exactly.
2. `translation-runbook.md`, the section **“Agent prompt template”** — in particular the
   numbered **“Known false positives — do NOT report these”** list. Each has been investigated
   and settled; re-raising one costs a session. Read it before you mark anything.
3. **Style anchors, both:** `src/latin/9741/0000.md` + `src/english/9741/0000.md` (the frozen
   format/register anchor) and `src/latin/8957/0000.md` + `src/english/8957/0000.md`
   (*Liber Job*, the sibling Glossa book shipped 2026-09-07 — the genre anchor: how a lemma,
   a siglum and a gloss look in our English).
4. **Your own lemma brief**, named in your launch message. Its head carries two statements
   specific to this book — the italic-lemma/one-guillemet rule and the recovered Hebrew — that
   exist so nine stints do not each rediscover them. Do not act against them.
5. `src/english/8949/cruces-*.md` from any peer that has already finished, if present.

## 2. Output — four files, all of them yours alone

- **English chunks:** `src/english/8949/NNNN.md`, same filenames as the Latin. Copy each Latin
  chunk's frontmatter **verbatim**; invent no fields.
- **Cruces:** `src/english/8949/cruces-<yourFirstChunk>.md` — never `cruces.md`, which peers
  would race. Column + reading + your note, per crux.
- **Plate reads:** `data/briefs/8949-PLATE-READS-<yourFirstChunk>.json` — never
  `data/plate-reads.json` itself. Same shape as `data/briefs/8957-PLATE-READS-0000.json`.
- **Pending TEI patches:** `data/briefs/8949-PENDING-TEI-PATCHES-<yourFirstChunk>.md`, in the
  format of `data/briefs/8957-PENDING-TEI-PATCHES-0000.md`. **The English renders the plate;
  this file is how the Latin catches up.** Do not edit `sources/pl/tei/8949.xml` or
  `data/tei-patches/8949.json` yourself — the orchestrator merges.

The orchestrator merges all four. **A stint that writes English and no apparatus passes
`verify-english` in silence** — that has happened, and it is why the four files are named here.

## 3. Sacred markers (violating any = the work fails verification)

- Column anchors `[0219A]`: reproduce **verbatim, in order, in place**. Count them against your
  chunk's frontmatter before you write each file.
- Notes `[n: …]`: verbatim, contents untranslated (they are Migne's citations), same count, same
  order. **Pattern 15 exception:** a note whose content is editorial PROSE, not a citation, is
  translated and re-marked `[nt: …]` at the same position. Judge by content, not length.
- `## ` heads: translate the head text, keep the `## ` structure 1:1. Never translate a
  `(cont.)` marker — chunk boundaries are ours and the builder merges them.
- Italics `*…*` and `- ` list lines: preserve structure.
- Defect markers, English-only, patterns 11–13: `[d: …]` a repetition the plate prints twice;
  `[sic: …]` carried type that is the plate's own defect; `[ed: …]` our own voice, sparingly,
  only where the DIGITIZATION lost text the plate carries; `[var:]` a Vulgate divergence.
  Read those patterns before using any of them.

## 4. Negation fidelity — `translation-style.md` 7a, read it before you start

Every `non`, `nec`, `neque`, `nisi`, `haud`, `nunquam`, `nullus`, `nihil` the Latin prints
appears in your English, and none appears that the Latin does not print — **including when
carrying it makes the sentence contradict itself.** That contradiction is usually a defect in
Migne's plate and is exactly what this edition exists to show. **Never translate a word as its
opposite, or as anything other than what it means, to rescue a sentence that will not construe.**
If it will not construe, render it as closely as the printed words allow and log the crux. A
repair hidden inside the translation leaves no trace and passes every automated check.

## 5. 7a″ — the lemma collation, and it is a DELIVERABLE

Your brief lists **every marked span in your range**, phrase-searched against the Clementine and
marked ✓ (found, with the address — **read the address**, a ✓ against the wrong verse is a
finding), ⚑ (found only elsewhere), ⚠ (not found verbatim), or single-word.

**The ⚠ and ⚑ entries are the words you are being asked to check by name.** Measured on 8930
inside one work: the range whose prompt named the words returned 11 `[var:]` and a later blind
read found zero defects in it; the range given a generic “read every lemma carefully” returned 1
and the blind read found seven. **Treat the list of Vulgate divergences as the most valuable
thing you produce.**

⛔ **Count your own Latin's marked spans against the total your brief declares, and say so in
your report.** Two of 9001's five stints did that count and one of them found 17 spans missing
from its file; nothing downstream can see this class — the master inventory is complete and
`verify-english` is silent. It is the only handle there is.

## 6. The corpus is its own control — first move, not last resort

Before appealing to anything outside the work, **grep the other 43 chunks.** Every hard call on
11632 was settled that way (*gratia* 21 sites, *noster omnium* 19). A word that looks wrong once
usually appears sound three chunks later, and a house usage is established by its own repetitions,
not by classical expectation.

## 7. ⭐ Read your own plates as you go (runbook step 4a″) — this is not optional

You are the cheapest reader there is, because you already have the words in view. A later pass
must reconstruct that, and a reader who was not the translator does not know which of a page's
four hundred words the apparatus turns on. Measured on 8950: doing it inline costs **57% less**
than sending the same range back for a second pass.

- **Scan:** Gallica `ark:/12148/bpt6k5505319w`, IIIF. Whole page:
  `https://gallica.bnf.fr/iiif/ark:/12148/bpt6k5505319w/f<N>/full/full/0/native.jpg`
  (native is ~1870–1915 px wide and **varies page to page**).
- **Page map: leaf `f = ceil(column / 2)`** — f92 = cols 183/184. **Read the printed corner
  numbers FIRST, on every page, before any text.** The map has held on all six leaves read so
  far in this book, but it drifts by quire in this tome (measured on 8957) and a read from an
  unconfirmed page is worse than no read.
- ⛔ **IIIF region coordinates are in the FULL image's own pixel space, not in the space of
  whatever size you request.** A region aimed by eye off a scaled render lands somewhere else —
  that cost several fetches during prep. Fetch `/full/full/` once and **crop locally** (PIL is
  available; `Image.LANCZOS` upscaling at 5–9× reads Migne's small type and his Hebrew).
- ⛔ **Never let a crop cross the centre gutter** — a word cut across it is two half-words.
- **Second witness:** the archive copy is on disk at
  `raw/scans/pl113/patrologiaecurs04migngoog.pdf`, **PDF page = (column + 11) / 2**, render with
  `pdftoppm -f <p> -l <p> -r 400 -png`. Consult it before firing a `[sic:]` that turns on a
  single letter. ⚠ It is 1-bit JBIG2 — a **symbol-substitution** codec, so its errors are
  well-formed words that construe (`data/briefs/PL113-WITNESS-ENCODING.md`). It may never be a
  sole witness for a letter, and it has been seen to *repair* one of Migne's own defects
  (8957 @0825A) as well as manufacture them. Gallica wins for non-Latin type.
- **Record every page you open, found or not found** — a checked zero is a result.

**Columns already read in this book (prep, 2026-09-08), so a marker on them may fire:**
0183A–0184D, 0191A–0192D, 0193A–0194D, 0219A–0220D, 0265A–0266D, 0295A–0296D. Every other column
in your range is unread, and `plate-gate.mjs` will refuse a `[sic:]` or `[var:]` standing on one —
so read it, or withdraw the marker. Do not widen a recorded range to cover a column you did not
reach.

## 8. Scripture, and what not to report

Translate what Migne prints; **never substitute a conventional version.** Garbled type: render
literally and log the crux. Migne's own `( sic )` stands as he prints it — do not stack ours on
top. Column-band arithmetic proves nothing (the A–D marks are positional, not four per column):
the only real signal is **text broken mid-word or mid-construction across an anchor**.

**Em-dashes: keep them rare.** Migne prints none in the entire Latin corpus. Prefer a comma, a
colon, or a full stop. This is a tendency to resist, **not** a defect class — never mark one,
never report one, never restructure a faithful sentence to avoid one.

## 9. Do not stop early

Your batch is your whole range. Peer agents complete 5-chunk batches at full fidelity routinely.
If you find yourself writing “context budget” at chunk 2, you are repeating a documented failure
pattern — push through your full batch.

## 10. Report back

Name **every chunk you translated**, every page you opened at the plate **and its corner
numbers**, your span count against the brief's declared total, your `[var:]` / `[sic:]` /
`[ed:]` / `[d:]` markers with columns, and the candidates you **rejected and why**. A report that
lists only findings cannot be told apart from a report by a stint that never looked.

---

## 11. ⭐ Learned inside this run — read before you fetch a plate

Appended as stints report. These are facts about THIS tome and THIS scan, paid for once.

- **Gallica returns 429 on concurrent fetches.** Serialize your requests and back off
  (`curl --retry --retry-delay`). Three stints are reading the same ark at the same time.
- **The archive copy's OCR TEXT LAYER covers this volume and is greppable.**
  `raw/scans/pl113/patrologiaecurs04migngoog_djvu.txt` — corroborating a Gallica reading against
  it is nearly free, and much cheaper than rendering the PDF page. ⚠ It is still the jbig2 copy:
  useful as a second witness for a WORD, never decisive for a LETTER.
- **The archive copy manufactures punctuation too, not just letters.** At 0184B it prints
  parentheses where the plate sets square brackets. Do not fire on a bracket class from it alone.
- **The `f = ceil(column / 2)` map held with no quire drift across f92–f97.** That is not
  permission to skip the corner numbers — 8957 found drift in its last quire — but it means a
  mismatch is a signal, not the expected case.
- **Pattern 9 is doing real work in this book.** Two `[sic:]` candidates were correctly declined
  at 0184B (`divictis`) and 0185A (`concientiam`): both are Migne's, both plate-confirmed, and
  both are standard medieval orthographic alternations (`di-`/`de-`, `sc`→`c`) that Pattern 9
  exempts. At 0184B **Migne had already flagged the place himself** with a bracketed
  `[devicto eo]` — never stack ours on top of his own mark.

### From stint 0005–0009 — ⭐ FOUR APPARENT DEFECTS OF MIGNE'S WERE OURS

That stint fired **zero** `[sic:]` and that is its finding, not a gap. Four readings looked like
Migne's broken type from our twin alone — `guam` for *quam*, a stray point in `apud. Deum`,
`reunquenqus` for *relinquendus*, `vasa.` for *vasa,* — and **all four were Corpus Corporum's
digitization**, not the plate. They are filed as pending TEI patches; the English renders the
plate. **Assume nothing from the twin. `[sic:]` is a public accusation against Migne and this
book has so far produced none.**

- ⛔ **A page proved under-inked at ONE site is suspect at EVERY site on it.** At 0198D Gallica
  shows a single point where our twin has a colon — the 8957 @0758A shape exactly — and the
  archive prints a clear colon. That same Gallica page is the one `relinquendus` proved
  under-inked. **The patch was refused on purpose.** When you catch a page under-inking, go back
  and re-weigh every call you made on it.
- ⚑ **Small caps decide whose a defect is.** `Vers. 9.` at 0202D is OURS (Migne sets small caps
  everywhere) and is patched; `VERS 20.` at 0201C, missing its period, is HIS and must never be
  patched. A Pattern 9 normalization would have produced the right English for the wrong reason
  and left the Latin permanently wrong.
- ⚑ **Migne often discloses a divergence himself** — *Alia littera* (0197A), an `LXX.` label
  (0201B), his own abridging *etc.* **Take no marker where he has already marked it.**
