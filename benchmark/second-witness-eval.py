#!/usr/bin/env python3
"""CLLG kraken OCR as a free SECOND WITNESS to a Claude vision read (Greek PG).
Truth = Calfa ground truth (gt-greek/). Primary = hyp/sonnet, witness = hyp/cllg-lay.
Word-level: a primary word is WRONG if its aligned GT word differs (substitution), or GT words are
missing at that point (omission). A primary word is FLAGGED if the witness disagrees there
(aligned witness word differs, or the witness has words the primary lacks next to it).
Caught = error on a flagged word (omission: flag within 1 word). Load = flagged / primary words.
Two comparison keys: 'accented' (lowercase, grave=acute, elision unified, punctuation stripped)
and 'letters' (base letters only)."""
import sys, unicodedata, re
from rapidfuzz.distance import Levenshtein as L

PAGES = ['PG_114-1007', 'PG_145-230', 'PG_17-26', 'PG_2-633', 'PG_87-4080', 'PG_89-1855', 'PG_98-1360', 'PG_99-1706']
PRIM, WIT = (sys.argv[1:3] if len(sys.argv) > 2 else ('hyp/sonnet', 'hyp/cllg-lay'))

def toks(s): return ' '.join(unicodedata.normalize('NFC', s).split()).split(' ')
def k_acc(w):
    w = unicodedata.normalize('NFD', w.lower()).replace('̀', '́')
    w = unicodedata.normalize('NFC', w)
    w = re.sub('[’᾿ʼ´΄\'᾽ʹ]', '’', w)
    return ''.join(c for c in w if c.isalpha() or c == '’')
def k_let(w): return ''.join(c for c in unicodedata.normalize('NFD', w.lower()) if c.isalpha() and not unicodedata.combining(c))

def wrong_map(P, G, key):
    """per primary index: 'sub' | None ; plus omission points (primary index where GT words are missing)"""
    a, b = [key(w) for w in P], [key(w) for w in G]
    sub, omit = set(), []
    ops = list(L.opcodes(a, b))
    # primary text outside the GT region (GT covers only part of some pages) is not an error
    while ops and ops[0].tag == 'delete': ops.pop(0)
    while ops and ops[-1].tag == 'delete': ops.pop()
    for op in ops:
        if op.tag == 'replace':
            for i in range(op.src_start, op.src_end): sub.add(i)
        elif op.tag == 'insert':          # GT has words primary lacks
            if any(b[j] for j in range(op.dest_start, op.dest_end)): omit.append((op.src_start, ' '.join(G[op.dest_start:op.dest_end])))
        elif op.tag == 'delete':          # primary has extra words
            for i in range(op.src_start, op.src_end):
                if a[i]: sub.add(i)
    sub = {i for i in sub if a[i]}        # ignore pure-punctuation tokens
    return sub, omit

def flag_set(P, W, key):
    a, b = [key(w) for w in P], [key(w) for w in W]
    fl = set()
    for op in L.opcodes(a, b):
        if op.tag in ('replace', 'delete'):
            fl.update(range(op.src_start, op.src_end))
        elif op.tag == 'insert' and any(b[j] for j in range(op.dest_start, op.dest_end)):
            fl.update({op.src_start - 1, op.src_start})
    return {i for i in fl if 0 <= i < len(P) and a[i]}

for mode, key in (('accented', k_acc), ('letters', k_let)):
    T = dict(sub=0, subc=0, om=0, omc=0, fl=0, n=0); T2 = dict(T)
    print(f'\n=== flags on {mode} disagreement; errors judged on {mode} key ===')
    for p in PAGES:
        G = toks(open(f'gt-greek/{p}.txt').read()); P = toks(open(f'{PRIM}/gr-{p}.txt').read()); W = toks(open(f'{WIT}/gr-{p}.txt').read())
        sub, omit = wrong_map(P, G, key); fl = flag_set(P, W, key)
        subc = len(sub & fl); omc = sum(1 for i, _ in omit if {i - 1, i} & fl)
        n = sum(1 for w in P if key(w))
        print(f'{p:12} sub {subc:3}/{len(sub):3}  omission {omc:2}/{len(omit):2}  flagged {len(fl):3}/{n} = {len(fl)/n:5.1%}')
        for i in sorted(sub - fl)[:4]: print(f'     missed sub: {P[i]!r}')
        for i, g in omit:
            if not ({i - 1, i} & fl): print(f'     missed omission: {g[:60]!r}')
        R = T2 if p == 'PG_98-1360' else T
        for k_, v in (('sub', len(sub)), ('subc', subc), ('om', len(omit)), ('omc', omc), ('fl', len(fl)), ('n', n)): R[k_] += v
    print(f'TOTAL (7 pages, excl. worn PG 98): substitutions caught {T["subc"]}/{T["sub"]} = {T["subc"]/T["sub"]:.0%} | '
          f'omissions caught {T["omc"]}/{T["om"]} | words flagged {T["fl"]}/{T["n"]} = {T["fl"]/T["n"]:.0%}')
