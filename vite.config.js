import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { readFileSync, existsSync, readdirSync, statSync } from 'fs';

const ROOT = resolve(__dirname);

function findHtmlFiles(dir, entries = {}) {
  for (const item of readdirSync(dir)) {
    if (['node_modules', 'dist', '.git', '.cache', 'public'].includes(item)) continue;
    const full = resolve(dir, item);
    if (statSync(full).isDirectory()) {
      findHtmlFiles(full, entries);
    } else if (item === 'index.html') {
      const key = full.replace(ROOT + '/', '').replace(/\/index\.html$/, '') || 'main';
      entries[key] = full;
    }
  }
  return entries;
}

// Static HTML routes served outside the React SPA.
// Only subpaths (e.g. /blog/slug) are intercepted — /blog itself is handled by React.
const STATIC_PREFIXES = ['/blog/'];

export default defineConfig({
  plugins: [
    react(),
    {
      // Dev-server middleware: intercept static-HTML routes before
      // Vite's SPA fallback serves the React index.html instead.
      name: 'static-html-routes',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url.split('?')[0];
          const isStatic = STATIC_PREFIXES.some(p => url.startsWith(p));
          if (!isStatic) return next();

          // Resolve to index.html for directory paths
          let filePath = resolve(ROOT, url.replace(/^\//, ''));
          if (!filePath.endsWith('.html')) {
            filePath = resolve(filePath, 'index.html');
          }

          if (existsSync(filePath)) {
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(readFileSync(filePath, 'utf-8'));
          } else {
            next();
          }
        });
      },
    },
  ],
  server: { port: 5173 },
  build: {
    rollupOptions: {
      input: findHtmlFiles(ROOT),
    },
  },
});
