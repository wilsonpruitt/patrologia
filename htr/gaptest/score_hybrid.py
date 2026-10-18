"""Hybrid layout: whole-page Kraken reading, filtered glyph by glyph through
Calfa's Greek-block boxes.

    score_hybrid.py [--rescue]

Whole-page segmentation reads lines well; its errors are things that don't
belong (Latin across the gutter, band letters, running heads). The region
model knows where the Greek is. Keep each glyph whose centre falls inside a
MainText_ColGreek/Title box. --rescue also keeps Greek-script glyphs outside
every box when their line is otherwise kept and >=80% Greek (full-width Greek
lines the region model labelled Latin, PG 88 p. 864).
"""
import json, sys, xml.etree.ElementTree as ET
from pathlib import Path
from rapidfuzz.distance import Levenshtein
import score, review

HERE = Path(__file__).parent
blocks = json.loads((HERE / 'layout/blocks.json').read_text())
RESCUE = '--rescue' in sys.argv
FALLBACK = '--fallback' in sys.argv
regions = json.loads((HERE / 'layout/regions-all.json').read_text())
NOT_GREEK = {'MainText_ColLatin', 'Running', 'Marginalia', 'Marginalia_Footnote', 'Marginalia_PageNumber', 'Marginalia_ParagraphNumber'}


def inside(x, y, boxes):
    return any(b[0] <= x <= b[2] and b[1] <= y <= b[3] for b in boxes)


def page_lines(p):
    boxes = [b['box'] for b in blocks[str(p)]]
    other = [r['box'] for r in regions[str(p)] if r['class'] in NOT_GREEK]
    root = ET.parse(HERE / f'out/p-{p:04d}.xml').getroot()
    ns = {'p': root.tag.split('}')[0][1:]}
    lines = []
    for tl in root.iter(f'{{{ns["p"]}}}TextLine'):
        glyphs = []
        for g in tl.iter(f'{{{ns["p"]}}}Glyph'):
            pts = [tuple(map(int, q.split(','))) for q in g.find('p:Coords', ns).get('points').split()]
            cx, cy = sum(q[0] for q in pts) / len(pts), sum(q[1] for q in pts) / len(pts)
            ch = g.find('p:TextEquiv/p:Unicode', ns).text or ''
            glyphs.append((ch, inside(cx, cy, boxes), inside(cx, cy, boxes + other)))
        if not glyphs:
            continue
        letters = [c for c, _, _ in glyphs if c.isalpha()]
        greek = sum(map(score.is_greek, letters)) / max(1, len(letters))
        kept = [c for c, k, claimed in glyphs if k
                or (RESCUE and greek >= 0.8 and any(g[1] for g in glyphs) and (score.is_greek(c) or not c.isalpha()))
                or (FALLBACK and greek >= 0.8 and not claimed)]  # no region claims it: keep Greek
        text = ''.join(kept)
        kl = [c for c in text if c.isalpha()]
        if not kl or sum(map(score.is_greek, kl)) / len(kl) < 0.5:
            continue
        y = min(int(q.split(',')[1]) for q in tl.find('p:Baseline', ns).get('points').split())
        lines.append((y, text))
    return [t for _, t in sorted(lines)]


def hyp(pages):
    return score.norm(score.join_lines([l for p in pages for l in page_lines(p)]))


if __name__ == '__main__':
    rows = []
    for p in review.BATCH2:
        ref, h = score.truth(p), hyp([p])
        rows.append((p, Levenshtein.distance(ref, h), len(ref)))
    ref, h = review.epistolae_truth(), hyp(review.EPIST)
    ws, we = review.window(ref, h)
    rows.append(('971-974', Levenshtein.distance(ref, h[ws:we]), len(ref)))
    for p, d, n in rows:
        print(f'{p}: {d}/{n} = {d / n:.2%}')
    D, N = sum(r[1] for r in rows), sum(r[2] for r in rows)
    print(f'RAW (hybrid{" +rescue" if RESCUE else ""}{" +fallback" if FALLBACK else ""}) {D}/{N} = {D / N:.2%}   vs 4.46% whole-page')
