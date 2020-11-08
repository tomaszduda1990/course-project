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
                        <legend>Let's start</legend>
                        <FormPage>
                            <TextField
                                id="outlined-basic"
                                label="Event name"
                                variant="outlined"
                            />
                        </FormPage>
                    </fieldset>
                    <FormPage>
                        <fieldset>
                            <legend>When</legend>
                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                defaultValue=""
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="time"
                                label="Time"
                                type="time"
                                defaultValue="00:00"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300, // 5 min
                                }}
                            />
                        </fieldset>
                    </FormPage>
                    <FormPage>
                        <fieldset>
                            <legend>Details</legend>
                            <TextField
                                id="standard-number"
                                label="Price $"
                                className={classes.textField}
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="outlined-textarea"
                                label="Event description"
                                placeholder="description..."
                                className={classes.textField}
                                multiline
                                variant="outlined"
                            />
                        </fieldset>
                    </FormPage>
                </form>
            </>
        )
    }
}

export default FormContainer
