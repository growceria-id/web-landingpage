export default function ProductCard({ p, onQuote }) {
  return (
    <div className="card">
      <div className={`prod ${p.visual}`}>
        <span className="tag">{p.tag}</span>
      </div>
      <div className="meta">
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <h3>{p.name}</h3>
          <button className="card-wa-title-btn" onClick={()=>onQuote(p)}>
            <img src="/whatsapp.svg" width="16" height="16" alt=""/>
          </button>
        </div>
        <div className="price">Rp{(p.price/1000).toFixed(1).replace('.',',')}rb<small>{p.unit}</small></div>
      </div>
      <p className="desc">{p.desc}</p>
      <div className="bulk"><span>Diskon grosir <b>−{p.bulk.pct}%</b> — pesan ≥ {p.bulk.min} kg</span></div>
      <button className="btn btn-primary card-cta-btn" onClick={()=>onQuote(p)} style={{justifyContent:'center'}}>
        Minta Penawaran via WhatsApp
      </button>
    </div>
  );
}
