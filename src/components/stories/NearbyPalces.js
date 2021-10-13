import React from 'react'
import Location from '../media/location.png'
import KfcTag from './KfcTag'

const NearbyPalces = () => {

    const places = ['15/517, Stadium Bypass Road', 'Stadium Bypass Road','Coimbatore Road', 'Robinson Road', 'G B Road', 'Dayara Street', 'S Fort Road', 'NH-966' ]

    const tags = places.map( each =>  <KfcTag each = {each} />)
    return (
        <div className = 'aboutRating'>
            <div className = 'ratingTitle'>
                <img src = {Location} className = 'ratingStar' alt = 'Location' />
                NEARBY LOCALITY
            </div>
            <div className = 'tagClass'>
                {tags}
            </div>
        </div>
    )
}

export default NearbyPalces
