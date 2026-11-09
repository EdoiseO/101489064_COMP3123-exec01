/*
We will define a functional component (using a prototype constructor)
Props: name, city



function College(props){
    const name = props.name
    const city = props.city

    const { name, city } = props;
}
*/

function College({ name, city }) {
  return (
    <article>
      The name of the college is: {name}, and city is {city}
    </article>
  );
}

export default College;
