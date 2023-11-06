import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import pubgLogo from './images/logos/pubg_logo.png'
import ibrLogo from './images/logos/ibr.JPG'
import MainPageContent from './MainPageContent';
import Erangel from './Erangel';
import Miramar from './Miramar';
import Sanhok from './Sanhok'
import Vikendi from './Vikendi'
import Taego from './Taego';
import Deston from './Deston';

import ErangelSeverny from './ErangelSeverny';

function App() {
  return (
    <Router>
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
        <Route path="" element={<MainPageContent />} />
          <Route path="basics" element={<MainPageContent />} />
          <Route path="erangel" element={<Erangel />} />
          <Route path="erangel/severny" element={<ErangelSeverny />} />
          <Route path="miramar" element={<Miramar />} />
          <Route path="sanhok" element={<Sanhok />} />
          <Route path="vikendi" element={<Vikendi />} />
          <Route path="deston" element={<Deston />} />
          <Route path="taego" element={<Taego />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
