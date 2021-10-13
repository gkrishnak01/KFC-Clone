import React from 'react'
import Plus from '../media/plus.png'

const PlusCode = () => {
    return (
        <div className = 'aboutRating'>
            <div className = 'ratingTitle'>
                <img src = {Plus} className = 'ratingStar' alt = 'Plus' />
                PLUS CODE OF KFC
            </div>
            <div className='ratingRating'>
                <span className = 'reviewText2' style = {{color :'#0645AD'}}>7J2RQM96+QJ</span>
            </div>
        </div>
    )
}

export default PlusCode
