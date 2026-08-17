import { Link } from 'react-router-dom';
import { waLink } from '../utils.js';

const IconInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

const IconTikTok = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.02-.07z"/>
  </svg>
);

const IconLinkedIn = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div className="brand">
            <div className="logo"><img src="/growceria-logo.png" alt="Growceria"/></div>
            <p>Platform sumber bahan segar B2B untuk UMKM kuliner Indonesia. Langsung dari petani mitra — tanpa perantara, tanpa MOQ besar.</p>
          </div>
          <div>
            <h5>Platform</h5>
            <ul>
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/katalog">Katalog Produk</Link></li>
              <li><Link to="/cara-kerja">Cara Kerja</Link></li>
              <li><Link to="/tentang">Tentang Kami</Link></li>
              <li><Link to="/syarat-ketentuan">Syarat & Ketentuan</Link></li>
              <li><Link to="/kebijakan-privasi">Kebijakan Privasi</Link></li>
            </ul>
          </div>
          <div>
            <h5>Kontak</h5>
            <ul>
              <li><a href={waLink("Halo, saya mau tanya...")} target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a href="mailto:info@growceria.com">info@growceria.com</a></li>
              <li>+62 819-1907-1301</li>
              <li>Pulomas, Jakarta Timur</li>
            </ul>
          </div>
          <div>
            <h5>Ikuti Kami</h5>
            <ul className="foot-social">
              <li>
                <a href="https://www.instagram.com/growceria.id/" target="_blank" rel="noreferrer">
                  <IconInstagram/> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@growceria.id" target="_blank" rel="noreferrer">
                  <IconTikTok/> TikTok
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/growceria" target="_blank" rel="noreferrer">
                  <IconLinkedIn/> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bot">
          <div>© 2026 PT Bikin Semua Untung · Jakarta, Indonesia</div>
          <div className="mono">v2.4 · 23 APR 2026</div>
        </div>
      </div>
    </footer>
  );
}
