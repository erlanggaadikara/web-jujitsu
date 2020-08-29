import React from "react";
import "../w3.css";
import foto from "../img/test.jpg";

export default function DivAtlet() {
  return (
    <div class="w3-col w3-light-grey l4 m4 s8 w3-margin-bottom w3-round-large">
      <div class="w3-card-4 w3-tooltip">
        <img src={foto} class="w3-image" style={{ width: "100%" }} />
        <div class="w3-container" style={{ fontSize: "12px" }}>
          <p style={{ fontSize: "12px" }}>
            <b>Adelya Eka Cahyono Putri</b>
          </p>
          <p class="w3-text" style={{ fontSize: "11px" }}>
            NPM : 19013010062
          </p>
          <p class="w3-opacity" style={{ fontSize: "11px" }}>
            Div Pengembangan atlet
          </p>
          <div class="w3-text" style={{ fontSize: "11px" }}>
            <p>Fakultas Ekonomi & Bisnis</p>
            <p>Jurusan Akuntansi</p>
          </div>
        </div>
      </div>
    </div>
  );
}
