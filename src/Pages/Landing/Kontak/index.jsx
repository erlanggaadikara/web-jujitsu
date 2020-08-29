import React from "react";
import { observer } from "mobx-react-lite";
import "./w3.css";
import Instagram from './instagram_feed.js';
import ContactPerson from './ContactPerson'

export default observer(() => {
  return (
    <div id="kontak">
      <div class="w3-white">
        <ContactPerson />
      </div>
      <div class="w3-white w3-center w3-padding-64">
        <Instagram />
      </div>
      <footer class="w3-container w3-padding-24 w3-light-grey w3-center w3-xlarge">
      <h4>Follow Us</h4>
      <div class="w3-section">
        <i class="fa fa-facebook-official w3-hover-opacity" style={{padding:"5px"}}> </i>
        <a href="https://www.instagram.com/jiujitsu_upn/"><i class="fa fa-instagram w3-hover-opacity" style={{padding:"5px"}}></i></a>
        <i class="fa fa-snapchat w3-hover-opacity" style={{padding:"5px"}}> </i>
        <i class="fa fa-pinterest-p w3-hover-opacity" style={{padding:"5px"}}> </i>
        <i class="fa fa-twitter w3-hover-opacity" style={{padding:"5px"}}> </i>
        <i class="fa fa-linkedin w3-hover-opacity" style={{padding:"5px"}}> </i>
      </div>
    </footer>
    </div>
  )
});
