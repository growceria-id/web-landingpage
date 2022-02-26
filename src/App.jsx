import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages";
import DownloadPage from "./pages/download";
import Footer from "./components/Footer";

function App() {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/unduh" element={<DownloadPage />} exact />
        </Routes>
        <Footer />
    </Router>)
}

export default App