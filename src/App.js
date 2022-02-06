import React, { useState } from "react";
import classes from "./App.module.scss";

import Button from "./components/Button/Button";
import FactionPanel from "./components/FactionPanel/FactionPanel";

function App() {
  const [factionGenerated, setFactionGenerated] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#062743");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [leader, setLeader] = useState("");

  const bgColorData = [
    "#00481D", //forest green
    "#6D214F", //magenta purple
    "#2C3A47", //ships officer grey
    "#cd6133", //chilean fire orange
    "#cc8e35", //alameda ochre
    "#ccae62", //desert
    "#227093", //devil blue
    "#218c74", //palm springs splash turquoise
    "#c23616", //harley davidson orange
    "#B92B27", //quora red
    "#410093", //yahoo purple
    "#A20025", //crimson red
    "#6e304b", //finn redpurple
    "#1c474d", //blue dianne
    "#006992", //bahama blue
    "#d4af37", //gold
    "#019875", //green haze
    "#019875", //brown
    "#34495E", //wet asphalt
    "#bec2cb" //silver
  ];

  const typeData = ["Lizardpeople", "Ninjas", "Pirates", "Monks", "Zealots"];

  const locationData = [
    "in space",
    "underground",
    "a small town",
    "under the sea",
    "in trees"
  ];

  const leaderData = [
    "a god",
    "a captain",
    "a doctrine",
    "the elements",
    "a king",
    "a queen",
    "a prince",
    "a princess",
    "a warlord",
    "a spiritual lader"
  ];

  let appClasses = `${classes.Standardbg} `;

  const pickRandomItem = (array) => {
    const randomItem = array[Math.floor(Math.random() * array.length)];
    return randomItem;
  };

  const newItemHandler = (array, state) => {
    const newItem = pickRandomItem(array);

    // if new picked item is the same, remove it from array and return another one
    if (newItem !== state) {
      return newItem;
    } else {
      //new array
      const clonedItems = [...array];
      let i = clonedItems.indexOf(newItem);
      // remove potentialItem value
      clonedItems.splice(i, 1);
      // new random item from new array
      const newRandomItem = pickRandomItem(clonedItems);
      // return new random item
      return newRandomItem;
    }
  };

  const buttonClicked = () => {
    //set new bg color
    const newBgColor = newItemHandler(bgColorData, backgroundColor);
    setBackgroundColor(newBgColor);
    //set new type
    const newType = newItemHandler(typeData, type);
    setType(newType);
    //set new location
    const newLocation = newItemHandler(locationData, location);
    setLocation(newLocation);
    //set new leader
    const newLeader = newItemHandler(leaderData, leader);
    setLeader(newLeader);

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
      <FactionPanel type={type} location={location} leader={leader} />
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
