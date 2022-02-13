import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Info from "../components/Info";
import { tentang, unduh } from "../components/Info/Data";
import Fitur from "../components/Fitur";
import Footer from "../components/Footer";
import Bantuan from "../components/Bantuan";
import Keunggulan from "../components/Keunggulan";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <Info {...tentang}/>
            <Fitur />
            <Keunggulan />
            <Bantuan />
            <Info {...unduh}/>
            <Footer />
        </>
    )
}

export default Home