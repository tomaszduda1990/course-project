import React from 'react'

// import classes from './EventListItem.module.css'

const eventListItem = (props) => {

    return (
        <div className="EventCard">
            <div className="ImgContainer">
                <a href="#">
                    <img src={props.imgUrl} alt={props.title + " eventListItem image"}/>
                </a>
            </div>
            <h2><a href="#" alt={props.title + " eventListItem title"}>{props.title}</a></h2>
            <p><strong>{props.price.toFixed(2)}$</strong></p>
        </div>
    )
}

export default eventListItem;