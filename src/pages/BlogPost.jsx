import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import { BLOG_POSTS } from '../data.js';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('id-ID', { day:'numeric', month:'long', year:'numeric' });
}

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.slug === slug);
  const [html, setHtml] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!post) { navigate('/blog', { replace: true }); return; }
    setLoading(true);
    fetch(`/blog/${slug}.html`)
      .then(r => { if (!r.ok) throw new Error('not found'); return r.text(); })
      .then(text => { setHtml(text); setLoading(false); })
      .catch(() => { setHtml('<p>Konten tidak ditemukan.</p>'); setLoading(false); });
  }, [slug, post, navigate]);

  if (!post) return null;

  return (
    <>
      <Nav active="blog" />

      <section className="page-hero blog-post-hero">
        <div className="wrap">
          <Link to="/blog" className="blog-back">← Kembali ke Blog</Link>
          <div className="blog-post-meta">
            <span className="blog-cat">{post.category}</span>
            <span className="blog-read">{post.readTime} baca</span>
            <span>{formatDate(post.date)}</span>
          </div>
          <h1 style={{ maxWidth: 760 }}>{post.title}</h1>
          <p style={{ maxWidth: 640 }}>{post.excerpt}</p>
        </div>
      </section>

      <section className="blog-post-body">
        <div className="wrap">
          <article className="blog-content">
            {loading
              ? <div className="blog-loading">Memuat artikel…</div>
              : <div dangerouslySetInnerHTML={{ __html: html }} />
            }
          </article>

          <div className="blog-post-foot">
            <Link to="/blog" className="btn btn-ghost">← Semua Artikel</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
