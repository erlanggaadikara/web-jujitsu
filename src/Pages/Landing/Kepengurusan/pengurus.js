import React from "react";
import "./w3.css";
import {
  Ketua,
  WakilKetua,
  Bendahara2,
  DivAtlet,
  DivHumas,
  Bendahara1,
  Sekretaris1,
  Sekretaris2,
  DivPerlengkapan,
} from "./Profil";

export default function pengurus() {
  return (
    <div class="w3-row-padding w3-center w3-padding-64">
      <div class="w3-col" style={{ "padding-bottom": "64px" }}>
        <h1 class="w3-xxxlarge">
          <b>The Badgers</b>
        </h1>
        <h2 class="w3-xlarge w3-text-red">
          <b>Daily Management Team</b>
        </h2>
      </div>
      <div
        class="w3-row-padding"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Ketua />
        <WakilKetua />
      </div>

      <div
        class="w3-row-padding"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Sekretaris1 />
        <Sekretaris2 />
      </div>

      <div
        class="w3-row-padding"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Bendahara1 />
        <Bendahara2 />
      </div>

      <div
        class="w3-row-padding"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <DivAtlet />
        <DivHumas />
        <DivPerlengkapan />
      </div>
    </div>
  );
}
