#!/usr/bin/env node
// Pre-deploy gate: no inline marker may reach the reader as literal bracket text.
// Usage: node scripts/scan-raw-markers.mjs   (exit 1 = a marker shipped raw)
//
// WHY THIS EXISTS. Twice now a marker has been specced, verified, logged in
// cruces and gate-green, and still rendered to the reader as literal brackets,
// because NOTHING ANYWHERE LOOKS AT RENDERED OUTPUT:
//
//   2026-08-01 — build-work-page-pg.mjs's paras() had no marker transforms at
//     all, so all 47 inline markers across the four PG works were live on
//     migne.app as raw text (17 [ed:], 17 [lat:], 13 [var:]), e.g. a literal
//     "[lat: the Latin gives <i>invitus est incarnatus</i>…]" in running English.
//   2026-08-04 — the same builder, generalized for bios/badges/about-prose, was
//     never given [n:]/[nt:], because every earlier PG work came from Calfa and
//     Calfa carries no note layer. The first work from our own plate OCR does.
//
// Both have the same shape: a builder generalized on the axes its pilot happened
// to exercise, silently inheriting nothing on the axis it did not. The lesson
// recorded at the time was "a PG builder is not the PL builder minus Latin —
// assume nothing carried over, diff the two." This script is that lesson made
// mechanical, so the next marker cannot ship raw whether or not anyone remembers.
//
// It reads the BUILT HTML, not the source. That is the whole point: a marker can
// be correct in every chunk file, correctly indexed, and still never transformed.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.join(import.meta.dirname, '..');
const SITE = path.join(ROOT, 'site');

// Every inline marker in the vocabulary. Grown by attestation, like every other
// list in this repo — add one here the same commit you add it to a builder.
const MARKERS = ['n', 'nt', 'f', 'sic', 'ed', 'var', 'lat', 'cj', 'cn', 'b', 'bid'];
const RAW = new RegExp(`\\[(?:${MARKERS.join('|')}):`, 'g');

// Column anchors are NOT markers and are supposed to survive as text in some
// contexts; they are excluded by the marker list above (they carry no colon).

// WORK PAGES ONLY — site/{pl,pg}/<vol>/<slug>/index.html. Everything else on the
// site is AUTHORED prose that legitimately quotes the marker vocabulary: every
// cruces page discusses its own [sic:]/[ed:]/[var:] decisions by name, and
// /method/ explains the apparatus. Scanning those reports ~700 hits, all correct,
// which would bury the real ones — the first run of this script did exactly that
// and nearly hid the live defect it was written to find.
// A work page is different in kind: its text is GENERATED from the chunks, so a
// marker appearing there is always a transform that did not fire.
function* htmlFiles(dir) {
  for (const series of ['pl', 'pg']) {
    const base = path.join(dir, series);
    if (!fs.existsSync(base)) continue;
    for (const vol of fs.readdirSync(base)) {
      const vdir = path.join(base, vol);
      if (!fs.statSync(vdir).isDirectory()) continue;
      for (const slug of fs.readdirSync(vdir)) {
        const f = path.join(vdir, slug, 'index.html');
        if (fs.existsSync(f)) yield f;
      }
    }
  }
}

let pages = 0, bad = [];
for (const f of htmlFiles(SITE)) {
  pages++;
  const html = fs.readFileSync(f, 'utf8');
  const hits = [...html.matchAll(RAW)];
  if (!hits.length) continue;
  const rel = path.relative(ROOT, f);
  for (const h of hits.slice(0, 3))
    bad.push(`${rel} — ${html.slice(h.index, h.index + 80).replace(/\s+/g, ' ')}…`);
  if (hits.length > 3) bad.push(`${rel} — …and ${hits.length - 3} more`);
}

console.log(`scanned ${pages} built pages for ${MARKERS.length} marker forms`);
if (bad.length) {
  console.error('✗ RAW MARKERS REACHED THE READER — do not deploy:');
  bad.forEach(b => console.error('  ' + b));
  process.exit(1);
}
console.log('✓ no marker rendered as literal bracket text.');
