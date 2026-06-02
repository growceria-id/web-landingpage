import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import Seo from '../components/Seo.jsx';
import { BLOG_POSTS } from '../data.js';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('id-ID', { day:'numeric', month:'long', year:'numeric' });
}

export default function Blog() {
  return (
    <>
      <Seo
        title="Blog Growceria — Tips Supplier Sayuran & Operasional Dapur"
        description="Artikel & panduan dari Growceria, supplier bahan makanan segar B2B Jakarta — tips memilih supplier, cek kualitas sayuran, harga grosir."
        path="/blog"
      />
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
              // Plain <a> — each post is a static HTML page, not a React route
              <a key={post.slug} className="blog-card" href={`/blog/${post.slug}/`}>
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
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
