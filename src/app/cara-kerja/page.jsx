import CaraKerja from '@/views/CaraKerja.jsx';
import { pageMetadata, JsonLd } from '@/lib/seo.jsx';

export const metadata = pageMetadata({
  title: 'Cara Kerja Growceria — Pesan Bahan Segar via WhatsApp',
  description: 'Empat langkah pesan bahan makanan segar di Growceria — cek katalog, chat WhatsApp, konfirmasi, terima kiriman. MOQ rendah, kirim harian.',
  path: '/cara-kerja',
});

export default function Page() {
  return (
    <>
      <JsonLd />
      <CaraKerja />
    </>
  );
}
