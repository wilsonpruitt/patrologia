# 9176 Eriugena, *Commentarius in Evangelium secundum Joannem*: pending TEI patches (stint 0010–0012, cols 0329B–0340A)

Sites where this translator read the column at the plate and the type differs from our Corpus
Corporum twin. **The English already renders the plate** at each proposed site. Do not edit
`sources/pl/tei/9176.xml` or `data/tei-patches/9176.json` from here; the orchestrator merges.

Every `find` below was checked and matches **exactly once** in `sources/pl/tei/9176.xml`.

Working plate: archive.org `patrologiaecurs113unkngoog/page/n<leaf>.jpg`, leaves n201–n206, corners
read first (n201=329/330, n202=331/332, n203=333/334, n204=335/[336 clipped], n205=337/338,
n206=339/[340 clipped]). Second witness: Princeton `YkVOAAAAYAAJ` PA329, PA331, PA335, PA337.

E11 check: at all three sites the plate is the reading that construes; none is filed toward a
defective printing.

---

## 0330D: lemma ends with a full stop, not a comma — PROPOSED

- **find:** `abiit iterum in Galilaeam,</hi> Postquam`
- **replace:** `abiit iterum in Galilaeam.</hi> Postquam`
- **Plate:** archive n201, right column, band D, the lemma line *Reliquit Judaeam, et abiit iterum in
  Galilaeam.*; Princeton PA329 same line, full stop. The next word *Postquam* is capitalised and
  opens a new sentence; the twin's comma does not construe.

## 0336A: full stop after *praetendit* — PROPOSED

- **find:** `participantis figuram praetendit`
- **replace:** `participantis figuram praetendit.`
- **Plate:** the archive n204 image clips this line end; Princeton PA335, right column, line 1:
  *humanam naturam participantis figuram praetendit.* The twin runs on into *Mulier itaque est*,
  a new sentence with a capital. Punctuation is within the witness licence (sentence punctuation).

## 0338A: `contuntur` → `coutuntur` — PROPOSED

- **find:** `nobis non contuntur`
- **replace:** `nobis non coutuntur`
- **Plate:** archive n205, right column, band A, line 5: *qua ipsi Judaei nobis non coutuntur, hoc
  est, a nobis dissentiunt*; Princeton PA337 the same line, *coutuntur*. The twin's form is not a
  word; *coutuntur / coutebantur / coutimur* is the verb of the whole passage (0334A–0338A).
  ⚠ It is an n/u difference, the class this tome's witnesses blur, so it rests on the two copies
  agreeing plus the sense, not on either letter alone. If the orchestrator holds letter-level
  patches to a stricter bar, withdraw it: the English reads "do not deal with us" either way (E12).

---

## Noted, not patched

- **0329D `spiritualium denorum`:** the second letter is a broken sort on both copies, e/o not
  settled. Letter-level; no patch. English "spiritual gifts" (E12), crux in `cruces-0010.md`.
- **0337C, mark after `Samaritanae`:** both copies set a stop (colon or semicolon, not settled)
  before the italic lemma *Et nunc quem habes*; our twin has none. Not patched because the mark
  cannot be named; the English uses a colon.
