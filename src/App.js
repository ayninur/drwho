import React from "react";
import "./App.css";
import DivOne from "./components/divOne";

const App = (props) => {
  const [who, setWho] = React.useState({
    tardis: {
      name: "Time and Relative Dimension in Space",
      caps: false
    }
  });

  return (
    <div>
      <DivOne tardis={who} />
    </div>
  );
};

export default App;
