import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import severnyImage from './images/maps/erangel/areas/severny.jpg';
import georgopolImage from './images/maps/erangel/areas/georgopol.jpg';
import hospitalImage from './images/maps/erangel/areas/hospital.jpg';
import farmImage from './images/maps/erangel/areas/farm.jpg';
import mansionImage from './images/maps/erangel/areas/mansion.jpg';

function Erangel() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const locationData = [
    { name: 'Hospital', image: hospitalImage },
    { name: 'Georgopol', image: georgopolImage },
    { name: 'Farm', image: farmImage },
    { name: 'Mansion', image: mansionImage },
    { name: 'Severny', image: severnyImage },
  ];

  return (
    <div className="image-container">
      {locationData.map((location, index) => (
        <section className="location-section" key={index}>
          <h2>{location.name}</h2>
          <Link to={`/erangel/${location.name.toLowerCase()}`}>
            <img src={location.image} alt={location.name} />
          </Link>
        </section>
      ))}
    </div>
  );
}

export default Erangel;
