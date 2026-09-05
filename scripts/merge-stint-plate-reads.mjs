#!/usr/bin/env node
// Merge stint-scoped plate-read files into data/plate-reads.json.
//
// ⛔ WHY THIS EXISTS. Launch-brief §1 forbids a translating stint from writing
// data/plate-reads.json — peers run concurrently and would race each other. So each stint writes
// data/briefs/<idno>-PLATE-READS-<firstChunk>.json and the orchestrator merges. Doing that by hand
// went wrong the first time: the stints agree on the CONTENT of a read and not on its SHAPE.
// 0000-0005 wrote {from, to}; 0006-0011 wrote {cols: "0079A-0080D"}. Both are perfectly good
// records and neither is wrong — the brief never specified the key, and it should not have to.
//
// ⚑ The failure mode this guards is silent: an unmerged read leaves plate-gate.mjs red over
// markers that ARE licensed, which reads exactly like a stint that fired on an unread column.
// Normalizing here rather than dictating a schema to eight agents is the cheaper half.
import { readFileSync, writeFileSync } from 'node:fs';

const idno = process.argv[2];
const files = process.argv.slice(3);
if (!idno || !files.length) {
  console.error('usage: merge-stint-plate-reads.mjs <idno> <stint-file.json ...>');
  process.exit(2);
}

const MASTER = 'data/plate-reads.json';
const master = JSON.parse(readFileSync(MASTER, 'utf8'));
const work = master.works[idno];
if (!work) { console.error(`no work ${idno} in ${MASTER} — create its header first`); process.exit(2); }

// Accept {from,to} or {cols:"AAAA-BBBB"} or {cols:"AAAA"}; keep everything else verbatim.
const normalize = (r, date) => {
  let { from, to } = r;
  if (!from && typeof r.cols === 'string') {
    const [a, b] = r.cols.split(/\s*[-–]\s*/);
    from = a; to = b || a;
  }
  // Third shape seen in the wild (0027–0031): columns: ["0137","0138"] — a PAGE read, listed as the
  // bare column numbers the corners print, with no band letter. Expand to the full page: 0137A–0138D.
  // ⚑ That expansion is the faithful record, not a convenience: the stint read the whole page, both
  // columns, all four bands of each. Leaving it as bare "0137" would let plate-gate fail to match a
  // marker at 0137C and report an unread column over a page that was read end to end — the exact
  // silent failure this file exists to prevent, arriving from the opposite direction.
  if (!from && Array.isArray(r.columns) && r.columns.length) {
    const bare = c => /^\d+$/.test(String(c));
    const a = String(r.columns[0]), b = String(r.columns[r.columns.length - 1]);
    from = bare(a) ? a + 'A' : a;
    to = bare(b) ? b + 'D' : b;
  }
  if (!from) return null;
  const { cols, ...rest } = r;
  // `depth` is what plate-gate PRINTS beside a licensed marker, so a stint that omitted the key
  // makes the gate report "read: undefined" over a read that is perfectly good. Default it to
  // "read" — the weaker of the two values, and the one the gate's own definition of a read means:
  // the page on screen with the corner numbers checked first, found or not found. Never default it
  // to "full": that would claim a word-by-word collation nobody performed.
  return { from, to: to || from, depth: r.depth || 'read', date: r.date || date, ...rest };
};

let added = 0, skipped = 0, bad = 0;
for (const f of files) {
  const s = JSON.parse(readFileSync(f, 'utf8'));
  for (const raw of s.reads || []) {
    const r = normalize(raw, s.date);
    if (!r) { bad++; console.error(`  ⚠ ${f}: read with no column range, skipped: ${JSON.stringify(raw).slice(0, 120)}`); continue; }
    if (work.reads.some(x => x.from === r.from && x.to === r.to)) { skipped++; continue; }
    work.reads.push(r); added++;
  }
}
work.reads.sort((a, b) => String(a.from).localeCompare(String(b.from)));
writeFileSync(MASTER, JSON.stringify(master, null, 1) + '\n');
console.log(`merged ${added} reads into ${idno} (${skipped} already present, ${bad} unusable) — ${work.reads.length} total`);
if (bad) process.exit(1);
