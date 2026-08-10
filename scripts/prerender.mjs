// Prerender React routes into static HTML so social crawlers (WhatsApp,
// LinkedIn, Facebook) and search engines see fully-rendered content instead
// of an empty <div id="root">.
//
// Runs as part of `npm run build` (see package.json). It spins up its own
// Vite preview server against dist/, so no manual server setup is needed.
//
// Output: writes dist/<route>/index.html for each route in ROUTES below.
//
// Static HTML blog posts under blog/ are already pre-rendered by Vite's
// rollup input config — this script only handles the SPA routes.

import { mkdirSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { preview } from 'vite';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, '..', 'dist');
const ROUTES = ['/', '/katalog', '/cara-kerja', '/tentang', '/blog'];

if (!existsSync(DIST)) {
  console.error('[prerender] dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

const server = await preview({ preview: { port: 0 } });
const BASE_URL = server.resolvedUrls.local[0].replace(/\/$/, '');

const browser = await puppeteer.launch({
  headless: 'new',
  // CI runners (e.g. GitHub Actions) don't support Chrome's sandbox
  // without extra privileges, so disable it there.
  args: process.env.CI ? ['--no-sandbox', '--disable-setuid-sandbox'] : [],
});
const page = await browser.newPage();

try {
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
} finally {
  await browser.close();
  await new Promise((res) => server.httpServer.close(res));
}

console.log('[prerender] done.');
