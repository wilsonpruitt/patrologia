# Stint brief — Symeon of Thessalonica, *On the Sacred Rites* (PG 155), chunks 0001–0012

Work key `symeon-thessalonica-de-sacramentis`. Written 2026-10-05 (Opus) from the Fable anchor.
You are ONE of three translating stints. Translate the Greek chunks of your range into English,
reading every plate page of your range as you go. Work from the repo root `~/patrologia`.

| Stint | Chunks | Calfa plate pages to read |
|---|---|---|
| A | 0001–0004 | 96–106 |
| B | 0005–0008 | 106–115 |
| C | 0009–0012 | 115–123 |

## Read first (in this order, all of it)

1. `src/english/symeon-thessalonica-de-sacramentis/0000.md` + its Greek `src/greek/…/0000.md` —
   **the anchor pair. Match its voice, its conventions, its marker placement exactly.**
2. `src/english/symeon-thessalonica-de-sacramentis/cruces-0000.md` — how the anchor read the plate.
3. `translation-style.md`: the section **"Catechetical-liturgical exposition"** (the rules for this
   work), the **"Register (PG / Greek)"** section above it and its **Dialogue** subsection,
   **Pattern 7** (7a negation fidelity), **Pattern 8**, **Pattern 16** (`[lat:]`), **Pattern 17**
   (thou = singular, you = plural).
4. `pg-paired-pilot.md` §4 (the attribution ladder) and §6 (the Latin pass).

## The Greek, the Latin, the plate

- **Source:** `src/greek/symeon-thessalonica-de-sacramentis/NNNN.md` (Calfa OCR — damaged).
- **Latin twin (verifier only, never translate FROM it):** `src/pg-latin/…/NNNN.md`. A chunk that
  opens mid-page has that page's Latin PREPENDED, so twins run long — that is expected.
- **The plate is the only second witness for the Greek.** This scan's own Greek OCR is junk, so
  there is no third witness. You MUST open every plate page of your range:
  `python3 scripts/pg-plate-crop.py 155 <calfaPage> a` (top half of the Greek column, gutter
  included) then `… b` (bottom half). Read the Greek against your chunk. The script prints the
  column numbers; `raw/pg155-plates/index.json` maps every page.
- ⛔ **Stall lesson (Wolbero, 2026-09-26): view ONE crop at a time, write what you found to your
  files immediately, then move on.** Do not accumulate images. Write each English chunk to disk as
  soon as it is done; never hold everything for "one file at the end."

## What to produce

1. `src/english/symeon-thessalonica-de-sacramentis/NNNN.md` for each chunk in your range. The
   frontmatter is copied **verbatim** from the Greek chunk (every field, same order). Column
   anchors `[NNNN]` reproduced verbatim, in order, in place — count them before writing.
2. `src/english/symeon-thessalonica-de-sacramentis/cruces-<first>.md` (e.g. `cruces-0001.md`),
   same structure as `cruces-0000.md`: plate findings · readings decided at the plate (silent
   Calfa corrections, listed compactly) · genuine cruces · Pattern 16 pass (fired and declined,
   AND the paragraphs where the pass found nothing — a pass that reports only findings cannot be
   told apart from a pass never made) · any new term you had to fix, with the Greek.
3. `data/briefs/symeon-PLATE-READS-<first>.tsv`: header `calfaPage\tpdfPage\tcols\thalves\tfound`,
   one row per page you opened, written AS you read it.

## Conventions (from the anchor — do not vary)

- Speaker tags: Ἀρχιερεύς. → ***Bishop.*** · Κληρικός. → ***Cleric.*** — italic, one paragraph
  per turn. **(Wilson's ruling, 2026-10-05.)** Where ἀρχιερεύς in running text is the officiating
  bishop, "bishop"; where it is Christ or the Aaronic priest, "high priest."
- μυστήριον = **mystery** (never "sacrament") · τελετή = **rite** · the seven: baptism · chrism ·
  communion · ordination · marriage · repentance · holy oil · ἁγιάζειν sanctify / καθαγιάζειν
  hallow · σφραγίς seal · χάρισμα gift · ἱερωσύνη priesthood · ἱερεύς priest · κατ᾽ εἰκόνα
  "according to the image." Liturgical texts quoted inside the work (prayers, exorcisms,
  responses) are rendered as printed, in « » where the plate has them; chant/prayer incipits stop
  where the plate stops (L3/L4 in the Liturgical ordines section).
- `ΚΕΦΑΛ. xʹ` → **CHAPTER n.** (arabic) followed by its subtitle ("That …" / "On …"), inline,
  as its own paragraph. A heading/subtitle the plate prints and Calfa dropped →
  `[ed: The plate carries the subtitle <Greek>, "<English>," which our Greek source omits.]`
- **Band letters:** `[b: X]` exactly where the gutter prints A/B/C/D beside your text (the anchor
  shows placement). Only for text in your chunks.
- **Migne's bold Iassy page numbers** in the Greek column (`64`, `65` …) → **bold** at the plate
  position. Calfa loses or garbles them (`ΚΘ` for 63) — read them off the plate.
- Calfa junk (Latin-column words OCR'd into the Greek: `ΟΛΡΟΤ …`, stray capitals, band letters
  glued to words as `Κ`) is dropped silently and logged. A certain correction confirmed at the
  plate is made silently in the English and logged. **Never attribute a defect to Migne's plate
  from our files alone** — a `[sic:]` needs the plate to show the defect.
- **Negation fidelity (7a):** every negative the Greek prints is in the English, none the Greek
  does not print. If a sentence will not construe, render it as closely as the printed words
  allow and log a crux — never repair by translating a word as its opposite.
- Scripture exactly as Symeon quotes it (LXX forms), in « » as printed. Punctuation follows the
  plate (Pattern 8).
- Expected ratio ≈ **1.35–1.45×** the Greek words (anchor: 1.39). The verifier band is 1.1–2.0.

## Before you finish

- Run `node scripts/verify-english-pg.mjs symeon-thessalonica-de-sacramentis` — your chunks must
  produce no errors (other stints' missing chunks are fine).
- Do NOT edit anything outside your own chunk files, your cruces file and your plate-reads tsv.
  Do not commit; the orchestrator merges and commits.
- Report back: chunks done, plate pages read, number of silent corrections, the genuine cruces
  (one line each), every `[lat:]` fired, any `[sic:]`, and anything the next stint must know.
