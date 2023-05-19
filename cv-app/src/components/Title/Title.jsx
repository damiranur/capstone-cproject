import React from "react";
import classes from "./Title.module.css";

export function Title(props) {
  return <div className={classes.title}>{props.titleName}</div>;
}
