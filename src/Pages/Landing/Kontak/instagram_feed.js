import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import Slider from './instagram_slider';
import "./w3.css";

export default function instagram_feed(){
    return(
        <div>
            
            <h1 class="w3-xxxlarge"><b>Social Media Activities</b></h1>
            <p class="w3-center" style={{"font-size":"20px"}}>What we do on the internet</p>
            <div class="w3-row-padding w3-hide-small" style={{display:"flex",flexDirection:"row",justifyContent:"center",width:"100%"}}>
                <InstagramEmbed url="https://www.instagram.com/p/B6ewClOFUOb/" class="w3-card l4 m3" style={{width:"100%"}} hideCaption={true} style={{margin:"10px 10px"}}/>
                <InstagramEmbed url="https://www.instagram.com/p/BaqPf9OBMGW/" class="w3-card l4 m3" style={{width:"100%"}} hideCaption={true} style={{margin:"10px 10px"}}/>
                <InstagramEmbed url="https://www.instagram.com/p/B5RmyKFlxOo/" class="w3-card l4 m3 w3-hide-medium" style={{width:"100%"}} hideCaption={true} style={{margin:"10px 10px"}}/>
            </div>
            <div class="w3-row-padding w3-hide-large w3-hide-medium" style={{display:"flex",flexDirection:"row",justifyContent:"center",width:"100%"}}>
                <Slider />
            </div>
        </div>
    )
}