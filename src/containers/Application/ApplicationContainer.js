import React from 'react'
import Layout from '../../components/Layout/Layout'
import FormContainer from '../FormContainer/FormContainer'
import EventListContainer from '../EventListContainer/EventListContainer'
import HeroImage from '../../components/HeroImage/HeroImage'
import { Route, Switch } from 'react-router-dom'

const App = () => (
    <div className="App">
        <Layout>
            <Route path="/" exact component={HeroImage} />
            <Switch>
                <Route path="/new-event" component={FormContainer} />
                <Route path="/" component={EventListContainer} />
            </Switch>
        </Layout>
    </div>
)
export default App
