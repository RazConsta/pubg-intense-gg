import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import severnyImage from './images/severny.png';
import georgopolImage from './images/georgopol.png';

function Erangel() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="erangel-page">
      <section className="location-section">
        <h2>Severny</h2>
        <Link to="/erangel/severny">
          <img src={severnyImage} alt="Severny" />
        </Link>
      </section>
      
      <section className="location-section">
        <h2>Georgopol</h2>
        <Link to="/erangel/georgopol">
          <img src={georgopolImage} alt="Georgopol" />
        </Link>
      </section>
    </div>
  );
}

export default Erangel;
