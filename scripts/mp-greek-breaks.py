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
import sys, os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from mpcommon import K, T, key, line_ys
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
# Kraken's garbled heads in the Greek (CAPUT read as ΣΑΡΥΤ …) are heads too: a break at the next real line, if the djvu OCR missed it
GARB = re.compile(r'[ΡρPp][ΥυYy][ΤτT]')
have = {(r[0], r[1]) for r in rows}
for pdf in range(40, 171):
    lines = open(f'{K}/checked/p-{pdf:04d}.txt').read().split('\n')
    for i, l in enumerate(lines):
        t = l.strip()
        if len(t) <= 24 and GARB.search(t) and not re.search(r'[α-ωά-ώἀ-ῼ]{4,}', t.replace('υ', '')):
            j = next((k for k in range(i + 1, len(lines)) if lines[k].strip()), None)
            if j is not None and (pdf, j + 1) not in have and not any(r[4] == i + 1 and r[0] == pdf for r in rows):
                rows.append((pdf, j + 1, '(garbled head)', 'kraken', i + 1)); have.add((pdf, j + 1))
# collapse several heads before one line to the last
out = {}
for pdf, ln, cap, y, dr in rows: out[(pdf, ln)] = (cap, y, dr)
with open(f'{T}/verify/GREEK-BREAKS.tsv', 'w') as o:
    o.write('page\tline\tcaput\ty\tdrop\n')
    for (pdf, ln), (cap, y, dr) in sorted(out.items()): o.write(f'p-{pdf:04d}\t{ln}\t{cap}\t{y}\t{dr}\n')
print(len(out), 'breaks (heads found:', sum(len(v) for v in heads.values()), ')')
