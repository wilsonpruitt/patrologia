#!/usr/bin/env node
// Phase B retrofit (V2-PLAN.md): align each already-aligned PARAGRAPH sentence by sentence
// and stamp matching ⟦sN⟧ markers into the English, for a work whose Latin was stamped by
// mark-sentences.mjs. Machine-only; the English WORDS are never touched.
// Usage: node scripts/align-sentences.mjs <textIdno> [--write]
//
// Method: Gale–Church length alignment over beads 1:1, 1:2, 2:1, 2:2 (every sentence on
// both sides is used), plus a question-mark parity penalty. A paragraph whose best path
// contains a doubtful bead (|z| > Z_MAX, or a ?-parity break) is LOW CONFIDENCE and falls
// back to paragraph level: one merged marker ⟦s1+…+sn⟧ over the whole English paragraph.
// "A wrong sentence pairing is worse than none" — V2-PLAN.md Phase B.
// Report: data/sentence-align/<idno>.tsv (one row per paragraph).

import fs from 'node:fs';
import path from 'node:path';
import { segment } from './lib/segment.mjs';
import { stripMarkers } from './lib/sentence-markers.mjs';

const idno = process.argv[2];
if (!idno) { console.error('usage: node scripts/align-sentences.mjs <textIdno> [--write]'); process.exit(1); }
const WRITE = process.argv.includes('--write');
const Z_MAX = Number(process.env.Z_MAX ?? 2.2);
const ROOT = path.join(import.meta.dirname, '..');
const latDir = path.join(ROOT, 'src/latin', idno), engDir = path.join(ROOT, 'src/english', idno);
const manifest = JSON.parse(fs.readFileSync(path.join(latDir, 'manifest.json'), 'utf8'));

const split = raw => { const m = raw.match(/^(---\n[\s\S]*?\n---\n)([\s\S]*)$/); return { fm: m[1], body: m[2] }; };
const plain = s => s.replace(/\[(?:n|nt|cn|fn|vl|f|b|bid|sic|ed|d|var|lat|cj): [^\]]*\]|\[\d{3,5}[A-D]?\]/g, ' ').replace(/\s+/g, ' ').trim();
const len = s => plain(s).length;
const qmarks = s => (plain(s).match(/\?/g) || []).length;

// ---- Gale–Church ----
const erf = x => { const t = 1 / (1 + 0.3275911 * Math.abs(x)); const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x); return x >= 0 ? y : -y; };
const Phi = z => 0.5 * (1 + erf(z / Math.SQRT2));
const BEADS = [[1, 1, 0.12], [1, 2, 3.1], [2, 1, 3.1], [2, 2, 4.6]];
function beadCost(lSents, eSents, c) {
  const lL = lSents.reduce((n, s) => n + len(s), 0), lE = eSents.reduce((n, s) => n + len(s), 0);
  const mean = c * Math.max(lL, 1), z = (lE - mean) / Math.sqrt(mean * 6.8);
  const p = Math.max(2 * (1 - Phi(Math.abs(z))), 1e-6);
  const qL = lSents.reduce((n, s) => n + qmarks(s), 0), qE = eSents.reduce((n, s) => n + qmarks(s), 0);
  const qBreak = (qL > 0) !== (qE > 0);
  return { cost: -Math.log(p) + (qBreak ? 2.5 : 0), z, qBreak };
}
function align(L, E, c) {
  const n = L.length, m = E.length, INF = 1e9;
  const D = Array.from({ length: n + 1 }, () => Array(m + 1).fill(INF)), B = Array.from({ length: n + 1 }, () => Array(m + 1).fill(null));
  D[0][0] = 0;
  for (let i = 0; i <= n; i++) for (let j = 0; j <= m; j++) {
    if (D[i][j] >= INF) continue;
    for (const [a, b, prior] of BEADS) {
      if (i + a > n || j + b > m) continue;
      const bc = beadCost(L.slice(i, i + a), E.slice(j, j + b), c), t = D[i][j] + bc.cost + prior;
      if (t < D[i + a][j + b]) { D[i + a][j + b] = t; B[i + a][j + b] = [i, j, a, b, bc]; }
    }
  }
  if (D[n][m] >= INF) return null;
  const beads = [];
  for (let i = n, j = m; i > 0 || j > 0;) { const [pi, pj, a, b, bc] = B[i][j]; beads.unshift({ l: [pi, pi + a], e: [pj, pj + b], ...bc }); i = pi; j = pj; }
  return beads;
}

// ---- global length ratio from the work itself ----
const paraOf = line => { const lead = line.startsWith('- ') ? '- ' : ''; return { lead, text: line.slice(lead.length) }; };
const isPara = l => l.trim() && !/^##\s/.test(l);
let sumL = 0, sumE = 0;
const chunks = manifest.chunks.map(c => {
  const name = `${String(c.chunk).padStart(4, '0')}.md`;
  const lat = split(fs.readFileSync(path.join(latDir, name), 'utf8')), eng = split(fs.readFileSync(path.join(engDir, name), 'utf8'));
  if (!lat.body.includes('⟦p')) { console.error(`${name}: Latin is not stamped — run mark-sentences.mjs first`); process.exit(1); }
  eng.body = stripMarkers(eng.body);
  const lp = lat.body.split('\n').filter(isPara), ep = eng.body.split('\n').filter(isPara);
  if (lp.length !== ep.length) { console.error(`${name}: paragraph count ${lp.length} vs ${ep.length}`); process.exit(1); }
  lp.forEach((l, i) => { sumL += len(stripMarkers(l)); sumE += len(ep[i]); });
  return { name, c, lat, eng };
});
const C = sumE / sumL;

// ---- per-paragraph ----
const rows = [];
let nSent = 0, nFallback = 0;
for (const ch of chunks) {
  let pi = 0;
  const lp = ch.lat.body.split('\n');
  const outLines = ch.eng.body.split('\n');
  const latParas = lp.filter(isPara);
  let k = 0;
  for (let li = 0; li < outLines.length; li++) {
    if (!isPara(outLines[li])) continue;
    const lline = latParas[k++];
    const pid = lline.match(/⟦p(\d+[a-z]?)⟧/)[1];
    const L = lline.replace(/^(?:- )?⟦p\d+[a-z]?⟧ /, '').split(/⟦s\d+⟧ /).slice(1).map(s => s.trim());
    const { lead, text } = paraOf(outLines[li]);
    const E = segment(text);
    const beads = align(L, E, C);
    let conf = beads && beads.every(b => Math.abs(b.z) <= Z_MAX && !b.qBreak);
    const shape = beads ? beads.map(b => `${b.l[1] - b.l[0]}:${b.e[1] - b.e[0]}`).join(' ') : 'none';
    const worstZ = beads ? Math.max(...beads.map(b => Math.abs(b.z))).toFixed(2) : '';
    let marked;
    if (conf && L.length > 0) {
      let e = 0;
      const parts = [];
      for (const b of beads) {
        const ids = []; for (let x = b.l[0]; x < b.l[1]; x++) ids.push(x + 1);
        const tag = ids.length > 1 ? `⟦s${ids.join('+')}⟧` : `⟦s${ids[0]}⟧`;
        for (let x = b.e[0]; x < b.e[1]; x++) parts.push(`${tag} ${E[x]}`);
      }
      // one-to-many: the same id repeats, which the grammar allows
      marked = parts.join(' ');
    } else {
      nFallback++;
      marked = `⟦s${L.map((_, x) => (x === 0 ? '1' : `s${x + 1}`)).join('+')}⟧ ${text}`;
    }
    nSent += L.length;
    outLines[li] = `${lead}⟦p${pid}⟧ ${marked}`;
    rows.push([`${idno}.${ch.c.chunk}.${pid}`, L.length, E.length, shape, worstZ, conf ? 'sentence' : 'paragraph'].join('\t'));
  }
  ch.out = ch.eng.fm + outLines.join('\n');
}
const dir = path.join(ROOT, 'data/sentence-align');
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, `${idno}.tsv`), 'paraId\tlatSents\tengSents\tbeads\tworstZ\tlevel\n' + rows.join('\n') + '\n');
const nP = rows.length, nSentLvl = nP - nFallback;
console.log(`${idno}: ${nP} paragraphs, ${nSentLvl} sentence-level (${(100 * nSentLvl / nP).toFixed(1)}%), ${nFallback} fall back to paragraph level; ratio ${C.toFixed(2)}; Z_MAX ${Z_MAX}`);
if (WRITE) { for (const ch of chunks) fs.writeFileSync(path.join(engDir, ch.name), ch.out); console.log('written to src/english'); }
else console.log('(dry run; --write to stamp src/english)');
