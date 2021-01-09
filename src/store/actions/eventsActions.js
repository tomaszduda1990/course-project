import * as actionTypes from './actions'
import { instanceFirebase } from '../../axios/axios'
const eventsAction = (e) => {
    return {
        type: actionTypes.GET_DATA,
        events: e,
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
                return dispatch(eventsAction(data))
            })
            .catch((err) => console.log(err))
    }
}
