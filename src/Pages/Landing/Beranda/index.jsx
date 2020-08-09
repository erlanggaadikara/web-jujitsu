import React from "react";
import { observer } from "mobx-react-lite";
import "react-alice-carousel/lib/alice-carousel.css";
import Slideshow from './slideshow.js';
import './w3.css';

export default observer(() => {
  return (
    <div id="beranda">
      <Slideshow />
    </div>
  )
});