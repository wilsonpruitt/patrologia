#!/usr/bin/env node
// Phase 5 chunker — per-work, column-anchor preserving.
// Usage: node scripts/chunk-work.mjs <workIdno> [--target 1200] [--max 1600]
//
// Emits src/latin/<idno>/NNNN.md chunks + manifest.json, then validates:
//   1. Column-marker sequence across all chunks === source pb sequence (order + count).
//   2. Chunk colContext continuity (each chunk knows the column in effect at its first word).
//   3. Note-marker count across chunks === source <note> count.
//   4. Word-count conservation (chunks total ≈ source body total).
// Any validator failure exits non-zero and deletes nothing — inspect, fix, re-run.
//
// Marker conventions carried into translation (hard rule 1: anchors are sacred):
//   <pb n="0473A"/>  →  [0473A]        (column anchor, MUST survive translation verbatim)
//   <note>X</note>   →  [n: X]         (Migne's inline citation, MUST survive verbatim)
//   <hi>X</hi>       →  *X*            (italic)
//   <list>/<item>    →  markdown "- " lines
// Chunk boundaries fall only between <div1> units unless a div exceeds --max,
// in which case it splits at a paragraph boundary (chunk metadata marks the split).

import fs from 'node:fs';
import path from 'node:path';

const idno = process.argv[2];
if (!idno) { console.error('usage: node scripts/chunk-work.mjs <workIdno>'); process.exit(1); }
const argVal = (flag, dflt) => {
  const i = process.argv.indexOf(flag);
  return i > 0 ? Number(process.argv[i + 1]) : dflt;
};
const TARGET = argVal('--target', 1200);
const MAX = argVal('--max', 1600);

const ROOT = path.join(import.meta.dirname, '..');
const teiPath = path.join(ROOT, 'sources/pl/tei', `${idno}.xml`);
const works = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/works.json'), 'utf8'));
const work = works.works.find(w => w.texts?.some(t => String(t.idno) === String(idno)));
if (!work) { console.error(`text idno ${idno} not found in works.json`); process.exit(1); }
const textRec = work.texts.find(t => String(t.idno) === String(idno));

const xml = fs.readFileSync(teiPath, 'utf8');
const body = xml.slice(xml.indexOf('<body>') + 6, xml.indexOf('</body>'));

// ---- source-truth counts for validation ----
const srcPbSeq = [...body.matchAll(/<pb n="([^"]+)"\s*\/>/g)].map(m => m[1]);
const srcNoteCount = [...body.matchAll(/<note[^>]*>[\s\S]*?<\/note>/g)].length;
const srcWords = body
  .replace(/<[^>]+>/g, ' ')
  .split(/\s+/).filter(Boolean).length;

// ---- transform TEI → markdown ----
const words = s => s.split(/\s+/).filter(Boolean).length;

const unknownTagsSeen = new Set();
function inline(s) {
  return s
    // <emph> is usually a bare-content italic wrapper, but sometimes wraps a
    // <hi> or <note> that will format itself below — in that case strip the
    // emph tags as a no-op rather than double-wrap in asterisks.
    .replace(/<emph>([\s\S]*?)<\/emph>/g, (_, h) => /<hi>|<note/.test(h) ? h : `*${h.replace(/\s+/g, ' ').trim()}*`)
    .replace(/<note[^>]*>([\s\S]*?)<\/note>/g, (_, n) => `[n: ${n.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()}]`)
    .replace(/<hi>([\s\S]*?)<\/hi>/g, (_, h) => `*${h.replace(/\s+/g, ' ').trim()}*`)
    .replace(/<pb n="([^"]+)"\s*\/>/g, '[$1]')
    // safety net: any other tag we haven't explicitly handled — strip it rather
    // than leak it as literal text, but log it so a future run can add real handling.
    .replace(/<\/?([a-zA-Z][\w-]*)\b[^>]*>/g, (m, tag) => { unknownTagsSeen.add(tag); return ' '; })
    .replace(/\s+/g, ' ')
    .trim();
}

// Parse div1 units in order.
const divs = [];
const divRe = /<div1(?:\s[^>]*)?>([\s\S]*?)<\/div1>/g;
for (const m of body.matchAll(divRe)) {
  const raw = m[1];
  const head = inline((raw.match(/<head>([\s\S]*?)<\/head>/) || [, ''])[1]);
  const inner = raw.replace(/<head>[\s\S]*?<\/head>/, '');
  const blocks = [];
  // paragraphs and lists in document order
  const blockRe = /<p(?:\s[^>]*)?>([\s\S]*?)<\/p>|<list(?:\s[^>]*)?>([\s\S]*?)<\/list>|<pb n="([^"]+)"\s*\/>/g;
  let consumed = 0;
  for (const b of inner.matchAll(blockRe)) {
    // pb between blocks (not inside p/list) must not be dropped
    if (b[3]) { blocks.push(`[${b[3]}]`); continue; }
    if (b[1] !== undefined) blocks.push(inline(b[1]));
    else blocks.push(
      [...b[2].matchAll(/<item>([\s\S]*?)<\/item>|<pb n="([^"]+)"\s*\/>/g)]
        .map(i => i[2] ? `[${i[2]}]` : `- ${inline(i[1])}`)
        .join('\n')
    );
    consumed++;
  }
  const text = blocks.filter(Boolean).join('\n\n');
  divs.push({ head, text, words: words(text.replace(/\[[0-9]{4}[A-D]\]/g, '')) });
}

// ---- group divs into chunks ----
// A div bigger than MAX splits at paragraph boundaries; otherwise divs are atomic.
const units = []; // {head|null, text, words, splitPart|null}
for (const d of divs) {
  if (d.words <= MAX) { units.push({ ...d, splitPart: null }); continue; }
  const paras = d.text.split('\n\n');
  let cur = [], curW = 0, part = 1;
  for (const p of paras) {
    const w = words(p);
    if (curW + w > MAX && cur.length) {
      units.push({ head: part === 1 ? d.head : `${d.head} (cont.)`, text: cur.join('\n\n'), words: curW, splitPart: part++ });
      cur = []; curW = 0;
    }
    cur.push(p); curW += w;
  }
  if (cur.length) units.push({ head: part === 1 ? d.head : `${d.head} (cont.)`, text: cur.join('\n\n'), words: curW, splitPart: part === 1 ? null : part });
}

const chunks = [];
let cur = [], curW = 0;
for (const u of units) {
  if (curW > 0 && curW + u.words > TARGET && !(curW < TARGET / 2 && u.words < TARGET / 2)) {
    chunks.push(cur); cur = []; curW = 0;
  }
  cur.push(u); curW += u.words;
}
if (cur.length) chunks.push(cur);

// ---- emit ----
const outDir = path.join(ROOT, 'src/latin', String(idno));
fs.mkdirSync(outDir, { recursive: true });
// clear stale chunk files from prior runs
for (const f of fs.readdirSync(outDir)) if (/^\d{4}\.md$/.test(f)) fs.unlinkSync(path.join(outDir, f));

const colRe = /\[([0-9]{4}[A-D])\]/g;
const manifest = [];
let colContext = null; // column in effect entering the next chunk
const authors = (work.attributions?.map(a => a.author) ?? [work.author]).filter(Boolean);

chunks.forEach((group, ci) => {
  const text = group.map(u => (u.head ? `## ${u.head}\n\n` : '') + u.text).join('\n\n');
  const cols = [...text.matchAll(colRe)].map(m => m[1]);
  const noteCount = (text.match(/\[n: /g) || []).length;
  const wc = words(text.replace(colRe, ''));
  const incipit = text.replace(/^## .*\n+/, '').replace(colRe, '').replace(/\*/g, '').split(/\s+/).filter(Boolean).slice(0, 8).join(' ');
  const meta = {
    workIdno: Number(work.workIdno),
    textIdno: Number(idno),
    work: textRec.title,
    authors,
    series: 'pl',
    volume: textRec.volume ?? work.volumes?.[0] ?? null,
    chunk: ci,
    chunkCount: chunks.length,
    colContext: colContext ?? (cols[0] ?? null), // column in effect at first word
    colFirst: cols[0] ?? colContext,
    colLast: cols.at(-1) ?? colContext,
    heads: group.map(u => u.head).filter(Boolean),
    words: wc,
    noteCount,
    incipit,
  };
  if (cols.length) colContext = cols.at(-1);
  const fm = Object.entries(meta)
    .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
    .join('\n');
  fs.writeFileSync(path.join(outDir, `${String(ci).padStart(4, '0')}.md`), `---\n${fm}\n---\n\n${text}\n`);
  manifest.push(meta);
});

// ---- validate ----
const errs = [];
const emittedAll = manifest.map((_, i) => fs.readFileSync(path.join(outDir, `${String(i).padStart(4, '0')}.md`), 'utf8').split('---\n').slice(2).join('---\n')).join('\n\n');
const outPbSeq = [...emittedAll.matchAll(colRe)].map(m => m[1]);
if (outPbSeq.join(',') !== srcPbSeq.join(','))
  errs.push(`column sequence mismatch: source ${srcPbSeq.length} marks, chunks ${outPbSeq.length}; first divergence at index ${outPbSeq.findIndex((c, i) => c !== srcPbSeq[i])}`);
const outNotes = (emittedAll.match(/\[n: /g) || []).length;
if (outNotes !== srcNoteCount) errs.push(`note count mismatch: source ${srcNoteCount}, chunks ${outNotes}`);
const outWords = words(emittedAll.replace(colRe, '').replace(/^## /gm, ''));
const delta = Math.abs(outWords - srcWords) / srcWords;
if (delta > 0.02) errs.push(`word count drift ${(delta * 100).toFixed(1)}%: source ${srcWords}, chunks ${outWords}`);
for (let i = 1; i < manifest.length; i++) {
  const prev = manifest[i - 1], curM = manifest[i];
  if (curM.colContext !== prev.colLast)
    errs.push(`chunk ${i} colContext ${curM.colContext} != chunk ${i - 1} colLast ${prev.colLast}`);
}

fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify({
  workIdno: Number(work.workIdno), textIdno: Number(idno), title: textRec.title, authors, series: 'pl',
  volume: textRec.volume ?? work.volumes?.[0] ?? null,
  colFirst: srcPbSeq[0], colLast: srcPbSeq.at(-1),
  sourceWords: srcWords, sourceNotes: srcNoteCount, sourcePbMarks: srcPbSeq.length,
  chunkCount: chunks.length, chunks: manifest,
}, null, 2));

console.log(`${chunks.length} chunks → ${outDir}`);
manifest.forEach(m => console.log(`  ${String(m.chunk).padStart(4, '0')}  ${String(m.words).padStart(5)}w  ${m.colFirst}–${m.colLast}  ${m.heads[0] ?? '(cont.)'}${m.heads.length > 1 ? ` … ${m.heads.at(-1)}` : ''}`));
if (errs.length) { console.error('\nVALIDATION FAILED:'); errs.forEach(e => console.error(' - ' + e)); process.exit(1); }
console.log(`\nvalidation OK: ${srcPbSeq.length} column marks, ${srcNoteCount} notes, ${srcWords} words conserved`);
if (unknownTagsSeen.size) console.warn(`\n⚠ unrecognized tags stripped (no data lost, but consider explicit handling): ${[...unknownTagsSeen].join(', ')}`);
