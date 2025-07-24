import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Headline from "../components/Headline";
import Fitur from "../components/Fitur";
import Bantuan from "../components/Bantuan";
import Partners from "../components/Partners";

const Home = () => {

    return (
        <>
            <Headline 
            title="Menyuplai kebutuhan bahan-bahan segar bagi bisnis anda"
            description="Mempermudah UMKM dalam menemukan bahan dasar produksi dengan kualitas dan harga yang kompetitif untuk meningkatkan profit dan kepuasan pelanggan"
            button="Beli Sekarang"
            buttonHref="https://wa.me/6281919071301"
            alignRight={false}
            image="./home-banner.webp"
            />
            <Fitur />
            <Partners />
            <Bantuan />
        </>
    )
}

export default Home;