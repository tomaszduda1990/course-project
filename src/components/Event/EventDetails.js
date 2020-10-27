import React from 'react'
import classes from './EventDetails.module.css'
import Chips from './utils/Chips'

const eventDetails = (props) => {

    return (
        <div className={classes.EventDetailsTile}>
            <h1>{props.title}</h1>
            <div className={classes.ImgContainer}>
                <img src={props.imgUrl} alt={props.title + " image"} />
            </div>
            <div className={classes.Details}>
               <Chips element="Date" text="Date:" data={props.date} />
               <Chips element="Time" text="Time:" data={props.time} />
               <Chips element="Price" data={props.price} />
            </div>
            <div className={classes.Description}>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default eventDetails