#!/usr/bin/env python3
"""Sophronius (Greek chunks so-001..018): build the verify/ tables kt-to-site needs, the way mp-greek-breaks.py / mp-drops.py /
mp-bands.py did for Moschus. Run AFTER `MP_WORK=sophronius-orationes MP_RANGES=188-214,223-258,265-272,275-296 python3 scripts/mp-bands.py`.
Writes (translate/sophronius-orationes/verify/):
  GREEK-BREAKS.tsv  paragraph break before each section-numeral line (Αʹ. / αʹ. ..., garbled forms included) + Or. V's title
  GREEK-DROPS.tsv   whole lines that are not Greek text: NOTAE headings, leaked VARIAE LECTIONES lines, lone letters, Latin furniture
                    (the translators' kind=stray rows whose reading is '—' and whose printed form is the whole line, plus a few found by eye)
  GREEK-BANDS.tsv   (edited in place) glued trailing/leading band letters stripped so the letter becomes a [b: X] only
  GREEK-PATCHES.tsv appended: OCR-table rows of kind stray/space/heading (translator readings, NOT plate-checked: they remove
                    brackets, stray glyphs, glued junk, missing spaces, and repair garbled section numerals). Idempotent.
Run from ~/patrologia. Prints what it could not place."""
import csv, re, os, unicodedata as ud, glob
T = 'translate/sophronius-orationes'; K = 'raw/kraken/sophronius-orationes/checked/'
nfc = lambda s: ud.normalize('NFC', s)
chunks = []
for r in csv.DictReader(open(f'{T}/CHUNKS.tsv'), delimiter='\t'):
    if int(r['chunk'][3:]) > 18: continue
    a = re.match(r'p-(\d+):(\d+)', r['first']).groups(); b = re.match(r'p-(\d+):(\d+)', r['last']).groups()
    chunks.append((r['chunk'], int(a[0]), int(a[1]), int(b[0]), int(b[1])))
inrange = {}   # (pdf, line) -> chunk
for c, fp, fl, lp, ll in chunks:
    for p in range(fp, lp + 1):
        n = len(open(f'{K}p-{p:04d}.txt').read().split('\n'))
        for i in range((fl if p == fp else 1), (ll if p == lp else n) + 1): inrange[(p, i)] = c
def line(p, i): return open(f'{K}p-{p:04d}.txt').read().split('\n')[i - 1].strip()

# ---- the translators' OCR-table rows ----
rows = []
for f in sorted(glob.glob(f'{T}/so-0[01][0-9].en.md')):
    cid = os.path.basename(f)[:6]
    if int(cid[3:]) > 18: continue
    for l in open(f):
        m = re.match(r'\| (p\d{4})\.(\d+)( / [^|]*?)? \| (.*?) \| (.*?) \| (\w+) \| (\w+) \| (.*) \|$', l.rstrip('\n'))
        if m: rows.append(dict(chunk=cid, page=int(m.group(1)[1:]), line=int(m.group(2)), multi=bool(m.group(3)), printed=m.group(4).strip(),
                               reading=m.group(5).strip(), kind=m.group(7), why=m.group(8)))

# ---- DROPS ----
drops = {}   # (pdf, line) -> why
for r in rows:
    if r['kind'] == 'stray' and r['reading'] in ('—', '-', '') and (r['page'], r['line']) in inrange \
            and nfc(r['printed']) == nfc(line(r['page'], r['line'])):
        drops[(r['page'], r['line'])] = 'leaked foot-of-page line (' + r['why'][:50] + ')'
for r in rows:   # doubt rows the plate settled as P that are NOTAE headings
    if r['kind'] == 'doubt' and re.fullmatch(r'[νΝ][οΟ][τΤ][αΑεΕ]+\.?', r['printed']) and nfc(r['printed']) == nfc(line(r['page'], r['line'])):
        drops[(r['page'], r['line'])] = 'NOTAE heading'
drops[(211, 16)] = 'lone band letter (the band is kept: moved to the next line)'
drops[(223, 4)] = 'Latin furniture (editorial siglum line)'
manual_missing = [(p, i) for (p, i) in drops if (p, i) not in inrange]
# a heading line that is the last of its page and merely NOTAE: also any remaining νοτ* line in range
for (p, i), c in inrange.items():
    t = line(p, i)
    if re.fullmatch(r'[νΝ][οΟ][τΤ][αΑεΕ]*\.?', t) and (p, i) not in drops: drops[(p, i)] = 'NOTAE heading'
with open(f'{T}/verify/GREEK-DROPS.tsv', 'w') as o:
    o.write('page\tline\ttext\twhy\n')
    for (p, i), w in sorted(drops.items()):
        if (p, i) in inrange: o.write(f'p-{p:04d}\t{i}\t{line(p, i)}\t{w}\n')

# ---- BREAKS ----
SECT = re.compile(r"^(\[b: .\] )?[Ͱ-Ͼἀ-῾Ϛ]{0,3}[ʹ΄´′]\.?(\s|$)")
sect_pat = re.compile(r"^[Ͱ-Ͼἀ-῾Ϛ]{1,3}[ʹ΄´′]")
breaks = []
for (p, i), c in sorted(inrange.items()):
    if (p, i) in drops: continue
    t = line(p, i)
    if (sect_pat.match(t) or t.startswith('ʹ')) and not (i == 1 and False):
        # first line of a chunk needs no leading break
        breaks.append((p, i, t.split()[0]))
breaks.append((269, 17, 'Or. V title'))
breaks = sorted(set(breaks))
with open(f'{T}/verify/GREEK-BREAKS.tsv', 'w') as o:
    o.write('page\tline\tcaput\ty\tdrop\n')
    for p, i, c in breaks: o.write(f'p-{p:04d}\t{i}\t{c}\t\t\n')

# ---- BANDS (strip glued letters that mp-bands.py's regexes missed) ----
bands = list(csv.DictReader(open(f'{T}/verify/GREEK-BANDS.tsv'), delimiter='\t'))
BK = {(b['page'], int(b['line'])): b for b in bands}
changed = 0
for (p, i), c in sorted(inrange.items()):
    pg = f'p-{p:04d}'; t = line(p, i)
    b = BK.get((pg, i))
    if b and b['strip_from']: continue
    new = None
    m = re.search(r'(?<=[a-zά-ώἀ-ῼ\-.·,;᾿])([ΑΒΓΔΣΟ])$', t)
    if m and (p, i) not in drops: new = t[:m.start()]
    elif (p, i) in ((200, 1), (250, 1)) and t[0] == 'Α': new = t[1:]     # glued leading band A (Αετέθησαν = ετέθησαν; Αῥύσηται = ῥύσηται)
    if new is None: continue
    if b is None:
        L = {'Α': 'A', 'Β': 'B', 'Γ': 'C', 'Δ': 'D', 'Σ': 'C', 'Ο': 'D'}[t[m.start()] if m else t[0]]
        near = [x for (pp, ii), x in BK.items() if pp == pg and abs(ii - i) <= 2 and x['letter'] == L]
        for x in near: x['letter'] = '?'      # the glued letter is the evidence: it moves the band here
        b = dict(page=pg, line=str(i), letter=L, how='kraken-glued', strip_from='', strip_to=''); bands.append(b); BK[(pg, i)] = b
    b['strip_from'], b['strip_to'] = t, new; changed += 1
# a dropped lone band letter hands its band to the next kept line
for (p, i) in list(drops):
    pg = f'p-{p:04d}'; b = BK.get((pg, i))
    if b:
        j = i + 1
        while (p, j) in drops: j += 1
        b2 = BK.get((pg, j))
        if b2 is None: b['line'] = str(j); BK[(pg, j)] = b
        del BK[(pg, i)]
bands = [b for b in bands if b['letter'] != '?' and BK.get((b['page'], int(b['line']))) is b]
bands.sort(key=lambda b: (b['page'], int(b['line'])))
with open(f'{T}/verify/GREEK-BANDS.tsv', 'w') as o:
    o.write('page\tline\tletter\thow\tstrip_from\tstrip_to\n')
    for b in bands: o.write('\t'.join([b['page'], b['line'], b['letter'], b['how'], b['strip_from'], b['strip_to']]) + '\n')
print('drops', len(drops), '| breaks', len(breaks), '| band strips added', changed, '| bands', len(bands))

# ---- PATCHES (stray / space / heading rows) ----
pf = f'{T}/verify/GREEK-PATCHES.tsv'
pat = list(csv.DictReader(open(pf), delimiter='\t'))
pat = [p for p in pat if not p['source'].startswith('OCR-TABLE')]
# the p-0191:1 patch carried the glued band letter in `from`; the band is stripped first now
for p in pat:
    if (p['page'], p['line']) == ('p-0191', '1') and p['from'] == 'συ-Α': p['from'], p['to'] = 'συ-', 'συν-'
bd = {(b['page'], int(b['line'])): b for b in bands}
def cur(p, i):
    t = line(p, i); b = bd.get((f'p-{p:04d}', i))
    if b and b['strip_from'] and t == b['strip_from']: t = b['strip_to']
    for q in pat:
        if q['page'] == f'p-{p:04d}' and int(q['line']) == i:
            a = q['from']
            if ' / ' in a: a = a.split(' / ')[-1]
            if a in t: t = t.replace(a, q['to'], 1)
    return t
new, skipped = [], []
MANUAL = [(229, 27, ' [ʹ', ''), (233, 43, ' Ο', ''), (239, 44, ' Ο', ''), (240, 3, ' «F', ''), (296, 43, 'ψ ', ''), (287, 31, 'στεφάνους εἰ', 'στεφάνους εἰ-')]   # glued junk the table gives as '—'
for p_, i_, a_, b_ in MANUAL:
    q = dict(page=f'p-{p_:04d}', line=str(i_), **{'from': a_, 'to': b_}, source='OCR-TABLE manual: glued gutter junk (stray row, reading \u2014), not plate-checked')
    t_ = cur(p_, i_)
    if a_ in t_: pat.append(q); new.append(q)
    else: print('  MANUAL not applicable', p_, i_, repr(t_[-20:]))
for r in rows:
    if r['kind'] not in ('stray', 'space', 'heading') or (r['page'], r['line']) not in inrange or (r['page'], r['line']) in drops: continue
    if r['reading'] in ('—', '-', ''):
        if (r['page'], r['line']) == (277, 1): r['printed'], r['reading'] = ' Αsi, vεr ει-', ''   # glued band A + Latin-column bleed
        else: skipped.append((r, 'no reading')); continue
    if r['multi'] or ' / ' in r['printed'] or '…' in r['printed']: skipped.append((r, 'multi-part')); continue
    t = cur(r['page'], r['line']); a = r['printed']
    if r['page'] == 223 and r['line'] == 1: a = a                       # Σωφρο- ΑSα Πσίαα Sο̈- : exact string in the line
    if a not in t:
        # tolerate the table's NFC vs the line's NFD
        found = next((m for m in re.finditer(re.escape(nfc(a)), nfc(t))), None)
        skipped.append((r, 'printed form not in the (stripped, patched) line: ' + t[:60])); continue
    if r['kind'] == 'heading' and r['reading'] == 'ʹ': continue
    q = dict(page=f'p-{r["page"]:04d}', line=str(r['line']), **{'from': a, 'to': r['reading']},
             source=f'OCR-TABLE {r["chunk"]} kind={r["kind"]} (translator reading, not plate-checked): {r["why"][:70]}')
    pat.append(q); new.append(q)
with open(pf, 'w') as o:
    o.write('page\tline\tfrom\tto\tsource\n')
    for q in pat: o.write('\t'.join([q['page'], q['line'], q['from'], q['to'], q['source']]) + '\n')
print('patches appended', len(new), '| skipped', len(skipped))
for r, why in skipped: print('  SKIP', r['chunk'], r['page'], r['line'], r['kind'], repr(r['printed'][:30]), '->', repr(r['reading'][:30]), '|', why)
