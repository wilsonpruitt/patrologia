#!/usr/bin/env node
// attach-pg-notes.mjs — attach Migne's apparatus to the chunks of a PG work
// whose notes are keyed to the LATIN column.
// Usage: node scripts/attach-pg-notes.mjs <workKey>
//
// THE PROBLEM THIS ANSWERS (deferred twice, settled 2026-08-07)
//   Hard rule 9 builds the scripture index from `[n:]` markers. In PG 88 Migne
//   prints every marker in the LATIN column — no superscript appears anywhere in
//   the Greek — so the Greek chunks have nothing to key a marker to, and putting
//   one there would be inventing a feature of the edition.
//
//   The answer is NOT to force a marker into the Greek. It is to carry the
//   apparatus as chunk METADATA, keyed to the Latin column it is printed under,
//   and let the translator place `[n:]` in the ENGLISH — which is where PG notes
//   are harvested from anyway (established when the PG scripture indexer was
//   fixed, 2026-08-06).
//
// ⚑ AND THE PLACEMENT IS NOT A GUESS. Migne prints the marker at the CLOSE OF
//   THE QUOTATION the note cites, so the note's own citation locates it. Measured
//   on this work: of 11 markers, the 3 that survived the archive.org OCR as `*`
//   all sit exactly at the end of the verse they cite. The translator finds the
//   quotation in src/pg-latin/ and closes it with the marker.
//
// ⚠ Marker POSITION is not harvestable. Only 3 of 11 survived the scan layer;
//   superscripts are the first thing an OCR loses. Anything that needs a position
//   reads the plate. Do not build a harvester that assumes the scan has them.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.join(import.meta.dirname, '..');
const key = process.argv[2];
if (!key) { console.error('usage: node scripts/attach-pg-notes.mjs <workKey>'); process.exit(1); }

const notesPath = path.join(ROOT, 'data/pg-notes', `pg088-${key.includes('epistolae') ? 'epistolae' : 'dorotheus'}.json`);
const explicit = process.argv[3];
const notesFile = explicit ? path.join(ROOT, explicit) : notesPath;
if (!fs.existsSync(notesFile)) { console.error(`notes file not found: ${notesFile}`); process.exit(1); }
const notes = JSON.parse(fs.readFileSync(notesFile, 'utf8'));

const gdir = path.join(ROOT, 'src/greek', key);
const man = JSON.parse(fs.readFileSync(path.join(gdir, 'manifest.json'), 'utf8'));
const twinMan = path.join(ROOT, 'src/pg-latin', key, 'manifest.json');
const twin = fs.existsSync(twinMan) ? JSON.parse(fs.readFileSync(twinMan, 'utf8')) : null;

// Greek col -> its facing Latin col, taken from the NOTES file (which records both)
const greekToLatin = new Map(notes.columns.map(c => [c.facingGreekColumn, c.latinColumn]));
const byLatinCol = new Map(notes.columns.map(c => [c.latinColumn, c]));

let attached = 0, chunksTouched = 0;
const perChunk = [];
for (const c of man.chunks) {
  const text = fs.readFileSync(path.join(gdir, c.file), 'utf8');
  const greekCols = [...new Set([...text.split('---').slice(2).join('---').matchAll(/\[(\d{3,4})\]/g)].map(m => Number(m[1])))];
  const cols = [];
  for (const g of greekCols) {
    const lat = greekToLatin.get(g);
    if (lat == null) { console.warn(`  ⚠ chunk ${c.chunk}: greek col ${g} has no facing Latin column in the notes file`); continue; }
    const rec = byLatinCol.get(lat);
    cols.push({ greekColumn: g, latinColumn: lat, notes: rec.notes });
    attached += rec.notes.length;
  }
  if (cols.some(x => x.notes.length)) chunksTouched++;
  c.apparatus = cols;
  perChunk.push({ chunk: c.chunk, cols });
}

man.apparatus = {
  source: path.relative(ROOT, notesFile),
  keyedTo: notes.structure.keyedTo,
  contract: notes.structure.note,
  howToPlace: notes.structure.howToPlace,
  attachedBy: 'scripts/attach-pg-notes.mjs',
  totalNotes: attached,
};
fs.writeFileSync(path.join(gdir, 'manifest.json'), JSON.stringify(man, null, 2) + '\n');

// A human-readable brief that ships beside the chunks — this is what a
// translation agent is pointed at, not the raw JSON.
const lines = [
  `# Apparatus — ${key}`,
  '',
  '**Migne keys every note in this work to the LATIN column. The Greek carries no',
  'marker at all**, so no `[n:]` appears in the Greek chunks and none should be added',
  'to them. You place `[n:]` in the ENGLISH.',
  '',
  '## Where each note goes',
  '',
  "**The note's own citation is its locator.** Migne prints the marker at the CLOSE",
  'OF THE QUOTATION the note cites. Find that quotation in the facing Latin',
  `(\`src/pg-latin/${key}/\`) to see where it falls, then close the corresponding`,
  'English quotation with the marker.',
  '',
  'Measured, not assumed: of the 11 markers in this work, the 3 that survived the',
  'scan layer as `*` all sit exactly at the end of the verse they cite.',
  '',
  '⚠ The Latin twin is PAGE-aligned, not word-aligned — it may run slightly ahead',
  'of or behind its Greek within a column. Use it to locate a quotation, not to',
  'set lineation.',
  '',
];
for (const p of perChunk) {
  lines.push(`## Chunk ${String(p.chunk).padStart(4, '0')}`, '');
  for (const col of p.cols) {
    lines.push(`### Greek col ${col.greekColumn} — apparatus printed under Latin col ${col.latinColumn}`, '');
    if (!col.notes.length) { lines.push('_No notes on this column._', ''); continue; }
    for (const n of col.notes) {
      const anchor = n.latinAnchor ? `  ·  anchor: \`${n.latinAnchor}\`` : '  ·  anchor not recorded — place from the citation';
      lines.push(`- **\`${n.marker ?? 'ILLEGIBLE'}\`** ${n.text}${anchor}`);
      if (n.adjudicated) lines.push(`    - ${n.adjudicated}`);
      if (n.comment) lines.push(`    - ${n.comment}`);
    }
    lines.push('');
  }
}
if (notes.seriesContinuity) lines.push('---', '', `**Series continuity.** ${notes.seriesContinuity}`, '');
fs.writeFileSync(path.join(gdir, 'APPARATUS.md'), lines.join('\n'));

console.log(`${key}: ${attached} notes attached across ${chunksTouched}/${man.chunks.length} chunk(s)`);
for (const p of perChunk)
  for (const col of p.cols)
    console.log(`  chunk ${p.chunk}  greek ${col.greekColumn} ← latin ${col.latinColumn}: ${col.notes.length} note(s) ${col.notes.map(n => n.marker ?? '·').join(' ')}`);
console.log(`  → src/greek/${key}/APPARATUS.md`);
if (twin) console.log(`  twin present: ${twin.chunks.length} file(s)`);
