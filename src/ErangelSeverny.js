import React from 'react';
import yellowBoxImage from './images/boxes/yellow_box.JPG';
import blueBoxImage from './images/boxes/blue_box.JPG';
import landingSpot1Image from './images/maps/erangel/areas/severny.jpg';
import landingSpot2Image from './images/maps/erangel/areas/severny.jpg';
import landingSpot3Image from './images/maps/erangel/areas/severny.jpg';

// import landingSpot1Image from './images/severny_city.png';
// import landingSpot2Image from './images/severny_city.png';
// import landingSpot3Image from './images/severny_houses.png';

function ErangelSeverny() {
  return (
    <div className="erangel-severny-page">
      <section className="location-section">
        <h2>Yellow and Blue Box Locations</h2>
        <img src={yellowBoxImage} alt="Yellow Box Location" />
        <img src={blueBoxImage} alt="Blue Box Location" />
      </section>
      <section className="location-section">
        <h2>Landing Spots</h2>
        <div className="landing-spot">
          <img src={landingSpot1Image} alt="Landing Spot 1" />
        </div>
        <div className="landing-spot">
          <img src={landingSpot2Image} alt="Landing Spot 2" />
        </div>
        <div className="landing-spot">
          <img src={landingSpot3Image} alt="Landing Spot 3" />
        </div>
      </section>
    </div>
  );
}

export default ErangelSeverny;
