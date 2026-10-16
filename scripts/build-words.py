#!/usr/bin/env python3
"""Phase C: build <work>.words.json (token form -> all Collatinus analyses).
Usage: ~/.venvs/collatinus/bin/python scripts/build-words.py 9741 site/pl/139/canones.words.json
Display text is untouched; normalization is for analysis only. Analyses are automatic and unranked."""
import re, glob, sys, json, unicodedata
from pycollatinus import Lemmatiseur

def norm(w):
    w = unicodedata.normalize('NFD', w.lower())
    w = ''.join(c for c in w if not unicodedata.combining(c))
    return w.replace('æ','ae').replace('œ','oe').replace('j','i').replace('v','u')
def variants(w):
    n = norm(w); out = [n]
    for a,b in (('ae','e'),('oe','e'),('e','ae'),('ti','ci'),('ci','ti'),('ph','f')):
        if a in n: out.append(n.replace(a,b))
    return out

EN = {'nominatif':'nom.','vocatif':'voc.','accusatif':'acc.','génitif':'gen.','datif':'dat.','ablatif':'abl.','locatif':'loc.',
 'singulier':'sg.','pluriel':'pl.','masculin':'m.','féminin':'f.','neutre':'n.','1ère':'1st','2ème':'2nd','3ème':'3rd',
 'indicatif':'indic.','subjonctif':'subj.','impératif':'imper.','infinitif':'inf.','présent':'pres.','imparfait':'impf.',
 'parfait':'perf.','futur':'fut.','antérieur':'(anterior)','PQP':'plupf.','actif':'act.','passif':'pass.',
 'participe':'participle','adjectif':'gerundive','verbal':'','gérondif':'gerund','supin':'supine','en':'in','positif':'positive',
 'comparatif':'comparative','superlatif':'superlative','-um':'-um','-u':'-u','-':''}
def en(m):
    out = ' '.join(EN.get(w, w) for w in m.split())
    return re.sub(r'\s+',' ',out).strip()
idno, outp = sys.argv[1], sys.argv[2]
L = Lemmatiseur()
forms = {}; lemmas = {}
nt = 0
for f in sorted(glob.glob(f'src/latin/{idno}/*.md')):
    t = open(f).read().split('---',2)[2]
    t = re.sub(r'⟦[^⟧]*⟧','',t); t = re.sub(r'\[[^\]]*\]','',t)
    for w in re.findall(r"[A-Za-zÀ-ÿæœÆŒ]+", t):
        nt += 1
        k = norm(w)
        if k in forms: continue
        res, via = [], None
        for v in variants(w):
            res = list(L.lemmatise(v))
            if res: via = v; break
        seen = set(); out = []
        for a in res:
            lem = a['lemma']
            li = lemmas.setdefault(lem, len(lemmas))
            key = (li, en(a['morph']))
            if key not in seen: seen.add(key); out.append([li, key[1]])
        forms[k] = {'a': out} if via == k or not via else {'a': out, 'via': via}
        if not out: forms[k] = {'a': []}
json.dump({'work': idno, 'engine': 'Collatinus (pycollatinus), automatic, unranked',
           'lemmas': [l for l,_ in sorted(lemmas.items(), key=lambda x:x[1])],
           'forms': forms}, open(outp,'w'), ensure_ascii=False, separators=(',',':'))
print(nt, 'tokens;', len(forms), 'forms;', len(lemmas), 'lemmas')
