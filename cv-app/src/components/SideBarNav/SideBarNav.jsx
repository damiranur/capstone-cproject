import React, { useEffect, useState } from "react";
import classes from "./SideBarNav.module.css";
import { PhotoBox } from "../PhotoBox/PhotoBox";
import PhotoImg from "../../assets/images/photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { NavBurgerMenu } from "../NavBurgerMenu/NavBurgerMenu";
import { data } from "./data";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { LinkBtn } from "../LinkBtn/LinkBtn";

export function SideBarNav({ elements, showHideSideBar, sideBarWidth }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [activeLink, setActiveLink] = useState("box");
  const { collapseSidebar } = useProSidebar();

  useEffect(() => {
    function handleWindowResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleClick = (element) => {
    elements[element]?.current.scrollTo();
    setActiveLink(element);
  };

  const handleBurgerMenuClick = () => {
    collapseSidebar();
    showHideSideBar();
  };

  const moveBurgerMenu = () => {
    switch (sideBarWidth) {
      case "full":
        return classes.burgerMenu;
      case "min":
        return classes.burgerMenuMin;
      case "none":
        return classes.burgerMenuNone;
      default:
        break;
    }
  };

  return (
    <div className={classes.proSidebar}>
      <div onClick={handleBurgerMenuClick} className={moveBurgerMenu()}>
        <NavBurgerMenu />
      </div>
      <Sidebar
        backgroundColor="#222935"
        collapsedWidth="0px"
        width={width > 600 ? "270px" : "80px"}
        style={{ height: "100%" }}
      >
        <PhotoBox
          name={width ? " " : "Damira Nurgaziyeva"}
          avatar={PhotoImg}
          className={width > 600 ? classes.bigPhotoBox : classes.smallPhotoBox}
        ></PhotoBox>
        <Menu className={classes.navContainer} backgroundColor="#222935">
          {data.map((el) => (
            <MenuItem
              key={el.ref}
              icon={<FontAwesomeIcon icon={el.icon} />}
              style={{ backgroundColor: "#222935" }}
              component={<Link to={el.href}></Link>}
              onClick={() => handleClick(el.ref)}
              className={
                el.ref === activeLink ? classes.active : classes.inactive
              }
            >
              {el.linkName}
            </MenuItem>
          ))}
        </Menu>
        <LinkBtn
          icon={<FontAwesomeIcon icon={faAngleLeft} />}
          text={width > 600 ? " Go back" : ""}
          href="../"
          className={classes.btnGoBack}
        />
      </Sidebar>
    </div>
  );
}
