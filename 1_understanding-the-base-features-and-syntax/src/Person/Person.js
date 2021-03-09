

function Person(props) {
  return (
    <div>
      <p> I'm a {props.name} and I am {props.age} yeards old!</p>
      <p>{props.children}</p>
    </div>
  );
}

export default Person;
