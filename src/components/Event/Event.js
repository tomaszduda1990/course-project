import React from 'react'

import classes from './Event,module.css'

const event = (props) => {

    return (
        <div className="EventCard">
            <div className="ImgContainer">
                <a href="#">
                    <img src={props.imgUrl} alt={props.title + " event image"}/>
                </a>
            </div>
            <h2><a href="#" alt={props.title + " event title"}>{props.title}</a></h2>
            <p><strong>{props.price.toFixed(2)}$</strong></p>
        </div>
    )
}

export default event;