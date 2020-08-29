import React from "react";
import "../w3.css";
import foto from "../img/nisfi.jpg";

export default function Bendahara2() {
  return (
    <div class="w3-col w3-light-grey l4 m5 w3-margin-bottom w3-round-large">
      <div class="w3-card-4 w3-tooltip">
        <img src={foto} class="w3-image" style={{ width: "100%" }} />
        <div class="w3-container">
          <h4>
            <b>Nur Fajri Nishfi Sya'baniyah</b>
          </h4>
          <p class="w3-text">NPM : 18034010029</p>
          <p class="w3-opacity">Bendahara 2</p>
          <div class="w3-text">
            <p>Fakultas Teknik</p>
            <p>Jurusan Teknik Lingkungan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
