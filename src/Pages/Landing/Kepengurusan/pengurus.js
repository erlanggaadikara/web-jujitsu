import React from 'react';
import "./w3.css";
import Akbar from "./akbar.js";
import Nashir from "./nashir.js";
import Nishfi from "./nishfi.js";
import Adelya from "./adelya.js";
import Alifio from "./alifio.js";
import Bisma from "./bisma.js";
import Niko from "./niko.js";
import Addie from "./addie.js";
import Jeje from "./jefri.js";


export default function pengurus(){
    return (
        <div class="w3-row-padding w3-center w3-padding-64" >
          <div class="w3-col" style={{"padding-bottom":"64px"}}>
            <h1 class="w3-xxxlarge"><b>The Badgers</b></h1>
            <h2 class="w3-xlarge w3-text-red"><b>Daily Management Team</b></h2>
          </div>
            <div class="w3-row-padding" style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
              <Akbar />
              <Nashir />
            </div>

            <div class="w3-row-padding" style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
              <Niko />
              <Addie />
            </div>

            <div class="w3-row-padding" style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
              <Bisma />
              <Nishfi />
            </div>

            <div class="w3-row-padding"  style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
              <Adelya />
              <Alifio />
              <Jeje />
            </div>
        </div>
    )
}