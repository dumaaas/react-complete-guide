import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    // it runs for every update
    // also it runs when component is created
    // we can use it for all the things we could have done in componentDidUpdate()
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request ...
    });

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