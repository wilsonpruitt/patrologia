// GET /q/<series>/<vol>/<slug>/<ref>  (rewritten here by vercel.json)
// Crawlers get og:* tags and ignore the refresh; people are sent to the passage on the work page.
import { route, resolve } from './_lib/resolve.js';
import { clip } from './_lib/card.js';

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

export function renderHtml(origin, rt, q) {
  const title = `${q.author}, ${q.work} (${q.cite.replace(/,.*$/, '')}${q.col ? ', ' + q.col : ''})`;
  const desc = clip(q.english, 280);
  const img = `${origin}/q/img/${rt.series}/${rt.vol}/${rt.slug}/${rt.ref}.png`;
  const url = `${origin}/q/${rt.series}/${rt.vol}/${rt.slug}/${rt.ref}`;
  const go = `${origin}${q.target}`;
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>${esc(title)} · Migne</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<link rel="canonical" href="${esc(url)}">
<meta property="og:type" content="article"><meta property="og:site_name" content="Migne · migne.app">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${esc(url)}"><meta property="og:image" content="${esc(img)}">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}"><meta name="twitter:image" content="${esc(img)}">
<meta http-equiv="refresh" content="0;url=${esc(go)}">
<script>location.replace(${JSON.stringify(go)});</script>
</head><body><p><a href="${esc(go)}">${esc(title)}</a></p></body></html>`;
}

// Preview deployments sit behind Deployment Protection; pass the caller's bypass credentials on the self-fetch.
const bypass = r => Object.fromEntries(['cookie', 'x-vercel-protection-bypass'].map(k => [k, r.headers.get(k)]).filter(([, v]) => v));

export default {
  async fetch(request) {
    const u = new URL(request.url);
    const rt = route(u.searchParams.get('series'), u.searchParams.get('vol'), u.searchParams.get('slug'), u.searchParams.get('ref'));
    const q = await resolve(rt, async p => { const r = await fetch(u.origin + p, { headers: bypass(request) }); return r.ok ? r.text() : null; });
    if (!q) return new Response(null, { status: 302, headers: { Location: '/' } });
    return new Response(renderHtml(u.origin, rt, q), { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'public, s-maxage=86400, stale-while-revalidate=604800' } });
  },
};
