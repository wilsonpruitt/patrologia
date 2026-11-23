#!/usr/bin/env python3
"""Maximus, *Diversa capita* (dc-001..019, all Greek; adapted from ca-tables.py 2026-11-22): build the verify/ tables kt-to-site needs.
Run AFTER   MP_STRICT=1 MP_WORK=maximus-diversa-capita MP_DJVU=raw/pg090/090_djvu.xml MP_CMAP=data/pg-column-maps/pg090.json MP_BYCLASS=1 \\
            MP_RANGES=602-709 python3 scripts/mp-bands.py
Writes translate/maximus-diversa-capita/verify/: GREEK-DROPS.tsv, GREEK-BREAKS.tsv (title block in three paragraphs, the five century headings, a break at each of the
500 chapter starts), GREEK-BANDS.tsv (edited in place; BAND_SET = every page, gutter letters located on the plate by blob detection), GREEK-PATCHES.tsv (rebuilt from
the hand patches below + the OCR-table rows of kind stray/space/heading). Run from ~/patrologia."""
import csv, json, re, os, unicodedata as ud, glob
T = 'translate/maximus-diversa-capita'; K = 'raw/kraken/maximus-diversa-capita/checked/'
nfc = lambda s: ud.normalize('NFC', s)
NOREAD = ('—', '-', '', '(omit)', '(delete)', '(none)', '(nothing)')   # Mystagogia tables write (none)
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
for f in sorted(glob.glob(f'{T}/dc-0[0-9][0-9].en.md')):
    cid = os.path.basename(f)[:6]
    for l in open(f):
        m = re.match(r'\| (p\d{4})\.(\d+)([-–]\d+| / [^|]*?)? \| (.*?) \| (.*?) \| (\w+) \| (\w+) \| ?(.*?) ?\|$', l.rstrip('\n'))
        if m: rows.append(dict(chunk=cid, page=int(m.group(1)[1:]), line=int(m.group(2)), multi=bool(m.group(3)), printed=m.group(4).strip(),
                               reading=m.group(5).strip(), kind=m.group(7), why=m.group(8)))
for r in rows:
    for k_ in ('printed', 'reading'): r[k_] = r[k_].strip().strip('`').strip() if r[k_].strip().startswith('`') else r[k_]       # the dc cells of dc-003/004 quote their words in backticks
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
# hand drops: lines the plate does not bear out (image check R: phantom / misread hyphenation fragment)
EXTRA_DROPS = {(636, 53): 'junk at the page foot (lone Ι)', (636, 54): 'junk at the page foot («, λόγον, r»)', (623, 53): 'phantom line, not on the plate (image check R; repeats the ends of 623.51-52)', (642, 55): 'misread ο of the hyphenation προσκ-|ο-μίζουσαν (image check R)'}
for k_, w_ in EXTRA_DROPS.items(): drops[k_] = 'hand: ' + w_
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
# BAND_SET: every page. The gutter letters were located on the plate 2026-11-22 (dark blobs in the gutter channel, grid-fitted A-D, each assigned to the Greek line
# whose centre is nearest; a letter standing in a paragraph gap goes to the first line after the gap; a letter midway between two lines goes to the nearer one). Where no
# letter stands in our range (page ends before the D position) none is set. p0602: the A stands in the gap after the century heading: first text line (8). Pages checked by eye:
# 602 606 624 631 643 661 665 669 672 685 687 699.
BAND_SET = {
'p-0602': [[8, 'A'], [20, 'B']],
'p-0603': [[1, 'A'], [14, 'B'], [28, 'C']],
'p-0604': [[1, 'A'], [15, 'B'], [29, 'C'], [43, 'D']],
'p-0605': [[1, 'A'], [16, 'B'], [31, 'C'], [43, 'D']],
'p-0606': [[1, 'A'], [17, 'B'], [28, 'C']],
'p-0607': [[1, 'A'], [14, 'B'], [28, 'C'], [40, 'D']],
'p-0608': [[1, 'A'], [15, 'B'], [30, 'C']],
'p-0609': [[1, 'A'], [15, 'B'], [27, 'C'], [40, 'D']],
'p-0610': [[1, 'A'], [16, 'B'], [30, 'C'], [45, 'D']],
'p-0611': [[1, 'A'], [14, 'B'], [28, 'C'], [40, 'D']],
'p-0612': [[1, 'A'], [14, 'B'], [28, 'C'], [40, 'D']],
'p-0613': [[1, 'A'], [14, 'B'], [28, 'C'], [40, 'D']],
'p-0614': [[1, 'A'], [15, 'B'], [29, 'C'], [43, 'D']],
'p-0615': [[1, 'A'], [16, 'B'], [30, 'C'], [44, 'D']],
'p-0616': [[1, 'A'], [15, 'B'], [27, 'C'], [42, 'D']],
'p-0617': [[1, 'A'], [14, 'B'], [27, 'C'], [41, 'D']],
'p-0618': [[1, 'A'], [16, 'B'], [28, 'C'], [43, 'D']],
'p-0619': [[1, 'A'], [16, 'B'], [28, 'C'], [43, 'D']],
'p-0620': [[1, 'A'], [16, 'B'], [29, 'C'], [43, 'D']],
'p-0621': [[1, 'A'], [15, 'B'], [27, 'C'], [41, 'D']],
'p-0622': [[1, 'A'], [15, 'B'], [29, 'C'], [43, 'D']],
'p-0623': [[1, 'A'], [16, 'B'], [29, 'C'], [43, 'D']],
'p-0624': [[1, 'A'], [13, 'B'], [27, 'C'], [40, 'D']],
'p-0625': [[1, 'A'], [16, 'B'], [28, 'C'], [42, 'D']],
'p-0626': [[1, 'A'], [16, 'B'], [29, 'C'], [43, 'D']],
'p-0627': [[1, 'A'], [16, 'B'], [30, 'C'], [44, 'D']],
'p-0628': [[1, 'A'], [16, 'B'], [31, 'C'], [42, 'D']],
'p-0629': [[1, 'A'], [15, 'B'], [27, 'C'], [41, 'D']],
'p-0630': [[1, 'A'], [14, 'B'], [28, 'C'], [41, 'D']],
'p-0631': [[1, 'A'], [13, 'B'], [26, 'C'], [40, 'D']],
'p-0632': [[1, 'A'], [16, 'B'], [30, 'C'], [45, 'D']],
'p-0633': [[1, 'A'], [15, 'B'], [29, 'C'], [44, 'D']],
'p-0634': [[1, 'A'], [15, 'B'], [28, 'C'], [43, 'D']],
'p-0635': [[1, 'A'], [16, 'B'], [30, 'C'], [44, 'D']],
'p-0636': [[1, 'A'], [15, 'B'], [28, 'C'], [43, 'D']],
'p-0637': [[1, 'A'], [14, 'B'], [28, 'C'], [43, 'D']],
'p-0638': [[1, 'A'], [15, 'B'], [28, 'C'], [41, 'D']],
'p-0639': [[1, 'A'], [15, 'B'], [30, 'C'], [43, 'D']],
'p-0640': [[1, 'A'], [15, 'B'], [30, 'C'], [42, 'D']],
'p-0641': [[1, 'A'], [15, 'B'], [27, 'C'], [40, 'D']],
'p-0642': [[1, 'A'], [15, 'B'], [28, 'C'], [42, 'D']],
'p-0643': [[1, 'A'], [13, 'B'], [28, 'C']],
'p-0644': [[1, 'A'], [13, 'B'], [27, 'C'], [41, 'D']],
'p-0645': [[1, 'A'], [15, 'B'], [29, 'C'], [42, 'D']],
'p-0646': [[1, 'A'], [14, 'B'], [28, 'C'], [42, 'D']],
'p-0647': [[1, 'A'], [15, 'B'], [28, 'C'], [42, 'D']],
'p-0648': [[1, 'A'], [14, 'B'], [27, 'C'], [40, 'D']],
'p-0649': [[1, 'A'], [16, 'B'], [28, 'C'], [43, 'D']],
'p-0650': [[1, 'A'], [15, 'B'], [27, 'C'], [40, 'D']],
'p-0651': [[1, 'A'], [15, 'B'], [29, 'C'], [43, 'D']],
'p-0652': [[1, 'A'], [15, 'B'], [28, 'C'], [42, 'D']],
'p-0653': [[1, 'A'], [16, 'B'], [31, 'C'], [45, 'D']],
'p-0654': [[1, 'A'], [16, 'B'], [29, 'C'], [44, 'D']],
'p-0655': [[1, 'A'], [15, 'B'], [30, 'C'], [44, 'D']],
'p-0656': [[1, 'A'], [16, 'B'], [29, 'C'], [42, 'D']],
'p-0657': [[1, 'A'], [13, 'B'], [27, 'C'], [40, 'D']],
'p-0658': [[1, 'A'], [16, 'B'], [28, 'C'], [42, 'D']],
'p-0659': [[1, 'A'], [14, 'B'], [27, 'C'], [41, 'D']],
'p-0660': [[1, 'A'], [15, 'B'], [28, 'C'], [42, 'D']],
'p-0661': [[1, 'A'], [15, 'B'], [29, 'C']],
'p-0662': [[1, 'A'], [15, 'B'], [29, 'C'], [42, 'D']],
'p-0663': [[1, 'A'], [16, 'B'], [30, 'C'], [44, 'D']],
'p-0664': [[1, 'A'], [14, 'B'], [28, 'C'], [41, 'D']],
'p-0665': [[1, 'A'], [16, 'B'], [29, 'C'], [43, 'D']],
'p-0666': [[1, 'A'], [16, 'B'], [30, 'C'], [45, 'D']],
'p-0667': [[1, 'A'], [16, 'B'], [30, 'C'], [43, 'D']],
'p-0668': [[1, 'A'], [15, 'B'], [28, 'C'], [42, 'D']],
'p-0669': [[1, 'A'], [16, 'B'], [28, 'C']],
'p-0670': [[1, 'A'], [16, 'B'], [31, 'C'], [45, 'D']],
'p-0671': [[1, 'A'], [14, 'B'], [29, 'C'], [41, 'D']],
'p-0672': [[1, 'A'], [17, 'B'], [32, 'C'], [47, 'D']],
'p-0673': [[1, 'A'], [14, 'B'], [27, 'C'], [39, 'D']],
'p-0674': [[1, 'A'], [16, 'B'], [30, 'C'], [42, 'D']],
'p-0675': [[1, 'A'], [16, 'B'], [28, 'C'], [41, 'D']],
'p-0676': [[1, 'A'], [16, 'B'], [28, 'C'], [42, 'D']],
'p-0677': [[1, 'A'], [16, 'B'], [30, 'C'], [45, 'D']],
'p-0678': [[1, 'A'], [16, 'B'], [28, 'C'], [41, 'D']],
'p-0679': [[1, 'A'], [16, 'B'], [29, 'C'], [42, 'D']],
'p-0680': [[1, 'A'], [16, 'B'], [29, 'C'], [44, 'D']],
'p-0681': [[1, 'A'], [15, 'B'], [28, 'C'], [42, 'D']],
'p-0682': [[1, 'A'], [15, 'B'], [30, 'C'], [44, 'D']],
'p-0683': [[1, 'A'], [16, 'B'], [27, 'C'], [41, 'D']],
'p-0684': [[1, 'A'], [15, 'B'], [29, 'C'], [44, 'D']],
'p-0685': [[1, 'A'], [15, 'B'], [26, 'C'], [38, 'D']],
'p-0686': [[1, 'A'], [15, 'B'], [29, 'C'], [44, 'D']],
'p-0687': [[1, 'A'], [13, 'B'], [27, 'C'], [40, 'D']],
'p-0688': [[1, 'A'], [15, 'B'], [29, 'C'], [42, 'D']],
'p-0689': [[1, 'A'], [15, 'B'], [29, 'C'], [44, 'D']],
'p-0690': [[1, 'A'], [16, 'B'], [30, 'C'], [43, 'D']],
'p-0691': [[1, 'A'], [15, 'B'], [27, 'C'], [42, 'D']],
'p-0692': [[1, 'A'], [15, 'B'], [27, 'C'], [41, 'D']],
'p-0693': [[1, 'A'], [14, 'B'], [29, 'C'], [43, 'D']],
'p-0694': [[1, 'A'], [15, 'B'], [28, 'C'], [43, 'D']],
'p-0695': [[1, 'A'], [14, 'B'], [28, 'C'], [40, 'D']],
'p-0696': [[1, 'A'], [18, 'B'], [33, 'C'], [47, 'D']],
'p-0697': [[1, 'A'], [14, 'B'], [28, 'C'], [42, 'D']],
'p-0698': [[1, 'A'], [12, 'B'], [26, 'C']],
'p-0699': [[1, 'A'], [16, 'B'], [30, 'C'], [43, 'D']],
'p-0700': [[1, 'A'], [16, 'B'], [31, 'C'], [45, 'D']],
'p-0701': [[1, 'A'], [14, 'B'], [25, 'C'], [39, 'D']],
'p-0702': [[1, 'A'], [15, 'B'], [28, 'C'], [40, 'D']],
'p-0703': [[1, 'A'], [16, 'B'], [31, 'C'], [45, 'D']],
'p-0704': [[1, 'A'], [16, 'B'], [29, 'C'], [41, 'D']],
'p-0705': [[1, 'A'], [14, 'B'], [27, 'C'], [40, 'D']],
'p-0706': [[1, 'A'], [15, 'B'], [26, 'C'], [39, 'D']],
'p-0707': [[1, 'A'], [15, 'B'], [27, 'C'], [40, 'D']],
'p-0708': [[1, 'A'], [16, 'B'], [30, 'C'], [45, 'D']],
'p-0709': [[1, 'A'], [14, 'B'], [27, 'C']]}
# glued-letter strips found by mp-bands / the generic loop (the strip applies to the line's text, whatever band the line carries)
allstrips = {(b['page'], int(b['line'])): (b['strip_from'], b['strip_to']) for b in bands
             if b['strip_from'] and b['strip_from'] == line(int(b['page'][2:]), int(b['line']))}
bands = []
for pg_, lst_ in BAND_SET.items():
    for ln_, let_ in lst_:
        p_ = int(pg_[2:]); j_ = ln_
        while (p_, j_) in drops: j_ += 1                     # a band on a dropped line goes to the next kept line
        if (p_, j_) not in inrange: continue                 # beyond the end of the work's range (p0709 ends at line 37)
        sf_, st_ = allstrips.get((pg_, j_), ('', ''))
        bands.append(dict(page=pg_, line=str(j_), letter=let_, how='plate read 2026-11-22 (gutter letter, blob-located)', strip_from=sf_, strip_to=st_))
bands.sort(key=lambda b: (b['page'], int(b['line'])))
bandlines = {(b['page'], int(b['line'])) for b in bands}
STRIP_ONLY = {k: v for k, v in allstrips.items() if k not in bandlines}      # glued letters on a line that carries no band: removed by a patch
with open(f'{T}/verify/GREEK-BANDS.tsv', 'w') as o:
    o.write('page\tline\tletter\thow\tstrip_from\tstrip_to\n')
    for b in bands: o.write('\t'.join([b['page'], b['line'], b['letter'], b['how'], b['strip_from'], b['strip_to']]) + '\n')
print('drops', len(drops), '| bands', len(bands), '| band strips on band lines', sum(1 for b in bands if b['strip_from']), '| strips on other lines (patched)', len(STRIP_ONLY))

# ---- PATCHES ----
pf = f'{T}/verify/GREEK-PATCHES.tsv'
pat = []            # rebuilt on every run (hand patches + OCR-table rows)
CALL = re.compile(r'\s*\([^()\s]{1,3}\)|\s*[⁰¹²³⁴⁵⁶⁷⁸⁹]+')
bd = {(b['page'], int(b['line'])): b for b in bands}
def cur(p, i):
    t = line(p, i); b = bd.get((f'p-{p:04d}', i)); st = allstrips.get((f'p-{p:04d}', i))
    if b and b['strip_from'] and t == b['strip_from']: t = b['strip_to']
    elif st and t == st[0]: t = st[1]
    t = CALL.sub('', t)
    for q in pat:
        if q['page'] == f'p-{p:04d}' and int(q['line']) == i:
            a = q['from']
            if ' / ' in a: a = a.split(' / ')[-1]
            if a in t: t = t.replace(a, q['to'], 1)
    return t
new, skipped = [], []
for (pg_, i_), (sf_, st_) in sorted(STRIP_ONLY.items()):           # glued band letters on lines that carry no band: removed here
    p_ = int(pg_[2:]); k = 0
    while k < min(len(sf_), len(st_)) and sf_[k] == st_[k]: k += 1
    m = 0
    while m < min(len(sf_), len(st_)) - k and sf_[len(sf_) - 1 - m] == st_[len(st_) - 1 - m]: m += 1
    lo = max(0, k - 4); a_ = sf_[lo:len(sf_) - m + min(m, 4)]; b_ = st_[lo:len(st_) - m + min(m, 4)]
    q = dict(page=pg_, line=str(i_), **{'from': a_}, to=b_, source='band letter glued to the line (stripped; the letter is the gutter letter, Migne A-D)'); pat.append(q); new.append(q)
# hand patches. (page, line, from, to, why). `from` is matched on the line AFTER the band strip and the removal of note calls.
KT = 'kt-apply NOT FOUND (a word split across lines): '
MANUAL = [
 # title block of p0602 (plate read 2026-11-22): the plate's lines 3 and 4 (the two big lines MAΞΙΜΟΥ ΤΟΥ ΟΜΟΛΟΓΗΤΟΥ, ΚΕΦΑΛΑΙΑ ΔΙΑΦΟΡΑ ΘΕΟΛΟΓΙΚΑ ΤΕ ΚΑΙ ΟΙΚΟΝΟΜΙΚΑ) are not in the Kraken text; '¶' = paragraph break
 (602, 2, 'ΚΑῚ ΔΙΔΑΣΚΑΛΟΥʃ', 'ΚΑΙ ΔΙΔΑΣΚΑΛΟΥ ΜΑΞΙΜΟΥ ΤΟΥ ΟΜΟΛΟΓΗΤΟΥ¶ΚΕΦΑΛΑΙΑ ΔΙΑΦΟΡΑ ΘΕΟΛΟΓΙΚΑ ΤΕ ΚΑΙ ΟΙΚΟΝΟΜΙΚΑ', 'title block: the two big plate lines that Kraken never segmented, added from the plate (ʃ = note call, removed)'),
 # lines Kraken dropped, seen on the plate (coordinator 2026-11-22; the first is a further one found in the build)
 (673, 17, 'πέφυκε· ἀπάθειαν, ἡ κατὰ νοῦν τῆς θείας ἡδονῆς ἐπιγίνεται χάρις.', 'πέφυκε· καθ᾿ ἣν δηλαδὴ τὴν γνωμικὴν ἀπάθειαν, ἡ κατὰ νοῦν τῆς θείας ἡδονῆς ἐπιγίνεται', 'the mid-page line Kraken dropped (plate: \u00ab\u1f00\u03c0\u03ac\u03b8\u03b5\u03b9\u03b1\u03bd, \u1f21 \u03ba\u03b1\u03c4\u1f70 \u03bd\u03bf\u1fe6\u03bd \u03c4\u1fc6\u03c2 \u03b8\u03b5\u03af\u03b1\u03c2 \u1f21\u03b4\u03bf\u03bd\u1fc6\u03c2 \u1f10\u03c0\u03b9\u03b3\u03af\u03bd\u03b5\u03c4\u03b1\u03b9\u00bb between 673.17 and 673.18, coordinator plate read; image check C = R). kt-apply had overwritten the printed line-end «καθ᾿ ἣν δηλαδὴ τὴν γνωμικὴν» with it: both restored'),
 (687, 3, 'οὐ γινώσκει', 'οὐ γινώσκει κακίαν.', 'a one-word plate line («κακίαν.») Kraken never segmented (coordinator plate read 2026-11-22; image check D)'),
 (657, 1, 'τῆς καρδίας διά-', 'τῆς καρδίας διάσκεψιν.', 'a one-word plate line («σκεψιν.») Kraken never segmented; image check C: plate = διά-σκεψιν.'),
 # kt-apply NOT FOUND rows (line-split words), hand-patched
 (607, 37, 'γεγόνασι μὲ', 'γεγόνασι μέ-', KT + 'μέ-|τοχοι'), (607, 38, 'οχοι,', 'τοχοι,', KT + 'μέ-|τοχοι'),
 (607, 39, ' ἀξ', ' ἀξιω-', KT + 'ἀξιω-|θῶμεν'), (607, 40, 'Θῶμεν.', 'θῶμεν.', KT + 'ἀξιω-|θῶμεν'),
 (607, 48, 'δὲ ἐξ', 'δὲ ἐξ-', KT + 'ἐξ-|άγει'), (607, 49, 'ἀγει', 'άγει', KT + 'ἐξ-|άγει'),
 (608, 37, 'φιλοφ', 'φιλοφρο-', KT + 'φιλοφρο-|νεῖται'),
 (607, 44, 'λόχτωνς,', 'λόγ-', KT + 'λόγ-|χης'),
 (616, 30, 'μυσταγῳγίας', 'μυσταγωγίας', KT + 'ω for ῳ'), (616, 42, 'θείοις προ', 'θείοις προσ-', KT + 'προσ-|τάγμασιν'),
 (617, 1, 'κᾶ̀ν', 'κἂν', KT + 'κἂν'), (617, 7, 'ἑαυτοῦς', 'ἑαυτοῖς', KT + 'ἑαυτοῖς'),
 (615, 12, 'ἐλπίδος]', 'ἐλπίδος', 'lone line-end ] (column rule)'),
 (617, 28, 'γινώσκομεν αἷ-', 'γινώσκομεν αἴ-', KT + 'αἴ-|τιον'), (617, 36, 'γνύ-', 'γνώ-', KT + 'γνώ-|σεως'), (617, 37, 'προ--', 'προ-', KT + 'double hyphen'),
 (618, 1, 'τὸ νεῦμα', 'τὸ Πνεῦμα', KT + 'Πνεῦμα'),
 (615, 17, 'ἀναβι-]', 'ἀναβι-', 'lone line-end ] (column rule)'), (615, 18, 'ἑαυτὸν]', 'ἑαυτὸν', 'lone line-end ] (column rule)'), (615, 20, 'φησὶ́ν', 'φησὶν', KT + 'double accent'),
 (615, 42, 'φόβος, κὰ', 'φόβος, καὶ', KT + 'καὶ'), (615, 44, 'ἐπεὶ κὰ', 'ἐπεὶ καὶ', KT + 'καὶ'),
 (620, 7, 'θείας πα', 'θείας παν-', KT + 'παν-|τελῶς'), (620, 39, 'Ικακίας', 'κακίας', KT + 'stray I'),
 (620, 42, 'φι-', 'φιλαν-', KT + 'φιλαν-|θρώπου'), (620, 43, 'λαθρώπου', 'θρώπου', KT + 'φιλαν-|θρώπου'), (620, 43, 'τῷ δι', 'τῷ δια-', KT + 'δια-|βόλῳ'),
 (620, 47, 'Ἰωβ', 'Ἰὼβ', KT + 'accent'), (621, 13, 'ἡδενῆς', 'ἡδονῆς', KT + 'ἡδονῆς'), (621, 35, 'ἰμωμέ-', 'ἰωμέ-', KT + 'ἰωμένης'),
 (621, 40, 'παραδιο̈ν-', 'παραδίδο-', KT + 'παραδίδο-|ται'), (621, 41, 'καταλιμπανόμενος,ἐν', 'καταλιμπανόμενος, ὧν', KT + 'ὧν'),
 (619, 20, 'φύσιν, ἐν-', 'φύσιν, ἀν-', KT + 'ἀν-|ύπαρκτον: the plate prints ἀν- (image check C, coordinator plate read ×4)'),
 (619, 22, 'οἷ τε', 'οἵ τε', KT + 'οἵ'), (619, 33, 'δύο-', 'δύο', KT + 'spurious hyphen (δύο | συγκλείεται)'),
 (620, 2, 'αὐτὸν, δ-', 'αὐτὸν, δο-', KT + 'δο-|κεῖ'), (620, 3, 'τοὺς ἀ', 'τοὺς ἀν-', KT + 'ἀν-|θρώπους'),
 (621, 47, 'ζν-', 'ζυ-', KT + 'ζυ-|γὸν'), (623, 18, 'κόσμος,', 'κόσμος.', KT + 'full point before the next chapter'),
 (623, 29, 'ἐνέργοιαν', 'ἐνέργειαν', KT + 'ἐνέργειαν'), (623, 43, 'πριρέσεως', 'προαιρέσεως', KT + 'προαιρέσεως'), (623, 48, 'ὑπτάρχει', 'ὑπάρχει', KT + 'ὑπάρχει'),
 (624, 1, 'δι᾿ ᾧ', 'δι᾿ ὧν', KT + 'ὧν'), (624, 2, 'ζεῖον', 'θεῖον', KT + 'θεῖον'),
 (624, 20, 'ττον', 'πτον', KT + 'ἀπερίλη-|πτον'), (624, 35, 'ὑδοις', 'όδοις', KT + 'ἐφ-|όδοις'),
 (622, 1, 'τὰς̔', 'τὰς', KT + 'stray breathing'),
 (624, 40, 'τῇ αρκὶ', 'τῇ σαρκὶ', KT + 'σαρκὶ'), (624, 40, 'διφαύ-', 'διαφεύ-', KT + 'διαφεύ-|γοντα'),
 (625, 19, 'ἑπι-', 'ἐπι-', KT + 'ἐπι-|φάνειαν'), (625, 23, 'ζʹ.·', 'ζʹ.', KT + 'the raised mark is an asterisk note call (image check B)'),
 (622, 3, 'ταπ-', 'ταπει-', KT + 'ταπει-|νῆς'), (622, 15, 'ἀπικίζεται', 'ἀποικίζεται', KT + 'ἀποικίζεται'),
 (622, 44, 'τῆς φ', 'τῆς φαι-', KT + 'φαι-|νομένης'), (623, 1, 'φυσκὴ', 'φυσικὴ', KT + 'φυσικὴ'), (623, 17, 'καθ᾿ ἢν', 'καθ᾿ ἣν', KT + 'ἣν'),
 (625, 25, 'βλεπομένυν', 'βλεπομένων', KT + 'βλεπομένων'), (626, 20, 'οὖκ', 'οὐκ', KT + 'οὐκ'),
 (626, 32, 'γωον', 'γων', KT + 'ἔρ-|γων'), (626, 35, 'τῶν ἐν-', 'τῶν ἐντο-', KT + 'ἐντο-|λῶν'), (626, 39, 'κοις', 'σεως.', KT + 'γνώ-|σεως.'),
 (626, 41, 'τάξεν', 'τάξιν', KT + 'τάξιν'), (626, 44, 'ἐσθίαει', 'ἐσθίει', KT + 'ἐσθίει'), (626, 44, 'ἔρχων', 'ἔργων', KT + 'ἔργων'),
 (625, 31, 'ἑνών-', 'ἑνώ-', KT + 'ἑνώ-|σεως.'), (625, 32, 'σεως', 'σεως.', KT + 'ἑνώ-|σεως.'), (625, 33, 'ὑπάρχιν', 'ὑπάρχων', KT + 'ὑπάρχων'),
 (625, 40, 'ἕνωσιν· εἷ-', 'ἕνωσιν· εἰ-', KT + 'εἰ-|κότως'), (625, 42, 'ἤγουν δια-', 'ἤγουν διατε-', KT + 'διατε-|μὼν'),
 (626, 1, 'δαικτικῶς', 'δεικτικῶς', KT + 'δεικτικῶς'), (626, 2, 'καὶ δυ', 'καὶ δυσ-', KT + 'δυσ-|μετακίνητον'),
 (636, 3, 'ἀγαθῶν διυ', 'ἀγαθῶν διαφυ-', KT + 'διαφυ-|λάττων'), (642, 54, 'προσκ-', 'προσκο-', KT + 'προσκο-|μίζουσαν (line 55 «κοὶ» is the misread ο of the hyphenation: dropped)'),
 (651, 21, 'Ἐστὶ-', 'Ἔστι', KT + 'Ἔστι | δὲ'), (662, 29, 'ἐν ει-', 'ἐν πει-', KT + 'πει-|ρασμοῖς'),
 (668, 36, 'ἐρευνητικὰς [', 'ἐρευνητικὰς [qu. 59 ad Thalass.', KT + 'Migne\'s bracket [qu. 59 ad Thalass. ἐξερευνητ.] (the Latin read at the plate by the apparatus reader)'), (668, 37, 'ʹΤαἐξερευνητ]', 'ἐξερευνητ.]', KT + 'the bracket\'s close'),
 (676, 16, 'τιμ-', 'τιμω-', KT + 'τιμω-|ρὸς'),
 (673, 38, 'πάντες ἄνθρω', 'πάντες ἄνθρω-', KT + 'ἄνθρω-|ποι'), (673, 39, 'πι τὴν', 'ποι τὴν', KT + 'ἄνθρω-|ποι'),
 (682, 15, 'ποιούμενος χω', 'ποιούμενος χωρι-', KT + 'χωρι-|σμόν'), (692, 41, 'οὐσἱ', 'οὐσιω-', KT + 'οὐσιω-|δῶς'), (692, 42, 'δῷς', 'δῶς', KT + 'οὐσιω-|δῶς'),
 (696, 12, 'τοπικῆς [', 'τοπικῆς [qu. 65,', KT + 'Migne\'s bracket [qu. 65, τυπικ.] split across the line (the Latin read at the plate by the apparatus reader)'),
 (707, 47, 'δὲ θεολογιη', 'δὲ θεολογι-', KT + 'θεολογι-|κῆς'),
 # further hand patches found in the build (spacing / split words / stray marks the table rows could not reach because the printed form spans a line break)
 (617, 26, 'ὑστέρημα τοπαρά-', 'ὑστέρημα τὸ παρά-', KT + 'τὸ παρά-|παν'), (617, 27, 'πανοὐδέν.', 'παν οὐδέν.', KT + 'τὸ παράπαν οὐδέν'),
 (629, 7, 'γίαν(', 'γίαν', 'note-call remnant «(»'), (629, 14, 'τὴν ἐκ-', 'τὴν ἐκ', 'spurious hyphen (ἐκ | χάριτος)'),
 (644, 41, 'ὁρωμένησα-', 'ὁρωμένη σα-', 'lost space'), (652, 28, 'σύνεσιν,ἀναβαίνο-', 'σύνεσιν, ἀναβαίνο-', 'lost space'),
 (654, 16, 'ταῦτακα-', 'ταῦτα καθ-', 'plate read 2026-11-22 (the line ends «ταῦτα καθ-», 600 dpi): Kraken fused the words and dropped the θ'), (654, 17, 'καθέστηκε', 'έστηκε', 'the plate line opens «-έστηκε» (the rest of καθ-|έστηκε); Kraken repeated «καθ»'),
 (655, 4, 'κην(,', 'κην,', 'note-call remnant «(»'), (658, 2, 'ταπεινοῦται·ὁ', 'ταπεινοῦται· ὁ', 'lost space'),
 (663, 16, 'κνυνταιπόνοις,', 'κνυνται πόνοις,', 'lost space'),
 (665, 16, 'αἰτίακαθ-', 'αἰτία καθ-', KT + 'καθ-|έστηκεν'), (665, 17, 'ἑστηκεν', 'έστηκεν', KT + 'καθ-|έστηκεν (table reading)'), (665, 24, 'ναμιν(·', 'ναμιν·', 'note-call remnant «(»'),
 (672, 4, 'ζεται·εἴπερ', 'ζεται· εἴπερ', 'lost space'), (672, 7, 'ζεταινόησιν.', 'ζεται νόησιν.', 'lost space'),
 (677, 17, 'σαρκωθέντος· μὴ', 'σαρκωθέντος· μή-', KT + 'μή-|τε μὴν'), (680, 41, 'Αἰσχὺν-]', 'Αἰσχύν-', 'lone line-end ] (column rule); accent'),
 (684, 1, 'τὰ θεῖαφιλοσ-', 'τὰ θεῖα φιλοσο-', KT + 'φιλοσο-|φοῦσι'), (686, 30, 'στολὴν αὐ', 'στολὴν αὐ-', KT + 'αὐ-|τοῦ'), (688, 28, 'ἀσχέτως ἀνα', 'ἀσχέτως ἀνα-', KT + 'ἀνα-|τιθεὶς'),
 (690, 7, 'μόνον μάθω', 'μόνον μάθω-', KT + 'μάθω-|μεν'), (690, 23, 'συν-]', 'συν-', 'lone line-end ] (column rule)'), (690, 24, 'καθ-]', 'καθ-', 'lone line-end ] (column rule)'),
 (709, 7, 'μηδενὶ τοσύν-', 'μηδενὶ τὸ σύν-', KT + 'τὸ σύν-|ολον'), (609, 3, 'ναιπαρασκευάζουσα,διὰ', 'ναι παρασκευάζουσα, διὰ', 'lost spaces'),
 # Migne's brackets inside the Greek: the plate prints Latin words (\u00abqu. illa 61\u00bb, \u00abmale edita\u00bb, \u00abunus Reg.\u00bb ...) that Kraken lost or garbled; restored as the apparatus readers / the image check saw them (bracket-inline records, notes/result-*.jsonl)
 (633, 53, '[ ὀδύνης]', '[Regii duo ὀδύνης]', 'bracket as printed: the Latin Kraken lost (apparatus reader; image check R)'), (641, 39, '[προηγουμ.]', '[male edita προηγουμ.]', 'bracket as printed (apparatus reader)'),
 (647, 1, '[ὅτι]', '[edit. et unus Reg. ὅτι]', 'bracket as printed (apparatus reader; image check B)'), (654, 24, '[φύσιν]', '[duo Reg. φύσιν]', 'bracket as printed (apparatus reader)'),
 (665, 34, 'ἀντιλαμβάνεσθαι]', 'ἀντιλαμβάνεσθαι [qq. ad Thalass. q. 58,', 'Migne\'s bracket [qq. ad Thalass. q. 58, ὧν κατ᾿ οὐσίαν ἀντιλαμ.] across two lines (apparatus reader)'), (665, 35, '[ὧν κατ᾿ οὐσίαν ἀντιλαμ(βάνεσθαι)]', 'ὧν κατ᾿ οὐσίαν ἀντιλαμ.]', 'the bracket\'s close'),
 (670, 6, '[  πεφύ-', '[unus Reg. πεφύ-', 'bracket as printed (apparatus reader)'),
 (678, 4, ' [ , ὅλως]', ' [qu. illa 61,', 'bracket as printed: «qu. illa 61» (image check R)'), (678, 5, '(siglum, unread), ὅλως]', 'ὅλως]', 'the translator\'s «(siglum, unread)» had been written into the Greek by kt-apply; the plate prints «qu. illa 61»'),
 (689, 19, '[πᾶν]', '[male edita πᾶν]', 'bracket as printed (image check R)'), (690, 49, 'ἤπουγε [', 'ἤπουγε [unus Reg.', 'bracket as printed (apparatus reader)'),
 (702, 16, 'δεχόμενον· ἵν᾿ ὅλον]', 'δεχόμενον [male edita δεδόμενον] · ἵν᾿ ὅλον', 'Migne\'s bracket [male edita δεδόμενον] after δεχόμενον (apparatus reader), which Kraken lost; the line-end ] was its column-rule trace'),
 (708, 7, '[ἀποδεκτικὴ]', '[edit. ἀποδεκτικὴ]', 'bracket as printed (apparatus reader)'), (708, 25, 'ἁμετάθετος [, μετάθε-', 'ἀμετάθετος [male edita, μετάθε-', 'bracket as printed (apparatus reader); ἀ (privative alpha, smooth breathing)'),
 (709, 18, '[προσδεὴς]', '[male edita προσδεὴς]', 'bracket as printed (apparatus reader)'),
 (663, 5, 'κόλασις( λύπη.', 'κόλασις (qu. illa 58, λύπη).', 'Migne\'s inline note (qu. illa 58, λύπη) (image check C): the «(» is its opening, no word lost'),
 (664, 55, 'εὐφραίνει δὲ]', 'εὐφραίνει δὲ', 'Kraken bracket: image check R, no bracket on the plate'),
 # call remnants / junk the table rows could not reach
 (618, 28, ' 𐅵ʹ', '', 'stray mark at the line end (the next line continues «πάσχειν λόγος»)'), (631, 15, '[ἑπικτήσεως,', 'ἑπικτήσεως,', 'a j-shaped sort, not clearly a bracket (image check ?): English unbracketed; the unsettled breathing stays as printed'),
 (631, 25, 'μις(·', 'μις·', 'note-call remnant «(» (image check R)'), (674, 10, 'φύσεως (,', 'φύσεως,', 'note-call remnant «(»'), (684, 13, 'κίνησιν (·', 'κίνησιν·', 'note-call remnant «(»'), (694, 28, 'συμβό-(', 'συμβό-', 'note-call remnant «(»'),
 (696, 25, 'ἐπιβάλ-]', 'ἐπιβάλ-', 'lone line-end ] (column rule)'), (708, 4, 'κό-]', 'κό-', 'lone line-end ] (column rule)'),
 (617, 1, 'Αμένων', 'μένων', 'band letter A fused to the first word (ἐπιβεβλη-|μένων across the page seam)'), (675, 1, 'Αδιὰ', 'διὰ', 'band letter A fused to the first word'), (651, 49, 'τῶν φυσὶ', 'τῶν φυσι-', 'Kraken lost the hyphen: φυσι-|κῶν across the page seam'),
 (604, 30, 'υ-', 'μυ-', 'col. 1181 (clipped scan; myriobiblos): μυ-|στήριον'), (604, 31, 'τοσοῦτον', 'στήριον, τοσοῦτον', 'col. 1181 (clipped scan; myriobiblos): line opening supplied'),
 (604, 42, 'μένην', 'λεσφορουμένην', 'col. 1181 (clipped scan; myriobiblos): τε-|λεσφορουμένην'), (604, 43, 'τοὺςΝ', 'τοὺς', 'col. 1181: spurious Ν (band/ink)'), (604, 44, 'ἰδηγῶν', 'μάγους ὁδηγῶν', 'col. 1181 (clipped scan; myriobiblos): τοὺς μάγους ὁδηγῶν'),
 (604, 45, 'ἵνα δείξῃ', 'κώσεως, ἵνα δείξῃ', 'col. 1181 (clipped scan; myriobiblos): σαρ-|κώσεως'),
 (653, 50, 'συστελλό-μενον.', 'συστελλό-', 'kt-apply had completed the page-turn word from the translator\'s table (συστελλό-μενον.); the plate\'s last line «μενον.» is the restored line 653.51 (RESTORED-LINES.tsv): the completion removed so the word is not doubled'),
 (663, 28, 'αἴτιος..', 'αἴτιος.', 'kt-apply replaced «αἴτιo.» by «αἴτιος.» and kept the printed point: doubled'),
 (671, 28, 'γνώσeωs', 'γνώσεως', 'Latin letters e, s for Greek ε, ς (image check P: the plate prints no point at the chapter end)'),
 (670, 1, 'τῶν ψυ', 'τῶν ψυ-', 'Kraken lost the hyphen: ψυ-|χῶν'),
 (658, 5, '[ξδʹ.', 'ξδʹ.', 'Kraken bracket: image check R, no bracket on the plate (III.64)'), (658, 5, 'συνέστηκεν]', 'συνέστηκεν', 'Kraken bracket: image check R, no bracket on the plate (III.64)'),
 (664, 7, '[δʹ.', 'ϟδʹ.', 'koppa lost (chapter 94); Kraken bracket: image check R, no bracket on the plate'),
]

for p_, i_, a_, b_, why_ in MANUAL:
    t_ = cur(p_, i_)
    if a_ in t_:
        if t_.count(a_) > 1: print('  MANUAL ambiguous (first occurrence taken)', p_, i_, repr(a_))
        q = dict(page=f'p-{p_:04d}', line=str(i_), **{'from': a_}, to=b_, source='HAND (coordinator/plate or table, not a table row): ' + why_); pat.append(q); new.append(q)
    elif b_ and b_ in t_: print('  MANUAL already applied', p_, i_, repr(a_))
    else: print('  MANUAL NOT APPLICABLE', p_, i_, repr(a_), '|', repr(t_[:70]))
nhand = len(pat); nclip = 0
SKIP_ROWS = {(660, 23)}      # III.77 prints «οϛʹ» (a second time: Migne's numbering slip): the Greek keeps what the plate prints; the table's «οζʹ» is not applied
for r in rows:
    if (r['page'], r['line']) in SKIP_ROWS: continue
    CLIP = r['page'] == 604 and r['kind'] in ('ocr', 'doubt') and not r['multi'] and '(kept)' not in r['reading'] and not r['reading'].startswith('[?]')   # col. 1181: the clipped line openings, supplied from the table (the only source)
    if (r['kind'] not in ('stray', 'space', 'heading') and not CLIP) or (r['page'], r['line']) not in inrange or (r['page'], r['line']) in drops: continue
    a, b_ = r['printed'], r['reading']
    if r['kind'] == 'stray' and nfc(CALL.sub('', a)) == nfc(b_): continue          # a note call and nothing else: stripped by pattern
    if r['multi'] or ' / ' in a or '…' in a: skipped.append((r, 'multi-part')); continue
    if b_ in NOREAD:
        pr_ = a.strip(); t_ = cur(r['page'], r['line'])
        if r['kind'] == 'stray' and len(pr_) >= 3 and t_.count(pr_) == 1 and not (len(pr_.split(' ')[0]) == 1 and pr_.split(' ')[0] in 'ΑΒΓΔABCD'):
            q = dict(page=f'p-{r["page"]:04d}', line=str(r['line']), **{'from': pr_ + ' ' if t_.startswith(pr_ + ' ') else pr_}, to='',
                     source=f'OCR-TABLE {r["chunk"]} kind=stray (translator reading, not plate-checked): junk fragment removed: {r["why"][:60]}')
            pat.append(q); new.append(q); continue
        if r['kind'] == 'stray' and len(pr_) <= 2 and pr_ not in ('Α', 'Β', 'Γ', 'Δ', 'A', 'B', 'C', 'D') and len(re.findall(r'(?<!\S)' + re.escape(pr_) + r'(?!\S)', t_)) == 1:
            m_ = re.search(r'(?<!\S)' + re.escape(pr_) + r'(?!\S)', t_)
            fr_ = (' ' + pr_) if m_.start() > 0 and t_[m_.start() - 1] == ' ' else (pr_ + ' ')
            q = dict(page=f'p-{r["page"]:04d}', line=str(r['line']), **{'from': fr_}, to='',
                     source=f'OCR-TABLE {r["chunk"]} kind=stray (translator reading, not plate-checked): lone mark removed: {r["why"][:60]}')
            pat.append(q); new.append(q); continue
        skipped.append((r, 'no reading')); continue
    t = cur(r['page'], r['line'])
    a2 = nfc(CALL.sub('', a))
    if nfc(a) not in nfc(t) and a2 not in nfc(t):
        if nfc(b_) in nfc(t) or nfc(CALL.sub('', b_)) in nfc(t): continue                  # already done (kt-apply or a hand patch)
        skipped.append((r, 'printed form not in the (stripped, patched) line: ' + t[:60])); continue
    use = a if nfc(a) in nfc(t) else a2
    if CLIP and (r['page'], r['line']) == (604, 12): b_ = 'φανσιν, ἀλλὰ'          # the table gives the whole word «ἔκφανσιν», whose first syllable already ends line 11 (ἔκ-): only its remainder opens line 12
    q = dict(page=f'p-{r["page"]:04d}', line=str(r['line']), **{'from': use, 'to': CALL.sub('', b_) if use == a2 else b_},
             source=(f'OCR-TABLE {r["chunk"]} kind={r["kind"]} COL. 1181 (our scan clips the left margin: this text is supplied from the myriobiblos transcription and the facing Latin, NOT read at the plate): {r["why"][:60]}' if CLIP else f'OCR-TABLE {r["chunk"]} kind={r["kind"]} (translator reading, not plate-checked): {r["why"][:70]}'))
    pat.append(q); new.append(q); nclip += 1 if CLIP else 0
with open(pf, 'w') as o:
    o.write('page\tline\tfrom\tto\tsource\n')
    for q in pat: o.write('\t'.join([q['page'], q['line'], q['from'], q['to'], q['source']]) + '\n')
print('patches', len(pat), '(strips', len(STRIP_ONLY), '| hand', nhand - len(STRIP_ONLY), '| table', len(pat) - nhand, ', of them col. 1181 line openings', nclip, ') | skipped', len(skipped))
for r, why in skipped: print('  SKIP', r['chunk'], r['page'], r['line'], r['kind'], repr(r['printed'][:30]), '->', repr(r['reading'][:30]), '|', why)

# ---- BREAKS (after patches, so the lines are the patched ones) ----
# the title block: p0602 line 1 (para 1, with line 2's first half), a '¶' inside the patched line 2 (para 2), line 3 (para 3); the five century headings; every chapter.
HEADS = [(602, 5), (624, 9), (643, 13), (665, 22), (687, 52)]
UN = 'αβγδεϛζηθ'; TE = 'ικλμνξοπϟ'
def gnum(n): return ('ρ' if n == 100 else (TE[n // 10 - 1] if n >= 10 else '') + (UN[n % 10 - 1] if n % 10 else ''))
def norm(t):
    t = ''.join(c for c in ud.normalize('NFD', t.lower()) if not ud.combining(c))
    return t.replace('ς', 'ϛ').replace('σ', 'ϛ').replace('ϲ', 'ϛ').replace('ϙ', 'ϟ').replace('ϡ', 'ϟ')
LEAD = re.compile(r"^(?:\[b: .\] )?\s*([^\s.ʹ΄'´′’‘·,;()\[\]]{1,4})\s*[ʹ΄'´′’]\s*\.?")
def lead(t):
    m = LEAD.match(t)
    return norm(m.group(1)) if m else None
def lev1(a, b):
    if a == b: return 0
    if abs(len(a) - len(b)) > 1: return 2
    if len(a) == len(b): return sum(x != y for x, y in zip(a, b))
    s_, l_ = sorted((a, b), key=len)
    return 1 if any(l_[:i] + l_[i + 1:] == s_ for i in range(len(l_))) else 2
kept = [(p, i) for (p, i), c in sorted(inrange.items()) if (p, i) not in drops]
pos = {k: j for j, k in enumerate(kept)}
HAND = {(3, 77): (660, 23)}          # (century, n) -> (page, line): chapters whose numeral Kraken mangled beyond the sequence match, placed by hand after reading the line against the English
CH = {}; stats = {'exact': 0, 'fuzzy': 0, 'hand': 0}; fuzzy_list = []; missing = []
for c, hd in enumerate(HEADS, 1):
    a = pos[hd] + 1; b = pos[HEADS[c]] if c < len(HEADS) else len(kept)
    seg = kept[a:b]; ptr = 0
    for n in range(1, 101):
        if (c, n) in HAND:
            k = HAND[(c, n)]; j = seg.index(k); CH[(c, n)] = k; ptr = j + 1; stats['hand'] += 1; continue
        want = norm(gnum(n)); hit = None
        for j in range(ptr, len(seg)):
            lt = lead(cur(*seg[j]))
            if lt is None: continue
            if lt == want: hit = (j, 'exact'); break
        if hit is None:
            for j in range(ptr, len(seg)):
                lt = lead(cur(*seg[j]))
                if lt is not None and lev1(lt, want) <= 1 and (n < 100) and not any(lead(cur(*seg[jj])) == norm(gnum(n + 1)) for jj in range(ptr, j + 1)): hit = (j, 'fuzzy'); break
        if hit is None: missing.append((c, n, seg[ptr] if ptr < len(seg) else None)); continue
        CH[(c, n)] = seg[hit[0]]; ptr = hit[0] + 1; stats[hit[1]] += 1
        if hit[1] == 'fuzzy': fuzzy_list.append((c, n, seg[hit[0]], cur(*seg[hit[0]])[:40]))
print('chapter starts', len(CH), stats, '| missing', len(missing))
for m in missing: print('  MISSING', m)
for f in fuzzy_list: print('  FUZZY', f)
BR = {(602, 1): 'title', (602, 3): 'para'}
breaks = dict(BR); breaks.update({h: 'para' for h in HEADS}); breaks.update({v: 'para' for v in CH.values()})
for k in breaks:
    assert k in inrange and k not in drops, k
with open(f'{T}/verify/GREEK-BREAKS.tsv', 'w') as o:
    o.write('page\tline\tcaput\ty\tdrop\n')
    for (p, i), c in sorted(breaks.items()): o.write(f'p-{p:04d}\t{i}\t{c}\t\t\n')
from collections import Counter
print('breaks', len(breaks), Counter(breaks.values()), '| hand-placed chapters', len(HAND))
