#!/usr/bin/env node
// build-pg-tome-index.mjs — Phase 2 follow-up: per-tome author/content metadata
// for all 167 PG registry tomes, verified against archive.org (never memory,
// never scraped Wikipedia — per next-session-resume.md 2026-07-04).
//
// Two-step verification:
//  1. Match each registry tome to an archive.org item. volumes.json's own
//     "archive" links only cover 47/167 tomes; a broader title search on
//     archive.org surfaces ~246 candidate items (many carry an explicit
//     `volume` field or a volume number baked into the identifier/title —
//     e.g. `patrologiae_cursus_completus_gr_vol_032` / "Volume 32 - Basil 4").
//  2. Pull that item's own /metadata/<id> record and use its `description`
//     field as the verified author/content note (archive.org catalogers
//     transcribe Migne's own volume tables of contents there — see tome 010
//     which lists "S. Gregorius Thaumaturgus, S. Hippolytus Portuensis...").
//     `creator` is always "Migne" and is NOT used as the author field.
//
// Cache: data/cache/ia-search-pg.json (raw advancedsearch results, fetched
// separately: archive.org advancedsearch q=title:(patrologiae cursus
// completus graeca), fl=identifier/title/volume/description, rows=500).

import fs from 'node:fs';
import path from 'node:path';

const root = path.join(import.meta.dirname, '..');
const searchPath = path.join(root, 'data/cache/ia-search-pg.json');
const outPath = path.join(root, 'data/pg-tome-index.json');

const volumes = JSON.parse(fs.readFileSync(path.join(root, 'data/volumes.json'), 'utf8'));
const pgTomes = volumes.volumes.filter(v => v.series === 'PG');

const searchDocs = JSON.parse(fs.readFileSync(searchPath, 'utf8')).response.docs;

function parseTome(tome) {
  const [num, part] = tome.split('-');
  return { num: parseInt(num, 10), part: part ? parseInt(part, 10) : null };
}

const LETTER_TO_PART = { a: 1, b: 2, c: 3 };

// Collect every (num, part|null, confidence, identifier, evidence) triple a
// search doc can yield. A doc can match on more than one signal; keep all,
// rank later.
function candidatesFromDoc(doc) {
  const out = [];
  const titles = Array.isArray(doc.title) ? doc.title : (doc.title ? [doc.title] : []);
  const id = doc.identifier;

  // Signal 1: explicit `volume` field, e.g. "25", "16, Pt. 1", "94"
  const vols = Array.isArray(doc.volume) ? doc.volume : (doc.volume ? [doc.volume] : []);
  for (const vraw of vols) {
    const m = vraw.match(/^(\d+)(?:,?\s*(?:pt\.?|part)\s*(\d+))?/i);
    if (m) {
      out.push({
        num: parseInt(m[1], 10),
        part: m[2] ? parseInt(m[2], 10) : null,
        confidence: 'high',
        signal: `volume field "${vraw}"`,
        id,
      });
    }
  }

  // Signal 2: identifier carries `_vol_NNN` or `_vol_NNNa`
  const idm = id.match(/_vol_(\d{2,3})([a-c])?/i);
  if (idm) {
    out.push({
      num: parseInt(idm[1], 10),
      part: idm[2] ? LETTER_TO_PART[idm[2].toLowerCase()] : null,
      confidence: 'high',
      signal: `identifier "${id}"`,
      id,
    });
  }

  // Signal 3: title carries "Volume NN" or "Volume NNa" or ", Volume NN"
  for (const t of titles) {
    const tm = t.match(/volume\s*(\d{1,3})([a-c])?\b/i);
    if (tm) {
      out.push({
        num: parseInt(tm[1], 10),
        part: tm[2] ? LETTER_TO_PART[tm[2].toLowerCase()] : null,
        confidence: 'medium',
        signal: `title "${t}"`,
        id,
        titleText: t,
      });
    }
  }

  return out;
}

const byNum = new Map(); // num -> [{part, confidence, signal, id, titleText}]
for (const doc of searchDocs) {
  for (const c of candidatesFromDoc(doc)) {
    if (!byNum.has(c.num)) byNum.set(c.num, []);
    byNum.get(c.num).push(c);
  }
}

// also seed with volumes.json's own verified "archive" links (highest trust —
// these were already curated into the registry)
const registryArchiveByTome = new Map();
for (const t of pgTomes) {
  const a = t.links?.find(l => l.source === 'archive');
  if (a) registryArchiveByTome.set(t.tome, a.id);
}

function pickBestCandidate(tome, num, part) {
  const registryId = registryArchiveByTome.get(tome);
  if (registryId) {
    return { id: registryId, confidence: 'high', signal: 'volumes.json registry link' };
  }
  const cands = byNum.get(num) || [];
  // prefer exact part match (including both null = no-part volume)
  const exact = cands.filter(c => (c.part ?? null) === (part ?? null));
  const pool = exact.length ? exact : cands;
  if (!pool.length) return null;
  // rank: high confidence first, then dedupe by id keeping first
  pool.sort((a, b) => (a.confidence === 'high' ? 0 : 1) - (b.confidence === 'high' ? 0 : 1));
  return pool[0];
}

async function fetchMetadata(id) {
  const res = await fetch(`https://archive.org/metadata/${id}`);
  if (!res.ok) throw new Error(`${id}: HTTP ${res.status}`);
  const json = await res.json();
  return json.metadata || null;
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

const entries = [];
let matched = 0, fetched = 0, fetchFailed = 0;

for (const t of pgTomes) {
  const { num, part } = parseTome(t.tome);
  const best = pickBestCandidate(t.tome, num, part);
  if (!best) {
    entries.push({ tome: t.tome, status: 'no-candidate', archiveId: null });
    continue;
  }
  matched++;
  let meta = null, error = null;
  try {
    meta = await fetchMetadata(best.id);
    fetched++;
  } catch (e) {
    error = String(e.message || e);
    fetchFailed++;
  }
  await sleep(250); // be polite to archive.org

  entries.push({
    tome: t.tome,
    status: 'matched',
    archiveId: best.id,
    matchConfidence: best.confidence,
    matchSignal: best.signal,
    title: meta?.title || null,
    volume: meta?.volume || null,
    description: meta?.description || null,
    creator: meta?.creator || null, // NOT the author field — always "Migne"
    date: meta?.date || null,
    error,
  });

  if (entries.length % 20 === 0) {
    console.log(`... ${entries.length}/${pgTomes.length} (matched ${matched}, fetched ${fetched}, failed ${fetchFailed})`);
  }
}

const out = {
  generated: 'build-pg-tome-index.mjs',
  source: {
    registry: 'data/volumes.json (PG series, 167 tomes)',
    search: 'data/cache/ia-search-pg.json (archive.org advancedsearch, title:(patrologiae cursus completus graeca), 246 docs)',
  },
  note: 'archiveId is the best-matched archive.org item for this tome; description is that item\'s own catalog description (NOT ours, NOT scraped from third-party sites) — the verified author/content field. creator is always Migne and should not be read as author.',
  totals: {
    total: pgTomes.length,
    matched,
    noCandidate: pgTomes.length - matched,
    metadataFetched: fetched,
    metadataFailed: fetchFailed,
  },
  tomes: entries,
};

fs.writeFileSync(outPath, JSON.stringify(out, null, 2) + '\n');
console.log(`Wrote ${outPath}: ${matched}/${pgTomes.length} tomes matched, ${fetched} metadata records fetched, ${fetchFailed} failed`);
