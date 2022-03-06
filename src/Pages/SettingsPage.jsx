import React from "react";
import Styles from "../features/Home/home.module.css";
import Settings from "../features/Setting&Privacy/Setting";

const SettingsPage = () => {
  return (
    <>
      <div className={Styles.feed}>
        <Settings />
      </div>
    </>
  );
};

export default SettingsPage;
