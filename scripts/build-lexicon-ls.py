#!/usr/bin/env python3
"""Phase C: per-work Lewis & Short bundle (CC BY-SA 4.0, Perseus). Only lemmas the work uses.
Usage: python3 scripts/build-lexicon-ls.py site/pl/139/canones.words.json site/pl/139/canones.lex-ls.json"""
import sys, json, re, unicodedata
import xml.etree.ElementTree as ET

def norm(w):
    w = unicodedata.normalize('NFD', w.lower())
    w = ''.join(c for c in w if not unicodedata.combining(c))
    return re.sub(r'[^a-z]','', w.replace('æ','ae').replace('œ','oe').replace('j','i').replace('v','u'))

words = json.load(open(sys.argv[1]))
want = {}
for l in words['lemmas']: want.setdefault(norm(l), []).append(l)

def text(e):
    return re.sub(r'\s+',' ', ''.join(e.itertext())).strip()

entries = {}
for _, e in ET.iterparse('sources/lexica/ls/ls.xml', events=('end',)):
    if e.tag != 'entryFree': continue
    key = e.get('key','')
    k = norm(re.sub(r'\d+$','',key))
    if k in want:
        orth = e.find('orth')
        entries.setdefault(k, []).append({'key': key, 'head': text(orth) if orth is not None else key, 'def': text(e)[:500]})
    e.clear()
def resolve(l):
    k = norm(l)
    if k in entries: return k
    # Collatinus sometimes gives a neuter/feminine/oblique form as lemma: try citation-form endings
    for cut, adds in ((2, ('us','er','is','ius')), (1, ('us','is','er','ens','ans')), (3, ('ium','ius','is'))):
        if len(k) > cut + 2:
            for a in adds:
                if k[:-cut] + a in entries and k[:-cut] + a in want: return k[:-cut] + a
    return None
want_keys = set(want)
res = {l: resolve(l) for l in words['lemmas']}
out = {'source': 'Lewis & Short, A Latin Dictionary (1879), Perseus Digital Library, CC BY-SA 4.0',
       'entries': {l: entries[k][:3] for l, k in res.items() if k}}
json.dump(out, open(sys.argv[2],'w'), ensure_ascii=False, separators=(',',':'))
tot = len(words['lemmas']); hit = len(out['entries'])
print(f"lemmas {tot}, with L&S entry {hit} ({100*hit/tot:.1f}%)")
miss = [l for l, k in res.items() if not k]
print('sample misses:', miss[:40])
