import numpy as np
from PIL import Image
def gutter(img):
    """(start, end) x of the column gutter: the widest low-ink valley in the middle 30-70% of the page.
    The valley may hold Migne's marginal section letters (A-D), so 'low' is relative, not zero."""
    a = np.array(img.convert('L')) < 128; H, W = a.shape
    prof = a[int(H * .12):int(H * .92)].mean(0)
    sm = np.convolve(prof, np.ones(15) / 15, mode='same')
    lo, hi = int(W * .3), int(W * .7)
    thr = 0.3 * np.median(sm[lo:hi])
    best, run = (0, 0), None
    for x in range(lo, hi):
        if sm[x] < thr:
            run = run if run is not None else x
            if x - run > best[1] - best[0]: best = (run, x)
        else: run = None
    return best
