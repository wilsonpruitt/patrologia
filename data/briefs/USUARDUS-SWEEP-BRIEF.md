# Usuardus, *Martyrologium*: Bouillart keyed-note sweep (Wilson, 2026-09-22: full sweep, Sonnet)

You are one of six sweep agents. Your launch message names your tag (S1–S6). Your page list is
`data/briefs/USUARDUS-SWEEP-PAGES.json` → `<tag>.leaves`. **This is a reading job, not a translation
job.** You translate nothing and edit no text.

## What you are looking for

In PL 123/124 every page has the same layout:
- **Top of the page:** Solier's commentary (NOTAE, VARIANTES LECTIONES, OBSERVATIONES, AUCTARIA) in
  two columns.
- **Somewhere on the page, often near the foot:** Usuardus's martyrology text, set **full width**
  across both columns. Day heads look like `VI Non.` … `Die 2.`
- **Inside that full-width band**, Migne sometimes sets a raised letter key (ª, b, rarely c; on a few
  pages the key sits near the baseline). It points to a **keyed note by Bouillart**: a short
  full-width note under the band, usually signed **BOUILLART.** It is sometimes unsigned, and it
  sometimes runs onto the next page.

**Your job: on every page in your list, decide whether the Usuardus band carries a keyed note, and
transcribe each one you find.**
- **Ignore Solier's commentary entirely.** His text sets asterisks, letters and small caps of its own.
  Only keys INSIDE the full-width Usuardus band count.
- **Worked examples:** `src/english/9198/cruces-0000.md` and `src/english/9215/cruces-0004.md`,
  sections `## Keyed notes`. Read both before you start. They show 12 real notes and how they look.
- **Known notes are already done.** They are listed in the six `src/english/{9198,9215}/cruces-*.md`
  files. If your page list includes the run-over half of a known note, say so and move on.

## How to read a page

- **Fetch one image at a time** into YOUR OWN directory,
  `/private/tmp/claude-501/-Users-wilsonpruitt/2aed9986-7d84-44e5-9b4c-3ca65b9f8fd5/scratchpad/<tag>/`:
  `curl -sL -o <dir>/nNNN.jpg "https://archive.org/download/<ID>/page/n<LEAF>.jpg"`
  - 9198 (PL 123): ID `patrologiaecurs29goog`, leaf = (odd col + 29)/2.
  - 9215 (PL 124): ID `patrologiaecurs76unkngoog`, leaf = (odd col + 9)/2.
- **Step 1, overview.** Downscale with `sips -Z 1400` or PIL, view it, and read the printed corner
  numbers at the top. **They must match your list's cols.** If they don't, the map has drifted:
  recalibrate, record the drift, and carry on.
- **Step 2, zoom.** Crop the full-width band at FULL resolution (the source is ~3900×6100) and look
  for raised keys.
  - A page with no band at all (all Solier) is a valid result: record `no band`.
  - A band with no key: record `band, no key`.
- **Step 3, if there is a key.** Crop the note at full resolution and transcribe it **exactly as
  printed**: spelling, ligatures as plain letters (æ→ae, œ→oe), italics as `*…*`, small caps as
  capitals.
  - **Never guess.** An illegible word is written `[illeg.]`, with what is visible.
  - **9215 only:** if a word is doubtful or the margin is clipped, read the same page on the second
    printing, Gallica: `https://gallica.bnf.fr/iiif/ark:/12148/bpt6k54939860/f<N>/full/1400,/0/native.jpg`,
    f = (col + 1)/2. Send the header `-A "Mozilla/5.0"`. Say which copy each word came from.
- **Delete each image when you are done with it.** This is an 8 GB machine.

## Output: two files, yours alone

1. **`data/briefs/<idno>-SWEEP-<tag>.tsv`**, one row per note found, with the header
   `page\tcol\tnote_no\tnote_text\tanchor_words\tanchor_in_our_latin\tlayer`:
   - `page` = the archive leaf.
   - `col` = the column where the key sits (e.g. `0719`).
   - `note_no` = the key letter (`a`, `b`).
   - `note_text` = the full transcription, one line, no tabs.
   - `anchor_words` = 4–6 words **copied from our Latin** in `src/latin/<idno>/*.md` around the key,
     with `(a)` at the key's exact position. Grep to confirm they appear exactly once in the chunks.
   - `anchor_in_our_latin` = `yes, key read at the plate 2026-09-22 (leaf nNNN, corners X/Y)` plus
     any note on clipping or witnesses.
   - `layer` = `cn`.
2. **`data/briefs/<idno>-SWEEP-<tag>-PAGES.json`**, one record per page in your list:
   `{"leaf":N,"corners":"X/Y","result":"no band"|"band, no key"|"note(s): a"|"unreadable: why"}`.
   **Every page in your list gets a record.** A page you skipped is a hole that looks exactly like a
   checked zero.

## Rules

- Do not edit anything except your two output files. Do not commit, and do not deploy.
- **The anchor words come from OUR chunk files, not from the plate.** If the plate's words differ
  slightly from our Latin at the key, pick the nearest stretch that does appear in the chunk and say
  so.
- A doubtful mark that might be a key, a stray sort or a flyspeck: **record it as `doubtful`** in the
  PAGES file with where it sits, and do not add it to the TSV.
- **Do not stop early.** Your list is your whole job. When finished, report:
  - pages checked (count);
  - notes found, with a one-line list;
  - doubtful marks;
  - unreadable pages;
  - any map drift.
