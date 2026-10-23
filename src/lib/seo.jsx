export const SITE_URL = 'https://growceria.com';
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

// Replaces the old react-helmet <Seo> component: same tags, built at compile time.
export function pageMetadata({ title, description, path = '/', ogImage = DEFAULT_OG_IMAGE }) {
  const canonical = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: 'website',
      siteName: 'Growceria',
      title,
      description,
      url: canonical,
      images: [ogImage],
      locale: 'id_ID',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export function JsonLd({ data }) {
  const blocks = [ORGANIZATION_JSONLD, ...(Array.isArray(data) ? data : data ? [data] : [])];
  return blocks.map((block, i) => (
    <script
      key={i}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
    />
  ));
}
