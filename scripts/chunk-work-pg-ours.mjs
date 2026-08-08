#!/usr/bin/env node
// chunk-work-pg-ours.mjs — chunker for PG works transcribed from OUR OWN plate OCR.
// Usage: node scripts/chunk-work-pg-ours.mjs <workKey> [--target 1000] [--max 1400]
//
// WHY THIS EXISTS, and why chunk-work-pg.mjs could not be reused (2026-08-07):
//   chunk-work-pg.mjs is built for CALFA-sourced volumes. It assumes a flat text
//   whose `$8` page markers ARE the Greek column boundaries, and a column map
//   keyed `page`/`greekCol`/`colOdd`. Neither holds for a work we OCR'd ourselves:
//   our source is one hand-transcribed file PER LEAF, and pg088's map is keyed
//   `leaf`/`colLeft`/`colRight`/`greekSide`. Bending one script to both would put
//   two source contracts behind one entry point, and the failure mode — a chunk
//   silently anchored to the wrong column — is exactly what hard rule 1 exists to
//   prevent. So: separate script, explicit segment list, loud validation.
//
// THE SEGMENT LIST IS DELIBERATELY HAND-WRITTEN, not derived.
//   A leaf is NOT reliably one column of one work. Measured on PG 88:
//     · leaf970 changes SCRIPT partway down — Latin above the rule (the tail of
//       Doctrina XXIV, which has no Greek at all), Greek below it. Only that
//       column's D band belongs to the Epistolae.
//     · leaf972 changes WORK partway down — the epistles end at `Ἀμήν.` and an
//       INDEX CAPITUM begins under a printed rule.
//   Any rule clever enough to infer those boundaries is clever enough to get them
//   wrong silently. They are read off the plate and written down.
//
// THE GREEK COLUMN IS NOT ALWAYS colLeft. Migne sets the Greek at the gutter and
//   the Latin outside, so greekSide alternates and the Greek columns of an opening
//   are ADJACENT (…1837, 1840, 1841…), not consecutive. The Latin columns carry
//   the numbers in between. Deriving the anchor from colLeft would mis-cite every
//   right-side leaf in the volume.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.join(import.meta.dirname, '..');
const key = process.argv[2];
if (!key) { console.error('usage: node scripts/chunk-work-pg-ours.mjs <workKey>'); process.exit(1); }
const argVal = (flag, dflt) => {
  const i = process.argv.indexOf(flag);
  return i > 0 ? Number(process.argv[i + 1]) : dflt;
};
const TARGET = argVal('--target', 1000);
const MAX = argVal('--max', 1400);

const reg = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/pg-works.json'), 'utf8'));
const work = reg.works.find(w => w.key === key);
if (!work) { console.error(`work key ${key} not found in data/pg-works.json`); process.exit(1); }
if (!Array.isArray(work.oursSegments) || !work.oursSegments.length) {
  console.error(`${key} has no oursSegments[] — this chunker requires an explicit, plate-read segment list.`);
  process.exit(1);
}

const volPad = String(work.volume).padStart(3, '0');
const map = JSON.parse(fs.readFileSync(path.join(ROOT, `data/pg-column-maps/pg${volPad}.json`), 'utf8'));
const byLeaf = new Map(map.pages.map(r => [r.leaf, r]));
const plateVerified = new Set(Object.keys(map.anchorsPlateVerified ?? {}).map(Number));

// ---- read each segment, one leaf file at a time ----
const segs = [];
for (const s of work.oursSegments) {
  const rec = byLeaf.get(s.leaf);
  if (!rec) { console.error(`leaf ${s.leaf} not in the column map`); process.exit(1); }

  // The Greek column is the side greekSide names — NOT colLeft. See header.
  const greekCol = rec.greekSide === 'right' ? rec.colRight : rec.colLeft;
  if (s.expectCol != null && s.expectCol !== greekCol) {
    console.error(`⛔ leaf ${s.leaf}: segment expects col ${s.expectCol}, map derives ${greekCol}. Refusing to guess.`);
    process.exit(1);
  }
  if (!plateVerified.has(s.leaf)) {
    console.warn(`  ⚠ leaf ${s.leaf}: column ${greekCol} is NOT in anchorsPlateVerified — anchor is interpolated, do not cite it without reading the head`);
  }

  const raw = fs.readFileSync(path.join(ROOT, s.file), 'utf8');
  // The transcription file is body text first, then the apparatus sections.
  // Everything from the first section header onwards is commentary, not text.
  const bodyEnd = raw.search(/^(LAYOUT|LATIN-EXCLUDED|FOOTNOTES|UNCERTAIN|INLINE FOOTNOTE|FOOT-RULE RE-READ):/m);
  let body = (bodyEnd === -1 ? raw : raw.slice(0, bodyEnd));
  let lines = body.split('\n');
  if (s.lines) {                                   // 1-indexed, inclusive
    lines = lines.slice(s.lines[0] - 1, s.lines[1]);
  }
  const text = lines.join('\n').trim();
  if (!text) { console.error(`leaf ${s.leaf}: segment is empty after slicing`); process.exit(1); }
  segs.push({ ...s, greekCol, text });
}

// ---- normalise to running text ----
// Rules, in order, and each one is load-bearing:
//   1. `[X]` band markers become `[b: X]` (Wilson's ruling 2026-08-06).
//   2. An end-of-line hyphen JOINS to the next line with nothing between it —
//      including ACROSS a leaf boundary. Measured on this work: leaf970 ends
//      `ἐλπι-` and leaf971 opens `ζόμενα` (= ἐλπιζόμενα); leaf971 ends `πει-`
//      and leaf972 opens `ρασθῆναι` (= πειρασθῆναι). A chunker that dropped the
//      join would split a word across a citation address.
//   3. Every other newline becomes a single space.
const normalise = t => t
  .replace(/\[([ABCD])\]/g, '[b: $1]')
  .replace(/-\n\s*/g, '')
  .replace(/\s*\n\s*/g, ' ')
  .replace(/[ \t]{2,}/g, ' ')
  .trim();

// Build one stream, prefixing each segment with its column anchor.
let stream = '';
const anchorSeq = [];
for (const s of segs) {
  const t = normalise(s.text);
  // A hyphen at the very end of a segment must eat the following anchor's
  // whitespace but NOT the anchor itself — the join is a word, the anchor is an
  // address, and both have to survive.
  //
  // ⛔ MID-WORD ANCHORS ARE REAL AND MUST NOT CARRY SPACES.
  // Measured on this work: col 1837 ends `ἐλπι-` and col 1840 opens `ζόμενα`;
  // col 1840 ends `πει-` and col 1841 opens `ρασθῆναι`. The word is genuinely
  // split across two columns, so the anchor genuinely falls inside it — and the
  // band letter with it, because the new column's A band starts on that line.
  //
  // Written with spaces (`ἐλπι[1840] [b: A] ζόμενα`) the markers strip to
  // `ἐλπι ζόμενα` — TWO NON-WORDS where the plate has one, and a defect no
  // downstream check would catch because both halves are well-formed Greek
  // letters. Written tight (`ἐλπι[1840][b: A]ζόμενα`) they strip to
  // `ἐλπιζόμενα`, which is what the plate says. Tight it is.
  anchorSeq.push(s.greekCol);
  const prevJoins = /-$/.test((segs[segs.indexOf(s) - 1]?.text ?? '').trim());
  const marker = `[${s.greekCol}]`;
  if (prevJoins && stream) {
    stream = stream.replace(/-\s*$/, '') + marker + t.replace(/^(\[b: [ABCD]\])\s+/, '$1');
  } else {
    stream += (stream ? ' ' : '') + marker + ' ' + t;
  }
}

// Markers strip to NOTHING, not to a space. The text already carries its own
// spacing around them; substituting a space re-breaks exactly the mid-word
// anchors the tight-marker convention above exists to keep whole, and inflates
// the count by one per column seam that falls inside a word.
const wordsOf = s => s.replace(/\[[^\]]*\]/g, '').split(/\s+/).filter(Boolean).length;
const totalWords = wordsOf(stream);

// ---- chunk at sentence boundaries nearest the target ----
// Greek sentence enders: . ; · and the Greek question mark ;
const parts = stream.split(/(?<=[.;·])\s+/);
const chunks = [];
let cur = '';
for (const p of parts) {
  const candidate = cur ? cur + ' ' + p : p;
  if (cur && wordsOf(candidate) > MAX) { chunks.push(cur); cur = p; continue; }
  cur = candidate;
  if (wordsOf(cur) >= TARGET) { chunks.push(cur); cur = ''; }
}
if (cur.trim()) {
  if (chunks.length && wordsOf(cur) < TARGET * 0.35) chunks[chunks.length - 1] += ' ' + cur;
  else chunks.push(cur);
}

// ---- emit ----
const outDir = path.join(ROOT, 'src/greek', key);
fs.mkdirSync(outDir, { recursive: true });
for (const f of fs.readdirSync(outDir)) if (/^\d{4}\.md$/.test(f)) fs.unlinkSync(path.join(outDir, f));

const anchorsIn = t => [...t.matchAll(/\[(\d{3,4})\]/g)].map(m => m[1]);
const manifestChunks = [];
chunks.forEach((text, i) => {
  const n = String(i + 1).padStart(4, '0');
  const a = anchorsIn(text);
  const colFirst = a[0] ?? manifestChunks.at(-1)?.colLast ?? String(segs[0].greekCol);
  const colLast = a.at(-1) ?? colFirst;
  const colContext = colFirst;
  const words = wordsOf(text);
  const incipit = text.slice(0, 90).replace(/\s+\S*$/, '');
  const fm = [
    '---',
    `workKey: ${JSON.stringify(key)}`,
    `work: ${JSON.stringify(work.title)}`,
    `workEn: ${JSON.stringify(work.titleEn)}`,
    `authors: ${JSON.stringify([work.author])}`,
    'series: "pg"',
    `volume: ${work.volume}`,
    'language: "grc"',
    `chunk: ${i + 1}`,
    `chunkCount: ${chunks.length}`,
    `colContext: ${JSON.stringify(colContext)}`,
    `colFirst: ${JSON.stringify(colFirst)}`,
    `colLast: ${JSON.stringify(colLast)}`,
    `words: ${words}`,
    `incipit: ${JSON.stringify(incipit)}`,
    'greekSource: "ours-vision-ocr"',
    '---',
    '',
    text,
    '',
  ].join('\n');
  fs.writeFileSync(path.join(outDir, `${n}.md`), fm);
  manifestChunks.push({ chunk: i + 1, file: `${n}.md`, colFirst, colLast, words, bands: [...text.matchAll(/\[b: ([ABCD])\]/g)].map(m => m[1]) });
});

// ---- validate, loudly ----
const emittedWords = manifestChunks.reduce((s, c) => s + c.words, 0);
const emittedAnchors = chunks.flatMap(anchorsIn).map(Number);
const problems = [];
if (emittedWords !== totalWords) problems.push(`word conservation: stream ${totalWords} vs chunks ${emittedWords}`);
if (JSON.stringify(emittedAnchors) !== JSON.stringify(anchorSeq))
  problems.push(`anchor sequence: expected ${anchorSeq.join(',')} got ${emittedAnchors.join(',')}`);

// GATE: a segment that ended mid-word must strip to ONE word, not two.
// This is the check the first run of this script failed — see the note above.
for (let i = 1; i < segs.length; i++) {
  if (!/-$/.test(segs[i - 1].text.trim())) continue;
  const tail = segs[i - 1].text.trim().replace(/-$/, '').split(/\s+/).pop();
  const head = normalise(segs[i].text).replace(/^\[b: [ABCD]\]\s*/, '').split(/\s+/)[0].replace(/[.,;·]$/, '');
  const joined = tail + head;
  const stripped = stream.replace(/\[[^\]]*\]/g, '');
  if (!stripped.includes(joined))
    problems.push(`mid-word anchor at col ${segs[i].greekCol}: "${tail}" + "${head}" should strip to "${joined}" and does not — the markers are carrying whitespace and the word is broken in two`);
}

// ⚠ TWO THINGS THIS WRITE MUST NOT LOSE, both learned the hard way on the Epistolae.
//
// 1. The DESCRIPTIVE HEAD (title/titleEn/authors/citRange/colFirst/colLast/chunkCount).
//    `chunk-work-pg.mjs` (the Calfa chunker) writes these and `build-work-page-pg.mjs`
//    reads them — `manifest.colFirst` straight into the page <title> and the citation
//    line. Omitting them does not throw: `parseInt(undefined)` is NaN, so the work
//    shipped a title reading "PG 88, NaN–NaN", AND `build-cruces.mjs` — which finds a
//    work's page by matching that <title> against a strict `PG \d+, [\d–-]+` pattern —
//    could not resolve the page and silently declined to publish the apparatus. That is
//    the 404-cruces-link trap the runbook warns about, arriving by a second route.
// 2. The APPARATUS block that `attach-pg-notes.mjs` writes into this same file. A
//    re-chunk used to drop all 11 notes with nothing erroring and no verifier able to
//    see it. Preserved here so the ordering of the two scripts stops mattering.
// The apparatus lives in TWO places and both have to come back: a top-level block
// (source/keyedTo/contract) and a per-chunk `apparatus` on each chunk record. Carry
// them only when the chunking is IDENTICAL — same chunk count, same column span per
// chunk — because notes are keyed to columns and re-attaching them across a changed
// boundary would file a note under the wrong column silently. If the shape moved,
// drop them and say so loudly; `attach-pg-notes.mjs` is then genuinely required.
const prevManifestPath = path.join(outDir, 'manifest.json');
const prev = fs.existsSync(prevManifestPath)
  ? JSON.parse(fs.readFileSync(prevManifestPath, 'utf8'))
  : null;
const sameShape = prev?.chunks?.length === manifestChunks.length &&
  manifestChunks.every((c, i) => prev.chunks[i].colFirst === c.colFirst && prev.chunks[i].colLast === c.colLast);
const prevApparatus = sameShape ? prev.apparatus : undefined;
if (sameShape) {
  manifestChunks.forEach((c, i) => { if (prev.chunks[i].apparatus) c.apparatus = prev.chunks[i].apparatus; });
} else if (prev?.apparatus) {
  console.warn('  ⚠ chunk shape changed — apparatus DROPPED. Re-run scripts/attach-pg-notes.mjs before building.');
}

fs.writeFileSync(prevManifestPath, JSON.stringify({
  workKey: key, series: 'pg', volume: work.volume,
  title: work.title, titleEn: work.titleEn, authors: [work.author],
  citRange: work.citRange ?? null,
  colFirst: manifestChunks[0].colFirst,
  colLast: manifestChunks.at(-1).colLast,
  chunkCount: chunks.length,
  greekSource: 'ours-vision-ocr',
  builtBy: 'scripts/chunk-work-pg-ours.mjs',
  segments: segs.map(s => ({ leaf: s.leaf, greekCol: s.greekCol, file: s.file, lines: s.lines ?? null, note: s.note ?? null })),
  anchorSequence: anchorSeq,
  anchorsPlateVerified: segs.map(s => s.leaf).filter(l => plateVerified.has(l)),
  chunks: manifestChunks,
  words: totalWords,
  validation: problems.length ? { ok: false, problems } : { ok: true },
  ...(prevApparatus ? { apparatus: prevApparatus } : {}),
}, null, 2) + '\n');

console.log(`${key}: ${chunks.length} chunks, ${totalWords} words → src/greek/${key}/`);
console.log(`  anchors: ${anchorSeq.join(' → ')}`);
for (const c of manifestChunks) console.log(`  ${c.file}  cols ${c.colFirst}–${c.colLast}  ${c.words}w  bands ${c.bands.join('') || '—'}`);
if (problems.length) { console.error('\n⛔ VALIDATION FAILED:'); for (const p of problems) console.error('  · ' + p); process.exit(1); }
console.log('\n✅ validation: word conservation and anchor sequence both clean');
