import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AirportImage from './images/maps/taego/areas/airport.jpg';
import fishingCampImage from './images/maps/taego/areas/fishing-camp.jpg';
import goDokImage from './images/maps/taego/areas/go-dok.jpg';
import songAmImage from './images/maps/taego/areas/song-am.jpg';
import wolSongImage from './images/maps/taego/areas/wol-song.jpg';

function Taego() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const locationData = [
    { name: 'Airport', image: AirportImage },
    { name: 'Fishing Camp', image: fishingCampImage },
    { name: 'Go Dok', image: goDokImage },
    { name: 'Song Am', image: songAmImage },
    { name: 'Wol Song', image: wolSongImage },
  ];

  return (
    <div className="image-container">
      {locationData.map((location, index) => (
        <section className="location-section" key={index}>
          <h2>{location.name}</h2>
          <Link to={`/taego/${location.name.toLowerCase()}`}>
            <img src={location.image} alt={location.name} />
          </Link>
        </section>
      ))}
    </div>
  );
}

export default Taego;
