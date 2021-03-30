import React, {Component} from 'react';
import "./App.css";
import Radium from 'radium';
import Person from "./Person/Person";

// CLASS BASED COMPONENTS
class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Marko", age: 28 },
      { id: 2, name: "Stefan", age: 26 },
      { id: 3, name: "Bojan", age: 30 },
    ],
    otherState: 'some other value',
    showPersons: false,
  }

  switchNameHandler = (newName) => {
    // Wrong way!
    // this.state.persons[0].name = 'Markisa';
    // Right way!
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Stefan", age: 26 },
        { name: "Vujanac", age: 30 },
      ]
    })
  }

  nameChangedHanlder = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //alternative of above
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {

    //bad way - updating state mutably
    //const persons = this.state.persons;

    //better way- updating state immutably
    // making copy of array
    // const persons = this.state.persons.slice();

    //another way
    const persons = [...this.state.persons];
    
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                    name={person.name} 
                    age={person.age}
                    key={person.id}
                    click={() => this.deletePersonHandler(index)}
                    changed = {(event) => this.nameChangedHanlder(event, person.id)}
                    />
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    //Setting class names dynamically 
    const classes = []; // empty
    if(this.state.persons.length <=2) {
      classes.push('red'); // classes = ['red']
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1> Hi, I 'm a React App </h1>
        <p className={classes.join(' ')}> This is really working </p>
        {/* One way to bind value and execute function on click  */}
        <button 
          onClick={this.togglePersonsHandler}
          style={style}>
            Show Persons
        </button> 
        {persons}
      </div>
    );

  }
}

export default Radium(App);




