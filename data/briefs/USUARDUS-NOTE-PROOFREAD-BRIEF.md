# Usuardus: word-for-word proofread of Bouillart's notes against the plate (2026-09-22)

Bouillart's 101 keyed notes were transcribed at the plate, injected into the Latin as
`[cn: a | …]`, and translated into English as `[nt: …]`. **The transcriptions have never been
proofread.** In the 0487 note the transcriber had silently dropped about four printed lines. A lost
line produces no garbled word, so nothing downstream can see it: not a reader, not a script.

**Your job: read every note in your batch against the printed page, word for word, and make our
text say exactly what Migne prints.**

## Scans, on disk. Never fetch page images
- **PL 123 (9198):** `raw/scans/pl123/patrologiaecurs29goog.pdf`, **PDF page = TSV leaf + 1**.
- **PL 124 (9215):** `raw/scans/pl124/patrologiaecurs76unkngoog.pdf`, **PDF page = TSV leaf + 1**.
- **PL 124 second printing:** Gallica `ark:/12148/bpt6k54939860`, IIIF
  `https://gallica.bnf.fr/iiif/ark:/12148/bpt6k54939860/f<N>/full/2400,/0/native.jpg`, f = (col + 1)/2,
  with the header `-A "Mozilla/5.0"`.
- Render: `pdftoppm -f <p> -l <p> -r 300 -png <pdf> <yourdir>/p`, then crop with PIL. Go to 600 dpi for a
  doubtful letter. **Read the printed corner numbers first, every page.** Delete renders as you go.

## Where things are
- `data/plate-notes/9198.tsv`, `data/plate-notes/9215.tsv`: column 1 = leaf, 2 = the column where the
  key sits, 3 = the key, **4 = the note text you are checking**, 5 = the anchor, 6 = evidence, 7 = layer.
- The English twins: the `[nt: …]` in `src/english/<idno>/*.md`, in the order the notes appear.
- Notes already checked at the plate, with verdicts you should not re-litigate:
  `data/briefs/USUARDUS-NOTE-GARBLE-VERDICTS.md`.

## What to check, per note
1. **Nothing is missing.** Read the printed note from its key letter to its final stop, including any
   part that runs onto the next page, and confirm every clause is in our text. **This is the main
   point of the pass.** Watch the ends of lines and the foot of a column, where a skip hides.
2. **Nothing is added**, and no phrase is duplicated.
3. **Every word matches**, including proper names, numbers, dates, tome and page references, and
   Migne's own abbreviations.
4. **Italics** `*…*` follow the plate, and small caps are rendered as capitals.
5. **A signature** (BOUILLART. / BOUILL.) is present if printed and absent if not.
6. **Punctuation** follows the plate (Pattern 8).

## What to do about a difference
- **Our text is wrong:** correct **column 4 of the TSV row** to exactly what the plate prints. Keep our
  transcription conventions: ligatures as plain letters (æ→ae, œ→oe), italics as `*…*`, a run-over note
  as one row.
- **Then fix the English twin** for that note, and only where the meaning changed. If a restored clause
  is missing from the English, translate it in the register of the surrounding twins (Bouillart on the
  Pratensis codex: erasures, hands, the autograph). Keep the fixed terms: *litura* = erasure, *codex
  Pratensis* = the Pratensis codex, *prima manus* = the first hand, *autographum* = autograph,
  Sollerius, Castellanus.
- **PL 124 only:** where the two printings differ and one prints a non-word, follow the sound printing
  (Wilson, 2026-09-22) and say so in your report.
- **Illegible:** say what is visible. **Never guess.** Do not silently "improve" Migne's Latin: a real
  misprint of his stays, as the verdicts file records.
- **Never put a remark of your own in column 4.** Evidence goes in column 6.

## Rules
- Edit only: the TSV rows in your batch, the English `[nt:]` for those notes, and your report.
- Other agents are working in this repo. Use exact-match edits, never a whole-file rewrite.
- Your scratch dir is yours alone. This is an 8 GB machine, so render one page at a time.
- Do not commit, and do not deploy.

## Report: `data/briefs/USUARDUS-NOTE-PROOFREAD-<tag>.md`
- notes checked, with leaf and corners, and the count;
- **every correction**, with the printed text, our old text, and the new;
- notes confirmed correct as they stood;
- anything illegible or doubtful;
- any English twin you changed, and why.
Name every note you checked. A report that lists only corrections cannot be told from one whose
writer never read.
