import React, { useEffect } from 'react';
import { Link, Route, Routes, useParams } from "react-router-dom";
import elAzaharImage from '../images/maps/miramar/areas/el-azahar.jpg';
import losLeonesImage from '../images/maps/miramar/areas/los-leones.jpg';
import monteNuevoImage from '../images/maps/miramar/areas/monte-nuevo.jpg';
import resortImage from '../images/maps/miramar/areas/resort.jpg';
import waterTreatmentImage from '../images/maps/miramar/areas/water-treatment.jpg';
import elAzaharBoxesImage from '../images/maps/miramar/boxes/el-azahar.jpg';
import losLeonesBoxesImage from '../images/maps/miramar/boxes/los-leones.jpg';
import monteNuevoBoxesImage from '../images/maps/miramar/boxes/monte-nuevo.jpg';
import resortBoxesImage from '../images/maps/miramar/boxes/resort.jpg';
import waterTreatmentBoxesImage from '../images/maps/miramar/boxes/water-treatment.jpg';

const locationData = [
  { name: 'El Azahar', image: elAzaharImage, boxesImage: elAzaharBoxesImage },
  { name: 'Los Leones', image: losLeonesImage, boxesImage: losLeonesBoxesImage },
  { name: 'Monte Nuevo', image: monteNuevoImage, boxesImage: monteNuevoBoxesImage },
  { name: 'Resort', image: resortImage, boxesImage: resortBoxesImage },
  { name: 'Water Treatment', image: waterTreatmentImage, boxesImage: waterTreatmentBoxesImage },
];

function Miramar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

export default function MiramarMap() {
  return (
    <Routes>
      <Route path="/" element={<Miramar />} />
      <Route path="/:locationName" element={<LocationBoxes />} />
    </Routes>
  );
}
