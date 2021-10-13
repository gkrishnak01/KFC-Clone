import React from 'react'
import './menu.css'
import Item from './Item'

const FoodItems = (props) => {

    const items = props.items?.map( each => <Item item = {each} />)

    

    return (
        <div className = 'foodItems'>
            {items}
        </div>
    )
}

export default FoodItems
