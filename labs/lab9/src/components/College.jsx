/* Functional component: receive the college name and city through props. */

function College({ name, city }) {
  return (
    <footer>
      <h5>{name}, {city}</h5>
    </footer>
  );
}

export default College;
