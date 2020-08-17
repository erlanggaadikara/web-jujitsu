import React from "react";
import { observer } from "mobx-react-lite";
import "./w3.css";
import Pengurus from './pengurus.js';
import Pelatih from "./pelatih.js";

export default observer(() => {
  return (
    <div id="kepengurusan"  style={{backgroundColor:"#f1f1f1"}}>
      <Pelatih />
      <Pengurus />
    </div>
    
  )
});
