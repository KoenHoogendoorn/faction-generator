import React, { useState } from "react";
import classes from "./App.module.scss";

import Button from "./components/Button/Button";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("blue");
  // const [potentialBackgroundColor, setPotentialBackgroundColor] =
  //   useState(null);
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

  const bgColors = [
    "Brown",
    "Chocolate",
    "DarkCyan",
    "DarkMagenta",
    "MidnightBlue",
    "DarkGreen"
  ];

  let appClasses = `${classes.Standardbg} `;

  const pickRandomColor = (array) => {
    const randomColor = array[Math.floor(Math.random() * array.length)];
    return randomColor;
  };

  const newBgColorHandler = () => {
    const newColor = pickRandomColor(bgColors);

    // if new picked color is the same, remove it from array and return another one
    if (newColor !== backgroundColor) {
      return newColor;
    } else {
      //new array
      const clonedBgColors = [...bgColors];
      let i = clonedBgColors.indexOf(newColor);
      // remove potentialBgcolor value
      clonedBgColors.splice(i, 1);
      // new random color from new array
      const newRandomColor = pickRandomColor(clonedBgColors);
      // return new random color
      return newRandomColor;
    }
  };

  const buttonClicked = () => {
    const newBgColor = newBgColorHandler();
    setBackgroundColor(newBgColor);
    setFactionGenerated(true);
  };

  let h1Classes;
  let buttonContainerClasses = `${classes.Container} `;

  if (!factionGenerated) {
    h1Classes = `${classes.TitleMiddle} `;
  } else {
    h1Classes = `${classes.TitleTop} `;
    buttonContainerClasses += `${classes.ButtonContainerBottom} `;
  }

  const faction = (
    <div className={`${classes.Container} ${classes.FactionContainer}`}>
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

  const button = (
    <div className={buttonContainerClasses}>
      <Button clicked={() => buttonClicked()}></Button>
    </div>
  );

  return (
    <div
      className={`${classes.App} ${appClasses} `}
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <h1 className={h1Classes}>
        <span>Faction Generator</span>
      </h1>
      {factionGenerated ? faction : null}
      {button}
    </div>
  );
}

export default App;
