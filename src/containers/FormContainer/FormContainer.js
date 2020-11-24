import React from 'react'
import { TextField } from '@material-ui/core'
import FormPage from '../../components/FormPage/FormPage'
import Search from '../../components/Search/Search'
import Summary from '../../components/FormPage/Summary/Summary'
import { validateTextField } from '../utils/utils'
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
            image: {},
        },
        validation: {
            name: {
                isRequired: true,
                isValid: true,
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
            image: {
                isValid: false,
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
        validationName.isValid = validateTextField(
            val,
            validationName.touched,
            0,
            25
        )

        if (validationName.isValid) {
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

    onSearchImageCompletedHandler = (img) => {
        console.log(img)
        this.setState({
            details: {
                ...this.state.details,
                image: {
                    ...this.state.details,
                    ...img,
                },
            },
            validation: {
                ...this.state.validation,
                image: {
                    ...this.state.validation.image,
                    isValid: true,
                },
            },
        })
    }

    onSelectedImageRemoval = () => {
        this.setState({
            details: {
                ...this.state.details,
                image: {},
            },
            validation: {
                ...this.state.validation,
                image: {
                    ...this.state.validation.image,
                    isValid: false,
                },
            },
        })
    }

    render() {
        const nameInputClasses = [classes.NameContainer]
        let labelName = 'Event name'
        if (!this.state.validation.name.isValid) {
            nameInputClasses.push(classes.Error)
            labelName = 'Error: name should have 1-25 characters'
        }

        return (
            <>
                <form className={classes.FormContainer}>
                    <FormPage
                        isValid={
                            this.state.validation.image.isValid &&
                            this.state.validation.name.isValid
                        }
                    >
                        <fieldset>
                            <legend>Let's start</legend>
                            <TextField
                                name="name"
                                className={nameInputClasses.join(' ')}
                                id="outlined-basic"
                                label={labelName}
                                variant="outlined"
                                onInput={this.onNameChangeHandler}
                            />
                            <Search
                                submitImg={this.onSearchImageCompletedHandler}
                                selectedImg={this.state.details.image}
                                removeImg={this.onSelectedImageRemoval}
                            />
                        </fieldset>
                    </FormPage>

                    <FormPage
                        isValid={
                            this.state.validation.date.isValid &&
                            this.state.validation.time.isValid
                        }
                    >
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
                    <FormPage
                        isValid={
                            this.state.validation.price.isValid &&
                            this.state.validation.description.isValid
                        }
                    >
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
                    {/* <Summary details={this.state.details} /> */}
                </form>
            </>
        )
    }
}

export default FormContainer
