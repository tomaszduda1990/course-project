import React from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import FormContainer from './containers/FormContainer/FormContainer'
import EventListContainer from './containers/EventListContainer/EventListContainer'
import HeroImage from './components/HeroImage/HeroImage'

const events = [
    {
        id: 123123,
        name: 'Super Event',
        time: '11:00',
        date: '20.10.2020',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cupiditate dignissimos dolor, doloribus eius enim illum ipsum iusto laboriosam libero maxime, nulla porro quasi quia suscipit tempore voluptas, voluptatibus?',
        price: 29.99,
        image: {
            comments: 56,
            description: '',
            downloads: 64334,
            favorites: 384,
            id: 1844964,
            image: {},
            imageHeight: 2002,
            imageSize: 2168786,
            imageWidth: 3000,
            largeImageURL:
                'https://pixabay.com/get/57e8d1474354a814f6da8c7dda79367f153bd9e351596c48732f7ddc,944ec45db1_1280.jpg',
            likes: 318,
            name: 'Onet party',
            pageURL:
                'https://pixabay.com/photos/tv-television-retro-classic-old-1844964/',
            previewHeight: 100,
            previewURL:
                'https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964_150.jpg',
            previewWidth: 150,
            price: 0,
            tags: 'tv, television, retro',
            time: '',
            type: 'photo',
            user: 'Pexels',
            userImageURL:
                'https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg',
            user_id: 2286921,
            views: 110683,
            webformatHeight: 427,
            webformatURL:
                'https://pixabay.com/get/5ee6d24a4953b10ff3d8992cc629377a1239dced4e507749732778d1954ec7_640.jpg',
            date: '',
            webformatWidth: 640,
        },
    },
    {
        id: 51231123,
        name: 'Strajk',
        time: '19:30',
        date: '01.11.2020',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cupiditate dignissimos dolor, doloribus eius enim illum ipsum iusto laboriosam libero maxime',
        price: 35,
        image: {
            comments: 56,
            description: '',
            downloads: 64334,
            favorites: 384,
            id: 1844964,
            image: {},
            imageHeight: 2002,
            imageSize: 2168786,
            imageWidth: 3000,
            largeImageURL:
                'https://pixabay.com/get/57e8d1474354a814f6da8c7dda79367f153bd9e351596c48732f7ddc,944ec45db1_1280.jpg',
            likes: 318,
            name: 'Onet party',
            pageURL:
                'https://pixabay.com/photos/tv-television-retro-classic-old-1844964/',
            previewHeight: 100,
            previewURL:
                'https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964_150.jpg',
            previewWidth: 150,
            price: 0,
            tags: 'tv, television, retro',
            time: '',
            type: 'photo',
            user: 'Pexels',
            userImageURL:
                'https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg',
            user_id: 2286921,
            views: 110683,
            webformatHeight: 427,
            webformatURL:
                'https://pixabay.com/get/5ee6d24a4953b10ff3d8992cc629377a1239dced4e507749732778d1954ec7_640.jpg',
            date: '',
            webformatWidth: 640,
        },
    },
    {
        id: 123123,
        name: 'Super Event',
        time: '11:00',
        date: '20.10.2020',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cupiditate dignissimos dolor, doloribus eius enim illum ipsum iusto laboriosam libero maxime, nulla porro quasi quia suscipit tempore voluptas, voluptatibus?',
        price: 29.99,
        image: {
            comments: 56,
            description: '',
            downloads: 64334,
            favorites: 384,
            id: 1844964,
            image: {},
            imageHeight: 2002,
            imageSize: 2168786,
            imageWidth: 3000,
            largeImageURL:
                'https://pixabay.com/get/57e8d1474354a814f6da8c7dda79367f153bd9e351596c48732f7ddc,944ec45db1_1280.jpg',
            likes: 318,
            name: 'Onet party',
            pageURL:
                'https://pixabay.com/photos/tv-television-retro-classic-old-1844964/',
            previewHeight: 100,
            previewURL:
                'https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964_150.jpg',
            previewWidth: 150,
            price: 0,
            tags: 'tv, television, retro',
            time: '',
            type: 'photo',
            user: 'Pexels',
            userImageURL:
                'https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg',
            user_id: 2286921,
            views: 110683,
            webformatHeight: 427,
            webformatURL:
                'https://pixabay.com/get/5ee6d24a4953b10ff3d8992cc629377a1239dced4e507749732778d1954ec7_640.jpg',
            date: '',
            webformatWidth: 640,
        },
    },
    {
        id: 51231123,
        name: 'Strajk',
        time: '19:30',
        date: '01.11.2020',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cupiditate dignissimos dolor, doloribus eius enim illum ipsum iusto laboriosam libero maxime',
        price: 35,
        image: {
            comments: 56,
            description: '',
            downloads: 64334,
            favorites: 384,
            id: 1844964,
            image: {},
            imageHeight: 2002,
            imageSize: 2168786,
            imageWidth: 3000,
            largeImageURL:
                'https://pixabay.com/get/57e8d1474354a814f6da8c7dda79367f153bd9e351596c48732f7ddc,944ec45db1_1280.jpg',
            likes: 318,
            name: 'Onet party',
            pageURL:
                'https://pixabay.com/photos/tv-television-retro-classic-old-1844964/',
            previewHeight: 100,
            previewURL:
                'https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964_150.jpg',
            previewWidth: 150,
            price: 0,
            tags: 'tv, television, retro',
            time: '',
            type: 'photo',
            user: 'Pexels',
            userImageURL:
                'https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg',
            user_id: 2286921,
            views: 110683,
            webformatHeight: 427,
            webformatURL:
                'https://pixabay.com/get/5ee6d24a4953b10ff3d8992cc629377a1239dced4e507749732778d1954ec7_640.jpg',
            date: '',
            webformatWidth: 640,
        },
    },
    {
        id: 123123,
        name: 'Super Event',
        time: '11:00',
        date: '20.10.2020',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cupiditate dignissimos dolor, doloribus eius enim illum ipsum iusto laboriosam libero maxime, nulla porro quasi quia suscipit tempore voluptas, voluptatibus?',
        price: 29.99,
        image: {
            comments: 56,
            description: '',
            downloads: 64334,
            favorites: 384,
            id: 1844964,
            image: {},
            imageHeight: 2002,
            imageSize: 2168786,
            imageWidth: 3000,
            largeImageURL:
                'https://pixabay.com/get/57e8d1474354a814f6da8c7dda79367f153bd9e351596c48732f7ddc,944ec45db1_1280.jpg',
            likes: 318,
            name: 'Onet party',
            pageURL:
                'https://pixabay.com/photos/tv-television-retro-classic-old-1844964/',
            previewHeight: 100,
            previewURL:
                'https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964_150.jpg',
            previewWidth: 150,
            price: 0,
            tags: 'tv, television, retro',
            time: '',
            type: 'photo',
            user: 'Pexels',
            userImageURL:
                'https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg',
            user_id: 2286921,
            views: 110683,
            webformatHeight: 427,
            webformatURL:
                'https://pixabay.com/get/5ee6d24a4953b10ff3d8992cc629377a1239dced4e507749732778d1954ec7_640.jpg',
            date: '',
            webformatWidth: 640,
        },
    },
    {
        id: 51231123,
        name: 'Strajk',
        time: '19:30',
        date: '01.11.2020',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cupiditate dignissimos dolor, doloribus eius enim illum ipsum iusto laboriosam libero maxime',
        price: 35,
        image: {
            comments: 56,
            description: '',
            downloads: 64334,
            favorites: 384,
            id: 1844964,
            image: {},
            imageHeight: 2002,
            imageSize: 2168786,
            imageWidth: 3000,
            largeImageURL:
                'https://pixabay.com/get/57e8d1474354a814f6da8c7dda79367f153bd9e351596c48732f7ddc,944ec45db1_1280.jpg',
            likes: 318,
            name: 'Onet party',
            pageURL:
                'https://pixabay.com/photos/tv-television-retro-classic-old-1844964/',
            previewHeight: 100,
            previewURL:
                'https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964_150.jpg',
            previewWidth: 150,
            price: 0,
            tags: 'tv, television, retro',
            time: '',
            type: 'photo',
            user: 'Pexels',
            userImageURL:
                'https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg',
            user_id: 2286921,
            views: 110683,
            webformatHeight: 427,
            webformatURL:
                'https://pixabay.com/get/5ee6d24a4953b10ff3d8992cc629377a1239dced4e507749732778d1954ec7_640.jpg',
            date: '',
            webformatWidth: 640,
        },
    },
    {
        id: 123123,
        name: 'Super Event',
        time: '11:00',
        date: '20.10.2020',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cupiditate dignissimos dolor, doloribus eius enim illum ipsum iusto laboriosam libero maxime, nulla porro quasi quia suscipit tempore voluptas, voluptatibus?',
        price: 29.99,
        image: {
            comments: 56,
            description: '',
            downloads: 64334,
            favorites: 384,
            id: 1844964,
            image: {},
            imageHeight: 2002,
            imageSize: 2168786,
            imageWidth: 3000,
            largeImageURL:
                'https://pixabay.com/get/57e8d1474354a814f6da8c7dda79367f153bd9e351596c48732f7ddc,944ec45db1_1280.jpg',
            likes: 318,
            name: 'Onet party',
            pageURL:
                'https://pixabay.com/photos/tv-television-retro-classic-old-1844964/',
            previewHeight: 100,
            previewURL:
                'https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964_150.jpg',
            previewWidth: 150,
            price: 0,
            tags: 'tv, television, retro',
            time: '',
            type: 'photo',
            user: 'Pexels',
            userImageURL:
                'https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg',
            user_id: 2286921,
            views: 110683,
            webformatHeight: 427,
            webformatURL:
                'https://pixabay.com/get/5ee6d24a4953b10ff3d8992cc629377a1239dced4e507749732778d1954ec7_640.jpg',
            date: '',
            webformatWidth: 640,
        },
    },
    {
        id: 51231123,
        name: 'Strajk',
        time: '19:30',
        date: '01.11.2020',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cupiditate dignissimos dolor, doloribus eius enim illum ipsum iusto laboriosam libero maxime',
        price: 35,
        image: {
            comments: 56,
            description: '',
            downloads: 64334,
            favorites: 384,
            id: 1844964,
            image: {},
            imageHeight: 2002,
            imageSize: 2168786,
            imageWidth: 3000,
            largeImageURL:
                'https://pixabay.com/get/57e8d1474354a814f6da8c7dda79367f153bd9e351596c48732f7ddc,944ec45db1_1280.jpg',
            likes: 318,
            name: 'Onet party',
            pageURL:
                'https://pixabay.com/photos/tv-television-retro-classic-old-1844964/',
            previewHeight: 100,
            previewURL:
                'https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964_150.jpg',
            previewWidth: 150,
            price: 0,
            tags: 'tv, television, retro',
            time: '',
            type: 'photo',
            user: 'Pexels',
            userImageURL:
                'https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg',
            user_id: 2286921,
            views: 110683,
            webformatHeight: 427,
            webformatURL:
                'https://pixabay.com/get/5ee6d24a4953b10ff3d8992cc629377a1239dced4e507749732778d1954ec7_640.jpg',
            date: '',
            webformatWidth: 640,
        },
    },
]

class App extends React.Component {
    state = {
        events: [
            {
                id: 123123,
                name: 'Super Event',
                time: '11:00',
                date: '20.10.2020',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cupiditate dignissimos dolor, doloribus eius enim illum ipsum iusto laboriosam libero maxime, nulla porro quasi quia suscipit tempore voluptas, voluptatibus?',
                price: 29.99,
                image: {
                    comments: 56,
                    description: '',
                    downloads: 64334,
                    favorites: 384,
                    id: 1844964,
                    image: {},
                    imageHeight: 2002,
                    imageSize: 2168786,
                    imageWidth: 3000,
                    largeImageURL:
                        'https://pixabay.com/get/57e8d1474354a814f6da8c7dda79367f153bd9e351596c48732f7ddc,944ec45db1_1280.jpg',
                    likes: 318,
                    name: 'Onet party',
                    pageURL:
                        'https://pixabay.com/photos/tv-television-retro-classic-old-1844964/',
                    previewHeight: 100,
                    previewURL:
                        'https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964_150.jpg',
                    previewWidth: 150,
                    price: 0,
                    tags: 'tv, television, retro',
                    time: '',
                    type: 'photo',
                    user: 'Pexels',
                    userImageURL:
                        'https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg',
                    user_id: 2286921,
                    views: 110683,
                    webformatHeight: 427,
                    webformatURL:
                        'https://pixabay.com/get/5ee6d24a4953b10ff3d8992cc629377a1239dced4e507749732778d1954ec7_640.jpg',
                    date: '',
                    webformatWidth: 640,
                },
            },
            {
                id: 51231123,
                name: 'Strajk',
                time: '19:30',
                date: '01.11.2020',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cupiditate dignissimos dolor, doloribus eius enim illum ipsum iusto laboriosam libero maxime',
                price: 35,
                image: {
                    comments: 56,
                    description: '',
                    downloads: 64334,
                    favorites: 384,
                    id: 1844964,
                    image: {},
                    imageHeight: 2002,
                    imageSize: 2168786,
                    imageWidth: 3000,
                    largeImageURL:
                        'https://pixabay.com/get/57e8d1474354a814f6da8c7dda79367f153bd9e351596c48732f7ddc,944ec45db1_1280.jpg',
                    likes: 318,
                    name: 'Onet party',
                    pageURL:
                        'https://pixabay.com/photos/tv-television-retro-classic-old-1844964/',
                    previewHeight: 100,
                    previewURL:
                        'https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964_150.jpg',
                    previewWidth: 150,
                    price: 0,
                    tags: 'tv, television, retro',
                    time: '',
                    type: 'photo',
                    user: 'Pexels',
                    userImageURL:
                        'https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg',
                    user_id: 2286921,
                    views: 110683,
                    webformatHeight: 427,
                    webformatURL:
                        'https://pixabay.com/get/5ee6d24a4953b10ff3d8992cc629377a1239dced4e507749732778d1954ec7_640.jpg',
                    date: '',
                    webformatWidth: 640,
                },
            },
            {
                id: 123123,
                name: 'Super Event',
                time: '11:00',
                date: '20.10.2020',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cupiditate dignissimos dolor, doloribus eius enim illum ipsum iusto laboriosam libero maxime, nulla porro quasi quia suscipit tempore voluptas, voluptatibus?',
                price: 29.99,
                image: {
                    comments: 56,
                    description: '',
                    downloads: 64334,
                    favorites: 384,
                    id: 1844964,
                    image: {},
                    imageHeight: 2002,
                    imageSize: 2168786,
                    imageWidth: 3000,
                    largeImageURL:
                        'https://pixabay.com/get/57e8d1474354a814f6da8c7dda79367f153bd9e351596c48732f7ddc,944ec45db1_1280.jpg',
                    likes: 318,
                    name: 'Onet party',
                    pageURL:
                        'https://pixabay.com/photos/tv-television-retro-classic-old-1844964/',
                    previewHeight: 100,
                    previewURL:
                        'https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964_150.jpg',
                    previewWidth: 150,
                    price: 0,
                    tags: 'tv, television, retro',
                    time: '',
                    type: 'photo',
                    user: 'Pexels',
                    userImageURL:
                        'https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg',
                    user_id: 2286921,
                    views: 110683,
                    webformatHeight: 427,
                    webformatURL:
                        'https://pixabay.com/get/5ee6d24a4953b10ff3d8992cc629377a1239dced4e507749732778d1954ec7_640.jpg',
                    date: '',
                    webformatWidth: 640,
                },
            },
            {
                id: 51231123,
                name: 'Strajk',
                time: '19:30',
                date: '01.11.2020',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cupiditate dignissimos dolor, doloribus eius enim illum ipsum iusto laboriosam libero maxime',
                price: 35,
                image: {
                    comments: 56,
                    description: '',
                    downloads: 64334,
                    favorites: 384,
                    id: 1844964,
                    image: {},
                    imageHeight: 2002,
                    imageSize: 2168786,
                    imageWidth: 3000,
                    largeImageURL:
                        'https://pixabay.com/get/57e8d1474354a814f6da8c7dda79367f153bd9e351596c48732f7ddc,944ec45db1_1280.jpg',
                    likes: 318,
                    name: 'Onet party',
                    pageURL:
                        'https://pixabay.com/photos/tv-television-retro-classic-old-1844964/',
                    previewHeight: 100,
                    previewURL:
                        'https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964_150.jpg',
                    previewWidth: 150,
                    price: 0,
                    tags: 'tv, television, retro',
                    time: '',
                    type: 'photo',
                    user: 'Pexels',
                    userImageURL:
                        'https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg',
                    user_id: 2286921,
                    views: 110683,
                    webformatHeight: 427,
                    webformatURL:
                        'https://pixabay.com/get/5ee6d24a4953b10ff3d8992cc629377a1239dced4e507749732778d1954ec7_640.jpg',
                    date: '',
                    webformatWidth: 640,
                },
            },
            {
                id: 123123,
                name: 'Super Event',
                time: '11:00',
                date: '20.10.2020',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cupiditate dignissimos dolor, doloribus eius enim illum ipsum iusto laboriosam libero maxime, nulla porro quasi quia suscipit tempore voluptas, voluptatibus?',
                price: 29.99,
                image: {
                    comments: 56,
                    description: '',
                    downloads: 64334,
                    favorites: 384,
                    id: 1844964,
                    image: {},
                    imageHeight: 2002,
                    imageSize: 2168786,
                    imageWidth: 3000,
                    largeImageURL:
                        'https://pixabay.com/get/57e8d1474354a814f6da8c7dda79367f153bd9e351596c48732f7ddc,944ec45db1_1280.jpg',
                    likes: 318,
                    name: 'Onet party',
                    pageURL:
                        'https://pixabay.com/photos/tv-television-retro-classic-old-1844964/',
                    previewHeight: 100,
                    previewURL:
                        'https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964_150.jpg',
                    previewWidth: 150,
                    price: 0,
                    tags: 'tv, television, retro',
                    time: '',
                    type: 'photo',
                    user: 'Pexels',
                    userImageURL:
                        'https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg',
                    user_id: 2286921,
                    views: 110683,
                    webformatHeight: 427,
                    webformatURL:
                        'https://pixabay.com/get/5ee6d24a4953b10ff3d8992cc629377a1239dced4e507749732778d1954ec7_640.jpg',
                    date: '',
                    webformatWidth: 640,
                },
            },
            {
                id: 51231123,
                name: 'Strajk',
                time: '19:30',
                date: '01.11.2020',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cupiditate dignissimos dolor, doloribus eius enim illum ipsum iusto laboriosam libero maxime',
                price: 35,
                image: {
                    comments: 56,
                    description: '',
                    downloads: 64334,
                    favorites: 384,
                    id: 1844964,
                    image: {},
                    imageHeight: 2002,
                    imageSize: 2168786,
                    imageWidth: 3000,
                    largeImageURL:
                        'https://pixabay.com/get/57e8d1474354a814f6da8c7dda79367f153bd9e351596c48732f7ddc,944ec45db1_1280.jpg',
                    likes: 318,
                    name: 'Onet party',
                    pageURL:
                        'https://pixabay.com/photos/tv-television-retro-classic-old-1844964/',
                    previewHeight: 100,
                    previewURL:
                        'https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964_150.jpg',
                    previewWidth: 150,
                    price: 0,
                    tags: 'tv, television, retro',
                    time: '',
                    type: 'photo',
                    user: 'Pexels',
                    userImageURL:
                        'https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg',
                    user_id: 2286921,
                    views: 110683,
                    webformatHeight: 427,
                    webformatURL:
                        'https://pixabay.com/get/5ee6d24a4953b10ff3d8992cc629377a1239dced4e507749732778d1954ec7_640.jpg',
                    date: '',
                    webformatWidth: 640,
                },
            },
            {
                id: 123123,
                name: 'Super Event',
                time: '11:00',
                date: '20.10.2020',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cupiditate dignissimos dolor, doloribus eius enim illum ipsum iusto laboriosam libero maxime, nulla porro quasi quia suscipit tempore voluptas, voluptatibus?',
                price: 29.99,
                image: {
                    comments: 56,
                    description: '',
                    downloads: 64334,
                    favorites: 384,
                    id: 1844964,
                    image: {},
                    imageHeight: 2002,
                    imageSize: 2168786,
                    imageWidth: 3000,
                    largeImageURL:
                        'https://pixabay.com/get/57e8d1474354a814f6da8c7dda79367f153bd9e351596c48732f7ddc,944ec45db1_1280.jpg',
                    likes: 318,
                    name: 'Onet party',
                    pageURL:
                        'https://pixabay.com/photos/tv-television-retro-classic-old-1844964/',
                    previewHeight: 100,
                    previewURL:
                        'https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964_150.jpg',
                    previewWidth: 150,
                    price: 0,
                    tags: 'tv, television, retro',
                    time: '',
                    type: 'photo',
                    user: 'Pexels',
                    userImageURL:
                        'https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg',
                    user_id: 2286921,
                    views: 110683,
                    webformatHeight: 427,
                    webformatURL:
                        'https://pixabay.com/get/5ee6d24a4953b10ff3d8992cc629377a1239dced4e507749732778d1954ec7_640.jpg',
                    date: '',
                    webformatWidth: 640,
                },
            },
            {
                id: 51231123,
                name: 'Strajk',
                time: '19:30',
                date: '01.11.2020',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa cupiditate dignissimos dolor, doloribus eius enim illum ipsum iusto laboriosam libero maxime',
                price: 35,
                image: {
                    comments: 56,
                    description: '',
                    downloads: 64334,
                    favorites: 384,
                    id: 1844964,
                    image: {},
                    imageHeight: 2002,
                    imageSize: 2168786,
                    imageWidth: 3000,
                    largeImageURL:
                        'https://pixabay.com/get/57e8d1474354a814f6da8c7dda79367f153bd9e351596c48732f7ddc,944ec45db1_1280.jpg',
                    likes: 318,
                    name: 'Onet party',
                    pageURL:
                        'https://pixabay.com/photos/tv-television-retro-classic-old-1844964/',
                    previewHeight: 100,
                    previewURL:
                        'https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964_150.jpg',
                    previewWidth: 150,
                    price: 0,
                    tags: 'tv, television, retro',
                    time: '',
                    type: 'photo',
                    user: 'Pexels',
                    userImageURL:
                        'https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg',
                    user_id: 2286921,
                    views: 110683,
                    webformatHeight: 427,
                    webformatURL:
                        'https://pixabay.com/get/5ee6d24a4953b10ff3d8992cc629377a1239dced4e507749732778d1954ec7_640.jpg',
                    date: '',
                    webformatWidth: 640,
                },
            },
        ],
    }
    onFormSubmit = (evtArray) => {
        console.log([...this.state.events])
        evtArray.id = new Date().getTime() + Math.random()
        const copiedEvents = [...this.state.events]
        copiedEvents.push(evtArray)
        this.setState({
            events: [...copiedEvents],
        })
        console.log(this.state)
    }
    render() {
        return (
            <div className="App">
                <Layout>
                    <HeroImage />
                    <EventListContainer events={this.state.events} />
                    <FormContainer formSubmission={this.onFormSubmit} />
                </Layout>
            </div>
        )
    }
}

export default App
