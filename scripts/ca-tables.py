#!/usr/bin/env python3
"""Maximus, *Capita alia* (ca-001..005, all Greek; adapted from th-tables.py 2026-11-21): build the verify/ tables kt-to-site needs.
Run AFTER   MP_STRICT=1 MP_WORK=maximus-capita-alia MP_DJVU=raw/pg090/090_djvu.xml MP_CMAP=data/pg-column-maps/pg090.json MP_BYCLASS=1 \\
            MP_RANGES=714-744 python3 scripts/mp-bands.py
Writes translate/maximus-capita-alia/verify/: GREEK-DROPS.tsv, GREEK-BREAKS.tsv (title block, the dedicatory verses as ONE paragraph, a break at every
one of the 243 chapter starts, and the three 'Of the same' couplets), GREEK-BANDS.tsv (edited in place; BAND_SET = plate-read pages), GREEK-PATCHES.tsv
(appended: OCR-table rows of kind stray/space/heading; idempotent). Run from ~/patrologia."""
import csv, json, re, os, unicodedata as ud, glob
T = 'translate/maximus-capita-alia'; K = 'raw/kraken/maximus-capita-alia/checked/'
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
for f in sorted(glob.glob(f'{T}/ca-0[0-9][0-9].en.md')):
    cid = os.path.basename(f)[:6]
    for l in open(f):
        m = re.match(r'\| (p\d{4})\.(\d+)( / [^|]*?)? \| (.*?) \| (.*?) \| (\w+) \| (\w+) \| (.*) \|$', l.rstrip('\n'))
        if m: rows.append(dict(chunk=cid, page=int(m.group(1)[1:]), line=int(m.group(2)), multi=bool(m.group(3)), printed=m.group(4).strip(),
                               reading=m.group(5).strip(), kind=m.group(7), why=m.group(8)))
for r in rows:
    if r['reading'].startswith('(Latin'): r['reading'] = '—'      # the translator's note for a leaked Latin heading line, e.g. «(Latin heading CAPITA ALIA)»: a drop
for r in rows:
    if r['page'] == 715 and r['line'] == 1 and r['reading'].startswith('ζουσα ('): r['reading'] = 'ζουσα'      # the table's gloss «(ἀτιμά-ζουσα)» is the translator's explanation of the hyphenated word, not text
print('OCR rows', len(rows))

# ---- DROPS ----
drops = {}
for r in rows:
    if r['kind'] == 'stray' and r['reading'] in NOREAD and (r['page'], r['line']) in inrange \
            and nfc(r['printed']).strip() == nfc(line(r['page'], r['line'])):
        drops[(r['page'], r['line'])] = 'not Greek text: ' + r['why'][:60]
    elif r['kind'] == 'stray' and r['reading'] in NOREAD:
        print('  NOT A WHOLE-LINE DROP (check):', r['page'], r['line'], repr(r['printed'][:40]), '| line:', repr(line(r['page'], r['line'])[:50]) if (r['page'], r['line']) in inrange else 'out of range')
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
bands = [b for b in bands if (int(b['page'][2:]), int(b['line'])) in inrange]
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
# BAND_SET: pages where mp-bands defaulted or fitted a line the plate does not bear out. The gutter letters were located on the plate 2026-11-21 (dark blobs in the
# gutter channel, nearest Greek line to the letter's centre; a letter standing in a paragraph gap goes to the first line after the gap; where a letter stands midway
# between two lines the nearer one is taken). Pages not listed are mp-bands' own fit/default, confirmed against the same blobs. p-0744: only A falls in our range.
BAND_SET = {'p-0716': [(1, 'A'), (16, 'B'), (30, 'C'), (41, 'D')], 'p-0717': [(1, 'A'), (15, 'B'), (29, 'C'), (42, 'D')],
            'p-0718': [(1, 'A'), (14, 'B'), (27, 'C'), (41, 'D')], 'p-0720': [(1, 'A'), (16, 'B'), (29, 'C'), (41, 'D')],
            'p-0722': [(1, 'A'), (15, 'B'), (29, 'C'), (43, 'D')], 'p-0727': [(1, 'A'), (16, 'B'), (31, 'C'), (44, 'D')],
            'p-0729': [(1, 'A'), (12, 'B'), (24, 'C'), (38, 'D')], 'p-0731': [(1, 'A'), (15, 'B'), (29, 'C'), (44, 'D')],
            'p-0734': [(1, 'A'), (15, 'B'), (30, 'C'), (42, 'D')], 'p-0736': [(1, 'A'), (15, 'B'), (28, 'C'), (42, 'D')],
            'p-0740': [(1, 'A'), (16, 'B'), (30, 'C'), (43, 'D')], 'p-0742': [(1, 'A'), (16, 'B'), (30, 'C')]}
old = {(b['page'], int(b['line'])): b for b in bands if b['page'] in BAND_SET}          # keep the glued-letter strips mp-bands found, where the line is unchanged
bands = [b for b in bands if b['page'] not in BAND_SET]
for pg_, lst_ in BAND_SET.items():
    for ln_, let_ in lst_:
        o_ = old.get((pg_, ln_))
        bands.append(dict(page=pg_, line=str(ln_), letter=let_, how='plate read 2026-11-21 (gutter letter)',
                          strip_from=o_['strip_from'] if o_ else '', strip_to=o_['strip_to'] if o_ else ''))
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
MANUAL = [(716, 48, 'τέμνεν', 'τέμνε-', 'kt-apply NOT FOUND: the line-end hyphen (τέμνε-|ται εἰς)'), (716, 49, 'ταιεἰς', 'ται εἰς', 'kt-apply NOT FOUND: lost space after the hyphenated word'),
          (730, 1, 'ραʹ·', 'ρά·', 'kt-apply NOT FOUND: πτερά· (πτε-|ρά·), accent; the keraia is not on the plate'),
          (738, 35, 'οἳ]', 'οἱ', 'kt-apply NOT FOUND: οἱ καρποὶ (the word is split across lines 35/36); breathing/accent, line-end mark'),
          (738, 7, 'πὰ-]', 'πά-', 'kt-apply NOT FOUND: πά-|θοι, accent; line-end mark'),
          # rows whose printed form carries the glued band letter (stripped before the table row is looked up) or spans a line break, so the generic loop cannot find them
          (718, 1, 'δύναταιγενέ-', 'δύναται γενέ-', 'lost space (band letter A glued after it)'), (728, 12, 'ρανδιδοὺς', 'ραν διδοὺς', 'lost space after the hyphenated πεῖ-|ραν'),
          (732, 3, 'ἕξεικολα-', 'ἕξει κολα-', 'lost space'), (732, 3, ']ἕξει', '] ἕξει', 'lost space after Migne\'s bracket'),
          (741, 1, 'Ὰβαθμός', 'βαθμός', 'band letter Α fused to the word'), (741, 1, 'δάκνεσθαιἐπὶ', 'δάκνεσθαι ἐπὶ', 'words joined'),
          (720, 10, 'τε]', 'τε', 'bare line-end bracket (not Migne\'s: no opening bracket)'), (720, 14, 'φάρυγγος(,', 'φάρυγγος,', 'note-call remnant «(»'),
          # the stray ʃ (a line-end mark; the plate's note call, if any, is in the apparatus): removed from the Greek
          (720, 29, 'ʃ', '', 'stray ʃ line-end mark'), (730, 29, ' ʃ', '', 'stray ʃ line-end mark'), (736, 28, 'ʃ', '', 'stray ʃ line-end mark')]
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
CH = {1: [714, 10],
      2: [714, 18],
      3: [714, 23],
      4: [714, 31],
      5: [714, 35],
      6: [715, 6],
      7: [715, 10],
      8: [715, 13],
      9: [715, 17],
      10: [715, 22],
      11: [715, 27],
      12: [715, 31],
      13: [715, 35],
      14: [715, 39],
      15: [716, 3],
      16: [716, 8],
      17: [716, 13],
      18: [716, 18],
      19: [716, 25],
      20: [716, 30],
      21: [716, 34],
      22: [716, 41],
      23: [716, 48],
      24: [717, 3],
      25: [717, 9],
      26: [717, 13],
      27: [717, 16],
      28: [717, 19],
      29: [717, 22],
      30: [717, 30],
      31: [717, 34],
      32: [717, 38],
      33: [717, 43],
      34: [718, 3],
      35: [718, 7],
      36: [718, 14],
      37: [718, 18],
      38: [718, 22],
      39: [718, 25],
      40: [718, 29],
      41: [718, 34],
      42: [718, 39],
      43: [718, 43],
      44: [719, 4],
      45: [719, 8],
      46: [719, 12],
      47: [719, 14],
      48: [719, 21],
      49: [719, 28],
      50: [719, 34],
      51: [719, 38],
      52: [719, 48],
      53: [720, 4],
      54: [720, 8],
      55: [720, 12],
      56: [720, 19],
      57: [720, 26],
      58: [720, 31],
      59: [720, 33],
      60: [720, 36],
      61: [720, 41],
      62: [721, 3],
      63: [721, 6],
      64: [721, 9],
      65: [721, 12],
      66: [721, 15],
      67: [721, 19],
      68: [721, 21],
      69: [721, 24],
      70: [721, 29],
      71: [721, 33],
      72: [721, 36],
      73: [721, 43],
      74: [721, 47],
      75: [722, 7],
      76: [722, 10],
      77: [722, 13],
      78: [722, 20],
      79: [722, 30],
      80: [722, 34],
      81: [722, 39],
      82: [722, 45],
      83: [722, 48],
      84: [723, 5],
      85: [723, 10],
      86: [723, 16],
      87: [723, 23],
      88: [723, 28],
      89: [723, 32],
      90: [724, 3],
      91: [724, 7],
      92: [724, 11],
      93: [724, 16],
      94: [724, 21],
      95: [724, 28],
      96: [724, 31],
      97: [724, 35],
      98: [724, 39],
      99: [724, 42],
      100: [724, 46],
      101: [725, 4],
      102: [725, 10],
      103: [725, 17],
      104: [725, 23],
      105: [725, 26],
      106: [725, 30],
      107: [725, 35],
      108: [725, 44],
      109: [725, 49],
      110: [726, 1],
      111: [726, 5],
      112: [726, 8],
      113: [726, 12],
      114: [726, 17],
      115: [726, 20],
      116: [726, 26],
      117: [726, 34],
      118: [727, 5],
      119: [727, 11],
      120: [727, 19],
      121: [727, 28],
      122: [727, 36],
      123: [727, 45],
      124: [728, 2],
      125: [728, 8],
      126: [728, 19],
      127: [728, 23],
      128: [728, 26],
      129: [728, 30],
      130: [728, 34],
      131: [729, 5],
      132: [729, 13],
      133: [729, 17],
      134: [729, 24],
      135: [729, 31],
      136: [729, 34],
      137: [729, 41],
      138: [730, 8],
      139: [730, 16],
      140: [730, 20],
      141: [730, 24],
      142: [730, 27],
      143: [730, 32],
      144: [730, 34],
      145: [730, 37],
      146: [730, 40],
      147: [731, 3],
      148: [731, 7],
      149: [731, 12],
      150: [731, 18],
      151: [731, 31],
      152: [731, 39],
      153: [731, 45],
      154: [732, 1],
      155: [732, 5],
      156: [732, 11],
      157: [732, 22],
      158: [732, 25],
      159: [732, 31],
      160: [732, 35],
      161: [732, 40],
      162: [733, 1],
      163: [733, 7],
      164: [733, 13],
      165: [733, 22],
      166: [733, 28],
      167: [733, 35],
      168: [733, 39],
      169: [733, 43],
      170: [733, 46],
      171: [734, 4],
      172: [734, 11],
      173: [734, 14],
      174: [734, 18],
      175: [734, 23],
      176: [734, 28],
      177: [734, 32],
      178: [734, 38],
      179: [735, 1],
      180: [735, 4],
      181: [735, 12],
      182: [735, 20],
      183: [735, 27],
      184: [735, 32],
      185: [735, 37],
      186: [735, 45],
      187: [735, 51],
      188: [736, 5],
      189: [736, 9],
      190: [736, 13],
      191: [736, 16],
      192: [736, 19],
      193: [736, 22],
      194: [736, 26],
      195: [736, 30],
      196: [736, 33],
      197: [736, 38],
      198: [736, 47],
      199: [737, 4],
      200: [737, 11],
      201: [737, 17],
      202: [737, 28],
      203: [737, 34],
      204: [738, 5],
      205: [738, 13],
      206: [738, 18],
      207: [738, 23],
      208: [738, 30],
      209: [738, 38],
      210: [738, 47],
      211: [739, 3],
      212: [739, 8],
      213: [739, 14],
      214: [739, 19],
      215: [739, 24],
      216: [739, 29],
      217: [739, 35],
      218: [739, 39],
      219: [740, 1],
      220: [740, 6],
      221: [740, 13],
      222: [740, 20],
      223: [740, 26],
      224: [740, 32],
      225: [740, 39],
      226: [741, 4],
      227: [741, 11],
      228: [741, 18],
      229: [741, 24],
      230: [741, 31],
      231: [741, 35],
      232: [742, 1],
      233: [742, 14],
      234: [742, 25],
      235: [742, 30],
      236: [743, 3],
      237: [743, 9],
      238: [743, 15],
      239: [743, 23],
      240: [743, 29],
      241: [743, 34],
      242: [743, 38],
      243: [743, 46]}
# 243 chapter starts (the Greek numeral on the plate, matched to the English numbers 1-243 by sequence, never by regex alone): 211 matched exactly in sequence;
# 32 were placed by hand from the plate's garbled numerals (HAND below), each checked against the English chapter's first words.
HAND = [5, 49, 53, 57, 60, 65, 78, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 123, 133, 134, 164, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 219]
BR = {(714, 1): 'title', (714, 5): 'title'}      # ΕΤΕΡΑ ΚΕΦΑΛΑΙΑ + ΤΟΥ ΟΣΙΟΥ ΠΑΤΡΟΣ ΗΜΩΝ ΜΑΞΙΜΟΥ (one para: the English has 'Of our holy father Maximus.' and 'OTHER CHAPTERS' as two) / ΣΤΙΧΟΙ + the FOUR dedicatory lines (p0714.05-09) as ONE paragraph, as the English's VERSES + four lines (the Greek order of the title lines differs from the English's)
COUPLETS = {(722, 17): 'para', (722, 18): 'para', (725, 41): 'para', (725, 42): 'para', (730, 6): 'para'}   # 'Τοῦ αὐτοῦ.' + its two lines (chs 77/78, 107/108); the third couplet (137/138) has no heading
PARA = {tuple(v): 'para' for v in CH.values()}
breaks = dict(BR); breaks.update(COUPLETS); breaks.update(PARA)
for k in breaks:
    assert k in inrange and k not in drops, k
assert len(CH) == 243
with open(f'{T}/verify/GREEK-BREAKS.tsv', 'w') as o:
    o.write('page\tline\tcaput\ty\tdrop\n')
    for (p, i), c in sorted(breaks.items()): o.write(f'p-{p:04d}\t{i}\t{c}\t\t\n')
from collections import Counter
print('breaks', len(breaks), Counter(breaks.values()), '| hand-placed chapters', len(HAND))
