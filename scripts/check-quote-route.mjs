#!/usr/bin/env node
// Phase E2 gate: the share-card function must answer for a real passage on a PL page and a PG page.
// Runs the two handlers (site/api/q.js, qimg.js) in-process against the BUILT pages on disk, with
// fetch() stubbed to read site/. This proves the extractor, the og:* tags and the PNG render; it
// does NOT prove Vercel bundling or the /q/ rewrites (that needs a preview deploy: see V2-PLAN E2).
import fs from 'node:fs';
import path from 'node:path';
import { segments } from '../site/api/_lib/extract.js';

const SITE = path.join(import.meta.dirname, '..', 'site');
const ORIGIN = 'https://migne.test';
const realFetch = globalThis.fetch;
globalThis.fetch = async (url, ...rest) => {
  const u = new URL(url);
  if (u.origin !== ORIGIN) return realFetch(url, ...rest);
  const f = path.join(SITE, u.pathname, 'index.html');
  return fs.existsSync(f) ? new Response(fs.readFileSync(f, 'utf8')) : new Response('', { status: 404 });
};
const q = (await import('../site/api/q.js')).default;
const img = (await import('../site/api/qimg.js')).default;

const samples = [['pl', '139', 'canones'], ['pg', '155', 'de-sacramentis']];
const fail = m => { console.error('quote route: ' + m); process.exit(1); };
for (const [series, vol, slug] of samples) {
  const html = fs.readFileSync(path.join(SITE, series, vol, slug, 'index.html'), 'utf8');
  const seg = segments(html).src.find(s => s.text.trim().length > 40);
  if (!seg) fail(`${series}/${vol}/${slug}: no sentence segments found`);
  const ref = `${seg.p}.${seg.ids[0]}`;
  const qs = `series=${series}&vol=${vol}&slug=${slug}&ref=${ref}`;
  const r = await q.fetch(new Request(`${ORIGIN}/api/q?${qs}`));
  const body = await r.text();
  for (const need of ['og:title', 'og:description', 'og:image', 'twitter:card', 'http-equiv="refresh"'])
    if (!body.includes(need)) fail(`${series}/${vol}/${slug}/${ref}: missing ${need}`);
  if (/⟦|\[n:|\[ed:/.test(body)) fail(`${series}/${vol}/${slug}/${ref}: raw marker leaked into the card text`);
  const png = await img.fetch(new Request(`${ORIGIN}/api/qimg?${qs}`));
  const buf = Buffer.from(await png.arrayBuffer());
  if (png.status !== 200 || buf.subarray(1, 4).toString() !== 'PNG') fail(`${series}/${vol}/${slug}/${ref}: card is not a PNG (status ${png.status})`);
}
console.log('2 passages answered: og tags present, PNG renders (PL + PG)');
