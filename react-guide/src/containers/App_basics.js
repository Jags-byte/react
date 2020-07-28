import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
 
 
class App extends Component {
  state = {
    persons : [
      {name:'Jag', age: 37},
      {name:'Anu', age: 36},
      {name:'Daiwik', age: 10}
    ]
  }
 
  switchNameHandler = (newName) =>{
    console.log('switchNameHandler');
    this.setState ( {
      persons : [
        {name: newName, age: 37},
        {name:'Anu1', age: 36},
        {name:'Daiwik1', age: 10}
      ]
    })
  } 
 
  changeNameHandler = (event) =>{
    console.log('Change Name Handler');
    this.setState ( {
      persons : [
        {name: 'Jag', age: 37},
        {name: event.target.value,  age: 36},
        {name: 'Daiwik', age: 10}
      ]
    })
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '2px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
 
    return (
      <div className="App">
        <h1>Jags first React App.</h1>
        <p> This is really working!</p>
        <button style={style} onClick={this.switchNameHandler.bind(this, 'JagNew')}>Switch Names</button>
        <button onClick={() => this.switchNameHandler('JagNewSyntax')}>Switch Names Different Syntax</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>   
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          switchName={this.switchNameHandler.bind(this, 'fromPerson')}  
          changed={this.changeNameHandler}
        />    
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>   
        </div>
 
     // JSX gets converted to below
     // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Jagdeesh first Element'))
    );
  }
}
 
export default App;
 

