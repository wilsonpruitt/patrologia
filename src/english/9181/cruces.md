# Cruces — 9181 (Joannes Scotus Erigena, *Expositiones super Ierarchiam ecclesiasticam S. Dionysii*, prologue fragment)

Governed by `translation-style.md` Pattern 7 and the Eriugena register rules E1–E12. Stint C, 2026-09-16.
Plate read in full: archive n169 (265/266) and n170 (267/268), Princeton PA265/PA267 as second witness
(`data/briefs/9181-PLATE-READS.json`). The printed text is **Floss's**, collated from three codices whose
sigla table heads the chunk.

## Standing decisions

- ***theoria*** italic (E4), plural *theoriae*; *ierarchia / ierarcha* → hierarchy / hierarch; *symbolum* → symbol.
- **Sigla table** (`Cod. ms. … | A.` ×3) carried VERBATIM and untranslated, per the stint brief; moving it into a
  head is a later structural ruling. The `|` is the chunker's rendering of Floss's leader dots.
- **Floss's apparatus here cites sigla A/B/C**, not `Cod.`; they are kept inside the `[vl:]` note text as printed.
- *principatus* (0267C) → "principate" for *sacro principatu* (the calque of ἱεραρχία) and "principalities"
  for the angelic *sanctissimi principatus* (nominative plural, the order of angels).
- *Tymotheum* → Timothy; *Epygramma* → Epigram (spelling variants stay in the Latin).
- No `[var:]`, `[sic:]` or `[cj:]` fired. No scripture is quoted: *sanctificat seipsum pro nobis* echoes John 17:19
  (Vulg. *pro eis ego sanctifico meipsum*) and the Seraphim's cry Isaias 6:3, both allusions in running prose,
  not quotations; no marker.

## 0268A–C — text MISSING from our Latin, restored in the English under `[ed:]` (Pattern 13a, clause 2)

✅ **RESOLVED at merge, 2026-09-16:** both patches landed in `data/tei-patches/9181.json` (the restored ending with its [0268B]/[0268C] anchors, and the *chrismatis initiatione* comma). Re-chunked and re-injected (25/25 VL placed), the `[ed:]` was removed, and the anchors were added to the English. What follows is the stint's record from before the merge.

Our TEI ends at *liquido manifestat.* The plate (both copies) goes on with *Haec insunt … capitula VII.*, the seven
chapter titles, the paragraph *Praecumbentium capitulorum … de ceteris.* and *Cetera desiderantur.* A structural
unit lost from the digitization: restored in the English from the plate, announced by one `[ed:]`, patch filed
(`data/briefs/9181-PENDING-TEI-PATCHES.md`). ⚠ **Consequences for a human:** (1) the English carries ~110 words
the Latin twin lacks, so verify's ratio sits at the 1.75 edge (warn, not fail); (2) VL keys 18–20 fall in the lost
stretch and are unplaced until the patch lands; (3) the plate's band anchors 0268B/0268C cannot be carried
until the Latin has them. When the patch lands: re-chunk, re-inject, add the two anchors, delete the `[ed:]`.
- *Praecumbentium* (for *praejacentium*?) "preceding"; *in miro* = the *myron*, rendered "in the chrism" to match
  *chrismatis* above; *in dormientibus* "over those who sleep" (Dionysius's rites for the dead). *doctrinam … perficit*
  "he carries out the teaching" (subject Dionysius, unexpressed).

## 0268A — *chrismatis, initiatione*: English follows the plate (no comma)

Twin comma separates the genitive from its noun; plate (both copies) has none. Rendered "In which initiation of
the chrism, namely," — patch filed.

## 0266D — *legale fit sacerdotium* "is made the legal priesthood"

Rendered literally ("is made"), not smoothed to "is". Floss's note ³ records C *sit*; the English follows Floss.

## 0267A — the comparisons *ut legalis praeterita / ut caelestis futura*

Elliptical; rendered "as the past legal", "as the future heavenly" with no supplied verb or noun (a
supplied "one" was removed to keep the ratio honest after the restoration).

## 0267B — the epigram

Two italic lines as printed (the Latin of Dionysius's iambic epigram, σύμβολα θείων θαυμασίων ἱερῶν …). *resolvisti*
is second-person singular → "thou hast resolved" (Pattern 17). The first line ends with a full stop on the plate and
is rendered with it, though it is grammatically the object of the second.

## 0267B–0268A — the long sentence *In quibus ostendit … caelitus operari; maxime … assistunt, et in consecratione …*

The construction shifts after the semicolon from an infinitive governed by *ostendit* to a finite *assistunt* with a
new subject (*principatus*). Rendered as printed, the shift kept; not repaired. *uniformis et uniordo symbolis est
sanctissimae eucharistiae* "which is uniform and of one order with the symbols of the most holy eucharist": *symbolis*
could be "in its symbols"; the genitive *eucharistiae* is taken with *symbolis*. Floss's note ¹² gives the codex
reading *uni ordo*.

## 0268A — *In qua … ordinem Seraphim … circumstare, et … laudare … liquido manifestat*

Two infinitives governed by *manifestat*; "he clearly shows that the order of the Seraphim stands around … and …
praises". *benignum Jesum* "the kindly Jesus" (Dionysius's τὸν ἀγαθώτατον Ἰησοῦν); *intelligibiliter / sensualiter*
"intelligibly / sensibly" kept as a pair.

## Floss's *Variae lectiones* — 25 rows, 22 placed

n169 keys 1–5 and n170 keys 1–17 placed at keys read at the plate; 18–20 unplaced (source loss above).
Doubtful letters flagged, not guessed: n170 ⁷ *sacrament[u?]m*, ¹³ *u[n?]itiacione*, ¹⁴ *s[c/a]nctissimis*.
⚑ **For a human: n170 note ¹⁸ is a SENTENCE** (*Quae sub numeris I-VII hic habentur, in A supra post epigrammata
extant.*), keyed by a number on the VL layer. The ruling foresaw this ("a note that is a sentence would be `[nt:]`")
but the injector gives `[nt:]` twins only to lettered `[fn:]` rows. It is recorded as `vl` (and is unplaced anyway).
No NOTAE on either leaf (checked zeros).
