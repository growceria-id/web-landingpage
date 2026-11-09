import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

/** @type {(phase: string) => import('next').NextConfig} */
export default function nextConfig(phase) {
  return {
    // Build to plain static HTML in out/ so the site can stay on GitHub Pages.
    output: 'export',
    // Emit katalog/index.html instead of katalog.html. This matches the URLs the
    // old prerender script produced and lets /blog/ sit next to the static
    // blog posts in public/blog/<slug>/.
    trailingSlash: true,
    // next/image optimization needs a server, which static export doesn't have.
    images: { unoptimized: true },

    // The blog posts are hand-written HTML in public/blog/<slug>/index.html.
    // GitHub Pages serves a folder's index.html automatically, but `next dev`
    // only serves public/ files by exact path, so map them here. Dev-only:
    // static export doesn't support rewrites (and doesn't need this one).
    ...(phase === PHASE_DEVELOPMENT_SERVER && {
      async rewrites() {
        return [{ source: '/blog/:slug/', destination: '/blog/:slug/index.html' }];
      },
    }),
  };
}
