import React from "react";
import classes from "./FeedbackCard.module.css";

export function FeedbackCard(props) {
  return (
    <div>
      <ul className={classes.feedback}>
        {props.data.map((el) => (
          <li key={el.name}>
            <blockquote>
              <div className={classes.info}>
                <p>{el.description}</p>
              </div>
              <div className={classes.feedbackReporter}>
                <img
                  className={classes.feedbackReporterPhoto}
                  src={el.src}
                  alt={el.title}
                ></img>
                <cite>
                  <span>{el.name} </span>
                  <a href={el.href}> {el.linkName}</a>
                </cite>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}
