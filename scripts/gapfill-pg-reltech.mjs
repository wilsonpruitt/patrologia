#!/usr/bin/env node
// gapfill-pg-reltech.mjs — RelTech's Electronic PG volume list
// (http://rosetta.reltech.org/PG-list.html) is a plain-text per-volume
// author/content list covering ALL 161 PG tomes (185 <li> entries once split
// parts like "7a"/"7b"/"16a-c" are counted) — a genuinely different,
// independent source from archive.org/Google Books metadata, not another
// pass over the same two APIs. Confirmed against tomes already resolved with
// high confidence before trusting it further (068/074-076 "Cyril of
// Alexandria" match reltech's 069-073; 111 "Nicholas Patriarch of
// Constantinople..." matches our archive.org creator-field hit; 010's mixed
// "Gregory Thaumaturgus, ... Hippolytus, etc." matches our combined-author
// note; 134 "Joannis Zonaræ" confirms the already-known Zonaras pin).
//
// The page serves plain HTTP with a certificate mismatch on HTTPS upgrade
// (cert is issued for phoenix.reltech.org, not rosetta./www.) — fetch it as
// literal http://, not https://.
//
// Note: the page's final section ("Disk 12: vols. 108-118" etc, CD-ROM disk
// groupings) is NOT a volume entry and must be filtered out.

import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';

const root = path.join(import.meta.dirname, '..');
const cachePath = path.join(root, 'raw/html/pg-list-reltech.html');

function fetchPlainHttp(url) {
  return new Promise((resolve, reject) => {
    http.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        resolve(fetchPlainHttp(res.headers.location));
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }
      let body = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => resolve(body));
    }).on('error', reject);
  });
}

let html;
if (fs.existsSync(cachePath)) {
  html = fs.readFileSync(cachePath, 'utf8');
  console.log(`Using cached ${cachePath}`);
} else {
  html = await fetchPlainHttp('http://rosetta.reltech.org/PG-list.html');
  fs.writeFileSync(cachePath, html);
  console.log(`Fetched and cached ${cachePath}`);
}

// "PG 7a: Irenaeus" / "PG \n69:\nCyril of Alexandria\n" -> {tome:'007-1', text:'Irenaeus'}
const DISK_RE = /^Disk\s+\d+:/i;
const items = html.split(/<li>/).slice(1);
const partLetter = { a: '1', b: '2', c: '3' };

const results = [];
for (const raw of items) {
  const text = raw.replace(/<[^>]+>/g, ' ').replace(/&aelig;/gi, 'ae').replace(/&oelig;/gi, 'oe')
    .replace(/\s+/g, ' ').trim();
  const m = text.match(/^PG\s+(\d+)([a-c])?:\s*(.+)$/i);
  if (!m) continue;
  if (DISK_RE.test(text)) continue;
  const num = m[1].padStart(3, '0');
  const tome = m[2] ? `${num}-${partLetter[m[2].toLowerCase()]}` : num;
  results.push({ tome, text: m[3].trim() });
}

const out = {
  generated: 'gapfill-pg-reltech.mjs',
  source: 'http://rosetta.reltech.org/PG-list.html (Electronic PG volume list, RelTech)',
  note: 'Independent third catalog source (not archive.org, not Google Books) covering all 161 PG tomes by number. Text is the raw per-volume author/content line, verbatim; resolve-pg-authors.mjs extracts the lead author name as Signal 5.',
  totals: { tomes: results.length },
  tomes: results,
};

fs.writeFileSync(path.join(root, 'data/pg-tome-reltech.json'), JSON.stringify(out, null, 2) + '\n');
console.log(`Wrote data/pg-tome-reltech.json: ${out.totals.tomes} tome entries`);
