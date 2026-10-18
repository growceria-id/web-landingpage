import { Link } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import Seo from '../components/Seo.jsx';

export default function SyaratKetentuan() {
  return (
    <>
      <Seo
        title="Syarat & Ketentuan — Growceria"
        description="Syarat dan ketentuan penggunaan layanan Growceria untuk mitra UMKM kuliner dan pelanggan B2B."
        path="/syarat-ketentuan"
      />

      <Nav/>

      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Legal</div>
          <h1>Syarat & <em>Ketentuan.</em></h1>
          <p>Terakhir diperbarui: 9 Agustus 2026. <br/><br/> Dengan menggunakan layanan Growceria, Anda dianggap telah membaca, memahami, dan menyetujui seluruh ketentuan di bawah ini.</p>
        </div>
      </section>

      <section className="blog-post-body legal-body">
        <div className="wrap">
          <article className="blog-content legal-content">

            <h2>1. Tentang Layanan</h2>
            <p>Growceria adalah platform sumber bahan segar B2B yang menghubungkan UMKM kuliner, restoran, dan dapur komersial ("Pelanggan") dengan petani serta mitra pemasok. Pemesanan dilakukan melalui WhatsApp atau kanal resmi lain yang kami sediakan.</p>

            <h2>2. Kelayakan Pelanggan</h2>
            <p>Growceria berhak meninjau (review) setiap calon Pelanggan sebelum atau selama proses pemesanan berlangsung. Kami berhak menolak, menunda, atau membatasi pesanan dari Pelanggan yang tidak lolos peninjauan tersebut.</p>

            <h2>3. Harga & Pembayaran</h2>
            <ul>
              <li>Harga yang tercantum di katalog dapat berubah sewaktu-waktu mengikuti kondisi pasar dan hasil panen.</li>
              <li>Harga final untuk setiap pesanan dikonfirmasi melalui WhatsApp sebelum pengiriman diproses.</li>
              <li>Metode dan tenggat pembayaran diinformasikan pada saat konfirmasi pesanan.</li>
            </ul>

            <h2>4. Persetujuan Pengingat Pembayaran via WhatsApp</h2>
            <p>Dengan membuat pesanan, Pelanggan menyetujui agar nomor WhatsApp yang didaftarkan digunakan oleh Growceria untuk mengirimkan pengingat pembayaran (payment reminder) terkait pesanan tersebut. Pelanggan dapat berhenti menerima pesan pengingat ini kapan saja setelah seluruh pembayaran atas pesanan yang bersangkutan telah lunas.</p>

            <h2>5. Pemesanan & Pengiriman</h2>
            <p>Estimasi waktu pengiriman bersifat perkiraan dan dapat dipengaruhi oleh cuaca, ketersediaan hasil panen, kondisi lalu lintas, dan faktor operasional lain di luar kendali kami. Kami akan menginformasikan perubahan signifikan sesegera mungkin.</p>

            <h2>6. Kualitas & Retur</h2>
            <p>Kami berkomitmen mengirimkan produk segar sesuai standar yang disepakati. Apabila produk yang diterima tidak sesuai standar kualitas, Pelanggan dapat mengajukan komplain melalui WhatsApp maksimal 1x24 jam setelah barang diterima untuk proses penggantian atau refund, sesuai kebijakan yang berlaku pada saat itu.</p>

            <h2>7. Pembatalan Pesanan</h2>
            <p>Karena sifat bahan segar yang mudah rusak, pembatalan pesanan yang telah dikonfirmasi dan dalam proses pengiriman dapat dikenakan biaya atau tidak dapat dibatalkan. Ketentuan spesifik akan diinformasikan saat konfirmasi pesanan.</p>

            <h2>8. Kekayaan Intelektual</h2>
            <p>Nama, logo, teks, dan gambar pada situs ini adalah milik Growceria dan tidak boleh digunakan tanpa izin tertulis.</p>

            <h2>9. Batasan Tanggung Jawab</h2>
            <p>Growceria tidak bertanggung jawab atas kerugian tidak langsung yang timbul dari penggunaan layanan, di luar nilai transaksi yang bersangkutan, kecuali diwajibkan lain oleh hukum yang berlaku.</p>

            <h2>10. Perubahan Ketentuan</h2>
            <p>Kami dapat memperbarui syarat dan ketentuan ini dari waktu ke waktu. Perubahan berlaku sejak tanggal publikasi di halaman ini.</p>

            <h2>11. Hubungi Kami</h2>
            <p>Pertanyaan mengenai syarat dan ketentuan ini dapat disampaikan melalui <a href="mailto:info@growceria.com">info@growceria.com</a> atau WhatsApp resmi kami.</p>
          </article>

          <div className="blog-post-foot">
            <Link to="/" className="btn btn-ghost">← Kembali ke Beranda</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
