import {
  Container,
  StyledLi,
  StyledUl,
  Subtitle,
  Text,
  Title,
} from "../styles";

const Privasi = () => {
  return (
    <Container>
      <Title>Kebijakan Privasi</Title>

      <Text>
        growceria berkomitmen untuk menjaga privasi pengunjung kami. Dokumen
        Kebijakan Privasi ini berisi jenis informasi yang dikumpulkan dan
        dicatat oleh growceria melalui siuts, aplikasi, atau fitur terpadu
        lainnya seperti jaringan sosial media dan email yang kami kirimkan
        secara berkala serta bagaimana kami menggunakannya. Apabila Anda
        memiliki pertanyaan tambahan atau memerlukan informasi lebih lanjut
        tentang Kebijakan Privasi kami, silahkan menghubungi kontak yang tertera
        di akhir dokumen ini.
      </Text>

      <Text>
        Dengan mengklik “Setuju” pada pernyataan halaman di situs atau aplikasi,
        pengguna menyatakan kesediaannya bahwa setiap Data Pribadi pengguna
        benar adanya dan sah secara hukum. Pengguna juga memberikan kewenangan
        kepada growceria untuk memperoleh, menyimpan, membuka mengumpulkan,
        menganalisis, mengolah, menampilkan, dan/atau menggunakan data untuk
        berbagai kepentingan sesuai ketentuan dalam aplikasi growceria. Pengguna
        juga memahami dan menyetujui akan ketentuan dan kebijakan aplikasi
        growceria
      </Text>

      <Subtitle>Pengumpulan Data Pribadi</Subtitle>
      <Text>
        growceria dapat sewaktu-waktu melakukan pengumpulan Data Pribadi
        Pengguna dengan tujuan untuk memproses transaksi, mengelola aplikasi,
        dan memperlancar jalannya aplikasi bagi Pengguna. Berkenaan dengan hal
        tersebut, Data Pribadi Pengguna yang akan dikumpulkan oleh growceria
        adalah sebagai berikut:
      </Text>
      <StyledUl>
        <StyledLi>
          Data Pribadi yang diserahkan secara sadar oleh Pengguna, mencakup Data
          yang diberikan oleh Pengguna pada saat Pengguna:
          <StyledUl>
            <StyledLi>
              Membuat akun growceria, dimana tertera nama Pengguna (username),
              alamat email, password, alamat rumah, nomor telepon, foto dan
              informasi lain
            </StyledLi>
            <StyledLi>
              Mengisi survey yang dikirimkan oleh growceria di alamat email
              Pengguna
            </StyledLi>
            <StyledLi>
              Melakukan transaksi di growceria, diantaranya jenis produk, jumlah
              produk yang dibeli, alamat pengiriman, jenis transaksi yang
              digunakan, jumlah transaksi, dan tanggal serta waktu transaksi
            </StyledLi>
            <StyledLi>
              Memasukkan data pembayaran pada saat Pengguna menyelesaikan
              aktivitas transaksi pembayaran di aplikasi, diantaranya seperti
              rekening bank, <i>virtual account</i>, kartu kredit, internet
              banking
            </StyledLi>
          </StyledUl>
        </StyledLi>
        <StyledLi>
          Data yang direkam saat Pengguna mengakses aplikasi, diantaranya namun
          tidak terbatas pada:
          <StyledUl>
            <StyledLi>
              Lokasi riil dan daerah sekitarnya seperti <i>geo-location</i>, IP
            </StyledLi>
            <StyledLi>
              Waktu atau durasi dari aktivitas pembelanjaan Pengguna dalam hal
              ini saat pendafataram, login, dan transaksi
            </StyledLi>
            <StyledLi>
              Preferensi Pengguna dalam hal ini mencakup pilihan yang disimpan,
              interaksi Pengguna dengan Aplikasi, serta data yang diperoleh
              dengan menggunakan perangkat cookies
            </StyledLi>
            <StyledLi>
              Informasi yang dikumpulkan oleh file log termasuk alamat protokol
              internet (IP), jenis browser, Penyedia Layanan Internet (ISP)
            </StyledLi>
          </StyledUl>
        </StyledLi>
      </StyledUl>
    </Container>
  );
};
export default Privasi;
