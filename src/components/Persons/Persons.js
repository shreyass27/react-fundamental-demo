import React from 'react';
import Person from './Person/Person';

const Persons = (props) => (
      props.persons.map(
        (person, index) => (
          <Person
            key={person.id}
            position={index}
            name={person.name}
            age={person.age}
            click={ () => props.deletePerson(index)}
            changed={(event) => props.nameChangedHandler(event, person.id)}
          />
        ) 
      )
);


// React memo is used to optimize render of Functional/Stateless components
// It calls re-render for a component only if Props are changed
// A SHALLOW COMPARION of CURRENT and NEW PROPS is done
// And component is re-rendered if changes are detected on TOP-LEVEL of props object
export default React.memo(Persons);