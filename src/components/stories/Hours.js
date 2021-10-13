import React from 'react'
import './stories.css'
import Clock from '../media/clock.png'
const Hours = () => {
    return (
        <div className = 'aboutRating'>
            <div className = 'ratingTitle'>
                <img src = {Clock} className = 'ratingStar' alt = 'Clock'/>
                BUSSINESS HOURS
            </div>
            <table style = {{marginTop : '5%',marginBottom:'5%'}}>
                <tr>
                    <td className = 'reviewText2'> Mon </td>
                    <td className = 'reviewText2'> : </td>
                    <td className = 'reviewText2'> 11:00 AM - 11:00 PM </td>
                </tr>
                <tr>
                    <td className = 'reviewText2'> Tue </td>
                    <td className = 'reviewText2'> : </td>
                    <td className = 'reviewText2'> 11:00 AM - 11:00 PM </td>
                </tr>
                <tr>
                    <td className = 'reviewText2'> Wed </td>
                    <td className = 'reviewText2'> : </td>
                    <td className = 'reviewText2'> 11:00 AM - 11:00 PM </td>
                </tr>
                <tr>
                    <td className = 'reviewText2'> Thu </td>
                    <td className = 'reviewText2'> : </td>
                    <td className = 'reviewText2'> 11:00 AM - 11:00 PM </td>
                </tr>
                <tr>
                    <td className = 'reviewText2'> Fri </td>
                    <td className = 'reviewText2'> : </td>
                    <td className = 'reviewText2'> 11:00 AM - 11:00 PM </td>
                </tr>
                <tr>
                    <td className = 'reviewText2'> Sat </td>
                    <td className = 'reviewText2'> : </td>
                    <td className = 'reviewText2'> 11:00 AM - 11:00 PM </td>
                </tr>
                <tr>
                    <td className = 'reviewText2'> Sun </td>
                    <td className = 'reviewText2'> : </td>
                    <td className = 'reviewText2'> 11:00 AM - 11:00 PM </td>
                </tr>
                
            </table>
        </div>
    )
}

export default Hours
