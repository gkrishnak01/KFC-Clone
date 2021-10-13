import React from 'react'
import './topbar.css'
import findKfc from '../media/findKfc.png'

const TopBar = () => {
    return (
        <div className="topbar">
            
                <img 
                    src='https://cdn4.singleinterface.com/files/outlet/logo/34404/microsite_logo_png.png' 
                    alt='logo' 
                    className='topbarLogo'/>
            
                <img 
                    src={findKfc}
                    alt = 'Find KFC'
                    className='topbarLogo'
                />
        
        </div>
    )
}

export default TopBar
