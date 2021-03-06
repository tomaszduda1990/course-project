import { AUTH_SUCCESS, AUTH_FAIL, AUTH_START, LOGOUT } from '../actions/actions'
const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
}

const authReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case AUTH_START:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case AUTH_FAIL:
            return {
                ...state,
                loading: false,
                error: actions.error,
                userId: null,
                token: null,
            }
        case AUTH_SUCCESS:
            console.log(actions.data)
            const { localId, idToken } = actions.data
            return {
                ...state,
                userId: localId,
                token: idToken,
                loading: false,
                error: null,
            }
        case LOGOUT:
            return {
                ...state,
                ...initialState,
            }
    }
    return state
}

export default authReducer
