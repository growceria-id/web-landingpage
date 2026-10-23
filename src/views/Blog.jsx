import Link from 'next/link';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import { BLOG_POSTS } from '../data.js';
import { formatDate } from '../utils.js';

export default function Blog() {
  return (
    <>
      <Nav active="blog" />

      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Blog & Panduan</div>
          <h1>Tips & wawasan<br /><em>untuk bisnis kuliner.</em></h1>
          <p>Artikel praktis seputar operasional dapur, pemilihan bahan baku, dan tren F&B untuk membantu bisnis Anda tumbuh.</p>
        </div>
      </section>

      <section className="blog-list">
        <div className="wrap">
          <div className="blog-grid">
            {BLOG_POSTS.map(post => (
              <Link key={post.slug} className="blog-card" href={`/blog/${post.slug}/`}>
                <div className="blog-card-meta">
                  <span className="blog-cat">{post.category}</span>
                  <span className="blog-read">{post.readTime}</span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="blog-card-foot">
                  <span>{formatDate(post.date)}</span>
                  <span className="blog-cta">Baca →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
