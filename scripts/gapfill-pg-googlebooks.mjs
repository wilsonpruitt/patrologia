#!/usr/bin/env node
// gapfill-pg-googlebooks.mjs — widen the PG tome→author search past archive.org.
// Per next-session-resume.md 2026-07-04 item 1: 35 PG tomes have NO archive.org
// item match (data/pg-tome-index.json status "no-candidate"). Those tomes are
// still fully preserved (patrologia-volumes mega-item covers the scan), but
// carry no per-tome author/content metadata the way matched tomes do.
//
// Google Books API is unauthenticated-quota-exhausted (429, no key available),
// but the plain HTML page at books.google.com/books?id=<id> still returns a
// <title> tag. Most are generic ("Patrologiae cursus completus...") but some
// carry the actual work title (e.g. id fvYUAAAAQAAJ for PG 067 -> "Socratis
// Scholastici, Hermiae Sozomeni Historia ecclesiastica" - confirmed correct,
// PG 67 is the Church History trio). This script fetches every googlebooks
// link already in data/volumes.json for the 35 gap tomes and keeps whichever
// titles are NOT the generic Migne boilerplate.

import fs from 'node:fs';
import path from 'node:path';

const root = path.join(import.meta.dirname, '..');
const volumes = JSON.parse(fs.readFileSync(path.join(root, 'data/volumes.json'), 'utf8'));
const tomeIndex = JSON.parse(fs.readFileSync(path.join(root, 'data/pg-tome-index.json'), 'utf8'));

const gapTomes = new Set(tomeIndex.tomes.filter(t => t.status === 'no-candidate').map(t => t.tome));

const GENERIC_RE = /^patrologi[aæ]e?\s+cursus\s+completus\b/i;

function isGeneric(title) {
  if (!title) return true;
  const stripped = title.replace(/\s*-\s*Google Books\s*$/i, '').trim();
  if (GENERIC_RE.test(stripped)) return true;
  // "Patrologiae cursus completus [Series Graeca]: ... omnium ss. patrum ..." etc
  // still generic even with author-less ellipsis boilerplate.
  if (/^patrologi[aæ]e?\s+cursus\s+completus/i.test(stripped) && /\.\.\.$|omnium ss\. patrum/i.test(stripped)) return true;
  // "Patrologiae Graecae - Jacques-Paul Migne": series title + Migne-as-author,
  // no work/saint name — still boilerplate, just without "cursus completus".
  if (/^patrologi[aæ]e?\s+graecae?$/i.test(stripped.replace(/\s*-\s*jacques-paul migne\s*$/i, '').trim())
      && /jacques-paul migne\s*$/i.test(stripped)) return true;
  return false;
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function fetchTitle(id) {
  const res = await fetch(`https://books.google.com/books?id=${id}`, {
    headers: { 'User-Agent': 'Mozilla/5.0' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const html = await res.text();
  const m = html.match(/<title>([^<]*)<\/title>/);
  return m ? m[1].replace(/\s*-\s*Google Books\s*$/i, '').trim() : null;
}

const results = [];
let fetched = 0, failed = 0;

for (const v of volumes.volumes) {
  if (v.series !== 'PG' || !gapTomes.has(v.tome)) continue;
  const gbIds = (v.links || []).filter(l => l.source === 'googlebooks').map(l => l.id);
  const perTome = { tome: v.tome, candidates: [] };
  for (const id of gbIds) {
    let title = null, error = null;
    try {
      title = await fetchTitle(id);
      fetched++;
    } catch (e) {
      error = String(e.message || e);
      failed++;
    }
    await sleep(800); // polite spacing, no established Google Books convention yet
    perTome.candidates.push({ id, title, generic: title ? isGeneric(title) : null, error });
  }
  const specific = perTome.candidates.filter(c => c.title && !c.generic);
  perTome.specificTitles = specific.map(c => c.title);
  results.push(perTome);
  console.log(`${v.tome}: ${perTome.candidates.length} ids, ${specific.length} specific title(s)`);
}

const out = {
  generated: 'gapfill-pg-googlebooks.mjs',
  note: 'Google Books plain-HTML <title> tag for each PG registry googlebooks link, for the 35 tomes with no archive.org item match. "generic" titles are Migne\'s own boilerplate ("Patrologiae cursus completus...") and carry no author signal; specificTitles are the non-generic survivors, which are the closest thing to a verified author/content field for these tomes. Titles are still archive.org/Google catalog text, not scraped from third-party sites or memory.',
  totals: {
    tomes: results.length,
    fetched,
    failed,
    tomesWithSpecificTitle: results.filter(r => r.specificTitles.length).length,
  },
  tomes: results,
};

fs.writeFileSync(path.join(root, 'data/pg-tome-googlebooks.json'), JSON.stringify(out, null, 2) + '\n');
console.log(`\nWrote data/pg-tome-googlebooks.json: ${out.totals.tomesWithSpecificTitle}/${out.totals.tomes} gap tomes now have a specific title`);
