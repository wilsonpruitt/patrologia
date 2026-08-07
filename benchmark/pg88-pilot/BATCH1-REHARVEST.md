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

*(All of the above is now superseded by the block below, except where it says so.)*

---

# Adjudication continued — leaves 836, 837, 839, 840, 842, 844 (2026-08-06, Opus, 600 dpi plate)

Twenty further substantive items settled against the plate, plus the footnote
class. **The footnote class turned out NOT to be the free win it was billed as** —
see leaf843 below.

## leaf836 (col 1613) — five items

| item | crop (A) | full-page (B) | **verdict** | evidence |
|---|---|---|---|---|
| first word of the leaf | `μέλων·` | `ῥέων·` | **B — `ῥέων`** | the initial glyph carries a descender below the baseline: **ρ**, not μ. A mis-saw the very first word of the crop — the edge failure mode exactly |
| line 1, before `[A]` | `δι᾽` | `διὰ` | **B — `διὰ`** | a full alpha with grave is printed, though the next word (`ἐρωτήσεως`) begins with a vowel and elision is what a reader expects. A normalized to the elided form |
| after `…ψυχικὴν λυσιτέλειαν.` | `»` | *lost* | **A — the mark is printed** | a standalone filled crescent, ink-merged but unmistakably a mark and not noise, closing the quotation from Theodore before `Ἰδοὺ τοίνυν` |
| `…τῆς ἀρετῆς …` | `ἐλάσειε·` | `ἐλάσεις·` | **A — `ἐλάσειε`** | the final letter is an epsilon, no descender/hook of a final sigma; and the optative is what the sentence wants |
| `κτόνων κεφαλὰς πατεῖν …` | `ὄφεων` | `ὄρεων` | **A — `ὄφεων`** | a clean phi, stroke through the bowl. Cf. Luke 10:19. The earlier note's guess was right; it is now verified |
| footnote | *none transcribed* | `ᵃ Matth. xix, 27.` | **B — confirmed on the plate** | sole note at the foot of the Greek column |

## leaf837 (col 1615) — four items

| item | crop (A) | full-page (B) | **verdict** | evidence |
|---|---|---|---|---|
| `…χρησάμενος, ——` | `συναλο-` | `συνολο-` | **B — `συνολο-`** | omicron, read at zoom |
| `μαραίνει τῇ ῥίζῃ ▯` | `ῥίζῃ,` | `ῥίζῃ.` | **B — a period is printed** | the mark is compact and round with **no descending tail**; Migne's comma in this fount descends visibly (compare `βλαστήματα,` four words later). ⚠ Sense wants a comma. Not emended |
| `…εὕρισκεν, ▯ ἑαυτὸν` | `ἀόκνως` | `ἀόχνως` | **A — `ἀόκνως`** | kappa, not chi; and it is the real word |
| `εἰ καὶ μὴ ▯ εὐγνώμων` | `προαιρέσεις` | `προαίρεσις` | **B — `προαίρεσις`** | singular, agreeing with `εὐγνώμων` |
| footnote | *none transcribed* | `ᵇ Psal. cxviii, 96.` | **B — confirmed** | and it **keys to the Greek column's last line**, `Πλατεῖα ἡ ἐντολή σου σφόδρα` — the quotation is on the plate directly above |

## leaf839 (col 1619) — ⚑ the crop pass silently applied Migne's own footnote corrections

Two items, and they are the same item twice.

| item | crop (A) | full-page (B) | **verdict** |
|---|---|---|---|
| `ἐχθρῶν ἐπαναστάσεις …` | `προεσημηνύσαμεν,` | `προεστημηνύσαμεν¹,` | **B** |
| `Ὥσπερ καὶ … λέγει` | `ἀλλαχοῦ` | `ἀλλὰ χοῦ²` | **B** |

The plate prints `προεστημηνύσαμεν` with a superscript ¹, and prints `ἀλλὰ χοῦ`
as two units with a ² between them. Both are read at zoom. The foot-of-column
notes give the corrections `¹ προεμηνύσαμεν.` and `² ἀλλαχοῦ.`

⚑ **A had arrived at a corrected body text without ever reading the footnotes**
(the crop pass transcribed no footnote blocks at all). It construed each odd
printed form into the nearest real word — and Migne's own note proves the printed
form was odd. **This is normalization in the CROP pass**, which the session's
standing finding attributes to the full-page reader. Restate the finding: *both*
instruments normalize; the full-page reader normalizes across a page it can see,
the crop reader normalizes a word it can construe.

Note A's `προεσημηνύσαμεν` is a **third** form — neither the plate's nor the
note's. A plausible Greek word invented at the point of damage.

`Β'.` vs `Β΄.` is a prime-character convention, not a plate reading: use `Β'.`,
matching `Λ'.` on leaf836. Not adjudicated as a witness question.

## leaf840 (col 1621) — ⚑ the full-page pass INSERTED a word

| item | crop (A) | full-page (B) | **verdict** | evidence |
|---|---|---|---|---|
| `ἀλλὰ καὶ ἐξ αὐτῶν ▯ παθῶν` | *(nothing)* | `τῶν` | **A — no `τῶν` is printed** | the plate reads `ἐξ αὐτῶν παθῶν`, one space, no article |
| `ὁ ἅγιος Γρηγορίας ▯` | *no marker* | `Γρηγορίας¹` | **B** | superscript ¹ present; the Γ prints with its arm lost (reads nearly as `Ι`) |
| `τὸ ὅμοιον ἰάσεται ▯` | *no marker* | `ἰάσεται²` | **B** | corroborated by the note `² ἰᾶσθαι.` at the foot — a correction with no marker to key to is not a thing Migne prints |
| `…πον γενόμενος ▯` | `γενόμενος` | `γενόμενος·` | **B** | raised dot printed |
| `…καταδουλωθέντα τῇ ἁμαρτίᾳ ▯` | `ἁμαρτίᾳ` | `ἁμαρτίᾳ·` | **B** | raised dot printed |

⚑ **`τῶν` reverses a working assumption.** Until now every only-in-B token has
been a recovery — the crops lost words, the full page found them. This one is the
opposite: B **supplied the expected article** where the plate has none. A token
present only in the full-page pass is therefore not self-evidently a recovery,
and the only-in-B list may not be applied wholesale.

## leaf842 (col 1625) — two more normalizations by the full-page pass

| item | crop (A) | full-page (B) | **verdict** | evidence |
|---|---|---|---|---|
| `ταπεινὴν ▯ ἐν αὐτῇ τῇ καρδίᾳ` | `γεγομένην` | `γιγνομένην` | **A — `γεγομένην` as printed** | γ-ε-γ-ο-μ-έ-ν-η-ν at zoom; there is no `ιγν`. B normalized to the real word |
| `ὁ Θεὸς ἰδὼν τὴν ▯ ἐκείνην` | `ἀνειδεῖαν` | `ἀνειδίαν ᵉ` | **split: A's letters + B's marker → `ἀνειδεῖαν ᵉ`** | the plate reads α-ν-ε-ι-δ-ε-ι-α-ν, and the superscript ᵉ after it is real |

## leaf844 (col 1629) — ⚑ an item **neither** pass got right

| item | crop (A) | full-page (B) | **verdict** |
|---|---|---|---|
| `παρθενία καὶ ▯` | `ἀκτημοζύνη·` | `αὐτημοσύνη ζ·` | **NEITHER — the plate prints `αὐτημοζύνη`** + a superscript marker + `·` |
| `οὐκ ἔστιν ἐν-/▯` | `ταλλομένου,` | `τελλομένου,` | **A — `ταλλομένου`** |

`αὐτημοζύνη` is the sharpest item in the batch. **A read the ζ and missed the
αὐτη-; B read the αὐτη- and mistook the ζ for a footnote marker.** Each pass
held half the reading. The foot-of-column note `Leg. ἀκτημοσύνη` corrects *both*
errors at once, which is itself the corroboration: a note correcting two letters
implies a body printing two wrong letters. Later on the same leaf the correct
`ἀκτημοσύνην` stands unremarked.

`ταλλομένου` is a second α-for-ε misprint by Migne, normalized by B.

⚑ **A fifth attestation of the `Πάτρες` crux**, found in passing and not in the
diff at all (both passes read it, so it never surfaced): leaf844 prints
`οἱ Πάτρες` in running text. Register it with 1628 `Πάτρες` and 1632 `Πάτρις`.

## ⚠ leaf843's footnotes — the "uncontested recovery" class was NOT uncontested

The re-harvest note said the footnote class was 8 straight recoveries by B wanting
one confirming look apiece. The look found something else. **leaf843's foot rule
carries FOUR notes and B transcribed only the last:**

> `ᵇ Gen. iii, 17.  ᶜ ibid. 13.  ᵈ II Cor. vii, [?].  ᵉ Psal. xxvii, 9.`

Three of the four were lost by **both** passes. The class is a recovery *class*,
not a recovered *set* — every footnote rule on every leaf of both batches needs
reading in full before chunking, and a marker in the body is not evidence that
its note was captured.

Two further findings on that rule:

- **`ᵈ II Cor. vii, …` — the verse numeral is GONE FROM THE PLATE.** All that
  survives is the top serif of a digit and the following period; the right-hand
  end of this rule is worn. Record it as a lost numeral, not as a reading.
- **`ᵉ Psal. xxvii, 9` — measured, and it is what is printed**, against the
  expectation. Glyph widths (x≈23, v≈23, i≈11 px, against `cxviii` on leaf837's
  well-inked rule where x=24, v=27, i=10–12) fit `xxvii` (5 glyphs, 136 px) and
  not `xviii` (which would measure ~124 px with three final uprights; only two
  are present). ⚠ **But the verse it keys is Ps 18:9 Vulg.** — the plate quotes
  it in both columns on this very leaf (`ἡ ἐντολὴ γὰρ Κυρίου τηλαυγὴς φωτίζουσα
  ὀφθαλμούς` / *Mandatum enim Dei lucidum, oculos illuminans*). Ps 27:9 is
  *Adjutor meus esto*, which is not this text. **Record as a crux — Migne's own
  numeral appears to be wrong. Do not silently renumber it, and do not index it
  to Ps 27 without the flag.**

## Running tally — still no dominant witness

Across the 27 items adjudicated so far: **crop 12 · full-page 13 · neither 2.**
The shapes hold and have gained two: the full-page pass normalizes (`γεγομένην`,
`τελλομένου`, `ὄρεων`, `ἐλάσεις`) **and now also supplies** (`τῶν`); the crop
pass mis-sees isolated words (`μέλων`, `παρακλήσεως`) **and now also
construes-to-correct** (`προεσημηνύσαμεν`, `ἀλλαχοῦ`). Neither may be applied
wholesale in either direction.

## Still not adjudicated

- leaf841: `οὕτως`/`οὕτω` (1).
- leaf842: `οὐκ`/`οὐχ` (line 21) · `ἦλθες`/`ἦλθες·` (line 53).
- leaf843: the 9 lower-value orthographic/punctuation items listed above.
- leaf839: `Β'.`/`Β΄.` — settled as a convention, not read off the plate.

**Before either batch is chunked:** read every foot rule on every leaf of Batches
1 and 2 in full, per the leaf843 finding. That is now the blocking item, not the
word-level queue.
