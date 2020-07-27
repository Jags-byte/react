import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
 
 
 
 
 
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
    let btnClass = [classes.Button];
 
    if (this.state.showPersons) {
      personVal = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.changeNameHandler(event, person.id)} />
          })}
        </div>
      );
      btnClass.push(classes.Red);
    }
 
    const classesPara = [];
    if (this.state.persons.length <= 2) {
      classesPara.push(classes.red); //['red'] if the number of persons is less than or equal to two.
    }
    if (this.state.persons.length <= 1) {
      classesPara.push(classes.red); //['red', 'bold'] if the number of persons is less than or equal to 1.
    }
 
    return (
      <div className={classes.App}>
        <h1>Jags first React App.</h1>
        <p className={classesPara.join(' ')}> This is really working!</p>
        <button className={btnClass.join(' ')} onClick={this.toggleNameHandler}>Toggle Names</button>
        {personVal}
 
      </div>
      // JSX gets converted to below
      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Jagdeesh first Element'))
    );
  }
}
 
export default App;
 

