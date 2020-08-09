import React from "react";
import { observer } from "mobx-react-lite";
import "./w3.css";
import Pengurus from './pengurus.js';

export default observer(() => {
  return (
    <div id="kepengurusan" class="w3-padding-64" style={{top:"20px",backgroundColor:"#fff"}}>
      <Pengurus />
    </div>
  )
});
