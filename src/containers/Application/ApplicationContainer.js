import React from 'react'
import Layout from '../../components/Layout/Layout'
import FormContainer from '../FormContainer/FormContainer'
import EventListContainer from '../EventListContainer/EventListContainer'
import HeroImage from '../../components/HeroImage/HeroImage'
import { instanceFirebase } from '../../axios/axios'
import { Route, Switch } from 'react-router-dom'
import { TimerSharp } from '@material-ui/icons'

class App extends React.Component {
    state = {
        events: [],
    }
    onFormSubmit = (evtArray, resetFormHandler) => {
        evtArray.id = new Date().getTime() + Math.random()
        this.setState({
            events: this.state.events.concat(evtArray),
        })
        localStorage.setItem('events', JSON.stringify(this.state.events))
        instanceFirebase
            .post('/events.json', evtArray)
            .then((res) => {
                resetFormHandler()
            })
            .catch((err) => console.error('Oh my god, error! ', err))
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
            })
            .catch((err) => console.log(err))
    }

    render() {
        return (
            <div className="App">
                <Layout>
                    <HeroImage />
                    <Switch>
                        <Route
                            path="/new-event"
                            render={() => (
                                <FormContainer
                                    formSubmission={this.onFormSubmit}
                                />
                            )}
                        />
                        <Route path="/" component={EventListContainer} />
                    </Switch>
                </Layout>
            </div>
        )
    }
}

export default App
