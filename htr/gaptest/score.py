"""Score Kraken PAGE-XML output against our PG 88 plate transcriptions.

    score.py <pdfPage> [--dump]

Kraken lines are kept when mostly Greek script, ordered top to bottom (one
Greek column plus full-width Greek lines, so y-order is reading order), then
dehyphenated and NFC-normalized. Truth is the batch2-final leaf (leaf = pdfPage
- 1) cut at its first report header, band markers stripped.
"""
import re, sys, unicodedata, xml.etree.ElementTree as ET
from pathlib import Path
from rapidfuzz.distance import Levenshtein

HERE = Path(__file__).parent
PG88 = Path.home() / 'patrologia/raw/pg088'
NS = {'p': 'http://schema.primaresearch.org/PAGE/gts/pagecontent/2019-07-15'}


def is_greek(c):
    return 'Ͱ' <= c <= 'Ͽ' or 'ἀ' <= c <= '῿'


def norm(s):
    s = unicodedata.normalize('NFC', s)
    for a in '’᾽ʼ´΄':  # apostrophe/elision forms
        s = s.replace(a, "'")
    return re.sub(r'\s+', ' ', s).strip()


def join_lines(lines):
    out = ''
    for l in lines:
        l = l.strip()
        if out.endswith('-'):
            out = out[:-1] + l
        else:
            out = (out + ' ' + l) if out else l
    return out


def greek_side(page):
    import json
    for m in ('batch2-pages/manifest.json', 'epistolae/manifest.json'):
        man = json.loads((PG88 / m).read_text())
        if str(page - 1) in man:
            return man[str(page - 1)]['greekSide']


def ocr_lines(page):
    root = ET.parse(HERE / f'out/p-{page:04d}.xml').getroot()
    ns = {'p': root.tag.split('}')[0][1:]}
    pg = root.find('p:Page', ns)
    W, H = int(pg.get('imageWidth')), int(pg.get('imageHeight'))
    side = greek_side(page)
    lines = []
    for tl in root.iter(f'{{{ns["p"]}}}TextLine'):
        u = tl.find('p:TextEquiv/p:Unicode', ns)  # line-level, not word/glyph
        text = (u.text or '') if u is not None else ''
        letters = [c for c in text if c.isalpha()]
        if not letters or sum(map(is_greek, letters)) / len(letters) < 0.5:
            continue
        pts = [tuple(map(int, p.split(','))) for p in tl.find('p:Baseline', ns).get('points').split()]
        y, x0, x1 = min(y for _, y in pts), min(x for x, _ in pts), max(x for x, _ in pts)
        if y < 0.06 * H:  # running head band
            continue
        full = (x1 - x0) > 0.6 * W
        if not full and (x1 < 0.55 * W if side == 'right' else x0 > 0.45 * W):
            continue  # opposite (Latin) column, gutter letters
        lines.append((y, x0, x1, text, tl.get('id')))
    return sorted(lines)


def truth(page):
    text = (PG88 / f'batch2-final/leaf{page - 1}.txt').read_text()
    body = re.split(r'^[A-Z][A-Z-]+:\s*$', text, flags=re.M)[0]
    body = re.sub(r'\[[A-D]\]', ' ', body)
    return norm(join_lines(body.splitlines()))


if __name__ == '__main__':
    page = int(sys.argv[1])
    lines = ocr_lines(page)
    hyp = norm(join_lines([l[3] for l in lines]))
    ref = truth(page)
    d = Levenshtein.distance(ref, hyp)
    print(f'page {page}: lines {len(lines)} ref {len(ref)} hyp {len(hyp)} edits {d} CER {d / len(ref):.2%}')
    if '--dump' in sys.argv:
        print('REF', ref[:400]); print('HYP', hyp[:400])


def diffs(page, ctx=12):
    lines = ocr_lines(page)
    hyp = norm(join_lines([l[3] for l in lines]))
    ref = truth(page)
    out = []
    for op in Levenshtein.opcodes(ref, hyp):
        if op.tag != 'equal':
            out.append((op.tag, ref[max(0, op.src_start - ctx):op.src_end + ctx],
                        ref[op.src_start:op.src_end], hyp[op.dest_start:op.dest_end], op.dest_start))
    return out
