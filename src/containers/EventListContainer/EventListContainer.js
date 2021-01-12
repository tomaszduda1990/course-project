import React from 'react'
import Event from '../../components/Event/EventListItem'
import NavigationPanel from '../../components/Navigation/NavigationPanel'
import { getElementWidth } from '../utils/utils'
import classes from './EventListContainer.module.css'
import NoEvents from '../../components/NoEvents/NoEvents'
import CircularProgress from '@material-ui/core/CircularProgress'
import { connect } from 'react-redux'
import { get_data } from '../../store/actions/eventsActions'
class EventListContainer extends React.Component {
    state = {
        listPosition: 0,
        listItemWidth: 0,
        itemsInRow: 4,
        listMovement: 0,
    }

    nextItemHandler = () => {
        if (
            this.state.listPosition +
                (this.props.events.length - this.state.itemsInRow) >
            0
        ) {
            const position = this.state.listPosition - 1
            this.setState({
                listPosition: position,
                listMovement: position * this.state.listItemWidth,
            })
        }
    }
    prevItemHandler = () => {
        if (this.state.listPosition) {
            const position = this.state.listPosition + 1
            this.setState({
                listPosition: position,
                listMovement: position * this.state.listItemWidth,
            })
        }
    }

    updateSize = () => {
        if (window.innerWidth > 991 && this.props.events) {
            const element = document.querySelector(`.${classes.List} li`)
            const fullElementWidth = getElementWidth(element)
            this.setState({ listItemWidth: fullElementWidth })
        }
    }

    componentDidMount() {
        console.log(this.props.tk)
        this.props.getData(this.props.tk)
        this.updateSize()
        window.addEventListener('resize', () => {
            this.updateSize()
        })
    }
    componentDidUpdate(prevProps) {
        if (!prevProps.events.length && this.props.events.length) {
            this.updateSize()
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateSize)
    }

    render() {
        let events = <NoEvents />
        if (this.props.events) {
            events = (
                <div className={classes.Component}>
                    <div className={classes.ListContainer}>
                        <ul
                            className={classes.List}
                            style={{
                                transform: `translateX(${this.state.listMovement}px)`,
                            }}
                        >
                            {this.props.events.map((event) => (
                                <Event key={event.id} {...event} />
                            ))}
                        </ul>
                    </div>
                    <NavigationPanel
                        onNextClick={this.nextItemHandler}
                        onPrevClick={this.prevItemHandler}
                    />
                </div>
            )
        }
        return (
            <div>
                {this.props.loadingEvents ? <CircularProgress /> : events}
            </div>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        events: store.data.events,
        tk: store.auth.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: (token) => dispatch(get_data(token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EventListContainer)
