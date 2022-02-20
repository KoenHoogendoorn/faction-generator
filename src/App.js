import React, { useState } from "react";
import classes from "./App.module.scss";

import Button from "./components/Button/Button";
import FactionPanel from "./components/FactionPanel/FactionPanel";

function App() {
  const [factionGenerated, setFactionGenerated] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#062743");
  const [backgroundPattern, setBackgroundPattern] = useState(
    `url(
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23031320' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
       )`
  );
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [leader, setLeader] = useState("");
  const [fadeOutInAnimation, setFadeOutInAnimation] = useState(false);
  //--
  const [fadeOutInToggle, setFadeOutInToggle] = useState("initial");
  const [fadeInAnimation, setFadeInAnimation] = useState(false);

  const backgroundColorData = [
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

  const templePattern = `url(
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23031320' fill-opacity='0.4'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
  )`;

  const hexagonsPattern = `url(
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23031320' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
  )`;

  const autumnPattern = `url(
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='24' viewBox='0 0 88 24'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='autumn' fill='%23031320' fill-opacity='0.4'%3E%3Cpath d='M10 0l30 15 2 1V2.18A10 10 0 0 0 41.76 0H39.7a8 8 0 0 1 .3 2.18v10.58L14.47 0H10zm31.76 24a10 10 0 0 0-5.29-6.76L4 1 2 0v13.82a10 10 0 0 0 5.53 8.94L10 24h4.47l-6.05-3.02A8 8 0 0 1 4 13.82V3.24l31.58 15.78A8 8 0 0 1 39.7 24h2.06zM78 24l2.47-1.24A10 10 0 0 0 86 13.82V0l-2 1-32.47 16.24A10 10 0 0 0 46.24 24h2.06a8 8 0 0 1 4.12-4.98L84 3.24v10.58a8 8 0 0 1-4.42 7.16L73.53 24H78zm0-24L48 15l-2 1V2.18A10 10 0 0 1 46.24 0h2.06a8 8 0 0 0-.3 2.18v10.58L73.53 0H78z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
  )`;

  const backgroundPatternData = [templePattern, hexagonsPattern, autumnPattern];

  const typeData = [
    "Lizardpeople",
    "Ninjas",
    "Pirates",
    "Monks",
    "Zealots",
    "Knights",
    "Cultists",
    "Demons",
    "Angels",
    "Giants",
    "Skeletons",
    "Zombies",
    "Trolls",
    "Druids",
    "Wizards",
    "Bards",
    "Monks",
    "Rangers",
    "Warlocks",
    "Clerics",
    "Paladins",
    "Berserkers",
    "Dwarves",
    "Orcs",
    "Elves",
    "Soldiers",
    "Thieves",
    "Mechanics",
    "Adventurers",
    "Assassins",
    "Merchants",
    "Nobles",
    "Sages",
    "Sailors",
    "Scientists",
    "Urchins",
    "Circus performers",
    "Witches",
    "Musicians",
    "Acolytes",
    "Professors",
    "Rebels",
    "Revolutionaries",
    "Doctors",
    "Robots",
    "Students",
    "Widows",
    "Widowers"
  ];

  const locationData = [
    "in space",
    "underground",
    "in a city",
    "a small town",
    "under the sea",
    "in trees",
    "in hell",
    "in the clouds",
    "in the sewers",
    "in a jungle",
    "in a desert",
    "in a forest",
    "in a swamp",
    "in a volcano",
    "in a tundra",
    "on an island",
    "in a mountain",
    "in a fortress",
    "in a castle"
  ];

  const leaderData = [
    "a god",
    "a demigod",
    "a captain",
    "a general",
    "a bastard",
    "a doctrine",
    "science",
    "knowledge",
    "a book",
    "the elements",
    "a king",
    "a queen",
    "a prince",
    "a princess",
    "a warlord",
    "a behemoth",
    "a leviathan",
    "a reincarnated god",
    "a spiritual leader",
    "a council",
    "a legendary warrior",
    "an eldritch horror",
    "a usurper",
    "a dragon",
    "a business magnate",
    "a charlatan",
    "a dictator",
    "an ancient scripture",
    "a demon"
  ];

  let h1Classes;
  let appClasses = `${classes.App}`;
  let buttonContainerClasses = `${classes.Container} `;

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

  const newContentHandler = () => {
    //set new bg color
    const newBackgroundColor = newItemHandler(
      backgroundColorData,
      backgroundColor
    );
    setBackgroundColor(newBackgroundColor);

    //set new bg pattern
    const newBackgroundPattern = newItemHandler(
      backgroundPatternData,
      backgroundPattern
    );

    setBackgroundPattern(newBackgroundPattern);
    //set new type
    const newType = newItemHandler(typeData, type);
    setType(newType);
    //set new location
    const newLocation = newItemHandler(locationData, location);
    setLocation(newLocation);
    //set new leader
    const newLeader = newItemHandler(leaderData, leader);
    setLeader(newLeader);
  };

  const buttonClicked = () => {
    // if fadeAnimation changes, factionpanel animation will trigger
    setFadeOutInAnimation(!fadeOutInAnimation);
    if (!factionGenerated) {
      newContentHandler();
    } else {
      //leave time for animation
      setTimeout(() => {
        newContentHandler();
      }, 500);
    }
    setFactionGenerated(true);
    // bg fade
    switch (fadeOutInToggle) {
      case "initial": // deze triggered meteen
        setFadeOutInToggle("first");
        break;
      case "first":
        setFadeOutInToggle("fade one");
        break;
      case "fade one":
        setFadeOutInToggle("fade two");
        break;
      case "fade two":
        setFadeOutInToggle("fade one");
        break;
      default:
        break;
    }
  };
  switch (fadeOutInToggle) {
    case "first":
      appClasses = `${classes.App} ${classes.FadeInAnimation}`;
      break;
    case "fade one":
      appClasses = `${classes.App} ${classes.FadeOneBgAnimation}`;
      break;
    case "fade two":
      appClasses = `${classes.App} ${classes.FadeTwoBgAnimation}`;
      break;
    default:
      break;
  }

  if (!factionGenerated) {
    h1Classes = `${classes.TitleMiddle} `;
  } else {
    h1Classes = `${classes.TitleTop} `;
    buttonContainerClasses += `${classes.ButtonContainerBottom} `;
  }

  const button = (
    <div className={buttonContainerClasses}>
      <Button clicked={() => buttonClicked()}></Button>
    </div>
  );

  const appStyle = {
    backgroundColor: backgroundColor,
    backgroundImage: backgroundPattern
  };

  return (
    <React.Fragment>
      <div
        className={`${classes.App} ${classes.ShadowBg} `}
        style={appStyle}
      ></div>
      <div className={appClasses}>
        <h1 className={h1Classes}>
          <span>Faction Generator</span>
        </h1>

        <div className={`${classes.Container} ${classes.FactionContainer}`}>
          <FactionPanel
            factionGenerated={factionGenerated}
            fadeOutInAnimation={fadeOutInAnimation}
            type={type}
            location={location}
            leader={leader}
          />
        </div>
        {button}
      </div>
    </React.Fragment>
  );
}

export default App;
