import React from "react";
import { observer } from "mobx-react-lite";
import "react-alice-carousel/lib/alice-carousel.css";
import Ver1 from './ver2.js';
import './w3.css';
//import Content from './content.js';

export default observer(() => {
  return (
    <div id="beranda">
                
      <Ver1 />
      
    </div>
  )
});


/*
<div class="mySlides w3-animate-opacity">
        <div class="w3-display-left w3-padding w3-hide-small" style={{idth:"35%"}}>
          <div class="w3-black w3-opacity w3-hover-opacity-off w3-padding-large w3-round-large">
            <h1 class="w3-xlarge">Take photos with our app</h1>
            <p>Super simple installment: free of charge</p>
            <p><button class="w3-button w3-block w3-green w3-round" onclick="document.getElementById('download').style.display='block'">Download <i class="fa fa-android"></i> <i class="fa fa-apple"></i> <i class="fa fa-windows"></i></button></p>
          </div>
        </div>
      </div>
*/