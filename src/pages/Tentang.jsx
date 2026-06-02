import { useState } from 'react';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import CTABlock from '../components/CTABlock.jsx';
import QuoteModal from '../components/QuoteModal.jsx';
import Seo from '../components/Seo.jsx';

function PageHero() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="eyebrow">Tentang Kami</div>
        <h1>Dapur kecil Indonesia<br/><em>layak dapat harga grosir.</em></h1>
        <p>Growceria adalah <strong>supplier sayuran restoran Jakarta</strong> dengan fokus pada UMKM kuliner. Kami lahir dari keresahan sederhana: kenapa warung dan UMKM kuliner harus membayar harga ritel, sementara rantai resto besar menikmati harga grosir? Kami membangun rantai pasok yang adil untuk semua ukuran dapur.</p>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="about-intro">
      <div className="wrap">
        <div className="grid-ai">
          <div>
            <div className="eyebrow">Misi</div>
            <h2 style={{marginTop:12}}>Menyederhanakan sumber bahan segar<br/><em>untuk setiap dapur.</em></h2>
            <p>Sebelum Growceria, pemilik warung harus bangun pukul 03:00 pagi untuk ke pasar induk, menawar satu per satu, dan membawa pulang sendiri. UMKM kehilangan waktu berharga — dan seringnya, tetap kalah harga dari jaringan besar.</p>
            <p>Kami memotong jalur itu. Tim sourcing kami bekerja langsung dengan puluhan mitra petani dari berbagai daerah. Pesanan Anda akan dikumpulkan, dipilah, dan diantar langsung ke dapur Anda — dengan harga yang sama rendahnya dengan yang didapat rantai restoran nasional.</p>
            <p>Tidak ada app baru untuk diunduh. Tidak ada akun untuk dibuat. Cukup WhatsApp, dan dapur Anda sudah terhubung ke rantai pasok terpendek di Indonesia.</p>
          </div>
          <div className="stat-card">
            <div className="s"><div className="n">800+</div><div className="l">Mitra F&B aktif</div></div>
            <div className="s"><div className="n">50</div><div className="l">Petani mitra langsung</div></div>
            <div className="s"><div className="n">&lt;24jam</div><div className="l">Waktu pengiriman</div></div>
            <div className="s"><div className="n">Rendah</div><div className="l">MOQ per item</div></div>
            <div className="s"><div className="n">98.5%</div><div className="l">Fulfillment Rate</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const pillars = [
    { n:"01", t:"Adil untuk semua ukuran", d:"Warung kecil membayar harga sama per-kg dengan commissary besar (di kategori volume masing-masing). Tidak ada 'pajak ukuran'." },
    { n:"02", t:"Petani diuntungkan", d:"Kami membayar petani 12–18% di atas harga pengepul. Hubungan jangka panjang, bukan lelang harian." },
    { n:"03", t:"Kualitas tanpa kompromi", d:"Setiap panen dipilah manual sebelum dikirim. Jika ada produk yang tidak sesuai standar, kami ganti atau refund 100% — tanpa pertanyaan." },
  ];
  return (
    <section className="values-pillars">
      <div className="wrap">
        <div className="eyebrow">Prinsip Kami</div>
        <h2 style={{marginTop:12}}>Tiga hal yang <em>kami junjung tinggi.</em></h2>
        <div className="pillars">
          {pillars.map(p=>(
            <div className="pillar" key={p.n}>
              <div className="p-num">PRINSIP {p.n}</div>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Tentang() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const openQuote = () => setQuoteOpen(true);
  return (
    <>
      <Seo
        title="Tentang Growceria — Supplier Sayuran Restoran Jakarta"
        description="Growceria — supplier sayuran restoran Jakarta yang berpihak pada UMKM kuliner. Rantai pasok adil dari petani langsung ke dapur Anda."
        path="/tentang"
      />
      <Nav active="tentang"/>
      <PageHero/>
      <Intro/>
      <Pillars/>
      <CTABlock onQuote={openQuote}/>
      <Footer/>
      <QuoteModal open={quoteOpen} product={null} onClose={()=>setQuoteOpen(false)}/>
    </>
  );
}
