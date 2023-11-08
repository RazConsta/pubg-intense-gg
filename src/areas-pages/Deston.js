import React, { useEffect } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import barcliftImage from "../images/maps/deston/areas/barclift.jpg";
import holstonMeadowsImage from "../images/maps/deston/areas/holston-meadows.jpg";
import hydroelectricDamImage from "../images/maps/deston/areas/hydroelectric-dam.jpg";
import lodgeImage from "../images/maps/deston/areas/lodge.jpg";
import swampImage from "../images/maps/deston/areas/swamp.jpg";
import barcliftBoxesImage from "../images/maps/deston/boxes/barclift.jpg";
import holstonMeadowsBoxesImage from "../images/maps/deston/boxes/holston-meadows.jpg";
import hydroelectricDamBoxesImage from "../images/maps/deston/boxes/hydroelectric-dam.jpg";
import lodgeBoxesImage from "../images/maps/deston/boxes/lodge.jpg";
import swampBoxesImage from "../images/maps/deston/boxes/swamp.jpg";

const locationData = [
  { name: "Barclift", image: barcliftImage, boxesImage: barcliftBoxesImage },
  {
    name: "Holston Meadows",
    image: holstonMeadowsImage,
    boxesImage: holstonMeadowsBoxesImage,
  },
  {
    name: "Hydroelectric Dam",
    image: hydroelectricDamImage,
    boxesImage: hydroelectricDamBoxesImage,
  },
  { name: "Lodge", image: lodgeImage, boxesImage: lodgeBoxesImage },
  { name: "Swamp", image: swampImage, boxesImage: swampBoxesImage },
];

function Deston() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

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
      <Route path="/" element={<Deston />} />
      <Route path="/:locationName" element={<LocationBoxes />} />
    </Routes>
  );
}
