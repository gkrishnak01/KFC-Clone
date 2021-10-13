import React from 'react'
import './navbar.css'

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='navbarContainer'>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <div className='navbarContainerTabsSelected'>
                    HOME
                </div>
                <div className='navbarContainerTabs'>
                    MAP
                </div>
                <div className='navbarContainerTabs'>
                    BIRTHDAY PARTY
                </div>
                <div className='navbarContainerTabs'>
                    CORPORATE EVENT
                </div>
                </div>
                <div className='navbarButton'>
                START MY ORDER
                </div>
            </div>
            
        </div>
    )
}

export default NavBar
