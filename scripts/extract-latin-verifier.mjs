#!/usr/bin/env node
// extract-latin-verifier.mjs — pull Migne's parallel Latin column (scan OCR)
// for a PG work's span, as a per-leaf labeled reference file.
//
// Usage: node scripts/extract-latin-verifier.mjs <workKey>
// Writes: raw/verifier/<workKey>-latin.txt  (gitignored; Zelzer-pattern local
// verifier only — rough OCR, never republished)
//
// Leaves are selected by CONTENT: a leaf is in-span if its Greek OCR shares
// enough distinctive tokens with any Calfa page of the work (the map's leaf
// field can be off near section seams, so we match text, not indexes).

import fs from 'node:fs';
import path from 'node:path';

const key = process.argv[2];
const ROOT = path.join(import.meta.dirname, '..');
const reg = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/pg-works.json'), 'utf8'));
const work = reg.works.find(w => w.key === key);
if (!work) { console.error('unknown work key'); process.exit(1); }
const volPad = String(work.volume).padStart(3, '0');

const scanDir = path.join(ROOT, `raw/scans/pg${volPad}`);
const xmlFile = fs.readdirSync(scanDir).find(f => f.endsWith('_djvu.xml'));
const xml = fs.readFileSync(path.join(scanDir, xmlFile), 'utf8');
const objects = xml.split('<OBJECT').slice(1);

const strip = s => s.normalize('NFD').replace(/[̀-ͯ͂̓̈́ͅ]/g, '').toLowerCase();
const leafData = objects.map(o => {
  const words = [];
  const re = /<WORD[^>]*>([^<]*)<\/WORD>/g;
  let m;
  while ((m = re.exec(o))) words.push(m[1]);
  return {
    words,
    greek: new Set(words.filter(w => /[Ͱ-Ͽἀ-῿]{5,}/.test(w)).map(strip)),
  };
});

const calfa = fs.readFileSync(path.join(ROOT, `sources/pg/calfa/PG${volPad}/PG${volPad}_text.txt`), 'utf8').split('\n');
const pages = [];
let cur = null;
for (const l of calfa) {
  const m = l.match(/^\$0=\d+ \$8=(\d+)/);
  if (m) { cur = { page: Number(m[1]), toks: new Set() }; pages.push(cur); }
  else if (cur) for (const w of l.split(/\s+/)) if (/^[Ͱ-Ͽἀ-῿]{6,}$/.test(w)) cur.toks.add(strip(w));
}
const span = pages.filter(p => p.page >= work.pages[0] && p.page <= work.pages[1]);

const mapFile = JSON.parse(fs.readFileSync(path.join(ROOT, `data/pg-column-maps/pg${volPad}.json`), 'utf8'));
const colOf = new Map(mapFile.pages.map(r => [r.page, r.colOdd]));

const out = [];
for (const p of span) {
  // find best-matching leaf near the map's estimate
  const est = mapFile.pages.find(r => r.page === p.page)?.leaf ?? null;
  let best = null, bestHits = 0;
  const lo = est !== null ? Math.max(0, est - 6) : 0;
  const hi = est !== null ? Math.min(leafData.length, est + 7) : leafData.length;
  for (let i = lo; i < hi; i++) {
    let hits = 0;
    for (const t of p.toks) if (leafData[i].greek.has(t)) hits++;
    if (hits > bestHits) { bestHits = hits; best = i; }
  }
  const colOdd = colOf.get(p.page);
  if (best === null || bestHits < 3) {
    out.push(`\n===== cols ${colOdd}/${colOdd + 1} (calfa p.${p.page}) — NO CONFIDENT LEAF MATCH (best hits ${bestHits}) =====\n`);
    continue;
  }
  const latin = leafData[best].words.filter(w => /^[A-Za-z][A-Za-z,.;:()'!?-]*$/.test(w) && !/[Ͱ-Ͽἀ-῿]/.test(w)).join(' ');
  out.push(`\n===== cols ${colOdd}/${colOdd + 1} (calfa p.${p.page}, leaf ${best}, ${bestHits} token hits) =====\n${latin}\n`);
}

const outPath = path.join(ROOT, 'raw/verifier', `${key}-latin.txt`);
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, `Latin verifier for ${work.title} (${work.citRange})
Allatius's Latin version as printed by Migne — ROUGH scan OCR, reference only.
Use: check cruces in the Greek against the Latin sense; never translate FROM this.
${out.join('')}`);
console.log(`wrote ${outPath} (${span.length} pages)`);
