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
      <h1>
        <span>Faction Generator</span>
      </h1>
      <div class={classes.ButtonContainer}>
        <button
          class={classes.GenerateButton}
          onClick={() => setBackgroundSwitch(!backgroundSwitch)}
        >
          <i></i>
          Generate faction
        </button>
      </div>
    </div>
  );
}

export default App;
