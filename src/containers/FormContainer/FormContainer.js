import React from 'react'
import { TextField } from '@material-ui/core'
import FormPage from '../../components/FormPage/FormPage'
import classes from './FormContainer.module.css'
class FormContainer extends React.Component {
    state = {
        page: 1,
    }
    render() {
        return (
            <>
                <form className={classes.FormContainer}>
                    <fieldset>
                        <legend>First Part</legend>
                        <FormPage>
                            <TextField
                                id="outlined-basic"
                                label="Event name"
                                variant="outlined"
                            />
                        </FormPage>
                    </fieldset>
                    <FormPage>
                        <form className={classes.container} noValidate>
                            <TextField
                                id="datetime-local"
                                label="Next appointment"
                                type="datetime-local"
                                defaultValue="2017-05-24T10:30"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                    </FormPage>
                </form>
            </>
        )
    }
}

export default FormContainer
