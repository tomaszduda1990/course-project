import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import CircularProgress from '@material-ui/core/CircularProgress'
import GetAppIcon from '@material-ui/icons/GetApp'
import classes from './ImageResults.module.css'

export default class Image extends React.Component {
    state = {
        loaded: false,
    }

    onImageLoadHandler = (e) => {
        this.setState({ loaded: true })
    }

    render() {
        const { url, tags, likes, downloads } = this.props
        return (
            <li className={classes.ImgItem}>
                {!this.state.loaded ? <CircularProgress /> : null}
                <div style={{ opacity: `${this.state.loaded ? '1' : '0'}` }}>
                    <div className={classes.ImgContainer}>
                        <img
                            src={url}
                            alt={tags}
                            onLoad={() => this.onImageLoadHandler()}
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
            </li>
        )
    }
}
