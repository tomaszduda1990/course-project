import React from 'react'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EventIcon from '@material-ui/icons/Event';
import classes from './EventListItem.module.css'

const eventListItem = (props) => {

    return (
        <li className="EventCard">
            <div className={classes.ImgContainer} style={{backgroundImage: `url(${props.imgUrl})`}}>
                <a href="#"></a>
                <p className={classes.EvtDescContainer}>
                    <span className={classes.EvtDesc}><EventIcon  /> {props.date}</span>
                    <span className={classes.EvtDesc}><AttachMoneyIcon /> <strong>{props.price.toFixed(2)}</strong></span>
                </p>
            </div>
            <h2><a href="#" alt={props.title + " eventListItem title"}>{props.title}</a></h2>
        </li>
    )
}

export default eventListItem;