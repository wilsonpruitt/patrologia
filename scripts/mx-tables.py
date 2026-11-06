#!/usr/bin/env python3
"""Maximus, *Epistulae* (me-001..028): build the verify/ tables kt-to-site needs, the way so-tables.py did for Sophronius.
Run AFTER   MP_STRICT=1 MP_WORK=maximus-epistulae MP_DJVU=raw/pg091/091_djvu.xml MP_CMAP=data/pg-column-maps/pg091.json MP_BYCLASS=1 \\
            MP_RANGES=200-265,272-317,324-327,332-359 python3 scripts/mp-bands.py
Writes (translate/maximus-epistulae/verify/):
  GREEK-BREAKS.tsv  paragraph break before: each of the 45 LETTER heads (LETTERS.json), each numbered scholion point (α΄.. at the
                    start of a line), Migne's italic subheadings inside Letters 12, 13, 15 (SUBHEADS, located by eye on the page text
                    against the italic lines of the English), and the ΣΧΟΛΙΟΝ./ΣΧΟΛΙΑ. heads
  GREEK-DROPS.tsv   whole lines that are not Greek text (kind=stray rows whose reading is '—'/'(omit)' and whose printed form is the whole line)
  GREEK-BANDS.tsv   (edited in place) the glued band letter of p-0274:1 stripped; bands on dropped lines move to the next kept line
  GREEK-PATCHES.tsv appended: OCR-table rows of kind stray/space/heading (translator readings, NOT plate-checked). Note calls
                    (a)..(z), (1).., ¹⁹ are NOT patched here: kt-to-site strips them by pattern (CONF stripcalls). Idempotent.
Run from ~/patrologia. Prints what it could not place."""
import csv, json, re, os, unicodedata as ud, glob
T = 'translate/maximus-epistulae'; K = 'raw/kraken/maximus-epistulae/checked/'
nfc = lambda s: ud.normalize('NFC', s)
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
for f in sorted(glob.glob(f'{T}/me-0[0-9][0-9].en.md')):
    cid = os.path.basename(f)[:6]
    for l in open(f):
        m = re.match(r'\| (p\d{4})\.(\d+)( / [^|]*?)? \| (.*?) \| (.*?) \| (\w+) \| (\w+) \| (.*) \|$', l.rstrip('\n'))
        if m: rows.append(dict(chunk=cid, page=int(m.group(1)[1:]), line=int(m.group(2)), multi=bool(m.group(3)), printed=m.group(4).strip(),
                               reading=m.group(5).strip(), kind=m.group(7), why=m.group(8)))
print('OCR rows', len(rows))

# ---- DROPS ----
drops = {}
for r in rows:
    if r['kind'] == 'stray' and r['reading'] in ('—', '-', '', '(omit)') and (r['page'], r['line']) in inrange \
            and nfc(r['printed']).strip() == nfc(line(r['page'], r['line'])):
        drops[(r['page'], r['line'])] = 'not Greek text: ' + r['why'][:60]
    elif r['kind'] == 'stray' and r['reading'] in ('—', '-', '', '(omit)'):
        print('  NOT A WHOLE-LINE DROP (check):', r['page'], r['line'], repr(r['printed'][:40]), '| line:', repr(line(r['page'], r['line'])[:50]) if (r['page'], r['line']) in inrange else 'out of range')
with open(f'{T}/verify/GREEK-DROPS.tsv', 'w') as o:
    o.write('page\tline\ttext\twhy\n')
    for (p, i), w in sorted(drops.items()): o.write(f'p-{p:04d}\t{i}\t{line(p, i)}\t{w}\n')

# ---- BREAKS ----
breaks = {}
for e in json.load(open(f'{T}/LETTERS.json')):
    m = re.match(r'p-(\d+):(\d+)', e['first']); breaks[(int(m.group(1)), int(m.group(2)))] = f'Letter {e["ep"]}'
NUM = re.compile(r"^(\[b: .\] )?[α-ωϛϚ]{1,3}[ʹ΄´′]\.")
for (p, i), c in sorted(inrange.items()):
    if (p, i) not in drops and NUM.match(line(p, i)): breaks.setdefault((p, i), 'numbered point')
# Migne's italic subheadings (found by eye against the English's italic lines; 253:41 "Ἑτέρως περὶ τῶν αὐτῶν" has blank lines around it in the base)
SUBHEADS = [(251, 45), (253, 1), (253, 41), (255, 19), (257, 1), (259, 4), (261, 3), (262, 35), (263, 36), (264, 43), (274, 14),
            (281, 3), (281, 27), (282, 33), (282, 47), (286, 25), (286, 51), (287, 42), (289, 9), (296, 31),
            (299, 11), (301, 30), (303, 5), (304, 36), (305, 10), (305, 31), (308, 5), (308, 31), (310, 17), (312, 25)]
for k in SUBHEADS:
    if k not in inrange or k in drops: print('  SUBHEAD not in range/dropped', k); continue
    breaks.setdefault(k, 'subheading')
with open(f'{T}/verify/GREEK-BREAKS.tsv', 'w') as o:
    o.write('page\tline\tcaput\ty\tdrop\n')
    for (p, i), c in sorted(breaks.items()): o.write(f'p-{p:04d}\t{i}\t{c}\t\t\n')
print('breaks', len(breaks), 'of which letters', sum(1 for v in breaks.values() if v.startswith('Letter')), 'numbered', sum(1 for v in breaks.values() if v == 'numbered point'), 'sub', sum(1 for v in breaks.values() if v == 'subheading'))

# ---- BANDS ----
bands = list(csv.DictReader(open(f'{T}/verify/GREEK-BANDS.tsv'), delimiter='\t'))
BK = {(b['page'], int(b['line'])): b for b in bands}
t = line(274, 1)
if t.startswith('Ἀ ') and not BK.get(('p-0274', 1), {}).get('strip_from'):
    b = BK.get(('p-0274', 1)) or dict(page='p-0274', line='1', letter='A', how='table: band A read as text', strip_from='', strip_to='')
    b['strip_from'], b['strip_to'] = t, t[2:]
    if ('p-0274', 1) not in BK: bands.append(b); BK[('p-0274', 1)] = b
for (p, i) in list(drops):                                  # a dropped line hands its band to the next kept line
    pg = f'p-{p:04d}'; b = BK.get((pg, i))
    if b:
        j = i + 1
        while (p, j) in drops: j += 1
        if BK.get((pg, j)) is None: b['line'] = str(j); BK[(pg, j)] = b
        del BK[(pg, i)]
bands = [b for b in bands if BK.get((b['page'], int(b['line']))) is b]
bands.sort(key=lambda b: (b['page'], int(b['line'])))
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
MANUAL = [(202, 23, 'πὸς,', 'πός,', 'stray row p0202.23 (note call (3) + accent of σκοπός across the line break)'),
          (346, 29, 'περι-', 'περὶ', 'space row p0346.29 (περὶ πάντα: spurious hyphen at the line end)')]
for p_, i_, a_, b_, why_ in MANUAL:
    if a_ in cur(p_, i_): q = dict(page=f'p-{p_:04d}', line=str(i_), **{'from': a_, 'to': b_}, source='OCR-TABLE manual (translator reading, not plate-checked): ' + why_); pat.append(q); new.append(q)
    else: print('  MANUAL not applicable', p_, i_)
for r in rows:
    if r['kind'] not in ('stray', 'space', 'heading') or (r['page'], r['line']) not in inrange or (r['page'], r['line']) in drops: continue
    a, b_ = r['printed'], r['reading']
    if r['kind'] == 'stray' and nfc(CALL.sub('', a)) == nfc(b_): continue          # a note call and nothing else: stripped by pattern
    if r['multi'] or ' / ' in a or '…' in a: skipped.append((r, 'multi-part')); continue
    if b_ in ('—', '-', '', '(omit)'): skipped.append((r, 'no reading')); continue
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
