#!/usr/bin/env python3
"""Read the running head of every page of a PG volume PDF: Migne columns and the work title.

    python3 -I htr/pg-heads.py 011            # raw/pg-pdf/011.pdf -> data/pg-heads/011.tsv
    python3 -I htr/pg-heads.py 001 002 ...    # several volumes, one after another
    python3 -I htr/pg-heads.py --refit 011    # re-fit the columns from the reads already stored

Each PG page carries a running head "<colL> <AUTHOR or WORK TITLE> <colR>" (e.g. "1101 CONTRA
CELSUM LIB. IV. 1102"). The top strip of each page is rendered at 200 dpi and read by Tesseract
(lat), about half a second a page on the CPU, so it runs beside Kraken (GPU) without slowing it.

Columns: the OCR digits are noisy (691 read as "E", 1101 as "Hot", 1579 as "13590"), so the column
is fitted, not copied. Within a run of ordinary pages colL = 2*page + b; a plate, a front-matter page
or a re-scanned block changes b (see scripts/pg-column-map-rebuild.py on PG 88). A Viterbi pass
over candidate offsets b picks the sequence that best explains the readings, with a penalty per
change of b. A page whose own reading agrees with the fit is marked `read`; one that only takes the
fit is `fit`. Pages before the first column, and runs no reading supports, get no column.
⚠ Columns from here are OCR evidence, not plate reads; cite them as "col. ≈N" until checked.

Output TSV: page, colL, colR, status (read/fit/-), head (the title text of the head, digits
stripped), raw (Tesseract's first line).
"""
import concurrent.futures as cf, os, re, subprocess, sys, tempfile

ROOT = os.path.expanduser('~/patrologia')
OUT = os.path.join(ROOT, 'data/pg-heads')
SWITCH = 6.0          # base cost of any other change of the offset b ...
PER_COL = 0.05        # ... plus this per column of jump: a plate or a re-scanned block moves b by a
                      # few columns, while a digit misread (2 read as 9, PG 11) fakes a jump of hundreds
LEAF = 2.0            # cost of b moving by 2: one leaf duplicated or missing in the scan (PG 50)


def pdf_for(vol):
    for c in (f'{ROOT}/raw/pg{vol}/{vol}.pdf', f'{ROOT}/raw/pg-pdf/{vol}.pdf',
              os.path.expanduser(f'~/scriptura/studies/sensus/sources/editions/pg{vol}.pdf')):
        if os.path.getsize(c) if os.path.exists(c) else 0:
            return c
    raise SystemExit(f'no PDF for {vol}')


def npages(pdf):
    out = subprocess.run(['pdfinfo', pdf], capture_output=True, text=True).stdout
    return int(re.search(r'^Pages:\s+(\d+)', out, re.M).group(1))


def head(args):
    """Render the page, find where the ink starts (scans differ: a black edge band on PG 5, a 19% top
    margin on PG 116, a grey ground on PG 148), and read a band from there down."""
    from PIL import Image, ImageOps
    pdf, p, tmp = args
    png = os.path.join(tmp, f'h{p}')
    subprocess.run(['pdftoppm', '-r', '200', '-f', str(p), '-l', str(p), '-gray', '-png', '-singlefile',
                    pdf, png], capture_output=True)
    try:
        im = Image.open(png + '.png').convert('L')
    except OSError:
        return p, ''
    w, h = im.size
    col1 = im.resize((1, h))
    prof = list(col1.get_flattened_data() if hasattr(col1, 'get_flattened_data') else col1.getdata())             # mean grey per row
    bg = sorted(prof)[len(prof) // 2]                     # the page's ground (median row)
    ink = next((y for y in range(int(h * .02), int(h * .4)) if prof[y] < min(bg, 250) - 4), 0)
    lines = []
    for y0 in (max(0, ink - 20), max(0, ink - 20) + int(h * .05)):   # the first band, then the next
        band = ImageOps.autocontrast(im.crop((0, y0, w, min(h, y0 + int(h * .08)))), cutoff=1)
        band.save(png + 'b.png')
        r = subprocess.run(['tesseract', png + 'b.png', '-', '--psm', '6', '-l', 'lat'],
                           capture_output=True, text=True).stdout
        lines = [l.strip() for l in r.splitlines() if len(l.strip()) > 2]
        if any(nums(l) for l in lines[:3]):
            break
    for f in (png + '.png', png + 'b.png'):
        try: os.remove(f)
        except OSError: pass
    line = next((l for l in lines[:3] if nums(l)), lines[0] if lines else '')
    return p, line


SUBS = {'$': '35', 'S': '53', 'l': '1', 'I': '1', 'i': '1', 'O': '0', 'o': '0', 'g': '9', 'B': '8', 'Z': '2'}


def _variants(tok):
    """Digit readings of an OCR token: '$51' -> 351, 551; 'l2O' -> 120. At most 2 misread characters."""
    tok = tok.strip('[](){}.,:;\'"*»«-—^|!')
    if not tok or len(tok) > 4 or sum(not c.isdigit() for c in tok) > 2 or not any(c.isdigit() for c in tok):
        return set()
    out = {''}
    for c in tok:
        opts = c if c.isdigit() else SUBS.get(c, '')
        if not opts: return set()
        out = {o + d for o in out for d in opts}
    return {int(o) for o in out if o and o[0] != '0'}


def nums(line):
    """Candidate colL values implied by a head line: a leading number is colL, a trailing one colR."""
    toks = line.split()
    c = set()
    if toks:
        c |= _variants(toks[0])
        c |= {v - 1 for v in _variants(toks[-1])}
    return {v for v in c if v > 0}


def fit(reads, n, half=False):
    """Viterbi over offsets b (colL = 2p + b, colL odd). Returns {page: (colL, supported)}.
    States are the offsets two or more pages support (a single misread cannot found a run).
    half=True: the scan carries every Migne page twice, once under the author head and once under the
    work head, so colL = 2*ceil(p/2) + b and the column advances 2 every two PDF pages (the Chrysostom
    block PG 47-63 and PG 50, 2026-11-13). run() fits both and keeps the one more pages support."""
    K = (lambda p: 2 * ((p + 1) // 2)) if half else (lambda p: 2 * p)
    cand = {p: {v - K(p) for v in nums(l) if v % 2 == 1} for p, l in reads.items()}
    support = {}
    for bs in cand.values():
        for x in bs: support[x] = support.get(x, 0) + 1
    offs = sorted(x for x, k in support.items() if k >= 2)
    if not offs: return {}
    NONE = None
    states = offs + [NONE]
    def jump(a, b):
        if a == b: return 0.0
        if a is NONE or b is NONE: return SWITCH
        d = abs(a - b)
        return LEAF if d == 2 else SWITCH + PER_COL * d
    cost = {s: 0.0 for s in states}
    back = []
    for p in range(1, n + 1):
        obs = cand.get(p, set())
        new, bp = {}, {}
        for s in states:
            # emission: 0 if the reading supports s, 0.6 if the page reads nothing, 1.5 if it reads otherwise
            e = 0.0 if (s is not NONE and s in obs) else (0.6 if not obs else 1.5)
            if s is NONE: e = 2.0 if obs else 1.0
            c, frm = min(((cost[q] + jump(q, s), q) for q in states), key=lambda x: x[0])
            new[s], bp[s] = c + e, frm
        cost = new; back.append(bp)
    s = min(cost, key=cost.get)
    path_ = []
    for bp in reversed(back):
        path_.append(s); s = bp[s]
    path_.reverse()
    # columns below 1 are front matter before Migne's column count begins
    return {p: (None if b is NONE or K(p) + b < 1 else (K(p) + b, b in cand.get(p, set())))
            for p, b in zip(range(1, n + 1), path_)}


def run(vol, refit=False):
    if refit:       # re-fit from the raw reads already in the TSV (no OCR)
        rows = [l.rstrip('\n').split('\t') for l in open(os.path.join(OUT, f'{vol}.tsv'), encoding='utf-8')][1:]
        reads = {int(r[0]): (r[5] if len(r) > 5 else '') for r in rows}
        n = len(rows)
    else:
        pdf = pdf_for(vol)
        n = npages(pdf)
        with tempfile.TemporaryDirectory() as tmp, cf.ThreadPoolExecutor(4) as ex:
            reads = dict(ex.map(head, [(pdf, p, tmp) for p in range(1, n + 1)]))
    f = max((fit(reads, n), fit(reads, n, half=True)), key=lambda g: sum(r[1] for r in g.values() if r))
    os.makedirs(OUT, exist_ok=True)
    ok = 0
    with open(os.path.join(OUT, f'{vol}.tsv'), 'w', encoding='utf-8') as o:
        o.write('page\tcolL\tcolR\tstatus\thead\traw\n')
        for p in range(1, n + 1):
            r = f.get(p)
            raw = reads[p].replace('\t', ' ')
            title = re.sub(r'^\S*\d\S*\s+|\s+\S*\d{2,}\S*$', '', raw).strip()
            if r:
                ok += r[1]
                o.write(f'{p}\t{r[0]}\t{r[0] + 1}\t{"read" if r[1] else "fit"}\t{title}\t{raw}\n')
            else:
                o.write(f'{p}\t\t\t-\t{title}\t{raw}\n')
    cols = [r[0] for r in f.values() if r]
    print(f'{vol}: {n} pages, columns {min(cols) if cols else "-"}–{max(cols) + 1 if cols else "-"}, '
          f'{ok} pages read their own column, {sum(1 for r in f.values() if r)} placed', flush=True)


if __name__ == '__main__':
    refit = '--refit' in sys.argv
    for v in sys.argv[1:]:
        if v != '--refit':
            run(v, refit)
