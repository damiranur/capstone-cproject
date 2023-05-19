import React from "react";
import classes from "./PhotoBox.module.css";

export function PhotoBox(props) {
  return (
    <figure className={classes.photoBox}>
      <div className={props.className}>
        <img
          src={props.avatar}
          alt="userPhoto"
        ></img>
      </div>
      <figcaption>
        <strong>{props.name}</strong>
        <article>
          <header className={classes.title}>{props.title}</header>
          <div className={classes.description}>{props.description}</div>
        </article>
      </figcaption>
    </figure>
  );
}
