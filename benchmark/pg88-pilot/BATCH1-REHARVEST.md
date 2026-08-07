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

⛔ **And it is no longer a theoretical caveat: Batch 1 produced its own worked
example.** leaf842 L53 the plate prints `Ἀπὸ ποία, δόξης` and **both passes wrote
`ποίας`**, each reading Migne's comma as a final sigma because the grammar wants
one. Found by eye at 8× while an unrelated item was being checked — no diff,
and nothing downstream of a diff, could have raised it. **Wilson ruled
2026-08-07: ACCEPT AND SHIP, with the caveat stated publicly** rather than buy a
targeted third read. The disclosure is live in `content/editorial-method.md`
§"Where we read the plate ourselves". ▶ Do not quote the 3,239 figure, or any
per-leaf agreement percentage, as if it were a verification rate.

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

⛔ **Every digit in that list is INFERRED, not read** — see "The numbered series is
not read data" at the foot of this file. Note the repo already contradicts itself
here: this line gives leaf840 as `¹ ²` while the resume note gives it as `3 4`,
and `ἀνειδίαν ᵉ` / `ἀκτημοζύνη ζ` are two more guesses at the same illegible
class. The instability was visible in our own files before the pixels were looked
at.

**leaf838's five Greek lines are harvested and plate-verified by me**, closing the
gap where leaf837's Greek broke off mid-clause at `…ἀλλ᾽ οὖν ἱκανὸν ἔσται`:

> σου τῇ δεξιότητι καὶ τὸ βραχὺ παραστῆσαι, κατὰ τὸ, [A]
> Δίδου σοφῷ ἀφορμὴν, καὶ σοφώτερος ἔσται.  [ᶜ Prov. ix, 9.]
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

✅ **ALL CLOSED 2026-08-07** — see "Word-level adjudication CLOSED" at the foot of
this file. The 12 below were settled against the plate, and the pass turned up two
items the diff never surfaced (one of which says the diff itself under-reports).

- leaf841: `οὕτως`/`οὕτω` (1). → **A, `οὕτως`**
- leaf842: `οὐκ`/`οὐχ` (line 21) · `ἦλθες`/`ἦλθες·` (line 53). → **A** · **B**
- leaf843: the 9 lower-value orthographic/punctuation items listed above. → 5 A, 4 B
- leaf839: `Β'.`/`Β΄.` — settled as a convention, not read off the plate. *(still a convention, not a reading)*

**Before either batch is chunked:** read every foot rule on every leaf of Batches
1 and 2 in full, per the leaf843 finding. That is now the blocking item, not the
word-level queue.

---

# Foot rules — Batch 1 read in full (2026-08-06, Opus, 600 dpi plate)

Done for all nine leaves. Three of the nine were wrong, and one of the three is
the most consequential finding of the batch.

## ⚑ THE MARKER SERIES IS A COMPLETENESS GATE — use it on every leaf

PG 88 runs **two independent marker series** at the foot, and neither pass had
noticed:

- **A lettered series `a…z`, CONTINUOUS ACROSS LEAVES**, for scripture and source
  references. It does not restart per leaf or per column; it runs to `z` and
  wraps to `a`.
- **A numbered series `1, 2, …`, ALSO CONTINUOUS ACROSS LEAVES**, for Migne's
  Greek philological corrections. ⚠ **Corrected 2026-08-06, later the same day —
  I first wrote that this series restarts on every leaf. It does not. See
  "How I got the numbered series wrong" below; it is the more instructive half
  of this finding.**

Batch 1's letters, read off the plates: **836** `a` · **837** `b` · **838** `c d` ·
**839** `e f g h i j k l` · **840** `m n o p q` · **841** `r s t u v` ·
**842** `w x y z a` · **843** `b c d e` · **844** `f g`. **Unbroken.**

⚑ **This makes the foot-rule job verifiable rather than merely laborious.** A gap
in the letter sequence is proof of a missed note, and an unbroken run is proof
there are none. It is the first self-checking instrument this pilot has had —
apply it to Batch 2 before chunking, and to every future volume.

## ⛔⛔ leaf838 — `latinOnlyLeaves` is wrong far more seriously than recorded, and **Batch 1 is missing the opening of Doctrina I**

The gate found it. Letters `c` and `d` are unaccounted for between leaf837's `b`
and leaf839's `e`, and the only leaf between them is 838 — the one flagged
Latin-only. Opening pdfPage 839 (**running head `DOCTRINA I.`, columns 1617–1618**,
column numbers read off the plate, not inferred) shows the whole leaf:

1. the five Greek lines already harvested, ending `ἀγῶνα τῆς κατὰ Χριστὸν …`,
   then *Sequentia non habentur in Græco.* — **the notice is true, but it covers
   only the Epistle's remainder**;
2. a long Latin-only stretch, `Quale enim fuerit sancti viri propositum…` — this
   is what the flag was describing, and for this stretch it is right;
3. **then the work's Greek title block**: `ΤΟΥ ΕΝ ΑΓΙΟΙΣ ΠΑΤΡΟΣ [ΗΜΩΝ ΔΩΡΟΘΕΟΥ] /
   ΔΙΔΑΣΚΑΛ[ΙΑΙ] / Περὶ ἀποτ[αγῆς]`, with its Latin twin *SANCTI DOROTHEI …
   DOCTRINA I … De renunciatione*;
4. **then Doctrina I opens in Greek and runs ~16 lines to the foot of the
   column**: `Α'. Ἐν ἀρχῇ ὅτε ἐποίησεν ὁ Θεὸς τὸν ἄνθρωπον, [B] ἔθετο αὐτὸν ἐν τῷ
   παραδείσῳ [καθὼς λέγει ἡ θεία ἁγία Γραφή] κοσμήσας ἁπάσῃ ἀρετῇ…` down to
   `…καὶ ἐξέπεσε τοῦ κατὰ φύσιν, καὶ ἦν ἐν τῷ παρὰ-`, which is where leaf839's
   Greek picks up.

**None of §3 or §4 is in Batch 1.** That is the Greek title of the work and the
first section of the first Doctrina — **the beginning of the text the batch
exists to carry.** Chunked as it stands, Batch 1 would ship a work that starts
mid-sentence in §2 of Doctrina I.

Both band letters are visible on the leaf (`[A]` at the head, `[B]` in Doctrina
I's opening), so the re-harvest gets its bands for free.

⚠ **`latinOnlyLeaves` needs to die, not be patched.** It has now been wrong on
its only tested leaf in two different ways — first "no Greek at all" (corrected
2026-08-05), now "five lines of Greek" when the true answer is *five lines, then
Latin, then a title block and sixteen more lines*. A leaf is not Latin-only or
Greek-only; **Greek can stop and start again on the same leaf, because a work can
END and another BEGIN on it.** The flag needs per-run spans, not a boolean, and
**leaf 970 still carries it unchecked.**

▶ **Job: re-harvest leaf838's full Greek (Sonnet, full-page, blind).** It is one
leaf and it is the head of the work. **Segments are rendered and waiting** at
`raw/pg088/leaf838-reharvest/` (8 segs, 600 dpi, 3378×5855 trimmed) —
reproduce with:

```
python3.11 scripts/pg-page-segments.py --pdf raw/pg088/088.pdf \
  --map data/pg-column-maps/pg088.json --leaves 838 --out raw/pg088/leaf838-reharvest
```

⚠ The transcriber must be told the leaf has **three runs** (Greek · Latin ·
Greek) and that run 3 opens a NEW WORK with its own Greek title block — a
transcriber told "follow the Greek column" and nothing else will stop at the
*Sequentia* notice, which is exactly what happened the first time.

### The harvester no longer skips a "Latin-only" leaf (changed 2026-08-06)

`pg-page-segments.py` **renders every leaf and warns**, instead of skipping on
`latinOnlyLeaves`; the manifest now carries the map's claim as `latinOnlyClaim`
so the transcriber can see the claim and refute it. Rendering a genuinely
Latin-only leaf costs eight images; skipping a partly-Latin one costs text, and
costs it invisibly. **This is the full-page ruling's own argument reapplied — a
defect that must be RECOGNISED will eventually be missed** — and it is the
mechanism, not the map entry, that lost the opening of Doctrina I. Reversible in
one line if Wilson wants the skip back.

## ✅ All nine Batch 1 column anchors are now plate-read

Read off the running heads in one pass: **836** 1613 · **837** 1615 · **838**
1617 · **839** 1619 · **840** 1621 · **841** 1623 · **842** 1625 · **843** 1627 ·
**844** 1629. Every one **matches the Viterbi reconstruction exactly**, so the
map's own arithmetic is confirmed across the batch and `anchorsPlateVerified`
goes 13 → 20 entries. This retires the harvester's *"printed column N is
INTERPOLATED — do not cite it without reading the head"* warning for all of
Batch 1, which matters because column anchors are hard rule 1: they are the
citation addresses.

## The other two corrections

- **leaf839** — B's foot-rule list was close but not right. The plate prints
  `ᵏ Jerem. ii. 30.`; B recorded a bare "Jerem. ii" and **lost the verse number**.
  And **note `ʲ` is incomplete ON THE PLATE**: it reads `Jerem. ii,` and the next
  marker follows directly — the numeral never printed. That is a **second
  instance of the leaf843 `II Cor. vii` class**: Migne's own rules carry lost
  numerals, and they must be recorded as lost, never completed from the sense.
- **leaf841** — B recorded only the lettered line `r…v`. **There is a second foot
  line it did not record at all**: a Greek correction note of ~5–6 characters
  whose ink has failed on the plate. Autocontrast + threshold at 600 dpi recovers
  nothing further; it is **unreadable from this scan**. ⚠ Add it to the list of
  source defects wanting a non-Google digitization — it is the **sixth**.

## Confirmed correct as recorded

**836** (`ᵃ Matth. xix, 27.`) · **837** (`ᵇ Psal. cxviii, 96.`, keyed to the
column's last line) · **840** (`ᵐ Psal. lxxix, 2, 3. ⁿ Psal. cxliii, 5.
ᵒ Rom. vii, 19. ᵖ Luc. x, 19. ᑫ Gen. viii, 21.` + `¹ Γρηγόριος. ² ἰᾶσθαι.`) ·
**842** (`w…a` + `¹ ἀναιδείαν.`).

## Two corrections to markers, both settled by the series and not by the glyph

- **leaf838's `ᶜ Prov. ix, 9.`** — the head harvest recorded this marker as `e`.
  The plate prints **`c`**, and the sequence requires it.
- **leaf844's Greek note marker is `⁷`.** B read the glyph as a Greek zeta and
  flagged its own uncertainty. **My first reading of the glyph was `7` and it was
  right; I then talked myself out of it with a wrong model of the series and
  wrote `¹`. Restored to `7`** — see below.

---

# ⚠ How I got the numbered series wrong, and what caught it (2026-08-06)

I asserted above that the numbered series **restarts on every leaf**. It does
not: **it is continuous across leaves, exactly like the lettered one.**

The sequence, re-read at high zoom after Batch 2 contradicted me:

| leaf | note | glyph as printed | № |
|---|---|---|---|
| 839 | `προεμηνύσαμεν.` | thin vertical stem | **1** |
| 839 | `ἀλλαχοῦ.` | small solid rectangle | **2** |
| 840 | `Γρηγόριος.` | rounded blob, **not** a stem | **3** |
| 840 | `ἰᾶσθαι.` | diagonal + stem | **4** |
| 841 | *(ink failed, unreadable)* | — | **5** |
| 842 | `ἀναιδείαν.` | solid oval, **not** a stem | **6** |
| 844 | `Leg. ἀκτημοσύνη.` | top flag + stem, no descender | **7** |
| 845 | `Leg. σχήματος.` | (Batch 2 read it as 8) | **8** |

No gaps. leaf843 carries no numbered note, and leaf841's unreadable one is
accounted for as №5 — so **the numbered series is a second completeness gate**,
independent of the lettered one, and it independently confirms that leaf841 has
exactly one note and that I did not miss any.

**How the error was made, because it is a clean instance of a named failure.**
I read leaf839's two markers correctly as `1` and `2`. I then read leaf840's two
markers *at low zoom* and wrote them down as `1` and `2` as well — because a
per-leaf restart was the hypothesis I had already formed from leaf839. From
those four readings I concluded "restarts every leaf", and then used that
conclusion to **override a glyph I had actually read correctly** on leaf844.
The model was built out of the reading it was then used to correct. Circular,
and it ran in the direction of tidiness both times.

⚑ This is **rulebook 7a′ in a new dress** — *a crux that describes a repair does
not make it honest; a logged column is not a checked column.* Add the numbered-
series case to it: **an inference from a series is only as good as the series
model, and a series model built from unzoomed readings is not evidence — it is
the same reading twice.** Where a series contradicts a glyph, **re-read the
glyph at zoom before believing the series.** I did that here only because
Batch 2 forced it.

**What caught it: the batch seam.** leaf845 records a note numbered `8`, which
no per-leaf restart can produce. Nothing internal to Batch 1 would ever have
flagged this — every leaf was individually consistent with my wrong model.
▶ **Read the two series ACROSS the batch boundary, not within a batch.**

## Batch 2 — first result from the gate

**leaf845's lettered marker is `ʰ`, not `ᵇ`.** The gate predicted `h` (Batch 1
ends at 844 `f g`) and the plate prints a clean **h** — ascender plus shoulder.
`raw/pg088/batch2-assembled/leaf845.txt` records it as `ᵇ Apoc. xiv, 16.`

**The chain holds across the seam: … 844 `f g` → 845 `h` …**, and the gate's
first act on new material was to catch a real error in it. ⚠ This class matters
more than an ordinary typo: **the marker letter is what keys a note to its place
in the body**, so a wrong letter silently breaks the body↔note pairing that
hard rule 9's scripture index is built on.

▶ **Still to do: leaves 846–864's foot rules** (Batch 2 records them under
`FOOTNOTES-SKIPPED:`, not under a "Footnote block" heading — grep for both).
Expect `i, j, k…` from 846 and numbered notes from `9`.

---

# Word-level adjudication CLOSED — the last 12 items (2026-08-07, Opus, 600 dpi plate)

All 12 outstanding items on leaves 841, 842 and 843 are settled against the
plate. **The Batch 1 word-level queue is now empty.** Two further items were
found that the queue had never surfaced, and one of them is the most important
result of this pass.

## The 12

| leaf | item | crop (A) | full-page (B) | **verdict** | evidence |
|---|---|---|---|---|---|
| 841 | L43 | `οὕτως` | `οὕτω` | **A** | final sigma clearly printed after ω |
| 842 | L21 | `οὐκ` | `οὐχ` | **A** | κ, no descender — see the fount note below |
| 842 | L53 | `ἦλθες` | `ἦλθες·` | **B** | an ano teleia is printed, at mid-height, between `ἦλθες` and `αἰσχύνην` |
| 843 | L7 | `Οὕτως` | `Οὕτω` | **A** | final sigma printed |
| 843 | L23 | `καταστάσεις` | `κατάστασις` | **B** | `-σις`; Latin *quo status noster pervenerit*, singular |
| 843 | L26 | `Ὥσπερ` | `Ὅπερ` | **A** | capital Ω with rough breathing, unmistakable at zoom |
| 843 | L28 | `θέλημα.` | `θέλημα·` | **A** | the round dot sits on the BASELINE; the ano teleia in this fount sits at mid-height (control: `Μάρκος ·` eight lines below) |
| 843 | L32 | only-A `τις` | — | **B** | nothing stands between `δύναται` and `ὑποταγῆναι` |
| 843 | L34 | `Ἄνευ` | `ἄνευ` | **B** | lowercase α, at the x-height of the following ν ε υ |
| 843 | L35 | `Οὖν` | `Οὐ` | **A** | ν clearly printed; Latin *Igitur si…* |
| 843 | L54 | `οὐκ` | `οὐχ` | **A** | κ, no descender; χ of `εὐχερῶς` three letters later descends well below baseline |
| 843 | foot | *(none)* | `Psal. XXVII, 9.` | **B** | uncontested class — the crop pass transcribed no footnote blocks at all. Already recorded as a crux (it keys a Ps 18:9 quotation); **do not renumber, do not index to Ps 27 unflagged** |

## ⚑ The fount note that makes κ/χ decidable — and a systematic bias it exposes

**In this fount κ and χ are BOTH x-shaped and have no vertical stem.** That is why
they are confused. The discriminator is not the body of the letter:

> **χ descends below the baseline. κ does not.**

At 600 dpi that is unambiguous, and there is usually a control on the same line
(842 L21 has `χαρῆναι` four words along; 843 L54 has `εὐχερῶς` immediately after).

⚠ **The full-page pass got `οὐκ` → `οὐχ` wrong on two different leaves.** That is
an instrument bias, not a slip, and it means `οὐκ`/`οὐχ` must stop being treated
as an orthographic toss-up: **it is a readable glyph, and the plate decides it.**
Note also that B's `οὐχ` before `οἶδε` and before `εὐχερῶς` — both smooth
breathings — is not even a smoothing toward correctness. It is simply wrong.

## ⚑ The full-page pass MANUFACTURED A NEGATION

leaf843 L35. The plate prints `ἀρετήν. **Οὖν** διὰ τῆς συντριβῆς…`, Migne's Latin
prints *Igitur si per dolorem cordis intelligit quis mandata Dei…*. **B dropped
the ν and produced `Οὐ`** — turning an inferential particle into a negative at
the head of the sentence that carries the paragraph's whole conclusion.

This is the **polarity class appearing in TRANSCRIPTION, upstream of translation**.
Everything in `reference_polarity-sweep-and-silent-repairs` assumes the negation
was lost between a correct Greek text and the English. Here it would have been
*created* before any translator saw it — and a translator working from that text
would have rendered the inversion faithfully, with nothing in the English to
betray it. ▶ **Add κ/χ and `Οὖν`/`Οὐ` to whatever the transcription QA becomes.**

## ⚑ The crop pass INSERTS TOO — and it inserts what the Latin supplies

leaf843 L32: A reads `οὐ δύναταί τις ὑποταγῆναι`; the plate has no `τις`. The
facing Latin reads *Neque enim parere **quisquam** divinæ justitiæ… potest*.

So the standing shape needs correcting again. It was: *full-page normalizes, crop
invents at edges.* Then leaf840 showed the full-page pass inserting (`τῶν`). Now
the crop pass inserts as well — and **the insertion is toward the sense the Latin
supplies**. ⛔ Sharpened rule:

> **Both witnesses insert, and both insert toward the Latin. So the facing Latin
> is a REQUIRED adjudication step and is NOT evidence that the Greek prints a word
> the Latin has** — Migne's translator supplies subjects the Greek leaves implicit,
> and that is precisely the gap a reader hallucinates into.

## ⛔⛔ THE RESULT OF THIS PASS: agreement between the two witnesses is NOT evidence

leaf842 L53. Both passes print `Ἀπὸ ποίας δόξης`. **The plate prints
`Ἀπὸ ποία, δόξης`** — an alpha, then a comma. Verified at 8× against the final
sigma of `δόξης` and `εἰς` on the same line: the ς is a two-part glyph with an
upper bowl at x-height; the mark after `ποία` is a thin tapered stroke starting
at the baseline and descending. They are not the same glyph.

Both readers dropped Migne's comma and supplied a sigma, because `ποίας δόξης`
is what the grammar wants. **They made the same repair, silently, and agreed.**

▶ **The diff-based adjudication queue is structurally blind to this.** It can
only ever surface DISAGREEMENTS. A shared normalization is invisible to it, and
worse, it reads as a confirmed reading — two independent witnesses concurring.
Every "3,239 words agreed by two independent passes" figure in this file needs
that caveat: agreed ≠ verified.

⚠ **This is rulebook 7a′ once more, one level up.** A logged column is not a
checked column; a crux that describes a repair does not make it honest; and now:
**a word two passes agree on has not been read — it has been read twice by
readers with the same bias.**

## ⚑ The `accentOnly` bucket is not safe on this corpus

leaf843 L26 never entered the queue: A reads `τῆς ἐχθρᾶς τοῦ Θεοῦ ὑπερηφανίας`,
B reads `τῆς ἔχθρας`. The differ is accent POSITION only, so the diff bucketed it
out — but `ἐχθρᾶς` is the adjective (gen. fem., agreeing with `ὑπερηφανίας`) and
`ἔχθρας` is the noun. **A is right**, and Migne's Latin settles it: *superbiam…
ac Deo **nimis infensam*** — an adjective agreeing with the pride, not a second
noun. The pride hostile to God, not the enmity of God.

▶ **Stop auto-bucketing `accentOnly`.** In Greek, accent position distinguishes
parts of speech, and this corpus is full of the pairs that do it.

## Running tally — 39 items, and still no dominant witness

| | crop (A) | full-page (B) | neither |
|---|---|---|---|
| first 27 | 12 | 13 | 2 |
| these 12 | 7 | 5 | 0 |
| **queue total (39)** | **19** | **18** | **2** |
| off-queue finds | +1 (`ἐχθρᾶς`) | 0 | +1 (`ποία,`) |

Dead even after 41 readings. **Neither pass may be applied wholesale in either
direction**, and the two off-queue items say the diff never had the whole story.

## What this closes and what it opens

✅ **CLOSED: the Batch 1 word-level queue.** Nothing outstanding.
⛔ **OPENED, and it is Wilson's call:** if two agreeing witnesses can share a
silent repair, then the ~3,239 "agreed" words of Batch 1 are not verified, only
concurred-on. Options are (a) accept it and ship, recording the caveat on the
method page; (b) a targeted third read of the highest-risk classes only
(punctuation adjacent to case endings, κ/χ, accent-position pairs); (c) a full
third witness. (b) is the proportionate one, and `ποία,` was found inside a class
(a comma mistaken for a final sigma) that a targeted pass could actually cover.

---

# leaf838 re-harvested — Doctrina I's opening is recovered (2026-08-07)

One Sonnet agent, full-page, blind, 8 segments at 600 dpi, ~131k tokens.
Result at `raw/pg088/leaf838-reharvest/leaf838.txt`. **The gap that blocked
chunking is closed:** Batch 1 no longer begins the work mid-sentence.

## What came back

- **Run 1** — the two-line tail of the Epistle, **plus a three-line FULL-WIDTH
  Greek paragraph** introducing Dositheus (`Πρότερον δὲ, ἐν συντομωτέρῳ, καὶ τὰ
  κατὰ τὸν μακάριον Δοσίθεον…`). The crop era had none of it. This is failure
  class 2 from `pg-page-segments.py`'s own docstring — a line Migne sets full
  width, where the Greek outran its Latin — caught exactly as the full-page
  method was adopted to catch it.
- **Run 2** — the italic notice `Sequentia non habentur in Græco.` only, as scoped.
- **Run 3 — THE RECOVERY.** The new work's Greek title block
  (`ΤΟΥ ΕΝ ΑΓΙΟΙΣ ΠΑΤΡΟΣ ΗΜΩΝ ΑΒΒΑ ΔΩΡΟΘΕΟΥ / ΔΙΔΑΣΚΑΛΙΑ Α'. / Περὶ ἀποταγῆς.`)
  and 13 lines opening Doctrina I, running to the foot of the column and ending
  mid-clause at `…καὶ ἦν ἐν τῷ παρὰ`, where leaf839 picks up.

## Two corrections applied on adjudication — both against the transcriber

### 1. The marker is `ᶜ`, not `ᵉ` — three independent witnesses

The agent recorded `ᵉ Prov. ix, 9.` It is **`c`**.

- **The glyph.** At 22× the marker is a crescent whose aperture breaks out to the
  right edge at mid-height. An `e` would show an enclosed upper bowl over a bar.
- **A control in the same line, same weight.** The Latin body reads `…erit ᶜ.` —
  the `e` of *erit* sits three glyphs from the marker and is plainly a different
  letter: closed bowl, aperture at lower right.
- **The series.** Batch 1's lettered run is `a · b · cd · e-l …` — leaf836 `a`,
  837 `b`, 838 `c d`, 839 `e…`. An `e` here would collide with 839's.

⚠ And the agent's own output listed **`e` then `d`** — descending. **A note list
that runs backwards is self-refuting; treat it as a read-the-glyph trigger.**

### 2. `[A]` IS on the leaf — it is the GREEK column's, not the Latin's

The agent found `[A]` in the gutter level with the first line of both columns and
assigned it to the Latin. It belongs to **Greek col 1617**.

> **On this volume the band letter always sits in the GUTTER and always belongs
> to the GREEK column; its SIDE follows the column's parity** — a Greek LEFT
> column's letter FOLLOWS its line, a Greek RIGHT column's PRECEDES it
> (`AUDIT-ANTIOCHUS.md`).

Two same-volume controls read the same day confirm it: **leaf841** (Greek RIGHT)
prints `D` in the gutter *preceding* its line; **leaf842** (Greek LEFT) prints
`B` in the gutter *following* its line. leaf838's Greek is LEFT and the letter
follows the Greek line. Col 1617 also carries no title block above its first
line, and per the Antiochus finding a column's first marginal is `A` unless a
title block occupies the top band. Both corrections are applied in the file.

## ⚑⚑ A NOTE IS NOT ALWAYS AT THE FOOT — and this breaks the obvious gate

**leaf838's `ᶜ Prov. ix, 9.` sits MID-PAGE**, under the short head-of-column
paragraph and *above* the `Sequentia` notice, because that is where the Greek run
ends. It is not on the foot rule at all.

⛔ I had begun a mechanical sweep of Batch 2 that measured ink at the BOTTOM of
each page to decide whether a leaf carries notes. **It would have missed this
class entirely, on every leaf where a work ends mid-page** — which is exactly
where new notes cluster. The detector also found no horizontal rules anywhere in
Batch 2, because **in this volume the "foot rule" is a block of small type after
a gap, not a printed line.** Both assumptions were wrong and neither was checked.
▶ **Read the whole page for notes, not the foot of it.** Any completeness sweep
must scan the full column height.

## Corroboration, and a better test than the one used

The agent independently hit the x-shaped kappa and resolved it correctly — but it
resolved it **by sense** ("the resulting words are the only ones that make
sense"), which is the weak method and the one that manufactures conformations.
▶ Put the descender test in the transcription prompt: **χ descends below the
baseline, κ does not.** It is a glyph test, and it is decidable at 600 dpi.

Also good and to be kept: the agent flagged `Gen. II, 15.`'s numeral as a
**glyph-shape** ambiguity (Roman `II` vs Arabic `11`) while stating the numeral
IS fully printed — correctly distinguishing that from the lost-numeral class,
which must never be completed from sense.

## ⚠ Still open on this leaf

- `latinOnlyLeaves` is still a boolean and still wrong. **Leaf 970 unchecked.**
- Run 1 quotes Prov 9:9 *in the Greek* (`Δίδου σοφῷ ἀφορμήν, καὶ σοφώτερος
  ἔσται.`) yet the agent reports no inline marker in the Greek and places the `ᶜ`
  in the Latin body only. Whether Migne keys this note from the Greek as well is
  unverified — it bears on how `index-work-pg.mjs` locates the citation.

---

# ⛔⛔ THE NUMBERED SERIES IS NOT READ DATA — retire it as a gate (2026-08-07, Opus, 600 dpi plate)

Found while starting the Batch 2 foot-rule read. **Every numbered marker on PG 88
I have examined is a solid inkblot with no counter.** The digits `1 2 3 4 5 6 7 8`
in the resume note are not readings. They are a sequence that was assumed and
then fitted onto blobs.

## What was measured

Each marker was rendered from the PDF at 600 dpi and printed as a pixel map, so
this is not an impression at a glance.

| leaf | marker | what the pixels show | verdict |
|---|---|---|---|
| 839 | correction #1 | narrow vertical stroke, ~8 px wide, no counter | `1`? `l`? `i`? **not separable** |
| 840 | correction #1 | solid rightward wedge, wide at top, no counter | **unreadable** |
| 842 | correction | **completely solid oval, no counter anywhere** | **unreadable** |
| 844 | correction | solid diagonal wedge, no counter | `7`? `1`? **not separable** |
| 845 | note marker | **completely solid blob, no counter** | **unreadable** |
| 845 | body marker | blob, one partial counter low | `8` or `6`, **not separable** |

Not examined: 839 #2, 840 #2, and 841 — whose correction note is the failed-ink
line already logged as the volume's 6th source defect.

## ⚑ Why the LETTERED series survives and the numbered one does not

This is the generalisable part, and it should govern every PG plate read:

> **Letters are distinguished by SILHOUETTE — ascenders, descenders, hooks,
> crossbars. Digits are distinguished by COUNTERS. When a plate over-inks, the
> counters close first and the silhouette survives.**

Measured both ways today. leaf845's `ʰ` reads cleanly (ascender + shoulder).
leaf838's `ᶜ` was decidable at 22× against the `e` of *erit* as a same-line
control. leaf844's `ᶠ` is **also a solid blob** — and is still legible, because
its hook-over-stem silhouette is unmistakable. The digits have no such recourse.

▶ **So the lettered `a…z` gate stands. The numbered gate does not.**

## ⚠ And it undoes yesterday's correction, from inside the note that made it

The resume note records the numbered series as a hard completeness gate — *"a gap
in either is proof of a missed note; an unbroken run is proof there are none"* —
and records the correction that established it:

> I first wrote that the numbered series restarts per leaf … **only leaf845's `8`
> could contradict it.** … rulebook 7a′ in a new dress — an inference from a
> series is only as good as the series model … **where a series contradicts a
> glyph, re-read the glyph at zoom before believing the series.**

**leaf845's `8` is a solid oval with no counter.** The model was corrected on the
strength of a glyph that cannot be read, in the same paragraph that lays down the
rule against exactly that. Rulebook 7a′ was written and violated in one breath.

⛔ **Do not now flip back to the per-leaf-restart model.** That would be the same
error facing the other way. The correct statement is that **the numbered series
cannot adjudicate anything on PG 88** — an unbroken run of illegible blobs reads
as unbroken whatever it says, so it can neither prove nor disprove a missed note.

## What changes

1. **Demote the numbered series from a gate to an observation.** Record that a
   correction note exists and transcribe its CONTENT (`Leg. σχήματος.`,
   `ἀναίδειαν.`, `ἀκτημοσύνη.` — the content is set in normal type and is
   perfectly legible). **Do not assign it a digit.**
2. **Un-assert leaf844's `⁷`.** The resume note has it as a hard-won correction
   over B's `ζ`. Neither is readable; it is a solid wedge. Both readings should
   be withdrawn rather than one preferred.
3. **Every existing digit in the notes is INFERRED, not read** — mark them so
   wherever they appear.
4. **The lettered series keeps its job**, and it has already earned it twice: it
   caught leaf838's missing Doctrina I, and it caught leaf845's `ᵇ`-for-`ʰ`.
5. ▶ **A correction note's marker is a place to write "marker illegible", which
   is a fact about the source** — the same class as leaf841's failed-ink line and
   leaf843's worn-off `II Cor.` numeral. It is not a gap to be filled from the
   sequence. **Never complete a marker from its series** — that is the marker
   twin of the standing rule against completing a lost numeral from the sense.

## Batch 2 foot rules — where the read actually stands

Started, not finished. Confirmed by eye on whole pages (not the foot alone):

- **leaf847 — no notes. Confirmed**, text runs to the page bottom, blank + watermark below.
- **leaf848 — no notes. Confirmed** against the untrimmed page bottom rendered straight from the PDF.
- **leaf845** — `ʰ Apoc. xiv, 16.` confirmed `h`, plus the correction note `Leg. σχήματος.` whose marker is illegible (above). Both were in the record; the marker was honestly hedged there and should now be recorded as illegible outright.

⚠ **A first pass at a mechanical gate failed and is recorded so it is not retried:**
measuring ink at page BOTTOMS misses every mid-page note (leaf838's sits above the
`Sequentia` notice), and a search for horizontal RULES finds nothing, because in
this volume the "foot rule" is a block of small type after a gap, not a printed
line. A line-height detector also breaks on heavily-inked leaves — it resolved
leaf843's ~56 lines as 12, because the rows never fall below threshold.

▶ **What does work: a whole-page thumbnail read to LOCATE note blocks, then a
600 dpi crop to READ them.** Note blocks are visually obvious as a separate mass
of small type; the eye finds them where statistics did not.

▶ **Still to do: 846, 849–864.** The lettered run so far is `… 844 f g · 845 h ·
846 i j k l m n · 850 o p q r …` with 847/848 genuinely carrying none.

---

# Batch 2 foot rules — THE SWEEP, 849–864 (2026-08-07, Opus, direct)

Run from `BATCH2-FOOTRULE-RUNBOOK.md`, method unchanged: contact sheet to LOCATE,
600 dpi crop to READ, `glyph` pixel map to ADJUDICATE any marker before asserting
it. **All sixteen leaves are done.** Every leaf was looked at whole, not at its
foot only.

## Result in one line

The crop-derived records were wrong on **five** of the sixteen leaves, and wrong
in the direction that matters: **they under-report.** Three leaves lost notes
entirely (851 lost its only one; 850 lost two of six; 860 lost three of seven),
and two lost verse numbers to a misread digit. **No leaf recorded a note that
does not exist.** The crop never invented an apparatus; it only ever clipped one.

## What each leaf actually carries

| leaf | notes | change from the record |
|---|---|---|
| 849 | none | — (checked at 600 dpi: work boundary sits low on this page) |
| 850 | **6** | **+2** — `[illeg] Psal. xxiv, 18.` · `[illeg] Psal. cxiv, 6.` |
| 851 | **1** | **+1** — record said none. `[illeg] I Cor. xiii, 4, 5.` |
| 852 | 1 + heading | marker is NOT `10`; it is illegible |
| 853 | 5 | **`Dan. xiv, 36` and `ibid. 37`**, not 56/57 |
| 854 | none | confirmed |
| 855 | **3** | **+2** — `ᵃ Gen. vi, 3.` `ᵇ Gen. ii, 26.` `ᶜ Gen. xxvi, 14, 13.` |
| 856 | 2 | confirmed |
| 857 | none | confirmed |
| 858 | 2 | confirmed |
| 859 | 3 + VL note + 2 editorial footnotes | **all of it transcribed for the first time** |
| 860 | **7** + VL block | **+3**, and `Prov. xv` not `xxx`, `Rom. viii, 35` not 55 |
| 861 | none | confirmed (record admitted clipping) |
| 862–864 | none | confirmed |

## The three gaps in the lettered run — all three closed

- **`z → d` (a, b, c): CLOSED on leaf855.** The series wraps past `z` and
  restarts there. The record had a single clipped fragment, `"4, 13."`, which
  was the tail of the third note.
- **`g → k` (h, i, j): CLOSED on leaf859**, exactly where the runbook predicted.
  All three sit on one line above the `VARIÆ LECTIONES.` block.
- **`r → u` (s, t): the notes are FOUND, the markers are NOT READABLE.** Three
  notes stand in that span — leaf850 ×2 and leaf851 ×1 — and every one of the
  three markers is a solid blob. No note is missing. See the arithmetic below.

**The full run, both cycles:**

    844 f g · 845 h · 846 i j k l m n · 850 o p q r [·][·] · 851 [·] · 853 u v x y z
    855 a b c · 856 d e · 858 f g · 859 h i j · 860 k l m n o p q · 861-864 none

## ⚠ The one thing this sweep could not settle: seven notes, six letters

846 ends at `n`; 853 begins at `u`. That leaves `o p q r s t` — **six** letters.
Between those leaves stand **seven** notes: six on leaf850 and one on leaf851.
The first four of leaf850's are legibly `o p q r`. So **one of the remaining
three is not in the lettered series**, and none of the three can be read.

The likeliest account is that leaf850's sixth marker is the numbered series —
its pixel map shows two stacked ENCLOSED counters, which is an `8` rather than
an `s`, whose notches should open right then left. That would give leaf850
`o p q r s` plus one numbered note, and leaf851 `t`, and everything balances.

**It is recorded as an open gap, not as that answer**, because over-inking closes
an `s`'s mouths into exactly the shape observed, and because the account is
reached from the series rather than from the glyph — which is the move rule 7
exists to forbid. What is asserted is only what was measured: three illegible
markers, and one more note than there are letters to hold them.

## Two new cruces for whoever chunks this work

1. **leaf859 `ⁱ Psal. cx, 18.`** — the `18` is certain (two stacked bowls with a
   waist; checked at 5× and by pixel map) and `cx,` is unambiguous. **Ps. cx
   (Vulg.) has ten verses.** The reference as printed cannot resolve. Same class
   as leaf843's `ᵉ Psal. xxvii, 9`: record it, check what the body quotes at
   marker `i`, and log the mismatch. **Do not renumber.**
2. **leaf860 `ᵐ Psal. xxxiii, 2.`** — read, not inferred, and checked at 8×
   against `9`. Flagged only because its neighbours run 13/14/15 and this
   stretch is the sort that quotes Ps. xxxiii, 9. Check the body; if they
   disagree it is a crux, not a correction.

## ⚑ Fount findings — durable, and both were needed today

**`3` and `5` are near-identical in this fount, and the discriminator is which
side the top bar turns down on.** A `5` has a flat top bar with its vertical on
the LEFT; a `3` has a flat top whose stroke turns down on the RIGHT into an
upper bowl. Both stand side by side in leaf859's `pag. 351 n. 52`, which is what
made the reading safe. **This is what the retired crop pass got wrong twice** —
leaf853's `Dan. xiv, 36` and `ibid. 37` were recorded as 56 and 57.

**`2` has a CLOSED upper loop and a detached horizontal base, and reads as `9`
at low magnification.** A `9` descends below the baseline and has no base
stroke. Measured on leaf860's `Psal. xxxiii, 2.` at 8×.

Both are the same lesson in a new place: **the digits of this fount are decided
by one stroke, and one stroke is not visible until you magnify.** The letters
were never the problem — every lettered marker read today read cleanly or was a
featureless blob, with nothing in between.

## The marker rule held, and held in both directions

Of the markers examined: **every lettered marker was either plainly legible or a
featureless blob** — `o p q r v x y z a b c d e f g h i j k l m n p q` all read
by silhouette at 600 dpi, and the six blobs surrendered nothing at any
magnification. **Every numbered marker was a blob**, without exception:
leaf850 ×1, leaf851 ×1, leaf852 ×2 glyphs, leaf859 ×4 glyphs, leaf860 ×2. Not
one counter among them.

One letter was recovered from a blob and it is worth naming how: **leaf853's
first marker is `u` because its silhouette keeps two separate ink masses at the
top** (cols 17–25 and 31–42) that merge from row 38 down — a filled-in `u`,
open above. That is silhouette evidence, not series evidence, and it is the only
blob today that gave any up.

## What this says about the crop pass, now that both are measured

Batch 1's adjudication found the two witnesses failing in opposite directions —
full-page NORMALISES, crop INVENTS AT EDGES. **The apparatus adds a third
asymmetry, and it is not symmetric at all: on notes the crop only ever LOSES.**
Five leaves' records were wrong; all five were short. A four-segment crop cannot
see a note that wraps to a second line at the left margin (leaf860's `ᵠ`), cannot
see past its own right edge (leaf850's last two), and cannot see a block it did
not enclose (leaf851's only note). **A note is not a word: it lives at the page's
edges by design, which is exactly where a crop is blind.**

---

## ⛔⛔ THE FINDING THAT OUTRANKS THE SWEEP: PG 88's NOTES KEY TO THE LATIN, AND THE GREEK CARRIES NO MARKER AT ALL

Found while scoping the chunk, 2026-08-07, immediately after the sweep. **This
governs how Dorotheus can be chunked, and it was not known in this form.**

**No superscript marker appears anywhere in the Greek running text of any leaf
transcribed so far** — not in Batch 1, not in Batch 2, not in leaf838's
re-harvest. Every one of Migne's lettered notes keys to a superscript letter in
the **LATIN** column. Five transcribing agents said so independently and
unprompted, on five different leaves:

- leaf836 — *"No footnote-marker superscript is visible on the Greek text at
  `Ἰδοὺ ἡμεῖς…`; the Latin carries superscript `ᵃ` on `te`."*
- leaf837 — *"No footnote-marker superscript is visible on the Greek text
  `Πλατεῖα ἡ…`; the Latin carries superscript `ᵇ` on `nimis`."*
- leaf838 (re-harvest, under its own heading `INLINE FOOTNOTE MARKERS IN THE
  GREEK TEXT`) — *"None. The two superscript markers found on this leaf both key
  to the LATIN column's text, not the Greek."*
- leaf845 — *"a scripture citation keyed to a superscript `b` in the Latin body
  text (after `dominantium Dominus ᵇ`)."*
- leaf846 — *"all Latin scripture citations keyed to superscript letters in the
  Latin body text; none of it is Greek."*
- leaf856 — *"two scripture-citation notes keyed to superscript letters in the
  Latin column (not in the Greek body)."*

A grep of the transcribed Greek confirms it mechanically: the only bracketed
tokens in any leaf's body are the four band letters `[A] [B] [C] [D]`.

### Why this matters more than it looks

**Nothing was lost in transcription.** The Greek column has no apparatus keys
because Migne did not put any there. That is a fact about the plate, and it
means the standing worry — that our OCR ate the markers — is answered: there
were none to eat.

**But it also means the Greek chunks cannot carry `[n:]` markers**, and hard
rule 9 builds the scripture index from exactly those. The 43 notes gathered
today are real, located, and now committed at `data/pg-notes/pg088-dorotheus.json`
— and there is nothing in the Greek to attach them to.

**It generalises the leaf838 open question into a rule.** The runbook lists as
item 5: *"Run 1 quotes Prov 9:9 in the Greek, yet the marker was placed in the
Latin body only. Bears on how `index-work-pg.mjs` locates a citation whose text
stands in both columns."* That is not a leaf838 oddity. **It is how the whole
volume is set**, and the question it raises is not about one citation's location
but about whether this work's apparatus is reachable at all without the Latin.

**It converts the Latin twin from a QA instrument into the load-bearing carrier
of the apparatus.** `pg-paired-pilot.md` already rules "no twin, no translation",
on polarity grounds. Dorotheus needs the twin for a second and independent
reason: **the note layer lives there and nowhere else.** PG 88 has no twin yet.

### What this does to the road

The runbook has chunking as item 2, blocked only by the foot rules. The foot
rules are now read — but chunking is **not** thereby a mechanical run. It needs
a decision that has not been made:

> **Where do 43 leaf-keyed notes go, when the text being chunked has no place to
> key them?**

Three options, none of them free, and this is Wilson's call because it touches
hard rule 9:

1. **Chunk manifest metadata.** Chunks carry `notes[]` per column; the
   translating agent places `[n:]` in the ENGLISH from the Latin twin. Matches
   the pipeline already established ("PG notes are harvested from the English —
   a PG work's Greek source has no note layer") and needs no schema change to
   the Greek chunks. **Still needs the twin**, or the translator is placing a
   note by guess.
2. **Harvest the Latin twin first, chunk-aligned, and key the notes there.**
   Correct, expensive, and it is the pilot spec's own logic carried through.
3. **Chunk the Greek now and attach the apparatus later.** Cheapest, and it is
   the option that quietly ships a work whose citations are not indexed —
   precisely what rule 9 exists to prevent ("index from day one", never a
   retroactive pass).

⚠ **Do not pick one of these by starting to write code.** The sweep's whole
value is that the notes are now known; spending it on a chunk that cannot hold
them would be the expensive mistake.

## Bonus, gathered because the plates were already open

**All twenty Batch 2 column anchors are now plate-read**, from the running heads
at 600 dpi: 845→1631 … 864→1669, every one matching the map. `anchorsPlateVerified`
goes **20 → 38**, and the interpolated-column warning is retired for the whole
Batch 2 span, as it already was for Batch 1.

⚑ **leaf863 (col 1667) misprints the running head: the plate reads `S. DOROPHEI
ABBATIS`** — a P where every other leaf has T. Verified at 600 dpi against the
T in `ABBATIS` on the same line. Recorded in the map under `plateNotes`. It is
not a text defect, but **any check that identifies a leaf by grepping its
running head for `DOROTHEI` will silently miss this one.**
