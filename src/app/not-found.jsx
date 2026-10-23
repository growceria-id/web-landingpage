import Link from 'next/link';
import Nav from '@/components/Nav.jsx';
import Footer from '@/components/Footer.jsx';

export const metadata = { title: 'Halaman tidak ditemukan — Growceria' };

export default function NotFound() {
  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">404</div>
          <h1>Halaman <em>tidak ditemukan.</em></h1>
          <p>Halaman yang Anda cari tidak ada atau sudah dipindahkan.</p>
          <Link className="btn btn-primary" href="/">Kembali ke Beranda</Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
