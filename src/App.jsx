import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages";
import DownloadPage from "./pages/download";
import KetentuanDanService from "./pages/ketentuan-dan-service";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/syarat-ketentuan"
          exact
          element={<KetentuanDanService />}
        />
        <Route path="/unduh" element={<DownloadPage />} exact />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
