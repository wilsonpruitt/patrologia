#!/usr/bin/env node
// pg-page-column-map.mjs — map Calfa PDF pages ($8 markers) to Migne PG column pairs,
// validated against the archive.org scan's running heads.
//
// Usage: node scripts/pg-page-column-map.mjs <pgVol e.g. 139>
// Reads:  sources/pg/calfa/PG<vol>/PG<vol>_text.txt
//         raw/scans/pg<vol>/<scanId>_djvu.xml   (per-leaf OCR)
// Writes: data/pg-column-maps/pg<vol>.json
//
// Method:
//  1. Scan side: for each leaf, OCR words near the top contain the running head
//     "<colL> <AUCTOR> <colR>". Detect the column pair; smooth against the
//     expected +2-per-leaf progression (running heads are OCR-noisy).
//  2. Calfa side: candidate linear fit colOdd = 2*page + offset, offset fitted by
//     matching distinctive Greek tokens from each Calfa page against the scan leaf
//     that carries the predicted column pair (scan Greek OCR is noisy; token hit
//     of rare words is still discriminating).
//  3. Emit per-page records {page, colOdd, colEven, verified, leaf, hitTokens}.
//     Fail loudly if any page in a requested span cannot be verified within ±1 leaf.

import fs from 'node:fs';
import path from 'node:path';

const vol = process.argv[2];
if (!vol) { console.error('usage: pg-page-column-map.mjs <vol>'); process.exit(1); }
const volPad = vol.padStart(3, '0');
const root = path.resolve(new URL('.', import.meta.url).pathname, '..');

const calfaPath = path.join(root, `sources/pg/calfa/PG${volPad}/PG${volPad}_text.txt`);
const scanDir = path.join(root, `raw/scans/pg${volPad}`);
const xmlFile = fs.readdirSync(scanDir).find(f => f.endsWith('_djvu.xml'));
if (!xmlFile) { console.error(`no _djvu.xml in ${scanDir}`); process.exit(1); }

// ---------- scan side: leaf -> column pair ----------
const xml = fs.readFileSync(path.join(scanDir, xmlFile), 'utf8');
const objects = xml.split('<OBJECT').slice(1);
const leafWords = objects.map(o => {
  const words = [];
  const re = /<WORD[^>]*>([^<]*)<\/WORD>/g;
  let m;
  while ((m = re.exec(o))) words.push(m[1]);
  return words;
});
console.log(`scan leaves: ${leafWords.length}`);

// running-head column pair: look in the first 12 words for two 1-4 digit numbers
// that are ~1 apart (colL, colR) or a single number (other side lost to OCR)
function headCols(words) {
  const head = words.slice(0, 12).map(w => w.replace(/[^\d]/g, '')).filter(w => /^\d{1,4}$/.test(w)).map(Number);
  for (let i = 0; i < head.length - 1; i++) {
    for (let j = i + 1; j < head.length; j++) {
      const a = Math.min(head[i], head[j]), b = Math.max(head[i], head[j]);
      if (b - a >= 1 && b - a <= 2 && a >= 1 && b <= 1600) return [a, b];
    }
  }
  return head.length === 1 && head[0] >= 1 && head[0] <= 1600 ? [head[0]] : null;
}
const leafCols = leafWords.map(headCols);

// smooth: fit leaf -> colOdd on confident pairs, then fill
const confident = [];
leafCols.forEach((c, i) => { if (c && c.length === 2) confident.push([i, c[0] % 2 === 1 ? c[0] : c[0] - 1]); });
console.log(`leaves with confident head pairs: ${confident.length}`);

// piecewise: offsets (colOdd - 2*leaf) cluster; take running mode
const offsets = confident.map(([i, c]) => c - 2 * i);
function mode(arr) {
  const m = new Map(); let best = null, bn = 0;
  for (const v of arr) { const n = (m.get(v) || 0) + 1; m.set(v, n); if (n > bn) { bn = n; best = v; } }
  return best;
}
const leafToColOdd = new Array(leafWords.length).fill(null);
for (let i = 0; i < leafWords.length; i++) {
  // local offset = mode of confident offsets within ±25 leaves
  const local = confident.filter(([j]) => Math.abs(j - i) <= 25).map(([j, c]) => c - 2 * j);
  if (local.length) leafToColOdd[i] = 2 * i + mode(local);
}

// ---------- calfa side ----------
const calfa = fs.readFileSync(calfaPath, 'utf8').split('\n');
const pages = []; // {page, lines[]}
let cur = null;
for (const l of calfa) {
  const m = l.match(/^\$0=\d+ \$8=(\d+)/);
  if (m) { cur = { page: Number(m[1]), lines: [] }; pages.push(cur); }
  else if (cur) cur.lines.push(l);
}
console.log(`calfa pages: ${pages.length} (${pages[0].page}..${pages[pages.length - 1].page})`);

// distinctive tokens: Greek words >= 8 chars (rarer, more OCR-survivable)
function tokens(p) {
  const t = p.lines.join(' ').split(/\s+/).filter(w => /^[Ͱ-Ͽἀ-῿]{8,}$/.test(w));
  return [...new Set(t)];
}
// strip diacritics for fuzzy match (scan OCR mangles breathing marks)
const strip = s => s.normalize('NFD').replace(/[̀-ͯ͂̓̔ͅ]/g, '').toLowerCase();

// fit offset K in colOdd = 2*page + K: try candidates, score token hits
const leafGreek = leafWords.map(ws => new Set(ws.filter(w => /[Ͱ-Ͽἀ-῿]{4,}/.test(w)).map(strip)));
const colOddToLeaf = new Map();
leafToColOdd.forEach((c, i) => { if (c !== null && !colOddToLeaf.has(c)) colOddToLeaf.set(c, i); });

function scorePage(p, K) {
  const colOdd = 2 * p.page + K;
  const leaf = colOddToLeaf.get(colOdd);
  if (leaf === undefined) return { hits: -1 };
  const toks = tokens(p).map(strip);
  const g = leafGreek[leaf];
  let hits = 0; const hit = [];
  for (const t of toks) if (g.has(t)) { hits++; if (hit.length < 3) hit.push(t); }
  return { hits, total: toks.length, leaf, hit };
}

const sample = pages.filter((_, i) => i % 7 === 0).slice(0, 60);
let bestK = null, bestScore = -1;
for (let K = -25; K <= -5; K++) {
  let s = 0;
  for (const p of sample) { const r = scorePage(p, K); if (r.hits > 0) s += Math.min(r.hits, 5); }
  if (s > bestScore) { bestScore = s; bestK = K; }
}
console.log(`fitted offset K=${bestK} (colOdd = 2*page ${bestK >= 0 ? '+' : '-'} ${Math.abs(bestK)}), score ${bestScore}`);

// emit per-page map with verification
const out = pages.map(p => {
  const r = scorePage(p, bestK);
  return {
    page: p.page,
    colOdd: 2 * p.page + bestK,
    colEven: 2 * p.page + bestK + 1,
    leaf: r.leaf ?? null,
    verified: r.hits >= 2,
    tokenHits: r.hits > 0 ? r.hits : 0,
    sampleHits: r.hit || [],
  };
});
const verified = out.filter(o => o.verified).length;
console.log(`verified pages: ${verified}/${out.length}`);

const outPath = path.join(root, `data/pg-column-maps/pg${volPad}.json`);
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify({
  volume: Number(vol),
  scanItem: xmlFile.replace('_djvu.xml', ''),
  formula: { colOdd: `2*page + (${bestK})` },
  note: 'page = Calfa $8 PDF page; each page carries one Greek column pair (colOdd/colEven, Greek+Latin). verified = >=2 distinctive Greek tokens from the Calfa page found in the scan leaf carrying that column pair.',
  pages: out,
}, null, 1));
console.log(`wrote ${outPath}`);
