import React, { forwardRef, useImperativeHandle, useRef } from "react";
import classes from "./Experience.module.css";
import { Title } from "../Title";
import { data } from "./data";
import { Expertise } from "../Expertise/Expertise";

export const Experience = forwardRef((props, ref) => {
  const componentRef = useRef();
  useImperativeHandle(ref, () => ({
    scrollTo: () =>
      componentRef.current.scrollIntoView({
        behavior: "smooth",
      }),
  }));

  return (
    <div id="experience" className={classes.experienceBox} ref={componentRef}>
      <Title titleName="Experience" />
      <Expertise data={data} />
    </div>
  );
});
