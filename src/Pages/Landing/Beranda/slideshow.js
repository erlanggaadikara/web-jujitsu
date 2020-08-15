import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import {useMediaQuery} from '@material-ui/core';
import 'react-alice-carousel/lib/alice-carousel.css';
import './App.css';
import './w3.css';
import Img1 from './img/img1.jpg';
import Img2 from './img/img2.jpg'; 
import Img3 from './img/img3.jpg';
import Img4 from './img/img4.jpg';
import Img5 from './img/img5.jpg';
import Img6 from './img/img6.jpg';
import Img7 from './img/img8.jpeg';

export default class slideshow extends React.Component {
  state = {
    currentIndex: 0,
    itemsInSlide: 1,
    responsive: { 0: { items: 1 } },
    galleryItems: [
        <img src={Img1} class="slideShow"/>,
        <img src={Img2} class="slideShow"/>,
        <img src={Img3} class="slideShow"/>,
        <img src={Img4} class="slideShow"/>,
        <img src={Img5} class="slideShow"/>,
        <img src={Img6} class="slideShow"/>,
        <img src={Img7} class="slideShow"/>
    ],
  }
 
  slidePrevPage = () => {
    const currentIndex = this.state.currentIndex - this.state.itemsInSlide
    this.setState({ currentIndex })
  }
 
  slideNextPage = () => {
    const {
      itemsInSlide,
      galleryItems: { length },
    } = this.state
    let currentIndex = this.state.currentIndex + itemsInSlide
    if (currentIndex > length) currentIndex = length
 
    this.setState({ currentIndex })
  }
 
  handleOnSlideChange = (event) => {
    const { itemsInSlide, item } = event
    this.setState({ itemsInSlide, currentIndex: item })
  }
  
  render() {
    const { currentIndex, galleryItems, responsive } = this.state;
      return (
      <div>
        
        <AliceCarousel class="w3-image"
          items={galleryItems}
          autoPlay={true}
          autoPlayInterval={1500}
          fadeOutAnimation={true}
          dotsDisabled={true}
          buttonsDisabled={true}
          mouseTrackingEnabled={false}
          slideToIndex={currentIndex}
          responsive={responsive}
          onInitialized={this.handleOnSlideChange}
          onSlideChanged={this.handleOnSlideChange}
          onResized={this.handleOnSlideChange}
        />
        <div class="mySlides w3-animate-opacity">
        <div class="w3-display-left w3-padding w3-hide-small" style={{width:"35%"}}>
          <div class="w3-black w3-opacity w3-hover-opacity-off w3-padding-large w3-round-large">
            <h1 class="w3-xlarge w3-center">JUJITSU Honey Badger</h1>
            <hr class="w3-opacity"/>
            <p>Bukan sekedar latihan jujitsu biasa!!</p>
          </div>
        </div>
      </div>
        <a class="w3-button w3-yellow w3-display-right w3-margin-right w3-round w3-hide-small w3-hover-light-grey" onClick={this.slideNextPage}>View Activity <i class="fa fa-angle-right"></i></a>
        <a class="w3-button w3-block w3-yellow w3-hide-large w3-hide-medium" onClick={this.slideNextPage}>View Activity<i class="fa fa-angle-right"></i></a>
      </div>
    )
    
    
  }
}