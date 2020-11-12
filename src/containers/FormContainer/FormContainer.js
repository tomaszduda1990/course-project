import React from 'react'
import { TextField } from '@material-ui/core'
import FormPage from '../../components/FormPage/FormPage'
import { validateField } from '../utils/utils'
import classes from './FormContainer.module.css'

class FormContainer extends React.Component {
    state = {
        page: 1,
        details: {
            name: '',
            price: 0,
            description: '',
            date: '',
            time: '',
        },
        validation: {
            name: {
                isRequired: true,
                isValid: false,
                touched: false,
            },
            price: {
                isRequired: false,
                isValid: false,
                touched: false,
            },
            description: {
                isRequired: false,
                isValid: false,
                touched: false,
            },
            date: {
                isRequired: true,
                isValid: false,
                touched: false,
            },
            time: {
                isRequired: true,
                isValid: false,
                touched: false,
            },
        },
    }
    onTimeChangeHandler = (e) => {
        const val = e.target.value
        const copiedDetails = { ...this.state.details }
        copiedDetails[e.target.type] = val
        const checkToBig =
            parseInt(val.split('-')[0]) <= new Date().getFullYear() + 5 // today year + 5
        const checkToSmall =
            new Date().getTime() + 86400000 < new Date(val).getTime() //  todayTimestamp + 24hrs
        if (checkToBig && checkToSmall) {
            this.setState({ details: copiedDetails })
        } else {
            alert('error')
        }
    }

    onNameChangeHandler = (e) => {
        const val = e.target.value
        const copiedDetails = { ...this.state.details }
        const validationName = { ...this.state.validation.name }

        copiedDetails.name = val
        validationName.touched = true
        console.log(val.length)
        const isValid = validateField(
            validationName.isRequired,
            val.length > 0 && val.length < 25,
            validationName.touched
        )

        if (isValid) {
            validationName.isValid = isValid
            console.log(validationName)
            this.setState({
                details: copiedDetails,
                validation: {
                    ...this.state.validation,
                    name: validationName,
                },
            })
        } else {
            this.setState({
                validation: {
                    ...this.state.validation,
                    name: validationName,
                },
            })
        }
    }

    onPriceChangeHandler = (e) => {
        const val = e.target.value
        const copiedDetails = { ...this.state.details }
        copiedDetails.price = val
        this.setState({ details: copiedDetails })
    }

    onDescriptionChangeHandler = (e) => {
        const val = e.target.value
        const copiedDetails = { ...this.state.details }
        copiedDetails.description = val
        this.setState({ details: copiedDetails })
    }
    render() {
        const nameInputClasses = [classes.NameContainer]
        const nameIsValid =
            this.state.validation.name.isValid &&
            this.state.validation.name.touched

        console.log(nameIsValid)
        return (
            <>
                <form className={classes.FormContainer}>
                    <fieldset>
                        <legend>Let's start</legend>
                        <FormPage>
                            <TextField
                                className={nameInputClasses.join(' ')}
                                id="outlined-basic"
                                label="Event name"
                                variant="outlined"
                                onInput={this.onNameChangeHandler}
                            />
                        </FormPage>
                    </fieldset>
                    <FormPage>
                        <fieldset>
                            <legend>When</legend>
                            <TextField
                                id="date"
                                label="Event date"
                                type="date"
                                defaultValue=""
                                className={classes.textField}
                                onChange={this.onTimeChangeHandler}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="time"
                                label="Time"
                                type="time"
                                defaultValue="00:00"
                                onChange={this.onTimeChangeHandler}
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
                                onChange={this.onPriceChangeHandler}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="outlined-textarea"
                                label="Event description"
                                placeholder="description..."
                                className={classes.textField}
                                onChange={this.onDescriptionChangeHandler}
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
