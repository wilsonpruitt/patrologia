# PL 122 — Floss's *Variae lectiones*: the marker, drafted for Wilson's OK

**Written 2026-09-16 in the Eriugena register pilot (Fable).** ✅ **APPROVED by Wilson 2026-09-16
("we are good with your note decisions") — the marker, Latin-only rule, "Floss, var. lect." label,
and the front-matter handling below all stand as drafted.** ✅ **Implemented 2026-09-16** (with `[fn:]`): an optional 7th TSV column `layer` = cn|vl|fn in `data/plate-notes/<idno>.tsv`; Floss's keys are absent from the TEI, so anchors carry them as `(1)` / `(a)`. Injector, verifier (Latin-only forms, [fn:]↔[nt:] pairing, ratio + question-mark parity strip both), builder (`.notecite.floss`, labels "Floss, var. lect." / "Floss, notae"), scan-raw-markers and lemma-inventory all know both. Zero drift on the six existing [cn:] works. ⬜ Still owed from this brief: the title-block / sigla heads and the per-page "Floss's 1853 edition" line.
Background: `PL122-WITNESSES.md` (the layer's discovery and why `[cn:]` must not be reused
by default).

## What was measured on 9176 (four leaves read at the foot: n185, n186, n195, n205)

- **Sparse.** n185: 1 note · n186: 2 · n195: **none** (no *VARIAE LECTIONES* rule at all) ·
  n205: 1. Call it ~0.5–1 per leaf → **roughly 15–25 notes across the 26 leaves of 9176**, and a
  handful across the three fragments. Recovery in full is cheap: the full collation reads every
  leaf anyway.
- **The numbering restarts on every page** (n186 begins again at ¹). So there is no running
  sequence and the injector's gap detector does not apply — the same shape as the letter layer
  on 8950. The crop detector is instead the *VARIAE LECTIONES* rule itself: a page either
  prints the heading or it does not.
- **The key is a raised number in the running text, dropped by Corpus Corporum** like every
  other foot-of-page key (0 keys in all four works' chunks).
- **Every note on 9176 reads `Cod. <word>`** — Floss edited from ONE manuscript (Laon 81),
  named in his title block, and the note is the codex's reading against the text he printed.
  So on this work the printed text is **the editor's emendation** and the note is **the
  witness** — the mirror image of Migne's *Forte* layer, where the printed text is the witness
  and the note the conjecture. On 9181 (three MSS, sigla A/B/C in the head) and 9180 (Vat. 652
  = A, Mon. 580 = B/B*/B**, Brug. 1 = C) the notes carry sigla instead: `A dyonisii. sic
  ubique.` / `A B C ariovagitae.`
- ⚠ **Letters inside the apparatus are not reliably legible on either witness** (n99's
  *ariovugitae*/*ariovagitae*). A note whose word cannot be settled letter-for-letter is
  recorded with the doubtful letter flagged, never guessed (`Ariopagitam` on n186 was clean).

## The proposed marker: `[vl: <key> | <note>]` — Latin-only, no English twin

    notitiam ejus [vl: 1 | Cod. *ei*.] et intelligentiam per fidem
    sanctum Dionysium Areopagitam [vl: 2 | Cod. *Ariopagitam*.]
    Dyonisii [vl: 1 | A *dyonisii*. sic ubique.]

- **Name.** `vl` for *variae lectiones*, which is what Floss prints over the notes. Not `cn`:
  that marker means "Migne's own conjecture" on every page that carries it, and a manuscript
  reading is a different kind of claim from an editor's guess. Not `var`: that is English-side,
  ours, and about scripture.
- **Key** = the raised number as printed on that page (`1`, `2` …), restarting per page; no
  sequence check. Sigla stay inside the note text as printed (`A B C ariovagitae.`) — they are
  Floss's, and the head carries the table that decodes them.
- **Latin-only, like the numbered `[cn:]`, and for the same reason:** a reading is a reading and
  needs no translating. `verify-english` rejects a `[vl:]` in the English. ⚑ The one exception
  Floss might force: a note that is a *sentence* (*sic ubique* is a locution, not a sentence;
  a prose note would be `[nt:]` under Pattern 15's content test, as the asterisk layer is).
  None seen yet on 9176.
- **Stripped from the ratio count** exactly as `[cn:]` is.
- **The English renders Floss's text, never the codex.** A crux may cite the note ("Floss prints
  *ejus*; the codex *ei*"). Pattern 18 `[cj:]` is unaffected — if we ever prefer the codex to
  Floss, that is our conjecture and lives English-side as it always has.
- **Rendering on the page:** in the Latin column at the key point, as a small raised key with
  the note in a hover/foot, **labelled "Floss, var. lect."** so a reader can never take it for
  Migne's voice. The same builder path as `[cn:]`, one extra class.

## Where it touches the code (the four places the asterisk layer had to learn)

1. `inject-plate-notes.mjs` — a new layer flag in the TSV (or a sibling
   `data/plate-variants/<idno>.tsv` with the same six columns) → emits `[vl:]` instead of
   `[cn:]`; per-page keys exempt from the sequence check; anchor matching unchanged (the key is
   cut out of the anchor and the two halves searched as one phrase, as for Migne's numbers).
2. `verify-english.mjs` — `[vl:]` is Latin-only (error in English), stripped from the ratio,
   excluded from the note-parity sequence (it is not a note in the `[n:]`/`[nt:]` sense).
3. `build-work-page.mjs` — render class beside `.cn`, label "Floss, var. lect.".
4. `scan-raw-markers.mjs` — knows the marker, so an unrendered one is caught before deploy.
Plus `chunk-work.mjs` must run the injection last, as it does for `[cn:]`, or a re-chunk
erases it silently.

## Front matter, same ruling

- Floss's **title block** (*Ex cod. ms. 81 bibl. Laudunensis …*) is absent from the TEI
  entirely — not dropped by the chunker, never harvested. Restore it as
  `<head type="book-title">` via a TEI patch, under the 2026-09-06 Glossa banner convention
  (⚑ the extension of that ruling to work headings, already pending from 8971–8975).
- 9181's **sigla table** is currently in the chunk BODY (`Cod. ms. bibl. Univers. Lipsien.
  188 … | A.`); it belongs in a head, untranslated.
- Every PL 122 work page says: *Floss's 1853 edition; the apparatus is his, not Migne's.*

## Alternatives considered

- **Reuse `[cn:]` with a sigla key** — rejected: it would put "Migne's conjecture" over a
  reading Migne never conjectured, on a site whose whole Migne-ness is the point.
- **Consult-only (read the apparatus, cite it in cruces, inject nothing)** — Wilson chose
  maximal (2026-09-16). At ~20 notes per 20K words the cost of full recovery is small.
- **An English twin** — no; a variant reading is scholars' business and has its Latin-side
  address, exactly the 2026-08-18 argument.

**Ruled: approved as drafted, 2026-09-16.**

---

## Addendum 2026-09-16 (later) — rulings from the first three 9176 stints

- **NOTAE:** Floss's lettered prose layer → `[fn: a | …]` Latin + translated `[nt:]` English, label
  "Floss, notae" (style file E10). The injector, verifier, builder and scan-raw-markers all need the
  class alongside `[vl:]`; implement both together.
- **Two printings:** English follows the reading that construes; no TEI patch toward the defective
  printing (E11). 0302C *sinum* and 0306D's line restored in the English, their patches withdrawn.
- **Single-letter non-words:** sense + crux, no marker (E12).
- **E4 additions:** *theorica scientia* "theoric knowledge", *humanatio* "humanation".

## Addendum 2026-09-17 — rulings

- Sentence-length variant notes take `[vl: n+ | …]` + English `[nt:]` (TSV layer `vl-prose`); style file E13.
- Front matter done: 9176 title/source block and 9181 sigla table are `<head type="book-title">` banners.
- Transpositions settled by the author's own text take `[cj:]` (9176 @0347A).
