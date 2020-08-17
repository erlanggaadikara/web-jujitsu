import React from "react";
import "../w3.css";
import foto from "../img/test.jpg";

export default function niko() {
  return (
    <div class="w3-col w3-light-grey l4 m5 w3-margin-bottom w3-round-large">
      <div class="w3-card-4 w3-tooltip">
        <img src={foto} class="w3-image" style={{ width: "100%" }} />
        <div class="w3-container">
          <h4>
            <b>Niko Kurniawan</b>
          </h4>
          <p class="w3-text">NPM : 18043010008</p>
          <p class="w3-opacity">Sekretaris 1</p>
          <div class="w3-text">
            <p>Fakultas Ilmu Soisal & Politik</p>
            <p>Jurusan Ilmu Komunikasi</p>
          </div>
        </div>
      </div>
    </div>
  );
}
