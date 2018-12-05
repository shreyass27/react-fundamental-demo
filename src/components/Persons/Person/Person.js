import React, { Component } from 'react';
// import Radium from 'radium';
import classes from './Person.scss';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxi';

import { AuthContext } from '../../../containers/App';

class Person extends Component {
   
    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
    }

    componentDidMount() {
        if (this.props.position === 0) {
            this.nameInput.current.focus();
        }
    }

    render() {
        return (
            <Aux>
                <AuthContext.Consumer>
                    { (auth) => auth && (<p>User is authenticated</p>) }
                </AuthContext.Consumer>
                <p className={classes.bold} onClick={this.props.click}>
                I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input
                ref={ this.nameInput}    type="text"
                onChange={this.props.changed} value={this.props.name} />
            </Aux>
        )
    }
};

export default withClass(Person, classes.Person);
// export default Radium(person);