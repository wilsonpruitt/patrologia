#!/usr/bin/env python3
"""Does a Calfa word-form list flag vision-OCR errors? Flags every token of the model output whose
normalized form occurs < K times in the Calfa PG corpus (raw/greek-lexicon.tsv). Scored against the
same true-error events as witness-eval.py. LOAD = share of tokens flagged (words a reader checks)."""
import sys, re, importlib.util
sys.argv = sys.argv[:1]
spec = importlib.util.spec_from_file_location('w', '_wit_lib.py'); w = importlib.util.module_from_spec(spec); spec.loader.exec_module(w)
spec2 = importlib.util.spec_from_file_location('lx', '../scripts/build-greek-lexicon.py')
import unicodedata
def key(t):
    t = unicodedata.normalize('NFD', t.lower()).replace('̀', '́')
    t = re.sub('[’᾿ʼ´΄\'’]', '’', unicodedata.normalize('NFC', t))
    return t.strip('’') if not t.endswith('’') else t
LEX = {}
for line in open('../raw/greek-lexicon.tsv', encoding='utf-8'):
    f, n = line.rstrip('\n').split('\t'); LEX[f] = int(n)
TOK = re.compile(r"[Ͱ-Ͽἀ-῿̀-ͯ]+[’᾿'´]?")
data = {}
for model in ('sonnet', 'haiku'):
    for pid in w.PAGES:
        gt = w.nfc(w.gt_text(pid)); hyp = w.nfc(open(f'hyp/{model}/gr-{pid}.txt', encoding='utf-8').read())
        ev, span = w.events(gt, hyp)
        toks = [(m.start(), m.end(), key(m.group())) for m in TOK.finditer(hyp) if span[0] <= m.start() <= span[1]]
        data[(model, pid)] = (ev, toks)
for K in (1, 2, 3, 5, 10):
    for model in ('sonnet', 'haiku'):
        R = {'letter': [0, 0], 'diacritic': [0, 0]}; big = [0, 0]; nt = nf = good = 0
        for pid in w.PAGES:
            ev, toks = data[(model, pid)]
            fl = [(s, e) for s, e, k in toks if LEX.get(k, 0) < K]
            nt += len(toks); nf += len(fl)
            hit = lambda x: any(s - 2 <= x['h1'] and x['h0'] <= e + 1 for s, e in fl)
            for x in ev:
                if x['kind'] in R:
                    R[x['kind']][0] += 1; R[x['kind']][1] += hit(x)
                    if x['kind'] == 'letter' and x['nlet'] >= 3: big[0] += 1; big[1] += hit(x)
            good += sum(any(s - 2 <= x['h1'] and x['h0'] <= e + 1 for x in ev if x['kind'] in R) for s, e in fl)
        print(f"K>={K:<2} {model:6} letter {R['letter'][1]:3}/{R['letter'][0]:<3} big {big[1]:3}/{big[0]:<3} "
              f"diacritic {R['diacritic'][1]:3}/{R['diacritic'][0]:<3} | flagged {nf}/{nt} words = {nf/nt:.1%}, of which {good/max(1,nf):.0%} real")
