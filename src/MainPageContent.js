import React from 'react';
import yellowBoxImage from './images/boxes/yellow_box.JPG'
import blueBoxImage from './images/boxes/blue_box.JPG'
import redBoxImage from './images/boxes/red_box.JPG'
import MapsSection from './MapsSection';

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
                        <h3>The game consists of several phases that consist of
                            the blue zone moving in on the players. Those durations
                            are fixed and are listed below. Use those to your
                            advantage so that you know how much time you have
                            before making your next move.</h3>
                        <p>Phase 1 - 1m + 1m</p>
                        <p>Phase 2 - 30s + 1m30s</p>
                        <p>Phase 3 - 30s + 1m30s</p>
                        <p>Phase 4 - + 1m</p>
                        <p>Phase 5 - </p>
                    </div>
                    <div className="boxes">
                        <div className="box">
                            <h3>Yellow Box Contents</h3>
                            <img src={yellowBoxImage} alt="Yellow Box" className="box-image" />
                            <ul>
                                <li>Level 3 Helmet</li>
                                <li>Level 3 Vest</li>
                                <li>C4</li>
                            </ul>
                        </div>
                        <div className="box">
                            <h3>Blue Box Contents</h3>
                            <img src={blueBoxImage} alt="Yellow Box" className="box-image" />
                            <ul>
                                <li>Self-AED</li>
                                <li>Med Kit</li>
                                <li>BZ Grenade</li>
                                <li>Emergency Pickup</li>

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
