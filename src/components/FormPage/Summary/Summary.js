import React from 'react'
import { Chip } from '@material-ui/core'
import Buttons from './Buttons/Buttons'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import EventIcon from '@material-ui/icons/Event'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { get_data } from '../../../store/actions/eventsActions'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder'
import CircularProgress from '@material-ui/core/CircularProgress'

import classes from './Summary.module.css'

class Summary extends React.Component {
    state = {
        isFormSubmission: false,
    }
    componentDidMount() {
        this.props.load()
    }
    goBackHandler = () => {
        this.props.history.push('/')
    }

    render() {
        const { id } = this.props.match.params
        let isOldElement = false
        let element = this.props.events.find((el) => {
            if (el.id === id) {
                isOldElement = true
            }
            return el.id === id
        })
        if (!isOldElement) {
            element = { ...this.props }
        }
        return this.props.events.length ? (
            <div className={classes.Summary}>
                <div className={classes.ImgContainer}>
                    <img
                        src={element.image.webformatURL}
                        alt={element.image.tags}
                    />
                </div>
                <div className={classes.ChipsContainer}>
                    <Chip
                        icon={<AttachMoneyIcon />}
                        label={element.price}
                        variant="outlined"
                    />
                    <Chip
                        icon={<EventIcon />}
                        label={element.date}
                        variant="outlined"
                    />
                    <Chip
                        icon={<QueryBuilderIcon />}
                        label={element.time}
                        variant="outlined"
                    />
                </div>
                <h2 className={classes.EventTitle}>{element.name}</h2>
                <p className={classes.EventDescription}>
                    {element.description}
                </p>
                {
                    <Buttons
                        classes={classes}
                        prevPage={this.props.prevPage}
                        onSubmit={this.props.onSubmit}
                        loading={this.props.loading}
                        goBack={this.goBackHandler}
                        isOld={isOldElement}
                    />
                }
            </div>
        ) : (
            <div style={{ textAlign: 'center' }}>
                <CircularProgress />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    events: state.events,
})

const mapDispatchToProps = (dispatch) => ({
    load: () => dispatch(get_data()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Summary))
