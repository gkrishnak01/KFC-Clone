import React from 'react'
import KfcTag from './KfcTag'
import './stories.css'
import priceTag from '../media/price-tag.png'

const KfcTags = () => {

    const foodtags = ['Non Veg Restaurants Near Stadium Bypass Road', 'Crispy chicken', 'Fried Chicken', 'Order Food Online', 'Chicken Burger', 'Fried Chicken Wings','Chicken Wings', 'Chicken Home Delivery', 'Online Chicken Delivery', 'KFC Near Me', 'KFC Chicken', 'KFC Menu', 'KFC Online Order', 'Kentucky Fried Chicken', 'KFC Offers', 'Nearest KFC', 'KFC Store', 'KFC Contact Number', 'KFC Customer Care Number', 'Order Fast Food', 'Order Online Offers', 'Best Chicken Restaurants', 'Top Non Veg Restaurants', 'KFC Restaurant Number']

    const tags = foodtags.map(each => <KfcTag each = {each} />)
    return (
        <div className = 'aboutRating'>
            <div className = 'ratingTitle'>
                <img src = {priceTag} className = 'ratingStar' alt = 'Tag' />
                TAGS
            </div>
            <div className = 'tagClass'>
                {tags}
            </div>
        </div>
    )
}

export default KfcTags
