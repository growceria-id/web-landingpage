import { useState } from "react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import CTABlock from "../components/CTABlock.jsx";
import QuoteModal from "../components/QuoteModal.jsx";
import Seo from "../components/Seo.jsx";
import { waLink } from "../utils.js";

function PageHero() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="eyebrow">Cara Kerja</div>
        <h1>
          Empat langkah —<br />
          dari <em>panen ke kompor</em>.
        </h1>
        <p>
          Proses pemesanan kami sangat simpel. Kami percaya dapur yang sibuk
          tidak perlu aplikasi baru — cukup WhatsApp yang sudah Anda pakai
          setiap hari.
        </p>
      </div>
    </section>
  );
}

function HowSteps() {
  const steps = [
    {
      n: "01",
      t: "Cek katalog",
      d: "Lihat ketersediaan harian dan kategori produk langsung di halaman Katalog kami. Tidak perlu daftar akun.",
    },
    {
      n: "02",
      t: "Chat via WhatsApp",
      d: "Kirim daftar bahan, jumlah, dan alamat pengiriman. Tim kami akan konfirmasi stok & harga final segera.",
    },
    {
      n: "03",
      t: "Konfirmasi & bayar",
      d: "Terima invoice via WA. Bayar transfer atau QRIS. Untuk mitra tetap, tersedia pembayaran tempo 7–14 hari.",
    },
    {
      n: "04",
      t: "Terima bahan segar",
      d: "Kurir kami mengantar ke dapur Anda sesuai jadwal (subuh 04:00 atau siang 13:00).",
    },
  ];
  return (
    <section className="how">
      <div className="wrap">
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <div className="n">STEP {s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Berapa minimum order (MOQ) di Growceria?",
      a: "MOQ kami dirancang agar tidak memberatkan arus kas Anda. Baik baru mulai maupun sudah berjalan, tidak perlu pesan dalam jumlah besar. Tanya langsung ke tim kami untuk menyesuaikan dengan skala dapur Anda.",
    },
    {
      q: "Bagaimana sistem harga grosir bekerja?",
      a: "Setiap produk akan memiliki harga yang lebih murah apabila pembelian dalam jumlah yang besar (diatas 5-10kg). Semua harga akan tertera dalam katalog yang diberikan.",
    },
    {
      q: "Daerah mana saja yang dilayani?",
      a: "Saat ini kami melayani wilayah Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi).",
    },
    {
      q: "Kapan waktu pengiriman?",
      a: "Pengiriman akan dimulai dari jam 4.00 sampai jam 13.00 WIB. Jangan khawatir karena kalian dapat request jam pengantaran sesuai kebutuhan.",
    },
    {
      q: "Bagaimana jika kualitas tidak sesuai?",
      a: "Kami menjamin kualitas panen. Jika ada produk yang tidak sesuai standar, laporkan via WhatsApp dalam 24 jam — kami akan mengganti atau me-refund 100% nilainya tanpa pertanyaan.",
    },
    {
      q: "Apakah tersedia pembayaran tempo?",
      a: "Ya, untuk mitra yang sudah aktif minimal 2 bulan dengan pesanan rutin. Tempo tersedia mulai 7 hari hingga 14 hari, tergantung skala pemesanan.",
    },
    {
      q: "Bagaimana cara menjadi mitra tetap?",
      a: "Cukup lakukan pemesanan rutin (minimal 2× seminggu) selama 1 bulan. Setelah itu, Anda otomatis mendapat akses ke Account Manager khusus, kunci harga mingguan, dan opsi pembayaran tempo.",
    },
  ];
  const [open, setOpen] = useState(-1);
  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <div className="head">
          <div className="eyebrow">Tanya Jawab</div>
          <h2 style={{ marginTop: 12 }}>
            Pertanyaan yang <em>sering ditanyakan.</em>
          </h2>
          <div className="sub">
            Tidak menemukan jawaban Anda? Kirim pertanyaan langsung ke tim kami
            via WhatsApp.
          </div>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div className={`faq-item ${open === i ? "open" : ""}`} key={i}>
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span>{f.q}</span>
                <span className="plus">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              <div className="faq-a">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a
            className="btn btn-wa"
            href={waLink("Halo Growceria, saya punya pertanyaan:\n\n")}
            target="_blank"
            rel="noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 3.5A10 10 0 0 0 4.3 16L3 21l5.2-1.3a10 10 0 0 0 14.8-8.7c0-2.7-1-5.2-2.5-7.5z" />
            </svg>
            Chat Tim Sales Kami
          </a>
        </div>
      </div>
    </section>
  );
}

export default function CaraKerja() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const openQuote = () => setQuoteOpen(true);
  return (
    <>
      <Seo
        title="Cara Kerja Growceria — Pesan Bahan Segar via WhatsApp"
        description="Empat langkah pesan bahan makanan segar di Growceria — cek katalog, chat WhatsApp, konfirmasi, terima kiriman. MOQ rendah, kirim harian."
        path="/cara-kerja"
      />
      <Nav active="cara" />
      <PageHero />
      <HowSteps />
      <FAQ />
      <CTABlock onQuote={openQuote} />
      <Footer />
      <QuoteModal
        open={quoteOpen}
        product={null}
        onClose={() => setQuoteOpen(false)}
      />
    </>
  );
}
