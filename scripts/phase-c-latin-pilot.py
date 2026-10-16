#!/usr/bin/env python3
"""Phase C pilot: Collatinus coverage + accuracy sample on Abbo Canones (9741).
Run: ~/.venvs/collatinus/bin/python scripts/phase-c-latin-pilot.py"""
import re, glob, random, unicodedata, json, sys
IDNO = sys.argv[1] if len(sys.argv) > 1 else '9741'
from collections import Counter
from pycollatinus import Lemmatiseur

def norm(w):
    w = unicodedata.normalize('NFD', w.lower())
    w = ''.join(c for c in w if not unicodedata.combining(c))
    return w.replace('æ','ae').replace('œ','oe').replace('j','i').replace('v','u')

def variants(w):
    n = norm(w); out = [n]
    for a,b in (('ae','e'),('oe','e'),('e','ae'),('ti','ci'),('ci','ti'),('ph','f'),('ch','c'),('th','t')):
        if a in n: out.append(n.replace(a,b))
    return out

txt = ''
for f in sorted(glob.glob(f'src/latin/{IDNO}/*.md')):
    t = open(f).read().split('---',2)[2]
    t = re.sub(r'⟦[^⟧]*⟧','',t); t = re.sub(r'\[[^\]]*\]','',t)
    txt += t + '\n'
toks = re.findall(r"[A-Za-zÀ-ÿæœÆŒ]+", txt)
toks = [w for w in toks if len(w) > 1]
L = Lemmatiseur()
cache = {}
def analyse(w):
    if w in cache: return cache[w]
    for v in variants(w):
        r = list(L.lemmatise(v))
        if r:
            cache[w] = (v != norm(w), r); return cache[w]
    cache[w] = (False, []); return cache[w]
none = Counter(); n_ok = n_var = 0
for w in toks:
    var, r = analyse(w)
    if r: n_ok += 1; n_var += var
    else: none[w.lower()] += 1
print(f"tokens {len(toks)}, types {len(set(t.lower() for t in toks))}")
print(f"analysed {n_ok} ({100*n_ok/len(toks):.1f}%), via spelling-variant {n_var}, none {len(toks)-n_ok}")
print("top unanalysed:", none.most_common(25))
random.seed(int(IDNO))
sample = random.sample(toks, 300)
with open(f'data/phase-c/sample-{IDNO}.tsv','w') as o:
    o.write("token\tvariant_used\tn_analyses\tcandidates(lemma:morph)\tcorrect_in_candidates\ttop1_correct\tnote\n")
    for w in sample:
        var, r = analyse(w)
        c = '; '.join(f"{a['lemma']}:{a['morph']}" for a in r[:8])
        o.write(f"{w}\t{int(var)}\t{len(r)}\t{c}\t\t\t\n")
