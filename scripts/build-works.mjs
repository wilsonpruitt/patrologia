#!/usr/bin/env node
// Build data/works.json — the site's work-keyed data spine.
// Fuses data/cc-pl-index.json (works/texts) + data/triage/authors-status.json
// (author-level translation statuses) + data/pl-tei-manifest.json (hashes) +
// per-TEI header metadata (title, PL volume, column range from <pb> marks).
//
// Run: node scripts/build-works.mjs
// Reads TEI files one at a time (largest is ~5MB) — safe on the 1GB heap cap.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TEI_DIR = join(ROOT, 'sources/pl/tei');

const ccIndex = JSON.parse(readFileSync(join(ROOT, 'data/cc-pl-index.json'), 'utf8'));
const authorsStatus = JSON.parse(readFileSync(join(ROOT, 'data/triage/authors-status.json'), 'utf8'));
const manifest = JSON.parse(readFileSync(join(ROOT, 'data/pl-tei-manifest.json'), 'utf8'));

const statusByAuthorIdno = new Map(authorsStatus.authors.map(a => [a.idno, a]));
const hashByTextIdno = manifest.manifest;

// --- merge duplicate workIdno entries. Corpus Corporum cross-lists dubia/spuria
// under every candidate author ("Auctor incertus (Anselmus?)" is also filed under
// "(Augustinus?)") and collection pieces under both "Auctores varii" and the
// individual author — same workIdno, same text idnos. One work record each,
// carrying ALL attributions.
const mergedWorks = new Map(); // workIdno -> { attributions[], texts (from first occurrence), words }
for (const w of ccIndex.works) {
  if (!mergedWorks.has(w.workIdno)) {
    mergedWorks.set(w.workIdno, {
      workIdno: w.workIdno,
      words: w.words,
      texts: w.texts,
      attributions: [],
    });
  }
  const rec = mergedWorks.get(w.workIdno);
  if (!rec.attributions.some(a => a.authorIdno === w.authorIdno)) {
    rec.attributions.push({ author: w.author, authorIdno: w.authorIdno, authorYear: w.authorYear });
  }
  // sanity: cross-listed entries must carry identical texts
  const ids = t => t.map(x => x.idno).sort().join(',');
  if (ids(rec.texts) !== ids(w.texts)) {
    console.warn(`workIdno ${w.workIdno}: text sets differ across attributions — keeping first`);
  }
}

// --- TEI header + column extraction (regex on raw XML; headers are uniform CC output)
const PB_RE = /<pb n="([^"]*)"\s*\/>/g;
const COL_RE = /^0*(\d+)([A-Da-d]?)$/;

// V8 substrings retain their parent string — without flattening, every extracted
// title keeps its whole multi-MB XML source alive and the build OOMs.
const flat = s => (s == null ? s : Buffer.from(s, 'utf8').toString('utf8'));

function extractTei(idno) {
  const file = join(TEI_DIR, `${idno}.xml`);
  if (!existsSync(file)) return null;
  const xml = readFileSync(file, 'utf8');

  // standard (2019) header layout, with fallbacks for the older 2013 layout
  // (volume in notesStmt/note, title in sourceDesc/bibl, idno in publicationStmt)
  const titleStmt = xml.match(/<titleStmt>([\s\S]*?)<\/titleStmt>/)?.[1] ?? '';
  const bibl = xml.match(/<sourceDesc>[\s\S]*?<bibl>([\s\S]*?)<\/bibl>/)?.[1] ?? '';
  const title = flat(
    titleStmt.match(/<title>([\s\S]*?)<\/title>/)?.[1].trim()
    ?? bibl.match(/<title>([\s\S]*?)<\/title>/)?.[1].trim()
    ?? null
  );

  const seriesStmt = xml.match(/<seriesStmt>([\s\S]*?)<\/seriesStmt>/)?.[1] ?? '';
  const noteVol = xml.match(/<notesStmt>\s*<note>0*(\d{1,3})<\/note>/)?.[1];
  const volMatch = seriesStmt.match(/Patrologia Latina, vol\.\s*(\d+)/);
  const volume = volMatch ? Number(volMatch[1]) : (noteVol ? Number(noteVol) : null);
  const ccCode = flat(
    seriesStmt.match(/<idno>([\s\S]*?)<\/idno>/)?.[1].trim()
    ?? xml.match(/<publicationStmt>[\s\S]*?<idno>([\s\S]*?)<\/idno>/)?.[1].trim()
    ?? null
  );

  // colFirst = first mark; colLast = highest mark. A couple of texts carry a
  // stray low column as their final <pb> (source typos, e.g. 7728 ends
  // ...1199A, 1120A) — positional-last would understate the range. Flag
  // non-monotonic sequences for the chunker's continuity validator.
  const sectVal = { '': 0, A: 1, B: 2, C: 3, D: 4 };
  const colKey = (col, sect) => col * 8 + sectVal[sect];
  let first = null, last = null, lastKey = -1, maxKey = -1, pbCount = 0, badPb = [], monotonic = true;
  for (const m of xml.matchAll(PB_RE)) {
    pbCount++;
    const raw = m[1].trim();
    const cm = raw.match(COL_RE);
    if (!cm) { if (badPb.length < 5) badPb.push(flat(raw)); continue; }
    const norm = `${Number(cm[1])}${cm[2].toUpperCase()}`;
    const key = colKey(Number(cm[1]), cm[2].toUpperCase());
    if (first === null) first = norm;
    if (key < lastKey) monotonic = false;
    lastKey = key;
    if (key > maxKey) { maxKey = key; last = norm; }
  }

  return { title, volume, ccCode, colFirst: first, colLast: last, pbCount, badPb, pbMonotonic: monotonic };
}

// --- build works
const works = [];
const anomalies = { missingTei: [], noVolume: [], noColumns: [], badPb: [], nonMonotonicPb: [] };
let done = 0;

for (const w of mergedWorks.values()) {
  const texts = [];

  for (const t of w.texts) {
    const tei = extractTei(t.idno);
    const hash = hashByTextIdno[t.idno] ?? null;
    if (!tei) anomalies.missingTei.push(t.idno);
    else {
      if (tei.volume === null) anomalies.noVolume.push(t.idno);
      if (tei.colFirst === null) anomalies.noColumns.push(t.idno);
      if (tei.badPb.length) anomalies.badPb.push({ idno: t.idno, samples: tei.badPb });
      if (!tei.pbMonotonic) anomalies.nonMonotonicPb.push(t.idno);
    }
    texts.push({
      idno: t.idno,
      title: tei?.title ?? null,
      indexName: t.name,
      words: t.words,
      volume: tei?.volume ?? null,
      colFirst: tei?.colFirst ?? null,
      colLast: tei?.colLast ?? null,
      pbCount: tei?.pbCount ?? 0,
      pbMonotonic: tei ? tei.pbMonotonic : null,
      ccCode: tei?.ccCode ?? null,
      tei: !!tei,
      bytes: hash?.bytes ?? null,
      sha256: hash?.sha256 ?? null,
    });
  }

  // attributions carry the author-level triage status
  const attributions = w.attributions.map(a => {
    const status = statusByAuthorIdno.get(a.authorIdno);
    return {
      ...a,
      authorStatus: status?.status ?? 'untriaged',
      authorStatusVerified: status?.verified ?? false,
    };
  });

  // work-level rollups
  const vols = [...new Set(texts.map(t => t.volume).filter(v => v !== null))].sort((a, b) => a - b);
  const singleVol = vols.length === 1;

  works.push({
    workIdno: w.workIdno,
    author: attributions[0].author, // primary (first-listed) attribution
    attributions,
    words: w.words,
    volumes: vols,
    // column range only meaningful within one volume (columns restart per tome)
    colFirst: singleVol ? texts.reduce((m, t) => (t.colFirst !== null && (m === null || parseInt(t.colFirst) < parseInt(m)) ? t.colFirst : m), null) : null,
    colLast: singleVol ? texts.reduce((m, t) => (t.colLast !== null && (m === null || parseInt(t.colLast) > parseInt(m)) ? t.colLast : m), null) : null,
    cpl: null, // enrichment pass later (Clavis Patrum Latinorum)
    translation: {
      workStatus: null, // per-work triage pass fills this
      englishState: null, // ours | pd-ingested | elsewhere | untranslated
    },
    texts,
  });

  if (++done % 500 === 0) console.log(`  ${done}/${mergedWorks.size} works`);
}

// --- summary stats (by primary attribution's author-level status)
const byStatus = {};
for (const w of works) {
  const s = w.attributions[0].authorStatus;
  byStatus[s] = byStatus[s] ?? { works: 0, words: 0 };
  byStatus[s].works++;
  byStatus[s].words += w.words;
}
const multiAttr = works.filter(w => w.attributions.length > 1).length;

const out = {
  generated: new Date().toISOString().slice(0, 10),
  source: 'build-works.mjs: cc-pl-index.json + triage/authors-status.json + pl-tei-manifest.json + TEI headers',
  note: 'Work-keyed spine for migne.app — ONE record per workIdno; cross-listed dubia/spuria and collection pieces carry multiple attributions (each with its author-level triage status). Column refs follow ORIGINAL Migne plates (via Corpus Corporum TEI <pb> marks), not Garnier reprints. colFirst/colLast null at work level when a work spans volumes (columns restart per tome) — use per-text ranges. colLast is the HIGHEST mark (robust to stray final-pb typos). pbMonotonic=false (~27% of texts) is mostly benign structure, not corruption: bare-number marks step back a column at page-pair boundaries (odd/even columns share a page), and some files interleave parallel versions or appendices — the Phase 5 chunker continuity validator MUST tolerate these patterns, not assume strict ascent. translation.workStatus/englishState await the per-work pass. cpl awaits Clavis enrichment.',
  counts: {
    works: works.length,
    multiAttributionWorks: multiAttr,
    texts: works.reduce((n, w) => n + w.texts.length, 0),
    words: works.reduce((n, w) => n + w.words, 0),
    byPrimaryAuthorStatus: byStatus,
  },
  anomalies: {
    missingTei: anomalies.missingTei,
    noVolume: anomalies.noVolume.length,
    noColumns: anomalies.noColumns.length,
    noColumnsIdnos: anomalies.noColumns.slice(0, 50),
    badPbSamples: anomalies.badPb.slice(0, 20),
    badPbTotal: anomalies.badPb.length,
    nonMonotonicPb: anomalies.nonMonotonicPb,
  },
  works,
};

writeFileSync(join(ROOT, 'data/works.json'), JSON.stringify(out, null, 1));
console.log(`\nWrote data/works.json — ${out.counts.works} works (${multiAttr} multi-attribution), ${out.counts.texts} text entries, ${(out.counts.words / 1e6).toFixed(1)}M words`);
console.log('By primary author status:', Object.fromEntries(Object.entries(byStatus).map(([k, v]) => [k, `${v.works}w/${(v.words / 1e6).toFixed(1)}M`])));
console.log('Anomalies: missingTei', anomalies.missingTei.length, '| noVolume', anomalies.noVolume.length, '| noColumns', anomalies.noColumns.length, '| badPb files', anomalies.badPb.length, '| nonMonotonicPb', anomalies.nonMonotonicPb.length);
