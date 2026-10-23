import { readFileSync } from 'fs';
import { join } from 'path';
import { BLOG_POSTS } from '@/data.js';

const CONTENT_DIR = join(process.cwd(), 'src/content/blog');

export function getPost(slug) {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return null;
  return { ...post, html: readFileSync(join(CONTENT_DIR, `${slug}.html`), 'utf-8') };
}
