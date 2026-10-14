#!/usr/bin/env python3
"""Greek word-form frequency list from the Calfa PG corpus (sources/pg/calfa/PG*/PG*_text.txt).
Forms are normalized for lookup: NFC, lowercase, grave->acute, elision marks unified.
Output: raw/greek-lexicon.tsv  (form \t count)"""
import glob, re, unicodedata, collections, os
def key(w):
    w = unicodedata.normalize('NFD', w.lower()).replace('̀', '́')
    w = re.sub('[’᾿ʼ´΄\'’]', '’', unicodedata.normalize('NFC', w))
    return w.strip('’') if not w.endswith('’') else w
TOK = re.compile(r"[Ͱ-Ͽἀ-῿̀-ͯ]+[’᾿'´]?")
c = collections.Counter(); files = sorted(glob.glob('sources/pg/calfa/PG*/PG*_text.txt'))
for f in files:
    t = open(f, encoding='utf-8', errors='replace').read()
    t = re.sub(r'-\n\s*', '', t)                       # dehyphenate line breaks
    c.update(key(w) for w in TOK.findall(t))
with open('raw/greek-lexicon.tsv', 'w') as o:
    for w, n in c.most_common(): o.write(f'{w}\t{n}\n')
print(len(files), 'files,', sum(c.values()), 'tokens,', len(c), 'forms; >=2:', sum(1 for n in c.values() if n >= 2), ' >=3:', sum(1 for n in c.values() if n >= 3))
