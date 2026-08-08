#!/usr/bin/env node
// Extract, mechanically, every quotation printed in a work's Latin chunks, and
// emit one briefing file per agent range.
//
// This is the 11638 method result made repeatable. Handing an agent a verbatim
// list of the quotations printed in ITS OWN range — with the instruction that
// the divergence list is the most valuable thing it will produce — yielded 139
// [var:] markers across 35 chunks, and the blind read then found the prose
// sound. The range on 8930 given a strong but GENERIC "read every lemma
// carefully" produced 1 marker and a blind read found seven defects in it.
// Naming the words is what works; a general instruction to be careful is not.
//
// Migne marks a quotation two ways and a single work may use both — 11638
// switches from italics to guillemets at a BOOK boundary. We extract both and
// say which is which, and we do not decide for the agent whether a span is
// scripture, a patristic citation, or the author's own verse. The point is that
// no printed quotation reaches the translator unlisted.
//
//   node scripts/extract-quotations.mjs <idno> [--per N] [--out DIR]

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const idno = args[0];
if (!idno) {
  console.error('usage: extract-quotations.mjs <idno> [--per N] [--out DIR]');
  process.exit(1);
}
const per = Number(argAfter('--per') ?? 6);
const latinDir = path.join('src', 'latin', idno);
const outDir = argAfter('--out') ?? path.join('data', 'quotations', idno);

function argAfter(flag) {
  const i = args.indexOf(flag);
  return i === -1 ? undefined : args[i + 1];
}

if (!fs.existsSync(latinDir)) {
  console.error(`no such Latin dir: ${latinDir}`);
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(path.join(latinDir, 'manifest.json'), 'utf8'));
const chunkFiles = fs
  .readdirSync(latinDir)
  .filter((f) => /^\d{4}\.md$/.test(f))
  .sort();

// A column anchor is [0181A] or bare [1137]; both are sacred and both locate.
const ANCHOR = /\[(\d{3,4}[A-D]?)\]/g;
// Migne's page numbers are italicised bare numerals — *101* — and are not
// quotations. Nothing else numeric-only is italicised in the corpus.
const PAGE_NUM = /^\d+$/;

const rows = [];

for (const file of chunkFiles) {
  const raw = fs.readFileSync(path.join(latinDir, file), 'utf8');
  const chunk = file.replace('.md', '');
  const body = raw.replace(/^---\n[\s\S]*?\n---\n/, '');

  // Column position of every character, so each quotation reports the column it
  // is printed in rather than the column its chunk starts in.
  const anchorAt = [];
  for (const m of body.matchAll(ANCHOR)) anchorAt.push({ at: m.index, col: m[1] });
  const colFor = (idx) => {
    let col = null;
    for (const a of anchorAt) {
      if (a.at <= idx) col = a.col;
      else break;
    }
    return col ?? '(before first anchor)';
  };

  const seen = new Set();
  const push = (kind, text, index) => {
    const clean = text.replace(/\s+/g, ' ').trim();
    if (!clean) return;
    if (kind === 'italic' && PAGE_NUM.test(clean.replace(/[.,;:]/g, '').trim())) return;
    const key = `${chunk}|${clean}`;
    if (seen.has(key)) return; // the same span matched twice is a bug, not a repetition
    seen.add(key);
    rows.push({ chunk, kind, col: colFor(index), text: clean, at: index });
  };

  // Guillemets. Migne opens « and closes »; a [n: ...] note routinely sits
  // INSIDE the closing guillemet and is part of the printed span.
  for (const m of body.matchAll(/«([^»]*)»/g)) push('guillemet', m[1], m.index);

  // Italics. Heads are already italicised wholesale by the chunker in some
  // works, so skip any match that begins a '## ' line.
  const lines = body.split('\n');
  let offset = 0;
  for (const line of lines) {
    if (!line.startsWith('## ')) {
      for (const m of line.matchAll(/\*([^*]+)\*/g)) push('italic', m[1], offset + m.index);
    }
    offset += line.length + 1;
  }
}

fs.mkdirSync(outDir, { recursive: true });

const chunkNums = chunkFiles.map((f) => f.replace('.md', ''));
const ranges = [];
for (let i = 0; i < chunkNums.length; i += per) {
  ranges.push(chunkNums.slice(i, i + per));
}

for (const range of ranges) {
  const first = range[0];
  const last = range[range.length - 1];
  const mine = rows.filter((r) => range.includes(r.chunk));
  const lines = [];
  lines.push(`# Quotations printed in chunks ${first}–${last} — ${manifest.title}`);
  lines.push('');
  lines.push(
    `Extracted mechanically from \`src/latin/${idno}/\`. **${mine.length} spans** in your range: ` +
      `${mine.filter((r) => r.kind === 'guillemet').length} guillemeted, ` +
      `${mine.filter((r) => r.kind === 'italic').length} italicised.`
  );
  lines.push('');
  lines.push(
    'This list is not an answer key and it is not filtered. It includes the ' +
      "author's own verse, printed locators and italicised emphasis alongside " +
      'scripture — deciding which is which is your judgment, not the script\'s. ' +
      'What the script guarantees is that **no quotation printed in your range ' +
      'reaches you unlisted.**'
  );
  lines.push('');
  lines.push(
    '**Collate every scriptural span against the Vulgate, word by word, and treat ' +
      'the divergence list as the most valuable thing you produce.** Where Migne ' +
      'diverges, render what Migne prints and mark it `[var:]`. Where you collate ' +
      'a span and find it agrees with the Vulgate, say so in your range cruces ' +
      'file — **an unmarked quotation must be recorded as collated, so that the ' +
      'absence of a marker is evidence rather than silence.**'
  );
  lines.push('');
  for (const c of range) {
    // Printed order, not extraction order: the agent reads the chunk top to
    // bottom and the list must follow it.
    const inChunk = mine.filter((r) => r.chunk === c).sort((a, b) => a.at - b.at);
    lines.push(`## ${c} — ${inChunk.length} span${inChunk.length === 1 ? '' : 's'}`);
    lines.push('');
    if (!inChunk.length) {
      lines.push('_None printed._');
      lines.push('');
      continue;
    }
    for (const r of inChunk) {
      const mark = r.kind === 'guillemet' ? '«…»' : '*…*';
      lines.push(`- **${r.col}** ${mark} — ${r.text}`);
    }
    lines.push('');
  }
  fs.writeFileSync(path.join(outDir, `${first}-${last}.md`), lines.join('\n'));
}

const byKind = rows.reduce((a, r) => ((a[r.kind] = (a[r.kind] || 0) + 1), a), {});
console.log(
  `${idno}: ${rows.length} quotation spans (${byKind.guillemet || 0} guillemet, ${
    byKind.italic || 0
  } italic) across ${chunkFiles.length} chunks → ${ranges.length} range files in ${outDir}`
);
