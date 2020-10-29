import React from 'react'
import Event from '../../components/Event/EventListItem'
import EventDetails from '../../components/Event/EventDetails'
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
    render(){
        return (
            <div>
                <ul className={classes.List}>
                    {events.map(event => <Event key={event.id + Math.random()} {...event} />)}
                </ul>
                <EventDetails {...events[0]} />
            </div>

        )
    }
}

export default EventListContainer;