import React from 'react'

import { Button } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
const buttons = (props) => {
    let buttons = <Button onClick={props.goBack}>BACK</Button>
    if (!props.isOld) {
        buttons = (
            <>
                <Button onClick={props.prevPage}>Edit event</Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={props.onSubmit}
                >
                    {props.loading ? <CircularProgress /> : 'Submit'}
                </Button>
            </>
        )
    }
    return <div className={props.classes.BtnContainer}>{buttons}</div>
}

export default buttons
