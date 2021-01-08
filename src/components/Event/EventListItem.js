import React from 'react'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import EventIcon from '@material-ui/icons/Event'
import CircularProgress from '@material-ui/core/CircularProgress'
import classes from './EventListItem.module.css'
import axios from 'axios'

class EventListItem extends React.Component {
    state = {
        loadImg: false,
        imgUrl: 'https://dummyimage.com/200x250/',
    }
    componentDidMount() {
        axios(this.props.image.webformatURL)
            .then((res) => {
                if (res.status === 200) {
                    this.setState({
                        loadImg: true,
                        imgUrl: this.props.image.webformatURL,
                    })
                }
            })
            .catch((err) => {
                this.setState({ loadImg: true })
            })
    }

    render() {
        return (
            <li className={classes.EventCard}>
                <div className={classes.ImgContainer}>
                    {this.state.loadImg ? (
                        <img src={this.state.imgUrl} alt="event image" />
                    ) : (
                        <CircularProgress />
                    )}
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
                        {this.props.name}
                    </a>
                </h2>
            </li>
        )
    }
}

export default EventListItem
