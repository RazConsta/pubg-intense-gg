import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bootcmapImage from './images/maps/sanhok/areas/bootcamp.jpg';
import paradiseResortImage from './images/maps/sanhok/areas/paradise-resort.jpg';
import ruinsImage from './images/maps/sanhok/areas/ruins.jpg';


function Sanhok() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const locationData = [
    { name: 'Bootcamp', image: bootcmapImage },
    { name: 'Paradise Resort', image: paradiseResortImage },
    { name: 'Ruins', image: ruinsImage }
  ];

  return (
    <div className="image-container">
      {locationData.map((location, index) => (
        <section className="location-section" key={index}>
          <h2>{location.name}</h2>
          <Link to={`/sanhok/${location.name.toLowerCase()}`}>
            <img src={location.image} alt={location.name} />
          </Link>
        </section>
      ))}
    </div>
  );
}

export default Sanhok;
