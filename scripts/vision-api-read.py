#!/usr/bin/env python3
"""Blind vision read of one PG plate column through the Anthropic API (no agent overhead).
The key comes from the macOS Keychain (service "anthropic-api"), never from ANTHROPIC_API_KEY,
so Claude Code sessions keep billing the subscription.
  uv run --with anthropic scripts/vision-api-read.py <page> [model]
Reads raw/pg091/ep-strips/p<page>-{0,1,2}.png, writes raw/pg091/api/p<page>.txt, prints token usage.
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

page = sys.argv[1]
model = sys.argv[2] if len(sys.argv) > 2 else 'claude-sonnet-5-5'
key = subprocess.run(['security', 'find-generic-password', '-s', 'anthropic-api', '-w'],
                     capture_output=True, text=True, check=True).stdout.strip()
client = anthropic.Anthropic(api_key=key)

content = []
for i in range(3):
    with open(os.path.join(ROOT, 'ep-strips', f'p{page}-{i}.png'), 'rb') as f:
        content.append({'type': 'image', 'source': {'type': 'base64', 'media_type': 'image/png',
                                                    'data': base64.b64encode(f.read()).decode()}})
content.append({'type': 'text', 'text': PROMPT})

msg = client.messages.create(model=model, max_tokens=8000, messages=[{'role': 'user', 'content': content}])
text = ''.join(b.text for b in msg.content if b.type == 'text')
os.makedirs(os.path.join(ROOT, 'api'), exist_ok=True)
with open(os.path.join(ROOT, 'api', f'p{page}.txt'), 'w', encoding='utf-8') as f:
    f.write(text.rstrip('\n') + '\n')
u = msg.usage
print(json.dumps({'page': page, 'model': model, 'input': u.input_tokens, 'output': u.output_tokens,
                  'lines': text.count('\n') + 1, 'unsure': text.count('?]'), 'stop': msg.stop_reason}))
