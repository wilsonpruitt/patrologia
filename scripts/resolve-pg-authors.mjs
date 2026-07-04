#!/usr/bin/env node
// resolve-pg-authors.mjs — turn data/pg-tome-index.json's raw archive.org
// metadata into a verified tome->author field, WITHOUT the false-positive
// that a shared multi-volume TOC blurb creates.
//
// Two evidence shapes seen in the wild:
//  1. "vol_NNN - Author N" title (one item per volume, e.g.
//     patrologiae_cursus_completus_gr_vol_011 = "Volume 11 - Origen 1").
//     Direct hit: this item IS this tome.
//  2. A description that's actually a catalog note for a WHOLE multi-volume
//     set ("t. 3-4. S. Dionysius Areopagita.--t. 6. ...--t. 15. Origenis.--
//     t. 16. Origenis (3 pts)...") reused verbatim across every item in that
//     scan family (e.g. patrologiaecursu04/10/15/16/36/37/38/45/66/93mignuoft
//     all carry the identical blurb). Only the "t. N[-M]." span that actually
//     contains THIS tome's number is real evidence for THIS tome — crediting
//     every author named anywhere in the blurb to every tome that shares it
//     is the bug this script exists to avoid.

import fs from 'node:fs';
import path from 'node:path';

const root = path.join(import.meta.dirname, '..');
const idx = JSON.parse(fs.readFileSync(path.join(root, 'data/pg-tome-index.json'), 'utf8'));

function tomeNum(tome) {
  return parseInt(tome.split('-')[0], 10);
}

// "t. 3-4. S. Dionysius Areopagita.--t. 6. S. Justinus..." -> [{from:3,to:4,author:'S. Dionysius Areopagita'}, ...]
function parseTocBlurb(desc) {
  const spans = [];
  const re = /t\.\s*(\d+)(?:-(\d+))?\.\s*([^-]+?)(?=--t\.|$)/gi;
  let m;
  while ((m = re.exec(desc))) {
    spans.push({
      from: parseInt(m[1], 10),
      to: m[2] ? parseInt(m[2], 10) : parseInt(m[1], 10),
      author: m[3].trim().replace(/\.$/, ''),
    });
  }
  return spans;
}

// "Volume 11 - Origen 1" -> "Origen 1"
function parseVolTitleAuthor(title) {
  const m = title.match(/volume\s*\d+[a-c]?\s*-\s*(.+)$/i);
  return m ? m[1].trim() : null;
}

const results = [];
for (const t of idx.tomes) {
  if (t.status !== 'matched') {
    results.push({ tome: t.tome, author: null, confidence: 'none', evidence: 'no archive.org candidate matched' });
    continue;
  }
  const num = tomeNum(t.tome);
  const title = Array.isArray(t.title) ? t.title.join(' ') : (t.title || '');
  const desc = Array.isArray(t.description) ? t.description.join(' ') : (t.description || '');

  // Signal 1: direct per-volume title suffix
  const directAuthor = parseVolTitleAuthor(title);
  if (directAuthor) {
    results.push({
      tome: t.tome,
      author: directAuthor,
      confidence: 'high',
      evidence: `archive.org item title "${title}" (${t.archiveId})`,
    });
    continue;
  }

  // Signal 2: shared TOC blurb, only if this tome's number falls in a named span
  const spans = parseTocBlurb(desc);
  const hit = spans.find(s => num >= s.from && num <= s.to);
  if (hit) {
    results.push({
      tome: t.tome,
      author: hit.author,
      confidence: 'medium',
      evidence: `catalog TOC note "t. ${hit.from}${hit.to !== hit.from ? '-' + hit.to : ''}. ${hit.author}" in ${t.archiveId}'s description`,
    });
    continue;
  }

  results.push({
    tome: t.tome,
    author: null,
    confidence: 'none',
    evidence: `matched ${t.archiveId} but no author signal in its title/description`,
  });
}

const out = {
  generated: 'resolve-pg-authors.mjs',
  source: 'data/pg-tome-index.json',
  totals: {
    total: results.length,
    withAuthor: results.filter(r => r.author).length,
    highConfidence: results.filter(r => r.confidence === 'high').length,
    mediumConfidence: results.filter(r => r.confidence === 'medium').length,
    none: results.filter(r => r.confidence === 'none').length,
  },
  tomes: results,
};

fs.writeFileSync(path.join(root, 'data/pg-tome-authors.json'), JSON.stringify(out, null, 2) + '\n');
console.log(`Wrote data/pg-tome-authors.json: ${out.totals.withAuthor}/${out.totals.total} tomes with an author signal (${out.totals.highConfidence} high, ${out.totals.mediumConfidence} medium)`);
