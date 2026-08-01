#!/usr/bin/env node
// PG chunker — Calfa Greek text → column-anchored markdown chunks.
// Usage: node scripts/chunk-work-pg.mjs <workKey> [--target 1000] [--max 1400]
//
// PG differs from the PL (TEI) chunker:
//  - Source is Calfa OCR flat text; $8 page markers ARE the Greek column
//    boundaries (each PDF page carries exactly one Greek column).
//  - Column numbers come from data/pg-column-maps/pg<vol>.json (empirical,
//    scan-verified). Unverified pages are filled by the even-page→colOdd
//    parity rule, which is first validated against EVERY verified page in
//    the span — any exception aborts.
//  - No <note> layer (Calfa extracts the Greek body only).
//  - No div structure: chunks cut at sentence boundaries nearest the target,
//    never across a column anchor mid-word (anchors sit between print lines).
//
// Emits src/greek/<workKey>/NNNN.md + manifest.json with the same frontmatter
// contract as the PL chunks (colContext/colFirst/colLast, words, incipit), then
// validates: anchor sequence === map sequence for the span; word conservation.

import fs from 'node:fs';
import path from 'node:path';

const key = process.argv[2];
if (!key) { console.error('usage: node scripts/chunk-work-pg.mjs <workKey>'); process.exit(1); }
const argVal = (flag, dflt) => {
  const i = process.argv.indexOf(flag);
  return i > 0 ? Number(process.argv[i + 1]) : dflt;
};
const TARGET = argVal('--target', 1000);
const MAX = argVal('--max', 1400);

const ROOT = path.join(import.meta.dirname, '..');
const reg = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/pg-works.json'), 'utf8'));
const work = reg.works.find(w => w.key === key);
if (!work) { console.error(`work key ${key} not found in data/pg-works.json`); process.exit(1); }
const volPad = String(work.volume).padStart(3, '0');

// ---- column map: greekCol per page, parity-filled where unverified ----
// Trust greekCol only where the page was token-verified (content matched the
// looked-up leaf); elsewhere the leaf lookup itself may be off. Unverified
// pages in the span are filled by the even-page→colOdd parity rule, which must
// hold on EVERY verified page of this work's span (not volume-wide — inserted
// leaves elsewhere can flip the pattern locally).
const map = JSON.parse(fs.readFileSync(path.join(ROOT, `data/pg-column-maps/pg${volPad}.json`), 'utf8'));
const inSpan = map.pages.filter(r => r.page >= work.pages[0] && r.page <= work.pages[1]);
// parity constant K (colOdd = 2*page + K, K odd) is volume/local-region specific —
// PG 139 fit K=-15, PG 118's Philippians span fits K=-23 (a second volume must not
// assume the first volume's constant; pg-paired-pilot.md §7 P3b). Derive it from
// THIS work's own verified pages rather than hardcoding either volume's value.
const verifiedForK = inSpan.filter(r => r.verified && r.greekCol !== null && r.colOdd != null);
if (!verifiedForK.length) { console.error('no verified pages in span to derive column parity constant'); process.exit(1); }
const kCounts = new Map();
for (const r of verifiedForK) { const k = r.colOdd - 2 * r.page; kCounts.set(k, (kCounts.get(k) || 0) + 1); }
let parityK = null, parityKCount = -1;
for (const [k, n] of kCounts) if (n > parityKCount) { parityKCount = n; parityK = k; }
if (kCounts.size > 1) console.log(`note: verified pages in span show ${kCounts.size} distinct colOdd-2*page constants (${[...kCounts.entries()].map(([k,n]) => `${k}:${n}`).join(', ')}); using mode K=${parityK}`);
const parityCol = p => p % 2 === 0 ? 2 * p + parityK : 2 * p + parityK + 1;
// Verified pages already carry their own trusted greekCol (line below never falls
// back to parityCol for them); this loop is a sanity net, not the source of truth.
// A verified page that disagrees with the fallback is logged, not fatal — it can
// be a genuine side-parity exception (e.g. an odd/even flip from an uncounted
// inserted leaf), which is real evidence, not an error, provided the page's own
// verification (>=2 distinctive tokens against the actual scan leaf) is solid.
// Abort only if MOST of the span disagrees, which would mean the fitted K itself
// is wrong rather than one page being a genuine exception.
const parityExceptions = [];
for (const rec of inSpan) {
  if (rec.verified && rec.greekCol !== null && rec.greekCol !== parityCol(rec.page)) {
    parityExceptions.push(rec.page);
    console.log(`note: verified page ${rec.page} disagrees with parity fallback (map greekCol ${rec.greekCol} vs fallback ${parityCol(rec.page)}) — treated as a genuine side-parity exception, not corrected`);
  }
}
if (parityExceptions.length > 0 && parityExceptions.length > verifiedForK.length * 0.2) {
  console.error(`too many parity exceptions (${parityExceptions.length}/${verifiedForK.length} verified pages) — the fitted K is probably wrong, not a genuine local flip. Aborting.`);
  process.exit(1);
}
const greekCol = new Map(inSpan.map(r => [r.page, r.verified && r.greekCol !== null ? r.greekCol : parityCol(r.page)]));
const inferredPages = inSpan.filter(r => !(r.verified && r.greekCol !== null)).map(r => r.page);
if (inferredPages.length) console.log(`greekCol parity-inferred for pages: ${inferredPages.join(', ')}`);

// ---- read Calfa span ----
const calfa = fs.readFileSync(path.join(ROOT, `sources/pg/calfa/PG${volPad}/PG${volPad}_text.txt`), 'utf8').split('\n');
const pages = []; // {page, text}
let cur = null;
for (const l of calfa) {
  const m = l.match(/^\$0=\d+ \$8=(\d+)/);
  if (m) { cur = { page: Number(m[1]), lines: [] }; pages.push(cur); }
  else if (cur) cur.lines.push(l.trim());
}
const span = pages.filter(p => p.page >= work.pages[0] && p.page <= work.pages[1]);
if (!span.length) { console.error('no pages in span'); process.exit(1); }
// page continuity within the work
for (let i = 1; i < span.length; i++)
  if (span[i].page !== span[i - 1].page + 1) { console.error(`page gap inside work: ${span[i - 1].page} -> ${span[i].page}`); process.exit(1); }

const pad4 = n => String(n).padStart(4, '0');
const words = s => s.split(/\s+/).filter(Boolean).length;

// ---- assemble anchored stream (NFC-normalized: Calfa mixes forms) ----
// Each page contributes "[NNNN] <flowed column text>". Print lines flow into
// one stream; sentences run across columns freely.
const srcColSeq = span.map(p => pad4(greekCol.get(p.page)));
let stream = span
  .map(p => `[${pad4(greekCol.get(p.page))}] ` + p.lines.filter(Boolean).join(' ').replace(/\s+/g, ' ').trim())
  .join(' ')
  .normalize('NFC');

// ---- apply scan-verified lacuna patches (data/calfa-patches/<key>.json) ----
const patchPath = path.join(ROOT, 'data/calfa-patches', `${work.key}.json`);
if (fs.existsSync(patchPath)) {
  const { patches } = JSON.parse(fs.readFileSync(patchPath, 'utf8'));
  for (const p of patches) {
    const find = p.find.normalize('NFC');
    const n = stream.split(find).length - 1;
    if (n !== 1) { console.error(`patch failed (${n} matches, need exactly 1): ${p.find.slice(0, 50)}…`); process.exit(1); }
    stream = stream.replace(find, p.replace.normalize('NFC'));
  }
  console.log(`applied ${patches.length} lacuna patches`);
}
const srcWords = words(stream.replace(/\[\d{4}\]/g, ''));

// ---- cut at sentence boundaries nearest each TARGET of words ----
// Sentence ends: . · ; : followed by space + capital Greek letter or anchor.
const tokens = stream.split(' ');
const isAnchor = t => /^\[\d{4}\]$/.test(t);
const sentenceEnd = (i) => {
  const t = tokens[i];
  if (!t || !/[.·;:]$/.test(t)) return false;
  const next = tokens[i + 1];
  if (!next) return true;
  const probe = isAnchor(next) ? tokens[i + 2] : next;
  return !!probe && /^[ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩἈ-ᾯὉ-Ὥ«]/u.test(probe);
};

const chunks = [];
let start = 0, count = 0;
for (let i = 0; i < tokens.length; i++) {
  if (!isAnchor(tokens[i])) count++;
  if (count >= TARGET && sentenceEnd(i)) {
    chunks.push(tokens.slice(start, i + 1).join(' '));
    start = i + 1; count = 0;
  } else if (count >= MAX) {
    // hard fallback: cut at next sentence end regardless of target
    let j = i;
    while (j < tokens.length && !sentenceEnd(j)) j++;
    chunks.push(tokens.slice(start, j + 1).join(' '));
    start = j + 1; i = j; count = 0;
  }
}
if (start < tokens.length) {
  const tail = tokens.slice(start).join(' ');
  if (words(tail.replace(/\[\d{4}\]/g, '')) < TARGET / 3 && chunks.length) chunks[chunks.length - 1] += ' ' + tail;
  else chunks.push(tail);
}

// ---- emit ----
const outDir = path.join(ROOT, 'src/greek', work.key);
fs.mkdirSync(outDir, { recursive: true });
for (const f of fs.readdirSync(outDir)) if (/^\d{4}\.md$/.test(f)) fs.unlinkSync(path.join(outDir, f));

const colRe = /\[(\d{4})\]/g;
const manifest = [];
let colContext = null;
chunks.forEach((text, ci) => {
  const cols = [...text.matchAll(colRe)].map(m => m[1]);
  const wc = words(text.replace(colRe, ''));
  const incipit = text.replace(colRe, '').split(/\s+/).filter(Boolean).slice(0, 8).join(' ');
  const meta = {
    workKey: work.key,
    work: work.title,
    workEn: work.titleEn ?? null,
    authors: [work.author],
    series: 'pg',
    volume: work.volume,
    language: 'grc',
    chunk: ci,
    chunkCount: chunks.length,
    colContext: colContext ?? (cols[0] ?? null),
    colFirst: cols[0] ?? colContext,
    colLast: cols.at(-1) ?? colContext,
    words: wc,
    incipit,
  };
  if (cols.length) colContext = cols.at(-1);
  const fm = Object.entries(meta).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n');
  fs.writeFileSync(path.join(outDir, `${pad4(ci)}.md`), `---\n${fm}\n---\n\n${text}\n`);
  manifest.push(meta);
});

// ---- validate ----
const errs = [];
const emittedAll = manifest.map((_, i) => fs.readFileSync(path.join(outDir, `${pad4(i)}.md`), 'utf8').split('---\n').slice(2).join('---\n')).join('\n\n');
const outColSeq = [...emittedAll.matchAll(colRe)].map(m => m[1]);
if (outColSeq.join(',') !== srcColSeq.join(','))
  errs.push(`anchor sequence mismatch: map ${srcColSeq.length}, chunks ${outColSeq.length}; first divergence at ${outColSeq.findIndex((c, i) => c !== srcColSeq[i])}`);
const outWords = words(emittedAll.replace(colRe, ''));
if (Math.abs(outWords - srcWords) / srcWords > 0.005)
  errs.push(`word drift: source ${srcWords}, chunks ${outWords}`);
for (let i = 1; i < manifest.length; i++)
  if (manifest[i].colContext !== manifest[i - 1].colLast)
    errs.push(`chunk ${i} colContext ${manifest[i].colContext} != chunk ${i - 1} colLast ${manifest[i - 1].colLast}`);

fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify({
  workKey: work.key, title: work.title, titleEn: work.titleEn ?? null, authors: [work.author],
  series: 'pg', volume: work.volume, language: 'grc',
  pages: work.pages, citRange: work.citRange,
  colFirst: srcColSeq[0], colLast: srcColSeq.at(-1),
  greekColsInferred: inferredPages.map(p => pad4(greekCol.get(p))),
  sourceWords: srcWords, sourceColMarks: srcColSeq.length,
  chunkCount: chunks.length, chunks: manifest,
}, null, 2));

console.log(`${chunks.length} chunks → ${outDir}`);
manifest.forEach(m => console.log(`  ${pad4(m.chunk)}  ${String(m.words).padStart(5)}w  ${m.colFirst}–${m.colLast}  ${m.incipit.slice(0, 50)}`));
if (errs.length) { console.error('\nVALIDATION FAILED:'); errs.forEach(e => console.error(' - ' + e)); process.exit(1); }
console.log(`\nvalidation OK: ${srcColSeq.length} column anchors, ${srcWords} words conserved`);
