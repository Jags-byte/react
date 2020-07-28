import React from 'react';
import Person from './Person/Person';

//If the arrow function is only one line, {} & return () can be omitted. 
// A simple paranthesis would have been fine like (props) => (multiple_lines); But in this case even that can be omitted.
const persons = (props) => props.persons.map((person, index) => {
        return <Person
          click={() => props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => props.changed(event, person.id)} />
      });

export default persons;