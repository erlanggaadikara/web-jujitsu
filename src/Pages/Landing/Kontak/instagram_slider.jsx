import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import InstagramEmbed from 'react-instagram-embed';
import './App.css';
import './w3.css';

export default class slideshow extends React.Component {
  state = {
    currentIndex: 0,
    itemsInSlide: 1,
    responsive: { 3: { items: 1 } },
    galleryItems: [
        <InstagramEmbed url="https://www.instagram.com/p/B6ewClOFUOb/" class="w3-card" style={{width:"100%"}} hideCaption={true} style={{margin:"10px 10px"}}/>,
        <InstagramEmbed url="https://www.instagram.com/p/BaqPf9OBMGW/" class="w3-card" style={{width:"100%"}} hideCaption={true} style={{margin:"10px 10px"}}/>,
        <InstagramEmbed url="https://www.instagram.com/p/B5RmyKFlxOo/" class="w3-card" style={{width:"100%"}} hideCaption={true} style={{margin:"10px 10px"}}/>
            
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
      <div style={{display:"flex",width:"100%",justifyContent:"center"}}>
        <AliceCarousel
          items={galleryItems}
          autoPlay={false}
          fadeOutAnimation={false}
          dotsDisabled={false}
          buttonsDisabled={true}
          mouseTrackingEnabled={false}
          slideToIndex={currentIndex}
          responsive={responsive}
          onInitialized={this.handleOnSlideChange}
          onSlideChanged={this.handleOnSlideChange}
          onResized={this.handleOnSlideChange}
        />
      </div>
    )
  }
}