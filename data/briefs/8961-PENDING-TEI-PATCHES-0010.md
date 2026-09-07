# 8961 — pending TEI patches, stint 0010–0014 (cols 0324A–0336A)

**Stint-scoped file.** Merge into a work-level `8961-PENDING-TEI-PATCHES.md` at assembly;
written separately because peer stints were translating concurrently and a shared file would
have raced.

Filed under `translation-style.md` § "What the English translates — THE PLATE WHERE READ"
(locked, Wilson 2026-09-04). **The plate was read for every column in this range** — Gallica
IIIF `ark:/12148/bpt6k5505319w`, leaf `f = (column + 1) / 2`, corner numbers read first on
every leaf: f162 (323/324), f163 (325/326), f164 (327/328), f165 (329/330), f166 (331/332),
f167 (333/334), f168 (335/336). Three sites were additionally checked on the on-disk
archive.org copy (`patrologiaecurs04migngoog`, PDF page = (column + 11) / 2, pp. 167 and 169).

⚠ **Nothing here is a `[sic:]` or a `[var:]` against Migne.** Each is a divergence between
Corpus Corporum's transcription and Migne's type.

---

## Part A — CONFIRMED on the Gallica plate. Patch these.

| col | our TEI reads | Migne's plate reads | class | English treatment |
|---|---|---|---|---|
| 0325D | `Misael, *Dei attrectatio.*` | **`מישאל Misael, *Dei attrectatio.*`** | dropped Hebrew | see `hebrew-recovery.md`; **no English effect** (Pattern 13a clause 1 — the loss leaves the sentence sound, so no `[ed:]`) |
| 0325D | `Elisaphan, sive Elzaphan,` | **`אלצפן Elisaphan, sive Elzaphan,`** | dropped Hebrew | no English effect |
| 0330B | `Falsa dicendo testimonia**.** dignum dicendo indignum` | **`Falsa dicendo testimonia, dignum dicendo indignum`** | punctuation (our full stop before a lowercase word) | ⛔ English follows the **PLATE**: one sentence, comma. |

Both Hebrew words are MT-verified: Ex 6:22 has מִישָׁאֵל and אֶלְצָפָן. Migne prints them
unpointed. Provenance for a `data/hebrew-patches/8961.json` entry: Gallica f163, column 0325D,
bottom of the left column, read at 1900 px native blow-up on 2026-09-07.

---

## Part B — NOT patches. Recorded so nobody files them as such.

**⚑ The two printings of PL 113 are different settings, and the Gallica copy drops letters the
archive copy carries.** Two sites in this range, both with our TEI following Gallica:

| col | Gallica (our exemplar, = our TEI) | archive.org copy | verdict |
|---|---|---|---|
| 0324C | `tranferente` | `transferente` | **press variant** — both copies clean, nobody to accuse. No `[sic:]`, no patch. English renders the sense. |
| 0327D | `ministare` | `ministrare` | **press variant** — same. No `[sic:]`, no patch. |

⛔ Two further archive-copy readings were REFUTED or are unsupportable and are **not** filed:
`condendum` for `comedendum` @0324C and `Moyes` for `Moyses` @0327C. The archive copy is jbig2,
a symbol-substitution codec; Gallica and our twin agree against it at both sites.
