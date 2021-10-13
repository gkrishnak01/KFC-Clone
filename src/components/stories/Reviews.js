import React from 'react'
import './stories.css'
import review from '../media/review.png'
import star from '../media/star.png'
import starFilled from '../media/star_filled.png'

const Reviews = () => {
    return (
        <div className = 'aboutRating'>
            <div className = 'ratingTitle'>
                <img src = {review} className = 'ratingStar' alt = 'Review'/>
                REVIEWS
            </div>
            <span>
                <div className = 'reviewText'>
                    Ayyappa Haridas
                </div>
                <div className = 'reviewText2'>
                    Posted on : 01-10-2020
                </div>
                
                <div className='ratingRating'>
                    <span className = 'reviewText3'>Rated</span>
                    <img src = {starFilled} className = 'ratingStar' alt = 'Star'/>
                    <img src = {starFilled} className = 'ratingStar' alt = 'Star'/>
                    <img src = {starFilled} className = 'ratingStar' alt = 'Star'/>
                    <img src = {starFilled} className = 'ratingStar' alt = 'Star'/>
                    <img src = {starFilled} className = 'ratingStar' alt = 'Star'/>
                    <span className = 'ratingNo'>5</span>

                </div>
                <div className = 'reviewText2'>
                    Nice
                </div>
            </span>
            <span>
                <div className = 'reviewText'>
                    Anshif mohamed
                </div>
                <div className = 'reviewText2'>
                    Posted on: 26-09-2021
                </div>
                
                <div className='ratingRating'>
                    <span className = 'reviewText3'>Rated</span>
                    <img src = {starFilled} className = 'ratingStar' alt = 'Star' />
                    <img src = {starFilled} className = 'ratingStar' alt = 'Star'/>
                    <img src = {starFilled} className = 'ratingStar' alt = 'Star'/>
                    <img src = {starFilled} className = 'ratingStar' alt = 'Star'/>
                    <img src = {star} className = 'ratingStar' alt = 'Star'/>
                    <span className = 'ratingNo'>4</span>

                </div>
                <div className = 'reviewText2'>
                    The place was clean... I did a take away order.. It was 9 piece bucket fries and large pop corn both were good and tasty, I visited quiet few times.. Good staff. Good ambience , The place is clean . Didn't have much delay to get to the destination from palakkad town. All covid protocols followed. there was hand sanitization at the entrance of the shop and there is a wheel chair accessible entrance and ambient parking space
                </div>
            </span>
            <div className = 'submitReviewButton'>
                Submit A Review
            </div>
            
        </div>
    )
}

export default Reviews
