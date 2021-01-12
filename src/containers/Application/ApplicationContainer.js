import React from 'react'
import Layout from '../../components/Layout/Layout'
import FormContainer from '../FormContainer/FormContainer'
import EventListContainer from '../EventListContainer/EventListContainer'
import HeroImage from '../../components/HeroImage/HeroImage'
import Summary from '../../components/FormPage/Summary/Summary'
import NotFound from '../../components/NotFound/NotFound'
import Auth from '../Auth/Auth'
import Signin from '../Auth/SignIn'
import { Route, Switch } from 'react-router-dom'

const App = () => (
    <div className="App">
        <Layout>
            <Route path="/" exact component={HeroImage} />
            <Switch>
                <Route path="/new-event" component={FormContainer} />
                <Route path="/sign-in" component={Signin} />
                <Route path="/auth" component={Auth} />
                <Route path="/events/:id" exact component={Summary} />
                <Route path="/" exact component={EventListContainer} />
                <Route path="/" component={NotFound} />
            </Switch>
        </Layout>
    </div>
)
export default App
