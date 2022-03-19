import React from "react";
import classes from "./Button.module.scss";

const Button = (props) => (
  <button className={classes.Button} onClick={props.clicked}>
    Generate faction
  </button>
);
export default Button;
