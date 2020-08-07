import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './App.css';
import './w3.css';
import Img1 from './img/img1.jpg';
import Img2 from './img/img2.jpg'; 
import Img3 from './img/img3.jpg';
import Img4 from './img/img4.jpg';
import Img5 from './img/img5.jpg';
import Img6 from './img/img6.jpg';

export default class ver2 extends React.Component {
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
        <img src={Img6} class="slideShow"/>
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
    const { currentIndex, galleryItems, responsive } = this.state
 
    return (
      <div>
        <AliceCarousel
          items={galleryItems}
          autoPlay={true}
          autoPlayInterval={1500}
          fadeOutAnimation={true}
          slideToIndex={currentIndex}
          responsive={responsive}
          dotsDisabled={true}
          buttonsDisabled={true}
          mouseTrackingEnabled={true}
          onInitialized={this.handleOnSlideChange}
          onSlideChanged={this.handleOnSlideChange}
          onResized={this.handleOnSlideChange}
        />
        
        <div class="mySlides w3-animate-opacity w3-content w3-display-container w3-black w3-center" style={{"top":"-175px", "left":"-100px"}}>
            <div class="w3-display-left w3-padding w3-hide-small" style={{width:"35%"}}>
            <div class="w3-black w3-opacity w3-hover-opacity-off w3-padding-large w3-round-large">
                <h1 class="w3-xlarge">JUJITSU Honey Badger</h1>
                <hr class="w3-opacity"></hr>
                <p>Super simple installment: free of charge</p>
                <p><button class="w3-button w3-block w3-yellow w3-round" onClick={this.slideNextPage}> View Activity <i class="fa fa-android"></i> <i class="fa fa-apple"></i> <i class="fa fa-windows"></i></button></p>
            </div>
            </div>
        </div>
      </div>
    )
  }
}