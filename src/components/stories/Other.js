import React from 'react'
import './stories.css'
import Location from '../media/location.png'

const Other = () => {
    return (
        <div>
            <div className = 'ratingTitle'>
                <img src = {Location} className = 'ratingStar' alt = 'Location' />
                OTHER RESTAURANTS OF KFC
            </div>
            <div>
                <div className='reviewText2'>
                    Restaurants in <span style={{color : '#e53d2b'}}><u>Kerala</u></span>
                </div>
                <div className='reviewText2'>
                    Restaurants in <span style={{color : '#e53d2b'}}><u>Palakkad</u></span>
                </div>
            </div>
            
        </div>
    )
}

export default Other
