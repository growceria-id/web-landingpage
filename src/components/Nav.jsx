import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../data.js';
import { waLink } from '../utils.js';

export default function Nav({ active }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="top">
      <div className="wrap">
        <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu" aria-expanded={open}>
          {open
            ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
            : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          }
        </button>
        <Link className="logo nav-logo" to="/" onClick={() => setOpen(false)}>
          <img src="/growceria-icon.png" alt="Growceria"/>
        </Link>
        <ul>
          {NAV_LINKS.map(l => (
            <li key={l.id}>
              {l.static
                ? <a className={active===l.id?'active':''} href={l.href}>{l.label}</a>
                : <Link className={active===l.id?'active':''} to={l.href}>{l.label}</Link>}
            </li>
          ))}
        </ul>
        <div style={{flex:1}}/>
        <a className="btn btn-primary nav-wa-btn" href={waLink("Halo Growceria, saya mau tanya katalog & harga.")} target="_blank" rel="noreferrer" aria-label="Hubungi via WhatsApp">
          <img src="/whatsapp.svg" width="18" height="18" alt=""/>
          Kontak Kami
        </a>
      </div>
      {open && (
        <div className="nav-mobile open">
          {NAV_LINKS.map(l => (
            l.static
              ? <a key={l.id} className={active===l.id?'active':''} href={l.href}>{l.label}</a>
              : <Link key={l.id} className={active===l.id?'active':''} to={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}
