import { readFile } from 'node:fs/promises';
const f = n => readFile(new URL(`../fonts/${n}`, import.meta.url));
let cache;
export async function fonts() {
  cache ??= Promise.all([f('EBGaramond12-Regular.otf'), f('EBGaramond12-Italic.otf'), f('TheanoDidotRegular-R3pA.ttf')]).then(([r, i, d]) => [
    { name: 'EB Garamond', data: r, weight: 400, style: 'normal' },
    { name: 'EB Garamond', data: i, weight: 400, style: 'italic' },
    { name: 'Theano Didot', data: d, weight: 400, style: 'normal' },
  ]);
  return cache;
}
