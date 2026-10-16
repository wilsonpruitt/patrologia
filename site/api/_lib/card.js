// Phase E2: the 1200x630 quote card, as a satori element tree (no JSX, no build step).
// Palette is the approved one: vert #1E3B2C, dorure #C3A343, papier #F2EAD8.
const VERT = '#1E3B2C', DORURE = '#C3A343', PAPIER = '#F2EAD8';

export const clip = (s, n) => {
  if (s.length <= n) return s;
  const cut = s.slice(0, n).replace(/\s+\S*$/, '');
  return cut.replace(/[\s,;:.\-–—]+$/, '') + '…';
};

const h = (type, style, children) => ({ type, props: { style: { display: 'flex', ...style }, children } });

export function cardTree({ english, source, author, work, cite, col, greek }) {
  const q = clip(english, 280);
  const size = q.length <= 110 ? 54 : q.length <= 190 ? 44 : 36;
  const srcFont = greek ? 'Theano Didot' : 'EB Garamond';
  const cl = [author, work].filter(Boolean).join(' · ');
  const cit = [cite.replace(/,.*$/, ''), col].filter(Boolean).join(', ');
  return h('div', { width: 1200, height: 630, background: PAPIER, flexDirection: 'column', fontFamily: 'EB Garamond', color: VERT, border: `10px solid ${VERT}` }, [
    h('div', { height: 70, background: VERT, color: PAPIER, alignItems: 'center', justifyContent: 'space-between', padding: '0 44px', fontSize: 26, letterSpacing: 3 },
      [h('div', {}, 'MIGNE.APP'), h('div', { color: DORURE }, 'PATROLOGIA, IN ENGLISH')]),
    h('div', { flex: 1, flexDirection: 'column', justifyContent: 'center', padding: '0 64px', gap: 22 }, [
      h('div', { fontSize: size, lineHeight: 1.28 }, `“${q}”`),
      source ? h('div', { fontSize: 24, lineHeight: 1.3, fontStyle: greek ? 'normal' : 'italic', fontFamily: srcFont, color: '#5b6b60', borderLeft: `4px solid ${DORURE}`, paddingLeft: 18 }, clip(source, 150)) : null,
    ].filter(Boolean)),
    h('div', { height: 92, borderTop: `3px solid ${DORURE}`, padding: '0 44px', alignItems: 'center', justifyContent: 'space-between', fontSize: 28 }, [
      h('div', { flexDirection: 'column' }, [h('div', { fontWeight: 400 }, cl), h('div', { fontSize: 22, fontStyle: 'italic', color: '#5b6b60' }, cit)]),
      h('div', { fontSize: 18, color: '#5b6b60', textAlign: 'right', flexDirection: 'column', alignItems: 'flex-end' }, [h('div', {}, 'English © Wilson Pruitt'), h('div', {}, 'CC BY-NC 4.0 · migne.app/rights')]),
    ]),
  ]);
}
