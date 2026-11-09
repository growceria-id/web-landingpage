import Home from '@/views/Home.jsx';
import { pageMetadata, JsonLd } from '@/lib/seo.jsx';

export const metadata = pageMetadata({
  title: 'Supplier Bahan Makanan Segar B2B Jakarta — Growceria',
  description: 'Supplier sayuran, bumbu, telur & rempah segar untuk restoran, hotel, catering & cloud kitchen di Jakarta. MOQ rendah, kirim harian via WhatsApp.',
  path: '/',
});

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Growceria',
  image: 'https://growceria.com/growceria-logo.png',
  url: 'https://growceria.com/',
  telephone: '+62-819-1907-1301',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jakarta',
    addressCountry: 'ID',
  },
  areaServed: ['Jakarta', 'Bogor', 'Depok', 'Tangerang', 'Bekasi'],
  description:
    'Supplier bahan makanan segar B2B Jakarta — sayur, bumbu, telur, dan rempah untuk restoran, hotel, catering, dan cloud kitchen.',
};

export default function Page() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <Home />
    </>
  );
}
