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
Rows of kind ocr/space/subscript change letters; so do R verdicts on doubt/print rows (2026-11-14: they were skipped,
and νβʹ at Opuscula p0102.30 never reached the Greek) unless the row names no change: reading = printed, "(kept)", an
elision, a line-break join (`ἀντί-` → `ἀντίπαλον.`) or a band letter — listed as doubt-same/-break/-band in APPLIED.tsv.
A plate= form ends at the reader's own prose (first token with Latin letters, or a bare note number). A token is replaced on its own line only; a reading that spans a
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

def plate_form(comment):
    # the WHOLE plate form (a one-token read dropped Οἶδά, Ἰδοὺ …), up to a "(" note or the first word of the reader's
    # own prose: a token with Latin letters ("note key", "with colon like mark" leaked into the Greek, Opuscula
    # 2026-11-06) or a bare note number ("φύσις 42."). Asterisk note-calls are the apparatus's, never the text's.
    m = re.search(r'plate=(?:\[b: .\]\s*)?([^(\t]*)', comment or '')
    if not m: return None
    out = []
    for t in m.group(1).split():
        if re.search(r'[A-Za-z]', t) or re.fullmatch(r'\d+\.?', t): break
        out.append(t)
    pv = ' '.join(out).replace('*', '').strip()
    return pv or None

def doubt_skip(r):
    # a doubt/print row's R verdict is applied only where it names a change of letters on the line: a plate= form, or
    # a reading that differs from the printed form and is not a line-break join (ἀντί- → ἀντίπαλον.: the rest of the
    # word is already on the next line), an elision (… stands for words not in the row) or a "(kept)" decision
    rd, pr = clean(r['reading']), nfc(r['printed'])
    if '[b:' in r['reading'] or '[b:' in (r['comment'] or ''): return 'band'   # mp-bands.py places the letter, not this
    if plate_form(r['comment']): return None
    if not rd or rd == pr or rd.startswith('(') or '…' in rd or '…' in pr: return 'same'
    if pr.endswith('-') and rd.startswith(pr[:-1]): return 'break'
    return None

applied, prints, und = [], [], []
for r in rows:
    v, kind = r['verdict'], r['kind']
    if v == 'M': prints.append(r); continue
    if v == '?': und.append(r); continue
    if v != 'R' or kind not in ('ocr', 'space', 'subscript', 'doubt', 'print'): continue
    if kind in ('doubt', 'print'):
        why = doubt_skip(r)
        if why: applied.append((r['tag'], nfc(r['printed']), clean(r['reading']), f'{kind}-{why}', '')); continue
    m = re.match(r'p(\d{4})\.(\d+)', r['tag']); p, ln = f'p-{m.group(1)}', int(m.group(2))
    pv = plate_form(r['comment']); plate = bool(pv)
    if pv and '…' in pv: pv = pv.split()[0]                    # an elided form: only its first word is a reading
    to = nfc(pv.replace('_', ' ')) if pv else clean(r['reading'])
    to = re.sub(r'^\[b: .\]\s*', '', to)       # a band letter read off the plate is the BAND layer's (mp-bands.py), never a word
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
    for p, L in pages.items(): open(f'{K}/checked/{p}.txt', 'w').write('\n'.join(l.replace(',,', ',').replace(';;', ';') for l in L))   # a plate= form that carries its own comma
from collections import Counter
st = Counter(s for a in applied for s in a[3].split(','))
print(f'R rows {len(applied)} ({dict(st)}); M (print errors) {len(prints)}; undecided {len(und)}'
      + ('' if DRY else f'; wrote {len(pages)} pages to {os.path.relpath(K, ROOT)}/checked/'))
for a in applied:
    if 'NOT FOUND' in a[3]: print('  NOT FOUND', *a[:3])
