#!/usr/bin/env python3
"""Does the junk-OCR witness scan find vision-OCR errors? Scores scripts/greek-witness-scan.py
against the Greek benchmark: true errors = Levenshtein diff of model output vs Calfa ground truth,
classed as diacritic-only / punctuation-only / letter (wrong, missing or extra letters).
An error is CAUGHT if a scan flag lands within W chars of it. LOAD = share of the text inside
flag windows, i.e. what a plate reader would still have to read."""
import sys, subprocess, unicodedata, importlib.util, json
spec = importlib.util.spec_from_file_location('g', '../scripts/greek-witness-scan.py')
g = importlib.util.module_from_spec(spec); spec.loader.exec_module(g)

PAGES = {  # benchmark page -> (archive volume file, pdf page) located 2026-10-14 (header number / snippet alignment)
 'PG_2-633': ('002', 317), 'PG_17-26': ('017', None), 'PG_87-4080': ('087c', 654), 'PG_89-1855': ('089', 934),
 'PG_98-1360': ('098', 684), 'PG_99-1706': ('099', 858), 'PG_114-1007': ('114', 526), 'PG_145-230': ('145', 120)}
W = 12
MODELS=['sonnet','haiku']
KINDS = next((a[8:].split(',') for a in sys.argv[1:] if a.startswith('--kinds=')), ['omission','insertion','substitution'])

def nfc(s): return unicodedata.normalize('NFC', ' '.join(s.split()))
def base(s): return ''.join(c for c in unicodedata.normalize('NFD', s) if not unicodedata.combining(c)).lower()
def isletter(c): return unicodedata.category(c).startswith('L') and c not in 'ʹ΄´'

def lev_ops(a, b):
    n, m = len(a), len(b); D = [list(range(m+1))] + [[i] + [0]*m for i in range(1, n+1)]
    for i in range(1, n+1):
        ai = a[i-1]; Di = D[i]; Dp = D[i-1]
        for j in range(1, m+1):
            Di[j] = min(Dp[j-1] + (ai != b[j-1]), Dp[j] + 1, Di[j-1] + 1)
    i, j, ops = n, m, []
    while i or j:
        if i and j and D[i][j] == D[i-1][j-1] + (a[i-1] != b[j-1]): ops.append(('=' if a[i-1] == b[j-1] else 'S', i-1, j-1)); i -= 1; j -= 1
        elif i and D[i][j] == D[i-1][j] + 1: ops.append(('D', i-1, None)); i -= 1   # in GT, missing from hyp
        else: ops.append(('I', None, j-1)); j -= 1                                   # extra in hyp
    return ops[::-1]

def events(gt, hyp):
    ops = lev_ops(gt, hyp)
    # trim hyp-only overhang at either end (model read more of the page than the GT region covers)
    while ops and ops[0][0] == 'I': ops.pop(0)
    while ops and ops[-1][0] == 'I': ops.pop()
    ev, cur = [], []
    for o in ops + [('=', None, None)]:
        if o[0] != '=': cur.append(o); continue
        if cur:
            g_ = ''.join(gt[x[1]] for x in cur if x[1] is not None); h_ = ''.join(hyp[x[2]] for x in cur if x[2] is not None)
            hj = [x[2] for x in cur if x[2] is not None]
            # hyp anchor: for a pure deletion, the hyp index of the next char
            h0 = min(hj) if hj else (o[2] if o[2] is not None else len(hyp)-1); h1 = max(hj) if hj else h0
            if [c for c in base(g_) if isletter(c)] != [c for c in base(h_) if isletter(c)]: kind = 'letter'
            elif any(isletter(c) for c in g_ + h_): kind = 'diacritic'
            else: kind = 'punct'
            nlet = max(sum(isletter(c) for c in g_), sum(isletter(c) for c in h_))
            shape = 'drop' if not h_.strip() else ('add' if not g_.strip() else 'sub')
            ev.append({'shape': shape, 'kind': kind, 'h0': h0, 'h1': h1, 'gt': g_, 'hyp': h_, 'nlet': nlet})
            cur = []
    span = (ops[0][2] if ops and ops[0][2] is not None else 0, max((o[2] for o in ops if o[2] is not None), default=0))
    return ev, span

def gt_text(pid):
    return subprocess.run(['node', 'extract-greek-gt.mjs', f'greek-gt/task2/{pid}.xml'], capture_output=True, text=True).stdout

