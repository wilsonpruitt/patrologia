#!/usr/bin/env python3
"""Maximus Opuscula, mo-015 (Opusc. 12, Latin only): mechanical OCR residue the plate check did not flag (the djvu Latin of pp. 87-88 is poor).
Only fixes whose form is certain from the letter shapes (ct/cst for et/est, z/x/: for the ae ligature, i/l/c confusions in common words).
Writes translate/maximus-opuscula/verify/LATIN-RESIDUE-FIXES.tsv (chunk, tag, printed, latin), read by scripts/kt-apply-latin.py.
Run: kt-apply-latin.py once (R rows), this script (reads latin-checked/mo-015.tsv), kt-apply-latin.py again. Not plate-read: reported as such."""
import os, re, subprocess, sys, unicodedata as ud
RF = 'translate/maximus-opuscula/verify/LATIN-RESIDUE-FIXES.tsv'
if os.path.exists(RF): os.remove(RF)                       # regenerate from the text WITHOUT residue fixes
subprocess.run([sys.executable, 'scripts/kt-apply-latin.py', 'maximus-opuscula'], check=True, stdout=subprocess.DEVNULL)
nfc = lambda s: ud.normalize('NFC', s)
FIX = {'ct': 'et', 'cst': 'est', 'catholicz': 'catholicæ', 'quz': 'quæ', 'przdicavit': 'prædicavit', 'sux': 'suæ', 'suz': 'suæ',
       'prxferre': 'præferre', 'hzc': 'hæc', 'pr:esumptionis': 'præsumptionis', 'h:ec': 'hæc', 'Jeremix': 'Jeremiæ', 'catholic:': 'catholicæ',
       'pap:e': 'papæ', 'Roman:e': 'Romanæ', 'Roman:': 'Romanæ', 'quie': 'quæ', 'colestibus': 'cœlestibus', 'onmibus': 'omnibus',
       'oinnes': 'omnes', 'jussienes': 'jussiones', 'stridentcm': 'stridentem', 'menlis': 'mentis', 'specialc': 'speciale', 'autcm': 'autem',
       'fueril': 'fuerit', 'Barbaroruin': 'Barbarorum', 'obsecraus': 'obsecrans', 'obtestaudo': 'obtestando', 'illani': 'illam',
       'quiddain': 'quiddam', 'rcprobum': 'reprobum', 'maie': 'male', 'scntientein': 'sentientem', 'přo-': 'pro-', 'coguominari': 'cognominari',
       'apostoiica': 'apostolica', 'doncc': 'donec', 'Denm': 'Deum', 'nostrüm': 'nostrum', 'ltaque': 'Itaque', 'quippc': 'quippe', 'boc': 'hoc',
       'oim-': 'om-', 'babeant': 'habeant', 'adhue': 'adhuc', 'abunzantius': 'abundantius', 'vclit.': 'velit.', 'vclit': 'velit', 'cnim': 'enim',
       'crgo': 'ergo', 'dcin': 'dein', 'dcinde': 'deinde', 'pc-': 'pe-', 'Árcadius': 'Arcadius', 'obtestaudo': 'obtestando', 'cecidit.': 'cecidit.',
       'catho- -': 'catho-', 'potestatem. .': 'potestatem.'}
CTX = [('pro ca ', 'pro ea '), ('ab co ', 'ab eo '), ('non ci,', 'non ei,')]
rows = [('p0087.L.01', 'signif-', 'signifi-'), ('p0087.L.02', 'are', 'care')]   # plate read 2026-11-06: signifi-/care (the c of care lost in the scan OCR)
for l in open('raw/kraken/maximus-opuscula/latin-checked/mo-015.tsv'):
    tag, t = l.rstrip('\n').split('\t', 1)
    body = re.sub(r'^\[b: .\] ', '', t)
    for a, b in CTX:
        if a in body: rows.append((tag, a.strip(), b.strip()))
    for k, v in FIX.items():
        if ' ' in k:
            if k in body: rows.append((tag, k, v))
            continue
        for m in re.finditer(r'(?<![\w:])' + re.escape(k) + r'(?![\w:])' if not k[-1] in '-:.' else r'(?<![\w:])' + re.escape(k), body):
            rows.append((tag, k, v))
    if body.startswith('ca recipiatur'): rows.append((tag, 'ca', 'ea'))
with open('translate/maximus-opuscula/verify/LATIN-RESIDUE-FIXES.tsv', 'w') as o:
    o.write('chunk\ttag\tprinted\tlatin\n')
    for tag, a, b in rows: o.write(f'mo-015\t{tag}\t{a}\t{b}\n')
print(len(rows), 'residue fixes')
subprocess.run([sys.executable, 'scripts/kt-apply-latin.py', 'maximus-opuscula'], check=True, stdout=subprocess.DEVNULL)
