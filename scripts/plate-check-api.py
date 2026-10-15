#!/usr/bin/env python3
"""Every-page plate check of the Epistulae base text (pg-paired-pilot 0i), through the Anthropic API.
Per page: the Greek column at 300 dpi (cut into 6 strips so the API keeps near-native resolution),
the blind API read with numbered lines, and its CLLG disagreement list. The model reads EVERY line
against the plate (flags are a checklist, not a scope) and returns the corrected text plus a ledger.
  uv run --with anthropic,pillow,numpy scripts/plate-check-api.py <page> [model]
  uv run --with anthropic,pillow,numpy scripts/plate-check-api.py --submit <first> <last>   # Batch API
  uv run --with anthropic,pillow,numpy scripts/plate-check-api.py --fetch <batch_id>
Writes raw/pg091/checked/p<page>.txt and p<page>.ledger.tsv; prints token usage.
Ledger columns: line, transcription, plate, source (flag|unsure|unflagged), certainty (seen|uncertain), note.
Key: macOS Keychain service "anthropic-api" (never ANTHROPIC_API_KEY).
"""
import sys, os, io, base64, subprocess, json
import numpy as np
from PIL import Image
import anthropic

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'raw', 'pg091')
OUT = os.path.join(ROOT, 'checked')
MODEL = 'claude-sonnet-5-5'
NSTRIPS = 6

PROMPT = """You are checking a transcription of the GREEK column of one page of Migne's Patrologia Graeca vol. 91 (Maximus the Confessor, Epistulae) against the printed page. The images are {n} consecutive horizontal strips of that one Greek column, top to bottom.

Below are (1) the transcription, with line numbers, and (2) a list of places where an independent OCR (CLLG) disagrees with it. The OCR is noisy and is often wrong; it is a checklist of places to look, not an authority.

Your job:
1. Read EVERY line of the transcription against the image, word by word, letter by letter, including accents, breathings, iota subscripts and punctuation. The checklist does not limit where you look: errors the OCR did not flag count just as much.
2. Resolve every checklist item and every [?] / [word?] mark from the image.
3. Do NOT correct Migne. If the plate prints an odd spelling or a misprint, the transcription must keep it. You are matching the transcription to the printed page, not to correct Greek.
4. Transcribe only the Greek column. Skip running heads, column numbers, marginal letters A-D, footnote marks and Latin.

Output exactly two sections and nothing else:

=== TEXT
(the full corrected transcription, one line per printed line, same line breaks and end-of-line hyphens as the plate, no line numbers)

=== LEDGER
(one tab-separated row per change you made, in this column order: line number, transcription reading, plate reading, source, certainty, note. Source is one of: flag (it was on the checklist), unsure (it was a [?] mark), unflagged (you found it yourself). Certainty is "seen" when the letterforms in the image show the reading, or "uncertain" when the image does not settle it and you chose by grammar, sense, the OCR, or the likeliest word. Grammar and sense may tell you an error exists; they never tell you what the plate prints, so any choice made on those grounds is "uncertain". The note is optional and short. Also include a row for every [?] you could NOT resolve, with plate reading "ILLEGIBLE". If there are no changes, write NONE.)

(1) TRANSCRIPTION
{text}

(2) CLLG DISAGREEMENTS (word index in the transcription, transcription reading, OCR reading, context)
{diff}"""

def strips(page):
    im = Image.open(os.path.join(ROOT, 'ep-img', f'g{page}.png')).convert('L')
    a = np.array(im) < 128; H, W = a.shape; rows = a.sum(1); cuts = [0]
    for k in range(1, NSTRIPS):
        t = H * k // NSTRIPS; w = range(max(0, t - 80), min(H, t + 80))
        cuts.append(min(w, key=lambda y: (rows[max(0, y - 6):y + 6].sum(), abs(y - t))))
    cuts.append(H)
    out = []
    for i in range(NSTRIPS):
        b = io.BytesIO(); im.crop((0, cuts[i], W, cuts[i + 1])).save(b, 'PNG')
        out.append({'type': 'image', 'source': {'type': 'base64', 'media_type': 'image/png',
                                                'data': base64.b64encode(b.getvalue()).decode()}})
    return out

def params(page, model=MODEL):
    text = open(os.path.join(ROOT, 'api', f'p{page}.txt'), encoding='utf-8').read().rstrip('\n').split('\n')
    numbered = '\n'.join(f'{i + 1:>3}  {l}' for i, l in enumerate(text))
    diff = open(os.path.join(ROOT, 'api', 'diff', f'p{page}.txt'), encoding='utf-8').read()
    diff = '\n'.join(l for l in diff.split('\n') if l.startswith('  @')) or '(none)'
    content = strips(page) + [{'type': 'text', 'text': PROMPT.format(n=NSTRIPS, text=numbered, diff=diff)}]
    return {'model': model, 'max_tokens': 32000, 'messages': [{'role': 'user', 'content': content}]}

def save(page, msg):
    raw = ''.join(b.text for b in msg.content if b.type == 'text')
    text, _, ledger = raw.partition('=== LEDGER')
    text = text.replace('=== TEXT', '').strip('\n')
    os.makedirs(OUT, exist_ok=True)
    open(os.path.join(OUT, f'p{page}.txt'), 'w', encoding='utf-8').write(text + '\n')
    rows = [l for l in ledger.strip().split('\n') if l.strip() and l.strip() != 'NONE']
    open(os.path.join(OUT, f'p{page}.ledger.tsv'), 'w', encoding='utf-8').write('\n'.join(rows) + '\n')
    u = msg.usage
    src = [r.split('\t')[3].strip() if r.count('\t') >= 3 else '?' for r in rows]
    return {'page': page, 'input': u.input_tokens, 'output': u.output_tokens, 'stop': msg.stop_reason,
            'changes': len(rows), 'by_source': {s: src.count(s) for s in set(src)},
            'illegible': sum('ILLEGIBLE' in r for r in rows),
            'uncertain': sum(r.count('\t') >= 4 and r.split('\t')[4].strip() == 'uncertain' for r in rows)}

if __name__ == '__main__':
    key = subprocess.run(['security', 'find-generic-password', '-s', 'anthropic-api', '-w'],
                         capture_output=True, text=True, check=True).stdout.strip()
    c = anthropic.Anthropic(api_key=key)
    if sys.argv[1] == '--submit':
        pages = [str(p) for p in range(int(sys.argv[2]), int(sys.argv[3]) + 1)
                 if os.path.exists(os.path.join(ROOT, 'api', f'p{p}.txt'))]
        b = c.messages.batches.create(requests=[{'custom_id': f'p{p}', 'params': params(p)} for p in pages])
        os.makedirs(OUT, exist_ok=True)
        open(os.path.join(OUT, 'batches.log'), 'a').write(f'{b.id}\t{pages[0]}-{pages[-1]}\t{len(pages)} pages\n')
        print(b.id, b.processing_status, len(pages), 'pages')
    elif sys.argv[1] == '--fetch':
        b = c.messages.batches.retrieve(sys.argv[2])
        print(b.processing_status, b.request_counts)
        if b.processing_status == 'ended':
            tin = tout = 0; bad = []; rows = []
            for r in c.messages.batches.results(b.id):
                if r.result.type != 'succeeded': bad.append((r.custom_id, r.result.type)); continue
                row = save(r.custom_id[1:], r.result.message); rows.append(row)
                tin += row['input']; tout += row['output']
                if row['stop'] != 'end_turn': bad.append((r.custom_id, row['stop']))
            with open(os.path.join(OUT, 'SUMMARY.jsonl'), 'w') as f:
                for row in sorted(rows, key=lambda x: int(x['page'])): f.write(json.dumps(row, ensure_ascii=False) + '\n')
            print(json.dumps({'input': tin, 'output': tout, 'usd_batch': round((tin * 2 + tout * 10) / 2e6, 2),
                              'problems': bad}))
    else:
        page = sys.argv[1]; model = sys.argv[2] if len(sys.argv) > 2 else MODEL
        with c.messages.stream(**params(page, model)) as s:
            msg = s.get_final_message()
        print(json.dumps({**save(page, msg), 'model': model}, ensure_ascii=False))
