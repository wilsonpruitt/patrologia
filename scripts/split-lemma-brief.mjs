#!/usr/bin/env node
// Split a work's lemma inventory into one file per translation stint.
//
// Usage: node scripts/split-lemma-brief.mjs <idno> <first-last> [<first-last> ...]
//   e.g. node scripts/split-lemma-brief.mjs 9001 0-4 5-9 10-14 15-19 20-23
//
// ⛔ SPLIT BY CHUNK MEMBERSHIP, NEVER BY COLUMN BAND. Written 2026-09-03 after an
// ad-hoc splitter did the latter on 9001 and every stint but the first came out wrong.
// The inventory tags each span with the column band it stands UNDER, which is the last
// anchor SEEN — and a span at the head of a chunk still sits under the PREVIOUS chunk's
// last anchor. So band-splitting slides head-of-range spans into the previous stint's
// file: 9001's five briefs were off by -0/+13/-11/+15/-17 against the spans actually in
// each range's Latin, and two stints were short at the head of their own range.
//
// It was caught only because two of the five stints counted the italic spans in their own
// Latin against their brief's total and said so. Neither the master inventory nor
// verify-english can see this: the master is complete and the English is unaffected. The
// only handle is the count, so this script asserts it and prints it into every file.
import fs from 'node:fs';
import path from 'node:path';

const [idno, ...rangeArgs] = process.argv.slice(2);
if (!idno || !rangeArgs.length) {
  console.error('usage: node scripts/split-lemma-brief.mjs <idno> <first-last> [...]');
  process.exit(1);
}

const master = path.join('data/briefs', `${idno}-lemmata.txt`);
if (!fs.existsSync(master)) {
  console.error(`no inventory: ${master} — run lemma-inventory.mjs ${idno} first`);
  process.exit(1);
}

const src = fs.readFileSync(master, 'utf8');
const cut = src.indexOf('## The inventory');
if (cut < 0) { console.error('inventory header not found in ' + master); process.exit(1); }
const preamble = src.slice(0, cut);
const entries = src.slice(cut).split('\n').filter((l) => l.startsWith('['));

// ⛔ MEMBERSHIP IS READ, NOT RE-DERIVED. This file used to count `*…*` spans in each chunk
// with its own copy of the harvest rule. That copy was correct for exactly as long as the
// harvest was italic-only: the day lemma-inventory.mjs learned that 8950 sets its lemmata in
// « … », the counter here allocated 603 of 1805 spans and labelled the last stint's bands
// 0106D–0109D for a range that actually runs to 0182D. Nothing downstream could see it
// except the sum assertion at the foot of this file, which is what fired. So the counts now
// come from the sidecar the inventory writes, and the two can no longer drift.
const countsPath = `data/briefs/${idno}-lemmata.counts.json`;
if (!fs.existsSync(countsPath)) {
  console.error(`no ${countsPath} — re-run: node scripts/lemma-inventory.mjs ${idno}`);
  process.exit(1);
}
const counts = JSON.parse(fs.readFileSync(countsPath, 'utf8'));
if (counts.total !== entries.length) {
  console.error(`⛔ ${countsPath} counts ${counts.total} spans but ${master} holds ${entries.length}.`);
  console.error(`   The sidecar is stale. Re-run: node scripts/lemma-inventory.mjs ${idno}`);
  process.exit(1);
}
const perChunk = new Map(), perChunkOpen = new Map();
for (const c of counts.chunks) {
  perChunk.set(parseInt(c.file.slice(0, 4), 10), c.spans);
  perChunkOpen.set(parseInt(c.file.slice(0, 4), 10), c.openEnded || 0);
}

const ranges = rangeArgs.map((a) => {
  const [first, last] = a.split('-').map(Number);
  if (!Number.isInteger(first) || !Number.isInteger(last)) {
    console.error(`bad range "${a}" — want first-last, e.g. 5-9`); process.exit(1);
  }
  return { first, last };
});

// Every chunk assigned exactly once, or the split is meaningless.
const seen = new Set();
for (const { first, last } of ranges) {
  for (let i = first; i <= last; i++) {
    if (!perChunk.has(i)) { console.error(`range covers chunk ${i}, which does not exist`); process.exit(1); }
    if (seen.has(i)) { console.error(`chunk ${i} is in two ranges`); process.exit(1); }
    seen.add(i);
  }
}
for (const i of perChunk.keys()) {
  if (!seen.has(i)) { console.error(`chunk ${i} is in NO range — every chunk must be assigned`); process.exit(1); }
}

const NOTE = `
## ⛔ Check this file's count against your own Latin before you rely on it

This file is split by CHUNK MEMBERSHIP, and its span total below is the number of italic
spans in YOUR chunks' Latin. **Count the marked spans in your own files — both \`*…*\` and \`« … »\` — and compare.** If
the totals disagree, say so in your report rather than working around it.

That instruction is here because the count is the ONLY handle on this class. An earlier
splitter divided the inventory by the column BAND each span stands under, which slides
head-of-range spans into the previous stint's file — the master inventory stays complete,
the English is unaffected, and verify-english cannot see it. On 9001 it left two stints
short at the head of their own range, and both found it by doing exactly this count.
`;

let i = 0;
for (const { first, last } of ranges) {
  let n = 0, openN = 0;
  for (let k = first; k <= last; k++) { n += perChunk.get(k); openN += perChunkOpen.get(k) || 0; }
  const body = entries.slice(i, i + n);
  i += n;
  const band = (l) => l.slice(1, l.indexOf(']'));
  const out = path.join('data/briefs', `${idno}-lemmata-${String(first).padStart(4, '0')}.txt`);
  fs.writeFileSync(out,
    preamble + NOTE +
    `\n## The inventory — chunks ${String(first).padStart(4, '0')}–${String(last).padStart(4, '0')}, ` +
    `bands ${band(body[0])}–${band(body[body.length - 1])} (${n} spans, of which ${openN} OPEN-ENDED, = the marked spans in your Latin)\n\n` +
    `⚠ **Count yours PARAGRAPH-BOUNDED and report both numbers.** An unmatched delimiter defeats a span\n` +
    `counter in both directions — an unmatched \`«\` run forward across a paragraph swallows the next\n` +
    `span, an unmatched \`»\` shifts the pairing backwards — and on a guillemet book both are common.\n` +
    `The 0004–0007 stint of 8950 reconciled 215 against 215 and the agreement was FALSE: two of its own\n` +
    `errors of exactly this kind had cancelled. A bare total is not a checkable number here.\n\n` +
    body.join('\n') + '\n');
  console.log(`${out} — ${n} spans (${openN} open-ended), chunks ${first}–${last}, bands ${band(body[0])}–${band(body[body.length - 1])}`);
}

if (i !== entries.length) {
  console.error(`\n⛔ ${i} spans allocated but the inventory holds ${entries.length}. The per-chunk`);
  console.error(`   counts do not sum to the master. Do NOT ship these files.`);
  process.exit(1);
}
console.log(`\nall ${entries.length} spans allocated, each chunk in exactly one range.`);
