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
    <Router basename='/pubg-intense-gg'>
      <div className="App">
        <nav className="navbar">
          <img src={[pubgLogo]} alt="PUBG Logo" className="logo" />
          <img src={[ibrLogo]} alt="IBR Logo" className="logo" />
          <h1 className="title">Survival Guide</h1>
          <ul className="nav-links">
            <li className="nav-item"><a href="/pubg-intense-gg/basics">Basics</a></li>
            <li className="nav-item"><a href="/pubg-intense-gg/erangel">Erangel</a></li>
            <li className="nav-item"><a href="/pubg-intense-gg/miramar">Miramar</a></li>
            <li className="nav-item"><a href="/pubg-intense-gg/sanhok">Sanhok</a></li>
            <li className="nav-item"><a href="/pubg-intense-gg/vikendi">Vikendi</a></li>
            <li className="nav-item"><a href="/pubg-intense-gg/taego">Taego</a></li>
            <li className="nav-item"><a href="/pubg-intense-gg/deston">Deston</a></li>
          </ul>
        </nav>
        <MainPageContent/>
        <Routes>
          <Route path="/pubg-intense-gg/basics" element={<MainPageContent />} />
          <Route path="/pubg-intense-gg/erangel" element={<Erangel />} />
          <Route path="/pubg-intense-gg/erangel/severny" element={<ErangelSeverny />} />
          <Route path="/pubg-intense-gg/miramar" element={<Miramar />} />
          <Route path="/pubg-intense-gg/sanhok" element={<Sanhok />} />
          <Route path="/pubg-intense-gg/vikendi" element={<Vikendi />} />
          <Route path="/pubg-intense-gg/deston" element={<Deston />} />
          <Route path="/pubg-intense-gg/taego" element={<Taego />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
