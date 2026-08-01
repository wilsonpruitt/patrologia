#!/usr/bin/env node
// pg-latin-twin.mjs — extract Migne's parallel Latin column from a PG scan's
// djvu.xml, chunk-aligned 1:1 with an already-chunked Greek work.
// Usage: node scripts/pg-latin-twin.mjs <workKey>
//
// Reads:  data/pg-works.json (work.volume, work.pages)
//         data/pg-column-maps/pg<vol>.json (page -> leaf, greekCol, verified)
//         src/greek/<workKey>/NNNN.md + manifest.json (already chunked)
//         raw/scans/pg<vol>/<scanItem>_djvu.xml
// Writes: src/pg-latin/<workKey>/NNNN.md (one per Greek chunk)
//         src/pg-latin/<workKey>/manifest.json (sanity-gate log, spec §3.4/§2)
//
// Method (pg-paired-pilot.md §3.2-3.3):
//  - Per scan leaf, split WORD tokens into two columns by x-coordinate
//    (median-x of Greek-looking vs Latin-looking tokens gives the split);
//    words are already stored in reading order in the djvu XML, so filtering
//    by side and keeping array order reconstructs each column's running text.
//  - Latin column = the side NOT carrying Greek on that leaf (map's greekCol
//    tells us which of colOdd/colEven is Greek; Latin is the other).
//  - Per-chunk twin: read each Greek chunk's own [NNNN] anchors, map each
//    anchor (a greekCol value) back to its Calfa page via the column map,
//    then assemble the Latin text of exactly those same pages. This keeps
//    the twin aligned to the Greek chunk regardless of where chunk cuts fall
//    inside a page.
//  - Pages with no scan leaf (leaf: null in the map — a genuine gap, not
//    guessed) contribute no text; a bracketed gap note is inserted inline so
//    the artifact is honest about the hole rather than silently thin.

import fs from 'node:fs';
import path from 'node:path';

const key = process.argv[2];
if (!key) { console.error('usage: node scripts/pg-latin-twin.mjs <workKey>'); process.exit(1); }

const ROOT = path.join(import.meta.dirname, '..');
const reg = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/pg-works.json'), 'utf8'));
const work = reg.works.find(w => w.key === key);
if (!work) { console.error(`work key ${key} not found in data/pg-works.json`); process.exit(1); }
const volPad = String(work.volume).padStart(3, '0');

const greekDir = path.join(ROOT, 'src/greek', key);
if (!fs.existsSync(greekDir)) { console.error(`no Greek chunks at ${greekDir} — run chunk-work-pg.mjs first`); process.exit(1); }
const greekManifest = JSON.parse(fs.readFileSync(path.join(greekDir, 'manifest.json'), 'utf8'));

const map = JSON.parse(fs.readFileSync(path.join(ROOT, `data/pg-column-maps/pg${volPad}.json`), 'utf8'));
const pad4 = n => String(n).padStart(4, '0');
const pageByGreekCol = new Map();
const pageRec = new Map();
for (const r of map.pages) {
  pageRec.set(r.page, r);
  if (r.greekCol !== null && r.greekCol !== undefined) pageByGreekCol.set(pad4(r.greekCol), r.page);
}

// ---------- scan side: parse djvu.xml once ----------
const scanDir = path.join(ROOT, `raw/scans/pg${volPad}`);
const xmlFile = fs.readdirSync(scanDir).find(f => f.endsWith('_djvu.xml'));
if (!xmlFile) { console.error(`no _djvu.xml in ${scanDir}`); process.exit(1); }
const xml = fs.readFileSync(path.join(scanDir, xmlFile), 'utf8');
const objects = xml.split('<OBJECT').slice(1);
const wordRe = /<WORD coords="(\d+),\d+,\d+,\d+"[^>]*>([^<]*)<\/WORD>/g;
const leafWords = objects.map(o => {
  const words = [];
  let m;
  wordRe.lastIndex = 0;
  while ((m = wordRe.exec(o))) words.push({ x: Number(m[1]), w: m[2] });
  return words;
});

const isGreekWord = w => /[Ͱ-Ͽἀ-῿]{3,}/.test(w);
const isLatinWord = w => /^[A-Za-z,.;:-]{4,}$/.test(w);

// returns 'left' | 'right' | null (Greek side); also the split x
function greekSideAndSplit(words) {
  const gx = words.filter(({ w }) => isGreekWord(w)).map(({ x }) => x).sort((a, b) => a - b);
  const lx = words.filter(({ w }) => isLatinWord(w)).map(({ x }) => x).sort((a, b) => a - b);
  if (gx.length < 15 || lx.length < 15) return { side: null, split: null };
  const gm = gx[gx.length >> 1], lm = lx[lx.length >> 1];
  if (Math.abs(gm - lm) < 400) return { side: null, split: null };
  return { side: gm < lm ? 'left' : 'right', split: (gm + lm) / 2 };
}

// ---------- optional Latin-side sermon/work-boundary truncation ----------
// Mirrors data/calfa-patches/<key>.json but on the extracted Latin side: the
// Greek chunker can cut a work's span mid-page via a calfa-patches find/
// replace, but that only edits the Greek stream. If a work's last (or any)
// page shares a printed column with the NEXT work (as isidore-glabas-sermo-1
// does at page 27), the Latin crop must be told where to stop too.
const latinPatchPath = path.join(ROOT, 'data/pg-latin-patches', `${key}.json`);
const latinCuts = new Map(); // page -> cutBefore substring
if (fs.existsSync(latinPatchPath)) {
  const { patches } = JSON.parse(fs.readFileSync(latinPatchPath, 'utf8'));
  for (const p of patches) latinCuts.set(p.page, p.cutBefore);
  console.log(`applied ${patches.length} Latin-side truncation patch(es)`);
}

// ---------- optional alt-source gap fill ----------
// data/pg-latin-altsource/<key>.json: per-page Latin text pulled from a
// DIFFERENT scan/copy than the primary djvu.xml, for pages where the primary
// scan has no leaf at all (a real gap, not a crop error). Used when the
// primary scan is missing pages a second witness happens to carry intact.
const altPath = path.join(ROOT, 'data/pg-latin-altsource', `${key}.json`);
const altByPage = new Map();
if (fs.existsSync(altPath)) {
  const { pages: altPages } = JSON.parse(fs.readFileSync(altPath, 'utf8'));
  for (const [pg, v] of Object.entries(altPages)) altByPage.set(Number(pg), v);
  console.log(`loaded ${altByPage.size} alt-source page(s) from ${path.relative(ROOT, altPath)}`);
}

// ---------- per-page Latin text ----------
const latinByPage = new Map(); // page -> { text, leaf, latinCol, gap, altSource }
for (let p = work.pages[0]; p <= work.pages[1]; p++) {
  const rec = pageRec.get(p);
  if (!rec) continue;
  const latinCol = rec.greekCol === rec.colOdd ? rec.colEven : rec.colOdd;
  if (altByPage.has(p)) {
    const alt = altByPage.get(p);
    latinByPage.set(p, { text: alt.text, leaf: null, latinCol: alt.latinCol, gap: false, altSource: alt.provenance });
    continue;
  }
  if (rec.leaf === null || rec.leaf === undefined || rec.greekCol === null) {
    latinByPage.set(p, { text: '', leaf: null, latinCol, gap: true });
    continue;
  }
  const words = leafWords[rec.leaf];
  const { side, split } = greekSideAndSplit(words);
  if (side === null) {
    latinByPage.set(p, { text: '', leaf: rec.leaf, latinCol, gap: true });
    continue;
  }
  const latinSide = side === 'left' ? 'right' : 'left';
  const latinWords = words.filter(({ x }) => (latinSide === 'left' ? x < split : x >= split)).map(w => w.w);
  let text = latinWords.join(' ').replace(/\s+/g, ' ').trim();
  if (latinCuts.has(p)) {
    const cutBefore = latinCuts.get(p);
    const idx = text.indexOf(cutBefore);
    if (idx === -1) console.warn(`WARNING: latin-patch cutBefore "${cutBefore}" not found on page ${p} — truncation NOT applied, check manually`);
    else text = text.slice(0, idx).trim();
  }
  latinByPage.set(p, { text, leaf: rec.leaf, latinCol, gap: false });
}

// ---------- per-chunk assembly, aligned to the Greek chunk's own anchors ----------
const outDir = path.join(ROOT, 'src/pg-latin', key);
fs.mkdirSync(outDir, { recursive: true });
for (const f of fs.readdirSync(outDir)) if (/^\d{4}\.md$/.test(f)) fs.unlinkSync(path.join(outDir, f));

const chunkFiles = fs.readdirSync(greekDir).filter(f => /^\d{4}\.md$/.test(f)).sort();
const manifestOut = [];
const scanItem = xmlFile.replace('_djvu.xml', '');
const today = '2026-07-31';

for (const cf of chunkFiles) {
  const raw = fs.readFileSync(path.join(greekDir, cf), 'utf8');
  const meta = JSON.parse('{' + raw.split('---\n')[1].trim().split('\n').map(l => l.replace(/^(\w+):/, '"$1":')).join(',') + '}');
  const body = raw.split('---\n').slice(2).join('---\n');
  const anchors = [...new Set([...body.matchAll(/\[(\d{4})\]/g)].map(m => m[1]))];
  const pages = anchors.map(a => pageByGreekCol.get(a)).filter(p => p !== undefined);
  pages.sort((a, b) => a - b);

  const parts = [];
  let leaves = [];
  let gapPages = [];
  let altPages = [];
  for (const p of pages) {
    const rec = latinByPage.get(p);
    if (!rec || rec.gap) {
      parts.push(`[${pad4(rec ? rec.latinCol : 0)}] [gap: no scan leaf for Calfa p.${p} — see data/pg-column-maps/pg${volPad}.json]`);
      gapPages.push(p);
      continue;
    }
    if (rec.altSource) { altPages.push({ page: p, ...rec.altSource }); }
    else leaves.push(rec.leaf);
    parts.push(`[${pad4(rec.latinCol)}] ${rec.text}`);
  }
  const text = parts.join(' ').replace(/\s+/g, ' ').trim();
  const wc = text.replace(/\[\d{4}\]/g, '').replace(/\[gap:[^\]]*\]/g, '').split(/\s+/).filter(Boolean).length;

  const latinCols = pages.map(p => latinByPage.get(p)?.latinCol).filter(c => c !== undefined);
  const fm = {
    workKey: meta.workKey, work: meta.work, workEn: meta.workEn ?? null, authors: meta.authors,
    series: meta.series, volume: meta.volume, language: 'la', role: 'verifier',
    chunk: meta.chunk, chunkCount: meta.chunkCount,
    latinColFirst: latinCols.length ? pad4(Math.min(...latinCols)) : null,
    latinColLast: latinCols.length ? pad4(Math.max(...latinCols)) : null,
    words: wc,
    provenance: {
      scanItem, leaves: leaves.length ? [Math.min(...leaves), Math.max(...leaves)] : [],
      extracted: today, method: 'djvu.xml x-range crop', ocr: 'rough — verifier only, never source',
      ...(altPages.length ? { altSourcePages: altPages } : {}),
    },
  };
  const fmLines = Object.entries(fm).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n');
  const header = 'Migne’s parallel Latin — verifier only, never translate FROM this.';
  fs.writeFileSync(path.join(outDir, cf), `---\n${fmLines}\n---\n\n${header}\n\n${text}\n`);

  manifestOut.push({
    chunk: meta.chunk, greekWords: meta.words, latinWords: wc,
    ratio: meta.words ? +(wc / meta.words).toFixed(3) : null,
    pages, gapPages, leaves, altPages: altPages.map(a => a.page),
  });
}

const totalGreek = manifestOut.reduce((s, m) => s + m.greekWords, 0);
const totalLatin = manifestOut.reduce((s, m) => s + m.latinWords, 0);
const gate = {
  aEveryChunkNonEmpty: manifestOut.every(m => m.latinWords > 0),
  bWorkAggregateRatio: +(totalLatin / totalGreek).toFixed(3),
  bPerChunkOutOfBand: manifestOut.filter(m => m.ratio !== null && (m.ratio < 0.9 || m.ratio > 1.3)).map(m => m.chunk),
  bNote: 'Per-chunk ratio swings are expected where chunks cut mid-page (pages are the atomic Latin-crop unit, chunk boundaries are not page boundaries) or where a page has no scan leaf (gapPages). Work-level aggregate ratio is the reliable stat for gate (b); per-chunk flags are diagnostic, not independent failures, UNLESS a chunk reads near 0x (wrong column/map drift signal per spec).',
  cSpotChecks: 'see final harvest report — not auto-logged by this script',
};

fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify({
  workKey: key, scanItem, volume: work.volume, extracted: today,
  gate,
  chunks: manifestOut,
}, null, 2));

console.log(`${manifestOut.length} twin chunks → ${outDir}`);
for (const m of manifestOut) {
  const flag = m.ratio === null ? '?' : (m.ratio < 0.9 || m.ratio > 1.3) ? '*** OUT OF BAND ***' : 'ok';
  console.log(`  ${pad4(m.chunk)}  greek ${String(m.greekWords).padStart(5)}w  latin ${String(m.latinWords).padStart(5)}w  ratio ${m.ratio}  ${flag}${m.gapPages.length ? '  gapPages=' + m.gapPages.join(',') : ''}`);
}
