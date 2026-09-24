# Innocent I, PL 20: Coustant's lettered foot-note sweep (Wilson, 2026-09-23: full sweep, Sonnet)

You are one of six sweep agents. Your launch message names your tag (S1–S6). Your page list is
`data/briefs/7090-7091-SWEEP-PAGES.json` → `<tag>.pages`, each entry `{"idno": "7090"|"7091",
"page": N}` where N is a **PDF page number**, already rendered for you. **This is a reading job, not
a translation job.** You translate nothing and edit no text.

## Where your pages are — NO DOWNLOAD, EVER

Every page you need is already on disk as a PNG at 300 dpi:

    /private/tmp/claude-501/-Users-wilsonpruitt/a72cca1f-91ca-4f91-a299-0e9e3fb5d259/scratchpad/pl020-pages/p-<N>.png

where `<N>` is the `page` field from your assignment (e.g. page 250 → `p-250.png`). **Do not fetch
anything from archive.org or anywhere else.** If a page looks damaged or a crop is too small to
read, crop tighter from the SAME file at full resolution before concluding it's illegible.

Copy the files you're working on into your own scratch directory so nothing else can touch them:

    mkdir -p /private/tmp/claude-501/-Users-wilsonpruitt/a72cca1f-91ca-4f91-a299-0e9e3fb5d259/scratchpad/<tag>/
    cp .../pl020-pages/p-<N>.png .../scratchpad/<tag>/

## What you are looking for

Every page in this volume is set in two columns, headed by a running title (`EPISTOLAE ET
DECRETA.` for 7090, `APPENDIX AD EPISTOLAS S. INNOCENTII I PAPAE.` for 7091) and the printed
column numbers at the top corners — **read those first and confirm they match what your text
expects** before doing anything else.

- **The upper ~55–65% of the page** is Innocent's text (decrees or letters), the primary source —
  this is what `src/latin/<idno>/*.md` already holds.
- **The lower part of the page**, usually below a rule, carries **Coustant's apparatus**: lettered
  foot notes, restarting **a, b, c…** on every page (occasionally running past `z` isn't expected —
  if you see it, say so). A raised letter in the main text marks where a note applies; the note
  itself sits at the foot, often in two columns like the main text.
- **Two kinds of note, and you must tell them apart:**
  - **A bare variant reading**: a manuscript or edition siglum plus a reading, e.g. `Sic Ms. Colb.,
    onitum` or `Merl., sive; Crab., saevae`. Short, telegraphic, no verb of saying.
  - **A note that SAYS something**: a sentence of explanation or argument, e.g. `Apud Glycam
    portaitque difficillimum. Magis placet quod portari nequeat, cum hunc locum expresse aut
    imitationem hujus Matth. xxiii, alligant enim onera graviora et importabilia.` These read like
    real prose, not a bare apparatus entry.
  - Both kinds get transcribed. Mark which kind each is (see output format below).
- **Worked examples:** the pages rendered for you at chunk prep — `raw/scans/pl020/pl020.pdf` pp.
  250 and 319 — were read for this brief; see the transcript in your launch message if provided, or
  ask if unsure what a note looks like before starting.

## How to read a page

1. **Overview.** View the full page. Confirm the printed corner column numbers match what you
   expect for that page (they should track `(col + 11)/2` = your PDF page number). If they don't
   match, STOP and report the drift — don't guess past a mismatch.
2. **Read the main text column-by-column**, noting every raised letter key and the word it sits
   after or on.
3. **Read the foot apparatus.** Crop tight at full resolution if the type is small. Transcribe each
   note **exactly as printed**: spelling as printed, ligatures as plain letters (æ→ae, œ→oe),
   italics as `*…*`, small caps as capitals, abbreviations as printed (`Merl.`, `Quesn.`, `Isid.`,
   `Colb.`) — do NOT expand them here; expansion happens later, in the English twin.
   - **Never guess.** An illegible word is written `[illeg.]`, with what is visible.
4. **A page with no notes at all** is a valid result — record it.
5. **Delete your copied images when you're done with each page.** This is an 8 GB machine.

## Output: two files, yours alone

1. **`data/briefs/<idno>-SWEEP-<tag>.tsv`**, one row per note found, header:

   `page\tcol\tnote_no\tnote_text\tanchor_words\tanchor_in_our_latin\tclass\tlayer`

   - `page` = the PDF page number (matches your assignment).
   - `col` = the column where the key sits in the main text (e.g. `0489`).
   - `note_no` = the key letter (`a`, `b`, `c`…), lowercase as printed.
   - `note_text` = the full transcription, one line, no tabs, exactly as printed.
   - `anchor_words` = 4–6 words **copied from our Latin** in `src/latin/<idno>/*.md` around the
     key's position, with `(a)` marking the key's exact spot. Grep to confirm the phrase appears
     exactly once in the chunks. If the plate's words differ slightly from our Latin, pick the
     nearest stretch that DOES appear and say so.
   - `anchor_in_our_latin` = `yes, key read at the plate 2026-09-23 (PDF p.NNN, corners X/Y)`.
   - `class` = `variant` (bare siglum + reading) or `explanatory` (a note that says something).
   - `layer` = `cn`.

2. **`data/briefs/<idno>-SWEEP-<tag>-PAGES.json`**, one record per page in your list:

   `{"page":N,"corners":"X/Y","result":"no notes"|"note(s): a,b,c"|"unreadable: why"}`.

   **Every page in your list gets a record.** A page you skipped is a hole that looks exactly like
   a checked zero.

## Rules

- Do not edit anything except your two output files. Do not commit, and do not deploy.
- The anchor words come from OUR chunk files, not from the plate.
- A doubtful mark that might be a key, a stray sort, or a flyspeck: **record it as `doubtful`** in
  the PAGES file with where it sits, and do not add it to the TSV.
- **Do not stop early.** Your list is your whole job. When finished, report:
  - pages checked (count);
  - notes found, with a one-line list and their class;
  - doubtful marks;
  - any page whose corner numbers didn't match expectation.
