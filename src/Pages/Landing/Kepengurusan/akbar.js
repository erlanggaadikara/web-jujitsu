import React from 'react';
import "./w3.css";
import foto from "./img/akbar2.jpg";

export default function akbar(){
    return(
        <div class="w3-col w3-light-grey l4 m5 w3-margin-bottom w3-round-large">
            <div class="w3-card-4 w3-tooltip">
                <img src={foto} class="w3-image" style={{width:"100%"}} />
                <div class="w3-container">
                  <h4><b>Mohammad Akbar Hakiki</b></h4>
                  <p class="w3-text">NPM : 17013010100</p>
                  <p class="w3-opacity">Ketua UKM</p>
                  <div class="w3-text">
                    <p>Fakultas Ekonomi & Bisnis</p>
                    <p>Jurusan Akuntansi</p>
                  </div>
                </div>
            </div>
        </div>
    )
}