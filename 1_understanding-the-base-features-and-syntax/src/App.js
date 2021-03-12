import React, {useState} from 'react';
import "./App.css";
import Person from "./Person/Person";

const App = props => {

  const [ personsState, setPersonsState] = useState ({
    persons: [
      { name: "Marko", age: 28 },
      { name: "Stefan", age: 26 },
      { name: "Bojan", age: 30 },
    ],
    otherState: 'some other value'
  });
  

  const switchNameHandler = () => {

    setPersonsState({
        persons: [
          { name: "Markisa", age: 25 },
          { name: "Stefan", age: 41 },
          { name: "Vujanac", age: 30 },
        ],
        otherState: personsState.otherState
      });
    };
  
 
    
    return (
      <div className="App">
        <h1> Hi, I 'm a React App </h1>
        <p> This is really working </p>
        <button onClick={switchNameHandler}>Switch name</button>
        <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
        />
        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
        />
        <Person
          name={personsState.persons[2].name}
          age={personsState.persons[2].age}
        />
      </div>
    );

}

export default App;

 // state = {
  //   persons: [
  //     { name: "Marko", age: 28 },
  //     { name: "Stefan", age: 26 },
  //     { name: "Bojan", age: 30 },
  //   ]
  // }

  // switchNameHandler = () => {
  //   // Wrong way!
  //   // this.state.persons[0].name = 'Markisa';
  //   // Right way!
  //   this.setState({
  //     persons: [
  //       { name: "Markisa", age: 25 },
  //       { name: "Stefan", age: 41 },
  //       { name: "Vujanac", age: 30 },
  //     ]
  //   })
  // }