import { useState } from 'react';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import CTABlock from '../components/CTABlock.jsx';
import QuoteModal from '../components/QuoteModal.jsx';
import Seo from '../components/Seo.jsx';
import { PRODUCT_GROUPS } from '../data.js';
import { waLink } from '../utils.js';

function PageHero() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="eyebrow">Katalog Harian</div>
        <h1>Panen segar,<br/><em>siap kirim segera.</em></h1>
        <p><strong>Supplier telur ayam B2B Jakarta</strong> dan <strong>supplier rempah-rempah segar restoran Jakarta</strong> — cek katalog sayuran, bumbu, telur & rempah, lalu tanyakan penawaran via WhatsApp. Tim kami akan segera membalas dengan info stok dan harga terbaik.</p>
      </div>
    </section>
  );
}

function KatalogCard({ item, onQuote }) {
  return (
    <div className="card">
      <div className="prod" style={{background:'var(--cream-2)', height:160}}>
        <img src={item.image} alt={item.name} loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
      </div>
      <div className="meta">
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <h3 style={{fontSize:18}}>{item.name}</h3>
          <button className="card-wa-title-btn" onClick={()=>onQuote({name:item.name})}>
            <img src="/whatsapp.svg" width="16" height="16" alt=""/>
          </button>
        </div>
      </div>
      <p className="desc">{item.desc}</p>
      <button className="btn btn-primary card-cta-btn" onClick={()=>onQuote({name:item.name})} style={{justifyContent:'center',width:'100%',whiteSpace:'normal',textAlign:'center',lineHeight:1.3}}>
        Minta Penawaran via WhatsApp
      </button>
    </div>
  );
}


function FullCatalog({ onQuote }) {
  const [active, setActive] = useState("all");
  const groups = PRODUCT_GROUPS;
  const items = active==="all"
    ? groups.flatMap(g=>g.items)
    : (groups.find(g=>g.id===active)?.items || []);
  return (
    <section className="catalog">
      <div className="wrap">
        <div className="filters" style={{overflowX:'auto',overflowY:'hidden',paddingBottom:8}}>
          <div style={{display:'flex',gap:8,width:'fit-content'}}>
            <button className={`chip ${active==="all"?'active':''}`} onClick={()=>setActive("all")}>Semua</button>
            {groups.map(g=>(
              <button key={g.id} className={`chip ${active===g.id?'active':''}`} onClick={()=>setActive(g.id)}>{g.label}</button>
            ))}
          </div>
        </div>
        <div className="grid">
          {items.map((item,i)=><KatalogCard key={i} item={item} onQuote={onQuote}/>)}
        </div>
        <div style={{textAlign:'center',marginTop:56}}>
          <a className="btn btn-ghost" href={waLink("Halo Growceria, boleh minta katalog lengkap beserta harga terbaru?")} target="_blank" rel="noreferrer">
            Minta Katalog Lengkap via WhatsApp
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Katalog() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState(null);
  const openQuote = (p) => { setQuoteProduct(p); setQuoteOpen(true); };
  return (
    <>
      <Seo
        title="Supplier Telur Ayam & Rempah Segar B2B — Katalog Growceria"
        description="Katalog supplier telur ayam B2B Jakarta dan supplier rempah-rempah segar restoran Jakarta. Sayuran, bumbu, telur & rempah — tanya harga via WhatsApp."
        path="/katalog"
      />
      <Nav active="katalog"/>
      <PageHero/>
      <FullCatalog onQuote={openQuote}/>
      <CTABlock onQuote={openQuote}/>
      <Footer/>
      <QuoteModal open={quoteOpen} product={quoteProduct} onClose={()=>setQuoteOpen(false)}/>
    </>
  );
}
