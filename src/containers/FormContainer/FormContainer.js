import React from 'react'
import { TextField } from '@material-ui/core'
import FormPage from '../../components/FormPage/FormPage'
import Search from '../../components/Search/Search'
import Summary from '../../components/FormPage/Summary/Summary'
import { validateTextField, validateDateField } from '../utils/utils'
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
                isValid: true,
                touched: false,
            },
            price: {
                isValid: false,
                touched: false,
            },
            description: {
                isValid: false,
                touched: false,
            },
            date: {
                isValid: false,
                touched: false,
            },
            time: {
                isValid: false,
                touched: false,
            },
            image: {
                isValid: false,
            },
        },
        valid: false,
    }
    onTimeChangeHandler = (e) => {
        const val = e.target.value
        const copiedDetails = { ...this.state.details[e.target.type] }
        const copiedValidation = { ...this.state.validation[e.target.type] }
        copiedDetails[e.target.type] = val
        copiedValidation.touched = true
        console.log(copiedDetails)
        if (
            e.target.type === 'date' &&
            validateDateField(val, copiedValidation.touched)
        ) {
            this.setState({
                details: {
                    ...this.state.details,
                    [e.target.type]: copiedDetails[e.target.type],
                },
                validation: {
                    ...this.state.validation,
                    [e.target.type]: {
                        ...copiedValidation,
                        isValid: true,
                    },
                },
            })
        } else if (
            e.target.type === 'date' &&
            !validateDateField(val, copiedValidation.touched)
        ) {
            e.target.classList.add('incorrect')
            this.setState({
                validation: {
                    ...this.state.validation,
                    [e.target.type]: {
                        ...copiedValidation,
                        isValid: false,
                    },
                },
            })
        } else if (e.target.type === 'time' && val !== '') {
            this.setState({
                details: {
                    ...this.state.details,
                    [e.target.type]: copiedDetails[e.target.type],
                },
                validation: {
                    ...this.state.validation,
                    [e.target.type]: {
                        ...copiedValidation,
                        isValid: true,
                    },
                },
            })
        } else if (
            e.target.type === 'time' &&
            val === '' &&
            copiedValidation.touched
        ) {
            this.setState({
                validation: {
                    ...this.state.validation,
                    [e.target.type]: {
                        ...copiedValidation,
                        isValid: false,
                    },
                },
            })
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
        const validationPrice = { ...this.state.validation.price }
        copiedDetails.price = val
        if (val >= 0) {
            validationPrice.isValid = true
            this.setState({
                details: copiedDetails,
                validation: {
                    ...this.state.validation,
                    price: {
                        ...this.state.validation.price,
                        ...validationPrice,
                    },
                },
            })
        } else {
            validationPrice.isValid = false
            this.setState({
                validation: {
                    ...this.state.validation,
                    price: {
                        ...this.state.validation.price,
                        ...validationPrice,
                    },
                },
            })
        }
    }

    onDescriptionChangeHandler = (e) => {
        const val = e.target.value
        const copiedDetails = { ...this.state.details }
        copiedDetails.description = val
        const validationDescription = { ...this.state.validation.description }
        if (copiedDetails.description.length > 15) {
            validationDescription.isValid = true
            this.setState({
                details: { ...copiedDetails },
                validation: {
                    ...this.state.validation,
                    description: {
                        ...this.state.validation.description,
                        ...validationDescription,
                    },
                },
            })
        } else {
            validationDescription.isValid = false
            this.setState({
                validation: {
                    ...this.state.validation,
                    description: {
                        ...this.state.validation.description,
                        ...validationDescription,
                    },
                },
            })
        }
    }

    onSearchImageCompletedHandler = (img) => {
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

    applicationValidation = () => {
        let isApplicationFormValid = true
        for (let key in this.state.validation) {
            isApplicationFormValid =
                isApplicationFormValid && this.state.validation[key].isValid
        }
        console.log(isApplicationFormValid)
        this.setState({ valid: isApplicationFormValid })
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            JSON.stringify(prevState.validation) !==
            JSON.stringify(this.state.validation)
        ) {
            this.applicationValidation()
        }
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
                                defaultValue=""
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
                    {this.state.valid ? (
                        <Summary {...this.state.details} />
                    ) : null}
                </form>
            </>
        )
    }
}

export default FormContainer
