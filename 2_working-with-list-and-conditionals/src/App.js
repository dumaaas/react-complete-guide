import React, {Component} from 'react';
import "./App.css";
import Person from "./Person/Person";

// CLASS BASED COMPONENTS
class App extends Component {
  state = {
    persons: [
      { name: "Marko", age: 28 },
      { name: "Stefan", age: 26 },
      { name: "Bojan", age: 30 },
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

  nameChangedHanlder = (event) => {
    this.setState( {
      persons: [
        { name: "Marko", age: 28 },
        { name: event.target.value, age: 26 },
        { name: "Bojan", age: 30 },
      ]
    })
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
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                    name={person.name} 
                    age={person.age}
                    click={() => this.deletePersonHandler(index)}
                    />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1> Hi, I 'm a React App </h1>
        <p> This is really working </p>
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

export default App;

//FUNCTIONAL BASED COMPONENTS
// const App = props => {

//   const [ personsState, setPersonsState] = useState ({
//     persons: [
//       { name: "Marko", age: 28 },
//       { name: "Stefan", age: 26 },
//       { name: "Bojan", age: 30 },
//     ],
//     otherState: 'some other value'
//   });
  

//   const switchNameHandler = () => {

//     setPersonsState({
//         persons: [
//           { name: "Markisa", age: 25 },
//           { name: "Stefan", age: 41 },
//           { name: "Vujanac", age: 30 },
//         ],
//         otherState: personsState.otherState
//       });
//     };
  
 
    
//     return (
//       <div className="App">
//         <h1> Hi, I 'm a React App </h1>
//         <p> This is really working </p>
//         <button onClick={switchNameHandler}>Switch name</button>
//         <Person
//           name={personsState.persons[0].name}
//           age={personsState.persons[0].age}
//           click={this.switchNameHandler}
//         />
//         <Person
//           name={personsState.persons[1].name}
//           age={personsState.persons[1].age}
//         />
//         <Person
//           name={personsState.persons[2].name}
//           age={personsState.persons[2].age}
//         />
//       </div>
//     );
// }



