import React from 'react'
import './menu.css'
import Chicken from '../media/Chicken.png'
import Sunday from '../media/Sunday.png'
import Burgers from '../media/Burgers.png'
import Rice from '../media/Rice.png'
import Box from '../media/Box.png'
import Snacks from '../media/Snacks.png'
import Beverages from '../media/Beverages.png'

const Categories = (props) => {
    return (
        <div className = 'categories'>
            <div 
                className = {props.category === 'chicken' ? 'categorySelected' : 'category'} 
                onClick = { () => props.handleCategory('chicken')} >
                <span className = 'categoryIcon'  >
                    <img src = {Chicken}
                    alt = 'Icon'
                    />
                </span>
                <span>Chicken</span>
                
            </div>
            <div 
                className = {props.category === 'sunday' ? 'categorySelected' : 'category'} 
                onClick = { () => props.handleCategory('sunday')} >
                <span className = 'categoryIcon' >
                    <img src = {Sunday}
                    alt = 'Icon'

                     />
                </span>
                <span>Sunday Specials</span>
            </div>
            <div 
                className = {props.category === 'burgers' ? 'categorySelected' : 'category'} 
                onClick = { () => props.handleCategory('burgers')}>
                <span className = 'categoryIcon' >
                    <img src = {Burgers}
                    alt = 'Icon'
                     />
                </span>
                <span>Burgers</span>
            </div>
            <div 
                className = {props.category === 'rice' ? 'categorySelected' : 'category'} 
                onClick = { () => props.handleCategory('rice')} >
                <span className = 'categoryIcon' >
                    <img src = {Rice}
                    alt = 'Icon'
                     />
                </span>
                <span>Rice Bowlz</span>
            </div>
            <div 
                className = {props.category === 'box' ? 'categorySelected' : 'category'} 
                onClick = { () => props.handleCategory('box')}>
                <span className = 'categoryIcon' >
                    <img src = {Box}
                    alt = 'Icon'
                     />
                </span>
                <span>Box-Meals</span>
            </div>
            <div 
                className = {props.category === 'snacks' ? 'categorySelected' : 'category'}
                onClick = { () => props.handleCategory('snacks')} >
                <span className = 'categoryIcon' >
                    <img src = {Snacks}
                    alt = 'Icon'
                     />
                </span>
                <span>Snacks</span>
            </div>
            <div 
                className = {props.category === 'beverages' ? 'categorySelected' : 'category'} 
                onClick = { () => props.handleCategory('beverages')}>
                <span className = 'categoryIcon' >
                    <img src = {Beverages}
                    alt = 'Icon'
                     />
                </span>
                <span>Beverages</span>
            </div>   
        </div>
    )
}

export default Categories
