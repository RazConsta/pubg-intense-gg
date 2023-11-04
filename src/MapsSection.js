import React from 'react';
import { Link } from 'react-router-dom';

import erangelImage from './images/erangel.jpeg';
import miramarImage from './images/miramar.jpeg';
import vikendiImage from './images/vikendi.png';
import sanhokImage from './images/sanhok.png';
import taegoImage from './images/taego.JPG';
import destonImage from './images/deston.jpeg';

function MapsSection() {
  const maps = [
    { name: 'Erangel', path: '/erangel', image: erangelImage },
    { name: 'Miramar', path: '/miramar', image: miramarImage },
    { name: 'Vikendi', path: '/vikendi', image: vikendiImage },
    { name: 'Sanhok', path: '/sanhok', image: sanhokImage },
    { name: 'Taego', path: '/taego', image: taegoImage },
    { name: 'Deston', path: '/deston', image: destonImage },
  ];

  return (
    <div className="maps-section">
      <h2>Maps</h2>
      <div className="map-images">
        {maps.map((map) => (
          <div key={map.name} className="map-container">
            <Link to={map.path}>
              <img src={map.image} alt={map.name} className="map-image"/>
            </Link>
            <p className="map-name">{map.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MapsSection;
