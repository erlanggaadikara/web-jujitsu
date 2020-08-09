import React from "react";
import { observer } from "mobx-react-lite";
import "./w3.css";
import Prototype from './prototype.js';

export default observer(() => {
  return (
    <div id="kepengurusan" style={{top:"20px"}} data-aos="fade">
      <Prototype data-aos-delay="200"/>
    </div>
  )
  
});
