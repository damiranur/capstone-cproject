import React, { forwardRef, useImperativeHandle, useRef } from "react";
import classes from "./Education.module.css";
import { Title } from "../Title";
import { TimeLine } from "../TimeLine/TimeLine";
import { data } from "./data";

export const Education = forwardRef((props, ref) => {
  const componentRef = useRef();
  useImperativeHandle(ref, () => ({
    scrollTo: () =>
      componentRef.current.scrollIntoView({
        behavior: "smooth",
      }),
  }));
  return (
    <div id="education" className={classes.educationBox} ref={componentRef}>
      <Title titleName="Education" />
      <TimeLine data={data} />
    </div>
  );
});
