"""Apply image-check verdicts to the rule-passed Greek (kt method, 2026-11-04).

Usage: python3 scripts/kt-apply.py <work> [--dry]
  reads   raw/kraken/<work>/ruled/p-*.txt, translate/<work>/IMAGE-CHECK.tsv (kt-verdict.py)
  writes  raw/kraken/<work>/checked/p-*.txt   (the Greek kt-to-site.py displays; same line numbers as text/ and ruled/)
          translate/<work>/verify/APPLIED.tsv      every R row: applied / already / NOT FOUND
          translate/<work>/verify/PRINT-ERRORS.tsv every M row: Migne prints the faulty form (for the [sic:] layer)
          translate/<work>/verify/GREEK-PATCHES.tsv (header only if absent: kt-to-site.py reads it)

Verdicts: R = plate shows the corrected reading -> apply (a `plate=<form>` comment overrides the translator's reading,
          because the plate is the authority, not the translator) · M = Migne's misprint -> Greek UNCHANGED, recorded ·
          P = Kraken read the plate right -> nothing to do · ? = undecided -> nothing to do, listed.
Only rows of kind ocr/space/subscript change letters. A token is replaced on its own line only; a reading that spans a
line break (`a / b`) is applied piece by piece. Punctuation-only rows are applied like any other.
"""
import csv, glob, os, re, shutil, sys, unicodedata as ud

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
work = sys.argv[1]; DRY = '--dry' in sys.argv
K = os.path.join(ROOT, 'raw/kraken', work); T = os.path.join(ROOT, 'translate', work)
nfc = lambda s: ud.normalize('NFC', s)
rows = list(csv.DictReader(open(f'{T}/IMAGE-CHECK.tsv'), delimiter='\t'))

pages = {}
for f in sorted(glob.glob(f'{K}/ruled/p-*.txt')):
    pages[os.path.basename(f)[:-4]] = open(f).read().split('\n')

def clean(s):
    s = re.sub(r'\s*\((\?|[^)]*\?)\)\s*$', '', s)             # trailing "(?)" or "(…?)" hedges
    s = re.sub(r'\s*\(([^)]*)\)\s*$', '', s) if '(' in s and not s.startswith('(') else s   # glosses like "(φιλόχριστος)"
    return nfc(s.replace('?', '').strip())

applied, prints, und = [], [], []
for r in rows:
    v, kind = r['verdict'], r['kind']
    if v == 'M': prints.append(r); continue
    if v == '?': und.append(r); continue
    if v != 'R' or kind not in ('ocr', 'space', 'subscript'): continue
    m = re.match(r'p(\d{4})\.(\d+)', r['tag']); p, ln = f'p-{m.group(1)}', int(m.group(2))
    plate = re.search(r'plate=(\S+)', r['comment'] or '')
    to = nfc(plate.group(1).replace('_', ' ')) if plate else clean(r['reading'])
    frm = nfc(r['printed'])
    fp = [x.strip() for x in frm.split('/')]; tp = [x.strip() for x in to.split('/')]
    if len(tp) != len(fp): tp = [to] + [''] * (len(fp) - 1) if len(fp) > 1 else [to]
    status = []
    def across(a, b):
        # the word may straddle a line break, written joined by the translator (ἀποθάνη for ἀπο- / θάνη) or with
        # the hyphen inside it (ἐξ-ἕβαλεν); look on the tagged line and its neighbours, join each line with the next,
        # match without the hyphen, then put the break back after the same number of characters
        a0, b0 = a.replace('-', '').replace('/', ''), b.replace('-', '').replace('/', '')
        L = pages.get(p)
        if not L: return None
        for i in (ln - 1, ln - 2, ln):
            if not (0 <= i < len(L) - 1): continue
            top = nfc(L[i]); bot = nfc(L[i + 1])
            if not top.endswith('-'): continue
            joined = top[:-1] + bot; cut = len(top) - 1
            j = joined.find(a0)
            if j < 0 or not (j < cut < j + len(a0)): continue
            k = cut - j                                          # characters of the word before the break
            # anchor the break on whichever side the correction left untouched: διλα-|ψάντων → διαλαμ-|ψάντων
            if b0.endswith(a0[k:]) and len(b0) - len(a0[k:]) > 0: k = len(b0) - len(a0[k:])
            elif not b0.startswith(a0[:k]):
                pass                                             # both sides changed: keep the count, reviewed below
            if ' ' in b0:                                        # two words, not a broken one: no hyphen at the break
                w1, w2 = b0.split(' ', 1); new = joined[:j] + w1 + '\n' + w2 + joined[j + len(a0):]
            else:
                new = joined[:j] + b0[:k] + '-' + '\n' + b0[k:] + joined[j + len(a0):]
            L[i], L[i + 1] = new.split('\n'); return 'applied~'
        return None
    if len(fp) == 2 and fp[0].endswith('-'):                    # "κέλλη- / μου": the break written with a slash
        fp, tp = [fp[0][:-1] + fp[1]], [tp[0].rstrip('-') + (tp[1] if len(tp) > 1 else '')]
    if len(fp) == 1 and not any(fp[0] in nfc(x) for x in pages.get(p, [])[max(ln - 2, 0):ln + 1]):
        st = across(fp[0], tp[0])
        if st: applied.append((r['tag'], frm, to, st, 'plate=' if plate else '')); continue
    for k, (a, b) in enumerate(zip(fp, tp)):
        L = pages.get(p); i = ln - 1 + k
        if L is None or i >= len(L): status.append('NOT FOUND'); continue
        line = nfc(L[i])
        if not a or a in ('(absent)',): status.append('skip'); continue
        if a == b or (b and b in line and a not in line): status.append('already'); continue
        if a in line:
            L[i] = line.replace(a, b, 1) if b else line; status.append('applied')
        else:
            near = [j for j in (i - 1, i + 1) if 0 <= j < len(L) and a in nfc(L[j])]   # tag off by one line
            if near:
                L[near[0]] = nfc(L[near[0]]).replace(a, b, 1); status.append('applied±1')
            else:
                status.append('NOT FOUND')
    applied.append((r['tag'], frm, to, ','.join(status), 'plate=' if plate else ''))

os.makedirs(f'{T}/verify', exist_ok=True)
with open(f'{T}/verify/APPLIED.tsv', 'w') as o:
    o.write('tag\tfrom\tto\tstatus\tsource\n'); o.writelines('\t'.join(a) + '\n' for a in applied)
with open(f'{T}/verify/PRINT-ERRORS.tsv', 'w') as o:
    o.write('chunk\ttag\tprinted\treading\tcomment\n')
    o.writelines(f"{r['chunk']}\t{r['tag']}\t{r['printed']}\t{r['reading']}\t{r['comment']}\n" for r in prints)
if not os.path.exists(f'{T}/verify/GREEK-PATCHES.tsv'):
    open(f'{T}/verify/GREEK-PATCHES.tsv', 'w').write('page\tline\tfrom\tto\tsource\n')
if not DRY:
    os.makedirs(f'{K}/checked', exist_ok=True)
    for p, L in pages.items(): open(f'{K}/checked/{p}.txt', 'w').write('\n'.join(L))
from collections import Counter
st = Counter(s for a in applied for s in a[3].split(','))
print(f'R rows {len(applied)} ({dict(st)}); M (print errors) {len(prints)}; undecided {len(und)}'
      + ('' if DRY else f'; wrote {len(pages)} pages to {os.path.relpath(K, ROOT)}/checked/'))
for a in applied:
    if 'NOT FOUND' in a[3]: print('  NOT FOUND', *a[:3])
