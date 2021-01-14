import * as actionTypes from './actions'
import { instanceFirebase } from '../../axios/axios'
const eventsAction = (events, loadingEvents) => {
    return {
        type: actionTypes.GET_DATA,
        events,
        loadingEvents,
    }
}

export const get_data = () => {
    return (dispatch) => {
        instanceFirebase
            .get('/events.json')
            .then((res) => {
                const data = []
                for (let key in res.data) {
                    data.push(res.data[key])
                }
                return dispatch(eventsAction(data, false))
            })
            .catch((err) => console.log(err))
    }
}
