import * as actionTypes from '../actions/actions'
const initialStore = {
    events: [],
    loadingEvents: true,
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
                loadingEvents: actions.loadingEvents,
            }
    }
    return store
}

export default reducer
