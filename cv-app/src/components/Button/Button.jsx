import React from "react";
import classes from "./Button.module.css";

export function Button(props) {
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.icon}
    </button>
  );
}
