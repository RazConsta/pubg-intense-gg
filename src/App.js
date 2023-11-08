import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes, Link } from "react-router-dom";
import pubgLogo from "./images/logos/pubg_logo.png";
import ibrLogo from "./images/logos/ibr.JPG";
import MainPageContent from "./MainPageContent";
import Erangel from "./areas-pages/Erangel";
import Miramar from "./areas-pages/Miramar";
import Sanhok from "./areas-pages/Sanhok";
import Vikendi from "./areas-pages/Vikendi";
import Taego from "./areas-pages/Taego";
import Deston from "./areas-pages/Deston";

function App() {
  return (
    // uncomment before running "npm run deploy"
    // <BrowserRouter basename="basename={process.env.PUBLIC_URL}">
    <BrowserRouter>
      <div className="App">
        <nav className="navbar">
          <img src={[pubgLogo]} alt="PUBG Logo" className="logo" />
          <img src={[ibrLogo]} alt="IBR Logo" className="logo" />
          <h1 className="title">Survival Guide</h1>
          <ul className="nav-links">
            <li className="nav-item"><a href="/basics">Basics</a></li>
            <li className="nav-item"><a href="/erangel">Erangel</a></li>
            <li className="nav-item"><a href="/miramar">Miramar</a></li>
            <li className="nav-item"><a href="/sanhok">Sanhok</a></li>
            <li className="nav-item"><a href="/vikendi">Vikendi</a></li>
            <li className="nav-item"><a href="/taego">Taego</a></li>
            <li className="nav-item"><a href="/deston">Deston</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="*" element={<MainPageContent />} />
          <Route path="basics" element={<MainPageContent />} />
          <Route path="erangel/*" element={<Erangel />} />
          <Route path="miramar/*" element={<Miramar />} />
          <Route path="sanhok/*" element={<Sanhok />} />
          <Route path="vikendi/*" element={<Vikendi />} />
          <Route path="deston/*" element={<Deston />} />
          <Route path="taego/*" element={<Taego />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
