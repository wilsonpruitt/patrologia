# 8957 *Liber Job* — pending TEI patches

Sites where a translator opened the column at the plate and Migne's type differs from our
Corpus Corporum twin. Per the locked rule, **the English already renders the plate**; this file
records the divergence so the Latin converges on it when the patch pass lands.

Format: one entry per site. `find` must match exactly once in the source XML.

---

## 0758A — colon in our twin, FULL STOP on the plate

- **Opened by:** stint 0000–0004, 2026-09-07
- **Plate:** Gallica `bpt6k5505319w`, leaf **f379**, printed corner numbers **757 / 758**,
  right column. Native-resolution crop `980,350,880,120` (inside one column; gutter not crossed).
- **Our twin prints:** `insipientiam conjugis arguendo docens: et sic victus ardentius hostis instigatur`
- **The plate prints:** `insipientiam conjugis arguendo docens . et sic victus ardentius hostis instigatur`
- **Evidence:** a single low dot with spacing on either side. It is not a colon: Migne's colons on the
  same column (e.g. `dicit :`, `Unde :`) show two clearly separated dots at this resolution, and this
  mark shows one, seated on the baseline.
- **English as shipped** (`src/english/8957/0003.md`): "…teaching by reproof the folly of his wife .
  And so the enemy, being conquered, is the more hotly goaded…"
- **Proposed patch:** `find` `arguendo docens: et sic victus` → `replace` `arguendo docens . et sic victus`
- **Note:** this is a punctuation-only change; not one word of Migne moves. `noteCount`, chunk
  boundaries and every marker count are unaffected.

---

## Sites examined at the plate and NOT patched (recorded so they are not re-opened)

- **0748D `Per eat`** — the plate breaks *Pereat* across a line with no hyphen. Our twin's space is the
  faithful rendering of that break; the word is one word. **No patch**, and the `[sic:]` a reader of
  the twin alone would fire was withdrawn. See `src/english/8957/cruces-0000.md` §3.
- **0756D `» , id est`** — our twin's space between the closing guillemet and the comma is a transform
  artifact. The plate prints two commas, exactly as the twin does. Whitespace is not a mark.
  **No patch.**
- **0753A `[n: (GREC.)]`** — the plate really does read GREC. for GREG. That is Migne's defect, not the
  transcription's, so it is Pattern 7 territory and **must not be patched**.
- **0762B missing `«`, 0753A unclosed `«`, 0754B interior `«`** — all plate-confirmed as Migne's own
  setting. **Never patch a guillemet in this book.**
