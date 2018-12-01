import React from 'react';
// import Radium from 'radium';
import classes from './Person.scss';

const Person = ( props ) => {
    // const styles = {
    //     '@media (min-width: 600px)' : {
    //         width: '450px'
    //     }
    // }
    return (
        // style={styles}
        <div  className={classes.Person}>
            <p className={classes.bold} onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default Person;
// export default Radium(person);