import React from 'react'
import './App.css'
import ApplicationContainer from './containers/Application/ApplicationContainer'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './store/reducers/eventsReducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <ApplicationContainer />
        </BrowserRouter>
    </Provider>
)
export default App
