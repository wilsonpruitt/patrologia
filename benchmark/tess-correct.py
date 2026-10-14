#!/usr/bin/env python3
"""Post-correct Tesseract grc output of Migne PG Greek with the Calfa lexicon (raw/greek-lexicon.tsv).

1. layout: join line-end hyphens, join lines (Calfa GT is running text).
2. punctuation: Tesseract's '"' / '":' for the ano teleia -> '·'.
3. words: a token whose lexicon count is < MINC is replaced by the most frequent lexicon form
   reachable by <= MAXSUB character substitutions drawn from a CONFUSION table (learned from
   training pages by --learn: hyp->ref char pairs from aligned words), if that form has count >= MINC.

  tess-correct.py --learn <hypdir> <page-prefix-regex>   -> writes tess-confusions.tsv
  tess-correct.py <in.txt> > out.txt
  tess-correct.py --dir <hypdir> <outdir>
"""
import sys, os, re, math, unicodedata, itertools, collections

HERE = os.path.dirname(os.path.abspath(__file__))
LEX_P = os.path.join(HERE, '..', 'raw', 'greek-lexicon.tsv')
CONF_P = os.path.join(HERE, 'tess-confusions.tsv')
MINC, MAXSUB = 2, 3

def key(w):
    w = unicodedata.normalize('NFD', w.lower()).replace('̀', '́')
    return re.sub('[’᾿ʼ´΄\'’᾽]', '’', unicodedata.normalize('NFC', w))

def nfc(s): return unicodedata.normalize('NFC', s)
PUNCT = '.,·;:!?()[]«»"\'—–-*†‡§0123456789'
def split_tok(t):
    a = 0; b = len(t)
    while a < b and t[a] in PUNCT: a += 1
    while b > a and t[b-1] in PUNCT + '᾽’´ʹ΄': b -= 1
    # keep an elision mark attached to the word (μεθ᾽)
    if b < len(t) and t[b] in '᾽’´' and b > a: b += 1
    return t[:a], t[a:b], t[b:]

def layout(s):
    s = nfc(s)
    s = re.sub(r'(\w)[-¬]\s*\n\s*(\w)', r'\1\2', s)
    s = s.replace('":', '·').replace('"', '·')
    return ' '.join(s.split())

_lex = None
def lex():
    global _lex
    if _lex is None:
        _lex = {}
        for l in open(LEX_P, encoding='utf-8'):
            f, c = l.rstrip('\n').split('\t'); _lex[f] = int(c)
    return _lex

def load_conf():
    C = collections.defaultdict(list)
    if os.path.exists(CONF_P):
        for l in open(CONF_P, encoding='utf-8'):
            a, b, n, p = l.rstrip('\n').split('\t'); C[a].append((b, float(p)))
    for a in C: C[a].sort(key=lambda x: -x[1]); C[a] = C[a][:4]
    return C

def correct_word(w, C):
    L = lex(); k = key(w)
    if L.get(k, 0) >= MINC or not any(c.isalpha() for c in w): return w
    pos = [i for i, c in enumerate(w) if c in C]
    best, bscore = None, -1e9
    for n in range(1, MAXSUB + 1):
        for ps in itertools.combinations(pos, n):
            for alts in itertools.product(*[C[w[i]] for i in ps]):
                cand = list(w); lp = 0
                for i, (b, p) in zip(ps, alts): cand[i] = b; lp += math.log(p)
                cand = nfc(''.join(cand)); c = L.get(key(cand), 0)
                if c >= MINC:
                    s = math.log(c) + 3 * lp
                    if s > bscore: best, bscore = cand, s
        if best: break   # prefer the fewest substitutions
    return best or w

def correct(text, C):
    out = []
    for t in layout(text).split(' '):
        a, w, b = split_tok(t)
        out.append(a + (correct_word(w, C) if w else '') + b)
    return ' '.join(out)

def learn(hd, rx):
    from rapidfuzz.distance import Levenshtein as Lv
    pair, tot = collections.Counter(), collections.Counter()
    for f in sorted(os.listdir(os.path.join(HERE, 'gt-greek'))):
        p = f[:-4]
        if not re.match(rx, p): continue
        h = os.path.join(hd, f'gr-{p}.txt')
        if not os.path.exists(h): continue
        ref = ' '.join(nfc(open(os.path.join(HERE, 'gt-greek', f)).read()).split()).split(' ')
        hyp = layout(open(h).read()).split(' ')
        # align WORDS, then letters inside equal-length word pairs
        for op in Lv.opcodes(hyp, ref):
            if op.tag != 'replace': continue
            for hw, rw in zip(hyp[op.src_start:op.src_end], ref[op.dest_start:op.dest_end]):
                _, hw, _ = split_tok(hw); _, rw, _ = split_tok(rw)
                if len(hw) != len(rw) or not hw: continue
                for x, y in zip(hw, rw):
                    if x != y: pair[(x, y)] += 1
        for w in hyp:
            for x in w: tot[x] += 1
    with open(CONF_P, 'w', encoding='utf-8') as f:
        for (a, b), n in pair.most_common():
            if n >= 3 and a.isalpha() and b.isalpha():
                f.write(f'{a}\t{b}\t{n}\t{n / tot[a]:.4f}\n')
    print('pairs', sum(1 for (a, b), n in pair.items() if n >= 3 and a.isalpha() and b.isalpha()))

if __name__ == '__main__':
    a = sys.argv[1:]
    if a[0] == '--learn': learn(a[1], a[2])
    elif a[0] == '--dir':
        C = load_conf(); os.makedirs(a[2], exist_ok=True)
        for f in sorted(os.listdir(a[1])):
            open(os.path.join(a[2], f), 'w').write(correct(open(os.path.join(a[1], f)).read(), C) + '\n')
    else: print(correct(open(a[0]).read(), load_conf()))
