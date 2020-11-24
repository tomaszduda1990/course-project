import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import CircularProgress from '@material-ui/core/CircularProgress'
import GetAppIcon from '@material-ui/icons/GetApp'
import classes from './ImageResults.module.css'
import ImageModal from './ImageModal'

export default class Image extends React.Component {
    state = {
        loaded: false,
        modalOpen: false,
    }

    onImageLoadHandler = (e) => {
        this.setState({ loaded: true })
    }

    closeModal = () => {
        this.setState({ modalOpen: false })
    }

    openModal = () => {
        this.setState({ modalOpen: true })
    }

    render() {
        const { url, tags, likes, downloads, previewUrl } = this.props
        return (
            <li className={classes.ImgItem}>
                {!this.state.loaded ? <CircularProgress /> : null}
                <div
                    style={{
                        visibility: `${
                            this.state.loaded ? 'visible' : 'hidden'
                        }`,
                    }}
                >
                    <div className={classes.ImgContainer}>
                        <img
                            src={previewUrl}
                            alt={tags}
                            onLoad={() => this.onImageLoadHandler()}
                            onClick={this.openModal}
                        />
                    </div>
                    <div>
                        <div className={classes.Info}>
                            <FavoriteBorderIcon />{' '}
                            <span>
                                <strong>{likes}</strong>
                            </span>
                        </div>
                        <div className={classes.Info}>
                            <GetAppIcon />{' '}
                            <span>
                                <strong>{downloads}</strong>
                            </span>
                        </div>
                    </div>
                </div>
                <ImageModal
                    modalOpen={this.state.modalOpen}
                    handleCloseModal={this.closeModal}
                    imgUrl={url}
                    imgTags={tags}
                    submitImg={this.props.submitImg}
                />
            </li>
        )
    }
}
