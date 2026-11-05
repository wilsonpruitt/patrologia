#!/usr/bin/env python3
"""Where each CAPUT head (Latin, in the djvu OCR of the same scan) falls among the Greek lines of text/ (== checked/ line
numbering), by page coordinates: head and Kraken share the 3971x6300 600-dpi frame. Output
translate/moschus-pratum/verify/GREEK-BREAKS.tsv: page, line (1-based; the first real Greek line BELOW the head), drop (the line number of Kraken's garbled read of the
head itself, to delete from the Greek, or blank), caput (as
printed, Latin OCR), y. A head with no Greek line below it on its page (Latin-only chapter, or the Greek resumes on the
next page) gets line 1 of the NEXT page that has Greek. Several heads before the same line collapse to the last.
Line y: text/ lines are matched to Kraken TextLines by their first 10 letters; unmatched lines are interpolated (y is
monotone down a page in reading order). Run from ~/patrologia:  python3 scripts/mp-greek-breaks.py"""
import re, unicodedata as ud
import xml.etree.ElementTree as ET
K = 'raw/kraken/moschus-pratum'; T = 'translate/moschus-pratum'
def key(s): return ''.join(c for c in ud.normalize('NFD', s.lower()) if ud.category(c) in ('Ll', 'Lo'))[:10]
djvu = open('raw/scans/pg087c/copyA_087c_djvu.xml').read().split('<OBJECT ')
heads = {}   # page -> [(y_mid, caput)]
for pdf in range(40, 171):
    for line in re.findall(r'<LINE[^>]*>(.*?)</LINE>', djvu[pdf], re.S):
        ws = re.findall(r'<WORD coords="([^"]+)"[^>]*>([^<]*)</WORD>', line)
        t = ' '.join(w for _, w in ws)
        m = re.match(r'^CAPUT\s+(.*)$', t)
        if m and ws:
            c = list(map(int, ws[0][0].split(',')))
            heads.setdefault(pdf, []).append(((c[1] + c[3]) / 2, m.group(1).strip()))
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
rows = []; carry = []
for pdf in range(40, 171):
    y, lines = line_ys(pdf)
    hs = sorted(heads.get(pdf, []))
    pend = carry; carry = []
    nonblank = [i for i, l in enumerate(lines) if l.strip()]
    if pend and nonblank: rows.append((pdf, nonblank[0] + 1, pend[-1], 'carried', '')); pend = []
    for hy, cap in hs:
        nxt = [i for i in nonblank if y[i] is not None and y[i] > hy - 60]
        drop = ''
        if nxt and y[nxt[0]] < hy + 90 and len(lines[nxt[0]].strip()) <= 24 and \
                (re.search(r'[ΡρPp][ΥυYy][ΤτT]|^[A-Za-zΑ-Ωα-ω]{0,4}\s*[ivxlcIVXLC]+[.!]?$', lines[nxt[0]].strip())
                 or not re.search(r'[α-ωά-ώἀ-ῼ]{4,}', lines[nxt[0]])):      # Kraken's read of the centred Latin head: garbage, dropped
            drop = nxt[0] + 1; nxt = nxt[1:]
        if nxt: rows.append((pdf, nxt[0] + 1, cap, round(hy), drop))
        else: carry.append(cap)
# collapse several heads before one line to the last
out = {}
for pdf, ln, cap, y, dr in rows: out[(pdf, ln)] = (cap, y, dr)
with open(f'{T}/verify/GREEK-BREAKS.tsv', 'w') as o:
    o.write('page\tline\tcaput\ty\tdrop\n')
    for (pdf, ln), (cap, y, dr) in sorted(out.items()): o.write(f'p-{pdf:04d}\t{ln}\t{cap}\t{y}\t{dr}\n')
print(len(out), 'breaks (heads found:', sum(len(v) for v in heads.values()), ')')
