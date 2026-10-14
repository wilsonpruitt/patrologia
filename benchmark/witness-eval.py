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
MODELS = [a for a in sys.argv[1:] if not a.startswith('--')] or ['sonnet', 'haiku']
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

cols = {}
for pid, (v, p) in PAGES.items():
    cands = [p] if p else [21, 22]
    pc = g.page_columns(f'../raw/pg-djvu-xml/{v}_djvu.xml', cands)
    cols[pid] = pc

report = {}
for model in MODELS:
    ALL = []
    tot = {'letter': [0, 0], 'diacritic': [0, 0], 'punct': [0, 0]}; bigs = [0, 0]; flagsN = fp = 0; loadc = spanc = 0
    for pid in PAGES:
        gt = nfc(gt_text(pid)); hyp = nfc(open(f'hyp/{model}/gr-{pid}.txt', encoding='utf-8').read())
        ev, (s0, s1) = events(gt, hyp)
        # choose the archive page+side whose OCR aligns best with the GT
        best = max(((g.align(g.norm_grk_indexed(gt)[0][:400], c[side])[0], pg, side)
                    for pg, c in cols[pid].items() for side in 'LR'))
        ocr = cols[pid][best[1]][best[2]]
        sc, cov, fl = g.flags(hyp, ocr)
        fl = [f for f in fl if s0 - W <= f['pos'] <= s1 + W and f['kind'] in KINDS]
        hit = lambda e: any(f['pos'] - W <= e['h1'] and e['h0'] <= f['end'] + W for f in fl)
        for e in ev:
            e['hit']=hit(e); ALL.append(e)
            tot[e['kind']][0] += 1; tot[e['kind']][1] += hit(e)
            if e['kind'] == 'letter' and e['nlet'] >= 3: bigs[0] += 1; bigs[1] += hit(e)
        for f in fl:
            flagsN += 1; fp += not any(f['pos'] - W <= e['h1'] and e['h0'] <= f['end'] + W for e in ev if e['kind'] == 'letter')
        cover = set()
        for f in fl: cover.update(range(max(s0, f['pos'] - W), min(s1, f['end'] + W) + 1))
        loadc += len(cover); spanc += s1 - s0 + 1
        miss = [e for e in ev if e['kind'] == 'letter' and not hit(e)]
        print(f"{model:6} {pid:12} p{best[1]}{best[2]} cov={cov:.2f} letter-errs={sum(e['kind']=='letter' for e in ev):3} "
              f"caught={sum(e['kind']=='letter' and hit(e) for e in ev):3} flags={len(fl):3} load={len(cover)/max(1,s1-s0+1):.0%}")
        for e in miss[:6]: print(f"           MISSED gt={e['gt']!r} hyp={e['hyp']!r}")
    report[model] = (tot, bigs, flagsN, fp, loadc / spanc)
    for sh in ('drop','add','sub'):
        L=[e for e in ALL if e['kind']=='letter' and e['shape']==sh]
        print(f"   {sh:4}: {sum(e['hit'] for e in L)}/{len(L)} caught; of those >=3 letters {sum(e['hit'] for e in L if e['nlet']>=3)}/{sum(1 for e in L if e['nlet']>=3)}")
    print(f"\n== {model}: letter errors caught {tot['letter'][1]}/{tot['letter'][0]} | "
          f"letter errors >=3 letters caught {bigs[1]}/{bigs[0]} | diacritic {tot['diacritic'][1]}/{tot['diacritic'][0]} | "
          f"flags {flagsN}, {fp} not near any letter error | reading load {loadc/spanc:.0%} of text\n")
