# 8950 *Liber Genesis* — pending TEI patches, cols 0160B–0173C (stint 0036–0041)

Sites where **Migne's plate and our Corpus Corporum twin disagree**, found by reading every
column of this range at the plate on **two witnesses** — the on-disk archive.org PDF
(`raw/scans/pl113/patrologiaecurs04migngoog.pdf`, PDF page = (column + 11) / 2) and the
Gallica IIIF copy (`ark:/12148/bpt6k5505319w`, f = (column + 1) / 2).

Per the locked rule (`translation-style.md`, "What the English translates — THE PLATE WHERE
READ"), **the English of this stint renders the plate at every Part A site**, and the Latin
column will converge on it when these patches land.

---

## ⛔⛔ READ THIS FIRST — the archive.org copy of pp. 85–92 MANUFACTURES DIVERGENCES

**Twelve letter-level "divergences" were read off the archive.org copy of these eight pages and
every one of them was refuted by Gallica, which agrees with our twin in all twelve.** The
archive copy of this gathering is heavily over-inked: thin strokes fill, so `d`→`u`, `r`→`m`,
`gn`→`rg`, `is`→`i`, an italic `F` closes into a `P`, a leading `t` is swallowed by the space
before it, and a `9` blots into a `6`. The withdrawn list is in `cruces-0036.md` §5.0.

⚑ **Consequence for the patch backlog as a whole:** the earlier stints on this work built their
patch files from the archive copy alone. This does **not** show their findings are wrong — a
different gathering may be inked differently — but the class is now measured, and a
single-witness letter call on PL 113 is worth one Gallica request before it is applied.
CLAUDE.md already says "unreadable is a fact about YOUR copy"; this range says the same of
*legible-but-wrong*.

---

## Part A — confirmed on BOTH witnesses; the English already renders the plate

| col | our TEI reads | Migne's plate reads | class | what the English does |
|---|---|---|---|---|
| 0160C | `legitur *Socoth* Est autem` | `legitur *Socoth* סכות. Est autem` | **loss** — the Hebrew word AND the full stop that closed the sentence | renders the stop and marks the loss `[ed:]` |
| 0166A | `Christus exspolitus carne humana` | `Christus exspoliatus carne humana` | **our corruption** (dropped `a`) | renders *exspoliatus*, "stripped" |
| 0166C | `Plerumque **sb;**αρχιμαγείρους` | `Plerumque ἀρχιμαγείρους` | **our artifact** — a mangled entity prefix, not a Greek reading | carries ἀρχιμαγείρους; the `sb;` is not rendered |
| 0167D | `ad portam Enaiim [0167D], quod` | `ad portam Enaiim עינים, quod` | **loss** — Hebrew word | no marker (the loss leaves the sentence sound: Pattern 13a clause 1); patch only |
| 0169B | `habetur *masqueh* , illud` | `habetur *masqueh* משקה, illud` | **loss** — Hebrew word, leaving a floating comma | `[ed:]` |
| 0169C | `vocantur *Sarigim* .` | `vocantur *Sarigim* שריגים.` | **loss** — Hebrew word, leaving a floating full stop | `[ed:]` |
| 0170A | `veritalis et justitiae famem` | `veritatis et justitiae famem` | **our corruption** (`t`→`l`; *veritalis* is no word) | renders "of truth" |
| 0170C | `tunc habeant copiosam` | `tunc **sancti** habeant copiosam` | **loss** — a whole word | renders "then the saints may have" |
| 0170C | `« Spiritus ferebatur super aquas, »` | `« Spiritus **Dei** ferebatur super aquas, »` | **loss** — a whole word inside a lemma | renders "The Spirit of God moved over the waters" ⚑ and the restored lemma then AGREES with Gn 1:2, so no `[var:]` |
| 0173A | `et **scorsum** fratribus` | `et seorsum fratribus` | **our corruption** (*scorsum* is no word) | renders "apart" |
| 0173C | `non serio **sedjoco** dictum est` | archive: `sed joco` (clear space); Gallica: letters touching | **our lost space**, most probably | renders "not in earnest but in jest"; **no `[sic:]`** — see Part C |

⚑ **The Hebrew class is now at TWELVE words across this work.** Stint 3 recorded two at 0104C,
the 0012–0018 stint four across 0113C–0118C, and this stint four more at 0160C, 0167D, 0169B and
0169C. It is systematic in this book: **wherever Jerome is quoted on a name, Migne sets Hebrew
square script and our transform drops it.** A work-wide sweep of `*[A-Za-z]* [,.]` and of
`legitur/habetur/vocantur *…*` would find the rest cheaply.

## Part B — marks, and the guillemet-normalization class. **Punctuation follows the TWIN**

Per the convention settled by the 0008–0011 stint (§1c), a divergent MARK is *not* followed into
the English, because guillemet parity and the band-by-band colon/semicolon test both partition on
the twin. These are recorded so both columns can move together when the patch lands.

- **Migne repeats `«` at the head of a continued line, and our TEI drops it** — six sites in this
  range: **0161D** (`« Dederunt ergo ei, « etc.`), **0162C** (`titulum lapi-« deum`), **0164C**
  (`anno-« rum, »`), **0169A** ×2 (`injecit « domina, »`, `in manu ejus pal-« lio, »`),
  **0169B** (`ut pecca-« rent duo eunuchi, »`), **0171C** (`universa hor-« rea, »`),
  **0172D** (`oculos « vidit Benjamin, »`). ⛔ Invisible to `verify-english`, which compares the
  English to the twin, not to the plate.
- **0160D** plate prints `Melchisedech. Salem ante dicta sit.` on the archive copy — **withdrawn**,
  Gallica reads the comma our twin has.
- **0163C** `(STRAB)` is a **note** on both plates, parenthesized and with Migne's own internal
  space `(STRAB )`. Our TEI carries it as plain running text with no `<note>` markup, so this
  chunk's `noteCount` is one short and the work's `fontes` index will silently lose a citation.
  Same class as the 0077B–C italic-siglum defect recorded by stint 1.
- **0164C / 0166C / 0169B / 0171A / 0171B / 0172C** — sigla where our TEI supplies or drops commas
  and internal spaces against the plate (`(AUG. Q. in Gen. t. III )` → `(AUG., Q. in Gen., t. III.)`,
  `(ISID. in Gen. , tom. V.)` → `(ISID. in Gen., tom. V.)`). Cosmetic; listed for completeness.
- **0164B** plate: `disputantur etc.,` with no comma before *etc.*; twin supplies one.
- **0161D–0162A** plate: `quae est Ecclesia Christi primum est,` — Gallica has the full stop and
  the capital our twin has. **Withdrawn.**

## Part C — seen at the plate and deliberately NOT acted on

- **0171D `Mititte`.** ⛔⛔ **The two witnesses genuinely disagree.** Gallica prints `Mititte`;
  the archive copy prints `Mittite`. Both are crisp, and the difference is a letter *order*,
  which no inking artifact produces. Our twin follows the Gallica reading. This is a difference
  between **printings**, not between photographs — which is a fact about PL 113 that the
  second-witness protocol in CLAUDE.md does not yet record. **No patch and no `[sic:]`**: there
  is nothing to correct our twin *to*, and a marker asserting a defect that one witness does not
  carry is exactly the public claim the ship test forbids.
- **0166C `μαγειρειύεν`.** The Gallica plate appears to read `μαγειρεύεν` (one iota fewer), but the
  reading was taken from a 1720-px enlargement of an accented Greek word and the accent could not
  be resolved. **Not acted on**; the English carries the twin's form.
- **0164B `filii Ismael`.** Confirmed on both witnesses as Migne's, in a sentence that names Saul
  as the first king — i.e. Migne prints *Ismael* where Gn 36:31 has *Israel*. **This is Migne's
  error, not ours**, so it is Pattern 7 and not a patch. Rendered as printed; crux only.
- **0165A ἀστραγάλον**, **0166A *Ismaelitis venditis venditur***, **0166D–0167A *descendit ab
  baptismum*** — all confirmed on both witnesses as Migne's. Rendered as printed.
