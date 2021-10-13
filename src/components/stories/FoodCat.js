import React from 'react'
import KfcTag from './KfcTag'
import './stories.css'
import HamburgerMenu from '../media/hamburger.png'

const FoodCat = () => {

    const categories = ['Restaurant','Chicken Restaurant', 'Fried Chicken Takeaway', 'Non-Veg Restaurant', 'Fast Food Restaurant']

    const tags = categories.map(each => <KfcTag each = {each} />)
    return (
        <div>
            <div className = 'aboutRating'>
                <div className = 'ratingTitle'>
                    <img src = {HamburgerMenu} className = 'ratingStar' alt = 'Ham'/>
                    CATEGORIES
                </div>
                <div className = 'tagClass'>
                    {tags}
                </div>
            </div>
        </div>
    )
}

export default FoodCat
