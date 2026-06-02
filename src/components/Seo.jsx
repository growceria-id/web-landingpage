import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://growceria.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/growceria-logo.png`;

const ORGANIZATION_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Growceria',
  url: SITE_URL,
  logo: `${SITE_URL}/growceria-logo.png`,
  areaServed: ['Jakarta', 'Bogor', 'Depok', 'Tangerang', 'Bekasi', 'Jabodetabek'],
  description: 'Supplier bahan makanan segar B2B Jakarta untuk restoran, hotel, catering, cloud kitchen, dan UMKM kuliner.',
};

export default function Seo({
  title,
  description,
  path = '/',
  ogImage = DEFAULT_OG_IMAGE,
  jsonLd,
  lang = 'id',
}) {
  const canonical = `${SITE_URL}${path}`;
  const jsonLdBlocks = [ORGANIZATION_JSONLD, ...(Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [])];

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Growceria" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={lang === 'id' ? 'id_ID' : 'en_US'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLdBlocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
}
