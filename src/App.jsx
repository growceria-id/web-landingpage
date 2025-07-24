import React, {useState} from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Whatsapp from "./components/Whatsapp";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages";
import Produk from "./pages/produk";
import AboutUs from "./pages/about-us";
import DownloadPage from "./pages/download";
import KetentuanDanService from "./pages/ketentuan-dan-service";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <Router basename="/">
      <Whatsapp/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/produk" element={<Produk/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/unduh" element={<DownloadPage />} exact />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
