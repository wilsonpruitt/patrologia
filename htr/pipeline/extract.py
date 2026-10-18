"""Greek text from Kraken's whole-page reading, filtered through the regions
(run in ~/.local/share/kraken-venv).

    extract.py <xml-dir> <regions.json> <out-dir>

Per glyph: keep it if its centre is inside a MainText_ColGreek/Title box; or,
when its line is >=80% Greek script, if no region claims it at all (the region
model sometimes misses a Greek block). Lines must stay mostly Greek; they are
ordered top to bottom. Measured on PG 88 (htr/gaptest/score_hybrid.py
--fallback): raw disagreement 4.46% -> 3.32% against our transcriptions.

Output keeps the printed line breaks (one line per printed line, hyphens kept)
so a plate reader can follow the page.
"""
import json, sys, unicodedata, xml.etree.ElementTree as ET
from pathlib import Path

GREEK = {'MainText_ColGreek', 'MainText_Title'}
NOT_GREEK = {'MainText_ColLatin', 'Running', 'Marginalia', 'Marginalia_Footnote',
             'Marginalia_PageNumber', 'Marginalia_ParagraphNumber'}
PAD = 12


def is_greek(c):
    return 'Ͱ' <= c <= 'Ͽ' or 'ἀ' <= c <= '῿'


def greek_ratio(s):
    letters = [c for c in s if c.isalpha()]
    return sum(map(is_greek, letters)) / len(letters) if letters else 0.0


def inside(x, y, boxes):
    return any(b[0] - PAD <= x <= b[2] + PAD and b[1] - PAD <= y <= b[3] + PAD for b in boxes)


def lines(xml, regions):
    greek = [r['box'] for r in regions if r['class'] in GREEK and r['conf'] >= 0.25]
    other = [r['box'] for r in regions if r['class'] in NOT_GREEK]
    root = ET.parse(xml).getroot()
    ns = {'p': root.tag.split('}')[0][1:]}
    out = []
    for tl in root.iter(f'{{{ns["p"]}}}TextLine'):
        glyphs = []
        for g in tl.iter(f'{{{ns["p"]}}}Glyph'):
            pts = [tuple(map(int, q.split(','))) for q in g.find('p:Coords', ns).get('points').split()]
            cx, cy = sum(q[0] for q in pts) / len(pts), sum(q[1] for q in pts) / len(pts)
            glyphs.append((g.find('p:TextEquiv/p:Unicode', ns).text or '',
                           inside(cx, cy, greek), inside(cx, cy, greek + other)))
        gr = greek_ratio(''.join(c for c, _, _ in glyphs))
        text = ''.join(c for c, k, claimed in glyphs if k or (gr >= 0.8 and not claimed)).strip()
        if text and greek_ratio(text) >= 0.5:
            y = min(int(q.split(',')[1]) for q in tl.find('p:Baseline', ns).get('points').split())
            out.append((y, unicodedata.normalize('NFC', text)))
    return [t for _, t in sorted(out)]


if __name__ == '__main__':
    xmls, regions, out = Path(sys.argv[1]), json.loads(Path(sys.argv[2]).read_text()), Path(sys.argv[3])
    out.mkdir(parents=True, exist_ok=True)
    for x in sorted(xmls.glob('p-*.xml')):
        (out / f'{x.stem}.txt').write_text('\n'.join(lines(x, regions.get(x.stem, []))) + '\n')
