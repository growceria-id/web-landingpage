'use client';

import { useState } from "react";
import Link from 'next/link';
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import CTABlock from "../components/CTABlock.jsx";
import QuoteModal from "../components/QuoteModal.jsx";
import { CLIENTS } from "../data.js";
import { waLink } from "../utils.js";

function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">B2B · Supply Segar Harian</div>
            <h1 style={{ marginTop: 16 }}>
              Bahan segar untuk
              <br />
              <em>bisnis kuliner Anda.</em>
            </h1>
            <p>
              Growceria adalah{" "}
              <strong>supplier bahan makanan segar B2B Jakarta</strong> — sayur,
              bumbu, telur, dan protein nabati untuk hotel, restoran, warung,
              cloud kitchen, dan UMKM F&B. MOQ rendah, pengiriman harian, pesan
              langsung via WhatsApp.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link className="btn btn-primary" href="/katalog">
                Lihat Katalog
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                className="btn btn-wa"
                href={waLink(
                  "Halo Growceria, saya tertarik untuk menjadi mitra F&B baru. Mohon info lengkap.",
                )}
                target="_blank"
                rel="noreferrer"
              >
                <img src="/whatsapp.svg" width="16" height="16" alt="" />
                Chat WhatsApp
              </a>
            </div>
          </div>
          <div className="hero-visual-simple">
            <img
              src="/home.jpg"
              alt="Sayuran segar — supplier bahan makanan B2B Jakarta untuk restoran"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueStrip() {
  const items = [
    {
      b: "Harga Fleksibel",
      t: "Pesan lebih banyak, harga per-kg lebih murah.",
    },
    {
      b: "MOQ Rendah",
      t: "Tanpa beban grosir besar. Cocok untuk arus kas UMKM.",
    },
    {
      b: "Pengiriman Harian",
      t: "Pengiriman subuh sampai siang hari, terjadwal. Stok dapur selalu segar.",
    },
  ];
  return (
    <section className="values-simple">
      <div className="wrap">
        <div className="vs-grid">
          {items.map((i, x) => (
            <div className="vs-item" key={x}>
              <div className="vs-num">0{x + 1}</div>
              <h4>{i.b}</h4>
              <p>{i.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section className="clients">
      <div className="wrap">
        <div className="head">
          <div>
            <div className="eyebrow">Dipercaya Oleh</div>
            <h2 style={{ marginTop: 12 }}>
              Ratusan restoran, cloud kitchen,
              <br />
              dan UMKM F&B <em>sudah memasak bersama kami.</em>
            </h2>
          </div>
          <div className="sub">
            Supplier sayuran restoran Jakarta yang fleksibel — 800+ mitra aktif
            di Jabodetabek. Semuanya pakai skema harga dan MOQ yang sama
            adilnya.
          </div>
        </div>
        <div className="cli-grid">
          {CLIENTS.map((c, i) => (
            <div className="cli" key={i}>
              {c.img ? (
                <div className="mark mark-logo">
                  <img src={c.img} alt={c.name} />
                </div>
              ) : (
                <div className="mark">{c.mark}</div>
              )}
              <div className="n">{c.name}</div>
              <div className="cat">{c.cat}</div>
            </div>
          ))}
        </div>
        <div className="testimonial">
          <div>
            <q>
              Sejak pakai Growceria, kami tidak lagi overstock cabai di akhir
              minggu. Pesan sesuai pemakaian, harga tetap grosir.
            </q>
            <div className="who">
              — <b>Budi Santoso</b>, Head Chef, Dapur Solo Catering · klien
              sejak 2024
            </div>
          </div>
          <div className="av">BS</div>
        </div>
      </div>
    </section>
  );
}

function HotelCatering() {
  return (
    <section className="how" style={{ paddingTop: 96, paddingBottom: 0 }}>
      <div className="wrap">
        <div className="head">
          <div className="eyebrow">Hotel & Catering</div>
          <h2 style={{ marginTop: 12 }}>
            Supplier bahan makanan hotel & catering Jakarta.
          </h2>
          <div className="sub">
            <strong>Pemasok bahan makanan catering Jakarta</strong> dan supplier
            bahan makanan hotel Jakarta — kami sudah biasa melayani volume besar
            dengan ritme harian yang ketat. Tim kami siap onboarding kitchen
            Anda: kunci harga mingguan, jadwal pengiriman subuh, dan Account
            Manager khusus untuk hotel chain dan catering company.
          </div>
        </div>
      </div>
    </section>
  );
}

function Jangkauan() {
  const cities = ["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi"];
  return (
    <section className="how" style={{ paddingBottom: 0, paddingTop: 48 }}>
      <div className="wrap">
        <div className="head">
          <div className="eyebrow">Jangkauan Pengiriman</div>
          <h2 style={{ marginTop: 12 }}>
            Supplier buah & sayuran segar <em>Jabodetabek</em>.
          </h2>
          <div className="sub">
            Growceria adalah{" "}
            <strong>supplier buah sayuran segar Jabodetabek</strong> — armada
            kami menjangkau Jakarta, Bogor, Depok, Tangerang, dan Bekasi setiap
            hari. Pengiriman dimulai subuh pukul 04:00 hingga siang 13:00 WIB.
          </div>
        </div>
        <div className="steps">
          {cities.map((c, i) => (
            <div className="step" key={c}>
              <div className="n">KOTA 0{i + 1}</div>
              <h3>{c}</h3>
              <p>
                Pengiriman harian sayur, bumbu, telur & rempah segar ke
                restoran, hotel, catering, dan cloud kitchen di {c}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState(null);
  const openQuote = (p) => {
    setQuoteProduct(p);
    setQuoteOpen(true);
  };

  return (
    <>
      <Nav active="home" />
      <Hero />
      <ValueStrip />
      <Clients />
      <HotelCatering />
      <div className="wrap" style={{ padding: 0 }}>
        <hr
          style={{
            border: 0,
            borderTop: "1px solid rgba(0,0,0,0.08)",
            margin: "0 auto",
            opacity: 0.6,
          }}
        />
      </div>
      <Jangkauan />
      <CTABlock onQuote={openQuote} />
      <Footer />
      <QuoteModal
        open={quoteOpen}
        product={quoteProduct}
        onClose={() => setQuoteOpen(false)}
      />
    </>
  );
}
