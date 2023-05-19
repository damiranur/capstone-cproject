import React from "react";
import classses from "./Info.module.css";

export function Info(props) {
  return (
    <div>
      <h3></h3>
      <p>{props.text}</p>
    </div>
  );
}
