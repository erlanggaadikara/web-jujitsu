import React from "react";
import "../w3.css";
import foto from "../img/jefri.png";

export default function jefri() {
  return (
    <div class="w3-col w3-light-grey l3 m4 s4 w3-margin-bottom w3-round-large">
      <div class="w3-card-4 w3-tooltip">
        <img src={foto} class="w3-image" style={{ width: "100%" }} />
        <div class="w3-container">
          <p style={{ fontSize: "12px" }}>
            <b>Jefri Abdurrozak Ismail</b>
          </p>
          <p style={{ fontSize: "11px" }} class="w3-text">
            NPM : 18081010059
          </p>
          <p style={{ fontSize: "11px" }} class="w3-opacity">
            Div Perlengkapan
          </p>
          <div style={{ fontSize: "11px" }} class="w3-text">
            <p>Fakultas Ilmu Komputer</p>
            <p>Jurusan Informatika</p>
          </div>
        </div>
      </div>
    </div>
  );
}
