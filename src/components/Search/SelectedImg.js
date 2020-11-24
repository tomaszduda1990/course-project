import React from 'react'
import { Button } from '@material-ui/core'
import classes from './Search.module.css'
const SelectedImg = (props) => {
    return (
        <div className={classes.SelectedImg}>
            <div className={classes.SelectedImgContainer}>
                <img src={props.url} alt={props.tags} />
            </div>
            <Button
                className={classes.RemoveSelectedImg}
                variant="outlined"
                color="secondary"
                onClick={props.removeHandler}
            >
                Remove
            </Button>
        </div>
    )
}

export default SelectedImg
