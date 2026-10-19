#!/usr/bin/env python3
"""Blind vision read + every-line plate check of a PG work's Greek column, through the Anthropic API.
Generalises the Maximus pair (vision-api-read.py, plate-check-api.py; pg-paired-pilot 0i) to any work
run through the Kraken queue (htr/QUEUE.md): pages, regions and the Kraken text come from
raw/kraken/<work>/, and the Kraken text is the check's checklist (never shown to the blind read).
Migne's A-D band letters are captured in both passes as a leading "[b: X]" on the line they stand
beside (CLAUDE.md, band letters in PG).

  uv run --with anthropic,pillow,numpy,rapidfuzz scripts/pg-plate-api.py <work> strips
  uv run ... pg-plate-api.py <work> read  <page|--submit|--fetch BATCH> [model]
  uv run ... pg-plate-api.py <work> diff
  uv run ... pg-plate-api.py <work> check <page|--submit|--fetch BATCH> [model]

<page> is the image stem, e.g. p-0836. Output in raw/kraken/<work>/: img/ (strips), api/ (blind read),
diff/ (read vs Kraken), checked/ (text + .ledger.tsv + SUMMARY.jsonl). Batch ids go to <dir>/batches.log.
Key: macOS Keychain service "anthropic-api" (never ANTHROPIC_API_KEY).
"""
import sys, os, io, re, json, base64, subprocess, tempfile
import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
MODEL = 'claude-opus-5-5'
PRICE = {'claude-opus-5-5': (4, 20), 'claude-sonnet-5-5': (2, 10)}   # USD per MTok in/out, before batch -50%
WORKS = {'dorotheus-doctrinae': 'vol. 88 (Dorotheus of Gaza, Doctrinae diversae)'}
STRIP_H = 520           # strip height at 300 dpi
GUTTER = 110            # px at 600 dpi kept beyond the Greek column, toward the gutter (the A-D letters)
MARGIN = 100            # px at 600 dpi kept on the outer side, above and below (YOLO boxes run tight: 2026-10-19)

work = sys.argv[1]
W = os.path.join(HERE, '..', 'raw', 'kraken', work)
D = lambda *p: os.path.join(W, *p)

READ_PROMPT = """You are transcribing the GREEK text of one page of Migne's Patrologia Graeca {vol}, from images. Output must be a faithful diplomatic transcription. The images are consecutive horizontal strips of the page, top to bottom: most show only the Greek column (with the gutter beside it), and a strip showing the full page width is a heading band set across both columns.

Rules:
1. Transcribe ONLY the Greek. Skip: the running head, column numbers, all Latin text (the Latin translation column, Latin headings, footnotes and notes at the foot), footnote marks and apparatus.
2. Migne prints marginal letters A, B, C, D in the gutter beside the column. When one stands beside a line, begin that output line with "[b: X]" (for example "[b: B] καὶ τὸν ..."). Do not otherwise transcribe them.
3. One output line per printed line. Keep a hyphen at the end of a line that breaks a word ("συνθεωρού-"), and do not join the halves.
4. Reproduce exactly what is printed: every accent, breathing, iota subscript, diaeresis, elision mark (᾿), and punctuation (the ano teleia is ·, the question mark is ;). Use precomposed polytonic Unicode.
5. Do NOT correct, modernize, or "improve" anything, and do not substitute the word you expect for the word you see. If a spelling looks odd, it is probably what is printed. Read letter by letter, especially: κ/χ, β/θ, ε/ο, ι/υ, α/ο, ν/υ, and accents and breathings (grave/acute, smooth/rough).
6. Mark a letter or word you cannot read with confidence as [?], or [word?] after your best guess. Do not guess silently.
7. Greek headings and titles are included, on their own lines, where they are printed.

Output only the transcription: plain text, no commentary, no code fence."""

CHECK_PROMPT = """You are checking a transcription of the GREEK text of one page of Migne's Patrologia Graeca {vol} against the printed page. The images are consecutive horizontal strips of the page, top to bottom: most show only the Greek column (with the gutter beside it), and a strip showing the full page width is a heading band set across both columns.

Below are (1) the transcription, with line numbers, and (2) a list of places where an independent OCR (Kraken) disagrees with it. The OCR is good but not perfect; it is a checklist of places to look, not an authority.

Your job:
1. Read EVERY line of the transcription against the image, word by word, letter by letter, including accents, breathings, iota subscripts and punctuation. The checklist does not limit where you look: errors the OCR did not flag count just as much.
2. Resolve every checklist item and every [?] / [word?] mark from the image.
3. Check the band markers: a line beside which Migne prints a marginal A, B, C or D must begin "[b: X]" with that letter, and no other line may. Add, move or remove markers to match the page.
4. Do NOT correct Migne. If the plate prints an odd spelling or a misprint, the transcription must keep it. You are matching the transcription to the printed page, not to correct Greek.
5. Transcribe only the Greek. Skip running heads, column numbers, footnote marks and all Latin.

Output exactly two sections and nothing else:

=== TEXT
(the full corrected transcription, one line per printed line, same line breaks and end-of-line hyphens as the plate, band markers as above, no line numbers)

=== LEDGER
(one tab-separated row per change you made, in this column order: line number, transcription reading, plate reading, source, certainty, note. Source is one of: flag (it was on the checklist), unsure (it was a [?] mark), band (a band marker), unflagged (you found it yourself). Certainty is "seen" when the letterforms in the image show the reading, or "uncertain" when the image does not settle it and you chose by grammar, sense, the OCR, or the likeliest word. Grammar and sense may tell you an error exists; they never tell you what the plate prints, so any choice made on those grounds is "uncertain". The note is optional and short. Also include a row for every [?] you could NOT resolve, with plate reading "ILLEGIBLE". If there are no changes, write NONE.)

(1) TRANSCRIPTION
{text}

(2) KRAKEN DISAGREEMENTS (word index in the transcription, transcription reading, OCR reading, context)
{diff}"""


def pages():
    return sorted(f[:-4] for f in os.listdir(D('pages')) if f.endswith('.png'))


def segments(regs, width, ink=None):
    """y-ordered (x0, y0, x1, y1) crops at 600 dpi: the Greek column, interrupted by full-width bands."""
    across = lambda b: b[0] < 0.42 * width and b[2] > 0.58 * width   # straddles the gutter: a heading band
    main = [r['box'] for r in regs if r['class'].startswith('MainText') and r['conf'] >= 0.25]
    col = [b for b in (r['box'] for r in regs if r['class'] == 'MainText_ColGreek' and r['conf'] >= 0.25)
           if not across(b)]
    if not col: return None
    left = sum((b[0] + b[2]) / 2 < width / 2 for b in col) * 2 >= len(col)
    x0 = min(b[0] for b in col) - (MARGIN if left else GUTTER)
    x1 = max(b[2] for b in col) + (GUTTER if left else MARGIN)
    top, bot = min(b[1] for b in main) - MARGIN, max(b[3] for b in main) + MARGIN   # main, not col: a last Greek line can lack a box (p-0951)
    bands = sorted([b[1] - 15, b[3] + 15] for b in main if across(b) and b[1] < bot)
    # a stretch of the column that no box covers may hold an undetected heading set across the page
    # (p-0839, Doctrina I): give it the full width too
    cov = sorted([b[1], b[3]] for b in col) + [[c[0], c[1]] for c in bands]
    cov.sort(); y = top + MARGIN
    for c0, c1 in cov:
        if c0 - y > 100 and ink is not None:
            mid = ink[y:c0, int(0.46 * width):int(0.54 * width)].any(1)   # rows with ink across the gutter
            if mid.sum() > max(60, 0.25 * (c0 - y)): bands.append([y, c0])
        y = max(y, c1)
    bands.sort()
    merged = []
    for b in bands:
        if merged and b[0] <= merged[-1][1]: merged[-1][1] = max(merged[-1][1], b[1])
        else: merged.append(b)
    out, y = [], top
    for b0, b1 in merged:
        if b0 > y: out.append((x0, y, x1, b0))
        out.append((0, max(b0, y), width, b1)); y = max(y, b1)
    if bot > y: out.append((x0, y, x1, bot))
    return [(int(max(0, a)), int(max(0, b)), int(min(c, width)), int(d)) for a, b, c, d in out if d - b > 20]


def cut(im):
    """Split a 300-dpi crop into strips of about STRIP_H, cutting at the emptiest row near each target."""
    a = np.array(im) < 128; H = a.shape[0]; rows = a.sum(1)
    n = max(1, round(H / STRIP_H)); cuts = [0]
    for k in range(1, n):
        t = H * k // n; w = range(max(0, t - 150), min(H, t + 150))
        cuts.append(min(w, key=lambda y: (rows[max(0, y - 10):y + 10].sum(), abs(y - t))))   # widest blank row near t
    return [im.crop((0, cuts[i], im.width, (cuts + [H])[i + 1])) for i in range(n)]


def make_strips():
    regions = json.load(open(D('regions.json')))
    os.makedirs(D('img'), exist_ok=True); bad = []
    for p in pages():
        page = Image.open(D('pages', p + '.png')).convert('L')
        segs = segments(regions.get(p, []), page.width, np.array(page) < 128)
        if not segs: bad.append(p); continue
        n = 0
        for s in segs:
            c = page.crop(s); c = c.resize((c.width // 2, c.height // 2), Image.LANCZOS)
            for st in cut(c):
                st.save(D('img', f'{p}-{n:02d}.png')); n += 1
    print(len(pages()) - len(bad), 'pages cut;', 'no Greek column:', bad or 'none')


def images(p):
    out = []
    for f in sorted(f for f in os.listdir(D('img')) if f.startswith(p + '-')):
        out.append({'type': 'image', 'source': {'type': 'base64', 'media_type': 'image/png',
                    'data': base64.b64encode(open(D('img', f), 'rb').read()).decode()}})
    return out


def read_params(p, model):
    return {'model': model, 'max_tokens': 16000, 'messages': [{'role': 'user', 'content':
            images(p) + [{'type': 'text', 'text': READ_PROMPT.format(vol=WORKS[work])}]}]}


def check_params(p, model):
    text = open(D('api', p + '.txt'), encoding='utf-8').read().rstrip('\n').split('\n')
    numbered = '\n'.join(f'{i + 1:>3}  {l}' for i, l in enumerate(text))
    diff = open(D('diff', p + '.txt'), encoding='utf-8').read()
    diff = '\n'.join(l for l in diff.split('\n') if l.startswith('  @')) or '(none)'
    return {'model': model, 'max_tokens': 32000, 'messages': [{'role': 'user', 'content':
            images(p) + [{'type': 'text', 'text': CHECK_PROMPT.format(vol=WORKS[work], text=numbered, diff=diff)}]}]}


def save_read(p, msg):
    text = ''.join(b.text for b in msg.content if b.type == 'text')
    os.makedirs(D('api'), exist_ok=True)
    open(D('api', p + '.txt'), 'w', encoding='utf-8').write(text.rstrip('\n') + '\n')
    u = msg.usage
    return {'page': p, 'input': u.input_tokens, 'output': u.output_tokens, 'stop': msg.stop_reason,
            'lines': text.count('\n') + 1, 'bands': len(re.findall(r'\[b: [A-D]\]', text)), 'unsure': text.count('?]')}


def save_check(p, msg):
    raw = ''.join(b.text for b in msg.content if b.type == 'text')
    text, _, ledger = raw.partition('=== LEDGER')
    text = text.replace('=== TEXT', '').strip('\n')
    os.makedirs(D('checked'), exist_ok=True)
    open(D('checked', p + '.txt'), 'w', encoding='utf-8').write(text + '\n')
    rows = [l for l in ledger.strip().split('\n') if l.strip() and l.strip() != 'NONE']
    open(D('checked', p + '.ledger.tsv'), 'w', encoding='utf-8').write('\n'.join(rows) + '\n')
    u = msg.usage
    src = [r.split('\t')[3].strip() if r.count('\t') >= 3 else '?' for r in rows]
    return {'page': p, 'input': u.input_tokens, 'output': u.output_tokens, 'stop': msg.stop_reason,
            'changes': len(rows), 'by_source': {s: src.count(s) for s in set(src)},
            'bands': len(re.findall(r'\[b: [A-D]\]', text)),
            'illegible': sum('ILLEGIBLE' in r for r in rows),
            'uncertain': sum(r.count('\t') >= 4 and r.split('\t')[4].strip() == 'uncertain' for r in rows)}


def make_diffs():
    os.makedirs(D('diff'), exist_ok=True); rows = ['page\twords\tdisagreements\tflagged\tpct\tunsure']
    for p in pages():
        if not os.path.exists(D('api', p + '.txt')): continue
        t = open(D('api', p + '.txt'), encoding='utf-8').read()
        with tempfile.NamedTemporaryFile('w', suffix='.txt', delete=False, encoding='utf-8') as f:
            f.write(re.sub(r'\[b: [A-D]\] ?', '', t))   # band markers are not text
        out = subprocess.run(['python3', os.path.join(HERE, 'maximus-cllg-diff.py'), f.name, D('text', p + '.txt')],
                             capture_output=True, text=True).stdout
        os.unlink(f.name)
        open(D('diff', p + '.txt'), 'w', encoding='utf-8').write(out)
        m = re.search(r'words in span (\d+); disagreements (\d+); words flagged (\d+) \(([\d.]+)%\)', out)
        rows.append('\t'.join([p, *(m.groups() if m else ('?',) * 4), str(t.count('?]'))]))
    open(D('diff', 'SUMMARY.tsv'), 'w').write('\n'.join(rows) + '\n')
    print('\n'.join(rows[:1] + sorted(rows[1:], key=lambda r: -float(r.split('\t')[4]) if r.split('\t')[4] != '?' else 0)[:12]))


def run(kind, arg, model):
    import anthropic
    key = subprocess.run(['security', 'find-generic-password', '-s', 'anthropic-api', '-w'],
                         capture_output=True, text=True, check=True).stdout.strip()
    c = anthropic.Anthropic(api_key=key)
    params, save, outdir = (read_params, save_read, 'api') if kind == 'read' else (check_params, save_check, 'checked')
    os.makedirs(D(outdir), exist_ok=True)
    if arg == '--submit':
        only = os.environ.get('PAGES')   # optional comma list: a partial re-run
        todo = [p for p in pages() if (kind == 'read' or os.path.exists(D('diff', p + '.txt'))) and (not only or p in only.split(','))]
        b = c.messages.batches.create(requests=[{'custom_id': p, 'params': params(p, model)} for p in todo])
        open(D(outdir, 'batches.log'), 'a').write(f'{b.id}\t{model}\t{todo[0]}..{todo[-1]}\t{len(todo)} pages\n')
        print(b.id, b.processing_status, len(todo), 'pages', model)
    elif arg == '--fetch':
        b = c.messages.batches.retrieve(sys.argv[4])
        print(b.processing_status, b.request_counts)
        if b.processing_status != 'ended': return
        tin = tout = 0; bad = []; rows = []
        for r in c.messages.batches.results(b.id):
            if r.result.type != 'succeeded': bad.append((r.custom_id, r.result.type)); continue
            row = save(r.custom_id, r.result.message); rows.append(row)
            tin += row['input']; tout += row['output']
            if row['stop'] != 'end_turn': bad.append((r.custom_id, row['stop']))
            model = r.result.message.model
        with open(D(outdir, 'SUMMARY.jsonl'), 'w') as f:
            for row in sorted(rows, key=lambda x: x['page']): f.write(json.dumps(row, ensure_ascii=False) + '\n')
        pi, po = PRICE.get(model, PRICE[MODEL])
        print(json.dumps({'input': tin, 'output': tout, 'usd_batch': round((tin * pi + tout * po) / 2e6, 2), 'problems': bad}))
    else:
        with c.messages.stream(**params(arg, model)) as s:
            msg = s.get_final_message()
        row = save(arg, msg); pi, po = PRICE.get(model, PRICE[MODEL])
        print(json.dumps({**row, 'model': model, 'usd': round((row['input'] * pi + row['output'] * po) / 1e6, 3),
                          'usd_batch': round((row['input'] * pi + row['output'] * po) / 2e6, 3)}, ensure_ascii=False))


if __name__ == '__main__':
    cmd = sys.argv[2]
    if cmd == 'strips': make_strips()
    elif cmd == 'diff': make_diffs()
    elif cmd in ('read', 'check'):
        model = sys.argv[5] if sys.argv[3] == '--fetch' and len(sys.argv) > 5 else (sys.argv[4] if len(sys.argv) > 4 and sys.argv[3] != '--fetch' else MODEL)
        run(cmd, sys.argv[3], model)
