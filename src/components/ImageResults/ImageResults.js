import React from 'react'
import classes from './ImageResults.module.css'
import Image from './Image'
const ImageResults = ({ imgs, submitImg }) => {
    return (
        <ul className={classes.List}>
            {imgs.map((img) => {
                const {
                    id,
                    webformatURL,
                    tags,
                    likes,
                    downloads,
                    previewURL,
                } = img
                return (
                    <Image
                        key={id}
                        previewUrl={previewURL}
                        url={webformatURL}
                        tags={tags}
                        likes={likes}
                        downloads={downloads}
                        submitImg={() => submitImg(img)}
                    />
                )
            })}
        </ul>
    )
}

export default ImageResults
