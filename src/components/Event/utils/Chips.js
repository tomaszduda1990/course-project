import React from 'react'
import classes from "./Chips.module.css";

const Chips = (props) => {
    const containerClass = classes[props.element] + " " + classes.Chips;
    return (
        <div className={containerClass}>
            <span>{props.text ? props.text : null} {props.data}</span>
        </div>
    )
}

export default Chips;