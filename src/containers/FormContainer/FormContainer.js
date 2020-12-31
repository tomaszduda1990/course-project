import React from 'react'
import { TextField } from '@material-ui/core'
import FormPage from '../../components/FormPage/FormPage'
import Search from '../../components/Search/Search'
import Summary from '../../components/FormPage/Summary/Summary'
import { validateTextField, validateDateField } from '../utils/utils'
import classes from './FormContainer.module.css'
import { withRouter } from 'react-router-dom'

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
                isValid: false,
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
                touched: false,
            },
        },
        valid: false,
        loading: false,
    }
    onTimeChangeHandler = (e) => {
        const val = e.target.value
        const copiedDetails = { ...this.state.details[e.target.type] }
        const copiedValidation = { ...this.state.validation[e.target.type] }
        copiedDetails[e.target.type] = val
        copiedValidation.touched = true
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
        validationPrice.touched = true
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
        validationDescription.touched = true
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

    onImageSearchInputTouch = () => {
        this.setState({
            validation: {
                ...this.state.validation,
                image: {
                    ...this.state.validation.image,
                    touched: true,
                },
            },
        })
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

    nextPageHandler = () => {
        const val = this.state.page + 1
        this.setState({ page: val })
    }

    prevPageHandler = () => {
        const val = this.state.page - 1
        this.setState({ page: val })
    }

    resetFormHandler = () => {
        this.setState({
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
                    isValid: false,
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
                    touched: false,
                },
            },
            valid: false,
            loading: false,
        })
        setTimeout(() => {
            this.props.history.replace('/')
        }, 500)
    }

    render() {
        const nameError =
            !this.state.validation.name.isValid &&
            this.state.validation.name.touched
        const imgError =
            !this.state.validation.image.isValid &&
            this.state.validation.image.touched
        const dateError =
            !this.state.validation.date.isValid &&
            this.state.validation.date.touched
        const timeError =
            !this.state.validation.time.isValid &&
            this.state.validation.time.touched
        const priceError =
            !this.state.validation.price.isValid &&
            this.state.validation.price.touched
        const descriptionError =
            !this.state.validation.description.isValid &&
            this.state.validation.description.touched
        let renderedElement
        switch (this.state.page) {
            case 1:
                renderedElement = (
                    <FormPage
                        isValid={
                            this.state.validation.image.isValid &&
                            this.state.validation.name.isValid
                        }
                        pageNum={1}
                        nextPage={this.nextPageHandler}
                        prevPage={this.prevPageHandler}
                    >
                        <fieldset>
                            <legend>Let's start</legend>
                            <TextField
                                name="name"
                                error={nameError}
                                id={
                                    nameError
                                        ? 'outlined-basic'
                                        : 'filled-error'
                                }
                                label={
                                    nameError
                                        ? 'please provide correct name'
                                        : 'event name'
                                }
                                variant="outlined"
                                onInput={this.onNameChangeHandler}
                            />
                            <Search
                                submitImg={this.onSearchImageCompletedHandler}
                                selectedImg={this.state.details.image}
                                removeImg={this.onSelectedImageRemoval}
                                onTouch={this.onImageSearchInputTouch}
                                error={imgError}
                            />
                        </fieldset>
                    </FormPage>
                )
                break
            case 2:
                renderedElement = (
                    <FormPage
                        isValid={
                            this.state.validation.date.isValid &&
                            this.state.validation.time.isValid
                        }
                        pageNum={2}
                        nextPage={this.nextPageHandler}
                        prevPage={this.prevPageHandler}
                    >
                        <fieldset>
                            <legend>When</legend>
                            <TextField
                                error={dateError}
                                id="date"
                                label={
                                    dateError
                                        ? 'please select at least 2 days ahead'
                                        : 'Event date'
                                }
                                type="date"
                                defaultValue=""
                                className={classes.textField}
                                onChange={this.onTimeChangeHandler}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                error={timeError}
                                id="time"
                                label={timeError ? 'please complete' : 'Time'}
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
                )
                break
            case 3:
                renderedElement = (
                    <FormPage
                        isValid={
                            this.state.validation.price.isValid &&
                            this.state.validation.description.isValid
                        }
                        pageNum={3}
                        nextPage={this.nextPageHandler}
                        prevPage={this.prevPageHandler}
                    >
                        <fieldset>
                            <legend>Details</legend>
                            <TextField
                                error={priceError}
                                id="standard-number"
                                label={
                                    priceError
                                        ? 'please provide correct price'
                                        : 'Price $'
                                }
                                className={classes.textField}
                                type="number"
                                onChange={this.onPriceChangeHandler}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                error={descriptionError}
                                id="outlined-textarea"
                                label={
                                    descriptionError
                                        ? 'description should have than 15 characters'
                                        : 'Event description'
                                }
                                placeholder="description..."
                                className={classes.textField}
                                onChange={this.onDescriptionChangeHandler}
                                multiline
                                variant="outlined"
                            />
                        </fieldset>
                    </FormPage>
                )
                break
            case 4:
                renderedElement = this.state.valid ? (
                    <Summary
                        {...this.state.details}
                        loading={this.state.loading}
                        prevPage={this.prevPageHandler}
                        onSubmit={() => {
                            this.setState({ loading: true })
                            this.props.formSubmission(
                                this.state.details,
                                this.resetFormHandler
                            )
                        }}
                    />
                ) : null
                break
            default:
                renderedElement = null
                break
        }

        return <form className={classes.FormContainer}>{renderedElement}</form>
    }
}

export default withRouter(FormContainer)
