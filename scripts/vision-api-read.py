#!/usr/bin/env python3
"""Blind vision read of one PG plate column through the Anthropic API (no agent overhead).
The key comes from the macOS Keychain (service "anthropic-api"), never from ANTHROPIC_API_KEY,
so Claude Code sessions keep billing the subscription.
  uv run --with anthropic scripts/vision-api-read.py <page> [model]
  uv run --with anthropic scripts/vision-api-read.py --submit <first> <last> [skip,...]   # Batch API, -50%
  uv run --with anthropic scripts/vision-api-read.py --fetch <batch_id>
Reads raw/pg091/ep-strips/p<page>-{0,1,2}.png, writes raw/pg091/api/p<page>.txt, prints token usage.
Batch ids are logged to raw/pg091/api/batches.log.
"""
import sys, os, base64, subprocess, json
import anthropic

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'raw', 'pg091')
PROMPT = """You are transcribing the GREEK text of one column of Migne's Patrologia Graeca vol. 91 (Maximus the Confessor, Epistulae), from images. Output must be a faithful diplomatic transcription. The images are three consecutive horizontal strips of ONE column, cut between lines, in order.

Rules:
1. Transcribe ONLY the Greek. Skip: the running head, column numbers, marginal letters (A B C D), all Latin text (Combefis' notes and footnotes at the foot, Latin translations), footnote marks and apparatus.
2. One output line per printed line. Keep a hyphen at the end of a line that breaks a word ("συνθεωρού-"), and do not join the halves.
3. Reproduce exactly what is printed: every accent, breathing, iota subscript, diaeresis, elision mark (᾿), and punctuation (the ano teleia is ·, the question mark is ;). Use precomposed polytonic Unicode.
4. Do NOT correct, modernize, or "improve" anything, and do not substitute the word you expect for the word you see. If a spelling looks odd, it is probably what is printed. Read letter by letter, especially: κ/χ, β/θ, ε/ο, ι/υ, α/ο, ν/υ, and accents and breathings (grave/acute, smooth/rough).
5. Mark a letter or word you cannot read with confidence as [?], or [word?] after your best guess. Do not guess silently.
6. Greek headings or titles (e.g. "Ἐπιστολὴ Α΄", "Πρὸς ...") are included, on their own lines.

Output only the transcription: plain text, no commentary, no code fence."""

MODEL = 'claude-sonnet-5-5'
OUT = os.path.join(ROOT, 'api')

def client():
    key = subprocess.run(['security', 'find-generic-password', '-s', 'anthropic-api', '-w'],
                         capture_output=True, text=True, check=True).stdout.strip()
    return anthropic.Anthropic(api_key=key)

def params(page, model=MODEL):
    content = []
    for i in range(3):
        with open(os.path.join(ROOT, 'ep-strips', f'p{page}-{i}.png'), 'rb') as f:
            content.append({'type': 'image', 'source': {'type': 'base64', 'media_type': 'image/png',
                                                        'data': base64.b64encode(f.read()).decode()}})
    content.append({'type': 'text', 'text': PROMPT})
    return {'model': model, 'max_tokens': 16000, 'messages': [{'role': 'user', 'content': content}]}

def save(page, msg):
    text = ''.join(b.text for b in msg.content if b.type == 'text')
    os.makedirs(OUT, exist_ok=True)
    with open(os.path.join(OUT, f'p{page}.txt'), 'w', encoding='utf-8') as f:
        f.write(text.rstrip('\n') + '\n')
    u = msg.usage
    return {'page': page, 'input': u.input_tokens, 'output': u.output_tokens,
            'lines': text.count('\n') + 1, 'unsure': text.count('?]'), 'stop': msg.stop_reason}

c = client()
if sys.argv[1] == '--submit':
    first, last = int(sys.argv[2]), int(sys.argv[3])
    skip = set(sys.argv[4].split(',')) if len(sys.argv) > 4 else set()
    pages = [str(p) for p in range(first, last + 1) if str(p) not in skip]
    b = c.messages.batches.create(requests=[{'custom_id': f'p{p}', 'params': params(p)} for p in pages])
    os.makedirs(OUT, exist_ok=True)
    with open(os.path.join(OUT, 'batches.log'), 'a') as f:
        f.write(f'{b.id}\t{pages[0]}-{pages[-1]}\t{len(pages)} pages\n')
    print(b.id, b.processing_status, len(pages), 'pages')
elif sys.argv[1] == '--fetch':
    b = c.messages.batches.retrieve(sys.argv[2])
    print(b.processing_status, b.request_counts)
    if b.processing_status == 'ended':
        tin = tout = 0; bad = []
        for r in c.messages.batches.results(b.id):
            if r.result.type != 'succeeded': bad.append((r.custom_id, r.result.type)); continue
            row = save(r.custom_id[1:], r.result.message)
            tin += row['input']; tout += row['output']
            if row['stop'] != 'end_turn': bad.append((r.custom_id, row['stop']))
        print(json.dumps({'input': tin, 'output': tout, 'usd_batch': round((tin * 2 + tout * 10) / 2e6, 2),
                          'problems': bad}))
else:
    page = sys.argv[1]
    model = sys.argv[2] if len(sys.argv) > 2 else MODEL
    print(json.dumps({**save(page, c.messages.create(**params(page, model))), 'model': model}))
