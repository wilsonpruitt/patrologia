#!/usr/bin/env python3
"""Translation-as-plate-check scaffolds (the FitzRalph method, piloted on Dorotheus 2026-10-27).

The translator gets the RAW Kraken Greek (htr/QUEUE.md output), line-tagged, with the facing Latin column
of the same page (archive.org copyA OCR) as a witness, and reports every place the Greek is not what
the plate must say. Those reports replace the blind read + every-line check of scripts/pg-plate-api.py.

  python3 scripts/kt-scaffold.py <work> <chunk-id> <first p-NNNN:line> <last p-NNNN:line>
      e.g. dorotheus-doctrinae dd-001 p-0839:7 p-0843:4   ->  translate/<work>/<chunk-id>.md
  python3 scripts/kt-scaffold.py <work> brief <chunk-id> …  ->  translate/<work>/_briefs/<first>_<last>.md

Tags are pNNNN.LL = Kraken page file + line number in raw/kraken/<work>/text/p-NNNN.txt.
"""
import json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, '..')
WORKS = {  # work -> (column map, copyA djvu xml)
    'dorotheus-doctrinae': ('data/pg-column-maps/pg088.json', 'raw/scans/pg088/copyA_088_djvu.xml'),
}

SRC = 'text'
if '--checked' in sys.argv: sys.argv.remove('--checked'); SRC = 'checked'   # plate-checked Greek (pg-plate-api.py) where it exists
work = sys.argv[1]
OUT = os.path.join(ROOT, 'translate', work)
os.makedirs(OUT, exist_ok=True)

if sys.argv[2] == 'brief':
    ks = sys.argv[3:]
    os.makedirs(f'{OUT}/_briefs', exist_ok=True)
    out = f'{OUT}/_briefs/{ks[0]}_{ks[-1].split("-")[-1]}.md'
    card = os.environ.get('KT_CARD', 'CARD.md')
    parts = [open(f'{OUT}/{card}').read()]
    for extra in ('GLOSSARY.md', 'MISREADS.md'):
        if os.path.exists(f'{OUT}/{extra}'): parts.append(open(f'{OUT}/{extra}').read())
    for k in ks: parts.append(f'# SCAFFOLD {k} (write: ~/patrologia/translate/{work}/{k}.en.md)\n\n' + open(f'{OUT}/{k}.md').read())
    open(out, 'w').write('\n\n---\n\n'.join(parts))
    print(out, sum(len(p.split()) for p in parts), 'words')
    sys.exit()

cid, first, last = sys.argv[2:5]
cmap_path, xml_path = WORKS[work]
_m = json.load(open(os.path.join(ROOT, cmap_path)))
cmap = {p['pdfPage']: p for p in _m['pages']}
DOUBTS = [l.rstrip('\n').split('\t') for l in open(os.path.join(ROOT, 'raw/kraken', work, 'checked', 'DOUBTS.tsv'))][1:] if SRC == 'checked' else []
SKIP = {l + 1 for l in _m.get('duplicateLeaves', [])}   # re-scanned duplicate leaves: pdf page = leaf + 1, never in the queue
regions = json.load(open(os.path.join(ROOT, 'raw/kraken', work, 'regions.json')))
xml = open(os.path.join(ROOT, xml_path)).read().split('<OBJECT ')   # xml[k] = djvu page k (1-based) = pdf page k

def latin(pdf):
    """Words of copyA's page whose centre falls in a Kraken MainText_ColLatin box, in reading order."""
    boxes = [r['box'] for r in regions.get(f'p-{pdf:04d}', []) if r['class'] == 'MainText_ColLatin']
    out = []
    for line in re.findall(r'<LINE[^>]*>(.*?)</LINE>', xml[pdf], re.S):
        ws = []
        for c, w in re.findall(r'<WORD coords="([^"]+)"[^>]*>([^<]*)</WORD>', line):
            x1, y2, x2, y1 = map(int, c.split(',')[:4])
            cx, cy = (x1 + x2) / 2, (y1 + y2) / 2
            if any(b[0] <= cx <= b[2] and b[1] <= cy <= b[3] for b in boxes): ws.append(w)
        if ws: out.append(' '.join(ws))
    return '\n'.join(out)

(fp, fl), (lp, ll) = [(int(s.split(':')[0][2:]), int(s.split(':')[1])) for s in (first, last)]
parts, words = [], 0
for pdf in range(fp, lp + 1):
    f = os.path.join(ROOT, 'raw/kraken', work, SRC, f'p-{pdf:04d}.txt')
    if not os.path.exists(f):
        if pdf in SKIP: continue
        sys.exit(f'missing {f}')
    lines = open(f).read().split('\n')
    a = fl if pdf == fp else 1
    b = ll if pdf == lp else len(lines)
    m = cmap[pdf]
    gcol = m['colRight'] if m['greekSide'] == 'right' else m['colLeft']
    lcol = m['colLeft'] if m['greekSide'] == 'right' else m['colRight']
    body = [f'p{pdf:04d}.{i:02d} | {lines[i-1]}' for i in range(a, b + 1) if lines[i - 1].strip()]
    words += sum(len(lines[i - 1].split()) for i in range(a, b + 1))
    note = '' if (a == 1 and b == len(lines)) else f' · lines {a}–{b} only'
    dz = [d for d in DOUBTS if d[0] == f'p-{pdf:04d}' and a <= int(d[1]) <= b]
    dtxt = ('\nOpen doubts from the plate check on this page (settle where the English depends on it; log in the OCR table):\n' +
            '\n'.join(f'- p{pdf:04d}.{int(d[1]):02d}: kept `{d[3]}` (blind read `{d[2]}`): {d[5] if len(d) > 5 else ""}' for d in dz) + '\n') if dz else ''
    parts.append(f'## p-{pdf:04d} · Greek col {gcol} · Latin col {lcol}{note}\n\n```\n' + '\n'.join(body) +
                 f'\n```\n\nLatin column {lcol} (whole page, archive.org OCR — a witness, not a source):\n\n> ' +
                 latin(pdf).replace('\n', '\n> ') + '\n' + dtxt)
head = f'chunk: {cid}\nwork: {work}\nsource: {SRC}\nrange: {first} – {last}\ngreek_words: {words}\n\n'
open(f'{OUT}/{cid}.md', 'w').write(head + '\n'.join(parts))
print(f'{OUT}/{cid}.md', words, 'Greek words')
