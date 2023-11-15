import React from "react";
import yellowBoxImage from "./images/boxes/yellow_box.JPG";
import blueBoxImage from "./images/boxes/blue_box.JPG";
import redBoxImage from "./images/boxes/red_box.JPG";
import MapsSection from "./MapsSection";
import "./MainPageContent.css";

function MainPageContent() {
  const mapData = [
    {
      map: "Deston",
      locations: [
        { name: "Barclift", yellowBoxes: 5, blueBoxes: 0 },
        { name: "Holston Meadows", yellowBoxes: '✔️ 6', blueBoxes: 0 },
        { name: "Hydroelectric Dam", yellowBoxes: '✔️ 6', blueBoxes: 0 },
        { name: "Lodge (+1 outside)", yellowBoxes: '✔️ 6', blueBoxes: 1 },
        { name: "Swamp", yellowBoxes: 3, blueBoxes: 0 },
      ],
    },
    {
      map: "Erangel",
      locations: [
        { name: "Farm", yellowBoxes: 5, blueBoxes: 0 },
        { name: "Georgopol", yellowBoxes: '✔️ 6', blueBoxes: 0 },
        { name: "Hospital", yellowBoxes: '✔️ 6', blueBoxes: 0 },
        { name: "Mansion", yellowBoxes: '✔️ 6', blueBoxes: 0 },
        { name: "Severny", yellowBoxes: '✔️ 6', blueBoxes: 0 },
      ],
    },
    {
      map: "Miramar",
      locations: [
        { name: "El Azahar", yellowBoxes: '✔️ 6', blueBoxes: 0 },
        { name: "Los Leones", yellowBoxes: '✔️ 6', blueBoxes: 0 },
        { name: "Monte Nuevo", yellowBoxes: '✔️ 6', blueBoxes: 0 },
        { name: "Resort", yellowBoxes: 2, blueBoxes: 0 },
        { name: "Water Treatment", yellowBoxes: '✔️ 6', blueBoxes: 0 },
      ],
    },
    {
      map: "Sanhok",
      locations: [
        { name: "Bootcamp", yellowBoxes: '✔️ 4', blueBoxes: 0 },
        { name: "Paradise Resort", yellowBoxes: '✔️ 4', blueBoxes: 0 },
        { name: "Ruins", yellowBoxes: '✔️ 4', blueBoxes: 0 },
      ],
    },
    {
      map: "Taego",
      locations: [
        { name: "Airport", yellowBoxes: 5, blueBoxes: 0 },
        { name: "Fishing Camp", yellowBoxes: '✔️ 6', blueBoxes: 0 },
        { name: "Go Dok", yellowBoxes: '✔️ 6', blueBoxes: 0 },
        { name: "Song Am", yellowBoxes: 5, blueBoxes: 0 },
        { name: "Wol Song", yellowBoxes: '✔️ 6', blueBoxes: 0 },
      ],
    },
    {
      map: "Vikendi",
      locations: [
        { name: "Coal Mine", yellowBoxes: '✔️ 6', blueBoxes: 0 },
        { name: "Lumber Yard", yellowBoxes: '✔️ 6', blueBoxes: 0 },
        { name: "Observatory", yellowBoxes: '✔️ 6', blueBoxes: 0 },
        { name: "Villa", yellowBoxes: '✔️ 6', blueBoxes: 0 },
        { name: "Winery", yellowBoxes: 5, blueBoxes: 0 },
      ],
    },
  ];

  return (
    <div>
      <div>
        <MapsSection />
      </div>
      <div className="main-content">
        <h2>The Basics of PUBG Intense</h2>
        <div className="text-content">
          <div className="phases">
            <h3>
              The game consists of several phases that consist of the blue zone
              moving in on the players. Those durations are fixed and are listed
              below. Use those to your advantage so that you know how much time
              you have before making your next move.
            </h3>
            <ul>
              <li>Phase 1 - 1m + 1m</li>
              <li>Phase 2 - 30s + 1m30s</li>
              <li>Phase 3 - 30s + 1m30s</li>
              <li>Phase 4 - + 1m</li>
              <li>Phase 5 - </li>
            </ul>
            <h3>These are the number of yellow and blue boxes I was able to map so far:</h3>
            {mapData.map((map, index) => (
          <div key={index}>
            <h4>{map.map}</h4>
            <table>
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Yellow Boxes</th>
                  <th>Blue Boxes</th>
                </tr>
              </thead>
              <tbody>
                {map.locations.map((location, index) => (
                  <tr key={index}>
                    <td>{location.name}</td>
                    <td>{location.yellowBoxes}</td>
                    <td>{location.blueBoxes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
          </div>
          <div className="boxes">
            <div className="box">
              <h3>Yellow Box Contents</h3>
              <img
                src={yellowBoxImage}
                alt="Yellow Box"
                className="box-image"
              />
              <ul>
                <li>Level 3 Helmet</li>
                <li>Level 3 Vest</li>
                <li>C4</li>
                <li>Jammer Pack</li>
                <li>Folded Shield</li>
              </ul>
            </div>
            <div className="box">
              <h3>Blue Box Contents</h3>
              <img src={blueBoxImage} alt="Yellow Box" className="box-image" />
              <ul>
                <li>Self-AED</li>
                <li>BZ Grenade</li>
                <li>Med Kit</li>
                <li>First Aid Kit</li>
                <li>Emergency Pickup</li>
                <li>Adrenaline Syringe</li>
                <li>Painkiller</li>
                <li>Energy Drink</li>
              </ul>
            </div>
            <div className="box">
              <h3>Red Box Contents</h3>
              <img src={redBoxImage} alt="Yellow Box" className="box-image" />
              <ul>
                <li>Combination of 5.56 ARs/DMRs</li>
                <li>Combination of 7.62 ARs/DMRs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPageContent;
