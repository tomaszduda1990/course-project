import { AUTH_FAIL, AUTH_START, AUTH_SUCCESS, LOGOUT } from './actions'
import axios from 'axios'
export const authStart = () => {
    return { type: AUTH_START }
}

export const authFail = (error) => {
    return {
        type: AUTH_FAIL,
        error,
    }
}
export const authSuccess = (authData) => {
    const loginData = {
        idToken: authData.idToken,
        localId: authData.localId,
    }

    sessionStorage.setItem('loginData', JSON.stringify(loginData))
    console.log('auth successs')
    console.log(authData, loginData)
    return {
        type: AUTH_SUCCESS,
        data: authData,
    }
}

export const authCheck = () => {
    const loginData = JSON.parse(sessionStorage.getItem('loginData'))
    const expiresIn = new Date(sessionStorage.getItem('expiration'))
    return (dispatch) => {
        if (loginData) {
            if (new Date() > expiresIn) {
                dispatch(logOut())
                return
            }
            sessionStorage.setItem(
                'expiration',
                new Date(expiresIn.getTime() - new Date().getTime())
            )
            dispatch(authSuccess(loginData))
        } else {
            dispatch(logOut())
        }
    }
}

export const logOut = () => {
    sessionStorage.removeItem('loginData')
    sessionStorage.removeItem('expiration')
    return {
        type: LOGOUT,
    }
}

export const checkAuthTimeut = (expirationTime) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(logOut())
        }, parseInt(expirationTime) * 1000)
    }
}
const AUTH_KEY = 'AIzaSyAIrzgwBNu8YFM7ixD2DqJOrurGRWs31UA'

const authType = {
    signup:
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
        AUTH_KEY,
    signin:
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
        AUTH_KEY,
}

export const auth = (email, password, type) => {
    return (dispatch) => {
        dispatch(authStart())
        const authData = {
            email,
            password,
            returnSecureToken: true,
        }
        axios
            .post(authType[type], authData)
            .then((res) => {
                sessionStorage.setItem(
                    'expiration',
                    new Date(new Date().getTime() + res.data.expiresIn * 1000)
                )
                dispatch(authSuccess(res.data))
                dispatch(checkAuthTimeut(res.data.expiresIn))
            })
            .catch((err) => {
                dispatch(authFail(err.response.data.error))
            })
    }
}
