import React, { useState } from 'react'
import './menu.css'

const Item = (props) => {

    const [isClicked, setisClicked] = useState(false)

    const handleClicked = (curState) => {
        setisClicked(!curState)
    }
    return (
        <div className = 'item'>
            <div className = 'itemTop'>
                <img 
                    src = {props.item.image}
                    alt = 'Item'
                    style = { isClicked ? {opacity : '0.20'} : {opacity : '1'}}
                    className = 'itemImage' />
                <span style = {!props.item.desc  ? {display :'none'} : null}>
                    <div 
                        className = 'itemDrop' 
                        style = { isClicked ? {transform: 'rotate(0deg)'} : {transform: 'rotate(180deg)'}}
                        onClick = {() => handleClicked(isClicked)}>
                            ^
                    </div>
                
                <div class="imageOverlay" style = { isClicked ? {opacity : '1'} : {opacity : '0'}} >
                    <div class="text">{props.item.desc}</div>
                </div>
                </span>
                      
            </div>
            
            <div className = 'itemTitle'>{props.item.name}</div>
            <div className = 'itemPrice'>{props.item.price}</div>
            <div className = 'itemOrder'>Order Now</div>
        </div>
    )
}

export default Item
