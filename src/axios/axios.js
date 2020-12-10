import axios from 'axios'

const instance = axios.create({
    baseURL:
        'https://event-app-8a682-default-rtdb.europe-west1.firebasedatabase.app/',
})

export default instance
