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
// Where a chunk's Latin and English disagree on paragraph breaks (counts differ), paragraphs are
// first paired by a second Gale–Church pass (beads 1:1, 1:2, 2:1, 1:3, 3:1, 2:2; a bead whose
// [col] anchors differ is penalised) and each bead is then aligned as one group. A ⟦pN⟧ may
// therefore sit mid-line in the English (one English paragraph rendering two Latin ones), and
// an English paragraph break inside a Latin paragraph just carries ⟦sN⟧ markers on its new line.
// English-only editorial lines ([ed: …] alone) are skipped.
// Report: data/sentence-align/<idno>.tsv (one row per Latin paragraph; `group` shows the pairing).

import fs from 'node:fs';
import path from 'node:path';
import { segment } from './lib/segment.mjs';
import { stripMarkers, isEditorialOnly } from './lib/sentence-markers.mjs';

const idno = process.argv[2];
if (!idno) { console.error('usage: node scripts/align-sentences.mjs <textIdno> [--write]'); process.exit(1); }
const WRITE = process.argv.includes('--write');
const Z_MAX = Number(process.env.Z_MAX ?? 2.2);
const ROOT = path.join(import.meta.dirname, '..');
// <idno> (numeric) = a PL work; anything else = a PG work key (Greek source in src/greek/<key>)
const IS_PG = !/^\d+$/.test(idno);
const latDir = path.join(ROOT, IS_PG ? 'src/greek' : 'src/latin', idno), engDir = path.join(ROOT, 'src/english', idno);
const manifest = JSON.parse(fs.readFileSync(path.join(latDir, 'manifest.json'), 'utf8'));

const split = raw => { const m = raw.match(/^(---\n[\s\S]*?\n---\n)([\s\S]*)$/); return { fm: m[1], body: m[2] }; };
const plain = s => s.replace(/\[(?:n|nt|cn|fn|vl|f|b|bid|sic|ed|d|var|lat|cj): [^\]]*\]|\[\d{3,5}[A-D]?\]/g, ' ').replace(/\s+/g, ' ').trim();
const len = s => plain(s).length;
const qmarks = s => (plain(s).match(/\?/g) || []).length;
const qmarksSrc = s => (plain(s).match(IS_PG ? /[?;]/g : /\?/g) || []).length; // Greek ; IS the question mark (English ; is not)

// ---- Gale–Church ----
const erf = x => { const t = 1 / (1 + 0.3275911 * Math.abs(x)); const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x); return x >= 0 ? y : -y; };
const Phi = z => 0.5 * (1 + erf(z / Math.SQRT2));
const BEADS = [[1, 1, 0.12], [1, 2, 3.1], [2, 1, 3.1], [2, 2, 4.6]];
const PBEADS = [[1, 1, 0.12], [1, 2, 3.5], [2, 1, 3.5], [1, 3, 5], [3, 1, 5], [2, 2, 5]];
function beadCost(lSents, eSents, c) {
  const lL = lSents.reduce((n, s) => n + len(s), 0), lE = eSents.reduce((n, s) => n + len(s), 0);
  const mean = c * Math.max(lL, 1), z = (lE - mean) / Math.sqrt(mean * 6.8);
  const p = Math.max(2 * (1 - Phi(Math.abs(z))), 1e-6);
  const qL = lSents.reduce((n, s) => n + qmarksSrc(s), 0), qE = eSents.reduce((n, s) => n + qmarks(s), 0);
  const qBreak = (qL > 0) !== (qE > 0);
  return { cost: -Math.log(p) + (qBreak ? 2.5 : 0), z, qBreak };
}
function align(L, E, c, bounds = null, beadSet = BEADS, extra = null) {
  const n = L.length, m = E.length, INF = 1e9;
  const D = Array.from({ length: n + 1 }, () => Array(m + 1).fill(INF)), B = Array.from({ length: n + 1 }, () => Array(m + 1).fill(null));
  D[0][0] = 0;
  for (let i = 0; i <= n; i++) for (let j = 0; j <= m; j++) {
    if (D[i][j] >= INF) continue;
    for (const [a, b, prior] of beadSet) {
      if (i + a > n || j + b > m) continue;
      if (bounds && a > 1 && bounds[i] !== bounds[i + a - 1]) continue; // a sentence bead never straddles two Latin paragraphs
      const bc = beadCost(L.slice(i, i + a), E.slice(j, j + b), c), t = D[i][j] + bc.cost + prior + (extra ? extra(i, a, j, b) : 0);
      if (t < D[i + a][j + b]) { D[i + a][j + b] = t; B[i + a][j + b] = [i, j, a, b, bc]; }
    }
  }
  if (D[n][m] >= INF) return null;
  const beads = [];
  for (let i = n, j = m; i > 0 || j > 0;) { const [pi, pj, a, b, bc] = B[i][j]; beads.unshift({ l: [pi, pi + a], e: [pj, pj + b], ...bc }); i = pi; j = pj; }
  return beads;
}

// ---- per chunk ----
const paraOf = line => { const lead = line.startsWith('- ') ? '- ' : ''; return { lead, text: line.slice(lead.length) }; };
const isLatPara = l => l.trim() && !/^##\s/.test(l);
const isEngPara = l => isLatPara(l) && !isEditorialOnly(l);
const anchorsOf = s => (s.match(/\[\d{3,5}[A-D]?\]/g) || []).join(',');
const notesOf = s => (s.match(/\[(?:n|nt): /g) || []).length;
let sumL = 0, sumE = 0;
const chunks = manifest.chunks.map(c => {
  const name = `${String(c.chunk).padStart(4, '0')}.md`;
  const lat = split(fs.readFileSync(path.join(latDir, name), 'utf8')), eng = split(fs.readFileSync(path.join(engDir, name), 'utf8'));
  if (!lat.body.includes('⟦p')) { console.error(`${name}: Latin is not stamped — run mark-sentences.mjs first`); process.exit(1); }
  eng.body = stripMarkers(eng.body);
  const lp = lat.body.split('\n').filter(isLatPara), ep = eng.body.split('\n').filter(isEngPara);
  lp.forEach(l => { sumL += len(stripMarkers(l)); }); ep.forEach(l => { sumE += len(l); });
  return { name, c, lat, eng };
});
const C = sumE / sumL;

const rows = [];
let nFallback = 0, nRagged = 0, wideBeads = 0;
const fb = (ids, first) => `⟦s${ids.map((x, i) => (i === 0 ? x : `s${x}`)).join('+')}⟧`;
for (const ch of chunks) {
  const outLines = ch.eng.body.split('\n');
  const engIdx = outLines.map((l, i) => (isEngPara(l) ? i : -1)).filter(i => i >= 0);
  const latParas = ch.lat.body.split('\n').filter(isLatPara).map(line => {
    const pid = line.match(/⟦p(\d+[a-z]?)⟧/)[1];
    const sents = line.replace(/^(?:- )?⟦p\d+[a-z]?⟧ /, '').split(/⟦s\d+⟧ /).slice(1).map(x => x.trim());
    return { pid, sents };
  });
  const engParas = engIdx.map(i => { const { lead, text } = paraOf(outLines[i]); return { i, lead, text, sents: segment(text) }; });

  // 1. pair paragraphs into groups [latStart, latEnd, engStart, engEnd)
  let groups;
  if (latParas.length === engParas.length) groups = latParas.map((_, k) => [k, k + 1, k, k + 1]);
  // a source chunk with ONE paragraph (PG: Calfa's Greek has no paragraphing) against an English
  // that is paragraphed: the whole chunk is one group, English paragraphs are continuation lines
  else if (latParas.length === 1) groups = [[0, 1, 0, engParas.length]];
  else {
    const pl = latParas.map(p => p.sents.join(' ')), pe = engParas.map(p => p.text);
    const extra = (i, a, j, b) => {
      const la = pl.slice(i, i + a).map(anchorsOf).filter(Boolean).join(','), ea = pe.slice(j, j + b).map(anchorsOf).filter(Boolean).join(',');
      return (la !== ea ? 5 : 0) + (pl.slice(i, i + a).reduce((n, x) => n + notesOf(x), 0) !== pe.slice(j, j + b).reduce((n, x) => n + notesOf(x), 0) ? 2 : 0);
    };
    const beads = align(pl, pe, C, null, PBEADS, extra);
    if (!beads) { console.error(`${ch.name}: cannot pair ${latParas.length} Latin and ${engParas.length} English paragraphs`); process.exit(1); }
    groups = beads.map(b => [b.l[0], b.l[1], b.e[0], b.e[1]]);
    nRagged += groups.filter(g => g[1] - g[0] !== 1 || g[3] - g[2] !== 1).length;
  }

  // 2. align each group's sentences and write the markers
  for (const [l0, l1, e0, e1] of groups) {
    const LP = latParas.slice(l0, l1), EP = engParas.slice(e0, e1);
    const L = [], bounds = [], lmap = [];
    LP.forEach((p, pi) => p.sents.forEach((x, si) => { L.push(x); bounds.push(pi); lmap.push([pi, si + 1]); }));
    const E = [], emap = [];
    EP.forEach((p, pj) => p.sents.forEach(x => { E.push(x); emap.push(pj); }));
    const beads = L.length && E.length ? align(L, E, C, bounds) : null;
    const doubtful = b => Math.abs(b.z) > Z_MAX || b.qBreak;
    let conf = !!beads && beads.every(b => !doubtful(b));
    // PG only: a long group (a whole Greek chunk is one paragraph) must not fall back wholesale
    // because of one doubtful bead. Collapse each doubtful bead WITH ITS NEIGHBOURS into one wide
    // many:many bead (the true pair lies inside it), unless that would straddle a Latin paragraph.
    if (IS_PG && beads && !conf) {
      const bad = new Set(); beads.forEach((b, k) => { if (doubtful(b)) { bad.add(k - 1); bad.add(k); bad.add(k + 1); } });
      const merged = []; let ok = true;
      for (let k = 0; k < beads.length; k++) {
        if (!bad.has(k)) { merged.push(beads[k]); continue; }
        let k2 = k; while (bad.has(k2 + 1) && k2 + 1 < beads.length) k2++;
        const m = { l: [beads[k].l[0], beads[k2].l[1]], e: [beads[k].e[0], beads[k2].e[1]], z: 0, qBreak: false, wide: true };
        if (bounds[m.l[0]] !== bounds[m.l[1] - 1]) { ok = false; break; }
        merged.push(m); k = k2;
      }
      if (ok) { beads.length = 0; beads.push(...merged); conf = true; wideBeads += merged.filter(m => m.wide).length; }
    }
    let shape = beads ? beads.map(b => `${b.l[1] - b.l[0]}:${b.e[1] - b.e[0]}`).join(' ') : 'none';
    const worstZ = beads ? Math.max(...beads.map(b => Math.abs(b.z))).toFixed(2) : '';
    const ragged = l1 - l0 !== 1 || e1 - e0 !== 1;
    const outE = EP.map(() => []); // per English paragraph: marked pieces
    if (conf) {
      let cur = -1; // Latin paragraph (within the group) currently open
      for (const b of beads) {
        const pi = lmap[b.l[0]][0];
        const ids = []; for (let x = b.l[0]; x < b.l[1]; x++) ids.push(lmap[x][1]);
        const tag = ids.length > 1 ? `⟦s${ids.join('+')}⟧` : `⟦s${ids[0]}⟧`;
        for (let x = b.e[0]; x < b.e[1]; x++) {
          let pre = '';
          if (pi !== cur) { pre = `⟦p${LP[pi].pid}⟧ `; cur = pi; }
          outE[emap[x]].push(`${pre}${tag} ${E[x]}`);
        }
      }
    } else {
      nFallback += LP.length;
      const all = LP.map(p => p.sents.map((_, x) => x + 1));
      EP.forEach((p, pj) => outE[pj].push(`${pj === 0 ? `⟦p${LP[0].pid}⟧ ` : ''}${fb(all[0])} ${p.text}`));
      // further Latin paragraphs of an English paragraph that spans them: marked at the end, no text of their own
      for (let k = 1; k < LP.length; k++) outE[outE.length - 1].push(`⟦p${LP[k].pid}⟧ ${fb(all[k])}`);
    }
    EP.forEach((p, pj) => { outLines[p.i] = p.lead + outE[pj].join(' ').replace(/ +$/, ''); });
    LP.forEach((p, pi) => rows.push([`${idno}.${ch.c.chunk}.${p.pid}`, p.sents.length, E.length, shape, worstZ, conf ? 'sentence' : 'paragraph', ragged ? `${l1 - l0}:${e1 - e0}` : ''].join('\t')));
  }
  ch.out = ch.eng.fm + outLines.join('\n');
}
const dir = path.join(ROOT, 'data/sentence-align');
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, `${idno}.tsv`), 'paraId\tlatSents\tengSents\tbeads\tworstZ\tlevel\tgroup\n' + rows.join('\n') + '\n');
const nP = rows.length, nSentLvl = nP - nFallback;
console.log(`${idno}: ${nP} paragraphs, ${nSentLvl} sentence-level (${(100 * nSentLvl / nP).toFixed(1)}%), ${nFallback} fall back to paragraph level; ${nRagged} ragged paragraph group(s)${IS_PG ? `; ${wideBeads} wide (merged) bead(s)` : ''}; ratio ${C.toFixed(2)}; Z_MAX ${Z_MAX}`);
if (WRITE) { for (const ch of chunks) fs.writeFileSync(path.join(engDir, ch.name), ch.out); console.log('written to src/english'); }
else console.log('(dry run; --write to stamp src/english)');
