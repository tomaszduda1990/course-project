import React, { Component } from 'react'
import ImageResults from '../ImageResults/ImageResults'
import { TextField, Select, Button } from '@material-ui/core'
import axios from 'axios'

const debounce = (fn, delay) => {
    let timer = null
    return function (...args) {
        const context = this
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay)
    }
}

export default class Search extends Component {
    state = {
        searchText: '',
        amount: 6,
        apiUrl: 'https://pixabay.com/api/',
        apiKey: '11047628-635bca23b99c10143c7630956',
        images: [],
    }

    onPictureCountChange = (e) => {
        this.setState({ amount: e.target.value })
    }

    pictureApiCall = (countOfResults) => {
        if (!this.state.searchText) {
            this.setState({ images: [] })
            return
        } else {
            axios
                .get(
                    `${this.state.apiUrl}?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${countOfResults}&safesearch=true`
                )
                .then((res) => {
                    this.setState({ images: res.data.hits })
                })
                .catch((err) => console.log(err))
        }
    }
    moreResultsHandler = () => {
        const addResults = this.state.amount + 6
        this.pictureApiCall(addResults)
        this.setState({ amount: addResults })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchText !== this.state.searchText) {
            debounce(this.pictureApiCall(this.state.amount), 400)
        }
    }

    onSearchTextChange = (e) => this.setState({ searchText: e.target.value })
    render() {
        return (
            <div>
                <TextField
                    name="searchText"
                    value={this.state.searchText}
                    id="outlined-basic"
                    label="Search for Images"
                    variant="outlined"
                    onInput={this.onSearchTextChange}
                />
                {this.state.images.length ? (
                    <Button
                        onClick={this.moreResultsHandler}
                        variant="contained"
                        color="primary"
                    >
                        More results
                    </Button>
                ) : null}

                {this.state.images.length ? (
                    <ImageResults imgs={this.state.images} />
                ) : (
                    <p>no search results</p>
                )}
                {this.state.images.length > 6 ? (
                    <Button
                        onClick={this.moreResultsHandler}
                        variant="contained"
                        color="primary"
                    >
                        More results
                    </Button>
                ) : null}
            </div>
        )
    }
}
