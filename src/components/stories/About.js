import React from 'react'
import './stories.css'
import Rating from './Rating'
import Reviews from './Reviews'
import Discover from './Discover'
import Hours from './Hours'
import Other from './Other'
import PlusCode from './PlusCode'
import Payment from './Payment'
import Parking from './Parking'
import NearbyPalces from './NearbyPalces'
import FoodCat from './FoodCat'
import KfcTags from './KfcTags'

const About = () => {
    return (
        <div className = 'storiesAbout'>
            <div className = 'aboutTitle'>
                ABOUT KFC
            </div>
            <div className = 'aboutText'>
                KFC, a subsidiary of Yum! Brands, Inc. (NYSE: YUM.), is a global quick service restaurant brand with a rich, decades-long history of success and innovation. It all started with one cook, Colonel Harland Sanders, who created a finger lickin' good recipe more than 75 years ago, a list of secret herbs and spices scratched out on the back of the door to his kitchen. Today we still follow his formula for success, with real cooks breading and freshly preparing our delicious chicken by hand in more than 25,000 restaurants in over 145 countries and territories around the world. The address of this restaurant is No 23/513/15, Kajas, Stadium Bypass Road, Palakkad, Kerala - 678013.
            </div>
            <Rating />
            <Reviews />
            <Discover />
            <Hours />
            <Other />
            <PlusCode />
            <Payment />
            <Parking />
            <NearbyPalces />
            <FoodCat />
            <KfcTags />
        </div>
    )
}

export default About
