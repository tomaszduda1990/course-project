import React from 'react'
import Layout from '../../components/Layout/Layout'
import FormContainer from '../FormContainer/FormContainer'
import EventListContainer from '../EventListContainer/EventListContainer'
import HeroImage from '../../components/HeroImage/HeroImage'
import NoEvents from '../../components/NoEvents/NoEvents'

class App extends React.Component {
    state = {
        events: [],
    }
    onFormSubmit = (evtArray) => {
        console.log([...this.state.events])
        evtArray.id = new Date().getTime() + Math.random()
        
      
        this.setState((prevState) => {
            const copiedEvents = [...prevState.events]
              copiedEvents.push(evtArray)
            return {
                events: [...copiedEvents],
            }
        })
        console.log(this.state)
    }
    render() {
        return (
            <div className="App">
                <Layout>
                    <HeroImage />
                    {this.state.events.length ? <EventListContainer events={this.state.events} /> : <NoEvents />}
                    <FormContainer formSubmission={this.onFormSubmit} />
                </Layout>
            </div>
        )
    }
}

export default App
