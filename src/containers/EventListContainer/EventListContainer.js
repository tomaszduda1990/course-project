import React from 'react'
import Event from '../../components/Event/EventListItem'
import NavigationPanel from '../../components/Navigation/NavigationPanel'
import { getElementWidth } from '../utils/utils'
import classes from './EventListContainer.module.css'

class EventListContainer extends React.Component {
    state = {
        listPosition: 0,
        listItemWidth: 0,
        itemsInRow: 4,
        events: [...this.props.events],
    }

    nextItemHandler = () => {
        if (
            this.state.listPosition +
                (this.state.events.length - this.state.itemsInRow) >
            0
        ) {
            const position = this.state.listPosition - 1
            this.setState({ listPosition: position})
        }
    }
    prevItemHandler = () => {
        if (this.state.listPosition) {
            const position = this.state.listPosition + 1
            this.setState({ listPosition: position })
        }
    }

    updateSize = () => {
        if (window.innerWidth > 991) {
            const element = document.querySelector(`.${classes.List} li`)
            const fullElementWidth = getElementWidth(element)
            this.setState({ listItemWidth: fullElementWidth })
        }
    }

    componentDidMount() {
        this.updateSize()
        window.addEventListener('resize', () => {
            this.updateSize()
        })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateSize)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.events.length !== this.props.events.length) {
            this.setState({
                events: [...this.props.events],
            })
        }
    }

    render() {
        return (
            <div className={classes.Component}>
                <div className={classes.ListContainer}>
                    <ul
                        className={classes.List}
                        style={{
                            transform: `translateX(${
                                this.state.listPosition *
                                this.state.listItemWidth
                            }px)`,
                        }}
                    >
                        {this.state.events.map((event) => (
                            <Event key={event.id + Math.random()} {...event} />
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
}

export default EventListContainer
