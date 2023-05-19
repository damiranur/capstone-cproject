import React, { useRef, useEffect, useState } from "react";
import classes from "./Inner.module.css";
import { Box } from "../../components/Box";
import { Education } from "../../components/Education/Education";
import { Experience } from "../../components/Experience/Experience";
import { Portfolio } from "../../components/Portfolio/Portfolio";
import { Contacts } from "../../components/Contacts/Contacts";
import { Feedbacks } from "../../components/Feedbacks/Feedbacks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../components/Button/Button";
import { SideBarNav } from "../../components/SideBarNav/SideBarNav";

export function InnerPage() {
  const boxRef = useRef();
  const eduRef = useRef();
  const expRef = useRef();
  const portfolioRef = useRef();
  const contactsRef = useRef();
  const feedbackRef = useRef();

  const handleCkick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const elements = {
    box: boxRef,
    edu: eduRef,
    exp: expRef,
    portfolio: portfolioRef,
    contacts: contactsRef,
    feedback: feedbackRef,
  };

  const [sideBarWidth, setSideBarWidth] = useState("full");
  useEffect(() => {
    function handleWindowResize() {
      if (window.innerWidth > 600) {
        setSideBarWidth("full");
      } else {
        setSideBarWidth("min");
      }
    }
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const sideBarWidthClassName = () => {
    switch (sideBarWidth) {
      case "full":
        return classes.innerContent;
      case "min":
        return classes.innerContentMin;
      case "none":
        return classes.innerContentNone;
      default:
        break;
    }
  };

  const sideBarWrapperWidthClassName = () => {
    switch (sideBarWidth) {
      case "full":
        return classes.navWrapper;
      case "min":
        return classes.navWrapperMin;
      case "none":
        return classes.navWrapperNone;
      default:
        break;
    }
  };

  const showHideSideBar = () => {
    if (sideBarWidth === "none") {
      if (window.innerWidth > 600) {
        setSideBarWidth("full");
      } else {
        setSideBarWidth("min");
      }
    } else setSideBarWidth("none");
  };

  return (
    <div className={classes.innerPage}>
      <div className={sideBarWrapperWidthClassName()}>
        <SideBarNav
          elements={elements}
          showHideSideBar={showHideSideBar}
          sideBarWidth={sideBarWidth}
        />
      </div>
      <div className={sideBarWidthClassName()}>
        <Box ref={boxRef} />
        <Education ref={eduRef} />
        <Experience ref={expRef} />
        <Portfolio ref={portfolioRef} />
        <Contacts ref={contactsRef} />
        <Feedbacks ref={feedbackRef} />
        <div className={classes.upBtn}>
          <Button
            icon={<FontAwesomeIcon icon={faChevronUp} onClick={handleCkick} />}
          />
        </div>
      </div>
    </div>
  );
}
