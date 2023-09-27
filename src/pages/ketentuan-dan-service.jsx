import React from "react";
import Privasi from "../components/KetentuanDanService/Privasi";
import ReturSection from "../components/KetentuanDanService/Retur";
import Navbar from "../components/Navbar/NavbarSyaratKetentuan";

const KetentuanDanService = () => {
  return (
    <>
      <Navbar />
      <ReturSection />
      <Privasi />
    </>
  );
};
export default KetentuanDanService;
