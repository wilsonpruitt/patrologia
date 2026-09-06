# 8963 — pending TEI patches, stint 0019–0022 (cols 0427C–0438D)

**Stint-scoped file.** Merge into a work-level `8963-PENDING-TEI-PATCHES.md` at assembly;
written separately because peer stints were translating concurrently and a shared file would
have raced.

Filed under `translation-style.md` § "What the English translates — THE PLATE WHERE READ"
(locked, Wilson 2026-09-04). **The plate was read for every column in this range**, on BOTH
witnesses:

- archive.org `patrologiaecurs04migngoog`, PDF page = (column + 11) / 2 — **corner numbers read
  first on every page**: pp. 219 (427/428), 220 (429/430), 221 (431/432), 222 (433/434),
  223 (435/436), 224 (437/438).
- Gallica `ark:/12148/bpt6k5505319w`, leaf f = (column + 1) / 2 — f214–f219; corners verified on
  f214, f215, f216, f217 and f219, and f218 confirmed by its running head and line-for-line
  identity with archive p.223.

Reads recorded in `data/briefs/8963-PLATE-READS-0019.json`, including the checked zeroes.

⚠ **Nothing here is a `[sic:]` or a `[var:]` against Migne.** Each entry is a divergence between
Corpus Corporum's transcription and Migne's type.

---

## Part A — CONFIRMED ON BOTH WITNESSES. Patch these. (Two entries, one class.)

Both are **lost non-Latin type** — a whole Hebrew word dropped by the digitization — which is
the one structural class the brief records as surviving a single read, and both were checked on
the second witness anyway.

| col | our TEI reads | Migne's plate reads (archive **and** Gallica) | class | English treatment |
|---|---|---|---|---|
| 0427B | `Interpretatione [0427C] Hebraicorum nominum, Sittim invenimus…` | `Interpretatione Hebraicorum nominum, ‹HEBREW WORD› Sittim invenimus…` — a three-glyph Hebrew word set between the comma and `Sittim` | **lost non-Latin type.** Present, unmistakable, and identically placed on archive p.219 (left column) and Gallica f214. | `[ed:]` fired at the point of loss, **supplying nothing** (Pattern 13a clause 3). |
| 0437C | `Hebraice *Daphquah,* id est pulsatio.` | `Hebraice *Daphquah,* ‹HEBREW WORD›, id est pulsatio.` — a four-glyph Hebrew word opening the next line | **lost non-Latin type.** Present on archive p.224 (left column) and Gallica f219. | `[ed:]` fired at the point of loss, **supplying nothing**. |

⛔ **The Hebrew is NOT transcribed here, deliberately.** At 300 dpi on the archive and at native
resolution on Gallica the letterforms are legible as shapes but not securely identifiable
character by character — the 0427B word resolves to three glyphs where שטים would want four, and
the brief's own rule (`reference_paleography-gt-ingest`: never read non-Latin codepoints by eye)
governs. **A wrong Hebrew word entered into our Latin would be worse than the hole**, and unlike
the hole it would be invisible as an error. The patch is therefore filed as *a word is missing at
this exact point*, and the codepoints are owed to a reader who can render the two leaves at
1200 dpi or better. The `[ed:]` notes in the English say the same thing and supply nothing.

## Part B — REFUTED AT GALLICA. No patch. (Twenty-seven readings raised, twenty-seven refuted.)

Every one of these is an archive-copy-only reading that Gallica contradicts and **our TEI already
has right**. They are recorded because the ratio is the product, not the findings.

| col | archive prints | Gallica prints (= our TEI) |
|---|---|---|
| 0428B | `VERS. 6.` | `VERS. 9.` |
| 0429A | `(Gen. IX)` | `(Gen. xv)` |
| 0429A | `et si multi sint` | `etsi multi sint` |
| 0429B | `Chrislus` | `Christus` |
| 0429B | `Sedebilis et vos` | `Sedebitis et vos` |
| 0430A | `dicit Dominus.` (full stop) | `dicit Dominus,` |
| 0430B | `adhuc viventes` | `adhuc vivente` |
| 0430B | `Jordanem eum eis` | `Jordanem cum eis` |
| 0430C | `nou supplicia` | `non supplicia` |
| 0430D | `(ORIG., hom. 23.)` | `(ORIG., hom. 22.)` |
| 0430D | `omnem illus rei ordinem` | `omnem illius rei ordinem` |
| 0431A | `in terris.` (full stop) | `in terris,` |
| 0431A | `ad invisibila` | `ad invisibilia` |
| 0431B | `(Heb. v)` | `(Hebr. v)` |
| 0432C | `nobis tutoribus` (no `sub`) | `nobis sub tutoribus` |
| 0432D | `Servet virginem suam et det` | `Servet virginem suam, et det` |
| 0433B | `ne fidem futuri saeculi` | `nec fidem futuri saeculi` |
| 0433B | `ressurrectionem` | `resurrectionem` |
| 0433D | `concupiscibiles animae :` | `concupiscibiles animae` (no colon) |
| 0434C | `Eleazur` | `Eleazar` |
| 0435D | `non in integra` | `non in integro` |
| 0436B | `cum viderunt` | `cum viderint` |
| 0436C | `vicioriam` | `victoriam` |
| 0436D | `In Eliam ubi erant` / `duodecium fontes` | `In Elim ubi erant` / `duodecim fontes` |
| 0437C | `cum visiones videre` | `cum visiones videret` |
| 0438C | `VERS. 18.` (for *In Haseroth*) | `VERS. 17.` |

⭐ Three of these are worth naming because of their **shape**, not their outcome:

1. **@0433B `ne` for `nec`.** Over-inking that *removes a letter and leaves a different negation*.
   Read on the archive alone it looks like Migne dropping a `c`; it is ink.
2. **@0432C the missing `sub`.** A claim that *the plate has LESS than our twin* — precisely the
   direction the Glossa brief's withdrawn "direction rule" once declared safe on one witness. It
   is false here.
3. **@0438C `VERS. 18.` for `VERS. 17.`** would have made Migne print `VERS. 18.` twice in
   consecutive paragraphs, which is exactly the kind of internal corroboration that reads as
   decisive and is not evidence.

## Part C — CONFIRMED ON BOTH, and therefore NOT ours

Recorded so a later reader does not re-raise them. Each rides into the English as printed, with a
crux; none takes a patch, and none takes a `[sic:]`, because none is a defect of ours.

- **@0427B `Orabatur`** for the Clementine's `Morabatur` (Nm 25:1). A real Latin word, on both
  printings. Rendered by its own sense with a `[var:]`, per Pattern 18's boundary rule (a
  divergence inside a quoted scripture is Pattern 14's, not Pattern 18's).
- **@0431A `cultu Dei`** (ablative) where the sentence wants `cultum`. Real word, real case, both
  printings; rendered as an ablative of respect, crux logged, no marker (Pattern 9).
- **@0434B `alia per aquam uniuscujusque opus quale sit ignis probabit`** — no punctuation at all
  between `aquam` and `uniuscujusque` on either copy. Carried unpunctuated into the English
  (Pattern 8: never supply).
- **@0434D `usque ad qui est terra promissionis intrare`** — does not construe on either copy.
  Rendered as closely as the printed words allow, crux logged.
- **@0435D `profiscuntur`** for `proficiscuntur`. Both printings, and our twin already has it.
- **Chapter head `CAPUT XXXI`** — archive prints a full stop, Gallica prints none, our twin
  follows Gallica. **A press variant, not a defect**: no patch, no marker, and the English head
  mirrors our twin (`CHAPTER XXXI`, no stop).
