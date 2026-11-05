#!/usr/bin/env python3
"""Dropped-line check for a Kraken work: Greek lines Kraken segmented (xml/) that never reached text/.

Run BEFORE chunking any kt-method work (the Moschus lesson: three chapter openings were lost this way).

    python3 scripts/kt-lost.py <work> [first_page last_page]

Prints every Greek-looking xml line whose middle 12 base letters are absent from that page's text/.
Lines inside a footnote region are tagged FOOT; those are usually Migne's notes, but a body line
misclassed as footnote shows up as FOOT with a wide line pitch (>= 84 px to its nearest neighbour in
the same column), so FOOT lines are pitch-tested and only the wide ones are kept as "FOOT?".
Every candidate still has to be read on the page image before it goes into text/ (record it in
translate/<work>/RESTORED-LINES.tsv, then re-run kt-rules.py).
⚠ BLIND SPOT: a line Kraken never SEGMENTED is in neither xml/ nor text/, so this check cannot see it (Sophronius
p-0240 δωρούμενον, a one-word last line, 2026-11-05; caught by the translator from the sense). Translator `doubt`
rows that say "a line seems lost" are therefore always image-checked. KT_LOST_MIN=3 lowers the 8-letter floor.
Promoted from the Moschus session's scratch lost.py + pitch.py, 2026-11-05.
"""
import json, os, re, sys, unicodedata as ud
from pathlib import Path

W = Path(__file__).resolve().parent.parent / 'raw' / 'kraken' / sys.argv[1]
R = json.load(open(W / 'regions.json'))
pages = sorted(int(p.stem[2:]) for p in (W / 'text').glob('p-*.txt'))
if len(sys.argv) > 3:
    lo, hi = int(sys.argv[2]), int(sys.argv[3])
    pages = [p for p in pages if lo <= p <= hi]

LINE = re.compile(r'<TextLine[^>]*>\s*<Coords points="([^"]+)"/>(.*?)</TextLine>', re.S)


def base(s):
    return ''.join(c for c in ud.normalize('NFD', s.lower()) if 'α' <= c <= 'ω')


def greekish(t):
    g = sum(1 for c in t if 'Ͱ' <= c <= 'Ͽ' or 'ἀ' <= c <= '῿')
    l = sum(1 for c in t if c.isalpha())
    return l >= int(os.environ.get('KT_LOST_MIN', 8)) and g / l > 0.8


def xml_lines(k):
    out = []
    for m in LINE.finditer(open(W / 'xml' / f'{k}.xml').read()):
        pts = [tuple(map(int, q.split(','))) for q in m.group(1).split()]
        t = re.findall(r'<Unicode>(.*?)</Unicode>', m.group(2))
        t = ud.normalize('NFC', t[-1].strip()) if t else ''
        xs, ys = [a for a, _ in pts], [b for _, b in pts]
        out.append((min(xs), min(ys), max(xs), max(ys), sum(xs) / len(xs), sum(ys) / len(ys), t))
    return out


def pitch(L, me):
    x1, y1, x2 = me[0], me[1], me[2]
    gaps = [abs(l[1] - y1) for l in L if l is not me and min(x2, l[2]) - max(x1, l[0]) > 0.5 * (x2 - x1)
            and 0 < abs(l[1] - y1) < 200]
    return min(gaps) if gaps else 999


body, foot_wide, foot_n = [], [], 0
for p in pages:
    k = f'p-{p:04d}'
    foot = [b['box'] for b in R.get(k, []) if b['class'] in ('Marginalia_Footnote', 'Marginalia')]
    have = base(open(W / 'text' / f'{k}.txt').read().replace('-\n', ''))
    L = xml_lines(k)
    for ln in L:
        t = ln[6]
        if not greekish(t):
            continue
        b = base(t)
        if len(b) < 12 or b[len(b) // 4:len(b) // 4 + 12] in have:
            continue
        infoot = any(f[0] <= ln[4] <= f[2] and f[1] <= ln[5] <= f[3] for f in foot)
        if not infoot:
            body.append((p, int(ln[5]), t))
        else:
            foot_n += 1
            g = pitch(L, ln)
            if g >= 84:
                foot_wide.append((p, int(ln[5]), g, t))

print(f'{W.name}: {len(pages)} pages; {len(body)} body lines lost; '
      f'{foot_n} footnote-region lines lost, {len(foot_wide)} of them at body pitch (FOOT?)')
for p, y, t in body:
    print(f'p-{p:04d}  y={y:5d}  BODY  {t}')
for p, y, g, t in foot_wide:
    print(f'p-{p:04d}  y={y:5d}  FOOT? pitch={g}  {t}')
