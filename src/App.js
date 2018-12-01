import React, { Component } from 'react';
import classes from './App.scss';
import Person from './Person/Person';
// import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: 'sdasdadsad', name: 'Max', age: 28 },
      { id: 'sdadcxvsad', name: 'Manu', age: 29 },
      { id: 'sdads123ad', name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePerson = ( index ) => {
    const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({ persons })
  }

  nameChangedHandler = ( event, personId ) => {
    const personIndex = this.state.persons.findIndex(
      personObj => personObj.id === personId
    )
    const persons = [...this.state.persons];
    persons[personIndex] = {
      ...this.state.persons[personIndex],
      name: event.target.value
    }
    this.setState({ persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  personJsxFn() {
    if ( this.state.showPersons ) {
      return (
        <div> 
          {
            this.state.persons.map(
              (person, index) => (
                <Person
                  key={person.id}
                  name={person.name}
                  age={person.age}
                  click={this.deletePerson.bind( this, index)}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              ) 
            )
          }
        </div>
      );
    }
    return null;
  }

  render () {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      color: 'white'
    };

    const persons = this.personJsxFn();
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push('red');
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push('bold');
    }

    return (
      // <StyleRoot>
        <div className={classes.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join(' ')} >This is really working!</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
      // </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
// export default Radium(App);
