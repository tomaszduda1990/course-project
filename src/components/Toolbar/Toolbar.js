import React from 'react'
import classes from './Toolbar.module.css'
import { NavLink } from 'react-router-dom'
const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div className={classes.Container}>
                <NavLink to="/">Home</NavLink>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                exact
                                activeClassName={classes.active}
                                to="/about"
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                exact
                                activeClassName={classes.active}
                                to="/new-event"
                            >
                                New Event
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                exact
                                activeClassName={classes.active}
                                to="/contact"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Toolbar
//commentr
