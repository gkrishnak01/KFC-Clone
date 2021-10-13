import React from 'react'
import Location from '../media/location.png'
import Home from '../media/home.png'
import SmartPhone from '../media/smartphone.png'
import Clock from '../media/clock.png'
import './banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className='bannerText'>
                <div className = 'bannerTextHeader'>
                    KFC
                </div>
                <div className='bannerTextContent'>
                    <div className= 'bannerTextContentIndi'>
                        <img 
                            className='bannerTextIcon1'
                            src={Location} 
                            alt = 'loc' />
                    
                        <div className = 'bannerTextText1'>
                            STADIUM BYPASS ROAD
                        </div>
                    </div>
                    <div className= 'bannerTextContentIndi'>
                        <img 
                            className='bannerTextIcon2'
                            src={Home} 
                            alt = 'loc' />
                        <div className = 'bannerTextText2'>
                            <div className = 'bannerTextText2Header'>
                                ADDRESS
                            </div>
                            <div className = 'bannerTextText2Content'>
                                No 23/513/15, Kajas <br />
                                Stadium Bypass Road <br />
                                Palakkad - 678013
                            </div>
                            
                        </div>
                    </div>
                    <div className= 'bannerTextContentIndi'>
                        <img 
                            className='bannerTextIcon3'
                            src={SmartPhone} 
                            alt = 'loc' />
                        <div className = 'bannerTextText2'>
                            <div className = 'bannerTextText2Header'>
                                PHONE NUMBER
                            </div>
                            <div className = 'bannerTextText2Content'>
                                +91 1234567890
                            </div>
                            
                        </div>
                    </div>
                    <div className= 'bannerTextContentIndi'>
                        <img 
                            className='bannerTextIcon1'
                            src={Clock} 
                            alt = 'loc' />
                        <div className = 'bannerTextText2'>
                            <div className = 'bannerTextText2Header'>
                                TIMING
                            </div>
                            <div className = 'bannerTextText2Content'>
                                Opens at 11:00 AM 
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                <div className='bannerTextFooter'>
                    <div>
                        <input 
                            type="checkbox"
                            checked={true} />
                        Delivery
                    </div>
                    <div>
                        <input type="checkbox" checked={true}/>
                        Dine In
                    </div>
                    <div>
                        <input type="checkbox" checked={true}/>
                        Takeaway
                    </div>
                </div>
            </div>
            <div className='bannerImage'>
            <img 
                src = 'https://restaurants.kfc.co.in/files/outlet/outlet_facebook_images/outlet_cover_photo/34404/kfc_banner_jpg.jpg'
                alt = 'bannerImage'
                className="bannerImageImage"
            />
            </div>
        </div>
    )
}

export default Banner
