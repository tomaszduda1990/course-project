import React from 'react'
import classes from './Toolbar.module.css'
import { logOut } from '../../store/actions/auth'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
const Toolbar = (props) => {
    let logVariables = (
        <>
            <li>
                <NavLink exact activeClassName={classes.active} to="/sign-in">
                    Log in
                </NavLink>
            </li>
            {/* <li>
                <NavLink exact activeClassName={classes.active} to="/auth">
                    Create Account
                </NavLink>
            </li> */}
        </>
    )

    if (props.isAuth) {
        logVariables = (
            <>
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
                        to="/"
                        onClick={props.logout}
                    >
                        Log out
                    </NavLink>
                </li>
            </>
        )
    }
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
                        {logVariables}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.token && state.auth.userId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logOut()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)
