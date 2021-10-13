import React from 'react'
import './footer.css'
import Download from '../media/mobileApp.png'
import Play from '../media/google_play.png'
import Apple from '../media/app_store.png'
import facebook from '../media/facebook.png'
import instagram from '../media/instagram.png'
import google from '../media/google.png'
import globle from '../media/globe.png'

const Footer = () => {
    return (
        <div className = 'footer'>
            <div className = 'footerContainer1'>
                <div className = 'footerContainer1Left'>
                    <div>
                       ABOUT KFC
                    </div>
                    <div>
                        CONTACT US
                    </div>
                    <div>
                        TERMS AND CONDITIONS
                    </div>
                </div>
                <div style={{whiteSpace :'nowrap'}}>
                    <img src = {Download} alt = 'Download' />
                    <img src = {Play} alt = 'Play'/>
                    <img src = {Apple} alt = 'Apple' />
                </div>
            </div>
            <div className = 'footerContainer2'>
                <div>
                    <img src = {facebook} alt= 'FB' />
                    <img src = {google} alt = 'G'/>
                    <img src = {instagram} alt = 'IG'/>
                    <img src = {globle} alt ='WWW'/>
                </div>
                <div className = 'footerCopyright'>
                    © COPYRIGHT 2021 KFC. ALL RIGHTS RESERVED.
                </div>
            </div>
        </div>
    )
}

export default Footer
