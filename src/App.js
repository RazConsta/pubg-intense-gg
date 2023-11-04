// import logo from './logo.svg';
import { useLocation } from 'react-router-dom';
import pubgLogo from './images/pubg_logo.png'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainPageContent from './MainPageContent';
import Erangel from './Erangel';
import './App.css';
import ErangelSeverny from './ErangelSeverny';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <img src={[pubgLogo]} alt="PUBG Logo" className="logo" />
          <h1 className="title">PUBG Intense Arcade Survival Guide</h1>
          <ul className="nav-links">
            <li className="nav-item"><a href="/basics">Basics</a></li>
            <li className="nav-item"><a href="/erangel">Erangel</a></li>
            <li className="nav-item"><a href="/erangel">Miramar</a></li>
            <li className="nav-item"><a href="/vikendi">Vikendi</a></li>
            <li className="nav-item"><a href="/sanhok">Sanhok</a></li>
            <li className="nav-item"><a href="/sanhok">Taego</a></li>
            <li className="nav-item"><a href="/sanhok">Deston</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/basics" element={<MainPageContent />} />
          <Route path="/erangel" element={<Erangel />} />
          <Route path="/erangel/severny" element={<ErangelSeverny />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
