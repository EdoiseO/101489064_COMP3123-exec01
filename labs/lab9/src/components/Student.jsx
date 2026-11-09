/* Class component: the default constructor forwards props to Component. */

import { Component } from "react";

class Student extends Component {
  render() {
    const { studentId, firstName, lastName } = this.props;

    return (
      <article>
        <h3>{studentId}</h3>
        <h4>{firstName} {lastName}</h4>
      </article>
    );
  }
}

export default Student;
