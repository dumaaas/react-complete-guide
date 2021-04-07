import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    // COMPONENT UPDATE LIFECYCYLE (FOR PROPS CHANGES)
    // first step is getDerivedStateFromProps(props, state) 
    // second step is shouldComponentUpdate(nextProps, nextState) -> decide whether to continue or not (may cancel upating process!)
    // third step is render() -> prepare and structure our JSX Code
    // fourth step is getSnapshotBeforeUpdate(prevProps, prevState) -> last-minute DOM ops
    // fifth step is componentDidUpdate() -> component did update
    
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Person.js] getDerivedStateFromProps');
    //     return state;
    // }
    

    // SHOULD NOT BE USED ANYMORE! 
    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillReceiveProps', props);
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Person.js] shouldComponentUpate');
        if(nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Person.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    // most used!
    componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Person.js] componentDidUpdate');
    console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
        
            return (
                <Person 
                    name={person.name} 
                    age={person.age}
                    key={person.id}
                    click={() => this.props.clicked(index)}
                    change = {(event) => this.props.changed(event, person.id)}
                />
            );
        }); 
    }
} 

export default Persons;