# Launch brief — 9002, *Glossa ordinaria*, **Evangelium secundum Matthaeum**

PL 114, cols 0063A–0178D · 45,922 words · 42 chunks · **eight stints**.

> Committed deliberately, like 8999's and 9000's. A cruces file that cites "the launch
> instruction" is unreadable a month later if the instruction was thrown away.

**Matthew is the last gospel.** Mark (9001), John (8999) and Luke (9000) are shipped and live;
their settled conventions bind you and are restated in `GLOSSA-NT-AGENT-BRIEF.md`, which you
read in full before this file. This brief carries only what is NEW or SHARPENED for Matthew.

---

## What this work is

The nineteenth-century **abridged recension** of the marginal gloss on Matthew: a `VERS. n.--`
address, the Vulgate words being glossed in italics, then the comment, with attribution sigla
(`BEDA.`, `HIER.`, `AUG.`, `RAB.`, `GREG.`, `CHRYSOST.`, `LEO.`, `CASS.`, `ID.`) arriving as
ordinary `[n:]` notes. **Migne's attributions in this recension are unreliable, and passing a
siglum through is not endorsing it.** Do not correct, expand or query one.

⚑ Matthew is printed **inside the Glossa proper** — the verso running head reads `GLOSSA
ORDINARIA. — EVANG. MATTH.`, confirmed at the plate this session on pp. 70, 78, 86, 94 (the
recto head is `WALAFRIDI STRABI FULD. MON. OPP. PARS I. — THEOLOGICA.`). **There is no
attribution question to reopen here.** The work opens with a `PROLOGUS.` (chunk 0000) and runs
`CAPUT II.` through `CAPUT XXVIII.`; there is no `ARGUMENTUM`.

⚑ The work carries a little **Greek** (e.g. `Τέλος` at 0116A, glossing *In telonio*). Reproduce
it verbatim; do not transliterate.

## Read before you start

1. **`GLOSSA-NT-AGENT-BRIEF.md`** — the whole file. It is the standing brief for this series and
   it binds you. The vocabulary axes in it apply **from your first chunk**, including the
   `gentilis` → Gentile / `gentilitas` → the Gentile world addition made after Luke. Matthew is
   the *Judaei*/*gentes* gospel; that axis will earn its keep here more than anywhere.
2. **`translation-style.md`** — the frozen register rulebook. Read **7a** (negation fidelity) and
   **7a″** (the scripture-quoting clause) before writing a line.
3. **`src/latin/9741/0000.md` + `src/english/9741/0000.md`** — the style-anchor pair.
4. **`src/english/9000/cruces.md`** (Luke) and **`src/english/9001/cruces.md`** (Mark) — the two
   nearest books. Read for evidence, never to copy a rendering: *each book is its own plate.*
5. **Your own lemma brief**, `data/briefs/9002-lemmata-NNNN.txt`, named in your launch message.

---

## §1. ⭐⭐ THE THING THAT IS NEW IN MATTHEW: **YOU READ YOUR OWN PLATES, AND THERE ARE TWO OF THEM**

Every previous book in this volume was translated first and plate-read afterwards. That is
**withdrawn** for Matthew, on a measurement made inside one work (8950, 2026-09-05): the stint
that read its own range as it went delivered five `[var:]` that passed the gate immediately; the
stint told to leave plates alone collated 26 real divergences, could fire **none** of them, and
had to be sent back for a second pass that cost 57% more than doing it inline. **You already have
the words in view. Nobody downstream will.**

### Your two witnesses — BOTH calibrated this session, on Matthew's own corner numbers

    ARCHIVE (on disk)   raw/scans/pl114/patrologiaecurs06saingoog.pdf
                        PDF page = (column + 11) / 2
                        confirmed p.37 = cols 63/64 · p.94 = cols 177/178
                        render:  pdftoppm -f N -l N -r 300 -png <pdf> out

    GALLICA (IIIF)      ark:/12148/bpt6k54939667
                        f = (column + 1) / 2          ⛔ NOT the archive map — six leaves apart
                        confirmed f37 = cols 73/74 · f89 = cols 177/178
                        whole page:  https://gallica.bnf.fr/iiif/ark:/12148/bpt6k54939667/f<N>/full/1400,/0/native.jpg
                        crop:        https://gallica.bnf.fr/iiif/ark:/12148/bpt6k54939667/f<N>/<x,y,w,h>/full/0/native.jpg
                        dims:        .../f<N>/info.json        (f37 is 1961 × 3126)
                        ⚠ a User-Agent header is required; `f<N>.highres` returns 403.

**Read the printed corner numbers FIRST, on every page, before you read anything else on it.**
A read recorded from the wrong plate is worse than no read at all, because it is
indistinguishable from a real one.

### ⛔⛔ THE RULE, AND IT IS THE CORRECTED ONE: NO CLAIM ABOUT MIGNE'S TYPE STANDS ON ONE WITNESS

Not a changed letter. Not a changed digit. Not a word you believe is missing. **In either
direction.**

This is not caution, it is a measurement. On 8950 four independent stints converged on a class —
"the digitization normalizes Migne's verse addresses" — with the direction never varying across
46 addresses. It looked exactly like a printer's habit. **All five sites were refuted at Gallica,
digit for digit**; over-inking on one press run had blotted 6→5, 15→16, 20→19. A second stint's
range gave 13 of 15 refuted and **four of its thirteen had already been written up as findings**.
⚑ **Convergence across readers is not independence when the witness is shared.** The archive copy
of this volume also clips both margins on some leaves — measured on Mark's range, badly enough to
eat 2–4 characters off a column's line ends.

**A `[sic:]` needs two witnesses. A dropped word needs one.** Fetch the Gallica leaf; it is one
HTTP request and no download.

### ⚑ And when the plate is right and OUR file is wrong, what you owe is a TEI PATCH, not a `[sic:]`

A `[sic:]` accuses Migne's type, and it must quote a word that is still in our Latin — so where
Corpus Corporum has tidied Migne's defect away, the marker cannot even be written. File the patch
first; the `[sic:]` becomes fireable only after it lands. **Zero `[sic:]` in a large range is not
timidity.** Two 8950 stints reported the same result: every defect they found was the
digitization's.

⚑ The digitization moves in **both** directions and the tidying direction leaves nothing to
notice: `uspue`→`usque`, `es`→`est`, `num`→`non`, `convivum`→`convivium`, `concilio`→`consilio`
are all real, and none is detectable from the Latin alone. **Where a form strikes you as
suspiciously tidy in a passage that is otherwise rough, say so and look at the line.** And read
the WHOLE line, not the target word — two of the four known normalizations were found while
reading the plate for a different word four words away.

### Your plate output file — stint-scoped, never the shared one

    data/briefs/9002-PLATE-READS-<yourFirstChunk>.json

⛔ **Never write `data/plate-reads.json` directly** — your peers are running concurrently and
would race you. The orchestrator merges. A **read** is: the page on screen, corner numbers
checked first, whether or not you found anything. Record the negatives; a checked zero is a
result and the ratchet counts it.

Your page range is in your launch message, in both maps.

---

## §2. THE MARKER PRIOR — use it, and do not trust your own class guess

Measured across the series: **`[var:]` on a quoted clause stands 120 times in 121 across four
Glossa books. Of 27 `[sic:]` on 9004, 8 fell at the plate — every fall a single word, and not one
a quoted clause.**

⛔ **And your guess about WHOSE defect it is carries no weight.** On 9004 the stints were asked to
name the class; read at the plate their "probably our-file" calls were **right 5 times and wrong
9** — confidence and truth close to uncorrelated. Every wrong call rested on internal
corroboration that reads as decisive at the time (*"the correct form prints eleven words later"*,
*"a non-word, and the sentence is an etymology of that very word"*). **Frequency and internal
corroboration prove an error EXISTS, never whose it is.**

The one split that IS a reliable prior: **a non-word** (no Latin word at all, a word broken across
a space, a doubled syllable) is worth raising as a plate candidate and has been right every time;
**a real, well-formed word that reads oddly is Migne's until a plate says otherwise** — render it
as printed, log the crux, fire nothing on a corpus argument however good.

⚑ **A single-word `[var:]` stands only where the divergence has a witness of its own** — either
the gloss argues from the word, or the form is one that letter-level corruption cannot manufacture.
Our Latin is CC's transcription, so a one-word divergence has two possible owners and the marker
names one.
⚑ **A marker that quotes only the witness cannot be audited.** State what Migne prints AND what the
Vulgate has; a crux that names the Vulgate reading and never says what diverged nearly cost 9000 a
marker that was in fact correct.

**When you are unsure and cannot settle it, the crux is always available and always safe.**

---

## §3. 7a″ — THE LEMMA DIVERGENCE LIST IS YOUR MOST VALUABLE DELIVERABLE

Your lemma brief lists **every italic span in your chunks**, in order, with its column band,
phrase-searched against `sources/vulgate/clementine-flat.txt`.

⛔ **COUNT THE SPANS IN YOUR OWN LATIN AGAINST YOUR FILE'S HEADER TOTAL AND SAY THE NUMBER IN YOUR
REPORT.** The cut has been wrong before (9001), the master inventory was complete, and
`verify-english` was silent — **the count was the only handle**, and two stints doing it is the
only reason it was found. A span's absence from your file is never clearance for it.

### ⛔⛔ THE ✓ IS WEAKER IN A GOSPEL THAN ANYWHERE ELSE, AND MATTHEW IS THE WORST CASE

A ✓ means the words occur in the Clementine somewhere. **In a gospel the harmony's own parallels
answer for the wrong verse.** Measured on Luke: *Quid cogitatis mala* cleared off **Mt** 9:4 inside
a commentary on Lc 5:22; *Gaudete et exsultate* cleared off **Mt** 5:12. Matthew is the source of
most of those parallels, so the failure runs the other way here and just as often.

⚑ Two tool fixes landed since Luke and you inherit both: the scan is now **per verse**, so a span
can no longer score ✓ by matching across a verse boundary; and the ownership test now reads
Migne's abbreviated caput heads. **The mark still tells you nothing about which verse matched
unless you look** — it prints the references, so read them. If the mark says `✓ Lc 19:38` under
`CAPUT II`, it has just told you the lemma matches a *different verse*.

### ⚑ EIGHT LIVE CANDIDATES — the `⚑ MATCHES ONLY ELSEWHERE` flags, by stint

These carry a `VERS.` address, so they are verse lemmata proper and should stand in Matthew's own
chapter. They do not. Each is either a real divergence (mark `[var:]`), a harmony parallel Migne
has reached for, or our own file's corruption. **Adjudicate the one in your range explicitly, in
your cruces, and say which of the three it is and why the other two lost.**

    0080B  VERS. 8.-- Facite ergo fructus dignos.      only Lc 3:8      (lemma is Mt 3)
    0093A  VERS. 20.-- Dico autem vobis.               only Lc 9:27 …   (lemma is Mt 5)
    0095B  VERS. 31.-- Det illi.                       only 2Tim 1:18   (lemma is Mt 5)
    0106B  VERS. 28.-- Et de vestimentis.              only Tob 4:17    (lemma is Mt 6)
    0157D  VERS. 1.-- Tunc locutus est.                only Jos 10:12   (lemma is Mt 23)
    0161D  VERS. 24.-- Si fieri posset.                only Gal 4:15 …  (lemma is Mt 24)
    0165B  VERS. 19.-- Posuit autem.                   only 1Par 11:25 …(lemma is Mt 25)
    0169D  VERS. 33.-- Etsi omnes.                     only 1Mcc 2:19   (lemma is Mt 26)

For every span, and not only these: render **what Migne prints**, never what the Vulgate, the
Douay or the AV prints. Where his lemma diverges, that divergence is data. Then hold your
rendering fixed and check **every re-quotation of it in the gloss below** — the gloss re-quotes
its lemma constantly, often as a fragment. **Put the whole list in your cruces, including the
lemmata you checked and found to agree exactly.** A list of findings alone cannot be told apart
from a report by an agent that never looked.

---

## §4. ONE LEAD, HANDED OVER UNADJUDICATED

**@0099B (archive p.55, Gallica f50)** — the plate appears to print *coram **homnibus*** in the
citation of Mt 6:1 inside the gloss on VERS. 5 (`supra dixerat : Attendite ne justitiam vestram
faciatis coram homnibus`). Read at 150 dpi on the **archive copy only** while the page was open
for the note apparatus, so by §1's own rule it is **a lead and not a finding**. It is a non-word,
which is the class that has been right every time — but whether it is Migne's broken sort or our
file's corruption is exactly what one witness cannot say. **Whoever holds chunk 0012–0015: check
our Latin first, then both plates, and settle it.**

---

## §5. DELIVERABLES

1. **`src/english/9002/NNNN.md`** for every chunk in your range — same filenames as the Latin,
   frontmatter copied VERBATIM.
2. **`src/english/9002/cruces-NNNN.md`**, NNNN = your first chunk, containing in this order:
   **(a)** the policy you applied, stated **before** your findings so it can be argued with;
   **(b)** your span count against the brief's total; **(c)** the lemma divergence list, every
   span, declines and reasons included; **(d)** this range's own cruces, by column; **(e)** your
   **declined-oddity list** — every suspect word you did NOT mark, with its column, in one place.
   On John and Luke that list produced nearly every correction those works got.
3. **`data/briefs/9002-PLATE-READS-<firstChunk>.json`** — every page you opened, its columns, the
   witness(es) used, and what you found or did not find.
4. **`data/briefs/9002-PENDING-TEI-PATCHES-<firstChunk>.md`** — where the plate shows our Latin
   diverging from Migne. One entry per site: column, our reading, plate reading, which witness(es)
   confirmed it, and whether a marker becomes fireable once it lands.

**Do not stop early.** Your batch is four to six chunks; peer agents complete batches this size at
full fidelity routinely. If you find yourself writing "context budget" at chunk 2, you are
repeating a documented failure pattern — push through your full batch. **If a tool call fails,
that is transport, not a limit you hit: retry, and do not shorten your work because of it.**

---

## §6. ⭐⭐⭐ ADDENDUM, 2026-09-05 — MEASURED BY THE 0000–0005 STINT ON ITS OWN RANGE

**The two copies of PL 114 are two PRINTINGS, not two photographs.** Their line breaks diverge
from the first page of this work (archive p.37 / Gallica f32). That is a stronger statement than
"we have a second scan", and it changes what the second witness is *for*: it is not a better
photograph of the same ink, it is an independent setting.

⛔⛔ **AND IN THIS WORK THE ARCHIVE COPY IS THE WORSE WITNESS. THE NUMBER IS 12 TO 1.** Over eight
pages the archive copy manufactured **twelve letter-level readings that Gallica refutes** —
`memorian` · `sa cramentum` · `Aminabad` · `Eclesiam` · `ei` for `et` · `ressuscitans` ·
`Solomonen` · `lector` · `dicat ur` · `Henoch` · and two more — against **one** it confirms.

⚑ **Read on the archive alone, that stint's file would have carried a dozen confident claims
about Migne's type, and twelve of them would have been false.** This is the 8950 episode
reproduced prospectively, on a different volume, by a stint that had been warned. **Do not skip
the Gallica fetch because the archive page looks clean.** A clean-looking over-inked letter is
precisely the thing that has fooled every reader who has met it.

⭐ **The corollary, also from that stint: a disagreement between the copies is not automatically
the archive's fault.** @0073A Gallica prints the lemma `Bethehem` and the archive prints
`Bethlehem`, **both clean, our twin following Gallica**. That is 8950's `Mititte`/`Mittite` —
a press variant, **no `[sic:]`, no patch, crux only.** Two printings can simply differ, and when
both are clean neither is a defect to accuse anyone of.

⚑ Also established on that range, for your prior: **6 `[var:]`, zero `[sic:]`, zero `[cj:]`** in
5,831 words, and **three TEI patches, all Corpus Corporum's, none Migne's** (@0068D a lost full
stop · @0071D `oerum` · @0076C `pesecutio`). Zero `[sic:]` is what this class looks like when it
is measured rather than guessed at.

---

## §7. THE FIVE REMAINING ⚑ FLAGS — THE INSTRUMENT'S SIDE PRE-CHECKED, THE PLATE CALL STILL YOURS

The three flags in cols 0079A–0096B were adjudicated by the 0006–0011 stint and **all three are
real divergences**, confirmed on both plates: @0080B *fructus dignos* (Mt 3:8 has singular
*fructum dignum*, and Migne's own prose uses the plural twice more within two columns), @0093A
*Dico autem vobis* (Mt 5:20 has *Dico **enim** vobis*), @0095B *Det illi* (Mt 5:31 has *det
**ei***). ⚑ In two of the three the "harmony parallel" explanation **failed on inspection** — Lc
9:27/12:4/12:8 are not parallels of Mt 5:20 at all, merely other places three common words
co-occur, and 2 Tim 1:18 is a two-word coincidence about Onesiphorus. **A reference list is not a
parallel; read the verses.**

For the remaining five the Clementine side has been checked in advance so that nobody spends a
stint re-deriving it. **This settles what the flag's CAUSE is. It does not settle the plate, and
the reading and the marker call are still yours.**

    @0106B  Et de vestimentis     Mt 6:28  Et de vestiMENTO quid solliciti estis
                                  → a real candidate: singular in the Vulgate, plural in Migne.
    @0161D  Si fieri posset       Mt 24:24 ita ut ... (si fieri POTEST) etiam electi
                                  → a real candidate: tense. Note Migne's words are the verse's
                                    own parenthesis, so check the surrounding clause too.
    @0165B  Posuit autem          Mt 25:19 venit dominus ... ET POSUIT rationem cum eis
                                  → a candidate, but a SINGLE WORD (autem/et). Launch brief §2's
                                    bar applies: it stands only if the gloss argues from it, or
                                    the form is one letter-level corruption cannot manufacture.

⛔⛔ **AND TWO OF THE FIVE ARE ARTIFACTS OF THE INSTRUMENT, NOT DIVERGENCES AT ALL. Do not fire a
`[var:]` on either.**

    @0157D  Tunc locutus est      Mt 23:1  Tunc JESUS locutus est ad turbas
                                  → Migne's lemma is CLIPPED, and the phrase search fails only
                                    because a word stands between his two halves. This is
                                    convention 3's ordinary fragment. NOT a divergence.
    @0169D  Etsi omnes            Mt 26:33 ET SI omnes scandalizati fuerint in te
                                  → a WORD DIVISION, nothing more. The search fails on the space.
                                    NOT a divergence, and not a `[sic:]` either.

⚑ **This is the third time the `⚑` has fired on something other than a divergence**, and the class
is now general enough to state: **the ownership test is a phrase search, so it fails on an elided
word, on a word division, and on a defect in our own Clementine copy** (`sources/vulgate/README.md`
records three of those, one of which manufactured a ⚑ on 8950 — and a fourth was added
2026-09-05 from this work, `Mt 5:15` *accedunt* for *accendunt*, found because Migne, our twin and
sense all agreed against the comparand). **Before you call a ⚑ a divergence, say which of the four
causes you have excluded.**

---

## §8. TWO CORRECTIONS TO RULES THIS BRIEF ITSELF GAVE YOU (0012–0015 stint, 2026-09-05)

### ⛔ "A NON-WORD HAS BEEN RIGHT EVERY TIME" IS NO LONGER TRUE. In one range it was right ONCE IN THREE.

`GLOSSA-NT-AGENT-BRIEF.md`'s addendum A reports 10 for 10: every suspicion aimed at a non-word
confirmed as our corruption, every one aimed at a real word refuted. **Cols 0096C–0107B went 1 for
3.** `nomo` @0097A stood — a non-word on **both** copies, and Migne's. `homnibus` @0099B and
`fiilius` @0097D both **fell at Gallica**.

⚑ The 10-for-10 was measured on a batch that had **one witness**. What it actually established is
that a non-word is worth RAISING, which remains true and is why all three of these were raised.
What it cannot establish, and never could from one copy, is **whose** the non-word is. ⛔ So the
non-word heuristic keeps its old job (raise it) and loses the one it was drifting toward (settle
it). **It is not a substitute for the second witness. It is the reason to go and fetch it.**

### ⛔⛔ AND THE ASTERISK LAYER CAN BE MANUFACTURED BY INK — one HTTP request from inventing apparatus

At **@0103C** the archive copy shows a **raised asterisk** after *diebus abstinentiae* with an
empty page-foot. That is CLAUDE.md's asterisk layer exactly — Migne's second foot-of-page
apparatus — and the correct response to finding one is to recover it as `[cn: * | …]` with a
translated `[nt:]` twin. **Gallica prints a plain colon.** There is no note, and there never was.

⛔ **A speck of ink in the right place does not merely corrupt a word; it fabricates an APPARATUS
LAYER, in Migne's own editorial voice, keyed to a note that does not exist.** Nothing downstream
could have caught it: `[cn:]` recovery has no comparand, a fabricated note has no sequence number
to break, and the work's coverage would have flipped from a checked zero to a false `partial`.
**Never recover a `[cn:]` or an `[nt:]` from one witness.** The rule was written for `[sic:]`; it
applies with more force here, because a `[sic:]` at least quotes a word a reader can go and check.

⚑ Feet of all seven pages in that range were then inspected on **both** copies: checked zero, no
apparatus anywhere in cols 0096–0108. That is the right way to close it.
