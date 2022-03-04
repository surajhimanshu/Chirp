import React from "react";
import { Link, useLocation } from "react-router-dom";
import Styles from "./menu.module.css";
const MenuOption = ({ name, icon, activeIcon }) => {
  const path = name.toLowerCase();
  const { pathname } = useLocation();

  return (
    <>
      <Link
        to={path}
        className={[
          pathname === "/" + path ? Styles.selected : "",
          Styles.link,
        ].join(" ")}
      >
        <div className={Styles.menuOption}>
          <i>{pathname === "/" + path ? activeIcon : icon}</i>
          &nbsp; &nbsp;
          <span className={Styles.menuOptionName}>{name}</span>
        </div>
      </Link>
    </>
  );
};

export default MenuOption;
