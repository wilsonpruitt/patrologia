# CLLG pass over Maximus' Epistulae (PG 91.361-650): one Greek column per PDF page, crop at the gutter,
# kraken recognition. Resumable: skips pages whose .txt exists. Run ONE at a time (8 GB machine).
import json, subprocess, sys, os, time
from PIL import Image
from gutter import gutter
PM = {r['page']: r for r in json.load(open('pagemap.json'))}
pages = [163] + list(range(199, 360))
os.makedirs('cllg/ep', exist_ok=True); os.makedirs('ep-img', exist_ok=True)
KR = '../cllg/.venv/bin/kraken'
for p in pages:
    out = f'cllg/ep/p{p}.txt'
    if os.path.exists(out): continue
    t0 = time.time()
    subprocess.run(['pdfimages', '-f', str(p), '-l', str(p), '-png', '091.pdf', f'ep-img/x{p}'], check=True)
    img = Image.open(f'ep-img/x{p}-000.png'); W, H = img.size
    r = PM[p]; side = 'L' if r['latR'] > r['latL'] else 'R'
    g0, g1 = gutter(img)
    if g1 - g0 < 10:   # no two-column body (full-width Latin, e.g. the Monitum on p199): record, skip
        json.dump(dict(page=p, skipped='no gutter found', colsL=r['L'], colsR=r['R']), open(f'cllg/ep/p{p}.json', 'w'))
        open(out, 'w').close()
        [os.remove(f'ep-img/{f}') for f in os.listdir('ep-img') if f.startswith(f'x{p}-')]
        print(p, 'SKIPPED: no gutter', flush=True); continue
    crop = img.crop((0, 0, g1, H)) if side == 'L' else img.crop((g0, 0, W, H))
    cp = f'ep-img/g{p}.png'; crop.save(cp); [os.remove(f'ep-img/{f}') for f in os.listdir('ep-img') if f.startswith(f'x{p}-')]
    subprocess.run([KR, '-i', cp, out + '.part', 'segment', '-bl', 'ocr', '-m', '../cllg/cllg.safetensors',
                    '-B', '8', '--num-line-workers', '0'], stdout=subprocess.DEVNULL, stderr=open(f'ep-img/k{p}.log', 'w'))
    os.rename(out + '.part', out)
    json.dump(dict(page=p, side=side, gutter=[g0, g1], colsL=r['L'], colsR=r['R'], latL=r['latL'], latR=r['latR']),
              open(f'cllg/ep/p{p}.json', 'w'))
    print(p, side, (g0, g1), f'{(time.time()-t0)/60:.1f} min', sum(1 for _ in open(out)), 'lines', flush=True)
