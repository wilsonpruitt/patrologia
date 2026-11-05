"""Contact sheets for the kt image check (2026-11-04): one crop per flagged OCR row, labelled, N rows a sheet.

Usage: python3 scripts/kt-sheet.py <work> [--kinds=ocr,doubt,print,subscript] [--per=16] [--out=DIR]
  reads   translate/<work-dir>/mp-*.en.md OCR tables (tag | printed | reading | sure | kind | why)
          raw/kraken/<work>/{text,ruled,xml,pages}
  writes  DIR/sheet-NNN.png + DIR/ROWS.tsv (sheet, slot, chunk, tag, printed, reading, kind, located)

Generalises kt-crop.py, which hard-coded Dorotheus and guessed the line by PROPORTION (line n of the text file ~
n-th TextLine of the Greek boxes). Here the line is found by TEXT: the TextLine on that page whose letters best match
the text/ line, so a dropped or extra line elsewhere on the page cannot shift the crop. The flagged word is located by
its position in the line and the crop is centred on it (±KT_HALF px, default 420), with the whole line height plus one
line above and below, so a breathing or an accent on the line edge is in view.
`located` = 'word' (token found in the line), 'line' (only the line found: crop is the whole line), or 'MISSING'.
"""
import glob, json, os, re, sys, unicodedata as ud, difflib
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
args = [a for a in sys.argv[1:] if not a.startswith('--')]
opt = dict(a[2:].split('=', 1) for a in sys.argv[1:] if a.startswith('--') and '=' in a)
work = args[0]
TDIR = {'moschus-pratum': 'moschus-pratum', 'dorotheus-doctrinae': 'dorotheus-doctrinae'}.get(work, work)
KINDS = set(opt.get('kinds', 'ocr,doubt,print,subscript').split(','))
# --redo=<IMAGE-CHECK.tsv>: second pass over the rows still marked '?', as whole lines with a line of context above and
# below (the first pass's tight word crops missed the word when the line or the word position was mislocated)
REDO = opt.get('redo')
REDO_TAGS = {(r.split('\t')[3], r.split('\t')[4]) for r in open(REDO).read().split('\n')[1:] if r.count('\t') >= 7 and r.split('\t')[7] == '?'} if REDO else None
PER = int(opt.get('per', 24))
COLS = int(opt.get('cols', 3))
OUT = opt.get('out', os.path.join(ROOT, 'raw/kraken', work, 'sheets'))
HALF = int(os.environ.get('KT_HALF', 230))
K = os.path.join(ROOT, 'raw/kraken', work)
os.makedirs(OUT, exist_ok=True)
FONT = ImageFont.truetype('/System/Library/Fonts/Supplemental/Times New Roman.ttf', 30)
REG = json.load(open(f'{K}/regions.json'))
def greek_x(p):
    b = [r['box'] for r in REG.get(p, []) if r['class'] == 'MainText_ColGreek' and r['box'][2] - r['box'][0] < 2200]   # not full-width strips
    return (min(x[0] for x in b), max(x[2] for x in b)) if b else None

nfc = lambda s: ud.normalize('NFC', s)
def base(s): return ''.join(c for c in ud.normalize('NFD', s.lower()) if 'α' <= c <= 'ω' or 'a' <= c <= 'z')

_xml = {}
def xml_lines(p):
    if p not in _xml:
        x = open(f'{K}/xml/{p}.xml').read(); out = []
        for m in re.finditer(r'<TextLine[^>]*>\s*<Coords points="([^"]+)"/>(.*?)</TextLine>', x, re.S):
            pts = [tuple(map(int, q.split(','))) for q in m.group(1).split()]
            t = re.findall(r'<Unicode>(.*?)</Unicode>', m.group(2)); t = nfc(t[-1]) if t else ''
            out.append((min(a for a, _ in pts), min(b for _, b in pts), max(a for a, _ in pts), max(b for _, b in pts), t))
        _xml[p] = out
    return _xml[p]

def locate(p, ln, printed):
    tl = open(f'{K}/text/{p}.txt').read().split('\n')
    if ln > len(tl) or not tl[ln - 1].strip(): return None, 'MISSING'
    line = nfc(tl[ln - 1]); bl = base(line)
    gx = greek_x(p)
    gb0 = lambda s_: ''.join(c for c in ud.normalize('NFD', s_.lower()) if '\u03b1' <= c <= '\u03c9')
    def greekish(t):
        a_ = sum(ch.isalpha() for ch in t); return a_ and len(gb0(t)) / a_ > 0.5
    # match on GREEK letters only, among mostly-Greek lines: a Latin line can no longer win on shared Latin junk
    cands = [L for L in xml_lines(p) if greekish(L[4])]
    gl = gb0(line)
    best = max(cands, key=lambda L: difflib.SequenceMatcher(None, gb0(L[4]), gl).ratio(), default=None)
    if not best or difflib.SequenceMatcher(None, gb0(best[4]), gl).ratio() < 0.6: return None, 'MISSING'
    x1, y1, x2, y2, xt = best
    h = y2 - y1
    gb = lambda s_: ''.join(c for c in ud.normalize('NFD', s_.lower()) if '\u03b1' <= c <= '\u03c9')   # Greek letters only
    tok = gb(printed.split('/')[0].split()[0]) if printed.strip() else ''
    if gx and (x2 - x1) > 1.25 * (gx[1] - gx[0]):        # Kraken merged Latin debris into the line: keep the Greek side
        x1, x2 = max(x1, gx[0] - 10), min(x2, gx[1] + 10)
    bx = gb(xt); i = bx.find(tok) if tok else -1
    if i >= 0 and bx:
        cx = x1 + (x2 - x1) * (i + len(tok) / 2) / len(bx)
        a = max(x1 - 20, int(cx - HALF)); b = min(x2 + 20, int(cx + HALF))
        if REDO: return (x1 - 30, y1 - h, x2 + 30, y2 + h, cx - x1 + 30, y1, y2), 'word'
        return (a, y1 - h // 3, b, y2 + h // 3, cx - a, y1, y2), 'word'
    if REDO: return (x1 - 30, y1 - h, x2 + 30, y2 + h, None, y1, y2), 'line'
    return (x1 - 20, y1 - h // 3, x2 + 20, y2 + h // 3, None, y1, y2), 'line'

rows = []
for f in sorted(glob.glob(os.path.join(ROOT, 'translate', TDIR, '[a-z][a-z]-0*.en.md'))):
    chunk = os.path.basename(f)[:6]
    for l in open(f).read().split('\n## OCR', 1)[-1].split('\n'):
        if not l.startswith('| p'): continue
        c = [x.strip() for x in l.strip().strip('|').split('|')]
        if len(c) < 6 or c[4] not in KINDS: continue
        m = re.match(r'p(\d{4})\.(\d+)', c[0])
        if not m: continue
        if REDO_TAGS is not None and (c[0], c[1]) not in REDO_TAGS: continue
        rows.append((chunk, c[0], c[1], c[2], c[4], c[5], f'p-{m.group(1)}', int(m.group(2))))

log = ['sheet\tslot\tchunk\ttag\tprinted\treading\tkind\tlocated']
W = int(opt.get('width', 2 * HALF + 40))
SC = float(opt.get('scale', 1.0))
for s in range(0, len(rows), PER):
    batch = rows[s:s + PER]; tiles = []
    for slot, (chunk, tag, pr, rd, kind, why, p, ln) in enumerate(batch, 1):
        box, how = locate(p, ln, pr)
        if box:
            x0, y0, x1_, y1_, cx, ly1, ly2 = box
            img = Image.open(f'{K}/pages/{p}.png').crop((x0, y0, x1_, y1_)).convert('RGB')
            d = ImageDraw.Draw(img)
            d.rectangle((0, ly1 - y0, 6, ly2 - y0), fill=(220, 0, 0))                 # target line bar
            if cx is not None: d.line((cx - 60, ly2 - y0 + 4, cx + 60, ly2 - y0 + 4), fill=(220, 0, 0), width=4)
        else:
            img = Image.new('RGB', (W, 80), 'white')
        img = img.resize((int(img.width * SC), int(img.height * SC)))
        tw = int(W * SC)
        tile = Image.new('RGB', (tw, img.height + 38), 'white')
        tile.paste(img, (0, 38))
        ImageDraw.Draw(tile).text((4, 2), f'{slot}. {tag} [{kind}] {pr} → {rd}'[:60], fill=(170, 0, 0), font=FONT)
        tiles.append(tile)
        log.append(f'{s // PER + 1:03d}\t{slot}\t{chunk}\t{tag}\t{pr}\t{rd}\t{kind}\t{how}')
    tw = int(W * SC); col_h = [0] * COLS; place = []
    for k, t in enumerate(tiles):
        c = k % COLS; place.append((c * (tw + 10), col_h[c], t)); col_h[c] += t.height + 8
    sheet = Image.new('RGB', (COLS * (tw + 10), max(col_h)), (200, 200, 200))
    for x, y, t in place: sheet.paste(t, (x, y))
    sheet.save(f'{OUT}/sheet-{s // PER + 1:03d}.png')
open(f'{OUT}/ROWS.tsv', 'w').write('\n'.join(log) + '\n')
from collections import Counter
print(f'{len(rows)} rows → {(len(rows) + PER - 1) // PER} sheets in {os.path.relpath(OUT, ROOT)}/;',
      dict(Counter(l.split('\t')[-1] for l in log[1:])))
