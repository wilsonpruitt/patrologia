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
  // ⚑ A COLUMN CAN STRADDLE A CHUNK BOUNDARY, so a column maps to a SET of chunks, not one.
  // Mapping it to the first chunk carrying its anchor reported five correctly-fired Band C
  // markers as missing, because the words they stand on live in the NEXT chunk.
  const add = c => { (colToChunk[c] ||= []).push(f); };
  for (const m of t.matchAll(/\[(\d{4}[A-D])\]/g)) add(m[1]);
  const fm = t.match(/colFirst:\s*"?(\d{4}[A-D])"?/); if (fm) add(fm[1]);
  const cl = t.match(/colLast:\s*"?(\d{4}[A-D])"?/); if (cl) add(cl[1]);
  const cc = t.match(/colContext:\s*"?(\d{4}[A-D])"?/); if (cc) add(cc[1]);
}

// A claim can be DELIBERATELY WITHHELD — a marker the plate entitles us to fire but which the
// apparatus cannot hold (e.g. Migne omits a negative: no marker class reaches an omission).
// Those are reported as withheld, never as missing, and never silently dropped.
const WITHHELD = /DELIBERATELY NOT FIRED/;
const claims = [], withheld = [];
for (const p of d.patches) {
  if (bandPrefix && !p.col.startsWith(bandPrefix)) continue;
  if (WITHHELD.test(p.why || '')) {
    for (const m of (p.why || '').matchAll(/[Uu]nlocks\s+(\[(?:sic|cj|d|var|ed):[^\]]*\])/g)) withheld.push({ col: p.col, marker: m[1] });
    continue;
  }
  for (const m of (p.why || '').matchAll(/[Uu]nlocks\s+(\[(?:sic|cj|d|var|ed):[^\]]*\])/g)) claims.push({ col: p.col, marker: m[1] });
  for (const m of (p.why || '').matchAll(/and\s+(\[(?:sic|cj|d|var|ed):[^\]]*\])/g)) claims.push({ col: p.col, marker: m[1] });
}

// normalise: compare on the marker's TYPE + its first quoted word, which is the claim that matters
// ⚑ [d: x, y] carries NO italic word, so an italics-only key built an unmatchable regex and
// reported every correctly-fired [d:] as missing. Fall back to the first bare token.
const key = s => {
  const t = s.match(/^\[(\w+):/)[1];
  const w = s.match(/\*([^*]+)\*/) || s.match(/^\[\w+:\s*([^,\];]+)/);
  return t + ':' + (w ? w[1].trim() : s.slice(0, 20));
};

let missing = 0, found = 0;
const seen = new Set();
for (const c of claims) {
  const k = c.col + '|' + key(c.marker);
  if (seen.has(k)) continue; seen.add(k);
  const fs_ = colToChunk[c.col];
  if (!fs_) { console.log(`  ⛔ ${c.col} ${c.marker} — NO ENGLISH CHUNK covers this column`); missing++; continue; }
  const f = fs_.join(',');
  const t = fs_.map(x => chunkText[x]).join('\n');
  const kk = key(c.marker), type = kk.split(':')[0], word = kk.slice(type.length + 1);
  const re = new RegExp(`\\[${type}:[^\\]]*${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`);
  if (re.test(t)) { found++; continue; }
  console.log(`  ⛔ ${c.col} ${f} — CLAIMED ${c.marker} but the English does not carry it`);
  missing++;
}
for (const w of withheld) console.log(`  ⏸ ${w.col} ${w.marker} — WITHHELD by ruling, not missing`);
console.log(`\n${found + missing} marker claims · ${found} standing · ${missing} MISSING · ${withheld.length} withheld by ruling`);
process.exit(missing ? 1 : 0);
