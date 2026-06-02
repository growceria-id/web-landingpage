// Prerender React routes into static HTML so social crawlers (WhatsApp,
// LinkedIn, Facebook) and other non-JS bots see fully-rendered content.
//
// Usage:
//   1. npm run build
//   2. npm run preview &  (or any static server pointing at dist/)
//   3. node scripts/prerender.mjs
//
// Output: writes dist/<route>/index.html for each route in ROUTES below.
//
// Static HTML blog posts under blog/ are already pre-rendered by Vite's
// rollup input config — this script only handles the SPA routes.

import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, '..', 'dist');
const BASE_URL = process.env.PRERENDER_BASE || 'http://localhost:4173';
const ROUTES = ['/', '/katalog', '/cara-kerja', '/tentang', '/blog'];

let puppeteer;
try {
  puppeteer = (await import('puppeteer')).default;
} catch {
  console.error('[prerender] puppeteer not installed. Run: npm install -D puppeteer');
  process.exit(1);
}

if (!existsSync(DIST)) {
  console.error('[prerender] dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();

for (const route of ROUTES) {
  const url = BASE_URL + route;
  console.log(`[prerender] ${url}`);
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
  // Give Helmet a tick to flush head tags.
  await new Promise((r) => setTimeout(r, 200));
  const html = await page.content();
  const outDir = route === '/' ? DIST : resolve(DIST, route.replace(/^\//, ''));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, 'index.html'), html, 'utf-8');
}

await browser.close();
console.log('[prerender] done.');
