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
const guillemetWarnings = [];

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

  // Spans we have already covered, so the third pass below can tell what it is
  // NOT seeing. Recorded as [start, end) over the body.
  const covered = [];

  // Guillemets. Migne opens « and closes »; a [n: ...] note routinely sits
  // INSIDE the closing guillemet and is part of the printed span.
  //
  // ⚠ Migne's guillemets are ASYMMETRIC all through the PL — unclosed «, stray
  // », unopened » — and they are his, to be mirrored and never balanced
  // (Pattern 5 corollary). But an unclosed « is also a trap for THIS script: the
  // regex runs on to the next », swallowing every quotation in between into one
  // giant span, so the individual quotations inside it are never listed. That
  // happened on 11632 chunk 0011, where an unclosed « at 0211D ate the rest of
  // the chunk and hid Isa. 45:15 from the agent entirely.
  //
  // So an over-long span is treated as PROBABLY an asymmetry, not a quotation:
  // it is reported as suspect, and deliberately NOT marked covered, so that the
  // [n:] pass below reaches inside it and lists what it swallowed.
  const RUNAWAY_WORDS = 60;
  const opens = (body.match(/«/g) || []).length;
  const closes = (body.match(/»/g) || []).length;
  if (opens !== closes) guillemetWarnings.push({ chunk, opens, closes });
  for (const m of body.matchAll(/«([^»]*)»/g)) {
    const words = m[1].trim().split(/\s+/).length;
    if (words > RUNAWAY_WORDS) {
      push('runaway', m[1], m.index);
      continue; // not covered — let the [n:] pass see inside it
    }
    push('guillemet', m[1], m.index);
    covered.push([m.index, m.index + m[0].length]);
  }

  // Italics. Heads are already italicised wholesale by the chunker in some
  // works, so skip any match that begins a '## ' line.
  const lines = body.split('\n');
  let offset = 0;
  for (const line of lines) {
    if (!line.startsWith('## ')) {
      for (const m of line.matchAll(/\*([^*]+)\*/g)) {
        push('italic', m[1], offset + m.index);
        covered.push([offset + m.index, offset + m.index + m[0].length]);
      }
    }
    offset += line.length + 1;
  }

  // ⭐ THE THIRD CLASS — a quotation Migne marks with NEITHER guillemets nor
  // italics, carrying only its [n:] note. Found by the 0012–0017 agent on
  // 2026-08-08: Rom. 8:10 at 0226B prints *propter justitiam* for the Vulgate's
  // *propter iustificationem*, set naked in Philip's own sentence, and he then
  // expounds the divergent phrase eight lines later — a live 7a″ case that the
  // first two passes could not see at all. The agent found it only by reading
  // the notes against the prose after finishing the listed collation.
  //
  // We cannot determine the quotation's OPENING mechanically — that is exactly
  // what the marks would have told us — so we do not pretend to. We emit the
  // clause running up to the note and say plainly that its left edge is
  // undetermined. A span the reader must bound is far better than a span the
  // reader never sees.
  const isCovered = (i) => covered.some(([s, e]) => i >= s && i < e);
  for (const m of body.matchAll(/\[n:[^\]]*\]/g)) {
    if (isCovered(m.index)) continue;
    const before = body.slice(0, m.index);
    // Back up to the nearest strong stop, then forward past any anchor/markup.
    const stop = Math.max(
      before.lastIndexOf('. '),
      before.lastIndexOf('; '),
      before.lastIndexOf(': '),
      before.lastIndexOf('»'),
      before.lastIndexOf('\n')
    );
    const clause = body.slice(stop + 1, m.index).replace(ANCHOR, ' ');
    if (clause.replace(/\s+/g, ' ').trim().split(' ').length < 2) continue;
    push('noted', clause, m.index);
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
      `${mine.filter((r) => r.kind === 'guillemet').length} guillemeted «…», ` +
      `${mine.filter((r) => r.kind === 'italic').length} italicised *…*, ` +
      `${mine.filter((r) => r.kind === 'noted').length} noted-only, ` +
      `${mine.filter((r) => r.kind === 'runaway').length} runaway.`
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
    '⭐ **The `noted-only` class is the one to read hardest.** These are ' +
      'quotations Migne marks with NEITHER guillemets nor italics — they carry ' +
      'only their `[n:]` note, sitting naked inside the author\'s own sentence. ' +
      'They were invisible to this script until 2026-08-08, when an agent found ' +
      'Rom. 8:10 at 0226B printing *propter justitiam* for the Vulgate\'s ' +
      '*propter iustificationem*, with the author expounding the divergent ' +
      'phrase eight lines later. **The script cannot determine where such a ' +
      'quotation BEGINS** — that is precisely what the missing marks would have ' +
      'told it — so what is printed below is the clause running up to the note, ' +
      'with its left edge undetermined. Find the real opening yourself, and ' +
      'expect some of these to be the author\'s own prose rather than a ' +
      'quotation at all.'
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
  const warned = guillemetWarnings.filter((w) => range.includes(w.chunk));
  if (warned.length) {
    lines.push('');
    lines.push(
      '⚠ **Guillemet asymmetry in your range** — ' +
        warned.map((w) => `${w.chunk}: ${w.opens} « / ${w.closes} »`).join(' · ') +
        '. These are **Migne\'s** and are mirrored, never balanced (Pattern 5 ' +
        'corollary): reproduce the unclosed «, the stray », the unopened » ' +
        'exactly as printed and log them. Any span below marked ' +
        '**⚠ RUNAWAY «** is one this script believes is an unclosed « rather ' +
        'than a quotation — it has run on to the next » and swallowed ' +
        'everything between. Its contents are ALSO listed individually where ' +
        'they carry a note, but read that stretch of Latin yourself: this is ' +
        'the one place the extraction is known to have hidden a quotation ' +
        '(Isa. 45:15, chunk 0011, 2026-08-08).'
    );
  }
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
      const mark =
        r.kind === 'guillemet'
          ? '«…»'
          : r.kind === 'italic'
          ? '*…*'
          : r.kind === 'runaway'
          ? '⚠ RUNAWAY «'
          : '[n:]-only ⭐';
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
