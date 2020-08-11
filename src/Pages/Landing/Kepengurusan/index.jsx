import React from "react";
import { observer } from "mobx-react-lite";
import "./w3.css";
import Pengurus from './pengurus.js';
import Pelatih from "./pelatih.js";

export default observer(() => {
  return (
    <div id="kepengurusan" class="w3-padding-64" style={{top:"20px",backgroundColor:"#fff",float:"left"}}>
    <div id="kepengurusan"  style={{top:"0px",backgroundColor:"#fff"}}>
      <Pelatih />
      <Pengurus />
    </div>
    </div>
  )
});
