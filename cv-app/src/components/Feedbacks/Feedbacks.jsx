import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Title } from "../Title";
import { FeedbackCard } from "../FeedbackCard/FeedbackCard";
import { data } from "./data";
import classes from "./Feedbacks.module.css";

export const Feedbacks = forwardRef((props, ref) => {
  const componentRef = useRef();
  useImperativeHandle(ref, () => ({
    scrollTo: () =>
      componentRef.current.scrollIntoView({
        behavior: "smooth",
      }),
  }));
  return (
    <div id="feedbacks" className={classes.feedbacks} ref={componentRef}>
      <Title titleName="Feedbacks" />
      <FeedbackCard data={data} />
    </div>
  );
});
