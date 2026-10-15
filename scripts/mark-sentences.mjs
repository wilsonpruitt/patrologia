#!/usr/bin/env node
// Phase 0 (V2-PLAN.md): stamp paragraph IDs ⟦pN⟧ and sentence anchors ⟦sN⟧ into the
// SOURCE-language chunks of a work, so the translation agent only has to mirror them.
// Usage: node scripts/mark-sentences.mjs <textIdno|dir> [--greek] [--dry] [--force]
//        <textIdno> → src/latin/<idno>; a path → that chunk directory (PG: src/greek/<key>).
//
// Run AFTER chunking, BEFORE translating. Idempotent-by-refusal: a chunk that already
// carries markers is left alone (IDs are never renumbered once assigned), unless --force,
// which is for pre-translation reruns only.
//
// Segmentation is a heuristic, deliberately cheap: break after . ? ! (Greek also ; ·) when
// the next token opens a sentence (capital, « or *). [n: …] notes and [col] anchors are
// masked first; common abbreviations and single capitals ("S. Augustinus") do not break.
// A wrong break is not an error: the English marks the two as one with ⟦s2+s3⟧.

import fs from 'node:fs';
import path from 'node:path';
import { hasMarkers } from './lib/sentence-markers.mjs';

const ROOT = path.join(import.meta.dirname, '..');
const arg = process.argv[2];
if (!arg) { console.error('usage: node scripts/mark-sentences.mjs <textIdno|dir> [--greek] [--dry] [--force]'); process.exit(1); }
const flag = f => process.argv.includes(f);
const dir = /^\d+$/.test(arg) ? path.join(ROOT, 'src/latin', arg) : path.resolve(arg);

const ABBR = new Set(['ep', 'epist', 'cap', 'concil', 'lib', 'hom', 'serm', 'tom', 'dom', 'sanct', 'ibid', 'id', 'gr', 'hier', 'vid', 'cf', 'loc', 'cit', 'tit', 'dist', 'quaest', 'art', 'conc', 'can', 'ms', 'edit', 'col', 'pag', 'num', 'vers', 'ps', 'prov', 'eccl', 'matth', 'luc', 'joan', 'rom', 'cor', 'gal', 'eph', 'tim', 'hebr', 'apoc', 'deut', 'reg', 'isa', 'jer', 'ezech', 'dan', 'gen', 'exod', 'levit', 'sap', 'ecclus']);
const ender = flag('--greek') ? '[.?!;·]' : '[.?!]';
// punctuation + closers, whitespace, then something that opens a sentence
const BREAK = new RegExp(`(${ender}[»*)\\u2019"]*)( +)(?=(?:\\[\\d{3,5}[A-D]?\\] *)*[«*A-ZÆŒ\\u0391-\\u03A9\\u1F08-\\u1FFF])`, 'g');

function segment(text) {
  const masks = [];
  const masked = text.replace(/\[(?:n|nt|cn|fn|vl|f|b|bid): [^\]]*\]|\[\d{3,5}[A-D]?\]/g, m => { masks.push(m); return `\u0001${masks.length - 1}\u0002`; });
  const out = [];
  let last = 0, m;
  BREAK.lastIndex = 0;
  while ((m = BREAK.exec(masked))) {
    const before = masked.slice(last, m.index + m[1].length);
    const tok = before.match(/([^\s.]+)\.?[»*)’"]*$/)?.[1] ?? '';
    const bare = tok.replace(/[^A-Za-zÆŒæœ]/g, '');
    // abbreviation guard (only for '.', never for ? !)
    if (m[1].startsWith('.') && (/^[A-ZÆŒ]$/.test(bare) || ABBR.has(bare.toLowerCase()))) continue;
    out.push(before);
    last = m.index + m[0].length;
  }
  out.push(masked.slice(last));
  return out.map(s => s.replace(/\u0001(\d+)\u0002/g, (_, i) => masks[i]));
}

const manifest = JSON.parse(fs.readFileSync(path.join(dir, 'manifest.json'), 'utf8'));
let totalP = 0, totalS = 0, skipped = 0;
for (const c of manifest.chunks) {
  const name = `${String(c.chunk).padStart(4, '0')}.md`;
  const f = path.join(dir, name);
  const raw = fs.readFileSync(f, 'utf8');
  const fm = raw.match(/^---\n[\s\S]*?\n---\n/)[0];
  const body = raw.slice(fm.length);
  if (hasMarkers(body) && !flag('--force')) { skipped++; continue; }
  const clean = body.replace(/⟦[^⟧\n]*⟧ ?/g, '');
  let p = 0;
  const lines = clean.split('\n').map(line => {
    if (!line.trim() || /^##\s/.test(line)) return line;
    const lead = line.startsWith('- ') ? '- ' : '';
    const text = line.slice(lead.length);
    const sents = segment(text);
    p++; totalP++; totalS += sents.length;
    return `${lead}⟦p${p}⟧ ` + sents.map((s, i) => `⟦s${i + 1}⟧ ${s}`).join(' ');
  });
  if (!flag('--dry')) fs.writeFileSync(f, fm + lines.join('\n'));
}
console.log(`${flag('--dry') ? '(dry) ' : ''}${manifest.chunks.length - skipped} chunks marked, ${skipped} skipped (already marked): ${totalP} paragraphs, ${totalS} sentences`);
