import React, { useEffect } from 'react';
import { Link, Route, Routes, useParams } from "react-router-dom";
import severnyImage from '../images/maps/erangel/areas/severny.jpg';
import georgopolImage from '../images/maps/erangel/areas/georgopol.jpg';
import hospitalImage from '../images/maps/erangel/areas/hospital.jpg';
import farmImage from '../images/maps/erangel/areas/farm.jpg';
import mansionImage from '../images/maps/erangel/areas/mansion.jpg';
import severnyBoxesImage from '../images/maps/erangel/boxes/severny.jpg';
import georgopolBoxesImage from '../images/maps/erangel/boxes/georgopol.jpg';
import hospitalBoxesImage from '../images/maps/erangel/boxes/hospital.jpg';
import farmBoxesImage from '../images/maps/erangel/boxes/farm.jpg';
import mansionBoxesImage from '../images/maps/erangel/boxes/mansion.jpg';

const locationData = [
  { name: 'Hospital', image: hospitalImage, boxesImage: hospitalBoxesImage },
  { name: 'Georgopol', image: georgopolImage, boxesImage: georgopolBoxesImage },
  { name: 'Farm', image: farmImage, boxesImage: farmBoxesImage },
  { name: 'Mansion', image: mansionImage, boxesImage: mansionBoxesImage },
  { name: 'Severny', image: severnyImage, boxesImage: severnyBoxesImage },
];

function Erangel() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

export default function ErangelMap() {
  return (
    <Routes>
      <Route path="/" element={<Erangel />} />
      <Route path="/:locationName" element={<LocationBoxes />} />
    </Routes>
  );
}

