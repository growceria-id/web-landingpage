import Link from 'next/link';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav.jsx';
import Footer from '@/components/Footer.jsx';
import { BLOG_POSTS } from '@/data.js';
import { getPost } from '@/lib/blog.js';
import { pageMetadata, JsonLd, SITE_URL, DEFAULT_OG_IMAGE } from '@/lib/seo.jsx';
import { formatDate } from '@/utils.js';

// Only the slugs in BLOG_POSTS exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}/`,
    type: 'article',
  });
}

function articleJsonLd(post) {
  const url = `${SITE_URL}/blog/${post.slug}/`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: DEFAULT_OG_IMAGE,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Growceria' },
    publisher: {
      '@type': 'Organization',
      name: 'Growceria',
      logo: { '@type': 'ImageObject', url: DEFAULT_OG_IMAGE },
    },
    mainEntityOfPage: url,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={articleJsonLd(post)} />
      <Nav active="blog" />

      <section className="page-hero blog-post-hero">
        <div className="wrap">
          <Link href="/blog/" className="blog-back">← Kembali ke Blog</Link>
          <div className="blog-post-meta">
            <span className="blog-cat">{post.category}</span>
            <span>{post.readTime} baca</span>
            <span>{formatDate(post.date)}</span>
          </div>
          <h1 style={{ maxWidth: 760 }}>{post.title}</h1>
          <p style={{ maxWidth: 640 }}>{post.intro}</p>
        </div>
      </section>

      <section className="blog-post-body">
        <div className="wrap">
          {/* Article body is trusted, repo-owned HTML from src/content/blog/. */}
          <article className="blog-content" dangerouslySetInnerHTML={{ __html: post.html }} />
          <div className="blog-post-foot">
            <Link href="/blog/" className="btn btn-ghost">← Semua Artikel</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
