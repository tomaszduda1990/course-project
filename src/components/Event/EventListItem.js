import React from 'react'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import EventIcon from '@material-ui/icons/Event'
import CircularProgress from '@material-ui/core/CircularProgress'
import classes from './EventListItem.module.css'
import axios from 'axios'

class EventListItem extends React.Component {
    state = {
        loadImg: false,
    }

    onImgError = (e) => {
        e.target.setAttribute('src', 'https://dummyimage.com/200x250/')
    }

    onImgLoad = () => {
        this.setState({ loadImg: true })
    }

    render() {
        return (
            <li
                className={classes.EventCard}
                style={{ opacity: this.state.loadImg ? '1' : '0' }}
            >
                <div className={classes.ImgContainer}>
                    <img
                        src={this.props.image.webformatURL}
                        onError={this.onImgError}
                        onLoad={this.onImgLoad}
                        alt="event image"
                    />
                    <a href="#"></a>
                    <p className={classes.EvtDescContainer}>
                        <span className={classes.EvtDesc}>
                            <EventIcon /> {this.props.date}
                        </span>
                        <span className={classes.EvtDesc}>
                            <AttachMoneyIcon />{' '}
                            <strong>
                                {parseFloat(this.props.price).toFixed(2)}
                            </strong>
                        </span>
                    </p>
                </div>
                <h2>
                    <a href="#" alt={this.props.name + ' eventListItem title'}>
                        {this.props.name} {this.state.loadImg}
                    </a>
                </h2>
                {!this.state.loadImg ? <CircularProgress /> : null}
            </li>
        )
    }
}

export default EventListItem
