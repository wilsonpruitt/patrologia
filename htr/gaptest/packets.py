"""Cut every disagreement into a native-resolution crop and pack them into sheets.

    packets.py  -> review/packets/sheetNNN.png + sheetNNN.json, review/items.jsonl

Disagreements on one line that sit within GAP chars of each other are merged
into one item (one <?> gap otherwise splinters into many). Crop = the target
line only (baseline-anchored), the merged span +-PAD px, 1.5x; spans wider than
WRAP px are cut into two stacked rows.
"""
import json
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

HERE = Path(__file__).parent
PER_SHEET, GAP, PAD, WRAP, SCALE = 12, 12, 260, 1500, 1.5
pages, refs = {}, {}


def page(p):
    if p not in pages:
        pages[p] = Image.open(HERE / f'pages/p-{p:04d}.png').convert('L')
    return pages[p]


def ref(path):
    if path not in refs:
        refs[path] = (HERE / path).read_text()
    return refs[path]


def merged_items(rows):
    for r in rows:
        groups = []
        for d in sorted(r['diffs'], key=lambda d: d['lpos']):
            if groups and d['lpos'] - groups[-1][-1]['lend'] <= GAP:
                groups[-1].append(d)
            else:
                groups.append([d])
        for k, g in enumerate(groups):
            lp, le = g[0]['lpos'], max(d['lend'] for d in g)
            rp, re_ = g[0]['rpos'], max(d['rend'] for d in g)
            R = ref(r['ref'])
            yield {'id': f"{r['page']}-{r['line']}-{k}", 'set': r['set'], 'page': r['page'],
                   'transcription': R[rp:re_], 'kraken': r['kraken'][lp:le],
                   'context_in_transcription': R[max(0, rp - 20):re_ + 20],
                   'kraken_line': r['kraken'], 'lpos': lp, 'lend': le,
                   'y': r['y'], 'x0': r['x0'], 'x1': r['x1'], 'llen': r['llen']}


def cut(it):
    im = page(it['page'])
    n, x0, x1 = max(1, it['llen']), it['x0'], it['x1']
    xa = x0 + it['lpos'] / n * (x1 - x0) - PAD
    xb = x0 + max(it['lend'], it['lpos'] + 1) / n * (x1 - x0) + PAD
    c = im.crop((max(0, int(xa)), max(0, it['y'] - 80), min(im.width, int(xb)), min(im.height, it['y'] + 28)))
    if c.width > WRAP:
        h = c.width // 2
        two = Image.new('L', (h + 60, c.height * 2 + 12), 255)
        two.paste(c.crop((0, 0, h + 60, c.height)), (0, 0))
        two.paste(c.crop((h - 60, 0, c.width, c.height)), (0, c.height + 12))
        c = two
    return c.resize((int(c.width * SCALE), int(c.height * SCALE)))


if __name__ == '__main__':
    rows = [json.loads(l) for l in open(HERE / 'review/sheet.jsonl')]
    items = list(merged_items(rows))
    out = HERE / 'review/packets'
    out.mkdir(parents=True, exist_ok=True)
    font = ImageFont.load_default(size=34)
    with open(HERE / 'review/items.jsonl', 'w') as f:
        for it in items:
            f.write(json.dumps(it, ensure_ascii=False) + '\n')
    for s in range(0, len(items), PER_SHEET):
        batch = items[s:s + PER_SHEET]
        crops = [cut(it) for it in batch]
        W = max(max(c.width for c in crops), 300)
        sheet = Image.new('L', (W, sum(c.height + 56 for c in crops)), 255)
        dr = ImageDraw.Draw(sheet)
        y = 0
        for n, c in enumerate(crops, 1):
            dr.line((0, y + 2, W, y + 2), fill=0, width=3)
            dr.text((8, y + 8), f'#{n}', fill=0, font=font)
            sheet.paste(c, (0, y + 50))
            y += c.height + 56
        name = f'sheet{s // PER_SHEET + 1:03d}'
        sheet.save(out / f'{name}.png')
        (out / f'{name}.json').write_text(json.dumps(
            [{'n': n, **{k: it[k] for k in ('id', 'transcription', 'kraken', 'context_in_transcription', 'kraken_line')}}
             for n, it in enumerate(batch, 1)], ensure_ascii=False, indent=1))
    print(len(items), 'items,', -(-len(items) // PER_SHEET), 'sheets')
