# Recovering dropped Hebrew from Migne's plates

**The problem.** Migne frequently sets a Hebrew word or phrase inline, followed by a Latin
transliteration and an *id est* gloss — common in the etymological / exegetical works
(Hugh's *Adnotatiunculae*, Jerome-derived onomastica, Rabanus, etc.). The Corpus Corporum
TEI (our Latin source) is Latin-focused and **drops the Hebrew type**, leaving a tell-tale
scar: a **stray space** before the following punctuation, or a **doubled comma** where the
glyphs stood. The transliteration survives; the Hebrew doesn't.

This is not corruption to render literally — it is a recoverable lacuna. Recover it from
Migne's plates and re-insert it, exactly as we patched Calfa's dropped Greek in the Joel
pilot. Piloted on **11059** (Hugh, *Adnotatiunculae in librum Judicum*, PL 175) 2026-07-17;
provenance in `data/hebrew-patches/11059.json`.

## Recipe

1. **Spot the scars.** In a work's chunks, grep the surviving transliterations / the
   artifacts: an empty `( )`, a stray space before `;`, a doubled comma `, ,`, an
   `In Hebraeo` clause whose Hebrew is missing. Each is a candidate — but the scan is the
   arbiter (see step 5: some `In Hebraeo` spots carry only a transliteration and never had
   Hebrew type).

   ⛔⛔ **THAT LIST IS NOT SUFFICIENT ON ITS OWN — measured on 8949 Exodus, 2026-09-08.**
   The work has **seven** sites and only **four** left a `( )`. The other three left nothing
   the documented greps can see: a **double space** before a comma (0219A `Pesach  ,`), a
   **triple space** mid-sentence (0296A `Graece,   veelle semoth`), and the **book-title
   banner**, which left no scar at all because Corpus Corporum dropped the whole display
   line. **A work whose scars are all whitespace passes this sweep in silence.** So:
   - grep `[ ]{2,}` (runs of two or more spaces) as well as `( )` and `, ,`;
   - grep the surviving TRANSLITERATIONS, which is the one signal that survives every
     scar shape — Migne almost always sets the Hebrew beside its Latin form, so
     `Hebraice`, `Hebraeo`, and the italicized transliteration itself are the reliable hooks;
   - **read the head of the book against the plate.** A dropped display line leaves no
     artifact in the text at all, and the five Glossa Pentateuch book-title lines were all
     lost this way.

2. **Get the scan.** Prefer **Gallica (BnF)** — best quality, open IIIF *image* API.
   For PL 175: `ark:/12148/bpt6k55331558`. The image API works even though `info.json`
   and the viewer return 403:
   ```
   https://gallica.bnf.fr/iiif/ark:/<ARK>/f<N>/full/<W>,/0/native.jpg      # whole page, width W
   https://gallica.bnf.fr/iiif/ark:/<ARK>/f<N>/pct:x,y,w,h/1800,/0/native.jpg  # region crop, upscaled
   ```
   `data/volumes.json` lists each volume's Gallica/Google/archive IDs. Native scan on this
   copy is ~1860 px/page — fine for consonantal text, marginal for tiny pointed Hebrew; if a
   glyph is ambiguous, pull the Google Books copy for a second look.

3. **Find the folio.** Calibrate off running heads. In PL 175 the front-matter Roman-numeral
   columns end ~`f70`; the Arabic-numbered text then runs **col C ≈ f70 + (C−9)/2** (two
   columns per leaf, left = odd col, right = even). Pull a candidate, read its running head,
   adjust. (Col 91 → f126, col 94 → f127.)

4. **Read the Hebrew.** Tight `pct:` region crop over the Hebrew, upscaled (`/1800,/`), then
   read it. Migne's Hebrew is sometimes pointed, sometimes bare.

5. **Verify against the Masoretic text.** These are quotations of *specific verses*, so the
   MT tells you what the consonants should be — this resolves scan ambiguity (ל/ר, ה/ח) and
   catches the case where **there is no Hebrew to recover** (transliteration only; e.g.
   11059 col 0091D). Policy: **render what Migne prints**; where Migne's type diverges from
   MT, render Migne's and note it (same rule as the Joel Greek-vs-Latin divergences). Where
   the scan is too degraded to distinguish a glyph, read per MT + Migne's own transliteration
   and say so in the provenance note.

6. **Patch both twins.** Insert the Hebrew Unicode at the same spot in the Latin chunk **and**
   its English twin (the English keeps the Hebrew verbatim, like an `[n:]` note). Keeps
   `verify-english` parity (markers/notes unchanged; identical text both sides).

7. **Record provenance.** One `data/hebrew-patches/<textIdno>.json` per work: for each spot,
   the column, verse, Hebrew, folio, pointed?, MT-verified?, and a note. List `notLacuna`
   spots (transliteration-only) too, so no one re-hunts them.

8. **Re-verify + rebuild.** `verify-english` → `build-work-page` → `index-work`. Update the
   work's `cruces.md` (recovered spots + any withdrawn "dropped Hebrew" notes).

## Rendering (built once, 2026-07-17)

The chunk format carries the Hebrew as plain Unicode; the builders wrap runs of Hebrew
(U+0590–U+05FF, incl. maqaf/niqqud) in `<span class="hebrew" dir="rtl" lang="he">` — see
`inlineHtml` in `build-work-page.mjs` and the equivalent in `build-work-page-pg.mjs`. CSS
`.hebrew` (sketch/styles.css) sets Frank Ruhl Libre (Google Fonts, loaded in the work-page
`<head>`), `direction: rtl`, `unicode-bidi: isolate`. No new chunk marker needed — any Hebrew
Unicode in any work now renders correctly, so future Hebrew-bearing works are automatic.

## Scope note

Corpus-wide, this affects every Hebrew-bearing work. It is **per-work, on demand** — run the
recipe when a work with Hebrew scars enters the queue, not as a speculative sweep. A grep for
the scars (`, ,` / `In Hebraeo` + stray space) across `sources/pl/tei/` could pre-flag
affected works if we ever want a worklist.
