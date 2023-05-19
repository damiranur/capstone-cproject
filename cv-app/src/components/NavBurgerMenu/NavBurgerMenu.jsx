import React from "react";
import classes from "./NavBurgerMenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export function NavBurgerMenu() {
  return (
    <div className={classes.burgerLines}>
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
}
