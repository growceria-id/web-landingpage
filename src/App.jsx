import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Katalog from './pages/Katalog.jsx';
import CaraKerja from './pages/CaraKerja.jsx';
import Tentang from './pages/Tentang.jsx';
import Blog from './pages/Blog.jsx';
import { waLink } from './utils.js';

function FloatingWA() {
  return (
    <a className="float-wa" href={waLink("Halo Growceria, saya mau tanya katalog & harga.")} target="_blank" rel="noreferrer" aria-label="Chat WhatsApp">
      <img src="/whatsapp.svg" width="26" height="26" alt="WhatsApp"/>
    </a>
  );
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/cara-kerja" element={<CaraKerja />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <FloatingWA />
    </>
  );
}
