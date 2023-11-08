import React, { useEffect } from 'react';
import { Link, Route, Routes, useParams } from "react-router-dom";
import coalMineImage from '../images/maps/vikendi/areas/coal-mine.jpg';
import lumberYardImage from '../images/maps/vikendi/areas/lumber-yard.jpg';
import observatoryImage from '../images/maps/vikendi/areas/observatory.jpg';
import villaImage from '../images/maps/vikendi/areas/villa.jpg';
import wineryImage from '../images/maps/vikendi/areas/winery.jpg';
import coalMineBoxesImage from '../images/maps/vikendi/boxes/coal-mine.jpg';
import lumberYardBoxesImage from '../images/maps/vikendi/boxes/lumber-yard.jpg';
import observatoryBoxesImage from '../images/maps/vikendi/boxes/observatory.jpg';
import villaBoxesImage from '../images/maps/vikendi/boxes/villa.jpg';
import wineryBoxesImage from '../images/maps/vikendi/boxes/winery.jpg';

const locationData = [
  { name: 'Coal Mine', image: coalMineImage, boxesImage: coalMineBoxesImage },
  { name: 'Lumber Yard', image: lumberYardImage, boxesImage: lumberYardBoxesImage },
  { name: 'Observatory', image: observatoryImage, boxesImage: observatoryBoxesImage },
  { name: 'Villa', image: villaImage, boxesImage: villaBoxesImage },
  { name: 'Winery', image: wineryImage, boxesImage: wineryBoxesImage },
];

function Vikendi() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

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

export default function DestonMap() {
  return (
    <Routes>
      <Route path="/" element={<Vikendi />} />
      <Route path="/:locationName" element={<LocationBoxes />} />
    </Routes>
  );
}
