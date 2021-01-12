import axios from 'axios'

export const instanceFirebase = axios.create({
    baseURL:
        'https://event-app-8a682-default-rtdb.europe-west1.firebasedatabase.app/',
})

const PIXABAY_API = '11047628-635bca23b99c10143c7630956'
export const instancePixabay = axios.create({
    baseURL: 'https://pixabay.com/api/',
    params: {
        key: PIXABAY_API,
        image_type: 'photo',
        safesearch: true,
    },
})

export const instanceFirebaseAuth = axios.create({
    baseURL:
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAIrzgwBNu8YFM7ixD2DqJOrurGRWs31UA',
})
