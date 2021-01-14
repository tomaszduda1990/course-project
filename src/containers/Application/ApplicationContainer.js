import React from 'react'
import Layout from '../../components/Layout/Layout'
import FormContainer from '../FormContainer/FormContainer'
import EventListContainer from '../EventListContainer/EventListContainer'
import HeroImage from '../../components/HeroImage/HeroImage'
import Summary from '../../components/FormPage/Summary/Summary'
import NotFound from '../../components/NotFound/NotFound'
import Auth from '../Auth/Auth'
import Signin from '../Auth/SignIn'
import { authCheck } from '../../store/actions/auth'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

class App extends React.Component {
    componentDidMount() {
        this.props.authCheck()
    }
    render() {
        return (
            <div className="App">
                <Layout>
                    <Route path="/" exact component={HeroImage} />
                    <Switch>
                        <Route path="/new-event" component={FormContainer} />
                        <Route path="/sign-in" component={Signin} />
                        <Route path="/create-account" component={Auth} />
                        <Route path="/events/:id" exact component={Summary} />
                        <Route path="/" exact component={EventListContainer} />
                        <Route path="/" component={NotFound} />
                    </Switch>
                </Layout>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    authCheck: () => dispatch(authCheck()),
})
export default connect(null, mapDispatchToProps)(App)
