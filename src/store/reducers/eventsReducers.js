import * as actionTypes from '../actions/actions'
const initialStore = {
    events: [],
}
const reducer = (store = initialStore, actions) => {
    switch (actions.type) {
        case actionTypes.FORM_SUBMISSION:
            return {
                ...store,
            }
        case actionTypes.GET_DATA:
            return {
                ...store,
                events: actions.events,
            }
    }
    return store
}

export default reducer
