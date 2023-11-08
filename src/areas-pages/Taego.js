import React, { useEffect } from 'react';
import { Link, Route, Routes, useParams } from "react-router-dom";
import AirportImage from '../images/maps/taego/areas/airport.jpg';
import fishingCampImage from '../images/maps/taego/areas/fishing-camp.jpg';
import goDokImage from '../images/maps/taego/areas/go-dok.jpg';
import songAmImage from '../images/maps/taego/areas/song-am.jpg';
import wolSongImage from '../images/maps/taego/areas/wol-song.jpg';
import AirportBoxesImage from '../images/maps/taego/boxes/airport.jpg';
import fishingCampBoxesImage from '../images/maps/taego/boxes/fishing-camp.jpg';
import goDokBoxesImage from '../images/maps/taego/boxes/go-dok.jpg';
import songAmBoxesImage from '../images/maps/taego/boxes/song-am.jpg';
import wolSongBoxesImage from '../images/maps/taego/boxes/wol-song.jpg';

const locationData = [
  { name: 'Airport', image: AirportImage, boxesImage: AirportBoxesImage },
  { name: 'Fishing Camp', image: fishingCampImage , boxesImage: fishingCampBoxesImage},
  { name: 'Go Dok', image: goDokImage, boxesImage: goDokBoxesImage },
  { name: 'Song Am', image: songAmImage, boxesImage: songAmBoxesImage },
  { name: 'Wol Song', image: wolSongImage, boxesImage: wolSongBoxesImage },
];

function Taego() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



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

function LocationBoxes() {
  const { locationName } = useParams();

  const location = locationData.find(
    (loc) => loc.name.toLowerCase() === locationName
  );
  if (!location) {
    // Handle invalid location here (e.g., redirect to a 404 page)
    return <div>Location not found</div>;
  }

  return (
    <div className="image-container">
      <img
        src={location.boxesImage}
        alt={`${location.name} Boxes`}
        style={{ width: "90%", display: "block", margin: "0 auto" }}
      />
    </div>
  );
}

export default function TaegoMap() {
  return (
    <Routes>
      <Route path="/" element={<Taego />} />
      <Route path="/:locationName" element={<LocationBoxes />} />
    </Routes>
  );
}

