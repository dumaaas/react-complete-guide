import React from 'react';
import classes from './Person.css';

const Person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}

export default Person;


// RADIUM LESSON -> USING WITH MEDIA QUERIES
// const Person = (props) => {
//   const style = {
//     '@media (min-widht: 500px)': {
//       width: '450px'
//     }
//   };
//   return (
//     <div className="Person" style={style}>
//       <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
//       <p>{props.children}</p>
//       <input type="text" onChange={props.changed} value={props.name} />
//     </div>
//   )
// }

// export default Radium(Person);
