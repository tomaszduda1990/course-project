import React, { Component } from 'react'
import ImageResults from '../ImageResults/ImageResults'
import { TextField, Select, MenuItem, InputLabel } from '@material-ui/core'
import axios from 'axios'
export default class Search extends Component {
    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api/',
        apiKey: '11047628-635bca23b99c10143c7630956',
        images: [],
    }

    onPictureCountChange = (e) => {
        this.setState({ amount: e.target.value })
    }

    pictureApiCall = () => {
        if (!this.state.searchText) {
            this.setState({ images: [] })
            return
        } else {
            axios
                .get(
                    `${this.state.apiUrl}?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
                )
                .then((res) => {
                    this.setState({ images: res.data.hits })
                })
                .catch((err) => console.log(err))
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchText !== this.state.searchText) {
            this.pictureApiCall()
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
                    <ImageResults imgs={this.state.images} />
                ) : (
                    <p>no search results</p>
                )}
            </div>
        )
    }
}
