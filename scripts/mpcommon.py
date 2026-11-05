"""Shared helpers for the Moschus Greek scripts (mp-greek-breaks.py, mp-bands.py)."""
import re, unicodedata as ud
import xml.etree.ElementTree as ET
import os
WORK = os.environ.get('MP_WORK', 'moschus-pratum')   # generalised 2026-11-05: MP_WORK=procopius-rhetorica
K = f'raw/kraken/{WORK}'; T = f'translate/{WORK}'
def key(s): return ''.join(c for c in ud.normalize('NFD', s.lower()) if ud.category(c) in ('Ll', 'Lo'))[:10]
def line_ys(pdf):
    p = f'p-{pdf:04d}'
    t = ET.parse(f'{K}/xml/{p}.xml'); ns = t.getroot().tag.split('}')[0][1:]
    ys = {}
    for tl in t.getroot().iter('{%s}TextLine' % ns):
        pts = [tuple(map(int, q.split(','))) for q in tl.find('{%s}Baseline' % ns).get('points').split()]
        u = tl.find('{%s}TextEquiv/{%s}Unicode' % (ns, ns)); s = (u.text or '') if u is not None else ''
        if s.strip(): ys.setdefault(key(s), []).append(sum(q[1] for q in pts) / len(pts))
    lines = open(f'{K}/text/{p}.txt').read().split('\n')
    y = [None] * len(lines)
    for i, l in enumerate(lines):
        if l.strip() and key(l) in ys: y[i] = ys[key(l)][0]
    # interpolate: unmatched lines between matched neighbours; enforce monotone
    last = None
    for i in range(len(y)):
        if y[i] is not None:
            if last is not None and y[i] < y[last]: y[i] = None; continue
            last = i
    known = [i for i, v in enumerate(y) if v is not None]
    for i in range(len(y)):
        if y[i] is None and lines[i].strip():
            a = max((k for k in known if k < i), default=None); b = min((k for k in known if k > i), default=None)
            if a is not None and b is not None: y[i] = y[a] + (y[b] - y[a]) * (i - a) / (b - a)
            elif a is not None: y[i] = y[a] + 91 * (i - a)
            elif b is not None: y[i] = y[b] - 91 * (b - i)
    return y, lines
