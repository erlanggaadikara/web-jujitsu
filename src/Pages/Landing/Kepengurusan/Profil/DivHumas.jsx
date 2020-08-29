import React from "react";
import "../w3.css";
import foto from "../img/alifio.jpg";

export default function DivHumas() {
  return (
    <div class="w3-col w3-light-grey l4 m4 w3-margin-bottom w3-round-large">
      <div class="w3-card-4 w3-tooltip">
        <img src={foto} class="w3-image" style={{ width: "100%" }} />
        <div class="w3-container">
          <p style={{ fontSize: "12px" }}>
            <b>Alifio Ananda Shatria</b>
          </p>
          <p class="w3-text" style={{ fontSize: "11px" }}>
            NPM : 18011010060
          </p>
          <p class="w3-opacity" style={{ fontSize: "11px" }}>
            Div Humas
          </p>
          <div class="w3-text" style={{ fontSize: "11px" }}>
            <p>Fakultas Ekonomi & Bisnis</p>
            <p>Jurusan Ekonomi Pembangunan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
