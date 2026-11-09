import Script from 'next/script';
import { SITE_URL } from '@/lib/seo.jsx';
import { waLink } from '@/utils.js';
import './fonts.css';

const GA_ID = 'AW-18381527165';

// Only the families the site actually renders with. The old index.html loaded
// ~20 families so the TweaksPanel font picker could switch between them.
const GOOGLE_FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Growceria — Sumber Bahan Segar untuk Bisnis Kuliner',
  icons: { icon: '/growceria-icon.png' },
};

function FloatingWA() {
  return (
    <a className="float-wa" href={waLink("Halo Growceria, saya mau tanya katalog & harga.")} target="_blank" rel="noreferrer" aria-label="Chat WhatsApp">
      <img src="/whatsapp.svg" width="26" height="26" alt="WhatsApp"/>
    </a>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* public/styles.css is shared with the static blog posts in public/blog/ */}
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href={GOOGLE_FONTS_URL} />
      </head>
      <body>
        {children}
        <FloatingWA />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </body>
    </html>
  );
}
