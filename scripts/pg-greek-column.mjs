#!/usr/bin/env node
// pg-greek-column.mjs — extract the scan's OWN Greek column from a PG work's
// djvu.xml, chunk-aligned 1:1 with the already-chunked Greek (Calfa) text.
// This is the "third witness" (pg-paired-pilot.md §4/§8a condition 1):
// independent of Calfa, zero marginal cost, used to plate-verify a reading by
// grep instead of a leaf render. It is NEVER a translation source — Calfa
// remains the Greek text agents translate from.
// Usage: node scripts/pg-greek-column.mjs <workKey>
//
// Reads:  data/pg-works.json (work.volume, work.pages)
//         data/pg-column-maps/pg<vol>.json (page -> leaf, greekCol, verified)
//         src/greek/<workKey>/NNNN.md + manifest.json (already chunked, Calfa)
//         raw/scans/pg<vol>/<scanItem>_djvu.xml
// Writes: src/pg-greek-scan/<workKey>/NNNN.md (one per Greek chunk, scan OCR)
//         src/pg-greek-scan/<workKey>/manifest.json (sanity log + greekPlateAbsentPages)
//
// Method: mirrors pg-latin-twin.mjs exactly, but crops the GREEK side of the
// same x-range split instead of the Latin side. Words are already in reading
// order in the djvu XML, so filtering by side and keeping array order
// reconstructs the scan's own Greek running text for that page.

import fs from 'node:fs';
import path from 'node:path';

const key = process.argv[2];
if (!key) { console.error('usage: node scripts/pg-greek-column.mjs <workKey>'); process.exit(1); }

const ROOT = path.join(import.meta.dirname, '..');
const reg = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/pg-works.json'), 'utf8'));
const work = reg.works.find(w => w.key === key);
if (!work) { console.error(`work key ${key} not found in data/pg-works.json`); process.exit(1); }
const volPad = String(work.volume).padStart(3, '0');

const greekDir = path.join(ROOT, 'src/greek', key);
if (!fs.existsSync(greekDir)) { console.error(`no Greek chunks at ${greekDir} — run chunk-work-pg.mjs first`); process.exit(1); }

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

// ---------- per-page scan-Greek text ----------
// greekPlateAbsentPages: pages in the work's span with no scan leaf at all —
// no third witness possible regardless of language. Required output
// (pg-paired-pilot.md §8a condition 2), computed here from the leaf
// inventory since this script already walks every page in the span.
const greekByPage = new Map(); // page -> { text, leaf, greekCol, gap }
const greekPlateAbsentPages = [];
for (let p = work.pages[0]; p <= work.pages[1]; p++) {
  const rec = pageRec.get(p);
  if (!rec) continue;
  if (rec.leaf === null || rec.leaf === undefined || rec.greekCol === null || rec.greekCol === undefined) {
    greekPlateAbsentPages.push(p);
    greekByPage.set(p, { text: '', leaf: null, greekCol: rec.greekCol ?? null, gap: true });
    continue;
  }
  const words = leafWords[rec.leaf];
  const { side, split } = greekSideAndSplit(words);
  if (side === null) {
    greekPlateAbsentPages.push(p);
    greekByPage.set(p, { text: '', leaf: rec.leaf, greekCol: rec.greekCol, gap: true });
    continue;
  }
  const greekWords = words.filter(({ x }) => (side === 'left' ? x < split : x >= split)).map(w => w.w);
  const text = greekWords.join(' ').replace(/\s+/g, ' ').trim();
  greekByPage.set(p, { text, leaf: rec.leaf, greekCol: rec.greekCol, gap: false });
}

// ---------- per-chunk assembly, aligned to the Greek chunk's own anchors ----------
const outDir = path.join(ROOT, 'src/pg-greek-scan', key);
fs.mkdirSync(outDir, { recursive: true });
for (const f of fs.readdirSync(outDir)) if (/^\d{4}\.md$/.test(f)) fs.unlinkSync(path.join(outDir, f));

const chunkFiles = fs.readdirSync(greekDir).filter(f => /^\d{4}\.md$/.test(f)).sort();
const manifestOut = [];
const scanItem = xmlFile.replace('_djvu.xml', '');
const today = '2026-08-01';

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
  for (const p of pages) {
    const rec = greekByPage.get(p);
    if (!rec || rec.gap) {
      parts.push(`[${pad4(rec ? rec.greekCol ?? 0 : 0)}] [gap: no scan leaf for Calfa p.${p} — see data/pg-column-maps/pg${volPad}.json]`);
      gapPages.push(p);
      continue;
    }
    leaves.push(rec.leaf);
    parts.push(`[${pad4(rec.greekCol)}] ${rec.text}`);
  }
  const text = parts.join(' ').replace(/\s+/g, ' ').trim();
  const wc = text.replace(/\[\d{4}\]/g, '').replace(/\[gap:[^\]]*\]/g, '').split(/\s+/).filter(Boolean).length;

  const fm = {
    workKey: meta.workKey, work: meta.work, workEn: meta.workEn ?? null, authors: meta.authors,
    series: meta.series, volume: meta.volume, language: 'grc-scan', role: 'verifier',
    chunk: meta.chunk, chunkCount: meta.chunkCount,
    words: wc,
    provenance: {
      scanItem, leaves: leaves.length ? [Math.min(...leaves), Math.max(...leaves)] : [],
      extracted: today, method: 'djvu.xml x-range crop (third witness, independent of Calfa)',
      ocr: 'rough — verifier only, never a translation source; Calfa remains the Greek source',
    },
  };
  const fmLines = Object.entries(fm).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n');
  const header = 'Scan’s own Greek column — third witness, plate-verification only. Never translate FROM this; Calfa is the Greek source.';
  fs.writeFileSync(path.join(outDir, cf), `---\n${fmLines}\n---\n\n${header}\n\n${text}\n`);

  manifestOut.push({
    chunk: meta.chunk, calfaWords: meta.words, scanWords: wc,
    ratio: meta.words ? +(wc / meta.words).toFixed(3) : null,
    pages, gapPages, leaves,
  });
}

const totalCalfa = manifestOut.reduce((s, m) => s + m.calfaWords, 0);
const totalScan = manifestOut.reduce((s, m) => s + m.scanWords, 0);
const gate = {
  aEveryChunkNonEmptyWhereLeafPresent: manifestOut.every(m => m.leaves.length === 0 || m.scanWords > 0),
  bWorkAggregateRatio: totalCalfa ? +(totalScan / totalCalfa).toFixed(3) : null,
  bNote: 'This is a rough-OCR third witness, not a translation source — the ratio is diagnostic (wrong-column detector), never a quality gate on its own. greekPlateAbsentPages marks pages where no third-witness check is possible at all.',
};

fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify({
  workKey: key, scanItem, volume: work.volume, extracted: today,
  greekPlateAbsentPages,
  gate,
  chunks: manifestOut,
}, null, 2));

console.log(`${manifestOut.length} scan-Greek chunks → ${outDir}`);
for (const m of manifestOut) {
  console.log(`  ${pad4(m.chunk)}  calfa ${String(m.calfaWords).padStart(5)}w  scan ${String(m.scanWords).padStart(5)}w  ratio ${m.ratio}${m.gapPages.length ? '  gapPages=' + m.gapPages.join(',') : ''}`);
}
if (greekPlateAbsentPages.length) {
  console.log(`greekPlateAbsentPages (no scan leaf, no third witness possible): ${greekPlateAbsentPages.join(',')}`);
} else {
  console.log('greekPlateAbsentPages: none — full third-witness coverage');
}
