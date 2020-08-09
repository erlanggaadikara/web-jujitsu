import React from "react";
import { observer } from "mobx-react-lite";
import InstagramEmbed from 'react-instagram-embed';
import "./w3.css";

export default observer(() => {
  return (
    <div id="kontak">
      <div class="mySlides w3-animate-opacity w3-content w3-display-container w3-black w3-center" style={{"top":"-175px", "left":"-100px", "z-index":"+1" }}>
            <div class="w3-display-left w3-padding w3-hide-small" style={{width:"35%"}}>
            <div class="w3-black w3-hover-opacity-off w3-padding-large w3-round-large">
            <InstagramEmbed url="https://www.instagram.com/p/B6ewClOFUOb/" hideCaption={true}/>
            </div>
            </div>
        </div>
      
      
      <footer class="w3-container w3-padding-64 w3-light-grey w3-center w3-xlarge">
      <div class="w3-section">
        <i class="fa fa-facebook-official w3-hover-opacity" style={{padding:"5px"}}> </i>
        <a href="https://www.instagram.com/jiujitsu_upn/"><i class="fa fa-instagram w3-hover-opacity" style={{padding:"5px"}}></i></a>
        <i class="fa fa-snapchat w3-hover-opacity" style={{padding:"5px"}}> </i>
        <i class="fa fa-pinterest-p w3-hover-opacity" style={{padding:"5px"}}> </i>
        <i class="fa fa-twitter w3-hover-opacity" style={{padding:"5px"}}> </i>
        <i class="fa fa-linkedin w3-hover-opacity" style={{padding:"5px"}}> </i>
      </div>
      <p class="w3-medium">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" class="w3-hover-text-green">w3.css</a></p>
    </footer>
    </div>
  )
});
