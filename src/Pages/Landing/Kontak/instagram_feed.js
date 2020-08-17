import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import "./w3.css";

export default function instagram_feed(){
    return(
        <div>  
            <h1 class="w3-xxxlarge"><b>Social Media Activities</b></h1>
            <p class="w3-center" style={{"font-size":"20px"}}>What we do on the internet</p>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                <InstagramEmbed url="https://www.instagram.com/p/B6ewClOFUOb/" hideCaption={true} style={{margin:"10px 10px"}}/>
                <InstagramEmbed url="https://www.instagram.com/p/BaqPf9OBMGW/" hideCaption={true} style={{margin:"10px 10px"}}/>
                <InstagramEmbed url="https://www.instagram.com/p/B5RmyKFlxOo/" hideCaption={true} style={{margin:"10px 10px"}}/>
            </div>
        </div>
    )
}