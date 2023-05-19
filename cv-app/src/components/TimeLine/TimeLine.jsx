import React from "react";
import classes from "./TimeLine.module.css";

export function TimeLine(props) {
  return (
    <div className={classes.timeline}>
      {/* <div className="spinner">
        <i></i>
      </div> */}
      <ul className={classes.timelineList}>
        {props.data.map((el) => (
          <li key={el.date}>
            <div className={classes.timelineDate}>{el.date}</div>
            <div className={classes.timelineEvent}>
              <div className={classes.info}>
                <h3>{el.title}</h3>
                <p>{el.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
