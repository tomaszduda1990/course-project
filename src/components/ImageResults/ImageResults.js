import React from 'react'
import classes from './ImageResults.module.css'
import Image from './Image'
const ImageResults = ({ imgs }) => {
    return (
        <ul className={classes.List}>
            {imgs.map((img) => {
                console.log(img)
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
                    />
                )
            })}
        </ul>
    )
}

export default ImageResults
