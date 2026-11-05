#!/usr/bin/env python3
"""Band letters (Migne's marginal A-D, one per quarter column) for the Moschus Greek, and the glued copies to strip.
Kraken fused the gutter letters into Greek lines (`Αλέγουσι`, `ΒΔιηγήσατο` leading on Greek-right pages; ` Α` trailing on
Greek-left pages) and the archive.org OCR (djvu) reads some of them as words in the gutter. Neither read is complete, so:
  1. letters seen in the djvu gutter (x between the columns' inner edges) give (rank, y);
  2. a page's four bands are y_k = a + k*d: fitted to the letters seen (>=2 distinct ranks), else a = top of text,
     d = the median over fitted pages (flagged `fit` / `default`);
  3. each band falls on the Greek line nearest its y (within one line pitch);
  4. a glued letter on a Greek line is STRIPPED when it is mixed-script (Latin A-D before Greek), or trailing ` X`, or, for a
     Greek look-alike, when the rest of the word occurs elsewhere in the work and the whole word occurs only here.
Writes translate/moschus-pratum/verify/GREEK-BANDS.tsv (page, line, letter, how, strip_from, strip_to) and
GREEK-BANDS-REVIEW.tsv (glued letters left alone because the evidence did not decide). Run from ~/patrologia."""
import csv, json, os, re, statistics, sys, unicodedata as ud
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from mpcommon import K, T, line_ys
import os
PAGES = range(int(os.environ.get('MP_FIRST', 40)), int(os.environ.get('MP_LAST', 170)) + 1)   # MP_FIRST/MP_LAST override (Procopius 11–35)
djvu = open('raw/scans/pg087c/copyA_087c_djvu.xml').read().split('<OBJECT ')
regs = json.load(open(f'{K}/regions.json'))
cmap = {p['pdfPage']: p for p in json.load(open('data/pg-column-maps/pg087c.json'))['pages']}
def base(x): return ''.join(c for c in ud.normalize('NFD', x.lower()) if ud.category(c) in ('Ll', 'Lo'))
freq = {}
for n in PAGES:
    for l in open(f'{K}/checked/p-{n:04d}.txt').read().split('\n'):
        for w in l.split(): freq[base(w)] = freq.get(base(w), 0) + 1
RANK = {'A': 0, 'B': 1, 'C': 2, 'D': 3}
LOOK = {'Α': 'A', 'Β': 'B', 'Γ': 'C', 'Δ': 'D', 'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D', 'Ϲ': 'C'}
LATIN = set('ABCD')
def gutter_letters(pdf):
    mains = [r['box'] for r in regs[f'p-{pdf:04d}'] if r['class'].startswith('MainText') and r['box'][2] - r['box'][0] < 2200]
    left = [b for b in mains if (b[0] + b[2]) / 2 < 1985]; right = [b for b in mains if (b[0] + b[2]) / 2 >= 1985]
    if not left or not right: return [], None
    lo, hi = max(b[2] for b in left) - 60, min(b[0] for b in right) + 60
    out = []
    for line in re.findall(r'<LINE[^>]*>(.*?)</LINE>', djvu[pdf], re.S):
        for c, w in re.findall(r'<WORD coords="([^"]+)"[^>]*>([^<]*)</WORD>', line):
            x1, y2, x2, y1 = map(int, c.split(',')[:4]); w = w.strip()
            if w in RANK and lo <= (x1 + x2) / 2 <= hi and (x2 - x1) < 140: out.append((RANK[w], (y1 + y2) / 2))
    top = min(b[1] for b in mains)
    return out, top
pages = {}
for pdf in PAGES:
    seen, top = gutter_letters(pdf)
    pages[pdf] = (seen, top)
ds = []
for pdf, (seen, top) in pages.items():
    d = {}
    for r, y in seen: d.setdefault(r, y)
    ks = sorted(d)
    if len(ks) >= 3 and (d[ks[-1]] - d[ks[0]]) / (ks[-1] - ks[0]) > 1200: ds.append((d[ks[-1]] - d[ks[0]]) / (ks[-1] - ks[0]))
D0 = statistics.median(ds)
bands, review, nfit = [], [], {'fit': 0, 'default': 0, 'none': 0}
for pdf in PAGES:
    seen, top = pages[pdf]
    if top is None: nfit['none'] += 1; continue
    d = {}
    for r, y in seen: d.setdefault(r, y)
    ks = sorted(d)
    if len(ks) >= 2 and (d[ks[-1]] - d[ks[0]]) / (ks[-1] - ks[0]) > 1200:
        dd = (d[ks[-1]] - d[ks[0]]) / (ks[-1] - ks[0]); a = d[ks[0]] - ks[0] * dd; how = 'fit'
        # keep the letters actually seen exact where they agree with the fit
    else:
        dd = D0; a = (d[ks[0]] - ks[0] * dd) if ks else top + 40; how = 'default' if not ks else 'default-from-1'
    nfit['fit' if how == 'fit' else 'default'] += 1
    y, lines = line_ys(pdf)
    side = cmap[pdf]['greekSide']
    pitch = 91
    for k in range(4):
        yk = a + k * dd
        cand = [(abs(y[i] - yk), i) for i in range(len(lines)) if lines[i].strip() and y[i] is not None]
        if not cand: continue
        dist, i = min(cand)
        if dist > pitch * 0.75: continue            # the band letter falls beside the Latin column / a head, not a Greek line
        bands.append([pdf, i + 1, 'ABCD'[k], how + ('' if k in d else '+inferred'), '', ''])
# strip glued letters (on any line: the band may sit a line off)
bl = {(b[0], b[1]): b for b in bands}
for pdf in PAGES:
    side = cmap[pdf]['greekSide']; lines = open(f'{K}/checked/p-{pdf:04d}.txt').read().split('\n')
    for i, l in enumerate(lines):
        t = l.strip()
        if not t: continue
        new = None; ch = None
        m = re.search(r'\s([ΑΒΓΔABCD])$', t)                      # a lone capital letter at either end is never a word
        m2 = re.match(r'^([ΑΒΓΔABCD])\s+(?=\S)', t)
        if m: ch, new = m.group(1), t[:m.start()]
        elif m2: ch, new = m2.group(1), t[m2.end():]
        else:
            m = re.match(r'^([ΑΒΓΔABCD])(?=\S)', t)
            if m:
                ch, rest = m.group(1), t[1:]
                w0, r0 = t.split()[0], rest.split()[0]
                if ch in LATIN and re.match(r'[Α-Ωα-ώἀ-ῼ]', rest):          # mixed script: never a word
                    new = rest
                else:
                    fw, fr = freq.get(base(w0), 0), freq.get(base(r0), 0)
                    near = any(bl.get((pdf, i + 1 + d_)) and bl[(pdf, i + 1 + d_)][2] == LOOK[ch] for d_ in (-1, 0, 1))
                    if fr > 0 and (fr >= 3 * fw or (near and fr >= fw)): new = rest
                    else: review.append([f'p-{pdf:04d}', i + 1, ch, w0, fw, r0, fr])
        if new is not None:
            b = bl.get((pdf, i + 1))
            if b is None:                                      # a glued letter on a line the fit missed: the letter is the evidence
                b = [pdf, i + 1, LOOK[ch], 'kraken-glued', '', '']; bands.append(b); bl[(pdf, i + 1)] = b
            elif b[2] != LOOK[ch]: b[3] += f'; glued letter {LOOK[ch]} differs'
            b[4], b[5] = t, new
bands.sort()
with open(f'{T}/verify/GREEK-BANDS.tsv', 'w') as o:
    o.write('page\tline\tletter\thow\tstrip_from\tstrip_to\n')
    for pdf, ln, let, how, a_, b_ in bands: o.write(f'p-{pdf:04d}\t{ln}\t{let}\t{how}\t{a_}\t{b_}\n')
with open(f'{T}/verify/GREEK-BANDS-REVIEW.tsv', 'w') as o:
    o.write('page\tline\tglued\tword\tword_freq\trest\trest_freq\n')
    for r in review: o.write('\t'.join(map(str, r)) + '\n')
print('pages', nfit, '| d0', round(D0), '| bands', len(bands), '| stripped', sum(1 for b in bands if b[4]), '| review', len(review))
