import React from "react";
import classes from "./Expertise.module.css";

export function Expertise(props) {
  return (
    <div>
      <ul className={classes.expertiseList}>
        {props.data.map((el) => (
          <li key={el.date}>
            <div className={classes.expertiseListDate}>
              <h3>{el.info.job}</h3>
              <span className={classes.date}>{el.date}</span>
            </div>
            <div className={classes.expertiseListInfo}>
              <h3>{el.info.company}</h3>
              <p>{el.info.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
