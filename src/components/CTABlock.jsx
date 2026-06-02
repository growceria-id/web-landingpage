import { waLink } from '../utils.js';

export default function CTABlock({ onQuote }) {
  return (
    <section className="cta">
      <div className="wrap">
        <div className="box">
          <div>
            <div className="eyebrow" style={{color:'#f5c7d3'}}>Mulai Hari Ini</div>
            <h2 style={{marginTop:12}}>Order pertama Anda<br/><em>bisa tiba besok subuh.</em></h2>
            <p>Tidak ada biaya pendaftaran. Tidak ada kontrak minimum. Kirim daftar belanja via WhatsApp hari ini sebelum 17:00, bahan segar tiba di dapur Anda besok pukul 05:00.</p>
            <div className="actions">
              <a className="btn btn-wa" href={waLink("Halo Growceria, saya mau mulai order bahan segar. Ini daftar belanja saya:\n\n- \n- \n- \n\nAlamat pengiriman: ...")} target="_blank" rel="noreferrer">
                <img src="/whatsapp.svg" width="16" height="16" alt=""/>
                Chat +62 819-1907-1301
              </a>
              <button className="btn" style={{background:'rgba(255,255,255,.15)',color:'#fff',border:'1px solid rgba(255,255,255,.3)'}} onClick={()=>onQuote && onQuote({name:"katalog lengkap"})}>
                Minta Katalog PDF
              </button>
            </div>
          </div>
          <div className="info">
            <h4>Kontak Operasional</h4>
            <div className="line">
              <div className="ico"><img src="/whatsapp.svg" width="16" height="16" alt=""/></div>
              <div><b style={{fontSize:16}}>+62 819-1907-1301</b><br/><span style={{fontSize:12,opacity:.7}}>WhatsApp · Minggu–Jumat 09–18 WIB</span></div>
            </div>
            <div className="line">
              <div className="ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></div>
              <div><b style={{fontSize:16}}>info@growceria.com</b><br/><span style={{fontSize:12,opacity:.7}}>Pertanyaan kerjasama & kontrak</span></div>
            </div>
            <div className="line">
              <div className="ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
              <div><b style={{fontSize:16}}>Gudang Growceria</b><br/><span style={{fontSize:12,opacity:.7}}>Jl. Pacuan Kuda Raya No.15 RW.11, Kayu Putih, Pulo Gadung, Jakarta Timur 13210</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
