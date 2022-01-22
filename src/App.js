import React, { useState } from "react";
import classes from "./App.module.scss";

import Button from "./components/Button/Button";

function App() {
  const [backgroundSwitch, setBackgroundSwitch] = useState(false);
  const [factionGenerated, setFactionGenerated] = useState(false);

  // const type = ["Lizardpeople", "Ninjas", "pirates", "monks", "zealots"];
  // const location = [
  //   "Space",
  //   "underground",
  //   "small town",
  //   "under the sea",
  //   "in trees"
  // ];
  // const leader = [
  //   "a god",
  //   "a captain",
  //   "a doctrine",
  //   "the elements",
  //   "a king",
  //   "a queen",
  //   "a prince",
  //   "a princess",
  //   "a warlord",
  //   "a spiritual lader"
  // ];

  // const [factionData, setFactionData] = useState({
  //   type: "",
  //   location: "",
  //   leader: ""
  // });

  let appClasses = `${classes.Standardbg} `;

  if (backgroundSwitch) {
    appClasses = `${classes.Standardbg} `;
  }

  if (backgroundSwitch) {
    appClasses = `${classes.Greenbg} `;
  }

  let h1Classes;
  let buttonContainerClasses = `${classes.Container} `;

  if (!factionGenerated) {
    h1Classes = `${classes.TitleMiddle} `;
  }

  if (factionGenerated) {
    h1Classes = `${classes.TitleTop} `;
    buttonContainerClasses += `${classes.ButtonContainerBottom} `;
  }

  const button = (
    <div className={buttonContainerClasses}>
      <Button
        clicked={() => setBackgroundSwitch(setFactionGenerated(true))}
      ></Button>
    </div>
  );

  const faction = (
    <div class={`${classes.Container} ${classes.FactionContainer}`}>
      <div className={classes.Faction}>
        <div className={`${classes.Dot} ${classes.Top} ${classes.Left}`}></div>
        <div className={`${classes.Dot} ${classes.Top} ${classes.Right}`}></div>
        <div
          className={`${classes.Dot} ${classes.Bottom} ${classes.Right}`}
        ></div>
        <div
          className={`${classes.Dot} ${classes.Bottom} ${classes.Left}`}
        ></div>
        <i></i>
        Testerino
      </div>
    </div>
  );

  return (
    <div className={`${classes.App} ${appClasses} `}>
      <h1 className={h1Classes}>
        <span>Faction Generator</span>
      </h1>
      {factionGenerated ? faction : null}
      {button}
    </div>
  );
}

export default App;
