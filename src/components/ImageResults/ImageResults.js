import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import GetAppIcon from '@material-ui/icons/GetApp'
import classes from './ImageResults.module.css'
const ImageResults = ({ imgs }) => {
    return (
        <ul className={classes.List}>
            {imgs.map((img) => {
                const { id, webformatURL, tags, likes, downloads } = img
                return (
                    <li className={classes.ImgItem} key={id}>
                        <div className={classes.ImgContainer}>
                            <img src={webformatURL} alt={tags} />
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
                    </li>
                )
            })}
        </ul>
    )
}

export default ImageResults
