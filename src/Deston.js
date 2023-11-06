import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import barcliftImage from './images/maps/deston/areas/barclift.jpg';
import holstonMeadowsImage from './images/maps/deston/areas/holston-meadows.jpg';
import hydroelectricDamImage from './images/maps/deston/areas/hydroelectric-dam.jpg';
import lodgeImage from './images/maps/deston/areas/lodge.jpg';
import swampImage from './images/maps/deston/areas/swamp.jpg';

function Deston() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  const locationData = [
    { name: 'Barclift', image: barcliftImage },
    { name: 'Holston Meadows', image: holstonMeadowsImage },
    { name: 'Hydroelectric Dam', image: hydroelectricDamImage },
    { name: 'Lodge', image: lodgeImage },
    { name: 'Swamp', image: swampImage },
  ];

  return (
    <div className="image-container">
      {locationData.map((location, index) => (
        <section className="location-section" key={index}>
          <h2>{location.name}</h2>
          <Link to={`/deston/${location.name.toLowerCase()}`}>
            <img src={location.image} alt={location.name} />
          </Link>
        </section>
      ))}
    </div>
  );
}

export default Deston;
