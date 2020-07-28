import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: '123', name: 'Jag', age: 37 },
      { id: '124', name: 'Anu', age: 36 },
      { id: '125', name: 'Daiwik', age: 10 }
    ],
    showPersons: false
  }
 
  deletePersonHandler = (personIndex) => {
    //Copies the array to a new array.
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }
 
  changeNameHandler = (event, id) => {
    console.log('Change Name Handler');
    // Similar to Map, findIndex also takes a function as an argument, but the return just has to be a boolean.
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
 
    // Good practice to always copy the state object/array and not be update (mutate) the objects directly.
    const newPersonObj = {
      ...this.state.persons[personIndex]
    }
    newPersonObj.name = event.target.value;
 
    const personsCopy = [...this.state.persons];
    // Alternate code - not preferred. First argument is an empty Object. This function will copy all the properties from the second object and return a new Object.
    //const newPersonObj = Object.assign({}, this.state.persons[personIndex])
    personsCopy[personIndex] = newPersonObj;
 
    this.setState({ persons: personsCopy });
  }
 
  toggleNameHandler = () => {
    const showVal = this.state.showPersons;
    this.setState({ showPersons: !showVal })
  }
 
  render() {
 
    let personVal = null; 
    
    if (this.state.showPersons) {
      //Since this is a single JSX component, the enclosing paranthesis () is not needed.
      personVal = <Persons
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.changeNameHandler}
          />;
    }
 
    return (
      <div className={classes.App}>
        <Cockpit
          persons = {this.state.persons}
          showPersons = {this.state.showPersons}
          clicked = {this.toggleNameHandler}
        />
        {personVal}
       </div>
    );
  }
}
 
export default App;
 

