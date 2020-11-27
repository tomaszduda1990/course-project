import React from 'react'
import { Button, withStyles } from '@material-ui/core'
import classes from './FormPage.module.css'

const formPage = (props) => {
    const StyledButtonNextStep = withStyles({
        root: {
            maxWidth: '30%',
            marginLeft: '10px',
            backgroundColor: '#50c878',
        },
    })(Button)

    return (
        <div className={classes.Questionnaire}>
            {props.children}
            <div className={classes.BtnContainer}>
                {props.pageNum !== 1 ? (
                    <Button className={classes.Btn} onClick={props.prevPage}>
                        Previous page
                    </Button>
                ) : null}
                <StyledButtonNextStep
                    variant="contained"
                    className={classes.Btn}
                    disabled={!props.isValid}
                    color={props.isValid ? 'primary' : 'default'}
                    onClick={props.nextPage}
                >
                    Next Step
                </StyledButtonNextStep>
            </div>
        </div>
    )
}

export default formPage
