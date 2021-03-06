import React from 'react';
import './Person.css';

const Person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}

// function Person(props) {
//   return (
//     <div>
//       <p> I'm a {props.name} and I am {props.age} yeards old!</p>
//       <p>{props.children}</p>
//     </div>
//   );
// }

export default Person;
