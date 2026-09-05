#!/usr/bin/env node
// Reconcile the markers a patch pass CLAIMED to unlock against the markers the English
// actually carries, at the column the patch declares.
//
// WHY. The Band B blind polarity read found seven defects the patch pass itself had
// introduced or left behind — a [sic:] fired on the WRONG WORD, four patched Latin sites
// whose English twin was never re-read, and two patches never built at all. Nothing in the
// pipeline reconciled "sites reported" against "markers actually standing". This does.
//
// A patch's `why` field states its claim in a fixed form: "unlocks [sic: *foo*]" /
// "unlocks [cj: *foo*; read *bar*]" / "unlocks [d: x, y]". Each claim is checked against
// the English chunk that covers the patch's column.
//
// Usage: node scripts/marker-reconcile.mjs <idno> [--band 10]
import fs from 'node:fs';

const idno = process.argv[2];
const bandIdx = process.argv.indexOf('--band');
const bandPrefix = bandIdx > 0 ? process.argv[bandIdx + 1] : '';

const d = JSON.parse(fs.readFileSync(`data/tei-patches/${idno}.json`, 'utf8'));
const engDir = `src/english/${idno}`;
const files = fs.readdirSync(engDir).filter(f => /^\d{4}\.md$/.test(f)).sort();

// map column -> english chunk text (a column belongs to the chunk whose body carries its anchor)
const chunkText = {}, colToChunk = {};
for (const f of files) {
  const t = fs.readFileSync(`${engDir}/${f}`, 'utf8');
  chunkText[f] = t;
  for (const m of t.matchAll(/\[(\d{4}[A-D])\]/g)) if (!colToChunk[m[1]]) colToChunk[m[1]] = f;
  const fm = t.match(/colFirst:\s*"?(\d{4}[A-D])"?/); if (fm && !colToChunk[fm[1]]) colToChunk[fm[1]] = f;
  const cc = t.match(/colContext:\s*"?(\d{4}[A-D])"?/); if (cc && !colToChunk[cc[1]]) colToChunk[cc[1]] = f;
}

const claims = [];
for (const p of d.patches) {
  if (bandPrefix && !p.col.startsWith(bandPrefix)) continue;
  for (const m of (p.why || '').matchAll(/[Uu]nlocks\s+(\[(?:sic|cj|d|var|ed):[^\]]*\])/g)) claims.push({ col: p.col, marker: m[1] });
  for (const m of (p.why || '').matchAll(/and\s+(\[(?:sic|cj|d|var|ed):[^\]]*\])/g)) claims.push({ col: p.col, marker: m[1] });
}

// normalise: compare on the marker's TYPE + its first quoted word, which is the claim that matters
const key = s => { const t = s.match(/^\[(\w+):/)[1]; const w = s.match(/\*([^*]+)\*/); return t + ':' + (w ? w[1] : s.slice(0, 20)); };

let missing = 0, found = 0;
const seen = new Set();
for (const c of claims) {
  const k = c.col + '|' + key(c.marker);
  if (seen.has(k)) continue; seen.add(k);
  const f = colToChunk[c.col];
  if (!f) { console.log(`  ⛔ ${c.col} ${c.marker} — NO ENGLISH CHUNK covers this column`); missing++; continue; }
  const t = chunkText[f];
  const kk = key(c.marker), type = kk.split(':')[0], word = kk.slice(type.length + 1);
  const re = new RegExp(`\\[${type}:[^\\]]*${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`);
  if (re.test(t)) { found++; continue; }
  console.log(`  ⛔ ${c.col} ${f} — CLAIMED ${c.marker} but the English does not carry it`);
  missing++;
}
console.log(`\n${found + missing} marker claims · ${found} standing · ${missing} MISSING`);
process.exit(missing ? 1 : 0);
