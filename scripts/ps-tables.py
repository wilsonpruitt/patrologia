#!/usr/bin/env python3
"""Maximus, *Expositio in Psalmum LIX* (ps-001..002, all Greek): build the verify/ tables kt-to-site needs, the way ox-tables.py did for the Opuscula.
Run AFTER   MP_STRICT=1 MP_WORK=maximus-ps59 MP_DJVU=raw/pg090/090_djvu.xml MP_CMAP=data/pg-column-maps/pg090.json MP_BYCLASS=1 \\
            MP_RANGES=431-439 python3 scripts/mp-bands.py
Writes translate/maximus-ps59/verify/: GREEK-DROPS.tsv, GREEK-BREAKS.tsv (a paragraph at every speaker label, at the recorder's
opening, at the closing narrative; one MID-LINE break at p-0195:8 is a '¶' sentinel patch that kt-to-site splits), GREEK-BANDS.tsv
(edited in place), GREEK-PATCHES.tsv (appended: OCR-table rows of kind stray/space/heading; idempotent). Run from ~/patrologia."""
import csv, json, re, os, unicodedata as ud, glob
T = 'translate/maximus-ps59'; K = 'raw/kraken/maximus-ps59/checked/'
nfc = lambda s: ud.normalize('NFC', s)
NOREAD = ('—', '-', '', '(omit)', '(delete)', '(none)')   # Mystagogia tables write (none)
def page_lines(p):
    f = f'{K}p-{p:04d}.txt'
    return open(f).read().split('\n') if os.path.exists(f) else None
chunks = []
for r in csv.DictReader(open(f'{T}/CHUNKS.tsv'), delimiter='\t'):
    a = re.match(r'p-(\d+):(\d+)', r['first']).groups(); b = re.match(r'p-(\d+):(\d+)', r['last']).groups()
    chunks.append((r['chunk'], int(a[0]), int(a[1]), int(b[0]), int(b[1])))
inrange = {}
for c, fp, fl, lp, ll in chunks:
    for p in range(fp, lp + 1):
        ls = page_lines(p)
        if ls is None: continue                         # duplicate leaf: no file
        for i in range((fl if p == fp else 1), (ll if p == lp else len(ls)) + 1): inrange[(p, i)] = c
def line(p, i): return page_lines(p)[i - 1].strip()

# ---- OCR-table rows ----
rows = []
for f in sorted(glob.glob(f'{T}/ps-0[0-9][0-9].en.md')):
    cid = os.path.basename(f)[:6]
    for l in open(f):
        m = re.match(r'\| (p\d{4})\.(\d+)( / [^|]*?)? \| (.*?) \| (.*?) \| (\w+) \| (\w+) \| (.*) \|$', l.rstrip('\n'))
        if m: rows.append(dict(chunk=cid, page=int(m.group(1)[1:]), line=int(m.group(2)), multi=bool(m.group(3)), printed=m.group(4).strip(),
                               reading=m.group(5).strip(), kind=m.group(7), why=m.group(8)))
print('OCR rows', len(rows))

# ---- DROPS ----
drops = {}
for r in rows:
    if r['kind'] == 'stray' and r['reading'] in NOREAD and (r['page'], r['line']) in inrange \
            and nfc(r['printed']).strip() == nfc(line(r['page'], r['line'])):
        drops[(r['page'], r['line'])] = 'not Greek text: ' + r['why'][:60]
    elif r['kind'] == 'stray' and r['reading'] in NOREAD:
        print('  NOT A WHOLE-LINE DROP (check):', r['page'], r['line'], repr(r['printed'][:40]), '| line:', repr(line(r['page'], r['line'])[:50]) if (r['page'], r['line']) in inrange else 'out of range')
for (p_, i_, w_) in [(431, 33, 'Latin title EJUSDEM leaked into the Greek'), (431, 34, 'Latin title EXPOSITIO IN PSALMUM LIX leaked into the Greek')]:
    if (p_, i_) in inrange: drops[(p_, i_)] = 'not Greek text: ' + w_
with open(f'{T}/verify/GREEK-DROPS.tsv', 'w') as o:
    o.write('page\tline\ttext\twhy\n')
    for (p, i), w in sorted(drops.items()): o.write(f'p-{p:04d}\t{i}\t{line(p, i)}\t{w}\n')

# ---- BANDS ----
bands = list(csv.DictReader(open(f'{T}/verify/GREEK-BANDS.tsv'), delimiter='\t'))
BK = {(b['page'], int(b['line'])): b for b in bands}
for (p, i) in list(drops):                                  # a dropped line hands its band to the next kept line
    pg = f'p-{p:04d}'; b = BK.get((pg, i))
    if b:
        j = i + 1
        while (p, j) in drops: j += 1
        if BK.get((pg, j)) is None: b['line'] = str(j); BK[(pg, j)] = b
        del BK[(pg, i)]
bands = [b for b in bands if BK.get((b['page'], int(b['line']))) is b]
bands = [b for b in bands if (int(b['page'][2:]), int(b['line'])) in inrange]   # mp-bands also records bands on p-0431 lines 1-30 (the preceding piece): not this work's
bands.sort(key=lambda b: (b['page'], int(b['line'])))
# generic: a stray row that is a lone band letter at a line end/start (glued after a hyphen, no space, or before a capital) -> strip it, recording
# the band (the letter IS the band marker, Migne's A-D). Lines without a band entry get one from the letter.
LOOK = {'Α': 'A', 'Β': 'B', 'Γ': 'C', 'Δ': 'D', 'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D'}
gen_n = 0
for r in rows:
    if r['kind'] != 'stray' or r['reading'] not in NOREAD or (r['page'], r['line']) not in inrange or (r['page'], r['line']) in drops: continue
    pr = r['printed'].strip()
    if pr.split(' ')[0] not in LOOK or len(pr.split(' ')[0]) != 1 or pr in ('Α Η,',) and False: continue
    pg = f'p-{r["page"]:04d}'; b = BK.get((pg, r['line']))
    if b and b['strip_from']: continue
    t = line(r['page'], r['line']); new = None
    first = pr.split(' ')[0]
    tail = ' ' + pr.split(' ', 1)[1] if ' ' in pr else ''
    if t.endswith(first + tail): new = t[:-len(first + tail)].rstrip(' ')
    elif t.startswith(first) and re.match(r'[Α-Ω]', t[1:2] or ''): new = t[1:]
    if new is None or new == t: print('  BAND STRIP not applied', pg, r['line'], repr(pr), '|', t[-30:]); continue
    if not b:
        b = dict(page=pg, line=str(r['line']), letter=LOOK[first], how='table: band letter read as text', strip_from='', strip_to=''); bands.append(b); BK[(pg, r['line'])] = b
    b['strip_from'], b['strip_to'] = t, new; gen_n += 1
print('generic band strips', gen_n)
with open(f'{T}/verify/GREEK-BANDS.tsv', 'w') as o:
    o.write('page\tline\tletter\thow\tstrip_from\tstrip_to\n')
    for b in bands: o.write('\t'.join([b['page'], b['line'], b['letter'], b['how'], b['strip_from'], b['strip_to']]) + '\n')
print('drops', len(drops), '| bands', len(bands), '| band strips', sum(1 for b in bands if b['strip_from']))

# ---- PATCHES ----
pf = f'{T}/verify/GREEK-PATCHES.tsv'
pat = [p for p in csv.DictReader(open(pf), delimiter='\t') if not p['source'].startswith('OCR-TABLE')]
bd = {(b['page'], int(b['line'])): b for b in bands}
CALL = re.compile(r'\s*\([^()\s]{1,3}\)|\s*[⁰¹²³⁴⁵⁶⁷⁸⁹]+')
def cur(p, i):
    t = line(p, i); b = bd.get((f'p-{p:04d}', i))
    if b and b['strip_from'] and t == b['strip_from']: t = b['strip_to']
    t = CALL.sub('', t)
    for q in pat:
        if q['page'] == f'p-{p:04d}' and int(q['line']) == i:
            a = q['from']
            if ' / ' in a: a = a.split(' / ')[-1]
            if a in t: t = t.replace(a, q['to'], 1)
    return t
new, skipped = [], []
MANUAL = [(431, 36, 'Να; ,λογραφίαν', 'λογραφίαν', 'stray row p0431.35: debris inside the word at the line turn; στη-|λογραφίαν'),
          (434, 28, 'φοβουμένοις σε-', 'φοβουμένοις σε', 'space row p0434.28: σε σημείωσιν are two words; the hyphen is Kraken\'s'),
          (434, 29, 'τόξου· (', 'τόξου·', 'stray row p0434.29: stray parenthesis at the line end'),
          (435, 45, 'Σκηνῶν ( διαμετρεῖ', 'Σκηνῶν διαμετρεῖ', 'stray row p0435.45: stray parenthesis mid-line')]
for p_, i_, a_, b_, why_ in MANUAL:
    if a_ in cur(p_, i_): q = dict(page=f'p-{p_:04d}', line=str(i_), **{'from': a_, 'to': b_}, source='OCR-TABLE manual (translator reading, not plate-checked): ' + why_); pat.append(q); new.append(q)
    else: print('  MANUAL not applicable', p_, i_)
for r in rows:
    if r['kind'] not in ('stray', 'space', 'heading') or (r['page'], r['line']) not in inrange or (r['page'], r['line']) in drops: continue
    a, b_ = r['printed'], r['reading']
    if r['kind'] == 'stray' and nfc(CALL.sub('', a)) == nfc(b_): continue          # a note call and nothing else: stripped by pattern
    if r['multi'] or ' / ' in a or '…' in a: skipped.append((r, 'multi-part')); continue
    if b_ in NOREAD:
        pr_ = a.strip(); t_ = cur(r['page'], r['line'])
        if r['kind'] == 'stray' and len(pr_) >= 3 and t_.count(pr_) == 1 and not (len(pr_.split(' ')[0]) == 1 and pr_.split(' ')[0] in 'ΑΒΓΔABCD'):
            q = dict(page=f'p-{r["page"]:04d}', line=str(r['line']), **{'from': pr_ + ' ' if t_.startswith(pr_ + ' ') else pr_}, to='',
                     source=f'OCR-TABLE {r["chunk"]} kind=stray (translator reading, not plate-checked): junk fragment removed: {r["why"][:60]}')
            pat.append(q); new.append(q); continue
        skipped.append((r, 'no reading')); continue
    t = cur(r['page'], r['line'])
    a2 = nfc(CALL.sub('', a))
    if nfc(a) not in nfc(t) and a2 not in nfc(t): skipped.append((r, 'printed form not in the (stripped, patched) line: ' + t[:60])); continue
    use = a if nfc(a) in nfc(t) else a2
    q = dict(page=f'p-{r["page"]:04d}', line=str(r['line']), **{'from': use, 'to': CALL.sub('', b_) if use == a2 else b_},
             source=f'OCR-TABLE {r["chunk"]} kind={r["kind"]} (translator reading, not plate-checked): {r["why"][:70]}')
    pat.append(q); new.append(q)
with open(pf, 'w') as o:
    o.write('page\tline\tfrom\tto\tsource\n')
    for q in pat: o.write('\t'.join([q['page'], q['line'], q['from'], q['to'], q['source']]) + '\n')
print('patches appended', len(new), '| skipped', len(skipped))
for r, why in skipped: print('  SKIP', r['chunk'], r['page'], r['line'], r['kind'], repr(r['printed'][:30]), '->', repr(r['reading'][:30]), '|', why)

# ---- BREAKS (after patches, so labels are the patched ones) ----
bd2 = {(b['page'], int(b['line'])): b for b in bands}
# Migne prints each verse of the psalm as its own line(s) before its exposition; the English sets each lemma as its own italic paragraph.
# BR = first Greek line of the title and of every lemma (read off checked/; hard-coded, no regex). PARA 
BR = {(431, 31): 'title', (431, 32): 'title', (431, 35): 'lemma',
      (433, 8): 'lemma', (433, 51): 'lemma', (434, 12): 'lemma', (434, 27): 'lemma', (435, 12): 'lemma',
      (436, 18): 'lemma', (436, 37): 'lemma', (437, 10): 'lemma', (437, 33): 'lemma', (437, 45): 'lemma',
      (438, 14): 'lemma', (438, 34): 'lemma', (438, 40): 'lemma', (438, 49): 'lemma', (439, 12): 'lemma'}
assert len(BR) == 18
# PARA = Migne's other line-start paragraph starts (the exposition after each lemma, the "Or again ..." paragraphs): one per English paragraph that has a Greek line-start twin.
# Mid-line English paragraph starts (p0432.22 "Εἰς διδαχὴν δὲ", p0433.24 "Τυχὸν δὲ") have no line-start twin and are left to the aligner.
PARA = {k: 'para' for k in [(432, 4), (433, 43), (434, 1), (434, 14), (434, 31), (435, 5), (435, 16), (435, 36), (435, 45),
                            (436, 3), (436, 9), (436, 14), (436, 21), (436, 39), (437, 4), (437, 11), (437, 17), (437, 25), (437, 34), (437, 46), (437, 50),
                            (438, 4), (438, 7), (438, 15), (438, 21), (438, 29), (438, 35), (438, 42), (438, 51), (439, 7), (439, 14)]}
breaks = dict(BR); breaks.update(PARA)
for k in breaks:
    assert k in inrange and k not in drops, k
with open(f'{T}/verify/GREEK-BREAKS.tsv', 'w') as o:
    o.write('page\tline\tcaput\ty\tdrop\n')
    for (p, i), c in sorted(breaks.items()): o.write(f'p-{p:04d}\t{i}\t{c}\t\t\n')
from collections import Counter
print('breaks', len(breaks), Counter(breaks.values()))
