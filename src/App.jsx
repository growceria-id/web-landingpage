import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages";
import DownloadPage from "./pages/download";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/unduh" element={<DownloadPage />} exact />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
