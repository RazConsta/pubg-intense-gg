import React from "react";
import yellowBoxImage from "./images/boxes/yellow_box.JPG";
import blueBoxImage from "./images/boxes/blue_box.JPG";
import redBoxImage from "./images/boxes/red_box.JPG";
import MapsSection from "./MapsSection";
import "./MainPageContent.css";

function MainPageContent() {
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
            <h3>These are the number of yellow boxes I was able to map for each map (143 total):</h3>
            <ul>
              <li>Deston</li>
              <ul>
                <li>Barclift - 5</li>
                <li>✔️ Holston Meadows - 6</li>
                <li>✔️✔️ Hydroelectric Dam - 6</li>
                <li>Lodge - 4/5(1 is outside?)</li>
                <li>Swamp - 1</li>
              </ul>
              <li>Erangel</li>
              <ul>
                <li>✔️ Farm - 6</li>
                <li>✔️ Georgopol - 6</li>
                <li>✔️ Hospital - 6</li>
                <li>✔️ Mansion - 6</li>
                <li>✔️ Severny - 6</li>
              </ul>
              <li>Miramar</li>
              <ul>
                <li>✔️✔️El Azahar - 6</li>
                <li>✔️ Los Leones - 6</li>
                <li>✔️ Monte Nuevo - 6</li>
                <li>Resort - 2</li>
                <li>Water Treatment - 4</li>
              </ul>
              <li>Sanhok</li>
              <ul>
                <li>✔️ Bootcamp - 4</li>
                <li>✔️ Paradise Resort - 4</li>
                <li>✔️ Ruins - 4</li>
              </ul>
              <li>Taego</li>
              <ul>
                <li>Airport - 5</li>
                <li>✔️ Fishing Camp - 6</li>
                <li>✔️ Go Dok - 6</li>
                <li>Song Am - 5</li>
                <li>✔️ Wol Song - 6</li>
              </ul>
              <li>Vikendi</li>
              <ul>
                <li>✔️ Coal Mine - 6</li>
                <li>✔️ Lumber Yard - 6</li>
                <li>✔️✔️ Observatory - 6</li>
                <li>✔️ Villa - 6</li>
                <li>Winery - 5</li>
              </ul>
            </ul>
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
