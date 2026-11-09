/* Top-level functional component for the Week 09 lab. */

import College from "./components/College.jsx";
import Student from "./components/Student.jsx";
import reactLogo from "./assets/react.svg";

function App({ title, subtitle }) {
  return (
    <section className="lab-page">
      <img className="react-logo" src={reactLogo} alt="React logo" />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <Student studentId="101489064" firstName="Phillip" lastName="Onofua" />
      <College name="George Brown College" city="Toronto" />
    </section>
  );
}

export default App;
