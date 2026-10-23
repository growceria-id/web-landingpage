import Katalog from '@/views/Katalog.jsx';
import { pageMetadata, JsonLd } from '@/lib/seo.jsx';

export const metadata = pageMetadata({
  title: 'Supplier Telur Ayam & Rempah Segar B2B — Katalog Growceria',
  description: 'Katalog supplier telur ayam B2B Jakarta dan supplier rempah-rempah segar restoran Jakarta. Sayuran, bumbu, telur & rempah — tanya harga via WhatsApp.',
  path: '/katalog',
});

export default function Page() {
  return (
    <>
      <JsonLd />
      <Katalog />
    </>
  );
}
