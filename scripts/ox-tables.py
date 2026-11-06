#!/usr/bin/env python3
"""Maximus, *Opuscula* (mo-001..030; mo-015 is Latin-only and has no Greek tables): build the verify/ tables kt-to-site needs, the way mx-tables.py did for the Epistulae.
Run AFTER   MP_STRICT=1 MP_WORK=maximus-opuscula MP_DJVU=raw/pg091/091_djvu.xml MP_CMAP=data/pg-column-maps/pg091.json MP_BYCLASS=1 \\
            MP_RANGES=11-86,89-161 python3 scripts/mp-bands.py
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
T = 'translate/maximus-opuscula'; K = 'raw/kraken/maximus-opuscula/checked/'
nfc = lambda s: ud.normalize('NFC', s)
NOREAD = ('—', '-', '', '(omit)', '(delete)')
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
for f in sorted(glob.glob(f'{T}/mo-0[0-9][0-9].en.md')):
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
# plate-transcribed pages (110, 111, 114): the plate reader's '—' rows are junk lines that survive in checked/ (the transcription replaced the other lines only)
for (p_, i_, w_) in [(110, 38, 'blank space, specks only (plate transcription row is "—")'), (110, 40, 'duplicate OCR of the title line / noise (plate transcription row is "—")'),
                     (114, 16, 'show-through (mirror text) from the verso (plate transcription row is "—")')]:
    if (p_, i_) in inrange: drops[(p_, i_)] = 'not Greek text: ' + w_
with open(f'{T}/verify/GREEK-DROPS.tsv', 'w') as o:
    o.write('page\tline\ttext\twhy\n')
    for (p, i), w in sorted(drops.items()): o.write(f'p-{p:04d}\t{i}\t{line(p, i)}\t{w}\n')

# ---- BREAKS ----
breaks = {}
import unicodedata
def base(x): return ''.join(c for c in unicodedata.normalize('NFD', x.lower()) if unicodedata.category(c) in ('Ll', 'Lo'))
for r in csv.DictReader(open(f'{T}/PIECES.tsv'), delimiter='\t'):
    m = re.match(r'p-(\d+):(\d+)', r['start']); k = (int(m.group(1)), int(m.group(2)))
    if r['opusc'] == '12': continue                      # Latin only (mo-015): no Greek line
    while k in drops: k = (k[0], k[1] + 1)                 # a dropped caption line (Opusc. 18: p-0126:7 THEODORI BYZANTINI...): the break falls on the next kept line
    if k not in inrange: print('  PIECE START not in range', r['opusc'], k)
    else: breaks[k] = f'Opusc. {r["opusc"]}'
NUM = re.compile(r"^(\[b: .\] )?[α-ωϛϚ]{1,3}[ʹ΄´′]\.")
LEMMA_RANGES = [(93, 23, 110, 38), (148, 49, 152, 6), (156, 3, 158, 15), (158, 16, 161, 999)]   # florilegia: Opusc. 15, 23, 26, 27
def in_lemma(p, i): return any((p, i) >= (a, b) and (p, i) <= (c, d) for a, b, c, d in LEMMA_RANGES)
for (p, i), c in sorted(inrange.items()):
    if (p, i) in drops: continue
    t = re.sub(r'^\[b: .\] ', '', line(p, i))
    if NUM.match(line(p, i)): breaks.setdefault((p, i), 'numbered point')
    elif len(t.split()) <= 5 and base(t).startswith('σχολ'): breaks.setdefault((p, i), 'scholia head')
    elif in_lemma(p, i) and re.match(r'^Τοῦ ', t): breaks.setdefault((p, i), 'testimony lemma')
with open(f'{T}/verify/GREEK-BREAKS.tsv', 'w') as o:
    o.write('page\tline\tcaput\ty\tdrop\n')
    for (p, i), c in sorted(breaks.items()): o.write(f'p-{p:04d}\t{i}\t{c}\t\t\n')
from collections import Counter
print('breaks', len(breaks), Counter(re.sub(r'\d+', 'N', v) for v in breaks.values()))

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
MANUAL = [(153, 52, 'εφάλαιαπεοὶ', 'Κεφάλαια ιʹ περὶ', 'p0153.52: plate read by the builder 2026-11-06: Κεφάλαια ιʹ (the numeral ten, italic) περὶ τῶν δύο; the translator\'s (δέκα?) is the same word'),
          (29, 35, '(,', ',', 'stray row-like note-call debris at p0029.35'),
          (32, 6, '(,', ',', 'note-call debris at p0032.06 (stray row)'),
          (46, 16, 'Βποίησιν(.Οὐδὲν', 'ποίησιν. Οὐδὲν', 'stray row p0046.15: band letter and call debris across the line break'),
          (61, 15, '(,', ',', 'stray row p0061.15: note-call debris'),
          (140, 43, 'κυρίωσιν(', 'κυρίωσιν', 'note-call debris at p0140.43'),
          (48, 55, 'cι;', 'σι;', 'row p0048.55: Latin letter c for σ (translator reading, high)'),
          (152, 4, 'Θeoῦ εἰxόνa', 'Θεοῦ εἰκόνα', 'p0152.04: plate read by the builder 2026-11-06: Θεοῦ εἰκόνα'),
          (16, 38, 'πρoaíρeσiς.', 'προαίρεσις.', 'p0016.38: plate read by the builder 2026-11-06: προαίρεσις.'),
          (14, 6, 'βοvλí.', 'βουλή.', 'p0014.06: image-check row left ? (crop on the Latin); translator reading βουλή (Latin *voluntas*)'),
          (108, 27, 'φευκτὸςi', 'φευκτὸς ὁ', 'p0108.27: image-check row left ? (cut off); translator reading (Latin *cavendus utique modus*)'),
          (40, 40, 'ΛαοsεοςΣὸ ', '', 'stray row p0040.40: Latin/marginal leak before the heading'),
          (46, 5, ' (Ο,', ',', 'stray row p0046.05: note call (o) read as (Ο,'),
          (53, 43, ' Ο', '', 'stray row p0053.43: note call at the line end'),
          (57, 27, '-Σ', '-', 'stray row p0057.27: debris after the hyphen'),
          (81, 9, ' (,', ',', 'stray row p0081.09: note call debris'),
          (83, 40, ', Ρ,ς,', ',', 'stray row p0083.40: debris'),
          (89, 14, ' (.', '.', 'stray row p0089.14: note call (e) read as ('),
          (90, 39, '(,', ',', 'stray row p0090.39: note call debris'),
          (93, 24, ' (καὶ', ' καὶ', 'stray row p0093.24: call read as ('),
          (98, 5, ' ὃ ι', ' ὃ', 'stray row p0098.05: stray letters after ὃ'),
          (101, 35, ' ( τὴν', ' τὴν', 'stray row p0101.35: call read as ('),
          (108, 11, ' (,', ',', 'stray row p0108.11: note call debris'),
          (121, 36, '(', '', 'stray row p0121.36: call read as ('),
          (135, 26, ' (,', ',', 'stray row p0135.26: note call debris (the row spans the line break)'),
          (147, 31, 'καὶ]', 'καὶ', 'stray row p0147.31: bracket leaked at line end'),
          (149, 7, ',]', ',', 'stray row p0149.07: bracket leaked at line end'),
          (155, 38, '-]', '-', 'stray row p0155.38: bracket leaked at line end'),
          (155, 46, '-]', '-', 'stray row p0155.46: bracket leaked at line end'),
          (158, 1, 'ΑΤοῦ', 'Τοῦ', 'stray row p0158.01: band letter A fused to the first word')]
for p_, i_, a_, b_, why_ in MANUAL:
    if a_ in cur(p_, i_): q = dict(page=f'p-{p_:04d}', line=str(i_), **{'from': a_, 'to': b_}, source='OCR-TABLE manual (translator reading, not plate-checked): ' + why_); pat.append(q); new.append(q)
    else: print('  MANUAL not applicable', p_, i_)
for r in rows:
    if r['kind'] not in ('stray', 'space', 'heading') or (r['page'], r['line']) not in inrange or (r['page'], r['line']) in drops: continue
    a, b_ = r['printed'], r['reading']
    if r['kind'] == 'stray' and nfc(CALL.sub('', a)) == nfc(b_): continue          # a note call and nothing else: stripped by pattern
    if (r['page'], r['line']) == (153, 52): skipped.append((r, 'replaced by the plate reading in MANUAL')); continue
    if 'Εr.' in a: skipped.append((r, 'scholion siglum Εr. kept as printed (translator reading Ἑρ. not plate-checked)')); continue
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
