# per PDF page: running-head column numbers (L,R) and which half carries the Latin (by known Latin words)
import re, json, html
LAT = set(l.strip() for l in open('latin-words.txt'))
x = open('091_djvu.xml', encoding='utf-8').read()
out = []
for i, obj in enumerate(re.split(r'<OBJECT', x)[1:], 1):
    m = re.search(r'width="(\d+)" height="(\d+)"', obj); W, H = int(m[1]), int(m[2])
    nums, lat = [], [0, 0]
    for c, w in re.findall(r'<WORD coords="([\d,]+)"[^>]*>([^<]*)</WORD>', obj):
        x0, y1, x1, y0 = map(int, c.split(',')[:4]); w = html.unescape(w)
        if y0 < H * 0.08 and re.fullmatch(r'\d{2,4}', w): nums.append((x0, int(w)))
        lw = re.sub(r'[^a-z]', '', w.lower())
        if len(lw) > 3 and lw in LAT: lat[0 if (x0 + x1) / 2 < W / 2 else 1] += 1
    nums.sort(); out.append(dict(page=i, L=nums[0][1] if nums else None, R=nums[-1][1] if len(nums) > 1 else None,
                                 latL=lat[0], latR=lat[1], W=W, H=H))
json.dump(out, open('pagemap.json', 'w'))
for r in out:
    if 150 <= r['page'] <= 380: print(r['page'], r['L'], r['R'], r['latL'], r['latR'])
