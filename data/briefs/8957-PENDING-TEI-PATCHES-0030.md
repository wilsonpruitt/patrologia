# 8957 — pending TEI patches proposed by the 0030–0034 stint (cols 0820C–0833A)

Filed here, **not** applied to the TEI. Each rests on a Gallica native-resolution crop of a single
column, with the leaf's printed corner numbers read before any text on it. Every one is a
divergence **on our side** (Corpus Corporum), never Migne's — so none of them takes a `[sic:]`,
and in each case the English already renders what the plate prints, per the locked ruling of
2026-09-04 (`translation-style.md`, "What the English translates").

None of these changes a word of Migne. Three touch punctuation or an address separator; that is
the whole of it.

---

### 1. 0828D — our TEI supplies a `--` the plate does not print

- **our TEI (chunk 0033):** `VERS. 14.-- « Abyssus dicit. »`
- **the plate (f414, right column, native crop `1000,2090,870,110`):** `VERS. 14. « Abyssus dicit. »`
- Migne sets this verse address with the numeral, a full stop, and then the guillemet directly —
  no em-rule. Every neighbouring address on the same column (`VERS. 13. —`, `VERS. 15. —`) carries
  the rule, so this is his own inconsistency and our transcription has regularised it away.
- **Proposed:** delete the `--` at this one site. **English already reads `VERS. 14. « The deep saith. »`.**

### 2. 0832B — the same class, second site

- **our TEI (chunk 0034):** `VERS. 20.-- « Gloria mea semper innovabitur. »`
- **the plate (f416, right column, native crop `1000,1000,880,90`):** `VERS. 20. « Gloria mea semper innovabitur. »`
- **Proposed:** delete the `--`. **English already reads `VERS. 20. « My glory shall always be renewed. »`.**

⚑ These two are worth taking together: the peer stint at 0015–0019 recorded the *converse* shape
(`VERS. 23. «`, `VERS. 28. «` — our TEI already lacking the rule where the plate lacks it). So the
transcription is inconsistent about this separator in **both** directions, and a reader cannot
infer Migne's practice from our Latin. A volume-wide check of the `VERS. n.` addresses against
the plates would settle it; it is not urgent and it changes no word.

### 3. 0830D — our TEI drops a terminal full stop the plate prints

- **our TEI (chunk 0034):** `*usque ad* quod et Job fecit` (no stop)
- **the plate (f415, right column, native crop `1000,2760,880,90`):** `usque ad quod et Job fecit.`
- ⛔ **This one matters beyond the mark**, because Pattern 8 makes a missing terminal stop a
  *reportable fact about Migne's page*, and this book genuinely has such sites (the peer stint
  logged five). Left unpatched, our Latin manufactures a sixth that Migne did not set.
- **Proposed:** restore the full stop. **English already reads "…which Job also did."** with the stop.

### 4. 0832D — our TEI prints a full stop where the plate prints a colon

- **our TEI (chunk 0034):** `et cum venit, primus sedet. quia et adventus ejus in corde nostro gratuitus est`
- **the plate (f416, right column, native crop `1300,2580,580,70`):** `et cum venit, primus sedet : quia et adventus ejus`
- ⛔⛔ **The most consequential of the four, and the reason the plate gate exists.** Read from our
  file alone, `sedet. quia` is a perfect Pattern 8 specimen — a sentence Migne breaks with a full
  stop and resumes in lower case — and it is exactly the shape a peer already found and correctly
  logged at 0758A as **ours**. Two instances in one work is a class, not an accident: **a
  colon-for-full-stop substitution in Corpus Corporum's transcription of this book.**
- **Proposed:** restore the colon. **English already reads "…sits first: because both his coming…".**

---

## Considered and NOT proposed

- **The raised dot at 0831A** (`nulla consilii gravitate fulciuntur · senes`, plate f416 left
  column, where our TEI has a plain space). Visible at 1400px and not resolved to my satisfaction
  at that scale; a single point of punctuation on one photograph is not enough to move our Latin
  in either direction, and nothing in the English turns on it. Recorded in the cruces, not patched.
- **`haeritici` (0822A, 0827C) and `congnosci` (0825A).** These are the opposite case: our TEI is
  *right* about what Migne set, so there is nothing to patch. They carry `[sic:]` markers instead.
