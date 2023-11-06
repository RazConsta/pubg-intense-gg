import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import coalMineImage from './images/maps/vikendi/areas/coal-mine.jpg';
import lumberYardImage from './images/maps/vikendi/areas/lumber-yard.jpg';
import observatoryImage from './images/maps/vikendi/areas/observatory.jpg';
import villaImage from './images/maps/vikendi/areas/villa.jpg';
import wineryImage from './images/maps/vikendi/areas/winery.jpg';

function Vikendi() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const locationData = [
    { name: 'Coal Mine', image: coalMineImage },
    { name: 'Lumber Yard', image: lumberYardImage },
    { name: 'Observatory', image: observatoryImage },
    { name: 'Villa', image: villaImage },
    { name: 'Winery', image: wineryImage },
  ];

  return (
    <div className="image-container">
      {locationData.map((location, index) => (
        <section className="location-section" key={index}>
          <h2>{location.name}</h2>
          <Link to={`/vikendi/${location.name.toLowerCase()}`}>
            <img src={location.image} alt={location.name} />
          </Link>
        </section>
      ))}
    </div>
  );
}

export default Vikendi;
