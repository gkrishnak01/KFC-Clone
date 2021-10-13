import React from 'react'
import './stories.css'

const TimelineCard = (props) => {
    return (
        <div className = 'timelineCard'>
            <img src = {props.each.image} alt ='Timeline'/>
            <div style = {{marginTop : '3%'}}>
                {props.each.desc}
            </div>
            <div style = {{color :'#3498db'}}>
                {props.each?.hashtags}
            </div>
            <div style = {{marginTop : '3%'}}>
                {props.each.postedOn}
            </div>
        </div>
    )
}

export default TimelineCard
