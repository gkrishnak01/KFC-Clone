import React from 'react'
import Car from '../media/car.png'
const Parking = () => {
    return (
        <div className = 'aboutRating'>
            <div className = 'ratingTitle'>
                <img src = {Car} className = 'ratingStar' alt = 'Car' />
                Parking
            </div>
            <div className='ratingRating'>
                <span className = 'reviewText2'>Street Parking</span>
            </div>
        </div>
    )
}

export default Parking
