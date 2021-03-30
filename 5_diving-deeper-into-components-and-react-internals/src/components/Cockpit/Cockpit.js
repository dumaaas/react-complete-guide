import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = []; // empty
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if(props.persons.length <=2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if(props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    return (
        <div className={classes.Cockpit}>
            <h1> Hi, I 'm a React App </h1>
            <p> This is title from Index.js through App.js and now its here on Cockpit.js --- {props.title}</p>
            <p className={assignedClasses.join(' ')}> This is really working </p>
            <button 
            onClick={props.clicked}
            className={btnClass}>
                Show Persons
            </button> 
        </div>
    );
};

export default cockpit;