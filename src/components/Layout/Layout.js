import React from 'react'
import Toolbar from '../Toolbar/Toolbar'
import classes from './Layout.module.css'

const layout = (props) => {
    return (
        <>
            <Toolbar />
            <main>{props.children}</main>
        </>
    )
}

export default layout
