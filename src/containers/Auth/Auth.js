import React from 'react'
import classes from './Auth.module.css'
import { connect } from 'react-redux'
import { auth } from '../../store/actions/auth'

import CircularProgress from '@material-ui/core/CircularProgress'
class Auth extends React.Component {
    state = {
        email: null,
        password: null,
    }
    onSubmitForm = (e) => {
        e.preventDefault()
        this.props.auth(this.state.email, this.state.password)
    }
    onInputChange = (e) => {
        const key = e.target.name
        this.setState({ [key]: e.target.value })
    }
    render() {
        console.log(this.props)
        const loggedInSuccessfully = this.props.userId && this.props.token
        let element = (
            <div>
                {loggedInSuccessfully ? (
                    <h2
                        style={{
                            color: 'greenyellow',
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}
                    >
                        Logged in
                    </h2>
                ) : (
                    <form className={classes.Form}>
                        <legend>Sign up to Event App !</legend>
                        <label className={classes.Label} htmlFor="email">
                            E-Mail
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="@"
                                required
                                onChange={this.onInputChange}
                            />
                        </label>
                        <label className={classes.Label} htmlFor="pass">
                            Password
                            <input
                                id="pass"
                                type="password"
                                name="password"
                                placeholder="password"
                                required
                                onChange={this.onInputChange}
                            />
                        </label>
                        <button
                            onClick={this.onSubmitForm}
                            className={classes.Button}
                            type="submit"
                        >
                            Create Account
                        </button>
                    </form>
                )}
            </div>
        )

        if (this.props.loading) {
            element = <CircularProgress />
        }
        return element
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        token: state.auth.token,
        userId: state.auth.userId,
        error: state.auth.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        auth: (email, password) => dispatch(auth(email, password, 'signup')),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
