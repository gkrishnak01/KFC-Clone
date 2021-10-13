import React, { useEffect, useState } from 'react'
import foodItem from '../data/fooditems'
import './menu.css'
import Categories from './Categories'
import FoodItems from './FoodItems'

const MenuList = () => {

    const [category, setCategory] = useState('chicken')
    const [items, setItems] = useState()

    useEffect(() => {
        if(category === 'chicken')
            setItems(foodItem.chicken)
        else if(category === 'sunday')
            setItems(foodItem.specials)
        else if(category === 'burgers')
            setItems(foodItem.burgers)
        else if(category === 'rice')
            setItems(foodItem.rice)
        else if(category === 'box')
            setItems(foodItem.box)
        else if(category === 'snacks')
            setItems(foodItem.snacks)
        else if(category === 'beverages')
            setItems(foodItem.beverages)
        
    }, [category])

    const handleCategory = (categ) => {
        setCategory(categ)
    }

    return (
        <div className = 'menuList'>
            <Categories handleCategory = {handleCategory} category = {category} />
            <FoodItems items = {items} />
        </div>
    )
}

export default MenuList
