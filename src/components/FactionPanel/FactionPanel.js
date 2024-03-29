import React, { useState, useEffect } from "react";
import classes from "./FactionPanel.module.scss";

const FactionPanel = (props) => {
  const [fadeOutInToggle, setFadeOutInToggle] = useState("initial");

  let factionPanelClasses = `${classes.FactionPanel} ${classes.HiddenFactionPanel} `;

  if (!props.factionGenerated) {
    factionPanelClasses += `${classes.HiddenFactionPanel} `;
  } else {
    factionPanelClasses = `${classes.FactionPanel} `;
  }

  useEffect(() => {
    console.log(`${fadeOutInToggle} 2`);

    switch (fadeOutInToggle) {
      case "initial": // deze triggered meteen
        setFadeOutInToggle("first");
        break;
      case "first":
        setFadeOutInToggle("second");
        break;
      case "second":
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
  }, [props.fadeOutInAnimation]);

  switch (fadeOutInToggle) {
    case "first":
      factionPanelClasses += `${classes.HiddenFactionPanel} `;
      break;
    case "second":
      factionPanelClasses += `${classes.FadeInAnimation} `;
      break;
    case "fade one":
      factionPanelClasses += `${classes.FadeOneAnimation} `;
      break;
    case "fade two":
      factionPanelClasses += `${classes.FadeTwoAnimation} `;
      break;
    default:
      break;
  }

  return (
    <div className={factionPanelClasses}>
      <div className={`${classes.Dot} ${classes.Top} ${classes.Left}`}></div>
      <div className={`${classes.Dot} ${classes.Top} ${classes.Right}`}></div>
      <div
        className={`${classes.Dot} ${classes.Bottom} ${classes.Right}`}
      ></div>
      <div className={`${classes.Dot} ${classes.Bottom} ${classes.Left}`}></div>
      {`${props.type} ${props.location} who follow ${props.leader}`}
    </div>
  );
};

export default FactionPanel;
