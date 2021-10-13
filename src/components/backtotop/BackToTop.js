import React, {useState } from 'react'
import Triangle from '../media/plain-triangle.png'
import './backtotop.css'


const BackToTop = () => {

    const [show, setShow] = useState()

    const setScroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setShow(true)
        }
        else 
            setShow(false)
        }

    window.addEventListener('scroll',setScroll)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
          });
    }

    return (
        <div className = 'backtotop'>
            {show ? <img src = {Triangle} onClick = {() => scrollToTop()}  alt = 'To Top'/> : null }
        </div>
    )
}

export default BackToTop
