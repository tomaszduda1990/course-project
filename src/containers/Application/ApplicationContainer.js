import React from 'react'
import Layout from '../../components/Layout/Layout'
import FormContainer from '../FormContainer/FormContainer'
import EventListContainer from '../EventListContainer/EventListContainer'
import HeroImage from '../../components/HeroImage/HeroImage'
import NoEvents from '../../components/NoEvents/NoEvents'
import { instanceFirebase } from '../../axios/axios'

class App extends React.Component {
    state = {
        events: [],
    }
    onFormSubmit = (evtArray, resetFormHandler) => {
        evtArray.id = new Date().getTime() + Math.random()

        this.setState((prevState) => {
            const copiedEvents = [...prevState.events]
            copiedEvents.push(evtArray)
            localStorage.setItem('events', JSON.stringify(copiedEvents))
            return {
                events: [...copiedEvents],
            }
        })
        instanceFirebase
            .post('/events.json', evtArray)
            .then((res) => console.log(res))
            .catch((err) => console.error('Oh my god, error! ', err))
        setTimeout(resetFormHandler, 500)
    }

    componentDidMount() {
        const evtArray = JSON.parse(localStorage.getItem('events'))
        this.setState({ events: evtArray })
    }
    render() {
        return (
            <div className="App">
                <Layout>
                    <HeroImage />
                    {this.state.events.length ? (
                        <EventListContainer events={this.state.events} />
                    ) : (
                        <NoEvents />
                    )}
                    <FormContainer formSubmission={this.onFormSubmit} />
                </Layout>
            </div>
        )
    }
}

export default App
