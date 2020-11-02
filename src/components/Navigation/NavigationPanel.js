import React from 'react'
import classesCss from './NavigationPanel.module.css'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const NavigationPanel = (props) => (
    <div className={classesCss.NavContainer}>
        <button onClick={props.onPrevClick}>
            <ChevronLeftIcon fontSize="large" />
        </button>
        <div className={classesCss.Line}></div>
        <button onClick={props.onNextClick}>
            <ChevronRightIcon fontSize="large" />
        </button>
    </div>
)
export default NavigationPanel;