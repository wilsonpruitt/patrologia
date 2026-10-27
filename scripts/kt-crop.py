import json, re, sys
from PIL import Image
W = '/Users/wilsonpruitt/patrologia/raw/kraken/dorotheus-doctrinae'
OUT = sys.argv.pop(1) if len(sys.argv) > 1 and sys.argv[1].startswith('--out=') else '/tmp'
OUT = OUT.removeprefix('--out=')
regions = json.load(open(f'{W}/regions.json'))
def glines(p):
    boxes = [r['box'] for r in regions[p] if r['class'] in ('MainText_ColGreek', 'MainText_Title')]
    x = open(f'{W}/xml/{p}.xml').read()
    out = []
    for c in re.findall(r'<TextLine[^>]*>\s*<Coords points="([^"]+)"', x):
        pts = [tuple(map(int, q.split(','))) for q in c.split()]
        xs, ys = [a for a, _ in pts], [b for _, b in pts]
        cx, cy = (min(xs) + max(xs)) / 2, (min(ys) + max(ys)) / 2
        if any(b[0] <= cx <= b[2] and b[1] <= cy <= b[3] for b in boxes): out.append((min(xs), min(ys), max(xs), max(ys)))
    return sorted(out, key=lambda b: b[1])
for spec in sys.argv[1:]:
    p, ln = spec.split(':'); ln = int(ln)
    L = glines(p); n = len(open(f'{W}/text/{p}.txt').read().rstrip('\n').split('\n'))
    i = round((ln - 1) * (len(L) - 1) / max(n - 1, 1))      # proportional guess, then a 7-line window
    seg = L[max(i - 3, 0): i + 4]
    x0 = min(q[0] for q in seg) - 30; x1 = max(q[2] for q in seg) + 30
    im = Image.open(f'{W}/pages/{p}.png').crop((x0, seg[0][1] - 10, x1, seg[-1][3] + 10))
    im = im.resize((1300, im.height * 1300 // im.width))
    im.save(f'{OUT}/{p}-{ln:02d}.png'); print(spec)
