# 8950 — pending TEI patches, stint 0012–0018 (cols 0106D–0120D)

**Stint-scoped file.** Merge into a work-level `8950-PENDING-TEI-PATCHES.md` at assembly;
written separately because peer stints were translating concurrently and a shared file would
have raced.

Filed under `translation-style.md` § "What the English translates — THE PLATE WHERE READ"
(locked, Wilson 2026-09-04). **The plate was read for every column in this range** —
archive.org `patrologiaecurs04migngoog`, PDF page = (column + 11) / 2, **corner numbers read
first on every page**: pp. 58 (105/106), 59 (107/108), 60 (109/110), 61 (111/112),
62 (113/114), 63 (115/116), 64 (117/118), 65 (119/120). Every entry in Part A was
re-cropped at 600–1200 dpi. Reads recorded in `data/briefs/8950-PLATE-READS-0012.json`.

⚠ **Nothing here is a `[sic:]` or a `[var:]` against Migne.** Each is a divergence between
Corpus Corporum's transcription and Migne's type. Where the plate carries a defect our twin
has tidied away, the English renders the sense (Pattern 7 as amended 2026-09-05) and **the
`[sic:]` is OWED but cannot be fired until the patch lands**, because `verify-english`
requires the marker's content to be a verbatim substring of the Latin twin.

⭐ **The dominant class in this range is NORMALIZATION — brief §4, "the digitization alters
Migne's spelling, in BOTH directions."** Nine of the twenty-three Part A entries are Corpus
Corporum silently *correcting* Migne: `uspue`→`usque`, `facimus`→`facinus`, `et`→`est`,
`debito`→`debita`, `utilitatum`→`utilitatem`, `Japhet`→`Japheth` (×2), and two punctuation
marks swapped four lines apart. **Not one of them is detectable from the Latin alone** — every
one reads perfectly well — which is exactly why brief §4 says the only handle is a plate read.

---

## Part A — CONFIRMED at 600–1200 dpi. Patch these.

| col | our TEI reads | Migne's plate reads | class | English treatment |
|---|---|---|---|---|
| 0108C | `etc., *usque ad* ad tenendam` | **`etc., *uspue ad* ad tenendam`** | normalization (plate form is a NON-WORD; the p-bowl is unambiguous at 1200 dpi against *quietem* in the same line) | rendered as the formula; **`[sic: *uspue*]` OWED after patch** |
| 0110B | `Ingressus **es** enim` | **`Ingressus est enim`** | corruption (our twin drops the `t`, leaving a 2nd-person verb in a narrative about Noah) | English already renders *est*, "he entered" |
| 0110B | `**num** dicit quia egressus est` | **`non dicit quia egressus est`** | corruption | ⭐ English CHANGED to the plate: "it does not say that he went out…" |
| 0110B | `arca, **et** ipsa die qua ingressus` | **`arca, ipsa die qua ingressus`** | insertion | English CHANGED: the "and" dropped |
| 0110B | `[n: (Ibid.)]` | **`(Ibid )`** — no period, space before the paren | siglum punctuation | none (notes ride verbatim) |
| 0112B | `ridiculum ei visum **est facinus** cui` | **`ridiculum ei visum et facimus cui`** | ⭐ normalization of TWO words at once; the plate does not construe (*facimus* is 1st-person among 3rd-person narrative, and *visum et* leaves the clause with no copula) and our twin's reading is good Latin | rendered for the sense; **`[sic: *et facimus*]` OWED after patch** |
| 0112A | `χ *chi* Graecam` | **`Χ *chi* Graecam`** (capital) | case | none |
| 0113A | `« Dilatet Deus **Japheth**. »` | **`« Dilatet Deus Japhet. »`** | normalization | ⭐ English CHANGED to "Japhet" |
| 0113A | `VERS. 27-29.-- « Dilatet Deus **Japheth**, »` | **`« Dilatet Deus Japhet, »`** | normalization | ⭐ English CHANGED to "Japhet" |
| 0113A | `« Dilatet Deus Japheth, » etc. [n: (ISID.)]` | **`« Dilatet Deus Japheth, »`** | — | **agrees**; recorded because its two siblings do not, so Migne is inconsistent within three lines |
| 0113C | `in Hebraeo habetur et *scheba* et *seba.*` | **`in Hebraeo habetur שׂבא et סבא scheba et seba.`** | ⭐ SOURCE LOSS — two Hebrew words | `[ed:]` FIRED at the point of loss |
| 0113C | `« Regma et Saba, » etc.` | **`« Regma et Saba, etc.`** — no closing guillemet | insertion (our twin SUPPLIES a mark Migne does not print) | none possible: guillemet parity is checked against the twin |
| 0113B | `## CAPUT X.` | **`CAPUT ·X.`** (raised stop before the numeral) | — | none |
| 0115C | `*in Ur Chesdim* ( )` | **`*in Ur Chesdim* (אורכשׂדים)`** | ⭐ SOURCE LOSS — Hebrew inside the parentheses, which our twin leaves EMPTY | `[ed:]` FIRED |
| 0115C | `« Thare genuit Abram et Nachor. »` | **`« Thare genuit Abram et Na-« chor. »`** | dropped line-head guillemet | none possible (parity) |
| 0115D | `etc., *usque,* facti sunt dies` | **`etc., *usque* « facti « sunt dies … « mortuus est in Haran. »`** | ⭐ dropped OPENING guillemet + inserted comma. **The plate is BALANCED here**; our twin's orphan `»` is its own | English CHANGED: span is now `*as far as*` with no comma |
| 0117A | `in Hebraica veritate habetur *gravis vehementer:*` | **`habetur כבד *gravis vehementer*:`** | ⭐ SOURCE LOSS — one Hebrew word | crux only (13a clause 1: the sentence still construes, so no marker) |
| 0117B | `## CAPUT XIII` and `heads: ["CAPUT XIII"]` | **`CAPUT XIII.`** — with the terminal period | omission | ⭐ English head CHANGED to `## CHAPTER XIII.`; frontmatter left verbatim per the copy rule (Tobit 8970 §1e precedent) |
| 0118B | `ponitur**,** ideo fit quia` | **`ponitur. ideo fit quia`** | normalization of a full stop into a comma | ⭐ English CHANGED: full stop + lower case, per Pattern 8 |
| 0118C | `*civitas quatuor;* CHARIAT enim Hebraice *civitas, arbe quatuor.*` | **`*civitas quatuor*; קרית CHARIAT enim Hebraice *civitas*, ארבע *arbe quatuor*.`** | ⭐ SOURCE LOSS — two Hebrew words, **and the loss has FUSED two of Migne's italic phrases into one span** | `[ed:]` FIRED |
| 0119B | `versa est**.** quod a Graecis` | **`versa est, quod a Graecis`** | ⭐ normalization: our twin INTRODUCES a sentence break Migne does not print | English CHANGED to a comma |
| 0119B | `superant primum Bara**,** qui interpretatur` | **`superant primum Bara. qui interpretatur`** | ⭐ the SAME class in the opposite direction, four lines away | English CHANGED to a full stop |
| 0119B | `*Mystice.*` and `*Allegorice.*` | **`*Mystice*` and `*Allegorice*`** — no terminal period | insertion | English CHANGED to drop the period in both spans |
| 0120D | `pugnantibus **debita** non abnegans` | **`pugnantibus debito non abnegans`** | normalization (the plate's *debito* does not agree with *stipendia*) | rendered for the sense; **`[sic: *debito*]` OWED after patch** |
| 0120D | `ad **utilitatem** fidelium` | **`ad utilitatum fidelium`** | normalization (the plate's genitive plural does not construe after *ad*); the archive OCR independently reads a `u` in that syllable | rendered for the sense; **`[sic: *utilitatum*]` OWED after patch** |
| 0120D | `« Malae bestiae, pigri ventres, »` | **`« Malae bestiae, pigri ventres ; »`** | normalization of a semicolon into a comma, INSIDE the quotation | English CHANGED to a semicolon |
| 0106D | `« Ex omnibus animantibus mundis tolles septena et septena, »` | **`« Ex « omnibus animantibus mundis tolles septe-« ptena, »`** | two dropped line-head guillemets | none possible (parity) |
| 0107C | `« Ingressus est Noe et filii ejus, uxor, »` | **`« Ingressus est Noe et filii ejus,. « uxor, »`** | dropped line-head guillemet + a stray period after the comma | none possible (parity) |
| 0107B | `[n: (ISID., Ibid)]` | **`(ISID., *Ibid.*)`** — with the period | siglum punctuation | none |
| 0108B | `VERS. 20-22--` | **`VERS. 20-22. —`** | dropped terminal period | ⭐ English CHANGED to `VERS. 20-22.-- ` |
| 0116B | `VERS. 2-3.--Faciamque` | **`VERS. 2-3. — Faciamque`** | dropped space | none (the missing `«` IS Migne's — the plate has no opener either) |
| 0115C | `[n: (BEDA, Hexaem., lib. III, t. II, col. 131.)]` | **`(BEDA, Hexaem., lib. iii. t. II, col. 131. )`** | siglum punctuation | none |

## Part B — the dropped line-head guillemet is a CLASS in this book, and it runs BOTH ways

Migne repeats `«` at the head of a continued line throughout Genesis. Our twin keeps some and
drops others, and **because `verify-english` checks guillemet parity against the TWIN, every
dropped one is invisible.** Six sites in this range (0106D ×2, 0107C, 0113C's missing *close*,
0115C, 0115D), against stint 1's four (0067C, 0069B, 0069C, 0079A) and stint 3's one (0106A).
⚑ **0113C runs the other way**: our twin SUPPLIES a closing `»` that Migne does not print.
So the class is not simply "CC drops repeats" — it is "CC normalizes the quotation marks in
whichever direction makes the pair balance," which is a stronger and more worrying statement.

⚑ **Consequence for the two remaining unpaired marks in my English**: 0113C's extra close and
0116B's extra close are now known to be, respectively, OURS and MIGNE'S. Only the second should
survive the patch pass.

## Part C — checked NEGATIVES, recorded because they are worth as much as the positives

- **0110D `intraverunt`** — the archive OCR read *intraverant* and I logged it as a candidate.
  **The plate reads *intraverunt*, exactly as our twin.** The OCR was wrong; our twin is right.
- **0115B** the whole *sidera / ferrea / astra* passage, including the Greek ἐν ραβδῳ σιδηρᾷ and
  the transliteration *in raudo sidera* — **the plate agrees with our twin character for
  character.** This was the passage my §1(a) convention turns on, so a checked agreement matters.
- **0117D** the anacoluthic *Pastores ejus, haereticos et schismaticos, qui … pacem et unitatem
  continentes;* — **Migne's, exactly as our twin prints it.** The dangling participle is his.
- **0111C** *Illi enim non pereunt diluvio separati ab Ecclesia* — **Migne's**, so the ambiguity
  I declined to resolve is his and not an artefact.
- **0116B** the orphan closing `»` at `VERS. 2-3.--Faciamque` — **Migne's**; the plate has no
  opening mark either.
- **0110B** *vicesima septima* as the date of ENTRY — **Migne's**, so the contradiction with
  Gn 7:11 and with his own next sentence is on the plate and is not ours to repair.
- **0119C** the (I Cor. XV) siglum over Is 22:13's words — **Migne's**.
- **0109C** the (Psal. XIX) siglum over Ps 119:7 — **Migne's**.
