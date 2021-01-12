import React from 'react'
import './App.css'
import ApplicationContainer from './containers/Application/ApplicationContainer'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import events from './store/reducers/eventsReducers'
import auth from './store/reducers/authReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const reducers = combineReducers({
    auth,
    data: events,
})
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <ApplicationContainer />
        </BrowserRouter>
    </Provider>
)
export default App
