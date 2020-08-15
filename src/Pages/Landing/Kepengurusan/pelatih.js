import React from 'react';
import './w3.css';
import Img1 from './img/akbar.jpeg';

export default function pelatih(){
    return(
        <div>
            <div class="w3-padding-64 w3-grey">
            <div class="w3-row-padding">
                <div class="w3-col l4 m6">
                <img class="w3-image w3-round-large w3-hide-small" src={Img1} alt="App" width="335" height="471"/>
                </div>
                <div class="w3-col l8 m6">
                <h1 class="w3-jumbo"><b>Our Coach</b></h1>
                <h1 class="w3-xxxlarge w3-text-red"><b>Who is He?</b></h1>
                <p><span class="w3-xlarge">A revolution in resolution.</span> Sharp and clear photos with the world's best photo engine, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
            </div>
        </div>
    )
}