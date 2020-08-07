import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './App.css';
import Img1 from './img/img1.jpeg';
import Img2 from './img/img2.jpeg'; 
import Img3 from './img/img3.png';


export default class ver2 extends React.Component {
  state = {
    currentIndex: 0,
    itemsInSlide: 1,
    responsive: { 0: { items: 1 } },
    galleryItems: [
        <img src={Img1} />,
        <img src={Img2} />,
        <img src={Img3} />
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
          slideToIndex={currentIndex}
          responsive={responsive}
          onInitialized={this.handleOnSlideChange}
          onSlideChanged={this.handleOnSlideChange}
          onResized={this.handleOnSlideChange}
        />
        <button onClick={this.slidePrevPage}>Prev Page</button>
        <button onClick={this.slideNextPage}>Next Page</button>
      </div>
    )
  }
}