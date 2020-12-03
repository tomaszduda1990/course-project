import React from 'react'
import classes from './NoEvents.module.css'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
export const NoEvents = () => {
    return (
        <div className={classes.Container}>
            <p className={classes.Text}>No upcoming events</p>
            <ErrorOutlineIcon />
        </div>
    )
}

export default NoEvents