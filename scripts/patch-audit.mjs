#!/usr/bin/env node
// Audit data/tei-patches/<idno>.json BEFORE chunking.
//
// chunk-work.mjs already refuses a `find` that matches 0 or >1 times. That is
// UNIQUENESS, and uniqueness is NOT location: a find can match exactly once and
// match it in the WRONG COLUMN, leaving the real defect in place and silently
// corrupting a column nobody has collated. That happened on 9003 (2026-08-28)
// and this script exists so it cannot happen again.
//
// For each patch: resolve the match offset to its enclosing <pb n="..."/> and
// compare with the declared `col`. Also refuse a no-op replace, and warn where
// a patch's column has no recorded plate read.
import fs from 'node:fs';
import path from 'node:path';

const idno = process.argv[2];
if (!idno) { console.error('usage: node scripts/patch-audit.mjs <idno>'); process.exit(2); }
const ROOT = path.join(import.meta.dirname, '..');
const xml = fs.readFileSync(path.join(ROOT, 'sources/pl/tei', `${idno}.xml`), 'utf8');
const { patches } = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/tei-patches', `${idno}.json`), 'utf8'));

// column mark offsets, in document order
const marks = [...xml.matchAll(/<pb n="([^"]+)"\s*\/>/g)].map(m => ({ n: m[1], at: m.index }));
const colAt = off => { let cur = null; for (const m of marks) { if (m.at > off) break; cur = m.n; } return cur; };

let fail = 0, warn = 0;
// ⛔ FIXED 2026-09-06 (8963). This walked the file collecting every 4-digit column STRING it saw,
// which means it only ever knew a read's ENDPOINTS. A read recorded as 0406D-0408D put 0406 and
// 0408 in the set and NOT 0407 — so it warned "no recorded plate read" over a column read end to
// end, and, far worse, it would have stayed silent about a genuine gap in the middle of any range.
// A check that cries wolf on every mid-range column is a check nobody reads.
// ⚑ Ranges are now EXPANDED from `from` to `to`, which is what a read record means: the page was
// on screen, both its columns, all four bands.
const reads = (() => {
  const p = path.join(ROOT, 'data/plate-reads.json');
  if (!fs.existsSync(p)) return null;
  const raw = JSON.parse(fs.readFileSync(p, 'utf8'));
  const set = new Set();
  const bare = v => typeof v === 'string' && /^\d{4}[A-D]?$/.test(v) ? +v.slice(0, 4) : null;
  const walk = v => {
    if (Array.isArray(v)) return v.forEach(walk);
    if (!v || typeof v !== 'object') return;
    const a = bare(v.from), b = bare(v.to);
    if (a !== null) for (let c = a; c <= (b ?? a); c++) set.add(String(c).padStart(4, '0'));
    for (const [k, x] of Object.entries(v)) { const kk = bare(k); if (kk !== null) set.add(String(kk).padStart(4, '0')); walk(x); }
  };
  walk(raw);
  return set;
})();

for (const [i, p] of patches.entries()) {
  const tag = `#${String(i + 1).padStart(3)} ${p.col}`;
  const n = xml.split(p.find).length - 1;
  if (n !== 1) { console.error(`✗ ${tag}  find matches ${n}×, expected 1`); fail++; continue; }
  if (p.find === p.replace) { console.error(`✗ ${tag}  replace is identical to find (no-op)`); fail++; continue; }
  // Resolve the column of the EDIT, not of the find string's first character:
  // a find carries context padding either side, and that padding routinely reaches
  // back into the previous column. "Which column does this patch change?" is the
  // question the declared col answers, so that is what must be compared.
  const base = xml.indexOf(p.find);
  let d = 0;
  while (d < Math.min(p.find.length, p.replace.length) && p.find[d] === p.replace[d]) d++;
  const off = base + d;
  const actual = colAt(off);
  const want = String(p.col).trim();
  // declared col may carry a band letter the match's own pb lacks, or vice versa
  const same = actual === want || actual?.replace(/[A-D]$/, '') === want.replace(/[A-D]$/, '');
  if (!same) {
    console.error(`✗ ${tag}  MATCHES IN COLUMN ${actual} — declared ${want}. Uniqueness is not location; re-aim this find.`);
    fail++; continue;
  }
  if (actual !== want) { console.warn(`⚠ ${tag}  band differs: match sits in ${actual}`); warn++; }
  if (reads && !reads.has(want.replace(/[A-D]$/, ''))) { console.warn(`⚠ ${tag}  no recorded plate read for this column`); warn++; }
}
console.log(`\n${patches.length} patches · ${fail} failed · ${warn} warning(s)`);
if (fail) { console.error('PATCH AUDIT FAILED — do not chunk.'); process.exit(1); }
console.log('patch audit OK — every find is unique AND lands in its declared column.');
