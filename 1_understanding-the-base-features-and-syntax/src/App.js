import "./App.css";
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1> Hi, I 'm a React App </h1>
      <p> This is really working </p>
      <Person name="Marko" age="25"/>
      <Person name="Stefan" age="26">My Hobbies: Racing</Person>
      <Person name="Bojan" age="24"/>

    </div>
  );
}

export default App;
