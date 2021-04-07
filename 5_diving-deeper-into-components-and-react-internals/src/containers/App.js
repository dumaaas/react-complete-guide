import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// CLASS BASED COMPONENTS
class App extends Component {

  //Component Creation Lifecycle in Action
  //first step is constructor() -> starting creation of component
  //second step is getDerivedStateFromProps() -> geting state from props
  //third step is render() -> prepare & structure our JSX Code 
  //fourth step is componentWillMount -> just before component mounting
  //fifth step is componentDidMount -> component did mount xD
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 1, name: "Marko", age: 28 },
      { id: 2, name: "Stefan", age: 26 },
      { id: 3, name: "Bojan", age: 30 },
    ],
    otherState: 'some other value',
    showPersons: false,
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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

  nameChangedHandler = (event, id) => {
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
    console.log('[App.js] render');
    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          title = {this.props.appTitle}
          showPersons={this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonsHandler}
        />  
        {persons}
      </div>
    );

  }
}

export default App




