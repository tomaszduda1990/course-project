import React, { Component } from 'react'
import ImageResults from '../ImageResults/ImageResults'
import { TextField, Button } from '@material-ui/core'
import SelectImg from './SelectedImg'
import axios from 'axios'

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
            this.pictureApiCall(this.state.amount)
        }
    }

    onSearchTextChange = (e) => this.setState({ searchText: e.target.value })
    render() {
        console.log(this.props.selectedImg)
        const imageSelected =
            Object.keys(this.props.selectedImg).length !== 0 &&
            this.props.selectedImg.constructor === Object
        console.log(imageSelected)
        const selectedImg = imageSelected ? (
            <SelectImg
                url={this.props.selectedImg.webformatURL}
                tags={this.props.selectedImg.tags}
                removeHandler={this.props.removeImg}
            />
        ) : null

        return (
            <div style={{ marginTop: '20px' }}>
                {selectedImg}
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
                        Show More results
                    </Button>
                ) : null}

                {this.state.images.length ? (
                    <ImageResults
                        submitImg={this.props.submitImg}
                        imgs={this.state.images}
                    />
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
