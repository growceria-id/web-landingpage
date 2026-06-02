import { useState } from 'react';
import { waLink } from '../utils.js';

export default function QuoteModal({ open, product, onClose }) {
  const [qty, setQty] = useState(10);
  if (!open) return null;
  const pname = product?.name || "produk terpilih";
  const msg = `Halo Growceria, saya mau minta penawaran:

Produk: ${pname}
Perkiraan jumlah: ${qty} kg
Alamat pengiriman: ...
Tanggal pengiriman: ...

Saya ingin tanya penawaran harga untuk produk di atas. Mohon diinfokan stok & harga terbaiknya. Terima kasih!`;
  return (
    <div className="modal-bg on" onClick={onClose}>
      <div className="modal" onClick={e=>e.stopPropagation()}>
        <div className="eyebrow">Minta Penawaran</div>
        <h3 style={{marginTop:8}}>Tanyakan Penawaran via WhatsApp</h3>
        <p>Kirim permintaan penawaran ke tim kami. Kami akan segera membalas dengan info stok & harga terbaik — mohon ditunggu ya!</p>
        <div className="qrow"><span>Produk</span><b>{pname}</b></div>
        <div className="qrow">
          <span>Perkiraan jumlah (kg)</span>
          <div className="mx">
            <button className="chip" onClick={()=>setQty(Math.max(5, qty-5))}>−5</button>
            <input type="number" value={qty} onChange={e=>setQty(+e.target.value||5)} style={{flex:1,padding:10,borderRadius:10,border:'1px solid var(--line)',fontSize:16,fontFamily:'Instrument Serif, serif',color:'var(--burgundy)',textAlign:'center'}}/>
            <button className="chip" onClick={()=>setQty(qty+5)}>+5</button>
          </div>
        </div>
        <div style={{display:'flex',gap:10}}>
          <button className="btn btn-ghost" onClick={onClose} style={{flex:1,justifyContent:'center'}}>Batal</button>
          <a className="btn btn-wa" href={waLink(msg)} target="_blank" rel="noreferrer" style={{flex:2,justifyContent:'center'}} onClick={onClose}>
            Kirim ke WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
