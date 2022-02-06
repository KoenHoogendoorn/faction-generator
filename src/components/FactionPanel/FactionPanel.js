import React from "react";
import classes from "./FactionPanel.module.scss";

const FactionPanel = (props) => (
  <div className={classes.FactionPanel}>
    <div className={`${classes.Dot} ${classes.Top} ${classes.Left}`}></div>
    <div className={`${classes.Dot} ${classes.Top} ${classes.Right}`}></div>
    <div className={`${classes.Dot} ${classes.Bottom} ${classes.Right}`}></div>
    <div className={`${classes.Dot} ${classes.Bottom} ${classes.Left}`}></div>
    <i></i>
    {`${props.type} ${props.location} who follow ${props.leader}`}
  </div>
);

export default FactionPanel;
