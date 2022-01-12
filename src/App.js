import React, { useState } from "react";
import classes from "./App.module.scss";

function App() {
  const [backgroundSwitch, setBackgroundSwitch] = useState(false);

  let appClasses = `${classes.Standardbg} `;

  if (backgroundSwitch) {
    appClasses = `${classes.Standardbg} `;
  }

  if (backgroundSwitch) {
    appClasses = `${classes.Greenbg} `;
  }

  return (
    <div className={`${classes.App} ${appClasses} `}>
      <h1>Faction Generator</h1>
      <button onClick={() => setBackgroundSwitch(!backgroundSwitch)}>
        Change background
      </button>
    </div>
  );
}

export default App;
