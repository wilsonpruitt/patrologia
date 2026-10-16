// GET /q/img/<series>/<vol>/<slug>/<ref>.png -> 1200x630 card
import { ImageResponse } from '@vercel/og';
import { route, resolve } from './_lib/resolve.js';
import { cardTree } from './_lib/card.js';
import { fonts } from './_lib/fonts.js';

// Preview deployments sit behind Deployment Protection; pass the caller's bypass credentials on the self-fetch.
const bypass = r => Object.fromEntries(['cookie', 'x-vercel-protection-bypass'].map(k => [k, r.headers.get(k)]).filter(([, v]) => v));

export default {
  async fetch(request) {
    const u = new URL(request.url);
    const rt = route(u.searchParams.get('series'), u.searchParams.get('vol'), u.searchParams.get('slug'), u.searchParams.get('ref'));
    const q = await resolve(rt, async p => { const r = await fetch(u.origin + p, { headers: bypass(request) }); return r.ok ? r.text() : null; });
    if (!q) return new Response('not found', { status: 404 });
    const res = new ImageResponse(cardTree(q), { width: 1200, height: 630, fonts: await fonts() });
    res.headers.set('cache-control', 'public, s-maxage=31536000, immutable');
    return res;
  },
};
