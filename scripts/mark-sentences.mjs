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
import { segment } from './lib/segment.mjs';

const ROOT = path.join(import.meta.dirname, '..');
const arg = process.argv[2];
if (!arg) { console.error('usage: node scripts/mark-sentences.mjs <textIdno|dir> [--greek] [--dry] [--force]'); process.exit(1); }
const flag = f => process.argv.includes(f);
const dir = /^\d+$/.test(arg) ? path.join(ROOT, 'src/latin', arg) : path.resolve(arg);

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
    const sents = segment(text, flag('--greek'));
    p++; totalP++; totalS += sents.length;
    return `${lead}⟦p${p}⟧ ` + sents.map((s, i) => `⟦s${i + 1}⟧ ${s}`).join(' ');
  });
  if (!flag('--dry')) fs.writeFileSync(f, fm + lines.join('\n'));
}
console.log(`${flag('--dry') ? '(dry) ' : ''}${manifest.chunks.length - skipped} chunks marked, ${skipped} skipped (already marked): ${totalP} paragraphs, ${totalS} sentences`);
