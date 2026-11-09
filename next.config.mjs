/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build to plain static HTML in out/ so the site can stay on GitHub Pages.
  output: 'export',
  // Emit katalog/index.html instead of katalog.html, matching the URLs the
  // old prerender script produced (GitHub Pages serves /katalog/).
  trailingSlash: true,
  // next/image optimization needs a server, which static export doesn't have.
  images: { unoptimized: true },
};

export default nextConfig;
