import React from 'react'
import Event from '../../components/Event/Event'

const events = [
    {
        id: 123123,
        title: "Super Event",
        time: "11:00",
        date: "20.10.2020",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cupiditate dignissimos dolor, doloribus eius enim illum ipsum iusto laboriosam libero maxime, nulla porro quasi quia suscipit tempore voluptas, voluptatibus?",
        price: 29.99,
        imgUrl: "https://pixabay.com/get/52e8dc424e5ba514f1dc8460da29317e1637dee1505476_640.jpg"
    },
    {
        id: 51231123,
        title: "Strajk",
        time: "19:30",
        date: "01.11.2020",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cupiditate dignissimos dolor, doloribus eius enim illum ipsum iusto laboriosam libero maxime",
        price: 35,
        imgUrl: "https://pixabay.com/get/53e6d24a435aae14f1dc8460da29317e1637dee1565271_640.jpg"
    }
];

class EventListContainer extends React.Component {
    render(){
        return (
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        <Event {...event} />
                    </li>))}
            </ul>
        )
    }
}

export default EventListContainer;