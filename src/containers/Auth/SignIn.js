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
        if (this.state.email && this.state.password) {
            this.props.auth(this.state.email, this.state.password)
        }
    }
    onInputChange = (e) => {
        const key = e.target.name
        this.setState({ [key]: e.target.value })
    }
    render() {
        let element = (
            <div>
                <form className={classes.Form}>
                    <legend>Please log in</legend>
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
                        Log in
                    </button>
                </form>
            </div>
        )

        if (this.props.loading) {
            element = (
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <CircularProgress />
                </div>
            )
        }

        const loggedInSuccessfully = this.props.userId && this.props.token
        if (loggedInSuccessfully) {
            element = (
                <h3
                    style={{
                        color: 'greenyellow',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize: '40px',
                    }}
                >
                    Logged in
                </h3>
            )
        }

        if (this.props.error) {
            element = (
                <h3
                    style={{
                        color: 'salmon',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize: '40px',
                    }}
                >
                    {this.props.error.message}
                </h3>
            )
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
        auth: (email, password) => dispatch(auth(email, password, 'signin')),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
