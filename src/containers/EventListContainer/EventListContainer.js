import React from 'react'
import Event from '../../components/Event/EventListItem'
import NavigationPanel from '../../components/Navigation/NavigationPanel'
import { getElementWidth } from '../utils/utils'
import classes from './EventListContainer.module.css'
import NoEvents from '../../components/NoEvents/NoEvents'
import { instanceFirebase } from '../../axios/axios'
class EventListContainer extends React.Component {
    state = {
        listPosition: 0,
        listItemWidth: 0,
        itemsInRow: 4,
        listMovement: 0,
        events: null,
    }

    nextItemHandler = () => {
        if (
            this.state.listPosition +
                (this.state.events.length - this.state.itemsInRow) >
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
        if (window.innerWidth > 991 && this.state.events) {
            const element = document.querySelector(`.${classes.List} li`)
            const fullElementWidth = getElementWidth(element)
            this.setState({ listItemWidth: fullElementWidth })
        }
    }

    getEventsFromServer = () => {
        instanceFirebase
            .get('/events.json')
            .then((res) => {
                const data = []
                for (let key in res.data) {
                    data.push(res.data[key])
                }
                this.setState({ events: data })
                this.updateSize()
            })
            .catch((err) => console.log(err))
    }

    componentDidMount() {
        console.log('component remounted')
        this.getEventsFromServer()
        window.addEventListener('resize', () => {
            this.updateSize()
        })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateSize)
    }

    render() {
        let events = <NoEvents />
        if (this.state.events) {
            events = (
                <div className={classes.Component}>
                    <div className={classes.ListContainer}>
                        <ul
                            className={classes.List}
                            style={{
                                transform: `translateX(${this.state.listMovement}px)`,
                            }}
                        >
                            {this.state.events.map((event) => (
                                <Event
                                    key={event.id + Math.random()}
                                    {...event}
                                />
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
        return events
    }
}

export default EventListContainer
