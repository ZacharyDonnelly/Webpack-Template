import * as React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const App: React.FunctionComponent = () => {
  return (
    <div>
      <h1>IT'S ALIIIIIIIVE!</h1>
      <Link to="/test">Click me</Link>
    </div>
  );
};

export default App;
