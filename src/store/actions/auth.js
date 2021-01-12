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
    return {
        type: AUTH_SUCCESS,
        data: authData,
    }
}

export const logOut = () => {
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
                dispatch(authSuccess(res.data))
                dispatch(checkAuthTimeut(res.data.expiresIn))
            })
            .catch((err) => {
                dispatch(authFail(err.response.data.error))
            })
    }
}
