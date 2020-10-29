import React from 'react'

import classes from './EventListItem.module.css'

const eventListItem = (props) => {

    return (
        <li className="EventCard">
            <div className={classes.ImgContainer} style={{backgroundImage: `url(${props.imgUrl})`}}>
                <a href="#"></a>
            </div>
            <h2><a href="#" alt={props.title + " eventListItem title"}>{props.title}</a></h2>
            <p><strong>{props.price.toFixed(2)}$</strong></p>
        </li>
    )
}

export default eventListItem;