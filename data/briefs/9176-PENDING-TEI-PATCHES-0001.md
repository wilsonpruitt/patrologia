# 9176 *Commentarius in Evangelium secundum Joannem* — pending TEI patches (stint 0001–0003, bands 0300D–0309D)

Sites where this translator opened the column at the plate and Migne's type differs from our
Corpus Corporum twin. Per the locked rule (`translation-style.md`, "What the English translates"),
**the English already renders the plate**; this file records the divergence so the Latin converges
on it when the patch pass lands. Do not edit `sources/pl/tei/9176.xml` or
`data/tei-patches/9176.json` from here; the orchestrator merges.

Opened by: stint 0001–0003, 2026-09-16. Working plate: archive.org `patrologiaecurs113unkngoog`
page images n186–n191, printed corner numbers read FIRST on every leaf (n186=299/300,
n187=301/302, n188=303/[304 clipped on archive, read 304 on Princeton], n189=305/306,
n190=307/[308 clipped, read 308 on Princeton], n191=309/310). Map `leaf = (odd column + 73) / 2`
held on all six. Second witness: Google Books Princeton `YkVOAAAAYAAJ` (`pg=PA<odd col>`, 575 px),
fetched for PA301, PA303, PA305, PA307, PA309.

⚑ **Find strings.** The TEI keeps Migne's line breaks, so each `find` below is given with its
`\n` exactly as it sits in `sources/pl/tei/9176.xml`; each was checked to match exactly once.

⭐ **Read this before patching — the pattern suggests a second PRINTING, not a transcription slip.**
Corpus Corporum's TEI mirrors this plate line for line, and yet at 0306D it carries a whole plate
line (`est, non incongrue corrigiam calceamenti ejus`) that **both** independent copies read here
(Harvard/archive and Princeton) do not print. The other four sites are all places where the TEI has
the *better* reading (`sinum`, `remote`, the Greek normalized). The simplest account is that CC's
copy-text was a later, corrected printing of PL 122 with the same lineation. Same shape as the
PL 114 "two printings" finding in `CLAUDE.md`. So these patches bring our Latin to the printing we
read, and a human should decide whether that is the printing we want the Latin to follow.

---

## 0302B — our twin reads `intellectum`, the plate reads `intellectuum`

- **Find (TEI l. 368–369):** `animarum et\nintellectum theophaniae sunt`
- **Replace:** `animarum et\nintellectuum theophaniae sunt`
- **Plate:** n187, printed corners 301 / 302, RIGHT column, band B (the line after
  *est. Item virtute purgatissimarum animarum et*). 0.7× crop of the single line: `intellectuum`,
  two clean `u` before `m`.
- **Second witness:** Princeton PA301, right column, same line: `intellectuum`. Word-level
  agreement in two independent copies.
- **English:** "by the virtue of the most purified souls and intellects" (genitive plural).
  Our TEI's `intellectum` would not construe with *virtute … animarum*.

## 0302C — our twin reads `in sinum Patris`, the plate reads `in sinu   Patris` (a blank the width of one letter)

- **Find (TEI l. 383):** `in sinum Patris, vel in sinibus Patris.`
- **Replace:** `in sinu Patris, vel in sinibus Patris.`
- **Plate:** n187, corners 301 / 302, RIGHT column, first line of band C. At 2× the line reads
  `C in sinu   Patris, vel in sinibus Patris.` with a gap after `sinu` exactly one letter wide;
  no ink in it.
- **Second witness:** Princeton PA301 prints the same gap: `in sinu   Patris`. So it is the type
  (a sort that did not print, or a space set for it), not the photograph.
- ⚠ **Letter-level.** Under `PL122-WITNESSES.md` no `[sic:]` may rest on a single letter in this
  tome, so none is fired; crux logged (`cruces-0001.md`, 0302C). The accusative *sinum* is
  Eriugena's whole point (he is giving the Greek εἰς τὸν κόλπον against the lemma's *in sinu*),
  so the plate as printed makes his "as is written in the Greek" repeat the lemma. English renders
  the plate. If the orchestrator prefers to leave the TEI as is on the ground that the blank is a
  failed sort, say so in the merged cruces, since the English would then need its crux reworded.

## 0305B — our twin reads `Φόσφορος`, the plate reads `φωσφόρος`

- **Find (TEI l. 554):** `<foreign xml:lang="greek">Φόσφορος</foreign>`
- **Replace:** `<foreign xml:lang="greek">φωσφόρος</foreign>`
- **Plate:** n189, corners 305 / 306, LEFT column, band B, line opening *sit.* 1.2× crop:
  lower-case initial φ, ω in the second syllable, accent on the penult.
- **Second witness:** Princeton PA305, same line: lower-case `φωσφόρος`, ω visible.
- ⚠ Letter-level Greek on a bitonal scan; the case of the initial and the ω/ο are visible on both
  copies, the accent less certainly. English carries `φωσφόρος`.

## 0306D — the plate OMITS a whole line our twin carries

- **Find (TEI l. 646–648):** `Si itaque calceamentum Verbi caro Verbi\nest, non incongrue corrigiam calceamenti ejus\nsubtilitatem,`
- **Replace:** `Si itaque calceamentum Verbi caro Verbi\nsubtilitatem,`
- **Plate:** n189, corners 305 / 306, RIGHT column, band D, the last lines above the foot:
  `festavit. Si itaque calceamentum Verbi caro Verbi` / `subtilitatem, et investigabilem
  perplexionem my-` / `steriorum incarnationis intellige. Cujus mysterii` / `altitudinem solvere
  indignum se praecursor judicat.` Checked at 0.32× and 0.7×.
- **Second witness:** Princeton PA305, right column foot: identical, the line is absent.
- **This is a word-level divergence of seven words, fully licensed by the witness brief.** The
  printed sentence does not construe (no verb for *Si*, no object-phrase for *subtilitatem*).
  English renders the plate literally; crux logged. ⚑ **Flag for a human** (see the ⭐ note
  above): the TEI line is the natural text, and it may come from another printing.

## 0309C — our twin reads `remote`, the plate reads `remota`

- **Find (TEI l. 812):** `contagione remote,`
- **Replace:** `contagione remota,`
- **Plate:** n191, corners 309 / 310, LEFT column, band C. 0.7× crop: `contagione remota,` with a
  closed `a`.
- **Second witness:** Princeton PA309, same line: `remota`.
- ⚠ Single letter (e/a). Both copies agree. English: "with all contagion of carnal conversation
  removed" (ablative absolute with *contagione*); the TEI's adverb would have made it "remotely".

---

**Collated and NOT filed (punctuation only, below the brief's word threshold):** 0300D the plate
prints `hoc est in toto homine` with no comma after *est* (TEI `hoc est, in toto`; English keeps
E1's "that is,"); 0300C `quod ait ;` where the TEI has `:` (spacing of the French-style mark is
not resolvable on the bitonal scan). Greek accents at 0305B–C (`ἄστρον πρωϊνὸν`, `μελὶ`, the second
`ἀκριδομελιτροφὸς`) were looked at and are not decidable letter by letter on either copy; the TEI
is kept.
