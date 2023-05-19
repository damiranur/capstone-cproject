import React from "react";
import classes from "./HomePage.module.css";
import { PhotoBox } from "../../components/PhotoBox/PhotoBox";
import PhotoImg from "../../assets/images/photo.jpg";
import { LinkBtn } from "../../components/LinkBtn/LinkBtn";

export function HomePage() {
  return (
    <div className={classes.homePage}>
      <div className={classes.homePageBox}>
        <PhotoBox
          name="Damira Nurgaziyeva"
          title="Junior Front-End Developer"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
          avatar={PhotoImg}
          className={classes.cropPhoto}
        />
        <div>
          <LinkBtn
            text="Know more"
            href="./inner/about"
            className={classes.knowMoreBtn}
          />
        </div>
      </div>
    </div>
  );
}
