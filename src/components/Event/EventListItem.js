import React from 'react'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import EventIcon from '@material-ui/icons/Event'
import classes from './EventListItem.module.css'

class EventListItem extends React.Component {
    render() {
        return (
            <li className={classes.EventCard}>
                <div
                    className={classes.ImgContainer}
                    style={{ backgroundImage: `url(${this.props.imgUrl})` }}
                >
                    <a href="#"></a>
                    <p className={classes.EvtDescContainer}>
                        <span className={classes.EvtDesc}>
                            <EventIcon /> {this.props.date}
                        </span>
                        <span className={classes.EvtDesc}>
                            <AttachMoneyIcon />{' '}
                            <strong>{this.props.price.toFixed(2)}</strong>
                        </span>
                    </p>
                </div>
                <h2>
                    <a href="#" alt={this.props.title + ' eventListItem title'}>
                        {this.props.title}
                    </a>
                </h2>
            </li>
        )
    }
}

export default EventListItem
