import React from 'react';
import Maps from 'react-iframe';
import './w3.css';

export default function ContactPerson(){
    return(
            <div class="w3-padding-64">
                <h3 class="w3-center">CONTACT</h3>
                <p class="w3-center w3-large">Lets get in touch. Send us a message:</p>
                <div style={{display:"flex"}} class="w3-row-padding">
                    <div class="w3-col w3-left">
                        <p><i class="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i> Surabaya, Indonesia</p>
                        <p><i class="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone (Whatsapp): +62 87798018468</p>
                        <p><i class="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> Email: jujitsu.upnvjatim@gmail.com</p>
                    </div>
                    <div class="w3-col w3-hide-small">
                        <Maps url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.1812398929715!2d112.78818411426963!3d-7.333532374163298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fab87edcad15%3A0xb26589947991eea1!2sUniversitas%20Pembangunan%20Nasional%20%E2%80%9CVeteran%E2%80%9D%20Jawa%20Timur!5e0!3m2!1sen!2sid!4v1598684859017!5m2!1sen!2sid" class="w3-image w3-right" width="100%" height="450" frameborder="0" style={{"border":"0"}} allowfullscreen="" aria-hidden="false" tabindex="0" position="relative"/>
                    </div>                    
                </div>
                <div class="w3-hide-large w3-hide-medium">
                    <Maps url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.1812398929715!2d112.78818411426963!3d-7.333532374163298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fab87edcad15%3A0xb26589947991eea1!2sUniversitas%20Pembangunan%20Nasional%20%E2%80%9CVeteran%E2%80%9D%20Jawa%20Timur!5e0!3m2!1sen!2sid!4v1598684859017!5m2!1sen!2sid" width="100%" height="450" frameborder="0" style={{"border":"0"}} allowfullscreen="" aria-hidden="false" tabindex="0" position="relative"/>
                </div>
            </div>

    )
}