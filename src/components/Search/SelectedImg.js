import React from 'react'
import { Button } from '@material-ui/core'
import classes from './Search.module.css'
const SelectedImg = (props) => {
    return (
        <div className={classes.SelectedImg}>
            <div className={classes.SelectedImgContainer}>
                <img src={props.url} alt={props.tags} />
            </div>
            <div className={classes.RemoveSelectedImg}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={props.removeHandler}
                >
                    Remove image
                </Button>
            </div>
        </div>
    )
}

export default SelectedImg
