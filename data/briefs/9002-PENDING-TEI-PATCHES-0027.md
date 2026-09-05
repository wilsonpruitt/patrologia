# 9002 — pending TEI patches, stint 0027–0031 (cols 0137C–0150A)

Sites where the plate was read and **our Corpus Corporum Latin diverges from what Migne printed**.
Per `translation-style.md` §"What the English translates — THE PLATE WHERE READ", the English in
these chunks renders **the plate**; the Latin twin must converge on it when the patch pass lands.

Every entry below was read on **BOTH witnesses** (archive `patrologiaecurs06saingoog.pdf`,
PDF page = (col+11)/2, pp. 74–80, rendered at 300 dpi; Gallica `ark:/12148/bpt6k54939667`,
f = (col+1)/2, ff. 69–75, IIIF at 2400 px), corner numbers read first on every page. Per-page
ledger: `data/briefs/9002-PLATE-READS-0027.json`.

⛔ **No `[sic:]` is fireable at any of these sites**, and that is the whole point: the marker must
quote a word still standing in our Latin, and firing one here would accuse Migne of the
digitization's error. **All four are Corpus Corporum's.**

**Four patches out of twenty-one candidates.** The other seventeen were archive-copy over-inking,
refuted at Gallica, and are listed under "NOT patches" below so that nobody files them later.

---

## 1. @0142A — `Etiam` for `Eliam` · **CERTAIN, and it is the one that matters**

| | |
|---|---|
| **our TEI** | `de quibus supra: *Alii Joannem Baptistam, alii autem Etiam,* etc.` |
| **plate** | `de quibus supra: *Alii Joannem Baptistam, alii autem Eliam,* etc.` |
| **witnesses** | archive p.76 col 142 **and** Gallica f71 col 142 — both print `Eliam` in italic, unbroken, at normal letter spacing |
| **class** | Corpus Corporum corruption (`li` → `ti`) |
| **marker after patch** | **none.** With `Eliam` restored the lemma agrees with Mt 16:14 **word for word** — `Alii Joannem Baptistam, alii autem Eliam` — so no `[var:]` is owed either. |

Chunk 0028. The English renders the plate: *"Others John the Baptist, and others Elias, etc."*

⭐ **This one is worth a sentence of its own, because it is a fifth cause for the `⚑ MATCHES ONLY
ELSEWHERE` / `⚠ NOT in Clementine` class that launch brief §7 catalogues.** §7 lists four causes for
a failed phrase search — a real divergence, a harmony parallel, an elided word or word division in
Migne's lemma, and a defect in our own Clementine copy. **Here the defect is in OUR OWN LATIN**, and
it is the only cause of the four-plus-one that a Vulgate collation reads as evidence *against Migne*.
Read on the twin alone, `Etiam` is a non-word inside a scripture lemma expounding Mt 16:14, and
addendum A's old heuristic would have called it Migne's broken sort with confidence. It is ours, and
only the plates say so.

---

## 2. @0143D — `enimus` for `erimus` · **CERTAIN**

| | |
|---|---|
| **our TEI** | `quia nondum apparuit quod enimus, sed cum apparuerit, similes ei erimus` |
| **plate** | `quia nondum apparuit quod erimus, sed cum apparuerit, similes ei erimus` |
| **witnesses** | archive p.77 col 143 **and** Gallica f72 col 143 |
| **class** | Corpus Corporum corruption (`ri` → `ni`) |
| **marker after patch** | none. |

Chunk 0029. The English renders the plate: *"because it hath not yet appeared what we shall be."*
The clause is 1 Jn 3:2 unmarked, and the correct `erimus` prints six words later in the same
sentence — which is exactly the internal corroboration CLAUDE.md warns proves an error *exists*,
never whose it is. The plates settled it.

---

## 3. @0148D — `eum` for `cum` · **CERTAIN**

| | |
|---|---|
| **our TEI** | `Tertium spirituale, qui, eum possent esse viri, propter Christum continent.` |
| **plate** | `Tertium spirituale, qui, cum possent esse viri, propter Christum continent.` |
| **witnesses** | archive p.79 col 148 **and** Gallica f74 col 148 |
| **class** | Corpus Corporum corruption (`c` → `e`) |
| **marker after patch** | none. |

Chunk 0031. `eum possent` does not construe at all; `cum possent` gives the concessive the sentence
needs. The English renders the plate: *"those who, though they could be husbands, are continent for
Christ's sake."*

---

## 4. @0142A — a comma our file supplies after `sunt` · **CERTAIN, punctuation**

| | |
|---|---|
| **our TEI** | `a Domino sortiti sunt, apostoli, sic Simoni a se nomen Petri dedit` |
| **plate** | `a Domino sortiti sunt apostoli, sic Simoni a se nomen Petri dedit` |
| **witnesses** | archive p.76 col 142 **and** Gallica f71 col 142 — neither prints a comma after `sunt` |
| **class** | Corpus Corporum normalization (supplied mark) |
| **marker after patch** | none. |

Chunk 0028. Small, and it changes the parse: with our comma `apostoli` reads as an isolated
apposition or a vocative; without it, `apostoli` is the subject of `sortiti sunt` and the sentence
says what it means — *the apostles were allotted "light" and the rest of the names by the Lord.*
The English renders the plate. Filed under Pattern 8's discipline: our Latin's punctuation is a
witness to Migne's, not a substitute for it.

---

## NOT patches — seventeen archive-copy readings refuted at Gallica

Recorded so that a later reader does not re-raise them. **In every one our TEI agreed with Gallica.**
The archive copy of PL 114 lost **seventeen times out of seventeen** in this range, which is a third
independent reproduction of the 12:1 figure CLAUDE.md records for cols 0063–0080 and the 11:1 and
20:1 figures the 0012 and 0006 stints measured.

| col | archive reads | Gallica reads | our TEI |
|---|---|---|---|
| 0137D | `VERS. 3 —` (no point) | `VERS. 3. —` | = Gallica |
| 0140B | `palman` | `palmam` | = Gallica |
| 0140B | `utriu sque` · `pr acceptorum` | `utriusque` · `praeceptorum` | = Gallica |
| 0140C | `interpratur` | `interpretatur` | = Gallica |
| 0141C | `Qnid ergo Moyses` | `Quid ergo Moyses` | = Gallica |
| 0142B | `quodcumque` ×2 | `quodcunque` ×2 | = Gallica |
| 0142C | `Jesus-Christus` (compound hyphen) | `Jesus Christus` | = Gallica |
| 0143C | `debet esset Petrus` | `debet esse Petrus` | = Gallica |
| 0144A | `Spiritus sanctis gratia` | `Spiritus sancti gratia` | = Gallica |
| 0144D | `viderant recessisset` | `viderant recessisse` | = Gallica |
| 0145C | `VERS. 24.` (no em-dash) | `VERS. 24. —` | = Gallica |
| 0146C | `Videte ne condemnatis` | `Videte ne contemnatis` | = Gallica |
| 0146C | `(HIER)` | `(HIER.)` | = Gallica |
| 0147A | `vel ab abjiciendum` | `vel ad abjiciendum` | = Gallica |
| 0148B | `Disciplicet` | `Displicet` | = Gallica |
| 0148D | `computantur etiam hic qui` | `etiam hi qui` | = Gallica |
| 0149A | `Contra non ait` | `contra non ait` | = Gallica |
| 0149B | `Dicit et adolescens` | `Dicit ei adolescens` | = Gallica |
| 0149C | `VERS. 28. — In generatione` | `In regeneratione` | = Gallica |

⚑ **Two of these were one HTTP request away from becoming public claims about Migne's text.**
`Disciplicet` @0148B is a **non-word** — the class addendum A once called "right every time" — and it
is the archive's ink. And `In generatione` @0149C would not have been read as a printing defect at
all: it is a perfectly good Latin word, and against Mt 19:28's `in regeneratione` it reads as a
**scripture divergence**, i.e. a `[var:]`. A single-witness read there would have produced a marker
in the maroquin asserting that Migne's lemma drops the *re-*, in a gloss whose very next words are
*Duae sunt regenerationes*. That is launch brief §8's asterisk lesson in the `[var:]` register: ink
does not only corrupt a word, it can manufacture an *apparatus entry* of the right shape.
