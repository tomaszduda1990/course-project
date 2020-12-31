import React from 'react'
import './App.css'
import ApplicationContainer from './containers/Application/ApplicationContainer'
import { BrowserRouter } from 'react-router-dom'

const App = () => (
    <BrowserRouter>
        <ApplicationContainer />
    </BrowserRouter>
)
export default App
