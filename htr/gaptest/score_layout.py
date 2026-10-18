"""Score the layout-model pipeline against the same references as review.py.

    score_layout.py   -> per-page raw CER, old (whole-page segmentation) vs new (Greek blocks)

Hypothesis = Greek blocks in layout/blocks.json order, lines top to bottom
within each block, lines kept only if mostly Greek script. Same truth, same
normalization, same Epistolae trimming as review.py, so the two raw numbers
are directly comparable.
"""
import json, xml.etree.ElementTree as ET
from pathlib import Path
from rapidfuzz.distance import Levenshtein
import score, review

HERE = Path(__file__).parent
blocks = json.loads((HERE / 'layout/blocks.json').read_text())


def block_lines(xml):
    root = ET.parse(xml).getroot()
    ns = {'p': root.tag.split('}')[0][1:]}
    out = []
    for tl in root.iter(f'{{{ns["p"]}}}TextLine'):
        u = tl.find('p:TextEquiv/p:Unicode', ns)
        text = (u.text or '') if u is not None else ''
        letters = [c for c in text if c.isalpha()]
        if not letters or sum(map(score.is_greek, letters)) / len(letters) < 0.5:
            continue
        pts = [tuple(map(int, p.split(','))) for p in tl.find('p:Baseline', ns).get('points').split()]
        out.append((sum(y for _, y in pts) / len(pts), min(x for x, _ in pts), text))
    # fragments of one printed line: same row within ROW px, then left to right
    rows = []
    for y, x, t in sorted(out):
        if rows and y - rows[-1][0] < ROW:
            rows[-1][1].append((x, t))
        else:
            rows.append([y, [(x, t)]])
    return [' '.join(t for _, t in sorted(r[1])) for r in rows]


ROW = 35  # px at 600 dpi; line pitch is ~85


def hyp(pages):
    lines = []
    for p in pages:
        for b in blocks[str(p)]:
            lines += block_lines(HERE / 'layout/out' / b['crop'].replace('.png', '.xml'))
    return score.norm(score.join_lines(lines))


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
    print(f'RAW (layout model) {D}/{N} = {D / N:.2%}   vs 4.46% with whole-page segmentation')
