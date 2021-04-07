import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
    // it runs for every update
    // also it runs when component is created
    // we can use it for all the things we could have done in componentDidUpdate()
    // IMPORTANT - if we want useEffects to execute only once, instead of second argument [props.persons] we need to pass empty array [] as a second argument
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request ...
        const timer = setTimeout(() => {
            alert('Saved date to cloud!');
        }, 1000);

        // CLEAN UP - it runs BEFORE the main useEffect function runs, but AFTER the (first) render cycle!
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect')
        };
    }, [props.persons]); // execute useEffects() only if Persons component is changed 

    // we can use useEffect as many times as we want
    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return() => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    });

    const assignedClasses = []; // empty
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if(props.personsLength <=2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if(props.personsLength <= 1) {
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

//wrap functional Component that might not need to update with every change in parent Component with memo - optimization! 
export default React.memo(Cockpit);