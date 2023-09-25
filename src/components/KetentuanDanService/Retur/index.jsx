import React from "react";
import {
  Container,
  StyledLi,
  StyledUl,
  Subtitle,
  Text,
  Title,
} from "../styles";

const ReturSection = () => {
  return (
    <Container>
      <Title>Kebijakan Retur dan Pengembalian Dana</Title>

      <Text>
        Kami berkomitmen untuk memberikan produk-produk segar terbaik kepada
        pelanggan kami. Oleh karena itu, kami ingin memastikan pengalaman
        belanja Anda dengan kami sesuai dengan harapan. Apabila ada pelayanan
        kami yang dirasa kurang memuaskan, pelanggan dapat mengajukan retur dan
        pengembalian dana. Berikut adalah kebijakan pengembalian dan
        pengembalian dana kami:
      </Text>

      <StyledUl>
        <StyledLi>
          Pengembalian dan pengembalian dana hanya dapat dilakukan dalam waktu 4
          jam setelah pengiriman produk-produk segar.
        </StyledLi>
        <StyledLi>
          Untuk memproses pengembalian atau pengembalian dana, Anda harus
          melampirkan gambar-gambar spesifik yang menjelaskan alasan
          pengembalian. Ini termasuk gambar-gambar produk yang rusak atau salah
          pengiriman.
        </StyledLi>
        <StyledLi>
          Kami hanya akan menerima pengembalian pada produk-produk dengan
          kualitas buruk atau pengiriman yang salah. Kami tidak akan menerima
          pengembalian dan pengembalian dana jika produk yang diantarkan sesuai
          pesanan dan Anda hanya menginginkan pengembalian karena alasan
          pribadi.
        </StyledLi>
      </StyledUl>

      <Subtitle>Proses Pengembalian dan Pengembalian Dana</Subtitle>
      <StyledUl>
        <StyledLi>
          Jika Anda ingin mengajukan pengembalian atau pengembalian dana,
          silakan menghubungi tim layanan pelanggan kami yang tersedia di
          Whatsapp dengan nomor 0819-1907-1301 dalam waktu 4 jam setelah
          pengiriman. Kami akan memproses permintaan Anda secepat mungkin.
        </StyledLi>
        <StyledLi>
          Setelah kami menerima gambar-gambar dan informasi yang diperlukan,
          kami akan mengevaluasi permintaan Anda.
        </StyledLi>
        <StyledLi>
          Jika permintaan Anda memenuhi syarat sesuai dengan kebijakan kami,
          kami akan mengatur proses pengembalian produk atau pengembalian dana
          sesuai kebijakan kami.
        </StyledLi>
        <StyledLi>
          Pengembalian dana akan dikreditkan ke akun Anda dalam waktu 1 hari
          setelah persetujuan dalam bentuk voucher untuk pembelian berikutnya.
        </StyledLi>
      </StyledUl>

      <Subtitle>Catatan Penting</Subtitle>
      <Text>
        Jika kami menemukan bahwa produk dikembalikan tanpa alasan yang sesuai
        atau jika gambar-gambar yang diberikan tidak cukup, kami berhak untuk
        menolak permintaan pengembalian.
      </Text>
      <Text>
        Kami berharap agar kebijakan ini memberikan panduan yang jelas tentang
        bagaimana kami mengelola pengembalian dan pengembalian dana. Kami
        berkomitmen untuk memberikan produk-produk segar terbaik kepada Anda,
        dan kami akan melakukan yang terbaik untuk menjaga kepuasan pelanggan
        kami.
      </Text>
      <Text>
        Terima kasih atas dukungan Anda kepada growceria. Jika Anda memiliki
        pertanyaan lebih lanjut atau memerlukan bantuan tambahan, jangan ragu
        untuk menghubungi tim layanan pelanggan kami di nomor{" "}
        <b>0819-1907-1301</b>
      </Text>
    </Container>
  );
};
export default ReturSection;
