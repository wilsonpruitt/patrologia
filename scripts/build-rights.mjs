#!/usr/bin/env node
// Build /rights/ — the public rights statement for migne.app.
//
// The prose here is the human-readable face of LICENSE at the repo root. The
// two must agree; if you change the terms, change both. The distinction that
// does the work: Migne's Latin and Greek are public domain and stay that way,
// and what is licensed is our English, our apparatus, and our encoding.
//
// Usage: node scripts/build-rights.mjs

import fs from 'node:fs';
import path from 'node:path';
import { head, header, footer } from './lib/chrome.mjs';

const ROOT = path.join(import.meta.dirname, '..');
const CC = 'https://creativecommons.org/licenses/by-nc/4.0/';

const html = `${head({
  title: 'Rights and Reuse · Migne',
  description:
    'The Latin and Greek are public domain. The English translations, notes, and structured text are licensed CC BY-NC 4.0 — free to share and build on, not to sell.',
  path: '/rights/',
})}

${header()}

<main class="essay">
  <div class="essay-head">
    <p class="kicker">Rights and reuse</p>
    <h1>What you may do with this</h1>
    <p class="essay-sub">The short version: the ancient texts are free without condition. Our English is free for everything but selling.</p>
  </div>
  <article class="essay-body">

    <h2>The Latin and the Greek are public domain</h2>

    <p>Everything Migne printed is out of copyright, and so are the editions he
    reprinted. Copying a public-domain text faithfully does not create a new
    copyright in it, and this project does not pretend otherwise. Take the Latin.
    Take the Greek. Sell it, fork it, feed it to a machine, print it and put your
    own name on the spine. You need nothing from us.</p>

    <p>Two upstream digitizations deserve their credit, and their terms travel
    with the text. The Greek for the OCRized volumes comes from the
    <a href="https://www.uclouvain.be/fr/instituts-recherche/incal/ciol/calfa-gregori-patrologia-graeca" target="_blank" rel="noopener">CGPG
    corpus</a> — Calfa GRE<i>g</i>ORI Patrologia Graeca, led by Jean-Marie Auwers
    at UCLouvain — released under
    <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC&nbsp;BY&nbsp;4.0</a>;
    if you reuse that Greek, credit them and say that it was changed. The Latin
    comes from the University of Zurich's
    <a href="https://www.mlat.uzh.ch" target="_blank" rel="noopener">Corpus Corporum</a>,
    encoded in TEI by Ph. Roelli. Nothing here is a claim over their work.</p>

    <h2>Our English, our notes, and our encoding are licensed</h2>

    <p>The translations are new. So are the headnotes, the “On this text”
    apparatus, the Migne biography, and the volume and author introductions.
    So — less obviously, and this is the part that took the years — is the
    <i>structure</i>: the work-keyed store and its CPL/CPG identifiers, the
    volume-and-column citation scheme and the machinery that resolves it to a
    URL, the placement of every column anchor inside the text, the segmentation
    of works into sections, the author normalization, the tracking of
    Migne-original against Garnier-reprint column numbering, and each correction
    made against the plates.</p>

    <p>That structure is the difference between a scan and a library. It is
    claimed here as a compilation — the arrangement and the encoding, not the
    text underneath. Lifting the Latin is free. Lifting our keys, anchors, and
    segmentation is not.</p>

    <p>All of it is offered to the public under the
    <a href="${CC}" target="_blank" rel="noopener">Creative Commons
    Attribution&#8209;NonCommercial&nbsp;4.0 International License</a>.</p>

    <h2>So, concretely</h2>

    <p><b>Yes, freely, no need to ask.</b> Quote it in a sermon or a homily.
    Assign it to a class. Post it to a parish site. Cite it in a dissertation.
    Copy a whole treatise into a study guide you give away. Translate our English
    into another language. Correct us and publish the correction. Mirror the
    thing entire, if you fear it will vanish. Credit us, link the license, and
    say if you changed anything.</p>

    <p><b>Ask first.</b> Selling it. A print or ebook edition for sale, a
    subscription or paywalled database, a commercial reference product or piece
    of software with our text inside it.</p>

    <p><b>Asking works.</b> Permission is given readily, and it is given for
    free to scholarly and ecclesial projects. What the license is really for is
    the case this whole site exists against: the commercial databases that have
    kept the Fathers behind a login for a generation, and the reprint shops that
    would scrape a corpus like this one and sell it back to the people it was
    made for. Write to
    <a href="mailto:wilson@wrootlabs.com">wilson@wrootlabs.com</a> and say what
    you have in mind.</p>

    <h2>Attribution</h2>

    <p>Anything in this form will do:</p>

    <p style="padding-left:1.2rem;border-left:2px solid var(--dorure);font-style:italic;">
    English translation and structured text from migne.app (Wilson Pruitt, Wroot
    Press), licensed CC&nbsp;BY&#8209;NC&nbsp;4.0. Latin/Greek source: public
    domain.</p>

    <hr class="rule-light">

    <p style="font-size:.92rem;color:var(--encre-douce);">Migne is a Wroot Press
    work; Wroot Press is an imprint of Wroot Labs LLC. The copyright holder
    retains all rights and is not bound by this license — Wroot Press publishes
    print editions drawn from this material, which is part of how the
    translation gets paid for. The full legal statement lives in the
    <code>LICENSE</code> file in the project repository.</p>

  </article>
</main>

${footer()}`;

fs.mkdirSync(path.join(ROOT, 'site/rights'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'site/rights/index.html'), html);
console.log('built site/rights/index.html');
