# 9002 — pending TEI patches, stint 0016–0021 (cols 0107C–0123D)

Sites where the plate was read and **our Corpus Corporum Latin diverges from what Migne printed**.
Per `translation-style.md` §"What the English translates — THE PLATE WHERE READ", the English in
these chunks renders **the plate**; the Latin twin must converge on it when the patch pass lands.

Every entry below was read on **BOTH witnesses** (archive `patrologiaecurs06saingoog.pdf`,
PDF page = (col+11)/2; Gallica `ark:/12148/bpt6k54939667`, f = (col+1)/2), corner numbers first.

⛔ **No `[sic:]` is fireable at any of these.** Four of the seven are absences (a lost or added
punctuation mark), which no `[sic:]` can quote at all; the other three accuse a non-word that is
ours, not Migne's. Each becomes a non-issue once the patch lands.

⚑ **All seven are Corpus Corporum's. None is Migne's.** That is the same result the 0000–0005
stint reported on its range, and it is what the class looks like when it is measured.

---

## 1. @0107C — a mark between two clauses that our twin has lost entirely

| | |
|---|---|
| **our TEI** | `si autem de incertis, temere judicant haec judicia prohibet.` |
| **plate** | `si autem de incertis, temere judicant : haec judicia prohibet.` |
| **witnesses** | archive p.59 prints an unambiguous **colon**; Gallica f54 prints a single **mid-height dot** — the upper point of the same colon, its lower point under-inked. A period would sit on the baseline; this does not. |
| **class** | Corpus Corporum dropped a sentence-internal mark |
| **marker after patch** | none. Nothing is defective on the plate. |

The English carries a colon: *"they judge rashly: these judgments he forbids."* ⚠ **This is the one
place in the range where my punctuation band test reports a mismatch against the twin** (band
`[0107C]`, colons 2 vs 3), and it is expected: the extra colon is the plate's. It should clear the
moment the patch lands. Chunk 0016, second paragraph.

## 2. @0116B — `vocure` for `vocare`, a non-word in our file

| | |
|---|---|
| **our TEI** | `*Non enim veni vocure justos.*` |
| **plate** | `*Non enim veni vocare justos.*` |
| **witnesses** | archive p.63 **and** Gallica f58, both clean at normal letter spacing |
| **class** | Corpus Corporum corruption (a → u) |
| **marker after patch** | none |

The English renders *vocare*: "For I am not come to call the just." ⚑ This is a lemma from
Mt 9:13, so had the corruption stood, the 7a″ collation would have reported a Vulgate divergence
that does not exist — the class launch-brief §8a warns of (`judicabit`→`judicavit` on 9003), met
in the wild. Chunk 0019.

## 3. @0118A — `neguitiam` for `nequitiam`, a non-word in our file

| | |
|---|---|
| **our TEI** | `neguitiam ejus supprimit Dominus, dicens` |
| **plate** | `nequitiam ejus supprimit Dominus, dicens` |
| **witnesses** | archive p.64 **and** Gallica f59 |
| **class** | Corpus Corporum corruption (q → g) |
| **marker after patch** | none |

The English renders *nequitiam*: "the Lord suppresses his wickedness". Chunk 0020.

## 4. @0119A — a spurious full stop our twin has added before Migne's colon

| | |
|---|---|
| **our TEI** | `quo dictum est.: *In via gentium ne abieritis,*` |
| **plate** | `quo dictum est : In via gentium ne abieritis,` |
| **witnesses** | archive p.65 **and** Gallica f60 — both print a colon and nothing else |
| **class** | Corpus Corporum **added** a mark. Note the direction: the digitization does not only lose punctuation. |
| **marker after patch** | none |

The English prints one colon. Chunk 0020.

## 5. @0119B — a full stop where Migne prints a comma

| | |
|---|---|
| **our TEI** | `Beel ipse est Bel, Zebub, musca. etc., *usque ad* vir muscarum` |
| **plate** | `Beel ipse est Bel, Zebub, musca, etc., usque ad vir muscarum` |
| **witnesses** | archive p.65 **and** Gallica f60 |
| **class** | Corpus Corporum altered a mark |
| **marker after patch** | none |

⚑ Worth flagging for the `usque ad` axis: with the twin's full stop, the `etc.,` that licenses the
splice formula looks stranded after a sentence break. On the plate the whole run is one comma-joined
clause and the formula reading is unambiguous. The English renders it "as far as". Chunk 0020.

## 6. @0122D — `Respodens` for `Respondens`, a non-word in our file

| | |
|---|---|
| **our TEI** | `VERS. 25.-- *Respodens Jesus.* Respondens tacitae objectionis` |
| **plate** | `VERS. 25. — *Respondens Jesus.* Respondens tacitae objectionis` |
| **witnesses** | archive p.66 **and** Gallica f61 |
| **class** | Corpus Corporum corruption (a dropped *n*) |
| **marker after patch** | none |

⚑ The correct form stands **four words later in our own twin**, which is precisely the internal
corroboration `reference_plate-read-triage` says proves an error exists and says nothing about
whose. The plate says whose. Chunk 0021.

## 7. @0117A — `canantes` for `canentes`, a non-word in our file

| | |
|---|---|
| **our TEI** | `Tibicines sunt carmen lugubre canantes.` |
| **plate** | `Tibicines sunt carmen lugubre canentes.` |
| **witnesses** | archive p.64 **and** Gallica f59 |
| **class** | Corpus Corporum corruption (e → a) |
| **marker after patch** | none |

The English renders *canentes*: "The minstrels are those singing a mournful song." Chunk 0019.

---

## NOT patches — the two press variants

These are differences **between the two printings**, both copies clean, and there is no one to
accuse. Recorded here so that a later patch pass does not read them as defects.

- **@0121D** — the archive prints a terminal full stop after `et hujusmodi`; **Gallica prints
  none**, and our twin has none. The English ends the paragraph without a mark (Pattern 8: never
  supply).
- **@0122A** — the archive prints a terminal full stop after `sed praedicit ventura`; **Gallica
  prints none**, and our twin has none. Same treatment.

And the verse address that is not one:

- **@0122B** — the archive prints `VERS. 24.`, **Gallica prints `VERS. 21.`**, our twin has 21, and
  21 is the right address for Mt 11:21. Over-inking has filled the counter of the `1`. **No change
  of any kind**; recorded because a one-witness read here would have produced exactly the 8950
  verse-address claim, in exactly the same direction.
