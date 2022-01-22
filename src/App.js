import React, { useState } from "react";
import classes from "./App.module.scss";

import Button from "./components/Button/Button";

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
        <Button clicked={() => setBackgroundSwitch(!backgroundSwitch)}></Button>
      </div>
    </div>
  );
}

export default App;
