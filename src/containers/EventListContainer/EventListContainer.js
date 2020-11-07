import React from 'react'
import Event from '../../components/Event/EventListItem'
import NavigationPanel from '../../components/Navigation/NavigationPanel'
import EventDetails from '../../components/Event/EventDetails'
import {getElementWidth} from '../utils/utils';
import classes from './EventListContainer.module.css'
import peopleImg from '../../assets/people.jpg'
import goatImg from '../../assets/goat.jpg'


const events = [
    {
        id: 123123,
        title: "Super Event",
        time: "11:00",
        date: "20.10.2020",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cupiditate dignissimos dolor, doloribus eius enim illum ipsum iusto laboriosam libero maxime, nulla porro quasi quia suscipit tempore voluptas, voluptatibus?",
        price: 29.99,
        imgUrl: goatImg
    },
    {
        id: 51231123,
        title: "Strajk",
        time: "19:30",
        date: "01.11.2020",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cupiditate dignissimos dolor, doloribus eius enim illum ipsum iusto laboriosam libero maxime",
        price: 35,
        imgUrl: peopleImg
    },
    {
        id: 123123,
        title: "Super Event",
        time: "11:00",
        date: "20.10.2020",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cupiditate dignissimos dolor, doloribus eius enim illum ipsum iusto laboriosam libero maxime, nulla porro quasi quia suscipit tempore voluptas, voluptatibus?",
        price: 29.99,
        imgUrl: goatImg
    },
    {
        id: 51231123,
        title: "Strajk",
        time: "19:30",
        date: "01.11.2020",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cupiditate dignissimos dolor, doloribus eius enim illum ipsum iusto laboriosam libero maxime",
        price: 35,
        imgUrl: peopleImg
    },
    {
        id: 123123,
        title: "Super Event",
        time: "11:00",
        date: "20.10.2020",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cupiditate dignissimos dolor, doloribus eius enim illum ipsum iusto laboriosam libero maxime, nulla porro quasi quia suscipit tempore voluptas, voluptatibus?",
        price: 29.99,
        imgUrl: goatImg
    },
    {
        id: 51231123,
        title: "Strajk",
        time: "19:30",
        date: "01.11.2020",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cupiditate dignissimos dolor, doloribus eius enim illum ipsum iusto laboriosam libero maxime",
        price: 35,
        imgUrl: peopleImg
    },
    {
        id: 123123,
        title: "Super Event",
        time: "11:00",
        date: "20.10.2020",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cupiditate dignissimos dolor, doloribus eius enim illum ipsum iusto laboriosam libero maxime, nulla porro quasi quia suscipit tempore voluptas, voluptatibus?",
        price: 29.99,
        imgUrl: goatImg
    },
    {
        id: 51231123,
        title: "Strajk",
        time: "19:30",
        date: "01.11.2020",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cupiditate dignissimos dolor, doloribus eius enim illum ipsum iusto laboriosam libero maxime",
        price: 35,
        imgUrl: peopleImg
    },
];

class EventListContainer extends React.Component {
    state = {
        listPosition: 0,
        listItemWidth: 0,
        itemsInRow: 4
    }

    nextItemHandler = () => {
        if(this.state.listPosition + (events.length - this.state.itemsInRow) > 0){
            this.setState({listPosition: this.state.listPosition - 1});
        }

    }
    prevItemHandler = () => {
        if(this.state.listPosition) {
            this.setState({listPosition: this.state.listPosition + 1});
        }
    }

    updateSize = () => {
        if(window.innerWidth > 991){
            const element = document.querySelector(`.${classes.List} li`);
            const fullElementWidth = getElementWidth(element);
            this.setState({listItemWidth: fullElementWidth})   
        }
    }

    componentDidMount(){
        this.updateSize();
        window.addEventListener('resize', () => {
            this.updateSize()
        });
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.updateSize);
    }

    render() {
        return (
            <div className={classes.Component}>
                <div className={classes.ListContainer}>
                    <ul className={classes.List} style={{transform: `translateX(${this.state.listPosition * this.state.listItemWidth}px)`}}>
                        {events.map(event => <Event key={event.id + Math.random()} {...event} />)}
                    </ul>
                </div>
                <NavigationPanel onNextClick={this.nextItemHandler} onPrevClick={this.prevItemHandler} />
            </div>
        )
    }
}

export default EventListContainer;