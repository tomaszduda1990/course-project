import React from 'react'
import { Button, Chip } from '@material-ui/core'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import EventIcon from '@material-ui/icons/Event'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder'
import classes from './Summary.module.css'

export const Summary = ({
    name,
    price,
    description,
    image,
    date,
    time,
    onSubmit,
    prevPage,
}) => {
    return (
        <div className={classes.Summary}>
            <div className={classes.ImgContainer}>
                <img src={image.webformatURL} alt={image.tags} />
            </div>
            <div className={classes.ChipsContainer}>
                <Chip
                    icon={<AttachMoneyIcon />}
                    label={price}
                    variant="outlined"
                />
                <Chip icon={<EventIcon />} label={date} variant="outlined" />
                <Chip
                    icon={<QueryBuilderIcon />}
                    label={time}
                    variant="outlined"
                />
            </div>
            <h2 className={classes.EventTitle}>{name}</h2>
            <p className={classes.EventDescription}>{description}</p>
            <div className={classes.BtnContainer}>
                <Button onClick={prevPage}>Edit event</Button>
                <Button variant="contained" color="primary" onClick={onSubmit}>
                    Submit
                </Button>
            </div>
        </div>
    )
}

export default Summary
