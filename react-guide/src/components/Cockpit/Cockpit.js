import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    const classesPara = [];
    if (props.persons.length <= 2) {
      classesPara.push(classes.red); //['red'] if the number of persons is less than or equal to two.
    }
    if (props.persons.length <= 1) {
      classesPara.push(classes.red); //['red', 'bold'] if the number of persons is less than or equal to 1.
    }

    let btnClass = '';
 
    if (props.showPersons) {
      btnClass = classes.Red;
    }
 

    return(
        <div className={classes.Cockpit}>
            <h1>Jags first React App.</h1>
            <p className={classesPara.join(' ')}> This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Names</button>
        </div>
        );
}

export default cockpit;