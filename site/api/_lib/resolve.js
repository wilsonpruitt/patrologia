// URL -> work page. /q/<series>/<vol>/<slug>/<chunk.para.s1-s2>; slug is a built directory name.
import { passage, pageInfo, parseRef } from './extract.js';

export const route = (series, vol, slug, ref) =>
  /^(pl|pg)$/.test(series) && /^\d{1,3}$/.test(vol) && /^[a-z0-9-]{1,120}$/.test(slug) && parseRef(ref)
    ? { series, vol, slug, ref, path: `/${series}/${vol}/${slug}/` } : null;

// getHtml(path) -> page HTML or null. Returns everything both handlers need, or null.
export async function resolve(rt, getHtml) {
  if (!rt) return null;
  const html = await getHtml(rt.path);
  if (!html) return null;
  const ps = passage(html, rt.ref);
  if (!ps) return null;
  const info = pageInfo(html);
  const w = s => s.split(/\s+/);
  const from = w(ps.english).slice(0, 5).join(' '), to = w(ps.english).slice(-5).join(' ');
  const enc = s => encodeURIComponent(s).replace(/-/g, '%2D');
  const frag = ps.english.split(/\s+/).length <= 10 ? enc(ps.english) : `${enc(from)},${enc(to)}`;
  const anchor = ps.col ? `#c${ps.col.toLowerCase()}` : '#';
  return { ...info, ...ps, greek: rt.series === 'pg', target: `${rt.path}${anchor === '#' ? '#' : anchor}:~:text=${frag}` };
}
