#!/usr/bin/env python3
"""Greek witness scan: use archive.org's Latin-letter "junk" OCR of a PG plate as an
independent ALIGNMENT witness for a Greek text of the same column (a keyed transcription,
Calfa OCR, or a Claude vision read).

The junk OCR is useless as text, but its letters are look-alikes of the Greek letters and
its engine fails differently from the candidate's. Aligning the two shows three kinds of
disagreement, each a place to read at the plate:
  O-run  : plate text with no counterpart in the candidate  -> omission (eye-skip, dropped word/line)
  T-run  : candidate text with no counterpart on the plate  -> insertion (hallucination, dittography)
  X-dense: a short window where most letters fail the look-alike test -> substitution cluster
Accents and breathings are invisible to it (the junk OCR strips them).

Library use: from greek_witness_scan import page_columns, flags   (see benchmark/witness-eval.py)
CLI: greek-witness-scan.py <djvu.xml> <pdfpage> <L|R> <candidate.txt>
"""
import sys, os, re, unicodedata, xml.etree.ElementTree as ET

LOOK = {  # Greek letter -> Latin look-alikes the archive OCR emits for it (after norm_lat)
 'α':'a','β':'6b','γ':'yg','δ':'b5d','ε':'ecs','ζ':'zc','η':'nhf','θ':'0o','ι':'il1t','κ':'xk',
 'λ':'lak','μ':'pu','ν':'vy','ξ':'e','ο':'o','π':'nmr','ρ':'p','σ':'co','ς':'sc','τ':'tc',
 'υ':'uvb','φ':'gq','χ':'x','ψ':'d','ω':'wu'}
_HERE = os.path.dirname(os.path.abspath(__file__))
_LATIN_PATH = os.path.join(_HERE, '..', 'raw', 'pg091', 'latin-words.txt')
LATIN = set(open(_LATIN_PATH).read().split()) if os.path.exists(_LATIN_PATH) else set()

def norm_lat(s):
    s = unicodedata.normalize('NFD', s.lower()); s = ''.join(c for c in s if not unicodedata.combining(c))
    s = s.replace('ð','o').replace('ü','u').replace('£','e').replace('ç','c').replace('&','a').replace('\\','l')
    return re.sub(r'[^a-z0-9]', '', s)

def norm_grk_indexed(s):
    """stripped Greek letters + map back to positions in the original string"""
    out, idx = [], []
    for i, ch in enumerate(s):
        d = unicodedata.normalize('NFD', ch.lower())
        base = d[0] if d else ''
        if base in LOOK: out.append(base); idx.append(i)
    return ''.join(out), idx

def _page_lines(obj, side):
    W = int(obj.get('width'))
    cov = [0] * (W + 1)
    for w in obj.iter('WORD'):
        l, b, r, t = map(int, w.get('coords').split(','))
        for x in range(max(0, l), min(W, r) + 1, 4): cov[x] += 1
    lo, hi = int(W * 0.35), int(W * 0.65)
    gx = min(range(lo, hi, 4), key=lambda x: sum(cov[max(0, x-40):x+40:4]))
    lines = []
    for ln in obj.iter('LINE'):
        ws = []
        for w in ln.iter('WORD'):
            l, b, r, t = map(int, w.get('coords').split(','))
            if (side == 'L' and r < gx + 15) or (side == 'R' and l > gx - 15): ws.append(w.text or '')
        if not ws: continue
        lat = [w for w in ws if len(norm_lat(w)) >= 3]
        if lat and sum(norm_lat(w) in LATIN for w in lat) / len(lat) >= 0.4: continue
        ws = [w for w in ws if not (len(norm_lat(w)) >= 5 and norm_lat(w) in LATIN)]
        lines.append(' '.join(ws))
    return lines

def page_columns(xmlpath, pages):
    """{pdfpage: {'L': ocrstring, 'R': ocrstring, 'head': first-lines text}} for the given 1-based pages"""
    want = set(pages); out = {}; n = 0
    for ev, el in ET.iterparse(xmlpath, events=('end',)):
        if el.tag != 'OBJECT': continue
        n += 1
        if n in want:
            head = ' '.join((w.text or '') for i, w in enumerate(el.iter('WORD')) if i < 40)
            out[n] = {'L': ''.join(norm_lat(l) for l in _page_lines(el, 'L')),
                      'R': ''.join(norm_lat(l) for l in _page_lines(el, 'R')), 'head': head}
            if len(out) == len(want): break
        el.clear()
    return out

def align(a, b, M=3, G=-2, X=-1):
    """Smith-Waterman, a = stripped Greek, b = normalized OCR. ops: ('=',i,j) ('X',i,j) ('T',i,None) ('O',None,j)"""
    n, m = len(a), len(b); H = [[0]*(m+1) for _ in range(n+1)]; best = (0, 0, 0)
    for i in range(1, n+1):
        ai = LOOK[a[i-1]]; Hi = H[i]; Hp = H[i-1]
        for j in range(1, m+1):
            d = Hp[j-1] + (M if b[j-1] in ai else X); u = Hp[j] + G; l = Hi[j-1] + G
            v = d if d > u else u
            if l > v: v = l
            if v < 0: v = 0
            Hi[j] = v
            if v > best[0]: best = (v, i, j)
    s, i, j = best; ops = []
    while i > 0 and j > 0 and H[i][j] > 0:
        ok = b[j-1] in LOOK[a[i-1]]
        if H[i][j] == H[i-1][j-1] + (M if ok else X): ops.append(('=' if ok else 'X', i-1, j-1)); i -= 1; j -= 1
        elif H[i][j] == H[i-1][j] + G: ops.append(('T', i-1, None)); i -= 1
        else: ops.append(('O', None, j-1)); j -= 1
    return s, ops[::-1]

def flags(cand, ocr, minrun=3, xwin=8, xfrac=0.6):
    """returns (score, coverage, [flag dicts]) ; flag positions are indices into the ORIGINAL cand string"""
    a, idx = norm_grk_indexed(cand)
    score, ops = align(a, ocr)
    out = []
    def apos(k):  # nearest candidate (stripped) index at op k
        for kk in range(k, -1, -1):
            if ops[kk][1] is not None: return ops[kk][1]
        return 0
    k = 0
    while k < len(ops):
        kind = ops[k][0]
        if kind in 'OT':
            k2 = k
            while k2 < len(ops) and ops[k2][0] == kind: k2 += 1
            if k2 - k >= minrun:
                if kind == 'O':
                    p = apos(k); seg = ''.join(ocr[o[2]] for o in ops[k:k2])
                    out.append({'kind': 'omission', 'pos': idx[p], 'end': idx[p], 'len': k2-k, 'ocr': seg})
                else:
                    p0, p1 = ops[k][1], ops[k2-1][1]
                    out.append({'kind': 'insertion', 'pos': idx[p0], 'end': idx[p1], 'len': k2-k})
            k = k2
        else: k += 1
    # substitution clusters over aligned (=/X) positions
    pairs = [o for o in ops if o[0] in '=X']
    i = 0
    while i + xwin <= len(pairs):
        w = pairs[i:i+xwin]
        if sum(o[0] == 'X' for o in w) / xwin >= xfrac:
            out.append({'kind': 'substitution', 'pos': idx[w[0][1]], 'end': idx[w[-1][1]], 'len': xwin}); i += xwin
        else: i += 1
    cov = (ops[-1][1] - ops[0][1] + 1) / max(1, len(a)) if ops and ops[0][1] is not None and ops[-1][1] is not None else 0
    return score, cov, sorted(out, key=lambda f: f['pos'])

if __name__ == '__main__':
    xmlp, page, side, cp = sys.argv[1], int(sys.argv[2]), sys.argv[3], sys.argv[4]
    cols = page_columns(xmlp, [page])
    cand = open(cp, encoding='utf-8').read()
    s, cov, fl = flags(cand, cols[page][side])
    print(f'score {s}  coverage {cov:.2f}  flags {len(fl)}')
    for f in fl: print(f"  {f['kind']:12} @{f['pos']:5}  {cand[max(0,f['pos']-30):f['end']+30]!r}  {f.get('ocr','')}")
