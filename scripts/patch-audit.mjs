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

// ⛔ PATCHES ARE APPLIED IN ORDER, AND THIS AUDIT MUST APPLY THEM TOO (2026-09-07, 8956).
// chunk-work.mjs walks the patch list applying each to the running xml, so a patch can
// legitimately depend on an earlier one. This script resolved every patch against the
// PRISTINE file, which is fine until the defect being patched IS THE COLUMN MAP: 8956
// carried a corrupted anchor, <pb n="1240D"/> printed in place of 1294D, and until that
// patch is applied colAt() reports 1240D for every site after it. The audit then failed a
// correctly-aimed patch and would have passed a wrongly-aimed one declaring 1240D --
// a check that is wrong in BOTH directions on exactly the class it exists to catch.
// So: one working copy, patched as we go, with the column marks rebuilt whenever a patch
// touches a <pb>. Same order, same semantics as the chunker.
let working = xml;
let marks = [];
const rebuildMarks = () => { marks = [...working.matchAll(/<pb n="([^"]+)"\s*\/>/g)].map(m => ({ n: m[1], at: m.index })); };
rebuildMarks();
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

// Applied exactly as chunk-work.mjs applies it: first occurrence, in list order. A patch
// whose find did not resolve uniquely is NOT applied — the run is failing anyway, and
// applying it would misreport every position after it.
// ⛔ FIXED 2026-09-08 (8949). Marks are BYTE OFFSETS into `working`, so ANY patch that changes
// the text length invalidates every mark after it — not just one that moves a <pb>. The old
// condition rebuilt only when a <pb> was in the find or replace, so a run of pure insertions
// (the Glossa Hebrew recoveries: a book-title banner plus five <foreign> insertions, ~330 chars
// before the last patch) slid later offsets forward and reported patch #6 in 0296B when it plainly
// stands in 0296A. The drift is monotone and unbounded, so it can also turn a correct declaration
// into a hard MATCHES IN COLUMN failure, or hide a wrong one. Rebuild after every apply; the file
// is small and the scan is cheap.
const apply = p => {
  working = working.replace(p.find, p.replace);
  rebuildMarks();
};

for (const [i, p] of patches.entries()) {
  const tag = `#${String(i + 1).padStart(3)} ${p.col}`;
  const n = working.split(p.find).length - 1;
  if (n !== 1) { console.error(`✗ ${tag}  find matches ${n}×, expected 1`); fail++; continue; }
  if (p.find === p.replace) { console.error(`✗ ${tag}  replace is identical to find (no-op)`); fail++; continue; }
  // Resolve the column of the EDIT, not of the find string's first character:
  // a find carries context padding either side, and that padding routinely reaches
  // back into the previous column. "Which column does this patch change?" is the
  // question the declared col answers, so that is what must be compared.
  // ⭐ A patch may legitimately edit text that stands BEFORE the work's first <pb>: Migne's
  // book-title banner sits between the previous work's last band and this work's first column
  // mark, so there is no enclosing column to declare. Declaring one would be a false claim about
  // where the edit lands. Such a patch declares `col: null` and the audit VERIFIES the position
  // rather than waiving it — the edit offset must really precede the first column mark.
  // Added 2026-09-06 for the Glossa Pentateuch book-title recovery (Wilson's ruling).
  if (p.col === null) {
    const at = working.indexOf(p.find);
    if (at === -1) { console.error(`✗ ${tag}  find not present`); fail++; continue; }
    if (marks.length && at > marks[0].at) {
      console.error(`✗ ${tag}  declares col null (before the first column mark) but lands AFTER ${marks[0].n}`);
      fail++; continue;
    }
    console.log(`✓ ${tag}  pre-column banner, verified before the first <pb> (${marks[0]?.n ?? 'no marks'})`);
    apply(p);
    continue;
  }
  const base = working.indexOf(p.find);
  let d = 0;
  while (d < Math.min(p.find.length, p.replace.length) && p.find[d] === p.replace[d]) d++;
  const off = base + d;
  const actual = colAt(off);
  const want = String(p.col).trim();
  // declared col may carry a band letter the match's own pb lacks, or vice versa
  const same = actual === want || actual?.replace(/[A-D]$/, '') === want.replace(/[A-D]$/, '');
  if (!same) {
    console.error(`✗ ${tag}  MATCHES IN COLUMN ${actual} — declared ${want}. Uniqueness is not location; re-aim this find.`);
    fail++; apply(p); continue;
  }
  if (actual !== want) { console.warn(`⚠ ${tag}  band differs: match sits in ${actual}`); warn++; }
  if (reads && !reads.has(want.replace(/[A-D]$/, ''))) { console.warn(`⚠ ${tag}  no recorded plate read for this column`); warn++; }
  apply(p);
}
console.log(`\n${patches.length} patches · ${fail} failed · ${warn} warning(s)`);
if (fail) { console.error('PATCH AUDIT FAILED — do not chunk.'); process.exit(1); }
console.log('patch audit OK — every find is unique AND lands in its declared column.');
