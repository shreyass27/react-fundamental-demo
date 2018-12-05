import React, { Fragment } from 'react';
import classes from './Cockpit.scss';
// import Aux from '../../hoc/Auxi';

const CockPit = (props) => {
    const assignedClasses = [];
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.redText);
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <Fragment>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')} >This is really working!</p>
            <button
                className={ props.showPersons ? [classes.list_toggle_button, classes.red].join(' ') : classes.list_toggle_button}
                onClick={props.togglePersonsHandler}>Toggle Persons</button>
        </Fragment>
    )
};

export default CockPit;