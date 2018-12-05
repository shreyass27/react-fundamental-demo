import React, { Component } from 'react';
import classes from './App.scss';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import Radium, { StyleRoot } from 'radium';
export const AuthContext = React.createContext(false);

class App extends Component {
  state = {
    persons: [
      { id: 'sdasdadsad', name: 'Max', age: 28 },
      { id: 'sdadcxvsad', name: 'Manu', age: 29 },
      { id: 'sdads123ad', name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false,
    authenticated: false
  }

  deletePerson = ( index ) => {
    this.setState(
      (state) => {
        const persons = state.persons.slice();
        persons.splice(index, 1);
        return { persons }
      });
  }

  nameChangedHandler = ( event, personId ) => {
    event.persist()
    this.setState( (state) => { 
        const personIndex = state.persons.findIndex(
          personObj => personObj.id === personId
        )
        const persons = [...state.persons];
        persons[personIndex] = {
          ...state.persons[personIndex],
          name: event.target.value
        }

        return { persons };
     });
  }

  togglePersonsHandler = () => {
    this.setState( (state) => ({ showPersons: !state.showPersons }) );
  }

  toggleLoginHandler = () => {
    this.setState( (state) => ({ authenticated: !state.authenticated }) );
  }

  render () {

    return (
      // <StyleRoot>
        <div className={classes.App}>
          <Cockpit 
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            togglePersonsHandler={this.togglePersonsHandler}
          />
          <button onClick={this.toggleLoginHandler}>Toggle Login</button>
          {this.state.showPersons && (
            <AuthContext.Provider value={this.state.authenticated} >
              <Persons
                deletePerson={this.deletePerson}
                persons={this.state.persons}
                nameChangedHandler={this.nameChangedHandler}
              />
            </AuthContext.Provider>
          )}
        </div>
      // </StyleRoot>
    );
  }
}

export default App;
// export default Radium(App);
