import { Link } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import Seo from '../components/Seo.jsx';

export default function KebijakanPrivasi() {
  return (
    <>
      <Seo
        title="Kebijakan Privasi — Growceria"
        description="Kebijakan privasi Growceria: data apa yang kami kumpulkan, bagaimana data tersebut digunakan, dan hak Anda sebagai Pelanggan."
        path="/kebijakan-privasi"
      />

      <Nav/>

      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Legal</div>
          <h1>Kebijakan <em>Privasi.</em></h1>
          <p>Terakhir diperbarui: 9 Agustus 2026. <br/><br/> Kebijakan ini menjelaskan bagaimana Growceria mengumpulkan, menggunakan, dan melindungi data Pelanggan.</p>
        </div>
      </section>

      <section className="blog-post-body legal-body">
        <div className="wrap">
          <article className="blog-content legal-content">

            <h2>1. Data yang Kami Kumpulkan</h2>
            <p>Untuk memproses pemesanan, kami mengumpulkan data seperti nama Pelanggan atau usaha, nomor WhatsApp, alamat pengiriman, dan riwayat transaksi. Data ini diberikan langsung oleh Pelanggan saat melakukan pemesanan melalui WhatsApp atau kanal resmi lain.</p>

            <h2>2. Bagaimana Kami Menggunakan Data</h2>
            <ul>
              <li>Memproses, mengonfirmasi, dan mengirimkan pesanan.</li>
              <li>Mengirimkan pengingat pembayaran (payment reminder) melalui WhatsApp atas pesanan yang belum lunas — sesuai persetujuan yang diberikan pada <Link to="/syarat-ketentuan">Syarat & Ketentuan</Link>. Pengingat ini berhenti otomatis setelah pesanan yang bersangkutan lunas.</li>
              <li>Memberikan dukungan pelanggan dan menindaklanjuti komplain terkait kualitas produk.</li>
              <li>Meninjau kelayakan calon Pelanggan sebelum atau selama proses pemesanan.</li>
              <li>Menganalisis dan meningkatkan kualitas layanan kami secara umum.</li>
            </ul>

            <h2>3. Berbagi Data dengan Pihak Ketiga</h2>
            <p>Kami tidak menjual data Pelanggan. Data hanya dibagikan kepada mitra operasional yang diperlukan untuk menjalankan pesanan Anda, seperti mitra logistik/kurir untuk keperluan pengiriman, dan dapat diungkapkan bila diwajibkan oleh hukum yang berlaku.</p>

            <h2>4. Keamanan Data</h2>
            <p>Kami menerapkan langkah-langkah wajar secara teknis dan organisasi untuk melindungi data Pelanggan dari akses, perubahan, atau pengungkapan yang tidak sah. Meski begitu, tidak ada sistem transmisi atau penyimpanan data yang sepenuhnya bebas risiko.</p>

            <h2>5. Penyimpanan Data</h2>
            <p>Data Pelanggan disimpan selama diperlukan untuk tujuan operasional dan pemenuhan kewajiban hukum, misalnya untuk keperluan pencatatan transaksi dan pajak.</p>

            <h2>6. Hak Pelanggan</h2>
            <p>Pelanggan berhak meminta akses, koreksi, atau penghapusan data pribadinya, serta berhak berhenti menerima pesan WhatsApp non-transaksional kapan saja. Permintaan dapat disampaikan melalui kanal kontak pada bagian 8.</p>

            <h2>7. Perubahan Kebijakan</h2>
            <p>Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan berlaku sejak tanggal publikasi di halaman ini.</p>

            <h2>8. Hubungi Kami</h2>
            <p>Pertanyaan mengenai kebijakan privasi ini dapat disampaikan melalui <a href="mailto:info@growceria.com">info@growceria.com</a> atau WhatsApp resmi kami.</p>
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
