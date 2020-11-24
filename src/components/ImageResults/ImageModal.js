import React, { Component, useState } from 'react'
import { Modal, Button, CircularProgress } from '@material-ui/core'
import classes from './ImageResults.module.css'
const ImageModal = (props) => {
    const [imgLoaded, setImageLoaded] = useState(false)
    const onImageLoadHandler = () => {
        setImageLoaded(true)
    }
    const onImageSelectHandler = () => {
        props.submitImg()
        props.handleCloseModal()
    }
    return (
        <Modal open={props.modalOpen} onClose={props.handleCloseModal}>
            <div className={classes.ModalBody}>
                <div className={classes.ImgContainer}>
                    <img
                        src={props.imgUrl}
                        alt={props.imgTags}
                        onLoad={onImageLoadHandler}
                    />
                    {!imgLoaded ? <CircularProgress /> : null}
                </div>
                <div className={classes.BtnContainer}>
                    <Button
                        onClick={props.handleCloseModal}
                        variant="contained"
                        color="secondary"
                        className={classes.Btn}
                    >
                        Close
                    </Button>
                    <Button
                        className={classes.Btn}
                        variant="contained"
                        color="primary"
                        onClick={onImageSelectHandler}
                    >
                        Select Picture
                    </Button>
                </div>
            </div>
        </Modal>
    )
}

export default ImageModal
