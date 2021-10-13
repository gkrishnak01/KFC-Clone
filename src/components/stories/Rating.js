import React from 'react'
import './stories.css'
import star from '../media/star.png'
import starFilled from '../media/star_filled.png'


const Rating = () => {
    return (
        <div className = 'aboutRating'>
            <div className = 'ratingTitle'>
                <img src = {star} className = 'ratingStar' alt = 'Star'/>
                RATING
            </div>
            <div className='ratingRating'>
                <img src = {starFilled} className = 'ratingStar' alt = 'Star' />
                <img src = {starFilled} className = 'ratingStar' alt = 'Star'/>
                <img src = {starFilled} className = 'ratingStar' alt = 'Star'/>
                <img src = {starFilled} className = 'ratingStar' alt = 'Star'/>
                <img src = {star} className = 'ratingStar' alt = 'Star'/>
                <span className = 'ratingNo'>4.2</span>
            </div>
        </div>
    )
}

export default Rating
