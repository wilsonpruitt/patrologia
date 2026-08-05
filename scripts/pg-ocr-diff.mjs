#!/usr/bin/env node
// Diff two independent transcriptions of the same leaves into an adjudication queue.
// Usage: node scripts/pg-ocr-diff.mjs <dirA> <dirB> [--json out.json]
//
// Batch 2 was transcribed twice: once from crops that were cutting the openings
// off Migne's outdented scripture quotations, and once from re-cropped wide
// images. The second pass was run BLIND — the agents were never shown the first
// transcription — so the two are independent reads of the same plate rather than
// a correction of one by the other.
//
// That independence is the point. Where they agree, two readers with no contact
// read the same thing, which is the strongest evidence this pipeline can make
// about a Greek letter. Where they disagree, the disagreement is exactly the
// Opus adjudication queue, and it costs nothing to find.
//
// The comparison is deliberately dumb. It aligns word sequences and reports what
// differs; it does NOT decide who is right, prefer the newer pass, or normalise
// accents — every one of those would be a silent correction made by a script
// that has never seen the plate. Adjudication reads the plate. This only points.
//
// Reported classes:
//   only-in-B   a word the second pass has and the first lacks. The expected
//               shape of the crop fix: recovered line-openings appear here.
//   only-in-A   a word the first pass has and the second lacks — the alarming
//               direction, meaning the wider crop LOST something. Check these
//               first; nothing about widening a crop should drop text.
//   differs     both read a word in the same place, differently. Accent-only
//               differences are separated out, because Migne's grave-before-comma
//               convention makes them a known, systematic class rather than
//               independent errors.

import fs from 'node:fs';
import path from 'node:path';

const [dirA, dirB] = process.argv.slice(2).filter(a => !a.startsWith('--'));
if (!dirA || !dirB) { console.error('usage: pg-ocr-diff.mjs <dirA> <dirB>'); process.exit(1); }
const jsonOut = process.argv.includes('--json') ? process.argv[process.argv.indexOf('--json') + 1] : null;
const ROOT = path.join(import.meta.dirname, '..');
const abs = d => path.isAbsolute(d) ? d : path.join(ROOT, d);

const SECTIONS = ['UNCERTAIN:', 'LATIN-EXCLUDED:', 'FOOTNOTES-SKIPPED:'];

function body(file) {
  const raw = fs.readFileSync(file, 'utf8');
  let cut = raw.length;
  for (const s of SECTIONS) { const i = raw.indexOf('\n' + s); if (i !== -1 && i < cut) cut = i; }
  return raw.slice(0, cut);
}

// Words, with the apparatus markers stripped: [A] marginals and ⟨?⟩ are not text.
// End-of-line hyphens are kept — they are printed and carry information.
const words = t => t
  .replace(/\[[A-D]\]/g, ' ')
  .replace(/⟨\?⟩/g, ' ')
  .split(/\s+/).filter(Boolean);

const strip = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').normalize('NFC');

// Longest common subsequence over words, then walk it to classify the gaps.
function align(a, b) {
  const n = a.length, m = b.length;
  // band the DP: these are the same text, so alignment never drifts far
  const BAND = 60;
  const dp = Array.from({ length: n + 1 }, () => new Int32Array(m + 1));
  for (let i = 1; i <= n; i++) {
    const lo = Math.max(1, i - BAND), hi = Math.min(m, i + BAND);
    for (let j = lo; j <= hi; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1] + 1
        : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  const ops = [];
  let i = n, j = m;
  while (i > 0 && j > 0) {
    if (a[i - 1] === b[j - 1]) { ops.push(['=', a[i - 1], i - 1, j - 1]); i--; j--; }
    else if (dp[i - 1][j] >= dp[i][j - 1]) { ops.push(['-', a[i - 1], i - 1, j]); i--; }
    else { ops.push(['+', b[j - 1], i, j - 1]); j--; }
  }
  while (i > 0) { ops.push(['-', a[i - 1], i - 1, 0]); i--; }
  while (j > 0) { ops.push(['+', b[j - 1], 0, j - 1]); j--; }
  return ops.reverse();
}

const leaves = fs.readdirSync(abs(dirA)).filter(f => /^leaf\d+\.txt$/.test(f)).sort();
const report = [];
let sameCount = 0, wordTotal = 0;

for (const f of leaves) {
  const fb = path.join(abs(dirB), f);
  if (!fs.existsSync(fb)) { console.log(`⚠ ${f}: missing in ${dirB} — not re-read`); continue; }
  const A = words(body(path.join(abs(dirA), f)));
  const B = words(body(fb));
  const ops = align(A, B);

  const onlyA = [], onlyB = [], differs = [], accentOnly = [];
  for (let k = 0; k < ops.length; k++) {
    const [op, w] = ops[k];
    if (op === '=') { sameCount++; continue; }
    // A deletion adjacent to an insertion is one word read two ways, not a loss
    // plus an unrelated gain. The LCS emits the pair in EITHER order depending on
    // which side it walked first, so both must be handled — checking only '-'
    // then '+' reported every accent variant twice, once as text the wide crop
    // "lost" and once as text it "recovered", which buried the real losses.
    const nxt = ops[k + 1];
    if ((op === '-' && nxt?.[0] === '+') || (op === '+' && nxt?.[0] === '-')) {
      const a = op === '-' ? w : nxt[1];
      const b = op === '-' ? nxt[1] : w;
      const ctx = ops.slice(Math.max(0, k - 3), k).filter(o => o[0] === '=').map(o => o[1]).join(' ');
      (strip(a) === strip(b) ? accentOnly : differs).push({ a, b, ctx });
      k++;
      continue;
    }
    const ctx = ops.slice(Math.max(0, k - 3), k).filter(o => o[0] === '=').map(o => o[1]).join(' ');
    (op === '-' ? onlyA : onlyB).push({ w, ctx });
  }
  wordTotal += A.length;
  report.push({ leaf: f, aWords: A.length, bWords: B.length, onlyA, onlyB, differs, accentOnly });
}

console.log(`compared ${report.length} leaves — ${dirA} (A) vs ${dirB} (B)\n`);
for (const r of report) {
  const n = r.onlyA.length + r.onlyB.length + r.differs.length + r.accentOnly.length;
  const agree = r.aWords ? (100 * (r.aWords - r.onlyA.length - r.differs.length - r.accentOnly.length) / r.aWords) : 0;
  console.log(`${r.leaf}  A=${r.aWords} B=${r.bWords} words  ${agree.toFixed(1)}% agree  ${n} to adjudicate`
    + `  [only-A ${r.onlyA.length} · only-B ${r.onlyB.length} · differs ${r.differs.length} · accent ${r.accentOnly.length}]`);
  for (const x of r.onlyA.slice(0, 6)) console.log(`   ⛔ only in A (wide crop LOST it): "${x.w}"   …${x.ctx}`);
  for (const x of r.differs.slice(0, 8)) console.log(`   ? A="${x.a}" B="${x.b}"   …${x.ctx}`);
  for (const x of r.onlyB.slice(0, 6)) console.log(`   + only in B (recovered): "${x.w}"   …${x.ctx}`);
}

const tot = k => report.reduce((s, r) => s + r[k].length, 0);
console.log(`\nTOTAL  only-A ${tot('onlyA')} · only-B ${tot('onlyB')} · differs ${tot('differs')} · accent-only ${tot('accentOnly')}`);
console.log(`${sameCount} words read identically by two independent passes.`);
console.log('\nonly-A entries mean the WIDER crop lost text — read those against the plate first.');
if (jsonOut) fs.writeFileSync(path.join(ROOT, jsonOut), JSON.stringify(report, null, 1));
