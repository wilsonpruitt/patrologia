# Batch 1 re-harvest — full-page pass, and the diff against the crops (2026-08-06)

Batch 1 (leaves 836–844) was harvested with column crops, the method retired
2026-08-05 for losing text three ways invisibly. It has now been re-read whole
from 600 dpi full-page renders (`raw/pg088/batch1-pages/`), **blind** — the
transcribers were barred from `raw/pg088/batch1/` and from
`BATCH1-ADJUDICATION.md`, so the two passes are independent witnesses rather than
a correction of one by the other.

Model per standing policy: **Sonnet transcribed, Opus adjudicates.** Four Sonnet
agents, two leaves each; a fifth for leaf838's Greek head.

## Coverage

| | crop pass | full-page pass |
|---|---|---|
| Greek leaves | 8 | 8 |
| leaf838's Greek head | — | **5 lines / 49 words, newly harvested** |
| band letters | 836 none · 837 `ABCC` · 842 `ABCDA` · 843 `AB` | **4/4 on every leaf** |
| scripture footnotes | 3 lost | recovered (below) |

**3,239 words were read identically by two independent passes.** Per-leaf
agreement 95.0–99.1%. Adjudication queue: **57 substantive items** (4 only-in-A,
18 only-in-B, 35 differing), plus 31 accent-only and 19 apostrophe-only
differences that are not worth a plate read.

⚠ Agreement is not correctness. Where both passes share a blind spot they agree
silently — `pg-ocr-diff.mjs` says so in its own header, and PG 88 leaf 849 is the
worked example. 3,239 words survived two readings; that is all it means.

## What the full-page pass recovered

**Three scripture citations the crops lost entirely** — the class rule 9 indexes,
and the same class the Antiochus audit found truncated:

- leaf836 — `ᵃ Matth. xix, 27.`
- leaf837 — `ᵇ Psal. cxviii, 96.`
- leaf843 — `Psal. XXVII, 9.`

Plus running-text words (`ἀλλὰ` 839, `τῶν` 840, `ἀνειδίαν` 842, `ἐστι` 843,
`Πάτρες.` 843, `αὐτημοσύνη` 844) and **Migne's inline footnote markers**, which
the crop pass dropped wholesale: `προεστημηνύσαμεν¹`, `ἀλλὰ χοῦ²`, `Γρηγορίας¹`,
`ἰάσεται²`, `ἀνειδίαν ᵉ`, `ἀκτημοζύνη ζ`.

**leaf838's five Greek lines are harvested and plate-verified by me**, closing the
gap where leaf837's Greek broke off mid-clause at `…ἀλλ᾽ οὖν ἱκανὸν ἔσται`:

> σου τῇ δεξιότητι καὶ τὸ βραχὺ παραστῆσαι, κατὰ τὸ, [A]
> Δίδου σοφῷ ἀφορμὴν, καὶ σοφώτερος ἔσται.  [ᵉ Prov. ix, 9.]
> Πρότερον δὲ, ἐν συντομωτέρῳ, καὶ τὰ κατὰ τὸν μακάριον Δοσίθεον, τὸν γενόμενον πρῶτον μαθητὴν
> τοῦ μακαρίου ἀββᾶ Δωροθέου ἔτι ὄντος αὐτοῦ ἐν τοῖς τοῦ ἀββᾶ Σερίδου, καὶ τὸν
> ἀγῶνα τῆς κατὰ Χριστὸν ὑποταγῆς ἐξανύοντος.
> *Sequentia non habentur in Græco.*

I checked `ἀββᾶ Σερίδου`, `ἐξανύοντος` and the notice against the plate myself —
proper names are exactly the class a full-page reader smooths, and these hold.

## Two items the queue can already speak to

- **`Πάτρες` — a third and fourth attestation of the known crux.** leaf843 has the
  crop reading `Πατέρες.` where the full-page reads `Πάτρες.` The Batch 2
  cross-check established the plate prints a shortened form (`Πάτρις` at col
  1631/1632, recurring at 1636 and 1650) and that the reader who writes it long is
  normalizing. The direction here is the same. **Still needs the plate** before
  it is asserted — that is the whole lesson of this session — but it is the
  expected shape, not a surprise.
- **`ἔβης;` vs `ἔδης;` (leaf843)** — this is the crux `BATCH1-ADJUDICATION.md`
  already settled, and it settled it honestly: *"`ἔβης` is **β** (`παρέβης`) — but
  confirmed by the Latin twin printing* ut quid transgressus es?*, NOT by the
  glyph, which our scan cannot separate from δ."* A second, independent witness
  has now read **δ**. That does not overturn the verdict — the Latin still
  decides — it **confirms the caveat**: the ambiguity is real and reproducible,
  not one reader's slip. Leave the reading as β and keep the note.

## Open

The 57-item queue is in `benchmark/pg88-pilot/batch1-diff.json` and has NOT been
adjudicated. Per the Batch 2 cross-check, **neither pass may be presumed the
winner** — the full-page read normalizes, the crop read invents at edges — so
every item wants the plate and the facing Latin. leaf843 is the worst leaf (95.0%,
27 items) and is where to start.

Nothing here is chunked. Batch 1 takes `[b: X]` band markers when it is.

---

# Adjudication — leaf843 (started 2026-08-06, Opus, against the 600 dpi plate)

leaf843 is the worst leaf (95.0%, 19 substantive items). Several queue rows are
alignment artifacts of one difference: `ποῦ ἐστὶ τὸ,` vs `ποῦ ἐστι τό,` split
across three rows (only-A `τὸ,`, only-B `ἐστι`, differs `ἐστὶ`/`τό,`), and
`Πατέρες.` vs `Πάτρες. ι'.` across three more.

## Settled

| item | crop (A) | full-page (B) | **verdict** | evidence |
|---|---|---|---|---|
| opening | `ἔβης;` | `ἔδης;` | **A — `ἔβης`** | see below |
| `ποῦ ἐστι τὸ,` | `τὸ,` | `τό,` | **A — grave** | the omicron carries a grave before the comma, Migne's documented convention for this volume, and it is visible at zoom. B normalized it to an acute |
| `…θεοφόροι Πάτρες.` | `Πατέρες.` | `Πάτρες.` | **B — `Πάτρες`** | no epsilon stands between τ and ρ; Latin *caeterosque deiferos Patres* |
| section number | *lost* | `Ι᾽.` | **neither exactly — the plate prints `ι'.`** | lowercase iota + prime, against the Latin's `X.` A lost it entirely; B has it as a capital |

`ἐστι`/`ἐστὶ` is immaterial — both passes read the same word and the mark after
the iota is not separable at this resolution. Not adjudicated.

## ⚑ `ἔβης` — the old caveat is now revised, and this is a point for the pipeline

`BATCH1-ADJUDICATION.md` settled this reading as β and said so honestly:

> `ἔβης` is **β** (`παρέβης`) — but confirmed by the Latin twin printing *ut quid
> transgressus es?*, NOT by the glyph, which our scan cannot separate from δ.

**At 600 dpi, full page, the glyph IS separable.** It is the fount's "6"-like
beta — a left ascender with the bowl closed at lower right — and not the δ, whose
loop carries its ascender off the top. The Latin (*Ut quid peccasti? ut quid
transgressus es?*, visible in the facing column of the same segment) agrees.

So the verdict is unchanged, but its basis is not: **the caveat was true of the
400 dpi crop, not of the plate.** That is a distinct argument for the full-page
pipeline from the one it was adopted on — it recovers lost text *and* it settles
glyphs the crop could only settle by inference from the Latin. The second
witness's δ is what the crop-grade evidence looks like, reproduced.

## ⚑ `Πάτρες` / `Πάτρις` — the volume prints BOTH short forms

Batch 2 established the plate prints a shortened form for `Πατέρες` at col
1631/1632, recurring at 1636 and 1650, and that the reader who writes it long is
normalizing. leaf843 (col 1628) is a further attestation and **the crop pass
normalized it**, exactly as predicted.

⚠ But the vowel differs: col 1632 prints **`Πάτρις`** and col 1628 prints
**`Πάτρες`**. Both are short by one syllable against `Πατέρες`; they are not the
same misprint twice. Record them separately and do not conform one to the other.

## Not yet adjudicated on this leaf

`Οὕτως`/`Οὕτω` · `καταστάσεις`/`κατάστασις` · `Ὥσπερ`/`Ὅπερ` ·
`θέλημα.`/`θέλημα·` · `Ἄνευ`/`ἄνευ` · `Οὖν`/`Οὐ` · `οὐκ`/`οὐχ` · only-A `τις` ·
the `Psal. XXVII, 9.` footnote recovery (B; the crop pass transcribed no footnote
blocks at all, so this class is not really contested). Lower value than the four
above, and each still wants the plate.

**Leaves 836, 837, 839, 840, 841, 842, 844 are not started** — 38 substantive
items between them, none worse than 98.7% agreement.

---

# Adjudication continued — leaves 836, 837 (2026-08-06, Opus, 600 dpi plate)

## leaf836 — the section number, and a Greek/Latin divergence nobody had recorded

| item | crop (A) | full-page (B) | **verdict** |
|---|---|---|---|
| section number after the Epistle heading | `Λ'.` | `Α'.` | **A — `Λ'.`** |

At zoom the glyph is a clean **lambda**: two strokes to an apex, open at the
foot, **no crossbar**. An alpha in this fount carries a visible bar between the
legs. `BATCH1-ADJUDICATION.md`'s ruling ("`Λ'.` is lambda") is confirmed, and
B's `Α'.` is a normalization toward the expected "section 1".

⚑ **But the facing Latin prints `1.`** — *"1. Laudare cogor propositum…"*, against
the Greek's `Λ'.` (= 30). Read off the same segment, both columns. This is a
genuine **Greek/Latin divergence on the plate** and it has not been recorded
anywhere: it is Pattern 16 `[lat:]` material, not an error to be fixed. The
heading above it is *Ἐπιστολὴ πρὸς τὸν αἰτήσαντα ἀδελφὸν πεμφθῆναι αὐτῷ τοὺς
εὑρεθέντας λόγους τοῦ ὁσίου Πατρὸς ἡμῶν Δωροθέου* — the Epistle prefixed to the
discourses, whose first section the Latin numbers 1 and the Greek numbers 30.
**Do not reconcile them.** Record the divergence and let the translation carry a
`[lat:]`.

## leaf837 — one to each pass, on the same two lines

The plate reads:

> …τό τι βαρὺ τῆς **παρακοῆς** ὑφορώμενος, καὶ τὸ τῆς **ὀκνη-**
> **ρίας** δεδοικὼς ἐπιτίμιον…

| item | crop (A) | full-page (B) | **verdict** |
|---|---|---|---|
| `τῆς …ῆς ὑφορώμενος` | `παρακλήσεως` | `παρακοῆς` | **B — `παρακοῆς`** |
| line-end before `ρίας` | `ὀκνη-` | `ἐπιτ-` | **A — `ὀκνη-`** |

`παρακοῆς` (disobedience) is on the plate letter for letter, and the sense
carries it: *"fearing something grievous from disobedience, and dreading the
penalty of sloth"* — he is explaining why he writes at all. A's `παρακλήσεως`
(consolation) is a different word and not what is printed.

B's `ἐπιτ-` is simply the wrong word: it has taken `ἐπιτίμιον`, which stands four
words later on the next line. **B's own UNCERTAIN block flagged this reading as
low-confidence and asked for a fresh zoom** — the transcriber doubted itself
correctly, which is the behaviour the prompt is trying to buy.

## Running tally — neither pass dominates, as predicted

Across the seven items adjudicated so far: **crop 4 · full-page 2 · neither 1.**
The Batch 2 cross-check's finding holds on Batch 1 too, and in the same shapes —
the full-page pass normalizes (`Πατέρες`→ no, `Α'.` for `Λ'.`, `τό,` for `τὸ,`),
the crop pass mis-sees isolated words (`παρακλήσεως`, `Πατέρες`). Two of the
seven turned on the **facing Latin**, one of them producing a new crux.

## Remaining

- leaf843: 9 lower-value items (orthographic and punctuation).
- leaf836: `μέλων·`/`ῥέων·` (seg1) · `δι᾽`/`διὰ` (seg1) · `ἐλάσειε·`/`ἐλάσεις·`
  (seg3) · `ὄφεων`/`ὄρεων` (seg7 — likely `ὄφεων`, cf. Luke 10:19 *πατεῖν ἐπάνω
  ὄφεων*, but **unverified**) · the `ᵃ Matth. xix, 27.` footnote.
- leaf837: `συναλο-`/`συνολο-` · `ῥίζῃ,`/`ῥίζῃ.` · `ἀόκνως`/`ἀόχνως` ·
  `προαιρέσεις`/`προαίρεσις` · the `ᵇ Psal. cxviii, 96.` footnote.
- leaves 839 (4), 840 (5), 841 (1), 842 (5), 844 (3) — untouched.

**The footnote-recovery class (8 items) is not really contested**: the crop pass
transcribed no footnote blocks at all, so every one is a recovery by B. They want
a single confirming look at each block, not an adjudication apiece.
