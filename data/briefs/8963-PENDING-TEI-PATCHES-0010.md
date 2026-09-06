# 8963 — pending TEI patches, stint 0010–0013 (cols 0404B–0414D)

**Stint-scoped file.** Merge into a work-level `8963-PENDING-TEI-PATCHES.md` at assembly;
written separately because peer stints were translating concurrently and a shared file would
have raced.

Filed under `translation-style.md` § "What the English translates — THE PLATE WHERE READ"
(locked, Wilson 2026-09-04). **The plate was read for every column in this range**, on BOTH
witnesses:

- archive.org `patrologiaecurs04migngoog`, PDF page = (column + 11) / 2 — **corner numbers read
  first on every page**: pp. 207 (403/404), 208 (405/406), 209 (407/408), 210 (409/410),
  211 (411/412), 212 (413/414).
- Gallica `ark:/12148/bpt6k5505319w`, leaf f = (column + 1) / 2 — f202–f207, corners verified
  on f203, f204 and f206.

Reads recorded in `data/briefs/8963-PLATE-READS-0010.json`, including the checked zeroes.

⚠ **Nothing here is a `[sic:]` or a `[var:]` against Migne.** Each is a divergence between
Corpus Corporum's transcription and Migne's type.

---

## Part A — CONFIRMED ON BOTH WITNESSES. Patch these.

| col | our TEI reads | Migne's plate reads (archive + Gallica) | class | English treatment |
|---|---|---|---|---|
| 0407A | `*Omnia quae **sanctificatur** a filiis Israel.*` | **`Omnia quae sanctificantur a filiis Israel.`** | corruption — our twin drops the `n`, leaving a singular verb with a plural subject; the Clementine's own Nm 18:8 reads *sanctificantur* | ⭐ English renders the PLATE: "All things that are sanctified by the children of Israel." A `[sic:]` is **not** owed — the defect is ours, not Migne's. |
| 0412A | `*Incerta et occulta sapientiae tuae **manifestati** mihi.*` | **`Incerta et occulta sapientiae tuae manifestasti mihi.`** | corruption — `manifestati` has no grammatical slot (Ps 50:8 reads *manifestasti*); read at 600 dpi on the archive and at full resolution on Gallica f206 | ⭐ English renders the PLATE: "thou hast made manifest to me". No `[sic:]` owed. |

## Part B — MARKUP defects in our TEI (note boundaries). Patch; no English consequence.

Both are cases where the chunker's `[n: …]` boundary does not match the parenthesis Migne prints.
The English mirrors the twin exactly, so nothing is lost to a reader — but the citation index will
mis-harvest both until they are fixed, and the second is invisible to `verify-english` because the
note simply is not marked.

| col | our TEI reads | Migne prints | what the patch should be |
|---|---|---|---|
| 0405A | `[n: (ISID.)] *in Num.,* tom. V.) Per Dathan…` | `(ISID. in Num., tom. V.) Per Dathan…` | one note: `[n: (ISID. in Num., tom. V.)]`. As it stands the twin carries a stray unopened `)` and an italic span (`*in Num.,*`) that Migne does not set in italic — which is why that span appears in the lemma inventory as a ⚠ NOT-in-Clementine candidate. |
| 0408D–0409A | `VERS. 13.-- *Universa frugum. (AUG., quaest. 32 in [0409A] Num.)*` | `VERS. 13. — *Universa frugum.* (AUG., quaest. 32 in Num.)` | `VERS. 13.-- *Universa frugum.* [n: (AUG., quaest. 32 in [0409A] Num.)]`. The siglum is currently inside the italic lemma and carries **no** `[n: ]` marker at all, so it is not counted as a note anywhere. |

## Part C — RAISED AND REFUTED. Recorded so nobody re-raises them.

Sixteen candidates were raised off the archive copy in this range. **Fourteen were refuted by
Gallica, and our twin was right at every one of the fourteen** — consistent with the rate measured
on 9002 (12/13, 20/21, 15/16) and on 8950. Not one of these is a defect in anything.

| col | archive copy appears to print | Gallica prints (= our twin) |
|---|---|---|
| 0404D | `Reeedite a tabernaculis` | `Recedite a tabernaculis` |
| 0405B | `(AUG., quaest. **38** in Num.)` | `quaest. 30` |
| 0405A | `*usque ad*` (no colon) | `*usque ad :*` — the colon is Migne's |
| 0405A | `*usque ad*` (no comma) | `*usque, ad*` — the comma is Migne's |
| 0406A | `(II Cor. **VI**)` | `(II Cor. IV)` |
| 0407B | `ex his sanctificantur` (no *quae*) | `ex his quae sanctificantur` |
| 0407B | `sacerdotibus **lux** mandat offerri` | `sacerdotibus lex mandat offerri` |
| 0407D | `litterae doctrinam aut manente` (no comma) | comma present |
| 0408C | `primitiae autem offeruntur Aaron` (no *quae*) | `primitiae autem quae offeruntur` |
| 0409B | `creatoris **cognito** comprehenditur` | `creatoris cognitio` |
| 0409B | `Septenarium, autem, si ternario` | `Septenarium autem, si ternario` |
| 0410C | `in conspectu **earum** qui futuri erant` | `in conspectu eorum` |
| 0411A | `ex reproborum **partes**` | `ex reproborum parte` |
| 0411A | `…humilitatis ejus imitata.` (terminal stop) | no terminal stop — Migne's sentence simply stops |
| 0411C | `verbum est a **supensione**` | `a suspensione` |
| 0413C | `in mentis munitionem vertuntur.` (terminal stop) | no terminal stop |

⚑ **`lux` at 0407B is the instructive pair.** The archive's ink turns *lex* into *lux* there — and
**twenty lines later, at 0407C, BOTH witnesses print `lux` where the argument needs `lex`.** The
false one and the real one are the same substitution in the same column. Only the second witness
separates them; the first was refuted and the second took a `[cj:]`.

⚑ **Every punctuation candidate in this range was refuted.** Six marks were raised as supplied or
deleted by the digitization and Gallica carried all six exactly as our twin has them. **No
punctuation departure from the twin was made anywhere in the four English chunks.**
