import React from "react";
import { observer } from "mobx-react-lite";
import "./w3.css";
import Img1 from "./img/img1.png";
import Img2 from "./img/img2.jpeg";

export default observer(() => {
  return (
      <div id="tentang-kami" style={{top:"200px"}}>
        <div class="w3-padding-64 w3-black">
          <div class="w3-row-padding">
            <div class="w3-col l8 m6">
              <h1 class="w3-jumbo"><b>About Us</b></h1>
              <h1 class="w3-xxxlarge w3-text-green"><b>Apa Yang Dipelajari?</b></h1>
              <p><span class="w3-xlarge">Take photos like a pro.</span> <span style={{"font-size":"17px"}}>You should buy this app </span> because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <button class="w3-button w3-light-grey w3-padding-large w3-section w3-hide-small" onclick="document.getElementById('download').style.display='block'">
                <i class="fa fa-download"></i> Download Application
              </button>
              <p>Available for <i class="fa fa-android w3-xlarge w3-text-green"></i> <i class="fa fa-apple w3-xlarge"></i> <i class="fa fa-windows w3-xlarge w3-text-blue"></i></p>
            </div>
            <div class="w3-col l4 m6">
              <img src={Img2} class="w3-image w3-right w3-hide-small" width="335" height="471"/>
              <div class="w3-center w3-hide-large w3-hide-medium">
                <button class="w3-button w3-block w3-padding-large" onclick="document.getElementById('download').style.display='block'">
                  <i class="fa fa-download"></i> Download Application
                </button>
                <img src={Img2} class="w3-image w3-margin-top" width="335" height="471"/>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
});
