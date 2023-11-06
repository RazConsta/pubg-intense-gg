import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import elAzaharImage from './images/maps/miramar/areas/el-azahar.jpg';
import losLeonesImage from './images/maps/miramar/areas/los-leones.jpg';
import monteNuevoImage from './images/maps/miramar/areas/monte-nuevo.jpg';
import resortImage from './images/maps/miramar/areas/resort.jpg';
import waterTreatmentImage from './images/maps/miramar/areas/water-treatment.jpg';

function Miramar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const locationData = [
    { name: 'El Azahar', image: elAzaharImage },
    { name: 'Los Leones', image: losLeonesImage },
    { name: 'Monte Nuevo', image: monteNuevoImage },
    { name: 'Resort', image: resortImage },
    { name: 'Water Treatment', image: waterTreatmentImage },
  ];

  return (
    <div className="image-container">
      {locationData.map((location, index) => (
        <section className="location-section" key={index}>
          <h2>{location.name}</h2>
          <Link to={`/miramar/${location.name.toLowerCase()}`}>
            <img src={location.image} alt={location.name} />
          </Link>
        </section>
      ))}
    </div>
  );
}

export default Miramar;
