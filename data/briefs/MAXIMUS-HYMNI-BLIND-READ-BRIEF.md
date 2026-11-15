# Maximus the Confessor (attrib.), *Hymni* (PG 91, cols 1417–1424): blind read brief (2026-11-15)

Adapted from `MAXIMUS-DISPUTATIO-BLIND-READ-BRIEF.md`. You are the ONE blind reader (R1) for the whole work. Work key `maximus-confessor-hymni`
(3 chunks = 3 hymns, all Greek verse, 297 printed lines). Greek: `src/greek/<key>/NNNN.md` · Migne's facing Latin verse (a witness only):
`src/pg-latin/<key>/NNNN.md` · English: `src/english/<key>/NNNN.md`. Repo root `~/patrologia`.

**How the English was made.** The Greek is our own reading of Migne's plates (every line read at the page image; Kraken was only a typing aid). An Opus
translator worked from it against the Latin under the verse rules (`translation-style.md`, section "Greek verse", V1–V10): ONE English line per Greek
line; words move between lines only inside a sentence; no metre, no rhyme, no padding; compound epithets stay epithets; metrical filler particles are not
rendered, interjections are. The English passes every mechanical check (line counts, sentence ends). **Your job is the class the checks cannot see:** a
meaning reversed, a clause lost, who-does-what flipped, a negative dropped, a word mistranslated, a line that says more or less than the Greek.

What the text is: three short hymns in anacreontic seven-syllable lines: I «Ὕμνος εὐχαριστήριος καὶ ἱκετήριος πρὸς Θεόν» (thanksgiving and supplication:
the speaker's creation, fall by the serpent, and plea), II «Ὕμνος ἱκετήριος εἰς Χριστόν, ἐν εἴδει ἐξομολογήσεως» (a confession addressed to Christ), III
«εἰς τὴν ἁγίαν Τριάδα» (an acrostic, ΜΑΞΙΜΟΣ ΤΑΔΕ ΓΡΑΨΕΝ). Greek is poetic: hyperbaton across lines, rare words, epithets, participial chains.
Attribution is doubtful; irrelevant to your job.

## The Latin is NOT the text
Migne's Latin is a loose verse paraphrase (it reorders, expands, sometimes reads a different word). **A Greek/Latin disagreement is not a finding on its own**: the
English follows the Greek. Report only where the English departs from the GREEK. (The English marks a few Latin departures of sense as `[lat: …]`: not findings.)

## The Greek file is close to the plate, and may differ from it
- Where a breathing or accent cannot be told in our scan the standard form is written. Migne's misprints are kept. A Greek word that does not parse may be
  a misprint or a mis-read: check it at the plate before judging the English. `[b: X]` band letters, `[NNNN]` column anchors, ⟦p⟧/⟦s⟧ markers: not findings.
- Page images: `raw/kraken/maximus-hymni/pages/p-0771.png`…`p-0774.png` (≈ 600 dpi; two printed columns per page, each a Greek block then a Latin block;
  1417–1418 on 771 (foot), 1419–1420 on 772, 1421–1422 on 773, 1423–1424 on 774). Crop with
  `python3 -c "from PIL import Image; Image.open('<path>').crop((x0,y0,x1,y1)).save('<scratch>/h.png')"` (scratch dir: use your own session scratchpad, not /tmp) and Read it.
  **One crop at a time; write the finding; move on.** A finding about the Greek text itself must be plate-read.

## Rules of the read
- **Do NOT open `src/english/<key>/cruces.md`, anything under `translate/`, or any brief but this one before your findings are written.** You may check
  a finding against `cruces.md` AFTER you form it and say whether it was logged.
- **Edit nothing except your report.** Read `translation-style.md`: the "Greek verse" section and the "Register (PG / Greek)" section.

## Fixed by convention. Do NOT report
- V1–V10 as rules: line-for-line, no metre/rhyme, capital on every line, epithets kept, interjections rendered, thou for address to God/Christ.
- Terms fixed in `translate/maximus-hymni/GLOSSARY.md` are not yours to open (it is under translate/); judge a term only on whether it is a mistranslation.
- Reordering of words within a sentence across lines (V1), if the sense is kept.

## What to hunt, in order of yield
1. **Polarity.** οὐ / οὐκ / μή / οὐδέ / μηδέ / οὔτε / μήτε / ἄνευ / χωρίς / ἀ- privatives dropped, added, moved, or rendered positively. Check every negative.
2. **Who does what:** subject and object of each verb; vocatives vs nominatives; whose "thy"/"my"; which person a participle belongs to; active/passive; who is addressed (God, Christ, the soul, the enemy).
3. **Mis-parsed grammar:** participles attached to the wrong noun; hyperbaton resolved wrongly (an adjective joined to the wrong noun across a line break); εἰ/ἐάν/ἤν/ἵνα/ὡς/ὅτε/ἔστε clauses; optatives and subjunctives of wish (a prayer rendered as a statement); questions (Greek `;`).
4. **Missing or added words:** a Greek line whose English carries a word or idea the Greek lacks, or drops one it has; count lines against sentences.
5. **Mistranslated words:** rare or compound words (the poet's epithets), proper names (Typhon, Morning-star, Eden's trees, Lethe-type names), words the Latin glosses differently, biblical echoes rendered wrongly.

## Places to judge for yourself (form your own view at the plate and from the grammar; report keep/change either way, with the plate read)
- Col. 1420, around printed line 43 (the verb ἤρυξας and its object): what does it mean here?
- Col. 1421, around line 38 (the plural noun beginning Οἰκέτριβας…) and line 41 (τυφῶνα, and what stands beside it).
- Col. 1422, line 1 (the relative/article ἡ or ἣ: its antecedent) and around line 31 (ἦν or ἤν).
- Hymn I, col. 1419 (the line about the serpent's whispering) and Hymn III's second sentence (the line beginning Ξένον τ' ἄημα…: whose "breath", equal to what?).

## Report: `data/briefs/MAXIMUS-HYMNI-BLIND-READ-R1.md`
For each finding: **hymn/chunk, column, printed line number**; **class (1–5)**; **the Greek** exact (say "plate-read" or "file only"); **the English as it
stands**, exact; **the proposed English**, exact replacement (ONE line per Greek line; if a fix needs words to move, give the whole sentence's lines);
**why** (1–2 lines); **confidence** (certain / probable); **already in the cruces?** (checked AFTER).
Then name the hymns/columns you found clean, list every plate page you opened, and list candidates considered and rejected, with reasons. A report of
findings alone cannot be told apart from one whose writer never read. Read every line. Do not stop early. Write the report file progressively (header
first, then each finding as you confirm it).
