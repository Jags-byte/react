import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
 
 
const app = props => {
 
  const [personState, setPersonState] = useState( 
      {
        persons : [
          {name:'Jag', age: 37},
          {name:'Anu', age: 36},
          {name:'Daiwik', age: 10}
        ]
      }
    )
  const [nameState, setNameState] = useState('Jagadeesh')
 
  const switchNameHandler = () =>{
    console.log('Clicked');
    setPersonState ( {
      persons : [
        {name:'Jag1', age: 37},
        {name:'Anu1', age: 36},
        {name:'Daiwik1', age: 10}
      ]
    });
    //setNameState('Jagadeesh1');
  }
 
  console.log(personState);
  console.log(nameState);
 
    return (
      <div className="App">
        <h1>Jags first React App.</h1>
        <p> This is really working!</p>
        <button onClick={switchNameHandler}>Switch Names</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}/>   
        <Person name={personState.persons[1].name} age={personState.persons[1].age}/>   
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>   
        </div>
 
     // JSX gets converted to below
     // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Jagdeesh first Element'))
    );
}
 
export default app;
 
 
 
 
 
 
 

