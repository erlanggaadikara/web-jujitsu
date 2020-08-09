import React from "react";
import { observer } from "mobx-react-lite";
import "./w3.css";
import Img2 from "./img/img2.jpeg";

export default observer(() => {
  return (
      <div id="tentang-kami" style={{top:"200px"}}>
        <div class="w3-padding-64 w3-black">
          <div class="w3-row-padding">
            <div class="w3-col l8 m6">
              <h1 class="w3-jumbo"><b>About Us</b></h1>
              <h1 class="w3-xxxlarge w3-text-green"><b>UKM Jujitsu Honey Badger</b></h1>
              <p><span class="w3-xlarge">Honey Badger</span> <span style={{"font-size":"17px"}}>merupakan unit kegiatan mahasiswa cabang olah raga Jujitsu. </span>UKM ini berada dibawah naungan IJI dan Universitas Pembangunan Nasional "Veteran" Jawa Timur. Honey Badger memiliki 1 pelatih, 2 asisten pelatih dan 10 Anggota aktif.</p>
              <p><span style={{"font-size":"17px"}}>Honey Badger Memiliki tujuan untuk : </span> </p>
              <h5 class="w3-center"><i>"membentuk jujitsan yang tangguh jiwa dan raga."</i></h5>
            </div>
            <div class="w3-col l4 m6">
              <img src={Img2} class="w3-image w3-right w3-hide-small" width="335" height="471"/>
              <div class="w3-center w3-hide-large w3-hide-medium">
                <img src={Img2} class="w3-image w3-margin-top" width="335" height="471"/>
              </div>
            </div>
          </div>
        </div>
        
      </div>
  )
});
