import React from 'react'
import './locationbar.css'

const locationBar = () => {
    return (
        <div className='locationBar'>
            <div class="locationBarOutArrow">Restaurants near me </div>
            <div class="locationBarInOutArrow">Kerala</div>
            <div class="locationBarInOutArrow">Palakkad</div>
            <div class="locationBarInArrow">Stadium Bypass Road</div>
        </div>
    )
}

export default locationBar
