# PL 122 — the witness question, settled 2026-09-07

Written because `next-session-resume.md` carried this as a blocking ruling: PL 122 had **one**
archive.org scan and **no Gallica copy**, so the one-request second-witness check that settled
PL 113 and PL 114 did not exist for the tome, and no Eriugena work could fire a `[sic:]`.

**Outcome: six genuine second witnesses exist, and they are usable — for words, not for letters.**

---

## ⛔ FIRST, THE TRAP: OUR ARCHIVE COPY *IS* ONE OF THE GOOGLE IDS

`data/volumes.json` t122 lists one archive item and eight Google Books IDs, which reads like
nine witnesses. It is not.

    archive  patrologiaecurs113unkngoog
             → metadata `source`: http://books.google.com/books?id=q2mQHvy4_usC
             → contributor Harvard University, scandate 2006-11-28, scanner google

**`q2mQHvy4_usC` and the archive item are the same photographs.** Collating one against the other
would produce perfect agreement and prove nothing — the exact false clearance that is worse than a
false finding, because it leaves nothing behind for anyone to notice.

⚑ **The general rule this is an instance of:** an archive.org item whose identifier ends `goog` is
a Google scan, and `https://archive.org/metadata/<id>` names the Google ID in its `source` field.
**Check that before counting a Google ID as an independent witness, in any tome.**

## The six that ARE independent

All full view (`preview: "full"`), all distinct holding libraries, all verified to be PL 122 by the
running head rather than by the catalogue:

| Google ID | holding library | digitized | PA125 head verified |
|---|---|---|---|
| `YkVOAAAAYAAJ` | Princeton | 2010-04-30 | ✅ clean, the best of the six |
| `AXTYAAAAMAAJ` | University of Michigan | 2009-07-02 | ✅ clean |
| `L77UAAAAMAAJ` | Pennsylvania State | 2009-04-24 | ✅ |
| `LN69JIR37F8C` | Lyon (Bibl. jésuite des Fontaines) | 2010-10-21 | ✅ |
| `QpILKAEcuo0C` | Episcopal Seminary, Barcelona | 2010-04-29 | ✅ |
| `NqdU9zPl5O4C` | Harvard (a *second* Harvard scan, 2006-05-08) | 2006-05-08 | ✅ |
| ~~`q2mQHvy4_usC`~~ | ~~Harvard~~ | ~~2006-11-28~~ | ⛔ **= our archive copy** |
| `o00wAAAAYAAJ` | University of Virginia | 2008-11-14 | ⚠ heavy black blotching at this opening — usable, but not first choice |

⚠ `NqdU9zPl5O4C` is Harvard like `q2mQHvy4_usC` but a different scan date. Whether it is a
different physical volume or the same one photographed twice is **not established** — treat it as
the weakest of the six until someone checks a damaged page against the archive copy.

## How to fetch a page (the public endpoint refuses an unsigned request)

A bare `books/content?id=…&pg=…&img=1&zoom=3` returns a **9,103-byte placeholder**, identical for
every id and every page. The real image needs a signature, obtained per page:

    # 1. get the signed src
    curl -s -c cookies.txt -A "<a real browser UA>" \
      "https://books.google.com/books?id=<ID>&pg=PA<COL>&jscmd=click3"
    #    → JSON: page[].pid / page[].src, the src carrying &sig=ACfU3U…

    # 2. fetch it, with the cookie jar and a Referer
    curl -s -b cookies.txt -A "<same UA>" -e "https://books.google.com/books?id=<ID>" \
      -o page.png "<the signed src>"

⛔ **`&w=1600` and above return a 1917×2500 PNG that says "image not available" in grey type.**
It is a placeholder at full size, and it will pass a file-size or dimension check. **Look at the
image.** The only real renders are `zoom=3` (575 × ~940, 8-bit grayscale, 45–60 KB) and the smaller
`zoom=0/2`. Tested on all seven ids: **575 px wide is Google's ceiling, uniformly.**

## ⭐ THE COLUMN MAP NEEDS NO ARITHMETIC — `pg=PA<n>` IS THE PAGE WHOSE LEFT COLUMN IS n

Calibrated at two points 900 columns apart, printed corners read on both:

    PA125   → corners 125 / 126, head EXPOS. J. SCOTI SUPER IERARCHIAM CAELESTEM S. DIONYSII
    PA1023  → corners 1023 / 1024, head JOANNIS SCOTI

Page ids step by 2 (PA123, PA125, PA127 …), i.e. one id per leaf, odd column. This is the
friendliest map in the corpus — no front-matter offset, no leaf-vs-page confusion. **Still read the
corners on the first page of any range**, per the standing rule; two points are two points.

## What this resolution can and cannot license

Read at native and enlarged, running text is **comfortably legible word by word** — a 5× crop of
col. 125 gives *eticae arti quamvis faveat, tamen nec historiam, nec … Haud tamen inficiamur,
Hegelii speculationem* without strain. Against Gallica's ~950 px per column, Google gives ~287 px.

- ✅ **Licensed:** a dropped or added **word**; a wrong word; a lemma that differs from the Vulgate
  (`[var:]` is almost always multi-word); presence or absence of a foot-note; sentence punctuation;
  whether a line exists at all.
- ⛔ **NOT licensed:** a single broken or substituted **letter** — which is exactly what a `[sic:]`
  asserts. At 287 px/column the difference between damaged type and clean type is not resolvable.

**So the PL 122 ruling should be: `[var:]` gets a second witness and `[sic:]` does not.** A single
letter on this tome rests on one copy, and under the PL 113 finding (a lossy symbol-substitution
codec smears toward *plausibility*) one copy is not enough to accuse Migne's type. Either withdraw
such a marker or log it as a crux.

⚑ HathiTrust would very likely hold the Michigan and Princeton volumes at higher resolution, and it
is **blocked from here**: `babel.hathitrust.org` and `catalog.hathitrust.org` both return 403 behind
Cloudflare. If letter-level PL 122 collation is ever wanted, that is the door to try, from a browser.

## ⭐⭐ AND THE PAGE ANSWERED A QUESTION NOBODY ASKED: PL 122 HAS A *VARIAE LECTIONES* APPARATUS

Col. 125/126 carries, under a rule at the foot:

    VARIAE LECTIONES.
    ¹ A dyonisii. sic ubique.   B* dionisii, sic ubique.   ² A B C ariovagitae.

keyed to sigla declared in the work's own title block on that page — `Cod. Vat. 652 = A`,
`Cod. Mon. ms. lat. 580 = B`, `Ejusdem codicis altera manus = B*`, `tertia = B**`,
`Cod. Brugensis n. 1 = C`.

⛔ **This is a THIRD foot-of-page layer, and it is not Migne's.** The corpus has so far met the
numbered `Forte` conjectures and the asterisk cross-references, both Migne's own. This is
**Floss's critical apparatus**: PL 122 is an edition, not a reprint, and it collates manuscripts.

**Consequences, before any PL 122 work is chunked:**
1. The plate spot check for PL 122 must expect apparatus and will not be a checked zero. The
   PL 113/114 experience ("essentially no foot apparatus") **does not transfer** — it was never a
   fact about Migne, only about those two tomes.
2. Corpus Corporum drops foot-of-page apparatus entirely (measured: zero across all 5,276 TEI
   files), so **the whole of Floss's apparatus is missing from our Latin** for every Eriugena work.
3. It needs an encoding ruling of its own. `[cn: n | …]` was defined for Migne's conjectures and a
   numbered `[cn:]` stays Latin-only; a manuscript variant is a different thing from an editor's
   guess and may want its own marker. **Do not reuse `[cn:]` by default — ask.**
4. The sigla block itself is part of each work's head (9181 already opens with the same kind of
   list, noted at chunking) and belongs in a head, not the translated body.
