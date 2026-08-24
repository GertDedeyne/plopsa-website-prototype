import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, basename, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '../../../project-inputs/icons');
const OUT = resolve(import.meta.dirname, '../public/icons.svg');
const CATEGORIES = ['large', 'medium', 'small', 'social', 'country'];

function toKebab(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

function extractViewBox(svg) {
  const match = svg.match(/viewBox=["']([^"']+)["']/);
  return match ? match[1] : null;
}

function extractInner(svg) {
  const open = svg.indexOf('>');
  const close = svg.lastIndexOf('</svg>');
  if (open === -1 || close === -1) return '';
  return svg.slice(open + 1, close).trim();
}

function stripFills(content) {
  return content.replace(/\sfill="(?!none)[^"]*"/g, '');
}

const symbols = [];

for (const category of CATEGORIES) {
  const dir = join(ROOT, category);
  let files;
  try {
    files = readdirSync(dir).filter((f) => f.endsWith('.svg')).sort();
  } catch {
    continue;
  }

  for (const file of files) {
    const svg = readFileSync(join(dir, file), 'utf8');
    const name = toKebab(basename(file, '.svg'));
    const id = `${category}-${name}`;
    const viewBox = extractViewBox(svg);
    if (!viewBox) continue;

    const inner = stripFills(extractInner(svg));
    symbols.push(`  <symbol id="${id}" viewBox="${viewBox}" fill="currentColor">\n    ${inner}\n  </symbol>`);
  }
}

const sprite = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">\n${symbols.join('\n')}\n</svg>\n`;
writeFileSync(OUT, sprite, 'utf8');
console.log(`Wrote ${symbols.length} symbols to ${OUT}`);
