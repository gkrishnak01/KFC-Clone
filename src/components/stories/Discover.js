import React from 'react'
import './stories.css'
import qr from '../media/qrcode.png'
import kfcqr from '../media/kfcqr.png'

const Discover = () => {
    return (
        <div className = 'aboutRating'>
            <div className = 'ratingTitle'>
                <img src = {qr} className = 'ratingStar' alt = 'QR' />
                DISCOVER MORE WITH US
            </div>
            <div className='discoverMore'>
                <div className = 'discoverMoreQR'>
                    <img src = {kfcqr} alt = 'QR'/>
                </div>
                <div className='discoverMoreText'>
                    <span>Tell us about your experience. Scan this QR code to discover more with us.</span>
                    <div className = 'discoverMoreDownload'>DOWNLOAD QR</div>
                </div>
            </div>
        </div>
    )
}

export default Discover
