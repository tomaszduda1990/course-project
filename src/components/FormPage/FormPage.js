import React from 'react'
import { Button } from '@material-ui/core'
import classes from './FormPage.module.css'

const formPage = (props) => {
    return (
        <div className={classes.Questionnaire}>
            {props.children}
            <div className={classes.BtnContainer}>
                <Button className={classes.Btn}>Default</Button>
                <Button
                    variant="contained"
                    className={classes.Btn}
                    disabled={!props.isValid}
                    color={props.isValid ? 'primary' : 'default'}
                >
                    Next Step
                </Button>
            </div>
        </div>
    )
}

export default formPage
