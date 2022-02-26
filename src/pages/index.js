import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Info from "../components/Info";
import { tentang, unduh } from "../components/Info/Data";
import Fitur from "../components/Fitur";
import Bantuan from "../components/Bantuan";
import Keunggulan from "../components/Keunggulan";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Info {...tentang}/>
            <Fitur />
            <Keunggulan />
            <Bantuan />
            <Info {...unduh}/>
        </>
    )
}

export default Home