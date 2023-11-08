import React, { useEffect } from 'react';
import { Link, Route, Routes, useParams } from "react-router-dom";
import bootcampImage from '../images/maps/sanhok/areas/bootcamp.jpg';
import paradiseResortImage from '../images/maps/sanhok/areas/paradise-resort.jpg';
import ruinsImage from '../images/maps/sanhok/areas/ruins.jpg';
import bootcampBoxesImage from '../images/maps/sanhok/boxes/bootcamp.jpg';
import paradiseResortBoxesImage from '../images/maps/sanhok/boxes/paradise-resort.jpg';
import ruinsBoxesImage from '../images/maps/sanhok/boxes/ruins.jpg';

const locationData = [
  { name: 'Bootcamp', image: bootcampImage, boxesImage: bootcampBoxesImage },
  { name: 'Paradise Resort', image: paradiseResortImage, boxesImage: paradiseResortBoxesImage },
  { name: 'Ruins', image: ruinsImage, boxesImage: ruinsBoxesImage }
];

function Sanhok() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

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

export default function SanhokMap() {
  return (
    <Routes>
      <Route path="/" element={<Sanhok />} />
      <Route path="/:locationName" element={<LocationBoxes />} />
    </Routes>
  );
}
