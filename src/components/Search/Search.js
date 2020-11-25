import React, { Component } from 'react'
import ImageResults from '../ImageResults/ImageResults'
import { TextField, Button, CircularProgress } from '@material-ui/core'
import SelectImg from './SelectedImg'
import { debounce } from './utils/utils'
import axios from 'axios'

export default class Search extends Component {
    state = {
        searchText: '',
        amount: 6,
        apiUrl: 'https://pixabay.com/api/',
        apiKey: '11047628-635bca23b99c10143c7630956',
        images: [],
        loading: false,
    }

    debouncedTextInput = debounce(this.pictureApiCall.bind(this), 1000)

    pictureApiCall(countOfResults) {
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
                    this.setState({ loading: false })
                })
                .catch((err) => console.log(err))
        }
    }
    moreResultsHandler = () => {
        const addResults = this.state.amount + 6
        this.debouncedTextInput(addResults)
        this.setState({ amount: addResults })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchText !== this.state.searchText) {
            this.debouncedTextInput(this.state.amount)
        }
    }

    onSearchTextChange = (e) => {
        if (e.target.value === '') {
            this.setState({
                searchText: e.target.value,
                images: [],
                loading: false,
            })
        } else {
            this.setState({ searchText: e.target.value, loading: true })
        }
    }
    render() {
        const imageSelected =
            Object.keys(this.props.selectedImg).length !== 0 &&
            this.props.selectedImg.constructor === Object
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
                {this.state.loading && this.state.searchText ? (
                    <CircularProgress />
                ) : (
                    <ImageResults
                        submitImg={this.props.submitImg}
                        imgs={this.state.images}
                    />
                )}
                {this.state.images.length === 0 ? (
                    <p>no search results</p>
                ) : null}
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
