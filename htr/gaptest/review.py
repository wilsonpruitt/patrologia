"""Build the plate-review sheet: every OCR/transcription disagreement, grouped by
Kraken line, with a crop of that line from the 600 dpi page.

    review.py            -> review/sheet.jsonl + review/crops/*.png + per-page raw CER

Unit = one Kraken line holding >=1 disagreement. Truth for 846-865 is the
batch2-final leaf; for 971-974 the shipped Epistolae Greek chunk, scored as one
run across the four pages.
"""
import json, re
from pathlib import Path
from PIL import Image
from rapidfuzz.distance import Levenshtein
import score

HERE = Path(__file__).parent
EPI = Path.home() / 'patrologia/src/greek/dorotheus-epistolae-ad-diversos/0001.md'
BATCH2 = list(range(846, 866))
EPIST = [971, 972, 973, 974]


def epistolae_truth():
    t = EPI.read_text().split('---', 2)[2]
    t = re.sub(r'⟦[^⟧]*⟧|\[b: [A-D]\]|\[\d+\]', ' ', t)
    return score.norm(t)


def hyp_with_spans(pages):
    """Joined hypothesis plus (start, end, page, line) for every line."""
    hyp, spans = '', []
    for page in pages:
        for y, x0, x1, text, lid in score.ocr_lines(page):
            t = score.norm(text)
            if not t:
                continue
            if hyp.endswith('-'):
                hyp = hyp[:-1]
            elif hyp:
                hyp += ' '
            spans.append((len(hyp), len(hyp) + len(t), page, lid, y, x0, x1))
            hyp += t
    return hyp, spans


def crop(page, lid):
    import xml.etree.ElementTree as ET
    root = ET.parse(HERE / f'out/p-{page:04d}.xml').getroot()
    ns = {'p': root.tag.split('}')[0][1:]}
    for tl in root.iter(f'{{{ns["p"]}}}TextLine'):
        if tl.get('id') == lid:
            pts = [tuple(map(int, p.split(','))) for p in tl.find('p:Coords', ns).get('points').split()]
            xs, ys = [p[0] for p in pts], [p[1] for p in pts]
            im = Image.open(HERE / f'pages/p-{page:04d}.png').convert('L')
            box = (max(0, min(xs) - 30), max(0, min(ys) - 25), min(im.width, max(xs) + 30), min(im.height, max(ys) + 25))
            out = HERE / f'review/crops/p{page}-{lid}.png'
            im.crop(box).save(out)
            return str(out.relative_to(HERE))


def window(ref, hyp):
    """Trim hyp to the stretch the reference covers: the pages also carry
    neighbouring works. Anchor on the first and last 40 reference chars."""
    from rapidfuzz.fuzz import partial_ratio_alignment
    a = partial_ratio_alignment(ref[:40], hyp)
    b = partial_ratio_alignment(ref[-40:], hyp)
    return a.dest_start, b.dest_end


def build(pages, ref, tag, trim=False):
    hyp, spans = hyp_with_spans(pages)
    ws, we = window(ref, hyp) if trim else (0, len(hyp))
    d = Levenshtein.distance(ref, hyp[ws:we])
    items = {}
    for op in Levenshtein.opcodes(ref, hyp[ws:we]):
        if op.tag == 'equal':
            continue
        op_ds, op_de = op.dest_start + ws, op.dest_end + ws
        pos = op_ds if op_ds < len(hyp) else len(hyp) - 1
        span = next((s for s in spans if s[0] <= pos <= s[1]), spans[-1])
        key = (span[2], span[3])
        it = items.setdefault(key, {'set': tag, 'page': span[2], 'line': span[3],
                                    'kraken': hyp[span[0]:span[1]], 'diffs': []})
        it.update(y=span[4], x0=span[5], x1=span[6], llen=span[1] - span[0])
        it['diffs'].append({'op': op.tag, 'lpos': max(0, op_ds - span[0]), 'lend': max(0, op_de - span[0]),
                            'rpos': op.src_start, 'rend': op.src_end,
                            'transcription': ref[op.src_start:op.src_end],
                            'kraken': hyp[op_ds:op_de],
                            'context': ref[max(0, op.src_start - 15):op.src_end + 15]})
    (HERE / f'review/ref-{tag}-{pages[0]}.txt').write_text(ref)
    for it in items.values():
        it['ref'] = f'review/ref-{tag}-{pages[0]}.txt'
    return d, len(ref), list(items.values())


if __name__ == '__main__':
    (HERE / 'review/crops').mkdir(parents=True, exist_ok=True)
    sheet, totals = [], []
    for p in BATCH2:
        d, n, its = build([p], score.truth(p), 'batch2')
        totals.append((p, d, n)); sheet += its
    d, n, its = build(EPIST, epistolae_truth(), 'epistolae', trim=True)
    totals.append(('971-974', d, n)); sheet += its
    with open(HERE / 'review/sheet.jsonl', 'w') as f:
        for it in sheet:
            f.write(json.dumps(it, ensure_ascii=False) + '\n')
    for p, d, n in totals:
        print(f'{p}: {d}/{n} = {d / n:.2%}')
    D, N = sum(t[1] for t in totals), sum(t[2] for t in totals)
    print(f'RAW total {D}/{N} = {D / N:.2%}; lines to review {len(sheet)}; '
          f'diffs {sum(len(i["diffs"]) for i in sheet)}')
